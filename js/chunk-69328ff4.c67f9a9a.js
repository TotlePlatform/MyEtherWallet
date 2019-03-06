(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69328ff4"],{"0355":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-offline-container"},[a("interface-container-title",{attrs:{title:t.$t("common.offline")}}),a("div",{staticClass:"generate-tx"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"send-form"},[a("div",{staticClass:"form-block amount-to-address"},[a("ul",{staticClass:"type-amount"},[a("li",{staticClass:"type"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxType")))])]),a("currency-picker",{attrs:{currency:t.allTokens,token:!0,page:"sendOfflineGenTx"},on:{selectedCurrency:t.setSelectedCurrency}})],1),a("li",{staticClass:"amount"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxAmount")))])]),a("div",{staticClass:"the-form amount-number"},[a("input",{attrs:{placeholder:t.$t("interface.depAmount"),type:"number",step:"any",name:""},domProps:{value:t.toAmt},on:{input:t.debouncedAmount}})])])]),a("div",{staticClass:"to-address"},[a("div",{staticClass:"title"},[a("h4",[t._v(t._s(t.$t("interface.sendTxToAddr"))+"  ")]),a("blockie",{directives:[{name:"show",rawName:"v-show",value:""!==t.address&&t.validAddress,expression:"address !== '' && validAddress"}],staticClass:"blockie-image-icon",attrs:{address:t.address,width:"32px",height:"32px"}}),a("button",{staticClass:"title-button copy-button prevent-user-select",on:{click:t.copyToAddress}},[t._v("\n                "+t._s(t.$t("common.copy"))+"\n              ")])],1),a("div",{staticClass:"the-form address-block"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],ref:"toaddress",attrs:{name:"name",placeholder:"Please Enter The Address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("i",{class:[t.validAddress?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.data")))])])])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.toData,expression:"toData"}],attrs:{disabled:"ETH"!==t.selectedCoinType.symbol,type:"string",placeholder:"e.g. 0x65746865726d696e652d657531"},domProps:{value:t.toData},on:{input:function(e){e.target.composing||(t.toData=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:[""!==t.toData?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.gasLimit")))]),a("popover",{attrs:{popcontent:t.$t("popover.gasLimit")}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gasLimit,expression:"gasLimit"}],attrs:{placeholder:t.$t("common.gasLimit"),type:"number"},domProps:{value:t.gasLimit},on:{input:function(e){e.target.composing||(t.gasLimit=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.gasLimit>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.nonce")))]),a("popover",{attrs:{popcontent:t.$t("popover.nonce")}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.nonce,expression:"nonce"}],attrs:{placeholder:t.$t("common.nonce"),type:"number"},domProps:{value:t.nonce},on:{input:function(e){e.target.composing||(t.nonce=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.nonce>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"send-form"},[a("div",{staticClass:"title-container"},[a("div",{staticClass:"title"},[a("div",{staticClass:"title-helper"},[a("h4",[t._v(t._s(t.$t("common.gasPrice")))]),a("popover",{attrs:{popcontent:t.txSpeedMsg}})],1)])]),a("div",{staticClass:"the-form gas-amount"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.localGasPrice,expression:"localGasPrice"}],attrs:{placeholder:t.$t("common.gasPrice"),type:"number"},domProps:{value:t.localGasPrice},on:{input:function(e){e.target.composing||(t.localGasPrice=e.target.value)}}}),a("div",{staticClass:"good-button-container"},[a("i",{class:["fa fa-check-circle good-button",t.localGasPrice>0?"":"not-good"],attrs:{"aria-hidden":"true"}})])])]),a("div",{staticClass:"submit-button-container"},[a("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),a("div",{staticClass:"submit-button large-round-button-green-border",on:{click:t.uploadClick}},[t._v("\n          Import JSON\n        ")]),a("div",{class:[t.isAllInputValid?"":"disabled","submit-button large-round-button-green-filled"],on:{click:t.generateTx}},[t._v("\n          "+t._s(t.$t("interface.generateTx"))+"\n        ")]),a("interface-bottom-text",{attrs:{link:"https://kb.myetherwallet.com",question:"Have issues?","link-text":"Help Center"}})],1)]),a("signed-tx-modal",{ref:"signedTxModal",attrs:{"signed-tx":t.signed,"raw-tx":t.raw}})],1)],1)},n=[],i=a("f499"),o=a.n(i),c=(a("6b54"),a("96cf"),a("3b8d")),r=(a("55dd"),a("a481"),a("7f7f"),a("cebc")),l=a("55c1"),d=a("539d"),u=a("d7a2"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-modal",{ref:"signedTx",staticClass:"bootstrap-modal signed-tx-modal",attrs:{title:t.$t("interface.signedTx"),"hide-footer":""}},[a("div",{staticClass:"d-block"},[a("div",{staticClass:"title-block"},[a("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.signedTx")))])]),a("div",{staticClass:"signed-tx-container"},[a("code",[t._v(t._s(JSON.parse(t.signedTx).rawTransaction))]),a("input",{ref:"signedTxInput",staticStyle:{position:"absolute",top:"0",opacity:"0"},attrs:{autocomplete:"off"},domProps:{value:t.signedTx}})]),a("div",{staticClass:"scan-download-container"},[a("h4",{staticClass:"block-title"},[t._v("Scan QR code")]),""!==t.signedTx?a("div",{staticClass:"scan-download-items"},[a("qrcode",{attrs:{value:JSON.parse(t.signedTx).rawTransaction,options:{size:200}}}),t._v("or "),a("a",{attrs:{href:t.jsonFile,download:t.jsonFileName}},[t._v("Download JSON")])],1):t._e()]),a("div",{staticClass:"raw"},[a("div",{staticClass:"title-block"},[a("h4",{staticClass:"block-title"},[t._v(t._s(t.$t("interface.raw")))]),a("div",{staticClass:"sliding-switch-white"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:function(e){t.showRaw=!t.showRaw}}}),a("span",{staticClass:"slider round"})])])]),t.showRaw?a("div",{staticClass:"raw-tx-container"},[a("code",[t._v(t._s(t.rawTx))])]):t._e()])]),a("div",{staticClass:"button-container"},[a("b-btn",{staticClass:"mid-round-button-green-filled close-button",on:{click:t.copyAndContinue}},[t._v(t._s(t.$t("interface.copyAndCont")))])],1)])},m=[],h=a("5176"),v=a.n(h),f={name:"SignedTxModal",props:{signedTx:{type:String,default:""},rawTx:{type:Object,default:function(){return{}}},pathUpdate:{type:Function,default:function(){}}},data:function(){return{showRaw:!1,jsonFile:"",jsonFileName:"signedTransactionObject-".concat(+new Date,".json")}},watch:{signedTx:function(t){var e=JSON.parse(t),a=this.rawTx;delete a["generateOnly"];var s=v()({},e.tx,a);delete e["tx"],e["tx"]=s;var n=o()(e),i=new Blob([n],{type:"mime"});this.jsonFileName="signedTransactionObject-".concat(+new Date,".json"),this.jsonFile=window.URL.createObjectURL(i)}},methods:{copyAndContinue:function(){this.$refs.signedTxInput.select(),document.execCommand("copy"),this.$refs.signedTx.hide()}}},g=f,b=(a("f762"),a("2877")),w=Object(b["a"])(g,p,m,!1,null,null,null),C=w.exports,y=a("c8e5"),x=a("901e"),k=a.n(x),T=a("70c1"),_=a("2f62"),A=a("b7d3"),$=a("8ded"),P=a.n($),S=a("ce96"),N=a("1131"),j=a.n(N),D={components:{"interface-bottom-text":d["a"],blockie:y["a"],"signed-tx-modal":C,"currency-picker":u["a"],"interface-container-title":l["a"]},props:{tokens:{type:Array,default:function(){return[]}},nonce:{type:String,default:"0"},highestGas:{type:String,default:"0"}},data:function(){return{toAmt:0,address:"",toData:"0x",gasLimit:21e3,selectedCoinType:{},raw:{},signed:"{}",localNonce:this.nonce,file:"",localGasPrice:this.highestGas}},computed:Object(r["a"])({},Object(_["b"])({wallet:"wallet",network:"network",web3:"web3"}),{txSpeedMsg:function(){var t=this.network.type.name,e="".concat(this.$t("popover.txSpeedPt1").replace("{0}",t)," ").concat(this.$t("popover.txSpeedPt2").replace("{0}",t));return e},validAddress:function(){return Object(A["a"])(this.address)},allTokens:function(){var t=P.a.get("customTokens"),e=this.tokens.concat(t[this.network.type.name]),a=e.sort(function(t,e){return t.symbol.toUpperCase()<e.symbol.toUpperCase()?-1:t.symbol.toUpperCase()>e.symbol.toUpperCase()?1:0});return a},isAllInputValid:function(){return this.toData.length>=2&&this.address.length>0&&this.validAddress&&this.toAmt>=0&&this.gasLimit>0&&this.localNonce>0&&this.localGasPrice}}),watch:{highestGas:function(t){this.localGasPrice=t},nonce:function(t){this.localNonce=t},toData:function(t){S["d"].validateHexString(t)?this.toData=t:this.toData="0x"},toAmt:function(t){this.createDataHex(t,null,null)},address:function(t){this.validAddress&&this.createDataHex(null,t,null)},selectedCoinType:function(t){this.createDataHex(null,null,t)}},methods:{debouncedAmount:j.a._.debounce(function(t){var e=this.selectedCoinType.symbol===this.network.type.name?18:this.selectedCoinType.decimals;this.toAmt=new k.a(t.target.value).decimalPlaces(e).toFixed(),t.target.value=this.toAmt},300),createDataHex:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,a,s){var n,i,o,c,r,l,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=null!==e?e:this.toAmt,i=null!==a?a:this.address,o=null!==s?s:this.selectedCoinType,c=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],o.symbol!==this.network.type.name&&""!==i&&(r=""===n||null===n?"0":n,l=new this.web3.eth.Contract(c,o.address),d=new k.a(r).times(new k.a(10).pow(o.decimals)),this.toData=l.methods.transfer(i,d.toFixed()).encodeABI());case 5:case"end":return t.stop()}},t,this)}));function e(e,a,s){return t.apply(this,arguments)}return e}(),copyToAddress:function(){var t=this.$refs.toaddress;t.select(),document.execCommand("copy"),window.getSelection().removeAllRanges()},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,a=new FileReader;a.onloadend=function(a){try{var s=JSON.parse(a.target.result);e.localGasPrice=T["fromWei"](s.gasPrice,"gwei"),e.localNonce=s.localNonce}catch(t){S["e"].responseHandler(t,S["e"].WARN)}},a.readAsBinaryString(t.target.files[0])},generateTx:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.selectedCoinType.symbol!==this.network.type.name,a=T["toWei"](this.toAmt,"ether"),s={nonce:S["d"].sanitizeHex(new k.a(this.localNonce).toString(16)),gasLimit:S["d"].sanitizeHex(new k.a(this.gasLimit).toString(16)),gasPrice:S["d"].sanitizeHex(new k.a(T["toWei"](this.localGasPrice,"gwei")).toString(16)),to:e?this.selectedCoinType.address:this.address,value:e?0:a,data:this.toData,chainId:this.network.type.chainID},this.raw=s,t.next=6,this.wallet.signTransaction(this.raw);case 6:n=t.sent,this.signed=o()(n),this.$refs.signedTxModal.$refs.signedTx.show(),window.scrollTo(0,0);case 10:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),setSelectedCurrency:function(t){this.selectedCoinType=t,t.symbol===this.network.type.name&&(this.toData="0x")}}},O=D,G=(a("c49e"),Object(b["a"])(O,s,n,!1,null,"616dd920",null)),L=G.exports;a.d(e,"default",function(){return L})},"4a94":function(t,e,a){},"772e":function(t,e,a){},c49e:function(t,e,a){"use strict";var s=a("4a94"),n=a.n(s);n.a},f762:function(t,e,a){"use strict";var s=a("772e"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-69328ff4.c67f9a9a.js.map