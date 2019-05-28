<template>
  <header>
    <router-link to="/" class="logo" tag="div">aLPHA</router-link>
    <div id="menu-toggle"></div>
    <nav class="nav">
      <ul class="nav-bar" id="ul">
        <router-link to="/students/validation" tag="li">Sign Up</router-link>
      </ul>
    </nav>
    <div class="clearfix"></div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  top: 1rem;
  width: 100%;
  box-sizing: border-box;
  z-index: 5;
  font-weight: 700;
}

.logo {
  margin-top: 0;
  text-decoration: none;
  box-sizing: border-box;
  float: left;
  color: #000;
  font-family: "Pacifico", cursive;
  font-size: 30px;
  cursor: pointer;
}

nav {
  float: right;
}

.clearfix {
  clear: both;
}

nav ul {
  margin: 0;
  margin-top: 10px;
  padding: 0;
  display: flex;
}
nav ul li {
  list-style: none;
}
nav ul li {
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  color: #fff;
  transition: 0.5s;
  background: #dd1173;
  border-radius: 5px;
  cursor: pointer;
}

nav ul li.active,
ul li:hover {
  background: linear-gradient(135deg, #dd1173, #350e47);
}
</style>



