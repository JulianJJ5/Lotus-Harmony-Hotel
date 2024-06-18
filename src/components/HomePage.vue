<template>
  
    <div class="q-pa-md text-center">

      <h1>Bienvenidos Lotus Harmony</h1>
       <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide :name="1" img-src="/imagenes/carrusel1.jpg" />
      <q-carousel-slide :name="2" img-src="/imagenes/carrusel2.jpg" />
      <q-carousel-slide :name="3" img-src="/imagenes/carrusel3.jpg" />
    </q-carousel>
  </div>
  <p>
        Disfruta de una experiencia única y acogedora en nuestro hotel, donde encontrarás servicios de alta calidad y un entorno encantador.
      </p>
      <q-btn color="primary" label="Explorar más" @click="$router.push('/servicios')" />
    </div>
  

</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1)
    }
  }
}
</script>


<style>
body{
  background-color: azure;
  color: #000;
  font-family: custom-letra;
}

@font-face {
    font-family: custom-letra;
    src: url(Gafigste.ttf);
}

.q-pa-md {
  width: 100%;
}
</style>
