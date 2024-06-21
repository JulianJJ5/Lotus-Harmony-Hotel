<template>
  <q-page>
    <div class="q-pa-md">
      <h2 class="underline">Contacto</h2>
      <p>Dirección: Calle 35, S, País</p>
      <p>Teléfono: +123 456 7890</p>
      <p>Email: contacto@hotel.com</p>
      <p>Horario de Atención: 24/7</p>
      <q-form @submit="enviarConsulta">
        <q-input label="Nombre" required />
        <q-input label="Email" type="email" required />
        <q-input label="Mensaje" type="textarea" required />
        <q-btn type="submit" label="Enviar" color="primary" class="q-mt-md" />
      </q-form>
      <q-map :center="[latitud, longitud]" zoom="15" class="q-mt-md"></q-map>
    </div>
    <div id="map" style="height: 400px"></div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

onMounted(() => {
  const map = L.map("map").setView([52.357914, 4.825184], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    lang: "es",
  }).addTo(map);

  L.marker([52.357914, 4.825184])
    .addTo(map)
    .bindPopup("Lotus Harmony Hotel")
    .openPopup();
});
</script>
