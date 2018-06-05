<template>
  <div>
    <div class="gen">
      <el-switch
        v-model="value"
        active-text="暂不开启"
        inactive-text="开启人脸识别签到功能">
      </el-switch>
    </div>

  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        value:true,
        days:null
      }
    },
    methods:{
      submit:function(){
        this.$message.success('生日临近天数标记成功！');
      }
    }
  }
</script>
<style scoped>
  .switch{
    margin: auto;
    width: 50%;
    padding-top: 10%;
  }
  .days{
    margin: auto;
    width: 50%;
    padding-top: 20px;
  }
  .gen{
      margin-left: 10%;
      margin-top: 5%;
      margin-right: 20px;
      float: left;
    }
</style>
