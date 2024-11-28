import { ref, watch } from 'vue'

export const useSearchInput = (emit) => {
  const textSearch = ref('')
  const textError = ref(null)

  const handlerSubmit = (event) => {
    event.preventDefault()
    emit('search-movies', textSearch.value)
  }

  watch(textSearch, (newSearch) => {
    if (newSearch === '') {
      textError.value = 'Error, no se puede buscar una película vacía'
      return
    }
    if (newSearch.match(/^\d+$/)) {
      textError.value = 'No se puede buscar una película con un número'
      return
    }
    if (newSearch.length < 3) {
      textError.value = 'La búsqueda debe tener al menos 3 caracteres'
      return
    }
    textError.value = null
  })

  return {
    textSearch,
    textError,
    handlerSubmit
  }
}
