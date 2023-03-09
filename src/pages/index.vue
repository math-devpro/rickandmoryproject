<template>
<div class="row">
  <div class="col">
    <div class="wrapper">
      <q-container>
        <div class="q-pa-md">
          <div class="row justify-center">
            <img src="../assets/home.svg" alt="rickandmorty" class="image-home">
          </div>
          <div class="row justify-center">
            <h6 class="text-deep-purple-7">PERSONAGENS</h6>
          </div>
          <div class="row justify-center">
            <q-pagination dark color="deep-purple-7" v-model="page" :min="1" :max="pages" :disable="loading" boundary-numbers />
          </div>
          <div class="row justify-center ma-4">
            <q-input style="min-width:220px" standout="bg-purple-9 text-white" placeholder="Pesquisar por nome" v-model="search" />
            <q-select standout="bg-purple-9 text-white" style="width:180px" v-model="speciesCharacters" :options="characterOptions.species" label="Especie" />
            <q-select standout="bg-purple-9 text-white" style="width:180px" v-model="genderCharacters" :options="characterOptions.gender" label="Genero" />
            <q-select standout="bg-purple-9 text-white" style="width:180px" v-model="statusCharacters" :options="characterOptions.status" label="Status" />
          </div>
          <div class="row justify-center mt-4">
            <div v-for="(item, index) in characters" :key="index">
              <router-link :to="`/personagem/${item.id}`">
                <cardDefault :id="item.id" :image="item.image" :title="item.name" :subtitle="item.species"> </cardDefault>
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
  name: 'IndexPage',
  mounted (this:any) {
    this.getDataList()
  },
  components: {
    cardDefault
  },
  setup() {
    const characters = ref<Character[]>([])
    const speciesCharacters = ref('All')
    const statusCharacters = ref('All')
    const genderCharacters = ref('All')
    const search = ref('')
    const page = ref(1)
    const pages = ref(0)
    const loading = ref(false)
    const storeAPI = apis()

    const characterOptions = {
      gender: ['All', 'Female', 'Male', 'Genderless', 'unknown'],
      status: ['All', 'Alive', 'Dead', 'unknown'],
      species: ['All', 'Humans', 'Aliens', 'Robots', 'Cronenbergs', 'Ghosts', 'Meeseeks'],
    }


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
        const i:any = await storeAPI.getCharacters(page.value, search.value)
        characters.value = i.results
        pages.value = i.info.pages
      } catch (error) {
        console.error(error)
      }

      loading.value = false
    }

    return {
      characters,
      speciesCharacters,
      statusCharacters,
      genderCharacters,
      pages,
      page,
      search,
      loading,
      getDataList,
      characterOptions
    }
  }
})
</script>
