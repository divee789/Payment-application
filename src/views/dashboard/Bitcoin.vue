<template>
  <div class="app">
        <div>
            <div id="title">
                <div class="h2">
                    BITCOIN
                </div>
                
            </div>
            <div class="body"> 
                <div class="info">
                    <div >
                      <h2> Bitcoin is the most widely used cryptocurrrency across the globe.</h2>
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos earum alias ad neque sunt molestias minima dolorem facilis, eum non deserunt ab rerum </p>
                    </div>
                    <div class="exchange-rate">
                        <label for="bitcoin">Bitcoin: <input type="number" id="bit" v-model="bit"></label>
                        <p class="currency">NGN {{ NGN() }}</p>
                    </div>
                    <hr>
                    <div class="exchange-rate">
                        <label for="Naira">Naira: <input type="number" id="NGN" v-model='naira' placeholder="1,855,572"></label>
                        <p class="currency"> {{ bitcoin() }} Bitcoin </p>
                    </div>
                    <div>
                        <button @click="showModal">Buy Bitcoin</button>
                    </div>

                </div>
                <div class="bit-img">
                    <img src="/images/bit.svg" alt="">
                </div>
            </div>
        </div>
           <modal
       v-show="isModalVisible"
      @close="closeModal"
      /> 
  </div>
</template>

<script>
export default {
    data(){
        return{
        bit:"1",
        naira:"10000",
         isModalVisible: false
        }
    },
    methods:{
        NGN(){
           return this.bit * 1855572
        },
        bitcoin(){
            var x = this.naira/1855572;
            return  x.toFixed(2)
        },
         showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    },
    components:{
        modal: () => import ('@/components/user/bitcoinModal'),
    }

}
</script>

<style scoped>
.app{
    margin: auto ;
    margin-bottom:5rem;
    margin-top:2rem;
    box-sizing:border-box;
    padding:2rem;
    border-radius:5px;
    background: #350e47;
    color:#fff;
    width:95%;
    
}
.body{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    text-align: start;
    margin-top: 15px;
}

.info{
    width:35%;
}
.h2{
text-align: start;
border-bottom: 2px solid #e3e8ee;
}
h2{
    line-height: 43px;
    font-size: 36px;
    width:80%;
    font-weight: 300;
}
label{
    color:#10c469;
    font-size: 16px;
    font-weight:300;
}
.exchange-rate{
    padding:1rem;
}
p{
    width:80%;
    margin-bottom:20px;
}
.currency{
    font-weight: bolder;
    font-size:16px;
    letter-spacing:3px;
    color:#2376f3;
}

div{
    margin-top:5px;
}

input{
    padding:7px 16px;
    border:1px solid #000;
    font-size:1rem;
    border-radius:5px;
    outline:hotpink;
}
button{
      padding:1rem 2rem;
  background: #fc0a7e;
    color:#fff;
  border-radius: 5px;
     border:none;
     font-weight: 700;
  cursor:pointer;
  z-index:99999;
  transition:all 0.3s;
}
button:hover{
     background:linear-gradient(135deg, #dd1173, #350e47);
}

.bit-img{
    width:55%;
   
}
img{
    width:100%;
    height:90vh;
}

@media screen and (max-width:800px){
  .bit-img{
      top:3rem;
       position: fixed;
    right:0;
  }
  h2{
      width:140%;
  }
}

@media screen and (max-width:570px){
    .bit-img{
        display:none;
    }

    .info{
        width:100%;
    }
    h2{
        width:110%;
    }
}

     
</style>

