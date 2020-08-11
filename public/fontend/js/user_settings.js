(function($) {
	"use strict";
	var base_url=$('#base_url').val();
	var BASE_URL=$('#base_url').val();
	var csrf_token=$('#csrf_token').val();
	var csrfName=$('#csrfName').val();
	var csrfHash=$('#csrfHash').val();

	var country_id=$('#country_id_value').val();
	var state_id=$('#state_id_value').val();
	var city_id=$('#city_id_value').val();
	
	$( ".datepicker" ).datepicker({ 
		dateFormat: 'dd-mm-yy', 
		changeMonth: true, 
		changeYear: true,
		yearRange: '1945:'+(new Date).getFullYear() 
	}); 
 $( document ).ready(function() {
	country_changes(country_id);
	state_changes(state_id);
	$('.openfile').on('click',function(){
      openfile();
    }); 
    $('#country_id').on('change',function(){
     	var id=$(this).val();
      country_changes(id);
    });  $('#state_id').on('change',function(){
     	var id=$(this).val();
      state_changes(id);
    }); 
});

	function  country_changes(id) {
		var country_id=$('#country_id_value').val();
		var state_id=$('#state_id_value').val();
		var city_id=$('#city_id_value').val();
		if(id!=''){
			$.ajax({
				type: "POST",
				url: base_url+"user/service/get_state_details",
				data:{id:id,csrf_token_name:csrf_token}, 
				dataType:'json',
				beforeSend :function(){
					$('#state_id').find("option:eq(0)").html("Please wait..");
				}, 
				success: function (data) {
					$('#state_id option').remove();
					if(data!=''){
						var add='';
						add +='<option value="">Select State</option>';
						$(data).each(function( index,value ) {
							add +='<option value='+value.id+'>'+value.name+'</option>';
						});
						$('#state_id').append(add);

						if(state_id!=''){
							$('#state_id option[value='+state_id+']').attr('selected','selected');
						}

					}
				}
			});
		}
	}
	function  state_changes(id) { 
		var country_id=$('#country_id_value').val();
		var state_id=$('#state_id_value').val();
		var city_id=$('#city_id_value').val();
		if(id!=''){
			$.ajax({
				type: "POST",
				url: base_url+"user/service/get_city_details",
				data:{id:id,csrf_token_name:csrf_token}, 
				dataType:'json',
				beforeSend :function(){
					$('#city_id').find("option:eq(0)").html("Please wait..");
				}, 
				success: function (data) {
					$('#city_id option').remove();
					if(data!=''){
						var add='';
						add +='<option value="">Select City</option>';
						$(data).each(function( index,value ) {
							add +='<option value='+value.id+'>'+value.name+'</option>';
						});
						$('#city_id').append(add);
						if(city_id!=''){
							$('#city_id option[value='+city_id+']').attr('selected','selected');
						}
					}
				}
			});
		}
	}
})(jQuery);