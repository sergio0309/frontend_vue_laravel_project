<template>
    <h1>Ingresar</h1>
    <label for="">Ingrese Correo:</label><br>
    <input type="email" v-model="credenciales.email">
    {{ errors.email }}
    <br>

    <label for="">Ingrese Contraseña:</label><br>
    <input type="password" v-model="credenciales.password">
    {{ errors.password }}
    <br>
    <button @click="funIngresar()">Ingresar</button>
    <br>
    {{ credenciales }}
    <br>
    {{ respuesta }}
</template>

<script setup>
import { ref } from 'vue';
import authService from '../../services/auth.service';
import { useRouter } from 'vue-router';

const credenciales = ref({email: "", password: ""})
const respuesta = ref();
const errors = ref({});
const router = useRouter();

async function funIngresar(){
    try {
        const { data } = await authService.login(credenciales.value);
        respuesta.value = data;

        localStorage.setItem("access_token", data.access_token);

        // redireccionar
        router.push({name: 'MiPerfil'})

    } catch (error) {
        console.log(error.response?.data?.errors);
        errors.value = error.response?.data?.errors;
    }
}
</script>