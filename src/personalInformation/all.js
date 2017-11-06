import Vue from 'vue'
Vue.component('allcom', {
  template: `
    <div class="qb">
          <ol class="qb_ul">
            <li v-for="list in List" class="qb_li">
              <a href="#"><img :src="list.author.avatar_url" :title="list.author.loginname" :alt="list.author.loginname"></a>
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
  `
})
