/*! Modified jQuery Address | (c) 2013 Rostislav Hristov | jquery.org/license */
(function(a){a.address=(function(){var d=function(aj){var ak=a.extend(a.Event(aj),(function(){var ao={},an=a.address.parameterNames();for(var am=0,al=an.length;am<al;am++){ao[an[am]]=a.address.parameter(an[am])}return{value:a.address.value(),path:a.address.path(),pathNames:a.address.pathNames(),parameterNames:an,parameters:ao,queryString:a.address.queryString()}}).call(a.address));a(a.address).trigger(ak);return ak},j=function(aj){return Array.prototype.slice.call(aj)},G=function(al,ak,aj){a().on.apply(a(a.address),Array.prototype.slice.call(arguments));return a.address},T=function(ak,aj){a().off.apply(a(a.address),Array.prototype.slice.call(arguments));return a.address},N=function(){return(ac.pushState&&B.state!==H)},F=function(){return("/"+Y.pathname.replace(new RegExp(B.state),"")+Y.search+(U()?"#"+U():"")).replace(P,"/")},U=function(){var aj=Y.href.indexOf("#!");return aj!=-1?A(Y.href.substr(aj+1),ad):""},w=function(){return N()?F():U()},b=function(){try{return top.document!==H&&top.document.title!==H?top:window}catch(aj){return window}},k=function(){return"javascript"},ah=function(aj){aj=aj.toString();return(B.strict&&aj.substr(0,1)!="/"?"/":"")+aj},A=function(aj,ak){if(B.crawlable&&ak){return(aj!==""?"!":"")+aj}return aj.replace(/^\!/,"")},S=function(aj,ak){return parseInt(aj.css(ak),10)},ab=function(){if(!r){var ak=w(),aj=decodeURI(W)!=decodeURI(ak);if(aj){if(h&&p<7){Y.reload()}else{if(h&&!O&&B.history){m(C,50)}W=ak;Z(ad)}}}},Z=function(aj){return d(E).isDefaultPrevented()||d(aj?g:ag).isDefaultPrevented()},C=function(){var aj=k()+":"+ad+";document.open();document.writeln('<html><head><title>"+af.title.replace(/\'/g,"\\'")+"</title><script>var "+v+' = "'+encodeURIComponent(w()).replace(/\'/g,"\\'")+(af.domain!=Y.hostname?'";document.domain="'+af.domain:"")+"\";<\/script></head></html>');document.close();";if(p<7){e.src=aj}else{e.contentWindow.location.replace(aj)}},ae=function(){if(i&&c!=-1){var aj,al,ak=i.substr(c+1).split("&");for(aj=0;aj<ak.length;aj++){al=ak[aj].split("=");if(/^(autoUpdate|crawlable|history|strict|wrap)$/.test(al[0])){B[al[0]]=(isNaN(al[1])?/^(true|yes)$/i.test(al[1]):(parseInt(al[1],10)!==0))}if(/^(state)$/.test(al[0])){B[al[0]]=al[1]}}i=D}W=w()},R=function(){if(!X){X=z;ae();a('a[rel*="address:"]').address();if(B.wrap){var ak=a("body"),al=a("body > *").wrapAll('<div style="padding:'+(S(ak,"marginTop")+S(ak,"paddingTop"))+"px "+(S(ak,"marginRight")+S(ak,"paddingRight"))+"px "+(S(ak,"marginBottom")+S(ak,"paddingBottom"))+"px "+(S(ak,"marginLeft")+S(ak,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+v+'" style="height:100%;overflow:auto;position:relative;'+(q&&!window.statusbar.visible?"resize:both;":"")+'" />');a("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});if(q){a('<style type="text/css" />').appendTo("head").text("#"+v+"::-webkit-resizer { background-color: #fff; }")}}if(h&&!O){var aj=af.getElementsByTagName("frameset")[0];e=af.createElement((aj?"":"i")+"frame");e.src=k()+":"+ad;if(aj){aj.insertAdjacentElement("beforeEnd",e);aj[aj.cols?"cols":"rows"]+=",0";e.noResize=z;e.frameBorder=e.frameSpacing=0}else{e.style.display="none";e.style.width=e.style.height=0;e.tabIndex=-1;af.body.insertAdjacentElement("afterBegin",e)}m(function(){a(e).on("load",function(){var am=e.contentWindow;W=am[v]!==H?am[v]:"";if(W!=w()){Z(ad);Y.hash=A(W,z)}});if(e.contentWindow[v]===H){C()}},50)}m(function(){d("init");Z(ad)},1);if(!N()){if((h&&p>7)||(!h&&O)){if(Q.addEventListener){Q.addEventListener(V,ab,ad)}else{if(Q.attachEvent){Q.attachEvent("on"+V,ab)}}}else{s(ab,50)}}if("state" in window.history){a(window).trigger("popstate")}}},o=function(){if(decodeURI(W)!=decodeURI(w())){W=w();Z(ad)}},n=function(){if(Q.removeEventListener){Q.removeEventListener(V,ab,ad)}else{if(Q.detachEvent){Q.detachEvent("on"+V,ab)}}},L=function(ak){ak=ak.toLowerCase();var aj=/(chrome)[ \/]([\w.]+)/.exec(ak)||/(webkit)[ \/]([\w.]+)/.exec(ak)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ak)||/(msie) ([\w.]+)/.exec(ak)||ak.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ak)||[];return{browser:aj[1]||"",version:aj[2]||"0"}},K=function(){var ak={},aj=L(navigator.userAgent);if(aj.browser){ak[aj.browser]=true;ak.version=aj.version}if(ak.chrome){ak.webkit=true}else{if(ak.webkit){ak.safari=true}}return ak},H,D=null,v="jQueryAddress",aa="string",V="hashchange",l="init",E="change",g="internalChange",ag="externalChange",z=true,ad=false,B={autoUpdate:z,crawlable:z,history:z,strict:z,wrap:ad},y=K(),p=parseFloat(y.version),q=y.webkit||y.safari,h=!a.support.opacity,Q=b(),af=Q.document,ac=Q.history,Y=Q.location,s=setInterval,m=setTimeout,P=/\/{2,9}/g,ai=navigator.userAgent,O="on"+V in Q,e,J,i=a("script:last").attr("src"),c=i?i.indexOf("?"):-1,I=af.title,r=ad,X=ad,M=z,u=ad,x={},W=w();if(h){p=parseFloat(ai.substr(ai.indexOf("MSIE")+4));if(af.documentMode&&af.documentMode!=p){p=af.documentMode!=8?7:8}var t=af.onpropertychange;af.onpropertychange=function(){if(t){t.call(af)}if(af.title!=I&&af.title.indexOf("#!"+w())!=-1){af.title=I}}}if(ac.navigationMode){ac.navigationMode="compatible"}if(document.readyState=="complete"){var f=setInterval(function(){if(a.address){R();clearInterval(f)}},50)}else{ae();a(R)}a(window).on("popstate",o).on("unload",n);return{on:function(ak,al,aj){return G.apply(this,j(arguments))},off:function(ak,aj){return T.apply(this,j(arguments))},init:function(ak,aj){return G.apply(this,[l].concat(j(arguments)))},change:function(ak,aj){return G.apply(this,[E].concat(j(arguments)))},internalChange:function(ak,aj){return G.apply(this,[g].concat(j(arguments)))},externalChange:function(ak,aj){return G.apply(this,[ag].concat(j(arguments)))},baseURL:function(){var aj=Y.href;if(aj.indexOf("#")!=-1){aj=aj.substr(0,aj.indexOf("#"))}if(/\/$/.test(aj)){aj=aj.substr(0,aj.length-1)}return aj},autoUpdate:function(aj){if(aj!==H){B.autoUpdate=aj;return this}return B.autoUpdate},crawlable:function(aj){if(aj.length!==H){B.crawlable=aj;return this}return B.crawlable},history:function(aj){if(aj!==H){B.history=aj;return this}return B.history},state:function(aj){if(aj!==H){B.state=aj;var ak=F();if(B.state!==H){if(N()){if(ak.substr(0,3)=="/#/"){Y.replace(B.state.replace(/^\/$/,"")+ak.substr(2))}}else{if(ak!="/"&&ak.replace(/^\/#/,"")!=U()){m(function(){Y.replace(B.state.replace(/^\/$/,"")+"/#!"+ak)},1)}}}return this}return B.state},strict:function(aj){if(aj!==H){B.strict=aj;return this}return B.strict},wrap:function(aj){if(aj!==H){B.wrap=aj;return this}return B.wrap},update:function(){u=z;this.value(W);u=ad;return this},title:function(aj){if(aj!==H){m(function(){I=af.title=aj;if(M&&e&&e.contentWindow&&e.contentWindow.document){e.contentWindow.document.title=aj;M=ad}},50);return this}return af.title},value:function(aj){if(aj!==H){aj=ah(aj);if(aj=="/"){aj=""}if(W==aj&&!u){return}W=aj;if(B.autoUpdate||u){if(Z(z)){return this}if(N()){ac[B.history?"pushState":"replaceState"]({},"",B.state.replace(/\/$/,"")+(W===""?"/":W))}else{r=z;if(q){W=W.length?"#"+A(W,z):"";if(B.history){Y.hash=W}else{Y.replace(W)}}else{if(W!=w()){W=W.length?"#"+A(W,z):"";if(B.history){Y.hash=W}else{Y.replace(W)}}}if((h&&!O)&&B.history){m(C,50)}if(q){m(function(){r=ad},1)}else{r=ad}}}return this}return ah(W)},path:function(ak){if(ak!==H){var aj=this.queryString(),al=this.hash();this.value(ak+(aj?"?"+aj:"")+(al?"#"+al:""));return this}return ah(W).split("#")[0].split("?")[0]},pathNames:function(){var ak=this.path(),aj=ak.replace(P,"/").split("/");if(ak.substr(0,1)=="/"||ak.length===0){aj.splice(0,1)}if(ak.substr(ak.length-1,1)=="/"){aj.splice(aj.length-1,1)}return aj},queryString:function(ak){if(ak!==H){var al=this.hash();this.value(this.path()+(ak?"?"+ak:"")+(al?"#"+al:""));return this}var aj=W.split("?");return aj.slice(1,aj.length).join("?").split("#")[0]},parameter:function(ak,at,am){var aq,ao;if(at!==H){var ar=this.parameterNames();ao=[];at=at===H||at===D?"":at.toString();for(aq=0;aq<ar.length;aq++){var an=ar[aq],au=this.parameter(an);if(typeof au==aa){au=[au]}if(an==ak){au=(at===D||at==="")?[]:(am?au.concat([at]):[at])}for(var ap=0;ap<au.length;ap++){ao.push(an+"="+au[ap])}}if(a.inArray(ak,ar)==-1&&at!==D&&at!==""){ao.push(ak+"="+at)}this.queryString(ao.join("&"));return this}at=this.queryString();if(at){var aj=[];ao=at.split("&");for(aq=0;aq<ao.length;aq++){var al=ao[aq].split("=");if(al[0]==ak){aj.push(al.slice(1).join("="))}}if(aj.length!==0){return aj.length!=1?aj:aj[0]}}},parameterNames:function(){var aj=this.queryString(),am=[];if(aj&&aj.indexOf("=")!=-1){var an=aj.split("&");for(var al=0;al<an.length;al++){var ak=an[al].split("=")[0];if(a.inArray(ak,am)==-1){am.push(ak)}}}return am},hash:function(ak){if(ak!==H){this.value(W.split("#")[0]+(ak?"#"+ak:""));return this}var aj=W.split("#");return aj.slice(1,aj.length).join("#")}}})();a.fn.address=function(b){a(document).on("click",this.selector,function(f){if(f.shiftKey||f.ctrlKey||f.metaKey||f.which==2){return true}var d=f.currentTarget;if(a(d).is("a")){f.preventDefault();var c=b?b.call(d):/address:/.test(a(d).attr("rel"))?a(d).attr("rel").split("address:")[1].split(" ")[0]:a.address.state()!==undefined&&!/^\/?$/.test(a.address.state())?a(d).attr("href").replace(new RegExp("^(.*"+a.address.state()+"|\\.)"),""):a(d).attr("href").replace(/^(#\!?|\.)/,"");a.address.value(c)}}).on("submit",function(g){var f=g.currentTarget;if(a(f).is("form")){g.preventDefault();var d=a(f).attr("action"),c=b?b.call(f):(d.indexOf("?")!=-1?d.replace(/&$/,""):d+"?")+a(f).serialize();a.address.value(c)}})};return this})(jQuery);