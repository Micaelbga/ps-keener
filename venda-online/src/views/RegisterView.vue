<template>
    <div class="container">
        <div class="sub-container">
            <div class="input-area">
                <div class="input-box">
                    <label for="email">Email:</label>
                    <input v-model="user.email" type="email">
                </div>
                <div class="input-box">
                    <label for="senha">Senha:</label>
                    <input v-model="user.password" type="password">
                </div>
            </div>
            <span class="register-box">
              <p>Já tem uma conta? &nbsp;</p>
              <RouterLink to="/login">Entrar</RouterLink>
            </span>
            <div class="button-box">
                <button class="btn btn-primary" v-on:click="registerUser">Cadastrar</button>
            </div>
          </div>
    </div>
  </template>
  
<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
  data(){
    return {
      user:{
        email: null,
        password: null
      }
    }
  },
  methods:{
    registerUser(){
      createUserWithEmailAndPassword(getAuth(),this.user.email,this.user.password)
        .then((data)=>{
          console.log(getAuth().currentUser);
          this.$router.push('/store');
        })
        .catch((err)=>{
          console.log(err);
        })
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}
.sub-container{
  background-color: white;
  height: 350px;
  width: 300px;
  border: 1px solid grey;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
}
.register-box{
  display: flex;
}
.input-area{
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.input-box{
  display: flex;
  flex-direction: column;
}

.button-box{
  display: flex;
  justify-content: space-around;
  width: 300px;
}

</style>
