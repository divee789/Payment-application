<template>
  <transition name="modal-fade">
   <div class="modal-backdrop">
    <div class="modal"  role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription">
            <button><a href="https://www.quidax.com/">Get Started</a></button>
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
          </button>
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
    justify-content: center;
    align-items: center;
    overflow:hidden;
    z-index: 9999999;
  }

  .modal {
    background: #FFFFFF;
    /* box-shadow: 2px 2px 20px 1px; */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width:40%;
    height:50vh;
    padding:2rem;
    z-index:999999999999;
  }


  .btn-green {
  color: #fff;
    background: #fc0a7e;
    transition: all 0.3s;
    border:none;
    border-radius: 5px;
  }
</style>


