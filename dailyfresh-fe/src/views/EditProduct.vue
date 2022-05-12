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
                    <form @submit.prevent="updateProducts">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Product Name</span>
                            <input type="text" class="form-control" id="name" v-model="post.name">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Stock</span>
                            <input type="number" class="form-control" min="0" id="stock" v-model="post.stock">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Price</span>
                            <input type="number" class="form-control" min="0" id="price" v-model="post.price">
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1">Product Description</span>
                            <input type="text" class="form-control" id="description" v-model="post.description">
                        </div>
                        <p>
                            Choose new product picture:
                        </p>
                        <div class="input-group mb-3">
                            <input type="file" class="form-control" id="add_picture">
                        </div>
                        <div class="d-md-flex justify-content-md-end">
                            <button type="submit" value="submit" class="btn btn-outline-success">
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
            good: [],
            id: '',
            post: {
                name: "",
                price: "",
                stock: "",
                category: "",
                description: "",
                image: 'wortel-800-gr.png',
            },
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
        async updateProducts(){
            const FormData = require('form-data');

            const formData = new FormData();

            formData.append('name', this.post.name)
            formData.append('price', this.post.price)
            formData.append('stock', this.post.stock)
            formData.append('description', this.post.description)
            formData.append('image', this.post.image)
            formData.append('id', this.good.id)
            
            await Axios.put(
                `http://localhost:8080/goods`,
                formData
            ).then(res =>{
                console.log(res);
                console.log(this.post)
                alert("update products success")
            })
            .catch(err => {
                console.log(err);
                console.log(this.post);
                alert("update products failed")
            });
            
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