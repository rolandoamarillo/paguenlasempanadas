(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3646:function(a,e,r){var i=r(7228);a.exports=function(a){if(Array.isArray(a))return i(a)}},9713:function(a){a.exports=function(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}},6860:function(a){a.exports=function(a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}},8206:function(a){a.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(a,e,r){var i=r(3646),n=r(6860),t=r(379),o=r(8206);a.exports=function(a){return i(a)||n(a)||t(a)||o()}},3398:function(a,e,r){"use strict";var i;e.__esModule=!0,e.AmpStateContext=void 0;var n=((i=r(7294))&&i.__esModule?i:{default:i}).default.createContext({});e.AmpStateContext=n},6393:function(a,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=o,e.useAmp=function(){return o(n.default.useContext(t.AmpStateContext))};var i,n=(i=r(7294))&&i.__esModule?i:{default:i},t=r(3398);function o(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a.ampFirst,r=void 0!==e&&e,i=a.hybrid,n=void 0!==i&&i,t=a.hasQuery,o=void 0!==t&&t;return r||n&&o}},2775:function(a,e,r){"use strict";var i=r(9713);function n(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.push.apply(r,i)}return r}e.__esModule=!0,e.defaultHead=f,e.default=void 0;var t,o=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!==typeof a&&"function"!==typeof a)return{default:a};var e=A();if(e&&e.has(a))return e.get(a);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in a)if(Object.prototype.hasOwnProperty.call(a,n)){var t=i?Object.getOwnPropertyDescriptor(a,n):null;t&&(t.get||t.set)?Object.defineProperty(r,n,t):r[n]=a[n]}r.default=a,e&&e.set(a,r);return r}(r(7294)),c=(t=r(3244))&&t.__esModule?t:{default:t},u=r(3398),s=r(1165),l=r(6393);function A(){if("function"!==typeof WeakMap)return null;var a=new WeakMap;return A=function(){return a},a}function f(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return a||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function m(a,e){return"string"===typeof e||"number"===typeof e?a:e.type===o.default.Fragment?a.concat(o.default.Children.toArray(e.props.children).reduce((function(a,e){return"string"===typeof e||"number"===typeof e?a:a.concat(e)}),[])):a.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function p(a,e){return a.reduce((function(a,e){var r=o.default.Children.toArray(e.props.children);return a.concat(r)}),[]).reduce(m,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var a=new Set,e=new Set,r=new Set,i={};return function(n){var t=!0,o=!1;if(n.key&&"number"!==typeof n.key&&n.key.indexOf("$")>0){o=!0;var c=n.key.slice(n.key.indexOf("$")+1);a.has(c)?t=!1:a.add(c)}switch(n.type){case"title":case"base":e.has(n.type)?t=!1:e.add(n.type);break;case"meta":for(var u=0,s=d.length;u<s;u++){var l=d[u];if(n.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?t=!1:r.add(l);else{var A=n.props[l],f=i[l]||new Set;"name"===l&&o||!f.has(A)?(f.add(A),i[l]=f):t=!1}}}return t}}()).reverse().map((function(a,r){var t=a.key||r;if(!e.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(e){return a.props.href.startsWith(e)}))){var c=function(a){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(a,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(r,e))}))}return a}({},a.props||{});return c["data-href"]=c.href,c.href=void 0,c["data-optimized-fonts"]=!0,o.default.cloneElement(a,c)}return o.default.cloneElement(a,{key:t})}))}var h=function(a){var e=a.children,r=(0,o.useContext)(u.AmpStateContext),i=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(c.default,{reduceComponentsToState:p,headManager:i,inAmpMode:(0,l.isInAmpMode)(r)},e)};e.default=h},3244:function(a,e,r){"use strict";var i=r(319),n=r(4575),t=r(3913),o=(r(1506),r(2205)),c=r(8585),u=r(9754);function s(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var r,i=u(a);if(e){var n=u(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return c(this,r)}}e.__esModule=!0,e.default=void 0;var l=r(7294),A=function(a){o(r,a);var e=s(r);function r(a){var t;return n(this,r),(t=e.call(this,a))._hasHeadManager=void 0,t.emitChange=function(){t._hasHeadManager&&t.props.headManager.updateHead(t.props.reduceComponentsToState(i(t.props.headManager.mountedInstances),t.props))},t._hasHeadManager=t.props.headManager&&t.props.headManager.mountedInstances,t}return t(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);e.default=A},5983:function(a,e,r){"use strict";r.r(e),r.d(e,{default:function(){return N}});var i=r(7757),n=r.n(i);function t(a,e,r,i,n,t,o){try{var c=a[t](o),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(i,n)}var o=r(5893);function c(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function u(a,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function s(a,e,r){return e&&u(a.prototype,e),r&&u(a,r),a}function l(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function A(a,e){return(A=Object.setPrototypeOf||function(a,e){return a.__proto__=e,a})(a,e)}function f(a,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&A(a,e)}function m(a){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function d(a,e){return!e||"object"!==m(e)&&"function"!==typeof e?l(a):e}function p(a){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}var h=r(6156),y=r(7294),g=r(9008),v=function(){function a(e){c(this,a),this.timezone=e||a.DEFAULT_TIMEZONE}return s(a,[{key:"now",value:function(){var a=(new Date).toLocaleString("en-US",{timeZone:this.timezone});return new Date(a)}},{key:"isThursday",value:function(){return 4===this.now().getDay()}},{key:"isFriday",value:function(){return 5===this.now().getDay()}},{key:"is13th",value:function(){return 13===this.now().getDate()}},{key:"isAfternoon",value:function(){return this.now().getHours()>=16}},{key:"isThursdayAfternoon",value:function(){return this.isThursday()&&this.isAfternoon()}},{key:"isFridayAfternoon",value:function(){return this.isFriday()&&this.isAfternoon()}},{key:"isFriday13th",value:function(){return this.isFriday()&&this.is13th()}},{key:"isWeekend",value:function(){return 6===this.now().getDay()||0===this.now().getDay()}}],[{key:"zoneExists",value:function(a){try{return Intl.DateTimeFormat("en-US",{timeZone:a}).format(Date.now()),!0}catch(e){return!1}}},{key:"validOrNull",value:function(e){return e||(e=a.DEFAULT_TIMEZONE),this.zoneExists(e)?new a(e):null}}]),a}();(0,h.Z)(v,"DEFAULT_TIMEZONE","UTC");var M=["Andr\xe9s del R\xedo","Juan Carlos Camacho","Juan Hernandez","Julian Betancourt","Luis Hern\xe1ndez","Manuel Conde","Mauricio Rodriguez","Michael Agudelo","Miller Barrera","Nathalia Ramirez","Victor Parodi"],E=["Andr\xe9s del R\xedo","Juan Carlos Camacho","Juan Hernandez","Julian Betancourt","Luis Hern\xe1ndez","Manuel Conde","Mauricio Rodriguez","Michael Agudelo","Miller Barrera","Nathalia Ramirez","Victor Parodi"],k=["Andr\xe9s del R\xedo","Juan Carlos Camacho","Juan Hernandez","Julian Betancourt","Luis Hern\xe1ndez","Manuel Conde","Mauricio Rodriguez","Michael Agudelo","Miller Barrera","Nathalia Ramirez","Victor Parodi"],P=["Andr\xe9s del R\xedo","Juan Carlos Camacho","Juan Hernandez","Julian Betancourt","Luis Hern\xe1ndez","Manuel Conde","Mauricio Rodriguez","Michael Agudelo","Miller Barrera","Nathalia Ramirez","Victor Parodi"],b=["Andr\xe9s del R\xedo","Juan Carlos Camacho","Juan Hernandez","Julian Betancourt","Luis Hern\xe1ndez","Manuel Conde","Mauricio Rodriguez","Michael Agudelo","Miller Barrera","Nathalia Ramirez","Victor Parodi"],C=["Andr\xe9s del R\xedo","Juan Carlos Camacho","Juan Hernandez","Julian Betancourt","Luis Hern\xe1ndez","Manuel Conde","Mauricio Rodriguez","Michael Agudelo","Miller Barrera","Nathalia Ramirez","Victor Parodi"],_=["Andr\xe9s del R\xedo","Juan Carlos Camacho","Juan Hernandez","Julian Betancourt","Luis Hern\xe1ndez","Manuel Conde","Mauricio Rodriguez","Michael Agudelo","Miller Barrera","Nathalia Ramirez","Victor Parodi"],S="https://shouldideploy.today",T=function(a){return a&&!a.isFriday()&&!a.isWeekend()},w=function(a){return T(a)?"".concat(S,"/yes.png"):"".concat(S,"/no.png")},z=function(a){return a[Math.floor(Math.random()*a.length)]};function R(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var r,i=p(a);if(e){var n=p(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return d(this,r)}}var B=function(a){f(r,a);var e=R(r);function r(a){var i;return c(this,r),i=e.call(this,a),(0,h.Z)(l(i),"onSpacePressOrClick",(function(a){if("click"===a.type||32==(null===a||void 0===a?void 0:a.keyCode)){var e=i.getReasons();i.setState({reason:z(e)})}})),i.state={timezone:i.props.now.timezone,reason:z(i.getReasons())},i}return s(r,[{key:"componentDidUpdate",value:function(a){a.now.timezone!==this.state.timezone&&this.setState({timezone:a.now.timezone,reason:z(this.getReasons())})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onSpacePressOrClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onSpacePressOrClick)}},{key:"getReasons",value:function(){return(a=(a=this.props.now)||new v).isFriday13th()?b:a.isFridayAfternoon()?P:a.isFriday()?E:a.isThursdayAfternoon()?k:a.isAfternoon()&&!a.isWeekend()?C:a.isWeekend()?_:M;var a}},{key:"render",value:function(){return(0,o.jsxs)("div",{className:"item",children:[(0,o.jsx)("h3",{className:"tagline",children:"Quien Paga las Empandas Hoy?"}),(0,o.jsx)("h2",{id:"text",children:this.state.reason}),(0,o.jsxs)("span",{id:"reload",onClick:this.onSpacePressOrClick,children:["Oprime ",(0,o.jsx)("span",{className:"space-btn",children:"Space"})," o Click"]})]})}}]),r}(y.Component),j=["Africa/Abidjan","Africa/Accra","Africa/Addis_Ababa","Africa/Algiers","Africa/Asmara","Africa/Asmera","Africa/Bamako","Africa/Bangui","Africa/Banjul","Africa/Bissau","Africa/Blantyre","Africa/Brazzaville","Africa/Bujumbura","Africa/Cairo","Africa/Casablanca","Africa/Ceuta","Africa/Conakry","Africa/Dakar","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Douala","Africa/El_Aaiun","Africa/Freetown","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Kigali","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Lome","Africa/Luanda","Africa/Lubumbashi","Africa/Lusaka","Africa/Malabo","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Africa/Mogadishu","Africa/Monrovia","Africa/Nairobi","Africa/Ndjamena","Africa/Niamey","Africa/Nouakchott","Africa/Ouagadougou","Africa/Porto-Novo","Africa/Sao_Tome","Africa/Timbuktu","Africa/Tripoli","Africa/Tunis","Africa/Windhoek","America/Adak","America/Anchorage","America/Anguilla","America/Antigua","America/Araguaina","America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/ComodRivadavia","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","America/Asuncion","America/Atikokan","America/Atka","America/Bahia","America/Bahia_Banderas","America/Barbados","America/Belem","America/Belize","America/Blanc-Sablon","America/Boa_Vista","America/Bogota","America/Boise","America/Buenos_Aires","America/Cambridge_Bay","America/Campo_Grande","America/Cancun","America/Caracas","America/Catamarca","America/Cayenne","America/Cayman","America/Chicago","America/Chihuahua","America/Coral_Harbour","America/Cordoba","America/Costa_Rica","America/Creston","America/Cuiaba","America/Curacao","America/Danmarkshavn","America/Dawson","America/Dawson_Creek","America/Denver","America/Detroit","America/Dominica","America/Edmonton","America/Eirunepe","America/El_Salvador","America/Ensenada","America/Fort_Nelson","America/Fort_Wayne","America/Fortaleza","America/Glace_Bay","America/Godthab","America/Goose_Bay","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guatemala","America/Guayaquil","America/Guyana","America/Halifax","America/Havana","America/Hermosillo","America/Indiana/Indianapolis","America/Indiana/Knox","America/Indiana/Marengo","America/Indiana/Petersburg","America/Indiana/Tell_City","America/Indiana/Vevay","America/Indiana/Vincennes","America/Indiana/Winamac","America/Indianapolis","America/Inuvik","America/Iqaluit","America/Jamaica","America/Jujuy","America/Juneau","America/Kentucky/Louisville","America/Kentucky/Monticello","America/Knox_IN","America/Kralendijk","America/La_Paz","America/Lima","America/Los_Angeles","America/Louisville","America/Lower_Princes","America/Maceio","America/Managua","America/Manaus","America/Marigot","America/Martinique","America/Matamoros","America/Mazatlan","America/Mendoza","America/Menominee","America/Merida","America/Metlakatla","America/Mexico_City","America/Miquelon","America/Moncton","America/Monterrey","America/Montevideo","America/Montreal","America/Montserrat","America/Nassau","America/New_York","America/Nipigon","America/Nome","America/Noronha","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Ojinaga","America/Panama","America/Pangnirtung","America/Paramaribo","America/Phoenix","America/Port-au-Prince","America/Port_of_Spain","America/Porto_Acre","America/Porto_Velho","America/Puerto_Rico","America/Punta_Arenas","America/Rainy_River","America/Rankin_Inlet","America/Recife","America/Regina","America/Resolute","America/Rio_Branco","America/Rosario","America/Santa_Isabel","America/Santarem","America/Santiago","America/Santo_Domingo","America/Sao_Paulo","America/Scoresbysund","America/Shiprock","America/Sitka","America/St_Barthelemy","America/St_Johns","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Swift_Current","America/Tegucigalpa","America/Thule","America/Thunder_Bay","America/Tijuana","America/Toronto","America/Tortola","America/Vancouver","America/Virgin","America/Whitehorse","America/Winnipeg","America/Yakutat","America/Yellowknife","Antarctica/Casey","Antarctica/Davis","Antarctica/DumontDUrville","Antarctica/Macquarie","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/South_Pole","Antarctica/Syowa","Antarctica/Troll","Antarctica/Vostok","Arctic/Longyearbyen","Asia/Aden","Asia/Almaty","Asia/Amman","Asia/Anadyr","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Ashkhabad","Asia/Atyrau","Asia/Baghdad","Asia/Bahrain","Asia/Baku","Asia/Bangkok","Asia/Barnaul","Asia/Beirut","Asia/Bishkek","Asia/Brunei","Asia/Calcutta","Asia/Chita","Asia/Choibalsan","Asia/Chongqing","Asia/Chungking","Asia/Colombo","Asia/Dacca","Asia/Damascus","Asia/Dhaka","Asia/Dili","Asia/Dubai","Asia/Dushanbe","Asia/Famagusta","Asia/Gaza","Asia/Harbin","Asia/Hebron","Asia/Ho_Chi_Minh","Asia/Hong_Kong","Asia/Hovd","Asia/Irkutsk","Asia/Istanbul","Asia/Jakarta","Asia/Jayapura","Asia/Jerusalem","Asia/Kabul","Asia/Kamchatka","Asia/Karachi","Asia/Kashgar","Asia/Kathmandu","Asia/Katmandu","Asia/Khandyga","Asia/Kolkata","Asia/Krasnoyarsk","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Kuwait","Asia/Macao","Asia/Macau","Asia/Magadan","Asia/Makassar","Asia/Manila","Asia/Muscat","Asia/Nicosia","Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk","Asia/Oral","Asia/Phnom_Penh","Asia/Pontianak","Asia/Pyongyang","Asia/Qatar","Asia/Qyzylorda","Asia/Rangoon","Asia/Riyadh","Asia/Saigon","Asia/Sakhalin","Asia/Samarkand","Asia/Seoul","Asia/Shanghai","Asia/Singapore","Asia/Srednekolymsk","Asia/Taipei","Asia/Tashkent","Asia/Tbilisi","Asia/Tehran","Asia/Tel_Aviv","Asia/Thimbu","Asia/Thimphu","Asia/Tokyo","Asia/Tomsk","Asia/Ujung_Pandang","Asia/Ulaanbaatar","Asia/Ulan_Bator","Asia/Urumqi","Asia/Ust-Nera","Asia/Vientiane","Asia/Vladivostok","Asia/Yakutsk","Asia/Yangon","Asia/Yekaterinburg","Asia/Yerevan","Atlantic/Azores","Atlantic/Bermuda","Atlantic/Canary","Atlantic/Cape_Verde","Atlantic/Faeroe","Atlantic/Faroe","Atlantic/Jan_Mayen","Atlantic/Madeira","Atlantic/Reykjavik","Atlantic/South_Georgia","Atlantic/St_Helena","Atlantic/Stanley","Australia/ACT","Australia/Adelaide","Australia/Brisbane","Australia/Broken_Hill","Australia/Canberra","Australia/Currie","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/LHI","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/NSW","Australia/North","Australia/Perth","Australia/Queensland","Australia/South","Australia/Sydney","Australia/Tasmania","Australia/Victoria","Australia/West","Australia/Yancowinna","Brazil/Acre","Brazil/DeNoronha","Brazil/East","Brazil/West","CET","CST6CDT","Canada/Atlantic","Canada/Central","Canada/Eastern","Canada/Mountain","Canada/Newfoundland","Canada/Pacific","Canada/Saskatchewan","Canada/Yukon","Chile/Continental","Chile/EasterIsland","Cuba","EET","EST","EST5EDT","Egypt","Eire","Etc/GMT","Etc/GMT+0","Etc/GMT+1","Etc/GMT+10","Etc/GMT+11","Etc/GMT+12","Etc/GMT+2","Etc/GMT+3","Etc/GMT+4","Etc/GMT+5","Etc/GMT+6","Etc/GMT+7","Etc/GMT+8","Etc/GMT+9","Etc/GMT-0","Etc/GMT-1","Etc/GMT-10","Etc/GMT-11","Etc/GMT-12","Etc/GMT-13","Etc/GMT-14","Etc/GMT-2","Etc/GMT-3","Etc/GMT-4","Etc/GMT-5","Etc/GMT-6","Etc/GMT-7","Etc/GMT-8","Etc/GMT-9","Etc/GMT0","Etc/Greenwich","Etc/UCT","Etc/UTC","Etc/Universal","Etc/Zulu","Europe/Amsterdam","Europe/Andorra","Europe/Astrakhan","Europe/Athens","Europe/Belfast","Europe/Belgrade","Europe/Berlin","Europe/Bratislava","Europe/Brussels","Europe/Bucharest","Europe/Budapest","Europe/Busingen","Europe/Chisinau","Europe/Copenhagen","Europe/Dublin","Europe/Gibraltar","Europe/Guernsey","Europe/Helsinki","Europe/Isle_of_Man","Europe/Istanbul","Europe/Jersey","Europe/Kaliningrad","Europe/Kiev","Europe/Kirov","Europe/Lisbon","Europe/Ljubljana","Europe/London","Europe/Luxembourg","Europe/Madrid","Europe/Malta","Europe/Mariehamn","Europe/Minsk","Europe/Monaco","Europe/Moscow","Europe/Nicosia","Europe/Oslo","Europe/Paris","Europe/Podgorica","Europe/Prague","Europe/Riga","Europe/Rome","Europe/Samara","Europe/San_Marino","Europe/Sarajevo","Europe/Saratov","Europe/Simferopol","Europe/Skopje","Europe/Sofia","Europe/Stockholm","Europe/Tallinn","Europe/Tirane","Europe/Tiraspol","Europe/Ulyanovsk","Europe/Uzhgorod","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Vilnius","Europe/Volgograd","Europe/Warsaw","Europe/Zagreb","Europe/Zaporozhye","Europe/Zurich","GB","GB-Eire","GMT","GMT+0","GMT-0","GMT0","Greenwich","HST","Hongkong","Iceland","Indian/Antananarivo","Indian/Chagos","Indian/Christmas","Indian/Cocos","Indian/Comoro","Indian/Kerguelen","Indian/Mahe","Indian/Maldives","Indian/Mauritius","Indian/Mayotte","Indian/Reunion","Iran","Israel","Jamaica","Japan","Kwajalein","Libya","MET","MST","MST7MDT","Mexico/BajaNorte","Mexico/BajaSur","Mexico/General","NZ","NZ-CHAT","Navajo","PRC","PST8PDT","Pacific/Apia","Pacific/Auckland","Pacific/Bougainville","Pacific/Chatham","Pacific/Chuuk","Pacific/Easter","Pacific/Efate","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Fiji","Pacific/Funafuti","Pacific/Galapagos","Pacific/Gambier","Pacific/Guadalcanal","Pacific/Guam","Pacific/Honolulu","Pacific/Johnston","Pacific/Kiritimati","Pacific/Kosrae","Pacific/Kwajalein","Pacific/Majuro","Pacific/Marquesas","Pacific/Midway","Pacific/Nauru","Pacific/Niue","Pacific/Norfolk","Pacific/Noumea","Pacific/Pago_Pago","Pacific/Palau","Pacific/Pitcairn","Pacific/Pohnpei","Pacific/Ponape","Pacific/Port_Moresby","Pacific/Rarotonga","Pacific/Saipan","Pacific/Samoa","Pacific/Tahiti","Pacific/Tarawa","Pacific/Tongatapu","Pacific/Truk","Pacific/Wake","Pacific/Wallis","Pacific/Yap","Poland","Portugal","ROC","ROK","Singapore","Turkey","UCT","US/Alaska","US/Aleutian","US/Arizona","US/Central","US/East-Indiana","US/Eastern","US/Hawaii","US/Indiana-Starke","US/Michigan","US/Mountain","US/Pacific","US/Pacific-New","US/Samoa","UTC","Universal","W-SU","WET","Zulu"];function D(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var r,i=p(a);if(e){var n=p(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return d(this,r)}}y.Component;var G=function(a){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("ul",{className:"footer-list",children:(0,o.jsx)("li",{children:"#PaguenleLasEmpanadasARafa"})})})},O=r(1163);function x(a){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var r,i=p(a);if(e){var n=p(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return d(this,r)}}var N=function(a){f(r,a);var e=x(r);function r(a){var i;c(this,r),i=e.call(this,a),(0,h.Z)(l(i),"changeTimeZone",(function(a){if(v.zoneExists(i.props.timezone)){var e=new URL(location);e.searchParams.set("tz",a),O.default.push(e.pathname+e.search),i.setState({timezone:a,now:new v(a)})}}));var n=!1;return v.zoneExists(i.props.timezone)||(n=!0),i.state={timezone:n?"UTC":i.props.timezone,now:new v(n?"UTC":i.props.timezone)},i}return s(r,[{key:"render",value:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(g.default,{children:[(0,o.jsx)("link",{rel:"icon",type:"image/png",href:(a=this.state.now,T(a)?"".concat(S,"/dots.png"):"".concat(S,"/dots-red.png")),sizes:"32x32"}),(0,o.jsx)("meta",{property:"og:image",content:w(this.state.now)}),(0,o.jsx)("title",{children:"Quien Paga las Empanadas Hoy?"})]}),(0,o.jsxs)("div",{className:"wrapper ".concat(!T(this.state.now)&&"its-friday"),children:[(0,o.jsx)(B,{now:this.state.now}),(0,o.jsx)("div",{className:"meta",children:(0,o.jsx)(G,{timezone:this.state.timezone,changeTimeZone:this.changeTimeZone})})]})]});var a}}],[{key:"getInitialProps",value:function(){var a,e=(a=n().mark((function a(e){var r;return n().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.query.tz||"UTC",a.abrupt("return",{timezone:r});case 2:case"end":return a.stop()}}),a)})),function(){var e=this,r=arguments;return new Promise((function(i,n){var o=a.apply(e,r);function c(a){t(o,i,n,c,u,"next",a)}function u(a){t(o,i,n,c,u,"throw",a)}c(void 0)}))});return function(a){return e.apply(this,arguments)}}()}]),r}(y.Component)},8581:function(a,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5983)}])},9008:function(a,e,r){a.exports=r(2775)},1163:function(a,e,r){a.exports=r(4651)}},function(a){a.O(0,[774,888,179],(function(){return e=8581,a(a.s=e);var e}));var e=a.O();_N_E=e}]);