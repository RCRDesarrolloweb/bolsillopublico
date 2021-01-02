<template>
  <div>
  <div class="row justify-center"  >
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      padding
      arrows
      height="300px"
      class="bg-grey-1 contenedor-resumen rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <div v-for="item in resumen1" :key="item.name">
            <div class="col rounded-borders resumen q-pa-md q-ma-md">
              <div class=" float-right">1%</div>
              <div class="texto-titulo text-grey-9">{{item.name}}</div>
              <div class="q-pt-lg q-pb-lg texto-precio text-grey-6">{{item.precio}} $</div>
              <div class="text-primary float-right q-mb-lg text-h6">{{item.habitantes}}</div>
            </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap">
          <div v-for="item in resumen2" :key="item.name">
            <div class="col rounded-borders resumen q-pa-md q-ma-md">
              <div class=" float-right">1%</div>
              <div class="texto-titulo text-grey-9">{{item.name}}</div>
              <div class="q-pt-lg q-pb-lg texto-precio text-grey-6">{{item.precio}} $</div>
              <div class="text-primary float-right q-mb-lg text-h6">{{item.habitantes}}</div>
            </div>
          </div>
        </div>  
      </q-carousel-slide>
    </q-carousel>
  </div>
  <q-select outlined class="select" v-model="model" :options="options" label="Municipios" />
  <div class="mapa rounded-borders justify-center">
  	<div class="q-ma-md text-grey text-h5">Proximamente Mapa de los Municipios</div>
    </div>
  </div>
  </div>
</template>

<style type="scss">
.select{
  width: 20vw;
  margin-left: 8rem;
  margin-bottom: 2rem;
}
.resumen{
  border: solid;
  border-size: 0.2px;
  border-color: #2daae1;
}
.contenedor-resumen{
  width: 99vw;
}
.mapa{
  width: 90%;
  min-height: 350px;
  border: solid 0.12em;
  border-color: #2daae1;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1rem;
}

@media screen and (min-width: 500px) and (max-width: 1000px){
  .resumen{
    min-width: 13rem;
    min-height: 10rem;
  }
  .texto-titulo{
    font-size: 2rem;
  }
}

@media screen and (min-width: 1000px) and (max-width: 1400px){
  .resumen{
    width: 12.8rem;
    height: 10rem;
  }
  .texto-titulo{
    font-size: 0.6rem;
  }
  .texto-precio{
    font-size: 1.3rem;
  }
  .select{
   width: 20vw;
   margin-left: 4rem;
   margin-bottom: 2rem;
  }
}
@media screen and (min-width: 1400px) and (max-width: 1900px){
  .resumen{
    width: 12.8rem;
    height: 10rem;
  }
  .texto-titulo{
    font-size: 0.6rem;
  }
  .texto-precio{
    font-size: 1.3rem;
  }
  .mapa{
    height: 20rem;
    border: solid 0.2rem;
    border-color: #2daae1;
    margin-left: auto;
    margin-right: auto;
  }
  .select{
   width: 20vw;
   margin-left: 4rem;
   margin-bottom: 2rem;
  }
}
@media screen and (min-width: 1900px) and (max-width: 2300px){
  .resumen{
    width: 20rem;
    height: 11rem;
  }
  .texto-titulo{
    font-size: 1rem;
  }
  .texto-precio{
    font-size: 1.3rem;
  }
  .mapa{
    height: 30rem;
    border: solid 0.2rem;
    border-color: #2daae1;
    margin-left: auto;
    margin-right: auto;
   }
  .select{
   width: 20vw;
   margin-left: 6rem;
   margin-bottom: 2rem;
  }
}
@media screen and (min-width: 2300px){
  .resumen{
    width: 40rem;
    height: 13rem;
  }
  .texto-titulo{
    font-size: 1.5rem;
  }
  .texto-precio{
    font-size: 2.5rem;
  }
  .mapa{
   height: 80rem;
   border: solid 0.2rem;
   border-color: #2daae1;
   margin-left: auto;
   margin-right: auto;
  }
  .select{
   width: 20vw;
   margin-left: 10rem;
   margin-bottom: 2rem;
  }

}
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      model: 'Tigre',
      options: [
        'Tigre', 'San Martin', 'Vicente Lopez'
      ],
      resumen1: [
        {
          name: 'Representacion Legislativa(H.C.D.)',
          precio: 1000,
          habitantes: '100/400'
        },
        {
          name: 'Salud',
          precio: 1000,
          habitantes: '100/400'
        },
        {
          name: 'Gestion y administracion de los recursos',
          precio: 1000,
          habitantes: '100/400'
        },
        {
          name: 'Gobierno',
          precio: 1000,
          habitantes: '100/400'
        }     
      ],
      resumen2: [
        {
          name: 'Obra publica e infraestructura',
          precio: 1000,
          habitantes: '100/400'
        },
        {
          name: 'Politicas sociales',
          precio: 1000,
          habitantes: '100/400'
        },
        {
          name: 'Educacion, cultura, turismo y deporte',
          precio: 1000,
          habitantes: '100/400'
        },
        {
          name: 'Produccion y desarrollo economico',
          precio: 1000,
          habitantes: '100/400'
        },
        {
          name: 'Otros gastos',
          precio: 1000,
          habitantes: '100/400'
        }       
      ]
    }
  }
}
</script>
