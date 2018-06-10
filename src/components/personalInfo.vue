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
          <el-input v-model="form.vip_age" style="width: 200px" disabled></el-input>
        </el-form-item>
        <el-form-item label="生日：">
          <el-date-picker
            v-model="form.vip_birthday"
            type="date"
            placeholder="选择日期" style="width: 200px" value-format="yyyy-MM-dd" format="yyyy-MM-dd">
          </el-date-picker>
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
          <el-input v-model="form.vip_shape" style="width: 200px" disabled></el-input>
        </el-form-item>
        <el-form-item label="大头像：">
          <el-upload style="width: 200px;height: 200px"
            name="photoupload"
            class="avatar-uploader"
            action="/api/api/photo_upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" width="100%">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
    </div>
    <div style="float: left">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="爱好：">
          <el-input v-model="form.vip_like" style="width: 400px" type="textarea" rows="23" ></el-input>
        </el-form-item>
        <img src="">
      </el-form>
    </div>
    <div style="clear: both;text-align: center">
      <el-button type="primary" @click="memberinfo_change">修改信息</el-button>
    </div>

  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form:{
            id: 0,
            vip_name: '王凯顺',
            vip_password:'',
            vip_sex:'男',
            vip_age:22,
            vip_birthday:null,
            vip_like:'    我喜欢骑自行车和游泳，骑车可以锻炼身体，骑行可以锻炼意志，通过自己的努力到自己想去的地方，最主要的是骑车对环境没有污染，没有排放，比开车环保，建议大家都多多骑车出行，减少污染既锻炼了身体又愉悦了身心，绿色出行，低碳环保，感同身受，乐在其中。                     .        游泳是最受欢迎的健身运动项目之一。适当地进行游泳锻炼，不仅能给人带来心理上的愉悦，塑造流畅和优美的体型，还能够增强心血管系统的机能，增强体质，提高协调性。许多运动项目都容易给机体造成劳损或损伤，但游泳是劳损和损伤率最低的体育活动。因此，游泳是一项很好的、可以终身进行锻炼的健身运动。',
            vip_height:'170cm',
            vip_weight:'75kg',
            vip_shape:'偏胖',
          vip_phone:'13112349239'
          },
        imageUrl: '',
        dialogVisible: false
      }
    },
    methods:{
      refresh:function(){
        var url = this.Host + '/api/members_info';
        this.$axios.post(url).then(res => {
          if(res.data.members) {
            this.form.id = res.data.members.Id;
            this.form.vip_sex = res.data.members.Sex;
            this.form.vip_name = res.data.members.Nickname;
            this.form.vip_age = res.data.members.Age;
            this.form.vip_birthday = res.data.members.Birth_date;
            this.form.vip_like = res.data.members.Hobby;
            this.form.vip_height = res.data.members.Height;
            this.form.vip_weight = res.data.members.Weight;
            this.form.vip_shape = res.data.members.Shape;
            this.form.vip_phone = res.data.members.Phone;
          }else{
            this.$message.error(res.data.msg + "!");
          }
          if(res.data.photo) {
            this.imageUrl = this.Host + "/"+res.data.photo;
          }
        }).catch(function(error){
          console.log(error);
        })

      },
      memberinfo_change:function(){
        var url = this.Host + '/api/memberinfo_change';
        console.log(this.form.vip_birthday);
        this.$axios.post(url,this.form).then(res => {
          if(res.data.success) {
            this.$message.success('修改成功！');
            this.refresh();
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })

      },
      beforeAvatarUpload:function(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 10MB!');
        }
        return isJPG && isLt2M;
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
    }
    ,
    mounted(){
      this.refresh();
    },
  }
</script>
<style scoped>
.personal{
  margin-left: 10%;
  margin-right: 20px;
  float: left;
}
.el-upload{
  width:20%;
}

</style>
