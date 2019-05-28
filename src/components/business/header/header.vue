<template>
  <div class="business">
    <div class="overlay">
      <section>
        <div>Secure your business with Alpha-Bizz</div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At officiis ea sequi exercitationem atque, vitae mollitia fugit voluptate, expedita reprehend</p>
        <p>
          <button>Get Started</button>
        </p>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.business {
  background-image: url("/images/business.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 75vh;
    @media screen and (min-width:800px){
          margin-top: 4rem;
      }
  .overlay {
    //    background:rgba(0,0,0,0.6);
    background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3));
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    section {
      text-align: start;
      padding: 0 10px;
      box-sizing: border-box;
      div {
        font-size: 2rem;
        font-weight: 600;
      }
      p {
        width: 90%;
        margin: 1.5rem 0;
        font-size: 13px;
      }
      button{
        width:50%;
      }
      @media screen and (min-width:800px){
          margin-left: 10rem;
      }
      @media screen and (min-width: $breakpoint-tablet - 200) {
          margin-left:2rem;
        div {
          font-size: 2.5rem;
          text-align: start;
          width: 60%;
        }
        p {
          width: 50%;
        }
      }
    }
  }
}
</style>

