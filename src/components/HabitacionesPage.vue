<template>
  <div>
 
    <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
    >
      <q-carousel-slide :name="1" img-src="/imagenes/carruselHabitacion1.jpg" />
      <q-carousel-slide :name="2" img-src="/imagenes/carruselHabitacion2.jpg" />
      <q-carousel-slide :name="3" img-src="/imagenes/carruselHabitacion3.jpg" />

      <template v-slot:control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push round dense color="orange" text-color="black" icon="arrow_left"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push round dense color="orange" text-color="black" icon="arrow_right"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>

<h1 class="underline">HABITACIONES & SUITES</h1>

  <div class="q-pa-md items-start q-gutter-md">
    <div class="grid-container">
      <q-card v-for="(habitacion, index) in habitaciones" :key="index" class="my-card">
        <q-img :src="habitacion.imagen">
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ habitacion.nombre }}
          </div>
        </q-img>

        <q-card-section>
          <p>{{ habitacion.descripcion }}</p>
          <p>Precio: {{ habitacion.precio }}</p>
        </q-card-section>

        <q-card-actions>
          <q-btn color="primary" label="Reservar Ahora" @click="reservar" />
        </q-card-actions>
      </q-card>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'

const habitaciones = ref([
  {
    nombre: 'PREMIER ROOM',
    descripcion: 'Cómoda y acogedora, con todas las comodidades básicas.',
    precio: '$100/noche',
    imagen: './imagenes/carrusel1.jpg'
  },
  {
    nombre: 'PREMIER DELUXE ROOM',
    descripcion: 'Amplia y lujosa, ideal para una estancia de lujo.',
    precio: '$200/noche',
    imagen: './imagenes/premier-deluxe-room-thumb1.jpg'
  },
  {
    nombre: 'PREMIER TWIN ROOM',
    descripcion: 'La mejor suite con vistas espectaculares.',
    precio: '$300/noche',
    imagen: './imagenes/premier-twin-room-thumb2.jpg'
  },
  {
    nombre: 'PREMIER CLUB ROOM',
    descripcion: 'Espacio elegante con vistas panorámicas.',
    precio: '$250/noche',
    imagen: './imagenes/carrusel3.jpg'
  },
  {
    nombre: 'PREMIER CLUB POOL VIEW',
    descripcion: 'Lujo exclusivo con servicios premium.',
    precio: '$400/noche',
    imagen: './imagenes/carrusel2.jpg'
  },
  {
    nombre: 'FAMILY PREMIER ROOM',
    descripcion: 'La suite más lujosa con todas las comodidades.',
    precio: '$500/noche',
    imagen: './imagenes/carrusel1.jpg'
  },
  {
    nombre: 'ONE BEDROOM SUITE',
    descripcion: 'Soluciones de alojamiento accesibles y confortables.',
    precio: '$80/noche',
    imagen: './imagenes/one-bedroom-suite-thumb4.jpg'
  },
  {
    nombre: 'TWO-BEDROOM SUITE',
    descripcion: 'La suite más lujosa con todas las comodidades.',
    precio: '$500/noche',
    imagen: './imagenes/two-bedroom-suite-thumb.jpg'
  },
  {
    nombre: 'FAMILY SUITE',
    descripcion: 'La suite más lujosa con todas las comodidades.',
    precio: '$500/noche',
    imagen: './imagenes/family-suite-thum-1.jpg'
  }
])


const slide = ref(0);
const autoplay = ref(true);

if (autoplay.value) {
  let slideInterval; //guardar el intervalo de slide
  // inicializar el intervalo usando`setTimeout`
  slideInterval = setTimeout(() => {
    slide.value = (slide.value + 1) % habitaciones.value.length;
    // Iniciar el siguiente intervalo despues del tiempo especificado
    slideInterval = setTimeout(() => {
      // Repetir la logica de actualizacion del slide
      slide.value = (slide.value + 1) % habitaciones.value.length;
    }, 3000);
  }, 3000);
}

const reservar = () => {
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas iguales */
  gap: 20px; 
}

    .underline {
      position: relative;
      display: inline-block;
    }

    .underline::after {
      content: '';
      position: absolute;
      border-radius: 15px;
      left: 50%; /* Centra el subrayado horizontalmente */
      bottom: -10px; /* Ajusta la posición vertical del subrayado */
      width: 80%; /* Ancho del subrayado */
      height: 5px; /* Grosor del subrayado */
      background-color: rgb(216, 184, 2); /* Color del subrayado */
      transform: translateX(-50%); /* Mueve el subrayado al centro del elemento */
    }

  .grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

</style>
