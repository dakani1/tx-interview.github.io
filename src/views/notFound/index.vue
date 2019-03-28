<template>
  <div class='found-content'>
    not found {{key}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      key: 'value'
    }
  },
  beforeCreate () {
    console.log('notFound beforeCreate')
  },
  created () {
    console.log('notFound created')
  },
  beforeMount () {
    console.log('notFound beforeMount')
  },
  mounted () {
    console.log('notFound mounted')
  },
  beforeUpdate () {
    console.log('notFound beforeUpdate')
  },
  updated () {
    console.log('notFound updated')
  },
  beforeDestroy () {
    console.log('notFound beforeDestroy')
  },
  destroyed () {
    console.log('notFound destroyed')
  }
}
</script>

<style lang='scss' scoped>
.found-content{
  color: red;
  font-size: 32px;
}
</style>
