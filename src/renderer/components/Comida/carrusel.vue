<template>
  <div class="row">
    <div class="col">
      <div id="carouselControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <imagen 
            v-for="(comida, index) in comidas"
            :url="comida.url"
            :nombre="comida.nombre"
            :precio="comida.precio"
            :isActive="index == 0"
          >
          </imagen>
        </div>
        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import imagen from './imagen'

  export default{
    components: { imagen },
    data () {
      return {
        comidas: [
          {
            url: 'static/1.jpg',
            nombre: 'Almuerzo',
            precio: '3.25'
          },
          {
            url: 'static/2jpg.jpg',
            nombre: 'Merienda',
            precio: '2.50'
          },
          {
            url: 'static/3.jpg',
            nombre: 'Desayuno',
            precio: '2.00'
          }
        ]
      }
    },
    methods: {
      listen: function () {
        console.log('data')
      }
    },
    created () {
      this.listen()
    }
  }
</script>

<style type="text/css"></style>