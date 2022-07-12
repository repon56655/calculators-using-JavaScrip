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


  
// ====================
// (A+B)^2 Calculator
// ====================

function aplusb_wholeSquare(){

    var _a = parseInt(document.getElementById("AValue").value);
    var _b = parseInt(document.getElementById("BValue").value);

    if( _a < 1 || _b < 1){
        alert("Invalid Number");
    }
    else {
        _a = (_a + _b)*(_a + _b);
        
        document.getElementById("aplusb_wholeSquare_result").innerHTML = "Answer is: " + _a;
    }
}



// Reset Function

function clear_input4(){
    inputs=document.getElementsByClassName('input4')
    for(input of inputs){
    	input.value=' ';
    }
  }


   
// ====================
// (A+B)^3 Calculator
// ====================

function aplusb_wholeCube(){

    var _a = parseInt(document.getElementById("A3Value").value);
    var _b = parseInt(document.getElementById("B3Value").value);

    if( _a < 1 || _b < 1){
        alert("Invalid Number");
    }
    else {
        _a = (_a + _b)*(_a + _b)*(_a + _b);
        
        document.getElementById("aplusb_wholeCube_result").innerHTML = "Answer is: " + _a;
    }
}



// Reset Function

function clear_input5(){
    inputs=document.getElementsByClassName('input5')
    for(input of inputs){
    	input.value=' ';
    }
  }

  
   
// ====================
// Prime Number Checker
// ====================

function randp_checker(){

    var _a = parseInt(document.getElementById("primeValue1").value);
    var _b = parseInt(document.getElementById("primeValue2").value);


    if( _a <= 0 || _b <= 0 ){
        alert("Invalid Number");
    }
    else{
        var _r = (_a/_b);
        var _p = (_a*_b);

        document.getElementById("randp1").innerHTML = "Resistance is: " + _r;
        document.getElementById("randp2").innerHTML = "Power is: " + _p;
 
    }
    
}



// Reset Function

function clear_input6(){
    inputs=document.getElementsByClassName('input6')
    for(input of inputs){
    	input.value=' ';
    }
  }



// ====================
// Currency Converter
// ====================

function currency_convert_function(){

    var _a = document.getElementById("mySelect1").value;
    var _b = document.getElementById("mySelect2").value;
    var _c = parseInt(document.getElementById("currency_value").value);


    if( _a == "USD" && _b == "BDT" ){
        
        var _cal = (_c * 94.20);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " USD = " + _cal_fixed + " BDT";
    }
    else if( _a == "CAD" && _b == "BDT" ){
        
        var _cal = (_c * 72.23);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " CAD = " + _cal_fixed + " BDT";
    }
    else if( _a == "EURO" && _b == "BDT" ){
        
        var _cal = (_c * 94.23);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " EURO = " + _cal_fixed + " BDT";
    }
    else if( _a == "BDT" && _b == "BDT" ){
        
        var _cal = (_c * 1);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " BDT = " + _cal_fixed + " BDT";
    }

    if( _a == "USD" && _b == "USD" ){
        
        var _cal = (_c * 1);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " USD = " + _cal_fixed + " USD";
    }
    else if( _a == "CAD" && _b == "USD" ){
        
        var _cal = (_c * 0.77);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " CAD = " + _cal_fixed + " USD";
    }
    else if( _a == "EURO" && _b == "USD" ){
        
        var _cal = (_c * 0.982095);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " EURO = " + _cal_fixed + " USD";
    }
    else if( _a == "BDT" && _b == "USD" ){
        
        var _cal = (_c * 0.011);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " BDT = " + _cal_fixed + " USD";
    }


    if( _a == "USD" && _b == "CAD" ){
        
        var _cal = (_c * 1.30);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " USD = " + _cal_fixed + " CAD";
    }
    else if( _a == "CAD" && _b == "CAD" ){
        
        var _cal = (_c * 1);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " CAD = " + _cal_fixed + " CAD";
    }
    else if( _a == "EURO" && _b == "CAD" ){
        
        var _cal = (_c * 1.31);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " EURO = " + _cal_fixed + " CAD";
    }
    else if( _a == "BDT" && _b == "CAD" ){
        
        var _cal = (_c * 0.014);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " BDT = " + _cal_fixed + " CAD";
    }

    if( _a == "USD" && _b == "EURO" ){
        
        var _cal = (_c * 0.982095);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " USD = " + _cal_fixed + " EURO";
    }
    else if( _a == "CAD" && _b == "EURO" ){
        
        var _cal = (_c * 0.77);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " CAD = " + _cal_fixed + " EURO";
    }
    else if( _a == "EURO" && _b == "EURO" ){
        
        var _cal = (_c * 1);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " EURO = " + _cal_fixed + " EURO";
    }
    else if( _a == "BDT" && _b == "EURO" ){
        
        var _cal = (_c * 0.011);
        var _cal_fixed = _cal.toFixed(2);
        document.getElementById("currency_result").innerHTML = _c + " BDT = " + _cal_fixed + " EURO";
    }
    
}

// Reset Function

function clear_input7(){
    inputs=document.getElementsByClassName('input7')
    for(input of inputs){      
    	input.value=' ';
    }
    var x = document.getElementById("input7");
        x.style.display = "none";
  }








