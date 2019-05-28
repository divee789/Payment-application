<template>
  <header :class="{ 'navbar--hidden': !showNavbar }">
    <a href="/" class="logo">aLPHA</a>
    <div id="menu-toggle"></div>
    <nav class="nav" >
      <ul class="nav-bar" id="ul">
        <li>
          <a href>Contacts</a>
        </li>
        <li>
          <a href>Products</a>
        </li>
        <li>
          <a href>Team</a>
        </li>
      </ul>
    </nav>
    <div class="clearfix"></div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  padding: 0 1%;
  width: 100%;
  box-sizing: border-box;
  z-index: 9999;
  font-weight: bold;
  background: #fff;
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
}

.logo {
  margin-top: 1rem;
  text-decoration: none;
  box-sizing: border-box;
  float: left;
  color: #000;
  font-family: "Pacifico", cursive;
  font-size: 24px;
}

nav {
  float: right;
  margin-top: 1rem;
  
}
 

.clearfix {
  clear: both;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
}
nav ul li {
  list-style: none;
}
nav ul li a {
  display: block;
  text-decoration: none;
  margin: 10px 1px;
  padding: 10px 20px;
  color: #000;
  font-size: 14px;
}

nav ul li a.active,
ul li a:hover {
  color: #dd1173;
}

@media screen and (max-width: 424px) {
  #menu-toggle {
    display: block;
    width: 40px;
    height: 40px;
    margin: 10px;
    margin-right: 20px;
    margin-top: 10px;
    background: unset;
    float: right;
    cursor: pointer;
    text-align: center;
    font-size: 30px;
    color: #000;
  }

  #menu-toggle:before {
    content: "\f0c9";
    line-height: 40px;
    font-family: fontAwesome;
  }

  #menu-toggle.active:before {
    content: "\f00d";
  }
  .nav {
    display: none;
    transition: all 3s;
  }

  nav.active {
    display: block;
    width: 100%;
  }

  nav.active ul {
    display: block;
  }

  nav.active ul li a {
    margin: 0;
    text-align: end;
  }
}
</style>
<script>
export default {
  
  mounted() {
    $("#menu-toggle").click(function() {
      $(this).toggleClass("active");
      $(".nav").slideToggle(slow);
    });
   
  }
};
</script>




