<template>
  <div class="reading">
    <div class="readingTitle">
      <img src="~assets/image/titleLogo.png" alt="titleLogo" />
      <span>今日要闻导读</span>
    </div>
    <div class="readingItem" v-for="(item, index) in datalist" :key="index">
      <div v-if="item.zf == 1" class="readingItemLeft positive">正</div>
      <div v-else-if="item.zf == 3" class="readingItemLeft central">中</div>
      <div v-else class="readingItemLeft negative">负</div>
      <div class="readingItemRight">
        <div class="readingItemTop">
          <div class="readingItemTopConter">
            <div class="Title">
              <a target="_blank" :href="item.url">{{ item.title }}</a>
            </div>
            <div class="brand">美素佳儿</div>
          </div>
          <div class="abstract">摘要：{{ item.content }}</div>
          <div class="information">
            <div class="link">
              <a target="_blank" :href="item.url" :title="item.url"
                >链接：{{ item.url }}</a
              >
            </div>
            <div class="Published">
              发布者：<span :title="item.publisher_name">{{
                item.publisher_name
              }}</span>
            </div>
            <div class="insertion">
              <div class="Platform">
                <div v-if="item.name != null">
                  平台：<span :title="item.name">{{ item.name }}</span>
                </div>
              </div>
            </div>
            <div class="Date">
              发布时间：<span title="2020.04.1">{{
                item.screen_time | moment
              }}</span>
            </div>
            <div class="Volume">
              传播量：<span class="volumeSpan" @click="transmission()">{{ item.num_one }}</span>
            </div>
            <div class="Medial">
              一类媒体传播量：<span class="mediaSpan">{{
                item.is_yileimeiti
              }}</span>
            </div>
          </div>
        </div>
        <div class="readingItemBottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [
        {
          id: 137851946,
          mid: 0,
          keyword: '乳业',
          title:
            '天润乳业2019年度净利同比增长22.25% 计划2020年实现营业收入16.70亿元',
          url:
            'https://k.sina.com.cn/article_2377587254_8db71a3602000prhc.html?from=news&subch=onews',
          yq: 51,
          zf: 3,
          update_time: 1587704951,
          screen_name: '中国网财经',
          content:
            '中国网财经4月24日讯(记者 李静)天润乳业(SH：600419)4月23日晚间 发布2019年年度报告称 报告期内公司实现营收16.27亿元 同比增长11.26%；归属于上市公司股东的净利润为1.40亿元 较上年同期增长22.25%',
          screen_time: 1587675072,
          publisher_id: 14836,
          recommended_pos: '',
          domain: 'k.sina.com.cn',
          is_important: 0,
          similar_id: 137852905,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '中国网财经',
          news_type: 0,
          interest_role: 18,
          medium: 1,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '新浪新闻',
          num: 20,
          num_one: 20,
          num_seven: 20,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137817744,
          mid: 0,
          keyword: '乳业',
          title: '资金关注业绩确定性消费白马股持续走强',
          url:
            'https://k.sina.com.cn/article_1905628462_7195952e02000yn0j.html?from=finance',
          yq: 51,
          zf: 3,
          update_time: 1587686803,
          screen_name: '上海证券报',
          content:
            '⊙记者 屈红燕 ○编辑 孙放     昨日 A股主要指数均小幅下行 但业绩较具确定性的食品饮料股逆势大涨 贵州茅台昨日继续创出历史新高 盘中摸高至1265.68元 此外 双塔食品、海欣食品、科迪乳业等一批个股也强劲涨停',
          screen_time: 1587681125,
          publisher_id: 9235,
          recommended_pos: '',
          domain: 'k.sina.com.cn',
          is_important: 0,
          similar_id: 137817744,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '上海证券报',
          news_type: 0,
          interest_role: 18,
          medium: 4,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '新浪新闻',
          num: 12,
          num_one: 12,
          num_seven: 12,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137825997,
          mid: 0,
          keyword: '乳制品',
          title: '英国金融时报刊文：中国复工复产为世界经济带来曙光',
          url:
            'https://k.sina.com.cn/article_1663612603_6328b6bb02000qny0.html?from=finance',
          yq: 51,
          zf: 3,
          update_time: 1587690537,
          screen_name: '中国经济网',
          content:
            '从在中国拥有生产电热水壶生产线的英国制造企业Strix 到新西兰的乳制品出口企业 日本汽车厂商 再到美国食品快餐巨头 中国市场都至关重要 文章还引用Strix首席执行官马克·巴特利特的观点称 得益于应对非典和其他流行性疾病的经验',
          screen_time: 1587685680,
          publisher_id: 14124,
          recommended_pos: '',
          domain: 'k.sina.com.cn',
          is_important: 0,
          similar_id: 137817736,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '中国经济网',
          news_type: 0,
          interest_role: 18,
          medium: 4,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '新浪新闻',
          num: 11,
          num_one: 11,
          num_seven: 11,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137816907,
          mid: 0,
          keyword: '乳业',
          title: '庄园牧场(01533):东方乳业未完成2019年度业绩承诺',
          url: 'https://m.hexun.com/hkstock/2020-04-23/201125788.html',
          yq: 19,
          zf: 3,
          update_time: 1587686757,
          screen_name: '和讯网',
          content:
            '智通财经APP讯,庄园牧场(002910,股吧)(01533)发布公告,就有关收购西安东方<em>乳业</em>有限公司(东方<em>乳业</em>)82%股权...',
          screen_time: 1587647157,
          publisher_id: 4333,
          recommended_pos: '',
          domain: 'm.hexun.com',
          is_important: 0,
          similar_id: 137792318,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 1,
          is_yileimeiti: 0,
          publisher_name: '和讯网',
          news_type: 0,
          interest_role: 18,
          medium: null,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: null,
          num: 9,
          num_one: 9,
          num_seven: 9,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137828049,
          mid: 0,
          keyword: '奶粉',
          title:
            '疫情之下“不能让宝宝断粮”，这家乳企开足马力赶生产！6年逆袭，让人们相信国产奶粉好品质',
          url: 'http://toutiao.com/group/6818909638952485388/',
          yq: 8,
          zf: 3,
          update_time: 1587693640,
          screen_name: '21世纪经济报道',
          content:
            '受疫情影响，美国、日本、荷兰、澳洲、德国、爱尔兰等奶粉出口国以及世界奶源重镇都不同程度地遭到波及，不少进口奶粉品牌的供应都成了问题。',
          screen_time: 1587690060,
          publisher_id: 16931,
          recommended_pos: '',
          domain: 'toutiao.com',
          is_important: 0,
          similar_id: 137828049,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '21世纪经济报道',
          news_type: 0,
          interest_role: 18,
          medium: 4,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '今日头条',
          num: 9,
          num_one: 9,
          num_seven: 9,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137808754,
          mid: 0,
          keyword: '乳业',
          title: '共青团兰州市委携爱心企业向贫困村捐赠20万元奶粉',
          url:
            'https://k.sina.com.cn/article_1655444627_62ac1493020015e7r.html?from=local',
          yq: 51,
          zf: 3,
          update_time: 1587654559,
          screen_name: '潇湘晨报',
          content:
            '4 月 23 日上午 兰州团市委、市红十字会携手黑龙江飞鹤乳业有限公司 向榆中县马坡乡、韦营乡、县妇幼保健院捐赠价值 20 万元的奶粉和爱心大礼包 据飞鹤乳业陕甘青负责人介绍 今年将通过团市委向三县一区贫困村捐赠价值',
          screen_time: 1587645641,
          publisher_id: 33090,
          recommended_pos: '',
          domain: 'k.sina.com.cn',
          is_important: 0,
          similar_id: 137791855,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '潇湘晨报',
          news_type: 0,
          interest_role: 18,
          medium: 1,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '新浪新闻',
          num: 8,
          num_one: 8,
          num_seven: 8,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137850010,
          mid: 0,
          keyword: '奶粉',
          title: '你海淘的奶粉到了！四川与新西兰企业合作奶粉跨境购项目正式实施',
          url: 'https://www.yidianzixun.com/article/0PCpyyuP',
          yq: 41,
          zf: 3,
          update_time: 1587704593,
          screen_name: '红星新闻',
          content:
            '4月19日，随着一批13万罐、货值近千万的新西兰原罐原装进口的婴幼儿鲜奶粉到达运抵成都高新综保区的海关保税仓库，四川消费者只要动动手指，就能通过跨境电商网购平台，买到从保税仓直接发货的进口奶粉。',
          screen_time: 1587673001,
          publisher_id: 23290,
          recommended_pos: '',
          domain: 'www.yidianzixun.com',
          is_important: 0,
          similar_id: 137852027,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '红星新闻',
          news_type: 0,
          interest_role: 18,
          medium: null,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '一点号',
          num: 8,
          num_one: 8,
          num_seven: 8,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137874099,
          mid: 0,
          keyword: '奶粉',
          title: '疫情挑战全球供应国产奶粉的春天来了?',
          url:
            'https://baijiahao.baidu.com/s?id=1664842161242944924&wfr=spider&for=pc',
          yq: 47,
          zf: 3,
          update_time: 1587719292,
          screen_name: '新浪财经',
          content:
            '对这个问题,刘莹(化名)最近已感觉吃力,她的客户们发来代购日本奶粉的需求,可是受到物流影响,作为个体代购商的刘莹,即便她给每盒奶粉加上了20元的物流成本费,通过...\n    \n                                            查看更多相关资讯>>  -  \n                          \n                百度快照',
          screen_time: 1587716580,
          publisher_id: 11680,
          recommended_pos: '',
          domain: 'baijiahao.baidu.com',
          is_important: 0,
          similar_id: 137873926,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '新浪财经',
          news_type: 0,
          interest_role: 18,
          medium: 4,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '百家号',
          num: 7,
          num_one: 7,
          num_seven: 7,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137847637,
          mid: 0,
          keyword: '乳制品',
          title: '引领发酵乳制品营养研究与消费市场 中乳协召开线上研讨会',
          url:
            'https://k.sina.com.cn/article_1663612603_6328b6bb02000qo2s.html?from=news&subch=onews',
          yq: 51,
          zf: 3,
          update_time: 1587701382,
          screen_name: '中国经济网',
          content:
            '经济日报-中国经济网北京4月24日讯 乳制品是平衡膳食、增强体质不可或缺的营养食品 其中 发酵乳是乳制品“大家族中的重要一员”',
          screen_time: 1587697560,
          publisher_id: 14124,
          recommended_pos: '',
          domain: 'k.sina.com.cn',
          is_important: 0,
          similar_id: 137847637,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 0,
          is_yileimeiti: 0,
          publisher_name: '中国经济网',
          news_type: 0,
          interest_role: 18,
          medium: 4,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: '新浪新闻',
          num: 7,
          num_one: 7,
          num_seven: 7,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        },
        {
          id: 137800179,
          mid: 0,
          keyword: '乳业',
          title:
            '庄园牧场(01533.HK)对收购西安东方乳业计提4871.93万元商誉减值准备',
          url:
            'https://finance.sina.cn/stock/relnews/hk/2020-04-23/detail-iirczymi7992868.d.html',
          yq: 19,
          zf: 3,
          update_time: 1587651203,
          screen_name: '新浪财经',
          content:
            '《关于2019年度计提资产减值准备的公告》,公司对收购西安东方<em>乳业</em>有限公司82%股权形成的商誉计提4,871.93万元...',
          screen_time: 1587644003,
          publisher_id: 11683,
          recommended_pos: '',
          domain: 'finance.sina.cn',
          is_important: 0,
          similar_id: 137788503,
          media_level: 0,
          primary: 1,
          role: 7,
          qudao_zilixing: 1,
          is_yileimeiti: 0,
          publisher_name: '新浪财经',
          news_type: 0,
          interest_role: 18,
          medium: 4,
          dzs: 0,
          zfs: 0,
          pls: 0,
          fens_count: 0,
          type: 2,
          name: null,
          num: 7,
          num_one: 7,
          num_seven: 7,
          yileinum: 0,
          sort: 0,
          max_media_level: 0
        }
      ]
    }
  },
  methods: {
    dataFormat(time) {
      return `${time.getFullYear()}-${
        time.getMonth() + 1 >= 10
          ? time.getMonth() + 1
          : '0' + (time.getMonth() + 1)
      }-${time.getDate() >= 10 ? time.getDate() : '0' + time.getDate()}
                     ${
                       time.getHours() >= 10
                         ? time.getHours()
                         : '0' + time.getHours()
                     } : ${
        time.getMinutes() >= 10 ? time.getMinutes() : '0' + time.getMinutes()
      } : ${
        time.getSeconds() >= 10 ? time.getSeconds() : '0' + time.getSeconds()
      }`
    }
  }
}
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
      font-weight: bold;
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
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
    }
    .positive {
      color: rgb(198, 127, 255);
      border: 1px solid rgb(198, 127, 255);
    }
    .central {
      color: rgb(68, 211, 255);
      border: 1px solid rgb(68, 211, 255);
    }
    .negative {
      color: rgb(255, 139, 34);
      border: 1px solid rgb(255, 139, 34);
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
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 18px;
            height: 27px;
            font-weight: 500;
            a {
              color: #5c5c5c;
            }
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
          text-align: left;
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
          margin-bottom: 30px;

          .link {
            width: 224px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 0;
            a {
              color: rgb(192, 192, 192);
            }
          }
          div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-left: 8px;
            text-align: left;
          }
          .Published {
            width: 151px;
          }
          .insertion {
            width: 151px;
          }
          .Date {
            width: 179px;
          }
          .Volume {
            width: 108px;
            span {
              color: rgb(0, 205, 202);
            }
          }
          .Medial {
            width: 151px;
            float: right;
            span {
              color: rgb(0, 205, 202);
            }
          }
        }
      }
    }
  }
}
</style>
