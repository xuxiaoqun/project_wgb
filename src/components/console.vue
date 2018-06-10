<template>
  <div class="content-wrapper">
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
    },
    methods:{

    }
  }
</script>
<style scoped>
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
.content{
  font-size: 18px;
  letter-spacing: 10px;
  padding-top: -10%;
}
</style>
