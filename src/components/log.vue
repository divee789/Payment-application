<template>
<div class="app">
  <div class="app-content">

    <div class="nav">
        <router-link to='/' id="nav" tag="div">aLPHA</router-link>
    </div>
    <div class="help">
      <div>Help</div>
    </div>
  
        <!-- <img id="bg" src="/images/sign.jpg" alt=""> -->
        <div class="demo">
           <div class="it-img">
             <!-- <img id="bk" src="/images/sign.jpg" alt=""> -->
             <div class="log-info">
                  <p class="options" v-if="!signIn">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem debitis quo blanditiis. Ullam, iure. Sit facere numquam enim deserunt odio dolores delectus repellat, 
        <span class="hide">Already have an account ?</span> <button class="btn btn--link" @click="switchSign()">Sign In</button>
      </p>

      <p class="options" v-else >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus earum vero fugit magnam ipsam alias pariatur assumenda cupiditate
        <span class="hide">Don't have an account ?</span> <button class="btn btn--link" @click="switchSign()">Sign Up</button>
      </p>
             </div>
           </div>
           <div class="it-form">
               <router-link tag = 'div' to='/' id="rout">aLPHA</router-link>
             <form   v-if="!signIn">
               <h3>Lets Get You Started</h3>
               <div>
                 <input class="name" type="text" placeholder="first name" name="first-name" v-model="user.firstname" required>
                 <input class="name" type="text" placeholder="last name" name="last-name" v-model="user.lastname" required>
               </div>
              
               <div>
                 <input type="email" placeholder="email" name="email" v-model="user.email" required>
               </div>
               <div>
                 <input type="password" placeholder="new password" name="password" v-model="user.newpassword" required>
               </div>
               <div>
                 <input type="password" placeholder="confirm password" name="confirmPassword" v-model="user.confirmpassword" required>
               </div>
               <input id="sub" type="submit"  @click="submit()">
               <div class="option">
                 <span class="hide">Already have an account ?</span> <button class="btn btn--link" @click="switchSign()">Sign In</button>
             </div>
            
             </form>
            
             <form action=""  v-else method="POST">
               <h3>Welcome Back</h3>
               <div>
                 <input type="email" placeholder="email" name="userEmail" v-model="logData.email" required>
               </div>
               <div>
                 <input type="password" placeholder="Password" name="userPassword" v-model="logData.password" required>
               </div>
               <input id="sub" type="submit">
               <div class="option">
                 <span class="hide">Don't have an account ?</span> <button class="btn btn--link" @click="switchSign()">Sign Up</button>
            
             </div>
            
             
             </form>
             
           </div>
        </div>
      </div>
        
    </div>
  

</template>
<script>
import nav from './landing/nav.vue'

export default {
  data:function(){
    return{
       signIn:false,
       user:{
         firstname:'',
         lastname:'',
         email:'',
         newpassword:'',
         confirmpassword:''
       },
       logData:{
         email:'',
         password:''
       },
        node: 'data'
    }
  },
  methods:{
     switchSign () {
        this.signIn = !this.signIn
      },
      submit() {
        console.log(this.user)
        if(this.user.newpassword !== this.user.confirmpassword){
          alert('Incorrect passwords.')
        }
        this.$http.post('https://payment-app-123.firebaseio.com/data.json', this.user)
                .then(response => {
                    console.log(response);
                     this.$router.push({name: 'index'});
               }, error => {
                   console.log(error);
                               });
               
      }
  }
}
</script>


<style scoped>
.nav{
   position:absolute;
   top:5%;
   left:10%;
  
}
#nav{
   font-family: 'Pacifico', cursive;
    text-decoration:none;
   color:#fff;
   font-size:24px;
   cursor:pointer;
}

.help{
  position:absolute;
  top:5%;
  right:10%;
  color:#fff;
  cursor:pointer;
}

.btn{
  border:none;
  color:#fff;
  cursor:pointer;
  text-align: center;
  background: unset;
  outline:none;
  transition:all 0.5s;
  display: inline;
  text-decoration: underline;
}

.btn:hover{
  color:#2376f3;
  text-decoration: none;
}

p{
  font-weight:400;
  color:#fff;
  text-align:start;
  padding:1rem;
  font-size:13px;
}

.hide{
  display:block;
}
.option{
  display:none;
}
span{
  font-weight:400;
  color:#fff;
  margin-top:2rem;
}

.app{
 position: relative;
 z-index:0;
 background-size: cover;
  font-family: 'Gothic A1', sans-serif;
  height:100vh;
   background-color: #cf0063;
    background-image: linear-gradient(135deg, #dd1173, #350e47);  
 }
 .app-content{
     /* background-color:rgba(221, 17, 115, 0.3); */
     /* background-color: rgba(0,176,155,0.3); */
     filter: alpha(opacity=60);
     height: inherit;
     display: flex;
     align-items: center;
 }

.log-info{
  position: absolute;
  height:100%;
  padding-top:30%;
  box-sizing: border-box;
  color:#fff;
  background: rgba(52, 89, 72, 0.75);
    border-top-left-radius:10px;
  border-bottom-left-radius: 10px;
  
}
.demo{
   display:flex;
   width:70%;
   padding: 1rem;
   margin: 0 auto;
   margin-top:5%;
   font-size:13px;
   padding-left:15%;
   
}
/* #bk{
  width: 100%;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  height:100%;
} */
.it-img{
  width:30%;
  position: relative;
   background-image: url('/images/payapp.jpg');
  background-repeat: no-repeat;
  background-position: 70% 50%;
     border-top-left-radius:10px;
  border-bottom-left-radius: 10px;
}
.it-form{ 
  width:40%;
  background: #fff;
  border-top-right-radius:10px;
  border-bottom-right-radius: 10px;
  padding:0.5rem;
  padding-bottom:5rem;
  text-align:center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
}
input{
  padding:0.5rem 0.5rem;
  margin-top:5%;
  width:80%;
  font-family:'Poppins',sans-serif;
  font-weight:100;
  font-size:13px;
  border: none;
  border-bottom:1px solid #232E42;
  outline: none;
}
.name{
  width:40%;
   box-sizing: border-box;
  margin-left:10px;
}
#sub{
  width:50%;
  border-radius:5px;
  border:none;
  background-color:#fc0a7e;
  color:#fff;
  cursor:pointer;
  transition: all 0.3s;
}

#sub:hover{
  background: linear-gradient(135deg, #dd1173, #350e47);
}
#rout{
  cursor: pointer;
  margin: 0 auto;
  margin-top:2rem;
  font-family: 'Pacifico',cursive;
  font-size:3vh;
  box-sizing: border-box;
  
}


@media screen and (max-width: 1200px){
  .demo{
    font-size:0.8rem;
  }

  input{
    font-size:70%;
  }
}
@media screen and  (max-width:900px){
  .demo{
    font-size:0.7rem;
   display:flex;
   width:100%;
   padding: 1rem;
   justify-content: center;
    align-content: center;
   margin-top:5%;
  }
  input{
    font-size:90%;
  }
  .btn{
    font-size:0.45rem;
  }
}
@media screen and  (max-width:550px){
.it-img{
  display: none;
}
.option{
  display: block;
}

.it-form{
  width:100%;
  border-radius:15px;
  margin: 0 auto;
}
span,.btn{
  color:#000;
  font-size:14px;
}
.btn{
  margin-top:10px;
}
.demo{
  justify-content: center;
    align-content: center;
}
}





 /* @import '../assets/scss/mains.scss'; */

</style>




    
