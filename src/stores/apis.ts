import { defineStore } from 'pinia';
import axios from 'axios'

const urlCharacter = 'https://rickandmortyapi.com/api/character'
const urlEpisode = 'https://rickandmortyapi.com/api/episode'
const urlLocation = 'https://rickandmortyapi.com/api/location'

export const apis = defineStore('apis', {
  state: () => ({}),
  getters: {},
  actions: {
    async getCharacters(page=0, name='') {
      let data = false
      await axios({
        method: 'get',
        url: `${urlCharacter}/?name=${name}&page=${page}&species=`,
      })
        .then((response) => data = response.data);

      return data
    },

    async getCharacter (id:number) {
      let data = false
      await axios({
        method: 'get',
        url: `${urlCharacter}/${id}`,
      })
        .then((response) => data = response.data);

      return data
    },

    async getEpisodes(page=0, name='') {
      let data = false
      await axios({
        method: 'get',
        url: `${urlEpisode}/?name=${name}&page=${page}`,
      })
        .then((response) => data = response.data);

      return data
    },

    async getEpisode(url?:string, id?:number) {
      let data = false
      await axios({
        method: 'get',
        url: url ? url : `${urlEpisode}/${id}`,
      })
        .then((response) => data = response.data);

      return data
    },

    async getLocations(page=0, name='') {
      let data = false
      await axios({
        method: 'get',
        url: `${urlLocation}/?name=${name}&page=${page}`,
      })
        .then((response) => data = response.data);

      return data
    },

    async getLocation(url?:string, id?:number) {
      let data = false
      await axios({
        method: 'get',
        url: url ? url : `${urlLocation}/${id}`,
      })
        .then((response) => data = response.data);

      return data
    }
  },
});
