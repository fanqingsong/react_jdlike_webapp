(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{122:function(e,a,n){},123:function(e,a,n){"use strict";n.r(a);var t=n(4),i=n(7),r=n(5),s=n(8),c=n(9),o=n(0),l=n.n(o),p=n(44);n(122),n(59);var u=function(e){function a(e){return Object(t.a)(this,a),Object(r.a)(this,Object(s.a)(a).call(this,e))}return Object(c.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.updateImgs().then(function(){console.log("-------------------"),console.log(e.props.headerImgs),new p.a(".swiper-container",{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:1e3}})})}},{key:"render",value:function(){var e=0;return l.a.createElement("div",{id:"header"},l.a.createElement("div",{className:"swiper-container"},l.a.createElement("div",{className:"swiper-wrapper"},this.props.headerImgs.map(function(a){return l.a.createElement("div",{className:"swiper-slide",key:"header"+e++},l.a.createElement("img",{alt:"",className:"img",src:a}))})),l.a.createElement("div",{className:"swiper-pagination"})))}}]),a}(l.a.Component);a.default=u}}]);
//# sourceMappingURL=3.2709ef45.chunk.js.map