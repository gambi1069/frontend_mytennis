<template>
    <body>
    <div class="container">
      <div class="c-list"><h2>List Tenis</h2></div>
      <div class="btn-add"><RouterLink to="/tennis/create" class="router-link">Adicione um tenis</RouterLink></div>
        <table class="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Marca</th>
            <th>Cor</th>
            <th>Numero</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="tenis in tennis" :key="tenis.id">
                
                <td>{{ tenis.name }}</td>
                <td>{{ tenis.brand }}</td>
                <td>{{ tenis.color }}</td>
                <td>{{ tenis.number }}</td>
                <td>{{ categories.values.find(x => x.id == tenis.categoryId).name }}</td>
                <td>
                    <RouterLink :to="`/Tennis/${tenis.id}`" class="btn-edit">Editar</RouterLink>
                    <button @click="deleteTennis(tenis.id)" class="btn-delete">Excluir</button>
                </td>
            </tr>
        </tbody>
    </table>
    </div>
      
</body>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import apiUrl from '@/config/api'
import axios from 'axios'

const tennis = ref([])

const getAllTennis = async ()=>{
    axios
    .get(apiUrl+'/api/tennis')
    .then(response => {
            console.log('Resposta: ', response)
            tennis.value = response.data._embedded.tennisDTOList;
        })
        .catch(error => {
            console.error('Error: ', error)
        })
}

let categories = reactive([]);

const getAllCategories = async () => {
    axios.get(apiUrl + "/api/categories").then((response) => {
        categories.values = response.data._embedded.categoryDTOList;
    });
}

const deleteTennis = async (id) => {
    axios.delete(`${apiUrl}/api/tennis/${id}`).then(() => {
        window.alert("Tenis deletado com sucesso");
        onMounted(() => getAllCategories());
    }).catch(() => window.alert("Erro ao deletar tenis"));
}

onMounted(() =>{
    getAllTennis();
    getAllCategories();
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
    margin-bottom: 20px;
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