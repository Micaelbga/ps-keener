<script setup>
import CardItem from '../components/CardItem.vue'
</script>

<template>
    <div class="container">
       <div class="row">
            <div class="col-4">
                <h2>Cadastrar produto</h2>
                <Form ref="formItem" class="container-input" @submit="createItem">
                    <div class="input-box">
                        <label for="name">Nome:</label>
                        <Field name="name" type="text" id="name" v-model="item.name" :rules="validateField"/>
                        <ErrorMessage name="name" style="color: red;"/>
                    </div>

                    <div class="input-box">
                        <label for="price">Valor:</label>
                        <Field name="price" type="number" id="price" v-model="item.price" :rules="validateField"/>
                        <ErrorMessage name="price" style="color: red;"/>
                    </div>

                    <div class="input-box">
                        <label for="amount">Quantidade:</label>
                        <Field name="amount" type="number" id="amount" v-model="item.amount" :rules="validateField"/>
                        <ErrorMessage name="amount" style="color: red;"/>
                    </div>
                    <button class="btn btn-primary">Adicionar</button>
                </Form>
                <Button class="btn btn-secondary"><RouterLink to="/store">Voltar</RouterLink></Button>
            </div>
            <div class="col-8">
                <!--histórico de cadastros-->
                <CardItem v-for="item in this.itemArray" :data="item"/>
            </div>
       </div>
    </div>
</template>

<script>
import StoreService from '../service/StoreService'
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
            item: {
                name: null,
                price: null,
                amount: null
            },
            err: ''
        }
    },
    methods:{
        validateField(value) {
            if (!value) {
                return 'Campo obrigatório';
            }
            return true;
        },
        createItem(values){
            StoreService.postItem(this.item);
        }
    },
    async created(){
        try{
            this.itemArray = await StoreService.getStore();
        } catch(err){
            this.err = err.message
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
    height: 500px;
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

.col-8{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
</style>