<script setup>
  import {ref} from 'vue';
  import toolRemove from '../components/tools/toolRemove.vue';
  import ToolDraw from '../components/tools/ToolDraw.vue';
  import ToolEraser from '../components/tools/ToolEraser.vue';
  import ToolMagic from '../components/tools/ToolMagic.vue';
  import ToolUndo from '../components/tools/ToolUndo.vue';
  import ToolExpand from '../components/tools/ToolExpand.vue';
  
  
  const workarea = ref('workarea');
  const canvasWrapper = ref('canvas-wrapper');

  console.log('workarea', workarea);
</script>

<template>
  <div :id="workarea">
    <el-row justify="space-evenly">
      <el-col :span="12">
        <div :id="canvasWrapper">
          <canvas id="canvas"></canvas>
          <canvas id="image-canvas"></canvas>
          <div class="tool-wrapper">
            <toolRemove class="button-wrapper"/>
            <ToolDraw class="button-wrapper"/>
            <ToolEraser class="button-wrapper"/>
            <ToolMagic class="button-wrapper"/>
            <ToolUndo class="button-wrapper"/>
            <ToolExpand class="button-wrapper"/>
              <!-- <button class="button" id="save-images"><i class="fas fa-download"></i></button> -->
          </div>
          <div id="slider-wrapper">
              <input type="range" min="1" max="100" value="50" class="slider" id="brush-size">
          </div>
          <div id="file-input-wrapper">
              <input type="file" id="file-input">
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div :id="canvasWrapper">
            <canvas id="xrayImage" src="#" alt="Xray result" class="img-fluid mb-4"></canvas>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
#canvas-wrapper {
  position: relative;
  width: var(--wrapper-width);
  height: var(--wrapper-height);
  display: flex;
  justify-content: center;
  align-items: center;
}

#workarea {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically */
}

#slider-wrapper {
  display: none;
  position: absolute;
  z-index: 10;
  top: 47px;
  right: 50px;
}

#canvas, #xrayImage{
  position: absolute;
  width: var(--canvas-width);
  height: var(--canvas-height);
  border-radius: 8px;
  box-shadow: 0 4px 6px var(--shadow-color);
}

.dark #canvas, .dark #xrayImage {
  box-shadow: 0 4px 6px var(--shadow-color-dark);
}
#image-canvas {
  position: absolute;
  width: var(--canvas-width);
  height: var(--canvas-height);
  border-radius: 8px;
}

.tool-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.button-wrapper {
  padding: 4px 4px;
  margin: 2px 0;
  width: var(--tool-btn-size);
  height: var(--tool-btn-size);
}

#file-input-wrapper {
  position: absolute;
  width: var(--canvas-width);
  height: var(--canvas-height);
  cursor: pointer;
}

#file-input-wrapper input[type=file] {
  opacity: 0;
  position: absolute;
  width: var(--canvas-width);
  height: var(--canvas-height);
  cursor: pointer;
}

.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
