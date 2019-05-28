<template>
  <div class="content">
    <section>
      <!-- <div>
            <h1>Why Alpha</h1>
      </div>-->
      <div class="values">
        <div class="item">
          <div class="half" data-aos="fade-right" data-aos-delay="100" data-aos-duration="3000">
            <img class="big" src="/images/student.jpg" alt>
          </div>
          <div class="half color">
            <svg width="50" height="50">
              <circle x="20" cx="25" cy="25" r="20" fill="rgba(221, 17, 115, 0.91)"></circle>
            </svg>
            <div class="colo">
              <h2>Send Money</h2>
              <p>Transferring money through Alpha is so fast and secure, you won’t have any reason not to pay back friends and family right away.</p>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="half color">
            <div class="colo" id="a">
              <h2>Request Money</h2>
              <p>It’s simple to request money from friends – or clients! And with Alpha, it arrives quickly and securely into your account.</p>
            </div>
          </div>
          <div class="half" data-aos="fade-left"  data-aos-delay="100"  data-aos-duration="3000">
            <img class="big" src="/images/stree.jpg" alt>
          </div>
        </div>
        <div class="item">
          <div class="half" data-aos="fade-right"  data-aos-delay="100"  data-aos-duration="3000">
            <img class="big" src="/images/surplus.jpg" alt>
          </div>
          <div class="half color">
            <div class="colo" id="b">
              <h2>Collect Money from friends</h2>
              <p>With Alpha Money Services, it’s easier than ever to create a page for people to chip in on gifts, special events and more.*</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
/* SVG */
svg {
  position: absolute;
  top: 0;
}
/* SVG */

h2 {
  color: #380d48;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
}
p {
  font-size: 14px;
  width: 80%;
  font-family: "Poppins", sans-serif;
}
.big {
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* filter: brightness(50%); 
	transition:all 1s ease; */
}
.small {
  height: 7vh;
  width: 10vh;
}
section {
  position: relative;
  /* background-color:rgba(221, 17, 115, 0.3); */
  margin: 5% 2%;
  z-index: 99999;
}

.values {
  display: flex;
  flex-direction: column;
  margin: 0% 5%;
}
.item {
  display: flex;
  flex-direction: row;
  text-align: start;
  height: 80vh;
}
.half {
  width: 50%;
  overflow: hidden;
}
.half:hover img {
  /* transform: scale(1.1);
		 filter: brightness(100%); */
}

.color {
  background-color: #fff;
  color: #000;
  /* background-image:linear-gradient(135deg, #dd1173, #350e47);  */
  /* color:#fff; */
}
.colo {
  position: relative;
  display: block;
  top: 50%;
  width: 80%;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  transform: translate(0px, -50%);
  text-align: start;
}
@media screen and (max-width: 1100px) {
  p {
    width: 100%;
  }
}

@media screen and (max-width: 900px) {
  p {
    width: 100%;
    font-size: 13px;
  }
  .item {
    height: 70vh;
  }
}

@media screen and (max-width: 600px) {
  .item {
    flex-direction: column;
  }
  p {
    width: 100%;
  }
  .half {
    width: 100%;
  }
  img {
    display: none;
  }
  .item {
    height: 45vh;
  }
  .color {
    background-color: #fff;
  }
  .colo {
    width: 100%;
    text-align: center;
  }
  #a {
    margin-top: -1rem;
  }
  #b {
    margin-top: -2rem;
  }
}
</style>

