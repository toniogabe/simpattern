<script setup>
import Tile from './Tile.vue';

const props = defineProps([
  'weights', 'colors', 'roundeds', 'columns', 'rows'
])

const randomFrom = (list) => list[Math.floor(Math.random() * list.length)]
const getColor   = () => `bg-${randomFrom(props.colors)}-${randomFrom(props.weights)}`
const getRounded = () => `rounded-${randomFrom(props.roundeds)}`

</script>

<template>
  <section class="grid h-fit" :style="{ 'grid-template-columns': `repeat(${props.columns}, minmax(0, 1fr))` }">
    <Tile
      v-for="item in (props.rows * props.columns)" :key="item"
      :bg-color="getColor()"
      :color="getColor()"
      :rounded="getRounded()"
    ></Tile>
  </section>
</template>
