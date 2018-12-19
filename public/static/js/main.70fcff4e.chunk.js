(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{47:function(e,a,t){e.exports=t.p+"static/media/logo.ab10d000.png"},53:function(e,a,t){e.exports=t(81)},58:function(e,a,t){},60:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(41),l=t.n(c),s=(t(58),t(8)),m=t(9),i=t(12),o=t(10),u=t(13),h=(t(60),t(50)),p=t(11),d=t(7),E=t.n(d),g=t(14),b=t.n(g),f=t(15),v=t.n(f),k=t(63);function _(e){var a=e.launch,t=a.flight_number,n=a.mission_name,c=a.launch_date_local,l=a.launch_success;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h4",null,"Mission:"," ",r.a.createElement("span",{className:b()({"text-success":l,"text-danger":!l})},n)),r.a.createElement("p",null,"Date: ",r.a.createElement(v.a,{format:"MMMM Do, YYYY hh:mm a"},c))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(k.a,{to:"/launch/".concat(t),className:"btn btn-secondary"},"Launch Details"))))}function y(){return r.a.createElement("div",{className:"my-3"},r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),r.a.createElement("p",null,r.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}var N=E()("\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"),x=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 my-3"},"Launches"),r.a.createElement(y,null),r.a.createElement(p.Query,{query:N},function(e){var a=e.loading,t=e.error,c=e.data;return a?r.a.createElement("h4",null,"Loading...."):(t&&console.log(t),r.a.createElement(n.Fragment,null,c.launches.map(function(e){return r.a.createElement(_,{key:e.flight_number,launch:e})})))}))}}]),a}(n.Component),j=t(87),O=t(83),w=E()("\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local,\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"),M=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),r.a.createElement(n.Fragment,null,r.a.createElement(p.Query,{query:w,variables:{flight_number:e}},function(e){var a=e.loading,t=e.error,n=e.data;if(a)return r.a.createElement("h4",null,"Loading");t&&console.log(t);var c=n.launch,l=c.flight_number,s=c.mission_name,m=c.launch_year,i=c.launch_success,o=c.rocket,u=o.rocket_id,h=o.rocket_name,p=o.rocket_type;return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 my-3"},r.a.createElement("span",{className:"text-dark"},"Mission:")," ",s),r.a.createElement("h4",{className:"mb-3"},"Launch Details"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Flight Number: ",l),r.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),r.a.createElement("li",{className:"list-group-item"},"Launch Successful: ",r.a.createElement("span",{className:b()({"text-success":i,"text-danger":!i})},i?"Yes":"No"))),r.a.createElement("h4",{className:"my-3"},"Rocket Details"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",u),r.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",h),r.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),r.a.createElement("hr",null),r.a.createElement(k.a,{to:"/",className:"btn btn-secondary"},"Back"),r.a.createElement("br",null))}))}}]),a}(n.Component),R=t(47),Y=t.n(R),D=t(86);function F(){return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-dark"},r.a.createElement(k.a,{to:"/"},r.a.createElement("img",{src:Y.a,alt:"SpaceX",style:{width:250}})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon bg-secondary"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbar"},r.a.createElement("ul",{className:"navbar-nav ml-2 mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{exact:!0,to:"/",className:"nav-link text-white text-center",activeClassName:"active-nav"},"Launches")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(D.a,{exact:!0,to:"/rockets",className:"nav-link text-white text-center",activeClassName:"active-nav"},"Rockets")))))}function L(e){var a=e.rocket,t=a.rocket_id,n=a.rocket_name,c=a.rocket_type,l=a.first_flight,s=a.flickr_images;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("img",{className:"img-thumbnail img-style",src:s[0],alt:n})),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",null,"Rocket: ",r.a.createElement("span",{className:"text-white"},n)),r.a.createElement("p",null,"Rocket Type: ",c),r.a.createElement("p",null,"First Flight: ",r.a.createElement(v.a,{format:"MMMM Do, YYYY"},l))),r.a.createElement("div",{className:"col-md-3"},r.a.createElement(k.a,{to:"/rocket/".concat(t),className:"btn btn-secondary"},"Rocket Details"))))}var q=E()("\n  query RocketsQuery {\n    rockets {\n      rocket_id\n      rocket_name\n      rocket_type\n      first_flight\n      flickr_images\n    }\n  }\n"),C=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 my-3"},"Rockets"),r.a.createElement(p.Query,{query:q},function(e){var a=e.loading,t=e.error,c=e.data;return a?r.a.createElement("h4",null,"Loading...."):(t&&console.log(t),r.a.createElement(n.Fragment,null,c.rockets.map(function(e){return r.a.createElement(L,{key:e.rocket_id,rocket:e})})))}))}}]),a}(n.Component),Q=t(51);t(74);function S(e){var a=e.url,t=e.alt,n=e.selectThumb,c=e.isHighlighted;return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{className:"img-thumbnail",src:a,alt:t,style:{width:"85%",cursor:"pointer",border:c(a)},onClick:function(e){var a=e.target.src;return n(a)}}))}var T=E()("\n  query RocketQuery($rocket_id: String!) {\n    rocket(rocket_id: $rocket_id) {\n      rocket_id\n      rocket_name\n      rocket_type\n      success_rate_pct\n      first_flight\n      flickr_images\n      description\n      height {\n        feet\n      }\n      diameter {\n        feet\n      }\n      mass {\n        lb\n      }\n    }\n  }\n"),H=function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(o.a)(a).call(this))).primaryPic=function(a){return""===e.state.prime_img?a:e.state.prime_img},e.selectThumb=function(a,t){e.setState({prime_img:a})},e.isHighlighted=function(a){if(""!==e.state.prime_img)return a===e.state.prime_img?"2px solid red":"1px solid #dee2e6"},e.formatNum=function(e){var a=Object(Q.a)(e.toString()).reverse(),t=[];return console.log(a),a.forEach(function(e,n){t.push(e),(n+1)%3===0&&a[n+1]&&t.push(",")}),t.reverse().join("")},e.state={prime_img:""},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.props.match.params.rocket_id;return r.a.createElement(n.Fragment,null,r.a.createElement(p.Query,{query:T,variables:{rocket_id:a}},function(a){var t=a.loading,n=a.error,c=a.data;if(t)return r.a.createElement("h4",null,"Loading");n&&console.log(n);var l=c.rocket,s=(l.rocket_id,l.rocket_name),m=l.rocket_type,i=l.success_rate_pct,o=l.first_flight,u=l.flickr_images,h=l.description,p=l.height.feet,d=l.diameter.feet,E=l.mass.lb;return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4 my-3"},r.a.createElement("span",{className:"text-danger"},"Rocket:")," ",s),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("img",{className:"img-style prime-img",src:e.primaryPic(u[0]),alt:s})," ",r.a.createElement("hr",null),r.a.createElement("div",{className:"thumbs"},u.map(function(a){return r.a.createElement(S,{key:a,url:a,alt:s,selectThumb:e.selectThumb,isHighlighted:e.isHighlighted})}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h4",{className:"mb-3"},"Rocket Details"),r.a.createElement("p",null,"Name: ",s),r.a.createElement("p",null,"Type: ",m),r.a.createElement("p",null,"First Flight: ",r.a.createElement(v.a,{format:"MMMM Do, YYYY"},o)),r.a.createElement("p",null,"Success Rate: "," ",r.a.createElement("span",{className:b()({"text-success":i>70,"text-danger":i<70})},i," %")),r.a.createElement("section",null,r.a.createElement("h6",null,"Ship Dimensions"),r.a.createElement("p",null,"Height: ",p," feet"),r.a.createElement("p",null,"Diameter: ",d," feet"),r.a.createElement("p",null,"Mass: ",e.formatNum(E)," lbs")),r.a.createElement("p",null,"Description: ",h))))}))}}]),a}(n.Component),$=new h.a({uri:"/graphql"}),I=function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(p.ApolloProvider,{client:$},r.a.createElement(j.a,null,r.a.createElement("main",null,r.a.createElement(F,null),r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{exact:!0,path:"/",component:x}),r.a.createElement(O.a,{exact:!0,path:"/launch/:flight_number",component:M}),r.a.createElement(O.a,{exact:!0,path:"/rockets",component:C}),r.a.createElement(O.a,{exact:!0,path:"/rocket/:rocket_id",component:H})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,2,1]]]);
//# sourceMappingURL=main.70fcff4e.chunk.js.map