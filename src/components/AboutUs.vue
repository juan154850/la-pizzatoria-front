<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col col-md-12 pb-4 pt-5">
        <h3>About us</h3>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col col-md-4">
        <img
          :src="OurTeam"
          alt="out team image"
          class="img-left"
        />
      </div>
      <div class="col col-md-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas perspiciatis deleniti voluptates iure cupiditate in mollitia. Earum sed harum, praesentium ex assumenda quaerat suscipit nam atque accusamus, molestiae quisquam doloremque corrupti nihil quidem dicta! Numquam incidunt impedit animi quaerat ea asperiores voluptas, consequuntur quo rem fugit veritatis dolorem quae officia sapiente tenetur quia ex vel. Vero provident nesciunt dignissimos fugiat eos mollitia eum. Ut, officia rem, assumenda eaque reprehenderit libero delectus vero sed ipsum asperiores molestias
          vel distinctio dolorem numquam, reiciendis non ex. Eum aspernatur repellat maiores, inventore error provident debitis natus perferendis? Eveniet quaerat provident ex! Eius a laborum quisquam neque ex optio similique nulla ipsum, tempora eaque temporibus debitis beatae maiores dolore at! Illum, libero officiis eaque quidem rem dolor tenetur nulla suscipit, nisi incidunt deleniti, corporis laudantium alias! Sequi deserunt hic recusandae fuga reiciendis nam et qui, beatae ad? Rerum velit nam totam voluptate eligendi. Commodi veritatis illum repellat ab atque velit corporis eos
          doloribus. Numquam, asperiores temporibus sapiente dolore consequuntur unde nostrum expedita molestiae est molestias corporis modi totam sunt omnis natus
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import OurTeam from '../assets/team.webp';

  export default {
    data() {
      return {
        OurTeam,
      };
    },
    computed: {},
    methods: {},
    watch: {},
    mounted() {},
  };
</script>

<style scoped src="../styles/AboutUs.css"></style>
