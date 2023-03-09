<template>
  <q-header elevated>
  </q-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ComponentHeaderDefault',
  setup() {

    function toggleLeftDrawer () {
      alert('Menu Esquerda')
    }

    return {
      toggleLeftDrawer
    }
  },
})
</script>
