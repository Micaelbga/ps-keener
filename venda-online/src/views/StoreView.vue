<script setup>
import CardItem from '../components/CardItem.vue';
</script>

<template>
    <div class="container">
        <nav class="navbar bg-light">
            <ul class="container-fluid">
                <li class="nav-item"><Button class="btn btn-secondary"><RouterLink to="/createitem">Cadastrar produto</RouterLink></Button></li>                
                <li class="nav-item"><Button class="btn btn-secondary"><RouterLink to="/additem">Adicionar ao estoque</RouterLink></Button></li>                
                <li class="nav-item"><Button class="btn btn-secondary"><RouterLink to="/removeitem">Retirar do estoque</RouterLink></Button></li>                
            </ul>
        </nav>
        <div class="store-box">
            <!--produtos container-->
            <CardItem v-for="item in this.itemArray" :data="item"/>
        </div>
    </div>
</template>

<script>
import StoreService from '../service/StoreService';

export default {
    data(){
        return{
            itemArray: [],
            err: ''
        }
    },
    async created(){
        try{
            this.itemArray = await StoreService.getStore();
        }catch(err){
            this.err = err.message;
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
a:link{
    text-decoration: none;
    color: white;
}
a:visited{   
    text-decoration: none;
    color: white;
}
.navbar{
    border-bottom: 1px solid grey;
}
.nav-item{
    display: inline-block;
}

.store-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>