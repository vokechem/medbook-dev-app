<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    protected $fillable = ['name', 'gender_id','dob', 'service_id', 'comments'];
    protected $table = 'tbl_patient';
    public  function gender()
    {
        return $this->belongsTo('App\Gender');
    }

    public function service()
    {
        return $this->belongsTo('App\Service');
    }

}
