<template>
  <div class="con">
    <img src="/images/Path 1.png" alt id="path1">
    <img src="/images/Path 2.png" alt id="path2">
    <h1 id="scroll-to" data-aos="fade-down"  data-aos-delay="100"  data-aos-duration="1000">
      <span>Choose</span> a Starter Plan
    </h1>
    <div class="plan-options">
      <div class="plan-card" data-aos="fade-right"  data-aos-delay="100"  data-aos-duration="3000">
        <h2>Level One</h2>
        <div class="price">NGN 3000</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima neque eius, nulla nostrum modi quas! Nam, quis, illum ipsum earum voluptates, et doloremque exercitationem vitae reprehenderit consequatur a nemo.</p>
        <div class="select">
          <button>Select</button>
        </div>
      </div>
      <div class="plan-card" data-aos="fade-up"  data-aos-delay="100"  data-aos-duration="3000">
        <h2>Level Two</h2>
        <div class="price">NGN 5000</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit commodi dignissimos reprehenderit totam modi, vitae omnis repellat expedita ipsa tempora. Architecto dignissimos nisi aliquam excepturi, nostrum jgkld ksf ksfks kbsikuksf.</p>
        <div class="select">
          <button>Select</button>
        </div>
      </div>
      <div class="plan-card" data-aos="fade-left"  data-aos-delay="100"  data-aos-duration="3000">
        <h2>Premium Level</h2>
        <div class="price">NGN 8000</div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error iste obcaecati rem ipsum deserunt amet ea alias natus cumque quo voluptate voluptas eaque, fugit reprehenderit sint numquam exercitationem earum illo.</p>
        <div class="select">
          <button>Select</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   mounted() {
  //     $(window).scroll(function() {
  //    var hT = $('#scroll-to').offset().top,
  //        hH = $('#scroll-to').outerHeight(),
  //        wH = $(window).height(),
  //        wS = $(this).scrollTop();
  //     console.log((hT-wH) , wS);
  //    if (wS > (hT+hH-wH)){
  //     $('#scroll-to').fadeIn(2000);
  //    }
  // });
  //   }
};
</script>

<style lang="scss" scoped>
@import "./reason.scss";
</style>


