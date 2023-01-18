<script>

export default {
    data() {
        return {
            cardArray:"",
        }
    },
    methods:{
        callApi:function () {
            
        }
    }
}
</script>
<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="../img/netflix.png" alt="img">
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6">
                            <div class="form-floating">
                                <input v-model="cardArray" @keyup="printArray" @change="$emit('select',cardArray)" class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
                                <label for="floatingTextarea">Search</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-danger" @click="$emit('callApi')" >Cerca</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <AppMain />
</template>
<style lang="scss">
    *{
        align-items: center;
        padding: 2px;
    }
    header{
        background-color: rgba(0, 0, 0, 0.808);
    }
    img{
        width: 30%;
    }
    .form-floating{
        height: 50%;
    }
</style>