
<template>
    <div class="tree">
      <div v-for="item in treeData">
        <input type="checkbox" v-model="item.checked"><span>{{ item.name }}</span>
        <Tree v-if="item.children?.length" :treeData="item.children"></Tree>
      </div>
    </div>
</template>

<script setup lang="ts">
interface Tree{
  name:string,
  checked:boolean,
  children?:Tree[]
}
    defineProps<{
        treeData:Tree[]
    }>()
</script>


<style scoped>
.tree{
    margin-left: 10px;
}
</style>
