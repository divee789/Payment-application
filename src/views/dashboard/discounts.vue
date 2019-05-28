<template>
  <div class="app">
     <div class="advert">
        <img src="/images/clack3.jpg" alt="">
        <div class="text">
          <h3>Discounts</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum repellendus optio nam, inventore rerum quasi, placeat voluptatibus veniam illo est minus modi dolo
          </p>
        </div>
     </div>
      <h2>Discount Options</h2>
     <div class="discount_types">
       <div class="column">
            <div class="discount-types-content">
           <div class="discounts" id="a" @click="family">
             <p class="info">Family and Friends</p>
             <p class="percent">10%</p>
           </div>
           <div class="discounts" id="b" @click="business">
             <p class="info">Business Transfers</p>
             <p class="percent">10%</p>
           </div>
           <div class="discounts" id="c" @click="others">
              <p class="info">Others</p>
              <p class="percent">5%</p>
           </div>
       </div>
       <div class="space">

       </div>
       </div>
       
         
       
       <div class="discount-list">
           <component :is='selectedComponent'>
             
           </component>
       </div>
       
     </div>
  </div>
</template>

<script>
export default { 
    data(){
      return{
        selectedComponent:'app-default'
      }
    },
    components:{
       'app-default': () => import ('@/components/user/default-option'),
       'app-family':  () => import ('@/components/user/Family-Discount'),
       'app-business': () => import ('@/components/user/Business-Discount'),
       'app-other': () => import ('@/components/user/Others')
    },
    methods:{
       family(){
         this.selectedComponent ='app-family'
       },
       business(){
         this.selectedComponent = 'app-business'
       },
       others(){
         this.selectedComponent = 'app-other'
       }
    }
}
</script>

<style scoped>
.app{
  margin:2rem 5%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  text-align: start;
}
img{
  height:100%;
  width:100%;
  opacity: 0.6;
  object-fit: cover;
  border-radius:5px;
  box-shadow: 0px 3px 10px rgba(0,0,0,.8);
  
}
h3{
  font-size:3rem;
  letter-spacing: 5px;
   font-family: 'Pacifico', cursive;
   font-weight:100;
}
.text{
  position:absolute;
  top:5%;
  right:30px;
  left:60%;
  color:#fff;
  font-size:0.9rem;
  text-align: end;
}
.advert{
  position: relative;
  height:50vh;
  /* background-COLOR:#000; */
  background: linear-gradient(90deg, #dd1173,#350e47)
}
h2{
   margin-top:4rem;
}
.discount_types,.discount-types-content{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.column{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
}
.space{
  width:100%;
  height:60%;
  background:#fff;
  box-shadow:0px 3px 10px rgba(0,0,0,.8);
}
.discounts{
  width:23%;
  padding:2rem 2rem;
  font-size:17px;
  FONT-WEIGHT:600;
  border-radius: 5px;
  color:#fff;
  cursor: pointer;
  height:15vh;
   transition: all 0.3s;
}
#a{
  background: #dd1173;
}
#a:hover,#b:hover,#c:hover{
   box-shadow: 0px 3px 10px rgba(0,0,0,.8);
   transform:scale(1.01)
}

#b{
  background: #350e47;
}

#c{
 background:linear-gradient(135deg, #dd1173, #350e47); 
}
.discount-list{
  width:30%;
  border-radius:5px;
  /* background:#350e47;
  /* color:#fff; */
  padding:1rem;
  background: #fff;
  
   box-shadow: 0px 3px 10px rgba(0,0,0,.8);
   height: 60vh;
}
.percent{
  font-size:1.5rem;
}
@media screen and (max-width:1260px){
  .discounts{
    width:20%;
  }
  .discount-list{
    overflow-y:auto;
  }
  .space{
    display: none;
  }
}

@media screen and (max-width:1000px){
  .column{
    width: 30%;
  }
  .text{
    overflow:hidden;
    left:5%;
    text-align:center;
  }
  .discount-types-content{
    flex-direction: column;
    width:100%;
    justify-content: space-between;
  }
  .discounts{
    width:90%;
    font-size:14px;
    padding:1rem;
    margin-bottom:1rem;
   

  }
  .discount-list{
    width:50%;
    padding:0.5rem;
    padding-right:0;
    padding-top:0;
    overflow-y: auto;
  }
}

@media screen and (max-width:600px){
  .discounts{
    height:12vh;
    padding-top:0;
    padding-bottom: 0;
  }
  .discount-list{
    height: 40vh;
  }
  .info{
    margin-bottom: 0;
  }
  .percent{
    margin-top:1px;
    font-size:1rem;
  }
}



</style>


