<template>
    <section class="AddProduct">
        <div class="container d-flex justify-content-center">
            <div class="add_product border border-success">
                <div class="header_add mb-3">
                    <h2 class="color_h2">Add Product</h2>
                </div>
                <form @submit.prevent="postProduct">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Product Name</span>
                        <input type="text" class="form-control" id="name" v-model="post.name">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Stock</span>
                        <input type="number" class="form-control" min="0" id="stock" v-model="post.stock">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Category</span>
                        <input type="text" class="form-control" id="category" v-model="post.category">
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
                        Choose product picture:
                    </p>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="add_picture" name="imageFileName">
                    </div>
                    <div class="d-md-flex justify-content-md-end">
                        <button type="submit" value="submit" class="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"
export default{
    data(){
        return{
            post :{
                name: "",
                price: "",
                stock: "",
                category: "",
                description: "",
                image: "",
                id: localStorage.getItem("user_id")
            }
            
        }
    },
    methods: {
        alertSuccess(){
            alert("Berhasil ditambahkan")
        },
        async postProduct(){
            const FormData = require('form-data')
            
            const formData = new FormData();
            var imageName = event.target[5].files[0].name
            this.post.image = imageName

            formData.append('name', this.post.name);
            formData.append('price', this.post.price);
            formData.append('stock', this.post.stock);
            formData.append('category', this.post.category);
            formData.append('description', this.post.description);
            formData.append('image', this.post.image);

            await axios.post(
                `http://localhost:8080/goods?seller_id=${ this.id }`,
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
div.add_product{
    margin-top: 3rem;
    margin-bottom: 2rem;
    padding: 1rem;
    width: 60%;
    border-radius: 15px;
}
.color_h2{
    color: #368e12;
}
</style>