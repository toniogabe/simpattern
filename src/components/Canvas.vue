<script setup>
import Tile from './Tile.vue';

const props = defineProps([
  'weights', 'colors', 'roundeds'
])

const randomFrom = (list) => list[Math.floor(Math.random() * list.length)]
const getColor   = () => `bg-${randomFrom(props.colors)}-${randomFrom(props.weights)}`
const getRounded = () => `rounded-${randomFrom(props.roundeds)}`

</script>

<template>
  <section class="flex flex-wrap h-fit">
    <Tile
      v-for="item in 1000" :key="item"
      :bg-color="getColor()"
      :color="getColor()"
      :rounded="`${getRounded()}`"
    ></Tile>
  </section>
</template>