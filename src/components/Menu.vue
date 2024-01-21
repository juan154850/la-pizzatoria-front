<template>
  <div class="container">
    <h2>Eat Fresh & Healthy</h2>
    <!-- Menú -->
    <div class="row mt-4 mb-4 ms-auto">
      <!-- Pizzas -->
      <div
        :class="[
          'col-12',
          'col-sm-4',
          'menu-header',
          { 'menu-header-active': activeMenu === 'pizzas' },
        ]"
        @click="activeMenu = 'pizzas'"
      >
        <font-awesome-icon
          icon="fa-solid fa-pizza-slice"
          size="lg"
        />
        <strong class="ms-3">Pizzas</strong>
      </div>
      <!-- Hamburguesas -->
      <div
        :class="[
          'col-12',
          'col-sm-4',
          'menu-header',
          { 'menu-header-active': activeMenu === 'hamburguesas' },
        ]"
        @click="activeMenu = 'hamburguesas'"
      >
        <font-awesome-icon
          icon="fa-solid fa-burger"
          size="lg"
        />
        <strong class="ms-3">Hamburguesas</strong>
      </div>
      <!-- Papas -->
      <div
        :class="[
          'col-12',
          'col-sm-4',
          'menu-header',
          { 'menu-header-active': activeMenu === 'papas' },
        ]"
        @click="activeMenu = 'papas'"
      >
        <img
          width="20"
          height="20"
          src="https://img.icons8.com/ios-glyphs/20/french-fries.png"
          alt="french-fries"
        />
        <strong class="ms-3">Papas</strong>
      </div>
    </div>
    <!-- Cards -->
    <!-- Pizzas -->
    <div
      class="row mt-c mb-c ms-auto justify-content-between justify-content-center"
      v-show="activeMenu === 'pizzas'"
    >
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="pizza"
        />
        <div class="menu-content">
          <h5 class="menu-title">Pizza 1</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$25.000</span>
        </div>
      </div>
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="pizza"
        />
        <div class="menu-content">
          <h5 class="menu-title">Pizza 2</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$25.000</span>
        </div>
      </div>
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="pizza"
        />
        <div class="menu-content">
          <h5 class="menu-title">Pizza 3</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$25.000</span>
        </div>
      </div>
    </div>
    <!-- Hamburguesas -->
    <div
      class="row mt-c mb-c ms-auto justify-content-between justify-content-center"
      v-show="activeMenu === 'hamburguesas'"
    >
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="hamburguesa"
        />
        <div class="menu-content">
          <h5 class="menu-title">Hamburguesas 1</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$30.000</span>
        </div>
      </div>
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="hamburguesa"
        />
        <div class="menu-content">
          <h5 class="menu-title">Hamburguesas 2</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$20.000</span>
        </div>
      </div>
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="hamburguesa"
        />
        <div class="menu-content">
          <h5 class="menu-title">Hamburguesas 3</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$25.000</span>
        </div>
      </div>
    </div>
    <!-- Papas -->
    <div
      class="row mt-c mb-c ms-auto justify-content-between justify-content-center"
      v-show="activeMenu === 'papas'"
    >
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="papas"
        />
        <div class="menu-content">
          <h5 class="menu-title">Papas 1</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$15.000</span>
        </div>
      </div>
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="papas"
        />
        <div class="menu-content">
          <h5 class="menu-title">Papas 2</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$20.000</span>
        </div>
      </div>
      <div class="col-12 col-sm-3 ms-5 menu-card">
        <img
          class="menu-img"
          :src="papas"
        />
        <div class="menu-content">
          <h5 class="menu-title">Papas 3</h5>
          <p class="menu-text">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores commodi, quas maxime veniam ad non eaque impedit officiis
            itaque? Reiciendis fugit nesciunt nobis. Necessitatibus nostrum sed
            officiis minus beatae provident."
          </p>
          <span class="menu-price">$24.000</span>
        </div>
      </div>
    </div>
    <!-- Mostrar todas la recetas -->
    <button
      type="button"
      class="btn btn-outline-primary btn-sm see-all-btn"
    >
      <font-awesome-icon icon="fa-solid fa-bars" />
      See all
    </button>
  </div>
</template>

<script>
  // Components
  // import SocialIcon from "./SocialIcon.vue";

  // Images
  import pizza from "../assets/home-pizza.webp";
  import papas from "../assets/papas.webp";
  import hamburguesa from "../assets/hamburguesa.png";

  export default {
    name: "Menu",
    components: {
      // SocialIcon,
    },
    data() {
      return {
        pizza,
        papas,
        hamburguesa,
        activeMenu: "pizzas",
      };
    },
  };
</script>

<style scoped src="../styles/menu.css"></style>
