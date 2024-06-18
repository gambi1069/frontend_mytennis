<template>
    <body>
    <div class="container">
      <div class="c-list"><h1>List Categorias</h1></div>
        <div class="btn-add"><RouterLink to="/categories/create" class="router-link">Adicionar Nova categoria</RouterLink></div>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Descricao</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                    <tr v-for="category in categories" :key="category.id">
                        <td>{{category.name}}</td>
                        <td>{{category.description}}</td>
                        <td>
                            <RouterLink :to="{name:'CategoriesUpdate', params: 
                            {id: category.id}}" class="btn-edit">
                            Editar</RouterLink>
                            <button @click="deleteCategory(category.id)" class="btn-delete">Excluir</button>
                        </td>
                    </tr>
                </table>
    </div>
    
            </body>
</template>

<script setup>

import {onMounted, ref} from 'vue'
import apiUrl from '@/config/api'
import axios from 'axios'

const categories = ref([])

const getAllCategories = async () => {
    axios
        .get(apiUrl + '/api/categories')
        .then(response => {
            console.log('Resposta: ', response)
            categories.value = response.data._embedded.categoryDTOList
        })
        .catch(error => {
            console.error('Error: ', error)
        })
}

const deleteCategory = async (id) => {
    axios.delete(`${apiUrl}/api/categories/${id}`).then(() => {
        window.alert("Categoria deletada com sucesso");
        onMounted(() => getAllCategories());
    }).catch(() => window.alert("Erro ao deletar categoria"));
}

onMounted(() =>{
    getAllCategories()
})
</script>

<style scoped>

body{
  align-items: center;
  padding: 50px 50px 50px 50px;
}
.container {
  margin-top: 20px;
  padding: 0%;
}

.c-list{
  display: inline-block;
  width: 50%;
  float: left;
  
}

.btn-add{
  display: inline-block;
  width: 50%;
 
}

.btn {
  cursor: pointer;
}

.table {
  align-content: center;
  width: 100%;
  margin-bottom: 7rem;
  color: #212529;
  border-collapse: collapse;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table th {
  background-color: #f8f9fa;
  color: #495057;
  border-bottom: 2px solid #dee2e6;
  text-align: inherit;
}

.table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}

.table-sm th,
.table-sm td {
  padding: 0.3rem;
  
}

.router-link {
    display: inline-block;
    padding: 10px 15px;
    background-color: #d63384;
    color: #fff;
    border-radius: 50px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    float: right;

}

.btn-edit{
  display: inline-block;
    padding: 10px 15px;
    background-color: #82d0f0;
    color: #fff;
    border-radius: 50px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    float: left;
}

.btn-delete{
  display: inline-block;
    padding: 10px 15px;
    background-color:#DC143C;
    color: #fff;
    border-radius: 50px;
    border: 0px;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 20px;
    float: left;

}

</style>