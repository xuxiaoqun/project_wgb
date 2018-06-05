<template>
  <div class="my_div">
    <div style="margin-left: 10px">
      <el-form :inline="true" :model="searchForm" >

        <el-form-item>
          <span style="font-size: 15px">搜索条件：</span>
        </el-form-item>
        <el-form-item >
          <el-input v-model="searchForm.condition_name" placeholder="会员姓名"></el-input>
        </el-form-item>
        <el-date-picker
          v-model="searchForm.condition_joinTime"
          type="daterange"
          unlink-panels
          range-separator="至"
          start-placeholder="加入时间"
          end-placeholder="到期时间"
          :picker-options="pickerOptions"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd">
        </el-date-picker>
        <el-form-item style="text-align: right">
          <el-button type="primary" @click="onSubmit"  icon="el-icon-search" round>查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="course_table">
      <el-table :data="form" style="width: 100%">
        <el-table-column label="姓名" prop="vip_name"  width="80" fixed>
        </el-table-column>
        <el-table-column label="性别" prop="vip_sex" width="90">
        </el-table-column>
        <el-table-column label="年龄" prop="vip_age" width="90">
        </el-table-column>
        <el-table-column label="兴趣" prop="vip_like" width="160">
        </el-table-column>
        <el-table-column label="身高" prop="vip_height" width="90">
        </el-table-column>
        <el-table-column label="体重" prop="vip_weight" width="90">
        </el-table-column>
        <el-table-column label="体型" prop="vip_shape" width="90">
        </el-table-column >
        <el-table-column label="会员卡类型" prop="vip_type" width="120">
        </el-table-column >
        <el-table-column label="加入时间" prop="vip_joinTime" width="100">
        </el-table-column >
        <el-table-column label="到期时间" prop="vip_leaveTime" width="100">
        </el-table-column >
        <el-table-column label="操作"  fixed="right" width="250">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleCancel(scope.$index, scope.row)">注销</el-button>
            <el-button
              size="mini"
              type="success"
              @click="handleRenew(scope.$index, scope.row)">续费</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--<div>-->
      <!--<el-dialog-->
        <!--title="提示"-->
        <!--:visible.sync="dialogVisible"-->
        <!--width="40%"-->
        <!--:close-on-press-escape="close"-->
        <!--:close-on-click-modal="close">-->
        <!--<div>-->
          <!--<el-form ref="update_course" :model="update_course" label-width="80px">-->
            <!--<el-form-item label="课程名称">-->
              <!--<el-input v-model="update_course.course_name"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="课程教练">-->
              <!--<el-input v-model="update_course.course_coach"></el-input>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="课程人数">-->
              <!--<el-input-number v-model="update_course.course_amount"  :min="1"></el-input-number>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="开课时间">-->
              <!--<el-date-picker-->
                <!--v-model="update_course.course_date"-->
                <!--type="daterange"-->
                <!--unlink-panels-->
                <!--range-separator="至"-->
                <!--start-placeholder="开课日期"-->
                <!--end-placeholder="结课日期"-->
                <!--:picker-options="pickerOptions"-->
                <!--format="yyyy-MM-dd"-->
                <!--value-format="yyyy-MM-dd">-->
              <!--</el-date-picker>-->
            <!--</el-form-item>-->
            <!--<el-form-item label="课程描述">-->
              <!--<el-input type="textarea" v-model="update_course.course_desc"></el-input>-->
            <!--</el-form-item>-->

          <!--</el-form>-->
        <!--</div>-->
        <!--<span slot="footer">-->
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
       <!--</span>-->
      <!--</el-dialog>-->
    <!--</div>-->
    <div>
      <el-dialog
        title="充值信息"
        :visible.sync="dialogVisible"
        width="30%">
        <span>购买类型：</span>
        <el-radio v-model="radio" label="季卡">季卡</el-radio>
        <el-radio v-model="radio" label="半年卡">半年卡</el-radio>
        <el-radio v-model="radio" label="年卡">年卡</el-radio>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确定充值</el-button>
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
            vip_name: '沈天睿',
            vip_sex:'男',
            vip_age:22,
            vip_like:'游泳、跑步',
            vip_height:'175cm',
            vip_weight:'62kg',
            vip_shape:'偏瘦',
            vip_type:'季度卡',
            vip_joinTime:'2018-05-21',
            vip_leaveTime:'2018-08-21'
          },
          {
            vip_name: '张猛治',
            vip_sex:'男',
            vip_age:22,
            vip_like:'健身、玩游戏',
            vip_height:'170cm',
            vip_weight:'72kg',
            vip_shape:'偏胖',
            vip_type:'年卡',
            vip_joinTime:'2018-05-21',
            vip_leaveTime:'2019-05-21'
          }
        ],
        searchForm:{
          condition_name:'',
          condition_joinTime:[],
          condition_other:''
        },
        dialogVisible:false,
        update_course:{},
        close:false
      }
    },
    methods:{
      handleEdit:function(index, row){
//        this.dialogVisible = true;
        this.update_course = row;
      },
      handleCancel:function(index, row){
        this.form.splice(index,1);
      },
      handleRenew:function(index, row){
        this.dialogVisible = true;
      }
    }
  }
</script>
<style >
  .my_div .course_table{
    width:98%;
    margin-left: 10px;
    text-align: center;
  }
  .my_div .el-table th{
    text-align: center;
  }
</style>
