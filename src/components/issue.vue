<template>
 <div class="content">
   <div class="Left">
     <div class="panel">
      <div class="header">
        <router-link to="/home" style="color: rgba(82,195,43,1)">主页</router-link>
        <span> / 发布话题</span>
      </div>
       <div class="inner">
         <div class="hf1">
           <span>选择模块</span>
           <select name="" id="" v-model="tab">
             <option value="请选择">请选择</option>
             <option value="分享">分享</option>
             <option value="问答">问答</option>
             <option value="招聘">招聘</option>
             <option value="dev">客户端测试</option>
           </select>
         </div>
         <div class="hf2">
           <input type="text" placeholder="标题字数十字以上"v-model="title">
         </div>
         <div class="hf3">
           <textarea name="" id="Textarea" cols="30" rows="8" v-model="content"></textarea>
           <div>
             <input type="submit" value="提交" @click="Submit">
           </div>
         </div>
       </div>
     </div>
   </div>
   <div class="Right">
     <div class="sidebar">
       <persecom9></persecom9>
       <persecom10></persecom10>
     </div>
   </div>
 </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        title: '',
        tab: '',
        content: ''
      }
    },
    methods: {
      Submit () {
        axios.post('https://cnodejs.org/api/v1/topics', {
          accesstoken: 'd6918d6d-75c7-4eea-8449-8e2fafea4ba2',
          title: this.title,
          tab: this.tab,
          content: this.content
        })
          .then(function (response) {
            console.log(response)
          }).catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
<style>

</style>
