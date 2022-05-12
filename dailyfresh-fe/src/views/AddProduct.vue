<template>
    <section class="AddProduct">
        <div class="container d-flex justify-content-center">
            <div class="add_product border border-success">
                <div class="header_add mb-3">
                    <h2 class="color_h2">Add Product</h2>
                </div>
                <form action="#">
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Product Name</span>
                        <input type="text" class="form-control" id="name" v-model="product_name">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Stock</span>
                        <input type="number" class="form-control" min="0" id="stock" v-model="stock">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Price</span>
                        <input type="number" class="form-control" min="0" id="price" v-model="price">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Product Description</span>
                        <input type="text" class="form-control" id="description" v-model="description">
                    </div>
                    <p>
                        Choose product picture:
                    </p>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="add_picture">
                    </div>
                    <div class="d-md-flex justify-content-md-end">
                        <button type="submit" value="submit" class="btn btn-success" @click="alertSuccess">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"
export default{
    mounted(){
        this.postProduct()
    },
    data(){
        return{

        }
    },
    methods: {
        alertSuccess(){
            alert("Berhasil ditambahkan")
        },
        postProduct(){
            //ganti this.product jadi user_id dari login
            axios
            .post(
                `localhost:8080/goods`,
                {
                    product_name: this.product_name,
                    price: this.price,
                    stock: this.stock,
                    desc: this.description
                    //seller: this.user.user_id
                }
            )
        }
    }
}
</script>

<style scoped>
div.add_product{
    margin-top: 3rem;
    padding: 1rem;
    width: 60%;
    border-radius: 15px;
}
.color_h2{
    color: #368e12;
}
</style>