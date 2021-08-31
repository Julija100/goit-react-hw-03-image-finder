(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{48:function(n,e,t){"use strict";t.r(e);var r,o,a,i,c,s,l,u,d,p,h,g,b,f,x,m=t(0),j=t.n(m),y=t(9),O=t.n(y),v=t(2),w=t(3),k={colors:{primaryBg:"#fdfc47",secondaryBg:"#33ff33",lightBg:"#ccff99",primaryDarkText:"#009900",secondaryDarkText:"#66ff33",primaryLightText:"#ffff00",secondaryLightText:"#ffffff",primaryBgGradient:"linear-gradient(to right,#24fe41, #fdfc47)"},fontWeight:{medium:"500",bold:"700"},media:{phone:"(max-width: 320px)",tablet:"(max-width: 768px)",desktop:"(max-width: 1024px)"}},C=Object(v.b)(r||(r=Object(w.a)(["\n\nhtml {\n  box-sizing: border-box;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  color: #212121;\n  background-color: #fffffe;\n  line-height: 1.333;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n  margin-top: 0;\n}\n"]))),I=v.c.ul(o||(o=Object(w.a)(["\n  margin-top: 0;\n  padding-left: 0;\n  list-style: none;\n"]))),S=v.c.button(a||(a=Object(w.a)(["\n  cursor: pointer;\n  outline: none;\n  border: none;\n  font-family: inherit;\n  line-height: inherit;\n"]))),B=(v.c.a(i||(i=Object(w.a)(["\n  cursor: pointer;\n  text-decoration: none;\n  font-style: normal;\n  color: inherit;\n"]))),v.c.p(c||(c=Object(w.a)(["\n  font-size: 24px;\n  color: ",";\n  font-weight: ",";\n"])),(function(){return k.colors.secondaryDarkText}),(function(){return k.fontWeight.bold}))),L=t(5),M=t(6),z=t(8),D=t(7),Q=v.c.header(s||(s=Object(w.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  background-color: ",";\n  background-image: ",";\n\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"])),(function(){return k.colors.primaryBg}),(function(){return k.colors.primaryBgGradient})),T=t(1),E=function(n){var e=n.children;return Object(T.jsx)(Q,{children:e})},F=v.c.li(l||(l=Object(w.a)(["\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  @media screen and "," {\n    width: 280px;\n  }\n"])),(function(){return k.media.phone})),P=v.c.img(u||(u=Object(w.a)(["\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  @media screen and "," {\n    width: 100%;\n  }\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])),(function(){return k.media.phone})),N=function(n){var e=n.imagesData,t=n.onClick;return Object(T.jsx)(F,{children:Object(T.jsx)(P,{src:e.webformatURL,alt:e.tags,onClick:t})})},U=t(10),A=v.c.div(d||(d=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),R=v.c.div(p||(p=Object(w.a)(["\n  background: transparent;\n"]))),W=document.getElementById("modal-root"),G=function(n){Object(z.a)(t,n);var e=Object(D.a)(t);function t(n){var r;return Object(L.a)(this,t),(r=e.call(this,n)).onKeyDown=function(n){"Escape"===n.key&&r.props.onModalClose()},r.onBackdropClick=function(){r.props.onModalClose()},r.onBackdropClick=r.onBackdropClick.bind(Object(U.a)(r)),r}return Object(M.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(y.createPortal)(Object(T.jsx)(A,{onClick:this.onBackdropClick,children:Object(T.jsx)(R,{onClick:function(n){return n.stopPropagation()},children:this.props.children})}),W)}}]),t}(m.Component),K=v.c.img(h||(h=Object(w.a)(["\n  width: 95%;\n  /* height: auto; */\n  max-height: calc(100vh - 30px);\n  margin: 0 auto;\n  border-radius: 5px;\n"]))),q=Object(v.c)(I)(g||(g=Object(w.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-bottom: 0;\n  margin-left: auto;\n  margin-right: auto;\n"]))),H=function(n){Object(z.a)(t,n);var e=Object(D.a)(t);function t(){var n;Object(L.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).state={showModal:!1,activeImageIndex:0},n.toggleModal=function(){n.setState((function(n){return{showModal:!n.showModal}}))},n.setActiveImageIndex=function(e){n.setState({activeImageIndex:e})},n.showLightBox=function(e){n.setActiveImageIndex(e),n.toggleModal()},n}return Object(M.a)(t,[{key:"render",value:function(){var n=this;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(q,{children:this.props.images.map((function(e,t){return Object(T.jsx)(N,{imagesData:e,onClick:function(){return n.showLightBox(t)}},e.id)}))}),this.state.showModal&&Object(T.jsx)(G,{onModalClose:this.toggleModal,children:Object(T.jsx)(K,{src:this.props.images[this.state.activeImageIndex].largeImageURL,alt:this.props.images[this.state.activeImageIndex].tags})})]})}}]),t}(m.Component),J=Object(v.c)(S)(b||(b=Object(w.a)(["\n  display: inline-block;\n  min-width: 180px;\n  margin-top: 20px;\n  padding: 8px 16px;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: ",";\n  text-align: center;\n  border-radius: 5px;\n  color: ",";\n  background-color: ",";\n  background-image: ",";\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:focus {\n    background-image: none;\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(){return k.fontWeight.medium}),(function(){return k.colors.secondaryLightText}),(function(){return k.colors.primaryBg}),(function(){return k.colors.primaryBgGradient}),(function(){return k.colors.primaryLightText}),(function(){return k.colors.secondaryBg})),_=v.c.span(f||(f=Object(w.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),Y=function(n){var e=n.label,t=n.onLoadMoreBtnClick;return Object(T.jsxs)(J,{onClick:t,children:[Object(T.jsx)(_,{}),e,Object(T.jsx)(_,{})]})};function V(n,e){return fetch("".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(n,"&page=").concat(e,"&per_page=").concat(12,"&key=").concat("22385863-ab509129ff5717a9471438652")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Sorry..."))}))}var X=v.c.div(x||(x=Object(w.a)(["\n  max-width: 100%;\n  margin: 0 auto;\n  width: 100%;\n"]))),Z=function(n){var e=n.children;return Object(T.jsxs)(X,{children:[" ",e]})};var $,nn,en,tn,rn=function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},on=v.c.form($||($=Object(w.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: ",";\n  border-radius: 3px;\n  overflow: hidden;\n"])),(function(){return k.colors.lightBg})),an=v.c.input(nn||(nn=Object(w.a)(["\n  display: inline-block;\n  width: 100%;\n  height: 30px;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  color: ",";\n\n  &::placeholder {\n    font-family: inherit;\n    font-size: 18px;\n    color: ",";\n  }\n"])),(function(){return k.colors.primaryDarkText}),(function(){return k.colors.secondaryBg})),cn=Object(v.c)(S)(en||(en=Object(w.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  padding: 5px 10px 5px 10px;\n  background-color: ",";\n  color: ",";\n\n  & > svg {\n    width: 20px;\n    height: 20px;\n  }\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(){return k.colors.lightBg}),(function(){return k.colors.secondaryDarkText}),(function(){return k.colors.primaryLightText}),(function(){return k.colors.secondaryBg})),sn=function(n){var e=n.children,t=n.type,r=n.ariaLabel,o=n.onClick;return Object(T.jsxs)(cn,{type:t,"aria-label":r,onClick:o,children:[" ",e]})},ln=["title","titleId"];function un(){return(un=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function dn(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function pn(n,e){var t=n.title,r=n.titleId,o=dn(n,ln);return m.createElement("svg",un({xmlns:"http://www.w3.org/2000/svg",width:1706.667,height:1701.333,viewBox:"0 0 1280 1276",fill:"currentColor",ref:e,"aria-labelledby":r},o),t?m.createElement("title",{id:r},t):null,tn||(tn=m.createElement("path",{d:"M460 1.1C338.3 9.6 228.7 59.1 144 144 65.2 223 16.9 322.8 3.6 434.5c-15.3 127.8 20 256.4 98.3 358.5 18.1 23.7 50.1 57 72.6 75.9 31.6 26.3 64.1 47.3 102 65.7 53.7 26.1 105.2 40.4 171.5 47.6 18.3 1.9 72 1.6 92.5-.5 70.3-7.5 135.9-28.2 194.8-61.4l9.8-5.6 8.7 8.5c4.8 4.6 80.5 78.2 168.3 163.4 87.7 85.3 161.8 157.1 164.6 159.6 22.7 20.2 53 31.1 81.8 29.5 18-1 29.2-4 46-12.2 13.2-6.5 21.3-12.5 32.3-23.9 34.1-35.5 42.7-87.9 21.7-132.3-6.2-13.2-13.4-23.1-26-35.9-6-6.1-82.9-80.8-170.7-165.8C983.9 820.5 912 750.5 912 750.1c0-.5 2.5-5.1 5.5-10.2 13.5-22.6 28.2-54.5 37.7-81.4 18.2-51.6 27.1-99.3 28.5-154 2-80.6-14.3-156.5-49.1-228-23.9-49.1-52.1-89.3-89.6-127.9-37.9-38.9-79.4-69.5-127.5-94.2C638.6 14 547.1-5 460 1.1zm50.2 197.3c47.8 2 100 19.4 142.5 47.5 136.6 90.4 174.6 270.2 85.7 406.1-22.1 33.8-52.1 63.8-86.4 86.3-89.2 58.6-205.2 63.5-298.3 12.7-73.6-40.1-126.6-107.9-146.8-187.7-6.8-26.9-8.3-39.8-8.3-71.3 0-23.6.3-29.6 2.3-42 4.9-31.6 12.7-56.9 26-84.5 15.1-31.4 32.7-56 57.6-81C330.8 238 389.4 208.8 454 200c9-1.3 35.5-2.8 40.5-2.3 1.7.1 8.7.5 15.7.7z"})))}var hn,gn=m.forwardRef(pn),bn=(t.p,function(n){Object(z.a)(t,n);var e=Object(D.a)(t);function t(){var n;Object(L.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).state={searchQuery:""},n.onInputChange=function(e){n.setState({searchQuery:e.target.value.toLowerCase()})},n.onFormSubmit=function(e){e.preventDefault(),n.props.getFormData(n.state.searchQuery.trim()),n.setState({searchQuery:""})},n}return Object(M.a)(t,[{key:"render",value:function(){return Object(T.jsxs)(on,{onSubmit:this.onFormSubmit,children:[Object(T.jsx)(an,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.searchQuery,onChange:this.onInputChange}),Object(T.jsx)(sn,{type:"submit",ariaLabel:"search",children:Object(T.jsx)(gn,{})})]})}}]),t}(m.Component)),fn=v.c.section(hn||(hn=Object(w.a)(["\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 20px 0;\n  text-align: center;\n  border-radius: 5px;\n  color: ",";\n  background-color: transparent;\n"])),(function(){return k.colors.primaryText})),xn=function(n){var e=n.title,t=n.children;return Object(T.jsxs)(fn,{children:[t,e&&Object(T.jsx)("h2",{children:e})]})},mn=t(18),jn=t.n(mn);var yn,On=function(){return Object(T.jsx)(jn.a,{type:"Rings",color:"#33ff33",height:80,width:80,timeout:0})},vn=v.c.div(yn||(yn=Object(w.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),wn="idle",kn="pending",Cn="resolved",In="rejected",Sn=function(n){Object(z.a)(t,n);var e=Object(D.a)(t);function t(){var n;Object(L.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).state={searchQuery:"",pageNumber:1,images:[],status:wn,morePageImages:!1,error:null},n.getImages=function(e,t){V(e,t).then((function(e){n.setState({images:e.hits,status:Cn}),0!==e.total?(e.total>12?n.setState({morePageImages:!0}):n.setState({morePageImages:!1}),t>1&&rn()):n.setState({status:In,error:"ups, no images!"})})).catch((function(e){return n.setState({error:e.message,status:In})}))},n.onSearchFormSubmit=function(e){n.setState({searchQuery:e,pageNumber:1}),""===e&&n.setState({status:In,error:"ups, You need enter yout request!"})},n.onLoadMoreBtnClick=function(){var e=n.state,t=e.searchQuery,r=e.pageNumber;n.setState({status:kn,pageNumber:r+1}),n.getImages(t,r+1)},n}return Object(M.a)(t,[{key:"componentDidUpdate",value:function(n,e){var t=this.state,r=t.searchQuery,o=t.pageNumber;e.searchQuery!==this.state.searchQuery&&""!==this.state.searchQuery&&(this.setState({status:kn,pageNumber:1}),this.getImages(r,o))}},{key:"render",value:function(){var n=this.state,e=n.images,t=n.morePageImages,r=n.status,o=n.error;return Object(T.jsxs)(vn,{children:[Object(T.jsx)(E,{children:Object(T.jsx)(bn,{getFormData:this.onSearchFormSubmit})}),Object(T.jsx)(xn,{theme:k,children:Object(T.jsxs)(Z,{children:["pending"===r&&On(),"rejected"===r&&Object(T.jsx)(B,{children:o}),"resolved"===r&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(H,{images:e}),t&&Object(T.jsx)(Y,{label:"Load more",onLoadMoreBtnClick:this.onLoadMoreBtnClick})]})]})})]})}}]),t}(m.Component);O.a.render(Object(T.jsx)(j.a.StrictMode,{children:Object(T.jsxs)(v.a,{theme:k,children:[Object(T.jsx)(C,{}),Object(T.jsx)(Sn,{})]})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.5f2b3f16.chunk.js.map