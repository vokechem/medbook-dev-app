@extends('layouts.admin')

@section('content')
<div class="row">
            <div class="col-sm-12">
                  <div class="iq-card">
                        <div class="iq-card-header d-flex justify-content-between">
                           <div class="iq-header-title">
                              <h4 class="card-title"> Gender</h4>
                           </div>
                        </div>
                        <div class="col-sm-12">

  @if(session()->get('success'))
    <div class="alert alert-success">
      {{ session()->get('success') }}  
    </div>
  @endif
</div>
                        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#add">
                        <i class="fa fa-plus"></i> add New
                           </button>
                        <div class="iq-card-body">
                           <div class="table-responsive">
                              <table id="datatable" class="table table-striped table-bordered" >
                       <thead>
                           <tr>
                               <th>Name</th>
                               <th>Action</th>
                           </tr>
                       </thead>
                       <tbody>
                     	@foreach($gender as $Us)
            <tr>
              <td>{{$Us->name}}</td>
              <td>
									<button class="btn btn-info" data-mytitle="{{$Us->name}}" data-mydescription="{{$Us->description}}" data-id={{$Us->id}} data-toggle="modal" data-target="#edit">Edit</button>
									/
									<button class="btn btn-danger" data-id={{$Us->id}} data-toggle="modal" data-target="#delete">Delete</button>
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
<!--  add modal  -->
<div class="modal fade" id="add">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">New gender </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form method="post" action="{{ route('gender.store') }}">
            {{csrf_field()}}
            <div class="modal-body">
          @include('admin.gender.form')
            </div>
            <div class="modal-footer justify-content-between">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save</button>
            </div>
         </form>
          </div>
          <!-- /.modal-content -->
        </div>
      </div>
<!-- edit modal -->

 @endsection
