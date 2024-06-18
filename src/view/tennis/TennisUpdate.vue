<template>
    <body>
    <div class="container">
        <RouterLink to="../tennis" class="back-link">Voltar</RouterLink> 
        <h1>Editar tênis</h1> 
        <form @submit.prevent="create" class="form-container"> 
            <label for="name">Nome:</label>
            <input 
                v-model="tenis.name"
                type="text"
                required
                maxlength="30"
                id="name"
                class="input-field"
            />

            <label for="brand">Marca:</label>
            <input
                v-model="tenis.brand"
                type="text"
                required
                maxlength="30"
                id="brand"
                class="input-field"
            />

            <label for="color">Cor:</label>
            <input
                v-model="tenis.color"
                type="text"
                required
                maxlength="30"
                id="color"
                class="input-field"
            />

            <label for="number">Número:</label>
            <input
                v-model="tenis.number"
                type="number"
                required
                maxlength="30"
                id="number"
                class="input-field"
            />

            <label for="category" >Categoria:</label>
            <select id="category" v-model="tenis.categoryId" required class="input-field"> 
                <option v-for="category in categories.values" :key="category.id" :value="category.id">
                    {{ category.name }}
                </option>
            </select>

            <button @click="update" class="submit-button">Atualizar</button> 
        </form>
    </div>
</body>
</template>


<script setup>
import apiUrl from '@/config/api';
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()

const tenis = reactive({
    name:'',
    brand:'',
    color:'',
    number:'',
    categoryId: ''
})

let categories = reactive([])

const fetchCategories = async () => {
    try {
        await axios.get(apiUrl + '/api/categories').then((response) => {
            categories.values = response.data._embedded.categoryDTOList;
            console.log(categories);
        })
    } catch (error) {
        console.error('Erro ao obter categorias:', error)
    }
}

onMounted(() =>{
    fetchCategories()
})

const update = async () => {
    axios.post(apiUrl + '/api/tennis', tenis)
         .then(response => {
            alert('Dados atualizado com sucesso!')
            router.push('/tennis')
         })
         .catch(error => {
            alert('Erro ao cadastrar')
            console.log('Erro: ', error)
         })
}

const getTenisById = async id =>{
    await axios
    .get(apiUrl +'/api/tennis/'+ id)
    .then(response =>{
        console.log('Resposta: ', response)
        Object.assign(tenis, response.data)
    })
    .catch
    (error => {
        console.error('Erro' + error)
        })
}

onMounted(() => {
    getTenisById(route.params.id)
})
</script>

<style scoped>

    body{
    padding: 100px;
}
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.back-link {
    display: inline-block;
    margin-bottom: 20px;
    color: #007bff;
    text-decoration: none;
}

.back-link:hover {
    text-decoration: underline;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
}

.form-container {
    display: flex;
    flex-direction: column;
}

label {
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
}

.input-field {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 10px;
}

.submit-button {
    padding: 10px 15px;
    border: none;
    border-radius: 50px;
    background-color: #28a745;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #218838;
    border-radius: 50px;
    border: 0px;
}

</style>