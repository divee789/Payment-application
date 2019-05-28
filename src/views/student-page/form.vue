<template>
  <div class="form-page">
    <div class="side-picture">
      <img src="/images/graduates.jpg" alt>
      <div class="text">
          "Work while they play,and then live like they dream"
          <div>Anonymous</div>
      </div>
    </div>
    <div class="form">
      <div class="it-form">
        <router-link tag="div" to="/" id="rout">aLPHA</router-link>
        <form v-if="!signIn">
          <h3>Create a Student Account</h3>
          <div>
            <input
              class="name"
              type="text"
              placeholder="first name"
              name="first-name"
              v-model="user.firstname"
              required
            >
          </div>
          <div>
            <input
              class="name"
              type="text"
              placeholder="last name"
              name="last-name"
              v-model="user.lastname"
              required
            >
          </div>

          <div>
            <input type="email" placeholder="email" name="email" v-model="user.email" required>
          </div>
          <div>
            <input
              type="password"
              placeholder="new password"
              name="password"
              v-model="user.newpassword"
              required
            >
          </div>
          <div>
            <input
              type="password"
              placeholder="confirm password"
              name="confirmPassword"
              v-model="user.confirmpassword"
              required
            >
          </div>
          <input id="sub" type="submit" @click="submit()">
          <div class="option">
            <span class="hide">Already have an account ?</span>
            <a class="btn" @click="switchSign()">Sign In</a>
          </div>
        </form>

        <form action v-else method="POST">
          <h3>Welcome Back</h3>
          <div>
            <input
              type="email"
              placeholder="email"
              name="userEmail"
              v-model="logData.email"
              required
            >
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="userPassword"
              v-model="logData.password"
              required
            >
          </div>
          <input id="sub" type="submit">
          <div class="option">
            <span class="hide">Don't have an account ?</span>
            <a class="btn" @click="switchSign()">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      signIn: false,
      user: {
        firstname: "",
        lastname: "",
        email: "",
        newpassword: "",
        confirmpassword: ""
      },
      logData: {
        email: "",
        password: ""
      },
      node: "data"
    };
  },
  methods: {
    switchSign() {
      this.signIn = !this.signIn;
    }
  }
};
</script>

<style lang="scss" scoped>
.form-page {
  display: flex;
  flex-direction: row;
}
.side-picture {
  display: none;
  position: relative;
  height: 100vh;
  width: 41%;
  background: rgba(0,0,0,1);
  img {
    height: 100%;
    width: 100%;
    opacity:0.5;
  }
  .text{
      position:absolute;
      bottom:10px;
      left:10px;
      width:80%;
      font-size:100%;
      color:#fff;
      text-align:start;
  }
  @media screen and (min-width: $breakpoint-tablet) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.form {
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width: $breakpoint-tablet) {
    width: 50%;
  }

  .it-form {
    width: 90%;
    background: #fff;
    border-radius: 10px;
    padding-bottom: 5rem;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top:10%;
  @media screen and (min-width: $breakpoint-laptop) {
   width:50%;
  }    
    #rout {
      margin: 0 auto;
      margin-top: 2rem;
      font-family: "Pacifico", cursive;
      font-size: 3vh;
      box-sizing: border-box;
      cursor: pointer;
    }

    input {
      padding: 0.3rem 0.5rem;
      margin-top: 1.3rem;
      width: 100%;
      font-family: "Poppins", sans-serif;
      font-weight: 100;
      font-size: 13px;
      border-radius: 5px;
      border: 1px solid #232e42;
      outline: none;
    }
    #sub {
      width: 50%;
      border-radius: 5px;
      border: none;
      background-color: #fc0a7e;
      color: #fff;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background: linear-gradient(135deg, $primary-theme, #350e47);
      }
    }
    .option {
      margin-top: 2rem;
      a{
          cursor: pointer;
      }
    }
  }
}
</style>


