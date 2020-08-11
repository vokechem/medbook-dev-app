$("#edit").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var petype = button.data("mytitle");
    var description = button.data("mydescription");
    var id = button.data("id");
    var modal = $(this);
    modal.find(".modal-body #petype").val(petype);
    modal.find(".modal-body #description").val(description);
    modal.find(".modal-body #id").val(id);
});
$("#delete").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var id = button.data("id");
    var modal = $(this);
    modal.find(".modal-body #id").val(id);
});
//edit
$("#edit1").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var pename = button.data("pename");
    var mobile = button.data("mobile");
    var email = button.data("email");
    var petype = button.data("petype");
    var pobox = button.data("pobox");
    var telephone = button.data("telephone");
    var postalcode = button.data("postalcode");
    var town = button.data("town");
    var id = button.data("id");
    var modal = $(this);
    modal.find(".modal-body #pename").val(pename);
    modal.find(".modal-body #petype").val(petype);
    modal.find(".modal-body #mobile").val(mobile);
    modal.find(".modal-body #email").val(email);
    modal.find(".modal-body #pobox").val(pobox);
    modal.find(".modal-body #telephone").val(telephone);
    modal.find(".modal-body #postalcode").val(postalcode);
    modal.find(".modal-body #town").val(town);
    modal.find(".modal-body #id").val(id);
});
$("#delete1").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var id = button.data("id");
    var modal = $(this);
    modal.find(".modal-body #id").val(id);
});
