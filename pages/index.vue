<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        questionanswering
      </h1>
      <h2 class="subtitle">
        Welcome to the iView + Nuxt.js template
      </h2>
      <div class="links">
        <Button type="primary" target="_blank" to="https://nuxtjs.org/">
          Documentation
        </Button>
        <Button target="_blank" to="https://github.com/nuxt/nuxt.js">
          GitHub
        </Button>
        <Button target="_blank" to="https://www.iviewui.com/">
          iView
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: red;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}

.links {
  padding-top: 15px;
}
</style>
