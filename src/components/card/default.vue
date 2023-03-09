<template>
<div class="card">
  <div class="card-image" v-if="image">
    <img :src="image" :alt="title">
  </div>
  <div class="card-details">
    <h2 class="card-title">{{ title }}</h2>
    <div class="card-meta">
      <span class="card-meta-specie">{{ subtitle }}</span>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ComponentCardDefault',
  props: {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },

  setup(props) {
    const imageComponent = ref(props.image)
    const titleComponent = ref(props.title)
    const subtitleComponent = ref(props.subtitle)
    const IdComponent = ref(props.id)

    return {
      imageComponent,
      titleComponent,
      subtitleComponent,
      IdComponent
    }

  }
})
</script>