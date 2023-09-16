<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import {
HomeFilled,
} from '@element-plus/icons-vue'

// collapse
const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
}
</script>

<template>
  <div class="menu-wrapper">
    <div class="custom-toggle" @click="toggleCollapse">
      <el-icon>
        <Expand v-if="isCollapse" />
        <Fold v-else />
      </el-icon>
    </div>

    <div class="menu-container">
      <el-menu
        default-active="0"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <RouterLink to="/">
          <el-menu-item index="2">
            <el-icon><HomeFilled /></el-icon>
            <template #title>Welcome Home</template>
          </el-menu-item>
        </RouterLink>

        <RouterLink to="/workshop">
          <el-menu-item index="3">
            <!-- <el-icon><Monitor /></el-icon> -->
            <el-icon><Platform /></el-icon>
            <template #title>Creativity Space</template>
          </el-menu-item>
        </RouterLink>

        <RouterLink to="/collectionTracker">
          <el-menu-item index="4">
            <!-- <el-icon><Picture /></el-icon> -->
            <el-icon><PictureFilled /></el-icon>
            <template #title>Work Collection</template>
          </el-menu-item>
        </RouterLink>
        
        <RouterLink to="/settings">
          <el-menu-item index="5">
            <!-- <el-icon><setting /></el-icon> -->
            <el-icon><Tools /></el-icon>
            <template #title>Settings</template>
          </el-menu-item>
        </RouterLink>
      </el-menu>
    </div>
  </div>

  <RouterView />
  
</template>

<style>
  .menu-wrapper {
    display: flex;
    flex-direction: column;
    width: fit-content; /* Set to expanded menu width */
  }

  .custom-toggle {
    display: flex;
    align-items: center;
    justify-content: center; /* Center the icon within the toggle */
    width: calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding) * 2); /* Set to collapsed menu width */
    height: var(--el-menu-item-height); /* Adjust to desired height */
    cursor: pointer;
    background-color: #fff;
    font-size: 18px;
  }

  .dark .custom-toggle {
    color: var(--vt-c-white-soft);
    background-color: var(--el-bg-color);
  }

  .menu-container {
    display: flex;
    width: fit-content;
    border-top: 1px solid #e4e7ed;
  }

  .dark .menu-container {
    border-top: 1px solid var(--el-border-color);
  }

  .el-menu-vertical-demo {
    height: calc(100vh - var(--el-menu-item-height) - 1px);
    width: 5vw;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    height: calc(100vh - var(--el-menu-item-height) - 1px);
    width: 15vw;
  }

</style>


<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->
