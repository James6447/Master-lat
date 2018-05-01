window.onload = function() {
//slideshow style interval
var autoSwap = setInterval( swap,3500);

//pause slideshow and reinstantiate on mouseout
$('.carousel-1 ul,.carousel-1 span').hover(
function () {
  clearInterval(autoSwap);
},
function () {
 autoSwap = setInterval( swap,3500);
});

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $('.carousel-1 li.items-1').length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$('.carousel-1 li.items-1').each(function(index) {
    items[index] = $(this).text();
});

//swap images functionsss
function swap(action) {
  var direction = action;

  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.left-pos-1').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemCount;
    }

    $('.right-pos-1').removeClass('right-pos-1').addClass('back-pos-1');
    $('.main-pos-1').removeClass('main-pos-1').addClass('right-pos-1');
    $('.left-pos-1').removeClass('left-pos-1').addClass('main-pos-1');
    $('#'+leftitem+'').removeClass('back-pos-1').addClass('left-pos-1');

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

   $('#'+ startItem +'').removeClass('main-pos-1').addClass('left-pos-1');
   $('#'+ (startItem+pos()) +'').removeClass('right-pos-1').addClass('main-pos-1');
   $('#'+ (startItem+pos()) +'').removeClass('back-pos-1').addClass('right-pos-1');
   $('#'+ pos('leftposition') +'').removeClass('left-pos-1').addClass('back-pos-1');

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
$('.carousel-1 li').click(function() {
  if($(this).attr('class') == 'items1 left-pos-1') {
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
