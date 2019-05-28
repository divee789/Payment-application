<template>
  <div class="app">
       <div class="token-graph">
         <div class="graph">
            <app-graph></app-graph>
         </div>
         <div class="token-info">
         <div class="info-content">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla, architecto doloribus, aperiam quasi incidunt nihil veritatis voluptate at ratione sit
         </div>
         </div>
       </div>
       <div class="token-1"> 
         <div class="token-column">
            <div class="token" id="a">
                <h1>
                  Buy Tokens
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div class="token" id="b">
                 <h1>
                  Sell Tokens
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
         </div>
         <div class="token-column"> 
            <div class="token" id="c">
                <h1>
                  Buy Credits
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.  
                </p>
            </div>
            <div class="token" id="d">
              <h1>
                Redeem Credits
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>

            </div>
         </div>

       </div>
       <div class="token-enquiry">
         <div class="te">
           <p class="big"> What Is a Token?</p>
           <p class="but"><button>Token Info</button></p>
         </div>
       </div>
  </div>
</template>

<script>
export default {
    components:{
        'app-graph': () => import ('@/components/user/tokenGraph'),
    }
}
</script>

<style scoped>
/* 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
.app{
  /* background:#fff; */
  text-align:start;
  box-sizing: border-box;
  padding:5% 5%;
  font-family: 'Gothic AI',sans-serif;
 
}
.token-graph,.token-1,.token-column{
  display:flex;
  justify-content: space-between;
   background: #fff;
   padding-top:2rem;
   border-radius:5px;
 
}
.token-graph,.token-1{
  flex-direction: row;
    padding:0.5rem;
}
.token-1{
  /* background: #350e47; */
  padding:2rem;
  margin-bottom:1rem;
  border-radius:5px;
}
.graph{
  width:60%;
}
.token-info{
  width:35%;
  letter-spacing:2px;
}
.info-content{
  width:80%;
  margin-top: 5rem;
  text-align: justify;
}
.token-column{
  width:45%;
  flex-direction:column;
}
.token{
  padding:2rem 1rem;
  color:#fff;
  border-radius: 5px;
  margin-bottom:1rem;
  cursor:pointer;
}
.token:hover{
 box-shadow: 0px 3px 10px rgba(0,0,0,.8);
}
#a{
  background: #e43a15;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #e65245, #e43a15);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #e65245, #e43a15); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#b{
  background: #5f2c82;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #49a09d, #5f2c82);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #49a09d, #5f2c82); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#c{
  background: #5C258D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4389A2, #5C258D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4389A2, #5C258D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
#d{
  background: #AA076B;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #61045F, #AA076B);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #61045F, #AA076B); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.token-enquiry{
  position:relative;
  width:100%;
  height:35vh;
  border-radius: 5px;
  margin-bottom:2rem;
  background:linear-gradient(360deg,#dd1173,#350e47)
}
.te{
 position: absolute;
 text-align:center;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    color:#fff;
    font-size: 45px;
    letter-spacing: 1px;
    font-weight: 700;
}
.but{
  margin-top: 10px;
}
.big{
  margin-bottom: 5px;
}
button{
  padding:1rem 2rem;
}

@media screen and (max-width:850px){
  .big{
    font-size: 35px;
  }
}
@media screen and (max-width:670px){
  .te{
  width:100%;
  }
   .big{
    font-size: 25px;
  }
  .info-content{
    width: 100%;
  }
}
@media screen and (max-width:675px) and (min-width: 392px){
  .token{
    height:20vh;
  }
}
@media screen and (max-width:500px){
  .token-graph{
    flex-direction: column-reverse;
  }
  .graph{
    width:90%;
  }
  .token-info{
    width:100%;
    margin-bottom:2rem;
  }
  .info-content{
    font-size:12px;
    text-align: center;
  }
  .token{
    padding:10px;
  }
  h1{
    font-size:20px;
  }
  p{
    font-size:12px;
  }
}
@media screen and (max-width:320px){
  .graph{
    margin-left: -2rem;
  }
}


</style>

