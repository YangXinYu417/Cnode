<template>
  <div class="content">
    <div class="Left">
      <div class="panel">
        <div class="header_top">
          <span class="topic_title">
          <span class="span_ones" v-if="List.top"><a href="#" style="background: #80bd01;color: white">置顶</a></span>
          <span class="span_ones" v-else-if="List.good"><a href="#" style="background: #80bd01;color: white">精华</a></span>
          <span class="span_ones" v-else-if="List.tab==='ask'"><a href="#">问答</a></span>
          <span class="span_ones" v-else-if="List.tab==='share'"><a href="#">分享</a></span>
          {{List.title}}
        </span>
          <div class="changs">
            <span> • 发布于{{ List.create_at | time}}</span>
            <span> • 作者 {{ Name.loginname }}</span>
            <span> • {{ List.visit_count }}次浏览</span>
            <span> • 最后一次编辑是{{ List.create_at | time}}</span>
            <span v-if="List.tab==='ask'"> • 来自 问答</span>
            <span v-else-if="List.tab==='share'">• 来自 分享</span>
            <a href="#" :class="{active:isCollection}" @click="collect()">{{collectionText}}</a>
          </div>
          <div v-show="idd === 'YangXinYu97'"><span><router-link :to="'/deissue/' + List.id">编辑</router-link></span></div>
        </div>
        <div class="markdown_text" v-html="List.content">
      </div>
      </div>
      <div class="panel">
        <div class="panel_header"><span></span></div>
        <div v-for="(obj,key) in leave" class="cell">
            <div class="author_content">
            <a href="#" class="a_1"><img :src="obj.author.avatar_url" :alt="obj.author.loginname" :title="obj.author.loginname"></a>
            <div>
              <a href="#">{{ obj.author.loginname }}</a>
              <a href="#">{{key+1}}楼 • {{ obj.create_at | time }}</a>
            </div>
            <div>
              <span>{{(leave[key]).ups.length}}<i @click="like(key)"  class="iconfont icon-zan"></i></span>
              <span @click="toggle(key)" class="iconfont icon-fanhui"></span>

            </div>

          </div>
          <div class="content_o">
            <p v-html="obj.content"></p>
          </div>
          <div style="display: none" class="hend">
            <textarea name="" class="Textarea" cols="30" rows="8" v-model="content2"></textarea>
            <input type="submit" @click="tijiao(key)">
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="inner-reply">
          <textarea name="r_content" class="editor" cols="30" rows="8" v-model="content"></textarea>
          <input type="submit" class="tijiao" value="提交留言" @click="tijiao()">
        </div>
      </div>
    </div>
    <div class="Right">
      <div class="sidebar">
        <persecoms :myname = "defaultss"></persecoms>
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
        idd: [],
        List: {},
        Name: [],
        leave: [],
        defaultss: {
          avatar_url: '',
          loginname: '',
          score: '999999999999'
        },
        collectionText: '',
        isCollection: false,
        content: '',
        content2: ''
      }
    },
    created () {
      let titleId = this.$route.params.titleId
      axios.get('https://cnodejs.org/api/v1/topic/' + titleId + '?mdrender=' +
        'true&accesstoken=d6918d6d-75c7-4eea-8449-8e2fafea4ba2').then((response) => {
          this.List = response.data.data
          this.Name = response.data.data.author
          this.leave = response.data.data.replies
          this.idd = response.data.data.author.loginname
          this.defaultss.avatar_url = response.data.data.author.avatar_url
          this.defaultss.loginname = response.data.data.author.loginname
          this.defaultss.score = response.data.data.score
//          console.log(response.data.data)
//          console.log(this.idd)
//          console.log(this.List.author_id)
//          console.log(this.List.id)
          console.log(this.List)
          this.isCollection = this.List.is_collect  //  收藏初始化的值
          this.isCollection ? this.collectionText = '取消收藏' : this.collectionText = '收藏'
        })
    },
    methods: {
      tijiao (a) {
        let topicId = this.$route.params.titleId
        if (a) {
          axios.post('https://cnodejs.org/api/v1/topic/' + topicId + '/replies', {
            accesstoken: 'd6918d6d-75c7-4eea-8449-8e2fafea4ba2',
            content: this.content2,
            reply_id: this.leave[a].id
          })
            .then(function (response) {
              console.log(1)
              window.location.reload()
              alert('回复成功')
            }).catch(function (error) {
              console.log(error)
            })
        } else {
          axios.post('https://cnodejs.org/api/v1/topic/' + topicId + '/replies', {
            accesstoken: 'd6918d6d-75c7-4eea-8449-8e2fafea4ba2',
            content: this.content
          })
            .then(function (response) {
              console.log(2)
              alert('提交成功')
              window.location.reload()
            }).catch(function (error) {
              console.log(error)
            })
        }
      },
      collect () {
        let collectionFlag = ''
        if (this.List.is_collect) {
          this.$set(this.List, 'is_collect', false)
          collectionFlag = 'de_collect'
          this.collectionText = '收藏'
          this.isCollection = false
        } else {
          this.$set(this.List, 'is_collect', true)
          collectionFlag = 'collect'
          this.collectionText = '取消收藏'
          this.isCollection = true
        }
        axios.post('https://cnodejs.org/api/v1/topic_collect/' + collectionFlag, {
          accesstoken: 'd6918d6d-75c7-4eea-8449-8e2fafea4ba2',
          topic_id: this.$route.params.titleId
        })
        .then(function (response) {
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
      },
      toggle (a) {
        var hend = document.getElementsByClassName('hend')
        console.log(hend)
        var Textarea = document.getElementsByClassName('Textarea')
      //  console.log(Textarea)
        hend[a].style.display = 'block'
        Textarea[a].value = '@' + this.leave[a].author.loginname
      },
      like (key) {
        console.log(this.leave)
        axios.post('https://cnodejs.org/api/v1/reply/' + this.List.replies[key].id + '/ups', {
          accesstoken: 'd6918d6d-75c7-4eea-8449-8e2fafea4ba2'
        })
        .then(function (response) {
          if (this.leave[key].ups.length + 1) {
            this.$set(this.leave[key], 'ups.length', this.leave[key].ups.length++)
          } else if (this.leave[key].ups.length - 1) {
            this.$set(this.leave[key], 'ups.length', this.leave[key].ups.length - 1)
          }
          console.log(response)
        }).catch(function (error) {
          console.log(error)
        })
      }
    }
  }
</script>
<style lang="scss">
  .content{
    .Left{
      .header_top{
        background: white;
        padding: 10px;
        .topic_title{
          display: flex;
          font-size: 23px;
          font-weight: 500;
          .span_ones{
            text-align: center;
            padding: 7px;
            a{
              border-radius: 4px;
              padding: 3px;
              display: inline-block;
              width: 100%;
              height:100%;
              color: white;
              background: green;
            }
          }

        }
        .changs{
          span{
            color: gray;
          }
          a{
            display: inline-block;
            padding: 10px;
            float: right;
            color: white;
            background: #80bd01;
            margin-top: -15px;
            &.active{
              background: gray;
              color: black;
              padding: 10px;
            }
          }
        }
      }
      .markdown_text{
        background: white;
        padding: 10px;
        border-top: 1px solid #e5e5e5;
        .markdown-text>:first-child{
          margin-top: 0;
        }
      }
      .panel{
        margin-bottom: 13px;
        .panel_header{
          padding: 10px;
          background-color: #f6f6f6;
          border-radius: 3px 3px 0 0;
        }
        .cell{
          background: #fff;
          border-top: 1px solid #f0f0f0;
          position: relative;
          padding: 10px 0 10px 10px;
          font-size: 14px;
          overflow: hidden;
          .content_o{
            padding-left: 50px;
            color: #333;
          }
          .author_content{
            .a_1{
              display: inline-block;
              float: left;
              color: #08c;
              text-decoration: none;
              cursor: auto;
              line-height: 20px;
              img{
                width: 30px;
                height: 30px;
                border-radius: 3px;
                max-width: 100%;
                vertical-align: middle;
                border: 0;
                color: #08c;
                cursor: auto;
              }
            }
            div:nth-of-type(1){
              margin-left: 10px;
              display: inline-block;
              font-size: 14px;
            }
            div:nth-of-type(2){
              float: right;
              margin-left: 20px;
              font-size: 15px;
            }
          }
        }
      }
    }
  }
</style>
