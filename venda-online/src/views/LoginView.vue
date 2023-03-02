<template>
  <div class="container">
    <div class="sub-container">

      <div class="input-area">
        <div class="email-box">
          <label for="email">Email:</label>
          <input id="email" v-model="user.email">
        </div>

        <div class="password-box">
          <label for="senha">Senha:</label>
          <input id="password" type="password" v-model="user.password">
        </div>
      </div>

      <span class="register-box">
        <p>Não tem uma conta? &nbsp;</p>
        <RouterLink to="/register">Cadastre-se</RouterLink>
      </span>

      <div class="button-box">
        <button class="btn btn-primary" v-on:click="loginUser">Entrar</button>
      </div>

    </div>
  </div>
</template>
  
<script>
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export default {
  data(){
    return{
      user:{
        email: null,
        password: null
      }
    }
  },
  methods:{
    loginUser(){
      signInWithEmailAndPassword(getAuth(),this.user.email,this.user.password)
        .then((data)=>{
          console.log(data);
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
.signup-button {
  text-decoration: none;
  color: white;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}

.sub-container {
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

.input-area {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.email-box {
  display: flex;
  flex-direction: column;
}

.register-box{
  display: flex;
}

.password-box {
  display: flex;
  flex-direction: column;
}

.button-box {
  display: flex;
  justify-content: space-around;
  width: 300px;
}
</style>
  