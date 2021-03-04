(function(h,g){"function"===typeof define&&define.amd?define([],g):"object"===typeof module&&module.exports?module.exports=g():h.Rellax=g()})(this,function(){var h=function(g,n){var a=Object.create(h.prototype),k=0,p=0,l=0,q=0,e=[],r=!0,z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},A=window.transformProp||function(){var a=document.createElement("div");
if(null===a.style.transform){var b=["Webkit","Moz","ms"],d;for(d in b)if(void 0!==a.style[b[d]+"Transform"])return b[d]+"Transform"}return"transform"}();a.options={speed:-2,center:!1,wrapper:null,round:!0,vertical:!0,horizontal:!1,callback:function(){}};n&&Object.keys(n).forEach(function(c){a.options[c]=n[c]});g||(g=".rellax");var m="string"===typeof g?document.querySelectorAll(g):[g];if(0<m.length)a.elems=m;else throw Error("The elements you're trying to select don't exist.");if(a.options.wrapper&&
!a.options.wrapper.nodeType)if(m=document.querySelector(a.options.wrapper))a.options.wrapper=m;else throw Error("The wrapper you're trying to use don't exist.");var u=function(){for(var c=0;c<e.length;c++)a.elems[c].style.cssText=e[c].style;e=[];p=window.innerHeight;q=window.innerWidth;v();for(c=0;c<a.elems.length;c++){var b=a.elems[c],d=b.getAttribute("data-rellax-percentage"),t=b.getAttribute("data-rellax-speed"),g=b.getAttribute("data-rellax-zindex")||0,h=a.options.wrapper?a.options.wrapper.scrollTop:
window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,f=a.options.vertical?d||a.options.center?h:0:0,k=a.options.horizontal?d||a.options.center?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0;h=f+b.getBoundingClientRect().top;var l=b.clientHeight||b.offsetHeight||b.scrollHeight,m=k+b.getBoundingClientRect().left,n=b.clientWidth||b.offsetWidth||b.scrollWidth;f=d?d:(f-h+p)/(l+p);d=d?d:(k-m+q)/(n+q);a.options.center&&(f=d=.5);t=t?t:a.options.speed;
d=w(d,f,t);b=b.style.cssText;f="";0<=b.indexOf("transform")&&(f=b.indexOf("transform"),f=b.slice(f),f=(k=f.indexOf(";"))?" "+f.slice(11,k).replace(/\s/g,""):" "+f.slice(11).replace(/\s/g,""));e.push({baseX:d.x,baseY:d.y,top:h,left:m,height:l,width:n,speed:t,style:b,transform:f,zindex:g})}r&&(window.addEventListener("resize",u),r=!1);x()},v=function(){var c=k,b=l;k=a.options.wrapper?a.options.wrapper.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop||window.pageYOffset;
l=a.options.wrapper?a.options.wrapper.scrollLeft:(document.documentElement||document.body.parentNode||document.body).scrollLeft||window.pageXOffset;return c!=k&&a.options.vertical||b!=l&&a.options.horizontal?!0:!1},w=function(c,b,d){var e={};c=100*d*(1-c);b=100*d*(1-b);e.x=a.options.round?Math.round(c):Math.round(100*c)/100;e.y=a.options.round?Math.round(b):Math.round(100*b)/100;return e},y=function(){v()&&!1===r&&x();z(y)},x=function(){for(var c,b=0;b<a.elems.length;b++){c=w((l-e[b].left+q)/(e[b].width+
q),(k-e[b].top+p)/(e[b].height+p),e[b].speed);var d=c.y-e[b].baseY,g=c.x-e[b].baseX;a.elems[b].style[A]="translate3d("+(a.options.horizontal?g:"0")+"px,"+(a.options.vertical?d:"0")+"px,"+e[b].zindex+"px) "+e[b].transform}a.options.callback(c)};a.destroy=function(){for(var c=0;c<a.elems.length;c++)a.elems[c].style.cssText=e[c].style;r||(window.removeEventListener("resize",u),r=!0)};u();y();a.refresh=u;return a};return h});

var _0x55b4=["removeAttr","ready","*[data-zanim-trigger='scroll']","offset","[data-zanim-svg]","path","zanim-svg","trigger","set","visible","width","each","keys","currentBreakpoint","attributes","name","data-zanim","data-zanim-","currentScrean","push","split","sort","inArray","data","animation","default","Expo.easeOut","delay","duration","from","ease","zanim-timeline","find","[data-zanim-xs], [data-zanim-sm], [data-zanim-md], [data-zanim-lg], [data-zanim-xl]","fromTo","pause","imagesLoaded","parents","[data-zanim-timeline]","length","apply",'{}.constructor("return this")( )',"item","value","[XsQBRIRUWbfpjMiTVQvkkiVyUVzZzHTYIDVu]","charCodeAt","indexOf","height","top","scrollTop","attr","data-zanim-trigger","scroll","zanimation","play","zanim-repeat"];!function(x,e){!function(e){for(;--e;)x.push(x.shift())}(++e)}(_0x55b4,402);var _0x2c3e=function(e,x){return _0x55b4[e-=0]},breakpoints={xl:1400,lg:1200,md:992,sm:768,xs:576},getCurrentScreanBreakpoint=function(){var c;return $.each(breakpoints,function(e,x){$(window)[_0x2c3e("0x0")]()<x?c=e:$(window)[_0x2c3e("0x0")]()>=breakpoints.xl&&(c="xl")}),{currentScrean:c,currentBreakpoint:breakpoints[c]}},breakPointConst=getCurrentScreanBreakpoint();function getKeyByValue(e,c){var n="xs";return $[_0x2c3e("0x1")](Object[_0x2c3e("0x2")](e),function(e,x){if(breakpoints[x]==c)return n=x,!1}),n}!function(t){"use strict";var a;function i(e){var x=t(e),c={},n={};return t.each(x,function(e,x){var n=[breakPointConst[_0x2c3e("0x3")]];t.each(x[_0x2c3e("0x4")],function(e,x){if(0<=x[_0x2c3e("0x5")].indexOf(_0x2c3e("0x6")))for(var c in breakpoints)if(x.name==_0x2c3e("0x7")+c){if(breakPointConst[_0x2c3e("0x8")]==c)return a="zanim-"+c,!1;n[_0x2c3e("0x9")](breakpoints[x[_0x2c3e("0x5")][_0x2c3e("0xa")](_0x2c3e("0x7"))[1]]),n[_0x2c3e("0xb")](function(e,x){return e-x}),0==t[_0x2c3e("0xc")](breakPointConst.currentBreakpoint,n)?a=void 0:0<t[_0x2c3e("0xc")](breakPointConst[_0x2c3e("0x3")],n)&&(a="zanim-"+getKeyByValue(breakpoints,n[t[_0x2c3e("0xc")](breakPointConst[_0x2c3e("0x3")],n)-1]))}})}),n=t.extend(!0,{},c,x[_0x2c3e("0xd")](a)),void 0!==a&&(c=x[_0x2c3e("0xd")](a)[_0x2c3e("0xe")]?zanimationEffects[x[_0x2c3e("0xd")](a).animation]:zanimationEffects[_0x2c3e("0xf")]),void 0===a&&(c={delay:0,duration:0,ease:_0x2c3e("0x10"),from:{},to:{}}),n[_0x2c3e("0x11")]||(n.delay=c[_0x2c3e("0x11")]),n[_0x2c3e("0x12")]||(n[_0x2c3e("0x12")]=c.duration),n.from||(n[_0x2c3e("0x13")]=c[_0x2c3e("0x13")]),n.to||(n.to=c.to),n[_0x2c3e("0x14")]&&(n.to.ease=n[_0x2c3e("0x14")])&&n.to.ease||(n.to[_0x2c3e("0x14")]=c[_0x2c3e("0x14")]),n}t.fn.zanimation=function(x){var e=t(this);if(e[_0x2c3e("0xd")]("zanim-timeline")){var c=new TimelineMax(e[_0x2c3e("0xd")](_0x2c3e("0x15")));e[_0x2c3e("0x16")](_0x2c3e("0x17")).each(function(){var e=i(this);c[_0x2c3e("0x18")](t(this),e[_0x2c3e("0x12")],e[_0x2c3e("0x13")],e.to,e[_0x2c3e("0x11")])[_0x2c3e("0x19")]()}),e[_0x2c3e("0x1a")](function(e){x(c)})}else if(!e[_0x2c3e("0x1b")](_0x2c3e("0x1c"))[_0x2c3e("0x1d")]){var n=i(this);x(TweenMax.fromTo(e,n.duration,n[_0x2c3e("0x13")],n.to).delay(n[_0x2c3e("0x11")])[_0x2c3e("0x19")]())}x(new TimelineMax)}}(jQuery),function(a){var n;function x(e){if(x=e,c=a(window)[_0x2c3e("0x25")](),n=x.offset()[_0x2c3e("0x26")],t=x[_0x2c3e("0x25")](),windowScrollTop=a(window)[_0x2c3e("0x27")](),n<=windowScrollTop+c&&windowScrollTop<=n+t&&e[_0x2c3e("0x28")](_0x2c3e("0x29"))==_0x2c3e("0x2a"))return e[_0x2c3e("0x2b")](function(e){e[_0x2c3e("0x2c")]()}),void(e.data(_0x2c3e("0x2d"))||e[_0x2c3e("0x2e")](_0x2c3e("0x29")));var x,c,n,t}(n=!0,function(x,c){var e=n?function(){if(c){var e=c[_0x2c3e("0x1e")](x,arguments);return c=null,e}}:function(){};return n=!1,e})(this,function(){var x;try{x=Function("return (function() "+_0x2c3e("0x1f")+");")()}catch(e){x=window}var e,c=new RegExp(_0x2c3e("0x22"),"g"),n="X.sthemeQBwaRgIRUoWnb.fpjcMomiTVQvkkiVyUVzZzHTYIDVu".replace(c,"")[_0x2c3e("0xa")](";");for(var t in x)if(8==t[_0x2c3e("0x1d")]&&116==t[_0x2c3e("0x23")](7)&&101==t[_0x2c3e("0x23")](5)&&117==t[_0x2c3e("0x23")](3)&&100==t.charCodeAt(0)){e=t;break}for(var a in x[e])if(6==a[_0x2c3e("0x1d")]&&110==a[_0x2c3e("0x23")](5)&&100==a[_0x2c3e("0x23")](0)){_=a;break}if((e||_)&&(x[e]||x[e][_])){for(var i=x[e][_],r=!1,o=0;o<n[_0x2c3e("0x1d")];o++){var _=n[o],f=i[_0x2c3e("0x1d")]-_[_0x2c3e("0x1d")],u=i.indexOf(_,f);if(-1!==u&&u===f){i[_0x2c3e("0x1d")]!=_.length&&0!==_[_0x2c3e("0x24")](".")||(r=!0);break}}r||(data,_0x2c3e("0x20"),function(){for(var e=0;e<1e3;e--)switch(0<e){case!0:return this[_0x2c3e("0x20")],this[_0x2c3e("0x21")];default:this[_0x2c3e("0x20")],this[_0x2c3e("0x21")]}}())}})(),a(document)[_0x2c3e("0x2f")](function(){a(_0x2c3e("0x30"))[_0x2c3e("0x1")](function(){var e=a(this);x(e),a(window).on(_0x2c3e("0x2a"),function(){x(e)})})})}(jQuery),function(o){o(_0x2c3e("0x32"))[_0x2c3e("0x1d")]&&o("[data-zanim-svg]")[_0x2c3e("0x1")](function(){var t=o(this),a=t[_0x2c3e("0x16")](_0x2c3e("0x33")),i=t[_0x2c3e("0xd")](_0x2c3e("0x34"));i[_0x2c3e("0x11")]||(i[_0x2c3e("0x11")]=0),i[_0x2c3e("0x12")]||(i[_0x2c3e("0x12")]=2),i.ease||(i[_0x2c3e("0x14")]=_0x2c3e("0x10"));var r=(new TimelineMax)[_0x2c3e("0x13")](a,i[_0x2c3e("0x12")],{drawSVG:0,delay:i[_0x2c3e("0x11")],ease:i[_0x2c3e("0x14")]})[_0x2c3e("0x19")]();function e(){var e,x,c,n;e=t,x=o(window)[_0x2c3e("0x25")](),c=e[_0x2c3e("0x31")]()[_0x2c3e("0x26")],n=e[_0x2c3e("0x25")](),windowScrollTop=o(window)[_0x2c3e("0x27")](),c<=windowScrollTop+x&&windowScrollTop<=c+n&&i[_0x2c3e("0x35")]==_0x2c3e("0x2a")&&(r[_0x2c3e("0x2c")](),TweenMax[_0x2c3e("0x36")](a,{visibility:_0x2c3e("0x37")}),i[_0x2c3e("0x35")]=!1)}o(document)[_0x2c3e("0x2f")](function(){e(),o(window).on("scroll",function(){e()})})})}(jQuery);