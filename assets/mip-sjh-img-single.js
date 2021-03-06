(window.MIP = window.MIP || []).push({
  name: "mip-sjh-img-single",
  func: function () {
    var t = function (t) {
      var e = {};

      function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
          i: o,
          l: !1,
          exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
      }
      return n.m = t, n.c = e, n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: o
        })
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        })
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
          }), 2 & e && "string" != typeof t)
          for (var i in t) n.d(o, i, function (e) {
            return t[e]
          }.bind(null, i));
        return o
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t.default
        } : function () {
          return t
        };
        return n.d(e, "a", e), e
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }, n.p = "https://c.mipcdn.com/static/v2/fc-platform/mip-sjh-img-single-269/", n(n.s = 50)
    }([function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/defineProperty"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_wks"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_an-object"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["@babel/runtime/regenerator/index"]
    }, function (t, e, n) {
      "use strict";
      var o = n(37),
        i = n(2),
        r = n(64),
        a = n(23),
        s = n(17),
        c = n(12),
        l = n(22),
        d = n(10),
        u = Math.min,
        p = [].push,
        f = !d(function () {
          RegExp(4294967295, "y")
        });
      n(11)("split", 2, function (t, e, n, d) {
        var h;
        return h = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (t, e) {
          var i = String(this);
          if (void 0 === t && 0 === e) return [];
          if (!o(t)) return n.call(i, t, e);
          for (var r, a, s, c = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), u = 0, f = void 0 === e ? 4294967295 : e >>> 0, h = new RegExp(t.source, d + "g");
            (r = l.call(h, i)) && !((a = h.lastIndex) > u && (c.push(i.slice(u, r.index)), r.length > 1 && r.index < i.length && p.apply(c, r.slice(1)), s = r[0].length, u = a, c.length >= f));) h.lastIndex === r.index && h.lastIndex++;
          return u === i.length ? !s && h.test("") || c.push("") : c.push(i.slice(u)), c.length > f ? c.slice(0, f) : c
        } : "0".split(void 0, 0).length ? function (t, e) {
          return void 0 === t && 0 === e ? [] : n.call(this, t, e)
        } : n, [function (n, o) {
          var i = t(this),
            r = void 0 == n ? void 0 : n[e];
          return void 0 !== r ? r.call(n, i, o) : h.call(String(i), n, o)
        }, function (t, e) {
          var o = d(h, t, this, e, h !== n);
          if (o.done) return o.value;
          var l = i(t),
            p = String(this),
            m = r(l, RegExp),
            w = l.unicode,
            g = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (f ? "y" : "g"),
            b = new m(f ? l : "^(?:" + l.source + ")", g),
            v = void 0 === e ? 4294967295 : e >>> 0;
          if (0 === v) return [];
          if (0 === p.length) return null === c(b, p) ? [p] : [];
          for (var x = 0, I = 0, P = []; I < p.length;) {
            b.lastIndex = f ? I : 0;
            var y, _ = c(b, f ? p : p.slice(I));
            if (null === _ || (y = u(s(b.lastIndex + (f ? 0 : I)), p.length)) === x) I = a(p, I, w);
            else {
              if (P.push(p.slice(x, I)), P.length === v) return P;
              for (var k = 1; k <= _.length - 1; k++)
                if (P.push(_[k]), P.length === v) return P;
              I = x = y
            }
          }
          return P.push(p.slice(x)), P
        }]
      })
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/web.dom.iterable"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_object-dp"]
    }, function (t, e, n) {
      var o = n(86),
        i = n(18);
      t.exports = function (t) {
        return o(i(t))
      }
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/asyncToGenerator"]
    }, function (t, e, n) {
      "use strict";
      var o = n(2),
        i = n(62),
        r = n(12);
      n(11)("search", 1, function (t, e, n, a) {
        return [function (n) {
          var o = t(this),
            i = void 0 == n ? void 0 : n[e];
          return void 0 !== i ? i.call(n, o) : new RegExp(n)[e](String(o))
        }, function (t) {
          var e = a(n, t, this);
          if (e.done) return e.value;
          var s = o(t),
            c = String(this),
            l = s.lastIndex;
          i(l, 0) || (s.lastIndex = 0);
          var d = r(s, c);
          return i(s.lastIndex, l) || (s.lastIndex = l), null === d ? -1 : d.index
        }]
      })
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_fails"]
    }, function (t, e, n) {
      "use strict";
      n(65);
      var o = n(24),
        i = n(14),
        r = n(10),
        a = n(18),
        s = n(1),
        c = n(22),
        l = s("species"),
        d = !r(function () {
          var t = /./;
          return t.exec = function () {
            var t = [];
            return t.groups = {
              a: "7"
            }, t
          }, "7" !== "".replace(t, "$<a>")
        }),
        u = function () {
          var t = /(?:)/,
            e = t.exec;
          t.exec = function () {
            return e.apply(this, arguments)
          };
          var n = "ab".split(t);
          return 2 === n.length && "a" === n[0] && "b" === n[1]
        }();
      t.exports = function (t, e, n) {
        var p = s(t),
          f = !r(function () {
            var e = {};
            return e[p] = function () {
              return 7
            }, 7 != "" [t](e)
          }),
          h = f ? !r(function () {
            var e = !1,
              n = /a/;
            return n.exec = function () {
              return e = !0, null
            }, "split" === t && (n.constructor = {}, n.constructor[l] = function () {
              return n
            }), n[p](""), !e
          }) : void 0;
        if (!f || !h || "replace" === t && !d || "split" === t && !u) {
          var m = /./ [p],
            w = n(a, p, "" [t], function (t, e, n, o, i) {
              return e.exec === c ? f && !i ? {
                done: !0,
                value: m.call(e, n, o)
              } : {
                done: !0,
                value: t.call(n, e, o)
              } : {
                done: !1
              }
            }),
            g = w[0],
            b = w[1];
          o(String.prototype, t, g), i(RegExp.prototype, p, 2 == e ? function (t, e) {
            return b.call(t, this, e)
          } : function (t) {
            return b.call(t, this)
          })
        }
      }
    }, function (t, e, n) {
      "use strict";
      var o = n(66),
        i = RegExp.prototype.exec;
      t.exports = function (t, e) {
        var n = t.exec;
        if ("function" == typeof n) {
          var r = n.call(t, e);
          if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
          return r
        }
        if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
        return i.call(t, e)
      }
    }, function (t, e, n) {
      "use strict";
      var o = n(2),
        i = n(17),
        r = n(23),
        a = n(12);
      n(11)("match", 1, function (t, e, n, s) {
        return [function (n) {
          var o = t(this),
            i = void 0 == n ? void 0 : n[e];
          return void 0 !== i ? i.call(n, o) : new RegExp(n)[e](String(o))
        }, function (t) {
          var e = s(n, t, this);
          if (e.done) return e.value;
          var c = o(t),
            l = String(this);
          if (!c.global) return a(c, l);
          var d = c.unicode;
          c.lastIndex = 0;
          for (var u, p = [], f = 0; null !== (u = a(c, l));) {
            var h = String(u[0]);
            p[f] = h, "" === h && (c.lastIndex = r(l, i(c.lastIndex), d)), f++
          }
          return 0 === f ? null : p
        }]
      })
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_hide"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_descriptors"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_global"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_to-length"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_defined"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_has"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_export"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_is-object"]
    }, function (t, e, n) {
      "use strict";
      var o = n(38),
        i = RegExp.prototype.exec,
        r = String.prototype.replace,
        a = i,
        s = function () {
          var t = /a/,
            e = /b*/g;
          return i.call(t, "a"), i.call(e, "a"), 0 !== t.lastIndex || 0 !== e.lastIndex
        }(),
        c = void 0 !== /()??/.exec("")[1];
      (s || c) && (a = function (t) {
        var e, n, a, l, d = this;
        return c && (n = new RegExp("^" + d.source + "$(?!\\s)", o.call(d))), s && (e = d.lastIndex), a = i.call(d, t), s && a && (d.lastIndex = d.global ? a.index + a[0].length : e), c && a && a.length > 1 && r.call(a[0], n, function () {
          for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (a[l] = void 0)
        }), a
      }), t.exports = a
    }, function (t, e, n) {
      "use strict";
      var o = n(67)(!0);
      t.exports = function (t, e, n) {
        return e + (n ? o(t, e).length : 1)
      }
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_redefine"]
    }, function (t, e, n) {
      "use strict";
      var o = n(78),
        i = n(77),
        r = n(42),
        a = n(7);
      t.exports = n(76)(Array, "Array", function (t, e) {
        this._t = a(t), this._i = 0, this._k = e
      }, function () {
        var t = this._t,
          e = this._k,
          n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
      }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries")
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_property-desc"]
    }, function (t, e) {
      t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_shared-key"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_to-integer"]
    }, function (t, e) {
      var n = {}.toString;
      t.exports = function (t) {
        return n.call(t).slice(8, -1)
      }
    }, function (t, e, n) {
      var o = n(20),
        i = n(87),
        r = n(7),
        a = n(43),
        s = n(79);
      o(o.S, "Object", {
        getOwnPropertyDescriptors: function (t) {
          for (var e, n, o = r(t), c = a.f, l = i(o), d = {}, u = 0; l.length > u;) void 0 !== (n = c(o, e = l[u++])) && s(d, e, n);
          return d
        }
      })
    }, function (t, e, n) {
      var o = n(51);
      "string" == typeof o && (o = [
        [t.i, o, ""]
      ]), o.locals && (t.exports = o.locals);
      (0, n(33).default)("549f47f8", o, !0, {})
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["vue-style-loader/lib/addStylesClient"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["css-loader/lib/css-base"]
    }, function (t, e, n) {
      var o = n(20),
        i = n(10),
        r = n(18),
        a = /"/g,
        s = function (t, e, n, o) {
          var i = String(r(t)),
            s = "<" + e;
          return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + i + "</" + e + ">"
        };
      t.exports = function (t, e) {
        var n = {};
        n[t] = e(s), o(o.P + o.F * i(function () {
          var e = "" [t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3
        }), "String", n)
      }
    }, function (t, e, n) {
      var o = n(16),
        i = n(61),
        r = n(6).f,
        a = n(45).f,
        s = n(37),
        c = n(38),
        l = o.RegExp,
        d = l,
        u = l.prototype,
        p = /a/g,
        f = /a/g,
        h = new l(p) !== p;
      if (n(15) && (!h || n(10)(function () {
          return f[n(1)("match")] = !1, l(p) != p || l(f) == f || "/a/i" != l(p, "i")
        }))) {
        l = function (t, e) {
          var n = this instanceof l,
            o = s(t),
            r = void 0 === e;
          return !n && o && t.constructor === l && r ? t : i(h ? new d(o && !r ? t.source : t, e) : d((o = t instanceof l) ? t.source : t, o && r ? c.call(t) : e), n ? this : u, l)
        };
        for (var m = function (t) {
            t in l || r(l, t, {
              configurable: !0,
              get: function () {
                return d[t]
              },
              set: function (e) {
                d[t] = e
              }
            })
          }, w = a(d), g = 0; w.length > g;) m(w[g++]);
        u.constructor = l, l.prototype = u, n(24)(o, "RegExp", l)
      }
      n(58)("RegExp")
    }, function (t, e, n) {
      var o = n(21),
        i = n(30),
        r = n(1)("match");
      t.exports = function (t) {
        var e;
        return o(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == i(t))
      }
    }, function (t, e, n) {
      "use strict";
      var o = n(2);
      t.exports = function () {
        var t = o(this),
          e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
      }
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["regenerator-runtime/runtime"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_to-object"]
    }, function (t, e, n) {
      var o = n(6).f,
        i = n(19),
        r = n(1)("toStringTag");
      t.exports = function (t, e, n) {
        t && !i(t = n ? t : t.prototype, r) && o(t, r, {
          configurable: !0,
          value: e
        })
      }
    }, function (t, e) {
      t.exports = {}
    }, function (t, e, n) {
      var o = n(82),
        i = n(26),
        r = n(7),
        a = n(81),
        s = n(19),
        c = n(80),
        l = Object.getOwnPropertyDescriptor;
      e.f = n(15) ? l : function (t, e) {
        if (t = r(t), e = a(e, !0), c) try {
          return l(t, e)
        } catch (t) {}
        if (s(t, e)) return i(!o.f.call(t, e), t[e])
      }
    }, function (t, e, n) {
      var o = n(19),
        i = n(7),
        r = n(85)(!1),
        a = n(28)("IE_PROTO");
      t.exports = function (t, e) {
        var n, s = i(t),
          c = 0,
          l = [];
        for (n in s) n != a && o(s, n) && l.push(n);
        for (; e.length > c;) o(s, n = e[c++]) && (~r(l, n) || l.push(n));
        return l
      }
    }, function (t, e, n) {
      var o = n(44),
        i = n(27).concat("length", "prototype");
      e.f = Object.getOwnPropertyNames || function (t) {
        return o(t, i)
      }
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["vue-loader/lib/runtime/componentNormalizer"]
    }, function (t, e, n) {
      ! function (e, n) {
        t.exports = n()
      }(window, function () {
        return function (t) {
          var e = {};

          function n(o) {
            if (e[o]) return e[o].exports;
            var i = e[o] = {
              i: o,
              l: !1,
              exports: {}
            };
            return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
          }
          return n.m = t, n.c = e, n.d = function (t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
              enumerable: !0,
              get: o
            })
          }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
              value: "Module"
            }), Object.defineProperty(t, "__esModule", {
              value: !0
            })
          }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
              }), 2 & e && "string" != typeof t)
              for (var i in t) n.d(o, i, function (e) {
                return t[e]
              }.bind(null, i));
            return o
          }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
              return t.default
            } : function () {
              return t
            };
            return n.d(e, "a", e), e
          }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
          }, n.p = "../../", n(n.s = 168)
        }({
          0: function (t, e, n) {
            "use strict";
            n.d(e, "g", function () {
              return o
            }), n.d(e, "f", function () {
              return i
            }), n.d(e, "d", function () {
              return r
            }), n.d(e, "e", function () {
              return a
            }), n.d(e, "b", function () {
              return s
            }), n.d(e, "a", function () {
              return c
            }), n.d(e, "c", function () {
              return l
            });
            var o = "am",
              i = {
                onSuccess: "onSuccess",
                onError: "onError",
                onChange: "onChange",
                onValidateFail: "onValidateFail"
              },
              r = "LAYER_CONTROLLER",
              a = "mip-sjh-common-utils",
              s = "59100-1",
              c = "layerUpgrade",
              l = "59100_params"
          },
          1: function (t, e, n) {
            "use strict";

            function o(t, e, n, o, i, r, a, s) {
              var c, l = "function" == typeof t ? t.options : t;
              if (e && (l.render = e, l.staticRenderFns = n, l._compiled = !0), o && (l.functional = !0), r && (l._scopeId = "data-v-" + r), a ? (c = function (t) {
                  (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
                }, l._ssrRegister = c) : i && (c = s ? function () {
                  i.call(this, this.$root.$options.shadowRoot)
                } : i), c)
                if (l.functional) {
                  l._injectStyles = c;
                  var d = l.render;
                  l.render = function (t, e) {
                    return c.call(e), d(t, e)
                  }
                } else {
                  var u = l.beforeCreate;
                  l.beforeCreate = u ? [].concat(u, c) : [c]
                } return {
                exports: t,
                options: l
              }
            }
            n.d(e, "a", function () {
              return o
            })
          },
          130: function (t, e, n) {
            "use strict";
            var o = n(37);
            n.n(o).a
          },
          168: function (t, e, n) {
            t.exports = n(79)
          },
          37: function (t, e, n) {},
          79: function (t, e, n) {
            "use strict";
            n.r(e);
            var o = n(0),
              i = [8, 14, 15, 269, 275];
            var r = ["gss0", "bdstatic"],
              a = {
                PNG: "png",
                JPG: "jpg",
                JPEG: "jpeg",
                WEBP: "webp"
              },
              s = "".concat(o.g, "-image");

            function c(t, e) {
              t = t.split("@");
              var n = function (t) {
                  return t.split(",").filter(function (t) {
                    return t.indexOf("_") > -1
                  }).map(function (t) {
                    return t.split("_")
                  }).reduce(function (t, e) {
                    return Object.assign(t, function (t, e, n) {
                      return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                      }) : t[e] = n, t
                    }({}, e[0], e[1]))
                  }, {})
                },
                o = Object.assign(n(t[1]), n(e));
              return "".concat(t[0], "@").concat(Object.keys(o).map(function (t) {
                return "".concat(t, "_").concat(o[t])
              }).join(","))
            }
            var l = {
                props: {
                  customClass: {
                    type: String,
                    default: ""
                  },
                  imgSrc: {
                    type: String,
                    required: !0,
                    defalut: ""
                  },
                  imgLayout: {
                    type: String,
                    default: ""
                  },
                  imgWebp: {
                    type: Boolean,
                    default: !0
                  },
                  imgQInfo: {
                    type: String,
                    default: "q_80"
                  },
                  imgWidth: {
                    type: Number,
                    required: !1,
                    default: void 0
                  },
                  imgHeight: {
                    type: Number,
                    required: !1,
                    default: void 0
                  },
                  imgPopup: {
                    type: Boolean,
                    default: !1
                  },
                  imgAlt: {
                    type: String,
                    default: ""
                  },
                  imgCls: {
                    type: String,
                    default: ""
                  },
                  imgStyle: {
                    type: Object,
                    default: function () {}
                  },
                  isCrop: {
                    type: Boolean,
                    default: !1
                  }
                },
                data: function () {
                  return {
                    isHitExp: function () {
                      var t = MIP.getData("appid");
                      return i.indexOf(+t) > -1
                    }()
                  }
                },
                computed: {
                  wrapperClasses: function () {
                    return ["".concat(s, "-wrapper"), this.customClass]
                  },
                  webpSrc: function () {
                    return this.handleImgUrl(this.imgSrc, t)
                  },
                  qSrc: function () {
                    var t = this.imgQInfo,
                      e = this.imgSrc;
                    return !this.isBlackUrl && t && this.isQSrc(e) ? (e = this.handleImgUrl(e, this.getQCallBackFormat(e)), this.isHitExp ? e : this.handleImgUrl(e, t)) : e
                  },
                  isBlackUrl: function () {
                    var t = this;
                    return !!r.filter(function (e) {
                      return t.imgSrc.indexOf(e) > -1
                    }).length
                  },
                  showWebp: function () {
                    return !this.isBlackUrl && this.imgWebp && this.isWebpSrc(this.imgSrc)
                  }
                },
                methods: {
                  handleImgUrl: function (t, e) {
                    return e ? t.indexOf("@") < 0 ? "".concat(t, "@").concat(e) : c(t, e) : t
                  },
                  getExt: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                      e = t.lastIndexOf("."),
                      n = t.substr(e + 1);
                    return n.indexOf("@") > -1 ? n.split("@")[0] : n
                  },
                  getQCallBackFormat: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                      e = this.getExt(t);
                    return this.isCallBackFormat(e) ? "f_".concat(e.toLowerCase()) : ""
                  },
                  isCallBackFormat: function (t) {
                    return -1 !== [a.PNG].indexOf(t.toLowerCase())
                  },
                  isWebpSrc: function (t) {
                    var e = this.getExt(t);
                    return -1 !== [a.PNG, a.JPG, a.JPEG].indexOf(e.toLowerCase())
                  },
                  isQSrc: function (t) {
                    var e = this.getExt(t);
                    return -1 !== [a.PNG, a.JPG, a.JPEG].indexOf(e.toLowerCase())
                  },
                  clickImgHandler: function () {
                    this.$emit("clickImg")
                  }
                }
              },
              d = (n(130), n(1)),
              u = Object(d.a)(l, function () {
                var t = this,
                  e = t.$createElement,
                  n = t._self._c || e;
                return n("div", {
                  class: t.wrapperClasses,
                  on: {
                    click: t.clickImgHandler
                  }
                }, [t._t("m-antman-mip-image", [n("mip-img", {
                  class: t.imgCls,
                  style: t.imgStyle,
                  attrs: {
                    prerender: "",
                    src: t.qSrc,
                    layout: t.imgLayout,
                    width: t.imgWidth,
                    height: t.imgHeight,
                    popup: t.imgPopup,
                    alt: t.imgAlt
                  }
                }, [t._t("m-antman-mip-img-source", [t.showWebp ? n("source", {
                  attrs: {
                    srcset: t.webpSrc,
                    type: "image/webp"
                  }
                }) : t._e()])], 2)])], 2)
              }, [], !1, null, "c3ef3152", null);
            e.default = u.exports
          }
        })
      })
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/createClass"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["@babel/runtime/helpers/esm/classCallCheck"]
    }, function (t, e, n) {
      "use strict";
      n.r(e);
      n(31), n(5), n(25);
      var o = n(3),
        i = n.n(o),
        r = n(0),
        a = n.n(r),
        s = (n(39), n(8)),
        c = n.n(s),
        l = "mip-sjh-common",
        d = {
          UTILS: "".concat(l, "-utils")
        },
        u = ("".concat(l, "-event-cache"), "".concat(l, "-download-appData"), "".concat(l, "-download-process"), 0),
        p = function (t, e) {
          if (window.MIP.sandbox.MIP.getData("env") && "editor" === window.MIP.sandbox.MIP.getData("env").platform) return !0;
          if (!t || !e) return !1;
          var n = e.height || 700;
          return t.top - e.top < n + 500
        },
        f = function (t) {
          var e = t + "";
          return isNaN(t) && (e = e.slice(0, e.indexOf("px"))), "".concat(e * (1 / 16), "rem")
        },
        h = function () {
          return window.MIP.sandbox.MIP.getData("env") && "editor" === window.MIP.sandbox.MIP.getData("env").platform
        },
        m = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16,
            n = parseFloat(t);
          return isNaN(n) ? t : n / e + "rem"
        },
        w = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 16;
          for (var n in t) t[n] = m(t[n], e);
          return t
        },
        g = function () {
          for (var t = 1e7 * Math.random(); t < 1e7;) t <<= 1;
          return t
        },
        b = (n(13), n(4), n(9), function (t) {
          var e = {};
          if (!t) return e;
          var n = t;
          return t.indexOf("?") > -1 && (n = t.split("?")[1]), n.split("&").forEach(function (t) {
            var n = t.split("=");
            e[n[0]] = n[1]
          }), e
        }),
        v = function (t) {
          for (var e = [], n = 0; n < t; n++) e.push("0123456789abcdef".charAt(Math.floor(16 * Math.random())));
          return e.join("")
        },
        x = (n(36), function (t) {
          var e, n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
            o = new RegExp("(^|/?|&)" + t + "=([^&]*)(&|$)", "i");
          try {
            e = window.MIP.sandbox.window.top.location.search.substr(1).match(n) || window.MIP.sandbox.window.top.location.hash.substr(1).match(o)
          } catch (t) {
            e = window.MIP.sandbox.window.location.search.substr(1).match(n) || window.MIP.sandbox.window.location.hash.substr(1).match(o)
          }
          return null != e ? unescape(e[2]) : null
        });
      var I = function (t, e, n) {
          return window.MIP.sandbox.MIP.Services.getServicePromise(d.UTILS).then(function (o) {
            return o.sdk.mAjax(t, e, n)
          })
        },
        P = function () {
          var t = !1;
          return !(window.MIP.sandbox.window.navigator && window.MIP.sandbox.window.navigator.userAgent && -1 !== window.MIP.sandbox.window.navigator.userAgent.indexOf("swan-baiduboxapp")) || 1 != +x("medical_xcx") && 1 != +localStorage.getItem("medical_xcx") || (localStorage.setItem("medical_xcx", 1), t = !0), t
        },
        y = function (t) {
          var e = "MEDICAL_XCX_LOCAL_" + t,
            n = x(t) || localStorage.getItem(e) || "";
          return localStorage.setItem(e, n), n
        },
        _ = function (t) {
          try {
            var e = window.MIP.sandbox.document.cookie || "",
              n = {};
            return e && e.split(";").forEach(function (t) {
              var e = t.split("=");
              e.length > 1 && (n[e[0].trim()] = e[1].trim())
            }), n[t]
          } catch (t) {
            return null
          }
        },
        k = function (t) {
          var e = y("imlpUrl") || "";
          t.xst = y("xst") || "", t.appName = "每日医晓", t.appKey = "Gz7Grjwr0GhpGSDIhtUk6RB1EiBCRmHK", t.referrer = "", t.url = window.MIP.sandbox.window.location.href, t.cuid = y("cuid") || "", t.title = window.MIP.sandbox.document.title, t.scene = y("scene") || "", t.baiduid = y("baiduId") || _("BAIDUID") || "", t.bduss = _("BDUSS") || "", t.imlpPath = "/wjz/medical/imlp/imlp", t.imlpUrl = decodeURIComponent(e) || ""
        },
        M = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          k(t)
        },
        S = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          localStorage.setItem("MEDICAL_XCX_LOCAL_imlpUrl", ""), k(t)
        },
        C = (n(57), n(56), n(55), n(49)),
        O = n.n(C),
        j = n(48),
        T = n.n(j);

      function E(t) {
        var e = window.MIP.sandbox.MIP.getData("siteConfig");
        return e && e.pageStyle && e.pageStyle.theme ? e.pageStyle.theme[t] : null
      }
      var L = function (t) {
          window.MIP.sandbox.MIP.Services.getServicePromise(d.UTILS).then(function (e) {
            var n = e.getIsHitExp;
            t((void 0 === n ? function () {
              return !1
            } : n)("59100-1", "layerUpgrade", "59100_params"))
          }).catch(function () {
            t(!1)
          })
        },
        B = function () {
          return !(void 0 === window.MIP.sandbox.window || !window.MIP.sandbox.window) && (window.MIP.sandbox.window.location.href.indexOf("baiduApp") > -1 || window.MIP.sandbox.window.navigator.userAgent.indexOf("baidu") > -1)
        };

      function A(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), n.push.apply(n, o)
        }
        return n
      }

      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? A(Object(n), !0).forEach(function (e) {
            a()(t, e, n[e])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          })
        }
        return t
      }
      var N = "is-default-consult",
        R = "isDefaultConsult",
        H = "small",
        U = "close",
        W = {
          HALF_SCREEN: "half_screen",
          NEW_PAGE: "new_page"
        },
        F = {
          HALF_SCREEN: "jmy-half-screen",
          NEW_PAGE: "jmy-new-page"
        },
        K = {
          thirdTrack: !0,
          pageId: window.MIP.sandbox.MIP.getData("pageid")
        },
        q = {
          type: 1,
          zIndex: 1e5,
          multiIM: !0,
          switch: {
            phoneLayer: !1,
            unreaessage: !1
          }
        },
        z = {
          close: {
            disable: !0,
            bottom: 0
          },
          small: {
            disable: !0,
            bottom: 0
          },
          open: {
            disable: !0,
            bottom: 0
          }
        },
        G = function (t) {
          var e;
          return e = {}, a()(e, U, D(D({}, q), {}, {
            initState: U,
            stateConfig: z
          })), a()(e, H, D(D({}, q), {}, {
            initDelay: t,
            initState: H,
            stateConfig: z
          })), a()(e, "open", D(D({}, q), {}, {
            initState: "open",
            stateConfig: z
          })), e
        },
        J = function () {
          var t = window.MIP.sandbox.MIP.getData("extData");
          return t && t.consultStyle
        },
        $ = "jmyHalfScreenConsult",
        V = {
          ROOT: "imlp-consult-blank-black-blank-root",
          CONTENT: "imlp-consult-blank-black-blank-content",
          CLOSE: "imlp-consult-blank-black-blank-close"
        },
        Y = {
          BLACK_BLANK: {
            CLOSE: "sjh-consult-black-notice-close",
            SHOW: "sjh-consult-black-notice-show",
            AUTO_HIDDEN: "sjh-consult-black-notice-auto-hidden"
          },
          IMLP: {
            CONSULT_CLICK: "sjh-consult-blank-imlp-consult-click",
            NOTICE_CLICK: "sjh-consult-blank-imlp-black-notice-click",
            SCREEN: "sjh-consult-blank-imlp-half-screen-interaction"
          },
          HALF_SCREEN_INTERACTIVE: {
            OPEN: "sjh-consult-blank-imlp-half-scree-open",
            CLOSE: "sjh-consult-blank-imlp-half-scree-close",
            SMALL: "sjh-consult-blank-imlp-half-scree-small"
          },
          AUTO_HALF_SCREEN: "sjh-consult-blank-imlp-auto-half-screen"
        },
        X = window.MIP.sandbox.MIP.Services.getServicePromise(d.UTILS),
        Q = 3e3,
        Z = 5e3,
        tt = 0,
        et = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.imUrl,
            n = b(void 0 === e ? "" : e);
          return !!(t.imid || n.imid)
        },
        nt = function () {
          function t(e) {
            O()(window.MIP.sandbox.this(this), t);
            var n = J() || e.pcImlpOptions,
              o = n.type,
              i = n.autoOpen,
              r = n.stayTime,
              a = g(),
              s = 0,
              c = F.NEW_PAGE;
            o === W.HALF_SCREEN && (c = F.HALF_SCREEN, s = i ? G(1e3 * r)[H] : G(0)[U]);
            var l = {
              root: "".concat(V.ROOT),
              content: "".concat(V.CONTENT),
              close: "".concat(V.CLOSE)
            };
            window.MIP.sandbox.this(this).options = Object.assign(K, {
              openType: s,
              jointExpTag: c,
              theme: E("--groot-ui-color-brand-6") ? {
                wholeColor: E("--groot-ui-color-brand-6")
              } : void 0
            }), window.MIP.sandbox.this(this).bingEventFlag = !1, window.MIP.sandbox.this(this).linkOpen = !1, window.MIP.sandbox.this(this).currentConsult = {}, window.MIP.sandbox.this(this).imParams = {}, window.MIP.sandbox.this(this).defaultConsult = e.defaultConsult || {}, window.MIP.sandbox.this(this).randomNum = a, window.MIP.sandbox.this(this).blackBlankFlag = {
              root: {
                class: l.root,
                selector: ".".concat(l.root)
              },
              content: {
                class: l.content,
                selector: ".".concat(l.content)
              },
              close: {
                class: l.close,
                selector: ".".concat(l.close)
              }
            }, window.MIP.sandbox.this(this).blackBlankContent = {
              stack: [],
              timer: {
                open: null,
                close: null,
                all: null,
                quit: !1
              }
            }, window.MIP.sandbox.this(this).closeBlackBlankTime = {
              user: 0
            }, window.MIP.sandbox.this(this).initErrorLogStatus = !1
          }
          return T()(t, [{
            key: "imlpInitSdk",
            value: function (t) {
              var e = window.MIP.sandbox.this(this);
              try {
                window.MIP.sandbox.window.ImlpSdk.on("ready", function () {
                  var n = e.defaultConsult.imParamKey;
                  n ? window.MIP.sandbox.window.ImlpSdk.init(t, e.options, String(n)) : window.MIP.sandbox.window.ImlpSdk.init(t, e.options), e.bingEventFlag || (e.bingEventFlag = !0, e.bindImlpEventListeners())
                })
              } catch (e) {
                if (window.MIP.sandbox.this(this).initErrorLogStatus) return;
                window.MIP.sandbox.this(this).initErrorLogStatus = !0;
                var n = window.MIP.sandbox.this(this).defaultConsult.generalParams,
                  o = !!window.MIP.sandbox.window.ImlpSdk;
                X.then(function (e) {
                  e.sdk.logActions.addCustomErrorLog(D(D({}, n), {}, {
                    errorKey: "consult-imlp-init-error",
                    userExtra: {
                      imData: t,
                      imlpSdkOnReady: o
                    }
                  }))
                }), console.error("imlpInit Error: ", e)
              }
            }
          }, {
            key: "imlpInit",
            value: function (t) {
              var e = window.MIP.sandbox.this(this),
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = arguments.length > 2 ? arguments[2] : void 0;
              if (mt(t)) {
                var i = String(o);
                gt(t, n).then(function (t) {
                  e.imParams[i] = t;
                  var n = a()({}, i, {
                    imParam: bt(t)
                  });
                  e.imlpInitSdk(n)
                })
              }
            }
          }, {
            key: "multiImlpInit",
            value: function (t) {
              var e = {};
              for (var n in t)
                if (t.hasOwnProperty(n)) {
                  var o = t[n],
                    i = o.imParam,
                    r = o.options;
                  window.MIP.sandbox.this(this).imParams[n] = i, e[n] = {
                    imParam: bt(i),
                    options: r
                  }
                } window.MIP.sandbox.this(this).imlpInitSdk(e)
            }
          }, {
            key: "getImParam",
            value: function (t) {
              return window.MIP.sandbox.this(this).imParams[t] || {}
            }
          }, {
            key: "getDefaultConsult",
            value: function () {
              return window.MIP.sandbox.this(this).defaultConsult
            }
          }, {
            key: "getDefaultConsultDomInfo",
            value: function (t) {
              var e = {};
              ["url", "guide", "guideShow", "__id__", "__type__", "__name__", "__title__", "solution-id", "solution-type"].forEach(function (n) {
                var o = n.replace(/-|_/g, "");
                e[o] = t.getAttribute(n)
              });
              var n = e.url,
                o = void 0 === n ? "" : n,
                i = e.guide,
                r = void 0 === i ? {} : i,
                a = e.guideShow,
                s = void 0 !== a && a,
                c = e.id,
                l = void 0 === c ? "" : c,
                d = e.type,
                u = void 0 === d ? "" : d,
                p = e.name,
                f = void 0 === p ? "" : p,
                h = e.title,
                m = void 0 === h ? "" : h,
                w = e.solutionid,
                g = void 0 === w ? "" : w,
                b = e.solutiontype,
                v = void 0 === b ? "" : b;
              return {
                url: o,
                guide: JSON.parse(r) || {},
                guideShow: s,
                generalParams: {
                  id: l,
                  type: u,
                  name: f,
                  title: m
                },
                solutionId: g,
                solutionType: v
              }
            }
          }, {
            key: "setDefaultConsult",
            value: function () {
              var t = window.MIP.sandbox.this(this),
                e = window.MIP.sandbox.document.getElementsByTagName("mip-sjh-consult-blank"),
                n = window.MIP.sandbox.document.getElementsByTagName("mip-sjh-trans-fixed-bar-blank-common"),
                o = window.MIP.sandbox.document.getElementsByTagName("mip-sjh-clue-bar"),
                i = {},
                r = window.MIP.sandbox.this(this).randomNum;
              [].slice.call(e).forEach(function (e) {
                "true" === e.getAttribute(N) && (i = D(D({}, t.getDefaultConsultDomInfo(e)), {}, {
                  imParamKey: r
                }))
              }), Object.keys(i).length || (n && n.length ? [].slice.call(n).forEach(function (t) {
                JSON.parse(t.getAttribute("consult") || []).forEach(function (t, e) {
                  t[R] && (i = D(D({}, t), {}, {
                    guide: {
                      show: t.guideShow,
                      text: ""
                    },
                    imParamKey: "".concat(r, "-").concat(e)
                  }))
                })
              }) : o && o.length && [].slice.call(o).forEach(function (t, e) {
                var n = JSON.parse(t.getAttribute("datasource") || []).filter(function (t) {
                  return function (t) {
                    return "consult" === t.type && t.data[R]
                  }(t)
                });
                if (n && n.length) {
                  var o = n[0].data;
                  i = D(D({}, o), {}, {
                    guide: {
                      show: o.guideShow,
                      text: ""
                    },
                    imParamKey: "".concat(r, "-").concat(e)
                  })
                }
              })), window.MIP.sandbox.this(this).defaultConsult = i
            }
          }, {
            key: "initDefaultConsult",
            value: function () {
              0 === Object.keys(window.MIP.sandbox.this(this).defaultConsult).length && window.MIP.sandbox.this(this).setDefaultConsult();
              var t = window.MIP.sandbox.this(this).getDefaultConsult(),
                e = t.url,
                n = t.imParamKey,
                o = t.guide,
                i = void 0 === o ? {} : o,
                r = i.show,
                a = i.text;
              window.MIP.sandbox.this(this).currentConsult = D({}, window.MIP.sandbox.this(this).getDefaultConsult()), r && a && window.MIP.sandbox.this(this).pushBlankContentStack(a), window.MIP.sandbox.this(this).imlpInit(e, {}, n), window.MIP.sandbox.this(this).blackBlanktTimeStrategies(Q)
            }
          }, {
            key: "tranToclient",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1242;
              return window.MIP.sandbox.document.body.clientWidth * t / e
            }
          }, {
            key: "getFixDomBottom",
            value: function (t) {
              var e = t.querySelector("mip-sjh-module");
              if (e) {
                var n = JSON.parse(e && e.getAttribute("fixed-child-properties") || {});
                if (n && n.fixed) return window.MIP.sandbox.this(this).tranToclient(n.fixed.bottom, 375)
              }
              return 0
            }
          }, {
            key: "getFixBottomDomSpacing",
            value: function () {
              var t = window.MIP.sandbox.this(this).tranToclient(240);
              if (h()) return "80px";
              var e = window.MIP.sandbox.document.getElementsByClassName("iphonex-adaper-content mip-element");
              if (e && e[0]) {
                var n = e[0].offsetHeight;
                t = window.MIP.sandbox.this(this).getFixDomBottom(e[0]) + n + window.MIP.sandbox.this(this).tranToclient(60)
              }
              return "".concat(t, "px")
            }
          }, {
            key: "bindBlackBlankEvent",
            value: function () {
              var t = window.MIP.sandbox.this(this),
                e = window.MIP.sandbox.this(this).blackBlankFlag,
                n = e.content,
                o = e.close;
              window.MIP.sandbox.document.querySelector(n.selector).addEventListener("click", function () {
                t.closeBackBlank();
                var e = D(D({}, t.currentConsult), {}, {
                  compTargetId: Y.IMLP.NOTICE_CLICK
                });
                t.callImlp(e)
              }), window.MIP.sandbox.document.querySelector(o.selector).addEventListener("click", function () {
                var e = D(D({}, t.currentConsult), {}, {
                  compTargetId: Y.BLACK_BLANK.CLOSE
                });
                t.closeBlackBlankTime.user += 1, t.commonComClickLog(e), t.closeBackBlank(Y.BLACK_BLANK.CLOSE)
              })
            }
          }, {
            key: "createBlackBlank",
            value: function () {
              var t = window.MIP.sandbox.this(this).getFixBottomDomSpacing(),
                e = window.MIP.sandbox.this(this).blackBlankFlag,
                n = e.content,
                o = e.close,
                i = e.root,
                r = '\n            <div\n                class="'.concat(i.class, ' iphonex-adaper-content"\n                style="position: fixed; bottom: ').concat(t, '; left: 0.97rem; display: none; z-index: 10000"\n            >\n                <div\n                    style="display: flex; align-items: center; background: rgba(0, 0, 0, .8);\n                    color: #fff; height: 2.72rem; width: 21.52rem;\n                    border-radius: 0.32rem; box-shadow: 0 0.04rem 0.56rem 0 rgba(0,0,0,0.30);"\n                >\n                    <span\n                        class="icon iconfont iconkefu"\n                        style="padding-left: 0.78rem; width: 1.05rem; height: 1.13rem"\n                    ></span>\n                    <span\n                        class="').concat(n.class, '"\n                        style="padding-left: 0.56rem; width: 16.87rem; font-size: 0.85rem;\n                        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"\n                    ></span>\n                    <span\n                        class="').concat(o.class, ' icon iconfont iconguanbi4"\n                        style="font-size: 0.65rem; opacity: 0.7; padding-left: 0.68rem"\n                    ></span>\n                </div>\n            </div>\n        '),
                a = window.MIP.sandbox.document.createElement("div");
              a.innerHTML = r, h() ? window.MIP.sandbox.document.querySelector(".canvas-module_edit-area").appendChild(a) : (window.MIP.sandbox.document.body.appendChild(a), window.MIP.sandbox.this(this).bindBlackBlankEvent())
            }
          }, {
            key: "setBlackBlankContent",
            value: function (t) {
              var e = window.MIP.sandbox.document.querySelector(window.MIP.sandbox.this(this).blackBlankFlag.content.selector);
              e && (e.innerHTML = t)
            }
          }, {
            key: "closeBackBlank",
            value: function (t) {
              var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = window.MIP.sandbox.document.querySelector(window.MIP.sandbox.this(this).blackBlankFlag.root.selector);
              if (n && "block" === n.style.display && (n.style.display = "none", e && L(function (t) {
                  t && (function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4,
                      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                      n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    window.MIP.sandbox.MIP.Services.getServicePromise("LAYER_CONTROLLER").then(function (o) {
                      o.closeGlobalModal(t, e, n)
                    })
                  }(), function (t) {
                    window.MIP.sandbox.MIP.Services.getServicePromise("LAYER_CONTROLLER").then(function (e) {
                      e.releaseLayerLock(t)
                    })
                  }("consult-black-message"))
                })), t) {
                var o = D(D({}, window.MIP.sandbox.this(this).currentConsult), {}, {
                  compTargetId: t
                });
                window.MIP.sandbox.this(this).commonComClickLog(o)
              }
            }
          }, {
            key: "showBlackBlank",
            value: function (t) {
              var e = window.MIP.sandbox.this(this),
                n = h() ? t : window.MIP.sandbox.this(this).blackBlankContent.stack.pop(),
                o = window.MIP.sandbox.this(this).closeBlackBlankTime.user;
              if (n && !(o > 2)) {
                !window.MIP.sandbox.document.querySelector(window.MIP.sandbox.this(this).blackBlankFlag.root.selector) && window.MIP.sandbox.this(this).createBlackBlank(), window.MIP.sandbox.this(this).blackBlankContent.stack = [], window.MIP.sandbox.this(this).setBlackBlankContent(n);
                var i = D(D({}, window.MIP.sandbox.this(this).currentConsult), {}, {
                  compTargetId: Y.BLACK_BLANK.SHOW
                });
                window.MIP.sandbox.this(this).commonComClickLog(i), L(function (t) {
                  var o = window.MIP.sandbox.document.querySelector(e.blackBlankFlag.root.selector);
                  t && o && "block" !== o.style.display ? B() ? o && (o.style.display = "block") && function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    window.MIP.sandbox.MIP.Services.getServicePromise("LAYER_CONTROLLER").then(function (e) {
                      e.appendToLayer(t)
                    })
                  }({
                    dom: o,
                    level: 4
                  }) : window.MIP.sandbox.MIP.Services.getServicePromise("LAYER_CONTROLLER").then(function (t) {
                    if (t.checkShowMipLayer()) o && o.style && (o.style.display = "block", function (t) {
                      window.MIP.sandbox.MIP.Services.getServicePromise("LAYER_CONTROLLER").then(function (e) {
                        e.lockLayer(t)
                      })
                    }(), t.appendToLayer({
                      dom: o,
                      level: 4
                    }));
                    else {
                      e.pushBlankContentStack(n);
                      var i = e.blackBlankContent.timer,
                        r = i.open,
                        a = i.close;
                      e.blackBlankContent.timer.open = clearTimeout(r), e.blackBlankContent.timer.close = clearTimeout(a)
                    }
                  }) : o && (o.style.display = "block")
                })
              }
            }
          }, {
            key: "commonComClickLog",
            value: function (t) {
              var e = t.url,
                n = t.generalParams,
                o = t.compTargetId;
              X.then(function (t) {
                var i = t.sdk,
                  r = i.configOfLogAction.actionIdForDeveloper,
                  a = D(D({}, n), {}, {
                    actionId: r.SITE_COMP_CLICK,
                    compTargetId: o
                  });
                e && (a.userExtra = {
                  target_info: e
                }), i.logActions.addUserDefinedLog(a)
              })
            }
          }, {
            key: "imlpLinkLog",
            value: function (t) {
              var e = t.url,
                n = t.solutionId,
                o = t.solutionType,
                i = t.imParamKey,
                r = t.generalParams,
                a = t.compTargetId;
              if (e) {
                if (mt(e)) {
                  var s = window.MIP.sandbox.this(this).getImParam(i),
                    c = s.adviceType,
                    l = s.imlpAccessId;
                  if (!l) return;
                  return void X.then(function (t) {
                    t.sdk.logActions.addImlpLog(D(D({}, r), {}, {
                      target: e,
                      solutionId: n,
                      solutionType: o,
                      compTargetId: a,
                      adviceType: c,
                      imlpId: l
                    }))
                  })
                }
                var d = {
                  url: e,
                  generalParams: r,
                  compTargetId: "sjh-consult-blank-link"
                };
                window.MIP.sandbox.this(this).commonComClickLog(d)
              }
            }
          }, {
            key: "callImlp",
            value: function (t) {
              var e = window.MIP.sandbox.this(this),
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
              try {
                var o = b(location.search).xst || window.MIP.sandbox.MIP.getData("xstAdReferer"),
                  i = {
                    ext: {
                      url: location.href,
                      title: window.MIP.sandbox.document.title
                    },
                    xst: o
                  };
                window.MIP.sandbox.window.ImlpSdk.on("ready", function () {
                  var o = e.getImParam(t.imParamKey);
                  if (o.channel || (o.channel = xt()), et(o)) {
                    var r = JSON.parse(localStorage.getItem("userTrack")) || {};
                    window.MIP.sandbox.window.ImlpSdk.track(r, !0), e.currentConsult = Object.assign({}, t), e.imlpLinkLog(t), window.MIP.sandbox.window.ImlpSdk.openIM(o, i, e.options)
                  } else n()
                })
              } catch (t) {
                n(), console.error("callImlp Error: ", t)
              }
            }
          }, {
            key: "releaseUnReadInfo",
            value: function (t) {
              var e = window.MIP.sandbox.this(this);
              X.then(function (n) {
                var o = n.eventManager,
                  i = {
                    countNume: t > 99 ? "99+" : String(t),
                    imParamKey: e.currentConsult.imParamKey
                  };
                o.trigger("unreadSubscription", i)
              })
            }
          }, {
            key: "pushBlankContentStack",
            value: function (t) {
              window.MIP.sandbox.this(this).blackBlankContent.stack = window.MIP.sandbox.this(this).blackBlankContent.stack.concat(t)
            }
          }, {
            key: "blackBlanktTimeStrategies",
            value: function (t, e) {
              var n = window.MIP.sandbox.this(this);
              if (h()) window.MIP.sandbox.this(this).showBlackBlank(e);
              else {
                var o = window.MIP.sandbox.this(this).blackBlankContent.timer,
                  i = o.open,
                  r = o.close;
                window.MIP.sandbox.this(this).blackBlankContent.timer.open = clearTimeout(i), window.MIP.sandbox.this(this).blackBlankContent.timer.close = clearTimeout(r), window.MIP.sandbox.this(this).blackBlankContent.timer.quit || (window.MIP.sandbox.this(this).blackBlankContent.timer.open = setTimeout(function () {
                  n.showBlackBlank(), n.blackBlankContent.timer.close = setTimeout(function () {
                    n.closeBackBlank(Y.BLACK_BLANK.AUTO_HIDDEN), n.blackBlanktTimeStrategies(5e3)
                  }, Z)
                }, t))
              }
            }
          }, {
            key: "clearPushInfo",
            value: function () {
              window.MIP.sandbox.this(this).linkOpen && (window.MIP.sandbox.this(this).blackBlankContent.stack = []), window.MIP.sandbox.this(this).blackBlankContent.timer.open = clearTimeout(window.MIP.sandbox.this(this).blackBlankContent.timer.open), window.MIP.sandbox.this(this).blackBlankContent.timer.close = clearTimeout(window.MIP.sandbox.this(this).blackBlankContent.timer.close), window.MIP.sandbox.this(this).closeBackBlank("", !1), window.MIP.sandbox.this(this).releaseUnReadInfo(0)
            }
          }, {
            key: "bindImlpEventListeners",
            value: function () {
              var t = window.MIP.sandbox.this(this);
              window.MIP.sandbox.window.ImlpSdk.on("imlpState", function (e) {
                4 === e && (t.linkOpen = !0, t.clearPushInfo())
              }), window.MIP.sandbox.window.ImlpSdk.on("unreadMessage", function (e) {
                var n = e.count,
                  o = void 0 === n ? 0 : n,
                  i = e.unread,
                  r = void 0 === i ? [] : i;
                t.releaseUnReadInfo(o);
                var a = r.map(function (t) {
                  var e = t.content;
                  return "image" === t.content_type && (e = "[图片]"), e
                });
                t.pushBlankContentStack(a), t.blackBlankContent.timer.close && t.blackBlanktTimeStrategies(tt)
              }), window.MIP.sandbox.window.ImlpSdk.on("inviteMessage", function (e) {
                t.inviteMessage = e && e.content, e && e.content && t.pushBlankContentStack(e.content)
              }), window.MIP.sandbox.window.ImlpSdk.on("popupStateChange", function (e) {
                var n = D({}, t.currentConsult);
                if (e.state === H && (n.compTargetId = Y.HALF_SCREEN_INTERACTIVE.SMALL, t.clearPushInfo()), "open" === e.state && (n.compTargetId = Y.HALF_SCREEN_INTERACTIVE.OPEN, t.clearPushInfo()), e.state === U && (t.blackBlanktTimeStrategies(Z), n.compTargetId = Y.HALF_SCREEN_INTERACTIVE.CLOSE), "initPopup" === e.trigger) return n.compTargetId = Y.IMLP.SCREEN, void t.imlpLinkLog(n);
                t.commonComClickLog(n)
              }), B() || X.then(function (e) {
                e.eventManager.addHandler("release_lock", function (e) {
                  "consult-black-message" !== e && setTimeout(function () {
                    t.blackBlanktTimeStrategies(tt)
                  }, 1e3)
                })
              })
            }
          }, {
            key: "clearAllTimer",
            value: function () {
              var t = window.MIP.sandbox.this(this);
              window.MIP.sandbox.this(this).blackBlankContent.timer.all = setTimeout(function () {
                var e = t.blackBlankContent.timer,
                  n = e.open,
                  o = e.close,
                  i = e.all;
                clearTimeout(n), clearTimeout(o), clearTimeout(i), t.blackBlankContent.timer.quit = !0
              }, 18e5)
            }
          }]), t
        }(),
        ot = function () {
          var t = J();
          return Boolean(t && Object.keys(t).length)
        },
        it = $,
        rt = Y,
        at = function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (window.MIP.sandbox.window[$]) return window.MIP.sandbox.window[$];
          window.MIP.sandbox.window[$] = new nt(t), window.MIP.sandbox.MIP.getData("isServerPrerender") || function (t) {
            window.MIP.sandbox.MIP.Services.getServicePromise(d.UTILS).then(function (e) {
              var n = e.sdk,
                o = e.clientPrerender;
              if (window.MIP.sandbox.MIP.getData("clientPrerenderSmFlow")) o.pageActivePromise().then(function () {
                t()
              });
              else if (n.prerender.globalData.isInSm) {
                var i = n.prerender,
                  r = i.isPrerendering,
                  a = i.isPageShow;
                r() ? window.MIP.sandbox.window.addEventListener("message", function (e) {
                  a(e) && t()
                }) : t()
              } else t()
            })
          }(function () {
            return h() || (window.MIP.sandbox.window[$].initDefaultConsult(), window.MIP.sandbox.window[$].clearAllTimer()), !window.MIP.sandbox.document.querySelector(window.MIP.sandbox.window[$].blackBlankFlag.root.selector) && window.MIP.sandbox.window[$].createBlackBlank(), window.MIP.sandbox.window[$]
          })
        };

      function st(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), n.push.apply(n, o)
        }
        return n
      }

      function ct(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? st(Object(n), !0).forEach(function (e) {
            a()(t, e, n[e])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : st(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          })
        }
        return t
      }
      var lt, dt = {
          0: "hao",
          1: "hao",
          2: "hao",
          3: "feed",
          4: "fc",
          5: "baiyi",
          6: "feed",
          7: "other",
          255: "other"
        },
        ut = "xyl_cip",
        pt = "cip",
        ft = function (t, e) {
          return (lt ? Promise.resolve(lt) : window.MIP.sandbox.window.MIP.Services.getServicePromise("mip-sjh-common-utils").then(function (t) {
            var e = t.eventManager;
            return lt = e
          })).then(function (n) {
            n.trigger(t, e)
          })
        },
        ht = {
          thirdTrack: !0,
          openType: 0,
          pageId: window.MIP.sandbox.MIP.getData("pageid")
        },
        mt = function (t) {
          return t.indexOf("urlType") > -1 || t.indexOf("ada.baidu.com") > -1
        },
        wt = function (t, e) {
          var n = b(decodeURIComponent(window.MIP.sandbox.window.location.search)),
            o = JSON.parse(n.cWParams || "{}") || {},
            i = o.path,
            r = o.scene,
            a = o.indexPath,
            s = window.MIP.sandbox.MIP.getData("pageid"),
            c = "".concat(window.MIP.sandbox.window.location.origin).concat(window.MIP.sandbox.window.location.pathname),
            l = "".concat(i, "?pageId=").concat(s, "&url=").concat(encodeURIComponent(c)),
            d = window.MIP.sandbox.MIP.getData("pageInfo"),
            u = {
              appKey: d ? d.xcxAppKey : "",
              scene: r,
              path: encodeURIComponent(l),
              indexPath: a
            };
          return fetch("/tpsp-gtr/rest/shopInfo", {
            method: "POST",
            body: JSON.stringify({
              shopId: t,
              ucId: e
            }),
            headers: {
              "Content-Type": "application/json;charset=UTF-8"
            }
          }).then(function (t) {
            return t.json()
          }).then(function (t) {
            var e = t.data.appInfo || {},
              n = e.title,
              o = void 0 === n ? "" : n,
              i = e.pic,
              r = void 0 === i ? "" : i,
              a = e.ucPhone,
              s = void 0 === a ? "" : a,
              c = e.ucLandPage,
              l = void 0 === c ? "" : c;
            return u = ct(ct({}, u), {}, {
              title: o,
              landPageUrl: l,
              contactNumber: s,
              logo: r
            })
          }).catch(function () {
            return u = ct(ct({}, n), {}, {
              title: "",
              landPageUrl: "",
              contactNumber: "",
              logo: ""
            })
          })
        },
        gt = function () {
          var t = c()(i.a.mark(function t(e, n) {
            var o, r, a, s, c, l, d, u, p, f, h, m, w, g, P, y, _, k, M, S;
            return i.a.wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  if (o = window.MIP.sandbox.MIP.getData("pageInfo") && window.MIP.sandbox.MIP.getData("pageInfo").llp || 0, r = 0, a = n || {}, s = 270, c = 287, l = 269, d = e.split("?")[0], u = e.split("?")[1], p = b(u), f = (new Date).getTime() + v(23), h = d + "?imid=" + p.imid, m = window.MIP.sandbox.MIP.getData("appid"), w = window.MIP.sandbox.MIP.getData("userid"), g = window.MIP.sandbox.MIP.getData("pageid"), P = a.shopid, y = b(location.search), _ = y.ch, k = {
                      level1: p.exUserId,
                      level2: p.siteId,
                      level3: p.groupId,
                      adviceType: p.adviceType,
                      im_type: p.adviceType,
                      imlpAccessId: f,
                      channel: _ ? dt[_] || "other" : "",
                      imUrl: h,
                      appid: m,
                      ucid: w,
                      fid: y.fid || "",
                      ch: y.ch || ""
                    }, m !== s && m !== c && (m !== l || +o === r) || !P) {
                    t.next = 27;
                    break
                  }
                  return t.next = 21, wt(P, w);
                case 21:
                  return (M = t.sent).shopid = P, M.clientSource = g, M.pageId = g, k.setting = M, t.abrupt("return", Promise.resolve(k));
                case 27:
                  if (_) {
                    t.next = 30;
                    break
                  }
                  return S = {
                    stat: x("stat") || "",
                    path: "/cip-golfr/ChannelService/getChannelValue"
                  }, t.abrupt("return", I("/cip-golfr/ChannelService/getChannelValue", {
                    method: "POST",
                    query: S,
                    timer: 2e3
                  }, {
                    cache: "no-cache"
                  }).then(function (t) {
                    if (200 === t.status && t.data) {
                      var e = t.data.channelType;
                      k.channel = void 0 !== e ? dt[e] || "other" : ""
                    }
                    return k
                  }).catch(function (t) {
                    return console.error("get channel error: ", t), k
                  }));
                case 30:
                  return t.abrupt("return", Promise.resolve(k));
                case 31:
                case "end":
                  return t.stop()
              }
            }, t)
          }));
          return function (e, n) {
            return t.apply(window.MIP.sandbox.this(this), arguments)
          }
        }(),
        bt = function (t) {
          if (!t) return {};
          var e = ct({}, t);
          return 15 === e.appid ? e.appid = ut : e.appid = pt, e
        },
        vt = function (t) {
          var e = {};
          for (var n in t)
            if (t.hasOwnProperty(n)) {
              var o = t[n],
                i = o.imParam,
                r = o.options;
              e[n] = {
                imParam: bt(i),
                options: r
              }
            } window.MIP.sandbox.window.ImlpSdk.on("ready", function () {
            P() ? (M(ht), window.MIP.sandbox.window.ImlpSdk.init(e, ht)) : window.MIP.sandbox.window.ImlpSdk.init(e)
          })
        },
        xt = function () {
          var t = window.MIP.sandbox.window.document.referrer.match(/^https:\/\/m.baidu.com\/baidu.php\?[sc.|url=].*/i),
            e = x("bd_vid");
          if (t) return localStorage.removeItem("imChannel"), localStorage.setItem("imChannel", "fc"), "fc";
          var n = localStorage.getItem("imChannel");
          return e ? "fc" : n || "other"
        },
        It = function (t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {};
          try {
            var n = b(location.search).xst || window.MIP.sandbox.MIP.getData("xstAdReferer"),
              o = {
                ext: {
                  url: location.href,
                  title: window.MIP.sandbox.document.title
                },
                xst: n
              };
            if (t.channel || (t.channel = xt()), !et(t)) return;
            window.MIP.sandbox.window.ImlpSdk.on("ready", function () {
              var e = JSON.parse(localStorage.getItem("userTrack")) || {};
              P() && S(ht), window.MIP.sandbox.window.ImlpSdk.track(e, !0), window.MIP.sandbox.window.ImlpSdk.openIM(t, o, ht)
            })
          } catch (t) {
            e(), console.error("callImlp Error: ", t)
          }
        },
        Pt = function () {
          return window.MIP.sandbox.window.navigator && window.MIP.sandbox.window.navigator.userAgent && -1 !== window.MIP.sandbox.window.navigator.userAgent.indexOf("swan-baiduboxapp")
        },
        yt = window.MIP.sandbox.MIP.Services.getServicePromise(d.UTILS);
      var _t = function (t, e) {
          yt.then(function (n) {
            var o = n.sdk;
            !Pt() || e ? (o.swanSDK({
              api: "navigateTo",
              apiParams: {
                url: e
              },
              h5Callback: function () {
                window.MIP.sandbox.window.location.href = o.getJumpUrl({
                  targetUrl: t
                })
              }
            }), o.swanSDK({
              api: "switchTab",
              apiParams: {
                url: e
              },
              h5Callback: function () {}
            })) : window.MIP.sandbox.window.location.href = o.getJumpUrl({
              targetUrl: t
            })
          })
        },
        kt = n(47),
        Mt = n.n(kt);
      n(54);

      function St(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), n.push.apply(n, o)
        }
        return n
      }

      function Ct(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2 ? St(Object(n), !0).forEach(function (e) {
            a()(t, e, n[e])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : St(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          })
        }
        return t
      }
      var Ot = it,
        jt = rt,
        Tt = {
          name: "MipSjhImgSingle",
          components: {
            "am-image": Mt.a
          },
          props: {
            __id__: {
              type: String,
              required: !0
            },
            __type__: {
              type: String,
              required: !0
            },
            __name__: {
              type: String,
              required: !0
            },
            __title__: {
              type: String,
              required: !0
            },
            __type: {
              type: String,
              default: ""
            },
            backgroundColor: {
              type: String,
              default: ""
            },
            url: {
              type: String,
              default: ""
            },
            appUrl: {
              type: Object,
              default: function () {
                return {
                  show: !1,
                  schemaUrl: ""
                }
              }
            },
            xcxPath: {
              type: String,
              default: ""
            },
            solutionId: {
              type: String,
              default: ""
            },
            solutionType: {
              type: String,
              default: ""
            },
            title: {
              type: String,
              default: ""
            },
            image: {
              type: String,
              default: ""
            },
            customImgStyle: {
              type: Object,
              default: function () {
                return {}
              }
            },
            text: {
              type: String,
              default: ""
            },
            fontFamily: {
              type: Array,
              default: function () {
                return []
              }
            },
            mCoordinates: {
              type: String,
              default: "leftTop"
            },
            mPosX: {
              type: Object,
              default: function () {
                return {
                  changeable: !0,
                  value: 0
                }
              }
            },
            mPosY: {
              type: Object,
              default: function () {
                return {
                  changeable: !0,
                  value: 0
                }
              }
            },
            mSizeWidth: {
              type: Object,
              default: function () {
                return {}
              }
            },
            mSizeHeight: {
              type: Object,
              default: function () {
                return {}
              }
            },
            adaptationType: {
              type: String,
              default: ""
            },
            extra: {
              type: Object,
              default: function () {
                return {}
              }
            },
            useCustomImlpSdkCall: {
              type: Boolean,
              default: !1
            },
            action: {
              type: Object,
              default: null
            },
            fixHeight: {
              type: Boolean,
              default: !1
            }
          },
          data: function () {
            var t = window.MIP.sandbox.this(this).__id__,
              e = window.MIP.sandbox.this(this).__type__,
              n = window.MIP.sandbox.this(this).__name__,
              o = window.MIP.sandbox.this(this).__title__;
            return {
              isIOS: window.MIP.sandbox.MIP.util.platform.isIOS(),
              SJH_UTILS: window.MIP.sandbox.MIP.Services.getServicePromise(d.UTILS),
              generalParams: {
                id: t,
                type: e,
                name: n,
                title: o
              },
              generalParamsVaild: window.MIP.sandbox.this(this).__id__ && window.MIP.sandbox.this(this).__type__ && window.MIP.sandbox.this(this).__name__ && window.MIP.sandbox.this(this).__title__,
              imParam: {},
              randomPrefix: g()
            }
          },
          beforeMount: function () {
            var t = c()(i.a.mark(function t() {
              var e, n, o, r, s, c, l = window.MIP.sandbox.this(this);
              return i.a.wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (e = window.MIP.sandbox.this(this).url, n = window.MIP.sandbox.this(this).extra, o = window.MIP.sandbox.this(this).randomPrefix, r = window.MIP.sandbox.this(this).solutionId, s = window.MIP.sandbox.this(this).solutionType, c = window.MIP.sandbox.this(this).useCustomImlpSdkCall, !mt(e)) {
                      t.next = 11;
                      break
                    }
                    if (!c) {
                      t.next = 6;
                      break
                    }
                    return t.next = 5, ft("imlpInit", {
                      url: e,
                      solutionId: r,
                      solutionType: s
                    });
                  case 5:
                    return t.abrupt("return");
                  case 6:
                    if (!ot()) {
                      t.next = 10;
                      break
                    }
                    return at(), window.MIP.sandbox.window[Ot].imlpInit(e, n, o), t.abrupt("return");
                  case 10:
                    gt(e, n).then(function (t) {
                      l.imParam = t;
                      var e = a()({}, l.randomPrefix, {
                        imParam: t,
                        options: ht
                      });
                      vt(e)
                    });
                  case 11:
                  case "end":
                    return t.stop()
                }
              }, t, window.MIP.sandbox.this(this))
            }));
            return function () {
              return t.apply(window.MIP.sandbox.this(this), arguments)
            }
          }(),
          computed: {
            rootWrapStyle: function () {
              var t = window.MIP.sandbox.this(this).title,
                e = {
                  backgroundColor: window.MIP.sandbox.this(this).backgroundColor,
                  height: "100%"
                };
              return t && (e.padding = f(15)), e
            },
            imgStyle: function () {
              var t = w(window.MIP.sandbox.this(this).customImgStyle),
                e = window.MIP.sandbox.window.location.href.indexOf("singleWhite") > -1;
              return (window.MIP.sandbox.this(this).fixHeight || e) && !window.MIP.sandbox.this(this).title && !window.MIP.sandbox.this(this).text && window.MIP.sandbox.this(this).mSizeHeight && window.MIP.sandbox.this(this).mSizeHeight.value && (t.height = f(window.MIP.sandbox.this(this).mSizeHeight.value)), t
            },
            imgWithoutTitleClass: function () {
              return ["image-style-default", "pcToMipImgSingleWithoutTitle" === window.MIP.sandbox.this(this).__type ? "pc-to-mip-img-without-title" : "", "" !== window.MIP.sandbox.this(this).adaptationType ? "adaptation-type-".concat(window.MIP.sandbox.this(this).adaptationType) : ""]
            },
            mipImgClasses: function () {
              return ["image-site", a()({}, "".concat("image-site", "-adaptation-").concat(window.MIP.sandbox.this(this).adaptationType), "" !== window.MIP.sandbox.this(this).adaptationType)]
            },
            adaptationTypeClasses: function () {
              return "" !== window.MIP.sandbox.this(this).adaptationType ? "adaptation-type-".concat(window.MIP.sandbox.this(this).adaptationType) : ""
            }
          },
          prerenderAllowed: function (t, e) {
            return p(t, e)
          },
          methods: {
            handleLog: function (t) {
              var e = window.MIP.sandbox.this(this),
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
              try {
                window.MIP.sandbox.MIP.Services.getServicePromise("mip-sjh-basis-download-utils").then(function (o) {
                  var i = o.customizeLog,
                    r = Ct({
                      target: e.isIOS ? "ios" : "android",
                      clickTarget: e.isIOS ? window.MIP.sandbox.iosUrl : window.MIP.sandbox.docUrl,
                      type: "app_call_trans",
                      status_info: "",
                      compDownloadType: u
                    }, void 0 !== n ? {
                      cbStatus: n
                    } : "");
                  i({
                    actionId: t,
                    compTargetId: "mip-sjh-img-single",
                    generalParams: e.generalParams,
                    userExtra: r
                  })
                })
              } catch (t) {
                console.log("log error", t)
              }
            },
            handleClick: function () {
              var t = window.MIP.sandbox.this(this);
              if ("pcToMipImgSingleWithoutTitle" !== window.MIP.sandbox.this(this).__type) {
                var e = window.MIP.sandbox.this(this).generalParamsVaild,
                  n = window.MIP.sandbox.this(this).generalParams,
                  o = window.MIP.sandbox.this(this).appUrl;
                if (o.show && o.schemaUrl) {
                  var i, r = o.schemaUrl;
                  e && window.MIP.sandbox.this(this).SJH_UTILS.then(function (t) {
                    var e = t.sdk;
                    i = e.configOfLogAction.actionIdForDeveloper, e.logActions.addUserDefinedLog(Ct(Ct({}, n), {}, {
                      actionId: i.SITE_COMP_CLICK,
                      compTargetId: "deeplink",
                      userExtra: {
                        target_info: r
                      }
                    }))
                  }), window.MIP.sandbox.MIP.Services.getServicePromise("mip-sjh-basis-download-utils").then(function (e) {
                    e.downSdk.Base.deeplinkWithCb(r, "", "").then(function (e) {
                      t.handleLog(i.SITE_BAR_CLICK, e.status), +e.status && t.goToWebUrl()
                    })
                  }).catch(function () {
                    t.goToWebUrl()
                  })
                } else window.MIP.sandbox.this(this).goToWebUrl()
              } else window.MIP.sandbox.this(this).action && window.MIP.sandbox.this(this).$emit(window.MIP.sandbox.this(this).action.actionType, window.MIP.sandbox.this(this).action)
            },
            goToWebUrl: function () {
              var t = c()(i.a.mark(function t() {
                var e, n, o, r, a, s, c, l, d, u, p, f;
                return i.a.wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      if (e = window.MIP.sandbox.this(this).generalParamsVaild, n = window.MIP.sandbox.this(this).generalParams, o = window.MIP.sandbox.this(this).url, r = window.MIP.sandbox.this(this).xcxPath, a = window.MIP.sandbox.this(this).solutionId, s = window.MIP.sandbox.this(this).solutionType, c = window.MIP.sandbox.this(this).randomPrefix, l = window.MIP.sandbox.this(this).useCustomImlpSdkCall, !o) {
                        t.next = 20;
                        break
                      }
                      if (!mt(o)) {
                        t.next = 18;
                        break
                      }
                      if (!l) {
                        t.next = 7;
                        break
                      }
                      return t.next = 6, ft("imlpOpen", {
                        url: o,
                        generalParams: n
                      });
                    case 6:
                      return t.abrupt("return");
                    case 7:
                      if (!ot()) {
                        t.next = 11;
                        break
                      }
                      return d = {
                        url: o,
                        imParamKey: c,
                        solutionId: a,
                        solutionType: s,
                        generalParams: n,
                        compTargetId: jt.IMLP.CONSULT_CLICK
                      }, window.MIP.sandbox.window[Ot].callImlp(d), t.abrupt("return");
                    case 11:
                      if (u = window.MIP.sandbox.this(this).imParam, p = u.adviceType, f = u.imlpAccessId) {
                        t.next = 15;
                        break
                      }
                      return t.abrupt("return");
                    case 15:
                      return e && window.MIP.sandbox.this(this).SJH_UTILS.then(function (t) {
                        t.sdk.logActions.addImlpLog(Ct(Ct({}, n), {}, {
                          solutionId: a,
                          solutionType: s,
                          target: o,
                          compTargetId: "imlp",
                          adviceType: p,
                          imlpId: f
                        }))
                      }), It(u), t.abrupt("return");
                    case 18:
                      e && window.MIP.sandbox.this(this).SJH_UTILS.then(function (t) {
                        var e = t.sdk,
                          i = e.configOfLogAction.actionIdForDeveloper;
                        e.logActions.addUserDefinedLog(Ct(Ct({}, n), {}, {
                          actionId: i.SITE_COMP_CLICK,
                          compTargetId: "link",
                          userExtra: {
                            target_info: o
                          }
                        }))
                      }), _t(o, r);
                    case 20:
                    case "end":
                      return t.stop()
                  }
                }, t, window.MIP.sandbox.this(this))
              }));
              return function () {
                return t.apply(window.MIP.sandbox.this(this), arguments)
              }
            }()
          }
        },
        Et = (n(52), n(46)),
        Lt = n.n(Et)()(Tt, function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", {
            staticClass: "mip-sjh-single-image",
            style: t.rootWrapStyle,
            on: {
              click: t.handleClick
            }
          }, [n("mip-sjh-imlp-sdk"), t._v(" "), n("mip-sjh-basis-download"), t._v(" "), "two" === t.__type ? n("div", {
            class: "image-style-two " + t.adaptationTypeClasses
          }, [t.title ? n("mip-sjh-text", {
            staticClass: "image-title",
            attrs: {
              text: t.title,
              "font-family": t.fontFamily,
              "is-replace-tag": !0
            }
          }) : t._e(), t._v(" "), n("am-image", {
            attrs: {
              "img-src": t.image,
              "img-style": t.imgStyle,
              "img-cls": t.mipImgClasses,
              "img-layout": "container"
            }
          }), t._v(" "), t.text ? n("mip-sjh-text", {
            staticClass: "image-text",
            attrs: {
              text: t.text,
              "font-family": t.fontFamily,
              "is-replace-tag": !0
            }
          }) : t._e()], 1) : n("div", {
            class: t.imgWithoutTitleClass
          }, [t.title ? n("mip-sjh-text", {
            staticClass: "image-title",
            attrs: {
              text: t.title,
              "font-family": t.fontFamily,
              "is-replace-tag": !0
            }
          }) : t._e(), t._v(" "), n("am-image", {
            attrs: {
              "img-src": t.image,
              "img-style": t.imgStyle,
              "img-cls": t.mipImgClasses,
              "img-layout": "container"
            }
          })], 1)], 1)
        }, [], !1, null, "06535de4", null);
      e.default = Lt.exports
    }, function (t, e, n) {
      (t.exports = n(34)(!1)).push(["8fd9ef08ac7649dd", ".mip-sjh-single-image[data-v-06535de4]{color:#333;font-size:1.125rem;line-height:1.5;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%}.mip-sjh-single-image .image-style-default[data-v-06535de4]{width:100%;height:100%}.mip-sjh-single-image .image-style-default .image-title[data-v-06535de4]{font-size:1rem;padding-bottom:.625rem}.mip-sjh-single-image .image-style-two[data-v-06535de4]{position:relative;width:100%;height:100%}.mip-sjh-single-image .image-style-two .image-title[data-v-06535de4]{font-size:1rem;padding-bottom:.625rem}.mip-sjh-single-image .image-style-two .image-text[data-v-06535de4]{position:absolute;bottom:0;padding-top:.3125rem;font-size:.875rem;line-height:1.6}.mip-sjh-single-image[data-v-06535de4] .image-site{vertical-align:middle;pointer-events:none;overflow:hidden}.mip-sjh-single-image .pc-to-mip-img-without-title[data-v-06535de4]{padding:.9375rem .9375rem 0;width:21.5rem;height:auto}.mip-sjh-single-image .pc-to-mip-img-without-title[data-v-06535de4] .image-site{border-radius:.5rem}.mip-sjh-single-image[data-v-06535de4] .image-site-adaptation-height{height:100%;overflow:hidden}.mip-sjh-single-image[data-v-06535de4] .image-site-adaptation-height img{width:auto;height:100%;min-width:auto}.mip-sjh-single-image[data-v-06535de4] .image-site-adaptation-overspread,.mip-sjh-single-image[data-v-06535de4] .image-site-adaptation-overspread img{height:100%;width:100%}.mip-sjh-single-image .adaptation-type-height[data-v-06535de4] .am-image-wrapper,.mip-sjh-single-image .adaptation-type-overspread[data-v-06535de4] .am-image-wrapper{height:100%}", ""])
    }, function (t, e, n) {
      "use strict";
      n(32)
    }, function (t, e, n) {
      (t.exports = n(34)(!1)).push(["f2daee23a06ae524", ".font-size-14[data-v-c3ef3152]{font-size:.875rem}.font-color-999[data-v-c3ef3152]{color:#999}[data-v-c3ef3152]{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent}body[data-v-c3ef3152],html[data-v-c3ef3152]{margin:0;padding:0;font-family:Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;height:100%;font-size:.875rem}a[data-v-c3ef3152]{text-decoration:none}a[data-v-c3ef3152]:focus,input[data-v-c3ef3152]:focus{outline:none}a[data-v-c3ef3152]:hover{-webkit-tap-highlight-color:transparent}h1[data-v-c3ef3152],h2[data-v-c3ef3152],h3[data-v-c3ef3152],h4[data-v-c3ef3152],li[data-v-c3ef3152],p[data-v-c3ef3152],ul[data-v-c3ef3152]{margin:0;padding:0}li[data-v-c3ef3152],ul[data-v-c3ef3152]{list-style:none}h1[data-v-c3ef3152],h2[data-v-c3ef3152],h3[data-v-c3ef3152],h4[data-v-c3ef3152],h5[data-v-c3ef3152],h6[data-v-c3ef3152]{font-weight:400}em[data-v-c3ef3152],i[data-v-c3ef3152]{font-style:400}.am-image-wrapper[data-v-c3ef3152]{display:block}", ""])
    }, function (t, e, n) {
      var o = n(53);
      "string" == typeof o && (o = [
        [t.i, o, ""]
      ]), o.locals && (t.exports = o.locals);
      (0, n(33).default)("6939cff9", o, !0, {})
    }, function (t, e, n) {
      "use strict";
      n(35)("small", function (t) {
        return function () {
          return t(this, "small", "", "")
        }
      })
    }, function (t, e, n) {
      "use strict";
      var o = n(2),
        i = n(40),
        r = n(17),
        a = n(29),
        s = n(23),
        c = n(12),
        l = Math.max,
        d = Math.min,
        u = Math.floor,
        p = /\$([$&`']|\d\d?|<[^>]*>)/g,
        f = /\$([$&`']|\d\d?)/g,
        h = function (t) {
          return void 0 === t ? t : String(t)
        };
      n(11)("replace", 2, function (t, e, n, m) {
        return [function (o, i) {
          var r = t(this),
            a = void 0 == o ? void 0 : o[e];
          return void 0 !== a ? a.call(o, r, i) : n.call(String(r), o, i)
        }, function (t, e) {
          var i = m(n, t, this, e);
          if (i.done) return i.value;
          var u = o(t),
            p = String(this),
            f = "function" == typeof e;
          f || (e = String(e));
          var g = u.global;
          if (g) {
            var b = u.unicode;
            u.lastIndex = 0
          }
          for (var v = [];;) {
            var x = c(u, p);
            if (null === x) break;
            if (v.push(x), !g) break;
            "" === String(x[0]) && (u.lastIndex = s(p, r(u.lastIndex), b))
          }
          for (var I = "", P = 0, y = 0; y < v.length; y++) {
            x = v[y];
            for (var _ = String(x[0]), k = l(d(a(x.index), p.length), 0), M = [], S = 1; S < x.length; S++) M.push(h(x[S]));
            var C = x.groups;
            if (f) {
              var O = [_].concat(M, k, p);
              void 0 !== C && O.push(C);
              var j = String(e.apply(void 0, O))
            } else j = w(_, p, k, M, C, e);
            k >= P && (I += p.slice(P, k) + j, P = k + _.length)
          }
          return I + p.slice(P)
        }];

        function w(t, e, o, r, a, s) {
          var c = o + t.length,
            l = r.length,
            d = f;
          return void 0 !== a && (a = i(a), d = p), n.call(s, d, function (n, i) {
            var s;
            switch (i.charAt(0)) {
              case "$":
                return "$";
              case "&":
                return t;
              case "`":
                return e.slice(0, o);
              case "'":
                return e.slice(c);
              case "<":
                s = a[i.slice(1, -1)];
                break;
              default:
                var d = +i;
                if (0 === d) return n;
                if (d > l) {
                  var p = u(d / 10);
                  return 0 === p ? n : p <= l ? void 0 === r[p - 1] ? i.charAt(1) : r[p - 1] + i.charAt(1) : n
                }
                s = r[d - 1]
            }
            return void 0 === s ? "" : s
          })
        }
      })
    }, function (t, e, n) {
      "use strict";
      n(35)("fixed", function (t) {
        return function () {
          return t(this, "tt", "", "")
        }
      })
    }, function (t, e, n) {
      "use strict";
      var o = n(16),
        i = n(6),
        r = n(15),
        a = n(1)("species");
      t.exports = function (t) {
        var e = o[t];
        r && e && !e[a] && i.f(e, a, {
          configurable: !0,
          get: function () {
            return this
          }
        })
      }
    }, function (t, e) {
      if (void 0 === __mipComponentsWebpackHelpers__["core-js/modules/_ctx"]) {
        var n = new Error("Cannot find module '__mipComponentsWebpackHelpers__['core-js/modules/_ctx']'");
        throw n.code = "MODULE_NOT_FOUND", n
      }
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_ctx"]
    }, function (t, e, n) {
      var o = n(21),
        i = n(2),
        r = function (t, e) {
          if (i(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
        };
      t.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, o) {
          try {
            (o = n(59)(Function.call, n(43).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
          } catch (t) {
            e = !0
          }
          return function (t, n) {
            return r(t, n), e ? t.__proto__ = n : o(t, n), t
          }
        }({}, !1) : void 0),
        check: r
      }
    }, function (t, e, n) {
      var o = n(21),
        i = n(60).set;
      t.exports = function (t, e, n) {
        var r, a = e.constructor;
        return a !== n && "function" == typeof a && (r = a.prototype) !== n.prototype && o(r) && i && i(t, r), t
      }
    }, function (t, e) {
      t.exports = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
      }
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_a-function"]
    }, function (t, e, n) {
      var o = n(2),
        i = n(63),
        r = n(1)("species");
      t.exports = function (t, e) {
        var n, a = o(t).constructor;
        return void 0 === a || void 0 == (n = o(a)[r]) ? e : i(n)
      }
    }, function (t, e, n) {
      "use strict";
      var o = n(22);
      n(20)({
        target: "RegExp",
        proto: !0,
        forced: o !== /./.exec
      }, {
        exec: o
      })
    }, function (t, e, n) {
      var o = n(30),
        i = n(1)("toStringTag"),
        r = "Arguments" == o(function () {
          return arguments
        }());
      t.exports = function (t) {
        var e, n, a;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
          try {
            return t[e]
          } catch (t) {}
        }(e = Object(t), i)) ? n : r ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a
      }
    }, function (t, e, n) {
      var o = n(29),
        i = n(18);
      t.exports = function (t) {
        return function (e, n) {
          var r, a, s = String(i(e)),
            c = o(n),
            l = s.length;
          return c < 0 || c >= l ? t ? "" : void 0 : (r = s.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : r : t ? s.slice(c, c + 2) : a - 56320 + (r - 55296 << 10) + 65536
        }
      }
    }, function (t, e, n) {
      var o = n(19),
        i = n(40),
        r = n(28)("IE_PROTO"),
        a = Object.prototype;
      t.exports = Object.getPrototypeOf || function (t) {
        return t = i(t), o(t, r) ? t[r] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
      }
    }, function (t, e, n) {
      var o = n(16).document;
      t.exports = o && o.documentElement
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_dom-create"]
    }, function (t, e, n) {
      var o = n(44),
        i = n(27);
      t.exports = Object.keys || function (t) {
        return o(t, i)
      }
    }, function (t, e, n) {
      var o = n(6),
        i = n(2),
        r = n(71);
      t.exports = n(15) ? Object.defineProperties : function (t, e) {
        i(t);
        for (var n, a = r(e), s = a.length, c = 0; s > c;) o.f(t, n = a[c++], e[n]);
        return t
      }
    }, function (t, e, n) {
      var o = n(2),
        i = n(72),
        r = n(27),
        a = n(28)("IE_PROTO"),
        s = function () {},
        c = function () {
          var t, e = n(70)("iframe"),
            o = r.length;
          for (e.style.display = "none", n(69).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; o--;) delete c.prototype[r[o]];
          return c()
        };
      t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (s.prototype = o(t), n = new s, s.prototype = null, n[a] = t) : n = c(), void 0 === e ? n : i(n, e)
      }
    }, function (t, e, n) {
      "use strict";
      var o = n(73),
        i = n(26),
        r = n(41),
        a = {};
      n(14)(a, n(1)("iterator"), function () {
        return this
      }), t.exports = function (t, e, n) {
        t.prototype = o(a, {
          next: i(1, n)
        }), r(t, e + " Iterator")
      }
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_library"]
    }, function (t, e, n) {
      "use strict";
      var o = n(75),
        i = n(20),
        r = n(24),
        a = n(14),
        s = n(42),
        c = n(74),
        l = n(41),
        d = n(68),
        u = n(1)("iterator"),
        p = !([].keys && "next" in [].keys()),
        f = function () {
          return this
        };
      t.exports = function (t, e, n, h, m, w, g) {
        c(n, e, h);
        var b, v, x, I = function (t) {
            if (!p && t in k) return k[t];
            switch (t) {
              case "keys":
              case "values":
                return function () {
                  return new n(this, t)
                }
            }
            return function () {
              return new n(this, t)
            }
          },
          P = e + " Iterator",
          y = "values" == m,
          _ = !1,
          k = t.prototype,
          M = k[u] || k["@@iterator"] || m && k[m],
          S = M || I(m),
          C = m ? y ? I("entries") : S : void 0,
          O = "Array" == e && k.entries || M;
        if (O && (x = d(O.call(new t))) !== Object.prototype && x.next && (l(x, P, !0), o || "function" == typeof x[u] || a(x, u, f)), y && M && "values" !== M.name && (_ = !0, S = function () {
            return M.call(this)
          }), o && !g || !p && !_ && k[u] || a(k, u, S), s[e] = S, s[P] = f, m)
          if (b = {
              values: y ? S : I("values"),
              keys: w ? S : I("keys"),
              entries: C
            }, g)
            for (v in b) v in k || r(k, v, b[v]);
          else i(i.P + i.F * (p || _), e, b);
        return b
      }
    }, function (t, e) {
      t.exports = function (t, e) {
        return {
          value: e,
          done: !!t
        }
      }
    }, function (t, e, n) {
      var o = n(1)("unscopables"),
        i = Array.prototype;
      void 0 == i[o] && n(14)(i, o, {}), t.exports = function (t) {
        i[o][t] = !0
      }
    }, function (t, e, n) {
      "use strict";
      var o = n(6),
        i = n(26);
      t.exports = function (t, e, n) {
        e in t ? o.f(t, e, i(0, n)) : t[e] = n
      }
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_ie8-dom-define"]
    }, function (t, e) {
      t.exports = __mipComponentsWebpackHelpers__["core-js/modules/_to-primitive"]
    }, function (t, e) {
      e.f = {}.propertyIsEnumerable
    }, function (t, e) {
      e.f = Object.getOwnPropertySymbols
    }, function (t, e, n) {
      var o = n(29),
        i = Math.max,
        r = Math.min;
      t.exports = function (t, e) {
        return (t = o(t)) < 0 ? i(t + e, 0) : r(t, e)
      }
    }, function (t, e, n) {
      var o = n(7),
        i = n(17),
        r = n(84);
      t.exports = function (t) {
        return function (e, n, a) {
          var s, c = o(e),
            l = i(c.length),
            d = r(a, l);
          if (t && n != n) {
            for (; l > d;)
              if ((s = c[d++]) != s) return !0
          } else
            for (; l > d; d++)
              if ((t || d in c) && c[d] === n) return t || d || 0;
          return !t && -1
        }
      }
    }, function (t, e, n) {
      var o = n(30);
      t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == o(t) ? t.split("") : Object(t)
      }
    }, function (t, e, n) {
      var o = n(45),
        i = n(83),
        r = n(2),
        a = n(16).Reflect;
      t.exports = a && a.ownKeys || function (t) {
        var e = o.f(r(t)),
          n = i.f;
        return n ? e.concat(n(t)) : e
      }
    }]);
    t.__esModule && (t = t.default), t && MIP.registerElement("mip-sjh-img-single", t)
  }
});