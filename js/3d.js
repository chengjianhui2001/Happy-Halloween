// function definitions
const rotateScene = function ( event ) {
  rX -= event.originalEvent.movementY /2;
  rY += event.originalEvent.movementX /2;
  $scene.css( '--rY', rY+'deg' );
  $witchBody.css( '--rY', -rY+'deg' );
  $light1.css( '--rY', -rY+'deg' );
  $light2.css( '--rY', -rY+'deg' );
  $light3.css( '--rY', -rY+'deg' );
}

const moveWitch = function ( event ) {
  let tX = Math.random() * 75 - 320;
  let tZ = Math.random() * 175 + 75;
  $witch.css( '--tX', tX + 'px' );
  $witch.css( '--tZ', tZ + 'px' );
}

// variable decalrations
let $window = $( window );
let $scene = $( '.scene' );
let $witchBody = $( '.witch .witchbody' );
let $witch=$('.witch');

let rX=-20;
let rY=0;

let count = 0;

let $door = $('.door img');
let $candy1 = $('.candy1');
let $count = $('#count');

let $light1 = $('.light1');
let $light2 = $('.light2');
let $light3 = $('.light3');

let $candy2 = $('.candy2');
let $candy3 = $('.candy3');
let $candy4 = $('.candy4');
let $candy5 = $('.candy5')

let $candybox = $('.candybox');
let $candyboxHead = $('.candybox-head');

let $goast1 = $('.goast1');
let $goast2 = $('.goast2')

let $tombstone1 = $('.tombstone1');
let $tombstone2 = $('.tombstone2');

let havedone1 = false;
let havedone2 = false;

let $change = $('.change');
let $body = $('body');

let $music = $('.music');
let $audio = $('audio');
var bcmusic = document.getElementById("bcmusic");
let $pause = $('.pause');

let $moon = $('.moon');
$moon.hide();

let $windowLight1 = $('.left-windowlight');
let $windowLight2 = $('.right-windowlight');
let $windowLight3 = $('.front-windowlight');

$windowLight1.hide();
$windowLight2.hide();
$windowLight3.hide();

let day = true;
let night = false;

$goast1.hide();
$goast2.hide();

$candy2.hide();
$candy3.hide();
$candy4.hide();



// script initialisation
$window.on( 'mousedown', function(){
  $window.on( 'mousemove', rotateScene);
});

$window.on( 'mouseup', function(){
  $window.off( 'mousemove', rotateScene);
});

setInterval(moveWitch, 2000);

$('.face').prop('draggable',false);


// house-candy
$door.click(function(){
  $door.addClass("openDoor");
  if(!havedone1){
    $candy1.css("animation","outCandy1 3s ease-out 1s");
    $candy1.css("animation-fill-mode","forwards");
    $candy1.show(0).delay(3000).hide(0);
    $music.append('<audio preload="auto" autoplay="autoplay" src="audios/game.wav" />')
    count = count + 1;
    havedone1=true;
    setTimeout(() => {
      $audio.remove();
      $count.text(count);
    }, 2000);
  };
  setTimeout(() => {
    $door.removeClass("openDoor");
  }, 6000);
});


// light-candy
$light1.one("click",function(){
  $candy2.fadeIn();
  $candy2.css("animation","outCandy2 2s ease-out 0.5s");
  $candy2.css("animation-fill-mode","forwards");
  $music.append('<audio preload="auto" autoplay="autoplay" src="audios/game.wav" />')
  count=count+1;
  setTimeout(() => {
    $count.text(count);
    $candy2.fadeOut();
  }, 1500);
});

$light2.one("click",function(){
  $candy3.fadeIn();
  $candy3.css("animation","outCandy3 2s ease-out 0.5s");
  $candy3.css("animation-fill-mode","forwards");
  $music.append('<audio preload="auto" autoplay="autoplay" src="audios/game.wav" />')
  count=count+1;
  setTimeout(() => {
    $count.text(count);
    $candy3.fadeOut();
  }, 1500);
});

$light3.one("click",function(){
  $candy4.fadeIn();
  $candy4.css("animation","outCandy4 2s ease-out 0.5s");
  $candy4.css("animation-fill-mode","forwards");
  $music.append('<audio preload="auto" autoplay="autoplay" src="audios/game.wav" />')
  count=count+1;
  setTimeout(() => {
    $count.text(count);
    $candy4.fadeOut();
  }, 1500);
});


// box-candy
$candybox.click(function(){
  $candyboxHead.addClass("outBox");
  if(!havedone2){
    $candy5.css("animation","outCandy5 3s ease-out 0.5s");
    $candy5.css("animation-fill-mode","forwards");
    $candy5.show(0).delay(3500).hide(0);
    $music.append('<audio preload="auto" autoplay="autoplay" src="audios/game.wav" />')
    count=count+1;
    havedone2=true;
    setTimeout(() => {
      $count.text(count);
    }, 3000);
  }
  setTimeout(() => {
    $candyboxHead.removeClass("outBox");
  }, 4000);
})


// ghost
$tombstone1.on("mousemove",function() {
  $goast1.fadeIn();
  $goast1.css("animation","outgoast1 3s linear");
  $goast1.css("animation-fill-mode","forwards");
  setTimeout(() => {
    $goast1.fadeOut();
  }, 3000);
})

$tombstone2.on("mousemove",function() {
  $goast2.fadeIn();
  $goast2.css("animation","outgoast2 3s linear");
  $goast2.css("animation-fill-mode","forwards");
  setTimeout(() => {
    $goast2.fadeOut();
  }, 3000);
})

// daytime-nighttime
$change.click(function(){
  if(day===true){
    $body.css("animation","tonight 2s linear");
    $body.css("animation-fill-mode","forwards");
    $moon.fadeIn(2000);
    $windowLight1.fadeIn(2000);
    $windowLight2.fadeIn(2000);
    $windowLight3.fadeIn(2000);
    day=false;
    night=true;
    $change.removeClass("button-sun");
    $change.addClass("button-moon");
  }else{
    $body.css("animation","today 2s linear");
    $body.css("animation-fill-mode","forwards");
    $moon.fadeOut(2000);
    day=true;
    night=false;
    $windowLight1.fadeOut(2000);
    $windowLight2.fadeOut(2000);
    $windowLight3.fadeOut(2000);
    $change.removeClass("button-moon");
    $change.addClass("button-sun");
  }
});

// background-music
$pause.click(function(){
  if(bcmusic.paused){
    bcmusic.play();
    $pause.removeClass("music-close");
    $pause.addClass("music-open");
  }else{
    bcmusic.pause();
    $pause.removeClass("music-open");
    $pause.addClass("music-close");
  }
})



