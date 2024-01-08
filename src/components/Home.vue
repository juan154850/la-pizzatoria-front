<template>
  <div class="container text-center ms-auto mt-5 mb-5">
    <!-- Contenedor principal -->
    <div class="row align-items-center flex-column-reverse flex-md-row">
      <!-- Ttitulo principal y párrafo-->
      <div class="col text-start">
        <h2 class="h3 h1-md">It's not just a Food</h2>
        <h2 class="h3 h1-md">Its a Expirence!</h2>
        <p class="lead">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non facere
          id repellendus ipsum nesciunt veniam nostrum obcaecati ad soluta fuga?
          Necessitatibus quod sit sint molestiae qui omnis placeat aliquid
          adipisci?
        </p>
        <!-- Botones -->
        <div class="row justify-content-center">
          <!-- Boton de menu -->
          <div class="col-12 col-sm-6 col-md-4">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm custom-button w-100"
              @click="testConsole"
            >
              Nuestro menú
            </button>
          </div>
          <!-- Boton de acerca de nosotros -->
          <div class="col-12 col-sm-6 col-md-4">
            <button
              type="button"
              class="btn btn-outline-secondary btn-sm custom-button w-100"
            >
              Acerca de nosotros
            </button>
          </div>
        </div>
      </div>
      <!-- Imagen -->
      <div class="col">
        <img
          :src="pizza"
          alt="Imagen de nuestra pizza especial"
          class="img-fluid"
          style="max-width: 75%; max-height: 90%"
        />
      </div>
    </div>
  </div>
</template>

<script>
  // Components
  // import SocialIcon from "./SocialIcon.vue";

  // Images
  import pizza from "../assets/home-pizza.webp";

  export default {
    name: "Home",
    components: {
      // SocialIcon,
    },
    data() {
      return {
        pizza,
        form: {
          name: "juan",
          email: "juan123@gmail.com",
          message: "12321",
        },
      };
    },
    methods: {
      testConsole() {
        console.log(this.form);
      },
    },
  };
</script>

<style scoped src="../styles/home.css"></style>
