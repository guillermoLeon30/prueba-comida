<template>
  <div class="row">
    <div class="col">
      <div id="carouselControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <imagen 
            v-for="(comida, index) in comidas"
            :url="comida.imagen_url"
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
  import pusher from '../../../library/echo'

  export default{
    components: { imagen },
    data: function () {
      return {
        comidas: null
      }
    },
    methods: {
      listen: function () {
        var channel = pusher.subscribe('menuChannel')
        channel.bind('App\\Events\\ActivarMenuEvent', data => {
          this.comidas = data
        })
      }
    },
    mounted () {
      this.listen()
    }
  }
</script>

<style type="text/css"></style>