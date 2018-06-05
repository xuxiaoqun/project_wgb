<template>
  <div>
    <div class="like" >
        <el-form ref="form" :model="form">
          <el-form-item  label="会员团体名称">
            <el-input v-model="form.title" style="width: 50%;"></el-input>
          </el-form-item>
          <el-form-item label="会员添加">
            <el-input type="textarea" v-model="form.desc"
                      rows="10" style="width: 50%;">
            </el-input>
          </el-form-item>
          <el-form-item style="text-align: center;width: 60%">
            <el-button type="primary" @click="submit" >添加</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form:{
          title:'',
          desc:''
        }
      }
    },
    methods:{
      submit:function(){
        this.$message.success('信息发布成功！');
      }
    }
  }
</script>
<style scoped>
  .like{
    margin-left: 20%;
    margin-top: 5%;
    width:50%;
  }
</style>
