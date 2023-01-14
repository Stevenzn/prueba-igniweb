<template>
  <header id="header">
    <div class="logo-container">
      <router-link to="/">

        <img
          src="https://www.igniweb.com/wp-content/uploads/2019/08/Igniweb-logo.png"
          alt="logo"
        />
      </router-link>
    </div>
    <nav class="menu">
      <ul class="menu-container">
        <li>
          <router-link active-class="active" to="/">Inicio</router-link>
        </li>

        <li>
          <router-link active-class="active" to="/register"
            >Registro</router-link
          >
        </li>
        <li>
          <router-link to="/login" active-class="active">Log In</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container {
  width: 20%;
}

.logo-container img {
  width: 100%;
}

.menu-container {
  display: flex;
}

.menu-container li {
  list-style: none;
  margin: 0 15px;
  font-size: 18px;
}
.menu-container a {
  color: #000;
}
.menu-container a {
  text-decoration: none;
}


</style>