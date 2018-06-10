<template>
  <div class="my_div">
    <div style="margin-left: 10px">
      <el-form :inline="true" :model="searchForm" >

        <el-form-item>
          <span style="color: #505D77;font-size: 15px">搜索条件：</span>
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
        <el-table-column label="姓名" prop="Nickname"  width="80" fixed>
        </el-table-column>
        <el-table-column label="性别" prop="Sex" width="90">
        </el-table-column>
        <el-table-column label="年龄" prop="Birth_date" width="90">
        </el-table-column>
        <el-table-column label="兴趣" prop="Hobby" width="160">
        </el-table-column>
        <el-table-column label="身高" prop="Height" width="90">
        </el-table-column>
        <el-table-column label="体重" prop="Weight" width="90">
        </el-table-column>
        <el-table-column label="体型" prop="Shape" width="90">
        </el-table-column >
        <el-table-column label="会员卡类型" prop="Vip_type" width="120">
        </el-table-column >
        <el-table-column label="加入时间" prop="Vip_joinTime" width="100">
        </el-table-column >
        <el-table-column label="到期时间" prop="Vip_leaveTime" width="100">
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
    <div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible1"
        width="40%"
        :close-on-press-escape="close"
        :close-on-click-modal="close">
        <div>
          <el-form ref="update_vip" :model="update_vip" label-width="80px">
            <el-form-item label="姓名">
              <el-input v-model="update_vip.Nickname"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-input v-model="update_vip.Sex"></el-input>
            </el-form-item>
            <el-form-item label="兴趣">
              <el-input v-model="update_vip.Hobby"></el-input>
            </el-form-item>
            <el-form-item label="身高">
              <el-input v-model="update_vip.Height"></el-input>
            </el-form-item>
            <el-form-item label="体重">
              <el-input v-model="update_vip.Weight"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer">
        <el-button @click="cancelUpdate">取 消</el-button>
        <el-button type="primary" @click="submitUpdate">提交修改</el-button>
       </span>
      </el-dialog>
    </div>
    <div>
      <el-dialog
        title="充值信息"
        :visible.sync="dialogVisible"
        width="30%">
        <span>购买类型：</span>
        <el-select  v-model="mealInfo.mealType" placeholder="请选择">
          <el-option
            v-for="item in meal"
            :key="item.Id"
            :label="item.Meal_name + ',' + item.Meal_price + '元,' + item.Meal_time + '天'"
            :value="item.Id">
          </el-option>
        </el-select>
        <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="recharge">确定充值</el-button>
       </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form: [],
        searchForm:{
          condition_name:'',
          condition_joinTime:[],
          condition_other:''
        },
        dialogVisible:false,
        dialogVisible1:false,
        update_vip:{},
        close:false,
        radio:null,
        parms :{
          id : null,
          vip_height : null,
          vip_like : null,
          vip_weight : null,
          vip_sex : null,
          vip_name:null
        },
        meal:[],
        mealInfo:{
          MealType:null,
          UserId:null,
        }
      }
    },
    methods:{
      getVipInfo(){
        var url = this.Host + '/api/members_list';
        this.$axios.post(url).then(res => {
          if(res.data.members) {
            for(var i = 0; i< res.data.members.length;i++){
              console.log(res.data.members[i].Sex);
              if(res.data.members[i].Sex === 1){
                res.data.members[i].Sex = '男';
              }
              if(res.data.members[i].Sex === 2){
                res.data.members[i].Sex = '女';
              }
            }
            this.form = res.data.members;
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      },
      handleEdit:function(index, row){
        this.dialogVisible1 = true;
        this.update_vip = row;
        console.log(this.update_vip);
      },
      handleCancel:function(index, row){
        this.form.splice(index,1);
      },
      handleRenew:function(index, row){
        this.dialogVisible = true;
        this.update_vip = row;
        this.getMeal();
      },
      onSubmit(){

      },
      cancelUpdate(){
        this.dialogVisible1 = false;
        this.getVipInfo();
      },
      submitUpdate(){
        this.dialogVisible1 = false;
        var url = this.Host + '/api/memberinfo_change';
        this.parms.id = this.update_vip.Id;
        this.parms.vip_height = this.update_vip.Height;
        this.parms.vip_like = this.update_vip.Hobby;
        this.parms.vip_sex = this.update_vip.Sex;
        this.parms.vip_name = this.update_vip.Nickname;
        this.parms.vip_weight = this.update_vip.Weight;
        this.$axios.post(url,this.parms).then(res => {
          if(res.data.success) {
            this.$message.success('修改成功！');
            this.getVipInfo();
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })

      },
      getMeal(){
        var url = this.Host + '/api/cards_list';
        this.$axios.post(url).then(res => {
          if(res.data.cards_list) {
            this.meal = res.data.cards_list;
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      },
      recharge(){
        var url = this.Host + '/api/makemeal';
        this.mealInfo.UserId = this.update_vip.Id;
        this.$axios.post(url,this.mealInfo).then(res => {
          if(res.data.success) {
            this.$message.success('充值成功！');
            this.getVipInfo();
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
        this.dialogVisible = false;
      }
    },
    created(){
      this.getVipInfo();
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
