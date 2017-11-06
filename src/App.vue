<template>
  <div id="app">
    <div class="navbar">
      <div class="navbar_inner">
        <div class="container">
          <a href="#" id="logo"></a>
          <input type="text">
          <ul>
            <router-link to="/home?tab=all" tag="li"><a href="#">首页</a></router-link>
            <router-link to="/message" tag="li"><a href="#"><label @click="markRead()" style="cursor:pointer" id="lb">{{List.data}}</label> 未读消息</a></router-link>
            <router-link to="/introduction" tag="li"><a href="#">新手入门</a></router-link>
            <router-link to="/API" tag="li"><a href="#">API</a></router-link>
            <router-link to="/about" tag="li"><a href="#">关于</a></router-link>
            <router-link to="/register" tag="li"><a href="#">注册</a></router-link>
            <router-link to="/login" tag="li"><a href="#">登录</a></router-link>
          </ul>
        </div>
      </div>
    </div>
      <router-view></router-view>
    <div class="footer">
      <div class="footer_t">
        <div>
          <p>RSS | 源码地址</p>
          <p class="p_2">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
          <p class="p_1">
            服务器赞助商为 <a href="#"><img src="https://dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="ucloud"></a>
            ,储存赞助商为 <a href="#"><img src="https://dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="七牛云储存"></a>
            ,由 <a href="#"><img src="https://dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="alinode"></a> 提供应用性能服务。
          </p>
          <p class="p_3">新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="#">DigitalOcean(https://www.digitalocean.com/)</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        List: []
      }
    },
    created () {
      axios.get('https://cnodejs.org/api/v1/message/count?accesstoken=d6918d6d-75c7-4eea-8449-8e2fafea4ba2').then((response) => {
        this.List = response.data
      })
    },
    methods: {
      markRead () {
        window.onload(axios.post('https://cnodejs.org/api/v1/message/mark_all', {
          accesstoken: 'd6918d6d-75c7-4eea-8449-8e2fafea4ba2'
        })
          .then(function (response) {
            console.log(response)
          }).catch(function (error) {
            console.log(error)
          })
        )
      }
    }
  }
</script>

<style lang="scss">
  body{
    background: #e1e1e1;
  }
#app{
  .navbar{
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    position: relative;
    background: #444;
    font-size: 13px;
    .navbar_inner{
      background: 0 0;
      border-radius: 0;
      border: none;
      box-shadow: none;
      width: 90%;
      margin: auto;
      padding: 5px;
      .container{
        width: 100%;
        min-width: 960px;
        margin: 0 auto;
        max-width: 1400px;
        #logo{
          display: inline-block;
          width: 120px;
          padding: 3px 20px;
          height: 28px;
          background: url("http://o4j806krb.qnssl.com/public/images/cnodejs_light.svg");
          background-size:100% 100% ;
        }
        input{
          margin-top: 2px;
          margin-left: 20px;
          padding: 7px 5px 3px 48px;
          color: #666;
          border: 0;
          transition: all .5s;
          font-size: 13px;
          font-weight: 400;
          border-radius: 15px;
          outline: none;
          background: #888;
          &:hover{
            background: white;
          }
        }
        ul{
          float: right;
          width: 460px;
          height:40px;
          display: flex;
          list-style: none;
          li{
            max-width: 100%;
            height: 40px;
            &.router-link-active{
            a{
              color: white;
            }
          }
            label{
              background: #4492ff;
              width: 20px;
              height: 20px;
              display: inline-block;
              border-radius: 50%;
              color: white;
            }
            a{
              display: inline-block;
              width: 100%;
              height:100%;
              padding: 10px;
              color: gainsboro;
              font-size: 14px;
              text-align: center;

            }
          }
          li:hover{
            a{
              color: white;
            }
          }
        }
      }
    }
  }
  .footer{
    clear: both;
    background: #fff;
    position: relative;
    .footer_t{
      width: 90%;
      max-width: 1400px;
      min-width: 960px;
      margin: 0 auto;
      color: #e2e2e2;
      padding: 20px 0;
      font-size: 13px;
      line-height: 2em;
      .p_1{
        color: #ababab;
        line-height: 20px;
        vertical-align: bottom;
        margin: 0 0 10px;
        a{
          display: inline-block;
          width: 110px;
          height: 30px;

          img{
            width: 100%;
            height:100%;
          }
        }
      }
      .p_2{
        line-height: 20px;
        vertical-align: bottom;
        margin: 0 0 10px;
        color: #ababab;
      }
      .p_3{
        color: #ababab;
        line-height: 20px;
        vertical-align: bottom;
        margin: 0 0 10px;
        a{
          color:#08c ;
        }
      }
    }
  }
}

</style>
