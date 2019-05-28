<template>
    <div id="app">
         <div class="app-content">
             <div>
                 <h2>Why Alpha ?</h2>
             </div>
             <div class="item">
                 <div class="card">
                    <h3>Accessible</h3>
                    <p>Add all your cards to your Alpha account, and fund your account easily whenever you choose to.</p>
                 </div>
                 <div class="card">
                     <h3>Safe and Secure</h3>
                     <p>Alpha is PCI DSS certified, rest assured your payment and transaction details are well secured with us.</p>
                 </div>
                 <div class="card">
                     <h3>Excellent Support</h3>
                     <p>We promise an awesome experience when using any of our services, however our customer support agents are available round the clock.</p>
                 </div>
             </div>
         </div>
    </div>
</template>

<style scoped>
h2{
    font-size:30px;
}
h3{
    font-size:16px;
}

p{
    font-size:13px;
}
#app{
    background-color: #232e42;
    color:#fff;
    padding-bottom:10%;
    box-sizing:border-box;
}

.app-content{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding:5% 10%;
     font-family:'Poppins' ,sans-serif;
}

.item{
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    margin-top:3rem;
}

.card{
    box-sizing: border-box;
    width:30%;
    padding: 2rem;
    padding-top:4rem;
    height:40vh;
    background: #fff;
    color:#232e42;
    border-radius:5px;
    transition: all 0.5s;
}
.card:hover{
    margin-top:-2rem;
    border:1px solid #fc0a7e;
}
.card:hover>h3{
    color:#fc0a7e;
}
 @media screen and (max-width:990px){
   .card{
       padding: 1rem;
       font-size:0.8rem;
       width:32%;
       box-sizing: border-box;
   }

   .app-content{
       padding:5%;
   }
} 
@media screen and (max-width:590px){
    .item{
        flex-direction:column;
    }
    .card{
        width:100%;
        margin-top:1rem;
        height:20vh;
    }
}
</style>

