<template>
    <q-page>
      <div class="q-pa-md">
        <h2>Servicios</h2>
        <q-list>
          <q-item v-for="(servicio, index) in servicios" :key="index">
            <q-item-section>
              <q-item-label>{{ servicio.nombre }}</q-item-label>
              <q-item-label caption>{{ servicio.descripcion }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const servicios = ref([
    { nombre: 'Piscina', descripcion: 'Disfruta de nuestra piscina climatizada.' },
    { nombre: 'Restaurante', descripcion: 'Gastronomía gourmet a tu disposición.' },
    { nombre: 'Spa', descripcion: 'Relájate con nuestros tratamientos de spa.' }
  ])
  </script>
  