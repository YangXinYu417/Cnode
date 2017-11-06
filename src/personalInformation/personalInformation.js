import Vue from 'vue'

Vue.component('persecom', {
  props: {
    myName: {
      type: Object,
      default: {
        return: {
          avatar_url: 'https://avatars3.githubusercontent.com/u/31055455?v=4&s=120',
          loginname: 'YangXinYu97',
          score: '9999999'
        }
      }
    }
  },
  template: `<div class="panel">
          <div class="header">
            个人信息
          </div>
          <div class="inner">
            <div class="user_card">
              <router-link :to="'/Userdetails/' + myName.loginname "><img :src="myName.avatar_url" alt=""></router-link>
              <span>{{ myName.loginname }}</span>
              <div>
                <div>
                  <span>积分 ：{{ myName.score }}</span>
                </div>
              </div>
              <div>
                <span><i>"萌新，求大牛教！ "</i></span>
              </div>
            </div>
          </div>
        </div>
  `
})
Vue.component('persecoms', {
  props: {
    myname: {
      type: Object,
      return: {
        score: '999999999999999999'
      }
    }
  },
  template: `<div class="panel">
          <div class="header">
            作者
          </div>
          <div class="inner">
            <div class="user_card">
              <router-link :to="'/Userdetails/' + myname.loginname "><img :src="myname.avatar_url" alt=""></router-link>
              <span>{{ myname.loginname }}</span>
              <div>
                <div>
                  <span>积分 ：{{ myname.score }}</span>
                </div>
              </div>
              <div>
                <span><i>"萌新，求大牛教！ "</i></span>
              </div>
            </div>
          </div>
        </div>
  `
})
Vue.component('persecom1', {
  template: `
    <div class="panel">
      <div class="inner">
        <router-link to="/issue" id="create_topic_btn"><span class="span-success">发布话题</span></router-link>
      </div>
    </div>
  `
})
Vue.component('persecom2', {
  template: `
    <div class="panel">
          <div class="inner">
            <a href="#"><img src="https://dn-cnode.qbox.me/FgQS-GQDfqwAD_v0NuhyYUOUk5MG" alt=""></a>
            <div style="height: 10px"></div>
            <a href="#"><img src="https://dn-cnode.qbox.me/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt=""></a>
          </div>
        </div>
  `
})
Vue.component('persecom3', {
  template: `
    <div class="panel">
          <div class="header">
            <span>无人回复的话题</span>
          </div>
          <div class="inner">
            <ul class="unstyled">
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
            </ul>
          </div>
        </div>
  `
})
Vue.component('persecom4', {
  template: `
    <div class="panel">
          <div class="header">
            <span>积分榜&nbsp;&nbsp;&nbsp;TOP 100 >></span>
          </div>
          <div class="inner">
            <ul class="unstyled">
              <li><span class="top_score">19895</span><span class="user_name">sss</span></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
              <li><div><a href="#">mongodb 原生驱动?</a></div></li>
            </ul>
          </div>
        </div>
  `
})
Vue.component('persecom9', {
  template: `
    <div class="panel">
          <div class="header">
            <span>Markdown 语法参考</span>
          </div>
          <div class="inner">
            <ul class="unstyled">
              <li><span class="top_score">### 单行的标题</span></li>
              <li><span class="top_score">**粗体**</span></li>
              <li><span class="top_score">\`console.log('行内代码')\`</span></li>
              <li><span class="top_score">\`\`\`js\\n code \\n\`\`\` 标记代码块</span></li>
              <li><span class="top_score">[内容](链接)</span></li>
              <li><span class="top_score">![文字说明](图片链接)</span></li>
              <li><span class="top_score">Markdown 文档</span></li>
            </ul>
          </div>
        </div>
  `
})
Vue.component('persecom10', {
  template: `
    <div class="panel">
          <div class="header">
            <span>话题发布指南</span>
          </div>
          <div class="inner">
            <ul class="unstyled">
              <li><span class="top_score">尽量把话题要点浓缩到标题里</span></li>
              <li><span class="top_score">代码含义和报错可在 SegmentFault 提问</span></li>
            </ul>
          </div>
        </div>
  `
})
Vue.component('persecom5', {
  template: `
     <div class="panel">
          <div class="header">
            <span>友情社区</span>
          </div>
          <div class="inner">
            <a href="#"><img src="https://o4j806krb.qnssl.com/public/images/ruby-china-20150529.png" alt=""></a>
            <a href="#"><img src="https://o4j806krb.qnssl.com/public/images/golangtc-logo.png" alt=""></a>
            <a href="#"><img src="https://o4j806krb.qnssl.com/public/images/phphub-logo.png" alt=""></a>
            <a href="#"><img src="https://dn-cnode.qbox.me/FjLUc7IJ2--DqS706etPQ1EGajxK " alt=""></a>
          </div>
        </div>
  `
})

Vue.component('persecom6', {
  template: `
    <div class="panel">
          <div class="header">
            <span>客户端二维码</span>
          </div>
          <div class="inner">
            <a href="#"><img src="https://dn-cnode.qbox.me/FtG0YVgQ6iginiLpf9W4_ShjiLfU" alt=""></a>
            客户端源码地址
          </div>

        </div>
  `
})
Vue.component('animation', {
  template: `
  <div class="beijing">
    <div class='container'>
      <div class='person'>
        <div class='head'></div>
        <div class='part arm one'></div>
        <div class='part arm two'></div>
        <div class='torso'></div>
        <div class='part leg one'></div>
        <div class='part foot one'></div>
        <div class='part leg two'></div>
        <div class='part foot two'></div>
      </div>
    </div>
  </div>
  `
})
