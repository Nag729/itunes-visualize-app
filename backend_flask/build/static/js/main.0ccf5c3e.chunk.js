(this.webpackJsonpfrontend_react=this.webpackJsonpfrontend_react||[]).push([[0],{58:function(e,a,t){e.exports=t(89)},63:function(e,a,t){},84:function(e,a,t){},89:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(63),t(17)),i=t(15),s=t(18),m=t(19),u=t(21),p=t(48),h=t(23),E=t(4),b=t(47),d=t.n(b),g=t(125),f=t(123),j=t(120),v=t(121),O=t(111),y=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(O.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 SonnaMonoHaNai ",(new Date).getFullYear(),".")}}]),a}(r.a.Component),k=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),a}(r.a.Component),w=t(45),C=t.n(w),x=t(113),N=t(114),W=t(124),A=t(115),B=t(119),S=t(118),T=t(116),F=t(117),H=t(91),D=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleClick=function(){C.a.get("http://localhost:3000/api/home",{headers:{Accept:"Application/json"}}).then((function(e){t.setState({rows:e.data})})).catch(console.error)},t.state={rows:[]},t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.props.classes.heroContent},r.a.createElement(x.a,{container:!0,maxWidth:"sm"},r.a.createElement(O.a,{component:"h1",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0},"iTunes\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u60c5\u5831\u3092\u53ef\u8996\u5316\u3057\u307e\u3057\u3087\u3046!"),r.a.createElement(O.a,{variant:"subtitle1",align:"center",color:"textSecondary",paragraph:!0},"iTunes\u304b\u3089\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305f`.xml`\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3068\u7c21\u5358\u306b\u60c5\u5831\u3092\u53ef\u8996\u5316\u3067\u304d\u307e\u3059.",r.a.createElement("br",null),"\u3053\u308c\u307e\u3067\u306b\u6700\u3082\u591a\u304f\u8074\u3044\u305f\u66f2\u3084\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u3054\u3068\u306e\u30e9\u30f3\u30ad\u30f3\u30b0\u3092\u898b\u3066\u3001\u97f3\u697d\u306e\u597d\u307f\u3092\u518d\u767a\u898b\u3057\u3066\u304f\u3060\u3055\u3044."),r.a.createElement("div",{className:this.props.classes.heroButtons},r.a.createElement(N.a,{container:!0,justify:"center"},r.a.createElement(N.a,{item:!0},r.a.createElement(W.a,{variant:"contained",color:"primary",onClick:this.handleClick,className:"btn-search"},"Search Data")))))),r.a.createElement(x.a,{maxWidth:"lg"},r.a.createElement(H.a,{className:this.props.classes.paper},r.a.createElement("div",{className:this.props.classes.tableWrapper},r.a.createElement(A.a,{stickyHeader:!0,"aria-label":"simple table"},r.a.createElement(T.a,null,r.a.createElement(F.a,null,r.a.createElement(S.a,null,"\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8"),r.a.createElement(S.a,null,"\u30a2\u30eb\u30d0\u30e0"),r.a.createElement(S.a,null,"\u66f2\u540d"),r.a.createElement(S.a,null,"\u30ea\u30ea\u30fc\u30b9\u5e74"),r.a.createElement(S.a,null,"\u518d\u751f\u56de\u6570"))),r.a.createElement(B.a,null,this.state.rows.map((function(e,a){return r.a.createElement(F.a,{key:a},r.a.createElement(S.a,null,e.Artist),r.a.createElement(S.a,null,e.Album),r.a.createElement(S.a,null,e.Name),r.a.createElement(S.a,null,e.Year),r.a.createElement(S.a,null,e["Play Count"]))}))))))))}}]),a}(r.a.Component),J=Object(E.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(4,0,6)},heroButtons:{marginTop:e.spacing(2)},paper:{overflowX:"auto"},tableWrapper:{minWidth:650,maxHeight:500}}}))(D),P=(t(84),function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,null),r.a.createElement(j.a,{position:"relative"},r.a.createElement(v.a,null,r.a.createElement(d.a,{className:this.props.classes.icon}),r.a.createElement(O.a,{variant:"h6",color:"inherit",noWrap:!0},"iTunes Visualize App!"))),r.a.createElement("main",null,r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{path:"/top",component:k}),r.a.createElement(h.a,{path:"/visual",component:J}))),r.a.createElement(f.a,{mt:8},r.a.createElement(y,null))))}}]),a}(r.a.Component)),Y=Object(E.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},icon:{marginRight:e.spacing(2)}}}))(P);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.0ccf5c3e.chunk.js.map