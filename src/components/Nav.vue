<template>
  <nav class="nav_bar">
    <!-- <div class="container-fluid"> -->
      <div class="logo">
        <a href="#">
          <img
            :src="logo"
            alt="Logo"
          />
        </a>
      </div>
      <div class="menu">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Menú</a>
          </li>
          <li>
            <a href="#">Acerca de nosotros</a>
          </li>
          <li>
            <div class="search-container">
              <input
                type="search"
                placeholder="Busca aquí"
              />
              <img
                :src="magnifier"
                alt="lupa"
                class="search-icon"
              />
            </div>
          </li>
        </ul>
      </div>
    <!-- </div> -->
  </nav>
</template>

<style scoped src="../styles/nav.css"></style>

<script>
  import logo from "../assets/logo.png";
  import magnifier from "../assets/magnifier.png";

  export default {
    name: "Nav",
    data() {
      return {
        logo: logo,
        magnifier: magnifier,
      };
    },
  };
</script>
