<script setup>
</script>

<template>
  <div id="contenedor">
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar size="45px">
            <img src="./imagenes/logo.jpg" id="logo" alt="Hotel Logo">
          </q-avatar>
          Lotus Harmony Hotel
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/" label="Inicio" />
        <q-route-tab to="/habitaciones" label="Habitaciones" />
        <q-route-tab to="/servicios" label="Servicios" />
        <q-route-tab to="/deportes-extremos" label="Deportes Extremos" />
        <q-route-tab to="/contacto" label="Contacto" />

      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>


  </q-layout>
  </div>
</template>

<style>
.q-header{
position: sticky;
top: -4%;
width: 111%;
transform: translate(-5%, -33%);
}

#logo{
  width: 120%;
}

#app{
  width: 100%;
}

#contenedor{
  width: 100%;
}

#footer{
  position: sticky;
  bottom: -100px;
  transform: translate(-8.3%, 45%);
  width: 120%;
}
</style>
