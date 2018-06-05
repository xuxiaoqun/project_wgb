<template>
  <div>
    <div class="like" >
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item  label="被推送会员">
          <el-input v-model="form.vip" style="width: 70%;">
            <el-button slot="append" icon="el-icon-plus"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item  label="被推送标签">
          <el-input v-model="form.flag" style="width: 70%;">
            <el-button slot="append" icon="el-icon-plus"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="推送信息">
          <el-input type="textarea" v-model="form.msg"
                    rows="10" style="width: 70%;">
          </el-input>
        </el-form-item>
        <el-form-item style="text-align: center;width: 60%">
          <el-button type="primary" @click="submit" >推送 </el-button>
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
          vip:'',
          flag:'',
          msg:''
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
