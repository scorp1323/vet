
function checkBrowser(){
	this.ver=navigator.appVersion
	this.dom=document.getElementById?1:0
	this.ie5=(this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
	this.ie4=(document.all && !this.dom)?1:0;
	this.ns5=(this.dom && parseInt(this.ver) >= 5) ?1:0;
	this.ns4=(document.layers && !this.dom)?1:0;
	this.bw=(this.ie5 || this.ie4 || this.ns4 || this.ns5)
	return this
}
bw=new checkBrowser()

var speed=20

var loop, timer, var1, var3, var2

function makeObj(obj,nest){
    nest=(!nest) ? '':'document.'+nest+'.'
	this.el=bw.dom?document.getElementById(obj):bw.ie4?document.all[obj]:bw.ns4?eval(nest+'document.'+obj):0;
  	this.css=bw.dom?document.getElementById(obj).style:bw.ie4?document.all[obj].style:bw.ns4?eval(nest+'document.'+obj):0;
	this.scrollWidth=bw.ns4?this.css.document.width:this.el.offsetWidth
	this.clipWidth=bw.ns4?this.css.clip.width:this.el.offsetWidth

	this.scrollHeight=bw.ns4?this.css.document.height:this.el.offsetHeight
	this.clipHeight=bw.ns4?this.css.clip.height:this.el.offsetHeight
	this.up=goUp;this.down=goDown;
	this.moveIt=moveIt; this.x; this.y;
    this.obj = obj + "Object"
    eval(this.obj + "=this")
    return this
}
function moveIt(x,y){
	this.x=x;this.y=y
	this.css.left=this.x
	this.css.top=this.y
}

function goDown(move,var3){
	if(this.x>-var3+173){
		this.moveIt(this.x-move,0)
			if(loop) setTimeout(this.obj+".down("+move+", "+var3+")",speed)
}
}
function goUp(move){
	if(this.x<0){
		this.moveIt(this.x-move,0)
		if(loop) setTimeout(this.obj+".up("+move+")",speed)
	}
}

function scroll(speed,var1){
	if(loaded){
		loop=true;
		if(speed>0) oContScroll.down(speed,var1)
		else oContScroll.up(speed)
	}
}

function noScroll(){
	loop=false;
	if(timer) clearTimeout(timer)
}

var loaded;
function scrollInit(){
	oCont=new makeObj('Div')
	oContScroll=new makeObj('DivText','Div')
	oContScroll.moveIt(0,0)
	oCont.css.visibility='visible'
	loaded=true;
}