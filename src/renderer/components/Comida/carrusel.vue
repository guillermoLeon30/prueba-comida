<template>
  <div class="row">
    <div class="col">
      <div id="carouselControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="static/1.jpg" alt="First slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>Almuerzo</h5>
              <p>$3.25</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="static/2jpg.jpg" alt="Second slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>Merienda</h5>
              <p>$2.50</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="static/3.jpg" alt="Third slide">
            <div class="carousel-caption d-none d-md-block">
              <h5>Desayuno</h5>
              <p>$2.00</p>
            </div>
          </div>
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

    <div class="col">
      <div id="carouselControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <imagen></imagen>
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
        comida: [
        ]
      }
    }
  }
</script>

<style type="text/css"></style>