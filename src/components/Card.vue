<script>
export default {
    props:{
        card:Object
    },
    data() {
        return {
            index:0
        }
    },
}
</script>
<template >
    <main>
        <div class="container">
            <div class="row">
                <div class="card">
                    <div class="card-image">
                        <img :src="" alt="img">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    
</style>