<script setup>
</script>

<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar size="45px">
            <img src="/imagenes/logo.jpg" id="logo" alt="Hotel Logo">
          </q-avatar>
          Lotus Harmony Hotel
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/habitaciones" label="Habitaciones" />
        <q-route-tab to="/contacto" label="Contacto" />
        <q-route-tab to="/deportes-extremos" label="Deportes Extremos" />
        <q-route-tab to="/servicios" label="Servicios" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" alt="Hotel Logo">
          </q-avatar>
          <div>© 2024 Hotel. Todos los derechos reservados.</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style>
#logo{
  width: 120%;
}
</style>
