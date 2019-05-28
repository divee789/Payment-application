<template>
  <div id="demo">
    <div>
      <h1>Flexible Funding for you and your clients</h1>
      <div class="ca">
        <div class="card">
          <div class="cd">
            <h4>FOR STUDENTS</h4>
            <h2>Help Boost Your Campus Funds With Alpha Credit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit vel fugiat quis ipsum inventore, architecto optio suscipit porro aut ullam aperiam, similique debitis quod quam quas harum aliquid minima?</p>
          </div>
          <div class="learn">
            <router-link to="/students/info" tag="div">Learn More</router-link>
          </div>
        </div>
        <div class="card">
          <div class="cd">
            <h4>FOR YOUR BUSINESS</h4>
            <h2>Find the Right loan for your small business</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit vel fugiat quis ipsum inventore, architecto optio suscipit porro aut ullam aperiam, similique debitis quod quam quas harum aliquid minima?</p>
          </div>
           <div class="learn">
            <router-link to="/business/info" tag="div">Learn More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
#demo {
  background-color: #cf0063;
  background-image: linear-gradient(135deg, #dd1173, #350e47);
  padding: 5% 0;
  margin-top: -2%;
}
p {
  font-size: 13px;
}

h1 {
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  margin-top: 5%;
  margin-bottom: 5%;
  font-weight: 100;
  line-height: 1.2;
  color: #fff;
}

h1 div {
  font-size: 16px;
}

.ca {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 10%;
  line-height: 1.2;
}
.card {
  width: 45%;
  border-radius: 3px;
  background: #ffffff;
  color: #6c7378;
}

.learn {
  position:relative;
  bottom:0;
  padding: 15px 0;
  background: #eaeced;
  margin-top: 35px;
  border-radius: 0 0 3px 3px;
  width: 100%;
  cursor: pointer;
}

.cd {
  box-sizing: border-box;
  padding: 2% 5%;
}
.card h2 {
  padding: 0 10%;
  font-size: 24px;
}

@media screen and (max-width: 700px) {
  .ca {
    flex-direction: column;
  }
  .card {
    width: 100%;
    margin-top: 7%;
  }
}
</style>

   