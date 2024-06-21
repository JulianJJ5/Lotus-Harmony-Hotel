<template>

  <div class="q-pa-md text-center">

    <h1 class="underline">Lotus Harmony Hotel</h1>
    <div class="q-pa-md">
      <q-carousel animated v-model="slide" arrows infinite :autoplay="autoplay"
      >
        <q-carousel-slide :name="1" img-src="./../imagenes/carrusel1.jpg" />
        <q-carousel-slide :name="2" img-src="./../imagenes/carrusel2.jpg" />
        <q-carousel-slide :name="3" img-src="./../imagenes/carrusel3.jpg" />
      </q-carousel>
    </div>
    <h6>
      Disfruta de una experiencia única y acogedora en nuestro hotel, donde encontrarás servicios de alta calidad y un
      entorno encantador.
    </h6>

    <div class="q-pa-md items-start q-gutter-md">
    <div class="grid-container">
      <q-card v-for="(servicio, index) in servicios" :key="index" class="my-card">
        <q-img :src="servicio.imagen">
        </q-img>

        <q-card-section>
          <p><b>{{ servicio.nombre }}</b></p>
        </q-card-section>
      </q-card>
    </div>
  </div>

    <q-btn color="primary" label="Explorar más" @click="$router.push('/deportes-extremos')" />

  </div>
</template>

<script setup>
import { ref } from 'vue'

const servicios = ref([
  {
    nombre: 'RESTAURANTE',
    descripcion: 'Nuestro restaurante te ofrece una experiencia culinaria excepcional, con platos elaborados con ingredientes frescos y locales. Disfruta de una amplia variedad de menús para satisfacer todos los gustos y paladares.',
    imagen: './imagenes/restaurante.jpg'
  },
  {
    nombre: 'SPA',
    descripcion: 'Relájate y rejuvenece en nuestro spa de lujo, donde podrás disfrutar de una amplia gama de tratamientos faciales, corporales y masajes terapéuticos. Déjate mimar por nuestro personal experto en un entorno tranquilo y sereno.',
    imagen: './imagenes/spa.jpg'
  },
  {
    nombre: 'PISCINA',
    descripcion: 'Sumérgete en la frescura de nuestra piscina al aire libre, rodeada de exuberantes jardines y vistas panorámicas. Disfruta de un día soleado con bebidas refrescantes y servicio de snacks mientras te relajas junto a la piscina.',
    imagen: './imagenes/piscina.jpg'
  }
]);

const slide = ref(0);
const autoplay = ref(true);

if (autoplay.value) {
  let slideInterval; //guardar el intervalo de slide
  // inicializar el intervalo usando`setTimeout`
  slideInterval = setTimeout(() => {
    slide.value = (slide.value + 1) % servicios.value.length;
    // Iniciar el siguiente intervalo despues del tiempo especificado
    slideInterval = setTimeout(() => {
      // Repetir la logica de actualizacion del slide
      slide.value = (slide.value + 1) % servicios.value.length;
    }, 3000);
  }, 3000);
}




</script>


<style>
* {
  font-family: Gafigste;
}

body {
  background-color: azure;
  color: #000;
}

.q-tabs__content {
  justify-content: center;
}

.q-page-container {
  padding-top: 0% !important;
}

.q-pa-md {
  width: 100%;
  position: relative;
  top: -30px;
}

.q-pa-md h1 {
  position: relative;
  top: -20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.q-carousel {
  width: 100%;

}

.underline {
  position: relative;
  display: inline-block;
}

.underline::after {
  content: '';
  position: absolute;
  border-radius: 15px;
  left: 50%;
  bottom: -10px;
  width: 80%;
  height: 5px;
  background-color: rgb(216, 184, 2);
  transform: translateX(-50%);
}

@font-face {
  font-family: Gafigste;
  src: url(Gafigste.ttf);
}
</style>
