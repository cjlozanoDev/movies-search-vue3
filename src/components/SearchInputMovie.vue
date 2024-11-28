<script setup>
import { useSearchInput } from '../composables/useSearchInput';

const emit = defineEmits(['search-movies'])

const {textError, textSearch, handlerSubmit } = useSearchInput(emit);
</script>

<template>
  <form class="form">
    <input type="text" v-model="textSearch" />
    <button type="submit" @click="handlerSubmit">Buscar</button>
  </form>
  <p v-if="textError" :style="{ color: 'red' }">
    {{ textError }}
  </p>
</template>