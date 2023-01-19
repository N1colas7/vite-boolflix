<script>
import { store } from '../store.js';

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
                            <p>{{ original_language }}</p>
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