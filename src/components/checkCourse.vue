<template>
  <div>
    <div style="margin-left: 10px">
      <el-form :inline="true" :model="searchForm" >

        <el-form-item>
          <span style="font-size: 15px;color: #505D77">搜索条件：</span>
        </el-form-item>
        <el-form-item >
          <el-input v-model="searchForm.condition_name" placeholder="课程名称"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="searchForm.condition_coach" placeholder="课程教练"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="search"  icon="el-icon-search" round>查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="course_table">
      <el-table :data="form" >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="开课时间 :">
                <span>{{props.row.Course_date[0]}} 至 {{props.row.Course_date[1]}}</span>
              </el-form-item>
              <el-form-item label="课程描述 :">
                <span>{{ props.row.Course_desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="课程名称" prop="Course_name" >
        </el-table-column>
        <el-table-column label="课程教练" prop="Course_coach" >
        </el-table-column>
        <el-table-column label="课程人数" prop="Course_amount">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="40%"
        :close-on-press-escape="close"
        :close-on-click-modal="close">
        <div>
          <el-form ref="update_course" :model="update_course" label-width="80px">
            <el-form-item label="课程名称">
              <el-input v-model="update_course.Course_name"></el-input>
            </el-form-item>
            <el-form-item label="课程教练">
              <el-input v-model="update_course.Course_coach"></el-input>
            </el-form-item>
            <el-form-item label="课程人数">
              <el-input-number v-model="update_course.Course_amount"  :min="1"></el-input-number>
            </el-form-item>
            <el-form-item label="开课时间">
              <el-date-picker
                v-model="update_course.Course_date"
                type="daterange"
                unlink-panels
                range-separator="至"
                start-placeholder="开课日期"
                end-placeholder="结课日期"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="课程描述">
              <el-input type="textarea" v-model="update_course.Course_desc"></el-input>
            </el-form-item>

          </el-form>
        </div>
        <span slot="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="updateCourse">确 定</el-button>
       </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form: [
          {
            Course_id:null,
            Course_name: '游泳课',
            Course_date:['2018-05-21','2018-05-25'],
            Course_desc: '每天下午两点钟体育馆集合',
            Course_coach:'李世石',
            Course_amount:10,
            Course_start:'',
            Course_end:''
          }
        ],
        searchForm:{
          condition_name:'',
          condition_coach:''
        },
        dialogVisible:false,
        update_course:{
          Course_id:null,
          Course_name:null,
          Course_desc:null,
          Course_coach:null,
          Course_amount:null,
          Course_start:null,
          Course_end :null,
          Course_date:[]
        },
        close:false
      }
    },
    methods:{
      handleEdit:function(index, row){
        this.dialogVisible = true;
        this.update_course = row;
        console.log(this.update_course);

      },
      handleDelete:function(index, row){
        var url = this.Host + '/api/delCourse';
        var parms = {
          Course_id:row.Course_id
        }
        this.$axios.post(url,parms).then(res => {
          if(res.data.success) {
            this.$message.success("信息删除成功");
            this.getCourseList();
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      },
      updateCourse(){
        var url = this.Host + '/api/updateCourse';
        this.update_course.Course_start = this.update_course.Course_date[0];
        this.update_course.Course_end = this.update_course.Course_date[1];
        this.$axios.post(url,this.update_course).then(res => {
          if(res.data.success) {
            this.$message.success("信息修改成功");
            this.getCourseList();
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
        this.dialogVisible = false;
      },
      search:function(){
        var length = this.searchForm.length;
        if(this.searchForm.condition_name !== '' ){

          this.searchForm = this.searchForm.splice();
        }
      },
      getCourseList(){
        var url = this.Host + '/api/courses_list';
        this.$axios.post(url).then(res => {
          if(res.data.success) {
            this.form = res.data.courses;
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      },
      cancel(){
        this.getCourseList();
        this.dialogVisible = false;
      }
    },
    created(){
      this.getCourseList();
    }
  }
</script>
<style scoped>
.course_table{
  width:98%;
  margin-left: 10px;
}
</style>
