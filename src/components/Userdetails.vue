<template>
  <div class="content">
    <div class="Left">
      <div class="panel">
        <div class="header">
          <router-link to="/home?tab=all" style="color: rgba(82,195,43,1)">主页</router-link><span> / </span>
        </div>
        <div class="inner">
          <div class="user_card">
            <a href="#"><img :src="List.avatar_url"></a><span><a href="#">{{ List.loginname }}</a></span>
            <div>
              <div>
                <span>积分 : {{ List.score }}</span>
              </div>
            </div>
            <div>
              <div>
                <span><router-link :to="'/UserssearchHidden/' + List.loginname">几个话题收藏</router-link></span>
              </div>
            </div>
            <div><span>北京 </span></div>
            <div><span>@ {{List.githubUsername}}</span></div>
            <div><span>注册时间 : {{List.create_at | time}}</span></div>
          </div>
        </div>

      </div>
      <div class="panel">
        <div class="header">
          <span>最近创建的话题</span>
        </div>
        <div class="inner">
          <div class="all">
            <div class="qb">
              <ol class="qb_ul">
                <li v-for="list in topics" class="qb_li">
                  <a href="#"><img :src="list.author.avatar_url" :title="list.author.loginname" :alt="list.author.loginname"></a>
                  <span class="span_one"><span>{{ list.reply_count }}</span><span>{{ list.visit_count}}</span></span>
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
      <div class="panel">
        <div class="header">
          <span>最近参与的话题</span>
        </div>
        <div class="inner">
          <div class="all">
            <div class="qb">
              <ol class="qb_ul">
                <li v-for="list in replies" class="qb_li">
                  <a href="#"><img :src="list.author.avatar_url" :title="list.author.loginname" :alt="list.author.loginname"></a>
                  <span class="span_one"><span>{{ list.reply_count }}</span><span>{{ list.visit_count}}</span></span>
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
        <persecom :myName = "defaults"></persecom>
        <persecom1></persecom1>
        <persecom2></persecom2>
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
        defaults: {
          avatar_url: '',
          loginname: '',
          score: ''
        }
      }
    },
    created () {
      let loginname = this.$route.params.loginname
      console.log(this.$route)
      axios.get('https://cnodejs.org/api/v1/user/' + loginname).then((response) => {
        this.List = response.data.data
        this.Name = response.data.data.author
        this.topics = response.data.data.recent_topics
        this.replies = response.data.data.recent_replies
        this.defaults.avatar_url = response.data.data.avatar_url
        this.defaults.loginname = response.data.data.loginname
        this.defaults.score = response.data.data.score
        console.log(response.data.data)
        //  console.log(response.data.data.replies)
      })
    }
  }
</script>
<style>

</style>
