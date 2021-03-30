
//******* @author: CareCart App-Mr *******************************************
//****** Store Frontend JS - js-script.js GH v.2.0.13 - Build ver 2.3.1 *******
//****** Updated at: 30-Mar-2021, 05:05 PM  **********************************

var isAjaxFbMR = 0;
var isCartLoadingFbMR = 0;
var isCheckForCallFbMR = true;
window.localStorage.setItem('userCartId', null);
//************* If we set "stickyDiscountImpressionSaved" to null below, on every page reload or new store page tab open, it will again become null, we don't need to do this as we'll use its value in session
//window.localStorage.setItem('stickyDiscountImpressionSaved', null);
var showStickyDiscountOpenViewLoad = false;
var showStickyDiscountSubscribedViewLoad = false;

function getQueryParametersFbMR() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArrayFbMR(prmstr) : {};
}

function transformToAssocArrayFbMR(prmstr) {
    var params = {};
    var prmarr = prmstr.split("&");
    for (var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

function scriptInjectionFbMR(src, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";

    script.src = src;
    if (typeof callback == 'function') {
        script.addEventListener('load', callback);
    }

    document.getElementsByTagName('head')[0].appendChild(script);


}

function cssFileInjectionFbMR(href) {
    var link = document.createElement("link");
    link.href = href;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}

function includeAllJSCombine(){
    //scriptInjectionFbMR(CDN_APP_MR_URL + "crypto-js-3.1.2.js", function () {
    //scriptInjectionFbMR("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js", function () {
//*********************** START - CryptoJS **********************************************************
    /*
    CryptoJS v3.1.2
    code.google.com/p/crypto-js
    (c) 2009-2013 by Jeff Mott. All rights reserved.
    code.google.com/p/crypto-js/wiki/License
    */
    var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
        q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
                32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
                2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
        g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
                b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
            g)).finalize(a)}}});var k=m.algo={};return m}(Math);
    (function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
        _doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
            c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
                d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
                C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
            4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);
//*********************** End - CryptoJS **********************************************************
    window.ccFbMRJquery = jQuery.noConflict(true);
    //scriptInjectionFbMR(CDN_APP_MR_URL + "use.fontawesome.js");
    //scriptInjectionFbMR("https://use.fontawesome.com/e0a385ecbc.js");
//************************ START - Font awesome ***************************************************
    window.FontAwesomeCdnConfig = {
        autoA11y: {
            enabled: false
        },
        asyncLoading: {
            enabled: false
        },
        reporting: {
            enabled: false
        },
        useUrl: "use.fontawesome.com",
        faCdnUrl: "https://cdn.fontawesome.com:443",
        code: "e0a385ecbc"
    };
    !function(){function a(a){var b,c=[],d=document,e=d.documentElement.doScroll,f="DOMContentLoaded",g=(e?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState);g||d.addEventListener(f,b=function(){for(d.removeEventListener(f,b),g=1;b=c.shift();)b()}),g?setTimeout(a,0):c.push(a)}function b(a,b){var c=!1;return a.split(",").forEach(function(a){var d=new RegExp(a.trim().replace(".","\\.").replace("*","(.*)"));b.match(d)&&(c=!0)}),c}function c(a){"undefined"!=typeof MutationObserver&&new MutationObserver(a).observe(document,{childList:!0,subtree:!0})}function d(a){var b,c,d,e;a=a||"fa",b=document.querySelectorAll("."+a),Array.prototype.forEach.call(b,function(a){c=a.getAttribute("title"),a.setAttribute("aria-hidden","true"),d=a.nextElementSibling?!a.nextElementSibling.classList.contains("sr-only"):!0,c&&d&&(e=document.createElement("span"),e.innerHTML=c,e.classList.add("sr-only"),a.parentNode.insertBefore(e,a.nextSibling))})}!function(){"use strict";function a(a){l.push(a),1==l.length&&k()}function b(){for(;l.length;)l[0](),l.shift()}function c(a){this.a=m,this.b=void 0,this.f=[];var b=this;try{a(function(a){f(b,a)},function(a){g(b,a)})}catch(c){g(b,c)}}function d(a){return new c(function(b,c){c(a)})}function e(a){return new c(function(b){b(a)})}function f(a,b){if(a.a==m){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d)return void d.call(b,function(b){c||f(a,b),c=!0},function(b){c||g(a,b),c=!0})}catch(e){return void(c||g(a,e))}a.a=0,a.b=b,h(a)}}function g(a,b){if(a.a==m){if(b==a)throw new TypeError;a.a=1,a.b=b,h(a)}}function h(b){a(function(){if(b.a!=m)for(;b.f.length;){var a=b.f.shift(),c=a[0],d=a[1],e=a[2],a=a[3];try{0==b.a?e("function"==typeof c?c.call(void 0,b.b):b.b):1==b.a&&("function"==typeof d?e(d.call(void 0,b.b)):a(b.b))}catch(f){a(f)}}})}function i(a){return new c(function(b,c){function d(c){return function(d){g[c]=d,f+=1,f==a.length&&b(g)}}var f=0,g=[];0==a.length&&b(g);for(var h=0;h<a.length;h+=1)e(a[h]).c(d(h),c)})}function j(a){return new c(function(b,c){for(var d=0;d<a.length;d+=1)e(a[d]).c(b,c)})}var k,l=[];k=function(){setTimeout(b)};var m=2;c.prototype.g=function(a){return this.c(void 0,a)},c.prototype.c=function(a,b){var d=this;return new c(function(c,e){d.f.push([a,b,c,e]),h(d)})},window.Promise||(window.Promise=c,window.Promise.resolve=e,window.Promise.reject=d,window.Promise.race=j,window.Promise.all=i,window.Promise.prototype.then=c.prototype.c,window.Promise.prototype["catch"]=c.prototype.g)}(),function(){function a(a){this.el=a;for(var b=a.className.replace(/^\s+|\s+$/g,"").split(/\s+/),c=0;c<b.length;c++)d.call(this,b[c])}function b(a,b,c){Object.defineProperty?Object.defineProperty(a,b,{get:c}):a.__defineGetter__(b,c)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var c=Array.prototype,d=c.push,e=c.splice,f=c.join;a.prototype={add:function(a){this.contains(a)||(d.call(this,a),this.el.className=this.toString())},contains:function(a){return-1!=this.el.className.indexOf(a)},item:function(a){return this[a]||null},remove:function(a){if(this.contains(a)){for(var b=0;b<this.length&&this[b]!=a;b++);e.call(this,b,1),this.el.className=this.toString()}},toString:function(){return f.call(this," ")},toggle:function(a){return this.contains(a)?this.remove(a):this.add(a),this.contains(a)}},window.DOMTokenList=a,b(Element.prototype,"classList",function(){return new a(this)})}}();var e=function(a,b,c){function d(a){return g.body?a():void setTimeout(function(){d(a)})}function e(){h.addEventListener&&h.removeEventListener("load",e),h.media=c||"all"}var f,g=window.document,h=g.createElement("link");if(b)f=b;else{var i=(g.body||g.getElementsByTagName("head")[0]).childNodes;f=i[i.length-1]}var j=g.styleSheets;h.rel="stylesheet",h.href=a,h.media="only x",d(function(){f.parentNode.insertBefore(h,b?f:f.nextSibling)});var k=function(a){for(var b=h.href,c=j.length;c--;)if(j[c].href===b)return a();setTimeout(function(){k(a)})};return h.addEventListener&&h.addEventListener("load",e),h.onloadcssdefined=k,k(e),h},f=null;!function(){function a(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function b(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function b(){document.removeEventListener("DOMContentLoaded",b),a()}):document.attachEvent("onreadystatechange",function c(){"interactive"!=document.readyState&&"complete"!=document.readyState||(document.detachEvent("onreadystatechange",c),a())})}function c(a){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(a)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.f=document.createElement("span"),this.g=-1,this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;",this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;",this.b.appendChild(this.h),this.c.appendChild(this.f),this.a.appendChild(this.b),this.a.appendChild(this.c)}function d(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font:"+b+";"}function e(a){var b=a.a.offsetWidth,c=b+100;return a.f.style.width=c+"px",a.c.scrollLeft=c,a.b.scrollLeft=a.b.scrollWidth+100,a.g!==b?(a.g=b,!0):!1}function g(b,c){function d(){var a=f;e(a)&&a.a.parentNode&&c(a.g)}var f=b;a(b.b,d),a(b.c,d),e(b)}function h(a,b){var c=b||{};this.family=a,this.style=c.style||"normal",this.weight=c.weight||"normal",this.stretch=c.stretch||"normal"}function i(){if(null===l){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}l=""!==a.style.font}return l}function j(a,b){return[a.style,a.weight,i()?a.stretch:"","100px",b].join(" ")}var k=null,l=null,m=null;h.prototype.load=function(a,e){var f=this,h=a||"BESbswy",i=e||3e3,l=(new Date).getTime();return new Promise(function(a,e){if(null===m&&(m=!!window.FontFace),m){var n=new Promise(function(a,b){function c(){(new Date).getTime()-l>=i?b():document.fonts.load(j(f,f.family),h).then(function(b){1<=b.length?a():setTimeout(c,25)},function(){b()})}c()}),o=new Promise(function(a,b){setTimeout(b,i)});Promise.race([o,n]).then(function(){a(f)},function(){e(f)})}else b(function(){function b(){var b;(b=-1!=q&&-1!=r||-1!=q&&-1!=s||-1!=r&&-1!=s)&&((b=q!=r&&q!=s&&r!=s)||(null===k&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),k=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=k&&(q==t&&r==t&&s==t||q==u&&r==u&&s==u||q==v&&r==v&&s==v)),b=!b),b&&(w.parentNode&&w.parentNode.removeChild(w),clearTimeout(x),a(f))}function m(){if((new Date).getTime()-l>=i)w.parentNode&&w.parentNode.removeChild(w),e(f);else{var a=document.hidden;!0!==a&&void 0!==a||(q=n.a.offsetWidth,r=o.a.offsetWidth,s=p.a.offsetWidth,b()),x=setTimeout(m,50)}}var n=new c(h),o=new c(h),p=new c(h),q=-1,r=-1,s=-1,t=-1,u=-1,v=-1,w=document.createElement("div"),x=0;w.dir="ltr",d(n,j(f,"sans-serif")),d(o,j(f,"serif")),d(p,j(f,"monospace")),w.appendChild(n.a),w.appendChild(o.a),w.appendChild(p.a),document.body.appendChild(w),t=n.a.offsetWidth,u=o.a.offsetWidth,v=p.a.offsetWidth,m(),g(n,function(a){q=a,b()}),d(n,j(f,'"'+f.family+'",sans-serif')),g(o,function(a){r=a,b()}),d(o,j(f,'"'+f.family+'",serif')),g(p,function(a){s=a,b()}),d(p,j(f,'"'+f.family+'",monospace'))})})},f=h}();var g={observe:function(a,b){for(var c=b.prefix,d=function(a){var b=a.weight?"-"+a.weight:"",d=a.style?"-"+a.style:"",e=a.className?"-"+a.className:"",g=a.className?"-"+a.className+b+d:"",h=document.getElementsByTagName("html")[0].classList,i=function(a){h.add(c+e+"-"+a),h.add(c+g+"-"+a)},j=function(a){h.remove(c+e+"-"+a),h.remove(c+g+"-"+a)};i("loading"),new f(a.familyName).load(a.testString).then(function(){i("ready"),j("loading")},function(){i("failed"),j("loading")})},e=0;e<a.length;e++)d(a[e])}},h={load:function(a){var b=document.createElement("link");b.href=a,b.media="all",b.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(b)},loadAsync:function(a){e(a)}},i={load:function(a){var b=document.createElement("script"),c=document.scripts[0];b.src=a,c.parentNode.appendChild(b)}};try{if(window.FontAwesomeCdnConfig){var j=window.FontAwesomeCdnConfig,k=j.useUrl,l=j.faCdnUrl,m=j.code,n="FontAwesome",o="fa",p="ï‰€",q=d.bind(d,"fa"),r=function(){};j.autoA11y.enabled&&(a(q),c(q)),j.reporting.enabled&&b(j.reporting.domains,location.host)&&i.load(l+"/js/stats.js"),cssUrl="https://"+k+"/"+m+".css",new f(n).load(p).then(function(){var a=(window.FontAwesomeHooks||{}).loaded||r;a()},r),j.asyncLoading.enabled?h.loadAsync(cssUrl):h.load(cssUrl),g.observe([{familyName:n,testString:p}],{prefix:o+"-events-icons"})}}catch(s){}}();
//************************ END - Font awesome *****************************************************

    //});
}

function AbandonedCartFbMR() {

    var customerFbMR = {};
    var storeFbMR = {
        'domain': Shopify.shop
    };
    //var apiBaseUrlFbMR = "{{Config::get('app.url')}}";
    //var apiBaseUrlFbMR = "https://dev-proapp.carecart.io";
    var apiBaseUrlFbMR = "https://app-mr.carecart.io";
    var CDN_APP_MR_URL = 'https://cdn.jsdelivr.net/gh/carecartapp/app-mr@2.0.13/';

    var facebookCheckboxWidget = {};
    var facebookCheckboxWidgetStatus = null;
    var facebookCheckboxWidgetType = null;
    var facebookPageData = {};
    var facebookAppID = null;
    var isMessengerWidgetPopulated = false;

    this.init = function (callback, callbackArgs) {
        // console.log("Initialization started");

        scriptInjectionFbMR("https://code.jquery.com/jquery-3.2.1.min.js", function () {
        //scriptInjectionFbMR(CDN_APP_MR_URL + "jquery-3.2.1.min.js", function () {
            includeAllJSCombine();
            addJqueryEventListeners();

            console.log("Initialization completed");
            if (typeof callback == 'function') {
                callback.apply(this, callbackArgs);
            }
            //scriptInjectionFbMR("https://code.jquery.com/jquery-3.2.1.min.js", function () {
/*
                scriptInjectionFbMR(CDN_APP_MR_URL + "crypto-js-3.1.2.js", function () {
                //scriptInjectionFbMR("https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/md5.js", function () {
                    window.ccFbMRJquery = jQuery.noConflict(true);
                    //scriptInjectionFbMR(CDN_APP_MR_URL + "use.fontawesome.js");
                    scriptInjectionFbMR("https://use.fontawesome.com/e0a385ecbc.js");

                    addJqueryEventListeners();

                    console.log("Initialization completed");
                    if (typeof callback == 'function') {
                        callback.apply(this, callbackArgs);
                    }

                });
*/
        })
    }


    function getCart(callback) {
        ccFbMRJquery.ajax({
            url: '/cart.js',
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                callback(response);
            },
            error: function (error) {
                callback(error.responseText);
            }
        });
    }

    function clearCart(callback) {
        ccFbMRJquery.ajax({
            url: '/cart/clear.js',
            type: 'GET',
            dataType: 'JSON',
            success: function (response) {
                callback(response);
            },
            error: function (error) {
                callback(error.responseText);
            }
        });
    }

    function getCartFromCommandCenter(id, callback) {
        ccFbMRJquery.ajax({
            url: apiBaseUrlFbMR + "/api/cart/store-front/" + id,
            data: {
                store: storeFbMR
            },
            success: function (response) {
                if (!response.records.hasOwnProperty('cart')) {
                    window.location = '/cart';
                } else {
                    callback(response.records.cart);
                }
            }
        });
    }

    function addProductToCart(product, callback) {

        ccFbMRJquery.ajax({
            url: "/cart/add.js",
            type: 'POST',
            dataType: 'JSON',
            data: product,
            success: function (response) {
                callback(response);
                console.log('------------- Recreation of cart started -------------');
                console.log(response);
                console.log('------------- Recreation of cart end     -------------');
            }
        });
    }


    function updateCartTokenOnCommandCenter(newToken, cart, callback) {

        var data = {
            newToken: newToken,
            store: storeFbMR
        };

        ccFbMRJquery.ajax({
            url: apiBaseUrlFbMR + "/api/cart/store-front/update-token/" + cart.id,
            type: 'POST',
            dataType: 'json',
            data: data,
            success: function (response) {
                callback(response);
                console.log('------------- Update cart token started -------------');
                console.log(response);
                console.log('------------- Update cart token end     -------------');
                callback(response);
            }
        });

    }


    function isOnlyRecoverCart(cart) {

        if(isCartLoadingFbMR == 1) {
            return;
        }
        var queryParametersArray = getQueryParametersFbMR();
        if (typeof queryParametersArray != "undefined" && typeof queryParametersArray.recover_care_cart != 'undefined' && queryParametersArray.recover_care_cart != '') {
            isCartLoadingFbMR = 1;
            ccFbMRJquery('body').html('Loading....');
            getCartFromCommandCenter(queryParametersArray.recover_care_cart, function (recoveryCart) {
                recoverCart(cart, recoveryCart);
            });
            return true;
        }
        return false;
    }

    function recoverCart(cart, recoveryCart) {

        clearCart(function (clearCartResponse) {
            var productsProcessedCount = 0;

            var isProductAddedToCart = undefined;

            if (!recoveryCart.items || !recoveryCart.items.length > 0) {
                window.location = '/cart';
            }

            if (recoveryCart.items.length > 0) {
                var isProductAddedToCartInterval = setInterval(function () {
                    if (isProductAddedToCart == undefined) {
                        isProductAddedToCart = false;
                        addProductToCart(recoveryCart.items[productsProcessedCount], function (addProductToCartResponse) {
                            productsProcessedCount++;
                            isProductAddedToCart = true;
                        });

                    } else if (isProductAddedToCart == true) {
                        isProductAddedToCart = undefined;
                    }

                    if (productsProcessedCount == recoveryCart.items.length) { //all products added to cart now stop that loop
                        console.log("done ..... " + productsProcessedCount);
                        clearInterval(isProductAddedToCartInterval);
                    }


                }, 100);
            }


            var isAllProductsProcessedInterval = setInterval(function () {

                if (productsProcessedCount == recoveryCart.items.length) {
                    console.log("Products processed: " + productsProcessedCount);
                    clearInterval(isAllProductsProcessedInterval);
                    if (cart != undefined) {
                        getCart(function (cart) {
                            var newToken = cart.token;
                            var oldToken = recoveryCart.token;

                            updateCartTokenOnCommandCenter(newToken, recoveryCart, function (updateCartTokenOnCommandCenterResponse) {
                                window.location = '/cart';
                            });
                        });
                    } else {

                        location.reload();
                        return false;
                    }
                }
            }, 100);

        });

    };

    this.process = function (isCapturedByPopup, callBack, isCapturedByMagnet, impressionBy) {
        if (!impressionBy) {
            impressionBy = '';
        }
        // console.log("Processing started", isCapturedByPopup);
        getCart(function (cart) {
            if (isCapturedByPopup == 1) {
                cart.is_email_captured_by_popup = 1;
            }
//************************ isCapturedByMagnet is not needed but called as parameter in CCFBMessengerMarketingCareCart.process many times in file
            /*
                        if (isCapturedByMagnet == 1) {
                            cart.is_captured_by_email_magnet = 1;
                        }
            */
            /*
                        var pnSubscriptionData = {
                            'token': (window.localStorage.getItem('cc-pn-subscription-token')) ? window.localStorage.getItem('cc-pn-subscription-token') : '',
                            'status': (window.localStorage.getItem('cc-pn-subscription-popup')) ? window.localStorage.getItem('cc-pn-subscription-popup') : ''
                        };
            */
            var data = {
                customer: customerFbMR,
                cart: cart,
                store: storeFbMR,
                //pnData: pnSubscriptionData,
                fbUserRef: window.localStorage.getItem('fb_user_ref'),
                productPagePath: getProductPagePath(),
                currentPageUrlWithoutQueryParameters: getCurrentPageUrlWithoutQueryParameters(),
                impressionBy: impressionBy
            };

            if (isOnlyRecoverCart(cart)) {
                console.log('Recovering cart...')
            } else {
                console.log("Update cart on command center FBMR");

                var cartHash_cached = "1";
                var cartHash_live = "2";

                try {
                    cartHash_cached = String(window.localStorage.getItem('cartHash_cached'));
                    cartHash_live = CryptoJS.MD5(JSON.stringify(cart)).toString();
                } catch (e) {
                }

                //if (cartHash_cached != cartHash_live) {

                if (isCheckForCallFbMR) {
                    console.log('FBMR posting create cart');
                    isCheckForCallFbMR = false;
                    ccFbMRJquery.ajax({
                        url: apiBaseUrlFbMR + "/api/cart/store-front/create",
                        dataType: 'json',
                        type: 'POST',
                        data: data,

                        success: function (response) {
                            isCheckForCallFbMR = true;
                            if (response._metadata.outcomeCode == 0 && response.records.cart) {
                                var activeInterface = response.records.active_interface;
                                var cartData = response.records.cart;
                                if ((typeof cartData.id !== 'undefined') && cartData.store_id !== 'undefined') {
                                    window.localStorage.setItem('userCartId', cartData.store_id + '-' + cartData.id);
                                    console.log("Cart ID is Set after success");
                                } else {
                                    window.localStorage.setItem('userCartId', null);
                                    console.log("Cart ID is NOT Set after success");
                                }
                                if ((typeof response.records.visitor !== 'undefined') && cartData.store_id !== 'undefined') {
                                    window.localStorage.setItem('store_visitor_id', response.records.visitor);
                                }
                                else
                                {
                                    window.localStorage.setItem('store_visitor_id', null);
                                }

                                var addToCartPopUpData = response.records.addToCartPopUp;
                                if (response.records.isNeedToReInsert) {
                                    recoverCart(undefined, cartData);
                                }
                                var stickyDiscountDataPlain = null;
                                if (response.records.hasOwnProperty('stickyDiscount') && response.records.stickyDiscount != null) {
                                    stickyDiscountDataPlain = response.records.stickyDiscount;
                                    /*
                                                                            var stickyDiscountData = JSON.stringify(response.records.stickyDiscount);
                                                                            window.localStorage.setItem('stickyDiscountData',stickyDiscountData);
                                    */
                                    console.log("Sticky Discount Set after success");
                                    //console.log('stickyDiscountData:' + stickyDiscountData);
                                }
                                else{
                                    console.log("Sticky Discount NOT Set after success");
                                }

                                if (response.records.hasOwnProperty('messenger') && response.records.messenger != null) {//Messenger Processing
                                    var messengerData = response.records.messenger;
                                    //window.localStorage.setItem('messengerData',messengerData);
                                    window.localStorage.setItem('messengerData', JSON.stringify(messengerData));
                                    /*
                                                                        console.log('messengerData appId: ' + messengerData.appId);
                                                                        console.log('messengerData facebookPage: ' + messengerData.facebookPage);
                                                                        console.log('messengerData facebookCheckboxWidget: ' + messengerData.facebookCheckboxWidget);
                                                                        console.log('messengerData' + JSON.stringify(messengerData));
                                    */
                                    if (isMessengerWidgetPopulated == false) {
                                        isMessengerWidgetPopulated = true;
                                        processMessenger(messengerData,addToCartPopUpData,stickyDiscountDataPlain);
                                    }

                                }
                                console.log('shop: ' + Shopify.shop);
                                window.localStorage.setItem('cartHash_cached', cartHash_live);
                            }
                            if (response._metadata.outcomeCode == 1){
                                console.log(response._metadata.message);
                            }
                        },
                        error: function (response) {
                            console.log('Something Went Wrong Mate! Contact app-mr Support');
                        }
                    });
                }
                else
                {
                    console.log('FBMR NOT posting create cart');
                }
                //}
            }
        });
    };

    function getProductPagePath() {
        var productDetailsPath = /https?\:\/\/([^\/]*)(.*\/products[^\?]*).*/;
        var currentUrl = String(getCurrentURL());
        var matched = currentUrl.match(productDetailsPath);
        return matched != null && matched.length > 2 ? matched[2] : null;
    }

    function getCurrentPageUrlWithoutQueryParameters() {
        var productDetailsPath = /https?\:\/\/([^\/]*)([^\?]*).*/;
        var currentUrl = String(getCurrentURL());
        var matched = currentUrl.match(productDetailsPath);
        return matched != null && matched.length > 2 ? matched[2] : null;
    }

    function getCurrentURL() {
        return window.location.href;
    }

    function setUpFacebookAPPCredentials(appId) {
        window.fbAsyncInit = function () {
            FB.init({
                appId: appId,
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v7.0'
            });

            FB.Event.subscribe('send_to_messenger', function (e) {
                // callback for events triggered by the plugin
                console.log('inside the send_to_messenger');
                //console.log(e);
                if (e.event == 'rendered') {
                    console.log("Send to Messenger Plugin was rendered");
                }
                if (e.event == 'clicked' ){
                    ccFbMRJquery('#thank-you-div', 'body').show();
                    setTimeout( function(){
                        // Do something after 1 second
                        ccFbMRJquery('#cc-atcp-table', 'body').hide();
                    }  , 2000 );
//************************ So that pop-up doesn't open again in same session **************************************
                    window.localStorage.setItem('popUpCloseClicked',1);
                    console.log("Send to Messenger Button Clicked & the popup should hide now");
                }
                //window.top.location = 'http://google.com';

            });

            FB.Event.subscribe('messenger_checkbox', function (e) {
                console.log("messenger_checkbox event");
                //console.log('FB user_ref: ' + e.user_ref);
                console.log(e);

                if (e.event == 'rendered') {
                    console.log("Plugin was rendered");
                    if(Shopify.shop == 'dev-messenger-12.myshopify.com' || Shopify.shop == 'epilsense.myshopify.com' || Shopify.shop == 'devotedwear.myshopify.com')
                    {
                        ccFbMRJquery('head').append('<style type="text/css">.cc-atc-widget-main-container{margin-top: 110px !important;}</style>');
                        console.log("checkbox styling implemented special");
                    }
                    else if(Shopify.shop == 'ultravioletsaver.myshopify.com' || Shopify.shop == 'dev-messenger-15.myshopify.com')
                    {
                        ccFbMRJquery('.cc-messenger-checkbox-for-copy').find('span:first').css({
                            width: "190"
                        });
                        console.log('Special Discount Widget Color White');
                    }
                    else if(Shopify.shop == 'galt-webshop.myshopify.com')
                    {
                        // remove upper case css from h4 of class cc_messenger_widget_atc_title
                        ccFbMRJquery('head').append('<style type="text/css">.cc_messenger_widget_atc_title {text-transform: none !important;}</style>');
                        console.log("remove upper case css from h4 of class cc_messenger_widget_atc_title");
                    }
                    else if(Shopify.shop == 'ylff.myshopify.com')
                    {
                        ccFbMRJquery('head').append('<style type="text/css">#trust_seal_ppr { padding-top: 10px;}</style>');
                        console.log("ylff.myshopify.com custom styling applied");
                    }
                    else if(Shopify.shop == '77mo.myshopify.com')
                    {
                        ccFbMRJquery('head').append('<style type="text/css">#trust_seal_ppr { padding-top: 15px;}</style>');
                        console.log("ylff.myshopify.com custom styling applied");
                    }
                    /*
                                            else if(Shopify.shop == 'hifinage-the-auditory-sensation.myshopify.com')
                                            {
                                                ccFbMRJquery('head').append('<style type="text/css">.cc-messenger-discount-popup {margin-bottom: 40px;}</style>');
                                                console.log("hifinage special css");
                                            }
                    */
                    else
                    {
                        ccFbMRJquery('head').append('<style type="text/css">.cc-atc-widget-main-container{margin-top: 0 !important;}</style>');
                        console.log("checkbox styling implemented");
                    }
                } else if (e.event == 'checkbox') {
                    var checkboxState = e.state;
                    console.log("Checkbox state: " + checkboxState);
                    if (checkboxState == 'checked') {
                        confirmOptIn();
                    } else {
                        console.log("Unchecked");
                    }
                    facebookCheckboxWidgetStatus = e.state;
                    if (e.state == 'checked') {
                        window.localStorage.setItem('fb_user_ref', null);
                        window.localStorage.setItem('fb_user_ref',e.user_ref);
                        console.log('fb_user_ref is set: ' + window.localStorage.getItem('fb_user_ref'));
                    }
                    console.log('appId: ' + appId);
                } else if (e.event == 'not_you') {
                    console.log("User clicked 'not you'");
                } else if (e.event == 'hidden') {
                    console.log('In Hidden .... appId: ' + appId);
                    console.log("Plugin was hidden");
                }

            });

            FB.Event.subscribe('customerchat.show', function (e) {
                console.log("customerchat.show event");
            });

            FB.Event.subscribe('customerchat.load', function (e) {
                console.log("customerchat.load event");
                var messengerDetailsNew = JSON.parse(window.localStorage.getItem('messengerData'));
                var fbMessengerPosition = messengerDetailsNew.facebookMessenger.messenger_position;
                var fbPixelsFromBottom = messengerDetailsNew.facebookMessenger.pixels_from_bottom;
                var fbPixelsFromBottomSubtract = fbPixelsFromBottom - 80;
                var fbPixelsFromBottomIcon = fbPixelsFromBottomSubtract + 24;
                //console.log("Customer chat loaded on store: " + Shopify.shop);

                ccFbMRJquery('head').append('<style type="text/css">.fb_dialog_advanced {padding: 0}</style>');
                //*************** As per DB Settings ********************
                if(fbPixelsFromBottom > 0)
                {
                    if(fbPixelsFromBottomSubtract > 0)
                    {
                        ccFbMRJquery('head').append('<style type="text/css">.fb-customerchat.fb_invisible_flow.fb_iframe_widget iframe {bottom: ' + fbPixelsFromBottom +'px !important;}.fb_dialog {position: -webkit-sticky !important;position: fixed !important;bottom: ' + fbPixelsFromBottomSubtract + 'px !important;}.fb_dialog_content iframe {bottom: ' + fbPixelsFromBottomIcon + 'px !important;}</style>');
                        console.log("New styling loaded ... Messenger on " + fbMessengerPosition + " of screen & " + fbPixelsFromBottom + " pixels from bottom");
                    }
                }

                if(fbMessengerPosition == 'left')
                {
                    ccFbMRJquery('head').append('<style type="text/css">.fb-customerchat.fb_invisible_flow.fb_iframe_widget iframe {left: 30px !important;}.fb_dialog {position: -webkit-sticky !important;position: fixed !important;left: 30px !important;} .fb_dialog_content iframe {left: 45px !important;}</style>');
                    console.log("New styling loaded ... Messenger on left side of screen");
                }

                if(Shopify.shop == 'ho-liao.myshopify.com' || Shopify.shop == 'killwinner-design.myshopify.com')
                {
                    // remove upper case css from h4 of class cc_messenger_widget_atc_title
                    ccFbMRJquery('head').append('<style type="text/css">.fb-customerchat.fb_invisible_flow.fb_iframe_widget iframe{left: 0px !important;}</style>');
                    console.log("Fix FB Messenger view in Mobile View... Previously getting cut");
                }
            });
            /*
            //****************** Check Facebook Login Status of user on Store Frontend Page *********************
                            FB.getLoginStatus(function(response) {
                                if (response.status === 'connected') {
                                    // The user is logged in and has authenticated your
                                    // app, and response.authResponse supplies
                                    // the user's ID, a valid access token, a signed
                                    // request, and the time the access token
                                    // and signed request each expire.
                                    var uid = response.authResponse.userID;
                                    var accessToken = response.authResponse.accessToken;
                                    console.log('The user is logged in and has authenticated your app');
                                } else if (response.status === 'not_authorized') {
                                    // The user hasn't authorized your application.  They
                                    // must click the Login button, or you must call FB.login
                                    // in response to a user gesture, to launch a login dialog.
                                    console.log('The user hasn\'t authorized your application.  They must click the Login button, or you must call FB.login');
                                } else {
                                    // The user isn't logged in to Facebook. You can launch a
                                    // login dialog with a user gesture, but the user may have
                                    // to log in to Facebook before authorizing your application.
                                    console.log('The user isn\'t logged in to Facebook. You can launch a login dialog with a user gesture, but the user may have to log in to Facebook before authorizing your application')
                                }
                            });
            */
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            /*
                            //js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
                            if(Shopify.shop == 'galt-webshop.myshopify.com')
                            {
                                js.src = "https://connect.facebook.net/hu_HU/sdk/xfbml.customerchat.js";
                            }
                            else
                            {
                                var messengerDetails = JSON.parse(window.localStorage.getItem('messengerData'));
                                //console.log("messengerDetails: " + messengerDetails.facebookPage.fb_lang_iso);
                                var fb_lang_iso = messengerDetails.facebookPage.fb_lang_iso;
                                //js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
                                js.src = "https://connect.facebook.net/" + fb_lang_iso + "/sdk/xfbml.customerchat.js";
                            }
            */
            var messengerDetails = JSON.parse(window.localStorage.getItem('messengerData'));
            //console.log("messengerDetails: " + messengerDetails.facebookPage.fb_lang_iso);
            var fb_lang_iso = messengerDetails.facebookPage.fb_lang_iso;
            //js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
            js.src = "https://connect.facebook.net/" + fb_lang_iso + "/sdk/xfbml.customerchat.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        var elem = document.createElement('div');
        elem.setAttribute('id', 'fb-root');
        document.body.appendChild(elem);

    }

    function displayFacebookMessenger(facebookPageData, facebookMessengerData) {

        if (!facebookPageData.hasOwnProperty('ref_facebook_page_id') || facebookPageData.ref_facebook_page_id == undefined || !facebookPageData.ref_facebook_page_id) return;
        if (!facebookMessengerData.hasOwnProperty('id') || facebookMessengerData.id == undefined || !facebookMessengerData.id) return;

        if (facebookMessengerData.is_active != 1) return;

        if(Shopify.shop == 'vapeboss-ph.myshopify.com')
        {
//************************** Load Messenger ONLY on Products Page as requested by Store Owner ***************************
            console.log("IN vapeboss-ph.myshopify.com STORE");
            var URL = window.location.href;
            var aurl = URL.split('/');
            //console.log("aurl: " + aurl[3]);
            product_id = null;
            if (aurl[3] == 'products' || aurl[5] == 'products')
            {
                product_id = meta.product.id;
            }
            if(product_id !== null)
            {
                console.log("product_id is NOT null: " + product_id);
            }
            else
            {
                console.log("product_id is null: " + product_id);
                return;
            }
        }
        var elem = document.createElement('div');
        elem.setAttribute('class', 'fb-customerchat');
        elem.setAttribute('attribution', 'setup_tool');
        elem.setAttribute('page_id', facebookPageData.ref_facebook_page_id);
        elem.setAttribute('theme_color', facebookMessengerData.theme_color);
        elem.setAttribute('logged_in_greeting', facebookMessengerData.logged_in_users_greeting_text);
        elem.setAttribute('logged_out_greeting', facebookMessengerData.logged_out_users_greeting_text);
        elem.setAttribute('minimized', facebookMessengerData.display_options);
        document.body.appendChild(elem);
    }

    function confirmOptIn() {

        if (window.localStorage.getItem('userCartId') !== 'undefined' && window.localStorage.getItem('userCartId') !== null && window.localStorage.getItem('userCartId') !== 'null') {
            var data = {
                'app_id': (facebookAppID) ? facebookAppID : '',
                'page_id': (facebookPageData.ref_facebook_page_id) ? facebookPageData.ref_facebook_page_id : '',
                'ref': (window.localStorage.getItem('userCartId')) ? window.localStorage.getItem('userCartId') : '',
                'user_ref': (facebookCheckboxWidget.user_ref) ? facebookCheckboxWidget.user_ref : ''
            };
            console.log('ref in userCartId is SET:' + localStorage.getItem('userCartId'));
            showPopupTriggerImpression();

        } else {
            var data = {
                'app_id': (facebookAppID) ? facebookAppID : '',
                'page_id': (facebookPageData.ref_facebook_page_id) ? facebookPageData.ref_facebook_page_id : '',
                'ref': (facebookCheckboxWidget.ref) ? facebookCheckboxWidget.ref : '',
                'user_ref': (facebookCheckboxWidget.user_ref) ? facebookCheckboxWidget.user_ref : ''
            };
            console.log('ref in userCartId NOT SET');
        }
        FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, data);
        console.log('data ref in confirmOptIn:' + data.ref);
        console.log('confirmOptIn() Function Triggered');
        if (window.localStorage.getItem('userCartId') !== 'undefined' && window.localStorage.getItem('userCartId') !== null && window.localStorage.getItem('userCartId') !== 'null') {
            window.localStorage.setItem('userCartId', null);
        }
    }

    function showPopupTriggerImpression()
    {
        //console.log("In showPopupTriggerImpression");
        if(window.localStorage.getItem('popUpCloseClicked') == 1) return;
        var careCartMessengerDiv = ccFbMRJquery("body").find("#cc-popup-widget-container");
        //******************* Check if Popup Data is filled up *****************
        if (careCartMessengerDiv.length > 0) {
            ccFbMRJquery('#cc-atcp-table', 'body').show();
            console.log("Popup Displayed");
            //do something special
            if (window.localStorage.getItem('userCartId') !== 'undefined' && window.localStorage.getItem('userCartId') !== null && window.localStorage.getItem('userCartId') !== 'null') {
                var cartID = window.localStorage.getItem('userCartId');
                //console.log("cartIDFull: " + cartID);
                var splitString = cartID.split('-');
                //console.log("storeID: " + splitString[0]);
                //console.log("cartID: " + splitString[1]);
                //console.log("storeFbMR: " + storeFbMR.domain);
                var data = {
                    store: storeFbMR,
                    cart: splitString[1]
                }
                //console.log("Gonna Trigger Impression Save");
                ccFbMRJquery.ajax({
                    url: apiBaseUrlFbMR + "/api/cart/store-front/create-pop-up-impression",
                    dataType: 'json',
                    type: 'POST',
                    data: data,

                    success: function (response) {
                        //console.log("response Success: " + response.data);
                    }
                });
            }
            else
            {
                console.log("userCartId is null & unable to send impression");
            }

        }
    }

    function displayFacebookCheckboxWidget(appId, facebookPageData, facebookCheckboxWidget) {

        if (!facebookPageData.hasOwnProperty('ref_facebook_page_id') || facebookPageData.ref_facebook_page_id == undefined || !facebookPageData.ref_facebook_page_id) return;
        if (!facebookCheckboxWidget.hasOwnProperty('id') || facebookCheckboxWidget.id == undefined || !facebookCheckboxWidget.id) return;
        if (!facebookCheckboxWidget.hasOwnProperty('checkbox_widget') || facebookCheckboxWidget.checkbox_widget == undefined || facebookCheckboxWidget.checkbox_widget.id == undefined || !facebookCheckboxWidget.checkbox_widget.id) return;
        if (facebookCheckboxWidget.is_active == 0) return;
        var checkBoxWidgetData = facebookCheckboxWidget.checkbox_widget;

        var elem = document.createElement('div');
        elem.setAttribute('origin', facebookCheckboxWidget.origin);
        elem.setAttribute('page_id', facebookPageData.ref_facebook_page_id);
        elem.setAttribute('messenger_app_id', appId);
        elem.setAttribute('user_ref', (facebookCheckboxWidget.user_ref) ? facebookCheckboxWidget.user_ref : '');
        elem.setAttribute('class', 'fb-messenger-checkbox');
        elem.setAttribute('prechecked', 'true');
        elem.setAttribute('allow_login', 'true');
        // elem.setAttribute('size', (facebookCheckboxWidget.checkbox_widget.size) ? facebookCheckboxWidget.checkbox_widget.size : '');

        elem.setAttribute('size', (facebookCheckboxWidget.checkbox_widget.size) ? facebookCheckboxWidget.checkbox_widget.size : '');
        // elem.setAttribute('skin', (facebookCheckboxWidget.checkbox_widget.text_color) ? facebookCheckboxWidget.checkbox_widget.text_color : '');

        elem.setAttribute('skin', (facebookCheckboxWidget.checkbox_widget.text_color) ? facebookCheckboxWidget.checkbox_widget.text_color : '');
        elem.setAttribute('center_align', (facebookCheckboxWidget.checkbox_widget.center_align == 1) ? 'true' : 'false');

        var mainElem = '<div style="border: 1px solid #ededed;padding: 10px 10px 17px;border-radius: 4px;" class="cc-atc-widget-main-container">' +
            '<div class="name-detail name-detail-edit" style="padding-top: 0 !important;">' +
            '<h4 class="cc_messenger_widget_atc_title">' + facebookCheckboxWidget.checkbox_widget.text + '</h4>' +
            '<div id="cc-atc-widget-container"></div>' +
            '</div>' +
            '</div>';

        if (checkBoxWidgetData.type == 'ATC') {
            facebookCheckboxWidgetType = "ATC";

            if(Shopify.shop == 'new-gear-day.myshopify.com')
            {
//************************** Load Messenger ONLY on Products Page as requested by Store Owner ***************************
                console.log("IN vapeboss-ph.myshopify.com STORE");
                var URL = window.location.href;
                var aurl = URL.split('/');
                //console.log("aurl: " + aurl[3]);
                product_id = null;
                if (aurl[3] == 'products' || aurl[5] == 'products')
                {
                    product_id = meta.product.id;
                }
                if(product_id !== null)
                {
                    console.log("product_id is NOT null: " + product_id);
                }
                else
                {
                    console.log("product_id is null: " + product_id);
                    return;
                }
            }

            populateATCWidget(mainElem, elem, function () {
                ccFbMRJquery(".cc_messenger_widget_atc_title").css('font-size', facebookCheckboxWidget.checkbox_widget.size);

                if (facebookCheckboxWidget.checkbox_widget.text_color == 'dark') {
                    ccFbMRJquery(".cc-atc-widget-main-container").css('background-color', '#383838');
                    ccFbMRJquery(".cc_messenger_widget_atc_title").css('color', '#fff');
                } else {
                    ccFbMRJquery(".cc-atc-widget-main-container").css('background-color', '');
                    ccFbMRJquery(".cc_messenger_widget_atc_title").css('color', '#000');
                }

                if (facebookCheckboxWidget.checkbox_widget.center_align == 1) {
                    ccFbMRJquery(".cc_messenger_widget_atc_title").css('text-align', 'center');
                } else {
                    ccFbMRJquery(".cc_messenger_widget_atc_title").css('text-align', 'left');
                }
            });
        } else {
            showDiscountWidget(checkBoxWidgetData, elem);
        }
    }

    function showDiscountWidget(checkBoxWidgetData, elem) {
        if(Shopify.shop == 'dev-messenger-12.myshopify.com' || Shopify.shop == 'vensazia.myshopify.com')
        {
            var discountWidgetCss =
                '<style type="text/css">' +
                '@media only screen and (min-width: 1200px){' +
                '.cc-messenger-discount-popup {' +
                'width: 100%;' +
                '}' +
                '}'	+
                '@media only screen and (max-width: 767px)  {' +
                '.cc-messenger-discount-popup {' +
                'width: 100%;' +
                '}' +
                '}' +
                '</style>';
            ccFbMRJquery('body').append(discountWidgetCss);
        }
        if(Shopify.shop == 'vensazia.myshopify.com')
        {
            var discountWidgetCss =
                '<style type="text/css">' +
                '@media only screen and (min-width: 1200px){' +
                '.cc-messenger-discount-popup {' +
                'width: 70%;' +
                '}' +
                '}'	+
                '@media only screen and (max-width: 767px)  {' +
                '.cc-messenger-discount-popup {' +
                'width: 100%;' +
                '}' +
                '}' +
                '</style>';
            ccFbMRJquery('body').append(discountWidgetCss);
        }
        var careCartMessengerDiv = ccFbMRJquery("body").find(".carecart-messenger");
        var myvar = '';
        if(Shopify.shop == 'ultravioletsaver.myshopify.com' || Shopify.shop == 'dev-messenger-15.myshopify.com')
        {
            myvar = myvar + '<div class="cc-messenger-discount-popup" class="discount-coupon-wrapper-cc" style="width: 300px;display: block;margin: auto;margin-top: 25px;">'
        }
        else if(Shopify.shop == 'dev-messenger-12.myshopify.com' || Shopify.shop == 'vensazia.myshopify.com')
        {
            myvar = myvar + '<div class="cc-messenger-discount-popup" class="discount-coupon-wrapper-cc">'
        }
        else if(Shopify.shop == 'the-outlet-x.myshopify.com')
        {
            myvar = myvar + '<div class="cc-messenger-discount-popup" class="discount-coupon-wrapper-cc" style="width: 400px; height: 280px;">'
        }
        else if(Shopify.shop == 'thefurzy.myshopify.com')
        {
            //console.log('custom styling for thefurzy new');
            myvar = myvar +
                '<div class="cc-messenger-discount-popup" style="width: 400px;height: 220px;">';
        }
        else
        {
            myvar = myvar + '<div class="cc-messenger-discount-popup" class="discount-coupon-wrapper-cc" style="width: 400px;">';
        }
        if(Shopify.shop == 'dev-messenger-12.myshopify.com' || Shopify.shop == 'vensazia.myshopify.com')
        {
            myvar = myvar +
                '<div style="text-align: center;">';
        }
        else
        {
            myvar = myvar +
                //'<div class="cc-messenger-discount-popup" class="discount-coupon-wrapper-cc" style="width: 400px;">' +
                '<div style="text-align: center;max-width: 400px;">';
        }
        //'<h4 style="color: #3c495a;font-size: 16px;font-weight: 700;">' + checkBoxWidgetData.title + '</h4>' +
        // '<p style="color: #7a8da4;font-size: 12px;">' + checkBoxWidgetData.subtitle + '</p>' +
        if(Shopify.shop == 'ultravioletsaver.myshopify.com' || Shopify.shop == 'dev-messenger-15.myshopify.com')
        {
            myvar = myvar +
                '<h4 style="color: #fff;font-size: 16px;font-weight: 700;">' + checkBoxWidgetData.title + '</h4>' +
                '<p style="color: #fff;font-size: 12px;">' + checkBoxWidgetData.subtitle + '</p>';
        }
        else
        {
            var widgetTitleColor = (facebookCheckboxWidget.checkbox_widget.title_color) ? facebookCheckboxWidget.checkbox_widget.title_color : "#3c495a";
            var widgetSubTitleColor = (facebookCheckboxWidget.checkbox_widget.subtitle_color) ? facebookCheckboxWidget.checkbox_widget.subtitle_color : "#7a8da4";
            myvar = myvar +
                '<h4 style="color: ' + widgetTitleColor + ';font-size: 16px;font-weight: 700;">' + checkBoxWidgetData.title + '</h4>' +
                '<p style="color: ' + widgetSubTitleColor + ';font-size: 12px;">' + checkBoxWidgetData.subtitle + '</p>';
        }
        myvar = myvar +
            '</div>';
        if(Shopify.shop == 'ultravioletsaver.myshopify.com' || Shopify.shop == 'dev-messenger-15.myshopify.com')
        {
            myvar = myvar +
                '<div class="cc-messenger-checkbox-for-copy" style="border: 1px solid #ededed;padding: 10px 10px 7px;border-radius: 4px;display: inline-flex; width: 280px !important;border-color: transparent !important;">';
        }
        else if(Shopify.shop == 'dev-messenger-12.myshopify.com' || Shopify.shop == 'vensazia.myshopify.com')
        {
            myvar = myvar +
                '<div class="cc-messenger-checkbox-for-copy" style="background-color: #FFFFFF;border: 1px solid #ededed;padding: 10px 10px 7px;border-radius: 4px;display: inline-flex; max-width: 100%; width: 100%">';
        }
        else
        {
            var bgColorDiv = "#61A8DE";
            if(facebookCheckboxWidget.checkbox_widget.text_color == 'dark')
            {
                bgColorDiv = "#383838";
            }
            else
            {
                bgColorDiv = "#FFFFFF";
            }
            myvar = myvar +
                '<div class="cc-messenger-checkbox-for-copy" style="background-color: ' +  bgColorDiv +';border: 1px solid #ededed;padding: 10px 10px 7px;border-radius: 4px;display: inline-flex; min-width: 400px !important;">';
        }
        //'<div class="cc-messenger-checkbox-for-copy" style="border: 1px solid #ededed;padding: 10px 10px 7px;border-radius: 4px;display: inline-flex; min-width: 400px !important;">';
        if(Shopify.shop == 'ultravioletsaver.myshopify.com' || Shopify.shop == 'dev-messenger-15.myshopify.com')
        {
            myvar = myvar +
                '<div style="background-color: transparent;border-color: transparent !important;font-size: 46px;color: #fff;padding: 1px 20px;border-radius: 4px;border: 1px solid #ededed;width: 65px;height: 65px;float: left;margin-right: 10px;text-align: center;">%</div>';
        }
        else
        {
            var percentBgColor = (facebookCheckboxWidget.checkbox_widget.discount_tag_color) ? facebookCheckboxWidget.checkbox_widget.discount_tag_color : "#ff008a";
            myvar = myvar +
                '<div style="background-color: ' + percentBgColor + ';font-size: 24px;color: #fff;padding: 13px 20px;border-radius: 4px;border: 1px solid #ededed;width: 85px;height: 65px;float: left;margin-right: 35px;text-align: center;">%</div>';
        }
        //'<div style="background-color: #ff008a;font-size: 24px;color: #fff;padding: 13px 20px;border-radius: 4px;border: 1px solid #ededed;width: 85px;height: 65px;float: left;margin-right: 35px;text-align: center;">%</div>' +
        var dwButtonsBgColor = (facebookCheckboxWidget.checkbox_widget.buttons_color) ? facebookCheckboxWidget.checkbox_widget.buttons_color : "#00a651";
        myvar = myvar +

            '<div style="padding-top: 0px;" class="cc-messenger-checkbox-optin">' +
            '</div>' +
            '</div>' +
            '<div style="text-align: center;">' +
            '<a class="cc-dw-btn" style="cursor:pointer;background-color: ' + dwButtonsBgColor +';color: #fff;font-size: 13px;padding: 12px 25px;position: relative; top: 20px;" type="button">' + checkBoxWidgetData.coupon_button + '</a><br>' +
            '<span style="color: red;display: none;position: relative;top: 35px;" class="cc-checkbox-error">Please first click the "Send to Messenger" Checkbox above</span>' +
            '</div>' +

            '</div>';

        if (careCartMessengerDiv.length > 0) {
            ccFbMRJquery(careCartMessengerDiv).append(myvar);
            ccFbMRJquery('.cc-messenger-checkbox-optin').append(elem);
        } else {
            ccFbMRJquery('form[action="/cart/add"]').append(myvar);
            ccFbMRJquery('.cc-messenger-checkbox-optin').append(elem);
        }

        if(Shopify.shop == 'hifinage-the-auditory-sensation.myshopify.com')
        {
            ccFbMRJquery('head').append('<style type="text/css">.cc-messenger-discount-popup {margin-bottom: 40px;} .cc-dw-btn {background-color: #fff !important;border: 1px solid #ddd !important;color: #000 !important;text-transform: uppercase;}</style>');
            console.log("hifinage special css");
        }
    }

    function buildSendToMessengerWidget(appId, facebookPageData,addToCartPopUpData) {
        if (!facebookPageData.hasOwnProperty('ref_facebook_page_id') || facebookPageData.ref_facebook_page_id == undefined || !facebookPageData.ref_facebook_page_id) return;
        if (!facebookCheckboxWidget.hasOwnProperty('id') || facebookCheckboxWidget.id == undefined || !facebookCheckboxWidget.id) return;
        if (addToCartPopUpData.is_active == 0) return;
        //if(window.localStorage.getItem('popUpCloseClicked') == 1) return;

        console.log("Inside buildSendToMessengerWidget & is_active == 1");

        var elementSendToMessenger = document.createElement('div');
        elementSendToMessenger.setAttribute('class', 'fb-send-to-messenger');
        elementSendToMessenger.setAttribute('messenger_app_id', appId);
        elementSendToMessenger.setAttribute('page_id', facebookPageData.ref_facebook_page_id);
        //elementSendToMessenger.setAttribute('data-ref', "PASS_THROUGH_PARAM");
        elementSendToMessenger.setAttribute('data-ref', (facebookCheckboxWidget.user_ref) ? facebookCheckboxWidget.user_ref : '');
        //elementSendToMessenger.setAttribute('color', 'blue');
        elementSendToMessenger.setAttribute('color', addToCartPopUpData.button_background_color_send_to_messenger);
        //elementSendToMessenger.setAttribute('cta_text', 'GET_CUSTOMER_ASSISTANCE');
        elementSendToMessenger.setAttribute('cta_text', addToCartPopUpData.button_text_send_to_messenger);
        elementSendToMessenger.setAttribute('size', 'large');

        var mainElem = '<div id="cc-send-to-messenger-widget-main-container">' +

            '<div id="cc-send-to-messenger-widget-container"></div>' +

            '</div>';

        populateSendToMessengerWidget(mainElem, elementSendToMessenger, addToCartPopUpData, function () {
            //populateATCWidget(mainElem, elementSendToMessenger, function () {
            /*
                            ccFbMRJquery(".cc_messenger_widget_atc_title").css('font-size', facebookCheckboxWidget.checkbox_widget.size);

                            if (facebookCheckboxWidget.checkbox_widget.text_color == 'dark') {
                                ccFbMRJquery(".cc-atc-widget-main-container").css('background-color', '#383838');
                                ccFbMRJquery(".cc_messenger_widget_atc_title").css('color', '#fff');
                            } else {
                                ccFbMRJquery(".cc-atc-widget-main-container").css('background-color', '');
                                ccFbMRJquery(".cc_messenger_widget_atc_title").css('color', '#000');
                            }

                            if (facebookCheckboxWidget.checkbox_widget.center_align == 1) {
                                ccFbMRJquery(".cc_messenger_widget_atc_title").css('text-align', 'center');
                            } else {
                                ccFbMRJquery(".cc_messenger_widget_atc_title").css('text-align', 'left');
                            }
            */
        });

    }

    function populateATCWidget(mainElem, elem, callBack) {
        var careCartMessengerDiv = ccFbMRJquery("body").find(".carecart-messenger");
        if (careCartMessengerDiv.length > 0) {
            //console.log('mainElem populateATCWidget: ' + mainElem);
            //console.log('elem populateATCWidget: ' + elem);
            ccFbMRJquery(careCartMessengerDiv).append(mainElem);
            ccFbMRJquery('#cc-atc-widget-container').append(elem);
        } else {
            //console.log('mainElem in else populateATCWidget: ' + mainElem);
            //console.log('elem in else populateATCWidget: ' + elem);
            ccFbMRJquery('form[action="/cart/add"]').append(mainElem);
            ccFbMRJquery('#cc-atc-widget-container').append(elem);
        }
        if (typeof callBack == 'function') callBack();
    }

    function populateSendToMessengerWidget(mainElem, elem, addToCartPopUpData, callBack) {
        showAddToCartPopup(addToCartPopUpData, function () {

            //var careCartMessengerDiv = ccFbMRJquery("body").find(".carecart-messenger");
            var careCartMessengerDiv = ccFbMRJquery("body").find("#cc-popup-widget-container");
            if (careCartMessengerDiv.length > 0) {
                //console.log('mainElem in populateSendToMessengerWidget: ' + mainElem);
                //console.log('mainElem in populateSendToMessengerWidget: ');
                //console.log('elem in populateSendToMessengerWidget: ' + elem);
                //console.log('elem in populateSendToMessengerWidget: ');
                ccFbMRJquery(careCartMessengerDiv).append(mainElem);
                //ccFbMRJquery('#cc-popup-widget-container').append(elem);
                ccFbMRJquery('#cc-send-to-messenger-widget-container').append(elem);
            } else {
                //console.log('mainElem in else populateSendToMessengerWidget: ' + mainElem);
                console.log('mainElem in else populateSendToMessengerWidget: ');
                //console.log('elem in else populateSendToMessengerWidget: ' + elem);
                console.log('elem in else populateSendToMessengerWidget: ');
                //ccFbMRJquery('form[action="/cart/add"]').append(mainElem);
                //ccFbMRJquery('#cc-atc-widget-container').append(elem);
            }
            console.log("Should display cc-atcp-table from populateSendToMessengerWidget");
            if (getParameterByName('cc-mr-preview-add-to-cart')) {
                ccFbMRJquery('#cc-atcp-table', 'body').show();
                console.log("Preview - Should display cc-atcp-table from populateSendToMessengerWidget");
            }
            else
            {
                ccFbMRJquery('#cc-atcp-table', 'body').hide();
            }
        });
        if (typeof callBack == 'function') callBack();
    }

    function processMessenger(messengerData, addToCartPopUpData, stickyDiscountData) {

        if (messengerData == undefined || messengerData == null) return;
        if (!messengerData.hasOwnProperty('appId') || messengerData.appId == undefined || !messengerData.appId) return;
        var appId = messengerData.appId;
        setUpFacebookAPPCredentials(appId);//initialize facebook app


        if (messengerData.hasOwnProperty('facebookPage') && !(messengerData.facebookPage == undefined) && messengerData.facebookPage) {//verify facebook page property exists
            if (messengerData.hasOwnProperty('facebookMessenger') && !(messengerData.facebookMessenger == undefined) && messengerData.facebookMessenger) {//verify facebook messenger property exists
                displayFacebookMessenger(
                    messengerData.facebookPage,
                    messengerData.facebookMessenger
                );
            }//End verify facebook messenger property exists

            if (messengerData.hasOwnProperty('facebookCheckboxWidget') && !(messengerData.facebookCheckboxWidget == undefined) && messengerData.facebookCheckboxWidget) {//verify facebook checkbox widget property exists
                facebookCheckboxWidget = messengerData.facebookCheckboxWidget;
                facebookPageData = messengerData.facebookPage;
                facebookAppID = messengerData.appId;
                displayFacebookCheckboxWidget(
                    appId,
                    messengerData.facebookPage,
                    messengerData.facebookCheckboxWidget
                );
            }//End verify facebook checkbox widget property exists

//****************************** Load Add to Cart Popup with Messenger Widget ****************************************
//****************************** If Popup Exists & is active & FB Page is associated (checked above), only then make pop-up with messenger ***************************
            if(addToCartPopUpData.hasOwnProperty('is_active') && addToCartPopUpData.is_active == 1)
            {
                //console.log("addToCartPopUpData has property is_active & is_active == 1");
                facebookPageData = messengerData.facebookPage;
                buildSendToMessengerWidget(
                    appId,
                    facebookPageData,
                    addToCartPopUpData
                );
            }
            else
            {
                console.log("addToCartPopUpData is NOT active");
            }
            if(stickyDiscountData != null)
            {
                if((stickyDiscountData.hasOwnProperty('is_active') && stickyDiscountData.is_active == 1) || getParameterByName('cc-mr-preview-sticky-discount'))
                {
                    //console.log("stickyDiscountData is ACTIVE");
                    facebookPageData = messengerData.facebookPage;
                    stickyDiscountFunction(appId,
                        facebookPageData,
                        stickyDiscountData);
                }
                else
                {
                    console.log("stickyDiscountData is NOT active");
                }
            }
        }//End verify facebook page property exists

    }
    scriptInjectionFbMR("https://code.jquery.com/jquery-3.2.1.min.js", function () {
    //scriptInjectionFbMR(CDN_APP_MR_URL + "jquery-3.2.1.min.js", function () {
        window.ccFbMRJquery = jQuery.noConflict(true);

        ccFbMRJquery("body").on("click", ".cc-dw-btn", function () {
            var minNumber = 1; // Minimum
            var maxNumber = 9999; // Maximum
            var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
            var randomId = "cc-dw-copy-" + randomNumber;
            var dwButtonsBgColor = (facebookCheckboxWidget.checkbox_widget.buttons_color) ? facebookCheckboxWidget.checkbox_widget.buttons_color : "#00a651";
            var discountTextCodeColor = (facebookCheckboxWidget.checkbox_widget.discount_text_code_color) ? facebookCheckboxWidget.checkbox_widget.discount_text_code_color : "";
            var discountCodeColor = (facebookCheckboxWidget.checkbox_widget.discount_code_color) ? facebookCheckboxWidget.checkbox_widget.discount_code_color : "";
            var myvar =
                '<div style="background-color: ' + dwButtonsBgColor + ';font-size: 24px;color: #fff;padding: 4px 20px;border-radius: 4px;border: 1px solid #ededed;width: 85px;height: 45px;float: left;margin-right: 35px;text-align: center;"><i class="fa fa-check"></i></div>' +
                '<h5 style="margin-top:15px">' +
                '<span style="word-break: break-all;color: ' + discountTextCodeColor + ' ">' + facebookCheckboxWidget.checkbox_widget.discount_text + '</span>' +
                //'<span id="cc-dw-copy" style="word-break: break-all; color: ' + discountTextCodeColor + ' ">' + facebookCheckboxWidget.checkbox_widget.discount_code + '</span>' +
                '<span id="' + randomId + '" style="word-break: break-all;color: ' + discountCodeColor + ' ">' + facebookCheckboxWidget.checkbox_widget.discount_code + '</span>' +
                '</h5>';

            if (facebookCheckboxWidgetStatus == null || facebookCheckboxWidgetStatus == "unchecked") {
                //ccFbMRJquery(".cc-checkbox-error").show();
                ccFbMRJquery(this).siblings('span:first').show();
            } else {
                ccFbMRJquery(".cc-checkbox-error").hide();
                ccFbMRJquery(this).html(facebookCheckboxWidget.checkbox_widget.copy_button);

                //ccFbMRJquery(this).attr("id", "cc-dw-copy");
                ccFbMRJquery(this).attr("id", randomId);
                ccFbMRJquery(this).attr("name", "copy_pre");
                ccFbMRJquery(".cc-messenger-checkbox-for-copy").html(myvar);
            }
        });

        ccFbMRJquery('body').on('click', 'a[name=copy_pre]', function () {
            var id = ccFbMRJquery(this).attr('id');
            var el = document.getElementById(id);
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            document.execCommand('copy');
            alert("Code copied to clipboard.");
            return false;
        });

    })

    function showAddToCartPopup(data, callBack) {
        console.log('In showAddToCartPopup Function');
        //console.log("Length is: "+ ccFbMRJquery('body').find('#cc-atcp-table').length);

        if (ccFbMRJquery('body').find('#cc-atcp-table').length > 0) {
            console.log('showAddToCartPopup #cc-atcp-table.length > 0');
            return false;
        }
        else{
            console.log('showAddToCartPopup #cc-atcp-table.length == 0');
        }

        if(window.localStorage.getItem('popUpCloseClicked') == 1) {
//********************************** In case of Preview, display the popup, other than that, do not load popup as user has once closed the popup or click "No Thank you! **************
            if (!getParameterByName('cc-mr-preview-add-to-cart')) {
                return;
            }


        }

        var closeButton = "";
        var pluginType = (data.button_plugin_type != '') ? data.button_plugin_type : 1;
        //console.log('pluginType: ' + pluginType);
        var bannerImageURl = (data.email_banner_public_url != '') ? data.email_banner_public_url : CDN_APP_MR_URL + 'cart-popup.png';
        var headingFontWeight = (data.heading_is_bold == 1) ? 'bold' : 'normal';
        var headingFontStyle = (data.heading_is_italic == 1) ? 'italic' : 'normal';
        var headingFontSize = data.heading_font_size + 'px';
        var headingTextAlignment = data.heading_text_align.toLowerCase();
        var headingColor = data.heading_color;
        var headingText = data.heading_text;

        var descriptionFontWeight = (data.description_is_bold == 1) ? 'bold' : 'normal';
        var descriptionFontStyle = (data.description_is_italic == 1) ? 'italic' : 'normal';
        var descriptionFontSize = data.description_font_size + 'px';
        var descriptionTextAlignment = data.description_text_align.toLowerCase();
        var descriptionColor = data.description_color;
        var descriptionText = data.description_text;
        var thankYouMessage = '<div class="thank-you-div" id="thank-you-div" style="display: none;"><h5>Thank you for subscribing. </h5></div>';
        var isPoweredBy = data.is_active_powered_by;
        var isPoweredByDiv = '';
        if(isPoweredBy == 0)
        {
            isPoweredByDiv = '<div id="pn-powered-by-preview" style=" text-align: center;color: #666674;font-size: 12px;margin: 5px;box-sizing: border-box;">'
                +   'Powered by <span style="color:  #2699fb;">CareCart</span>'
                + '</div>'
        }

        var emailPlaceHolder = data.email_placeholder;
        var dismissTextColor = data.dismiss_text_color;
        var buttonPopup = '<button id="cc_f-p-preview-email-btn" type="button" class="custom-button-inline"' +
            ' style="text-transform: unset;font-family: Open Sans, sans-serif;' +
            'background-color: ' + buttonBackgroundColor +
            ' ;font-size:' + buttonFontSize +
            ' ;color:' + buttonColor +
            ' ;font-style:' + buttonFontStyle +
            ' ;font-weight:' + buttonFontWeight +
            ' ;border: 1px solid rgb(38, 153, 251);' +
            ' padding: 13px 60px;' +
            ' display: inline-block;' +
            ' text-align: center;' +
            ' vertical-align: middle;' +
            ' touch-action: manipulation;' +
            ' cursor: pointer;' +
            ' white-space: nowrap;' +
            ' line-height: 1.42857;' +
            ' border-radius: 4px;' +
            ' user-select: none;' +
            '">' +
            buttonText +
            '</button>';
        if(pluginType == 1)
        {
            var buttonFontWeight = (data.button_is_bold == 1) ? 'bold' : 'normal';
            var buttonFontStyle = (data.button_is_italic == 1) ? 'italic' : 'normal';
            var buttonFontSize = data.button_font_size + 'px';
            var buttonTextAlignment = data.button_text_align.toLowerCase();

            var buttonText = data.button_text_send_to_messenger;
            var buttonBackgroundColor = data.button_background_color_send_to_messenger;
            var fbWhiteChatSvg = CDN_APP_MR_URL + 'messenger-logo-white.svg';
            var fbBlueChatSvg = CDN_APP_MR_URL + 'messenger-logo-blue.svg';
            if(buttonBackgroundColor == 'blue')
            {
                var buttonColor = 'White';
                buttonBackgroundColor = '#0084FF';
                buttonPopup = ' <button id="facebook-button-plugin-button-text-1" type="button" ' +
                    'style=" display: inline-flex; ' +
                    ' padding: 10px 30px !important; ' +
                    ' border-radius: 5px !important; ' +
                    ' font-size: 15px; ' +
                    ' line-height: 19px; ' +
                    ' outline: none !important; ' +
                    ' background-color: ' + buttonBackgroundColor +'; ' +
                    ' color: ' + buttonColor + '; ' +
                    ' border: 1px solid ' + buttonColor + ';" >'
                    + '<i id="cc_f-p-preview-email-btn" style="background-image: url(' + fbWhiteChatSvg + ');width: 20px;height: 21px;margin-right: 5px;background-repeat: no-repeat;"></i>' + buttonText + '</button>';

            }
            else
            {
                var buttonColor = '#0084FF';
                buttonPopup = ' <button id="facebook-button-plugin-button-text-1" type="button" ' +
                    'style=" display: inline-flex; ' +
                    ' padding: 10px 30px !important; ' +
                    ' border-radius: 5px !important; ' +
                    ' font-size: 15px; ' +
                    ' line-height: 19px; ' +
                    ' outline: none !important; ' +
                    ' background-color: ' + buttonBackgroundColor +'; ' +
                    ' color: ' + buttonColor + '; ' +
                    ' border: 1px solid ' + buttonColor + ';" >'
                    + '<i id="cc_f-p-preview-email-btn" style="background-image: url(' + fbBlueChatSvg + ');width: 20px;height: 21px;margin-right: 5px;background-repeat: no-repeat;"></i>' + buttonText + '</button>';
            }
        }
        else
        {
            var buttonFontWeight = (data.button_is_bold == 1) ? 'bold' : 'normal';
            var buttonFontStyle = (data.button_is_italic == 1) ? 'italic' : 'normal';
            var buttonFontSize = data.button_font_size + 'px';
            var buttonTextAlignment = data.button_text_align.toLowerCase();
            var buttonColor = data.button_text_color;
            var buttonText = data.button_text;
            var buttonBackgroundColor = data.button_background_color;

            buttonPopup = '<button id="cc_f-p-preview-email-btn" type="button" style="color: ' + buttonColor + '; background-color: ' + buttonBackgroundColor + '; font-size: 15px !important; padding: 10px 30px; font-weight: normal; font-style: normal; text-align: center;">' + buttonText + '</button>'

        }
        //console.log('buttonText: ' + buttonText);
        //console.log('buttonBackgroundColor: ' + buttonBackgroundColor);
        if (data.is_active_close_button == 1) {
            closeButton = '<div id="cc_f-p-close" class="close-action" style="    position: absolute;' +
                'right: 16px;' +
                'font-size: 16px;' +
                'cursor: pointer;' +
                'color: #a6a6a6;">✖' +
                '</div>';
        }

        var popUpHTML = '<style type="text/css">.popup-preview{'+
            'font-family: Open Sans, sans-serif;'+
            'position: fixed;'+
            'top: 0;'+
            'right: 0;'+
            'left: 0;'+
            'bottom: 0;'+
            'width: 37%;'+
            'background: #fff;'+
            'margin: 90px auto;'+
            'z-index: 99999999;'+
            'border: 1px solid #808080;'+
            'border-radius: 4px;'+
            'padding: 15px;'+
            'box-shadow: 0 0 20px 10px #f5f5f5;'+
            '-moz-box-shadow: 0 0 20px 10px #f5f5f5;'+
            '-webkit-box-shadow: 0 0 20px 10px #f5f5f5;'+
            '-o-box-shadow: 0 0 20px 10px #f5f5f5;'+
            'max-height: 400px;}'+
            '@media (min-width: 768px) and (max-width: 1300px) {.popup-preview {width: 70%;}}'+
            '@media  only screen and (max-height: 400px) {.popup-preview { position: absolute;}}'+
            '@media  only screen and (max-width: 767px) {.popup-preview {'+
            ' width: 90vw;'+
            ' max-height: inherit !important;'+
            ' margin: auto;'+
            ' max-height: 340px !important;'+
            ' min-height: 340px !important;'+
            ' padding: 20px 2vw !important;'+
            ' top: 20%;'+
            ' margin: 0 auto;'+
            '}'+
            ' #ec-banner{height: 10vh !important; min-height: 40px;}'+
            'h2#ec-headline-preview{margin: 10px 0 !important; font-size: 16px !important;}'+
            'p#ec-description-preview{margin: 0 0 15px !important; line-height: 18px !important; font-size: 13px !important;}'+
            '.input-custom {margin: 10px 0 !important;}'+
            'p#ec-email-input-preview {margin: 5px auto 10px;}'+
            'div#cc-popup-widget-container {    margin: 10px 0 2px !important;  padding-left:65px !important;  }'+
            //'#cc_f-p-preview-email-placeholder {height: 5.435vw !important;font-size: 12px !important; min-height: 35px;}'+
            'button.custom-button-inline {padding: 1.8vh 14.5vw !important; min-height: 33px;}}'+
            'div#thank-you-div h5 {    line-height: 0;  margin: 0; margin-top: -6px; margin-bottom: 15px;  color: #0b9037;    }'+
            '.name-detail.name-detail-edit div#cc-popup-widget-container {padding-left: 90px;}'+
            'div#cc-popup-widget-container {    margin: 45px 0 25px; }'+
            'div#pn-powered-by-preview {position: relative;     bottom: -10px;    }'+
            'img#ec-banner {    margin: 10px auto 15px !important;    }'+
            '</style><div id="cc-atcp-table" class="popup-preview">' +
            closeButton +
            ' <div class="img-cart-top"><img id="ec-banner"' +
            ' src="' + bannerImageURl + '" ' +
            ' style="    display: block;' +
            '    margin-left: auto;' +
            '    margin-right: auto;"></div>' +
            '  <h2 id="ec-headline-preview"' +
            ' style="text-transform: unset;font-family: Open Sans, sans-serif;font-size:' + headingFontSize +
            ' ;color: ' + headingColor +
            ' ;text-align: ' + headingTextAlignment +
            ' ;font-weight: ' + headingFontWeight +
            ' ;font-style: ' + headingFontStyle +
            ' ;margin: 10px 0px;' +
            'letter-spacing: 0px;'+
            '">'
            + headingText +
            '</h2>' +
            '  <p id="ec-description-preview"' +
            ' style="text-transform: unset;font-family: Open Sans, sans-serif;' +
            'font-size:' + descriptionFontSize +
            ' ;color:' + descriptionColor +
            ' ;text-align: ' + descriptionTextAlignment +
            ' ;font-weight: ' + descriptionFontWeight +
            ' ;font-style:' + descriptionFontStyle +
            ' ;margin: 0 0 10px;line-height: 15px ' +
            ' ;word-break: break-word ' +
            ';">' + descriptionText + '</p>' +

            '<div id="cc-popup-widget-main-container">' +
            '<div class="name-detail name-detail-edit" style="padding-top: 0 !important;">' +
            //'<h4 id="cc_popup_widget_atc_title"> Click Here</h4>' +
            '<div style="text-align: center;" id="cc-popup-widget-container"></div>' +
            '</div>' +
            '</div>'
            +
            '   <div class="inline-button" style="    text-align: center;' +
            '    padding: 5px 0 35px;">'
            //  + buttonPopup
            +
            '  <div class="input-custom" style="text-align: center;" >' +
            '<p id="ec-email-input-preview" style="display: block;' +
            'margin: 5px auto 20px;' +
            'font-size: 12px;' +
            'color: ' + dismissTextColor + ';' +
            'text-align: center;' +
            'cursor: pointer;">' + emailPlaceHolder +
            '</p>'
            +
            '   </div>' +
            thankYouMessage +
            isPoweredByDiv +
            '    <div class="inline-button" style="    text-align: center;' +
            '    padding: 5px 0 35px;">' +
            '    </div>' +
            ' </div>' +
            '   </div>' ;

        // console.log('popUpHTML ' + popUpHTML);
        ccFbMRJquery('body').append(popUpHTML);

        if (typeof callBack == 'function') callBack();

    }

    function showStickyDiscountCollapsed(stickyDiscountData, callBack) {
        //console.log('In showStickyDiscountCollapsed');
        //console.log('showStickyDiscountCollapsed stickyDiscountData: ' + stickyDiscountData.offer);

        var stickyPixelsHeight = stickyDiscountData.pixels_from_corner;
        var stickyDiscountPosition = stickyDiscountData.sticky_position;

        /*
                    var stickyLeftBottomBoxCollapsedStyling = 'bottom: 7px;' +
                        'left: 7px;' +
                        'z-index: 99999;';
        */
        var stickyLeftBottomBoxCollapsedStyling = 'bottom: ' + stickyPixelsHeight + 'px;' +
            'left: 7px;';

        var stickyLeftTopBoxCollapsedStyling = 'top: ' + stickyPixelsHeight + 'px;' +
            'left: 7px;' +
            'z-index: 99999;';

        var stickyRightTopBoxCollapsedStyling = 'top: ' + stickyPixelsHeight + 'px;' +
            'right: 7px;' +
            'z-index: 99999;';

        var stickyRightBottomBoxCollapsedStyling = 'bottom: ' + stickyPixelsHeight + 'px;' +
            'right: 7px;' +
            'z-index: 99999;';

        var stickyPosition = stickyLeftBottomBoxCollapsedStyling;
        //*********** Styling for Right to Left Stores like Arabic & Urdu ******************
        if(Shopify.shop == 'sallahps.myshopify.com')
        {
            ccFbMRJquery('head').append('<style>@media only screen and (max-width: 768px) {.sticky-discount-box-collapse-view-cc, .sticky-discount-box-open-view-cc, .sticky-discount-box-subscribed-view-cc { bottom: 47px !important;}} .sticky-discount-box-open-view-cc .close-action, .sticky-discount-box-subscribed-view-cc .close-action{left: 8px !important; right: unset !important;}.sticky-discount-box-collapse-view-image-cc i { transform: rotate(92deg) !important; }.sticky-discount-box-collapse-view-image-cc {-webkit-clip-path: polygon(0% 0%, 32% 0%, 0% 50%, 100% 213%, 100% 0) !important; clip-path: polygon(0% 0%, 32% 0%, 0% 50%, 100% 213%, 100% 0) !important;padding: 10px 20px 8px 15px !important;}</style>');
        }

        if(stickyDiscountPosition == 'right_top')
        {
            stickyPosition = stickyRightTopBoxCollapsedStyling;
        }
        else if(stickyDiscountPosition == 'left_top')
        {
            stickyPosition = stickyLeftTopBoxCollapsedStyling;
        }
        else if(stickyDiscountPosition == 'right_bottom')
        {
            stickyPosition = stickyRightBottomBoxCollapsedStyling;
        }
        else
        {
            stickyPosition = stickyLeftBottomBoxCollapsedStyling;
        }
        var stickyDiscountCollapsedHtml = '<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">'
            + '<style>'
            + '.sticky-discount-box-collapse-view-cc {'
            +  'display: flex !important;'
            +   'width: fit-content;'
            +   'position: unset;'
            +   'min-width: 40px;'
            +   'align-items: center;'
            +   'cursor: pointer;'
            +   'outline: none;'
            +   'border: 2px solid ' + stickyDiscountData.theme_color + ';'
            +   'color: #fff;'
            +   'border-top-right-radius: 5px;'
            +   'border-bottom-right-radius: 5px;'
            +   'background-color: ' + stickyDiscountData.theme_color + ';'
            +   'position: fixed;'

            +   stickyPosition
            +   'z-index: 111;'
            /*
                            +   'bottom: 7px;'
                            +   'left: 5px;'
            */
            + '}'
            +    'span.sticky-discount-box-collapse-view-text-cc {'
            +        'font-size: 20px;'
            +        'font-weight: bold;'
            +        'margin-left: 8px;'
            +        'margin-right: 10px;'
            +    '}'
            +    '.sticky-discount-box-collapse-view-image-cc {'
            +        'display: flex;'
            +        'justify-content: center;'
            +        'align-items: center;'
            +        '-webkit-clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);'
            +        'clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);'
            +        'padding: 10px 25px 8px 10px;'
            +        'background-color: #fff;'
            +    '}'
            +    'img.sticky-discount-box-collapse-view-image-cc img{'
            +       'width: 52px;'
            +       'height: 44px;'
            +   '}'
            +   '.sticky-discount-box-collapse-view-image-cc i {'
            +       'color: ' + stickyDiscountData.theme_color + ';'
            +       'transform: rotate(100deg);'
            +       'font-size: 35px;'
            +   '}'
            + '</style>'
            +  '<div id="sticky-discount-collapsed-div">'
            +   '<div class="sticky-discount-box-collapse-view-cc standard-theme-bg-2020-cc standard-theme-border-2020-cc">'
            +       '<div class="sticky-discount-box-collapse-view-image-cc">'
            +           '<i class="fa fa-tags standard-theme-color-2020-cc" aria-hidden="true"></i>'
            +       '</div>'
            +       '<span class="sticky-discount-box-collapse-view-text-cc">' + stickyDiscountData.offer + '</span>'
            +   '</div>'
            +  '</div>'
        ;
        //console.log(stickyDiscountCollapsedHtml);
        ccFbMRJquery('body').append(stickyDiscountCollapsedHtml);
    }

    function showStickyDiscountOpenView(appId,facebookPageData,stickyDiscountData, callBack) {
        //console.log('In showStickyDiscountOpenView');
        if(showStickyDiscountOpenViewLoad)
            return;
        //console.log('showStickyDiscountOpenViewLoad 1st Iteration: ' + showStickyDiscountOpenViewLoad);
        showStickyDiscountOpenViewLoad = true;
        //console.log('showStickyDiscountOpenViewLoad Next Iteration: ' + showStickyDiscountOpenViewLoad);

        var elem = document.createElement('div');
        elem.setAttribute('origin', facebookCheckboxWidget.origin);
        elem.setAttribute('page_id', facebookPageData.ref_facebook_page_id);
        elem.setAttribute('messenger_app_id', appId);
        elem.setAttribute('user_ref', (facebookCheckboxWidget.user_ref) ? facebookCheckboxWidget.user_ref : '');
        elem.setAttribute('class', 'fb-messenger-checkbox');
        elem.setAttribute('prechecked', 'true');
        elem.setAttribute('allow_login', 'true');
        //elem.setAttribute('size', (facebookCheckboxWidget.checkbox_widget.size) ? facebookCheckboxWidget.checkbox_widget.size : '');
        elem.setAttribute('size', 'large'); // 'small' or 'medium' or 'large'
        //elem.setAttribute('skin', (facebookCheckboxWidget.checkbox_widget.text_color) ? facebookCheckboxWidget.checkbox_widget.text_color : '');
        elem.setAttribute('skin', 'light'); // 'light' or 'dark'
        //elem.setAttribute('center_align', (facebookCheckboxWidget.checkbox_widget.center_align == 1) ? 'true' : 'false');
        elem.setAttribute('center_align', 'true'); //'true' or 'false'
        //elem.setAttribute('width', '280px');
        //elem.setAttribute('height', '70px');

        var stickyPixelsHeight = stickyDiscountData.pixels_from_corner;
        var stickyDiscountPosition = stickyDiscountData.sticky_position;

        var stickyLeftBottomBoxOpenStyling = 'bottom: ' + stickyPixelsHeight + 'px;' +
            'left: 7px;' +
            'z-index: 99999;';

        var stickyLeftTopBoxOpenStyling = 'top: ' + stickyPixelsHeight + 'px;' +
            'left: 7px;' +
            'z-index: 99999;';

        var stickyRightTopBoxOpenStyling = 'top:' + stickyPixelsHeight + 'px;' +
            'right: 7px;' +
            'z-index: 99999;';

        var stickyRightBottomBoxOpenStyling = 'bottom:' + stickyPixelsHeight + 'px;' +
            'right: 7px;' +
            'z-index: 99999;';

        var stickyPosition = stickyLeftBottomBoxOpenStyling;
        if(stickyDiscountPosition == 'right_top')
        {
            stickyPosition = stickyRightTopBoxOpenStyling;
        }
        else if(stickyDiscountPosition == 'left_top')
        {
            stickyPosition = stickyLeftTopBoxOpenStyling;
        }
        else if(stickyDiscountPosition == 'right_bottom')
        {
            stickyPosition = stickyRightBottomBoxOpenStyling;
        }
        else
        {
            stickyPosition = stickyLeftBottomBoxOpenStyling;
        }

        var stickyDiscountOpenViewHtml = '<style>'
            +    '.sticky-discount-box-open-view-cc {'
            +        'align-items: center;'
            +        'flex-direction: row;'
            +        'height: 250px;'
            +        'width: 545px;'
            +        'display: flex !important;'
            +        'position: unset;'
            +        'box-shadow: none;'
            +        'border: 2px solid ' + stickyDiscountData.theme_color + ';'
            +        'border-top-right-radius: 5px;'
            +        'border-bottom-right-radius: 5px;'
            +        'position: fixed;'
            +        'background-color: #fff;'

            +         stickyPosition
            /*
                            +        'bottom: 7px;'
                            +        'left: 7px;'
                            +        'z-index:9999;'
            */
            +    '}'
            +    '.sticky-discount-box-open-view-cc .close-action {'
            +            'position: absolute;'
            +            'right: 8px;'
            +            'font-size: 16px;'
            +            'color: ' + stickyDiscountData.theme_color + ';'
            +            'top: 3px;'
            +            'z-index: 99;'
            +            'cursor: pointer;'
            +        '}'
            +    '.sticky-discount-open-view-image-left-block-cc {'
            +            'background-color: ' + stickyDiscountData.theme_color + ';'
            +            'display: flex;'
            +            'align-items: center;'
            +            'justify-content: center;'
            +            'flex-basis: 165px;'
            +            'height: 100%;'
            +        '}'
            +        'span.sticky-discount-open-view-left-content-cc {'
            +            'font-size: 30px;'
            +            'font-weight: bold;'
            +            'text-align: center;'
            +            'color: #ffffff;'
            +            'text-transform: uppercase;'
            +            'padding: 0.5rem 0 30px;'
            +        '}'
            +        'img.discount-sticky-star-cc {'
            +            'display: block;'
            +            'margin: auto;'
            +        '}'
            +        'img.sticky-discount-open-view-image-cc {'
            +            'position: absolute;'
            +        '}'
            +    '.sticky-discount-box-open-view-right-content-cc {'
            +            'width: 100%;'
            +            'flex: 1;'
            +            'display: flex;'
            +            'justify-content: space-between;'
            +            'flex-direction: column;'
            +            'position: relative;'
            +            'padding-bottom: 60px;'
            +            'box-sizing: border-box;'
            +            'background-color: #ffffff;'
            +        '}'
            +    '.sticky-discount-open-view-left-content-text-cc {'
            +            'padding: 10px 10px 0 10px;'
            +            'text-align: center;'
            +        '}'
            +        'h3.sticky-discount-open-view-left-content-cc-title {'
            +            'font-size: 18px;'
            +            'font-weight: 600;'
            +            'color: ' + stickyDiscountData.headline_color + ';'
            +            'margin-bottom: 10px;'
            +            'display: inline-block;'
            +            'margin-top: 5px;'
            +        '}'
            +        'h4.sticky-discount-open-view-left-content-cc-description {'
            +            'font-size: 13px;'
            +            'color: ' + stickyDiscountData.description_color + ';'
            +            'margin: 0;'
            +            'line-height: 20px;'
            +        '}'
            +    '.sticky-discount-open-view-left-content-text-cc img.messenger-checkbox-img {'
            +            'width: 150px;'
            +            'height: 44px;'
            +            'display: block;'
            +            'margin: 10px auto 0px;'
            +        '}'
            +    '.sticky-discount-open-view-left-content-footer-cc {'
            +            'margin-top: 1rem;'
            +            'justify-content: center;'
            +            'align-items: center;'
            +            'display: flex;'
            +            'position: absolute;'
            +            'bottom: 15px;'
            +            'width: 100%;'
            +        '}'
            +        'button.sticky-discount-box-open-view-button {'
            +            'all: unset;'
            +            'min-width: 60px;'
            +            'background-color: ' + stickyDiscountData.theme_color + ';'
            +            'color: #ffffff;'
            +            'display: inline-block;'
            +            'padding: 8.5px 2rem;'
            +            'font-weight: bold;'
            +            'font-size: 14px;'
            +            'text-align: center;'
            +            'cursor: pointer;'
            +            '-webkit-text-fill-color: #ffffff;'
            +        '}'

            +       'span#cc-sticky-checkbox-error {'
            +           'font-size: 10px;'
            +           'display: block;'
            +           'text-align: center;'
            +           'color: #f00;'
            +           'line-height: 1;'
            +           'position: absolute;'
            +           'bottom: -19px;'
            +           'left: 40px;'
            +       '}'
            +      ' @media screen and (max-width: 767px) {'
            +     '.sticky-discount-box-subscribed-view-cc,.sticky-discount-box-open-view-cc{ '
            +       'height: 175px;'
            +       ' width: 370px;'
            +       ' }'
            + '   span.sticky-discount-open-view-left-content-cc { '
            + '       font-size: 18px; '
            + '       padding: 1.5rem 15px 30px; '
            +       ' }'
            +  'h3.sticky-discount-open-view-left-content-cc-title { '
            +   'font-size: 14px;margin-bottom: 5px;'
            +       ' }'
            +    'h4.sticky-discount-open-view-left-content-cc-description {'
            +       ' font-size: 11px;  line-height: 13px;'
            +       ' }'
            + '  button#sticky-discount-subscribe-btn {'
            + ' font-size: 12px; padding: 6px 2rem;'
            +       ' }'
            +  '  .sticky-discount-box-open-view-right-content-cc { '
            +    '  padding-bottom: 35px;'
            +       ' }'
            +'.sticky-discount-open-view-left-content-footer-cc {'
            + 'bottom: 14px'
            +       ' }'
            +'.sticky-discount-open-view-left-content-text-cc {'
            +'    padding: 5px 0 0 0px;'
            +       ' }'
            +'span#cc-sticky-checkbox-error {'
            +'    bottom: -14px; left: 9px;'
            +       ' }'
            +       ' }'

            + '</style>'
            +    '<div id="sticky-discount-open-view-div" style="display: none;">'
            +       '<div class="sticky-discount-box-open-view-cc standard-theme-border-2020-cc">'
            +            '<div class="close-action standard-theme-color-2020-cc close-sticky-open-view"> ✖ </div>'
            +            '<div class="sticky-discount-open-view-image-left-block-cc standard-theme-bg-2020-cc">'
            +                '<img src="' + CDN_APP_MR_URL + 'sticky-discount-bg-left.png" class="sticky-discount-open-view-image-cc">'
            +                '<span class="sticky-discount-open-view-left-content-cc">'
            +                '<img src="' + CDN_APP_MR_URL + 'discount-star.png" class="discount-sticky-star-cc">'
            +                stickyDiscountData.offer + '</span>'
            +            '</div>'
            +            '<div class="sticky-discount-box-open-view-right-content-cc">'
            +                '<div class="sticky-discount-open-view-left-content-text-cc">'
            +                    '<h3 class="sticky-discount-open-view-left-content-cc-title">' + stickyDiscountData.headline + '</h3>'
            +                    '<h4 class="sticky-discount-open-view-left-content-cc-description">' + stickyDiscountData.description + '</h4>'
            +                    '<div id="sticky-discount-fb-checkbox-widget">'
            //+                       '<img src="' + CDN_APP_MR_URL + 'messenger-checkbox-cc-light.svg" class="messenger-checkbox-img">'
            +                    '</div>'
            +                '</div>'
            +                '<div class="sticky-discount-open-view-left-content-footer-cc">'
            +                    '<button class="sticky-discount-box-open-view-button standard-theme-bg-2020-cc" id="sticky-discount-subscribe-btn">'
            +                        stickyDiscountData.button_text
            +                    '</button>'
            +                    '<br/><span style="display: none;" id="cc-sticky-checkbox-error">Please first click the "Send to Messenger" Checkbox above</span>'

            +                '</div>'
            +            '</div>'
            +        '</div>'
            +    '</div>';
        /*
                        console.log(showStickyDiscountOpenView);
                        console.log('showStickyDiscountOpenView Load Completed');
                        console.log(CDN_APP_MR_URL + 'sticky-discount-bg-left.png');
                        console.log(CDN_APP_MR_URL + 'discount-star.png');
                        console.log(CDN_APP_MR_URL + 'messenger-checkbox-cc-light.svg');
                        console.log('CDN_APP_MR_URL: ' + CDN_APP_MR_URL);
                        console.log('apiBaseUrlFbMR: ' + apiBaseUrlFbMR);
                        console.log('showStickyDiscountOpenView HERE MATE');
        */
        ccFbMRJquery('body').append(stickyDiscountOpenViewHtml);
        var careCartMessengerDiv = ccFbMRJquery("body").find("#sticky-discount-fb-checkbox-widget");
        if (careCartMessengerDiv.length > 0) {
            console.log('careCartMessengerDiv FOUND');
            //ccFbMRJquery(careCartMessengerDiv).append(myvar);
            ccFbMRJquery(careCartMessengerDiv).append(elem);
            //ccFbMRJquery('#cc-messenger-checkbox-optin').append(elem);
        }
    }

    function showStickyDiscountSubscribedView(stickyDiscountData, callBack) {
        //console.log('In showStickyDiscountSubscribedView');
        if(showStickyDiscountSubscribedViewLoad)
            return;

        var stickyPixelsHeight = stickyDiscountData.pixels_from_corner;
        var stickyDiscountPosition = stickyDiscountData.sticky_position;

        //console.log('showStickyDiscountSubscribedViewLoad 1st Iteration: ' + showStickyDiscountSubscribedViewLoad);
        showStickyDiscountOpenViewLoad = true;
        //console.log('showStickyDiscountSubscribedViewLoad Next Iteration: ' + showStickyDiscountSubscribedViewLoad);

        var stickyLeftBottomSubscribedViewStyling = 'bottom: ' + stickyPixelsHeight + 'px;' +
            'left: 7px;' +
            'z-index: 99999;';

        var stickyLeftTopSubscribedViewStyling = 'top: ' + stickyPixelsHeight + 'px;' +
            'left: 7px;' +
            'z-index: 99999;';

        var stickyRightTopSubscribedViewStyling = 'top: ' + stickyPixelsHeight + 'px;' +
            'right: 7px;' +
            'z-index: 99999;';

        var stickyRightBottomSubscribedViewStyling = 'bottom: ' + stickyPixelsHeight + 'px;' +
            'right: 7px;' +
            'z-index: 99999;';

        var stickyPosition = stickyLeftBottomSubscribedViewStyling;
        if(stickyDiscountPosition == 'right_top')
        {
            stickyPosition = stickyRightTopSubscribedViewStyling;
        }
        else if(stickyDiscountPosition == 'left_top')
        {
            stickyPosition = stickyLeftTopSubscribedViewStyling;
        }
        else if(stickyDiscountPosition == 'right_bottom')
        {
            stickyPosition = stickyRightBottomSubscribedViewStyling;
        }
        else
        {
            stickyPosition = stickyLeftBottomSubscribedViewStyling;
        }

        var showStickyDiscountSubscribedView = '<style>'
            +    '.sticky-discount-box-subscribed-view-cc {'
            +            'align-items: center;'
            +            'flex-direction: row;'
            +            'height: 250px;'
            +            'width: 545px;'
            +            'display: flex !important;'
            +            'position: unset;'
            +            'box-shadow: none;'
            +            'border: 2px solid ' + stickyDiscountData.theme_color + ';'
            +            'border-top-right-radius: 5px;'
            +            'border-bottom-right-radius: 5px;'
            +            'position: fixed;'
            +            'background-color: #fff;'

            +             stickyPosition
            /*
                            +            'bottom: 7px;'
                            +            'left: 7px;'
                            +            'z-index:9999;'
            */
            +        '}'
            +    '.sticky-discount-subscribed-view-image-left-block-cc {'
            +            'background-color: ' + stickyDiscountData.theme_color + ';'
            +            'display: flex;'
            +            'align-items: center;'
            +            'justify-content: center;'
            +            'flex-basis: 165px;'
            +            'height: 100%;'
            +        '}'
            +    '.sticky-discount-box-subscribed-view-cc .close-action {'
            +            'position: absolute;'
            +            'right: 8px;'
            +            'font-size: 16px;'
            +            'color: ' + stickyDiscountData.theme_color + ';'
            +            'top: 3px;'
            +            'z-index: 99;'
            +            'cursor: pointer;'
            +        '}'
            +        'img.sticky-discount-subscribed-view-image-cc {'
            +            'position: absolute;'
            +        '}'
            +        'span.sticky-discount-subscribed-view-left-content-cc {'
            +            'font-size: 30px;'
            +            'font-weight: bold;'
            +            'text-align: center;'
            +            'color: #ffffff;'
            +            'text-transform: uppercase;'
            +            'padding: 0.5rem;'
            +        '}'
            +        'span.sticky-discount-subscribed-view-left-content-cc img{'
            +            'display: block;'
            +            'margin: auto;'
            +        '}'
            +    '.sticky-discount-box-subscribed-view-right-content-cc {'
            +            'width: 100%;'
            +            'flex: 1;'
            +            'display: flex;'
            +            'justify-content: space-between;'
            +            'flex-direction: column;'
            +            'position: relative;'
            +            'padding-bottom: 60px;'
            +            'box-sizing: border-box;'
            +            'background-color: #ffffff;'
            +        '}'
            +    '.sticky-discount-subscribed-view-left-content-text-cc {'
            +            'padding: 10px 10px 0 10px;'
            +            'text-align: center;'
            +        '}'
            +        'h3.sticky-discount-subscribed-view-left-content-cc-title {'
            +            'font-size: 18px;'
            +            'font-weight: 600;'
            +            'color: ' + stickyDiscountData.headline_color + ';'
            +            'margin-bottom: 15px;'
            +            'display: inline-block;'
            +            'margin-top: 10px;'
            +        '}'
            +        'h4.sticky-discount-subscribed-view-left-content-cc-description {'
            +            'font-size: 13px;'
            +            'color: ' + stickyDiscountData.description_color + ';'
            +            'margin: 0 0 10px;'
            +            'line-height: 20px;'
            +        '}'
            +    '.sticky-discount-subscribed-view-left-content-footer-cc {'
            +            'margin-top: 1rem;'
            +            'justify-content: center;'
            +            'align-items: center;'
            +            'display: flex;'
            +            'position: absolute;'
            +            'bottom: 8px;'
            +            'width: 100%;'
            +        '}'
            +        'button.sticky-discount-box-subscribed-view-button {'
            +            'all: unset;'
            +            'min-width: 60px;'
            +            'background-color: ' + stickyDiscountData.theme_color + ';'
            +            'color: #ffffff;'
            +            'display: inline-block;'
            +            'padding: 8.5px 2rem;'
            +            'font-weight: bold;'
            +            'font-size: 14px;'
            +            'text-align: center;'
            +            'cursor: pointer;'
            +            '-webkit-text-fill-color: #ffffff;'
            +       '}'
            +    '.code-color-discount{'
            +            'color: ' + stickyDiscountData.theme_color + ';'
            +            'font-weight: bold;'
            +        '}'

            +        'a#plain-offer-code-2020-cc {'
            +             'all: unset;'
            +             'min-width: 60px;'
            +             'background-color: ' + stickyDiscountData.theme_color + ';'
            +             'color: #ffffff;'
            +             'display: inline-block;'
            +             'padding: 8.5px 2rem;'
            +             'font-weight: bold;'
            +             'font-size: 14px;'
            +             'text-align: center;'
            +             'cursor: pointer;'
            +             '-webkit-text-fill-color: #ffffff;'
            +         '}'
            +      ' @media screen and (max-width: 767px) {'
            +     '.sticky-discount-box-subscribed-view-cc{ '
            +       'height: 175px;'
            +       ' width: 360px;'
            +       ' }'
            + '   span.sticky-discount-subscribed-view-left-content-cc { '
            + '       font-size: 18px; '
            + '       padding: 1.5rem 15px 30px; '
            +       ' }'
            +  'h3.sticky-discount-subscribed-view-left-content-cc-title { '
            +   'font-size: 14px;margin-bottom: 5px;'
            +       ' }'
            +    'h4.sticky-discount-subscribed-view-left-content-cc-description {'
            +       ' font-size: 11px;  line-height: 13px;'
            +       ' }'
            + '  a#plain-offer-code-2020-cc {'
            + ' font-size: 12px; padding: 6px 2rem;'
            +       ' }'
            +  '  .sticky-discount-box-subscribed-view-right-content-cc { '
            +    '  padding-bottom: 35px;'
            +       ' }'
            +'.sticky-discount-subscribed-view-left-content-footer-cc {'
            + 'bottom: 7px'
            +       ' }'
            +'.sticky-discount-subscribed-view-left-content-text-cc {'
            +'    padding: 5px 0 30px 0px;'
            +       ' }'
            +'span#cc-sticky-checkbox-error {'
            +'    bottom: -14px; left: 9px;'
            +       ' }'
            +'.sticky-discount-subscribed-view-image-left-block-cc {'
            + ' flex-basis: 90px;'
            +       ' }'
            + '  span.sticky-discount-subscribed-view-left-content-cc img {'
            + 'height: 50px;'
            +       ' }'
            +       ' }'
            +   '</style>'
            + '<div id="sticky-discount-subscribed-view-div" style="display: none;">'
            +    '<div class="sticky-discount-box-subscribed-view-cc standard-theme-border-2020-cc">'
            +        '<div class="close-action standard-theme-color-2020-cc close-sticky-open-view"> ✖ </div>'
            +        '<div class="sticky-discount-subscribed-view-image-left-block-cc standard-theme-bg-2020-cc">'
            +            '<img src="' + CDN_APP_MR_URL + 'sticky-discount-bg-left.png" class="sticky-discount-subscribed-view-image-cc">'
            +            '<span class="sticky-discount-subscribed-view-left-content-cc">'
            +                '<img src="' + CDN_APP_MR_URL + 'donemark.svg" class="discount-sticky-star-cc">'
            +            '</span>'
            +        '</div>'
            +        '<div class="sticky-discount-box-subscribed-view-right-content-cc">'
            +            '<div class="sticky-discount-subscribed-view-left-content-text-cc">'
            +                '<h3 class="sticky-discount-subscribed-view-left-content-cc-title">' + stickyDiscountData.subscribed_view_headline + ' <span class="code-color-discount standard-theme-color-2020-cc" id="plain-offer-code-2020-cc">' + stickyDiscountData.offer_code + '  </span></h3>'
            +                '<h4 class="sticky-discount-subscribed-view-left-content-cc-description">' + stickyDiscountData.subscribed_view_description + ' </h4>'
            +            '</div>'
            +            '<div class="sticky-discount-subscribed-view-left-content-footer-cc" id="copy-sticky-discount-parent">'
            +               '<a id="plain-offer-code-2020-cc" type="button" name="copy_sticky_pre">' + stickyDiscountData.subscribed_view_button_text +'</a>'
            +            '</div>'
            +        '</div>'
            +    '</div>'
            + '</div>';

        ccFbMRJquery('body').append(showStickyDiscountSubscribedView);
    }

    function addJqueryEventListeners() {

        ccFbMRJquery.ajaxSetup({
            xhrFields: {
                withCredentials: true
            }
        });


        ccFbMRJquery('body').on('click', '#cc_f-p-close, #ec-email-input-preview', function (e) {

            ccFbMRJquery('#cc-atcp-table', 'body').hide();
            console.log("cc_f-p-close or #ec-email-input-preview Clicked & popup will close now");
            window.localStorage.setItem('popUpCloseClicked',1);
        });

        ccFbMRJquery('body').on('click', '#cc_f-p-close-thanks', function (e) {

            ccFbMRJquery('#thank-you-html', 'body').hide();
            console.log("cc_f-p-close-thanks & Thank you! popup will close now");
        });

        if (getParameterByName('cc-mr-preview-add-to-cart')) {

            ccFbMRJquery.ajax({

                url: apiBaseUrlFbMR + "/api/cart/popupSettings?shop="+storeFbMR.domain,

                dataType: 'json',

                type: 'GET',

                success: function (response) {

                    var data = response.records.addToCartPopUp;

                    if (CCSwal.isVisible()) {
                        return;
                    }
                    if (ccFbMRJquery('body').find('#cc-atcp-table').length > 0) {
                        return false;
                    }
//********************** The length becomes greater than 0 & popup is filled & below code is not triggered
                    /*
                                            var closeButton = "";

                                            var bannerImageURl = (data.email_banner_public_url != '') ? data.email_banner_public_url : CDN_APP_MR_URL + 'cart-popup.png';
                                            var headingFontWeight = (data.heading_is_bold == 1) ? 'bold' : 'normal';
                                            var headingFontStyle = (data.heading_is_italic == 1) ? 'italic' : 'normal';
                                            var headingFontSize = data.heading_font_size + 'px';
                                            var headingTextAlignment = data.heading_text_align.toLowerCase();
                                            var headingColor = data.heading_color;
                                            var headingText = data.heading_text;

                                            var descriptionFontWeight = (data.description_is_bold == 1) ? 'bold' : 'normal';
                                            var descriptionFontStyle = (data.description_is_italic == 1) ? 'italic' : 'normal';
                                            var descriptionFontSize = data.description_font_size + 'px';
                                            var descriptionTextAlignment = data.description_text_align.toLowerCase();
                                            var descriptionColor = data.description_color;
                                            var descriptionText = data.description_text;

                                            var emailPlaceHolder = data.email_placeholder;

                                            var buttonFontWeight = (data.button_is_bold == 1) ? 'bold' : 'normal';
                                            var buttonFontStyle = (data.button_is_italic == 1) ? 'italic' : 'normal';
                                            var buttonFontSize = data.button_font_size + 'px';
                                            var buttonTextAlignment = data.button_text_align.toLowerCase();
                                            var buttonColor = data.button_text_color;
                                            var buttonText = data.button_text;
                                            var buttonBackgroundColor = data.button_background_color;

                                            var titlehtml = "<h2 style='text-transform: unset;font-family: Open Sans, sans-serif;font-size:" + headingFontSize +";color:"+ headingColor +" ;text-align:" + headingTextAlignment + ";font-weight:" + headingFontWeight +";font-style: " + headingFontStyle +"'>"+ headingText +"</h2>"; //addToCartPopUpData.heading_text,
                                            var descripionText = "<p style='text-transform: unset;font-family: Open Sans, sans-serif;font-size:" + descriptionFontSize +";color:"+ descriptionColor +";text-align:" + descriptionTextAlignment +";font-weight: " + descriptionFontWeight +";font-style:" + descriptionFontStyle +";'>" + descriptionText + "</p>";
                                            CCSwal.fire({
                                                title: titlehtml,
                                                html: descripionText,
                                                input: 'email',
                                                inputPlaceholder: emailPlaceHolder,
                                                inputAutoTrim: true,
                                                confirmButtonText:  "<span style='font-size:" + buttonFontSize +";color:"+ buttonColor +";font-style:"+ buttonFontStyle +";font-weight:" + buttonFontWeight +"'>"+buttonText+"</span>",
                                                confirmButtonColor: buttonBackgroundColor,
                                                showCancelButton: false,
                                                cancelButtonText: 'No, cancel!',
                                                showCloseButton: (data.is_active_close_button==1?true:false),
                                                imageUrl: bannerImageURl,
                                                imageWidth: 100,
                                                allowOutsideClick: false,
                                                //footer: 'Footer text',
                                                //reverseButtons: true,
                                                //type: 'success'

                                            }).then(function (result) {

                                            });
                    */
                }

            });

        }

        ccFbMRJquery('body').on('click', '#pn-optin-disallow-btn-text', function () {
            window.localStorage.setItem('cc-pn-subscription-popup', 'DENIED');
            window.localStorage.setItem('cc-pn-subscription-token', '');
            ccFbMRJquery('#cc_pn_notification_template').hide();

        });

        ccFbMRJquery('body').on('submit', 'form[action="/cart/add"]', function (e) {
            if (facebookCheckboxWidgetType == 'ATC' && facebookCheckboxWidgetStatus == 'checked') {
                ccFbMRJquery(".cc_messenger_widget_atc_title").html(facebookCheckboxWidget.checkbox_widget.subscribed_text);
            }
            // e.preventDefault();
            console.clear();
            console.log('add to cart clicked....');
            setTimeout(function () {
                isAjaxFbMR = 0;
                abandonedCartFbMR.process(0);
            }, 2000);

//********** If Spinner Module Exists, then set timeout to 8 seconds because if spinner module exists, app-er request takes time & then app-mr request is triggered ****
            if(ccFbMRJquery("#spin_a_sale_cc_store_front_module" + name).length == 0) {
                //it doesn't exist
                setTimeout(function () {
                    isAjaxFbMR = 0;
                    confirmOptIn();
                }, 6000);
            }
            else
            {
                setTimeout(function () {
                    isAjaxFbMR = 0;
                    confirmOptIn();
                }, 20000);
            }
        });

        var proxied = window.XMLHttpRequest.prototype.send;
        window.XMLHttpRequest.prototype.send = function () {
            //console.log( arguments );
            //Here is where you can add any code to process the request.
            //If you want to pass the Ajax request object, pass the 'pointer' below
            var pointer = this
            var intervalId = window.setInterval(function () {
                if (pointer.readyState != 4) {
                    return;
                }
                var url = pointer.responseURL;
                var lastPart = url.split('/');
                var name = lastPart[lastPart.length - 1];
                if(!isCartLoadingFbMR){
                    if (name == 'add.js' || name == 'change.js') {
                        //Show email collector
                        isAjaxFbMR = 1;
                        console.log('show collector in ajax call');
                        abandonedCartFbMR.process(0);
                        setTimeout(function () {
                            confirmOptIn();
                        }, 6000);
                        /*
                                                    abandonedCartFbMR.process(0);
                                                    setTimeout(function () {
                                                        ccFbMRJquery('.mfp-wrap').css('display', 'block');
                                                    }, 2000);
                        */
                        /*
                                                    setTimeout(function () {
                                                        isAjaxFbMR = 0;
                                                        abandonedCartFbMR.process(0);
                                                    }, 2000);
                        */

                    }
                }
                //Here is where you can add any code to process the response.
                //If you want to pass the Ajax request object, pass the 'pointer' below
                clearInterval(intervalId);

            }, 1);//I found a delay of 1 to be sufficient, modify it as you need.
            return proxied.apply(this, [].slice.call(arguments));
        };

    }

    function stickyDiscountFunction(appId,facebookPageData,stickyDiscountData) {
//************************** Sticky Discount Handle Start ***************************
        console.log('stickyDiscountData is ACTIVE & LOADING');
        showStickyDiscountCollapsed(stickyDiscountData);
        if(!showStickyDiscountOpenViewLoad)
            showStickyDiscountOpenView(appId,facebookPageData,stickyDiscountData);
        if(!showStickyDiscountSubscribedViewLoad)
            showStickyDiscountSubscribedView(stickyDiscountData);
        //ccFbMRJquery('#sticky-discount-collapsed-div').hide();
        //ccFbMRJquery('#sticky-discount-open-view-div').hide();
        //ccFbMRJquery('#sticky-discount-subscribed-view-div').hide();
        ccFbMRJquery('body').on('click', '#sticky-discount-collapsed-div', function () {
            //console.log("sticky details clicked");
            //window.localStorage.setItem('cc-pn-subscription-popup', 'DENIED');
            //window.localStorage.setItem('cc-pn-subscription-token', '');
            ccFbMRJquery('#sticky-discount-collapsed-div').hide();
            ccFbMRJquery('#sticky-discount-open-view-div').show();
//**************** START - Forcefully give width & height to FB Checkbox widget in Sticky Discount as in Firefox at times it shows 0 width & height ********
            ccFbMRJquery('#sticky-discount-fb-checkbox-widget').find('span:first').css({
                width: "280px",
                height: "70px"
            });
            ccFbMRJquery('#sticky-discount-fb-checkbox-widget').find('iframe').css({
                width: "280px",
                height: "70px"
            });
//**************** END - Forcefully give width & height to FB Checkbox widget in Sticky Discount as in Firefox at times it shows 0 width & height ********
//****************** START - If "stickyDiscountImpressionSaved" is not set, then trigger the Stick Discount Impression AJAX Call *****************************
            if(window.localStorage.getItem('stickyDiscountImpressionSaved') !== 'undefined' && window.localStorage.getItem('stickyDiscountImpressionSaved') !== null && window.localStorage.getItem('stickyDiscountImpressionSaved') !== 'null') {
//**************************** "stickyDiscountImpressionSaved" is set, then don't do anything
            }
            else{
                if (window.localStorage.getItem('store_visitor_id') !== 'undefined' && window.localStorage.getItem('store_visitor_id') !== null && window.localStorage.getItem('store_visitor_id') !== 'null') {
                    var storeId = stickyDiscountData.store_id;
                    var storeVisitorId = window.localStorage.getItem('store_visitor_id');
                    //console.log('storeVisitorId: ' + storeVisitorId);
                    var data = {
                        store: storeId,
                        store_visitor_id: storeVisitorId
                    }
                    //console.log("Gonna Trigger Impression Save");
                    ccFbMRJquery.ajax({
                        url: apiBaseUrlFbMR + "/api/sticky-discount/sticky-discount-impression-save",
                        dataType: 'json',
                        type: 'POST',
                        data: data,

                        success: function (response) {
                            window.localStorage.setItem('stickyDiscountImpressionSaved', 1);
                            console.log("response Success: " + response.data);
                        }
                    });
                }
                else
                {
                    //console.log('storeVisitorId NOT SET ');
                }
            }
//****************** END - If "stickyDiscountImpressionSaved" is not set, then trigger the Stick Discount Impression AJAX Call *****************************
        });

        ccFbMRJquery('body').on('click', '.close-sticky-open-view', function () {
            //console.log("sticky close clicked");
            ccFbMRJquery('#sticky-discount-open-view-div').hide();
            ccFbMRJquery('#cc-sticky-checkbox-error').hide();
            ccFbMRJquery('#sticky-discount-subscribed-view-div').hide();
            ccFbMRJquery('#sticky-discount-collapsed-div').show();
        });

        ccFbMRJquery('body').on('click', '#sticky-discount-subscribe-btn', function () {
            console.log("sticky discount button clicked");
            if (facebookCheckboxWidgetStatus == null || facebookCheckboxWidgetStatus == "unchecked") {
                ccFbMRJquery("#cc-sticky-checkbox-error").show();
            }
            else {
                ccFbMRJquery('#sticky-discount-open-view-div').hide();
                ccFbMRJquery('#sticky-discount-collapsed-div').hide();
                ccFbMRJquery('#cc-sticky-checkbox-error').hide();
                ccFbMRJquery('#sticky-discount-subscribed-view-div').show();
            }
        });

        //ccFbMRJquery('body').on('click', '#copy-sticky-discount-code', function () {
        ccFbMRJquery('body').on('click', 'a[name=copy_sticky_pre]', function () {
            var id = ccFbMRJquery(this).attr('id');
            //var id = ccFbMRJquery('#plain-offer-code-2020-cc');
            var el = document.getElementById(id);
            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            document.execCommand('copy');
            alert("Code copied to clipboard.");
            return false;
        });

//************************** Sticky Discount Handle End *****************************
    }

    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

}

var abandonedCartFbMR = new AbandonedCartFbMR();
abandonedCartFbMR.init(abandonedCartFbMR.process, [0], 0);