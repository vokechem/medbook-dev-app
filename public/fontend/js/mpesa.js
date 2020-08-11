$(function(){
    $("#payNow").submmit(function (e) {
        e.preventDefault();
        var $data = (this).serializeArray();
        $.ajax({
            url:'/mPesa/',
            data: data,
            type: 'POST',
            success: function (res) {
                
            }, 
            error: function () {
                
            }
        });
        
    });
});