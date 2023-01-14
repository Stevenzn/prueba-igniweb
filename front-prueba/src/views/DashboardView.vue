<template>
  <header id="header">
    <div class="logo-container">
      <img
        src="https://www.igniweb.com/wp-content/uploads/2019/08/Igniweb-logo.png"
        alt="logo"
      />
    </div>
    <nav class="menu">
      <ul class="menu-container">
        <li>
          <router-link to="/dashboard" active-class="active"
            >Dashboard</router-link
          >
        </li>
        <li>
          <router-link to="/book-categorys" active-class="active"
            >Books</router-link
          >
        </li>
        <li>
          <router-link
            to="/login"
            v-on:click="clearLocalStorage()"
            active-class="active"
            >Log out</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
  <section class="user-info">
    <div class="user-reservations">
      <h2 class="user-name">
        {{ user.name }}
      </h2>
      <p>Reservas activas: {{ reservation }}</p>
    </div>
    <div class="user-icono">
      <figure>
        <img src="../assets/img/user.png" alt="Icono User" />
      </figure>
    </div>
  </section>
  <div
    class="books-container"
    v-if="listReservation && listReservation.length >= 1"
  >
    <article class="book-item" v-for="item in listReservation" :key="item.id">
      <div class="info">
        <h1>{{ item.title }} - {{ item.author }}</h1>
        <span
          >El libro se entregará en la siguiente fecha: {{ item.final_date }}
        </span>
        <div>
          <button class="btn" @click="deleteItem(item.id)">DELETE</button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
export default {
  name: "LoginView",
  data() {
    return {
      user: "",
      reservation: "",
      listReservation: [],
    };
  },
  components: {},
  created() {
    this.getUser();
    this.getReserves();
  },

  methods: {
    async getUser() {
      axios
        .get(enviroment.URL_API + "user", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.user = response.data;
        });
    },
    async getReserves() {
      axios
        .get(enviroment.URL_API + "reservation", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.reservation = response.data.length;
          this.listReservation = response.data;
        });
    },
    async deleteItem(id) {
      const response = await axios
        .delete(enviroment.URL_API + "reservation/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          location.reload();
        });
    },
    clearLocalStorage() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.user-info {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 4rem;
}

.user-name {
  text-transform: uppercase;
}

.user-reservations {
  width: 70%;
  padding: 2rem;
}

.user-icono {
  width: 30%;
}

.user-icono figure {
  width: 70%;
  margin: 0 auto;
}

.user-icono img {
  width: 100%;
}
.books-container {
  width: 100%;
  margin: 5rem 0 0 0;
}

.book-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 0.4rem;
  background: rgba(108, 224, 98, 0.068);
  border-radius: 4px;
}

.info h1 {
  font-size: 25px;
}

.info span:hover {
  color: #077594;
  cursor: pointer;
}

.info span {
  font-weight: lighter;
}

.btn {
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.8rem;
  transition: background 0.1s ease-in;
  width: 40%;
  margin-top: 1rem;
}

.btn:hover {
  background: rgba(0, 0, 0, 0.397);
  color: #fff;
  border-radius: 4px;
}
</style>