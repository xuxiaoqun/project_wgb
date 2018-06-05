<template>
  <div>
    <div class="content" >
      {{msg}}
    </div>
  </div>
</template>
<script>
  export default {
    data: function(){
      return {
        msg:"欢迎回来!"
      }
    }
  }
</script>
<style scoped>
.content{
  text-align: center;
  padding-top: 200px;
  padding-bottom: 200px;
  font-size: 18px;
  letter-spacing: 10px;
}
</style>
