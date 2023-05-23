<template lang="">
   <div class="header">
        <div class="return">
            <span class="iconfont">&#xe67f;</span>
        </div>
        <div class="search">
            <span class="iconfont return-icon">&#xe683;</span>
        </div>
        <div class="next">
            宜昌<span class="iconfont next-icon">&#xe681;</span>
        </div>
   </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
.header
  display flex
  line-height:.86rem
  background: #00bcd4
  color: #fff
  .return
    margin-left: 0.1rem
    float:left
    width :.64rem
  .search
    padding-left:.2rem
    .return-icon
      text-align: center
      font-size: .4rem
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    color: #ccc
    background: #fff
    border-radius: .1rem
  .next
    .next-icon
      font-size .3rem
      margin-left -.05rem
      padding 0 .1rem
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #ffffff
</style>