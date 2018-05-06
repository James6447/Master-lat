var boxweight1=window.innerWidth;
  $(window).resize(function() {
    var boxweight=window.innerWidth;//100%當著減少67.5增加
    var dom=$(".containerheader").width()//67.5%
    var dom2=$("#latHeaderMenu").width();
    console.log(boxweight);///外面
    //console.log(dom2);
    console.log(dom);///裡面
  //  console.log(dom2);
if(boxweight>boxweight1)
  {
    boxweight1=boxweight1+(boxweight-boxweight1)
  }
    var calcpx=((boxweight/boxweight1)*100);
    var i=100-calcpx;
    var k=67.5+i;
    $(".containerheader").css({"width":k+'%'});
  });


  var boxweight=window.innerWidth;//100%當著減少67.5增加
  var dom=$(".containerheader").width()//67.5%
  var dom2=$("#latHeaderMenu").width();
  //onsole.log(boxweight);///外面
  //console.log(dom2);
  //console.log(dom);///裡面
  //  console.log(dom2);
  if(boxweight>boxweight1)
  {
  boxweight1=boxweight1+(boxweight-boxweight1)
  }
  var calcpx=((boxweight/boxweight1)*100);
  var i=100-calcpx;
  var k=67.5+i;
  $(".containerheader").css({"width":k+'%'});
