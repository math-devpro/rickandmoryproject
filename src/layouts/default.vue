<template>
  <q-pull-to-refresh
  @refresh="refresh"
  color="deep-purple-7"
  icon="lightbulb"
  >
    <q-layout view="lHh Lpr lFf" class="bg-white">
      <q-page-container>
        <HeaderDefault />
        <NavigationMenuLeft/>
        <router-view />
      </q-page-container>
    </q-layout>
  </q-pull-to-refresh>
</template>

<style>
.container {
  height: 160px!important;
}
</style>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import HeaderDefault from '../components/header/default.vue';
import NavigationMenuLeft from '../components/navigation/menuLeft.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    HeaderDefault,
    NavigationMenuLeft
  },
  setup () {
    const items = ref([ {}, {}, {}, {}, {}, {}, {}, {}, {} ])

    return {
      items,

      refresh (done:any) {
        setTimeout(() => {
          items.value.push({}, {}, {}, {}, {}, {}, {})
          done()
        }, 1000)
      }
    }
  }
});
</script>
