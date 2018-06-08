<template>
  <div  style="height: 100%">
    <el-menu text-color="#fff"  active-text-color="#ffd04b" router
             background-color="#545c64" default-active="/" unique-opened>
      <el-menu-item index="/">
        <i class="el-icon-setting"></i>
        <span slot="title" style="font-size: 20px;">控制台</span>
      </el-menu-item>
      <el-submenu index="/course" :style="{display:display1}">
        <template slot="title">
          <span>健身课程管理</span>
        </template>
        <el-menu-item index="addCourse">
          <span slot="title">添加课程</span>
        </el-menu-item>
        <el-menu-item index="checkCourse">
          <span slot="title">查看课程</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/vip" :style="{display:display1}">
        <template slot="title">
          <span>会员管理</span>
        </template>
        <el-menu-item index="addVip">
          <span slot="title">添加会员</span>
        </el-menu-item>
        <el-menu-item index="checkVip">
          <span slot="title">查看会员</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/personal" :style="{display:display2}">
        <template slot="title">
          <span>个人管理</span>
        </template>
        <el-menu-item index="personalInfo">
          <span slot="title">个人信息</span>
        </el-menu-item>
        <el-menu-item index="takeMeal">
          <span slot="title">办理套餐</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/push" :style="{display:display2}">
        <template slot="title">
          <span>推送管理</span>
        </template>
        <el-menu-item index="push">
          <span slot="title">推送设置</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/card" :style="{display:display2}">
        <template slot="title">
          <span>会员卡管理</span>
        </template>
        <el-menu-item index="addMeal" :style="{display:display5}">
          <span slot="title">会员卡管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/flag" :style="{display:display1}">
        <template slot="title">
          <span>标签管理</span>
        </template>
        <el-menu-item index="like">
          <span slot="title">会员爱好标签</span>
        </el-menu-item>
        <el-menu-item index="birthday">
          <span slot="title">生日临近标签</span>
        </el-menu-item>
        <el-menu-item index="expire">
          <span slot="title">会员到期标签</span>
        </el-menu-item>
        <el-menu-item index="recentlyVisited">
          <span slot="title">最近访问标签</span>
        </el-menu-item>
        <el-menu-item index="groupsAnalyze">
         <span slot="title">会员团体标签</span>
         </el-menu-item>
      </el-submenu>
      <el-submenu index="/checkIn" :style="{display:display1}">
        <template slot="title">
          <span>签到管理</span>
        </template>
        <el-menu-item index="checkIn" :style="{display:display5}">
          <span slot="title">累计签到设置</span>
        </el-menu-item>
        <el-menu-item index="faceCheck" :style="{display:display5}">
        <span slot="title">人脸识别签到设置</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="/system" :style="{display:display3}">
        <template slot="title">
          <span>系统设置</span>
        </template>
        <el-menu-item index="deskManage" :style="{display:display4}">
          <span slot="title">前台人员管理</span>
        </el-menu-item>
        <el-menu-item index="addMeal" :style="{display:display5}">
          <span slot="title">会员卡管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'Aside',
    props: ['active'],
    data: function () {
      return {
        user:{
          userName:'wgb',
          password:'dsb',
          type:3
//         1 : 管理员 2：前台人员 3：普通会员
        }
      }
    },
    created:function(){



    }
  }
</script>
<style >
  .el-menu-item {
    text-align: left;
    padding-left: 0;
  }

  .el-submenu {
    text-align: left;
  }

</style>
