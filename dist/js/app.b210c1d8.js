(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],d=0,u=[];d<o.length;d++)r=o[d],i[r]&&u.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);f&&f(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},r={app:0},i={app:0},s=[];function o(t){return l.p+"js/"+({}[t]||t)+"."+{"chunk-204e":"f80dcb87"}[t]+".js"}function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={"chunk-204e":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-204e":"6c4d1029"}[t]+".css",r=l.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var o=i[s],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===n||c===r))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){o=d[s],c=o.getAttribute("data-href");if(c===n||c===r)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var n=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.request=n,a(i)},u.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(u)}).then(function(){r[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=s);var c,d=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");s.type=n,s.request=r,a[1](s)}i[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,d.appendChild(u)}return Promise.all(e)},l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var f=d;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mdl-layout mdl-js-layout mdl-layout--fixed-header",attrs:{id:"app"}},[a("header",{staticClass:"mdl-layout__header"},[a("div",{staticClass:"mdl-layout__header-row"},[a("span",{staticClass:"mdl-layout-title"},[a("img",{staticClass:"mdl-cell--hide-phone",attrs:{src:"https://dashboard.nexmo.com/resources/img/nexmo-logo-w-vonage.svg"}}),a("router-link",{attrs:{to:"/"}},[t._v("EMF Camp Schedule")])],1),a("div",{staticClass:"mdl-layout-spacer"}),a("nav",{staticClass:"mdl-navigation mdl-layout--large-screen-only"},[a("router-link",{staticClass:"mdl-navigation__link",attrs:{to:"/"}},[t._v("Home")])],1)])]),a("main",{staticClass:"mdl-layout__content"},[a("div",{staticClass:"page-content"},[a("router-view")],1)])])},i=[],s=(a("034f"),a("2877")),o={},l=Object(s["a"])(o,r,i,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,d=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.timeline["sunday"]["c"]?a("div",{staticClass:"mdl-tabs mdl-js-tabs mdl-js-ripple-effect"},[a("div",{staticClass:"mdl-tabs__tab-bar"},[a("a",{staticClass:"mdl-tabs__tab is-active",attrs:{href:"#friday"},on:{click:function(e){t.activeTab="friday"}}},[t._v("Friday")]),a("a",{staticClass:"mdl-tabs__tab",attrs:{href:"#saturday"},on:{click:function(e){t.activeTab="saturday"}}},[t._v("Saturday")]),a("a",{staticClass:"mdl-tabs__tab",attrs:{href:"#sunday"},on:{click:function(e){t.activeTab="sunday"}}},[t._v("Sunday")])]),t._l(Object.keys(t.timeline),function(e){return a("div",{key:e,class:e===t.activeTab?"mdl-tabs__panel mdl-grid is-active":"mdl-tabs__panel mdl-grid",attrs:{id:e}},t._l(Object.keys(t.timeline[e]),function(n){return a("div",{key:n,staticClass:"mdl-cell mdl-cell--4-col"},[a("div",{staticClass:"mdl-card mdl-shadow--2dp"},[a("div",{class:"mdl-card__title mdl-card--expand stage-"+n},[a("h2",{staticClass:"mdl-card__title-text"},[t._v("Stage "+t._s(n.toUpperCase()))])])]),a("ul",{staticClass:"mdl-list"},t._l(t.timeline[e][n],function(e){return a("li",{key:e.id,staticClass:"mdl-list__item mdl-list__item--two-line"},[a("span",{staticClass:"mdl-list__item-primary-content"},[a("i",{staticClass:"mdl-list__item-avatar"},[a("span",[t._v(t._s(e.start_time))]),a("span",{staticClass:"mdl-list__divider"},[t._v("-")]),a("span",[t._v(t._s(e.end_time))])]),a("span",[t._v(t._s(e.speaker))]),a("span",{staticClass:"mdl-list__item-sub-title"},[t._v(t._s(e.title))])]),a("span",{staticClass:"mdl-list__item-secondary-content"},[a("router-link",{staticClass:"mdl-list__item-secondary-action",attrs:{to:{name:"talk",params:{slug:e.slug}}}},[a("i",{staticClass:"material-icons"},[t._v("chevron_right")])])],1)])}))])}))})],2):t._e()])},f=[],m=(a("55dd"),a("bc3a")),v=a.n(m),p={name:"home",data:function(){return{timeline:{friday:{a:void 0,b:void 0,c:void 0},saturday:{a:void 0,b:void 0,c:void 0},sunday:{a:void 0,b:void 0,c:void 0}},activeTab:"friday"}},created:function(){var t=this;v.a.get("data/nexmo-schedule.json").then(function(e){t.timeline.friday.a=e.data.filter(function(t){return"Stage A"===t.venue&&0===t.start_date.indexOf("2018-08-31")}).sort(t.sortByDate),t.timeline.friday.b=e.data.filter(function(t){return"Stage B"===t.venue&&0===t.start_date.indexOf("2018-08-31")}).sort(t.sortByDate),t.timeline.friday.c=e.data.filter(function(t){return"Stage C"===t.venue&&0===t.start_date.indexOf("2018-08-31")}).sort(t.sortByDate),t.timeline.saturday.a=e.data.filter(function(t){return"Stage A"===t.venue&&0===t.start_date.indexOf("2018-09-01")}).sort(t.sortByDate),t.timeline.saturday.b=e.data.filter(function(t){return"Stage B"===t.venue&&0===t.start_date.indexOf("2018-09-01")}).sort(t.sortByDate),t.timeline.saturday.c=e.data.filter(function(t){return"Stage C"===t.venue&&0===t.start_date.indexOf("2018-09-01")}).sort(t.sortByDate),t.timeline.sunday.a=e.data.filter(function(t){return"Stage A"===t.venue&&0===t.start_date.indexOf("2018-09-02")}).sort(t.sortByDate),t.timeline.sunday.b=e.data.filter(function(t){return"Stage B"===t.venue&&0===t.start_date.indexOf("2018-09-02")}).sort(t.sortByDate),t.timeline.sunday.c=e.data.filter(function(t){return"Stage C"===t.venue&&0===t.start_date.indexOf("2018-09-02")}).sort(t.sortByDate)}).catch(console.error)},methods:{sortByDate:function(t,e){return t=new Date(t.start_date),e=new Date(e.start_date),t>e?1:t<e?-1:0}}},_=p,y=(a("cccb"),Object(s["a"])(_,u,f,!1,null,null,null));y.options.__file="Home.vue";var h=y.exports;n["a"].use(d["a"]);var g=new d["a"]({routes:[{path:"/",name:"home",component:h},{path:"/talk/:slug",name:"talk",component:function(){return a.e("chunk-204e").then(a.bind(null,"7e06"))}}]}),b=a("9483");Object(b["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1,new n["a"]({router:g,render:function(t){return t(c)}}).$mount("#app")},"8f59":function(t,e,a){},c21b:function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("8f59"),r=a.n(n);r.a}});
//# sourceMappingURL=app.b210c1d8.js.map