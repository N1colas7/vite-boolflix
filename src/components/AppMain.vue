<script>
import AppHeader from './AppHeader.vue';
import Card from './Card.vue';
import axios from 'axios'

export default {
    data() {
        return {
            titolo:"",
            movieList:[],
        }
    },
    components:{
        Card,
        AppHeader,
    },
    methods: {
        selectChanged(input){
            this.titolo=input;
        },
        ApiMovie(){
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=535e6d6578ba975073fcaaed0dfc5fed&language=en-US&query='+this.titolo).then(response => {
                this.movieList = response.data.results
            });
        }

    },
}
</script>
<template>
    <AppHeader @select="selectChanged" @callApi="ApiMovie"/>
    <div class="container-x">
        <Card v-for="(item, index) in movieList" :key="index" :movie="item" :title="item.title" :original_title="item.original_title" :original_language="item.original_language" :vote_average="item.vote_average" />
    </div>
</template>
<style lang="scss">
    .container-x{
        display: flex;
        flex-wrap: wrap;
    }
</style>