<template>
  <div class="app-footer-box">
    <i class="fa fa-meetup" style="color: #29ABE2"></i>&nbsp;
    <span class="footer-text">{{appName}}
      ©make by
      <a href="https://www.github.com/xuxiaoqun" target="_blank">{{author}}</a>
      &nbsp;版本号：<el-tag size="mini">{{version}}</el-tag>
    </span>
  </div>
</template>
<script type="text/javascript">
  export default {
    data : function() {
      return {
        author: 'wgb',
        version: '1.0',
        appName: '俱乐部会员管理系统 '
      }
    }
  }
</script>
<style type="text/css">
  .app-footer-box{
    height: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .app-footer-box .footer-text{
    color: #8b949e;
  }
</style>
