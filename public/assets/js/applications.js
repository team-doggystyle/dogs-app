$(document).ready(function () {
    $("#submit").on("click", function (event) {
        // event.preventDefault()

        var newApplicant = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            inputEmail: $("#inputEmail").val(),
            inputPhone: $("#inputPhone").val(),
            newsletter: true
        }
        console.log("New Applicant", newApplicant);

        //connecting to our post route and sending a request to the server
        $.post("/api/applications", newApplicant, function (data) {
            console.log("From the server", data)
        });

        $('#registration').modal('show');
        event.preventDefault();

        $("#registration").modal("hide").on("hidden.bs.modal", function () {
            window.location.reload();
        });

    });

});