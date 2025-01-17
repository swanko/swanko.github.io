import{c as C,i as G,e as P,l as D,p as A,a as m,h as p,b as J,g as $,w as H,o as L,d as q,n as K,f as O,r as b,j as U,k,m as S,q as Z,s as ee,t as te,u as ne,v as F,x as oe,y as B}from"./index-BmgAvozI.js";import{h as ie,a as le}from"./render-CivXWftF.js";import{c as M,g as re}from"./dom-C4Z1pOOv.js";const se=C({name:"QPageContainer",setup(e,{slots:a}){const{proxy:{$q:n}}=$(),t=G(D,P);if(t===P)return console.error("QPageContainer needs to be child of QLayout"),P;A(J,!0);const r=m(()=>{const s={};return t.header.space===!0&&(s.paddingTop=`${t.header.size}px`),t.right.space===!0&&(s[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(s.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(s[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),s});return()=>p("div",{class:"q-page-container",style:r.value},ie(a.default))}}),ae=[Element,String],ce=[null,document,document.body,document.scrollingElement,document.documentElement];function ue(e,a){let n=re(a);if(n===void 0){if(e==null)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return ce.includes(n)?window:n}function de(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function fe(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let T;function R(){if(T!==void 0)return T;const e=document.createElement("p"),a=document.createElement("div");M(e,{width:"100%",height:"200px"}),M(a,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),a.appendChild(e),document.body.appendChild(a);const n=e.offsetWidth;a.style.overflow="scroll";let t=e.offsetWidth;return n===t&&(t=a.clientWidth),a.remove(),T=n-t,T}const{passive:N}=O,he=["both","horizontal","vertical"],ve=C({name:"QScrollObserver",props:{axis:{type:String,validator:e=>he.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ae},emits:["scroll"],setup(e,{emit:a}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,r,s;H(()=>e.scrollTarget,()=>{l(),v()});function c(){t!==null&&t();const u=Math.max(0,de(r)),y=fe(r),f={top:u-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&f.top===0||e.axis==="horizontal"&&f.left===0)return;const z=Math.abs(f.top)>=Math.abs(f.left)?f.top<0?"up":"down":f.left<0?"left":"right";n.position={top:u,left:y},n.directionChanged=n.direction!==z,n.delta=f,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),a("scroll",{...n})}function v(){r=ue(s,e.scrollTarget),r.addEventListener("scroll",i,N),i(!0)}function l(){r!==void 0&&(r.removeEventListener("scroll",i,N),r=void 0)}function i(u){if(u===!0||e.debounce===0||e.debounce==="0")c();else if(t===null){const[y,f]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];t=()=>{f(y),t=null}}}const{proxy:g}=$();return H(()=>g.$q.lang.rtl,c),L(()=>{s=g.$el.parentNode,v()}),q(()=>{t!==null&&t(),l()}),Object.assign(g,{trigger:i,getPosition:()=>n}),K}});function ge(){const e=b(!U.value);return e.value===!1&&L(()=>{e.value=!0}),{isHydrated:e}}const X=typeof ResizeObserver<"u",V=X===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},j=C({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let n=null,t,r={width:-1,height:-1};function s(l){l===!0||e.debounce===0||e.debounce==="0"?c():n===null&&(n=setTimeout(c,e.debounce))}function c(){if(n!==null&&(clearTimeout(n),n=null),t){const{offsetWidth:l,offsetHeight:i}=t;(l!==r.width||i!==r.height)&&(r={width:l,height:i},a("resize",r))}}const{proxy:v}=$();if(v.trigger=s,X===!0){let l;const i=g=>{t=v.$el.parentNode,t?(l=new ResizeObserver(s),l.observe(t),c()):g!==!0&&k(()=>{i(!0)})};return L(()=>{i()}),q(()=>{n!==null&&clearTimeout(n),l!==void 0&&(l.disconnect!==void 0?l.disconnect():t&&l.unobserve(t))}),K}else{let l=function(){n!==null&&(clearTimeout(n),n=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",s,O.passive),u=void 0)},i=function(){l(),t&&t.contentDocument&&(u=t.contentDocument.defaultView,u.addEventListener("resize",s,O.passive),c())};const{isHydrated:g}=ge();let u;return L(()=>{k(()=>{t=v.$el,t&&i()})}),q(l),()=>{if(g.value===!0)return p("object",{class:"q--avoid-card-border",style:V.style,tabindex:-1,type:"text/html",data:V.url,"aria-hidden":"true",onLoad:i})}}}}),me=C({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:a,emit:n}){const{proxy:{$q:t}}=$(),r=b(null),s=b(t.screen.height),c=b(e.container===!0?0:t.screen.width),v=b({position:0,direction:"down",inflectionPoint:0}),l=b(0),i=b(U.value===!0?0:R()),g=m(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),u=m(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),y=m(()=>i.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${i.value}px`}:null),f=m(()=>i.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${i.value}px`,width:`calc(100% + ${i.value}px)`}:null);function z(o){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:o.position.top,direction:o.direction,directionChanged:o.directionChanged,inflectionPoint:o.inflectionPoint.top,delta:o.delta.top};v.value=d,e.onScroll!==void 0&&n("scroll",d)}}function Y(o){const{height:d,width:w}=o;let h=!1;s.value!==d&&(h=!0,s.value=d,e.onScrollHeight!==void 0&&n("scrollHeight",d),_()),c.value!==w&&(h=!0,c.value=w),h===!0&&e.onResize!==void 0&&n("resize",o)}function I({height:o}){l.value!==o&&(l.value=o,_())}function _(){if(e.container===!0){const o=s.value>l.value?R():0;i.value!==o&&(i.value=o)}}let x=null;const Q={instances:{},view:m(()=>e.view),isContainer:m(()=>e.container),rootRef:r,height:s,containerHeight:l,scrollbarWidth:i,totalWidth:m(()=>c.value+i.value),rows:m(()=>{const o=e.view.toLowerCase().split(" ");return{top:o[0].split(""),middle:o[1].split(""),bottom:o[2].split("")}}),header:S({size:0,offset:0,space:!1}),right:S({size:300,offset:0,space:!1}),footer:S({size:0,offset:0,space:!1}),left:S({size:300,offset:0,space:!1}),scroll:v,animate(){x!==null?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout(()=>{x=null,document.body.classList.remove("q-body--layout-animate")},155)},update(o,d,w){Q[o][d]=w}};if(A(D,Q),R()>0){let o=function(){h=null,E.classList.remove("hide-scrollbar")},d=function(){if(h===null){if(E.scrollHeight>t.screen.height)return;E.classList.add("hide-scrollbar")}else clearTimeout(h);h=setTimeout(o,300)},w=function(W){h!==null&&W==="remove"&&(clearTimeout(h),o()),window[`${W}EventListener`]("resize",d)},h=null;const E=document.body;H(()=>e.container!==!0?"add":"remove",w),e.container!==!0&&w("add"),Z(()=>{w("remove")})}return()=>{const o=le(a.default,[p(ve,{onScroll:z}),p(j,{onResize:Y})]),d=p("div",{class:g.value,style:u.value,ref:e.container===!0?void 0:r,tabindex:-1},o);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:r},[p(j,{onResize:I}),p("div",{class:"absolute-full",style:y.value},[p("div",{class:"scroll",style:f.value},[d])])]):d}}}),ye={__name:"MainLayout",setup(e){return b(!1),(a,n)=>{const t=ee("router-view");return te(),ne(me,{view:"lHh Lpr lFf"},{default:F(()=>[n[0]||(n[0]=oe("a",{href:"/",class:"text-h3"},"Swanko",-1)),B(se,null,{default:F(()=>[B(t)]),_:1})]),_:1})}}};export{ye as default};