<?php

namespace App\Http\Controllers;

use App\Patient;
use App\Service;
use App\Gender;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    
        $servicedata['data'] = Service::orderby("name","asc")
        ->select('id','name')
        ->get();
        $genderdata['data'] = Gender::orderby("name","asc")
        ->select('id','name')
        ->get();
        $patient = Patient::all();
        return view('admin.patient.index',compact('patient', 'servicedata','genderdata'));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required',
            'dob'=>'required',
            'gender_id'=>'required',
            'service_id'=>'required',
            'comments'=>'required',
        ]);

        $patient = new Patient([
            'name' => $request->get('name'),
            'dob' => $request->get('dob'),
            'gender_id' => $request->get('gender_id'),
            'service_id' => $request->get('service_id'),
            'comments' => $request->get('comments')
        ]);
        $patient->save();
        return redirect('/patient')->with('success', 'Patient saved!');
    }
    public function getpatient($patientid=0){
        $patient['data'] = Patient::orderby("Name","asc")
        			->select('id','name')
        			->where('Name',$patientid)
        			->get();
  
        echo json_encode($patient);
        exit;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        //
    }
}
