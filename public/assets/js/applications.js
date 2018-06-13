$(document).ready(function () {
    // Gets an optional query string from our url (i.e. ?application_id=23)
    var url = window.location.search;
    var applicationId;
    // Sets a flag for whether or not we're updating a post to be false initially
    var updating = false;

    // If we have this section in our url, we pull out the post id from the url
    // In localhost:8080/cms?application_id=1, applicationId is 1
    if (url.indexOf("?application_id=") !== -1) {
        applicationId = url.split("=")[1];
        getApplicationData(applicationId);
    }

    // Getting jQuery references to the post body, title, form, and category select
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var inputEmail = $("#inputEmail");
    var inputPhone = $("#inputPhone");
    // Giving the inputPhone a default value
    inputPhone.val("Personal");
    // Adding an event listener for when the form is submitted
    $(inputEmail).on("submit", function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the post if we are missing a body or a title
        if (!lastName.val().trim() || !firstName.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newPost = {
            title: lastName.val().trim(),
            body: firstName.val().trim(),
            category: inputPhone.val()
        };

        console.log(newPost);

        // If we're updating a post run updatePost to update a post
        // Otherwise run submitPost to create a whole new post
        if (updating) {
            newPost.id = postId;
            updatePost(newPost);
        } else {
            submitPost(newPost);
        }
    });

    // Submits a new post and brings user to blog page upon completion
    function submitPost(Post) {
        $.post("/api/posts/", Post, function () {
            window.location.href = "/blog";
        });
    }

    // Gets post data for a post if we're editing
    function getApplicationData(id) {
        $.get("/api/posts/" + id, function (data) {
            if (data) {
                // If this post exists, prefill our cms forms with its data
                lastName.val(data.title);
                firstName.val(data.body);
                inputPhone.val(data.category);
                // If we have a post with this id, set a flag for us to know to update the post
                // when we hit submit
                updating = true;
            }
        });
    }

    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
        $.ajax({
                method: "PUT",
                url: "/api/posts",
                data: post
            })
            .then(function () {
                window.location.href = "/blog";
            });
    }
});