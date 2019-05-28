<template>
  <div id="app">
    <button>Terms and Policies</button>

    <div class="body">
      <div id="sidenav">
        <div>
          <div class="owner">
            {{ username }}
            <div class="date">{{ date }}</div>
          </div>
          <ul class="sidenav-content">
            <router-link
              tag="li"
              :to="'/dashboard' + route.route"
              class="nav-content"
              v-for="route in normal"
              :key="route.name"
            >{{ route.name }}</router-link>

            <li class="nav-head">PREMIUM</li>
            <router-link
              tag="li"
              :to="'/dashboard' + route.route"
              class="nav-content"
              v-for="route in premium"
              :key="route.name"
            >{{ route.name }}</router-link>
            <li class="nav-head">Cyptocurrency</li>
            <router-link tag="li" to="/dashboard/bitcoin" class="nav-content">Bitcoin</router-link>
          </ul>
          <div class="clear"></div>
        </div>
      </div>
      <div class="content">
        <div class="nav">
          <div class="logo">
            <div>
              <span id="menu-toggle"></span>
            </div>
            <router-link to="/" id="nav" tag="div">aLPHA</router-link>
          </div>

          <div class="date">
            <router-link to="/sign-in" id="logOut">Log out</router-link>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "user Details",
      normal: [
        {
          name: "Overview",
          route: ""
        },
        {
          name: "Activate account",
          route: "/activate-account"
        },
        {
          name: "Payments",
          route: "/Payments"
        },
        {
          name: "Transfer",
          route: "/transfer"
        },
        {
          name: "Wallet",
          route: "/wallet"
        }
      ],
      premium: [
        {
          name: "Loans",
          route: "/loans"
        },
        {
          name: "Tokens",
          route: "/tokens"
        },
        {
          name: "Discounts",
          route: "/discounts"
        }
      ]
    };
  },

  computed: {
    date() {
      let d = new Date().toDateString();
      return d;
    }
  },

  mounted() {
    var menu = document.getElementById("menu-toggle");
    function showBar(e) {
      menu.classList.toggle("active");
      document.getElementById("sidenav").classList.toggle("active");
    }

    menu.addEventListener("click", showBar);
  }
};
</script>

<style scoped>
button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 1rem 2rem;
  background: #fc0a7e;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  z-index: 99999;
  transition: all 0.3s;
}

button:hover {
  background: linear-gradient(135deg, #dd1173, #350e47);
}
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1% 5%;
  position: relative;
}
#nav {
  font-family: "Pacifico", cursive;
  text-decoration: none;
  color: #000;
  font-size: 30px;
  cursor: pointer;
}
.logo {
  display: flex;
  flex-direction: row;
}

.date {
  margin-right: 10%;
  margin-top: 15px;
}

ul {
  border: 0;
  font-weight: normal;
  line-height: 1;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  text-decoration: none;
}

li {
  transition: all 0.5s;
  font-size: 15px;
  margin-top: 15px;
}
li:hover {
  color: #000;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s;
}
.nav-content {
  margin: 4px 0;
  padding: 5px 15px;
  cursor: pointer;
  text-decoration: none;
}

.nav-head {
  padding: 12px 20px !important;
  letter-spacing: 0.1em;
  pointer-events: none;
  cursor: default;
  font-size: 13px;
  padding-bottom: 0;
  color: #98a6ad;
  font-weight: normal;
  line-height: 1;
  padding-left: 0;
}

#component {
  margin-top: 6rem;
}
.body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  font-size: 14px;
  font-family: "Poppins", cursive;
}

#sidenav {
  position: fixed;
  background: linear-gradient(135deg, #dd1173, #350e47);
  width: 13%;
  margin-right: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: start;
  padding: 1rem;
  color: #fff;
  vertical-align: middle;
  line-height: 1.3;
  z-index: 999999;
}
.owner {
  border-radius: 3px;
  padding: 1rem;
  background: #350e47;
  margin-bottom: 20px;
}

.content {
  padding-left: 15%;
  box-sizing: border-box;
  width: 100%;
  background: #ebeff2;
  color: #000;
  box-sizing: border-box;
}
.clear {
  clear: both;
}
#logOut {
  color: #000;
  font-family: "Pacifico", cursive;
  font-size: 20px;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}
#logOut:hover {
  background: #350e47;
  color: #fff;
}

/* MEDIA QUERIES */

@media screen and (max-width: 900px) {
  #menu-toggle {
    display: block;
    width: 30px;
    height: 30px;
    margin: 10px;
    margin-right: 20px;
    background: unset;
    float: right;
    cursor: pointer;
    text-align: center;
    font-size: 30px;
    color: #350e47;
  }
  #menu-toggle:before {
    content: "\f0c9";
    line-height: 40px;
    font-family: fontAwesome;
  }
  #menu-toggle.active:before {
    content: "\f00d";
  }
  #sidenav {
    display: none;
    transition: all 1s;
  }

  #sidenav.active {
    display: block;
    width: 50%;
    margin-top: 4rem;
  }
  .content {
    padding: 0;
  }
  .nav {
    width: 100%;
  }
  #nav {
    font-size: 25px;
    margin-top: 0.7rem;
  }
}

@media screen and (max-width: 600px) {
  #logOut {
    font-size: 14px;
  }
}
</style>