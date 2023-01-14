<template>
  <Modal :book="bookToReservate" @clicked="closeModal" :showModal="modal">
  </Modal>
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
  <section>
    <input
      placeholder="Search category"
      type="text"
      v-model="book"
      class="search"
    />
  </section>
  <article class="books-container" v-if="listBooks && listBooks.length >= 1">
    <div class="book-item" v-for="item in filterSearch" :key="item.id">
      <div class="info">
        <h1> {{ item.title }}<span>  - {{ item.author }} </span></h1>
      </div>
      <button class="btn" @click="openModal(item.id)">reservar</button>
    </div>
  </article>
  <FooterComponent></FooterComponent>
</template>
  
  <script>
import Modal from "../components/Modal.vue";
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
import FooterComponent from "../components/FooterComponent.vue";
export default {
  name: "LoginView",
  data() {
    return {
      book: "",
      num: "",
      reservation: "",
      listBooks: [],
      itemId: null,
      modal: false,
      bookToReservate: null,
    };
  },
  components: {
    Modal,
    FooterComponent,
  },
  created() {
    /* this.getReserves(); */
    this.getBooks();
  },
  computed: {
    filterSearch() {
      return this.listBooks.filter((post) => {
        return post.category.toLowerCase().includes(this.book.toLowerCase());
      });
    },
  },
  methods: {
    closeModal(value) {
      this.modal = value;
    },
    openModal(id) {
      this.bookToReservate = this.listBooks.find((item) => item.id === id);
      this.modal = true;
    },
    async getBooks() {
      axios
        .get(enviroment.URL_API + "book", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.listBooks = response.data;
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

.search {
  display: flex;
  width: 40%;
  margin: 0 auto;
  padding: 0.5rem;
}

.books-container {
  width: 100%;
  margin: 5rem 0 0 0;
}

.book-item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 0.4rem;
  background:  rgba(108, 224, 98, 0.068);
  border-radius: 4px;
}

.info h1{
  font-size: 25px;
}

.info span:hover{
  color:#077594;
  cursor: pointer;
}

.info span{
  font-weight: lighter;
}

.btn{
  font-size: 16px;
  text-transform: uppercase;
  cursor:pointer;
  background: none;
  border: none;
  padding: 0.8rem;
  width: 15%;
  transition: background 0.1s ease-in;
}

.btn:hover{
  background: rgba(0, 0, 0, 0.397);
  color: #fff;
  border-radius: 4px;
}
</style>

