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

    },
    components:{
        CountryFlag
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
                            <img src=""  alt="img">
                        </div>
                        <div class="card-text">
                            <h4>{{ title }}{{ name }}</h4>
                                <ul>
                                    <li>{{ original_title }}{{ original_name }}</li>
                                    <li><country-flag :country='original_language' size='small'/></li>
                                    <li>{{ vote_average }}</li>
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
</style>