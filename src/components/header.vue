<template>
  <div>
    <el-menu mode="horizontal"
             active-text-color="#409EFF" router>
      <el-row >
        <el-col :span="10"  :offset="6">
         <div class="title">
           <img src="@/assets/logo1.png" width="180%">
         </div>
        </el-col>
        <el-col :span="2" :offset="4">
          <!--<el-menu-item index="/name">wgb</el-menu-item>-->
          <div class="user">
            <el-dropdown @command="handleCommand">
              <span style="font-size: 15px">
                {{user.userName}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="signIn">签到</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col :span="2">
          <el-menu-item @click="logout" index="#">注销</el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default ({
    name: 'Header',
    data: function () {
      return {
        user:{
          userName:'wgb',
          password:'dsb',
          type:1
        }
      }
    },
    methods:{
      logout:function(){
        var url = this.Host + '/api/logout';
        console.log(url);
        this.$axios.post(url).then(res => {
          if(res.data.success) {
            this.$message.success('注销成功，即将跳转到登录页!');
            this.$router.push({path: '/login'});
            window.localStorage.removeItem("user");
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      },
      handleCommand:function(command) {
        if(command === 'signIn'){
          this.$message({
            showClose: true,
            type: 'success',
            duration:2000,
            message: '签到成功！'
          });
        }
      },
      getUserInfo(){
        var url = this.Host + '/api/members_info';
        this.$axios.post(url).then(res => {
          if(res.data.success) {
           this.user.userName = res.data.members.Username;
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      }
    },
    created(){
      this.getUserInfo();
    }
  })
</script>
<style scoped>
  .el-col {
    text-align: center;
  }
  .el-menu-item{
    padding-left: 5px;
    padding-right:5px;
    text-align: center;
  }
  .title{
    text-align: center;
    font-size: 25px;
    font-family:"KaiTi";
    letter-spacing: 10px;
  }
  .user{
    padding-top: 15px;
    font-size: 15px;
    text-align: center;
  }
</style>
