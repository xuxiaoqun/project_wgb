<template>
  <div>
    <div style="margin-left: 10px">
      <el-form ref="meal" :model="meal" label-width="80px" :inline="true">
        <el-form-item >
          <el-input v-model="meal.meal_name" placeholder="套餐名称"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="meal.meal_price" placeholder="会员卡价格"></el-input>
        </el-form-item>
        <el-form-item >
          <el-input v-model="meal.meal_time" placeholder="会员卡时长"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="card_add">添加</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="personal">
      <el-table :data="form" style="width: 100%">
        <el-table-column label="套餐名称" prop="Meal_name"  >
        </el-table-column>
        <el-table-column label="价格" prop="Meal_price" >
        </el-table-column>
        <el-table-column label="时长" prop="Meal_time" >
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
          meal_time:null
        },
        form: [
          {
            Id:null,
            Meal_name: '',
            Meal_price:null,
            Meal_time:null
          }
        ]
      }
    },
    methods:{
      refresh:function(){
        var url = this.Host + '/api/cards_list';
        this.$axios.post(url).then(res => {
          if(res.data.cards_list) {

            this.form = res.data.cards_list;

          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })

      },
      card_add:function(){
        var url = this.Host + '/api/card_add';
        console.log(url);
        this.$axios.post(url,this.meal).then(res => {
          if(res.data.success) {
            this.$message.success('添加成功！');
            this.refresh();
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })

      }
    },
    created(){
      this.refresh();
    }
  }
</script>
<style scoped>
  .personal{
    margin-left: 10px;
    margin-right: 10px;
  }

</style>
