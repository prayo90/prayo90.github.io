webpackJsonp([1],{0:function(t,e){},1:function(t,e){},2:function(t,e){},"5FPc":function(t,e,a){t.exports=a.p+"static/img/header.3cb16be.gif"},Iekj:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={};a.d(s,"bootstrap",function(){return G});var n=a("7t+N"),i=a.n(n),r=(a("K3J8"),a("NP2u"),a("7+uW")),o=a("+ikV"),l=a.n(o),c=a("AYPi"),d=a.n(c),u=a("m0IH"),m=a.n(u),g=a("Dd8w"),f=a.n(g),v=a("NYxO"),h={name:"Topnav",computed:f()({},Object(v.b)(["getCountdownItem"])),methods:{handleCountdownEnd:function(){console.log("==============> countdownend"),this.$store.dispatch("refreshTimes")}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container",attrs:{id:"app-header"}},[t._m(0),t._v(" "),t.getCountdownItem?a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8 pt-1 pb-1 text-center"},[a("div",{staticClass:"jumbotron rounded-0 p-4"},["current"===t.getCountdownItem.type?a("h3",[t._v("ROMYSG WOE is currently "),a("span",{staticClass:"badge badge-success"},[t._v("running")])]):t._e(),t._v(" "),"upcoming"===t.getCountdownItem.type?[a("h3",[t._v("Upcoming ROMYSG WOE")]),t._v(" "),a("p",{staticClass:"mb-0"},[a("strong",[t._v("Date : ")]),t._v(t._s(t.getCountdownItem.date))]),t._v(" "),a("p",[a("strong",[t._v("Time : ")]),t._v(t._s(t.getCountdownItem.start)+" - "+t._s(t.getCountdownItem.end)+" (GMT+08)")])]:t._e(),t._v(" "),a("countdown",{attrs:{time:t.getCountdownItem.duration,"emit-events":!0},on:{countdownend:t.handleCountdownEnd},scopedSlots:t._u([{key:"default",fn:function(e){return["current"===t.getCountdownItem.type?a("span",[t._v("Time Remaining：")]):t._e(),t._v(" "),a("span",{staticClass:"badge badge-info badge-countdown"},[t._v(t._s(e.days))]),t._v(" days\n                            "),a("span",{staticClass:"badge badge-primary badge-countdown"},[t._v(t._s(e.hours))]),t._v(" hours\n                            "),a("span",{staticClass:"badge badge-warning badge-countdown"},[t._v(t._s(e.minutes))]),t._v(" minutes\n                            "),a("span",{staticClass:"badge badge-danger badge-countdown"},[t._v(t._s(e.seconds))]),t._v(" seconds\n                        ")]}}])})],2)])]):t._e()]),t._v(" "),a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark rounded",attrs:{id:"top-navbar"}},[t._m(1),t._v(" "),a("div",{staticClass:"collapse navbar-collapse justify-content-md-center",attrs:{id:"navbarsExample10"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{class:{"nav-item":!0,active:"PageHome"===this.$route.name}},[a("router-link",{staticClass:"nav-link px-4",attrs:{to:{name:"PageHome"}}},[t._v("Home")])],1),t._v(" "),a("li",{class:{"nav-item":!0,active:"PageTimelogs"===this.$route.name}},[a("router-link",{staticClass:"nav-link px-4",attrs:{to:{name:"PageTimelogs"}}},[t._v("Timelogs")])],1),t._v(" "),a("li",{class:{"nav-item":!0,active:"PageGraphs"===this.$route.name}},[a("router-link",{staticClass:"nav-link px-4",attrs:{to:{name:"PageGraphs"}}},[t._v("Graphs")])],1),t._v(" "),a("li",{class:{"nav-item":!0,active:"PageArchive"===this.$route.name}},[a("router-link",{staticClass:"nav-link px-4",attrs:{to:{name:"PageArchive"}}},[t._v("Archive")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"blog-header py-3"},[e("div",{staticClass:"row flex-nowrap justify-content-between align-items-center"},[e("div",{staticClass:"col-12 text-center"},[e("a",{staticClass:"blog-header-logo text-dark",attrs:{href:"#"}},[e("img",{staticClass:"img-fluid",attrs:{src:a("5FPc"),alt:"romysg woe"}})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExample10","aria-controls":"navbarsExample10","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]};var p={name:"App",components:{Topnav:a("VU/8")(h,_,!1,function(t){a("wW5R")},"data-v-8d29e3d0",null).exports},beforeCreate:function(){this.$store.dispatch("bootstrap")}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("topnav"),t._v(" "),a("main",{staticClass:"pt-4 pb-4"},[a("router-view")],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer text-white bg-dark"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 text-center"},[e("span",{staticClass:"text-white"},[this._v("© 2017 MYSG WOE Standing")])])])])])}]};var C=a("VU/8")(p,b,!1,function(t){a("bni6")},null,null).exports,y=a("/ocq"),j=a("PJh5"),w=a.n(j),D={name:"AllCastleStanding",data:function(){return{viewingTimelogCastle:"",isLoadingStandings:!0,isLoadingTimelog:!0}},props:["viewingDate"],watch:{viewingDate:function(t,e){var a=this;this.isLoadingStandings=!0,this.$store.dispatch("getStandingsByDate",t).then(function(){a.isLoadingStandings=!1}).catch(function(){a.isLoadingStandings=!1})}},computed:f()({formattedSelectedDate:function(){return w()(this.viewingDate,"YYYYMMDD").format("D MMMM YYYY")},timelogsByCastleAndDateSelf:function(){return this.timelogsByCastleAndDate(this.viewingTimelogCastle,this.viewingDate)},standingsByDateSelf:function(){return this.standingsByDate(this.viewingDate)},castlesPaginatedListByNameSelf:function(){return this.castlesPaginatedListByName(this.viewingTimelogCastle)}},Object(v.b)(["standingsByDate","timelogsByCastleAndDate","castlesPaginatedListByName"])),methods:{detailsButtonClickHandler:function(t,e){t.preventDefault(),this.viewingTimelogCastle=e,this._modalTimelogs.modal()},initTimelogModal:function(){var t=this;this.$store.dispatch("getTimelogsByCastleAndDate",{castle:this.viewingTimelogCastle,date:this.viewingDate}).then(function(){t.isLoadingTimelog=!1})},initListeners:function(){var t=this;this._modalTimelogs=$("#modal-timelogs"),this._modalTimelogs.on("hidden.bs.modal",function(){t.viewingTimelogCastle=""}),this._modalTimelogs.on("show.bs.modal",function(){t.initTimelogModal()})},getBgColorByIndex:function(t){var e=["bg-success","bg-info","bg-warning","bg-danger","bg-secondary","bg-primary"],a=t;return t>=e.length&&(a=t%e.length),e[a]},castleChangeClickHandler:function(t,e){t.preventDefault(),this.viewingTimelogCastle=e}},mounted:function(){this.initListeners()}},T={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-header text-white bg-dark"},[t._v("\n        ROMYSG Castle Standing as for "+t._s(t.formattedSelectedDate)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-body p-0"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-sm"},[t._m(0),t._v(" "),a("tbody",[t.isLoadingStandings?a("tr",[t._m(1)]):t._e(),t._v(" "),t.isLoadingStandings||0!==Object.keys(t.standingsByDateSelf).length?t._e():a("tr",[t._m(2)]),t._v(" "),t._l(t.standingsByDateSelf,function(e,s){return!t.isLoadingStandings&&Object.keys(t.standingsByDateSelf).length>0?[a("tr",{key:s,staticClass:"table-secondary"},[a("th",{attrs:{colspan:"6"}},[t._v(t._s(t._f("capitalize")(s))+" Castles")])]),t._v(" "),t._l(e,function(e){return a("tr",{key:e.name},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"text-left"},[a("img",{attrs:{src:e.inhabitants.emblem,alt:""}}),t._v(" "+t._s(e.inhabitants.name)+"\n                        ")]),t._v(" "),a("td",[t._v("\n                            "+t._s(e.inhabitants.leader)+"\n                        ")]),t._v(" "),a("td",[t._v(t._s(e.heldFor)+" day"),e.heldFor>1?a("span",[t._v("s")]):t._e()]),t._v(" "),a("td",[t._v(t._s(e.breaks))]),t._v(" "),a("td",[a("a",{staticClass:"btn btn-outline-info btn-sm",attrs:{href:"#"},on:{click:function(a){t.detailsButtonClickHandler(a,e.name)}}},[t._v("Details")])])])})]:t._e()})],2)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"modal-timelogs",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.viewingTimelogCastle)+"'s Timelogs")]),t._v(" "),t._m(3)]),t._v(" "),a("div",{staticClass:"modal-body"},[t.isLoadingTimelog?[t._m(4)]:t._e(),t._v(" "),t.isLoadingTimelog||0!==t.timelogsByCastleAndDateSelf.length?t._e():[a("p",{staticClass:"mb-0"},[t._v("Data for "+t._s(t.viewingTimelogCastle)+" is still in progress. Stay tuned ")])],t._v(" "),!t.isLoadingTimelog&&t.timelogsByCastleAndDateSelf.length>0?[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-sm mb-3"},[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("WOE Date")]),t._v(" "),a("td",[t._v(t._s(t.formattedSelectedDate))])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Castle name")]),t._v(" "),a("td",[t._v(t._s(t.viewingTimelogCastle))])]),t._v(" "),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("Winner")]),t._v(" "),a("td",[t.timelogsByCastleAndDateSelf[t.timelogsByCastleAndDateSelf.length-1].inhabitant.emblem?a("img",{attrs:{src:t.timelogsByCastleAndDateSelf[t.timelogsByCastleAndDateSelf.length-1].inhabitant.emblem,alt:""}}):t._e(),t._v("\n                                        "+t._s(t.timelogsByCastleAndDateSelf[t.timelogsByCastleAndDateSelf.length-1].inhabitant.name))])])])]),t._v(" "),a("h5",[t._v("Duration hold")]),t._v(" "),a("div",{staticClass:"progress mb-5 mt-5"},[t._l(t.timelogsByCastleAndDateSelf,function(e,s){return[a("div",{class:["progress-bar","progress-bar-animated","progress-bar-striped",t.getBgColorByIndex(s)],style:{width:e.percentage+"%"},attrs:{role:"progressbar"}},[e.inhabitant.emblem?a("div",{staticClass:"emblem-container"},[a("img",{attrs:{src:e.inhabitant.emblem,alt:""}})]):t._e(),t._v("\n                                    "+t._s(e.minutesHold)+"m\n                                ")])]})],2),t._v(" "),a("h5",[t._v("Timelogs")]),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-sm"},[t._m(5),t._v(" "),a("tbody",[t._l(t.timelogsByCastleAndDateSelf,function(e){return[e.inhabitant?[a("tr",[a("td",[t._v(t._s(e.time))]),t._v(" "),a("td",[a("img",{attrs:{src:e.inhabitant.emblem,alt:""}}),t._v(" "+t._s(e.inhabitant.name))]),t._v(" "),a("td",[t._v(t._s(e.remarks))])])]:t._e()]})],2)])])]:t._e()],2),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6 text-left"},[a("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowleft"],expression:"['arrowleft']"}],staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.castleChangeClickHandler(e,t.castlesPaginatedListByNameSelf.prev)},shortkey:function(e){t.castleChangeClickHandler(e,t.castlesPaginatedListByNameSelf.prev)}}},[a("i",{staticClass:"fa fa-arrow-left"}),t._v(" "+t._s(t.castlesPaginatedListByNameSelf.prev)+"\n                                ")])]),t._v(" "),a("div",{staticClass:"col-sm-6 text-right"},[a("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["arrowright"],expression:"['arrowright']"}],staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.castleChangeClickHandler(e,t.castlesPaginatedListByNameSelf.next)},shortkey:function(e){t.castleChangeClickHandler(e,t.castlesPaginatedListByNameSelf.next)}}},[t._v("\n                                    "+t._s(t.castlesPaginatedListByNameSelf.next)+" "),a("i",{staticClass:"fa fa-arrow-right"})])])])])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{},[a("th",{attrs:{scope:"col"}},[t._v("Castles")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Inhabitants")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Leader")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Held for")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Breaks")]),t._v(" "),a("th",{attrs:{scope:"col"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"6"}},[e("i",{staticClass:"fa fa-spin fa-spinner"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"6"}},[e("p",{staticClass:"mb-0"},[this._v("Data is still in progress. Stay tuned ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"mb-0"},[e("i",{staticClass:"fa fa-spin fa-spinner"}),this._v(" Crunching data. Please wait... ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Time")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Inhabitants")]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v("Remarks")])])])}]};var k={components:{AllCastleStanding:a("VU/8")(D,T,!1,function(t){a("Iekj")},"data-v-1e079f7b",null).exports},name:"PageHome",computed:f()({preformattedSelectedDate:function(){return w()(this.selectedDate,"D MMMM YYYY").format("YYYYMMDD")}},Object(v.b)(["formattedWoeTimesWithResult"])),data:function(){return{selectedDate:""}},updated:function(){this.formattedWoeTimesWithResult.length>0&&""==this.selectedDate&&(this.selectedDate=this.formattedWoeTimesWithResult[0])},mounted:function(){this.$forceUpdate()}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container-page"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-3 mb-4 text-white"},[t._v("\n      WOE date :\n      "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedDate=e.target.multiple?a:a[0]}}},t._l(t.formattedWoeTimesWithResult,function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("all-castle-standing",{attrs:{viewingDate:t.preformattedSelectedDate}})],1)])])},staticRenderFns:[]};var x=a("VU/8")(k,S,!1,function(t){a("d1ra")},"data-v-1effd74e",null).exports,W={name:"AllCastleStanding",data:function(){return{isLoadingTimelog:!0}},props:["viewingDate"],watch:{viewingDate:function(t,e){var a=this;this.isLoadingTimelog=!0,this.$store.dispatch("getStandingsByDate",t).then(function(){a.isLoadingStandings=!1,a.$store.dispatch("getTimelogsByCastleAndDate",{castle:a.viewingTimelogCastle,date:a.viewingDate}).then(function(){a.isLoadingTimelog=!1}).catch(function(){a.isLoadingTimelog=!1})}).catch(function(){a.isLoadingStandings=!1})}},computed:f()({standingsByDateSelf:function(){return this.standingsByDate(this.viewingDate)},formattedSelectedDate:function(){return w()(this.viewingDate,"YYYYMMDD").format("D MMMM YYYY")},timelogsByCastleAndDateSelf:function(){var t=this;return function(e){return t.timelogsByCastleAndDate(e,t.viewingDate)}}},Object(v.b)(["timelogsByCastleAndDate","standingsByDate"])),methods:{getBgColorByIndex:function(t){var e=["bg-success","bg-info","bg-warning","bg-danger","bg-secondary","bg-primary"],a=t;return t>=e.length&&(a=t%e.length),e[a]}},mounted:function(){}},B={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center"},[a("div",{staticClass:"card-header text-white bg-dark"},[t._v("\n        ROMYSG Castle Timelogs as for "+t._s(t.formattedSelectedDate)+"\n    ")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-bordered table-sm"},[t._m(0),t._v(" "),a("tbody",[t.isLoadingTimelog?a("tr",[t._m(1)]):t._e(),t._v(" "),t.isLoadingTimelog||0!==Object.keys(t.standingsByDateSelf).length?t._e():a("tr",[t._m(2)]),t._v(" "),t._l(t.standingsByDateSelf,function(e,s){return!t.isLoadingTimelog&&Object.keys(t.standingsByDateSelf).length>0?[a("tr",{key:s,staticClass:"table-secondary"},[a("th",{attrs:{colspan:"2"}},[t._v(t._s(t._f("capitalize")(s))+" Castles")])]),t._v(" "),t._l(e,function(e){return a("tr",{key:e.name},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.name))]),t._v(" "),a("td",{},[a("div",{staticClass:"progress m-2 mt-5"},[t._l(t.timelogsByCastleAndDateSelf(e.name,t.viewingDate),function(e,s){return[a("div",{class:["progress-bar",t.getBgColorByIndex(s)],style:{width:e.percentage+"%"},attrs:{role:"progressbar"}},[e.inhabitant.emblem?a("div",{staticClass:"emblem-container"},[a("img",{attrs:{src:e.inhabitant.emblem,alt:""}})]):t._e(),t._v("\n                                        "+t._s(e.minutesHold)+"m\n                                    ")])]})],2)])])})]:t._e()})],2)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",{},[a("th",{attrs:{scope:"col"}},[t._v("Castles")]),t._v(" "),a("th",{staticClass:"col-9",attrs:{scope:"col"}},[t._v("Timelogs")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"2"}},[e("i",{staticClass:"fa fa-spin fa-spinner"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",{attrs:{colspan:"2"}},[e("p",{staticClass:"mb-0"},[this._v("Data is still in progress. Stay tuned ")])])}]};var L={name:"PageTimelogs",components:{Timelogs:a("VU/8")(W,B,!1,function(t){a("yCnA")},"data-v-0f3ea47c",null).exports},computed:f()({preformattedSelectedDate:function(){return w()(this.selectedDate,"D MMMM YYYY").format("YYYYMMDD")}},Object(v.b)(["formattedWoeTimesWithResult"])),data:function(){return{selectedDate:""}},updated:function(){this.formattedWoeTimesWithResult.length>0&&""==this.selectedDate&&(this.selectedDate=this.formattedWoeTimesWithResult[0])},mounted:function(){this.$forceUpdate()}},Y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container-page"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-sm-3 mb-4 text-white"},[t._v("\n            WOE date :\n            "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedDate,expression:"selectedDate"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedDate=e.target.multiple?a:a[0]}}},t._l(t.formattedWoeTimesWithResult,function(e,s){return a("option",{key:s,domProps:{value:e}},[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("timelogs",{attrs:{viewingDate:t.preformattedSelectedDate}})],1)])])},staticRenderFns:[]},M=a("VU/8")(L,Y,!1,null,null,null).exports,A={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"jumbotron text-center"},[a("h3",[t._v("Coming soon!")]),t._v(" "),a("p",{staticClass:"lead"},[t._v("We are working hard to bring this feature up as soon as possible. Stay tuned. Please come back later.")])])])])])}]},E=a("VU/8")({name:"ComingSoon"},A,!1,null,null,null).exports,P={name:"PageGraphs",components:{ComingSoon:E}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-page"},[e("coming-soon")],1)},staticRenderFns:[]},H=a("VU/8")(P,R,!1,null,null,null).exports,O={name:"PageArchive",components:{ComingSoon:E}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container-page"},[e("coming-soon")],1)},staticRenderFns:[]},z=a("VU/8")(O,N,!1,null,null,null).exports;r.a.use(y.a);var F,I=new y.a({routes:[{path:"/",name:"PageHome",component:x},{path:"/timelogs",name:"PageTimelogs",component:M},{path:"/graphs",name:"PageGraphs",component:H},{path:"/archive",name:"PageArchive",component:z}]}),G=function(t){var e=t.dispatch;e("getAllGuilds"),e("getAllCastles"),e("getWoeTimes")},U=a("bOdI"),V=a.n(U),q=a("mtWM"),X=a.n(q),J="SET_ALL_GUILDS",K="SET_ALL_CASTLES",Z="SET_ALL_WOE_TIMES",Q="ADD_WOE_STANDING",tt="ADD_WOE_TIMELOGS",et={state:{guilds:[]},getters:{getGuildByName:function(t){return function(e){var a=t.guilds.find(function(t){return t.name==e});return a||(console.warn("No data found for guild: "+e),{name:e,isNoData:!0})}}},actions:{getAllGuilds:function(t){var e=t.commit;return X.a.get("/static/woe-datas/guild.json").then(function(t){e(J,{guilds:t.data})})}},mutations:V()({},J,function(t,e){var a=e.guilds;t.guilds=a.map(function(t){return t.emblem="/static/woe-datas/emblems/"+t.emblem,t})})},at=a("Gu7T"),st=a.n(at),nt={state:{towns:{}},getters:{castlesPaginatedListByName:function(t){return function(e){var a=[];for(var s in t.towns)a=[].concat(st()(a),st()(t.towns[s]));var n=a.indexOf(e),i=0!==n?n-1:a.length-1,r=n!==a.length-1?n+1:0;return{prev:a[i],next:a[r]}}}},actions:{getAllCastles:function(t){var e=t.commit;return X.a.get("/static/woe-datas/castles.json").then(function(t){e(K,{towns:t.data})})}},mutations:V()({},K,function(t,e){var a=e.towns;t.towns=a})},it=a("Xxa5"),rt=a.n(it),ot=a("exGp"),lt=a.n(ot),ct=a("fZjL"),dt=a.n(ct),ut=a("zC//"),mt=a.n(ut),gt=a("Zrlr"),ft=a.n(gt),vt=a("wxAW"),ht=a.n(vt),_t=function(){function t(){ft()(this,t)}return ht()(t,null,[{key:"getWoeMomentFromDate",value:function(t,e){return w()(t+" "+e,"YYYYMMDD HH:mm:ss")}}]),t}(),pt=(function(){function t(){ft()(this,t)}ht()(t,null,[{key:"castleNoSpace",value:function(t){return t.replace(" ","-")}}])}(),{state:{standings:{},timelogs:{}},getters:{standingsByDate:function(t,e,a,s){return function(e){if(!e){if(null===s.getLatestWoeTimeWithResult)return{};e=s.getLatestWoeTimeWithResult.date}if(0===dt()(a.castles.towns).length||!t.standings[e]||0===t.standings[e].length)return{};var n={};for(var i in a.castles.towns){var r=a.castles.towns[i];n[i]=r.map(function(a){var n=t.standings[e].find(function(t){return t.castle===a}),i=s.getLatestWoeTimeWithResult,r=s.nextWoeFromDate(e),o=w()(r.date).diff(w()(n.held_for,"DD-MM-YYYY"),"days");return 0===w()(e).diff(w()(i.date))&&(o=w()().diff(w()(n.held_for,"DD-MM-YYYY"),"days")),{name:a,inhabitants:s.getGuildByName(n.inhabitant),heldFor:o,breaks:n.breaks}})}return n}},timelogsByCastleAndDate:function(t,e,a,s){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments[1],n=[];if(""===e)return n;if("string"==typeof a&&(a=s.getWoeTimeByDate(a)),!a){if(null===s.getLatestWoeTimeWithResult)return n;a=s.getLatestWoeTimeWithResult}for(var i=_t.getWoeMomentFromDate(a.date,a.start),r=_t.getWoeMomentFromDate(a.date,a.end),o=0,l=i.clone().subtract(5,"m");l.diff(r.clone(),"minute")<=0;l.add(1,"minute")){var c=t.timelogs[a.date];if(c){var d=c.find(function(t){return t.castle===e&&l.format("HH:mm")===t.time});d?(n.push({time:l.format("LT"),inhabitant:s.getGuildByName(d.inhabitant),remarks:d.remarks,minutesHold:1}),o=n.length-1):0!==i.diff(l)&&n.length>0&&(n[o].minutesHold+=1)}}for(var u=0,m=0;m<n.length;m++)u+=n[m].minutesHold;for(m=0;m<n.length;m++)n[m].percentage=n[m].minutesHold/u*100;return n}}},actions:{getStandingsByDate:function(t,e){var a=this,s=t.commit,n=t.getters,i=t.dispatch;return lt()(rt.a.mark(function t(){return rt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=5;break}if(null!==n.getLatestWoeTimeWithResult){t.next=4;break}return t.next=4,i("getWoeTimes");case 4:e=n.getLatestWoeTimeWithResult.date;case 5:return t.abrupt("return",X.a.get("/static/woe-datas/snapshots/standings/"+e+".csv").then(function(t){mt()({noheader:!1,headers:["castle","inhabitant","breaks","held_for"],delimiter:",",trim:!1}).fromString(t.data).on("json",function(t){s(Q,{date:e,row:t})})}).catch(function(){s(Q,{date:e})}));case 6:case"end":return t.stop()}},t,a)}))()},getTimelogsByCastleAndDate:function(t,e){var a=this,s=t.commit,n=t.getters,i=t.dispatch,r=t.state,o=(e.castle,e.date);return lt()(rt.a.mark(function t(){return rt.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o){t.next=5;break}if(null!==n.getLatestWoeTimeWithResult){t.next=4;break}return t.next=4,i("getWoeTimes");case 4:o=n.getLatestWoeTimeWithResult.date;case 5:if(!r.timelogs[o]){t.next=7;break}return t.abrupt("return");case 7:return t.abrupt("return",X.a.get("/static/woe-datas/snapshots/timelogs/"+o+".csv").then(function(t){mt()({noheader:!1,headers:["time","castle","inhabitant","remarks"],delimiter:",",trim:!1}).fromString(t.data).on("json",function(t){s(tt,{date:o,row:t})})}));case 8:case"end":return t.stop()}},t,a)}))()}},mutations:(F={},V()(F,Q,function(t,e){var a=e.date,s=e.row;if(!Array.isArray(t.standings[a])){var n=V()({},a,[]);t.standings=f()({},t.standings,n)}s&&t.standings[a].push(s)}),V()(F,tt,function(t,e){var a=e.date,s=e.row;if(!Array.isArray(t.timelogs[a])){var n=V()({},a,[]);t.timelogs=f()({},t.timelogs,n)}s&&t.timelogs[a].push(s)}),F)}),bt={dates:[]},Ct={nextWoeFromDate:function(t,e){return function(e){var a=[].concat(st()(t.dates));if(0===a.length)return null;var s=a.sort(function(t,e){return e.date-t.date}).filter(function(t){return w()(t.date).isAfter(w()(e))});return 0===s.length?null:s[s.length-1]}},formattedWoeTimesWithResult:function(t){var e=[].concat(st()(t.dates));if(0===e.length)return[];var a=e.sort(function(t,e){return e.date-t.date}).filter(function(t){return w()(t.date).isBefore(w()().startOf("day"))&&!0===t.hasResult});return 0===a.length?[]:a.sort(function(t,e){return w()(e.date).diff(w()(t.date))}).map(function(t){return w()(t.date).format("D MMMM YYYY")})},getLatestWoeTimeWithResult:function(t){var e=[].concat(st()(t.dates));if(0===e.length)return null;var a=e.sort(function(t,e){return e.date-t.date}).filter(function(t){return w()(t.date).isBefore(w()().startOf("day"))&&!0===t.hasResult});return 0===a.length?null:a[0]},getLatestWoeTime:function(t){var e=[].concat(st()(t.dates));if(0===e.length)return null;var a=e.sort(function(t,e){return e.date-t.date}).filter(function(t){return w()(t.date).isBefore(w()().startOf("day"))});return 0===a.length?null:a[0]},getNextWoeTime:function(){var t=[].concat(st()(bt.dates));if(0===t.length)return null;var e=w()(),a=t.sort(function(t,e){return t.date-e.date}).filter(function(t){return wt(t.date,t.start).isAfter(e)});return 0===a.length?null:a[0]},getCurrentWoeTime:function(){var t=w()(),e=[].concat(st()(bt.dates));return 0===e.length?null:e.find(function(e){var a=wt(e.date,e.start),s=wt(e.date,e.end);return t.isBetween(a,s)})},getCountdownItem:function(t,e){var a=w()();if(e.getCurrentWoeTime){var s=e.getCurrentWoeTime,n=wt(s.date,s.end);return{type:"current",duration:Math.ceil(w.a.duration(n.diff(a))),date:w()(s.date).format("D MMM YYYY"),start:w()(s.start,"HH:mm:ss").format("LT"),end:w()(s.end,"HH:mm:ss").format("LT")}}if(e.getNextWoeTime){var i=e.getNextWoeTime,r=wt(i.date,i.start);return{type:"upcoming",duration:Math.ceil(w.a.duration(r.diff(a))),date:w()(i.date).format("D MMM YYYY"),start:w()(i.start,"HH:mm:ss").format("LT"),end:w()(i.end,"HH:mm:ss").format("LT")}}},getWoeTimeByDate:function(t){return function(e){return t.dates.find(function(t){return 0===w()(t.date).diff(w()(e))})}}},yt={refreshTimes:function(t){var e=t.commit,a=t.dispatch;e(Z,{dates:[]}),a("getWoeTimes")},getWoeTimes:function(t){var e=t.commit;return X.a.get("/static/woe-datas/woe-times.json").then(function(t){e(Z,{dates:t.data})})}},jt=V()({},Z,function(t,e){var a=e.dates;t.dates=a}),wt=function(t,e){return w()(t+" "+e,"YYYYMMDD HH:mm:ss")},Dt={state:bt,getters:Ct,actions:yt,mutations:jt};r.a.use(v.a);var Tt=new v.a.Store({actions:s,modules:{guild:et,castles:nt,standings:pt,woe:Dt},strict:!1,plugins:[]});window.$=window.jQuery=i.a,r.a.use(d.a,{id:"UA-40418823-4",router:I}),r.a.use(m.a),r.a.component("countdown",l.a),r.a.config.productionTip=!0,r.a.filter("capitalize",function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}),new r.a({el:"#app",router:I,store:Tt,components:{App:C},template:"<App/>"})},NP2u:function(t,e){},bni6:function(t,e){},d1ra:function(t,e){},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return a(i(t))}function i(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="uslO"},wW5R:function(t,e){},yCnA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.29493edf58281a3cf33f.js.map