(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{2167:function(e,n,r){"use strict";var t=r(3038),o=r(862);n.default=void 0;var a=o(r(7294)),c=r(9414),u=r(4651),i=r(7426),l={};function s(e,n,r,t){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var n,r=!1!==e.prefetch,o=(0,u.useRouter)(),f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),r=t(n,2),a=r[0],u=r[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,_=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,E=(0,i.useIntersection)({rootMargin:"200px"}),m=t(E,2),L=m[0],k=m[1],w=a.default.useCallback((function(e){L(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,L]);(0,a.useEffect)((function(){var e=k&&r&&(0,c.isLocalURL)(d),n="undefined"!==typeof y?y:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&s(o,d,p,{locale:n})}),[p,d,k,y,r,o]);var M={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(r))&&(e.preventDefault(),null==u&&t.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,_,g,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof y?y:o&&o.locale,x=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,C,o&&o.locales,o&&o.domainLocales);M.href=x||(0,c.addBasePath)((0,c.addLocale)(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,M)};n.default=f},7426:function(e,n,r){"use strict";var t=r(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),s=t(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=u.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return u.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[r,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},6506:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(5893),o=r(1664),a=r(3317),c=r.n(a);function u(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:c().error,children:"Error 404"}),(0,t.jsxs)("p",{children:["Please ",(0,t.jsx)(o.default,{href:"/",as:"/",children:(0,t.jsx)("a",{children:"go back"})})]})]})}},2448:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(6506)}])},3317:function(e){e.exports={error:"error_error__2oWgu"}},1664:function(e,n,r){e.exports=r(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=2448,e(e.s=n);var n}));var n=e.O();_N_E=n}]);