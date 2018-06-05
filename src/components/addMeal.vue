<template>
  <div>
    <div style="margin-left: 10px">
      <el-form ref="meal" :model="meal" label-width="80px" :inline="true">
        <el-form-item >
          <el-input v-model="form.vip_name" placeholder="套餐名称"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="form.vip_name" placeholder="套餐价格"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="form.vip_name" placeholder="套餐期限"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="onSubmit">添加</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="personal">
      <el-table :data="form" style="width: 100%">
        <el-table-column label="套餐名" prop="meal_name"  >
        </el-table-column>
        <el-table-column label="价格" prop="meal_price" >
        </el-table-column>
        <el-table-column label="时长" prop="meal_time" >
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
        meal:{
          meal_name: '',
          meal_price:null,
          meal_time:''
        },
        form: [
          {
            meal_name: '套餐一',
            meal_price:200,
            meal_time:'一季度'
          }
        ]
      }
    }
  }
</script>
<style scoped>
  .personal{
    margin-left: 10px;
    margin-right: 10px;
  }

</style>
