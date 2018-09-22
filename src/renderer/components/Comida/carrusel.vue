<template>
  <div>
    <div class="accordion" id="accordionExample" v-for="(menu,index) in menus">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {{ menu.nombre }}
              <img :src="menu.imagen" alt="" height="50px" width="100px">
            </button>
          </h5>
        </div>

        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
          <div class="card-body">
            <ul v-for="(item,index) in menu.items">
              <img :src="item.imagen" alt="" height="50px" width="100px">
              {{ item.nombre }}
               ${{ item.precio }}
            </ul>  
          </div>
        </div>
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
        menus: null
      }
    },
    methods: {
      listen: function () {
        var channel = pusher.subscribe('local')
        channel.bind('App\\Events\\ditrubComida', data => {
          console.log(data)
          this.menus = data.menus
        })
      }
    },
    mounted () {
      this.listen()
    }
  }
</script>

<style type="text/css"></style>