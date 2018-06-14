$(document).ready(function () {
    $("#submit").on("click", function(event){
        event.preventDefault()

        var newApplicant = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            inputEmail: $("#inputEmail").val(),
            inputPhone: $("#inputPhone").val(),
            newsletter: true
        }
        console.log("New Applicant",newApplicant);

        //connecting to our post route and sending a request to the server
        $.post("/api/applications", newApplicant, function (data) {
           console.log("From the server", data)
        });
    
    })

    // Getting jQuery references to the post body, title, form, and category select
    
    // Giving the inputPhone a default value
    // inputPhone.val("Personal");

    
    // // Submits a new post and brings user to blog page upon completion
    // function submitPost(Post) {
    //     $.post("/api/posts/", Post, function () {
    //         window.location.href = "/blog";
    //     });
    // }

    // // Gets post data for a post if we're editing
    // function getApplicationData(id) {
    //     $.get("/api/posts/" + id, function (data) {
    //         if (data) {
    //             // If this post exists, prefill our cms forms with its data
    //             lastName.val(data.title);
    //             firstName.val(data.body);
    //             inputPhone.val(data.category);
    //             // If we have a post with this id, set a flag for us to know to update the post
    //             // when we hit submit
    //             updating = true;
    //         }
    //     });
    // }

    // Update a given post, bring user to the blog page when done
    // function updatePost(post) {
    //     $.ajax({
    //             method: "PUT",
    //             url: "/api/posts",
    //             data: post
    //         })
    //         .then(function () {
    //             window.location.href = "/blog";
    //         });
    // }
});