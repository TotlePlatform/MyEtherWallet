(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae4b8f8"],{"3eba":function(e,t,a){},"47a1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage-ens-container"},[a("h3",[e._v(e._s(e.$t("dapps.manage"))+" "+e._s(e.domainName)+"."+e._s(e.tld))]),a("div",{staticClass:"inputs-container"},[a("div",{staticClass:"form-container"},[a("form",{staticClass:"manage-form"},[a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"updateResolver"}},[e._v(e._s(e.$t("dapps.updateResolver"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.locResolverAddr,expression:"locResolverAddr"}],attrs:{type:"text",name:"updateResolver",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:e.locResolverAddr},on:{input:function(t){t.target.composing||(e.locResolverAddr=t.target.value)}}})]),a("div",{staticClass:"submit-container"},[a("button",{class:e.isAddress(e.locResolverAddr)?"":"disabled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.updateResolver(e.locResolverAddr)}}},[e._v("\n            Update\n          ")])])])]),a("div",{staticClass:"form-container"},[a("form",{staticClass:"manage-form"},[a("div",{staticClass:"input-container"},[a("label",{attrs:{for:"transferEns"}},[e._v(e._s(e.$t("dapps.transferEnsTo"))+":")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.transferTo,expression:"transferTo"}],attrs:{type:"text",name:"transferEns",placeholder:"0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D"},domProps:{value:e.transferTo},on:{input:function(t){t.target.composing||(e.transferTo=t.target.value)}}})]),a("div",{staticClass:"submit-container"},[a("button",{class:e.isAddress(e.transferTo)?"":"disabled",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.transferDomain(e.transferTo)}}},[e._v("\n            Transfer\n          ")])])])])]),a("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://kb.myetherwallet.com"}})],1)},n=[],r=a("cebc"),o=a("539d"),i=a("b7d3"),c=a("2f62"),d={components:{"interface-bottom-text":o["a"]},props:{domainName:{type:String,default:""},updateResolver:{type:Function,default:function(){}},transferDomain:{type:Function,default:function(){}},resolverAddress:{type:String,default:""},tld:{type:String,default:""}},data:function(){return{locResolverAddr:this.resolverAddress,transferTo:"",isAddress:i["a"]}},computed:Object(r["a"])({},Object(c["b"])({web3:"web3"})),mounted:function(){""===this.domainName&&this.$router.push("/interface/dapps/register-domain")}},l=d,u=(a("ecb3"),a("2877")),p=Object(u["a"])(l,s,n,!1,null,"6e4b3af0",null),f=p.exports;a.d(t,"default",function(){return f})},ecb3:function(e,t,a){"use strict";var s=a("3eba"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-3ae4b8f8.1e20902b.js.map