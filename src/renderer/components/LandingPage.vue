<template>
  <div>
    <div class="row">
      <div class="col">
        <div class="alert alert-primary" role="alert">
          This is a primary alert—check it out!
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <carrusel></carrusel>        
      </div>
    </div>

  </div>
</template>

<script>
  import carrusel from './Comida/carrusel'

  export default {
    components: { carrusel }
  }
</script>

<style>
  
</style>
