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
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                   <div class="card-cards">
                        <div class="card-image">
                            <img :src="`https://image.tmdb.org/t/p/w342/${poster_path}`" alt="img">
                        </div>
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
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    ul{
        list-style-type: none;

    }
    .card-text{
        text-align: center;
        color:#fff;
    }
    .card-cards{
        width:calc(100% / 5);
    }
</style>