<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
      </div>
    </div>

    <carrusel></carrusel>
  </div>
</template>

<script>
  import carrusel from './Comida/carrusel'

  export default {
    name: 'landing-page',
    components: { carrusel }
  }
</script>

<style>
  
</style>
