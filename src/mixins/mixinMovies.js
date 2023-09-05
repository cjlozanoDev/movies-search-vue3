import { searchMovies } from '../api/moviesAPI'

export const mixinMovies = {
  data() {
    return {
      loading: false,
      movies: [],
      error: null,
      isFirstInput: true,
      previousSearch: null,
      sort: false
    }
  },
  computed: {
    sortedMovies() {
      this.sort ? [...this.movies].sort((a, b) => a.title.localeCompare(b.title)) : this.movies
    }
  },
  methods: {
    async getMovies(search) {
      if (this.previousSearch === search) return

      try {
        this.loading = true
        const newMovies = await searchMovies(search)
        this.movies = newMovies
        this.previousSearch = search
        this.isFirstInput = false
      } catch (e) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    }
  }
}
