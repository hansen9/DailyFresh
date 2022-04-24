<template>
    <section class="AddProduct">
        <div class="container d-flex justify-content-center">
            <div class="add_product">
                <div class="header_add mb-3">
                    <h2>Add Product</h2>
                </div>
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
                        Choose product picture:
                    </p>
                    <div class="input-group mb-3">
                        <input type="file" class="form-control" id="add_picture" value="">
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

</script>

<style>
div.add_product{
    width: 60%;
}
</style>