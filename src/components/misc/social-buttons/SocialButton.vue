<template>
  <div type="button" class="btn btn-social btn-li">
    <a v-bind:href="options.link" target="_blank" v-bind:style="{ backgroundColor: options.color}">
      <i class="fa" v-bind:class="options.icon"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: "SocialButton",
    props: {
      options: {
        type:Object
      }
    },
  }
</script>

<style scoped>

  .btn-social {
    margin: auto 0;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: .81rem;
    border: 0;
    border-radius: 0;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
    padding: 0;
    flex-grow: 1
  }

  .btn-social a {
    width: 48px;
    height: 48px;
    transition: padding .15s ease-in-out .15s, width .15s ease-in-out;
    color: #ffffff !important;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }

  .btn-social a:hover {
    width: 72px;
  }

</style>
