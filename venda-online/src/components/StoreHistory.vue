<template>
    <div class="card">
        <div class="card-header">
            <div class="header-box">
                <p>Item: &nbsp;</p>
                <span class="item-name">{{ data.itemName }}</span>
            </div>
            <span class="date-info">{{ data.date }}</span>
        </div>
        
        <div class="card-body">
            <div class="amount-box">
                <p class="card-title">Quantidade movimentada: &nbsp;</p>
                <span v-if="data.isAddedOnStore == 'true'" style="color:green"> {{ data.movedAmount }}</span>
                <span v-else style="color:red"> {{ data.movedAmount }}</span>
            </div>
            <p class="card-text">Responsável: {{ data.email }}</p>
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            textColor:''
        }
    },  
    props:{
        data:{
            type:Object
        }
    }
}
</script>

<style>
.card{
    margin: 10px 5px 0px 5px;
}
.card-header{
    display: flex;
    justify-content: space-between;
    height: 30px;
    padding: 0px 15px 0px 15px;
}
.header-box{
    display: flex;
}
.item-name{
    font-weight: bold;;
}
.card-body{
    height: 60px;
    padding: 0px;
    padding-left: 20px;
}
.amount-box{
    display: flex;
}
</style>