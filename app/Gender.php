<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gender extends Model
{
    protected $fillable = [
        'name'
    ];
    protected $table = 'tbl_gender';
}
