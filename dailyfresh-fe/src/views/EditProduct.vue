<template>
    <div class="container">
        <div class="edit_title">
            <div class="header_edit mb-3">
                <h2 class="color_h2">Edit Product</h2>
            </div>
            <div class="row edit_product">
                <div class="image_product col-4">
                    <img 
                    :src="imagePath" 
                    :alt="good.name">
                </div>
                <div class="col-8">
                    <form action="#">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Product Name</span>
                            <input type="text" class="form-control" id="name" value="">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Stock</span>
                            <input type="number" class="form-control" min="0" id="stock" value="">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Price</span>
                            <input type="number" class="form-control" min="0" id="price" value="">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Product Description</span>
                            <input type="text" class="form-control" id="description" value="">
                        </div>
                        <p>
                            Choose new product picture:
                        </p>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="add_picture" value="">
                        </div>
                        <div class="d-md-flex justify-content-md-end">
                            <button type="submit" value="submit" class="btn btn-outline-success" @click="updateProducts">
                                <i class="bi bi-save2-fill"></i>
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default{
    data(){
        return{
            good: []
        }
    },
    computed: {
        imagePath(){
            return `/images/goods/${this.good.image}`
        }
    },
    created(){
        this.id = this.$route.params.id;
        Axios.get(`http://localhost:8080/goods?id=${this.id}`).then((Response)=>{
            this.good = Response.data.data[0];
        });
        
    },
    methods: {
        updateProducts(){
            alert("update products success")
        }
    }
}
</script>

<style scoped>
div.edit_product{
    border: solid 1px #368e12;
    border-radius: 15px;
    padding: 1rem;
}

div.header_edit{
    margin-top: 8rem;
    margin-bottom: 2rem;
}

div.image_product img{
    width: 100%;
}
</style>