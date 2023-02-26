<script setup>

</script>
<template>
    <nav class="navbar bg-light">
        <div class="container-fluid">
            <span class="navbar-brand"><RouterLink to="/">Home</RouterLink></span>
            <ul>
                <li class="nav-item"><RouterLink to="/login">Login</RouterLink></li>
                <li class="nav-item"><RouterLink to="/signin">Sign-in</RouterLink></li>
                <li class="nav-item"><RouterLink to="/logout">Logout</RouterLink></li>
            </ul>
        </div>
    </nav>
</template>

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