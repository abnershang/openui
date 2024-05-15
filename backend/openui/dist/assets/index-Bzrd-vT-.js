const __vite__fileDeps=["assets/index-C_4hW8_X.js","assets/vendor-QOAI5TVB.js","assets/textarea-Cy6K4ESE.js","assets/Builder-DOmviFOX.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var R=Object.defineProperty;var T=(e,o,s)=>o in e?R(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s;var p=(e,o,s)=>(T(e,typeof o!="symbol"?o+"":o,s),s);import{R as m,j as n,t as P,c as O,r as l,$ as E,a as S,b as _,d as $,e as N,f as I,g as C,h as f,N as A,Q as M,i as k,k as U}from"./vendor-QOAI5TVB.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const B="modulepreload",D=function(e){return"/"+e},x={},v=function(o,s,a){let t=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),i=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));t=Promise.all(s.map(c=>{if(c=D(c),c in x)return;x[c]=!0;const u=c.endsWith(".css"),j=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${j}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":B,u||(d.as="script",d.crossOrigin=""),d.href=c,i&&d.setAttribute("nonce",i),document.head.appendChild(d),u)return new Promise((w,L)=>{d.addEventListener("load",w),d.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${c}`)))})}))}return t.then(()=>o()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};class b extends m.Component{constructor(){super(...arguments);p(this,"state",{error:void 0})}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,a){console.error("Encountered ErrorBoundary:",s,a);const{onError:t}=this.props;t==null||t(s)}render(){const{error:s}=this.state;if(s!==void 0){const{renderError:t}=this.props;return t(s)}const{children:a}=this.props;return a}}p(b,"defaultProps",{children:void 0,onError:void 0});function h({error:e}){return n.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[n.jsx("h1",{className:"text-xl","data-testid":"LoadingOrError",children:e?e.message:n.jsx("div",{className:"h-16 w-16 animate-spin rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"})}),e?n.jsx("a",{href:"/",className:"mt-5 text-lg text-blue-500 underline",onClick:o=>{o.preventDefault(),document.location.reload()},children:"Reload"}):void 0]})}h.defaultProps={error:void 0};function F(...e){return P(O(e))}function Z(e,o,s){const a=new Blob([e],{type:o}),t=URL.createObjectURL(a),r=document.createElement("a");r.href=t,r.download=s,document.body.append(r),r.click(),r.remove(),URL.revokeObjectURL(t)}const ee=580,Q=S,te=_,re=$,z=l.forwardRef(({className:e,sideOffset:o=4,...s},a)=>n.jsx(E,{ref:a,sideOffset:o,className:F("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...s}));z.displayName=E.displayName;const V=500;function oe(e,o=V){const[s,a]=m.useState(e),t=m.useRef(null);return m.useEffect(()=>{const r=Date.now();if(t.current&&r>=t.current+o)t.current=r,a(e);else{const i=window.setTimeout(()=>{t.current=r,a(e)},o);return()=>window.clearTimeout(i)}return()=>{}},[e,o]),s}function q(e){const[o,s]=l.useState(()=>matchMedia(e).matches);return l.useLayoutEffect(()=>{const a=matchMedia(e);function t(){s(a.matches)}return a.addEventListener("change",t),()=>{a.removeEventListener("change",t)}},[e]),o}const W=l.lazy(async()=>v(()=>import("./index-C_4hW8_X.js"),__vite__mapDeps([0,1,2]))),y=l.lazy(async()=>v(()=>import("./Builder-DOmviFOX.js").then(e=>e.B),__vite__mapDeps([3,1,2]))),H=N(I(n.jsxs(n.Fragment,{children:[n.jsx(f,{path:"/",element:n.jsx(A,{replace:!0,to:"/ai"})}),n.jsx(f,{path:"/ai",element:n.jsx(W,{}),children:n.jsx(f,{path:":id",element:n.jsx(y,{})})}),n.jsx(f,{path:"/ai/shared/:id",element:n.jsx(y,{isShared:!0})})]})));function K(){const e=q("(prefers-color-scheme: dark)");return l.useEffect(()=>{e&&document.documentElement.classList.add("dark")},[e]),n.jsx(l.Suspense,{fallback:n.jsx(h,{}),children:n.jsx(b,{renderError:o=>n.jsx(h,{error:o}),children:n.jsx(Q,{children:n.jsx(C,{router:H})})})})}const X=1,Y=new M({defaultOptions:{queries:{staleTime:Number.POSITIVE_INFINITY,retry:X}}}),g=document.querySelector("#root");g&&k(g).render(n.jsx(l.StrictMode,{children:n.jsx(U,{client:Y,children:n.jsx(K,{})})}));export{b as E,h as L,ee as M,te as T,v as _,re as a,z as b,F as c,Z as d,oe as e,q as u};
