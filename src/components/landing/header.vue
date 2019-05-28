<template>
    <div id="body">
        <div id="app-content">
            <div id="sub-content">
              <nav-bar></nav-bar>
          <header-barr></header-barr>
            </div>
         
        </div>
    </div>
</template>

<script>
export default {
    components:{
    "nav-bar": () => import("@/components/landing/nav"),
    "header-barr": () => import("@/components/landing/heade-barr"),    
    }
}
</script>


<style scoped>
 #body{
 position: relative;
 z-index:0;
 background-size: cover;
  background-image: url('/images/pay.webp');
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Poppins',sans-serif;
 }
 #app-content{
     background-color:rgba(221, 17, 115, 0.3);
     /* opacity: 0.6;*/
     filter: alpha(opacity=60) 
 }
 #sub-content{
     margin-left: 10%;
     margin-right: 10%;
     height:99.9vh;
 }

 @media screen and (max-width:768px){
     #body{
         background-position: center;
     }
     #sub-content{
         height:100%;
     }
 }

</style>

