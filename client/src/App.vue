<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <h1>这是个测试页面</h1>
  <ul>
    <!-- <li>主页</li>
    <li>登陆</li> -->
    <router-link to="/">主页</router-link>
    <router-link to="/">登陆</router-link>
  </ul>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
