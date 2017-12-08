var write=document.querySelector(".write-us"),popup=document.querySelector(".modal-contact"),close=document.querySelector(".modal-close"),mapLink=document.querySelector(".modal-img"),mapPopup=document.querySelector(".modal-map"),mapClose=mapPopup.querySelector(".modal-close"),form=popup.querySelector("form"),yourName=popup.querySelector(".your-name"),yourAdress=popup.querySelector(".your-adress"),storage=localStorage.getItem("yourName");write.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal-show"),storage?(yourName.value=storage,yourAdress.focus()):yourName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal-show"),popup.classList.remove("modal-error")}),form.addEventListener("submit",function(e){yourName.value&&yourAdress.value?localStorage.setItem("your-name",yourName.value):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"))}),mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(popup.classList.contains("modal-show")&&(popup.classList.remove("modal-show"),popup.classList.remove("modal-error")),mapPopup.classList.contains("modal-show")&&mapPopup.classList.remove("modal-show"))}),$(document).ready(function(){function e(e){var t=document.createElement("canvas"),a=t.getContext("2d"),r=new Image;r.src=e,t.width=r.width,t.height=r.height,a.drawImage(r,0,0);for(var o=a.getImageData(0,0,t.width,t.height),n=0;n<o.height;n++)for(var i=0;i<o.width;i++){var s=4*n*o.width+4*i,l=(o.data[s]+o.data[s+1]+o.data[s+2])/3;o.data[s]=l,o.data[s+1]=l,o.data[s+2]=l}return a.putImageData(o,0,0,0,0,o.width,o.height),t.toDataURL()}function t(){var e=navigator.userAgent.toLowerCase();return $.browser.chrome=/chrome/.test(e),$.browser.safari=/webkit/.test(e),$.browser.opera=/opera/.test(e),$.browser.msie=/msie/.test(e)&&!/opera/.test(e),$.browser.mozilla=/mozilla/.test(e)&&!/(compatible|webkit)/.test(e)||/firefox/.test(e),$.browser.chrome?"chrome":$.browser.mozilla?"mozilla":$.browser.opera?"opera":$.browser.safari?"safari":$.browser.msie?"ie":void 0}function a(){var e=-1;if("Microsoft Internet Explorer"==navigator.appName){t=navigator.userAgent;null!=(a=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})")).exec(t)&&(e=parseFloat(RegExp.$1))}else if("Netscape"==navigator.appName){var t=navigator.userAgent,a=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");null!=a.exec(t)&&(e=parseFloat(RegExp.$1))}return e}if("opera"==t()||"safari"==t()){var r=$(".container img"),o=r.length,n=0;r.one("load",function(){++n==o&&(grayscale($(".container img")),$(".container img").hover(function(){grayscale.reset($(this))},function(){grayscale($(this))}))}).each(function(){this.complete&&$(this).trigger("load")})}a()>=10&&($(".container img").each(function(){var t=$(this);t.css({position:"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass("img_grayscale").css({position:"absolute","z-index":"5",opacity:"0"}).insertBefore(t).queue(function(){var e=$(this);e.parent().css({width:this.width,height:this.height}),e.dequeue()}),this.src=e(this.src)}),$(".container img").hover(function(){$(this).parent().find("img:first").stop().animate({opacity:1},200)},function(){$(".img_grayscale").stop().animate({opacity:0},200)})),"mozilla"==t()?$("body").addClass("mozilla"):"ie"==t()?$("body").addClass("ie"):"opera"==t()?$("body").addClass("opera"):"safari"==t()?$("body").addClass("safari"):"chrome"==t()&&$("body").addClass("chrome"),a()>=10&&$("body").addClass("ie11")});var grayscale=function(){var e={colorProps:["color","backgroundColor","borderBottomColor","borderTopColor","borderLeftColor","borderRightColor","backgroundImage"],externalImageHandler:{init:function(e,t){"img"===e.nodeName.toLowerCase()||(a(e).backgroundImageSRC=t,e.style.backgroundImage="")},reset:function(e){"img"===e.nodeName.toLowerCase()||(e.style.backgroundImage="url("+(a(e).backgroundImageSRC||"")+")")}}},t=function(e){return new RegExp("https?://(?!"+window.location.hostname+")").test(e)},a=function(){var e=[0],t="data"+ +new Date;return function(a){var r=a[t],o=e.length;return r||(r=a[t]=o,e[r]={}),e[r]}}(),r=function(e,t,o){var i,s=document.createElement("canvas"),l=s.getContext("2d"),c=e.naturalHeight||e.offsetHeight||e.height,d=e.naturalWidth||e.offsetWidth||e.width;s.height=c,s.width=d,l.drawImage(e,0,0);try{i=l.getImageData(0,0,d,c)}catch(e){}if(!t){r.preparing=!1;for(p=0;p<c;p++)for(var u=0;u<d;u++){var m=4*(p*d+u);i.data[m]=i.data[m+1]=i.data[m+2]=n(i.data[m],i.data[m+1],i.data[m+2])}return l.putImageData(i,0,0,0,0,d,c),s}r.preparing=!0;var p=0;!function(){if(r.preparing){p===c&&(l.putImageData(i,0,0,0,0,d,c),o?a(o).BGdataURL=s.toDataURL():a(e).dataURL=s.toDataURL());for(var t=0;t<d;t++){var u=4*(p*d+t);i.data[u]=i.data[u+1]=i.data[u+2]=n(i.data[u],i.data[u+1],i.data[u+2])}p++,setTimeout(arguments.callee,0)}}()},o=function(e,t){var a=document.defaultView&&document.defaultView.getComputedStyle?document.defaultView.getComputedStyle(e,null)[t]:e.currentStyle[t];if(a&&/^#[A-F0-9]/i.test(a)){var r=a.match(/[A-F0-9]{2}/gi);a="rgb("+parseInt(r[0],16)+","+parseInt(r[1],16)+","+parseInt(r[2],16)+")"}return a},n=function(e,t,a){return parseInt(.2125*e+.7154*t+.0721*a,10)},i=function(e){var t=Array.prototype.slice.call(e.getElementsByTagName("*"));return t.unshift(e),t},s=function(l){if(l&&l[0]&&l.length&&l[0].nodeName)for(var c=Array.prototype.slice.call(l),d=-1,u=c.length;++d<u;)s.call(this,c[d]);else{if(l=l||document.documentElement,!document.createElement("canvas").getContext)return l.style.filter="progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)",void(l.style.zoom=1);for(var m=i(l),p=-1,g=m.length;++p<g;){var f=m[p];if("img"===f.nodeName.toLowerCase()){var h=f.getAttribute("src");if(!h)continue;if(t(h))e.externalImageHandler.init(f,h);else{a(f).realSRC=h;try{f.src=a(f).dataURL||r(f).toDataURL()}catch(t){e.externalImageHandler.init(f,h)}}}else for(var v=0,y=e.colorProps.length;v<y;v++){var w=e.colorProps[v],b=o(f,w);if(b)if(f.style[w]&&(a(f)[w]=b),"rgb("!==b.substring(0,4)){if(b.indexOf("url(")>-1){var L=/\(['"]?(.+?)['"]?\)/,I=b.match(L)[1];if(t(I)){e.externalImageHandler.init(f,I),a(f).externalBG=!0;continue}try{var C=a(f).BGdataURL||function(){var e=document.createElement("img");return e.src=I,r(e).toDataURL()}();f.style[w]=b.replace(L,function(e,t){return"("+C+")"})}catch(t){e.externalImageHandler.init(f,I)}}}else{var $=n.apply(null,b.match(/\d+/g));f.style[w]=b="rgb("+$+","+$+","+$+")"}}}}};return s.reset=function(r){if(r&&r[0]&&r.length&&r[0].nodeName)for(var o=Array.prototype.slice.call(r),n=-1,l=o.length;++n<l;)s.reset.call(this,o[n]);else if(r=r||document.documentElement,document.createElement("canvas").getContext)for(var c=i(r),d=-1,u=c.length;++d<u;){var m=c[d];if("img"===m.nodeName.toLowerCase()){var p=m.getAttribute("src");t(p)&&e.externalImageHandler.reset(m,p),m.src=a(m).realSRC||p}else for(var g=0,f=e.colorProps.length;g<f;g++){a(m).externalBG&&e.externalImageHandler.reset(m);var h=e.colorProps[g];m.style[h]=a(m)[h]||""}}else r.style.filter="progid:DXImageTransform.Microsoft.BasicImage(grayscale=0)"},s.prepare=function(e){if(e&&e[0]&&e.length&&e[0].nodeName)for(var n=Array.prototype.slice.call(e),l=-1,c=n.length;++l<c;)s.prepare.call(null,n[l]);else if(e=e||document.documentElement,document.createElement("canvas").getContext)for(var d=i(e),u=-1,m=d.length;++u<m;){var p=d[u];if(a(p).skip)return;if("img"===p.nodeName.toLowerCase())p.getAttribute("src")&&!t(p.src)&&r(p,!0);else{var g=o(p,"backgroundImage");if(g.indexOf("url(")>-1){var f=/\(['"]?(.+?)['"]?\)/,h=g.match(f)[1];if(!t(h)){var v=document.createElement("img");v.src=h,r(v,!0,p)}}}}},s}();
