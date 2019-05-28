<template>
  <div class="content-app">
    <div class="overlay">
      <div class="options">
        <div>
          <h1>Settle your Financial Obligations With Ease</h1>
        </div>
        <div class="pay">
          <div class="payCards">
            <h4>Pay Tuition Fee</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
          <div class="payCards">
            <h4>Pay Lodging Fee</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
          <div class="payCards">
            <h4>Pay Clearance Dues</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
          <div class="payCards">
            <h4>Pay Admission Fees</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
        </div>
        <div class="pay">
          <div class="payCards">
            <h4>Pay Admission Fees</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
          <div class="payCards">
            <h4>Pay Admission Fees</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
          <div class="payCards">
            <h4>Settle Feeding Dues</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
          <div class="payCards">
            <h4>Pay Academic Dues</h4>
            <hr>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas repellendus officiis. Eveniet sit</p>
            <hr>
            <p>
              <button>Pay Now</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content-app {
  background-image: url("/images/pink.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  object-fit: cover;
  margin-top: 5px;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5%;
}
h1 {
  color: white;
  margin-bottom:3rem;
}
.options,
.pay {
  display: flex;
  justify-content: space-between;
}
.options {
  flex-direction: column;
}
.pay {
  flex-direction: column;
  width: 100%;
}
.payCards {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background:#fff;
  color:#000;
  width: 70%;
  margin: 10px auto;
  text-align: start;
}
h4 {
  margin-bottom: 0;
  font-size: 1rem;
}

hr {
  border: 1px solid #350e47;
}
p {
  font-size: 14px;
  margin:2rem;
}

@media screen and (min-width: 600px) and (max-width: 1200px) {
  .pay {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .payCards {
    width: 35%;
  }
  button{
    width:80%;
  }
}
@media screen and (min-width: 1200px) {
  .pay {
    flex-direction: row;
    justify-content: space-between;
  }
  .payCards {
    width: 30%;
    margin-left: 10px;
  }
  button{
    width:80%;
  }
}
</style>

<script>
export default {};
</script>


