<template>
 <div class="content">
   <div class="Left">
     <div class="panel">
       <div class="header">
         <router-link to="/home" style="color: rgba(82,195,43,1)">主页</router-link><span> / 新消息</span>
       </div>
       <div class="inner">
         <div v-for="(obj,key) in List" @click="MarkMessagesRead(key)" style="cursor:pointer">
           <div class="ddd" v-show="obj.type === 'at'">
             <router-link :to="'/Userdetails/' + obj.author.loginname">{{obj.author.loginname}}</router-link>
             <span> 在话题 <router-link :to="'/detail/' + obj.topic.id ">{{obj.topic.title}}</router-link></span>
             中痛哭流涕的@了你，并说了句‘你很帅’(✿◡‿◡)
           </div>
           <div class="ddd" v-show="obj.type === 'reply'">
             <router-link :to="'/Userdetails/' + obj.author.loginname">{{obj.author.loginname}}</router-link>
             <span> 回复了你的话题 <router-link :to="'/detail/' + obj.topic.id ">{{obj.topic.title}}</router-link> 并给你递了杯茶</span>
           </div>
         </div>
       </div>
     </div>
     <div class="panel">
       <div class="header">
         <span>过往消息</span>
       </div>
       <div class="inner">
         <div v-for="obj in Lists" v-show="obj.type === 'at'">
           <div class="ddd">
             <router-link :to="'/Userdetails/' + obj.author.loginname">{{obj.author.loginname}}</router-link>
             <span> 在话题 <router-link :to="'/detail/' + obj.topic.id ">{{obj.topic.title}}</router-link></span>中痛哭流涕的@了你，并说了句‘你很帅’(✿◡‿◡)
           </div>
           <div class="ddd" v-show="obj.type === 'reply'">
             <router-link :to="'/Userdetails/' + obj.author.loginname">{{obj.author.loginname}}</router-link>
             <span> 回复了你的话题 <router-link :to="'/detail/' + obj.topic.id ">{{obj.topic.title}}</router-link> 并给你递了杯茶</span>
           </div>
         </div>
       </div>
     </div>
   </div>

   <div class="Right">
     <div class="sidebar">
       <persecom :myName = "defaultn"></persecom>
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
        Lists: [],
        defaultn: {
          avatar_url: 'https://avatars3.githubusercontent.com/u/31055455?v=4&s=120',
          loginname: 'YangXinYu97',
          score: '9999999'
        }
      }
    },
    created () {
      axios.get('https://cnodejs.org/api/v1/messages?accesstoken=d6918d6d-75c7-4eea-8449-8e2fafea4ba2&mdrender=true').then((response) => {
        this.List = response.data.data.hasnot_read_messages
        this.Lists = response.data.data.has_read_messages
        console.log(this.List)
      })
    },
    methods: {
      MarkMessagesRead (key) {
        console.log(this.$route)
        let id = this.$route.params.id
        axios.post('https://cnodejs.org/api/v1/message/mark_one/' + this.List[key].id, {
          accesstoken: 'd6918d6d-75c7-4eea-8449-8e2fafea4ba2',
          topic_id: id,
          title: this.title,
          tab: this.tab,
          content: this.content
        })
      }
    }
  }
</script>
<style>

</style>
