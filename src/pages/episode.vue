<template>
  <div class="row" v-if="episode">
    <div class="col">
      <div class="wrapper">
          <div class="profile-card js-profile-card">
            <div class="profile-card__cnt js-profile-cnt"  style="margin-top: 40px">
              <div class="profile-card__name">{{ episode.name }}</div>
              <div class="profile-card__txt"><strong>{{ episode.episode }}</strong></div>
              <div class="profile-card-inf__item">
                  <div class="profile-card-inf__title">{{ episode.characters.length }}</div>
                  <div class="profile-card-inf__txt">Personagens</div>
              </div>
              <div class="profile-card-loc mt-4">
                <span class="profile-card-loc__txt">
                  <span v-for="(character, index) in episode.characters" :key="index">
                    <router-link :to="`/personagem/${characterId(character)}`">
                      <q-avatar size="110px" class="character-avatar">
                        <img :src="`${avatarCharacterUrl(character)}`">
                      </q-avatar>
                    </router-link>
                  </span>
                </span>
              </div>
            </div>

            <div class="profile-card__cnt js-profile-cnt mt-4">
              <div class="profile-card__txt">Data de exibição</div>
              <div class="profile-card__txt"><strong>{{ episode.air_date }}</strong></div>
            </div>

            <div class="profile-card__cnt js-profile-cnt">
              <div class="profile-card__txt">Data de criação</div>
              <div class="profile-card__txt"><strong>{{ episode.created }}</strong></div>
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
    const id = this.episodeId
    await this.getDataEpisode(id)
  },
  computed: {
    episodeId () {
      const i = this.$route.params.id
      return i
    }
  },
  setup() {
    const episode = ref()
    const search = ref('')
    const loading = ref(false)
    const storeAPI = apis()


    function avatarCharacterUrl (i:string) {
      const urlImageCharacter = 'https://rickandmortyapi.com/api/character/avatar'
      const characterUrl = i.replace(/[^0-9]/g,'');
      const id = parseInt(characterUrl);
      return `${urlImageCharacter}/${id}.jpeg`
    }

    function characterId (i:string) {
      const id = i.replace(/[^0-9]/g,'');
      return id
    }

    async function getDataEpisode(id:number) {
      loading.value = true

      try {
        const i = await storeAPI.getEpisode('', id)
        episode.value = i
      } catch (error) {
        console.error(error)
      }

      loading.value = false
    }

    return {
      episode,
      search,
      loading,
      getDataEpisode,
      avatarCharacterUrl,
      characterId
    }
  },
})
</script>
