<template>
    <div class="app">
        <div class="header">
            <div class="a"> 
                 <div class="a1 common">
                      <h3>Outgoing</h3>
                      <p class="track">NGN {{ outgoing }}</p>
                  </div>
                 <div class="a2 common">
                     <h3>Incoming</h3>
                     <p class="track">NGN {{ incoming }}</p>
                 </div>
            </div>
            <div class="b">
                   <div class="b1 common">
                      <h3>Make Transfer</h3>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  </p>
                     <p><button>Make Transfer</button></p>
                 </div>
                 <div class="b2 common">
                     <h3>Request Transfer</h3>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                     <p><button>Request Transfer</button></p>
                 </div>
            </div>
            <div class="c">
                <div class="history">Transfer History</div>
                <div class="transfer_history">
                    <div><img src="/images/money.png" alt=""></div>
                <div>
                    You have not made any transfers yet
                </div>
                </div>
               
            </div>
           
        </div>
        <div class="footer">
            <div class="transfer_graph">
                <div class="top-info history">Transfer Volume</div>
               <app-graph class="trans"></app-graph>
            </div>
            <div class="transfer_total">
                <div class="history" id="q"> Total Transfer </div>
                <div class="tra track">
                    <div>
                        NGN {{ transfers }}
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    data(){
       return{
           transfers:0.00,
           outgoing:0.00,
           incoming:0.00
       }
    },
    components:{
        'app-graph': () => import ('@/components/user/paymentGraph'),
    }
}
</script>

<style scoped>
.app{
    margin:5%;
    text-align:start;
}
.header{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
}
.a,.b{
    width:23%;
    display: flex;
    flex-direction: column;
}
.c{
    width:50%;
    height:62vh;
    background: #fff;
    position: relative;
}
.history{
    background:#dd1173;
    padding:0.7rem;
    color:#fff;
    font-size:16px;
}
.common{
    background:#350e47;
    padding:1rem;
    box-sizing: border-box;
    margin-bottom:10px;
    height:30vh;
    border-radius:5px;
    color:#fff;
}
button
.track{
    font-size:28px;
    color:#fff;
}
.transfer_history{
  margin: 15% auto;
    display: flex;
    flex-direction:column;
    text-align:center;
    font-size:20px;
}

img{
    height:150px;
    width:150px;
    opacity: 0.7;
}
.footer{
    margin-top:1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.transfer_graph{
    width:65%;
    background:#fff;
    color:#fff;
}
.transfer_total{
width:32%;
background: #350e47;
color:#fff;
border-radius:5px;
}

.trans{
    margin:0;
    fill:#fff;
}
.tra{
    margin:40% 20%;
}
#q{
    background: transparent;
}
@media screen and (max-width:600px){
    .header,.footer{
       flex-direction:column;
    }
    .a,.b,.c,.transfer_total,.transfer_graph{
        width:100%;
        margin-bottom:1rem;
    }
    .a{
        flex-direction: row;
        justify-content: space-between;
    }
    .a1,.a2{
         padding:1rem;
         height:20vh;
         width:48%;
    }
}
</style>


