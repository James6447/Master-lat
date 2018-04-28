<!--
//去掉空白
function Trim(str)
{
	str = new String(str);
   return str.replace(/^\s*|\s*$/g,"");
}

//判斷是否為空
function isEmpty(obj,fldname)
{
	if( obj == null || Trim(obj.value) == "")
	{
		 alert("【"+fldname+"】欄位不得為空白!!");
		obj.focus();
		return false;
 	}
 	return true;
}

function isEmptyCo(obj,fldname)
{
	if( obj == null || Trim(obj.value) == "")
	{
		 alert("【"+fldname+"】欄位不得為空白!!");
		obj.focus();
		return false;
 	}
 	return true;
}

//判斷是否皆為空
function isBothEmpty(obj,fldname, obj2, fldname2) {
	if( (obj == null && obj2 == null) || (Trim(obj.value) == "" && Trim(obj2.value) == ""))
	{
		 alert("【"+fldname+"】【"+fldname2+"】欄位不得均為空白!!");
		obj.focus();
		return false;
 	}
 	return true
}

//判斷是否為數字
function isNum(obj,fldname){
 	strRef = "1234567890";
 	if(! isEmpty(obj,fldname))return false;
 	for (i=0;i<obj.value.length;i++)
 	{
		tempChar= obj.value.substring(i,i+1);
		if (strRef.indexOf(tempChar,0)==-1)
		{
			 alert("【"+fldname+"】欄位必須為數字!!");
			obj.focus();
   			return false;
  		}
 	}
 	return true
}

//判斷是否為電話號碼
function isTelNo(obj,fldname){
 	strRef = "1234567890-()";

		if(! isEmpty(obj,fldname))return false;
	 	for (i=0;i<obj.value.length;i++)
	 	{
			tempChar= obj.value.substring(i,i+1);
			if (strRef.indexOf(tempChar,0)==-1)
			{
				 alert("【"+fldname+"】欄位必須為數字!!");
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
		 alert("【"+fldname+"】欄位長度必須為"+maxlen+"!!");
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
		 alert("【"+fldname+"】欄位長度超過"+maxlen+"!!");
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
