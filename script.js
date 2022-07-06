// =====================
// Age Calculator
// =====================

var date=new Date();
var _toyear=date.getFullYear();
var _tomonth=date.getMonth()+1;
var _todate=date.getDate();

function calculation(){
    var _byear=parseInt(document.getElementById("byear").value);
    var _bmonth=parseInt(document.getElementById("bmonth").value);
    var _bdate=parseInt(document.getElementById("bdate").value);


    if( _byear <1 || _bmonth <1 || _bdate <1 ){
        alert("Invalid Number");
    }
    else {
        var caldate=0;
    
        if(_tomonth==1){
            caldate=31;
        }
        else if(_tomonth == 2){
            if(_toyear % 4 == 0 && _toyear %100 ==0 && _toyear %400 == 0){
                caldate=29;
            }
            else{
                caldate=28;
            }
            
        }
        else if(_tomonth == 3){
            caldate=31;
        }
        else if(_tomonth == 4){
            caldate=30;
        }
        else if(_tomonth == 5){
            caldate=31;
        }
        else if(_tomonth == 6){
            caldate=30;
        }
        else if(_tomonth == 7){
            caldate=31;
        }
        else if(_tomonth == 8){
            caldate=31;
        }
        else if(_tomonth == 9){
            caldate=30;
        }
        else if(_tomonth == 10){
            caldate=31;
        }
        else if(_tomonth == 11){
            caldate=30;
        }
        else if(_tomonth == 12){
            caldate=31;
        }
    
    
        if(_todate < _bdate){
    
            _todate=((_todate+caldate)-_bdate);
            _tomonth = ((_tomonth-1));
    
            if(_tomonth < _bmonth){
                _tomonth=((_tomonth+12)-_bmonth);
                _toyear=((_toyear-1)-_byear);
            }
            else{
                _tomonth=_tomonth-_bmonth;
                _toyear=_toyear-_byear;
            }
            document.getElementById("cyear").value=_toyear;
            document.getElementById("cmonth").value=_tomonth;
            document.getElementById("cdate").value=_todate;
    
    
        }
        else if(_tomonth < _bmonth)
        {
            _todate=_todate-_bdate;
            _tomonth=((_tomonth+12)-_bmonth);
            _toyear=((_toyear-1)-_byear);
    
            document.getElementById("cyear").value=_toyear;
            document.getElementById("cmonth").value=_tomonth;
            document.getElementById("cdate").value=_todate;
        }
        else{
            _todate=_todate-_bdate;
            _tomonth=_tomonth-_bmonth;
            _toyear=_toyear-_byear;
    
            document.getElementById("cyear").value=_toyear;
            document.getElementById("cmonth").value=_tomonth;
            document.getElementById("cdate").value=_todate;
        }
    }
 
   


}

// Reset Function

function clear_inputs(){
    inputs=document.getElementsByClassName('inputs')
    for(input of inputs){
    	input.value=' ';
    }
  }


  // =====================
//  BMI Calculator
// =====================


function bmi(){

    var _weight = parseInt( document.getElementById("weight").value);
    var _height_foot = parseInt( document.getElementById("heightInFoot").value);
    var _height_inchi = parseInt( document.getElementById("heightInInchi").value);


    if( _weight <1 || _height_foot <1 || _height_inchi <1 ){
        alert("Invalid Number");
    }
    else {
        var _m = (((_height_foot*12)+_height_inchi)*0.0254);

        var _m2 =  (_m*_m);
        var _bmi =  (_weight/_m2);
    }


    

    if(_bmi < 18.5){

        _bmi_result = "Your BMI is Under Weight and Result is : "+_bmi.toFixed(4);
        document.getElementById("result").value= _bmi_result;
    }

    else if (_bmi > 18.5 && _bmi < 25){

        _bmi_result = "Your BMI is Normal and Result is : "+_bmi.toFixed(4);
        document.getElementById("result").value= _bmi_result;
    }

    else if (_bmi > 25 && _bmi < 30){

        _bmi_result = "Your BMI is Overweight and Result is : "+_bmi.toFixed(4);
        document.getElementById("result").value= _bmi_result;
    }

    else if (_bmi > 30){

        _bmi_result = "Your BMI is Obese and Result is : "+_bmi.toFixed(4);
        document.getElementById("result").value= _bmi_result;
    }
  
    
    
}

// Reset Function

function clear_inputs1(){
    inputs=document.getElementsByClassName('input1')
    for(input of inputs){
    	input.value=' ';
    }
  }


// ====================
// Square Calculator
// ====================

function square(){

    var _a = parseInt(document.getElementById("firstVal").value);

    if( _a < 1){
        alert("Invalid Number");
    }
    else {
        _a = (_a * _a);
        
        document.getElementById("squareResult").value = _a;
    }
}



// Reset Function

function clear_input2(){
    inputs=document.getElementsByClassName('input2')
    for(input of inputs){
    	input.value=' ';
    }
  }
