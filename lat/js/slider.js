window.onload = function() {

//nav
  $("#head").click(function() {
      $('html, body').animate({
          scrollTop: $("#latHeaderTitle").offset().top
      }, 2000);
  });


  $("#main").click(function() {
      $('html, body').animate({
          scrollTop: $("#latMain").offset().top
      }, 2000);
  });

  $("#project").click(function() {
      $('html, body').animate({
          scrollTop: $("#latContent").offset().top
      }, 2000);
  });

  $("#member").click(function() {
      $('html, body').animate({
          scrollTop: $("#latContentR2").offset().top
      }, 2000);
  });

  $("#contact").click(function() {
      $('html, body').animate({
          scrollTop: $("#latFooter").offset().top
      }, 2000);
  });



//RWD
  var windos = $(window).width();

  var latFooter = $('#latFooterTitle_1').width();
  var FootMsg_4 = $('#latFooterMsg_4').width();
  var input = $("input").width();
  var textarea = FootMsg_4+input;

  var lenght = $('#latFooterMsg_3').width() + input + FootMsg_4;
  var button = latFooter - lenght;
  $('textarea').css( "width", textarea);
  if(button<0){
    $('#latFooterItem_8').css("margin-right","0px");
    $('#latFooterMsg_8').css("text-align",'center');
  }
  else {
    $('#latFooterItem_8').css("margin-right",button);
    $('#latFooterMsg_8').css("text-align",'right');
  }




$( window ).resize(function() {
  var latFooter = $('#latFooterTitle_1').width();
  var FootMsg_4 = $('#latFooterMsg_4').width();
  var input = $("input").width();
  var textarea = FootMsg_4+input;

  var lenght = $('#latFooterMsg_3').width() + input + FootMsg_4;
  var button = latFooter - lenght;

  $('textarea').css( "width", textarea);
  if(button<0){
    $('#latFooterItem_8').css("margin-right","0px");
    $('#latFooterMsg_8').css("text-align",'center');
  }
  else {
    $('#latFooterItem_8').css("margin-right",button);
    $('#latFooterMsg_8').css("text-align",'right');
  }

});


//slideshow style interval
var autoSwap = setInterval( swap,3500);

//pause slideshow and reinstantiate on mouseout


//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel li.items').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('li.items').each(function(index) {
    items[index] = $(this).text();
});

//swap images functionsss
function swap(action) {
  var direction = action;

  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }

    $('.right-pos').removeClass('right-pos').addClass('back-pos');
    $('.main-pos').removeClass('main-pos').addClass('right-pos');
    $('.left-pos').removeClass('left-pos').addClass('main-pos');
    $('#'+leftitem+'').removeClass('back-pos').addClass('left-pos');

    startItem--;
    if(startItem < 1) {
      startItem = itemCount;
    }
  }

  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(positionvalue) {
      if(positionvalue != 'leftposition') {
        //increment image list id
        position++;

        //if final result is greater than image count, reset position.
        if((startItem+position) > resetCount) {
          position = 1-startItem;
        }
      }

      //setting the left positioned item
      if(positionvalue == 'leftposition') {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;

        //reset last image in list to left position if first image is in main position
        if(position < 1) {
          position = itemCount;
        }
      }

      return position;
    }

   $('#'+ startItem +'').removeClass('main-pos').addClass('left-pos');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos').addClass('main-pos');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos').addClass('right-pos');
   $('#'+ pos('leftposition') +'').removeClass('left-pos').addClass('back-pos');

    startItem++;
    position=0;
    if(startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  swap('clockwise');
});

//prev button click function
$('#prev').click(function() {
  swap('counter-clockwise');
});

//if any visible items are clicked
$('li').click(function() {
  if($(this).attr('class') == 'items left-pos') {
     swap('counter-clockwise');
  }
  else {
    swap('clockwise');
  }
});


// your standard jquery code goes here with $ prefix
// best used inside a page with inline code,
// or outside the document ready, enter code here

  //YOUR JQUERY CODE
}
