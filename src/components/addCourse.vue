<template>
  <div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="form.course_name"></el-input>
        </el-form-item>
        <el-form-item label="课程教练">
          <el-input v-model="form.course_coach"></el-input>
        </el-form-item>
        <el-form-item label="课程人数">
          <el-input-number v-model="form.course_amount"  :min="1"></el-input-number>
        </el-form-item>
        <el-form-item label="开课时间">
          <el-date-picker
            v-model="form.course_date"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开课日期"
            end-placeholder="结课日期"
            :picker-options="pickerOptions"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="课程描述">
          <el-input type="textarea" v-model="form.course_desc"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="onSubmit">添加</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form: {
          course_name: '游泳课',
          course_date:[],
          course_desc: '11',
          course_coach:'wgb',
          course_amount:1,
          course_start:'',
          course_end:''
        },
        pickerOptions:{
          disabledDate:function(time){
            return time.getTime() < (Date.now()-3600*24*1000);
          }
        }
      }
    },
    methods:{
      onSubmit:function(){
        this.form.course_start = this.form.course_date[0];
        this.form.course_end = this.form.course_date[1];
        console.log(this.form);
        var url = this.Host + '/api/addCourse';
        this.$axios.post(url,this.form).then(res => {
          if(res.data.success) {
            this.$message.success('课程信息发布成功！');
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
  .form{
    margin-left: 10%;
    margin-top: 5px;
    width:40%;
  }
</style>
