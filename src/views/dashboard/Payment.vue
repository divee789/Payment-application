<template>
<div class="pay">
<div class="app">
    <div class="app-content">
       <div class="graph">
           <div class="head"><div class="span">Payment Volume</div> </div>
           <app-graph></app-graph>
       </div>

       <div class="card-holder">
         <div class="card" id="methods">
            <h3>Payments methods</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quis provident ex cumque aperiam</p>
         </div>
         <div class="card" id="invoice">
           <h3>Payment invoice</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore, illum temporibus obcaecati</p>
         </div>
       </div>
    </div>


    <div class="payment-footer">
       <div class="debt bar">
           <h3>Lorem</h3>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia ut accusantium illum tempore mag</p>
       </div>
       <div class="right bar">
           <div class="bar-content boleft">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla distinctio porro vitae id amet ducimus earum as
           </div>
           <div class="bar-content boright">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non, distinctio 
           </div>
       </div>
    </div>

<div>
  
</div>
    
</div>
</div>
</template>

<script>
export default {
    components:{
        'app-graph': () => import ('@/components/user/paymentGraph'),
    }
}
</script>

<style scoped>
.pay{
 margin-top: 2rem;
}
.app{
   
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    padding: 2% 2%;
}

.app-content{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.head{
    width:100%;
    background: #dd1173;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align:start;
    color:#fff;
    font-size:14px;
    height:40px;
}
.span{
    padding-top:15px;
    padding-left:5px;
}
.graph{
    background:#fff;
    border-radius:10px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.02);
    width:55%;
    padding-top:0;
    margin-top:0;
    box-sizing: border-box;
    
}
.card-holder{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    width:35%;
}

.card{
    padding: 1rem;
    box-shadow:  0 0 8px 0 rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.02);
    text-align:start;
    border-radius: 5px;
    height:40%;
     transition: all 0.5s;
     cursor: pointer;
}
#methods{
    background:linear-gradient(135deg, #dd1173, #350e47);
    color:#fff;
  
}
#invoice{
    background:#fff;
    color:linear-gradient(135deg, #dd1173, #350e47);
}
#methods:hover,#invoice:hover{
    box-shadow: 0px 3px 10px rgba(0,0,0,.8);
}
.payment-footer{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    text-align:start;
    padding:2%;
}
.bar{
     padding: 20px;
    box-shadow:  0 0 8px 0 rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.02);
    text-align:start;
    border-radius: 5px;
    color:#fff;
}
.debt{
    width:30%;
    background:#fff;
    color:#350e47
}
.right{
    width:60%;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
      background:#350e47;
}
.bar-content{
    width:50%;
}
.boleft{
    border-right: 2px solid #dd1173;
}

.boright{
    padding-left:15px;
}
@media screen and (max-width:600px){
    .app-content{
        flex-direction: column;
    }
    .graph ,.card-holder{
       width:100%;
       margin-top:2rem;
    }
    .card{
        margin-top:15px;
    }
    .payment-footer{
        flex-direction:column-reverse;
        font-size:11px;
    }
    .debt{
        width:90%;
    }
    .right{
        width:90%;
        margin:10px 0;
    }
}
</style>


