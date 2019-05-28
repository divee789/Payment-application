<template>
<transition name="modal-fade">
     <div class="modal-backdrop">
    <div class="modal"  role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
         <div class="form-header">
          Update Wallet
        </div>
      <div class="modal-body">
       
         <div class="account">
             <div class="form-content">
                <label for="SettlementBank">Settlement Bank: <input type="text" placeholder="BankName"></label>
             </div>
             <div class="form-content">
                <label for="">Settlement Currency: <input class="ngn" type="text" placeholder="NGN"></label>
             </div>
         </div>
         <div class="account">
             <div class="form-content">
                <label for="">Account Type: <input class="ngn" type="text" placeholder="Savings"></label>
             </div>
             <div class="form-content">
                 <label for="">Account Number: <input type="number"> </label>
             </div>
         </div>
         
      </div>
      <div class="details">
          <div>
            <label for="">Account Name: <input type="text"></label>
          </div>
      </div>
         <div class="buttons">
             <button class="btn-red">
             Update
           </button>
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
            Cancel
          </button>
         </div>
    </div>
    
  </div>
  </transition>
</template>

<script>
export default {
     methods: {
      close() {
        this.$emit('close');
      }
    }
}

</script>

<style scoped>
 .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    overflow:hidden;
    z-index: 9999999;
    text-align:start;
  }

  .modal {
    position: relative;
    background: #FFFFFF;
    /* box-shadow: 2px 2px 20px 1px; */
    overflow: hidden;
    top:2rem;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    max-width: 550px;
    height:75vh;
    padding:2rem;
    z-index:99999999;
    box-sizing: border-box;
    color:#000;
  }
  .form-header{
    padding: 15px;
    padding-left:0;
    border-bottom:5px solid #350e47;
    text-align:start;
    font-size: 24px;
  }
  input{
    margin-top:1px;
    height:45px;
    border-radius:5px;
    width: 100%;
    border:1px solid #e3e3e3;
    font-size: 14px;
    padding: .375rem .75rem;
  } 
  .ngn{
    background: #e9ecef;
  }

  .modal-body{
     font-size: 15px;
     width:95%;
     display: flex;
     flex-direction: row;
     justify-content: space-between;
     box-sizing: border-box;
  }

  .account{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    width:45%;

  }
  .form-content{
  margin-top: 15px
  }

  .details{
    width:95%;
    border-bottom:5px solid #350e47;
    padding-bottom:2rem;
    margin-top: 1rem;

  }
.buttons{
  margin-top:2rem;
  align-self: flex-end;
  width:100%;
  font-weight:800;
}


  .btn-green {
    color: #fff;
    background: #fc0a7e;
    transition: all 0.3s;
    border:none;
    border-radius: 5px;
    padding:10px 20px;
    font-size: 14px;
    width:20%;
    align-self: flex-end;
    margin-top:1rem;
    margin-left: 2px;
  }
  .btn-green:hover{
     background:linear-gradient(135deg, #dd1173, #350e47);
  }
  .btn-red{
    padding:10px 20px;
    font-size:14px;
    background:#fff;
    color:#000;
    border:1px solid #350e47;
    width:20%;
    border-radius:5px;
  }

  @media screen and (max-width:800px){
    .modal{
      height: 80vh;
      overflow-y: scroll;
    }
  }


</style>