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
      url: base_url + "user/service/get_category",
      data: { id: $(this).val(), csrf_token_name: csrf_token },
      beforeSend: function () {
        $("#category option:gt(0)").remove();
        $("#category").selectpicker("refresh");
        $("#category").selectpicker();
        $("#category").find("option:eq(0)").html("Please wait..");
        $("#category").selectpicker("refresh");
        $("#category").selectpicker();
      },
      success: function (data) {
        $("#category").selectpicker("refresh");
        $("#category").selectpicker();
        $("#category").find("option:eq(0)").html("Select Category");
        $("#category").selectpicker("refresh");
        $("#category").selectpicker();
        var obj = jQuery.parseJSON(data);
        $("#category").selectpicker("refresh");
        $("#category").selectpicker();
        $(obj).each(function () {
          var option = $("<option />");
          option.attr("value", this.value).text(this.label);
          $("#category").append(option);
        });
        $("#category").selectpicker("refresh");
        $("#category").selectpicker();
      },
    });
    $.ajax({
      type: "GET",
      url: base_url + "user/service/get_type",
      data: { id: $(this).val(), csrf_token_name: csrf_token },
      beforeSend: function () {
        $("#type option:gt(0)").remove();
        $("#type").selectpicker("refresh");
        $("#type").selectpicker();
        $("#type").find("option:eq(0)").html("Please wait..");
        $("#type").selectpicker("refresh");
        $("#type").selectpicker();
      },
      success: function (data) {
        $("#type").selectpicker("refresh");
        $("#type").selectpicker();
        $("#type").find("option:eq(0)").html("Select type");
        $("#type").selectpicker("refresh");
        $("#type").selectpicker();
        var obj = jQuery.parseJSON(data);
        $("#type").selectpicker("refresh");
        $("#type").selectpicker();
        $(obj).each(function () {
          var option = $("<option />");
          option.attr("value", this.value).text(this.label);
          $("#type").append(option);
        });
        $("#type").selectpicker("refresh");
        $("#type").selectpicker();
      },
    });
    $.ajax({
      type: "GET",
      url: base_url + "user/service/get_method",
      data: { id: $(this).val(), csrf_token_name: csrf_token },
      beforeSend: function () {
        $("#method option:gt(0)").remove();
        $("#method").selectpicker("refresh");
        $("#method").selectpicker();
        $("#method").find("option:eq(0)").html("Please wait..");
        $("#method").selectpicker("refresh");
        $("#method").selectpicker();
      },
      success: function (data) {
        $("#method").selectpicker("refresh");
        $("#method").selectpicker();
        $("#method").find("option:eq(0)").html("Select method");
        $("#method").selectpicker("refresh");
        $("#method").selectpicker();
        var obj = jQuery.parseJSON(data);
        $("#method").selectpicker("refresh");
        $("#method").selectpicker();
        $(obj).each(function () {
          var option = $("<option />");
          option.attr("value", this.value).text(this.label);
          $("#method").append(option);
        });
        $("#method").selectpicker("refresh");
        $("#method").selectpicker();
      },
    });
    $.ajax({
      type: "GET",
      url: base_url + "user/service/get_organisation",
      data: { id: $(this).val(), csrf_token_name: csrf_token },
      beforeSend: function () {
        $("#organisation option:gt(0)").remove();
        $("#organisation").selectpicker("refresh");
        $("#organisation").selectpicker();
        $("#organisation").find("option:eq(0)").html("Please wait..");
        $("#organisation").selectpicker("refresh");
        $("#organisation").selectpicker();
      },
      success: function (data) {
        $("#organisation").selectpicker("refresh");
        $("#organisation").selectpicker();
        $("#organisation").find("option:eq(0)").html("Select organisation");
        $("#organisation").selectpicker("refresh");
        $("#organisation").selectpicker();
        var obj = jQuery.parseJSON(data);
        $("#organisation").selectpicker("refresh");
        $("#organisation").selectpicker();
        $(obj).each(function () {
          var option = $("<option />");
          option.attr("value", this.value).text(this.label);
          $("#organisation").append(option);
        });
        $("#organisation").selectpicker("refresh");
        $("#organisation").selectpicker();
      },
    });
    $("#organisation").change(function () {
      $("#entity").val("default");
      $("#entity").selectpicker("refresh");

      $.ajax({
        type: "POST",
        url: base_url + "user/service/get_entity",
        data: { id: $(this).val(), csrf_token_name: csrf_token },
        beforeSend: function () {
          $("#entity option:gt(0)").remove();
          $("#entity").selectpicker("refresh");
          $("#entity").selectpicker();
          $("#entity").find("option:eq(0)").html("Please wait..");
          $("#entity").selectpicker("refresh");
          $("#entity").selectpicker();
        },
        success: function (data) {
          $("#entity").selectpicker("refresh");
          $("#entity").selectpicker();
          $("#entity").find("option:eq(0)").html("Select Entity");
          $("#entity").selectpicker("refresh");
          var obj = jQuery.parseJSON(data);
          $("#entity").selectpicker("refresh");
          $("#entity").selectpicker();
          $(obj).each(function () {
            var option = $("<option />");
            option.attr("value", this.value).text(this.label);
            $("#entity").append(option);
          });
          $("#entity").selectpicker("refresh");
          $("#entity").selectpicker();
        },
      });
    });

    $("#add_service")
      .bootstrapValidator({
        fields: {
          service_title: {
            validators: {
              remote: {
                url: base_url + "user/service/check_service_title",
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
          type: {
            validators: {
              notEmpty: {
                message: "Please select  tender type...",
              },
            },
          },
          method: {
            validators: {
              notEmpty: {
                message: "Please select procurement method...",
              },
            },
          },
          TenderNO: {
            validators: {
              notEmpty: {
                message: "Please Enter Tender No ...",
              },
            },
          },
          organisation: {
            validators: {
              notEmpty: {
                message: "Please select organisation...",
              },
            },
          },
          Entity: {
            validators: {
              notEmpty: {
                message: "Please select Entity...",
              },
            },
          },

          Closing: {
            validators: {
              notEmpty: {
                message: "Please Enter Closing  date...",
              },
            },
          },
          Opening: {
            validators: {
              notEmpty: {
                message: "Please Enter Opening  date...",
              },
            },
          },
          Target: {
            validators: {
              notEmpty: {
                message: "Please Enter Target  group...",
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
          // 'images[]': {
          //   validators: {
          //     file: {
          //       extension: 'jpeg,png,jpg,pdf,docx',
          //       type: 'image/jpeg,image/png,image/jpg,image/docx,image/pdf',
          //       message: 'The selected file is not valid. Only allowed jpeg,png files'
          //     },
          //     notEmpty:               {
          //       message: 'Please upload category image...'
          //     }
          //   }
          // }
        },
      })
      .on("success.form.bv", function (e) {
        return true;
      });
  });
  //document end

  function initialize() {
    // Create the autocomplete object, restricting the search
    // to geographical location types.
    autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */
      (document.getElementById("service_location")),
      {
        types: ["geocode"],
      }
    );

    google.maps.event.addDomListener(
      document.getElementById("service_location"),
      "focus",
      geolocate
    );
    autocomplete.addListener("place_changed", get_latitude_longitude);
  }

  function get_latitude_longitude() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();
    var key = "AIzaSyDzviwvvZ_S6Y1wS6_b3siJWtSJ5uFQHoc";
    $.get(
      "https://maps.googleapis.com/maps/api/geocode/json",
      { address: place.formatted_address, key: key },
      function (data, status) {
        $(data.results).each(function (key, value) {
          $("#service_address").val(place.formatted_address);
          $("#service_latitude").val(value.geometry.location.lat);
          $("#service_longitude").val(value.geometry.location.lng);
        });
      }
    );
  }

  function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var geolocation = new google.maps.LatLng(
          position.coords.latitude,
          position.coords.longitude
        );
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy,
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  initialize();

  /* Image Upload */

  if ($("#add, #update_service").length > 0) {
    document.addEventListener("DOMContentLoaded", init, false);

    //To save an array of attachments
    var AttachmentArray = [];

    //counter for attachment array
    var arrCounter = 0;

    //to make sure the error message for number of files will be shown only one time.
    var filesCounterAlertStatus = false;

    //un ordered list to keep attachments thumbnails
    var ul = document.createElement("ul");
    ul.className = "upload-wrap";
    ul.id = "imgList";

    // function init() {
    //     //add javascript handlers for the file upload event
    //     document.querySelector('#images').addEventListener('change', handleFileSelect, false);
    //   }

    //the handler for file upload event
    function handleFileSelect(e) {
      //to make sure the user select file/files
      if (!e.target.files) return;

      //To obtaine a File reference
      var files = e.target.files;

      // Loop through the FileList and then to render image files as thumbnails.
      for (var i = 0, f; (f = files[i]); i++) {
        //instantiate a FileReader object to read its contents into memory
        var fileReader = new FileReader();

        // Closure to capture the file information and apply validation.
        fileReader.onload = (function (readerEvt) {
          return function (e) {
            //Apply the validation rules for attachments upload
            ApplyFileValidationRules(readerEvt);

            //Render attachments thumbnails.
            RenderThumbnail(e, readerEvt);

            //Fill the array of attachment
            FillAttachmentArray(e, readerEvt);
          };
        })(f);

        // Read in the image file as a data URL.
        // readAsDataURL: The result property will contain the file/blob's data encoded as a data URL.
        // More info about Data URI scheme https://en.wikipedia.org/wiki/Data_URI_scheme
        fileReader.readAsDataURL(f);
      }
      document
        .getElementById("images")
        .addEventListener("change", handleFileSelect, false);
    }

    //To remove attachment once user click on x button
    jQuery(function ($) {
      $("div").on("click", ".upload-images .file_close", function () {
        var id = $(this).closest(".upload-images").find("img").data("id");

        //to remove the deleted item from array
        var elementPos = AttachmentArray.map(function (x) {
          return x.FileName;
        }).indexOf(id);
        if (elementPos !== -1) {
          AttachmentArray.splice(elementPos, 1);
        }

        //to remove image tag
        $(this).parent().find("img").not().remove();

        //to remove div tag that contain the image
        $(this).parent().find("div").not().remove();

        //to remove div tag that contain caption name
        $(this).parent().parent().find("div").not().remove();

        //to remove li tag
        var lis = document.querySelectorAll("#imgList li");
        for (var i = 0; (li = lis[i]); i++) {
          if (li.innerHTML == "") {
            li.parentNode.removeChild(li);
          }
        }
      });
    });

    //Apply the validation rules for attachments upload
    function ApplyFileValidationRules(readerEvt) {
      //To check file type according to upload conditions
      if (CheckFileType(readerEvt.type) == false) {
        alert(
          "The file (" +
            readerEvt.name +
            ") does not match the upload conditions, You can only upload jpg/png/gif files"
        );
        e.preventDefault();
        return;
      }

      //To check files count according to upload conditions
      if (CheckFilesCount(AttachmentArray) == false) {
        if (!filesCounterAlertStatus) {
          filesCounterAlertStatus = true;
          alert(
            "You have added more than 10 files. According to upload conditions you can upload 10 files maximum"
          );
        }
        e.preventDefault();
        return;
      }
    }

    //To check file type according to upload conditions
    function CheckFileType(fileType) {
      if (fileType == "image/jpeg") {
        return true;
      } else if (fileType == "image/png") {
        return true;
      } else if (fileType == "image/gif") {
        return true;
      } else {
        return false;
      }
      return true;
    }

    //To check file Size according to upload conditions
    function CheckFileSize(fileSize) {
      if (fileSize < 300000) {
        return true;
      } else {
        return false;
      }
      return true;
    }

    //To check files count according to upload conditions
    function CheckFilesCount(AttachmentArray) {
      //Since AttachmentArray.length return the next available index in the array,
      //I have used the loop to get the real length
      var len = 0;
      for (var i = 0; i < AttachmentArray.length; i++) {
        if (AttachmentArray[i] !== undefined) {
          len++;
        }
      }
      //To check the length does not exceed 10 files maximum
      if (len > 9) {
        return false;
      } else {
        return true;
      }
    }

    //Render attachments thumbnails.
    function RenderThumbnail(e, readerEvt) {
      var li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = [
        '<div class=" upload-images"> ' +
          '<a style="display:none;" href="javascript:void(0);" class="file_close btn btn-icon btn-danger btn-sm"><i class="far fa-trash-alt"></i></a><img class="thumb" src="',
        e.target.result,
        '" title="',
        escape(readerEvt.name),
        '" data-id="',
        readerEvt.name,
        '"/>' + "</div>",
      ].join("");

      var div = document.createElement("div");
      div.className = "FileNameCaptionStyle d-none";
      li.appendChild(div);
      div.innerHTML = [readerEvt.name].join("");
      document.getElementById("uploadPreview").insertBefore(ul, null);
    }

    //Fill the array of attachment
    function FillAttachmentArray(e, readerEvt) {
      AttachmentArray[arrCounter] = {
        AttachmentType: 1,
        ObjectType: 1,
        FileName: readerEvt.name,
        FileDescription: "Attachment",
        NoteText: "",
        MimeType: readerEvt.type,
        Content: e.target.result.split("base64,")[1],
        FileSizeInBytes: readerEvt.size,
      };
      arrCounter = arrCounter + 1;
    }
  }
})(jQuery);
