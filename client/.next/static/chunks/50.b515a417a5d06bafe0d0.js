(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{QgiU:function(t,e,n){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var r=e.prototype,i={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(t,e,n,i){return r.fromToBase(t,e,n,i)}n.en.relativeTime=i,r.fromToBase=function(e,r,s,a,o){for(var c,u,l,h=s.$locale().relativeTime||i,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,m=0;m<f;m+=1){var g=d[m];g.d&&(c=a?n(e).diff(s,g.d,!0):s.diff(e,g.d,!0));var $=(t.rounding||Math.round)(Math.abs(c));if(l=c>0,$<=g.r||!g.r){$<=1&&m>0&&(g=d[m-1]);var v=h[g.l];o&&($=o(""+$)),u="string"==typeof v?v.replace("%d",$):v($,r,g.l,l);break}}if(r)return u;var y=l?h.future:h.past;return"function"==typeof y?y(u):y.replace("%s",u)},r.to=function(t,e){return s(t,e,this,!0)},r.from=function(t,e){return s(t,e,this)};var a=function(t){return t.$u?n.utc():n()};r.toNow=function(t){return this.to(a(this),t)},r.fromNow=function(t){return this.from(a(this),t)}}}()},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",c="week",u="month",l="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},v=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},y={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:h,w:c,d:o,D:d,h:a,m:s,s:i,ms:r,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p="en",b={};b[p]=$;var O=function(t){return t instanceof _},w=function(t,e,n){var r;if(!t)return p;if("string"==typeof t)b[t]&&(r=t),e&&(b[t]=e,r=t);else{var i=t.name;b[i]=t,r=i}return!n&&r&&(p=r),r||!n&&p},M=function(t,e){if(O(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},j=y;j.l=w,j.i=O,j.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function $(t){this.$L=w(t.locale,null,!0),this.parse(t)}var v=$.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(j.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(m);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return j},v.isValid=function(){return!(this.$d.toString()===f)},v.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return M(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<M(t)},v.$g=function(t,e,n){return j.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,r=!!j.u(e)||e,l=j.p(t),f=function(t,e){var i=j.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(o)},m=function(t,e){return j.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,$=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case h:return r?f(1,0):f(31,11);case u:return r?f(1,$):f(0,$+1);case c:var p=this.$locale().weekStart||0,b=(g<p?g+7:g)-p;return f(r?v-b:v+(6-b),$);case o:case d:return m(y+"Hours",0);case a:return m(y+"Minutes",1);case s:return m(y+"Seconds",2);case i:return m(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var n,c=j.p(t),l="set"+(this.$u?"UTC":""),f=(n={},n[o]=l+"Date",n[d]=l+"Date",n[u]=l+"Month",n[h]=l+"FullYear",n[a]=l+"Hours",n[s]=l+"Minutes",n[i]=l+"Seconds",n[r]=l+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===u||c===h){var g=this.clone().set(d,1);g.$d[f](m),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[j.p(t)]()},v.add=function(r,l){var d,f=this;r=Number(r);var m=j.p(l),g=function(t){var e=M(f);return j.w(e.date(e.date()+Math.round(t*r)),f)};if(m===u)return this.set(u,this.$M+r);if(m===h)return this.set(h,this.$y+r);if(m===o)return g(1);if(m===c)return g(7);var $=(d={},d[s]=e,d[a]=n,d[i]=t,d)[m]||1,v=this.$d.getTime()+r*$;return j.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this;if(!this.isValid())return f;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=j.z(this),i=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=i.weekdays,u=i.months,l=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},h=function(t){return j.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:j.s(o+1,2,"0"),MMM:l(i.monthsShort,o,u,3),MMMM:l(u,o),D:this.$D,DD:j.s(this.$D,2,"0"),d:String(this.$W),dd:l(i.weekdaysMin,this.$W,c,2),ddd:l(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:j.s(s,2,"0"),h:h(1),hh:h(2),a:d(s,a,!0),A:d(s,a,!1),m:String(a),mm:j.s(a,2,"0"),s:String(this.$s),ss:j.s(this.$s,2,"0"),SSS:j.s(this.$ms,3,"0"),Z:r};return n.replace(g,(function(t,e){return e||m[t]||r.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,d,f){var m,g=j.p(d),$=M(r),v=($.utcOffset()-this.utcOffset())*e,y=this-$,p=j.m(this,$);return p=(m={},m[h]=p/12,m[u]=p,m[l]=p/3,m[c]=(y-v)/6048e5,m[o]=(y-v)/864e5,m[a]=y/n,m[s]=y/e,m[i]=y/t,m)[g]||y,f?p:j.a(p)},v.daysInMonth=function(){return this.endOf(u).$D},v.$locale=function(){return b[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},v.clone=function(){return j.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},$}(),D=_.prototype;return M.prototype=D,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",u],["$y",h],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,_,M),t.$i=!0),M},M.locale=w,M.isDayjs=O,M.unix=function(t){return M(1e3*t)},M.en=b[p],M.Ls=b,M.p={},M}()},n4j1:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),i=n.n(r),s=n("YFqc"),a=n.n(s),o=n("AeFk"),c=n("DZdY"),u=n("Wgwc"),l=n.n(u),h=n("QgiU"),d=n.n(h),f=n("UIRo"),m=n("nOHt");l.a.extend(d.a),l.a.locale("kor");var g=Object(c.a)("article",{target:"egtikk0"})({name:"1yjh3s",styles:"transition:all 0.4s;&:hover{text-decoration:underline;background-color:rgba(0, 0, 0, 0.1);}"}),$=function(t){var e,n,r=t.article,s=t.type,a=Object(m.useRouter)();return Object(o.c)(i.a.Fragment,null,r&&Object(o.c)(g,{onClick:function(t){"hashtag"!==t.target.className&&(window.scrollTo({top:0}),a.push("/".concat(r.category,"/post/").concat(r.id)))},style:{marginLeft:"0.5rem"},className:"article article_aside"},Object(o.c)("div",{className:"blog_small_aside_title"},Object(o.c)("span",{style:{color:f.c,fontWeight:"bold",fontSize:"0.9rem"}},"IN ",r.category.toUpperCase()),Object(o.c)("span",{className:"article_md_footer"},"\xa0\xa0","comments"===s?(null===(e=r.Comments)||void 0===e?void 0:e.length)+" Comments":"like"===s?(null===(n=r.PostLikers)||void 0===n?void 0:n.length)+" Likes":r.hit+" views"),Object(o.c)("h2",{style:{marginTop:"1rem"},className:"article_aside_header small_title"},r.title))))};l.a.extend(d.a),l.a.locale("kor");var v=function(t){var e,n,r,s,a=t.article,c=t.type,u=Object(m.useRouter)();return Object(o.c)(i.a.Fragment,null,a&&Object(o.c)("article",{onClick:function(t){"hashtag"!==t.target.className&&(window.scrollTo({top:0}),u.push("/".concat(a.category,"/post/").concat(a.id)))},className:"article article_aside"},Object(o.c)("div",{style:{marginBottom:"0.5rem",width:"100%",overflow:"hidden"}},Object(o.c)("img",{className:"article_img",style:{width:"100%",height:"150px",border:"0.3px solid rgba(0,0,0,0.1)"},alt:a.title,src:null!==a&&void 0!==a&&a.thumbnail?a.thumbnail:a.imagePath?a.imagePath.replace(/\/thumb\//,"/original/"):"/images/blog/noImage.gif",onError:function(t){t.target.src="/images/blog/noImage.gif"}})),Object(o.c)("div",null,Object(o.c)("span",{style:{color:f.c,fontWeight:"bold",fontSize:"1rem"}},"IN ",a.category.toUpperCase()),Object(o.c)("span",{className:"article_md_footer"},"comments"===c?(null===a||void 0===a||null===(e=a.Comments)||void 0===e?void 0:e.length)+" Comments":"like"===c?(null===a||void 0===a||null===(n=a.PostLikers)||void 0===n?void 0:n.length)+" Likes":a.hit+" views"),Object(o.c)("h2",{style:{margin:"0.5rem 0 0.8rem 0",height:"1.5rem",lineHeight:"1.5"},className:"article_aside_header"},a.title),Object(o.c)("ul",{className:"article_footer"},Object(o.c)("li",{className:"date"},l()().to(l()(a.createdAt),!0),"\xa0ago"),Object(o.c)("li",{className:"view"},"\xb7",Object(o.c)("span",{style:"view"===c?{color:f.c,fontWeight:"bold"}:{}},"\xa0",a.hit," views")),Object(o.c)("li",{className:"comments"},"\xb7",Object(o.c)("span",{style:"view"===c?{}:{color:f.c,fontWeight:"bold"}},"\xa0","comments"===c?(null===a||void 0===a||null===(r=a.Comments)||void 0===r?void 0:r.length)+" Comments":(null===a||void 0===a||null===(s=a.PostLikers)||void 0===s?void 0:s.length)+" Likes"))))))};var y={name:"7xjfxr",styles:"display:flex;align-items:center;font-size:1.2rem;padding:0 1rem"},p=function(t){return Object(o.b)(t?"margin-bottom: 1rem;":null,";","","")},b=Object(r.memo)((function(t){var e=t.mostPost,n=t.src,r=t.desc,i=t.hashtags,s=t.aside,c=t.type;return Object(o.c)("div",{css:p(s)},Object(o.c)("h3",{css:y},Object(o.c)("img",{alt:"trophy",className:"icon",src:n}),r),i?Object(o.c)("ul",{className:"blog_aside_tag"},i&&i.map((function(t,e){return Object(o.c)("li",{onClick:function(){return window.scrollTo({top:0})},key:e},Object(o.c)(a.a,{href:"/hashtag/".concat(t.name)},Object(o.c)("a",null,"#",t.name)))}))):s?Object(o.c)(v,{type:c,article:e}):Object(o.c)($,{type:c,article:e}))}));e.default=Object(r.memo)(b)}}]);