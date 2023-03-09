<template>
<div class="row">
<div class="col">
  <div class="wrapper">
    <div class="profile-card js-profile-card">
      <div class="profile-card__cnt js-profile-cnt">
        <div class="profile-card__img">
          <img src="../assets/author.jpeg" alt="profile card">
        </div>
        <div class="profile-card__name mt-4">Autor</div>
        <div class="profile-card__txt">Matheus Esturiao <strong>FrontEnd</strong></div>
        <div class="profile-card-loc">
          <span class="profile-card-loc__txt">
            (22) 9 8160-3859 -
            <a href="mailto:matheussturiao@gmail.com">Matheussturiao@gmail.com</a>
            <br>
            <br>
          </span>
        </div>
        <div class="profile-card__name mt-4">Tecnologias</div>
        <div class="profile-card-loc">
          <span class="profile-card-loc__txt">
            SPA, Vue3, Quasar, SASS, TYPESCRIPT, Firebase.
          </span>
        </div>
        <div class="profile-card__name mt-4">Fontes</div>
        <div class="profile-card__txt">
          <a target="_blank" href="https://codepen.io/math-devpro/pen/PodOoRq">Tema</a> - <a target="_blank" href="https://www.figma.com/community/file/979477099633946456">Projeto</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'


export default defineComponent({
  name: 'AboutPage'
})
</script>
