<template>
    <div class="main_content container">
        <div class="user_data">
            <div class="header_title">
                <div class="row">
                    <div class="col-6">
                        <h3>Username</h3>
                    </div>
                    <div class="col-6 d-md-flex justify-content-md-end">
                        <h3>type(seller/customer)</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Ticket ID: </h5>
                    </div>
                    <div class="col-6 d-md-flex justify-content-md-end">
                        <h5>Category</h5>
                    </div>
                </div>
            </div>
            <div class="complain">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim tellus varius felis mattis, id vulputate libero placerat. Nunc quis arcu nec tortor gravida euismod nec a ex. Donec a consectetur dui. Nulla elementum enim ex, ut rutrum eros lobortis nec. Sed scelerisque nisi viverra, finibus erat non, posuere neque. Nam imperdiet, nisl sit amet maximus aliquam, sapien libero dictum est, non tincidunt odio leo sed nunc. Vivamus eget viverra tortor, ac tincidunt urna. Vivamus vel convallis magna, nec semper enim.
                </p>
                <p>
                    Cras nisl elit, sodales nec auctor id, posuere id lorem. Cras a massa aliquam, elementum eros vitae, blandit eros. Morbi eu tristique mauris. Phasellus vulputate ipsum non arcu gravida, eu aliquet sapien elementum. Mauris aliquet blandit viverra. Curabitur sollicitudin urna vel turpis bibendum, a fermentum est aliquet. Cras placerat congue sem, a cursus nisi semper in. Donec accumsan non ipsum in lobortis. Etiam suscipit elementum arcu, ac vulputate leo tristique non. Fusce sit amet lacus fringilla, volutpat mi eu, auctor ex. Aliquam tortor lorem, semper ac convallis nec, gravida volutpat nisi. Etiam leo elit, volutpat ac vehicula et, finibus nec elit. Mauris non ullamcorper dolor.
                </p>
            </div>
        </div>
        <div class="admin_reply form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Reply</label>
            
            <div class="position_button d-md-flex justify-content-md-end">
                <button type="button" class="btn btn-outline-success">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "CustomerService",
}
</script>

<style scoped>
div.main_content{
    width: 60%;
    margin-top: 8rem;
    margin-bottom: 1rem;
    border: 1px solid #198754;
    border-radius: 15px;
}

div.header_title{
    margin-bottom: 3rem;
}

div.admin_reply textarea{
    resize: none;
    height: 15rem;
}

div.user_data{
    margin: 2rem;
}

div.admin_reply{
    margin: 2rem;
}

div.position_button{
    margin-top: 1.5rem;
}
</style>