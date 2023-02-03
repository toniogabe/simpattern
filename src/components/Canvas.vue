<script setup>
import Tile from './Tile.vue';

let colors = [
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
]
let weights = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900']
let rounds = ['tl', 'tr', 'bl', 'br']

const randomFrom = (list) => list[Math.floor(Math.random() * list.length)]
const getColor = () => `bg-${randomFrom(colors)}-${randomFrom(weights)}`
const getRounded = () => `rounded-${randomFrom(rounds)}-full`

</script>

<template>
  <section class="flex flex-wrap h-fit">
    <Tile
      v-for="item in 500" :key="item"
      :bg-color="getColor()"
      :color="getColor()"
      :rounded="getRounded()"
    ></Tile>
  </section>
</template>