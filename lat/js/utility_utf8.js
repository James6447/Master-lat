<!--
//去掉空白
function Trim(str)
{
	str = new String(str);
   return str.replace(/^\s*|\s*$/g,"");
}


function change(c,fldname){
	document.getElementById(c).innerHTML =""+fldname+"欄位不得為空白!!";
	document.getElementById(c).style.color = "red";
	document.getElementById(c).style.float = "left";
	document.getElementById(c).style.fontSize = "16px";
}

//判斷是否為空
function isEmpty(obj,fldname)
{
	if( obj == null || Trim(obj.value) == "")
	{
		change("c1,fldname");
		 // alert("【"+fldname+"】欄位不得為空白!!");
		obj.focus();
		return false;
 	}
	else{
		document.getElementById("c1").innerHTML ="&nbsp&nbsp&nbsp";
		document.getElementById("c1").style.float = "none";
 	return true;
	}
}


function isEmptyCo(obj,fldname)
{
	if( obj == null || Trim(obj.value) == "")
	{
		 change("c2,fldname");
		 obj.focus();
		 return false;
 	}
	else{
		document.getElementById("c2").innerHTML ="&nbsp&nbsp&nbsp";
		document.getElementById("c2").style.float = "none";
 	return true;
	}
}

function isEmptyNum(obj,fldname){
	if( obj == null || Trim(obj.value) == "")
	{
		 change("c3,fldname");
		 obj.focus();
		 return false;
	}
	else{
		document.getElementById("c3").innerHTML ="&nbsp&nbsp&nbsp";
		document.getElementById("c3").style.float = "none";
	return true;
	}
}

//判斷是否皆為空
function isBothEmpty(obj,fldname, obj2, fldname2,obj3,fldname3,obj4,fldname4) {
	if( (obj == null && obj2 == null && obj3 == null && obj4 == null) || (Trim(obj.value) == "" && Trim(obj2.value) == "" && Trim(obj3.value) == "" &&Trim(obj4.value) == "" ))
	{
		//  alert("【"+fldname+"】【"+fldname2+"】欄位不得均為空白!!");
		// obj.focus();
		// return false;
	 change("c1",fldname);
	 change("c2",fldname2);
	 change("c3",fldname3);
	 change("c4",fldname4);
	 return false;
 	}

 	return true;
}

//判斷是否為電話號碼
function isTelNo(obj,fldname){
 	strRef = "1234567890-()";

		if(! isEmptyNum(obj,fldname))return false;
	 	for (i=0;i<obj.value.length;i++)
	 	{
			tempChar= obj.value.substring(i,i+1);
			if (strRef.indexOf(tempChar,0)==-1)
			{
				 alert(""+fldname+"欄位必須為數字!!");
				obj.focus();
	   			return false;
	  		}
	 	}

	 	return true;
}


//判斷欄位長度是否足夠
function isLength(obj,maxlen,fldname)
{
	var len=0;
	len=obj.value.length;
	if (len < maxlen)
	{
		 alert(""+fldname+"欄位長度必須為"+maxlen+"!!");
		obj.focus();
   		return false;
	}
	return true;
}

//判斷欄位長度是否超過
function isLengthOver(obj,maxlen,fldname)
{
	var len=0;
	len=obj.value.length;
	if (len > maxlen)
	{
		 alert(""+fldname+"欄位長度超過"+maxlen+"!!");
		obj.focus();
   		return false;
	}
	return true;
}

function validateEmail(elementValue, fldname){
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailPattern.test(elementValue);
}

-->
