(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{220:function(t,e,r){t.exports=r.p+"img/0216072.png"},222:function(t,e,r){"use strict";var c=r(41),n=r(42),o=(r(95),{props:["zipcodeList"],components:{},data:function(){return{categorySelect:"default",text:"",zipcode:null,query:"",placeholder:"Enter Suburb or Postcode"}},computed:{fas:function(){return c.a},fab:function(){return n.a},rows:function(){return this.items.length}},methods:{toSearch:function(){this.$emit("onSearch",this.text),this.$router.push({name:"search",query:{s:this.text}})}}}),l=r(14),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("b-col",{staticClass:"category-wrapper",attrs:{lg:"5",xl:"4"}},[c("b-form",{staticClass:"search-box"},[c("h4",{staticClass:"text-white text-uppercase mt-0"},[t._v("Search")]),t._v(" "),c("b-input-group",[c("b-form-input",{attrs:{placeholder:"Enter keyword..."},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),c("b-input-group-append",[c("b-button",{staticClass:"text-sm",attrs:{variant:"success"},on:{click:t.toSearch}},[c("fa",{attrs:{icon:t.fas.faSearch}})],1)],1)],1)],1),t._v(" "),c("b-form",{staticClass:"compare-s-box"},[c("h4",{staticClass:"text-white mt-0"},[t._v("Compare health insurance quotes.")]),t._v(" "),c("b-input-group",[c("i",{staticClass:"fa-icon text-sm"},[c("fa",{attrs:{icon:t.fas.faUser}})],1),t._v(" "),c("b-form-select",{model:{value:t.categorySelect,callback:function(e){t.categorySelect=e},expression:"categorySelect"}},[c("option",{attrs:{value:"default"}},[t._v("Life Stage...")]),t._v(" "),c("option",{attrs:{value:"a"}},[t._v("Single")]),t._v(" "),c("option",{attrs:{value:"b"}},[t._v("Couple")]),t._v(" "),c("option",{attrs:{value:"c"}},[t._v("Family")]),t._v(" "),c("option",{attrs:{value:"d"}},[t._v("Single Parent Family")]),t._v(" "),c("option",{attrs:{value:"e"}},[t._v("Family + Young Aduls")])]),t._v(" "),c("i",{staticClass:"fa-icon text-sm"},[c("fa",{attrs:{icon:t.fas.faChevronDown}})],1)],1),t._v(" "),c("vue-bootstrap-typeahead",{staticClass:"typeahead",attrs:{data:t.zipcodeList,placeholder:"Enter Suburb or Postcode"},scopedSlots:t._u([{key:"prepend",fn:function(){return[c("b-input-group-text",[c("fa",{attrs:{icon:t.fas.faMapMarker}})],1)]},proxy:!0}]),model:{value:t.query,callback:function(e){t.query=e},expression:"query"}}),t._v(" "),c("b-input-group",[c("b-button",{staticClass:"btn-default btn-block btn-r text-capitalize",attrs:{variant:"success"}},[t._v("Start Search")])],1),t._v(" "),c("div",{staticClass:"compare-phone text-center"},[c("span",{staticClass:"d-block text-sm text-white"},[t._v("Prefer to talk? Call us at:")]),t._v(" "),c("a",{staticClass:"text-white d-block",attrs:{href:"tel:1300 163 402"}},[c("i",{staticClass:"icon-fa d-inline-block bg-white"},[c("fa",{attrs:{icon:t.fas.faPhoneAlt}})],1),t._v("1300 163 402")])])],1),t._v(" "),c("h3",{staticClass:"blog-category-heading text-uppercase title-color"},[t._v("Popular posts")]),t._v(" "),c("hr"),t._v(" "),c("div",{staticClass:"popular-post"},[c("div",{staticClass:"media d-flex align-items-center"},[c("div",{staticClass:"media__image"},[c("img",{attrs:{src:r(220),alt:"media image",width:"50",height:"50"}})]),t._v(" "),c("div",{staticClass:"media__content"},[c("small",{staticClass:"text-success"},[t._v("Tuesday, December 3, 2019")]),t._v(" "),c("h5",{staticClass:"text-sm m-0"},[t._v("What to buy a health nut for Christmas in 2019")])])]),t._v(" "),c("div",{staticClass:"media d-flex align-items-center"},[c("div",{staticClass:"media__image"},[c("img",{attrs:{src:r(220),alt:"media image",width:"50",height:"50"}})]),t._v(" "),c("div",{staticClass:"media__content"},[c("small",{staticClass:"text-success"},[t._v("Tuesday, December 3, 2019")]),t._v(" "),c("h5",{staticClass:"text-sm m-0"},[t._v("What to buy a health nut for Christmas in 2019")])])]),t._v(" "),c("div",{staticClass:"media d-flex align-items-center"},[c("div",{staticClass:"media__image"},[c("img",{attrs:{src:r(220),alt:"media image",width:"50",height:"50"}})]),t._v(" "),c("div",{staticClass:"media__content"},[c("small",{staticClass:"text-success"},[t._v("Tuesday, December 3, 2019")]),t._v(" "),c("h5",{staticClass:"text-sm m-0"},[t._v("What to buy a health nut for Christmas in 2019")])])])])],1)}),[],!1,null,null,null);e.a=component.exports},231:function(t,e,r){"use strict";r.r(e);r(6),r(4),r(3),r(1),r(5);var c=r(0),n=(r(46),r(41)),o=r(42),l=r(95),v=r.n(l),d=r(76);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var h={asyncData:function(t){var e,data;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t.params,r.prev=1,r.next=4,regeneratorRuntime.awrap(v.a.get("https://healthinsurancecomparison.com.au/wp-json/wp/v2/pages/?slug=about-us&_embed"));case 4:return e=r.sent,data=e.data,r.abrupt("return",{content:data[0].content.rendered});case 9:return r.prev=9,r.t0=r.catch(1),r.abrupt("return",{content:[]});case 12:case"end":return r.stop()}}),null,null,[[1,9]])},components:{Search:r(222).a},data:function(){return{categorySelect:"default",text:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)({zipcodeList:"getZipcodeList"}),{fas:function(){return n.a},fab:function(){return o.a}})},f=r(14),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"about-us"},[r("div",{staticClass:"top-space"}),t._v(" "),r("b-container",[r("div",{staticClass:"article-content bg-white"},[r("b-row",[r("b-col",{staticClass:"blog-box",attrs:{lg:"7",xl:"8"}},[r("div",{staticClass:"article-title"},[r("h2",{staticClass:"inner-main-title title-color"},[t._v("About")]),t._v(" "),r("div",{staticClass:"divide"})]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.content)}})]),t._v(" "),r("search",{attrs:{zipcodeList:t.zipcodeList}})],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);