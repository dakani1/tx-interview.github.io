<template>
  <div class='found-content'>
    test {{key}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: 'value'
    }
  },
  activated () {
    console.log('test activated')
  },
  beforeCreate () {
    console.log('test beforeCreate')
  },
  created () {
    console.log('test created')
  },
  beforeMount () {
    console.log('test beforeMount')
  },
  mounted () {
    console.log('test mounted')
  },
  beforeUpdate () {
    console.log('test beforeUpdate')
  },
  updated () {
    console.log('test updated')
  },
  beforeDestroy () {
    console.log('test beforeDestroy')
  },
  destroyed () {
    console.log('test destroyed')
  }
}
</script>

<style lang='scss' scoped>
.found-content{
  color: red;
  font-size: 32px;
}
</style>
