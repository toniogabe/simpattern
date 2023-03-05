<script setup>
  const props = defineProps([
    'columns', 'rows'
  ])

  defineEmits([
    'update:columns', 'update:rows'
  ])
</script>

<template>
  <div class="bg-slate-900 h-20 w-full flex items-center px-6 gap-10">
    <h1 class="text-white font-bold text-2xl">SIMPATTERN</h1>
    <div class="flex flex-col w-1/4 gap-2">
      <label for="minmax-range" class="font-thin tracking-wide text-slate-100 shrink-0">Columns ({{ columns }})</label>
      <input
      id="minmax-range"
      @input="$emit('update:columns', $event.target.value)"
      type="range"
      min="1"
      max="20"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    </div>

    <div class="flex flex-col w-1/4 gap-2">
      <label for="minmax-range" class="font-thin tracking-wide text-slate-100 shrink-0">Rows ({{ rows }})</label>
      <input
      id="minmax-range"
      @input="$emit('update:rows', $event.target.value)"
      type="range"
      min="1"
      max="20"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      >
    </div>
  </div>
</template>
