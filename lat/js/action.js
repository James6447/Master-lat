

function datacheck()
{
     var theForm = document.forms[0];
     var theURL="" ;

     if (! isEmpty(theForm.company, "公司名稱")) return false;
     if (! isLengthOver(theForm.company,20,"公司名稱")) return false;

     if (! isEmpty(theForm.username, "聯絡人姓名")) return false;
     if (! isLengthOver(theForm.username,20,"聯絡人姓名")) return false;

     if (! isTelNo(theForm.phone,"連絡電話")) return false;
     // if(theForm.telno.length <8) return false;
     if (! validateEmail(theForm.email.value)) {
        alert("【主要電子郵件(E-mail)】格式不合!!");
        return false ;
        }

    theURL="actionemail.php?company="+theForm.company.value ;
    theURL= theURL + "&username=" + theForm.username.value ;
    theURL= theURL + "&phone=" + theForm.phone.value ;
    theURL= theURL + "&email=" + theForm.email.value ;
    theURL= encodeURI(theURL);
 	  location.href= theURL;
}
