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
                            <h4>{{ title }}</h4>
                            <p>{{ original_title }}</p>
                            <country-flag :country='original_language' size='small'/>
                            <p>{{ vote_average }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    
</style>