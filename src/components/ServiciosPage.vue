<template>
  <div class="q-pa-md items-start q-gutter-md">
    <div class="grid-container">
      <q-card v-for="(servicio, index) in servicios" :key="index" class="my-card">
        <q-img :src="servicio.imagen">
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ servicio.nombre }}
          </div>
        </q-img>

        <q-card-section>
          <p>{{ servicio.descripcion }}</p>
        </q-card-section>
      </q-card>
    </div>
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

</script>

<style scoped>

</style>
