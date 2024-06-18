<template>
  <q-page>
    <div class="q-pa-md">
      <h2>Nuestras Habitaciones</h2>
      <q-carousel v-model="slide" animated infinite class="q-mb-md">
        <q-carousel-slide v-for="(habitacion, index) in habitaciones" :key="index">
          <img src="/public/imagenes/family-premier-room-thumb.jpg" :alt="habitacion.nombre" class="q-mb-md">
          <h3>{{ habitacion.nombre }}</h3>
          <p>{{ habitacion.descripcion }}</p>
          <p>Precio: {{ habitacion.precio }}</p>
        </q-carousel-slide>
      </q-carousel>
      <q-btn color="primary" label="Reservar Ahora" @click="reservar" />
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(0)
const habitaciones = ref([
  { nombre: 'Habitación Estándar', descripcion: 'Cómoda y acogedora, con todas las comodidades básicas.', precio: '$100/noche', imagen: 'ruta-de-la-imagen-1.jpg' },
  { nombre: 'Suite', descripcion: 'Amplia y lujosa, ideal para una estancia de lujo.', precio: '$200/noche', imagen: 'ruta-de-la-imagen-2.jpg' }
])

const reservar = () => {
}
</script>

<style>
img {
  max-width: 100%;
  height: auto;
}
</style>
