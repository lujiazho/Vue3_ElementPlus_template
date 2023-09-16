<script setup>
  import {
    Moon,
    Sunny
  } from '@element-plus/icons-vue'

  // inject from main.js
  import { inject } from 'vue';
  const isDark = inject('isDark');
</script>

<template>
  <section class="settings-page">
    <h1>User Settings</h1>

    <!-- Display Settings -->
    <div class="settings-section">
      <h2>Display Settings</h2>
      <div class="setting-item">
        <label for="darkModeSwitch">Dark Mode</label>
        <el-switch
          id="darkModeSwitch"
          v-model="isDark"
          style="--el-switch-on-color: #1a202c; --el-switch-off-color: #edf2f7;"
          inline-prompt
          :active-icon="Moon"
          :inactive-icon="Sunny"
        />
      </div>
      {{ isDark }}
    </div>
    
    <!-- Add more settings sections as needed -->

  </section>
</template>

<style>
.settings-page {
  padding: 20px;
  max-width: 600px;
}

.settings-section {
  margin-bottom: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
</style>
