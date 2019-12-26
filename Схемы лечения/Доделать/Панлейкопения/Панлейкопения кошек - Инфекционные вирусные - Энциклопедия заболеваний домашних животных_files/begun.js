/**
 * ppa + google analytics extended to begun tracker
 */

if (Begun === undefined || !Begun){
	var Begun = {};
}

Begun.Tracker = new function(){
	var Cookies = {
		set: function(name, value, days){
			if (days){
				var date = new Date();
				date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
				var expires = "; expires=" + date.toGMTString();
			}
			else var expires = "";
			document.cookie = name + "=" + value + expires + "; path=/";
		},
		
		get: function(name){
			var nameEQ = name + "=";
			var ca = document.cookie.split(';');
			for (var i = 0; i < ca.length; i++){
				var c = ca[i];
				while (c.charAt(0)==' '){
					c = c.substring(1,c.length);
				}
				if (c.indexOf(nameEQ) == 0){
					return c.substring(nameEQ.length, c.length);
				}
			}
			return null;
		},
		
		erase: function(name){
			Cookies.set(name, "", -1);
		}
	};

	this.ppa = function(){
		var url = (typeof window.begun_urls != 'undefined' && window.begun_urls.sync_js ? window.begun_urls.sync_js : 'http://autocontext.begun.ru/sync.js');
		var jscall = 'handlePPA'; // callback
		document.write("<scr" + "ipt src='" + url + "?jscall=" + jscall + "' type='text/javascript'></scr" + "ipt>");
	};
	
	this.handlePPA = function(){
		if (typeof window._btarget != 'undefined' && typeof window._bsource != 'undefined'){
			var src = null;
			var i = 0;
			while (src = window._bsource[i]){
				if (Cookies.get(src)){
					(new Image()).src = 'http://u.begun.ru/click.jsp?url=' + src + '&misc2=' + window._btarget;
					Cookies.erase(src);
				}
				i++;
			}
		}
	};
	
	this.googleAnalytics = function(){
		if (typeof window._bacct != 'undefined'){
			var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
			document.write("<scr" + "ipt src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'></scr" + "ipt>");
			function initGA(){
				if (window._gat){
					var begunTracker = _gat._getTracker(window._bacct);
					begunTracker._initData();
					begunTracker._addOrganic("mail.ru", "q");
					begunTracker._addOrganic("rambler.ru", "words");
					begunTracker._addOrganic("nova.rambler.ru", "query");
					begunTracker._addOrganic("nigma.ru", "s");
					begunTracker._addOrganic("blogs.yandex.ru", "text");
					begunTracker._addOrganic("webalta.ru", "q");
					begunTracker._addOrganic("aport.ru", "r");
					begunTracker._addOrganic("akavita.by", "z");
					begunTracker._addOrganic("meta.ua", "q");
					begunTracker._addOrganic("bigmir.net", "q");
					begunTracker._addOrganic("tut.by", "query");
					begunTracker._addOrganic("all.by", "query");
					begunTracker._addOrganic("i.ua", "q");
					begunTracker._addOrganic("online.ua", "q");
					begunTracker._addOrganic("a.ua", "s");
					begunTracker._addOrganic("ukr.net", "search_query");
					begunTracker._addOrganic("search.com.ua", "q");
					begunTracker._addOrganic("search.ua", "query");
					begunTracker._addOrganic("poisk.ru", "text");
					begunTracker._addOrganic("km.ru", "sq");
					begunTracker._addOrganic("liveinternet.ru", "ask");
					begunTracker._addOrganic("gogo.ru", "q");
					begunTracker._addOrganic("gde.ru", "keywords");
					begunTracker._addOrganic("quintura.ru", "request");
					begunTracker._trackPageview();
				}else{
					// GA not loaded
				}
			}
			if (window.addEventListener) window.addEventListener("load", initGA, false);
			else if (window.attachEvent) window.attachEvent("onload", initGA);
		}
	};
}();

(function(){
	var bt = Begun.Tracker;
	bt.ppa();
	bt.googleAnalytics();
})();