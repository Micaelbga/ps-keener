<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ data.name }}</h5>
            <h6 class="card-subtitle">Preço: R$ {{ data.price }}</h6>
            <p class="card-text">Qnt: {{ data.amount }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Object
        }
    }
}
</script>

<style scoped>
.card{
    width: 150px;
    height: 100px;
    margin: 5px;
}
</style>