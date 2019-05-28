<template>
    <div class="app-header">
         <div class="flex">
                       <svg id="big-svg">
    <linearGradient id="gradient">
     <stop class="main-stop" offset="0%" />
    <stop class="alt-stop" offset="100%" />
    </linearGradient>
    <circle x="5" cx="155" cy="155" r="150"  fill="url(#gradient)" />
</svg>
                     <div id="aa">
                         <div id="ph2"><span id="mob">School <span id="payments">payments</span></span><vue-typer id="type" 
                         :text='["made easy","without any stress","from any location","with encrypted data"]' 
                         :repeat='Infinity' :shuffle='false' initial-action='typing' :pre-type-delay='20' :type-delay='70' :pre-erase-delay='2000' :erase-delay='150' erase-style='backspace' :erase-on-complete='false' caret-animation='blink'></vue-typer></div>
                     </div>
                     <div id="bb">
                          <svg class="green" width="100" height="50">
  <linearGradient id="gradient">
    <stop class="main-stop" offset="0%" />
    <stop class="alt-stop" offset="100%" />
  </linearGradient>
  <circle x="20" cx="25" cy="25" r="20"  fill="url(#gradient)" />
</svg>
                       <img id="student" src="/images/backstudent.png" alt="student">
                     </div>
                 </div>
    </div>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  components:{
       "vue-typer": VueTyper
  }
}
</script>


<style lang="scss">
#ph2{
     white-space: normal;
    color: #380d48;
    font-weight: 800;
    font-size:3.5rem;
     letter-spacing:-0.5px;
    line-height:1.4;
    text-align: start;
    margin-top:10rem;
}

#mob{
    display:block;
}
#big-svg{
    position:absolute;
    bottom:1rem;
    left:1rem;
}
.green{
    position:absolute;
    bottom:20px;
    right:50px;
}
.main-stop {
  stop-color: #dd1173;
}
.alt-stop {
  stop-color: #350e47;
}
#payments{
    border-bottom:7px solid #dd1173;
}
#student{
    height: 80vh;
}
.flex{
    position: relative;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin-top:7rem;
}
#aa{
    width:50%;
}
#bb{
    width:45%;
    background:#350e47;
    overflow: hidden;
}


.vue-typer {
  /* Styles for the vue-typer container
     e.g. font-family, font-size  */
 
  .custom.char {
    /* Styles for each character
       e.g. color, background-color */
       color:#000;
       background-color: transparent;
  }
 
  .custom.caret {
    /* Styles for the caret
       e.g. background-color, animation, display */
       width:2px;
    &.typing {
      /* Styles for the caret while VueTyper is typing
         i.e. when the caret is moving forwards */
        background-color:#380d48;
         width:10px;
    }
  }
}
@media screen and (max-width:1200px){
    #ph2{
        font-size:2.5rem;
        font-weight:800;
    }
}
@media screen and (min-width:601px) and (max-width:900px){
#ph2{
    font-size: 2.4rem;
    font-weight:700;
}
#payments{
    border-bottom:4px solid #dd1173;
}
#student{
    object-fit:contain;
}
}
@media screen and (max-width:600px){
.flex{
    flex-direction:column;
}
#aa,#bb,#student{
    width:100%;
}
#bb{
     height:60vh;
}
#ph2{
    text-align:center;
    font-size:1.8rem;
    line-height:1.4;
    margin-top:2rem;
}
#payments{
    border-bottom:4px solid #dd1173;
}
#student{
    height:100%;
    object-fit: contain;
}
#big-svg{
    display:none;
}
}
</style>

