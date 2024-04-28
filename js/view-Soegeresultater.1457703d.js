(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["view-Soegeresultater"], {
		"129f": function(e, t) {
			e.exports = Object.is || function(e, t) {
				return e === t ? 0 !== e || 1 / e === 1 / t : e != e && t != t
			}
		},
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
		"2e07": function(e, t, n) {
			"use strict";
			n("b88e")
		},
		"3e3c": function(e, t, n) {
			"use strict";
			n.r(t);
			n("b0c0"), n("ac1f"), n("841c");
			var r = n("f2bf"),
				a = {
					class: "soegeresultater"
				},
				o = {
					key: 0,
					class: "spinner"
				},
				l = {
					class: "row mb-4"
				},
				s = {
					class: "col-6 col-lg-8"
				},
				i = {
					key: 0,
					class: "col-6 col-lg-4 align-text-right"
				},
				c = {
					class: "mt-5"
				};

			function d(e, t, n, d, b, u) {
				var g = Object(r["E"])("Soegefelt"),
					v = Object(r["E"])("EnhedstypeFilter"),
					j = Object(r["E"])("SoegSortering"),
					O = Object(r["E"])("Alert"),
					f = Object(r["E"])("SoegeresultaterTabel"),
					p = Object(r["E"])("DownloadResultat"),
					h = Object(r["E"])("Paginering");
				return Object(r["w"])(), Object(r["f"])("div", a, [Object(r["j"])(g), e.loading ? (Object(r["w"])(), Object(r["f"])("div", o)) : (Object(r["w"])(), Object(r["f"])(r["a"], {
					key: 1
				}, [Object(r["j"])("h2", null, Object(r["H"])(e.$t(e.textPrefix + "-overskrift", [e.antalResultaterFormateret])), 1), Object(r["j"])("div", l, [Object(r["j"])("div", s, [Object(r["j"])(v)]), e.resultater.total > 0 && e.resultater.total <= 3e3 ? (Object(r["w"])(), Object(r["f"])("div", i, [Object(r["j"])(j)])) : Object(r["g"])("", !0)]), 0 === e.resultater.total || "Error" === e.resultater.name ? (Object(r["w"])(), Object(r["f"])(O, {
					key: 0,
					"has-close": !1,
					header: e.textPrefix + "-alert-ingen_resultater-overskrift",
					text: e.textPrefix + "-alert-ingen_resultater-indhold"
				}, null, 8, ["header", "text"])) : (Object(r["w"])(), Object(r["f"])(r["a"], {
					key: 1
				}, [Object(r["j"])(f, {
					"text-prefix": e.textPrefix + "-tabel"
				}, null, 8, ["text-prefix"]), Object(r["j"])("div", c, [Object(r["j"])(p), e.resultater.total > 10 ? (Object(r["w"])(), Object(r["f"])(h, {
					key: 0,
					aktivSide: e.aktivSide,
					antalSider: e.antalSider,
					onClick: e.search
				}, null, 8, ["aktivSide", "antalSider", "onClick"])) : Object(r["g"])("", !0)])], 64))], 64))])
			}
			var b = n("1da1"),
				u = (n("96cf"), n("5319"), n("84b1")),
				g = n("5f8a"),
				v = n("b850"),
				j = Object(r["V"])("data-v-295c8b5e");
			Object(r["z"])("data-v-295c8b5e");
			var O = {
					class: "soegeresultaterTabel",
					"data-cy": "soegeresultater-tabel"
				},
				f = {
					class: "col-12 col-lg-4"
				},
				p = {
					class: "bold value"
				},
				h = {
					class: "col-12 col-lg-2"
				},
				k = {
					key: 0
				},
				m = {
					class: "bold"
				},
				S = {
					class: "value"
				},
				y = {
					key: 1
				},
				x = {
					class: "bold"
				},
				E = {
					key: 2
				},
				F = {
					class: "bold"
				},
				w = {
					key: 0
				},
				T = {
					class: "bold"
				},
				N = Object(r["i"])(", "),
				R = {
					key: 1
				},
				P = {
					class: "bold"
				},
				I = {
					class: "value"
				},
				H = {
					key: 0,
					class: "col-12 col-lg-3"
				},
				M = {
					class: "bold"
				},
				D = {
					class: "value"
				},
				_ = {
					class: "col-12 col-lg-1 pt-3 vis-mere",
					"data-cy": "vis-mere"
				},
				A = Object(r["j"])("svg", {
					class: "icon-svg",
					"aria-hidden": "true",
					focusable: "false"
				}, [Object(r["j"])("use", {
					"xlink:href": "#internal-link-arrow"
				})], -1);
			Object(r["x"])();
			var V = j((function(e, t, n, a, o, l) {
					var s = Object(r["E"])("KontekstnaerHjaelp"),
						i = Object(r["E"])("router-link");
					return Object(r["w"])(), Object(r["f"])("div", O, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.soegeresultater.enheder, (function(t, n) {
						return Object(r["w"])(), Object(r["f"])("div", {
							key: n,
							class: ["row", {
								inaktiv: e.harOphoertStatus(t)
							}],
							onClick: function(n) {
								return e.router.push({
									name: e.RouteName.ENHEDSVISNING,
									params: e.getEnhedParams(t),
									query: e.route.query
								})
							}
						}, [Object(r["j"])("div", f, [Object(r["j"])("span", p, [Object(r["i"])(Object(r["H"])(t.senesteNavn) + " ", 1), t.visNavnPostfix ? (Object(r["w"])(), Object(r["f"])(r["a"], {
							key: 0
						}, [Object(r["i"])("(" + Object(r["H"])(e.$t("virksomhed-status-" + t.status + "-label")) + ")", 1)], 64)) : Object(r["g"])("", !0)]), t.highlightBinavn || t.highlightHistoriskBinavn || t.highlightHistoriskHovednavn ? (Object(r["w"])(), Object(r["f"])(s, {
							key: 0,
							"text-prefix": e.getKontekstnaerhjaelpTekstnoegle(t),
							idSuffix: t.senesteNavn
						}, null, 8, ["text-prefix", "idSuffix"])) : Object(r["g"])("", !0), t.beliggenhedsadresse ? (Object(r["w"])(), Object(r["f"])("div", {
							key: 1,
							innerHTML: e.adresseUtil.formaterAdresse(t.beliggenhedsadresse)
						}, null, 8, ["innerHTML"])) : Object(r["g"])("", !0)]), Object(r["j"])("div", h, [t.enhedstype === e.EnhedType.VIRKSOMHED ? (Object(r["w"])(), Object(r["f"])("div", k, [Object(r["j"])("div", m, Object(r["H"])(t.cvr && !t.harPseudoCvr ? e.$t(e.textPrefix + "-cvrnummer-label") : e.$t(e.textPrefix + "-regnummer-label")), 1), Object(r["j"])("div", S, Object(r["H"])(t.cvr && !t.harPseudoCvr ? t.cvr : t.reg), 1)])) : t.enhedstype === e.EnhedType.PRODUKTIONSENHED ? (Object(r["w"])(), Object(r["f"])("div", y, [Object(r["j"])("div", x, Object(r["H"])(e.$t(e.textPrefix + "-p_nummer-label")), 1), Object(r["j"])("div", null, Object(r["H"])(t.pNummer), 1)])) : void 0 !== t.harAktiveRelationer && t.personType !== e.PersonType.LIBERAL_UDOEVER && t.personType !== e.PersonType.HVIDVASK_PERSON ? (Object(r["w"])(), Object(r["f"])("div", E, [Object(r["j"])("div", F, Object(r["H"])(e.$t(e.textPrefix + "-aktive_relationer-label")), 1), Object(r["j"])("div", null, Object(r["H"])(e.$t(e.textPrefix + "-aktive_relationer-" + t.harAktiveRelationer + "-tekst")), 1)])) : Object(r["g"])("", !0)]), Object(r["j"])("div", {
							class: ["col-12 col-lg-2", {
								"col-lg-5": t.enhedstype === e.EnhedType.PERSON
							}]
						}, [t.tilknytning && t.tilknytning.length > 0 ? (Object(r["w"])(), Object(r["f"])("div", w, [Object(r["j"])("div", T, Object(r["H"])(e.$t(e.textPrefix + "-tilknytning-label")), 1), (Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(t.tilknytning, (function(n, a) {
							return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["i"])(Object(r["H"])(e.$t(n)), 1), a < t.tilknytning.length - 1 ? (Object(r["w"])(), Object(r["f"])(r["a"], {
								key: 0
							}, [N], 64)) : Object(r["g"])("", !0)], 64)
						})), 256))])) : t.enhedstype === e.EnhedType.VIRKSOMHED || t.enhedstype === e.EnhedType.PRODUKTIONSENHED ? (Object(r["w"])(), Object(r["f"])("div", R, [Object(r["j"])("div", P, Object(r["H"])(e.$t(e.textPrefix + "-status-label")), 1), Object(r["j"])("div", I, Object(r["H"])("Ophørt" === t.status ? t.status : e.$t("virksomhed-status-" + t.status + "-label")), 1)])) : Object(r["g"])("", !0)], 2), t.enhedstype === e.EnhedType.VIRKSOMHED || t.enhedstype === e.EnhedType.PRODUKTIONSENHED ? (Object(r["w"])(), Object(r["f"])("div", H, [Object(r["j"])("div", null, [Object(r["j"])("div", M, Object(r["H"])(e.$t(e.textPrefix + "-virksomhedsform-label")), 1), Object(r["j"])("div", D, Object(r["H"])(t.pNummer ? e.$t(e.textPrefix + "-p_enhed-label") : t.virksomhedsform), 1)])])) : Object(r["g"])("", !0), Object(r["j"])("div", _, [Object(r["j"])(i, {
							class: "button button-unstyled",
							"aria-label": e.$t(e.textPrefix + "-vis_mere-title") + " " + t.senesteNavn,
							title: e.$t(e.textPrefix + "-vis_mere-title") + " " + t.senesteNavn,
							to: {
								name: e.RouteName.ENHEDSVISNING,
								params: e.getEnhedParams(t),
								query: e.route.query
							}
						}, {
							default: j((function() {
								return [Object(r["i"])(Object(r["H"])(e.isMobile ? e.$t(e.textPrefix + "-vis_mere-label") : "") + " ", 1), A]
							})),
							_: 2
						}, 1032, ["aria-label", "title", "to"])])], 10, ["onClick"])
					})), 128))])
				})),
				C = n("f744"),
				K = n("e939"),
				U = n("c731"),
				$ = n("9e84"),
				B = n("6c02"),
				L = n("97d9"),
				G = n("2363"),
				X = Object(r["k"])({
					name: "SoegeresultaterTabel",
					components: {
						KontekstnaerHjaelp: U["a"]
					},
					data: function() {
						return {
							EnhedType: K["a"],
							adresseUtil: $["a"],
							RouteName: C["a"]
						}
					},
					props: {
						textPrefix: {
							type: String,
							default: ""
						}
					},
					setup: function(e) {
						var t = Object(B["c"])(),
							n = Object(B["d"])(),
							a = Object(r["d"])((function() {
								return v["b"].breakpoint.isMobile
							})),
							o = Object(r["d"])((function() {
								return v["b"].soeg.enhederFraSoegning
							}));

						function l(e) {
							return L["a"].virksomhedErOphoert(e.status)
						}

						function s(e) {
							v["b"].soeg.setSelectedEnhed(e);
							var t = e.cvr || e.pNummer || e.enhedsnummer,
								n = {
									enhedType: e.enhedstype,
									enhedId: t
								};
							return e.personType && (n.personType = e.personType), n
						}

						function i(t) {
							var n = e.textPrefix + "-matcher";
							return t.highlightBinavn ? n + "-binavn" : t.highlightHistoriskBinavn ? n + "-historisk-binavn" : n + "-historisk-hovednavn"
						}
						return {
							route: t,
							router: n,
							isMobile: a,
							getEnhedParams: s,
							getKontekstnaerhjaelpTekstnoegle: i,
							soegeresultater: o,
							harOphoertStatus: l,
							PersonType: G["a"]
						}
					}
				}),
				q = (n("b887"), n("d959")),
				z = n.n(q);
			const J = z()(X, [
				["render", V],
				["__scopeId", "data-v-295c8b5e"]
			]);
			var Q = J,
				Y = n("be30"),
				W = n("6d95"),
				Z = Object(r["V"])("data-v-562b05ba");
			Object(r["z"])("data-v-562b05ba");
			var ee = {
					class: "enhedstype-filter py-3"
				},
				te = {
					class: "icon-svg",
					focusable: "false",
					"aria-hidden": "true"
				};
			Object(r["x"])();
			var ne = Z((function(e, t, n, a, o, l) {
					var s = Object(r["E"])("Radiobutton");
					return Object(r["w"])(), Object(r["f"])("div", ee, [e.isMobile ? (Object(r["w"])(), Object(r["f"])("button", {
						key: 0,
						type: "button",
						class: "button button-unstyled filters-btn",
						onClick: t[1] || (t[1] = function(t) {
							return e.showFilters = !e.showFilters
						})
					}, [Object(r["i"])(Object(r["H"])(e.$t("soegeresultater-enhedstype-filter-toggle_filtre-label")) + " ", 1), (Object(r["w"])(), Object(r["f"])("svg", te, [Object(r["j"])("use", {
						"xlink:href": e.showFilters ? "#expand-less" : "#expand-more"
					}, null, 8, ["xlink:href"])]))])) : Object(r["g"])("", !0), e.showFilters && e.isMobile || !e.isMobile ? (Object(r["w"])(), Object(r["f"])(s, {
						key: 1,
						options: e.enhedstypeFilterOptions,
						"vis-label": !1,
						"vis-radiobuttons-inline": !0,
						"text-prefix": "soegeresultater-enhedstype-filter",
						"preselected-value": e.vxm.soeg.aktivSoegFilter.enhedstype,
						onChange: e.setEnhedstype
					}, null, 8, ["options", "preselected-value", "onChange"])) : Object(r["g"])("", !0)])
				})),
				re = n("e6e3"),
				ae = n("7abc"),
				oe = n("943e"),
				le = n("483c"),
				se = Object(r["k"])({
					name: "EnhedstypeFilter",
					components: {
						Radiobutton: ae["a"]
					},
					data: function() {
						return {
							EnhedType: K["a"],
							vxm: v["b"]
						}
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return v["b"].breakpoint.isMobile
							})),
							t = Object(r["B"])(!1),
							n = Object(r["d"])((function() {
								return [{
									value: "",
									label: re["b"].getTextFromKey("enhedstype-alle-label")
								}, {
									value: K["a"].VIRKSOMHED,
									label: re["b"].getTextFromKey("enhedstype-virksomhed-label", [v["b"].soeg.enhederFraSoegning.virksomhedTotal ? "(" + Intl.NumberFormat("da-DA").format(v["b"].soeg.enhederFraSoegning.virksomhedTotal) + ")" : ""]),
									disabled: v["b"].soeg.aktivSoegFilter.personrolle.length > 0
								}, {
									value: K["a"].PRODUKTIONSENHED,
									label: re["b"].getTextFromKey("enhedstype-produktionsenhed-label", [v["b"].soeg.enhederFraSoegning.pEnhedTotal ? "(" + Intl.NumberFormat("da-DA").format(v["b"].soeg.enhederFraSoegning.pEnhedTotal) + ")" : ""]),
									disabled: v["b"].soeg.aktivSoegFilter.personrolle.length > 0 || v["b"].soeg.aktivSoegFilter.virksomhedsstatus.length > 0 || v["b"].soeg.aktivSoegFilter.virksomhedsform.length > 0 || v["b"].soeg.aktivSoegFilter.startdatoFra.length > 0 || v["b"].soeg.aktivSoegFilter.startdatoTil.length > 0 || v["b"].soeg.aktivSoegFilter.ophoersdatoFra.length > 0 || v["b"].soeg.aktivSoegFilter.ophoersdatoTil.length > 0
								}, {
									value: K["a"].PERSON,
									label: re["b"].getTextFromKey("enhedstype-person-label", [v["b"].soeg.enhederFraSoegning.personTotal ? "(" + Intl.NumberFormat("da-DA").format(v["b"].soeg.enhederFraSoegning.personTotal) + ")" : ""]),
									disabled: v["b"].soeg.aktivSoegFilter.antalAnsatte.length > 0 || v["b"].soeg.aktivSoegFilter.virksomhedsstatus.length > 0 || v["b"].soeg.aktivSoegFilter.virksomhedsform.length > 0 || v["b"].soeg.aktivSoegFilter.virksomhedsmarkering.length > 0 || v["b"].soeg.aktivSoegFilter.branchekode.length > 0 || v["b"].soeg.aktivSoegFilter.startdatoFra.length > 0 || v["b"].soeg.aktivSoegFilter.startdatoTil.length > 0 || v["b"].soeg.aktivSoegFilter.ophoersdatoFra.length > 0 || v["b"].soeg.aktivSoegFilter.ophoersdatoTil.length > 0
								}]
							})),
							a = oe["a"].useEmitter();

						function o(e) {
							v["b"].soeg.setSoegFilter({
								key: le["a"].ENHEDSTYPE,
								value: e
							}), v["b"].soeg.setSoegFilter({
								key: le["a"].SIDEINDEX,
								value: "0"
							}), e === K["a"].VIRKSOMHED ? v["b"].soeg.setSoegFilter({
								key: le["a"].PERSONROLLE,
								value: []
							}) : e === K["a"].PRODUKTIONSENHED ? (v["b"].soeg.setSoegFilter({
								key: le["a"].PERSONROLLE,
								value: []
							}), v["b"].soeg.setSoegFilter({
								key: le["a"].VIRKSOMHEDSSTATUS,
								value: []
							}), v["b"].soeg.setSoegFilter({
								key: le["a"].VIRKSOMHEDSFORM,
								value: []
							})) : e === K["a"].PERSON && (v["b"].soeg.setSoegFilter({
								key: le["a"].ANTAL_ANSATTE,
								value: []
							}), v["b"].soeg.setSoegFilter({
								key: le["a"].VIRKSOMHEDSSTATUS,
								value: []
							}), v["b"].soeg.setSoegFilter({
								key: le["a"].VIRKSOMHEDSFORM,
								value: []
							}), v["b"].soeg.setSoegFilter({
								key: le["a"].VIRKSOMHEDSMARKERING,
								value: []
							})), a && a.emit("search", {
								nySide: "0",
								redirect: !0
							})
						}
						return {
							isMobile: e,
							enhedstypeFilterOptions: n,
							setEnhedstype: o,
							showFilters: t
						}
					}
				});
			n("2e07");
			const ie = z()(se, [
				["render", ne],
				["__scopeId", "data-v-562b05ba"]
			]);
			var ce = ie,
				de = n("e784"),
				be = Object(r["V"])("data-v-de5f36f6");
			Object(r["z"])("data-v-de5f36f6");
			var ue = Object(r["j"])("svg", {
				class: "icon-svg",
				focusable: "false",
				"aria-hidden": "true"
			}, [Object(r["j"])("use", {
				"xlink:href": "#download"
			})], -1);
			Object(r["x"])();
			var ge = be((function(e, t, n, a, o, l) {
					var s = Object(r["E"])("Modal");
					return Object(r["w"])(), Object(r["f"])(r["a"], null, [Object(r["j"])("button", {
						onClick: t[1] || (t[1] = function() {
							return e.downloadXlsx && e.downloadXlsx.apply(e, arguments)
						}),
						class: "download-knap",
						"data-cy": "download-soegeresultat",
						type: "button",
						"aria-label": e.$t("forside-soegeresultat-download")
					}, [ue, Object(r["i"])(" " + Object(r["H"])(e.$t("forside-soegeresultat-download")), 1)], 8, ["aria-label"]), Object(r["j"])(s, {
						"text-prefix": e.textPrefix,
						"modal-id": e.modalId,
						class: "download-resultat-modal",
						"show-footer": !1,
						"indhold-from-html": !0
					}, null, 8, ["text-prefix", "modal-id"])], 64)
				})),
				ve = n("5530"),
				je = n("d4ec"),
				Oe = n("bee2"),
				fe = (n("d3b7"), n("3ca3"), n("ddb0"), n("2b3d"), n("99af"), n("36d3")),
				pe = n("1315"),
				he = 3e3,
				ke = function() {
					function e() {
						Object(je["a"])(this, e)
					}
					return Object(Oe["a"])(e, [{
						key: "downloadXlsx",
						value: function() {
							var e = Object(b["a"])(regeneratorRuntime.mark((function e(t) {
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											fe["a"].post("excel/downloadSoegresultat", t, {
												responseType: "blob"
											}).then((function(e) {
												var n = t.fritekstCommand.soegOrd,
													r = URL.createObjectURL(new Blob([e.data], {
														type: e.headers.contentType
													})),
													a = document.createElement("a");
												a.href = r, a.setAttribute("download", "CVRudtræk_".concat(pe["DateTime"].now().toISODate()).concat(n ? "_" + n : "", ".xlsx")), document.body.appendChild(a);
												var o = document.createEvent("MouseEvent");
												o.initEvent("click", !1, !0), a.dispatchEvent(o)
											}));
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})));

							function t(t) {
								return e.apply(this, arguments)
							}
							return t
						}()
					}]), e
				}(),
				me = new ke,
				Se = n("714b"),
				ye = n("9ef5"),
				xe = n.n(ye),
				Ee = n("936b"),
				Fe = Object(r["k"])({
					name: "DownloadResultat",
					components: {
						Modal: Se["a"]
					},
					setup: function() {
						var e = "download-resultat-modal",
							t = "forside-soegeresultat-download-modal";

						function n() {
							var t;
							if (!(v["b"].soeg.enhederFraSoegning.total && (null === (t = v["b"].soeg.enhederFraSoegning) || void 0 === t ? void 0 : t.total) > he)) {
								var n, r = Object(ve["a"])({}, v["b"].soeg.aktivSoegFilter);
								r.size = he, r.fritekst = null !== (n = decodeURIComponent(r.fritekst)) && void 0 !== n ? n : "";
								var a = Ee["a"].mapper(r);
								return me.downloadXlsx(a)
							}
							var o = new xe.a.Modal(document.getElementById(e));
							o && o.show()
						}
						return {
							downloadXlsx: n,
							modalId: e,
							textPrefix: t
						}
					}
				});
			n("c7fb");
			const we = z()(Fe, [
				["render", ge],
				["__scopeId", "data-v-de5f36f6"]
			]);
			var Te = we,
				Ne = (n("4e82"), {
					class: "soeg-sortering"
				});

			function Re(e, t, n, a, o, l) {
				var s = Object(r["E"])("OverflowMenu");
				return Object(r["w"])(), Object(r["f"])("div", Ne, [Object(r["j"])(s, {
					ref: "overflowMenu",
					"text-prefix": "soeg-sortering",
					options: e.sorteringOptions,
					onButtonClicked: e.sort,
					"vis-nulstil": !0
				}, null, 8, ["options", "onButtonClicked"])])
			}
			var Pe, Ie = n("e634");
			(function(e) {
				e["NAVN_ASC"] = "navn-asc", e["NAVN_DESC"] = "navn-desc", e["POSTNUMMER_ASC"] = "postnummer-asc", e["POSTNUMMER_DESC"] = "postnummer-desc"
			})(Pe || (Pe = {}));
			var He = Object(r["k"])({
				name: "SoegSortering",
				components: {
					OverflowMenu: Ie["a"]
				},
				setup: function() {
					var e = Object(r["d"])((function() {
							return v["b"].breakpoint.isMobile
						})),
						t = oe["a"].useEmitter(),
						n = Object(r["B"])(!1),
						a = Object(r["d"])((function() {
							return [{
								value: Pe.NAVN_ASC,
								label: re["b"].getTextFromKey("soeg-sortering-navn_asc-label"),
								current: v["b"].soeg.aktivSoegFilter.sortering === Pe.NAVN_ASC,
								disabled: v["b"].soeg.aktivSoegFilter.sortering === Pe.NAVN_ASC
							}, {
								value: Pe.NAVN_DESC,
								label: re["b"].getTextFromKey("soeg-sortering-navn_desc-label"),
								current: v["b"].soeg.aktivSoegFilter.sortering === Pe.NAVN_DESC,
								disabled: v["b"].soeg.aktivSoegFilter.sortering === Pe.NAVN_DESC
							}, {
								value: Pe.POSTNUMMER_ASC,
								label: re["b"].getTextFromKey("soeg-sortering-postnr_asc-label"),
								current: v["b"].soeg.aktivSoegFilter.sortering === Pe.POSTNUMMER_ASC,
								disabled: v["b"].soeg.aktivSoegFilter.sortering === Pe.POSTNUMMER_ASC
							}, {
								value: Pe.POSTNUMMER_DESC,
								label: re["b"].getTextFromKey("soeg-sortering-postnr_desc-label"),
								current: v["b"].soeg.aktivSoegFilter.sortering === Pe.POSTNUMMER_DESC,
								disabled: v["b"].soeg.aktivSoegFilter.sortering === Pe.POSTNUMMER_DESC
							}]
						}));

					function o(e) {
						v["b"].soeg.setSoegFilter({
							key: le["a"].SORTERING,
							value: e
						}), t && t.emit("search", {
							nySide: "0",
							redirect: !0
						})
					}
					return {
						isMobile: e,
						sorteringOptions: a,
						showFilters: n,
						sort: o
					}
				}
			});
			const Me = z()(He, [
				["render", Re]
			]);
			var De = Me,
				_e = Object(r["k"])({
					name: "Soegeresultater.vue",
					components: {
						DownloadResultat: Te,
						EnhedstypeFilter: ce,
						Paginering: Y["a"],
						SoegeresultaterTabel: Q,
						Alert: g["a"],
						Soegefelt: u["a"],
						SoegSortering: De
					},
					setup: function() {
						var e = Object(r["d"])((function() {
								return v["b"].soeg.enhederFraSoegning
							})),
							t = "soegeresultater",
							n = Object(r["B"])(!1),
							a = Object(B["d"])(),
							o = Object(r["d"])((function() {
								return v["b"].soeg.aktivSoegFilter.sideIndex
							})),
							l = Object(r["d"])((function() {
								return v["b"].soeg.enhederFraSoegning.total ? Math.ceil(v["b"].soeg.enhederFraSoegning.total / 10) : 0
							})),
							s = Object(r["B"])(!1),
							i = oe["a"].useEmitter(),
							c = "0",
							d = Object(r["d"])((function() {
								return Intl.NumberFormat("da-DA").format(e.value.total || 0)
							}));

						function u(e) {
							v["b"].soeg.setSoegFilter({
								key: le["a"].SIDEINDEX,
								value: e
							})
						}

						function g(e) {
							return j.apply(this, arguments)
						}

						function j() {
							return j = Object(b["a"])(regeneratorRuntime.mark((function e(t) {
								var r, o, l, i, c, d, b, g;
								return regeneratorRuntime.wrap((function(e) {
									while (1) switch (e.prev = e.next) {
										case 0:
											return s.value && u(t.nySide), n.value = !0, l = W["a"].getQueryFromSoegFilter(v["b"].soeg.aktivSoegFilter), t.redirect && a.push({
												name: C["a"].SOEGERESULTATER,
												query: l
											}), e.next = 6, v["b"].soeg.soegEnheder();
										case 6:
											if (1 !== (null === (r = v["b"].soeg.enhederFraSoegning) || void 0 === r || null === (o = r.enheder) || void 0 === o ? void 0 : o.length)) {
												e.next = 14;
												break
											}
											if (i = v["b"].soeg.enhederFraSoegning.enheder[0], !de["a"].fritekstMatcherResultatCvrRegPnummer(l.fritekst, i)) {
												e.next = 14;
												break
											}
											return b = null !== (c = null !== (d = i.cvr) && void 0 !== d ? d : i.pNummer) && void 0 !== c ? c : i.enhedsnummer, g = {
												enhedType: i.enhedstype,
												enhedId: b
											}, i.personType && (g.personType = i.personType), e.next = 14, a.replace({
												name: C["a"].ENHEDSVISNING,
												params: g,
												query: l
											});
										case 14:
											n.value = !1;
										case 15:
										case "end":
											return e.stop()
									}
								}), e)
							}))), j.apply(this, arguments)
						}
						return Object(r["u"])((function() {
							g({
								nySide: c,
								redirect: !1
							}), s.value = !0, i && i.on("search", g)
						})), {
							loading: n,
							resultater: e,
							textPrefix: t,
							aktivSide: o,
							antalSider: l,
							search: g,
							setFilter: s,
							index: c,
							antalResultaterFormateret: d
						}
					}
				});
			const Ae = z()(_e, [
				["render", d]
			]);
			t["default"] = Ae
		},
		"442a": function(e, t, n) {},
		4697: function(e, t, n) {},
		"7abc": function(e, t, n) {
			"use strict";
			var r = n("f2bf"),
				a = Object(r["V"])("data-v-1682d07e");
			Object(r["z"])("data-v-1682d07e");
			var o = {
					key: 0,
					class: "form-label"
				},
				l = {
					key: 1,
					class: "form-error-message"
				},
				s = {
					class: "sr-only"
				},
				i = {
					class: "py-4"
				},
				c = {
					class: "form-group"
				};
			Object(r["x"])();
			var d = a((function(e, t, n, a, d, b) {
					var u = Object(r["E"])("KontekstnaerHjaelp");
					return Object(r["w"])(), Object(r["f"])("div", {
						class: ["form-group", {
							"js-radio-toggle-group": e.options.some((function(e) {
								return e.skjultIndhold
							})),
							"form-error": e.visFejlmeddelelse
						}]
					}, [Object(r["j"])("fieldset", null, [e.visLabel ? (Object(r["w"])(), Object(r["f"])("legend", o, [Object(r["i"])(Object(r["H"])(e.$t(e.textPrefix + "-label")) + " ", 1), e.visKontekstnaerHjaelp ? (Object(r["w"])(), Object(r["f"])(u, {
						key: 0,
						"text-prefix": e.textPrefix
					}, null, 8, ["text-prefix"])) : Object(r["g"])("", !0)])) : Object(r["g"])("", !0), e.visFejlmeddelelse ? (Object(r["w"])(), Object(r["f"])("span", l, [Object(r["j"])("span", s, Object(r["H"])(e.$t("fejlmeddelelse-error-label")), 1), Object(r["i"])(" " + Object(r["H"])(e.$t(e.fejlmeddelelseTextkey)), 1)])) : Object(r["g"])("", !0), Object(r["j"])("ul", {
						class: ["nobullet-list", {
							"inline-list": e.visRadiobuttonsInline && !e.isMobile
						}]
					}, [(Object(r["w"])(!0), Object(r["f"])(r["a"], null, Object(r["C"])(e.options, (function(n, a) {
						var o;
						return Object(r["w"])(), Object(r["f"])("li", {
							key: n.value,
							class: {
								"ml-5": e.visRadiobuttonsInline && a > 0 && !e.isMobile
							}
						}, [Object(r["S"])(Object(r["j"])("input", {
							id: e.textPrefix + "-" + n.value + "-id",
							type: "radio",
							name: e.textPrefix,
							"onUpdate:modelValue": t[1] || (t[1] = function(t) {
								return e.selectedValue = t
							}),
							value: n.value,
							class: ["form-radio", {
								"js-checkbox-toggle-content": n.skjultIndhold
							}],
							disabled: n.disabled,
							"data-js-target": n.skjultIndhold ? "#collapse-" + n.value : void 0,
							"aria-controls": n.skjultIndhold ? "collapse-" + n.value : void 0,
							onChange: t[2] || (t[2] = function() {
								return e.emitSelected && e.emitSelected.apply(e, arguments)
							})
						}, null, 42, ["id", "name", "value", "disabled", "data-js-target", "aria-controls"]), [
							[r["L"], e.selectedValue]
						]), Object(r["j"])("label", {
							for: e.textPrefix + "-" + n.value + "-id",
							"data-cy": e.textPrefix + "-" + n.value
						}, Object(r["H"])(n.label), 9, ["for", "data-cy"]), n.visKontekstnaerHjaelp ? (Object(r["w"])(), Object(r["f"])(u, {
							key: 0,
							"text-prefix": e.textPrefix + "-" + n.value
						}, null, 8, ["text-prefix"])) : Object(r["g"])("", !0), n.skjultIndhold ? (Object(r["w"])(), Object(r["f"])("div", {
							key: 1,
							id: "collapse-" + n.value,
							"aria-hidden": "true",
							tabindex: "-1",
							class: ["box-border-l", {
								collapsed: e.selectedValue !== n.value
							}]
						}, [Object(r["j"])("div", i, [Object(r["j"])("div", c, [Object(r["D"])(e.$slots, null !== (o = n.slotname) && void 0 !== o ? o : n.value, {}, void 0, !0)])])], 10, ["id"])) : Object(r["g"])("", !0)], 2)
					})), 128))], 2)])], 2)
				})),
				b = (n("a9e3"), n("c731")),
				u = n("b850"),
				g = Object(r["k"])({
					name: "Radiobutton",
					components: {
						KontekstnaerHjaelp: b["a"]
					},
					props: {
						textPrefix: String,
						visLabel: {
							type: Boolean,
							default: !0
						},
						visKontekstnaerHjaelp: {
							type: Boolean,
							default: !1
						},
						visRadiobuttonsInline: {
							type: Boolean,
							default: !1
						},
						preselectedValue: {
							type: [Number, String, Boolean],
							default: ""
						},
						options: {
							type: Array,
							default: function() {
								return []
							}
						},
						visFejlmeddelelse: {
							type: Boolean,
							default: !1
						},
						fejlmeddelelseTextkey: {
							type: String,
							default: ""
						}
					},
					emits: ["change"],
					setup: function(e, t) {
						var n = t.emit,
							a = Object(r["d"])((function() {
								return u["b"].breakpoint.isMobile
							})),
							o = Object(r["B"])("");

						function l() {
							n("change", o.value)
						}
						return Object(r["P"])((function() {
							return e.preselectedValue
						}), (function() {
							o.value = e.preselectedValue
						})), Object(r["u"])((function() {
							var t;
							o.value = null !== (t = e.preselectedValue) && void 0 !== t ? t : ""
						})), {
							isMobile: a,
							emitSelected: l,
							selectedValue: o
						}
					}
				}),
				v = (n("ec2b"), n("d959")),
				j = n.n(v);
			const O = j()(g, [
				["render", d],
				["__scopeId", "data-v-1682d07e"]
			]);
			t["a"] = O
		},
		"841c": function(e, t, n) {
			"use strict";
			var r = n("d784"),
				a = n("825a"),
				o = n("1d80"),
				l = n("129f"),
				s = n("14c3");
			r("search", (function(e, t, n) {
				return [function(t) {
					var n = o(this),
						r = void 0 == t ? void 0 : t[e];
					return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
				}, function(e) {
					var r = n(t, this, e);
					if (r.done) return r.value;
					var o = a(this),
						i = String(e),
						c = o.lastIndex;
					l(c, 0) || (o.lastIndex = 0);
					var d = s(o, i);
					return l(o.lastIndex, c) || (o.lastIndex = c), null === d ? -1 : d.index
				}]
			}))
		},
		"9e84": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
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
							return e ? e.split(l).join("<br />") : ""
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
				l = /\n{1,}/,
				s = new o
		},
		b887: function(e, t, n) {
			"use strict";
			n("4697")
		},
		b88e: function(e, t, n) {},
		c7fb: function(e, t, n) {
			"use strict";
			n("ce8d")
		},
		ce8d: function(e, t, n) {},
		ec2b: function(e, t, n) {
			"use strict";
			n("442a")
		}
	}
]);
