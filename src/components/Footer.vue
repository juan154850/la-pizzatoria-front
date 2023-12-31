<template>
  <div class="footer-clean">
    <footer>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 item">
            <h3>Pizzas</h3>
            <ul>
              <li><a href="#">Hawaiana</a></li>
              <li><a href="#">Pollo con champiñones</a></li>
              <li><a href="#">Carne BBQ</a></li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 item">
            <h3>Hamburguesas</h3>
            <ul>
              <li><a href="#">Super pollo miel y tocineta</a></li>
              <li><a href="#">Trifásica</a></li>
              <li><a href="#">Mixta</a></li>
            </ul>
          </div>

          <div class="col-12 col-sm-6 col-md-4 col-lg-3 item">
            <h3>Papas</h3>
            <ul>
              <li><a href="#">Salchipapas</a></li>
              <li><a href="#">Porcion normal</a></li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 item social">
            <SocialIcon
              url="https://twitter.com/"
              :icon="logoTwitter"
              name="Twitter"
            />
            <SocialIcon
              url="https://instagram.com/"
              :icon="logoInstagram"
              name="Instagram"
            />
            <SocialIcon
              url="https://facebook.com/"
              :icon="logoFacebook"
              name="Facebook"
            />
            <SocialIcon
              url="https://whatsapp.com/"
              :icon="logoWhatsApp"
              name="WhatsApp"
            />
            <p class="copyright">La Pizzatoría © 2023</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  // Components
  import SocialIcon from "./SocialIcon.vue";

  // Images
  import logoTwitter from "../assets/twitter.png";
  import logoInstagram from "../assets/instagram.png";
  import logoFacebook from "../assets/facebook.png";
  import logoWhatsApp from "../assets/whatsapp.png";

  export default {
    name: "MyFooter",
    components: {
      SocialIcon,
    },
    data() {
      return {
        logoTwitter,
        logoInstagram,
        logoFacebook,
        logoWhatsApp,
      };
    },
  };
</script>

<style scoped src="../styles/footer.css"></style>
