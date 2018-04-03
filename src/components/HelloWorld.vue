<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
            <a href="javascript:;" class="weui-btn weui-btn_primary">绿色按钮</a>
             <group>
      <cell title="title" value="value"></cell>
    </group>

  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components: {
    Group,
    Cell
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
