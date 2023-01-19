<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    props:{
        title:String,
    }
}
</script>
<template >
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3>{{ title }}</h3>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    
</style>