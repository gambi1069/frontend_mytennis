<template>
  <div class="menu">
    <div class="logo">Mytennis</div>
    <nav>
      <ul>
        <li><router-link to="/categories">Categorias</router-link></li>
        <li><router-link to="/tennis">Tênis</router-link></li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
.menu {
  background-color: #007bff; /* cor azul de exemplo */
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-right: 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
