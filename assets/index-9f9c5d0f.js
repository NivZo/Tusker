var Ke=Object.defineProperty;var Re=(t,e,n)=>e in t?Ke(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var le=(t,e,n)=>(Re(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function L(){}function qe(t,e){for(const n in e)t[n]=e[n];return t}function Ee(t){return t()}function _e(){return Object.create(null)}function N(t){t.forEach(Ee)}function Z(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function De(t){return Object.keys(t).length===0}function Ne(t,...e){if(t==null){for(const s of e)s(void 0);return L}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ke(t,e,n){t.$$.on_destroy.push(Ne(e,n))}function ce(t,e,n,s){if(t){const i=Fe(t,e,n,s);return t[0](i)}}function Fe(t,e,n,s){return t[1]&&s?qe(n.ctx.slice(),t[1](s(e))):n.ctx}function fe(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],a=Math.max(e.dirty.length,i.length);for(let r=0;r<a;r+=1)l[r]=e.dirty[r]|i[r];return l}return e.dirty|i}return e.dirty}function de(t,e,n,s,i,l){if(i){const a=Fe(e,n,s,l);t.p(a,i)}}function pe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function Ue(t){return t&&Z(t.destroy)?t.destroy:L}const He=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function m(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function Xe(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function k(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function C(){return E(" ")}function me(){return E("")}function S(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Oe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ze(t){return Array.from(t.childNodes)}function J(t,e){e=""+e,t.data!==e&&(t.data=e)}function be(t,e){t.value=e??""}function x(t,e,n,s){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function j(t,e,n){t.classList.toggle(e,!!n)}let he;function V(t){he=t}function Je(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const X=[],te=[];let z=[];const ye=[],Ye=Promise.resolve();let re=!1;function Ve(){re||(re=!0,Ye.then(ve))}function oe(t){z.push(t)}const ie=new Set;let U=0;function ve(){if(U!==0)return;const t=he;do{try{for(;U<X.length;){const e=X[U];U++,V(e),Ze(e.$$)}}catch(e){throw X.length=0,U=0,e}for(V(null),X.length=0,U=0;te.length;)te.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];ie.has(n)||(ie.add(n),n())}z.length=0}while(X.length);for(;ye.length;)ye.pop()();re=!1,ie.clear(),V(t)}function Ze(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(oe)}}function Ge(t){const e=[],n=[];z.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),z=e}const ee=new Set;let R;function ue(){R={r:0,c:[],p:R}}function ae(){R.r||N(R.c),R=R.p}function b(t,e){t&&t.i&&(ee.delete(t),t.i(e))}function $(t,e,n,s){if(t&&t.o){if(ee.has(t))return;ee.add(t),R.c.push(()=>{ee.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function ne(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Qe(t,e){$(t,1,1,()=>{e.delete(t.key)})}function xe(t,e,n,s,i,l,a,r,o,u,c,f){let p=t.length,h=l.length,g=p;const M={};for(;g--;)M[t[g].key]=g;const I=[],d=new Map,F=new Map,Y=[];for(g=h;g--;){const w=f(i,l,g),P=n(w);let A=a.get(P);A?s&&Y.push(()=>A.p(w,e)):(A=u(P,w),A.c()),d.set(P,I[g]=A),P in M&&F.set(P,Math.abs(g-M[P]))}const G=new Set,ge=new Set;function se(w){b(w,1),w.m(r,c),a.set(w.key,w),c=w.first,h--}for(;p&&h;){const w=I[h-1],P=t[p-1],A=w.key,Q=P.key;w===P?(c=w.first,p--,h--):d.has(Q)?!a.has(A)||G.has(A)?se(w):ge.has(Q)?p--:F.get(A)>F.get(Q)?(ge.add(A),se(w)):(G.add(Q),p--):(o(P,a),p--)}for(;p--;){const w=t[p];d.has(w.key)||o(w,a)}for(;h;)se(I[h-1]);return N(Y),I}function B(t){t&&t.c()}function O(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),oe(()=>{const l=t.$$.on_mount.map(Ee).filter(Z);t.$$.on_destroy?t.$$.on_destroy.push(...l):N(l),t.$$.on_mount=[]}),i.forEach(oe)}function v(t,e){const n=t.$$;n.fragment!==null&&(Ge(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){t.$$.dirty[0]===-1&&(X.push(t),Ve(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(t,e,n,s,i,l,a,r=[-1]){const o=he;V(t);const u=t.$$={fragment:null,ctx:[],props:l,update:L,not_equal:i,bound:_e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:_e(),dirty:r,skip_bound:!1,root:e.target||o.$$.root};a&&a(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(f,p,...h)=>{const g=h.length?h[0]:p;return u.ctx&&i(u.ctx[f],u.ctx[f]=g)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](g),c&&et(t,f)),p}):[],u.update(),c=!0,N(u.before_update),u.fragment=s?s(u.ctx):!1,e.target){if(e.hydrate){const f=ze(e.target);u.fragment&&u.fragment.l(f),f.forEach(y)}else u.fragment&&u.fragment.c();e.intro&&b(t.$$.fragment),O(t,e.target,e.anchor),ve()}V(o)}class D{constructor(){le(this,"$$");le(this,"$$set")}$destroy(){v(this,1),this.$destroy=L}$on(e,n){if(!Z(n))return L;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!De(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(tt);function nt(t){let e,n,s,i,l;const a=t[1].default,r=ce(a,t,t[0],null);return{c(){e=k("div"),n=k("main"),r&&r.c(),_(e,"class","app"),_(e,"role","application")},m(o,u){T(o,e,u),m(e,n),r&&r.m(n,null),s=!0,i||(l=S(e,"contextmenu",Oe(t[2])),i=!0)},p(o,u){r&&r.p&&(!s||u&1)&&de(r,a,o,o[0],s?fe(a,o[0],u,null):pe(o[0]),null)},i(o){s||(b(r,o),s=!0)},o(o){$(r,o),s=!1},d(o){o&&y(e),r&&r.d(o),i=!1,l()}}}function st(t){let e,n,s;const i=t[1].default,l=ce(i,t,t[0],null);return{c(){e=k("div"),n=k("main"),l&&l.c(),_(e,"class","app"),_(e,"role","application")},m(a,r){T(a,e,r),m(e,n),l&&l.m(n,null),s=!0},p(a,r){l&&l.p&&(!s||r&1)&&de(l,i,a,a[0],s?fe(i,a[0],r,null):pe(a[0]),null)},i(a){s||(b(l,a),s=!0)},o(a){$(l,a),s=!1},d(a){a&&y(e),l&&l.d(a)}}}function lt(t){let e,n,s,i;const l=[st,nt],a=[];function r(o,u){return 0}return e=r(),n=a[e]=l[e](t),{c(){n.c(),s=me()},m(o,u){a[e].m(o,u),T(o,s,u),i=!0},p(o,[u]){n.p(o,u)},i(o){i||(b(n),i=!0)},o(o){$(n),i=!1},d(o){o&&y(s),a[e].d(o)}}}function it(t,e,n){let{$$slots:s={},$$scope:i}=e;function l(a){Je.call(this,t,a)}return t.$$set=a=>{"$$scope"in a&&n(0,i=a.$$scope)},[i,s,l]}class rt extends D{constructor(e){super(),q(this,e,it,lt,K,{})}}function ot(t){let e;return{c(){e=k("span"),e.innerHTML='<img id="logo-img" src="src/assets/tusker-logo-poly.png" alt="Tusker Logo"/> <div><h1>Tusker</h1></div>',_(e,"id","logo-container")},m(n,s){T(n,e,s)},p:L,i:L,o:L,d(n){n&&y(e)}}}class ut extends D{constructor(e){super(),q(this,e,null,ot,K,{})}}const H=[];function at(t,e){return{subscribe:je(t,e).subscribe}}function je(t,e=L){let n;const s=new Set;function i(r){if(K(t,r)&&(t=r,n)){const o=!H.length;for(const u of s)u[1](),H.push(u,t);if(o){for(let u=0;u<H.length;u+=2)H[u][0](H[u+1]);H.length=0}}}function l(r){i(r(t))}function a(r,o=L){const u=[r,o];return s.add(u),s.size===1&&(n=e(i,l)||L),r(t),()=>{s.delete(u),s.size===0&&n&&(n(),n=null)}}return{set:i,update:l,subscribe:a}}function Be(t,e,n){const s=!Array.isArray(t),i=s?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return at(n,(a,r)=>{let o=!1;const u=[];let c=0,f=L;const p=()=>{if(c)return;f();const g=e(s?u[0]:u,a,r);l?a(g):f=Z(g)?g:L},h=i.map((g,M)=>Ne(g,I=>{u[M]=I,c&=~(1<<M),o&&p()},()=>{c|=1<<M}));return o=!0,p(),function(){N(h),f(),o=!1}})}const ct=(t,e)=>{const n=window.localStorage.getItem(t);return n?JSON.parse(n):e},ft=(t,e)=>{e(n=>{window.localStorage.setItem(t,JSON.stringify(n))})},dt=(t,e)=>{const n=ct(t,e),{subscribe:s,set:i,update:l}=je(n);return ft(t,s),{subscribe:s,set:i,update:l}},pt="tusker/tasks",mt=()=>{const{subscribe:t,set:e,update:n}=dt(pt,[]);let s=r=>r.length?Math.max(...r.map(o=>o.id))+1:0,i=(r,o)=>r.filter(u=>u.id==o)[0],l=r=>n(o=>[...o,{id:s(o),...r}]),a=(r,o)=>n(u=>u.map(c=>(c.id==r&&(c={id:r,...o(i(u,r))}),c)));return{subscribe:t,set:e,updateTask:a,toggleTaskState:(r,o)=>a(r,u=>({...u,state:o??(u.state=="Finished"?"Created":"Finished")})),addTask:l,addTasks:r=>{r.forEach(l)},addTaskByTitle:r=>l({title:r,state:"Created",tags:[]}),deleteTask:r=>n(o=>o.filter(u=>u.id!=r)),deleteTasks:()=>e([]),deleteFinishedTasks:()=>n(r=>r.filter(o=>o.state!="Finished"))}},W=mt(),ht=Be(W,t=>t.filter(e=>e.state!="Finished")),gt=Be(W,t=>t.filter(e=>e.state=="Finished"));let _t="https://api.ai21.com/studio/v1/j2-ultra/complete",kt="OA6FRXUU6lln8U1jKldXZ2jtcyaplKl0",bt=`Your mission is to accept a task descriptions and break it down into smaller task units.
Answer with markdown and write each task in a new line.
If a task unit includes multiple logical steps or elements, break it down to separate task units.
Pay close attention to details such as targets, dates, and requirements.
Each task unit must begin with an asterisk, and then the task unit's description.
Your input is between <input-start> and <input-end>.`,yt=async t=>{let e=new Headers;e.set("Content-Type","application/json"),e.set("Authorization",`Bearer ${kt}`);let n=JSON.stringify({prompt:`${bt}
<input-start>${t}<input-end>`,numResults:1,epoch:0,maxTokens:400,temperature:0,topKReturn:0,topP:1,presencePenalty:{scale:0,applyToNumbers:!0,applyToPunctuations:!0,applyToStopwords:!0,applyToWhitespaces:!0,applyToEmojis:!0},countPenalty:{scale:0,applyToNumbers:!0,applyToPunctuations:!0,applyToStopwords:!0,applyToWhitespaces:!0,applyToEmojis:!0},frequencyPenalty:{scale:0,applyToNumbers:!0,applyToPunctuations:!0,applyToStopwords:!0,applyToWhitespaces:!0,applyToEmojis:!0},stopSequences:[]}),s=new Request(_t,{method:"POST",headers:e,body:n}),i=await(await fetch(s)).json();return wt(i.completions[0].data.text)},wt=t=>t.split(`
`).map($t).filter(e=>!!e.trim()).map(e=>({title:e,state:"Created",tags:[]})),$t=t=>t.startsWith("* ")?t.replace("* ",""):t;function we(t){let e,n=t[0]?"[SMART]":"[MANUAL]",s;return{c(){e=k("span"),s=E(n),_(e,"class","task-input-mode")},m(i,l){T(i,e,l),m(e,s)},p(i,l){l&1&&n!==(n=i[0]?"[SMART]":"[MANUAL]")&&J(s,n)},d(i){i&&y(e)}}}function Tt(t){let e,n,s,i,l,a,r,o,u=t[1]&&we(t);return{c(){e=k("div"),n=k("button"),s=k("span"),s.innerHTML='<input type="checkbox" disabled=""/>',i=C(),l=k("input"),a=C(),u&&u.c(),_(s,"class","task-item-checkbox"),_(l,"type","text"),_(l,"placeholder",t[5]),l.disabled=t[4],_(l,"class","manual-task-input-textbox"),_(n,"class","task-item"),j(n,"isFocus",t[1]),j(n,"isLoading",t[4]),_(e,"class","new-task-input")},m(c,f){T(c,e,f),m(e,n),m(n,s),m(n,i),m(n,l),be(l,t[3]),t[8](l),m(n,a),u&&u.m(n,null),r||(o=[S(l,"input",t[7]),S(l,"focus",t[9]),S(l,"blur",t[10]),S(n,"click",t[11]),S(n,"keydown",t[6])],r=!0)},p(c,[f]){f&32&&_(l,"placeholder",c[5]),f&16&&(l.disabled=c[4]),f&8&&l.value!==c[3]&&be(l,c[3]),c[1]?u?u.p(c,f):(u=we(c),u.c(),u.m(n,null)):u&&(u.d(1),u=null),f&2&&j(n,"isFocus",c[1]),f&16&&j(n,"isLoading",c[4])},i:L,o:L,d(c){c&&y(e),t[8](null),u&&u.d(),r=!1,N(o)}}}function Lt(t,e,n){let s,i,l,a=!1,r=!1,o=!1,u=async d=>{d.key=="Enter"&&l.trim()&&(a?(n(4,o=!0),(await yt(l)).forEach(W.addTask),n(4,o=!1)):W.addTaskByTitle(l),n(3,l=""))},c=d=>{d.ctrlKey&&d.shiftKey&&(d.preventDefault(),n(0,a=!a))},f=d=>{c(d),u(d)};function p(){l=this.value,n(3,l)}function h(d){te[d?"unshift":"push"](()=>{i=d,n(2,i)})}const g=()=>n(1,r=!0),M=()=>n(1,r=!1),I=()=>i.focus();return t.$$.update=()=>{t.$$.dirty&3&&n(5,s=(a?"Describe your tasks":"Add a task		")+(r?"	(Press Ctrl+Shift to toggle input mode)":""))},[a,r,i,l,o,s,f,p,h,g,M,I]}class St extends D{constructor(e){super(),q(this,e,Lt,Tt,K,{})}}const{window:$e}=He;function Te(t,e,n){const s=t.slice();return s[14]=e[n],s}function Le(t){let e,n,s,i,l,a=ne(t[0]),r=[];for(let o=0;o<a.length;o+=1)r[o]=Se(Te(t,a,o));return{c(){e=k("nav"),n=k("div"),s=k("ul");for(let o=0;o<r.length;o+=1)r[o].c();_(n,"class","navbar"),_(n,"id","navbar"),x(e,"top",t[2].y+"px"),x(e,"left",t[2].x+"px")},m(o,u){T(o,e,u),m(e,n),m(n,s);for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(s,null);i||(l=Ue(t[7].call(null,e)),i=!0)},p(o,u){if(u&1){a=ne(o[0]);let c;for(c=0;c<a.length;c+=1){const f=Te(o,a,c);r[c]?r[c].p(f,u):(r[c]=Se(f),r[c].c(),r[c].m(s,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=a.length}u&4&&x(e,"top",o[2].y+"px"),u&4&&x(e,"left",o[2].x+"px")},d(o){o&&y(e),Xe(r,o),i=!1,l()}}}function Se(t){let e,n,s,i=(t[14].icon?t[14].icon:"")+"",l,a,r,o=t[14].displayText+"",u,c,f,p;return{c(){e=k("li"),n=k("button"),s=k("span"),l=E(i),a=C(),r=k("span"),u=E(o),c=C(),_(s,"class","context-menu-li-icon"),_(r,"class","context-menu-li-text")},m(h,g){T(h,e,g),m(e,n),m(n,s),m(s,l),m(n,a),m(n,r),m(r,u),m(n,c),f||(p=S(n,"click",function(){Z(t[14].onClick)&&t[14].onClick.apply(this,arguments)}),f=!0)},p(h,g){t=h,g&1&&i!==(i=(t[14].icon?t[14].icon:"")+"")&&J(l,i),g&1&&o!==(o=t[14].displayText+"")&&J(u,o)},d(h){h&&y(e),f=!1,p()}}}function Mt(t){let e,n,s,i,l,a=t[3]&&Le(t);const r=t[9].default,o=ce(r,t,t[8],null);return{c(){a&&a.c(),e=C(),n=k("span"),o&&o.c(),_(n,"role","superscript")},m(u,c){a&&a.m(u,c),T(u,e,c),T(u,n,c),o&&o.m(n,null),t[10](n),s=!0,i||(l=[S($e,"click",t[6]),S($e,"contextmenu",t[5]),S(n,"contextmenu",Oe(t[4]))],i=!0)},p(u,[c]){u[3]?a?a.p(u,c):(a=Le(u),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),o&&o.p&&(!s||c&256)&&de(o,r,u,u[8],s?fe(r,u[8],c,null):pe(u[8]),null)},i(u){s||(b(o,u),s=!0)},o(u){$(o,u),s=!1},d(u){u&&(y(e),y(n)),a&&a.d(u),o&&o.d(u),t[10](null),i=!1,N(l)}}}function Ct(t,e,n){let{$$slots:s={},$$scope:i}=e,{menuItems:l=[]}=e,a,r={x:0,y:0},o={h:0,w:0},u={h:0,w:0},c=!1,f=d=>{n(3,c=!0),u={w:window.innerWidth,h:window.innerHeight},n(2,r={x:d.clientX+document.documentElement.scrollLeft,y:d.clientY+document.documentElement.scrollTop}),u.h-r.y<o.h&&n(2,r.y=r.y-o.h,r),u.w-r.x<o.w&&n(2,r.x=r.x-o.w,r)},p=d=>{var F,Y;return a.children[0]==d?!0:(Y=(F=a.children[0])==null?void 0:F.children)!=null&&Y.length?[...a.children[0].children].some(G=>G==d):!1},h=d=>{var F;((F=a==null?void 0:a.children)==null?void 0:F.length)==1?n(3,c=p(d.target)):n(3,c=!1)},g=d=>{n(3,c=!1)},M=d=>{o={h:d.offsetHeight,w:d.offsetWidth}};function I(d){te[d?"unshift":"push"](()=>{a=d,n(1,a)})}return t.$$set=d=>{"menuItems"in d&&n(0,l=d.menuItems),"$$scope"in d&&n(8,i=d.$$scope)},[l,a,r,c,f,h,g,M,i,s,I]}class We extends D{constructor(e){super(),q(this,e,Ct,Mt,K,{menuItems:0})}}function It(t){let e,n,s,i,l,a=t[0].title+"",r,o,u;return{c(){e=k("div"),n=k("span"),s=k("input"),i=C(),l=k("span"),r=E(a),_(s,"type","checkbox"),_(n,"class","task-item-checkbox"),_(l,"class","task-item-title"),_(e,"class","task-item"),j(e,"isFinished",t[1])},m(c,f){T(c,e,f),m(e,n),m(n,s),s.checked=t[1],m(e,i),m(e,l),m(l,r),o||(u=[S(s,"change",t[3]),S(s,"click",t[4])],o=!0)},p(c,f){f&2&&(s.checked=c[1]),f&1&&a!==(a=c[0].title+"")&&J(r,a),f&2&&j(e,"isFinished",c[1])},d(c){c&&y(e),o=!1,N(u)}}}function Pt(t){let e,n;return e=new We({props:{menuItems:t[2],$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,i){O(e,s,i),n=!0},p(s,[i]){const l={};i&4&&(l.menuItems=s[2]),i&35&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){v(e,s)}}}function At(t,e,n){let s,i,{task:l}=e;function a(){s=this.checked,n(1,s),n(0,l)}const r=()=>W.toggleTaskState(l.id);return t.$$set=o=>{"task"in o&&n(0,l=o.task)},t.$$.update=()=>{t.$$.dirty&1&&n(1,s=l.state=="Finished"),t.$$.dirty&3&&n(2,i=[{name:"toggleTask",onClick:()=>W.toggleTaskState(l.id,s?"Created":"Finished"),displayText:s?"Mark as not finished":"Mark as finished",icon:s?"⍻":"✓"},{name:"deleteTask",onClick:()=>W.deleteTask(l.id),displayText:"Delete task",icon:"X"}])},[l,s,i,a,r]}class Et extends D{constructor(e){super(),q(this,e,At,Pt,K,{task:0})}}function Me(t,e,n){const s=t.slice();return s[5]=e[n],s}function Ce(t){let e,n;return e=new We({props:{menuItems:t[3],$$slots:{default:[Nt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,i){O(e,s,i),n=!0},p(s,i){const l={};i&263&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){v(e,s)}}}function Nt(t){let e,n,s,i,l,a,r=t[0].length+"",o,u,c,f;return{c(){e=k("button"),n=k("span"),n.textContent="▶",s=C(),i=k("span"),l=E(t[1]),a=E(" ("),o=E(r),u=E(")"),_(n,"class","task-list-button-triangle"),j(n,"showTasks",t[2]),_(i,"class","task-list-button-text"),_(e,"class","task-list-button")},m(p,h){T(p,e,h),m(e,n),m(e,s),m(e,i),m(i,l),m(i,a),m(i,o),m(i,u),c||(f=S(e,"click",t[4]),c=!0)},p(p,h){h&4&&j(n,"showTasks",p[2]),h&2&&J(l,p[1]),h&1&&r!==(r=p[0].length+"")&&J(o,r)},d(p){p&&y(e),c=!1,f()}}}function Ie(t){let e=[],n=new Map,s,i,l=ne(t[0]);const a=r=>r[5].id;for(let r=0;r<l.length;r+=1){let o=Me(t,l,r),u=a(o);n.set(u,e[r]=Pe(u,o))}return{c(){for(let r=0;r<e.length;r+=1)e[r].c();s=me()},m(r,o){for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(r,o);T(r,s,o),i=!0},p(r,o){o&1&&(l=ne(r[0]),ue(),e=xe(e,o,a,1,r,l,n,s.parentNode,Qe,Pe,s,Me),ae())},i(r){if(!i){for(let o=0;o<l.length;o+=1)b(e[o]);i=!0}},o(r){for(let o=0;o<e.length;o+=1)$(e[o]);i=!1},d(r){r&&y(s);for(let o=0;o<e.length;o+=1)e[o].d(r)}}}function Pe(t,e){let n,s,i;return s=new Et({props:{task:e[5]}}),{key:t,first:null,c(){n=me(),B(s.$$.fragment),this.first=n},m(l,a){T(l,n,a),O(s,l,a),i=!0},p(l,a){e=l;const r={};a&1&&(r.task=e[5]),s.$set(r)},i(l){i||(b(s.$$.fragment,l),i=!0)},o(l){$(s.$$.fragment,l),i=!1},d(l){l&&y(n),v(s,l)}}}function Ft(t){let e,n,s,i=!!t[1]&&t[0].length&&Ce(t),l=t[2]&&Ie(t);return{c(){e=k("div"),i&&i.c(),n=C(),l&&l.c(),_(e,"class","task-list")},m(a,r){T(a,e,r),i&&i.m(e,null),m(e,n),l&&l.m(e,null),s=!0},p(a,[r]){a[1]&&a[0].length?i?(i.p(a,r),r&3&&b(i,1)):(i=Ce(a),i.c(),b(i,1),i.m(e,n)):i&&(ue(),$(i,1,1,()=>{i=null}),ae()),a[2]?l?(l.p(a,r),r&4&&b(l,1)):(l=Ie(a),l.c(),b(l,1),l.m(e,null)):l&&(ue(),$(l,1,1,()=>{l=null}),ae())},i(a){s||(b(i),b(l),s=!0)},o(a){$(i),$(l),s=!1},d(a){a&&y(e),i&&i.d(),l&&l.d()}}}function Ot(t,e,n){let{taskList:s}=e,{category:i=void 0}=e,l=!0;const a=[{name:"deleteAll",displayText:"Delete tasks",onClick:()=>s.forEach(o=>W.deleteTask(o.id)),icon:"X"}],r=()=>n(2,l=!l);return t.$$set=o=>{"taskList"in o&&n(0,s=o.taskList),"category"in o&&n(1,i=o.category)},[s,i,l,a,r]}class Ae extends D{constructor(e){super(),q(this,e,Ot,Ft,K,{taskList:0,category:1})}}function vt(t){let e,n,s,i,l,a,r,o;return e=new ut({}),s=new St({}),l=new Ae({props:{category:"In-Progress",taskList:t[0]}}),r=new Ae({props:{category:"Finished",taskList:t[1]}}),{c(){B(e.$$.fragment),n=C(),B(s.$$.fragment),i=C(),B(l.$$.fragment),a=C(),B(r.$$.fragment)},m(u,c){O(e,u,c),T(u,n,c),O(s,u,c),T(u,i,c),O(l,u,c),T(u,a,c),O(r,u,c),o=!0},p(u,c){const f={};c&1&&(f.taskList=u[0]),l.$set(f);const p={};c&2&&(p.taskList=u[1]),r.$set(p)},i(u){o||(b(e.$$.fragment,u),b(s.$$.fragment,u),b(l.$$.fragment,u),b(r.$$.fragment,u),o=!0)},o(u){$(e.$$.fragment,u),$(s.$$.fragment,u),$(l.$$.fragment,u),$(r.$$.fragment,u),o=!1},d(u){u&&(y(n),y(i),y(a)),v(e,u),v(s,u),v(l,u),v(r,u)}}}function jt(t){let e,n;return e=new rt({props:{$$slots:{default:[vt]},$$scope:{ctx:t}}}),{c(){B(e.$$.fragment)},m(s,i){O(e,s,i),n=!0},p(s,[i]){const l={};i&7&&(l.$$scope={dirty:i,ctx:s}),e.$set(l)},i(s){n||(b(e.$$.fragment,s),n=!0)},o(s){$(e.$$.fragment,s),n=!1},d(s){v(e,s)}}}function Bt(t,e,n){let s,i;return ke(t,ht,l=>n(0,s=l)),ke(t,gt,l=>n(1,i=l)),[s,i]}class Wt extends D{constructor(e){super(),q(this,e,Bt,jt,K,{})}}new Wt({target:document.body});
