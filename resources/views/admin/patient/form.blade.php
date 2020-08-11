<div class=" row align-items-center">
   <div class="form-group col-sm-12">
      <label for="fname">Name:</label>
      <input type="text" class="form-control" name="name" id="name" required>
   </div>
   <div class="form-group col-sm-6">
      <label for="dob">dob:</label>
      <input type="date" class="form-control" id="dob" name="dob" required>
   </div>
   <div class="form-group col-sm-6">
      <label for="gender_id">Pe Type:</label>
      <select id='gender_id' name='gender_id' class='form-control'>
         <option value='0'>-- Select gender --</option>
         @foreach($genderdata['data'] as $gender)
         <option value='{{ $gender->id }}'>{{ $gender->name }}</option>
         @endforeach

      </select>
   </div>
   <div class="form-group col-sm-6">
      <label for="service_id">Type of Service:</label>
      <select id='service_id' name='service_id' class='form-control'>
         <option value='0'>-- Select gender --</option>
         @foreach($servicedata['data'] as $service)
         <option value='{{ $service->id }}'>{{ $service->name }}</option>
         @endforeach

      </select>
   </div>
   <div class="form-group col-sm-12">
      <label for="comments">General comment:</label>
      <input type="text" class="form-control" id="comments" name="comments" required>
   </div>
</div>
