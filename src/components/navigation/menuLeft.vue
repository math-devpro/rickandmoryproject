<template>
  <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Rick and Morty library</q-item-label>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="group" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Personagens</q-item-label>
            <q-item-label caption>Personagens de Rick and Morty</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/episodios">
          <q-item-section avatar>
            <q-icon name="movie" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Episódios</q-item-label>
            <q-item-label caption>Episódios de Rick and Morty</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/localizacoes">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Localizações</q-item-label>
            <q-item-label caption>Locais de Rick and Morty</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/sobre">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sobre </q-item-label>
            <q-item-label caption>Documentação</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ComponentNavigationMenuLeft',
  setup() {
    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer
    }
  },
})
</script>
