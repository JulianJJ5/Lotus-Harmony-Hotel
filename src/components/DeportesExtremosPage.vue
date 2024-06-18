<template>
    <q-page>
      <div class="q-pa-md">
        <h2>Deportes Extremos</h2>
        <q-list>
          <q-item v-for="(deporte, index) in deportes" :key="index">
            <q-item-section>
              <q-item-label>{{ deporte.nombre }}</q-item-label>
              <q-item-label caption>{{ deporte.descripcion }}</q-item-label>
              <q-item-label caption>Precio: {{ deporte.precio }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const deportes = ref([
    { nombre: 'Parapente', descripcion: 'Vuela sobre hermosos paisajes.', precio: '$150', imagen: 'ruta-de-la-imagen-1.jpg' },
    { nombre: 'Buceo', descripcion: 'Explora el mundo submarino.', precio: '$100', imagen: 'ruta-de-la-imagen-2.jpg' }
  ])
  </script>
  