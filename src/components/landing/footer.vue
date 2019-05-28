<template>
    <div id="footer">
       
           <router-link class="rout" to='/' tag="div">About</router-link>
       
       
           <router-link class="rout" to="/" tag="div">Contacts</router-link>
       
       
           <router-link class="rout" to="/" tag="div">Developers</router-link>
       
       
           <router-link class="rout" to="/" tag="div">Terms of Services</router-link>
    
    </div>
</template>


<style scoped>
#footer{
    display:flex;
    justify-content: space-around;
    margin:0 10%;
    padding:5%;
}

.rout{
    font-size:16px;
    color:#6c7378;
    cursor:pointer;
}
.rout:hover{
    color:#000;
}

@media screen and (max-width: 600px){
    #footer{
        flex-direction: column-reverse;
    }
}

.rout{
    margin-top: 1rem;
}
</style>


