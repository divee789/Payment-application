<template>
  <div class="app">
    <div>
      <div id="title">
        <div>Wallet : 1</div>
        <div class="button">Add Wallet</div>
        <div class="button">What is a Wallet?</div>
      </div>
      <div>
        <div style="overflow-x:auto;">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Balance</th>
                <th>Outstanding</th>
                <th>Credit Sales</th>
                <th>LoanBalance</th>
              </tr>
            </thead>
            <tbody>
              <tr @click="showModal">
                <td>
                  <a>Active</a>
                </td>
                <td>NGN {{ balance }}</td>
                <td>NGN {{ outstanding }}</td>
                <td>NGN {{ creditSales }}</td>
                <td>NGN {{ loanBalance }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <P>CLICK ON A WALLET TO UPDATE IT</P>
      </div>
    </div>
    <modal v-show="isModalVisible" @close="closeModal"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: 10000,
      outstanding: 0,
      creditSales: 0,
      loanBalance: 0,
      isModalVisible: false
    };
  },
  components: {
    modal: () => import ('@/components/user/walletModal'),
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
#title {
  border-bottom: 5px solid #e3e8ee;
  padding: 20px 20px 20px 20px;
  text-align: start;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.button {
  cursor: pointer;
}
.app {
  margin: 5% auto;
  margin-bottom: 20%;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 5px;
  background: #350e47;
  color: #fff;
  width: 90%;
  height: 60vh;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
}
table {
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: 14px;
}
.table > thead > tr > th {
  vertical-align: bottom;
  border-color: #ebeff2;
  border-bottom: 2px solid #dee2e6;
}
td,
th {
  padding: 0.75rem;
}
tbody {
  cursor: pointer;
  padding: 2rem;
}
tbody:hover {
  background: #ebeff2;
  color: #000;
}

tbody tr td {
  vertical-align: middle;
}
p {
  text-align: start;
  font-weight: bolder;
  font-size: 13px;
  margin-top: 4rem;
}
a {
  border-radius: 5px;
  background-color: #fc0a7e;
  padding: 0.5rem 1rem;
  color: #fff;
}

@media screen and (max-width: 500px) {
  #title {
    flex-direction: column;
  }
  .button {
    margin-top: 1rem;
  }
}
</style>

