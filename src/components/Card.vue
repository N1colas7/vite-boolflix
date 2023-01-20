<script>
import { store } from '../store.js';
import CountryFlag from 'vue-country-flag-next';


export default {
    data() {
        return {
            store
        }
    },
    props:{
        title: String,
        original_title: String,
        original_language: String,
        vote_average: String,
        name: String,
        original_name: String,
        poster_path: String,

    },
    components:{
        CountryFlag
    },
    methods:{
        Intero(voto){
            return Math.round(voto/2)
        }
    }

}
</script>
<template > 
        <div class="card-cards m-2">
                <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`" alt="img">
            <div class="card-text">
                <h4>{{ title }}{{ name }}</h4>
                    <ul>
                        <li>{{ original_title }}{{ original_name }}</li>
                        <li><country-flag :country='original_language' size='small'/></li>
                        <div class="d-flex">
                        <li v-for="n in Intero(vote_average)" :key=n>&#9733;</li>
                        </div>
                    </ul>   
            </div>
        </div>
</template>
<style lang="scss">
    ul{
        list-style-type: none;

    }
    .card-cards{
        width: 20%;
        position:relative;
            img{
                width: 100%;
                display:block
            }
    }
    .card-cards:hover img{
        opacity: 0.2;
    }
    .card-cards:hover .card-text{
        opacity:1;
    }
    .card-text{
      position:absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      height: 100%;
      width: 100%;
      opacity:0;
    }
</style>