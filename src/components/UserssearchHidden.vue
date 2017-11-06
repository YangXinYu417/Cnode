<template>
  <div class="content">
    <div class="Left">
      <div class="panel">
        <div class="header">
          <router-link to="/home?tab=all">主页</router-link>
          <span> /  收藏的话题</span>
        </div>
        <div class="inner">
          <div class="all">
            <div class="qb">
              <ol class="qb_ul">
                <li v-for="(list,key) in topics" class="qb_li">
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
      </div>
    </div>
    <div class="Right">
      <div class="sidebar">
        <persecom :myName = "defaultsv"></persecom>
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
        Name: [],
        topics: [],
        replies: [],
        defaultsv: {
          avatar_url: '',
          loginname: '',
          score: ''
        }
      }
    },
    created (a) {
      console.log(this.$route)
      let loginname = this.$route.params.loginname
      axios.get('https://cnodejs.org/api/v1/topic_collect/' + loginname).then((response) => {
        this.List = response.data.data
        this.Name = response.data.data.author
        this.topics = response.data.data
//        this.defaults.avatar_url = response.data.data[a].author.avatar_url
//        this.defaults.loginname = response.data.data[a].author.loginname
//        this.defaults.score = response.data.data[a].score
        console.log(response.data.data)
        //  console.log(response.data.data.replies)
      })
    }
  }
</script>
<style>

</style>
