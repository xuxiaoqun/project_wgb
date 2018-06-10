<template>
  <div>
    <div class="like" >
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item  label="被推送标签">
          <el-input v-model="form.flag" style="width: 70%;">
            <el-button slot="append" icon="el-icon-plus"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="推送信息">
          <el-input type="textarea" v-model="form.msg"
                    rows="10" style="width: 70%;">
          </el-input>
        </el-form-item>
        <el-form-item style="text-align: center;width: 60%">
          <el-button type="primary" @click="submit" >推送 </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="40%"
        :close-on-press-escape="close"
        :close-on-click-modal="close">
        <div>
          <el-checkbox-group
            v-model="flag">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <span slot="footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="updateCourse">确 定</el-button>
       </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        form:{
          flag:'',
          msg:''
        },
        close:false,
        dialogVisible:false,
        checkFlag:[],
        flags:[]
      }
    },
    methods:{
      submit:function(){
        this.$message.success('信息发布成功！');
      },
      getFlags(){
        var url = this.Host + '/api/label';
        this.$axios.post(url).then(res => {
          if(res.data.success) {
            this.flags = res.data.label_list;
          }else{
            this.$message.error(res.data.msg + "!");
          }
        }).catch(function(error){
          console.log(error);
        })
      }
    },
    created(){
      this.getFlags();
    }
  }
</script>
<style scoped>
  .like{
    margin-left: 20%;
    margin-top: 5%;
    width:50%;
  }
</style>
