<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header height="56px" style="padding-left: 0px;padding-right: 0px;">
        <Header/>
      </el-header>
      <el-container style="margin-top: 10px;height: 100%">
        <el-aside width="200px" style="background-color: #545c64">
          <Aside/>
        </el-aside>
        <el-main style="padding:0">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Aside from '@/components/aside'
  export default {
    name: 'App',
    components: {
      Header,
      Aside
    },
    data: function () {
      return {
        user:{
          userName:'wgb',
          password:'dsb',
          type:1
        }
      }
    },
    created:function(){
      window.localStorage.setItem("user",JSON.stringify(this.user));
    },
  }
</script>

<style scoped>
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    height: 100%;
  }
  .el-aside{
    margin-bottom: 0;
  }
</style>
