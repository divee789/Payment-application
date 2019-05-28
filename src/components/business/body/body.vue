<template>
  <div class="body-app">
    <div>
      <h1>What is Alpha-Bizz</h1>
      <div class="flex flex1">
        <div
          class="item item1"
          data-aos="fade-up-right"
          data-aos-delay="0"
          data-aos-duration="3000"
        >
          <img src="/images/business1.png" alt>
        </div>
        <div class="item item2">
          <h2>A Planning App</h2>
          <p>Run your Business from Anywhere without Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolorem! Recusandae dicta fugiat quibusdam laborum magni hic ipsa sapiente dolore unde, perspiciatis nihil porro similique? Placeat, fuga eveniet?</p>
        </div>
      </div>
      <div class="flex flex1">
        <div
          class="item item1"
          data-aos="fade-up-right"
          data-aos-delay="0"
          data-aos-duration="3000"
        >
          <img src="/images/app.png" alt>
        </div>
        <div class="item item2">
          <h2>A Business App</h2>
          <p>Direct your Business without Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolorem! Recusandae dicta fugiat quibusdam laborum magni hic ipsa sapiente dolore unde, perspiciatis nihil porro similique? Placeat, fuga eveniet?</p>
        </div>
      </div>
      <div class="flex flex1">
        <div
          class="item item1"
          data-aos="fade-up-right"
          data-aos-delay="0"
          data-aos-duration="3000"
        >
          <img src="/images/business3.png" alt>
        </div>
        <div class="item item2">
          <h2>A Shopping App</h2>
          <p>Direct your Business without Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, dolorem! Recusandae dicta fugiat quibusdam laborum magni hic ipsa sapiente dolore unde, perspiciatis nihil porro similique? Placeat, fuga eveniet?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body-app {
  text-align: start;
  margin: 10%;
  h1{
      font-size:1.7rem;
      text-align: center;
      margin-bottom: 4rem;
       @media screen and (min-width:$breakpoint-tablet){
         font-size:2.4rem;
       }
  }
  h2 {
    text-align: start;
  }
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
      .item {
      width: 100%;
      @extend .flex;
      margin-bottom: 2rem;
      img {
        width: 100%;
        height: 40vh;
      }
    }
    @media screen and (min-width:$breakpoint-tablet){
    flex-direction: row;
      .item{
        width:45%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      p{
        width:90%;
      }
       img{
         height:50vh;
         margin-right:10rem;
       }
      }
    }
    
}
  
  }


</style>



