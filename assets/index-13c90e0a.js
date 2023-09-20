var Ve=Object.defineProperty;var Ge=(t,e,n)=>e in t?Ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fe=(t,e,n)=>(Ge(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function N(){}function Ze(t,e){for(const n in e)t[n]=e[n];return t}function Xe(t){return t()}function Pe(){return Object.create(null)}function q(t){t.forEach(Xe)}function ae(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Qe(t){return Object.keys(t).length===0}function me(t,...e){if(t==null){for(const s of e)s(void 0);return N}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function se(t,e,n){t.$$.on_destroy.push(me(e,n))}function ge(t,e,n,s){if(t){const l=He(t,e,n,s);return t[0](l)}}function He(t,e,n,s){return t[1]&&s?Ze(n.ctx.slice(),t[1](s(e))):n.ctx}function _e(t,e,n,s){if(t[2]&&s){const l=t[2](s(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const i=[],r=Math.max(e.dirty.length,l.length);for(let u=0;u<r;u+=1)i[u]=e.dirty[u]|l[u];return i}return e.dirty|l}return e.dirty}function ke(t,e,n,s,l,i){if(l){const r=He(e,n,s,i);t.p(r,l)}}function be(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function xe(t){return t&&ae(t.destroy)?t.destroy:N}const et=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function h(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function $e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function M(){return W(" ")}function ne(){return W("")}function A(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ze(t){return function(e){return e.preventDefault(),t.call(this,e)}}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tt(t){return Array.from(t.childNodes)}function V(t,e){e=""+e,t.data!==e&&(t.data=e)}function ve(t,e){t.value=e??""}function re(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function X(t,e,n){t.classList.toggle(e,!!n)}let we;function le(t){we=t}function nt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const x=[],ue=[];let ee=[];const Oe=[],st=Promise.resolve();let pe=!1;function lt(){pe||(pe=!0,st.then(Je))}function he(t){ee.push(t)}const de=new Set;let Z=0;function Je(){if(Z!==0)return;const t=we;do{try{for(;Z<x.length;){const e=x[Z];Z++,le(e),it(e.$$)}}catch(e){throw x.length=0,Z=0,e}for(le(null),x.length=0,Z=0;ue.length;)ue.pop()();for(let e=0;e<ee.length;e+=1){const n=ee[e];de.has(n)||(de.add(n),n())}ee.length=0}while(x.length);for(;Oe.length;)Oe.pop()();pe=!1,de.clear(),le(t)}function it(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(he)}}function rt(t){const e=[],n=[];ee.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),ee=e}const oe=new Set;let Y;function H(){Y={r:0,c:[],p:Y}}function z(){Y.r||q(Y.c),Y=Y.p}function k(t,e){t&&t.i&&(oe.delete(t),t.i(e))}function $(t,e,n,s){if(t&&t.o){if(oe.has(t))return;oe.add(t),Y.c.push(()=>{oe.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function J(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function ot(t,e){$(t,1,1,()=>{e.delete(t.key)})}function ut(t,e,n,s,l,i,r,u,o,a,c,f){let d=t.length,p=i.length,m=d;const I={};for(;m--;)I[t[m].key]=m;const P=[],w=new Map,y=new Map,T=[];for(m=p;m--;){const b=f(l,i,m),O=n(b);let C=r.get(O);C?s&&T.push(()=>C.p(b,e)):(C=a(O,b),C.c()),w.set(O,P[m]=C),O in I&&y.set(O,Math.abs(m-I[O]))}const v=new Set,D=new Set;function G(b){k(b,1),b.m(u,c),r.set(b.key,b),c=b.first,p--}for(;d&&p;){const b=P[p-1],O=t[d-1],C=b.key,ie=O.key;b===O?(c=b.first,d--,p--):w.has(ie)?!r.has(C)||v.has(C)?G(b):D.has(ie)?d--:y.get(C)>y.get(ie)?(D.add(C),G(b)):(v.add(ie),d--):(o(O,r),d--)}for(;d--;){const b=t[d];w.has(b.key)||o(b,r)}for(;p;)G(P[p-1]);return q(T),P}function B(t){t&&t.c()}function F(t,e,n){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),he(()=>{const i=t.$$.on_mount.map(Xe).filter(ae);t.$$.on_destroy?t.$$.on_destroy.push(...i):q(i),t.$$.on_mount=[]}),l.forEach(he)}function j(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(x.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,s,l,i,r,u=[-1]){const o=we;le(t);const a=t.$$={fragment:null,ctx:[],props:i,update:N,not_equal:l,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Pe(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let c=!1;if(a.ctx=n?n(t,e.props||{},(f,d,...p)=>{const m=p.length?p[0]:d;return a.ctx&&l(a.ctx[f],a.ctx[f]=m)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](m),c&&at(t,f)),d}):[],a.update(),c=!0,q(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const f=tt(e.target);a.fragment&&a.fragment.l(f),f.forEach(S)}else a.fragment&&a.fragment.c();e.intro&&k(t.$$.fragment),F(t,e.target,e.anchor),Je()}le(o)}class U{constructor(){fe(this,"$$");fe(this,"$$set")}$destroy(){j(this,1),this.$destroy=N}$on(e,n){if(!ae(n))return N;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(e){this.$$set&&!Qe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ct);function ft(t){let e,n,s,l,i;const r=t[1].default,u=ge(r,t,t[0],null);return{c(){e=_("div"),n=_("main"),u&&u.c(),g(e,"class","app"),g(e,"role","application")},m(o,a){L(o,e,a),h(e,n),u&&u.m(n,null),s=!0,l||(i=A(e,"contextmenu",ze(t[2])),l=!0)},p(o,a){u&&u.p&&(!s||a&1)&&ke(u,r,o,o[0],s?_e(r,o[0],a,null):be(o[0]),null)},i(o){s||(k(u,o),s=!0)},o(o){$(u,o),s=!1},d(o){o&&S(e),u&&u.d(o),l=!1,i()}}}function dt(t){let e,n,s;const l=t[1].default,i=ge(l,t,t[0],null);return{c(){e=_("div"),n=_("main"),i&&i.c(),g(e,"class","app"),g(e,"role","application")},m(r,u){L(r,e,u),h(e,n),i&&i.m(n,null),s=!0},p(r,u){i&&i.p&&(!s||u&1)&&ke(i,l,r,r[0],s?_e(l,r[0],u,null):be(r[0]),null)},i(r){s||(k(i,r),s=!0)},o(r){$(i,r),s=!1},d(r){r&&S(e),i&&i.d(r)}}}function pt(t){let e,n,s,l;const i=[dt,ft],r=[];function u(o,a){return 0}return e=u(),n=r[e]=i[e](t),{c(){n.c(),s=ne()},m(o,a){r[e].m(o,a),L(o,s,a),l=!0},p(o,[a]){n.p(o,a)},i(o){l||(k(n),l=!0)},o(o){$(n),l=!1},d(o){o&&S(s),r[e].d(o)}}}function ht(t,e,n){let{$$slots:s={},$$scope:l}=e;function i(r){nt.call(this,t,r)}return t.$$set=r=>{"$$scope"in r&&n(0,l=r.$$scope)},[l,s,i]}class mt extends U{constructor(e){super(),R(this,e,ht,pt,K,{})}}const gt="/Tusker/assets/tusker-logo-poly-5836d0cb.png";function _t(t){let e;return{c(){e=_("span"),e.innerHTML=`<img id="logo-img" src="${gt}" alt="Tusker Logo"/> <div><h1>Tusker</h1></div>`,g(e,"id","logo-container")},m(n,s){L(n,e,s)},p:N,i:N,o:N,d(n){n&&S(e)}}}class kt extends U{constructor(e){super(),R(this,e,null,_t,K,{})}}const Q=[];function bt(t,e){return{subscribe:ye(t,e).subscribe}}function ye(t,e=N){let n;const s=new Set;function l(u){if(K(t,u)&&(t=u,n)){const o=!Q.length;for(const a of s)a[1](),Q.push(a,t);if(o){for(let a=0;a<Q.length;a+=2)Q[a][0](Q[a+1]);Q.length=0}}}function i(u){l(u(t))}function r(u,o=N){const a=[u,o];return s.add(a),s.size===1&&(n=e(l,i)||N),u(t),()=>{s.delete(a),s.size===0&&n&&(n(),n=null)}}return{set:l,update:i,subscribe:r}}function ce(t,e,n){const s=!Array.isArray(t),l=s?[t]:t;if(!l.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const i=e.length<2;return bt(n,(r,u)=>{let o=!1;const a=[];let c=0,f=N;const d=()=>{if(c)return;f();const m=e(s?a[0]:a,r,u);i?r(m):f=ae(m)?m:N},p=l.map((m,I)=>me(m,P=>{a[I]=P,c&=~(1<<I),o&&d()},()=>{c|=1<<I}));return o=!0,d(),function(){q(p),f(),o=!1}})}const $t=(t,e)=>{const n=window.localStorage.getItem(t);return n?JSON.parse(n):e},wt=(t,e)=>{e(n=>{window.localStorage.setItem(t,JSON.stringify(n))})},yt=(t,e)=>{const n=$t(t,e),{subscribe:s,set:l,update:i}=ye(n);return wt(t,s),{subscribe:s,set:l,update:i}},Tt="tusker/tasks",It=()=>{const{subscribe:t,set:e,update:n}=yt(Tt,[]);let s=u=>u.length?Math.max(...u.map(o=>o.id))+1:0,l=(u,o)=>u.filter(a=>a.id==o)[0],i=u=>n(o=>[...o,{id:s(o),...u}]),r=(u,o)=>n(a=>a.map(c=>(c.id==u&&(c={id:u,...o(l(a,u))},console.log(c)),c)));return{subscribe:t,set:e,updateTask:r,toggleTaskState:(u,o)=>r(u,a=>({...a,state:o??(a.state=="Finished"?"In-Progress":"Finished")})),addTask:i,addTasks:u=>{u.forEach(i)},addTaskByTitle:u=>i({title:u,state:"In-Progress",tags:[]}),deleteTask:u=>n(o=>o.filter(a=>a.id!=u)),deleteTasks:()=>e([]),deleteFinishedTasks:()=>n(u=>u.filter(o=>o.state!="Finished"))}},E=It(),Pt=t=>ce(E,e=>{let n=e.filter(s=>s.id==t);return n.length==1?n[0]:null}),vt=ce(E,t=>t.filter(e=>e.state!="Finished")),Ot=ce(E,t=>t.filter(e=>e.state=="Finished"));let St="https://api.ai21.com/studio/v1/j2-ultra/complete",Lt="OA6FRXUU6lln8U1jKldXZ2jtcyaplKl0",Mt=`Your mission is to accept a task descriptions and break it down into smaller task units.
Answer with markdown and write each task in a new line.
If a task unit includes multiple logical steps or elements, break it down to separate task units.
Pay close attention to details such as targets, dates, and requirements.
Each task unit must begin with an asterisk, and then the task unit's description.
Your input is between <input-start> and <input-end>.`,Ye=async t=>{let e=new Headers;e.set("Content-Type","application/json"),e.set("Authorization",`Bearer ${Lt}`);let n=JSON.stringify({prompt:`${Mt}
<input-start>${t}<input-end>`,numResults:1,epoch:0,maxTokens:400,temperature:0,topKReturn:0,topP:1,presencePenalty:{scale:0,applyToNumbers:!0,applyToPunctuations:!0,applyToStopwords:!0,applyToWhitespaces:!0,applyToEmojis:!0},countPenalty:{scale:0,applyToNumbers:!0,applyToPunctuations:!0,applyToStopwords:!0,applyToWhitespaces:!0,applyToEmojis:!0},frequencyPenalty:{scale:0,applyToNumbers:!0,applyToPunctuations:!0,applyToStopwords:!0,applyToWhitespaces:!0,applyToEmojis:!0},stopSequences:[]}),s=new Request(St,{method:"POST",headers:e,body:n}),l=await(await fetch(s)).json();return Ct(l.completions[0].data.text)},Ct=t=>t.split(`
`).map(At).filter(e=>!!e.trim()).map(e=>({title:e,state:"In-Progress",tags:[]})),At=t=>t.startsWith("* ")?t.replace("* ",""):t;function Se(t){let e,n=t[0]?"[SMART]":"[MANUAL]",s;return{c(){e=_("span"),s=W(n),g(e,"class","task-input-mode")},m(l,i){L(l,e,i),h(e,s)},p(l,i){i&1&&n!==(n=l[0]?"[SMART]":"[MANUAL]")&&V(s,n)},d(l){l&&S(e)}}}function Nt(t){let e,n,s,l,i,r,u,o,a=t[1]&&Se(t);return{c(){e=_("div"),n=_("button"),s=_("span"),s.innerHTML='<input type="checkbox" disabled=""/>',l=M(),i=_("input"),r=M(),a&&a.c(),g(s,"class","task-item-checkbox"),g(i,"type","text"),g(i,"placeholder",t[5]),i.disabled=t[4],g(i,"class","manual-task-input-textbox"),g(n,"class","task-item"),X(n,"isFocus",t[1]),X(n,"isLoading",t[4]),g(e,"class","new-task-input")},m(c,f){L(c,e,f),h(e,n),h(n,s),h(n,l),h(n,i),ve(i,t[3]),t[8](i),h(n,r),a&&a.m(n,null),u||(o=[A(i,"input",t[7]),A(i,"focus",t[9]),A(i,"blur",t[10]),A(n,"click",t[11]),A(n,"keydown",t[6])],u=!0)},p(c,[f]){f&32&&g(i,"placeholder",c[5]),f&16&&(i.disabled=c[4]),f&8&&i.value!==c[3]&&ve(i,c[3]),c[1]?a?a.p(c,f):(a=Se(c),a.c(),a.m(n,null)):a&&(a.d(1),a=null),f&2&&X(n,"isFocus",c[1]),f&16&&X(n,"isLoading",c[4])},i:N,o:N,d(c){c&&S(e),t[8](null),a&&a.d(),u=!1,q(o)}}}function Et(t,e,n){let s,l,i,r=!1,u=!1,o=!1,a=async w=>{w.key=="Enter"&&i.trim()&&(r?(n(4,o=!0),(await Ye(i)).forEach(E.addTask),n(4,o=!1)):E.addTaskByTitle(i),n(3,i=""))},c=w=>{w.ctrlKey&&w.altKey&&(w.preventDefault(),n(0,r=!r))},f=w=>{c(w),a(w)};function d(){i=this.value,n(3,i)}function p(w){ue[w?"unshift":"push"](()=>{l=w,n(2,l)})}const m=()=>n(1,u=!0),I=()=>n(1,u=!1),P=()=>l.focus();return t.$$.update=()=>{t.$$.dirty&3&&n(5,s=(r?"Describe your tasks":"Add a task		")+(u?"	(Press Ctrl+Alt to toggle input mode)":""))},[r,u,l,i,o,s,f,d,p,m,I,P]}class Ft extends U{constructor(e){super(),R(this,e,Et,Nt,K,{})}}const jt="/Tusker/assets/ding-c54d088f.mp3";const Bt=()=>{const{subscribe:t,set:e,update:n}=ye({sidePane:{isOpen:!1,selectedTaskId:null},contextMenu:{isOpen:!1}});return{subscribe:t,toggleSidePane:s=>n(l=>s!=null&&s!=l.sidePane.selectedTaskId?{...l,sidePane:{isOpen:!0,selectedTaskId:s}}:{...l,sidePane:{isOpen:!1,selectedTaskId:null}}),toggleContextMenu:()=>n(s=>({...s,contextMenu:{isOpen:!s.contextMenu.isOpen}})),updateContextMenu:s=>n(l=>({...l,contextMenu:{isOpen:s}}))}},te=Bt();ce(te,t=>t.sidePane.isOpen);const{window:Le}=et;function Me(t,e,n){const s=t.slice();return s[15]=e[n],s}function Ce(t){let e,n,s,l,i,r=J(t[0]),u=[];for(let o=0;o<r.length;o+=1)u[o]=Ae(Me(t,r,o));return{c(){e=_("nav"),n=_("div"),s=_("ul");for(let o=0;o<u.length;o+=1)u[o].c();g(n,"class","navbar"),g(n,"id","navbar"),re(e,"top",t[3].y+"px"),re(e,"left",t[3].x+"px")},m(o,a){L(o,e,a),h(e,n),h(n,s);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(s,null);l||(i=xe(t[7].call(null,e)),l=!0)},p(o,a){if(a&65){r=J(o[0]);let c;for(c=0;c<r.length;c+=1){const f=Me(o,r,c);u[c]?u[c].p(f,a):(u[c]=Ae(f),u[c].c(),u[c].m(s,null))}for(;c<u.length;c+=1)u[c].d(1);u.length=r.length}a&8&&re(e,"top",o[3].y+"px"),a&8&&re(e,"left",o[3].x+"px")},d(o){o&&S(e),$e(u,o),l=!1,i()}}}function Ae(t){let e,n,s,l=(t[15].icon?t[15].icon:"")+"",i,r,u,o=t[15].displayText+"",a,c,f,d;function p(...m){return t[10](t[15],...m)}return{c(){e=_("li"),n=_("button"),s=_("span"),i=W(l),r=M(),u=_("span"),a=W(o),c=M(),g(s,"class","context-menu-li-icon"),g(u,"class","context-menu-li-text")},m(m,I){L(m,e,I),h(e,n),h(n,s),h(s,i),h(n,r),h(n,u),h(u,a),h(n,c),f||(d=A(n,"click",p),f=!0)},p(m,I){t=m,I&1&&l!==(l=(t[15].icon?t[15].icon:"")+"")&&V(i,l),I&1&&o!==(o=t[15].displayText+"")&&V(a,o)},d(m){m&&S(e),f=!1,d()}}}function Dt(t){let e,n,s,l,i,r=t[1]&&Ce(t);const u=t[9].default,o=ge(u,t,t[8],null);return{c(){r&&r.c(),e=M(),n=_("span"),o&&o.c()},m(a,c){r&&r.m(a,c),L(a,e,c),L(a,n,c),o&&o.m(n,null),t[11](n),s=!0,l||(i=[A(Le,"click",t[6]),A(Le,"contextmenu",t[5]),A(n,"contextmenu",ze(t[4]))],l=!0)},p(a,[c]){a[1]?r?r.p(a,c):(r=Ce(a),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o&&o.p&&(!s||c&256)&&ke(o,u,a,a[8],s?_e(u,a[8],c,null):be(a[8]),null)},i(a){s||(k(o,a),s=!0)},o(a){$(o,a),s=!1},d(a){a&&(S(e),S(n)),r&&r.d(a),o&&o.d(a),t[11](null),l=!1,q(i)}}}function Wt(t,e,n){let{$$slots:s={},$$scope:l}=e,{menuItems:i=[]}=e,r,u={x:0,y:0},o={h:0,w:0},a={h:0,w:0},c=!1,f=y=>{n(1,c=!0),a={w:window.innerWidth,h:window.innerHeight},n(3,u={x:y.clientX+document.documentElement.scrollLeft,y:y.clientY+document.documentElement.scrollTop}),a.h-u.y<o.h&&n(3,u.y=u.y-o.h,u),a.w-u.x<o.w&&n(3,u.x=u.x-o.w,u)},d=y=>{var T,v;return r.children[0]==y?!0:(v=(T=r.children[0])==null?void 0:T.children)!=null&&v.length?[...r.children[0].children].some(D=>D==y):!1},p=y=>{var T;((T=r==null?void 0:r.children)==null?void 0:T.length)==1?n(1,c=d(y.target)):n(1,c=!1)},m=()=>{n(1,c=!1)},I=y=>{o={h:y.offsetHeight,w:y.offsetWidth}};const P=(y,T)=>{y.onClick(),T.stopPropagation(),m()};function w(y){ue[y?"unshift":"push"](()=>{r=y,n(2,r)})}return t.$$set=y=>{"menuItems"in y&&n(0,i=y.menuItems),"$$scope"in y&&n(8,l=y.$$scope)},t.$$.update=()=>{t.$$.dirty&2&&te.updateContextMenu(c)},[i,c,r,u,f,p,m,I,l,s,P,w]}class Te extends U{constructor(e){super(),R(this,e,Wt,Dt,K,{menuItems:0})}}function qt(t){let e,n;return{c(){e=_("div"),n=W(t[0]),g(e,"class","task-item-tag")},m(s,l){L(s,e,l),h(e,n)},p(s,l){l&1&&V(n,s[0])},d(s){s&&S(e)}}}function Kt(t){let e,n;return e=new Te({props:{menuItems:t[1],$$slots:{default:[qt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,l){F(e,s,l),n=!0},p(s,[l]){const i={};l&9&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Rt(t,e,n){let{value:s}=e,{taskId:l}=e,i=l!=null?[{name:"deleteTag",onClick:()=>l!=null&&E.updateTask(l,r=>({...r,tags:r.tags.filter(u=>u!=s)})),displayText:"Delete tag",icon:"X",states:["In-Progress","Finished"]}]:[];return t.$$set=r=>{"value"in r&&n(0,s=r.value),"taskId"in r&&n(2,l=r.taskId)},[s,i,l]}class Ie extends U{constructor(e){super(),R(this,e,Rt,Kt,K,{value:0,taskId:2})}}function Ne(t,e,n){const s=t.slice();return s[9]=e[n],s}function Ut(t){let e,n;return e=new Ie({props:{taskId:null,value:". . . ."}}),{c(){B(e.$$.fragment)},m(s,l){F(e,s,l),n=!0},p:N,i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Xt(t){let e,n,s=J(t[0].tags),l=[];for(let r=0;r<s.length;r+=1)l[r]=Ee(Ne(t,s,r));const i=r=>$(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ne()},m(r,u){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,u);L(r,e,u),n=!0},p(r,u){if(u&1){s=J(r[0].tags);let o;for(o=0;o<s.length;o+=1){const a=Ne(r,s,o);l[o]?(l[o].p(a,u),k(l[o],1)):(l[o]=Ee(a),l[o].c(),k(l[o],1),l[o].m(e.parentNode,e))}for(H(),o=s.length;o<l.length;o+=1)i(o);z()}},i(r){if(!n){for(let u=0;u<s.length;u+=1)k(l[u]);n=!0}},o(r){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)$(l[u]);n=!1},d(r){r&&S(e),$e(l,r)}}}function Ee(t){let e,n;return e=new Ie({props:{taskId:t[0].id,value:t[9]}}),{c(){B(e.$$.fragment)},m(s,l){F(e,s,l),n=!0},p(s,l){const i={};l&1&&(i.taskId=s[0].id),l&1&&(i.value=s[9]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Ht(t){let e,n,s,l,i,r=t[0].title+"",u,o,a,c,f,d,p,m,I;const P=[Xt,Ut],w=[];function y(T,v){return v&5&&(c=null),c==null&&(c=T[0].tags.join(" ").length<(T[2].sidePane.isOpen?10:25)),c?0:1}return f=y(t,-1),d=w[f]=P[f](t),{c(){e=_("button"),n=_("span"),s=_("input"),l=M(),i=_("span"),u=W(r),o=M(),a=_("span"),d.c(),g(s,"type","checkbox"),g(n,"class","task-item-checkbox"),g(i,"class","task-item-title"),g(a,"class","task-item-tags"),g(e,"class","task-item"),X(e,"isFinished",t[1])},m(T,v){L(T,e,v),h(e,n),h(n,s),s.checked=t[1],h(e,l),h(e,i),h(i,u),h(e,o),h(e,a),w[f].m(a,null),p=!0,m||(I=[A(s,"change",t[5]),A(s,"click",t[4]),A(e,"click",t[6])],m=!0)},p(T,v){v&2&&(s.checked=T[1]),(!p||v&1)&&r!==(r=T[0].title+"")&&V(u,r);let D=f;f=y(T,v),f===D?w[f].p(T,v):(H(),$(w[D],1,1,()=>{w[D]=null}),z(),d=w[f],d?d.p(T,v):(d=w[f]=P[f](T),d.c()),k(d,1),d.m(a,null)),(!p||v&2)&&X(e,"isFinished",T[1])},i(T){p||(k(d),p=!0)},o(T){$(d),p=!1},d(T){T&&S(e),w[f].d(),m=!1,q(I)}}}function zt(t){let e,n;return e=new Te({props:{menuItems:t[3].filter(t[7]),$$slots:{default:[Ht]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,l){F(e,s,l),n=!0},p(s,[l]){const i={};l&1&&(i.menuItems=s[3].filter(s[7])),l&4103&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Jt(t,e,n){let s,l;se(t,te,d=>n(2,l=d));let{task:i}=e,r=new Audio(jt),u=[{name:"toggleTask",onClick:()=>E.toggleTaskState(i.id,"In-Progress"),displayText:"Mark as not finished",icon:"⍻",states:["Finished"]},{name:"toggleTask",onClick:()=>E.toggleTaskState(i.id,"Finished"),displayText:"Mark as finished",icon:"✓",states:["In-Progress"]},{name:"breakdownTask",onClick:async()=>{(await Ye(i.title)).map(d=>({...i,...d})).forEach(E.addTask),E.deleteTask(i.id)},displayText:"Breakdown",icon:"☄",states:["In-Progress"]},{name:"deleteTask",onClick:()=>E.deleteTask(i.id),displayText:"Delete task",icon:"X",states:["In-Progress","Finished"]}],o=d=>{E.toggleTaskState(i.id),d!=null&&d.target.checked&&r.play()};function a(){s=this.checked,n(1,s),n(0,i)}const c=()=>te.toggleSidePane(i.id),f=d=>d.states.includes(i.state);return t.$$set=d=>{"task"in d&&n(0,i=d.task)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=i.state=="Finished")},[i,s,l,u,o,a,c,f]}class Yt extends U{constructor(e){super(),R(this,e,Jt,zt,K,{task:0})}}function Fe(t,e,n){const s=t.slice();return s[5]=e[n],s}function je(t){let e,n;return e=new Te({props:{menuItems:t[3],$$slots:{default:[Vt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,l){F(e,s,l),n=!0},p(s,l){const i={};l&263&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function Vt(t){let e,n,s,l,i,r,u=t[0].length+"",o,a,c,f;return{c(){e=_("button"),n=_("span"),n.textContent="▶",s=M(),l=_("span"),i=W(t[1]),r=W(" ("),o=W(u),a=W(")"),g(n,"class","task-list-button-triangle"),X(n,"showTasks",t[2]),g(l,"class","task-list-button-text"),g(e,"class","task-list-button")},m(d,p){L(d,e,p),h(e,n),h(e,s),h(e,l),h(l,i),h(l,r),h(l,o),h(l,a),c||(f=A(e,"click",t[4]),c=!0)},p(d,p){p&4&&X(n,"showTasks",d[2]),p&2&&V(i,d[1]),p&1&&u!==(u=d[0].length+"")&&V(o,u)},d(d){d&&S(e),c=!1,f()}}}function Be(t){let e=[],n=new Map,s,l,i=J(t[0]);const r=u=>u[5].id;for(let u=0;u<i.length;u+=1){let o=Fe(t,i,u),a=r(o);n.set(a,e[u]=De(a,o))}return{c(){for(let u=0;u<e.length;u+=1)e[u].c();s=ne()},m(u,o){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(u,o);L(u,s,o),l=!0},p(u,o){o&1&&(i=J(u[0]),H(),e=ut(e,o,r,1,u,i,n,s.parentNode,ot,De,s,Fe),z())},i(u){if(!l){for(let o=0;o<i.length;o+=1)k(e[o]);l=!0}},o(u){for(let o=0;o<e.length;o+=1)$(e[o]);l=!1},d(u){u&&S(s);for(let o=0;o<e.length;o+=1)e[o].d(u)}}}function De(t,e){let n,s,l;return s=new Yt({props:{task:e[5]}}),{key:t,first:null,c(){n=ne(),B(s.$$.fragment),this.first=n},m(i,r){L(i,n,r),F(s,i,r),l=!0},p(i,r){e=i;const u={};r&1&&(u.task=e[5]),s.$set(u)},i(i){l||(k(s.$$.fragment,i),l=!0)},o(i){$(s.$$.fragment,i),l=!1},d(i){i&&S(n),j(s,i)}}}function Gt(t){let e,n,s,l=!!t[1]&&t[0].length&&je(t),i=t[2]&&Be(t);return{c(){e=_("div"),l&&l.c(),n=M(),i&&i.c(),g(e,"class","task-list")},m(r,u){L(r,e,u),l&&l.m(e,null),h(e,n),i&&i.m(e,null),s=!0},p(r,[u]){r[1]&&r[0].length?l?(l.p(r,u),u&3&&k(l,1)):(l=je(r),l.c(),k(l,1),l.m(e,n)):l&&(H(),$(l,1,1,()=>{l=null}),z()),r[2]?i?(i.p(r,u),u&4&&k(i,1)):(i=Be(r),i.c(),k(i,1),i.m(e,null)):i&&(H(),$(i,1,1,()=>{i=null}),z())},i(r){s||(k(l),k(i),s=!0)},o(r){$(l),$(i),s=!1},d(r){r&&S(e),l&&l.d(),i&&i.d()}}}function Zt(t,e,n){let{taskList:s}=e,{category:l=void 0}=e,i=!0;const r=[{name:"deleteAll",displayText:"Delete tasks",onClick:()=>s.forEach(o=>E.deleteTask(o.id)),icon:"X"}],u=()=>n(2,i=!i);return t.$$set=o=>{"taskList"in o&&n(0,s=o.taskList),"category"in o&&n(1,l=o.category)},[s,l,i,r,u]}class We extends U{constructor(e){super(),R(this,e,Zt,Gt,K,{taskList:0,category:1})}}let Qt=t=>t.filter((e,n)=>t.indexOf(e)==n);function qe(t,e,n){const s=t.slice();return s[6]=e[n],s}function Ke(t){let e,n,s,l,i,r,u,o,a,c,f,d,p,m,I,P,w,y,T,v,D,G,b=t[2].tags.length>=0&&Re(t);return{c(){e=_("div"),n=_("div"),s=_("span"),l=_("input"),r=M(),u=_("hr"),o=M(),a=_("span"),b&&b.c(),c=M(),f=_("input"),d=M(),p=_("hr"),m=M(),I=_("span"),P=_("input"),y=M(),T=_("hr"),g(l,"type","text"),g(l,"placeholder","Task title"),l.value=i=t[2].title,g(s,"id","side-panel-title"),g(s,"class","side-panel-row"),g(f,"type","text"),g(f,"placeholder","Add tags"),g(a,"id","side-panel-tags"),g(a,"class","side-panel-row"),g(P,"type","text"),g(P,"placeholder","Add a description"),P.value=w=t[2].description?t[2].description:null,g(I,"id","side-panel-description"),g(I,"class","side-panel-row"),g(n,"id","side-panel-container"),g(e,"id","task-side-pane")},m(O,C){L(O,e,C),h(e,n),h(n,s),h(s,l),h(n,r),h(n,u),h(n,o),h(n,a),b&&b.m(a,null),h(a,c),h(a,f),h(n,d),h(n,p),h(n,m),h(n,I),h(I,P),h(n,y),h(n,T),v=!0,D||(G=[A(l,"change",t[3]),A(f,"change",t[4]),A(P,"change",t[5])],D=!0)},p(O,C){(!v||C&4&&i!==(i=O[2].title)&&l.value!==i)&&(l.value=i),O[2].tags.length>=0?b?(b.p(O,C),C&4&&k(b,1)):(b=Re(O),b.c(),k(b,1),b.m(a,c)):b&&(H(),$(b,1,1,()=>{b=null}),z()),(!v||C&4&&w!==(w=O[2].description?O[2].description:null)&&P.value!==w)&&(P.value=w)},i(O){v||(k(b),v=!0)},o(O){$(b),v=!1},d(O){O&&S(e),b&&b.d(),D=!1,q(G)}}}function Re(t){let e,n,s=J(t[2].tags),l=[];for(let r=0;r<s.length;r+=1)l[r]=Ue(qe(t,s,r));const i=r=>$(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=ne()},m(r,u){for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(r,u);L(r,e,u),n=!0},p(r,u){if(u&4){s=J(r[2].tags);let o;for(o=0;o<s.length;o+=1){const a=qe(r,s,o);l[o]?(l[o].p(a,u),k(l[o],1)):(l[o]=Ue(a),l[o].c(),k(l[o],1),l[o].m(e.parentNode,e))}for(H(),o=s.length;o<l.length;o+=1)i(o);z()}},i(r){if(!n){for(let u=0;u<s.length;u+=1)k(l[u]);n=!0}},o(r){l=l.filter(Boolean);for(let u=0;u<l.length;u+=1)$(l[u]);n=!1},d(r){r&&S(e),$e(l,r)}}}function Ue(t){let e,n;return e=new Ie({props:{taskId:t[2].id,value:t[6]}}),{c(){B(e.$$.fragment)},m(s,l){F(e,s,l),n=!0},p(s,l){const i={};l&4&&(i.taskId=s[2].id),l&4&&(i.value=s[6]),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function xt(t){let e,n,s=t[0].sidePane.isOpen&&t[2]!=null&&Ke(t);return{c(){s&&s.c(),e=ne()},m(l,i){s&&s.m(l,i),L(l,e,i),n=!0},p(l,[i]){l[0].sidePane.isOpen&&l[2]!=null?s?(s.p(l,i),i&5&&k(s,1)):(s=Ke(l),s.c(),k(s,1),s.m(e.parentNode,e)):s&&(H(),$(s,1,1,()=>{s=null}),z())},i(l){n||(k(s),n=!0)},o(l){$(s),n=!1},d(l){l&&S(e),s&&s.d(l)}}}function en(t,e,n){let s,l,i,r=N,u=()=>(r(),r=me(s,f=>n(2,i=f)),s);se(t,te,f=>n(0,l=f)),t.$$.on_destroy.push(()=>r());const o=f=>i!=null&&E.updateTask(i.id,d=>({...d,title:f.currentTarget.value.length?f.currentTarget.value:d.title})),a=f=>i!=null&&E.updateTask(i.id,d=>{let p={...d,tags:Qt([...d.tags,...f.currentTarget.value.split(" ")])};return f.currentTarget.value="",p}),c=f=>i!=null&&E.updateTask(i.id,d=>({...d,description:f.currentTarget.value}));return t.$$.update=()=>{t.$$.dirty&1&&u(n(1,s=l.sidePane.selectedTaskId!=null?Pt(l.sidePane.selectedTaskId):null))},[l,s,i,o,a,c]}class tn extends U{constructor(e){super(),R(this,e,en,xt,K,{})}}function nn(t){let e,n,s,l,i,r,u,o,a,c,f,d;return n=new kt({}),l=new Ft({}),r=new We({props:{category:"In-Progress",taskList:t[1]}}),o=new We({props:{category:"Finished",taskList:t[2]}}),f=new tn({}),{c(){e=_("div"),B(n.$$.fragment),s=M(),B(l.$$.fragment),i=M(),B(r.$$.fragment),u=M(),B(o.$$.fragment),c=M(),B(f.$$.fragment),g(e,"id","main-panel"),g(e,"style",a=`width: ${t[0].sidePane.isOpen?"55%":"95%"}`)},m(p,m){L(p,e,m),F(n,e,null),h(e,s),F(l,e,null),h(e,i),F(r,e,null),h(e,u),F(o,e,null),L(p,c,m),F(f,p,m),d=!0},p(p,m){const I={};m&2&&(I.taskList=p[1]),r.$set(I);const P={};m&4&&(P.taskList=p[2]),o.$set(P),(!d||m&1&&a!==(a=`width: ${p[0].sidePane.isOpen?"55%":"95%"}`))&&g(e,"style",a)},i(p){d||(k(n.$$.fragment,p),k(l.$$.fragment,p),k(r.$$.fragment,p),k(o.$$.fragment,p),k(f.$$.fragment,p),d=!0)},o(p){$(n.$$.fragment,p),$(l.$$.fragment,p),$(r.$$.fragment,p),$(o.$$.fragment,p),$(f.$$.fragment,p),d=!1},d(p){p&&(S(e),S(c)),j(n),j(l),j(r),j(o),j(f,p)}}}function sn(t){let e,n;return e=new mt({props:{$$slots:{default:[nn]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,l){F(e,s,l),n=!0},p(s,[l]){const i={};l&15&&(i.$$scope={dirty:l,ctx:s}),e.$set(i)},i(s){n||(k(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){j(e,s)}}}function ln(t,e,n){let s,l,i;return se(t,te,r=>n(0,s=r)),se(t,vt,r=>n(1,l=r)),se(t,Ot,r=>n(2,i=r)),[s,l,i]}class rn extends U{constructor(e){super(),R(this,e,ln,sn,K,{})}}new rn({target:document.body});
