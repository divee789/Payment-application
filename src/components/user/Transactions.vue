<template>

<div class="app">

<div class="app-content">
    <div class="tracker">
      <div class="history">Payments History</div>
      <div class=history-content>
        <p><img src="/images/letter.png" alt="history.png"></p>
        <p class="head">No History Today</p>
        <button>Make Payments</button>
      </div>
    </div>

    <div class="items">
        <div class="sub-items" @click="navigateToBitcoin">
          <p>
            <img class="img" src="/images/Bitcoin.png" alt="bitcoin.png">
          </p>
            <p class="head">
              Buy Bitcoin
            </p>
            <p>
              Faster,Safer,Promoting the cashless policy
            </p>
        </div>
        <div class="sub-items" @click="navigateToBitcoin">
            <p>
              <img class="img" src="/images/naira.png" alt="naira.png">
            </p>
            <p class="head">
              Sell Bitcoin
            </p>
            <p>
              Convert your cryptocurrency to cash
            </p>
        </div>

    </div>

    <div class="items">
      <div class="sub-items"  @click="Transfer">
          <p>
            <img class="img" src="/images/transfer.png">
          </p>
          <p class="head">
            Transfer Funds
          </p>
          <p>
           0 Transfers today
          </p>
      </div>
      <div class="sub-items" @click="Loan">
        <p>
           <img class="img" src="/images/request.png" alt="">
        </p>
        <p class="head">
           Request Funds/Loans
        </p>
        <p>
          Available only to premium clients.
        </p>
      </div>
      <div>

      </div>
    </div>
</div>

</div>



</template>


<script>

export default {
methods:{
  navigateToBitcoin(){
    this.$router.push('/dashboard/bitcoin');
  },
  Transfer(){
    this.$router.push("/dashboard/transfer")
  },
  Loan(){
    this.$router.push("/dashboard/loans")
  }
}
}
</script>

<style>
.app-content{
  display:flex;
  flex-direction:row;
  justify-content:space-around;;
  height:100%;
  width:99.9%;
  margin-bottom:2rem;
  font-weight:500; 
}

.head{
  font-size:18px;
  }

button{
     padding:6px 18px;
  background: #fc0a7e;
    color:#fff;
    outline:none;
  border-radius: 5px;
     border:none;
  cursor:pointer;
  background-position: center;
  transition:all 0.3s;
  transition:background 0.8s;
}
button:active{
  background:#000;
   background-size: 100%;
  transition: background 0s;
}

button:hover{
     background:linear-gradient(135deg, #dd1173, #350e47);
}

.tracker{
width:45%;
background:#fff;
box-shadow: 0 0 8px 0 rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.02);
border-radius:5px;

}


.history{
  color:white;
  background:#350e47; 
  text-align:start;
  padding:1rem;
  border-top-left-radius:5px;
  border-top-right-radius:5px;
  
}


.history-content{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
}

.items{
   width:25%;
   display:flex;
   flex-direction:column;
   justify-content:space-between;

}

.sub-items{
  background:#fff;
  height:45%;
  padding:2rem;
  margin:6px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.02);
  cursor:pointer;
  border-radius:5px;
}
 img{
     height:78px;
     width:78px;
   }

   @media screen and (max-width:800px){
     .app-content{
       flex-direction: column;
     }
     .tracker{
       width:80%;
       margin: 0 auto;
       height:50vh;
       padding-bottom:1rem;
     }
     .items{
       flex-direction: row;
       width:100%;
       margin: 0 auto;
     }
     .sub-items{
       height: unset;
       width:40%;
     }
     @media screen and (max-width:520px){
       .tracker{
         width:100%;
         margin:auto 10px;
       }
       .items{
         flex-direction: column;
         justify-content: space-between;
       }
       .sub-items{
         width:80%;
         margin:10px auto;
         padding:1rem;
       }
     }
   }
</style>