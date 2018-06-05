<template>
  <div>
    <div class="register" >
      <div style="margin-bottom: 10px;color: #909DB7;font-size: 15px">
        <span>你好，欢迎注册！</span>
      </div>

      <div class="form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名"  prop="vip_name" :rules="[
            { required: true, message: '用户名不能为空'}]">
            <el-input v-model="form.vip_name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="vip_name" :rules="[
            { required: true, message: '密码不能为空'}]">
            <el-input v-model="form.vip_password" type="password"></el-input>
          </el-form-item>
          <el-form-item label="性别 " prop="vip_sex">
            <el-radio-group v-model="form.vip_sex">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="form.vip_phone" ></el-input>
          </el-form-item>
          <el-form-item label="身高">
            <el-input v-model="form.vip_height"></el-input>
          </el-form-item>
          <el-form-item label="体重">
            <el-input v-model="form.vip_weight"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="onSubmit">注册</el-button>
            <el-button type="success" @click="skipLogin">已有账号，点击登录</el-button>
            <el-button type="success" @click="skipLogin">上传照片</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form: {
          vip_name: '',
          vip_password:'',
          vip_sex:'',
          vip_phone:'',
          vip_height:'',
          vip_weight:''
        }
      }
    },
    methods:{
      onSubmit:function(){
        var url = this.Host + '/api/register';
        console.log(url);
        this.$axios.post(url,this.form).then(res => {
          if(res.data.success) {
            this.$message.success('注册成功，即将跳转到登录页 !');
            this.$router.push({path: '/login'})
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      },
      skipLogin:function(){
        this.$router.push({path: '/login'});

      }
    }
  }
</script>
<style scoped>
  .register{
    text-align: center;
    padding-top: 20px;
  }
  .form{
    width:40%;
    margin: auto;
    text-align: left;
  }
</style>
