<template>
  <div data-aos="zoom-in" id="slider" class="slider-big">
    <h1 data-aos="zoom-in-down">{{ texto }}</h1>
  </div>
</template>
  
  <script>
export default {
  name: "SliderBar",
  props: ["texto"],
};
</script>
  
  <style>
#slider {
  background: rgba(73, 155, 234, 1);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(73, 155, 234, 1) 0%,
    rgba(59, 191, 227, 1) 100%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(73, 155, 234, 1)),
    color-stop(100%, rgba(59, 191, 227, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(73, 155, 234, 1) 0%,
    rgba(59, 191, 227, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(73, 155, 234, 1) 0%,
    rgba(59, 191, 227, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(73, 155, 234, 1) 0%,
    rgba(59, 191, 227, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(73, 155, 234, 1) 0%,
    rgba(59, 191, 227, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#499bea', endColorstr='#3bbfe3', GradientType=1 );
  width: 100%;
  height: 350px;
  /*   line-height: 320px;
   */
  color: white;
  text-shadow: 0px 0px 5px #444;
}

#slider h1 {
  margin-top: 0;
  padding: 138px 0 0 0;
  text-align: center;
  font-size: 25px;
}
</style>