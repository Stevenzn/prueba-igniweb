<template>
    <div data-aos="fade-up" class="technologies-card">
      <figure>
        <slot> </slot>
      </figure>
      <h1 class="card-title-tech">{{ nameTech }}</h1>
      <p>{{ paragraph }}</p>
    </div>
</template>

<script>
export default {
  name: "TechnologiesComponent",
  props: {
    nameTech: String,
    paragraph: String
  },
};
</script>

<style>

.technologies-container{
  width: 80%;
}

.technologies-card{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  padding: 1.5rem;
}
figure {
  margin: 0;
  width: 100%;
}


</style>