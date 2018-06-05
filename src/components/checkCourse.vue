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
                <span>{{props.row.course_date[0]}} 至 {{props.row.course_date[1]}}</span>
              </el-form-item>
              <el-form-item label="课程描述 :">
                <span>{{ props.row.course_desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="课程名称" prop="course_name" >
        </el-table-column>
        <el-table-column label="课程教练" prop="course_coach" >
        </el-table-column>
        <el-table-column label="课程人数" prop="course_amount">
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
              <el-input v-model="update_course.course_name"></el-input>
            </el-form-item>
            <el-form-item label="课程教练">
              <el-input v-model="update_course.course_coach"></el-input>
            </el-form-item>
            <el-form-item label="课程人数">
              <el-input-number v-model="update_course.course_amount"  :min="1"></el-input-number>
            </el-form-item>
            <el-form-item label="开课时间">
              <el-date-picker
                v-model="update_course.course_date"
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
              <el-input type="textarea" v-model="update_course.course_desc"></el-input>
            </el-form-item>

          </el-form>
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
  export default {
    data: function(){
      return {
        form: [
          {
            course_name: '游泳课',
            course_date:['2018-05-21','2018-05-25'],
            course_desc: '每天下午两点钟体育馆集合',
            course_coach:'李世石',
            course_amount:10
          },
          {
            course_name: '健身课',
            course_date:['2018-05-21','2018-05-25'],
            course_desc: '每天下午两点钟健身房集合',
            course_coach:'白如',
            course_amount:10
          }
        ],
        searchForm:{
          condition_name:'',
          condition_coach:''
        },
        dialogVisible:false,
        update_course:{},
        close:false
      }
    },
    methods:{
      handleEdit:function(index, row){
        this.dialogVisible = true;
        this.update_course = row;
      },
      handleDelete:function(index, row){
        this.form.splice(index,1);
      },
      search:function(){
        var length = this.searchForm.length;
        if(this.searchForm.condition_name !== '' ){

          this.searchForm = this.searchForm.splice();
        }
      }
    }
  }
</script>
<style scoped>
.course_table{
  width:98%;
  margin-left: 10px;
}
</style>
