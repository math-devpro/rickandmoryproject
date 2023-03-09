<template>
  <div class="row" v-if="location">
    <div class="col">
      <div class="wrapper">
          <div class="profile-card js-profile-card">
            <div class="profile-card__cnt js-profile-cnt"  style="margin-top: 40px">
              <div class="profile-card__name">{{ location.name }}</div>
              <div class="profile-card__txt"><strong>{{ location.type }}</strong></div>
              <div class="profile-card-inf__item">
                  <div class="profile-card-inf__title">{{ location.length }}</div>
                  <div class="profile-card-inf__txt">Residente de <strong>{{ location.name }}</strong></div>
              </div>
              <div class="profile-card-loc mt-4">
                <span class="profile-card-loc__txt">
                  <span v-for="(character, index) in location.residents" :key="index">
                    <router-link :to="`/personagem/${locationId(character)}`">
                      <q-avatar size="110px" class="character-avatar">
                        <img :src="`${avatarLocationUrl(character)}`">
                      </q-avatar>
                    </router-link>
                  </span>
                </span>
              </div>
            </div>

            <div class="profile-card__cnt js-profile-cnt mt-4">
              <div class="profile-card__txt">Dimensão</div>
              <div class="profile-card__txt"><strong>{{ location.dimension }}</strong></div>
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
    const id = this.id
    await this.getDataLocation(id)
  },
  computed: {
    id () {
      const i = this.$route.params.id
      return i
    }
  },
  setup() {
    const location = ref()
    const search = ref('')
    const loading = ref(false)
    const storeAPI = apis()

    function avatarLocationUrl (i:string) {
      const urlImageCharacter = 'https://rickandmortyapi.com/api/character/avatar'
      const characterUrl = i.replace(/[^0-9]/g,'');
      const id = parseInt(characterUrl);
      return `${urlImageCharacter}/${id}.jpeg`
    }

    function locationId (i:string) {
      const id = i.replace(/[^0-9]/g,'');
      return id
    }

    async function getDataLocation(id:number) {
      loading.value = true

      try {
        const i = await storeAPI.getLocation('', id)
        location.value = i
      } catch (error) {
        console.error(error)
      }

      loading.value = false
    }

    return {
      location,
      search,
      loading,
      getDataLocation,
      avatarLocationUrl,
      locationId
    }
  },
})
</script>
