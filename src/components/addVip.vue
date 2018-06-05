<template>
    <div>
      <div class="form">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.vip_name"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.vip_sex">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.vip_age"></el-input>
          </el-form-item>
          <el-form-item label="爱好">
            <el-input v-model="form.vip_like" ></el-input>
          </el-form-item>
          <el-form-item label="身高">
            <el-input v-model="form.vip_height"></el-input>
          </el-form-item>
          <el-form-item label="体重">
            <el-input v-model="form.vip_weight"></el-input>
          </el-form-item>
          <el-form-item label="体型">
            <el-radio-group v-model="form.vip_shape">
              <el-radio label="偏瘦"></el-radio>
              <el-radio label="正常"></el-radio>
              <el-radio label="偏胖"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="会员卡">
            <el-radio-group v-model="form.vip_card">
              <el-radio label="季卡"></el-radio>
              <el-radio label="半年卡"></el-radio>
              <el-radio label="年卡"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item >
            <el-button type="primary" @click="onSubmit">添加</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    </div>
</template>
<script>
    export default {
        data: function(){
            return {
              form: {
                vip_name: '',
                vip_sex:'',
                vip_age:null,
                vip_like:'',
                vip_height:'',
                vip_weight:'',
                vip_shape:'',
                vip_card:''
              }
            }
        }
    }
</script>
<style scoped>
  .form{
    margin-left: 10px;
    margin-top: 5px;
    width:40%;
  }
</style>
