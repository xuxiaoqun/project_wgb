<template>
    <div>
        <div class="login" >
            <div style="margin-bottom: 10px;color: #909DB7;font-size: 15px">
                <span>你好，欢迎登录！</span>
            </div>
            <div>
                <el-form ref="form" :model="form">
                    <el-form-item >
                        <el-input v-model="form.userName" placeholder="请输入用户名" style="width: 300px"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input type="password" v-model="form.password" placeholder="请输入密码" style="width: 300px"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit" style="width: 140px">登录</el-button>
                      <el-button type="success" @click="register" style="width: 140px">还没有账号！</el-button>
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
                msg:"登录!",
                form:{
                    userName:'',
                    password:''
                }
            }
        },
        methods:{
            submit:function(){
              var url = this.Host + '/api/login';
              this.$axios.post(url,this.form).then(res => {
                if(res.data.success) {
                  this.$message.success('登录成功，即将跳转到主页 !');
                  window.localStorage.setItem("user",JSON.stringify(res.data.user));
                  this.$router.push({path: '/'});
                }else{
                  this.$message.error(res.data.msg + "!");
                }
              }).catch(function(error){
                console.log(error);
              })

            },
          register:function(){
            this.$router.push({path: '/register'});
          }
        }
    }
</script>
<style scoped>
    .login{
        text-align: center;
        padding:200px;
    }
</style>
