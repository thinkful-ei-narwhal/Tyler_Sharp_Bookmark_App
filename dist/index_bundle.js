!(function (e) {
  var t = {};
  function n(o) {
    if (t[o]) return t[o].exports;
    var f = (t[o] = { i: o, l: !1, exports: {} });
    return e[o].call(f.exports, f, f.exports, n), (f.l = !0), f.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (
        (n.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var f in e)
          n.d(
            o,
            f,
            function (t) {
              return e[t];
            }.bind(null, f)
          );
      return o;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 4));
})([
  function (e, t, n) {
    var o;
    /*!
     * jQuery JavaScript Library v3.4.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2019-05-01T21:04Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, f) {
      "use strict";
      var r = [],
        a = n.document,
        c = Object.getPrototypeOf,
        i = r.slice,
        s = r.concat,
        l = r.push,
        u = r.indexOf,
        b = {},
        d = b.toString,
        p = b.hasOwnProperty,
        h = p.toString,
        g = h.call(Object),
        m = {},
        v = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        w = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function x(e, t, n) {
        var o,
          f,
          r = (n = n || a).createElement("script");
        if (((r.text = e), t))
          for (o in w)
            (f = t[o] || (t.getAttribute && t.getAttribute(o))) &&
              r.setAttribute(o, f);
        n.head.appendChild(r).parentNode.removeChild(r);
      }
      function k(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? b[d.call(e)] || "object"
          : typeof e;
      }
      var T = function (e, t) {
          return new T.fn.init(e, t);
        },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      function j(e) {
        var t = !!e && "length" in e && e.length,
          n = k(e);
        return (
          !v(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (T.fn = T.prototype = {
        jquery: "3.4.1",
        constructor: T,
        length: 0,
        toArray: function () {
          return i.call(this);
        },
        get: function (e) {
          return null == e
            ? i.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = T.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return T.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            T.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(i.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: l,
        sort: r.sort,
        splice: r.splice,
      }),
        (T.extend = T.fn.extend = function () {
          var e,
            t,
            n,
            o,
            f,
            r,
            a = arguments[0] || {},
            c = 1,
            i = arguments.length,
            s = !1;
          for (
            "boolean" == typeof a && ((s = a), (a = arguments[c] || {}), c++),
              "object" == typeof a || v(a) || (a = {}),
              c === i && ((a = this), c--);
            c < i;
            c++
          )
            if (null != (e = arguments[c]))
              for (t in e)
                (o = e[t]),
                  "__proto__" !== t &&
                    a !== o &&
                    (s && o && (T.isPlainObject(o) || (f = Array.isArray(o)))
                      ? ((n = a[t]),
                        (r =
                          f && !Array.isArray(n)
                            ? []
                            : f || T.isPlainObject(n)
                            ? n
                            : {}),
                        (f = !1),
                        (a[t] = T.extend(s, r, o)))
                      : void 0 !== o && (a[t] = o));
          return a;
        }),
        T.extend({
          expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = c(e)) ||
                ("function" ==
                  typeof (n = p.call(t, "constructor") && t.constructor) &&
                  h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t) {
            x(e, { nonce: t && t.nonce });
          },
          each: function (e, t) {
            var n,
              o = 0;
            if (j(e))
              for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e;
          },
          trim: function (e) {
            return null == e ? "" : (e + "").replace(C, "");
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (j(Object(e))
                  ? T.merge(n, "string" == typeof e ? [e] : e)
                  : l.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : u.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, o = 0, f = e.length; o < n; o++)
              e[f++] = t[o];
            return (e.length = f), e;
          },
          grep: function (e, t, n) {
            for (var o = [], f = 0, r = e.length, a = !n; f < r; f++)
              !t(e[f], f) !== a && o.push(e[f]);
            return o;
          },
          map: function (e, t, n) {
            var o,
              f,
              r = 0,
              a = [];
            if (j(e))
              for (o = e.length; r < o; r++)
                null != (f = t(e[r], r, n)) && a.push(f);
            else for (r in e) null != (f = t(e[r], r, n)) && a.push(f);
            return s.apply([], a);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (T.fn[Symbol.iterator] = r[Symbol.iterator]),
        T.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            b["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var S =
        /*!
         * Sizzle CSS Selector Engine v2.3.4
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2019-04-08
         */
        (function (e) {
          var t,
            n,
            o,
            f,
            r,
            a,
            c,
            i,
            s,
            l,
            u,
            b,
            d,
            p,
            h,
            g,
            m,
            v,
            y,
            w = "sizzle" + 1 * new Date(),
            x = e.document,
            k = 0,
            T = 0,
            C = ie(),
            j = ie(),
            S = ie(),
            q = ie(),
            E = function (e, t) {
              return e === t && (u = !0), 0;
            },
            D = {}.hasOwnProperty,
            A = [],
            N = A.pop,
            L = A.push,
            O = A.push,
            H = A.slice,
            M = function (e, t) {
              for (var n = 0, o = e.length; n < o; n++)
                if (e[n] === t) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            z =
              "\\[" +
              P +
              "*(" +
              I +
              ")(?:" +
              P +
              "*([*^$|!~]?=)" +
              P +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              I +
              "))|)" +
              P +
              "*\\]",
            $ =
              ":(" +
              I +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              z +
              ")*)|.*)\\)|)",
            B = new RegExp(P + "+", "g"),
            W = new RegExp(
              "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
              "g"
            ),
            F = new RegExp("^" + P + "*," + P + "*"),
            _ = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"),
            X = new RegExp($),
            V = new RegExp("^" + I + "$"),
            Y = {
              ID: new RegExp("^#(" + I + ")"),
              CLASS: new RegExp("^\\.(" + I + ")"),
              TAG: new RegExp("^(" + I + "|[*])"),
              ATTR: new RegExp("^" + z),
              PSEUDO: new RegExp("^" + $),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  P +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  P +
                  "*(?:([+-]|)" +
                  P +
                  "*(\\d+)|))" +
                  P +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  P +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  P +
                  "*((?:-\\d)?\\d*)" +
                  P +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)",
              "ig"
            ),
            ne = function (e, t, n) {
              var o = "0x" + t - 65536;
              return o != o || n
                ? t
                : o < 0
                ? String.fromCharCode(o + 65536)
                : String.fromCharCode((o >> 10) | 55296, (1023 & o) | 56320);
            },
            oe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            re = function () {
              b();
            },
            ae = we(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            O.apply((A = H.call(x.childNodes)), x.childNodes),
              A[x.childNodes.length].nodeType;
          } catch (e) {
            O = {
              apply: A.length
                ? function (e, t) {
                    L.apply(e, H.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ce(e, t, o, f) {
            var r,
              c,
              s,
              l,
              u,
              p,
              m,
              v = t && t.ownerDocument,
              k = t ? t.nodeType : 9;
            if (
              ((o = o || []),
              "string" != typeof e || !e || (1 !== k && 9 !== k && 11 !== k))
            )
              return o;
            if (
              !f &&
              ((t ? t.ownerDocument || t : x) !== d && b(t), (t = t || d), h)
            ) {
              if (11 !== k && (u = Z.exec(e)))
                if ((r = u[1])) {
                  if (9 === k) {
                    if (!(s = t.getElementById(r))) return o;
                    if (s.id === r) return o.push(s), o;
                  } else if (
                    v &&
                    (s = v.getElementById(r)) &&
                    y(t, s) &&
                    s.id === r
                  )
                    return o.push(s), o;
                } else {
                  if (u[2]) return O.apply(o, t.getElementsByTagName(e)), o;
                  if (
                    (r = u[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return O.apply(o, t.getElementsByClassName(r)), o;
                }
              if (
                n.qsa &&
                !q[e + " "] &&
                (!g || !g.test(e)) &&
                (1 !== k || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((m = e), (v = t), 1 === k && U.test(e))) {
                  for (
                    (l = t.getAttribute("id"))
                      ? (l = l.replace(oe, fe))
                      : t.setAttribute("id", (l = w)),
                      c = (p = a(e)).length;
                    c--;

                  )
                    p[c] = "#" + l + " " + ye(p[c]);
                  (m = p.join(",")),
                    (v = (ee.test(e) && me(t.parentNode)) || t);
                }
                try {
                  return O.apply(o, v.querySelectorAll(m)), o;
                } catch (t) {
                  q(e, !0);
                } finally {
                  l === w && t.removeAttribute("id");
                }
              }
            }
            return i(e.replace(W, "$1"), t, o, f);
          }
          function ie() {
            var e = [];
            return function t(n, f) {
              return (
                e.push(n + " ") > o.cacheLength && delete t[e.shift()],
                (t[n + " "] = f)
              );
            };
          }
          function se(e) {
            return (e[w] = !0), e;
          }
          function le(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function ue(e, t) {
            for (var n = e.split("|"), f = n.length; f--; )
              o.attrHandle[n[f]] = t;
          }
          function be(e, t) {
            var n = t && e,
              o =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (o) return o;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function pe(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ge(e) {
            return se(function (t) {
              return (
                (t = +t),
                se(function (n, o) {
                  for (var f, r = e([], n.length, t), a = r.length; a--; )
                    n[(f = r[a])] && (n[f] = !(o[f] = n[f]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ce.support = {}),
          (r = ce.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !G.test(t || (n && n.nodeName) || "HTML");
          }),
          (b = ce.setDocument = function (e) {
            var t,
              f,
              a = e ? e.ownerDocument || e : x;
            return a !== d && 9 === a.nodeType && a.documentElement
              ? ((p = (d = a).documentElement),
                (h = !r(d)),
                x !== d &&
                  (f = d.defaultView) &&
                  f.top !== f &&
                  (f.addEventListener
                    ? f.addEventListener("unload", re, !1)
                    : f.attachEvent && f.attachEvent("onunload", re)),
                (n.attributes = le(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = le(function (e) {
                  return (
                    e.appendChild(d.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                (n.getById = le(function (e) {
                  return (
                    (p.appendChild(e).id = w),
                    !d.getElementsByName || !d.getElementsByName(w).length
                  );
                })),
                n.getById
                  ? ((o.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (o.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && h) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((o.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (o.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && h) {
                        var n,
                          o,
                          f,
                          r = t.getElementById(e);
                        if (r) {
                          if ((n = r.getAttributeNode("id")) && n.value === e)
                            return [r];
                          for (
                            f = t.getElementsByName(e), o = 0;
                            (r = f[o++]);

                          )
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                              return [r];
                        }
                        return [];
                      }
                    })),
                (o.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        o = [],
                        f = 0,
                        r = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = r[f++]); ) 1 === n.nodeType && o.push(n);
                        return o;
                      }
                      return r;
                    }),
                (o.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && h)
                      return t.getElementsByClassName(e);
                  }),
                (m = []),
                (g = []),
                (n.qsa = K.test(d.querySelectorAll)) &&
                  (le(function (e) {
                    (p.appendChild(e).innerHTML =
                      "<a id='" +
                      w +
                      "'></a><select id='" +
                      w +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        g.push("[*^$]=" + P + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        g.push("\\[" + P + "*(?:value|" + R + ")"),
                      e.querySelectorAll("[id~=" + w + "-]").length ||
                        g.push("~="),
                      e.querySelectorAll(":checked").length ||
                        g.push(":checked"),
                      e.querySelectorAll("a#" + w + "+*").length ||
                        g.push(".#.+[+~]");
                  }),
                  le(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        g.push("name" + P + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        g.push(":enabled", ":disabled"),
                      (p.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        g.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      g.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (v =
                    p.matches ||
                    p.webkitMatchesSelector ||
                    p.mozMatchesSelector ||
                    p.oMatchesSelector ||
                    p.msMatchesSelector)
                )) &&
                  le(function (e) {
                    (n.disconnectedMatch = v.call(e, "*")),
                      v.call(e, "[s!='']:x"),
                      m.push("!=", $);
                  }),
                (g = g.length && new RegExp(g.join("|"))),
                (m = m.length && new RegExp(m.join("|"))),
                (t = K.test(p.compareDocumentPosition)),
                (y =
                  t || K.test(p.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          o = t && t.parentNode;
                        return (
                          e === o ||
                          !(
                            !o ||
                            1 !== o.nodeType ||
                            !(n.contains
                              ? n.contains(o)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(o))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (E = t
                  ? function (e, t) {
                      if (e === t) return (u = !0), 0;
                      var o =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        o ||
                        (1 &
                          (o =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === o)
                          ? e === d || (e.ownerDocument === x && y(x, e))
                            ? -1
                            : t === d || (t.ownerDocument === x && y(x, t))
                            ? 1
                            : l
                            ? M(l, e) - M(l, t)
                            : 0
                          : 4 & o
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (u = !0), 0;
                      var n,
                        o = 0,
                        f = e.parentNode,
                        r = t.parentNode,
                        a = [e],
                        c = [t];
                      if (!f || !r)
                        return e === d
                          ? -1
                          : t === d
                          ? 1
                          : f
                          ? -1
                          : r
                          ? 1
                          : l
                          ? M(l, e) - M(l, t)
                          : 0;
                      if (f === r) return be(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) c.unshift(n);
                      for (; a[o] === c[o]; ) o++;
                      return o
                        ? be(a[o], c[o])
                        : a[o] === x
                        ? -1
                        : c[o] === x
                        ? 1
                        : 0;
                    }),
                d)
              : d;
          }),
          (ce.matches = function (e, t) {
            return ce(e, null, null, t);
          }),
          (ce.matchesSelector = function (e, t) {
            if (
              ((e.ownerDocument || e) !== d && b(e),
              n.matchesSelector &&
                h &&
                !q[t + " "] &&
                (!m || !m.test(t)) &&
                (!g || !g.test(t)))
            )
              try {
                var o = v.call(e, t);
                if (
                  o ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return o;
              } catch (e) {
                q(t, !0);
              }
            return ce(t, d, null, [e]).length > 0;
          }),
          (ce.contains = function (e, t) {
            return (e.ownerDocument || e) !== d && b(e), y(e, t);
          }),
          (ce.attr = function (e, t) {
            (e.ownerDocument || e) !== d && b(e);
            var f = o.attrHandle[t.toLowerCase()],
              r =
                f && D.call(o.attrHandle, t.toLowerCase())
                  ? f(e, t, !h)
                  : void 0;
            return void 0 !== r
              ? r
              : n.attributes || !h
              ? e.getAttribute(t)
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
          }),
          (ce.escape = function (e) {
            return (e + "").replace(oe, fe);
          }),
          (ce.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ce.uniqueSort = function (e) {
            var t,
              o = [],
              f = 0,
              r = 0;
            if (
              ((u = !n.detectDuplicates),
              (l = !n.sortStable && e.slice(0)),
              e.sort(E),
              u)
            ) {
              for (; (t = e[r++]); ) t === e[r] && (f = o.push(r));
              for (; f--; ) e.splice(o[f], 1);
            }
            return (l = null), e;
          }),
          (f = ce.getText = function (e) {
            var t,
              n = "",
              o = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += f(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[o++]); ) n += f(t);
            return n;
          }),
          ((o = ce.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: Y,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || ce.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && ce.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return Y.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        X.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = C[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                    C(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (o) {
                  var f = ce.attr(o, e);
                  return null == f
                    ? "!=" === t
                    : !t ||
                        ((f += ""),
                        "=" === t
                          ? f === n
                          : "!=" === t
                          ? f !== n
                          : "^=" === t
                          ? n && 0 === f.indexOf(n)
                          : "*=" === t
                          ? n && f.indexOf(n) > -1
                          : "$=" === t
                          ? n && f.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + f.replace(B, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (f === n || f.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, o, f) {
                var r = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  c = "of-type" === t;
                return 1 === o && 0 === f
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, i) {
                      var s,
                        l,
                        u,
                        b,
                        d,
                        p,
                        h = r !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        m = c && t.nodeName.toLowerCase(),
                        v = !i && !c,
                        y = !1;
                      if (g) {
                        if (r) {
                          for (; h; ) {
                            for (b = t; (b = b[h]); )
                              if (
                                c
                                  ? b.nodeName.toLowerCase() === m
                                  : 1 === b.nodeType
                              )
                                return !1;
                            p = h = "only" === e && !p && "nextSibling";
                          }
                          return !0;
                        }
                        if (((p = [a ? g.firstChild : g.lastChild]), a && v)) {
                          for (
                            y =
                              (d =
                                (s =
                                  (l =
                                    (u = (b = g)[w] || (b[w] = {}))[
                                      b.uniqueID
                                    ] || (u[b.uniqueID] = {}))[e] || [])[0] ===
                                  k && s[1]) && s[2],
                              b = d && g.childNodes[d];
                            (b = (++d && b && b[h]) || (y = d = 0) || p.pop());

                          )
                            if (1 === b.nodeType && ++y && b === t) {
                              l[e] = [k, d, y];
                              break;
                            }
                        } else if (
                          (v &&
                            (y = d =
                              (s =
                                (l =
                                  (u = (b = t)[w] || (b[w] = {}))[b.uniqueID] ||
                                  (u[b.uniqueID] = {}))[e] || [])[0] === k &&
                              s[1]),
                          !1 === y)
                        )
                          for (
                            ;
                            (b =
                              (++d && b && b[h]) || (y = d = 0) || p.pop()) &&
                            ((c
                              ? b.nodeName.toLowerCase() !== m
                              : 1 !== b.nodeType) ||
                              !++y ||
                              (v &&
                                ((l =
                                  (u = b[w] || (b[w] = {}))[b.uniqueID] ||
                                  (u[b.uniqueID] = {}))[e] = [k, y]),
                              b !== t));

                          );
                        return (y -= f) === o || (y % o == 0 && y / o >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  f =
                    o.pseudos[e] ||
                    o.setFilters[e.toLowerCase()] ||
                    ce.error("unsupported pseudo: " + e);
                return f[w]
                  ? f(t)
                  : f.length > 1
                  ? ((n = [e, e, "", t]),
                    o.setFilters.hasOwnProperty(e.toLowerCase())
                      ? se(function (e, n) {
                          for (var o, r = f(e, t), a = r.length; a--; )
                            e[(o = M(e, r[a]))] = !(n[o] = r[a]);
                        })
                      : function (e) {
                          return f(e, 0, n);
                        })
                  : f;
              },
            },
            pseudos: {
              not: se(function (e) {
                var t = [],
                  n = [],
                  o = c(e.replace(W, "$1"));
                return o[w]
                  ? se(function (e, t, n, f) {
                      for (var r, a = o(e, null, f, []), c = e.length; c--; )
                        (r = a[c]) && (e[c] = !(t[c] = r));
                    })
                  : function (e, f, r) {
                      return (
                        (t[0] = e), o(t, null, r, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: se(function (e) {
                return function (t) {
                  return ce(e, t).length > 0;
                };
              }),
              contains: se(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || f(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: se(function (e) {
                return (
                  V.test(e || "") || ce.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = h
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === p;
              },
              focus: function (e) {
                return (
                  e === d.activeElement &&
                  (!d.hasFocus || d.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: he(!1),
              disabled: he(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !o.pseudos.empty(e);
              },
              header: function (e) {
                return Q.test(e.nodeName);
              },
              input: function (e) {
                return J.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: ge(function () {
                return [0];
              }),
              last: ge(function (e, t) {
                return [t - 1];
              }),
              eq: ge(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: ge(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: ge(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: ge(function (e, t, n) {
                for (var o = n < 0 ? n + t : n > t ? t : n; --o >= 0; )
                  e.push(o);
                return e;
              }),
              gt: ge(function (e, t, n) {
                for (var o = n < 0 ? n + t : n; ++o < t; ) e.push(o);
                return e;
              }),
            },
          }).pseudos.nth = o.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            o.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) o.pseudos[t] = pe(t);
          function ve() {}
          function ye(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
            return o;
          }
          function we(e, t, n) {
            var o = t.dir,
              f = t.next,
              r = f || o,
              a = n && "parentNode" === r,
              c = T++;
            return t.first
              ? function (t, n, f) {
                  for (; (t = t[o]); )
                    if (1 === t.nodeType || a) return e(t, n, f);
                  return !1;
                }
              : function (t, n, i) {
                  var s,
                    l,
                    u,
                    b = [k, c];
                  if (i) {
                    for (; (t = t[o]); )
                      if ((1 === t.nodeType || a) && e(t, n, i)) return !0;
                  } else
                    for (; (t = t[o]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((l =
                            (u = t[w] || (t[w] = {}))[t.uniqueID] ||
                            (u[t.uniqueID] = {})),
                          f && f === t.nodeName.toLowerCase())
                        )
                          t = t[o] || t;
                        else {
                          if ((s = l[r]) && s[0] === k && s[1] === c)
                            return (b[2] = s[2]);
                          if (((l[r] = b), (b[2] = e(t, n, i)))) return !0;
                        }
                  return !1;
                };
          }
          function xe(e) {
            return e.length > 1
              ? function (t, n, o) {
                  for (var f = e.length; f--; ) if (!e[f](t, n, o)) return !1;
                  return !0;
                }
              : e[0];
          }
          function ke(e, t, n, o, f) {
            for (var r, a = [], c = 0, i = e.length, s = null != t; c < i; c++)
              (r = e[c]) && ((n && !n(r, o, f)) || (a.push(r), s && t.push(c)));
            return a;
          }
          function Te(e, t, n, o, f, r) {
            return (
              o && !o[w] && (o = Te(o)),
              f && !f[w] && (f = Te(f, r)),
              se(function (r, a, c, i) {
                var s,
                  l,
                  u,
                  b = [],
                  d = [],
                  p = a.length,
                  h =
                    r ||
                    (function (e, t, n) {
                      for (var o = 0, f = t.length; o < f; o++) ce(e, t[o], n);
                      return n;
                    })(t || "*", c.nodeType ? [c] : c, []),
                  g = !e || (!r && t) ? h : ke(h, b, e, c, i),
                  m = n ? (f || (r ? e : p || o) ? [] : a) : g;
                if ((n && n(g, m, c, i), o))
                  for (s = ke(m, d), o(s, [], c, i), l = s.length; l--; )
                    (u = s[l]) && (m[d[l]] = !(g[d[l]] = u));
                if (r) {
                  if (f || e) {
                    if (f) {
                      for (s = [], l = m.length; l--; )
                        (u = m[l]) && s.push((g[l] = u));
                      f(null, (m = []), s, i);
                    }
                    for (l = m.length; l--; )
                      (u = m[l]) &&
                        (s = f ? M(r, u) : b[l]) > -1 &&
                        (r[s] = !(a[s] = u));
                  }
                } else (m = ke(m === a ? m.splice(p, m.length) : m)), f ? f(null, a, m, i) : O.apply(a, m);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                f,
                r = e.length,
                a = o.relative[e[0].type],
                c = a || o.relative[" "],
                i = a ? 1 : 0,
                l = we(
                  function (e) {
                    return e === t;
                  },
                  c,
                  !0
                ),
                u = we(
                  function (e) {
                    return M(t, e) > -1;
                  },
                  c,
                  !0
                ),
                b = [
                  function (e, n, o) {
                    var f =
                      (!a && (o || n !== s)) ||
                      ((t = n).nodeType ? l(e, n, o) : u(e, n, o));
                    return (t = null), f;
                  },
                ];
              i < r;
              i++
            )
              if ((n = o.relative[e[i].type])) b = [we(xe(b), n)];
              else {
                if ((n = o.filter[e[i].type].apply(null, e[i].matches))[w]) {
                  for (f = ++i; f < r && !o.relative[e[f].type]; f++);
                  return Te(
                    i > 1 && xe(b),
                    i > 1 &&
                      ye(
                        e
                          .slice(0, i - 1)
                          .concat({ value: " " === e[i - 2].type ? "*" : "" })
                      ).replace(W, "$1"),
                    n,
                    i < f && Ce(e.slice(i, f)),
                    f < r && Ce((e = e.slice(f))),
                    f < r && ye(e)
                  );
                }
                b.push(n);
              }
            return xe(b);
          }
          return (
            (ve.prototype = o.filters = o.pseudos),
            (o.setFilters = new ve()),
            (a = ce.tokenize = function (e, t) {
              var n,
                f,
                r,
                a,
                c,
                i,
                s,
                l = j[e + " "];
              if (l) return t ? 0 : l.slice(0);
              for (c = e, i = [], s = o.preFilter; c; ) {
                for (a in ((n && !(f = F.exec(c))) ||
                  (f && (c = c.slice(f[0].length) || c), i.push((r = []))),
                (n = !1),
                (f = _.exec(c)) &&
                  ((n = f.shift()),
                  r.push({ value: n, type: f[0].replace(W, " ") }),
                  (c = c.slice(n.length))),
                o.filter))
                  !(f = Y[a].exec(c)) ||
                    (s[a] && !(f = s[a](f))) ||
                    ((n = f.shift()),
                    r.push({ value: n, type: a, matches: f }),
                    (c = c.slice(n.length)));
                if (!n) break;
              }
              return t ? c.length : c ? ce.error(e) : j(e, i).slice(0);
            }),
            (c = ce.compile = function (e, t) {
              var n,
                f = [],
                r = [],
                c = S[e + " "];
              if (!c) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (c = Ce(t[n]))[w] ? f.push(c) : r.push(c);
                (c = S(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      f = e.length > 0,
                      r = function (r, a, c, i, l) {
                        var u,
                          p,
                          g,
                          m = 0,
                          v = "0",
                          y = r && [],
                          w = [],
                          x = s,
                          T = r || (f && o.find.TAG("*", l)),
                          C = (k += null == x ? 1 : Math.random() || 0.1),
                          j = T.length;
                        for (
                          l && (s = a === d || a || l);
                          v !== j && null != (u = T[v]);
                          v++
                        ) {
                          if (f && u) {
                            for (
                              p = 0,
                                a || u.ownerDocument === d || (b(u), (c = !h));
                              (g = e[p++]);

                            )
                              if (g(u, a || d, c)) {
                                i.push(u);
                                break;
                              }
                            l && (k = C);
                          }
                          n && ((u = !g && u) && m--, r && y.push(u));
                        }
                        if (((m += v), n && v !== m)) {
                          for (p = 0; (g = t[p++]); ) g(y, w, a, c);
                          if (r) {
                            if (m > 0)
                              for (; v--; ) y[v] || w[v] || (w[v] = N.call(i));
                            w = ke(w);
                          }
                          O.apply(i, w),
                            l &&
                              !r &&
                              w.length > 0 &&
                              m + t.length > 1 &&
                              ce.uniqueSort(i);
                        }
                        return l && ((k = C), (s = x)), y;
                      };
                    return n ? se(r) : r;
                  })(r, f)
                )).selector = e;
              }
              return c;
            }),
            (i = ce.select = function (e, t, n, f) {
              var r,
                i,
                s,
                l,
                u,
                b = "function" == typeof e && e,
                d = !f && a((e = b.selector || e));
              if (((n = n || []), 1 === d.length)) {
                if (
                  (i = d[0] = d[0].slice(0)).length > 2 &&
                  "ID" === (s = i[0]).type &&
                  9 === t.nodeType &&
                  h &&
                  o.relative[i[1].type]
                ) {
                  if (
                    !(t = (o.find.ID(s.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  b && (t = t.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                for (
                  r = Y.needsContext.test(e) ? 0 : i.length;
                  r-- && ((s = i[r]), !o.relative[(l = s.type)]);

                )
                  if (
                    (u = o.find[l]) &&
                    (f = u(
                      s.matches[0].replace(te, ne),
                      (ee.test(i[0].type) && me(t.parentNode)) || t
                    ))
                  ) {
                    if ((i.splice(r, 1), !(e = f.length && ye(i))))
                      return O.apply(n, f), n;
                    break;
                  }
              }
              return (
                (b || c(e, d))(
                  f,
                  t,
                  !h,
                  n,
                  !t || (ee.test(e) && me(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable = w.split("").sort(E).join("") === w),
            (n.detectDuplicates = !!u),
            b(),
            (n.sortDetached = le(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            le(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              ue("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              le(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              ue("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            le(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              ue(R, function (e, t, n) {
                var o;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (o = e.getAttributeNode(t)) && o.specified
                    ? o.value
                    : null;
              }),
            ce
          );
        })(n);
      (T.find = S),
        (T.expr = S.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = S.uniqueSort),
        (T.text = S.getText),
        (T.isXMLDoc = S.isXML),
        (T.contains = S.contains),
        (T.escapeSelector = S.escape);
      var q = function (e, t, n) {
          for (var o = [], f = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (f && T(e).is(n)) break;
              o.push(e);
            }
          return o;
        },
        E = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        D = T.expr.match.needsContext;
      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return v(t)
          ? T.grep(e, function (e, o) {
              return !!t.call(e, o, e) !== n;
            })
          : t.nodeType
          ? T.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? T.grep(e, function (e) {
              return u.call(t, e) > -1 !== n;
            })
          : T.filter(t, e, n);
      }
      (T.filter = function (e, t, n) {
        var o = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === o.nodeType
            ? T.find.matchesSelector(o, e)
              ? [o]
              : []
            : T.find.matches(
                e,
                T.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        T.fn.extend({
          find: function (e) {
            var t,
              n,
              o = this.length,
              f = this;
            if ("string" != typeof e)
              return this.pushStack(
                T(e).filter(function () {
                  for (t = 0; t < o; t++) if (T.contains(f[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < o; t++) T.find(e, f[t], n);
            return o > 1 ? T.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function (e) {
            return !!L(
              this,
              "string" == typeof e && D.test(e) ? T(e) : e || [],
              !1
            ).length;
          },
        });
      var O,
        H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((T.fn.init = function (e, t, n) {
        var o, f;
        if (!e) return this;
        if (((n = n || O), "string" == typeof e)) {
          if (
            !(o =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : H.exec(e)) ||
            (!o[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (o[1]) {
            if (
              ((t = t instanceof T ? t[0] : t),
              T.merge(
                this,
                T.parseHTML(
                  o[1],
                  t && t.nodeType ? t.ownerDocument || t : a,
                  !0
                )
              ),
              N.test(o[1]) && T.isPlainObject(t))
            )
              for (o in t) v(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this;
          }
          return (
            (f = a.getElementById(o[2])) && ((this[0] = f), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(T)
          : T.makeArray(e, this);
      }).prototype = T.fn),
        (O = T(a));
      var M = /^(?:parents|prev(?:Until|All))/,
        R = { children: !0, contents: !0, next: !0, prev: !0 };
      function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      T.fn.extend({
        has: function (e) {
          var t = T(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (T.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            o = 0,
            f = this.length,
            r = [],
            a = "string" != typeof e && T(e);
          if (!D.test(e))
            for (; o < f; o++)
              for (n = this[o]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && T.find.matchesSelector(n, e))
                ) {
                  r.push(n);
                  break;
                }
          return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? u.call(T(e), this[0])
              : u.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        T.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return q(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return q(e, "parentNode", n);
            },
            next: function (e) {
              return P(e, "nextSibling");
            },
            prev: function (e) {
              return P(e, "previousSibling");
            },
            nextAll: function (e) {
              return q(e, "nextSibling");
            },
            prevAll: function (e) {
              return q(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return q(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return q(e, "previousSibling", n);
            },
            siblings: function (e) {
              return E((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return E(e.firstChild);
            },
            contents: function (e) {
              return void 0 !== e.contentDocument
                ? e.contentDocument
                : (A(e, "template") && (e = e.content || e),
                  T.merge([], e.childNodes));
            },
          },
          function (e, t) {
            T.fn[e] = function (n, o) {
              var f = T.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (o = n),
                o && "string" == typeof o && (f = T.filter(o, f)),
                this.length > 1 &&
                  (R[e] || T.uniqueSort(f), M.test(e) && f.reverse()),
                this.pushStack(f)
              );
            };
          }
        );
      var I = /[^\x20\t\r\n\f]+/g;
      function z(e) {
        return e;
      }
      function $(e) {
        throw e;
      }
      function B(e, t, n, o) {
        var f;
        try {
          e && v((f = e.promise))
            ? f.call(e).done(t).fail(n)
            : e && v((f = e.then))
            ? f.call(e, t, n)
            : t.apply(void 0, [e].slice(o));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (T.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  T.each(e.match(I) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : T.extend({}, e);
        var t,
          n,
          o,
          f,
          r = [],
          a = [],
          c = -1,
          i = function () {
            for (f = f || e.once, o = t = !0; a.length; c = -1)
              for (n = a.shift(); ++c < r.length; )
                !1 === r[c].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((c = r.length), (n = !1));
            e.memory || (n = !1), (t = !1), f && (r = n ? [] : "");
          },
          s = {
            add: function () {
              return (
                r &&
                  (n && !t && ((c = r.length - 1), a.push(n)),
                  (function t(n) {
                    T.each(n, function (n, o) {
                      v(o)
                        ? (e.unique && s.has(o)) || r.push(o)
                        : o && o.length && "string" !== k(o) && t(o);
                    });
                  })(arguments),
                  n && !t && i()),
                this
              );
            },
            remove: function () {
              return (
                T.each(arguments, function (e, t) {
                  for (var n; (n = T.inArray(t, r, n)) > -1; )
                    r.splice(n, 1), n <= c && c--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? T.inArray(e, r) > -1 : r.length > 0;
            },
            empty: function () {
              return r && (r = []), this;
            },
            disable: function () {
              return (f = a = []), (r = n = ""), this;
            },
            disabled: function () {
              return !r;
            },
            lock: function () {
              return (f = a = []), n || t || (r = n = ""), this;
            },
            locked: function () {
              return !!f;
            },
            fireWith: function (e, n) {
              return (
                f ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || i()),
                this
              );
            },
            fire: function () {
              return s.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!o;
            },
          };
        return s;
      }),
        T.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  T.Callbacks("memory"),
                  T.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  T.Callbacks("once memory"),
                  T.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              o = "pending",
              f = {
                state: function () {
                  return o;
                },
                always: function () {
                  return r.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return f.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return T.Deferred(function (n) {
                    T.each(t, function (t, o) {
                      var f = v(e[o[4]]) && e[o[4]];
                      r[o[1]](function () {
                        var e = f && f.apply(this, arguments);
                        e && v(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[o[0] + "With"](this, f ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, o, f) {
                  var r = 0;
                  function a(e, t, o, f) {
                    return function () {
                      var c = this,
                        i = arguments,
                        s = function () {
                          var n, s;
                          if (!(e < r)) {
                            if ((n = o.apply(c, i)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (s =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(s)
                                ? f
                                  ? s.call(n, a(r, t, z, f), a(r, t, $, f))
                                  : (r++,
                                    s.call(
                                      n,
                                      a(r, t, z, f),
                                      a(r, t, $, f),
                                      a(r, t, z, t.notifyWith)
                                    ))
                                : (o !== z && ((c = void 0), (i = [n])),
                                  (f || t.resolveWith)(c, i));
                          }
                        },
                        l = f
                          ? s
                          : function () {
                              try {
                                s();
                              } catch (n) {
                                T.Deferred.exceptionHook &&
                                  T.Deferred.exceptionHook(n, l.stackTrace),
                                  e + 1 >= r &&
                                    (o !== $ && ((c = void 0), (i = [n])),
                                    t.rejectWith(c, i));
                              }
                            };
                      e
                        ? l()
                        : (T.Deferred.getStackHook &&
                            (l.stackTrace = T.Deferred.getStackHook()),
                          n.setTimeout(l));
                    };
                  }
                  return T.Deferred(function (n) {
                    t[0][3].add(a(0, n, v(f) ? f : z, n.notifyWith)),
                      t[1][3].add(a(0, n, v(e) ? e : z)),
                      t[2][3].add(a(0, n, v(o) ? o : $));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? T.extend(e, f) : f;
                },
              },
              r = {};
            return (
              T.each(t, function (e, n) {
                var a = n[2],
                  c = n[5];
                (f[n[1]] = a.add),
                  c &&
                    a.add(
                      function () {
                        o = c;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (r[n[0]] = function () {
                    return (
                      r[n[0] + "With"](this === r ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (r[n[0] + "With"] = a.fireWith);
              }),
              f.promise(r),
              e && e.call(r, r),
              r
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              o = Array(n),
              f = i.call(arguments),
              r = T.Deferred(),
              a = function (e) {
                return function (n) {
                  (o[e] = this),
                    (f[e] = arguments.length > 1 ? i.call(arguments) : n),
                    --t || r.resolveWith(o, f);
                };
              };
            if (
              t <= 1 &&
              (B(e, r.done(a(n)).resolve, r.reject, !t),
              "pending" === r.state() || v(f[n] && f[n].then))
            )
              return r.then();
            for (; n--; ) B(f[n], a(n), r.reject);
            return r.promise();
          },
        });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (T.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          W.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (T.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var F = T.Deferred();
      function _() {
        a.removeEventListener("DOMContentLoaded", _),
          n.removeEventListener("load", _),
          T.ready();
      }
      (T.fn.ready = function (e) {
        return (
          F.then(e).catch(function (e) {
            T.readyException(e);
          }),
          this
        );
      }),
        T.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --T.readyWait : T.isReady) ||
              ((T.isReady = !0),
              (!0 !== e && --T.readyWait > 0) || F.resolveWith(a, [T]));
          },
        }),
        (T.ready.then = F.then),
        "complete" === a.readyState ||
        ("loading" !== a.readyState && !a.documentElement.doScroll)
          ? n.setTimeout(T.ready)
          : (a.addEventListener("DOMContentLoaded", _),
            n.addEventListener("load", _));
      var U = function (e, t, n, o, f, r, a) {
          var c = 0,
            i = e.length,
            s = null == n;
          if ("object" === k(n))
            for (c in ((f = !0), n)) U(e, t, c, n[c], !0, r, a);
          else if (
            void 0 !== o &&
            ((f = !0),
            v(o) || (a = !0),
            s &&
              (a
                ? (t.call(e, o), (t = null))
                : ((s = t),
                  (t = function (e, t, n) {
                    return s.call(T(e), n);
                  }))),
            t)
          )
            for (; c < i; c++) t(e[c], n, a ? o : o.call(e[c], c, t(e[c], n)));
          return f ? e : s ? t.call(e) : i ? t(e[0], n) : r;
        },
        X = /^-ms-/,
        V = /-([a-z])/g;
      function Y(e, t) {
        return t.toUpperCase();
      }
      function G(e) {
        return e.replace(X, "ms-").replace(V, Y);
      }
      var J = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = T.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                J(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var o,
              f = this.cache(e);
            if ("string" == typeof t) f[G(t)] = n;
            else for (o in t) f[G(o)] = t[o];
            return f;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][G(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              o = e[this.expando];
            if (void 0 !== o) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(G)
                  : (t = G(t)) in o
                  ? [t]
                  : t.match(I) || []).length;
                for (; n--; ) delete o[t[n]];
              }
              (void 0 === t || T.isEmptyObject(o)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !T.isEmptyObject(t);
          },
        });
      var K = new Q(),
        Z = new Q(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;
      function ne(e, t, n) {
        var o;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((o = "data-" + t.replace(te, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(o)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : ee.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            Z.set(e, t, n);
          } else n = void 0;
        return n;
      }
      T.extend({
        hasData: function (e) {
          return Z.hasData(e) || K.hasData(e);
        },
        data: function (e, t, n) {
          return Z.access(e, t, n);
        },
        removeData: function (e, t) {
          Z.remove(e, t);
        },
        _data: function (e, t, n) {
          return K.access(e, t, n);
        },
        _removeData: function (e, t) {
          K.remove(e, t);
        },
      }),
        T.fn.extend({
          data: function (e, t) {
            var n,
              o,
              f,
              r = this[0],
              a = r && r.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((f = Z.get(r)), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (o = a[n].name).indexOf("data-") &&
                    ((o = G(o.slice(5))), ne(r, o, f[o]));
                K.set(r, "hasDataAttrs", !0);
              }
              return f;
            }
            return "object" == typeof e
              ? this.each(function () {
                  Z.set(this, e);
                })
              : U(
                  this,
                  function (t) {
                    var n;
                    if (r && void 0 === t)
                      return void 0 !== (n = Z.get(r, e)) ||
                        void 0 !== (n = ne(r, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      Z.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              Z.remove(this, e);
            });
          },
        }),
        T.extend({
          queue: function (e, t, n) {
            var o;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (o = K.get(e, t)),
                n &&
                  (!o || Array.isArray(n)
                    ? (o = K.access(e, t, T.makeArray(n)))
                    : o.push(n)),
                o || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = T.queue(e, t),
              o = n.length,
              f = n.shift(),
              r = T._queueHooks(e, t);
            "inprogress" === f && ((f = n.shift()), o--),
              f &&
                ("fx" === t && n.unshift("inprogress"),
                delete r.stop,
                f.call(
                  e,
                  function () {
                    T.dequeue(e, t);
                  },
                  r
                )),
              !o && r && r.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              K.get(e, n) ||
              K.access(e, n, {
                empty: T.Callbacks("once memory").add(function () {
                  K.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        T.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? T.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = T.queue(this, e, t);
                    T._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && T.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              T.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              o = 1,
              f = T.Deferred(),
              r = this,
              a = this.length,
              c = function () {
                --o || f.resolveWith(r, [r]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = K.get(r[a], e + "queueHooks")) &&
                n.empty &&
                (o++, n.empty.add(c));
            return c(), f.promise(t);
          },
        });
      var oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        fe = new RegExp("^(?:([+-])=|)(" + oe + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ae = a.documentElement,
        ce = function (e) {
          return T.contains(e.ownerDocument, e);
        },
        ie = { composed: !0 };
      ae.getRootNode &&
        (ce = function (e) {
          return (
            T.contains(e.ownerDocument, e) ||
            e.getRootNode(ie) === e.ownerDocument
          );
        });
      var se = function (e, t) {
          return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && ce(e) && "none" === T.css(e, "display"))
          );
        },
        le = function (e, t, n, o) {
          var f,
            r,
            a = {};
          for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
          for (r in ((f = n.apply(e, o || [])), t)) e.style[r] = a[r];
          return f;
        };
      function ue(e, t, n, o) {
        var f,
          r,
          a = 20,
          c = o
            ? function () {
                return o.cur();
              }
            : function () {
                return T.css(e, t, "");
              },
          i = c(),
          s = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
          l =
            e.nodeType &&
            (T.cssNumber[t] || ("px" !== s && +i)) &&
            fe.exec(T.css(e, t));
        if (l && l[3] !== s) {
          for (i /= 2, s = s || l[3], l = +i || 1; a--; )
            T.style(e, t, l + s),
              (1 - r) * (1 - (r = c() / i || 0.5)) <= 0 && (a = 0),
              (l /= r);
          (l *= 2), T.style(e, t, l + s), (n = n || []);
        }
        return (
          n &&
            ((l = +l || +i || 0),
            (f = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
            o && ((o.unit = s), (o.start = l), (o.end = f))),
          f
        );
      }
      var be = {};
      function de(e) {
        var t,
          n = e.ownerDocument,
          o = e.nodeName,
          f = be[o];
        return (
          f ||
          ((t = n.body.appendChild(n.createElement(o))),
          (f = T.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === f && (f = "block"),
          (be[o] = f),
          f)
        );
      }
      function pe(e, t) {
        for (var n, o, f = [], r = 0, a = e.length; r < a; r++)
          (o = e[r]).style &&
            ((n = o.style.display),
            t
              ? ("none" === n &&
                  ((f[r] = K.get(o, "display") || null),
                  f[r] || (o.style.display = "")),
                "" === o.style.display && se(o) && (f[r] = de(o)))
              : "none" !== n && ((f[r] = "none"), K.set(o, "display", n)));
        for (r = 0; r < a; r++) null != f[r] && (e[r].style.display = f[r]);
        return e;
      }
      T.fn.extend({
        show: function () {
          return pe(this, !0);
        },
        hide: function () {
          return pe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                se(this) ? T(this).show() : T(this).hide();
              });
        },
      });
      var he = /^(?:checkbox|radio)$/i,
        ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i,
        ve = {
          option: [1, "<select multiple='multiple'>", "</select>"],
          thead: [1, "<table>", "</table>"],
          col: [2, "<table><colgroup>", "</colgroup></table>"],
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
          _default: [0, "", ""],
        };
      function ye(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && A(e, t)) ? T.merge([e], n) : n
        );
      }
      function we(e, t) {
        for (var n = 0, o = e.length; n < o; n++)
          K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"));
      }
      (ve.optgroup = ve.option),
        (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
        (ve.th = ve.td);
      var xe,
        ke,
        Te = /<|&#?\w+;/;
      function Ce(e, t, n, o, f) {
        for (
          var r,
            a,
            c,
            i,
            s,
            l,
            u = t.createDocumentFragment(),
            b = [],
            d = 0,
            p = e.length;
          d < p;
          d++
        )
          if ((r = e[d]) || 0 === r)
            if ("object" === k(r)) T.merge(b, r.nodeType ? [r] : r);
            else if (Te.test(r)) {
              for (
                a = a || u.appendChild(t.createElement("div")),
                  c = (ge.exec(r) || ["", ""])[1].toLowerCase(),
                  i = ve[c] || ve._default,
                  a.innerHTML = i[1] + T.htmlPrefilter(r) + i[2],
                  l = i[0];
                l--;

              )
                a = a.lastChild;
              T.merge(b, a.childNodes), ((a = u.firstChild).textContent = "");
            } else b.push(t.createTextNode(r));
        for (u.textContent = "", d = 0; (r = b[d++]); )
          if (o && T.inArray(r, o) > -1) f && f.push(r);
          else if (
            ((s = ce(r)), (a = ye(u.appendChild(r), "script")), s && we(a), n)
          )
            for (l = 0; (r = a[l++]); ) me.test(r.type || "") && n.push(r);
        return u;
      }
      (xe = a.createDocumentFragment().appendChild(a.createElement("div"))),
        (ke = a.createElement("input")).setAttribute("type", "radio"),
        ke.setAttribute("checked", "checked"),
        ke.setAttribute("name", "t"),
        xe.appendChild(ke),
        (m.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (xe.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue);
      var je = /^key/,
        Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        qe = /^([^.]*)(?:\.(.+)|)/;
      function Ee() {
        return !0;
      }
      function De() {
        return !1;
      }
      function Ae(e, t) {
        return (
          (e ===
            (function () {
              try {
                return a.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Ne(e, t, n, o, f, r) {
        var a, c;
        if ("object" == typeof t) {
          for (c in ("string" != typeof n && ((o = o || n), (n = void 0)), t))
            Ne(e, c, n, o, t[c], r);
          return e;
        }
        if (
          (null == o && null == f
            ? ((f = n), (o = n = void 0))
            : null == f &&
              ("string" == typeof n
                ? ((f = o), (o = void 0))
                : ((f = o), (o = n), (n = void 0))),
          !1 === f)
        )
          f = De;
        else if (!f) return e;
        return (
          1 === r &&
            ((a = f),
            ((f = function (e) {
              return T().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = T.guid++))),
          e.each(function () {
            T.event.add(this, t, f, o, n);
          })
        );
      }
      function Le(e, t, n) {
        n
          ? (K.set(e, t, !1),
            T.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var o,
                  f,
                  r = K.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (r.length)
                    (T.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((r = i.call(arguments)),
                    K.set(this, t, r),
                    (o = n(this, t)),
                    this[t](),
                    r !== (f = K.get(this, t)) || o
                      ? K.set(this, t, !1)
                      : (f = {}),
                    r !== f)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), f.value
                    );
                } else
                  r.length &&
                    (K.set(this, t, {
                      value: T.event.trigger(
                        T.extend(r[0], T.Event.prototype),
                        r.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === K.get(e, t) && T.event.add(e, t, Ee);
      }
      (T.event = {
        global: {},
        add: function (e, t, n, o, f) {
          var r,
            a,
            c,
            i,
            s,
            l,
            u,
            b,
            d,
            p,
            h,
            g = K.get(e);
          if (g)
            for (
              n.handler && ((n = (r = n).handler), (f = r.selector)),
                f && T.find.matchesSelector(ae, f),
                n.guid || (n.guid = T.guid++),
                (i = g.events) || (i = g.events = {}),
                (a = g.handle) ||
                  (a = g.handle = function (t) {
                    return void 0 !== T && T.event.triggered !== t.type
                      ? T.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                s = (t = (t || "").match(I) || [""]).length;
              s--;

            )
              (d = h = (c = qe.exec(t[s]) || [])[1]),
                (p = (c[2] || "").split(".").sort()),
                d &&
                  ((u = T.event.special[d] || {}),
                  (d = (f ? u.delegateType : u.bindType) || d),
                  (u = T.event.special[d] || {}),
                  (l = T.extend(
                    {
                      type: d,
                      origType: h,
                      data: o,
                      handler: n,
                      guid: n.guid,
                      selector: f,
                      needsContext: f && T.expr.match.needsContext.test(f),
                      namespace: p.join("."),
                    },
                    r
                  )),
                  (b = i[d]) ||
                    (((b = i[d] = []).delegateCount = 0),
                    (u.setup && !1 !== u.setup.call(e, o, p, a)) ||
                      (e.addEventListener && e.addEventListener(d, a))),
                  u.add &&
                    (u.add.call(e, l),
                    l.handler.guid || (l.handler.guid = n.guid)),
                  f ? b.splice(b.delegateCount++, 0, l) : b.push(l),
                  (T.event.global[d] = !0));
        },
        remove: function (e, t, n, o, f) {
          var r,
            a,
            c,
            i,
            s,
            l,
            u,
            b,
            d,
            p,
            h,
            g = K.hasData(e) && K.get(e);
          if (g && (i = g.events)) {
            for (s = (t = (t || "").match(I) || [""]).length; s--; )
              if (
                ((d = h = (c = qe.exec(t[s]) || [])[1]),
                (p = (c[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  u = T.event.special[d] || {},
                    b = i[(d = (o ? u.delegateType : u.bindType) || d)] || [],
                    c =
                      c[2] &&
                      new RegExp(
                        "(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = r = b.length;
                  r--;

                )
                  (l = b[r]),
                    (!f && h !== l.origType) ||
                      (n && n.guid !== l.guid) ||
                      (c && !c.test(l.namespace)) ||
                      (o && o !== l.selector && ("**" !== o || !l.selector)) ||
                      (b.splice(r, 1),
                      l.selector && b.delegateCount--,
                      u.remove && u.remove.call(e, l));
                a &&
                  !b.length &&
                  ((u.teardown && !1 !== u.teardown.call(e, p, g.handle)) ||
                    T.removeEvent(e, d, g.handle),
                  delete i[d]);
              } else for (d in i) T.event.remove(e, d + t[s], n, o, !0);
            T.isEmptyObject(i) && K.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            o,
            f,
            r,
            a,
            c = T.event.fix(e),
            i = new Array(arguments.length),
            s = (K.get(this, "events") || {})[c.type] || [],
            l = T.event.special[c.type] || {};
          for (i[0] = c, t = 1; t < arguments.length; t++) i[t] = arguments[t];
          if (
            ((c.delegateTarget = this),
            !l.preDispatch || !1 !== l.preDispatch.call(this, c))
          ) {
            for (
              a = T.event.handlers.call(this, c, s), t = 0;
              (f = a[t++]) && !c.isPropagationStopped();

            )
              for (
                c.currentTarget = f.elem, n = 0;
                (r = f.handlers[n++]) && !c.isImmediatePropagationStopped();

              )
                (c.rnamespace &&
                  !1 !== r.namespace &&
                  !c.rnamespace.test(r.namespace)) ||
                  ((c.handleObj = r),
                  (c.data = r.data),
                  void 0 !==
                    (o = (
                      (T.event.special[r.origType] || {}).handle || r.handler
                    ).apply(f.elem, i)) &&
                    !1 === (c.result = o) &&
                    (c.preventDefault(), c.stopPropagation()));
            return l.postDispatch && l.postDispatch.call(this, c), c.result;
          }
        },
        handlers: function (e, t) {
          var n,
            o,
            f,
            r,
            a,
            c = [],
            i = t.delegateCount,
            s = e.target;
          if (i && s.nodeType && !("click" === e.type && e.button >= 1))
            for (; s !== this; s = s.parentNode || this)
              if (
                1 === s.nodeType &&
                ("click" !== e.type || !0 !== s.disabled)
              ) {
                for (r = [], a = {}, n = 0; n < i; n++)
                  void 0 === a[(f = (o = t[n]).selector + " ")] &&
                    (a[f] = o.needsContext
                      ? T(f, this).index(s) > -1
                      : T.find(f, this, null, [s]).length),
                    a[f] && r.push(o);
                r.length && c.push({ elem: s, handlers: r });
              }
          return (
            (s = this),
            i < t.length && c.push({ elem: s, handlers: t.slice(i) }),
            c
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(T.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[T.expando] ? e : new T.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                he.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  Le(t, "click", Ee),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                he.test(t.type) && t.click && A(t, "input") && Le(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (he.test(t.type) &&
                  t.click &&
                  A(t, "input") &&
                  K.get(t, "click")) ||
                A(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (T.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
          if (!(this instanceof T.Event)) return new T.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Ee
                  : De),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && T.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
          constructor: T.Event,
          isDefaultPrevented: De,
          isPropagationStopped: De,
          isImmediatePropagationStopped: De,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Ee),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Ee),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Ee),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        T.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && je.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Se.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          T.event.special[e] = {
            setup: function () {
              return Le(this, e, Ae), !1;
            },
            trigger: function () {
              return Le(this, e), !0;
            },
            delegateType: t,
          };
        }),
        T.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            T.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  o = this,
                  f = e.relatedTarget,
                  r = e.handleObj;
                return (
                  (f && (f === o || T.contains(o, f))) ||
                    ((e.type = r.origType),
                    (n = r.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        T.fn.extend({
          on: function (e, t, n, o) {
            return Ne(this, e, t, n, o);
          },
          one: function (e, t, n, o) {
            return Ne(this, e, t, n, o, 1);
          },
          off: function (e, t, n) {
            var o, f;
            if (e && e.preventDefault && e.handleObj)
              return (
                (o = e.handleObj),
                T(e.delegateTarget).off(
                  o.namespace ? o.origType + "." + o.namespace : o.origType,
                  o.selector,
                  o.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (f in e) this.off(f, t, e[f]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = De),
              this.each(function () {
                T.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        He = /<script|<style|<link/i,
        Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Pe(e, t) {
        return (
          (A(e, "table") &&
            A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            T(e).children("tbody")[0]) ||
          e
        );
      }
      function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function ze(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function $e(e, t) {
        var n, o, f, r, a, c, i, s;
        if (1 === t.nodeType) {
          if (
            K.hasData(e) &&
            ((r = K.access(e)), (a = K.set(t, r)), (s = r.events))
          )
            for (f in (delete a.handle, (a.events = {}), s))
              for (n = 0, o = s[f].length; n < o; n++)
                T.event.add(t, f, s[f][n]);
          Z.hasData(e) &&
            ((c = Z.access(e)), (i = T.extend({}, c)), Z.set(t, i));
        }
      }
      function Be(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && he.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function We(e, t, n, o) {
        t = s.apply([], t);
        var f,
          r,
          a,
          c,
          i,
          l,
          u = 0,
          b = e.length,
          d = b - 1,
          p = t[0],
          h = v(p);
        if (h || (b > 1 && "string" == typeof p && !m.checkClone && Me.test(p)))
          return e.each(function (f) {
            var r = e.eq(f);
            h && (t[0] = p.call(this, f, r.html())), We(r, t, n, o);
          });
        if (
          b &&
          ((r = (f = Ce(t, e[0].ownerDocument, !1, e, o)).firstChild),
          1 === f.childNodes.length && (f = r),
          r || o)
        ) {
          for (c = (a = T.map(ye(f, "script"), Ie)).length; u < b; u++)
            (i = f),
              u !== d &&
                ((i = T.clone(i, !0, !0)), c && T.merge(a, ye(i, "script"))),
              n.call(e[u], i, u);
          if (c)
            for (
              l = a[a.length - 1].ownerDocument, T.map(a, ze), u = 0;
              u < c;
              u++
            )
              (i = a[u]),
                me.test(i.type || "") &&
                  !K.access(i, "globalEval") &&
                  T.contains(l, i) &&
                  (i.src && "module" !== (i.type || "").toLowerCase()
                    ? T._evalUrl &&
                      !i.noModule &&
                      T._evalUrl(i.src, {
                        nonce: i.nonce || i.getAttribute("nonce"),
                      })
                    : x(i.textContent.replace(Re, ""), i, l));
        }
        return e;
      }
      function Fe(e, t, n) {
        for (var o, f = t ? T.filter(t, e) : e, r = 0; null != (o = f[r]); r++)
          n || 1 !== o.nodeType || T.cleanData(ye(o)),
            o.parentNode &&
              (n && ce(o) && we(ye(o, "script")), o.parentNode.removeChild(o));
        return e;
      }
      T.extend({
        htmlPrefilter: function (e) {
          return e.replace(Oe, "<$1></$2>");
        },
        clone: function (e, t, n) {
          var o,
            f,
            r,
            a,
            c = e.cloneNode(!0),
            i = ce(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              T.isXMLDoc(e)
            )
          )
            for (a = ye(c), o = 0, f = (r = ye(e)).length; o < f; o++)
              Be(r[o], a[o]);
          if (t)
            if (n)
              for (
                r = r || ye(e), a = a || ye(c), o = 0, f = r.length;
                o < f;
                o++
              )
                $e(r[o], a[o]);
            else $e(e, c);
          return (
            (a = ye(c, "script")).length > 0 && we(a, !i && ye(e, "script")), c
          );
        },
        cleanData: function (e) {
          for (
            var t, n, o, f = T.event.special, r = 0;
            void 0 !== (n = e[r]);
            r++
          )
            if (J(n)) {
              if ((t = n[K.expando])) {
                if (t.events)
                  for (o in t.events)
                    f[o] ? T.event.remove(n, o) : T.removeEvent(n, o, t.handle);
                n[K.expando] = void 0;
              }
              n[Z.expando] && (n[Z.expando] = void 0);
            }
        },
      }),
        T.fn.extend({
          detach: function (e) {
            return Fe(this, e, !0);
          },
          remove: function (e) {
            return Fe(this, e);
          },
          text: function (e) {
            return U(
              this,
              function (e) {
                return void 0 === e
                  ? T.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return We(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Pe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return We(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Pe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return We(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return We(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (T.cleanData(ye(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return T.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return U(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !He.test(e) &&
                  !ve[(ge.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = T.htmlPrefilter(e);
                  try {
                    for (; n < o; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (T.cleanData(ye(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return We(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                T.inArray(this, e) < 0 &&
                  (T.cleanData(ye(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        T.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            T.fn[e] = function (e) {
              for (
                var n, o = [], f = T(e), r = f.length - 1, a = 0;
                a <= r;
                a++
              )
                (n = a === r ? this : this.clone(!0)),
                  T(f[a])[t](n),
                  l.apply(o, n.get());
              return this.pushStack(o);
            };
          }
        );
      var _e = new RegExp("^(" + oe + ")(?!px)[a-z%]+$", "i"),
        Ue = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Xe = new RegExp(re.join("|"), "i");
      function Ve(e, t, n) {
        var o,
          f,
          r,
          a,
          c = e.style;
        return (
          (n = n || Ue(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              ce(e) ||
              (a = T.style(e, t)),
            !m.pixelBoxStyles() &&
              _e.test(a) &&
              Xe.test(t) &&
              ((o = c.width),
              (f = c.minWidth),
              (r = c.maxWidth),
              (c.minWidth = c.maxWidth = c.width = a),
              (a = n.width),
              (c.width = o),
              (c.minWidth = f),
              (c.maxWidth = r))),
          void 0 !== a ? a + "" : a
        );
      }
      function Ye(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (l) {
            (s.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (l.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ae.appendChild(s).appendChild(l);
            var e = n.getComputedStyle(l);
            (o = "1%" !== e.top),
              (i = 12 === t(e.marginLeft)),
              (l.style.right = "60%"),
              (c = 36 === t(e.right)),
              (f = 36 === t(e.width)),
              (l.style.position = "absolute"),
              (r = 12 === t(l.offsetWidth / 3)),
              ae.removeChild(s),
              (l = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var o,
          f,
          r,
          c,
          i,
          s = a.createElement("div"),
          l = a.createElement("div");
        l.style &&
          ((l.style.backgroundClip = "content-box"),
          (l.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === l.style.backgroundClip),
          T.extend(m, {
            boxSizingReliable: function () {
              return e(), f;
            },
            pixelBoxStyles: function () {
              return e(), c;
            },
            pixelPosition: function () {
              return e(), o;
            },
            reliableMarginLeft: function () {
              return e(), i;
            },
            scrollboxSize: function () {
              return e(), r;
            },
          }));
      })();
      var Ge = ["Webkit", "Moz", "ms"],
        Je = a.createElement("div").style,
        Qe = {};
      function Ke(e) {
        var t = T.cssProps[e] || Qe[e];
        return (
          t ||
          (e in Je
            ? e
            : (Qe[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
                    n--;

                  )
                    if ((e = Ge[n] + t) in Je) return e;
                })(e) || e))
        );
      }
      var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };
      function ot(e, t, n) {
        var o = fe.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t;
      }
      function ft(e, t, n, o, f, r) {
        var a = "width" === t ? 1 : 0,
          c = 0,
          i = 0;
        if (n === (o ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (i += T.css(e, n + re[a], !0, f)),
            o
              ? ("content" === n && (i -= T.css(e, "padding" + re[a], !0, f)),
                "margin" !== n &&
                  (i -= T.css(e, "border" + re[a] + "Width", !0, f)))
              : ((i += T.css(e, "padding" + re[a], !0, f)),
                "padding" !== n
                  ? (i += T.css(e, "border" + re[a] + "Width", !0, f))
                  : (c += T.css(e, "border" + re[a] + "Width", !0, f)));
        return (
          !o &&
            r >= 0 &&
            (i +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    r -
                    i -
                    c -
                    0.5
                )
              ) || 0),
          i
        );
      }
      function rt(e, t, n) {
        var o = Ue(e),
          f =
            (!m.boxSizingReliable() || n) &&
            "border-box" === T.css(e, "boxSizing", !1, o),
          r = f,
          a = Ve(e, t, o),
          c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (_e.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!m.boxSizingReliable() && f) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === T.css(e, "display", !1, o))) &&
            e.getClientRects().length &&
            ((f = "border-box" === T.css(e, "boxSizing", !1, o)),
            (r = c in e) && (a = e[c])),
          (a = parseFloat(a) || 0) +
            ft(e, t, n || (f ? "border" : "content"), r, o, a) +
            "px"
        );
      }
      function at(e, t, n, o, f) {
        return new at.prototype.init(e, t, n, o, f);
      }
      T.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ve(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, o) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var f,
              r,
              a,
              c = G(t),
              i = et.test(t),
              s = e.style;
            if (
              (i || (t = Ke(c)),
              (a = T.cssHooks[t] || T.cssHooks[c]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (f = a.get(e, !1, o))
                ? f
                : s[t];
            "string" === (r = typeof n) &&
              (f = fe.exec(n)) &&
              f[1] &&
              ((n = ue(e, t, f)), (r = "number")),
              null != n &&
                n == n &&
                ("number" !== r ||
                  i ||
                  (n += (f && f[3]) || (T.cssNumber[c] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (s[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, o))) ||
                  (i ? s.setProperty(t, n) : (s[t] = n)));
          }
        },
        css: function (e, t, n, o) {
          var f,
            r,
            a,
            c = G(t);
          return (
            et.test(t) || (t = Ke(c)),
            (a = T.cssHooks[t] || T.cssHooks[c]) &&
              "get" in a &&
              (f = a.get(e, !0, n)),
            void 0 === f && (f = Ve(e, t, o)),
            "normal" === f && t in nt && (f = nt[t]),
            "" === n || n
              ? ((r = parseFloat(f)), !0 === n || isFinite(r) ? r || 0 : f)
              : f
          );
        },
      }),
        T.each(["height", "width"], function (e, t) {
          T.cssHooks[t] = {
            get: function (e, n, o) {
              if (n)
                return !Ze.test(T.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, o)
                  : le(e, tt, function () {
                      return rt(e, t, o);
                    });
            },
            set: function (e, n, o) {
              var f,
                r = Ue(e),
                a = !m.scrollboxSize() && "absolute" === r.position,
                c = (a || o) && "border-box" === T.css(e, "boxSizing", !1, r),
                i = o ? ft(e, t, o, c, r) : 0;
              return (
                c &&
                  a &&
                  (i -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(r[t]) -
                      ft(e, t, "border", !1, r) -
                      0.5
                  )),
                i &&
                  (f = fe.exec(n)) &&
                  "px" !== (f[3] || "px") &&
                  ((e.style[t] = n), (n = T.css(e, t))),
                ot(0, n, i)
              );
            },
          };
        }),
        (T.cssHooks.marginLeft = Ye(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ve(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  le(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (T.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var o = 0,
                  f = {},
                  r = "string" == typeof n ? n.split(" ") : [n];
                o < 4;
                o++
              )
                f[e + re[o] + t] = r[o] || r[o - 2] || r[0];
              return f;
            },
          }),
            "margin" !== e && (T.cssHooks[e + t].set = ot);
        }),
        T.fn.extend({
          css: function (e, t) {
            return U(
              this,
              function (e, t, n) {
                var o,
                  f,
                  r = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (o = Ue(e), f = t.length; a < f; a++)
                    r[t[a]] = T.css(e, t[a], !1, o);
                  return r;
                }
                return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (T.Tween = at),
        (at.prototype = {
          constructor: at,
          init: function (e, t, n, o, f, r) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = f || T.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = o),
              (this.unit = r || (T.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = at.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = T.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : at.propHooks._default.set(this),
              this
            );
          },
        }),
        (at.prototype.init.prototype = at.prototype),
        (at.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              T.fx.step[e.prop]
                ? T.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!T.cssHooks[e.prop] && null == e.elem.style[Ke(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : T.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (at.propHooks.scrollTop = at.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (T.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (T.fx = at.prototype.init),
        (T.fx.step = {});
      var ct,
        it,
        st = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
      function ut() {
        it &&
          (!1 === a.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ut)
            : n.setTimeout(ut, T.fx.interval),
          T.fx.tick());
      }
      function bt() {
        return (
          n.setTimeout(function () {
            ct = void 0;
          }),
          (ct = Date.now())
        );
      }
      function dt(e, t) {
        var n,
          o = 0,
          f = { height: e };
        for (t = t ? 1 : 0; o < 4; o += 2 - t)
          f["margin" + (n = re[o])] = f["padding" + n] = e;
        return t && (f.opacity = f.width = e), f;
      }
      function pt(e, t, n) {
        for (
          var o,
            f = (ht.tweeners[t] || []).concat(ht.tweeners["*"]),
            r = 0,
            a = f.length;
          r < a;
          r++
        )
          if ((o = f[r].call(n, t, e))) return o;
      }
      function ht(e, t, n) {
        var o,
          f,
          r = 0,
          a = ht.prefilters.length,
          c = T.Deferred().always(function () {
            delete i.elem;
          }),
          i = function () {
            if (f) return !1;
            for (
              var t = ct || bt(),
                n = Math.max(0, s.startTime + s.duration - t),
                o = 1 - (n / s.duration || 0),
                r = 0,
                a = s.tweens.length;
              r < a;
              r++
            )
              s.tweens[r].run(o);
            return (
              c.notifyWith(e, [s, o, n]),
              o < 1 && a
                ? n
                : (a || c.notifyWith(e, [s, 1, 0]), c.resolveWith(e, [s]), !1)
            );
          },
          s = c.promise({
            elem: e,
            props: T.extend({}, t),
            opts: T.extend(
              !0,
              { specialEasing: {}, easing: T.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ct || bt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var o = T.Tween(
                e,
                s.opts,
                t,
                n,
                s.opts.specialEasing[t] || s.opts.easing
              );
              return s.tweens.push(o), o;
            },
            stop: function (t) {
              var n = 0,
                o = t ? s.tweens.length : 0;
              if (f) return this;
              for (f = !0; n < o; n++) s.tweens[n].run(1);
              return (
                t
                  ? (c.notifyWith(e, [s, 1, 0]), c.resolveWith(e, [s, t]))
                  : c.rejectWith(e, [s, t]),
                this
              );
            },
          }),
          l = s.props;
        for (
          !(function (e, t) {
            var n, o, f, r, a;
            for (n in e)
              if (
                ((f = t[(o = G(n))]),
                (r = e[n]),
                Array.isArray(r) && ((f = r[1]), (r = e[n] = r[0])),
                n !== o && ((e[o] = r), delete e[n]),
                (a = T.cssHooks[o]) && ("expand" in a))
              )
                for (n in ((r = a.expand(r)), delete e[o], r))
                  (n in e) || ((e[n] = r[n]), (t[n] = f));
              else t[o] = f;
          })(l, s.opts.specialEasing);
          r < a;
          r++
        )
          if ((o = ht.prefilters[r].call(s, e, l, s.opts)))
            return (
              v(o.stop) &&
                (T._queueHooks(s.elem, s.opts.queue).stop = o.stop.bind(o)),
              o
            );
        return (
          T.map(l, pt, s),
          v(s.opts.start) && s.opts.start.call(e, s),
          s
            .progress(s.opts.progress)
            .done(s.opts.done, s.opts.complete)
            .fail(s.opts.fail)
            .always(s.opts.always),
          T.fx.timer(T.extend(i, { elem: e, anim: s, queue: s.opts.queue })),
          s
        );
      }
      (T.Animation = T.extend(ht, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, fe.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
          for (var n, o = 0, f = e.length; o < f; o++)
            (n = e[o]),
              (ht.tweeners[n] = ht.tweeners[n] || []),
              ht.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var o,
              f,
              r,
              a,
              c,
              i,
              s,
              l,
              u = "width" in t || "height" in t,
              b = this,
              d = {},
              p = e.style,
              h = e.nodeType && se(e),
              g = K.get(e, "fxshow");
            for (o in (n.queue ||
              (null == (a = T._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (c = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || c();
                })),
              a.unqueued++,
              b.always(function () {
                b.always(function () {
                  a.unqueued--, T.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((f = t[o]), st.test(f))) {
                if (
                  (delete t[o],
                  (r = r || "toggle" === f),
                  f === (h ? "hide" : "show"))
                ) {
                  if ("show" !== f || !g || void 0 === g[o]) continue;
                  h = !0;
                }
                d[o] = (g && g[o]) || T.style(e, o);
              }
            if ((i = !T.isEmptyObject(t)) || !T.isEmptyObject(d))
              for (o in (u &&
                1 === e.nodeType &&
                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                null == (s = g && g.display) && (s = K.get(e, "display")),
                "none" === (l = T.css(e, "display")) &&
                  (s
                    ? (l = s)
                    : (pe([e], !0),
                      (s = e.style.display || s),
                      (l = T.css(e, "display")),
                      pe([e]))),
                ("inline" === l || ("inline-block" === l && null != s)) &&
                  "none" === T.css(e, "float") &&
                  (i ||
                    (b.done(function () {
                      p.display = s;
                    }),
                    null == s &&
                      ((l = p.display), (s = "none" === l ? "" : l))),
                  (p.display = "inline-block"))),
              n.overflow &&
                ((p.overflow = "hidden"),
                b.always(function () {
                  (p.overflow = n.overflow[0]),
                    (p.overflowX = n.overflow[1]),
                    (p.overflowY = n.overflow[2]);
                })),
              (i = !1),
              d))
                i ||
                  (g
                    ? "hidden" in g && (h = g.hidden)
                    : (g = K.access(e, "fxshow", { display: s })),
                  r && (g.hidden = !h),
                  h && pe([e], !0),
                  b.done(function () {
                    for (o in (h || pe([e]), K.remove(e, "fxshow"), d))
                      T.style(e, o, d[o]);
                  })),
                  (i = pt(h ? g[o] : 0, o, b)),
                  o in g ||
                    ((g[o] = i.start), h && ((i.end = i.start), (i.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
        },
      })),
        (T.speed = function (e, t, n) {
          var o =
            e && "object" == typeof e
              ? T.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t),
                };
          return (
            T.fx.off
              ? (o.duration = 0)
              : "number" != typeof o.duration &&
                (o.duration in T.fx.speeds
                  ? (o.duration = T.fx.speeds[o.duration])
                  : (o.duration = T.fx.speeds._default)),
            (null != o.queue && !0 !== o.queue) || (o.queue = "fx"),
            (o.old = o.complete),
            (o.complete = function () {
              v(o.old) && o.old.call(this), o.queue && T.dequeue(this, o.queue);
            }),
            o
          );
        }),
        T.fn.extend({
          fadeTo: function (e, t, n, o) {
            return this.filter(se)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, o);
          },
          animate: function (e, t, n, o) {
            var f = T.isEmptyObject(e),
              r = T.speed(t, n, o),
              a = function () {
                var t = ht(this, T.extend({}, e), r);
                (f || K.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              f || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
            );
          },
          stop: function (e, t, n) {
            var o = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && !1 !== e && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  f = null != e && e + "queueHooks",
                  r = T.timers,
                  a = K.get(this);
                if (f) a[f] && a[f].stop && o(a[f]);
                else for (f in a) a[f] && a[f].stop && lt.test(f) && o(a[f]);
                for (f = r.length; f--; )
                  r[f].elem !== this ||
                    (null != e && r[f].queue !== e) ||
                    (r[f].anim.stop(n), (t = !1), r.splice(f, 1));
                (!t && n) || T.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = K.get(this),
                  o = n[e + "queue"],
                  f = n[e + "queueHooks"],
                  r = T.timers,
                  a = o ? o.length : 0;
                for (
                  n.finish = !0,
                    T.queue(this, e, []),
                    f && f.stop && f.stop.call(this, !0),
                    t = r.length;
                  t--;

                )
                  r[t].elem === this &&
                    r[t].queue === e &&
                    (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; t < a; t++)
                  o[t] && o[t].finish && o[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        T.each(["toggle", "show", "hide"], function (e, t) {
          var n = T.fn[t];
          T.fn[t] = function (e, o, f) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(dt(t, !0), e, o, f);
          };
        }),
        T.each(
          {
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            T.fn[e] = function (e, n, o) {
              return this.animate(t, e, n, o);
            };
          }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
          var e,
            t = 0,
            n = T.timers;
          for (ct = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || T.fx.stop(), (ct = void 0);
        }),
        (T.fx.timer = function (e) {
          T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
          it || ((it = !0), ut());
        }),
        (T.fx.stop = function () {
          it = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (e, t) {
          return (
            (e = (T.fx && T.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, o) {
              var f = n.setTimeout(t, e);
              o.stop = function () {
                n.clearTimeout(f);
              };
            })
          );
        }),
        (function () {
          var e = a.createElement("input"),
            t = a
              .createElement("select")
              .appendChild(a.createElement("option"));
          (e.type = "checkbox"),
            (m.checkOn = "" !== e.value),
            (m.optSelected = t.selected),
            ((e = a.createElement("input")).value = "t"),
            (e.type = "radio"),
            (m.radioValue = "t" === e.value);
        })();
      var gt,
        mt = T.expr.attrHandle;
      T.fn.extend({
        attr: function (e, t) {
          return U(this, T.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            T.removeAttr(this, e);
          });
        },
      }),
        T.extend({
          attr: function (e, t, n) {
            var o,
              f,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return void 0 === e.getAttribute
                ? T.prop(e, t, n)
                : ((1 === r && T.isXMLDoc(e)) ||
                    (f =
                      T.attrHooks[t.toLowerCase()] ||
                      (T.expr.match.bool.test(t) ? gt : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void T.removeAttr(e, t)
                      : f && "set" in f && void 0 !== (o = f.set(e, n, t))
                      ? o
                      : (e.setAttribute(t, n + ""), n)
                    : f && "get" in f && null !== (o = f.get(e, t))
                    ? o
                    : null == (o = T.find.attr(e, t))
                    ? void 0
                    : o);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && A(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              o = 0,
              f = t && t.match(I);
            if (f && 1 === e.nodeType)
              for (; (n = f[o++]); ) e.removeAttribute(n);
          },
        }),
        (gt = {
          set: function (e, t, n) {
            return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = mt[t] || T.find.attr;
          mt[t] = function (e, t, o) {
            var f,
              r,
              a = t.toLowerCase();
            return (
              o ||
                ((r = mt[a]),
                (mt[a] = f),
                (f = null != n(e, t, o) ? a : null),
                (mt[a] = r)),
              f
            );
          };
        });
      var vt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
      function wt(e) {
        return (e.match(I) || []).join(" ");
      }
      function xt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function kt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(I)) || [];
      }
      T.fn.extend({
        prop: function (e, t) {
          return U(this, T.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[T.propFix[e] || e];
          });
        },
      }),
        T.extend({
          prop: function (e, t, n) {
            var o,
              f,
              r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
              return (
                (1 === r && T.isXMLDoc(e)) ||
                  ((t = T.propFix[t] || t), (f = T.propHooks[t])),
                void 0 !== n
                  ? f && "set" in f && void 0 !== (o = f.set(e, n, t))
                    ? o
                    : (e[t] = n)
                  : f && "get" in f && null !== (o = f.get(e, t))
                  ? o
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = T.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : vt.test(e.nodeName) || (yt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (T.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        T.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            T.propFix[this.toLowerCase()] = this;
          }
        ),
        T.fn.extend({
          addClass: function (e) {
            var t,
              n,
              o,
              f,
              r,
              a,
              c,
              i = 0;
            if (v(e))
              return this.each(function (t) {
                T(this).addClass(e.call(this, t, xt(this)));
              });
            if ((t = kt(e)).length)
              for (; (n = this[i++]); )
                if (
                  ((f = xt(n)), (o = 1 === n.nodeType && " " + wt(f) + " "))
                ) {
                  for (a = 0; (r = t[a++]); )
                    o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                  f !== (c = wt(o)) && n.setAttribute("class", c);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              o,
              f,
              r,
              a,
              c,
              i = 0;
            if (v(e))
              return this.each(function (t) {
                T(this).removeClass(e.call(this, t, xt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = kt(e)).length)
              for (; (n = this[i++]); )
                if (
                  ((f = xt(n)), (o = 1 === n.nodeType && " " + wt(f) + " "))
                ) {
                  for (a = 0; (r = t[a++]); )
                    for (; o.indexOf(" " + r + " ") > -1; )
                      o = o.replace(" " + r + " ", " ");
                  f !== (c = wt(o)) && n.setAttribute("class", c);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              o = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && o
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : v(e)
              ? this.each(function (n) {
                  T(this).toggleClass(e.call(this, n, xt(this), t), t);
                })
              : this.each(function () {
                  var t, f, r, a;
                  if (o)
                    for (f = 0, r = T(this), a = kt(e); (t = a[f++]); )
                      r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = xt(this)) && K.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : K.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              o = 0;
            for (t = " " + e + " "; (n = this[o++]); )
              if (1 === n.nodeType && (" " + wt(xt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var Tt = /\r/g;
      T.fn.extend({
        val: function (e) {
          var t,
            n,
            o,
            f = this[0];
          return arguments.length
            ? ((o = v(e)),
              this.each(function (n) {
                var f;
                1 === this.nodeType &&
                  (null == (f = o ? e.call(this, n, T(this).val()) : e)
                    ? (f = "")
                    : "number" == typeof f
                    ? (f += "")
                    : Array.isArray(f) &&
                      (f = T.map(f, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    T.valHooks[this.type] ||
                    T.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, f, "value")) ||
                    (this.value = f));
              }))
            : f
            ? (t =
                T.valHooks[f.type] || T.valHooks[f.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(f, "value"))
              ? n
              : "string" == typeof (n = f.value)
              ? n.replace(Tt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        T.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = T.find.attr(e, "value");
                return null != t ? t : wt(T.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  o,
                  f = e.options,
                  r = e.selectedIndex,
                  a = "select-one" === e.type,
                  c = a ? null : [],
                  i = a ? r + 1 : f.length;
                for (o = r < 0 ? i : a ? r : 0; o < i; o++)
                  if (
                    ((n = f[o]).selected || o === r) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
                  ) {
                    if (((t = T(n).val()), a)) return t;
                    c.push(t);
                  }
                return c;
              },
              set: function (e, t) {
                for (
                  var n, o, f = e.options, r = T.makeArray(t), a = f.length;
                  a--;

                )
                  ((o = f[a]).selected =
                    T.inArray(T.valHooks.option.get(o), r) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), r;
              },
            },
          },
        }),
        T.each(["radio", "checkbox"], function () {
          (T.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = T.inArray(T(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
              (T.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var Ct = /^(?:focusinfocus|focusoutblur)$/,
        jt = function (e) {
          e.stopPropagation();
        };
      T.extend(T.event, {
        trigger: function (e, t, o, f) {
          var r,
            c,
            i,
            s,
            l,
            u,
            b,
            d,
            h = [o || a],
            g = p.call(e, "type") ? e.type : e,
            m = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((c = d = i = o = o || a),
            3 !== o.nodeType &&
              8 !== o.nodeType &&
              !Ct.test(g + T.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (l = g.indexOf(":") < 0 && "on" + g),
              ((e = e[T.expando]
                ? e
                : new T.Event(g, "object" == typeof e && e)).isTrigger = f
                ? 2
                : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = o),
              (t = null == t ? [e] : T.makeArray(t, [e])),
              (b = T.event.special[g] || {}),
              f || !b.trigger || !1 !== b.trigger.apply(o, t)))
          ) {
            if (!f && !b.noBubble && !y(o)) {
              for (
                s = b.delegateType || g, Ct.test(s + g) || (c = c.parentNode);
                c;
                c = c.parentNode
              )
                h.push(c), (i = c);
              i === (o.ownerDocument || a) &&
                h.push(i.defaultView || i.parentWindow || n);
            }
            for (r = 0; (c = h[r++]) && !e.isPropagationStopped(); )
              (d = c),
                (e.type = r > 1 ? s : b.bindType || g),
                (u =
                  (K.get(c, "events") || {})[e.type] && K.get(c, "handle")) &&
                  u.apply(c, t),
                (u = l && c[l]) &&
                  u.apply &&
                  J(c) &&
                  ((e.result = u.apply(c, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              f ||
                e.isDefaultPrevented() ||
                (b._default && !1 !== b._default.apply(h.pop(), t)) ||
                !J(o) ||
                (l &&
                  v(o[g]) &&
                  !y(o) &&
                  ((i = o[l]) && (o[l] = null),
                  (T.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, jt),
                  o[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, jt),
                  (T.event.triggered = void 0),
                  i && (o[l] = i))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var o = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
          T.event.trigger(o, null, t);
        },
      }),
        T.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              T.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return T.event.trigger(e, t, n, !0);
          },
        }),
        m.focusin ||
          T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              T.event.simulate(t, e.target, T.event.fix(e));
            };
            T.event.special[t] = {
              setup: function () {
                var o = this.ownerDocument || this,
                  f = K.access(o, t);
                f || o.addEventListener(e, n, !0), K.access(o, t, (f || 0) + 1);
              },
              teardown: function () {
                var o = this.ownerDocument || this,
                  f = K.access(o, t) - 1;
                f
                  ? K.access(o, t, f)
                  : (o.removeEventListener(e, n, !0), K.remove(o, t));
              },
            };
          });
      var St = n.location,
        qt = Date.now(),
        Et = /\?/;
      T.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            T.error("Invalid XML: " + e),
          t
        );
      };
      var Dt = /\[\]$/,
        At = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
      function Ot(e, t, n, o) {
        var f;
        if (Array.isArray(t))
          T.each(t, function (t, f) {
            n || Dt.test(e)
              ? o(e, f)
              : Ot(
                  e + "[" + ("object" == typeof f && null != f ? t : "") + "]",
                  f,
                  n,
                  o
                );
          });
        else if (n || "object" !== k(t)) o(e, t);
        else for (f in t) Ot(e + "[" + f + "]", t[f], n, o);
      }
      (T.param = function (e, t) {
        var n,
          o = [],
          f = function (e, t) {
            var n = v(t) ? t() : t;
            o[o.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
          T.each(e, function () {
            f(this.name, this.value);
          });
        else for (n in e) Ot(n, e[n], t, f);
        return o.join("&");
      }),
        T.fn.extend({
          serialize: function () {
            return T.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = T.prop(this, "elements");
              return e ? T.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !T(this).is(":disabled") &&
                  Lt.test(this.nodeName) &&
                  !Nt.test(e) &&
                  (this.checked || !he.test(e))
                );
              })
              .map(function (e, t) {
                var n = T(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? T.map(n, function (e) {
                      return { name: t.name, value: e.replace(At, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(At, "\r\n") };
              })
              .get();
          },
        });
      var Ht = /%20/g,
        Mt = /#.*$/,
        Rt = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        zt = /^\/\//,
        $t = {},
        Bt = {},
        Wt = "*/".concat("*"),
        Ft = a.createElement("a");
      function _t(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var o,
            f = 0,
            r = t.toLowerCase().match(I) || [];
          if (v(n))
            for (; (o = r[f++]); )
              "+" === o[0]
                ? ((o = o.slice(1) || "*"), (e[o] = e[o] || []).unshift(n))
                : (e[o] = e[o] || []).push(n);
        };
      }
      function Ut(e, t, n, o) {
        var f = {},
          r = e === Bt;
        function a(c) {
          var i;
          return (
            (f[c] = !0),
            T.each(e[c] || [], function (e, c) {
              var s = c(t, n, o);
              return "string" != typeof s || r || f[s]
                ? r
                  ? !(i = s)
                  : void 0
                : (t.dataTypes.unshift(s), a(s), !1);
            }),
            i
          );
        }
        return a(t.dataTypes[0]) || (!f["*"] && a("*"));
      }
      function Xt(e, t) {
        var n,
          o,
          f = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((f[n] ? e : o || (o = {}))[n] = t[n]);
        return o && T.extend(!0, e, o), e;
      }
      (Ft.href = St.href),
        T.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              St.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Wt,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": T.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Xt(Xt(e, T.ajaxSettings), t) : Xt(T.ajaxSettings, e);
          },
          ajaxPrefilter: _t($t),
          ajaxTransport: _t(Bt),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var o,
              f,
              r,
              c,
              i,
              s,
              l,
              u,
              b,
              d,
              p = T.ajaxSetup({}, t),
              h = p.context || p,
              g = p.context && (h.nodeType || h.jquery) ? T(h) : T.event,
              m = T.Deferred(),
              v = T.Callbacks("once memory"),
              y = p.statusCode || {},
              w = {},
              x = {},
              k = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!c)
                      for (c = {}; (t = Pt.exec(r)); )
                        c[t[1].toLowerCase() + " "] = (
                          c[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = c[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return l ? r : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == l &&
                      ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                      (w[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) C.always(e[C.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || k;
                  return o && o.abort(t), j(0, t), this;
                },
              };
            if (
              (m.promise(C),
              (p.url = ((e || p.url || St.href) + "").replace(
                zt,
                St.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(I) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              s = a.createElement("a");
              try {
                (s.href = p.url),
                  (s.href = s.href),
                  (p.crossDomain =
                    Ft.protocol + "//" + Ft.host != s.protocol + "//" + s.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = T.param(p.data, p.traditional)),
              Ut($t, p, t, C),
              l)
            )
              return C;
            for (b in ((u = T.event && p.global) &&
              0 == T.active++ &&
              T.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !It.test(p.type)),
            (f = p.url.replace(Mt, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(Ht, "+"))
              : ((d = p.url.slice(f.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((f += (Et.test(f) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((f = f.replace(Rt, "$1")),
                  (d = (Et.test(f) ? "&" : "?") + "_=" + qt++ + d)),
                (p.url = f + d)),
            p.ifModified &&
              (T.lastModified[f] &&
                C.setRequestHeader("If-Modified-Since", T.lastModified[f]),
              T.etag[f] && C.setRequestHeader("If-None-Match", T.etag[f])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              C.setRequestHeader(b, p.headers[b]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l))
              return C.abort();
            if (
              ((k = "abort"),
              v.add(p.complete),
              C.done(p.success),
              C.fail(p.error),
              (o = Ut(Bt, p, t, C)))
            ) {
              if (((C.readyState = 1), u && g.trigger("ajaxSend", [C, p]), l))
                return C;
              p.async &&
                p.timeout > 0 &&
                (i = n.setTimeout(function () {
                  C.abort("timeout");
                }, p.timeout));
              try {
                (l = !1), o.send(w, j);
              } catch (e) {
                if (l) throw e;
                j(-1, e);
              }
            } else j(-1, "No Transport");
            function j(e, t, a, c) {
              var s,
                b,
                d,
                w,
                x,
                k = t;
              l ||
                ((l = !0),
                i && n.clearTimeout(i),
                (o = void 0),
                (r = c || ""),
                (C.readyState = e > 0 ? 4 : 0),
                (s = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (w = (function (e, t, n) {
                    for (
                      var o, f, r, a, c = e.contents, i = e.dataTypes;
                      "*" === i[0];

                    )
                      i.shift(),
                        void 0 === o &&
                          (o =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                      for (f in c)
                        if (c[f] && c[f].test(o)) {
                          i.unshift(f);
                          break;
                        }
                    if (i[0] in n) r = i[0];
                    else {
                      for (f in n) {
                        if (!i[0] || e.converters[f + " " + i[0]]) {
                          r = f;
                          break;
                        }
                        a || (a = f);
                      }
                      r = r || a;
                    }
                    if (r) return r !== i[0] && i.unshift(r), n[r];
                  })(p, C, a)),
                (w = (function (e, t, n, o) {
                  var f,
                    r,
                    a,
                    c,
                    i,
                    s = {},
                    l = e.dataTypes.slice();
                  if (l[1])
                    for (a in e.converters)
                      s[a.toLowerCase()] = e.converters[a];
                  for (r = l.shift(); r; )
                    if (
                      (e.responseFields[r] && (n[e.responseFields[r]] = t),
                      !i &&
                        o &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (i = r),
                      (r = l.shift()))
                    )
                      if ("*" === r) r = i;
                      else if ("*" !== i && i !== r) {
                        if (!(a = s[i + " " + r] || s["* " + r]))
                          for (f in s)
                            if (
                              (c = f.split(" "))[1] === r &&
                              (a = s[i + " " + c[0]] || s["* " + c[0]])
                            ) {
                              !0 === a
                                ? (a = s[f])
                                : !0 !== s[f] && ((r = c[0]), l.unshift(c[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + i + " to " + r,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, w, C, s)),
                s
                  ? (p.ifModified &&
                      ((x = C.getResponseHeader("Last-Modified")) &&
                        (T.lastModified[f] = x),
                      (x = C.getResponseHeader("etag")) && (T.etag[f] = x)),
                    204 === e || "HEAD" === p.type
                      ? (k = "nocontent")
                      : 304 === e
                      ? (k = "notmodified")
                      : ((k = w.state), (b = w.data), (s = !(d = w.error))))
                  : ((d = k), (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || k) + ""),
                s ? m.resolveWith(h, [b, k, C]) : m.rejectWith(h, [C, k, d]),
                C.statusCode(y),
                (y = void 0),
                u &&
                  g.trigger(s ? "ajaxSuccess" : "ajaxError", [C, p, s ? b : d]),
                v.fireWith(h, [C, k]),
                u &&
                  (g.trigger("ajaxComplete", [C, p]),
                  --T.active || T.event.trigger("ajaxStop")));
            }
            return C;
          },
          getJSON: function (e, t, n) {
            return T.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return T.get(e, void 0, t, "script");
          },
        }),
        T.each(["get", "post"], function (e, t) {
          T[t] = function (e, n, o, f) {
            return (
              v(n) && ((f = f || o), (o = n), (n = void 0)),
              T.ajax(
                T.extend(
                  { url: e, type: t, dataType: f, data: n, success: o },
                  T.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        (T._evalUrl = function (e, t) {
          return T.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              T.globalEval(e, t);
            },
          });
        }),
        T.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  T(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = T(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              T(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  T(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (T.expr.pseudos.hidden = function (e) {
          return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (T.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Vt = { 0: 200, 1223: 204 },
        Yt = T.ajaxSettings.xhr();
      (m.cors = !!Yt && "withCredentials" in Yt),
        (m.ajax = Yt = !!Yt),
        T.ajaxTransport(function (e) {
          var t, o;
          if (m.cors || (Yt && !e.crossDomain))
            return {
              send: function (f, r) {
                var a,
                  c = e.xhr();
                if (
                  (c.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) c[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  c.overrideMimeType &&
                  c.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  f["X-Requested-With"] ||
                  (f["X-Requested-With"] = "XMLHttpRequest"),
                f))
                  c.setRequestHeader(a, f[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = o = c.onload = c.onerror = c.onabort = c.ontimeout = c.onreadystatechange = null),
                      "abort" === e
                        ? c.abort()
                        : "error" === e
                        ? "number" != typeof c.status
                          ? r(0, "error")
                          : r(c.status, c.statusText)
                        : r(
                            Vt[c.status] || c.status,
                            c.statusText,
                            "text" !== (c.responseType || "text") ||
                              "string" != typeof c.responseText
                              ? { binary: c.response }
                              : { text: c.responseText },
                            c.getAllResponseHeaders()
                          ));
                  };
                }),
                  (c.onload = t()),
                  (o = c.onerror = c.ontimeout = t("error")),
                  void 0 !== c.onabort
                    ? (c.onabort = o)
                    : (c.onreadystatechange = function () {
                        4 === c.readyState &&
                          n.setTimeout(function () {
                            t && o();
                          });
                      }),
                  (t = t("abort"));
                try {
                  c.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        T.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return T.globalEval(e), e;
            },
          },
        }),
        T.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (o, f) {
                (t = T("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && f("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  a.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Gt,
        Jt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
      T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Jt.pop() || T.expando + "_" + qt++;
          return (this[e] = !0), e;
        },
      }),
        T.ajaxPrefilter("json jsonp", function (e, t, o) {
          var f,
            r,
            a,
            c =
              !1 !== e.jsonp &&
              (Qt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Qt.test(e.data) &&
                  "data");
          if (c || "jsonp" === e.dataTypes[0])
            return (
              (f = e.jsonpCallback = v(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              c
                ? (e[c] = e[c].replace(Qt, "$1" + f))
                : !1 !== e.jsonp &&
                  (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + f),
              (e.converters["script json"] = function () {
                return a || T.error(f + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (r = n[f]),
              (n[f] = function () {
                a = arguments;
              }),
              o.always(function () {
                void 0 === r ? T(n).removeProp(f) : (n[f] = r),
                  e[f] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(f)),
                  a && v(r) && r(a[0]),
                  (a = r = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Gt = a.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Gt.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((o = (t = a.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = a.location.href),
                    t.head.appendChild(o))
                  : (t = a)),
              (r = !n && []),
              (f = N.exec(e))
                ? [t.createElement(f[1])]
                : ((f = Ce([e], t, r)),
                  r && r.length && T(r).remove(),
                  T.merge([], f.childNodes)));
          var o, f, r;
        }),
        (T.fn.load = function (e, t, n) {
          var o,
            f,
            r,
            a = this,
            c = e.indexOf(" ");
          return (
            c > -1 && ((o = wt(e.slice(c))), (e = e.slice(0, c))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (f = "POST"),
            a.length > 0 &&
              T.ajax({ url: e, type: f || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (r = arguments),
                    a.html(o ? T("<div>").append(T.parseHTML(e)).find(o) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, r || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        T.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            T.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        (T.expr.pseudos.animated = function (e) {
          return T.grep(T.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (T.offset = {
          setOffset: function (e, t, n) {
            var o,
              f,
              r,
              a,
              c,
              i,
              s = T.css(e, "position"),
              l = T(e),
              u = {};
            "static" === s && (e.style.position = "relative"),
              (c = l.offset()),
              (r = T.css(e, "top")),
              (i = T.css(e, "left")),
              ("absolute" === s || "fixed" === s) &&
              (r + i).indexOf("auto") > -1
                ? ((a = (o = l.position()).top), (f = o.left))
                : ((a = parseFloat(r) || 0), (f = parseFloat(i) || 0)),
              v(t) && (t = t.call(e, n, T.extend({}, c))),
              null != t.top && (u.top = t.top - c.top + a),
              null != t.left && (u.left = t.left - c.left + f),
              "using" in t ? t.using.call(e, u) : l.css(u);
          },
        }),
        T.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    T.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              o = this[0];
            return o
              ? o.getClientRects().length
                ? ((t = o.getBoundingClientRect()),
                  (n = o.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                o = this[0],
                f = { top: 0, left: 0 };
              if ("fixed" === T.css(o, "position"))
                t = o.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = o.ownerDocument,
                    e = o.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === T.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== o &&
                  1 === e.nodeType &&
                  (((f = T(e).offset()).top += T.css(e, "borderTopWidth", !0)),
                  (f.left += T.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - f.top - T.css(o, "marginTop", !0),
                left: t.left - f.left - T.css(o, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === T.css(e, "position");

              )
                e = e.offsetParent;
              return e || ae;
            });
          },
        }),
        T.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            T.fn[e] = function (o) {
              return U(
                this,
                function (e, o, f) {
                  var r;
                  if (
                    (y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === f)
                  )
                    return r ? r[t] : e[o];
                  r
                    ? r.scrollTo(n ? r.pageXOffset : f, n ? f : r.pageYOffset)
                    : (e[o] = f);
                },
                e,
                o,
                arguments.length
              );
            };
          }
        ),
        T.each(["top", "left"], function (e, t) {
          T.cssHooks[t] = Ye(m.pixelPosition, function (e, n) {
            if (n)
              return (n = Ve(e, t)), _e.test(n) ? T(e).position()[t] + "px" : n;
          });
        }),
        T.each({ Height: "height", Width: "width" }, function (e, t) {
          T.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, o) {
              T.fn[o] = function (f, r) {
                var a = arguments.length && (n || "boolean" != typeof f),
                  c = n || (!0 === f || !0 === r ? "margin" : "border");
                return U(
                  this,
                  function (t, n, f) {
                    var r;
                    return y(t)
                      ? 0 === o.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((r = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          r["scroll" + e],
                          t.body["offset" + e],
                          r["offset" + e],
                          r["client" + e]
                        ))
                      : void 0 === f
                      ? T.css(t, n, c)
                      : T.style(t, n, f, c);
                  },
                  t,
                  a ? f : void 0,
                  a
                );
              };
            }
          );
        }),
        T.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            T.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        ),
        T.fn.extend({
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        T.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, o) {
            return this.on(t, e, n, o);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
        }),
        (T.proxy = function (e, t) {
          var n, o, f;
          if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
            return (
              (o = i.call(arguments, 2)),
              ((f = function () {
                return e.apply(t || this, o.concat(i.call(arguments)));
              }).guid = e.guid = e.guid || T.guid++),
              f
            );
        }),
        (T.holdReady = function (e) {
          e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = A),
        (T.isFunction = v),
        (T.isWindow = y),
        (T.camelCase = G),
        (T.type = k),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
          var t = T.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        void 0 ===
          (o = function () {
            return T;
          }.apply(t, [])) || (e.exports = o);
      var Kt = n.jQuery,
        Zt = n.$;
      return (
        (T.noConflict = function (e) {
          return (
            n.$ === T && (n.$ = Zt), e && n.jQuery === T && (n.jQuery = Kt), T
          );
        }),
        f || (n.jQuery = n.$ = T),
        T
      );
    });
  },
  function (e, t, n) {
    "use strict";
    var o,
      f = function () {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      r = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function c(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function i(e, t) {
      for (var n = {}, o = [], f = 0; f < e.length; f++) {
        var r = e[f],
          i = t.base ? r[0] + t.base : r[0],
          s = n[i] || 0,
          l = "".concat(i, " ").concat(s);
        n[i] = s + 1;
        var u = c(l),
          b = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== u
          ? (a[u].references++, a[u].updater(b))
          : a.push({ identifier: l, updater: g(b, t), references: 1 }),
          o.push(l);
      }
      return o;
    }
    function s(e) {
      var t = document.createElement("style"),
        o = e.attributes || {};
      if (void 0 === o.nonce) {
        var f = n.nc;
        f && (o.nonce = f);
      }
      if (
        (Object.keys(o).forEach(function (e) {
          t.setAttribute(e, o[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = r(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var l,
      u =
        ((l = []),
        function (e, t) {
          return (l[e] = t), l.filter(Boolean).join("\n");
        });
    function b(e, t, n, o) {
      var f = n
        ? ""
        : o.media
        ? "@media ".concat(o.media, " {").concat(o.css, "}")
        : o.css;
      if (e.styleSheet) e.styleSheet.cssText = u(t, f);
      else {
        var r = document.createTextNode(f),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
      }
    }
    function d(e, t, n) {
      var o = n.css,
        f = n.media,
        r = n.sourceMap;
      if (
        (f ? e.setAttribute("media", f) : e.removeAttribute("media"),
        r &&
          btoa &&
          (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var p = null,
      h = 0;
    function g(e, t) {
      var n, o, f;
      if (t.singleton) {
        var r = h++;
        (n = p || (p = s(t))),
          (o = b.bind(null, n, r, !1)),
          (f = b.bind(null, n, r, !0));
      } else
        (n = s(t)),
          (o = d.bind(null, n, t)),
          (f = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else f();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = f());
      var n = i((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var o = 0; o < n.length; o++) {
            var f = c(n[o]);
            a[f].references--;
          }
          for (var r = i(e, t), s = 0; s < n.length; s++) {
            var l = c(n[s]);
            0 === a[l].references && (a[l].updater(), a.splice(l, 1));
          }
          n = r;
        }
      };
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                o = e[3];
              if (!o) return n;
              if (t && "function" == typeof btoa) {
                var f =
                    ((a = o),
                    (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (i = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      c
                    )),
                    "/*# ".concat(i, " */")),
                  r = o.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(o.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(r).concat([f]).join("\n");
              }
              var a, c, i;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, o) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var f = {};
          if (o)
            for (var r = 0; r < this.length; r++) {
              var a = this[r][0];
              null != a && (f[a] = !0);
            }
          for (var c = 0; c < e.length; c++) {
            var i = [].concat(e[c]);
            (o && f[i[0]]) ||
              (n &&
                (i[2]
                  ? (i[2] = "".concat(n, " and ").concat(i[2]))
                  : (i[2] = n)),
              t.push(i));
          }
        }),
        t
      );
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      var n = "000000000" + e;
      return n.substr(n.length - t);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
      f = n.n(o);
    n(5), n(7), n(9);
    const r = "https://thinkful-list-api.herokuapp.com/tylersharp/bookmarks/";
    function a(e) {
      fetch(e)
        .then((e) => e.json())
        .then((e) =>
          0 === e.length
            ? void f()(".mainWindow").prepend(
                '<div class="home"><p id="p-home">Welcome! Would you like to add your first bookmark?</p id="p-home"></div>'
              )
            : (function (e) {
                let t = '<form class="bookmarks"><ol>';
                for (let n = 0; n < e.length; n++)
                  e[n].rating || (e[n].rating = 3),
                    e[n].desc || (e[n].desc = "No description provided"),
                    (t += `\n                  <li><label for="title-${e[n].id}" class="l-title">Title</label>\n                  <input class="entry title" type="text" value="${e[n].title}" id="${e[n].id}" disabled></input>\n                  <label for="url-${e[n].id}"></label>\n                  <input class="entry url" type="url" id="url-${e[n].id}" value="${e[n].url}" disabled></input>\n                  <label for="desc-${e[n].id}" class="description collapsed">Description</label>\n                  <input class="entry input-desc description collapsed" type="text" id="desc-${e[n].id}" value="${e[n].desc}" disabled></input>\n                  <label for="rating-${e[n].id}">Rating</label>\n                  <input class="entry rating" type="number" min="1" max="5" value="${e[n].rating}" disabled></input>\n                  <input class="btn description collapsed go" type="button" value="Go!" onclick="window.open('${e[n].url}')" id="go-${e[n].id}"></input>\n                  <input class="btn go-edit edit" type="button" value="Edit" id="edit-${e[n].id}"></input>\n                  <input class="btn cancel save-cancel hidden" type="button" value="Cancel" id="cancel-${e[n].id}"</input>\n                  <input class="btn save save-cancel hidden" type="button" value="Save" id="save-${e[n].id}"></input>\n                  <input class="btn save-cancel remove hidden" type="button" value="Remove" id="remove-${e[n].id}"></input>\n                  </li>`);
                (t += "</ol></form>"), f()(".bookmark-list").append(t);
              })(e)
        );
    }
    function c() {
      f()(".nav").on("click", ".add", function () {
        f()(".nav").append(
          '<form class="new-entry">\n          <label for="new-title">Title</label>\n          <input class="new title" type="text" placeholder="Title" id="new-title"></input>\n          <label for="new-url">Link</label>\n          <input class="new url" type="text" placeholder="http://url.com" id="new-url"></input>\n          <label for="new-desc">Description</label>\n          <input class="new description" type="text" placeholder="Describe the site." id="new-desc"></input>\n          <label for="new-rating">Rating</label>\n          <input class="new rating" type="number" placeholder="5" id="new-rating"></input>\n          <input class="submit" type="submit" value="Add" id="new-submit"></input>'
        );
      });
    }
    function i() {
      f()(".nav").on("click", ".submit", function () {
        event.preventDefault(),
          (function () {
            event.preventDefault();
            let e = f()(event.target).parent().find(".title").val(),
              t = f()(event.target).parent().find(".url").val(),
              n = f()(event.target).parent().find(".input-desc").val(),
              o = f()(event.target).parent().find(".rating").val();
            if (!e) return alert("Title cannot be blank");
            if (!t) return alert("Must provide a URL");
            (function (e, t) {
              fetch(e, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(t),
              });
            })(r, { title: e, url: t, desc: n, rating: o }),
              alert("Bookmark added!"),
              window.location.reload(!0);
          })();
      });
    }
    function s() {
      f()(".bookmark-list").on("click", ".edit", function () {
        f()(event.target).parent().parent().find(".edit").attr("disabled", !0),
          f()(event.target).parent().find(".l-title").unbind("click", b()),
          event.preventDefault(),
          f()(event.target).parent().find(".go-edit").toggleClass("hidden"),
          f()(event.target).parent().find(".save-cancel").toggleClass("hidden"),
          f()(event.target).parent().find(".entry").removeAttr("disabled"),
          f()(event.target)
            .parent()
            .find(".description")
            .removeClass("collapsed");
      });
    }
    function l() {
      f()(".bookmark-list").on("click", ".save", function () {
        !(function () {
          event.preventDefault();
          let e = f()(event.target).parent().find(".title").attr("id"),
            t = f()(event.target).parent().find(".title").val(),
            n = f()(event.target).parent().find(".url").val(),
            o = f()(event.target).parent().find(".input-desc").val(),
            a = f()(event.target).parent().find(".rating").val();
          if (!t) return alert("Title cannot be blank");
          if (!n) return alert("Must provide a URL");
          (function (e, t, n) {
            fetch(e + t, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(n),
            });
          })(r, e, { title: t, url: n, desc: o, rating: a }),
            f()(event.target)
              .parent()
              .find(".description")
              .toggleClass("collapsed"),
            f()(event.target)
              .parent()
              .find(".save-cancel")
              .toggleClass("hidden"),
            alert("Bookmark updated!"),
            window.location.reload(!0);
        })();
      });
    }
    function u() {
      f()(".bookmark-list").on("click", ".cancel", function () {
        event.preventDefault(), window.location.reload(!0);
      });
    }
    function b() {
      f()(".bookmark-list").on("click", ".l-title", function () {
        f()(event.target)
          .parent()
          .find(".description")
          .toggleClass("collapsed");
      });
    }
    function d() {
      f()(".bookmark-list").on("click", ".remove", function () {
        !(function () {
          if (
            (event.preventDefault(),
            window.confirm("Are you sure you want to delete this bookmark?"))
          ) {
            let e = f()(event.target).parent().find(".title").attr("id");
            !(function (e, t) {
              fetch(e + t, { method: "DELETE" });
            })(r, e),
              alert("Bookmark deleted!"),
              window.location.reload(!0);
          }
        })();
      });
    }
    f()(document).ready(function () {
      a(r), c(), i(), b(), s(), l(), u(), d();
    });
  },
  function (e, t, n) {
    var o = n(1),
      f = n(6);
    "string" == typeof (f = f.__esModule ? f.default : f) &&
      (f = [[e.i, f, ""]]);
    var r = { insert: "head", singleton: !1 },
      a = (o(f, r), f.locals ? f.locals : {});
    e.exports = a;
  },
  function (e, t, n) {
    (t = n(2)(!1)).push([
      e.i,
      'body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.collapsed {\r\n    display: none;\r\n}\r\n\r\n.stars-outer {\r\n    display: inline-block;\r\n    position: relative;\r\n    font-family: FontAwesome;\r\n  }\r\n   \r\n  .stars-outer::before {\r\n    content: "\\f006 \\f006 \\f006 \\f006 \\f006";\r\n  }\r\n   \r\n  .stars-inner {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    width: 0;\r\n  }\r\n   \r\n  .stars-inner::before {\r\n    content: "\\f005 \\f005 \\f005 \\f005 \\f005";\r\n    color: #f8ce0b;\r\n  }',
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    var o = n(1),
      f = n(8);
    "string" == typeof (f = f.__esModule ? f.default : f) &&
      (f = [[e.i, f, ""]]);
    var r = { insert: "head", singleton: !1 },
      a = (o(f, r), f.locals ? f.locals : {});
    e.exports = a;
  },
  function (e, t, n) {
    (t = n(2)(!1)).push([
      e.i,
      '/*!\n * Font Awesome Free 5.13.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:"\\f26e"}.fa-accessible-icon:before{content:"\\f368"}.fa-accusoft:before{content:"\\f369"}.fa-acquisitions-incorporated:before{content:"\\f6af"}.fa-ad:before{content:"\\f641"}.fa-address-book:before{content:"\\f2b9"}.fa-address-card:before{content:"\\f2bb"}.fa-adjust:before{content:"\\f042"}.fa-adn:before{content:"\\f170"}.fa-adobe:before{content:"\\f778"}.fa-adversal:before{content:"\\f36a"}.fa-affiliatetheme:before{content:"\\f36b"}.fa-air-freshener:before{content:"\\f5d0"}.fa-airbnb:before{content:"\\f834"}.fa-algolia:before{content:"\\f36c"}.fa-align-center:before{content:"\\f037"}.fa-align-justify:before{content:"\\f039"}.fa-align-left:before{content:"\\f036"}.fa-align-right:before{content:"\\f038"}.fa-alipay:before{content:"\\f642"}.fa-allergies:before{content:"\\f461"}.fa-amazon:before{content:"\\f270"}.fa-amazon-pay:before{content:"\\f42c"}.fa-ambulance:before{content:"\\f0f9"}.fa-american-sign-language-interpreting:before{content:"\\f2a3"}.fa-amilia:before{content:"\\f36d"}.fa-anchor:before{content:"\\f13d"}.fa-android:before{content:"\\f17b"}.fa-angellist:before{content:"\\f209"}.fa-angle-double-down:before{content:"\\f103"}.fa-angle-double-left:before{content:"\\f100"}.fa-angle-double-right:before{content:"\\f101"}.fa-angle-double-up:before{content:"\\f102"}.fa-angle-down:before{content:"\\f107"}.fa-angle-left:before{content:"\\f104"}.fa-angle-right:before{content:"\\f105"}.fa-angle-up:before{content:"\\f106"}.fa-angry:before{content:"\\f556"}.fa-angrycreative:before{content:"\\f36e"}.fa-angular:before{content:"\\f420"}.fa-ankh:before{content:"\\f644"}.fa-app-store:before{content:"\\f36f"}.fa-app-store-ios:before{content:"\\f370"}.fa-apper:before{content:"\\f371"}.fa-apple:before{content:"\\f179"}.fa-apple-alt:before{content:"\\f5d1"}.fa-apple-pay:before{content:"\\f415"}.fa-archive:before{content:"\\f187"}.fa-archway:before{content:"\\f557"}.fa-arrow-alt-circle-down:before{content:"\\f358"}.fa-arrow-alt-circle-left:before{content:"\\f359"}.fa-arrow-alt-circle-right:before{content:"\\f35a"}.fa-arrow-alt-circle-up:before{content:"\\f35b"}.fa-arrow-circle-down:before{content:"\\f0ab"}.fa-arrow-circle-left:before{content:"\\f0a8"}.fa-arrow-circle-right:before{content:"\\f0a9"}.fa-arrow-circle-up:before{content:"\\f0aa"}.fa-arrow-down:before{content:"\\f063"}.fa-arrow-left:before{content:"\\f060"}.fa-arrow-right:before{content:"\\f061"}.fa-arrow-up:before{content:"\\f062"}.fa-arrows-alt:before{content:"\\f0b2"}.fa-arrows-alt-h:before{content:"\\f337"}.fa-arrows-alt-v:before{content:"\\f338"}.fa-artstation:before{content:"\\f77a"}.fa-assistive-listening-systems:before{content:"\\f2a2"}.fa-asterisk:before{content:"\\f069"}.fa-asymmetrik:before{content:"\\f372"}.fa-at:before{content:"\\f1fa"}.fa-atlas:before{content:"\\f558"}.fa-atlassian:before{content:"\\f77b"}.fa-atom:before{content:"\\f5d2"}.fa-audible:before{content:"\\f373"}.fa-audio-description:before{content:"\\f29e"}.fa-autoprefixer:before{content:"\\f41c"}.fa-avianex:before{content:"\\f374"}.fa-aviato:before{content:"\\f421"}.fa-award:before{content:"\\f559"}.fa-aws:before{content:"\\f375"}.fa-baby:before{content:"\\f77c"}.fa-baby-carriage:before{content:"\\f77d"}.fa-backspace:before{content:"\\f55a"}.fa-backward:before{content:"\\f04a"}.fa-bacon:before{content:"\\f7e5"}.fa-bahai:before{content:"\\f666"}.fa-balance-scale:before{content:"\\f24e"}.fa-balance-scale-left:before{content:"\\f515"}.fa-balance-scale-right:before{content:"\\f516"}.fa-ban:before{content:"\\f05e"}.fa-band-aid:before{content:"\\f462"}.fa-bandcamp:before{content:"\\f2d5"}.fa-barcode:before{content:"\\f02a"}.fa-bars:before{content:"\\f0c9"}.fa-baseball-ball:before{content:"\\f433"}.fa-basketball-ball:before{content:"\\f434"}.fa-bath:before{content:"\\f2cd"}.fa-battery-empty:before{content:"\\f244"}.fa-battery-full:before{content:"\\f240"}.fa-battery-half:before{content:"\\f242"}.fa-battery-quarter:before{content:"\\f243"}.fa-battery-three-quarters:before{content:"\\f241"}.fa-battle-net:before{content:"\\f835"}.fa-bed:before{content:"\\f236"}.fa-beer:before{content:"\\f0fc"}.fa-behance:before{content:"\\f1b4"}.fa-behance-square:before{content:"\\f1b5"}.fa-bell:before{content:"\\f0f3"}.fa-bell-slash:before{content:"\\f1f6"}.fa-bezier-curve:before{content:"\\f55b"}.fa-bible:before{content:"\\f647"}.fa-bicycle:before{content:"\\f206"}.fa-biking:before{content:"\\f84a"}.fa-bimobject:before{content:"\\f378"}.fa-binoculars:before{content:"\\f1e5"}.fa-biohazard:before{content:"\\f780"}.fa-birthday-cake:before{content:"\\f1fd"}.fa-bitbucket:before{content:"\\f171"}.fa-bitcoin:before{content:"\\f379"}.fa-bity:before{content:"\\f37a"}.fa-black-tie:before{content:"\\f27e"}.fa-blackberry:before{content:"\\f37b"}.fa-blender:before{content:"\\f517"}.fa-blender-phone:before{content:"\\f6b6"}.fa-blind:before{content:"\\f29d"}.fa-blog:before{content:"\\f781"}.fa-blogger:before{content:"\\f37c"}.fa-blogger-b:before{content:"\\f37d"}.fa-bluetooth:before{content:"\\f293"}.fa-bluetooth-b:before{content:"\\f294"}.fa-bold:before{content:"\\f032"}.fa-bolt:before{content:"\\f0e7"}.fa-bomb:before{content:"\\f1e2"}.fa-bone:before{content:"\\f5d7"}.fa-bong:before{content:"\\f55c"}.fa-book:before{content:"\\f02d"}.fa-book-dead:before{content:"\\f6b7"}.fa-book-medical:before{content:"\\f7e6"}.fa-book-open:before{content:"\\f518"}.fa-book-reader:before{content:"\\f5da"}.fa-bookmark:before{content:"\\f02e"}.fa-bootstrap:before{content:"\\f836"}.fa-border-all:before{content:"\\f84c"}.fa-border-none:before{content:"\\f850"}.fa-border-style:before{content:"\\f853"}.fa-bowling-ball:before{content:"\\f436"}.fa-box:before{content:"\\f466"}.fa-box-open:before{content:"\\f49e"}.fa-box-tissue:before{content:"\\f95b"}.fa-boxes:before{content:"\\f468"}.fa-braille:before{content:"\\f2a1"}.fa-brain:before{content:"\\f5dc"}.fa-bread-slice:before{content:"\\f7ec"}.fa-briefcase:before{content:"\\f0b1"}.fa-briefcase-medical:before{content:"\\f469"}.fa-broadcast-tower:before{content:"\\f519"}.fa-broom:before{content:"\\f51a"}.fa-brush:before{content:"\\f55d"}.fa-btc:before{content:"\\f15a"}.fa-buffer:before{content:"\\f837"}.fa-bug:before{content:"\\f188"}.fa-building:before{content:"\\f1ad"}.fa-bullhorn:before{content:"\\f0a1"}.fa-bullseye:before{content:"\\f140"}.fa-burn:before{content:"\\f46a"}.fa-buromobelexperte:before{content:"\\f37f"}.fa-bus:before{content:"\\f207"}.fa-bus-alt:before{content:"\\f55e"}.fa-business-time:before{content:"\\f64a"}.fa-buy-n-large:before{content:"\\f8a6"}.fa-buysellads:before{content:"\\f20d"}.fa-calculator:before{content:"\\f1ec"}.fa-calendar:before{content:"\\f133"}.fa-calendar-alt:before{content:"\\f073"}.fa-calendar-check:before{content:"\\f274"}.fa-calendar-day:before{content:"\\f783"}.fa-calendar-minus:before{content:"\\f272"}.fa-calendar-plus:before{content:"\\f271"}.fa-calendar-times:before{content:"\\f273"}.fa-calendar-week:before{content:"\\f784"}.fa-camera:before{content:"\\f030"}.fa-camera-retro:before{content:"\\f083"}.fa-campground:before{content:"\\f6bb"}.fa-canadian-maple-leaf:before{content:"\\f785"}.fa-candy-cane:before{content:"\\f786"}.fa-cannabis:before{content:"\\f55f"}.fa-capsules:before{content:"\\f46b"}.fa-car:before{content:"\\f1b9"}.fa-car-alt:before{content:"\\f5de"}.fa-car-battery:before{content:"\\f5df"}.fa-car-crash:before{content:"\\f5e1"}.fa-car-side:before{content:"\\f5e4"}.fa-caravan:before{content:"\\f8ff"}.fa-caret-down:before{content:"\\f0d7"}.fa-caret-left:before{content:"\\f0d9"}.fa-caret-right:before{content:"\\f0da"}.fa-caret-square-down:before{content:"\\f150"}.fa-caret-square-left:before{content:"\\f191"}.fa-caret-square-right:before{content:"\\f152"}.fa-caret-square-up:before{content:"\\f151"}.fa-caret-up:before{content:"\\f0d8"}.fa-carrot:before{content:"\\f787"}.fa-cart-arrow-down:before{content:"\\f218"}.fa-cart-plus:before{content:"\\f217"}.fa-cash-register:before{content:"\\f788"}.fa-cat:before{content:"\\f6be"}.fa-cc-amazon-pay:before{content:"\\f42d"}.fa-cc-amex:before{content:"\\f1f3"}.fa-cc-apple-pay:before{content:"\\f416"}.fa-cc-diners-club:before{content:"\\f24c"}.fa-cc-discover:before{content:"\\f1f2"}.fa-cc-jcb:before{content:"\\f24b"}.fa-cc-mastercard:before{content:"\\f1f1"}.fa-cc-paypal:before{content:"\\f1f4"}.fa-cc-stripe:before{content:"\\f1f5"}.fa-cc-visa:before{content:"\\f1f0"}.fa-centercode:before{content:"\\f380"}.fa-centos:before{content:"\\f789"}.fa-certificate:before{content:"\\f0a3"}.fa-chair:before{content:"\\f6c0"}.fa-chalkboard:before{content:"\\f51b"}.fa-chalkboard-teacher:before{content:"\\f51c"}.fa-charging-station:before{content:"\\f5e7"}.fa-chart-area:before{content:"\\f1fe"}.fa-chart-bar:before{content:"\\f080"}.fa-chart-line:before{content:"\\f201"}.fa-chart-pie:before{content:"\\f200"}.fa-check:before{content:"\\f00c"}.fa-check-circle:before{content:"\\f058"}.fa-check-double:before{content:"\\f560"}.fa-check-square:before{content:"\\f14a"}.fa-cheese:before{content:"\\f7ef"}.fa-chess:before{content:"\\f439"}.fa-chess-bishop:before{content:"\\f43a"}.fa-chess-board:before{content:"\\f43c"}.fa-chess-king:before{content:"\\f43f"}.fa-chess-knight:before{content:"\\f441"}.fa-chess-pawn:before{content:"\\f443"}.fa-chess-queen:before{content:"\\f445"}.fa-chess-rook:before{content:"\\f447"}.fa-chevron-circle-down:before{content:"\\f13a"}.fa-chevron-circle-left:before{content:"\\f137"}.fa-chevron-circle-right:before{content:"\\f138"}.fa-chevron-circle-up:before{content:"\\f139"}.fa-chevron-down:before{content:"\\f078"}.fa-chevron-left:before{content:"\\f053"}.fa-chevron-right:before{content:"\\f054"}.fa-chevron-up:before{content:"\\f077"}.fa-child:before{content:"\\f1ae"}.fa-chrome:before{content:"\\f268"}.fa-chromecast:before{content:"\\f838"}.fa-church:before{content:"\\f51d"}.fa-circle:before{content:"\\f111"}.fa-circle-notch:before{content:"\\f1ce"}.fa-city:before{content:"\\f64f"}.fa-clinic-medical:before{content:"\\f7f2"}.fa-clipboard:before{content:"\\f328"}.fa-clipboard-check:before{content:"\\f46c"}.fa-clipboard-list:before{content:"\\f46d"}.fa-clock:before{content:"\\f017"}.fa-clone:before{content:"\\f24d"}.fa-closed-captioning:before{content:"\\f20a"}.fa-cloud:before{content:"\\f0c2"}.fa-cloud-download-alt:before{content:"\\f381"}.fa-cloud-meatball:before{content:"\\f73b"}.fa-cloud-moon:before{content:"\\f6c3"}.fa-cloud-moon-rain:before{content:"\\f73c"}.fa-cloud-rain:before{content:"\\f73d"}.fa-cloud-showers-heavy:before{content:"\\f740"}.fa-cloud-sun:before{content:"\\f6c4"}.fa-cloud-sun-rain:before{content:"\\f743"}.fa-cloud-upload-alt:before{content:"\\f382"}.fa-cloudscale:before{content:"\\f383"}.fa-cloudsmith:before{content:"\\f384"}.fa-cloudversify:before{content:"\\f385"}.fa-cocktail:before{content:"\\f561"}.fa-code:before{content:"\\f121"}.fa-code-branch:before{content:"\\f126"}.fa-codepen:before{content:"\\f1cb"}.fa-codiepie:before{content:"\\f284"}.fa-coffee:before{content:"\\f0f4"}.fa-cog:before{content:"\\f013"}.fa-cogs:before{content:"\\f085"}.fa-coins:before{content:"\\f51e"}.fa-columns:before{content:"\\f0db"}.fa-comment:before{content:"\\f075"}.fa-comment-alt:before{content:"\\f27a"}.fa-comment-dollar:before{content:"\\f651"}.fa-comment-dots:before{content:"\\f4ad"}.fa-comment-medical:before{content:"\\f7f5"}.fa-comment-slash:before{content:"\\f4b3"}.fa-comments:before{content:"\\f086"}.fa-comments-dollar:before{content:"\\f653"}.fa-compact-disc:before{content:"\\f51f"}.fa-compass:before{content:"\\f14e"}.fa-compress:before{content:"\\f066"}.fa-compress-alt:before{content:"\\f422"}.fa-compress-arrows-alt:before{content:"\\f78c"}.fa-concierge-bell:before{content:"\\f562"}.fa-confluence:before{content:"\\f78d"}.fa-connectdevelop:before{content:"\\f20e"}.fa-contao:before{content:"\\f26d"}.fa-cookie:before{content:"\\f563"}.fa-cookie-bite:before{content:"\\f564"}.fa-copy:before{content:"\\f0c5"}.fa-copyright:before{content:"\\f1f9"}.fa-cotton-bureau:before{content:"\\f89e"}.fa-couch:before{content:"\\f4b8"}.fa-cpanel:before{content:"\\f388"}.fa-creative-commons:before{content:"\\f25e"}.fa-creative-commons-by:before{content:"\\f4e7"}.fa-creative-commons-nc:before{content:"\\f4e8"}.fa-creative-commons-nc-eu:before{content:"\\f4e9"}.fa-creative-commons-nc-jp:before{content:"\\f4ea"}.fa-creative-commons-nd:before{content:"\\f4eb"}.fa-creative-commons-pd:before{content:"\\f4ec"}.fa-creative-commons-pd-alt:before{content:"\\f4ed"}.fa-creative-commons-remix:before{content:"\\f4ee"}.fa-creative-commons-sa:before{content:"\\f4ef"}.fa-creative-commons-sampling:before{content:"\\f4f0"}.fa-creative-commons-sampling-plus:before{content:"\\f4f1"}.fa-creative-commons-share:before{content:"\\f4f2"}.fa-creative-commons-zero:before{content:"\\f4f3"}.fa-credit-card:before{content:"\\f09d"}.fa-critical-role:before{content:"\\f6c9"}.fa-crop:before{content:"\\f125"}.fa-crop-alt:before{content:"\\f565"}.fa-cross:before{content:"\\f654"}.fa-crosshairs:before{content:"\\f05b"}.fa-crow:before{content:"\\f520"}.fa-crown:before{content:"\\f521"}.fa-crutch:before{content:"\\f7f7"}.fa-css3:before{content:"\\f13c"}.fa-css3-alt:before{content:"\\f38b"}.fa-cube:before{content:"\\f1b2"}.fa-cubes:before{content:"\\f1b3"}.fa-cut:before{content:"\\f0c4"}.fa-cuttlefish:before{content:"\\f38c"}.fa-d-and-d:before{content:"\\f38d"}.fa-d-and-d-beyond:before{content:"\\f6ca"}.fa-dailymotion:before{content:"\\f952"}.fa-dashcube:before{content:"\\f210"}.fa-database:before{content:"\\f1c0"}.fa-deaf:before{content:"\\f2a4"}.fa-delicious:before{content:"\\f1a5"}.fa-democrat:before{content:"\\f747"}.fa-deploydog:before{content:"\\f38e"}.fa-deskpro:before{content:"\\f38f"}.fa-desktop:before{content:"\\f108"}.fa-dev:before{content:"\\f6cc"}.fa-deviantart:before{content:"\\f1bd"}.fa-dharmachakra:before{content:"\\f655"}.fa-dhl:before{content:"\\f790"}.fa-diagnoses:before{content:"\\f470"}.fa-diaspora:before{content:"\\f791"}.fa-dice:before{content:"\\f522"}.fa-dice-d20:before{content:"\\f6cf"}.fa-dice-d6:before{content:"\\f6d1"}.fa-dice-five:before{content:"\\f523"}.fa-dice-four:before{content:"\\f524"}.fa-dice-one:before{content:"\\f525"}.fa-dice-six:before{content:"\\f526"}.fa-dice-three:before{content:"\\f527"}.fa-dice-two:before{content:"\\f528"}.fa-digg:before{content:"\\f1a6"}.fa-digital-ocean:before{content:"\\f391"}.fa-digital-tachograph:before{content:"\\f566"}.fa-directions:before{content:"\\f5eb"}.fa-discord:before{content:"\\f392"}.fa-discourse:before{content:"\\f393"}.fa-disease:before{content:"\\f7fa"}.fa-divide:before{content:"\\f529"}.fa-dizzy:before{content:"\\f567"}.fa-dna:before{content:"\\f471"}.fa-dochub:before{content:"\\f394"}.fa-docker:before{content:"\\f395"}.fa-dog:before{content:"\\f6d3"}.fa-dollar-sign:before{content:"\\f155"}.fa-dolly:before{content:"\\f472"}.fa-dolly-flatbed:before{content:"\\f474"}.fa-donate:before{content:"\\f4b9"}.fa-door-closed:before{content:"\\f52a"}.fa-door-open:before{content:"\\f52b"}.fa-dot-circle:before{content:"\\f192"}.fa-dove:before{content:"\\f4ba"}.fa-download:before{content:"\\f019"}.fa-draft2digital:before{content:"\\f396"}.fa-drafting-compass:before{content:"\\f568"}.fa-dragon:before{content:"\\f6d5"}.fa-draw-polygon:before{content:"\\f5ee"}.fa-dribbble:before{content:"\\f17d"}.fa-dribbble-square:before{content:"\\f397"}.fa-dropbox:before{content:"\\f16b"}.fa-drum:before{content:"\\f569"}.fa-drum-steelpan:before{content:"\\f56a"}.fa-drumstick-bite:before{content:"\\f6d7"}.fa-drupal:before{content:"\\f1a9"}.fa-dumbbell:before{content:"\\f44b"}.fa-dumpster:before{content:"\\f793"}.fa-dumpster-fire:before{content:"\\f794"}.fa-dungeon:before{content:"\\f6d9"}.fa-dyalog:before{content:"\\f399"}.fa-earlybirds:before{content:"\\f39a"}.fa-ebay:before{content:"\\f4f4"}.fa-edge:before{content:"\\f282"}.fa-edit:before{content:"\\f044"}.fa-egg:before{content:"\\f7fb"}.fa-eject:before{content:"\\f052"}.fa-elementor:before{content:"\\f430"}.fa-ellipsis-h:before{content:"\\f141"}.fa-ellipsis-v:before{content:"\\f142"}.fa-ello:before{content:"\\f5f1"}.fa-ember:before{content:"\\f423"}.fa-empire:before{content:"\\f1d1"}.fa-envelope:before{content:"\\f0e0"}.fa-envelope-open:before{content:"\\f2b6"}.fa-envelope-open-text:before{content:"\\f658"}.fa-envelope-square:before{content:"\\f199"}.fa-envira:before{content:"\\f299"}.fa-equals:before{content:"\\f52c"}.fa-eraser:before{content:"\\f12d"}.fa-erlang:before{content:"\\f39d"}.fa-ethereum:before{content:"\\f42e"}.fa-ethernet:before{content:"\\f796"}.fa-etsy:before{content:"\\f2d7"}.fa-euro-sign:before{content:"\\f153"}.fa-evernote:before{content:"\\f839"}.fa-exchange-alt:before{content:"\\f362"}.fa-exclamation:before{content:"\\f12a"}.fa-exclamation-circle:before{content:"\\f06a"}.fa-exclamation-triangle:before{content:"\\f071"}.fa-expand:before{content:"\\f065"}.fa-expand-alt:before{content:"\\f424"}.fa-expand-arrows-alt:before{content:"\\f31e"}.fa-expeditedssl:before{content:"\\f23e"}.fa-external-link-alt:before{content:"\\f35d"}.fa-external-link-square-alt:before{content:"\\f360"}.fa-eye:before{content:"\\f06e"}.fa-eye-dropper:before{content:"\\f1fb"}.fa-eye-slash:before{content:"\\f070"}.fa-facebook:before{content:"\\f09a"}.fa-facebook-f:before{content:"\\f39e"}.fa-facebook-messenger:before{content:"\\f39f"}.fa-facebook-square:before{content:"\\f082"}.fa-fan:before{content:"\\f863"}.fa-fantasy-flight-games:before{content:"\\f6dc"}.fa-fast-backward:before{content:"\\f049"}.fa-fast-forward:before{content:"\\f050"}.fa-faucet:before{content:"\\f905"}.fa-fax:before{content:"\\f1ac"}.fa-feather:before{content:"\\f52d"}.fa-feather-alt:before{content:"\\f56b"}.fa-fedex:before{content:"\\f797"}.fa-fedora:before{content:"\\f798"}.fa-female:before{content:"\\f182"}.fa-fighter-jet:before{content:"\\f0fb"}.fa-figma:before{content:"\\f799"}.fa-file:before{content:"\\f15b"}.fa-file-alt:before{content:"\\f15c"}.fa-file-archive:before{content:"\\f1c6"}.fa-file-audio:before{content:"\\f1c7"}.fa-file-code:before{content:"\\f1c9"}.fa-file-contract:before{content:"\\f56c"}.fa-file-csv:before{content:"\\f6dd"}.fa-file-download:before{content:"\\f56d"}.fa-file-excel:before{content:"\\f1c3"}.fa-file-export:before{content:"\\f56e"}.fa-file-image:before{content:"\\f1c5"}.fa-file-import:before{content:"\\f56f"}.fa-file-invoice:before{content:"\\f570"}.fa-file-invoice-dollar:before{content:"\\f571"}.fa-file-medical:before{content:"\\f477"}.fa-file-medical-alt:before{content:"\\f478"}.fa-file-pdf:before{content:"\\f1c1"}.fa-file-powerpoint:before{content:"\\f1c4"}.fa-file-prescription:before{content:"\\f572"}.fa-file-signature:before{content:"\\f573"}.fa-file-upload:before{content:"\\f574"}.fa-file-video:before{content:"\\f1c8"}.fa-file-word:before{content:"\\f1c2"}.fa-fill:before{content:"\\f575"}.fa-fill-drip:before{content:"\\f576"}.fa-film:before{content:"\\f008"}.fa-filter:before{content:"\\f0b0"}.fa-fingerprint:before{content:"\\f577"}.fa-fire:before{content:"\\f06d"}.fa-fire-alt:before{content:"\\f7e4"}.fa-fire-extinguisher:before{content:"\\f134"}.fa-firefox:before{content:"\\f269"}.fa-firefox-browser:before{content:"\\f907"}.fa-first-aid:before{content:"\\f479"}.fa-first-order:before{content:"\\f2b0"}.fa-first-order-alt:before{content:"\\f50a"}.fa-firstdraft:before{content:"\\f3a1"}.fa-fish:before{content:"\\f578"}.fa-fist-raised:before{content:"\\f6de"}.fa-flag:before{content:"\\f024"}.fa-flag-checkered:before{content:"\\f11e"}.fa-flag-usa:before{content:"\\f74d"}.fa-flask:before{content:"\\f0c3"}.fa-flickr:before{content:"\\f16e"}.fa-flipboard:before{content:"\\f44d"}.fa-flushed:before{content:"\\f579"}.fa-fly:before{content:"\\f417"}.fa-folder:before{content:"\\f07b"}.fa-folder-minus:before{content:"\\f65d"}.fa-folder-open:before{content:"\\f07c"}.fa-folder-plus:before{content:"\\f65e"}.fa-font:before{content:"\\f031"}.fa-font-awesome:before{content:"\\f2b4"}.fa-font-awesome-alt:before{content:"\\f35c"}.fa-font-awesome-flag:before{content:"\\f425"}.fa-font-awesome-logo-full:before{content:"\\f4e6"}.fa-fonticons:before{content:"\\f280"}.fa-fonticons-fi:before{content:"\\f3a2"}.fa-football-ball:before{content:"\\f44e"}.fa-fort-awesome:before{content:"\\f286"}.fa-fort-awesome-alt:before{content:"\\f3a3"}.fa-forumbee:before{content:"\\f211"}.fa-forward:before{content:"\\f04e"}.fa-foursquare:before{content:"\\f180"}.fa-free-code-camp:before{content:"\\f2c5"}.fa-freebsd:before{content:"\\f3a4"}.fa-frog:before{content:"\\f52e"}.fa-frown:before{content:"\\f119"}.fa-frown-open:before{content:"\\f57a"}.fa-fulcrum:before{content:"\\f50b"}.fa-funnel-dollar:before{content:"\\f662"}.fa-futbol:before{content:"\\f1e3"}.fa-galactic-republic:before{content:"\\f50c"}.fa-galactic-senate:before{content:"\\f50d"}.fa-gamepad:before{content:"\\f11b"}.fa-gas-pump:before{content:"\\f52f"}.fa-gavel:before{content:"\\f0e3"}.fa-gem:before{content:"\\f3a5"}.fa-genderless:before{content:"\\f22d"}.fa-get-pocket:before{content:"\\f265"}.fa-gg:before{content:"\\f260"}.fa-gg-circle:before{content:"\\f261"}.fa-ghost:before{content:"\\f6e2"}.fa-gift:before{content:"\\f06b"}.fa-gifts:before{content:"\\f79c"}.fa-git:before{content:"\\f1d3"}.fa-git-alt:before{content:"\\f841"}.fa-git-square:before{content:"\\f1d2"}.fa-github:before{content:"\\f09b"}.fa-github-alt:before{content:"\\f113"}.fa-github-square:before{content:"\\f092"}.fa-gitkraken:before{content:"\\f3a6"}.fa-gitlab:before{content:"\\f296"}.fa-gitter:before{content:"\\f426"}.fa-glass-cheers:before{content:"\\f79f"}.fa-glass-martini:before{content:"\\f000"}.fa-glass-martini-alt:before{content:"\\f57b"}.fa-glass-whiskey:before{content:"\\f7a0"}.fa-glasses:before{content:"\\f530"}.fa-glide:before{content:"\\f2a5"}.fa-glide-g:before{content:"\\f2a6"}.fa-globe:before{content:"\\f0ac"}.fa-globe-africa:before{content:"\\f57c"}.fa-globe-americas:before{content:"\\f57d"}.fa-globe-asia:before{content:"\\f57e"}.fa-globe-europe:before{content:"\\f7a2"}.fa-gofore:before{content:"\\f3a7"}.fa-golf-ball:before{content:"\\f450"}.fa-goodreads:before{content:"\\f3a8"}.fa-goodreads-g:before{content:"\\f3a9"}.fa-google:before{content:"\\f1a0"}.fa-google-drive:before{content:"\\f3aa"}.fa-google-play:before{content:"\\f3ab"}.fa-google-plus:before{content:"\\f2b3"}.fa-google-plus-g:before{content:"\\f0d5"}.fa-google-plus-square:before{content:"\\f0d4"}.fa-google-wallet:before{content:"\\f1ee"}.fa-gopuram:before{content:"\\f664"}.fa-graduation-cap:before{content:"\\f19d"}.fa-gratipay:before{content:"\\f184"}.fa-grav:before{content:"\\f2d6"}.fa-greater-than:before{content:"\\f531"}.fa-greater-than-equal:before{content:"\\f532"}.fa-grimace:before{content:"\\f57f"}.fa-grin:before{content:"\\f580"}.fa-grin-alt:before{content:"\\f581"}.fa-grin-beam:before{content:"\\f582"}.fa-grin-beam-sweat:before{content:"\\f583"}.fa-grin-hearts:before{content:"\\f584"}.fa-grin-squint:before{content:"\\f585"}.fa-grin-squint-tears:before{content:"\\f586"}.fa-grin-stars:before{content:"\\f587"}.fa-grin-tears:before{content:"\\f588"}.fa-grin-tongue:before{content:"\\f589"}.fa-grin-tongue-squint:before{content:"\\f58a"}.fa-grin-tongue-wink:before{content:"\\f58b"}.fa-grin-wink:before{content:"\\f58c"}.fa-grip-horizontal:before{content:"\\f58d"}.fa-grip-lines:before{content:"\\f7a4"}.fa-grip-lines-vertical:before{content:"\\f7a5"}.fa-grip-vertical:before{content:"\\f58e"}.fa-gripfire:before{content:"\\f3ac"}.fa-grunt:before{content:"\\f3ad"}.fa-guitar:before{content:"\\f7a6"}.fa-gulp:before{content:"\\f3ae"}.fa-h-square:before{content:"\\f0fd"}.fa-hacker-news:before{content:"\\f1d4"}.fa-hacker-news-square:before{content:"\\f3af"}.fa-hackerrank:before{content:"\\f5f7"}.fa-hamburger:before{content:"\\f805"}.fa-hammer:before{content:"\\f6e3"}.fa-hamsa:before{content:"\\f665"}.fa-hand-holding:before{content:"\\f4bd"}.fa-hand-holding-heart:before{content:"\\f4be"}.fa-hand-holding-medical:before{content:"\\f95c"}.fa-hand-holding-usd:before{content:"\\f4c0"}.fa-hand-holding-water:before{content:"\\f4c1"}.fa-hand-lizard:before{content:"\\f258"}.fa-hand-middle-finger:before{content:"\\f806"}.fa-hand-paper:before{content:"\\f256"}.fa-hand-peace:before{content:"\\f25b"}.fa-hand-point-down:before{content:"\\f0a7"}.fa-hand-point-left:before{content:"\\f0a5"}.fa-hand-point-right:before{content:"\\f0a4"}.fa-hand-point-up:before{content:"\\f0a6"}.fa-hand-pointer:before{content:"\\f25a"}.fa-hand-rock:before{content:"\\f255"}.fa-hand-scissors:before{content:"\\f257"}.fa-hand-sparkles:before{content:"\\f95d"}.fa-hand-spock:before{content:"\\f259"}.fa-hands:before{content:"\\f4c2"}.fa-hands-helping:before{content:"\\f4c4"}.fa-hands-wash:before{content:"\\f95e"}.fa-handshake:before{content:"\\f2b5"}.fa-handshake-alt-slash:before{content:"\\f95f"}.fa-handshake-slash:before{content:"\\f960"}.fa-hanukiah:before{content:"\\f6e6"}.fa-hard-hat:before{content:"\\f807"}.fa-hashtag:before{content:"\\f292"}.fa-hat-cowboy:before{content:"\\f8c0"}.fa-hat-cowboy-side:before{content:"\\f8c1"}.fa-hat-wizard:before{content:"\\f6e8"}.fa-hdd:before{content:"\\f0a0"}.fa-head-side-cough:before{content:"\\f961"}.fa-head-side-cough-slash:before{content:"\\f962"}.fa-head-side-mask:before{content:"\\f963"}.fa-head-side-virus:before{content:"\\f964"}.fa-heading:before{content:"\\f1dc"}.fa-headphones:before{content:"\\f025"}.fa-headphones-alt:before{content:"\\f58f"}.fa-headset:before{content:"\\f590"}.fa-heart:before{content:"\\f004"}.fa-heart-broken:before{content:"\\f7a9"}.fa-heartbeat:before{content:"\\f21e"}.fa-helicopter:before{content:"\\f533"}.fa-highlighter:before{content:"\\f591"}.fa-hiking:before{content:"\\f6ec"}.fa-hippo:before{content:"\\f6ed"}.fa-hips:before{content:"\\f452"}.fa-hire-a-helper:before{content:"\\f3b0"}.fa-history:before{content:"\\f1da"}.fa-hockey-puck:before{content:"\\f453"}.fa-holly-berry:before{content:"\\f7aa"}.fa-home:before{content:"\\f015"}.fa-hooli:before{content:"\\f427"}.fa-hornbill:before{content:"\\f592"}.fa-horse:before{content:"\\f6f0"}.fa-horse-head:before{content:"\\f7ab"}.fa-hospital:before{content:"\\f0f8"}.fa-hospital-alt:before{content:"\\f47d"}.fa-hospital-symbol:before{content:"\\f47e"}.fa-hospital-user:before{content:"\\f80d"}.fa-hot-tub:before{content:"\\f593"}.fa-hotdog:before{content:"\\f80f"}.fa-hotel:before{content:"\\f594"}.fa-hotjar:before{content:"\\f3b1"}.fa-hourglass:before{content:"\\f254"}.fa-hourglass-end:before{content:"\\f253"}.fa-hourglass-half:before{content:"\\f252"}.fa-hourglass-start:before{content:"\\f251"}.fa-house-damage:before{content:"\\f6f1"}.fa-house-user:before{content:"\\f965"}.fa-houzz:before{content:"\\f27c"}.fa-hryvnia:before{content:"\\f6f2"}.fa-html5:before{content:"\\f13b"}.fa-hubspot:before{content:"\\f3b2"}.fa-i-cursor:before{content:"\\f246"}.fa-ice-cream:before{content:"\\f810"}.fa-icicles:before{content:"\\f7ad"}.fa-icons:before{content:"\\f86d"}.fa-id-badge:before{content:"\\f2c1"}.fa-id-card:before{content:"\\f2c2"}.fa-id-card-alt:before{content:"\\f47f"}.fa-ideal:before{content:"\\f913"}.fa-igloo:before{content:"\\f7ae"}.fa-image:before{content:"\\f03e"}.fa-images:before{content:"\\f302"}.fa-imdb:before{content:"\\f2d8"}.fa-inbox:before{content:"\\f01c"}.fa-indent:before{content:"\\f03c"}.fa-industry:before{content:"\\f275"}.fa-infinity:before{content:"\\f534"}.fa-info:before{content:"\\f129"}.fa-info-circle:before{content:"\\f05a"}.fa-instagram:before{content:"\\f16d"}.fa-instagram-square:before{content:"\\f955"}.fa-intercom:before{content:"\\f7af"}.fa-internet-explorer:before{content:"\\f26b"}.fa-invision:before{content:"\\f7b0"}.fa-ioxhost:before{content:"\\f208"}.fa-italic:before{content:"\\f033"}.fa-itch-io:before{content:"\\f83a"}.fa-itunes:before{content:"\\f3b4"}.fa-itunes-note:before{content:"\\f3b5"}.fa-java:before{content:"\\f4e4"}.fa-jedi:before{content:"\\f669"}.fa-jedi-order:before{content:"\\f50e"}.fa-jenkins:before{content:"\\f3b6"}.fa-jira:before{content:"\\f7b1"}.fa-joget:before{content:"\\f3b7"}.fa-joint:before{content:"\\f595"}.fa-joomla:before{content:"\\f1aa"}.fa-journal-whills:before{content:"\\f66a"}.fa-js:before{content:"\\f3b8"}.fa-js-square:before{content:"\\f3b9"}.fa-jsfiddle:before{content:"\\f1cc"}.fa-kaaba:before{content:"\\f66b"}.fa-kaggle:before{content:"\\f5fa"}.fa-key:before{content:"\\f084"}.fa-keybase:before{content:"\\f4f5"}.fa-keyboard:before{content:"\\f11c"}.fa-keycdn:before{content:"\\f3ba"}.fa-khanda:before{content:"\\f66d"}.fa-kickstarter:before{content:"\\f3bb"}.fa-kickstarter-k:before{content:"\\f3bc"}.fa-kiss:before{content:"\\f596"}.fa-kiss-beam:before{content:"\\f597"}.fa-kiss-wink-heart:before{content:"\\f598"}.fa-kiwi-bird:before{content:"\\f535"}.fa-korvue:before{content:"\\f42f"}.fa-landmark:before{content:"\\f66f"}.fa-language:before{content:"\\f1ab"}.fa-laptop:before{content:"\\f109"}.fa-laptop-code:before{content:"\\f5fc"}.fa-laptop-house:before{content:"\\f966"}.fa-laptop-medical:before{content:"\\f812"}.fa-laravel:before{content:"\\f3bd"}.fa-lastfm:before{content:"\\f202"}.fa-lastfm-square:before{content:"\\f203"}.fa-laugh:before{content:"\\f599"}.fa-laugh-beam:before{content:"\\f59a"}.fa-laugh-squint:before{content:"\\f59b"}.fa-laugh-wink:before{content:"\\f59c"}.fa-layer-group:before{content:"\\f5fd"}.fa-leaf:before{content:"\\f06c"}.fa-leanpub:before{content:"\\f212"}.fa-lemon:before{content:"\\f094"}.fa-less:before{content:"\\f41d"}.fa-less-than:before{content:"\\f536"}.fa-less-than-equal:before{content:"\\f537"}.fa-level-down-alt:before{content:"\\f3be"}.fa-level-up-alt:before{content:"\\f3bf"}.fa-life-ring:before{content:"\\f1cd"}.fa-lightbulb:before{content:"\\f0eb"}.fa-line:before{content:"\\f3c0"}.fa-link:before{content:"\\f0c1"}.fa-linkedin:before{content:"\\f08c"}.fa-linkedin-in:before{content:"\\f0e1"}.fa-linode:before{content:"\\f2b8"}.fa-linux:before{content:"\\f17c"}.fa-lira-sign:before{content:"\\f195"}.fa-list:before{content:"\\f03a"}.fa-list-alt:before{content:"\\f022"}.fa-list-ol:before{content:"\\f0cb"}.fa-list-ul:before{content:"\\f0ca"}.fa-location-arrow:before{content:"\\f124"}.fa-lock:before{content:"\\f023"}.fa-lock-open:before{content:"\\f3c1"}.fa-long-arrow-alt-down:before{content:"\\f309"}.fa-long-arrow-alt-left:before{content:"\\f30a"}.fa-long-arrow-alt-right:before{content:"\\f30b"}.fa-long-arrow-alt-up:before{content:"\\f30c"}.fa-low-vision:before{content:"\\f2a8"}.fa-luggage-cart:before{content:"\\f59d"}.fa-lungs:before{content:"\\f604"}.fa-lungs-virus:before{content:"\\f967"}.fa-lyft:before{content:"\\f3c3"}.fa-magento:before{content:"\\f3c4"}.fa-magic:before{content:"\\f0d0"}.fa-magnet:before{content:"\\f076"}.fa-mail-bulk:before{content:"\\f674"}.fa-mailchimp:before{content:"\\f59e"}.fa-male:before{content:"\\f183"}.fa-mandalorian:before{content:"\\f50f"}.fa-map:before{content:"\\f279"}.fa-map-marked:before{content:"\\f59f"}.fa-map-marked-alt:before{content:"\\f5a0"}.fa-map-marker:before{content:"\\f041"}.fa-map-marker-alt:before{content:"\\f3c5"}.fa-map-pin:before{content:"\\f276"}.fa-map-signs:before{content:"\\f277"}.fa-markdown:before{content:"\\f60f"}.fa-marker:before{content:"\\f5a1"}.fa-mars:before{content:"\\f222"}.fa-mars-double:before{content:"\\f227"}.fa-mars-stroke:before{content:"\\f229"}.fa-mars-stroke-h:before{content:"\\f22b"}.fa-mars-stroke-v:before{content:"\\f22a"}.fa-mask:before{content:"\\f6fa"}.fa-mastodon:before{content:"\\f4f6"}.fa-maxcdn:before{content:"\\f136"}.fa-mdb:before{content:"\\f8ca"}.fa-medal:before{content:"\\f5a2"}.fa-medapps:before{content:"\\f3c6"}.fa-medium:before{content:"\\f23a"}.fa-medium-m:before{content:"\\f3c7"}.fa-medkit:before{content:"\\f0fa"}.fa-medrt:before{content:"\\f3c8"}.fa-meetup:before{content:"\\f2e0"}.fa-megaport:before{content:"\\f5a3"}.fa-meh:before{content:"\\f11a"}.fa-meh-blank:before{content:"\\f5a4"}.fa-meh-rolling-eyes:before{content:"\\f5a5"}.fa-memory:before{content:"\\f538"}.fa-mendeley:before{content:"\\f7b3"}.fa-menorah:before{content:"\\f676"}.fa-mercury:before{content:"\\f223"}.fa-meteor:before{content:"\\f753"}.fa-microblog:before{content:"\\f91a"}.fa-microchip:before{content:"\\f2db"}.fa-microphone:before{content:"\\f130"}.fa-microphone-alt:before{content:"\\f3c9"}.fa-microphone-alt-slash:before{content:"\\f539"}.fa-microphone-slash:before{content:"\\f131"}.fa-microscope:before{content:"\\f610"}.fa-microsoft:before{content:"\\f3ca"}.fa-minus:before{content:"\\f068"}.fa-minus-circle:before{content:"\\f056"}.fa-minus-square:before{content:"\\f146"}.fa-mitten:before{content:"\\f7b5"}.fa-mix:before{content:"\\f3cb"}.fa-mixcloud:before{content:"\\f289"}.fa-mixer:before{content:"\\f956"}.fa-mizuni:before{content:"\\f3cc"}.fa-mobile:before{content:"\\f10b"}.fa-mobile-alt:before{content:"\\f3cd"}.fa-modx:before{content:"\\f285"}.fa-monero:before{content:"\\f3d0"}.fa-money-bill:before{content:"\\f0d6"}.fa-money-bill-alt:before{content:"\\f3d1"}.fa-money-bill-wave:before{content:"\\f53a"}.fa-money-bill-wave-alt:before{content:"\\f53b"}.fa-money-check:before{content:"\\f53c"}.fa-money-check-alt:before{content:"\\f53d"}.fa-monument:before{content:"\\f5a6"}.fa-moon:before{content:"\\f186"}.fa-mortar-pestle:before{content:"\\f5a7"}.fa-mosque:before{content:"\\f678"}.fa-motorcycle:before{content:"\\f21c"}.fa-mountain:before{content:"\\f6fc"}.fa-mouse:before{content:"\\f8cc"}.fa-mouse-pointer:before{content:"\\f245"}.fa-mug-hot:before{content:"\\f7b6"}.fa-music:before{content:"\\f001"}.fa-napster:before{content:"\\f3d2"}.fa-neos:before{content:"\\f612"}.fa-network-wired:before{content:"\\f6ff"}.fa-neuter:before{content:"\\f22c"}.fa-newspaper:before{content:"\\f1ea"}.fa-nimblr:before{content:"\\f5a8"}.fa-node:before{content:"\\f419"}.fa-node-js:before{content:"\\f3d3"}.fa-not-equal:before{content:"\\f53e"}.fa-notes-medical:before{content:"\\f481"}.fa-npm:before{content:"\\f3d4"}.fa-ns8:before{content:"\\f3d5"}.fa-nutritionix:before{content:"\\f3d6"}.fa-object-group:before{content:"\\f247"}.fa-object-ungroup:before{content:"\\f248"}.fa-odnoklassniki:before{content:"\\f263"}.fa-odnoklassniki-square:before{content:"\\f264"}.fa-oil-can:before{content:"\\f613"}.fa-old-republic:before{content:"\\f510"}.fa-om:before{content:"\\f679"}.fa-opencart:before{content:"\\f23d"}.fa-openid:before{content:"\\f19b"}.fa-opera:before{content:"\\f26a"}.fa-optin-monster:before{content:"\\f23c"}.fa-orcid:before{content:"\\f8d2"}.fa-osi:before{content:"\\f41a"}.fa-otter:before{content:"\\f700"}.fa-outdent:before{content:"\\f03b"}.fa-page4:before{content:"\\f3d7"}.fa-pagelines:before{content:"\\f18c"}.fa-pager:before{content:"\\f815"}.fa-paint-brush:before{content:"\\f1fc"}.fa-paint-roller:before{content:"\\f5aa"}.fa-palette:before{content:"\\f53f"}.fa-palfed:before{content:"\\f3d8"}.fa-pallet:before{content:"\\f482"}.fa-paper-plane:before{content:"\\f1d8"}.fa-paperclip:before{content:"\\f0c6"}.fa-parachute-box:before{content:"\\f4cd"}.fa-paragraph:before{content:"\\f1dd"}.fa-parking:before{content:"\\f540"}.fa-passport:before{content:"\\f5ab"}.fa-pastafarianism:before{content:"\\f67b"}.fa-paste:before{content:"\\f0ea"}.fa-patreon:before{content:"\\f3d9"}.fa-pause:before{content:"\\f04c"}.fa-pause-circle:before{content:"\\f28b"}.fa-paw:before{content:"\\f1b0"}.fa-paypal:before{content:"\\f1ed"}.fa-peace:before{content:"\\f67c"}.fa-pen:before{content:"\\f304"}.fa-pen-alt:before{content:"\\f305"}.fa-pen-fancy:before{content:"\\f5ac"}.fa-pen-nib:before{content:"\\f5ad"}.fa-pen-square:before{content:"\\f14b"}.fa-pencil-alt:before{content:"\\f303"}.fa-pencil-ruler:before{content:"\\f5ae"}.fa-penny-arcade:before{content:"\\f704"}.fa-people-arrows:before{content:"\\f968"}.fa-people-carry:before{content:"\\f4ce"}.fa-pepper-hot:before{content:"\\f816"}.fa-percent:before{content:"\\f295"}.fa-percentage:before{content:"\\f541"}.fa-periscope:before{content:"\\f3da"}.fa-person-booth:before{content:"\\f756"}.fa-phabricator:before{content:"\\f3db"}.fa-phoenix-framework:before{content:"\\f3dc"}.fa-phoenix-squadron:before{content:"\\f511"}.fa-phone:before{content:"\\f095"}.fa-phone-alt:before{content:"\\f879"}.fa-phone-slash:before{content:"\\f3dd"}.fa-phone-square:before{content:"\\f098"}.fa-phone-square-alt:before{content:"\\f87b"}.fa-phone-volume:before{content:"\\f2a0"}.fa-photo-video:before{content:"\\f87c"}.fa-php:before{content:"\\f457"}.fa-pied-piper:before{content:"\\f2ae"}.fa-pied-piper-alt:before{content:"\\f1a8"}.fa-pied-piper-hat:before{content:"\\f4e5"}.fa-pied-piper-pp:before{content:"\\f1a7"}.fa-pied-piper-square:before{content:"\\f91e"}.fa-piggy-bank:before{content:"\\f4d3"}.fa-pills:before{content:"\\f484"}.fa-pinterest:before{content:"\\f0d2"}.fa-pinterest-p:before{content:"\\f231"}.fa-pinterest-square:before{content:"\\f0d3"}.fa-pizza-slice:before{content:"\\f818"}.fa-place-of-worship:before{content:"\\f67f"}.fa-plane:before{content:"\\f072"}.fa-plane-arrival:before{content:"\\f5af"}.fa-plane-departure:before{content:"\\f5b0"}.fa-plane-slash:before{content:"\\f969"}.fa-play:before{content:"\\f04b"}.fa-play-circle:before{content:"\\f144"}.fa-playstation:before{content:"\\f3df"}.fa-plug:before{content:"\\f1e6"}.fa-plus:before{content:"\\f067"}.fa-plus-circle:before{content:"\\f055"}.fa-plus-square:before{content:"\\f0fe"}.fa-podcast:before{content:"\\f2ce"}.fa-poll:before{content:"\\f681"}.fa-poll-h:before{content:"\\f682"}.fa-poo:before{content:"\\f2fe"}.fa-poo-storm:before{content:"\\f75a"}.fa-poop:before{content:"\\f619"}.fa-portrait:before{content:"\\f3e0"}.fa-pound-sign:before{content:"\\f154"}.fa-power-off:before{content:"\\f011"}.fa-pray:before{content:"\\f683"}.fa-praying-hands:before{content:"\\f684"}.fa-prescription:before{content:"\\f5b1"}.fa-prescription-bottle:before{content:"\\f485"}.fa-prescription-bottle-alt:before{content:"\\f486"}.fa-print:before{content:"\\f02f"}.fa-procedures:before{content:"\\f487"}.fa-product-hunt:before{content:"\\f288"}.fa-project-diagram:before{content:"\\f542"}.fa-pump-medical:before{content:"\\f96a"}.fa-pump-soap:before{content:"\\f96b"}.fa-pushed:before{content:"\\f3e1"}.fa-puzzle-piece:before{content:"\\f12e"}.fa-python:before{content:"\\f3e2"}.fa-qq:before{content:"\\f1d6"}.fa-qrcode:before{content:"\\f029"}.fa-question:before{content:"\\f128"}.fa-question-circle:before{content:"\\f059"}.fa-quidditch:before{content:"\\f458"}.fa-quinscape:before{content:"\\f459"}.fa-quora:before{content:"\\f2c4"}.fa-quote-left:before{content:"\\f10d"}.fa-quote-right:before{content:"\\f10e"}.fa-quran:before{content:"\\f687"}.fa-r-project:before{content:"\\f4f7"}.fa-radiation:before{content:"\\f7b9"}.fa-radiation-alt:before{content:"\\f7ba"}.fa-rainbow:before{content:"\\f75b"}.fa-random:before{content:"\\f074"}.fa-raspberry-pi:before{content:"\\f7bb"}.fa-ravelry:before{content:"\\f2d9"}.fa-react:before{content:"\\f41b"}.fa-reacteurope:before{content:"\\f75d"}.fa-readme:before{content:"\\f4d5"}.fa-rebel:before{content:"\\f1d0"}.fa-receipt:before{content:"\\f543"}.fa-record-vinyl:before{content:"\\f8d9"}.fa-recycle:before{content:"\\f1b8"}.fa-red-river:before{content:"\\f3e3"}.fa-reddit:before{content:"\\f1a1"}.fa-reddit-alien:before{content:"\\f281"}.fa-reddit-square:before{content:"\\f1a2"}.fa-redhat:before{content:"\\f7bc"}.fa-redo:before{content:"\\f01e"}.fa-redo-alt:before{content:"\\f2f9"}.fa-registered:before{content:"\\f25d"}.fa-remove-format:before{content:"\\f87d"}.fa-renren:before{content:"\\f18b"}.fa-reply:before{content:"\\f3e5"}.fa-reply-all:before{content:"\\f122"}.fa-replyd:before{content:"\\f3e6"}.fa-republican:before{content:"\\f75e"}.fa-researchgate:before{content:"\\f4f8"}.fa-resolving:before{content:"\\f3e7"}.fa-restroom:before{content:"\\f7bd"}.fa-retweet:before{content:"\\f079"}.fa-rev:before{content:"\\f5b2"}.fa-ribbon:before{content:"\\f4d6"}.fa-ring:before{content:"\\f70b"}.fa-road:before{content:"\\f018"}.fa-robot:before{content:"\\f544"}.fa-rocket:before{content:"\\f135"}.fa-rocketchat:before{content:"\\f3e8"}.fa-rockrms:before{content:"\\f3e9"}.fa-route:before{content:"\\f4d7"}.fa-rss:before{content:"\\f09e"}.fa-rss-square:before{content:"\\f143"}.fa-ruble-sign:before{content:"\\f158"}.fa-ruler:before{content:"\\f545"}.fa-ruler-combined:before{content:"\\f546"}.fa-ruler-horizontal:before{content:"\\f547"}.fa-ruler-vertical:before{content:"\\f548"}.fa-running:before{content:"\\f70c"}.fa-rupee-sign:before{content:"\\f156"}.fa-sad-cry:before{content:"\\f5b3"}.fa-sad-tear:before{content:"\\f5b4"}.fa-safari:before{content:"\\f267"}.fa-salesforce:before{content:"\\f83b"}.fa-sass:before{content:"\\f41e"}.fa-satellite:before{content:"\\f7bf"}.fa-satellite-dish:before{content:"\\f7c0"}.fa-save:before{content:"\\f0c7"}.fa-schlix:before{content:"\\f3ea"}.fa-school:before{content:"\\f549"}.fa-screwdriver:before{content:"\\f54a"}.fa-scribd:before{content:"\\f28a"}.fa-scroll:before{content:"\\f70e"}.fa-sd-card:before{content:"\\f7c2"}.fa-search:before{content:"\\f002"}.fa-search-dollar:before{content:"\\f688"}.fa-search-location:before{content:"\\f689"}.fa-search-minus:before{content:"\\f010"}.fa-search-plus:before{content:"\\f00e"}.fa-searchengin:before{content:"\\f3eb"}.fa-seedling:before{content:"\\f4d8"}.fa-sellcast:before{content:"\\f2da"}.fa-sellsy:before{content:"\\f213"}.fa-server:before{content:"\\f233"}.fa-servicestack:before{content:"\\f3ec"}.fa-shapes:before{content:"\\f61f"}.fa-share:before{content:"\\f064"}.fa-share-alt:before{content:"\\f1e0"}.fa-share-alt-square:before{content:"\\f1e1"}.fa-share-square:before{content:"\\f14d"}.fa-shekel-sign:before{content:"\\f20b"}.fa-shield-alt:before{content:"\\f3ed"}.fa-shield-virus:before{content:"\\f96c"}.fa-ship:before{content:"\\f21a"}.fa-shipping-fast:before{content:"\\f48b"}.fa-shirtsinbulk:before{content:"\\f214"}.fa-shoe-prints:before{content:"\\f54b"}.fa-shopify:before{content:"\\f957"}.fa-shopping-bag:before{content:"\\f290"}.fa-shopping-basket:before{content:"\\f291"}.fa-shopping-cart:before{content:"\\f07a"}.fa-shopware:before{content:"\\f5b5"}.fa-shower:before{content:"\\f2cc"}.fa-shuttle-van:before{content:"\\f5b6"}.fa-sign:before{content:"\\f4d9"}.fa-sign-in-alt:before{content:"\\f2f6"}.fa-sign-language:before{content:"\\f2a7"}.fa-sign-out-alt:before{content:"\\f2f5"}.fa-signal:before{content:"\\f012"}.fa-signature:before{content:"\\f5b7"}.fa-sim-card:before{content:"\\f7c4"}.fa-simplybuilt:before{content:"\\f215"}.fa-sistrix:before{content:"\\f3ee"}.fa-sitemap:before{content:"\\f0e8"}.fa-sith:before{content:"\\f512"}.fa-skating:before{content:"\\f7c5"}.fa-sketch:before{content:"\\f7c6"}.fa-skiing:before{content:"\\f7c9"}.fa-skiing-nordic:before{content:"\\f7ca"}.fa-skull:before{content:"\\f54c"}.fa-skull-crossbones:before{content:"\\f714"}.fa-skyatlas:before{content:"\\f216"}.fa-skype:before{content:"\\f17e"}.fa-slack:before{content:"\\f198"}.fa-slack-hash:before{content:"\\f3ef"}.fa-slash:before{content:"\\f715"}.fa-sleigh:before{content:"\\f7cc"}.fa-sliders-h:before{content:"\\f1de"}.fa-slideshare:before{content:"\\f1e7"}.fa-smile:before{content:"\\f118"}.fa-smile-beam:before{content:"\\f5b8"}.fa-smile-wink:before{content:"\\f4da"}.fa-smog:before{content:"\\f75f"}.fa-smoking:before{content:"\\f48d"}.fa-smoking-ban:before{content:"\\f54d"}.fa-sms:before{content:"\\f7cd"}.fa-snapchat:before{content:"\\f2ab"}.fa-snapchat-ghost:before{content:"\\f2ac"}.fa-snapchat-square:before{content:"\\f2ad"}.fa-snowboarding:before{content:"\\f7ce"}.fa-snowflake:before{content:"\\f2dc"}.fa-snowman:before{content:"\\f7d0"}.fa-snowplow:before{content:"\\f7d2"}.fa-soap:before{content:"\\f96e"}.fa-socks:before{content:"\\f696"}.fa-solar-panel:before{content:"\\f5ba"}.fa-sort:before{content:"\\f0dc"}.fa-sort-alpha-down:before{content:"\\f15d"}.fa-sort-alpha-down-alt:before{content:"\\f881"}.fa-sort-alpha-up:before{content:"\\f15e"}.fa-sort-alpha-up-alt:before{content:"\\f882"}.fa-sort-amount-down:before{content:"\\f160"}.fa-sort-amount-down-alt:before{content:"\\f884"}.fa-sort-amount-up:before{content:"\\f161"}.fa-sort-amount-up-alt:before{content:"\\f885"}.fa-sort-down:before{content:"\\f0dd"}.fa-sort-numeric-down:before{content:"\\f162"}.fa-sort-numeric-down-alt:before{content:"\\f886"}.fa-sort-numeric-up:before{content:"\\f163"}.fa-sort-numeric-up-alt:before{content:"\\f887"}.fa-sort-up:before{content:"\\f0de"}.fa-soundcloud:before{content:"\\f1be"}.fa-sourcetree:before{content:"\\f7d3"}.fa-spa:before{content:"\\f5bb"}.fa-space-shuttle:before{content:"\\f197"}.fa-speakap:before{content:"\\f3f3"}.fa-speaker-deck:before{content:"\\f83c"}.fa-spell-check:before{content:"\\f891"}.fa-spider:before{content:"\\f717"}.fa-spinner:before{content:"\\f110"}.fa-splotch:before{content:"\\f5bc"}.fa-spotify:before{content:"\\f1bc"}.fa-spray-can:before{content:"\\f5bd"}.fa-square:before{content:"\\f0c8"}.fa-square-full:before{content:"\\f45c"}.fa-square-root-alt:before{content:"\\f698"}.fa-squarespace:before{content:"\\f5be"}.fa-stack-exchange:before{content:"\\f18d"}.fa-stack-overflow:before{content:"\\f16c"}.fa-stackpath:before{content:"\\f842"}.fa-stamp:before{content:"\\f5bf"}.fa-star:before{content:"\\f005"}.fa-star-and-crescent:before{content:"\\f699"}.fa-star-half:before{content:"\\f089"}.fa-star-half-alt:before{content:"\\f5c0"}.fa-star-of-david:before{content:"\\f69a"}.fa-star-of-life:before{content:"\\f621"}.fa-staylinked:before{content:"\\f3f5"}.fa-steam:before{content:"\\f1b6"}.fa-steam-square:before{content:"\\f1b7"}.fa-steam-symbol:before{content:"\\f3f6"}.fa-step-backward:before{content:"\\f048"}.fa-step-forward:before{content:"\\f051"}.fa-stethoscope:before{content:"\\f0f1"}.fa-sticker-mule:before{content:"\\f3f7"}.fa-sticky-note:before{content:"\\f249"}.fa-stop:before{content:"\\f04d"}.fa-stop-circle:before{content:"\\f28d"}.fa-stopwatch:before{content:"\\f2f2"}.fa-stopwatch-20:before{content:"\\f96f"}.fa-store:before{content:"\\f54e"}.fa-store-alt:before{content:"\\f54f"}.fa-store-alt-slash:before{content:"\\f970"}.fa-store-slash:before{content:"\\f971"}.fa-strava:before{content:"\\f428"}.fa-stream:before{content:"\\f550"}.fa-street-view:before{content:"\\f21d"}.fa-strikethrough:before{content:"\\f0cc"}.fa-stripe:before{content:"\\f429"}.fa-stripe-s:before{content:"\\f42a"}.fa-stroopwafel:before{content:"\\f551"}.fa-studiovinari:before{content:"\\f3f8"}.fa-stumbleupon:before{content:"\\f1a4"}.fa-stumbleupon-circle:before{content:"\\f1a3"}.fa-subscript:before{content:"\\f12c"}.fa-subway:before{content:"\\f239"}.fa-suitcase:before{content:"\\f0f2"}.fa-suitcase-rolling:before{content:"\\f5c1"}.fa-sun:before{content:"\\f185"}.fa-superpowers:before{content:"\\f2dd"}.fa-superscript:before{content:"\\f12b"}.fa-supple:before{content:"\\f3f9"}.fa-surprise:before{content:"\\f5c2"}.fa-suse:before{content:"\\f7d6"}.fa-swatchbook:before{content:"\\f5c3"}.fa-swift:before{content:"\\f8e1"}.fa-swimmer:before{content:"\\f5c4"}.fa-swimming-pool:before{content:"\\f5c5"}.fa-symfony:before{content:"\\f83d"}.fa-synagogue:before{content:"\\f69b"}.fa-sync:before{content:"\\f021"}.fa-sync-alt:before{content:"\\f2f1"}.fa-syringe:before{content:"\\f48e"}.fa-table:before{content:"\\f0ce"}.fa-table-tennis:before{content:"\\f45d"}.fa-tablet:before{content:"\\f10a"}.fa-tablet-alt:before{content:"\\f3fa"}.fa-tablets:before{content:"\\f490"}.fa-tachometer-alt:before{content:"\\f3fd"}.fa-tag:before{content:"\\f02b"}.fa-tags:before{content:"\\f02c"}.fa-tape:before{content:"\\f4db"}.fa-tasks:before{content:"\\f0ae"}.fa-taxi:before{content:"\\f1ba"}.fa-teamspeak:before{content:"\\f4f9"}.fa-teeth:before{content:"\\f62e"}.fa-teeth-open:before{content:"\\f62f"}.fa-telegram:before{content:"\\f2c6"}.fa-telegram-plane:before{content:"\\f3fe"}.fa-temperature-high:before{content:"\\f769"}.fa-temperature-low:before{content:"\\f76b"}.fa-tencent-weibo:before{content:"\\f1d5"}.fa-tenge:before{content:"\\f7d7"}.fa-terminal:before{content:"\\f120"}.fa-text-height:before{content:"\\f034"}.fa-text-width:before{content:"\\f035"}.fa-th:before{content:"\\f00a"}.fa-th-large:before{content:"\\f009"}.fa-th-list:before{content:"\\f00b"}.fa-the-red-yeti:before{content:"\\f69d"}.fa-theater-masks:before{content:"\\f630"}.fa-themeco:before{content:"\\f5c6"}.fa-themeisle:before{content:"\\f2b2"}.fa-thermometer:before{content:"\\f491"}.fa-thermometer-empty:before{content:"\\f2cb"}.fa-thermometer-full:before{content:"\\f2c7"}.fa-thermometer-half:before{content:"\\f2c9"}.fa-thermometer-quarter:before{content:"\\f2ca"}.fa-thermometer-three-quarters:before{content:"\\f2c8"}.fa-think-peaks:before{content:"\\f731"}.fa-thumbs-down:before{content:"\\f165"}.fa-thumbs-up:before{content:"\\f164"}.fa-thumbtack:before{content:"\\f08d"}.fa-ticket-alt:before{content:"\\f3ff"}.fa-times:before{content:"\\f00d"}.fa-times-circle:before{content:"\\f057"}.fa-tint:before{content:"\\f043"}.fa-tint-slash:before{content:"\\f5c7"}.fa-tired:before{content:"\\f5c8"}.fa-toggle-off:before{content:"\\f204"}.fa-toggle-on:before{content:"\\f205"}.fa-toilet:before{content:"\\f7d8"}.fa-toilet-paper:before{content:"\\f71e"}.fa-toilet-paper-slash:before{content:"\\f972"}.fa-toolbox:before{content:"\\f552"}.fa-tools:before{content:"\\f7d9"}.fa-tooth:before{content:"\\f5c9"}.fa-torah:before{content:"\\f6a0"}.fa-torii-gate:before{content:"\\f6a1"}.fa-tractor:before{content:"\\f722"}.fa-trade-federation:before{content:"\\f513"}.fa-trademark:before{content:"\\f25c"}.fa-traffic-light:before{content:"\\f637"}.fa-trailer:before{content:"\\f941"}.fa-train:before{content:"\\f238"}.fa-tram:before{content:"\\f7da"}.fa-transgender:before{content:"\\f224"}.fa-transgender-alt:before{content:"\\f225"}.fa-trash:before{content:"\\f1f8"}.fa-trash-alt:before{content:"\\f2ed"}.fa-trash-restore:before{content:"\\f829"}.fa-trash-restore-alt:before{content:"\\f82a"}.fa-tree:before{content:"\\f1bb"}.fa-trello:before{content:"\\f181"}.fa-tripadvisor:before{content:"\\f262"}.fa-trophy:before{content:"\\f091"}.fa-truck:before{content:"\\f0d1"}.fa-truck-loading:before{content:"\\f4de"}.fa-truck-monster:before{content:"\\f63b"}.fa-truck-moving:before{content:"\\f4df"}.fa-truck-pickup:before{content:"\\f63c"}.fa-tshirt:before{content:"\\f553"}.fa-tty:before{content:"\\f1e4"}.fa-tumblr:before{content:"\\f173"}.fa-tumblr-square:before{content:"\\f174"}.fa-tv:before{content:"\\f26c"}.fa-twitch:before{content:"\\f1e8"}.fa-twitter:before{content:"\\f099"}.fa-twitter-square:before{content:"\\f081"}.fa-typo3:before{content:"\\f42b"}.fa-uber:before{content:"\\f402"}.fa-ubuntu:before{content:"\\f7df"}.fa-uikit:before{content:"\\f403"}.fa-umbraco:before{content:"\\f8e8"}.fa-umbrella:before{content:"\\f0e9"}.fa-umbrella-beach:before{content:"\\f5ca"}.fa-underline:before{content:"\\f0cd"}.fa-undo:before{content:"\\f0e2"}.fa-undo-alt:before{content:"\\f2ea"}.fa-uniregistry:before{content:"\\f404"}.fa-unity:before{content:"\\f949"}.fa-universal-access:before{content:"\\f29a"}.fa-university:before{content:"\\f19c"}.fa-unlink:before{content:"\\f127"}.fa-unlock:before{content:"\\f09c"}.fa-unlock-alt:before{content:"\\f13e"}.fa-untappd:before{content:"\\f405"}.fa-upload:before{content:"\\f093"}.fa-ups:before{content:"\\f7e0"}.fa-usb:before{content:"\\f287"}.fa-user:before{content:"\\f007"}.fa-user-alt:before{content:"\\f406"}.fa-user-alt-slash:before{content:"\\f4fa"}.fa-user-astronaut:before{content:"\\f4fb"}.fa-user-check:before{content:"\\f4fc"}.fa-user-circle:before{content:"\\f2bd"}.fa-user-clock:before{content:"\\f4fd"}.fa-user-cog:before{content:"\\f4fe"}.fa-user-edit:before{content:"\\f4ff"}.fa-user-friends:before{content:"\\f500"}.fa-user-graduate:before{content:"\\f501"}.fa-user-injured:before{content:"\\f728"}.fa-user-lock:before{content:"\\f502"}.fa-user-md:before{content:"\\f0f0"}.fa-user-minus:before{content:"\\f503"}.fa-user-ninja:before{content:"\\f504"}.fa-user-nurse:before{content:"\\f82f"}.fa-user-plus:before{content:"\\f234"}.fa-user-secret:before{content:"\\f21b"}.fa-user-shield:before{content:"\\f505"}.fa-user-slash:before{content:"\\f506"}.fa-user-tag:before{content:"\\f507"}.fa-user-tie:before{content:"\\f508"}.fa-user-times:before{content:"\\f235"}.fa-users:before{content:"\\f0c0"}.fa-users-cog:before{content:"\\f509"}.fa-usps:before{content:"\\f7e1"}.fa-ussunnah:before{content:"\\f407"}.fa-utensil-spoon:before{content:"\\f2e5"}.fa-utensils:before{content:"\\f2e7"}.fa-vaadin:before{content:"\\f408"}.fa-vector-square:before{content:"\\f5cb"}.fa-venus:before{content:"\\f221"}.fa-venus-double:before{content:"\\f226"}.fa-venus-mars:before{content:"\\f228"}.fa-viacoin:before{content:"\\f237"}.fa-viadeo:before{content:"\\f2a9"}.fa-viadeo-square:before{content:"\\f2aa"}.fa-vial:before{content:"\\f492"}.fa-vials:before{content:"\\f493"}.fa-viber:before{content:"\\f409"}.fa-video:before{content:"\\f03d"}.fa-video-slash:before{content:"\\f4e2"}.fa-vihara:before{content:"\\f6a7"}.fa-vimeo:before{content:"\\f40a"}.fa-vimeo-square:before{content:"\\f194"}.fa-vimeo-v:before{content:"\\f27d"}.fa-vine:before{content:"\\f1ca"}.fa-virus:before{content:"\\f974"}.fa-virus-slash:before{content:"\\f975"}.fa-viruses:before{content:"\\f976"}.fa-vk:before{content:"\\f189"}.fa-vnv:before{content:"\\f40b"}.fa-voicemail:before{content:"\\f897"}.fa-volleyball-ball:before{content:"\\f45f"}.fa-volume-down:before{content:"\\f027"}.fa-volume-mute:before{content:"\\f6a9"}.fa-volume-off:before{content:"\\f026"}.fa-volume-up:before{content:"\\f028"}.fa-vote-yea:before{content:"\\f772"}.fa-vr-cardboard:before{content:"\\f729"}.fa-vuejs:before{content:"\\f41f"}.fa-walking:before{content:"\\f554"}.fa-wallet:before{content:"\\f555"}.fa-warehouse:before{content:"\\f494"}.fa-water:before{content:"\\f773"}.fa-wave-square:before{content:"\\f83e"}.fa-waze:before{content:"\\f83f"}.fa-weebly:before{content:"\\f5cc"}.fa-weibo:before{content:"\\f18a"}.fa-weight:before{content:"\\f496"}.fa-weight-hanging:before{content:"\\f5cd"}.fa-weixin:before{content:"\\f1d7"}.fa-whatsapp:before{content:"\\f232"}.fa-whatsapp-square:before{content:"\\f40c"}.fa-wheelchair:before{content:"\\f193"}.fa-whmcs:before{content:"\\f40d"}.fa-wifi:before{content:"\\f1eb"}.fa-wikipedia-w:before{content:"\\f266"}.fa-wind:before{content:"\\f72e"}.fa-window-close:before{content:"\\f410"}.fa-window-maximize:before{content:"\\f2d0"}.fa-window-minimize:before{content:"\\f2d1"}.fa-window-restore:before{content:"\\f2d2"}.fa-windows:before{content:"\\f17a"}.fa-wine-bottle:before{content:"\\f72f"}.fa-wine-glass:before{content:"\\f4e3"}.fa-wine-glass-alt:before{content:"\\f5ce"}.fa-wix:before{content:"\\f5cf"}.fa-wizards-of-the-coast:before{content:"\\f730"}.fa-wolf-pack-battalion:before{content:"\\f514"}.fa-won-sign:before{content:"\\f159"}.fa-wordpress:before{content:"\\f19a"}.fa-wordpress-simple:before{content:"\\f411"}.fa-wpbeginner:before{content:"\\f297"}.fa-wpexplorer:before{content:"\\f2de"}.fa-wpforms:before{content:"\\f298"}.fa-wpressr:before{content:"\\f3e4"}.fa-wrench:before{content:"\\f0ad"}.fa-x-ray:before{content:"\\f497"}.fa-xbox:before{content:"\\f412"}.fa-xing:before{content:"\\f168"}.fa-xing-square:before{content:"\\f169"}.fa-y-combinator:before{content:"\\f23b"}.fa-yahoo:before{content:"\\f19e"}.fa-yammer:before{content:"\\f840"}.fa-yandex:before{content:"\\f413"}.fa-yandex-international:before{content:"\\f414"}.fa-yarn:before{content:"\\f7e3"}.fa-yelp:before{content:"\\f1e9"}.fa-yen-sign:before{content:"\\f157"}.fa-yin-yang:before{content:"\\f6ad"}.fa-yoast:before{content:"\\f2b1"}.fa-youtube:before{content:"\\f167"}.fa-youtube-square:before{content:"\\f431"}.fa-zhihu:before{content:"\\f63f"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}',
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    var o = n(10),
      f = n(3),
      r = n(11),
      a = 0,
      c = Math.pow(36, 4);
    function i() {
      return f(((r() * c) << 0).toString(36), 4);
    }
    function s() {
      return (a = a < c ? a : 0), ++a - 1;
    }
    function l() {
      return (
        "c" +
        new Date().getTime().toString(36) +
        f(s().toString(36), 4) +
        o() +
        (i() + i())
      );
    }
    (l.slug = function () {
      var e = new Date().getTime().toString(36),
        t = s().toString(36).slice(-4),
        n = o().slice(0, 1) + o().slice(-1),
        f = i().slice(-2);
      return e.slice(-2) + t + n + f;
    }),
      (l.isCuid = function (e) {
        return "string" == typeof e && !!e.startsWith("c");
      }),
      (l.isSlug = function (e) {
        if ("string" != typeof e) return !1;
        var t = e.length;
        return t >= 7 && t <= 10;
      }),
      (l.fingerprint = o),
      (e.exports = l);
  },
  function (e, t, n) {
    var o = n(3),
      f = "object" == typeof window ? window : self,
      r = Object.keys(f).length,
      a = o(
        (
          (navigator.mimeTypes ? navigator.mimeTypes.length : 0) +
          navigator.userAgent.length
        ).toString(36) + r.toString(36),
        4
      );
    e.exports = function () {
      return a;
    };
  },
  function (e, t) {
    var n,
      o =
        ("undefined" != typeof window && (window.crypto || window.msCrypto)) ||
        ("undefined" != typeof self && self.crypto);
    if (o) {
      var f = Math.pow(2, 32) - 1;
      n = function () {
        return Math.abs(o.getRandomValues(new Uint32Array(1))[0] / f);
      };
    } else n = Math.random;
    e.exports = n;
  },
]);
