(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18a7c703"],{6252:function(e,t,n){"use strict";var a=n("b24b"),s=n.n(a);s.a},b24b:function(e,t,n){},d494:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register-domain-container"},[n("back-button"),n("router-view",{attrs:{"contract-initiated":e.contractInitiated,"check-domain":e.checkDomain,"bid-amount":e.bidAmount,"bid-mask":e.bidMask,"secret-phrase":e.secretPhrase,"start-auction-and-bid":e.startAuctionAndBid,"domain-name":e.domainName,"auction-date-end":e.auctionDateEnd,loading:e.loading,"name-hash":e.nameHash,"label-hash":e.labelHash,owner:e.owner,"resolver-address":e.resolverAddress,"deed-owner":e.deedOwner,"highest-bidder":e.highestBid,raw:e.raw,step:e.step,"send-bid":e.sendBid,"reveal-bid":e.revealBid,"domain-name-err":e.domainNameErr,"generate-key-phrase":e.generateKeyPhrase,finalize:e.finalize,"update-resolver":e.updateResolver,"transfer-domain":e.transferDomain,tld:e.network.type.ens.registrarTLD,"network-name":e.network.type.name,"register-fifs-name":e.registerFifsName},on:{updateSecretPhrase:e.updateSecretPhrase,updateBidAmount:e.updateBidAmount,updateBidMask:e.updateBidMask,domainNameChange:e.updateDomainName,updateStep:e.updateStep}})],1)},s=[],i=(n("6b54"),n("ac6a"),n("96cf"),n("3b8d")),r=n("cebc"),o=n("572c"),u=[{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"releaseDeed",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"}],name:"getAllowedTime",outputs:[{name:"timestamp",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"unhashedName",type:"string"}],name:"invalidateName",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"hash",type:"bytes32"},{name:"owner",type:"address"},{name:"value",type:"uint256"},{name:"salt",type:"bytes32"}],name:"shaBid",outputs:[{name:"sealedBid",type:"bytes32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"bidder",type:"address"},{name:"seal",type:"bytes32"}],name:"cancelBid",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"}],name:"entries",outputs:[{name:"",type:"uint8"},{name:"",type:"address"},{name:"",type:"uint256"},{name:"",type:"uint256"},{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"ens",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"},{name:"_value",type:"uint256"},{name:"_salt",type:"bytes32"}],name:"unsealBid",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"transferRegistrars",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"bytes32"}],name:"sealedBids",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"}],name:"state",outputs:[{name:"",type:"uint8"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"},{name:"newOwner",type:"address"}],name:"transfer",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"_hash",type:"bytes32"},{name:"_timestamp",type:"uint256"}],name:"isAllowed",outputs:[{name:"allowed",type:"bool"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"finalizeAuction",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"registryStarted",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"launchLength",outputs:[{name:"",type:"uint32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"sealedBid",type:"bytes32"}],name:"newBid",outputs:[],payable:!0,type:"function"},{constant:!1,inputs:[{name:"labels",type:"bytes32[]"}],name:"eraseNode",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hashes",type:"bytes32[]"}],name:"startAuctions",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"hash",type:"bytes32"},{name:"deed",type:"address"},{name:"registrationDate",type:"uint256"}],name:"acceptRegistrarTransfer",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"_hash",type:"bytes32"}],name:"startAuction",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"rootNode",outputs:[{name:"",type:"bytes32"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"hashes",type:"bytes32[]"},{name:"sealedBid",type:"bytes32"}],name:"startAuctionsAndBid",outputs:[],payable:!0,type:"function"},{inputs:[{name:"_ens",type:"address"},{name:"_rootNode",type:"bytes32"},{name:"_startDate",type:"uint256"}],payable:!1,type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!1,name:"registrationDate",type:"uint256"}],name:"AuctionStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"bidder",type:"address"},{indexed:!1,name:"deposit",type:"uint256"}],name:"NewBid",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"status",type:"uint8"}],name:"BidRevealed",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"registrationDate",type:"uint256"}],name:"HashRegistered",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!1,name:"value",type:"uint256"}],name:"HashReleased",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"hash",type:"bytes32"},{indexed:!0,name:"name",type:"string"},{indexed:!1,name:"value",type:"uint256"},{indexed:!1,name:"registrationDate",type:"uint256"}],name:"HashInvalidated",type:"event"}],p=[{constant:!0,inputs:[],name:"creationDate",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[],name:"destroyDeed",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"setOwner",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"registrar",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"refundRatio",type:"uint256"}],name:"closeDeed",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newRegistrar",type:"address"}],name:"setRegistrar",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"newValue",type:"uint256"}],name:"setBalance",outputs:[],payable:!0,type:"function"},{inputs:[],type:"constructor"},{payable:!0,type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"newOwner",type:"address"}],name:"OwnerChanged",type:"event"},{anonymous:!1,inputs:[],name:"DeedClosed",type:"event"}],d=p,y=[{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"resolver",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"label",type:"bytes32"},{name:"owner",type:"address"}],name:"setSubnodeOwner",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"ttl",type:"uint64"}],name:"setTTL",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"ttl",outputs:[{name:"",type:"uint64"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"resolver",type:"address"}],name:"setResolver",outputs:[],payable:!1,type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"owner",type:"address"}],name:"setOwner",outputs:[],payable:!1,type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"owner",type:"address"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"label",type:"bytes32"},{indexed:!1,name:"owner",type:"address"}],name:"NewOwner",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"resolver",type:"address"}],name:"NewResolver",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"ttl",type:"uint64"}],name:"NewTTL",type:"event"}],c=[{constant:!0,inputs:[],name:"ens",outputs:[{name:"",type:"address"}],payable:!1,type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"expiryTimes",outputs:[{name:"",type:"uint256"}],payable:!1,type:"function"},{constant:!1,inputs:[{name:"subnode",type:"bytes32"},{name:"owner",type:"address"}],name:"register",outputs:[],payable:!1,type:"function"},{constant:!0,inputs:[],name:"rootNode",outputs:[{name:"",type:"bytes32"}],payable:!1,type:"function"},{inputs:[{name:"ensAddr",type:"address"},{name:"node",type:"bytes32"}],type:"constructor"}],m=[{constant:!0,inputs:[{name:"interfaceID",type:"bytes4"}],name:"supportsInterface",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"pure",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"key",type:"string"},{name:"value",type:"string"}],name:"setText",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"contentTypes",type:"uint256"}],name:"ABI",outputs:[{name:"contentType",type:"uint256"},{name:"data",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"x",type:"bytes32"},{name:"y",type:"bytes32"}],name:"setPubkey",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"hash",type:"bytes"}],name:"setContenthash",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"addr",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"},{name:"key",type:"string"}],name:"text",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"contentType",type:"uint256"},{name:"data",type:"bytes"}],name:"setABI",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"name",type:"string"}],name:"setName",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"contenthash",outputs:[{name:"",type:"bytes"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"node",type:"bytes32"}],name:"pubkey",outputs:[{name:"x",type:"bytes32"},{name:"y",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"node",type:"bytes32"},{name:"addr",type:"address"}],name:"setAddr",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"ensAddr",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"a",type:"address"}],name:"AddrChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"name",type:"string"}],name:"NameChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!0,name:"contentType",type:"uint256"}],name:"ABIChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"x",type:"bytes32"},{indexed:!1,name:"y",type:"bytes32"}],name:"PubkeyChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"indexedKey",type:"string"},{indexed:!1,name:"key",type:"string"}],name:"TextChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"node",type:"bytes32"},{indexed:!1,name:"hash",type:"bytes"}],name:"ContenthashChanged",type:"event"}],h=n("00a5"),b=n.n(h),l=n("70c1"),f=n("2c0b"),g=n("7856"),w=n("2f62"),v=n("ce96"),x={components:{"back-button":o["a"]},data:function(){return{domainName:"",loading:!1,bidAmount:.01,bidMask:.02,nameHash:"",labelHash:"",owner:"",resolverAddress:"",deedOwner:"",secretPhrase:"",registrarAddress:"",auctionDateEnd:0,auctionRegistrarContract:{},raw:{},highestBid:"",contractInitiated:!1,step:1,domainNameErr:!1,ensRegistryContract:{}}},computed:Object(r["a"])({},Object(w["b"])({web3:"web3",network:"network",account:"account",ens:"ens"}),{registrarTLD:function(){return this.network.type.ens.registrarTLD},registrarType:function(){return this.network.type.ens.registrarType}}),watch:{ens:function(e){e&&this.setRegistrar()}},mounted:function(){var e=this;this.$nextTick(function(){e.setup()})},methods:{setup:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.domainName="",this.loading=!1,this.bidAmount=.01,this.bidMask=.02,this.nameHash="",this.labelHash="",this.owner="",this.resolverAddress="",this.deedOwner="",this.secretPhrase="",this.registrarAddress="",this.auctionDateEnd=0,this.auctionRegistrarContract={},this.raw={},this.highestBid="",this.contractInitiated=!1,this.step=1,this.contractInitiated=!1,this.contractInitiated=!0,this.domainNameErr=!1,this.ens&&this.setRegistrar();case 21:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),setRegistrar:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.web3,e.next=3,this.getRegistrarAddress();case 3:this.registrarAddress=e.sent,this.auctionRegistrarContract=new t.eth.Contract(u,this.registrarAddress),this.fifsRegistrarContract=new t.eth.Contract(c,this.registrarAddress),this.ensRegistryContract=new t.eth.Contract(y,this.network.type.ens.registry);case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),transferDomain:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("auction"!==this.registrarType){e.next=7;break}return e.next=3,this.auctionRegistrarContract.methods.transfer(this.labelHash,t).encodeABI();case 3:a=e.sent,n=this.registrarAddress,e.next=12;break;case 7:if("fifs"!==this.registrarType){e.next=12;break}return e.next=10,this.ensRegistryContract.methods.setOwner(this.nameHash,t).encodeABI();case 10:a=e.sent,n=this.network.type.ens.registry;case 12:s={from:this.account.address,to:n,data:a,value:0},this.web3.eth.sendTransaction(s).catch(function(e){v["e"].responseHandler(e,!1)});case 14:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),updateResolver:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,s,i,r,o,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.web3,a=this.account.address,e.next=4,this.ens.resolver("resolver.eth");case 4:return s=e.sent,e.next=7,s.addr();case 7:i=e.sent,r=new n.eth.Contract(m,i),o={to:this.network.type.ens.registry,from:a,data:this.ensRegistryContract.methods.setResolver(this.nameHash,i).encodeABI(),value:0},u={to:i,from:a,data:r.methods.setAddr(this.nameHash,t).encodeABI(),value:0},n.mew.sendBatchTransactions([o,u]);case 12:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),finalize:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.account.address,n=this.web3,e.next=4,this.auctionRegistrarContract.methods.finalizeAuction(this.labelHash).encodeABI();case 4:a=e.sent,s={from:t,value:0,to:this.registrarAddress,data:a},n.eth.sendTransaction(s).catch(function(e){v["e"].responseHandler(e,!1)});case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),registerFifsName:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.account.address,n=this.web3,e.next=4,this.fifsRegistrarContract.methods.register(this.labelHash,t).encodeABI();case 4:a=e.sent,s={from:t,value:0,to:this.registrarAddress,data:a},n.eth.sendTransaction(s).catch(function(e){v["e"].responseHandler(e,!1)});case 7:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),getRegistrarAddress:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.ens.owner(this.registrarTLD);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),checkDomain:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.web3,this.loading=!0,this.labelHash=t.utils.sha3(this.domainName),e.prev=3,n=[],"auction"!==this.registrarType){e.next=12;break}return e.next=8,this.auctionRegistrarContract.methods.entries(this.labelHash).call();case 8:n=e.sent,this.processResult(n),e.next=18;break;case 12:if("fifs"!==this.registrarType){e.next=18;break}return e.next=15,this.fifsRegistrarContract.methods.expiryTimes(this.labelHash).call();case 15:a=e.sent,s=1e3*a<(new Date).getTime(),s?(this.$router.push({path:"register-domain/fifs"}),this.loading=!1):(this.getMoreInfo(),this.loading=!1);case 18:e.next=24;break;case 20:e.prev=20,e.t0=e["catch"](3),v["e"].responseHandler(e.t0,!1),this.loading=!1;case 24:case"end":return e.stop()}},e,this,[[3,20]])}));function t(){return e.apply(this,arguments)}return t}(),updateStep:function(e){this.step=e},processResult:function(e){switch(this.auctionDateEnd=1e3*e[2],e[0]){case"0":this.generateKeyPhrase(),this.$router.push({path:"register-domain/auction"}),this.loading=!1;break;case"1":this.generateKeyPhrase(),this.loading=!1,this.$router.push({path:"register-domain/bid"});break;case"2":this.getMoreInfo(e[1]);break;case"3":this.loading=!1,this.$router.push({path:"register-domain/forbidden"});break;case"4":this.loading=!1,this.highestBid=l["fromWei"](e[4],"ether").toString(),this.$router.push({path:"register-domain/reveal"});break}},updateDomainName:function(e){"0x"===e.substr(0,2)||e.length<7||-1!==e.indexOf(".")?this.domainNameErr=!0:this.domainNameErr=!1;try{Object(g["a"])(e)}catch(t){return v["e"].responseHandler(t,v["e"].WARN),void(this.domainNameErr=!0)}this.domainName=Object(g["a"])(e)},getMoreInfo:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,s,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n="0x","auction"!==this.registrarType){e.next=6;break}return a=new this.web3.eth.Contract(d,t),e.next=5,a.methods.owner().call();case 5:n=e.sent;case 6:return e.prev=6,e.next=9,this.ens.owner("".concat(this.domainName,".").concat(this.registrarTLD));case 9:s=e.sent,e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](6),s="0x",v["e"].responseHandler(e.t0,!1);case 16:return e.prev=16,e.next=19,this.ens.resolver("".concat(this.domainName,".").concat(this.registrarTLD)).addr();case 19:i=e.sent,e.next=25;break;case 22:e.prev=22,e.t1=e["catch"](16),i="0x";case 25:this.nameHash=f["hash"]("".concat(this.domainName,".").concat(this.registrarTLD)),this.resolverAddress=i,this.deedOwner=n,this.owner=s,this.$router.push({path:"register-domain/owned"}),this.loading=!1;case 31:case"end":return e.stop()}},e,this,[[6,12],[16,22]])}));function t(t){return e.apply(this,arguments)}return t}(),createTransaction:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,s,i,r,o,u,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,n=this.account.address,a=this.web3.utils,e.next=5,this.auctionRegistrarContract.methods.shaBid(this.labelHash,n,a.toWei(this.bidAmount.toString(),"ether"),a.sha3(this.secretPhrase)).call();case 5:s=e.sent,"start"===t?i=this.auctionRegistrarContract.methods.startAuctionsAndBid([this.labelHash],s):"bid"===t?i=this.auctionRegistrarContract.methods.newBid(s):"reveal"===t&&(i=this.auctionRegistrarContract.methods.unsealBid(this.labelHash,a.toWei(this.bidAmount.toString(),"ether"),a.sha3(this.secretPhrase))),r=new Date,o=r.setDate(r.getDate()+5),u=r.setDate(r.getDate()-2),p={from:n,value:"reveal"===t?0:l["toWei"](this.bidMask,"ether").toString(),to:this.registrarAddress,data:i.encodeABI(),name:this.domainName,nameSHA3:a.sha3(this.domainName),bidAmount:this.bidAmount,bidMask:this.bidMask,secretPhrase:this.secretPhrase,secretPhraseSHA3:a.sha3(this.secretPhrase),auctionDateEnd:new Date(o),revealDate:new Date(u)},this.raw=p,this.loading=!1,this.step=2;case 14:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),startAuctionAndBid:function(){this.createTransaction("start")},sendBid:function(){this.createTransaction("bid")},revealBid:function(){this.createTransaction("reveal")},updateSecretPhrase:function(e){this.secretPhrase=e},updateBidAmount:function(e){this.bidAmount=e},updateBidMask:function(e){this.bidMask=e},generateKeyPhrase:function(){for(var e=[],t=0,n=b.a.wordlists.EN.length,a=0;a<3;a++)e.push(b.a.wordlists.EN[Math.floor(Math.random()*(n-t+1))+t]);this.secretPhrase=e.join(" ")}}},k=x,A=(n("6252"),n("2877")),R=Object(A["a"])(k,a,s,!1,null,"3cccfe31",null);t["default"]=R.exports}}]);
//# sourceMappingURL=chunk-18a7c703.1f8ee3b8.js.map