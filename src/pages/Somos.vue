<template>
  <div>
    <div class="q-pa-md">
      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = false"
        height="500px"
      >
        <q-carousel-slide name="first" img-src="~assets/team1.jpg">
          <div class="absolute-full custom-caption">
            <div class="shadow-7 bg-transparent-color q-pa-md">
              <div class="text-h2 text-grey-8 q-mb-md">Nuestros valores:</div>
              <div class="text-subtitle info-text text-grey-9"> Ética Pública, transparencia, participación ciudadana acceso a la información</div>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="~assets/vision.jpg">
          <div class="absolute-left custom-caption">
            <div class="shadow-7 bg-transparent-color q-pa-md">
              <div class="text-h2 text-grey-8 q-mb-md">Visión</div>
              <div class="text-subtitle1 info-text text-grey-9">Una herramienta de uso público que colabore con la creación de entornos municipales más transparentes y que fortalezca el diseño, la implementación y la evaluación de las políticas públicas.</div>
            </div>
          </div>
        </q-carousel-slide>
         <q-carousel-slide name="third" img-src="~assets/finance.jpg">
          <div class="absolute-full custom-caption">
            <div class="shadow-7 bg-transparent-color q-pa-md">
              <div class="text-subtitle1 info-text text-grey-9">Fomentar la comunicación entre ciudadanos/as y gobernantes, para mejorar la administración de los recursos públicos. Además, permitirle no solo al ciudadano, sino también al sector académico y a todo aquel interesado, acceder y comprender con facilidad la información presupuestaria. </div>
            </div>
          </div>
        </q-carousel-slide>
         <q-carousel-slide name="four" img-src="~assets/books.jpg">
          <div class="absolute-full custom-caption">
            <div class="shadow-7 bg-transparent-color q-pa-md">
             <div class="text-h2 text-grey-8 q-mb-md">Fundamento: Ley 27275 Derecho de acceso a la información pública </div>
             <div class="text-subtitle1 info-text text-grey-9">Garantiza el efectivo ejercicio del derecho de acceso a la información pública, promueve la participación ciudadana y la transparencia de la gestión pública</div>
          </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-ml-auto q-mr-auto text-center w-75 border q-ma-md rounded-borders">
      <div class="q-pa-md title-text text-info">¿Qué es Bolsillo Público?</div>
      <div class="q-pa-md text-justify info-text q-mr-auto q-ml-auto info-text">Bolsillo Público te permite saber quién y cómo se gasta el dinero de 10 municipios de Zona Norte de Buenos Aires, podés comparar la información presupuestaria con la de otros municipios e ingresar a nuestros rankings. Somos una plataforma que busca conseguir un mayor control ciudadano de la gestión financiera, institucional y social del dinero público. </div>
    </div>
    <Footer />
  </div>
</template>
<style lang="scss">
//tipografia
.bg-transparent-color{
  background-color: rgba(223, 223, 223, 0.5);
}
.info-text{
  font-size: $InfoText;
  color: $grey-5;
}
.title-text{
  font-size: $TitleText;
}

.w-75{
  width: 80vw;
}
.border{
   border: solid;
   border-color: $primary;
}
.img-info{
   width: 100%;
   height: 50vh;
}
</style>
<script>
import Footer from '../components/footer.vue'
export default {
  data () {
    return {
      slide: 'first',
      autoplay: true,
      info: [
        {
          id: 1,
          titulo: '¿Que es el Bolsillo Público?',
          contenido : `Somos una plataforma digital cuyo fin es brindar información sobre presupuestos municipales de manera accesible y
           clara a todos los ciudadanos. Nace de la iniciativa de un grupo de estudiantes de la Universidad
           Austral y la Universidad de Buenas Aires junto con el finaciamiento de la 
           Fundacición Contemporánea y el international Republican Institute.`,
        },
        {
          id: 2,
          titulo: 'Visión ',
          contenido : ` Una herramienta de uso público que colabore con la creación de entornos
           municipales más transparentes y que fortalezca el diseño, la implementación y la evaluación 
           de las políticas públicas.
`,
           img: 'https://cdn.quasar.dev/img/parallax1.jpg'
        },
        {
          id: 3,
          titulo: '',
          contenido : `Fomentar la comunicación entre ciudadanos/as y gobernantes, 
          para mejorar la administración de los recursos públicos. Además, permitirle
           no solo al ciudadano, sino también al sector académico y a todo aquel interesado,
            acceder y comprender con facilidad la información presupuestaria.`,
           img: 'https://cdn.quasar.dev/img/parallax1.jpg'
        },
        {
          id: 4,
          titulo: 'Fundamento: Ley 27275 Derecho de acceso a la información pública',
          contenido : `Garantiza el efectivo ejercicio del derecho de acceso a la información pública,
           promueve la participación ciudadana y la transparencia de la gestión pública.`,
           img: 'https://cdn.quasar.dev/img/parallax1.jpg'
        }
      ]
    }
  },
  components: {
    Footer 
  }
}
</script>