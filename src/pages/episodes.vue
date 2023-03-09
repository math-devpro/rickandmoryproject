<template>
<div class="row">
  <div class="col">
    <div class="wrapper">
      <q-container>
        <!-- <q-pagination v-model="page" :min="1" :max="pages" :disable="loading" boundary-numbers /> -->
        <div class="q-pa-sm">
          <div class="row justify-center">
            <img src="../assets/rick-and-morty-episodes.svg" style="width: 300px;" alt="rickandmorty" class="image-home">
          </div>
          <div class="row justify-center">
            <h6 class="text-deep-purple-7">EPISODIOS</h6>
          </div>
          <div class="row justify-center">
            <q-pagination dark color="deep-purple-7" v-model="page" :min="1" :max="pages" :disable="loading" boundary-numbers />
          </div>
          <div class="row justify-center ma-4">
            <q-input style="width:50%" standout="bg-purple-9 text-white" placeholder="Pesquisar por nome" v-model="search" />
          </div>
          <div class="row justify-center mt-4">
            <div v-for="(item, index) in episodes" :key="index">
              <router-link :to="`/episodio/${item.id}`">
                <cardDefault :id="item.id" :title="item.name" :subtitle="item.episode"></cardDefault>
              </router-link>
            </div>
          </div>
        </div>
      </q-container>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { apis } from '../stores/apis'

import cardDefault from '../components/card/default.vue'

interface Character {
  id: number
  name: string
  species: string
  image: string
}


export default defineComponent({
  name: 'EpisodesPage',
  mounted (this:any) {
    this.getDataList()
  },
  components: {
    cardDefault
  },
  setup() {
    const episodes = ref<Character[]>([])
    const search = ref('')
    const page = ref(1)
    const pages = ref(0)
    const loading = ref(false)
    const storeAPI = apis()


    watchEffect(() => {
      if (search.value !== '') {
        page.value = 1
        getDataList();
      }
    });

    watchEffect(() => {
      if (page.value) {
        getDataList();
      }
    });

    async function getDataList() {
      loading.value = true

      try {
        const i:any = await storeAPI.getEpisodes(page.value, search.value)
        episodes.value = i.results
        pages.value = i.info.pages
      } catch (error) {
        console.error(error)
      }

      loading.value = false
    }

    return {
      episodes,
      pages,
      page,
      search,
      loading,
      getDataList
    }
  }
})
</script>
