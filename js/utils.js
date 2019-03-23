/**
 * util functions
 * @author paul
 * @description 
 */

function checkUploadType() {
  var allowed = [".jpg", ".gif", ".png", ".jpeg"];
  var fileName = document.getElementById("file_logo").value;
  var seat = fileName.lastIndexOf(".");
  var extension = fileName.substring(seat).toLowerCase();
  for (var i = 0; i < allowed.length; i++) {
      if (!(allowed[i] != extension)) {
          return true;
      }
  }
  alert("不支持" + extension + "格式");
  return false;
}
