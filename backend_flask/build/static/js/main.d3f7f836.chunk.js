(this.webpackJsonpfrontend_react=this.webpackJsonpfrontend_react||[]).push([[0],{187:function(e,t,a){e.exports=a(357)},192:function(e,t,a){},216:function(e,t,a){},355:function(e,t,a){},357:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),o=(a(192),a(21)),s=a(15),c=a(27),m=a(28),u=a(32),d=a(175),h=a(35),p=a(5),g=a(174),E=a.n(g),b=a(410),f=a(407),y=a(403),v=a(404),S=a(392),C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(S.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 SonnaMonoHaNai ",(new Date).getFullYear(),".")}}]),t}(r.a.Component),k=(a(154),a(155)),O=a.n(k),j=a(397),B=a(395),w=a(179),x=a(396),T=a(159),D=a.n(T),N=(a(216),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={file:[],isDisabled:!0,isLoading:!1,dataSortedBySong:"",dataSortedByArtist:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({file:e[0],isDisabled:!this.state.isDisabled})}},{key:"handleDelete",value:function(e){this.setState({file:[],isDisabled:!this.state.isDisabled})}},{key:"sendFile",value:function(){var e=this;this.setState({isLoading:!this.state.isLoading});var t=new FormData;t.append("file",this.state.file,"records.xml");O.a.post("https://itunes-visualize-app.herokuapp.com/api/upload",t,{headers:{"content-type":"multipart/form-data"}}).then((function(t){t.data?(e.setState({dataBySong:t.data.song,dataByArtist:t.data.artist,isLoading:!e.state.isLoading}),e.props.history.push({pathname:"/visualize",state:{dataBySong:e.state.dataBySong,dataByArtist:e.state.dataByArtist}})):alert("XML\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u30c7\u30fc\u30bf\u304c\u6b63\u3057\u304f\u53d6\u5f97\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\ud83d\ude22")})).catch((function(){console.error("\u30a8\u30e9\u30fc\u306b\u306a\u3063\u3061\u3083\u3044\u307e\u3057\u305f\ud83d\ude22"),alert("\u30a8\u30e9\u30fc\u306b\u306a\u3063\u3061\u3083\u3044\u307e\u3057\u305f\ud83d\ude22"),e.setState({isLoading:!e.state.isLoading})}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.props.classes.heroContent},r.a.createElement(j.a,{maxWidth:"md"},r.a.createElement(S.a,{component:"h1",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0},"\u81ea\u3089\u306e\u97f3\u697d\u6027\u3092\u518d\u767a\u898b\u3057\u307e\u3057\u3087\u3046!"),r.a.createElement(S.a,{variant:"subtitle1",align:"center",color:"textSecondary",paragraph:!0},"iTunes\u304b\u3089\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305f ",r.a.createElement("code",null,".xml")," \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3068\u7c21\u5358\u306b\u60c5\u5831\u3092\u53ef\u8996\u5316\u3067\u304d\u307e\u3059.",r.a.createElement("br",null),"\u60c5\u5831\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306f\u3001 ",r.a.createElement("code",null,"iTunes>\u30d5\u30a1\u30a4\u30eb>\u30e9\u30a4\u30d6\u30e9\u30ea>\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u66f8\u304d\u51fa\u3057")," \u304b\u3089",r.a.createElement("br",null),"\u3053\u308c\u307e\u3067\u306b\u6700\u3082\u591a\u304f\u8074\u3044\u305f\u66f2\u3084\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u3054\u3068\u306e\u30e9\u30f3\u30ad\u30f3\u30b0\u3092\u898b\u3066\u3001\u97f3\u697d\u306e\u597d\u307f\u3092\u518d\u767a\u898b\u3057\u307e\u3057\u3087\u3046\uff01"))),r.a.createElement("div",null,r.a.createElement(j.a,{maxWidth:"md"},r.a.createElement(w.a,{dropzoneClass:"material-ui-dropzone",dropzoneParagraphClass:"material-ui-dropzone-paragraph",maxFileSize:3e7,acceptedFiles:["application/xml","text/xml"],dropzoneText:"iTunes\u304b\u3089\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3057\u305fxml\u30d5\u30a1\u30a4\u30eb\u3092\u9078\u629e\u3057\u3066\u306d\ud83d\udc4b",showFileNames:!0,showPreviewsInDropzone:!0,useChipsForPreview:!0,previewChipProps:{color:"primary"},filesLimit:1,onChange:this.handleChange.bind(this),onDelete:this.handleDelete.bind(this)}),r.a.createElement("div",{className:this.props.classes.heroButton},r.a.createElement(B.a,{container:!0,justify:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(x.a,{variant:"contained",color:"primary",size:"large",disabled:this.state.isDisabled,onClick:this.sendFile.bind(this)},"Upload Data!")))),r.a.createElement("div",{className:this.props.classes.loading},r.a.createElement(B.a,{container:!0,justify:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(D.a,{sizeUnit:"px",size:50,color:"#123abc",loading:this.state.isLoading})))))))}}]),t}(r.a.Component)),z=Object(p.a)((function(e){return{heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(4,0,2)},heroButton:{marginTop:e.spacing(4)},loading:{marginTop:e.spacing(4)}}}))(N),A=a(162),L=a.n(A),W=a(163),F=a.n(W),P=a(398),M=a(402),G=a(401),I=a(399),U=a(400),J=a(359),R=a(160),H=a(408),X=a(409),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={dataBySong:[],dataByArtist:[],songConfig:{},artistConfig:{},isSong:!0,isTable:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(this.props.location.state.dataBySong),t=this.createGraphConfig(e,"Song"),a=JSON.parse(this.props.location.state.dataByArtist),n=this.createGraphConfig(a,"Artist");this.setState({dataBySong:e,dataByArtist:a,songConfig:t,artistConfig:n}),this.setMetaTags()}},{key:"setMetaTags",value:function(){for(var e=document.head.children,t=0;t<e.length;t++){var a=e[t].getAttribute("name");null!==a&&-1!==a.indexOf("twitter:image")&&console.log("\u3053\u3053\u3067image\u30bf\u30b0\u306e\u8a2d\u5b9a\u3092\u3059\u308b\u3088")}}},{key:"createGraphConfig",value:function(e,t){var a=e.map((function(e){return"Song"===t?e.Name:e.Artist})),n=e.map((function(e){return e["Play Count"]}));return{labels:a,datasets:[{label:"Song"===t?"\u66f2\u3054\u3068\u306eTOP10\ud83d\udc51":"\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u3054\u3068\u306eTOP10\ud83d\udc51",data:n,backgroundColor:"rgba(188,54,255,0.2)",borderColor:"rgba(188,54,255,0.8)",borderWidth:1,hoverBackgroundColor:"rgba(188,54,255,0.4)",hoverBorderColor:"rgba(188,54,255,1)"}]}}},{key:"handleSort",value:function(){this.state.isTable?this.setState({isTable:!this.state.isTable,isSong:!this.state.isSong}):this.setState({isSong:!this.state.isSong})}},{key:"handleMode",value:function(){this.setState({isTable:!this.state.isTable})}},{key:"handleDownload",value:function(){var e=this.playCountGraph.chartInstance.canvas.toDataURL(),t=document.createElement("a");t.href=e,t.download="song-info.png",t.click()}},{key:"handleShare",value:function(){}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:this.props.classes.heroContent},r.a.createElement(j.a,{maxWidth:"sm"},r.a.createElement(S.a,{component:"h1",variant:"h4",align:"center",color:"textPrimary",gutterBottom:!0},"\u65b0\u305f\u306a\u767a\u898b\u3092\u30b7\u30a7\u30a2\u3057\u307e\u3057\u3087\u3046\uff01"),r.a.createElement(S.a,{variant:"subtitle1",align:"center",color:"textSecondary",paragraph:!0},"\u691c\u7d22\u6761\u4ef6\u304b\u3089\u3001\u8272\u3005\u306a\u60c5\u5831\u3092\u5f97\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059.",r.a.createElement("br",null),"\u3082\u3057\u3082\u65b0\u305f\u306a\u767a\u898b\u304c\u3042\u3063\u305f\u306a\u3089\u3001\u305d\u308c\u3092Twitter\u3067\u30b7\u30a7\u30a2\u3057\u307e\u3057\u3087\u3046\uff01"),r.a.createElement("div",{className:this.props.classes.heroButtons},r.a.createElement(B.a,{container:!0,justify:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:this.handleSort.bind(this),startIcon:r.a.createElement(L.a,null)},this.state.isSong?"\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\u3067\u4e26\u3073\u66ff\u3048":"\u66f2\u3067\u4e26\u3073\u66ff\u3048")))))),e.state.isTable?r.a.createElement(j.a,{maxWidth:"lg"},r.a.createElement(J.a,{className:e.props.classes.paper},r.a.createElement("div",{className:e.props.classes.tableWrapper},r.a.createElement(P.a,{stickyHeader:!0,"aria-label":"simple table"},r.a.createElement(I.a,null,r.a.createElement(U.a,null,r.a.createElement(G.a,null,"\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8"),r.a.createElement(G.a,null,"\u30a2\u30eb\u30d0\u30e0"),r.a.createElement(G.a,null,"\u66f2\u540d"),r.a.createElement(G.a,null,"\u30ea\u30ea\u30fc\u30b9\u5e74"),r.a.createElement(G.a,null,"\u518d\u751f\u56de\u6570"))),r.a.createElement(M.a,null,e.state.dataBySong.map((function(e,t){return r.a.createElement(U.a,{key:t},r.a.createElement(G.a,null,e.Artist),r.a.createElement(G.a,null,e.Album),r.a.createElement(G.a,null,e.Name),r.a.createElement(G.a,null,e.Year),r.a.createElement(G.a,null,e["Play Count"]))}))))))):r.a.createElement(j.a,{maxWidth:"lg"},r.a.createElement(R.a,{data:e.state.isSong?e.state.songConfig:e.state.artistConfig,witdh:60,height:120,ref:function(t){return e.playCountGraph=t}})),r.a.createElement(j.a,{maxWidth:"sm"},r.a.createElement("div",{className:this.props.classes.heroButtons},r.a.createElement(B.a,{container:!0,justify:"center"},r.a.createElement(B.a,{item:!0},r.a.createElement(x.a,{variant:"outlined",color:"primary",onClick:this.handleDownload.bind(this),startIcon:r.a.createElement(F.a,null),className:this.props.classes.itemButton},"\u753b\u50cf\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9")),r.a.createElement(B.a,{item:!0},r.a.createElement(H.a,{className:this.props.classes.itemButton},r.a.createElement(X.a,{size:32,round:!0})))))))}}]),t}(r.a.Component),_=Object(p.a)((function(e){return{root:{width:"100%",marginTop:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(4,0,2)},heroButtons:{marginTop:e.spacing(2)},paper:{overflowX:"auto"},tableWrapper:{minWidth:650,maxHeight:500},itemButton:{margin:e.spacing(0,2,0)}}}))(Y),V=a(170),$=a(171);function q(){var e=Object(V.a)(["@import url('https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:500&display=swap');\n"]);return q=function(){return e},e}var K=Object($.a)(q()),Q=(a(355),function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null),r.a.createElement(K,null),r.a.createElement(y.a,{position:"relative"},r.a.createElement(v.a,null,r.a.createElement(E.a,{className:this.props.classes.icon}),r.a.createElement(S.a,{variant:"h5",color:"inherit",noWrap:!0},"iTunes Visualize App!"))),r.a.createElement("main",null,r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement(h.a,{exact:!0,path:"/",component:z}),r.a.createElement(h.a,{exact:!0,path:"/visualize",component:_}))),r.a.createElement(f.a,{mt:4,mb:2},r.a.createElement(C,null))))}}]),t}(r.a.Component)),Z=Object(p.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},icon:{marginRight:e.spacing(2)}}}))(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(180),te=Object(ee.a)({typography:{fontFamily:'"M PLUS Rounded 1c", "sans-serif"'}}),ae=a(405);l.a.render(r.a.createElement(ae.a,{theme:te},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[187,1,2]]]);
//# sourceMappingURL=main.d3f7f836.chunk.js.map