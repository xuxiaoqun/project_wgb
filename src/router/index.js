import Vue from 'vue'
import Router from 'vue-router'
import Back from '@/components/back'
import Console from '@/components/console'
import AddCourse from '@/components/addCourse'
import CheckCourse from '@/components/checkCourse'
import AddVip from '@/components/addVip'
import CheckVip from '@/components/checkVip'
import PersonalInfo from '@/components/personalInfo'
import Meal from '@/components/addMeal'
import TakeMeal from '@/components/takeMeal'
import DeskManage from '@/components/deskManage'
import Like from '@/components/like'
import Birthday from '@/components/birthday'
import Expire from '@/components/expire'
import RecentlyVisited from '@/components/recentlyVisited'
import CheckIn from '@/components/checkIn'
import FaceCheck from '@/components/faceCheck'
import GroupsAnalyze from '@/components/groupsAnalyze'
import Push from '@/components/push'

import Login from '@/components/login'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'console',
      component: Back,
      children:[
        {
          path:'',
          component:Console
        },
        {
          path:'addCourse',
          component:AddCourse
        },
        {
          path:'checkCourse',
          component:CheckCourse
        },
        {
          path:'addVip',
          component:AddVip
        },
        {
          path:'checkVip',
          component:CheckVip
        },
        {
          path:'personalInfo',
          component:PersonalInfo
        },
        {
          path:'addMeal',
          component:Meal
        },
        {
          path:'takeMeal',
          component:TakeMeal
        },
        {
          path:'deskManage',
          component:DeskManage
        },
        {
          path:'push',
          component:Push
        },
        {
          path:'like',
          component:Like
        },
        {
          path:'birthday',
          component:Birthday
        },
        {
          path:'groupsAnalyze',
          component:GroupsAnalyze
        },
        {
          path:'expire',
          component:Expire
        },
        {
          path:'recentlyVisited',
          component:RecentlyVisited,
          // beforeEnter (to, rfom, next) {
          //   // 到哪里去，从哪里来，是否往下加载模板
          //
          //   var obj = window.localStorage.getItem("user");
          //   var type = JSON.parse(obj).type;
          //   if(type === 1){
          //     //this.$message.success('信息发布成功！');
          //     next('/')
          //   }
          //   next()
          // }
        },
        {
          path:'checkIn',
          component:CheckIn
        },{
          path:'faceCheck',
          component:FaceCheck
        },
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    }
  ]
})
