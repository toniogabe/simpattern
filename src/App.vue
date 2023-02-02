<script setup>

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

  function randomFromArray(list) {
    let idx = Math.floor(Math.random() * list.length)

    return list[idx]
  }

  function getColor () {
    return `bg-${randomFromArray(colors)}-${randomFromArray(weights)}`
  }

  function getRounded () {
    return `rounded-${randomFromArray(rounds)}-full`
  }


</script>

<template>
  <main class="">
    <div class="grid w-full h-screen" style="grid-template-columns: repeat(50, minmax(0, 1fr));">
      <div
        class="h-full w-full"
        :class="getColor(), getRounded()"
        v-for="item in 1000"
      ></div>
    </div>
  </main>
</template>
