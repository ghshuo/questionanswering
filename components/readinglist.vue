<template>
  <div class="reading">
    <div class="readingTitle">
      <img src="~assets/image/titleLogo.png" alt="titleLogo" />
      <span>今日要闻导读</span>
    </div>
    <div class="readingItem">
      <div class="readingItemLeft">正</div>
      <div class="readingItemRight">
        <div class="readingItemTop">
          <div class="readingItemTopConter">
            <div class="Title">
              1.
              2019年08月09日婴幼儿配方奶粉产品配方注册决定带领信息——已批准2019年08月09日婴幼儿配方奶粉产品配方注册决定带领信息——已批准2019年08月09日婴幼儿配方奶粉产品配方注册决定带领信息——已批准2019年08月09日婴幼儿配方奶粉产品配方注册决定带领信息——已批准
            </div>
            <div class="brand">美素佳儿</div>
          </div>
          <div class="abstract">
            摘要：蛋白质（protein）是生命的物质基础，是有机大分子，氨基酸是蛋白质的基本组成单位。它是与生命及与各种形式的生命活动紧密联系在一起的物质。机体中的每一个细胞和所有重要组成部分都有蛋白质参与。蛋白质占人体重量的16%~20%新
          </div>
          <div class="information">
            <div class="link">
              链接：https://www.yidianzixun.com/article/0P0VaT2V
            </div>
            <div class="Published">
              发布者：<span title="界面新闻">界面新闻界面新闻界面新闻</span>
            </div>
            <div class="insertion">
              <div class="Platform">
                平台：<span title="一点号">一点号界面新闻</span>
              </div>
            </div>
            <div class="Date">
              发布时间：<span title="2020.04.1">9999.99.99</span>
            </div>
            <div class="Volume">
              传播量：<span class="volumeSpan">232323232323</span>
            </div>
            <div class="Medial">
              一类媒体传播量：<span class="mediaSpan">2323232323232323</span>
            </div>
          </div>
        </div>
        <div class="readingItemBottom"></div>
      </div>
    </div>
    <!-- <div class="headerTime">2020-03-25 18:00 ——2020-03-25 23:59</div> -->
    <!-- <img class="logo" src="~assets/image/logo.jpg" alt="logo" /> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.reading {
  width: 1200px;
  padding: 80px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 14px 0px rgba(218, 218, 218, 0.36);
  border-radius: 20px;
  margin-top: 60px;

  .readingTitle {
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #d1d1d1;
    img {
      width: 36px;
      height: 25px;
    }
    span {
      font-size: 18px;
      margin-left: 9px;
    }
  }
  .readingItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
    .readingItemLeft {
      width: 27px;
      height: 27px;
      border: 1px solid #45d4ff;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #45d4ff;
      border-radius: 4px;
    }
    .readingItemRight {
      width: 997px;
      .readingItemTop {
        .readingItemTopConter {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;

          .Title {
            font-size: 18px;
            height: 27px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .brand {
            font-size: 14px;
            color: rgba(255, 255, 255, 1);
            padding: 4px 9px;
            background: rgba(46, 187, 196, 1);
            border-radius: 4px;
            white-space: nowrap;
          }
        }
        .abstract {
          width: 100%;
          border-bottom: 1px solid #ccc;
          padding-bottom: 18px;
          color: rgb(102, 102, 102);
          font-size: 14px;
          margin-top: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .information {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 12px;
          color: rgb(192, 192, 192);
          cursor: pointer;
          margin-top: 5px;

          .link {
            width: 224px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .Published {
            width: 159px;
          }
          .insertion {
            width: 159px;
          }
          .Date {
            width: 179px;
          }
          .Volume {
            width: 108px;
          }
          .Medial {
            width: 159px;
            float: right;
          }
        }
      }
    }
  }
}
</style>
