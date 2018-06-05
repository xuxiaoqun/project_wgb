<template>
  <div>
    <div class="gen" style="text-align: center;width: 50%">
      <div style="">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="累计签到:" style="width: 200px">
            <el-input-number v-model="form.days"  :min="1"  ></el-input-number>
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
        form:{
          days:null
        }
      }
    },
    methods:{
      buy:function(){
        this.$message.success('购买成功');
      }
    }
  }
</script>
<style scoped>
  .check{
    text-align: center;
  }

  .gen{
    margin-left: 10%;
    margin-top: 5%;
    margin-right: 20px;
    float: left;
  }
</style>
