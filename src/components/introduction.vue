<template>
  <div class="content">
    <div class="Left">
      <div class="panel">
        <div class="header">
          <router-link to="/home" style="color: rgba(82,195,43,1)">首页</router-link>
          <span> / &nbsp;Node.js新手入门</span>
        </div>
        <div class="inner">
          <div class="markdown-text">
            <h2>Node.js 入门</h2>
            <p>《快速搭建 Node.js 开发环境以及加速 npm》</p>
            <p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
            <p>《Node.js 包教不包会》</p>
            <p><a href="https://github.com/alsotang/node-lessons">https://github.com/alsotang/node-lessons</a></p>
            <p>《ECMAScript 6入门》</p>
            <p><a href="http://es6.ruanyifeng.com/">http://es6.ruanyifeng.com/</a></p>
            <p>《七天学会NodeJS》</p>
            <p><a href="https://github.com/nqdeng/7-days-nodejs">https://github.com/nqdeng/7-days-nodejs</a></p>
            <h2>Node.js 资源</h2>
            <p>《前端资源教程》</p>
            <p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
            <p>《国内的 npm 镜像源》</p>
            <p><a href="http://cnpmjs.org/">http://cnpmjs.org/</a></p>
            <p>《node weekly》</p>
            <p><a href="http://nodeweekly.com/issues">http://nodeweekly.com/issues</a></p>
            <p>《node123-node.js中文资料导航》</p>
            <p><a href="https://github.com/youyudehexie/node123">https://github.com/youyudehexie/node123</a></p>
            <p>《A curated list of delightful Node.js packages and resources》</p>
            <p><a href="https://github.com/sindresorhus/awesome-nodejs">https://github.com/sindresorhus/awesome-nodejs</a></p>
            <p>《Node.js Books》</p>
            <p><a href="https://github.com/pana/node-books">https://github.com/pana/node-books</a></p>
            <h2>Node.js 名人</h2>
            <p>《名人堂》</p>
            <p><a href="https://github.com/cnodejs/nodeclub/wiki/名人堂">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
            <h2>Node.js 服务器</h2>
            <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="DigitalOcean(https://www.digitalocean.com/)">DigitalOcean(https://www.digitalocean.com/)</a></p>
          </div>
        </div>
      </div>
    </div>
    <div class="Right">
      <div class="sidebar">
        <persecom :myName = "defaultc"></persecom>
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
  export default {
    data () {
      return {
        defaultc: {
          avatar_url: 'https://avatars3.githubusercontent.com/u/31055455?v=4&s=120',
          loginname: 'YangXinYu97',
          score: '9999999'
        }
      }
    }
  }
</script>
<style lang="scss">
  #template{
    span{
      font-size: 150px;
      text-align: center;
      color: greenyellow;
      font-weight: bolder;
    }
  }
</style>
