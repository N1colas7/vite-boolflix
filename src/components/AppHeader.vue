<script>

export default {
    data() {
        return {
            cardArray:"",
        }
    },
    methods:{
        callApi:function () {
            
        },
        callApiTV:function () {
            
        },
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
                                <input v-on:keyup.enter="$emit('callApi');$emit('callApiTv')" v-model="cardArray" @keyup="printArray" @change="$emit('select',cardArray)" class="form-control" placeholder="Leave a comment here" id="floatingTextarea">
                                <label for="floatingTextarea">Search</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-danger" @click="$emit('callApi');$emit('callApiTv')">Cerca</button>
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
        background-color: rgba(0, 0, 0, 0.897);
    }
    img{
        width: 30%;
    }
    .form-floating{
        height: 50%;
    }
</style>