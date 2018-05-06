window.onload = function() {

var windos = $('window').width();

if (windos <=375){
  $('sectsion').css('width','390px');
}
else{
  $('sectsion').css('width','100%');
}

$( window ).resize(function() {
  if (windos <=375){
    $('sectsion').css('width','390px');
  }
  else{
    $('sectsion').css('width','100%');
  }
});

//slideshow style interval
var autogo = setInterval( go,3500);

//pause slideshow and reinstantiate on mouseout


//global variables
var item = [];
var startItems = 1;
var poision = 0;
var itemsCount = $('.carousel-1 li.gem').length;
var leftposs = itemsCount;
var resetCounts = itemsCount;

//unused: gather text inside item class
$('li.gem').each(function(index) {
    item[index] = $(this).text();
});

//swap images functionsss
function go(action) {
  var direction = action;

  //moving carousel backwards
  if(direction == 'counter-clockwise') {
    var leftitem = $('.yeah').attr('id') - 1;
    if(leftitem == 0) {
      leftitem = itemsCount;
    }

    $('.light').removeClass('light').addClass('heave');
    $('.top').removeClass('top').addClass('light');
    $('.yeah').removeClass('yeah').addClass('top');
    $('#'+leftitem+'').removeClass('heave').addClass('yeah');

    startItems--;
    if(startItems < 1) {
      startItems = itemsCount;
    }
  }

  //moving carousel forward
  if(direction == 'clockwise' || direction == '' || direction == null ) {
    function pos(poisionvalue) {
      if(poisionvalue != 'leftpoision') {
        //increment image list id
        poision++;

        //if final result is greater than image count, reset poision.
        if((startItems+poision) > resetCounts) {
          poision = 1-startItems;
        }
      }

      //setting the left poisioned item
      if(poisionvalue == 'leftpoision') {
        //left poisioned image should always be one left than main poisioned image.
        poision = startItems - 1;

        //reset last image in list to left poision if first image is in main poision
        if(poision < 1) {
          poision = itemsCount;
        }
      }

      return poision;
    }

   $('#'+ startItems +'').removeClass('top').addClass('yeah');
   $('#'+ (startItems+pos()) +'').removeClass('light').addClass('top');
   $('#'+ (startItems+pos()) +'').removeClass('heave').addClass('light');
   $('#'+ pos('leftpoision') +'').removeClass('yeah').addClass('heave');

    startItems++;
    poision=0;
    if(startItems > itemsCount) {
      startItems = 1;
    }
  }
}

//next button click function
$('#next').click(function() {
  go('clockwise');
});

//prev button click function
$('#prev').click(function() {
  go('counter-clockwise');
});

//if any visible item are clicked
$('li').click(function() {
  if($(this).attr('class') == 'gem yeah') {
     go('counter-clockwise');
  }
  else {
    go('clockwise');
  }
});


// your standard jquery code goes here with $ prefix
// best used inside a page with inline code,
// or outside the document ready, enter code here

  //YOUR JQUERY CODE
}
