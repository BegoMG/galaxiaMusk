(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(r){if(r.ep)return;r.ep=!0;const l=s(r);fetch(r.href,l)}})();const pa=!1;var Ba=Array.isArray,tt=Array.prototype.indexOf,He=Array.from,rt=Object.defineProperty,da=Object.getOwnPropertyDescriptor,Fa=Object.getOwnPropertyDescriptors,Pa=Object.getPrototypeOf;function lt(e){return e()}function ga(e){for(var a=0;a<e.length;a++)e[a]()}const F=2,Sa=4,Ce=8,ze=16,U=32,le=64,ge=128,q=256,ve=512,E=1024,R=2048,J=4096,I=8192,$=16384,nt=32768,We=65536,it=1<<19,Oa=1<<20,va=Symbol("$state"),ot=Symbol("");function Ma(e){return e===this.v}function ct(e,a){return e!=e?a==a:e!==a||e!==null&&typeof e=="object"||typeof e=="function"}function Ia(e){return!ct(e,this.v)}function ft(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ut(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function pt(e){throw new Error("https://svelte.dev/e/effect_orphan")}function dt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function gt(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vt(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let ne=!1,ht=!1;function mt(){ne=!0}const _t=1,yt=2,xt=16,At=1,wt=2,Ct=Symbol();function he(e,a){var s={f:0,v:e,reactions:null,equals:Ma,rv:0,wv:0};return s}function Ga(e,a=!1){var t;const s=he(e);return a||(s.equals=Ia),ne&&_!==null&&_.l!==null&&((t=_.l).s??(t.s=[])).push(s),s}function ha(e,a=!1){return kt(Ga(e,a))}function kt(e){return h!==null&&h.f&F&&(G===null?Tt([e]):G.push(e)),e}function De(e,a){return h!==null&&be()&&h.f&(F|ze)&&(G===null||!G.includes(e))&&vt(),Da(e,a)}function Da(e,a){return e.equals(a)||(e.v,e.v=a,e.wv=$a(),Ta(e,R),be()&&m!==null&&m.f&E&&!(m.f&(U|le))&&(N===null?Nt([e]):N.push(e))),a}function Ta(e,a){var s=e.reactions;if(s!==null)for(var t=be(),r=s.length,l=0;l<r;l++){var n=s[l],p=n.f;p&R||!t&&n===m||(D(n,a),p&(E|q)&&(p&F?Ta(n,J):Be(n)))}}let Na=!1;var ma,Ua,Ra;function bt(){if(ma===void 0){ma=window;var e=Element.prototype,a=Node.prototype;Ua=da(a,"firstChild").get,Ra=da(a,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function qe(e=""){return document.createTextNode(e)}function me(e){return Ua.call(e)}function ke(e){return Ra.call(e)}function o(e,a){return me(e)}function Et(e,a){{var s=me(e);return s instanceof Comment&&s.data===""?ke(s):s}}function x(e,a=1,s=!1){let t=e;for(;a--;)t=ke(t);return t}function Bt(e){e.textContent=""}function ja(e){var a=F|R;m===null?a|=q:m.f|=Oa;var s=h!==null&&h.f&F?h:null;const t={children:null,ctx:_,deps:null,equals:Ma,f:a,fn:e,reactions:null,rv:0,v:null,wv:0,parent:s??m};return s!==null&&(s.children??(s.children=[])).push(t),t}function Ft(e){const a=ja(e);return a.equals=Ia,a}function La(e){var a=e.children;if(a!==null){e.children=null;for(var s=0;s<a.length;s+=1){var t=a[s];t.f&F?Ke(t):H(t)}}}function Pt(e){for(var a=e.parent;a!==null;){if(!(a.f&F))return a;a=a.parent}return null}function Ha(e){var a,s=m;Z(Pt(e));try{La(e),a=as(e)}finally{Z(s)}return a}function za(e){var a=Ha(e),s=(W||e.f&q)&&e.deps!==null?J:E;D(e,s),e.equals(a)||(e.v=a,e.wv=$a())}function Ke(e){La(e),re(e,0),D(e,$),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Wa(e){m===null&&h===null&&pt(),h!==null&&h.f&q&&ut(),Ve&&ft()}function St(e,a){var s=a.last;s===null?a.last=a.first=e:(s.next=e,e.prev=s,a.last=e)}function ie(e,a,s,t=!0){var r=(e&le)!==0,l=m,n={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|R,first:null,fn:a,last:null,next:null,parent:r?null:l,prev:null,teardown:null,transitions:null,wv:0};if(s){var p=V;try{_a(!0),Qe(n),n.f|=nt}catch(g){throw H(n),g}finally{_a(p)}}else a!==null&&Be(n);var c=s&&n.deps===null&&n.first===null&&n.nodes_start===null&&n.teardown===null&&(n.f&(Oa|ge))===0;if(!c&&!r&&t&&(l!==null&&St(n,l),h!==null&&h.f&F)){var f=h;(f.children??(f.children=[])).push(n)}return n}function Ue(e){Wa();var a=m!==null&&(m.f&U)!==0&&_!==null&&!_.m;if(a){var s=_;(s.e??(s.e=[])).push({fn:e,effect:m,reaction:h})}else{var t=qa(e);return t}}function Ot(e){return Wa(),It(e)}function Mt(e){const a=ie(le,e,!0);return(s={})=>new Promise(t=>{s.outro?_e(a,()=>{H(a),t(void 0)}):(H(a),t(void 0))})}function qa(e){return ie(Sa,e,!1)}function It(e){return ie(Ce,e,!0)}function Te(e){return Ye(e)}function Ye(e,a=0){return ie(Ce|ze|a,e,!0)}function te(e,a=!0){return ie(Ce|U,e,!0,a)}function Ka(e){var a=e.teardown;if(a!==null){const s=Ve,t=h;ya(!0),Q(null);try{a.call(null)}finally{ya(s),Q(t)}}}function Ya(e){var a=e.deriveds;if(a!==null){e.deriveds=null;for(var s=0;s<a.length;s+=1)Ke(a[s])}}function Xa(e,a=!1){var s=e.first;for(e.first=e.last=null;s!==null;){var t=s.next;H(s,a),s=t}}function Gt(e){for(var a=e.first;a!==null;){var s=a.next;a.f&U||H(a),a=s}}function H(e,a=!0){var s=!1;if((a||e.f&it)&&e.nodes_start!==null){for(var t=e.nodes_start,r=e.nodes_end;t!==null;){var l=t===r?null:ke(t);t.remove(),t=l}s=!0}Xa(e,a&&!s),Ya(e),re(e,0),D(e,$);var n=e.transitions;if(n!==null)for(const c of n)c.stop();Ka(e);var p=e.parent;p!==null&&p.first!==null&&Va(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Va(e){var a=e.parent,s=e.prev,t=e.next;s!==null&&(s.next=t),t!==null&&(t.prev=s),a!==null&&(a.first===e&&(a.first=t),a.last===e&&(a.last=s))}function _e(e,a){var s=[];Xe(e,s,!0),Qa(s,()=>{H(e),a&&a()})}function Qa(e,a){var s=e.length;if(s>0){var t=()=>--s||a();for(var r of e)r.out(t)}else a()}function Xe(e,a,s){if(!(e.f&I)){if(e.f^=I,e.transitions!==null)for(const n of e.transitions)(n.is_global||s)&&a.push(n);for(var t=e.first;t!==null;){var r=t.next,l=(t.f&We)!==0||(t.f&U)!==0;Xe(t,a,l?s:!1),t=r}}}function ye(e){Za(e,!0)}function Za(e,a){if(e.f&I){e.f^=I,e.f&E||(e.f^=E),oe(e)&&(D(e,R),Be(e));for(var s=e.first;s!==null;){var t=s.next,r=(s.f&We)!==0||(s.f&U)!==0;Za(s,r?a:!1),s=t}if(e.transitions!==null)for(const l of e.transitions)(l.is_global||a)&&l.in()}}function Dt(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let de=!1,xe=!1,Ae=null,V=!1,Ve=!1;function _a(e){V=e}function ya(e){Ve=e}let Re=[],se=0;let h=null;function Q(e){h=e}let m=null;function Z(e){m=e}let G=null;function Tt(e){G=e}let b=null,B=0,N=null;function Nt(e){N=e}let Ja=1,we=0,W=!1,_=null;function $a(){return++Ja}function be(){return!ne||_!==null&&_.l===null}function oe(e){var f;var a=e.f;if(a&R)return!0;if(a&J){var s=e.deps,t=(a&q)!==0;if(s!==null){var r,l,n=(a&ve)!==0,p=t&&m!==null&&!W,c=s.length;if(n||p){for(r=0;r<c;r++)l=s[r],(n||!((f=l==null?void 0:l.reactions)!=null&&f.includes(e)))&&(l.reactions??(l.reactions=[])).push(e);n&&(e.f^=ve)}for(r=0;r<c;r++)if(l=s[r],oe(l)&&za(l),l.wv>e.wv)return!0}(!t||m!==null&&!W)&&D(e,E)}return!1}function Ut(e,a){for(var s=a;s!==null;){if(s.f&ge)try{s.fn(e);return}catch{s.f^=ge}s=s.parent}throw de=!1,e}function Rt(e){return(e.f&$)===0&&(e.parent===null||(e.parent.f&ge)===0)}function Ee(e,a,s,t){if(de){if(s===null&&(de=!1),Rt(a))throw e;return}s!==null&&(de=!0);{Ut(e,a);return}}function es(e,a,s=0){var t=e.reactions;if(t!==null)for(var r=0;r<t.length;r++){var l=t[r];l.f&F?es(l,a,s+1):a===l&&(s===0?D(l,R):l.f&E&&D(l,J),Be(l))}}function as(e){var u;var a=b,s=B,t=N,r=h,l=W,n=G,p=_,c=e.f;b=null,B=0,N=null,h=c&(U|le)?null:e,W=!V&&(c&q)!==0,G=null,_=e.ctx,we++;try{var f=(0,e.fn)(),g=e.deps;if(b!==null){var i;if(re(e,B),g!==null&&B>0)for(g.length=B+b.length,i=0;i<b.length;i++)g[B+i]=b[i];else e.deps=g=b;if(!W)for(i=B;i<g.length;i++)((u=g[i]).reactions??(u.reactions=[])).push(e)}else g!==null&&B<g.length&&(re(e,B),g.length=B);if(be()&&N!==null&&!(e.f&(F|J|R)))for(i=0;i<N.length;i++)es(N[i],e);return r!==null&&we++,f}finally{b=a,B=s,N=t,h=r,W=l,G=n,_=p}}function jt(e,a){let s=a.reactions;if(s!==null){var t=tt.call(s,e);if(t!==-1){var r=s.length-1;r===0?s=a.reactions=null:(s[t]=s[r],s.pop())}}s===null&&a.f&F&&(b===null||!b.includes(a))&&(D(a,J),a.f&(q|ve)||(a.f^=ve),re(a,0))}function re(e,a){var s=e.deps;if(s!==null)for(var t=a;t<s.length;t++)jt(e,s[t])}function Qe(e){var a=e.f;if(!(a&$)){D(e,E);var s=m,t=_;m=e;try{a&ze?Gt(e):Xa(e),Ya(e),Ka(e);var r=as(e);e.teardown=typeof r=="function"?r:null,e.wv=Ja;var l=e.deps,n;pa&&ht&&e.f&R}catch(p){Ee(p,e,s,t||e.ctx)}finally{m=s}}}function Lt(){if(se>1e3){se=0;try{dt()}catch(e){if(Ae!==null)Ee(e,Ae,null);else throw e}}se++}function Ht(e){var a=e.length;if(a!==0){Lt();var s=V;V=!0;try{for(var t=0;t<a;t++){var r=e[t];r.f&E||(r.f^=E);var l=[];ss(r,l),zt(l)}}finally{V=s}}}function zt(e){var a=e.length;if(a!==0)for(var s=0;s<a;s++){var t=e[s];if(!(t.f&($|I)))try{oe(t)&&(Qe(t),t.deps===null&&t.first===null&&t.nodes_start===null&&(t.teardown===null?Va(t):t.fn=null))}catch(r){Ee(r,t,null,t.ctx)}}}function Wt(){if(xe=!1,se>1001)return;const e=Re;Re=[],Ht(e),xe||(se=0,Ae=null)}function Be(e){xe||(xe=!0,queueMicrotask(Wt)),Ae=e;for(var a=e;a.parent!==null;){a=a.parent;var s=a.f;if(s&(le|U)){if(!(s&E))return;a.f^=E}}Re.push(a)}function ss(e,a){var s=e.first,t=[];e:for(;s!==null;){var r=s.f,l=(r&U)!==0,n=l&&(r&E)!==0,p=s.next;if(!n&&!(r&I))if(r&Ce){if(l)s.f^=E;else try{oe(s)&&Qe(s)}catch(i){Ee(i,s,null,s.ctx)}var c=s.first;if(c!==null){s=c;continue}}else r&Sa&&t.push(s);if(p===null){let i=s.parent;for(;i!==null;){if(e===i)break e;var f=i.next;if(f!==null){s=f;continue e}i=i.parent}}s=p}for(var g=0;g<t.length;g++)c=t[g],a.push(c),ss(c,a)}function A(e){var g;var a=e.f,s=(a&F)!==0;if(s&&a&$){var t=Ha(e);return Ke(e),t}if(h!==null){G!==null&&G.includes(e)&&gt();var r=h.deps;e.rv<we&&(e.rv=we,b===null&&r!==null&&r[B]===e?B++:b===null?b=[e]:b.push(e))}else if(s&&e.deps===null)for(var l=e,n=l.parent,p=l;n!==null;)if(n.f&F){var c=n;p=c,n=c.parent}else{var f=n;(g=f.deriveds)!=null&&g.includes(p)||(f.deriveds??(f.deriveds=[])).push(p);break}return s&&(l=e,oe(l)&&za(l)),e.v}function ts(e){const a=h;try{return h=null,e()}finally{h=a}}const qt=-7169;function D(e,a){e.f=e.f&qt|a}function rs(e,a=!1,s){_={p:_,c:null,e:null,m:!1,s:e,x:null,l:null},ne&&!a&&(_.l={s:null,u:null,r1:[],r2:he(!1)})}function ls(e){const a=_;if(a!==null){const n=a.e;if(n!==null){var s=m,t=h;a.e=null;try{for(var r=0;r<n.length;r++){var l=n[r];Z(l.effect),Q(l.reaction),qa(l.fn)}}finally{Z(s),Q(t)}}_=a.p,a.m=!0}return{}}function Kt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(va in e)je(e);else if(!Array.isArray(e))for(let a in e){const s=e[a];typeof s=="object"&&s&&va in s&&je(s)}}}function je(e,a=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!a.has(e)){a.add(e),e instanceof Date&&e.getTime();for(let t in e)try{je(e[t],a)}catch{}const s=Pa(e);if(s!==Object.prototype&&s!==Array.prototype&&s!==Map.prototype&&s!==Set.prototype&&s!==Date.prototype){const t=Fa(s);for(let r in t){const l=t[r].get;if(l)try{l.call(e)}catch{}}}}}const Yt=["touchstart","touchmove"];function Xt(e){return Yt.includes(e)}const Vt=new Set,xa=new Set;function ue(e){var y;var a=this,s=a.ownerDocument,t=e.type,r=((y=e.composedPath)==null?void 0:y.call(e))||[],l=r[0]||e.target,n=0,p=e.__root;if(p){var c=r.indexOf(p);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var f=r.indexOf(a);if(f===-1)return;c<=f&&(n=c)}if(l=r[n]||e.target,l!==a){rt(e,"currentTarget",{configurable:!0,get(){return l||s}});var g=h,i=m;Q(null),Z(null);try{for(var u,d=[];l!==null;){var v=l.assignedSlot||l.parentNode||l.host||null;try{var w=l["__"+t];if(w!==void 0&&!l.disabled)if(Ba(w)){var[j,...O]=w;j.apply(l,[e,...O])}else w.call(l,e)}catch(k){u?d.push(k):u=k}if(e.cancelBubble||v===a||v===null)break;l=v}if(u){for(let k of d)queueMicrotask(()=>{throw k});throw u}}finally{e.__root=a,delete e.currentTarget,Q(g),Z(i)}}}function Qt(e){var a=document.createElement("template");return a.innerHTML=e,a.content}function Le(e,a){var s=m;s.nodes_start===null&&(s.nodes_start=e,s.nodes_end=a)}function Fe(e,a){var s=(a&At)!==0,t=(a&wt)!==0,r,l=!e.startsWith("<!>");return()=>{r===void 0&&(r=Qt(l?e:"<!>"+e),s||(r=me(r)));var n=t?document.importNode(r,!0):r.cloneNode(!0);if(s){var p=me(n),c=n.lastChild;Le(p,c)}else Le(n,n);return n}}function Zt(){var e=document.createDocumentFragment(),a=document.createComment(""),s=qe();return e.append(a,s),Le(a,s),e}function ae(e,a){e!==null&&e.before(a)}function Ne(e,a){var s=a==null?"":typeof a=="object"?a+"":a;s!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=s,e.nodeValue=s==null?"":s+"")}function Jt(e,a){return $t(e,a)}const X=new Map;function $t(e,{target:a,anchor:s,props:t={},events:r,context:l,intro:n=!0}){bt();var p=new Set,c=i=>{for(var u=0;u<i.length;u++){var d=i[u];if(!p.has(d)){p.add(d);var v=Xt(d);a.addEventListener(d,ue,{passive:v});var w=X.get(d);w===void 0?(document.addEventListener(d,ue,{passive:v}),X.set(d,1)):X.set(d,w+1)}}};c(He(Vt)),xa.add(c);var f=void 0,g=Mt(()=>{var i=s??a.appendChild(qe());return te(()=>{if(l){rs({});var u=_;u.c=l}r&&(t.$$events=r),f=e(i,t)||{},l&&ls()}),()=>{var v;for(var u of p){a.removeEventListener(u,ue);var d=X.get(u);--d===0?(document.removeEventListener(u,ue),X.delete(u)):X.set(u,d)}xa.delete(c),i!==s&&((v=i.parentNode)==null||v.removeChild(i))}});return er.set(f,g),f}let er=new WeakMap;function Aa(e,a,s=!1){var t=e,r=null,l=null,n=Ct,p=s?We:0,c=!1;const f=(i,u=!0)=>{c=!0,g(u,i)},g=(i,u)=>{n!==(n=i)&&(n?(r?ye(r):u&&(r=te(()=>u(t))),l&&_e(l,()=>{l=null})):(l?ye(l):u&&(l=te(()=>u(t))),r&&_e(r,()=>{r=null})))};Ye(()=>{c=!1,a(f),c||g(null,null)},p)}function ar(e,a){return a}function sr(e,a,s,t){for(var r=[],l=a.length,n=0;n<l;n++)Xe(a[n].e,r,!0);var p=l>0&&r.length===0&&s!==null;if(p){var c=s.parentNode;Bt(c),c.append(s),t.clear(),L(e,a[0].prev,a[l-1].next)}Qa(r,()=>{for(var f=0;f<l;f++){var g=a[f];p||(t.delete(g.k),L(e,g.prev,g.next)),H(g.e,!p)}})}function tr(e,a,s,t,r,l=null){var n=e,p={flags:a,items:new Map,first:null};{var c=e;n=c.appendChild(qe())}var f=null,g=!1,i=Ft(()=>{var u=s();return Ba(u)?u:u==null?[]:He(u)});Ye(()=>{var u=A(i),d=u.length;if(!(g&&d===0)){g=d===0;{var v=h;rr(u,p,n,r,a,(v.f&I)!==0,t)}l!==null&&(d===0?f?ye(f):f=te(()=>l(n)):f!==null&&_e(f,()=>{f=null})),A(i)}})}function rr(e,a,s,t,r,l,n,p){var c=e.length,f=a.items,g=a.first,i=g,u,d=null,v=[],w=[],j,O,y,k;for(k=0;k<c;k+=1){if(j=e[k],O=n(j,k),y=f.get(O),y===void 0){var Pe=i?i.e.nodes_start:s;d=nr(Pe,a,d,d===null?a.first:d.next,j,O,k,t,r),f.set(O,d),v=[],w=[],i=d.next;continue}if(lr(y,j,k),y.e.f&I&&ye(y.e),y!==i){if(u!==void 0&&u.has(y)){if(v.length<w.length){var z=w[0],M;d=z.prev;var ce=v[0],ee=v[v.length-1];for(M=0;M<v.length;M+=1)wa(v[M],z,s);for(M=0;M<w.length;M+=1)u.delete(w[M]);L(a,ce.prev,ee.next),L(a,d,ce),L(a,ee,z),i=z,d=ee,k-=1,v=[],w=[]}else u.delete(y),wa(y,i,s),L(a,y.prev,y.next),L(a,y,d===null?a.first:d.next),L(a,d,y),d=y;continue}for(v=[],w=[];i!==null&&i.k!==O;)(l||!(i.e.f&I))&&(u??(u=new Set)).add(i),w.push(i),i=i.next;if(i===null)continue;y=i}v.push(y),d=y,i=y.next}if(i!==null||u!==void 0){for(var K=u===void 0?[]:He(u);i!==null;)(l||!(i.e.f&I))&&K.push(i),i=i.next;var Se=K.length;if(Se>0){var Oe=c===0?s:null;sr(a,K,Oe,f)}}m.first=a.first&&a.first.e,m.last=d&&d.e}function lr(e,a,s,t){Da(e.v,a),e.i=s}function nr(e,a,s,t,r,l,n,p,c,f){var g=(c&_t)!==0,i=(c&xt)===0,u=g?i?Ga(r):he(r):r,d=c&yt?he(n):n,v={i:d,v:u,k:l,a:null,e:null,prev:s,next:t};try{return v.e=te(()=>p(e,u,d),Na),v.e.prev=s&&s.e,v.e.next=t&&t.e,s===null?a.first=v:(s.next=v,s.e.next=v.e),t!==null&&(t.prev=v,t.e.prev=v.e),v}finally{}}function wa(e,a,s){for(var t=e.next?e.next.e.nodes_start:s,r=a?a.e.nodes_start:s,l=e.e.nodes_start;l!==t;){var n=ke(l);r.before(l),l=n}}function L(e,a,s){a===null?e.first=s:(a.next=s,a.e.next=s&&s.e),s!==null&&(s.prev=a,s.e.prev=a&&a.e)}function pe(e,a,s,t){var r=e.__attributes??(e.__attributes={});r[a]!==(r[a]=s)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[ot]=s),s==null?e.removeAttribute(a):typeof s!="string"&&ir(e).includes(a)?e[a]=s:e.setAttribute(a,s))}function C(e,a,s){e.setAttributeNS("http://www.w3.org/1999/xlink",a,s)}var Ca=new Map;function ir(e){var a=Ca.get(e.nodeName);if(a)return a;Ca.set(e.nodeName,a=[]);for(var s,t=e,r=Element.prototype;r!==t;){s=Fa(t);for(var l in s)s[l].set&&a.push(l);t=Pa(t)}return a}function ka(e,a,s){var t=e.__className,r=or(a);(t!==r||Na)&&(a==null?e.removeAttribute("class"):e.className=r,e.__className=r)}function or(e,a){return(e??"")+""}function cr(e=!1){const a=_,s=a.l.u;if(!s)return;let t=()=>Kt(a.s);if(e){let r=0,l={};const n=ja(()=>{let p=!1;const c=a.s;for(const f in c)c[f]!==l[f]&&(l[f]=c[f],p=!0);return p&&r++,r});t=()=>A(n)}s.b.length&&Ot(()=>{ba(a,t),ga(s.b)}),Ue(()=>{const r=ts(()=>s.m.map(lt));return()=>{for(const l of r)typeof l=="function"&&l()}}),s.a.length&&Ue(()=>{ba(a,t),ga(s.a)})}function ba(e,a){if(e.l.s)for(const s of e.l.s)A(s);a()}function fr(e){_===null&&Dt(),ne&&_.l!==null?ur(_).m.push(e):Ue(()=>{const a=ts(e);if(typeof a=="function")return a})}function ur(e){var a=e.l;return a.u??(a.u={a:[],b:[],m:[]})}const pr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(pr);mt();const dr="/galaxiaMusk/assets/Musk-nv2c-gzv.jpg",gr="/galaxiaMusk/assets/VanceFoto-Dr7QSpRm.jpg",vr="/galaxiaMusk/assets/Thielfoto-hzBHLgXc.jpg",hr="/galaxiaMusk/assets/Sacks2-Njwz88tw.jpg",mr="/galaxiaMusk/assets/andre-BwMty2KH.jpg",_r="/galaxiaMusk/assets/horow-D-XM9fJt.jpg",yr="/galaxiaMusk/assets/paliha2-CXhQcyow.png",xr="/galaxiaMusk/assets/calacanis-BnKyP2xk.jpg",Ar="/galaxiaMusk/assets/friedberg-edjLv7Ga.jpg",wr="/galaxiaMusk/assets/steve_davisfoto-Bpnts-30.png",Cr="/galaxiaMusk/assets/Afshar-CuJyHcQv.jpg",kr="/galaxiaMusk/assets/ackmanfoto-CBWCqebf.jpg",br="/galaxiaMusk/assets/foto_generica-D_MkyS1W.png",Er="/galaxiaMusk/assets/maguire-DnP--DFw.png",Br="/galaxiaMusk/assets/krishnanfoto-BJCslwlZ.png",Fr="/galaxiaMusk/assets/kuporfoto-KdYSeQy5.jpg",Pr="/galaxiaMusk/assets/ramas-Cd2xACMs.jpg",Sr="/galaxiaMusk/assets/paypalLogo-BdAEJeUj.png",Or="/galaxiaMusk/assets/andreLogo-yhj07WfO.png",Mr="/galaxiaMusk/assets/allIn-Cw0jXwsN.jpg",Ir="/galaxiaMusk/assets/logoWH-B96ZHVsZ.png",Gr="/galaxiaMusk/assets/noWHlogo-CdvuHlJU.png",Dr="/galaxiaMusk/assets/logoFacebook-DlrItCDU.png",Tr="/galaxiaMusk/assets/logoPalantir-C1uS_DP4.png",Nr="/galaxiaMusk/assets/teslaLogo-nbIaIY_e.png",Ur="data:image/png;base64,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",Rr="/galaxiaMusk/assets/boringLogo-a8QnJSIt.png",jr="/galaxiaMusk/assets/netscapeLogo-RK-x8occ.png",Lr="/galaxiaMusk/assets/pershingLogo-BG192UBP.png",Hr="/galaxiaMusk/assets/seqLogo-xrWmng-X.png",zr=[{id:"1",nombre:"Elon Musk",nacim:"Pretoria, 1971",foto:dr,descr:"Al frente del Departamento de Eficiencia Gubernamental de la Casa Blanca. Fundador, consejero delegado e ingeniero en jefe de SpaceX; director de Tesla, Inc.; fundador de The Boring Company; y cofundador de Neuralink y OpenAI.  Además, es el director de tecnología de X Corp. ",empresas:["Paypal","Spacex","Boring","Casablanca"],rel:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]},{id:"2",nombre:"J.D. Vance",nacim:"Middletown, Ohio, 1984",foto:gr,descr:"Vicepresidente de Estados Unidos. Senador por Ohio 2023-2025. Ejerció brevemente como abogado corporativo antes de emprender una carrera en la industria tecnológica y como capitalista de riesgo. Trabajo para Peter Thiel, quien apoyó su carrera al Senado.",empresas:["Casablanca"],rel:[1,3]},{id:"3",nombre:"Peter Thiel",nacim:"Frankfurt, 1967",foto:vr,descr:"Fundó PayPal junto con Elon Musk. Primer inversor externo de Facebook, cofundador de Palantir, la más importante empresa de seguridad y espionaje electrónico del mundo. Socio fundador de The Funders Fund, apoyó la candidatura de Trump en 2016 y financió la carrera al Senado en 2022 del hoy vicepresidente J.D. Vance.",empresas:["Paypal","Facebook","Palantir"],rel:[1,2]},{id:"4",nombre:"David Sacks",nacim:"Ciudad del Cabo, 1972",foto:hr,descr:"Fue director de operaciones de PayPal en su fundación. Ayudó a Musk tras su compra de Twitter. Socio fundador de la firma de capital riesgo Craft Ventures. Anfitrión del podcast All-In lanzado por cuatro capitalistas de riesgo en 2020 durante la pandemia. Será el zar de la Inteligencia Artificial y las criptomonedas de Trump.",empresas:["Paypal","Allin","Casablanca"],rel:[1,7,8,9]},{id:"5",nombre:"Marc Andreessen",nacim:"Cedar Falls, Iowa, 1971",foto:mr,descr:"Codundador de Netscape y de Mosaic, uno de los primeros navegadores web con interfaz gráfica. Uno de los principales socios de la sociedad de capital de riesgo Andreessen Horowitz, invierte en nuevos sectores, en particular educación y salud, así como en bitcoin.",empresas:["Andhor","Netscape"],rel:[1,6,16]},{id:"6",nombre:"Ben Horowitz",nacim:"Londres, 1966",foto:_r,descr:"Socio principal de Andreesen-Horowitz, creó a16z, un Fondo de Liderazgo Cultural, y escribe en el blog a16z en el sitio de la compañía. Autor de éxito, tiene publicado en España Emprender y liderar una start up: el duro camino hasta el éxito.",empresas:["Andhor"],rel:[1,5,16]},{id:"7",nombre:"Chamath Palihapitiya",nacim:"Sri Lanka, 1976",foto:yr,descr:"Fundador y consejero delegado de Social Capital, una empresa de capital riesgo centrada en la salud, los servicios financieros y la educación. Uno de los cuatro anfitriones del podcast All-In.",empresas:["Allin"],rel:[1,4,8,9]},{id:"8",nombre:"Jason Calacanis",nacim:"Bay Ridge, Nueva York, 1970",foto:xr,descr:"Emprendedor e inversor en empresas tecnológicas emergentes es el presentador y uno de los cuatro anfitriones del podcast All-In.",empresas:["Allin"],rel:[1,4,7,9]},{id:"9",nombre:"David Friedberg",nacim:"Sudáfrica, 1980",foto:Ar,descr:"Fundador y consejero delegado de The Production Board, un holding centrado en la alimentación, la agricultura y las ciencias de la vida. Es uno de los cuatro anfitriones del podcast All-In.",empresas:["Allin"],rel:[1,4,7,8]},{id:"10",nombre:"Steve Davis",nacim:" ",foto:wr,descr:"Presidente de The Boring Company (TBC), la empresa de infraestructura, servicio de construcción de túneles y equipos fundada por Elon Musk. TBC fue fundada como una subsidiaria de SpaceX en 2017, y se escindió como una corporación separada en 2018.",empresas:["Boring"],rel:[1,11,12,13]},{id:"11",nombre:"Omead Afshar",nacim:"California, 1987",foto:Cr,descr:"Se describe como bombero de Musk. Ayudó a supervisar la construcción de la vasta fábrica de automóviles de Tesla, Giga Texas. Vicepresidente de Tesla responsable de los mercados de norteamérica y Europa.",empresas:["Tesla"],rel:[1,10,12,13]},{id:"12",nombre:"Bill Ackman",nacim:"Nueva York, 1966",foto:kr,descr:"Dirige el fondo Pershing Square y se ha convertido en uno de los interlocutores más frecuentes de Musk en X, con quien intercambia ideas para la política comercial, fiscal e inmigración.",empresas:["Pershing"],rel:[1,10,11,13]},{id:"13",nombre:"Jared Birchall",nacim:"Modesto, California, 1974",foto:br,descr:"Gestor del patrimonio de Musk. Ocupa altos cargos en Boring, xAI y Neuralink, onde es director ejecutivo. Estuvo en el núcleo del acuerdo con Twitter, negociando con la junta, presionando a los accionistas y recaudando fondos.",empresas:["Boring","Neuralink"],rel:[1,10,11,12]},{id:"14",nombre:"Shaun Maguire",nacim:" ",foto:Er,descr:"Amigo de Musk obsesionado con el espacio es socio en Sequoia Capital, ha sido un elemento básico del equipo de transición de Trump entrevistando a posibles candidatos para puestos de alto nivel en el Departamento de Defensa.",empresas:["Sequoia"],rel:[1]},{id:"15",nombre:"Sriram Krishnan",nacim:"Chennai, India, 1985",foto:Br,descr:"Consejero para la Inteligencia Artificial de la Casa Blanca. Trabajará con David Sacks. La base antiinmigración republicana arremetió contra su nombramiento. Se unió al equipo de Musk tras la adquisición de Twitter. En Londres abrió una sucursal de Andreessen-Horowitz y aprovechó para poner en contacto a Musk con Boris Johnson.",empresas:["Casablanca","Andhor"],rel:[1,4,5,6]},{id:"16",nombre:"Scott Kupor",nacim:"New Haven, Connecticut,1971",foto:Fr,descr:"Director de la Oficina de Gestión de Personal de la Administración Trump. Socio en Andreessen-Horowitz.",empresas:["Casablanca","Andhor"],rel:[1,5,6]},{id:"17",nombre:"Vivek Ramaswamy",nacim:"Cincinnati, Ohio, 1985",foto:Pr,descr:"Renuncia en el último momento a codirigir con Musk el Departamento de Eficiencia Gubernamental por sus diferencias con él. Autor y empresario. Disputó las primarias republicanas  a la presidencia de Estados Unidos en 2024. ",empresas:["noCasablanca"],rel:[1]}],Ea={Paypal:Sr,Andhor:Or,Allin:Mr,Casablanca:Ir,noCasablanca:Gr,Facebook:Dr,Palantir:Tr,Tesla:Nr,Spacex:Ur,Boring:Rr,Netscape:jr,Pershing:Lr,Sequoia:Hr},Wr="/galaxiaMusk/assets/musk-CdGh54EN.png",qr="/galaxiaMusk/assets/j-d-vance-300x300-color-C1LiOZ2q.png",Kr="/galaxiaMusk/assets/peter-thiel-300x300-color-DKqBNHEM.png",Yr="/galaxiaMusk/assets/david-sacks-300x300-1-color-DbqFH_-3.png",Xr="/galaxiaMusk/assets/marc-anfreessen-300x300-2-color-DWGTQz4N.png",Vr="/galaxiaMusk/assets/ben-horowitz-300x300-color-DUIe0qlu.png",Qr="/galaxiaMusk/assets/chamath-palihapitiya-300x300-1-color-s0EGsG4x.png",Zr="/galaxiaMusk/assets/calacanis-BcK1wDuR.png",Jr="/galaxiaMusk/assets/Friedberg-C6d9Ow38.png",$r="/galaxiaMusk/assets/steve-davis-300x300-2-color-BKKhBjJf.png",el="/galaxiaMusk/assets/omear-afshar-300x300-color-BTrKTh_B.png",al="/galaxiaMusk/assets/bill-ackman-300x300-2-color-DndI8zq1.png",sl="/galaxiaMusk/assets/jared-birchall-300x300-2-color-_0_Suf3V.png",tl="/galaxiaMusk/assets/maguireSil-DIygcei8.png",rl="/galaxiaMusk/assets/sriram-krishnan-300x300-1-color-HpON1mTk.png",ll="/galaxiaMusk/assets/scott-kupor-300x300-color-CRGi2QHR.png",nl="/galaxiaMusk/assets/vivek-ramasawamy-300x300-1-color-Bu27vi-m.png";var il=Fe('<img class="lv_empresa-logo svelte-acvyfk">'),ol=Fe('<div class="lv_persona-content svelte-acvyfk"><div class="lv_persona-row svelte-acvyfk"><div class="lv_persona-col lv_personaId svelte-acvyfk"><h2 class="svelte-acvyfk"> </h2> <p class="svelte-acvyfk"> </p> <div class="lv_empresas svelte-acvyfk"></div></div> <div class="lv_persona-col lv_image-container svelte-acvyfk"><img class="svelte-acvyfk"></div></div> <div class="lv_persona-row lv_description svelte-acvyfk"><p class="svelte-acvyfk"> </p></div></div>'),cl=Fe(`<div class="lv_galaxia svelte-acvyfk"><div class="lv_leyenda svelte-acvyfk"><div class="lv_leyendaCont svelte-acvyfk"><h1 class="svelte-acvyfk">Silicon Valley toma el poder</h1> <p class="instr svelte-acvyfk">Haz click sobre cada perfil para saber más</p></div></div> <div><!></div> <div><svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 738 986.36"><defs><style>.cls-1, .cls-2 {
            fill: none;
          }
    
          .cls-3 {
            filter: url(#drop-shadow-1);
          }
    
          .cls-4 {
            filter: url(#drop-shadow-3);
          }
    
          .cls-5 {
            filter: url(#drop-shadow-2);
          }
    
          .cls-6 {
            filter: url(#drop-shadow-9);
          }
    
          .cls-7 {
            filter: url(#drop-shadow-6);
          }
    
          .cls-8 {
            filter: url(#drop-shadow-7);
          }
    
          .cls-9 {
            filter: url(#drop-shadow-8);
          }
    
          .cls-10 {
            filter: url(#drop-shadow-5);
          }
    
          .cls-11 {
            filter: url(#drop-shadow-4);
          }
    
          .cls-12 {
            font-size: 12.2px;
          }
    
          .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20, .cls-21, .cls-22, .cls-23, .cls-24, .cls-25, .cls-26 {
            font-family: Roboto-Bold, Roboto;
            font-weight: 700;
          }
    
          .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-19, .cls-20, .cls-23, .cls-24, .cls-25, .cls-26 {
            fill: #fff;
          }
    
          .cls-13 {
            font-size: 13.75px;
          }
    
          .cls-14 {
            font-size: 13.84px;
          }
    
          .cls-27 {
            fill: #b7b20d;
            opacity: .21;
          }
    
          .cls-28 {
            clip-path: url(#clippath-11);
          }
    
          .cls-29 {
            clip-path: url(#clippath-16);
          }
    
          .cls-30 {
            clip-path: url(#clippath-10);
          }
    
          .cls-31 {
            clip-path: url(#clippath-15);
          }
    
          .cls-32 {
            clip-path: url(#clippath-13);
          }
    
          .cls-33 {
            clip-path: url(#clippath-14);
          }
    
          .cls-34 {
            clip-path: url(#clippath-12);
          }
    
          .cls-35 {
            filter: url(#drop-shadow-13);
          }
    
          .cls-36 {
            filter: url(#drop-shadow-16);
          }
    
          .cls-37 {
            filter: url(#drop-shadow-14);
          }
    
          .cls-38 {
            filter: url(#drop-shadow-17);
          }
    
          .cls-39 {
            filter: url(#drop-shadow-12);
          }
    
          .cls-40 {
            filter: url(#drop-shadow-11);
          }
    
          .cls-41 {
            filter: url(#drop-shadow-10);
          }
    
          .cls-42 {
            filter: url(#drop-shadow-15);
          }
    
          .cls-43 {
            clip-path: url(#clippath-1);
          }
    
          .cls-44 {
            clip-path: url(#clippath-3);
          }
    
          .cls-45 {
            clip-path: url(#clippath-4);
          }
    
          .cls-46 {
            clip-path: url(#clippath-2);
          }
    
          .cls-47 {
            clip-path: url(#clippath-7);
          }
    
          .cls-48 {
            clip-path: url(#clippath-6);
          }
    
          .cls-49 {
            clip-path: url(#clippath-9);
          }
    
          .cls-50 {
            clip-path: url(#clippath-8);
          }
    
          .cls-51 {
            clip-path: url(#clippath-5);
          }
    
          .cls-15 {
            font-size: 13.64px;
          }
    
          .cls-52 {
            letter-spacing: 0em;
          }
    
          .cls-53 {
            letter-spacing: 0em;
          }
    
          .cls-54 {
            letter-spacing: 0em;
          }
    
          .cls-55 {
            letter-spacing: 0em;
          }
    
          .cls-56 {
            letter-spacing: 0em;
          }
    
          .cls-16 {
            font-size: 14.15px;
          }
    
          .cls-17 {
            font-size: 20.14px;
          }
    
          .cls-18 {
            font-size: 21px;
          }
    
          .cls-57 {
            fill: #994f59;
            opacity: .28;
          }
    
          .cls-19 {
            font-size: 20.75px;
          }
    
          .cls-20 {
            font-size: 11.83px;
          }
    
          .cls-58 {
            letter-spacing: 0em;
          }
    
          .cls-21 {
            font-size: 18.83px;
          }
    
          .cls-2 {
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: .75px;
          }
    
          .cls-22 {
            font-size: 18px;
          }
    
          .cls-23 {
            font-size: 12.68px;
          }
    
          .cls-59 {
            letter-spacing: -.09em;
          }
    
          .cls-60 {
            letter-spacing: -.09em;
          }
    
          .cls-61 {
            letter-spacing: -.09em;
          }
    
          .cls-62 {
            letter-spacing: -.06em;
          }
    
          .cls-63 {
            letter-spacing: -.07em;
          }
    
          .cls-64 {
            letter-spacing: -.07em;
          }
    
          .cls-65 {
            letter-spacing: -.2em;
          }
    
          .cls-66 {
            letter-spacing: -.1em;
          }
    
          .cls-67 {
            letter-spacing: -.02em;
          }
    
          .cls-68 {
            letter-spacing: -.04em;
          }
    
          .cls-69 {
            letter-spacing: -.04em;
          }
    
          .cls-70 {
            letter-spacing: -.03em;
          }
    
          .cls-71 {
            letter-spacing: -.03em;
          }
    
          .cls-72 {
            letter-spacing: -.03em;
          }
    
          .cls-24 {
            font-size: 17.84px;
          }
    
          .cls-73 {
            fill: #2181a3;
            opacity: .2;
          }
    
          .cls-25 {
            font-size: 18.79px;
          }
    
          .cls-74 {
            clip-path: url(#clippath);
          }
    
          .cls-26 {
            font-size: 18.89px;
          }
    
          .cls-75 {
            letter-spacing: 0em;
          }
    
          .cls-76 {
            letter-spacing: 0em;
          }
    
          .cls-77 {
            letter-spacing: 0em;
          }</style><filter id="drop-shadow-1" x="277" y="349.36" width="197" height="197" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath"><circle class="cls-1" cx="369.79" cy="441.75" r="77.21"></circle></clipPath><filter id="drop-shadow-2" x="302" y="55.36" width="183" height="183" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-2" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-2" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-1"><circle class="cls-1" cx="387.26" cy="140.63" r="70.26"></circle></clipPath><filter id="drop-shadow-3" x="23" y="629.36" width="138" height="140" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-3" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-3" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-2"><ellipse class="cls-1" cx="86.33" cy="693.12" rx="47.47" ry="48.61"></ellipse></clipPath><filter id="drop-shadow-4" x="149" y="622.36" width="145" height="146" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-4" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-4" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-3"><circle class="cls-1" cx="215.16" cy="689.29" r="51.16"></circle></clipPath><filter id="drop-shadow-5" x="279" y="699.36" width="193" height="195" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-5" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-5" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-4"><circle class="cls-1" cx="369.5" cy="789.94" r="74.92"></circle></clipPath><filter id="drop-shadow-6" x="125" y="88.36" width="183" height="182" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-6" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-6" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-5"><circle class="cls-1" cx="210.76" cy="173.26" r="69.9"></circle></clipPath><filter id="drop-shadow-7" x="4" y="104.36" width="131" height="131" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-7" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-7" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-6"><circle class="cls-1" cx="63.12" cy="163.9" r="44.01"></circle></clipPath><filter id="drop-shadow-8" x="492" y="650.36" width="146" height="146" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-8" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-8" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-7"><circle class="cls-1" cx="559.18" cy="717.63" r="51.47"></circle></clipPath><filter id="drop-shadow-9" x="607" y="650.36" width="146" height="146" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-9" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-9" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-8"><circle class="cls-1" cx="673.7" cy="717.19" r="51.47"></circle></clipPath><filter id="drop-shadow-10" x="491" y="807.36" width="145" height="146" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-10" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-10" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-9"><circle class="cls-1" cx="557.47" cy="873.93" r="51.47"></circle></clipPath><filter id="drop-shadow-11" x="604" y="807.36" width="145" height="146" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-11" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-11" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-10"><circle class="cls-1" cx="670.47" cy="873.93" r="51.47"></circle></clipPath><filter id="drop-shadow-12" x="82" y="839.36" width="134" height="133" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-12" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-12" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-11"><circle class="cls-1" cx="142.69" cy="899.74" r="45.38"></circle></clipPath><filter id="drop-shadow-13" x="6" y="259.36" width="122" height="123" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-13" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-13" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-12"><circle class="cls-1" cx="60.97" cy="315.15" r="39.97"></circle></clipPath><filter id="drop-shadow-14" x="2" y="413.36" width="131" height="131" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-14" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-14" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-13"><circle class="cls-1" cx="61.17" cy="473.27" r="44.01"></circle></clipPath><filter id="drop-shadow-15" x="537" y="-15.64" width="175" height="176" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-15" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-15" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-14"><circle class="cls-1" cx="618.36" cy="66.36" r="66.36"></circle></clipPath><filter id="drop-shadow-16" x="607" y="391.36" width="149" height="149" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-16" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-16" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-15"><circle class="cls-1" cx="675.12" cy="459.56" r="53.06"></circle></clipPath><filter id="drop-shadow-17" x="547" y="213.36" width="148" height="148" filterUnits="userSpaceOnUse"><feOffset dx="6" dy="6"></feOffset><feGaussianBlur result="blur-17" stdDeviation="7"></feGaussianBlur><feFlood flood-color="#000" flood-opacity=".75"></feFlood><feComposite in2="blur-17" operator="in"></feComposite><feComposite in="SourceGraphic"></feComposite></filter><clipPath id="clippath-16"><circle class="cls-1" cx="615.27" cy="281.19" r="52.62"></circle></clipPath></defs><path class="cls-73" d="M7.31,49.36h287.39c4.04,0,7.31,4.18,7.31,9.34v322.14c0,5.16-3.27,9.34-7.31,9.34h-153.79c-4.04,0-7.31,4.18-7.31,9.34v165.5c0,5.16-3.27,9.34-7.31,9.34H7.31c-4.04,0-7.31-4.18-7.31-9.34V58.7c0-5.16,3.27-9.34,7.31-9.34Z"></path><path class="cls-57" d="M146.91,7.36h341.59c4.15,0,7.51,3.77,7.51,8.42v582.98c0,4.75-3.44,8.6-7.67,8.6h-226.94c-4.27,0-7.72-3.88-7.72-8.66v-270.6c0-4.49-3.25-8.12-7.25-8.12l-97.97.14c-4.19,0-7.6-3.79-7.63-8.49l-1.53-295.68c-.02-4.74,3.39-8.59,7.61-8.59Z"></path><rect class="cls-27" x="496" y="610.36" width="242" height="376" rx="8.05" ry="8.05"></rect><g id="Musk" class="lv_galaxiaPersona svelte-acvyfk" data-persona="1"><g class="cls-3"><g class="cls-74"><image width="486" height="484" transform="translate(285.63 360.68) scale(.35 .34)"></image></g></g><g><rect x="298.13" y="534" width="153.58" height="41.51" rx="10" ry="10"></rect><text class="cls-19" transform="translate(317.63 562.51)"><tspan x="0" y="0">E</tspan><tspan class="cls-72" x="11.67" y="0">L</tspan><tspan class="cls-53" x="22.26" y="0">ON MUSK</tspan></text></g></g><g id="Thiel" class="lv_galaxiaPersona svelte-acvyfk" data-persona="3"><g class="cls-5"><g class="cls-43"><image width="300" height="300" transform="translate(314 70.36) scale(.49 .47)"></image></g></g><g><rect x="322.05" y="224.59" width="139.77" height="37.78" rx="10" ry="10"></rect><text class="cls-26" transform="translate(352.38 251.43)"><tspan class="cls-65" x="0" y="0">P</tspan><tspan class="cls-56" x="8.46" y="0">.</tspan><tspan class="cls-70" x="13.94" y="0"></tspan><tspan class="cls-56" x="18.1" y="0">THIEL</tspan></text></g></g><g id="Andreessen" class="lv_galaxiaPersona svelte-acvyfk" data-persona="5"><g class="cls-4"><g class="cls-46"><image width="300" height="300" transform="translate(26.94 637.92) scale(.4)"></image></g></g><g><rect x="26" y="751.2" width="119" height="27.28" rx="10" ry="10"></rect><text class="cls-15" transform="translate(33.24 769.94) scale(.98 1)"><tspan x="0" y="0">M. ANDREESSEN</tspan></text></g></g><g id="Horowitz" class="lv_galaxiaPersona svelte-acvyfk" data-persona="6"><g class="cls-11"><g class="cls-44"><image width="300" height="300" transform="translate(157 636.36) scale(.35)"></image></g></g><g><rect x="155.68" y="750.43" width="101.77" height="27.51" rx="10" ry="10"></rect><text class="cls-13" transform="translate(163.84 769.32)"><tspan x="0" y="0">B. HOROWITZ</tspan></text></g></g><g id="Maguire" class="lv_galaxiaPersona svelte-acvyfk" data-persona="14"><g class="cls-10"><g class="cls-45"><image width="150" height="151" transform="translate(283 720.36) scale(1.15)"></image></g></g><g><rect x="299.96" y="879.47" width="149.04" height="40.28" rx="10" ry="10"></rect><text class="cls-17" transform="translate(318.88 907.14)"><tspan x="0" y="0">S. MAGUIRE</tspan></text></g></g><g id="Sacks" class="lv_galaxiaPersona svelte-acvyfk" data-persona="4"><g class="cls-7"><g class="cls-51"><image width="300" height="300" transform="translate(140 102.36) scale(.47)"></image></g></g><g><rect x="145.88" y="256.78" width="139.05" height="37.58" rx="10" ry="10"></rect><text class="cls-25" transform="translate(172.01 282.59)"><tspan x="0" y="0">D. SACKS</tspan></text></g></g><g id="Paliha" class="lv_galaxiaPersona svelte-acvyfk" data-persona="7"><g class="cls-8"><g class="cls-48"><image width="300" height="300" transform="translate(10 117.36) scale(.34 .32)"></image></g></g><g><rect x="9" y="216.48" width="112" height="23.66" rx="10" ry="10"></rect><text class="cls-20" transform="translate(24.42 232.73) scale(.94 1)"><tspan x="0" y="0">C.</tspan><tspan class="cls-61" x="14.12" y="0">P</tspan><tspan x="20.73" y="0">ALI</tspan><tspan class="cls-77" x="38.54" y="0">H</tspan><tspan x="47.01" y="0">APITI</tspan><tspan class="cls-64" x="76.81" y="0">Y</tspan><tspan x="83.26" y="0">A</tspan></text></g></g><g id="Davis" class="lv_galaxiaPersona svelte-acvyfk" data-persona="10"><g class="cls-9"><g class="cls-47"><image width="300" height="300" transform="translate(501 662.36) scale(.38)"></image></g></g><g><rect x="511.41" y="779.13" width="102.39" height="27.67" rx="10" ry="10"></rect><text class="cls-14" transform="translate(532.41 798.14)"><tspan x="0" y="0">S. D</tspan><tspan class="cls-68" x="24.96" y="0">A</tspan><tspan class="cls-54" x="33.75" y="0">VIS</tspan></text></g></g><g id="Afshar" class="lv_galaxiaPersona svelte-acvyfk" data-persona="11"><g class="cls-6"><g class="cls-50"><image width="300" height="300" transform="translate(620 663.36) scale(.36)"></image></g></g><g><rect x="625.93" y="778.7" width="102.39" height="27.67" rx="10" ry="10"></rect><text class="cls-14" transform="translate(638.93 797.7)"><tspan class="cls-62" x="0" y="0">O</tspan><tspan x="8.73" y="0">. AFS</tspan><tspan class="cls-76" x="41.59" y="0">H</tspan><tspan x="51.49" y="0">AR</tspan></text></g></g><g id="Ackman" class="lv_galaxiaPersona svelte-acvyfk" data-persona="12"><g class="cls-41"><g class="cls-49"><image width="300" height="300" transform="translate(505 822.36) scale(.36)"></image></g></g><g><rect x="509.7" y="935.43" width="102.39" height="27.67" rx="10" ry="10"></rect><text class="cls-14" transform="translate(522.7 954.44)"><tspan x="0" y="0">B. ACKMAN</tspan></text></g></g><g id="Birchall" class="lv_galaxiaPersona svelte-acvyfk" data-persona="13"><g class="cls-40"><g class="cls-30"><image width="300" height="300" transform="translate(611 817.36) scale(.38)"></image></g></g><g><rect x="622.7" y="935.43" width="102.39" height="27.67" rx="10" ry="10"></rect><text class="cls-14" transform="translate(635.7 954.44)"><tspan x="0" y="0">J. BIRC</tspan><tspan class="cls-76" x="45.94" y="0">H</tspan><tspan x="55.84" y="0">ALL</tspan></text></g></g><g id="Kupor" class="lv_galaxiaPersona svelte-acvyfk" data-persona="16"><g class="cls-39"><g class="cls-28"><image width="300" height="300" transform="translate(90 846.36) scale(.35)"></image></g></g><g><rect x="100.57" y="953.96" width="90.27" height="24.4" rx="10" ry="10"></rect><text class="cls-12" transform="translate(120.37 970.72)"><tspan x="0" y="0">S. KUPOR</tspan></text></g></g><text class="cls-22" transform="translate(71.01 87)"><tspan x="0" y="0">ALL-IN podcast</tspan></text><text class="cls-21" transform="translate(539.72 636.96) scale(1.02 1)"><tspan x="0" y="0">CÍRCU</tspan><tspan class="cls-71" x="54.55" y="0">L</tspan><tspan class="cls-55" x="64.16" y="0">O ÍNTIMO</tspan></text><g id="Calacanis" class="lv_galaxiaPersona svelte-acvyfk" data-persona="8"><g class="cls-35"><g class="cls-34"><image width="148" height="141" transform="translate(6 265.36) scale(.74)"></image></g></g><g><rect x="14" y="364.79" width="102" height="23.66" rx="10" ry="10"></rect><text class="cls-20" transform="translate(23.35 381.04) scale(1.03 1)"><tspan x="0" y="0">J. CA</tspan><tspan class="cls-75" x="28.69" y="0">L</tspan><tspan class="cls-58" x="35.21" y="0">ACANIS</tspan></text></g></g><g id="Friedberg" class="lv_galaxiaPersona svelte-acvyfk" data-persona="9"><g class="cls-37"><g class="cls-32"><image width="329" height="331" transform="translate(3 417.36) scale(.35)"></image></g></g><g><rect x="17.32" y="525.85" width="91.68" height="23.66" rx="10" ry="10"></rect><text class="cls-20" transform="translate(25.44 542.11)"><tspan x="0" y="0">D. FRIEDBERG</tspan></text></g></g><g><polyline class="cls-2" points="474 554.36 561 554.36 561 588.98"></polyline><polygon points="557.26 587.89 561 594.36 564.74 587.89 557.26 587.89"></polygon></g><g><line class="cls-2" x1="376.5" y1="599.36" x2="376.5" y2="681.48"></line><polygon points="372.76 680.39 376.5 686.86 380.24 680.39 372.76 680.39"></polygon></g><g><line class="cls-2" x1="280.5" y1="513.86" x2="165.35" y2="600.37"></line><polygon points="163.98 596.72 161.04 603.6 168.47 602.7 163.98 596.72"></polygon></g><g><line class="cls-2" x1="103" y1="793.86" x2="188" y2="793.86"></line><line class="cls-2" x1="145.5" y1="793.36" x2="145.5" y2="838.36"></line></g><g id="Vance" class="lv_galaxiaPersona svelte-acvyfk" data-persona="2"><g class="cls-42"><g class="cls-33"><image width="300" height="300" transform="translate(566 5.36) scale(.39 .41)"></image></g></g><g><rect x="556.77" y="145.64" width="132" height="35.68" rx="10" ry="10"></rect><text class="cls-24" transform="translate(569.06 170.14)"><tspan x="0" y="0">J. D.</tspan><tspan class="cls-69" x="40.8" y="0">V</tspan><tspan x="51.81" y="0">ANCE</tspan></text></g></g><g><line class="cls-2" x1="474.17" y1="146.16" x2="550.5" y2="115.85"></line><polygon points="550.86 119.73 555.5 113.86 548.1 112.78 550.86 119.73"></polygon></g><g id="Ramaswamy" class="lv_galaxiaPersona svelte-acvyfk" data-persona="17"><g class="cls-36"><g class="cls-31"><image width="300" height="300" transform="translate(618 403.36) scale(.37)"></image></g></g><g><rect x="616" y="522.96" width="115.42" height="28.53" rx="10" ry="10"></rect><text class="cls-23" transform="translate(624.31 543.23)"><tspan class="cls-66" x="0" y="0">V</tspan><tspan x="6.96" y="0">. RAMAS</tspan><tspan class="cls-67" x="57.87" y="0">W</tspan><tspan x="68.69" y="0">AMY</tspan></text></g></g><g id="Krishnan" class="lv_galaxiaPersona svelte-acvyfk" data-persona="15"><g class="cls-38"><g class="cls-29"><image width="300" height="300" transform="translate(558 226.36) scale(.38)"></image></g></g><g><rect x="566.43" y="344.07" width="104.68" height="28.29" rx="10" ry="10"></rect><text class="cls-16" transform="translate(577.46 364.17)"><tspan x="0" y="0">S. KRISHNAN</tspan></text></g></g><g><line class="cls-2" x1="375.5" y1="344.86" x2="375.3" y2="290.73"></line><polygon points="379.05 291.81 375.28 285.34 371.57 291.83 379.05 291.81"></polygon></g><g><line class="cls-2" x1="457.08" y1="376.8" x2="538.24" y2="337.18"></line><polygon points="538.9 341.02 543.08 334.82 535.62 334.3 538.9 341.02"></polygon></g><g><line class="cls-2" x1="470" y1="447.86" x2="613.12" y2="447.86"></line><polygon points="612.02 451.6 618.5 447.86 612.02 444.12 612.02 451.6"></polygon></g><g><line class="cls-2" x1="275.5" y1="407.86" x2="194.58" y2="357.57"></line><polygon points="197.48 354.97 190.01 354.73 193.53 361.32 197.48 354.97"></polygon></g><text class="cls-18" transform="translate(234.47 34.9)"><tspan x="0" y="0">Mafia de</tspan><tspan class="cls-60" x="87.65" y="0">P</tspan><tspan class="cls-63" x="99.37" y="0">A</tspan><tspan x="111.96" y="0">Y</tspan><tspan class="cls-59" x="124.94" y="0">P</tspan><tspan class="cls-52" x="136.66" y="0">AL</tspan></text></svg></div></div>`);function fl(e,a){rs(a,!1);let s=ha(null),t=ha(!1);function r(T){De(s,zr.find(P=>P.id===T)),A(t)||De(t,!0),n()}function l(){document.querySelectorAll(".lv_galaxiaPersona").forEach(P=>{P.style.opacity="1"}),De(s,null)}function n(){console.log("se ejecuta"),document.querySelectorAll(".lv_galaxiaPersona").forEach(P=>{const S=parseInt(P.getAttribute("data-persona"));if(!S)return;A(s).id==S||A(s).rel.includes(S)?P.style.opacity="1":P.style.opacity="0.25"})}fr(()=>{const T=document.querySelector(".lv_galaxia");document.addEventListener("click",S=>{T.contains(S.target)||l()}),document.querySelectorAll(".lv_galaxiaPersona").forEach(S=>{const Y=S.getAttribute("data-persona");Y&&(S.onclick=fe=>{fe.stopPropagation(),r(Y)})})}),cr();var p=cl(),c=x(o(p),2),f=o(c);{var g=T=>{var P=ol(),S=o(P),Y=o(S),fe=o(Y),Ys=o(fe),ca=x(fe,2),Xs=o(ca),Vs=x(ca,2);tr(Vs,5,()=>A(s).empresas,ar,(et,Me)=>{var ua=Zt(),at=Et(ua);{var st=Ie=>{var Ge=il();Te(()=>{pe(Ge,"src",Ea[A(Me)]),pe(Ge,"alt",A(Me))}),ae(Ie,Ge)};Aa(at,Ie=>{Ea[A(Me)]&&Ie(st)})}ae(et,ua)});var Qs=x(Y,2),fa=o(Qs),Zs=x(S,2),Js=o(Zs),$s=o(Js);Te(()=>{Ne(Ys,A(s).nombre),Ne(Xs,A(s).nacim),pe(fa,"src",A(s).foto),pe(fa,"alt",A(s).nombre),Ne($s,A(s).descr)}),ae(T,P)};Aa(f,T=>{A(s)&&T(g)})}var i=x(c,2),u=o(i),d=x(o(u),4),v=o(d),w=o(v),j=o(w);C(j,"xlink:href",Wr);var O=x(d),y=o(O),k=o(y),Pe=o(k);C(Pe,"xlink:href",Kr);var z=x(O),M=o(z),ce=o(M),ee=o(ce);C(ee,"xlink:href",Xr);var K=x(z),Se=o(K),Oe=o(Se),ns=o(Oe);C(ns,"xlink:href",Vr);var Ze=x(K),is=o(Ze),os=o(is),cs=o(os);C(cs,"xlink:href",tl);var Je=x(Ze),fs=o(Je),us=o(fs),ps=o(us);C(ps,"xlink:href",Yr);var $e=x(Je),ds=o($e),gs=o(ds),vs=o(gs);C(vs,"xlink:href",Qr);var ea=x($e),hs=o(ea),ms=o(hs),_s=o(ms);C(_s,"xlink:href",$r);var aa=x(ea),ys=o(aa),xs=o(ys),As=o(xs);C(As,"xlink:href",el);var sa=x(aa),ws=o(sa),Cs=o(ws),ks=o(Cs);C(ks,"xlink:href",al);var ta=x(sa),bs=o(ta),Es=o(bs),Bs=o(Es);C(Bs,"xlink:href",sl);var ra=x(ta),Fs=o(ra),Ps=o(Fs),Ss=o(Ps);C(Ss,"xlink:href",ll);var la=x(ra,3),Os=o(la),Ms=o(Os),Is=o(Ms);C(Is,"xlink:href",Zr);var na=x(la),Gs=o(na),Ds=o(Gs),Ts=o(Ds);C(Ts,"xlink:href",Jr);var ia=x(na,5),Ns=o(ia),Us=o(Ns),Rs=o(Us);C(Rs,"xlink:href",qr);var oa=x(ia,2),js=o(oa),Ls=o(js),Hs=o(Ls);C(Hs,"xlink:href",nl);var zs=x(oa),Ws=o(zs),qs=o(Ws),Ks=o(qs);C(Ks,"xlink:href",rl),Te(()=>{ka(c,`lv_text-container ${(A(t)?"lv_visible":"")??""} svelte-acvyfk`),ka(i,`lv_galaxy-container ${(A(t)?"lv_reduced":"")??""} svelte-acvyfk`)}),ae(e,p),ls()}var ul=Fe("<main><!></main>");function pl(e){var a=ul(),s=o(a);fl(s,{}),ae(e,a)}Jt(pl,{target:document.getElementById("app")});
