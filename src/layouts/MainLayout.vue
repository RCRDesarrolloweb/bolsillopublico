<template>
  <q-layout view="lHh Lpr lFf"><!-- -->
    <q-header >
      <q-toolbar class="text-grey bg-grey-1">
        <div class="toolbar">
          <q-img class="logo q-ma-lg" src="~assets/logo-bolsillo-publico.png" />
          <q-btn class="toolbar-btn" label="Quienes Somos" to="Somos" flat>
            <q-tooltip transition-show="flip-right" content-class="bg-primary texto-info" transition-hide="flip-left">
              Descubre quienes estan detras de este proyecto
            </q-tooltip>
          </q-btn>
          <q-btn class="toolbar-btn" label="municipios" to="Municipios" flat>
            <q-tooltip transition-show="flip-right" content-class="bg-primary texto-info" transition-hide="flip-left">
              Informacion detallada de la administracion de recursos
            </q-tooltip>
          </q-btn>
          <q-btn class="toolbar-btn" label="compara" to="Comparar" flat>
            <q-tooltip transition-show="flip-right" content-class="bg-primary texto-info" transition-hide="flip-left">
              Comparacion entre municipios
            </q-tooltip>
          </q-btn>
          <q-btn class="toolbar-btn" label="ranking" to="Rankings" flat>
            <q-tooltip transition-show="flip-right" content-class="bg-primary texto-info" transition-hide="flip-left">
              Lista de los municipios mas destacados
            </q-tooltip>
          </q-btn>
          <q-btn class="toolbar-btn" label="servicios" to="Servicios" flat>
            <q-tooltip  transition-show="flip-right" content-class="bg-primary texto-info" transition-hide="flip-left">
              Servicios dirigidos a municipios
            </q-tooltip>
          </q-btn>
          <q-btn class="toolbar-btn" align="right" label="mapas" to="Mapas" flat icon="stars">
            <q-tooltip transition-show="flip-right" content-class="toolbar-btn bg-primary" transition-hide="flip-left">
              Seleccion y vistas de los municipios con un mapa ilustrado
            </q-tooltip>
          </q-btn>

          <q-btn class="toolbar-btn text-white q-ml-lg q-mr-lg" rounded color="primary" label="consultas" to="" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style type="scss">
.logo{
  max-width: 150px;
  max-height: 100px;
}
.toolbar{
  margin-left: auto;
  margin-right: auto;
  min-width: 60vw;
}
@media screen and (min-width: 500px) and (max-width: 1000px){
  .toolbar-btn{
    font-size: 1em;
  }
}
@media screen and (min-width: 1000px) and (max-width: 1200px){
  .toolbar-btn{
    font-size: 1rem;
  }
  .toolbar{
    min-width: 70vw;
  }
  .texto-info{
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1400px){
  .toolbar-btn{
    font-size: 0.8rem;
  }
  .toolbar{
    min-width: 70vw;
  }
  .texto-info{
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 1400px) and (max-width: 1900px){
  .toolbar-btn{
    font-size: 0.8rem;
  }
  .toolbar{
    min-width: 60vw;
  }
  .texto-info{
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 1900px) and (max-width: 2300px){
  .toolbar-btn{
    font-size: 1.3rem;
  }
  .toolbar{
    min-width: 60vw;
  }
  .logo{
    max-width: 12rem;
    max-height: 15rem;
  }
  .texto-info{
    font-size: 1rem;
  }
}
@media screen and (min-width: 2300px){
  .toolbar-btn{
    font-size: 2.5rem;
    margin: 0.5rem;
  }
  .toolbar{
    min-width: 50vw;
  }
  .logo{
    max-width: 25rem;
    max-height: 35rem;
  }
  .texto-info{
    font-size: 1.4rem;
  }
}
</style>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
    }
  }
}
</script>
