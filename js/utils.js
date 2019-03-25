/**
 * util functions
 * @author paul
 * @description 
 */

function checkFormUpload(form){
  var inputs = form.getElementsByTagName('input'),len = inputs.length;
  for(var i=0;i<len;i++){
    if(inputs[i].type == "file"){
      return checkUploadType(inputs[i])
      break;
    }
  }
  return false
}

function checkUploadType(file) {
  if(!file){
    return false;
  }
  var allowed = [".jpg", ".gif", ".png", ".jpeg"];
  var fileName = file.value;
  var seat = fileName.lastIndexOf(".");
  var extension = fileName.substring(seat).toLowerCase();
  for (var i = 0; i < allowed.length; i++) {
      if (!(allowed[i] != extension)) {
          return true;
      }
  }
  alert("Please select an images !");
  return false;
}
