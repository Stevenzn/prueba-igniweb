<template>
  <HeaderComponent data-aos="zoom-in"> </HeaderComponent>
  <h2 data-aos="fade-up" class="title">Prueba tecnica</h2>
  <SliderBar
    texto="En este proyecto se trabajo con algunas de las siguientes herramientas y/o tecnologias:

"
  ></SliderBar>
  <main class="main-content">
    <TechnologiesComponent
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ut quasi iusto! Hic repudiandae aspernatur ipsum alias quasi, temporibus ducimus harum doloremque molestiae enim ut voluptatum odio exercitationem perferendis?
"
      nameTech="Vue Js"
    >
      <img
        class="vue card-img"
        src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png"
        alt="imagen"
      />
    </TechnologiesComponent>
    <TechnologiesComponent
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ut quasi iusto! Hic repudiandae aspernatur ipsum alias quasi, temporibus ducimus harum doloremque molestiae enim ut voluptatum odio exercitationem perferendis?
"
      nameTech="Node Js"
    >
      <img
        class="vue card-img"
        src="https://damiandeluca.com.ar/wp-content/uploads/2018/03/nodejs.png"
        alt="imagen"
      />
    </TechnologiesComponent>
    <TechnologiesComponent
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ut quasi iusto! Hic repudiandae aspernatur ipsum alias quasi, temporibus ducimus harum doloremque molestiae enim ut voluptatum odio exercitationem perferendis?
"
      nameTech="MySql"
    >
      <img
        class="vue card-img"
        src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
        alt="imagen"
      />
    </TechnologiesComponent>
    <TechnologiesComponent
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ut quasi iusto! Hic repudiandae aspernatur ipsum alias quasi, temporibus ducimus harum doloremque molestiae enim ut voluptatum odio exercitationem perferendis?
"
      nameTech="Swiper Js"
    >
      <img
        class="vue card-img"
        src="https://swiperjs.com/images/share-banner-3.png"
        alt="imagen"
      />
    </TechnologiesComponent>
    <TechnologiesComponent
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ut quasi iusto! Hic repudiandae aspernatur ipsum alias quasi, temporibus ducimus harum doloremque molestiae enim ut voluptatum odio exercitationem perferendis?
"
      nameTech="Sweet Alert"
    >
      <img
        class="vue card-img"
        src="https://sweetalert2.github.io/images/sweetalert2-social.png"
        alt="imagen"
      />
    </TechnologiesComponent>
    <TechnologiesComponent
      paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum suscipit ut quasi iusto! Hic repudiandae aspernatur ipsum alias quasi, temporibus ducimus harum doloremque molestiae enim ut voluptatum odio exercitationem perferendis?
"
      nameTech="Aos"
    >
      <img
        class="vue card-img"
        src="https://vabadus.es/images/articulos/5c935f67945ea461297235.png"
        alt="imagen"
      />
    </TechnologiesComponent>
  </main>
  <FooterComponent></FooterComponent>
</template>

<script>
import FooterComponent from "../components/FooterComponent.vue";
import TechnologiesComponent from "../components/TechnologiesComponent.vue";
import SliderBar from "../components/SliderBar.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  name: "HomeView",
  data() {
    return {
      imgs: [],
    };
  },
  components: {
    HeaderComponent,
    SliderBar,
    FooterComponent,
    TechnologiesComponent,
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
}

.vue {
  width: 100%;
}

.main-content {

  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
</style>