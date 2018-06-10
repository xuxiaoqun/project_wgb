<template>
  <div>
    <div class="like" >
        <el-form ref="form" :model="form">
          <el-form-item  label="标题">
            <el-input v-model="form.Title" style="width: 50%;"></el-input>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" v-model="form.Desc"
                      rows="10" style="width: 50%;">
            </el-input>
          </el-form-item>
          <el-form-item style="text-align: center;width: 60%">
            <el-button type="primary" @click="submit" >发布</el-button>
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
          Title:'',
          Desc:''
        }
      }
    },
    methods:{
      submit:function(){
        var url = this.Host + '/api/hobby';
        this.$axios.post(url,this.form).then(res => {
          if(res.data.success) {
            this.$message.success('信息发布成功！');
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
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
