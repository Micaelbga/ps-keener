<script setup>
import StoreHistory from '../components/StoreHistory.vue'
</script>

<template>
    <div class="container">
       <div class="row">
            <div class="col-4">
                <h2>Remover do estoque</h2>
                <Form class="container-input" @submit="removeAmount">
                    <div class="input-box">
                        <label for="item">Item:</label>                       
                        <select  name="item" id="item" v-model="selectedItem" @change="validateSelect">
                            <option disabled value="">Selecione um item</option>
                            <option  :value="item" v-for="item in this.itemArray">{{ item.name }}</option>
                        </select>
                    </div>
                    <div class="input-box">
                        <label for="amount">Quantidade atual: {{ selectedItem.amount }}</label>
                    </div>
                    <div class="input-box">
                        <label for="newAmount">Quantidade a Remover:</label>
                        <Field name="newAmount" type="number" id="newAmount" v-model="newAmount" :rules="validateField"/>
                        <ErrorMessage name="newAmount" style="color: red;"></ErrorMessage>
                    </div>
                    <button class="btn btn-primary" :disabled="disableButton">Remover do estoque</button>

                </Form>
                
               <Button class="btn btn-secondary"><RouterLink to="/store">Voltar</RouterLink></Button>
            </div>
            <div class="col-8">
                <!--histórico de cadastros-->
                <StoreHistory v-for="history in this.historyArray" :data="history"/>
            </div>
       </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import StoreService from '../service/StoreService';
import { Form, Field, ErrorMessage} from 'vee-validate'

export default {
    components:{
        Form,
        Field,
        ErrorMessage
    },
    data(){
        return{
            itemArray: [],
            historyArray: [],
            item:{
                name: null,
                amount:null,
            },
            newAmount: '',
            selectedItem: '',
            disableButton:true
        }
    },
    methods:{
        validateSelect(){
            if(this.selectedItem != ''){
                this.disableButton = false
            }
        },
        validateField(value) {
            if (!value) {
                return 'Campo obrigatório';
            }
            return true;
        },
        async removeAmount(values){
            onAuthStateChanged(getAuth(),(user)=>{
                let updateAmount = parseInt(this.selectedItem.amount) - parseInt(this.newAmount);
                let movedAmount = parseInt(this.newAmount);
                let email = user.email;

                StoreService.updateItem(this.selectedItem._id, this.selectedItem.name, updateAmount, movedAmount,  false, email);
            })
        }
    },
    async created(){
        try{
            this.itemArray = await StoreService.getStore();
            this.historyArray = await StoreService.getHistory();
        } catch(err){
            console.log(err);
        }
        
    }
}
</script>

<style scoped>
.container{
    margin: 50px;
    background-color: white;
    padding: 0px;
}
.container-input{
    display: flex;
    flex-direction: column;
}
.input-box {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
}
.col-4{
    border-right: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.row{
    min-height: 500px;
}
.btn{
    margin-top: 50px
}

a:link{
    text-decoration: none;
    color: white;
}
a:visited{   
    text-decoration: none;
    color: white;
}
</style>