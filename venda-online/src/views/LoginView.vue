<template>
    <div class="container">
      <div class="sub-container">
        
        <div class="input-area">
          <div class="email-box">
            <label for="email">Email:</label>
            <input v-model="email" id="email">
          </div>
  
          <div class="password-box">
            <label for="senha">Senha:</label>
            <input v-model="password" id="password" type="password">
          </div>
        </div>
  
        <div class="button-box">
          <button class="btn btn-primary">Cadastrar-se</button>
          <button class="btn btn-primary">Entrar</button>
        </div>
  
      </div>
    </div>
  </template>
  
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
  
  .input-area{
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .email-box{
    display: flex;
    flex-direction: column;
  }
  
  .password-box{
    display: flex;
    flex-direction: column;
  }
  
  .button-box{
    display: flex;
    justify-content: space-around;
    width: 300px;
  }
  
  </style>
  