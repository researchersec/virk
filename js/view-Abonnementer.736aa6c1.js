(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-Abonnementer"],{"09bb":function(e,n,t){"use strict";t("f7a4")},"129f":function(e,n){e.exports=Object.is||function(e,n){return e===n?0!==e||1/e===1/n:e!=e&&n!=n}},"286a":function(e,n,t){},3694:function(e,n,t){"use strict";t("ac78")},"711b":function(e,n,t){"use strict";var a=t("f2bf"),r={class:"form-group"},o={key:0,value:""};function l(e,n,t,l,i,c){var d=Object(a["E"])("KontekstnaerHjaelp");return Object(a["w"])(),Object(a["f"])("div",r,[Object(a["j"])("label",{class:"form-label",for:e.dropdownId},Object(a["H"])(e.$t(e.textPrefix+"-label")),9,["for"]),e.visKontekstnaerHjaelp?(Object(a["w"])(),Object(a["f"])(d,{key:0,"text-prefix":e.textPrefix},null,8,["text-prefix"])):Object(a["g"])("",!0),Object(a["S"])(Object(a["j"])("select",{class:"form-select",name:e.dropdownId,id:e.dropdownId,"data-cy":e.dropdownId,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.selectedValue=n}),onChange:n[2]||(n[2]=function(){return e.emitSelected&&e.emitSelected.apply(e,arguments)})},[e.visAlleOption?(Object(a["w"])(),Object(a["f"])("option",o,Object(a["H"])(e.$t(e.textPrefix+"-alle_option-label")),1)):Object(a["g"])("",!0),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["C"])(e.options,(function(e){return Object(a["w"])(),Object(a["f"])("option",{key:e.value,value:e.value},Object(a["H"])(e.label),9,["value"])})),128))],40,["name","id","data-cy"]),[[a["M"],e.selectedValue]])])}var i=t("c731"),c=Object(a["k"])({name:"Dropdown",components:{KontekstnaerHjaelp:i["a"]},props:{textPrefix:String,visKontekstnaerHjaelp:{type:Boolean,default:!1},preselectedValue:{type:String,default:""},visAlleOption:{type:Boolean,default:!0},options:Array},emits:["change"],setup:function(e,n){var t=n.emit,r=Object(a["B"])(""),o=Object(a["B"])(e.textPrefix+"-id");function l(){t("change",r.value)}return Object(a["u"])((function(){r.value=e.preselectedValue})),Object(a["P"])((function(){return e.preselectedValue}),(function(n,t){r.value=e.preselectedValue})),{dropdownId:o,selectedValue:r,emitSelected:l}}}),d=t("d959"),s=t.n(d);const b=s()(c,[["render",l]]);n["a"]=b},7128:function(e,n,t){"use strict";t("7713")},7713:function(e,n,t){},"841c":function(e,n,t){"use strict";var a=t("d784"),r=t("825a"),o=t("1d80"),l=t("129f"),i=t("14c3");a("search",(function(e,n,t){return[function(n){var t=o(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,t):new RegExp(n)[e](String(t))},function(e){var a=t(n,this,e);if(a.done)return a.value;var o=r(this),c=String(e),d=o.lastIndex;l(d,0)||(o.lastIndex=0);var s=i(o,c);return l(o.lastIndex,d)||(o.lastIndex=d),null===s?-1:s.index}]}))},ac78:function(e,n,t){},c215:function(e,n,t){"use strict";var a=t("f2bf"),r=Object(a["V"])("data-v-9b8b856c");Object(a["z"])("data-v-9b8b856c");var o={class:"h3"},l={class:"modal-footer"};Object(a["x"])();var i,c,d=r((function(e,n,t,i,c,d){var s=Object(a["E"])("Dropdown"),b=Object(a["E"])("Checkbox"),m=Object(a["E"])("Modal");return Object(a["w"])(),Object(a["f"])(m,{"modal-id":e.modalId,"text-prefix":e.modalId,class:"administrer-abonnement-modal",separator:!0,"show-footer":!1,onHidden:e.emitHidden},{default:r((function(){return[Object(a["j"])("h2",o,Object(a["H"])(e.abonnement?e.abonnement.virksomhedsnavn:e.virksomhed.stamdata.navn),1),Object(a["j"])("span",null,Object(a["H"])(e.$t("modal-administrer-abonnement-cvr-label"))+": "+Object(a["H"])(e.abonnement?e.abonnement.cvrnummer:e.virksomhed.stamdata.cvrnummer),1),Object(a["j"])(s,{"text-prefix":e.modalId,options:e.notifikationsfrekvensOptions,onChange:e.setNotifikationsFrekvens,visAlleOption:!1,preselectedValue:e.notifikationsfrekvens},null,8,["text-prefix","options","onChange","preselectedValue"]),Object(a["j"])(b,{options:e.meddelelsesTypeOption,onChange:e.setAendringstype,class:"administrer-abonnement-modal-checkbox",textPrefix:e.modalId+"-checkbox","preselected-values":e.aendringstyper},null,8,["options","onChange","textPrefix","preselected-values"]),Object(a["j"])("div",l,[Object(a["j"])("button",{type:"button",class:"button button-secondary",onClick:n[1]||(n[1]=function(){return e.nulstil&&e.nulstil.apply(e,arguments)}),"data-modal-close":""},Object(a["H"])(e.$t("modal-administrer-abonnement-annuller")),1),Object(a["j"])("button",{type:"button",class:"button button-primary opretButton","data-cy":"opret-abonnement",onClick:n[2]||(n[2]=function(n){return e.abonnement?e.opdaterAbonnement():e.opretAbonnement()}),"data-modal-close":""},Object(a["H"])(e.$t(e.abonnement?"modal-administrer-abonnement-opdater":"modal-administrer-abonnement-godkend")),1)])]})),_:1},8,["modal-id","text-prefix","onHidden"])})),s=t("1da1"),b=(t("96cf"),t("714b")),m=t("e6e3"),u=t("b850"),f=t("711b"),j=t("7737");(function(e){e["PERSONKREDS_OG_TEGNINGSREGEL"]="PERSONKREDS_OG_TEGNINGSREGEL",e["VIRKSOMHEDSMEDDELELSER"]="VIRKSOMHEDSMEDDELELSER",e["REGNSKABSAENDRING"]="REGNSKABSAENDRING",e["VIRKSOMHEDSOPLYSNINGER"]="VIRKSOMHEDSOPLYSNINGER",e["VIRKSOMHEDSREGISTRERING"]="VIRKSOMHEDSREGISTRERING",e["EJERKREDS"]="EJERKREDS"})(i||(i={})),function(e){e["ONCHANGE"]="ONCHANGE",e["DAILY"]="DAILY",e["WEEKLY"]="WEEKLY"}(c||(c={}));var v=Object(a["k"])({name:"AdministrerAbonnementModal",props:{abonnement:{type:Object,default:void 0}},components:{Modal:b["a"],Dropdown:f["a"],Checkbox:j["a"]},emits:["hidden"],setup:function(e,n){var t=n.emit,r="modal-administrer-abonnement",o=Object(a["d"])((function(){return u["b"].virksomhed.aktivVirksomhed})),l=Object(a["B"])([{value:c.ONCHANGE,label:m["b"].getTextFromKey("mail-frekvens-straks")},{value:c.DAILY,label:m["b"].getTextFromKey("mail-frekvens-dagligt")},{value:c.WEEKLY,label:m["b"].getTextFromKey("mail-frekvens-ugeligt")}]),d=Object(a["B"])([{value:i.VIRKSOMHEDSOPLYSNINGER,label:m["b"].getTextFromKey("notifikationstype-virksomhedsoplysninger")},{value:i.PERSONKREDS_OG_TEGNINGSREGEL,label:m["b"].getTextFromKey("notifikationstype-personkreds-og-tegningsregel")},{value:i.EJERKREDS,label:m["b"].getTextFromKey("notifikationstype-ejerkreds")},{value:i.REGNSKABSAENDRING,label:m["b"].getTextFromKey("notifikationstype-regnskabsaendring")},{value:i.VIRKSOMHEDSMEDDELELSER,label:m["b"].getTextFromKey("notifikationstype-offentliggoerelser")},{value:i.VIRKSOMHEDSREGISTRERING,label:m["b"].getTextFromKey("notifikationstype-registreringshistorik")}]),b=[i.VIRKSOMHEDSOPLYSNINGER,i.PERSONKREDS_OG_TEGNINGSREGEL,i.EJERKREDS,i.REGNSKABSAENDRING,i.VIRKSOMHEDSREGISTRERING,i.VIRKSOMHEDSMEDDELELSER],f=c.ONCHANGE,j=Object(a["B"])(""),v=Object(a["B"])([]);function O(){return p.apply(this,arguments)}function p(){return p=Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={enhedsnummer:u["b"].virksomhed.aktivVirksomhed.stamdata.enhedsnummer,notifikationsfrekvens:j.value,aendringstyper:v.value},e.next=3,u["b"].abonnement.foelg(n);case 3:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function k(){return g.apply(this,arguments)}function g(){return g=Object(s["a"])(regeneratorRuntime.mark((function n(){var t,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={enhedsnummer:null===(t=e.abonnement)||void 0===t?void 0:t.enhedsnummer,notifikationsfrekvens:j.value,aendringstyper:v.value},n.next=3,u["b"].abonnement.opdaterAbonnement(a);case 3:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}function E(e){j.value=e}function y(e){v.value=e}function x(){t("hidden")}function h(){y(e.abonnement?v.value:b),E(e.abonnement?e.abonnement.notifikationsfrekvens:f)}return Object(a["P"])((function(){return e.abonnement}),(function(n,t){e.abonnement&&(E(e.abonnement.notifikationsfrekvens),y(e.abonnement.aendringstyper))})),Object(a["u"])((function(){var n,t,a,r;v.value=null!==(n=null===e||void 0===e||null===(t=e.abonnement)||void 0===t?void 0:t.aendringstyper)&&void 0!==n?n:b,j.value=null!==(a=null===e||void 0===e||null===(r=e.abonnement)||void 0===r?void 0:r.notifikationsfrekvens)&&void 0!==a?a:f})),{modalId:r,opretAbonnement:O,virksomhed:o,notifikationsfrekvensOptions:l,notifikationsfrekvens:j,aendringstyper:v,setNotifikationsFrekvens:E,setAendringstype:y,meddelelsesTypeOption:d,defaultCheckboxValues:b,opdaterAbonnement:k,emitHidden:x,nulstil:h}}}),O=(t("7128"),t("d959")),p=t.n(O);const k=p()(v,[["render",d],["__scopeId","data-v-9b8b856c"]]);n["a"]=k},d0d2:function(e,n,t){"use strict";t("286a")},e0c6:function(e,n,t){"use strict";t("e4c8")},e4c8:function(e,n,t){},f6b3:function(e,n,t){"use strict";t.r(n);t("ac1f"),t("841c");var a=t("f2bf"),r=Object(a["V"])("data-v-b125de54");Object(a["z"])("data-v-b125de54");var o={class:"abonnementer"},l={class:"overskrift h2"},i={key:0,class:"spinner"},c={key:0},d={class:"font-lead manchet"},s={key:1},b={class:"overskrift h3 mt-0"},m={class:"row"},u={class:"col-8"},f={class:"overskrift h3 mt-0"},j={type:"button",class:"button button-unstyled slet-alle-button","data-module":"modal","data-target":"modal-abonnementer-slet-alle"},v=Object(a["j"])("svg",{class:"icon-svg","aria-hidden":"true",focusable:"false"},[Object(a["j"])("use",{"xlink:href":"#delete"})],-1),O={class:"mb-4"},p={key:0},k={key:1};Object(a["x"])();var g=r((function(e,n,t,g,E,y){var x=Object(a["E"])("RedigereEmail"),h=Object(a["E"])("AbonnementCard"),R=Object(a["E"])("Paginering"),S=Object(a["E"])("Link"),I=Object(a["E"])("Modal"),A=Object(a["E"])("RedigereEmailModal"),w=Object(a["E"])("AdministrerAbonnementModal");return Object(a["w"])(),Object(a["f"])("div",o,[Object(a["j"])("h1",l,Object(a["H"])(e.$t("abonnementer-header")),1),e.loading?(Object(a["w"])(),Object(a["f"])("div",i)):(Object(a["w"])(),Object(a["f"])(a["a"],{key:1},[e.route.query.id?Object(a["g"])("",!0):(Object(a["w"])(),Object(a["f"])(a["a"],{key:0},[0===e.abonnementer.antalAbonnementer?(Object(a["w"])(),Object(a["f"])("div",c,[Object(a["j"])("p",d,Object(a["H"])(e.$t("abonnementer-ingen_abonnementer-manchet")),1),Object(a["j"])("div",{innerHTML:e.$t("abonnementer-ingen_abonnementer-broedtekst")},null,8,["innerHTML"])])):(Object(a["w"])(),Object(a["f"])("div",s,[Object(a["j"])("h2",b,Object(a["H"])(e.$t("abonnementer-redigere-email-header")),1),Object(a["j"])(x),Object(a["j"])("div",m,[Object(a["j"])("div",u,[Object(a["j"])("h2",f,Object(a["H"])(e.$t("abonnementer-virksomheder-header")),1)]),Object(a["j"])("div",{class:["col-4 align-text-right",{"pt-4":!e.isMobile}]},[Object(a["j"])("button",j,[v,Object(a["i"])(" "+Object(a["H"])(e.$t("abonnementer-slet_alle-label")),1)])],2)]),(Object(a["w"])(!0),Object(a["f"])(a["a"],null,Object(a["C"])(e.abonnementer.abonnementer,(function(n,t){return Object(a["w"])(),Object(a["f"])(h,{key:t,abonnement:n,onAbonnementUpdated:e.setSelectedAbonnement},null,8,["abonnement","onAbonnementUpdated"])})),128)),e.abonnementer.antalAbonnementer>10?(Object(a["w"])(),Object(a["f"])(R,{key:0,aktivSide:e.aktivSide,antalSider:e.antalSider,class:"paginering",onClick:e.search},null,8,["aktivSide","antalSider","onClick"])):Object(a["g"])("",!0)]))],64)),Object(a["j"])(I,{"modal-id":"modal-abonnementer-slet","text-prefix":"abonnementer-slet-modal","indhold-from-textkey":null==e.route.query.id,ref:"sletModal",onGodkend:e.sletAbonnement},{default:r((function(){return[Object(a["j"])("div",O,Object(a["H"])(e.$t("abonnementer-slet-enkelt-tekst")),1),Object(a["j"])("div",null,Object(a["H"])(e.$t("abonnementer-slet-enkelt-navn"))+" "+Object(a["H"])(e.vxm.abonnement.afmeldInfo.navn),1),e.vxm.abonnement.afmeldInfo.regnummer?(Object(a["w"])(),Object(a["f"])("div",p,[Object(a["i"])(Object(a["H"])(e.$t("abonnementer-slet-enkelt-reg"))+" ",1),Object(a["j"])(S,{link:{name:e.RouteName.ENHEDSVISNING,params:{enhedType:e.EnhedType.VIRKSOMHED,enhedId:e.vxm.abonnement.afmeldInfo.regnummer}},"link-text":e.vxm.abonnement.afmeldInfo.regnummer,"open-in-new-tab":!0},null,8,["link","link-text"])])):e.vxm.abonnement.afmeldInfo.cvrnummer?(Object(a["w"])(),Object(a["f"])("div",k,[Object(a["i"])(Object(a["H"])(e.$t("abonnementer-slet-enkelt-cvr"))+" ",1),Object(a["j"])(S,{link:{name:e.RouteName.ENHEDSVISNING,params:{enhedType:e.EnhedType.VIRKSOMHED,enhedId:e.vxm.abonnement.afmeldInfo.cvrnummer}},"link-text":e.vxm.abonnement.afmeldInfo.cvrnummer,"open-in-new-tab":!0},null,8,["link","link-text"])])):Object(a["g"])("",!0)]})),_:1},8,["indhold-from-textkey","onGodkend"]),Object(a["j"])(I,{"modal-id":"modal-abonnementer-slet-alle","text-prefix":"abonnementer-slet_alle-modal","indhold-from-textkey":null==e.route.query.id,ref:"sletAlleModal",onGodkend:e.sletAlleAbonnementer},{default:r((function(){return[Object(a["i"])(Object(a["H"])(e.$t("abonnementer-slet-alle-tekst",[e.vxm.abonnement.afmeldInfo.antalAbonnementer])),1)]})),_:1},8,["indhold-from-textkey","onGodkend"]),e.abonnementer.antalAbonnementer>0?(Object(a["w"])(),Object(a["f"])(A,{key:1})):Object(a["g"])("",!0),e.abonnementer.antalAbonnementer>0?(Object(a["w"])(),Object(a["f"])(w,{key:2,abonnement:e.selectedAbonnement,onHidden:n[1]||(n[1]=function(n){return e.selectedAbonnement=void 0})},null,8,["abonnement"])):Object(a["g"])("",!0)],64))])})),E=t("1da1"),y=(t("a9e3"),t("5319"),t("96cf"),t("1133")),x=t("b850"),h=Object(a["V"])("data-v-043878fb");Object(a["z"])("data-v-043878fb");var R={class:"mx-4"},S={class:"card-text","data-cy":"abonnement-virksomhedsnavn"},I=Object(a["j"])("div",{class:"separator my-4"},null,-1),A={class:"row pb-4"},w={class:"col-12 col-lg-6"},N=Object(a["j"])("svg",{class:"icon-svg","aria-hidden":"true",focusable:"false"},[Object(a["j"])("use",{"xlink:href":"#mode"})],-1),H=Object(a["j"])("svg",{class:"icon-svg","aria-hidden":"true",focusable:"false"},[Object(a["j"])("use",{"xlink:href":"#delete"})],-1);Object(a["x"])();var G=h((function(e,n,t,r,o,l){var i=Object(a["E"])("Link");return Object(a["w"])(),Object(a["f"])("div",{class:"card-element mb-4",id:e.abonnement.cvrnummer},[Object(a["j"])("div",R,[Object(a["j"])("h3",S,[Object(a["j"])(i,{link:{name:e.RouteName.ENHEDSVISNING,params:{enhedType:e.EnhedType.VIRKSOMHED,enhedId:e.abonnement.enhedsnummer}},"link-text":e.abonnement.virksomhedsnavn},null,8,["link","link-text"])]),I,Object(a["j"])("div",A,[Object(a["j"])("div",w,[e.abonnement.regnummer?(Object(a["w"])(),Object(a["f"])(a["a"],{key:0},[Object(a["i"])(Object(a["H"])(e.$t("abonnementer-virksomhed-reg-cardtekst",[e.abonnement.regnummer])),1)],64)):(Object(a["w"])(),Object(a["f"])(a["a"],{key:1},[Object(a["i"])(Object(a["H"])(e.$t("abonnementer-virksomhed-cvr-cardtekst",[e.abonnement.cvrnummer])),1)],64))]),Object(a["j"])("div",{class:["col-12 col-lg-6",{"align-text-right":!e.isMobile}]},[Object(a["j"])("button",{type:"button",class:"button button-unstyled mr-4","data-module":"modal","data-target":"modal-administrer-abonnement",onClick:n[1]||(n[1]=function(){return e.emitSelectedAbonnement&&e.emitSelectedAbonnement.apply(e,arguments)})},[N,Object(a["i"])(" "+Object(a["H"])(e.$t("abonnementer-rediger-label")),1)]),Object(a["j"])("button",{type:"button",class:"button button-unstyled","data-cy":"slet-abonnement","data-module":"modal","data-target":"modal-abonnementer-slet",onClick:n[2]||(n[2]=function(){return e.emitSelectedAbonnement&&e.emitSelectedAbonnement.apply(e,arguments)})},[H,Object(a["i"])(" "+Object(a["H"])(e.$t("abonnementer-slet-label")),1)])],2)])])],8,["id"])})),M=t("f744"),D=t("517f"),K=t("e939"),V=Object(a["k"])({name:"AbonnementCard",components:{Link:D["a"]},props:{abonnement:{type:Object,required:!0}},data:function(){return{RouteName:M["a"],EnhedType:K["a"]}},emits:["abonnementUpdated"],setup:function(e,n){var t=n.emit,r=Object(a["d"])((function(){return x["b"].breakpoint.isMobile}));function o(){t("abonnementUpdated",e.abonnement)}return{isMobile:r,emitSelectedAbonnement:o}}}),T=(t("d0d2"),t("d959")),C=t.n(T);const B=C()(V,[["render",G],["__scopeId","data-v-043878fb"]]);var L=B,_=Object(a["V"])("data-v-35ba9320");Object(a["z"])("data-v-35ba9320");var $={class:"card-element mb-4"},F={class:"mx-4"},P={class:"card-text"},q=Object(a["j"])("div",{class:"separator my-4"},null,-1),Y={class:"row pb-4"},J={class:"col-12 col-lg-6"},U={type:"button",class:"button button-unstyled mr-4","data-module":"modal","data-target":"modal-rediger-email"},z=Object(a["j"])("svg",{class:"icon-svg","aria-hidden":"true",focusable:"false"},[Object(a["j"])("use",{"xlink:href":"#mode"})],-1);Object(a["x"])();var W=_((function(e,n,t,r,o,l){return Object(a["w"])(),Object(a["f"])("div",$,[Object(a["j"])("div",F,[Object(a["j"])("h3",P,Object(a["H"])(e.$t("rediger-email-overskrift")),1),q,Object(a["j"])("div",Y,[Object(a["j"])("div",J,Object(a["H"])(e.$t("rediger-email-cardtekst",[e.email])),1),Object(a["j"])("div",{class:["col-12 col-lg-6",{"align-text-right":!e.isMobile}]},[Object(a["j"])("button",U,[z,Object(a["i"])(" "+Object(a["H"])(e.$t("abonnementer-rediger-label")),1)])],2)])])])})),Q=Object(a["k"])({name:"AbonnementCard",components:{},data:function(){return{RouteName:M["a"],EnhedType:K["a"]}},setup:function(){var e=Object(a["d"])((function(){var e;return null===(e=x["b"].auth.aktivBruger.abonnementinfo)||void 0===e?void 0:e.email})),n=Object(a["d"])((function(){return x["b"].breakpoint.isMobile}));return{isMobile:n,email:e}}});t("09bb");const X=C()(Q,[["render",W],["__scopeId","data-v-35ba9320"]]);var Z=X,ee=Object(a["V"])("data-v-0a1f578f");Object(a["z"])("data-v-0a1f578f");var ne={class:"modal-footer"};Object(a["x"])();var te=ee((function(e,n,t,r,o,l){var i=Object(a["E"])("InputFelt"),c=Object(a["E"])("Modal");return Object(a["w"])(),Object(a["f"])(c,{"modal-id":e.modalId,"text-prefix":e.modalId,class:"redigere-email-modal",separator:!0,"show-footer":!1},{default:ee((function(){return[Object(a["j"])("span",null,Object(a["H"])(e.$t("rediger-email-modal-cardtekst",[e.nuvaerendeEmail])),1),Object(a["j"])(i,{"text-prefix":"modal-redigere-email-ny",onChange:e.validateNyEmail,"vis-fejlmeddelelse":e.visNyEmailFejlmeddelelse,"fejlmeddelelse-textkey":e.nyEmailFejlmeddelelseTextkey,required:!0,preselectedValue:e.emailAdresseNy,onInput:e.setEmailAdresseNy},null,8,["onChange","vis-fejlmeddelelse","fejlmeddelelse-textkey","preselectedValue","onInput"]),Object(a["j"])(i,{"text-prefix":"modal-redigere-email-gentagelse",onChange:e.validateGentagelsesEmail,"vis-fejlmeddelelse":e.visGentalseEmailFejlmeddelelse,"fejlmeddelelse-textkey":e.gentagelseEmailFejlmeddelelseTextkey,required:!0,preselectedValue:e.emailAdresseGentagelse,onInput:e.setEmailAdresseGentagelse},null,8,["onChange","vis-fejlmeddelelse","fejlmeddelelse-textkey","preselectedValue","onInput"]),Object(a["j"])("div",ne,[Object(a["j"])("button",{type:"button",class:"button button-secondary",onClick:n[1]||(n[1]=function(n){return e.nulstil()}),"data-modal-close":""},Object(a["H"])(e.$t("rediger-email-modal-annuller")),1),Object(a["j"])("button",{type:"button",class:"button button-primary opdaterButton",disabled:e.visGentalseEmailFejlmeddelelse||e.visNyEmailFejlmeddelelse||!e.emailAdresseNy||!e.emailAdresseGentagelse,onClick:n[2]||(n[2]=function(n){return e.opdaterEmail()}),"data-modal-close":""},Object(a["H"])(e.$t("rediger-email-modal-godkend")),9,["disabled"])])]})),_:1},8,["modal-id","text-prefix"])})),ae=t("714b"),re=t("c023"),oe=t("e784"),le=Object(a["k"])({name:"RedigereEmailModal",components:{Modal:ae["a"],InputFelt:re["a"]},setup:function(){var e=Object(a["d"])((function(){var e;return null===(e=x["b"].auth.aktivBruger.abonnementinfo)||void 0===e?void 0:e.email})),n="modal-rediger-email",t=Object(a["B"])(""),r=Object(a["B"])(!1),o=Object(a["B"])(""),l=Object(a["B"])(""),i=Object(a["B"])(!1),c=Object(a["B"])("");function d(){return s.apply(this,arguments)}function s(){return s=Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o.value!==c.value){e.next=4;break}return n={emailadresse:o.value},e.next=4,x["b"].abonnement.opdaterEmail(n);case 4:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function b(e){o.value=e}function m(e){c.value=e}function u(n){var t=!n||!oe["a"].validerEmail(n),a=n===e.value;return{validEmail:t,sameAsCurrent:a}}function f(e){var n=u(e);r.value=n.validEmail||n.sameAsCurrent,r.value?t.value=n.sameAsCurrent?"modal-redigere-email-ens-med-nuvaerende-email":"modal-redigere-email-valideringsfejl":o.value=e}function j(){b(""),m(""),r.value=!1,i.value=!1}function v(e){var n=u(e);i.value=n.validEmail||n.sameAsCurrent||e!==o.value,i.value?l.value=n.sameAsCurrent?"modal-redigere-email-ens-med-nuvaerende-email":e===o.value||n.validEmail?"modal-redigere-email-valideringsfejl":"modal-redigere-email-ikke-ens":c.value=e}return{modalId:n,nuvaerendeEmail:e,visNyEmailFejlmeddelelse:r,visGentalseEmailFejlmeddelelse:i,nyEmailFejlmeddelelseTextkey:t,gentagelseEmailFejlmeddelelseTextkey:l,emailAdresseNy:o,emailAdresseGentagelse:c,opdaterEmail:d,validateNyEmail:f,validateGentagelsesEmail:v,validateEmail:u,nulstil:j,setEmailAdresseNy:b,setEmailAdresseGentagelse:m}}});t("3694");const ie=C()(le,[["render",te],["__scopeId","data-v-0a1f578f"]]);var ce=ie,de=t("be30"),se=t("6c02"),be=t("c215"),me=t("1a00"),ue=t("9ef5"),fe=t.n(ue),je=t("04c8"),ve=Object(a["k"])({name:"Abonnementer",components:{Link:D["a"],AdministrerAbonnementModal:be["a"],AbonnementCard:L,RedigereEmail:Z,RedigereEmailModal:ce,Paginering:de["a"],Modal:ae["a"]},data:function(){return{RouteName:M["a"],EnhedType:K["a"]}},setup:function(){var e=Object(a["d"])((function(){return x["b"].breakpoint.isMobile})),n=Object(se["d"])(),t=Object(se["c"])(),r=Object(a["B"])(!0),o=Object(a["B"])(void 0),l=Object(a["d"])((function(){return x["b"].abonnement.aktiveAlleAbonnementer})),i=Object(a["d"])((function(){return x["b"].abonnement.aktiveAlleAbonnementer.antalAbonnementer?Math.ceil(x["b"].abonnement.aktiveAlleAbonnementer.antalAbonnementer/10):0})),c=Object(a["B"])("0");function d(){return s.apply(this,arguments)}function s(){return s=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.query.id){e.next=5;break}return e.next=3,b();case 3:e.next=9;break;case 5:return y["a"].tjekBrugerLoginOgRedirect(),t.query.sideIndex&&(c.value=t.query.sideIndex),e.next=9,u({nySide:c.value,redirect:!1});case 9:r.value=!1;case 10:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function b(){return m.apply(this,arguments)}function m(){return m=Object(E["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x["b"].abonnement.hentAfmeldInfo(t.query.id);case 2:x["b"].abonnement.afmeldInfo.gyldigtId?setTimeout((function(){var e;if(e=x["b"].abonnement.afmeldInfo.alleAbonnementer?document.getElementById("modal-abonnementer-slet-alle"):document.getElementById("modal-abonnementer-slet"),e){var n=new fe.a.Modal(e);n.show()}}),100):(n={textPrefix:"toastr-abonnementer-ikke-gyldigt-id",notifikationType:je["a"].ERROR},x["b"].toastr.tilfoejNotifikation(n));case 3:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}function u(e){return f.apply(this,arguments)}function f(){return f=Object(E["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return c.value=t.nySide,e.next=3,x["b"].abonnement.hentAbonnementer(Number(t.nySide)+1);case 3:a={sideIndex:t.nySide},t.redirect&&n.replace({name:M["a"].ABONNEMENTER,query:a});case 5:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function j(e){o.value=e}function v(){return O.apply(this,arguments)}function O(){return O=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.query.id){e.next=6;break}return e.next=3,me["a"].afmeld(t.query.id);case 3:g(),e.next=7;break;case 6:o.value&&x["b"].abonnement.sletAbonnement({enhedsnummer:o.value.enhedsnummer,page:Number(c.value)+1});case 7:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function p(){return k.apply(this,arguments)}function k(){return k=Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.query.id){e.next=6;break}return e.next=3,me["a"].afmeld(t.query.id);case 3:g(),e.next=7;break;case 6:x["b"].abonnement.sletAlleAbonnementer();case 7:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function g(){return h.apply(this,arguments)}function h(){return h=Object(E["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t={textPrefix:x["b"].abonnement.afmeldInfo.alleAbonnementer?"toastr-afmeld-alle-abonnementer":"toastr-afmeld-abonnement",notifikationType:je["a"].SUCCESS},x["b"].abonnement.resetAfmeldInfo(),e.next=4,n.replace({name:M["a"].FORSIDE});case 4:x["b"].toastr.tilfoejNotifikation(t);case 5:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}return Object(a["u"])(Object(E["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:case"end":return e.stop()}}),e)})))),{isMobile:e,loading:r,abonnementer:l,antalSider:i,aktivSide:c,search:u,setSelectedAbonnement:j,selectedAbonnement:o,sletAbonnement:v,sletAlleAbonnementer:p,route:t,vxm:x["b"]}}});t("e0c6");const Oe=C()(ve,[["render",g],["__scopeId","data-v-b125de54"]]);n["default"]=Oe},f7a4:function(e,n,t){}}]);