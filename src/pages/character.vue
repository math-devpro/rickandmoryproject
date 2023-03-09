<template>
  <div class="row" v-if="character">
    <div class="col">
      <div class="wrapper">
        <div class="profile-card js-profile-card">
          <div class="profile-card__img">
            <img :src="character.image" alt="profile card">
          </div>

            <div class="profile-card__cnt js-profile-cnt">
              <div class="profile-card__name">{{ character.name }}</div>
              <div class="profile-card__txt">{{ character.gender }} - <strong>{{ character.species }}</strong> | {{ character.status }}</div>
              <div class="profile-card-loc">
                <span class="profile-card-loc__icon">
                  <svg class="icon"><use xlink:href="#icon-location"></use></svg>
                </span>

                <span class="profile-card-loc__txt">
                  Origem:
                  <router-link v-if="character.origin.name !== 'unknown'" :to="`/local/${locationId(character.origin.url)}`">{{ character.origin.name }}</router-link>
                  <span v-else>Desconhecida</span>
                </span>
              </div>

              <div class="profile-card-inf">
                <div class="profile-card-inf__item">
                  <div class="profile-card-inf__title">{{ episodes.length }}</div>
                  <div class="profile-card-inf__txt">Episódios</div>
                </div>
              </div>
            </div>

            <div class="profile-card__cnt js-profile-cnt" v-for="(episode, index) in episodes" :key="index">
              <router-link :to="`/episodio/${episode.id}`">
                <div class="profile-card__txt">
                  {{ episode.name }}
                </div>
              </router-link>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { apis } from '../stores/apis'


export default defineComponent({
  name: 'IndexPage',
  async mounted (this:any) {
    const id = this.characterId
    await this.getDataCharacter(id)

    const character = this.character
    const episodes = character.episode
    const episodesLength = episodes.length

    for(let i = 0; i < episodesLength; i++) {
      const data = await apis().getEpisode(episodes[i])
      if (episodes[i] !== undefined) {
        this.episodes.push(data)

        if (i === 0) {
          this.loading = true
        } else if (i+1 === episodesLength) {
          this.loading = false
        }
      }
    }
  },
  computed: {
    characterId () {
      const i = this.$route.params.id
      return i
    }
  },
  setup() {
    const character = ref()
    const episodes = ref([])
    const search = ref('')
    const loading = ref(false)
    const storeAPI = apis()

    function locationId (i:string) {
      const id = i.replace(/[^0-9]/g,'');
      return id
    }

    async function getDataCharacter(id:number) {
      loading.value = true

      try {
        const i = await storeAPI.getCharacter(id)
        character.value = i
      } catch (error) {
        console.error(error)
      }

      loading.value = false
    }

    return {
      character,
      episodes,
      search,
      loading,
      getDataCharacter,
      locationId
    }
  },
})
</script>
