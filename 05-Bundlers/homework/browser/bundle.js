(()=>{var t={89:(t,e,s)=>{"use strict";function n(){this.subscribers={}}s.d(e,{Z:()=>i}),n.prototype.on=function(t,e){this.subscribers[t]||(this.subscribers[t]=[]),this.subscribers[t].push(e)},n.prototype.emit=function(t){if(this.subscribers[t]){var e=[].slice.call(arguments,1);this.subscribers[t].forEach((function(t){t.apply(null,e)}))}},t=s.hmd(t);var r=new n;const i=r;var o;[].slice.call(document.querySelectorAll(".marker")).forEach((function(t){t.style.backgroundColor=t.id,t.addEventListener("click",(function(){o=this.id,document.querySelector(".selected").classList.remove("selected"),this.classList.add("selected")}))}));var a=document.getElementById("paint"),c=a.getContext("2d");function h(){c.setTransform(1,0,0,1,0,0);var t=window.devicePixelRatio||1,e=a.clientWidth*t,s=a.clientHeight*t;if(e!==a.width||s!==a.height){var n=c.getImageData(0,0,a.width,a.height);a.width=e,a.height=s,c.putImageData(n,0,0)}c.scale(t,t),c.lineWidth=5,c.lineJoin="round",c.lineCap="round"}h(),window.addEventListener("resize",h);var p={x:0,y:0},u={x:0,y:0},d=!1;a.addEventListener("mousedown",(function(t){d=!0,p.x=t.pageX-this.offsetLeft,p.y=t.pageY-this.offsetTop})),a.addEventListener("mouseup",(function(){d=!1})),a.addEventListener("mousemove",(function(t){d&&(u.x=p.x,u.y=p.y,p.x=t.pageX-this.offsetLeft,p.y=t.pageY-this.offsetTop,r.draw(u,p,o,!0))})),r.draw=function(t,e,s,n){c.beginPath(),c.strokeStyle=s||"black",c.moveTo(t.x,t.y),c.lineTo(e.x,e.y),c.closePath(),c.stroke(),n&&r.emit("draw",t,e,s)},t.exports=r},63:(t,e)=>{function s(t){if(t)return function(t){for(var e in s.prototype)t[e]=s.prototype[e];return t}(t)}e.Q=s,s.prototype.on=s.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},s.prototype.once=function(t,e){function s(){this.off(t,s),e.apply(this,arguments)}return s.fn=e,this.on(t,s),this},s.prototype.off=s.prototype.removeListener=s.prototype.removeAllListeners=s.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s,n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r=0;r<n.length;r++)if((s=n[r])===e||s.fn===e){n.splice(r,1);break}return 0===n.length&&delete this._callbacks["$"+t],this},s.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),s=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(s){n=0;for(var r=(s=s.slice(0)).length;n<r;++n)s[n].apply(this,e)}return this},s.prototype.emitReserved=s.prototype.emit,s.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},s.prototype.hasListeners=function(t){return!!this.listeners(t).length}},10:t=>{function e(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=e,e.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),s=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-s:t+s}return 0|Math.min(t,this.max)},e.prototype.reset=function(){this.attempts=0},e.prototype.setMin=function(t){this.ms=t},e.prototype.setMax=function(t){this.max=t},e.prototype.setJitter=function(t){this.jitter=t}},58:t=>{try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(e){t.exports=!1}},830:(t,e)=>{e.encode=function(t){var e="";for(var s in t)t.hasOwnProperty(s)&&(e.length&&(e+="&"),e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return e},e.decode=function(t){for(var e={},s=t.split("&"),n=0,r=s.length;n<r;n++){var i=s[n].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},187:t=>{var e=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,s=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var n,r,i=t,o=t.indexOf("["),a=t.indexOf("]");-1!=o&&-1!=a&&(t=t.substring(0,o)+t.substring(o,a).replace(/:/g,";")+t.substring(a,t.length));for(var c,h,p=e.exec(t||""),u={},d=14;d--;)u[s[d]]=p[d]||"";return-1!=o&&-1!=a&&(u.source=i,u.host=u.host.substring(1,u.host.length-1).replace(/;/g,":"),u.authority=u.authority.replace("[","").replace("]","").replace(/;/g,":"),u.ipv6uri=!0),u.pathNames=(n=u.path,r=n.replace(/\/{2,9}/g,"/").split("/"),"/"!=n.substr(0,1)&&0!==n.length||r.splice(0,1),"/"==n.substr(n.length-1,1)&&r.splice(r.length-1,1),r),u.queryKey=(c=u.query,h={},c.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,s){e&&(h[e]=s)})),h),u}},281:t=>{"use strict";var e,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),n={},r=0,i=0;function o(t){var e="";do{e=s[t%64]+e,t=Math.floor(t/64)}while(t>0);return e}function a(){var t=o(+new Date);return t!==e?(r=0,e=t):t+"."+o(r++)}for(;i<64;i++)n[s[i]]=i;a.encode=o,a.decode=function(t){var e=0;for(i=0;i<t.length;i++)e=64*e+n[t.charAt(i)];return e},t.exports=a}},e={};function s(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n](i,i.exports,s),i.loaded=!0,i.exports}s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t={};s.r(t),s.d(t,{Decoder:()=>tt,Encoder:()=>G,PacketType:()=>Z,protocol:()=>Q});var e=s(89),n=s(187),r=s(58);const i="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function o(t){const e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(t){}if(!e)try{return new(i[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}function a(t,...e){return e.reduce(((e,s)=>(t.hasOwnProperty(s)&&(e[s]=t[s]),e)),{})}const c=setTimeout,h=clearTimeout;function p(t,e){e.useNativeTimers?(t.setTimeoutFn=c.bind(i),t.clearTimeoutFn=h.bind(i)):(t.setTimeoutFn=setTimeout.bind(i),t.clearTimeoutFn=clearTimeout.bind(i))}var u=s(63);const d=Object.create(null);d.open="0",d.close="1",d.ping="2",d.pong="3",d.message="4",d.upgrade="5",d.noop="6";const l=Object.create(null);Object.keys(d).forEach((t=>{l[d[t]]=t}));const f={type:"error",data:"parser error"},y="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),m="function"==typeof ArrayBuffer,g=(t,e)=>{const s=new FileReader;return s.onload=function(){const t=s.result.split(",")[1];e("b"+t)},s.readAsDataURL(t)},b=({type:t,data:e},s,n)=>{return y&&e instanceof Blob?s?n(e):g(e,n):m&&(e instanceof ArrayBuffer||(r=e,"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(r):r&&r.buffer instanceof ArrayBuffer))?s?n(e):g(new Blob([e]),n):n(d[t]+(e||""));var r};for(var v="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",w="undefined"==typeof Uint8Array?[]:new Uint8Array(256),k=0;k<v.length;k++)w[v.charCodeAt(k)]=k;const E="function"==typeof ArrayBuffer,_=(t,e)=>{if(E){const s=function(t){var e,s,n,r,i,o=.75*t.length,a=t.length,c=0;"="===t[t.length-1]&&(o--,"="===t[t.length-2]&&o--);var h=new ArrayBuffer(o),p=new Uint8Array(h);for(e=0;e<a;e+=4)s=w[t.charCodeAt(e)],n=w[t.charCodeAt(e+1)],r=w[t.charCodeAt(e+2)],i=w[t.charCodeAt(e+3)],p[c++]=s<<2|n>>4,p[c++]=(15&n)<<4|r>>2,p[c++]=(3&r)<<6|63&i;return h}(t);return A(s,e)}return{base64:!0,data:t}},A=(t,e)=>"blob"===e&&t instanceof ArrayBuffer?new Blob([t]):t,T=(t,e)=>{if("string"!=typeof t)return{type:"message",data:A(t,e)};const s=t.charAt(0);return"b"===s?{type:"message",data:_(t.substring(1),e)}:l[s]?t.length>1?{type:l[s],data:t.substring(1)}:{type:l[s]}:f},x=String.fromCharCode(30);class C extends u.Q{constructor(t){super(),this.writable=!1,p(this,t),this.opts=t,this.query=t.query,this.readyState="",this.socket=t.socket}onError(t,e){const s=new Error(t);return s.type="TransportError",s.description=e,super.emit("error",s),this}open(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(t){"open"===this.readyState&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emit("open")}onData(t){const e=T(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emit("packet",t)}onClose(){this.readyState="closed",super.emit("close")}}var R=s(281),O=s(830);class S extends C{constructor(){super(...arguments),this.polling=!1}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let t=0;this.polling&&(t++,this.once("pollComplete",(function(){--t||e()}))),this.writable||(t++,this.once("drain",(function(){--t||e()})))}else e()}poll(){this.polling=!0,this.doPoll(),this.emit("poll")}onData(t){((t,e)=>{const s=t.split(x),n=[];for(let t=0;t<s.length;t++){const r=T(s[t],e);if(n.push(r),"error"===r.type)break}return n})(t,this.socket.binaryType).forEach((t=>{if("opening"===this.readyState&&"open"===t.type&&this.onOpen(),"close"===t.type)return this.onClose(),!1;this.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};"open"===this.readyState?t():this.once("open",t)}write(t){this.writable=!1,((t,e)=>{const s=t.length,n=new Array(s);let r=0;t.forEach(((t,i)=>{b(t,!1,(t=>{n[i]=t,++r===s&&e(n.join(x))}))}))})(t,(t=>{this.doWrite(t,(()=>{this.writable=!0,this.emit("drain")}))}))}uri(){let t=this.query||{};const e=this.opts.secure?"https":"http";let s="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=R()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port);const n=O.encode(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(n.length?"?"+n:"")}}function B(){}const N=null!=new o({xdomain:!1}).responseType;class L extends u.Q{constructor(t,e){super(),p(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.create()}create(){const t=a(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;const e=this.xhr=new o(t);try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(let t in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(t)&&e.setRequestHeader(t,this.opts.extraHeaders[t])}}catch(t){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=()=>{4===e.readyState&&(200===e.status||1223===e.status?this.onLoad():this.setTimeoutFn((()=>{this.onError("number"==typeof e.status?e.status:0)}),0))},e.send(this.data)}catch(t){return void this.setTimeoutFn((()=>{this.onError(t)}),0)}"undefined"!=typeof document&&(this.index=L.requestsCount++,L.requests[this.index]=this)}onSuccess(){this.emit("success"),this.cleanup()}onData(t){this.emit("data",t),this.onSuccess()}onError(t){this.emit("error",t),this.cleanup(!0)}cleanup(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=B,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete L.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;null!==t&&this.onData(t)}abort(){this.cleanup()}}function P(){for(let t in L.requests)L.requests.hasOwnProperty(t)&&L.requests[t].abort()}L.requestsCount=0,L.requests={},"undefined"!=typeof document&&("function"==typeof attachEvent?attachEvent("onunload",P):"function"==typeof addEventListener&&addEventListener("onpagehide"in i?"pagehide":"unload",P,!1));const j="function"==typeof Promise&&"function"==typeof Promise.resolve?t=>Promise.resolve().then(t):(t,e)=>e(t,0),q=i.WebSocket||i.MozWebSocket,D="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class I extends C{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,s=D?{}:a(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=D?new q(t,e,s):e?new q(t,e):new q(t)}catch(t){return this.emit("error",t)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const s=t[e],n=e===t.length-1;b(s,this.supportsBinary,(t=>{try{this.ws.send(t)}catch(t){}n&&j((()=>{this.writable=!0,this.emit("drain")}),this.setTimeoutFn)}))}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{};const e=this.opts.secure?"wss":"ws";let s="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=R()),this.supportsBinary||(t.b64=1);const n=O.encode(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(n.length?"?"+n:"")}check(){return!(!q||"__initialize"in q&&this.name===I.prototype.name)}}const M={websocket:I,polling:class extends S{constructor(t){if(super(t),"undefined"!=typeof location){const e="https:"===location.protocol;let s=location.port;s||(s=e?"443":"80"),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||s!==t.port,this.xs=t.secure!==e}const e=t&&t.forceBase64;this.supportsBinary=N&&!e}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new L(this.uri(),t)}doWrite(t,e){const s=this.request({method:"POST",data:t});s.on("success",e),s.on("error",(t=>{this.onError("xhr post error",t)}))}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(t=>{this.onError("xhr poll error",t)})),this.pollXhr=t}}};class F extends u.Q{constructor(t,e={}){super(),t&&"object"==typeof t&&(e=t,t=null),t?(t=n(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=n(e.host).host),p(this,e),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},e),this.opts.path=this.opts.path.replace(/\/$/,"")+"/","string"==typeof this.opts.query&&(this.opts.query=O.decode(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",(()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())}),!1),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close")},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=function(t){const e={};for(let s in t)t.hasOwnProperty(s)&&(e[s]=t[s]);return e}(this.opts.query);e.EIO=4,e.transport=t,this.id&&(e.sid=this.id);const s=Object.assign({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new M[t](s)}open(){let t;if(this.opts.rememberUpgrade&&F.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(()=>{this.onClose("transport close")}))}probe(t){let e=this.createTransport(t),s=!1;F.priorWebsocketSuccess=!1;const n=()=>{s||(e.send([{type:"ping",data:"probe"}]),e.once("packet",(t=>{if(!s)if("pong"===t.type&&"probe"===t.data){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;F.priorWebsocketSuccess="websocket"===e.name,this.transport.pause((()=>{s||"closed"!==this.readyState&&(h(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())}))}else{const t=new Error("probe error");t.transport=e.name,this.emitReserved("upgradeError",t)}})))};function r(){s||(s=!0,h(),e.close(),e=null)}const i=t=>{const s=new Error("probe error: "+t);s.transport=e.name,r(),this.emitReserved("upgradeError",s)};function o(){i("transport closed")}function a(){i("socket closed")}function c(t){e&&t.name!==e.name&&r()}const h=()=>{e.removeListener("open",n),e.removeListener("error",i),e.removeListener("close",o),this.off("close",a),this.off("upgrading",c)};e.once("open",n),e.once("error",i),e.once("close",o),this.once("close",a),this.once("upgrading",c),e.open()}onOpen(){if(this.readyState="open",F.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause){let t=0;const e=this.upgrades.length;for(;t<e;t++)this.probe(this.upgrades[t])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((()=>{this.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emitReserved("flush"))}write(t,e,s){return this.sendPacket("message",t,e,s),this}send(t,e,s){return this.sendPacket("message",t,e,s),this}sendPacket(t,e,s,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof s&&(n=s,s=null),"closing"===this.readyState||"closed"===this.readyState)return;(s=s||{}).compress=!1!==s.compress;const r={type:t,data:e,options:s};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),n&&this.once("flush",n),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},s=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?s():t()})):this.upgrading?s():t()),this}onError(t){F.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let s=0;const n=t.length;for(;s<n;s++)~this.transports.indexOf(t[s])&&e.push(t[s]);return e}}F.protocol=4,F.protocol;const U="function"==typeof ArrayBuffer,V=Object.prototype.toString,H="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===V.call(Blob),Y="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===V.call(File);function K(t){return U&&(t instanceof ArrayBuffer||(t=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer)(t))||H&&t instanceof Blob||Y&&t instanceof File}function z(t,e){if(!t||"object"!=typeof t)return!1;if(Array.isArray(t)){for(let e=0,s=t.length;e<s;e++)if(z(t[e]))return!0;return!1}if(K(t))return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return z(t.toJSON(),!0);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&z(t[e]))return!0;return!1}function W(t){const e=[],s=t.data,n=t;return n.data=J(s,e),n.attachments=e.length,{packet:n,buffers:e}}function J(t,e){if(!t)return t;if(K(t)){const s={_placeholder:!0,num:e.length};return e.push(t),s}if(Array.isArray(t)){const s=new Array(t.length);for(let n=0;n<t.length;n++)s[n]=J(t[n],e);return s}if("object"==typeof t&&!(t instanceof Date)){const s={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=J(t[n],e));return s}return t}function X(t,e){return t.data=$(t.data,e),t.attachments=void 0,t}function $(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(Array.isArray(t))for(let s=0;s<t.length;s++)t[s]=$(t[s],e);else if("object"==typeof t)for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(t[s]=$(t[s],e));return t}const Q=5;var Z;!function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(Z||(Z={}));class G{encode(t){return t.type!==Z.EVENT&&t.type!==Z.ACK||!z(t)?[this.encodeAsString(t)]:(t.type=t.type===Z.EVENT?Z.BINARY_EVENT:Z.BINARY_ACK,this.encodeAsBinary(t))}encodeAsString(t){let e=""+t.type;return t.type!==Z.BINARY_EVENT&&t.type!==Z.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data)),e}encodeAsBinary(t){const e=W(t),s=this.encodeAsString(e.packet),n=e.buffers;return n.unshift(s),n}}class tt extends u.Q{constructor(){super()}add(t){let e;if("string"==typeof t)e=this.decodeString(t),e.type===Z.BINARY_EVENT||e.type===Z.BINARY_ACK?(this.reconstructor=new et(e),0===e.attachments&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e);else{if(!K(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e))}}decodeString(t){let e=0;const s={type:Number(t.charAt(0))};if(void 0===Z[s.type])throw new Error("unknown packet type "+s.type);if(s.type===Z.BINARY_EVENT||s.type===Z.BINARY_ACK){const n=e+1;for(;"-"!==t.charAt(++e)&&e!=t.length;);const r=t.substring(n,e);if(r!=Number(r)||"-"!==t.charAt(e))throw new Error("Illegal attachments");s.attachments=Number(r)}if("/"===t.charAt(e+1)){const n=e+1;for(;++e&&","!==t.charAt(e)&&e!==t.length;);s.nsp=t.substring(n,e)}else s.nsp="/";const n=t.charAt(e+1);if(""!==n&&Number(n)==n){const n=e+1;for(;++e;){const s=t.charAt(e);if(null==s||Number(s)!=s){--e;break}if(e===t.length)break}s.id=Number(t.substring(n,e+1))}if(t.charAt(++e)){const n=function(t){try{return JSON.parse(t)}catch(t){return!1}}(t.substr(e));if(!tt.isPayloadValid(s.type,n))throw new Error("invalid payload");s.data=n}return s}static isPayloadValid(t,e){switch(t){case Z.CONNECT:return"object"==typeof e;case Z.DISCONNECT:return void 0===e;case Z.CONNECT_ERROR:return"string"==typeof e||"object"==typeof e;case Z.EVENT:case Z.BINARY_EVENT:return Array.isArray(e)&&e.length>0;case Z.ACK:case Z.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class et{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const t=X(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function st(t,e,s){return t.on(e,s),function(){t.off(e,s)}}const nt=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class rt extends u.Q{constructor(t,e,s){super(),this.connected=!1,this.disconnected=!0,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,s&&s.auth&&(this.auth=s.auth),this.io._autoConnect&&this.open()}subEvents(){if(this.subs)return;const t=this.io;this.subs=[st(t,"open",this.onopen.bind(this)),st(t,"packet",this.onpacket.bind(this)),st(t,"error",this.onerror.bind(this)),st(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(nt.hasOwnProperty(t))throw new Error('"'+t+'" is a reserved event name');e.unshift(t);const s={type:Z.EVENT,data:e,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"==typeof e[e.length-1]){const t=this.ids++,n=e.pop();this._registerAckCallback(t,n),s.id=t}const n=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!n||!this.connected)||(this.connected?this.packet(s):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(t,e){const s=this.flags.timeout;if(void 0===s)return void(this.acks[t]=e);const n=this.io.setTimeoutFn((()=>{delete this.acks[t];for(let e=0;e<this.sendBuffer.length;e++)this.sendBuffer[e].id===t&&this.sendBuffer.splice(e,1);e.call(this,new Error("operation has timed out"))}),s);this.acks[t]=(...t)=>{this.io.clearTimeoutFn(n),e.apply(this,[null,...t])}}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){"function"==typeof this.auth?this.auth((t=>{this.packet({type:Z.CONNECT,data:t})})):this.packet({type:Z.CONNECT,data:this.auth})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t){this.connected=!1,this.disconnected=!0,delete this.id,this.emitReserved("disconnect",t)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case Z.CONNECT:if(t.data&&t.data.sid){const e=t.data.sid;this.onconnect(e)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case Z.EVENT:case Z.BINARY_EVENT:this.onevent(t);break;case Z.ACK:case Z.BINARY_ACK:this.onack(t);break;case Z.DISCONNECT:this.ondisconnect();break;case Z.CONNECT_ERROR:this.destroy();const e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e)}}onevent(t){const e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const s of e)s.apply(this,t)}super.emit.apply(this,t)}ack(t){const e=this;let s=!1;return function(...n){s||(s=!0,e.packet({type:Z.ACK,id:t,data:n}))}}onack(t){const e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t){this.id=t,this.connected=!0,this.disconnected=!1,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach((t=>this.emitEvent(t))),this.receiveBuffer=[],this.sendBuffer.forEach((t=>this.packet(t))),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((t=>t())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:Z.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let s=0;s<e.length;s++)if(t===e[s])return e.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}}var it=s(10);class ot extends u.Q{constructor(e,s){var n;super(),this.nsps={},this.subs=[],e&&"object"==typeof e&&(s=e,e=void 0),(s=s||{}).path=s.path||"/socket.io",this.opts=s,p(this,s),this.reconnection(!1!==s.reconnection),this.reconnectionAttempts(s.reconnectionAttempts||1/0),this.reconnectionDelay(s.reconnectionDelay||1e3),this.reconnectionDelayMax(s.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(n=s.randomizationFactor)&&void 0!==n?n:.5),this.backoff=new it({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==s.timeout?2e4:s.timeout),this._readyState="closed",this.uri=e;const r=s.parser||t;this.encoder=new r.Encoder,this.decoder=new r.Decoder,this._autoConnect=!1!==s.autoConnect,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}randomizationFactor(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new F(this.uri,this.opts);const e=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const n=st(e,"open",(function(){s.onopen(),t&&t()})),r=st(e,"error",(e=>{s.cleanup(),s._readyState="closed",this.emitReserved("error",e),t?t(e):s.maybeReconnectOnOpen()}));if(!1!==this._timeout){const t=this._timeout;0===t&&n();const s=this.setTimeoutFn((()=>{n(),e.close(),e.emit("error",new Error("timeout"))}),t);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}return this.subs.push(n),this.subs.push(r),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(st(t,"ping",this.onping.bind(this)),st(t,"data",this.ondata.bind(this)),st(t,"error",this.onerror.bind(this)),st(t,"close",this.onclose.bind(this)),st(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){this.decoder.add(t)}ondecoded(t){this.emitReserved("packet",t)}onerror(t){this.emitReserved("error",t)}socket(t,e){let s=this.nsps[t];return s||(s=new rt(this,t,e),this.nsps[t]=s),s}_destroy(t){const e=Object.keys(this.nsps);for(const t of e)if(this.nsps[t].active)return;this._close()}_packet(t){const e=this.encoder.encode(t);for(let s=0;s<e.length;s++)this.engine.write(e[s],t.options)}cleanup(){this.subs.forEach((t=>t())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn((()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),t.skipReconnect||t.open((e=>{e?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",e)):t.onreconnect()})))}),e);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const at={};function ct(t,e){"object"==typeof t&&(e=t,t=void 0);const s=function(t,e="",s){let r=t;s=s||"undefined"!=typeof location&&location,null==t&&(t=s.protocol+"//"+s.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?s.protocol+t:s.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==s?s.protocol+"//"+t:"https://"+t),r=n(t)),r.port||(/^(http|ws)$/.test(r.protocol)?r.port="80":/^(http|ws)s$/.test(r.protocol)&&(r.port="443")),r.path=r.path||"/";const i=-1!==r.host.indexOf(":")?"["+r.host+"]":r.host;return r.id=r.protocol+"://"+i+":"+r.port+e,r.href=r.protocol+"://"+i+(s&&s.port===r.port?"":":"+r.port),r}(t,(e=e||{}).path||"/socket.io"),r=s.source,i=s.id,o=s.path,a=at[i]&&o in at[i].nsps;let c;return e.forceNew||e["force new connection"]||!1===e.multiplex||a?c=new ot(r,e):(at[i]||(at[i]=new ot(r,e)),c=at[i]),s.query&&!e.query&&(e.query=s.queryKey),c.socket(s.path,e)}Object.assign(ct,{Manager:ot,Socket:rt,io:ct,connect:ct});var ht=ct();ht.on("connect",(function(){console.log("Connected!")})),ht.on("load",(function(t){t.forEach((function(t){var s=t.start,n=t.end,r=t.color;e.Z.draw(s,n,r,!1)}))})),ht.on("draw",(function(t,s,n){e.Z.draw(t,s,n,!1)})),e.Z.on("draw",(function(t,e,s){ht.emit("draw",t,e,s)}))})()})();