function validate() {
    // validate zip code 
    var zip = $("#ZIP").val(); 
    if(isNaN(zip) || zip.length != 5) { 
        alert("ZIP code is not valid, must be all numbers and have 5 digits!"); 
        return false; 
    } 
}