<template>
  <transition name="menu">
    <div v-show="menuToggle" class="right_menu">
      <div class="menu_tab">
        <el-row>
          <el-col v-for="(item,index) in tabName" :key="index" :span="12">
            <li><span :class="activeTab === index? 'active':''" @click="activeHandle(index)"><i :class="item.icon" /> {{ item.name }}</span></li>
          </el-col>
        </el-row>
      </div>
      <div v-if="activeTab === 0" class="menu_content">
        <el-scrollbar style="height:100%">
          <div class="comment_top">
            <h6><i class="el-icon-s-comment" />最新消息</h6>
            <small>你有10条消息未读</small>
          </div>

          <el-card shadow="hover">
            <div slot="header" style="margin: -10px 0 -10px 0">
              <span class="nickname">法外狂徒张三</span>
              <small>2020.11.22</small>
            </div>
            <div class="card_text">
              两袖清风，岂敢误佳人?
            </div>
          </el-card>

          <el-card shadow="hover">
            <div slot="header" style="margin: -10px 0 -10px 0">
              <span class="nickname">法外狂徒张三</span>
              <small>2020.11.22</small>
            </div>
            <div class="card_text">
              你还有很大的进步空间哦
            </div>
          </el-card>

          <el-card shadow="hover">
            <div slot="header" style="margin: -10px 0 -10px 0">
              <span class="nickname">法外狂徒张三</span>
              <small>2020.11.22</small>
            </div>
            <div class="card_text">
              震惊！！！王某人挑战多人运动
            </div>
          </el-card>

          <el-card shadow="hover">
            <div slot="header" style="margin: -10px 0 -10px 0">
              <span class="nickname">法外狂徒张三</span>
              <small>2020.11.22</small>
            </div>
            <div class="card_text">
              时间就是金钱，加油打工人
            </div>
          </el-card>

          <el-card shadow="hover">
            <div slot="header" style="margin: -10px 0 -10px 0">
              <span class="nickname">法外狂徒张三</span>
              <small>2020.11.22</small>
            </div>
            <div class="card_text">
              金坷垃，我要金坷垃
            </div>
          </el-card>
        </el-scrollbar>
      </div>

      <div v-if="activeTab === 1" class="menu_content">
        <el-scrollbar style="height:100%">
          <div class="edit_top">
            <h6><i class="el-icon-s-comment" />基本设置</h6>
          </div>
          <el-row type="flex" align="middle" style="height:45px;border-bottom:1px solid #cccccc;text-align: center">
            <el-col :span="12" class="fontStyle">
              收起左侧菜单
            </el-col>
            <el-col :span="12">
              <el-button type="primary" size="mini" @click="AsideToggleHandle()">
                {{ leftToggle? 'on':'off' }}
              </el-button>
            </el-col>
          </el-row>
        </el-scrollbar>
      </div>
    </div>
  </transition>
</template>

<script>
// ['activeTab', 'menuToggle', 'leftToggle']
export default {
  name: 'RightMenu',
  props: {
    activeTab: {
      type: Number,
      default: 0
    },
    menuToggle: {
      type: Boolean,
      default: false
    },
    leftToggle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // 右侧tab标签名称
      tabName: [{
        name: '消息',
        icon: 'el-icon-message-solid'
      }, {
        name: '菜单',
        icon: 'el-icon-menu'
      }]
    }
  },
  methods: {
    // 右侧tab栏选中函数
    activeHandle (index) {
      this.activeTab = index
    },

    // 控制父级组件的左侧导航栏的收起和展开的点击事件
    AsideToggleHandle () {
      // 将控制左侧导航栏开关的变量传递回给父级组件
      this.$emit('leftToggle')
    }
  }
}
</script>

<style scoped lang="scss">

/*定义背景颜色*/
$primaryBackground: #545c64;
$activeBackground: #f9f9f9;

/*定义字体颜色*/
$PrimaryfontColor: #676a6c;

/*字体样式*/
.fontStyle {
  font-family: "open sans","Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 13px;
  color: #676a6c;
}

/*右边菜单栏显示隐藏动画*/
.menu-enter,
.menu-leave-to {
  transform: translateX(250px);
}

.menu-enter-active,
.menu-leave-active{
  transition: all 0.8s ease;
}

/*  侧边菜单栏样式*/
.right_menu{
  overflow: hidden;
  position: absolute;
  z-index:99999;
  display:block;
  width:250px;
  height:500px;
  background-color:#f9f9f9;
  right: 0;
  top:55px;
  border: 1px solid #999c9e;
  .menu_tab {
    height:45px;
    .el-row {
      height:100%;
      .el-col {
        height: 100%;
        line-height:45px;
        background-color:$primaryBackground;
        cursor: pointer;
        li {
          text-align: center;
          span {
            color: #f9f9f9;
            display:block;
          }
          .active {
            background-color:$activeBackground;
            color:$PrimaryfontColor;
          }
        }
      }
    }
  }
  .menu_content {
    height:100%;
    /*消息提示框的样式*/
    .comment_top {
      height:100px;
      padding:27px 10px 25px 25px;
      box-sizing: border-box;
      h6 {
        font-size:17px;
      }
    }

    .el-card {
      margin:0 0 5px 3px;
      width: 97%;
      position: relative;
      .el-card__header {
        .nickname {
          color:#409eff;
        }

        small {
          position: absolute;
          left: 164px;
          top: 9px;
        }
      }

      .card_text {
        font-size:14px;
        color: #606266;
      }

    }

    /*菜单栏的样式*/
    .edit_top {
      height:50px;
      background-color:#efefef;
      padding:16px 10px 14px 25px;
      box-sizing: border-box;
      h6 {
        font-size:17px;
      }
    }
  }
}
</style>
