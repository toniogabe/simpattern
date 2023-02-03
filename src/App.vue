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

  function rotate (item) {
    let object = document.getElementById(item)
    object.style.transform = 'rotate(90deg)'
  }


</script>

<template>
  <main>
    <div class="grid w-full h-screen" style="grid-template-columns: repeat(25, minmax(0, 1fr));">
      <div
        class="h-20 w-20 hover:scale-150 hover:shadow-lg transition-all ease-in-out"
        :class="getColor()"
        v-for="item in 350" :ref="item"
        :id="item"
        @click="rotate(item)"
      >
        <div
          class="h-full w-full"
          :class="getColor(), getRounded()"
        ></div>
      </div>
    </div>
  </main>
</template>
