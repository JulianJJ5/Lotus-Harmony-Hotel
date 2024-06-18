<template>
    <q-page>
      <div class="q-pa-md">
        <h2>Contacto</h2>
        <p>Dirección: Calle 35, S, País</p>
        <p>Teléfono: +123 456 7890</p>
        <p>Email: contacto@hotel.com</p>
        <p>Horario de Atención: 24/7</p>
        <q-form @submit="enviarConsulta">
          <q-input v-model="consulta.nombre" label="Nombre" required />
          <q-input v-model="consulta.email" label="Email" type="email" required />
          <q-input v-model="consulta.mensaje" label="Mensaje" type="textarea" required />
          <q-btn type="submit" label="Enviar" color="primary" class="q-mt-md" />
        </q-form>
        <q-map :center="[latitud, longitud]" zoom="15" class="q-mt-md"></q-map>
      </div>
    </q-page>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const consulta = ref({ nombre: '', email: '', mensaje: '' })
  
  const enviarConsulta = () => {
    // Lógica para enviar consulta
  }
  
  const latitud = 40.712776
  const longitud = -74.005974
  </script>
  