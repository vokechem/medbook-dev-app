@extends('layouts.admin')

@section('content')
<div class="row">
  <div class="col-sm-12">
    <div class="iq-card">
      <div class="iq-card-header d-flex justify-content-between">
        <div class="iq-header-title">
          <h4 class="card-title">Patient Records</h4>
        </div>
      </div>
      <div class="col-sm-12">

        @if(session()->get('success'))
        <div class="alert alert-success">
          {{ session()->get('success') }}
        </div>
        @elseif ($errors->any())
        <div class="alert alert-danger">
          <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
          </ul>
        </div>
        <br />
        @endif
      </div>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">
                        <i class="fa fa-plus"></i>Add New
                           </button>
                        <div class="iq-card-body">
                           <div class="table-responsive">
                              <table id="datatable" class="table table-striped table-bordered" >
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Date Of birth</th>
                               <th>Gender</th>
                               <th>Type of Service</th>
                               <th> General Comments</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                     	@foreach($patient as $pa)
            <tr>
              <td>{{$pa->name}}</td>
              <td>{{$pa->dob}}</td>
              <td>{{$pa->gender->name}}</td>
              <td>{{$pa->service->name}}</td>
               <td>{{$pa->comments}}</td>
              <td>
									<button class="btn btn-info" data-pename="{{$pa->pename}}" data-petype="{{$pa->petype}}"  data-mobile="{{$pa->mobile}}" 
                  data-email="{{$pa->email}}" data-pobox="{{$pa->pobox}}" data-town="{{$pa->town}}" 
                  data-postalcode="{{$pa->postalcode}}"  data-logo="{{$pa->logo}}"
                   data-telephone="{{$pa->telephone}}"  data-id={{$pa->id}} data-toggle="modal" data-target="#edit1">Edit</button>
									/
									<button class="btn btn-danger" data-id={{$pa->id}} data-toggle="modal" data-target="#delete">Delete</button>
								</td>
            </tr>
						@endforeach
                       </tbody>
                   </table>
                           </div>
                        </div>
                     </div>
            </div>
         </div>
       <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog"  aria-hidden="true">
                              <div class="modal-dialog modal-lg">
                                 <div class="modal-content">
                                    <div class="modal-header">
                                       <h5 class="modal-title">Add  patient</h5>
                                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                       <span aria-hidden="true">&times;</span>
                                       </button>
                                    </div>
                                    <form method="post" action="{{ route('patient.store') }}" enctype="multipart/form-data">
            {{csrf_field()}}
            <div class="modal-body">
          @include('admin.patient.form')
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
         </form>
                                 </div>
                              </div>
                           </div>

<div class="modal fade" id="edit1">
<div class="modal-dialog modal-lg">
                                 <div class="modal-content">
                                    <div class="modal-header">
                                       <h5 class="modal-title">Add Patient details</h5>
                                       <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                       <span aria-hidden="true">&times;</span>
                                       </button>
                                    </div>
                                    <form action="{{url('patient','id')}}" method="post"enctype="multipart/form-data">
            {{method_field('patch')}}
      		{{csrf_field()}}
            <div class="modal-body">
            <input type="hidden" name="id" id="id" value="">
          @include('admin.patient.form')
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
         </form>
      </div>
     </div>
  </div>    
<div class="modal fade" id="delete">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Delete patient</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="{{route('patient.destroy','id')}}" method="post">
      		{{method_field('delete')}}
      		{{csrf_field()}}
	        <div class="modal-body">
              <p>Are you sure you want to delete this?</p>
	      		<input type="hidden" name="id" id="id" value="">

          </div>
          <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-success" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-danger">Delete</button>
          </div>
        </form>
      </div>
    </div>
  </div>



  @endsection