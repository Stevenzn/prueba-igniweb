<template>
  <div class="modal-overlay" v-show="showModal">
    <div class="modal">
      <span class="close" @click="clicked()">X</span>
      <h1>Informacion del libro a reservar</h1>
      <div class="info-book">
        <p class="book-title">
          Title:
          <span>
            {{ book?.title }}
          </span>
        </p>
        <p class="book-author">
          Author:
          <span>
            {{ book?.author }}
          </span>
        </p>
      </div>
      <div class="book-des-and-image">
        <p class="des">
          {{ book?.description }}
        </p>
        <figure class="img-modal-container">
          <img
            src="https://www.magisnet.com/wp-content/uploads/2020/05/pagina4libros.jpg"
            alt=""
          />
        </figure>
      </div>
      <form @submit.prevent="reserveItem()">
        <div class="form-group">
          <label for="num">Numero de dias a reservar</label>
          <input
            v-model="num"
            required
            autocomplete="off"
            type="number"
            name="num"
          />
        </div>
        <input class="btn-modal" type="submit" value="Realizar reserva" />
      </form>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import enviroment from "../enviroments/enviroment.js";
export default {
  name: "Modal",
  data() {
    return {
      num: "",
    };
  },
  props: {
    showModal: Boolean,
    book: Object,
  },
  methods: {
    clicked() {
      this.$emit("clicked", false);
    },
    async reserveItem() {
      axios
        .post(
          enviroment.URL_API + "reservation",
          {
            days: this.num,
            id: this.book?.id,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => {
          this.$router.push("/dashboard");
        });
    },
  },
};
</script>
  
  <style scoped>
p {
  margin: 0;
  color: red;
}
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  height: 450px;
  width: 700px;
  margin-top: 10%;
  padding: 20px 0;
  border-radius: 20px;
}

input[type="text"],
textarea,
input[type="password"],
input[type="number"] {
  width: 50%;
  min-height: 30px;
  border: 1px solid #ccc;
  padding: 3px;
  margin-bottom: 5px;
  transition: all 300ms;
}

input[type="text"]:focus {
  box-shadow: 0 0 5px #444 inset;
}

.form-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.close {
  cursor: pointer;
}

.btn-modal {
  border: none;
  background: none;
  padding: 11px;
  background: #eee;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  margin: 10px 0;
}

.btn-modal:hover {
  background: #000;
  color: #fff;
}

.info-book span{
  color: #000;
}

.book-des-and-image {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.des {
  width: 20%;
  text-align: justify;
  color: #000;
}
.img-modal-container {
  width: 20%;
}

.img-modal-container img {
  width: 100%;
  border-radius: 40%;
}

.des {
  margin: 0;
  margin-left: 10px;
}
.img-modal-container {
  margin-right: 10px;
}
</style>