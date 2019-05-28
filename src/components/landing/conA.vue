<template>
  <div class="page">
    <div class="page-content">
      <div class="a">
        <h2>Get Paid Without Any Hassles</h2>
        <p>Alpha offers different payment options in order to facilitate the speed of reimbursement.</p>
        <button @click="showModal">Preference</button>
      </div>
      <div class="b">
        <img src="/images/paymethods.jpeg" alt>
      </div>
    </div>
    <modal v-show="isModalVisible" @close="closeModal"/>
  </div>
</template>

<script>
import modal from "./Modal.vue";

export default {
  components: {
    modal
  },
  data() {
    return {
      isModalVisible: false
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
};
</script>

<style scoped>
.page-content {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  font-family: "Poppins", sans-serif;
  margin: 5% 7%;
  background: #f3f3f7;
  padding: 5% 3%;
  padding-right: 0;
}

.a {
  width: 41.666667%;
  text-align: start;
  padding-left: 10%;
  padding-right: 7%;
  padding-top: 5%;
}
p {
  width: 70%;
  line-height: 36px;
  font-size: 16px;
}
h2 {
  font-size: 3rem;
  width: 80%;
  font-weight: 700;
  color: #380d48;
}

.b {
  width: 50%;
}
.b:hover {
  margin-top: 5px;
}

button {
  padding: 1rem 2rem;
  background: #fc0a7e;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 80%;
  transition: all 0.3s;
}

button:hover {
  background: linear-gradient(135deg, #dd1173, #350e47);
}

img {
  height: 80vh;
  width: 70%;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
  transition: all 0.3s;
}
@media screen and (max-width: 900px) {
  h2 {
    font-size: 2rem;
    width: 100%;
  }
  p {
    font-size: 13px;
    width: 100%;
  }
  button {
    margin-top: 1px;
    padding: 0.7rem 1.5rem;
    width: 90%;
    font-weight: 700;
  }
  img {
    height: 58vh;
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .page-content {
    flex-direction: column;
  }
  .a {
    width: 90%;
    padding: inherit 1%;
  }
  .b {
    width: 100%;
    margin: 2rem auto;
  }
  h2 {
    font-size: 300%;
  }
  p {
    font-size: 13px;
    width: 90%;
    line-height: 2rem;
  }
  img {
    width: 90%;
  }
}
</style>

