(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	["view-BestilDokumenter"], {
		2909: function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("6b75");

			function a(e) {
				if (Array.isArray(e)) return Object(n["a"])(e)
			}
			r("a4d3"), r("e01a"), r("d3b7"), r("d28b"), r("3ca3"), r("ddb0"), r("a630");

			function o(e) {
				if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}
			var i = r("06c5");

			function l() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}

			function u(e) {
				return a(e) || o(e) || Object(i["a"])(e) || l()
			}
		},
		"442a": function(e, t, r) {},
		"711b": function(e, t, r) {
			"use strict";
			var n = r("f2bf"),
				a = {
					class: "form-group"
				},
				o = {
					key: 0,
					value: ""
				};

			function i(e, t, r, i, l, u) {
				var d = Object(n["E"])("KontekstnaerHjaelp");
				return Object(n["w"])(), Object(n["f"])("div", a, [Object(n["j"])("label", {
					class: "form-label",
					for: e.dropdownId
				}, Object(n["H"])(e.$t(e.textPrefix + "-label")), 9, ["for"]), e.visKontekstnaerHjaelp ? (Object(n["w"])(), Object(n["f"])(d, {
					key: 0,
					"text-prefix": e.textPrefix
				}, null, 8, ["text-prefix"])) : Object(n["g"])("", !0), Object(n["S"])(Object(n["j"])("select", {
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
				}, [e.visAlleOption ? (Object(n["w"])(), Object(n["f"])("option", o, Object(n["H"])(e.$t(e.textPrefix + "-alle_option-label")), 1)) : Object(n["g"])("", !0), (Object(n["w"])(!0), Object(n["f"])(n["a"], null, Object(n["C"])(e.options, (function(e) {
					return Object(n["w"])(), Object(n["f"])("option", {
						key: e.value,
						value: e.value
					}, Object(n["H"])(e.label), 9, ["value"])
				})), 128))], 40, ["name", "id", "data-cy"]), [
					[n["M"], e.selectedValue]
				])])
			}
			var l = r("c731"),
				u = Object(n["k"])({
					name: "Dropdown",
					components: {
						KontekstnaerHjaelp: l["a"]
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
						var r = t.emit,
							a = Object(n["B"])(""),
							o = Object(n["B"])(e.textPrefix + "-id");

						function i() {
							r("change", a.value)
						}
						return Object(n["u"])((function() {
							a.value = e.preselectedValue
						})), Object(n["P"])((function() {
							return e.preselectedValue
						}), (function(t, r) {
							a.value = e.preselectedValue
						})), {
							dropdownId: o,
							selectedValue: a,
							emitSelected: i
						}
					}
				}),
				d = r("d959"),
				c = r.n(d);
			const s = c()(u, [
				["render", i]
			]);
			t["a"] = s
		},
		"7abc": function(e, t, r) {
			"use strict";
			var n = r("f2bf"),
				a = Object(n["V"])("data-v-1682d07e");
			Object(n["z"])("data-v-1682d07e");
			var o = {
					key: 0,
					class: "form-label"
				},
				i = {
					key: 1,
					class: "form-error-message"
				},
				l = {
					class: "sr-only"
				},
				u = {
					class: "py-4"
				},
				d = {
					class: "form-group"
				};
			Object(n["x"])();
			var c = a((function(e, t, r, a, c, s) {
					var p = Object(n["E"])("KontekstnaerHjaelp");
					return Object(n["w"])(), Object(n["f"])("div", {
						class: ["form-group", {
							"js-radio-toggle-group": e.options.some((function(e) {
								return e.skjultIndhold
							})),
							"form-error": e.visFejlmeddelelse
						}]
					}, [Object(n["j"])("fieldset", null, [e.visLabel ? (Object(n["w"])(), Object(n["f"])("legend", o, [Object(n["i"])(Object(n["H"])(e.$t(e.textPrefix + "-label")) + " ", 1), e.visKontekstnaerHjaelp ? (Object(n["w"])(), Object(n["f"])(p, {
						key: 0,
						"text-prefix": e.textPrefix
					}, null, 8, ["text-prefix"])) : Object(n["g"])("", !0)])) : Object(n["g"])("", !0), e.visFejlmeddelelse ? (Object(n["w"])(), Object(n["f"])("span", i, [Object(n["j"])("span", l, Object(n["H"])(e.$t("fejlmeddelelse-error-label")), 1), Object(n["i"])(" " + Object(n["H"])(e.$t(e.fejlmeddelelseTextkey)), 1)])) : Object(n["g"])("", !0), Object(n["j"])("ul", {
						class: ["nobullet-list", {
							"inline-list": e.visRadiobuttonsInline && !e.isMobile
						}]
					}, [(Object(n["w"])(!0), Object(n["f"])(n["a"], null, Object(n["C"])(e.options, (function(r, a) {
						var o;
						return Object(n["w"])(), Object(n["f"])("li", {
							key: r.value,
							class: {
								"ml-5": e.visRadiobuttonsInline && a > 0 && !e.isMobile
							}
						}, [Object(n["S"])(Object(n["j"])("input", {
							id: e.textPrefix + "-" + r.value + "-id",
							type: "radio",
							name: e.textPrefix,
							"onUpdate:modelValue": t[1] || (t[1] = function(t) {
								return e.selectedValue = t
							}),
							value: r.value,
							class: ["form-radio", {
								"js-checkbox-toggle-content": r.skjultIndhold
							}],
							disabled: r.disabled,
							"data-js-target": r.skjultIndhold ? "#collapse-" + r.value : void 0,
							"aria-controls": r.skjultIndhold ? "collapse-" + r.value : void 0,
							onChange: t[2] || (t[2] = function() {
								return e.emitSelected && e.emitSelected.apply(e, arguments)
							})
						}, null, 42, ["id", "name", "value", "disabled", "data-js-target", "aria-controls"]), [
							[n["L"], e.selectedValue]
						]), Object(n["j"])("label", {
							for: e.textPrefix + "-" + r.value + "-id",
							"data-cy": e.textPrefix + "-" + r.value
						}, Object(n["H"])(r.label), 9, ["for", "data-cy"]), r.visKontekstnaerHjaelp ? (Object(n["w"])(), Object(n["f"])(p, {
							key: 0,
							"text-prefix": e.textPrefix + "-" + r.value
						}, null, 8, ["text-prefix"])) : Object(n["g"])("", !0), r.skjultIndhold ? (Object(n["w"])(), Object(n["f"])("div", {
							key: 1,
							id: "collapse-" + r.value,
							"aria-hidden": "true",
							tabindex: "-1",
							class: ["box-border-l", {
								collapsed: e.selectedValue !== r.value
							}]
						}, [Object(n["j"])("div", u, [Object(n["j"])("div", d, [Object(n["D"])(e.$slots, null !== (o = r.slotname) && void 0 !== o ? o : r.value, {}, void 0, !0)])])], 10, ["id"])) : Object(n["g"])("", !0)], 2)
					})), 128))], 2)])], 2)
				})),
				s = (r("a9e3"), r("c731")),
				p = r("b850"),
				b = Object(n["k"])({
					name: "Radiobutton",
					components: {
						KontekstnaerHjaelp: s["a"]
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
						var r = t.emit,
							a = Object(n["d"])((function() {
								return p["b"].breakpoint.isMobile
							})),
							o = Object(n["B"])("");

						function i() {
							r("change", o.value)
						}
						return Object(n["P"])((function() {
							return e.preselectedValue
						}), (function() {
							o.value = e.preselectedValue
						})), Object(n["u"])((function() {
							var t;
							o.value = null !== (t = e.preselectedValue) && void 0 !== t ? t : ""
						})), {
							isMobile: a,
							emitSelected: i,
							selectedValue: o
						}
					}
				}),
				f = (r("ec2b"), r("d959")),
				v = r.n(f);
			const j = v()(b, [
				["render", c],
				["__scopeId", "data-v-1682d07e"]
			]);
			t["a"] = j
		},
		"8caa": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e["NAVNEAENDRINGSCERTIFIKAT"] = "NAVNEAENDRINGSCERTIFIKAT", e["REGISTRERINGSCERTIFIKAT"] = "REGISTRERINGSCERTIFIKAT", e["VEDTAEGTER"] = "VEDTAEGTER", e["STIFTELSESDOKUMENT"] = "STIFTELSESDOKUMENT", e["KAPITALDOKUMENTATION"] = "KAPITALDOKUMENTATION", e["GENERALFORSAMLINGSPROTOKOLLAT"] = "GENERALFORSAMLINGSPROTOKOLLAT", e["VURDERINGSBERETNING"] = "VURDERINGSBERETNING", e["AABNINGSBALANCE"] = "AABNINGSBALANCE", e["FUSIONSPLAN"] = "FUSIONSPLAN", e["KOPI_AF_ANMELDELSESBLANKET"] = "KOPI_AF_ANMELDELSESBLANKET", e["LEDELSESERKLAERING"] = "LEDELSESERKLAERING", e["SPALTNINGSPLAN"] = "SPALTNINGSPLAN", e["REDEGOERELSE_OM_EFTERFOELGENDE_ERHVERVELSER"] = "REDEGOERELSE_OM_EFTERFOELGENDE_ERHVERVELSER", e["REDEGOERELSE_OM_SELVFINANSIERING"] = "REDEGOERELSE_OM_SELVFINANSIERING", e["SERVICEATTESTLINK"] = "SERVICEATTESTLINK", e["EKSPRES"] = "EKSPRES", e["MANUEL_SIGNERING_FULD"] = "MANUEL_SIGNERING_FULD", e["MANUEL_SIGNERING_SELVVALGT"] = "MANUEL_SIGNERING_SELVVALGT", e["REGNSKAB_TIL_POSTLEVERING"] = "REGNSKAB_TIL_POSTLEVERING"
				}(n || (n = {}))
		},
		"8f5b": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("f2bf"),
				a = {
					class: "bestil-dokumenter"
				},
				o = {
					key: 0,
					class: "spinner"
				},
				i = Object(n["j"])("svg", {
					class: "icon-svg",
					focusable: "false",
					"aria-hidden": "true"
				}, [Object(n["j"])("use", {
					"xlink:href": "#arrow-left"
				})], -1),
				l = {
					key: 0,
					class: "h2 mt-0 lg-9"
				},
				u = {
					class: "form-hint"
				},
				d = {
					class: "row mt-9"
				},
				c = {
					class: "col-sm-12 col-lg-8"
				};

			function s(e, t, r, s, p, b) {
				var f = Object(n["E"])("Produkter");
				return Object(n["w"])(), Object(n["f"])("div", a, [e.loading ? (Object(n["w"])(), Object(n["f"])("div", o)) : (Object(n["w"])(), Object(n["f"])(n["a"], {
					key: 1
				}, [Object(n["j"])("p", null, [Object(n["j"])("a", {
					href: e.enhedsvisningPath,
					class: "button button-quaternary focus"
				}, [i, Object(n["i"])(" " + Object(n["H"])(e.$t("tilbage-enhedsvisning")), 1)], 8, ["href"])]), e.virksomhed.stamdata ? (Object(n["w"])(), Object(n["f"])("h1", l, Object(n["H"])(e.virksomhed.stamdata.navn), 1)) : Object(n["g"])("", !0), Object(n["j"])("p", u, Object(n["H"])(e.$t("bestil_dokumenter-CVR-label")) + " " + Object(n["H"])(e.virksomhed.stamdata.cvrnummer), 1), Object(n["j"])("div", d, [Object(n["j"])("div", c, [Object(n["j"])(f, {
					"text-prefix": "bestil_dokumenter",
					cvrnummer: e.virksomhed.stamdata.cvrnummer
				}, null, 8, ["cvrnummer"])])])], 64))])
			}
			var p = r("1da1"),
				b = (r("96cf"), r("6c02")),
				f = r("b850");

			function v(e, t, r, a, o, i) {
				var l = Object(n["E"])("Produkt");
				return Object(n["w"])(!0), Object(n["f"])(n["a"], null, Object(n["C"])(e.produkter, (function(t, r) {
					return Object(n["w"])(), Object(n["f"])(l, {
						key: r,
						"text-prefix": e.textPrefix + "-" + t.produkttype.toLowerCase(),
						produkt: t,
						index: r,
						cvrnummer: e.cvrnummer
					}, null, 8, ["text-prefix", "produkt", "index", "cvrnummer"])
				})), 128)
			}
			r("ac1f"), r("1276"), r("d3b7"), r("25f0");
			var j = {
				class: "accordion-content-inner transparent-bg"
			};

			function k(e, t, r, a, o, i) {
				var l = Object(n["E"])("Dropdown"),
					u = Object(n["E"])("DatoInterval"),
					d = Object(n["E"])("Checkbox"),
					c = Object(n["E"])("TilfoejTilKurv"),
					s = Object(n["E"])("DownloadRegistreringscertifikat"),
					p = Object(n["E"])("Accordion");
				return Object(n["w"])(), Object(n["f"])(p, {
					"accordion-id": "accordion-" + e.produkt.produkttype.toLowerCase(),
					"text-prefix": e.textPrefix,
					"rightside-overskrift": e.$t("pris-valuta-label", [e.produkt.pris.toString().split(".")[0]])
				}, {
					default: Object(n["R"])((function() {
						return [Object(n["j"])("div", j, [Object(n["j"])("div", {
							innerHTML: e.produktIndhold
						}, null, 8, ["innerHTML"]), e.harSprogvalg ? (Object(n["w"])(), Object(n["f"])(l, {
							key: 0,
							"text-prefix": "bestil_dokumenter-sprogvaelger-" + e.produkt.produkttype.toLowerCase(),
							options: e.sprogOptions,
							"preselected-value": e.produkt.sprog,
							"vis-alle-option": !1,
							onChange: e.opdaterSprog
						}, null, 8, ["text-prefix", "options", "preselected-value", "onChange"])) : Object(n["g"])("", !0), e.harDatovalg ? (Object(n["w"])(), Object(n["f"])(u, {
							key: 1,
							"text-prefix": e.textPrefix,
							produkttype: e.produkt.produkttype,
							cvrnummer: e.cvrnummer,
							"valgt-dato": e.produkt.dato,
							"vis-fejl": e.visFejl,
							onChange: e.opdaterDatoOgSagsnummer,
							onNulstilFejl: e.nulstilFejl,
							onInvalidForm: t[1] || (t[1] = function(t) {
								return e.produktHarFejl = !0
							})
						}, null, 8, ["text-prefix", "produkttype", "cvrnummer", "valgt-dato", "vis-fejl", "onChange", "onNulstilFejl"])) : Object(n["g"])("", !0), e.harBinavnevalg ? (Object(n["w"])(), Object(n["f"])(d, {
							key: 2,
							options: e.binavneOptions,
							"text-prefix": e.textPrefix,
							onChange: e.opdaterBinavneTilvalg
						}, null, 8, ["options", "text-prefix", "onChange"])) : Object(n["g"])("", !0), e.produkt.produkttype !== e.Produkttype.SERVICEATTESTLINK ? (Object(n["w"])(), Object(n["f"])(c, {
							key: 3,
							"text-prefix": "bestil_dokumenter",
							produkt: e.produkt,
							"har-fejl": e.produktHarFejl,
							onVisFejl: t[2] || (t[2] = function(t) {
								return e.visFejl = !0
							})
						}, null, 8, ["produkt", "har-fejl"])) : Object(n["g"])("", !0), e.produkt.produkttype === e.Produkttype.REGISTRERINGSCERTIFIKAT ? (Object(n["w"])(), Object(n["f"])(s, {
							key: 4
						})) : Object(n["g"])("", !0)])]
					})),
					_: 1
				}, 8, ["accordion-id", "text-prefix", "rightside-overskrift"])
			}
			r("a9e3");
			var m = r("d54e"),
				O = r("c459"),
				g = r("7737"),
				E = r("711b"),
				x = r("17ca"),
				y = r("e6e3"),
				h = {
					class: "form-group"
				};

			function S(e, t, r, a, o, i) {
				var l = Object(n["E"])("InputFelt"),
					u = Object(n["E"])("Datovaelger"),
					d = Object(n["E"])("Radiobutton");
				return Object(n["w"])(), Object(n["f"])("div", h, [e.loginUtil.erBrugerLoggetInd() ? (Object(n["w"])(), Object(n["f"])(d, {
					key: 1,
					options: e.datoOptions,
					"text-prefix": e.textPrefix + "-dato",
					"preselected-value": e.datoOptions[0].value,
					"vis-kontekstnaer-hjaelp": e.produkttype === e.Produkttype.VEDTAEGTER,
					onChange: e.haandterDatovalg
				}, {
					"collapse-interval": Object(n["R"])((function() {
						return [Object(n["j"])(u, {
							ref: "datovaelger",
							onChange: e.haandterDatovalg,
							"text-prefix": e.textPrefix + "-dato-fra",
							"vis-fejlmeddelelse": e.visFejl,
							"fejlmeddelelse-textkey": "datovaelger-ingen_dato-fejl",
							"max-date": e.DateTime.local().toFormat("yyyy-MM-dd")
						}, null, 8, ["onChange", "text-prefix", "vis-fejlmeddelelse", "max-date"]), e.produkttype === e.Produkttype.NAVNEAENDRINGSCERTIFIKAT ? (Object(n["w"])(), Object(n["f"])(l, {
							key: 0,
							"text-prefix": e.textPrefix + "-dato-til",
							"preselected-value": e.$t(e.textPrefix + "-dags_dato-label", [e.DateTime.local().toFormat("dd/MM/yyyy").toString()]),
							readonly: !0
						}, null, 8, ["text-prefix", "preselected-value"])) : Object(n["g"])("", !0)]
					})),
					_: 1
				}, 8, ["options", "text-prefix", "preselected-value", "vis-kontekstnaer-hjaelp", "onChange"])) : (Object(n["w"])(), Object(n["f"])(l, {
					key: 0,
					"text-prefix": e.textPrefix + "-dato",
					"preselected-value": e.$t(e.textPrefix + "-dato-log_ind-indhold"),
					readonly: !0
				}, null, 8, ["text-prefix", "preselected-value"]))])
			}
			var I = r("2909");

			function T(e) {
				if (Array.isArray(e)) return e
			}
			r("a4d3"), r("e01a"), r("d28b"), r("3ca3"), r("ddb0");

			function R(e, t) {
				var r = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
				if (null != r) {
					var n, a, o = [],
						i = !0,
						l = !1;
					try {
						for (r = r.call(e); !(i = (n = r.next()).done); i = !0)
							if (o.push(n.value), t && o.length === t) break
					} catch (u) {
						l = !0, a = u
					} finally {
						try {
							i || null == r["return"] || r["return"]()
						} finally {
							if (l) throw a
						}
					}
					return o
				}
			}
			var N = r("06c5");

			function A() {
				throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}

			function L(e, t) {
				return T(e) || R(e, t) || Object(N["a"])(e, t) || A()
			}
			r("caad"), r("2532"), r("d81d"), r("a434"), r("99af");
			var P = r("98f9"),
				w = r("7abc"),
				F = r("1315"),
				D = r("c023"),
				G = r("917c"),
				K = r("7793"),
				V = r("1133"),
				_ = r("8caa"),
				B = Object(n["k"])({
					name: "DatoInterval",
					components: {
						InputFelt: D["a"],
						Radiobutton: w["a"],
						Datovaelger: P["a"]
					},
					data: function() {
						return {
							loginUtil: V["a"],
							DateTime: F["DateTime"],
							Produkttype: _["a"]
						}
					},
					props: {
						textPrefix: String,
						produkttype: {
							type: String,
							required: !0
						},
						cvrnummer: String,
						visFejl: Boolean,
						valgtDato: {
							type: String,
							default: ""
						}
					},
					emits: ["change", "nulstilFejl", "invalidForm", "digitaltDokumentValgt"],
					setup: function(e, t) {
						var r = t.emit,
							a = Object(n["B"])([{
								value: e.produkttype + "-interval",
								label: y["b"].getTextFromKey(e.textPrefix + "-dato-interval-option"),
								slotname: "collapse-interval",
								skjultIndhold: !0
							}]);

						function o(e) {
							return i.apply(this, arguments)
						}

						function i() {
							return i = Object(p["a"])(regeneratorRuntime.mark((function t(r) {
								var n, o, i;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (o = [], e.produkttype !== _["a"].VEDTAEGTER) {
												t.next = 5;
												break
											}
											return t.next = 4, K["a"].hentDigitaleDokumenter(r);
										case 4:
											o = t.sent;
										case 5:
											i = [], o.length > 0 ? i = o.map((function(e) {
												return {
													value: G["a"].fromUiFormatToDatovaelgerFormat(e.offentliggoerelseTidsstempel) + "," + e.okiSagsnummer,
													label: G["a"].fromUiFormatToDatovaelgerFormat(e.offentliggoerelseTidsstempel)
												}
											})) : i.push({
												value: e.produkttype + "-seneste",
												label: y["b"].getTextFromKey(e.textPrefix + "-dato-seneste-option"),
												skjultIndhold: !1
											}), (n = a.value).splice.apply(n, [0, 0].concat(Object(I["a"])(i)));
										case 8:
										case "end":
											return t.stop()
									}
								}), t)
							}))), i.apply(this, arguments)
						}

						function l(e) {
							r("nulstilFejl");
							var t = e.split(","),
								n = L(t, 2),
								a = n[0],
								o = n[1];
							G["a"].isValidDate(a) || a.includes("-seneste") || r("invalidForm"), u(a, o)
						}

						function u(e, t) {
							r("change", G["a"].isValidDate(e) ? e : "", t)
						}
						return Object(n["u"])(Object(p["a"])(regeneratorRuntime.mark((function t() {
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										if (!e.cvrnummer) {
											t.next = 3;
											break
										}
										return t.next = 3, o(e.cvrnummer);
									case 3:
										V["a"].erBrugerLoggetInd() && a.value.length > 0 && l(a.value[0].value);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})))), {
							datoOptions: a,
							Sprog: x["a"],
							haandterDatovalg: l
						}
					}
				}),
				C = r("d959"),
				H = r.n(C);
			const M = H()(B, [
				["render", S]
			]);
			var U = M,
				$ = Object(n["j"])("hr", {
					class: "my-4"
				}, null, -1);

			function q(e, t, r, a, o, i) {
				var l = Object(n["E"])("Modal");
				return Object(n["w"])(), Object(n["f"])(n["a"], null, [Object(n["j"])("button", {
					type: "button",
					class: "button button-primary",
					"data-module": "modal",
					"data-target": e.modalId
				}, Object(n["H"])(e.$t(e.modalId + "-aaben-button")), 9, ["data-target"]), Object(n["j"])(l, {
					"modal-id": e.modalId,
					"text-prefix": e.modalId,
					"show-footer": !1
				}, {
					default: Object(n["R"])((function() {
						return [Object(n["j"])("div", null, Object(n["H"])(e.$t(e.modalId + "-dansk-label")), 1), Object(n["j"])("button", {
							type: "button",
							class: "button button-primary mt-4 reg-da",
							onClick: t[1] || (t[1] = function(t) {
								return e.produktService.hentRegistreringscertifikat(e.virksomhed.stamdata.cvrnummer, "da", e.binavneTilvalgt)
							})
						}, Object(n["H"])(e.$t(e.modalId + "-dansk-button")), 1), $, Object(n["j"])("div", null, Object(n["H"])(e.$t(e.modalId + "-engelsk-label")), 1), Object(n["j"])("button", {
							type: "button",
							class: "button button-primary mt-4 reg-en",
							onClick: t[2] || (t[2] = function(t) {
								return e.produktService.hentRegistreringscertifikat(e.virksomhed.stamdata.cvrnummer, "en", e.binavneTilvalgt)
							})
						}, Object(n["H"])(e.$t(e.modalId + "-engelsk-button")), 1)]
					})),
					_: 1
				}, 8, ["modal-id", "text-prefix"])], 64)
			}
			var J = r("714b"),
				z = Object(n["k"])({
					name: "DownloadRegistreringscertifikat",
					components: {
						Modal: J["a"]
					},
					data: function() {
						return {
							Produkttype: _["a"],
							produktService: K["a"]
						}
					},
					setup: function(e) {
						var t = f["b"].virksomhed.aktivVirksomhed,
							r = Object(n["d"])((function() {
								return !!(f["b"].virksomhed.virksomhedensProdukter.length > 0 && f["b"].virksomhed.virksomhedensProdukter[0].produktBinavneTilvalg) && f["b"].virksomhed.virksomhedensProdukter[0].produktBinavneTilvalg
							})),
							a = "registreringscertifikat-pdf-modal";
						return {
							modalId: a,
							virksomhed: t,
							binavneTilvalgt: r
						}
					}
				});
			const Q = H()(z, [
				["render", q]
			]);
			var W = Q,
				X = Object(n["k"])({
					name: "Produkt",
					components: {
						DownloadRegistreringscertifikat: W,
						DatoInterval: U,
						Dropdown: E["a"],
						TilfoejTilKurv: O["a"],
						Accordion: m["a"],
						Checkbox: g["a"]
					},
					data: function() {
						return {
							Produkttype: _["a"]
						}
					},
					props: {
						textPrefix: String,
						produkt: {
							type: Object,
							required: !0
						},
						index: {
							type: Number,
							required: !0
						},
						cvrnummer: String
					},
					setup: function(e) {
						var t = Object(n["B"])(!1),
							r = Object(n["B"])(!1),
							a = y["b"].decodeHtml(y["b"].getTextFromKey(e.textPrefix + "-indhold")),
							o = Object(n["d"])((function() {
								return e.produkt.produkttype === _["a"].REGISTRERINGSCERTIFIKAT || e.produkt.produkttype === _["a"].NAVNEAENDRINGSCERTIFIKAT
							})),
							i = Object(n["d"])((function() {
								return (e.produkt.produkttype === _["a"].REGISTRERINGSCERTIFIKAT || e.produkt.produkttype === _["a"].NAVNEAENDRINGSCERTIFIKAT) && f["b"].virksomhed.aktivVirksomhed.udvidedeOplysninger.binavne.length > 0
							})),
							l = Object(n["d"])((function() {
								return e.produkt.produkttype === _["a"].NAVNEAENDRINGSCERTIFIKAT || e.produkt.produkttype === _["a"].VEDTAEGTER || e.produkt.produkttype === _["a"].GENERALFORSAMLINGSPROTOKOLLAT
							})),
							u = Object(n["B"])([{
								value: x["a"].DANSK,
								label: y["b"].getTextFromKey("bestil_dokumenter-sprogvaelger-dansk-option")
							}, {
								value: x["a"].ENGELSK,
								label: y["b"].getTextFromKey("bestil_dokumenter-sprogvaelger-engelsk-option")
							}]),
							d = Object(n["B"])([{
								value: !0,
								label: y["b"].getTextFromKey("bestil_dokumenter-binavne-option")
							}]);

						function c(t) {
							var r = e.produkt;
							r.sprog = t, b(r)
						}

						function s(t) {
							var r = e.produkt;
							r.produktBinavneTilvalg = t, b(r)
						}

						function p(t, r) {
							var n = e.produkt;
							n.dato = t, n.okiSagsnummer = null !== r && void 0 !== r ? r : void 0, b(n)
						}

						function b(t) {
							f["b"].virksomhed.setProdukt({
								key: e.index,
								value: t
							})
						}

						function v() {
							t.value = !1, r.value = !1
						}
						return {
							produktIndhold: a,
							sprogOptions: u,
							Sprog: x["a"],
							produktHarFejl: t,
							visFejl: r,
							harSprogvalg: o,
							harDatovalg: l,
							harBinavnevalg: i,
							binavneOptions: d,
							opdaterSprog: c,
							opdaterDatoOgSagsnummer: p,
							opdaterBinavneTilvalg: s,
							nulstilFejl: v
						}
					}
				});
			const Y = H()(X, [
				["render", k]
			]);
			var Z = Y,
				ee = Object(n["k"])({
					name: "Produkter",
					components: {
						Produkt: Z
					},
					props: {
						textPrefix: String,
						cvrnummer: String
					},
					setup: function() {
						var e = Object(n["d"])((function() {
							return f["b"].virksomhed.virksomhedensProdukter
						}));
						return {
							produkter: e
						}
					}
				});
			const te = H()(ee, [
				["render", v]
			]);
			var re = te,
				ne = Object(n["k"])({
					name: "BestilDokumenter",
					components: {
						Produkter: re
					},
					setup: function() {
						var e = Object(b["c"])(),
							t = e.params.enhedId,
							r = Object(n["B"])(!1),
							a = Object(n["d"])((function() {
								return f["b"].virksomhed.aktivVirksomhed
							})),
							o = "../../enhed/virksomhed/" + t;
						return Object(n["u"])(Object(p["a"])(regeneratorRuntime.mark((function e() {
							return regeneratorRuntime.wrap((function(e) {
								while (1) switch (e.prev = e.next) {
									case 0:
										if (!t) {
											e.next = 7;
											break
										}
										return r.value = !0, e.next = 4, f["b"].virksomhed.hentVirksomhed(t);
									case 4:
										return e.next = 6, f["b"].virksomhed.hentProdukter(t);
									case 6:
										r.value = !1;
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})))), {
							virksomhed: a,
							loading: r,
							enhedsvisningPath: o
						}
					}
				});
			const ae = H()(ne, [
				["render", s]
			]);
			t["default"] = ae
		},
		c459: function(e, t, r) {
			"use strict";
			var n = r("f2bf"),
				a = {
					class: "py-4"
				};

			function o(e, t, r, o, i, l) {
				return Object(n["w"])(), Object(n["f"])("div", a, [Object(n["j"])("button", {
					type: "button",
					class: "button button-primary",
					onClick: t[1] || (t[1] = function() {
						return e.tilfoejTilKurv && e.tilfoejTilKurv.apply(e, arguments)
					}),
					disabled: e.loading,
					"data-cy": e.textPrefix + "-" + e.produkt.produkttype
				}, Object(n["H"])(e.brugerErLoggetInd ? e.$t(e.textPrefix + "-tilfoej_til_kurv-label") : e.$t(e.textPrefix + "-bestil-label")), 9, ["disabled", "data-cy"])])
			}
			var i = r("1da1"),
				l = (r("96cf"), r("ac1f"), r("5319"), r("b850")),
				u = r("1315"),
				d = r("917c"),
				c = r("e939"),
				s = r("8caa"),
				p = r("1133"),
				b = r("04c8"),
				f = r("6c02"),
				v = r("e6e3"),
				j = Object(n["k"])({
					name: "TilfoejTilKurv",
					data: function() {
						return {
							locationHref: window.location.href,
							brugerErLoggetInd: p["a"].erBrugerLoggetInd()
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
						var r = t.emit,
							a = Object(n["d"])((function() {
								return l["b"].virksomhed.aktivVirksomhed
							})),
							o = Object(f["d"])(),
							j = Object(f["c"])(),
							k = Object(n["B"])(!1);

						function m() {
							return O.apply(this, arguments)
						}

						function O() {
							return O = Object(i["a"])(regeneratorRuntime.mark((function t() {
								var n;
								return regeneratorRuntime.wrap((function(t) {
									while (1) switch (t.prev = t.next) {
										case 0:
											if (k.value = !0, p["a"].erBrugerLoggetInd()) {
												t.next = 7;
												break
											}
											return t.next = 4, o.replace({
												path: j.path,
												query: j.query,
												hash: l["b"].accordions.hashString.length > 0 ? l["b"].accordions.hashString + "&signering" : "#signering"
											});
										case 4:
											return p["a"].tjekBrugerLoginOgRedirect(), k.value = !1, t.abrupt("return");
										case 7:
											if (!(l["b"].kurv.aktivAntalProdukter >= 10)) {
												t.next = 12;
												break
											}
											n = {
												textPrefix: "tilfoej_til_kurv-max_produkter",
												notifikationType: b["a"].ERROR
											}, l["b"].toastr.tilfoejNotifikation(n), t.next = 19;
											break;
										case 12:
											if (!e.harFejl) {
												t.next = 16;
												break
											}
											r("visFejl"), t.next = 19;
											break;
										case 16:
											return p["a"].tjekBrugerLogin(), t.next = 19, l["b"].kurv.tilfoejTilKurv(g());
										case 19:
											k.value = !1;
										case 20:
										case "end":
											return t.stop()
									}
								}), t)
							}))), O.apply(this, arguments)
						}

						function g() {
							var t, r, n, o, i, l = {};
							return l.enhedsId = null !== (t = null !== (r = a.value.stamdata.cvrnummer) && void 0 !== r ? r : a.value.stamdata.regnummer) && void 0 !== t ? t : "", l.enhedsNavn = a.value.stamdata.navn, l.produktType = v["b"].getTextFromKey("bestil_dokumenter-".concat(e.produkt.produkttype.toLowerCase(), "-overskrift"), e.produktnavnParams), l.produktPris = e.produkt.pris, l.antal = 1, l.enhedsType = c["a"].VIRKSOMHED, l.produktSprog = null !== (n = e.produkt.sprog) && void 0 !== n ? n : "", l.produktBinavneTilvalg = null !== (o = e.produkt.produktBinavneTilvalg) && void 0 !== o && o, E(l), l.manueltSigneretType = null !== (i = e.produkt.manueltSigneretType) && void 0 !== i ? i : "", e.produkt.produkttype === s["a"].MANUEL_SIGNERING_SELVVALGT && x(l), l
						}

						function E(t) {
							if (e.produkt.produkttype === s["a"].NAVNEAENDRINGSCERTIFIKAT && e.produkt.dato) t.produktStartDato = u["DateTime"].fromFormat(e.produkt.dato, d["a"].datovaelgerFormat).endOf("day").toISO(), t.produktSlutDato = u["DateTime"].local().endOf("day").toISO();
							else if ((e.produkt.produkttype === s["a"].VEDTAEGTER || e.produkt.produkttype === s["a"].GENERALFORSAMLINGSPROTOKOLLAT) && e.produkt.dato) {
								var r;
								t.produktDato = u["DateTime"].fromFormat(e.produkt.dato, d["a"].datovaelgerFormat).endOf("day").toISO(), t.okiSagsnummer = null !== (r = e.produkt.okiSagsnummer) && void 0 !== r ? r : ""
							}
						}

						function x(e) {
							e.openedTaxonomies = l["b"].accordions.aktiveAabneAccordions
						}
						return {
							tilfoejTilKurv: m,
							loading: k
						}
					}
				}),
				k = r("d959"),
				m = r.n(k);
			const O = m()(j, [
				["render", o]
			]);
			t["a"] = O
		},
		ec2b: function(e, t, r) {
			"use strict";
			r("442a")
		}
	}
]);
