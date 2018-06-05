<template>
  <div>
    <div class="switch">
      <el-switch
        v-model="value"
        active-text="暂不开通"
        inactive-text="开通生日临近统计"
      >
      </el-switch>
    </div>
    <div v-if="!value" class="days">
      <span style="font-family: Arial;color: #505D77">生日临近标记天数：</span>
      <el-input-number v-model="days" :min="0"></el-input-number>
      <el-button type="primary" @click="submit">标记</el-button>
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
</style>
