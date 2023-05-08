<script setup lang="ts">

//生命周期钩子
import {getCurrentInstance, ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onRenderTracked,onRenderTriggered } from 'vue';

//新增的两个钩子 是调试用的，参数有个event，就是在收集依赖和触发更新时调用钩子。
// const props = defineProps(['msg'])//js写法


//ts写法
// const props = defineProps<{
//   msg:string
// }>();

const props = withDefaults(defineProps<{
  msg:string,
  arr:number[]
}>(),{
  arr:()=>[888]//设置默认值，
})
// console.log(props.msg)

//=====================================>
//send to father
// const emit = defineEmits(['click-sendto-father'])
//ts 写法
const emit = defineEmits<{
  (e:"click-sendto-father",sonData:string):void
}>()
const sendToFather = ()=>{
  emit('click-sendto-father','sonData')
}

//===================================>
//暴露子组件的属性，方法
defineExpose({
  sonData2:'sonData2',
  open:()=>console.log(2222)
})


// const instant = getCurrentInstance()
// console.log(instant)//获取当前实例

</script>

<template>
  <div class="greetings">
    {{msg}}123
    {{arr }}

    <div>
      <button @click="sendToFather">给父组件传值</button>
    </div>
  </div>
</template>

<style scoped>

</style>
