<template>
  <HeaderComponent data-aos="zoom-in"></HeaderComponent>
  <main class="form-container">
    <h1 data-aos="fade-up" class="subheader">Log In</h1>
    <form
      id="content"
      data-aos="fade-right"
      @submit.prevent="login"
      class="mid-form"
    >
      <div class="form-group">
        <label for="email">Email</label>
        <input
          v-model="email"
          required
          autocomplete="off"
          type="text"
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          v-model="password"
          required
          autocomplete="off"
          type="password"
          name="password"
        />
      </div>
      <div class="form-group">
        <input
          :disabled="!email && !password"
          type="submit"
          value="Enviar"
          id="btn"
        />
      </div>
    </form>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default {
  name: "LoginView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const response = await axios.post(enviroment.URL_API + "login", {
        email: this.email,
        password: this.password,
      });
      console.log(response.data.message);
      if (response.data.message == "ok") {
        localStorage.setItem("token", response.data.jwtoken);
        this.$router.push("/dashboard").catch((error) => {
          let msg = error.response.data;
          console.log(msg);
        });
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        this.$router.push("/login").catch((error) => {
          let msg = error.response.data;
          console.log(msg);
        });
      }
    },
  },
};
</script>

<style>
.form-container {
  width: 40%;
  margin: 0 auto;
  margin-top: 1rem;
  height: 70vh;
  border-radius: 40px;
}

.subheader {
  text-align: center;
  margin: 1rem 0 0 0;
}
#content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70%;
}

.mid-form label {
  display: block;
  margin: 10px 0 5px 0;
  font-size: 17px;
}

.form-group {
  padding: 1rem;
  width: 60%;
  text-align: center;
}

.form-group input {
  width: 100%;
  padding: 0.4rem;
  border: none;
  border-bottom: 1px solid black;
  margin-top: 7px;
}

#btn {
  background: none;
  border: none;
  width: 40%;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.7rem;
  transition: all 0.2s ease;
}

#btn:hover {
  color: white;
  background: black;
}
</style>