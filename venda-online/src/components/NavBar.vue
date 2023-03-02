<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <span class="navbar-brand"><RouterLink to="/">Home</RouterLink></span>
            <ul>
                <li class="nav-item"><RouterLink v-if="isLoggedIn" to="/store">Store</RouterLink></li>
                <li class="nav-item"><RouterLink v-if="!isLoggedIn" to="/login">Login</RouterLink></li>
                <li class="nav-item"><RouterLink v-if="!isLoggedIn" to="/register">Sign-up</RouterLink></li>
                <li class="nav-item"><RouterLink v-on:click="logoutUser" v-if="isLoggedIn" to="/">Logout</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { onMounted, ref } from 'vue';

const isLoggedIn = ref(false);

let auth;
onMounted(()=>{
    auth = getAuth();
    onAuthStateChanged(auth, (user)=>{
        if(user){
            isLoggedIn.value = true;
        }else{
            isLoggedIn.value = false;
        }
    })
})

const logoutUser = () =>{
    signOut(auth).then(()=>{
        router.push('/');
    })
}
</script>

<style scoped>

.navbar{
    border-bottom: 1px solid grey;
}
.nav-item{
    display: inline-block;
}

a:link {
    text-decoration: none;
    padding: 16px;
    border-radius: 5px;
}

a:hover{
    background-color: grey;
}

</style>