<template>
  <div>
    <div class="personal">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名：">
          <el-input v-model="form.vip_name" style="width: 200px"></el-input>
          <!--<el-button type="primary" icon="el-icon-edit" circle></el-button>-->
        </el-form-item>
        <el-form-item label="性别：">
          <el-input v-model="form.vip_sex" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="年龄：">
          <el-input v-model="form.vip_age" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="生日：">
          <el-input v-model="form.vip_birthday" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="手机号：">
          <el-input v-model="form.vip_phone" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="身高：">
          <el-input v-model="form.vip_height" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="体重：">
          <el-input v-model="form.vip_weight" style="width: 200px"></el-input>
        </el-form-item>
        <el-form-item label="体型：">
          <el-input v-model="form.vip_shape" style="width: 200px"></el-input>
        </el-form-item>

      </el-form>
    </div>
    <div >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="爱好：">
          <el-input v-model="form.vip_like" style="width: 400px" type="textarea" rows="23" ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div style="clear: both;text-align: center">
      <el-button type="primary" >修改信息</el-button>
    </div>

  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form:{
            vip_name: 'wgb',
            vip_password:'',
            vip_sex:'男',
            vip_age:22,
            vip_birthday:'',
            vip_like:'',
            vip_height:'170cm',
            vip_weight:'65kg',
            vip_shape:'偏胖',
          vip_phone:'110'
          }
      }
    }
  }
</script>
<style scoped>
.personal{
  margin-left: 10%;
  margin-right: 20px;
  float: left;
}

</style>
