(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2671"],{"214f":function(t,a,e){"use strict";var s=e("32e9"),i=e("2aba"),n=e("79e5"),r=e("be13"),l=e("2b4c");t.exports=function(t,a,e){var c=l(t),d=e(r,c,""[t]),o=d[0],u=d[1];n(function(){var a={};return a[c]=function(){return 7},7!=""[t](a)})&&(i(String.prototype,t,o),s(RegExp.prototype,c,2==a?function(t,a){return u.call(t,this,a)}:function(t){return u.call(t,this)}))}},"2f21":function(t,a,e){"use strict";var s=e("79e5");t.exports=function(t,a){return!!t&&s(function(){a?t.call(null,function(){},1):t.call(null)})}},"41d9":function(t,a,e){"use strict";var s=e("c9ee"),i=e.n(s);i.a},"55dd":function(t,a,e){"use strict";var s=e("5ca1"),i=e("d8e8"),n=e("4bf8"),r=e("79e5"),l=[].sort,c=[1,2,3];s(s.P+s.F*(r(function(){c.sort(void 0)})||!r(function(){c.sort(null)})||!e("2f21")(l)),"Array",{sort:function(t){return void 0===t?l.call(n(this)):l.call(n(this),i(t))}})},"6b7b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t.day?e("div",{staticClass:"mdl-tabs"},[e("div",{staticClass:"mdl-tabs__tab-bar"},[e("a",{class:"friday"==t.day?"mdl-tabs__tab is-active":"mdl-tabs__tab",attrs:{href:"/schedule/friday"}},[t._v("Friday")]),e("a",{class:"saturday"==t.day?"mdl-tabs__tab is-active":"mdl-tabs__tab",attrs:{href:"/schedule/saturday"}},[t._v("Saturday")]),e("a",{class:"sunday"==t.day?"mdl-tabs__tab is-active":"mdl-tabs__tab",attrs:{href:"/schedule/sunday"}},[t._v("Sunday")])]),e("div",{staticClass:"mdl-grid"},t._l(Object.keys(t.timeline),function(a){return e("div",{key:a,staticClass:"mdl-cell mdl-cell--4-col"},[e("div",{staticClass:"mdl-card mdl-shadow--2dp"},[e("div",{class:"mdl-card__title mdl-card--expand stage-"+a},[e("h2",{staticClass:"mdl-card__title-text"},[t._v("Stage "+t._s(a.toUpperCase()))])])]),e("ul",{staticClass:"mdl-list"},t._l(t.timeline[a],function(a){return e("li",{key:a.id,staticClass:"mdl-list__item mdl-list__item--two-line"},[e("span",{staticClass:"mdl-list__item-primary-content"},[e("i",{staticClass:"mdl-list__item-avatar"},[e("span",[t._v(t._s(a.start_time))]),e("span",{staticClass:"mdl-list__divider"},[t._v("-")]),e("span",[t._v(t._s(a.end_time))])]),e("span",[t._v(t._s(a.speaker))]),e("span",{staticClass:"mdl-list__item-sub-title"},[t._v(t._s(a.title))])]),e("span",{staticClass:"mdl-list__item-secondary-content"},[e("router-link",{staticClass:"mdl-list__item-secondary-action",attrs:{to:{name:"talk",params:{slug:a.slug}}}},[e("i",{staticClass:"material-icons"},[t._v("chevron_right")])])],1)])}))])}))]):t._e()])},i=[],n=(e("a481"),e("55dd"),e("cadf"),e("551c"),e("097d"),e("bc3a")),r=e.n(n),l={name:"home",data:function(){return{timeline:{a:void 0,b:void 0,c:void 0},day:void 0}},created:function(){var t=this;r.a.get("https://nexmo-emf-schedule.herokuapp.com/data/nexmo-schedule.json").then(function(a){t.day=t.$route.params.day;var e="";switch(t.day){case"friday":e="2018-08-31";break;case"saturday":e="2018-09-01";break;case"sunday":e="2018-09-02";break;default:break}t.timeline.a=a.data.filter(function(t){return"Stage A"===t.venue&&0===t.start_date.indexOf(e)}).sort(t.sortByDate),t.timeline.b=a.data.filter(function(t){return"Stage B"===t.venue&&0===t.start_date.indexOf(e)}).sort(t.sortByDate),t.timeline.c=a.data.filter(function(t){return"Stage C"===t.venue&&0===t.start_date.indexOf(e)}).sort(t.sortByDate)}).catch(console.error)},methods:{sortByDate:function(t,a){return t=Date.parse(t.start_date.replace(/\ /,"T")),a=Date.parse(a.start_date.replace(/\ /,"T")),t>a?1:t<a?-1:0}}},c=l,d=(e("41d9"),e("2877")),o=Object(d["a"])(c,s,i,!1,null,null,null);o.options.__file="Schedule.vue";a["default"]=o.exports},a481:function(t,a,e){e("214f")("replace",2,function(t,a,e){return[function(s,i){"use strict";var n=t(this),r=void 0==s?void 0:s[a];return void 0!==r?r.call(s,n,i):e.call(String(n),s,i)},e]})},c9ee:function(t,a,e){}}]);
//# sourceMappingURL=chunk-2671.c75b524c.js.map