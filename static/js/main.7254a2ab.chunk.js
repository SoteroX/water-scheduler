(this["webpackJsonptandem-watering"]=this["webpackJsonptandem-watering"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('[{"name":"Fiddle Leaf Fig","water_after":"7 days"},{"name":"Snake Plant","water_after":"14 days"},{"name":"Money Tree","water_after":"14 days"},{"name":"Bird\'s Nest Fern","water_after":"3 days"},{"name":"Croton","water_after":"7 days"},{"name":"Bell Pepper Plant","water_after":"3 days"},{"name":"Strawberry Plant","water_after":"3 days"},{"name":"Dracaena","water_after":"14 days"},{"name":"Spider Plant","water_after":"7 days"},{"name":"Jade","water_after":"14 days"},{"name":"Wavy Fern","water_after":"2 days"}]')},22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),o=(a(27),a(8)),s=(a(28),function(){return r.a.createElement("div",{className:"welcome-container"},r.a.createElement("h1",null,"Welcome to Tandem Watering Scheduler"),r.a.createElement("p",null,"Tandem Watering Scheduler is an application that helps you keep track of when your plants need watering"))}),u=a(6),i=a.n(u),f=a(19),d=a.n(f),m=a(16),v=(a(33),Object(m.b)(d.a)),y=function(e){var t=e.events;return console.log("events in component:",t),r.a.createElement(m.a,{localizer:v,events:t,startAccessor:"start",endAccessor:"end",style:{height:500}})},p=a(12),h=a(11),w=a.n(h),g=function(e){for(var t={},a=0;a<e.length;a++){var n=e[a];t[n.water_after]?t[n.water_after].push(n):t[n.water_after]=[n]}return t},E=function(e){return parseInt(e.replace(/\D/g,""))},b=function(e,t){var a=new Date(e);return a.setDate(a.getDate()+t),a},D=function(e,t){var a=new Date(e);return a.setDate(a.getDate()-t),a},_=function(e){var t={},a=0,n=null,r=new Date("03/09/2020");for(var l in e){a=E(l),n=new Date("2019-12-16T00:00:00"),console.log("tempDate:",n);for(var c=1;c<=85;c+=a)if(1===c){if(!t[l]){var o={month:n.getMonth(),day:n.getDate(),year:n.getFullYear()};t[l]=[o]}}else if(t[l]){if((n=b(n,a))>r)break;6===n.getDay()?n=D(n,1):0===n.getDay()&&(n=b(n,1));var s={month:n.getMonth(),day:n.getDate(),year:n.getFullYear()};t[l].push(s)}}return t},k=function(e,t){var a=[],n=e["7 days"],r=t["7 days"],l=e["2 days"],c=t["2 days"],o=t["3 days"],s=e["3 days"],u=t["14 days"],i=e["14 days"];return a.push(S(r,n)),a.push(S(c,l)),a.push(S(o,s)),a.push(S(u,i)),a.flat()},S=function(e,t){for(var a=[],n={id:null,title:null,start:null,end:null},r=0;r<e.length;r++)for(var l=0;l<t.length;l++)n.id=w()(),n.title=t[l].name,n.start=new Date(e[r].year,e[r].month,e[r].day),n.end=new Date(e[r].year,e[r].month,e[r].day),a.push(Object(p.a)({},n));return a},x=function(e){var t=e.sortedPlants,a=Object(n.useState)(null),l=Object(o.a)(a,2),c=l[0],s=l[1];return Object(n.useEffect)((function(){!function(){var e;i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(_(t));case 3:return e=a.sent,a.t0=s,a.next=7,i.a.awrap(k(t,e));case 7:a.t1=a.sent,(0,a.t0)(a.t1),a.next=14;break;case 11:a.prev=11,a.t2=a.catch(0),console.log("couldnt create calendar event structure:",a.t2);case 14:case"end":return a.stop()}}),null,null,[[0,11]])}()}),[t]),console.log("events:",c),r.a.createElement("div",null,c?r.a.createElement(y,{events:c}):r.a.createElement("div",null,"Calendar component couldn't be render"))},O=(a(36),function(e){var t=e.list.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement("h3",{className:"list-plant-title"},e.name),r.a.createElement("h5",{className:"list-plant-dates"},"Every ",e.water_after),r.a.createElement("ul",null,e.dates.map((function(e,t){var a=new Date(e.year,e.month,e.day);return r.a.createElement("li",{key:w()()},a.toDateString())}))))}));return r.a.createElement("div",{className:"list-section"},r.a.createElement("h1",{className:"list-component-title"},"List Component"),r.a.createElement("div",{className:"list-ui-container"},t))}),j=function(e){var t=[],a=!0,n=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var o=l.value;t.includes(o.water_after)||t.push(o.water_after)}}catch(s){n=!0,r=s}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}return t},N=function(e){var t={},a=0,n=null,r=new Date("03/09/2020"),l=!0,c=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(l=(s=u.next()).done);l=!0){var i=s.value;a=E(i),n=new Date("12/16/2019");for(var f=1;f<=85;f+=a)if(1===f){if(!t[i]){var d={month:n.getMonth(),day:n.getDate(),year:n.getFullYear()};t[i]=[d]}}else if(t[i]){if((n=b(n,a))>r)break;6===n.getDay()?n=D(n,1):0===n.getDay()&&(n=b(n,1));var m={month:n.getMonth(),day:n.getDate(),year:n.getFullYear()};t[i].push(m)}}}catch(v){c=!0,o=v}finally{try{l||null==u.return||u.return()}finally{if(c)throw o}}return t},F=function(e,t){var a=[],n=!0,r=!1,l=void 0;try{for(var c,o=t[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var s=c.value;e[s.water_after]&&a.push(Object(p.a)({},s,{dates:e[s.water_after]}))}}catch(u){r=!0,l=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}return a},P=function(e){var t=e.plants,a=Object(n.useState)(null),l=Object(o.a)(a,2),c=l[0],s=l[1];return Object(n.useEffect)((function(){!function(){var e,a;i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(j(t));case 3:return e=n.sent,n.next=6,i.a.awrap(N(e));case 6:return a=n.sent,n.t0=s,n.next=10,i.a.awrap(F(a,t));case 10:n.t1=n.sent,(0,n.t0)(n.t1),n.next=17;break;case 14:n.prev=14,n.t2=n.catch(0),console.log("found error when creating list:",n.t2);case 17:case"end":return n.stop()}}),null,null,[[0,14]])}()}),[t]),r.a.createElement("div",null,c?r.a.createElement(O,{list:c}):r.a.createElement("div",null,"List couldn't be displayed, please check for errors"))},W=a(15);a(37);var C=function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(g(W)),u=Object(o.a)(c,1)[0];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:"app-selection-container"},r.a.createElement("h4",null,"Select which VIEW you would like to use"),r.a.createElement("div",{className:"app-button-container"},r.a.createElement("button",{className:"app-button-styles "+(!1===a?"active":null),onClick:function(){a&&l(!1)}},"List"),r.a.createElement("button",{className:"app-button-styles "+(!0===a?"active":null),onClick:function(){a||l(!0)}},"Calendar"))),a?r.a.createElement(x,{sortedPlants:u}):r.a.createElement(P,{plants:W}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7254a2ab.chunk.js.map