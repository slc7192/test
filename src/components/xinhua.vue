<template>
  <div id="app" v-cloak>
      <div class="top">
          <!-- 头部背景 -->
          <img src="../assets/img/top.png" alt="" >
          <!-- 头像及设置 -->
          <div class="top_set">
              <div class="top_left">
                  <div>
                    <img src="../assets/img/_burglar.png" alt="">
                  </div>
                  <div class="top_cont">
                    <span>新华魔盒</span>
                    <span>新华保险上海分公司</span>
                  </div>
              </div>
              <div class="top_right">
                  <img src="../assets/img/setting.png" alt="">
                  <span>设置</span>
              </div>
          </div>
          <!-- 新锐之星 -->
          <div class="top_title">
              <img src="../assets/img/jftop.png" alt="">
              <div class="titles">
                  <div class="titl_top">
                      <img src="../assets/img/xb1.png" alt="">
                      <span>新锐之星</span>
                      <!-- <md-icon name="arrow-right"></md-icon> -->
                  </div>
                  <div class="precss">
                      <img src="../assets/img/jf.png" alt="">
                  </div>
                  <div class="titl_tal">
                      <div class="titl_bot">
                        <div>
                            <span>经验值</span>
                        </div>
                        <span>2684/5999</span>
                    </div>
                    <span class="c_w">做的不错，继续努力！</span>
                  </div>
              </div>
          </div>
          <!-- 服务提醒 -->
          <div class="serve">
              <!-- 左边 -->
              <div class="serve_one">
                  <!-- 服务 -->
                  <div v-for="(i,j) in servelist" :key="j" >
                      <span class="servr_o_c">{{i.cont1}}</span>
                      <span class="servr_a_c">{{i.cont2}}</span>
                      <span class="serve_s_c">{{i.time}}</span>
                  </div>
              </div>
              <!-- 右边 -->
              <div>
                  <span></span>
              </div>
          </div>
      </div>
      <!--中间列表  -->
      <div class="media"> 
            <div v-for="(item,key,index) in cloumns" :key="index">
                <img :src="item.img" alt="#">
                <span>{{item.name}}</span>
            </div>
      </div>
      <!-- 客户经理 -->
      <div class="kehu">
          <!-- left -->
          <div v-for="(value,ind) in list" :key="ind" class="boxsh">
              <div class="fanke">
                <img :src="value.img" alt="">
                <span class="fang_name">{{value.name}}</span>
                <span class="fang_action">{{value.action}}</span>
              </div>
              <img :src="value.rightimg" alt="" class="right_pho">
          </div>
      </div>
      <!-- 热门活动 -->
      <div class="hot">
          <span class="orange">#热门活动</span>
          <img src="../assets/img/hd.png" alt="热门活动">
      </div>
      <!-- 保险文库 -->
        <div class="baoxian">
            <span class="orange">#保险文库</span>
            <span>查看更多</span>
        </div>
        <div class="heng"></div>
        
        <!-- 文章列表 -->
        <div v-for="(value,index) in arties" :key="index" class="artlist">
            <div class="artcile">
                <p>{{value.count}}</p>
                <div class="artimg">
                    <div>
                        <img :src="value.img1" alt="">
                        <span>{{value.countnum}}</span>
                    </div>
                    <div>
                        <img :src="value.img2" alt="">
                        <span>{{value.countnum2}}</span>
                    </div>
                </div>
            </div>
            <img :src="value.img3" alt="" class="art">
        </div>
        <!-- 结尾 -->
        <div class="end">
            <p>-- 新华保险&nbsp;&nbsp;&nbsp;关爱人生每一天--</p>
        </div>
  </div>
   
</template>

<script>
    
    export default {
        data () {
            return {
            servelist:[
                {
                    cont1:'服务',
                    cont2:'用户【rebirth】查看文章提醒',
                    time:'刚刚'
                },
                {
                    cont1:'提醒',
                    cont2:'用户【左边的小岸】查看您的名片',
                    time:'1天前'
                },
            ],
             cloumns:[
                 {
                     img: require('../assets/img/mp.png'),
                     name:'AI名片'
                 },
                {
                     img: require('../assets/img/zb.png'),
                     name:'新华早报'
                },
                {
                     img: require('../assets/img/hk.png'),
                     name:'贺卡'
                },
                {
                     img: require('../assets/img/wk.png'),
                     name:'保险文库'
                },
                {
                     img: require('../assets/img/hb.png'),
                     name:'展业海报'
                },
                {
                     img: require('../assets/img/yqh.png'),
                     name:'邀请函'
                },
                {
                     img:require('../assets/img/mxcp.png'),
                     name:'明星产品'
                },
                {
                     img:require('../assets/img/jianyi.png'),
                     name:'建议反馈'
                }
             ],
             list:[
                 {
                     img:require('../assets/img/yh.png'),
                     name:'客户经理',
                     action:'精准掌握客户需求',
                     rightimg:require('../assets/img/gl.png')
                 },
                 {
                     img:require('../assets/img/yh.png'),
                     name:'谁在看我',
                     action:'访客信息实时汇总',
                     rightimg:require('../assets/img/kh.png')
                 }
             ],
             arties:[
                 {
                     count:'新华保险关于存量浮动利率个人贷款客户定价急转转换的...',
                     countnum:'1.5w',
                     countnum2:'367',
                     img1:require('../assets/img/see.png'),
                     img2:require('../assets/img/zf.png'),
                     img3:require('../assets/img/wz1.png')
                 },
                 {
                     count:'新华保险关于存量浮动利率个人贷款客户定价急转转换的...',
                     countnum:'1.5w',
                     countnum2:'367',
                     img1:require('../assets/img/see.png'),
                     img2:require('../assets/img/zf.png'),
                     img3:require('../assets/img/wz2.png')
                 }
             ]
            }
        },
        mounted(){
            
        },
        methods: {
           

        }
    }
</script>

<style scoped  lang="scss">
    /* body{ background-color:#f5f6f8} */
    
    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
    }
    
    /* html {
	    font-size: 10vw;
    } */
    /* @function pxTorem($px) {
        $item: 10vw;
        @return $px/$item+rem;
    }
     */
    #app{
        background-color:#f2f3f4
    }
    [v-cloak]{
        display: none;
    }
    /* 头部 */
    .top{
        width: 100%;
        height: 16rem;
        color: $black;
    }
    .top img{
        width: 100%;
        height: 15rem;
        position: relative;
    }
    .top_set{
        width: 100%;
        position: absolute;
        top: 2rem;
        z-index: 10000;
        display: flex;
        color: #fff;
        padding-left:1.3rem;
        justify-content: space-between;
    }
    .top_left{
        width: 10.6rem;
        display: flex;
        justify-content: space-between;
        height: 3.2rem;
    }
    .top_left div:first-child{
        width: 3.2rem;
        height: 3.2rem;
        border: 0.15rem solid #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
    }
    .top_left div:first-child img{
        width: 2.9rem;
        height: 2.9rem;
        vertical-align: -0.5rem;
        border-radius: 50%;
    }
    .top_cont{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        letter-spacing:0.02rem;
    }
    .top_cont span:first-child{
        font-size: 1.2rem
    }
    .top_right{
        background-color: #126ebd;
        width: 4.5rem;
        height: 1.8rem;
        line-height: 1.8rem;
        text-align: center;
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }
    .top_right img{
        width: 0.6rem;
        height: 0.6rem;
        margin-right: 0.3rem;
    }
    /* 新锐之星 */
    .top_title{
        position: absolute;
        top: 7rem;
    }
    .top_title img{
        width: 100%;
        height: 5rem;
        position: relative;
    }
    .titles{
        position: absolute;
        top: 0.3rem;
        left: 2.2rem;
        width: 80%;
        /* background-color: aliceblue; */
        height: 3.5rem;
    }
    .titl_top{
        display: flex;
        justify-content: space-around;
        width: 7rem;
        margin-bottom: 0.4rem;
        margin-top: 0.2rem;
        color: #fff;
        line-height: 1.2rem;
    }
    .titl_top img{
        width: 1.2rem;
        height: 1.2rem;
    }
    /* 中间进度条 */
    .precss{
        width: 100%;
        height: 0.05rem;
        background-color: #fff;
        position: relative;
    }
    .precss img{
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: -0.5rem;
        left: 8.5rem;
    }
    /* 经验值 */
    .titl_tal{
        display: flex;
        justify-content: space-between;
        width: 100%
    }
    .titl_bot{
        display: flex;
        justify-content: space-between;
        width: 7rem;
    }
    .titl_bot span:nth-child(2){
        color: #fff;
    }
    .titl_bot div:first-child{
        width: 3rem;
        height: 1.3rem;
        background-color: #fff;
        font-size: 0.5rem;
        font-weight: 700;
        color: #2b3d6f;
        text-align: center;
    }
    .c_w{
        color: #fff;
    }
    /* 服务提醒 */
    .serve{
        position: absolute;
        top: 11.9rem;
        background-color: #fff;
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: space-around;
    }
    .serve_one div:first-child{
        margin: 0.6rem 0 0.3rem;
    }
    .servr_o_c{
        color: #e29a72;
        font-size: 1rem;
        margin-right: 0.2rem;
    }
    .servr_a_c{
        color: #4a494a;
        margin-right: 0.5rem;
    }
    .serve_s_c{
        color: #989898;
    }
    .media{
        width: 100%;
        display: flex;
        /* height: 8rem; */
        justify-content: flex-start;
        flex-wrap: wrap;
        background-color: #f5f6f8;
    }
    .media div{
        width: 3rem;
        height: 3rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 0.5rem 1.43rem;
    }
    .media img{
        width:2rem;
        height: 2rem;
        text-align: center;
        background-repeat: no-repeat;
        margin: 0 auto;
    }
    /* 客户  */
    .boxsh{
        background-color: #f4f7fa;
        box-shadow: #828c98 0px .5rem .5rem -.5rem;
    }
    .kehu{
        width: 100%;
        height: 5.3rem;
        background-color: #f4f7fa;
        margin-top:1rem;
        display: flex;
        justify-content: space-around;
    }
    .kehu div{
        width: 9.3rem;
        display: flex;
    }
    .fanke{
        display: flex;
        flex-direction: column;
    }
    .fang_name{
        font-size: 1rem;
        font-weight: 600;
        color: #0f1f39;
        margin: 0.3rem 0 0;
    }
    .fang_action{
         color: #c5c8d1;
    }    
    .kehu img:first-child{
        width: 2rem;
        height: 1.6rem;
    }
    .right_pho{
        width: 3.2rem;
        height: 4.2rem;
        margin-top: 1rem;
    }
    /* 活动 */
    .hot{
        margin-top: 1rem;
    }
    .orange{
        font-size: 1rem;
        background-color: #ffeddc;
        color: #000;
        margin-left: .7rem;
    }
    .hot img{
        width: 100%;
    }
    /* 保险文库 */
    .baoxian{
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;
    }
    .baoxian span:nth-child(2){
        margin-right: 1rem;
    }
    .heng{
        width: 100%;
        height: 0.07rem;
        background-color: #efefef;
    }
    /* 文章 */
    .artlist{
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: .5rem;
    }
    .art{
        width: 7rem;
        height: 5rem;
    }
    .artcile{
        width: 13rem;
    }
    .artcile p{
         width: 11rem;
        color: #656567;
        letter-spacing: 0.05rem;
    }
    .artimg{
        display: flex;
    }
    .artimg div{
        display: flex;
        line-height: 2rem;
        margin-right: .5rem;
    }
    .artimg img{
           width: 1rem;
        height: 1rem;
        margin: .4rem;
    }
    .end{
        width: 100%;
        text-align: center;
        color: #d1d1d2;
        margin: 1rem 0 0;
    }
</style>
