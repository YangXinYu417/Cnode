<template>
  <div class="content">
    <div class="Left">
      <ul class="ul1">
        <li class="lis"><router-link to="?tab=all">全部</router-link></li>
        <li class="lis"><router-link to="?tab=good">精华</router-link></li>
        <li class="lis"><router-link to="?tab=share">分享</router-link></li>
        <li class="lis"><router-link to="?tab=ask">问答</router-link></li>
        <li class="lis"><router-link to="?tab=job">招聘</router-link></li>
        <li class="lis"><router-link to="?tab=dev">客户端测试</router-link></li>
      </ul>
      <div class="all">
        <div class="qb">
          <ol class="qb_ul">
            <li v-for="list in List" class="qb_li">
              <router-link :to="'/Userdetails/' + list.author.loginname "><img :src="list.author.avatar_url" :title="list.author.loginname" :alt="list.author.loginname"></router-link>
              <span class="span_one"><span>{{ list.reply_count }}</span>/<span>{{ list.visit_count}}</span></span>
              <span class="span_treen" v-if="list.top" ><a href="#" style="background: #80bd01;color: white">置顶</a></span>
              <span class="span_treen" v-else-if="list.good"><a href="#" style="background: #80bd01;color: white">精华</a></span>
              <span class="span_treen" v-else-if="list.tab==='ask'"><a href="#">问答</a></span>
              <span class="span_treen" v-else-if="list.tab==='share'"><a href="#">分享</a></span>
              <span class="span_two">
              <router-link :to="'/detail/' + list.id ">{{list.title}}</router-link>
          </span>
              <span class="span_four"><img src="https://avatars0.githubusercontent.com/u/17695103?v=4&s=120" alt=""></span>
              <span class="span_six"><span>{{ list.last_reply_at | time}}</span></span>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <div class="Right">
      <div class="sidebar">
        <persecom :myName = "defaultb"></persecom>
        <persecom1></persecom1>
        <persecom2></persecom2>
        <persecom3></persecom3>
        <persecom4></persecom4>
        <persecom5></persecom5>
        <persecom6></persecom6>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        List: [],
        leave: [],
        iPage: 1,
        tab: 'all',
        defaultb: {
          avatar_url: 'https://avatars3.githubusercontent.com/u/31055455?v=4&s=120',
          loginname: 'YangXinYu97',
          score: '9999999'
        }
      }
    },
    watch: {
      $route () {
        let tab = this.$route.query.tab
        axios.get('https://cnodejs.org/api/v1/topics?tab=' + tab + '&page=' + this.iPage + '&limit=' + 40 + '&mdrender=true').then((response) => {
          this.List = response.data.data
          this.leave = response.data.data.replies
          this.avatar_url = response.data.data.avatar_url
          // console.log(response.data.data)
        })
      }
    },
    created () {
      console.log(this.$route)
      let tab = this.$route.query.tab
      axios.get('https://cnodejs.org/api/v1/topics?tab=' + tab + '&page=' + this.iPage + '&limit=' + 40 + '&mdrender=true').then((response) => {
        this.List = response.data.data
        console.log(this.List)
      })
    },
    methods: {
      next () {

      }
    }
  }
</script>
<style lang="scss">
 .all{

 }
  .Right{

    }

</style>
