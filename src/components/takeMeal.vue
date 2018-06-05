<template>
  <div>
    <div class="form">
      <span style="margin-right: 20px">选购套餐:</span>

      <el-tooltip class="item" effect="dark" :content="item.meal_time + ':' + item.meal_price" placement="top-start"
                  v-for="item in meal" :key="item.id">
        <el-radio v-model="radio" :label="item.meal_name" >{{item.meal_name}}</el-radio>
      </el-tooltip>
      <el-button  type="primary"  @click="buy" style="margin-left: 10px">确认购买</el-button>
  </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        radio:'',
        meal: [
          {
            id:1,
            meal_name: '套餐一',
            meal_price:200,
            meal_time:'一个季度'
          },
          {
            id:2,
            meal_name: '套餐二',
            meal_price:350,
            meal_time:'半年'
          }
        ]
      }
    },
    methods:{
      buy:function(){
        this.$message.success('购买成功');
      }
    }
  }
</script>
<style scoped>
  .form{
    padding-left: 10%;
    margin-top: 10%;
  }
</style>
