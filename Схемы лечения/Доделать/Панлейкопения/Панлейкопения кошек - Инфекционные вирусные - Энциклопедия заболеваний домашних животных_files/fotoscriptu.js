var speed=10
var loop, timer, var1, var3, var2

function umakeObj(obj,nest){
    nest=(!nest) ? '':'document.'+nest+'.'
	this.el=bw.dom?document.getElementById(obj):bw.ie4?document.all[obj]:bw.ns4?eval(nest+'document.'+obj):0;
  	this.css=bw.dom?document.getElementById(obj).style:bw.ie4?document.all[obj].style:bw.ns4?eval(nest+'document.'+obj):0;
	this.scrollWidth=bw.ns4?this.css.document.width:this.el.offsetWidth
	this.clipWidth=bw.ns4?this.css.clip.width:this.el.offsetWidth

	this.scrollHeight=bw.ns4?this.css.document.height:this.el.offsetHeight
	this.clipHeight=bw.ns4?this.css.clip.height:this.el.offsetHeight
	this.up=ugoUp;
	this.down=ugoDown;
	this.umoveIt=umoveIt; this.x; this.y;
    this.obj = obj + "Object"
    eval(this.obj + "=this")
    return this
}
function umoveIt(x,y){
	this.x=x;this.y=y
	this.css.left=this.x
	this.css.top=this.y
}

function ugoDown(move,var3){
	if(this.x>-var3+650){
		this.umoveIt(this.x-move,0)
			if(loop) setTimeout(this.obj+".down("+move+", "+var3+")", 300)
}
}
function ugoUp(move){
	if(this.x<0){
		this.umoveIt(this.x-move,0)
		if(loop) setTimeout(this.obj+".up("+move+")",300)
}
}

function uscroll(speed1,var1){
	if(uloaded){
		loop=true;
		if(speed1>0) uoContScroll.down(speed1,var1)
		else uoContScroll.up(speed1)
}
}

function unoScroll(){
	loop=false;
	if(timer) clearTimeout(timer)
}

var uloaded;
function uscrollInit(){
	uoCont=new umakeObj('Divuser')
	uoContScroll=new umakeObj('DivuserText','Divuser')
	uoContScroll.umoveIt(0,0)
	uoCont.css.visibility='visible'
	uloaded=true;
}

function copyToClipboard(content) {
    if (window.clipboardData && window.clipboardData.setData) {
        window.clipboardData.setData("Text", content);
        return true;
    }
    else {
        try { 
            netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
        } 
        catch (e) { 
            return false;
        }
 
        var clipboard = Components.classes["@mozilla.org/widget/clipboard;1"].getService(); 
        if (clipboard) { 
            clipboard = clipboard.QueryInterface(Components.interfaces.nsIClipboard); 
        } 
 
        var transferable = Components.classes["@mozilla.org/widget/transferable;1"].createInstance(); 
        if (transferable) { 
            transferable = transferable.QueryInterface(Components.interfaces.nsITransferable); 
        }
 
        if (clipboard && transferable) {
            var textObj = new Object(); 
            var textObj = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString); 
            if (textObj) { 
                textObj.data = content; 
                transferable.setTransferData("text/unicode", textObj, content.length*2); 
                var clipid=Components.interfaces.nsIClipboard; 
                clipboard.setData(transferable,null,clipid.kGlobalClipboard); 
 
                return true;
            } 
        }
 
        return false;
    }
}