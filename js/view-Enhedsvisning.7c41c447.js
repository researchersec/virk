(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["view-Enhedsvisning"], {
		"0136": function(e, t, n) {},
		"015c": function(e, t, n) {
			"use strict";
			n("654d")
		},
		"0334": function(e, t, n) {},
		"03e8": function(e, t, n) {},
		"0d63": function(e, t, n) {
			"use strict";
			n("2fc2")
		},
		"1d09": function(e, t, n) {
			"use strict";
			n("b03b")
		},
		"1d9c": function(e, t, n) {
			"use strict";
			n("3854")
		},
		"1fdf": function(e, t, n) {},
		2363: function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e["DELTAGER"] = "deltager", e["LIBERAL_UDOEVER"] = "liberal_udoever", e["HVIDVASK_PERSON"] = "hvidvask_person"
				}(r || (r = {}))
		},
		2909: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("6b75");

			function a(e) {
				if (Array.isArray(e)) return Object(r["a"])(e)
			}
			n("a4d3"), n("e01a"), n("d3b7"), n("d28b"), n("3ca3"), n("ddb0"), n("a630");

			function o(e) {
				if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}
			var s = n("06c5");

			function c() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}

			function i(e) {
				return a(e) || o(e) || Object(s["a"])(e) || c()
			}
		},
		"2d17": function(e, t, n) {},
		"2faf": function(e, t, n) {
			"use strict";
			n("42aa")
		},
		"2fc2": function(e, t, n) {},
		"337a": function(e, t, n) {
			"use strict";
			n("3820")
		},
		3774: function(e, t, n) {
			"use strict";
			n("0334")
		},
		3820: function(e, t, n) {},
		3854: function(e, t, n) {},
		"3e95": function(e, t, n) {
			"use strict";
			n("ca28")
		},
		"42aa": function(e, t, n) {},
		"496c": function(e, t, n) {
			"use strict";
			n("c803")
		},
		"4cb7": function(e, t, n) {},
		"4ec9": function(e, t, n) {
			"use strict";
			var r = n("6d61"),
				a = n("6566");
			e.exports = r("Map", (function(e) {
				return function() {
					return e(this, arguments.length ? arguments[0] : void 0)
				}
			}), a)
		},
		"4fac": function(e, t, n) {
			"use strict";
			n("c398")
		},
		"53fc": function(e, t, n) {
			"use strict";
			n("4cb7")
		},
		"5ef8": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("f2bf"),
				a = {
					class: "enhedsvisning"
				},
				o = {
					key: 0,
					class: "spinner"
				};

			function s(e, t, n, s, c, i) {
				var l = Object(r["E"])("Virksomhed"),
					d = Object(r["E"])("Produktionsenhed"),
					b = Object(r["E"])("Person");
				return Object(r["w"])(), Object(r["f"])("div", a, [e.loading ? (Object(r["w"])(), Object(r["f"])("div", o)) : (Object(r["w"])(), Object(r["f"])(r["a"], {
					key: 1
				}, [e.virksomhedFundet && e.enhedType === e.EnhedType.VIRKSOMHED ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0
				})) : Object(r["g"])("", !0), e.produktionsenhedFundet && e.enhedType === e.EnhedType.PRODUKTIONSENHED ? (Object(r["w"])(), Object(r["f"])(d, {
					key: 1
				})) : Object(r["g"])("", !0), e.personFundet && e.enhedType === e.EnhedType.PERSON ? (Object(r["w"])(), Object(r["f"])(b, {
					key: 2
				})) : Object(r["g"])("", !0)], 64))])
			}
			var c = n("1da1"),
				i = (n("96cf"), n("b850")),
				l = n("5530"),
				d = {
					class: "virksomhed"
				},
				b = {
					key: 0,
					class: "h2 mt-0 mb-lg-9"
				},
				j = {
					class: "row"
				},
				u = {
					class: "col-sm-12 col-lg-8"
				},
				O = {
					class: "col-sm-12 col-lg-4 mt-6 mt-lg-0"
				},
				k = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#download"
				})], -1),
				v = {
					class: "mt-3"
				},
				f = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#virk-krone"
				})], -1),
				m = {
					class: "mt-3"
				},
				g = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#star"
				})], -1),
				p = {
					class: "mt-3"
				},
				h = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#star-closed"
				})], -1),
				y = {
					class: "mt-3"
				},
				E = {
					key: 1,
					class: "separator my-4"
				},
				x = {
					key: 2
				},
				w = Object(r["j"])("span", {
					class: "blackboard",
					style: {
						"padding-inline": "5px"
					}
				}, "NY FUNKTION", -1),
				R = {
					key: 3,
					class: "button button-unstyled card-btn mb-4"
				},
				H = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#accounting-chart-trending-up-blue"
				})], -1),
				T = {
					class: "mt-3"
				},
				S = {
					key: 4,
					type: "button",
					class: "button button-unstyled card-btn"
				},
				I = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#pencil"
				})], -1),
				_ = {
					class: "row mt-9"
				},
				P = {
					class: "col-sm-12 col-lg-8"
				},
				A = {
					key: 0,
					class: "accordion-content-inner"
				},
				L = {
					class: "mb-4"
				};

			function V(e, t, n, a, o, s) {
				var c = Object(r["E"])("VirksomhedStamdata"),
					i = Object(r["E"])("router-link"),
					V = Object(r["E"])("Link"),
					N = Object(r["E"])("Card"),
					D = Object(r["E"])("UdvidedeVirksomhedsoplysninger"),
					M = Object(r["E"])("VirksomhedHovedselskab"),
					$ = Object(r["E"])("VirksomhedPersonkreds"),
					F = Object(r["E"])("VirksomhedEjerforhold"),
					K = Object(r["E"])("OplysningerOmRevisionsvirksomhed"),
					C = Object(r["E"])("VirksomhedRegnskaber"),
					G = Object(r["E"])("VirksomhedProduktionsenheder"),
					U = Object(r["E"])("VirksomhedOffentliggoerelser"),
					B = Object(r["E"])("VirksomhedRegistreringshistorik"),
					q = Object(r["E"])("Foreningsrepraesentanter"),
					X = Object(r["E"])("VirksomhedHistoriskStamdata"),
					z = Object(r["E"])("AntalAnsatte"),
					Y = Object(r["E"])("CardLink"),
					J = Object(r["E"])("Accordion"),
					W = Object(r["E"])("ManuelSigneringModal"),
					Z = Object(r["E"])("FoelgVirksomhedsLoginModal"),
					Q = Object(r["E"])("OpretAbonnementModal"),
					ee = Object(r["E"])("AdministrerAbonnementModal"),
					te = Object(r["E"])("DownloadPdfModal");
				return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["j"])("div", d, [e.virksomhed.stamdata ? (Object(r["w"])(), Object(r["f"])("h1", b, [Object(r["i"])(Object(r["H"])(e.virksomhed.stamdata.navn) + " ", 1), e.virksomhed.stamdata.visNavnPostfix ? (Object(r["w"])(), Object(r["f"])(r["a"], {
					key: 0
				}, [Object(r["i"])("(" + Object(r["H"])(e.$t("virksomhed-status-" + e.virksomhed.stamdata.status + "-label")) + ")", 1)], 64)) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0), Object(r["j"])("div", j, [Object(r["j"])("div", u, [Object(r["j"])(c)]), Object(r["j"])("div", O, [Object(r["j"])(N, {
					card: e.card,
					class: "feature-card"
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])("button", {
							type: "button",
							class: "button button-unstyled card-btn mb-4",
							"data-module": "modal",
							"data-target": e.modalDownloadPdfId
						}, [k, Object(r["j"])("span", v, " " + Object(r["H"])(e.$t("virksomhed-gem_som_pdf-label")), 1)], 8, ["data-target"]), Object(r["j"])("button", {
							type: "button",
							class: "button button-unstyled card-btn mb-4",
							"data-module": "modal",
							"data-cy": "erhvervsstyrelsens-signatur",
							"data-target": e.modalManuelSigneringId
						}, [f, Object(r["j"])("span", m, " " + Object(r["H"])(e.$t("virksomhed-erhvervsstyrelsens_signatur-label")), 1)], 8, ["data-target"]), e.erVirksomhedAktiv ? (Object(r["w"])(), Object(r["f"])(r["a"], {
							key: 0
						}, [Object(r["S"])(Object(r["j"])("button", {
							type: "button",
							class: "button button-unstyled card-btn mb-4",
							"data-cy": "foelg-virksomhed",
							"data-module": "modal",
							"data-target": e.showFoelgModel
						}, [g, Object(r["j"])("span", p, " " + Object(r["H"])(e.$t("virksomhed-foelg_virksomhed-label")), 1)], 8, ["data-target"]), [
							[r["O"], !e.erLoggetIndMedEid && !e.brugerFoelgerVirksomhed || !e.erBrugerLoggetInd]
						]), Object(r["S"])(Object(r["j"])("button", {
							type: "button",
							class: "button button-unstyled card-btn mb-4",
							"data-cy": "foelger-virksomhed",
							onClick: t[1] || (t[1] = function() {
								return e.sletAbonnement && e.sletAbonnement.apply(e, arguments)
							})
						}, [h, Object(r["j"])("span", y, " " + Object(r["H"])(e.$t("virksomhed-fulgt_virksomhed-label")), 1)], 512), [
							[r["O"], !e.erLoggetIndMedEid && e.brugerFoelgerVirksomhed && e.erBrugerLoggetInd]
						])], 64)) : Object(r["g"])("", !0), e.kanTilgaaOekonomioverblik ? (Object(r["w"])(), Object(r["f"])("div", E)) : Object(r["g"])("", !0), e.kanTilgaaOekonomioverblik ? (Object(r["w"])(), Object(r["f"])("div", x, [w])) : Object(r["g"])("", !0), e.kanTilgaaOekonomioverblik ? (Object(r["w"])(), Object(r["f"])("div", R, ["virksomhed" === e.enhedType ? (Object(r["w"])(), Object(r["f"])(i, {
							key: 0,
							class: "router-link-no-hyper",
							style: {
								color: "#0059b3 !important"
							},
							"data-cy": "virksomhed-oekonomioverblik",
							"aria-label": "oekonomiskoverblik",
							title: "Regnskabsoverblik " + e.virksomhed.stamdata.navn,
							to: {
								name: e.RouteName.OEKONOMIOVERBLIK,
								params: Object(l["a"])({}, e.route.params)
							}
						}, {
							default: Object(r["R"])((function() {
								return [H, Object(r["j"])("span", T, " " + Object(r["H"])(e.$t("virksomhed-oekonomioverblik-label")), 1)]
							})),
							_: 1
						}, 8, ["title", "to"])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0), e.kanRedigereVirksomhed ? (Object(r["w"])(), Object(r["f"])("button", S, [I, Object(r["j"])(V, {
							link: "https://virk.dk/myndigheder/stat/ERST/selvbetjening/Webreg_aendre_virksomhed__lukke_virksomhed/",
							"link-textkey": "virksomhed-ret_oplysninger_link",
							"aria-label-textkey": "virksomhed-ret_oplysninger_link",
							"vis-ikon": !1
						})])) : Object(r["g"])("", !0)]
					})),
					_: 1
				}, 8, ["card"])])]), Object(r["j"])("div", _, [Object(r["j"])("div", P, [Object(r["j"])(D), Object(r["j"])(M), Object(r["j"])($), Object(r["j"])(F), Object(r["j"])(K), Object(r["j"])(C), Object(r["j"])(G), Object(r["j"])(U), Object(r["j"])(B), Object(r["j"])(q), Object(r["j"])(X), Object(r["j"])(z), e.virksomhed.skjulOevrigeDokumenter ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])(J, {
					key: 0,
					"accordion-id": "virksomhed-bestil-dokumenter",
					"text-prefix": "accordion-bestil_dokumenter"
				}, {
					default: Object(r["R"])((function() {
						return [e.enhedId ? (Object(r["w"])(), Object(r["f"])("div", A, [Object(r["j"])("div", L, Object(r["H"])(e.$t("accordion-bestil_dokumenter-indhold")), 1), Object(r["j"])(Y, {
							"card-link": {
								name: e.RouteName.BESTIL_DOKUMENTER,
								query: e.route.query,
								params: e.route.params
							},
							linktext: "accordion-bestil_dokumenter-bodylink",
							"data-cy": "bestil-dokumenter-link"
						}, null, 8, ["card-link"])])) : Object(r["g"])("", !0)]
					})),
					_: 1
				}))])])]), Object(r["j"])(W, {
					ref: "downloadPdfMedSignturRef",
					"modal-id": e.modalManuelSigneringId,
					downloadAltMedSignaturUrl: e.downloadVirksomhedsvisningSomPdf(!1, !0),
					downloadAabneBjaelkerMedSignaturUrl: e.downloadVirksomhedsvisningSomPdf(!0, !0)
				}, null, 8, ["modal-id", "downloadAltMedSignaturUrl", "downloadAabneBjaelkerMedSignaturUrl"]), Object(r["j"])(Z), Object(r["j"])(Q), Object(r["j"])(ee), Object(r["j"])(te, {
					ref: "downloadPdfRef",
					downloadAltUrl: e.downloadVirksomhedsvisningSomPdf(!1, !1),
					downloadAabneBjaelkerUrl: e.downloadVirksomhedsvisningSomPdf(!0, !1)
				}, null, 8, ["downloadAltUrl", "downloadAabneBjaelkerUrl"])], 64)
			}
			n("caad"), n("2532");
			var N = Object(r["V"])("data-v-1797b210");
			Object(r["z"])("data-v-1797b210");
			var D = {
					key: 0,
					class: "virksomhed-stamdata"
				},
				M = {
					key: 0,
					class: "row"
				},
				$ = {
					class: "col-6 col-lg-3 cvrnummer-label"
				},
				F = {
					class: "col-6 col-lg-9 cvrnummer"
				},
				K = {
					key: 1,
					class: "row"
				},
				C = {
					class: "col-6 col-lg-3 regnummer-label"
				},
				G = {
					class: "col-6 col-lg-9"
				},
				U = {
					key: 2,
					class: "row"
				},
				B = {
					class: "col-6 col-lg-3 adresse-label"
				},
				q = {
					class: "col-6 col-lg-9 stamdata-bygningsnummer"
				},
				X = {
					key: 0
				},
				z = {
					key: 3,
					class: "row"
				},
				Y = {
					class: "col-6 col-lg-3 postnummerby-label"
				},
				J = {
					class: "col-6 col-lg-9 postnummerOgBy"
				},
				W = {
					key: 4,
					class: "row"
				},
				Z = {
					class: "col-6 col-lg-3 startdato-label"
				},
				Q = {
					key: 0,
					class: "col-6 col-lg-9 stiftet-for-1900-nogle"
				},
				ee = {
					key: 1,
					class: "col-6 col-lg-9 start-dato"
				},
				te = {
					key: 5,
					class: "row"
				},
				ne = {
					class: "col-6 col-lg-3 virkningsdato-label"
				},
				re = {
					class: "col-6 col-lg-9 virknings-dato"
				},
				ae = {
					key: 6,
					class: "row"
				},
				oe = {
					class: "col-6 col-lg-3 ophoersdato-label"
				},
				se = {
					class: "col-6 col-lg-9 ophoers-sdato"
				},
				ce = {
					key: 7,
					class: "row"
				},
				ie = {
					class: "col-6 col-lg-3 virksomhedsform-label"
				},
				le = {
					class: "col-6 col-lg-9 break-word"
				},
				de = {
					class: "row"
				},
				be = {
					class: "col-6 col-lg-3 reklamebeskyttelse-label"
				},
				je = {
					class: "col-6 col-lg-9 ja-label0"
				},
				ue = {
					key: 8,
					class: "row"
				},
				Oe = {
					class: "col-6 col-lg-3 status-label"
				},
				ke = {
					class: "col-6 col-lg-9 virksomhed-status-label"
				},
				ve = {
					key: 9,
					class: "row"
				},
				fe = {
					class: "col-6 col-lg-3 kreditoplysninger-label"
				},
				me = {
					class: "col-6 col-lg-9 kreditoplysningskode-label"
				},
				ge = {
					key: 10,
					class: "row"
				},
				pe = {
					class: "col-6 col-lg-3 socialoekonomisk-virksomhed-label"
				},
				he = {
					class: "col-6 col-lg-9"
				},
				ye = {
					key: 11,
					class: "row"
				},
				Ee = {
					class: "col-6 col-lg-3 statslig-virksomhed-label"
				},
				xe = {
					class: "col-6 col-lg-9 ja-label1"
				},
				we = {
					key: 12,
					class: "row"
				},
				Re = {
					class: "col-6 col-lg-3 omfattet_af_hvidvaskloven-label1"
				},
				He = {
					class: "col-6 col-lg-9 ja-label2"
				},
				Te = {
					key: 13,
					class: "row"
				},
				Se = {
					class: "col-6 col-lg-3 omfattet-af-hvidvaskloven-label2"
				},
				Ie = {
					class: "col-6 col-lg-9 virksomhed-aktivitet-label"
				},
				_e = Object(r["j"])("br", null, null, -1),
				Pe = {
					key: 14,
					class: "row"
				},
				Ae = {
					class: "col-6 col-lg-3 modervirksomheder-franchise-label"
				},
				Le = {
					class: "col-6 col-lg-9 modervirksomheder-ved-franchise-aktivitet"
				},
				Ve = Object(r["j"])("br", null, null, -1),
				Ne = {
					key: 15,
					class: "row"
				},
				De = {
					class: "col-6 col-lg-3 udenlandsk_adresse-label"
				},
				Me = {
					class: "col-6 col-lg-9 udenlandsk-adresse"
				},
				$e = {
					key: 0
				},
				Fe = {
					key: 16,
					class: "mt-6"
				};
			Object(r["x"])();
			var Ke = N((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Link");
					return e.virksomhed.stamdata ? (Object(r["w"])(), Object(r["f"])("div", D, [e.virksomhed.stamdata.cvrnummer && !e.virksomhed.stamdata.harPseudoCvr ? (Object(r["w"])(), Object(r["f"])("div", M, [Object(r["j"])("div", $, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-cvrnummer-label")), 1)]), Object(r["j"])("div", F, Object(r["H"])(e.virksomhed.stamdata.cvrnummer), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.cvrnummer && !e.virksomhed.stamdata.harPseudoCvr || !e.virksomhed.stamdata.regnummer ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])("div", K, [Object(r["j"])("div", C, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-regnummer-label")), 1)]), Object(r["j"])("div", G, Object(r["H"])(e.virksomhed.stamdata.regnummer), 1)])), e.virksomhed.stamdata.adresse || e.virksomhed.stamdata.bygningsnummer ? (Object(r["w"])(), Object(r["f"])("div", U, [Object(r["j"])("div", B, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-adresse-label")), 1)]), Object(r["j"])("div", q, [Object(r["j"])("span", {
						innerHTML: e.formattedAdresse
					}, null, 8, ["innerHTML"]), e.virksomhed.stamdata.bygningsnummer ? (Object(r["w"])(), Object(r["f"])("div", X, Object(r["H"])(e.$t("stamdata-bygningsnummer-label")) + " " + Object(r["H"])(e.virksomhed.stamdata.bygningsnummer), 1)) : Object(r["g"])("", !0)])])) : Object(r["g"])("", !0), e.virksomhed.stamdata.postnummerOgBy ? (Object(r["w"])(), Object(r["f"])("div", z, [Object(r["j"])("div", Y, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-postnummerby-label")), 1)]), Object(r["j"])("div", J, Object(r["H"])(e.virksomhed.stamdata.postnummerOgBy), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.startdato || e.virksomhed.stamdata.stiftetFor1900Tekstnogle ? (Object(r["w"])(), Object(r["f"])("div", W, [Object(r["j"])("div", Z, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-startdato-label")), 1)]), e.virksomhed.stamdata.stiftetFor1900Tekstnogle ? (Object(r["w"])(), Object(r["f"])("div", Q, Object(r["H"])(e.$t(e.virksomhed.stamdata.stiftetFor1900Tekstnogle)), 1)) : (Object(r["w"])(), Object(r["f"])("div", ee, Object(r["H"])(e.formattedStartDato), 1))])) : Object(r["g"])("", !0), e.erDatoenIFremtiden ? (Object(r["w"])(), Object(r["f"])("div", te, [Object(r["j"])("div", ne, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-virkningsdato-label")), 1)]), Object(r["j"])("div", re, Object(r["H"])(e.formattedVirkningsdato), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.ophoersdato ? (Object(r["w"])(), Object(r["f"])("div", ae, [Object(r["j"])("div", oe, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-ophoersdato-label")), 1)]), Object(r["j"])("div", se, Object(r["H"])(e.formattedOphoerssdato), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.virksomhedsform ? (Object(r["w"])(), Object(r["f"])("div", ce, [Object(r["j"])("div", ie, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-virksomhedsform-label")), 1)]), Object(r["j"])("div", le, Object(r["H"])(e.virksomhed.stamdata.virksomhedsform), 1)])) : Object(r["g"])("", !0), Object(r["j"])("div", de, [Object(r["j"])("div", be, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-reklamebeskyttelse-label")), 1)]), Object(r["j"])("div", je, [e.virksomhed.stamdata.reklamebeskyttet ? (Object(r["w"])(), Object(r["f"])(r["a"], {
						key: 0
					}, [Object(r["i"])(Object(r["H"])(e.$t("stamdata-ja-label")) + " - ", 1), Object(r["j"])(c, {
						link: {
							name: e.RouteName.ARTIKEL,
							params: {
								artikelId: e.ArtikelNavn.REKLAMEBESKYTTELSE
							}
						},
						"link-textkey": "stamdata-reklamebeskyttelse-link"
					}, null, 8, ["link"])], 64)) : (Object(r["w"])(), Object(r["f"])(r["a"], {
						key: 1
					}, [Object(r["i"])(Object(r["H"])(e.$t("stamdata-nej-label")), 1)], 64))])]), e.virksomhed.stamdata.status ? (Object(r["w"])(), Object(r["f"])("div", ue, [Object(r["j"])("div", Oe, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-status-label")), 1)]), Object(r["j"])("div", ke, Object(r["H"])(e.$t("virksomhed-status-" + e.virksomhed.stamdata.status + "-label")), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.kreditoplysningskode ? (Object(r["w"])(), Object(r["f"])("div", ve, [Object(r["j"])("div", fe, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-kreditoplysninger-label")), 1)]), Object(r["j"])("div", me, Object(r["H"])(e.$t("virksomhed-kreditoplysningskode-" + e.virksomhed.stamdata.kreditoplysningskode + "-label")), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.socialoekonomiskVirksomhed ? (Object(r["w"])(), Object(r["f"])("div", ge, [Object(r["j"])("div", pe, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-socialoekonomisk_virksomhed-label")), 1)]), Object(r["j"])("div", he, Object(r["H"])(e.$t("stamdata-ja-label")), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.statsligVirksomhed ? (Object(r["w"])(), Object(r["f"])("div", ye, [Object(r["j"])("div", Ee, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-statslig_virksomhed-label")), 1)]), Object(r["j"])("div", xe, Object(r["H"])(e.$t("stamdata-ja-label")), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.omfattetAfHvidvaskloven ? (Object(r["w"])(), Object(r["f"])("div", we, [Object(r["j"])("div", Re, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-omfattet_af_hvidvaskloven-label")), 1)]), Object(r["j"])("div", He, Object(r["H"])(e.$t("stamdata-ja-label")), 1)])) : Object(r["g"])("", !0), e.virksomhed.stamdata.aktiviteterOmfattetAfHvidvaskloven && e.virksomhed.stamdata.aktiviteterOmfattetAfHvidvaskloven.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", Te, [Object(r["j"])("div", Se, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-aktiviteter_omfattet_af_hvidvaskloven-label")), 1)]), Object(r["j"])("div", Ie, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.stamdata.aktiviteterOmfattetAfHvidvaskloven, (function(t, n) {
						return Object(r["w"])(), Object(r["f"])(r["a"], {
							key: n
						}, [Object(r["i"])(Object(r["H"])(e.$t("virksomhed-aktivitet-" + t + "-label")), 1), _e], 64)
					})), 128))])])) : Object(r["g"])("", !0), e.virksomhed.stamdata.modervirksomhederVedFranchise && e.virksomhed.stamdata.modervirksomhederVedFranchise.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", Pe, [Object(r["j"])("div", Ae, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-modervirksomhed_ved_franchise-label")), 1)]), Object(r["j"])("div", Le, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.stamdata.modervirksomhederVedFranchise, (function(e, t) {
						return Object(r["w"])(), Object(r["f"])(r["a"], {
							key: t
						}, [Object(r["i"])(Object(r["H"])(e), 1), Ve], 64)
					})), 128))])])) : Object(r["g"])("", !0), e.virksomhed.stamdata.udenlandskAdresse ? (Object(r["w"])(), Object(r["f"])("div", Ne, [Object(r["j"])("div", De, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("stamdata-udenlandsk_adresse-label")), 1)]), Object(r["j"])("div", Me, [Object(r["j"])("span", {
						innerHTML: e.formattedUdenlandskAdresse
					}, null, 8, ["innerHTML"]), e.virksomhed.stamdata.udenlandskAdresseLand ? (Object(r["w"])(), Object(r["f"])("div", $e, Object(r["H"])(e.virksomhed.stamdata.udenlandskAdresseLand), 1)) : Object(r["g"])("", !0)])])) : Object(r["g"])("", !0), e.showAdresseLink ? (Object(r["w"])(), Object(r["f"])("div", Fe, [Object(r["j"])(c, {
						link: {
							name: e.RouteName.SOEGERESULTATER,
							query: {
								fritekst: encodeURIComponent(e.adresseTilSoegning),
								sideIndex: 0
							}
						},
						"open-in-new-tab": !0,
						"link-textkey": "stamdata-se_alle_enheder_paa_adressen-link"
					}, null, 8, ["link"])])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0)
				})),
				Ce = n("917c"),
				Ge = n("f744"),
				Ue = n("517f"),
				Be = n("9e84"),
				qe = n("8193"),
				Xe = Object(r["k"])({
					name: "VirksomhedStamdata",
					components: {
						Link: Ue["a"]
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							ArtikelNavn: qe["a"]
						}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							t = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.stamdata.startdato)
							})),
							n = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.stamdata.virkningsdato)
							})),
							a = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.stamdata.ophoersdato)
							})),
							o = Object(r["d"])((function() {
								return Be["a"].formaterAdresse(e.value.stamdata.udenlandskAdresse)
							})),
							s = Object(r["d"])((function() {
								return Be["a"].formaterAdresse(e.value.stamdata.adresse)
							})),
							c = Object(r["d"])((function() {
								return Be["a"].genererAdresseTilSoegLink(e.value.stamdata)
							})),
							l = Object(r["d"])((function() {
								return "" !== Be["a"].genererAdresseTilSoegLink(e.value.stamdata, !1)
							})),
							d = Object(r["d"])((function() {
								return !!e.value.stamdata.virkningsdato && Date.parse(e.value.stamdata.virkningsdato) - Date.now() > 0
							}));
						return {
							virksomhed: e,
							formattedAdresse: s,
							formattedStartDato: t,
							formattedVirkningsdato: n,
							formattedOphoerssdato: a,
							formattedUdenlandskAdresse: o,
							adresseTilSoegning: c,
							showAdresseLink: l,
							erDatoenIFremtiden: d
						}
					}
				}),
				ze = (n("9bad"), n("d959")),
				Ye = n.n(ze);
			const Je = Ye()(Xe, [
				["render", Ke],
				["__scopeId", "data-v-1797b210"]
			]);
			var We = Je,
				Ze = (n("fb6a"), Object(r["V"])("data-v-f1885f54")),
				Qe = Ze((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("SammenhaengendeRegnskab"),
						i = Object(r["E"])("Detaljer"),
						l = Object(r["E"])("Accordion");
					return e.virksomhed.sammenhaengendeRegnskaber && e.virksomhed.sammenhaengendeRegnskaber.length > 0 ? (Object(r["w"])(), Object(r["f"])(l, {
						key: 0,
						"accordion-id": "accordion-regnskaber",
						"text-prefix": "accordion-regnskaber",
						"vis-kontekstnaer-hjaelp": !0
					}, {
						default: Ze((function() {
							return [Object(r["j"])("div", null, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.sammenhaengendeRegnskaber.slice(0, 5), (function(t) {
								return Object(r["w"])(), Object(r["f"])("div", {
									key: t.periodeFormateret
								}, [Object(r["j"])(c, {
									"sammenhaengende-regnskab": t,
									"cvr-nummer": e.virksomhed.stamdata.cvrnummer
								}, null, 8, ["sammenhaengende-regnskab", "cvr-nummer"])])
							})), 128)), e.virksomhed.sammenhaengendeRegnskaber.length > 5 ? (Object(r["w"])(), Object(r["f"])(i, {
								key: 0,
								textPrefix: "virksomhed-regnskaber-visalle",
								class: {
									"ml-9": !e.isMobile
								}
							}, {
								default: Ze((function() {
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.sammenhaengendeRegnskaber.slice(5, e.virksomhed.sammenhaengendeRegnskaber.length), (function(e) {
										return Object(r["w"])(), Object(r["f"])("div", {
											key: e.periodeFormateret
										}, [Object(r["j"])(c, {
											class: "ml-0",
											"sammenhaengende-regnskab": e
										}, null, 8, ["sammenhaengende-regnskab"])])
									})), 128))]
								})),
								_: 1
							}, 8, ["class"])) : Object(r["g"])("", !0)])]
						})),
						_: 1
					})) : Object(r["g"])("", !0)
				})),
				et = n("d54e"),
				tt = Object(r["V"])("data-v-01a941d6");
			Object(r["z"])("data-v-01a941d6");
			var nt = {
					key: 0,
					class: "accordion-content-inner"
				},
				rt = {
					class: "row mb-5"
				},
				at = {
					class: "col-12 col-lg-3"
				},
				ot = {
					class: "row"
				},
				st = {
					class: "col-12 col-lg-3"
				},
				ct = {
					class: "col"
				},
				it = {
					key: 0
				},
				lt = {
					class: "grey-area"
				},
				dt = {
					key: 1
				},
				bt = {
					class: "grey-area"
				};
			Object(r["x"])();
			var jt = tt((function(e, t, n, a, o, s) {
					var c, i = Object(r["E"])("Regnskab"),
						l = Object(r["E"])("Detaljer");
					return (null === (c = e.sammenhaengendeRegnskab.regnskaber) || void 0 === c ? void 0 : c.length) > 0 ? (Object(r["w"])(), Object(r["f"])("div", nt, [Object(r["j"])("div", rt, [Object(r["j"])("div", at, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskabstyper-" + e.regnskabsTitel())), 1)])]), Object(r["j"])("div", ot, [Object(r["j"])("div", st, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-periode-label")), 1)]), Object(r["j"])("div", ct, Object(r["H"])(e.sammenhaengendeRegnskab.periodeFormateret), 1)]), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.aktiveRegnskaber, (function(t, n) {
						return Object(r["w"])(), Object(r["f"])("div", {
							key: t.offentliggoerelseTidsstempel,
							class: e.omgjorteRegnskaber.length > 0 || e.tilbagetrukneRegnskaber.length > 0 ? "mb-5" : ""
						}, [Object(r["j"])(i, {
							regnskab: t,
							"hr-after": n !== e.aktiveRegnskaber.length - 1
						}, null, 8, ["regnskab", "hr-after"])], 2)
					})), 128)), e.omgjorteRegnskaber.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", it, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.omgjorteRegnskaber, (function(e) {
						return Object(r["w"])(), Object(r["f"])(l, {
							"vis-kontekstnaer-hjaelp": !0,
							"text-prefix": "virksomhed-regnskaber-omgjorte",
							key: e.offentliggoerelseTidsstempelFormateret
						}, {
							default: tt((function() {
								return [Object(r["j"])("div", lt, [Object(r["j"])(i, {
									regnskab: e
								}, null, 8, ["regnskab"])])]
							})),
							_: 2
						}, 1024)
					})), 128))])) : Object(r["g"])("", !0), e.tilbagetrukneRegnskaber.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", dt, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.tilbagetrukneRegnskaber, (function(e) {
						return Object(r["w"])(), Object(r["f"])(l, {
							key: e.offentliggoerelseTidsstempelFormateret,
							"vis-kontekstnaer-hjaelp": !0,
							"text-prefix": "virksomhed-regnskaber-tilbagetrukne"
						}, {
							default: tt((function() {
								return [Object(r["j"])("div", bt, [Object(r["j"])(i, {
									regnskab: e
								}, null, 8, ["regnskab"])])]
							})),
							_: 2
						}, 1024)
					})), 128))])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0)
				})),
				ut = n("b85c"),
				Ot = (n("4e82"), Object(r["V"])("data-v-26fc3022"));
			Object(r["z"])("data-v-26fc3022");
			var kt = {
					key: 0,
					class: "details-summary-text"
				},
				vt = {
					key: 1,
					class: "details-summary-text"
				};
			Object(r["x"])();
			var ft = Ot((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("KontekstnaerHjaelp");
					return Object(r["w"])(), Object(r["f"])("details", {
						class: "details js-details",
						id: e.detaljerId
					}, [Object(r["j"])("summary", {
						class: "details-summary",
						onClick: t[1] || (t[1] = function() {
							return e.toggle && e.toggle.apply(e, arguments)
						})
					}, [e.detaljerIsOpen ? (Object(r["w"])(), Object(r["f"])("span", kt, Object(r["H"])(e.$t(e.textPrefix + "-aaben")), 1)) : (Object(r["w"])(), Object(r["f"])("span", vt, Object(r["H"])(e.$t(e.textPrefix + "-lukket")), 1)), Object(r["j"])("span", null, [e.visKontekstnaerHjaelp ? (Object(r["w"])(), Object(r["f"])(c, {
						key: 0,
						"id-suffix": e.randomUid,
						"text-prefix": e.textPrefix
					}, null, 8, ["id-suffix", "text-prefix"])) : Object(r["g"])("", !0)])]), Object(r["j"])("div", {
						class: ["details-text", {
							"fjern-indryk": e.fjernIndryk
						}]
					}, [Object(r["D"])(e.$slots, "default", {}, void 0, !0)], 2)], 8, ["id"])
				})),
				mt = (n("d3b7"), n("25f0"), n("c731")),
				gt = n("9ef5"),
				pt = n.n(gt),
				ht = Object(r["k"])({
					name: "Detaljer",
					components: {
						KontekstnaerHjaelp: mt["a"]
					},
					props: {
						textPrefix: String,
						visKontekstnaerHjaelp: {
							type: Boolean,
							default: !1
						},
						fjernIndryk: {
							type: Boolean,
							default: !0
						},
						accordionId: {
							type: String,
							default: null
						}
					},
					setup: function(e) {
						var t = Object(r["B"])(!1),
							n = Math.floor(1e5 * Math.random()).toString(),
							a = e.textPrefix + n;

						function o() {
							t.value = !t.value, null != e.accordionId && i["b"].accordions.toggle(e.accordionId)
						}
						return Object(r["u"])(Object(c["a"])(regeneratorRuntime.mark((function e() {
							var t;
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										t = document.getElementById(a), t && new pt.a.Details(t);
									case 2:
									case "end":
										return e.stop()
								}
							}), e)
						})))), {
							detaljerIsOpen: t,
							randomUid: n,
							detaljerId: a,
							toggle: o
						}
					}
				});
			n("f764");
			const yt = Ye()(ht, [
				["render", ft],
				["__scopeId", "data-v-26fc3022"]
			]);
			var Et = yt,
				xt = (n("ddb0"), Object(r["V"])("data-v-d15255b8"));
			Object(r["z"])("data-v-d15255b8");
			var wt = {
					class: "regnskaber"
				},
				Rt = {
					key: 0,
					class: "row"
				},
				Ht = {
					class: "col-12 col-lg-3"
				},
				Tt = {
					class: "col"
				},
				St = {
					key: 1,
					class: "row"
				},
				It = {
					class: "col-12 col-lg-3"
				},
				_t = {
					class: "col"
				},
				Pt = {
					key: 2,
					class: "row"
				},
				At = {
					class: "col-12 col-lg-3"
				},
				Lt = {
					class: "col"
				},
				Vt = {
					key: 3,
					class: "row"
				},
				Nt = {
					class: "col-12 col-lg-3"
				},
				Dt = {
					class: "col"
				},
				Mt = {
					key: 4,
					class: "row"
				},
				$t = {
					class: "col-12 col-lg-3"
				},
				Ft = {
					class: "col"
				},
				Kt = {
					key: 5
				},
				Ct = {
					key: 0
				},
				Gt = {
					key: 0
				},
				Ut = {
					class: "row"
				},
				Bt = {
					class: "col-12 col-lg-3"
				},
				qt = {
					class: "col-12 col-lg-3"
				},
				Xt = {
					class: "col"
				},
				zt = {
					key: 1,
					class: "row"
				},
				Yt = {
					class: "col-12 col-lg-3"
				},
				Jt = {
					key: 1,
					class: "row"
				},
				Wt = {
					class: "col-12 col-lg-3"
				},
				Zt = {
					key: 2,
					class: "row mt-5"
				},
				Qt = {
					class: "col-12 col-lg-3"
				},
				en = {
					key: 6
				};
			Object(r["x"])();
			var tn = xt((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Link"),
						i = Object(r["E"])("BestilRegnskabModal");
					return Object(r["w"])(), Object(r["f"])("div", wt, [e.regnskab.offentliggoerelseTidsstempelFormateret ? (Object(r["w"])(), Object(r["f"])("div", Rt, [Object(r["j"])("div", Ht, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-offentliggoerelsetidsstempel-label")), 1)]), Object(r["j"])("div", Tt, Object(r["H"])(e.regnskab.offentliggoerelseTidsstempelFormateret), 1)])) : Object(r["g"])("", !0), e.regnskab.godkendelsesdato && !e.regnskab.tilbagetrukket ? (Object(r["w"])(), Object(r["f"])("div", St, [Object(r["j"])("div", It, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-godkendelsesdato-label")), 1)]), Object(r["j"])("div", _t, Object(r["H"])(e.regnskab.godkendelsesdato), 1)])) : Object(r["g"])("", !0), e.regnskab.datoForTilbageTrukket ? (Object(r["w"])(), Object(r["f"])("div", Pt, [Object(r["j"])("div", At, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-datofortilbagetrukket-label")), 1)]), Object(r["j"])("div", Lt, Object(r["H"])(e.regnskab.datoForTilbageTrukket), 1)])) : Object(r["g"])("", !0), e.regnskab.begrundelseForTilbagetraekning ? (Object(r["w"])(), Object(r["f"])("div", Vt, [Object(r["j"])("div", Nt, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-begrundelsetilbagetrukket-label")), 1)]), Object(r["j"])("div", Dt, Object(r["H"])(e.regnskab.begrundelseForTilbagetraekning), 1)])) : Object(r["g"])("", !0), e.regnskab.dirigentNavn && !e.regnskab.tilbagetrukket ? (Object(r["w"])(), Object(r["f"])("div", Mt, [Object(r["j"])("div", $t, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-dirigent-label")), 1)]), Object(r["j"])("div", Ft, Object(r["H"])(e.regnskab.dirigentNavn), 1)])) : Object(r["g"])("", !0), e.regnskab.tilbagetrukket ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])("div", Kt, [e.sorteredeDokumentReferencer.size > 0 ? (Object(r["w"])(), Object(r["f"])("div", Ct, [e.skalRegnskabBestilles ? (Object(r["w"])(), Object(r["f"])("div", zt, [Object(r["j"])("div", Yt, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-dokumentreferencer-bestil-label")), 1)]), Object(r["j"])("div", null, [Object(r["j"])(i, {
						"modal-id": "modal-regnskab-postlevering-" + e.regnskab.offentliggoerelseId,
						"text-prefix": "regnskab-postlevering-modal",
						regnskab: e.regnskab
					}, null, 8, ["modal-id", "regnskab"])])])) : (Object(r["w"])(), Object(r["f"])("div", Gt, [Object(r["j"])("div", Ut, [Object(r["j"])("strong", Bt, Object(r["H"])(e.$t("regnskaber-dokumentreferencer-hent-label")) + ":", 1)]), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.sorteredeDokumentReferencer.keys(), (function(t) {
						return Object(r["w"])(), Object(r["f"])("div", {
							class: "row",
							key: t
						}, [Object(r["j"])("div", qt, [Object(r["j"])("span", null, Object(r["H"])(e.$t("regnskabstyper-".concat(t.toLocaleLowerCase()))), 1)]), Object(r["j"])("div", Xt, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.sorteredeDokumentReferencer.get(t), (function(t) {
							return Object(r["w"])(), Object(r["f"])(c, {
								class: "d-block",
								key: t.dokumentId,
								link: e.downloadUtil.virksomhedDokumentDownloadLink(t.dokumentId),
								"link-text": e.$t("dokumenter-indholdstype-" + t.indholdstype.toLocaleLowerCase()),
								"vis-ikon": !1,
								title: e.getDokumentTitle(e.regnskab, t)
							}, null, 8, ["link", "link-text", "title"])
						})), 128))])])
					})), 128))]))])) : (Object(r["w"])(), Object(r["f"])("div", Jt, [Object(r["j"])("div", Wt, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("regnskaber-dokumentreferencer-bestil-label")), 1)]), Object(r["j"])("div", null, [Object(r["j"])(i, {
						"modal-id": "modal-regnskab-postlevering-" + e.regnskab.offentliggoerelseId,
						"text-prefix": "regnskab-postlevering-modal",
						regnskab: e.regnskab
					}, null, 8, ["modal-id", "regnskab"])])])), e.omgoerelser.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", Zt, [Object(r["j"])("div", Qt, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("".concat(e.OMGOERELSE_DOKUMENTYPE.toLocaleLowerCase(), "-label"))), 1)]), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.omgoerelser, (function(t) {
						return Object(r["w"])(), Object(r["f"])("div", {
							key: t.dokumentId
						}, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.omgoerelser, (function(t) {
							return Object(r["w"])(), Object(r["f"])(c, {
								class: "col",
								key: t.dokumentId,
								link: e.downloadUtil.virksomhedDokumentDownloadLink(t.dokumentId),
								"link-text": e.$t("dokumenter-indholdstype-" + t.indholdstype.toLocaleLowerCase()),
								"vis-ikon": !1
							}, null, 8, ["link", "link-text"])
						})), 128))])
					})), 128))])) : Object(r["g"])("", !0)])), e.hrAfter ? (Object(r["w"])(), Object(r["f"])("hr", en)) : Object(r["g"])("", !0)])
				})),
				nn = (n("4ec9"), n("3ca3"), n("159b"), n("b139")),
				rn = Object(r["V"])("data-v-58c90252");
			Object(r["z"])("data-v-58c90252");
			var an = {
					class: "row"
				},
				on = {
					class: "col-12 col-lg-3"
				},
				sn = {
					class: "col"
				},
				cn = {
					class: "row"
				},
				ln = {
					class: "col-12 col-lg-3"
				},
				dn = {
					class: "col"
				},
				bn = {
					key: 0,
					class: "row"
				},
				jn = {
					class: "col-12 col-lg-3"
				},
				un = {
					class: "col"
				},
				On = {
					class: "row"
				},
				kn = {
					class: "col-12 col-lg-3"
				},
				vn = {
					class: "col"
				},
				fn = {
					class: "row"
				},
				mn = {
					class: "col-12 col-lg-3"
				},
				gn = {
					class: "col"
				};
			Object(r["x"])();
			var pn = rn((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("TilfoejTilKurv"),
						i = Object(r["E"])("Modal");
					return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["j"])("a", {
						class: "col",
						href: "javascript:void(0);",
						"data-module": "modal",
						"data-target": e.modalId
					}, Object(r["H"])(e.$t("dokumenter-indholdstype-bestil-link")), 9, ["data-target"]), Object(r["j"])(i, {
						"modal-id": e.modalId,
						"text-prefix": e.textPrefix,
						class: "bestil-regnskab-modal regnskaber",
						"show-footer": !1
					}, {
						default: rn((function() {
							return [Object(r["j"])("div", null, [Object(r["j"])("div", an, [Object(r["j"])("div", on, [Object(r["j"])("strong", null, Object(r["H"])(e.$t(e.textPrefix + "-titel-label")), 1)]), Object(r["j"])("div", sn, Object(r["H"])(e.$t("regnskabstyper-" + e.regnskab.dokumentType)), 1)]), Object(r["j"])("div", cn, [Object(r["j"])("div", ln, [Object(r["j"])("strong", null, Object(r["H"])(e.$t(e.textPrefix + "-periode-label")), 1)]), Object(r["j"])("div", dn, Object(r["H"])(e.regnskab.regnskabsperiodeFra + " - " + e.regnskab.regnskabsperiodeTil), 1)]), e.regnskab.offentliggoerelseTidsstempelFormateret ? (Object(r["w"])(), Object(r["f"])("div", bn, [Object(r["j"])("div", jn, [Object(r["j"])("strong", null, Object(r["H"])(e.$t(e.textPrefix + "-offentliggjort-label")), 1)]), Object(r["j"])("div", un, Object(r["H"])(e.regnskab.offentliggoerelseTidsstempelFormateret), 1)])) : Object(r["g"])("", !0), Object(r["j"])("div", On, [Object(r["j"])("div", kn, [Object(r["j"])("strong", null, Object(r["H"])(e.$t(e.textPrefix + "-tekst-label")), 1)]), Object(r["j"])("div", vn, Object(r["H"])(e.$t(e.textPrefix + "-tekst-indhold")), 1)]), Object(r["j"])("div", fn, [Object(r["j"])("div", mn, [Object(r["j"])("strong", null, Object(r["H"])(e.$t(e.textPrefix + "-pris-label")), 1)]), Object(r["j"])("div", gn, Object(r["H"])(e.prisToString(e.produkt.pris)), 1)]), Object(r["j"])(c, {
								produkt: e.produkt,
								"produktnavn-params": [e.regnskab.regnskabsperiodeFra + " - " + e.regnskab.regnskabsperiodeTil, e.regnskab.offentliggoerelseTidsstempelFormateret],
								"text-prefix": "bestil_dokumenter"
							}, null, 8, ["produkt", "produktnavn-params"])])]
						})),
						_: 1
					}, 8, ["modal-id", "text-prefix"])], 64)
				})),
				hn = (n("ac1f"), n("1276"), n("714b")),
				yn = n("c459"),
				En = n("8caa"),
				xn = n("e6e3"),
				wn = Object(r["k"])({
					name: "BestilRegnskabModal",
					components: {
						Modal: hn["a"],
						TilfoejTilKurv: yn["a"]
					},
					props: {
						regnskab: Object,
						textPrefix: {
							type: String,
							default: ""
						},
						modalId: {
							type: String,
							required: !0
						}
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
							return {
								produkttype: En["a"].REGNSKAB_TIL_POSTLEVERING,
								pris: i["b"].konstanter.prisRegnskabTilPostlevering,
								sprog: xn["b"].sprogservice.global.locale
							}
						}));

						function n(t) {
							var n;
							return n = -1 === t ? xn["b"].getTextFromKey(e.textPrefix + "-pris-fejl") : xn["b"].getTextFromKey("pris-valuta-label", [t.toString().split(".")[0]]), n
						}
						return {
							produkt: t,
							prisToString: n
						}
					}
				});
			n("6129");
			const Rn = Ye()(wn, [
				["render", pn],
				["__scopeId", "data-v-58c90252"]
			]);
			var Hn = Rn,
				Tn = n("1315"),
				Sn = "REDEGOERELSE_FOR_OMGOERELSE",
				In = "1996-01-22",
				_n = Object(r["k"])({
					name: "Regnskab",
					components: {
						Link: Ue["a"],
						BestilRegnskabModal: Hn
					},
					props: {
						regnskab: Object,
						hrAfter: Boolean
					},
					setup: function(e) {
						var t, n = [],
							a = new Map;

						function o(e) {
							var t = new Map;
							return e.forEach((function(e) {
								var r;
								e.dokumenttype !== Sn ? t.get(e.dokumenttype) ? null === (r = t.get(e.dokumenttype)) || void 0 === r || r.push(e) : t.set(e.dokumenttype, [e]) : n.push(e)
							})), t
						}
						null !== (t = e.regnskab) && void 0 !== t && t.dokumentreferencer && (a = o(e.regnskab.dokumentreferencer));
						var s = Object(r["d"])((function() {
							var t, n, r, a = Tn["DateTime"].fromFormat(In, Ce["a"].isoFormat);
							if (null !== (t = e.regnskab) && void 0 !== t && t.offentliggoerelseTidsstempelFormateret) r = Tn["DateTime"].fromFormat(e.regnskab.offentliggoerelseTidsstempelFormateret, Ce["a"].uiFormat);
							else {
								if (null === (n = e.regnskab) || void 0 === n || !n.regnskabsperiodeTil) return !0;
								r = Tn["DateTime"].fromFormat(e.regnskab.regnskabsperiodeTil, Ce["a"].uiFormat)
							}
							return r <= a
						}));

						function c(e, t) {
							return xn["b"].getTextFromKey("regnskab-link-title-1") + " " + e.offentliggoerelseTidsstempelFormateret + " " + xn["b"].getTextFromKey("regnskab-link-title-2") + " " + xn["b"].getTextFromKey("dokumenter-indholdstype-" + t.indholdstype.toLocaleLowerCase())
						}
						return {
							sorteredeDokumentReferencer: a,
							omgoerelser: n,
							OMGOERELSE_DOKUMENTYPE: Sn,
							skalRegnskabBestilles: s,
							getDokumentTitle: c
						}
					},
					data: function() {
						return {
							downloadUtil: nn["a"]
						}
					}
				});
			n("683d");
			const Pn = Ye()(_n, [
				["render", tn],
				["__scopeId", "data-v-d15255b8"]
			]);
			var An = Pn,
				Ln = Object(r["k"])({
					name: "SammenhaengendeRegnskab",
					components: {
						Detaljer: Et,
						Regnskab: An
					},
					props: {
						sammenhaengendeRegnskab: {
							type: Object,
							default: function() {
								return {
									regnskaber: [],
									periodeFormateret: ""
								}
							}
						}
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
								var t, n, r = [],
									a = Object(ut["a"])(null === (t = e.sammenhaengendeRegnskab) || void 0 === t ? void 0 : t.regnskaber);
								try {
									for (a.s(); !(n = a.n()).done;) {
										var s = n.value;
										s.omgjort && r.push(s)
									}
								} catch (c) {
									a.e(c)
								} finally {
									a.f()
								}
								return r.sort(o)
							})),
							n = Object(r["d"])((function() {
								var t, n, r = [],
									a = Object(ut["a"])(null === (t = e.sammenhaengendeRegnskab) || void 0 === t ? void 0 : t.regnskaber);
								try {
									for (a.s(); !(n = a.n()).done;) {
										var s = n.value;
										s.tilbagetrukket && r.push(s)
									}
								} catch (c) {
									a.e(c)
								} finally {
									a.f()
								}
								return r.sort(o)
							})),
							a = Object(r["d"])((function() {
								var t, n, r = [],
									a = Object(ut["a"])(null === (t = e.sammenhaengendeRegnskab) || void 0 === t ? void 0 : t.regnskaber);
								try {
									for (a.s(); !(n = a.n()).done;) {
										var s = n.value;
										s.tilbagetrukket || s.omgjort || r.push(s)
									}
								} catch (c) {
									a.e(c)
								} finally {
									a.f()
								}
								return r.sort(o)
							}));

						function o(e, t) {
							if (e.offentliggoerelseTidsstempelFormateret && t.offentliggoerelseTidsstempelFormateret) {
								var n = Tn["DateTime"].fromFormat(e.offentliggoerelseTidsstempelFormateret, Ce["a"].uiFormat),
									r = Tn["DateTime"].fromFormat(t.offentliggoerelseTidsstempelFormateret, Ce["a"].uiFormat);
								return r.toMillis() - n.toMillis()
							}
							return 0
						}

						function s() {
							return a.value.length > 0 && a.value[0].dokumentType ? a.value[0].dokumentType : t.value.length > 0 && t.value[0].dokumentType ? t.value[0].dokumentType : n.value.length > 0 && n.value[0].dokumentType ? n.value[0].dokumentType : ""
						}
						return {
							omgjorteRegnskaber: t,
							tilbagetrukneRegnskaber: n,
							aktiveRegnskaber: a,
							regnskabsTitel: s
						}
					}
				});
			n("1d9c");
			const Vn = Ye()(Ln, [
				["render", jt],
				["__scopeId", "data-v-01a941d6"]
			]);
			var Nn = Vn,
				Dn = Object(r["k"])({
					name: "VirksomhedRegnskaber",
					components: {
						Detaljer: Et,
						SammenhaengendeRegnskab: Nn,
						Accordion: et["a"]
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							t = Object(r["d"])((function() {
								return i["b"].breakpoint.isMobile
							}));
						return {
							virksomhed: e,
							isMobile: t
						}
					}
				});
			n("a06f");
			const Mn = Ye()(Dn, [
				["render", Qe],
				["__scopeId", "data-v-f1885f54"]
			]);
			var $n = Mn,
				Fn = n("ffed"),
				Kn = {
					key: 0
				},
				Cn = {
					class: "h4"
				},
				Gn = {
					class: "d-block"
				},
				Un = Object(r["j"])("div", {
					class: "separator"
				}, null, -1),
				Bn = {
					class: "h4"
				},
				qn = {
					class: "d-block"
				},
				Xn = Object(r["j"])("div", {
					class: "separator"
				}, null, -1),
				zn = {
					class: "h4 mt-0"
				},
				Yn = Object(r["j"])("div", {
					class: "separator"
				}, null, -1),
				Jn = {
					class: "h4 mt-0"
				};

			function Wn(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link"),
					i = Object(r["E"])("TilfoejTilKurv"),
					l = Object(r["E"])("Modal");
				return Object(r["w"])(), Object(r["f"])(l, {
					"modal-id": e.modalId,
					"text-prefix": e.modalId,
					class: "manuel-signering-modal",
					separator: !0,
					"show-footer": !1
				}, {
					default: Object(r["R"])((function() {
						return [e.virksomhed.harManuelSignering ? (Object(r["w"])(), Object(r["f"])("div", Kn, [Object(r["j"])("h3", Cn, Object(r["H"])(e.$t(e.modalId + "-gem_alt-overskrift")), 1), Object(r["j"])("span", Gn, Object(r["H"])(e.$t(e.modalId + "-gem_alt-text")), 1), Object(r["j"])(c, {
							class: "button button-primary mt-3",
							link: e.downloadAltMedSignaturUrl,
							"link-text": e.$t(e.modalId + "-gem_alt-button"),
							"vis-ikon": !1
						}, null, 8, ["link", "link-text"]), Un, Object(r["j"])("h3", Bn, Object(r["H"])(e.$t(e.modalId + "-gem_aabne_bjaelker-overskrift")), 1), Object(r["j"])("span", qn, Object(r["H"])(e.$t(e.modalId + "-gem_aabne_bjaelker-text")), 1), Object(r["j"])(c, {
							class: "button button-primary mt-3",
							link: e.downloadAabneBjaelkerMedSignaturUrl,
							"link-text": e.$t(e.modalId + "-gem_aabne_bjaelker-button"),
							"vis-ikon": !1
						}, null, 8, ["link", "link-text"]), Xn, Object(r["j"])("h2", zn, Object(r["H"])(e.$t(e.modalId + "-bestil_alt-overskrift")), 1), Object(r["j"])("div", null, Object(r["H"])(e.$t(e.modalId + "-bestil_alt-broedtekst")), 1), Object(r["j"])(i, {
							produkt: e.getProdukt(e.Produkttype.MANUEL_SIGNERING_FULD),
							"text-prefix": "bestil_dokumenter"
						}, null, 8, ["produkt"]), Yn, Object(r["j"])("h2", Jn, Object(r["H"])(e.$t(e.modalId + "-bestil_aabne-overskrift")), 1), Object(r["j"])("div", null, Object(r["H"])(e.$t(e.modalId + "-bestil_aabne-broedtekst")), 1), Object(r["j"])(i, {
							produkt: e.getProdukt(e.Produkttype.MANUEL_SIGNERING_SELVVALGT),
							"text-prefix": "bestil_dokumenter"
						}, null, 8, ["produkt"])])) : Object(r["g"])("", !0)]
					})),
					_: 1
				}, 8, ["modal-id", "text-prefix"])
			}
			var Zn = n("17ca"),
				Qn = Object(r["k"])({
					name: "ManuelSigneringModal",
					components: {
						Modal: hn["a"],
						TilfoejTilKurv: yn["a"],
						Link: Ue["a"]
					},
					data: function() {
						return {
							Produkttype: En["a"]
						}
					},
					props: {
						modalId: {
							type: String,
							required: !0
						},
						downloadAltMedSignaturUrl: {
							type: String,
							required: !0
						},
						downloadAabneBjaelkerMedSignaturUrl: {
							type: String,
							required: !0
						}
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
							return i["b"].virksomhed.aktivVirksomhed
						}));

						function n(e) {
							var t = {};
							return t.produkttype = e, t.pris = i["b"].konstanter.prisManuelSignering, t.sprog = xn["b"].sprogservice.global.locale === Zn["a"].ENGELSK ? Zn["a"].ENGELSK : Zn["a"].DANSK, t.manueltSigneretType = t.produkttype === En["a"].MANUEL_SIGNERING_FULD ? "fuld" : "selvvalgt", t
						}
						return {
							virksomhed: t,
							getProdukt: n
						}
					}
				});
			n("be18");
			const er = Ye()(Qn, [
				["render", Wn]
			]);
			var tr = er,
				nr = Object(r["V"])("data-v-1083b260");
			Object(r["z"])("data-v-1083b260");
			var rr = {
					key: 0,
					class: "udvidede-virksomhedsoplysninger accordion-content-inner"
				},
				ar = {
					key: 0,
					class: "row"
				},
				or = {
					class: "col-12 col-lg-3"
				},
				sr = {
					class: "col"
				},
				cr = {
					key: 1,
					class: "row"
				},
				ir = {
					class: "col-12 col-lg-3"
				},
				lr = {
					class: "col"
				},
				dr = {
					key: 2,
					class: "row"
				},
				br = {
					class: "col-12 col-lg-3"
				},
				jr = {
					class: "col"
				},
				ur = {
					key: 3,
					class: "row"
				},
				Or = {
					class: "col-12 col-lg-3"
				},
				kr = {
					class: "col"
				},
				vr = {
					key: 4,
					class: "row"
				},
				fr = {
					class: "col-12 col-lg-3"
				},
				mr = {
					class: "col"
				},
				gr = {
					key: 5,
					class: "row"
				},
				pr = {
					class: "col-12 col-lg-3"
				},
				hr = {
					class: "col"
				},
				yr = {
					key: 6,
					class: "row"
				},
				Er = {
					class: "col-12 col-lg-3"
				},
				xr = {
					class: "col"
				},
				wr = Object(r["j"])("br", null, null, -1),
				Rr = {
					key: 7,
					class: "row"
				},
				Hr = {
					class: "col-12 col-lg-3"
				},
				Tr = {
					class: "col"
				},
				Sr = {
					key: 8,
					class: "row"
				},
				Ir = {
					class: "col-12 col-lg-3"
				},
				_r = {
					class: "col"
				},
				Pr = {
					key: 9,
					class: "row"
				},
				Ar = {
					class: "col-12 col-lg-3"
				},
				Lr = {
					class: "col"
				},
				Vr = Object(r["j"])("br", null, null, -1),
				Nr = Object(r["j"])("br", null, null, -1),
				Dr = {
					class: "row"
				},
				Mr = {
					class: "col-12 col-lg-3"
				},
				$r = {
					class: "col"
				},
				Fr = {
					href: "https://ntse.skat.dk/ntse-front/public/momsnummer/soeg?execution=e1s1",
					target: "_blank",
					rel: "noopener"
				},
				Kr = {
					class: "mt-3"
				},
				Cr = {
					key: 10,
					class: "row"
				},
				Gr = {
					class: "col-12 col-lg-3"
				},
				Ur = {
					class: "col"
				},
				Br = {
					key: 11,
					class: "row"
				},
				qr = {
					class: "col-12 col-lg-3"
				},
				Xr = {
					class: "col"
				},
				zr = {
					key: 12,
					class: "row"
				},
				Yr = {
					class: "col-12 col-lg-3"
				},
				Jr = {
					class: "col"
				},
				Wr = {
					key: 13,
					class: "row"
				},
				Zr = {
					class: "col-12 col-lg-3"
				},
				Qr = {
					class: "col"
				},
				ea = {
					key: 0
				},
				ta = {
					key: 14,
					class: "row"
				},
				na = {
					class: "col-12 col-lg-3"
				},
				ra = {
					class: "col"
				},
				aa = {
					key: 15,
					class: "row"
				},
				oa = {
					class: "col-12 col-lg-3"
				},
				sa = {
					class: "col"
				},
				ca = {
					key: 16,
					class: "row"
				},
				ia = {
					class: "col-12 col-lg-3"
				},
				la = {
					class: "col"
				},
				da = {
					key: 17,
					class: "row"
				},
				ba = {
					class: "col-12 col-lg-3"
				},
				ja = {
					class: "col"
				},
				ua = {
					key: 18,
					class: "row"
				},
				Oa = {
					class: "col-12 col-lg-3"
				},
				ka = {
					class: "col"
				},
				va = {
					key: 0
				};
			Object(r["x"])();
			var fa = nr((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Detaljer"),
						i = Object(r["E"])("Accordion");
					return Object(r["w"])(), Object(r["f"])(i, {
						"accordion-id": "accordion-udvidede-virksomhedsoplysninger",
						"text-prefix": "accordion-udvidede_virksomhedsoplysninger",
						"vis-kontekstnaer-hjaelp": !0
					}, {
						default: nr((function() {
							return [e.virksomhed.udvidedeOplysninger ? (Object(r["w"])(), Object(r["f"])("div", rr, [e.virksomhed.udvidedeOplysninger.telefon ? (Object(r["w"])(), Object(r["f"])("div", ar, [Object(r["j"])("div", or, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-telefon-label")), 1)]), Object(r["j"])("div", sr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.telefon), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.telefonSekundaert ? (Object(r["w"])(), Object(r["f"])("div", cr, [Object(r["j"])("div", ir, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-telefonSekundaert-label")), 1)]), Object(r["j"])("div", lr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.telefonSekundaert), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.fax ? (Object(r["w"])(), Object(r["f"])("div", dr, [Object(r["j"])("div", br, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-fax-label")), 1)]), Object(r["j"])("div", jr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.fax), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.email ? (Object(r["w"])(), Object(r["f"])("div", ur, [Object(r["j"])("div", Or, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-email-label")), 1)]), Object(r["j"])("div", kr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.email), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.kommune ? (Object(r["w"])(), Object(r["f"])("div", vr, [Object(r["j"])("div", fr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-kommune-label")), 1)]), Object(r["j"])("div", mr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.kommune), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.hovedbranche ? (Object(r["w"])(), Object(r["f"])("div", gr, [Object(r["j"])("div", pr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-branchekode-label")), 1)]), Object(r["j"])("div", hr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.hovedbranche.branchekode) + " " + Object(r["H"])(e.virksomhed.udvidedeOplysninger.hovedbranche.titel), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.bibrancher && e.virksomhed.udvidedeOplysninger.bibrancher.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", yr, [Object(r["j"])("div", Er, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-bibrancher-label")), 1)]), Object(r["j"])("div", xr, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.udvidedeOplysninger.bibrancher, (function(e, t) {
								return Object(r["w"])(), Object(r["f"])(r["a"], {
									key: t
								}, [Object(r["i"])(Object(r["H"])(e.branchekode) + " " + Object(r["H"])(e.titel) + " ", 1), wr], 64)
							})), 128))])])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.formaal ? (Object(r["w"])(), Object(r["f"])("div", Rr, [Object(r["j"])("div", Hr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-formaal-label")), 1)]), Object(r["j"])("div", Tr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.formaal), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.boersnoteret ? (Object(r["w"])(), Object(r["f"])("div", Sr, [Object(r["j"])("div", Ir, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-boersnoteret-label")), 1)]), Object(r["j"])("div", _r, Object(r["H"])(e.virksomhed.udvidedeOplysninger.boersnoteret ? e.$t("stamdata-ja-label") : e.$t("stamdata-nej-label")), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.binavne && e.virksomhed.udvidedeOplysninger.binavne.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", Pr, [Object(r["j"])("div", Ar, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-binavne-label")), 1)]), Object(r["j"])("div", Lr, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.udvidedeOplysninger.binavne.slice(0, 5), (function(e, t) {
								return Object(r["w"])(), Object(r["f"])(r["a"], {
									key: t
								}, [Object(r["i"])(Object(r["H"])(e) + " ", 1), Vr], 64)
							})), 128)), e.virksomhed.udvidedeOplysninger.binavne.length > 5 ? (Object(r["w"])(), Object(r["f"])(c, {
								key: 0,
								textPrefix: "udvidede_oplysninger-binavne-visalle"
							}, {
								default: nr((function() {
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.udvidedeOplysninger.binavne.slice(5, e.virksomhed.udvidedeOplysninger.binavne.length), (function(e, t) {
										return Object(r["w"])(), Object(r["f"])(r["a"], {
											key: t
										}, [Object(r["i"])(Object(r["H"])(e) + " ", 1), Nr], 64)
									})), 128))]
								})),
								_: 1
							})) : Object(r["g"])("", !0)])])) : Object(r["g"])("", !0), Object(r["j"])("div", Dr, [Object(r["j"])("div", Mr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-momsregistreret-label")), 1)]), Object(r["j"])("div", $r, [Object(r["i"])(Object(r["H"])(e.$t("udvidede_oplysninger-momsregistreret-text")) + " ", 1), Object(r["j"])("a", Fr, [Object(r["j"])("span", Kr, Object(r["H"])(e.$t("udvidede_oplysninger-momsregistreret-link")), 1)])])]), e.virksomhed.udvidedeOplysninger.regnskabsaarStart ? (Object(r["w"])(), Object(r["f"])("div", Cr, [Object(r["j"])("div", Gr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-regnskabsaar-label")), 1)]), Object(r["j"])("div", Ur, Object(r["H"])(e.virksomhed.udvidedeOplysninger.regnskabsaarStart) + " - " + Object(r["H"])(e.virksomhed.udvidedeOplysninger.regnskabsaarSlut), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.senesteVedtaegtsdato ? (Object(r["w"])(), Object(r["f"])("div", Br, [Object(r["j"])("div", qr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-seneste_vedtaegtsdato-label")), 1)]), Object(r["j"])("div", Xr, Object(r["H"])(e.formattedSenesteVedtaegtsdato), 1)])) : Object(r["g"])("", !0), null !== e.virksomhed.udvidedeOplysninger.kapitalklasser ? (Object(r["w"])(), Object(r["f"])("div", zr, [Object(r["j"])("div", Yr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-kapitalklasser-label")), 1)]), Object(r["j"])("div", Jr, Object(r["H"])(e.virksomhed.udvidedeOplysninger.kapitalklasser ? e.$t("stamdata-ja-label") : e.$t("stamdata-nej-label")), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.registreretKapital ? (Object(r["w"])(), Object(r["f"])("div", Wr, [Object(r["j"])("div", Zr, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-registreretKapital-label")), 1)]), Object(r["j"])("div", Qr, [Object(r["i"])(Object(r["H"])(e.virksomhed.udvidedeOplysninger.registreretKapital) + " ", 1), e.virksomhed.udvidedeOplysninger.delvistIndbetaltKapital ? (Object(r["w"])(), Object(r["f"])("span", ea, Object(r["H"])(e.$t("udvidede_oplysninger-registreretKapital-delvist")), 1)) : Object(r["g"])("", !0)])])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.stadfaestelsesdato ? (Object(r["w"])(), Object(r["f"])("div", ta, [Object(r["j"])("div", na, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-stadfaestelse-label")), 1)]), Object(r["j"])("div", ra, Object(r["H"])(e.$t("udvidede_oplysninger-stadfaestet_af-label")) + " " + Object(r["H"])(e.virksomhed.udvidedeOplysninger.stadfaestetAf) + " " + Object(r["H"])(e.formattedStadfaestelsedato), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.foersteRegnskabsperiodeStart ? (Object(r["w"])(), Object(r["f"])("div", aa, [Object(r["j"])("div", oa, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-foerste_regnskabsperiode-label")), 1)]), Object(r["j"])("div", sa, Object(r["H"])(e.formattedFoersteregnskabsperidoeStartdato) + " - " + Object(r["H"])(e.formattedFoersteregnskabsperidoeSlutdato), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.koncessionsdato ? (Object(r["w"])(), Object(r["f"])("div", ca, [Object(r["j"])("div", ia, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-koncessionsdato-label")), 1)]), Object(r["j"])("div", la, Object(r["H"])(e.$t("udvidede_oplysninger-koncessionsdato-dato")) + " " + Object(r["H"])(e.formattedKoncessionsdato), 1)])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.postadresse ? (Object(r["w"])(), Object(r["f"])("div", da, [Object(r["j"])("div", ba, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-postadresse-label")), 1)]), Object(r["j"])("div", ja, [Object(r["j"])("div", {
								innerHTML: e.formattedPostadresse
							}, null, 8, ["innerHTML"])])])) : Object(r["g"])("", !0), e.virksomhed.udvidedeOplysninger.udenlandskPostadresse && !e.virksomhed.udvidedeOplysninger.postadresse ? (Object(r["w"])(), Object(r["f"])("div", ua, [Object(r["j"])("div", Oa, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("udvidede_oplysninger-udenlandsk_postadresse-label")), 1)]), Object(r["j"])("div", ka, [Object(r["j"])("div", {
								innerHTML: e.formattedUdenlandskPostadresse
							}, null, 8, ["innerHTML"]), e.virksomhed.udvidedeOplysninger.udenlandskPostadresseLand ? (Object(r["w"])(), Object(r["f"])("div", va, Object(r["H"])(e.virksomhed.udvidedeOplysninger.udenlandskPostadresseLand), 1)) : Object(r["g"])("", !0)])])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0)]
						})),
						_: 1
					})
				})),
				ma = Object(r["k"])({
					name: "UdvidedeVirksomhedsoplysninger",
					components: {
						Detaljer: Et,
						Accordion: et["a"]
					},
					data: function() {
						return {
							Sprog: Zn["a"]
						}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							t = Object(r["d"])((function() {
								return xn["b"].sprogservice.global.locale
							})),
							n = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.udvidedeOplysninger.senesteVedtaegtsdato)
							})),
							a = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.udvidedeOplysninger.stadfaestelsesdato)
							})),
							o = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.udvidedeOplysninger.foersteRegnskabsperiodeStart)
							})),
							s = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.udvidedeOplysninger.foersteRegnskabsperiodeSlut)
							})),
							c = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.value.udvidedeOplysninger.koncessionsdato)
							})),
							l = Object(r["d"])((function() {
								return Be["a"].formaterAdresse(e.value.udvidedeOplysninger.udenlandskPostadresse)
							})),
							d = Object(r["d"])((function() {
								return Be["a"].formaterAdresse(e.value.udvidedeOplysninger.postadresse)
							}));
						return {
							virksomhed: e,
							locale: t,
							formattedSenesteVedtaegtsdato: n,
							formattedStadfaestelsedato: a,
							formattedKoncessionsdato: c,
							formattedUdenlandskPostadresse: l,
							formattedPostadresse: d,
							formattedFoersteregnskabsperidoeStartdato: o,
							formattedFoersteregnskabsperidoeSlutdato: s
						}
					}
				});
			n("73fe");
			const ga = Ye()(ma, [
				["render", fa],
				["__scopeId", "data-v-1083b260"]
			]);
			var pa = ga,
				ha = {
					class: "antalAnsatte"
				};

			function ya(e, t, n, a, o, s) {
				var c = Object(r["E"])("Tabel"),
					i = Object(r["E"])("Accordion");
				return e.showAntalAnsatte ? (Object(r["w"])(), Object(r["f"])(i, {
					key: 0,
					"accordion-id": "accordion-antal-ansatte",
					"text-prefix": "accordion-antal-ansatte",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])("div", ha, [Object(r["j"])(c, {
							"text-prefix": "antal-ansatte-pr-maaned",
							data: e.maanedsbeskaeftigelse,
							columns: e.headerArray
						}, null, 8, ["data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "antal-ansatte-pr-kvartal",
							data: e.kvartalsbeskaeftigelse,
							columns: e.headerArray
						}, null, 8, ["data", "columns"])])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			n("99af");
			var Ea = Object(r["V"])("data-v-509209b4");
			Object(r["z"])("data-v-509209b4");
			var xa = {
					key: 0,
					class: "accordion-content-inner"
				},
				wa = {
					class: "bold"
				},
				Ra = {
					class: "table--responsive-scroll"
				},
				Ha = {
					key: 0
				},
				Ta = {
					key: 1
				};
			Object(r["x"])();
			var Sa = Ea((function(e, t, n, a, o, s) {
					return e.data.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", xa, [Object(r["j"])("span", wa, Object(r["H"])(e.$t("".concat(e.textPrefix, "-tabel-overskrift"))), 1), Object(r["j"])("div", Ra, [Object(r["j"])("table", {
						class: "table table--borderless table-md-responsive-headers bg-normal",
						"aria-label": e.$t("tabel-aria_label")
					}, [e.showHeader && e.slicedData && e.slicedData.length > 0 ? (Object(r["w"])(), Object(r["f"])("thead", Ha, [Object(r["j"])("tr", null, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.columns, (function(t, n) {
						return Object(r["w"])(), Object(r["f"])("th", {
							key: n,
							scope: "col"
						}, Object(r["H"])(e.$t(e.textPrefix + "-tabel-label-" + t)), 1)
					})), 128))])])) : Object(r["g"])("", !0), Object(r["j"])("tbody", null, [e.slicedData ? (Object(r["w"])(!0), Object(r["f"])(r["a"], {
						key: 0
					}, Object(r["C"])(e.slicedData, (function(t, n) {
						return Object(r["w"])(), Object(r["f"])("tr", {
							key: n
						}, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.columns, (function(n, a) {
							return Object(r["w"])(), Object(r["f"])("td", {
								key: "".concat(n, "-").concat(a),
								"data-title": e.$t(e.textPrefix + "-tabel-label-" + n)
							}, [e.visDataSomHtml ? (Object(r["w"])(), Object(r["f"])("span", {
								key: 0,
								innerHTML: t[n]
							}, null, 8, ["innerHTML"])) : (Object(r["w"])(), Object(r["f"])("span", Ta, Object(r["H"])(t[n]), 1))], 8, ["data-title"])
						})), 128))])
					})), 128)) : Object(r["D"])(e.$slots, "default", {
						key: 1
					}, void 0, !0)])], 8, ["aria-label"])]), e.tilfoejVisMere ? (Object(r["w"])(), Object(r["f"])(r["a"], {
						key: 0
					}, [!e.showMore && e.data.length > 5 ? (Object(r["w"])(), Object(r["f"])("button", {
						key: 0,
						id: "".concat(e.textPrefix, "-vis-mere-knap"),
						type: "button",
						class: "show-more",
						onClick: t[1] || (t[1] = function(t) {
							return e.toggleShowMore()
						})
					}, Object(r["H"])(e.$t("vis-mere-knap")), 9, ["id"])) : Object(r["g"])("", !0), e.showMore ? (Object(r["w"])(), Object(r["f"])("button", {
						key: 1,
						type: "button",
						class: "show-less",
						onClick: t[2] || (t[2] = function(t) {
							return e.toggleShowMore()
						})
					}, Object(r["H"])(e.$t("vis-mindre-knap")), 1)) : Object(r["g"])("", !0)], 64)) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0)
				})),
				Ia = Object(r["k"])({
					name: "Tabel",
					props: {
						textPrefix: {
							type: String,
							required: !0
						},
						showHeader: {
							type: Boolean,
							default: !0
						},
						visDataSomHtml: {
							type: Boolean,
							default: !1
						},
						tilfoejVisMere: {
							type: Boolean,
							default: !0
						},
						data: {
							type: Array
						},
						columns: {
							type: Array,
							required: !0
						}
					},
					setup: function(e) {
						var t = Object(r["B"])(!1),
							n = Object(r["d"])((function() {
								return t.value || !e.tilfoejVisMere ? e.data : e.data.slice(0, 5)
							}));

						function a() {
							t.value = !t.value
						}
						return {
							showMore: t,
							toggleShowMore: a,
							slicedData: n
						}
					}
				});
			n("ce0f");
			const _a = Ye()(Ia, [
				["render", Sa],
				["__scopeId", "data-v-509209b4"]
			]);
			var Pa = _a,
				Aa = n("e939"),
				La = Object(r["k"])({
					name: "AntalAnsatte",
					components: {
						Tabel: Pa,
						Accordion: et["a"]
					},
					props: {
						datatype: {
							type: String,
							default: Aa["a"].VIRKSOMHED
						}
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
								return e.datatype === Aa["a"].PRODUKTIONSENHED ? i["b"].produktionsenhed.aktivProduktionsenhed : i["b"].virksomhed.aktivVirksomhed
							})),
							n = ["periode", "antalAnsatte", "antalAarsvaerk"],
							a = Object(r["d"])((function() {
								return t.value.antalAnsatte.maanedsbeskaeftigelse
							})),
							o = Object(r["d"])((function() {
								return t.value.antalAnsatte.kvartalsbeskaeftigelse
							})),
							s = Object(r["d"])((function() {
								return !!(t.value.antalAnsatte.kvartalsbeskaeftigelse && t.value.antalAnsatte.kvartalsbeskaeftigelse.length > 0 || t.value.antalAnsatte.maanedsbeskaeftigelse && t.value.antalAnsatte.maanedsbeskaeftigelse.length > 0)
							}));
						return {
							data: t,
							headerArray: n,
							maanedsbeskaeftigelse: a,
							kvartalsbeskaeftigelse: o,
							showAntalAnsatte: s
						}
					}
				});
			const Va = Ye()(La, [
				["render", ya]
			]);
			var Na = Va,
				Da = {
					class: "hovedselskab"
				},
				Ma = {
					class: "accordion-content-inner"
				},
				$a = {
					key: 0,
					class: "row mt-3"
				},
				Fa = {
					class: "col-12 col-lg-4"
				},
				Ka = {
					class: "bold"
				},
				Ca = {
					class: "col-12 col-lg-8"
				},
				Ga = {
					key: 1,
					class: "row mt-3"
				},
				Ua = {
					class: "col-12 col-lg-4"
				},
				Ba = {
					class: "bold"
				},
				qa = {
					class: "col-12 col-lg-8"
				},
				Xa = {
					key: 2,
					class: "row mt-3"
				},
				za = {
					class: "col-12 col-lg-4"
				},
				Ya = {
					class: "bold"
				},
				Ja = {
					class: "col-12 col-lg-8"
				},
				Wa = {
					key: 3,
					class: "row mt-3"
				},
				Za = {
					class: "col-12 col-lg-4"
				},
				Qa = {
					class: "bold"
				},
				eo = {
					class: "col-12 col-lg-8"
				},
				to = {
					key: 4,
					class: "row mt-3"
				},
				no = {
					class: "col-12 col-lg-4"
				},
				ro = {
					class: "bold"
				},
				ao = {
					class: "col-12 col-lg-8"
				},
				oo = {
					key: 5,
					class: "row mt-3"
				},
				so = {
					class: "col-12 col-lg-4"
				},
				co = {
					class: "bold"
				},
				io = {
					class: "col-12 col-lg-8"
				},
				lo = {
					key: 6,
					class: "row mt-3"
				},
				bo = {
					class: "col-12 col-lg-4"
				},
				jo = {
					class: "bold"
				},
				uo = {
					class: "col-12 col-lg-8"
				},
				Oo = Object(r["j"])("br", null, null, -1),
				ko = {
					key: 7,
					class: "row mt-3"
				},
				vo = {
					class: "col-12 col-lg-4"
				},
				fo = {
					class: "bold"
				},
				mo = {
					class: "col-12 col-lg-8"
				},
				go = {
					key: 8,
					class: "row mt-3"
				},
				po = {
					class: "col-12 col-lg-4"
				},
				ho = {
					class: "bold"
				},
				yo = {
					class: "col-12 col-lg-8"
				};

			function Eo(e, t, n, a, o, s) {
				var c = Object(r["E"])("Accordion");
				return e.virksomhed.hovedselskab ? (Object(r["w"])(), Object(r["f"])(c, {
					key: 0,
					"accordion-id": "accordion-hovedselskab",
					"text-prefix": "accordion-hovedselskab",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])("div", Da, [Object(r["j"])("div", Ma, [e.virksomhed.hovedselskab.navn ? (Object(r["w"])(), Object(r["f"])("div", $a, [Object(r["j"])("div", Fa, [Object(r["j"])("span", Ka, Object(r["H"])(e.$t("virksomhed-hovedselskab-navn")), 1)]), Object(r["j"])("div", Ca, Object(r["H"])(e.virksomhed.hovedselskab.navn), 1)])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.hjemsted ? (Object(r["w"])(), Object(r["f"])("div", Ga, [Object(r["j"])("div", Ua, [Object(r["j"])("span", Ba, Object(r["H"])(e.$t("virksomhed-hovedselskab-hjemsted")), 1)]), Object(r["j"])("div", qa, Object(r["H"])(e.virksomhed.hovedselskab.hjemsted), 1)])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.adresse ? (Object(r["w"])(), Object(r["f"])("div", Xa, [Object(r["j"])("div", za, [Object(r["j"])("span", Ya, Object(r["H"])(e.$t("virksomhed-hovedselskab-adresse")), 1)]), Object(r["j"])("div", Ja, Object(r["H"])(e.virksomhed.hovedselskab.adresse), 1)])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.registreretMyndighed ? (Object(r["w"])(), Object(r["f"])("div", Wa, [Object(r["j"])("div", Za, [Object(r["j"])("span", Qa, Object(r["H"])(e.$t("virksomhed-hovedselskab-registerende-myndighed")), 1)]), Object(r["j"])("div", eo, Object(r["H"])(e.virksomhed.hovedselskab.registreretMyndighed), 1)])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.formaal ? (Object(r["w"])(), Object(r["f"])("div", to, [Object(r["j"])("div", no, [Object(r["j"])("span", ro, Object(r["H"])(e.$t("virksomhed-hovedselskab-formaal")), 1)]), Object(r["j"])("div", ao, Object(r["H"])(e.virksomhed.hovedselskab.formaal), 1)])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.tegnetKapital ? (Object(r["w"])(), Object(r["f"])("div", oo, [Object(r["j"])("div", so, [Object(r["j"])("span", co, Object(r["H"])(e.$t("virksomhed-hovedselskab-tegnet-kapital")), 1)]), Object(r["j"])("div", io, [Object(r["i"])(Object(r["H"])(e.virksomhed.hovedselskab.tegnetKapital) + " ", 1), e.virksomhed.hovedselskab.delvistIndbetaltKapital ? (Object(r["w"])(), Object(r["f"])(r["a"], {
							key: 0
						}, [Object(r["i"])(Object(r["H"])(e.$t("delvist-indbetalt-kapital")), 1)], 64)) : Object(r["g"])("", !0)])])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.tegningsberettiget && e.virksomhed.hovedselskab.tegningsberettiget.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", lo, [Object(r["j"])("div", bo, [Object(r["j"])("span", jo, Object(r["H"])(e.$t("virksomhed-hovedselskab-tegningsberettiget")), 1)]), Object(r["j"])("div", uo, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.hovedselskab.tegningsberettiget, (function(t, n) {
							return Object(r["w"])(), Object(r["f"])(r["a"], {
								key: n
							}, [Object(r["j"])("div", {
								innerHTML: e.adresseUtil.formaterAdresse(t)
							}, null, 8, ["innerHTML"]), Oo], 64)
						})), 128))])])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.tegningsregel ? (Object(r["w"])(), Object(r["f"])("div", ko, [Object(r["j"])("div", vo, [Object(r["j"])("span", fo, Object(r["H"])(e.$t("virksomhed-hovedselskab-tegningsregel")), 1)]), Object(r["j"])("div", mo, Object(r["H"])(e.virksomhed.hovedselskab.tegningsregel), 1)])) : Object(r["g"])("", !0), e.virksomhed.hovedselskab.regnskabsaarStart && e.virksomhed.hovedselskab.regnskabsaarSlut ? (Object(r["w"])(), Object(r["f"])("div", go, [Object(r["j"])("div", po, [Object(r["j"])("span", ho, Object(r["H"])(e.$t("virksomhed-hovedselskab-regnskabsaar")), 1)]), Object(r["j"])("div", yo, Object(r["H"])(e.$t("virksomhedHovedselskab-fra-label")) + " " + Object(r["H"])(e.virksomhed.hovedselskab.regnskabsaarStart) + " " + Object(r["H"])(e.$t("virksomhedHovedselskab-til-label")) + " " + Object(r["H"])(e.virksomhed.hovedselskab.regnskabsaarSlut), 1)])) : Object(r["g"])("", !0)])])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			var xo = Object(r["k"])({
				name: "VirksomhedHovedselskab",
				components: {
					Accordion: et["a"]
				},
				data: function() {
					return {
						RouteName: Ge["a"],
						adresseUtil: Be["a"]
					}
				},
				setup: function() {
					var e = Object(r["d"])((function() {
						return i["b"].virksomhed.aktivVirksomhed
					}));
					return {
						virksomhed: e
					}
				}
			});
			const wo = Ye()(xo, [
				["render", Eo]
			]);
			var Ro = wo,
				Ho = n("59a4"),
				To = Object(r["V"])("data-v-71175da4");
			Object(r["z"])("data-v-71175da4");
			var So = {
					class: "udvidede-virksomhedsoplysninger accordion-content-inner"
				},
				Io = {
					key: 0,
					class: "row"
				},
				_o = {
					class: "col-12 col-lg-4"
				},
				Po = {
					class: "col"
				},
				Ao = {
					class: "col-12 col-lg-4"
				},
				Lo = {
					key: 0
				},
				Vo = {
					class: "col"
				},
				No = {
					key: 0
				},
				Do = Object(r["i"])(" ("),
				Mo = Object(r["i"])(", "),
				$o = Object(r["i"])(") "),
				Fo = {
					key: 1,
					class: "row"
				},
				Ko = {
					class: "col-12 col-lg-3"
				},
				Co = {
					class: "col"
				},
				Go = Object(r["j"])("div", {
					class: "col-12 col-lg-4"
				}, null, -1),
				Uo = {
					class: "col"
				};
			Object(r["x"])();
			var Bo = To((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Link"),
						i = Object(r["E"])("Detaljer"),
						l = Object(r["E"])("Accordion");
					return e.virksomhed.personkreds.tegningsregel || e.virksomhed.personkreds.ejerborgLink || e.virksomhed.personkreds.personkredser && e.virksomhed.personkreds.personkredser.length > 0 || e.virksomhed.personkreds.ophoerteFad && e.virksomhed.personkreds.ophoerteFad.length > 0 ? (Object(r["w"])(), Object(r["f"])(l, {
						key: 0,
						"accordion-id": "accordion-personkreds",
						"text-prefix": "accordion-personkreds",
						"vis-kontekstnaer-hjaelp": !0
					}, {
						default: To((function() {
							return [Object(r["j"])("div", So, [e.virksomhed.personkreds.tegningsregel ? (Object(r["w"])(), Object(r["f"])("div", Io, [Object(r["j"])("div", _o, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("personkreds-tegningsregel-label")), 1)]), Object(r["j"])("div", Po, Object(r["H"])(e.virksomhed.personkreds.tegningsregel), 1)])) : Object(r["g"])("", !0), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.personkreds.personkredser, (function(t) {
								return Object(r["w"])(), Object(r["f"])("div", {
									key: t.rolleTekstnogle
								}, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(t.personRoller, (function(n, a) {
									return Object(r["w"])(), Object(r["f"])("div", {
										class: "row",
										key: n.id
									}, [Object(r["j"])("div", Ao, [t && 0 === a ? (Object(r["w"])(), Object(r["f"])("strong", Lo, Object(r["H"])(e.$t(t.rolleTekstnogle)), 1)) : Object(r["g"])("", !0)]), Object(r["j"])("div", Vo, [n.titlePrefix.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", No, [Do, (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(n.titlePrefix, (function(t, a) {
										return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["i"])(Object(r["H"])(e.$t(t)), 1), a < n.titlePrefix.length - 1 ? (Object(r["w"])(), Object(r["f"])(r["a"], {
											key: 0
										}, [Mo], 64)) : Object(r["g"])("", !0)], 64)
									})), 256)), $o])) : Object(r["g"])("", !0), Object(r["j"])(c, {
										"link-text": n.senesteNavn,
										link: {
											name: e.RouteName.ENHEDSVISNING,
											params: n.personType ? {
												enhedType: n.enhedstype.toLowerCase(),
												enhedId: n.id,
												personType: n.personType
											} : {
												enhedType: n.enhedstype.toLowerCase(),
												enhedId: n.id
											}
										}
									}, null, 8, ["link-text", "link"]), n.adresse ? (Object(r["w"])(), Object(r["f"])("div", {
										key: 1,
										innerHTML: e.adresseUtil.formaterAdresse(n.adresse)
									}, null, 8, ["innerHTML"])) : Object(r["g"])("", !0), n.ekstraData ? (Object(r["w"])(), Object(r["f"])("div", {
										key: 2,
										innerHTML: n.ekstraData
									}, null, 8, ["innerHTML"])) : Object(r["g"])("", !0)])])
								})), 128))])
							})), 128)), e.virksomhed.personkreds.ejerborgLink ? (Object(r["w"])(), Object(r["f"])("div", Fo, [Object(r["j"])("div", Ko, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("personkreds-ejerborglink-label")), 1)]), Object(r["j"])("div", Co, [Object(r["j"])(c, {
								link: e.virksomhed.personkreds.ejerborgLink + e.virksomhed.stamdata.cvrnummer,
								"link-textkey": "personkreds-ejerborglink-tekst"
							}, null, 8, ["link"])])])) : Object(r["g"])("", !0), e.virksomhed.personkreds.ophoerteFad && e.virksomhed.personkreds.ophoerteFad.length > 0 ? (Object(r["w"])(), Object(r["f"])(i, {
								key: 2,
								textPrefix: "accordion-fad-ophoerte-visalle",
								"accordion-id": "accordion-fad-ophoerte"
							}, {
								default: To((function() {
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.personkreds.ophoerteFad, (function(t) {
										return Object(r["w"])(), Object(r["f"])("div", {
											key: t.id,
											class: "row"
										}, [Go, Object(r["j"])("div", Uo, [Object(r["j"])(c, {
											"link-text": t.senesteNavn,
											link: {
												name: e.RouteName.ENHEDSVISNING,
												params: t.personType ? {
													enhedType: t.enhedstype.toLowerCase(),
													enhedId: t.id,
													personType: t.personType
												} : {
													enhedType: t.enhedstype.toLowerCase(),
													enhedId: t.id
												}
											}
										}, null, 8, ["link-text", "link"]), t.adresse ? (Object(r["w"])(), Object(r["f"])("div", {
											key: 0,
											innerHTML: e.adresseUtil.formaterAdresse(t.adresse)
										}, null, 8, ["innerHTML"])) : Object(r["g"])("", !0), t.ekstraData ? (Object(r["w"])(), Object(r["f"])("div", {
											key: 1,
											innerHTML: t.ekstraData
										}, null, 8, ["innerHTML"])) : Object(r["g"])("", !0)])])
									})), 128))]
								})),
								_: 1
							})) : Object(r["g"])("", !0)])]
						})),
						_: 1
					})) : Object(r["g"])("", !0)
				})),
				qo = Object(r["k"])({
					name: "VirksomhedPersonkreds",
					components: {
						Link: Ue["a"],
						Accordion: et["a"],
						Detaljer: Et
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							adresseUtil: Be["a"]
						}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
							return i["b"].virksomhed.aktivVirksomhed
						}));
						return {
							virksomhed: e
						}
					}
				});
			n("902d");
			const Xo = Ye()(qo, [
				["render", Bo],
				["__scopeId", "data-v-71175da4"]
			]);
			var zo = Xo,
				Yo = Object(r["V"])("data-v-6d7f53cc");
			Object(r["z"])("data-v-6d7f53cc");
			var Jo = {
				class: "accordion-content-wrapper"
			};
			Object(r["x"])();
			var Wo = Yo((function(e, t, n, a, o, s) {
				var c = Object(r["E"])("VirksomhedProduktionsenhederStamdata"),
					i = Object(r["E"])("Detaljer"),
					l = Object(r["E"])("Accordion");
				return e.visAktiveProduktionsenheder || e.visOphoerteProduktionsenheder ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0,
					"accordion-id": "accordion-produktionsenheder",
					"text-prefix": "accordion-produktionsenheder",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Yo((function() {
						return [Object(r["j"])("div", Jo, [Object(r["j"])(c, {
							produktionsenheder: e.virksomhed.produktionsenheder.aktiveProduktionsenheder
						}, null, 8, ["produktionsenheder"]), e.visOphoerteProduktionsenheder ? (Object(r["w"])(), Object(r["f"])(i, {
							key: 0,
							class: "mt-4",
							textPrefix: "accordion-produktionsenheder-ophoerte",
							"accordion-id": "accordion-produktionsenheder-ophoerte"
						}, {
							default: Yo((function() {
								return [Object(r["j"])(c, {
									produktionsenheder: e.virksomhed.produktionsenheder.ophoerteProduktionsenheder,
									"ophoerte-produktionsenheder": !0
								}, null, 8, ["produktionsenheder"])]
							})),
							_: 1
						})) : Object(r["g"])("", !0)])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}));

			function Zo(e, t, n, a, o, s) {
				var c = Object(r["E"])("ProduktionsenhedStamdata"),
					i = Object(r["E"])("Detaljer");
				return Object(r["w"])(), Object(r["f"])(r["a"], null, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.produktionsenheder.slice(0, 5), (function(t, n) {
					return Object(r["w"])(), Object(r["f"])("div", {
						key: n,
						class: ["accordion-content-inner ml-1", {
							"accordion-content-ophoert": e.ophoerteProduktionsenheder
						}]
					}, [Object(r["j"])(c, {
						stamdata: t.stamdata
					}, null, 8, ["stamdata"])], 2)
				})), 128)), e.antalProduktionsenheder > 5 ? (Object(r["w"])(), Object(r["f"])(i, {
					key: 0,
					textPrefix: "accordion-produktionsenheder-".concat(e.ophoerteProduktionsenheder ? "ophoerte" : "aktive", "-visalle")
				}, {
					default: Object(r["R"])((function() {
						return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.produktionsenheder.slice(5, e.antalProduktionsenheder), (function(t, n) {
							return Object(r["w"])(), Object(r["f"])("div", {
								key: n,
								class: ["accordion-content-inner ml-1", {
									"accordion-content-ophoert": e.ophoerteProduktionsenheder
								}]
							}, [Object(r["j"])(c, {
								stamdata: t.stamdata
							}, null, 8, ["stamdata"])], 2)
						})), 128))]
					})),
					_: 1
				}, 8, ["textPrefix"])) : Object(r["g"])("", !0)], 64)
			}
			var Qo = Object(r["V"])("data-v-45474e9a");
			Object(r["z"])("data-v-45474e9a");
			var es = {
					key: 0,
					class: "produktionsenhed-stamdata"
				},
				ts = {
					key: 0
				},
				ns = Object(r["j"])("br", null, null, -1),
				rs = {
					key: 0
				},
				as = {
					key: 6,
					class: "mt-6"
				};
			Object(r["x"])();
			var os = Qo((function(e, t, n, a, o, s) {
					var c, i = Object(r["E"])("StamdataFelt"),
						l = Object(r["E"])("Link");
					return e.stamdata ? (Object(r["w"])(), Object(r["f"])("div", es, [e.enhedsvisningVirksomhed ? (Object(r["w"])(), Object(r["f"])(i, {
						key: 0,
						feltnavn: "navn",
						tekstVaerdi: e.stamdata.navn
					}, null, 8, ["tekstVaerdi"])) : Object(r["g"])("", !0), e.enhedsvisningVirksomhed ? (Object(r["w"])(), Object(r["f"])(i, {
						key: 1,
						feltnavn: "pnummer",
						"vis-vaerdi": !0
					}, {
						default: Qo((function() {
							return [Object(r["j"])(l, {
								link: {
									name: e.RouteName.ENHEDSVISNING,
									params: {
										enhedType: e.EnhedType.PRODUKTIONSENHED,
										enhedId: e.stamdata.pnummer
									}
								},
								"link-text": e.stamdata.pnummer
							}, null, 8, ["link", "link-text"])]
						})),
						_: 1
					})) : (Object(r["w"])(), Object(r["f"])(i, {
						key: 2,
						feltnavn: "pnummer",
						tekstVaerdi: e.stamdata.pnummer
					}, null, 8, ["tekstVaerdi"])), Object(r["j"])(i, {
						feltnavn: "adresse",
						tekstVaerdi: e.stamdata.adresse
					}, {
						default: Qo((function() {
							return [Object(r["j"])("span", {
								innerHTML: e.formattedAdresse
							}, null, 8, ["innerHTML"]), e.stamdata.bygningsnummer ? (Object(r["w"])(), Object(r["f"])("div", ts, Object(r["H"])(e.$t("stamdata-bygningsnummer-label")) + " " + Object(r["H"])(e.stamdata.bygningsnummer), 1)) : Object(r["g"])("", !0)]
						})),
						_: 1
					}, 8, ["tekstVaerdi"]), Object(r["j"])(i, {
						feltnavn: "postnummerby",
						tekstVaerdi: e.stamdata.postnummerOgBy
					}, null, 8, ["tekstVaerdi"]), Object(r["j"])(i, {
						feltnavn: "startdato",
						tekstVaerdi: e.formattedStartDato
					}, null, 8, ["tekstVaerdi"]), Object(r["j"])(i, {
						feltnavn: "ophoersdato",
						tekstVaerdi: e.formattedOphoerssdato
					}, null, 8, ["tekstVaerdi"]), Object(r["j"])(i, {
						feltnavn: "hovedbranche",
						tekstVaerdi: e.formattedHovedbranche
					}, null, 8, ["tekstVaerdi"]), e.enhedsvisningVirksomhed ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])(i, {
						key: 3,
						feltnavn: "bibrancher",
						visVaerdi: (null === (c = e.stamdata.bibrancher) || void 0 === c ? void 0 : c.length) > 0
					}, {
						default: Qo((function() {
							return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.stamdata.bibrancher, (function(t, n) {
								return Object(r["w"])(), Object(r["f"])(r["a"], {
									key: n
								}, [Object(r["i"])(Object(r["H"])(e.formaterBranche(t)) + " ", 1), ns], 64)
							})), 128))]
						})),
						_: 1
					}, 8, ["visVaerdi"])), Object(r["j"])(i, {
						feltnavn: "reklamebeskyttelse",
						"vis-vaerdi": !0
					}, {
						default: Qo((function() {
							return [e.stamdata.reklamebeskyttet ? (Object(r["w"])(), Object(r["f"])(r["a"], {
								key: 0
							}, [Object(r["i"])(Object(r["H"])(e.$t("stamdata-ja-label")) + " - ", 1), Object(r["j"])(l, {
								link: {
									name: e.RouteName.ARTIKEL,
									params: {
										artikelId: e.ArtikelNavn.REKLAMEBESKYTTELSE
									}
								},
								"link-textkey": "stamdata-reklamebeskyttelse-link"
							}, null, 8, ["link"])], 64)) : (Object(r["w"])(), Object(r["f"])(r["a"], {
								key: 1
							}, [Object(r["i"])(Object(r["H"])(e.$t("stamdata-nej-label")), 1)], 64))]
						})),
						_: 1
					}), e.enhedsvisningVirksomhed ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])(i, {
						key: 4,
						feltnavn: "tilhoerende_cvrnummer",
						tekstVaerdi: e.stamdata.cvrnummer
					}, {
						default: Qo((function() {
							return [Object(r["j"])(l, {
								"link-text": "".concat(e.stamdata.cvrnummer, " ").concat(e.stamdata.virksomhedsnavn),
								link: {
									name: e.RouteName.ENHEDSVISNING,
									params: {
										enhedType: e.EnhedType.VIRKSOMHED,
										enhedId: e.stamdata.cvrnummer
									}
								}
							}, null, 8, ["link-text", "link"])]
						})),
						_: 1
					}, 8, ["tekstVaerdi"])), e.enhedsvisningVirksomhed ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])(i, {
						key: 5,
						feltnavn: "telefon",
						tekstVaerdi: e.stamdata.telefon
					}, null, 8, ["tekstVaerdi"])), Object(r["j"])(i, {
						feltnavn: "email",
						tekstVaerdi: e.stamdata.email
					}, null, 8, ["tekstVaerdi"]), Object(r["j"])(i, {
						feltnavn: "helligdagsaabent",
						visVaerdi: e.stamdata.helligdagsaabent
					}, {
						default: Qo((function() {
							return [Object(r["i"])(Object(r["H"])(e.$t("stamdata-ja-label")), 1)]
						})),
						_: 1
					}, 8, ["visVaerdi"]), Object(r["j"])(i, {
						feltnavn: "regnskabsperiode_for_helligdagsaabent",
						tekstVaerdi: e.formattedRegnskabsperiode
					}, null, 8, ["tekstVaerdi"]), Object(r["j"])(i, {
						feltnavn: "udenlandsk_adresse",
						tekstVaerdi: e.stamdata.udenlandskAdresse
					}, {
						default: Qo((function() {
							return [Object(r["j"])("span", {
								innerHTML: e.formattedUdenlandskAdresse
							}, null, 8, ["innerHTML"]), e.stamdata.udenlandskAdresseLand ? (Object(r["w"])(), Object(r["f"])("div", rs, Object(r["H"])(e.stamdata.udenlandskAdresseLand), 1)) : Object(r["g"])("", !0)]
						})),
						_: 1
					}, 8, ["tekstVaerdi"]), Object(r["j"])(i, {
						feltnavn: "registreret_i_hvidvaskregistret",
						visVaerdi: e.stamdata.registreretIHvidvaskregistret
					}, {
						default: Qo((function() {
							return [Object(r["i"])(Object(r["H"])(e.$t("stamdata-ja-label")), 1)]
						})),
						_: 1
					}, 8, ["visVaerdi"]), !e.enhedsvisningVirksomhed && e.showAdresseLink ? (Object(r["w"])(), Object(r["f"])("div", as, [Object(r["j"])(l, {
						link: {
							name: e.RouteName.SOEGERESULTATER,
							query: {
								fritekst: encodeURIComponent(e.adresseTilSoegning),
								sideIndex: 0
							}
						},
						"open-in-new-tab": !0,
						"link-textkey": "stamdata-se_alle_enheder_paa_adressen-link"
					}, null, 8, ["link"])])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0)
				})),
				ss = n("e3ef"),
				cs = n("6c02"),
				is = Object(r["k"])({
					name: "ProduktionsenhedStamdata",
					components: {
						Link: Ue["a"],
						StamdataFelt: ss["a"]
					},
					props: {
						stamdata: {
							type: Object,
							required: !0
						}
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							EnhedType: Aa["a"],
							ArtikelNavn: qe["a"]
						}
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.stamdata.startdato)
							})),
							n = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(e.stamdata.ophoersdato)
							})),
							a = Object(r["d"])((function() {
								return b(e.stamdata.hovedbranche)
							})),
							o = Object(r["d"])((function() {
								return j()
							})),
							s = Object(r["d"])((function() {
								return Be["a"].formaterAdresse(e.stamdata.adresse)
							})),
							c = Object(r["d"])((function() {
								return Be["a"].formaterAdresse(e.stamdata.udenlandskAdresse)
							})),
							i = Object(r["d"])((function() {
								return Object(cs["c"])().params.enhedType === Aa["a"].VIRKSOMHED
							})),
							l = Object(r["d"])((function() {
								return Be["a"].genererAdresseTilSoegLink(e.stamdata)
							})),
							d = Object(r["d"])((function() {
								return "" !== Be["a"].genererAdresseTilSoegLink(e.stamdata, !1)
							}));

						function b(e) {
							return null !== e && void 0 !== e && e.branchekode ? "".concat(e.branchekode, " ").concat(e.titel) : ""
						}

						function j() {
							var t = Ce["a"].fromIsoToUiFormat(e.stamdata.regnskabsperiodeStart),
								n = Ce["a"].fromIsoToUiFormat(e.stamdata.regnskabsperiodeSlut);
							return t && n ? "".concat(t, " - ").concat(n) : ""
						}
						return {
							formattedHovedbranche: a,
							formattedStartDato: t,
							formattedOphoerssdato: n,
							formattedRegnskabsperiode: o,
							formattedAdresse: s,
							formattedUdenlandskAdresse: c,
							enhedsvisningVirksomhed: i,
							formaterBranche: b,
							adresseTilSoegning: l,
							showAdresseLink: d
						}
					}
				});
			n("337a");
			const ls = Ye()(is, [
				["render", os],
				["__scopeId", "data-v-45474e9a"]
			]);
			var ds = ls,
				bs = Object(r["k"])({
					name: "VirksomhedProduktionsenhederStamdata",
					components: {
						ProduktionsenhedStamdata: ds,
						Detaljer: Et
					},
					props: {
						produktionsenheder: {
							type: Array
						},
						ophoerteProduktionsenheder: {
							type: Boolean,
							default: !1
						}
					},
					data: function() {
						return {}
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
								return e.produktionsenheder ? e.produktionsenheder.length : 0
							})),
							n = Object(r["d"])((function() {
								return t.value > 0
							}));
						return {
							antalProduktionsenheder: t,
							visProduktionsenheder: n
						}
					}
				});
			const js = Ye()(bs, [
				["render", Zo]
			]);
			var us = js,
				Os = Object(r["k"])({
					name: "VirksomhedProduktionsenheder",
					components: {
						VirksomhedProduktionsenhederStamdata: us,
						Accordion: et["a"],
						Detaljer: Et
					},
					data: function() {
						return {}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							t = Object(r["d"])((function() {
								var t, n;
								return (null === e || void 0 === e || null === (t = e.value.produktionsenheder) || void 0 === t || null === (n = t.aktiveProduktionsenheder) || void 0 === n ? void 0 : n.length) > 0
							})),
							n = Object(r["d"])((function() {
								var t, n;
								return (null === e || void 0 === e || null === (t = e.value.produktionsenheder) || void 0 === t || null === (n = t.ophoerteProduktionsenheder) || void 0 === n ? void 0 : n.length) > 0
							}));
						return {
							virksomhed: e,
							visAktiveProduktionsenheder: t,
							visOphoerteProduktionsenheder: n
						}
					}
				});
			n("a260");
			const ks = Ye()(Os, [
				["render", Wo],
				["__scopeId", "data-v-6d7f53cc"]
			]);
			var vs = ks,
				fs = {
					class: "accordion-content-inner"
				},
				ms = {
					class: "bold mb-5"
				},
				gs = {
					key: 0,
					class: "row"
				},
				ps = {
					class: "col-md-8 bold"
				},
				hs = {
					class: "col-md-2 bold"
				},
				ys = {
					class: "col-md-2 bold"
				};

			function Es(e, t, n, a, o, s) {
				var c = Object(r["E"])("Offentliggoerelse"),
					i = Object(r["E"])("Detaljer"),
					l = Object(r["E"])("Accordion");
				return e.offentliggoerelser && e.offentliggoerelser.length > 0 ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0,
					"accordion-id": "accordion-offentliggoerelser",
					"text-prefix": "accordion-offentliggoerelser",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])("div", fs, [Object(r["j"])("div", ms, Object(r["H"])(e.$t("virksomhed-offentliggoerelser-inner-overskrift")), 1), e.isMobile ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])("div", gs, [Object(r["j"])("div", ps, Object(r["H"])(e.$t("virksomhed-offentliggoerelser-titel")), 1), Object(r["j"])("div", hs, Object(r["H"])(e.$t("virksomhed-offentliggoerelser-offentliggjort")), 1), Object(r["j"])("div", ys, Object(r["H"])(e.$t("virksomhed-offentliggoerelser-handling")), 1)])), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.offentliggoerelser.slice(0, 5), (function(e) {
							return Object(r["w"])(), Object(r["f"])(c, {
								key: e.offentliggoerelseId,
								offentliggoerelse: e
							}, null, 8, ["offentliggoerelse"])
						})), 128)), e.offentliggoerelser.length > 5 ? (Object(r["w"])(), Object(r["f"])(i, {
							key: 1,
							textPrefix: "virksomhed-offentliggoerelser-visalle",
							class: "detaljeriaccordion"
						}, {
							default: Object(r["R"])((function() {
								return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.offentliggoerelser.slice(5, e.offentliggoerelser.length), (function(e) {
									return Object(r["w"])(), Object(r["f"])(c, {
										key: e.offentliggoerelseId,
										offentliggoerelse: e
									}, null, 8, ["offentliggoerelse"])
								})), 128))]
							})),
							_: 1
						})) : Object(r["g"])("", !0)])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			var xs = {
					class: "col-12 col-md-8"
				},
				ws = {
					class: "row"
				},
				Rs = {
					key: 0,
					class: "col-5 bold"
				},
				Hs = {
					class: "col-7 col-md-12"
				},
				Ts = {
					class: "col-12 col-md-2"
				},
				Ss = {
					class: "row"
				},
				Is = {
					key: 0,
					class: "col-5 bold"
				},
				_s = {
					class: "col-7 col-md-12"
				},
				Ps = {
					class: "col-12 col-md-2"
				},
				As = {
					class: "row"
				},
				Ls = {
					key: 0,
					class: "col-5 bold"
				},
				Vs = {
					class: "col-7 col-md-12"
				};

			function Ns(e, t, n, a, o, s) {
				return Object(r["w"])(), Object(r["f"])("div", {
					class: ["row", {
						"mb-5": e.isMobile
					}],
					key: e.offentliggoerelse.offentliggoerelseId
				}, [Object(r["j"])("div", xs, [Object(r["j"])("div", ws, [e.isMobile ? (Object(r["w"])(), Object(r["f"])("div", Rs, Object(r["H"])(e.$t("virksomhed-offentliggoerelser-titel")), 1)) : Object(r["g"])("", !0), Object(r["j"])("div", Hs, Object(r["H"])(e.offentliggoerelse.titel), 1)])]), Object(r["j"])("div", Ts, [Object(r["j"])("div", Ss, [e.isMobile ? (Object(r["w"])(), Object(r["f"])("div", Is, Object(r["H"])(e.$t("virksomhed-offentliggoerelser-offentliggjort")), 1)) : Object(r["g"])("", !0), Object(r["j"])("div", _s, Object(r["H"])(e.offentliggoerelse.offentliggoerelseTidsstempel), 1)])]), Object(r["j"])("div", Ps, [Object(r["j"])("div", As, [e.isMobile ? (Object(r["w"])(), Object(r["f"])("div", Ls, Object(r["H"])(e.$t("virksomhed-offentliggoerelser-handling")), 1)) : Object(r["g"])("", !0), Object(r["j"])("div", Vs, [Object(r["j"])("a", {
					href: e.downloadUtil.downloadOffentliggoerelseDokumenterLink(e.offentliggoerelse.offentliggoerelseId)
				}, Object(r["H"])(e.$t("dokumenter-indholdstype-pdf")), 9, ["href"])])])])], 2)
			}
			var Ds = Object(r["k"])({
				name: "Offentliggoerelse",
				props: {
					offentliggoerelse: {
						type: Object
					}
				},
				data: function() {
					return {
						downloadUtil: nn["a"]
					}
				},
				setup: function() {
					var e = Object(r["d"])((function() {
							return i["b"].virksomhed.aktivVirksomhed
						})),
						t = Object(r["d"])((function() {
							return i["b"].breakpoint.isMobile
						}));
					return {
						virksomhed: e,
						isMobile: t
					}
				}
			});
			const Ms = Ye()(Ds, [
				["render", Ns]
			]);
			var $s = Ms,
				Fs = Object(r["k"])({
					name: "VirksomhedOffentliggoerelser",
					components: {
						Offentliggoerelse: $s,
						Accordion: et["a"],
						Detaljer: Et
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed.virksomhedsMeddelelser.sort((function(e, t) {
									var n = Tn["DateTime"].fromFormat(e.offentliggoerelseTidsstempel, "dd.MM.yyyy").toMillis(),
										r = Tn["DateTime"].fromFormat(t.offentliggoerelseTidsstempel, "dd.MM.yyyy").toMillis();
									return r > n ? 1 : n > r ? -1 : 0
								}))
							})),
							t = Object(r["d"])((function() {
								return i["b"].breakpoint.isMobile
							}));
						return {
							isMobile: t,
							offentliggoerelser: e
						}
					}
				});
			const Ks = Ye()(Fs, [
				["render", Es]
			]);
			var Cs = Ks,
				Gs = {
					class: "virksomhedRegistreringer"
				};

			function Us(e, t, n, a, o, s) {
				var c = Object(r["E"])("Registreringshistorik"),
					i = Object(r["E"])("Detaljer"),
					l = Object(r["E"])("Accordion");
				return e.virksomhed.virksomhedRegistreringer && e.virksomhed.virksomhedRegistreringer.length > 0 ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0,
					"accordion-id": "accordion-virksomhedRegistreringer",
					"text-prefix": "accordion-virksomhedRegistreringer",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])("div", Gs, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.virksomhedRegistreringer.slice(0, 5), (function(e, t) {
							return Object(r["w"])(), Object(r["f"])("div", {
								key: t
							}, [Object(r["j"])(c, {
								registrering: e
							}, null, 8, ["registrering"])])
						})), 128)), e.virksomhed.virksomhedRegistreringer.length > 5 ? (Object(r["w"])(), Object(r["f"])(i, {
							key: 0,
							textPrefix: "virksomhed-registrering-visalle",
							class: {
								"ml-9": !e.isMobile
							}
						}, {
							default: Object(r["R"])((function() {
								return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.virksomhed.virksomhedRegistreringer.slice(5, e.virksomhed.virksomhedRegistreringer.length), (function(e, t) {
									return Object(r["w"])(), Object(r["f"])("div", {
										key: t,
										class: "virksomhedRegistreringer"
									}, [Object(r["j"])(c, {
										class: "ml-0",
										registrering: e
									}, null, 8, ["registrering"])])
								})), 128))]
							})),
							_: 1
						}, 8, ["class"])) : Object(r["g"])("", !0)])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			var Bs = {
					class: "registreringshistorik accordion-content-inner"
				},
				qs = {
					key: 0,
					class: "row"
				},
				Xs = {
					class: "col-12"
				},
				zs = {
					class: "bold"
				},
				Ys = {
					key: 1,
					class: "row"
				},
				Js = {
					class: "col-12"
				},
				Ws = {
					class: "bold"
				},
				Zs = {
					key: 2,
					class: "row"
				},
				Qs = {
					class: "col-12"
				},
				ec = {
					class: "bold"
				},
				tc = {
					key: 3,
					class: "row mt-4"
				},
				nc = {
					class: "col-12"
				},
				rc = {
					class: "d-block bold"
				},
				ac = {
					class: "d-block"
				},
				oc = {
					key: 4,
					class: "row mt-4"
				},
				sc = {
					class: "col-12"
				};

			function cc(e, t, n, a, o, s) {
				return Object(r["w"])(), Object(r["f"])("div", Bs, [e.registrering.offentliggoerelseTidsstempel ? (Object(r["w"])(), Object(r["f"])("div", qs, [Object(r["j"])("div", Xs, [Object(r["j"])("span", zs, Object(r["H"])(e.registrering.offentliggoerelseTidsstempel + " "), 1), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.registrering.titelTekstnogler, (function(t, n) {
					return Object(r["w"])(), Object(r["f"])("span", {
						class: "bold",
						key: n
					}, Object(r["H"])(0 === n ? e.$t(t) : ", " + e.$t(t)), 1)
				})), 128))])])) : Object(r["g"])("", !0), e.registrering.groenlandskRegistreringsnummer ? (Object(r["w"])(), Object(r["f"])("div", Ys, [Object(r["j"])("div", Js, [Object(r["j"])("span", Ws, Object(r["H"])(e.$t("virksomhedRegistreringer-regnummer-label")) + ":", 1), Object(r["i"])(" " + Object(r["H"])(e.registrering.groenlandskRegistreringsnummer), 1)])])) : Object(r["g"])("", !0), e.registrering.cvrNummer && !e.registrering.groenlandskRegistreringsnummer ? (Object(r["w"])(), Object(r["f"])("div", Zs, [Object(r["j"])("div", Qs, [Object(r["j"])("span", ec, Object(r["H"])(e.$t("virksomhedRegistreringer-cvrnummer-label")) + ":", 1), Object(r["i"])(" " + Object(r["H"])(e.registrering.cvrNummer), 1)])])) : Object(r["g"])("", !0), e.registrering.navn ? (Object(r["w"])(), Object(r["f"])("div", tc, [Object(r["j"])("div", nc, [Object(r["j"])("span", rc, Object(r["H"])(e.$t("virksomhedRegistreringer-adresse-og-navn-label")) + ":", 1), Object(r["j"])("span", ac, Object(r["H"])(e.registrering.navn), 1), Object(r["j"])("span", null, Object(r["H"])(e.registrering.adresse), 1)])])) : Object(r["g"])("", !0), e.registrering.registreringsTekst.tekstMedLink ? (Object(r["w"])(), Object(r["f"])("div", oc, [Object(r["j"])("div", sc, [Object(r["j"])("span", {
					class: "registreringshistorik-registrerings-tekst",
					innerHTML: e.registrering.registreringsTekst.tekstMedLink
				}, null, 8, ["innerHTML"])])])) : Object(r["g"])("", !0)])
			}
			var ic = Object(r["k"])({
				name: "Registreringshistorik",
				props: {
					registrering: {
						type: Object
					}
				},
				setup: function() {
					return {}
				}
			});
			n("c84b");
			const lc = Ye()(ic, [
				["render", cc]
			]);
			var dc = lc,
				bc = Object(r["k"])({
					name: "VirksomhedRegistreringshistorik",
					components: {
						Accordion: et["a"],
						Registreringshistorik: dc,
						Detaljer: Et
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							t = Object(r["d"])((function() {
								return i["b"].breakpoint.isMobile
							}));
						return {
							virksomhed: e,
							isMobile: t
						}
					}
				});
			const jc = Ye()(bc, [
				["render", Us]
			]);
			var uc = jc,
				Oc = {
					key: 0,
					class: "ejerforhold-legale-ejere accordion-content-inner"
				},
				kc = {
					class: "row"
				},
				vc = {
					class: "col-12 col-lg-3 bold"
				},
				fc = {
					class: "col-12 col-lg-9"
				},
				mc = {
					class: "mb-3"
				},
				gc = {
					key: 1,
					class: "ejerforhold-reelle-ejere accordion-content-inner"
				},
				pc = {
					class: "row"
				},
				hc = {
					class: "col-12 col-lg-3 bold"
				},
				yc = {
					class: "col-12 col-lg-9"
				},
				Ec = {
					class: "mb-3"
				},
				xc = {
					key: 2,
					class: "ejerforhold-begunstighedgruppe accordion-content-inner"
				},
				wc = {
					key: 0,
					class: "row mt-3"
				},
				Rc = {
					class: "col-12 col-lg-3"
				},
				Hc = {
					class: "bold"
				},
				Tc = {
					class: "col-12 col-lg-9"
				},
				Sc = {
					key: 1,
					class: "row mt-3"
				},
				Ic = {
					class: "col-12 col-lg-3"
				},
				_c = {
					class: "bold"
				},
				Pc = {
					class: "col-12 col-lg-9"
				},
				Ac = {
					key: 3,
					class: "accordion-content-inner transparent-bg p-0"
				},
				Lc = {
					key: 0,
					class: "ejerforhold-ophoerte-legale-ejere accordion-content-inner grey-bg ml-1"
				},
				Vc = {
					class: "row"
				},
				Nc = {
					class: "col-12 col-lg-3 bold"
				},
				Dc = {
					class: "col-12 col-lg-9"
				},
				Mc = {
					key: 1,
					class: "ejerforhold-ophoerte-reelle-ejere accordion-content-inner grey-bg ml-1"
				},
				$c = {
					class: "row"
				},
				Fc = {
					class: "col-12 col-lg-3 bold"
				},
				Kc = {
					class: "col-12 col-lg-9"
				};

			function Cc(e, t, n, a, o, s) {
				var c = Object(r["E"])("Ejer"),
					i = Object(r["E"])("Detaljer"),
					l = Object(r["E"])("Accordion");
				return e.showEjerforhold ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0,
					"accordion-id": "accordion-ejerforhold",
					"text-prefix": "accordion-ejerforhold",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Object(r["R"])((function() {
						return [e.showAktiveLegaleEjere ? (Object(r["w"])(), Object(r["f"])("div", Oc, [Object(r["j"])("div", kc, [Object(r["j"])("div", vc, Object(r["H"])(e.$t("ejerforhold-legale-ejere-label")), 1), Object(r["j"])("div", fc, [Object(r["j"])("div", mc, [e.ejerforhold.ejerregistreringUnderFemProcent ? (Object(r["w"])(), Object(r["f"])(r["a"], {
							key: 0
						}, [Object(r["i"])(Object(r["H"])(e.$t("ejerforhold-ejerregistrering_under_5pct")), 1)], 64)) : Object(r["g"])("", !0)]), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.ejerforhold.aktiveLegaleEjere, (function(e) {
							return Object(r["w"])(), Object(r["f"])(c, {
								key: e.id,
								ejer: e
							}, null, 8, ["ejer"])
						})), 128))])])])) : Object(r["g"])("", !0), e.showAktiveReelleEjere ? (Object(r["w"])(), Object(r["f"])("div", gc, [Object(r["j"])("div", pc, [Object(r["j"])("div", hc, Object(r["H"])(e.$t("ejerforhold-reelle-ejere-label")), 1), Object(r["j"])("div", yc, [Object(r["j"])("div", Ec, [e.ejerforhold.bestyrelseAnsesSomReelleEjere ? (Object(r["w"])(), Object(r["f"])(r["a"], {
							key: 0
						}, [Object(r["i"])(Object(r["H"])(e.$t("ejerforhold-bestyrelse-anses-som-reelle-ejere-tekst")), 1)], 64)) : Object(r["g"])("", !0), e.ejerforhold.virksomhedHarIkkeReelleEjereOgLedelseErIndsat ? (Object(r["w"])(), Object(r["f"])(r["a"], {
							key: 1
						}, [Object(r["i"])(Object(r["H"])(e.$t("ejerforhold-virksomhed-har-ikke-reelle-ejere-tekst")), 1)], 64)) : Object(r["g"])("", !0), e.ejerforhold.virksomhedHarIkkeKunnetIdentificereReelleEjereLedelseErIndsat ? (Object(r["w"])(), Object(r["f"])(r["a"], {
							key: 2
						}, [Object(r["i"])(Object(r["H"])(e.$t("ejerforhold-virksomhed-har-ikke-kunnet-identificere-reelle-ejere-tekst")), 1)], 64)) : Object(r["g"])("", !0)]), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.ejerforhold.aktiveReelleEjere, (function(e) {
							return Object(r["w"])(), Object(r["f"])(c, {
								key: e.id,
								ejer: e
							}, null, 8, ["ejer"])
						})), 128))])])])) : Object(r["g"])("", !0), e.ejerforhold.begunstigetGruppeNavn || e.ejerforhold.begunstigetGruppeRetskrav ? (Object(r["w"])(), Object(r["f"])("div", xc, [e.ejerforhold.begunstigetGruppeNavn ? (Object(r["w"])(), Object(r["f"])("div", wc, [Object(r["j"])("div", Rc, [Object(r["j"])("span", Hc, Object(r["H"])(e.$t("ejerforhold-begunstigetgruppenavn-label")), 1)]), Object(r["j"])("div", Tc, Object(r["H"])(e.ejerforhold.begunstigetGruppeNavn), 1)])) : Object(r["g"])("", !0), e.ejerforhold.begunstigetGruppeRetskrav ? (Object(r["w"])(), Object(r["f"])("div", Sc, [Object(r["j"])("div", Ic, [Object(r["j"])("span", _c, Object(r["H"])(e.$t("ejerforhold-begunstigetgrupperetskrav-label")), 1)]), Object(r["j"])("div", Pc, Object(r["H"])(e.ejerforhold.begunstigetGruppeRetskrav), 1)])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0), e.ejerforhold.ophoerteLegaleEjere.length > 0 || e.ejerforhold.ophoerteReelleEjere.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", Ac, [Object(r["j"])(i, {
							textPrefix: "ejerforhold-ophoerte",
							"accordion-id": "accordion-ejerforhold-ophoerte"
						}, {
							default: Object(r["R"])((function() {
								return [e.ejerforhold.ophoerteLegaleEjere.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", Lc, [Object(r["j"])("div", Vc, [Object(r["j"])("div", Nc, Object(r["H"])(e.$t("ejerforhold-ophoerte-legale-ejere-label")), 1), Object(r["j"])("div", Dc, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.ejerforhold.ophoerteLegaleEjere, (function(e) {
									return Object(r["w"])(), Object(r["f"])(c, {
										key: e.id,
										ejer: e
									}, null, 8, ["ejer"])
								})), 128))])])])) : Object(r["g"])("", !0), e.ejerforhold.ophoerteReelleEjere.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", Mc, [Object(r["j"])("div", $c, [Object(r["j"])("div", Fc, Object(r["H"])(e.$t("ejerforhold-ophoerte-reelle-ejere-label")), 1), Object(r["j"])("div", Kc, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.ejerforhold.ophoerteReelleEjere, (function(e) {
									return Object(r["w"])(), Object(r["f"])(c, {
										key: e.id,
										ejer: e
									}, null, 8, ["ejer"])
								})), 128))])])])) : Object(r["g"])("", !0)]
							})),
							_: 1
						})])) : Object(r["g"])("", !0)]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			var Gc = {
				class: "ejer mb-3"
			};

			function Uc(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link");
				return Object(r["w"])(), Object(r["f"])("div", Gc, [Object(r["j"])(c, {
					link: {
						name: e.RouteName.ENHEDSVISNING,
						params: e.linkParams
					},
					"link-text": e.ejer.senesteNavn
				}, null, 8, ["link", "link-text"]), Object(r["j"])("div", {
					innerHTML: e.adresseUtil.formaterAdresse(e.ejer.adresse)
				}, null, 8, ["innerHTML"]), Object(r["j"])("div", {
					innerHTML: e.ejer.ekstraData
				}, null, 8, ["innerHTML"])])
			}
			var Bc = Object(r["k"])({
				name: "Ejer",
				props: {
					ejer: {
						type: Object,
						required: !0
					}
				},
				components: {
					Link: Ue["a"]
				},
				data: function() {
					return {
						RouteName: Ge["a"],
						adresseUtil: Be["a"]
					}
				},
				setup: function(e) {
					var t = Object(r["d"])((function() {
						var t = {
							enhedType: e.ejer.enhedstype.toLowerCase(),
							enhedId: e.ejer.id
						};
						return e.ejer.personType && (t.personType = e.ejer.personType), t
					}));
					return {
						linkParams: t
					}
				}
			});
			const qc = Ye()(Bc, [
				["render", Uc]
			]);
			var Xc = qc,
				zc = Object(r["k"])({
					name: "VirksomhedEjerforhold",
					components: {
						Detaljer: Et,
						Ejer: Xc,
						Accordion: et["a"]
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							adresseUtil: Be["a"]
						}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed.ejerforhold
							})),
							t = Object(r["d"])((function() {
								return e.value.aktiveLegaleEjere.length > 0 || e.value.aktiveReelleEjere.length > 0 || e.value.ophoerteLegaleEjere.length > 0 || e.value.ophoerteReelleEjere.length > 0 || e.value.bestyrelseAnsesSomReelleEjere || e.value.virksomhedHarIkkeReelleEjereOgLedelseErIndsat || e.value.virksomhedHarIkkeKunnetIdentificereReelleEjereLedelseErIndsat
							})),
							n = Object(r["d"])((function() {
								return e.value.aktiveReelleEjere.length > 0 || e.value.bestyrelseAnsesSomReelleEjere || e.value.virksomhedHarIkkeReelleEjereOgLedelseErIndsat || e.value.virksomhedHarIkkeKunnetIdentificereReelleEjereLedelseErIndsat
							})),
							a = Object(r["d"])((function() {
								return e.value.aktiveLegaleEjere.length > 0 || e.value.ejerregistreringUnderFemProcent
							}));
						return {
							ejerforhold: e,
							showEjerforhold: t,
							showAktiveReelleEjere: n,
							showAktiveLegaleEjere: a
						}
					}
				});
			const Yc = Ye()(zc, [
				["render", Cc]
			]);
			var Jc = Yc;

			function Wc(e, t, n, a, o, s) {
				var c = Object(r["E"])("Tabel"),
					i = Object(r["E"])("Accordion");
				return e.visHistoriskStamdata ? (Object(r["w"])(), Object(r["f"])(i, {
					key: 0,
					"accordion-id": "accordion-historisk-stamdata",
					"text-prefix": "accordion-virksomhed-historisk-stamdata",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "navn"),
							data: e.navn,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "adresse"),
							data: e.adresse,
							columns: e.headerArray,
							"vis-data-som-html": !0
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "virksomhedsform"),
							data: e.virksomhedsform,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "status"),
							data: e.status,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "branchekode"),
							data: e.branchekode,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "bibranche"),
							data: e.bibranche,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "formaal"),
							data: e.formaal,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "seneste_vedtaegtsdato"),
							data: e.senesteVedtaegtsdato,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "registreret_kapital"),
							data: e.registreretKapital,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "tegningsregel"),
							data: e.tegningsregel,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "udenlandsk_adresse"),
							data: e.udenlandskAdresse,
							columns: e.headerArray,
							"vis-data-som-html": !0
						}, null, 8, ["text-prefix", "data", "columns"])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			n("b64b");
			var Zc = n("d4ec"),
				Qc = n("bee2"),
				ei = n("ade3"),
				ti = function() {
					function e() {
						Object(Zc["a"])(this, e), Object(ei["a"])(this, "headerArray", ["gyldigFra", "gyldigTil", "vaerdi"])
					}
					return Object(Qc["a"])(e, [{
						key: "formaterData",
						value: function(e) {
							return e.forEach((function(e) {
								e.gyldigFra = Ce["a"].fromIsoToUiFormat(e.gyldigFra), e.gyldigTil = Ce["a"].fromIsoToUiFormat(e.gyldigTil)
							})), e
						}
					}]), e
				}(),
				ni = new ti,
				ri = Object(r["k"])({
					name: "VirksomhedHistoriskStamdata",
					components: {
						Accordion: et["a"],
						Tabel: Pa
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed.historiskStamdata
							})),
							t = Object(r["d"])((function() {
								return Object.keys(e.value).some((function(t) {
									return e.value[t].length > 0
								}))
							})),
							n = Object(r["d"])((function() {
								return ni.formaterData(e.value.navn)
							})),
							a = Object(r["d"])((function() {
								return ni.formaterData(e.value.adresse)
							})),
							o = Object(r["d"])((function() {
								return ni.formaterData(e.value.virksomhedsform)
							})),
							s = Object(r["d"])((function() {
								return ni.formaterData(e.value.status)
							})),
							c = Object(r["d"])((function() {
								return ni.formaterData(e.value.branchekode)
							})),
							l = Object(r["d"])((function() {
								return ni.formaterData(e.value.bibranche)
							})),
							d = Object(r["d"])((function() {
								return ni.formaterData(e.value.formaal)
							})),
							b = Object(r["d"])((function() {
								return f(e.value.senesteVedtaegtsdato)
							})),
							j = Object(r["d"])((function() {
								return ni.formaterData(e.value.registreretKapital)
							})),
							u = Object(r["d"])((function() {
								return ni.formaterData(e.value.tegningsregel)
							})),
							O = Object(r["d"])((function() {
								return ni.formaterData(e.value.udenlandskAdresse)
							})),
							k = "historisk-stamdata-",
							v = ni.headerArray;

						function f(e) {
							return e = ni.formaterData(e), e.forEach((function(e) {
								e.vaerdi = Ce["a"].fromIsoToUiFormat(e.vaerdi)
							})), e
						}
						return {
							historiskStamdata: e,
							headerArray: v,
							navn: n,
							adresse: a,
							virksomhedsform: o,
							status: s,
							branchekode: c,
							bibranche: l,
							formaal: d,
							senesteVedtaegtsdato: b,
							registreretKapital: j,
							tegningsregel: u,
							udenlandskAdresse: O,
							textPrefix: k,
							visHistoriskStamdata: t
						}
					}
				});
			n("496c");
			const ai = Ye()(ri, [
				["render", Wc]
			]);
			var oi = ai,
				si = n("a406"),
				ci = Object(r["V"])("data-v-36397530");
			Object(r["z"])("data-v-36397530");
			var ii = {
					class: "oplysninger-om-revisionsvirksomhed accordion-content-inner"
				},
				li = {
					key: 0,
					class: "row mb-3"
				},
				di = {
					class: "col-12 col-lg-3 bold"
				},
				bi = {
					class: "col"
				},
				ji = {
					key: 1,
					class: "row mb-3"
				},
				ui = {
					class: "col-12 col-lg-3 bold"
				},
				Oi = {
					class: "col"
				},
				ki = {
					key: 2,
					class: "row mb-3"
				},
				vi = {
					class: "col-12 col-lg-3 bold"
				},
				fi = {
					class: "col"
				},
				mi = {
					key: 3,
					class: "row mb-3"
				},
				gi = {
					class: "col-12 col-lg-3 bold"
				},
				pi = {
					class: "col"
				},
				hi = {
					key: 4,
					class: "row mb-3"
				},
				yi = {
					class: "col-12 col-lg-3 bold"
				},
				Ei = {
					class: "col"
				},
				xi = {
					key: 5,
					class: "row mb-3"
				},
				wi = {
					class: "col-12 col-lg-3 bold"
				},
				Ri = {
					class: "col"
				},
				Hi = {
					key: 6,
					class: "row mb-3"
				},
				Ti = {
					class: "col-12 col-lg-3 bold"
				},
				Si = {
					class: "col"
				};
			Object(r["x"])();
			var Ii = ci((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Kontorsted"),
						i = Object(r["E"])("Detaljer"),
						l = Object(r["E"])("Accordion");
					return e.oplysningerOmRevisionsvirksomhed && e.oplysningerOmRevisionsvirksomhed.virksomhedstype ? (Object(r["w"])(), Object(r["f"])(l, {
						key: 0,
						"accordion-id": "accordion-oplysninger-om-revisionsvirksomhed",
						"text-prefix": "accordion-oplysninger_om_revisionsvirksomhed"
					}, {
						default: ci((function() {
							return [Object(r["j"])("div", ii, [e.oplysningerOmRevisionsvirksomhed.virksomhedstype ? (Object(r["w"])(), Object(r["f"])("div", li, [Object(r["j"])("div", di, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-virksomhedstype-label")), 1), Object(r["j"])("div", bi, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-virksomhedstype-" + e.oplysningerOmRevisionsvirksomhed.virksomhedstype.toLowerCase())), 1)])) : Object(r["g"])("", !0), e.oplysningerOmRevisionsvirksomhed.startdato ? (Object(r["w"])(), Object(r["f"])("div", ji, [Object(r["j"])("div", ui, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-startdato-label")), 1), Object(r["j"])("div", Oi, Object(r["H"])(e.formattedStartdato), 1)])) : Object(r["g"])("", !0), e.kontorsteder && e.kontorsteder.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", ki, [Object(r["j"])("div", vi, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-kontorsteder-label")), 1), Object(r["j"])("div", fi, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.kontorsteder.slice(0, 5), (function(e, t) {
								return Object(r["w"])(), Object(r["f"])(c, {
									kontorsted: e,
									key: t
								}, null, 8, ["kontorsted"])
							})), 128)), e.kontorsteder.length > 5 ? (Object(r["w"])(), Object(r["f"])(i, {
								key: 0,
								"text-prefix": "oplysninger_om_revisionsvirksomhed-kontorsteder-visalle"
							}, {
								default: ci((function() {
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.kontorsteder.slice(5), (function(e, t) {
										return Object(r["w"])(), Object(r["f"])(c, {
											kontorsted: e,
											key: t
										}, null, 8, ["kontorsted"])
									})), 128))]
								})),
								_: 1
							})) : Object(r["g"])("", !0)])])) : Object(r["g"])("", !0), e.oplysningerOmRevisionsvirksomhed.samledeStemmeandel ? (Object(r["w"])(), Object(r["f"])("div", mi, [Object(r["j"])("div", gi, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-stemmeandel-label")), 1), Object(r["j"])("div", pi, Object(r["H"])(e.oplysningerOmRevisionsvirksomhed.samledeStemmeandel) + "%", 1)])) : Object(r["g"])("", !0), e.oplysningerOmRevisionsvirksomhed.kontaktperson ? (Object(r["w"])(), Object(r["f"])("div", hi, [Object(r["j"])("div", yi, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-kontaktperson-label")), 1), Object(r["j"])("div", Ei, Object(r["H"])(e.oplysningerOmRevisionsvirksomhed.kontaktperson), 1)])) : Object(r["g"])("", !0), e.oplysningerOmRevisionsvirksomhed.webadresse ? (Object(r["w"])(), Object(r["f"])("div", xi, [Object(r["j"])("div", wi, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-webadresse-label")), 1), Object(r["j"])("div", Ri, Object(r["H"])(e.oplysningerOmRevisionsvirksomhed.webadresse), 1)])) : Object(r["g"])("", !0), e.oplysningerOmRevisionsvirksomhed.netvaerk ? (Object(r["w"])(), Object(r["f"])("div", Hi, [Object(r["j"])("div", Ti, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-netvaerk-label")), 1), Object(r["j"])("div", Si, Object(r["H"])(e.oplysningerOmRevisionsvirksomhed.netvaerk), 1)])) : Object(r["g"])("", !0)])]
						})),
						_: 1
					})) : Object(r["g"])("", !0)
				})),
				_i = (n("d81d"), n("4de4"), {
					class: "d-block"
				}),
				Pi = {
					class: "d-block"
				},
				Ai = {
					class: "my-5"
				},
				Li = {
					class: "d-block"
				},
				Vi = {
					class: "d-block"
				},
				Ni = {
					class: "d-block"
				},
				Di = {
					class: "d-block"
				},
				Mi = Object(r["j"])("hr", {
					class: "my-4"
				}, null, -1);

			function $i(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link"),
					i = Object(r["E"])("Detaljer");
				return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["j"])(c, {
					class: "d-block",
					"link-text": e.kontorsted.navn,
					link: {
						name: e.RouteName.ENHEDSVISNING,
						params: {
							enhedId: e.kontorsted.pNummer,
							enhedType: e.EnhedType.PRODUKTIONSENHED
						}
					}
				}, null, 8, ["link-text", "link"]), Object(r["j"])("span", _i, Object(r["H"])(e.kontorsted.adresse), 1), Object(r["j"])("span", Pi, Object(r["H"])(e.kontorsted.postnummerOgBy), 1), e.kontorsted.tilknyttedeRevisorer && e.kontorsted.tilknyttedeRevisorer.length > 0 ? (Object(r["w"])(), Object(r["f"])(r["a"], {
					key: 0
				}, [Object(r["j"])("div", Ai, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-revisorer-label")), 1), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.kontorsted.tilknyttedeRevisorer.slice(0, 5), (function(t) {
					return Object(r["w"])(), Object(r["f"])("div", {
						class: "mt-5",
						key: t.enhedsnummer
					}, [Object(r["j"])(c, {
						class: "d-block",
						"link-text": t.navn,
						link: {
							name: e.RouteName.ENHEDSVISNING,
							params: {
								enhedId: t.enhedsnummer,
								enhedType: e.EnhedType.PERSON,
								personType: e.PersonType.LIBERAL_UDOEVER
							}
						}
					}, null, 8, ["link-text", "link"]), Object(r["j"])("span", Li, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-status-" + t.tilknytning.toLowerCase())), 1), Object(r["j"])("span", Vi, Object(r["H"])(t.mneNummer), 1)])
				})), 128)), e.kontorsted.tilknyttedeRevisorer.length > 5 ? (Object(r["w"])(), Object(r["f"])(i, {
					key: 0,
					"text-prefix": "oplysninger_om_revisionsvirksomhed-revisorer-vis-alle"
				}, {
					default: Object(r["R"])((function() {
						return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.kontorsted.tilknyttedeRevisorer.slice(5, e.kontorsted.tilknyttedeRevisorer.length), (function(t) {
							return Object(r["w"])(), Object(r["f"])("div", {
								class: "mt-5",
								key: t.enhedsnummer
							}, [Object(r["j"])(c, {
								class: "d-block",
								"link-text": t.navn,
								link: {
									name: e.RouteName.ENHEDSVISNING,
									params: {
										enhedId: t.enhedsnummer,
										enhedType: e.EnhedType.PERSON,
										personType: e.PersonType.LIBERAL_UDOEVER
									}
								}
							}, null, 8, ["link-text", "link"]), Object(r["j"])("span", Ni, Object(r["H"])(e.$t("oplysninger_om_revisionsvirksomhed-status-" + t.tilknytning.toLowerCase())), 1), Object(r["j"])("span", Di, Object(r["H"])(t.mneNummer), 1)])
						})), 128))]
					})),
					_: 1
				})) : Object(r["g"])("", !0)], 64)) : Object(r["g"])("", !0), Mi], 64)
			}
			var Fi = n("2363"),
				Ki = Object(r["k"])({
					name: "Kontorsted",
					props: {
						kontorsted: {
							type: Object,
							required: !0
						}
					},
					components: {
						Link: Ue["a"],
						Detaljer: Et
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							EnhedType: Aa["a"],
							PersonType: Fi["a"],
							adresseUtil: Be["a"]
						}
					}
				});
			const Ci = Ye()(Ki, [
				["render", $i]
			]);
			var Gi = Ci,
				Ui = Object(r["k"])({
					name: "OplysningerOmRevisionsvirksomhed",
					components: {
						Detaljer: Et,
						Kontorsted: Gi,
						Accordion: et["a"]
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							EnhedType: Aa["a"],
							adresseUtil: Be["a"]
						}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							t = Object(r["d"])((function() {
								return e.value.oplysningerOmRevisionsvirksomhed
							})),
							n = Object(r["d"])((function() {
								return e.value ? e.value.produktionsenheder.aktiveProduktionsenheder : []
							})),
							a = Object(r["d"])((function() {
								return n.value ? n.value.filter((function(e) {
									return null != e.revisionsvirksomhed
								})).map((function(e) {
									return e.revisionsvirksomhed
								})) : []
							})),
							o = Object(r["d"])((function() {
								return Ce["a"].fromIsoToUiFormat(t.value.startdato)
							}));
						return {
							oplysningerOmRevisionsvirksomhed: t,
							formattedStartdato: o,
							produktionsenheder: n,
							kontorsteder: a
						}
					}
				});
			n("75d4");
			const Bi = Ye()(Ui, [
				["render", Ii],
				["__scopeId", "data-v-36397530"]
			]);
			var qi = Bi,
				Xi = Object(r["V"])("data-v-4fc5b2c2");
			Object(r["z"])("data-v-4fc5b2c2");
			var zi = {
					class: "modal-footer"
				},
				Yi = {
					type: "button",
					class: "button button-secondary",
					"data-modal-close": ""
				};
			Object(r["x"])();
			var Ji = Xi((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Modal");
					return Object(r["w"])(), Object(r["f"])(c, {
						"modal-id": e.modalId,
						"text-prefix": e.modalId,
						class: "foelg-login-modal",
						separator: !0,
						"show-footer": !1
					}, {
						default: Xi((function() {
							return [Object(r["j"])("div", {
								innerHTML: e.getText
							}, null, 8, ["innerHTML"]), Object(r["j"])("div", zi, [Object(r["j"])("button", {
								type: "button",
								class: "button button-primary",
								onClick: t[1] || (t[1] = function() {
									return e.goToLogin && e.goToLogin.apply(e, arguments)
								}),
								"data-modal-close": ""
							}, Object(r["H"])(e.$t("modal-foelg-virksomhed-godkend")), 1), Object(r["j"])("button", Yi, Object(r["H"])(e.$t("modal-foelg-virksomhed-annuller")), 1)])]
						})),
						_: 1
					}, 8, ["modal-id", "text-prefix"])
				})),
				Wi = (n("5319"), n("1133")),
				Zi = n("c52c"),
				Qi = Object(r["k"])({
					name: "FoelgVirksomhedsLoginModal",
					components: {
						Modal: hn["a"]
					},
					setup: function() {
						var e = "modal-foelg-virksomhed",
							t = xn["b"].decodeHtml(xn["b"].getTextFromKey("modal-foelg-virksomhed-indhold")),
							n = Object(cs["c"])();

						function r() {
							return a.apply(this, arguments)
						}

						function a() {
							return a = Object(c["a"])(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return e.next = 2, Zi["a"].replace({
												path: n.path,
												query: n.query,
												hash: i["b"].accordions.hashString.length > 0 ? i["b"].accordions.hashString + "&foelg" : "#foelg"
											});
										case 2:
											Wi["a"].tjekBrugerLoginOgRedirect();
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							}))), a.apply(this, arguments)
						}
						return {
							modalId: e,
							getText: t,
							goToLogin: r
						}
					}
				});
			n("3e95");
			const el = Ye()(Qi, [
				["render", Ji],
				["__scopeId", "data-v-4fc5b2c2"]
			]);
			var tl = el,
				nl = Object(r["V"])("data-v-120e1810");
			Object(r["z"])("data-v-120e1810");
			var rl = {
					class: "modal-footer"
				},
				al = {
					type: "button",
					class: "button button-secondary",
					"data-modal-close": ""
				};
			Object(r["x"])();
			var ol = nl((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("InputFelt"),
						i = Object(r["E"])("Checkbox"),
						l = Object(r["E"])("Link"),
						d = Object(r["E"])("Modal");
					return Object(r["w"])(), Object(r["f"])(d, {
						"modal-id": e.modalId,
						"text-prefix": e.modalId,
						class: "opret-abonnement-modal",
						separator: !0,
						"show-footer": !1
					}, {
						default: nl((function() {
							return [Object(r["j"])("div", {
								innerHTML: e.getNotificationText
							}, null, 8, ["innerHTML"]), Object(r["j"])(c, {
								"text-prefix": "modal-opret-abonnement-mail",
								onChange: e.validateEmail,
								"vis-fejlmeddelelse": e.visEmailFejlmeddelelse,
								"fejlmeddelelse-textkey": e.emailFejlmeddelelseTextkey,
								preselectedValue: e.emailAdresse,
								required: !0
							}, null, 8, ["onChange", "vis-fejlmeddelelse", "fejlmeddelelse-textkey", "preselectedValue"]), Object(r["j"])(i, {
								options: e.samtykkeOption,
								class: "opret-abonnement-modal-checkbox",
								erLabelHtml: !0,
								"vis-legend": !1,
								textPrefix: e.modalId + "-checkbox",
								onChange: e.setSamtykke,
								required: !0
							}, null, 8, ["options", "textPrefix", "onChange"]), Object(r["j"])(l, {
								class: "opret-abonnement-modal-notifikations-link d-block mb-3",
								link: "https://erhvervsstyrelsen.dk/nyheder-og-notifikationer-fra-erhvervsstyrelsendk",
								"link-textkey": "modal-opret-abonnement-link-label"
							}), Object(r["j"])("span", {
								innerHTML: e.getUpdateAbonnementText
							}, null, 8, ["innerHTML"]), Object(r["j"])(l, {
								class: "opret-abonnement-modal-cvrlink",
								link: {
									name: e.RouteName.ABONNEMENTER
								},
								"link-text": e.$t("cvr-paa-virk"),
								"data-modal-close": ""
							}, null, 8, ["link", "link-text"]), Object(r["j"])("div", rl, [Object(r["j"])("button", {
								type: "button",
								class: "button button-primary opretButton",
								disabled: 0 === e.samtykke.length || e.visEmailFejlmeddelelse || !e.emailAdresse,
								onClick: t[1] || (t[1] = function() {
									return e.opretAbonnement && e.opretAbonnement.apply(e, arguments)
								}),
								"data-modal-close": ""
							}, Object(r["H"])(e.$t("modal-foelg-virksomhed-godkend")), 9, ["disabled"]), Object(r["j"])("button", al, Object(r["H"])(e.$t("modal-foelg-virksomhed-annuller")), 1)])]
						})),
						_: 1
					}, 8, ["modal-id", "text-prefix"])
				})),
				sl = n("c023"),
				cl = n("7737"),
				il = n("e784"),
				ll = Object(r["k"])({
					name: "OpretAbonnement",
					components: {
						Modal: hn["a"],
						InputFelt: sl["a"],
						Checkbox: cl["a"],
						Link: Ue["a"]
					},
					data: function() {
						return {
							RouteName: Ge["a"]
						}
					},
					setup: function() {
						var e = "modal-opret-abonnement",
							t = xn["b"].decodeHtml(xn["b"].getTextFromKey("modal-opret-abonnement-indhold-notifikation")),
							n = Object(r["B"])([{
								value: !0,
								label: xn["b"].decodeHtml(xn["b"].getTextFromKey("modal-opret-abonnement-indhold-samtykke"))
							}]),
							a = xn["b"].decodeHtml(xn["b"].getTextFromKey("modal-opret-abonnement-indhold-opdater-abonnement")),
							o = Object(r["B"])(!1),
							s = "modal-opret-abonnement-mail-fejlmeddelelse",
							l = Object(r["B"])(""),
							d = Object(r["B"])([]);

						function b(e) {
							o.value = !e || !il["a"].validerEmail(e), o.value || (l.value = e)
						}

						function j() {
							return u.apply(this, arguments)
						}

						function u() {
							return u = Object(c["a"])(regeneratorRuntime.mark((function e() {
								var t;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return t = {
												enhedsnummer: i["b"].virksomhed.aktivVirksomhed.stamdata.enhedsnummer,
												emailadresse: l.value
											}, e.next = 3, i["b"].abonnement.foelg(t);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							}))), u.apply(this, arguments)
						}

						function O(e) {
							d.value = e
						}
						return Object(r["u"])((function() {
							i["b"].auth.aktivBruger.email && (l.value = i["b"].auth.aktivBruger.email)
						})), {
							modalId: e,
							getNotificationText: t,
							samtykkeOption: n,
							getUpdateAbonnementText: a,
							opretAbonnement: j,
							visEmailFejlmeddelelse: o,
							validateEmail: b,
							emailFejlmeddelelseTextkey: s,
							emailAdresse: l,
							setSamtykke: O,
							samtykke: d
						}
					}
				});
			n("cba4");
			const dl = Ye()(ll, [
				["render", ol],
				["__scopeId", "data-v-120e1810"]
			]);
			var bl = dl,
				jl = n("c215"),
				ul = {
					class: "foreningsrepraesentanter accordion-content-inner"
				},
				Ol = {
					class: "col-12 col-lg-4"
				},
				kl = {
					class: "col"
				};

			function vl(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link"),
					i = Object(r["E"])("Accordion");
				return e.foreningsrepraesentanter && e.foreningsrepraesentanter.length > 0 ? (Object(r["w"])(), Object(r["f"])(i, {
					key: 0,
					"accordion-id": "accordion-foreningsrepraesentanter",
					"text-prefix": "accordion-foreningsrepraesentanter"
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])("div", ul, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.foreningsrepraesentanter, (function(t, n) {
							return Object(r["w"])(), Object(r["f"])("div", {
								key: n,
								class: "row mb-5"
							}, [Object(r["j"])("div", Ol, [Object(r["j"])("strong", null, Object(r["H"])(e.$t("foreningsrepraesentanter-foreningsrepraesentant-label")), 1)]), Object(r["j"])("div", kl, [Object(r["j"])(c, {
								"link-text": t.navn,
								link: {
									name: e.RouteName.ENHEDSVISNING,
									params: {
										enhedId: t.enhedsNummer,
										enhedType: e.EnhedType.PERSON,
										personType: "deltager"
									}
								}
							}, null, 8, ["link-text", "link"]), Object(r["j"])("div", {
								innerHTML: e.adresseUtil.formaterAdresse(t.adresse)
							}, null, 8, ["innerHTML"]), Object(r["i"])(" " + Object(r["H"])(e.$t("foreningsrepraesentanter-dato-label")) + " " + Object(r["H"])(t.indtraadtDato), 1)])])
						})), 128))])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			var fl = Object(r["k"])({
				name: "Foreningsrepraesentanter",
				components: {
					Link: Ue["a"],
					Accordion: et["a"]
				},
				data: function() {
					return {
						RouteName: Ge["a"],
						EnhedType: Aa["a"],
						adresseUtil: Be["a"]
					}
				},
				setup: function() {
					var e = Object(r["d"])((function() {
							return i["b"].virksomhed.aktivVirksomhed
						})),
						t = Object(r["d"])((function() {
							return e.value.foreningsrepraesentanter
						}));
					return {
						virksomhed: e,
						foreningsrepraesentanter: t
					}
				}
			});
			const ml = Ye()(fl, [
				["render", vl]
			]);
			var gl = ml,
				pl = {
					class: "h4"
				},
				hl = {
					class: "d-block"
				},
				yl = Object(r["j"])("hr", {
					class: "mt-5"
				}, null, -1),
				El = {
					class: "h4"
				},
				xl = {
					class: "d-block"
				};

			function wl(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link"),
					i = Object(r["E"])("Modal");
				return Object(r["w"])(), Object(r["f"])(i, {
					"modal-id": e.modalId,
					"text-prefix": e.modalId,
					class: "download-pdf-modal",
					separator: !0,
					"show-footer": !1
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])("h3", pl, Object(r["H"])(e.$t(e.modalId + "-gem_alt-overskrift")), 1), Object(r["j"])("span", hl, Object(r["H"])(e.$t(e.modalId + "-gem_alt-text")), 1), Object(r["j"])(c, {
							id: "fisk",
							class: "button button-primary mt-3",
							link: e.downloadAltUrl,
							"link-text": e.$t(e.modalId + "-gem_alt-button"),
							"vis-ikon": !1
						}, null, 8, ["link", "link-text"]), yl, Object(r["j"])("h3", El, Object(r["H"])(e.$t(e.modalId + "-gem_aabne_bjaelker-overskrift")), 1), Object(r["j"])("span", xl, Object(r["H"])(e.$t(e.modalId + "-gem_aabne_bjaelker-text")), 1), Object(r["j"])(c, {
							class: "button button-primary mt-3",
							link: e.downloadAabneBjaelkerUrl,
							"link-text": e.$t(e.modalId + "-gem_aabne_bjaelker-button"),
							"vis-ikon": !1
						}, null, 8, ["link", "link-text"])]
					})),
					_: 1
				}, 8, ["modal-id", "text-prefix"])
			}
			var Rl = Object(r["k"])({
				name: "DownloadPdfModal",
				components: {
					Modal: hn["a"],
					Link: Ue["a"]
				},
				props: {
					downloadAltUrl: {
						type: String,
						required: !0
					},
					downloadAabneBjaelkerUrl: {
						type: String,
						required: !0
					}
				},
				setup: function(e) {
					var t = "modal-download-pdf";
					return {
						modalId: t
					}
				}
			});
			const Hl = Ye()(Rl, [
				["render", wl]
			]);
			var Tl = Hl,
				Sl = Object(r["k"])({
					name: "Virksomhed",
					components: {
						Link: Ue["a"],
						DownloadPdfModal: Tl,
						Foreningsrepraesentanter: gl,
						OplysningerOmRevisionsvirksomhed: qi,
						VirksomhedEjerforhold: Jc,
						VirksomhedOffentliggoerelser: Cs,
						VirksomhedPersonkreds: zo,
						CardLink: Ho["a"],
						Accordion: et["a"],
						Card: Fn["a"],
						VirksomhedStamdata: We,
						ManuelSigneringModal: tr,
						UdvidedeVirksomhedsoplysninger: pa,
						VirksomhedProduktionsenheder: vs,
						VirksomhedRegnskaber: $n,
						AntalAnsatte: Na,
						VirksomhedHovedselskab: Ro,
						VirksomhedRegistreringshistorik: uc,
						VirksomhedHistoriskStamdata: oi,
						FoelgVirksomhedsLoginModal: tl,
						OpretAbonnementModal: bl,
						AdministrerAbonnementModal: jl["a"]
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							vxm: i["b"]
						}
					},
					setup: function() {
						var e = Object(cs["c"])(),
							t = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							n = {
								textPrefix: "virksomhed-dine_handlinger",
								separator: !0,
								harOverskrift: !0
							},
							a = "modal-manuel-signering",
							o = "modal-download-pdf",
							s = e.params.enhedId,
							l = e.params.enhedType,
							d = "/enhed" + "/".concat(l) + "/".concat(s) + "/oekonomioverblik",
							b = Object(r["d"])((function() {
								return Wi["a"].erBrugerLoggetInd() ? 0 !== i["b"].auth.aktivBruger.abonnementinfo.antalAbonnementer ? "modal-administrer-abonnement" : "modal-opret-abonnement" : "modal-foelg-virksomhed"
							})),
							j = Object(r["d"])((function() {
								return i["b"].abonnement.foelgerAktivVirksomhed
							})),
							u = Object(r["d"])((function() {
								return i["b"].auth.aktivBruger.erLoggetIndMedEid
							})),
							O = e.hash && Wi["a"].erBrugerLoggetInd() && decodeURIComponent(e.hash).includes("foelg"),
							k = Object(r["d"])((function() {
								return Wi["a"].erBrugerLoggetInd()
							})),
							v = Object(r["d"])((function() {
								var e;
								return !(null !== (e = t.value.stamdata) && void 0 !== e && e.ophoersdato)
							})),
							f = e.hash && Wi["a"].erBrugerLoggetInd() && decodeURIComponent(e.hash).includes("signering"),
							m = Object(r["d"])((function() {
								return Wi["a"].erBrugerLoggetInd() && i["b"].virksomhed.aktivVirksomhed.stamdata.cvrnummer === i["b"].auth.aktivBruger.cvrNummer
							})),
							g = Object(r["d"])((function() {
								return Wi["a"].erLoggetIndSomErstMedarbejderEllerSagsbehandlerRolle()
							}));

						function p() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
							return si["a"].hentVirksomhedsvisningSomPdfLink(s, e, t)
						}

						function h() {
							return y.apply(this, arguments)
						}

						function y() {
							return y = Object(c["a"])(regeneratorRuntime.mark((function e() {
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (!i["b"].virksomhed.aktivVirksomhed.stamdata.enhedsnummer) {
												e.next = 3;
												break
											}
											return e.next = 3, i["b"].abonnement.stopFoelg(i["b"].virksomhed.aktivVirksomhed.stamdata.enhedsnummer);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							}))), y.apply(this, arguments)
						}
						return Object(r["u"])((function() {
							if (void 0 === t.value.stamdata) Zi["a"].push({
								name: Ge["a"].VIRKSOMHED_FINDES_IKKE_PAGE
							});
							else if (f) {
								var e = new gt["Modal"](document.getElementById(a));
								e.show()
							} else if (O) {
								var n = new gt["Modal"](document.getElementById(b.value));
								n.show()
							}
						})), Object(r["s"])((function() {
							i["b"].abonnement.removeFoelgerAktivVirksomhed()
						})), {
							virksomhed: t,
							card: n,
							modalManuelSigneringId: a,
							modalDownloadPdfId: o,
							enhedId: s,
							enhedType: l,
							oekonomioverblikLink: d,
							showFoelgModel: b,
							brugerFoelgerVirksomhed: j,
							erLoggetIndMedEid: u,
							erBrugerLoggetInd: k,
							kanRedigereVirksomhed: m,
							kanTilgaaOekonomioverblik: g,
							downloadVirksomhedsvisningSomPdf: p,
							sletAbonnement: h,
							route: e,
							erVirksomhedAktiv: v
						}
					}
				});
			n("dfc8");
			const Il = Ye()(Sl, [
				["render", V]
			]);
			var _l = Il,
				Pl = Object(r["V"])("data-v-4a59f6e2");
			Object(r["z"])("data-v-4a59f6e2");
			var Al = {
					class: "person"
				},
				Ll = {
					key: 0,
					class: "h2 mt-0 mb-6"
				},
				Vl = {
					class: "row"
				},
				Nl = {
					class: "col-sm-12 col-lg-8"
				},
				Dl = {
					class: "col-sm-12 col-lg-4 mt-6 mt-lg-0"
				},
				Ml = {
					class: "my-3"
				},
				$l = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#download"
				})], -1),
				Fl = {
					class: "mt-3"
				},
				Kl = {
					class: "row mt-9"
				},
				Cl = {
					class: "col-sm-12 col-lg-8"
				};
			Object(r["x"])();
			var Gl = Pl((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("PersonStamdata"),
						i = Object(r["E"])("Card"),
						l = Object(r["E"])("PersonRelationer"),
						d = Object(r["E"])("SimplePersonRelationer"),
						b = Object(r["E"])("PersonLiberaleErhverv"),
						j = Object(r["E"])("HistoriskeOffentliggoerelser"),
						u = Object(r["E"])("DownloadPdfModal");
					return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["j"])("div", Al, [e.person.stamdata ? (Object(r["w"])(), Object(r["f"])("h1", Ll, Object(r["H"])(e.person.stamdata.navn), 1)) : Object(r["g"])("", !0), Object(r["j"])("div", Vl, [Object(r["j"])("div", Nl, [Object(r["j"])(c)]), Object(r["j"])("div", Dl, [Object(r["j"])(i, {
						card: e.card
					}, {
						default: Pl((function() {
							return [Object(r["j"])("div", Ml, [Object(r["j"])("button", {
								type: "button",
								class: "button button-unstyled card-btn mb-4",
								"data-module": "modal",
								"data-target": e.modalDownloadPdfId
							}, [$l, Object(r["j"])("span", Fl, " " + Object(r["H"])(e.$t("person-gem_som_pdf-label")), 1)], 8, ["data-target"])])]
						})),
						_: 1
					}, 8, ["card"])])]), Object(r["j"])("div", Kl, [Object(r["j"])("div", Cl, [Object(r["j"])(l), Object(r["j"])(d), Object(r["j"])(b), Object(r["j"])(j)])])]), Object(r["j"])(u, {
						ref: "downloadPdfRef",
						downloadAltUrl: e.hentPersonvisningSomPdfUrl(!1),
						downloadAabneBjaelkerUrl: e.hentPersonvisningSomPdfUrl(!0)
					}, null, 8, ["downloadAltUrl", "downloadAabneBjaelkerUrl"])], 64)
				})),
				Ul = Object(r["V"])("data-v-0401cb0b");
			Object(r["z"])("data-v-0401cb0b");
			var Bl = {
					key: 0,
					class: "person-stamdata"
				},
				ql = {
					key: 3,
					class: "row person-stamdata-link-til-flere"
				},
				Xl = {
					class: "col-12"
				};
			Object(r["x"])();
			var zl = Ul((function(e, t, n, a, o, s) {
					var c, i, l, d, b, j = Object(r["E"])("StamdataFelt"),
						u = Object(r["E"])("Link");
					return e.person.stamdata ? (Object(r["w"])(), Object(r["f"])("div", Bl, [e.person.stamdata.udenlandskAdresse ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])(j, {
						key: 0,
						feltnavn: "adresse",
						tekstVaerdi: e.person.stamdata.adresse
					}, {
						default: Ul((function() {
							return [Object(r["j"])("span", {
								innerHTML: e.formattedAdresse
							}, null, 8, ["innerHTML"])]
						})),
						_: 1
					}, 8, ["tekstVaerdi"])), Object(r["j"])(j, {
						feltnavn: "postnummerby",
						tekstVaerdi: e.person.stamdata.postnummerOgBy
					}, null, 8, ["tekstVaerdi"]), Object(r["j"])(j, {
						feltnavn: "tilknytning",
						visVaerdi: (null === (c = e.person.stamdata.tilknytning) || void 0 === c ? void 0 : c.length) > 0 || (null === (i = e.person.personRelationer) || void 0 === i || null === (l = i.simpleRelationer) || void 0 === l ? void 0 : l.length) > 0
					}, {
						default: Ul((function() {
							var t, n, a;
							return [(null === (t = e.person.stamdata.tilknytning) || void 0 === t ? void 0 : t.length) > 0 ? (Object(r["w"])(!0), Object(r["f"])(r["a"], {
								key: 0
							}, Object(r["C"])(e.unikkeTilknytninger, (function(t, n) {
								return Object(r["w"])(), Object(r["f"])("span", {
									key: n,
									class: "d-block"
								}, Object(r["H"])(e.$t(t)), 1)
							})), 128)) : (null === (n = e.person.personRelationer) || void 0 === n || null === (a = n.simpleRelationer) || void 0 === a ? void 0 : a.length) > 0 ? (Object(r["w"])(), Object(r["f"])(r["a"], {
								key: 1
							}, [Object(r["i"])(Object(r["H"])(e.$t("stamdata-for-mange-tilknytninger")), 1)], 64)) : Object(r["g"])("", !0)]
						})),
						_: 1
					}, 8, ["visVaerdi"]), e.person.stamdata.udenlandskAdresse ? (Object(r["w"])(), Object(r["f"])(j, {
						key: 1,
						feltnavn: "udenlandsk_adresse",
						tekstVaerdi: e.person.stamdata.adresse
					}, {
						default: Ul((function() {
							return [Object(r["j"])("span", {
								innerHTML: e.formattedAdresse
							}, null, 8, ["innerHTML"])]
						})),
						_: 1
					}, 8, ["tekstVaerdi"])) : Object(r["g"])("", !0), Object(r["j"])(j, {
						feltnavn: "registreret_i_hvidvaskregistret",
						visVaerdi: e.person.stamdata.registreretIHvidvask
					}, {
						default: Ul((function() {
							return [Object(r["i"])(Object(r["H"])(e.$t("stamdata-ja-label")), 1)]
						})),
						_: 1
					}, 8, ["visVaerdi"]), Object(r["j"])(j, {
						feltnavn: "har_Aktive_HvidvaskAktiviteter",
						visVaerdi: (null === (d = e.person.stamdata.aktiveHvidvaskAktiviteter) || void 0 === d ? void 0 : d.length) > 0
					}, {
						default: Ul((function() {
							return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.aktiveHvidvaskAktiviteter, (function(t, n) {
								return Object(r["w"])(), Object(r["f"])("span", {
									key: n,
									class: "d-block"
								}, Object(r["H"])(e.$t("hvidvask-aktivitet-" + t)), 1)
							})), 128))]
						})),
						_: 1
					}, 8, ["visVaerdi"]), Object(r["j"])(j, {
						feltnavn: "franchise",
						visVaerdi: (null === (b = e.person.stamdata.franchise) || void 0 === b ? void 0 : b.length) > 0
					}, {
						default: Ul((function() {
							return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.person.stamdata.franchise, (function(t, n) {
								return Object(r["w"])(), Object(r["f"])(r["a"], {
									key: n
								}, [Object(r["i"])(Object(r["H"])(e.$t(t)), 1)], 64)
							})), 128))]
						})),
						_: 1
					}, 8, ["visVaerdi"]), Object(r["j"])(j, {
						feltnavn: "adresse_beskyttet",
						visVaerdi: e.person.stamdata.adresseHemmelig,
						visKontekstnaerHjaelp: !0,
						textPrefix: "adresse_beskyttet"
					}, {
						default: Ul((function() {
							return [Object(r["i"])(Object(r["H"])(e.$t("stamdata-ja-label")), 1)]
						})),
						_: 1
					}, 8, ["visVaerdi"]), e.person.stamdata.adresseHemmelig ? (Object(r["w"])(), Object(r["f"])(j, {
						key: 2,
						feltnavn: "adresse_land",
						visVaerdi: e.person.stamdata.land
					}, {
						default: Ul((function() {
							return [Object(r["i"])(Object(r["H"])(e.person.stamdata.land), 1)]
						})),
						_: 1
					}, 8, ["visVaerdi"])) : Object(r["g"])("", !0), Object(r["j"])(j, {
						feltnavn: "adresse_opdatering_ophort",
						visVaerdi: e.person.stamdata.adresseOpdateringOphoert,
						visKontekstnaerHjaelp: !0,
						textPrefix: "adresse_opdatering_ophort"
					}, {
						default: Ul((function() {
							return [Object(r["i"])(Object(r["H"])(e.$t("stamdata-ja-label")), 1)]
						})),
						_: 1
					}, 8, ["visVaerdi"]), e.showAdresseLink ? (Object(r["w"])(), Object(r["f"])("div", ql, [Object(r["j"])("div", Xl, [Object(r["j"])(u, {
						link: {
							name: e.RouteName.SOEGERESULTATER,
							query: {
								fritekst: encodeURIComponent(e.adresseTilSoegning),
								sideIndex: 0
							}
						},
						"open-in-new-tab": !0,
						"link-textkey": "stamdata-se_alle_enheder_paa_adressen-link"
					}, null, 8, ["link"])])])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0)
				})),
				Yl = n("2909"),
				Jl = (n("6062"), Object(r["k"])({
					name: "PersonStamdata",
					components: {
						Link: Ue["a"],
						StamdataFelt: ss["a"]
					},
					data: function() {
						return {
							RouteName: Ge["a"]
						}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].person.aktivPerson
							})),
							t = Object(r["d"])((function() {
								return Be["a"].formaterAdresse(e.value.stamdata.adresse)
							})),
							n = Object(r["d"])((function() {
								return e.value.stamdata.tilknytning ? Object(Yl["a"])(new Set(e.value.stamdata.tilknytning)) : []
							})),
							a = Object(r["d"])((function() {
								return e.value.stamdata.aktiveHvidvaskAktiviteter ? e.value.stamdata.aktiveHvidvaskAktiviteter : []
							})),
							o = Object(r["d"])((function() {
								return Be["a"].genererAdresseTilSoegLink(e.value.stamdata)
							})),
							s = Object(r["d"])((function() {
								return !e.value.stamdata.adresseHemmelig && !e.value.stamdata.adresseOpdateringOphoert && "" !== Be["a"].genererAdresseTilSoegLink(e.value.stamdata, !1)
							}));
						return {
							person: e,
							formattedAdresse: t,
							showAdresseLink: s,
							unikkeTilknytninger: n,
							aktiveHvidvaskAktiviteter: a,
							adresseTilSoegning: o
						}
					}
				}));
			n("53fc");
			const Wl = Ye()(Jl, [
				["render", zl],
				["__scopeId", "data-v-0401cb0b"]
			]);
			var Zl = Wl,
				Ql = {
					key: 0
				};

			function ed(e, t, n, a, o, s) {
				var c = Object(r["E"])("SlotDataFelt"),
					i = Object(r["E"])("TekstDataFelt"),
					l = Object(r["E"])("PersonLiberaleErhvervKontorsted"),
					d = Object(r["E"])("Detaljer"),
					b = Object(r["E"])("PersonLiberaleErhvervEfteruddannelse"),
					j = Object(r["E"])("PersonLiberaleErhvervSikkerhedsstillelser"),
					u = Object(r["E"])("Accordion");
				return e.liberaleErhverv ? (Object(r["w"])(), Object(r["f"])(u, {
					key: 0,
					"accordion-id": "accordion-person-liberale-erhverv",
					"text-prefix": "accordion-person-liberale_erhverv"
				}, {
					default: Object(r["R"])((function() {
						return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.liberaleErhverv, (function(t, n) {
							return Object(r["w"])(), Object(r["f"])("div", {
								key: n,
								class: "liberale-erhverv accordion-content-inner"
							}, [Object(r["j"])(c, {
								textPrefix: "".concat(e.textPrefix, "faglig_titel"),
								visVaerdi: !!t.godkendelsestype || !!t.udoevertype
							}, {
								default: Object(r["R"])((function() {
									return [Object(r["i"])(Object(r["H"])(e.formaterFagligTitel(t)), 1)]
								})),
								_: 2
							}, 1032, ["textPrefix", "visVaerdi"]), Object(r["j"])(c, {
								textPrefix: "".concat(e.textPrefix, "certificeringer"),
								visVaerdi: e.visListe(t.certificeringer)
							}, {
								default: Object(r["R"])((function() {
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(t.certificeringer, (function(t, n) {
										return Object(r["w"])(), Object(r["f"])("div", {
											key: n
										}, Object(r["H"])(e.$t("".concat(e.textPrefix, "certificeringer-").concat(t))), 1)
									})), 128))]
								})),
								_: 2
							}, 1032, ["textPrefix", "visVaerdi"]), Object(r["j"])(i, {
								textPrefix: "".concat(e.textPrefix, "erhvervsstatus"),
								tekstVaerdi: t.erhvervsstatus
							}, null, 8, ["textPrefix", "tekstVaerdi"]), Object(r["j"])(i, {
								textPrefix: "".concat(e.textPrefix, "godkendelsesdato"),
								tekstVaerdi: e.formaterDato(t.godkendelsesdato)
							}, null, 8, ["textPrefix", "tekstVaerdi"]), Object(r["j"])(i, {
								textPrefix: "".concat(e.textPrefix, "deponeringsdato"),
								tekstVaerdi: e.formaterDato(t.deponeringsdato)
							}, null, 8, ["textPrefix", "tekstVaerdi"]), Object(r["j"])(i, {
								textPrefix: "".concat(e.textPrefix, "bortfaldsdato"),
								tekstVaerdi: e.formaterDato(t.bortfaldsdato)
							}, null, 8, ["textPrefix", "tekstVaerdi"]), Object(r["j"])(i, {
								textPrefix: "".concat(e.textPrefix, "genoptagelsesdato"),
								tekstVaerdi: e.formaterDato(t.genoptagelsesdato)
							}, null, 8, ["textPrefix", "tekstVaerdi"]), Object(r["j"])(i, {
								textPrefix: "".concat(e.textPrefix, "mnenummer"),
								tekstVaerdi: t.mneNummer
							}, null, 8, ["textPrefix", "tekstVaerdi"]), Object(r["j"])(c, {
								textPrefix: "".concat(e.textPrefix, "kontorsteder"),
								visVaerdi: e.visListe(t.kontorsteder)
							}, {
								default: Object(r["R"])((function() {
									var n;
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(t.kontorsteder.slice(0, 5), (function(e, t) {
										return Object(r["w"])(), Object(r["f"])(l, {
											key: t,
											kontorsted: e
										}, null, 8, ["kontorsted"])
									})), 128)), (null === (n = t.kontorsteder) || void 0 === n ? void 0 : n.length) > 5 ? (Object(r["w"])(), Object(r["f"])(d, {
										key: 0,
										textPrefix: "".concat(e.textPrefix, "kontorsteder-visalle")
									}, {
										default: Object(r["R"])((function() {
											return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(t.kontorsteder.slice(5), (function(e, t) {
												return Object(r["w"])(), Object(r["f"])(l, {
													key: t,
													kontorsted: e
												}, null, 8, ["kontorsted"])
											})), 128))]
										})),
										_: 2
									}, 1032, ["textPrefix"])) : Object(r["g"])("", !0)]
								})),
								_: 2
							}, 1032, ["textPrefix", "visVaerdi"]), Object(r["j"])(c, {
								textPrefix: "".concat(e.textPrefix, "udenlandske_myndigheder"),
								visVaerdi: e.visListe(t.udenlandskeMyndigheder)
							}, {
								default: Object(r["R"])((function() {
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(t.udenlandskeMyndigheder, (function(e, t) {
										return Object(r["w"])(), Object(r["f"])("div", {
											class: "mb-4",
											key: t
										}, [e.navn ? (Object(r["w"])(), Object(r["f"])("div", Ql, Object(r["H"])(e.navn), 1)) : Object(r["g"])("", !0), e.adresse ? (Object(r["w"])(), Object(r["f"])("div", {
											key: 1,
											innerHTML: e.adresse
										}, null, 8, ["innerHTML"])) : Object(r["g"])("", !0)])
									})), 128))]
								})),
								_: 2
							}, 1032, ["textPrefix", "visVaerdi"]), Object(r["j"])(c, {
								textPrefix: "".concat(e.textPrefix, "efteruddannelse"),
								visVaerdi: e.visListe(t.generelleEfteruddannelser) || e.visListe(t.saerligeEfteruddannelser)
							}, {
								default: Object(r["R"])((function() {
									return [Object(r["j"])(b, {
										efteruddannelser: t.generelleEfteruddannelser,
										"text-prefix": "".concat(e.textPrefix, "generelle_efteruddannelser")
									}, null, 8, ["efteruddannelser", "text-prefix"]), Object(r["j"])(b, {
										efteruddannelser: t.saerligeEfteruddannelser,
										"text-prefix": "".concat(e.textPrefix, "saerlige_efteruddannelser")
									}, null, 8, ["efteruddannelser", "text-prefix"])]
								})),
								_: 2
							}, 1032, ["textPrefix", "visVaerdi"]), Object(r["j"])(c, {
								textPrefix: "".concat(e.textPrefix, "sikkerhedsstillelser"),
								visVaerdi: e.visListe(t.sikkerhedsstillelser)
							}, {
								default: Object(r["R"])((function() {
									return [Object(r["j"])(j, {
										sikkerhedsstillelser: t.sikkerhedsstillelser,
										textPrefix: "".concat(e.textPrefix, "sikkerhedsstillelser")
									}, null, 8, ["sikkerhedsstillelser", "textPrefix"])]
								})),
								_: 2
							}, 1032, ["textPrefix", "visVaerdi"])])
						})), 128))]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			n("a15b");
			var td = Object(r["V"])("data-v-25d012c2");
			Object(r["z"])("data-v-25d012c2");
			var nd = {
					key: 0,
					class: "row datafelt"
				},
				rd = {
					class: "col-12 col-lg-3"
				},
				ad = {
					class: "bold"
				},
				od = {
					class: "col"
				};
			Object(r["x"])();
			var sd = td((function(e, t, n, a, o, s) {
					return e.visTekstVaerdi ? (Object(r["w"])(), Object(r["f"])("div", nd, [Object(r["j"])("div", rd, [Object(r["j"])("span", ad, Object(r["H"])(e.$t("".concat(e.textPrefix, "-label"))), 1)]), Object(r["j"])("div", od, Object(r["H"])(e.tekstVaerdi), 1)])) : Object(r["g"])("", !0)
				})),
				cd = Object(r["k"])({
					name: "TekstDataFelt",
					props: {
						tekstVaerdi: {
							type: String
						},
						textPrefix: {
							type: String,
							required: !0
						}
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
							var t;
							return !!e.tekstVaerdi && 0 !== (null === (t = e.tekstVaerdi) || void 0 === t ? void 0 : t.length)
						}));
						return {
							visTekstVaerdi: t
						}
					}
				});
			n("666a");
			const id = Ye()(cd, [
				["render", sd],
				["__scopeId", "data-v-25d012c2"]
			]);
			var ld = id,
				dd = Object(r["V"])("data-v-1da528b3");
			Object(r["z"])("data-v-1da528b3");
			var bd = {
					key: 0,
					class: "row datafelt"
				},
				jd = {
					class: "col-12 col-lg-3"
				},
				ud = {
					class: "bold"
				},
				Od = {
					class: "col"
				};
			Object(r["x"])();
			var kd = dd((function(e, t, n, a, o, s) {
					return e.visVaerdi ? (Object(r["w"])(), Object(r["f"])("div", bd, [Object(r["j"])("div", jd, [Object(r["j"])("span", ud, Object(r["H"])(e.$t("".concat(e.textPrefix, "-label"))), 1)]), Object(r["j"])("div", Od, [Object(r["D"])(e.$slots, "default", {}, void 0, !0)])])) : Object(r["g"])("", !0)
				})),
				vd = Object(r["k"])({
					name: "SlotDataFelt",
					props: {
						visVaerdi: {
							type: Boolean,
							required: !0
						},
						textPrefix: {
							type: String,
							required: !0
						}
					}
				});
			n("015c");
			const fd = Ye()(vd, [
				["render", kd],
				["__scopeId", "data-v-1da528b3"]
			]);
			var md = fd,
				gd = {
					key: 0,
					class: "efteruddannelse"
				},
				pd = {
					class: "bold mt-0"
				},
				hd = {
					class: "mt-0 efteruddannelse-periode"
				},
				yd = {
					class: "col-12"
				},
				Ed = {
					class: "row"
				},
				xd = {
					class: "col-12 col-md-8"
				},
				wd = {
					class: "row"
				},
				Rd = {
					class: "col-12"
				},
				Hd = {
					class: "row"
				},
				Td = {
					class: "col-12 col-md-8"
				};

			function Sd(e, t, n, a, o, s) {
				return e.visEfteruddannelser ? (Object(r["w"])(), Object(r["f"])("div", gd, [Object(r["j"])("p", pd, Object(r["H"])(e.$t("".concat(e.textPrefix, "-label"))), 1), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.efteruddannelser, (function(t, n) {
					return Object(r["w"])(), Object(r["f"])("div", {
						class: "mb-4",
						key: n
					}, [Object(r["j"])("span", hd, Object(r["H"])(e.$t("".concat(e.textPrefix, "-periode-label"))) + Object(r["H"])(e.dateUtil.fromIsoToUiFormat(t.periodeStartdato)) + " - " + Object(r["H"])(e.dateUtil.fromIsoToUiFormat(t.periodeSlutdato)), 1), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(t.timerPerType, (function(t, n) {
						return Object(r["w"])(), Object(r["f"])("div", {
							key: n,
							class: "row efteruddannelse-time-wrapper"
						}, [Object(r["j"])("div", yd, [Object(r["j"])("div", Ed, [Object(r["j"])("div", xd, Object(r["H"])(e.$t("".concat(e.textPrefix, "-").concat(n, "-label"))), 1), Object(r["j"])("div", {
							class: ["col-12 col-md-4", {
								"align-text-right": !e.isMobile
							}]
						}, Object(r["H"])("".concat(t, " ").concat(e.$t(e.textPrefix + "-timer-label"))), 3)])])])
					})), 128)), Object(r["j"])("div", wd, [Object(r["j"])("div", Rd, [Object(r["j"])("div", Hd, [Object(r["j"])("div", Td, Object(r["H"])(e.$t("".concat(e.textPrefix, "-total-label"))), 1), Object(r["j"])("div", {
						class: ["col-12 col-md-4", {
							"align-text-right": !e.isMobile
						}]
					}, Object(r["H"])("".concat(t.totalAntalTimer, " ").concat(e.$t(e.textPrefix + "-timer-label"))), 3)])])])])
				})), 128))])) : Object(r["g"])("", !0)
			}
			var Id = Object(r["k"])({
				name: "PersonLiberaleErhvervEfteruddannelse",
				props: {
					efteruddannelser: {
						type: Array,
						required: !0
					},
					textPrefix: {
						type: String,
						required: !0
					}
				},
				setup: function(e) {
					var t = Object(r["d"])((function() {
							var t;
							return (null === (t = e.efteruddannelser) || void 0 === t ? void 0 : t.length) > 0
						})),
						n = Object(r["d"])((function() {
							return i["b"].breakpoint.isMobile
						}));
					return {
						visEfteruddannelser: t,
						dateUtil: Ce["a"],
						isMobile: n
					}
				}
			});
			n("7b7a");
			const _d = Ye()(Id, [
				["render", Sd]
			]);
			var Pd = _d,
				Ad = {
					class: "mb-4"
				};

			function Ld(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link");
				return Object(r["w"])(), Object(r["f"])("div", Ad, [Object(r["j"])(c, {
					"link-text": e.kontorsted.navn,
					link: {
						name: e.RouteName.ENHEDSVISNING,
						params: {
							enhedType: e.EnhedType.PRODUKTIONSENHED,
							enhedId: e.kontorsted.pnummer
						}
					}
				}, null, 8, ["link-text", "link"]), Object(r["j"])("div", {
					innerHTML: e.kontorsted.adresse
				}, null, 8, ["innerHTML"])])
			}
			var Vd = Object(r["k"])({
				name: "PersonLiberaleErhvervKontorsted",
				components: {
					Link: Ue["a"]
				},
				data: function() {
					return {
						RouteName: Ge["a"],
						EnhedType: Aa["a"]
					}
				},
				props: {
					kontorsted: {
						type: Object,
						required: !0
					}
				}
			});
			const Nd = Ye()(Vd, [
				["render", Ld]
			]);
			var Dd = Nd,
				Md = {
					key: 0
				},
				$d = Object(r["j"])("br", null, null, -1),
				Fd = {
					key: 1
				},
				Kd = Object(r["j"])("br", null, null, -1),
				Cd = {
					key: 2
				},
				Gd = Object(r["j"])("br", null, null, -1),
				Ud = {
					key: 3
				},
				Bd = Object(r["j"])("br", null, null, -1);

			function qd(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link");
				return Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.sikkerhedsstillelser, (function(t, n) {
					return Object(r["w"])(), Object(r["f"])("div", {
						class: "mb-4",
						key: n
					}, [t.forsikringsselskabNavn ? (Object(r["w"])(), Object(r["f"])("div", Md, [Object(r["i"])(Object(r["H"])(e.$t("".concat(e.textPrefix, "-forsikringsselskab_navn"))), 1), $d, Object(r["i"])(" " + Object(r["H"])(t.forsikringsselskabNavn), 1)])) : Object(r["g"])("", !0), t.forsikringsselskabCvrnummer ? (Object(r["w"])(), Object(r["f"])("div", Fd, [Object(r["i"])(Object(r["H"])(e.$t("".concat(e.textPrefix, "-forsikringsselskab_cvrnummer"))), 1), Kd, Object(r["j"])(c, {
						"link-text": t.forsikringsselskabCvrnummer,
						link: {
							name: e.RouteName.ENHEDSVISNING,
							params: {
								enhedType: e.EnhedType.VIRKSOMHED,
								enhedId: t.forsikringsselskabCvrnummer
							}
						}
					}, null, 8, ["link-text", "link"])])) : Object(r["g"])("", !0), t.forsikringstype ? (Object(r["w"])(), Object(r["f"])("div", Cd, [Object(r["i"])(Object(r["H"])(e.$t("".concat(e.textPrefix, "-forsikringstype"))), 1), Gd, Object(r["i"])(" " + Object(r["H"])(t.forsikringstype), 1)])) : Object(r["g"])("", !0), t.forsikringsforholdStartdato ? (Object(r["w"])(), Object(r["f"])("div", Ud, [Object(r["i"])(Object(r["H"])(e.$t("".concat(e.textPrefix, "-forsikringsforhold_startdato"))), 1), Bd, Object(r["i"])(" " + Object(r["H"])(e.dateUtil.fromIsoToUiFormat(t.forsikringsforholdStartdato)), 1)])) : Object(r["g"])("", !0)])
				})), 128)
			}
			var Xd = Object(r["k"])({
				name: "PersonLiberaleErhvervSikkerhedsstillelser",
				components: {
					Link: Ue["a"]
				},
				data: function() {
					return {
						RouteName: Ge["a"],
						EnhedType: Aa["a"],
						dateUtil: Ce["a"]
					}
				},
				props: {
					sikkerhedsstillelser: {
						type: Array,
						required: !0
					},
					textPrefix: {
						type: String,
						required: !0
					}
				}
			});
			const zd = Ye()(Xd, [
				["render", qd]
			]);
			var Yd = zd,
				Jd = Object(r["k"])({
					name: "PersonLiberaleErhverv",
					components: {
						PersonLiberaleErhvervSikkerhedsstillelser: Yd,
						PersonLiberaleErhvervKontorsted: Dd,
						PersonLiberaleErhvervEfteruddannelse: Pd,
						Accordion: et["a"],
						Detaljer: Et,
						TekstDataFelt: ld,
						SlotDataFelt: md
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].person.aktivPerson.liberaleErhverv
							})),
							t = "person-liberale_erhverv-";

						function n(e) {
							return (null === e || void 0 === e ? void 0 : e.length) > 0
						}

						function a(e) {
							return Ce["a"].fromIsoToUiFormat(e)
						}

						function o(e) {
							var t = [];
							return e.godkendelsestype && t.push(xn["b"].getTextFromKey(e.godkendelsestype)), e.udoevertype && t.push(xn["b"].getTextFromKey(e.udoevertype)), t.length > 0 ? t.join(" ") : ""
						}
						return {
							liberaleErhverv: e,
							textPrefix: t,
							visListe: n,
							formaterDato: a,
							formaterFagligTitel: o
						}
					}
				});
			const Wd = Ye()(Jd, [
				["render", ed]
			]);
			var Zd = Wd,
				Qd = n("415c");

			function eb(e, t, n, a, o, s) {
				var c = Object(r["E"])("SimpelPersonRelation"),
					i = Object(r["E"])("Detaljer"),
					l = Object(r["E"])("Accordion");
				return e.initialRelationer.length > 0 ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0,
					"accordion-id": "accordion-simple-relationer",
					"vis-kontekstnaer-hjaelp": !0,
					"text-prefix": e.TEXT_PREFIX
				}, {
					default: Object(r["R"])((function() {
						return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.initialRelationer, (function(t, n) {
							return Object(r["w"])(), Object(r["f"])("div", {
								key: n,
								class: "accordion-content-inner"
							}, [Object(r["j"])(c, {
								relation: t,
								"text-prefix": e.TEXT_PREFIX
							}, null, 8, ["relation", "text-prefix"])])
						})), 128)), Object(r["j"])(i, {
							"text-prefix": "".concat(e.TEXT_PREFIX, "-detaljer"),
							"vis-kontekstnaer-hjaelp": !1,
							onClick: t[1] || (t[1] = function(t) {
								return e.detajlerErAaben = !e.detajlerErAaben
							}),
							class: {
								"ml-9": !e.isMobile
							},
							id: "detaljer-alle-relationer"
						}, {
							default: Object(r["R"])((function() {
								return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.resterendeSimpleRelationer, (function(t, n) {
									return Object(r["w"])(), Object(r["f"])("div", {
										key: n,
										class: "accordion-content-inner ml-0",
										ref: "scrollComponent"
									}, [Object(r["j"])(c, {
										relation: t,
										"text-prefix": e.TEXT_PREFIX
									}, null, 8, ["relation", "text-prefix"])], 512)
								})), 128))]
							})),
							_: 1
						}, 8, ["text-prefix", "class"])]
					})),
					_: 1
				}, 8, ["text-prefix"])) : Object(r["g"])("", !0)
			}
			var tb = {
					class: "row"
				},
				nb = {
					class: "col-lg-12 mb-3"
				},
				rb = {
					key: 0
				},
				ab = {
					key: 0,
					class: "row"
				},
				ob = {
					class: "col-lg-3 col-12 bold"
				},
				sb = {
					class: "col"
				},
				cb = {
					key: 1,
					class: "row"
				},
				ib = {
					class: "col-lg-3 col-12 bold"
				},
				lb = {
					class: "col"
				};

			function db(e, t, n, a, o, s) {
				var c = Object(r["E"])("Link");
				return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["j"])("div", tb, [Object(r["j"])("div", nb, [Object(r["j"])("strong", null, Object(r["H"])(e.relation.senesteNavn), 1), e.relation.navnPostFix ? (Object(r["w"])(), Object(r["f"])("strong", rb, Object(r["H"])(e.relation.navnPostFix), 1)) : Object(r["g"])("", !0)])]), e.relation.cvr && !e.relation.harPseudoCvr ? (Object(r["w"])(), Object(r["f"])("div", ab, [Object(r["j"])("div", ob, Object(r["H"])(e.$t("".concat(e.textPrefix, "-cvr"))), 1), Object(r["j"])("div", sb, [Object(r["j"])(c, {
					"link-text": e.relation.cvr,
					link: {
						name: e.RouteName.ENHEDSVISNING,
						params: {
							enhedType: e.EnhedType.VIRKSOMHED,
							enhedId: e.relation.enhedsnummer
						}
					},
					"vis-ikon": !1
				}, null, 8, ["link-text", "link"])])])) : (Object(r["w"])(), Object(r["f"])("div", cb, [Object(r["j"])("div", ib, Object(r["H"])(e.$t("".concat(e.textPrefix, "-regnummer"))), 1), Object(r["j"])("div", lb, [Object(r["j"])(c, {
					"link-text": e.relation.reg,
					link: {
						name: e.RouteName.ENHEDSVISNING,
						params: {
							enhedType: e.EnhedType.VIRKSOMHED,
							enhedId: e.relation.enhedsnummer
						}
					},
					"vis-ikon": !1
				}, null, 8, ["link-text", "link"])])]))], 64)
			}
			var bb = Object(r["k"])({
				name: "SimpelPersonRelation",
				props: {
					relation: {
						type: Object,
						required: !0
					},
					textPrefix: {
						type: String,
						required: !0
					}
				},
				components: {
					Link: Ue["a"]
				},
				setup: function() {
					return {
						EnhedType: Aa["a"],
						RouteName: Ge["a"]
					}
				}
			});
			const jb = Ye()(bb, [
				["render", db]
			]);
			var ub = jb,
				Ob = "simple-person-relationer",
				kb = 20,
				vb = 10,
				fb = 10 + kb,
				mb = Object(r["k"])({
					name: "SimplePersonRelationer",
					components: {
						Accordion: et["a"],
						SimpelPersonRelation: ub,
						Detaljer: Et
					},
					setup: function() {
						var e, t, n = Object(r["B"])(null),
							a = Object(r["B"])(!1),
							o = Object(r["d"])((function() {
								return i["b"].breakpoint.isMobile
							})),
							s = null !== (e = null === (t = i["b"].person.aktivPerson.personRelationer) || void 0 === t ? void 0 : t.simpleRelationer) && void 0 !== e ? e : [],
							c = s.slice(0, 10),
							l = Object(r["B"])(s.slice(vb, fb));

						function d() {
							var e;
							if (vb < s.length && fb < s.length)(e = l.value).push.apply(e, Object(Yl["a"])(s.slice(fb, fb + kb))), fb += kb, vb += kb;
							else if (vb < s.length && fb > s.length) {
								var t;
								(t = l.value).push.apply(t, Object(Yl["a"])(s.slice(vb))), vb += kb, fb += kb
							}
						}
						Object(r["u"])((function() {
							window.addEventListener("scroll", b)
						})), Object(r["v"])((function() {
							window.removeEventListener("scroll", b)
						}));
						var b = function() {
							var e, t = n.value;
							t && (null === (e = t.getBoundingClientRect()) || void 0 === e ? void 0 : e.bottom) < window.innerHeight && a.value && d()
						};
						return {
							resterendeSimpleRelationer: l,
							TEXT_PREFIX: Ob,
							scrollComponent: n,
							initialRelationer: c,
							detajlerErAaben: a,
							isMobile: o
						}
					}
				});
			const gb = Ye()(mb, [
				["render", eb]
			]);
			var pb = gb,
				hb = Object(r["V"])("data-v-89bebeaa");
			Object(r["z"])("data-v-89bebeaa");
			var yb = {
					class: "row"
				},
				Eb = {
					class: "col-12"
				},
				xb = {
					class: "bold"
				},
				wb = {
					class: "row"
				},
				Rb = {
					class: "col-12 tekst-med-link"
				},
				Hb = {
					class: "row"
				},
				Tb = {
					class: "col-12"
				},
				Sb = {
					class: "bold"
				},
				Ib = {
					class: "row"
				},
				_b = {
					class: "col-12 tekst-med-link"
				};
			Object(r["x"])();
			var Pb = hb((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Detaljer"),
						i = Object(r["E"])("Accordion");
					return e.offentliggoerelser && e.offentliggoerelser.length > 0 ? (Object(r["w"])(), Object(r["f"])(i, {
						key: 0,
						"accordion-id": "accordion-historiske-offentliggoerelser",
						"text-prefix": "accordion-historiske_offentliggoerelser"
					}, {
						default: hb((function() {
							return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.offentliggoerelser.slice(0, 5), (function(e, t) {
								return Object(r["w"])(), Object(r["f"])("div", {
									class: "historisk-offentliggoerelse accordion-content-inner",
									key: t
								}, [Object(r["j"])("div", yb, [Object(r["j"])("div", Eb, [Object(r["j"])("span", xb, Object(r["H"])(e.titel), 1)])]), Object(r["j"])("div", wb, [Object(r["j"])("div", Rb, [Object(r["j"])("span", {
									innerHTML: e.registreringsTekst.tekstMedLink
								}, null, 8, ["innerHTML"])])])])
							})), 128)), e.offentliggoerelser.length > 5 ? (Object(r["w"])(), Object(r["f"])(c, {
								key: 0,
								"vis-kontekstnaer-hjaelp": !1,
								"text-prefix": "historiske-offentliggoerelser",
								class: {
									"ml-9": !e.isMobile
								}
							}, {
								default: hb((function() {
									return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.offentliggoerelser.slice(5), (function(e, t) {
										return Object(r["w"])(), Object(r["f"])("div", {
											class: "historisk-offentliggoerelse accordion-content-inner ml-0",
											key: t
										}, [Object(r["j"])("div", Hb, [Object(r["j"])("div", Tb, [Object(r["j"])("span", Sb, Object(r["H"])(e.titel), 1)])]), Object(r["j"])("div", Ib, [Object(r["j"])("div", _b, [Object(r["j"])("span", {
											innerHTML: e.registreringsTekst.tekstMedLink
										}, null, 8, ["innerHTML"])])])])
									})), 128))]
								})),
								_: 1
							}, 8, ["class"])) : Object(r["g"])("", !0)]
						})),
						_: 1
					})) : Object(r["g"])("", !0)
				})),
				Ab = Object(r["k"])({
					name: "HistoriskeOffentliggoerelser",
					components: {
						Detaljer: Et,
						Accordion: et["a"]
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return i["b"].breakpoint.isMobile
							})),
							t = Object(r["d"])((function() {
								return i["b"].person.aktivPerson
							})),
							n = Object(r["d"])((function() {
								return t.value.liberalUdoeverRegistreringer ? t.value.liberalUdoeverRegistreringer : []
							}));
						return {
							isMobile: e,
							person: t,
							offentliggoerelser: n
						}
					}
				});
			n("0d63");
			const Lb = Ye()(Ab, [
				["render", Pb],
				["__scopeId", "data-v-89bebeaa"]
			]);
			var Vb = Lb;

			function Nb(e, t, n, a, o, s) {
				var c = Object(r["E"])("PersonRelation"),
					i = Object(r["E"])("Detaljer"),
					l = Object(r["E"])("Accordion");
				return Object(r["w"])(), Object(r["f"])(r["a"], null, [e.aktiveRelationer.length > 0 ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0,
					"accordion-id": "accordion-aktive-relationer",
					"vis-kontekstnaer-hjaelp": !0,
					"text-prefix": e.AKTIVE_RELATIONER_TEXT_PREFIX
				}, {
					default: Object(r["R"])((function() {
						return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.aktiveRelationer.slice(0, 10), (function(t, n) {
							return Object(r["w"])(), Object(r["f"])("div", {
								key: n,
								class: "accordion-content-inner"
							}, [Object(r["j"])(c, {
								relation: t,
								"text-prefix": e.AKTIVE_RELATIONER_TEXT_PREFIX
							}, null, 8, ["relation", "text-prefix"])])
						})), 128)), e.aktiveRelationer.length > 10 ? (Object(r["w"])(), Object(r["f"])(i, {
							key: 0,
							"vis-kontekstnaer-hjaelp": !1,
							"text-prefix": e.AKTIVE_RELATIONER_TEXT_PREFIX
						}, {
							default: Object(r["R"])((function() {
								return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.aktiveRelationer.slice(10), (function(t, n) {
									return Object(r["w"])(), Object(r["f"])("div", {
										key: n,
										class: "accordion-content-inner"
									}, [Object(r["j"])(c, {
										relation: t,
										"text-prefix": e.AKTIVE_RELATIONER_TEXT_PREFIX
									}, null, 8, ["relation", "text-prefix"])])
								})), 128))]
							})),
							_: 1
						}, 8, ["text-prefix"])) : Object(r["g"])("", !0)]
					})),
					_: 1
				}, 8, ["text-prefix"])) : Object(r["g"])("", !0), e.ophoerteRelationer.length > 0 ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 1,
					"accordion-id": "accordion-ophoerte-relationer",
					"vis-kontekstnaer-hjaelp": !0,
					"text-prefix": e.OPHOERTE_RELATIONER_TEXT_PREFIX
				}, {
					default: Object(r["R"])((function() {
						return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.ophoerteRelationer.slice(0, 10), (function(t, n) {
							return Object(r["w"])(), Object(r["f"])("div", {
								key: n,
								class: "accordion-content-inner"
							}, [Object(r["j"])(c, {
								relation: t,
								"text-prefix": e.OPHOERTE_RELATIONER_TEXT_PREFIX
							}, null, 8, ["relation", "text-prefix"])])
						})), 128)), e.ophoerteRelationer.length > 10 ? (Object(r["w"])(), Object(r["f"])(i, {
							key: 0,
							"vis-kontekstnaer-hjaelp": !1,
							"text-prefix": e.OPHOERTE_RELATIONER_TEXT_PREFIX
						}, {
							default: Object(r["R"])((function() {
								return [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.ophoerteRelationer.slice(10), (function(t, n) {
									return Object(r["w"])(), Object(r["f"])("div", {
										key: n,
										class: "accordion-content-inner"
									}, [Object(r["j"])(c, {
										relation: t,
										"text-prefix": e.OPHOERTE_RELATIONER_TEXT_PREFIX
									}, null, 8, ["relation", "text-prefix"])])
								})), 128))]
							})),
							_: 1
						}, 8, ["text-prefix"])) : Object(r["g"])("", !0)]
					})),
					_: 1
				}, 8, ["text-prefix"])) : Object(r["g"])("", !0)], 64)
			}
			var Db = Object(r["V"])("data-v-8861d2ae");
			Object(r["z"])("data-v-8861d2ae");
			var Mb = {
					class: "row"
				},
				$b = {
					class: "col-12"
				},
				Fb = {
					class: "bold mt-0 mb-2 d-lg-inline-flex"
				},
				Kb = {
					class: "offset-1"
				},
				Cb = {
					class: "offset-1"
				},
				Gb = {
					class: "col-6 col-lg-3"
				},
				Ub = {
					key: 0,
					class: "bold d-inline-block"
				},
				Bb = {
					class: "col-6 col-lg-9"
				},
				qb = {
					class: "offset-1 d-inline-block"
				};
			Object(r["x"])();
			var Xb = Db((function(e, t, n, a, o, s) {
					var c = Object(r["E"])("Link"),
						i = Object(r["E"])("StamdataFelt");
					return Object(r["w"])(), Object(r["f"])("div", Mb, [Object(r["j"])("div", $b, [Object(r["j"])("span", Fb, [Object(r["i"])(Object(r["H"])(e.relation.senesteNavn) + " ", 1), e.relation.navnPostFix ? (Object(r["w"])(), Object(r["f"])(r["a"], {
						key: 0
					}, [Object(r["i"])(Object(r["H"])(e.relation.navnPostFix), 1)], 64)) : Object(r["g"])("", !0)]), e.relation.cvrnummer && !e.relation.harPseudoCvr ? (Object(r["w"])(), Object(r["f"])(i, {
						key: 0,
						feltnavn: "cvr",
						visVaerdi: !0,
						class: "mb-2"
					}, {
						default: Db((function() {
							var t;
							return [Object(r["j"])(c, {
								"link-text": e.relation.cvrnummer,
								"vis-ikon": !1,
								link: {
									name: e.RouteName.ENHEDSVISNING,
									params: {
										enhedType: e.EnhedType.VIRKSOMHED,
										enhedId: null !== (t = e.relation.enhedsNummer) && void 0 !== t ? t : e.relation.cvrnummer
									}
								},
								class: "offset-1"
							}, null, 8, ["link-text", "link"])]
						})),
						_: 1
					})) : (Object(r["w"])(), Object(r["f"])(i, {
						key: 1,
						feltnavn: "regnummer",
						visVaerdi: !0,
						class: "mb-2"
					}, {
						default: Db((function() {
							return [Object(r["j"])(c, {
								"link-text": e.relation.regnummer,
								"vis-ikon": !1,
								link: {
									name: e.RouteName.ENHEDSVISNING,
									params: {
										enhedType: e.EnhedType.VIRKSOMHED,
										enhedId: e.relation.enhedsNummer
									}
								},
								class: "offset-1"
							}, null, 8, ["link-text", "link"])]
						})),
						_: 1
					})), e.relation.virksomhedsstatus ? (Object(r["w"])(), Object(r["f"])(i, {
						key: 2,
						feltnavn: "virksomhedsstatus",
						"vis-vaerdi": !0,
						class: "mb-2"
					}, {
						default: Db((function() {
							return [Object(r["j"])("span", Kb, Object(r["H"])(e.upperCaseFirstLetter(e.relation.virksomhedsstatus.toLocaleLowerCase())), 1)]
						})),
						_: 1
					})) : Object(r["g"])("", !0), e.relation.tekstnogle ? (Object(r["w"])(), Object(r["f"])(i, {
						key: 3,
						feltnavn: "tilknyttet-som",
						"vis-vaerdi": !0,
						class: "mb-2"
					}, {
						default: Db((function() {
							return [Object(r["j"])("span", Cb, Object(r["H"])(e.$t(e.relation.tekstnogle)), 1)]
						})),
						_: 1
					})) : Object(r["g"])("", !0), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.relation.ekstraDataList, (function(t, n) {
						return Object(r["w"])(), Object(r["f"])("div", {
							class: "row mb-2 align-bottom",
							key: n
						}, [Object(r["j"])("div", Gb, [!t.tekstnogle || 0 !== n && t.tekstnogle === e.relation.ekstraDataList[n - 1].tekstnogle ? Object(r["g"])("", !0) : (Object(r["w"])(), Object(r["f"])("span", Ub, Object(r["H"])(e.$t(t.tekstnogle)), 1))]), Object(r["j"])("div", Bb, [Object(r["j"])("span", qb, Object(r["H"])(e.$t(t.vaerdiTekstnogle, [t.vaerdi])), 1)])])
					})), 128))])])
				})),
				zb = n("7db4"),
				Yb = Object(r["k"])({
					name: "PersonRelation",
					props: {
						relation: {
							type: Object,
							required: !0
						},
						textPrefix: {
							type: String,
							required: !0
						}
					},
					components: {
						StamdataFelt: ss["a"],
						Link: Ue["a"]
					},
					setup: function() {
						return {
							EnhedType: Aa["a"],
							RouteName: Ge["a"],
							upperCaseFirstLetter: zb["d"]
						}
					}
				});
			n("1d09");
			const Jb = Ye()(Yb, [
				["render", Xb],
				["__scopeId", "data-v-8861d2ae"]
			]);
			var Wb = Jb,
				Zb = "aktive-relationer",
				Qb = "ophoerte-relationer",
				ej = Object(r["k"])({
					name: "PersonRelationer",
					components: {
						Detaljer: Et,
						PersonRelation: Wb,
						Accordion: et["a"]
					},
					setup: function() {
						var e, t, n, r, a = null !== (e = null === (t = i["b"].person.aktivPerson.personRelationer) || void 0 === t ? void 0 : t.aktiveRelationer) && void 0 !== e ? e : [],
							o = null !== (n = null === (r = i["b"].person.aktivPerson.personRelationer) || void 0 === r ? void 0 : r.ophoerteRelationer) && void 0 !== n ? n : [];
						return {
							aktiveRelationer: a,
							ophoerteRelationer: o,
							AKTIVE_RELATIONER_TEXT_PREFIX: Zb,
							OPHOERTE_RELATIONER_TEXT_PREFIX: Qb
						}
					}
				});
			const tj = Ye()(ej, [
				["render", Nb]
			]);
			var nj = tj,
				rj = Object(r["k"])({
					name: "Person",
					components: {
						Card: Fn["a"],
						DownloadPdfModal: Tl,
						PersonStamdata: Zl,
						PersonLiberaleErhverv: Zd,
						PersonRelationer: nj,
						SimplePersonRelationer: pb,
						HistoriskeOffentliggoerelser: Vb
					},
					setup: function() {
						var e = Object(cs["c"])(),
							t = {
								textPrefix: "person-dine_handlinger",
								separator: !0,
								harOverskrift: !0
							},
							n = Object(r["d"])((function() {
								return i["b"].person.aktivPerson
							})),
							a = Object(r["d"])((function() {
								return e.params.enhedId
							})),
							o = Object(r["d"])((function() {
								return e.params.personType
							})),
							s = "modal-download-pdf";

						function c() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							return Qd["a"].hentPersonvisningSomPdfLink(a.value, o.value, e)
						}
						return {
							modalDownloadPdfId: s,
							person: n,
							card: t,
							hentPersonvisningSomPdfUrl: c
						}
					}
				});
			n("2faf");
			const aj = Ye()(rj, [
				["render", Gl],
				["__scopeId", "data-v-4a59f6e2"]
			]);
			var oj = aj,
				sj = Object(r["V"])("data-v-694642b6");
			Object(r["z"])("data-v-694642b6");
			var cj = {
					class: "produktionsenhed"
				},
				ij = {
					key: 0,
					class: "h2 mt-0 mb-lg-9"
				},
				lj = {
					class: "row"
				},
				dj = {
					class: "col-sm-12 col-lg-8"
				},
				bj = {
					class: "col-sm-12 col-lg-4 mt-6 mt-lg-0"
				},
				jj = {
					class: "my-3"
				},
				uj = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#download"
				})], -1),
				Oj = {
					class: "mt-3"
				},
				kj = {
					class: "row mt-9"
				},
				vj = {
					class: "col-sm-12 col-lg-8"
				};
			Object(r["x"])();
			var fj = sj((function(e, t, n, a, o, s) {
				var c = Object(r["E"])("ProduktionsenhedStamdata"),
					i = Object(r["E"])("Card"),
					l = Object(r["E"])("ProduktionsenhedHistoriskStamdata"),
					d = Object(r["E"])("AntalAnsatte"),
					b = Object(r["E"])("DownloadPdfModal");
				return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["j"])("div", cj, [e.produktionsenhed.stamdata ? (Object(r["w"])(), Object(r["f"])("h1", ij, Object(r["H"])(e.produktionsenhed.stamdata.navn), 1)) : Object(r["g"])("", !0), Object(r["j"])("div", lj, [Object(r["j"])("div", dj, [Object(r["j"])(c, {
					stamdata: e.produktionsenhed.stamdata
				}, null, 8, ["stamdata"])]), Object(r["j"])("div", bj, [Object(r["j"])(i, {
					card: e.card
				}, {
					default: sj((function() {
						return [Object(r["j"])("div", jj, [Object(r["j"])("button", {
							type: "button",
							class: "button button-unstyled card-btn mb-4",
							"data-module": "modal",
							"data-target": e.modalDownloadPdfId
						}, [uj, Object(r["j"])("span", Oj, " " + Object(r["H"])(e.$t("produktionsenhed-gem_som_pdf-label")), 1)], 8, ["data-target"])])]
					})),
					_: 1
				}, 8, ["card"])])]), Object(r["j"])("div", kj, [Object(r["j"])("div", vj, [Object(r["j"])(l), Object(r["j"])(d, {
					datatype: e.EnhedType.PRODUKTIONSENHED
				}, null, 8, ["datatype"])])])]), Object(r["j"])(b, {
					ref: "downloadPdfRef",
					downloadAltUrl: e.hentProduktionsenhedvisningSomPdfUrl(!1),
					downloadAabneBjaelkerUrl: e.hentProduktionsenhedvisningSomPdfUrl(!0)
				}, null, 8, ["downloadAltUrl", "downloadAabneBjaelkerUrl"])], 64)
			}));

			function mj(e, t, n, a, o, s) {
				var c = Object(r["E"])("Tabel"),
					i = Object(r["E"])("Accordion");
				return e.visHistoriskStamdata ? (Object(r["w"])(), Object(r["f"])(i, {
					key: 0,
					"accordion-id": "accordion-historisk-stamdata",
					"text-prefix": "accordion-produktionsenhed-historisk-stamdata",
					"vis-kontekstnaer-hjaelp": !0
				}, {
					default: Object(r["R"])((function() {
						return [Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "produktionsenhed-navn"),
							data: e.navn,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "adresse"),
							data: e.adresse,
							columns: e.headerArray,
							"vis-data-som-html": !0
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "branchekode"),
							data: e.branchekode,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "bibranche"),
							data: e.bibranche,
							columns: e.headerArray
						}, null, 8, ["text-prefix", "data", "columns"]), Object(r["j"])(c, {
							"text-prefix": "".concat(e.textPrefix, "udenlandsk_adresse"),
							data: e.udenlandskAdresse,
							columns: e.headerArray,
							"vis-data-som-html": !0
						}, null, 8, ["text-prefix", "data", "columns"])]
					})),
					_: 1
				})) : Object(r["g"])("", !0)
			}
			var gj = Object(r["k"])({
				name: "ProduktionsenhedHistoriskStamdata",
				components: {
					Accordion: et["a"],
					Tabel: Pa
				},
				setup: function() {
					var e = Object(r["d"])((function() {
							return i["b"].produktionsenhed.aktivProduktionsenhed.historiskStamdata
						})),
						t = Object(r["d"])((function() {
							return Object.keys(e.value).some((function(t) {
								return e.value[t].length > 0
							}))
						})),
						n = Object(r["d"])((function() {
							return ni.formaterData(e.value.navn)
						})),
						a = Object(r["d"])((function() {
							return ni.formaterData(e.value.adresse)
						})),
						o = Object(r["d"])((function() {
							return ni.formaterData(e.value.branchekode)
						})),
						s = Object(r["d"])((function() {
							return ni.formaterData(e.value.bibranche)
						})),
						c = Object(r["d"])((function() {
							return ni.formaterData(e.value.udenlandskAdresse)
						})),
						l = "historisk-stamdata-",
						d = ni.headerArray;
					return {
						historiskStamdata: e,
						visHistoriskStamdata: t,
						navn: n,
						adresse: a,
						branchekode: o,
						bibranche: s,
						udenlandskAdresse: c,
						textPrefix: l,
						headerArray: d
					}
				}
			});
			n("4fac");
			const pj = Ye()(gj, [
				["render", mj]
			]);
			var hj = pj,
				yj = n("8ae5"),
				Ej = Object(r["k"])({
					name: "Produktionsenhed",
					components: {
						DownloadPdfModal: Tl,
						Card: Fn["a"],
						ProduktionsenhedStamdata: ds,
						AntalAnsatte: Na,
						ProduktionsenhedHistoriskStamdata: hj
					},
					data: function() {
						return {
							RouteName: Ge["a"],
							EnhedType: Aa["a"]
						}
					},
					setup: function() {
						var e = Object(cs["c"])(),
							t = Object(r["d"])((function() {
								return i["b"].produktionsenhed.aktivProduktionsenhed
							})),
							n = {
								textPrefix: "produktionsenhed-dine_handlinger",
								separator: !0,
								harOverskrift: !0
							},
							a = Object(r["d"])((function() {
								return e.params.enhedId
							})),
							o = "modal-download-pdf";

						function s() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
							return yj["a"].hentProduktionsenhedvisningSomPdfLink(a.value, e)
						}
						return {
							modalDownloadPdfId: o,
							produktionsenhed: t,
							card: n,
							hentProduktionsenhedvisningSomPdfUrl: s
						}
					}
				});
			n("b3f7");
			const xj = Ye()(Ej, [
				["render", fj],
				["__scopeId", "data-v-694642b6"]
			]);
			var wj = xj,
				Rj = Object(r["k"])({
					name: "Enhedsvisning",
					components: {
						Virksomhed: _l,
						Produktionsenhed: wj,
						Person: oj
					},
					data: function() {
						return {
							EnhedType: Aa["a"]
						}
					},
					setup: function() {
						var e = Object(cs["c"])(),
							t = Object(r["d"])((function() {
								return i["b"].virksomhed.aktivVirksomhed
							})),
							n = Object(r["d"])((function() {
								return void 0 !== t.value.stamdata
							})),
							a = Object(r["d"])((function() {
								return void 0 !== i["b"].produktionsenhed.aktivProduktionsenhed.stamdata
							})),
							o = Object(r["d"])((function() {
								return void 0 !== i["b"].person.aktivPerson.stamdata
							})),
							s = Object(r["d"])((function() {
								return e.params.enhedType
							})),
							l = Object(r["d"])((function() {
								return e.params.enhedId
							})),
							d = Object(r["d"])((function() {
								return e.params.personType
							})),
							b = e.params.accordionId,
							j = Object(r["B"])(!0);

						function u() {
							return O.apply(this, arguments)
						}

						function O() {
							return O = Object(c["a"])(regeneratorRuntime.mark((function e() {
								var t;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											if (j.value = !0, !s.value || !l.value) {
												e.next = 19;
												break
											}
											if (s.value !== Aa["a"].VIRKSOMHED) {
												e.next = 10;
												break
											}
											return e.next = 5, i["b"].virksomhed.hentVirksomhed(l.value);
										case 5:
											if (!Wi["a"].erBrugerLoggetInd()) {
												e.next = 8;
												break
											}
											return e.next = 8, i["b"].abonnement.hentFoelgerBrugerVirksomhed();
										case 8:
											e.next = 19;
											break;
										case 10:
											if (s.value !== Aa["a"].PRODUKTIONSENHED) {
												e.next = 15;
												break
											}
											return e.next = 13, i["b"].produktionsenhed.hentProduktionsenhed(l.value);
										case 13:
											e.next = 19;
											break;
										case 15:
											if (s.value !== Aa["a"].PERSON) {
												e.next = 19;
												break
											}
											return t = {
												enhedsnummer: l.value,
												persontype: d.value
											}, e.next = 19, i["b"].person.hentPerson(t);
										case 19:
											j.value = !1;
										case 20:
										case "end":
											return e.stop()
									}
								}), e)
							}))), O.apply(this, arguments)
						}

						function k(e) {
							var t = document.getElementById(e);
							t && t.scrollIntoView()
						}
						return Object(r["P"])((function() {
							return l.value
						}), (function() {
							u()
						})), Object(r["u"])(Object(c["a"])(regeneratorRuntime.mark((function e() {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										return e.next = 2, u();
									case 2:
										s.value != Aa["a"].VIRKSOMHED || n.value ? s.value != Aa["a"].PRODUKTIONSENHED || a.value ? s.value != Aa["a"].PERSON || o.value || Zi["a"].push({
											name: Ge["a"].PERSON_FINDES_IKKE_PAGE
										}) : Zi["a"].push({
											name: Ge["a"].PRODUKTIONSENHED_FINDES_IKKE_PAGE
										}) : Zi["a"].push({
											name: Ge["a"].VIRKSOMHED_FINDES_IKKE_PAGE
										}), k(b);
									case 4:
									case "end":
										return e.stop()
								}
							}), e)
						})))), {
							enhedType: s,
							loading: j,
							virksomhedFundet: n,
							produktionsenhedFundet: a,
							personFundet: o
						}
					}
				});
			const Hj = Ye()(Rj, [
				["render", s]
			]);
			t["default"] = Hj
		},
		6129: function(e, t, n) {
			"use strict";
			n("762d")
		},
		"654d": function(e, t, n) {},
		"666a": function(e, t, n) {
			"use strict";
			n("905b")
		},
		"667e": function(e, t, n) {},
		"683d": function(e, t, n) {
			"use strict";
			n("03e8")
		},
		"711b": function(e, t, n) {
			"use strict";
			var r = n("f2bf"),
				a = {
					class: "form-group"
				},
				o = {
					key: 0,
					value: ""
				};

			function s(e, t, n, s, c, i) {
				var l = Object(r["E"])("KontekstnaerHjaelp");
				return Object(r["w"])(), Object(r["f"])("div", a, [Object(r["j"])("label", {
					class: "form-label",
					for: e.dropdownId
				}, Object(r["H"])(e.$t(e.textPrefix + "-label")), 9, ["for"]), e.visKontekstnaerHjaelp ? (Object(r["w"])(), Object(r["f"])(l, {
					key: 0,
					"text-prefix": e.textPrefix
				}, null, 8, ["text-prefix"])) : Object(r["g"])("", !0), Object(r["S"])(Object(r["j"])("select", {
					class: "form-select",
					name: e.dropdownId,
					id: e.dropdownId,
					"data-cy": e.dropdownId,
					"onUpdate:modelValue": t[1] || (t[1] = function(t) {
						return e.selectedValue = t
					}),
					onChange: t[2] || (t[2] = function() {
						return e.emitSelected && e.emitSelected.apply(e, arguments)
					})
				}, [e.visAlleOption ? (Object(r["w"])(), Object(r["f"])("option", o, Object(r["H"])(e.$t(e.textPrefix + "-alle_option-label")), 1)) : Object(r["g"])("", !0), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.options, (function(e) {
					return Object(r["w"])(), Object(r["f"])("option", {
						key: e.value,
						value: e.value
					}, Object(r["H"])(e.label), 9, ["value"])
				})), 128))], 40, ["name", "id", "data-cy"]), [
					[r["M"], e.selectedValue]
				])])
			}
			var c = n("c731"),
				i = Object(r["k"])({
					name: "Dropdown",
					components: {
						KontekstnaerHjaelp: c["a"]
					},
					props: {
						textPrefix: String,
						visKontekstnaerHjaelp: {
							type: Boolean,
							default: !1
						},
						preselectedValue: {
							type: String,
							default: ""
						},
						visAlleOption: {
							type: Boolean,
							default: !0
						},
						options: Array
					},
					emits: ["change"],
					setup: function(e, t) {
						var n = t.emit,
							a = Object(r["B"])(""),
							o = Object(r["B"])(e.textPrefix + "-id");

						function s() {
							n("change", a.value)
						}
						return Object(r["u"])((function() {
							a.value = e.preselectedValue
						})), Object(r["P"])((function() {
							return e.preselectedValue
						}), (function(t, n) {
							a.value = e.preselectedValue
						})), {
							dropdownId: o,
							selectedValue: a,
							emitSelected: s
						}
					}
				}),
				l = n("d959"),
				d = n.n(l);
			const b = d()(i, [
				["render", s]
			]);
			t["a"] = b
		},
		7128: function(e, t, n) {
			"use strict";
			n("7713")
		},
		7224: function(e, t, n) {},
		"73fe": function(e, t, n) {
			"use strict";
			n("b68b")
		},
		"75d4": function(e, t, n) {
			"use strict";
			n("0136")
		},
		"762d": function(e, t, n) {},
		7713: function(e, t, n) {},
		"7b7a": function(e, t, n) {
			"use strict";
			n("aff1")
		},
		8133: function(e, t, n) {},
		"8caa": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e["NAVNEAENDRINGSCERTIFIKAT"] = "NAVNEAENDRINGSCERTIFIKAT", e["REGISTRERINGSCERTIFIKAT"] = "REGISTRERINGSCERTIFIKAT", e["VEDTAEGTER"] = "VEDTAEGTER", e["STIFTELSESDOKUMENT"] = "STIFTELSESDOKUMENT", e["KAPITALDOKUMENTATION"] = "KAPITALDOKUMENTATION", e["GENERALFORSAMLINGSPROTOKOLLAT"] = "GENERALFORSAMLINGSPROTOKOLLAT", e["VURDERINGSBERETNING"] = "VURDERINGSBERETNING", e["AABNINGSBALANCE"] = "AABNINGSBALANCE", e["FUSIONSPLAN"] = "FUSIONSPLAN", e["KOPI_AF_ANMELDELSESBLANKET"] = "KOPI_AF_ANMELDELSESBLANKET", e["LEDELSESERKLAERING"] = "LEDELSESERKLAERING", e["SPALTNINGSPLAN"] = "SPALTNINGSPLAN", e["REDEGOERELSE_OM_EFTERFOELGENDE_ERHVERVELSER"] = "REDEGOERELSE_OM_EFTERFOELGENDE_ERHVERVELSER", e["REDEGOERELSE_OM_SELVFINANSIERING"] = "REDEGOERELSE_OM_SELVFINANSIERING", e["SERVICEATTESTLINK"] = "SERVICEATTESTLINK", e["EKSPRES"] = "EKSPRES", e["MANUEL_SIGNERING_FULD"] = "MANUEL_SIGNERING_FULD", e["MANUEL_SIGNERING_SELVVALGT"] = "MANUEL_SIGNERING_SELVVALGT", e["REGNSKAB_TIL_POSTLEVERING"] = "REGNSKAB_TIL_POSTLEVERING"
				}(r || (r = {}))
		},
		"902d": function(e, t, n) {
			"use strict";
			n("eb03")
		},
		"905b": function(e, t, n) {},
		"9bad": function(e, t, n) {
			"use strict";
			n("7224")
		},
		"9e84": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("d4ec"),
				a = n("bee2"),
				o = (n("a15b"), n("ac1f"), n("1276"), n("caad"), n("2532"), n("fb6a"), n("498a"), function() {
					function e() {
						Object(r["a"])(this, e)
					}
					return Object(a["a"])(e, [{
						key: "formaterAdresse",
						value: function(e) {
							return e ? e.split(s).join("<br />") : ""
						}
					}, {
						key: "genererAdresseString",
						value: function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
								n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
							if (!e) return "";
							if (e.adressebetegnelse && t) return this.formaterAdresse(e.adressebetegnelse);
							var r = e.navn || e.conavn || "";
							if (r += r.length > 0 ? "<br />" : "", r += e.vejnavn ? e.vejnavn + " " : "", r += e.husnummerFra ? e.husnummerFra + " " : "", n && (r += e.etage ? e.etage + " " : "", r += e.sideDoer || ""), r += r.length > 0 ? "<br />" : "", r += e.postnummer ? e.postnummer + " " : "", r += e.postdistrikt || "", n) {
								if (r += r.length > 0 ? "<br />" : "", null == e.land || "" == e.land) return r += e.landekode ? e.landekode + " " : "", r;
								r += e.land ? e.land + " " : ""
							}
							return r
						}
					}, {
						key: "genererAdresseTilSoegLink",
						value: function(e) {
							var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
								n = "",
								r = e.adresse;
							if (r || "string" !== typeof e.udenlandskAdresse || (r = e.udenlandskAdresse), r) {
								var a = r.split("\n");
								a[0].includes("C/O") && (a = a.slice(1, a.length)), n = a.join(" ")
							}
							if (t) {
								var o = e.postnummerOgBy;
								o && (n += " " + o)
							}
							return n.trim()
						}
					}]), e
				}()),
				s = /\n{1,}/,
				c = new o
		},
		a06f: function(e, t, n) {
			"use strict";
			n("1fdf")
		},
		a260: function(e, t, n) {
			"use strict";
			n("ce8c")
		},
		a6b0: function(e, t, n) {},
		aff1: function(e, t, n) {},
		b03b: function(e, t, n) {},
		b139: function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("d4ec"),
				a = n("bee2"),
				o = (n("99af"), n("b850")),
				s = function() {
					function e() {
						Object(r["a"])(this, e)
					}
					return Object(a["a"])(e, [{
						key: "virksomhedDokumentDownloadLink",
						value: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o["b"].virksomhed.aktivVirksomhed.stamdata.cvrnummer;
							return "".concat("https://datacvr.virk.dk/gateway/" + o["b"].config.aktivConfig.dokument, "/downloadDokumentForVirksomhed?dokumentId=").concat(e, "&cvrNummer=").concat(t)
						}
					}, {
						key: "downloadOffentliggoerelseDokumenterLink",
						value: function(e) {
							return "".concat("https://datacvr.virk.dk/gateway/" + o["b"].config.aktivConfig.dokument, "/downloadOffentliggoerelseSomZip?okiRef=").concat(e)
						}
					}]), e
				}(),
				c = new s
		},
		b3f7: function(e, t, n) {
			"use strict";
			n("f959")
		},
		b68b: function(e, t, n) {},
		be18: function(e, t, n) {
			"use strict";
			n("2d17")
		},
		c215: function(e, t, n) {
			"use strict";
			var r = n("f2bf"),
				a = Object(r["V"])("data-v-9b8b856c");
			Object(r["z"])("data-v-9b8b856c");
			var o = {
					class: "h3"
				},
				s = {
					class: "modal-footer"
				};
			Object(r["x"])();
			var c, i, l = a((function(e, t, n, c, i, l) {
					var d = Object(r["E"])("Dropdown"),
						b = Object(r["E"])("Checkbox"),
						j = Object(r["E"])("Modal");
					return Object(r["w"])(), Object(r["f"])(j, {
						"modal-id": e.modalId,
						"text-prefix": e.modalId,
						class: "administrer-abonnement-modal",
						separator: !0,
						"show-footer": !1,
						onHidden: e.emitHidden
					}, {
						default: a((function() {
							return [Object(r["j"])("h2", o, Object(r["H"])(e.abonnement ? e.abonnement.virksomhedsnavn : e.virksomhed.stamdata.navn), 1), Object(r["j"])("span", null, Object(r["H"])(e.$t("modal-administrer-abonnement-cvr-label")) + ": " + Object(r["H"])(e.abonnement ? e.abonnement.cvrnummer : e.virksomhed.stamdata.cvrnummer), 1), Object(r["j"])(d, {
								"text-prefix": e.modalId,
								options: e.notifikationsfrekvensOptions,
								onChange: e.setNotifikationsFrekvens,
								visAlleOption: !1,
								preselectedValue: e.notifikationsfrekvens
							}, null, 8, ["text-prefix", "options", "onChange", "preselectedValue"]), Object(r["j"])(b, {
								options: e.meddelelsesTypeOption,
								onChange: e.setAendringstype,
								class: "administrer-abonnement-modal-checkbox",
								textPrefix: e.modalId + "-checkbox",
								"preselected-values": e.aendringstyper
							}, null, 8, ["options", "onChange", "textPrefix", "preselected-values"]), Object(r["j"])("div", s, [Object(r["j"])("button", {
								type: "button",
								class: "button button-secondary",
								onClick: t[1] || (t[1] = function() {
									return e.nulstil && e.nulstil.apply(e, arguments)
								}),
								"data-modal-close": ""
							}, Object(r["H"])(e.$t("modal-administrer-abonnement-annuller")), 1), Object(r["j"])("button", {
								type: "button",
								class: "button button-primary opretButton",
								"data-cy": "opret-abonnement",
								onClick: t[2] || (t[2] = function(t) {
									return e.abonnement ? e.opdaterAbonnement() : e.opretAbonnement()
								}),
								"data-modal-close": ""
							}, Object(r["H"])(e.$t(e.abonnement ? "modal-administrer-abonnement-opdater" : "modal-administrer-abonnement-godkend")), 1)])]
						})),
						_: 1
					}, 8, ["modal-id", "text-prefix", "onHidden"])
				})),
				d = n("1da1"),
				b = (n("96cf"), n("714b")),
				j = n("e6e3"),
				u = n("b850"),
				O = n("711b"),
				k = n("7737");
			(function(e) {
				e["PERSONKREDS_OG_TEGNINGSREGEL"] = "PERSONKREDS_OG_TEGNINGSREGEL", e["VIRKSOMHEDSMEDDELELSER"] = "VIRKSOMHEDSMEDDELELSER", e["REGNSKABSAENDRING"] = "REGNSKABSAENDRING", e["VIRKSOMHEDSOPLYSNINGER"] = "VIRKSOMHEDSOPLYSNINGER", e["VIRKSOMHEDSREGISTRERING"] = "VIRKSOMHEDSREGISTRERING", e["EJERKREDS"] = "EJERKREDS"
			})(c || (c = {})),
			function(e) {
				e["ONCHANGE"] = "ONCHANGE", e["DAILY"] = "DAILY", e["WEEKLY"] = "WEEKLY"
			}(i || (i = {}));
			var v = Object(r["k"])({
					name: "AdministrerAbonnementModal",
					props: {
						abonnement: {
							type: Object,
							default: void 0
						}
					},
					components: {
						Modal: b["a"],
						Dropdown: O["a"],
						Checkbox: k["a"]
					},
					emits: ["hidden"],
					setup: function(e, t) {
						var n = t.emit,
							a = "modal-administrer-abonnement",
							o = Object(r["d"])((function() {
								return u["b"].virksomhed.aktivVirksomhed
							})),
							s = Object(r["B"])([{
								value: i.ONCHANGE,
								label: j["b"].getTextFromKey("mail-frekvens-straks")
							}, {
								value: i.DAILY,
								label: j["b"].getTextFromKey("mail-frekvens-dagligt")
							}, {
								value: i.WEEKLY,
								label: j["b"].getTextFromKey("mail-frekvens-ugeligt")
							}]),
							l = Object(r["B"])([{
								value: c.VIRKSOMHEDSOPLYSNINGER,
								label: j["b"].getTextFromKey("notifikationstype-virksomhedsoplysninger")
							}, {
								value: c.PERSONKREDS_OG_TEGNINGSREGEL,
								label: j["b"].getTextFromKey("notifikationstype-personkreds-og-tegningsregel")
							}, {
								value: c.EJERKREDS,
								label: j["b"].getTextFromKey("notifikationstype-ejerkreds")
							}, {
								value: c.REGNSKABSAENDRING,
								label: j["b"].getTextFromKey("notifikationstype-regnskabsaendring")
							}, {
								value: c.VIRKSOMHEDSMEDDELELSER,
								label: j["b"].getTextFromKey("notifikationstype-offentliggoerelser")
							}, {
								value: c.VIRKSOMHEDSREGISTRERING,
								label: j["b"].getTextFromKey("notifikationstype-registreringshistorik")
							}]),
							b = [c.VIRKSOMHEDSOPLYSNINGER, c.PERSONKREDS_OG_TEGNINGSREGEL, c.EJERKREDS, c.REGNSKABSAENDRING, c.VIRKSOMHEDSREGISTRERING, c.VIRKSOMHEDSMEDDELELSER],
							O = i.ONCHANGE,
							k = Object(r["B"])(""),
							v = Object(r["B"])([]);

						function f() {
							return m.apply(this, arguments)
						}

						function m() {
							return m = Object(d["a"])(regeneratorRuntime.mark((function e() {
								var t;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return t = {
												enhedsnummer: u["b"].virksomhed.aktivVirksomhed.stamdata.enhedsnummer,
												notifikationsfrekvens: k.value,
												aendringstyper: v.value
											}, e.next = 3, u["b"].abonnement.foelg(t);
										case 3:
										case "end":
											return e.stop()
									}
								}), e)
							}))), m.apply(this, arguments)
						}

						function g() {
							return p.apply(this, arguments)
						}

						function p() {
							return p = Object(d["a"])(regeneratorRuntime.mark((function t() {
								var n, r;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											return r = {
												enhedsnummer: null === (n = e.abonnement) || void 0 === n ? void 0 : n.enhedsnummer,
												notifikationsfrekvens: k.value,
												aendringstyper: v.value
											}, t.next = 3, u["b"].abonnement.opdaterAbonnement(r);
										case 3:
										case "end":
											return t.stop()
									}
								}), t)
							}))), p.apply(this, arguments)
						}

						function h(e) {
							k.value = e
						}

						function y(e) {
							v.value = e
						}

						function E() {
							n("hidden")
						}

						function x() {
							y(e.abonnement ? v.value : b), h(e.abonnement ? e.abonnement.notifikationsfrekvens : O)
						}
						return Object(r["P"])((function() {
							return e.abonnement
						}), (function(t, n) {
							e.abonnement && (h(e.abonnement.notifikationsfrekvens), y(e.abonnement.aendringstyper))
						})), Object(r["u"])((function() {
							var t, n, r, a;
							v.value = null !== (t = null === e || void 0 === e || null === (n = e.abonnement) || void 0 === n ? void 0 : n.aendringstyper) && void 0 !== t ? t : b, k.value = null !== (r = null === e || void 0 === e || null === (a = e.abonnement) || void 0 === a ? void 0 : a.notifikationsfrekvens) && void 0 !== r ? r : O
						})), {
							modalId: a,
							opretAbonnement: f,
							virksomhed: o,
							notifikationsfrekvensOptions: s,
							notifikationsfrekvens: k,
							aendringstyper: v,
							setNotifikationsFrekvens: h,
							setAendringstype: y,
							meddelelsesTypeOption: l,
							defaultCheckboxValues: b,
							opdaterAbonnement: g,
							emitHidden: E,
							nulstil: x
						}
					}
				}),
				f = (n("7128"), n("d959")),
				m = n.n(f);
			const g = m()(v, [
				["render", l],
				["__scopeId", "data-v-9b8b856c"]
			]);
			t["a"] = g
		},
		c398: function(e, t, n) {},
		c459: function(e, t, n) {
			"use strict";
			var r = n("f2bf"),
				a = {
					class: "py-4"
				};

			function o(e, t, n, o, s, c) {
				return Object(r["w"])(), Object(r["f"])("div", a, [Object(r["j"])("button", {
					type: "button",
					class: "button button-primary",
					onClick: t[1] || (t[1] = function() {
						return e.tilfoejTilKurv && e.tilfoejTilKurv.apply(e, arguments)
					}),
					disabled: e.loading,
					"data-cy": e.textPrefix + "-" + e.produkt.produkttype
				}, Object(r["H"])(e.brugerErLoggetInd ? e.$t(e.textPrefix + "-tilfoej_til_kurv-label") : e.$t(e.textPrefix + "-bestil-label")), 9, ["disabled", "data-cy"])])
			}
			var s = n("1da1"),
				c = (n("96cf"), n("ac1f"), n("5319"), n("b850")),
				i = n("1315"),
				l = n("917c"),
				d = n("e939"),
				b = n("8caa"),
				j = n("1133"),
				u = n("04c8"),
				O = n("6c02"),
				k = n("e6e3"),
				v = Object(r["k"])({
					name: "TilfoejTilKurv",
					data: function() {
						return {
							locationHref: window.location.href,
							brugerErLoggetInd: j["a"].erBrugerLoggetInd()
						}
					},
					props: {
						textPrefix: String,
						produkt: {
							type: Object,
							required: !0
						},
						harFejl: {
							type: Boolean,
							default: !1
						},
						produktnavnParams: {
							type: Array,
							default: function() {
								return []
							}
						}
					},
					emits: ["visFejl"],
					setup: function(e, t) {
						var n = t.emit,
							a = Object(r["d"])((function() {
								return c["b"].virksomhed.aktivVirksomhed
							})),
							o = Object(O["d"])(),
							v = Object(O["c"])(),
							f = Object(r["B"])(!1);

						function m() {
							return g.apply(this, arguments)
						}

						function g() {
							return g = Object(s["a"])(regeneratorRuntime.mark((function t() {
								var r;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (f.value = !0, j["a"].erBrugerLoggetInd()) {
												t.next = 7;
												break
											}
											return t.next = 4, o.replace({
												path: v.path,
												query: v.query,
												hash: c["b"].accordions.hashString.length > 0 ? c["b"].accordions.hashString + "&signering" : "#signering"
											});
										case 4:
											return j["a"].tjekBrugerLoginOgRedirect(), f.value = !1, t.abrupt("return");
										case 7:
											if (!(c["b"].kurv.aktivAntalProdukter >= 10)) {
												t.next = 12;
												break
											}
											r = {
												textPrefix: "tilfoej_til_kurv-max_produkter",
												notifikationType: u["a"].ERROR
											}, c["b"].toastr.tilfoejNotifikation(r), t.next = 19;
											break;
										case 12:
											if (!e.harFejl) {
												t.next = 16;
												break
											}
											n("visFejl"), t.next = 19;
											break;
										case 16:
											return j["a"].tjekBrugerLogin(), t.next = 19, c["b"].kurv.tilfoejTilKurv(p());
										case 19:
											f.value = !1;
										case 20:
										case "end":
											return t.stop()
									}
								}), t)
							}))), g.apply(this, arguments)
						}

						function p() {
							var t, n, r, o, s, c = {};
							return c.enhedsId = null !== (t = null !== (n = a.value.stamdata.cvrnummer) && void 0 !== n ? n : a.value.stamdata.regnummer) && void 0 !== t ? t : "", c.enhedsNavn = a.value.stamdata.navn, c.produktType = k["b"].getTextFromKey("bestil_dokumenter-".concat(e.produkt.produkttype.toLowerCase(), "-overskrift"), e.produktnavnParams), c.produktPris = e.produkt.pris, c.antal = 1, c.enhedsType = d["a"].VIRKSOMHED, c.produktSprog = null !== (r = e.produkt.sprog) && void 0 !== r ? r : "", c.produktBinavneTilvalg = null !== (o = e.produkt.produktBinavneTilvalg) && void 0 !== o && o, h(c), c.manueltSigneretType = null !== (s = e.produkt.manueltSigneretType) && void 0 !== s ? s : "", e.produkt.produkttype === b["a"].MANUEL_SIGNERING_SELVVALGT && y(c), c
						}

						function h(t) {
							if (e.produkt.produkttype === b["a"].NAVNEAENDRINGSCERTIFIKAT && e.produkt.dato) t.produktStartDato = i["DateTime"].fromFormat(e.produkt.dato, l["a"].datovaelgerFormat).endOf("day").toISO(), t.produktSlutDato = i["DateTime"].local().endOf("day").toISO();
							else if ((e.produkt.produkttype === b["a"].VEDTAEGTER || e.produkt.produkttype === b["a"].GENERALFORSAMLINGSPROTOKOLLAT) && e.produkt.dato) {
								var n;
								t.produktDato = i["DateTime"].fromFormat(e.produkt.dato, l["a"].datovaelgerFormat).endOf("day").toISO(), t.okiSagsnummer = null !== (n = e.produkt.okiSagsnummer) && void 0 !== n ? n : ""
							}
						}

						function y(e) {
							e.openedTaxonomies = c["b"].accordions.aktiveAabneAccordions
						}
						return {
							tilfoejTilKurv: m,
							loading: f
						}
					}
				}),
				f = n("d959"),
				m = n.n(f);
			const g = m()(v, [
				["render", o]
			]);
			t["a"] = g
		},
		c803: function(e, t, n) {},
		c84b: function(e, t, n) {
			"use strict";
			n("8133")
		},
		ca28: function(e, t, n) {},
		cba4: function(e, t, n) {
			"use strict";
			n("667e")
		},
		ce0f: function(e, t, n) {
			"use strict";
			n("d9f1")
		},
		ce8c: function(e, t, n) {},
		d352: function(e, t, n) {},
		d9f1: function(e, t, n) {},
		dfc8: function(e, t, n) {
			"use strict";
			n("a6b0")
		},
		e3ef: function(e, t, n) {
			"use strict";
			var r = n("f2bf"),
				a = Object(r["V"])("data-v-afbda56a");
			Object(r["z"])("data-v-afbda56a");
			var o = {
					key: 0,
					class: "row"
				},
				s = {
					class: "col-6 col-lg-3"
				},
				c = {
					class: "bold"
				},
				i = {
					class: "col-6 col-lg-9"
				};
			Object(r["x"])();
			var l = a((function(e, t, n, a, l, d) {
					var b = Object(r["E"])("KontekstnaerHjaelp");
					return e.visVaerdi || e.visTekstVaerdi ? (Object(r["w"])(), Object(r["f"])("div", o, [Object(r["j"])("div", s, [Object(r["j"])("span", c, Object(r["H"])(e.$t("stamdata-".concat(e.feltnavn, "-label"))), 1), e.visKontekstnaerHjaelp ? (Object(r["w"])(), Object(r["f"])(b, {
						key: 0,
						"text-prefix": e.textPrefix
					}, null, 8, ["text-prefix"])) : Object(r["g"])("", !0)]), Object(r["j"])("div", i, [e.$slots.default ? Object(r["D"])(e.$slots, "default", {
						key: 0
					}, void 0, !0) : (Object(r["w"])(), Object(r["f"])(r["a"], {
						key: 1
					}, [Object(r["i"])(Object(r["H"])(e.tekstVaerdi), 1)], 64))])])) : Object(r["g"])("", !0)
				})),
				d = n("c731"),
				b = Object(r["k"])({
					name: "StamdataFelt",
					components: {
						KontekstnaerHjaelp: d["a"]
					},
					props: {
						visVaerdi: {
							type: Boolean,
							default: !1
						},
						tekstVaerdi: {
							type: String
						},
						feltnavn: {
							type: String
						},
						visKontekstnaerHjaelp: {
							type: Boolean,
							default: !1
						},
						textPrefix: String
					},
					setup: function(e) {
						var t = Object(r["d"])((function() {
							var t;
							return !!e.tekstVaerdi && 0 !== (null === (t = e.tekstVaerdi) || void 0 === t ? void 0 : t.length)
						}));
						return {
							visTekstVaerdi: t
						}
					}
				}),
				j = (n("3774"), n("d959")),
				u = n.n(j);
			const O = u()(b, [
				["render", l],
				["__scopeId", "data-v-afbda56a"]
			]);
			t["a"] = O
		},
		eb03: function(e, t, n) {},
		f764: function(e, t, n) {
			"use strict";
			n("d352")
		},
		f959: function(e, t, n) {}
	}
]);
