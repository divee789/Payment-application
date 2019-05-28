<template>
<div>
    <section class="page-head">
              <div id="pg-1">
                  <h1 class="ph1"><span id="mob">Mobile <span id="payments">payments</span></span><vue-typer class="ph1" id="type" :text='["made easy","without any stress","from any location","with encrypted data"]' 
         :repeat='Infinity'
          :shuffle='false'
           initial-action='typing'
  :pre-type-delay='20'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='150'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='blink'></vue-typer>
                    </h1>
                  <p class="p">Providing viable solutions to the disbursement of funds. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aut tenetur  </p>
                   <router-link to="/sign-in" tag="button" id="router-link">Get Started</router-link>
                 
              </div>
              <div id="pg-2">
                  <img src="/images/iphonex.png" alt="A payment App" id="pay-app" height="70%">
              </div>
         </section>
    </div>
</template> 


<style lang="scss">
#mob{
    display:block;
    opacity:0.8;
}
.p{
    width: 50%;
    line-height: 36px;
    font-weight:700;
    font-size:16px;
   
}
   #router-link{
  text-decoration: none;
  border-radius: 5px;
  width:50%;
  border:none;
  padding:1.2rem 2rem;
 font-weight: 700;
  background: #fc0a7e;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s;
}
#router-link:hover{
    background: linear-gradient(135deg, #dd1173, #350e47);
}
.page-head{
     position: relative;
    z-index: 0;
    opacity: 1;
     display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    color: #fff;
    margin-top:5%;
    padding-bottom: 10%;
    font-family: "Poppins", Helvetica, Arial, sans-serif;
}

#pg-1{
    width: 70%;
    margin-top:2rem;
   
}



#pg-2{
    width: 25%;
    height:100%;
    margin-top:3rem;
}

#pay-app{
    width: 100%;
    height:100%;
}
.ph1{
     white-space: normal;
    margin-top: 50px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 4.5rem;
    font-weight: 600;
     letter-spacing:-0.5px;
    width:85%;
    word-break: break-all;
    line-height:1.2;
    text-align: start;
    overflow: hidden;
}


.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
 
  .custom.char {
    /* Styles for each character
       e.g. color, background-color */
       color:#fff;
       background-color: transparent;
  }
 
  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */
       background-color:#dd1173;
       width:4px;
    &.typing {
      /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
        background-color:#fff;
         width:10px;
    }
  }
}


@media screen and  (max-width:1200px){
    .ph1{
        line-height: 4rem;
        font-size:4rem;
        width:100%;
        margin-top:0;
    }
    .p{
        font-size: 13px;
        width:60%;
    }

}
@media screen and  (max-width:990px){
    .ph1{
        line-height: 3.5rem;
        font-size:2.5rem;
        width:100%;
        margin-top:1rem;
    }
    .page-head{
        margin-top:0;
    }
    .p{
        width:70%;
        font-size: 11px;
        line-height: 20px;
        margin-top: 1rem;
    }
     #router-link,button{
        margin-top: 1px;
        padding:0.7rem 1.5rem;
        width: 70%;
    }
    #pg-2{
        width:30%;
    }
    #pg-1{
        width: 65%;
    }

}
@media screen  and (max-width:600px){
    .page-head{
        flex-direction: column;
        margin-top: 5rem;
    }
    // #payments{
    //     display:block;
    // }
    .ph1{
        width:100%;
        font-size:1.99rem;
        font-weight: 600;
        text-align: center;
        line-height:1.2;
    }
    .p{
        width:100%;
        text-align: center;
        font-weight:400;
        margin-top:2rem;
    }
    #router-link{
        margin-top: 1px;
        padding:1rem 2rem;
        width:100%;
    }
    #pg-1{
        margin-top:10px;
        width:100%;
    }
    #pg-2{
    width: 100%;
    height:60%;
    margin-top:15%;
}
}
@media screen  and (max-width:320px){
    .ph1{
        font-size:1.8rem;
    }
    #type{
        margin-left:-5px;
    }
}
</style>


<script>
 import { VueTyper } from 'vue-typer'

export default {
   
    components:{
         'vue-typer': VueTyper
    }
    
}
</script>


