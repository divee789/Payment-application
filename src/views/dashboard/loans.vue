<template>
  <div class="app">
     <div class="loan-container">
         <div class="title">Loans</div>
         <div class="loans">
           <div class="noLoans">
             You have not requested any loans
             <div>
               <button>Request Loan</button>
             </div>
           </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.loan-container{
  height:70vh;
  background:#fff;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.06), 0 1px 0 0 rgba(0,0,0,.02);
  margin:3%;
  margin-bottom:15%;
  border-radius:5px;
  color:#310647;
}
.title{
  text-align: start;
  padding-top:10px;
  padding-left:10px;
  BACKGROUND:#fff;
  font-size:20px;
  color:#000;
  border-bottom: 2px solid #350e47;
}
.noLoans{
  margin-top:15%;
  font-size:20px;
}
button{
  margin-top:1rem;
}
@media screen and (max-width:800px){
  .loan-container{
    margin:5%;
    margin-bottom:20%;
  }
}

</style>

