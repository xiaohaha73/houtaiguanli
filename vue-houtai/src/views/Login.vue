<template>
<div class="main">
  <div class="login_box">
    <el-row>
      <el-col :span="12" :offset="6" style="text-align:center;margin-bottom:20px;">
        <h3 style="color:#676a6c;">欢迎使用!</h3>
      </el-col>
    </el-row>
    <el-form :model="loginForm" :rules="loginRules">
      <el-form-item prop="account">
        <el-input v-model="loginForm.account" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // 登陆表单绑定的数据
      loginForm: {
        account: '',
        password: ''
      },

      // 登录表单验证规则
      loginRules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
/*登陆按钮的样式*/
.el-button {
  margin-left: 104px;
  margin-top: 15px;
  padding: 12px 56px;
}
.main {
  height: 100%;
  width: 100%;
  background-color:#f3f3f4;
  overflow: hidden;
  .login_box {
    width: 350px;
    margin:250px auto;
    border:1px solid #EBEEF5;
    border-radius:8px;
    padding: 20px;
    box-shadow: 2px 2px 5px #999c9e;
    background-color:white;
  }
}
</style>
