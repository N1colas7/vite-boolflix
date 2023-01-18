import { reactive } from 'vue';

export const store = reactive({
    cardslist: [],
    apiKey: '535e6d6578ba975073fcaaed0dfc5fed',
    apiFilm: 'https://api.themoviedb.org/3/search/movie?api_key=535e6d6578ba975073fcaaed0dfc5fed&language=en-US',
});
