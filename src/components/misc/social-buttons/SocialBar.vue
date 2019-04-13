<template>
  <div class="social">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "SocialBar"
  }
</script>

<style scoped>
  @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  @media (max-width: 767px) {
    .social {
      position: fixed;
      display: flex;
      flex-direction: row;
      bottom: 0;
      z-index: 99;
      width: 90%;
      left: 50%;
      transform: translateX(-50%)
    }
  }

  @media (min-width: 768px) {
    .social {
      position: fixed;
      display: flex;
      flex-direction: column;
      top: 100px;
      left: 20px;
      bottom: auto;
      margin: auto
    }
  }
</style>
