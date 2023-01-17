<script>
export default {
    
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
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Search</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <button type="button" class="btn btn-danger">Cerca</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
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