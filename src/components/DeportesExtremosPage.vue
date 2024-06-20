<template>
  <div class="q-pa-md items-start q-gutter-md">
    <div class="grid-container">
      <q-card v-for="(deporte, index) in deportes" :key="index" class="my-card">
        <q-img :src="deporte.imagen">
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ deporte.nombre }}
          </div>
        </q-img>

        <q-card-section>
          <p>{{ deporte.descripcion }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const deportes = ref([
  {
    nombre: 'PARACAIDISMO',
    descripcion: 'Experimenta la emoción de lanzarte desde una plataforma en una montaña a gran altura y sentir la libertad mientras caes hacia la tierra con seguridad garantizada por nuestros expertos instructores.',
    imagen: './imagenes/paracaidismo.jpg'
  },
  {
    nombre: 'PARAPENTE',
    descripcion: 'Siente la adrenalina de volar como un pájaro mientras disfrutas de vistas panorámicas impresionantes de montañas y valles. Nuestros pilotos profesionales aseguran una experiencia segura y emocionante.',
    imagen: './imagenes/parapente.jpg'
  },
  {
    nombre: 'BICICLETA DE MONTAÑA',
    descripcion: 'Recorre senderos desafiantes y paisajes naturales espectaculares mientras disfrutas del aire fresco de la montaña. Nuestras bicicletas de montaña están equipadas para tu comodidad y seguridad.',
    imagen: './imagenes/bicicleta_de_montana.jpg'
  },
  {
    nombre: 'SENDERISMO DE MONTAÑA',
    descripcion: 'Embárcate en una aventura a través de senderos naturales, descubre cascadas escondidas y observa la fauna y flora local en su hábitat natural. Guiados por expertos locales que conocen cada rincón de la montaña.',
    imagen: './imagenes/senderismo.jpg'
  },
  {
    nombre: 'KAYAK Y CANOTAJE',
    descripcion: 'Navega por aguas bravas y tranquilas mientras exploras ríos y lagos rodeados de paisajes únicos. Nuestros guías certificados te acompañarán para asegurar una experiencia emocionante y segura.',
    imagen: './imagenes/canotaje.avif'
  },
  {
    nombre: 'ESPELEOLOGÍA',
    descripcion: 'Descubre el fascinante mundo subterráneo explorando cuevas y cavernas llenas de formaciones rocosas impresionantes. Equipados con todo el material necesario para una exploración segura y educativa.',
    imagen: './imagenes/espeleologia.jpg'
  }
])

const reservar = () => {
  // Función para manejar la acción de reservar
}
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas iguales */
  gap: 20px; /* Espacio entre las tarjetas */
}

</style>
