<template>
  <div class="container">
    <div class="header">
      <div class="headerTitle"><span>美赞臣</span>监测日报</div>
      <div class="headerTime">2020-03-25 18:00 ——2020-03-25 23:59</div>
      <img class="logo" src="~assets/image/logo.jpg" alt="logo" />
    </div>
    <div class="content">
      <Readinglist></Readinglist>
    </div>
  </div>
</template>

<script>
import Readinglist from '~/components/readinglist.vue'

export default {
  head () {
    return {
      title: '美赞臣监测日报',
      meta: [
        { hid: 'description', name: '美赞臣监测日报', content: '10分钟美赞臣监测日报' }
      ]
    }
  },
  components: {
    Readinglist
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  .header {
    width: 100%;
    height: 574px;
    background: url(~assets/image/branner.png);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .headerTitle {
      font-size: 36px;
      font-weight: 600;
      color: #ffffff;
      span {
        color: rgba(0, 249, 247, 1);
      }
    }
    .headerTime {
      font-size: 13px;
      font-weight: 400;
      margin-top: 28px;
      color: rgba(255, 255, 255, 1);
    }
    .logo {
      width: 121px;
      height: 32px;
      margin-top: 33px;
      background: rgba(216, 216, 216, 1);
      border-radius: 23px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
  }
}
</style>
