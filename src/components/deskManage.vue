<template>
  <div>
    <div style="margin-left: 10px">
        <el-form :inline="true" :model="addForm" >
          <el-form-item >
            <el-input v-model="addForm.desk_name" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item >
            <el-input v-model="addForm.desk_password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="search" >添加前台人员</el-button>
          </el-form-item>
        </el-form>
    </div>
    <div class="desk">
        <el-table :data="form" style="width: 100%">
          <el-table-column label="用户名" prop="desk_name"  >
          </el-table-column>
          <el-table-column label="密码" prop="desk_password" >
          </el-table-column>
          <el-table-column label="账号人员">
            <template slot-scope="scope">
              {{scope.row.desk_rank | rankFilter}}
            </template>
          </el-table-column>
          <el-table-column label="操作"  width="250">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleEdit(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form: [
          {
            desk_name: '张三',
            desk_password:'123',
            desk_rank:'2'
          },
          {
            desk_name: '李四',
            desk_password:'123',
            desk_rank:'2'
          }
        ],
        addForm:{
          desk_name:'',
          desk_password:''
        }
      }
    },
    methods:{
      buy:function(){
        this.$message.success('购买成功');
      }
    },
    filters: {
      rankFilter: function (value) {
        if( value === '2'){
          return '前台人员'
        }
      }
    }
  }
</script>
<style scoped>
  .desk{
    padding-left: 10px;
  }
</style>
