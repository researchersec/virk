(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-RegistreringstidendeDetaljer"],{"0334":function(e,t,r){},3774:function(e,t,r){"use strict";r("0334")},"4c2f":function(e,t,r){},"5dcd":function(e,t,r){"use strict";r.r(t);var n=r("f2bf"),a={class:"registreringstidende-detaljer"},s={key:0,class:"spinner"},c={key:1,class:"row"},i={class:"col-sm-12 col-lg-8"},l={class:"overskrift h2 mt-0"};function b(e,t,r,b,o,d){var j=Object(n["E"])("Link"),g=Object(n["E"])("StamdataFelt"),k=Object(n["E"])("DetaljerRegistreringsHistorik"),u=Object(n["E"])("DetaljerRegnskaber");return Object(n["w"])(),Object(n["f"])("div",a,[e.loading?(Object(n["w"])(),Object(n["f"])("div",s)):(Object(n["w"])(),Object(n["f"])("div",c,[Object(n["j"])("div",i,[Object(n["j"])("h1",l,Object(n["H"])(e.registreringsDetaljer.hovednavn),1),e.registreringsDetaljer.cvrNummer&&!e.registreringsDetaljer.groenlandskregistreringsnummer?(Object(n["w"])(),Object(n["f"])(g,{key:0,visVaerdi:!0,class:"mb-2",feltnavn:"cvrnummer",tekstVaerdi:e.registreringsDetaljer.cvrNummer},{default:Object(n["R"])((function(){return[Object(n["j"])(j,{"link-text":e.registreringsDetaljer.cvrNummer,"vis-ikon":!1,link:{name:e.RouteName.ENHEDSVISNING,params:{enhedType:e.EnhedType.VIRKSOMHED,enhedId:e.registreringsDetaljer.cvrNummer}}},null,8,["link-text","link"])]})),_:1},8,["tekstVaerdi"])):(Object(n["w"])(),Object(n["f"])(g,{key:1,feltnavn:"regnummer",visVaerdi:!0,class:"mb-2"},{default:Object(n["R"])((function(){return[Object(n["j"])(j,{"link-text":e.registreringsDetaljer.groenlandskregistreringsnummer,"vis-ikon":!1,link:{name:e.RouteName.ENHEDSVISNING,params:{enhedType:e.EnhedType.VIRKSOMHED,enhedId:e.registreringsDetaljer.groenlandskregistreringsnummer}}},null,8,["link-text","link"])]})),_:1})),Object(n["j"])(g,{feltnavn:"adresse",tekstVaerdi:e.registreringsDetaljer.adresse,class:"mb-2"},{default:Object(n["R"])((function(){return[Object(n["j"])("span",{innerHTML:e.formattedAdresse},null,8,["innerHTML"])]})),_:1},8,["tekstVaerdi"]),Object(n["j"])(g,{feltnavn:"kommune",tekstVaerdi:e.registreringsDetaljer.kommune,class:"mb-2"},null,8,["tekstVaerdi"]),e.soegeType===e.SoegType.VIRKSOMHEDSREGISTRERING?(Object(n["w"])(),Object(n["f"])(k,{key:2,class:"mb-4",tekst:e.registreringsDetaljer.tekst},null,8,["tekst"])):Object(n["g"])("",!0),e.soegeType===e.SoegType.INDBERETNING?(Object(n["w"])(),Object(n["f"])(u,{key:3,regnskab:e.registreringsDetaljer,class:"mb-4"},null,8,["regnskab"])):Object(n["g"])("",!0),Object(n["j"])(j,{link:{name:e.RouteName.REGISTRERINGSTIDENDE},"link-textkey":"registreringstidendeDetaljer-ny-soegning"},null,8,["link"])])]))])}var o=r("1da1"),d=(r("96cf"),r("b850")),j=r("e3ef"),g=r("9e84"),k={class:"detaljer-registrerings-historik mb-2"},u={class:"row"},O={class:"col-6 col-lg-3"};function f(e,t,r,a,s,c){return Object(n["w"])(),Object(n["f"])("div",k,[Object(n["j"])("div",u,[Object(n["j"])("div",O,[Object(n["j"])("strong",null,Object(n["H"])(e.$t("registreringshistorik-detajler-tekst")),1)]),Object(n["j"])("div",{class:"col-6 col-lg-9 detaljer-registrerings-historik-tekst",innerHTML:e.tekst},null,8,["innerHTML"])])])}var m=Object(n["k"])({name:"detaljerRegistreringsHistorik",props:{tekst:{type:String,required:!0}}}),v=(r("fdd3"),r("d959")),p=r.n(v);const y=p()(m,[["render",f]]);var w=y,h=Object(n["V"])("data-v-cbe168ac");Object(n["z"])("data-v-cbe168ac");var H={class:"detaljer-regnskaber"},R={key:0,class:"row mb-2","data-cy":"regnskab-detaljer"},D={class:"col-6 col-lg-3"},T={class:"col-6 col-lg-9 mb-2"},x={key:0,class:"mb-2"},E={class:"bold mr-2"},N=Object(n["j"])("br",{class:"d-lg-none"},null,-1),I={key:1,class:"mb-2"},S={class:"bold mr-2"},V=Object(n["j"])("br",{class:"d-lg-none"},null,-1),L={key:2,class:"mb-2"},$={class:"bold mr-2"},F=Object(n["j"])("br",{class:"d-lg-none"},null,-1),G={key:3,class:"mb-2"},K={class:"bold mr-2"},A={key:4,class:"mb-2"},M={class:"bold mr-2"},_={key:5,class:"mb-2"},B={class:"bold mr-2"},C=Object(n["j"])("br",{class:"d-lg-none"},null,-1),q={key:6,class:"mb-2"},z={class:"bold mr-2"},J=Object(n["j"])("br",{class:"d-lg-none"},null,-1),P={key:7,class:"mb-2"},U={class:"bold mr-2"},Z=Object(n["j"])("br",{class:"d-lg-none"},null,-1),Q={key:8,class:"mt-4"},W={class:"bold"},X={class:"mr-2"};Object(n["x"])();var Y=h((function(e,t,r,a,s,c){var i=Object(n["E"])("KontekstnaerHjaelp"),l=Object(n["E"])("Link");return Object(n["w"])(),Object(n["f"])("div",H,[e.regnskab.regnskab?(Object(n["w"])(),Object(n["f"])("div",R,[Object(n["j"])("div",D,[Object(n["j"])("strong",null,Object(n["H"])(e.$t("registreringshistorik-detajler-regnskab")),1)]),Object(n["j"])("div",T,[e.regnskab.regnskab.periodeFormateret?(Object(n["w"])(),Object(n["f"])("div",x,[Object(n["j"])("span",E,Object(n["H"])(e.$t("regnskaber-periode-label")),1),N,Object(n["j"])("span",null,Object(n["H"])(e.regnskab.regnskab.periodeFormateret),1)])):Object(n["g"])("",!0),e.regnskab.regnskab.offentliggoerelseTidsstempelFormateret?(Object(n["w"])(),Object(n["f"])("div",I,[Object(n["j"])("span",S,Object(n["H"])(e.$t("regnskaber-offentliggoerelsetidsstempel-label")),1),V,Object(n["j"])("span",null,Object(n["H"])(e.regnskab.regnskab.offentliggoerelseTidsstempelFormateret),1)])):Object(n["g"])("",!0),e.regnskab.regnskab.godkendelsesdato?(Object(n["w"])(),Object(n["f"])("div",L,[Object(n["j"])("span",$,Object(n["H"])(e.$t("regnskaber-godkendelsesdato-label")),1),F,Object(n["j"])("span",null,Object(n["H"])(e.regnskab.regnskab.godkendelsesdato),1)])):Object(n["g"])("",!0),e.regnskab.regnskab.omgjort?(Object(n["w"])(),Object(n["f"])("div",G,[Object(n["j"])("span",K,Object(n["H"])(e.$t("regnskaber-omgjort-label")),1),Object(n["j"])(i,{"text-prefix":"regnskaber-omgjort"})])):Object(n["g"])("",!0),e.regnskab.regnskab.tilbagetrukket?(Object(n["w"])(),Object(n["f"])("div",A,[Object(n["j"])("span",M,Object(n["H"])(e.$t("regnskaber-tilbagetrukket-label")),1),Object(n["j"])(i,{"text-prefix":"virksomhed-regnskaber-tilbagetrukne"})])):Object(n["g"])("",!0),e.regnskab.regnskab.datoForTilbageTrukket?(Object(n["w"])(),Object(n["f"])("div",_,[Object(n["j"])("span",B,Object(n["H"])(e.$t("regnskaber-datofortilbagetrukket-label")),1),C,Object(n["j"])("span",null,Object(n["H"])(e.regnskab.regnskab.datoForTilbageTrukket),1)])):Object(n["g"])("",!0),e.regnskab.regnskab.begrundelseForTilbagetraekning?(Object(n["w"])(),Object(n["f"])("div",q,[Object(n["j"])("span",z,Object(n["H"])(e.$t("regnskaber-begrundelsetilbagetrukket-label")),1),J,Object(n["j"])("span",null,Object(n["H"])(e.regnskab.regnskab.begrundelseForTilbagetraekning),1)])):Object(n["g"])("",!0),e.regnskab.regnskab.dirigentNavn?(Object(n["w"])(),Object(n["f"])("div",P,[Object(n["j"])("span",U,Object(n["H"])(e.$t("regnskaber-dirigent-label")),1),Z,Object(n["j"])("span",null,Object(n["H"])(e.regnskab.regnskab.dirigentNavn),1)])):Object(n["g"])("",!0),e.regnskab.regnskab.dokumentreferencer.length>0?(Object(n["w"])(),Object(n["f"])("div",Q,[Object(n["j"])("span",W,Object(n["H"])(e.$t("regnskaber-dokumenter-label")),1),(Object(n["w"])(!0),Object(n["f"])(n["a"],null,Object(n["C"])(e.regnskab.regnskab.dokumentreferencer,(function(t){return Object(n["w"])(),Object(n["f"])("div",{key:t.dokumentId},[Object(n["j"])("span",X,Object(n["H"])(e.$t("regnskabstyper-"+t.dokumenttype.toLocaleLowerCase())),1),Object(n["j"])(l,{link:e.downloadUtil.virksomhedDokumentDownloadLink(t.dokumentId,e.regnskab.cvrNummer),"link-text":e.$t("dokumenter-indholdstype-"+t.indholdstype.toLocaleLowerCase()),"vis-ikon":!1,"data-cy":"download-regnskab"},null,8,["link","link-text"])])})),128))])):Object(n["g"])("",!0)])])):Object(n["g"])("",!0)])})),ee=r("b139"),te=r("517f"),re=r("c731"),ne=Object(n["k"])({name:"detaljerRegnskaber",props:{regnskab:{type:Object,required:!0}},components:{Link:te["a"],KontekstnaerHjaelp:re["a"]},setup:function(){return{downloadUtil:ee["a"]}}});r("615a");const ae=p()(ne,[["render",Y],["__scopeId","data-v-cbe168ac"]]);var se=ae,ce=r("f744"),ie=r("e939"),le=r("6632"),be=r("6c02"),oe=Object(n["k"])({name:"registreringstidendeDetaljer",components:{Link:te["a"],StamdataFelt:j["a"],DetaljerRegistreringsHistorik:w,DetaljerRegnskaber:se},setup:function(){var e=Object(n["B"])(!0),t=Object(n["d"])((function(){return d["b"].registreringstidende.aktivRegistrering})),r=Object(n["d"])((function(){return g["a"].formaterAdresse(t.value.adresse)})),a=Object(n["d"])((function(){return d["b"].registreringstidende.aktivRegistreringstidendeFilter.soegType})),s=Object(be["c"])(),c=Object(n["d"])((function(){return s.params.offentliggoerelseId})),i=Object(n["d"])((function(){return s.params.cvrNummer}));function l(){return b.apply(this,arguments)}function b(){return b=Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.value=!0,a.value!==le["a"].VIRKSOMHEDSREGISTRERING){t.next=6;break}return t.next=4,d["b"].registreringstidende.hentRegistreringshistorik(c.value);case 4:t.next=10;break;case 6:if(a.value!==le["a"].INDBERETNING){t.next=10;break}return r={offentliggoerelseId:c.value,cvrNummer:i.value},t.next=10,d["b"].registreringstidende.hentRegistreringsRegnskab(r);case 10:e.value=!1;case 11:case"end":return t.stop()}}),t)}))),b.apply(this,arguments)}return Object(n["u"])(Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!c.value){e.next=3;break}return e.next=3,l();case 3:case"end":return e.stop()}}),e)})))),{loading:e,soegeType:a,registreringsDetaljer:t,formattedAdresse:r,RouteName:ce["a"],EnhedType:ie["a"],SoegType:le["a"]}}});const de=p()(oe,[["render",b]]);t["default"]=de},"615a":function(e,t,r){"use strict";r("4c2f")},"6b9a":function(e,t,r){},"9e84":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("d4ec"),a=r("bee2"),s=(r("a15b"),r("ac1f"),r("1276"),r("caad"),r("2532"),r("fb6a"),r("498a"),function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"formaterAdresse",value:function(e){return e?e.split(c).join("<br />"):""}},{key:"genererAdresseString",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e)return"";if(e.adressebetegnelse&&t)return this.formaterAdresse(e.adressebetegnelse);var n=e.navn||e.conavn||"";if(n+=n.length>0?"<br />":"",n+=e.vejnavn?e.vejnavn+" ":"",n+=e.husnummerFra?e.husnummerFra+" ":"",r&&(n+=e.etage?e.etage+" ":"",n+=e.sideDoer||""),n+=n.length>0?"<br />":"",n+=e.postnummer?e.postnummer+" ":"",n+=e.postdistrikt||"",r){if(n+=n.length>0?"<br />":"",null==e.land||""==e.land)return n+=e.landekode?e.landekode+" ":"",n;n+=e.land?e.land+" ":""}return n}},{key:"genererAdresseTilSoegLink",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r="",n=e.adresse;if(n||"string"!==typeof e.udenlandskAdresse||(n=e.udenlandskAdresse),n){var a=n.split("\n");a[0].includes("C/O")&&(a=a.slice(1,a.length)),r=a.join(" ")}if(t){var s=e.postnummerOgBy;s&&(r+=" "+s)}return r.trim()}}]),e}()),c=/\n{1,}/,i=new s},b139:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("d4ec"),a=r("bee2"),s=(r("99af"),r("b850")),c=function(){function e(){Object(n["a"])(this,e)}return Object(a["a"])(e,[{key:"virksomhedDokumentDownloadLink",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s["b"].virksomhed.aktivVirksomhed.stamdata.cvrnummer;return"".concat("https://datacvr.virk.dk/gateway/"+s["b"].config.aktivConfig.dokument,"/downloadDokumentForVirksomhed?dokumentId=").concat(e,"&cvrNummer=").concat(t)}},{key:"downloadOffentliggoerelseDokumenterLink",value:function(e){return"".concat("https://datacvr.virk.dk/gateway/"+s["b"].config.aktivConfig.dokument,"/downloadOffentliggoerelseSomZip?okiRef=").concat(e)}}]),e}(),i=new c},e3ef:function(e,t,r){"use strict";var n=r("f2bf"),a=Object(n["V"])("data-v-afbda56a");Object(n["z"])("data-v-afbda56a");var s={key:0,class:"row"},c={class:"col-6 col-lg-3"},i={class:"bold"},l={class:"col-6 col-lg-9"};Object(n["x"])();var b=a((function(e,t,r,a,b,o){var d=Object(n["E"])("KontekstnaerHjaelp");return e.visVaerdi||e.visTekstVaerdi?(Object(n["w"])(),Object(n["f"])("div",s,[Object(n["j"])("div",c,[Object(n["j"])("span",i,Object(n["H"])(e.$t("stamdata-".concat(e.feltnavn,"-label"))),1),e.visKontekstnaerHjaelp?(Object(n["w"])(),Object(n["f"])(d,{key:0,"text-prefix":e.textPrefix},null,8,["text-prefix"])):Object(n["g"])("",!0)]),Object(n["j"])("div",l,[e.$slots.default?Object(n["D"])(e.$slots,"default",{key:0},void 0,!0):(Object(n["w"])(),Object(n["f"])(n["a"],{key:1},[Object(n["i"])(Object(n["H"])(e.tekstVaerdi),1)],64))])])):Object(n["g"])("",!0)})),o=r("c731"),d=Object(n["k"])({name:"StamdataFelt",components:{KontekstnaerHjaelp:o["a"]},props:{visVaerdi:{type:Boolean,default:!1},tekstVaerdi:{type:String},feltnavn:{type:String},visKontekstnaerHjaelp:{type:Boolean,default:!1},textPrefix:String},setup:function(e){var t=Object(n["d"])((function(){var t;return!!e.tekstVaerdi&&0!==(null===(t=e.tekstVaerdi)||void 0===t?void 0:t.length)}));return{visTekstVaerdi:t}}}),j=(r("3774"),r("d959")),g=r.n(j);const k=g()(d,[["render",b],["__scopeId","data-v-afbda56a"]]);t["a"]=k},fdd3:function(e,t,r){"use strict";r("6b9a")}}]);