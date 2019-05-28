<template>
  <div id="app">
    <div class="balance">
      <div class="bal-state" id="a">
        <div>
          Available Balance:NGN
          <span class="span">{{ balNaira }}</span>
        </div>
        <div>
          Bitcoin Balance:
          <span class="span">{{ balBitcoin }}</span>
        </div>
      </div>
      <div class="bal-state" id="b">
        <div class="span">{{ received }} || {{ bitReceived }}</div>
        <div>Naira || Bitcoin</div>
        <div>Total Amount Received</div>
      </div>
      <div class="bal-state" id="c">
        <div class="span">{{ remit }} || {{ bitRemit }}</div>
        <div>Naira || Bitcoin</div>
        <div>Total Amount Paid</div>
      </div>
    </div>
    <div class="graph">
      <app-graph></app-graph>
    </div>
    <div class="transactions">
      <app-transact></app-transact>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balNaira: 10000,
      balBitcoin: 0,
      received: 10000,
      bitReceived: 0,
      remit: 0,
      bitRemit: 0
    };
  },
  components: {
    "app-graph": () => import("@/components/user/Graph"),
    "app-transact": () => import("@/components/user/Transactions")
  }
};
</script>

<style scoped>
#app {
  margin-top: 3%;
}

.balance {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
  margin: 10px auto;
  width: 100%;
}

.bal-state {
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 28%;
  height: 22vh;
  text-align: center;
  padding: 3px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  background-clip: padding-box;
  margin-bottom: 20px;
}
#a {
  background: linear-gradient(to right, #fe8c00, #f83600);
}
#b {
  background: #780206; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #061161,
    #780206
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #061161,
    #780206
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#c {
  background: #666600; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #999966,
    #666600
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #999966,
    #666600
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.span {
  font-size: 25px;
  color: #ecf4f3;
}

.graph {
  background: #fff;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 95%;
  border-radius: 5px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
}

@media screen and (max-width: 500px) {
  .balance {
    font-size: 13px;
  }
  .span {
    font-size: 16px;
  }
}
@media screen and (max-width: 1100px) {
  #app {
    margin-top: 11%;
  }
}

@media screen and (max-width: 600px) {
  #app {
    margin-top: 20%;
  }
  .balance {
    flex-direction: column;
  }
  .bal-state {
    width: 90%;
    margin: 10px auto;
  }
}
</style>