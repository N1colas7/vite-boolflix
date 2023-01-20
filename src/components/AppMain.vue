<script>
import AppHeader from './AppHeader.vue';
import Card from './Card.vue';
import axios from 'axios'

export default {
    data() {
        return {
            titolo:"",
            movieList:[],
            TvList:[],
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
            
        },
        ApiTv(){
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=535e6d6578ba975073fcaaed0dfc5fed&language=en-US&query='+this.titolo).then(response => {
                this.TvList = response.data.results
                console.log(this.TvList)
            });
        },

    },
}
</script>
<template>
    <AppHeader @select="selectChanged" @callApi="ApiMovie" @callApiTv="ApiTv"/>
    <div class="container-fluid">
        <Card v-for="(item, index) in movieList" :key="index" :movie="item" :title="item.title" :original_title="item.original_title" :original_language="item.original_language" :vote_average="item.vote_average" :poster_path="item.poster_path"/>
        <Card v-for="(itemTv, i) in TvList" :key="i" :tv="itemTv" :name="itemTv.name" :original_name="itemTv.original_name" :vote_average="itemTv.vote_average" :original_language="itemTv.original_language" :poster_path="itemTv.poster_path" />
    </div>
</template>
<style lang="scss">
    .container-fluid{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background-color: rgba(0, 0, 0, 0.808);
    }
</style>