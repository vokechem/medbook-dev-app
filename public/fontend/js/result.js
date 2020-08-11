(function ($) {
  "use strict";

  var base_url = $("#base_url").val();
  var csrf_token = $("#csrf_token").val();
  var csrfName = $("#csrfName").val();
  var csrfHash = $("#csrfHash").val();
  var placeSearch, autocomplete;

  $(document).ready(function () {
    $(".select").selectpicker();
    $.ajax({
      type: "GET",
      url: base_url + "user/tresult/get_service",
      data: { id: $(this).val(), csrf_token_name: csrf_token },
      beforeSend: function () {
        $("#services option:gt(0)").remove();
        $("#services").selectpicker("refresh");
        $("#services").selectpicker();
        $("#services").find("option:eq(0)").html("Please wait..");
        $("#services").selectpicker("refresh");
        $("#services").selectpicker();
      },
      success: function (data) {
        $("#services").selectpicker("refresh");
        $("#services").selectpicker();
        $("#services").find("option:eq(0)").html("Select services");
        $("#services").selectpicker("refresh");
        $("#services").selectpicker();
        var obj = jQuery.parseJSON(data);
        $("#services").selectpicker("refresh");
        $("#services").selectpicker();
        $(obj).each(function () {
          var option = $("<option />");
          option.attr("value", this.value).text(this.label);
          $("#services").append(option);
        });
        $("#services").selectpicker("refresh");
        $("#services").selectpicker();
      },
    });

    $("#add_services")
      .bootstrapValidator({
        fields: {
          services_title: {
            validators: {
              remote: {
                url: base_url + "user/services/check_services_title",
                data: function (validator) {
                  return {
                    service_title: validator
                      .getFieldElements("service_title")
                      .val(),
                    csrf_token_name: $("#login_csrf").val(),
                  };
                },
                message: "This Service is already exist",
                type: "POST",
              },
              notEmpty: {
                message: "Please Enter your service title",
              },
            },
          },
          service_sub_title: {
            validators: {
              notEmpty: {
                message: "Please Enter service sub title",
              },
            },
          },
          category: {
            validators: {
              notEmpty: {
                message: "Please select category...",
              },
            },
          },
          service_location: {
            validators: {
              notEmpty: {
                message: "Please Enter service location...",
              },
            },
          },
          service_amount: {
            validators: {
              digits: {
                message:
                  "Please Enter valid service amount and not user in special characters...",
              },
              notEmpty: {
                message: "Please Enter service amount...",
              },
            },
          },

          "service_offered[]": {
            validators: {
              notEmpty: {
                message: "Please Enter service offered",
              },
            },
          },
          about: {
            validators: {
              notEmpty: {
                message: "Please Enter About Informations...",
              },
            },
          },
        },
      })
      .on("success.form.bv", function (e) {
        return true;
      });
  });
  //document end
})(jQuery);
