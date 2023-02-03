<script setup>
import { ref } from 'vue';

const props = defineProps([
  'color',
  'bgColor',
  'rounded'
])

let degrees = [0, 90, 180, 270]

const rotationBase = ref(degrees[Math.floor(Math.random() * degrees.length)])
const rotationClass = ref(`rotate-${rotationBase.value}`)

function rotate () {
  rotationBase.value += 90

  if (rotationBase.value > 270)
    rotationBase.value = 0

  console.log(`rotate-${rotationBase.value}`);

  rotationClass.value = `rotate-${rotationBase.value}`
}

</script>

<template>
  <div
    class="h-20 w-20 hover:scale-150 hover:shadow-lg hover:z-50 transition-all ease-in-out aspect-square"
    :class="props.bgColor, rotationClass"
    @click="rotate()"
  >
    <div
      class="h-full w-full aspect-square"
      :class="props.color, props.rounded"
    ></div>
  </div>
</template>
