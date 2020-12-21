<template>
  <div class="home" style="height: 100%">
    <el-container style="height:100%">

      <!-- 侧边导航栏 -->
      <el-aside :width="collapse ? '64px':'200px'">
        <div class="manager" v-show="!collapse">
          <div class="avator">
            <img src="../assets/avator.jpg" alt="">
          </div>
          <div class="nickname"><span>王某人</span></div>
          <el-dropdown class="nick">
              <span class="el-dropdown-link">
                超级管理员<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>修改头像</el-dropdown-item>
              <el-dropdown-item>个人资料</el-dropdown-item>
              <el-dropdown-item>联系我们</el-dropdown-item>
              <el-dropdown-item>信箱</el-dropdown-item>
              <el-dropdown-item divided>安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="list">
          <el-menu
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            :collapse="collapse"
            @select="asideSelect"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <router-link to="/options1">
                <el-menu-item index="/options1/1-1">1-1</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </template>
              <router-link to="/options2">
                <el-menu-item index="/options2/2-1">2-1</el-menu-item>
              </router-link>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </template>
              <router-link to="/options3">
                <el-menu-item index="/options3/3-1">3-1</el-menu-item>
              </router-link>
            </el-submenu>
          </el-menu>
        </div>
      </el-aside>
      <!-- 侧边导航栏结束 -->

      <el-container style="width: 100%">
        <el-header height="100px">
          <el-row class="header_top" type="flex" align="middle">
            <el-col :span="4" class="aside_btn">
              <el-button type="primary" :icon="collapse?'el-icon-s-unfold':'el-icon-s-fold'"
                         @click="AsideToggle"></el-button>
            </el-col>

            <el-col :span="6" class="search_box">
              <el-input
                placeholder="请输入内容"
                clearable>
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
            </el-col>

            <el-col :span="5" :offset="2">
              <h4>后台管理系统</h4>
            </el-col>

            <el-col :span="7" class="notes" :offset="2">
              <el-row :gutter="10" type="flex" align="middle">

                <el-col :span="5" style="padding:0">
                  <div @click="showMenu (0)">
                    <i class="el-icon-message-solid"></i>
                    <el-badge :value="12" class="item"></el-badge>
                  </div>
                </el-col>

                <el-col :span="5" style="padding:0">
                  <div @click="showMenu (1)">
                    <i class="el-icon-menu"></i>
                    <el-badge is-dot class="item"></el-badge>
                  </div>
                </el-col>

                <el-col :span="6">
                  <el-dropdown>
                    <span class="el-dropdown-link">
                      王某人<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>安全退出</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row class='tag' type="flex" align="middle">
            <el-tag
              v-for="(item,index) in asidesItems"
              :key="index"
              :closable="item.tagname !== '首页'"
              :type="item.active? 'warning':''"
              @click="tagClick(item)"
              @close="tagClose(item)"
            >{{item.tagname}}</el-tag>
<!--            <el-tag closable>权限管理</el-tag>-->
<!--            <el-tag closable>考勤管理</el-tag>-->
          </el-row>

          <!--侧边菜单栏-->
          <RightMenu :activeTab="activeTab" :menuToggle="menuToggle" :leftToggle="collapse" @leftToggle="AsideToggle"/>

        </el-header>

        <!--  主内容区域  -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import RightMenu from '@/components/rightMenu/rightMenu'

export default {
  components: {
    RightMenu // 右侧菜单栏组件
  },
  name: 'Home',
  data () {
    return {
      // 控制左侧侧边栏的收齐和展开
      collapse: false,

      // 右侧已经打开过的导航标签的数组
      asidesItems: [
        {
          url: '/default',
          tagname: '首页',
          active: true // 是否处于选中状态标签
        } // 默认含有一个首页标签
      ],

      // 控制右侧菜单栏的收起和展开
      menuToggle: false, // 默认关闭

      // 控制右侧tab栏选中标签的索引值
      activeTab: 0 // 设置默认值为0

    }
  },
  methods: {
    // 控制侧边栏显示和隐藏的函数
    AsideToggle () {
      this.collapse = !this.collapse
    },

    // 左侧导航栏选中函数
    asideSelect (key) {
      // 先将asidesItems中的控制是否选中全都设置成false
      this.asidesItems.forEach((item) => {
        item.active = false
      })

      const tag = {}
      tag.url = '/' + key.split('/')[1]
      tag.tagname = key.split('/')[2]
      tag.active = true // 因为是点选中，所以要设置为选中状态
      // 判断导航标签的数组中是否存在该索引值
      const isExistence = this.asidesItems.find((item) => {
        return item.url === tag.url
      })
      if (!isExistence) {
        this.asidesItems.push(tag)
      }

      // 修复了isExistence出现未定义的bug
      if (isExistence) {
        // 数组中存在这个索引值的情况找到数组中这歌元素改为选中状态
        isExistence.active = true
      }
      return false
    },
    // tag标签点击跳转函数
    tagClick (item) {
      const url = item.url

      this.$router.push(url)
      // 重新设置选中状态
      // 先将asidesItems中的控制是否选中全都设置成false
      this.asidesItems.forEach((item) => {
        item.active = false
      })

      const activeTag = this.asidesItems.find((item) => {
        return item.url === url
      })

      // 设置为选中状态
      activeTag.active = true
    },

    // tag标签关闭函数
    tagClose (item) {
      // 从列表中删除这个标签
      const url = item.url
      const tagIndex = this.asidesItems.findIndex((item) => {
        return item.url === url
      })
      // 根据索引值进行删除
      this.asidesItems.splice(tagIndex, 1)

      // 重新规定选中的标签,选中最后一个标签
      const activeTag = this.asidesItems[this.asidesItems.length - 1]
      // 调用选中函数
      this.tagClick(activeTag)
    },

    // 显示右侧栏的函数
    showMenu (index) {
      this.menuToggle = !this.menuToggle
      // 传递索引值
      this.activeTab = index
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

  /*设置侧边导航栏字的样式*/
  .el-menu-item a {
    color: $activeBackground;
    &:focus {
      color: rgb(255, 208, 75);
    }
  }

  .el-submenu .el-menu-item {
    min-width: 0;
  }

  .el-menu {
    border-right: none;
  }

  .el-tag {
    cursor: pointer;
  }

  .el-aside {
    background-color: $primaryBackground;

    .manager {
      height: 150px;
      position: relative;

      .avator {
        width: 80px;
        height: 80px;
        overflow: hidden;
        border: 2px solid white;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: 55px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .nickname {
        text-align: center;
        position: absolute;
        left: 57px;
        bottom: 33px;

        span {
          font-size: 14px;
          color: #999c9e;
        }
      }

      .nick {
        position: absolute;
        bottom: 10px;
        left: 57px;
        color: white;
        font-size: 15px;
        cursor: pointer;
      }

    }
  }

  .el-header {
    width: 100%;
    padding: 0;
    position: relative;
    .header_top {
      width: 100%;
      height: 55px;
      background-color: #f3f3f4;

      .aside_btn > .el-button {
        margin-left: 10px;
      }

      .notes .el-col {
        position: relative;
        &:hover {
          background-color: #eeeeee;
        }
        div {
          display:block;
          height: 55px;
          width: 100%;
          text-align: center;
          line-height:55px;
          .item {
            position: absolute;
            top: -4px;
            left: 16px;
          }
        }
      }
    }

    /*导航标签样式*/
    .tag {
      background-color: white;
      height: 45px;
      border-bottom: 2px solid #293846;

      .el-tag {
        margin-left: 10px;
      }
    }

  }

  .el-main{

  }
</style>
