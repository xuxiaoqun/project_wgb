<template>
  <div>
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
        <el-col :span="1">
          <el-badge :value="messageAmount" style="margin-top: 10px">
            <el-button size="small" style="border: 0;font-size: 15px" @click="dialogVisible = true">消息</el-button>
          </el-badge>
        </el-col>
        <el-col :span="1">
          <el-menu-item @click="logout" index="#">注销</el-menu-item>
        </el-col>
      </el-row>
    </el-menu>
    </div>
    <div>
      <el-dialog
        title="消息"
        :visible.sync="dialogVisible"
        width="40%"
        :close-on-press-escape="close"
        :close-on-click-modal="close">
        <div>
          <el-table
            :show-header="show_header"
            :data="messages"
            style="width: 100%">
            <el-table-column
              prop="Msg"
              label="消息">
            </el-table-column>
          </el-table>
        </div>
        <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
       </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default ({
    name: 'Header',
    data: function () {
      return {
        user:{
          userName:'wgb',
          password:'dsb',
          type:1
        },
        messageAmount:null,
        messages:[],
        close:false,
        dialogVisible:false,
        show_header:false
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
      },
      message(){
        var url = this.Host + '/api/show_message';
        this.$axios.post(url).then(res => {
          if(res.data.success) {
            console.log(res.data);
            this.messages = res.data.messages;
           this.messageAmount = this.messages.length;
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
      this.message();
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
