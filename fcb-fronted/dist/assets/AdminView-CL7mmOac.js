import{T as Ue,t as ce,E as Ye,b as Ze}from"./el-button-ufZgkdzR.js";import{E as Je,a as Ke}from"./el-form-item-BfBjnvHW.js";/* empty css                 */import"./el-tooltip-l0sNRNKZ.js";import{E as Pe,C as Xe}from"./el-popper-CVoGoRyw.js";import{d as y,u as $,o as w,e as J,w as S,r as k,aC as Oe,aR as Qe,g as h,T as Ne,_ as V,j as ye,aG as et,a as v,Y as A,f as D,h as Ie,ak as q,E as B,J as ue,F as ve,aS as tt,b as Ce,aT as ne,l as de,t as x,aU as nt,aV as at,v as Ee,R as ie,p as _e,S as we,U as Be,A as I,H as K,M as Ae,B as ze,D as ot,ab as pe,aW as Se,aX as $e,k as me,m as st,aY as lt,aZ as ut,a_ as it,s as rt,am as ke,n as ct,aA as dt,V as He,W as Me,a1 as ae,$ as oe,aK as mt,aM as pt,aN as ft,a8 as vt,aa as ht,af as gt,aF as Te,C as L,ac as bt}from"./index-C7AmCAY9.js";import{t as re}from"./aria-nkjrUMQ-.js";import{f as _t}from"./vnode-C-29AzA4.js";import"./_baseClone-Bs70fVzD.js";const Mt=y({name:"ElCollapseTransition"}),yt=y({...Mt,setup(e){const a=$("collapse-transition"),n=t=>{t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},s={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height&&(t.dataset.elExistsHeight=t.style.height),t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){requestAnimationFrame(()=>{t.dataset.oldOverflow=t.style.overflow,t.dataset.elExistsHeight?t.style.maxHeight=t.dataset.elExistsHeight:t.scrollHeight!==0?t.style.maxHeight=`${t.scrollHeight}px`:t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom,t.style.overflow="hidden"})},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},enterCancelled(t){n(t)},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){n(t)},leaveCancelled(t){n(t)}};return(t,d)=>(w(),J(Ne,Oe({name:h(a).b()},Qe(s)),{default:S(()=>[k(t.$slots,"default")]),_:3},16,["name"]))}});var It=V(yt,[["__file","collapse-transition.vue"]]);const Ct=ye(It),Et=y({name:"ElContainer"}),wt=y({...Et,props:{direction:{type:String}},setup(e){const a=e,n=et(),s=$("container"),t=v(()=>a.direction==="vertical"?!0:a.direction==="horizontal"?!1:n&&n.default?n.default().some(m=>{const g=m.type.name;return g==="ElHeader"||g==="ElFooter"}):!1);return(d,m)=>(w(),A("section",{class:D([h(s).b(),h(s).is("vertical",h(t))])},[k(d.$slots,"default")],2))}});var St=V(wt,[["__file","container.vue"]]);const xt=y({name:"ElAside"}),$t=y({...xt,props:{width:{type:String,default:null}},setup(e){const a=e,n=$("aside"),s=v(()=>a.width?n.cssVarBlock({width:a.width}):{});return(t,d)=>(w(),A("aside",{class:D(h(n).b()),style:Ie(h(s))},[k(t.$slots,"default")],6))}});var Le=V($t,[["__file","aside.vue"]]);const kt=y({name:"ElFooter"}),Tt=y({...kt,props:{height:{type:String,default:null}},setup(e){const a=e,n=$("footer"),s=v(()=>a.height?n.cssVarBlock({height:a.height}):{});return(t,d)=>(w(),A("footer",{class:D(h(n).b()),style:Ie(h(s))},[k(t.$slots,"default")],6))}});var De=V(Tt,[["__file","footer.vue"]]);const Pt=y({name:"ElHeader"}),Ot=y({...Pt,props:{height:{type:String,default:null}},setup(e){const a=e,n=$("header"),s=v(()=>a.height?n.cssVarBlock({height:a.height}):{});return(t,d)=>(w(),A("header",{class:D(h(n).b()),style:Ie(h(s))},[k(t.$slots,"default")],6))}});var Ve=V(Ot,[["__file","header.vue"]]);const Nt=y({name:"ElMain"}),Bt=y({...Nt,setup(e){const a=$("main");return(n,s)=>(w(),A("main",{class:D(h(a).b())},[k(n.$slots,"default")],2))}});var Fe=V(Bt,[["__file","main.vue"]]);const At=ye(St,{Aside:Le,Footer:De,Header:Ve,Main:Fe});q(Le);q(De);const zt=q(Ve),Ht=q(Fe);let Lt=class{constructor(a,n){this.parent=a,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(a){a===this.subMenuItems.length?a=0:a<0&&(a=this.subMenuItems.length-1),this.subMenuItems[a].focus(),this.subIndex=a}addListeners(){const a=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",s=>{let t=!1;switch(s.code){case B.down:{this.gotoSubIndex(this.subIndex+1),t=!0;break}case B.up:{this.gotoSubIndex(this.subIndex-1),t=!0;break}case B.tab:{re(a,"mouseleave");break}case B.enter:case B.space:{t=!0,s.currentTarget.click();break}}return t&&(s.preventDefault(),s.stopPropagation()),!1})})}},Dt=class{constructor(a,n){this.domNode=a,this.submenu=null,this.submenu=null,this.init(n)}init(a){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${a}-menu`);n&&(this.submenu=new Lt(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",a=>{let n=!1;switch(a.code){case B.down:{re(a.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case B.up:{re(a.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case B.tab:{re(a.currentTarget,"mouseleave");break}case B.enter:case B.space:{n=!0,a.currentTarget.click();break}}n&&a.preventDefault()})}},Vt=class{constructor(a,n){this.domNode=a,this.init(n)}init(a){const n=this.domNode.childNodes;Array.from(n).forEach(s=>{s.nodeType===1&&new Dt(s,a)})}};const Ft=y({name:"ElMenuCollapseTransition",setup(){const e=$("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,s){ue(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",s()},onAfterEnter(n){ve(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),tt(n,e.m("collapse"))?(ve(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ue(n,e.m("collapse"))):(ue(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ve(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){ue(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function Rt(e,a,n,s,t,d){return w(),J(Ne,Oe({mode:"out-in"},e.listeners),{default:S(()=>[k(e.$slots,"default")]),_:3},16)}var Wt=V(Ft,[["render",Rt],["__file","menu-collapse-transition.vue"]]);function Re(e,a){const n=v(()=>{let t=e.parent;const d=[a.value];for(;t.type.name!=="ElMenu";)t.props.index&&d.unshift(t.props.index),t=t.parent;return d});return{parentMenu:v(()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t}),indexPath:n}}function jt(e){return v(()=>{const n=e.backgroundColor;return n?new Ue(n).shade(20).toString():""})}const We=(e,a)=>{const n=$("menu");return v(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":jt(e).value||"","active-color":e.activeTextColor||"",level:`${a}`}))},qt=Ce({index:{type:String,required:!0},showTimeout:Number,hideTimeout:Number,popperClass:String,disabled:Boolean,teleported:{type:Boolean,default:void 0},popperOffset:Number,expandCloseIcon:{type:ne},expandOpenIcon:{type:ne},collapseCloseIcon:{type:ne},collapseOpenIcon:{type:ne}}),he="ElSubMenu";var xe=y({name:he,props:qt,setup(e,{slots:a,expose:n}){const s=Se(),{indexPath:t,parentMenu:d}=Re(s,v(()=>e.index)),m=$("menu"),g=$("sub-menu"),i=de("rootMenu");i||ce(he,"can not inject root menu");const p=de(`subMenu:${d.value.uid}`);p||ce(he,"can not inject sub menu");const c=x({}),b=x({});let C;const P=x(!1),X=x(),G=x(null),z=v(()=>W.value==="horizontal"&&H.value?"bottom-start":"right-start"),F=v(()=>W.value==="horizontal"&&H.value||W.value==="vertical"&&!i.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?N.value?e.expandOpenIcon:e.expandCloseIcon:nt:e.collapseCloseIcon&&e.collapseOpenIcon?N.value?e.collapseOpenIcon:e.collapseCloseIcon:at),H=v(()=>p.level===0),R=v(()=>{const u=e.teleported;return u===void 0?H.value:u}),Q=v(()=>i.props.collapse?`${m.namespace.value}-zoom-in-left`:`${m.namespace.value}-zoom-in-top`),O=v(()=>W.value==="horizontal"&&H.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"]),N=v(()=>i.openedMenus.includes(e.index)),U=v(()=>{let u=!1;return Object.values(c.value).forEach(f=>{f.active&&(u=!0)}),Object.values(b.value).forEach(f=>{f.active&&(u=!0)}),u}),W=v(()=>i.props.mode),Y=Ee({index:e.index,indexPath:t,active:U}),ee=We(i.props,p.level+1),se=v(()=>{var u;return(u=e.popperOffset)!=null?u:i.props.popperOffset}),Z=v(()=>{var u;return(u=e.popperClass)!=null?u:i.props.popperClass}),le=v(()=>{var u;return(u=e.showTimeout)!=null?u:i.props.showTimeout}),fe=v(()=>{var u;return(u=e.hideTimeout)!=null?u:i.props.hideTimeout}),o=()=>{var u,f,E;return(E=(f=(u=G.value)==null?void 0:u.popperRef)==null?void 0:f.popperInstanceRef)==null?void 0:E.destroy()},l=u=>{u||o()},r=()=>{i.props.menuTrigger==="hover"&&i.props.mode==="horizontal"||i.props.collapse&&i.props.mode==="vertical"||e.disabled||i.handleSubMenuClick({index:e.index,indexPath:t.value,active:U.value})},_=(u,f=le.value)=>{var E;if(u.type!=="focus"){if(i.props.menuTrigger==="click"&&i.props.mode==="horizontal"||!i.props.collapse&&i.props.mode==="vertical"||e.disabled){p.mouseInChild.value=!0;return}p.mouseInChild.value=!0,C==null||C(),{stop:C}=$e(()=>{i.openMenu(e.index,t.value)},f),R.value&&((E=d.value.vnode.el)==null||E.dispatchEvent(new MouseEvent("mouseenter")))}},M=(u=!1)=>{var f;if(i.props.menuTrigger==="click"&&i.props.mode==="horizontal"||!i.props.collapse&&i.props.mode==="vertical"){p.mouseInChild.value=!1;return}C==null||C(),p.mouseInChild.value=!1,{stop:C}=$e(()=>!P.value&&i.closeMenu(e.index,t.value),fe.value),R.value&&u&&((f=p.handleMouseleave)==null||f.call(p,!0))};ie(()=>i.props.collapse,u=>l(!!u));{const u=E=>{b.value[E.index]=E},f=E=>{delete b.value[E.index]};_e(`subMenu:${s.uid}`,{addSubMenu:u,removeSubMenu:f,handleMouseleave:M,mouseInChild:P,level:p.level+1})}return n({opened:N}),we(()=>{i.addSubMenu(Y),p.addSubMenu(Y)}),Be(()=>{p.removeSubMenu(Y),i.removeSubMenu(Y)}),()=>{var u;const f=[(u=a.title)==null?void 0:u.call(a),I(Ae,{class:g.e("icon-arrow"),style:{transform:N.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&i.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>K(F.value)?I(s.appContext.components[F.value]):I(F.value)})],E=i.isMenuPopup?I(Pe,{ref:G,visible:N.value,effect:"light",pure:!0,offset:se.value,showArrow:!1,persistent:!0,popperClass:Z.value,placement:z.value,teleported:R.value,fallbackPlacements:O.value,transition:Q.value,gpuAcceleration:!1},{content:()=>{var T;return I("div",{class:[m.m(W.value),m.m("popup-container"),Z.value],onMouseenter:j=>_(j,100),onMouseleave:()=>M(!0),onFocus:j=>_(j,100)},[I("ul",{class:[m.b(),m.m("popup"),m.m(`popup-${z.value}`)],style:ee.value},[(T=a.default)==null?void 0:T.call(a)])])},default:()=>I("div",{class:g.e("title"),onClick:r},f)}):I(pe,{},[I("div",{class:g.e("title"),ref:X,onClick:r},f),I(Ct,{},{default:()=>{var T;return ze(I("ul",{role:"menu",class:[m.b(),m.m("inline")],style:ee.value},[(T=a.default)==null?void 0:T.call(a)]),[[ot,N.value]])}})]);return I("li",{class:[g.b(),g.is("active",U.value),g.is("opened",N.value),g.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:N.value,onMouseenter:_,onMouseleave:()=>M(),onFocus:_},[E])}}});const Gt=Ce({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:me(Array),default:()=>st([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,closeOnClickOutside:Boolean,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperOffset:{type:Number,default:6},ellipsisIcon:{type:ne,default:()=>lt},popperEffect:{type:me(String),default:"dark"},popperClass:String,showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300}}),ge=e=>Array.isArray(e)&&e.every(a=>K(a)),Ut={close:(e,a)=>K(e)&&ge(a),open:(e,a)=>K(e)&&ge(a),select:(e,a,n,s)=>K(e)&&ge(a)&&rt(n)&&(s===void 0||s instanceof Promise)};var Yt=y({name:"ElMenu",props:Gt,emits:Ut,setup(e,{emit:a,slots:n,expose:s}){const t=Se(),d=t.appContext.config.globalProperties.$router,m=x(),g=$("menu"),i=$("sub-menu"),p=x(-1),c=x(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),b=x(e.defaultActive),C=x({}),P=x({}),X=v(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),G=()=>{const o=b.value&&C.value[b.value];if(!o||e.mode==="horizontal"||e.collapse)return;o.indexPath.forEach(r=>{const _=P.value[r];_&&z(r,_.indexPath)})},z=(o,l)=>{c.value.includes(o)||(e.uniqueOpened&&(c.value=c.value.filter(r=>l.includes(r))),c.value.push(o),a("open",o,l))},F=o=>{const l=c.value.indexOf(o);l!==-1&&c.value.splice(l,1)},H=(o,l)=>{F(o),a("close",o,l)},R=({index:o,indexPath:l})=>{c.value.includes(o)?H(o,l):z(o,l)},Q=o=>{(e.mode==="horizontal"||e.collapse)&&(c.value=[]);const{index:l,indexPath:r}=o;if(!(ke(l)||ke(r)))if(e.router&&d){const _=o.route||l,M=d.push(_).then(u=>(u||(b.value=l),u));a("select",l,r,{index:l,indexPath:r,route:_},M)}else b.value=l,a("select",l,r,{index:l,indexPath:r})},O=o=>{const l=C.value,r=l[o]||b.value&&l[b.value]||l[e.defaultActive];r?b.value=r.index:b.value=o},N=o=>{const l=getComputedStyle(o),r=Number.parseInt(l.marginLeft,10),_=Number.parseInt(l.marginRight,10);return o.offsetWidth+r+_||0},U=()=>{var o,l;if(!m.value)return-1;const r=Array.from((l=(o=m.value)==null?void 0:o.childNodes)!=null?l:[]).filter(te=>te.nodeName!=="#comment"&&(te.nodeName!=="#text"||te.nodeValue)),_=64,M=getComputedStyle(m.value),u=Number.parseInt(M.paddingLeft,10),f=Number.parseInt(M.paddingRight,10),E=m.value.clientWidth-u-f;let T=0,j=0;return r.forEach((te,Ge)=>{T+=N(te),T<=E-_&&(j=Ge+1)}),j===r.length?-1:j},W=o=>P.value[o].indexPath,Y=(o,l=33.34)=>{let r;return()=>{r&&clearTimeout(r),r=setTimeout(()=>{o()},l)}};let ee=!0;const se=()=>{if(p.value===U())return;const o=()=>{p.value=-1,ct(()=>{p.value=U()})};ee?o():Y(o)(),ee=!1};ie(()=>e.defaultActive,o=>{C.value[o]||(b.value=""),O(o)}),ie(()=>e.collapse,o=>{o&&(c.value=[])}),ie(C.value,G);let Z;ut(()=>{e.mode==="horizontal"&&e.ellipsis?Z=it(m,se).stop:Z==null||Z()});const le=x(!1);{const o=M=>{P.value[M.index]=M},l=M=>{delete P.value[M.index]};_e("rootMenu",Ee({props:e,openedMenus:c,items:C,subMenus:P,activeIndex:b,isMenuPopup:X,addMenuItem:M=>{C.value[M.index]=M},removeMenuItem:M=>{delete C.value[M.index]},addSubMenu:o,removeSubMenu:l,openMenu:z,closeMenu:H,handleMenuItemClick:Q,handleSubMenuClick:R})),_e(`subMenu:${t.uid}`,{addSubMenu:o,removeSubMenu:l,mouseInChild:le,level:0})}we(()=>{e.mode==="horizontal"&&new Vt(t.vnode.el,g.namespace.value)}),s({open:l=>{const{indexPath:r}=P.value[l];r.forEach(_=>z(_,r))},close:F,handleResize:se});const fe=We(e,0);return()=>{var o,l;let r=(l=(o=n.default)==null?void 0:o.call(n))!=null?l:[];const _=[];if(e.mode==="horizontal"&&m.value){const f=_t(r),E=p.value===-1?f:f.slice(0,p.value),T=p.value===-1?[]:f.slice(p.value);T!=null&&T.length&&e.ellipsis&&(r=E,_.push(I(xe,{index:"sub-menu-more",class:i.e("hide-arrow"),popperOffset:e.popperOffset},{title:()=>I(Ae,{class:i.e("icon-more")},{default:()=>I(e.ellipsisIcon)}),default:()=>T})))}const M=e.closeOnClickOutside?[[Xe,()=>{c.value.length&&(le.value||(c.value.forEach(f=>a("close",f,W(f))),c.value=[]))}]]:[],u=ze(I("ul",{key:String(e.collapse),role:"menubar",ref:m,style:fe.value,class:{[g.b()]:!0,[g.m(e.mode)]:!0,[g.m("collapse")]:e.collapse}},[...r,..._]),M);return e.collapseTransition&&e.mode==="vertical"?I(Wt,()=>u):u}}});const Zt=Ce({index:{type:me([String,null]),default:null},route:{type:me([String,Object])},disabled:Boolean}),Jt={click:e=>K(e.index)&&Array.isArray(e.indexPath)},be="ElMenuItem",Kt=y({name:be,components:{ElTooltip:Pe},props:Zt,emits:Jt,setup(e,{emit:a}){const n=Se(),s=de("rootMenu"),t=$("menu"),d=$("menu-item");s||ce(be,"can not inject root menu");const{parentMenu:m,indexPath:g}=Re(n,dt(e,"index")),i=de(`subMenu:${m.value.uid}`);i||ce(be,"can not inject sub menu");const p=v(()=>e.index===s.activeIndex),c=Ee({index:e.index,indexPath:g,active:p}),b=()=>{e.disabled||(s.handleMenuItemClick({index:e.index,indexPath:g.value,route:e.route}),a("click",c))};return we(()=>{i.addSubMenu(c),s.addMenuItem(c)}),Be(()=>{i.removeSubMenu(c),s.removeMenuItem(c)}),{parentMenu:m,rootMenu:s,active:p,nsMenu:t,nsMenuItem:d,handleClick:b}}});function Xt(e,a,n,s,t,d){const m=He("el-tooltip");return w(),A("li",{class:D([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:e.handleClick},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(w(),J(m,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:S(()=>[k(e.$slots,"title")]),default:S(()=>[Me("div",{class:D(e.nsMenu.be("tooltip","trigger"))},[k(e.$slots,"default")],2)]),_:3},8,["effect"])):(w(),A(pe,{key:1},[k(e.$slots,"default"),k(e.$slots,"title")],64))],10,["onClick"])}var je=V(Kt,[["render",Xt],["__file","menu-item.vue"]]);const Qt={title:String},en="ElMenuItemGroup",tn=y({name:en,props:Qt,setup(){return{ns:$("menu-item-group")}}});function nn(e,a,n,s,t,d){return w(),A("li",{class:D(e.ns.b())},[Me("div",{class:D(e.ns.e("title"))},[e.$slots.title?k(e.$slots,"title",{key:1}):(w(),A(pe,{key:0},[ae(oe(e.title),1)],64))],2),Me("ul",null,[k(e.$slots,"default")])],2)}var qe=V(tn,[["render",nn],["__file","menu-item-group.vue"]]);const an=ye(Yt,{MenuItem:je,MenuItemGroup:qe,SubMenu:xe}),on=q(je);q(qe);q(xe);const sn=mt("adminData",()=>{const e=x(localStorage.getItem("adminPassword")||"");function a(n){e.value=n,localStorage.setItem("adminPassword",n)}return{adminPassword:e,updateAdminPwd:a}}),_n=y({__name:"AdminView",setup(e){const a=pt(),n=x(!1),s=ft(a),{t}=vt(),d=sn(),m=ht(),g=x([{name:t("admin.menu.fileManage"),path:"/admin"},{name:t("admin.menu.systemSetting"),path:"/admin/setting"},{name:t("admin.menu.local"),path:"/admin/local"},{name:t("admin.menu.about"),path:"/admin/about"},{name:t("admin.menu.send"),path:"/#/send"},{name:t("admin.menu.receive"),path:"/#/"}]),i=()=>{d.updateAdminPwd(d.adminPassword),gt({url:"/admin/login",method:"post"}).then(p=>{p.code===200?(n.value=!0,Te.success(t("admin.login.loginSuccess"))):Te.error(t("admin.login.loginError"))})};return d.adminPassword!==""&&i(),(p,c)=>{const b=on,C=an,P=zt,X=He("router-view"),G=Ht,z=At,F=Ye,H=Ze,R=Ke,Q=Je;return n.value?(w(),J(z,{key:0,style:{height:"100vh",width:"100vw",position:"relative","user-select":"none"}},{default:S(()=>[L(P,null,{default:S(()=>[L(C,{mode:"horizontal",router:"","default-active":h(m).path},{default:S(()=>[(w(!0),A(pe,null,bt(g.value,O=>(w(),J(b,{index:O.path,key:O.path},{default:S(()=>[ae(oe(O.name),1)]),_:2},1032,["index"]))),128)),L(b,{style:{float:"right"},onClick:c[0]||(c[0]=O=>h(s)(!h(a)))},{default:S(()=>[ae(oe(h(t)("admin.menu.color")),1)]),_:1}),L(b,{style:{float:"right"},onClick:c[1]||(c[1]=O=>{h(d).updateAdminPwd(""),n.value=!1})},{default:S(()=>[ae(oe(h(t)("admin.menu.signout")),1)]),_:1})]),_:1},8,["default-active"])]),_:1}),L(G,null,{default:S(()=>[L(X)]),_:1})]),_:1})):(w(),J(Q,{key:1,size:"large"},{default:S(()=>[L(R,{label:h(t)("admin.login.managePassword")},{default:S(()=>[L(H,{modelValue:h(d).adminPassword,"onUpdate:modelValue":c[2]||(c[2]=O=>h(d).adminPassword=O),placeholder:h(t)("admin.login.passwordNotEmpty"),type:"password"},{append:S(()=>[L(F,{onClick:i},{default:S(()=>[ae(oe(h(t)("admin.login.login")),1)]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}))}}});export{_n as default};
