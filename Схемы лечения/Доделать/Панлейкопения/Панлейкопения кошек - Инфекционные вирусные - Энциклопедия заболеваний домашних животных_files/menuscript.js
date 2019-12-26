var Timeout;
var Pause=200;
var Items = 10;
function n_GetX(El) {
 var X = 0;
 do {X += El.offsetLeft} while ((El = El.offsetParent) != null);
 return X;
}

function n_GetY(El) {
 var Y = 0;
 do { Y += El.offsetTop } while ((El = El.offsetParent) != null);
 return Y;
}

function ShowItem(num) {
 HideAll();
 LeftCoord=n_GetX(document.getElementById('bg'+num));
 TopCoord=n_GetY(document.getElementById('bg'+num))
 if (document.getElementById('img'+num)!=null) {
  LeftCoord2=n_GetX(document.getElementById('bg'+(num+1)));
  document.getElementById('img'+num).width=LeftCoord2-LeftCoord-17;
 }
 document.getElementById('menu'+num).style.left = LeftCoord-1;
 document.getElementById('menu'+num).style.top = TopCoord+20;
 document.getElementById('menu'+num).style.visibility = 'visible';
 document.getElementById('bg' + num).style.background='#f6f6c7';
 document.getElementById('bg' + num).style.border='1px solid #ceb810';
 if (document.getElementById('navform')!=null) document.getElementById('navform').style.visibility='hidden'; 
}

function HideAll() {
 for(var i = 1; i <= Items; i++)
  HideItem(i)
 if (document.getElementById('navform')!=null) document.getElementById('navform').style.visibility='visible'; 
}

function HideItem(num) {

document.getElementById('menu'+num).style.visibility = 'hidden';
document.getElementById('bg' + num).style.background='#f4e884';
document.getElementById('bg' + num).style.border='0px none #ffffff';
document.getElementById('bg' + num).style.background='url(http://www.zoovet.ru/diz/upline.jpg)';
}
function ShowUser(num) {
LeftCoord=n_GetX(document.getElementById('uid'+num));
TopCoord=n_GetY(document.getElementById('uid'+num))
document.getElementById('user'+num).style.left =LeftCoord+23;
document.getElementById('user'+num).style.top = TopCoord+16;
document.getElementById('user'+num).style.visibility = 'visible';
}

function HideUser(num) {
document.getElementById('user'+num).style.visibility = 'hidden';
}

function ShowUserMain(num) {
LeftCoord=n_GetX(document.getElementById('uid'+num));
TopCoord=n_GetY(document.getElementById('uid'+num))
document.getElementById('user'+num).style.left =LeftCoord;
document.getElementById('user'+num).style.top = TopCoord-5;
document.getElementById('user'+num).style.visibility = 'visible';
}

function HideUserMain(num) {
document.getElementById('user'+num).style.visibility = 'hidden';
}