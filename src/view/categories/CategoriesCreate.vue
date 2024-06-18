<template>
    <body>
    <div class="container">
        <RouterLink to="../categories" class="back-link">Voltar</RouterLink>
        <h1>Inserir nova categoria</h1>
        <form onclick="event.preventDefault()" class="form-container">
            <label for="name">Nome:</label>
            <input 
                v-model="category.name"
                type="text"
                required
                maxlength="30"
                id="name"
                class="input-field"
            />

            <label for="description">Descricao:</label>
            <input 
                v-model="category.description"
                type="text"
                required
                maxlength="50"
                id="description"
                class="input-field"
            />

            <button @click="create" class="submit-button">Cadastrar</button>
        </form>
    </div>
</body>
</template>

<script setup>
import apiUrl from '@/config/api'
import {reactive} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router'

const router = useRouter()

const category = reactive({
    name:'',
    description:'',
})

const create = async () =>{
    axios
        .post(apiUrl + '/api/categories', category)
        .then(response =>{
            alert('Dados cadastrados com sucesso!')
            router.push('/categories')
        })
        .catch(error=> {
            alert('Erro ao cadastrar')
            console.log('Erro: ', error)
        })
}
    
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