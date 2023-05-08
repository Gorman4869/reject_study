<script setup lang="ts">
import { ref,onMounted, reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import lala from './App'

const getDataFromSon = (args:string)=>{
  console.log(args,'from son')
}

const getSonData2 = ref<InstanceType<typeof HelloWorld>>()

onMounted(()=>{

  console.log(getSonData2.value?.sonData2,'11')
  getSonData2.value?.open()
})

interface Tree{
  name:string,
  checked:boolean,
  children?:Tree[]
}

const treeData = reactive<Tree[]>([
  {
    name:'1',
    checked:false,
    children:[],
  },
  {
    name:'2',
    checked:false,
    children:[
      {
        name:'2-1',
        checked:true,
        children:[],
      },
      {
        name:'2-2',
        checked:true,
        children:[],
      },
    ],
  },
  {
    name:'3',
    checked:false,
    children:[
      {
        name:'3-1',
        checked:true,
        children:[
          {
            name:'3-1-1',
            checked:true,
            children:[],
          },
        ],
      },
      {
        name:'3-2',
        checked:true,
        children:[],
      },
    ],
  },
  {
    name:'4',
    checked:false,
    children:[],
  },
  {
    name:'5',
    checked:true,
    children:[],
  },
  {
    name:'6',
    checked:false,
    children:[],
  },
])

</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld ref="getSonData2" @click-sendto-father="getDataFromSon" msg="You did it!" :arr="[1,2,3]" />
    </div>
    <div>树组件</div>
    <br>
    <Tree :treeData="treeData"></Tree>

    <lala></lala>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
