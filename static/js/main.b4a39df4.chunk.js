(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,n){},196:function(e,t,n){e.exports=n(404)},404:function(e,t,n){"use strict";n.r(t);var a=n(26),i=n.n(a);n(116),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}var r=n(0),c=n.n(r),l=(n(117),n(31)),s=n(32),u=n(34),m=n(33),h=n(35),d=n(44),k=(n(201),n(219),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleGenChange=n.handleGenChange.bind(Object(d.a)(n)),n.state={pokemon:[],generation:"Generation One"},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleGenChange",value:function(e){this.setState({generation:e})}},{key:"getPokemon",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon/?limit=386",{method:"GET"}).then(function(t){t.ok&&t.json().then(function(t){e.setState({pokemon:t.results})})})}},{key:"componentDidMount",value:function(){this.getPokemon()}},{key:"render",value:function(){var e,t=this.state,n=t.pokemon,a=t.generation;return n="Generation One"===a?n.slice(0,151):"Generation Two"===a?n.slice(151,251):n.slice(251,386),e=c.a.createElement("div",null,c.a.createElement(p,{onGenerationChange:this.handleGenChange}),c.a.createElement("div",{className:"pokemon-container"},n.map(function(e,t){return c.a.createElement(f,{key:e.name,id:t+1,pokemon:e.name})}))),c.a.createElement("div",null,e)}}]),t}(c.a.Component)),p=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).generationClick=n.generationClick.bind(Object(d.a)(n)),n.state={active:"Generation One"},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"generationClick",value:function(e){this.props.onGenerationChange(e),this.setState({active:e})}},{key:"render",value:function(){var e=this,t=this.state.active,n=["Generation One","Generation Two","Generation Three"].map(function(n){return c.a.createElement("button",{className:"gen-button "+(t===n?"button-active":""),key:n,onClick:function(){return e.generationClick(n)}},n)});return c.a.createElement("div",{className:"button-container"},n)}}]),t}(c.a.Component),f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isBack:!1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.setState(function(e){return{isBack:!e.isBack}})}},{key:"render",value:function(){var e=this,t=this.props.pokemon;switch(t){case"nidoran-f":t="nidoranf";break;case"nidoran-m":t="nidoranm";break;case"deoxys-normal":t="deoxys"}this.props.id;return c.a.createElement("div",{className:"pokemon-single-container",onClick:function(){return e.handleClick(t)}},c.a.createElement("div",null,c.a.createElement("img",{className:"sprites",src:"http://pokestadium.com/sprites/xy/".concat(this.state.isBack?"back/"+t:t,".gif")}),c.a.createElement("div",{className:"align-bottom"}," ",t)))}}]),t}(c.a.Component),v=k,b=n(109),g=n.n(b),O=n(181),j=n(411),E=n(412),y=n(405);o();var C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={search:"",pokemon:null,loading:!1},n.bindField=function(){return{value:n.state.search,onChange:function(e){return n.setState({search:e.target.value})}}},n.handleSubmit=function(e){e.preventDefault(),n.fetchPokemon(n.state.search)},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"fetchPokemon",value:function(){var e=Object(O.a)(g.a.mark(function e(t){var n,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,this.setState({pokemon:a,loading:!1});case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pokemon,n=e.loading,a=!n&&t&&t.id,i=!n&&t&&!t.id;return c.a.createElement(j.a,null,c.a.createElement("form",{className:"search-bar",onSubmit:this.handleSubmit},c.a.createElement(E.a,Object.assign({},this.bindField(),{type:"number"}))," ",c.a.createElement(y.a,{onClick:this.findByField},"Fetch Pokemon by ID")),n&&c.a.createElement("div",null,"Loading..."),a&&c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("small",null,"[",t.id,"]")," ",c.a.createElement("strong",null,t.name)),c.a.createElement("div",null,c.a.createElement("img",{src:t.sprites.back_default})," ",c.a.createElement("img",{src:t.sprites.front_default}))),i&&c.a.createElement("div",null,"Did not find this pokemon"))}}]),t}(r.Component),w=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(C,null),c.a.createElement(v,null," "))}}]),t}(r.Component);i.a.render(c.a.createElement(w,null),document.getElementById("root")),o()}},[[196,1,2]]]);
//# sourceMappingURL=main.b4a39df4.chunk.js.map