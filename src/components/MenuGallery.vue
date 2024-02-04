<template>
  <div class="gallery-container">
    <font-awesome-icon icon="fa-solid fa-chevron-left" @click="shiftGallery(-1)" @dblclick.prevent size="2x" class="gallery-button"/>
    <div class="gallery">
      <div v-for="(image, index) in visibleImages" :key="index" class="image-container">
        <img :src="image.src" :class="getImageClass(index)" alt="Gallery Image" />
        <div class="image-card" v-if="index === 2">
          <h3>{{ image.title }}</h3>
          <p>{{ image.description }}</p>
        </div>
      </div>

    </div>
    <font-awesome-icon icon="fa-solid fa-chevron-right" @click="shiftGallery(1)" @dblclick.prevent size="2x" class="gallery-button"/>
  </div>
</template>

<script>

import pizza from "../assets/home-pizza.webp";
import papas from "../assets/papas.webp";
import hamburguesa from "../assets/hamburguesa.png";

export default {
  data() {
    return {
      images: [
        { src: pizza, title: 'Pizza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam illo aut cum tempore officiis minima nostrum repudiandae. Totam, unde sint laboriosam animi expedita quae itaque adipisci mollitia quis et?' },
        { src: papas, title: 'Papas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam illo aut cum tempore officiis minima nostrum repudiandae. Totam, unde sint laboriosam animi expedita quae itaque adipisci mollitia quis et?' },
        { src: hamburguesa, title: 'Hamburguesa', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam illo aut cum tempore officiis minima nostrum repudiandae. Totam, unde sint laboriosam animi expedita quae itaque adipisci mollitia quis et?' },
        { src: pizza, title: 'Pizza', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam illo aut cum tempore officiis minima nostrum repudiandae. Totam, unde sint laboriosam animi expedita quae itaque adipisci mollitia quis et?' },
        { src: papas, title: 'Papas', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius numquam illo aut cum tempore officiis minima nostrum repudiandae. Totam, unde sint laboriosam animi expedita quae itaque adipisci mollitia quis et?' },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    visibleImages() {
      const start = (this.currentIndex - 2 + this.images.length) % this.images.length;
      return Array.from({ length: 5 }, (_, index) => this.images[(start + index) % this.images.length]);
    },
  },
  methods: {
    shiftGallery(direction) {
      this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
    },
    getImageClass(index) {
      if (index === 2) return 'main-image';
      if (index === 1 || index === 3) return 'side-image';
      return 'far-side-image';
    },
  },
};
</script>

<style scoped src="../styles/menuGallery.css">


</style>