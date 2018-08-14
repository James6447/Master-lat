function datacheck() {
  var theForm = document.forms[0];
  var theURL = "";
  var theURL1 = "";
  if (
    !isBothEmpty(
      theForm.company,
      "公司名稱",
      theForm.username,
      "聯絡人姓名",
      theForm.phone,
      "連絡電話",
      theForm.email,
      "電子郵件",
      theForm.description,
      "詢問內容"
    )
  )
    return false;

  if (!isEmpty(theForm.company, "公司名稱")) return false;
  if (!isLengthOver(theForm.company, 20, "公司名稱")) return false;

  if (!isEmptyCo(theForm.username, "聯絡人姓名")) return false;
  if (!isLengthOver(theForm.username, 20, "聯絡人姓名")) return false;

  if (!isTelNo(theForm.phone, "連絡電話")) return false;
  // if(theForm.telno.length <8) return false;
  if (!validateEmail(theForm.email.value)) {
    document.getElementById("c4").innerHTML = "電子郵件(E-mail)格式不合!!";
    document.getElementById("c4").style.marginLeft;
    document.getElementById("c4").style.color = "red";
    document.getElementById("c4").style.fontSize = "16px";
    obj.focus();
    return false;
  }
  if (!isEmptyDES(theForm.description, "詢問內容")) return false;

  theURL = "actionemail.php?company=" + theForm.company.value;
  theURL = theURL + "&username=" + theForm.username.value;
  theURL = theURL + "&phone=" + theForm.phone.value;
  theURL = theURL + "&email=" + theForm.email.value;
  theURL = theURL + "&description=" + theForm.description.value;
  theURL = encodeURI(theURL);
  getData(theURL);
}

function getData(theURL) {
  var req = new XMLHttpRequest();
  // req.open("get", "http://localhost:8888/Master-lat/lat/" + theURL);
  req.open("get", "http://www.lat.tw/" + theURL);
  req.send();
  bootbox.alert("感謝您的留言，您的建議是我們前進的動力!");
  $("input[type=text], textarea").val("");
}

// function getData(theURL){
//   $.get(theURL,
//     function($status){
//       bootbox.alert("感謝您的留言，您的建議是我們前進的動力!");
//     });
// }

// function getData(theURL) {
// if (datacheck==true){
//  bootbox.alert("感謝您的留言，您的建議是我們前進的動力!");

//  function getData(theURL) {
//   $.ajax({
//     url: "sendemail.php",
//     type: "GET",
//     dataType: JSON,
//     success: function() {
//       alert("fuck");
//     },

//     error: function() {
//       alert("ERROR!!!");
//     }
//   });
// }
