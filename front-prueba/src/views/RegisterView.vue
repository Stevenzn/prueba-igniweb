<template>
  <HeaderComponent data-aos="zoom-in"></HeaderComponent>
  <main class="form-container">
    <h1 data-aos="fade-up" class="subheader register">Registro</h1>
    <form data-aos="fade-right" @submit.prevent="register" id="content">
      <div></div>
      <div class="form-group">
        <label for="nombre">Nombre completo</label>
        <input
          v-model="name"
          required
          autocomplete="off"
          type="text"
          name="nombre"
        />
      </div>
      <div class="form-group">
        <label for="email">Correo</label>
        <input
          v-model="email"
          required
          autocomplete="off"
          type="email"
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          v-model="password"
          required
          autocomplete="off"
          type="password"
          name="password"
        />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirmar contraseña</label>
        <input
          v-model="confirm_password"
          required
          autocomplete="off"
          type="password"
          name="confirm-password"
        />
      </div>
      <input
        :disabled="!email && !password"
        id="btn"
        type="submit"
        value="Enviar"
      />
    </form>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "RegisterView",
  components: {
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirm_password) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Tus contraseñas no coinciden",
        });
        return;
      } else {
        const response = await axios.post(enviroment.URL_API + "user", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        if (response.status == 201) {
          this.$swal
            .fire({
              position: "center",
              icon: "success",
              title: "Registro exitoso!",
              showConfirmButton: false,
              timer: 2000,
            })
            .then(() => {
              this.$router.push("/login");
            });
        }
      }
    },
  },
};
</script>

<style>
.register {
  margin: 3rem 0;
}
</style>