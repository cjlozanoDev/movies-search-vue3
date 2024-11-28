import { ref, computed } from 'vue'
import { searchMovies } from '../api/moviesAPI'

export const useMovies = (sort) => {
  const loading = ref(false)
  const movies = ref([])
  const error = ref(null)
  const isFirstInput = ref(true)

  const previousSearch = ref(null)

  const getMovies = async (textSearch) => {
    if (previousSearch.value === textSearch) return

    try {
      loading.value = true
      const newMovies = await searchMovies(textSearch)
      movies.value = newMovies
      previousSearch.value = textSearch
      isFirstInput.value = false
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  const sortedMovies = computed(() =>
    sort.value ? [...movies.value].sort((a, b) => a.title.localeCompare(b.title)) : movies.value
  )

  return {
    getMovies,
    movies: sortedMovies,
    loading,
    isFirstInput
  }
}
