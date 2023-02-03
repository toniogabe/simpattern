<script setup>
import { ref } from 'vue';
import Canvas from './components/Canvas.vue';

const baseColors = ref([
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
])
const baseWeights = ref(['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'])
const roundeds = ref([
  'tl-full',
  'tr-full',
  'bl-full',
  'br-full',
  //'full'
])

const checkedColors = ref(baseColors.value)
const checkedWeights = ref(baseWeights.value)

</script>

<template>
  <main class="p-10 flex gap-10">
    <div>
      <h2 class="text-lg font-bold mb-4">Colors</h2>
      <div class="flex flex-col flex-wrap mb-10 gap-4">
        <div class="flex items-center" v-for="color in baseColors" :key="color">
          <input
            :id="color"
            type="checkbox"
            :value="color"
            v-model="checkedColors"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
          >
          <span class="h-4 w-4 ml-2 rounded-full" :class="`bg-${color}-500`"></span>
          <label :for="color" class="ml-2 text-sm font-medium text-gray-900">{{ color }}</label>
        </div>
      </div>
    </div>

      <div>
        <h2 class="text-lg font-bold mb-4">Weights</h2>
        <div class="flex flex-col gap-4">
          <div class="flex items-center" v-for="weight in baseWeights" :key="weight" >
            <input
              :id="weight"
              type="checkbox"
              :value="weight"
              v-model="checkedWeights"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"
            >
            <label :for="weight" class="ml-2 text-sm font-medium text-gray-900">{{ weight }}</label>
          </div>
        </div>
      </div>

    <Canvas :colors="checkedColors" :weights="checkedWeights" :roundeds="roundeds" />
  </main>
</template>
