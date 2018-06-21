<template>
  <div class="carousel-item" :class="{ active: isActive }">
    <img class="d-block w-100" :src="{{ url }}" alt="imagen">
    <div class="carousel-caption d-none d-md-block">
      <h5>{{ nombre }}</h5>
      <p>${{ precio }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: [
      'url',
      'nombre',
      'precio',
      'isActive'
    ]
  }
</script>

<style type="text/css"></style>