// vendor-taVxPZ7O.js
var ns = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Aa(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
function _p(i) {
    if (i.__esModule)
        return i;
    var t = i.default;
    if (typeof t == "function") {
        var e = function r() {
            return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        e.prototype = t.prototype
    } else
        e = {};
    return Object.defineProperty(e, "__esModule", {
        value: !0
    }),
    Object.keys(i).forEach(function(r) {
        var s = Object.getOwnPropertyDescriptor(i, r);
        Object.defineProperty(e, r, s.get ? s : {
            enumerable: !0,
            get: function() {
                return i[r]
            }
        })
    }),
    e
}
var Sc = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
(function(i) {
    (function(t, e) {
        i.exports = t.document ? e(t, !0) : function(r) {
            if (!r.document)
                throw new Error("jQuery requires a window with a document");
            return e(r)
        }
    }
    )(typeof window < "u" ? window : ns, function(t, e) {
        var r = []
          , s = Object.getPrototypeOf
          , n = r.slice
          , a = r.flat ? function(h) {
            return r.flat.call(h)
        }
        : function(h) {
            return r.concat.apply([], h)
        }
          , o = r.push
          , l = r.indexOf
          , c = {}
          , p = c.toString
          , m = c.hasOwnProperty
          , f = m.toString
          , v = f.call(Object)
          , _ = {}
          , T = function(u) {
            return typeof u == "function" && typeof u.nodeType != "number" && typeof u.item != "function"
        }
          , A = function(u) {
            return u != null && u === u.window
        }
          , E = t.document
          , I = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function S(h, u, g) {
            g = g || E;
            var y, x, b = g.createElement("script");
            if (b.text = h,
            u)
                for (y in I)
                    x = u[y] || u.getAttribute && u.getAttribute(y),
                    x && b.setAttribute(y, x);
            g.head.appendChild(b).parentNode.removeChild(b)
        }
        function P(h) {
            return h == null ? h + "" : typeof h == "object" || typeof h == "function" ? c[p.call(h)] || "object" : typeof h
        }
        var k = "3.7.1"
          , $ = /HTML$/i
          , d = function(h, u) {
            return new d.fn.init(h,u)
        };
        d.fn = d.prototype = {
            jquery: k,
            constructor: d,
            length: 0,
            toArray: function() {
                return n.call(this)
            },
            get: function(h) {
                return h == null ? n.call(this) : h < 0 ? this[h + this.length] : this[h]
            },
            pushStack: function(h) {
                var u = d.merge(this.constructor(), h);
                return u.prevObject = this,
                u
            },
            each: function(h) {
                return d.each(this, h)
            },
            map: function(h) {
                return this.pushStack(d.map(this, function(u, g) {
                    return h.call(u, g, u)
                }))
            },
            slice: function() {
                return this.pushStack(n.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(d.grep(this, function(h, u) {
                    return (u + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(d.grep(this, function(h, u) {
                    return u % 2
                }))
            },
            eq: function(h) {
                var u = this.length
                  , g = +h + (h < 0 ? u : 0);
                return this.pushStack(g >= 0 && g < u ? [this[g]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: o,
            sort: r.sort,
            splice: r.splice
        },
        d.extend = d.fn.extend = function() {
            var h, u, g, y, x, b, w = arguments[0] || {}, M = 1, R = arguments.length, F = !1;
            for (typeof w == "boolean" && (F = w,
            w = arguments[M] || {},
            M++),
            typeof w != "object" && !T(w) && (w = {}),
            M === R && (w = this,
            M--); M < R; M++)
                if ((h = arguments[M]) != null)
                    for (u in h)
                        y = h[u],
                        !(u === "__proto__" || w === y) && (F && y && (d.isPlainObject(y) || (x = Array.isArray(y))) ? (g = w[u],
                        x && !Array.isArray(g) ? b = [] : !x && !d.isPlainObject(g) ? b = {} : b = g,
                        x = !1,
                        w[u] = d.extend(F, b, y)) : y !== void 0 && (w[u] = y));
            return w
        }
        ,
        d.extend({
            expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(h) {
                throw new Error(h)
            },
            noop: function() {},
            isPlainObject: function(h) {
                var u, g;
                return !h || p.call(h) !== "[object Object]" ? !1 : (u = s(h),
                u ? (g = m.call(u, "constructor") && u.constructor,
                typeof g == "function" && f.call(g) === v) : !0)
            },
            isEmptyObject: function(h) {
                var u;
                for (u in h)
                    return !1;
                return !0
            },
            globalEval: function(h, u, g) {
                S(h, {
                    nonce: u && u.nonce
                }, g)
            },
            each: function(h, u) {
                var g, y = 0;
                if (O(h))
                    for (g = h.length; y < g && u.call(h[y], y, h[y]) !== !1; y++)
                        ;
                else
                    for (y in h)
                        if (u.call(h[y], y, h[y]) === !1)
                            break;
                return h
            },
            text: function(h) {
                var u, g = "", y = 0, x = h.nodeType;
                if (!x)
                    for (; u = h[y++]; )
                        g += d.text(u);
                return x === 1 || x === 11 ? h.textContent : x === 9 ? h.documentElement.textContent : x === 3 || x === 4 ? h.nodeValue : g
            },
            makeArray: function(h, u) {
                var g = u || [];
                return h != null && (O(Object(h)) ? d.merge(g, typeof h == "string" ? [h] : h) : o.call(g, h)),
                g
            },
            inArray: function(h, u, g) {
                return u == null ? -1 : l.call(u, h, g)
            },
            isXMLDoc: function(h) {
                var u = h && h.namespaceURI
                  , g = h && (h.ownerDocument || h).documentElement;
                return !$.test(u || g && g.nodeName || "HTML")
            },
            merge: function(h, u) {
                for (var g = +u.length, y = 0, x = h.length; y < g; y++)
                    h[x++] = u[y];
                return h.length = x,
                h
            },
            grep: function(h, u, g) {
                for (var y, x = [], b = 0, w = h.length, M = !g; b < w; b++)
                    y = !u(h[b], b),
                    y !== M && x.push(h[b]);
                return x
            },
            map: function(h, u, g) {
                var y, x, b = 0, w = [];
                if (O(h))
                    for (y = h.length; b < y; b++)
                        x = u(h[b], b, g),
                        x != null && w.push(x);
                else
                    for (b in h)
                        x = u(h[b], b, g),
                        x != null && w.push(x);
                return a(w)
            },
            guid: 1,
            support: _
        }),
        typeof Symbol == "function" && (d.fn[Symbol.iterator] = r[Symbol.iterator]),
        d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(h, u) {
            c["[object " + u + "]"] = u.toLowerCase()
        });
        function O(h) {
            var u = !!h && "length"in h && h.length
              , g = P(h);
            return T(h) || A(h) ? !1 : g === "array" || u === 0 || typeof u == "number" && u > 0 && u - 1 in h
        }
        function N(h, u) {
            return h.nodeName && h.nodeName.toLowerCase() === u.toLowerCase()
        }
        var z = r.pop
          , J = r.sort
          , V = r.splice
          , B = "[\\x20\\t\\r\\n\\f]"
          , j = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$","g");
        d.contains = function(h, u) {
            var g = u && u.parentNode;
            return h === g || !!(g && g.nodeType === 1 && (h.contains ? h.contains(g) : h.compareDocumentPosition && h.compareDocumentPosition(g) & 16))
        }
        ;
        var rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function at(h, u) {
            return u ? h === "\0" ? "�" : h.slice(0, -1) + "\\" + h.charCodeAt(h.length - 1).toString(16) + " " : "\\" + h
        }
        d.escapeSelector = function(h) {
            return (h + "").replace(rt, at)
        }
        ;
        var st = E
          , dt = o;
        (function() {
            var h, u, g, y, x, b = dt, w, M, R, F, H, X = d.expando, U = 0, q = 0, wt = vn(), Ht = vn(), Rt = vn(), Te = vn(), ce = function(C, D) {
                return C === D && (x = !0),
                0
            }, gr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", mr = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Ut = "\\[" + B + "*(" + mr + ")(?:" + B + "*([*^$|!~]?=)" + B + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + mr + "))|)" + B + "*\\]", mi = ":(" + mr + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ut + ")*)|.*)\\)|)", Vt = new RegExp(B + "+","g"), ne = new RegExp("^" + B + "*," + B + "*"), Ps = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"), to = new RegExp(B + "|>"), yr = new RegExp(mi), Ms = new RegExp("^" + mr + "$"), vr = {
                ID: new RegExp("^#(" + mr + ")"),
                CLASS: new RegExp("^\\.(" + mr + ")"),
                TAG: new RegExp("^(" + mr + "|[*])"),
                ATTR: new RegExp("^" + Ut),
                PSEUDO: new RegExp("^" + mi),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)","i"),
                bool: new RegExp("^(?:" + gr + ")$","i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)","i")
            }, Zr = /^(?:input|select|textarea|button)$/i, Qr = /^h\d$/i, We = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, eo = /[+~]/, Hr = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])","g"), Vr = function(C, D) {
                var L = "0x" + C.slice(1) - 65536;
                return D || (L < 0 ? String.fromCharCode(L + 65536) : String.fromCharCode(L >> 10 | 55296, L & 1023 | 56320))
            }, dp = function() {
                Jr()
            }, fp = xn(function(C) {
                return C.disabled === !0 && N(C, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
            function pp() {
                try {
                    return w.activeElement
                } catch {}
            }
            try {
                b.apply(r = n.call(st.childNodes), st.childNodes),
                r[st.childNodes.length].nodeType
            } catch {
                b = {
                    apply: function(D, L) {
                        dt.apply(D, n.call(L))
                    },
                    call: function(D) {
                        dt.apply(D, n.call(arguments, 1))
                    }
                }
            }
            function zt(C, D, L, G) {
                var W, it, ht, pt, lt, Nt, bt, Et = D && D.ownerDocument, Lt = D ? D.nodeType : 9;
                if (L = L || [],
                typeof C != "string" || !C || Lt !== 1 && Lt !== 9 && Lt !== 11)
                    return L;
                if (!G && (Jr(D),
                D = D || w,
                R)) {
                    if (Lt !== 11 && (lt = We.exec(C)))
                        if (W = lt[1]) {
                            if (Lt === 9)
                                if (ht = D.getElementById(W)) {
                                    if (ht.id === W)
                                        return b.call(L, ht),
                                        L
                                } else
                                    return L;
                            else if (Et && (ht = Et.getElementById(W)) && zt.contains(D, ht) && ht.id === W)
                                return b.call(L, ht),
                                L
                        } else {
                            if (lt[2])
                                return b.apply(L, D.getElementsByTagName(C)),
                                L;
                            if ((W = lt[3]) && D.getElementsByClassName)
                                return b.apply(L, D.getElementsByClassName(W)),
                                L
                        }
                    if (!Te[C + " "] && (!F || !F.test(C))) {
                        if (bt = C,
                        Et = D,
                        Lt === 1 && (to.test(C) || Ps.test(C))) {
                            for (Et = eo.test(C) && ro(D.parentNode) || D,
                            (Et != D || !_.scope) && ((pt = D.getAttribute("id")) ? pt = d.escapeSelector(pt) : D.setAttribute("id", pt = X)),
                            Nt = Ds(C),
                            it = Nt.length; it--; )
                                Nt[it] = (pt ? "#" + pt : ":scope") + " " + _n(Nt[it]);
                            bt = Nt.join(",")
                        }
                        try {
                            return b.apply(L, Et.querySelectorAll(bt)),
                            L
                        } catch {
                            Te(C, !0)
                        } finally {
                            pt === X && D.removeAttribute("id")
                        }
                    }
                }
                return jl(C.replace(j, "$1"), D, L, G)
            }
            function vn() {
                var C = [];
                function D(L, G) {
                    return C.push(L + " ") > u.cacheLength && delete D[C.shift()],
                    D[L + " "] = G
                }
                return D
            }
            function er(C) {
                return C[X] = !0,
                C
            }
            function Vi(C) {
                var D = w.createElement("fieldset");
                try {
                    return !!C(D)
                } catch {
                    return !1
                } finally {
                    D.parentNode && D.parentNode.removeChild(D),
                    D = null
                }
            }
            function gp(C) {
                return function(D) {
                    return N(D, "input") && D.type === C
                }
            }
            function mp(C) {
                return function(D) {
                    return (N(D, "input") || N(D, "button")) && D.type === C
                }
            }
            function Vl(C) {
                return function(D) {
                    return "form"in D ? D.parentNode && D.disabled === !1 ? "label"in D ? "label"in D.parentNode ? D.parentNode.disabled === C : D.disabled === C : D.isDisabled === C || D.isDisabled !== !C && fp(D) === C : D.disabled === C : "label"in D ? D.disabled === C : !1
                }
            }
            function yi(C) {
                return er(function(D) {
                    return D = +D,
                    er(function(L, G) {
                        for (var W, it = C([], L.length, D), ht = it.length; ht--; )
                            L[W = it[ht]] && (L[W] = !(G[W] = L[W]))
                    })
                })
            }
            function ro(C) {
                return C && typeof C.getElementsByTagName < "u" && C
            }
            function Jr(C) {
                var D, L = C ? C.ownerDocument || C : st;
                return L == w || L.nodeType !== 9 || !L.documentElement || (w = L,
                M = w.documentElement,
                R = !d.isXMLDoc(w),
                H = M.matches || M.webkitMatchesSelector || M.msMatchesSelector,
                M.msMatchesSelector && st != w && (D = w.defaultView) && D.top !== D && D.addEventListener("unload", dp),
                _.getById = Vi(function(G) {
                    return M.appendChild(G).id = d.expando,
                    !w.getElementsByName || !w.getElementsByName(d.expando).length
                }),
                _.disconnectedMatch = Vi(function(G) {
                    return H.call(G, "*")
                }),
                _.scope = Vi(function() {
                    return w.querySelectorAll(":scope")
                }),
                _.cssHas = Vi(function() {
                    try {
                        return w.querySelector(":has(*,:jqfake)"),
                        !1
                    } catch {
                        return !0
                    }
                }),
                _.getById ? (u.filter.ID = function(G) {
                    var W = G.replace(Hr, Vr);
                    return function(it) {
                        return it.getAttribute("id") === W
                    }
                }
                ,
                u.find.ID = function(G, W) {
                    if (typeof W.getElementById < "u" && R) {
                        var it = W.getElementById(G);
                        return it ? [it] : []
                    }
                }
                ) : (u.filter.ID = function(G) {
                    var W = G.replace(Hr, Vr);
                    return function(it) {
                        var ht = typeof it.getAttributeNode < "u" && it.getAttributeNode("id");
                        return ht && ht.value === W
                    }
                }
                ,
                u.find.ID = function(G, W) {
                    if (typeof W.getElementById < "u" && R) {
                        var it, ht, pt, lt = W.getElementById(G);
                        if (lt) {
                            if (it = lt.getAttributeNode("id"),
                            it && it.value === G)
                                return [lt];
                            for (pt = W.getElementsByName(G),
                            ht = 0; lt = pt[ht++]; )
                                if (it = lt.getAttributeNode("id"),
                                it && it.value === G)
                                    return [lt]
                        }
                        return []
                    }
                }
                ),
                u.find.TAG = function(G, W) {
                    return typeof W.getElementsByTagName < "u" ? W.getElementsByTagName(G) : W.querySelectorAll(G)
                }
                ,
                u.find.CLASS = function(G, W) {
                    if (typeof W.getElementsByClassName < "u" && R)
                        return W.getElementsByClassName(G)
                }
                ,
                F = [],
                Vi(function(G) {
                    var W;
                    M.appendChild(G).innerHTML = "<a id='" + X + "' href='' disabled='disabled'></a><select id='" + X + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                    G.querySelectorAll("[selected]").length || F.push("\\[" + B + "*(?:value|" + gr + ")"),
                    G.querySelectorAll("[id~=" + X + "-]").length || F.push("~="),
                    G.querySelectorAll("a#" + X + "+*").length || F.push(".#.+[+~]"),
                    G.querySelectorAll(":checked").length || F.push(":checked"),
                    W = w.createElement("input"),
                    W.setAttribute("type", "hidden"),
                    G.appendChild(W).setAttribute("name", "D"),
                    M.appendChild(G).disabled = !0,
                    G.querySelectorAll(":disabled").length !== 2 && F.push(":enabled", ":disabled"),
                    W = w.createElement("input"),
                    W.setAttribute("name", ""),
                    G.appendChild(W),
                    G.querySelectorAll("[name='']").length || F.push("\\[" + B + "*name" + B + "*=" + B + `*(?:''|"")`)
                }),
                _.cssHas || F.push(":has"),
                F = F.length && new RegExp(F.join("|")),
                ce = function(G, W) {
                    if (G === W)
                        return x = !0,
                        0;
                    var it = !G.compareDocumentPosition - !W.compareDocumentPosition;
                    return it || (it = (G.ownerDocument || G) == (W.ownerDocument || W) ? G.compareDocumentPosition(W) : 1,
                    it & 1 || !_.sortDetached && W.compareDocumentPosition(G) === it ? G === w || G.ownerDocument == st && zt.contains(st, G) ? -1 : W === w || W.ownerDocument == st && zt.contains(st, W) ? 1 : y ? l.call(y, G) - l.call(y, W) : 0 : it & 4 ? -1 : 1)
                }
                ),
                w
            }
            zt.matches = function(C, D) {
                return zt(C, null, null, D)
            }
            ,
            zt.matchesSelector = function(C, D) {
                if (Jr(C),
                R && !Te[D + " "] && (!F || !F.test(D)))
                    try {
                        var L = H.call(C, D);
                        if (L || _.disconnectedMatch || C.document && C.document.nodeType !== 11)
                            return L
                    } catch {
                        Te(D, !0)
                    }
                return zt(D, w, null, [C]).length > 0
            }
            ,
            zt.contains = function(C, D) {
                return (C.ownerDocument || C) != w && Jr(C),
                d.contains(C, D)
            }
            ,
            zt.attr = function(C, D) {
                (C.ownerDocument || C) != w && Jr(C);
                var L = u.attrHandle[D.toLowerCase()]
                  , G = L && m.call(u.attrHandle, D.toLowerCase()) ? L(C, D, !R) : void 0;
                return G !== void 0 ? G : C.getAttribute(D)
            }
            ,
            zt.error = function(C) {
                throw new Error("Syntax error, unrecognized expression: " + C)
            }
            ,
            d.uniqueSort = function(C) {
                var D, L = [], G = 0, W = 0;
                if (x = !_.sortStable,
                y = !_.sortStable && n.call(C, 0),
                J.call(C, ce),
                x) {
                    for (; D = C[W++]; )
                        D === C[W] && (G = L.push(W));
                    for (; G--; )
                        V.call(C, L[G], 1)
                }
                return y = null,
                C
            }
            ,
            d.fn.uniqueSort = function() {
                return this.pushStack(d.uniqueSort(n.apply(this)))
            }
            ,
            u = d.expr = {
                cacheLength: 50,
                createPseudo: er,
                match: vr,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(C) {
                        return C[1] = C[1].replace(Hr, Vr),
                        C[3] = (C[3] || C[4] || C[5] || "").replace(Hr, Vr),
                        C[2] === "~=" && (C[3] = " " + C[3] + " "),
                        C.slice(0, 4)
                    },
                    CHILD: function(C) {
                        return C[1] = C[1].toLowerCase(),
                        C[1].slice(0, 3) === "nth" ? (C[3] || zt.error(C[0]),
                        C[4] = +(C[4] ? C[5] + (C[6] || 1) : 2 * (C[3] === "even" || C[3] === "odd")),
                        C[5] = +(C[7] + C[8] || C[3] === "odd")) : C[3] && zt.error(C[0]),
                        C
                    },
                    PSEUDO: function(C) {
                        var D, L = !C[6] && C[2];
                        return vr.CHILD.test(C[0]) ? null : (C[3] ? C[2] = C[4] || C[5] || "" : L && yr.test(L) && (D = Ds(L, !0)) && (D = L.indexOf(")", L.length - D) - L.length) && (C[0] = C[0].slice(0, D),
                        C[2] = L.slice(0, D)),
                        C.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(C) {
                        var D = C.replace(Hr, Vr).toLowerCase();
                        return C === "*" ? function() {
                            return !0
                        }
                        : function(L) {
                            return N(L, D)
                        }
                    },
                    CLASS: function(C) {
                        var D = wt[C + " "];
                        return D || (D = new RegExp("(^|" + B + ")" + C + "(" + B + "|$)")) && wt(C, function(L) {
                            return D.test(typeof L.className == "string" && L.className || typeof L.getAttribute < "u" && L.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(C, D, L) {
                        return function(G) {
                            var W = zt.attr(G, C);
                            return W == null ? D === "!=" : D ? (W += "",
                            D === "=" ? W === L : D === "!=" ? W !== L : D === "^=" ? L && W.indexOf(L) === 0 : D === "*=" ? L && W.indexOf(L) > -1 : D === "$=" ? L && W.slice(-L.length) === L : D === "~=" ? (" " + W.replace(Vt, " ") + " ").indexOf(L) > -1 : D === "|=" ? W === L || W.slice(0, L.length + 1) === L + "-" : !1) : !0
                        }
                    },
                    CHILD: function(C, D, L, G, W) {
                        var it = C.slice(0, 3) !== "nth"
                          , ht = C.slice(-4) !== "last"
                          , pt = D === "of-type";
                        return G === 1 && W === 0 ? function(lt) {
                            return !!lt.parentNode
                        }
                        : function(lt, Nt, bt) {
                            var Et, Lt, yt, Qt, Le, Se = it !== ht ? "nextSibling" : "previousSibling", Xe = lt.parentNode, _r = pt && lt.nodeName.toLowerCase(), $i = !bt && !pt, Pe = !1;
                            if (Xe) {
                                if (it) {
                                    for (; Se; ) {
                                        for (yt = lt; yt = yt[Se]; )
                                            if (pt ? N(yt, _r) : yt.nodeType === 1)
                                                return !1;
                                        Le = Se = C === "only" && !Le && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Le = [ht ? Xe.firstChild : Xe.lastChild],
                                ht && $i) {
                                    for (Lt = Xe[X] || (Xe[X] = {}),
                                    Et = Lt[C] || [],
                                    Qt = Et[0] === U && Et[1],
                                    Pe = Qt && Et[2],
                                    yt = Qt && Xe.childNodes[Qt]; yt = ++Qt && yt && yt[Se] || (Pe = Qt = 0) || Le.pop(); )
                                        if (yt.nodeType === 1 && ++Pe && yt === lt) {
                                            Lt[C] = [U, Qt, Pe];
                                            break
                                        }
                                } else if ($i && (Lt = lt[X] || (lt[X] = {}),
                                Et = Lt[C] || [],
                                Qt = Et[0] === U && Et[1],
                                Pe = Qt),
                                Pe === !1)
                                    for (; (yt = ++Qt && yt && yt[Se] || (Pe = Qt = 0) || Le.pop()) && !((pt ? N(yt, _r) : yt.nodeType === 1) && ++Pe && ($i && (Lt = yt[X] || (yt[X] = {}),
                                    Lt[C] = [U, Pe]),
                                    yt === lt)); )
                                        ;
                                return Pe -= W,
                                Pe === G || Pe % G === 0 && Pe / G >= 0
                            }
                        }
                    },
                    PSEUDO: function(C, D) {
                        var L, G = u.pseudos[C] || u.setFilters[C.toLowerCase()] || zt.error("unsupported pseudo: " + C);
                        return G[X] ? G(D) : G.length > 1 ? (L = [C, C, "", D],
                        u.setFilters.hasOwnProperty(C.toLowerCase()) ? er(function(W, it) {
                            for (var ht, pt = G(W, D), lt = pt.length; lt--; )
                                ht = l.call(W, pt[lt]),
                                W[ht] = !(it[ht] = pt[lt])
                        }) : function(W) {
                            return G(W, 0, L)
                        }
                        ) : G
                    }
                },
                pseudos: {
                    not: er(function(C) {
                        var D = []
                          , L = []
                          , G = ao(C.replace(j, "$1"));
                        return G[X] ? er(function(W, it, ht, pt) {
                            for (var lt, Nt = G(W, null, pt, []), bt = W.length; bt--; )
                                (lt = Nt[bt]) && (W[bt] = !(it[bt] = lt))
                        }) : function(W, it, ht) {
                            return D[0] = W,
                            G(D, null, ht, L),
                            D[0] = null,
                            !L.pop()
                        }
                    }),
                    has: er(function(C) {
                        return function(D) {
                            return zt(C, D).length > 0
                        }
                    }),
                    contains: er(function(C) {
                        return C = C.replace(Hr, Vr),
                        function(D) {
                            return (D.textContent || d.text(D)).indexOf(C) > -1
                        }
                    }),
                    lang: er(function(C) {
                        return Ms.test(C || "") || zt.error("unsupported lang: " + C),
                        C = C.replace(Hr, Vr).toLowerCase(),
                        function(D) {
                            var L;
                            do
                                if (L = R ? D.lang : D.getAttribute("xml:lang") || D.getAttribute("lang"))
                                    return L = L.toLowerCase(),
                                    L === C || L.indexOf(C + "-") === 0;
                            while ((D = D.parentNode) && D.nodeType === 1);
                            return !1
                        }
                    }),
                    target: function(C) {
                        var D = t.location && t.location.hash;
                        return D && D.slice(1) === C.id
                    },
                    root: function(C) {
                        return C === M
                    },
                    focus: function(C) {
                        return C === pp() && w.hasFocus() && !!(C.type || C.href || ~C.tabIndex)
                    },
                    enabled: Vl(!1),
                    disabled: Vl(!0),
                    checked: function(C) {
                        return N(C, "input") && !!C.checked || N(C, "option") && !!C.selected
                    },
                    selected: function(C) {
                        return C.parentNode && C.parentNode.selectedIndex,
                        C.selected === !0
                    },
                    empty: function(C) {
                        for (C = C.firstChild; C; C = C.nextSibling)
                            if (C.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(C) {
                        return !u.pseudos.empty(C)
                    },
                    header: function(C) {
                        return Qr.test(C.nodeName)
                    },
                    input: function(C) {
                        return Zr.test(C.nodeName)
                    },
                    button: function(C) {
                        return N(C, "input") && C.type === "button" || N(C, "button")
                    },
                    text: function(C) {
                        var D;
                        return N(C, "input") && C.type === "text" && ((D = C.getAttribute("type")) == null || D.toLowerCase() === "text")
                    },
                    first: yi(function() {
                        return [0]
                    }),
                    last: yi(function(C, D) {
                        return [D - 1]
                    }),
                    eq: yi(function(C, D, L) {
                        return [L < 0 ? L + D : L]
                    }),
                    even: yi(function(C, D) {
                        for (var L = 0; L < D; L += 2)
                            C.push(L);
                        return C
                    }),
                    odd: yi(function(C, D) {
                        for (var L = 1; L < D; L += 2)
                            C.push(L);
                        return C
                    }),
                    lt: yi(function(C, D, L) {
                        var G;
                        for (L < 0 ? G = L + D : L > D ? G = D : G = L; --G >= 0; )
                            C.push(G);
                        return C
                    }),
                    gt: yi(function(C, D, L) {
                        for (var G = L < 0 ? L + D : L; ++G < D; )
                            C.push(G);
                        return C
                    })
                }
            },
            u.pseudos.nth = u.pseudos.eq;
            for (h in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                u.pseudos[h] = gp(h);
            for (h in {
                submit: !0,
                reset: !0
            })
                u.pseudos[h] = mp(h);
            function $l() {}
            $l.prototype = u.filters = u.pseudos,
            u.setFilters = new $l;
            function Ds(C, D) {
                var L, G, W, it, ht, pt, lt, Nt = Ht[C + " "];
                if (Nt)
                    return D ? 0 : Nt.slice(0);
                for (ht = C,
                pt = [],
                lt = u.preFilter; ht; ) {
                    (!L || (G = ne.exec(ht))) && (G && (ht = ht.slice(G[0].length) || ht),
                    pt.push(W = [])),
                    L = !1,
                    (G = Ps.exec(ht)) && (L = G.shift(),
                    W.push({
                        value: L,
                        type: G[0].replace(j, " ")
                    }),
                    ht = ht.slice(L.length));
                    for (it in u.filter)
                        (G = vr[it].exec(ht)) && (!lt[it] || (G = lt[it](G))) && (L = G.shift(),
                        W.push({
                            value: L,
                            type: it,
                            matches: G
                        }),
                        ht = ht.slice(L.length));
                    if (!L)
                        break
                }
                return D ? ht.length : ht ? zt.error(C) : Ht(C, pt).slice(0)
            }
            function _n(C) {
                for (var D = 0, L = C.length, G = ""; D < L; D++)
                    G += C[D].value;
                return G
            }
            function xn(C, D, L) {
                var G = D.dir
                  , W = D.next
                  , it = W || G
                  , ht = L && it === "parentNode"
                  , pt = q++;
                return D.first ? function(lt, Nt, bt) {
                    for (; lt = lt[G]; )
                        if (lt.nodeType === 1 || ht)
                            return C(lt, Nt, bt);
                    return !1
                }
                : function(lt, Nt, bt) {
                    var Et, Lt, yt = [U, pt];
                    if (bt) {
                        for (; lt = lt[G]; )
                            if ((lt.nodeType === 1 || ht) && C(lt, Nt, bt))
                                return !0
                    } else
                        for (; lt = lt[G]; )
                            if (lt.nodeType === 1 || ht)
                                if (Lt = lt[X] || (lt[X] = {}),
                                W && N(lt, W))
                                    lt = lt[G] || lt;
                                else {
                                    if ((Et = Lt[it]) && Et[0] === U && Et[1] === pt)
                                        return yt[2] = Et[2];
                                    if (Lt[it] = yt,
                                    yt[2] = C(lt, Nt, bt))
                                        return !0
                                }
                    return !1
                }
            }
            function io(C) {
                return C.length > 1 ? function(D, L, G) {
                    for (var W = C.length; W--; )
                        if (!C[W](D, L, G))
                            return !1;
                    return !0
                }
                : C[0]
            }
            function yp(C, D, L) {
                for (var G = 0, W = D.length; G < W; G++)
                    zt(C, D[G], L);
                return L
            }
            function bn(C, D, L, G, W) {
                for (var it, ht = [], pt = 0, lt = C.length, Nt = D != null; pt < lt; pt++)
                    (it = C[pt]) && (!L || L(it, G, W)) && (ht.push(it),
                    Nt && D.push(pt));
                return ht
            }
            function so(C, D, L, G, W, it) {
                return G && !G[X] && (G = so(G)),
                W && !W[X] && (W = so(W, it)),
                er(function(ht, pt, lt, Nt) {
                    var bt, Et, Lt, yt, Qt = [], Le = [], Se = pt.length, Xe = ht || yp(D || "*", lt.nodeType ? [lt] : lt, []), _r = C && (ht || !D) ? bn(Xe, Qt, C, lt, Nt) : Xe;
                    if (L ? (yt = W || (ht ? C : Se || G) ? [] : pt,
                    L(_r, yt, lt, Nt)) : yt = _r,
                    G)
                        for (bt = bn(yt, Le),
                        G(bt, [], lt, Nt),
                        Et = bt.length; Et--; )
                            (Lt = bt[Et]) && (yt[Le[Et]] = !(_r[Le[Et]] = Lt));
                    if (ht) {
                        if (W || C) {
                            if (W) {
                                for (bt = [],
                                Et = yt.length; Et--; )
                                    (Lt = yt[Et]) && bt.push(_r[Et] = Lt);
                                W(null, yt = [], bt, Nt)
                            }
                            for (Et = yt.length; Et--; )
                                (Lt = yt[Et]) && (bt = W ? l.call(ht, Lt) : Qt[Et]) > -1 && (ht[bt] = !(pt[bt] = Lt))
                        }
                    } else
                        yt = bn(yt === pt ? yt.splice(Se, yt.length) : yt),
                        W ? W(null, pt, yt, Nt) : b.apply(pt, yt)
                })
            }
            function no(C) {
                for (var D, L, G, W = C.length, it = u.relative[C[0].type], ht = it || u.relative[" "], pt = it ? 1 : 0, lt = xn(function(Et) {
                    return Et === D
                }, ht, !0), Nt = xn(function(Et) {
                    return l.call(D, Et) > -1
                }, ht, !0), bt = [function(Et, Lt, yt) {
                    var Qt = !it && (yt || Lt != g) || ((D = Lt).nodeType ? lt(Et, Lt, yt) : Nt(Et, Lt, yt));
                    return D = null,
                    Qt
                }
                ]; pt < W; pt++)
                    if (L = u.relative[C[pt].type])
                        bt = [xn(io(bt), L)];
                    else {
                        if (L = u.filter[C[pt].type].apply(null, C[pt].matches),
                        L[X]) {
                            for (G = ++pt; G < W && !u.relative[C[G].type]; G++)
                                ;
                            return so(pt > 1 && io(bt), pt > 1 && _n(C.slice(0, pt - 1).concat({
                                value: C[pt - 2].type === " " ? "*" : ""
                            })).replace(j, "$1"), L, pt < G && no(C.slice(pt, G)), G < W && no(C = C.slice(G)), G < W && _n(C))
                        }
                        bt.push(L)
                    }
                return io(bt)
            }
            function vp(C, D) {
                var L = D.length > 0
                  , G = C.length > 0
                  , W = function(it, ht, pt, lt, Nt) {
                    var bt, Et, Lt, yt = 0, Qt = "0", Le = it && [], Se = [], Xe = g, _r = it || G && u.find.TAG("*", Nt), $i = U += Xe == null ? 1 : Math.random() || .1, Pe = _r.length;
                    for (Nt && (g = ht == w || ht || Nt); Qt !== Pe && (bt = _r[Qt]) != null; Qt++) {
                        if (G && bt) {
                            for (Et = 0,
                            !ht && bt.ownerDocument != w && (Jr(bt),
                            pt = !R); Lt = C[Et++]; )
                                if (Lt(bt, ht || w, pt)) {
                                    b.call(lt, bt);
                                    break
                                }
                            Nt && (U = $i)
                        }
                        L && ((bt = !Lt && bt) && yt--,
                        it && Le.push(bt))
                    }
                    if (yt += Qt,
                    L && Qt !== yt) {
                        for (Et = 0; Lt = D[Et++]; )
                            Lt(Le, Se, ht, pt);
                        if (it) {
                            if (yt > 0)
                                for (; Qt--; )
                                    Le[Qt] || Se[Qt] || (Se[Qt] = z.call(lt));
                            Se = bn(Se)
                        }
                        b.apply(lt, Se),
                        Nt && !it && Se.length > 0 && yt + D.length > 1 && d.uniqueSort(lt)
                    }
                    return Nt && (U = $i,
                    g = Xe),
                    Le
                };
                return L ? er(W) : W
            }
            function ao(C, D) {
                var L, G = [], W = [], it = Rt[C + " "];
                if (!it) {
                    for (D || (D = Ds(C)),
                    L = D.length; L--; )
                        it = no(D[L]),
                        it[X] ? G.push(it) : W.push(it);
                    it = Rt(C, vp(W, G)),
                    it.selector = C
                }
                return it
            }
            function jl(C, D, L, G) {
                var W, it, ht, pt, lt, Nt = typeof C == "function" && C, bt = !G && Ds(C = Nt.selector || C);
                if (L = L || [],
                bt.length === 1) {
                    if (it = bt[0] = bt[0].slice(0),
                    it.length > 2 && (ht = it[0]).type === "ID" && D.nodeType === 9 && R && u.relative[it[1].type]) {
                        if (D = (u.find.ID(ht.matches[0].replace(Hr, Vr), D) || [])[0],
                        D)
                            Nt && (D = D.parentNode);
                        else
                            return L;
                        C = C.slice(it.shift().value.length)
                    }
                    for (W = vr.needsContext.test(C) ? 0 : it.length; W-- && (ht = it[W],
                    !u.relative[pt = ht.type]); )
                        if ((lt = u.find[pt]) && (G = lt(ht.matches[0].replace(Hr, Vr), eo.test(it[0].type) && ro(D.parentNode) || D))) {
                            if (it.splice(W, 1),
                            C = G.length && _n(it),
                            !C)
                                return b.apply(L, G),
                                L;
                            break
                        }
                }
                return (Nt || ao(C, bt))(G, D, !R, L, !D || eo.test(C) && ro(D.parentNode) || D),
                L
            }
            _.sortStable = X.split("").sort(ce).join("") === X,
            Jr(),
            _.sortDetached = Vi(function(C) {
                return C.compareDocumentPosition(w.createElement("fieldset")) & 1
            }),
            d.find = zt,
            d.expr[":"] = d.expr.pseudos,
            d.unique = d.uniqueSort,
            zt.compile = ao,
            zt.select = jl,
            zt.setDocument = Jr,
            zt.tokenize = Ds,
            zt.escape = d.escapeSelector,
            zt.getText = d.text,
            zt.isXML = d.isXMLDoc,
            zt.selectors = d.expr,
            zt.support = d.support,
            zt.uniqueSort = d.uniqueSort
        }
        )();
        var Ft = function(h, u, g) {
            for (var y = [], x = g !== void 0; (h = h[u]) && h.nodeType !== 9; )
                if (h.nodeType === 1) {
                    if (x && d(h).is(g))
                        break;
                    y.push(h)
                }
            return y
        }
          , Q = function(h, u) {
            for (var g = []; h; h = h.nextSibling)
                h.nodeType === 1 && h !== u && g.push(h);
            return g
        }
          , K = d.expr.match.needsContext
          , xt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function Ct(h, u, g) {
            return T(u) ? d.grep(h, function(y, x) {
                return !!u.call(y, x, y) !== g
            }) : u.nodeType ? d.grep(h, function(y) {
                return y === u !== g
            }) : typeof u != "string" ? d.grep(h, function(y) {
                return l.call(u, y) > -1 !== g
            }) : d.filter(u, h, g)
        }
        d.filter = function(h, u, g) {
            var y = u[0];
            return g && (h = ":not(" + h + ")"),
            u.length === 1 && y.nodeType === 1 ? d.find.matchesSelector(y, h) ? [y] : [] : d.find.matches(h, d.grep(u, function(x) {
                return x.nodeType === 1
            }))
        }
        ,
        d.fn.extend({
            find: function(h) {
                var u, g, y = this.length, x = this;
                if (typeof h != "string")
                    return this.pushStack(d(h).filter(function() {
                        for (u = 0; u < y; u++)
                            if (d.contains(x[u], this))
                                return !0
                    }));
                for (g = this.pushStack([]),
                u = 0; u < y; u++)
                    d.find(h, x[u], g);
                return y > 1 ? d.uniqueSort(g) : g
            },
            filter: function(h) {
                return this.pushStack(Ct(this, h || [], !1))
            },
            not: function(h) {
                return this.pushStack(Ct(this, h || [], !0))
            },
            is: function(h) {
                return !!Ct(this, typeof h == "string" && K.test(h) ? d(h) : h || [], !1).length
            }
        });
        var It, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ot = d.fn.init = function(h, u, g) {
            var y, x;
            if (!h)
                return this;
            if (g = g || It,
            typeof h == "string")
                if (h[0] === "<" && h[h.length - 1] === ">" && h.length >= 3 ? y = [null, h, null] : y = kt.exec(h),
                y && (y[1] || !u))
                    if (y[1]) {
                        if (u = u instanceof d ? u[0] : u,
                        d.merge(this, d.parseHTML(y[1], u && u.nodeType ? u.ownerDocument || u : E, !0)),
                        xt.test(y[1]) && d.isPlainObject(u))
                            for (y in u)
                                T(this[y]) ? this[y](u[y]) : this.attr(y, u[y]);
                        return this
                    } else
                        return x = E.getElementById(y[2]),
                        x && (this[0] = x,
                        this.length = 1),
                        this;
                else
                    return !u || u.jquery ? (u || g).find(h) : this.constructor(u).find(h);
            else {
                if (h.nodeType)
                    return this[0] = h,
                    this.length = 1,
                    this;
                if (T(h))
                    return g.ready !== void 0 ? g.ready(h) : h(d)
            }
            return d.makeArray(h, this)
        }
        ;
        Ot.prototype = d.fn,
        It = d(E);
        var Mt = /^(?:parents|prev(?:Until|All))/
          , $t = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        d.fn.extend({
            has: function(h) {
                var u = d(h, this)
                  , g = u.length;
                return this.filter(function() {
                    for (var y = 0; y < g; y++)
                        if (d.contains(this, u[y]))
                            return !0
                })
            },
            closest: function(h, u) {
                var g, y = 0, x = this.length, b = [], w = typeof h != "string" && d(h);
                if (!K.test(h)) {
                    for (; y < x; y++)
                        for (g = this[y]; g && g !== u; g = g.parentNode)
                            if (g.nodeType < 11 && (w ? w.index(g) > -1 : g.nodeType === 1 && d.find.matchesSelector(g, h))) {
                                b.push(g);
                                break
                            }
                }
                return this.pushStack(b.length > 1 ? d.uniqueSort(b) : b)
            },
            index: function(h) {
                return h ? typeof h == "string" ? l.call(d(h), this[0]) : l.call(this, h.jquery ? h[0] : h) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(h, u) {
                return this.pushStack(d.uniqueSort(d.merge(this.get(), d(h, u))))
            },
            addBack: function(h) {
                return this.add(h == null ? this.prevObject : this.prevObject.filter(h))
            }
        });
        function qt(h, u) {
            for (; (h = h[u]) && h.nodeType !== 1; )
                ;
            return h
        }
        d.each({
            parent: function(h) {
                var u = h.parentNode;
                return u && u.nodeType !== 11 ? u : null
            },
            parents: function(h) {
                return Ft(h, "parentNode")
            },
            parentsUntil: function(h, u, g) {
                return Ft(h, "parentNode", g)
            },
            next: function(h) {
                return qt(h, "nextSibling")
            },
            prev: function(h) {
                return qt(h, "previousSibling")
            },
            nextAll: function(h) {
                return Ft(h, "nextSibling")
            },
            prevAll: function(h) {
                return Ft(h, "previousSibling")
            },
            nextUntil: function(h, u, g) {
                return Ft(h, "nextSibling", g)
            },
            prevUntil: function(h, u, g) {
                return Ft(h, "previousSibling", g)
            },
            siblings: function(h) {
                return Q((h.parentNode || {}).firstChild, h)
            },
            children: function(h) {
                return Q(h.firstChild)
            },
            contents: function(h) {
                return h.contentDocument != null && s(h.contentDocument) ? h.contentDocument : (N(h, "template") && (h = h.content || h),
                d.merge([], h.childNodes))
            }
        }, function(h, u) {
            d.fn[h] = function(g, y) {
                var x = d.map(this, u, g);
                return h.slice(-5) !== "Until" && (y = g),
                y && typeof y == "string" && (x = d.filter(y, x)),
                this.length > 1 && ($t[h] || d.uniqueSort(x),
                Mt.test(h) && x.reverse()),
                this.pushStack(x)
            }
        });
        var Dt = /[^\x20\t\r\n\f]+/g;
        function Yt(h) {
            var u = {};
            return d.each(h.match(Dt) || [], function(g, y) {
                u[y] = !0
            }),
            u
        }
        d.Callbacks = function(h) {
            h = typeof h == "string" ? Yt(h) : d.extend({}, h);
            var u, g, y, x, b = [], w = [], M = -1, R = function() {
                for (x = x || h.once,
                y = u = !0; w.length; M = -1)
                    for (g = w.shift(); ++M < b.length; )
                        b[M].apply(g[0], g[1]) === !1 && h.stopOnFalse && (M = b.length,
                        g = !1);
                h.memory || (g = !1),
                u = !1,
                x && (g ? b = [] : b = "")
            }, F = {
                add: function() {
                    return b && (g && !u && (M = b.length - 1,
                    w.push(g)),
                    function H(X) {
                        d.each(X, function(U, q) {
                            T(q) ? (!h.unique || !F.has(q)) && b.push(q) : q && q.length && P(q) !== "string" && H(q)
                        })
                    }(arguments),
                    g && !u && R()),
                    this
                },
                remove: function() {
                    return d.each(arguments, function(H, X) {
                        for (var U; (U = d.inArray(X, b, U)) > -1; )
                            b.splice(U, 1),
                            U <= M && M--
                    }),
                    this
                },
                has: function(H) {
                    return H ? d.inArray(H, b) > -1 : b.length > 0
                },
                empty: function() {
                    return b && (b = []),
                    this
                },
                disable: function() {
                    return x = w = [],
                    b = g = "",
                    this
                },
                disabled: function() {
                    return !b
                },
                lock: function() {
                    return x = w = [],
                    !g && !u && (b = g = ""),
                    this
                },
                locked: function() {
                    return !!x
                },
                fireWith: function(H, X) {
                    return x || (X = X || [],
                    X = [H, X.slice ? X.slice() : X],
                    w.push(X),
                    u || R()),
                    this
                },
                fire: function() {
                    return F.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!y
                }
            };
            return F
        }
        ;
        function _t(h) {
            return h
        }
        function Kt(h) {
            throw h
        }
        function Xt(h, u, g, y) {
            var x;
            try {
                h && T(x = h.promise) ? x.call(h).done(u).fail(g) : h && T(x = h.then) ? x.call(h, u, g) : u.apply(void 0, [h].slice(y))
            } catch (b) {
                g.apply(void 0, [b])
            }
        }
        d.extend({
            Deferred: function(h) {
                var u = [["notify", "progress", d.Callbacks("memory"), d.Callbacks("memory"), 2], ["resolve", "done", d.Callbacks("once memory"), d.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", d.Callbacks("once memory"), d.Callbacks("once memory"), 1, "rejected"]]
                  , g = "pending"
                  , y = {
                    state: function() {
                        return g
                    },
                    always: function() {
                        return x.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(b) {
                        return y.then(null, b)
                    },
                    pipe: function() {
                        var b = arguments;
                        return d.Deferred(function(w) {
                            d.each(u, function(M, R) {
                                var F = T(b[R[4]]) && b[R[4]];
                                x[R[1]](function() {
                                    var H = F && F.apply(this, arguments);
                                    H && T(H.promise) ? H.promise().progress(w.notify).done(w.resolve).fail(w.reject) : w[R[0] + "With"](this, F ? [H] : arguments)
                                })
                            }),
                            b = null
                        }).promise()
                    },
                    then: function(b, w, M) {
                        var R = 0;
                        function F(H, X, U, q) {
                            return function() {
                                var wt = this
                                  , Ht = arguments
                                  , Rt = function() {
                                    var ce, gr;
                                    if (!(H < R)) {
                                        if (ce = U.apply(wt, Ht),
                                        ce === X.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        gr = ce && (typeof ce == "object" || typeof ce == "function") && ce.then,
                                        T(gr) ? q ? gr.call(ce, F(R, X, _t, q), F(R, X, Kt, q)) : (R++,
                                        gr.call(ce, F(R, X, _t, q), F(R, X, Kt, q), F(R, X, _t, X.notifyWith))) : (U !== _t && (wt = void 0,
                                        Ht = [ce]),
                                        (q || X.resolveWith)(wt, Ht))
                                    }
                                }
                                  , Te = q ? Rt : function() {
                                    try {
                                        Rt()
                                    } catch (ce) {
                                        d.Deferred.exceptionHook && d.Deferred.exceptionHook(ce, Te.error),
                                        H + 1 >= R && (U !== Kt && (wt = void 0,
                                        Ht = [ce]),
                                        X.rejectWith(wt, Ht))
                                    }
                                }
                                ;
                                H ? Te() : (d.Deferred.getErrorHook ? Te.error = d.Deferred.getErrorHook() : d.Deferred.getStackHook && (Te.error = d.Deferred.getStackHook()),
                                t.setTimeout(Te))
                            }
                        }
                        return d.Deferred(function(H) {
                            u[0][3].add(F(0, H, T(M) ? M : _t, H.notifyWith)),
                            u[1][3].add(F(0, H, T(b) ? b : _t)),
                            u[2][3].add(F(0, H, T(w) ? w : Kt))
                        }).promise()
                    },
                    promise: function(b) {
                        return b != null ? d.extend(b, y) : y
                    }
                }
                  , x = {};
                return d.each(u, function(b, w) {
                    var M = w[2]
                      , R = w[5];
                    y[w[1]] = M.add,
                    R && M.add(function() {
                        g = R
                    }, u[3 - b][2].disable, u[3 - b][3].disable, u[0][2].lock, u[0][3].lock),
                    M.add(w[3].fire),
                    x[w[0]] = function() {
                        return x[w[0] + "With"](this === x ? void 0 : this, arguments),
                        this
                    }
                    ,
                    x[w[0] + "With"] = M.fireWith
                }),
                y.promise(x),
                h && h.call(x, x),
                x
            },
            when: function(h) {
                var u = arguments.length
                  , g = u
                  , y = Array(g)
                  , x = n.call(arguments)
                  , b = d.Deferred()
                  , w = function(M) {
                    return function(R) {
                        y[M] = this,
                        x[M] = arguments.length > 1 ? n.call(arguments) : R,
                        --u || b.resolveWith(y, x)
                    }
                };
                if (u <= 1 && (Xt(h, b.done(w(g)).resolve, b.reject, !u),
                b.state() === "pending" || T(x[g] && x[g].then)))
                    return b.then();
                for (; g--; )
                    Xt(x[g], w(g), b.reject);
                return b.promise()
            }
        });
        var me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        d.Deferred.exceptionHook = function(h, u) {
            t.console && t.console.warn && h && me.test(h.name) && t.console.warn("jQuery.Deferred exception: " + h.message, h.stack, u)
        }
        ,
        d.readyException = function(h) {
            t.setTimeout(function() {
                throw h
            })
        }
        ;
        var Ee = d.Deferred();
        d.fn.ready = function(h) {
            return Ee.then(h).catch(function(u) {
                d.readyException(u)
            }),
            this
        }
        ,
        d.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(h) {
                (h === !0 ? --d.readyWait : d.isReady) || (d.isReady = !0,
                !(h !== !0 && --d.readyWait > 0) && Ee.resolveWith(E, [d]))
            }
        }),
        d.ready.then = Ee.then;
        function fr() {
            E.removeEventListener("DOMContentLoaded", fr),
            t.removeEventListener("load", fr),
            d.ready()
        }
        E.readyState === "complete" || E.readyState !== "loading" && !E.documentElement.doScroll ? t.setTimeout(d.ready) : (E.addEventListener("DOMContentLoaded", fr),
        t.addEventListener("load", fr));
        var oe = function(h, u, g, y, x, b, w) {
            var M = 0
              , R = h.length
              , F = g == null;
            if (P(g) === "object") {
                x = !0;
                for (M in g)
                    oe(h, u, M, g[M], !0, b, w)
            } else if (y !== void 0 && (x = !0,
            T(y) || (w = !0),
            F && (w ? (u.call(h, y),
            u = null) : (F = u,
            u = function(H, X, U) {
                return F.call(d(H), U)
            }
            )),
            u))
                for (; M < R; M++)
                    u(h[M], g, w ? y : y.call(h[M], M, u(h[M], g)));
            return x ? h : F ? u.call(h) : R ? u(h[0], g) : b
        }
          , Ts = /^-ms-/
          , ws = /-([a-z])/g;
        function Ni(h, u) {
            return u.toUpperCase()
        }
        function Fe(h) {
            return h.replace(Ts, "ms-").replace(ws, Ni)
        }
        var Ze = function(h) {
            return h.nodeType === 1 || h.nodeType === 9 || !+h.nodeType
        };
        function Qe() {
            this.expando = d.expando + Qe.uid++
        }
        Qe.uid = 1,
        Qe.prototype = {
            cache: function(h) {
                var u = h[this.expando];
                return u || (u = {},
                Ze(h) && (h.nodeType ? h[this.expando] = u : Object.defineProperty(h, this.expando, {
                    value: u,
                    configurable: !0
                }))),
                u
            },
            set: function(h, u, g) {
                var y, x = this.cache(h);
                if (typeof u == "string")
                    x[Fe(u)] = g;
                else
                    for (y in u)
                        x[Fe(y)] = u[y];
                return x
            },
            get: function(h, u) {
                return u === void 0 ? this.cache(h) : h[this.expando] && h[this.expando][Fe(u)]
            },
            access: function(h, u, g) {
                return u === void 0 || u && typeof u == "string" && g === void 0 ? this.get(h, u) : (this.set(h, u, g),
                g !== void 0 ? g : u)
            },
            remove: function(h, u) {
                var g, y = h[this.expando];
                if (y !== void 0) {
                    if (u !== void 0)
                        for (Array.isArray(u) ? u = u.map(Fe) : (u = Fe(u),
                        u = u in y ? [u] : u.match(Dt) || []),
                        g = u.length; g--; )
                            delete y[u[g]];
                    (u === void 0 || d.isEmptyObject(y)) && (h.nodeType ? h[this.expando] = void 0 : delete h[this.expando])
                }
            },
            hasData: function(h) {
                var u = h[this.expando];
                return u !== void 0 && !d.isEmptyObject(u)
            }
        };
        var ft = new Qe
          , be = new Qe
          , Ae = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , Es = /[A-Z]/g;
        function kr(h) {
            return h === "true" ? !0 : h === "false" ? !1 : h === "null" ? null : h === +h + "" ? +h : Ae.test(h) ? JSON.parse(h) : h
        }
        function Li(h, u, g) {
            var y;
            if (g === void 0 && h.nodeType === 1)
                if (y = "data-" + u.replace(Es, "-$&").toLowerCase(),
                g = h.getAttribute(y),
                typeof g == "string") {
                    try {
                        g = kr(g)
                    } catch {}
                    be.set(h, u, g)
                } else
                    g = void 0;
            return g
        }
        d.extend({
            hasData: function(h) {
                return be.hasData(h) || ft.hasData(h)
            },
            data: function(h, u, g) {
                return be.access(h, u, g)
            },
            removeData: function(h, u) {
                be.remove(h, u)
            },
            _data: function(h, u, g) {
                return ft.access(h, u, g)
            },
            _removeData: function(h, u) {
                ft.remove(h, u)
            }
        }),
        d.fn.extend({
            data: function(h, u) {
                var g, y, x, b = this[0], w = b && b.attributes;
                if (h === void 0) {
                    if (this.length && (x = be.get(b),
                    b.nodeType === 1 && !ft.get(b, "hasDataAttrs"))) {
                        for (g = w.length; g--; )
                            w[g] && (y = w[g].name,
                            y.indexOf("data-") === 0 && (y = Fe(y.slice(5)),
                            Li(b, y, x[y])));
                        ft.set(b, "hasDataAttrs", !0)
                    }
                    return x
                }
                return typeof h == "object" ? this.each(function() {
                    be.set(this, h)
                }) : oe(this, function(M) {
                    var R;
                    if (b && M === void 0)
                        return R = be.get(b, h),
                        R !== void 0 || (R = Li(b, h),
                        R !== void 0) ? R : void 0;
                    this.each(function() {
                        be.set(this, h, M)
                    })
                }, null, u, arguments.length > 1, null, !0)
            },
            removeData: function(h) {
                return this.each(function() {
                    be.remove(this, h)
                })
            }
        }),
        d.extend({
            queue: function(h, u, g) {
                var y;
                if (h)
                    return u = (u || "fx") + "queue",
                    y = ft.get(h, u),
                    g && (!y || Array.isArray(g) ? y = ft.access(h, u, d.makeArray(g)) : y.push(g)),
                    y || []
            },
            dequeue: function(h, u) {
                u = u || "fx";
                var g = d.queue(h, u)
                  , y = g.length
                  , x = g.shift()
                  , b = d._queueHooks(h, u)
                  , w = function() {
                    d.dequeue(h, u)
                };
                x === "inprogress" && (x = g.shift(),
                y--),
                x && (u === "fx" && g.unshift("inprogress"),
                delete b.stop,
                x.call(h, w, b)),
                !y && b && b.empty.fire()
            },
            _queueHooks: function(h, u) {
                var g = u + "queueHooks";
                return ft.get(h, g) || ft.access(h, g, {
                    empty: d.Callbacks("once memory").add(function() {
                        ft.remove(h, [u + "queue", g])
                    })
                })
            }
        }),
        d.fn.extend({
            queue: function(h, u) {
                var g = 2;
                return typeof h != "string" && (u = h,
                h = "fx",
                g--),
                arguments.length < g ? d.queue(this[0], h) : u === void 0 ? this : this.each(function() {
                    var y = d.queue(this, h, u);
                    d._queueHooks(this, h),
                    h === "fx" && y[0] !== "inprogress" && d.dequeue(this, h)
                })
            },
            dequeue: function(h) {
                return this.each(function() {
                    d.dequeue(this, h)
                })
            },
            clearQueue: function(h) {
                return this.queue(h || "fx", [])
            },
            promise: function(h, u) {
                var g, y = 1, x = d.Deferred(), b = this, w = this.length, M = function() {
                    --y || x.resolveWith(b, [b])
                };
                for (typeof h != "string" && (u = h,
                h = void 0),
                h = h || "fx"; w--; )
                    g = ft.get(b[w], h + "queueHooks"),
                    g && g.empty && (y++,
                    g.empty.add(M));
                return M(),
                x.promise(u)
            }
        });
        var fi = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Ur = new RegExp("^(?:([+-])=|)(" + fi + ")([a-z%]*)$","i")
          , tt = ["Top", "Right", "Bottom", "Left"]
          , St = E.documentElement
          , jt = function(h) {
            return d.contains(h.ownerDocument, h)
        }
          , ie = {
            composed: !0
        };
        St.getRootNode && (jt = function(h) {
            return d.contains(h.ownerDocument, h) || h.getRootNode(ie) === h.ownerDocument
        }
        );
        var le = function(h, u) {
            return h = u || h,
            h.style.display === "none" || h.style.display === "" && jt(h) && d.css(h, "display") === "none"
        };
        function ye(h, u, g, y) {
            var x, b, w = 20, M = y ? function() {
                return y.cur()
            }
            : function() {
                return d.css(h, u, "")
            }
            , R = M(), F = g && g[3] || (d.cssNumber[u] ? "" : "px"), H = h.nodeType && (d.cssNumber[u] || F !== "px" && +R) && Ur.exec(d.css(h, u));
            if (H && H[3] !== F) {
                for (R = R / 2,
                F = F || H[3],
                H = +R || 1; w--; )
                    d.style(h, u, H + F),
                    (1 - b) * (1 - (b = M() / R || .5)) <= 0 && (w = 0),
                    H = H / b;
                H = H * 2,
                d.style(h, u, H + F),
                g = g || []
            }
            return g && (H = +H || +R || 0,
            x = g[1] ? H + (g[1] + 1) * g[2] : +g[2],
            y && (y.unit = F,
            y.start = H,
            y.end = x)),
            x
        }
        var Ge = {};
        function Gr(h) {
            var u, g = h.ownerDocument, y = h.nodeName, x = Ge[y];
            return x || (u = g.body.appendChild(g.createElement(y)),
            x = d.css(u, "display"),
            u.parentNode.removeChild(u),
            x === "none" && (x = "block"),
            Ge[y] = x,
            x)
        }
        function Je(h, u) {
            for (var g, y, x = [], b = 0, w = h.length; b < w; b++)
                y = h[b],
                y.style && (g = y.style.display,
                u ? (g === "none" && (x[b] = ft.get(y, "display") || null,
                x[b] || (y.style.display = "")),
                y.style.display === "" && le(y) && (x[b] = Gr(y))) : g !== "none" && (x[b] = "none",
                ft.set(y, "display", g)));
            for (b = 0; b < w; b++)
                x[b] != null && (h[b].style.display = x[b]);
            return h
        }
        d.fn.extend({
            show: function() {
                return Je(this, !0)
            },
            hide: function() {
                return Je(this)
            },
            toggle: function(h) {
                return typeof h == "boolean" ? h ? this.show() : this.hide() : this.each(function() {
                    le(this) ? d(this).show() : d(this).hide()
                })
            }
        });
        var pr = /^(?:checkbox|radio)$/i
          , Kr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , dn = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var h = E.createDocumentFragment()
              , u = h.appendChild(E.createElement("div"))
              , g = E.createElement("input");
            g.setAttribute("type", "radio"),
            g.setAttribute("checked", "checked"),
            g.setAttribute("name", "t"),
            u.appendChild(g),
            _.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked,
            u.innerHTML = "<textarea>x</textarea>",
            _.noCloneChecked = !!u.cloneNode(!0).lastChild.defaultValue,
            u.innerHTML = "<option></option>",
            _.option = !!u.lastChild
        }
        )();
        var Oe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead,
        Oe.th = Oe.td,
        _.option || (Oe.optgroup = Oe.option = [1, "<select multiple='multiple'>", "</select>"]);
        function ue(h, u) {
            var g;
            return typeof h.getElementsByTagName < "u" ? g = h.getElementsByTagName(u || "*") : typeof h.querySelectorAll < "u" ? g = h.querySelectorAll(u || "*") : g = [],
            u === void 0 || u && N(h, u) ? d.merge([h], g) : g
        }
        function ki(h, u) {
            for (var g = 0, y = h.length; g < y; g++)
                ft.set(h[g], "globalEval", !u || ft.get(u[g], "globalEval"))
        }
        var fn = /<|&#?\w+;/;
        function As(h, u, g, y, x) {
            for (var b, w, M, R, F, H, X = u.createDocumentFragment(), U = [], q = 0, wt = h.length; q < wt; q++)
                if (b = h[q],
                b || b === 0)
                    if (P(b) === "object")
                        d.merge(U, b.nodeType ? [b] : b);
                    else if (!fn.test(b))
                        U.push(u.createTextNode(b));
                    else {
                        for (w = w || X.appendChild(u.createElement("div")),
                        M = (Kr.exec(b) || ["", ""])[1].toLowerCase(),
                        R = Oe[M] || Oe._default,
                        w.innerHTML = R[1] + d.htmlPrefilter(b) + R[2],
                        H = R[0]; H--; )
                            w = w.lastChild;
                        d.merge(U, w.childNodes),
                        w = X.firstChild,
                        w.textContent = ""
                    }
            for (X.textContent = "",
            q = 0; b = U[q++]; ) {
                if (y && d.inArray(b, y) > -1) {
                    x && x.push(b);
                    continue
                }
                if (F = jt(b),
                w = ue(X.appendChild(b), "script"),
                F && ki(w),
                g)
                    for (H = 0; b = w[H++]; )
                        dn.test(b.type || "") && g.push(b)
            }
            return X
        }
        var Jt = /^([^.]*)(?:\.(.+)|)/;
        function te() {
            return !0
        }
        function Re() {
            return !1
        }
        function He(h, u, g, y, x, b) {
            var w, M;
            if (typeof u == "object") {
                typeof g != "string" && (y = y || g,
                g = void 0);
                for (M in u)
                    He(h, M, g, y, u[M], b);
                return h
            }
            if (y == null && x == null ? (x = g,
            y = g = void 0) : x == null && (typeof g == "string" ? (x = y,
            y = void 0) : (x = y,
            y = g,
            g = void 0)),
            x === !1)
                x = Re;
            else if (!x)
                return h;
            return b === 1 && (w = x,
            x = function(R) {
                return d().off(R),
                w.apply(this, arguments)
            }
            ,
            x.guid = w.guid || (w.guid = d.guid++)),
            h.each(function() {
                d.event.add(this, u, x, y, g)
            })
        }
        d.event = {
            global: {},
            add: function(h, u, g, y, x) {
                var b, w, M, R, F, H, X, U, q, wt, Ht, Rt = ft.get(h);
                if (Ze(h))
                    for (g.handler && (b = g,
                    g = b.handler,
                    x = b.selector),
                    x && d.find.matchesSelector(St, x),
                    g.guid || (g.guid = d.guid++),
                    (R = Rt.events) || (R = Rt.events = Object.create(null)),
                    (w = Rt.handle) || (w = Rt.handle = function(Te) {
                        return typeof d < "u" && d.event.triggered !== Te.type ? d.event.dispatch.apply(h, arguments) : void 0
                    }
                    ),
                    u = (u || "").match(Dt) || [""],
                    F = u.length; F--; )
                        M = Jt.exec(u[F]) || [],
                        q = Ht = M[1],
                        wt = (M[2] || "").split(".").sort(),
                        q && (X = d.event.special[q] || {},
                        q = (x ? X.delegateType : X.bindType) || q,
                        X = d.event.special[q] || {},
                        H = d.extend({
                            type: q,
                            origType: Ht,
                            data: y,
                            handler: g,
                            guid: g.guid,
                            selector: x,
                            needsContext: x && d.expr.match.needsContext.test(x),
                            namespace: wt.join(".")
                        }, b),
                        (U = R[q]) || (U = R[q] = [],
                        U.delegateCount = 0,
                        (!X.setup || X.setup.call(h, y, wt, w) === !1) && h.addEventListener && h.addEventListener(q, w)),
                        X.add && (X.add.call(h, H),
                        H.handler.guid || (H.handler.guid = g.guid)),
                        x ? U.splice(U.delegateCount++, 0, H) : U.push(H),
                        d.event.global[q] = !0)
            },
            remove: function(h, u, g, y, x) {
                var b, w, M, R, F, H, X, U, q, wt, Ht, Rt = ft.hasData(h) && ft.get(h);
                if (!(!Rt || !(R = Rt.events))) {
                    for (u = (u || "").match(Dt) || [""],
                    F = u.length; F--; ) {
                        if (M = Jt.exec(u[F]) || [],
                        q = Ht = M[1],
                        wt = (M[2] || "").split(".").sort(),
                        !q) {
                            for (q in R)
                                d.event.remove(h, q + u[F], g, y, !0);
                            continue
                        }
                        for (X = d.event.special[q] || {},
                        q = (y ? X.delegateType : X.bindType) || q,
                        U = R[q] || [],
                        M = M[2] && new RegExp("(^|\\.)" + wt.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        w = b = U.length; b--; )
                            H = U[b],
                            (x || Ht === H.origType) && (!g || g.guid === H.guid) && (!M || M.test(H.namespace)) && (!y || y === H.selector || y === "**" && H.selector) && (U.splice(b, 1),
                            H.selector && U.delegateCount--,
                            X.remove && X.remove.call(h, H));
                        w && !U.length && ((!X.teardown || X.teardown.call(h, wt, Rt.handle) === !1) && d.removeEvent(h, q, Rt.handle),
                        delete R[q])
                    }
                    d.isEmptyObject(R) && ft.remove(h, "handle events")
                }
            },
            dispatch: function(h) {
                var u, g, y, x, b, w, M = new Array(arguments.length), R = d.event.fix(h), F = (ft.get(this, "events") || Object.create(null))[R.type] || [], H = d.event.special[R.type] || {};
                for (M[0] = R,
                u = 1; u < arguments.length; u++)
                    M[u] = arguments[u];
                if (R.delegateTarget = this,
                !(H.preDispatch && H.preDispatch.call(this, R) === !1)) {
                    for (w = d.event.handlers.call(this, R, F),
                    u = 0; (x = w[u++]) && !R.isPropagationStopped(); )
                        for (R.currentTarget = x.elem,
                        g = 0; (b = x.handlers[g++]) && !R.isImmediatePropagationStopped(); )
                            (!R.rnamespace || b.namespace === !1 || R.rnamespace.test(b.namespace)) && (R.handleObj = b,
                            R.data = b.data,
                            y = ((d.event.special[b.origType] || {}).handle || b.handler).apply(x.elem, M),
                            y !== void 0 && (R.result = y) === !1 && (R.preventDefault(),
                            R.stopPropagation()));
                    return H.postDispatch && H.postDispatch.call(this, R),
                    R.result
                }
            },
            handlers: function(h, u) {
                var g, y, x, b, w, M = [], R = u.delegateCount, F = h.target;
                if (R && F.nodeType && !(h.type === "click" && h.button >= 1)) {
                    for (; F !== this; F = F.parentNode || this)
                        if (F.nodeType === 1 && !(h.type === "click" && F.disabled === !0)) {
                            for (b = [],
                            w = {},
                            g = 0; g < R; g++)
                                y = u[g],
                                x = y.selector + " ",
                                w[x] === void 0 && (w[x] = y.needsContext ? d(x, this).index(F) > -1 : d.find(x, this, null, [F]).length),
                                w[x] && b.push(y);
                            b.length && M.push({
                                elem: F,
                                handlers: b
                            })
                        }
                }
                return F = this,
                R < u.length && M.push({
                    elem: F,
                    handlers: u.slice(R)
                }),
                M
            },
            addProp: function(h, u) {
                Object.defineProperty(d.Event.prototype, h, {
                    enumerable: !0,
                    configurable: !0,
                    get: T(u) ? function() {
                        if (this.originalEvent)
                            return u(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[h]
                    }
                    ,
                    set: function(g) {
                        Object.defineProperty(this, h, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: g
                        })
                    }
                })
            },
            fix: function(h) {
                return h[d.expando] ? h : new d.Event(h)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(h) {
                        var u = this || h;
                        return pr.test(u.type) && u.click && N(u, "input") && Ui(u, "click", !0),
                        !1
                    },
                    trigger: function(h) {
                        var u = this || h;
                        return pr.test(u.type) && u.click && N(u, "input") && Ui(u, "click"),
                        !0
                    },
                    _default: function(h) {
                        var u = h.target;
                        return pr.test(u.type) && u.click && N(u, "input") && ft.get(u, "click") || N(u, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(h) {
                        h.result !== void 0 && h.originalEvent && (h.originalEvent.returnValue = h.result)
                    }
                }
            }
        };
        function Ui(h, u, g) {
            if (!g) {
                ft.get(h, u) === void 0 && d.event.add(h, u, te);
                return
            }
            ft.set(h, u, !1),
            d.event.add(h, u, {
                namespace: !1,
                handler: function(y) {
                    var x, b = ft.get(this, u);
                    if (y.isTrigger & 1 && this[u]) {
                        if (b)
                            (d.event.special[u] || {}).delegateType && y.stopPropagation();
                        else if (b = n.call(arguments),
                        ft.set(this, u, b),
                        this[u](),
                        x = ft.get(this, u),
                        ft.set(this, u, !1),
                        b !== x)
                            return y.stopImmediatePropagation(),
                            y.preventDefault(),
                            x
                    } else
                        b && (ft.set(this, u, d.event.trigger(b[0], b.slice(1), this)),
                        y.stopPropagation(),
                        y.isImmediatePropagationStopped = te)
                }
            })
        }
        d.removeEvent = function(h, u, g) {
            h.removeEventListener && h.removeEventListener(u, g)
        }
        ,
        d.Event = function(h, u) {
            if (!(this instanceof d.Event))
                return new d.Event(h,u);
            h && h.type ? (this.originalEvent = h,
            this.type = h.type,
            this.isDefaultPrevented = h.defaultPrevented || h.defaultPrevented === void 0 && h.returnValue === !1 ? te : Re,
            this.target = h.target && h.target.nodeType === 3 ? h.target.parentNode : h.target,
            this.currentTarget = h.currentTarget,
            this.relatedTarget = h.relatedTarget) : this.type = h,
            u && d.extend(this, u),
            this.timeStamp = h && h.timeStamp || Date.now(),
            this[d.expando] = !0
        }
        ,
        d.Event.prototype = {
            constructor: d.Event,
            isDefaultPrevented: Re,
            isPropagationStopped: Re,
            isImmediatePropagationStopped: Re,
            isSimulated: !1,
            preventDefault: function() {
                var h = this.originalEvent;
                this.isDefaultPrevented = te,
                h && !this.isSimulated && h.preventDefault()
            },
            stopPropagation: function() {
                var h = this.originalEvent;
                this.isPropagationStopped = te,
                h && !this.isSimulated && h.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var h = this.originalEvent;
                this.isImmediatePropagationStopped = te,
                h && !this.isSimulated && h.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        d.each({
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
            which: !0
        }, d.event.addProp),
        d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(h, u) {
            function g(y) {
                if (E.documentMode) {
                    var x = ft.get(this, "handle")
                      , b = d.event.fix(y);
                    b.type = y.type === "focusin" ? "focus" : "blur",
                    b.isSimulated = !0,
                    x(y),
                    b.target === b.currentTarget && x(b)
                } else
                    d.event.simulate(u, y.target, d.event.fix(y))
            }
            d.event.special[h] = {
                setup: function() {
                    var y;
                    if (Ui(this, h, !0),
                    E.documentMode)
                        y = ft.get(this, u),
                        y || this.addEventListener(u, g),
                        ft.set(this, u, (y || 0) + 1);
                    else
                        return !1
                },
                trigger: function() {
                    return Ui(this, h),
                    !0
                },
                teardown: function() {
                    var y;
                    if (E.documentMode)
                        y = ft.get(this, u) - 1,
                        y ? ft.set(this, u, y) : (this.removeEventListener(u, g),
                        ft.remove(this, u));
                    else
                        return !1
                },
                _default: function(y) {
                    return ft.get(y.target, h)
                },
                delegateType: u
            },
            d.event.special[u] = {
                setup: function() {
                    var y = this.ownerDocument || this.document || this
                      , x = E.documentMode ? this : y
                      , b = ft.get(x, u);
                    b || (E.documentMode ? this.addEventListener(u, g) : y.addEventListener(h, g, !0)),
                    ft.set(x, u, (b || 0) + 1)
                },
                teardown: function() {
                    var y = this.ownerDocument || this.document || this
                      , x = E.documentMode ? this : y
                      , b = ft.get(x, u) - 1;
                    b ? ft.set(x, u, b) : (E.documentMode ? this.removeEventListener(u, g) : y.removeEventListener(h, g, !0),
                    ft.remove(x, u))
                }
            }
        }),
        d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(h, u) {
            d.event.special[h] = {
                delegateType: u,
                bindType: u,
                handle: function(g) {
                    var y, x = this, b = g.relatedTarget, w = g.handleObj;
                    return (!b || b !== x && !d.contains(x, b)) && (g.type = w.origType,
                    y = w.handler.apply(this, arguments),
                    g.type = u),
                    y
                }
            }
        }),
        d.fn.extend({
            on: function(h, u, g, y) {
                return He(this, h, u, g, y)
            },
            one: function(h, u, g, y) {
                return He(this, h, u, g, y, 1)
            },
            off: function(h, u, g) {
                var y, x;
                if (h && h.preventDefault && h.handleObj)
                    return y = h.handleObj,
                    d(h.delegateTarget).off(y.namespace ? y.origType + "." + y.namespace : y.origType, y.selector, y.handler),
                    this;
                if (typeof h == "object") {
                    for (x in h)
                        this.off(x, u, h[x]);
                    return this
                }
                return (u === !1 || typeof u == "function") && (g = u,
                u = void 0),
                g === !1 && (g = Re),
                this.each(function() {
                    d.event.remove(this, h, g, u)
                })
            }
        });
        var pn = /<script|<style|<link/i
          , Ff = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Of = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function _l(h, u) {
            return N(h, "table") && N(u.nodeType !== 11 ? u : u.firstChild, "tr") && d(h).children("tbody")[0] || h
        }
        function Nf(h) {
            return h.type = (h.getAttribute("type") !== null) + "/" + h.type,
            h
        }
        function Lf(h) {
            return (h.type || "").slice(0, 5) === "true/" ? h.type = h.type.slice(5) : h.removeAttribute("type"),
            h
        }
        function xl(h, u) {
            var g, y, x, b, w, M, R;
            if (u.nodeType === 1) {
                if (ft.hasData(h) && (b = ft.get(h),
                R = b.events,
                R)) {
                    ft.remove(u, "handle events");
                    for (x in R)
                        for (g = 0,
                        y = R[x].length; g < y; g++)
                            d.event.add(u, x, R[x][g])
                }
                be.hasData(h) && (w = be.access(h),
                M = d.extend({}, w),
                be.set(u, M))
            }
        }
        function kf(h, u) {
            var g = u.nodeName.toLowerCase();
            g === "input" && pr.test(h.type) ? u.checked = h.checked : (g === "input" || g === "textarea") && (u.defaultValue = h.defaultValue)
        }
        function Gi(h, u, g, y) {
            u = a(u);
            var x, b, w, M, R, F, H = 0, X = h.length, U = X - 1, q = u[0], wt = T(q);
            if (wt || X > 1 && typeof q == "string" && !_.checkClone && Ff.test(q))
                return h.each(function(Ht) {
                    var Rt = h.eq(Ht);
                    wt && (u[0] = q.call(this, Ht, Rt.html())),
                    Gi(Rt, u, g, y)
                });
            if (X && (x = As(u, h[0].ownerDocument, !1, h, y),
            b = x.firstChild,
            x.childNodes.length === 1 && (x = b),
            b || y)) {
                for (w = d.map(ue(x, "script"), Nf),
                M = w.length; H < X; H++)
                    R = x,
                    H !== U && (R = d.clone(R, !0, !0),
                    M && d.merge(w, ue(R, "script"))),
                    g.call(h[H], R, H);
                if (M)
                    for (F = w[w.length - 1].ownerDocument,
                    d.map(w, Lf),
                    H = 0; H < M; H++)
                        R = w[H],
                        dn.test(R.type || "") && !ft.access(R, "globalEval") && d.contains(F, R) && (R.src && (R.type || "").toLowerCase() !== "module" ? d._evalUrl && !R.noModule && d._evalUrl(R.src, {
                            nonce: R.nonce || R.getAttribute("nonce")
                        }, F) : S(R.textContent.replace(Of, ""), R, F))
            }
            return h
        }
        function bl(h, u, g) {
            for (var y, x = u ? d.filter(u, h) : h, b = 0; (y = x[b]) != null; b++)
                !g && y.nodeType === 1 && d.cleanData(ue(y)),
                y.parentNode && (g && jt(y) && ki(ue(y, "script")),
                y.parentNode.removeChild(y));
            return h
        }
        d.extend({
            htmlPrefilter: function(h) {
                return h
            },
            clone: function(h, u, g) {
                var y, x, b, w, M = h.cloneNode(!0), R = jt(h);
                if (!_.noCloneChecked && (h.nodeType === 1 || h.nodeType === 11) && !d.isXMLDoc(h))
                    for (w = ue(M),
                    b = ue(h),
                    y = 0,
                    x = b.length; y < x; y++)
                        kf(b[y], w[y]);
                if (u)
                    if (g)
                        for (b = b || ue(h),
                        w = w || ue(M),
                        y = 0,
                        x = b.length; y < x; y++)
                            xl(b[y], w[y]);
                    else
                        xl(h, M);
                return w = ue(M, "script"),
                w.length > 0 && ki(w, !R && ue(h, "script")),
                M
            },
            cleanData: function(h) {
                for (var u, g, y, x = d.event.special, b = 0; (g = h[b]) !== void 0; b++)
                    if (Ze(g)) {
                        if (u = g[ft.expando]) {
                            if (u.events)
                                for (y in u.events)
                                    x[y] ? d.event.remove(g, y) : d.removeEvent(g, y, u.handle);
                            g[ft.expando] = void 0
                        }
                        g[be.expando] && (g[be.expando] = void 0)
                    }
            }
        }),
        d.fn.extend({
            detach: function(h) {
                return bl(this, h, !0)
            },
            remove: function(h) {
                return bl(this, h)
            },
            text: function(h) {
                return oe(this, function(u) {
                    return u === void 0 ? d.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = u)
                    })
                }, null, h, arguments.length)
            },
            append: function() {
                return Gi(this, arguments, function(h) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var u = _l(this, h);
                        u.appendChild(h)
                    }
                })
            },
            prepend: function() {
                return Gi(this, arguments, function(h) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var u = _l(this, h);
                        u.insertBefore(h, u.firstChild)
                    }
                })
            },
            before: function() {
                return Gi(this, arguments, function(h) {
                    this.parentNode && this.parentNode.insertBefore(h, this)
                })
            },
            after: function() {
                return Gi(this, arguments, function(h) {
                    this.parentNode && this.parentNode.insertBefore(h, this.nextSibling)
                })
            },
            empty: function() {
                for (var h, u = 0; (h = this[u]) != null; u++)
                    h.nodeType === 1 && (d.cleanData(ue(h, !1)),
                    h.textContent = "");
                return this
            },
            clone: function(h, u) {
                return h = h ?? !1,
                u = u ?? h,
                this.map(function() {
                    return d.clone(this, h, u)
                })
            },
            html: function(h) {
                return oe(this, function(u) {
                    var g = this[0] || {}
                      , y = 0
                      , x = this.length;
                    if (u === void 0 && g.nodeType === 1)
                        return g.innerHTML;
                    if (typeof u == "string" && !pn.test(u) && !Oe[(Kr.exec(u) || ["", ""])[1].toLowerCase()]) {
                        u = d.htmlPrefilter(u);
                        try {
                            for (; y < x; y++)
                                g = this[y] || {},
                                g.nodeType === 1 && (d.cleanData(ue(g, !1)),
                                g.innerHTML = u);
                            g = 0
                        } catch {}
                    }
                    g && this.empty().append(u)
                }, null, h, arguments.length)
            },
            replaceWith: function() {
                var h = [];
                return Gi(this, arguments, function(u) {
                    var g = this.parentNode;
                    d.inArray(this, h) < 0 && (d.cleanData(ue(this)),
                    g && g.replaceChild(u, this))
                }, h)
            }
        }),
        d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(h, u) {
            d.fn[h] = function(g) {
                for (var y, x = [], b = d(g), w = b.length - 1, M = 0; M <= w; M++)
                    y = M === w ? this : this.clone(!0),
                    d(b[M])[u](y),
                    o.apply(x, y.get());
                return this.pushStack(x)
            }
        });
        var Va = new RegExp("^(" + fi + ")(?!px)[a-z%]+$","i")
          , $a = /^--/
          , gn = function(h) {
            var u = h.ownerDocument.defaultView;
            return (!u || !u.opener) && (u = t),
            u.getComputedStyle(h)
        }
          , Tl = function(h, u, g) {
            var y, x, b = {};
            for (x in u)
                b[x] = h.style[x],
                h.style[x] = u[x];
            y = g.call(h);
            for (x in u)
                h.style[x] = b[x];
            return y
        }
          , Uf = new RegExp(tt.join("|"),"i");
        (function() {
            function h() {
                if (F) {
                    R.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    F.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    St.appendChild(R).appendChild(F);
                    var H = t.getComputedStyle(F);
                    g = H.top !== "1%",
                    M = u(H.marginLeft) === 12,
                    F.style.right = "60%",
                    b = u(H.right) === 36,
                    y = u(H.width) === 36,
                    F.style.position = "absolute",
                    x = u(F.offsetWidth / 3) === 12,
                    St.removeChild(R),
                    F = null
                }
            }
            function u(H) {
                return Math.round(parseFloat(H))
            }
            var g, y, x, b, w, M, R = E.createElement("div"), F = E.createElement("div");
            F.style && (F.style.backgroundClip = "content-box",
            F.cloneNode(!0).style.backgroundClip = "",
            _.clearCloneStyle = F.style.backgroundClip === "content-box",
            d.extend(_, {
                boxSizingReliable: function() {
                    return h(),
                    y
                },
                pixelBoxStyles: function() {
                    return h(),
                    b
                },
                pixelPosition: function() {
                    return h(),
                    g
                },
                reliableMarginLeft: function() {
                    return h(),
                    M
                },
                scrollboxSize: function() {
                    return h(),
                    x
                },
                reliableTrDimensions: function() {
                    var H, X, U, q;
                    return w == null && (H = E.createElement("table"),
                    X = E.createElement("tr"),
                    U = E.createElement("div"),
                    H.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                    X.style.cssText = "box-sizing:content-box;border:1px solid",
                    X.style.height = "1px",
                    U.style.height = "9px",
                    U.style.display = "block",
                    St.appendChild(H).appendChild(X).appendChild(U),
                    q = t.getComputedStyle(X),
                    w = parseInt(q.height, 10) + parseInt(q.borderTopWidth, 10) + parseInt(q.borderBottomWidth, 10) === X.offsetHeight,
                    St.removeChild(H)),
                    w
                }
            }))
        }
        )();
        function Ss(h, u, g) {
            var y, x, b, w, M = $a.test(u), R = h.style;
            return g = g || gn(h),
            g && (w = g.getPropertyValue(u) || g[u],
            M && w && (w = w.replace(j, "$1") || void 0),
            w === "" && !jt(h) && (w = d.style(h, u)),
            !_.pixelBoxStyles() && Va.test(w) && Uf.test(u) && (y = R.width,
            x = R.minWidth,
            b = R.maxWidth,
            R.minWidth = R.maxWidth = R.width = w,
            w = g.width,
            R.width = y,
            R.minWidth = x,
            R.maxWidth = b)),
            w !== void 0 ? w + "" : w
        }
        function wl(h, u) {
            return {
                get: function() {
                    if (h()) {
                        delete this.get;
                        return
                    }
                    return (this.get = u).apply(this, arguments)
                }
            }
        }
        var El = ["Webkit", "Moz", "ms"]
          , Al = E.createElement("div").style
          , Sl = {};
        function Gf(h) {
            for (var u = h[0].toUpperCase() + h.slice(1), g = El.length; g--; )
                if (h = El[g] + u,
                h in Al)
                    return h
        }
        function ja(h) {
            var u = d.cssProps[h] || Sl[h];
            return u || (h in Al ? h : Sl[h] = Gf(h) || h)
        }
        var Hf = /^(none|table(?!-c[ea]).+)/
          , Vf = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Cl = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Il(h, u, g) {
            var y = Ur.exec(u);
            return y ? Math.max(0, y[2] - (g || 0)) + (y[3] || "px") : u
        }
        function Wa(h, u, g, y, x, b) {
            var w = u === "width" ? 1 : 0
              , M = 0
              , R = 0
              , F = 0;
            if (g === (y ? "border" : "content"))
                return 0;
            for (; w < 4; w += 2)
                g === "margin" && (F += d.css(h, g + tt[w], !0, x)),
                y ? (g === "content" && (R -= d.css(h, "padding" + tt[w], !0, x)),
                g !== "margin" && (R -= d.css(h, "border" + tt[w] + "Width", !0, x))) : (R += d.css(h, "padding" + tt[w], !0, x),
                g !== "padding" ? R += d.css(h, "border" + tt[w] + "Width", !0, x) : M += d.css(h, "border" + tt[w] + "Width", !0, x));
            return !y && b >= 0 && (R += Math.max(0, Math.ceil(h["offset" + u[0].toUpperCase() + u.slice(1)] - b - R - M - .5)) || 0),
            R + F
        }
        function Rl(h, u, g) {
            var y = gn(h)
              , x = !_.boxSizingReliable() || g
              , b = x && d.css(h, "boxSizing", !1, y) === "border-box"
              , w = b
              , M = Ss(h, u, y)
              , R = "offset" + u[0].toUpperCase() + u.slice(1);
            if (Va.test(M)) {
                if (!g)
                    return M;
                M = "auto"
            }
            return (!_.boxSizingReliable() && b || !_.reliableTrDimensions() && N(h, "tr") || M === "auto" || !parseFloat(M) && d.css(h, "display", !1, y) === "inline") && h.getClientRects().length && (b = d.css(h, "boxSizing", !1, y) === "border-box",
            w = R in h,
            w && (M = h[R])),
            M = parseFloat(M) || 0,
            M + Wa(h, u, g || (b ? "border" : "content"), w, y, M) + "px"
        }
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(h, u) {
                        if (u) {
                            var g = Ss(h, "opacity");
                            return g === "" ? "1" : g
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageSlice: !0,
                columnCount: !0,
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
                scale: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0
            },
            cssProps: {},
            style: function(h, u, g, y) {
                if (!(!h || h.nodeType === 3 || h.nodeType === 8 || !h.style)) {
                    var x, b, w, M = Fe(u), R = $a.test(u), F = h.style;
                    if (R || (u = ja(M)),
                    w = d.cssHooks[u] || d.cssHooks[M],
                    g !== void 0) {
                        if (b = typeof g,
                        b === "string" && (x = Ur.exec(g)) && x[1] && (g = ye(h, u, x),
                        b = "number"),
                        g == null || g !== g)
                            return;
                        b === "number" && !R && (g += x && x[3] || (d.cssNumber[M] ? "" : "px")),
                        !_.clearCloneStyle && g === "" && u.indexOf("background") === 0 && (F[u] = "inherit"),
                        (!w || !("set"in w) || (g = w.set(h, g, y)) !== void 0) && (R ? F.setProperty(u, g) : F[u] = g)
                    } else
                        return w && "get"in w && (x = w.get(h, !1, y)) !== void 0 ? x : F[u]
                }
            },
            css: function(h, u, g, y) {
                var x, b, w, M = Fe(u), R = $a.test(u);
                return R || (u = ja(M)),
                w = d.cssHooks[u] || d.cssHooks[M],
                w && "get"in w && (x = w.get(h, !0, g)),
                x === void 0 && (x = Ss(h, u, y)),
                x === "normal" && u in Cl && (x = Cl[u]),
                g === "" || g ? (b = parseFloat(x),
                g === !0 || isFinite(b) ? b || 0 : x) : x
            }
        }),
        d.each(["height", "width"], function(h, u) {
            d.cssHooks[u] = {
                get: function(g, y, x) {
                    if (y)
                        return Hf.test(d.css(g, "display")) && (!g.getClientRects().length || !g.getBoundingClientRect().width) ? Tl(g, Vf, function() {
                            return Rl(g, u, x)
                        }) : Rl(g, u, x)
                },
                set: function(g, y, x) {
                    var b, w = gn(g), M = !_.scrollboxSize() && w.position === "absolute", R = M || x, F = R && d.css(g, "boxSizing", !1, w) === "border-box", H = x ? Wa(g, u, x, F, w) : 0;
                    return F && M && (H -= Math.ceil(g["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(w[u]) - Wa(g, u, "border", !1, w) - .5)),
                    H && (b = Ur.exec(y)) && (b[3] || "px") !== "px" && (g.style[u] = y,
                    y = d.css(g, u)),
                    Il(g, y, H)
                }
            }
        }),
        d.cssHooks.marginLeft = wl(_.reliableMarginLeft, function(h, u) {
            if (u)
                return (parseFloat(Ss(h, "marginLeft")) || h.getBoundingClientRect().left - Tl(h, {
                    marginLeft: 0
                }, function() {
                    return h.getBoundingClientRect().left
                })) + "px"
        }),
        d.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(h, u) {
            d.cssHooks[h + u] = {
                expand: function(g) {
                    for (var y = 0, x = {}, b = typeof g == "string" ? g.split(" ") : [g]; y < 4; y++)
                        x[h + tt[y] + u] = b[y] || b[y - 2] || b[0];
                    return x
                }
            },
            h !== "margin" && (d.cssHooks[h + u].set = Il)
        }),
        d.fn.extend({
            css: function(h, u) {
                return oe(this, function(g, y, x) {
                    var b, w, M = {}, R = 0;
                    if (Array.isArray(y)) {
                        for (b = gn(g),
                        w = y.length; R < w; R++)
                            M[y[R]] = d.css(g, y[R], !1, b);
                        return M
                    }
                    return x !== void 0 ? d.style(g, y, x) : d.css(g, y)
                }, h, u, arguments.length > 1)
            }
        });
        function Ne(h, u, g, y, x) {
            return new Ne.prototype.init(h,u,g,y,x)
        }
        d.Tween = Ne,
        Ne.prototype = {
            constructor: Ne,
            init: function(h, u, g, y, x, b) {
                this.elem = h,
                this.prop = g,
                this.easing = x || d.easing._default,
                this.options = u,
                this.start = this.now = this.cur(),
                this.end = y,
                this.unit = b || (d.cssNumber[g] ? "" : "px")
            },
            cur: function() {
                var h = Ne.propHooks[this.prop];
                return h && h.get ? h.get(this) : Ne.propHooks._default.get(this)
            },
            run: function(h) {
                var u, g = Ne.propHooks[this.prop];
                return this.options.duration ? this.pos = u = d.easing[this.easing](h, this.options.duration * h, 0, 1, this.options.duration) : this.pos = u = h,
                this.now = (this.end - this.start) * u + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                g && g.set ? g.set(this) : Ne.propHooks._default.set(this),
                this
            }
        },
        Ne.prototype.init.prototype = Ne.prototype,
        Ne.propHooks = {
            _default: {
                get: function(h) {
                    var u;
                    return h.elem.nodeType !== 1 || h.elem[h.prop] != null && h.elem.style[h.prop] == null ? h.elem[h.prop] : (u = d.css(h.elem, h.prop, ""),
                    !u || u === "auto" ? 0 : u)
                },
                set: function(h) {
                    d.fx.step[h.prop] ? d.fx.step[h.prop](h) : h.elem.nodeType === 1 && (d.cssHooks[h.prop] || h.elem.style[ja(h.prop)] != null) ? d.style(h.elem, h.prop, h.now + h.unit) : h.elem[h.prop] = h.now
                }
            }
        },
        Ne.propHooks.scrollTop = Ne.propHooks.scrollLeft = {
            set: function(h) {
                h.elem.nodeType && h.elem.parentNode && (h.elem[h.prop] = h.now)
            }
        },
        d.easing = {
            linear: function(h) {
                return h
            },
            swing: function(h) {
                return .5 - Math.cos(h * Math.PI) / 2
            },
            _default: "swing"
        },
        d.fx = Ne.prototype.init,
        d.fx.step = {};
        var Hi, mn, $f = /^(?:toggle|show|hide)$/, jf = /queueHooks$/;
        function Xa() {
            mn && (E.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(Xa) : t.setTimeout(Xa, d.fx.interval),
            d.fx.tick())
        }
        function Pl() {
            return t.setTimeout(function() {
                Hi = void 0
            }),
            Hi = Date.now()
        }
        function yn(h, u) {
            var g, y = 0, x = {
                height: h
            };
            for (u = u ? 1 : 0; y < 4; y += 2 - u)
                g = tt[y],
                x["margin" + g] = x["padding" + g] = h;
            return u && (x.opacity = x.width = h),
            x
        }
        function Ml(h, u, g) {
            for (var y, x = (tr.tweeners[u] || []).concat(tr.tweeners["*"]), b = 0, w = x.length; b < w; b++)
                if (y = x[b].call(g, u, h))
                    return y
        }
        function Wf(h, u, g) {
            var y, x, b, w, M, R, F, H, X = "width"in u || "height"in u, U = this, q = {}, wt = h.style, Ht = h.nodeType && le(h), Rt = ft.get(h, "fxshow");
            g.queue || (w = d._queueHooks(h, "fx"),
            w.unqueued == null && (w.unqueued = 0,
            M = w.empty.fire,
            w.empty.fire = function() {
                w.unqueued || M()
            }
            ),
            w.unqueued++,
            U.always(function() {
                U.always(function() {
                    w.unqueued--,
                    d.queue(h, "fx").length || w.empty.fire()
                })
            }));
            for (y in u)
                if (x = u[y],
                $f.test(x)) {
                    if (delete u[y],
                    b = b || x === "toggle",
                    x === (Ht ? "hide" : "show"))
                        if (x === "show" && Rt && Rt[y] !== void 0)
                            Ht = !0;
                        else
                            continue;
                    q[y] = Rt && Rt[y] || d.style(h, y)
                }
            if (R = !d.isEmptyObject(u),
            !(!R && d.isEmptyObject(q))) {
                X && h.nodeType === 1 && (g.overflow = [wt.overflow, wt.overflowX, wt.overflowY],
                F = Rt && Rt.display,
                F == null && (F = ft.get(h, "display")),
                H = d.css(h, "display"),
                H === "none" && (F ? H = F : (Je([h], !0),
                F = h.style.display || F,
                H = d.css(h, "display"),
                Je([h]))),
                (H === "inline" || H === "inline-block" && F != null) && d.css(h, "float") === "none" && (R || (U.done(function() {
                    wt.display = F
                }),
                F == null && (H = wt.display,
                F = H === "none" ? "" : H)),
                wt.display = "inline-block")),
                g.overflow && (wt.overflow = "hidden",
                U.always(function() {
                    wt.overflow = g.overflow[0],
                    wt.overflowX = g.overflow[1],
                    wt.overflowY = g.overflow[2]
                })),
                R = !1;
                for (y in q)
                    R || (Rt ? "hidden"in Rt && (Ht = Rt.hidden) : Rt = ft.access(h, "fxshow", {
                        display: F
                    }),
                    b && (Rt.hidden = !Ht),
                    Ht && Je([h], !0),
                    U.done(function() {
                        Ht || Je([h]),
                        ft.remove(h, "fxshow");
                        for (y in q)
                            d.style(h, y, q[y])
                    })),
                    R = Ml(Ht ? Rt[y] : 0, y, U),
                    y in Rt || (Rt[y] = R.start,
                    Ht && (R.end = R.start,
                    R.start = 0))
            }
        }
        function Xf(h, u) {
            var g, y, x, b, w;
            for (g in h)
                if (y = Fe(g),
                x = u[y],
                b = h[g],
                Array.isArray(b) && (x = b[1],
                b = h[g] = b[0]),
                g !== y && (h[y] = b,
                delete h[g]),
                w = d.cssHooks[y],
                w && "expand"in w) {
                    b = w.expand(b),
                    delete h[y];
                    for (g in b)
                        g in h || (h[g] = b[g],
                        u[g] = x)
                } else
                    u[y] = x
        }
        function tr(h, u, g) {
            var y, x, b = 0, w = tr.prefilters.length, M = d.Deferred().always(function() {
                delete R.elem
            }), R = function() {
                if (x)
                    return !1;
                for (var X = Hi || Pl(), U = Math.max(0, F.startTime + F.duration - X), q = U / F.duration || 0, wt = 1 - q, Ht = 0, Rt = F.tweens.length; Ht < Rt; Ht++)
                    F.tweens[Ht].run(wt);
                return M.notifyWith(h, [F, wt, U]),
                wt < 1 && Rt ? U : (Rt || M.notifyWith(h, [F, 1, 0]),
                M.resolveWith(h, [F]),
                !1)
            }, F = M.promise({
                elem: h,
                props: d.extend({}, u),
                opts: d.extend(!0, {
                    specialEasing: {},
                    easing: d.easing._default
                }, g),
                originalProperties: u,
                originalOptions: g,
                startTime: Hi || Pl(),
                duration: g.duration,
                tweens: [],
                createTween: function(X, U) {
                    var q = d.Tween(h, F.opts, X, U, F.opts.specialEasing[X] || F.opts.easing);
                    return F.tweens.push(q),
                    q
                },
                stop: function(X) {
                    var U = 0
                      , q = X ? F.tweens.length : 0;
                    if (x)
                        return this;
                    for (x = !0; U < q; U++)
                        F.tweens[U].run(1);
                    return X ? (M.notifyWith(h, [F, 1, 0]),
                    M.resolveWith(h, [F, X])) : M.rejectWith(h, [F, X]),
                    this
                }
            }), H = F.props;
            for (Xf(H, F.opts.specialEasing); b < w; b++)
                if (y = tr.prefilters[b].call(F, h, H, F.opts),
                y)
                    return T(y.stop) && (d._queueHooks(F.elem, F.opts.queue).stop = y.stop.bind(y)),
                    y;
            return d.map(H, Ml, F),
            T(F.opts.start) && F.opts.start.call(h, F),
            F.progress(F.opts.progress).done(F.opts.done, F.opts.complete).fail(F.opts.fail).always(F.opts.always),
            d.fx.timer(d.extend(R, {
                elem: h,
                anim: F,
                queue: F.opts.queue
            })),
            F
        }
        d.Animation = d.extend(tr, {
            tweeners: {
                "*": [function(h, u) {
                    var g = this.createTween(h, u);
                    return ye(g.elem, h, Ur.exec(u), g),
                    g
                }
                ]
            },
            tweener: function(h, u) {
                T(h) ? (u = h,
                h = ["*"]) : h = h.match(Dt);
                for (var g, y = 0, x = h.length; y < x; y++)
                    g = h[y],
                    tr.tweeners[g] = tr.tweeners[g] || [],
                    tr.tweeners[g].unshift(u)
            },
            prefilters: [Wf],
            prefilter: function(h, u) {
                u ? tr.prefilters.unshift(h) : tr.prefilters.push(h)
            }
        }),
        d.speed = function(h, u, g) {
            var y = h && typeof h == "object" ? d.extend({}, h) : {
                complete: g || !g && u || T(h) && h,
                duration: h,
                easing: g && u || u && !T(u) && u
            };
            return d.fx.off ? y.duration = 0 : typeof y.duration != "number" && (y.duration in d.fx.speeds ? y.duration = d.fx.speeds[y.duration] : y.duration = d.fx.speeds._default),
            (y.queue == null || y.queue === !0) && (y.queue = "fx"),
            y.old = y.complete,
            y.complete = function() {
                T(y.old) && y.old.call(this),
                y.queue && d.dequeue(this, y.queue)
            }
            ,
            y
        }
        ,
        d.fn.extend({
            fadeTo: function(h, u, g, y) {
                return this.filter(le).css("opacity", 0).show().end().animate({
                    opacity: u
                }, h, g, y)
            },
            animate: function(h, u, g, y) {
                var x = d.isEmptyObject(h)
                  , b = d.speed(u, g, y)
                  , w = function() {
                    var M = tr(this, d.extend({}, h), b);
                    (x || ft.get(this, "finish")) && M.stop(!0)
                };
                return w.finish = w,
                x || b.queue === !1 ? this.each(w) : this.queue(b.queue, w)
            },
            stop: function(h, u, g) {
                var y = function(x) {
                    var b = x.stop;
                    delete x.stop,
                    b(g)
                };
                return typeof h != "string" && (g = u,
                u = h,
                h = void 0),
                u && this.queue(h || "fx", []),
                this.each(function() {
                    var x = !0
                      , b = h != null && h + "queueHooks"
                      , w = d.timers
                      , M = ft.get(this);
                    if (b)
                        M[b] && M[b].stop && y(M[b]);
                    else
                        for (b in M)
                            M[b] && M[b].stop && jf.test(b) && y(M[b]);
                    for (b = w.length; b--; )
                        w[b].elem === this && (h == null || w[b].queue === h) && (w[b].anim.stop(g),
                        x = !1,
                        w.splice(b, 1));
                    (x || !g) && d.dequeue(this, h)
                })
            },
            finish: function(h) {
                return h !== !1 && (h = h || "fx"),
                this.each(function() {
                    var u, g = ft.get(this), y = g[h + "queue"], x = g[h + "queueHooks"], b = d.timers, w = y ? y.length : 0;
                    for (g.finish = !0,
                    d.queue(this, h, []),
                    x && x.stop && x.stop.call(this, !0),
                    u = b.length; u--; )
                        b[u].elem === this && b[u].queue === h && (b[u].anim.stop(!0),
                        b.splice(u, 1));
                    for (u = 0; u < w; u++)
                        y[u] && y[u].finish && y[u].finish.call(this);
                    delete g.finish
                })
            }
        }),
        d.each(["toggle", "show", "hide"], function(h, u) {
            var g = d.fn[u];
            d.fn[u] = function(y, x, b) {
                return y == null || typeof y == "boolean" ? g.apply(this, arguments) : this.animate(yn(u, !0), y, x, b)
            }
        }),
        d.each({
            slideDown: yn("show"),
            slideUp: yn("hide"),
            slideToggle: yn("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(h, u) {
            d.fn[h] = function(g, y, x) {
                return this.animate(u, g, y, x)
            }
        }),
        d.timers = [],
        d.fx.tick = function() {
            var h, u = 0, g = d.timers;
            for (Hi = Date.now(); u < g.length; u++)
                h = g[u],
                !h() && g[u] === h && g.splice(u--, 1);
            g.length || d.fx.stop(),
            Hi = void 0
        }
        ,
        d.fx.timer = function(h) {
            d.timers.push(h),
            d.fx.start()
        }
        ,
        d.fx.interval = 13,
        d.fx.start = function() {
            mn || (mn = !0,
            Xa())
        }
        ,
        d.fx.stop = function() {
            mn = null
        }
        ,
        d.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        d.fn.delay = function(h, u) {
            return h = d.fx && d.fx.speeds[h] || h,
            u = u || "fx",
            this.queue(u, function(g, y) {
                var x = t.setTimeout(g, h);
                y.stop = function() {
                    t.clearTimeout(x)
                }
            })
        }
        ,
        function() {
            var h = E.createElement("input")
              , u = E.createElement("select")
              , g = u.appendChild(E.createElement("option"));
            h.type = "checkbox",
            _.checkOn = h.value !== "",
            _.optSelected = g.selected,
            h = E.createElement("input"),
            h.value = "t",
            h.type = "radio",
            _.radioValue = h.value === "t"
        }();
        var Dl, Cs = d.expr.attrHandle;
        d.fn.extend({
            attr: function(h, u) {
                return oe(this, d.attr, h, u, arguments.length > 1)
            },
            removeAttr: function(h) {
                return this.each(function() {
                    d.removeAttr(this, h)
                })
            }
        }),
        d.extend({
            attr: function(h, u, g) {
                var y, x, b = h.nodeType;
                if (!(b === 3 || b === 8 || b === 2)) {
                    if (typeof h.getAttribute > "u")
                        return d.prop(h, u, g);
                    if ((b !== 1 || !d.isXMLDoc(h)) && (x = d.attrHooks[u.toLowerCase()] || (d.expr.match.bool.test(u) ? Dl : void 0)),
                    g !== void 0) {
                        if (g === null) {
                            d.removeAttr(h, u);
                            return
                        }
                        return x && "set"in x && (y = x.set(h, g, u)) !== void 0 ? y : (h.setAttribute(u, g + ""),
                        g)
                    }
                    return x && "get"in x && (y = x.get(h, u)) !== null ? y : (y = d.find.attr(h, u),
                    y ?? void 0)
                }
            },
            attrHooks: {
                type: {
                    set: function(h, u) {
                        if (!_.radioValue && u === "radio" && N(h, "input")) {
                            var g = h.value;
                            return h.setAttribute("type", u),
                            g && (h.value = g),
                            u
                        }
                    }
                }
            },
            removeAttr: function(h, u) {
                var g, y = 0, x = u && u.match(Dt);
                if (x && h.nodeType === 1)
                    for (; g = x[y++]; )
                        h.removeAttribute(g)
            }
        }),
        Dl = {
            set: function(h, u, g) {
                return u === !1 ? d.removeAttr(h, g) : h.setAttribute(g, g),
                g
            }
        },
        d.each(d.expr.match.bool.source.match(/\w+/g), function(h, u) {
            var g = Cs[u] || d.find.attr;
            Cs[u] = function(y, x, b) {
                var w, M, R = x.toLowerCase();
                return b || (M = Cs[R],
                Cs[R] = w,
                w = g(y, x, b) != null ? R : null,
                Cs[R] = M),
                w
            }
        });
        var zf = /^(?:input|select|textarea|button)$/i
          , Yf = /^(?:a|area)$/i;
        d.fn.extend({
            prop: function(h, u) {
                return oe(this, d.prop, h, u, arguments.length > 1)
            },
            removeProp: function(h) {
                return this.each(function() {
                    delete this[d.propFix[h] || h]
                })
            }
        }),
        d.extend({
            prop: function(h, u, g) {
                var y, x, b = h.nodeType;
                if (!(b === 3 || b === 8 || b === 2))
                    return (b !== 1 || !d.isXMLDoc(h)) && (u = d.propFix[u] || u,
                    x = d.propHooks[u]),
                    g !== void 0 ? x && "set"in x && (y = x.set(h, g, u)) !== void 0 ? y : h[u] = g : x && "get"in x && (y = x.get(h, u)) !== null ? y : h[u]
            },
            propHooks: {
                tabIndex: {
                    get: function(h) {
                        var u = d.find.attr(h, "tabindex");
                        return u ? parseInt(u, 10) : zf.test(h.nodeName) || Yf.test(h.nodeName) && h.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        _.optSelected || (d.propHooks.selected = {
            get: function(h) {
                var u = h.parentNode;
                return u && u.parentNode && u.parentNode.selectedIndex,
                null
            },
            set: function(h) {
                var u = h.parentNode;
                u && (u.selectedIndex,
                u.parentNode && u.parentNode.selectedIndex)
            }
        }),
        d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            d.propFix[this.toLowerCase()] = this
        });
        function pi(h) {
            var u = h.match(Dt) || [];
            return u.join(" ")
        }
        function gi(h) {
            return h.getAttribute && h.getAttribute("class") || ""
        }
        function za(h) {
            return Array.isArray(h) ? h : typeof h == "string" ? h.match(Dt) || [] : []
        }
        d.fn.extend({
            addClass: function(h) {
                var u, g, y, x, b, w;
                return T(h) ? this.each(function(M) {
                    d(this).addClass(h.call(this, M, gi(this)))
                }) : (u = za(h),
                u.length ? this.each(function() {
                    if (y = gi(this),
                    g = this.nodeType === 1 && " " + pi(y) + " ",
                    g) {
                        for (b = 0; b < u.length; b++)
                            x = u[b],
                            g.indexOf(" " + x + " ") < 0 && (g += x + " ");
                        w = pi(g),
                        y !== w && this.setAttribute("class", w)
                    }
                }) : this)
            },
            removeClass: function(h) {
                var u, g, y, x, b, w;
                return T(h) ? this.each(function(M) {
                    d(this).removeClass(h.call(this, M, gi(this)))
                }) : arguments.length ? (u = za(h),
                u.length ? this.each(function() {
                    if (y = gi(this),
                    g = this.nodeType === 1 && " " + pi(y) + " ",
                    g) {
                        for (b = 0; b < u.length; b++)
                            for (x = u[b]; g.indexOf(" " + x + " ") > -1; )
                                g = g.replace(" " + x + " ", " ");
                        w = pi(g),
                        y !== w && this.setAttribute("class", w)
                    }
                }) : this) : this.attr("class", "")
            },
            toggleClass: function(h, u) {
                var g, y, x, b, w = typeof h, M = w === "string" || Array.isArray(h);
                return T(h) ? this.each(function(R) {
                    d(this).toggleClass(h.call(this, R, gi(this), u), u)
                }) : typeof u == "boolean" && M ? u ? this.addClass(h) : this.removeClass(h) : (g = za(h),
                this.each(function() {
                    if (M)
                        for (b = d(this),
                        x = 0; x < g.length; x++)
                            y = g[x],
                            b.hasClass(y) ? b.removeClass(y) : b.addClass(y);
                    else
                        (h === void 0 || w === "boolean") && (y = gi(this),
                        y && ft.set(this, "__className__", y),
                        this.setAttribute && this.setAttribute("class", y || h === !1 ? "" : ft.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(h) {
                var u, g, y = 0;
                for (u = " " + h + " "; g = this[y++]; )
                    if (g.nodeType === 1 && (" " + pi(gi(g)) + " ").indexOf(u) > -1)
                        return !0;
                return !1
            }
        });
        var qf = /\r/g;
        d.fn.extend({
            val: function(h) {
                var u, g, y, x = this[0];
                return arguments.length ? (y = T(h),
                this.each(function(b) {
                    var w;
                    this.nodeType === 1 && (y ? w = h.call(this, b, d(this).val()) : w = h,
                    w == null ? w = "" : typeof w == "number" ? w += "" : Array.isArray(w) && (w = d.map(w, function(M) {
                        return M == null ? "" : M + ""
                    })),
                    u = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()],
                    (!u || !("set"in u) || u.set(this, w, "value") === void 0) && (this.value = w))
                })) : x ? (u = d.valHooks[x.type] || d.valHooks[x.nodeName.toLowerCase()],
                u && "get"in u && (g = u.get(x, "value")) !== void 0 ? g : (g = x.value,
                typeof g == "string" ? g.replace(qf, "") : g ?? "")) : void 0
            }
        }),
        d.extend({
            valHooks: {
                option: {
                    get: function(h) {
                        var u = d.find.attr(h, "value");
                        return u ?? pi(d.text(h))
                    }
                },
                select: {
                    get: function(h) {
                        var u, g, y, x = h.options, b = h.selectedIndex, w = h.type === "select-one", M = w ? null : [], R = w ? b + 1 : x.length;
                        for (b < 0 ? y = R : y = w ? b : 0; y < R; y++)
                            if (g = x[y],
                            (g.selected || y === b) && !g.disabled && (!g.parentNode.disabled || !N(g.parentNode, "optgroup"))) {
                                if (u = d(g).val(),
                                w)
                                    return u;
                                M.push(u)
                            }
                        return M
                    },
                    set: function(h, u) {
                        for (var g, y, x = h.options, b = d.makeArray(u), w = x.length; w--; )
                            y = x[w],
                            (y.selected = d.inArray(d.valHooks.option.get(y), b) > -1) && (g = !0);
                        return g || (h.selectedIndex = -1),
                        b
                    }
                }
            }
        }),
        d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = {
                set: function(h, u) {
                    if (Array.isArray(u))
                        return h.checked = d.inArray(d(h).val(), u) > -1
                }
            },
            _.checkOn || (d.valHooks[this].get = function(h) {
                return h.getAttribute("value") === null ? "on" : h.value
            }
            )
        });
        var Is = t.location
          , Bl = {
            guid: Date.now()
        }
          , Ya = /\?/;
        d.parseXML = function(h) {
            var u, g;
            if (!h || typeof h != "string")
                return null;
            try {
                u = new t.DOMParser().parseFromString(h, "text/xml")
            } catch {}
            return g = u && u.getElementsByTagName("parsererror")[0],
            (!u || g) && d.error("Invalid XML: " + (g ? d.map(g.childNodes, function(y) {
                return y.textContent
            }).join(`
`) : h)),
            u
        }
        ;
        var Fl = /^(?:focusinfocus|focusoutblur)$/
          , Ol = function(h) {
            h.stopPropagation()
        };
        d.extend(d.event, {
            trigger: function(h, u, g, y) {
                var x, b, w, M, R, F, H, X, U = [g || E], q = m.call(h, "type") ? h.type : h, wt = m.call(h, "namespace") ? h.namespace.split(".") : [];
                if (b = X = w = g = g || E,
                !(g.nodeType === 3 || g.nodeType === 8) && !Fl.test(q + d.event.triggered) && (q.indexOf(".") > -1 && (wt = q.split("."),
                q = wt.shift(),
                wt.sort()),
                R = q.indexOf(":") < 0 && "on" + q,
                h = h[d.expando] ? h : new d.Event(q,typeof h == "object" && h),
                h.isTrigger = y ? 2 : 3,
                h.namespace = wt.join("."),
                h.rnamespace = h.namespace ? new RegExp("(^|\\.)" + wt.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                h.result = void 0,
                h.target || (h.target = g),
                u = u == null ? [h] : d.makeArray(u, [h]),
                H = d.event.special[q] || {},
                !(!y && H.trigger && H.trigger.apply(g, u) === !1))) {
                    if (!y && !H.noBubble && !A(g)) {
                        for (M = H.delegateType || q,
                        Fl.test(M + q) || (b = b.parentNode); b; b = b.parentNode)
                            U.push(b),
                            w = b;
                        w === (g.ownerDocument || E) && U.push(w.defaultView || w.parentWindow || t)
                    }
                    for (x = 0; (b = U[x++]) && !h.isPropagationStopped(); )
                        X = b,
                        h.type = x > 1 ? M : H.bindType || q,
                        F = (ft.get(b, "events") || Object.create(null))[h.type] && ft.get(b, "handle"),
                        F && F.apply(b, u),
                        F = R && b[R],
                        F && F.apply && Ze(b) && (h.result = F.apply(b, u),
                        h.result === !1 && h.preventDefault());
                    return h.type = q,
                    !y && !h.isDefaultPrevented() && (!H._default || H._default.apply(U.pop(), u) === !1) && Ze(g) && R && T(g[q]) && !A(g) && (w = g[R],
                    w && (g[R] = null),
                    d.event.triggered = q,
                    h.isPropagationStopped() && X.addEventListener(q, Ol),
                    g[q](),
                    h.isPropagationStopped() && X.removeEventListener(q, Ol),
                    d.event.triggered = void 0,
                    w && (g[R] = w)),
                    h.result
                }
            },
            simulate: function(h, u, g) {
                var y = d.extend(new d.Event, g, {
                    type: h,
                    isSimulated: !0
                });
                d.event.trigger(y, null, u)
            }
        }),
        d.fn.extend({
            trigger: function(h, u) {
                return this.each(function() {
                    d.event.trigger(h, u, this)
                })
            },
            triggerHandler: function(h, u) {
                var g = this[0];
                if (g)
                    return d.event.trigger(h, u, g, !0)
            }
        });
        var Kf = /\[\]$/
          , Nl = /\r?\n/g
          , Zf = /^(?:submit|button|image|reset|file)$/i
          , Qf = /^(?:input|select|textarea|keygen)/i;
        function qa(h, u, g, y) {
            var x;
            if (Array.isArray(u))
                d.each(u, function(b, w) {
                    g || Kf.test(h) ? y(h, w) : qa(h + "[" + (typeof w == "object" && w != null ? b : "") + "]", w, g, y)
                });
            else if (!g && P(u) === "object")
                for (x in u)
                    qa(h + "[" + x + "]", u[x], g, y);
            else
                y(h, u)
        }
        d.param = function(h, u) {
            var g, y = [], x = function(b, w) {
                var M = T(w) ? w() : w;
                y[y.length] = encodeURIComponent(b) + "=" + encodeURIComponent(M ?? "")
            };
            if (h == null)
                return "";
            if (Array.isArray(h) || h.jquery && !d.isPlainObject(h))
                d.each(h, function() {
                    x(this.name, this.value)
                });
            else
                for (g in h)
                    qa(g, h[g], u, x);
            return y.join("&")
        }
        ,
        d.fn.extend({
            serialize: function() {
                return d.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var h = d.prop(this, "elements");
                    return h ? d.makeArray(h) : this
                }).filter(function() {
                    var h = this.type;
                    return this.name && !d(this).is(":disabled") && Qf.test(this.nodeName) && !Zf.test(h) && (this.checked || !pr.test(h))
                }).map(function(h, u) {
                    var g = d(this).val();
                    return g == null ? null : Array.isArray(g) ? d.map(g, function(y) {
                        return {
                            name: u.name,
                            value: y.replace(Nl, `\r
`)
                        }
                    }) : {
                        name: u.name,
                        value: g.replace(Nl, `\r
`)
                    }
                }).get()
            }
        });
        var Jf = /%20/g
          , tp = /#.*$/
          , ep = /([?&])_=[^&]*/
          , rp = /^(.*?):[ \t]*([^\r\n]*)$/mg
          , ip = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , sp = /^(?:GET|HEAD)$/
          , np = /^\/\//
          , Ll = {}
          , Ka = {}
          , kl = "*/".concat("*")
          , Za = E.createElement("a");
        Za.href = Is.href;
        function Ul(h) {
            return function(u, g) {
                typeof u != "string" && (g = u,
                u = "*");
                var y, x = 0, b = u.toLowerCase().match(Dt) || [];
                if (T(g))
                    for (; y = b[x++]; )
                        y[0] === "+" ? (y = y.slice(1) || "*",
                        (h[y] = h[y] || []).unshift(g)) : (h[y] = h[y] || []).push(g)
            }
        }
        function Gl(h, u, g, y) {
            var x = {}
              , b = h === Ka;
            function w(M) {
                var R;
                return x[M] = !0,
                d.each(h[M] || [], function(F, H) {
                    var X = H(u, g, y);
                    if (typeof X == "string" && !b && !x[X])
                        return u.dataTypes.unshift(X),
                        w(X),
                        !1;
                    if (b)
                        return !(R = X)
                }),
                R
            }
            return w(u.dataTypes[0]) || !x["*"] && w("*")
        }
        function Qa(h, u) {
            var g, y, x = d.ajaxSettings.flatOptions || {};
            for (g in u)
                u[g] !== void 0 && ((x[g] ? h : y || (y = {}))[g] = u[g]);
            return y && d.extend(!0, h, y),
            h
        }
        function ap(h, u, g) {
            for (var y, x, b, w, M = h.contents, R = h.dataTypes; R[0] === "*"; )
                R.shift(),
                y === void 0 && (y = h.mimeType || u.getResponseHeader("Content-Type"));
            if (y) {
                for (x in M)
                    if (M[x] && M[x].test(y)) {
                        R.unshift(x);
                        break
                    }
            }
            if (R[0]in g)
                b = R[0];
            else {
                for (x in g) {
                    if (!R[0] || h.converters[x + " " + R[0]]) {
                        b = x;
                        break
                    }
                    w || (w = x)
                }
                b = b || w
            }
            if (b)
                return b !== R[0] && R.unshift(b),
                g[b]
        }
        function op(h, u, g, y) {
            var x, b, w, M, R, F = {}, H = h.dataTypes.slice();
            if (H[1])
                for (w in h.converters)
                    F[w.toLowerCase()] = h.converters[w];
            for (b = H.shift(); b; )
                if (h.responseFields[b] && (g[h.responseFields[b]] = u),
                !R && y && h.dataFilter && (u = h.dataFilter(u, h.dataType)),
                R = b,
                b = H.shift(),
                b) {
                    if (b === "*")
                        b = R;
                    else if (R !== "*" && R !== b) {
                        if (w = F[R + " " + b] || F["* " + b],
                        !w) {
                            for (x in F)
                                if (M = x.split(" "),
                                M[1] === b && (w = F[R + " " + M[0]] || F["* " + M[0]],
                                w)) {
                                    w === !0 ? w = F[x] : F[x] !== !0 && (b = M[0],
                                    H.unshift(M[1]));
                                    break
                                }
                        }
                        if (w !== !0)
                            if (w && h.throws)
                                u = w(u);
                            else
                                try {
                                    u = w(u)
                                } catch (X) {
                                    return {
                                        state: "parsererror",
                                        error: w ? X : "No conversion from " + R + " to " + b
                                    }
                                }
                    }
                }
            return {
                state: "success",
                data: u
            }
        }
        d.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Is.href,
                type: "GET",
                isLocal: ip.test(Is.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": kl,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": d.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(h, u) {
                return u ? Qa(Qa(h, d.ajaxSettings), u) : Qa(d.ajaxSettings, h)
            },
            ajaxPrefilter: Ul(Ll),
            ajaxTransport: Ul(Ka),
            ajax: function(h, u) {
                typeof h == "object" && (u = h,
                h = void 0),
                u = u || {};
                var g, y, x, b, w, M, R, F, H, X, U = d.ajaxSetup({}, u), q = U.context || U, wt = U.context && (q.nodeType || q.jquery) ? d(q) : d.event, Ht = d.Deferred(), Rt = d.Callbacks("once memory"), Te = U.statusCode || {}, ce = {}, gr = {}, mr = "canceled", Ut = {
                    readyState: 0,
                    getResponseHeader: function(Vt) {
                        var ne;
                        if (R) {
                            if (!b)
                                for (b = {}; ne = rp.exec(x); )
                                    b[ne[1].toLowerCase() + " "] = (b[ne[1].toLowerCase() + " "] || []).concat(ne[2]);
                            ne = b[Vt.toLowerCase() + " "]
                        }
                        return ne == null ? null : ne.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return R ? x : null
                    },
                    setRequestHeader: function(Vt, ne) {
                        return R == null && (Vt = gr[Vt.toLowerCase()] = gr[Vt.toLowerCase()] || Vt,
                        ce[Vt] = ne),
                        this
                    },
                    overrideMimeType: function(Vt) {
                        return R == null && (U.mimeType = Vt),
                        this
                    },
                    statusCode: function(Vt) {
                        var ne;
                        if (Vt)
                            if (R)
                                Ut.always(Vt[Ut.status]);
                            else
                                for (ne in Vt)
                                    Te[ne] = [Te[ne], Vt[ne]];
                        return this
                    },
                    abort: function(Vt) {
                        var ne = Vt || mr;
                        return g && g.abort(ne),
                        mi(0, ne),
                        this
                    }
                };
                if (Ht.promise(Ut),
                U.url = ((h || U.url || Is.href) + "").replace(np, Is.protocol + "//"),
                U.type = u.method || u.type || U.method || U.type,
                U.dataTypes = (U.dataType || "*").toLowerCase().match(Dt) || [""],
                U.crossDomain == null) {
                    M = E.createElement("a");
                    try {
                        M.href = U.url,
                        M.href = M.href,
                        U.crossDomain = Za.protocol + "//" + Za.host != M.protocol + "//" + M.host
                    } catch {
                        U.crossDomain = !0
                    }
                }
                if (U.data && U.processData && typeof U.data != "string" && (U.data = d.param(U.data, U.traditional)),
                Gl(Ll, U, u, Ut),
                R)
                    return Ut;
                F = d.event && U.global,
                F && d.active++ === 0 && d.event.trigger("ajaxStart"),
                U.type = U.type.toUpperCase(),
                U.hasContent = !sp.test(U.type),
                y = U.url.replace(tp, ""),
                U.hasContent ? U.data && U.processData && (U.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (U.data = U.data.replace(Jf, "+")) : (X = U.url.slice(y.length),
                U.data && (U.processData || typeof U.data == "string") && (y += (Ya.test(y) ? "&" : "?") + U.data,
                delete U.data),
                U.cache === !1 && (y = y.replace(ep, "$1"),
                X = (Ya.test(y) ? "&" : "?") + "_=" + Bl.guid++ + X),
                U.url = y + X),
                U.ifModified && (d.lastModified[y] && Ut.setRequestHeader("If-Modified-Since", d.lastModified[y]),
                d.etag[y] && Ut.setRequestHeader("If-None-Match", d.etag[y])),
                (U.data && U.hasContent && U.contentType !== !1 || u.contentType) && Ut.setRequestHeader("Content-Type", U.contentType),
                Ut.setRequestHeader("Accept", U.dataTypes[0] && U.accepts[U.dataTypes[0]] ? U.accepts[U.dataTypes[0]] + (U.dataTypes[0] !== "*" ? ", " + kl + "; q=0.01" : "") : U.accepts["*"]);
                for (H in U.headers)
                    Ut.setRequestHeader(H, U.headers[H]);
                if (U.beforeSend && (U.beforeSend.call(q, Ut, U) === !1 || R))
                    return Ut.abort();
                if (mr = "abort",
                Rt.add(U.complete),
                Ut.done(U.success),
                Ut.fail(U.error),
                g = Gl(Ka, U, u, Ut),
                !g)
                    mi(-1, "No Transport");
                else {
                    if (Ut.readyState = 1,
                    F && wt.trigger("ajaxSend", [Ut, U]),
                    R)
                        return Ut;
                    U.async && U.timeout > 0 && (w = t.setTimeout(function() {
                        Ut.abort("timeout")
                    }, U.timeout));
                    try {
                        R = !1,
                        g.send(ce, mi)
                    } catch (Vt) {
                        if (R)
                            throw Vt;
                        mi(-1, Vt)
                    }
                }
                function mi(Vt, ne, Ps, to) {
                    var yr, Ms, vr, Zr, Qr, We = ne;
                    R || (R = !0,
                    w && t.clearTimeout(w),
                    g = void 0,
                    x = to || "",
                    Ut.readyState = Vt > 0 ? 4 : 0,
                    yr = Vt >= 200 && Vt < 300 || Vt === 304,
                    Ps && (Zr = ap(U, Ut, Ps)),
                    !yr && d.inArray("script", U.dataTypes) > -1 && d.inArray("json", U.dataTypes) < 0 && (U.converters["text script"] = function() {}
                    ),
                    Zr = op(U, Zr, Ut, yr),
                    yr ? (U.ifModified && (Qr = Ut.getResponseHeader("Last-Modified"),
                    Qr && (d.lastModified[y] = Qr),
                    Qr = Ut.getResponseHeader("etag"),
                    Qr && (d.etag[y] = Qr)),
                    Vt === 204 || U.type === "HEAD" ? We = "nocontent" : Vt === 304 ? We = "notmodified" : (We = Zr.state,
                    Ms = Zr.data,
                    vr = Zr.error,
                    yr = !vr)) : (vr = We,
                    (Vt || !We) && (We = "error",
                    Vt < 0 && (Vt = 0))),
                    Ut.status = Vt,
                    Ut.statusText = (ne || We) + "",
                    yr ? Ht.resolveWith(q, [Ms, We, Ut]) : Ht.rejectWith(q, [Ut, We, vr]),
                    Ut.statusCode(Te),
                    Te = void 0,
                    F && wt.trigger(yr ? "ajaxSuccess" : "ajaxError", [Ut, U, yr ? Ms : vr]),
                    Rt.fireWith(q, [Ut, We]),
                    F && (wt.trigger("ajaxComplete", [Ut, U]),
                    --d.active || d.event.trigger("ajaxStop")))
                }
                return Ut
            },
            getJSON: function(h, u, g) {
                return d.get(h, u, g, "json")
            },
            getScript: function(h, u) {
                return d.get(h, void 0, u, "script")
            }
        }),
        d.each(["get", "post"], function(h, u) {
            d[u] = function(g, y, x, b) {
                return T(y) && (b = b || x,
                x = y,
                y = void 0),
                d.ajax(d.extend({
                    url: g,
                    type: u,
                    dataType: b,
                    data: y,
                    success: x
                }, d.isPlainObject(g) && g))
            }
        }),
        d.ajaxPrefilter(function(h) {
            var u;
            for (u in h.headers)
                u.toLowerCase() === "content-type" && (h.contentType = h.headers[u] || "")
        }),
        d._evalUrl = function(h, u, g) {
            return d.ajax({
                url: h,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(y) {
                    d.globalEval(y, u, g)
                }
            })
        }
        ,
        d.fn.extend({
            wrapAll: function(h) {
                var u;
                return this[0] && (T(h) && (h = h.call(this[0])),
                u = d(h, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && u.insertBefore(this[0]),
                u.map(function() {
                    for (var g = this; g.firstElementChild; )
                        g = g.firstElementChild;
                    return g
                }).append(this)),
                this
            },
            wrapInner: function(h) {
                return T(h) ? this.each(function(u) {
                    d(this).wrapInner(h.call(this, u))
                }) : this.each(function() {
                    var u = d(this)
                      , g = u.contents();
                    g.length ? g.wrapAll(h) : u.append(h)
                })
            },
            wrap: function(h) {
                var u = T(h);
                return this.each(function(g) {
                    d(this).wrapAll(u ? h.call(this, g) : h)
                })
            },
            unwrap: function(h) {
                return this.parent(h).not("body").each(function() {
                    d(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        d.expr.pseudos.hidden = function(h) {
            return !d.expr.pseudos.visible(h)
        }
        ,
        d.expr.pseudos.visible = function(h) {
            return !!(h.offsetWidth || h.offsetHeight || h.getClientRects().length)
        }
        ,
        d.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch {}
        }
        ;
        var hp = {
            0: 200,
            1223: 204
        }
          , Rs = d.ajaxSettings.xhr();
        _.cors = !!Rs && "withCredentials"in Rs,
        _.ajax = Rs = !!Rs,
        d.ajaxTransport(function(h) {
            var u, g;
            if (_.cors || Rs && !h.crossDomain)
                return {
                    send: function(y, x) {
                        var b, w = h.xhr();
                        if (w.open(h.type, h.url, h.async, h.username, h.password),
                        h.xhrFields)
                            for (b in h.xhrFields)
                                w[b] = h.xhrFields[b];
                        h.mimeType && w.overrideMimeType && w.overrideMimeType(h.mimeType),
                        !h.crossDomain && !y["X-Requested-With"] && (y["X-Requested-With"] = "XMLHttpRequest");
                        for (b in y)
                            w.setRequestHeader(b, y[b]);
                        u = function(M) {
                            return function() {
                                u && (u = g = w.onload = w.onerror = w.onabort = w.ontimeout = w.onreadystatechange = null,
                                M === "abort" ? w.abort() : M === "error" ? typeof w.status != "number" ? x(0, "error") : x(w.status, w.statusText) : x(hp[w.status] || w.status, w.statusText, (w.responseType || "text") !== "text" || typeof w.responseText != "string" ? {
                                    binary: w.response
                                } : {
                                    text: w.responseText
                                }, w.getAllResponseHeaders()))
                            }
                        }
                        ,
                        w.onload = u(),
                        g = w.onerror = w.ontimeout = u("error"),
                        w.onabort !== void 0 ? w.onabort = g : w.onreadystatechange = function() {
                            w.readyState === 4 && t.setTimeout(function() {
                                u && g()
                            })
                        }
                        ,
                        u = u("abort");
                        try {
                            w.send(h.hasContent && h.data || null)
                        } catch (M) {
                            if (u)
                                throw M
                        }
                    },
                    abort: function() {
                        u && u()
                    }
                }
        }),
        d.ajaxPrefilter(function(h) {
            h.crossDomain && (h.contents.script = !1)
        }),
        d.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(h) {
                    return d.globalEval(h),
                    h
                }
            }
        }),
        d.ajaxPrefilter("script", function(h) {
            h.cache === void 0 && (h.cache = !1),
            h.crossDomain && (h.type = "GET")
        }),
        d.ajaxTransport("script", function(h) {
            if (h.crossDomain || h.scriptAttrs) {
                var u, g;
                return {
                    send: function(y, x) {
                        u = d("<script>").attr(h.scriptAttrs || {}).prop({
                            charset: h.scriptCharset,
                            src: h.url
                        }).on("load error", g = function(b) {
                            u.remove(),
                            g = null,
                            b && x(b.type === "error" ? 404 : 200, b.type)
                        }
                        ),
                        E.head.appendChild(u[0])
                    },
                    abort: function() {
                        g && g()
                    }
                }
            }
        });
        var Hl = []
          , Ja = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var h = Hl.pop() || d.expando + "_" + Bl.guid++;
                return this[h] = !0,
                h
            }
        }),
        d.ajaxPrefilter("json jsonp", function(h, u, g) {
            var y, x, b, w = h.jsonp !== !1 && (Ja.test(h.url) ? "url" : typeof h.data == "string" && (h.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ja.test(h.data) && "data");
            if (w || h.dataTypes[0] === "jsonp")
                return y = h.jsonpCallback = T(h.jsonpCallback) ? h.jsonpCallback() : h.jsonpCallback,
                w ? h[w] = h[w].replace(Ja, "$1" + y) : h.jsonp !== !1 && (h.url += (Ya.test(h.url) ? "&" : "?") + h.jsonp + "=" + y),
                h.converters["script json"] = function() {
                    return b || d.error(y + " was not called"),
                    b[0]
                }
                ,
                h.dataTypes[0] = "json",
                x = t[y],
                t[y] = function() {
                    b = arguments
                }
                ,
                g.always(function() {
                    x === void 0 ? d(t).removeProp(y) : t[y] = x,
                    h[y] && (h.jsonpCallback = u.jsonpCallback,
                    Hl.push(y)),
                    b && T(x) && x(b[0]),
                    b = x = void 0
                }),
                "script"
        }),
        _.createHTMLDocument = function() {
            var h = E.implementation.createHTMLDocument("").body;
            return h.innerHTML = "<form></form><form></form>",
            h.childNodes.length === 2
        }(),
        d.parseHTML = function(h, u, g) {
            if (typeof h != "string")
                return [];
            typeof u == "boolean" && (g = u,
            u = !1);
            var y, x, b;
            return u || (_.createHTMLDocument ? (u = E.implementation.createHTMLDocument(""),
            y = u.createElement("base"),
            y.href = E.location.href,
            u.head.appendChild(y)) : u = E),
            x = xt.exec(h),
            b = !g && [],
            x ? [u.createElement(x[1])] : (x = As([h], u, b),
            b && b.length && d(b).remove(),
            d.merge([], x.childNodes))
        }
        ,
        d.fn.load = function(h, u, g) {
            var y, x, b, w = this, M = h.indexOf(" ");
            return M > -1 && (y = pi(h.slice(M)),
            h = h.slice(0, M)),
            T(u) ? (g = u,
            u = void 0) : u && typeof u == "object" && (x = "POST"),
            w.length > 0 && d.ajax({
                url: h,
                type: x || "GET",
                dataType: "html",
                data: u
            }).done(function(R) {
                b = arguments,
                w.html(y ? d("<div>").append(d.parseHTML(R)).find(y) : R)
            }).always(g && function(R, F) {
                w.each(function() {
                    g.apply(this, b || [R.responseText, F, R])
                })
            }
            ),
            this
        }
        ,
        d.expr.pseudos.animated = function(h) {
            return d.grep(d.timers, function(u) {
                return h === u.elem
            }).length
        }
        ,
        d.offset = {
            setOffset: function(h, u, g) {
                var y, x, b, w, M, R, F, H = d.css(h, "position"), X = d(h), U = {};
                H === "static" && (h.style.position = "relative"),
                M = X.offset(),
                b = d.css(h, "top"),
                R = d.css(h, "left"),
                F = (H === "absolute" || H === "fixed") && (b + R).indexOf("auto") > -1,
                F ? (y = X.position(),
                w = y.top,
                x = y.left) : (w = parseFloat(b) || 0,
                x = parseFloat(R) || 0),
                T(u) && (u = u.call(h, g, d.extend({}, M))),
                u.top != null && (U.top = u.top - M.top + w),
                u.left != null && (U.left = u.left - M.left + x),
                "using"in u ? u.using.call(h, U) : X.css(U)
            }
        },
        d.fn.extend({
            offset: function(h) {
                if (arguments.length)
                    return h === void 0 ? this : this.each(function(x) {
                        d.offset.setOffset(this, h, x)
                    });
                var u, g, y = this[0];
                if (y)
                    return y.getClientRects().length ? (u = y.getBoundingClientRect(),
                    g = y.ownerDocument.defaultView,
                    {
                        top: u.top + g.pageYOffset,
                        left: u.left + g.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var h, u, g, y = this[0], x = {
                        top: 0,
                        left: 0
                    };
                    if (d.css(y, "position") === "fixed")
                        u = y.getBoundingClientRect();
                    else {
                        for (u = this.offset(),
                        g = y.ownerDocument,
                        h = y.offsetParent || g.documentElement; h && (h === g.body || h === g.documentElement) && d.css(h, "position") === "static"; )
                            h = h.parentNode;
                        h && h !== y && h.nodeType === 1 && (x = d(h).offset(),
                        x.top += d.css(h, "borderTopWidth", !0),
                        x.left += d.css(h, "borderLeftWidth", !0))
                    }
                    return {
                        top: u.top - x.top - d.css(y, "marginTop", !0),
                        left: u.left - x.left - d.css(y, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var h = this.offsetParent; h && d.css(h, "position") === "static"; )
                        h = h.offsetParent;
                    return h || St
                })
            }
        }),
        d.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(h, u) {
            var g = u === "pageYOffset";
            d.fn[h] = function(y) {
                return oe(this, function(x, b, w) {
                    var M;
                    if (A(x) ? M = x : x.nodeType === 9 && (M = x.defaultView),
                    w === void 0)
                        return M ? M[u] : x[b];
                    M ? M.scrollTo(g ? M.pageXOffset : w, g ? w : M.pageYOffset) : x[b] = w
                }, h, y, arguments.length)
            }
        }),
        d.each(["top", "left"], function(h, u) {
            d.cssHooks[u] = wl(_.pixelPosition, function(g, y) {
                if (y)
                    return y = Ss(g, u),
                    Va.test(y) ? d(g).position()[u] + "px" : y
            })
        }),
        d.each({
            Height: "height",
            Width: "width"
        }, function(h, u) {
            d.each({
                padding: "inner" + h,
                content: u,
                "": "outer" + h
            }, function(g, y) {
                d.fn[y] = function(x, b) {
                    var w = arguments.length && (g || typeof x != "boolean")
                      , M = g || (x === !0 || b === !0 ? "margin" : "border");
                    return oe(this, function(R, F, H) {
                        var X;
                        return A(R) ? y.indexOf("outer") === 0 ? R["inner" + h] : R.document.documentElement["client" + h] : R.nodeType === 9 ? (X = R.documentElement,
                        Math.max(R.body["scroll" + h], X["scroll" + h], R.body["offset" + h], X["offset" + h], X["client" + h])) : H === void 0 ? d.css(R, F, M) : d.style(R, F, H, M)
                    }, u, w ? x : void 0, w)
                }
            })
        }),
        d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(h, u) {
            d.fn[u] = function(g) {
                return this.on(u, g)
            }
        }),
        d.fn.extend({
            bind: function(h, u, g) {
                return this.on(h, null, u, g)
            },
            unbind: function(h, u) {
                return this.off(h, null, u)
            },
            delegate: function(h, u, g, y) {
                return this.on(u, h, g, y)
            },
            undelegate: function(h, u, g) {
                return arguments.length === 1 ? this.off(h, "**") : this.off(u, h || "**", g)
            },
            hover: function(h, u) {
                return this.on("mouseenter", h).on("mouseleave", u || h)
            }
        }),
        d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(h, u) {
            d.fn[u] = function(g, y) {
                return arguments.length > 0 ? this.on(u, null, g, y) : this.trigger(u)
            }
        });
        var lp = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        d.proxy = function(h, u) {
            var g, y, x;
            if (typeof u == "string" && (g = h[u],
            u = h,
            h = g),
            !!T(h))
                return y = n.call(arguments, 2),
                x = function() {
                    return h.apply(u || this, y.concat(n.call(arguments)))
                }
                ,
                x.guid = h.guid = h.guid || d.guid++,
                x
        }
        ,
        d.holdReady = function(h) {
            h ? d.readyWait++ : d.ready(!0)
        }
        ,
        d.isArray = Array.isArray,
        d.parseJSON = JSON.parse,
        d.nodeName = N,
        d.isFunction = T,
        d.isWindow = A,
        d.camelCase = Fe,
        d.type = P,
        d.now = Date.now,
        d.isNumeric = function(h) {
            var u = d.type(h);
            return (u === "number" || u === "string") && !isNaN(h - parseFloat(h))
        }
        ,
        d.trim = function(h) {
            return h == null ? "" : (h + "").replace(lp, "$1")
        }
        ;
        var up = t.jQuery
          , cp = t.$;
        return d.noConflict = function(h) {
            return t.$ === d && (t.$ = cp),
            h && t.jQuery === d && (t.jQuery = up),
            d
        }
        ,
        typeof e > "u" && (t.jQuery = t.$ = d),
        d
    })
}
)(Sc);
var xp = Sc.exports;
const pb = Aa(xp);
var Oi = (i => (i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY",
i[i.WEBGL = 1] = "WEBGL",
i[i.WEBGL2 = 2] = "WEBGL2",
i))(Oi || {})
  , Kh = (i => (i[i.UNKNOWN = 0] = "UNKNOWN",
i[i.WEBGL = 1] = "WEBGL",
i[i.CANVAS = 2] = "CANVAS",
i))(Kh || {})
  , Ko = (i => (i[i.COLOR = 16384] = "COLOR",
i[i.DEPTH = 256] = "DEPTH",
i[i.STENCIL = 1024] = "STENCIL",
i))(Ko || {})
  , Y = (i => (i[i.NORMAL = 0] = "NORMAL",
i[i.ADD = 1] = "ADD",
i[i.MULTIPLY = 2] = "MULTIPLY",
i[i.SCREEN = 3] = "SCREEN",
i[i.OVERLAY = 4] = "OVERLAY",
i[i.DARKEN = 5] = "DARKEN",
i[i.LIGHTEN = 6] = "LIGHTEN",
i[i.COLOR_DODGE = 7] = "COLOR_DODGE",
i[i.COLOR_BURN = 8] = "COLOR_BURN",
i[i.HARD_LIGHT = 9] = "HARD_LIGHT",
i[i.SOFT_LIGHT = 10] = "SOFT_LIGHT",
i[i.DIFFERENCE = 11] = "DIFFERENCE",
i[i.EXCLUSION = 12] = "EXCLUSION",
i[i.HUE = 13] = "HUE",
i[i.SATURATION = 14] = "SATURATION",
i[i.COLOR = 15] = "COLOR",
i[i.LUMINOSITY = 16] = "LUMINOSITY",
i[i.NORMAL_NPM = 17] = "NORMAL_NPM",
i[i.ADD_NPM = 18] = "ADD_NPM",
i[i.SCREEN_NPM = 19] = "SCREEN_NPM",
i[i.NONE = 20] = "NONE",
i[i.SRC_OVER = 0] = "SRC_OVER",
i[i.SRC_IN = 21] = "SRC_IN",
i[i.SRC_OUT = 22] = "SRC_OUT",
i[i.SRC_ATOP = 23] = "SRC_ATOP",
i[i.DST_OVER = 24] = "DST_OVER",
i[i.DST_IN = 25] = "DST_IN",
i[i.DST_OUT = 26] = "DST_OUT",
i[i.DST_ATOP = 27] = "DST_ATOP",
i[i.ERASE = 26] = "ERASE",
i[i.SUBTRACT = 28] = "SUBTRACT",
i[i.XOR = 29] = "XOR",
i))(Y || {})
  , or = (i => (i[i.POINTS = 0] = "POINTS",
i[i.LINES = 1] = "LINES",
i[i.LINE_LOOP = 2] = "LINE_LOOP",
i[i.LINE_STRIP = 3] = "LINE_STRIP",
i[i.TRIANGLES = 4] = "TRIANGLES",
i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP",
i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN",
i))(or || {})
  , Z = (i => (i[i.RGBA = 6408] = "RGBA",
i[i.RGB = 6407] = "RGB",
i[i.RG = 33319] = "RG",
i[i.RED = 6403] = "RED",
i[i.RGBA_INTEGER = 36249] = "RGBA_INTEGER",
i[i.RGB_INTEGER = 36248] = "RGB_INTEGER",
i[i.RG_INTEGER = 33320] = "RG_INTEGER",
i[i.RED_INTEGER = 36244] = "RED_INTEGER",
i[i.ALPHA = 6406] = "ALPHA",
i[i.LUMINANCE = 6409] = "LUMINANCE",
i[i.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA",
i[i.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT",
i[i.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL",
i))(Z || {})
  , as = (i => (i[i.TEXTURE_2D = 3553] = "TEXTURE_2D",
i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP",
i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY",
i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X",
i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X",
i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y",
i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y",
i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z",
i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z",
i))(as || {})
  , mt = (i => (i[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE",
i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT",
i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5",
i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4",
i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1",
i[i.UNSIGNED_INT = 5125] = "UNSIGNED_INT",
i[i.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV",
i[i.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV",
i[i.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8",
i[i.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV",
i[i.BYTE = 5120] = "BYTE",
i[i.SHORT = 5122] = "SHORT",
i[i.INT = 5124] = "INT",
i[i.FLOAT = 5126] = "FLOAT",
i[i.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV",
i[i.HALF_FLOAT = 36193] = "HALF_FLOAT",
i))(mt || {})
  , ct = (i => (i[i.FLOAT = 0] = "FLOAT",
i[i.INT = 1] = "INT",
i[i.UINT = 2] = "UINT",
i))(ct || {})
  , hr = (i => (i[i.NEAREST = 0] = "NEAREST",
i[i.LINEAR = 1] = "LINEAR",
i))(hr || {})
  , Yr = (i => (i[i.CLAMP = 33071] = "CLAMP",
i[i.REPEAT = 10497] = "REPEAT",
i[i.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT",
i))(Yr || {})
  , Br = (i => (i[i.OFF = 0] = "OFF",
i[i.POW2 = 1] = "POW2",
i[i.ON = 2] = "ON",
i[i.ON_MANUAL = 3] = "ON_MANUAL",
i))(Br || {})
  , ke = (i => (i[i.NPM = 0] = "NPM",
i[i.UNPACK = 1] = "UNPACK",
i[i.PMA = 2] = "PMA",
i[i.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA",
i[i.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD",
i[i.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA",
i))(ke || {})
  , Cr = (i => (i[i.NO = 0] = "NO",
i[i.YES = 1] = "YES",
i[i.AUTO = 2] = "AUTO",
i[i.BLEND = 0] = "BLEND",
i[i.CLEAR = 1] = "CLEAR",
i[i.BLIT = 2] = "BLIT",
i))(Cr || {})
  , Zh = (i => (i[i.AUTO = 0] = "AUTO",
i[i.MANUAL = 1] = "MANUAL",
i))(Zh || {})
  , qe = (i => (i.LOW = "lowp",
i.MEDIUM = "mediump",
i.HIGH = "highp",
i))(qe || {})
  , fe = (i => (i[i.NONE = 0] = "NONE",
i[i.SCISSOR = 1] = "SCISSOR",
i[i.STENCIL = 2] = "STENCIL",
i[i.SPRITE = 3] = "SPRITE",
i[i.COLOR = 4] = "COLOR",
i))(fe || {})
  , he = (i => (i[i.NONE = 0] = "NONE",
i[i.LOW = 2] = "LOW",
i[i.MEDIUM = 4] = "MEDIUM",
i[i.HIGH = 8] = "HIGH",
i))(he || {})
  , Mr = (i => (i[i.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER",
i[i.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER",
i[i.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER",
i))(Mr || {});
const bp = {
    createCanvas: (i, t) => {
        const e = document.createElement("canvas");
        return e.width = i,
        e.height = t,
        e
    }
    ,
    getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
    getWebGLRenderingContext: () => WebGLRenderingContext,
    getNavigator: () => navigator,
    getBaseUrl: () => document.baseURI ?? window.location.href,
    getFontFaceSet: () => document.fonts,
    fetch: (i, t) => fetch(i, t),
    parseXML: i => new DOMParser().parseFromString(i, "text/xml")
}
  , nt = {
    ADAPTER: bp,
    RESOLUTION: 1,
    CREATE_IMAGE_BITMAP: !1,
    ROUND_PIXELS: !1
};
var oo = /iPhone/i
  , Wl = /iPod/i
  , Xl = /iPad/i
  , zl = /\biOS-universal(?:.+)Mac\b/i
  , ho = /\bAndroid(?:.+)Mobile\b/i
  , Yl = /Android/i
  , ji = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
  , Tn = /Silk/i
  , $r = /Windows Phone/i
  , ql = /\bWindows(?:.+)ARM\b/i
  , Kl = /BlackBerry/i
  , Zl = /BB10/i
  , Ql = /Opera Mini/i
  , Jl = /\b(CriOS|Chrome)(?:.+)Mobile/i
  , tu = /Mobile(?:.+)Firefox\b/i
  , eu = function(i) {
    return typeof i < "u" && i.platform === "MacIntel" && typeof i.maxTouchPoints == "number" && i.maxTouchPoints > 1 && typeof MSStream > "u"
};
function Tp(i) {
    return function(t) {
        return t.test(i)
    }
}
function ru(i) {
    var t = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    !i && typeof navigator < "u" ? t = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof i == "string" ? t.userAgent = i : i && i.userAgent && (t = {
        userAgent: i.userAgent,
        platform: i.platform,
        maxTouchPoints: i.maxTouchPoints || 0
    });
    var e = t.userAgent
      , r = e.split("[FBAN");
    typeof r[1] < "u" && (e = r[0]),
    r = e.split("Twitter"),
    typeof r[1] < "u" && (e = r[0]);
    var s = Tp(e)
      , n = {
        apple: {
            phone: s(oo) && !s($r),
            ipod: s(Wl),
            tablet: !s(oo) && (s(Xl) || eu(t)) && !s($r),
            universal: s(zl),
            device: (s(oo) || s(Wl) || s(Xl) || s(zl) || eu(t)) && !s($r)
        },
        amazon: {
            phone: s(ji),
            tablet: !s(ji) && s(Tn),
            device: s(ji) || s(Tn)
        },
        android: {
            phone: !s($r) && s(ji) || !s($r) && s(ho),
            tablet: !s($r) && !s(ji) && !s(ho) && (s(Tn) || s(Yl)),
            device: !s($r) && (s(ji) || s(Tn) || s(ho) || s(Yl)) || s(/\bokhttp\b/i)
        },
        windows: {
            phone: s($r),
            tablet: s(ql),
            device: s($r) || s(ql)
        },
        other: {
            blackberry: s(Kl),
            blackberry10: s(Zl),
            opera: s(Ql),
            firefox: s(tu),
            chrome: s(Jl),
            device: s(Kl) || s(Zl) || s(Ql) || s(tu) || s(Jl)
        },
        any: !1,
        phone: !1,
        tablet: !1
    };
    return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device,
    n.phone = n.apple.phone || n.android.phone || n.windows.phone,
    n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet,
    n
}
const wp = ru.default ?? ru
  , Pr = wp(globalThis.navigator);
nt.RETINA_PREFIX = /@([0-9\.]+)x/;
nt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var Cc = {
    exports: {}
};
(function(i) {
    var t = Object.prototype.hasOwnProperty
      , e = "~";
    function r() {}
    Object.create && (r.prototype = Object.create(null),
    new r().__proto__ || (e = !1));
    function s(l, c, p) {
        this.fn = l,
        this.context = c,
        this.once = p || !1
    }
    function n(l, c, p, m, f) {
        if (typeof p != "function")
            throw new TypeError("The listener must be a function");
        var v = new s(p,m || l,f)
          , _ = e ? e + c : c;
        return l._events[_] ? l._events[_].fn ? l._events[_] = [l._events[_], v] : l._events[_].push(v) : (l._events[_] = v,
        l._eventsCount++),
        l
    }
    function a(l, c) {
        --l._eventsCount === 0 ? l._events = new r : delete l._events[c]
    }
    function o() {
        this._events = new r,
        this._eventsCount = 0
    }
    o.prototype.eventNames = function() {
        var c = [], p, m;
        if (this._eventsCount === 0)
            return c;
        for (m in p = this._events)
            t.call(p, m) && c.push(e ? m.slice(1) : m);
        return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(p)) : c
    }
    ,
    o.prototype.listeners = function(c) {
        var p = e ? e + c : c
          , m = this._events[p];
        if (!m)
            return [];
        if (m.fn)
            return [m.fn];
        for (var f = 0, v = m.length, _ = new Array(v); f < v; f++)
            _[f] = m[f].fn;
        return _
    }
    ,
    o.prototype.listenerCount = function(c) {
        var p = e ? e + c : c
          , m = this._events[p];
        return m ? m.fn ? 1 : m.length : 0
    }
    ,
    o.prototype.emit = function(c, p, m, f, v, _) {
        var T = e ? e + c : c;
        if (!this._events[T])
            return !1;
        var A = this._events[T], E = arguments.length, I, S;
        if (A.fn) {
            switch (A.once && this.removeListener(c, A.fn, void 0, !0),
            E) {
            case 1:
                return A.fn.call(A.context),
                !0;
            case 2:
                return A.fn.call(A.context, p),
                !0;
            case 3:
                return A.fn.call(A.context, p, m),
                !0;
            case 4:
                return A.fn.call(A.context, p, m, f),
                !0;
            case 5:
                return A.fn.call(A.context, p, m, f, v),
                !0;
            case 6:
                return A.fn.call(A.context, p, m, f, v, _),
                !0
            }
            for (S = 1,
            I = new Array(E - 1); S < E; S++)
                I[S - 1] = arguments[S];
            A.fn.apply(A.context, I)
        } else {
            var P = A.length, k;
            for (S = 0; S < P; S++)
                switch (A[S].once && this.removeListener(c, A[S].fn, void 0, !0),
                E) {
                case 1:
                    A[S].fn.call(A[S].context);
                    break;
                case 2:
                    A[S].fn.call(A[S].context, p);
                    break;
                case 3:
                    A[S].fn.call(A[S].context, p, m);
                    break;
                case 4:
                    A[S].fn.call(A[S].context, p, m, f);
                    break;
                default:
                    if (!I)
                        for (k = 1,
                        I = new Array(E - 1); k < E; k++)
                            I[k - 1] = arguments[k];
                    A[S].fn.apply(A[S].context, I)
                }
        }
        return !0
    }
    ,
    o.prototype.on = function(c, p, m) {
        return n(this, c, p, m, !1)
    }
    ,
    o.prototype.once = function(c, p, m) {
        return n(this, c, p, m, !0)
    }
    ,
    o.prototype.removeListener = function(c, p, m, f) {
        var v = e ? e + c : c;
        if (!this._events[v])
            return this;
        if (!p)
            return a(this, v),
            this;
        var _ = this._events[v];
        if (_.fn)
            _.fn === p && (!f || _.once) && (!m || _.context === m) && a(this, v);
        else {
            for (var T = 0, A = [], E = _.length; T < E; T++)
                (_[T].fn !== p || f && !_[T].once || m && _[T].context !== m) && A.push(_[T]);
            A.length ? this._events[v] = A.length === 1 ? A[0] : A : a(this, v)
        }
        return this
    }
    ,
    o.prototype.removeAllListeners = function(c) {
        var p;
        return c ? (p = e ? e + c : c,
        this._events[p] && a(this, p)) : (this._events = new r,
        this._eventsCount = 0),
        this
    }
    ,
    o.prototype.off = o.prototype.removeListener,
    o.prototype.addListener = o.prototype.on,
    o.prefixed = e,
    o.EventEmitter = o,
    i.exports = o
}
)(Cc);
var Ep = Cc.exports;
const vs = Aa(Ep);
var Qh = {
    exports: {}
};
Qh.exports = Sa;
Qh.exports.default = Sa;
function Sa(i, t, e) {
    e = e || 2;
    var r = t && t.length
      , s = r ? t[0] * e : i.length
      , n = Ic(i, 0, s, e, !0)
      , a = [];
    if (!n || n.next === n.prev)
        return a;
    var o, l, c, p, m, f, v;
    if (r && (n = Rp(i, t, n, e)),
    i.length > 80 * e) {
        o = c = i[0],
        l = p = i[1];
        for (var _ = e; _ < s; _ += e)
            m = i[_],
            f = i[_ + 1],
            m < o && (o = m),
            f < l && (l = f),
            m > c && (c = m),
            f > p && (p = f);
        v = Math.max(c - o, p - l),
        v = v !== 0 ? 32767 / v : 0
    }
    return Js(n, a, e, o, l, v, 0),
    a
}
function Ic(i, t, e, r, s) {
    var n, a;
    if (s === Jo(i, t, e, r) > 0)
        for (n = t; n < e; n += r)
            a = iu(n, i[n], i[n + 1], a);
    else
        for (n = e - r; n >= t; n -= r)
            a = iu(n, i[n], i[n + 1], a);
    return a && Ca(a, a.next) && (en(a),
    a = a.next),
    a
}
function Bi(i, t) {
    if (!i)
        return i;
    t || (t = i);
    var e = i, r;
    do
        if (r = !1,
        !e.steiner && (Ca(e, e.next) || se(e.prev, e, e.next) === 0)) {
            if (en(e),
            e = t = e.prev,
            e === e.next)
                break;
            r = !0
        } else
            e = e.next;
    while (r || e !== t);
    return t
}
function Js(i, t, e, r, s, n, a) {
    if (i) {
        !a && n && Fp(i, r, s, n);
        for (var o = i, l, c; i.prev !== i.next; ) {
            if (l = i.prev,
            c = i.next,
            n ? Sp(i, r, s, n) : Ap(i)) {
                t.push(l.i / e | 0),
                t.push(i.i / e | 0),
                t.push(c.i / e | 0),
                en(i),
                i = c.next,
                o = c.next;
                continue
            }
            if (i = c,
            i === o) {
                a ? a === 1 ? (i = Cp(Bi(i), t, e),
                Js(i, t, e, r, s, n, 2)) : a === 2 && Ip(i, t, e, r, s, n) : Js(Bi(i), t, e, r, s, n, 1);
                break
            }
        }
    }
}
function Ap(i) {
    var t = i.prev
      , e = i
      , r = i.next;
    if (se(t, e, r) >= 0)
        return !1;
    for (var s = t.x, n = e.x, a = r.x, o = t.y, l = e.y, c = r.y, p = s < n ? s < a ? s : a : n < a ? n : a, m = o < l ? o < c ? o : c : l < c ? l : c, f = s > n ? s > a ? s : a : n > a ? n : a, v = o > l ? o > c ? o : c : l > c ? l : c, _ = r.next; _ !== t; ) {
        if (_.x >= p && _.x <= f && _.y >= m && _.y <= v && is(s, o, n, l, a, c, _.x, _.y) && se(_.prev, _, _.next) >= 0)
            return !1;
        _ = _.next
    }
    return !0
}
function Sp(i, t, e, r) {
    var s = i.prev
      , n = i
      , a = i.next;
    if (se(s, n, a) >= 0)
        return !1;
    for (var o = s.x, l = n.x, c = a.x, p = s.y, m = n.y, f = a.y, v = o < l ? o < c ? o : c : l < c ? l : c, _ = p < m ? p < f ? p : f : m < f ? m : f, T = o > l ? o > c ? o : c : l > c ? l : c, A = p > m ? p > f ? p : f : m > f ? m : f, E = Zo(v, _, t, e, r), I = Zo(T, A, t, e, r), S = i.prevZ, P = i.nextZ; S && S.z >= E && P && P.z <= I; ) {
        if (S.x >= v && S.x <= T && S.y >= _ && S.y <= A && S !== s && S !== a && is(o, p, l, m, c, f, S.x, S.y) && se(S.prev, S, S.next) >= 0 || (S = S.prevZ,
        P.x >= v && P.x <= T && P.y >= _ && P.y <= A && P !== s && P !== a && is(o, p, l, m, c, f, P.x, P.y) && se(P.prev, P, P.next) >= 0))
            return !1;
        P = P.nextZ
    }
    for (; S && S.z >= E; ) {
        if (S.x >= v && S.x <= T && S.y >= _ && S.y <= A && S !== s && S !== a && is(o, p, l, m, c, f, S.x, S.y) && se(S.prev, S, S.next) >= 0)
            return !1;
        S = S.prevZ
    }
    for (; P && P.z <= I; ) {
        if (P.x >= v && P.x <= T && P.y >= _ && P.y <= A && P !== s && P !== a && is(o, p, l, m, c, f, P.x, P.y) && se(P.prev, P, P.next) >= 0)
            return !1;
        P = P.nextZ
    }
    return !0
}
function Cp(i, t, e) {
    var r = i;
    do {
        var s = r.prev
          , n = r.next.next;
        !Ca(s, n) && Rc(s, r, r.next, n) && tn(s, n) && tn(n, s) && (t.push(s.i / e | 0),
        t.push(r.i / e | 0),
        t.push(n.i / e | 0),
        en(r),
        en(r.next),
        r = i = n),
        r = r.next
    } while (r !== i);
    return Bi(r)
}
function Ip(i, t, e, r, s, n) {
    var a = i;
    do {
        for (var o = a.next.next; o !== a.prev; ) {
            if (a.i !== o.i && Lp(a, o)) {
                var l = Pc(a, o);
                a = Bi(a, a.next),
                l = Bi(l, l.next),
                Js(a, t, e, r, s, n, 0),
                Js(l, t, e, r, s, n, 0);
                return
            }
            o = o.next
        }
        a = a.next
    } while (a !== i)
}
function Rp(i, t, e, r) {
    var s = [], n, a, o, l, c;
    for (n = 0,
    a = t.length; n < a; n++)
        o = t[n] * r,
        l = n < a - 1 ? t[n + 1] * r : i.length,
        c = Ic(i, o, l, r, !1),
        c === c.next && (c.steiner = !0),
        s.push(Np(c));
    for (s.sort(Pp),
    n = 0; n < s.length; n++)
        e = Mp(s[n], e);
    return e
}
function Pp(i, t) {
    return i.x - t.x
}
function Mp(i, t) {
    var e = Dp(i, t);
    if (!e)
        return t;
    var r = Pc(e, i);
    return Bi(r, r.next),
    Bi(e, e.next)
}
function Dp(i, t) {
    var e = t, r = i.x, s = i.y, n = -1 / 0, a;
    do {
        if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
            var o = e.x + (s - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
            if (o <= r && o > n && (n = o,
            a = e.x < e.next.x ? e : e.next,
            o === r))
                return a
        }
        e = e.next
    } while (e !== t);
    if (!a)
        return null;
    var l = a, c = a.x, p = a.y, m = 1 / 0, f;
    e = a;
    do
        r >= e.x && e.x >= c && r !== e.x && is(s < p ? r : n, s, c, p, s < p ? n : r, s, e.x, e.y) && (f = Math.abs(s - e.y) / (r - e.x),
        tn(e, i) && (f < m || f === m && (e.x > a.x || e.x === a.x && Bp(a, e))) && (a = e,
        m = f)),
        e = e.next;
    while (e !== l);
    return a
}
function Bp(i, t) {
    return se(i.prev, i, t.prev) < 0 && se(t.next, i, i.next) < 0
}
function Fp(i, t, e, r) {
    var s = i;
    do
        s.z === 0 && (s.z = Zo(s.x, s.y, t, e, r)),
        s.prevZ = s.prev,
        s.nextZ = s.next,
        s = s.next;
    while (s !== i);
    s.prevZ.nextZ = null,
    s.prevZ = null,
    Op(s)
}
function Op(i) {
    var t, e, r, s, n, a, o, l, c = 1;
    do {
        for (e = i,
        i = null,
        n = null,
        a = 0; e; ) {
            for (a++,
            r = e,
            o = 0,
            t = 0; t < c && (o++,
            r = r.nextZ,
            !!r); t++)
                ;
            for (l = c; o > 0 || l > 0 && r; )
                o !== 0 && (l === 0 || !r || e.z <= r.z) ? (s = e,
                e = e.nextZ,
                o--) : (s = r,
                r = r.nextZ,
                l--),
                n ? n.nextZ = s : i = s,
                s.prevZ = n,
                n = s;
            e = r
        }
        n.nextZ = null,
        c *= 2
    } while (a > 1);
    return i
}
function Zo(i, t, e, r, s) {
    return i = (i - e) * s | 0,
    t = (t - r) * s | 0,
    i = (i | i << 8) & 16711935,
    i = (i | i << 4) & 252645135,
    i = (i | i << 2) & 858993459,
    i = (i | i << 1) & 1431655765,
    t = (t | t << 8) & 16711935,
    t = (t | t << 4) & 252645135,
    t = (t | t << 2) & 858993459,
    t = (t | t << 1) & 1431655765,
    i | t << 1
}
function Np(i) {
    var t = i
      , e = i;
    do
        (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t),
        t = t.next;
    while (t !== i);
    return e
}
function is(i, t, e, r, s, n, a, o) {
    return (s - a) * (t - o) >= (i - a) * (n - o) && (i - a) * (r - o) >= (e - a) * (t - o) && (e - a) * (n - o) >= (s - a) * (r - o)
}
function Lp(i, t) {
    return i.next.i !== t.i && i.prev.i !== t.i && !kp(i, t) && (tn(i, t) && tn(t, i) && Up(i, t) && (se(i.prev, i, t.prev) || se(i, t.prev, t)) || Ca(i, t) && se(i.prev, i, i.next) > 0 && se(t.prev, t, t.next) > 0)
}
function se(i, t, e) {
    return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y)
}
function Ca(i, t) {
    return i.x === t.x && i.y === t.y
}
function Rc(i, t, e, r) {
    var s = En(se(i, t, e))
      , n = En(se(i, t, r))
      , a = En(se(e, r, i))
      , o = En(se(e, r, t));
    return !!(s !== n && a !== o || s === 0 && wn(i, e, t) || n === 0 && wn(i, r, t) || a === 0 && wn(e, i, r) || o === 0 && wn(e, t, r))
}
function wn(i, t, e) {
    return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y)
}
function En(i) {
    return i > 0 ? 1 : i < 0 ? -1 : 0
}
function kp(i, t) {
    var e = i;
    do {
        if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && Rc(e, e.next, i, t))
            return !0;
        e = e.next
    } while (e !== i);
    return !1
}
function tn(i, t) {
    return se(i.prev, i, i.next) < 0 ? se(i, t, i.next) >= 0 && se(i, i.prev, t) >= 0 : se(i, t, i.prev) < 0 || se(i, i.next, t) < 0
}
function Up(i, t) {
    var e = i
      , r = !1
      , s = (i.x + t.x) / 2
      , n = (i.y + t.y) / 2;
    do
        e.y > n != e.next.y > n && e.next.y !== e.y && s < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (r = !r),
        e = e.next;
    while (e !== i);
    return r
}
function Pc(i, t) {
    var e = new Qo(i.i,i.x,i.y)
      , r = new Qo(t.i,t.x,t.y)
      , s = i.next
      , n = t.prev;
    return i.next = t,
    t.prev = i,
    e.next = s,
    s.prev = e,
    r.next = e,
    e.prev = r,
    n.next = r,
    r.prev = n,
    r
}
function iu(i, t, e, r) {
    var s = new Qo(i,t,e);
    return r ? (s.next = r.next,
    s.prev = r,
    r.next.prev = s,
    r.next = s) : (s.prev = s,
    s.next = s),
    s
}
function en(i) {
    i.next.prev = i.prev,
    i.prev.next = i.next,
    i.prevZ && (i.prevZ.nextZ = i.nextZ),
    i.nextZ && (i.nextZ.prevZ = i.prevZ)
}
function Qo(i, t, e) {
    this.i = i,
    this.x = t,
    this.y = e,
    this.prev = null,
    this.next = null,
    this.z = 0,
    this.prevZ = null,
    this.nextZ = null,
    this.steiner = !1
}
Sa.deviation = function(i, t, e, r) {
    var s = t && t.length
      , n = s ? t[0] * e : i.length
      , a = Math.abs(Jo(i, 0, n, e));
    if (s)
        for (var o = 0, l = t.length; o < l; o++) {
            var c = t[o] * e
              , p = o < l - 1 ? t[o + 1] * e : i.length;
            a -= Math.abs(Jo(i, c, p, e))
        }
    var m = 0;
    for (o = 0; o < r.length; o += 3) {
        var f = r[o] * e
          , v = r[o + 1] * e
          , _ = r[o + 2] * e;
        m += Math.abs((i[f] - i[_]) * (i[v + 1] - i[f + 1]) - (i[f] - i[v]) * (i[_ + 1] - i[f + 1]))
    }
    return a === 0 && m === 0 ? 0 : Math.abs((m - a) / a)
}
;
function Jo(i, t, e, r) {
    for (var s = 0, n = t, a = e - r; n < e; n += r)
        s += (i[a] - i[n]) * (i[n + 1] + i[a + 1]),
        a = n;
    return s
}
Sa.flatten = function(i) {
    for (var t = i[0][0].length, e = {
        vertices: [],
        holes: [],
        dimensions: t
    }, r = 0, s = 0; s < i.length; s++) {
        for (var n = 0; n < i[s].length; n++)
            for (var a = 0; a < t; a++)
                e.vertices.push(i[s][n][a]);
        s > 0 && (r += i[s - 1].length,
        e.holes.push(r))
    }
    return e
}
;
var Gp = Qh.exports;
const Mc = Aa(Gp);
var aa = {
    exports: {}
};
/*! https://mths.be/punycode v1.4.1 by @mathias */
aa.exports;
(function(i, t) {
    (function(e) {
        var r = t && !t.nodeType && t
          , s = i && !i.nodeType && i
          , n = typeof ns == "object" && ns;
        (n.global === n || n.window === n || n.self === n) && (e = n);
        var a, o = 2147483647, l = 36, c = 1, p = 26, m = 38, f = 700, v = 72, _ = 128, T = "-", A = /^xn--/, E = /[^\x20-\x7E]/, I = /[\x2E\u3002\uFF0E\uFF61]/g, S = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }, P = l - c, k = Math.floor, $ = String.fromCharCode, d;
        function O(Q) {
            throw new RangeError(S[Q])
        }
        function N(Q, K) {
            for (var xt = Q.length, Ct = []; xt--; )
                Ct[xt] = K(Q[xt]);
            return Ct
        }
        function z(Q, K) {
            var xt = Q.split("@")
              , Ct = "";
            xt.length > 1 && (Ct = xt[0] + "@",
            Q = xt[1]),
            Q = Q.replace(I, ".");
            var It = Q.split(".")
              , kt = N(It, K).join(".");
            return Ct + kt
        }
        function J(Q) {
            for (var K = [], xt = 0, Ct = Q.length, It, kt; xt < Ct; )
                It = Q.charCodeAt(xt++),
                It >= 55296 && It <= 56319 && xt < Ct ? (kt = Q.charCodeAt(xt++),
                (kt & 64512) == 56320 ? K.push(((It & 1023) << 10) + (kt & 1023) + 65536) : (K.push(It),
                xt--)) : K.push(It);
            return K
        }
        function V(Q) {
            return N(Q, function(K) {
                var xt = "";
                return K > 65535 && (K -= 65536,
                xt += $(K >>> 10 & 1023 | 55296),
                K = 56320 | K & 1023),
                xt += $(K),
                xt
            }).join("")
        }
        function B(Q) {
            return Q - 48 < 10 ? Q - 22 : Q - 65 < 26 ? Q - 65 : Q - 97 < 26 ? Q - 97 : l
        }
        function j(Q, K) {
            return Q + 22 + 75 * (Q < 26) - ((K != 0) << 5)
        }
        function rt(Q, K, xt) {
            var Ct = 0;
            for (Q = xt ? k(Q / f) : Q >> 1,
            Q += k(Q / K); Q > P * p >> 1; Ct += l)
                Q = k(Q / P);
            return k(Ct + (P + 1) * Q / (Q + m))
        }
        function at(Q) {
            var K = [], xt = Q.length, Ct, It = 0, kt = _, Ot = v, Mt, $t, qt, Dt, Yt, _t, Kt, Xt, me;
            for (Mt = Q.lastIndexOf(T),
            Mt < 0 && (Mt = 0),
            $t = 0; $t < Mt; ++$t)
                Q.charCodeAt($t) >= 128 && O("not-basic"),
                K.push(Q.charCodeAt($t));
            for (qt = Mt > 0 ? Mt + 1 : 0; qt < xt; ) {
                for (Dt = It,
                Yt = 1,
                _t = l; qt >= xt && O("invalid-input"),
                Kt = B(Q.charCodeAt(qt++)),
                (Kt >= l || Kt > k((o - It) / Yt)) && O("overflow"),
                It += Kt * Yt,
                Xt = _t <= Ot ? c : _t >= Ot + p ? p : _t - Ot,
                !(Kt < Xt); _t += l)
                    me = l - Xt,
                    Yt > k(o / me) && O("overflow"),
                    Yt *= me;
                Ct = K.length + 1,
                Ot = rt(It - Dt, Ct, Dt == 0),
                k(It / Ct) > o - kt && O("overflow"),
                kt += k(It / Ct),
                It %= Ct,
                K.splice(It++, 0, kt)
            }
            return V(K)
        }
        function st(Q) {
            var K, xt, Ct, It, kt, Ot, Mt, $t, qt, Dt, Yt, _t = [], Kt, Xt, me, Ee;
            for (Q = J(Q),
            Kt = Q.length,
            K = _,
            xt = 0,
            kt = v,
            Ot = 0; Ot < Kt; ++Ot)
                Yt = Q[Ot],
                Yt < 128 && _t.push($(Yt));
            for (Ct = It = _t.length,
            It && _t.push(T); Ct < Kt; ) {
                for (Mt = o,
                Ot = 0; Ot < Kt; ++Ot)
                    Yt = Q[Ot],
                    Yt >= K && Yt < Mt && (Mt = Yt);
                for (Xt = Ct + 1,
                Mt - K > k((o - xt) / Xt) && O("overflow"),
                xt += (Mt - K) * Xt,
                K = Mt,
                Ot = 0; Ot < Kt; ++Ot)
                    if (Yt = Q[Ot],
                    Yt < K && ++xt > o && O("overflow"),
                    Yt == K) {
                        for ($t = xt,
                        qt = l; Dt = qt <= kt ? c : qt >= kt + p ? p : qt - kt,
                        !($t < Dt); qt += l)
                            Ee = $t - Dt,
                            me = l - Dt,
                            _t.push($(j(Dt + Ee % me, 0))),
                            $t = k(Ee / me);
                        _t.push($(j($t, 0))),
                        kt = rt(xt, Xt, Ct == It),
                        xt = 0,
                        ++Ct
                    }
                ++xt,
                ++K
            }
            return _t.join("")
        }
        function dt(Q) {
            return z(Q, function(K) {
                return A.test(K) ? at(K.slice(4).toLowerCase()) : K
            })
        }
        function Ft(Q) {
            return z(Q, function(K) {
                return E.test(K) ? "xn--" + st(K) : K
            })
        }
        if (a = {
            version: "1.4.1",
            ucs2: {
                decode: J,
                encode: V
            },
            decode: at,
            encode: st,
            toASCII: Ft,
            toUnicode: dt
        },
        r && s)
            if (i.exports == r)
                s.exports = a;
            else
                for (d in a)
                    a.hasOwnProperty(d) && (r[d] = a[d]);
        else
            e.punycode = a
    }
    )(ns)
}
)(aa, aa.exports);
var Hp = aa.exports, Vp = Error, $p = EvalError, jp = RangeError, Wp = ReferenceError, Dc = SyntaxError, an = TypeError, Xp = URIError, zp = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return !1;
    if (typeof Symbol.iterator == "symbol")
        return !0;
    var t = {}
      , e = Symbol("test")
      , r = Object(e);
    if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
        return !1;
    var s = 42;
    t[e] = s;
    for (e in t)
        return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
        return !1;
    var n = Object.getOwnPropertySymbols(t);
    if (n.length !== 1 || n[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e))
        return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
        var a = Object.getOwnPropertyDescriptor(t, e);
        if (a.value !== s || a.enumerable !== !0)
            return !1
    }
    return !0
}, su = typeof Symbol < "u" && Symbol, Yp = zp, qp = function() {
    return typeof su != "function" || typeof Symbol != "function" || typeof su("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Yp()
}, lo = {
    __proto__: null,
    foo: {}
}, Kp = Object, Zp = function() {
    return {
        __proto__: lo
    }.foo === lo.foo && !(lo instanceof Kp)
}, Qp = "Function.prototype.bind called on incompatible ", Jp = Object.prototype.toString, tg = Math.max, eg = "[object Function]", nu = function(t, e) {
    for (var r = [], s = 0; s < t.length; s += 1)
        r[s] = t[s];
    for (var n = 0; n < e.length; n += 1)
        r[n + t.length] = e[n];
    return r
}, rg = function(t, e) {
    for (var r = [], s = e, n = 0; s < t.length; s += 1,
    n += 1)
        r[n] = t[s];
    return r
}, ig = function(i, t) {
    for (var e = "", r = 0; r < i.length; r += 1)
        e += i[r],
        r + 1 < i.length && (e += t);
    return e
}, sg = function(t) {
    var e = this;
    if (typeof e != "function" || Jp.apply(e) !== eg)
        throw new TypeError(Qp + e);
    for (var r = rg(arguments, 1), s, n = function() {
        if (this instanceof s) {
            var p = e.apply(this, nu(r, arguments));
            return Object(p) === p ? p : this
        }
        return e.apply(t, nu(r, arguments))
    }, a = tg(0, e.length - r.length), o = [], l = 0; l < a; l++)
        o[l] = "$" + l;
    if (s = Function("binder", "return function (" + ig(o, ",") + "){ return binder.apply(this,arguments); }")(n),
    e.prototype) {
        var c = function() {};
        c.prototype = e.prototype,
        s.prototype = new c,
        c.prototype = null
    }
    return s
}, ng = sg, Jh = Function.prototype.bind || ng, ag = Function.prototype.call, og = Object.prototype.hasOwnProperty, hg = Jh, lg = hg.call(ag, og), Gt, ug = Vp, cg = $p, dg = jp, fg = Wp, fs = Dc, os = an, pg = Xp, Bc = Function, uo = function(i) {
    try {
        return Bc('"use strict"; return (' + i + ").constructor;")()
    } catch {}
}, Ii = Object.getOwnPropertyDescriptor;
if (Ii)
    try {
        Ii({}, "")
    } catch {
        Ii = null
    }
var co = function() {
    throw new os
}
  , gg = Ii ? function() {
    try {
        return arguments.callee,
        co
    } catch {
        try {
            return Ii(arguments, "callee").get
        } catch {
            return co
        }
    }
}() : co
  , Wi = qp()
  , mg = Zp()
  , ve = Object.getPrototypeOf || (mg ? function(i) {
    return i.__proto__
}
: null)
  , Ki = {}
  , yg = typeof Uint8Array > "u" || !ve ? Gt : ve(Uint8Array)
  , Ri = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? Gt : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Gt : ArrayBuffer,
    "%ArrayIteratorPrototype%": Wi && ve ? ve([][Symbol.iterator]()) : Gt,
    "%AsyncFromSyncIteratorPrototype%": Gt,
    "%AsyncFunction%": Ki,
    "%AsyncGenerator%": Ki,
    "%AsyncGeneratorFunction%": Ki,
    "%AsyncIteratorPrototype%": Ki,
    "%Atomics%": typeof Atomics > "u" ? Gt : Atomics,
    "%BigInt%": typeof BigInt > "u" ? Gt : BigInt,
    "%BigInt64Array%": typeof BigInt64Array > "u" ? Gt : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array > "u" ? Gt : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView > "u" ? Gt : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": ug,
    "%eval%": eval,
    "%EvalError%": cg,
    "%Float32Array%": typeof Float32Array > "u" ? Gt : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? Gt : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Gt : FinalizationRegistry,
    "%Function%": Bc,
    "%GeneratorFunction%": Ki,
    "%Int8Array%": typeof Int8Array > "u" ? Gt : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? Gt : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? Gt : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": Wi && ve ? ve(ve([][Symbol.iterator]())) : Gt,
    "%JSON%": typeof JSON == "object" ? JSON : Gt,
    "%Map%": typeof Map > "u" ? Gt : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !Wi || !ve ? Gt : ve(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? Gt : Promise,
    "%Proxy%": typeof Proxy > "u" ? Gt : Proxy,
    "%RangeError%": dg,
    "%ReferenceError%": fg,
    "%Reflect%": typeof Reflect > "u" ? Gt : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? Gt : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !Wi || !ve ? Gt : ve(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Gt : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": Wi && ve ? ve(""[Symbol.iterator]()) : Gt,
    "%Symbol%": Wi ? Symbol : Gt,
    "%SyntaxError%": fs,
    "%ThrowTypeError%": gg,
    "%TypedArray%": yg,
    "%TypeError%": os,
    "%Uint8Array%": typeof Uint8Array > "u" ? Gt : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Gt : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? Gt : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? Gt : Uint32Array,
    "%URIError%": pg,
    "%WeakMap%": typeof WeakMap > "u" ? Gt : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? Gt : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? Gt : WeakSet
};
if (ve)
    try {
        null.error
    } catch (i) {
        var vg = ve(ve(i));
        Ri["%Error.prototype%"] = vg
    }
var _g = function i(t) {
    var e;
    if (t === "%AsyncFunction%")
        e = uo("async function () {}");
    else if (t === "%GeneratorFunction%")
        e = uo("function* () {}");
    else if (t === "%AsyncGeneratorFunction%")
        e = uo("async function* () {}");
    else if (t === "%AsyncGenerator%") {
        var r = i("%AsyncGeneratorFunction%");
        r && (e = r.prototype)
    } else if (t === "%AsyncIteratorPrototype%") {
        var s = i("%AsyncGenerator%");
        s && ve && (e = ve(s.prototype))
    }
    return Ri[t] = e,
    e
}, au = {
    __proto__: null,
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, on = Jh, oa = lg, xg = on.call(Function.call, Array.prototype.concat), bg = on.call(Function.apply, Array.prototype.splice), ou = on.call(Function.call, String.prototype.replace), ha = on.call(Function.call, String.prototype.slice), Tg = on.call(Function.call, RegExp.prototype.exec), wg = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Eg = /\\(\\)?/g, Ag = function(t) {
    var e = ha(t, 0, 1)
      , r = ha(t, -1);
    if (e === "%" && r !== "%")
        throw new fs("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && e !== "%")
        throw new fs("invalid intrinsic syntax, expected opening `%`");
    var s = [];
    return ou(t, wg, function(n, a, o, l) {
        s[s.length] = o ? ou(l, Eg, "$1") : a || n
    }),
    s
}, Sg = function(t, e) {
    var r = t, s;
    if (oa(au, r) && (s = au[r],
    r = "%" + s[0] + "%"),
    oa(Ri, r)) {
        var n = Ri[r];
        if (n === Ki && (n = _g(r)),
        typeof n > "u" && !e)
            throw new os("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return {
            alias: s,
            name: r,
            value: n
        }
    }
    throw new fs("intrinsic " + t + " does not exist!")
}, _s = function(t, e) {
    if (typeof t != "string" || t.length === 0)
        throw new os("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof e != "boolean")
        throw new os('"allowMissing" argument must be a boolean');
    if (Tg(/^%?[^%]*%?$/, t) === null)
        throw new fs("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var r = Ag(t)
      , s = r.length > 0 ? r[0] : ""
      , n = Sg("%" + s + "%", e)
      , a = n.name
      , o = n.value
      , l = !1
      , c = n.alias;
    c && (s = c[0],
    bg(r, xg([0, 1], c)));
    for (var p = 1, m = !0; p < r.length; p += 1) {
        var f = r[p]
          , v = ha(f, 0, 1)
          , _ = ha(f, -1);
        if ((v === '"' || v === "'" || v === "`" || _ === '"' || _ === "'" || _ === "`") && v !== _)
            throw new fs("property names with quotes must have matching quotes");
        if ((f === "constructor" || !m) && (l = !0),
        s += "." + f,
        a = "%" + s + "%",
        oa(Ri, a))
            o = Ri[a];
        else if (o != null) {
            if (!(f in o)) {
                if (!e)
                    throw new os("base intrinsic for " + t + " exists, but the property is not available.");
                return
            }
            if (Ii && p + 1 >= r.length) {
                var T = Ii(o, f);
                m = !!T,
                m && "get"in T && !("originalValue"in T.get) ? o = T.get : o = o[f]
            } else
                m = oa(o, f),
                o = o[f];
            m && !l && (Ri[a] = o)
        }
    }
    return o
}, Fc = {
    exports: {}
}, fo, hu;
function tl() {
    if (hu)
        return fo;
    hu = 1;
    var i = _s
      , t = i("%Object.defineProperty%", !0) || !1;
    if (t)
        try {
            t({}, "a", {
                value: 1
            })
        } catch {
            t = !1
        }
    return fo = t,
    fo
}
var Cg = _s
  , qn = Cg("%Object.getOwnPropertyDescriptor%", !0);
if (qn)
    try {
        qn([], "length")
    } catch {
        qn = null
    }
var Oc = qn
  , lu = tl()
  , Ig = Dc
  , Xi = an
  , uu = Oc
  , Rg = function(t, e, r) {
    if (!t || typeof t != "object" && typeof t != "function")
        throw new Xi("`obj` must be an object or a function`");
    if (typeof e != "string" && typeof e != "symbol")
        throw new Xi("`property` must be a string or a symbol`");
    if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
        throw new Xi("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
        throw new Xi("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
        throw new Xi("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && typeof arguments[6] != "boolean")
        throw new Xi("`loose`, if provided, must be a boolean");
    var s = arguments.length > 3 ? arguments[3] : null
      , n = arguments.length > 4 ? arguments[4] : null
      , a = arguments.length > 5 ? arguments[5] : null
      , o = arguments.length > 6 ? arguments[6] : !1
      , l = !!uu && uu(t, e);
    if (lu)
        lu(t, e, {
            configurable: a === null && l ? l.configurable : !a,
            enumerable: s === null && l ? l.enumerable : !s,
            value: r,
            writable: n === null && l ? l.writable : !n
        });
    else if (o || !s && !n && !a)
        t[e] = r;
    else
        throw new Ig("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")
}
  , th = tl()
  , Nc = function() {
    return !!th
};
Nc.hasArrayLengthDefineBug = function() {
    if (!th)
        return null;
    try {
        return th([], "length", {
            value: 1
        }).length !== 1
    } catch {
        return !0
    }
}
;
var Pg = Nc
  , Mg = _s
  , cu = Rg
  , Dg = Pg()
  , du = Oc
  , fu = an
  , Bg = Mg("%Math.floor%")
  , Fg = function(t, e) {
    if (typeof t != "function")
        throw new fu("`fn` is not a function");
    if (typeof e != "number" || e < 0 || e > 4294967295 || Bg(e) !== e)
        throw new fu("`length` must be a positive 32-bit integer");
    var r = arguments.length > 2 && !!arguments[2]
      , s = !0
      , n = !0;
    if ("length"in t && du) {
        var a = du(t, "length");
        a && !a.configurable && (s = !1),
        a && !a.writable && (n = !1)
    }
    return (s || n || !r) && (Dg ? cu(t, "length", e, !0, !0) : cu(t, "length", e)),
    t
};
(function(i) {
    var t = Jh
      , e = _s
      , r = Fg
      , s = an
      , n = e("%Function.prototype.apply%")
      , a = e("%Function.prototype.call%")
      , o = e("%Reflect.apply%", !0) || t.call(a, n)
      , l = tl()
      , c = e("%Math.max%");
    i.exports = function(f) {
        if (typeof f != "function")
            throw new s("a function is required");
        var v = o(t, a, arguments);
        return r(v, 1 + c(0, f.length - (arguments.length - 1)), !0)
    }
    ;
    var p = function() {
        return o(t, n, arguments)
    };
    l ? l(i.exports, "apply", {
        value: p
    }) : i.exports.apply = p
}
)(Fc);
var Og = Fc.exports
  , Lc = _s
  , kc = Og
  , Ng = kc(Lc("String.prototype.indexOf"))
  , Lg = function(t, e) {
    var r = Lc(t, !!e);
    return typeof r == "function" && Ng(t, ".prototype.") > -1 ? kc(r) : r
};
const kg = {}
  , Ug = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: kg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Gg = _p(Ug);
var el = typeof Map == "function" && Map.prototype
  , po = Object.getOwnPropertyDescriptor && el ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
  , la = el && po && typeof po.get == "function" ? po.get : null
  , pu = el && Map.prototype.forEach
  , rl = typeof Set == "function" && Set.prototype
  , go = Object.getOwnPropertyDescriptor && rl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
  , ua = rl && go && typeof go.get == "function" ? go.get : null
  , gu = rl && Set.prototype.forEach
  , Hg = typeof WeakMap == "function" && WeakMap.prototype
  , qs = Hg ? WeakMap.prototype.has : null
  , Vg = typeof WeakSet == "function" && WeakSet.prototype
  , Ks = Vg ? WeakSet.prototype.has : null
  , $g = typeof WeakRef == "function" && WeakRef.prototype
  , mu = $g ? WeakRef.prototype.deref : null
  , jg = Boolean.prototype.valueOf
  , Wg = Object.prototype.toString
  , Xg = Function.prototype.toString
  , zg = String.prototype.match
  , il = String.prototype.slice
  , ai = String.prototype.replace
  , Yg = String.prototype.toUpperCase
  , yu = String.prototype.toLowerCase
  , Uc = RegExp.prototype.test
  , vu = Array.prototype.concat
  , Ir = Array.prototype.join
  , qg = Array.prototype.slice
  , _u = Math.floor
  , eh = typeof BigInt == "function" ? BigInt.prototype.valueOf : null
  , mo = Object.getOwnPropertySymbols
  , rh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null
  , ps = typeof Symbol == "function" && typeof Symbol.iterator == "object"
  , Ie = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ps || !0) ? Symbol.toStringTag : null
  , Gc = Object.prototype.propertyIsEnumerable
  , xu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(i) {
    return i.__proto__
}
: null);
function bu(i, t) {
    if (i === 1 / 0 || i === -1 / 0 || i !== i || i && i > -1e3 && i < 1e3 || Uc.call(/e/, t))
        return t;
    var e = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof i == "number") {
        var r = i < 0 ? -_u(-i) : _u(i);
        if (r !== i) {
            var s = String(r)
              , n = il.call(t, s.length + 1);
            return ai.call(s, e, "$&_") + "." + ai.call(ai.call(n, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return ai.call(t, e, "$&_")
}
var ih = Gg
  , Tu = ih.custom
  , wu = Vc(Tu) ? Tu : null
  , Kg = function i(t, e, r, s) {
    var n = e || {};
    if (ii(n, "quoteStyle") && n.quoteStyle !== "single" && n.quoteStyle !== "double")
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (ii(n, "maxStringLength") && (typeof n.maxStringLength == "number" ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0 : n.maxStringLength !== null))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var a = ii(n, "customInspect") ? n.customInspect : !0;
    if (typeof a != "boolean" && a !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (ii(n, "indent") && n.indent !== null && n.indent !== "	" && !(parseInt(n.indent, 10) === n.indent && n.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (ii(n, "numericSeparator") && typeof n.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var o = n.numericSeparator;
    if (typeof t > "u")
        return "undefined";
    if (t === null)
        return "null";
    if (typeof t == "boolean")
        return t ? "true" : "false";
    if (typeof t == "string")
        return jc(t, n);
    if (typeof t == "number") {
        if (t === 0)
            return 1 / 0 / t > 0 ? "0" : "-0";
        var l = String(t);
        return o ? bu(t, l) : l
    }
    if (typeof t == "bigint") {
        var c = String(t) + "n";
        return o ? bu(t, c) : c
    }
    var p = typeof n.depth > "u" ? 5 : n.depth;
    if (typeof r > "u" && (r = 0),
    r >= p && p > 0 && typeof t == "object")
        return sh(t) ? "[Array]" : "[Object]";
    var m = pm(n, r);
    if (typeof s > "u")
        s = [];
    else if ($c(s, t) >= 0)
        return "[Circular]";
    function f(B, j, rt) {
        if (j && (s = qg.call(s),
        s.push(j)),
        rt) {
            var at = {
                depth: n.depth
            };
            return ii(n, "quoteStyle") && (at.quoteStyle = n.quoteStyle),
            i(B, at, r + 1, s)
        }
        return i(B, n, r + 1, s)
    }
    if (typeof t == "function" && !Eu(t)) {
        var v = nm(t)
          , _ = An(t, f);
        return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (_.length > 0 ? " { " + Ir.call(_, ", ") + " }" : "")
    }
    if (Vc(t)) {
        var T = ps ? ai.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : rh.call(t);
        return typeof t == "object" && !ps ? Bs(T) : T
    }
    if (cm(t)) {
        for (var A = "<" + yu.call(String(t.nodeName)), E = t.attributes || [], I = 0; I < E.length; I++)
            A += " " + E[I].name + "=" + Hc(Zg(E[I].value), "double", n);
        return A += ">",
        t.childNodes && t.childNodes.length && (A += "..."),
        A += "</" + yu.call(String(t.nodeName)) + ">",
        A
    }
    if (sh(t)) {
        if (t.length === 0)
            return "[]";
        var S = An(t, f);
        return m && !fm(S) ? "[" + nh(S, m) + "]" : "[ " + Ir.call(S, ", ") + " ]"
    }
    if (Jg(t)) {
        var P = An(t, f);
        return !("cause"in Error.prototype) && "cause"in t && !Gc.call(t, "cause") ? "{ [" + String(t) + "] " + Ir.call(vu.call("[cause]: " + f(t.cause), P), ", ") + " }" : P.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ir.call(P, ", ") + " }"
    }
    if (typeof t == "object" && a) {
        if (wu && typeof t[wu] == "function" && ih)
            return ih(t, {
                depth: p - r
            });
        if (a !== "symbol" && typeof t.inspect == "function")
            return t.inspect()
    }
    if (am(t)) {
        var k = [];
        return pu && pu.call(t, function(B, j) {
            k.push(f(j, t, !0) + " => " + f(B, t))
        }),
        Au("Map", la.call(t), k, m)
    }
    if (lm(t)) {
        var $ = [];
        return gu && gu.call(t, function(B) {
            $.push(f(B, t))
        }),
        Au("Set", ua.call(t), $, m)
    }
    if (om(t))
        return yo("WeakMap");
    if (um(t))
        return yo("WeakSet");
    if (hm(t))
        return yo("WeakRef");
    if (em(t))
        return Bs(f(Number(t)));
    if (im(t))
        return Bs(f(eh.call(t)));
    if (rm(t))
        return Bs(jg.call(t));
    if (tm(t))
        return Bs(f(String(t)));
    if (typeof window < "u" && t === window)
        return "{ [object Window] }";
    if (typeof globalThis < "u" && t === globalThis || typeof ns < "u" && t === ns)
        return "{ [object globalThis] }";
    if (!Qg(t) && !Eu(t)) {
        var d = An(t, f)
          , O = xu ? xu(t) === Object.prototype : t instanceof Object || t.constructor === Object
          , N = t instanceof Object ? "" : "null prototype"
          , z = !O && Ie && Object(t) === t && Ie in t ? il.call(ci(t), 8, -1) : N ? "Object" : ""
          , J = O || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : ""
          , V = J + (z || N ? "[" + Ir.call(vu.call([], z || [], N || []), ": ") + "] " : "");
        return d.length === 0 ? V + "{}" : m ? V + "{" + nh(d, m) + "}" : V + "{ " + Ir.call(d, ", ") + " }"
    }
    return String(t)
};
function Hc(i, t, e) {
    var r = (e.quoteStyle || t) === "double" ? '"' : "'";
    return r + i + r
}
function Zg(i) {
    return ai.call(String(i), /"/g, "&quot;")
}
function sh(i) {
    return ci(i) === "[object Array]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Qg(i) {
    return ci(i) === "[object Date]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Eu(i) {
    return ci(i) === "[object RegExp]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Jg(i) {
    return ci(i) === "[object Error]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function tm(i) {
    return ci(i) === "[object String]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function em(i) {
    return ci(i) === "[object Number]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function rm(i) {
    return ci(i) === "[object Boolean]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Vc(i) {
    if (ps)
        return i && typeof i == "object" && i instanceof Symbol;
    if (typeof i == "symbol")
        return !0;
    if (!i || typeof i != "object" || !rh)
        return !1;
    try {
        return rh.call(i),
        !0
    } catch {}
    return !1
}
function im(i) {
    if (!i || typeof i != "object" || !eh)
        return !1;
    try {
        return eh.call(i),
        !0
    } catch {}
    return !1
}
var sm = Object.prototype.hasOwnProperty || function(i) {
    return i in this
}
;
function ii(i, t) {
    return sm.call(i, t)
}
function ci(i) {
    return Wg.call(i)
}
function nm(i) {
    if (i.name)
        return i.name;
    var t = zg.call(Xg.call(i), /^function\s*([\w$]+)/);
    return t ? t[1] : null
}
function $c(i, t) {
    if (i.indexOf)
        return i.indexOf(t);
    for (var e = 0, r = i.length; e < r; e++)
        if (i[e] === t)
            return e;
    return -1
}
function am(i) {
    if (!la || !i || typeof i != "object")
        return !1;
    try {
        la.call(i);
        try {
            ua.call(i)
        } catch {
            return !0
        }
        return i instanceof Map
    } catch {}
    return !1
}
function om(i) {
    if (!qs || !i || typeof i != "object")
        return !1;
    try {
        qs.call(i, qs);
        try {
            Ks.call(i, Ks)
        } catch {
            return !0
        }
        return i instanceof WeakMap
    } catch {}
    return !1
}
function hm(i) {
    if (!mu || !i || typeof i != "object")
        return !1;
    try {
        return mu.call(i),
        !0
    } catch {}
    return !1
}
function lm(i) {
    if (!ua || !i || typeof i != "object")
        return !1;
    try {
        ua.call(i);
        try {
            la.call(i)
        } catch {
            return !0
        }
        return i instanceof Set
    } catch {}
    return !1
}
function um(i) {
    if (!Ks || !i || typeof i != "object")
        return !1;
    try {
        Ks.call(i, Ks);
        try {
            qs.call(i, qs)
        } catch {
            return !0
        }
        return i instanceof WeakSet
    } catch {}
    return !1
}
function cm(i) {
    return !i || typeof i != "object" ? !1 : typeof HTMLElement < "u" && i instanceof HTMLElement ? !0 : typeof i.nodeName == "string" && typeof i.getAttribute == "function"
}
function jc(i, t) {
    if (i.length > t.maxStringLength) {
        var e = i.length - t.maxStringLength
          , r = "... " + e + " more character" + (e > 1 ? "s" : "");
        return jc(il.call(i, 0, t.maxStringLength), t) + r
    }
    var s = ai.call(ai.call(i, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, dm);
    return Hc(s, "single", t)
}
function dm(i) {
    var t = i.charCodeAt(0)
      , e = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[t];
    return e ? "\\" + e : "\\x" + (t < 16 ? "0" : "") + Yg.call(t.toString(16))
}
function Bs(i) {
    return "Object(" + i + ")"
}
function yo(i) {
    return i + " { ? }"
}
function Au(i, t, e, r) {
    var s = r ? nh(e, r) : Ir.call(e, ", ");
    return i + " (" + t + ") {" + s + "}"
}
function fm(i) {
    for (var t = 0; t < i.length; t++)
        if ($c(i[t], `
`) >= 0)
            return !1;
    return !0
}
function pm(i, t) {
    var e;
    if (i.indent === "	")
        e = "	";
    else if (typeof i.indent == "number" && i.indent > 0)
        e = Ir.call(Array(i.indent + 1), " ");
    else
        return null;
    return {
        base: e,
        prev: Ir.call(Array(t + 1), e)
    }
}
function nh(i, t) {
    if (i.length === 0)
        return "";
    var e = `
` + t.prev + t.base;
    return e + Ir.call(i, "," + e) + `
` + t.prev
}
function An(i, t) {
    var e = sh(i)
      , r = [];
    if (e) {
        r.length = i.length;
        for (var s = 0; s < i.length; s++)
            r[s] = ii(i, s) ? t(i[s], i) : ""
    }
    var n = typeof mo == "function" ? mo(i) : [], a;
    if (ps) {
        a = {};
        for (var o = 0; o < n.length; o++)
            a["$" + n[o]] = n[o]
    }
    for (var l in i)
        ii(i, l) && (e && String(Number(l)) === l && l < i.length || ps && a["$" + l]instanceof Symbol || (Uc.call(/[^\w$]/, l) ? r.push(t(l, i) + ": " + t(i[l], i)) : r.push(l + ": " + t(i[l], i))));
    if (typeof mo == "function")
        for (var c = 0; c < n.length; c++)
            Gc.call(i, n[c]) && r.push("[" + t(n[c]) + "]: " + t(i[n[c]], i));
    return r
}
var Wc = _s
  , xs = Lg
  , gm = Kg
  , mm = an
  , Sn = Wc("%WeakMap%", !0)
  , Cn = Wc("%Map%", !0)
  , ym = xs("WeakMap.prototype.get", !0)
  , vm = xs("WeakMap.prototype.set", !0)
  , _m = xs("WeakMap.prototype.has", !0)
  , xm = xs("Map.prototype.get", !0)
  , bm = xs("Map.prototype.set", !0)
  , Tm = xs("Map.prototype.has", !0)
  , sl = function(i, t) {
    for (var e = i, r; (r = e.next) !== null; e = r)
        if (r.key === t)
            return e.next = r.next,
            r.next = i.next,
            i.next = r,
            r
}
  , wm = function(i, t) {
    var e = sl(i, t);
    return e && e.value
}
  , Em = function(i, t, e) {
    var r = sl(i, t);
    r ? r.value = e : i.next = {
        key: t,
        next: i.next,
        value: e
    }
}
  , Am = function(i, t) {
    return !!sl(i, t)
}
  , Sm = function() {
    var t, e, r, s = {
        assert: function(n) {
            if (!s.has(n))
                throw new mm("Side channel does not contain " + gm(n))
        },
        get: function(n) {
            if (Sn && n && (typeof n == "object" || typeof n == "function")) {
                if (t)
                    return ym(t, n)
            } else if (Cn) {
                if (e)
                    return xm(e, n)
            } else if (r)
                return wm(r, n)
        },
        has: function(n) {
            if (Sn && n && (typeof n == "object" || typeof n == "function")) {
                if (t)
                    return _m(t, n)
            } else if (Cn) {
                if (e)
                    return Tm(e, n)
            } else if (r)
                return Am(r, n);
            return !1
        },
        set: function(n, a) {
            Sn && n && (typeof n == "object" || typeof n == "function") ? (t || (t = new Sn),
            vm(t, n, a)) : Cn ? (e || (e = new Cn),
            bm(e, n, a)) : (r || (r = {
                key: {},
                next: null
            }),
            Em(r, n, a))
        }
    };
    return s
}
  , Cm = String.prototype.replace
  , Im = /%20/g
  , vo = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
}
  , nl = {
    default: vo.RFC3986,
    formatters: {
        RFC1738: function(i) {
            return Cm.call(i, Im, "+")
        },
        RFC3986: function(i) {
            return String(i)
        }
    },
    RFC1738: vo.RFC1738,
    RFC3986: vo.RFC3986
}
  , Rm = nl
  , _o = Object.prototype.hasOwnProperty
  , Si = Array.isArray
  , xr = function() {
    for (var i = [], t = 0; t < 256; ++t)
        i.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return i
}()
  , Pm = function(t) {
    for (; t.length > 1; ) {
        var e = t.pop()
          , r = e.obj[e.prop];
        if (Si(r)) {
            for (var s = [], n = 0; n < r.length; ++n)
                typeof r[n] < "u" && s.push(r[n]);
            e.obj[e.prop] = s
        }
    }
}
  , Xc = function(t, e) {
    for (var r = e && e.plainObjects ? Object.create(null) : {}, s = 0; s < t.length; ++s)
        typeof t[s] < "u" && (r[s] = t[s]);
    return r
}
  , Mm = function i(t, e, r) {
    if (!e)
        return t;
    if (typeof e != "object") {
        if (Si(t))
            t.push(e);
        else if (t && typeof t == "object")
            (r && (r.plainObjects || r.allowPrototypes) || !_o.call(Object.prototype, e)) && (t[e] = !0);
        else
            return [t, e];
        return t
    }
    if (!t || typeof t != "object")
        return [t].concat(e);
    var s = t;
    return Si(t) && !Si(e) && (s = Xc(t, r)),
    Si(t) && Si(e) ? (e.forEach(function(n, a) {
        if (_o.call(t, a)) {
            var o = t[a];
            o && typeof o == "object" && n && typeof n == "object" ? t[a] = i(o, n, r) : t.push(n)
        } else
            t[a] = n
    }),
    t) : Object.keys(e).reduce(function(n, a) {
        var o = e[a];
        return _o.call(n, a) ? n[a] = i(n[a], o, r) : n[a] = o,
        n
    }, s)
}
  , Dm = function(t, e) {
    return Object.keys(e).reduce(function(r, s) {
        return r[s] = e[s],
        r
    }, t)
}
  , Bm = function(i, t, e) {
    var r = i.replace(/\+/g, " ");
    if (e === "iso-8859-1")
        return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
        return decodeURIComponent(r)
    } catch {
        return r
    }
}
  , xo = 1024
  , Fm = function(t, e, r, s, n) {
    if (t.length === 0)
        return t;
    var a = t;
    if (typeof t == "symbol" ? a = Symbol.prototype.toString.call(t) : typeof t != "string" && (a = String(t)),
    r === "iso-8859-1")
        return escape(a).replace(/%u[0-9a-f]{4}/gi, function(v) {
            return "%26%23" + parseInt(v.slice(2), 16) + "%3B"
        });
    for (var o = "", l = 0; l < a.length; l += xo) {
        for (var c = a.length >= xo ? a.slice(l, l + xo) : a, p = [], m = 0; m < c.length; ++m) {
            var f = c.charCodeAt(m);
            if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || n === Rm.RFC1738 && (f === 40 || f === 41)) {
                p[p.length] = c.charAt(m);
                continue
            }
            if (f < 128) {
                p[p.length] = xr[f];
                continue
            }
            if (f < 2048) {
                p[p.length] = xr[192 | f >> 6] + xr[128 | f & 63];
                continue
            }
            if (f < 55296 || f >= 57344) {
                p[p.length] = xr[224 | f >> 12] + xr[128 | f >> 6 & 63] + xr[128 | f & 63];
                continue
            }
            m += 1,
            f = 65536 + ((f & 1023) << 10 | c.charCodeAt(m) & 1023),
            p[p.length] = xr[240 | f >> 18] + xr[128 | f >> 12 & 63] + xr[128 | f >> 6 & 63] + xr[128 | f & 63]
        }
        o += p.join("")
    }
    return o
}
  , Om = function(t) {
    for (var e = [{
        obj: {
            o: t
        },
        prop: "o"
    }], r = [], s = 0; s < e.length; ++s)
        for (var n = e[s], a = n.obj[n.prop], o = Object.keys(a), l = 0; l < o.length; ++l) {
            var c = o[l]
              , p = a[c];
            typeof p == "object" && p !== null && r.indexOf(p) === -1 && (e.push({
                obj: a,
                prop: c
            }),
            r.push(p))
        }
    return Pm(e),
    t
}
  , Nm = function(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]"
}
  , Lm = function(t) {
    return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
}
  , km = function(t, e) {
    return [].concat(t, e)
}
  , Um = function(t, e) {
    if (Si(t)) {
        for (var r = [], s = 0; s < t.length; s += 1)
            r.push(e(t[s]));
        return r
    }
    return e(t)
}
  , zc = {
    arrayToObject: Xc,
    assign: Dm,
    combine: km,
    compact: Om,
    decode: Bm,
    encode: Fm,
    isBuffer: Lm,
    isRegExp: Nm,
    maybeMap: Um,
    merge: Mm
}
  , Yc = Sm
  , Kn = zc
  , Zs = nl
  , Gm = Object.prototype.hasOwnProperty
  , qc = {
    brackets: function(t) {
        return t + "[]"
    },
    comma: "comma",
    indices: function(t, e) {
        return t + "[" + e + "]"
    },
    repeat: function(t) {
        return t
    }
}
  , Sr = Array.isArray
  , Hm = Array.prototype.push
  , Kc = function(i, t) {
    Hm.apply(i, Sr(t) ? t : [t])
}
  , Vm = Date.prototype.toISOString
  , Su = Zs.default
  , de = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: Kn.encode,
    encodeValuesOnly: !1,
    format: Su,
    formatter: Zs.formatters[Su],
    indices: !1,
    serializeDate: function(t) {
        return Vm.call(t)
    },
    skipNulls: !1,
    strictNullHandling: !1
}
  , $m = function(t) {
    return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
}
  , bo = {}
  , jm = function i(t, e, r, s, n, a, o, l, c, p, m, f, v, _, T, A, E, I) {
    for (var S = t, P = I, k = 0, $ = !1; (P = P.get(bo)) !== void 0 && !$; ) {
        var d = P.get(t);
        if (k += 1,
        typeof d < "u") {
            if (d === k)
                throw new RangeError("Cyclic object value");
            $ = !0
        }
        typeof P.get(bo) > "u" && (k = 0)
    }
    if (typeof p == "function" ? S = p(e, S) : S instanceof Date ? S = v(S) : r === "comma" && Sr(S) && (S = Kn.maybeMap(S, function(Q) {
        return Q instanceof Date ? v(Q) : Q
    })),
    S === null) {
        if (a)
            return c && !A ? c(e, de.encoder, E, "key", _) : e;
        S = ""
    }
    if ($m(S) || Kn.isBuffer(S)) {
        if (c) {
            var O = A ? e : c(e, de.encoder, E, "key", _);
            return [T(O) + "=" + T(c(S, de.encoder, E, "value", _))]
        }
        return [T(e) + "=" + T(String(S))]
    }
    var N = [];
    if (typeof S > "u")
        return N;
    var z;
    if (r === "comma" && Sr(S))
        A && c && (S = Kn.maybeMap(S, c)),
        z = [{
            value: S.length > 0 ? S.join(",") || null : void 0
        }];
    else if (Sr(p))
        z = p;
    else {
        var J = Object.keys(S);
        z = m ? J.sort(m) : J
    }
    var V = l ? e.replace(/\./g, "%2E") : e
      , B = s && Sr(S) && S.length === 1 ? V + "[]" : V;
    if (n && Sr(S) && S.length === 0)
        return B + "[]";
    for (var j = 0; j < z.length; ++j) {
        var rt = z[j]
          , at = typeof rt == "object" && typeof rt.value < "u" ? rt.value : S[rt];
        if (!(o && at === null)) {
            var st = f && l ? rt.replace(/\./g, "%2E") : rt
              , dt = Sr(S) ? typeof r == "function" ? r(B, st) : B : B + (f ? "." + st : "[" + st + "]");
            I.set(t, k);
            var Ft = Yc();
            Ft.set(bo, I),
            Kc(N, i(at, dt, r, s, n, a, o, l, r === "comma" && A && Sr(S) ? null : c, p, m, f, v, _, T, A, E, Ft))
        }
    }
    return N
}
  , Wm = function(t) {
    if (!t)
        return de;
    if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof t.encodeDotInKeys < "u" && typeof t.encodeDotInKeys != "boolean")
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
    if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function")
        throw new TypeError("Encoder has to be a function.");
    var e = t.charset || de.charset;
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r = Zs.default;
    if (typeof t.format < "u") {
        if (!Gm.call(Zs.formatters, t.format))
            throw new TypeError("Unknown format option provided.");
        r = t.format
    }
    var s = Zs.formatters[r]
      , n = de.filter;
    (typeof t.filter == "function" || Sr(t.filter)) && (n = t.filter);
    var a;
    if (t.arrayFormat in qc ? a = t.arrayFormat : "indices"in t ? a = t.indices ? "indices" : "repeat" : a = de.arrayFormat,
    "commaRoundTrip"in t && typeof t.commaRoundTrip != "boolean")
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    var o = typeof t.allowDots > "u" ? t.encodeDotInKeys === !0 ? !0 : de.allowDots : !!t.allowDots;
    return {
        addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : de.addQueryPrefix,
        allowDots: o,
        allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : de.allowEmptyArrays,
        arrayFormat: a,
        charset: e,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : de.charsetSentinel,
        commaRoundTrip: t.commaRoundTrip,
        delimiter: typeof t.delimiter > "u" ? de.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : de.encode,
        encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : de.encodeDotInKeys,
        encoder: typeof t.encoder == "function" ? t.encoder : de.encoder,
        encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : de.encodeValuesOnly,
        filter: n,
        format: r,
        formatter: s,
        serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : de.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : de.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : de.strictNullHandling
    }
}
  , Xm = function(i, t) {
    var e = i, r = Wm(t), s, n;
    typeof r.filter == "function" ? (n = r.filter,
    e = n("", e)) : Sr(r.filter) && (n = r.filter,
    s = n);
    var a = [];
    if (typeof e != "object" || e === null)
        return "";
    var o = qc[r.arrayFormat]
      , l = o === "comma" && r.commaRoundTrip;
    s || (s = Object.keys(e)),
    r.sort && s.sort(r.sort);
    for (var c = Yc(), p = 0; p < s.length; ++p) {
        var m = s[p];
        r.skipNulls && e[m] === null || Kc(a, jm(e[m], m, o, l, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, c))
    }
    var f = a.join(r.delimiter)
      , v = r.addQueryPrefix === !0 ? "?" : "";
    return r.charsetSentinel && (r.charset === "iso-8859-1" ? v += "utf8=%26%2310003%3B&" : v += "utf8=%E2%9C%93&"),
    f.length > 0 ? v + f : ""
}
  , gs = zc
  , ah = Object.prototype.hasOwnProperty
  , zm = Array.isArray
  , ae = {
    allowDots: !1,
    allowEmptyArrays: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: !1,
    comma: !1,
    decodeDotInKeys: !1,
    decoder: gs.decode,
    delimiter: "&",
    depth: 5,
    duplicates: "combine",
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictDepth: !1,
    strictNullHandling: !1
}
  , Ym = function(i) {
    return i.replace(/&#(\d+);/g, function(t, e) {
        return String.fromCharCode(parseInt(e, 10))
    })
}
  , Zc = function(i, t) {
    return i && typeof i == "string" && t.comma && i.indexOf(",") > -1 ? i.split(",") : i
}
  , qm = "utf8=%26%2310003%3B"
  , Km = "utf8=%E2%9C%93"
  , Zm = function(t, e) {
    var r = {
        __proto__: null
    }
      , s = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
    s = s.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var n = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit, a = s.split(e.delimiter, n), o = -1, l, c = e.charset;
    if (e.charsetSentinel)
        for (l = 0; l < a.length; ++l)
            a[l].indexOf("utf8=") === 0 && (a[l] === Km ? c = "utf-8" : a[l] === qm && (c = "iso-8859-1"),
            o = l,
            l = a.length);
    for (l = 0; l < a.length; ++l)
        if (l !== o) {
            var p = a[l], m = p.indexOf("]="), f = m === -1 ? p.indexOf("=") : m + 1, v, _;
            f === -1 ? (v = e.decoder(p, ae.decoder, c, "key"),
            _ = e.strictNullHandling ? null : "") : (v = e.decoder(p.slice(0, f), ae.decoder, c, "key"),
            _ = gs.maybeMap(Zc(p.slice(f + 1), e), function(A) {
                return e.decoder(A, ae.decoder, c, "value")
            })),
            _ && e.interpretNumericEntities && c === "iso-8859-1" && (_ = Ym(_)),
            p.indexOf("[]=") > -1 && (_ = zm(_) ? [_] : _);
            var T = ah.call(r, v);
            T && e.duplicates === "combine" ? r[v] = gs.combine(r[v], _) : (!T || e.duplicates === "last") && (r[v] = _)
        }
    return r
}
  , Qm = function(i, t, e, r) {
    for (var s = r ? t : Zc(t, e), n = i.length - 1; n >= 0; --n) {
        var a, o = i[n];
        if (o === "[]" && e.parseArrays)
            a = e.allowEmptyArrays && (s === "" || e.strictNullHandling && s === null) ? [] : [].concat(s);
        else {
            a = e.plainObjects ? Object.create(null) : {};
            var l = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o
              , c = e.decodeDotInKeys ? l.replace(/%2E/g, ".") : l
              , p = parseInt(c, 10);
            !e.parseArrays && c === "" ? a = {
                0: s
            } : !isNaN(p) && o !== c && String(p) === c && p >= 0 && e.parseArrays && p <= e.arrayLimit ? (a = [],
            a[p] = s) : c !== "__proto__" && (a[c] = s)
        }
        s = a
    }
    return s
}
  , Jm = function(t, e, r, s) {
    if (t) {
        var n = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t
          , a = /(\[[^[\]]*])/
          , o = /(\[[^[\]]*])/g
          , l = r.depth > 0 && a.exec(n)
          , c = l ? n.slice(0, l.index) : n
          , p = [];
        if (c) {
            if (!r.plainObjects && ah.call(Object.prototype, c) && !r.allowPrototypes)
                return;
            p.push(c)
        }
        for (var m = 0; r.depth > 0 && (l = o.exec(n)) !== null && m < r.depth; ) {
            if (m += 1,
            !r.plainObjects && ah.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes)
                return;
            p.push(l[1])
        }
        if (l) {
            if (r.strictDepth === !0)
                throw new RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
            p.push("[" + n.slice(l.index) + "]")
        }
        return Qm(p, e, r, s)
    }
}
  , ty = function(t) {
    if (!t)
        return ae;
    if (typeof t.allowEmptyArrays < "u" && typeof t.allowEmptyArrays != "boolean")
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
    if (typeof t.decodeDotInKeys < "u" && typeof t.decodeDotInKeys != "boolean")
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
    if (t.decoder !== null && typeof t.decoder < "u" && typeof t.decoder != "function")
        throw new TypeError("Decoder has to be a function.");
    if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1")
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var e = typeof t.charset > "u" ? ae.charset : t.charset
      , r = typeof t.duplicates > "u" ? ae.duplicates : t.duplicates;
    if (r !== "combine" && r !== "first" && r !== "last")
        throw new TypeError("The duplicates option must be either combine, first, or last");
    var s = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : ae.allowDots : !!t.allowDots;
    return {
        allowDots: s,
        allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : ae.allowEmptyArrays,
        allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ae.allowPrototypes,
        allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : ae.allowSparse,
        arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ae.arrayLimit,
        charset: e,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ae.charsetSentinel,
        comma: typeof t.comma == "boolean" ? t.comma : ae.comma,
        decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : ae.decodeDotInKeys,
        decoder: typeof t.decoder == "function" ? t.decoder : ae.decoder,
        delimiter: typeof t.delimiter == "string" || gs.isRegExp(t.delimiter) ? t.delimiter : ae.delimiter,
        depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : ae.depth,
        duplicates: r,
        ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
        interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : ae.interpretNumericEntities,
        parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : ae.parameterLimit,
        parseArrays: t.parseArrays !== !1,
        plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : ae.plainObjects,
        strictDepth: typeof t.strictDepth == "boolean" ? !!t.strictDepth : ae.strictDepth,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : ae.strictNullHandling
    }
}
  , ey = function(i, t) {
    var e = ty(t);
    if (i === "" || i === null || typeof i > "u")
        return e.plainObjects ? Object.create(null) : {};
    for (var r = typeof i == "string" ? Zm(i, e) : i, s = e.plainObjects ? Object.create(null) : {}, n = Object.keys(r), a = 0; a < n.length; ++a) {
        var o = n[a]
          , l = Jm(o, r[o], e, typeof i == "string");
        s = gs.merge(s, l, e)
    }
    return e.allowSparse === !0 ? s : gs.compact(s)
}
  , ry = Xm
  , iy = ey
  , sy = nl
  , ny = {
    formats: sy,
    parse: iy,
    stringify: ry
}
  , ay = Hp;
function lr() {
    this.protocol = null,
    this.slashes = null,
    this.auth = null,
    this.host = null,
    this.port = null,
    this.hostname = null,
    this.hash = null,
    this.search = null,
    this.query = null,
    this.pathname = null,
    this.path = null,
    this.href = null
}
var oy = /^([a-z0-9.+-]+:)/i
  , hy = /:[0-9]*$/
  , ly = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/
  , uy = ["<", ">", '"', "`", " ", "\r", `
`, "	"]
  , cy = ["{", "}", "|", "\\", "^", "`"].concat(uy)
  , oh = ["'"].concat(cy)
  , Cu = ["%", "/", "?", ";", "#"].concat(oh)
  , Iu = ["/", "?", "#"]
  , dy = 255
  , Ru = /^[+a-z0-9A-Z_-]{0,63}$/
  , fy = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
  , py = {
    javascript: !0,
    "javascript:": !0
}
  , hh = {
    javascript: !0,
    "javascript:": !0
}
  , hs = {
    http: !0,
    https: !0,
    ftp: !0,
    gopher: !0,
    file: !0,
    "http:": !0,
    "https:": !0,
    "ftp:": !0,
    "gopher:": !0,
    "file:": !0
}
  , lh = ny;
function Ia(i, t, e) {
    if (i && typeof i == "object" && i instanceof lr)
        return i;
    var r = new lr;
    return r.parse(i, t, e),
    r
}
lr.prototype.parse = function(i, t, e) {
    if (typeof i != "string")
        throw new TypeError("Parameter 'url' must be a string, not " + typeof i);
    var r = i.indexOf("?")
      , s = r !== -1 && r < i.indexOf("#") ? "?" : "#"
      , n = i.split(s)
      , a = /\\/g;
    n[0] = n[0].replace(a, "/"),
    i = n.join(s);
    var o = i;
    if (o = o.trim(),
    !e && i.split("#").length === 1) {
        var l = ly.exec(o);
        if (l)
            return this.path = o,
            this.href = o,
            this.pathname = l[1],
            l[2] ? (this.search = l[2],
            t ? this.query = lh.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "",
            this.query = {}),
            this
    }
    var c = oy.exec(o);
    if (c) {
        c = c[0];
        var p = c.toLowerCase();
        this.protocol = p,
        o = o.substr(c.length)
    }
    if (e || c || o.match(/^\/\/[^@/]+@[^@/]+/)) {
        var m = o.substr(0, 2) === "//";
        m && !(c && hh[c]) && (o = o.substr(2),
        this.slashes = !0)
    }
    if (!hh[c] && (m || c && !hs[c])) {
        for (var f = -1, v = 0; v < Iu.length; v++) {
            var _ = o.indexOf(Iu[v]);
            _ !== -1 && (f === -1 || _ < f) && (f = _)
        }
        var T, A;
        f === -1 ? A = o.lastIndexOf("@") : A = o.lastIndexOf("@", f),
        A !== -1 && (T = o.slice(0, A),
        o = o.slice(A + 1),
        this.auth = decodeURIComponent(T)),
        f = -1;
        for (var v = 0; v < Cu.length; v++) {
            var _ = o.indexOf(Cu[v]);
            _ !== -1 && (f === -1 || _ < f) && (f = _)
        }
        f === -1 && (f = o.length),
        this.host = o.slice(0, f),
        o = o.slice(f),
        this.parseHost(),
        this.hostname = this.hostname || "";
        var E = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!E)
            for (var I = this.hostname.split(/\./), v = 0, S = I.length; v < S; v++) {
                var P = I[v];
                if (P && !P.match(Ru)) {
                    for (var k = "", $ = 0, d = P.length; $ < d; $++)
                        P.charCodeAt($) > 127 ? k += "x" : k += P[$];
                    if (!k.match(Ru)) {
                        var O = I.slice(0, v)
                          , N = I.slice(v + 1)
                          , z = P.match(fy);
                        z && (O.push(z[1]),
                        N.unshift(z[2])),
                        N.length && (o = "/" + N.join(".") + o),
                        this.hostname = O.join(".");
                        break
                    }
                }
            }
        this.hostname.length > dy ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
        E || (this.hostname = ay.toASCII(this.hostname));
        var J = this.port ? ":" + this.port : ""
          , V = this.hostname || "";
        this.host = V + J,
        this.href += this.host,
        E && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
        o[0] !== "/" && (o = "/" + o))
    }
    if (!py[p])
        for (var v = 0, S = oh.length; v < S; v++) {
            var B = oh[v];
            if (o.indexOf(B) !== -1) {
                var j = encodeURIComponent(B);
                j === B && (j = escape(B)),
                o = o.split(B).join(j)
            }
        }
    var rt = o.indexOf("#");
    rt !== -1 && (this.hash = o.substr(rt),
    o = o.slice(0, rt));
    var at = o.indexOf("?");
    if (at !== -1 ? (this.search = o.substr(at),
    this.query = o.substr(at + 1),
    t && (this.query = lh.parse(this.query)),
    o = o.slice(0, at)) : t && (this.search = "",
    this.query = {}),
    o && (this.pathname = o),
    hs[p] && this.hostname && !this.pathname && (this.pathname = "/"),
    this.pathname || this.search) {
        var J = this.pathname || ""
          , st = this.search || "";
        this.path = J + st
    }
    return this.href = this.format(),
    this
}
;
function gy(i) {
    return typeof i == "string" && (i = Ia(i)),
    i instanceof lr ? i.format() : lr.prototype.format.call(i)
}
lr.prototype.format = function() {
    var i = this.auth || "";
    i && (i = encodeURIComponent(i),
    i = i.replace(/%3A/i, ":"),
    i += "@");
    var t = this.protocol || ""
      , e = this.pathname || ""
      , r = this.hash || ""
      , s = !1
      , n = "";
    this.host ? s = i + this.host : this.hostname && (s = i + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"),
    this.port && (s += ":" + this.port)),
    this.query && typeof this.query == "object" && Object.keys(this.query).length && (n = lh.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: !1
    }));
    var a = this.search || n && "?" + n || "";
    return t && t.substr(-1) !== ":" && (t += ":"),
    this.slashes || (!t || hs[t]) && s !== !1 ? (s = "//" + (s || ""),
    e && e.charAt(0) !== "/" && (e = "/" + e)) : s || (s = ""),
    r && r.charAt(0) !== "#" && (r = "#" + r),
    a && a.charAt(0) !== "?" && (a = "?" + a),
    e = e.replace(/[?#]/g, function(o) {
        return encodeURIComponent(o)
    }),
    a = a.replace("#", "%23"),
    t + s + e + a + r
}
;
function my(i, t) {
    return Ia(i, !1, !0).resolve(t)
}
lr.prototype.resolve = function(i) {
    return this.resolveObject(Ia(i, !1, !0)).format()
}
;
lr.prototype.resolveObject = function(i) {
    if (typeof i == "string") {
        var t = new lr;
        t.parse(i, !1, !0),
        i = t
    }
    for (var e = new lr, r = Object.keys(this), s = 0; s < r.length; s++) {
        var n = r[s];
        e[n] = this[n]
    }
    if (e.hash = i.hash,
    i.href === "")
        return e.href = e.format(),
        e;
    if (i.slashes && !i.protocol) {
        for (var a = Object.keys(i), o = 0; o < a.length; o++) {
            var l = a[o];
            l !== "protocol" && (e[l] = i[l])
        }
        return hs[e.protocol] && e.hostname && !e.pathname && (e.pathname = "/",
        e.path = e.pathname),
        e.href = e.format(),
        e
    }
    if (i.protocol && i.protocol !== e.protocol) {
        if (!hs[i.protocol]) {
            for (var c = Object.keys(i), p = 0; p < c.length; p++) {
                var m = c[p];
                e[m] = i[m]
            }
            return e.href = e.format(),
            e
        }
        if (e.protocol = i.protocol,
        !i.host && !hh[i.protocol]) {
            for (var S = (i.pathname || "").split("/"); S.length && !(i.host = S.shift()); )
                ;
            i.host || (i.host = ""),
            i.hostname || (i.hostname = ""),
            S[0] !== "" && S.unshift(""),
            S.length < 2 && S.unshift(""),
            e.pathname = S.join("/")
        } else
            e.pathname = i.pathname;
        if (e.search = i.search,
        e.query = i.query,
        e.host = i.host || "",
        e.auth = i.auth,
        e.hostname = i.hostname || i.host,
        e.port = i.port,
        e.pathname || e.search) {
            var f = e.pathname || ""
              , v = e.search || "";
            e.path = f + v
        }
        return e.slashes = e.slashes || i.slashes,
        e.href = e.format(),
        e
    }
    var _ = e.pathname && e.pathname.charAt(0) === "/"
      , T = i.host || i.pathname && i.pathname.charAt(0) === "/"
      , A = T || _ || e.host && i.pathname
      , E = A
      , I = e.pathname && e.pathname.split("/") || []
      , S = i.pathname && i.pathname.split("/") || []
      , P = e.protocol && !hs[e.protocol];
    if (P && (e.hostname = "",
    e.port = null,
    e.host && (I[0] === "" ? I[0] = e.host : I.unshift(e.host)),
    e.host = "",
    i.protocol && (i.hostname = null,
    i.port = null,
    i.host && (S[0] === "" ? S[0] = i.host : S.unshift(i.host)),
    i.host = null),
    A = A && (S[0] === "" || I[0] === "")),
    T)
        e.host = i.host || i.host === "" ? i.host : e.host,
        e.hostname = i.hostname || i.hostname === "" ? i.hostname : e.hostname,
        e.search = i.search,
        e.query = i.query,
        I = S;
    else if (S.length)
        I || (I = []),
        I.pop(),
        I = I.concat(S),
        e.search = i.search,
        e.query = i.query;
    else if (i.search != null) {
        if (P) {
            e.host = I.shift(),
            e.hostname = e.host;
            var k = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
            k && (e.auth = k.shift(),
            e.hostname = k.shift(),
            e.host = e.hostname)
        }
        return e.search = i.search,
        e.query = i.query,
        (e.pathname !== null || e.search !== null) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")),
        e.href = e.format(),
        e
    }
    if (!I.length)
        return e.pathname = null,
        e.search ? e.path = "/" + e.search : e.path = null,
        e.href = e.format(),
        e;
    for (var $ = I.slice(-1)[0], d = (e.host || i.host || I.length > 1) && ($ === "." || $ === "..") || $ === "", O = 0, N = I.length; N >= 0; N--)
        $ = I[N],
        $ === "." ? I.splice(N, 1) : $ === ".." ? (I.splice(N, 1),
        O++) : O && (I.splice(N, 1),
        O--);
    if (!A && !E)
        for (; O--; O)
            I.unshift("..");
    A && I[0] !== "" && (!I[0] || I[0].charAt(0) !== "/") && I.unshift(""),
    d && I.join("/").substr(-1) !== "/" && I.push("");
    var z = I[0] === "" || I[0] && I[0].charAt(0) === "/";
    if (P) {
        e.hostname = z ? "" : I.length ? I.shift() : "",
        e.host = e.hostname;
        var k = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
        k && (e.auth = k.shift(),
        e.hostname = k.shift(),
        e.host = e.hostname)
    }
    return A = A || e.host && I.length,
    A && !z && I.unshift(""),
    I.length > 0 ? e.pathname = I.join("/") : (e.pathname = null,
    e.path = null),
    (e.pathname !== null || e.search !== null) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")),
    e.auth = i.auth || e.auth,
    e.slashes = e.slashes || i.slashes,
    e.href = e.format(),
    e
}
;
lr.prototype.parseHost = function() {
    var i = this.host
      , t = hy.exec(i);
    t && (t = t[0],
    t !== ":" && (this.port = t.substr(1)),
    i = i.substr(0, i.length - t.length)),
    i && (this.hostname = i)
}
;
var yy = Ia
  , vy = my
  , _y = gy;
const Pu = {};
function vt(i, t, e=3) {
    if (Pu[t])
        return;
    let r = new Error().stack;
    typeof r > "u" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`) : (r = r.split(`
`).splice(e).join(`
`),
    console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${i}`),
    console.warn(r),
    console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${i}`),
    console.warn(r))),
    Pu[t] = !0
}
const xy = {
    get parse() {
        return vt("7.3.0", "utils.url.parse is deprecated, use native URL API instead."),
        yy
    },
    get format() {
        return vt("7.3.0", "utils.url.format is deprecated, use native URL API instead."),
        _y
    },
    get resolve() {
        return vt("7.3.0", "utils.url.resolve is deprecated, use native URL API instead."),
        vy
    }
};
function rr(i) {
    if (typeof i != "string")
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`)
}
function Fs(i) {
    return i.split("?")[0].split("#")[0]
}
function by(i) {
    return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
function Ty(i, t, e) {
    return i.replace(new RegExp(by(t),"g"), e)
}
function wy(i, t) {
    let e = ""
      , r = 0
      , s = -1
      , n = 0
      , a = -1;
    for (let o = 0; o <= i.length; ++o) {
        if (o < i.length)
            a = i.charCodeAt(o);
        else {
            if (a === 47)
                break;
            a = 47
        }
        if (a === 47) {
            if (!(s === o - 1 || n === 1))
                if (s !== o - 1 && n === 2) {
                    if (e.length < 2 || r !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                        if (e.length > 2) {
                            const l = e.lastIndexOf("/");
                            if (l !== e.length - 1) {
                                l === -1 ? (e = "",
                                r = 0) : (e = e.slice(0, l),
                                r = e.length - 1 - e.lastIndexOf("/")),
                                s = o,
                                n = 0;
                                continue
                            }
                        } else if (e.length === 2 || e.length === 1) {
                            e = "",
                            r = 0,
                            s = o,
                            n = 0;
                            continue
                        }
                    }
                } else
                    e.length > 0 ? e += `/${i.slice(s + 1, o)}` : e = i.slice(s + 1, o),
                    r = o - s - 1;
            s = o,
            n = 0
        } else
            a === 46 && n !== -1 ? ++n : n = -1
    }
    return e
}
const ge = {
    toPosix(i) {
        return Ty(i, "\\", "/")
    },
    isUrl(i) {
        return /^https?:/.test(this.toPosix(i))
    },
    isDataUrl(i) {
        return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i)
    },
    isBlobUrl(i) {
        return i.startsWith("blob:")
    },
    hasProtocol(i) {
        return /^[^/:]+:/.test(this.toPosix(i))
    },
    getProtocol(i) {
        rr(i),
        i = this.toPosix(i);
        const t = /^file:\/\/\//.exec(i);
        if (t)
            return t[0];
        const e = /^[^/:]+:\/{0,2}/.exec(i);
        return e ? e[0] : ""
    },
    toAbsolute(i, t, e) {
        if (rr(i),
        this.isDataUrl(i) || this.isBlobUrl(i))
            return i;
        const r = Fs(this.toPosix(t ?? nt.ADAPTER.getBaseUrl()))
          , s = Fs(this.toPosix(e ?? this.rootname(r)));
        return i = this.toPosix(i),
        i.startsWith("/") ? ge.join(s, i.slice(1)) : this.isAbsolute(i) ? i : this.join(r, i)
    },
    normalize(i) {
        if (rr(i),
        i.length === 0)
            return ".";
        if (this.isDataUrl(i) || this.isBlobUrl(i))
            return i;
        i = this.toPosix(i);
        let t = "";
        const e = i.startsWith("/");
        this.hasProtocol(i) && (t = this.rootname(i),
        i = i.slice(t.length));
        const r = i.endsWith("/");
        return i = wy(i),
        i.length > 0 && r && (i += "/"),
        e ? `/${i}` : t + i
    },
    isAbsolute(i) {
        return rr(i),
        i = this.toPosix(i),
        this.hasProtocol(i) ? !0 : i.startsWith("/")
    },
    join(...i) {
        if (i.length === 0)
            return ".";
        let t;
        for (let e = 0; e < i.length; ++e) {
            const r = i[e];
            if (rr(r),
            r.length > 0)
                if (t === void 0)
                    t = r;
                else {
                    const s = i[e - 1] ?? "";
                    this.joinExtensions.includes(this.extname(s).toLowerCase()) ? t += `/../${r}` : t += `/${r}`
                }
        }
        return t === void 0 ? "." : this.normalize(t)
    },
    dirname(i) {
        if (rr(i),
        i.length === 0)
            return ".";
        i = this.toPosix(i);
        let t = i.charCodeAt(0);
        const e = t === 47;
        let r = -1
          , s = !0;
        const n = this.getProtocol(i)
          , a = i;
        i = i.slice(n.length);
        for (let o = i.length - 1; o >= 1; --o)
            if (t = i.charCodeAt(o),
            t === 47) {
                if (!s) {
                    r = o;
                    break
                }
            } else
                s = !1;
        return r === -1 ? e ? "/" : this.isUrl(a) ? n + i : n : e && r === 1 ? "//" : n + i.slice(0, r)
    },
    rootname(i) {
        rr(i),
        i = this.toPosix(i);
        let t = "";
        if (i.startsWith("/") ? t = "/" : t = this.getProtocol(i),
        this.isUrl(i)) {
            const e = i.indexOf("/", t.length);
            e !== -1 ? t = i.slice(0, e) : t = i,
            t.endsWith("/") || (t += "/")
        }
        return t
    },
    basename(i, t) {
        rr(i),
        t && rr(t),
        i = Fs(this.toPosix(i));
        let e = 0, r = -1, s = !0, n;
        if (t !== void 0 && t.length > 0 && t.length <= i.length) {
            if (t.length === i.length && t === i)
                return "";
            let a = t.length - 1
              , o = -1;
            for (n = i.length - 1; n >= 0; --n) {
                const l = i.charCodeAt(n);
                if (l === 47) {
                    if (!s) {
                        e = n + 1;
                        break
                    }
                } else
                    o === -1 && (s = !1,
                    o = n + 1),
                    a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (r = n) : (a = -1,
                    r = o))
            }
            return e === r ? r = o : r === -1 && (r = i.length),
            i.slice(e, r)
        }
        for (n = i.length - 1; n >= 0; --n)
            if (i.charCodeAt(n) === 47) {
                if (!s) {
                    e = n + 1;
                    break
                }
            } else
                r === -1 && (s = !1,
                r = n + 1);
        return r === -1 ? "" : i.slice(e, r)
    },
    extname(i) {
        rr(i),
        i = Fs(this.toPosix(i));
        let t = -1
          , e = 0
          , r = -1
          , s = !0
          , n = 0;
        for (let a = i.length - 1; a >= 0; --a) {
            const o = i.charCodeAt(a);
            if (o === 47) {
                if (!s) {
                    e = a + 1;
                    break
                }
                continue
            }
            r === -1 && (s = !1,
            r = a + 1),
            o === 46 ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1)
        }
        return t === -1 || r === -1 || n === 0 || n === 1 && t === r - 1 && t === e + 1 ? "" : i.slice(t, r)
    },
    parse(i) {
        rr(i);
        const t = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (i.length === 0)
            return t;
        i = Fs(this.toPosix(i));
        let e = i.charCodeAt(0);
        const r = this.isAbsolute(i);
        let s;
        t.root = this.rootname(i),
        r || this.hasProtocol(i) ? s = 1 : s = 0;
        let n = -1
          , a = 0
          , o = -1
          , l = !0
          , c = i.length - 1
          , p = 0;
        for (; c >= s; --c) {
            if (e = i.charCodeAt(c),
            e === 47) {
                if (!l) {
                    a = c + 1;
                    break
                }
                continue
            }
            o === -1 && (l = !1,
            o = c + 1),
            e === 46 ? n === -1 ? n = c : p !== 1 && (p = 1) : n !== -1 && (p = -1)
        }
        return n === -1 || o === -1 || p === 0 || p === 1 && n === o - 1 && n === a + 1 ? o !== -1 && (a === 0 && r ? t.base = t.name = i.slice(1, o) : t.base = t.name = i.slice(a, o)) : (a === 0 && r ? (t.name = i.slice(1, n),
        t.base = i.slice(1, o)) : (t.name = i.slice(a, n),
        t.base = i.slice(a, o)),
        t.ext = i.slice(n, o)),
        t.dir = this.dirname(i),
        t
    },
    sep: "/",
    delimiter: ":",
    joinExtensions: [".html"]
};
let To;
async function Qc() {
    return To ?? (To = (async () => {
        var n;
        const i = document.createElement("canvas").getContext("webgl");
        if (!i)
            return ke.UNPACK;
        const t = await new Promise(a => {
            const o = document.createElement("video");
            o.onloadeddata = () => a(o),
            o.onerror = () => a(null),
            o.autoplay = !1,
            o.crossOrigin = "anonymous",
            o.preload = "auto",
            o.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",
            o.load()
        }
        );
        if (!t)
            return ke.UNPACK;
        const e = i.createTexture();
        i.bindTexture(i.TEXTURE_2D, e);
        const r = i.createFramebuffer();
        i.bindFramebuffer(i.FRAMEBUFFER, r),
        i.framebufferTexture2D(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, e, 0),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE),
        i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t);
        const s = new Uint8Array(4);
        return i.readPixels(0, 0, 1, 1, i.RGBA, i.UNSIGNED_BYTE, s),
        i.deleteFramebuffer(r),
        i.deleteTexture(e),
        (n = i.getExtension("WEBGL_lose_context")) == null || n.loseContext(),
        s[0] <= s[3] ? ke.PMA : ke.UNPACK
    }
    )()),
    To
}
function Ey() {
    vt("7.0.0", "skipHello is deprecated, please use settings.RENDER_OPTIONS.hello")
}
function Ay() {
    vt("7.0.0", `sayHello is deprecated, please use Renderer's "hello" option`)
}
let wo;
function Jc() {
    return typeof wo > "u" && (wo = function() {
        var t;
        const i = {
            stencil: !0,
            failIfMajorPerformanceCaveat: nt.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
        };
        try {
            if (!nt.ADAPTER.getWebGLRenderingContext())
                return !1;
            const e = nt.ADAPTER.createCanvas();
            let r = e.getContext("webgl", i) || e.getContext("experimental-webgl", i);
            const s = !!((t = r == null ? void 0 : r.getContextAttributes()) != null && t.stencil);
            if (r) {
                const n = r.getExtension("WEBGL_lose_context");
                n && n.loseContext()
            }
            return r = null,
            s
        } catch {
            return !1
        }
    }()),
    wo
}
var Sy = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}
  , jr = function(i) {
    return typeof i == "string" ? i.length > 0 : typeof i == "number"
}
  , xe = function(i, t, e) {
    return t === void 0 && (t = 0),
    e === void 0 && (e = Math.pow(10, t)),
    Math.round(e * i) / e + 0
}
  , Ke = function(i, t, e) {
    return t === void 0 && (t = 0),
    e === void 0 && (e = 1),
    i > e ? e : i > t ? i : t
}
  , td = function(i) {
    return (i = isFinite(i) ? i % 360 : 0) > 0 ? i : i + 360
}
  , Mu = function(i) {
    return {
        r: Ke(i.r, 0, 255),
        g: Ke(i.g, 0, 255),
        b: Ke(i.b, 0, 255),
        a: Ke(i.a)
    }
}
  , Eo = function(i) {
    return {
        r: xe(i.r),
        g: xe(i.g),
        b: xe(i.b),
        a: xe(i.a, 3)
    }
}
  , Cy = /^#([0-9a-f]{3,8})$/i
  , In = function(i) {
    var t = i.toString(16);
    return t.length < 2 ? "0" + t : t
}
  , ed = function(i) {
    var t = i.r
      , e = i.g
      , r = i.b
      , s = i.a
      , n = Math.max(t, e, r)
      , a = n - Math.min(t, e, r)
      , o = a ? n === t ? (e - r) / a : n === e ? 2 + (r - t) / a : 4 + (t - e) / a : 0;
    return {
        h: 60 * (o < 0 ? o + 6 : o),
        s: n ? a / n * 100 : 0,
        v: n / 255 * 100,
        a: s
    }
}
  , rd = function(i) {
    var t = i.h
      , e = i.s
      , r = i.v
      , s = i.a;
    t = t / 360 * 6,
    e /= 100,
    r /= 100;
    var n = Math.floor(t)
      , a = r * (1 - e)
      , o = r * (1 - (t - n) * e)
      , l = r * (1 - (1 - t + n) * e)
      , c = n % 6;
    return {
        r: 255 * [r, o, a, a, l, r][c],
        g: 255 * [l, r, r, o, a, a][c],
        b: 255 * [a, a, l, r, r, o][c],
        a: s
    }
}
  , Du = function(i) {
    return {
        h: td(i.h),
        s: Ke(i.s, 0, 100),
        l: Ke(i.l, 0, 100),
        a: Ke(i.a)
    }
}
  , Bu = function(i) {
    return {
        h: xe(i.h),
        s: xe(i.s),
        l: xe(i.l),
        a: xe(i.a, 3)
    }
}
  , Fu = function(i) {
    return rd((e = (t = i).s,
    {
        h: t.h,
        s: (e *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0 ? 2 * e / (r + e) * 100 : 0,
        v: r + e,
        a: t.a
    }));
    var t, e, r
}
  , Qs = function(i) {
    return {
        h: (t = ed(i)).h,
        s: (s = (200 - (e = t.s)) * (r = t.v) / 100) > 0 && s < 200 ? e * r / 100 / (s <= 100 ? s : 200 - s) * 100 : 0,
        l: s / 2,
        a: t.a
    };
    var t, e, r, s
}
  , Iy = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , Ry = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , Py = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , My = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , uh = {
    string: [[function(i) {
        var t = Cy.exec(i);
        return t ? (i = t[1]).length <= 4 ? {
            r: parseInt(i[0] + i[0], 16),
            g: parseInt(i[1] + i[1], 16),
            b: parseInt(i[2] + i[2], 16),
            a: i.length === 4 ? xe(parseInt(i[3] + i[3], 16) / 255, 2) : 1
        } : i.length === 6 || i.length === 8 ? {
            r: parseInt(i.substr(0, 2), 16),
            g: parseInt(i.substr(2, 2), 16),
            b: parseInt(i.substr(4, 2), 16),
            a: i.length === 8 ? xe(parseInt(i.substr(6, 2), 16) / 255, 2) : 1
        } : null : null
    }
    , "hex"], [function(i) {
        var t = Py.exec(i) || My.exec(i);
        return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Mu({
            r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
            g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
            b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
            a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
        }) : null
    }
    , "rgb"], [function(i) {
        var t = Iy.exec(i) || Ry.exec(i);
        if (!t)
            return null;
        var e, r, s = Du({
            h: (e = t[1],
            r = t[2],
            r === void 0 && (r = "deg"),
            Number(e) * (Sy[r] || 1)),
            s: Number(t[3]),
            l: Number(t[4]),
            a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
        });
        return Fu(s)
    }
    , "hsl"]],
    object: [[function(i) {
        var t = i.r
          , e = i.g
          , r = i.b
          , s = i.a
          , n = s === void 0 ? 1 : s;
        return jr(t) && jr(e) && jr(r) ? Mu({
            r: Number(t),
            g: Number(e),
            b: Number(r),
            a: Number(n)
        }) : null
    }
    , "rgb"], [function(i) {
        var t = i.h
          , e = i.s
          , r = i.l
          , s = i.a
          , n = s === void 0 ? 1 : s;
        if (!jr(t) || !jr(e) || !jr(r))
            return null;
        var a = Du({
            h: Number(t),
            s: Number(e),
            l: Number(r),
            a: Number(n)
        });
        return Fu(a)
    }
    , "hsl"], [function(i) {
        var t = i.h
          , e = i.s
          , r = i.v
          , s = i.a
          , n = s === void 0 ? 1 : s;
        if (!jr(t) || !jr(e) || !jr(r))
            return null;
        var a = function(o) {
            return {
                h: td(o.h),
                s: Ke(o.s, 0, 100),
                v: Ke(o.v, 0, 100),
                a: Ke(o.a)
            }
        }({
            h: Number(t),
            s: Number(e),
            v: Number(r),
            a: Number(n)
        });
        return rd(a)
    }
    , "hsv"]]
}
  , Ou = function(i, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e][0](i);
        if (r)
            return [r, t[e][1]]
    }
    return [null, void 0]
}
  , Dy = function(i) {
    return typeof i == "string" ? Ou(i.trim(), uh.string) : typeof i == "object" && i !== null ? Ou(i, uh.object) : [null, void 0]
}
  , Ao = function(i, t) {
    var e = Qs(i);
    return {
        h: e.h,
        s: Ke(e.s + 100 * t, 0, 100),
        l: e.l,
        a: e.a
    }
}
  , So = function(i) {
    return (299 * i.r + 587 * i.g + 114 * i.b) / 1e3 / 255
}
  , Nu = function(i, t) {
    var e = Qs(i);
    return {
        h: e.h,
        s: e.s,
        l: Ke(e.l + 100 * t, 0, 100),
        a: e.a
    }
}
  , ch = function() {
    function i(t) {
        this.parsed = Dy(t)[0],
        this.rgba = this.parsed || {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        }
    }
    return i.prototype.isValid = function() {
        return this.parsed !== null
    }
    ,
    i.prototype.brightness = function() {
        return xe(So(this.rgba), 2)
    }
    ,
    i.prototype.isDark = function() {
        return So(this.rgba) < .5
    }
    ,
    i.prototype.isLight = function() {
        return So(this.rgba) >= .5
    }
    ,
    i.prototype.toHex = function() {
        return t = Eo(this.rgba),
        e = t.r,
        r = t.g,
        s = t.b,
        a = (n = t.a) < 1 ? In(xe(255 * n)) : "",
        "#" + In(e) + In(r) + In(s) + a;
        var t, e, r, s, n, a
    }
    ,
    i.prototype.toRgb = function() {
        return Eo(this.rgba)
    }
    ,
    i.prototype.toRgbString = function() {
        return t = Eo(this.rgba),
        e = t.r,
        r = t.g,
        s = t.b,
        (n = t.a) < 1 ? "rgba(" + e + ", " + r + ", " + s + ", " + n + ")" : "rgb(" + e + ", " + r + ", " + s + ")";
        var t, e, r, s, n
    }
    ,
    i.prototype.toHsl = function() {
        return Bu(Qs(this.rgba))
    }
    ,
    i.prototype.toHslString = function() {
        return t = Bu(Qs(this.rgba)),
        e = t.h,
        r = t.s,
        s = t.l,
        (n = t.a) < 1 ? "hsla(" + e + ", " + r + "%, " + s + "%, " + n + ")" : "hsl(" + e + ", " + r + "%, " + s + "%)";
        var t, e, r, s, n
    }
    ,
    i.prototype.toHsv = function() {
        return t = ed(this.rgba),
        {
            h: xe(t.h),
            s: xe(t.s),
            v: xe(t.v),
            a: xe(t.a, 3)
        };
        var t
    }
    ,
    i.prototype.invert = function() {
        return Tr({
            r: 255 - (t = this.rgba).r,
            g: 255 - t.g,
            b: 255 - t.b,
            a: t.a
        });
        var t
    }
    ,
    i.prototype.saturate = function(t) {
        return t === void 0 && (t = .1),
        Tr(Ao(this.rgba, t))
    }
    ,
    i.prototype.desaturate = function(t) {
        return t === void 0 && (t = .1),
        Tr(Ao(this.rgba, -t))
    }
    ,
    i.prototype.grayscale = function() {
        return Tr(Ao(this.rgba, -1))
    }
    ,
    i.prototype.lighten = function(t) {
        return t === void 0 && (t = .1),
        Tr(Nu(this.rgba, t))
    }
    ,
    i.prototype.darken = function(t) {
        return t === void 0 && (t = .1),
        Tr(Nu(this.rgba, -t))
    }
    ,
    i.prototype.rotate = function(t) {
        return t === void 0 && (t = 15),
        this.hue(this.hue() + t)
    }
    ,
    i.prototype.alpha = function(t) {
        return typeof t == "number" ? Tr({
            r: (e = this.rgba).r,
            g: e.g,
            b: e.b,
            a: t
        }) : xe(this.rgba.a, 3);
        var e
    }
    ,
    i.prototype.hue = function(t) {
        var e = Qs(this.rgba);
        return typeof t == "number" ? Tr({
            h: t,
            s: e.s,
            l: e.l,
            a: e.a
        }) : xe(e.h)
    }
    ,
    i.prototype.isEqual = function(t) {
        return this.toHex() === Tr(t).toHex()
    }
    ,
    i
}()
  , Tr = function(i) {
    return i instanceof ch ? i : new ch(i)
}
  , Lu = []
  , By = function(i) {
    i.forEach(function(t) {
        Lu.indexOf(t) < 0 && (t(ch, uh),
        Lu.push(t))
    })
};
function Fy(i, t) {
    var e = {
        white: "#ffffff",
        bisque: "#ffe4c4",
        blue: "#0000ff",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        azure: "#f0ffff",
        whitesmoke: "#f5f5f5",
        papayawhip: "#ffefd5",
        plum: "#dda0dd",
        blanchedalmond: "#ffebcd",
        black: "#000000",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gainsboro: "#dcdcdc",
        cornsilk: "#fff8dc",
        cornflowerblue: "#6495ed",
        burlywood: "#deb887",
        aquamarine: "#7fffd4",
        beige: "#f5f5dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkkhaki: "#bdb76b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        peachpuff: "#ffdab9",
        darkmagenta: "#8b008b",
        darkred: "#8b0000",
        darkorchid: "#9932cc",
        darkorange: "#ff8c00",
        darkslateblue: "#483d8b",
        gray: "#808080",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        wheat: "#f5deb3",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        ghostwhite: "#f8f8ff",
        darkviolet: "#9400d3",
        magenta: "#ff00ff",
        green: "#008000",
        dodgerblue: "#1e90ff",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        blueviolet: "#8a2be2",
        forestgreen: "#228b22",
        lawngreen: "#7cfc00",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        fuchsia: "#ff00ff",
        brown: "#a52a2a",
        maroon: "#800000",
        mediumblue: "#0000cd",
        lightcoral: "#f08080",
        darkturquoise: "#00ced1",
        lightcyan: "#e0ffff",
        ivory: "#fffff0",
        lightyellow: "#ffffe0",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        linen: "#faf0e6",
        mediumaquamarine: "#66cdaa",
        lemonchiffon: "#fffacd",
        lime: "#00ff00",
        khaki: "#f0e68c",
        mediumseagreen: "#3cb371",
        limegreen: "#32cd32",
        mediumspringgreen: "#00fa9a",
        lightskyblue: "#87cefa",
        lightblue: "#add8e6",
        midnightblue: "#191970",
        lightpink: "#ffb6c1",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        mintcream: "#f5fffa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        navajowhite: "#ffdead",
        navy: "#000080",
        mediumvioletred: "#c71585",
        powderblue: "#b0e0e6",
        palegoldenrod: "#eee8aa",
        oldlace: "#fdf5e6",
        paleturquoise: "#afeeee",
        mediumturquoise: "#48d1cc",
        mediumorchid: "#ba55d3",
        rebeccapurple: "#663399",
        lightsteelblue: "#b0c4de",
        mediumslateblue: "#7b68ee",
        thistle: "#d8bfd8",
        tan: "#d2b48c",
        orchid: "#da70d6",
        mediumpurple: "#9370db",
        purple: "#800080",
        pink: "#ffc0cb",
        skyblue: "#87ceeb",
        springgreen: "#00ff7f",
        palegreen: "#98fb98",
        red: "#ff0000",
        yellow: "#ffff00",
        slateblue: "#6a5acd",
        lavenderblush: "#fff0f5",
        peru: "#cd853f",
        palevioletred: "#db7093",
        violet: "#ee82ee",
        teal: "#008080",
        slategray: "#708090",
        slategrey: "#708090",
        aliceblue: "#f0f8ff",
        darkseagreen: "#8fbc8f",
        darkolivegreen: "#556b2f",
        greenyellow: "#adff2f",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        tomato: "#ff6347",
        silver: "#c0c0c0",
        sienna: "#a0522d",
        lavender: "#e6e6fa",
        lightgreen: "#90ee90",
        orange: "#ffa500",
        orangered: "#ff4500",
        steelblue: "#4682b4",
        royalblue: "#4169e1",
        turquoise: "#40e0d0",
        yellowgreen: "#9acd32",
        salmon: "#fa8072",
        saddlebrown: "#8b4513",
        sandybrown: "#f4a460",
        rosybrown: "#bc8f8f",
        darksalmon: "#e9967a",
        lightgoldenrodyellow: "#fafad2",
        snow: "#fffafa",
        lightgrey: "#d3d3d3",
        lightgray: "#d3d3d3",
        dimgray: "#696969",
        dimgrey: "#696969",
        olivedrab: "#6b8e23",
        olive: "#808000"
    }
      , r = {};
    for (var s in e)
        r[e[s]] = s;
    var n = {};
    i.prototype.toName = function(a) {
        if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
            return "transparent";
        var o, l, c = r[this.toHex()];
        if (c)
            return c;
        if (a != null && a.closest) {
            var p = this.toRgb()
              , m = 1 / 0
              , f = "black";
            if (!n.length)
                for (var v in e)
                    n[v] = new i(e[v]).toRgb();
            for (var _ in e) {
                var T = (o = p,
                l = n[_],
                Math.pow(o.r - l.r, 2) + Math.pow(o.g - l.g, 2) + Math.pow(o.b - l.b, 2));
                T < m && (m = T,
                f = _)
            }
            return f
        }
    }
    ,
    t.string.push([function(a) {
        var o = a.toLowerCase()
          , l = o === "transparent" ? "#0000" : e[o];
        return l ? new i(l).toRgb() : null
    }
    , "name"])
}
By([Fy]);
const Zi = class Zn {
    constructor(t=16777215) {
        this._value = null,
        this._components = new Float32Array(4),
        this._components.fill(1),
        this._int = 16777215,
        this.value = t
    }
    get red() {
        return this._components[0]
    }
    get green() {
        return this._components[1]
    }
    get blue() {
        return this._components[2]
    }
    get alpha() {
        return this._components[3]
    }
    setValue(t) {
        return this.value = t,
        this
    }
    set value(t) {
        if (t instanceof Zn)
            this._value = this.cloneSource(t._value),
            this._int = t._int,
            this._components.set(t._components);
        else {
            if (t === null)
                throw new Error("Cannot set PIXI.Color#value to null");
            (this._value === null || !this.isSourceEqual(this._value, t)) && (this.normalize(t),
            this._value = this.cloneSource(t))
        }
    }
    get value() {
        return this._value
    }
    cloneSource(t) {
        return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? {
            ...t
        } : t
    }
    isSourceEqual(t, e) {
        const r = typeof t;
        if (r !== typeof e)
            return !1;
        if (r === "number" || r === "string" || t instanceof Number)
            return t === e;
        if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e))
            return t.length !== e.length ? !1 : t.every( (s, n) => s === e[n]);
        if (t !== null && e !== null) {
            const s = Object.keys(t)
              , n = Object.keys(e);
            return s.length !== n.length ? !1 : s.every(a => t[a] === e[a])
        }
        return t === e
    }
    toRgba() {
        const [t,e,r,s] = this._components;
        return {
            r: t,
            g: e,
            b: r,
            a: s
        }
    }
    toRgb() {
        const [t,e,r] = this._components;
        return {
            r: t,
            g: e,
            b: r
        }
    }
    toRgbaString() {
        const [t,e,r] = this.toUint8RgbArray();
        return `rgba(${t},${e},${r},${this.alpha})`
    }
    toUint8RgbArray(t) {
        const [e,r,s] = this._components;
        return t = t ?? [],
        t[0] = Math.round(e * 255),
        t[1] = Math.round(r * 255),
        t[2] = Math.round(s * 255),
        t
    }
    toRgbArray(t) {
        t = t ?? [];
        const [e,r,s] = this._components;
        return t[0] = e,
        t[1] = r,
        t[2] = s,
        t
    }
    toNumber() {
        return this._int
    }
    toLittleEndianNumber() {
        const t = this._int;
        return (t >> 16) + (t & 65280) + ((t & 255) << 16)
    }
    multiply(t) {
        const [e,r,s,n] = Zn.temp.setValue(t)._components;
        return this._components[0] *= e,
        this._components[1] *= r,
        this._components[2] *= s,
        this._components[3] *= n,
        this.refreshInt(),
        this._value = null,
        this
    }
    premultiply(t, e=!0) {
        return e && (this._components[0] *= t,
        this._components[1] *= t,
        this._components[2] *= t),
        this._components[3] = t,
        this.refreshInt(),
        this._value = null,
        this
    }
    toPremultiplied(t, e=!0) {
        if (t === 1)
            return (255 << 24) + this._int;
        if (t === 0)
            return e ? 0 : this._int;
        let r = this._int >> 16 & 255
          , s = this._int >> 8 & 255
          , n = this._int & 255;
        return e && (r = r * t + .5 | 0,
        s = s * t + .5 | 0,
        n = n * t + .5 | 0),
        (t * 255 << 24) + (r << 16) + (s << 8) + n
    }
    toHex() {
        const t = this._int.toString(16);
        return `#${"000000".substring(0, 6 - t.length) + t}`
    }
    toHexa() {
        const t = Math.round(this._components[3] * 255).toString(16);
        return this.toHex() + "00".substring(0, 2 - t.length) + t
    }
    setAlpha(t) {
        return this._components[3] = this._clamp(t),
        this
    }
    round(t) {
        const [e,r,s] = this._components;
        return this._components[0] = Math.round(e * t) / t,
        this._components[1] = Math.round(r * t) / t,
        this._components[2] = Math.round(s * t) / t,
        this.refreshInt(),
        this._value = null,
        this
    }
    toArray(t) {
        t = t ?? [];
        const [e,r,s,n] = this._components;
        return t[0] = e,
        t[1] = r,
        t[2] = s,
        t[3] = n,
        t
    }
    normalize(t) {
        let e, r, s, n;
        if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
            const a = t;
            e = (a >> 16 & 255) / 255,
            r = (a >> 8 & 255) / 255,
            s = (a & 255) / 255,
            n = 1
        } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t),
            [e,r,s,n=1] = t;
        else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t, 0, 255),
            [e,r,s,n=255] = t,
            e /= 255,
            r /= 255,
            s /= 255,
            n /= 255;
        else if (typeof t == "string" || typeof t == "object") {
            if (typeof t == "string") {
                const o = Zn.HEX_PATTERN.exec(t);
                o && (t = `#${o[2]}`)
            }
            const a = Tr(t);
            a.isValid() && ({r: e, g: r, b: s, a: n} = a.rgba,
            e /= 255,
            r /= 255,
            s /= 255)
        }
        if (e !== void 0)
            this._components[0] = e,
            this._components[1] = r,
            this._components[2] = s,
            this._components[3] = n,
            this.refreshInt();
        else
            throw new Error(`Unable to convert color ${t}`)
    }
    refreshInt() {
        this._clamp(this._components);
        const [t,e,r] = this._components;
        this._int = (t * 255 << 16) + (e * 255 << 8) + (r * 255 | 0)
    }
    _clamp(t, e=0, r=1) {
        return typeof t == "number" ? Math.min(Math.max(t, e), r) : (t.forEach( (s, n) => {
            t[n] = Math.min(Math.max(s, e), r)
        }
        ),
        t)
    }
}
;
Zi.shared = new Zi,
Zi.temp = new Zi,
Zi.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let Pt = Zi;
function Oy(i, t=[]) {
    return vt("7.2.0", "utils.hex2rgb is deprecated, use Color#toRgbArray instead"),
    Pt.shared.setValue(i).toRgbArray(t)
}
function id(i) {
    return vt("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"),
    Pt.shared.setValue(i).toHex()
}
function Ny(i) {
    return vt("7.2.0", "utils.string2hex is deprecated, use Color#toNumber instead"),
    Pt.shared.setValue(i).toNumber()
}
function sd(i) {
    return vt("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"),
    Pt.shared.setValue(i).toNumber()
}
function Ly() {
    const i = []
      , t = [];
    for (let r = 0; r < 32; r++)
        i[r] = r,
        t[r] = r;
    i[Y.NORMAL_NPM] = Y.NORMAL,
    i[Y.ADD_NPM] = Y.ADD,
    i[Y.SCREEN_NPM] = Y.SCREEN,
    t[Y.NORMAL] = Y.NORMAL_NPM,
    t[Y.ADD] = Y.ADD_NPM,
    t[Y.SCREEN] = Y.SCREEN_NPM;
    const e = [];
    return e.push(t),
    e.push(i),
    e
}
const al = Ly();
function ol(i, t) {
    return al[t ? 1 : 0][i]
}
function ky(i, t, e, r=!0) {
    return vt("7.2.0", "utils.premultiplyRgba has moved to Color.premultiply"),
    Pt.shared.setValue(i).premultiply(t, r).toArray(e ?? new Float32Array(4))
}
function Uy(i, t) {
    return vt("7.2.0", "utils.premultiplyTint has moved to Color.toPremultiplied"),
    Pt.shared.setValue(i).toPremultiplied(t)
}
function Gy(i, t, e, r=!0) {
    return vt("7.2.0", "utils.premultiplyTintToRgba has moved to Color.premultiply"),
    Pt.shared.setValue(i).premultiply(t, r).toArray(e ?? new Float32Array(4))
}
const nd = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
function ad(i, t=null) {
    const e = i * 6;
    if (t = t || new Uint16Array(e),
    t.length !== e)
        throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${e}`);
    for (let r = 0, s = 0; r < e; r += 6,
    s += 4)
        t[r + 0] = s + 0,
        t[r + 1] = s + 1,
        t[r + 2] = s + 2,
        t[r + 3] = s + 0,
        t[r + 4] = s + 2,
        t[r + 5] = s + 3;
    return t
}
function Ra(i) {
    if (i.BYTES_PER_ELEMENT === 4)
        return i instanceof Float32Array ? "Float32Array" : i instanceof Uint32Array ? "Uint32Array" : "Int32Array";
    if (i.BYTES_PER_ELEMENT === 2) {
        if (i instanceof Uint16Array)
            return "Uint16Array"
    } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array)
        return "Uint8Array";
    return null
}
const Hy = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
};
function Vy(i, t) {
    let e = 0
      , r = 0;
    const s = {};
    for (let l = 0; l < i.length; l++)
        r += t[l],
        e += i[l].length;
    const n = new ArrayBuffer(e * 4);
    let a = null
      , o = 0;
    for (let l = 0; l < i.length; l++) {
        const c = t[l]
          , p = i[l]
          , m = Ra(p);
        s[m] || (s[m] = new Hy[m](n)),
        a = s[m];
        for (let f = 0; f < p.length; f++) {
            const v = (f / c | 0) * r + o
              , _ = f % c;
            a[v + _] = p[f]
        }
        o += c
    }
    return new Float32Array(n)
}
function rn(i) {
    return i += i === 0 ? 1 : 0,
    --i,
    i |= i >>> 1,
    i |= i >>> 2,
    i |= i >>> 4,
    i |= i >>> 8,
    i |= i >>> 16,
    i + 1
}
function dh(i) {
    return !(i & i - 1) && !!i
}
function fh(i) {
    let t = (i > 65535 ? 1 : 0) << 4;
    i >>>= t;
    let e = (i > 255 ? 1 : 0) << 3;
    return i >>>= e,
    t |= e,
    e = (i > 15 ? 1 : 0) << 2,
    i >>>= e,
    t |= e,
    e = (i > 3 ? 1 : 0) << 1,
    i >>>= e,
    t |= e,
    t | i >> 1
}
function Pi(i, t, e) {
    const r = i.length;
    let s;
    if (t >= r || e === 0)
        return;
    e = t + e > r ? r - t : e;
    const n = r - e;
    for (s = t; s < n; ++s)
        i[s] = i[s + e];
    i.length = n
}
function Wr(i) {
    return i === 0 ? 0 : i < 0 ? -1 : 1
}
let $y = 0;
function hi() {
    return ++$y
}
const ph = class {
    constructor(i, t, e, r) {
        this.left = i,
        this.top = t,
        this.right = e,
        this.bottom = r
    }
    get width() {
        return this.right - this.left
    }
    get height() {
        return this.bottom - this.top
    }
    isEmpty() {
        return this.left === this.right || this.top === this.bottom
    }
}
;
ph.EMPTY = new ph(0,0,0,0);
let gh = ph;
const mh = {}
  , Me = Object.create(null)
  , $e = Object.create(null);
function jy() {
    let i;
    for (i in Me)
        Me[i].destroy();
    for (i in $e)
        $e[i].destroy()
}
function Wy() {
    let i;
    for (i in Me)
        delete Me[i];
    for (i in $e)
        delete $e[i]
}
class hn {
    constructor(t, e, r) {
        this._canvas = nt.ADAPTER.createCanvas(),
        this._context = this._canvas.getContext("2d"),
        this.resolution = r || nt.RESOLUTION,
        this.resize(t, e)
    }
    clear() {
        this._checkDestroyed(),
        this._context.setTransform(1, 0, 0, 1, 0, 0),
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
    resize(t, e) {
        this._checkDestroyed(),
        this._canvas.width = Math.round(t * this.resolution),
        this._canvas.height = Math.round(e * this.resolution)
    }
    destroy() {
        this._context = null,
        this._canvas = null
    }
    get width() {
        return this._checkDestroyed(),
        this._canvas.width
    }
    set width(t) {
        this._checkDestroyed(),
        this._canvas.width = Math.round(t)
    }
    get height() {
        return this._checkDestroyed(),
        this._canvas.height
    }
    set height(t) {
        this._checkDestroyed(),
        this._canvas.height = Math.round(t)
    }
    get canvas() {
        return this._checkDestroyed(),
        this._canvas
    }
    get context() {
        return this._checkDestroyed(),
        this._context
    }
    _checkDestroyed() {
        if (this._canvas === null)
            throw new TypeError("The CanvasRenderTarget has already been destroyed")
    }
}
function ku(i, t, e) {
    for (let r = 0, s = 4 * e * t; r < t; ++r,
    s += 4)
        if (i[s + 3] !== 0)
            return !1;
    return !0
}
function Uu(i, t, e, r, s) {
    const n = 4 * t;
    for (let a = r, o = r * n + 4 * e; a <= s; ++a,
    o += n)
        if (i[o + 3] !== 0)
            return !1;
    return !0
}
function od(i) {
    const {width: t, height: e} = i
      , r = i.getContext("2d", {
        willReadFrequently: !0
    });
    if (r === null)
        throw new TypeError("Failed to get canvas 2D context");
    const s = r.getImageData(0, 0, t, e).data;
    let n = 0
      , a = 0
      , o = t - 1
      , l = e - 1;
    for (; a < e && ku(s, t, a); )
        ++a;
    if (a === e)
        return gh.EMPTY;
    for (; ku(s, t, l); )
        --l;
    for (; Uu(s, t, n, a, l); )
        ++n;
    for (; Uu(s, t, o, a, l); )
        --o;
    return ++o,
    ++l,
    new gh(n,a,o,l)
}
function hd(i) {
    const t = od(i)
      , {width: e, height: r} = t;
    let s = null;
    if (!t.isEmpty()) {
        const n = i.getContext("2d");
        if (n === null)
            throw new TypeError("Failed to get canvas 2D context");
        s = n.getImageData(t.left, t.top, e, r)
    }
    return {
        width: e,
        height: r,
        data: s
    }
}
function Xy(i) {
    const t = nd.exec(i);
    if (t)
        return {
            mediaType: t[1] ? t[1].toLowerCase() : void 0,
            subType: t[2] ? t[2].toLowerCase() : void 0,
            charset: t[3] ? t[3].toLowerCase() : void 0,
            encoding: t[4] ? t[4].toLowerCase() : void 0,
            data: t[5]
        }
}
function ld(i, t=globalThis.location) {
    if (i.startsWith("data:"))
        return "";
    t = t || globalThis.location;
    const e = new URL(i,document.baseURI);
    return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : ""
}
function Fr(i, t=1) {
    var r;
    const e = (r = nt.RETINA_PREFIX) == null ? void 0 : r.exec(i);
    return e ? parseFloat(e[1]) : t
}
const zy = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTextureCache: $e,
    BoundingBox: gh,
    CanvasRenderTarget: hn,
    DATA_URI: nd,
    EventEmitter: vs,
    ProgramCache: mh,
    TextureCache: Me,
    clearTextureCache: Wy,
    correctBlendMode: ol,
    createIndicesForQuads: ad,
    decomposeDataUri: Xy,
    deprecation: vt,
    destroyTextureCache: jy,
    detectVideoAlphaMode: Qc,
    determineCrossOrigin: ld,
    earcut: Mc,
    getBufferType: Ra,
    getCanvasBoundingBox: od,
    getResolutionOfUrl: Fr,
    hex2rgb: Oy,
    hex2string: id,
    interleaveTypedArrays: Vy,
    isMobile: Pr,
    isPow2: dh,
    isWebGLSupported: Jc,
    log2: fh,
    nextPow2: rn,
    path: ge,
    premultiplyBlendMode: al,
    premultiplyRgba: ky,
    premultiplyTint: Uy,
    premultiplyTintToRgba: Gy,
    removeItems: Pi,
    rgb2hex: sd,
    sayHello: Ay,
    sign: Wr,
    skipHello: Ey,
    string2hex: Ny,
    trimCanvas: hd,
    uid: hi,
    url: xy
}, Symbol.toStringTag, {
    value: "Module"
}));
var et = (i => (i.Renderer = "renderer",
i.Application = "application",
i.RendererSystem = "renderer-webgl-system",
i.RendererPlugin = "renderer-webgl-plugin",
i.CanvasRendererSystem = "renderer-canvas-system",
i.CanvasRendererPlugin = "renderer-canvas-plugin",
i.Asset = "asset",
i.LoadParser = "load-parser",
i.ResolveParser = "resolve-parser",
i.CacheParser = "cache-parser",
i.DetectionParser = "detection-parser",
i))(et || {});
const yh = i => {
    if (typeof i == "function" || typeof i == "object" && i.extension) {
        if (!i.extension)
            throw new Error("Extension class must have an extension object");
        i = {
            ...typeof i.extension != "object" ? {
                type: i.extension
            } : i.extension,
            ref: i
        }
    }
    if (typeof i == "object")
        i = {
            ...i
        };
    else
        throw new Error("Invalid extension type");
    return typeof i.type == "string" && (i.type = [i.type]),
    i
}
  , Gu = (i, t) => yh(i).priority ?? t
  , ot = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...i) {
        return i.map(yh).forEach(t => {
            t.type.forEach(e => {
                var r, s;
                return (s = (r = this._removeHandlers)[e]) == null ? void 0 : s.call(r, t)
            }
            )
        }
        ),
        this
    },
    add(...i) {
        return i.map(yh).forEach(t => {
            t.type.forEach(e => {
                var n, a;
                const r = this._addHandlers
                  , s = this._queue;
                r[e] ? (n = r[e]) == null || n.call(r, t) : (s[e] = s[e] || [],
                (a = s[e]) == null || a.push(t))
            }
            )
        }
        ),
        this
    },
    handle(i, t, e) {
        var a;
        const r = this._addHandlers
          , s = this._removeHandlers;
        if (r[i] || s[i])
            throw new Error(`Extension type ${i} already has a handler`);
        r[i] = t,
        s[i] = e;
        const n = this._queue;
        return n[i] && ((a = n[i]) == null || a.forEach(o => t(o)),
        delete n[i]),
        this
    },
    handleByMap(i, t) {
        return this.handle(i, e => {
            e.name && (t[e.name] = e.ref)
        }
        , e => {
            e.name && delete t[e.name]
        }
        )
    },
    handleByList(i, t, e=-1) {
        return this.handle(i, r => {
            t.includes(r.ref) || (t.push(r.ref),
            t.sort( (s, n) => Gu(n, e) - Gu(s, e)))
        }
        , r => {
            const s = t.indexOf(r.ref);
            s !== -1 && t.splice(s, 1)
        }
        )
    }
};
class vh {
    constructor(t) {
        typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t,
        this.uint32View = new Uint32Array(this.rawBinaryData),
        this.float32View = new Float32Array(this.rawBinaryData)
    }
    get int8View() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)),
        this._int8View
    }
    get uint8View() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)),
        this._uint8View
    }
    get int16View() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)),
        this._int16View
    }
    get uint16View() {
        return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)),
        this._uint16View
    }
    get int32View() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)),
        this._int32View
    }
    view(t) {
        return this[`${t}View`]
    }
    destroy() {
        this.rawBinaryData = null,
        this._int8View = null,
        this._uint8View = null,
        this._int16View = null,
        this._uint16View = null,
        this._int32View = null,
        this.uint32View = null,
        this.float32View = null
    }
    static sizeOf(t) {
        switch (t) {
        case "int8":
        case "uint8":
            return 1;
        case "int16":
        case "uint16":
            return 2;
        case "int32":
        case "uint32":
        case "float32":
            return 4;
        default:
            throw new Error(`${t} isn't a valid view type`)
        }
    }
}
const Yy = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function qy(i) {
    let t = "";
    for (let e = 0; e < i; ++e)
        e > 0 && (t += `
else `),
        e < i - 1 && (t += `if(test == ${e}.0){}`);
    return t
}
function Ky(i, t) {
    if (i === 0)
        throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    const e = t.createShader(t.FRAGMENT_SHADER);
    for (; ; ) {
        const r = Yy.replace(/%forloop%/gi, qy(i));
        if (t.shaderSource(e, r),
        t.compileShader(e),
        !t.getShaderParameter(e, t.COMPILE_STATUS))
            i = i / 2 | 0;
        else
            break
    }
    return i
}
const Co = 0
  , Io = 1
  , Ro = 2
  , Po = 3
  , Mo = 4
  , Do = 5;
class Nr {
    constructor() {
        this.data = 0,
        this.blendMode = Y.NORMAL,
        this.polygonOffset = 0,
        this.blend = !0,
        this.depthMask = !0
    }
    get blend() {
        return !!(this.data & 1 << Co)
    }
    set blend(t) {
        !!(this.data & 1 << Co) !== t && (this.data ^= 1 << Co)
    }
    get offsets() {
        return !!(this.data & 1 << Io)
    }
    set offsets(t) {
        !!(this.data & 1 << Io) !== t && (this.data ^= 1 << Io)
    }
    get culling() {
        return !!(this.data & 1 << Ro)
    }
    set culling(t) {
        !!(this.data & 1 << Ro) !== t && (this.data ^= 1 << Ro)
    }
    get depthTest() {
        return !!(this.data & 1 << Po)
    }
    set depthTest(t) {
        !!(this.data & 1 << Po) !== t && (this.data ^= 1 << Po)
    }
    get depthMask() {
        return !!(this.data & 1 << Do)
    }
    set depthMask(t) {
        !!(this.data & 1 << Do) !== t && (this.data ^= 1 << Do)
    }
    get clockwiseFrontFace() {
        return !!(this.data & 1 << Mo)
    }
    set clockwiseFrontFace(t) {
        !!(this.data & 1 << Mo) !== t && (this.data ^= 1 << Mo)
    }
    get blendMode() {
        return this._blendMode
    }
    set blendMode(t) {
        this.blend = t !== Y.NONE,
        this._blendMode = t
    }
    get polygonOffset() {
        return this._polygonOffset
    }
    set polygonOffset(t) {
        this.offsets = !!t,
        this._polygonOffset = t
    }
    static for2d() {
        const t = new Nr;
        return t.depthTest = !1,
        t.blend = !0,
        t
    }
}
Nr.prototype.toString = function() {
    return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`
}
;
const _h = [];
function ud(i, t) {
    if (!i)
        return null;
    let e = "";
    if (typeof i == "string") {
        const r = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
        r && (e = r[1].toLowerCase())
    }
    for (let r = _h.length - 1; r >= 0; --r) {
        const s = _h[r];
        if (s.test && s.test(i, e))
            return new s(i,t)
    }
    throw new Error("Unrecognized source type to auto-detect Resource")
}
class ur {
    constructor(t) {
        this.items = [],
        this._name = t,
        this._aliasCount = 0
    }
    emit(t, e, r, s, n, a, o, l) {
        if (arguments.length > 8)
            throw new Error("max arguments reached");
        const {name: c, items: p} = this;
        this._aliasCount++;
        for (let m = 0, f = p.length; m < f; m++)
            p[m][c](t, e, r, s, n, a, o, l);
        return p === this.items && this._aliasCount--,
        this
    }
    ensureNonAliasedItems() {
        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0,
        this.items = this.items.slice(0))
    }
    add(t) {
        return t[this._name] && (this.ensureNonAliasedItems(),
        this.remove(t),
        this.items.push(t)),
        this
    }
    remove(t) {
        const e = this.items.indexOf(t);
        return e !== -1 && (this.ensureNonAliasedItems(),
        this.items.splice(e, 1)),
        this
    }
    contains(t) {
        return this.items.includes(t)
    }
    removeAll() {
        return this.ensureNonAliasedItems(),
        this.items.length = 0,
        this
    }
    destroy() {
        this.removeAll(),
        this.items.length = 0,
        this._name = ""
    }
    get empty() {
        return this.items.length === 0
    }
    get name() {
        return this._name
    }
}
Object.defineProperties(ur.prototype, {
    dispatch: {
        value: ur.prototype.emit
    },
    run: {
        value: ur.prototype.emit
    }
});
class sn {
    constructor(t=0, e=0) {
        this._width = t,
        this._height = e,
        this.destroyed = !1,
        this.internal = !1,
        this.onResize = new ur("setRealSize"),
        this.onUpdate = new ur("update"),
        this.onError = new ur("onError")
    }
    bind(t) {
        this.onResize.add(t),
        this.onUpdate.add(t),
        this.onError.add(t),
        (this._width || this._height) && this.onResize.emit(this._width, this._height)
    }
    unbind(t) {
        this.onResize.remove(t),
        this.onUpdate.remove(t),
        this.onError.remove(t)
    }
    resize(t, e) {
        (t !== this._width || e !== this._height) && (this._width = t,
        this._height = e,
        this.onResize.emit(t, e))
    }
    get valid() {
        return !!this._width && !!this._height
    }
    update() {
        this.destroyed || this.onUpdate.emit()
    }
    load() {
        return Promise.resolve(this)
    }
    get width() {
        return this._width
    }
    get height() {
        return this._height
    }
    style(t, e, r) {
        return !1
    }
    dispose() {}
    destroy() {
        this.destroyed || (this.destroyed = !0,
        this.dispose(),
        this.onError.removeAll(),
        this.onError = null,
        this.onResize.removeAll(),
        this.onResize = null,
        this.onUpdate.removeAll(),
        this.onUpdate = null)
    }
    static test(t, e) {
        return !1
    }
}
class Pa extends sn {
    constructor(t, e) {
        const {width: r, height: s} = e || {};
        if (!r || !s)
            throw new Error("BufferResource width or height invalid");
        super(r, s),
        this.data = t,
        this.unpackAlignment = e.unpackAlignment ?? 4
    }
    upload(t, e, r) {
        const s = t.gl;
        s.pixelStorei(s.UNPACK_ALIGNMENT, this.unpackAlignment),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ke.UNPACK);
        const n = e.realWidth
          , a = e.realHeight;
        return r.width === n && r.height === a ? s.texSubImage2D(e.target, 0, 0, 0, n, a, e.format, r.type, this.data) : (r.width = n,
        r.height = a,
        s.texImage2D(e.target, 0, r.internalFormat, n, a, 0, e.format, r.type, this.data)),
        !0
    }
    dispose() {
        this.data = null
    }
    static test(t) {
        return t === null || t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array
    }
}
const Zy = {
    scaleMode: hr.NEAREST,
    alphaMode: ke.NPM
}
  , xh = class Qi extends vs {
    constructor(t=null, e=null) {
        super(),
        e = Object.assign({}, Qi.defaultOptions, e);
        const {alphaMode: r, mipmap: s, anisotropicLevel: n, scaleMode: a, width: o, height: l, wrapMode: c, format: p, type: m, target: f, resolution: v, resourceOptions: _} = e;
        t && !(t instanceof sn) && (t = ud(t, _),
        t.internal = !0),
        this.resolution = v || nt.RESOLUTION,
        this.width = Math.round((o || 0) * this.resolution) / this.resolution,
        this.height = Math.round((l || 0) * this.resolution) / this.resolution,
        this._mipmap = s,
        this.anisotropicLevel = n,
        this._wrapMode = c,
        this._scaleMode = a,
        this.format = p,
        this.type = m,
        this.target = f,
        this.alphaMode = r,
        this.uid = hi(),
        this.touched = 0,
        this.isPowerOfTwo = !1,
        this._refreshPOT(),
        this._glTextures = {},
        this.dirtyId = 0,
        this.dirtyStyleId = 0,
        this.cacheId = null,
        this.valid = o > 0 && l > 0,
        this.textureCacheIds = [],
        this.destroyed = !1,
        this.resource = null,
        this._batchEnabled = 0,
        this._batchLocation = 0,
        this.parentTextureArray = null,
        this.setResource(t)
    }
    get realWidth() {
        return Math.round(this.width * this.resolution)
    }
    get realHeight() {
        return Math.round(this.height * this.resolution)
    }
    get mipmap() {
        return this._mipmap
    }
    set mipmap(t) {
        this._mipmap !== t && (this._mipmap = t,
        this.dirtyStyleId++)
    }
    get scaleMode() {
        return this._scaleMode
    }
    set scaleMode(t) {
        this._scaleMode !== t && (this._scaleMode = t,
        this.dirtyStyleId++)
    }
    get wrapMode() {
        return this._wrapMode
    }
    set wrapMode(t) {
        this._wrapMode !== t && (this._wrapMode = t,
        this.dirtyStyleId++)
    }
    setStyle(t, e) {
        let r;
        return t !== void 0 && t !== this.scaleMode && (this.scaleMode = t,
        r = !0),
        e !== void 0 && e !== this.mipmap && (this.mipmap = e,
        r = !0),
        r && this.dirtyStyleId++,
        this
    }
    setSize(t, e, r) {
        return r = r || this.resolution,
        this.setRealSize(t * r, e * r, r)
    }
    setRealSize(t, e, r) {
        return this.resolution = r || this.resolution,
        this.width = Math.round(t) / this.resolution,
        this.height = Math.round(e) / this.resolution,
        this._refreshPOT(),
        this.update(),
        this
    }
    _refreshPOT() {
        this.isPowerOfTwo = dh(this.realWidth) && dh(this.realHeight)
    }
    setResolution(t) {
        const e = this.resolution;
        return e === t ? this : (this.resolution = t,
        this.valid && (this.width = Math.round(this.width * e) / t,
        this.height = Math.round(this.height * e) / t,
        this.emit("update", this)),
        this._refreshPOT(),
        this)
    }
    setResource(t) {
        if (this.resource === t)
            return this;
        if (this.resource)
            throw new Error("Resource can be set only once");
        return t.bind(this),
        this.resource = t,
        this
    }
    update() {
        this.valid ? (this.dirtyId++,
        this.dirtyStyleId++,
        this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0,
        this.emit("loaded", this),
        this.emit("update", this))
    }
    onError(t) {
        this.emit("error", this, t)
    }
    destroy() {
        this.resource && (this.resource.unbind(this),
        this.resource.internal && this.resource.destroy(),
        this.resource = null),
        this.cacheId && (delete $e[this.cacheId],
        delete Me[this.cacheId],
        this.cacheId = null),
        this.valid = !1,
        this.dispose(),
        Qi.removeFromCache(this),
        this.textureCacheIds = null,
        this.destroyed = !0,
        this.emit("destroyed", this),
        this.removeAllListeners()
    }
    dispose() {
        this.emit("dispose", this)
    }
    castToBaseTexture() {
        return this
    }
    static from(t, e, r=nt.STRICT_TEXTURE_CACHE) {
        const s = typeof t == "string";
        let n = null;
        if (s)
            n = t;
        else {
            if (!t._pixiId) {
                const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t._pixiId = `${o}_${hi()}`
            }
            n = t._pixiId
        }
        let a = $e[n];
        if (s && r && !a)
            throw new Error(`The cacheId "${n}" does not exist in BaseTextureCache.`);
        return a || (a = new Qi(t,e),
        a.cacheId = n,
        Qi.addToCache(a, n)),
        a
    }
    static fromBuffer(t, e, r, s) {
        t = t || new Float32Array(e * r * 4);
        const n = new Pa(t,{
            width: e,
            height: r,
            ...s == null ? void 0 : s.resourceOptions
        });
        let a, o;
        return t instanceof Float32Array ? (a = Z.RGBA,
        o = mt.FLOAT) : t instanceof Int32Array ? (a = Z.RGBA_INTEGER,
        o = mt.INT) : t instanceof Uint32Array ? (a = Z.RGBA_INTEGER,
        o = mt.UNSIGNED_INT) : t instanceof Int16Array ? (a = Z.RGBA_INTEGER,
        o = mt.SHORT) : t instanceof Uint16Array ? (a = Z.RGBA_INTEGER,
        o = mt.UNSIGNED_SHORT) : t instanceof Int8Array ? (a = Z.RGBA,
        o = mt.BYTE) : (a = Z.RGBA,
        o = mt.UNSIGNED_BYTE),
        n.internal = !0,
        new Qi(n,Object.assign({}, Zy, {
            type: o,
            format: a
        }, s))
    }
    static addToCache(t, e) {
        e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
        $e[e] && $e[e] !== t && console.warn(`BaseTexture added to the cache with an id [${e}] that already had an entry`),
        $e[e] = t)
    }
    static removeFromCache(t) {
        if (typeof t == "string") {
            const e = $e[t];
            if (e) {
                const r = e.textureCacheIds.indexOf(t);
                return r > -1 && e.textureCacheIds.splice(r, 1),
                delete $e[t],
                e
            }
        } else if (t != null && t.textureCacheIds) {
            for (let e = 0; e < t.textureCacheIds.length; ++e)
                delete $e[t.textureCacheIds[e]];
            return t.textureCacheIds.length = 0,
            t
        }
        return null
    }
}
;
xh.defaultOptions = {
    mipmap: Br.POW2,
    anisotropicLevel: 0,
    scaleMode: hr.LINEAR,
    wrapMode: Yr.CLAMP,
    alphaMode: ke.UNPACK,
    target: as.TEXTURE_2D,
    format: Z.RGBA,
    type: mt.UNSIGNED_BYTE
},
xh._globalBatch = 0;
let Tt = xh;
class bh {
    constructor() {
        this.texArray = null,
        this.blend = 0,
        this.type = or.TRIANGLES,
        this.start = 0,
        this.size = 0,
        this.data = null
    }
}
let Qy = 0
  , pe = class cd {
    constructor(t, e=!0, r=!1) {
        this.data = t || new Float32Array(1),
        this._glBuffers = {},
        this._updateID = 0,
        this.index = r,
        this.static = e,
        this.id = Qy++,
        this.disposeRunner = new ur("disposeBuffer")
    }
    update(t) {
        t instanceof Array && (t = new Float32Array(t)),
        this.data = t || this.data,
        this._updateID++
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroy() {
        this.dispose(),
        this.data = null
    }
    set index(t) {
        this.type = t ? Mr.ELEMENT_ARRAY_BUFFER : Mr.ARRAY_BUFFER
    }
    get index() {
        return this.type === Mr.ELEMENT_ARRAY_BUFFER
    }
    static from(t) {
        return t instanceof Array && (t = new Float32Array(t)),
        new cd(t)
    }
}
;
class ca {
    constructor(t, e=0, r=!1, s=mt.FLOAT, n, a, o, l=1) {
        this.buffer = t,
        this.size = e,
        this.normalized = r,
        this.type = s,
        this.stride = n,
        this.start = a,
        this.instance = o,
        this.divisor = l
    }
    destroy() {
        this.buffer = null
    }
    static from(t, e, r, s, n) {
        return new ca(t,e,r,s,n)
    }
}
const Jy = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
};
function tv(i, t) {
    let e = 0
      , r = 0;
    const s = {};
    for (let l = 0; l < i.length; l++)
        r += t[l],
        e += i[l].length;
    const n = new ArrayBuffer(e * 4);
    let a = null
      , o = 0;
    for (let l = 0; l < i.length; l++) {
        const c = t[l]
          , p = i[l]
          , m = Ra(p);
        s[m] || (s[m] = new Jy[m](n)),
        a = s[m];
        for (let f = 0; f < p.length; f++) {
            const v = (f / c | 0) * r + o
              , _ = f % c;
            a[v + _] = p[f]
        }
        o += c
    }
    return new Float32Array(n)
}
const Hu = {
    5126: 4,
    5123: 2,
    5121: 1
};
let ev = 0;
const rv = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array,
    Uint16Array
};
class li {
    constructor(t=[], e={}) {
        this.buffers = t,
        this.indexBuffer = null,
        this.attributes = e,
        this.glVertexArrayObjects = {},
        this.id = ev++,
        this.instanced = !1,
        this.instanceCount = 1,
        this.disposeRunner = new ur("disposeGeometry"),
        this.refCount = 0
    }
    addAttribute(t, e, r=0, s=!1, n, a, o, l=!1) {
        if (!e)
            throw new Error("You must pass a buffer when creating an attribute");
        e instanceof pe || (e instanceof Array && (e = new Float32Array(e)),
        e = new pe(e));
        const c = t.split("|");
        if (c.length > 1) {
            for (let m = 0; m < c.length; m++)
                this.addAttribute(c[m], e, r, s, n);
            return this
        }
        let p = this.buffers.indexOf(e);
        return p === -1 && (this.buffers.push(e),
        p = this.buffers.length - 1),
        this.attributes[t] = new ca(p,r,s,n,a,o,l),
        this.instanced = this.instanced || l,
        this
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    getBuffer(t) {
        return this.buffers[this.getAttribute(t).buffer]
    }
    addIndex(t) {
        return t instanceof pe || (t instanceof Array && (t = new Uint16Array(t)),
        t = new pe(t)),
        t.type = Mr.ELEMENT_ARRAY_BUFFER,
        this.indexBuffer = t,
        this.buffers.includes(t) || this.buffers.push(t),
        this
    }
    getIndex() {
        return this.indexBuffer
    }
    interleave() {
        if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer)
            return this;
        const t = []
          , e = []
          , r = new pe;
        let s;
        for (s in this.attributes) {
            const n = this.attributes[s]
              , a = this.buffers[n.buffer];
            t.push(a.data),
            e.push(n.size * Hu[n.type] / 4),
            n.buffer = 0
        }
        for (r.data = tv(t, e),
        s = 0; s < this.buffers.length; s++)
            this.buffers[s] !== this.indexBuffer && this.buffers[s].destroy();
        return this.buffers = [r],
        this.indexBuffer && this.buffers.push(this.indexBuffer),
        this
    }
    getSize() {
        for (const t in this.attributes) {
            const e = this.attributes[t];
            return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
        }
        return 0
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroy() {
        this.dispose(),
        this.buffers = null,
        this.indexBuffer = null,
        this.attributes = null
    }
    clone() {
        const t = new li;
        for (let e = 0; e < this.buffers.length; e++)
            t.buffers[e] = new pe(this.buffers[e].data.slice(0));
        for (const e in this.attributes) {
            const r = this.attributes[e];
            t.attributes[e] = new ca(r.buffer,r.size,r.normalized,r.type,r.stride,r.start,r.instance)
        }
        return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)],
        t.indexBuffer.type = Mr.ELEMENT_ARRAY_BUFFER),
        t
    }
    static merge(t) {
        const e = new li
          , r = []
          , s = []
          , n = [];
        let a;
        for (let o = 0; o < t.length; o++) {
            a = t[o];
            for (let l = 0; l < a.buffers.length; l++)
                s[l] = s[l] || 0,
                s[l] += a.buffers[l].data.length,
                n[l] = 0
        }
        for (let o = 0; o < a.buffers.length; o++)
            r[o] = new rv[Ra(a.buffers[o].data)](s[o]),
            e.buffers[o] = new pe(r[o]);
        for (let o = 0; o < t.length; o++) {
            a = t[o];
            for (let l = 0; l < a.buffers.length; l++)
                r[l].set(a.buffers[l].data, n[l]),
                n[l] += a.buffers[l].data.length
        }
        if (e.attributes = a.attributes,
        a.indexBuffer) {
            e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)],
            e.indexBuffer.type = Mr.ELEMENT_ARRAY_BUFFER;
            let o = 0
              , l = 0
              , c = 0
              , p = 0;
            for (let m = 0; m < a.buffers.length; m++)
                if (a.buffers[m] !== a.indexBuffer) {
                    p = m;
                    break
                }
            for (const m in a.attributes) {
                const f = a.attributes[m];
                (f.buffer | 0) === p && (l += f.size * Hu[f.type] / 4)
            }
            for (let m = 0; m < t.length; m++) {
                const f = t[m].indexBuffer.data;
                for (let v = 0; v < f.length; v++)
                    e.indexBuffer.data[v + c] += o;
                o += t[m].buffers[p].data.length / l,
                c += f.length
            }
        }
        return e
    }
}
class dd extends li {
    constructor(t=!1) {
        super(),
        this._buffer = new pe(null,t,!1),
        this._indexBuffer = new pe(null,t,!0),
        this.addAttribute("aVertexPosition", this._buffer, 2, !1, mt.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, mt.FLOAT).addAttribute("aColor", this._buffer, 4, !0, mt.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, mt.FLOAT).addIndex(this._indexBuffer)
    }
}
const da = Math.PI * 2
  , iv = 180 / Math.PI
  , sv = Math.PI / 180;
var Zt = (i => (i[i.POLY = 0] = "POLY",
i[i.RECT = 1] = "RECT",
i[i.CIRC = 2] = "CIRC",
i[i.ELIP = 3] = "ELIP",
i[i.RREC = 4] = "RREC",
i))(Zt || {});
class Bt {
    constructor(t=0, e=0) {
        this.x = 0,
        this.y = 0,
        this.x = t,
        this.y = e
    }
    clone() {
        return new Bt(this.x,this.y)
    }
    copyFrom(t) {
        return this.set(t.x, t.y),
        this
    }
    copyTo(t) {
        return t.set(this.x, this.y),
        t
    }
    equals(t) {
        return t.x === this.x && t.y === this.y
    }
    set(t=0, e=t) {
        return this.x = t,
        this.y = e,
        this
    }
}
Bt.prototype.toString = function() {
    return `[@pixi/math:Point x=${this.x} y=${this.y}]`
}
;
const Rn = [new Bt, new Bt, new Bt, new Bt];
class At {
    constructor(t=0, e=0, r=0, s=0) {
        this.x = Number(t),
        this.y = Number(e),
        this.width = Number(r),
        this.height = Number(s),
        this.type = Zt.RECT
    }
    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }
    static get EMPTY() {
        return new At(0,0,0,0)
    }
    clone() {
        return new At(this.x,this.y,this.width,this.height)
    }
    copyFrom(t) {
        return this.x = t.x,
        this.y = t.y,
        this.width = t.width,
        this.height = t.height,
        this
    }
    copyTo(t) {
        return t.x = this.x,
        t.y = this.y,
        t.width = this.width,
        t.height = this.height,
        t
    }
    contains(t, e) {
        return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
    }
    intersects(t, e) {
        if (!e) {
            const O = this.x < t.x ? t.x : this.x;
            if ((this.right > t.right ? t.right : this.right) <= O)
                return !1;
            const N = this.y < t.y ? t.y : this.y;
            return (this.bottom > t.bottom ? t.bottom : this.bottom) > N
        }
        const r = this.left
          , s = this.right
          , n = this.top
          , a = this.bottom;
        if (s <= r || a <= n)
            return !1;
        const o = Rn[0].set(t.left, t.top)
          , l = Rn[1].set(t.left, t.bottom)
          , c = Rn[2].set(t.right, t.top)
          , p = Rn[3].set(t.right, t.bottom);
        if (c.x <= o.x || l.y <= o.y)
            return !1;
        const m = Math.sign(e.a * e.d - e.b * e.c);
        if (m === 0 || (e.apply(o, o),
        e.apply(l, l),
        e.apply(c, c),
        e.apply(p, p),
        Math.max(o.x, l.x, c.x, p.x) <= r || Math.min(o.x, l.x, c.x, p.x) >= s || Math.max(o.y, l.y, c.y, p.y) <= n || Math.min(o.y, l.y, c.y, p.y) >= a))
            return !1;
        const f = m * (l.y - o.y)
          , v = m * (o.x - l.x)
          , _ = f * r + v * n
          , T = f * s + v * n
          , A = f * r + v * a
          , E = f * s + v * a;
        if (Math.max(_, T, A, E) <= f * o.x + v * o.y || Math.min(_, T, A, E) >= f * p.x + v * p.y)
            return !1;
        const I = m * (o.y - c.y)
          , S = m * (c.x - o.x)
          , P = I * r + S * n
          , k = I * s + S * n
          , $ = I * r + S * a
          , d = I * s + S * a;
        return !(Math.max(P, k, $, d) <= I * o.x + S * o.y || Math.min(P, k, $, d) >= I * p.x + S * p.y)
    }
    pad(t=0, e=t) {
        return this.x -= t,
        this.y -= e,
        this.width += t * 2,
        this.height += e * 2,
        this
    }
    fit(t) {
        const e = Math.max(this.x, t.x)
          , r = Math.min(this.x + this.width, t.x + t.width)
          , s = Math.max(this.y, t.y)
          , n = Math.min(this.y + this.height, t.y + t.height);
        return this.x = e,
        this.width = Math.max(r - e, 0),
        this.y = s,
        this.height = Math.max(n - s, 0),
        this
    }
    ceil(t=1, e=.001) {
        const r = Math.ceil((this.x + this.width - e) * t) / t
          , s = Math.ceil((this.y + this.height - e) * t) / t;
        return this.x = Math.floor((this.x + e) * t) / t,
        this.y = Math.floor((this.y + e) * t) / t,
        this.width = r - this.x,
        this.height = s - this.y,
        this
    }
    enlarge(t) {
        const e = Math.min(this.x, t.x)
          , r = Math.max(this.x + this.width, t.x + t.width)
          , s = Math.min(this.y, t.y)
          , n = Math.max(this.y + this.height, t.y + t.height);
        return this.x = e,
        this.width = r - e,
        this.y = s,
        this.height = n - s,
        this
    }
}
At.prototype.toString = function() {
    return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
}
;
class Ma {
    constructor(t=0, e=0, r=0) {
        this.x = t,
        this.y = e,
        this.radius = r,
        this.type = Zt.CIRC
    }
    clone() {
        return new Ma(this.x,this.y,this.radius)
    }
    contains(t, e) {
        if (this.radius <= 0)
            return !1;
        const r = this.radius * this.radius;
        let s = this.x - t
          , n = this.y - e;
        return s *= s,
        n *= n,
        s + n <= r
    }
    getBounds() {
        return new At(this.x - this.radius,this.y - this.radius,this.radius * 2,this.radius * 2)
    }
}
Ma.prototype.toString = function() {
    return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`
}
;
class Da {
    constructor(t=0, e=0, r=0, s=0) {
        this.x = t,
        this.y = e,
        this.width = r,
        this.height = s,
        this.type = Zt.ELIP
    }
    clone() {
        return new Da(this.x,this.y,this.width,this.height)
    }
    contains(t, e) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        let r = (t - this.x) / this.width
          , s = (e - this.y) / this.height;
        return r *= r,
        s *= s,
        r + s <= 1
    }
    getBounds() {
        return new At(this.x - this.width,this.y - this.height,this.width,this.height)
    }
}
Da.prototype.toString = function() {
    return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
}
;
class Mi {
    constructor(...t) {
        let e = Array.isArray(t[0]) ? t[0] : t;
        if (typeof e[0] != "number") {
            const r = [];
            for (let s = 0, n = e.length; s < n; s++)
                r.push(e[s].x, e[s].y);
            e = r
        }
        this.points = e,
        this.type = Zt.POLY,
        this.closeStroke = !0
    }
    clone() {
        const t = this.points.slice()
          , e = new Mi(t);
        return e.closeStroke = this.closeStroke,
        e
    }
    contains(t, e) {
        let r = !1;
        const s = this.points.length / 2;
        for (let n = 0, a = s - 1; n < s; a = n++) {
            const o = this.points[n * 2]
              , l = this.points[n * 2 + 1]
              , c = this.points[a * 2]
              , p = this.points[a * 2 + 1];
            l > e != p > e && t < (c - o) * ((e - l) / (p - l)) + o && (r = !r)
        }
        return r
    }
}
Mi.prototype.toString = function() {
    return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce( (i, t) => `${i}, ${t}`, "")}]`
}
;
class Ba {
    constructor(t=0, e=0, r=0, s=0, n=20) {
        this.x = t,
        this.y = e,
        this.width = r,
        this.height = s,
        this.radius = n,
        this.type = Zt.RREC
    }
    clone() {
        return new Ba(this.x,this.y,this.width,this.height,this.radius)
    }
    contains(t, e) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
            const r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
            if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r)
                return !0;
            let s = t - (this.x + r)
              , n = e - (this.y + r);
            const a = r * r;
            if (s * s + n * n <= a || (s = t - (this.x + this.width - r),
            s * s + n * n <= a) || (n = e - (this.y + this.height - r),
            s * s + n * n <= a) || (s = t - (this.x + r),
            s * s + n * n <= a))
                return !0
        }
        return !1
    }
}
Ba.prototype.toString = function() {
    return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`
}
;
class Wt {
    constructor(t=1, e=0, r=0, s=1, n=0, a=0) {
        this.array = null,
        this.a = t,
        this.b = e,
        this.c = r,
        this.d = s,
        this.tx = n,
        this.ty = a
    }
    fromArray(t) {
        this.a = t[0],
        this.b = t[1],
        this.c = t[3],
        this.d = t[4],
        this.tx = t[2],
        this.ty = t[5]
    }
    set(t, e, r, s, n, a) {
        return this.a = t,
        this.b = e,
        this.c = r,
        this.d = s,
        this.tx = n,
        this.ty = a,
        this
    }
    toArray(t, e) {
        this.array || (this.array = new Float32Array(9));
        const r = e || this.array;
        return t ? (r[0] = this.a,
        r[1] = this.b,
        r[2] = 0,
        r[3] = this.c,
        r[4] = this.d,
        r[5] = 0,
        r[6] = this.tx,
        r[7] = this.ty,
        r[8] = 1) : (r[0] = this.a,
        r[1] = this.c,
        r[2] = this.tx,
        r[3] = this.b,
        r[4] = this.d,
        r[5] = this.ty,
        r[6] = 0,
        r[7] = 0,
        r[8] = 1),
        r
    }
    apply(t, e) {
        e = e || new Bt;
        const r = t.x
          , s = t.y;
        return e.x = this.a * r + this.c * s + this.tx,
        e.y = this.b * r + this.d * s + this.ty,
        e
    }
    applyInverse(t, e) {
        e = e || new Bt;
        const r = 1 / (this.a * this.d + this.c * -this.b)
          , s = t.x
          , n = t.y;
        return e.x = this.d * r * s + -this.c * r * n + (this.ty * this.c - this.tx * this.d) * r,
        e.y = this.a * r * n + -this.b * r * s + (-this.ty * this.a + this.tx * this.b) * r,
        e
    }
    translate(t, e) {
        return this.tx += t,
        this.ty += e,
        this
    }
    scale(t, e) {
        return this.a *= t,
        this.d *= e,
        this.c *= t,
        this.b *= e,
        this.tx *= t,
        this.ty *= e,
        this
    }
    rotate(t) {
        const e = Math.cos(t)
          , r = Math.sin(t)
          , s = this.a
          , n = this.c
          , a = this.tx;
        return this.a = s * e - this.b * r,
        this.b = s * r + this.b * e,
        this.c = n * e - this.d * r,
        this.d = n * r + this.d * e,
        this.tx = a * e - this.ty * r,
        this.ty = a * r + this.ty * e,
        this
    }
    append(t) {
        const e = this.a
          , r = this.b
          , s = this.c
          , n = this.d;
        return this.a = t.a * e + t.b * s,
        this.b = t.a * r + t.b * n,
        this.c = t.c * e + t.d * s,
        this.d = t.c * r + t.d * n,
        this.tx = t.tx * e + t.ty * s + this.tx,
        this.ty = t.tx * r + t.ty * n + this.ty,
        this
    }
    setTransform(t, e, r, s, n, a, o, l, c) {
        return this.a = Math.cos(o + c) * n,
        this.b = Math.sin(o + c) * n,
        this.c = -Math.sin(o - l) * a,
        this.d = Math.cos(o - l) * a,
        this.tx = t - (r * this.a + s * this.c),
        this.ty = e - (r * this.b + s * this.d),
        this
    }
    prepend(t) {
        const e = this.tx;
        if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
            const r = this.a
              , s = this.c;
            this.a = r * t.a + this.b * t.c,
            this.b = r * t.b + this.b * t.d,
            this.c = s * t.a + this.d * t.c,
            this.d = s * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx,
        this.ty = e * t.b + this.ty * t.d + t.ty,
        this
    }
    decompose(t) {
        const e = this.a
          , r = this.b
          , s = this.c
          , n = this.d
          , a = t.pivot
          , o = -Math.atan2(-s, n)
          , l = Math.atan2(r, e)
          , c = Math.abs(o + l);
        return c < 1e-5 || Math.abs(da - c) < 1e-5 ? (t.rotation = l,
        t.skew.x = t.skew.y = 0) : (t.rotation = 0,
        t.skew.x = o,
        t.skew.y = l),
        t.scale.x = Math.sqrt(e * e + r * r),
        t.scale.y = Math.sqrt(s * s + n * n),
        t.position.x = this.tx + (a.x * e + a.y * s),
        t.position.y = this.ty + (a.x * r + a.y * n),
        t
    }
    invert() {
        const t = this.a
          , e = this.b
          , r = this.c
          , s = this.d
          , n = this.tx
          , a = t * s - e * r;
        return this.a = s / a,
        this.b = -e / a,
        this.c = -r / a,
        this.d = t / a,
        this.tx = (r * this.ty - s * n) / a,
        this.ty = -(t * this.ty - e * n) / a,
        this
    }
    identity() {
        return this.a = 1,
        this.b = 0,
        this.c = 0,
        this.d = 1,
        this.tx = 0,
        this.ty = 0,
        this
    }
    clone() {
        const t = new Wt;
        return t.a = this.a,
        t.b = this.b,
        t.c = this.c,
        t.d = this.d,
        t.tx = this.tx,
        t.ty = this.ty,
        t
    }
    copyTo(t) {
        return t.a = this.a,
        t.b = this.b,
        t.c = this.c,
        t.d = this.d,
        t.tx = this.tx,
        t.ty = this.ty,
        t
    }
    copyFrom(t) {
        return this.a = t.a,
        this.b = t.b,
        this.c = t.c,
        this.d = t.d,
        this.tx = t.tx,
        this.ty = t.ty,
        this
    }
    static get IDENTITY() {
        return new Wt
    }
    static get TEMP_MATRIX() {
        return new Wt
    }
}
Wt.prototype.toString = function() {
    return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
}
;
const xi = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
  , bi = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
  , Ti = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
  , wi = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
  , Th = []
  , fd = []
  , Pn = Math.sign;
function nv() {
    for (let i = 0; i < 16; i++) {
        const t = [];
        Th.push(t);
        for (let e = 0; e < 16; e++) {
            const r = Pn(xi[i] * xi[e] + Ti[i] * bi[e])
              , s = Pn(bi[i] * xi[e] + wi[i] * bi[e])
              , n = Pn(xi[i] * Ti[e] + Ti[i] * wi[e])
              , a = Pn(bi[i] * Ti[e] + wi[i] * wi[e]);
            for (let o = 0; o < 16; o++)
                if (xi[o] === r && bi[o] === s && Ti[o] === n && wi[o] === a) {
                    t.push(o);
                    break
                }
        }
    }
    for (let i = 0; i < 16; i++) {
        const t = new Wt;
        t.set(xi[i], bi[i], Ti[i], wi[i], 0, 0),
        fd.push(t)
    }
}
nv();
const ee = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: i => xi[i],
    uY: i => bi[i],
    vX: i => Ti[i],
    vY: i => wi[i],
    inv: i => i & 8 ? i & 15 : -i & 7,
    add: (i, t) => Th[i][t],
    sub: (i, t) => Th[i][ee.inv(t)],
    rotate180: i => i ^ 4,
    isVertical: i => (i & 3) === 2,
    byDirection: (i, t) => Math.abs(i) * 2 <= Math.abs(t) ? t >= 0 ? ee.S : ee.N : Math.abs(t) * 2 <= Math.abs(i) ? i > 0 ? ee.E : ee.W : t > 0 ? i > 0 ? ee.SE : ee.SW : i > 0 ? ee.NE : ee.NW,
    matrixAppendRotationInv: (i, t, e=0, r=0) => {
        const s = fd[ee.inv(t)];
        s.tx = e,
        s.ty = r,
        i.append(s)
    }
};
class Xr {
    constructor(t, e, r=0, s=0) {
        this._x = r,
        this._y = s,
        this.cb = t,
        this.scope = e
    }
    clone(t=this.cb, e=this.scope) {
        return new Xr(t,e,this._x,this._y)
    }
    set(t=0, e=t) {
        return (this._x !== t || this._y !== e) && (this._x = t,
        this._y = e,
        this.cb.call(this.scope)),
        this
    }
    copyFrom(t) {
        return (this._x !== t.x || this._y !== t.y) && (this._x = t.x,
        this._y = t.y,
        this.cb.call(this.scope)),
        this
    }
    copyTo(t) {
        return t.set(this._x, this._y),
        t
    }
    equals(t) {
        return t.x === this._x && t.y === this._y
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x !== t && (this._x = t,
        this.cb.call(this.scope))
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y !== t && (this._y = t,
        this.cb.call(this.scope))
    }
}
Xr.prototype.toString = function() {
    return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`
}
;
const wh = class {
    constructor() {
        this.worldTransform = new Wt,
        this.localTransform = new Wt,
        this.position = new Xr(this.onChange,this,0,0),
        this.scale = new Xr(this.onChange,this,1,1),
        this.pivot = new Xr(this.onChange,this,0,0),
        this.skew = new Xr(this.updateSkew,this,0,0),
        this._rotation = 0,
        this._cx = 1,
        this._sx = 0,
        this._cy = 0,
        this._sy = 1,
        this._localID = 0,
        this._currentLocalID = 0,
        this._worldID = 0,
        this._parentID = 0
    }
    onChange() {
        this._localID++
    }
    updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew.y),
        this._sx = Math.sin(this._rotation + this.skew.y),
        this._cy = -Math.sin(this._rotation - this.skew.x),
        this._sy = Math.cos(this._rotation - this.skew.x),
        this._localID++
    }
    updateLocalTransform() {
        const i = this.localTransform;
        this._localID !== this._currentLocalID && (i.a = this._cx * this.scale.x,
        i.b = this._sx * this.scale.x,
        i.c = this._cy * this.scale.y,
        i.d = this._sy * this.scale.y,
        i.tx = this.position.x - (this.pivot.x * i.a + this.pivot.y * i.c),
        i.ty = this.position.y - (this.pivot.x * i.b + this.pivot.y * i.d),
        this._currentLocalID = this._localID,
        this._parentID = -1)
    }
    updateTransform(i) {
        const t = this.localTransform;
        if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x,
        t.b = this._sx * this.scale.x,
        t.c = this._cy * this.scale.y,
        t.d = this._sy * this.scale.y,
        t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c),
        t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d),
        this._currentLocalID = this._localID,
        this._parentID = -1),
        this._parentID !== i._worldID) {
            const e = i.worldTransform
              , r = this.worldTransform;
            r.a = t.a * e.a + t.b * e.c,
            r.b = t.a * e.b + t.b * e.d,
            r.c = t.c * e.a + t.d * e.c,
            r.d = t.c * e.b + t.d * e.d,
            r.tx = t.tx * e.a + t.ty * e.c + e.tx,
            r.ty = t.tx * e.b + t.ty * e.d + e.ty,
            this._parentID = i._worldID,
            this._worldID++
        }
    }
    setFromMatrix(i) {
        i.decompose(this),
        this._localID++
    }
    get rotation() {
        return this._rotation
    }
    set rotation(i) {
        this._rotation !== i && (this._rotation = i,
        this.updateSkew())
    }
}
;
wh.IDENTITY = new wh;
let Fa = wh;
Fa.prototype.toString = function() {
    return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`
}
;
var av = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`
  , ov = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function Vu(i, t, e) {
    const r = i.createShader(t);
    return i.shaderSource(r, e),
    i.compileShader(r),
    r
}
function Bo(i) {
    const t = new Array(i);
    for (let e = 0; e < t.length; e++)
        t[e] = !1;
    return t
}
function pd(i, t) {
    switch (i) {
    case "float":
        return 0;
    case "vec2":
        return new Float32Array(2 * t);
    case "vec3":
        return new Float32Array(3 * t);
    case "vec4":
        return new Float32Array(4 * t);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
        return 0;
    case "ivec2":
        return new Int32Array(2 * t);
    case "ivec3":
        return new Int32Array(3 * t);
    case "ivec4":
        return new Int32Array(4 * t);
    case "uvec2":
        return new Uint32Array(2 * t);
    case "uvec3":
        return new Uint32Array(3 * t);
    case "uvec4":
        return new Uint32Array(4 * t);
    case "bool":
        return !1;
    case "bvec2":
        return Bo(2 * t);
    case "bvec3":
        return Bo(3 * t);
    case "bvec4":
        return Bo(4 * t);
    case "mat2":
        return new Float32Array([1, 0, 0, 1]);
    case "mat3":
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    return null
}
const ls = [{
    test: i => i.type === "float" && i.size === 1 && !i.isArray,
    code: i => `
            if(uv["${i}"] !== ud["${i}"].value)
            {
                ud["${i}"].value = uv["${i}"]
                gl.uniform1f(ud["${i}"].location, uv["${i}"])
            }
            `
}, {
    test: (i, t) => (i.type === "sampler2D" || i.type === "samplerCube" || i.type === "sampler2DArray") && i.size === 1 && !i.isArray && (t == null || t.castToBaseTexture !== void 0),
    code: i => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${i}"], t);

            if(ud["${i}"].value !== t)
            {
                ud["${i}"].value = t;
                gl.uniform1i(ud["${i}"].location, t);
; // eslint-disable-line max-len
            }`
}, {
    test: (i, t) => i.type === "mat3" && i.size === 1 && !i.isArray && t.a !== void 0,
    code: i => `
            gl.uniformMatrix3fv(ud["${i}"].location, false, uv["${i}"].toArray(true));
            `,
    codeUbo: i => `
                var ${i}_matrix = uv.${i}.toArray(true);

                data[offset] = ${i}_matrix[0];
                data[offset+1] = ${i}_matrix[1];
                data[offset+2] = ${i}_matrix[2];
        
                data[offset + 4] = ${i}_matrix[3];
                data[offset + 5] = ${i}_matrix[4];
                data[offset + 6] = ${i}_matrix[5];
        
                data[offset + 8] = ${i}_matrix[6];
                data[offset + 9] = ${i}_matrix[7];
                data[offset + 10] = ${i}_matrix[8];
            `
}, {
    test: (i, t) => i.type === "vec2" && i.size === 1 && !i.isArray && t.x !== void 0,
    code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${i}"].location, v.x, v.y);
                }`,
    codeUbo: i => `
                v = uv.${i};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
}, {
    test: i => i.type === "vec2" && i.size === 1 && !i.isArray,
    code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${i}"].location, v[0], v[1]);
                }
            `
}, {
    test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.width !== void 0,
    code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${i}"].location, v.x, v.y, v.width, v.height)
                }`,
    codeUbo: i => `
                    v = uv.${i};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
}, {
    test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.red !== void 0,
    code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${i}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
    codeUbo: i => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `
}, {
    test: (i, t) => i.type === "vec3" && i.size === 1 && !i.isArray && t.red !== void 0,
    code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${i}"].location, v.red, v.green, v.blue)
                }`,
    codeUbo: i => `
                    v = uv.${i};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `
}, {
    test: i => i.type === "vec4" && i.size === 1 && !i.isArray,
    code: i => `
                cv = ud["${i}"].value;
                v = uv["${i}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${i}"].location, v[0], v[1], v[2], v[3])
                }`
}]
  , hv = {
    float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
    vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
    vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
    vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
    int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
    uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
    uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
    uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
    bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
    bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
    bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
    bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
    sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
}
  , lv = {
    float: "gl.uniform1fv(location, v)",
    vec2: "gl.uniform2fv(location, v)",
    vec3: "gl.uniform3fv(location, v)",
    vec4: "gl.uniform4fv(location, v)",
    mat4: "gl.uniformMatrix4fv(location, false, v)",
    mat3: "gl.uniformMatrix3fv(location, false, v)",
    mat2: "gl.uniformMatrix2fv(location, false, v)",
    int: "gl.uniform1iv(location, v)",
    ivec2: "gl.uniform2iv(location, v)",
    ivec3: "gl.uniform3iv(location, v)",
    ivec4: "gl.uniform4iv(location, v)",
    uint: "gl.uniform1uiv(location, v)",
    uvec2: "gl.uniform2uiv(location, v)",
    uvec3: "gl.uniform3uiv(location, v)",
    uvec4: "gl.uniform4uiv(location, v)",
    bool: "gl.uniform1iv(location, v)",
    bvec2: "gl.uniform2iv(location, v)",
    bvec3: "gl.uniform3iv(location, v)",
    bvec4: "gl.uniform4iv(location, v)",
    sampler2D: "gl.uniform1iv(location, v)",
    samplerCube: "gl.uniform1iv(location, v)",
    sampler2DArray: "gl.uniform1iv(location, v)"
};
function uv(i, t) {
    var r;
    const e = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
    for (const s in i.uniforms) {
        const n = t[s];
        if (!n) {
            ((r = i.uniforms[s]) == null ? void 0 : r.group) === !0 && (i.uniforms[s].ubo ? e.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${s}, '${s}');
                    `) : e.push(`
                        renderer.shader.syncUniformGroup(uv.${s}, syncData);
                    `));
            continue
        }
        const a = i.uniforms[s];
        let o = !1;
        for (let l = 0; l < ls.length; l++)
            if (ls[l].test(n, a)) {
                e.push(ls[l].code(s, a)),
                o = !0;
                break
            }
        if (!o) {
            const l = (n.size === 1 && !n.isArray ? hv : lv)[n.type].replace("location", `ud["${s}"].location`);
            e.push(`
            cu = ud["${s}"];
            cv = cu.value;
            v = uv["${s}"];
            ${l};`)
        }
    }
    return new Function("ud","uv","renderer","syncData",e.join(`
`))
}
const gd = {};
let zi = gd;
function cv() {
    if (zi === gd || zi != null && zi.isContextLost()) {
        const i = nt.ADAPTER.createCanvas();
        let t;
        nt.PREFER_ENV >= Oi.WEBGL2 && (t = i.getContext("webgl2", {})),
        t || (t = i.getContext("webgl", {}) || i.getContext("experimental-webgl", {}),
        t ? t.getExtension("WEBGL_draw_buffers") : t = null),
        zi = t
    }
    return zi
}
let Mn;
function dv() {
    if (!Mn) {
        Mn = qe.MEDIUM;
        const i = cv();
        if (i && i.getShaderPrecisionFormat) {
            const t = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT);
            t && (Mn = t.precision ? qe.HIGH : qe.MEDIUM)
        }
    }
    return Mn
}
function $u(i, t) {
    const e = i.getShaderSource(t).split(`
`).map( (c, p) => `${p}: ${c}`)
      , r = i.getShaderInfoLog(t)
      , s = r.split(`
`)
      , n = {}
      , a = s.map(c => parseFloat(c.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(c => c && !n[c] ? (n[c] = !0,
    !0) : !1)
      , o = [""];
    a.forEach(c => {
        e[c - 1] = `%c${e[c - 1]}%c`,
        o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
    }
    );
    const l = e.join(`
`);
    o[0] = l,
    console.error(r),
    console.groupCollapsed("click to view full shader code"),
    console.warn(...o),
    console.groupEnd()
}
function fv(i, t, e, r) {
    i.getProgramParameter(t, i.LINK_STATUS) || (i.getShaderParameter(e, i.COMPILE_STATUS) || $u(i, e),
    i.getShaderParameter(r, i.COMPILE_STATUS) || $u(i, r),
    console.error("PixiJS Error: Could not initialize shader."),
    i.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", i.getProgramInfoLog(t)))
}
const pv = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    uint: 1,
    uvec2: 2,
    uvec3: 3,
    uvec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1
};
function md(i) {
    return pv[i]
}
let Dn = null;
const ju = {
    FLOAT: "float",
    FLOAT_VEC2: "vec2",
    FLOAT_VEC3: "vec3",
    FLOAT_VEC4: "vec4",
    INT: "int",
    INT_VEC2: "ivec2",
    INT_VEC3: "ivec3",
    INT_VEC4: "ivec4",
    UNSIGNED_INT: "uint",
    UNSIGNED_INT_VEC2: "uvec2",
    UNSIGNED_INT_VEC3: "uvec3",
    UNSIGNED_INT_VEC4: "uvec4",
    BOOL: "bool",
    BOOL_VEC2: "bvec2",
    BOOL_VEC3: "bvec3",
    BOOL_VEC4: "bvec4",
    FLOAT_MAT2: "mat2",
    FLOAT_MAT3: "mat3",
    FLOAT_MAT4: "mat4",
    SAMPLER_2D: "sampler2D",
    INT_SAMPLER_2D: "sampler2D",
    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
    SAMPLER_CUBE: "samplerCube",
    INT_SAMPLER_CUBE: "samplerCube",
    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
    SAMPLER_2D_ARRAY: "sampler2DArray",
    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function yd(i, t) {
    if (!Dn) {
        const e = Object.keys(ju);
        Dn = {};
        for (let r = 0; r < e.length; ++r) {
            const s = e[r];
            Dn[i[s]] = ju[s]
        }
    }
    return Dn[t]
}
function Wu(i, t, e) {
    if (i.substring(0, 9) !== "precision") {
        let r = t;
        return t === qe.HIGH && e !== qe.HIGH && (r = qe.MEDIUM),
        `precision ${r} float;
${i}`
    } else if (e !== qe.HIGH && i.substring(0, 15) === "precision highp")
        return i.replace("precision highp", "precision mediump");
    return i
}
let Os;
function gv() {
    if (typeof Os == "boolean")
        return Os;
    try {
        Os = new Function("param1","param2","param3","return param1[param2] === param3;")({
            a: "b"
        }, "a", "b") === !0
    } catch {
        Os = !1
    }
    return Os
}
let mv = 0;
const Bn = {}
  , Eh = class Ji {
    constructor(t, e, r="pixi-shader", s={}) {
        this.extra = {},
        this.id = mv++,
        this.vertexSrc = t || Ji.defaultVertexSrc,
        this.fragmentSrc = e || Ji.defaultFragmentSrc,
        this.vertexSrc = this.vertexSrc.trim(),
        this.fragmentSrc = this.fragmentSrc.trim(),
        this.extra = s,
        this.vertexSrc.substring(0, 8) !== "#version" && (r = r.replace(/\s+/g, "-"),
        Bn[r] ? (Bn[r]++,
        r += `-${Bn[r]}`) : Bn[r] = 1,
        this.vertexSrc = `#define SHADER_NAME ${r}
${this.vertexSrc}`,
        this.fragmentSrc = `#define SHADER_NAME ${r}
${this.fragmentSrc}`,
        this.vertexSrc = Wu(this.vertexSrc, Ji.defaultVertexPrecision, qe.HIGH),
        this.fragmentSrc = Wu(this.fragmentSrc, Ji.defaultFragmentPrecision, dv())),
        this.glPrograms = {},
        this.syncUniforms = null
    }
    static get defaultVertexSrc() {
        return ov
    }
    static get defaultFragmentSrc() {
        return av
    }
    static from(t, e, r) {
        const s = t + e;
        let n = mh[s];
        return n || (mh[s] = n = new Ji(t,e,r)),
        n
    }
}
;
Eh.defaultVertexPrecision = qe.HIGH,
Eh.defaultFragmentPrecision = Pr.apple.device ? qe.HIGH : qe.MEDIUM;
let zr = Eh
  , yv = 0;
class cr {
    constructor(t, e, r) {
        this.group = !0,
        this.syncUniforms = {},
        this.dirtyId = 0,
        this.id = yv++,
        this.static = !!e,
        this.ubo = !!r,
        t instanceof pe ? (this.buffer = t,
        this.buffer.type = Mr.UNIFORM_BUFFER,
        this.autoManage = !1,
        this.ubo = !0) : (this.uniforms = t,
        this.ubo && (this.buffer = new pe(new Float32Array(1)),
        this.buffer.type = Mr.UNIFORM_BUFFER,
        this.autoManage = !0))
    }
    update() {
        this.dirtyId++,
        !this.autoManage && this.buffer && this.buffer.update()
    }
    add(t, e, r) {
        if (!this.ubo)
            this.uniforms[t] = new cr(e,r);
        else
            throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")
    }
    static from(t, e, r) {
        return new cr(t,e,r)
    }
    static uboFrom(t, e) {
        return new cr(t,e ?? !0,!0)
    }
}
class Dr {
    constructor(t, e) {
        this.uniformBindCount = 0,
        this.program = t,
        e ? e instanceof cr ? this.uniformGroup = e : this.uniformGroup = new cr(e) : this.uniformGroup = new cr({}),
        this.disposeRunner = new ur("disposeShader")
    }
    checkUniformExists(t, e) {
        if (e.uniforms[t])
            return !0;
        for (const r in e.uniforms) {
            const s = e.uniforms[r];
            if (s.group === !0 && this.checkUniformExists(t, s))
                return !0
        }
        return !1
    }
    destroy() {
        this.uniformGroup = null,
        this.disposeRunner.emit(this),
        this.disposeRunner.destroy()
    }
    get uniforms() {
        return this.uniformGroup.uniforms
    }
    static from(t, e, r) {
        const s = zr.from(t, e);
        return new Dr(s,r)
    }
}
class vv {
    constructor(t, e) {
        if (this.vertexSrc = t,
        this.fragTemplate = e,
        this.programCache = {},
        this.defaultGroupCache = {},
        !e.includes("%count%"))
            throw new Error('Fragment template must contain "%count%".');
        if (!e.includes("%forloop%"))
            throw new Error('Fragment template must contain "%forloop%".')
    }
    generateShader(t) {
        if (!this.programCache[t]) {
            const r = new Int32Array(t);
            for (let n = 0; n < t; n++)
                r[n] = n;
            this.defaultGroupCache[t] = cr.from({
                uSamplers: r
            }, !0);
            let s = this.fragTemplate;
            s = s.replace(/%count%/gi, `${t}`),
            s = s.replace(/%forloop%/gi, this.generateSampleSrc(t)),
            this.programCache[t] = new zr(this.vertexSrc,s)
        }
        const e = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new Wt,
            default: this.defaultGroupCache[t]
        };
        return new Dr(this.programCache[t],e)
    }
    generateSampleSrc(t) {
        let e = "";
        e += `
`,
        e += `
`;
        for (let r = 0; r < t; r++)
            r > 0 && (e += `
else `),
            r < t - 1 && (e += `if(vTextureId < ${r}.5)`),
            e += `
{`,
            e += `
	color = texture2D(uSamplers[${r}], vTextureCoord);`,
            e += `
}`;
        return e += `
`,
        e += `
`,
        e
    }
}
class Ah {
    constructor() {
        this.elements = [],
        this.ids = [],
        this.count = 0
    }
    clear() {
        for (let t = 0; t < this.count; t++)
            this.elements[t] = null;
        this.count = 0
    }
}
function _v() {
    return !Pr.apple.device
}
function xv(i) {
    let t = !0;
    const e = nt.ADAPTER.getNavigator();
    if (Pr.tablet || Pr.phone) {
        if (Pr.apple.device) {
            const r = e.userAgent.match(/OS (\d+)_(\d+)?/);
            r && parseInt(r[1], 10) < 11 && (t = !1)
        }
        if (Pr.android.device) {
            const r = e.userAgent.match(/Android\s([0-9.]*)/);
            r && parseInt(r[1], 10) < 7 && (t = !1)
        }
    }
    return t ? i : 4
}
class Oa {
    constructor(t) {
        this.renderer = t
    }
    flush() {}
    destroy() {
        this.renderer = null
    }
    start() {}
    stop() {
        this.flush()
    }
    render(t) {}
}
var bv = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`
  , Tv = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const Vs = class sr extends Oa {
    constructor(t) {
        super(t),
        this.setShaderGenerator(),
        this.geometryClass = dd,
        this.vertexSize = 6,
        this.state = Nr.for2d(),
        this.size = sr.defaultBatchSize * 4,
        this._vertexCount = 0,
        this._indexCount = 0,
        this._bufferedElements = [],
        this._bufferedTextures = [],
        this._bufferSize = 0,
        this._shader = null,
        this._packedGeometries = [],
        this._packedGeometryPoolSize = 2,
        this._flushId = 0,
        this._aBuffers = {},
        this._iBuffers = {},
        this.maxTextures = 1,
        this.renderer.on("prerender", this.onPrerender, this),
        t.runners.contextChange.add(this),
        this._dcIndex = 0,
        this._aIndex = 0,
        this._iIndex = 0,
        this._attributeBuffer = null,
        this._indexBuffer = null,
        this._tempBoundTextures = []
    }
    static get defaultMaxTextures() {
        return this._defaultMaxTextures = this._defaultMaxTextures ?? xv(32),
        this._defaultMaxTextures
    }
    static set defaultMaxTextures(t) {
        this._defaultMaxTextures = t
    }
    static get canUploadSameBuffer() {
        return this._canUploadSameBuffer = this._canUploadSameBuffer ?? _v(),
        this._canUploadSameBuffer
    }
    static set canUploadSameBuffer(t) {
        this._canUploadSameBuffer = t
    }
    get MAX_TEXTURES() {
        return vt("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"),
        this.maxTextures
    }
    static get defaultVertexSrc() {
        return Tv
    }
    static get defaultFragmentTemplate() {
        return bv
    }
    setShaderGenerator({vertex: t=sr.defaultVertexSrc, fragment: e=sr.defaultFragmentTemplate}={}) {
        this.shaderGenerator = new vv(t,e)
    }
    contextChange() {
        const t = this.renderer.gl;
        nt.PREFER_ENV === Oi.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), sr.defaultMaxTextures),
        this.maxTextures = Ky(this.maxTextures, t)),
        this._shader = this.shaderGenerator.generateShader(this.maxTextures);
        for (let e = 0; e < this._packedGeometryPoolSize; e++)
            this._packedGeometries[e] = new this.geometryClass;
        this.initFlushBuffers()
    }
    initFlushBuffers() {
        const {_drawCallPool: t, _textureArrayPool: e} = sr
          , r = this.size / 4
          , s = Math.floor(r / this.maxTextures) + 1;
        for (; t.length < r; )
            t.push(new bh);
        for (; e.length < s; )
            e.push(new Ah);
        for (let n = 0; n < this.maxTextures; n++)
            this._tempBoundTextures[n] = null
    }
    onPrerender() {
        this._flushId = 0
    }
    render(t) {
        t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(),
        this._vertexCount += t.vertexData.length / 2,
        this._indexCount += t.indices.length,
        this._bufferedTextures[this._bufferSize] = t._texture.baseTexture,
        this._bufferedElements[this._bufferSize++] = t)
    }
    buildTexturesAndDrawCalls() {
        const {_bufferedTextures: t, maxTextures: e} = this
          , r = sr._textureArrayPool
          , s = this.renderer.batch
          , n = this._tempBoundTextures
          , a = this.renderer.textureGC.count;
        let o = ++Tt._globalBatch
          , l = 0
          , c = r[0]
          , p = 0;
        s.copyBoundTextures(n, e);
        for (let m = 0; m < this._bufferSize; ++m) {
            const f = t[m];
            t[m] = null,
            f._batchEnabled !== o && (c.count >= e && (s.boundArray(c, n, o, e),
            this.buildDrawCalls(c, p, m),
            p = m,
            c = r[++l],
            ++o),
            f._batchEnabled = o,
            f.touched = a,
            c.elements[c.count++] = f)
        }
        c.count > 0 && (s.boundArray(c, n, o, e),
        this.buildDrawCalls(c, p, this._bufferSize),
        ++l,
        ++o);
        for (let m = 0; m < n.length; m++)
            n[m] = null;
        Tt._globalBatch = o
    }
    buildDrawCalls(t, e, r) {
        const {_bufferedElements: s, _attributeBuffer: n, _indexBuffer: a, vertexSize: o} = this
          , l = sr._drawCallPool;
        let c = this._dcIndex
          , p = this._aIndex
          , m = this._iIndex
          , f = l[c];
        f.start = this._iIndex,
        f.texArray = t;
        for (let v = e; v < r; ++v) {
            const _ = s[v]
              , T = _._texture.baseTexture
              , A = al[T.alphaMode ? 1 : 0][_.blendMode];
            s[v] = null,
            e < v && f.blend !== A && (f.size = m - f.start,
            e = v,
            f = l[++c],
            f.texArray = t,
            f.start = m),
            this.packInterleavedGeometry(_, n, a, p, m),
            p += _.vertexData.length / 2 * o,
            m += _.indices.length,
            f.blend = A
        }
        e < r && (f.size = m - f.start,
        ++c),
        this._dcIndex = c,
        this._aIndex = p,
        this._iIndex = m
    }
    bindAndClearTexArray(t) {
        const e = this.renderer.texture;
        for (let r = 0; r < t.count; r++)
            e.bind(t.elements[r], t.ids[r]),
            t.elements[r] = null;
        t.count = 0
    }
    updateGeometry() {
        const {_packedGeometries: t, _attributeBuffer: e, _indexBuffer: r} = this;
        sr.canUploadSameBuffer ? (t[this._flushId]._buffer.update(e.rawBinaryData),
        t[this._flushId]._indexBuffer.update(r),
        this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++,
        t[this._flushId] = new this.geometryClass),
        t[this._flushId]._buffer.update(e.rawBinaryData),
        t[this._flushId]._indexBuffer.update(r),
        this.renderer.geometry.bind(t[this._flushId]),
        this.renderer.geometry.updateBuffers(),
        this._flushId++)
    }
    drawBatches() {
        const t = this._dcIndex
          , {gl: e, state: r} = this.renderer
          , s = sr._drawCallPool;
        let n = null;
        for (let a = 0; a < t; a++) {
            const {texArray: o, type: l, size: c, start: p, blend: m} = s[a];
            n !== o && (n = o,
            this.bindAndClearTexArray(o)),
            this.state.blendMode = m,
            r.set(this.state),
            e.drawElements(l, c, e.UNSIGNED_SHORT, p * 2)
        }
    }
    flush() {
        this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount),
        this._indexBuffer = this.getIndexBuffer(this._indexCount),
        this._aIndex = 0,
        this._iIndex = 0,
        this._dcIndex = 0,
        this.buildTexturesAndDrawCalls(),
        this.updateGeometry(),
        this.drawBatches(),
        this._bufferSize = 0,
        this._vertexCount = 0,
        this._indexCount = 0)
    }
    start() {
        this.renderer.state.set(this.state),
        this.renderer.texture.ensureSamplerType(this.maxTextures),
        this.renderer.shader.bind(this._shader),
        sr.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
    }
    stop() {
        this.flush()
    }
    destroy() {
        for (let t = 0; t < this._packedGeometryPoolSize; t++)
            this._packedGeometries[t] && this._packedGeometries[t].destroy();
        this.renderer.off("prerender", this.onPrerender, this),
        this._aBuffers = null,
        this._iBuffers = null,
        this._packedGeometries = null,
        this._attributeBuffer = null,
        this._indexBuffer = null,
        this._shader && (this._shader.destroy(),
        this._shader = null),
        super.destroy()
    }
    getAttributeBuffer(t) {
        const e = rn(Math.ceil(t / 8))
          , r = fh(e)
          , s = e * 8;
        this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
        let n = this._aBuffers[s];
        return n || (this._aBuffers[s] = n = new vh(s * this.vertexSize * 4)),
        n
    }
    getIndexBuffer(t) {
        const e = rn(Math.ceil(t / 12))
          , r = fh(e)
          , s = e * 12;
        this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
        let n = this._iBuffers[r];
        return n || (this._iBuffers[r] = n = new Uint16Array(s)),
        n
    }
    packInterleavedGeometry(t, e, r, s, n) {
        const {uint32View: a, float32View: o} = e
          , l = s / this.vertexSize
          , c = t.uvs
          , p = t.indices
          , m = t.vertexData
          , f = t._texture.baseTexture._batchLocation
          , v = Math.min(t.worldAlpha, 1)
          , _ = Pt.shared.setValue(t._tintRGB).toPremultiplied(v, t._texture.baseTexture.alphaMode > 0);
        for (let T = 0; T < m.length; T += 2)
            o[s++] = m[T],
            o[s++] = m[T + 1],
            o[s++] = c[T],
            o[s++] = c[T + 1],
            a[s++] = _,
            o[s++] = f;
        for (let T = 0; T < p.length; T++)
            r[n++] = l + p[T]
    }
}
;
Vs.defaultBatchSize = 4096,
Vs.extension = {
    name: "batch",
    type: et.RendererPlugin
},
Vs._drawCallPool = [],
Vs._textureArrayPool = [];
let Ei = Vs;
ot.add(Ei);
var wv = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`
  , Ev = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Sh = class $s extends Dr {
    constructor(t, e, r) {
        const s = zr.from(t || $s.defaultVertexSrc, e || $s.defaultFragmentSrc);
        super(s, r),
        this.padding = 0,
        this.resolution = $s.defaultResolution,
        this.multisample = $s.defaultMultisample,
        this.enabled = !0,
        this.autoFit = !0,
        this.state = new Nr
    }
    apply(t, e, r, s, n) {
        t.applyFilter(this, e, r, s)
    }
    get blendMode() {
        return this.state.blendMode
    }
    set blendMode(t) {
        this.state.blendMode = t
    }
    get resolution() {
        return this._resolution
    }
    set resolution(t) {
        this._resolution = t
    }
    static get defaultVertexSrc() {
        return Ev
    }
    static get defaultFragmentSrc() {
        return wv
    }
}
;
Sh.defaultResolution = 1,
Sh.defaultMultisample = he.NONE;
let De = Sh;
class fa {
    constructor() {
        this.clearBeforeRender = !0,
        this._backgroundColor = new Pt(0),
        this.alpha = 1
    }
    init(t) {
        this.clearBeforeRender = t.clearBeforeRender;
        const {backgroundColor: e, background: r, backgroundAlpha: s} = t
          , n = r ?? e;
        n !== void 0 && (this.color = n),
        this.alpha = s
    }
    get color() {
        return this._backgroundColor.value
    }
    set color(t) {
        this._backgroundColor.setValue(t)
    }
    get alpha() {
        return this._backgroundColor.alpha
    }
    set alpha(t) {
        this._backgroundColor.setAlpha(t)
    }
    get backgroundColor() {
        return this._backgroundColor
    }
    destroy() {}
}
fa.defaultOptions = {
    backgroundAlpha: 1,
    backgroundColor: 0,
    clearBeforeRender: !0
},
fa.extension = {
    type: [et.RendererSystem, et.CanvasRendererSystem],
    name: "background"
};
ot.add(fa);
class vd {
    constructor(t) {
        this.renderer = t,
        this.emptyRenderer = new Oa(t),
        this.currentRenderer = this.emptyRenderer
    }
    setObjectRenderer(t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(),
        this.currentRenderer = t,
        this.currentRenderer.start())
    }
    flush() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    reset() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    copyBoundTextures(t, e) {
        const {boundTextures: r} = this.renderer.texture;
        for (let s = e - 1; s >= 0; --s)
            t[s] = r[s] || null,
            t[s] && (t[s]._batchLocation = s)
    }
    boundArray(t, e, r, s) {
        const {elements: n, ids: a, count: o} = t;
        let l = 0;
        for (let c = 0; c < o; c++) {
            const p = n[c]
              , m = p._batchLocation;
            if (m >= 0 && m < s && e[m] === p) {
                a[c] = m;
                continue
            }
            for (; l < s; ) {
                const f = e[l];
                if (f && f._batchEnabled === r && f._batchLocation === l) {
                    l++;
                    continue
                }
                a[c] = l,
                p._batchLocation = l,
                e[l] = p;
                break
            }
        }
    }
    destroy() {
        this.renderer = null
    }
}
vd.extension = {
    type: et.RendererSystem,
    name: "batch"
};
ot.add(vd);
let Xu = 0;
class pa {
    constructor(t) {
        this.renderer = t,
        this.webGLVersion = 1,
        this.extensions = {},
        this.supports = {
            uint32Indices: !1
        },
        this.handleContextLost = this.handleContextLost.bind(this),
        this.handleContextRestored = this.handleContextRestored.bind(this)
    }
    get isLost() {
        return !this.gl || this.gl.isContextLost()
    }
    contextChange(t) {
        this.gl = t,
        this.renderer.gl = t,
        this.renderer.CONTEXT_UID = Xu++
    }
    init(t) {
        if (t.context)
            this.initFromContext(t.context);
        else {
            const e = this.renderer.background.alpha < 1
              , r = t.premultipliedAlpha;
            this.preserveDrawingBuffer = t.preserveDrawingBuffer,
            this.useContextAlpha = t.useContextAlpha,
            this.powerPreference = t.powerPreference,
            this.initFromOptions({
                alpha: e,
                premultipliedAlpha: r,
                antialias: t.antialias,
                stencil: !0,
                preserveDrawingBuffer: t.preserveDrawingBuffer,
                powerPreference: t.powerPreference
            })
        }
    }
    initFromContext(t) {
        this.gl = t,
        this.validateContext(t),
        this.renderer.gl = t,
        this.renderer.CONTEXT_UID = Xu++,
        this.renderer.runners.contextChange.emit(t);
        const e = this.renderer.view;
        e.addEventListener !== void 0 && (e.addEventListener("webglcontextlost", this.handleContextLost, !1),
        e.addEventListener("webglcontextrestored", this.handleContextRestored, !1))
    }
    initFromOptions(t) {
        const e = this.createContext(this.renderer.view, t);
        this.initFromContext(e)
    }
    createContext(t, e) {
        let r;
        if (nt.PREFER_ENV >= Oi.WEBGL2 && (r = t.getContext("webgl2", e)),
        r)
            this.webGLVersion = 2;
        else if (this.webGLVersion = 1,
        r = t.getContext("webgl", e) || t.getContext("experimental-webgl", e),
        !r)
            throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        return this.gl = r,
        this.getExtensions(),
        this.gl
    }
    getExtensions() {
        const {gl: t} = this
          , e = {
            loseContext: t.getExtension("WEBGL_lose_context"),
            anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
            s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
            s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
            etc: t.getExtension("WEBGL_compressed_texture_etc"),
            etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
            pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            atc: t.getExtension("WEBGL_compressed_texture_atc"),
            astc: t.getExtension("WEBGL_compressed_texture_astc"),
            bptc: t.getExtension("EXT_texture_compression_bptc")
        };
        this.webGLVersion === 1 ? Object.assign(this.extensions, e, {
            drawBuffers: t.getExtension("WEBGL_draw_buffers"),
            depthTexture: t.getExtension("WEBGL_depth_texture"),
            vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
            uint32ElementIndex: t.getExtension("OES_element_index_uint"),
            floatTexture: t.getExtension("OES_texture_float"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
            textureHalfFloat: t.getExtension("OES_texture_half_float"),
            textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
        }) : this.webGLVersion === 2 && Object.assign(this.extensions, e, {
            colorBufferFloat: t.getExtension("EXT_color_buffer_float")
        })
    }
    handleContextLost(t) {
        t.preventDefault(),
        setTimeout( () => {
            this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext()
        }
        , 0)
    }
    handleContextRestored() {
        this.renderer.runners.contextChange.emit(this.gl)
    }
    destroy() {
        const t = this.renderer.view;
        this.renderer = null,
        t.removeEventListener !== void 0 && (t.removeEventListener("webglcontextlost", this.handleContextLost),
        t.removeEventListener("webglcontextrestored", this.handleContextRestored)),
        this.gl.useProgram(null),
        this.extensions.loseContext && this.extensions.loseContext.loseContext()
    }
    postrender() {
        this.renderer.objectRenderer.renderingToScreen && this.gl.flush()
    }
    validateContext(t) {
        const e = t.getContextAttributes()
          , r = "WebGL2RenderingContext"in globalThis && t instanceof globalThis.WebGL2RenderingContext;
        r && (this.webGLVersion = 2),
        e && !e.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
        const s = r || !!t.getExtension("OES_element_index_uint");
        this.supports.uint32Indices = s,
        s || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
    }
}
pa.defaultOptions = {
    context: null,
    antialias: !1,
    premultipliedAlpha: !0,
    preserveDrawingBuffer: !1,
    powerPreference: "default"
},
pa.extension = {
    type: et.RendererSystem,
    name: "context"
};
ot.add(pa);
class Ch {
    constructor(t, e) {
        if (this.width = Math.round(t),
        this.height = Math.round(e),
        !this.width || !this.height)
            throw new Error("Framebuffer width or height is zero");
        this.stencil = !1,
        this.depth = !1,
        this.dirtyId = 0,
        this.dirtyFormat = 0,
        this.dirtySize = 0,
        this.depthTexture = null,
        this.colorTextures = [],
        this.glFramebuffers = {},
        this.disposeRunner = new ur("disposeFramebuffer"),
        this.multisample = he.NONE
    }
    get colorTexture() {
        return this.colorTextures[0]
    }
    addColorTexture(t=0, e) {
        return this.colorTextures[t] = e || new Tt(null,{
            scaleMode: hr.NEAREST,
            resolution: 1,
            mipmap: Br.OFF,
            width: this.width,
            height: this.height
        }),
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    addDepthTexture(t) {
        return this.depthTexture = t || new Tt(null,{
            scaleMode: hr.NEAREST,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: Br.OFF,
            format: Z.DEPTH_COMPONENT,
            type: mt.UNSIGNED_SHORT
        }),
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    enableDepth() {
        return this.depth = !0,
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    enableStencil() {
        return this.stencil = !0,
        this.dirtyId++,
        this.dirtyFormat++,
        this
    }
    resize(t, e) {
        if (t = Math.round(t),
        e = Math.round(e),
        !t || !e)
            throw new Error("Framebuffer width and height must not be zero");
        if (!(t === this.width && e === this.height)) {
            this.width = t,
            this.height = e,
            this.dirtyId++,
            this.dirtySize++;
            for (let r = 0; r < this.colorTextures.length; r++) {
                const s = this.colorTextures[r]
                  , n = s.resolution;
                s.setSize(t / n, e / n)
            }
            if (this.depthTexture) {
                const r = this.depthTexture.resolution;
                this.depthTexture.setSize(t / r, e / r)
            }
        }
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroyDepthTexture() {
        this.depthTexture && (this.depthTexture.destroy(),
        this.depthTexture = null,
        ++this.dirtyId,
        ++this.dirtyFormat)
    }
}
class hl extends Tt {
    constructor(t={}) {
        if (typeof t == "number") {
            const e = arguments[0]
              , r = arguments[1]
              , s = arguments[2]
              , n = arguments[3];
            t = {
                width: e,
                height: r,
                scaleMode: s,
                resolution: n
            }
        }
        t.width = t.width ?? 100,
        t.height = t.height ?? 100,
        t.multisample ?? (t.multisample = he.NONE),
        super(null, t),
        this.mipmap = Br.OFF,
        this.valid = !0,
        this._clear = new Pt([0, 0, 0, 0]),
        this.framebuffer = new Ch(this.realWidth,this.realHeight).addColorTexture(0, this),
        this.framebuffer.multisample = t.multisample,
        this.maskStack = [],
        this.filterStack = [{}]
    }
    set clearColor(t) {
        this._clear.setValue(t)
    }
    get clearColor() {
        return this._clear.value
    }
    get clear() {
        return this._clear
    }
    get multisample() {
        return this.framebuffer.multisample
    }
    set multisample(t) {
        this.framebuffer.multisample = t
    }
    resize(t, e) {
        this.framebuffer.resize(t * this.resolution, e * this.resolution),
        this.setRealSize(this.framebuffer.width, this.framebuffer.height)
    }
    dispose() {
        this.framebuffer.dispose(),
        super.dispose()
    }
    destroy() {
        super.destroy(),
        this.framebuffer.destroyDepthTexture(),
        this.framebuffer = null
    }
}
class qr extends sn {
    constructor(t) {
        const e = t
          , r = e.naturalWidth || e.videoWidth || e.displayWidth || e.width
          , s = e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
        super(r, s),
        this.source = t,
        this.noSubImage = !1
    }
    static crossOrigin(t, e, r) {
        r === void 0 && !e.startsWith("data:") ? t.crossOrigin = ld(e) : r !== !1 && (t.crossOrigin = typeof r == "string" ? r : "anonymous")
    }
    upload(t, e, r, s) {
        const n = t.gl
          , a = e.realWidth
          , o = e.realHeight;
        if (s = s || this.source,
        typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) {
            if (!s.complete || s.naturalWidth === 0)
                return !1
        } else if (typeof HTMLVideoElement < "u" && s instanceof HTMLVideoElement && s.readyState <= 1)
            return !1;
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ke.UNPACK),
        !this.noSubImage && e.target === n.TEXTURE_2D && r.width === a && r.height === o ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, r.type, s) : (r.width = a,
        r.height = o,
        n.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, s)),
        !0
    }
    update() {
        if (this.destroyed)
            return;
        const t = this.source
          , e = t.naturalWidth || t.videoWidth || t.width
          , r = t.naturalHeight || t.videoHeight || t.height;
        this.resize(e, r),
        super.update()
    }
    dispose() {
        this.source = null
    }
}
class _d extends qr {
    constructor(t, e) {
        if (e = e || {},
        typeof t == "string") {
            const r = new Image;
            qr.crossOrigin(r, t, e.crossorigin),
            r.src = t,
            t = r
        }
        super(t),
        !t.complete && this._width && this._height && (this._width = 0,
        this._height = 0),
        this.url = t.src,
        this._process = null,
        this.preserveBitmap = !1,
        this.createBitmap = (e.createBitmap ?? nt.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap,
        this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null,
        this.bitmap = null,
        this._load = null,
        e.autoLoad !== !1 && this.load()
    }
    load(t) {
        return this._load ? this._load : (t !== void 0 && (this.createBitmap = t),
        this._load = new Promise( (e, r) => {
            const s = this.source;
            this.url = s.src;
            const n = () => {
                this.destroyed || (s.onload = null,
                s.onerror = null,
                this.update(),
                this._load = null,
                this.createBitmap ? e(this.process()) : e(this))
            }
            ;
            s.complete && s.src ? n() : (s.onload = n,
            s.onerror = a => {
                r(a),
                this.onError.emit(a)
            }
            )
        }
        ),
        this._load)
    }
    process() {
        const t = this.source;
        if (this._process !== null)
            return this._process;
        if (this.bitmap !== null || !globalThis.createImageBitmap)
            return Promise.resolve(this);
        const e = globalThis.createImageBitmap
          , r = !t.crossOrigin || t.crossOrigin === "anonymous";
        return this._process = fetch(t.src, {
            mode: r ? "cors" : "no-cors"
        }).then(s => s.blob()).then(s => e(s, 0, 0, t.width, t.height, {
            premultiplyAlpha: this.alphaMode === null || this.alphaMode === ke.UNPACK ? "premultiply" : "none"
        })).then(s => this.destroyed ? Promise.reject() : (this.bitmap = s,
        this.update(),
        this._process = null,
        Promise.resolve(this))),
        this._process
    }
    upload(t, e, r) {
        if (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
        !this.createBitmap)
            return super.upload(t, e, r);
        if (!this.bitmap && (this.process(),
        !this.bitmap))
            return !1;
        if (super.upload(t, e, r, this.bitmap),
        !this.preserveBitmap) {
            let s = !0;
            const n = e._glTextures;
            for (const a in n) {
                const o = n[a];
                if (o !== r && o.dirtyId !== e.dirtyId) {
                    s = !1;
                    break
                }
            }
            s && (this.bitmap.close && this.bitmap.close(),
            this.bitmap = null)
        }
        return !0
    }
    dispose() {
        this.source.onload = null,
        this.source.onerror = null,
        super.dispose(),
        this.bitmap && (this.bitmap.close(),
        this.bitmap = null),
        this._process = null,
        this._load = null
    }
    static test(t) {
        return typeof HTMLImageElement < "u" && (typeof t == "string" || t instanceof HTMLImageElement)
    }
}
class ll {
    constructor() {
        this.x0 = 0,
        this.y0 = 0,
        this.x1 = 1,
        this.y1 = 0,
        this.x2 = 1,
        this.y2 = 1,
        this.x3 = 0,
        this.y3 = 1,
        this.uvsFloat32 = new Float32Array(8)
    }
    set(t, e, r) {
        const s = e.width
          , n = e.height;
        if (r) {
            const a = t.width / 2 / s
              , o = t.height / 2 / n
              , l = t.x / s + a
              , c = t.y / n + o;
            r = ee.add(r, ee.NW),
            this.x0 = l + a * ee.uX(r),
            this.y0 = c + o * ee.uY(r),
            r = ee.add(r, 2),
            this.x1 = l + a * ee.uX(r),
            this.y1 = c + o * ee.uY(r),
            r = ee.add(r, 2),
            this.x2 = l + a * ee.uX(r),
            this.y2 = c + o * ee.uY(r),
            r = ee.add(r, 2),
            this.x3 = l + a * ee.uX(r),
            this.y3 = c + o * ee.uY(r)
        } else
            this.x0 = t.x / s,
            this.y0 = t.y / n,
            this.x1 = (t.x + t.width) / s,
            this.y1 = t.y / n,
            this.x2 = (t.x + t.width) / s,
            this.y2 = (t.y + t.height) / n,
            this.x3 = t.x / s,
            this.y3 = (t.y + t.height) / n;
        this.uvsFloat32[0] = this.x0,
        this.uvsFloat32[1] = this.y0,
        this.uvsFloat32[2] = this.x1,
        this.uvsFloat32[3] = this.y1,
        this.uvsFloat32[4] = this.x2,
        this.uvsFloat32[5] = this.y2,
        this.uvsFloat32[6] = this.x3,
        this.uvsFloat32[7] = this.y3
    }
}
ll.prototype.toString = function() {
    return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`
}
;
const zu = new ll;
function Fn(i) {
    i.destroy = function() {}
    ,
    i.on = function() {}
    ,
    i.once = function() {}
    ,
    i.emit = function() {}
}
class ut extends vs {
    constructor(t, e, r, s, n, a, o) {
        if (super(),
        this.noFrame = !1,
        e || (this.noFrame = !0,
        e = new At(0,0,1,1)),
        t instanceof ut && (t = t.baseTexture),
        this.baseTexture = t,
        this._frame = e,
        this.trim = s,
        this.valid = !1,
        this.destroyed = !1,
        this._uvs = zu,
        this.uvMatrix = null,
        this.orig = r || e,
        this._rotate = Number(n || 0),
        n === !0)
            this._rotate = 2;
        else if (this._rotate % 2 !== 0)
            throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        this.defaultAnchor = a ? new Bt(a.x,a.y) : new Bt(0,0),
        this.defaultBorders = o,
        this._updateID = 0,
        this.textureCacheIds = [],
        t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = e : t.once("loaded", this.onBaseTextureUpdated, this),
        this.noFrame && t.on("update", this.onBaseTextureUpdated, this)
    }
    update() {
        this.baseTexture.resource && this.baseTexture.resource.update()
    }
    onBaseTextureUpdated(t) {
        if (this.noFrame) {
            if (!this.baseTexture.valid)
                return;
            this._frame.width = t.width,
            this._frame.height = t.height,
            this.valid = !0,
            this.updateUvs()
        } else
            this.frame = this._frame;
        this.emit("update", this)
    }
    destroy(t) {
        if (this.baseTexture) {
            if (t) {
                const {resource: e} = this.baseTexture;
                e != null && e.url && Me[e.url] && ut.removeFromCache(e.url),
                this.baseTexture.destroy()
            }
            this.baseTexture.off("loaded", this.onBaseTextureUpdated, this),
            this.baseTexture.off("update", this.onBaseTextureUpdated, this),
            this.baseTexture = null
        }
        this._frame = null,
        this._uvs = null,
        this.trim = null,
        this.orig = null,
        this.valid = !1,
        ut.removeFromCache(this),
        this.textureCacheIds = null,
        this.destroyed = !0,
        this.emit("destroyed", this),
        this.removeAllListeners()
    }
    clone() {
        var s;
        const t = this._frame.clone()
          , e = this._frame === this.orig ? t : this.orig.clone()
          , r = new ut(this.baseTexture,!this.noFrame && t,e,(s = this.trim) == null ? void 0 : s.clone(),this.rotate,this.defaultAnchor,this.defaultBorders);
        return this.noFrame && (r._frame = t),
        r
    }
    updateUvs() {
        this._uvs === zu && (this._uvs = new ll),
        this._uvs.set(this._frame, this.baseTexture, this.rotate),
        this._updateID++
    }
    static from(t, e={}, r=nt.STRICT_TEXTURE_CACHE) {
        const s = typeof t == "string";
        let n = null;
        if (s)
            n = t;
        else if (t instanceof Tt) {
            if (!t.cacheId) {
                const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t.cacheId = `${o}-${hi()}`,
                Tt.addToCache(t, t.cacheId)
            }
            n = t.cacheId
        } else {
            if (!t._pixiId) {
                const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t._pixiId = `${o}_${hi()}`
            }
            n = t._pixiId
        }
        let a = Me[n];
        if (s && r && !a)
            throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
        return !a && !(t instanceof Tt) ? (e.resolution || (e.resolution = Fr(t)),
        a = new ut(new Tt(t,e)),
        a.baseTexture.cacheId = n,
        Tt.addToCache(a.baseTexture, n),
        ut.addToCache(a, n)) : !a && t instanceof Tt && (a = new ut(t),
        ut.addToCache(a, n)),
        a
    }
    static fromURL(t, e) {
        const r = Object.assign({
            autoLoad: !1
        }, e == null ? void 0 : e.resourceOptions)
          , s = ut.from(t, Object.assign({
            resourceOptions: r
        }, e), !1)
          , n = s.baseTexture.resource;
        return s.baseTexture.valid ? Promise.resolve(s) : n.load().then( () => Promise.resolve(s))
    }
    static fromBuffer(t, e, r, s) {
        return new ut(Tt.fromBuffer(t, e, r, s))
    }
    static fromLoader(t, e, r, s) {
        const n = new Tt(t,Object.assign({
            scaleMode: Tt.defaultOptions.scaleMode,
            resolution: Fr(e)
        }, s))
          , {resource: a} = n;
        a instanceof _d && (a.url = e);
        const o = new ut(n);
        return r || (r = e),
        Tt.addToCache(o.baseTexture, r),
        ut.addToCache(o, r),
        r !== e && (Tt.addToCache(o.baseTexture, e),
        ut.addToCache(o, e)),
        o.baseTexture.valid ? Promise.resolve(o) : new Promise(l => {
            o.baseTexture.once("loaded", () => l(o))
        }
        )
    }
    static addToCache(t, e) {
        e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
        Me[e] && Me[e] !== t && console.warn(`Texture added to the cache with an id [${e}] that already had an entry`),
        Me[e] = t)
    }
    static removeFromCache(t) {
        if (typeof t == "string") {
            const e = Me[t];
            if (e) {
                const r = e.textureCacheIds.indexOf(t);
                return r > -1 && e.textureCacheIds.splice(r, 1),
                delete Me[t],
                e
            }
        } else if (t != null && t.textureCacheIds) {
            for (let e = 0; e < t.textureCacheIds.length; ++e)
                Me[t.textureCacheIds[e]] === t && delete Me[t.textureCacheIds[e]];
            return t.textureCacheIds.length = 0,
            t
        }
        return null
    }
    get resolution() {
        return this.baseTexture.resolution
    }
    get frame() {
        return this._frame
    }
    set frame(t) {
        this._frame = t,
        this.noFrame = !1;
        const {x: e, y: r, width: s, height: n} = t
          , a = e + s > this.baseTexture.width
          , o = r + n > this.baseTexture.height;
        if (a || o) {
            const l = a && o ? "and" : "or"
              , c = `X: ${e} + ${s} = ${e + s} > ${this.baseTexture.width}`
              , p = `Y: ${r} + ${n} = ${r + n} > ${this.baseTexture.height}`;
            throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${c} ${l} ${p}`)
        }
        this.valid = s && n && this.baseTexture.valid,
        !this.trim && !this.rotate && (this.orig = t),
        this.valid && this.updateUvs()
    }
    get rotate() {
        return this._rotate
    }
    set rotate(t) {
        this._rotate = t,
        this.valid && this.updateUvs()
    }
    get width() {
        return this.orig.width
    }
    get height() {
        return this.orig.height
    }
    castToBaseTexture() {
        return this.baseTexture
    }
    static get EMPTY() {
        return ut._EMPTY || (ut._EMPTY = new ut(new Tt),
        Fn(ut._EMPTY),
        Fn(ut._EMPTY.baseTexture)),
        ut._EMPTY
    }
    static get WHITE() {
        if (!ut._WHITE) {
            const t = nt.ADAPTER.createCanvas(16, 16)
              , e = t.getContext("2d");
            t.width = 16,
            t.height = 16,
            e.fillStyle = "white",
            e.fillRect(0, 0, 16, 16),
            ut._WHITE = new ut(Tt.from(t)),
            Fn(ut._WHITE),
            Fn(ut._WHITE.baseTexture)
        }
        return ut._WHITE
    }
}
class Or extends ut {
    constructor(t, e) {
        super(t, e),
        this.valid = !0,
        this.filterFrame = null,
        this.filterPoolKey = null,
        this.updateUvs()
    }
    get framebuffer() {
        return this.baseTexture.framebuffer
    }
    get multisample() {
        return this.framebuffer.multisample
    }
    set multisample(t) {
        this.framebuffer.multisample = t
    }
    resize(t, e, r=!0) {
        const s = this.baseTexture.resolution
          , n = Math.round(t * s) / s
          , a = Math.round(e * s) / s;
        this.valid = n > 0 && a > 0,
        this._frame.width = this.orig.width = n,
        this._frame.height = this.orig.height = a,
        r && this.baseTexture.resize(n, a),
        this.updateUvs()
    }
    setResolution(t) {
        const {baseTexture: e} = this;
        e.resolution !== t && (e.setResolution(t),
        this.resize(e.width, e.height, !1))
    }
    static create(t) {
        return new Or(new hl(t))
    }
}
class xd {
    constructor(t) {
        this.texturePool = {},
        this.textureOptions = t || {},
        this.enableFullScreen = !1,
        this._pixelsWidth = 0,
        this._pixelsHeight = 0
    }
    createTexture(t, e, r=he.NONE) {
        const s = new hl(Object.assign({
            width: t,
            height: e,
            resolution: 1,
            multisample: r
        }, this.textureOptions));
        return new Or(s)
    }
    getOptimalTexture(t, e, r=1, s=he.NONE) {
        let n;
        t = Math.max(Math.ceil(t * r - 1e-6), 1),
        e = Math.max(Math.ceil(e * r - 1e-6), 1),
        !this.enableFullScreen || t !== this._pixelsWidth || e !== this._pixelsHeight ? (t = rn(t),
        e = rn(e),
        n = ((t & 65535) << 16 | e & 65535) >>> 0,
        s > 1 && (n += s * 4294967296)) : n = s > 1 ? -s : -1,
        this.texturePool[n] || (this.texturePool[n] = []);
        let a = this.texturePool[n].pop();
        return a || (a = this.createTexture(t, e, s)),
        a.filterPoolKey = n,
        a.setResolution(r),
        a
    }
    getFilterTexture(t, e, r) {
        const s = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || he.NONE);
        return s.filterFrame = t.filterFrame,
        s
    }
    returnTexture(t) {
        const e = t.filterPoolKey;
        t.filterFrame = null,
        this.texturePool[e].push(t)
    }
    returnFilterTexture(t) {
        this.returnTexture(t)
    }
    clear(t) {
        if (t = t !== !1,
        t)
            for (const e in this.texturePool) {
                const r = this.texturePool[e];
                if (r)
                    for (let s = 0; s < r.length; s++)
                        r[s].destroy(!0)
            }
        this.texturePool = {}
    }
    setScreenSize(t) {
        if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
            this.enableFullScreen = t.width > 0 && t.height > 0;
            for (const e in this.texturePool) {
                if (!(Number(e) < 0))
                    continue;
                const r = this.texturePool[e];
                if (r)
                    for (let s = 0; s < r.length; s++)
                        r[s].destroy(!0);
                this.texturePool[e] = []
            }
            this._pixelsWidth = t.width,
            this._pixelsHeight = t.height
        }
    }
}
xd.SCREEN_KEY = -1;
class Av extends li {
    constructor() {
        super(),
        this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
    }
}
class bd extends li {
    constructor() {
        super(),
        this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]),
        this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
        this.vertexBuffer = new pe(this.vertices),
        this.uvBuffer = new pe(this.uvs),
        this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
    }
    map(t, e) {
        let r = 0
          , s = 0;
        return this.uvs[0] = r,
        this.uvs[1] = s,
        this.uvs[2] = r + e.width / t.width,
        this.uvs[3] = s,
        this.uvs[4] = r + e.width / t.width,
        this.uvs[5] = s + e.height / t.height,
        this.uvs[6] = r,
        this.uvs[7] = s + e.height / t.height,
        r = e.x,
        s = e.y,
        this.vertices[0] = r,
        this.vertices[1] = s,
        this.vertices[2] = r + e.width,
        this.vertices[3] = s,
        this.vertices[4] = r + e.width,
        this.vertices[5] = s + e.height,
        this.vertices[6] = r,
        this.vertices[7] = s + e.height,
        this.invalidate(),
        this
    }
    invalidate() {
        return this.vertexBuffer._updateID++,
        this.uvBuffer._updateID++,
        this
    }
}
class Sv {
    constructor() {
        this.renderTexture = null,
        this.target = null,
        this.legacy = !1,
        this.resolution = 1,
        this.multisample = he.NONE,
        this.sourceFrame = new At,
        this.destinationFrame = new At,
        this.bindingSourceFrame = new At,
        this.bindingDestinationFrame = new At,
        this.filters = [],
        this.transform = null
    }
    clear() {
        this.target = null,
        this.filters = null,
        this.renderTexture = null
    }
}
const On = [new Bt, new Bt, new Bt, new Bt]
  , Fo = new Wt;
class Td {
    constructor(t) {
        this.renderer = t,
        this.defaultFilterStack = [{}],
        this.texturePool = new xd,
        this.statePool = [],
        this.quad = new Av,
        this.quadUv = new bd,
        this.tempRect = new At,
        this.activeState = {},
        this.globalUniforms = new cr({
            outputFrame: new At,
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4)
        },!0),
        this.forceClear = !1,
        this.useMaxPadding = !1
    }
    init() {
        this.texturePool.setScreenSize(this.renderer.view)
    }
    push(t, e) {
        const r = this.renderer
          , s = this.defaultFilterStack
          , n = this.statePool.pop() || new Sv
          , a = r.renderTexture;
        let o, l;
        if (a.current) {
            const A = a.current;
            o = A.resolution,
            l = A.multisample
        } else
            o = r.resolution,
            l = r.multisample;
        let c = e[0].resolution || o
          , p = e[0].multisample ?? l
          , m = e[0].padding
          , f = e[0].autoFit
          , v = e[0].legacy ?? !0;
        for (let A = 1; A < e.length; A++) {
            const E = e[A];
            c = Math.min(c, E.resolution || o),
            p = Math.min(p, E.multisample ?? l),
            m = this.useMaxPadding ? Math.max(m, E.padding) : m + E.padding,
            f = f && E.autoFit,
            v = v || (E.legacy ?? !0)
        }
        s.length === 1 && (this.defaultFilterStack[0].renderTexture = a.current),
        s.push(n),
        n.resolution = c,
        n.multisample = p,
        n.legacy = v,
        n.target = t,
        n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
        n.sourceFrame.pad(m);
        const _ = this.tempRect.copyFrom(a.sourceFrame);
        r.projection.transform && this.transformAABB(Fo.copyFrom(r.projection.transform).invert(), _),
        f ? (n.sourceFrame.fit(_),
        (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) && (n.sourceFrame.width = 0,
        n.sourceFrame.height = 0)) : n.sourceFrame.intersects(_) || (n.sourceFrame.width = 0,
        n.sourceFrame.height = 0),
        this.roundFrame(n.sourceFrame, a.current ? a.current.resolution : r.resolution, a.sourceFrame, a.destinationFrame, r.projection.transform),
        n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, c, p),
        n.filters = e,
        n.destinationFrame.width = n.renderTexture.width,
        n.destinationFrame.height = n.renderTexture.height;
        const T = this.tempRect;
        T.x = 0,
        T.y = 0,
        T.width = n.sourceFrame.width,
        T.height = n.sourceFrame.height,
        n.renderTexture.filterFrame = n.sourceFrame,
        n.bindingSourceFrame.copyFrom(a.sourceFrame),
        n.bindingDestinationFrame.copyFrom(a.destinationFrame),
        n.transform = r.projection.transform,
        r.projection.transform = null,
        a.bind(n.renderTexture, n.sourceFrame, T),
        r.framebuffer.clear(0, 0, 0, 0)
    }
    pop() {
        const t = this.defaultFilterStack
          , e = t.pop()
          , r = e.filters;
        this.activeState = e;
        const s = this.globalUniforms.uniforms;
        s.outputFrame = e.sourceFrame,
        s.resolution = e.resolution;
        const n = s.inputSize
          , a = s.inputPixel
          , o = s.inputClamp;
        if (n[0] = e.destinationFrame.width,
        n[1] = e.destinationFrame.height,
        n[2] = 1 / n[0],
        n[3] = 1 / n[1],
        a[0] = Math.round(n[0] * e.resolution),
        a[1] = Math.round(n[1] * e.resolution),
        a[2] = 1 / a[0],
        a[3] = 1 / a[1],
        o[0] = .5 * a[2],
        o[1] = .5 * a[3],
        o[2] = e.sourceFrame.width * n[2] - .5 * a[2],
        o[3] = e.sourceFrame.height * n[3] - .5 * a[3],
        e.legacy) {
            const c = s.filterArea;
            c[0] = e.destinationFrame.width,
            c[1] = e.destinationFrame.height,
            c[2] = e.sourceFrame.x,
            c[3] = e.sourceFrame.y,
            s.filterClamp = s.inputClamp
        }
        this.globalUniforms.update();
        const l = t[t.length - 1];
        if (this.renderer.framebuffer.blit(),
        r.length === 1)
            r[0].apply(this, e.renderTexture, l.renderTexture, Cr.BLEND, e),
            this.returnFilterTexture(e.renderTexture);
        else {
            let c = e.renderTexture
              , p = this.getOptimalFilterTexture(c.width, c.height, e.resolution);
            p.filterFrame = c.filterFrame;
            let m = 0;
            for (m = 0; m < r.length - 1; ++m) {
                m === 1 && e.multisample > 1 && (p = this.getOptimalFilterTexture(c.width, c.height, e.resolution),
                p.filterFrame = c.filterFrame),
                r[m].apply(this, c, p, Cr.CLEAR, e);
                const f = c;
                c = p,
                p = f
            }
            r[m].apply(this, c, l.renderTexture, Cr.BLEND, e),
            m > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture),
            this.returnFilterTexture(c),
            this.returnFilterTexture(p)
        }
        e.clear(),
        this.statePool.push(e)
    }
    bindAndClear(t, e=Cr.CLEAR) {
        const {renderTexture: r, state: s} = this.renderer;
        if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null,
        t == null ? void 0 : t.filterFrame) {
            const a = this.tempRect;
            a.x = 0,
            a.y = 0,
            a.width = t.filterFrame.width,
            a.height = t.filterFrame.height,
            r.bind(t, t.filterFrame, a)
        } else
            t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? r.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
        const n = s.stateId & 1 || this.forceClear;
        (e === Cr.CLEAR || e === Cr.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0)
    }
    applyFilter(t, e, r, s) {
        const n = this.renderer;
        n.state.set(t.state),
        this.bindAndClear(r, s),
        t.uniforms.uSampler = e,
        t.uniforms.filterGlobals = this.globalUniforms,
        n.shader.bind(t),
        t.legacy = !!t.program.attributeData.aTextureCoord,
        t.legacy ? (this.quadUv.map(e._frame, e.filterFrame),
        n.geometry.bind(this.quadUv),
        n.geometry.draw(or.TRIANGLES)) : (n.geometry.bind(this.quad),
        n.geometry.draw(or.TRIANGLE_STRIP))
    }
    calculateSpriteMatrix(t, e) {
        const {sourceFrame: r, destinationFrame: s} = this.activeState
          , {orig: n} = e._texture
          , a = t.set(s.width, 0, 0, s.height, r.x, r.y)
          , o = e.worldTransform.copyTo(Wt.TEMP_MATRIX);
        return o.invert(),
        a.prepend(o),
        a.scale(1 / n.width, 1 / n.height),
        a.translate(e.anchor.x, e.anchor.y),
        a
    }
    destroy() {
        this.renderer = null,
        this.texturePool.clear(!1)
    }
    getOptimalFilterTexture(t, e, r=1, s=he.NONE) {
        return this.texturePool.getOptimalTexture(t, e, r, s)
    }
    getFilterTexture(t, e, r) {
        if (typeof t == "number") {
            const n = t;
            t = e,
            e = n
        }
        t = t || this.activeState.renderTexture;
        const s = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || he.NONE);
        return s.filterFrame = t.filterFrame,
        s
    }
    returnFilterTexture(t) {
        this.texturePool.returnTexture(t)
    }
    emptyPool() {
        this.texturePool.clear(!0)
    }
    resize() {
        this.texturePool.setScreenSize(this.renderer.view)
    }
    transformAABB(t, e) {
        const r = On[0]
          , s = On[1]
          , n = On[2]
          , a = On[3];
        r.set(e.left, e.top),
        s.set(e.left, e.bottom),
        n.set(e.right, e.top),
        a.set(e.right, e.bottom),
        t.apply(r, r),
        t.apply(s, s),
        t.apply(n, n),
        t.apply(a, a);
        const o = Math.min(r.x, s.x, n.x, a.x)
          , l = Math.min(r.y, s.y, n.y, a.y)
          , c = Math.max(r.x, s.x, n.x, a.x)
          , p = Math.max(r.y, s.y, n.y, a.y);
        e.x = o,
        e.y = l,
        e.width = c - o,
        e.height = p - l
    }
    roundFrame(t, e, r, s, n) {
        if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
            if (n) {
                const {a, b: o, c: l, d: c} = n;
                if ((Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(c) > 1e-4))
                    return
            }
            n = n ? Fo.copyFrom(n) : Fo.identity(),
            n.translate(-r.x, -r.y).scale(s.width / r.width, s.height / r.height).translate(s.x, s.y),
            this.transformAABB(n, t),
            t.ceil(e),
            this.transformAABB(n.invert(), t)
        }
    }
}
Td.extension = {
    type: et.RendererSystem,
    name: "filter"
};
ot.add(Td);
class Cv {
    constructor(t) {
        this.framebuffer = t,
        this.stencil = null,
        this.dirtyId = -1,
        this.dirtyFormat = -1,
        this.dirtySize = -1,
        this.multisample = he.NONE,
        this.msaaBuffer = null,
        this.blitFramebuffer = null,
        this.mipLevel = 0
    }
}
const Iv = new At;
class wd {
    constructor(t) {
        this.renderer = t,
        this.managedFramebuffers = [],
        this.unknownFramebuffer = new Ch(10,10),
        this.msaaSamples = null
    }
    contextChange() {
        this.disposeAll(!0);
        const t = this.gl = this.renderer.gl;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID,
        this.current = this.unknownFramebuffer,
        this.viewport = new At,
        this.hasMRT = !0,
        this.writeDepthTexture = !0,
        this.renderer.context.webGLVersion === 1) {
            let e = this.renderer.context.extensions.drawBuffers
              , r = this.renderer.context.extensions.depthTexture;
            nt.PREFER_ENV === Oi.WEBGL_LEGACY && (e = null,
            r = null),
            e ? t.drawBuffers = s => e.drawBuffersWEBGL(s) : (this.hasMRT = !1,
            t.drawBuffers = () => {}
            ),
            r || (this.writeDepthTexture = !1)
        } else
            this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
    }
    bind(t, e, r=0) {
        const {gl: s} = this;
        if (t) {
            const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
            this.current !== t && (this.current = t,
            s.bindFramebuffer(s.FRAMEBUFFER, n.framebuffer)),
            n.mipLevel !== r && (t.dirtyId++,
            t.dirtyFormat++,
            n.mipLevel = r),
            n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId,
            n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat,
            n.dirtySize = t.dirtySize,
            this.updateFramebuffer(t, r)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize,
            this.resizeFramebuffer(t)));
            for (let a = 0; a < t.colorTextures.length; a++) {
                const o = t.colorTextures[a];
                this.renderer.texture.unbind(o.parentTextureArray || o)
            }
            if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture),
            e) {
                const a = e.width >> r
                  , o = e.height >> r
                  , l = a / e.width;
                this.setViewport(e.x * l, e.y * l, a, o)
            } else {
                const a = t.width >> r
                  , o = t.height >> r;
                this.setViewport(0, 0, a, o)
            }
        } else
            this.current && (this.current = null,
            s.bindFramebuffer(s.FRAMEBUFFER, null)),
            e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
    }
    setViewport(t, e, r, s) {
        const n = this.viewport;
        t = Math.round(t),
        e = Math.round(e),
        r = Math.round(r),
        s = Math.round(s),
        (n.width !== r || n.height !== s || n.x !== t || n.y !== e) && (n.x = t,
        n.y = e,
        n.width = r,
        n.height = s,
        this.gl.viewport(t, e, r, s))
    }
    get size() {
        return this.current ? {
            x: 0,
            y: 0,
            width: this.current.width,
            height: this.current.height
        } : {
            x: 0,
            y: 0,
            width: this.renderer.width,
            height: this.renderer.height
        }
    }
    clear(t, e, r, s, n=Ko.COLOR | Ko.DEPTH) {
        const {gl: a} = this;
        a.clearColor(t, e, r, s),
        a.clear(n)
    }
    initFramebuffer(t) {
        const {gl: e} = this
          , r = new Cv(e.createFramebuffer());
        return r.multisample = this.detectSamples(t.multisample),
        t.glFramebuffers[this.CONTEXT_UID] = r,
        this.managedFramebuffers.push(t),
        t.disposeRunner.add(this),
        r
    }
    resizeFramebuffer(t) {
        const {gl: e} = this
          , r = t.glFramebuffers[this.CONTEXT_UID];
        if (r.stencil) {
            e.bindRenderbuffer(e.RENDERBUFFER, r.stencil);
            let a;
            this.renderer.context.webGLVersion === 1 ? a = e.DEPTH_STENCIL : t.depth && t.stencil ? a = e.DEPTH24_STENCIL8 : t.depth ? a = e.DEPTH_COMPONENT24 : a = e.STENCIL_INDEX8,
            r.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, a, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, a, t.width, t.height)
        }
        const s = t.colorTextures;
        let n = s.length;
        e.drawBuffers || (n = Math.min(n, 1));
        for (let a = 0; a < n; a++) {
            const o = s[a]
              , l = o.parentTextureArray || o;
            this.renderer.texture.bind(l, 0),
            a === 0 && r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer),
            e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, l._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height))
        }
        t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
    }
    updateFramebuffer(t, e) {
        const {gl: r} = this
          , s = t.glFramebuffers[this.CONTEXT_UID]
          , n = t.colorTextures;
        let a = n.length;
        r.drawBuffers || (a = Math.min(a, 1)),
        s.multisample > 1 && this.canMultisampleFramebuffer(t) ? s.msaaBuffer = s.msaaBuffer || r.createRenderbuffer() : s.msaaBuffer && (r.deleteRenderbuffer(s.msaaBuffer),
        s.msaaBuffer = null,
        s.blitFramebuffer && (s.blitFramebuffer.dispose(),
        s.blitFramebuffer = null));
        const o = [];
        for (let l = 0; l < a; l++) {
            const c = n[l]
              , p = c.parentTextureArray || c;
            this.renderer.texture.bind(p, 0),
            l === 0 && s.msaaBuffer ? (r.bindRenderbuffer(r.RENDERBUFFER, s.msaaBuffer),
            r.renderbufferStorageMultisample(r.RENDERBUFFER, s.multisample, p._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height),
            r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, s.msaaBuffer)) : (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + l, c.target, p._glTextures[this.CONTEXT_UID].texture, e),
            o.push(r.COLOR_ATTACHMENT0 + l))
        }
        if (o.length > 1 && r.drawBuffers(o),
        t.depthTexture && this.writeDepthTexture) {
            const l = t.depthTexture;
            this.renderer.texture.bind(l, 0),
            r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, e)
        }
        if ((t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)) {
            s.stencil = s.stencil || r.createRenderbuffer();
            let l, c;
            this.renderer.context.webGLVersion === 1 ? (l = r.DEPTH_STENCIL_ATTACHMENT,
            c = r.DEPTH_STENCIL) : t.depth && t.stencil ? (l = r.DEPTH_STENCIL_ATTACHMENT,
            c = r.DEPTH24_STENCIL8) : t.depth ? (l = r.DEPTH_ATTACHMENT,
            c = r.DEPTH_COMPONENT24) : (l = r.STENCIL_ATTACHMENT,
            c = r.STENCIL_INDEX8),
            r.bindRenderbuffer(r.RENDERBUFFER, s.stencil),
            s.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, s.multisample, c, t.width, t.height) : r.renderbufferStorage(r.RENDERBUFFER, c, t.width, t.height),
            r.framebufferRenderbuffer(r.FRAMEBUFFER, l, r.RENDERBUFFER, s.stencil)
        } else
            s.stencil && (r.deleteRenderbuffer(s.stencil),
            s.stencil = null)
    }
    canMultisampleFramebuffer(t) {
        return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture
    }
    detectSamples(t) {
        const {msaaSamples: e} = this;
        let r = he.NONE;
        if (t <= 1 || e === null)
            return r;
        for (let s = 0; s < e.length; s++)
            if (e[s] <= t) {
                r = e[s];
                break
            }
        return r === 1 && (r = he.NONE),
        r
    }
    blit(t, e, r) {
        const {current: s, renderer: n, gl: a, CONTEXT_UID: o} = this;
        if (n.context.webGLVersion !== 2 || !s)
            return;
        const l = s.glFramebuffers[o];
        if (!l)
            return;
        if (!t) {
            if (!l.msaaBuffer)
                return;
            const p = s.colorTextures[0];
            if (!p)
                return;
            l.blitFramebuffer || (l.blitFramebuffer = new Ch(s.width,s.height),
            l.blitFramebuffer.addColorTexture(0, p)),
            t = l.blitFramebuffer,
            t.colorTextures[0] !== p && (t.colorTextures[0] = p,
            t.dirtyId++,
            t.dirtyFormat++),
            (t.width !== s.width || t.height !== s.height) && (t.width = s.width,
            t.height = s.height,
            t.dirtyId++,
            t.dirtySize++)
        }
        e || (e = Iv,
        e.width = s.width,
        e.height = s.height),
        r || (r = e);
        const c = e.width === r.width && e.height === r.height;
        this.bind(t),
        a.bindFramebuffer(a.READ_FRAMEBUFFER, l.framebuffer),
        a.blitFramebuffer(e.left, e.top, e.right, e.bottom, r.left, r.top, r.right, r.bottom, a.COLOR_BUFFER_BIT, c ? a.NEAREST : a.LINEAR),
        a.bindFramebuffer(a.READ_FRAMEBUFFER, t.glFramebuffers[this.CONTEXT_UID].framebuffer)
    }
    disposeFramebuffer(t, e) {
        const r = t.glFramebuffers[this.CONTEXT_UID]
          , s = this.gl;
        if (!r)
            return;
        delete t.glFramebuffers[this.CONTEXT_UID];
        const n = this.managedFramebuffers.indexOf(t);
        n >= 0 && this.managedFramebuffers.splice(n, 1),
        t.disposeRunner.remove(this),
        e || (s.deleteFramebuffer(r.framebuffer),
        r.msaaBuffer && s.deleteRenderbuffer(r.msaaBuffer),
        r.stencil && s.deleteRenderbuffer(r.stencil)),
        r.blitFramebuffer && this.disposeFramebuffer(r.blitFramebuffer, e)
    }
    disposeAll(t) {
        const e = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (let r = 0; r < e.length; r++)
            this.disposeFramebuffer(e[r], t)
    }
    forceStencil() {
        const t = this.current;
        if (!t)
            return;
        const e = t.glFramebuffers[this.CONTEXT_UID];
        if (!e || e.stencil && t.stencil)
            return;
        t.stencil = !0;
        const r = t.width
          , s = t.height
          , n = this.gl
          , a = e.stencil = n.createRenderbuffer();
        n.bindRenderbuffer(n.RENDERBUFFER, a);
        let o, l;
        this.renderer.context.webGLVersion === 1 ? (o = n.DEPTH_STENCIL_ATTACHMENT,
        l = n.DEPTH_STENCIL) : t.depth ? (o = n.DEPTH_STENCIL_ATTACHMENT,
        l = n.DEPTH24_STENCIL8) : (o = n.STENCIL_ATTACHMENT,
        l = n.STENCIL_INDEX8),
        e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, l, r, s) : n.renderbufferStorage(n.RENDERBUFFER, l, r, s),
        n.framebufferRenderbuffer(n.FRAMEBUFFER, o, n.RENDERBUFFER, a)
    }
    reset() {
        this.current = this.unknownFramebuffer,
        this.viewport = new At
    }
    destroy() {
        this.renderer = null
    }
}
wd.extension = {
    type: et.RendererSystem,
    name: "framebuffer"
};
ot.add(wd);
const Oo = {
    5126: 4,
    5123: 2,
    5121: 1
};
class Ed {
    constructor(t) {
        this.renderer = t,
        this._activeGeometry = null,
        this._activeVao = null,
        this.hasVao = !0,
        this.hasInstance = !0,
        this.canUseUInt32ElementIndex = !1,
        this.managedGeometries = {}
    }
    contextChange() {
        this.disposeAll(!0);
        const t = this.gl = this.renderer.gl
          , e = this.renderer.context;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID,
        e.webGLVersion !== 2) {
            let r = this.renderer.context.extensions.vertexArrayObject;
            nt.PREFER_ENV === Oi.WEBGL_LEGACY && (r = null),
            r ? (t.createVertexArray = () => r.createVertexArrayOES(),
            t.bindVertexArray = s => r.bindVertexArrayOES(s),
            t.deleteVertexArray = s => r.deleteVertexArrayOES(s)) : (this.hasVao = !1,
            t.createVertexArray = () => null,
            t.bindVertexArray = () => null,
            t.deleteVertexArray = () => null)
        }
        if (e.webGLVersion !== 2) {
            const r = t.getExtension("ANGLE_instanced_arrays");
            r ? (t.vertexAttribDivisor = (s, n) => r.vertexAttribDivisorANGLE(s, n),
            t.drawElementsInstanced = (s, n, a, o, l) => r.drawElementsInstancedANGLE(s, n, a, o, l),
            t.drawArraysInstanced = (s, n, a, o) => r.drawArraysInstancedANGLE(s, n, a, o)) : this.hasInstance = !1
        }
        this.canUseUInt32ElementIndex = e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex
    }
    bind(t, e) {
        e = e || this.renderer.shader.shader;
        const {gl: r} = this;
        let s = t.glVertexArrayObjects[this.CONTEXT_UID]
          , n = !1;
        s || (this.managedGeometries[t.id] = t,
        t.disposeRunner.add(this),
        t.glVertexArrayObjects[this.CONTEXT_UID] = s = {},
        n = !0);
        const a = s[e.program.id] || this.initGeometryVao(t, e, n);
        this._activeGeometry = t,
        this._activeVao !== a && (this._activeVao = a,
        this.hasVao ? r.bindVertexArray(a) : this.activateVao(t, e.program)),
        this.updateBuffers()
    }
    reset() {
        this.unbind()
    }
    updateBuffers() {
        const t = this._activeGeometry
          , e = this.renderer.buffer;
        for (let r = 0; r < t.buffers.length; r++) {
            const s = t.buffers[r];
            e.update(s)
        }
    }
    checkCompatibility(t, e) {
        const r = t.attributes
          , s = e.attributeData;
        for (const n in s)
            if (!r[n])
                throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`)
    }
    getSignature(t, e) {
        const r = t.attributes
          , s = e.attributeData
          , n = ["g", t.id];
        for (const a in r)
            s[a] && n.push(a, s[a].location);
        return n.join("-")
    }
    initGeometryVao(t, e, r=!0) {
        const s = this.gl
          , n = this.CONTEXT_UID
          , a = this.renderer.buffer
          , o = e.program;
        o.glPrograms[n] || this.renderer.shader.generateProgram(e),
        this.checkCompatibility(t, o);
        const l = this.getSignature(t, o)
          , c = t.glVertexArrayObjects[this.CONTEXT_UID];
        let p = c[l];
        if (p)
            return c[o.id] = p,
            p;
        const m = t.buffers
          , f = t.attributes
          , v = {}
          , _ = {};
        for (const T in m)
            v[T] = 0,
            _[T] = 0;
        for (const T in f)
            !f[T].size && o.attributeData[T] ? f[T].size = o.attributeData[T].size : f[T].size || console.warn(`PIXI Geometry attribute '${T}' size cannot be determined (likely the bound shader does not have the attribute)`),
            v[f[T].buffer] += f[T].size * Oo[f[T].type];
        for (const T in f) {
            const A = f[T]
              , E = A.size;
            A.stride === void 0 && (v[A.buffer] === E * Oo[A.type] ? A.stride = 0 : A.stride = v[A.buffer]),
            A.start === void 0 && (A.start = _[A.buffer],
            _[A.buffer] += E * Oo[A.type])
        }
        p = s.createVertexArray(),
        s.bindVertexArray(p);
        for (let T = 0; T < m.length; T++) {
            const A = m[T];
            a.bind(A),
            r && A._glBuffers[n].refCount++
        }
        return this.activateVao(t, o),
        c[o.id] = p,
        c[l] = p,
        s.bindVertexArray(null),
        a.unbind(Mr.ARRAY_BUFFER),
        p
    }
    disposeGeometry(t, e) {
        var o;
        if (!this.managedGeometries[t.id])
            return;
        delete this.managedGeometries[t.id];
        const r = t.glVertexArrayObjects[this.CONTEXT_UID]
          , s = this.gl
          , n = t.buffers
          , a = (o = this.renderer) == null ? void 0 : o.buffer;
        if (t.disposeRunner.remove(this),
        !!r) {
            if (a)
                for (let l = 0; l < n.length; l++) {
                    const c = n[l]._glBuffers[this.CONTEXT_UID];
                    c && (c.refCount--,
                    c.refCount === 0 && !e && a.dispose(n[l], e))
                }
            if (!e) {
                for (const l in r)
                    if (l[0] === "g") {
                        const c = r[l];
                        this._activeVao === c && this.unbind(),
                        s.deleteVertexArray(c)
                    }
            }
            delete t.glVertexArrayObjects[this.CONTEXT_UID]
        }
    }
    disposeAll(t) {
        const e = Object.keys(this.managedGeometries);
        for (let r = 0; r < e.length; r++)
            this.disposeGeometry(this.managedGeometries[e[r]], t)
    }
    activateVao(t, e) {
        const r = this.gl
          , s = this.CONTEXT_UID
          , n = this.renderer.buffer
          , a = t.buffers
          , o = t.attributes;
        t.indexBuffer && n.bind(t.indexBuffer);
        let l = null;
        for (const c in o) {
            const p = o[c]
              , m = a[p.buffer]
              , f = m._glBuffers[s];
            if (e.attributeData[c]) {
                l !== f && (n.bind(m),
                l = f);
                const v = e.attributeData[c].location;
                if (r.enableVertexAttribArray(v),
                r.vertexAttribPointer(v, p.size, p.type || r.FLOAT, p.normalized, p.stride, p.start),
                p.instance)
                    if (this.hasInstance)
                        r.vertexAttribDivisor(v, p.divisor);
                    else
                        throw new Error("geometry error, GPU Instancing is not supported on this device")
            }
        }
    }
    draw(t, e, r, s) {
        const {gl: n} = this
          , a = this._activeGeometry;
        if (a.indexBuffer) {
            const o = a.indexBuffer.data.BYTES_PER_ELEMENT
              , l = o === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
            o === 2 || o === 4 && this.canUseUInt32ElementIndex ? a.instanced ? n.drawElementsInstanced(t, e || a.indexBuffer.data.length, l, (r || 0) * o, s || 1) : n.drawElements(t, e || a.indexBuffer.data.length, l, (r || 0) * o) : console.warn("unsupported index buffer type: uint32")
        } else
            a.instanced ? n.drawArraysInstanced(t, r, e || a.getSize(), s || 1) : n.drawArrays(t, r, e || a.getSize());
        return this
    }
    unbind() {
        this.gl.bindVertexArray(null),
        this._activeVao = null,
        this._activeGeometry = null
    }
    destroy() {
        this.renderer = null
    }
}
Ed.extension = {
    type: et.RendererSystem,
    name: "geometry"
};
ot.add(Ed);
const Yu = new Wt;
class ul {
    constructor(t, e) {
        this._texture = t,
        this.mapCoord = new Wt,
        this.uClampFrame = new Float32Array(4),
        this.uClampOffset = new Float32Array(2),
        this._textureID = -1,
        this._updateID = 0,
        this.clampOffset = 0,
        this.clampMargin = typeof e > "u" ? .5 : e,
        this.isSimple = !1
    }
    get texture() {
        return this._texture
    }
    set texture(t) {
        this._texture = t,
        this._textureID = -1
    }
    multiplyUvs(t, e) {
        e === void 0 && (e = t);
        const r = this.mapCoord;
        for (let s = 0; s < t.length; s += 2) {
            const n = t[s]
              , a = t[s + 1];
            e[s] = n * r.a + a * r.c + r.tx,
            e[s + 1] = n * r.b + a * r.d + r.ty
        }
        return e
    }
    update(t) {
        const e = this._texture;
        if (!e || !e.valid || !t && this._textureID === e._updateID)
            return !1;
        this._textureID = e._updateID,
        this._updateID++;
        const r = e._uvs;
        this.mapCoord.set(r.x1 - r.x0, r.y1 - r.y0, r.x3 - r.x0, r.y3 - r.y0, r.x0, r.y0);
        const s = e.orig
          , n = e.trim;
        n && (Yu.set(s.width / n.width, 0, 0, s.height / n.height, -n.x / n.width, -n.y / n.height),
        this.mapCoord.append(Yu));
        const a = e.baseTexture
          , o = this.uClampFrame
          , l = this.clampMargin / a.resolution
          , c = this.clampOffset;
        return o[0] = (e._frame.x + l + c) / a.width,
        o[1] = (e._frame.y + l + c) / a.height,
        o[2] = (e._frame.x + e._frame.width - l + c) / a.width,
        o[3] = (e._frame.y + e._frame.height - l + c) / a.height,
        this.uClampOffset[0] = c / a.realWidth,
        this.uClampOffset[1] = c / a.realHeight,
        this.isSimple = e._frame.width === a.width && e._frame.height === a.height && e.rotate === 0,
        !0
    }
}
var Rv = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`
  , Pv = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class Mv extends De {
    constructor(t, e, r) {
        let s = null;
        typeof t != "string" && e === void 0 && r === void 0 && (s = t,
        t = void 0,
        e = void 0,
        r = void 0),
        super(t || Pv, e || Rv, r),
        this.maskSprite = s,
        this.maskMatrix = new Wt
    }
    get maskSprite() {
        return this._maskSprite
    }
    set maskSprite(t) {
        this._maskSprite = t,
        this._maskSprite && (this._maskSprite.renderable = !1)
    }
    apply(t, e, r, s) {
        const n = this._maskSprite
          , a = n._texture;
        a.valid && (a.uvMatrix || (a.uvMatrix = new ul(a,0)),
        a.uvMatrix.update(),
        this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1,
        this.uniforms.mask = a,
        this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(a.uvMatrix.mapCoord),
        this.uniforms.alpha = n.worldAlpha,
        this.uniforms.maskClamp = a.uvMatrix.uClampFrame,
        t.applyFilter(this, e, r, s))
    }
}
class Dv {
    constructor(t=null) {
        this.type = fe.NONE,
        this.autoDetect = !0,
        this.maskObject = t || null,
        this.pooled = !1,
        this.isMaskData = !0,
        this.resolution = null,
        this.multisample = De.defaultMultisample,
        this.enabled = !0,
        this.colorMask = 15,
        this._filters = null,
        this._stencilCounter = 0,
        this._scissorCounter = 0,
        this._scissorRect = null,
        this._scissorRectLocal = null,
        this._colorMask = 15,
        this._target = null
    }
    get filter() {
        return this._filters ? this._filters[0] : null
    }
    set filter(t) {
        t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null
    }
    reset() {
        this.pooled && (this.maskObject = null,
        this.type = fe.NONE,
        this.autoDetect = !0),
        this._target = null,
        this._scissorRectLocal = null
    }
    copyCountersOrReset(t) {
        t ? (this._stencilCounter = t._stencilCounter,
        this._scissorCounter = t._scissorCounter,
        this._scissorRect = t._scissorRect) : (this._stencilCounter = 0,
        this._scissorCounter = 0,
        this._scissorRect = null)
    }
}
class Ad {
    constructor(t) {
        this.renderer = t,
        this.enableScissor = !0,
        this.alphaMaskPool = [],
        this.maskDataPool = [],
        this.maskStack = [],
        this.alphaMaskIndex = 0
    }
    setMaskStack(t) {
        this.maskStack = t,
        this.renderer.scissor.setMaskStack(t),
        this.renderer.stencil.setMaskStack(t)
    }
    push(t, e) {
        let r = e;
        if (!r.isMaskData) {
            const n = this.maskDataPool.pop() || new Dv;
            n.pooled = !0,
            n.maskObject = e,
            r = n
        }
        const s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
        if (r.copyCountersOrReset(s),
        r._colorMask = s ? s._colorMask : 15,
        r.autoDetect && this.detect(r),
        r._target = t,
        r.type !== fe.SPRITE && this.maskStack.push(r),
        r.enabled)
            switch (r.type) {
            case fe.SCISSOR:
                this.renderer.scissor.push(r);
                break;
            case fe.STENCIL:
                this.renderer.stencil.push(r);
                break;
            case fe.SPRITE:
                r.copyCountersOrReset(null),
                this.pushSpriteMask(r);
                break;
            case fe.COLOR:
                this.pushColorMask(r);
                break
            }
        r.type === fe.SPRITE && this.maskStack.push(r)
    }
    pop(t) {
        const e = this.maskStack.pop();
        if (!(!e || e._target !== t)) {
            if (e.enabled)
                switch (e.type) {
                case fe.SCISSOR:
                    this.renderer.scissor.pop(e);
                    break;
                case fe.STENCIL:
                    this.renderer.stencil.pop(e.maskObject);
                    break;
                case fe.SPRITE:
                    this.popSpriteMask(e);
                    break;
                case fe.COLOR:
                    this.popColorMask(e);
                    break
                }
            if (e.reset(),
            e.pooled && this.maskDataPool.push(e),
            this.maskStack.length !== 0) {
                const r = this.maskStack[this.maskStack.length - 1];
                r.type === fe.SPRITE && r._filters && (r._filters[0].maskSprite = r.maskObject)
            }
        }
    }
    detect(t) {
        const e = t.maskObject;
        e ? e.isSprite ? t.type = fe.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = fe.SCISSOR : t.type = fe.STENCIL : t.type = fe.COLOR
    }
    pushSpriteMask(t) {
        const {maskObject: e} = t
          , r = t._target;
        let s = t._filters;
        s || (s = this.alphaMaskPool[this.alphaMaskIndex],
        s || (s = this.alphaMaskPool[this.alphaMaskIndex] = [new Mv])),
        s[0].resolution = t.resolution,
        s[0].multisample = t.multisample,
        s[0].maskSprite = e;
        const n = r.filterArea;
        r.filterArea = e.getBounds(!0),
        this.renderer.filter.push(r, s),
        r.filterArea = n,
        t._filters || this.alphaMaskIndex++
    }
    popSpriteMask(t) {
        this.renderer.filter.pop(),
        t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--,
        this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null)
    }
    pushColorMask(t) {
        const e = t._colorMask
          , r = t._colorMask = e & t.colorMask;
        r !== e && this.renderer.gl.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)
    }
    popColorMask(t) {
        const e = t._colorMask
          , r = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
        r !== e && this.renderer.gl.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)
    }
    destroy() {
        this.renderer = null
    }
}
Ad.extension = {
    type: et.RendererSystem,
    name: "mask"
};
ot.add(Ad);
class Sd {
    constructor(t) {
        this.renderer = t,
        this.maskStack = [],
        this.glConst = 0
    }
    getStackLength() {
        return this.maskStack.length
    }
    setMaskStack(t) {
        const {gl: e} = this.renderer
          , r = this.getStackLength();
        this.maskStack = t;
        const s = this.getStackLength();
        s !== r && (s === 0 ? e.disable(this.glConst) : (e.enable(this.glConst),
        this._useCurrent()))
    }
    _useCurrent() {}
    destroy() {
        this.renderer = null,
        this.maskStack = null
    }
}
const qu = new Wt
  , Ku = []
  , Cd = class Qn extends Sd {
    constructor(t) {
        super(t),
        this.glConst = nt.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST
    }
    getStackLength() {
        const t = this.maskStack[this.maskStack.length - 1];
        return t ? t._scissorCounter : 0
    }
    calcScissorRect(t) {
        if (t._scissorRectLocal)
            return;
        const e = t._scissorRect
          , {maskObject: r} = t
          , {renderer: s} = this
          , n = s.renderTexture
          , a = r.getBounds(!0, Ku.pop() ?? new At);
        this.roundFrameToPixels(a, n.current ? n.current.resolution : s.resolution, n.sourceFrame, n.destinationFrame, s.projection.transform),
        e && a.fit(e),
        t._scissorRectLocal = a
    }
    static isMatrixRotated(t) {
        if (!t)
            return !1;
        const {a: e, b: r, c: s, d: n} = t;
        return (Math.abs(r) > 1e-4 || Math.abs(s) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
    }
    testScissor(t) {
        const {maskObject: e} = t;
        if (!e.isFastRect || !e.isFastRect() || Qn.isMatrixRotated(e.worldTransform) || Qn.isMatrixRotated(this.renderer.projection.transform))
            return !1;
        this.calcScissorRect(t);
        const r = t._scissorRectLocal;
        return r.width > 0 && r.height > 0
    }
    roundFrameToPixels(t, e, r, s, n) {
        Qn.isMatrixRotated(n) || (n = n ? qu.copyFrom(n) : qu.identity(),
        n.translate(-r.x, -r.y).scale(s.width / r.width, s.height / r.height).translate(s.x, s.y),
        this.renderer.filter.transformAABB(n, t),
        t.fit(s),
        t.x = Math.round(t.x * e),
        t.y = Math.round(t.y * e),
        t.width = Math.round(t.width * e),
        t.height = Math.round(t.height * e))
    }
    push(t) {
        t._scissorRectLocal || this.calcScissorRect(t);
        const {gl: e} = this.renderer;
        t._scissorRect || e.enable(e.SCISSOR_TEST),
        t._scissorCounter++,
        t._scissorRect = t._scissorRectLocal,
        this._useCurrent()
    }
    pop(t) {
        const {gl: e} = this.renderer;
        t && Ku.push(t._scissorRectLocal),
        this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST)
    }
    _useCurrent() {
        const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
        let e;
        this.renderer.renderTexture.current ? e = t.y : e = this.renderer.height - t.height - t.y,
        this.renderer.gl.scissor(t.x, e, t.width, t.height)
    }
}
;
Cd.extension = {
    type: et.RendererSystem,
    name: "scissor"
};
let Bv = Cd;
ot.add(Bv);
class Id extends Sd {
    constructor(t) {
        super(t),
        this.glConst = nt.ADAPTER.getWebGLRenderingContext().STENCIL_TEST
    }
    getStackLength() {
        const t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0
    }
    push(t) {
        const e = t.maskObject
          , {gl: r} = this.renderer
          , s = t._stencilCounter;
        s === 0 && (this.renderer.framebuffer.forceStencil(),
        r.clearStencil(0),
        r.clear(r.STENCIL_BUFFER_BIT),
        r.enable(r.STENCIL_TEST)),
        t._stencilCounter++;
        const n = t._colorMask;
        n !== 0 && (t._colorMask = 0,
        r.colorMask(!1, !1, !1, !1)),
        r.stencilFunc(r.EQUAL, s, 4294967295),
        r.stencilOp(r.KEEP, r.KEEP, r.INCR),
        e.renderable = !0,
        e.render(this.renderer),
        this.renderer.batch.flush(),
        e.renderable = !1,
        n !== 0 && (t._colorMask = n,
        r.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)),
        this._useCurrent()
    }
    pop(t) {
        const e = this.renderer.gl;
        if (this.getStackLength() === 0)
            e.disable(e.STENCIL_TEST);
        else {
            const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null
              , s = r ? r._colorMask : 15;
            s !== 0 && (r._colorMask = 0,
            e.colorMask(!1, !1, !1, !1)),
            e.stencilOp(e.KEEP, e.KEEP, e.DECR),
            t.renderable = !0,
            t.render(this.renderer),
            this.renderer.batch.flush(),
            t.renderable = !1,
            s !== 0 && (r._colorMask = s,
            e.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)),
            this._useCurrent()
        }
    }
    _useCurrent() {
        const t = this.renderer.gl;
        t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
    }
}
Id.extension = {
    type: et.RendererSystem,
    name: "stencil"
};
ot.add(Id);
class Rd {
    constructor(t) {
        this.renderer = t,
        this.plugins = {},
        Object.defineProperties(this.plugins, {
            extract: {
                enumerable: !1,
                get() {
                    return vt("7.0.0", "renderer.plugins.extract has moved to renderer.extract"),
                    t.extract
                }
            },
            prepare: {
                enumerable: !1,
                get() {
                    return vt("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"),
                    t.prepare
                }
            },
            interaction: {
                enumerable: !1,
                get() {
                    return vt("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"),
                    t.events
                }
            }
        })
    }
    init() {
        const t = this.rendererPlugins;
        for (const e in t)
            this.plugins[e] = new t[e](this.renderer)
    }
    destroy() {
        for (const t in this.plugins)
            this.plugins[t].destroy(),
            this.plugins[t] = null
    }
}
Rd.extension = {
    type: [et.RendererSystem, et.CanvasRendererSystem],
    name: "_plugin"
};
ot.add(Rd);
class Pd {
    constructor(t) {
        this.renderer = t,
        this.destinationFrame = null,
        this.sourceFrame = null,
        this.defaultFrame = null,
        this.projectionMatrix = new Wt,
        this.transform = null
    }
    update(t, e, r, s) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame,
        this.sourceFrame = e || this.sourceFrame || t,
        this.calculateProjection(this.destinationFrame, this.sourceFrame, r, s),
        this.transform && this.projectionMatrix.append(this.transform);
        const n = this.renderer;
        n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix,
        n.globalUniforms.update(),
        n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
    }
    calculateProjection(t, e, r, s) {
        const n = this.projectionMatrix
          , a = s ? -1 : 1;
        n.identity(),
        n.a = 1 / e.width * 2,
        n.d = a * (1 / e.height * 2),
        n.tx = -1 - e.x * n.a,
        n.ty = -a - e.y * n.d
    }
    setTransform(t) {}
    destroy() {
        this.renderer = null
    }
}
Pd.extension = {
    type: et.RendererSystem,
    name: "projection"
};
ot.add(Pd);
const Fv = new Fa
  , Zu = new At;
class Md {
    constructor(t) {
        this.renderer = t,
        this._tempMatrix = new Wt
    }
    generateTexture(t, e) {
        const {region: r, ...s} = e || {}
          , n = (r == null ? void 0 : r.copyTo(Zu)) || t.getLocalBounds(Zu, !0)
          , a = s.resolution || this.renderer.resolution;
        n.width = Math.max(n.width, 1 / a),
        n.height = Math.max(n.height, 1 / a),
        s.width = n.width,
        s.height = n.height,
        s.resolution = a,
        s.multisample ?? (s.multisample = this.renderer.multisample);
        const o = Or.create(s);
        this._tempMatrix.tx = -n.x,
        this._tempMatrix.ty = -n.y;
        const l = t.transform;
        return t.transform = Fv,
        this.renderer.render(t, {
            renderTexture: o,
            transform: this._tempMatrix,
            skipUpdateTransform: !!t.parent,
            blit: !0
        }),
        t.transform = l,
        o
    }
    destroy() {}
}
Md.extension = {
    type: [et.RendererSystem, et.CanvasRendererSystem],
    name: "textureGenerator"
};
ot.add(Md);
const vi = new At
  , Ns = new At;
class Dd {
    constructor(t) {
        this.renderer = t,
        this.defaultMaskStack = [],
        this.current = null,
        this.sourceFrame = new At,
        this.destinationFrame = new At,
        this.viewportFrame = new At
    }
    contextChange() {
        var e;
        const t = (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
        this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha)
    }
    bind(t=null, e, r) {
        const s = this.renderer;
        this.current = t;
        let n, a, o;
        t ? (n = t.baseTexture,
        o = n.resolution,
        e || (vi.width = t.frame.width,
        vi.height = t.frame.height,
        e = vi),
        r || (Ns.x = t.frame.x,
        Ns.y = t.frame.y,
        Ns.width = e.width,
        Ns.height = e.height,
        r = Ns),
        a = n.framebuffer) : (o = s.resolution,
        e || (vi.width = s._view.screen.width,
        vi.height = s._view.screen.height,
        e = vi),
        r || (r = vi,
        r.width = e.width,
        r.height = e.height));
        const l = this.viewportFrame;
        l.x = r.x * o,
        l.y = r.y * o,
        l.width = r.width * o,
        l.height = r.height * o,
        t || (l.y = s.view.height - (l.y + l.height)),
        l.ceil(),
        this.renderer.framebuffer.bind(a, l),
        this.renderer.projection.update(r, e, o, !a),
        t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack),
        this.sourceFrame.copyFrom(e),
        this.destinationFrame.copyFrom(r)
    }
    clear(t, e) {
        const r = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor
          , s = Pt.shared.setValue(t || r);
        (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && s.premultiply(s.alpha);
        const n = this.destinationFrame
          , a = this.current ? this.current.baseTexture : this.renderer._view.screen
          , o = n.width !== a.width || n.height !== a.height;
        if (o) {
            let {x: l, y: c, width: p, height: m} = this.viewportFrame;
            l = Math.round(l),
            c = Math.round(c),
            p = Math.round(p),
            m = Math.round(m),
            this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
            this.renderer.gl.scissor(l, c, p, m)
        }
        this.renderer.framebuffer.clear(s.red, s.green, s.blue, s.alpha, e),
        o && this.renderer.scissor.pop()
    }
    resize() {
        this.bind(null)
    }
    reset() {
        this.bind(null)
    }
    destroy() {
        this.renderer = null
    }
}
Dd.extension = {
    type: et.RendererSystem,
    name: "renderTexture"
};
ot.add(Dd);
class Ov {
    constructor(t, e) {
        this.program = t,
        this.uniformData = e,
        this.uniformGroups = {},
        this.uniformDirtyGroups = {},
        this.uniformBufferBindings = {}
    }
    destroy() {
        this.uniformData = null,
        this.uniformGroups = null,
        this.uniformDirtyGroups = null,
        this.uniformBufferBindings = null,
        this.program = null
    }
}
function Nv(i, t) {
    const e = {}
      , r = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES);
    for (let s = 0; s < r; s++) {
        const n = t.getActiveAttrib(i, s);
        if (n.name.startsWith("gl_"))
            continue;
        const a = yd(t, n.type)
          , o = {
            type: a,
            name: n.name,
            size: md(a),
            location: t.getAttribLocation(i, n.name)
        };
        e[n.name] = o
    }
    return e
}
function Lv(i, t) {
    const e = {}
      , r = t.getProgramParameter(i, t.ACTIVE_UNIFORMS);
    for (let s = 0; s < r; s++) {
        const n = t.getActiveUniform(i, s)
          , a = n.name.replace(/\[.*?\]$/, "")
          , o = !!n.name.match(/\[.*?\]$/)
          , l = yd(t, n.type);
        e[a] = {
            name: a,
            index: s,
            type: l,
            size: n.size,
            isArray: o,
            value: pd(l, n.size)
        }
    }
    return e
}
function kv(i, t) {
    var o;
    const e = Vu(i, i.VERTEX_SHADER, t.vertexSrc)
      , r = Vu(i, i.FRAGMENT_SHADER, t.fragmentSrc)
      , s = i.createProgram();
    i.attachShader(s, e),
    i.attachShader(s, r);
    const n = (o = t.extra) == null ? void 0 : o.transformFeedbackVaryings;
    if (n && (typeof i.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : i.transformFeedbackVaryings(s, n.names, n.bufferMode === "separate" ? i.SEPARATE_ATTRIBS : i.INTERLEAVED_ATTRIBS)),
    i.linkProgram(s),
    i.getProgramParameter(s, i.LINK_STATUS) || fv(i, s, e, r),
    t.attributeData = Nv(s, i),
    t.uniformData = Lv(s, i),
    !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
        const l = Object.keys(t.attributeData);
        l.sort( (c, p) => c > p ? 1 : -1);
        for (let c = 0; c < l.length; c++)
            t.attributeData[l[c]].location = c,
            i.bindAttribLocation(s, c, l[c]);
        i.linkProgram(s)
    }
    i.deleteShader(e),
    i.deleteShader(r);
    const a = {};
    for (const l in t.uniformData) {
        const c = t.uniformData[l];
        a[l] = {
            location: i.getUniformLocation(s, l),
            value: pd(c.type, c.size)
        }
    }
    return new Ov(s,a)
}
function Uv(i, t, e, r, s) {
    e.buffer.update(s)
}
const Gv = {
    float: `
        data[offset] = v;
    `,
    vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
    vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
    vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
    mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
    mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
    mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
}
  , Bd = {
    float: 4,
    vec2: 8,
    vec3: 12,
    vec4: 16,
    int: 4,
    ivec2: 8,
    ivec3: 12,
    ivec4: 16,
    uint: 4,
    uvec2: 8,
    uvec3: 12,
    uvec4: 16,
    bool: 4,
    bvec2: 8,
    bvec3: 12,
    bvec4: 16,
    mat2: 16 * 2,
    mat3: 16 * 3,
    mat4: 16 * 4
};
function Hv(i) {
    const t = i.map(n => ({
        data: n,
        offset: 0,
        dataLen: 0,
        dirty: 0
    }));
    let e = 0
      , r = 0
      , s = 0;
    for (let n = 0; n < t.length; n++) {
        const a = t[n];
        if (e = Bd[a.data.type],
        a.data.size > 1 && (e = Math.max(e, 16) * a.data.size),
        a.dataLen = e,
        r % e !== 0 && r < 16) {
            const o = r % e % 16;
            r += o,
            s += o
        }
        r + e > 16 ? (s = Math.ceil(s / 16) * 16,
        a.offset = s,
        s += e,
        r = e) : (a.offset = s,
        r += e,
        s += e)
    }
    return s = Math.ceil(s / 16) * 16,
    {
        uboElements: t,
        size: s
    }
}
function Vv(i, t) {
    const e = [];
    for (const r in i)
        t[r] && e.push(t[r]);
    return e.sort( (r, s) => r.index - s.index),
    e
}
function $v(i, t) {
    if (!i.autoManage)
        return {
            size: 0,
            syncFunc: Uv
        };
    const e = Vv(i.uniforms, t)
      , {uboElements: r, size: s} = Hv(e)
      , n = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
    for (let a = 0; a < r.length; a++) {
        const o = r[a]
          , l = i.uniforms[o.data.name]
          , c = o.data.name;
        let p = !1;
        for (let m = 0; m < ls.length; m++) {
            const f = ls[m];
            if (f.codeUbo && f.test(o.data, l)) {
                n.push(`offset = ${o.offset / 4};`, ls[m].codeUbo(o.data.name, l)),
                p = !0;
                break
            }
        }
        if (!p)
            if (o.data.size > 1) {
                const m = md(o.data.type)
                  , f = Math.max(Bd[o.data.type] / 16, 1)
                  , v = m / f
                  , _ = (4 - v % 4) % 4;
                n.push(`
                cv = ud.${c}.value;
                v = uv.${c};
                offset = ${o.offset / 4};

                t = 0;

                for(var i=0; i < ${o.data.size * f}; i++)
                {
                    for(var j = 0; j < ${v}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${_};
                }

                `)
            } else {
                const m = Gv[o.data.type];
                n.push(`
                cv = ud.${c}.value;
                v = uv.${c};
                offset = ${o.offset / 4};
                ${m};
                `)
            }
    }
    return n.push(`
       renderer.buffer.update(buffer);
    `),
    {
        size: s,
        syncFunc: new Function("ud","uv","renderer","syncData","buffer",n.join(`
`))
    }
}
let jv = 0;
const Nn = {
    textureCount: 0,
    uboCount: 0
};
class Fd {
    constructor(t) {
        this.destroyed = !1,
        this.renderer = t,
        this.systemCheck(),
        this.gl = null,
        this.shader = null,
        this.program = null,
        this.cache = {},
        this._uboCache = {},
        this.id = jv++
    }
    systemCheck() {
        if (!gv())
            throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
    }
    contextChange(t) {
        this.gl = t,
        this.reset()
    }
    bind(t, e) {
        t.disposeRunner.add(this),
        t.uniforms.globals = this.renderer.globalUniforms;
        const r = t.program
          , s = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
        return this.shader = t,
        this.program !== r && (this.program = r,
        this.gl.useProgram(s.program)),
        e || (Nn.textureCount = 0,
        Nn.uboCount = 0,
        this.syncUniformGroup(t.uniformGroup, Nn)),
        s
    }
    setUniforms(t) {
        const e = this.shader.program
          , r = e.glPrograms[this.renderer.CONTEXT_UID];
        e.syncUniforms(r.uniformData, t, this.renderer)
    }
    syncUniformGroup(t, e) {
        const r = this.getGlProgram();
        (!t.static || t.dirtyId !== r.uniformDirtyGroups[t.id]) && (r.uniformDirtyGroups[t.id] = t.dirtyId,
        this.syncUniforms(t, r, e))
    }
    syncUniforms(t, e, r) {
        (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, r)
    }
    createSyncGroups(t) {
        const e = this.getSignature(t, this.shader.program.uniformData, "u");
        return this.cache[e] || (this.cache[e] = uv(t, this.shader.program.uniformData)),
        t.syncUniforms[this.shader.program.id] = this.cache[e],
        t.syncUniforms[this.shader.program.id]
    }
    syncUniformBufferGroup(t, e) {
        const r = this.getGlProgram();
        if (!t.static || t.dirtyId !== 0 || !r.uniformGroups[t.id]) {
            t.dirtyId = 0;
            const s = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
            t.buffer.update(),
            s(r.uniformData, t.uniforms, this.renderer, Nn, t.buffer)
        }
        this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e])
    }
    createSyncBufferGroup(t, e, r) {
        const {gl: s} = this.renderer;
        this.renderer.buffer.bind(t.buffer);
        const n = this.gl.getUniformBlockIndex(e.program, r);
        e.uniformBufferBindings[r] = this.shader.uniformBindCount,
        s.uniformBlockBinding(e.program, n, this.shader.uniformBindCount),
        this.shader.uniformBindCount++;
        const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
        let o = this._uboCache[a];
        if (o || (o = this._uboCache[a] = $v(t, this.shader.program.uniformData)),
        t.autoManage) {
            const l = new Float32Array(o.size / 4);
            t.buffer.update(l)
        }
        return e.uniformGroups[t.id] = o.syncFunc,
        e.uniformGroups[t.id]
    }
    getSignature(t, e, r) {
        const s = t.uniforms
          , n = [`${r}-`];
        for (const a in s)
            n.push(a),
            e[a] && n.push(e[a].type);
        return n.join("-")
    }
    getGlProgram() {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
    }
    generateProgram(t) {
        const e = this.gl
          , r = t.program
          , s = kv(e, r);
        return r.glPrograms[this.renderer.CONTEXT_UID] = s,
        s
    }
    reset() {
        this.program = null,
        this.shader = null
    }
    disposeShader(t) {
        this.shader === t && (this.shader = null)
    }
    destroy() {
        this.renderer = null,
        this.destroyed = !0
    }
}
Fd.extension = {
    type: et.RendererSystem,
    name: "shader"
};
ot.add(Fd);
class ga {
    constructor(t) {
        this.renderer = t
    }
    run(t) {
        const {renderer: e} = this;
        e.runners.init.emit(e.options),
        t.hello && console.log(`PixiJS 7.4.2 - ${e.rendererLogId} - https://pixijs.com`),
        e.resize(e.screen.width, e.screen.height)
    }
    destroy() {}
}
ga.defaultOptions = {
    hello: !1
},
ga.extension = {
    type: [et.RendererSystem, et.CanvasRendererSystem],
    name: "startup"
};
ot.add(ga);
function Wv(i, t=[]) {
    return t[Y.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.ADD] = [i.ONE, i.ONE],
    t[Y.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.SCREEN] = [i.ONE, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.NONE] = [0, 0],
    t[Y.NORMAL_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE],
    t[Y.SCREEN_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[Y.SRC_IN] = [i.DST_ALPHA, i.ZERO],
    t[Y.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO],
    t[Y.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA],
    t[Y.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE],
    t[Y.DST_IN] = [i.ZERO, i.SRC_ALPHA],
    t[Y.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA],
    t[Y.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA],
    t[Y.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA],
    t[Y.SUBTRACT] = [i.ONE, i.ONE, i.ONE, i.ONE, i.FUNC_REVERSE_SUBTRACT, i.FUNC_ADD],
    t
}
const Xv = 0
  , zv = 1
  , Yv = 2
  , qv = 3
  , Kv = 4
  , Zv = 5
  , Od = class Ih {
    constructor() {
        this.gl = null,
        this.stateId = 0,
        this.polygonOffset = 0,
        this.blendMode = Y.NONE,
        this._blendEq = !1,
        this.map = [],
        this.map[Xv] = this.setBlend,
        this.map[zv] = this.setOffset,
        this.map[Yv] = this.setCullFace,
        this.map[qv] = this.setDepthTest,
        this.map[Kv] = this.setFrontFace,
        this.map[Zv] = this.setDepthMask,
        this.checks = [],
        this.defaultState = new Nr,
        this.defaultState.blend = !0
    }
    contextChange(t) {
        this.gl = t,
        this.blendModes = Wv(t),
        this.set(this.defaultState),
        this.reset()
    }
    set(t) {
        if (t = t || this.defaultState,
        this.stateId !== t.data) {
            let e = this.stateId ^ t.data
              , r = 0;
            for (; e; )
                e & 1 && this.map[r].call(this, !!(t.data & 1 << r)),
                e = e >> 1,
                r++;
            this.stateId = t.data
        }
        for (let e = 0; e < this.checks.length; e++)
            this.checks[e](this, t)
    }
    forceState(t) {
        t = t || this.defaultState;
        for (let e = 0; e < this.map.length; e++)
            this.map[e].call(this, !!(t.data & 1 << e));
        for (let e = 0; e < this.checks.length; e++)
            this.checks[e](this, t);
        this.stateId = t.data
    }
    setBlend(t) {
        this.updateCheck(Ih.checkBlendMode, t),
        this.gl[t ? "enable" : "disable"](this.gl.BLEND)
    }
    setOffset(t) {
        this.updateCheck(Ih.checkPolygonOffset, t),
        this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
    }
    setDepthTest(t) {
        this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
    }
    setDepthMask(t) {
        this.gl.depthMask(t)
    }
    setCullFace(t) {
        this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
    }
    setFrontFace(t) {
        this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
    }
    setBlendMode(t) {
        if (t === this.blendMode)
            return;
        this.blendMode = t;
        const e = this.blendModes[t]
          , r = this.gl;
        e.length === 2 ? r.blendFunc(e[0], e[1]) : r.blendFuncSeparate(e[0], e[1], e[2], e[3]),
        e.length === 6 ? (this._blendEq = !0,
        r.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1,
        r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD))
    }
    setPolygonOffset(t, e) {
        this.gl.polygonOffset(t, e)
    }
    reset() {
        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1),
        this.forceState(this.defaultState),
        this._blendEq = !0,
        this.blendMode = -1,
        this.setBlendMode(0)
    }
    updateCheck(t, e) {
        const r = this.checks.indexOf(t);
        e && r === -1 ? this.checks.push(t) : !e && r !== -1 && this.checks.splice(r, 1)
    }
    static checkBlendMode(t, e) {
        t.setBlendMode(e.blendMode)
    }
    static checkPolygonOffset(t, e) {
        t.setPolygonOffset(1, e.polygonOffset)
    }
    destroy() {
        this.gl = null
    }
}
;
Od.extension = {
    type: et.RendererSystem,
    name: "state"
};
let Qv = Od;
ot.add(Qv);
class Nd extends vs {
    constructor() {
        super(...arguments),
        this.runners = {},
        this._systemsHash = {}
    }
    setup(t) {
        this.addRunners(...t.runners);
        const e = (t.priority ?? []).filter(s => t.systems[s])
          , r = [...e, ...Object.keys(t.systems).filter(s => !e.includes(s))];
        for (const s of r)
            this.addSystem(t.systems[s], s)
    }
    addRunners(...t) {
        t.forEach(e => {
            this.runners[e] = new ur(e)
        }
        )
    }
    addSystem(t, e) {
        const r = new t(this);
        if (this[e])
            throw new Error(`Whoops! The name "${e}" is already in use`);
        this[e] = r,
        this._systemsHash[e] = r;
        for (const s in this.runners)
            this.runners[s].add(r);
        return this
    }
    emitWithCustomOptions(t, e) {
        const r = Object.keys(this._systemsHash);
        t.items.forEach(s => {
            const n = r.find(a => this._systemsHash[a] === s);
            s[t.name](e[n])
        }
        )
    }
    destroy() {
        Object.values(this.runners).forEach(t => {
            t.destroy()
        }
        ),
        this._systemsHash = {}
    }
}
const js = class Jn {
    constructor(t) {
        this.renderer = t,
        this.count = 0,
        this.checkCount = 0,
        this.maxIdle = Jn.defaultMaxIdle,
        this.checkCountMax = Jn.defaultCheckCountMax,
        this.mode = Jn.defaultMode
    }
    postrender() {
        this.renderer.objectRenderer.renderingToScreen && (this.count++,
        this.mode !== Zh.MANUAL && (this.checkCount++,
        this.checkCount > this.checkCountMax && (this.checkCount = 0,
        this.run())))
    }
    run() {
        const t = this.renderer.texture
          , e = t.managedTextures;
        let r = !1;
        for (let s = 0; s < e.length; s++) {
            const n = e[s];
            n.resource && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0),
            e[s] = null,
            r = !0)
        }
        if (r) {
            let s = 0;
            for (let n = 0; n < e.length; n++)
                e[n] !== null && (e[s++] = e[n]);
            e.length = s
        }
    }
    unload(t) {
        const e = this.renderer.texture
          , r = t._texture;
        r && !r.framebuffer && e.destroyTexture(r);
        for (let s = t.children.length - 1; s >= 0; s--)
            this.unload(t.children[s])
    }
    destroy() {
        this.renderer = null
    }
}
;
js.defaultMode = Zh.AUTO,
js.defaultMaxIdle = 60 * 60,
js.defaultCheckCountMax = 60 * 10,
js.extension = {
    type: et.RendererSystem,
    name: "textureGC"
};
let Ai = js;
ot.add(Ai);
class No {
    constructor(t) {
        this.texture = t,
        this.width = -1,
        this.height = -1,
        this.dirtyId = -1,
        this.dirtyStyleId = -1,
        this.mipmap = !1,
        this.wrapMode = 33071,
        this.type = mt.UNSIGNED_BYTE,
        this.internalFormat = Z.RGBA,
        this.samplerType = 0
    }
}
function Jv(i) {
    let t;
    return "WebGL2RenderingContext"in globalThis && i instanceof globalThis.WebGL2RenderingContext ? t = {
        [i.RGB]: ct.FLOAT,
        [i.RGBA]: ct.FLOAT,
        [i.ALPHA]: ct.FLOAT,
        [i.LUMINANCE]: ct.FLOAT,
        [i.LUMINANCE_ALPHA]: ct.FLOAT,
        [i.R8]: ct.FLOAT,
        [i.R8_SNORM]: ct.FLOAT,
        [i.RG8]: ct.FLOAT,
        [i.RG8_SNORM]: ct.FLOAT,
        [i.RGB8]: ct.FLOAT,
        [i.RGB8_SNORM]: ct.FLOAT,
        [i.RGB565]: ct.FLOAT,
        [i.RGBA4]: ct.FLOAT,
        [i.RGB5_A1]: ct.FLOAT,
        [i.RGBA8]: ct.FLOAT,
        [i.RGBA8_SNORM]: ct.FLOAT,
        [i.RGB10_A2]: ct.FLOAT,
        [i.RGB10_A2UI]: ct.FLOAT,
        [i.SRGB8]: ct.FLOAT,
        [i.SRGB8_ALPHA8]: ct.FLOAT,
        [i.R16F]: ct.FLOAT,
        [i.RG16F]: ct.FLOAT,
        [i.RGB16F]: ct.FLOAT,
        [i.RGBA16F]: ct.FLOAT,
        [i.R32F]: ct.FLOAT,
        [i.RG32F]: ct.FLOAT,
        [i.RGB32F]: ct.FLOAT,
        [i.RGBA32F]: ct.FLOAT,
        [i.R11F_G11F_B10F]: ct.FLOAT,
        [i.RGB9_E5]: ct.FLOAT,
        [i.R8I]: ct.INT,
        [i.R8UI]: ct.UINT,
        [i.R16I]: ct.INT,
        [i.R16UI]: ct.UINT,
        [i.R32I]: ct.INT,
        [i.R32UI]: ct.UINT,
        [i.RG8I]: ct.INT,
        [i.RG8UI]: ct.UINT,
        [i.RG16I]: ct.INT,
        [i.RG16UI]: ct.UINT,
        [i.RG32I]: ct.INT,
        [i.RG32UI]: ct.UINT,
        [i.RGB8I]: ct.INT,
        [i.RGB8UI]: ct.UINT,
        [i.RGB16I]: ct.INT,
        [i.RGB16UI]: ct.UINT,
        [i.RGB32I]: ct.INT,
        [i.RGB32UI]: ct.UINT,
        [i.RGBA8I]: ct.INT,
        [i.RGBA8UI]: ct.UINT,
        [i.RGBA16I]: ct.INT,
        [i.RGBA16UI]: ct.UINT,
        [i.RGBA32I]: ct.INT,
        [i.RGBA32UI]: ct.UINT,
        [i.DEPTH_COMPONENT16]: ct.FLOAT,
        [i.DEPTH_COMPONENT24]: ct.FLOAT,
        [i.DEPTH_COMPONENT32F]: ct.FLOAT,
        [i.DEPTH_STENCIL]: ct.FLOAT,
        [i.DEPTH24_STENCIL8]: ct.FLOAT,
        [i.DEPTH32F_STENCIL8]: ct.FLOAT
    } : t = {
        [i.RGB]: ct.FLOAT,
        [i.RGBA]: ct.FLOAT,
        [i.ALPHA]: ct.FLOAT,
        [i.LUMINANCE]: ct.FLOAT,
        [i.LUMINANCE_ALPHA]: ct.FLOAT,
        [i.DEPTH_STENCIL]: ct.FLOAT
    },
    t
}
function t0(i) {
    let t;
    return "WebGL2RenderingContext"in globalThis && i instanceof globalThis.WebGL2RenderingContext ? t = {
        [mt.UNSIGNED_BYTE]: {
            [Z.RGBA]: i.RGBA8,
            [Z.RGB]: i.RGB8,
            [Z.RG]: i.RG8,
            [Z.RED]: i.R8,
            [Z.RGBA_INTEGER]: i.RGBA8UI,
            [Z.RGB_INTEGER]: i.RGB8UI,
            [Z.RG_INTEGER]: i.RG8UI,
            [Z.RED_INTEGER]: i.R8UI,
            [Z.ALPHA]: i.ALPHA,
            [Z.LUMINANCE]: i.LUMINANCE,
            [Z.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
        },
        [mt.BYTE]: {
            [Z.RGBA]: i.RGBA8_SNORM,
            [Z.RGB]: i.RGB8_SNORM,
            [Z.RG]: i.RG8_SNORM,
            [Z.RED]: i.R8_SNORM,
            [Z.RGBA_INTEGER]: i.RGBA8I,
            [Z.RGB_INTEGER]: i.RGB8I,
            [Z.RG_INTEGER]: i.RG8I,
            [Z.RED_INTEGER]: i.R8I
        },
        [mt.UNSIGNED_SHORT]: {
            [Z.RGBA_INTEGER]: i.RGBA16UI,
            [Z.RGB_INTEGER]: i.RGB16UI,
            [Z.RG_INTEGER]: i.RG16UI,
            [Z.RED_INTEGER]: i.R16UI,
            [Z.DEPTH_COMPONENT]: i.DEPTH_COMPONENT16
        },
        [mt.SHORT]: {
            [Z.RGBA_INTEGER]: i.RGBA16I,
            [Z.RGB_INTEGER]: i.RGB16I,
            [Z.RG_INTEGER]: i.RG16I,
            [Z.RED_INTEGER]: i.R16I
        },
        [mt.UNSIGNED_INT]: {
            [Z.RGBA_INTEGER]: i.RGBA32UI,
            [Z.RGB_INTEGER]: i.RGB32UI,
            [Z.RG_INTEGER]: i.RG32UI,
            [Z.RED_INTEGER]: i.R32UI,
            [Z.DEPTH_COMPONENT]: i.DEPTH_COMPONENT24
        },
        [mt.INT]: {
            [Z.RGBA_INTEGER]: i.RGBA32I,
            [Z.RGB_INTEGER]: i.RGB32I,
            [Z.RG_INTEGER]: i.RG32I,
            [Z.RED_INTEGER]: i.R32I
        },
        [mt.FLOAT]: {
            [Z.RGBA]: i.RGBA32F,
            [Z.RGB]: i.RGB32F,
            [Z.RG]: i.RG32F,
            [Z.RED]: i.R32F,
            [Z.DEPTH_COMPONENT]: i.DEPTH_COMPONENT32F
        },
        [mt.HALF_FLOAT]: {
            [Z.RGBA]: i.RGBA16F,
            [Z.RGB]: i.RGB16F,
            [Z.RG]: i.RG16F,
            [Z.RED]: i.R16F
        },
        [mt.UNSIGNED_SHORT_5_6_5]: {
            [Z.RGB]: i.RGB565
        },
        [mt.UNSIGNED_SHORT_4_4_4_4]: {
            [Z.RGBA]: i.RGBA4
        },
        [mt.UNSIGNED_SHORT_5_5_5_1]: {
            [Z.RGBA]: i.RGB5_A1
        },
        [mt.UNSIGNED_INT_2_10_10_10_REV]: {
            [Z.RGBA]: i.RGB10_A2,
            [Z.RGBA_INTEGER]: i.RGB10_A2UI
        },
        [mt.UNSIGNED_INT_10F_11F_11F_REV]: {
            [Z.RGB]: i.R11F_G11F_B10F
        },
        [mt.UNSIGNED_INT_5_9_9_9_REV]: {
            [Z.RGB]: i.RGB9_E5
        },
        [mt.UNSIGNED_INT_24_8]: {
            [Z.DEPTH_STENCIL]: i.DEPTH24_STENCIL8
        },
        [mt.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
            [Z.DEPTH_STENCIL]: i.DEPTH32F_STENCIL8
        }
    } : t = {
        [mt.UNSIGNED_BYTE]: {
            [Z.RGBA]: i.RGBA,
            [Z.RGB]: i.RGB,
            [Z.ALPHA]: i.ALPHA,
            [Z.LUMINANCE]: i.LUMINANCE,
            [Z.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
        },
        [mt.UNSIGNED_SHORT_5_6_5]: {
            [Z.RGB]: i.RGB
        },
        [mt.UNSIGNED_SHORT_4_4_4_4]: {
            [Z.RGBA]: i.RGBA
        },
        [mt.UNSIGNED_SHORT_5_5_5_1]: {
            [Z.RGBA]: i.RGBA
        }
    },
    t
}
class Ld {
    constructor(t) {
        this.renderer = t,
        this.boundTextures = [],
        this.currentLocation = -1,
        this.managedTextures = [],
        this._unknownBoundTextures = !1,
        this.unknownTexture = new Tt,
        this.hasIntegerTextures = !1
    }
    contextChange() {
        const t = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID,
        this.webGLVersion = this.renderer.context.webGLVersion,
        this.internalFormats = t0(t),
        this.samplerTypes = Jv(t);
        const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = e;
        for (let s = 0; s < e; s++)
            this.boundTextures[s] = null;
        this.emptyTextures = {};
        const r = new No(t.createTexture());
        t.bindTexture(t.TEXTURE_2D, r.texture),
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)),
        this.emptyTextures[t.TEXTURE_2D] = r,
        this.emptyTextures[t.TEXTURE_CUBE_MAP] = new No(t.createTexture()),
        t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
        for (let s = 0; s < 6; s++)
            t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
        for (let s = 0; s < this.boundTextures.length; s++)
            this.bind(null, s)
    }
    bind(t, e=0) {
        const {gl: r} = this;
        if (t = t == null ? void 0 : t.castToBaseTexture(),
        (t == null ? void 0 : t.valid) && !t.parentTextureArray) {
            t.touched = this.renderer.textureGC.count;
            const s = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
            this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e,
            r.activeTexture(r.TEXTURE0 + e)),
            r.bindTexture(t.target, s.texture)),
            s.dirtyId !== t.dirtyId ? (this.currentLocation !== e && (this.currentLocation = e,
            r.activeTexture(r.TEXTURE0 + e)),
            this.updateTexture(t)) : s.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
            this.boundTextures[e] = t
        } else
            this.currentLocation !== e && (this.currentLocation = e,
            r.activeTexture(r.TEXTURE0 + e)),
            r.bindTexture(r.TEXTURE_2D, this.emptyTextures[r.TEXTURE_2D].texture),
            this.boundTextures[e] = null
    }
    reset() {
        this._unknownBoundTextures = !0,
        this.hasIntegerTextures = !1,
        this.currentLocation = -1;
        for (let t = 0; t < this.boundTextures.length; t++)
            this.boundTextures[t] = this.unknownTexture
    }
    unbind(t) {
        const {gl: e, boundTextures: r} = this;
        if (this._unknownBoundTextures) {
            this._unknownBoundTextures = !1;
            for (let s = 0; s < r.length; s++)
                r[s] === this.unknownTexture && this.bind(null, s)
        }
        for (let s = 0; s < r.length; s++)
            r[s] === t && (this.currentLocation !== s && (e.activeTexture(e.TEXTURE0 + s),
            this.currentLocation = s),
            e.bindTexture(t.target, this.emptyTextures[t.target].texture),
            r[s] = null)
    }
    ensureSamplerType(t) {
        const {boundTextures: e, hasIntegerTextures: r, CONTEXT_UID: s} = this;
        if (r)
            for (let n = t - 1; n >= 0; --n) {
                const a = e[n];
                a && a._glTextures[s].samplerType !== ct.FLOAT && this.renderer.texture.unbind(a)
            }
    }
    initTexture(t) {
        const e = new No(this.gl.createTexture());
        return e.dirtyId = -1,
        t._glTextures[this.CONTEXT_UID] = e,
        this.managedTextures.push(t),
        t.on("dispose", this.destroyTexture, this),
        e
    }
    initTextureType(t, e) {
        var r;
        e.internalFormat = ((r = this.internalFormats[t.type]) == null ? void 0 : r[t.format]) ?? t.format,
        e.samplerType = this.samplerTypes[e.internalFormat] ?? ct.FLOAT,
        this.webGLVersion === 2 && t.type === mt.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type
    }
    updateTexture(t) {
        var s;
        const e = t._glTextures[this.CONTEXT_UID];
        if (!e)
            return;
        const r = this.renderer;
        if (this.initTextureType(t, e),
        (s = t.resource) == null ? void 0 : s.upload(r, t, e))
            e.samplerType !== ct.FLOAT && (this.hasIntegerTextures = !0);
        else {
            const n = t.realWidth
              , a = t.realHeight
              , o = r.gl;
            (e.width !== n || e.height !== a || e.dirtyId < 0) && (e.width = n,
            e.height = a,
            o.texImage2D(t.target, 0, e.internalFormat, n, a, 0, t.format, e.type, null))
        }
        t.dirtyStyleId !== e.dirtyStyleId && this.updateTextureStyle(t),
        e.dirtyId = t.dirtyId
    }
    destroyTexture(t, e) {
        const {gl: r} = this;
        if (t = t.castToBaseTexture(),
        t._glTextures[this.CONTEXT_UID] && (this.unbind(t),
        r.deleteTexture(t._glTextures[this.CONTEXT_UID].texture),
        t.off("dispose", this.destroyTexture, this),
        delete t._glTextures[this.CONTEXT_UID],
        !e)) {
            const s = this.managedTextures.indexOf(t);
            s !== -1 && Pi(this.managedTextures, s, 1)
        }
    }
    updateTextureStyle(t) {
        var r;
        const e = t._glTextures[this.CONTEXT_UID];
        e && ((t.mipmap === Br.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? e.mipmap = !1 : e.mipmap = t.mipmap >= 1,
        this.webGLVersion !== 2 && !t.isPowerOfTwo ? e.wrapMode = Yr.CLAMP : e.wrapMode = t.wrapMode,
        (r = t.resource) != null && r.style(this.renderer, t, e) || this.setStyle(t, e),
        e.dirtyStyleId = t.dirtyStyleId)
    }
    setStyle(t, e) {
        const r = this.gl;
        if (e.mipmap && t.mipmap !== Br.ON_MANUAL && r.generateMipmap(t.target),
        r.texParameteri(t.target, r.TEXTURE_WRAP_S, e.wrapMode),
        r.texParameteri(t.target, r.TEXTURE_WRAP_T, e.wrapMode),
        e.mipmap) {
            r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR_MIPMAP_LINEAR : r.NEAREST_MIPMAP_NEAREST);
            const s = this.renderer.context.extensions.anisotropicFiltering;
            if (s && t.anisotropicLevel > 0 && t.scaleMode === hr.LINEAR) {
                const n = Math.min(t.anisotropicLevel, r.getParameter(s.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                r.texParameterf(t.target, s.TEXTURE_MAX_ANISOTROPY_EXT, n)
            }
        } else
            r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR : r.NEAREST);
        r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR : r.NEAREST)
    }
    destroy() {
        this.renderer = null
    }
}
Ld.extension = {
    type: et.RendererSystem,
    name: "texture"
};
ot.add(Ld);
class kd {
    constructor(t) {
        this.renderer = t
    }
    contextChange() {
        this.gl = this.renderer.gl,
        this.CONTEXT_UID = this.renderer.CONTEXT_UID
    }
    bind(t) {
        const {gl: e, CONTEXT_UID: r} = this
          , s = t._glTransformFeedbacks[r] || this.createGLTransformFeedback(t);
        e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, s)
    }
    unbind() {
        const {gl: t} = this;
        t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null)
    }
    beginTransformFeedback(t, e) {
        const {gl: r, renderer: s} = this;
        e && s.shader.bind(e),
        r.beginTransformFeedback(t)
    }
    endTransformFeedback() {
        const {gl: t} = this;
        t.endTransformFeedback()
    }
    createGLTransformFeedback(t) {
        const {gl: e, renderer: r, CONTEXT_UID: s} = this
          , n = e.createTransformFeedback();
        t._glTransformFeedbacks[s] = n,
        e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n);
        for (let a = 0; a < t.buffers.length; a++) {
            const o = t.buffers[a];
            o && (r.buffer.update(o),
            o._glBuffers[s].refCount++,
            e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, a, o._glBuffers[s].buffer || null))
        }
        return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null),
        t.disposeRunner.add(this),
        n
    }
    disposeTransformFeedback(t, e) {
        const r = t._glTransformFeedbacks[this.CONTEXT_UID]
          , s = this.gl;
        t.disposeRunner.remove(this);
        const n = this.renderer.buffer;
        if (n)
            for (let a = 0; a < t.buffers.length; a++) {
                const o = t.buffers[a];
                if (!o)
                    continue;
                const l = o._glBuffers[this.CONTEXT_UID];
                l && (l.refCount--,
                l.refCount === 0 && !e && n.dispose(o, e))
            }
        r && (e || s.deleteTransformFeedback(r),
        delete t._glTransformFeedbacks[this.CONTEXT_UID])
    }
    destroy() {
        this.renderer = null
    }
}
kd.extension = {
    type: et.RendererSystem,
    name: "transformFeedback"
};
ot.add(kd);
class ma {
    constructor(t) {
        this.renderer = t
    }
    init(t) {
        this.screen = new At(0,0,t.width,t.height),
        this.element = t.view || nt.ADAPTER.createCanvas(),
        this.resolution = t.resolution || nt.RESOLUTION,
        this.autoDensity = !!t.autoDensity
    }
    resizeView(t, e) {
        this.element.width = Math.round(t * this.resolution),
        this.element.height = Math.round(e * this.resolution);
        const r = this.element.width / this.resolution
          , s = this.element.height / this.resolution;
        this.screen.width = r,
        this.screen.height = s,
        this.autoDensity && (this.element.style.width = `${r}px`,
        this.element.style.height = `${s}px`),
        this.renderer.emit("resize", r, s),
        this.renderer.runners.resize.emit(this.screen.width, this.screen.height)
    }
    destroy(t) {
        var e;
        t && ((e = this.element.parentNode) == null || e.removeChild(this.element)),
        this.renderer = null,
        this.element = null,
        this.screen = null
    }
}
ma.defaultOptions = {
    width: 800,
    height: 600,
    resolution: void 0,
    autoDensity: !1
},
ma.extension = {
    type: [et.RendererSystem, et.CanvasRendererSystem],
    name: "_view"
};
ot.add(ma);
nt.PREFER_ENV = Oi.WEBGL2;
nt.STRICT_TEXTURE_CACHE = !1;
nt.RENDER_OPTIONS = {
    ...pa.defaultOptions,
    ...fa.defaultOptions,
    ...ma.defaultOptions,
    ...ga.defaultOptions
};
Object.defineProperties(nt, {
    WRAP_MODE: {
        get() {
            return Tt.defaultOptions.wrapMode
        },
        set(i) {
            vt("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"),
            Tt.defaultOptions.wrapMode = i
        }
    },
    SCALE_MODE: {
        get() {
            return Tt.defaultOptions.scaleMode
        },
        set(i) {
            vt("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"),
            Tt.defaultOptions.scaleMode = i
        }
    },
    MIPMAP_TEXTURES: {
        get() {
            return Tt.defaultOptions.mipmap
        },
        set(i) {
            vt("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"),
            Tt.defaultOptions.mipmap = i
        }
    },
    ANISOTROPIC_LEVEL: {
        get() {
            return Tt.defaultOptions.anisotropicLevel
        },
        set(i) {
            vt("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"),
            Tt.defaultOptions.anisotropicLevel = i
        }
    },
    FILTER_RESOLUTION: {
        get() {
            return vt("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"),
            De.defaultResolution
        },
        set(i) {
            De.defaultResolution = i
        }
    },
    FILTER_MULTISAMPLE: {
        get() {
            return vt("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"),
            De.defaultMultisample
        },
        set(i) {
            De.defaultMultisample = i
        }
    },
    SPRITE_MAX_TEXTURES: {
        get() {
            return Ei.defaultMaxTextures
        },
        set(i) {
            vt("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"),
            Ei.defaultMaxTextures = i
        }
    },
    SPRITE_BATCH_SIZE: {
        get() {
            return Ei.defaultBatchSize
        },
        set(i) {
            vt("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"),
            Ei.defaultBatchSize = i
        }
    },
    CAN_UPLOAD_SAME_BUFFER: {
        get() {
            return Ei.canUploadSameBuffer
        },
        set(i) {
            vt("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"),
            Ei.canUploadSameBuffer = i
        }
    },
    GC_MODE: {
        get() {
            return Ai.defaultMode
        },
        set(i) {
            vt("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"),
            Ai.defaultMode = i
        }
    },
    GC_MAX_IDLE: {
        get() {
            return Ai.defaultMaxIdle
        },
        set(i) {
            vt("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"),
            Ai.defaultMaxIdle = i
        }
    },
    GC_MAX_CHECK_COUNT: {
        get() {
            return Ai.defaultCheckCountMax
        },
        set(i) {
            vt("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"),
            Ai.defaultCheckCountMax = i
        }
    },
    PRECISION_VERTEX: {
        get() {
            return zr.defaultVertexPrecision
        },
        set(i) {
            vt("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"),
            zr.defaultVertexPrecision = i
        }
    },
    PRECISION_FRAGMENT: {
        get() {
            return zr.defaultFragmentPrecision
        },
        set(i) {
            vt("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"),
            zr.defaultFragmentPrecision = i
        }
    }
});
var Fi = (i => (i[i.INTERACTION = 50] = "INTERACTION",
i[i.HIGH = 25] = "HIGH",
i[i.NORMAL = 0] = "NORMAL",
i[i.LOW = -25] = "LOW",
i[i.UTILITY = -50] = "UTILITY",
i))(Fi || {});
class Lo {
    constructor(t, e=null, r=0, s=!1) {
        this.next = null,
        this.previous = null,
        this._destroyed = !1,
        this.fn = t,
        this.context = e,
        this.priority = r,
        this.once = s
    }
    match(t, e=null) {
        return this.fn === t && this.context === e
    }
    emit(t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        const e = this.next;
        return this.once && this.destroy(!0),
        this._destroyed && (this.next = null),
        e
    }
    connect(t) {
        this.previous = t,
        t.next && (t.next.previous = this),
        this.next = t.next,
        t.next = this
    }
    destroy(t=!1) {
        this._destroyed = !0,
        this.fn = null,
        this.context = null,
        this.previous && (this.previous.next = this.next),
        this.next && (this.next.previous = this.previous);
        const e = this.next;
        return this.next = t ? null : e,
        this.previous = null,
        e
    }
}
const Ud = class Ve {
    constructor() {
        this.autoStart = !1,
        this.deltaTime = 1,
        this.lastTime = -1,
        this.speed = 1,
        this.started = !1,
        this._requestId = null,
        this._maxElapsedMS = 100,
        this._minElapsedMS = 0,
        this._protected = !1,
        this._lastFrame = -1,
        this._head = new Lo(null,null,1 / 0),
        this.deltaMS = 1 / Ve.targetFPMS,
        this.elapsedMS = 1 / Ve.targetFPMS,
        this._tick = t => {
            this._requestId = null,
            this.started && (this.update(t),
            this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
        }
    }
    _requestIfNeeded() {
        this._requestId === null && this._head.next && (this.lastTime = performance.now(),
        this._lastFrame = this.lastTime,
        this._requestId = requestAnimationFrame(this._tick))
    }
    _cancelIfNeeded() {
        this._requestId !== null && (cancelAnimationFrame(this._requestId),
        this._requestId = null)
    }
    _startIfPossible() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }
    add(t, e, r=Fi.NORMAL) {
        return this._addListener(new Lo(t,e,r))
    }
    addOnce(t, e, r=Fi.NORMAL) {
        return this._addListener(new Lo(t,e,r,!0))
    }
    _addListener(t) {
        let e = this._head.next
          , r = this._head;
        if (!e)
            t.connect(r);
        else {
            for (; e; ) {
                if (t.priority > e.priority) {
                    t.connect(r);
                    break
                }
                r = e,
                e = e.next
            }
            t.previous || t.connect(r)
        }
        return this._startIfPossible(),
        this
    }
    remove(t, e) {
        let r = this._head.next;
        for (; r; )
            r.match(t, e) ? r = r.destroy() : r = r.next;
        return this._head.next || this._cancelIfNeeded(),
        this
    }
    get count() {
        if (!this._head)
            return 0;
        let t = 0
          , e = this._head;
        for (; e = e.next; )
            t++;
        return t
    }
    start() {
        this.started || (this.started = !0,
        this._requestIfNeeded())
    }
    stop() {
        this.started && (this.started = !1,
        this._cancelIfNeeded())
    }
    destroy() {
        if (!this._protected) {
            this.stop();
            let t = this._head.next;
            for (; t; )
                t = t.destroy(!0);
            this._head.destroy(),
            this._head = null
        }
    }
    update(t=performance.now()) {
        let e;
        if (t > this.lastTime) {
            if (e = this.elapsedMS = t - this.lastTime,
            e > this._maxElapsedMS && (e = this._maxElapsedMS),
            e *= this.speed,
            this._minElapsedMS) {
                const n = t - this._lastFrame | 0;
                if (n < this._minElapsedMS)
                    return;
                this._lastFrame = t - n % this._minElapsedMS
            }
            this.deltaMS = e,
            this.deltaTime = this.deltaMS * Ve.targetFPMS;
            const r = this._head;
            let s = r.next;
            for (; s; )
                s = s.emit(this.deltaTime);
            r.next || this._cancelIfNeeded()
        } else
            this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t
    }
    get FPS() {
        return 1e3 / this.elapsedMS
    }
    get minFPS() {
        return 1e3 / this._maxElapsedMS
    }
    set minFPS(t) {
        const e = Math.min(this.maxFPS, t)
          , r = Math.min(Math.max(0, e) / 1e3, Ve.targetFPMS);
        this._maxElapsedMS = 1 / r
    }
    get maxFPS() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
    }
    set maxFPS(t) {
        if (t === 0)
            this._minElapsedMS = 0;
        else {
            const e = Math.max(this.minFPS, t);
            this._minElapsedMS = 1 / (e / 1e3)
        }
    }
    static get shared() {
        if (!Ve._shared) {
            const t = Ve._shared = new Ve;
            t.autoStart = !0,
            t._protected = !0
        }
        return Ve._shared
    }
    static get system() {
        if (!Ve._system) {
            const t = Ve._system = new Ve;
            t.autoStart = !0,
            t._protected = !0
        }
        return Ve._system
    }
}
;
Ud.targetFPMS = .06;
let je = Ud;
Object.defineProperties(nt, {
    TARGET_FPMS: {
        get() {
            return je.targetFPMS
        },
        set(i) {
            vt("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),
            je.targetFPMS = i
        }
    }
});
class Gd {
    static init(t) {
        t = Object.assign({
            autoStart: !0,
            sharedTicker: !1
        }, t),
        Object.defineProperty(this, "ticker", {
            set(e) {
                this._ticker && this._ticker.remove(this.render, this),
                this._ticker = e,
                e && e.add(this.render, this, Fi.LOW)
            },
            get() {
                return this._ticker
            }
        }),
        this.stop = () => {
            this._ticker.stop()
        }
        ,
        this.start = () => {
            this._ticker.start()
        }
        ,
        this._ticker = null,
        this.ticker = t.sharedTicker ? je.shared : new je,
        t.autoStart && this.start()
    }
    static destroy() {
        if (this._ticker) {
            const t = this._ticker;
            this.ticker = null,
            t.destroy()
        }
    }
}
Gd.extension = et.Application;
ot.add(Gd);
const Hd = [];
ot.handleByList(et.Renderer, Hd);
function e0(i) {
    for (const t of Hd)
        if (t.test(i))
            return new t(i);
    throw new Error("Unable to auto-detect a suitable renderer.")
}
var r0 = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`
  , i0 = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const s0 = r0
  , Vd = i0;
class $d {
    constructor(t) {
        this.renderer = t
    }
    contextChange(t) {
        let e;
        if (this.renderer.context.webGLVersion === 1) {
            const r = t.getParameter(t.FRAMEBUFFER_BINDING);
            t.bindFramebuffer(t.FRAMEBUFFER, null),
            e = t.getParameter(t.SAMPLES),
            t.bindFramebuffer(t.FRAMEBUFFER, r)
        } else {
            const r = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
            t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
            e = t.getParameter(t.SAMPLES),
            t.bindFramebuffer(t.DRAW_FRAMEBUFFER, r)
        }
        e >= he.HIGH ? this.multisample = he.HIGH : e >= he.MEDIUM ? this.multisample = he.MEDIUM : e >= he.LOW ? this.multisample = he.LOW : this.multisample = he.NONE
    }
    destroy() {}
}
$d.extension = {
    type: et.RendererSystem,
    name: "_multisample"
};
ot.add($d);
class n0 {
    constructor(t) {
        this.buffer = t || null,
        this.updateID = -1,
        this.byteLength = -1,
        this.refCount = 0
    }
}
class jd {
    constructor(t) {
        this.renderer = t,
        this.managedBuffers = {},
        this.boundBufferBases = {}
    }
    destroy() {
        this.renderer = null
    }
    contextChange() {
        this.disposeAll(!0),
        this.gl = this.renderer.gl,
        this.CONTEXT_UID = this.renderer.CONTEXT_UID
    }
    bind(t) {
        const {gl: e, CONTEXT_UID: r} = this
          , s = t._glBuffers[r] || this.createGLBuffer(t);
        e.bindBuffer(t.type, s.buffer)
    }
    unbind(t) {
        const {gl: e} = this;
        e.bindBuffer(t, null)
    }
    bindBufferBase(t, e) {
        const {gl: r, CONTEXT_UID: s} = this;
        if (this.boundBufferBases[e] !== t) {
            const n = t._glBuffers[s] || this.createGLBuffer(t);
            this.boundBufferBases[e] = t,
            r.bindBufferBase(r.UNIFORM_BUFFER, e, n.buffer)
        }
    }
    bindBufferRange(t, e, r) {
        const {gl: s, CONTEXT_UID: n} = this;
        r = r || 0;
        const a = t._glBuffers[n] || this.createGLBuffer(t);
        s.bindBufferRange(s.UNIFORM_BUFFER, e || 0, a.buffer, r * 256, 256)
    }
    update(t) {
        const {gl: e, CONTEXT_UID: r} = this
          , s = t._glBuffers[r] || this.createGLBuffer(t);
        if (t._updateID !== s.updateID)
            if (s.updateID = t._updateID,
            e.bindBuffer(t.type, s.buffer),
            s.byteLength >= t.data.byteLength)
                e.bufferSubData(t.type, 0, t.data);
            else {
                const n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                s.byteLength = t.data.byteLength,
                e.bufferData(t.type, t.data, n)
            }
    }
    dispose(t, e) {
        if (!this.managedBuffers[t.id])
            return;
        delete this.managedBuffers[t.id];
        const r = t._glBuffers[this.CONTEXT_UID]
          , s = this.gl;
        t.disposeRunner.remove(this),
        r && (e || s.deleteBuffer(r.buffer),
        delete t._glBuffers[this.CONTEXT_UID])
    }
    disposeAll(t) {
        const e = Object.keys(this.managedBuffers);
        for (let r = 0; r < e.length; r++)
            this.dispose(this.managedBuffers[e[r]], t)
    }
    createGLBuffer(t) {
        const {CONTEXT_UID: e, gl: r} = this;
        return t._glBuffers[e] = new n0(r.createBuffer()),
        this.managedBuffers[t.id] = t,
        t.disposeRunner.add(this),
        t._glBuffers[e]
    }
}
jd.extension = {
    type: et.RendererSystem,
    name: "buffer"
};
ot.add(jd);
class Wd {
    constructor(t) {
        this.renderer = t
    }
    render(t, e) {
        const r = this.renderer;
        let s, n, a, o;
        if (e && (s = e.renderTexture,
        n = e.clear,
        a = e.transform,
        o = e.skipUpdateTransform),
        this.renderingToScreen = !s,
        r.runners.prerender.emit(),
        r.emit("prerender"),
        r.projection.transform = a,
        !r.context.isLost) {
            if (s || (this.lastObjectRendered = t),
            !o) {
                const l = t.enableTempParent();
                t.updateTransform(),
                t.disableTempParent(l)
            }
            r.renderTexture.bind(s),
            r.batch.currentRenderer.start(),
            (n ?? r.background.clearBeforeRender) && r.renderTexture.clear(),
            t.render(r),
            r.batch.currentRenderer.flush(),
            s && (e.blit && r.framebuffer.blit(),
            s.baseTexture.update()),
            r.runners.postrender.emit(),
            r.projection.transform = null,
            r.emit("postrender")
        }
    }
    destroy() {
        this.renderer = null,
        this.lastObjectRendered = null
    }
}
Wd.extension = {
    type: et.RendererSystem,
    name: "objectRenderer"
};
ot.add(Wd);
const ta = class Rh extends Nd {
    constructor(t) {
        super(),
        this.type = Kh.WEBGL,
        t = Object.assign({}, nt.RENDER_OPTIONS, t),
        this.gl = null,
        this.CONTEXT_UID = 0,
        this.globalUniforms = new cr({
            projectionMatrix: new Wt
        },!0);
        const e = {
            runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
            systems: Rh.__systems,
            priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"]
        };
        this.setup(e),
        "useContextAlpha"in t && (vt("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"),
        t.premultipliedAlpha = t.useContextAlpha && t.useContextAlpha !== "notMultiplied",
        t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha),
        this._plugin.rendererPlugins = Rh.__plugins,
        this.options = t,
        this.startup.run(this.options)
    }
    static test(t) {
        return t != null && t.forceCanvas ? !1 : Jc()
    }
    render(t, e) {
        this.objectRenderer.render(t, e)
    }
    resize(t, e) {
        this._view.resizeView(t, e)
    }
    reset() {
        return this.runners.reset.emit(),
        this
    }
    clear() {
        this.renderTexture.bind(),
        this.renderTexture.clear()
    }
    destroy(t=!1) {
        this.runners.destroy.items.reverse(),
        this.emitWithCustomOptions(this.runners.destroy, {
            _view: t
        }),
        super.destroy()
    }
    get plugins() {
        return this._plugin.plugins
    }
    get multisample() {
        return this._multisample.multisample
    }
    get width() {
        return this._view.element.width
    }
    get height() {
        return this._view.element.height
    }
    get resolution() {
        return this._view.resolution
    }
    set resolution(t) {
        this._view.resolution = t,
        this.runners.resolutionChange.emit(t)
    }
    get autoDensity() {
        return this._view.autoDensity
    }
    get view() {
        return this._view.element
    }
    get screen() {
        return this._view.screen
    }
    get lastObjectRendered() {
        return this.objectRenderer.lastObjectRendered
    }
    get renderingToScreen() {
        return this.objectRenderer.renderingToScreen
    }
    get rendererLogId() {
        return `WebGL ${this.context.webGLVersion}`
    }
    get clearBeforeRender() {
        return vt("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."),
        this.background.clearBeforeRender
    }
    get useContextAlpha() {
        return vt("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."),
        this.context.useContextAlpha
    }
    get preserveDrawingBuffer() {
        return vt("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"),
        this.context.preserveDrawingBuffer
    }
    get backgroundColor() {
        return vt("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."),
        this.background.color
    }
    set backgroundColor(t) {
        vt("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."),
        this.background.color = t
    }
    get backgroundAlpha() {
        return vt("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),
        this.background.alpha
    }
    set backgroundAlpha(t) {
        vt("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),
        this.background.alpha = t
    }
    get powerPreference() {
        return vt("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"),
        this.context.powerPreference
    }
    generateTexture(t, e) {
        return this.textureGenerator.generateTexture(t, e)
    }
}
;
ta.extension = {
    type: et.Renderer,
    priority: 1
},
ta.__plugins = {},
ta.__systems = {};
let cl = ta;
ot.handleByMap(et.RendererPlugin, cl.__plugins);
ot.handleByMap(et.RendererSystem, cl.__systems);
ot.add(cl);
class Xd extends sn {
    constructor(t, e) {
        const {width: r, height: s} = e || {};
        super(r, s),
        this.items = [],
        this.itemDirtyIds = [];
        for (let n = 0; n < t; n++) {
            const a = new Tt;
            this.items.push(a),
            this.itemDirtyIds.push(-2)
        }
        this.length = t,
        this._load = null,
        this.baseTexture = null
    }
    initFromArray(t, e) {
        for (let r = 0; r < this.length; r++)
            t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r]instanceof sn ? this.addResourceAt(t[r], r) : this.addResourceAt(ud(t[r], e), r))
    }
    dispose() {
        for (let t = 0, e = this.length; t < e; t++)
            this.items[t].destroy();
        this.items = null,
        this.itemDirtyIds = null,
        this._load = null
    }
    addResourceAt(t, e) {
        if (!this.items[e])
            throw new Error(`Index ${e} is out of bounds`);
        return t.valid && !this.valid && this.resize(t.width, t.height),
        this.items[e].setResource(t),
        this
    }
    bind(t) {
        if (this.baseTexture !== null)
            throw new Error("Only one base texture per TextureArray is allowed");
        super.bind(t);
        for (let e = 0; e < this.length; e++)
            this.items[e].parentTextureArray = t,
            this.items[e].on("update", t.update, t)
    }
    unbind(t) {
        super.unbind(t);
        for (let e = 0; e < this.length; e++)
            this.items[e].parentTextureArray = null,
            this.items[e].off("update", t.update, t)
    }
    load() {
        if (this._load)
            return this._load;
        const t = this.items.map(e => e.resource).filter(e => e).map(e => e.load());
        return this._load = Promise.all(t).then( () => {
            const {realWidth: e, realHeight: r} = this.items[0];
            return this.resize(e, r),
            this.update(),
            Promise.resolve(this)
        }
        ),
        this._load
    }
}
class a0 extends Xd {
    constructor(t, e) {
        const {width: r, height: s} = e || {};
        let n, a;
        Array.isArray(t) ? (n = t,
        a = t.length) : a = t,
        super(a, {
            width: r,
            height: s
        }),
        n && this.initFromArray(n, e)
    }
    addBaseTextureAt(t, e) {
        if (t.resource)
            this.addResourceAt(t.resource, e);
        else
            throw new Error("ArrayResource does not support RenderTexture");
        return this
    }
    bind(t) {
        super.bind(t),
        t.target = as.TEXTURE_2D_ARRAY
    }
    upload(t, e, r) {
        const {length: s, itemDirtyIds: n, items: a} = this
          , {gl: o} = t;
        r.dirtyId < 0 && o.texImage3D(o.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, s, 0, e.format, r.type, null);
        for (let l = 0; l < s; l++) {
            const c = a[l];
            n[l] < c.dirtyId && (n[l] = c.dirtyId,
            c.valid && o.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, l, c.resource.width, c.resource.height, 1, e.format, r.type, c.resource.source))
        }
        return !0
    }
}
class zd extends qr {
    constructor(t) {
        super(t)
    }
    static test(t) {
        const {OffscreenCanvas: e} = globalThis;
        return e && t instanceof e ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement
    }
}
const Yd = class Ws extends Xd {
    constructor(t, e) {
        const {width: r, height: s, autoLoad: n, linkBaseTexture: a} = e || {};
        if (t && t.length !== Ws.SIDES)
            throw new Error(`Invalid length. Got ${t.length}, expected 6`);
        super(6, {
            width: r,
            height: s
        });
        for (let o = 0; o < Ws.SIDES; o++)
            this.items[o].target = as.TEXTURE_CUBE_MAP_POSITIVE_X + o;
        this.linkBaseTexture = a !== !1,
        t && this.initFromArray(t, e),
        n !== !1 && this.load()
    }
    bind(t) {
        super.bind(t),
        t.target = as.TEXTURE_CUBE_MAP
    }
    addBaseTextureAt(t, e, r) {
        if (r === void 0 && (r = this.linkBaseTexture),
        !this.items[e])
            throw new Error(`Index ${e} is out of bounds`);
        if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0)
            if (t.resource)
                this.addResourceAt(t.resource, e);
            else
                throw new Error("CubeResource does not support copying of renderTexture.");
        else
            t.target = as.TEXTURE_CUBE_MAP_POSITIVE_X + e,
            t.parentTextureArray = this.baseTexture,
            this.items[e] = t;
        return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
        this.items[e] = t,
        this
    }
    upload(t, e, r) {
        const s = this.itemDirtyIds;
        for (let n = 0; n < Ws.SIDES; n++) {
            const a = this.items[n];
            (s[n] < a.dirtyId || r.dirtyId < e.dirtyId) && (a.valid && a.resource ? (a.resource.upload(t, a, r),
            s[n] = a.dirtyId) : s[n] < -1 && (t.gl.texImage2D(a.target, 0, r.internalFormat, e.realWidth, e.realHeight, 0, e.format, r.type, null),
            s[n] = -1))
        }
        return !0
    }
    static test(t) {
        return Array.isArray(t) && t.length === Ws.SIDES
    }
}
;
Yd.SIDES = 6;
let o0 = Yd;
class ss extends qr {
    constructor(t, e) {
        e = e || {};
        let r, s, n;
        typeof t == "string" ? (r = ss.EMPTY,
        s = t,
        n = !0) : (r = t,
        s = null,
        n = !1),
        super(r),
        this.url = s,
        this.crossOrigin = e.crossOrigin ?? !0,
        this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null,
        this.ownsImageBitmap = e.ownsImageBitmap ?? n,
        this._load = null,
        e.autoLoad !== !1 && this.load()
    }
    load() {
        return this._load ? this._load : (this._load = new Promise(async (t, e) => {
            if (this.url === null) {
                t(this);
                return
            }
            try {
                const r = await nt.ADAPTER.fetch(this.url, {
                    mode: this.crossOrigin ? "cors" : "no-cors"
                });
                if (this.destroyed)
                    return;
                const s = await r.blob();
                if (this.destroyed)
                    return;
                const n = await createImageBitmap(s, {
                    premultiplyAlpha: this.alphaMode === null || this.alphaMode === ke.UNPACK ? "premultiply" : "none"
                });
                if (this.destroyed) {
                    n.close();
                    return
                }
                this.source = n,
                this.update(),
                t(this)
            } catch (r) {
                if (this.destroyed)
                    return;
                e(r),
                this.onError.emit(r)
            }
        }
        ),
        this._load)
    }
    upload(t, e, r) {
        return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode),
        super.upload(t, e, r)) : (this.load(),
        !1)
    }
    dispose() {
        this.ownsImageBitmap && this.source instanceof ImageBitmap && this.source.close(),
        super.dispose(),
        this._load = null
    }
    static test(t) {
        return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && (typeof t == "string" || t instanceof ImageBitmap)
    }
    static get EMPTY() {
        return ss._EMPTY = ss._EMPTY ?? nt.ADAPTER.createCanvas(0, 0),
        ss._EMPTY
    }
}
const Ph = class ea extends qr {
    constructor(t, e) {
        e = e || {},
        super(nt.ADAPTER.createCanvas()),
        this._width = 0,
        this._height = 0,
        this.svg = t,
        this.scale = e.scale || 1,
        this._overrideWidth = e.width,
        this._overrideHeight = e.height,
        this._resolve = null,
        this._crossorigin = e.crossorigin,
        this._load = null,
        e.autoLoad !== !1 && this.load()
    }
    load() {
        return this._load ? this._load : (this._load = new Promise(t => {
            if (this._resolve = () => {
                this.update(),
                t(this)
            }
            ,
            ea.SVG_XML.test(this.svg.trim())) {
                if (!btoa)
                    throw new Error("Your browser doesn't support base64 conversions.");
                this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`
            }
            this._loadSvg()
        }
        ),
        this._load)
    }
    _loadSvg() {
        const t = new Image;
        qr.crossOrigin(t, this.svg, this._crossorigin),
        t.src = this.svg,
        t.onerror = e => {
            this._resolve && (t.onerror = null,
            this.onError.emit(e))
        }
        ,
        t.onload = () => {
            if (!this._resolve)
                return;
            const e = t.width
              , r = t.height;
            if (!e || !r)
                throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
            let s = e * this.scale
              , n = r * this.scale;
            (this._overrideWidth || this._overrideHeight) && (s = this._overrideWidth || this._overrideHeight / r * e,
            n = this._overrideHeight || this._overrideWidth / e * r),
            s = Math.round(s),
            n = Math.round(n);
            const a = this.source;
            a.width = s,
            a.height = n,
            a._pixiId = `canvas_${hi()}`,
            a.getContext("2d").drawImage(t, 0, 0, e, r, 0, 0, s, n),
            this._resolve(),
            this._resolve = null
        }
    }
    static getSize(t) {
        const e = ea.SVG_SIZE.exec(t)
          , r = {};
        return e && (r[e[1]] = Math.round(parseFloat(e[3])),
        r[e[5]] = Math.round(parseFloat(e[7]))),
        r
    }
    dispose() {
        super.dispose(),
        this._resolve = null,
        this._crossorigin = null
    }
    static test(t, e) {
        return e === "svg" || typeof t == "string" && t.startsWith("data:image/svg+xml") || typeof t == "string" && ea.SVG_XML.test(t)
    }
}
;
Ph.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,
Ph.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
let Mh = Ph;
class h0 extends qr {
    constructor(t) {
        super(t)
    }
    static test(t) {
        return !!globalThis.VideoFrame && t instanceof globalThis.VideoFrame
    }
}
const Dh = class Bh extends qr {
    constructor(t, e) {
        if (e = e || {},
        !(t instanceof HTMLVideoElement)) {
            const r = document.createElement("video");
            e.autoLoad !== !1 && r.setAttribute("preload", "auto"),
            e.playsinline !== !1 && (r.setAttribute("webkit-playsinline", ""),
            r.setAttribute("playsinline", "")),
            e.muted === !0 && (r.setAttribute("muted", ""),
            r.muted = !0),
            e.loop === !0 && r.setAttribute("loop", ""),
            e.autoPlay !== !1 && r.setAttribute("autoplay", ""),
            typeof t == "string" && (t = [t]);
            const s = t[0].src || t[0];
            qr.crossOrigin(r, s, e.crossorigin);
            for (let n = 0; n < t.length; ++n) {
                const a = document.createElement("source");
                let {src: o, mime: l} = t[n];
                if (o = o || t[n],
                o.startsWith("data:"))
                    l = o.slice(5, o.indexOf(";"));
                else if (!o.startsWith("blob:")) {
                    const c = o.split("?").shift().toLowerCase()
                      , p = c.slice(c.lastIndexOf(".") + 1);
                    l = l || Bh.MIME_TYPES[p] || `video/${p}`
                }
                a.src = o,
                l && (a.type = l),
                r.appendChild(a)
            }
            t = r
        }
        super(t),
        this.noSubImage = !0,
        this._autoUpdate = !0,
        this._isConnectedToTicker = !1,
        this._updateFPS = e.updateFPS || 0,
        this._msToNextUpdate = 0,
        this.autoPlay = e.autoPlay !== !1,
        this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this),
        this._videoFrameRequestCallbackHandle = null,
        this._load = null,
        this._resolve = null,
        this._reject = null,
        this._onCanPlay = this._onCanPlay.bind(this),
        this._onError = this._onError.bind(this),
        this._onPlayStart = this._onPlayStart.bind(this),
        this._onPlayStop = this._onPlayStop.bind(this),
        this._onSeeked = this._onSeeked.bind(this),
        e.autoLoad !== !1 && this.load()
    }
    update(t=0) {
        if (!this.destroyed) {
            if (this._updateFPS) {
                const e = je.shared.elapsedMS * this.source.playbackRate;
                this._msToNextUpdate = Math.floor(this._msToNextUpdate - e)
            }
            (!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(),
            this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
        }
    }
    _videoFrameRequestCallback() {
        this.update(),
        this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback)
    }
    load() {
        if (this._load)
            return this._load;
        const t = this.source;
        return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0),
        t.addEventListener("play", this._onPlayStart),
        t.addEventListener("pause", this._onPlayStop),
        t.addEventListener("seeked", this._onSeeked),
        this._isSourceReady() ? this._onCanPlay() : (t.addEventListener("canplay", this._onCanPlay),
        t.addEventListener("canplaythrough", this._onCanPlay),
        t.addEventListener("error", this._onError, !0)),
        this._load = new Promise( (e, r) => {
            this.valid ? e(this) : (this._resolve = e,
            this._reject = r,
            t.load())
        }
        ),
        this._load
    }
    _onError(t) {
        this.source.removeEventListener("error", this._onError, !0),
        this.onError.emit(t),
        this._reject && (this._reject(t),
        this._reject = null,
        this._resolve = null)
    }
    _isSourcePlaying() {
        const t = this.source;
        return !t.paused && !t.ended
    }
    _isSourceReady() {
        return this.source.readyState > 2
    }
    _onPlayStart() {
        this.valid || this._onCanPlay(),
        this._configureAutoUpdate()
    }
    _onPlayStop() {
        this._configureAutoUpdate()
    }
    _onSeeked() {
        this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0,
        this.update(),
        this._msToNextUpdate = 0)
    }
    _onCanPlay() {
        const t = this.source;
        t.removeEventListener("canplay", this._onCanPlay),
        t.removeEventListener("canplaythrough", this._onCanPlay);
        const e = this.valid;
        this._msToNextUpdate = 0,
        this.update(),
        this._msToNextUpdate = 0,
        !e && this._resolve && (this._resolve(this),
        this._resolve = null,
        this._reject = null),
        this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
    }
    dispose() {
        this._configureAutoUpdate();
        const t = this.source;
        t && (t.removeEventListener("play", this._onPlayStart),
        t.removeEventListener("pause", this._onPlayStop),
        t.removeEventListener("seeked", this._onSeeked),
        t.removeEventListener("canplay", this._onCanPlay),
        t.removeEventListener("canplaythrough", this._onCanPlay),
        t.removeEventListener("error", this._onError, !0),
        t.pause(),
        t.src = "",
        t.load()),
        super.dispose()
    }
    get autoUpdate() {
        return this._autoUpdate
    }
    set autoUpdate(t) {
        t !== this._autoUpdate && (this._autoUpdate = t,
        this._configureAutoUpdate())
    }
    get updateFPS() {
        return this._updateFPS
    }
    set updateFPS(t) {
        t !== this._updateFPS && (this._updateFPS = t,
        this._configureAutoUpdate())
    }
    _configureAutoUpdate() {
        this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.source.requestVideoFrameCallback ? (this._isConnectedToTicker && (je.shared.remove(this.update, this),
        this._isConnectedToTicker = !1,
        this._msToNextUpdate = 0),
        this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
        this._videoFrameRequestCallbackHandle = null),
        this._isConnectedToTicker || (je.shared.add(this.update, this),
        this._isConnectedToTicker = !0,
        this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
        this._videoFrameRequestCallbackHandle = null),
        this._isConnectedToTicker && (je.shared.remove(this.update, this),
        this._isConnectedToTicker = !1,
        this._msToNextUpdate = 0))
    }
    static test(t, e) {
        return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || Bh.TYPES.includes(e)
    }
}
;
Dh.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"],
Dh.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
};
let qd = Dh;
_h.push(ss, _d, zd, qd, h0, Mh, Pa, o0, a0);
Tt.prototype.getDrawableSource = function() {
    const i = this.resource;
    return i ? i.bitmap || i.source : null
}
;
hl.prototype._canvasRenderTarget = null;
ut.prototype.patternCache = null;
ut.prototype.tintCache = null;
let Ls;
function Qu(i) {
    const t = nt.ADAPTER.createCanvas(6, 1)
      , e = t.getContext("2d");
    return e.fillStyle = i,
    e.fillRect(0, 0, 6, 1),
    t
}
function Kd() {
    if (typeof document > "u")
        return !1;
    if (Ls !== void 0)
        return Ls;
    const i = Qu("#ff00ff")
      , t = Qu("#ffff00")
      , e = nt.ADAPTER.createCanvas(6, 1).getContext("2d");
    e.globalCompositeOperation = "multiply",
    e.drawImage(i, 0, 0),
    e.drawImage(t, 2, 0);
    const r = e.getImageData(2, 0, 1, 1);
    if (!r)
        Ls = !1;
    else {
        const s = r.data;
        Ls = s[0] === 255 && s[1] === 0 && s[2] === 0
    }
    return Ls
}
function l0(i=[]) {
    return Kd() ? (i[Y.NORMAL] = "source-over",
    i[Y.ADD] = "lighter",
    i[Y.MULTIPLY] = "multiply",
    i[Y.SCREEN] = "screen",
    i[Y.OVERLAY] = "overlay",
    i[Y.DARKEN] = "darken",
    i[Y.LIGHTEN] = "lighten",
    i[Y.COLOR_DODGE] = "color-dodge",
    i[Y.COLOR_BURN] = "color-burn",
    i[Y.HARD_LIGHT] = "hard-light",
    i[Y.SOFT_LIGHT] = "soft-light",
    i[Y.DIFFERENCE] = "difference",
    i[Y.EXCLUSION] = "exclusion",
    i[Y.HUE] = "hue",
    i[Y.SATURATION] = "saturation",
    i[Y.COLOR] = "color",
    i[Y.LUMINOSITY] = "luminosity") : (i[Y.NORMAL] = "source-over",
    i[Y.ADD] = "lighter",
    i[Y.MULTIPLY] = "source-over",
    i[Y.SCREEN] = "source-over",
    i[Y.OVERLAY] = "source-over",
    i[Y.DARKEN] = "source-over",
    i[Y.LIGHTEN] = "source-over",
    i[Y.COLOR_DODGE] = "source-over",
    i[Y.COLOR_BURN] = "source-over",
    i[Y.HARD_LIGHT] = "source-over",
    i[Y.SOFT_LIGHT] = "source-over",
    i[Y.DIFFERENCE] = "source-over",
    i[Y.EXCLUSION] = "source-over",
    i[Y.HUE] = "source-over",
    i[Y.SATURATION] = "source-over",
    i[Y.COLOR] = "source-over",
    i[Y.LUMINOSITY] = "source-over"),
    i[Y.NORMAL_NPM] = i[Y.NORMAL],
    i[Y.ADD_NPM] = i[Y.ADD],
    i[Y.SCREEN_NPM] = i[Y.SCREEN],
    i[Y.SRC_IN] = "source-in",
    i[Y.SRC_OUT] = "source-out",
    i[Y.SRC_ATOP] = "source-atop",
    i[Y.DST_OVER] = "destination-over",
    i[Y.DST_IN] = "destination-in",
    i[Y.DST_OUT] = "destination-out",
    i[Y.DST_ATOP] = "destination-atop",
    i[Y.XOR] = "xor",
    i[Y.SUBTRACT] = "source-over",
    i
}
const u0 = new Wt;
class Zd {
    constructor(t) {
        this.activeResolution = 1,
        this.smoothProperty = "imageSmoothingEnabled",
        this.blendModes = l0(),
        this._activeBlendMode = null,
        this._projTransform = null,
        this._outerBlend = !1,
        this.renderer = t
    }
    init() {
        const t = this.renderer.background.alpha < 1;
        if (this.rootContext = this.renderer.view.getContext("2d", {
            alpha: t
        }),
        this.activeContext = this.rootContext,
        !this.rootContext.imageSmoothingEnabled) {
            const e = this.rootContext;
            e.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : e.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : e.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : e.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")
        }
    }
    setContextTransform(t, e, r) {
        let s = t;
        const n = this._projTransform
          , a = this.activeResolution;
        r = r || a,
        n && (s = u0,
        s.copyFrom(t),
        s.prepend(n)),
        e ? this.activeContext.setTransform(s.a * r, s.b * r, s.c * r, s.d * r, s.tx * a | 0, s.ty * a | 0) : this.activeContext.setTransform(s.a * r, s.b * r, s.c * r, s.d * r, s.tx * a, s.ty * a)
    }
    clear(t, e) {
        const {activeContext: r, renderer: s} = this
          , n = t ? Pt.shared.setValue(t) : this.renderer.background.backgroundColor;
        r.clearRect(0, 0, s.width, s.height),
        t && (r.globalAlpha = e ?? this.renderer.background.alpha,
        r.fillStyle = n.toHex(),
        r.fillRect(0, 0, s.width, s.height),
        r.globalAlpha = 1)
    }
    setBlendMode(t, e) {
        const r = t === Y.SRC_IN || t === Y.SRC_OUT || t === Y.DST_IN || t === Y.DST_ATOP;
        !e && r && (t = Y.NORMAL),
        this._activeBlendMode !== t && (this._activeBlendMode = t,
        this._outerBlend = r,
        this.activeContext.globalCompositeOperation = this.blendModes[t])
    }
    resize() {
        this.smoothProperty && (this.rootContext[this.smoothProperty] = Tt.defaultOptions.scaleMode === hr.LINEAR)
    }
    invalidateBlendMode() {
        this._activeBlendMode = this.blendModes.indexOf(this.activeContext.globalCompositeOperation)
    }
    destroy() {
        this.renderer = null,
        this.rootContext = null,
        this.activeContext = null,
        this.smoothProperty = null
    }
}
Zd.extension = {
    type: et.CanvasRendererSystem,
    name: "canvasContext"
};
ot.add(Zd);
class Qd {
    constructor(t) {
        this._foundShapes = [],
        this.renderer = t
    }
    pushMask(t) {
        const e = this.renderer
          , r = t.maskObject || t;
        e.canvasContext.activeContext.save();
        const s = this._foundShapes;
        if (this.recursiveFindShapes(r, s),
        s.length > 0) {
            const n = e.canvasContext.activeContext;
            n.beginPath();
            for (let a = 0; a < s.length; a++) {
                const o = s[a]
                  , l = o.transform.worldTransform;
                this.renderer.canvasContext.setContextTransform(l),
                this.renderGraphicsShape(o)
            }
            s.length = 0,
            n.clip()
        }
    }
    recursiveFindShapes(t, e) {
        t.geometry && t.geometry.graphicsData && e.push(t);
        const {children: r} = t;
        if (r)
            for (let s = 0; s < r.length; s++)
                this.recursiveFindShapes(r[s], e)
    }
    renderGraphicsShape(t) {
        t.finishPoly();
        const e = this.renderer.canvasContext.activeContext
          , r = t.geometry.graphicsData
          , s = r.length;
        if (s !== 0)
            for (let n = 0; n < s; n++) {
                const a = r[n]
                  , o = a.shape;
                if (o.type === Zt.POLY) {
                    let l = o.points;
                    const c = a.holes;
                    let p, m, f, v;
                    e.moveTo(l[0], l[1]);
                    for (let _ = 1; _ < l.length / 2; _++)
                        e.lineTo(l[_ * 2], l[_ * 2 + 1]);
                    if (c.length > 0) {
                        p = 0,
                        f = l[0],
                        v = l[1];
                        for (let _ = 2; _ + 2 < l.length; _ += 2)
                            p += (l[_] - f) * (l[_ + 3] - v) - (l[_ + 2] - f) * (l[_ + 1] - v);
                        for (let _ = 0; _ < c.length; _++)
                            if (l = c[_].shape.points,
                            !!l) {
                                m = 0,
                                f = l[0],
                                v = l[1];
                                for (let T = 2; T + 2 < l.length; T += 2)
                                    m += (l[T] - f) * (l[T + 3] - v) - (l[T + 2] - f) * (l[T + 1] - v);
                                if (m * p < 0) {
                                    e.moveTo(l[0], l[1]);
                                    for (let T = 2; T < l.length; T += 2)
                                        e.lineTo(l[T], l[T + 1])
                                } else {
                                    e.moveTo(l[l.length - 2], l[l.length - 1]);
                                    for (let T = l.length - 4; T >= 0; T -= 2)
                                        e.lineTo(l[T], l[T + 1])
                                }
                                c[_].shape.closeStroke && e.closePath()
                            }
                    }
                    l[0] === l[l.length - 2] && l[1] === l[l.length - 1] && e.closePath()
                } else if (o.type === Zt.RECT)
                    e.rect(o.x, o.y, o.width, o.height),
                    e.closePath();
                else if (o.type === Zt.CIRC)
                    e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI),
                    e.closePath();
                else if (o.type === Zt.ELIP) {
                    const l = o.width * 2
                      , c = o.height * 2
                      , p = o.x - l / 2
                      , m = o.y - c / 2
                      , f = .5522848
                      , v = l / 2 * f
                      , _ = c / 2 * f
                      , T = p + l
                      , A = m + c
                      , E = p + l / 2
                      , I = m + c / 2;
                    e.moveTo(p, I),
                    e.bezierCurveTo(p, I - _, E - v, m, E, m),
                    e.bezierCurveTo(E + v, m, T, I - _, T, I),
                    e.bezierCurveTo(T, I + _, E + v, A, E, A),
                    e.bezierCurveTo(E - v, A, p, I + _, p, I),
                    e.closePath()
                } else if (o.type === Zt.RREC) {
                    const l = o.x
                      , c = o.y
                      , p = o.width
                      , m = o.height;
                    let f = o.radius;
                    const v = Math.min(p, m) / 2;
                    f = f > v ? v : f,
                    e.moveTo(l, c + f),
                    e.lineTo(l, c + m - f),
                    e.quadraticCurveTo(l, c + m, l + f, c + m),
                    e.lineTo(l + p - f, c + m),
                    e.quadraticCurveTo(l + p, c + m, l + p, c + m - f),
                    e.lineTo(l + p, c + f),
                    e.quadraticCurveTo(l + p, c, l + p - f, c),
                    e.lineTo(l + f, c),
                    e.quadraticCurveTo(l, c, l, c + f),
                    e.closePath()
                }
            }
    }
    popMask(t) {
        t.canvasContext.activeContext.restore(),
        t.canvasContext.invalidateBlendMode()
    }
    destroy() {}
}
Qd.extension = {
    type: et.CanvasRendererSystem,
    name: "mask"
};
ot.add(Qd);
class Jd {
    constructor(t) {
        this.renderer = t
    }
    render(t, e) {
        const r = this.renderer;
        if (!r.view)
            return;
        const s = r.canvasContext;
        let n, a, o, l;
        e && (n = e.renderTexture,
        a = e.clear,
        o = e.transform,
        l = e.skipUpdateTransform),
        this.renderingToScreen = !n,
        r.emit("prerender");
        const c = r.resolution;
        n ? (n = n.castToBaseTexture(),
        n._canvasRenderTarget || (n._canvasRenderTarget = new hn(n.width,n.height,n.resolution),
        n.resource = new zd(n._canvasRenderTarget.canvas),
        n.valid = !0),
        s.activeContext = n._canvasRenderTarget.context,
        r.canvasContext.activeResolution = n._canvasRenderTarget.resolution) : (s.activeContext = s.rootContext,
        s.activeResolution = c);
        const p = s.activeContext;
        if (s._projTransform = o || null,
        n || (this.lastObjectRendered = t),
        !l) {
            const f = t.enableTempParent();
            t.updateTransform(),
            t.disableTempParent(f)
        }
        if (p.save(),
        p.setTransform(1, 0, 0, 1, 0, 0),
        p.globalAlpha = 1,
        s._activeBlendMode = Y.NORMAL,
        s._outerBlend = !1,
        p.globalCompositeOperation = s.blendModes[Y.NORMAL],
        a ?? r.background.clearBeforeRender)
            if (this.renderingToScreen) {
                p.clearRect(0, 0, r.width, r.height);
                const f = r.background;
                f.alpha > 0 && (p.globalAlpha = f.backgroundColor.alpha,
                p.fillStyle = f.backgroundColor.toHex(),
                p.fillRect(0, 0, r.width, r.height),
                p.globalAlpha = 1)
            } else
                n = n,
                n._canvasRenderTarget.clear(),
                n.clear.alpha > 0 && (p.globalAlpha = n.clear.alpha,
                p.fillStyle = n.clear.toHex(),
                p.fillRect(0, 0, n.realWidth, n.realHeight),
                p.globalAlpha = 1);
        const m = s.activeContext;
        s.activeContext = p,
        t.renderCanvas(r),
        s.activeContext = m,
        p.restore(),
        s.activeResolution = c,
        s._projTransform = null,
        r.emit("postrender")
    }
    destroy() {
        this.lastObjectRendered = null,
        this.render = null
    }
}
Jd.extension = {
    type: et.CanvasRendererSystem,
    name: "objectRenderer"
};
ot.add(Jd);
const {deprecation: Ce} = zy
  , ra = class Fh extends Nd {
    constructor(t) {
        super(),
        this.type = Kh.CANVAS,
        this.rendererLogId = "Canvas",
        t = Object.assign({}, nt.RENDER_OPTIONS, t);
        const e = {
            runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
            systems: Fh.__systems,
            priority: ["textureGenerator", "background", "_view", "_plugin", "startup", "mask", "canvasContext", "objectRenderer"]
        };
        this.setup(e),
        "useContextAlpha"in t && (Ce("7.0.0", "options.useContextAlpha is deprecated, use options.backgroundAlpha instead"),
        t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha),
        this._plugin.rendererPlugins = Fh.__plugins,
        this.options = t,
        this.startup.run(this.options)
    }
    static test() {
        return !0
    }
    generateTexture(t, e) {
        return this.textureGenerator.generateTexture(t, e)
    }
    reset() {}
    render(t, e) {
        this.objectRenderer.render(t, e)
    }
    clear() {
        this.canvasContext.clear()
    }
    destroy(t) {
        this.runners.destroy.items.reverse(),
        this.emitWithCustomOptions(this.runners.destroy, {
            _view: t
        }),
        super.destroy()
    }
    get plugins() {
        return this._plugin.plugins
    }
    resize(t, e) {
        this._view.resizeView(t, e)
    }
    get width() {
        return this._view.element.width
    }
    get height() {
        return this._view.element.height
    }
    get resolution() {
        return this._view.resolution
    }
    set resolution(t) {
        this._view.resolution = t,
        this.runners.resolutionChange.emit(t)
    }
    get autoDensity() {
        return this._view.autoDensity
    }
    get view() {
        return this._view.element
    }
    get screen() {
        return this._view.screen
    }
    get lastObjectRendered() {
        return this.objectRenderer.lastObjectRendered
    }
    get renderingToScreen() {
        return this.objectRenderer.renderingToScreen
    }
    get clearBeforeRender() {
        return this.background.clearBeforeRender
    }
    get blendModes() {
        return Ce("7.0.0", "renderer.blendModes has been deprecated, please use renderer.canvasContext.blendModes instead"),
        this.canvasContext.blendModes
    }
    get maskManager() {
        return Ce("7.0.0", "renderer.maskManager has been deprecated, please use renderer.mask instead"),
        this.mask
    }
    get refresh() {
        return Ce("7.0.0", "renderer.refresh has been deprecated"),
        !0
    }
    get rootContext() {
        return Ce("7.0.0", "renderer.rootContext has been deprecated, please use renderer.canvasContext.rootContext instead"),
        this.canvasContext.rootContext
    }
    get context() {
        return Ce("7.0.0", "renderer.context has been deprecated, please use renderer.canvasContext.activeContext instead"),
        this.canvasContext.activeContext
    }
    get smoothProperty() {
        return Ce("7.0.0", "renderer.smoothProperty has been deprecated, please use renderer.canvasContext.smoothProperty instead"),
        this.canvasContext.smoothProperty
    }
    setBlendMode(t, e) {
        Ce("7.0.0", "renderer.setBlendMode has been deprecated, use renderer.canvasContext.setBlendMode instead"),
        this.canvasContext.setBlendMode(t, e)
    }
    invalidateBlendMode() {
        Ce("7.0.0", "renderer.invalidateBlendMode has been deprecated, use renderer.canvasContext.invalidateBlendMode instead"),
        this.canvasContext.invalidateBlendMode()
    }
    setContextTransform(t, e, r) {
        Ce("7.0.0", "renderer.setContextTransform has been deprecated, use renderer.canvasContext.setContextTransform instead"),
        this.canvasContext.setContextTransform(t, e, r)
    }
    get backgroundColor() {
        return Ce("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."),
        this.background.color
    }
    set backgroundColor(t) {
        Ce("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."),
        this.background.color = t
    }
    get backgroundAlpha() {
        return Ce("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),
        this.background.alpha
    }
    set backgroundAlpha(t) {
        Ce("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."),
        this.background.alpha = t
    }
    get preserveDrawingBuffer() {
        return Ce("7.0.0", "renderer.preserveDrawingBuffer has been deprecated"),
        !1
    }
    get useContextAlpha() {
        return Ce("7.0.0", "renderer.useContextAlpha has been deprecated"),
        !1
    }
}
;
ra.extension = {
    type: et.Renderer,
    priority: 0
},
ra.__plugins = {},
ra.__systems = {};
let Na = ra;
ot.handleByMap(et.CanvasRendererPlugin, Na.__plugins);
ot.handleByMap(et.CanvasRendererSystem, Na.__systems);
ot.add(Na);
const _e = {
    canvas: null,
    getTintedCanvas: (i, t) => {
        const e = i.texture
          , r = Pt.shared.setValue(t).toHex();
        e.tintCache = e.tintCache || {};
        const s = e.tintCache[r];
        let n;
        if (s) {
            if (s.tintId === e._updateID)
                return e.tintCache[r];
            n = e.tintCache[r]
        } else
            n = nt.ADAPTER.createCanvas();
        return _e.tintMethod(e, t, n),
        n.tintId = e._updateID,
        _e.convertTintToImage || (e.tintCache[r] = n),
        n
    }
    ,
    getTintedPattern: (i, t) => {
        const e = Pt.shared.setValue(t).toHex();
        i.patternCache = i.patternCache || {};
        let r = i.patternCache[e];
        return (r == null ? void 0 : r.tintId) === i._updateID || (_e.canvas || (_e.canvas = nt.ADAPTER.createCanvas()),
        _e.tintMethod(i, t, _e.canvas),
        r = _e.canvas.getContext("2d").createPattern(_e.canvas, "repeat"),
        r.tintId = i._updateID,
        i.patternCache[e] = r),
        r
    }
    ,
    tintWithMultiply: (i, t, e) => {
        const r = e.getContext("2d")
          , s = i._frame.clone()
          , n = i.baseTexture.resolution;
        s.x *= n,
        s.y *= n,
        s.width *= n,
        s.height *= n,
        e.width = Math.ceil(s.width),
        e.height = Math.ceil(s.height),
        r.save(),
        r.fillStyle = Pt.shared.setValue(t).toHex(),
        r.fillRect(0, 0, s.width, s.height),
        r.globalCompositeOperation = "multiply";
        const a = i.baseTexture.getDrawableSource();
        r.drawImage(a, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height),
        r.globalCompositeOperation = "destination-atop",
        r.drawImage(a, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height),
        r.restore()
    }
    ,
    tintWithOverlay: (i, t, e) => {
        const r = e.getContext("2d")
          , s = i._frame.clone()
          , n = i.baseTexture.resolution;
        s.x *= n,
        s.y *= n,
        s.width *= n,
        s.height *= n,
        e.width = Math.ceil(s.width),
        e.height = Math.ceil(s.height),
        r.save(),
        r.globalCompositeOperation = "copy",
        r.fillStyle = `#${`00000${(t | 0).toString(16)}`.slice(-6)}`,
        r.fillRect(0, 0, s.width, s.height),
        r.globalCompositeOperation = "destination-atop",
        r.drawImage(i.baseTexture.getDrawableSource(), s.x, s.y, s.width, s.height, 0, 0, s.width, s.height),
        r.restore()
    }
    ,
    tintWithPerPixel: (i, t, e) => {
        const r = e.getContext("2d")
          , s = i._frame.clone()
          , n = i.baseTexture.resolution;
        s.x *= n,
        s.y *= n,
        s.width *= n,
        s.height *= n,
        e.width = Math.ceil(s.width),
        e.height = Math.ceil(s.height),
        r.save(),
        r.globalCompositeOperation = "copy",
        r.drawImage(i.baseTexture.getDrawableSource(), s.x, s.y, s.width, s.height, 0, 0, s.width, s.height),
        r.restore();
        const [a,o,l] = Pt.shared.setValue(t).toArray()
          , c = r.getImageData(0, 0, s.width, s.height)
          , p = c.data;
        for (let m = 0; m < p.length; m += 4)
            p[m + 0] *= a,
            p[m + 1] *= o,
            p[m + 2] *= l;
        r.putImageData(c, 0, 0)
    }
    ,
    roundColor: i => (vt("7.3.0", "PIXI.canvasUtils.roundColor is deprecated"),
    Pt.shared.setValue(i).round(_e.cacheStepsPerColorChannel).toNumber()),
    cacheStepsPerColorChannel: 8,
    convertTintToImage: !1,
    canUseMultiply: Kd(),
    tintMethod: null
};
_e.tintMethod = _e.canUseMultiply ? _e.tintWithMultiply : _e.tintWithPerPixel;
class ya {
    constructor() {
        this.minX = 1 / 0,
        this.minY = 1 / 0,
        this.maxX = -1 / 0,
        this.maxY = -1 / 0,
        this.rect = null,
        this.updateID = -1
    }
    isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY
    }
    clear() {
        this.minX = 1 / 0,
        this.minY = 1 / 0,
        this.maxX = -1 / 0,
        this.maxY = -1 / 0
    }
    getRectangle(t) {
        return this.minX > this.maxX || this.minY > this.maxY ? At.EMPTY : (t = t || new At(0,0,1,1),
        t.x = this.minX,
        t.y = this.minY,
        t.width = this.maxX - this.minX,
        t.height = this.maxY - this.minY,
        t)
    }
    addPoint(t) {
        this.minX = Math.min(this.minX, t.x),
        this.maxX = Math.max(this.maxX, t.x),
        this.minY = Math.min(this.minY, t.y),
        this.maxY = Math.max(this.maxY, t.y)
    }
    addPointMatrix(t, e) {
        const {a: r, b: s, c: n, d: a, tx: o, ty: l} = t
          , c = r * e.x + n * e.y + o
          , p = s * e.x + a * e.y + l;
        this.minX = Math.min(this.minX, c),
        this.maxX = Math.max(this.maxX, c),
        this.minY = Math.min(this.minY, p),
        this.maxY = Math.max(this.maxY, p)
    }
    addQuad(t) {
        let e = this.minX
          , r = this.minY
          , s = this.maxX
          , n = this.maxY
          , a = t[0]
          , o = t[1];
        e = a < e ? a : e,
        r = o < r ? o : r,
        s = a > s ? a : s,
        n = o > n ? o : n,
        a = t[2],
        o = t[3],
        e = a < e ? a : e,
        r = o < r ? o : r,
        s = a > s ? a : s,
        n = o > n ? o : n,
        a = t[4],
        o = t[5],
        e = a < e ? a : e,
        r = o < r ? o : r,
        s = a > s ? a : s,
        n = o > n ? o : n,
        a = t[6],
        o = t[7],
        e = a < e ? a : e,
        r = o < r ? o : r,
        s = a > s ? a : s,
        n = o > n ? o : n,
        this.minX = e,
        this.minY = r,
        this.maxX = s,
        this.maxY = n
    }
    addFrame(t, e, r, s, n) {
        this.addFrameMatrix(t.worldTransform, e, r, s, n)
    }
    addFrameMatrix(t, e, r, s, n) {
        const a = t.a
          , o = t.b
          , l = t.c
          , c = t.d
          , p = t.tx
          , m = t.ty;
        let f = this.minX
          , v = this.minY
          , _ = this.maxX
          , T = this.maxY
          , A = a * e + l * r + p
          , E = o * e + c * r + m;
        f = A < f ? A : f,
        v = E < v ? E : v,
        _ = A > _ ? A : _,
        T = E > T ? E : T,
        A = a * s + l * r + p,
        E = o * s + c * r + m,
        f = A < f ? A : f,
        v = E < v ? E : v,
        _ = A > _ ? A : _,
        T = E > T ? E : T,
        A = a * e + l * n + p,
        E = o * e + c * n + m,
        f = A < f ? A : f,
        v = E < v ? E : v,
        _ = A > _ ? A : _,
        T = E > T ? E : T,
        A = a * s + l * n + p,
        E = o * s + c * n + m,
        f = A < f ? A : f,
        v = E < v ? E : v,
        _ = A > _ ? A : _,
        T = E > T ? E : T,
        this.minX = f,
        this.minY = v,
        this.maxX = _,
        this.maxY = T
    }
    addVertexData(t, e, r) {
        let s = this.minX
          , n = this.minY
          , a = this.maxX
          , o = this.maxY;
        for (let l = e; l < r; l += 2) {
            const c = t[l]
              , p = t[l + 1];
            s = c < s ? c : s,
            n = p < n ? p : n,
            a = c > a ? c : a,
            o = p > o ? p : o
        }
        this.minX = s,
        this.minY = n,
        this.maxX = a,
        this.maxY = o
    }
    addVertices(t, e, r, s) {
        this.addVerticesMatrix(t.worldTransform, e, r, s)
    }
    addVerticesMatrix(t, e, r, s, n=0, a=n) {
        const o = t.a
          , l = t.b
          , c = t.c
          , p = t.d
          , m = t.tx
          , f = t.ty;
        let v = this.minX
          , _ = this.minY
          , T = this.maxX
          , A = this.maxY;
        for (let E = r; E < s; E += 2) {
            const I = e[E]
              , S = e[E + 1]
              , P = o * I + c * S + m
              , k = p * S + l * I + f;
            v = Math.min(v, P - n),
            T = Math.max(T, P + n),
            _ = Math.min(_, k - a),
            A = Math.max(A, k + a)
        }
        this.minX = v,
        this.minY = _,
        this.maxX = T,
        this.maxY = A
    }
    addBounds(t) {
        const e = this.minX
          , r = this.minY
          , s = this.maxX
          , n = this.maxY;
        this.minX = t.minX < e ? t.minX : e,
        this.minY = t.minY < r ? t.minY : r,
        this.maxX = t.maxX > s ? t.maxX : s,
        this.maxY = t.maxY > n ? t.maxY : n
    }
    addBoundsMask(t, e) {
        const r = t.minX > e.minX ? t.minX : e.minX
          , s = t.minY > e.minY ? t.minY : e.minY
          , n = t.maxX < e.maxX ? t.maxX : e.maxX
          , a = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (r <= n && s <= a) {
            const o = this.minX
              , l = this.minY
              , c = this.maxX
              , p = this.maxY;
            this.minX = r < o ? r : o,
            this.minY = s < l ? s : l,
            this.maxX = n > c ? n : c,
            this.maxY = a > p ? a : p
        }
    }
    addBoundsMatrix(t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
    }
    addBoundsArea(t, e) {
        const r = t.minX > e.x ? t.minX : e.x
          , s = t.minY > e.y ? t.minY : e.y
          , n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width
          , a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (r <= n && s <= a) {
            const o = this.minX
              , l = this.minY
              , c = this.maxX
              , p = this.maxY;
            this.minX = r < o ? r : o,
            this.minY = s < l ? s : l,
            this.maxX = n > c ? n : c,
            this.maxY = a > p ? a : p
        }
    }
    pad(t=0, e=t) {
        this.isEmpty() || (this.minX -= t,
        this.maxX += t,
        this.minY -= e,
        this.maxY += e)
    }
    addFramePad(t, e, r, s, n, a) {
        t -= n,
        e -= a,
        r += n,
        s += a,
        this.minX = this.minX < t ? this.minX : t,
        this.maxX = this.maxX > r ? this.maxX : r,
        this.minY = this.minY < e ? this.minY : e,
        this.maxY = this.maxY > s ? this.maxY : s
    }
}
class re extends vs {
    constructor() {
        super(),
        this.tempDisplayObjectParent = null,
        this.transform = new Fa,
        this.alpha = 1,
        this.visible = !0,
        this.renderable = !0,
        this.cullable = !1,
        this.cullArea = null,
        this.parent = null,
        this.worldAlpha = 1,
        this._lastSortedIndex = 0,
        this._zIndex = 0,
        this.filterArea = null,
        this.filters = null,
        this._enabledFilters = null,
        this._bounds = new ya,
        this._localBounds = null,
        this._boundsID = 0,
        this._boundsRect = null,
        this._localBoundsRect = null,
        this._mask = null,
        this._maskRefCount = 0,
        this._destroyed = !1,
        this.isSprite = !1,
        this.isMask = !1
    }
    static mixin(t) {
        const e = Object.keys(t);
        for (let r = 0; r < e.length; ++r) {
            const s = e[r];
            Object.defineProperty(re.prototype, s, Object.getOwnPropertyDescriptor(t, s))
        }
    }
    get destroyed() {
        return this._destroyed
    }
    _recursivePostUpdateTransform() {
        this.parent ? (this.parent._recursivePostUpdateTransform(),
        this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
    }
    updateTransform() {
        this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        this.worldAlpha = this.alpha * this.parent.worldAlpha
    }
    getBounds(t, e) {
        return t || (this.parent ? (this._recursivePostUpdateTransform(),
        this.updateTransform()) : (this.parent = this._tempDisplayObjectParent,
        this.updateTransform(),
        this.parent = null)),
        this._bounds.updateID !== this._boundsID && (this.calculateBounds(),
        this._bounds.updateID = this._boundsID),
        e || (this._boundsRect || (this._boundsRect = new At),
        e = this._boundsRect),
        this._bounds.getRectangle(e)
    }
    getLocalBounds(t) {
        t || (this._localBoundsRect || (this._localBoundsRect = new At),
        t = this._localBoundsRect),
        this._localBounds || (this._localBounds = new ya);
        const e = this.transform
          , r = this.parent;
        this.parent = null,
        this._tempDisplayObjectParent.worldAlpha = (r == null ? void 0 : r.worldAlpha) ?? 1,
        this.transform = this._tempDisplayObjectParent.transform;
        const s = this._bounds
          , n = this._boundsID;
        this._bounds = this._localBounds;
        const a = this.getBounds(!1, t);
        return this.parent = r,
        this.transform = e,
        this._bounds = s,
        this._bounds.updateID += this._boundsID - n,
        a
    }
    toGlobal(t, e, r=!1) {
        return r || (this._recursivePostUpdateTransform(),
        this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
        this.displayObjectUpdateTransform(),
        this.parent = null)),
        this.worldTransform.apply(t, e)
    }
    toLocal(t, e, r, s) {
        return e && (t = e.toGlobal(t, r, s)),
        s || (this._recursivePostUpdateTransform(),
        this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
        this.displayObjectUpdateTransform(),
        this.parent = null)),
        this.worldTransform.applyInverse(t, r)
    }
    setParent(t) {
        if (!t || !t.addChild)
            throw new Error("setParent: Argument must be a Container");
        return t.addChild(this),
        t
    }
    removeFromParent() {
        var t;
        (t = this.parent) == null || t.removeChild(this)
    }
    setTransform(t=0, e=0, r=1, s=1, n=0, a=0, o=0, l=0, c=0) {
        return this.position.x = t,
        this.position.y = e,
        this.scale.x = r || 1,
        this.scale.y = s || 1,
        this.rotation = n,
        this.skew.x = a,
        this.skew.y = o,
        this.pivot.x = l,
        this.pivot.y = c,
        this
    }
    destroy(t) {
        this.removeFromParent(),
        this._destroyed = !0,
        this.transform = null,
        this.parent = null,
        this._bounds = null,
        this.mask = null,
        this.cullArea = null,
        this.filters = null,
        this.filterArea = null,
        this.hitArea = null,
        this.eventMode = "auto",
        this.interactiveChildren = !1,
        this.emit("destroyed"),
        this.removeAllListeners()
    }
    get _tempDisplayObjectParent() {
        return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new c0),
        this.tempDisplayObjectParent
    }
    enableTempParent() {
        const t = this.parent;
        return this.parent = this._tempDisplayObjectParent,
        t
    }
    disableTempParent(t) {
        this.parent = t
    }
    get x() {
        return this.position.x
    }
    set x(t) {
        this.transform.position.x = t
    }
    get y() {
        return this.position.y
    }
    set y(t) {
        this.transform.position.y = t
    }
    get worldTransform() {
        return this.transform.worldTransform
    }
    get localTransform() {
        return this.transform.localTransform
    }
    get position() {
        return this.transform.position
    }
    set position(t) {
        this.transform.position.copyFrom(t)
    }
    get scale() {
        return this.transform.scale
    }
    set scale(t) {
        this.transform.scale.copyFrom(t)
    }
    get pivot() {
        return this.transform.pivot
    }
    set pivot(t) {
        this.transform.pivot.copyFrom(t)
    }
    get skew() {
        return this.transform.skew
    }
    set skew(t) {
        this.transform.skew.copyFrom(t)
    }
    get rotation() {
        return this.transform.rotation
    }
    set rotation(t) {
        this.transform.rotation = t
    }
    get angle() {
        return this.transform.rotation * iv
    }
    set angle(t) {
        this.transform.rotation = t * sv
    }
    get zIndex() {
        return this._zIndex
    }
    set zIndex(t) {
        this._zIndex !== t && (this._zIndex = t,
        this.parent && (this.parent.sortDirty = !0))
    }
    get worldVisible() {
        let t = this;
        do {
            if (!t.visible)
                return !1;
            t = t.parent
        } while (t);
        return !0
    }
    get mask() {
        return this._mask
    }
    set mask(t) {
        if (this._mask !== t) {
            if (this._mask) {
                const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                e && (e._maskRefCount--,
                e._maskRefCount === 0 && (e.renderable = !0,
                e.isMask = !1))
            }
            if (this._mask = t,
            this._mask) {
                const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                e && (e._maskRefCount === 0 && (e.renderable = !1,
                e.isMask = !0),
                e._maskRefCount++)
            }
        }
    }
}
class c0 extends re {
    constructor() {
        super(...arguments),
        this.sortDirty = null
    }
}
re.prototype.displayObjectUpdateTransform = re.prototype.updateTransform;
const d0 = new Wt;
function f0(i, t) {
    return i.zIndex === t.zIndex ? i._lastSortedIndex - t._lastSortedIndex : i.zIndex - t.zIndex
}
const tf = class Oh extends re {
    constructor() {
        super(),
        this.children = [],
        this.sortableChildren = Oh.defaultSortableChildren,
        this.sortDirty = !1
    }
    onChildrenChange(t) {}
    addChild(...t) {
        if (t.length > 1)
            for (let e = 0; e < t.length; e++)
                this.addChild(t[e]);
        else {
            const e = t[0];
            e.parent && e.parent.removeChild(e),
            e.parent = this,
            this.sortDirty = !0,
            e.transform._parentID = -1,
            this.children.push(e),
            this._boundsID++,
            this.onChildrenChange(this.children.length - 1),
            this.emit("childAdded", e, this, this.children.length - 1),
            e.emit("added", this)
        }
        return t[0]
    }
    addChildAt(t, e) {
        if (e < 0 || e > this.children.length)
            throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);
        return t.parent && t.parent.removeChild(t),
        t.parent = this,
        this.sortDirty = !0,
        t.transform._parentID = -1,
        this.children.splice(e, 0, t),
        this._boundsID++,
        this.onChildrenChange(e),
        t.emit("added", this),
        this.emit("childAdded", t, this, e),
        t
    }
    swapChildren(t, e) {
        if (t === e)
            return;
        const r = this.getChildIndex(t)
          , s = this.getChildIndex(e);
        this.children[r] = e,
        this.children[s] = t,
        this.onChildrenChange(r < s ? r : s)
    }
    getChildIndex(t) {
        const e = this.children.indexOf(t);
        if (e === -1)
            throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
    }
    setChildIndex(t, e) {
        if (e < 0 || e >= this.children.length)
            throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
        const r = this.getChildIndex(t);
        Pi(this.children, r, 1),
        this.children.splice(e, 0, t),
        this.onChildrenChange(e)
    }
    getChildAt(t) {
        if (t < 0 || t >= this.children.length)
            throw new Error(`getChildAt: Index (${t}) does not exist.`);
        return this.children[t]
    }
    removeChild(...t) {
        if (t.length > 1)
            for (let e = 0; e < t.length; e++)
                this.removeChild(t[e]);
        else {
            const e = t[0]
              , r = this.children.indexOf(e);
            if (r === -1)
                return null;
            e.parent = null,
            e.transform._parentID = -1,
            Pi(this.children, r, 1),
            this._boundsID++,
            this.onChildrenChange(r),
            e.emit("removed", this),
            this.emit("childRemoved", e, this, r)
        }
        return t[0]
    }
    removeChildAt(t) {
        const e = this.getChildAt(t);
        return e.parent = null,
        e.transform._parentID = -1,
        Pi(this.children, t, 1),
        this._boundsID++,
        this.onChildrenChange(t),
        e.emit("removed", this),
        this.emit("childRemoved", e, this, t),
        e
    }
    removeChildren(t=0, e=this.children.length) {
        const r = t
          , s = e
          , n = s - r;
        let a;
        if (n > 0 && n <= s) {
            a = this.children.splice(r, n);
            for (let o = 0; o < a.length; ++o)
                a[o].parent = null,
                a[o].transform && (a[o].transform._parentID = -1);
            this._boundsID++,
            this.onChildrenChange(t);
            for (let o = 0; o < a.length; ++o)
                a[o].emit("removed", this),
                this.emit("childRemoved", a[o], this, o);
            return a
        } else if (n === 0 && this.children.length === 0)
            return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    }
    sortChildren() {
        let t = !1;
        for (let e = 0, r = this.children.length; e < r; ++e) {
            const s = this.children[e];
            s._lastSortedIndex = e,
            !t && s.zIndex !== 0 && (t = !0)
        }
        t && this.children.length > 1 && this.children.sort(f0),
        this.sortDirty = !1
    }
    updateTransform() {
        this.sortableChildren && this.sortDirty && this.sortChildren(),
        this._boundsID++,
        this.transform.updateTransform(this.parent.transform),
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (let t = 0, e = this.children.length; t < e; ++t) {
            const r = this.children[t];
            r.visible && r.updateTransform()
        }
    }
    calculateBounds() {
        this._bounds.clear(),
        this._calculateBounds();
        for (let t = 0; t < this.children.length; t++) {
            const e = this.children[t];
            if (!(!e.visible || !e.renderable))
                if (e.calculateBounds(),
                e._mask) {
                    const r = e._mask.isMaskData ? e._mask.maskObject : e._mask;
                    r ? (r.calculateBounds(),
                    this._bounds.addBoundsMask(e._bounds, r._bounds)) : this._bounds.addBounds(e._bounds)
                } else
                    e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
        }
        this._bounds.updateID = this._boundsID
    }
    getLocalBounds(t, e=!1) {
        const r = super.getLocalBounds(t);
        if (!e)
            for (let s = 0, n = this.children.length; s < n; ++s) {
                const a = this.children[s];
                a.visible && a.updateTransform()
            }
        return r
    }
    _calculateBounds() {}
    _renderWithCulling(t) {
        const e = t.renderTexture.sourceFrame;
        if (!(e.width > 0 && e.height > 0))
            return;
        let r, s;
        this.cullArea ? (r = this.cullArea,
        s = this.worldTransform) : this._render !== Oh.prototype._render && (r = this.getBounds(!0));
        const n = t.projection.transform;
        if (n && (s ? (s = d0.copyFrom(s),
        s.prepend(n)) : s = n),
        r && e.intersects(r, s))
            this._render(t);
        else if (this.cullArea)
            return;
        for (let a = 0, o = this.children.length; a < o; ++a) {
            const l = this.children[a]
              , c = l.cullable;
            l.cullable = c || !this.cullArea,
            l.render(t),
            l.cullable = c
        }
    }
    render(t) {
        var e;
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
            if (this._mask || (e = this.filters) != null && e.length)
                this.renderAdvanced(t);
            else if (this.cullable)
                this._renderWithCulling(t);
            else {
                this._render(t);
                for (let r = 0, s = this.children.length; r < s; ++r)
                    this.children[r].render(t)
            }
    }
    renderAdvanced(t) {
        var n, a, o;
        const e = this.filters
          , r = this._mask;
        if (e) {
            this._enabledFilters || (this._enabledFilters = []),
            this._enabledFilters.length = 0;
            for (let l = 0; l < e.length; l++)
                e[l].enabled && this._enabledFilters.push(e[l])
        }
        const s = e && ((n = this._enabledFilters) == null ? void 0 : n.length) || r && (!r.isMaskData || r.enabled && (r.autoDetect || r.type !== fe.NONE));
        if (s && t.batch.flush(),
        e && ((a = this._enabledFilters) != null && a.length) && t.filter.push(this, this._enabledFilters),
        r && t.mask.push(this, this._mask),
        this.cullable)
            this._renderWithCulling(t);
        else {
            this._render(t);
            for (let l = 0, c = this.children.length; l < c; ++l)
                this.children[l].render(t)
        }
        s && t.batch.flush(),
        r && t.mask.pop(this),
        e && ((o = this._enabledFilters) != null && o.length) && t.filter.pop()
    }
    _render(t) {}
    destroy(t) {
        super.destroy(),
        this.sortDirty = !1;
        const e = typeof t == "boolean" ? t : t == null ? void 0 : t.children
          , r = this.removeChildren(0, this.children.length);
        if (e)
            for (let s = 0; s < r.length; ++s)
                r[s].destroy(t)
    }
    get width() {
        return this.scale.x * this.getLocalBounds().width
    }
    set width(t) {
        const e = this.getLocalBounds().width;
        e !== 0 ? this.scale.x = t / e : this.scale.x = 1,
        this._width = t
    }
    get height() {
        return this.scale.y * this.getLocalBounds().height
    }
    set height(t) {
        const e = this.getLocalBounds().height;
        e !== 0 ? this.scale.y = t / e : this.scale.y = 1,
        this._height = t
    }
}
;
tf.defaultSortableChildren = !1;
let Ue = tf;
Ue.prototype.containerUpdateTransform = Ue.prototype.updateTransform;
Object.defineProperties(nt, {
    SORTABLE_CHILDREN: {
        get() {
            return Ue.defaultSortableChildren
        },
        set(i) {
            vt("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"),
            Ue.defaultSortableChildren = i
        }
    }
});
const ks = new Bt
  , p0 = new Uint16Array([0, 1, 2, 0, 2, 3]);
class Lr extends Ue {
    constructor(t) {
        super(),
        this._anchor = new Xr(this._onAnchorUpdate,this,t ? t.defaultAnchor.x : 0,t ? t.defaultAnchor.y : 0),
        this._texture = null,
        this._width = 0,
        this._height = 0,
        this._tintColor = new Pt(16777215),
        this._tintRGB = null,
        this.tint = 16777215,
        this.blendMode = Y.NORMAL,
        this._cachedTint = 16777215,
        this.uvs = null,
        this.texture = t || ut.EMPTY,
        this.vertexData = new Float32Array(8),
        this.vertexTrimmedData = null,
        this._transformID = -1,
        this._textureID = -1,
        this._transformTrimmedID = -1,
        this._textureTrimmedID = -1,
        this.indices = p0,
        this.pluginName = "batch",
        this.isSprite = !0,
        this._roundPixels = nt.ROUND_PIXELS
    }
    _onTextureUpdate() {
        this._textureID = -1,
        this._textureTrimmedID = -1,
        this._cachedTint = 16777215,
        this._width && (this.scale.x = Wr(this.scale.x) * this._width / this._texture.orig.width),
        this._height && (this.scale.y = Wr(this.scale.y) * this._height / this._texture.orig.height)
    }
    _onAnchorUpdate() {
        this._transformID = -1,
        this._transformTrimmedID = -1
    }
    calculateVertices() {
        const t = this._texture;
        if (this._transformID === this.transform._worldID && this._textureID === t._updateID)
            return;
        this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32),
        this._transformID = this.transform._worldID,
        this._textureID = t._updateID;
        const e = this.transform.worldTransform
          , r = e.a
          , s = e.b
          , n = e.c
          , a = e.d
          , o = e.tx
          , l = e.ty
          , c = this.vertexData
          , p = t.trim
          , m = t.orig
          , f = this._anchor;
        let v = 0
          , _ = 0
          , T = 0
          , A = 0;
        if (p ? (_ = p.x - f._x * m.width,
        v = _ + p.width,
        A = p.y - f._y * m.height,
        T = A + p.height) : (_ = -f._x * m.width,
        v = _ + m.width,
        A = -f._y * m.height,
        T = A + m.height),
        c[0] = r * _ + n * A + o,
        c[1] = a * A + s * _ + l,
        c[2] = r * v + n * A + o,
        c[3] = a * A + s * v + l,
        c[4] = r * v + n * T + o,
        c[5] = a * T + s * v + l,
        c[6] = r * _ + n * T + o,
        c[7] = a * T + s * _ + l,
        this._roundPixels) {
            const E = nt.RESOLUTION;
            for (let I = 0; I < c.length; ++I)
                c[I] = Math.round(c[I] * E) / E
        }
    }
    calculateTrimmedVertices() {
        if (!this.vertexTrimmedData)
            this.vertexTrimmedData = new Float32Array(8);
        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID)
            return;
        this._transformTrimmedID = this.transform._worldID,
        this._textureTrimmedID = this._texture._updateID;
        const t = this._texture
          , e = this.vertexTrimmedData
          , r = t.orig
          , s = this._anchor
          , n = this.transform.worldTransform
          , a = n.a
          , o = n.b
          , l = n.c
          , c = n.d
          , p = n.tx
          , m = n.ty
          , f = -s._x * r.width
          , v = f + r.width
          , _ = -s._y * r.height
          , T = _ + r.height;
        if (e[0] = a * f + l * _ + p,
        e[1] = c * _ + o * f + m,
        e[2] = a * v + l * _ + p,
        e[3] = c * _ + o * v + m,
        e[4] = a * v + l * T + p,
        e[5] = c * T + o * v + m,
        e[6] = a * f + l * T + p,
        e[7] = c * T + o * f + m,
        this._roundPixels) {
            const A = nt.RESOLUTION;
            for (let E = 0; E < e.length; ++E)
                e[E] = Math.round(e[E] * A) / A
        }
    }
    _render(t) {
        this.calculateVertices(),
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
        t.plugins[this.pluginName].render(this)
    }
    _calculateBounds() {
        const t = this._texture.trim
          , e = this._texture.orig;
        !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(),
        this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(),
        this._bounds.addQuad(this.vertexTrimmedData))
    }
    getLocalBounds(t) {
        return this.children.length === 0 ? (this._localBounds || (this._localBounds = new ya),
        this._localBounds.minX = this._texture.orig.width * -this._anchor._x,
        this._localBounds.minY = this._texture.orig.height * -this._anchor._y,
        this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x),
        this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y),
        t || (this._localBoundsRect || (this._localBoundsRect = new At),
        t = this._localBoundsRect),
        this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
    }
    containsPoint(t) {
        this.worldTransform.applyInverse(t, ks);
        const e = this._texture.orig.width
          , r = this._texture.orig.height
          , s = -e * this.anchor.x;
        let n = 0;
        return ks.x >= s && ks.x < s + e && (n = -r * this.anchor.y,
        ks.y >= n && ks.y < n + r)
    }
    destroy(t) {
        if (super.destroy(t),
        this._texture.off("update", this._onTextureUpdate, this),
        this._anchor = null,
        typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
            const e = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
            this._texture.destroy(!!e)
        }
        this._texture = null
    }
    static from(t, e) {
        const r = t instanceof ut ? t : ut.from(t, e);
        return new Lr(r)
    }
    set roundPixels(t) {
        this._roundPixels !== t && (this._transformID = -1,
        this._transformTrimmedID = -1),
        this._roundPixels = t
    }
    get roundPixels() {
        return this._roundPixels
    }
    get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width
    }
    set width(t) {
        const e = Wr(this.scale.x) || 1;
        this.scale.x = e * t / this._texture.orig.width,
        this._width = t
    }
    get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height
    }
    set height(t) {
        const e = Wr(this.scale.y) || 1;
        this.scale.y = e * t / this._texture.orig.height,
        this._height = t
    }
    get anchor() {
        return this._anchor
    }
    set anchor(t) {
        this._anchor.copyFrom(t)
    }
    get tint() {
        return this._tintColor.value
    }
    set tint(t) {
        this._tintColor.setValue(t),
        this._tintRGB = this._tintColor.toLittleEndianNumber()
    }
    get tintValue() {
        return this._tintColor.toNumber()
    }
    get texture() {
        return this._texture
    }
    set texture(t) {
        this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this),
        this._texture = t || ut.EMPTY,
        this._cachedTint = 16777215,
        this._textureID = -1,
        this._textureTrimmedID = -1,
        t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
    }
}
const Us = new Bt;
class dl extends Lr {
    constructor(t, e=100, r=100) {
        super(t),
        this.tileTransform = new Fa,
        this._width = e,
        this._height = r,
        this.uvMatrix = this.texture.uvMatrix || new ul(t),
        this.pluginName = "tilingSprite",
        this.uvRespectAnchor = !1
    }
    get clampMargin() {
        return this.uvMatrix.clampMargin
    }
    set clampMargin(t) {
        this.uvMatrix.clampMargin = t,
        this.uvMatrix.update(!0)
    }
    get tileScale() {
        return this.tileTransform.scale
    }
    set tileScale(t) {
        this.tileTransform.scale.copyFrom(t)
    }
    get tilePosition() {
        return this.tileTransform.position
    }
    set tilePosition(t) {
        this.tileTransform.position.copyFrom(t)
    }
    _onTextureUpdate() {
        this.uvMatrix && (this.uvMatrix.texture = this._texture),
        this._cachedTint = 16777215
    }
    _render(t) {
        const e = this._texture;
        !e || !e.valid || (this.tileTransform.updateLocalTransform(),
        this.uvMatrix.update(),
        t.batch.setObjectRenderer(t.plugins[this.pluginName]),
        t.plugins[this.pluginName].render(this))
    }
    _calculateBounds() {
        const t = this._width * -this._anchor._x
          , e = this._height * -this._anchor._y
          , r = this._width * (1 - this._anchor._x)
          , s = this._height * (1 - this._anchor._y);
        this._bounds.addFrame(this.transform, t, e, r, s)
    }
    getLocalBounds(t) {
        return this.children.length === 0 ? (this._bounds.minX = this._width * -this._anchor._x,
        this._bounds.minY = this._height * -this._anchor._y,
        this._bounds.maxX = this._width * (1 - this._anchor._x),
        this._bounds.maxY = this._height * (1 - this._anchor._y),
        t || (this._localBoundsRect || (this._localBoundsRect = new At),
        t = this._localBoundsRect),
        this._bounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
    }
    containsPoint(t) {
        this.worldTransform.applyInverse(t, Us);
        const e = this._width
          , r = this._height
          , s = -e * this.anchor._x;
        if (Us.x >= s && Us.x < s + e) {
            const n = -r * this.anchor._y;
            if (Us.y >= n && Us.y < n + r)
                return !0
        }
        return !1
    }
    destroy(t) {
        super.destroy(t),
        this.tileTransform = null,
        this.uvMatrix = null
    }
    static from(t, e) {
        const r = t instanceof ut ? t : ut.from(t, e);
        return new dl(r,e.width,e.height)
    }
    get width() {
        return this._width
    }
    set width(t) {
        this._width = t
    }
    get height() {
        return this._height
    }
    set height(t) {
        this._height = t
    }
}
var g0 = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`
  , m0 = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`
  , y0 = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`
  , Ju = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`
  , v0 = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const Ln = new Wt;
class ef extends Oa {
    constructor(t) {
        super(t),
        t.runners.contextChange.add(this),
        this.quad = new bd,
        this.state = Nr.for2d()
    }
    contextChange() {
        const t = this.renderer
          , e = {
            globals: t.globalUniforms
        };
        this.simpleShader = Dr.from(Ju, v0, e),
        this.shader = t.context.webGLVersion > 1 ? Dr.from(m0, g0, e) : Dr.from(Ju, y0, e)
    }
    render(t) {
        const e = this.renderer
          , r = this.quad;
        let s = r.vertices;
        s[0] = s[6] = t._width * -t.anchor.x,
        s[1] = s[3] = t._height * -t.anchor.y,
        s[2] = s[4] = t._width * (1 - t.anchor.x),
        s[5] = s[7] = t._height * (1 - t.anchor.y);
        const n = t.uvRespectAnchor ? t.anchor.x : 0
          , a = t.uvRespectAnchor ? t.anchor.y : 0;
        s = r.uvs,
        s[0] = s[6] = -n,
        s[1] = s[3] = -a,
        s[2] = s[4] = 1 - n,
        s[5] = s[7] = 1 - a,
        r.invalidate();
        const o = t._texture
          , l = o.baseTexture
          , c = l.alphaMode > 0
          , p = t.tileTransform.localTransform
          , m = t.uvMatrix;
        let f = l.isPowerOfTwo && o.frame.width === l.width && o.frame.height === l.height;
        f && (l._glTextures[e.CONTEXT_UID] ? f = l.wrapMode !== Yr.CLAMP : l.wrapMode === Yr.CLAMP && (l.wrapMode = Yr.REPEAT));
        const v = f ? this.simpleShader : this.shader
          , _ = o.width
          , T = o.height
          , A = t._width
          , E = t._height;
        Ln.set(p.a * _ / A, p.b * _ / E, p.c * T / A, p.d * T / E, p.tx / A, p.ty / E),
        Ln.invert(),
        f ? Ln.prepend(m.mapCoord) : (v.uniforms.uMapCoord = m.mapCoord.toArray(!0),
        v.uniforms.uClampFrame = m.uClampFrame,
        v.uniforms.uClampOffset = m.uClampOffset),
        v.uniforms.uTransform = Ln.toArray(!0),
        v.uniforms.uColor = Pt.shared.setValue(t.tint).premultiply(t.worldAlpha, c).toArray(v.uniforms.uColor),
        v.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0),
        v.uniforms.uSampler = o,
        e.shader.bind(v),
        e.geometry.bind(r),
        this.state.blendMode = ol(t.blendMode, c),
        e.state.set(this.state),
        e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
    }
}
ef.extension = {
    name: "tilingSprite",
    type: et.RendererPlugin
};
ot.add(ef);
const kn = new Wt
  , Gs = new Wt
  , br = [new Bt, new Bt, new Bt, new Bt];
dl.prototype._renderCanvas = function(i) {
    const t = this._texture;
    if (!t.baseTexture.valid)
        return;
    const e = i.canvasContext.activeContext
      , r = this.worldTransform
      , s = t.baseTexture
      , n = s.getDrawableSource()
      , a = s.resolution;
    if (this._textureID !== this._texture._updateID || this._cachedTint !== this.tintValue) {
        this._textureID = this._texture._updateID;
        const f = new hn(t._frame.width,t._frame.height,a);
        this.tintValue !== 16777215 ? (this._tintedCanvas = _e.getTintedCanvas(this, this.tintValue),
        f.context.drawImage(this._tintedCanvas, 0, 0)) : f.context.drawImage(n, -t._frame.x * a, -t._frame.y * a),
        this._cachedTint = this.tintValue,
        this._canvasPattern = f.context.createPattern(f.canvas, "repeat")
    }
    e.globalAlpha = this.worldAlpha,
    i.canvasContext.setBlendMode(this.blendMode),
    this.tileTransform.updateLocalTransform();
    const o = this.tileTransform.localTransform
      , l = this._width
      , c = this._height;
    kn.identity(),
    Gs.copyFrom(o),
    this.uvRespectAnchor || Gs.translate(-this.anchor.x * l, -this.anchor.y * c),
    Gs.scale(1 / a, 1 / a),
    kn.prepend(Gs),
    kn.prepend(r),
    i.canvasContext.setContextTransform(kn),
    e.fillStyle = this._canvasPattern;
    const p = this.anchor.x * -l
      , m = this.anchor.y * -c;
    br[0].set(p, m),
    br[1].set(p + l, m),
    br[2].set(p + l, m + c),
    br[3].set(p, m + c);
    for (let f = 0; f < 4; f++)
        Gs.applyInverse(br[f], br[f]);
    e.beginPath(),
    e.moveTo(br[0].x, br[0].y);
    for (let f = 1; f < 4; f++)
        e.lineTo(br[f].x, br[f].y);
    e.closePath(),
    e.fill()
}
;
class _0 extends Ue {
    constructor(t=1500, e, r=16384, s=!1) {
        super();
        const n = 16384;
        r > n && (r = n),
        this._properties = [!1, !0, !1, !1, !1],
        this._maxSize = t,
        this._batchSize = r,
        this._buffers = null,
        this._bufferUpdateIDs = [],
        this._updateID = 0,
        this.interactiveChildren = !1,
        this.blendMode = Y.NORMAL,
        this.autoResize = s,
        this.roundPixels = !0,
        this.baseTexture = null,
        this.setProperties(e),
        this._tintColor = new Pt(0),
        this.tintRgb = new Float32Array(3),
        this.tint = 16777215
    }
    setProperties(t) {
        t && (this._properties[0] = "vertices"in t || "scale"in t ? !!t.vertices || !!t.scale : this._properties[0],
        this._properties[1] = "position"in t ? !!t.position : this._properties[1],
        this._properties[2] = "rotation"in t ? !!t.rotation : this._properties[2],
        this._properties[3] = "uvs"in t ? !!t.uvs : this._properties[3],
        this._properties[4] = "tint"in t || "alpha"in t ? !!t.tint || !!t.alpha : this._properties[4])
    }
    updateTransform() {
        this.displayObjectUpdateTransform()
    }
    get tint() {
        return this._tintColor.value
    }
    set tint(t) {
        this._tintColor.setValue(t),
        this._tintColor.toRgbArray(this.tintRgb)
    }
    render(t) {
        !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture,
        this.baseTexture.valid || this.baseTexture.once("update", () => this.onChildrenChange(0))),
        t.batch.setObjectRenderer(t.plugins.particle),
        t.plugins.particle.render(this))
    }
    onChildrenChange(t) {
        const e = Math.floor(t / this._batchSize);
        for (; this._bufferUpdateIDs.length < e; )
            this._bufferUpdateIDs.push(0);
        this._bufferUpdateIDs[e] = ++this._updateID
    }
    dispose() {
        if (this._buffers) {
            for (let t = 0; t < this._buffers.length; ++t)
                this._buffers[t].destroy();
            this._buffers = null
        }
    }
    destroy(t) {
        super.destroy(t),
        this.dispose(),
        this._properties = null,
        this._buffers = null,
        this._bufferUpdateIDs = null
    }
}
class tc {
    constructor(t, e, r) {
        this.geometry = new li,
        this.indexBuffer = null,
        this.size = r,
        this.dynamicProperties = [],
        this.staticProperties = [];
        for (let s = 0; s < t.length; ++s) {
            let n = t[s];
            n = {
                attributeName: n.attributeName,
                size: n.size,
                uploadFunction: n.uploadFunction,
                type: n.type || mt.FLOAT,
                offset: n.offset
            },
            e[s] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
        }
        this.staticStride = 0,
        this.staticBuffer = null,
        this.staticData = null,
        this.staticDataUint32 = null,
        this.dynamicStride = 0,
        this.dynamicBuffer = null,
        this.dynamicData = null,
        this.dynamicDataUint32 = null,
        this._updateID = 0,
        this.initBuffers()
    }
    initBuffers() {
        const t = this.geometry;
        let e = 0;
        this.indexBuffer = new pe(ad(this.size),!0,!0),
        t.addIndex(this.indexBuffer),
        this.dynamicStride = 0;
        for (let a = 0; a < this.dynamicProperties.length; ++a) {
            const o = this.dynamicProperties[a];
            o.offset = e,
            e += o.size,
            this.dynamicStride += o.size
        }
        const r = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(r),
        this.dynamicDataUint32 = new Uint32Array(r),
        this.dynamicBuffer = new pe(this.dynamicData,!1,!1);
        let s = 0;
        this.staticStride = 0;
        for (let a = 0; a < this.staticProperties.length; ++a) {
            const o = this.staticProperties[a];
            o.offset = s,
            s += o.size,
            this.staticStride += o.size
        }
        const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(n),
        this.staticDataUint32 = new Uint32Array(n),
        this.staticBuffer = new pe(this.staticData,!0,!1);
        for (let a = 0; a < this.dynamicProperties.length; ++a) {
            const o = this.dynamicProperties[a];
            t.addAttribute(o.attributeName, this.dynamicBuffer, 0, o.type === mt.UNSIGNED_BYTE, o.type, this.dynamicStride * 4, o.offset * 4)
        }
        for (let a = 0; a < this.staticProperties.length; ++a) {
            const o = this.staticProperties[a];
            t.addAttribute(o.attributeName, this.staticBuffer, 0, o.type === mt.UNSIGNED_BYTE, o.type, this.staticStride * 4, o.offset * 4)
        }
    }
    uploadDynamic(t, e, r) {
        for (let s = 0; s < this.dynamicProperties.length; s++) {
            const n = this.dynamicProperties[s];
            n.uploadFunction(t, e, r, n.type === mt.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
        }
        this.dynamicBuffer._updateID++
    }
    uploadStatic(t, e, r) {
        for (let s = 0; s < this.staticProperties.length; s++) {
            const n = this.staticProperties[s];
            n.uploadFunction(t, e, r, n.type === mt.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
        }
        this.staticBuffer._updateID++
    }
    destroy() {
        this.indexBuffer = null,
        this.dynamicProperties = null,
        this.dynamicBuffer = null,
        this.dynamicData = null,
        this.dynamicDataUint32 = null,
        this.staticProperties = null,
        this.staticBuffer = null,
        this.staticData = null,
        this.staticDataUint32 = null,
        this.geometry.destroy()
    }
}
var x0 = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`
  , b0 = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class rf extends Oa {
    constructor(t) {
        super(t),
        this.shader = null,
        this.properties = null,
        this.tempMatrix = new Wt,
        this.properties = [{
            attributeName: "aVertexPosition",
            size: 2,
            uploadFunction: this.uploadVertices,
            offset: 0
        }, {
            attributeName: "aPositionCoord",
            size: 2,
            uploadFunction: this.uploadPosition,
            offset: 0
        }, {
            attributeName: "aRotation",
            size: 1,
            uploadFunction: this.uploadRotation,
            offset: 0
        }, {
            attributeName: "aTextureCoord",
            size: 2,
            uploadFunction: this.uploadUvs,
            offset: 0
        }, {
            attributeName: "aColor",
            size: 1,
            type: mt.UNSIGNED_BYTE,
            uploadFunction: this.uploadTint,
            offset: 0
        }],
        this.shader = Dr.from(b0, x0, {}),
        this.state = Nr.for2d()
    }
    render(t) {
        const e = t.children
          , r = t._maxSize
          , s = t._batchSize
          , n = this.renderer;
        let a = e.length;
        if (a === 0)
            return;
        a > r && !t.autoResize && (a = r);
        let o = t._buffers;
        o || (o = t._buffers = this.generateBuffers(t));
        const l = e[0]._texture.baseTexture
          , c = l.alphaMode > 0;
        this.state.blendMode = ol(t.blendMode, c),
        n.state.set(this.state);
        const p = n.gl
          , m = t.worldTransform.copyTo(this.tempMatrix);
        m.prepend(n.globalUniforms.uniforms.projectionMatrix),
        this.shader.uniforms.translationMatrix = m.toArray(!0),
        this.shader.uniforms.uColor = Pt.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, c).toArray(this.shader.uniforms.uColor),
        this.shader.uniforms.uSampler = l,
        this.renderer.shader.bind(this.shader);
        let f = !1;
        for (let v = 0, _ = 0; v < a; v += s,
        _ += 1) {
            let T = a - v;
            T > s && (T = s),
            _ >= o.length && o.push(this._generateOneMoreBuffer(t));
            const A = o[_];
            A.uploadDynamic(e, v, T);
            const E = t._bufferUpdateIDs[_] || 0;
            f = f || A._updateID < E,
            f && (A._updateID = t._updateID,
            A.uploadStatic(e, v, T)),
            n.geometry.bind(A.geometry),
            p.drawElements(p.TRIANGLES, T * 6, p.UNSIGNED_SHORT, 0)
        }
    }
    generateBuffers(t) {
        const e = []
          , r = t._maxSize
          , s = t._batchSize
          , n = t._properties;
        for (let a = 0; a < r; a += s)
            e.push(new tc(this.properties,n,s));
        return e
    }
    _generateOneMoreBuffer(t) {
        const e = t._batchSize
          , r = t._properties;
        return new tc(this.properties,r,e)
    }
    uploadVertices(t, e, r, s, n, a) {
        let o = 0
          , l = 0
          , c = 0
          , p = 0;
        for (let m = 0; m < r; ++m) {
            const f = t[e + m]
              , v = f._texture
              , _ = f.scale.x
              , T = f.scale.y
              , A = v.trim
              , E = v.orig;
            A ? (l = A.x - f.anchor.x * E.width,
            o = l + A.width,
            p = A.y - f.anchor.y * E.height,
            c = p + A.height) : (o = E.width * (1 - f.anchor.x),
            l = E.width * -f.anchor.x,
            c = E.height * (1 - f.anchor.y),
            p = E.height * -f.anchor.y),
            s[a] = l * _,
            s[a + 1] = p * T,
            s[a + n] = o * _,
            s[a + n + 1] = p * T,
            s[a + n * 2] = o * _,
            s[a + n * 2 + 1] = c * T,
            s[a + n * 3] = l * _,
            s[a + n * 3 + 1] = c * T,
            a += n * 4
        }
    }
    uploadPosition(t, e, r, s, n, a) {
        for (let o = 0; o < r; o++) {
            const l = t[e + o].position;
            s[a] = l.x,
            s[a + 1] = l.y,
            s[a + n] = l.x,
            s[a + n + 1] = l.y,
            s[a + n * 2] = l.x,
            s[a + n * 2 + 1] = l.y,
            s[a + n * 3] = l.x,
            s[a + n * 3 + 1] = l.y,
            a += n * 4
        }
    }
    uploadRotation(t, e, r, s, n, a) {
        for (let o = 0; o < r; o++) {
            const l = t[e + o].rotation;
            s[a] = l,
            s[a + n] = l,
            s[a + n * 2] = l,
            s[a + n * 3] = l,
            a += n * 4
        }
    }
    uploadUvs(t, e, r, s, n, a) {
        for (let o = 0; o < r; ++o) {
            const l = t[e + o]._texture._uvs;
            l ? (s[a] = l.x0,
            s[a + 1] = l.y0,
            s[a + n] = l.x1,
            s[a + n + 1] = l.y1,
            s[a + n * 2] = l.x2,
            s[a + n * 2 + 1] = l.y2,
            s[a + n * 3] = l.x3,
            s[a + n * 3 + 1] = l.y3,
            a += n * 4) : (s[a] = 0,
            s[a + 1] = 0,
            s[a + n] = 0,
            s[a + n + 1] = 0,
            s[a + n * 2] = 0,
            s[a + n * 2 + 1] = 0,
            s[a + n * 3] = 0,
            s[a + n * 3 + 1] = 0,
            a += n * 4)
        }
    }
    uploadTint(t, e, r, s, n, a) {
        for (let o = 0; o < r; ++o) {
            const l = t[e + o]
              , c = Pt.shared.setValue(l._tintRGB).toPremultiplied(l.alpha, l.texture.baseTexture.alphaMode > 0);
            s[a] = c,
            s[a + n] = c,
            s[a + n * 2] = c,
            s[a + n * 3] = c,
            a += n * 4
        }
    }
    destroy() {
        super.destroy(),
        this.shader && (this.shader.destroy(),
        this.shader = null),
        this.tempMatrix = null
    }
}
rf.extension = {
    name: "particle",
    type: et.RendererPlugin
};
ot.add(rf);
_0.prototype.renderCanvas = function(i) {
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable)
        return;
    const t = i.canvasContext.activeContext
      , e = this.worldTransform;
    let r = !0
      , s = 0
      , n = 0
      , a = 0
      , o = 0;
    i.canvasContext.setBlendMode(this.blendMode),
    t.globalAlpha = this.worldAlpha,
    this.displayObjectUpdateTransform();
    for (let l = 0; l < this.children.length; ++l) {
        const c = this.children[l];
        if (!c.visible || !c._texture.valid)
            continue;
        const p = c._texture.frame;
        if (t.globalAlpha = this.worldAlpha * c.alpha,
        c.rotation % (Math.PI * 2) === 0)
            r && (i.canvasContext.setContextTransform(e, !1, 1),
            r = !1),
            s = c.anchor.x * (-p.width * c.scale.x) + c.position.x + .5,
            n = c.anchor.y * (-p.height * c.scale.y) + c.position.y + .5,
            a = p.width * c.scale.x,
            o = p.height * c.scale.y;
        else {
            r || (r = !0),
            c.displayObjectUpdateTransform();
            const v = c.worldTransform;
            i.canvasContext.setContextTransform(v, this.roundPixels, 1),
            s = c.anchor.x * -p.width + .5,
            n = c.anchor.y * -p.height + .5,
            a = p.width,
            o = p.height
        }
        const m = c._texture.baseTexture.resolution
          , f = i.canvasContext.activeResolution;
        t.drawImage(c._texture.baseTexture.getDrawableSource(), p.x * m, p.y * m, p.width * m, p.height * m, s * f, n * f, a * f, o * f)
    }
}
;
Ue.prototype._renderCanvas = function(i) {}
;
Ue.prototype.renderCanvas = function(i) {
    if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable)) {
        this._mask && i.mask.pushMask(this._mask),
        this._renderCanvas(i);
        for (let t = 0, e = this.children.length; t < e; ++t)
            this.children[t].renderCanvas(i);
        this._mask && i.mask.popMask(i)
    }
}
;
re.prototype.renderCanvas = function(i) {}
;
var La = (i => (i[i.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL",
i[i.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL",
i))(La || {});
const Un = {
    willReadFrequently: !0
}
  , wr = class gt {
    static get experimentalLetterSpacingSupported() {
        let t = gt._experimentalLetterSpacingSupported;
        if (t !== void 0) {
            const e = nt.ADAPTER.getCanvasRenderingContext2D().prototype;
            t = gt._experimentalLetterSpacingSupported = "letterSpacing"in e || "textLetterSpacing"in e
        }
        return t
    }
    constructor(t, e, r, s, n, a, o, l, c) {
        this.text = t,
        this.style = e,
        this.width = r,
        this.height = s,
        this.lines = n,
        this.lineWidths = a,
        this.lineHeight = o,
        this.maxLineWidth = l,
        this.fontProperties = c
    }
    static measureText(t, e, r, s=gt._canvas) {
        r = r ?? e.wordWrap;
        const n = e.toFontString()
          , a = gt.measureFont(n);
        a.fontSize === 0 && (a.fontSize = e.fontSize,
        a.ascent = e.fontSize);
        const o = s.getContext("2d", Un);
        o.font = n;
        const l = (r ? gt.wordWrap(t, e, s) : t).split(/(?:\r\n|\r|\n)/)
          , c = new Array(l.length);
        let p = 0;
        for (let _ = 0; _ < l.length; _++) {
            const T = gt._measureText(l[_], e.letterSpacing, o);
            c[_] = T,
            p = Math.max(p, T)
        }
        let m = p + e.strokeThickness;
        e.dropShadow && (m += e.dropShadowDistance);
        const f = e.lineHeight || a.fontSize + e.strokeThickness;
        let v = Math.max(f, a.fontSize + e.strokeThickness * 2) + e.leading + (l.length - 1) * (f + e.leading);
        return e.dropShadow && (v += e.dropShadowDistance),
        new gt(t,e,m,v,l,c,f + e.leading,p,a)
    }
    static _measureText(t, e, r) {
        let s = !1;
        gt.experimentalLetterSpacingSupported && (gt.experimentalLetterSpacing ? (r.letterSpacing = `${e}px`,
        r.textLetterSpacing = `${e}px`,
        s = !0) : (r.letterSpacing = "0px",
        r.textLetterSpacing = "0px"));
        let n = r.measureText(t).width;
        return n > 0 && (s ? n -= e : n += (gt.graphemeSegmenter(t).length - 1) * e),
        n
    }
    static wordWrap(t, e, r=gt._canvas) {
        const s = r.getContext("2d", Un);
        let n = 0
          , a = ""
          , o = "";
        const l = Object.create(null)
          , {letterSpacing: c, whiteSpace: p} = e
          , m = gt.collapseSpaces(p)
          , f = gt.collapseNewlines(p);
        let v = !m;
        const _ = e.wordWrapWidth + c
          , T = gt.tokenize(t);
        for (let A = 0; A < T.length; A++) {
            let E = T[A];
            if (gt.isNewline(E)) {
                if (!f) {
                    o += gt.addLine(a),
                    v = !m,
                    a = "",
                    n = 0;
                    continue
                }
                E = " "
            }
            if (m) {
                const S = gt.isBreakingSpace(E)
                  , P = gt.isBreakingSpace(a[a.length - 1]);
                if (S && P)
                    continue
            }
            const I = gt.getFromCache(E, c, l, s);
            if (I > _)
                if (a !== "" && (o += gt.addLine(a),
                a = "",
                n = 0),
                gt.canBreakWords(E, e.breakWords)) {
                    const S = gt.wordWrapSplit(E);
                    for (let P = 0; P < S.length; P++) {
                        let k = S[P]
                          , $ = k
                          , d = 1;
                        for (; S[P + d]; ) {
                            const N = S[P + d];
                            if (!gt.canBreakChars($, N, E, P, e.breakWords))
                                k += N;
                            else
                                break;
                            $ = N,
                            d++
                        }
                        P += d - 1;
                        const O = gt.getFromCache(k, c, l, s);
                        O + n > _ && (o += gt.addLine(a),
                        v = !1,
                        a = "",
                        n = 0),
                        a += k,
                        n += O
                    }
                } else {
                    a.length > 0 && (o += gt.addLine(a),
                    a = "",
                    n = 0);
                    const S = A === T.length - 1;
                    o += gt.addLine(E, !S),
                    v = !1,
                    a = "",
                    n = 0
                }
            else
                I + n > _ && (v = !1,
                o += gt.addLine(a),
                a = "",
                n = 0),
                (a.length > 0 || !gt.isBreakingSpace(E) || v) && (a += E,
                n += I)
        }
        return o += gt.addLine(a, !1),
        o
    }
    static addLine(t, e=!0) {
        return t = gt.trimRight(t),
        t = e ? `${t}
` : t,
        t
    }
    static getFromCache(t, e, r, s) {
        let n = r[t];
        return typeof n != "number" && (n = gt._measureText(t, e, s) + e,
        r[t] = n),
        n
    }
    static collapseSpaces(t) {
        return t === "normal" || t === "pre-line"
    }
    static collapseNewlines(t) {
        return t === "normal"
    }
    static trimRight(t) {
        if (typeof t != "string")
            return "";
        for (let e = t.length - 1; e >= 0; e--) {
            const r = t[e];
            if (!gt.isBreakingSpace(r))
                break;
            t = t.slice(0, -1)
        }
        return t
    }
    static isNewline(t) {
        return typeof t != "string" ? !1 : gt._newlines.includes(t.charCodeAt(0))
    }
    static isBreakingSpace(t, e) {
        return typeof t != "string" ? !1 : gt._breakingSpaces.includes(t.charCodeAt(0))
    }
    static tokenize(t) {
        const e = [];
        let r = "";
        if (typeof t != "string")
            return e;
        for (let s = 0; s < t.length; s++) {
            const n = t[s]
              , a = t[s + 1];
            if (gt.isBreakingSpace(n, a) || gt.isNewline(n)) {
                r !== "" && (e.push(r),
                r = ""),
                e.push(n);
                continue
            }
            r += n
        }
        return r !== "" && e.push(r),
        e
    }
    static canBreakWords(t, e) {
        return e
    }
    static canBreakChars(t, e, r, s, n) {
        return !0
    }
    static wordWrapSplit(t) {
        return gt.graphemeSegmenter(t)
    }
    static measureFont(t) {
        if (gt._fonts[t])
            return gt._fonts[t];
        const e = {
            ascent: 0,
            descent: 0,
            fontSize: 0
        }
          , r = gt._canvas
          , s = gt._context;
        s.font = t;
        const n = gt.METRICS_STRING + gt.BASELINE_SYMBOL
          , a = Math.ceil(s.measureText(n).width);
        let o = Math.ceil(s.measureText(gt.BASELINE_SYMBOL).width);
        const l = Math.ceil(gt.HEIGHT_MULTIPLIER * o);
        if (o = o * gt.BASELINE_MULTIPLIER | 0,
        a === 0 || l === 0)
            return gt._fonts[t] = e,
            e;
        r.width = a,
        r.height = l,
        s.fillStyle = "#f00",
        s.fillRect(0, 0, a, l),
        s.font = t,
        s.textBaseline = "alphabetic",
        s.fillStyle = "#000",
        s.fillText(n, 0, o);
        const c = s.getImageData(0, 0, a, l).data
          , p = c.length
          , m = a * 4;
        let f = 0
          , v = 0
          , _ = !1;
        for (f = 0; f < o; ++f) {
            for (let T = 0; T < m; T += 4)
                if (c[v + T] !== 255) {
                    _ = !0;
                    break
                }
            if (!_)
                v += m;
            else
                break
        }
        for (e.ascent = o - f,
        v = p - m,
        _ = !1,
        f = l; f > o; --f) {
            for (let T = 0; T < m; T += 4)
                if (c[v + T] !== 255) {
                    _ = !0;
                    break
                }
            if (!_)
                v -= m;
            else
                break
        }
        return e.descent = f - o,
        e.fontSize = e.ascent + e.descent,
        gt._fonts[t] = e,
        e
    }
    static clearMetrics(t="") {
        t ? delete gt._fonts[t] : gt._fonts = {}
    }
    static get _canvas() {
        var t;
        if (!gt.__canvas) {
            let e;
            try {
                const r = new OffscreenCanvas(0,0);
                if ((t = r.getContext("2d", Un)) != null && t.measureText)
                    return gt.__canvas = r,
                    r;
                e = nt.ADAPTER.createCanvas()
            } catch {
                e = nt.ADAPTER.createCanvas()
            }
            e.width = e.height = 10,
            gt.__canvas = e
        }
        return gt.__canvas
    }
    static get _context() {
        return gt.__context || (gt.__context = gt._canvas.getContext("2d", Un)),
        gt.__context
    }
}
;
wr.METRICS_STRING = "|ÉqÅ",
wr.BASELINE_SYMBOL = "M",
wr.BASELINE_MULTIPLIER = 1.4,
wr.HEIGHT_MULTIPLIER = 2,
wr.graphemeSegmenter = ( () => {
    if (typeof (Intl == null ? void 0 : Intl.Segmenter) == "function") {
        const i = new Intl.Segmenter;
        return t => [...i.segment(t)].map(e => e.segment)
    }
    return i => [...i]
}
)(),
wr.experimentalLetterSpacing = !1,
wr._fonts = {},
wr._newlines = [10, 13],
wr._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
let si = wr;
const T0 = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]
  , sf = class Xs {
    constructor(t) {
        this.styleID = 0,
        this.reset(),
        Uo(this, t, t)
    }
    clone() {
        const t = {};
        return Uo(t, this, Xs.defaultStyle),
        new Xs(t)
    }
    reset() {
        Uo(this, Xs.defaultStyle, Xs.defaultStyle)
    }
    get align() {
        return this._align
    }
    set align(t) {
        this._align !== t && (this._align = t,
        this.styleID++)
    }
    get breakWords() {
        return this._breakWords
    }
    set breakWords(t) {
        this._breakWords !== t && (this._breakWords = t,
        this.styleID++)
    }
    get dropShadow() {
        return this._dropShadow
    }
    set dropShadow(t) {
        this._dropShadow !== t && (this._dropShadow = t,
        this.styleID++)
    }
    get dropShadowAlpha() {
        return this._dropShadowAlpha
    }
    set dropShadowAlpha(t) {
        this._dropShadowAlpha !== t && (this._dropShadowAlpha = t,
        this.styleID++)
    }
    get dropShadowAngle() {
        return this._dropShadowAngle
    }
    set dropShadowAngle(t) {
        this._dropShadowAngle !== t && (this._dropShadowAngle = t,
        this.styleID++)
    }
    get dropShadowBlur() {
        return this._dropShadowBlur
    }
    set dropShadowBlur(t) {
        this._dropShadowBlur !== t && (this._dropShadowBlur = t,
        this.styleID++)
    }
    get dropShadowColor() {
        return this._dropShadowColor
    }
    set dropShadowColor(t) {
        const e = ko(t);
        this._dropShadowColor !== e && (this._dropShadowColor = e,
        this.styleID++)
    }
    get dropShadowDistance() {
        return this._dropShadowDistance
    }
    set dropShadowDistance(t) {
        this._dropShadowDistance !== t && (this._dropShadowDistance = t,
        this.styleID++)
    }
    get fill() {
        return this._fill
    }
    set fill(t) {
        const e = ko(t);
        this._fill !== e && (this._fill = e,
        this.styleID++)
    }
    get fillGradientType() {
        return this._fillGradientType
    }
    set fillGradientType(t) {
        this._fillGradientType !== t && (this._fillGradientType = t,
        this.styleID++)
    }
    get fillGradientStops() {
        return this._fillGradientStops
    }
    set fillGradientStops(t) {
        w0(this._fillGradientStops, t) || (this._fillGradientStops = t,
        this.styleID++)
    }
    get fontFamily() {
        return this._fontFamily
    }
    set fontFamily(t) {
        this.fontFamily !== t && (this._fontFamily = t,
        this.styleID++)
    }
    get fontSize() {
        return this._fontSize
    }
    set fontSize(t) {
        this._fontSize !== t && (this._fontSize = t,
        this.styleID++)
    }
    get fontStyle() {
        return this._fontStyle
    }
    set fontStyle(t) {
        this._fontStyle !== t && (this._fontStyle = t,
        this.styleID++)
    }
    get fontVariant() {
        return this._fontVariant
    }
    set fontVariant(t) {
        this._fontVariant !== t && (this._fontVariant = t,
        this.styleID++)
    }
    get fontWeight() {
        return this._fontWeight
    }
    set fontWeight(t) {
        this._fontWeight !== t && (this._fontWeight = t,
        this.styleID++)
    }
    get letterSpacing() {
        return this._letterSpacing
    }
    set letterSpacing(t) {
        this._letterSpacing !== t && (this._letterSpacing = t,
        this.styleID++)
    }
    get lineHeight() {
        return this._lineHeight
    }
    set lineHeight(t) {
        this._lineHeight !== t && (this._lineHeight = t,
        this.styleID++)
    }
    get leading() {
        return this._leading
    }
    set leading(t) {
        this._leading !== t && (this._leading = t,
        this.styleID++)
    }
    get lineJoin() {
        return this._lineJoin
    }
    set lineJoin(t) {
        this._lineJoin !== t && (this._lineJoin = t,
        this.styleID++)
    }
    get miterLimit() {
        return this._miterLimit
    }
    set miterLimit(t) {
        this._miterLimit !== t && (this._miterLimit = t,
        this.styleID++)
    }
    get padding() {
        return this._padding
    }
    set padding(t) {
        this._padding !== t && (this._padding = t,
        this.styleID++)
    }
    get stroke() {
        return this._stroke
    }
    set stroke(t) {
        const e = ko(t);
        this._stroke !== e && (this._stroke = e,
        this.styleID++)
    }
    get strokeThickness() {
        return this._strokeThickness
    }
    set strokeThickness(t) {
        this._strokeThickness !== t && (this._strokeThickness = t,
        this.styleID++)
    }
    get textBaseline() {
        return this._textBaseline
    }
    set textBaseline(t) {
        this._textBaseline !== t && (this._textBaseline = t,
        this.styleID++)
    }
    get trim() {
        return this._trim
    }
    set trim(t) {
        this._trim !== t && (this._trim = t,
        this.styleID++)
    }
    get whiteSpace() {
        return this._whiteSpace
    }
    set whiteSpace(t) {
        this._whiteSpace !== t && (this._whiteSpace = t,
        this.styleID++)
    }
    get wordWrap() {
        return this._wordWrap
    }
    set wordWrap(t) {
        this._wordWrap !== t && (this._wordWrap = t,
        this.styleID++)
    }
    get wordWrapWidth() {
        return this._wordWrapWidth
    }
    set wordWrapWidth(t) {
        this._wordWrapWidth !== t && (this._wordWrapWidth = t,
        this.styleID++)
    }
    toFontString() {
        const t = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
        let e = this.fontFamily;
        Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
        for (let r = e.length - 1; r >= 0; r--) {
            let s = e[r].trim();
            !/([\"\'])[^\'\"]+\1/.test(s) && !T0.includes(s) && (s = `"${s}"`),
            e[r] = s
        }
        return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`
    }
}
;
sf.defaultStyle = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fillGradientType: La.LINEAR_VERTICAL,
    fillGradientStops: [],
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    leading: 0,
    letterSpacing: 0,
    lineHeight: 0,
    lineJoin: "miter",
    miterLimit: 10,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    textBaseline: "alphabetic",
    trim: !1,
    whiteSpace: "pre",
    wordWrap: !1,
    wordWrapWidth: 100
};
let ui = sf;
function ko(i) {
    const t = Pt.shared
      , e = r => {
        const s = t.setValue(r);
        return s.alpha === 1 ? s.toHex() : s.toRgbaString()
    }
    ;
    return Array.isArray(i) ? i.map(e) : e(i)
}
function w0(i, t) {
    if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length)
        return !1;
    for (let e = 0; e < i.length; ++e)
        if (i[e] !== t[e])
            return !1;
    return !0
}
function Uo(i, t, e) {
    for (const r in e)
        Array.isArray(t[r]) ? i[r] = t[r].slice() : i[r] = t[r]
}
const E0 = {
    texture: !0,
    children: !1,
    baseTexture: !0
}
  , nf = class Nh extends Lr {
    constructor(t, e, r) {
        let s = !1;
        r || (r = nt.ADAPTER.createCanvas(),
        s = !0),
        r.width = 3,
        r.height = 3;
        const n = ut.from(r);
        n.orig = new At,
        n.trim = new At,
        super(n),
        this._ownCanvas = s,
        this.canvas = r,
        this.context = r.getContext("2d", {
            willReadFrequently: !0
        }),
        this._resolution = Nh.defaultResolution ?? nt.RESOLUTION,
        this._autoResolution = Nh.defaultAutoResolution,
        this._text = null,
        this._style = null,
        this._styleListener = null,
        this._font = "",
        this.text = t,
        this.style = e,
        this.localStyleID = -1
    }
    static get experimentalLetterSpacing() {
        return si.experimentalLetterSpacing
    }
    static set experimentalLetterSpacing(t) {
        vt("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"),
        si.experimentalLetterSpacing = t
    }
    updateText(t) {
        const e = this._style;
        if (this.localStyleID !== e.styleID && (this.dirty = !0,
        this.localStyleID = e.styleID),
        !this.dirty && t)
            return;
        this._font = this._style.toFontString();
        const r = this.context
          , s = si.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas)
          , n = s.width
          , a = s.height
          , o = s.lines
          , l = s.lineHeight
          , c = s.lineWidths
          , p = s.maxLineWidth
          , m = s.fontProperties;
        this.canvas.width = Math.ceil(Math.ceil(Math.max(1, n) + e.padding * 2) * this._resolution),
        this.canvas.height = Math.ceil(Math.ceil(Math.max(1, a) + e.padding * 2) * this._resolution),
        r.scale(this._resolution, this._resolution),
        r.clearRect(0, 0, this.canvas.width, this.canvas.height),
        r.font = this._font,
        r.lineWidth = e.strokeThickness,
        r.textBaseline = e.textBaseline,
        r.lineJoin = e.lineJoin,
        r.miterLimit = e.miterLimit;
        let f, v;
        const _ = e.dropShadow ? 2 : 1;
        for (let T = 0; T < _; ++T) {
            const A = e.dropShadow && T === 0
              , E = A ? Math.ceil(Math.max(1, a) + e.padding * 2) : 0
              , I = E * this._resolution;
            if (A) {
                r.fillStyle = "black",
                r.strokeStyle = "black";
                const P = e.dropShadowColor
                  , k = e.dropShadowBlur * this._resolution
                  , $ = e.dropShadowDistance * this._resolution;
                r.shadowColor = Pt.shared.setValue(P).setAlpha(e.dropShadowAlpha).toRgbaString(),
                r.shadowBlur = k,
                r.shadowOffsetX = Math.cos(e.dropShadowAngle) * $,
                r.shadowOffsetY = Math.sin(e.dropShadowAngle) * $ + I
            } else
                r.fillStyle = this._generateFillStyle(e, o, s),
                r.strokeStyle = e.stroke,
                r.shadowColor = "black",
                r.shadowBlur = 0,
                r.shadowOffsetX = 0,
                r.shadowOffsetY = 0;
            let S = (l - m.fontSize) / 2;
            l - m.fontSize < 0 && (S = 0);
            for (let P = 0; P < o.length; P++)
                f = e.strokeThickness / 2,
                v = e.strokeThickness / 2 + P * l + m.ascent + S,
                e.align === "right" ? f += p - c[P] : e.align === "center" && (f += (p - c[P]) / 2),
                e.stroke && e.strokeThickness && this.drawLetterSpacing(o[P], f + e.padding, v + e.padding - E, !0),
                e.fill && this.drawLetterSpacing(o[P], f + e.padding, v + e.padding - E)
        }
        this.updateTexture()
    }
    drawLetterSpacing(t, e, r, s=!1) {
        const n = this._style.letterSpacing;
        let a = !1;
        if (si.experimentalLetterSpacingSupported && (si.experimentalLetterSpacing ? (this.context.letterSpacing = `${n}px`,
        this.context.textLetterSpacing = `${n}px`,
        a = !0) : (this.context.letterSpacing = "0px",
        this.context.textLetterSpacing = "0px")),
        n === 0 || a) {
            s ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r);
            return
        }
        let o = e;
        const l = si.graphemeSegmenter(t);
        let c = this.context.measureText(t).width
          , p = 0;
        for (let m = 0; m < l.length; ++m) {
            const f = l[m];
            s ? this.context.strokeText(f, o, r) : this.context.fillText(f, o, r);
            let v = "";
            for (let _ = m + 1; _ < l.length; ++_)
                v += l[_];
            p = this.context.measureText(v).width,
            o += c - p + n,
            c = p
        }
    }
    updateTexture() {
        const t = this.canvas;
        if (this._style.trim) {
            const a = hd(t);
            a.data && (t.width = a.width,
            t.height = a.height,
            this.context.putImageData(a.data, 0, 0))
        }
        const e = this._texture
          , r = this._style
          , s = r.trim ? 0 : r.padding
          , n = e.baseTexture;
        e.trim.width = e._frame.width = t.width / this._resolution,
        e.trim.height = e._frame.height = t.height / this._resolution,
        e.trim.x = -s,
        e.trim.y = -s,
        e.orig.width = e._frame.width - s * 2,
        e.orig.height = e._frame.height - s * 2,
        this._onTextureUpdate(),
        n.setRealSize(t.width, t.height, this._resolution),
        e.updateUvs(),
        this.dirty = !1
    }
    _render(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution,
        this.dirty = !0),
        this.updateText(!0),
        super._render(t)
    }
    updateTransform() {
        this.updateText(!0),
        super.updateTransform()
    }
    getBounds(t, e) {
        return this.updateText(!0),
        this._textureID === -1 && (t = !1),
        super.getBounds(t, e)
    }
    getLocalBounds(t) {
        return this.updateText(!0),
        super.getLocalBounds.call(this, t)
    }
    _calculateBounds() {
        this.calculateVertices(),
        this._bounds.addQuad(this.vertexData)
    }
    _generateFillStyle(t, e, r) {
        const s = t.fill;
        if (Array.isArray(s)) {
            if (s.length === 1)
                return s[0]
        } else
            return s;
        let n;
        const a = t.dropShadow ? t.dropShadowDistance : 0
          , o = t.padding || 0
          , l = this.canvas.width / this._resolution - a - o * 2
          , c = this.canvas.height / this._resolution - a - o * 2
          , p = s.slice()
          , m = t.fillGradientStops.slice();
        if (!m.length) {
            const f = p.length + 1;
            for (let v = 1; v < f; ++v)
                m.push(v / f)
        }
        if (p.unshift(s[0]),
        m.unshift(0),
        p.push(s[s.length - 1]),
        m.push(1),
        t.fillGradientType === La.LINEAR_VERTICAL) {
            n = this.context.createLinearGradient(l / 2, o, l / 2, c + o);
            const f = r.fontProperties.fontSize + t.strokeThickness;
            for (let v = 0; v < e.length; v++) {
                const _ = r.lineHeight * (v - 1) + f
                  , T = r.lineHeight * v;
                let A = T;
                v > 0 && _ > T && (A = (T + _) / 2);
                const E = T + f
                  , I = r.lineHeight * (v + 1);
                let S = E;
                v + 1 < e.length && I < E && (S = (E + I) / 2);
                const P = (S - A) / c;
                for (let k = 0; k < p.length; k++) {
                    let $ = 0;
                    typeof m[k] == "number" ? $ = m[k] : $ = k / p.length;
                    let d = Math.min(1, Math.max(0, A / c + $ * P));
                    d = Number(d.toFixed(5)),
                    n.addColorStop(d, p[k])
                }
            }
        } else {
            n = this.context.createLinearGradient(o, c / 2, l + o, c / 2);
            const f = p.length + 1;
            let v = 1;
            for (let _ = 0; _ < p.length; _++) {
                let T;
                typeof m[_] == "number" ? T = m[_] : T = v / f,
                n.addColorStop(T, p[_]),
                v++
            }
        }
        return n
    }
    destroy(t) {
        typeof t == "boolean" && (t = {
            children: t
        }),
        t = Object.assign({}, E0, t),
        super.destroy(t),
        this._ownCanvas && (this.canvas.height = this.canvas.width = 0),
        this.context = null,
        this.canvas = null,
        this._style = null
    }
    get width() {
        return this.updateText(!0),
        Math.abs(this.scale.x) * this._texture.orig.width
    }
    set width(t) {
        this.updateText(!0);
        const e = Wr(this.scale.x) || 1;
        this.scale.x = e * t / this._texture.orig.width,
        this._width = t
    }
    get height() {
        return this.updateText(!0),
        Math.abs(this.scale.y) * this._texture.orig.height
    }
    set height(t) {
        this.updateText(!0);
        const e = Wr(this.scale.y) || 1;
        this.scale.y = e * t / this._texture.orig.height,
        this._height = t
    }
    get style() {
        return this._style
    }
    set style(t) {
        t = t || {},
        t instanceof ui ? this._style = t : this._style = new ui(t),
        this.localStyleID = -1,
        this.dirty = !0
    }
    get text() {
        return this._text
    }
    set text(t) {
        t = String(t ?? ""),
        this._text !== t && (this._text = t,
        this.dirty = !0)
    }
    get resolution() {
        return this._resolution
    }
    set resolution(t) {
        this._autoResolution = !1,
        this._resolution !== t && (this._resolution = t,
        this.dirty = !0)
    }
}
;
nf.defaultAutoResolution = !0;
let fl = nf;
fl.prototype._renderCanvas = function(i) {
    this._autoResolution && this._resolution !== i.resolution && (this._resolution = i.resolution,
    this.dirty = !0),
    this.updateText(!0),
    Lr.prototype._renderCanvas.call(this, i)
}
;
const af = new Wt;
re.prototype._cacheAsBitmap = !1;
re.prototype._cacheData = null;
re.prototype._cacheAsBitmapResolution = null;
re.prototype._cacheAsBitmapMultisample = null;
class A0 {
    constructor() {
        this.textureCacheId = null,
        this.originalRender = null,
        this.originalRenderCanvas = null,
        this.originalCalculateBounds = null,
        this.originalGetLocalBounds = null,
        this.originalUpdateTransform = null,
        this.originalDestroy = null,
        this.originalMask = null,
        this.originalFilterArea = null,
        this.originalContainsPoint = null,
        this.sprite = null
    }
}
Object.defineProperties(re.prototype, {
    cacheAsBitmapResolution: {
        get() {
            return this._cacheAsBitmapResolution
        },
        set(i) {
            i !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = i,
            this.cacheAsBitmap && (this.cacheAsBitmap = !1,
            this.cacheAsBitmap = !0))
        }
    },
    cacheAsBitmapMultisample: {
        get() {
            return this._cacheAsBitmapMultisample
        },
        set(i) {
            i !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = i,
            this.cacheAsBitmap && (this.cacheAsBitmap = !1,
            this.cacheAsBitmap = !0))
        }
    },
    cacheAsBitmap: {
        get() {
            return this._cacheAsBitmap
        },
        set(i) {
            if (this._cacheAsBitmap === i)
                return;
            this._cacheAsBitmap = i;
            let t;
            i ? (this._cacheData || (this._cacheData = new A0),
            t = this._cacheData,
            t.originalRender = this.render,
            t.originalRenderCanvas = this.renderCanvas,
            t.originalUpdateTransform = this.updateTransform,
            t.originalCalculateBounds = this.calculateBounds,
            t.originalGetLocalBounds = this.getLocalBounds,
            t.originalDestroy = this.destroy,
            t.originalContainsPoint = this.containsPoint,
            t.originalMask = this._mask,
            t.originalFilterArea = this.filterArea,
            this.render = this._renderCached,
            this.renderCanvas = this._renderCachedCanvas,
            this.destroy = this._cacheAsBitmapDestroy) : (t = this._cacheData,
            t.sprite && this._destroyCachedDisplayObject(),
            this.render = t.originalRender,
            this.renderCanvas = t.originalRenderCanvas,
            this.calculateBounds = t.originalCalculateBounds,
            this.getLocalBounds = t.originalGetLocalBounds,
            this.destroy = t.originalDestroy,
            this.updateTransform = t.originalUpdateTransform,
            this.containsPoint = t.originalContainsPoint,
            this._mask = t.originalMask,
            this.filterArea = t.originalFilterArea)
        }
    }
});
re.prototype._renderCached = function(i) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(i),
    this._cacheData.sprite.transform._worldID = this.transform._worldID,
    this._cacheData.sprite.worldAlpha = this.worldAlpha,
    this._cacheData.sprite._render(i))
}
;
re.prototype._initCachedDisplayObject = function(i) {
    var f, v;
    if ((f = this._cacheData) != null && f.sprite)
        return;
    const t = this.alpha;
    this.alpha = 1,
    i.batch.flush();
    const e = this.getLocalBounds(new At, !0);
    if ((v = this.filters) != null && v.length) {
        const _ = this.filters[0].padding;
        e.pad(_)
    }
    const r = this.cacheAsBitmapResolution || i.resolution;
    e.ceil(r),
    e.width = Math.max(e.width, 1 / r),
    e.height = Math.max(e.height, 1 / r);
    const s = i.renderTexture.current
      , n = i.renderTexture.sourceFrame.clone()
      , a = i.renderTexture.destinationFrame.clone()
      , o = i.projection.transform
      , l = Or.create({
        width: e.width,
        height: e.height,
        resolution: r,
        multisample: this.cacheAsBitmapMultisample ?? i.multisample
    })
      , c = `cacheAsBitmap_${hi()}`;
    this._cacheData.textureCacheId = c,
    Tt.addToCache(l.baseTexture, c),
    ut.addToCache(l, c);
    const p = this.transform.localTransform.copyTo(af).invert().translate(-e.x, -e.y);
    this.render = this._cacheData.originalRender,
    i.render(this, {
        renderTexture: l,
        clear: !0,
        transform: p,
        skipUpdateTransform: !1
    }),
    i.framebuffer.blit(),
    i.projection.transform = o,
    i.renderTexture.bind(s, n, a),
    this.render = this._renderCached,
    this.updateTransform = this.displayObjectUpdateTransform,
    this.calculateBounds = this._calculateCachedBounds,
    this.getLocalBounds = this._getCachedLocalBounds,
    this._mask = null,
    this.filterArea = null,
    this.alpha = t;
    const m = new Lr(l);
    m.transform.worldTransform = this.transform.worldTransform,
    m.anchor.x = -(e.x / e.width),
    m.anchor.y = -(e.y / e.height),
    m.alpha = t,
    m._bounds = this._bounds,
    this._cacheData.sprite = m,
    this.transform._parentID = -1,
    this.parent ? this.updateTransform() : (this.enableTempParent(),
    this.updateTransform(),
    this.disableTempParent(null)),
    this.containsPoint = m.containsPoint.bind(m)
}
;
re.prototype._renderCachedCanvas = function(i) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(i),
    this._cacheData.sprite.worldAlpha = this.worldAlpha,
    this._cacheData.sprite._renderCanvas(i))
}
;
re.prototype._initCachedDisplayObjectCanvas = function(i) {
    var p;
    if ((p = this._cacheData) != null && p.sprite)
        return;
    const t = this.getLocalBounds(new At, !0)
      , e = this.alpha;
    this.alpha = 1;
    const r = i.canvasContext.activeContext
      , s = i._projTransform
      , n = this.cacheAsBitmapResolution || i.resolution;
    t.ceil(n),
    t.width = Math.max(t.width, 1 / n),
    t.height = Math.max(t.height, 1 / n);
    const a = Or.create({
        width: t.width,
        height: t.height,
        resolution: n
    })
      , o = `cacheAsBitmap_${hi()}`;
    this._cacheData.textureCacheId = o,
    Tt.addToCache(a.baseTexture, o),
    ut.addToCache(a, o);
    const l = af;
    this.transform.localTransform.copyTo(l),
    l.invert(),
    l.tx -= t.x,
    l.ty -= t.y,
    this.renderCanvas = this._cacheData.originalRenderCanvas,
    i.render(this, {
        renderTexture: a,
        clear: !0,
        transform: l,
        skipUpdateTransform: !1
    }),
    i.canvasContext.activeContext = r,
    i._projTransform = s,
    this.renderCanvas = this._renderCachedCanvas,
    this.updateTransform = this.displayObjectUpdateTransform,
    this.calculateBounds = this._calculateCachedBounds,
    this.getLocalBounds = this._getCachedLocalBounds,
    this._mask = null,
    this.filterArea = null,
    this.alpha = e;
    const c = new Lr(a);
    c.transform.worldTransform = this.transform.worldTransform,
    c.anchor.x = -(t.x / t.width),
    c.anchor.y = -(t.y / t.height),
    c.alpha = e,
    c._bounds = this._bounds,
    this._cacheData.sprite = c,
    this.transform._parentID = -1,
    this.parent ? this.updateTransform() : (this.parent = i._tempDisplayObjectParent,
    this.updateTransform(),
    this.parent = null),
    this.containsPoint = c.containsPoint.bind(c)
}
;
re.prototype._calculateCachedBounds = function() {
    this._bounds.clear(),
    this._cacheData.sprite.transform._worldID = this.transform._worldID,
    this._cacheData.sprite._calculateBounds(),
    this._bounds.updateID = this._boundsID
}
;
re.prototype._getCachedLocalBounds = function() {
    return this._cacheData.sprite.getLocalBounds(null)
}
;
re.prototype._destroyCachedDisplayObject = function() {
    this._cacheData.sprite._texture.destroy(!0),
    this._cacheData.sprite = null,
    Tt.removeFromCache(this._cacheData.textureCacheId),
    ut.removeFromCache(this._cacheData.textureCacheId),
    this._cacheData.textureCacheId = null
}
;
re.prototype._cacheAsBitmapDestroy = function(i) {
    this.cacheAsBitmap = !1,
    this.destroy(i)
}
;
re.prototype.name = null;
Ue.prototype.getChildByName = function(i, t) {
    for (let e = 0, r = this.children.length; e < r; e++)
        if (this.children[e].name === i)
            return this.children[e];
    if (t)
        for (let e = 0, r = this.children.length; e < r; e++) {
            const s = this.children[e];
            if (!s.getChildByName)
                continue;
            const n = s.getChildByName(i, !0);
            if (n)
                return n
        }
    return null
}
;
re.prototype.getGlobalPosition = function(i=new Bt, t=!1) {
    return this.parent ? this.parent.toGlobal(this.position, i, t) : (i.x = this.position.x,
    i.y = this.position.y),
    i
}
;
var S0 = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class C0 extends De {
    constructor(t=1) {
        super(s0, S0, {
            uAlpha: 1
        }),
        this.alpha = t
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
}
const I0 = {
    5: [.153388, .221461, .250301],
    7: [.071303, .131514, .189879, .214607],
    9: [.028532, .067234, .124009, .179044, .20236],
    11: [.0093, .028002, .065984, .121703, .175713, .198596],
    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
}
  , R0 = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
`);
function P0(i) {
    const t = I0[i]
      , e = t.length;
    let r = R0
      , s = "";
    const n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
    let a;
    for (let o = 0; o < i; o++) {
        let l = n.replace("%index%", o.toString());
        a = o,
        o >= e && (a = i - o - 1),
        l = l.replace("%value%", t[a].toString()),
        s += l,
        s += `
`
    }
    return r = r.replace("%blur%", s),
    r = r.replace("%size%", i.toString()),
    r
}
const M0 = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;
function D0(i, t) {
    const e = Math.ceil(i / 2);
    let r = M0, s = "", n;
    t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
    for (let a = 0; a < i; a++) {
        let o = n.replace("%index%", a.toString());
        o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`),
        s += o,
        s += `
`
    }
    return r = r.replace("%blur%", s),
    r = r.replace("%size%", i.toString()),
    r
}
class Lh extends De {
    constructor(t, e=8, r=4, s=De.defaultResolution, n=5) {
        const a = D0(n, t)
          , o = P0(n);
        super(a, o),
        this.horizontal = t,
        this.resolution = s,
        this._quality = 0,
        this.quality = r,
        this.blur = e
    }
    apply(t, e, r, s) {
        if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height),
        this.uniforms.strength *= this.strength,
        this.uniforms.strength /= this.passes,
        this.passes === 1)
            t.applyFilter(this, e, r, s);
        else {
            const n = t.getFilterTexture()
              , a = t.renderer;
            let o = e
              , l = n;
            this.state.blend = !1,
            t.applyFilter(this, o, l, Cr.CLEAR);
            for (let c = 1; c < this.passes - 1; c++) {
                t.bindAndClear(o, Cr.BLIT),
                this.uniforms.uSampler = l;
                const p = l;
                l = o,
                o = p,
                a.shader.bind(this),
                a.geometry.draw(5)
            }
            this.state.blend = !0,
            t.applyFilter(this, l, r, s),
            t.returnFilterTexture(n)
        }
    }
    get blur() {
        return this.strength
    }
    set blur(t) {
        this.padding = 1 + Math.abs(t) * 2,
        this.strength = t
    }
    get quality() {
        return this._quality
    }
    set quality(t) {
        this._quality = t,
        this.passes = t
    }
}
class B0 extends De {
    constructor(t=8, e=4, r=De.defaultResolution, s=5) {
        super(),
        this._repeatEdgePixels = !1,
        this.blurXFilter = new Lh(!0,t,e,r,s),
        this.blurYFilter = new Lh(!1,t,e,r,s),
        this.resolution = r,
        this.quality = e,
        this.blur = t,
        this.repeatEdgePixels = !1
    }
    apply(t, e, r, s) {
        const n = Math.abs(this.blurXFilter.strength)
          , a = Math.abs(this.blurYFilter.strength);
        if (n && a) {
            const o = t.getFilterTexture();
            this.blurXFilter.apply(t, e, o, Cr.CLEAR),
            this.blurYFilter.apply(t, o, r, s),
            t.returnFilterTexture(o)
        } else
            a ? this.blurYFilter.apply(t, e, r, s) : this.blurXFilter.apply(t, e, r, s)
    }
    updatePadding() {
        this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2
    }
    get blur() {
        return this.blurXFilter.blur
    }
    set blur(t) {
        this.blurXFilter.blur = this.blurYFilter.blur = t,
        this.updatePadding()
    }
    get quality() {
        return this.blurXFilter.quality
    }
    set quality(t) {
        this.blurXFilter.quality = this.blurYFilter.quality = t
    }
    get blurX() {
        return this.blurXFilter.blur
    }
    set blurX(t) {
        this.blurXFilter.blur = t,
        this.updatePadding()
    }
    get blurY() {
        return this.blurYFilter.blur
    }
    set blurY(t) {
        this.blurYFilter.blur = t,
        this.updatePadding()
    }
    get blendMode() {
        return this.blurYFilter.blendMode
    }
    set blendMode(t) {
        this.blurYFilter.blendMode = t
    }
    get repeatEdgePixels() {
        return this._repeatEdgePixels
    }
    set repeatEdgePixels(t) {
        this._repeatEdgePixels = t,
        this.updatePadding()
    }
}
var F0 = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class kh extends De {
    constructor() {
        const t = {
            m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
            uAlpha: 1
        };
        super(Vd, F0, t),
        this.alpha = 1
    }
    _loadMatrix(t, e=!1) {
        let r = t;
        e && (this._multiply(r, this.uniforms.m, t),
        r = this._colorMatrix(r)),
        this.uniforms.m = r
    }
    _multiply(t, e, r) {
        return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15],
        t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16],
        t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17],
        t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18],
        t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19] + e[4],
        t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15],
        t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16],
        t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17],
        t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18],
        t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19] + e[9],
        t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15],
        t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16],
        t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17],
        t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18],
        t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19] + e[14],
        t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15],
        t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16],
        t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17],
        t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18],
        t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19] + e[19],
        t
    }
    _colorMatrix(t) {
        const e = new Float32Array(t);
        return e[4] /= 255,
        e[9] /= 255,
        e[14] /= 255,
        e[19] /= 255,
        e
    }
    brightness(t, e) {
        const r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
    }
    tint(t, e) {
        const [r,s,n] = Pt.shared.setValue(t).toArray()
          , a = [r, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(a, e)
    }
    greyscale(t, e) {
        const r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
    }
    blackAndWhite(t) {
        const e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    hue(t, e) {
        t = (t || 0) / 180 * Math.PI;
        const r = Math.cos(t)
          , s = Math.sin(t)
          , n = Math.sqrt
          , a = 1 / 3
          , o = n(a)
          , l = r + (1 - r) * a
          , c = a * (1 - r) - o * s
          , p = a * (1 - r) + o * s
          , m = a * (1 - r) + o * s
          , f = r + a * (1 - r)
          , v = a * (1 - r) - o * s
          , _ = a * (1 - r) - o * s
          , T = a * (1 - r) + o * s
          , A = r + a * (1 - r)
          , E = [l, c, p, 0, 0, m, f, v, 0, 0, _, T, A, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(E, e)
    }
    contrast(t, e) {
        const r = (t || 0) + 1
          , s = -.5 * (r - 1)
          , n = [r, 0, 0, 0, s, 0, r, 0, 0, s, 0, 0, r, 0, s, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    saturate(t=0, e) {
        const r = t * 2 / 3 + 1
          , s = (r - 1) * -.5
          , n = [r, s, s, 0, 0, s, r, s, 0, 0, s, s, r, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
    }
    desaturate() {
        this.saturate(-1)
    }
    negative(t) {
        const e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    sepia(t) {
        const e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    technicolor(t) {
        const e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    polaroid(t) {
        const e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    toBGR(t) {
        const e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    kodachrome(t) {
        const e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    browni(t) {
        const e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    vintage(t) {
        const e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    colorTone(t, e, r, s, n) {
        t = t || .2,
        e = e || .15,
        r = r || 16770432,
        s = s || 3375104;
        const a = Pt.shared
          , [o,l,c] = a.setValue(r).toArray()
          , [p,m,f] = a.setValue(s).toArray()
          , v = [.3, .59, .11, 0, 0, o, l, c, t, 0, p, m, f, e, 0, o - p, l - m, c - f, 0, 0];
        this._loadMatrix(v, n)
    }
    night(t, e) {
        t = t || .1;
        const r = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, t * 2, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
    }
    predator(t, e) {
        const r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
        this._loadMatrix(r, e)
    }
    lsd(t) {
        const e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
    }
    reset() {
        const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(t, !1)
    }
    get matrix() {
        return this.uniforms.m
    }
    set matrix(t) {
        this.uniforms.m = t
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
}
kh.prototype.grayscale = kh.prototype.greyscale;
var O0 = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`
  , N0 = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class L0 extends De {
    constructor(t, e) {
        const r = new Wt;
        t.renderable = !1,
        super(N0, O0, {
            mapSampler: t._texture,
            filterMatrix: r,
            scale: {
                x: 1,
                y: 1
            },
            rotation: new Float32Array([1, 0, 0, 1])
        }),
        this.maskSprite = t,
        this.maskMatrix = r,
        e == null && (e = 20),
        this.scale = new Bt(e,e)
    }
    apply(t, e, r, s) {
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite),
        this.uniforms.scale.x = this.scale.x,
        this.uniforms.scale.y = this.scale.y;
        const n = this.maskSprite.worldTransform
          , a = Math.sqrt(n.a * n.a + n.b * n.b)
          , o = Math.sqrt(n.c * n.c + n.d * n.d);
        a !== 0 && o !== 0 && (this.uniforms.rotation[0] = n.a / a,
        this.uniforms.rotation[1] = n.b / a,
        this.uniforms.rotation[2] = n.c / o,
        this.uniforms.rotation[3] = n.d / o),
        t.applyFilter(this, e, r, s)
    }
    get map() {
        return this.uniforms.mapSampler
    }
    set map(t) {
        this.uniforms.mapSampler = t
    }
}
var k0 = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`
  , U0 = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class G0 extends De {
    constructor() {
        super(U0, k0)
    }
}
var H0 = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class V0 extends De {
    constructor(t=.5, e=Math.random()) {
        super(Vd, H0, {
            uNoise: 0,
            uSeed: 0
        }),
        this.noise = t,
        this.seed = e
    }
    get noise() {
        return this.uniforms.uNoise
    }
    set noise(t) {
        this.uniforms.uNoise = t
    }
    get seed() {
        return this.uniforms.uSeed
    }
    set seed(t) {
        this.uniforms.uSeed = t
    }
}
const ec = {
    AlphaFilter: C0,
    BlurFilter: B0,
    BlurFilterPass: Lh,
    ColorMatrixFilter: kh,
    DisplacementFilter: L0,
    FXAAFilter: G0,
    NoiseFilter: V0
};
Object.entries(ec).forEach( ([i,t]) => {
    Object.defineProperty(ec, i, {
        get() {
            return vt("7.1.0", `filters.${i} has moved to ${i}`),
            t
        }
    })
}
);
class $0 {
    constructor() {
        this.interactionFrequency = 10,
        this._deltaTime = 0,
        this._didMove = !1,
        this.tickerAdded = !1,
        this._pauseUpdate = !0
    }
    init(t) {
        this.removeTickerListener(),
        this.events = t,
        this.interactionFrequency = 10,
        this._deltaTime = 0,
        this._didMove = !1,
        this.tickerAdded = !1,
        this._pauseUpdate = !0
    }
    get pauseUpdate() {
        return this._pauseUpdate
    }
    set pauseUpdate(t) {
        this._pauseUpdate = t
    }
    addTickerListener() {
        this.tickerAdded || !this.domElement || (je.system.add(this.tickerUpdate, this, Fi.INTERACTION),
        this.tickerAdded = !0)
    }
    removeTickerListener() {
        this.tickerAdded && (je.system.remove(this.tickerUpdate, this),
        this.tickerAdded = !1)
    }
    pointerMoved() {
        this._didMove = !0
    }
    update() {
        if (!this.domElement || this._pauseUpdate)
            return;
        if (this._didMove) {
            this._didMove = !1;
            return
        }
        const t = this.events.rootPointerEvent;
        this.events.supportsTouchEvents && t.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove",{
            clientX: t.clientX,
            clientY: t.clientY
        }))
    }
    tickerUpdate(t) {
        this._deltaTime += t,
        !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0,
        this.update())
    }
}
const ni = new $0;
class ln {
    constructor(t) {
        this.bubbles = !0,
        this.cancelBubble = !0,
        this.cancelable = !1,
        this.composed = !1,
        this.defaultPrevented = !1,
        this.eventPhase = ln.prototype.NONE,
        this.propagationStopped = !1,
        this.propagationImmediatelyStopped = !1,
        this.layer = new Bt,
        this.page = new Bt,
        this.NONE = 0,
        this.CAPTURING_PHASE = 1,
        this.AT_TARGET = 2,
        this.BUBBLING_PHASE = 3,
        this.manager = t
    }
    get layerX() {
        return this.layer.x
    }
    get layerY() {
        return this.layer.y
    }
    get pageX() {
        return this.page.x
    }
    get pageY() {
        return this.page.y
    }
    get data() {
        return this
    }
    composedPath() {
        return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []),
        this.path
    }
    initEvent(t, e, r) {
        throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
    }
    initUIEvent(t, e, r, s, n) {
        throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
    }
    preventDefault() {
        this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(),
        this.defaultPrevented = !0
    }
    stopImmediatePropagation() {
        this.propagationImmediatelyStopped = !0
    }
    stopPropagation() {
        this.propagationStopped = !0
    }
}
class va extends ln {
    constructor() {
        super(...arguments),
        this.client = new Bt,
        this.movement = new Bt,
        this.offset = new Bt,
        this.global = new Bt,
        this.screen = new Bt
    }
    get clientX() {
        return this.client.x
    }
    get clientY() {
        return this.client.y
    }
    get x() {
        return this.clientX
    }
    get y() {
        return this.clientY
    }
    get movementX() {
        return this.movement.x
    }
    get movementY() {
        return this.movement.y
    }
    get offsetX() {
        return this.offset.x
    }
    get offsetY() {
        return this.offset.y
    }
    get globalX() {
        return this.global.x
    }
    get globalY() {
        return this.global.y
    }
    get screenX() {
        return this.screen.x
    }
    get screenY() {
        return this.screen.y
    }
    getLocalPosition(t, e, r) {
        return t.worldTransform.applyInverse(r || this.global, e)
    }
    getModifierState(t) {
        return "getModifierState"in this.nativeEvent && this.nativeEvent.getModifierState(t)
    }
    initMouseEvent(t, e, r, s, n, a, o, l, c, p, m, f, v, _, T) {
        throw new Error("Method not implemented.")
    }
}
class nr extends va {
    constructor() {
        super(...arguments),
        this.width = 0,
        this.height = 0,
        this.isPrimary = !1
    }
    getCoalescedEvents() {
        return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : []
    }
    getPredictedEvents() {
        throw new Error("getPredictedEvents is not supported!")
    }
}
class us extends va {
    constructor() {
        super(...arguments),
        this.DOM_DELTA_PIXEL = 0,
        this.DOM_DELTA_LINE = 1,
        this.DOM_DELTA_PAGE = 2
    }
}
us.DOM_DELTA_PIXEL = 0,
us.DOM_DELTA_LINE = 1,
us.DOM_DELTA_PAGE = 2;
const j0 = 2048
  , W0 = new Bt
  , Go = new Bt;
class X0 {
    constructor(t) {
        this.dispatch = new vs,
        this.moveOnAll = !1,
        this.enableGlobalMoveEvents = !0,
        this.mappingState = {
            trackingData: {}
        },
        this.eventPool = new Map,
        this._allInteractiveElements = [],
        this._hitElements = [],
        this._isPointerMoveEvent = !1,
        this.rootTarget = t,
        this.hitPruneFn = this.hitPruneFn.bind(this),
        this.hitTestFn = this.hitTestFn.bind(this),
        this.mapPointerDown = this.mapPointerDown.bind(this),
        this.mapPointerMove = this.mapPointerMove.bind(this),
        this.mapPointerOut = this.mapPointerOut.bind(this),
        this.mapPointerOver = this.mapPointerOver.bind(this),
        this.mapPointerUp = this.mapPointerUp.bind(this),
        this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this),
        this.mapWheel = this.mapWheel.bind(this),
        this.mappingTable = {},
        this.addEventMapping("pointerdown", this.mapPointerDown),
        this.addEventMapping("pointermove", this.mapPointerMove),
        this.addEventMapping("pointerout", this.mapPointerOut),
        this.addEventMapping("pointerleave", this.mapPointerOut),
        this.addEventMapping("pointerover", this.mapPointerOver),
        this.addEventMapping("pointerup", this.mapPointerUp),
        this.addEventMapping("pointerupoutside", this.mapPointerUpOutside),
        this.addEventMapping("wheel", this.mapWheel)
    }
    addEventMapping(t, e) {
        this.mappingTable[t] || (this.mappingTable[t] = []),
        this.mappingTable[t].push({
            fn: e,
            priority: 0
        }),
        this.mappingTable[t].sort( (r, s) => r.priority - s.priority)
    }
    dispatchEvent(t, e) {
        t.propagationStopped = !1,
        t.propagationImmediatelyStopped = !1,
        this.propagate(t, e),
        this.dispatch.emit(e || t.type, t)
    }
    mapEvent(t) {
        if (!this.rootTarget)
            return;
        const e = this.mappingTable[t.type];
        if (e)
            for (let r = 0, s = e.length; r < s; r++)
                e[r].fn(t);
        else
            console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`)
    }
    hitTest(t, e) {
        ni.pauseUpdate = !0;
        const r = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive"
          , s = this[r](this.rootTarget, this.rootTarget.eventMode, W0.set(t, e), this.hitTestFn, this.hitPruneFn);
        return s && s[0]
    }
    propagate(t, e) {
        if (!t.target)
            return;
        const r = t.composedPath();
        t.eventPhase = t.CAPTURING_PHASE;
        for (let s = 0, n = r.length - 1; s < n; s++)
            if (t.currentTarget = r[s],
            this.notifyTarget(t, e),
            t.propagationStopped || t.propagationImmediatelyStopped)
                return;
        if (t.eventPhase = t.AT_TARGET,
        t.currentTarget = t.target,
        this.notifyTarget(t, e),
        !(t.propagationStopped || t.propagationImmediatelyStopped)) {
            t.eventPhase = t.BUBBLING_PHASE;
            for (let s = r.length - 2; s >= 0; s--)
                if (t.currentTarget = r[s],
                this.notifyTarget(t, e),
                t.propagationStopped || t.propagationImmediatelyStopped)
                    return
        }
    }
    all(t, e, r=this._allInteractiveElements) {
        if (r.length === 0)
            return;
        t.eventPhase = t.BUBBLING_PHASE;
        const s = Array.isArray(e) ? e : [e];
        for (let n = r.length - 1; n >= 0; n--)
            s.forEach(a => {
                t.currentTarget = r[n],
                this.notifyTarget(t, a)
            }
            )
    }
    propagationPath(t) {
        const e = [t];
        for (let r = 0; r < j0 && t !== this.rootTarget; r++) {
            if (!t.parent)
                throw new Error("Cannot find propagation path to disconnected target");
            e.push(t.parent),
            t = t.parent
        }
        return e.reverse(),
        e
    }
    hitTestMoveRecursive(t, e, r, s, n, a=!1) {
        let o = !1;
        if (this._interactivePrune(t))
            return null;
        if ((t.eventMode === "dynamic" || e === "dynamic") && (ni.pauseUpdate = !1),
        t.interactiveChildren && t.children) {
            const p = t.children;
            for (let m = p.length - 1; m >= 0; m--) {
                const f = p[m]
                  , v = this.hitTestMoveRecursive(f, this._isInteractive(e) ? e : f.eventMode, r, s, n, a || n(t, r));
                if (v) {
                    if (v.length > 0 && !v[v.length - 1].parent)
                        continue;
                    const _ = t.isInteractive();
                    (v.length > 0 || _) && (_ && this._allInteractiveElements.push(t),
                    v.push(t)),
                    this._hitElements.length === 0 && (this._hitElements = v),
                    o = !0
                }
            }
        }
        const l = this._isInteractive(e)
          , c = t.isInteractive();
        return l && c && this._allInteractiveElements.push(t),
        a || this._hitElements.length > 0 ? null : o ? this._hitElements : l && !n(t, r) && s(t, r) ? c ? [t] : [] : null
    }
    hitTestRecursive(t, e, r, s, n) {
        if (this._interactivePrune(t) || n(t, r))
            return null;
        if ((t.eventMode === "dynamic" || e === "dynamic") && (ni.pauseUpdate = !1),
        t.interactiveChildren && t.children) {
            const l = t.children;
            for (let c = l.length - 1; c >= 0; c--) {
                const p = l[c]
                  , m = this.hitTestRecursive(p, this._isInteractive(e) ? e : p.eventMode, r, s, n);
                if (m) {
                    if (m.length > 0 && !m[m.length - 1].parent)
                        continue;
                    const f = t.isInteractive();
                    return (m.length > 0 || f) && m.push(t),
                    m
                }
            }
        }
        const a = this._isInteractive(e)
          , o = t.isInteractive();
        return a && s(t, r) ? o ? [t] : [] : null
    }
    _isInteractive(t) {
        return t === "static" || t === "dynamic"
    }
    _interactivePrune(t) {
        return !!(!t || t.isMask || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren || t.isMask)
    }
    hitPruneFn(t, e) {
        var r;
        if (t.hitArea && (t.worldTransform.applyInverse(e, Go),
        !t.hitArea.contains(Go.x, Go.y)))
            return !0;
        if (t._mask) {
            const s = t._mask.isMaskData ? t._mask.maskObject : t._mask;
            if (s && !((r = s.containsPoint) != null && r.call(s, e)))
                return !0
        }
        return !1
    }
    hitTestFn(t, e) {
        return t.eventMode === "passive" ? !1 : t.hitArea ? !0 : t.containsPoint ? t.containsPoint(e) : !1
    }
    notifyTarget(t, e) {
        var n, a;
        e = e ?? t.type;
        const r = `on${e}`;
        (a = (n = t.currentTarget)[r]) == null || a.call(n, t);
        const s = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${e}capture` : e;
        this.notifyListeners(t, s),
        t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e)
    }
    mapPointerDown(t) {
        if (!(t instanceof nr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.createPointerEvent(t);
        if (this.dispatchEvent(e, "pointerdown"),
        e.pointerType === "touch")
            this.dispatchEvent(e, "touchstart");
        else if (e.pointerType === "mouse" || e.pointerType === "pen") {
            const s = e.button === 2;
            this.dispatchEvent(e, s ? "rightdown" : "mousedown")
        }
        const r = this.trackingData(t.pointerId);
        r.pressTargetsByButton[t.button] = e.composedPath(),
        this.freeEvent(e)
    }
    mapPointerMove(t) {
        var l, c;
        if (!(t instanceof nr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        this._allInteractiveElements.length = 0,
        this._hitElements.length = 0,
        this._isPointerMoveEvent = !0;
        const e = this.createPointerEvent(t);
        this._isPointerMoveEvent = !1;
        const r = e.pointerType === "mouse" || e.pointerType === "pen"
          , s = this.trackingData(t.pointerId)
          , n = this.findMountedTarget(s.overTargets);
        if (((l = s.overTargets) == null ? void 0 : l.length) > 0 && n !== e.target) {
            const p = t.type === "mousemove" ? "mouseout" : "pointerout"
              , m = this.createPointerEvent(t, p, n);
            if (this.dispatchEvent(m, "pointerout"),
            r && this.dispatchEvent(m, "mouseout"),
            !e.composedPath().includes(n)) {
                const f = this.createPointerEvent(t, "pointerleave", n);
                for (f.eventPhase = f.AT_TARGET; f.target && !e.composedPath().includes(f.target); )
                    f.currentTarget = f.target,
                    this.notifyTarget(f),
                    r && this.notifyTarget(f, "mouseleave"),
                    f.target = f.target.parent;
                this.freeEvent(f)
            }
            this.freeEvent(m)
        }
        if (n !== e.target) {
            const p = t.type === "mousemove" ? "mouseover" : "pointerover"
              , m = this.clonePointerEvent(e, p);
            this.dispatchEvent(m, "pointerover"),
            r && this.dispatchEvent(m, "mouseover");
            let f = n == null ? void 0 : n.parent;
            for (; f && f !== this.rootTarget.parent && f !== e.target; )
                f = f.parent;
            if (!f || f === this.rootTarget.parent) {
                const v = this.clonePointerEvent(e, "pointerenter");
                for (v.eventPhase = v.AT_TARGET; v.target && v.target !== n && v.target !== this.rootTarget.parent; )
                    v.currentTarget = v.target,
                    this.notifyTarget(v),
                    r && this.notifyTarget(v, "mouseenter"),
                    v.target = v.target.parent;
                this.freeEvent(v)
            }
            this.freeEvent(m)
        }
        const a = []
          , o = this.enableGlobalMoveEvents ?? !0;
        this.moveOnAll ? a.push("pointermove") : this.dispatchEvent(e, "pointermove"),
        o && a.push("globalpointermove"),
        e.pointerType === "touch" && (this.moveOnAll ? a.splice(1, 0, "touchmove") : this.dispatchEvent(e, "touchmove"),
        o && a.push("globaltouchmove")),
        r && (this.moveOnAll ? a.splice(1, 0, "mousemove") : this.dispatchEvent(e, "mousemove"),
        o && a.push("globalmousemove"),
        this.cursor = (c = e.target) == null ? void 0 : c.cursor),
        a.length > 0 && this.all(e, a),
        this._allInteractiveElements.length = 0,
        this._hitElements.length = 0,
        s.overTargets = e.composedPath(),
        this.freeEvent(e)
    }
    mapPointerOver(t) {
        var a;
        if (!(t instanceof nr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.trackingData(t.pointerId)
          , r = this.createPointerEvent(t)
          , s = r.pointerType === "mouse" || r.pointerType === "pen";
        this.dispatchEvent(r, "pointerover"),
        s && this.dispatchEvent(r, "mouseover"),
        r.pointerType === "mouse" && (this.cursor = (a = r.target) == null ? void 0 : a.cursor);
        const n = this.clonePointerEvent(r, "pointerenter");
        for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent; )
            n.currentTarget = n.target,
            this.notifyTarget(n),
            s && this.notifyTarget(n, "mouseenter"),
            n.target = n.target.parent;
        e.overTargets = r.composedPath(),
        this.freeEvent(r),
        this.freeEvent(n)
    }
    mapPointerOut(t) {
        if (!(t instanceof nr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.trackingData(t.pointerId);
        if (e.overTargets) {
            const r = t.pointerType === "mouse" || t.pointerType === "pen"
              , s = this.findMountedTarget(e.overTargets)
              , n = this.createPointerEvent(t, "pointerout", s);
            this.dispatchEvent(n),
            r && this.dispatchEvent(n, "mouseout");
            const a = this.createPointerEvent(t, "pointerleave", s);
            for (a.eventPhase = a.AT_TARGET; a.target && a.target !== this.rootTarget.parent; )
                a.currentTarget = a.target,
                this.notifyTarget(a),
                r && this.notifyTarget(a, "mouseleave"),
                a.target = a.target.parent;
            e.overTargets = null,
            this.freeEvent(n),
            this.freeEvent(a)
        }
        this.cursor = null
    }
    mapPointerUp(t) {
        if (!(t instanceof nr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = performance.now()
          , r = this.createPointerEvent(t);
        if (this.dispatchEvent(r, "pointerup"),
        r.pointerType === "touch")
            this.dispatchEvent(r, "touchend");
        else if (r.pointerType === "mouse" || r.pointerType === "pen") {
            const o = r.button === 2;
            this.dispatchEvent(r, o ? "rightup" : "mouseup")
        }
        const s = this.trackingData(t.pointerId)
          , n = this.findMountedTarget(s.pressTargetsByButton[t.button]);
        let a = n;
        if (n && !r.composedPath().includes(n)) {
            let o = n;
            for (; o && !r.composedPath().includes(o); ) {
                if (r.currentTarget = o,
                this.notifyTarget(r, "pointerupoutside"),
                r.pointerType === "touch")
                    this.notifyTarget(r, "touchendoutside");
                else if (r.pointerType === "mouse" || r.pointerType === "pen") {
                    const l = r.button === 2;
                    this.notifyTarget(r, l ? "rightupoutside" : "mouseupoutside")
                }
                o = o.parent
            }
            delete s.pressTargetsByButton[t.button],
            a = o
        }
        if (a) {
            const o = this.clonePointerEvent(r, "click");
            o.target = a,
            o.path = null,
            s.clicksByButton[t.button] || (s.clicksByButton[t.button] = {
                clickCount: 0,
                target: o.target,
                timeStamp: e
            });
            const l = s.clicksByButton[t.button];
            if (l.target === o.target && e - l.timeStamp < 200 ? ++l.clickCount : l.clickCount = 1,
            l.target = o.target,
            l.timeStamp = e,
            o.detail = l.clickCount,
            o.pointerType === "mouse") {
                const c = o.button === 2;
                this.dispatchEvent(o, c ? "rightclick" : "click")
            } else
                o.pointerType === "touch" && this.dispatchEvent(o, "tap");
            this.dispatchEvent(o, "pointertap"),
            this.freeEvent(o)
        }
        this.freeEvent(r)
    }
    mapPointerUpOutside(t) {
        if (!(t instanceof nr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.trackingData(t.pointerId)
          , r = this.findMountedTarget(e.pressTargetsByButton[t.button])
          , s = this.createPointerEvent(t);
        if (r) {
            let n = r;
            for (; n; )
                s.currentTarget = n,
                this.notifyTarget(s, "pointerupoutside"),
                s.pointerType === "touch" ? this.notifyTarget(s, "touchendoutside") : (s.pointerType === "mouse" || s.pointerType === "pen") && this.notifyTarget(s, s.button === 2 ? "rightupoutside" : "mouseupoutside"),
                n = n.parent;
            delete e.pressTargetsByButton[t.button]
        }
        this.freeEvent(s)
    }
    mapWheel(t) {
        if (!(t instanceof us)) {
            console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
            return
        }
        const e = this.createWheelEvent(t);
        this.dispatchEvent(e),
        this.freeEvent(e)
    }
    findMountedTarget(t) {
        if (!t)
            return null;
        let e = t[0];
        for (let r = 1; r < t.length && t[r].parent === e; r++)
            e = t[r];
        return e
    }
    createPointerEvent(t, e, r) {
        const s = this.allocateEvent(nr);
        return this.copyPointerData(t, s),
        this.copyMouseData(t, s),
        this.copyData(t, s),
        s.nativeEvent = t.nativeEvent,
        s.originalEvent = t,
        s.target = r ?? this.hitTest(s.global.x, s.global.y) ?? this._hitElements[0],
        typeof e == "string" && (s.type = e),
        s
    }
    createWheelEvent(t) {
        const e = this.allocateEvent(us);
        return this.copyWheelData(t, e),
        this.copyMouseData(t, e),
        this.copyData(t, e),
        e.nativeEvent = t.nativeEvent,
        e.originalEvent = t,
        e.target = this.hitTest(e.global.x, e.global.y),
        e
    }
    clonePointerEvent(t, e) {
        const r = this.allocateEvent(nr);
        return r.nativeEvent = t.nativeEvent,
        r.originalEvent = t.originalEvent,
        this.copyPointerData(t, r),
        this.copyMouseData(t, r),
        this.copyData(t, r),
        r.target = t.target,
        r.path = t.composedPath().slice(),
        r.type = e ?? r.type,
        r
    }
    copyWheelData(t, e) {
        e.deltaMode = t.deltaMode,
        e.deltaX = t.deltaX,
        e.deltaY = t.deltaY,
        e.deltaZ = t.deltaZ
    }
    copyPointerData(t, e) {
        t instanceof nr && e instanceof nr && (e.pointerId = t.pointerId,
        e.width = t.width,
        e.height = t.height,
        e.isPrimary = t.isPrimary,
        e.pointerType = t.pointerType,
        e.pressure = t.pressure,
        e.tangentialPressure = t.tangentialPressure,
        e.tiltX = t.tiltX,
        e.tiltY = t.tiltY,
        e.twist = t.twist)
    }
    copyMouseData(t, e) {
        t instanceof va && e instanceof va && (e.altKey = t.altKey,
        e.button = t.button,
        e.buttons = t.buttons,
        e.client.copyFrom(t.client),
        e.ctrlKey = t.ctrlKey,
        e.metaKey = t.metaKey,
        e.movement.copyFrom(t.movement),
        e.screen.copyFrom(t.screen),
        e.shiftKey = t.shiftKey,
        e.global.copyFrom(t.global))
    }
    copyData(t, e) {
        e.isTrusted = t.isTrusted,
        e.srcElement = t.srcElement,
        e.timeStamp = performance.now(),
        e.type = t.type,
        e.detail = t.detail,
        e.view = t.view,
        e.which = t.which,
        e.layer.copyFrom(t.layer),
        e.page.copyFrom(t.page)
    }
    trackingData(t) {
        return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
            pressTargetsByButton: {},
            clicksByButton: {},
            overTarget: null
        }),
        this.mappingState.trackingData[t]
    }
    allocateEvent(t) {
        this.eventPool.has(t) || this.eventPool.set(t, []);
        const e = this.eventPool.get(t).pop() || new t(this);
        return e.eventPhase = e.NONE,
        e.currentTarget = null,
        e.path = null,
        e.target = null,
        e
    }
    freeEvent(t) {
        if (t.manager !== this)
            throw new Error("It is illegal to free an event not managed by this EventBoundary!");
        const e = t.constructor;
        this.eventPool.has(e) || this.eventPool.set(e, []),
        this.eventPool.get(e).push(t)
    }
    notifyListeners(t, e) {
        const r = t.currentTarget._events[e];
        if (r && t.currentTarget.isInteractive())
            if ("fn"in r)
                r.once && t.currentTarget.removeListener(e, r.fn, void 0, !0),
                r.fn.call(r.context, t);
            else
                for (let s = 0, n = r.length; s < n && !t.propagationImmediatelyStopped; s++)
                    r[s].once && t.currentTarget.removeListener(e, r[s].fn, void 0, !0),
                    r[s].fn.call(r[s].context, t)
    }
}
const z0 = 1
  , Y0 = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel"
}
  , Uh = class Gh {
    constructor(t) {
        this.supportsTouchEvents = "ontouchstart"in globalThis,
        this.supportsPointerEvents = !!globalThis.PointerEvent,
        this.domElement = null,
        this.resolution = 1,
        this.renderer = t,
        this.rootBoundary = new X0(null),
        ni.init(this),
        this.autoPreventDefault = !0,
        this.eventsAdded = !1,
        this.rootPointerEvent = new nr(null),
        this.rootWheelEvent = new us(null),
        this.cursorStyles = {
            default: "inherit",
            pointer: "pointer"
        },
        this.features = new Proxy({
            ...Gh.defaultEventFeatures
        },{
            set: (e, r, s) => (r === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = s),
            e[r] = s,
            !0)
        }),
        this.onPointerDown = this.onPointerDown.bind(this),
        this.onPointerMove = this.onPointerMove.bind(this),
        this.onPointerUp = this.onPointerUp.bind(this),
        this.onPointerOverOut = this.onPointerOverOut.bind(this),
        this.onWheel = this.onWheel.bind(this)
    }
    static get defaultEventMode() {
        return this._defaultEventMode
    }
    init(t) {
        const {view: e, resolution: r} = this.renderer;
        this.setTargetElement(e),
        this.resolution = r,
        Gh._defaultEventMode = t.eventMode ?? "auto",
        Object.assign(this.features, t.eventFeatures ?? {}),
        this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove
    }
    resolutionChange(t) {
        this.resolution = t
    }
    destroy() {
        this.setTargetElement(null),
        this.renderer = null
    }
    setCursor(t) {
        t = t || "default";
        let e = !0;
        if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (e = !1),
        this.currentCursor === t)
            return;
        this.currentCursor = t;
        const r = this.cursorStyles[t];
        if (r)
            switch (typeof r) {
            case "string":
                e && (this.domElement.style.cursor = r);
                break;
            case "function":
                r(t);
                break;
            case "object":
                e && Object.assign(this.domElement.style, r);
                break
            }
        else
            e && typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.domElement.style.cursor = t)
    }
    get pointer() {
        return this.rootPointerEvent
    }
    onPointerDown(t) {
        if (!this.features.click)
            return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        const e = this.normalizeToPointerData(t);
        this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable"in t)) && t.preventDefault();
        for (let r = 0, s = e.length; r < s; r++) {
            const n = e[r]
              , a = this.bootstrapEvent(this.rootPointerEvent, n);
            this.rootBoundary.mapEvent(a)
        }
        this.setCursor(this.rootBoundary.cursor)
    }
    onPointerMove(t) {
        if (!this.features.move)
            return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered,
        ni.pointerMoved();
        const e = this.normalizeToPointerData(t);
        for (let r = 0, s = e.length; r < s; r++) {
            const n = this.bootstrapEvent(this.rootPointerEvent, e[r]);
            this.rootBoundary.mapEvent(n)
        }
        this.setCursor(this.rootBoundary.cursor)
    }
    onPointerUp(t) {
        if (!this.features.click)
            return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        let e = t.target;
        t.composedPath && t.composedPath().length > 0 && (e = t.composedPath()[0]);
        const r = e !== this.domElement ? "outside" : ""
          , s = this.normalizeToPointerData(t);
        for (let n = 0, a = s.length; n < a; n++) {
            const o = this.bootstrapEvent(this.rootPointerEvent, s[n]);
            o.type += r,
            this.rootBoundary.mapEvent(o)
        }
        this.setCursor(this.rootBoundary.cursor)
    }
    onPointerOverOut(t) {
        if (!this.features.click)
            return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
        const e = this.normalizeToPointerData(t);
        for (let r = 0, s = e.length; r < s; r++) {
            const n = this.bootstrapEvent(this.rootPointerEvent, e[r]);
            this.rootBoundary.mapEvent(n)
        }
        this.setCursor(this.rootBoundary.cursor)
    }
    onWheel(t) {
        if (!this.features.wheel)
            return;
        const e = this.normalizeWheelEvent(t);
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered,
        this.rootBoundary.mapEvent(e)
    }
    setTargetElement(t) {
        this.removeEvents(),
        this.domElement = t,
        ni.domElement = t,
        this.addEvents()
    }
    addEvents() {
        if (this.eventsAdded || !this.domElement)
            return;
        ni.addTickerListener();
        const t = this.domElement.style;
        t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none",
        t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none")),
        this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, !0),
        this.domElement.addEventListener("pointerdown", this.onPointerDown, !0),
        this.domElement.addEventListener("pointerleave", this.onPointerOverOut, !0),
        this.domElement.addEventListener("pointerover", this.onPointerOverOut, !0),
        globalThis.addEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, !0),
        this.domElement.addEventListener("mousedown", this.onPointerDown, !0),
        this.domElement.addEventListener("mouseout", this.onPointerOverOut, !0),
        this.domElement.addEventListener("mouseover", this.onPointerOverOut, !0),
        globalThis.addEventListener("mouseup", this.onPointerUp, !0),
        this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, !0),
        this.domElement.addEventListener("touchend", this.onPointerUp, !0),
        this.domElement.addEventListener("touchmove", this.onPointerMove, !0))),
        this.domElement.addEventListener("wheel", this.onWheel, {
            passive: !0,
            capture: !0
        }),
        this.eventsAdded = !0
    }
    removeEvents() {
        if (!this.eventsAdded || !this.domElement)
            return;
        ni.removeTickerListener();
        const t = this.domElement.style;
        globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "",
        t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""),
        this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, !0),
        this.domElement.removeEventListener("pointerdown", this.onPointerDown, !0),
        this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, !0),
        this.domElement.removeEventListener("pointerover", this.onPointerOverOut, !0),
        globalThis.removeEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, !0),
        this.domElement.removeEventListener("mousedown", this.onPointerDown, !0),
        this.domElement.removeEventListener("mouseout", this.onPointerOverOut, !0),
        this.domElement.removeEventListener("mouseover", this.onPointerOverOut, !0),
        globalThis.removeEventListener("mouseup", this.onPointerUp, !0),
        this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, !0),
        this.domElement.removeEventListener("touchend", this.onPointerUp, !0),
        this.domElement.removeEventListener("touchmove", this.onPointerMove, !0))),
        this.domElement.removeEventListener("wheel", this.onWheel, !0),
        this.domElement = null,
        this.eventsAdded = !1
    }
    mapPositionToPoint(t, e, r) {
        const s = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
            x: 0,
            y: 0,
            width: this.domElement.width,
            height: this.domElement.height,
            left: 0,
            top: 0
        }
          , n = 1 / this.resolution;
        t.x = (e - s.left) * (this.domElement.width / s.width) * n,
        t.y = (r - s.top) * (this.domElement.height / s.height) * n
    }
    normalizeToPointerData(t) {
        const e = [];
        if (this.supportsTouchEvents && t instanceof TouchEvent)
            for (let r = 0, s = t.changedTouches.length; r < s; r++) {
                const n = t.changedTouches[r];
                typeof n.button > "u" && (n.button = 0),
                typeof n.buttons > "u" && (n.buttons = 1),
                typeof n.isPrimary > "u" && (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"),
                typeof n.width > "u" && (n.width = n.radiusX || 1),
                typeof n.height > "u" && (n.height = n.radiusY || 1),
                typeof n.tiltX > "u" && (n.tiltX = 0),
                typeof n.tiltY > "u" && (n.tiltY = 0),
                typeof n.pointerType > "u" && (n.pointerType = "touch"),
                typeof n.pointerId > "u" && (n.pointerId = n.identifier || 0),
                typeof n.pressure > "u" && (n.pressure = n.force || .5),
                typeof n.twist > "u" && (n.twist = 0),
                typeof n.tangentialPressure > "u" && (n.tangentialPressure = 0),
                typeof n.layerX > "u" && (n.layerX = n.offsetX = n.clientX),
                typeof n.layerY > "u" && (n.layerY = n.offsetY = n.clientY),
                n.isNormalized = !0,
                n.type = t.type,
                e.push(n)
            }
        else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
            const r = t;
            typeof r.isPrimary > "u" && (r.isPrimary = !0),
            typeof r.width > "u" && (r.width = 1),
            typeof r.height > "u" && (r.height = 1),
            typeof r.tiltX > "u" && (r.tiltX = 0),
            typeof r.tiltY > "u" && (r.tiltY = 0),
            typeof r.pointerType > "u" && (r.pointerType = "mouse"),
            typeof r.pointerId > "u" && (r.pointerId = z0),
            typeof r.pressure > "u" && (r.pressure = .5),
            typeof r.twist > "u" && (r.twist = 0),
            typeof r.tangentialPressure > "u" && (r.tangentialPressure = 0),
            r.isNormalized = !0,
            e.push(r)
        } else
            e.push(t);
        return e
    }
    normalizeWheelEvent(t) {
        const e = this.rootWheelEvent;
        return this.transferMouseData(e, t),
        e.deltaX = t.deltaX,
        e.deltaY = t.deltaY,
        e.deltaZ = t.deltaZ,
        e.deltaMode = t.deltaMode,
        this.mapPositionToPoint(e.screen, t.clientX, t.clientY),
        e.global.copyFrom(e.screen),
        e.offset.copyFrom(e.screen),
        e.nativeEvent = t,
        e.type = t.type,
        e
    }
    bootstrapEvent(t, e) {
        return t.originalEvent = null,
        t.nativeEvent = e,
        t.pointerId = e.pointerId,
        t.width = e.width,
        t.height = e.height,
        t.isPrimary = e.isPrimary,
        t.pointerType = e.pointerType,
        t.pressure = e.pressure,
        t.tangentialPressure = e.tangentialPressure,
        t.tiltX = e.tiltX,
        t.tiltY = e.tiltY,
        t.twist = e.twist,
        this.transferMouseData(t, e),
        this.mapPositionToPoint(t.screen, e.clientX, e.clientY),
        t.global.copyFrom(t.screen),
        t.offset.copyFrom(t.screen),
        t.isTrusted = e.isTrusted,
        t.type === "pointerleave" && (t.type = "pointerout"),
        t.type.startsWith("mouse") && (t.type = t.type.replace("mouse", "pointer")),
        t.type.startsWith("touch") && (t.type = Y0[t.type] || t.type),
        t
    }
    transferMouseData(t, e) {
        t.isTrusted = e.isTrusted,
        t.srcElement = e.srcElement,
        t.timeStamp = performance.now(),
        t.type = e.type,
        t.altKey = e.altKey,
        t.button = e.button,
        t.buttons = e.buttons,
        t.client.x = e.clientX,
        t.client.y = e.clientY,
        t.ctrlKey = e.ctrlKey,
        t.metaKey = e.metaKey,
        t.movement.x = e.movementX,
        t.movement.y = e.movementY,
        t.page.x = e.pageX,
        t.page.y = e.pageY,
        t.relatedTarget = null,
        t.shiftKey = e.shiftKey
    }
}
;
Uh.extension = {
    name: "events",
    type: [et.RendererSystem, et.CanvasRendererSystem]
},
Uh.defaultEventFeatures = {
    move: !0,
    globalMove: !0,
    click: !0,
    wheel: !0
};
let Hh = Uh;
ot.add(Hh);
function rc(i) {
    return i === "dynamic" || i === "static"
}
const q0 = {
    onclick: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onglobalmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    onmouseupoutside: null,
    onpointercancel: null,
    onpointerdown: null,
    onpointerenter: null,
    onpointerleave: null,
    onpointermove: null,
    onglobalpointermove: null,
    onpointerout: null,
    onpointerover: null,
    onpointertap: null,
    onpointerup: null,
    onpointerupoutside: null,
    onrightclick: null,
    onrightdown: null,
    onrightup: null,
    onrightupoutside: null,
    ontap: null,
    ontouchcancel: null,
    ontouchend: null,
    ontouchendoutside: null,
    ontouchmove: null,
    onglobaltouchmove: null,
    ontouchstart: null,
    onwheel: null,
    _internalInteractive: void 0,
    get interactive() {
        return this._internalInteractive ?? rc(Hh.defaultEventMode)
    },
    set interactive(i) {
        vt("7.2.0", "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."),
        this._internalInteractive = i,
        this.eventMode = i ? "static" : "auto"
    },
    _internalEventMode: void 0,
    get eventMode() {
        return this._internalEventMode ?? Hh.defaultEventMode
    },
    set eventMode(i) {
        this._internalInteractive = rc(i),
        this._internalEventMode = i
    },
    isInteractive() {
        return this.eventMode === "static" || this.eventMode === "dynamic"
    },
    interactiveChildren: !0,
    hitArea: null,
    addEventListener(i, t, e) {
        const r = typeof e == "boolean" && e || typeof e == "object" && e.capture
          , s = typeof e == "object" ? e.signal : void 0
          , n = typeof e == "object" ? e.once === !0 : !1
          , a = typeof t == "function" ? void 0 : t;
        i = r ? `${i}capture` : i;
        const o = typeof t == "function" ? t : t.handleEvent
          , l = this;
        s && s.addEventListener("abort", () => {
            l.off(i, o, a)
        }
        ),
        n ? l.once(i, o, a) : l.on(i, o, a)
    },
    removeEventListener(i, t, e) {
        const r = typeof e == "boolean" && e || typeof e == "object" && e.capture
          , s = typeof t == "function" ? void 0 : t;
        i = r ? `${i}capture` : i,
        t = typeof t == "function" ? t : t.handleEvent,
        this.off(i, t, s)
    },
    dispatchEvent(i) {
        if (!(i instanceof ln))
            throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
        return i.defaultPrevented = !1,
        i.path = null,
        i.target = this,
        i.manager.dispatchEvent(i),
        !i.defaultPrevented
    }
};
re.mixin(q0);
const K0 = {
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    _accessibleActive: !1,
    _accessibleDiv: null,
    accessibleType: "button",
    accessiblePointerEvents: "auto",
    accessibleChildren: !0,
    renderId: -1
};
re.mixin(K0);
const Z0 = 9
  , Gn = 100
  , Q0 = 0
  , J0 = 0
  , ic = 2
  , sc = 1
  , t_ = -1e3
  , e_ = -1e3
  , r_ = 2;
class of {
    constructor(t) {
        this.debug = !1,
        this._isActive = !1,
        this._isMobileAccessibility = !1,
        this.pool = [],
        this.renderId = 0,
        this.children = [],
        this.androidUpdateCount = 0,
        this.androidUpdateFrequency = 500,
        this._hookDiv = null,
        (Pr.tablet || Pr.phone) && this.createTouchHook();
        const e = document.createElement("div");
        e.style.width = `${Gn}px`,
        e.style.height = `${Gn}px`,
        e.style.position = "absolute",
        e.style.top = `${Q0}px`,
        e.style.left = `${J0}px`,
        e.style.zIndex = ic.toString(),
        this.div = e,
        this.renderer = t,
        this._onKeyDown = this._onKeyDown.bind(this),
        this._onMouseMove = this._onMouseMove.bind(this),
        globalThis.addEventListener("keydown", this._onKeyDown, !1)
    }
    get isActive() {
        return this._isActive
    }
    get isMobileAccessibility() {
        return this._isMobileAccessibility
    }
    createTouchHook() {
        const t = document.createElement("button");
        t.style.width = `${sc}px`,
        t.style.height = `${sc}px`,
        t.style.position = "absolute",
        t.style.top = `${t_}px`,
        t.style.left = `${e_}px`,
        t.style.zIndex = r_.toString(),
        t.style.backgroundColor = "#FF0000",
        t.title = "select to enable accessibility for this content",
        t.addEventListener("focus", () => {
            this._isMobileAccessibility = !0,
            this.activate(),
            this.destroyTouchHook()
        }
        ),
        document.body.appendChild(t),
        this._hookDiv = t
    }
    destroyTouchHook() {
        this._hookDiv && (document.body.removeChild(this._hookDiv),
        this._hookDiv = null)
    }
    activate() {
        var t;
        this._isActive || (this._isActive = !0,
        globalThis.document.addEventListener("mousemove", this._onMouseMove, !0),
        globalThis.removeEventListener("keydown", this._onKeyDown, !1),
        this.renderer.on("postrender", this.update, this),
        (t = this.renderer.view.parentNode) == null || t.appendChild(this.div))
    }
    deactivate() {
        var t;
        !this._isActive || this._isMobileAccessibility || (this._isActive = !1,
        globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0),
        globalThis.addEventListener("keydown", this._onKeyDown, !1),
        this.renderer.off("postrender", this.update),
        (t = this.div.parentNode) == null || t.removeChild(this.div))
    }
    updateAccessibleObjects(t) {
        if (!t.visible || !t.accessibleChildren)
            return;
        t.accessible && t.isInteractive() && (t._accessibleActive || this.addChild(t),
        t.renderId = this.renderId);
        const e = t.children;
        if (e)
            for (let r = 0; r < e.length; r++)
                this.updateAccessibleObjects(e[r])
    }
    update() {
        const t = performance.now();
        if (Pr.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency,
        !this.renderer.renderingToScreen))
            return;
        this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
        const {x: e, y: r, width: s, height: n} = this.renderer.view.getBoundingClientRect()
          , {width: a, height: o, resolution: l} = this.renderer
          , c = s / a * l
          , p = n / o * l;
        let m = this.div;
        m.style.left = `${e}px`,
        m.style.top = `${r}px`,
        m.style.width = `${a}px`,
        m.style.height = `${o}px`;
        for (let f = 0; f < this.children.length; f++) {
            const v = this.children[f];
            if (v.renderId !== this.renderId)
                v._accessibleActive = !1,
                Pi(this.children, f, 1),
                this.div.removeChild(v._accessibleDiv),
                this.pool.push(v._accessibleDiv),
                v._accessibleDiv = null,
                f--;
            else {
                m = v._accessibleDiv;
                let _ = v.hitArea;
                const T = v.worldTransform;
                v.hitArea ? (m.style.left = `${(T.tx + _.x * T.a) * c}px`,
                m.style.top = `${(T.ty + _.y * T.d) * p}px`,
                m.style.width = `${_.width * T.a * c}px`,
                m.style.height = `${_.height * T.d * p}px`) : (_ = v.getBounds(),
                this.capHitArea(_),
                m.style.left = `${_.x * c}px`,
                m.style.top = `${_.y * p}px`,
                m.style.width = `${_.width * c}px`,
                m.style.height = `${_.height * p}px`,
                m.title !== v.accessibleTitle && v.accessibleTitle !== null && (m.title = v.accessibleTitle),
                m.getAttribute("aria-label") !== v.accessibleHint && v.accessibleHint !== null && m.setAttribute("aria-label", v.accessibleHint)),
                (v.accessibleTitle !== m.title || v.tabIndex !== m.tabIndex) && (m.title = v.accessibleTitle,
                m.tabIndex = v.tabIndex,
                this.debug && this.updateDebugHTML(m))
            }
        }
        this.renderId++
    }
    updateDebugHTML(t) {
        t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`
    }
    capHitArea(t) {
        t.x < 0 && (t.width += t.x,
        t.x = 0),
        t.y < 0 && (t.height += t.y,
        t.y = 0);
        const {width: e, height: r} = this.renderer;
        t.x + t.width > e && (t.width = e - t.x),
        t.y + t.height > r && (t.height = r - t.y)
    }
    addChild(t) {
        let e = this.pool.pop();
        e || (e = document.createElement("button"),
        e.style.width = `${Gn}px`,
        e.style.height = `${Gn}px`,
        e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent",
        e.style.position = "absolute",
        e.style.zIndex = ic.toString(),
        e.style.borderStyle = "none",
        navigator.userAgent.toLowerCase().includes("chrome") ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"),
        navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"),
        e.addEventListener("click", this._onClick.bind(this)),
        e.addEventListener("focus", this._onFocus.bind(this)),
        e.addEventListener("focusout", this._onFocusOut.bind(this))),
        e.style.pointerEvents = t.accessiblePointerEvents,
        e.type = t.accessibleType,
        t.accessibleTitle && t.accessibleTitle !== null ? e.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (e.title = `displayObject ${t.tabIndex}`),
        t.accessibleHint && t.accessibleHint !== null && e.setAttribute("aria-label", t.accessibleHint),
        this.debug && this.updateDebugHTML(e),
        t._accessibleActive = !0,
        t._accessibleDiv = e,
        e.displayObject = t,
        this.children.push(t),
        this.div.appendChild(t._accessibleDiv),
        t._accessibleDiv.tabIndex = t.tabIndex
    }
    _dispatchEvent(t, e) {
        const {displayObject: r} = t.target
          , s = this.renderer.events.rootBoundary
          , n = Object.assign(new ln(s), {
            target: r
        });
        s.rootTarget = this.renderer.lastObjectRendered,
        e.forEach(a => s.dispatchEvent(n, a))
    }
    _onClick(t) {
        this._dispatchEvent(t, ["click", "pointertap", "tap"])
    }
    _onFocus(t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"),
        this._dispatchEvent(t, ["mouseover"])
    }
    _onFocusOut(t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"),
        this._dispatchEvent(t, ["mouseout"])
    }
    _onKeyDown(t) {
        t.keyCode === Z0 && this.activate()
    }
    _onMouseMove(t) {
        t.movementX === 0 && t.movementY === 0 || this.deactivate()
    }
    destroy() {
        this.destroyTouchHook(),
        this.div = null,
        globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0),
        globalThis.removeEventListener("keydown", this._onKeyDown),
        this.pool = null,
        this.children = null,
        this.renderer = null
    }
}
of.extension = {
    name: "accessibility",
    type: [et.RendererPlugin, et.CanvasRendererPlugin]
};
ot.add(of);
const hf = class Vh {
    constructor(t) {
        this.stage = new Ue,
        t = Object.assign({
            forceCanvas: !1
        }, t),
        this.renderer = e0(t),
        Vh._plugins.forEach(e => {
            e.init.call(this, t)
        }
        )
    }
    render() {
        this.renderer.render(this.stage)
    }
    get view() {
        var t;
        return (t = this.renderer) == null ? void 0 : t.view
    }
    get screen() {
        var t;
        return (t = this.renderer) == null ? void 0 : t.screen
    }
    destroy(t, e) {
        const r = Vh._plugins.slice(0);
        r.reverse(),
        r.forEach(s => {
            s.destroy.call(this)
        }
        ),
        this.stage.destroy(e),
        this.stage = null,
        this.renderer.destroy(t),
        this.renderer = null
    }
}
;
hf._plugins = [];
let i_ = hf;
ot.handleByList(et.Application, i_._plugins);
class lf {
    static init(t) {
        Object.defineProperty(this, "resizeTo", {
            set(e) {
                globalThis.removeEventListener("resize", this.queueResize),
                this._resizeTo = e,
                e && (globalThis.addEventListener("resize", this.queueResize),
                this.resize())
            },
            get() {
                return this._resizeTo
            }
        }),
        this.queueResize = () => {
            this._resizeTo && (this.cancelResize(),
            this._resizeId = requestAnimationFrame( () => this.resize()))
        }
        ,
        this.cancelResize = () => {
            this._resizeId && (cancelAnimationFrame(this._resizeId),
            this._resizeId = null)
        }
        ,
        this.resize = () => {
            if (!this._resizeTo)
                return;
            this.cancelResize();
            let e, r;
            if (this._resizeTo === globalThis.window)
                e = globalThis.innerWidth,
                r = globalThis.innerHeight;
            else {
                const {clientWidth: s, clientHeight: n} = this._resizeTo;
                e = s,
                r = n
            }
            this.renderer.resize(e, r),
            this.render()
        }
        ,
        this._resizeId = null,
        this._resizeTo = null,
        this.resizeTo = t.resizeTo || null
    }
    static destroy() {
        globalThis.removeEventListener("resize", this.queueResize),
        this.cancelResize(),
        this.cancelResize = null,
        this.queueResize = null,
        this.resizeTo = null,
        this.resize = null
    }
}
lf.extension = et.Application;
ot.add(lf);
const nc = {
    loader: et.LoadParser,
    resolver: et.ResolveParser,
    cache: et.CacheParser,
    detection: et.DetectionParser
};
ot.handle(et.Asset, i => {
    const t = i.ref;
    Object.entries(nc).filter( ([e]) => !!t[e]).forEach( ([e,r]) => ot.add(Object.assign(t[e], {
        extension: t[e].extension ?? r
    })))
}
, i => {
    const t = i.ref;
    Object.keys(nc).filter(e => !!t[e]).forEach(e => ot.remove(t[e]))
}
);
class s_ {
    constructor(t, e=!1) {
        this._loader = t,
        this._assetList = [],
        this._isLoading = !1,
        this._maxConcurrent = 1,
        this.verbose = e
    }
    add(t) {
        t.forEach(e => {
            this._assetList.push(e)
        }
        ),
        this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList),
        this._isActive && !this._isLoading && this._next()
    }
    async _next() {
        if (this._assetList.length && this._isActive) {
            this._isLoading = !0;
            const t = []
              , e = Math.min(this._assetList.length, this._maxConcurrent);
            for (let r = 0; r < e; r++)
                t.push(this._assetList.pop());
            await this._loader.load(t),
            this._isLoading = !1,
            this._next()
        }
    }
    get active() {
        return this._isActive
    }
    set active(t) {
        this._isActive !== t && (this._isActive = t,
        t && !this._isLoading && this._next())
    }
}
function bs(i, t) {
    if (Array.isArray(t)) {
        for (const e of t)
            if (i.startsWith(`data:${e}`))
                return !0;
        return !1
    }
    return i.startsWith(`data:${t}`)
}
function di(i, t) {
    const e = i.split("?")[0]
      , r = ge.extname(e).toLowerCase();
    return Array.isArray(t) ? t.includes(r) : r === t
}
const ar = (i, t, e=!1) => (Array.isArray(i) || (i = [i]),
t ? i.map(r => typeof r == "string" || e ? t(r) : r) : i)
  , $h = (i, t) => {
    const e = t.split("?")[1];
    return e && (i += `?${e}`),
    i
}
;
function uf(i, t, e, r, s) {
    const n = t[e];
    for (let a = 0; a < n.length; a++) {
        const o = n[a];
        e < t.length - 1 ? uf(i.replace(r[e], o), t, e + 1, r, s) : s.push(i.replace(r[e], o))
    }
}
function n_(i) {
    const t = /\{(.*?)\}/g
      , e = i.match(t)
      , r = [];
    if (e) {
        const s = [];
        e.forEach(n => {
            const a = n.substring(1, n.length - 1).split(",");
            s.push(a)
        }
        ),
        uf(i, s, 0, e, r)
    } else
        r.push(i);
    return r
}
const _a = i => !Array.isArray(i);
class a_ {
    constructor() {
        this._parsers = [],
        this._cache = new Map,
        this._cacheMap = new Map
    }
    reset() {
        this._cacheMap.clear(),
        this._cache.clear()
    }
    has(t) {
        return this._cache.has(t)
    }
    get(t) {
        const e = this._cache.get(t);
        return e || console.warn(`[Assets] Asset id ${t} was not found in the Cache`),
        e
    }
    set(t, e) {
        const r = ar(t);
        let s;
        for (let o = 0; o < this.parsers.length; o++) {
            const l = this.parsers[o];
            if (l.test(e)) {
                s = l.getCacheableAssets(r, e);
                break
            }
        }
        s || (s = {},
        r.forEach(o => {
            s[o] = e
        }
        ));
        const n = Object.keys(s)
          , a = {
            cacheKeys: n,
            keys: r
        };
        if (r.forEach(o => {
            this._cacheMap.set(o, a)
        }
        ),
        n.forEach(o => {
            this._cache.has(o) && this._cache.get(o) !== e && console.warn("[Cache] already has key:", o),
            this._cache.set(o, s[o])
        }
        ),
        e instanceof ut) {
            const o = e;
            r.forEach(l => {
                o.baseTexture !== ut.EMPTY.baseTexture && Tt.addToCache(o.baseTexture, l),
                ut.addToCache(o, l)
            }
            )
        }
    }
    remove(t) {
        if (!this._cacheMap.has(t)) {
            console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
            return
        }
        const e = this._cacheMap.get(t);
        e.cacheKeys.forEach(r => {
            this._cache.delete(r)
        }
        ),
        e.keys.forEach(r => {
            this._cacheMap.delete(r)
        }
        )
    }
    get parsers() {
        return this._parsers
    }
}
const Ci = new a_;
class o_ {
    constructor() {
        this._parsers = [],
        this._parsersValidated = !1,
        this.parsers = new Proxy(this._parsers,{
            set: (t, e, r) => (this._parsersValidated = !1,
            t[e] = r,
            !0)
        }),
        this.promiseCache = {}
    }
    reset() {
        this._parsersValidated = !1,
        this.promiseCache = {}
    }
    _getLoadPromiseAndParser(t, e) {
        const r = {
            promise: null,
            parser: null
        };
        return r.promise = (async () => {
            var a, o;
            let s = null
              , n = null;
            if (e.loadParser && (n = this._parserHash[e.loadParser],
            n || console.warn(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),
            !n) {
                for (let l = 0; l < this.parsers.length; l++) {
                    const c = this.parsers[l];
                    if (c.load && ((a = c.test) != null && a.call(c, t, e, this))) {
                        n = c;
                        break
                    }
                }
                if (!n)
                    return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),
                    null
            }
            s = await n.load(t, e, this),
            r.parser = n;
            for (let l = 0; l < this.parsers.length; l++) {
                const c = this.parsers[l];
                c.parse && c.parse && await ((o = c.testParse) == null ? void 0 : o.call(c, s, e, this)) && (s = await c.parse(s, e, this) || s,
                r.parser = c)
            }
            return s
        }
        )(),
        r
    }
    async load(t, e) {
        this._parsersValidated || this._validateParsers();
        let r = 0;
        const s = {}
          , n = _a(t)
          , a = ar(t, c => ({
            alias: [c],
            src: c
        }))
          , o = a.length
          , l = a.map(async c => {
            const p = ge.toAbsolute(c.src);
            if (!s[c.src])
                try {
                    this.promiseCache[p] || (this.promiseCache[p] = this._getLoadPromiseAndParser(p, c)),
                    s[c.src] = await this.promiseCache[p].promise,
                    e && e(++r / o)
                } catch (m) {
                    throw delete this.promiseCache[p],
                    delete s[c.src],
                    new Error(`[Loader.load] Failed to load ${p}.
${m}`)
                }
        }
        );
        return await Promise.all(l),
        n ? s[a[0].src] : s
    }
    async unload(t) {
        const e = ar(t, r => ({
            alias: [r],
            src: r
        })).map(async r => {
            var a, o;
            const s = ge.toAbsolute(r.src)
              , n = this.promiseCache[s];
            if (n) {
                const l = await n.promise;
                delete this.promiseCache[s],
                (o = (a = n.parser) == null ? void 0 : a.unload) == null || o.call(a, l, r, this)
            }
        }
        );
        await Promise.all(e)
    }
    _validateParsers() {
        this._parsersValidated = !0,
        this._parserHash = this._parsers.filter(t => t.name).reduce( (t, e) => (t[e.name] && console.warn(`[Assets] loadParser name conflict "${e.name}"`),
        {
            ...t,
            [e.name]: e
        }), {})
    }
}
var dr = (i => (i[i.Low = 0] = "Low",
i[i.Normal = 1] = "Normal",
i[i.High = 2] = "High",
i))(dr || {});
const h_ = ".json"
  , l_ = "application/json"
  , u_ = {
    extension: {
        type: et.LoadParser,
        priority: dr.Low
    },
    name: "loadJson",
    test(i) {
        return bs(i, l_) || di(i, h_)
    },
    async load(i) {
        return await (await nt.ADAPTER.fetch(i)).json()
    }
};
ot.add(u_);
const c_ = ".txt"
  , d_ = "text/plain"
  , f_ = {
    name: "loadTxt",
    extension: {
        type: et.LoadParser,
        priority: dr.Low
    },
    test(i) {
        return bs(i, d_) || di(i, c_)
    },
    async load(i) {
        return await (await nt.ADAPTER.fetch(i)).text()
    }
};
ot.add(f_);
const p_ = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
  , g_ = [".ttf", ".otf", ".woff", ".woff2"]
  , m_ = ["font/ttf", "font/otf", "font/woff", "font/woff2"]
  , y_ = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function v_(i) {
    const t = ge.extname(i)
      , e = ge.basename(i, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(n => n.charAt(0).toUpperCase() + n.slice(1));
    let r = e.length > 0;
    for (const n of e)
        if (!n.match(y_)) {
            r = !1;
            break
        }
    let s = e.join(" ");
    return r || (s = `"${s.replace(/[\\"]/g, "\\$&")}"`),
    s
}
const __ = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function x_(i) {
    return __.test(i) ? i : encodeURI(i)
}
const b_ = {
    extension: {
        type: et.LoadParser,
        priority: dr.Low
    },
    name: "loadWebFont",
    test(i) {
        return bs(i, m_) || di(i, g_)
    },
    async load(i, t) {
        var r, s, n;
        const e = nt.ADAPTER.getFontFaceSet();
        if (e) {
            const a = []
              , o = ((r = t.data) == null ? void 0 : r.family) ?? v_(i)
              , l = ((n = (s = t.data) == null ? void 0 : s.weights) == null ? void 0 : n.filter(p => p_.includes(p))) ?? ["normal"]
              , c = t.data ?? {};
            for (let p = 0; p < l.length; p++) {
                const m = l[p]
                  , f = new FontFace(o,`url(${x_(i)})`,{
                    ...c,
                    weight: m
                });
                await f.load(),
                e.add(f),
                a.push(f)
            }
            return a.length === 1 ? a[0] : a
        }
        return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"),
        null
    },
    unload(i) {
        (Array.isArray(i) ? i : [i]).forEach(t => nt.ADAPTER.getFontFaceSet().delete(t))
    }
};
ot.add(b_);
const T_ = `(function() {
  "use strict";
  const WHITE_PNG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
  async function checkImageBitmap() {
    try {
      if (typeof createImageBitmap != "function")
        return !1;
      const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await createImageBitmap(imageBlob);
      return imageBitmap.width === 1 && imageBitmap.height === 1;
    } catch {
      return !1;
    }
  }
  checkImageBitmap().then((result) => {
    self.postMessage(result);
  });
})();
`;
let cs = null
  , jh = class {
    constructor() {
        cs || (cs = URL.createObjectURL(new Blob([T_],{
            type: "application/javascript"
        }))),
        this.worker = new Worker(cs)
    }
}
;
jh.revokeObjectURL = function() {
    cs && (URL.revokeObjectURL(cs),
    cs = null)
}
;
const w_ = `(function() {
  "use strict";
  async function loadImageBitmap(url) {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status} \${response.statusText}\`);
    const imageBlob = await response.blob();
    return await createImageBitmap(imageBlob);
  }
  self.onmessage = async (event) => {
    try {
      const imageBitmap = await loadImageBitmap(event.data.data[0]);
      self.postMessage({
        data: imageBitmap,
        uuid: event.data.uuid,
        id: event.data.id
      }, [imageBitmap]);
    } catch (e) {
      self.postMessage({
        error: e,
        uuid: event.data.uuid,
        id: event.data.id
      });
    }
  };
})();
`;
let ds = null;
class cf {
    constructor() {
        ds || (ds = URL.createObjectURL(new Blob([w_],{
            type: "application/javascript"
        }))),
        this.worker = new Worker(ds)
    }
}
cf.revokeObjectURL = function() {
    ds && (URL.revokeObjectURL(ds),
    ds = null)
}
;
let ac = 0, Ho;
class E_ {
    constructor() {
        this._initialized = !1,
        this._createdWorkers = 0,
        this.workerPool = [],
        this.queue = [],
        this.resolveHash = {}
    }
    isImageBitmapSupported() {
        return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise(t => {
            const {worker: e} = new jh;
            e.addEventListener("message", r => {
                e.terminate(),
                jh.revokeObjectURL(),
                t(r.data)
            }
            )
        }
        ),
        this._isImageBitmapSupported)
    }
    loadImageBitmap(t) {
        return this._run("loadImageBitmap", [t])
    }
    async _initWorkers() {
        this._initialized || (this._initialized = !0)
    }
    getWorker() {
        Ho === void 0 && (Ho = navigator.hardwareConcurrency || 4);
        let t = this.workerPool.pop();
        return !t && this._createdWorkers < Ho && (this._createdWorkers++,
        t = new cf().worker,
        t.addEventListener("message", e => {
            this.complete(e.data),
            this.returnWorker(e.target),
            this.next()
        }
        )),
        t
    }
    returnWorker(t) {
        this.workerPool.push(t)
    }
    complete(t) {
        t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data),
        this.resolveHash[t.uuid] = null
    }
    async _run(t, e) {
        await this._initWorkers();
        const r = new Promise( (s, n) => {
            this.queue.push({
                id: t,
                arguments: e,
                resolve: s,
                reject: n
            })
        }
        );
        return this.next(),
        r
    }
    next() {
        if (!this.queue.length)
            return;
        const t = this.getWorker();
        if (!t)
            return;
        const e = this.queue.pop()
          , r = e.id;
        this.resolveHash[ac] = {
            resolve: e.resolve,
            reject: e.reject
        },
        t.postMessage({
            data: e.arguments,
            uuid: ac++,
            id: r
        })
    }
}
const oc = new E_;
function un(i, t, e) {
    i.resource.internal = !0;
    const r = new ut(i)
      , s = () => {
        delete t.promiseCache[e],
        Ci.has(e) && Ci.remove(e)
    }
    ;
    return r.baseTexture.once("destroyed", () => {
        e in t.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."),
        s())
    }
    ),
    r.once("destroyed", () => {
        i.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),
        s())
    }
    ),
    r
}
const A_ = [".jpeg", ".jpg", ".png", ".webp", ".avif"]
  , S_ = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function C_(i) {
    const t = await nt.ADAPTER.fetch(i);
    if (!t.ok)
        throw new Error(`[loadImageBitmap] Failed to fetch ${i}: ${t.status} ${t.statusText}`);
    const e = await t.blob();
    return await createImageBitmap(e)
}
const ka = {
    name: "loadTextures",
    extension: {
        type: et.LoadParser,
        priority: dr.High
    },
    config: {
        preferWorkers: !0,
        preferCreateImageBitmap: !0,
        crossOrigin: "anonymous"
    },
    test(i) {
        return bs(i, S_) || di(i, A_)
    },
    async load(i, t, e) {
        var o;
        const r = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
        let s;
        r ? this.config.preferWorkers && await oc.isImageBitmapSupported() ? s = await oc.loadImageBitmap(i) : s = await C_(i) : s = await new Promise( (l, c) => {
            const p = new Image;
            p.crossOrigin = this.config.crossOrigin,
            p.src = i,
            p.complete ? l(p) : (p.onload = () => l(p),
            p.onerror = m => c(m))
        }
        );
        const n = {
            ...t.data
        };
        n.resolution ?? (n.resolution = Fr(i)),
        r && ((o = n.resourceOptions) == null ? void 0 : o.ownsImageBitmap) === void 0 && (n.resourceOptions = {
            ...n.resourceOptions
        },
        n.resourceOptions.ownsImageBitmap = !0);
        const a = new Tt(s,n);
        return a.resource.src = i,
        un(a, e, i)
    },
    unload(i) {
        i.destroy(!0)
    }
};
ot.add(ka);
const I_ = ".svg"
  , R_ = "image/svg+xml"
  , P_ = {
    extension: {
        type: et.LoadParser,
        priority: dr.High
    },
    name: "loadSVG",
    test(i) {
        return bs(i, R_) || di(i, I_)
    },
    async testParse(i) {
        return Mh.test(i)
    },
    async parse(i, t, e) {
        var n;
        const r = new Mh(i,(n = t == null ? void 0 : t.data) == null ? void 0 : n.resourceOptions);
        await r.load();
        const s = new Tt(r,{
            resolution: Fr(i),
            ...t == null ? void 0 : t.data
        });
        return s.resource.src = t.src,
        un(s, e, t.src)
    },
    async load(i, t) {
        return (await nt.ADAPTER.fetch(i)).text()
    },
    unload: ka.unload
};
ot.add(P_);
const M_ = [".mp4", ".m4v", ".webm", ".ogv"]
  , D_ = ["video/mp4", "video/webm", "video/ogg"]
  , B_ = {
    name: "loadVideo",
    extension: {
        type: et.LoadParser,
        priority: dr.High
    },
    config: {
        defaultAutoPlay: !0,
        defaultUpdateFPS: 0,
        defaultLoop: !1,
        defaultMuted: !1,
        defaultPlaysinline: !0
    },
    test(i) {
        return bs(i, D_) || di(i, M_)
    },
    async load(i, t, e) {
        var a;
        let r;
        const s = await (await nt.ADAPTER.fetch(i)).blob()
          , n = URL.createObjectURL(s);
        try {
            const o = {
                autoPlay: this.config.defaultAutoPlay,
                updateFPS: this.config.defaultUpdateFPS,
                loop: this.config.defaultLoop,
                muted: this.config.defaultMuted,
                playsinline: this.config.defaultPlaysinline,
                ...(a = t == null ? void 0 : t.data) == null ? void 0 : a.resourceOptions,
                autoLoad: !0
            }
              , l = new qd(n,o);
            await l.load();
            const c = new Tt(l,{
                alphaMode: await Qc(),
                resolution: Fr(i),
                ...t == null ? void 0 : t.data
            });
            c.resource.src = i,
            r = un(c, e, i),
            r.baseTexture.once("destroyed", () => {
                URL.revokeObjectURL(n)
            }
            )
        } catch (o) {
            throw URL.revokeObjectURL(n),
            o
        }
        return r
    },
    unload(i) {
        i.destroy(!0)
    }
};
ot.add(B_);
class F_ {
    constructor() {
        this._defaultBundleIdentifierOptions = {
            connector: "-",
            createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
            extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
        },
        this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector,
        this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId,
        this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle,
        this._assetMap = {},
        this._preferredOrder = [],
        this._parsers = [],
        this._resolverHash = {},
        this._bundles = {}
    }
    setBundleIdentifier(t) {
        if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector,
        this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId,
        this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle,
        this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar")
            throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")
    }
    prefer(...t) {
        t.forEach(e => {
            this._preferredOrder.push(e),
            e.priority || (e.priority = Object.keys(e.params))
        }
        ),
        this._resolverHash = {}
    }
    set basePath(t) {
        this._basePath = t
    }
    get basePath() {
        return this._basePath
    }
    set rootPath(t) {
        this._rootPath = t
    }
    get rootPath() {
        return this._rootPath
    }
    get parsers() {
        return this._parsers
    }
    reset() {
        this.setBundleIdentifier(this._defaultBundleIdentifierOptions),
        this._assetMap = {},
        this._preferredOrder = [],
        this._resolverHash = {},
        this._rootPath = null,
        this._basePath = null,
        this._manifest = null,
        this._bundles = {},
        this._defaultSearchParams = null
    }
    setDefaultSearchParams(t) {
        if (typeof t == "string")
            this._defaultSearchParams = t;
        else {
            const e = t;
            this._defaultSearchParams = Object.keys(e).map(r => `${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`).join("&")
        }
    }
    getAlias(t) {
        const {alias: e, name: r, src: s, srcs: n} = t;
        return ar(e || r || s || n, a => typeof a == "string" ? a : Array.isArray(a) ? a.map(o => (o == null ? void 0 : o.src) ?? (o == null ? void 0 : o.srcs) ?? o) : a != null && a.src || a != null && a.srcs ? a.src ?? a.srcs : a, !0)
    }
    addManifest(t) {
        this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"),
        this._manifest = t,
        t.bundles.forEach(e => {
            this.addBundle(e.name, e.assets)
        }
        )
    }
    addBundle(t, e) {
        const r = [];
        Array.isArray(e) ? e.forEach(s => {
            const n = s.src ?? s.srcs
              , a = s.alias ?? s.name;
            let o;
            if (typeof a == "string") {
                const l = this._createBundleAssetId(t, a);
                r.push(l),
                o = [a, l]
            } else {
                const l = a.map(c => this._createBundleAssetId(t, c));
                r.push(...l),
                o = [...a, ...l]
            }
            this.add({
                ...s,
                alias: o,
                src: n
            })
        }
        ) : Object.keys(e).forEach(s => {
            const n = [s, this._createBundleAssetId(t, s)];
            if (typeof e[s] == "string")
                this.add({
                    alias: n,
                    src: e[s]
                });
            else if (Array.isArray(e[s]))
                this.add({
                    alias: n,
                    src: e[s]
                });
            else {
                const a = e[s]
                  , o = a.src ?? a.srcs;
                this.add({
                    ...a,
                    alias: n,
                    src: Array.isArray(o) ? o : [o]
                })
            }
            r.push(...n)
        }
        ),
        this._bundles[t] = r
    }
    add(t, e, r, s, n) {
        const a = [];
        typeof t == "string" || Array.isArray(t) && typeof t[0] == "string" ? (vt("7.2.0", `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`),
        a.push({
            alias: t,
            src: e,
            data: r,
            format: s,
            loadParser: n
        })) : Array.isArray(t) ? a.push(...t) : a.push(t);
        let o;
        o = l => {
            this.hasKey(l) && console.warn(`[Resolver] already has key: ${l} overwriting`)
        }
        ,
        ar(a).forEach(l => {
            const {src: c, srcs: p} = l;
            let {data: m, format: f, loadParser: v} = l;
            const _ = ar(c || p).map(E => typeof E == "string" ? n_(E) : Array.isArray(E) ? E : [E])
              , T = this.getAlias(l);
            Array.isArray(T) ? T.forEach(o) : o(T);
            const A = [];
            _.forEach(E => {
                E.forEach(I => {
                    let S = {};
                    if (typeof I != "object") {
                        S.src = I;
                        for (let P = 0; P < this._parsers.length; P++) {
                            const k = this._parsers[P];
                            if (k.test(I)) {
                                S = k.parse(I);
                                break
                            }
                        }
                    } else
                        m = I.data ?? m,
                        f = I.format ?? f,
                        v = I.loadParser ?? v,
                        S = {
                            ...S,
                            ...I
                        };
                    if (!T)
                        throw new Error(`[Resolver] alias is undefined for this asset: ${S.src}`);
                    S = this.buildResolvedAsset(S, {
                        aliases: T,
                        data: m,
                        format: f,
                        loadParser: v
                    }),
                    A.push(S)
                }
                )
            }
            ),
            T.forEach(E => {
                this._assetMap[E] = A
            }
            )
        }
        )
    }
    resolveBundle(t) {
        const e = _a(t);
        t = ar(t);
        const r = {};
        return t.forEach(s => {
            const n = this._bundles[s];
            if (n) {
                const a = this.resolve(n)
                  , o = {};
                for (const l in a) {
                    const c = a[l];
                    o[this._extractAssetIdFromBundle(s, l)] = c
                }
                r[s] = o
            }
        }
        ),
        e ? r[t[0]] : r
    }
    resolveUrl(t) {
        const e = this.resolve(t);
        if (typeof t != "string") {
            const r = {};
            for (const s in e)
                r[s] = e[s].src;
            return r
        }
        return e.src
    }
    resolve(t) {
        const e = _a(t);
        t = ar(t);
        const r = {};
        return t.forEach(s => {
            if (!this._resolverHash[s])
                if (this._assetMap[s]) {
                    let n = this._assetMap[s];
                    const a = n[0]
                      , o = this._getPreferredOrder(n);
                    o == null || o.priority.forEach(l => {
                        o.params[l].forEach(c => {
                            const p = n.filter(m => m[l] ? m[l] === c : !1);
                            p.length && (n = p)
                        }
                        )
                    }
                    ),
                    this._resolverHash[s] = n[0] ?? a
                } else
                    this._resolverHash[s] = this.buildResolvedAsset({
                        alias: [s],
                        src: s
                    }, {});
            r[s] = this._resolverHash[s]
        }
        ),
        e ? r[t[0]] : r
    }
    hasKey(t) {
        return !!this._assetMap[t]
    }
    hasBundle(t) {
        return !!this._bundles[t]
    }
    _getPreferredOrder(t) {
        for (let e = 0; e < t.length; e++) {
            const r = t[0]
              , s = this._preferredOrder.find(n => n.params.format.includes(r.format));
            if (s)
                return s
        }
        return this._preferredOrder[0]
    }
    _appendDefaultSearchParams(t) {
        if (!this._defaultSearchParams)
            return t;
        const e = /\?/.test(t) ? "&" : "?";
        return `${t}${e}${this._defaultSearchParams}`
    }
    buildResolvedAsset(t, e) {
        const {aliases: r, data: s, loadParser: n, format: a} = e;
        return (this._basePath || this._rootPath) && (t.src = ge.toAbsolute(t.src, this._basePath, this._rootPath)),
        t.alias = r ?? t.alias ?? [t.src],
        t.src = this._appendDefaultSearchParams(t.src),
        t.data = {
            ...s || {},
            ...t.data
        },
        t.loadParser = n ?? t.loadParser,
        t.format = a ?? t.format ?? ge.extname(t.src).slice(1),
        t.srcs = t.src,
        t.name = t.alias,
        t
    }
}
class O_ {
    constructor() {
        this._detections = [],
        this._initialized = !1,
        this.resolver = new F_,
        this.loader = new o_,
        this.cache = Ci,
        this._backgroundLoader = new s_(this.loader),
        this._backgroundLoader.active = !0,
        this.reset()
    }
    async init(t={}) {
        var n, a;
        if (this._initialized) {
            console.warn("[Assets]AssetManager already initialized, did you load before calling this Assets.init()?");
            return
        }
        if (this._initialized = !0,
        t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams),
        t.basePath && (this.resolver.basePath = t.basePath),
        t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier),
        t.manifest) {
            let o = t.manifest;
            typeof o == "string" && (o = await this.load(o)),
            this.resolver.addManifest(o)
        }
        const e = ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1
          , r = typeof e == "number" ? [e] : e
          , s = await this._detectFormats({
            preferredFormats: (a = t.texturePreference) == null ? void 0 : a.format,
            skipDetections: t.skipDetections,
            detections: this._detections
        });
        this.resolver.prefer({
            params: {
                format: s,
                resolution: r
            }
        }),
        t.preferences && this.setPreferences(t.preferences)
    }
    add(t, e, r, s, n) {
        this.resolver.add(t, e, r, s, n)
    }
    async load(t, e) {
        this._initialized || await this.init();
        const r = _a(t)
          , s = ar(t).map(o => {
            if (typeof o != "string") {
                const l = this.resolver.getAlias(o);
                return l.some(c => !this.resolver.hasKey(c)) && this.add(o),
                Array.isArray(l) ? l[0] : l
            }
            return this.resolver.hasKey(o) || this.add({
                alias: o,
                src: o
            }),
            o
        }
        )
          , n = this.resolver.resolve(s)
          , a = await this._mapLoadToResolve(n, e);
        return r ? a[s[0]] : a
    }
    addBundle(t, e) {
        this.resolver.addBundle(t, e)
    }
    async loadBundle(t, e) {
        this._initialized || await this.init();
        let r = !1;
        typeof t == "string" && (r = !0,
        t = [t]);
        const s = this.resolver.resolveBundle(t)
          , n = {}
          , a = Object.keys(s);
        let o = 0
          , l = 0;
        const c = () => {
            e == null || e(++o / l)
        }
          , p = a.map(m => {
            const f = s[m];
            return l += Object.keys(f).length,
            this._mapLoadToResolve(f, c).then(v => {
                n[m] = v
            }
            )
        }
        );
        return await Promise.all(p),
        r ? n[t[0]] : n
    }
    async backgroundLoad(t) {
        this._initialized || await this.init(),
        typeof t == "string" && (t = [t]);
        const e = this.resolver.resolve(t);
        this._backgroundLoader.add(Object.values(e))
    }
    async backgroundLoadBundle(t) {
        this._initialized || await this.init(),
        typeof t == "string" && (t = [t]);
        const e = this.resolver.resolveBundle(t);
        Object.values(e).forEach(r => {
            this._backgroundLoader.add(Object.values(r))
        }
        )
    }
    reset() {
        this.resolver.reset(),
        this.loader.reset(),
        this.cache.reset(),
        this._initialized = !1
    }
    get(t) {
        if (typeof t == "string")
            return Ci.get(t);
        const e = {};
        for (let r = 0; r < t.length; r++)
            e[r] = Ci.get(t[r]);
        return e
    }
    async _mapLoadToResolve(t, e) {
        const r = Object.values(t)
          , s = Object.keys(t);
        this._backgroundLoader.active = !1;
        const n = await this.loader.load(r, e);
        this._backgroundLoader.active = !0;
        const a = {};
        return r.forEach( (o, l) => {
            const c = n[o.src]
              , p = [o.src];
            o.alias && p.push(...o.alias),
            a[s[l]] = c,
            Ci.set(p, c)
        }
        ),
        a
    }
    async unload(t) {
        this._initialized || await this.init();
        const e = ar(t).map(s => typeof s != "string" ? s.src : s)
          , r = this.resolver.resolve(e);
        await this._unloadFromResolved(r)
    }
    async unloadBundle(t) {
        this._initialized || await this.init(),
        t = ar(t);
        const e = this.resolver.resolveBundle(t)
          , r = Object.keys(e).map(s => this._unloadFromResolved(e[s]));
        await Promise.all(r)
    }
    async _unloadFromResolved(t) {
        const e = Object.values(t);
        e.forEach(r => {
            Ci.remove(r.src)
        }
        ),
        await this.loader.unload(e)
    }
    async _detectFormats(t) {
        let e = [];
        t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]);
        for (const r of t.detections)
            t.skipDetections || await r.test() ? e = await r.add(e) : t.skipDetections || (e = await r.remove(e));
        return e = e.filter( (r, s) => e.indexOf(r) === s),
        e
    }
    get detections() {
        return this._detections
    }
    get preferWorkers() {
        return ka.config.preferWorkers
    }
    set preferWorkers(t) {
        vt("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."),
        this.setPreferences({
            preferWorkers: t
        })
    }
    setPreferences(t) {
        this.loader.parsers.forEach(e => {
            e.config && Object.keys(e.config).filter(r => r in t).forEach(r => {
                e.config[r] = t[r]
            }
            )
        }
        )
    }
}
const Hn = new O_;
ot.handleByList(et.LoadParser, Hn.loader.parsers).handleByList(et.ResolveParser, Hn.resolver.parsers).handleByList(et.CacheParser, Hn.cache.parsers).handleByList(et.DetectionParser, Hn.detections);
const N_ = {
    extension: et.CacheParser,
    test: i => Array.isArray(i) && i.every(t => t instanceof ut),
    getCacheableAssets: (i, t) => {
        const e = {};
        return i.forEach(r => {
            t.forEach( (s, n) => {
                e[r + (n === 0 ? "" : n + 1)] = s
            }
            )
        }
        ),
        e
    }
};
ot.add(N_);
async function df(i) {
    if ("Image"in globalThis)
        return new Promise(t => {
            const e = new Image;
            e.onload = () => {
                t(!0)
            }
            ,
            e.onerror = () => {
                t(!1)
            }
            ,
            e.src = i
        }
        );
    if ("createImageBitmap"in globalThis && "fetch"in globalThis) {
        try {
            const t = await (await fetch(i)).blob();
            await createImageBitmap(t)
        } catch {
            return !1
        }
        return !0
    }
    return !1
}
const L_ = {
    extension: {
        type: et.DetectionParser,
        priority: 1
    },
    test: async () => df("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
    add: async i => [...i, "avif"],
    remove: async i => i.filter(t => t !== "avif")
};
ot.add(L_);
const k_ = {
    extension: {
        type: et.DetectionParser,
        priority: 0
    },
    test: async () => df("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
    add: async i => [...i, "webp"],
    remove: async i => i.filter(t => t !== "webp")
};
ot.add(k_);
const hc = ["png", "jpg", "jpeg"]
  , U_ = {
    extension: {
        type: et.DetectionParser,
        priority: -1
    },
    test: () => Promise.resolve(!0),
    add: async i => [...i, ...hc],
    remove: async i => i.filter(t => !hc.includes(t))
};
ot.add(U_);
const G_ = "WorkerGlobalScope"in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function pl(i) {
    return G_ ? !1 : document.createElement("video").canPlayType(i) !== ""
}
const H_ = {
    extension: {
        type: et.DetectionParser,
        priority: 0
    },
    test: async () => pl("video/webm"),
    add: async i => [...i, "webm"],
    remove: async i => i.filter(t => t !== "webm")
};
ot.add(H_);
const V_ = {
    extension: {
        type: et.DetectionParser,
        priority: 0
    },
    test: async () => pl("video/mp4"),
    add: async i => [...i, "mp4", "m4v"],
    remove: async i => i.filter(t => t !== "mp4" && t !== "m4v")
};
ot.add(V_);
const $_ = {
    extension: {
        type: et.DetectionParser,
        priority: 0
    },
    test: async () => pl("video/ogg"),
    add: async i => [...i, "ogv"],
    remove: async i => i.filter(t => t !== "ogv")
};
ot.add($_);
const j_ = {
    extension: et.ResolveParser,
    test: ka.test,
    parse: i => {
        var t;
        return {
            resolution: parseFloat(((t = nt.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) ?? "1"),
            format: ge.extname(i).slice(1),
            src: i
        }
    }
};
ot.add(j_);
var we = (i => (i[i.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT",
i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT",
i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT",
i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT",
i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",
i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",
i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",
i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT",
i[i.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC",
i[i.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC",
i[i.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC",
i[i.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC",
i[i.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2",
i[i.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC",
i[i.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2",
i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",
i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",
i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",
i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG",
i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",
i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG",
i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",
i[i.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL",
i[i.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL",
i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35987] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",
i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL",
i[i.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR",
i[i.COMPRESSED_RGBA_BPTC_UNORM_EXT = 36492] = "COMPRESSED_RGBA_BPTC_UNORM_EXT",
i[i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT = 36493] = "COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",
i[i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT = 36494] = "COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",
i[i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT = 36495] = "COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",
i))(we || {});
const xa = {
    33776: .5,
    33777: .5,
    33778: 1,
    33779: 1,
    35916: .5,
    35917: .5,
    35918: 1,
    35919: 1,
    37488: .5,
    37489: .5,
    37490: 1,
    37491: 1,
    37492: .5,
    37496: 1,
    37493: .5,
    37497: 1,
    37494: .5,
    37495: .5,
    35840: .5,
    35842: .5,
    35841: .25,
    35843: .25,
    36196: .5,
    35986: .5,
    35987: 1,
    34798: 1,
    37808: 1,
    36492: 1,
    36493: 1,
    36494: 1,
    36495: 1
};
let Er, ts;
function lc() {
    ts = {
        bptc: Er.getExtension("EXT_texture_compression_bptc"),
        astc: Er.getExtension("WEBGL_compressed_texture_astc"),
        etc: Er.getExtension("WEBGL_compressed_texture_etc"),
        s3tc: Er.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: Er.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        pvrtc: Er.getExtension("WEBGL_compressed_texture_pvrtc") || Er.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        etc1: Er.getExtension("WEBGL_compressed_texture_etc1"),
        atc: Er.getExtension("WEBGL_compressed_texture_atc")
    }
}
const W_ = {
    extension: {
        type: et.DetectionParser,
        priority: 2
    },
    test: async () => {
        const i = nt.ADAPTER.createCanvas().getContext("webgl");
        return i ? (Er = i,
        !0) : (console.warn("WebGL not available for compressed textures."),
        !1)
    }
    ,
    add: async i => {
        ts || lc();
        const t = [];
        for (const e in ts)
            ts[e] && t.push(e);
        return [...t, ...i]
    }
    ,
    remove: async i => (ts || lc(),
    i.filter(t => !(t in ts)))
};
ot.add(W_);
class X_ extends Pa {
    constructor(t, e={
        width: 1,
        height: 1,
        autoLoad: !0
    }) {
        let r, s;
        typeof t == "string" ? (r = t,
        s = new Uint8Array) : (r = null,
        s = t),
        super(s, e),
        this.origin = r,
        this.buffer = s ? new vh(s) : null,
        this._load = null,
        this.loaded = !1,
        this.origin !== null && e.autoLoad !== !1 && this.load(),
        this.origin === null && this.buffer && (this._load = Promise.resolve(this),
        this.loaded = !0,
        this.onBlobLoaded(this.buffer.rawBinaryData))
    }
    onBlobLoaded(t) {}
    load() {
        return this._load ? this._load : (this._load = fetch(this.origin).then(t => t.blob()).then(t => t.arrayBuffer()).then(t => (this.data = new Uint32Array(t),
        this.buffer = new vh(t),
        this.loaded = !0,
        this.onBlobLoaded(t),
        this.update(),
        this)),
        this._load)
    }
}
class Di extends X_ {
    constructor(t, e) {
        super(t, e),
        this.format = e.format,
        this.levels = e.levels || 1,
        this._width = e.width,
        this._height = e.height,
        this._extension = Di._formatToExtension(this.format),
        (e.levelBuffers || this.buffer) && (this._levelBuffers = e.levelBuffers || Di._createLevelBuffers(t instanceof Uint8Array ? t : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height))
    }
    upload(t, e, r) {
        const s = t.gl;
        if (!t.context.extensions[this._extension])
            throw new Error(`${this._extension} textures are not supported on the current machine`);
        if (!this._levelBuffers)
            return !1;
        s.pixelStorei(s.UNPACK_ALIGNMENT, 4);
        for (let n = 0, a = this.levels; n < a; n++) {
            const {levelID: o, levelWidth: l, levelHeight: c, levelBuffer: p} = this._levelBuffers[n];
            s.compressedTexImage2D(s.TEXTURE_2D, o, this.format, l, c, 0, p)
        }
        return !0
    }
    onBlobLoaded() {
        this._levelBuffers = Di._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height)
    }
    static _formatToExtension(t) {
        if (t >= 33776 && t <= 33779)
            return "s3tc";
        if (t >= 35916 && t <= 35919)
            return "s3tc_sRGB";
        if (t >= 37488 && t <= 37497)
            return "etc";
        if (t >= 35840 && t <= 35843)
            return "pvrtc";
        if (t === 36196)
            return "etc1";
        if (t === 35986 || t === 35987 || t === 34798)
            return "atc";
        if (t >= 36492 && t <= 36495)
            return "bptc";
        if (t === 37808)
            return "astc";
        throw new Error(`Invalid (compressed) texture format given: ${t}`)
    }
    static _createLevelBuffers(t, e, r, s, n, a, o) {
        const l = new Array(r);
        let c = t.byteOffset
          , p = a
          , m = o
          , f = p + s - 1 & ~(s - 1)
          , v = m + n - 1 & ~(n - 1)
          , _ = f * v * xa[e];
        for (let T = 0; T < r; T++)
            l[T] = {
                levelID: T,
                levelWidth: r > 1 ? p : f,
                levelHeight: r > 1 ? m : v,
                levelBuffer: new Uint8Array(t.buffer,c,_)
            },
            c += _,
            p = p >> 1 || 1,
            m = m >> 1 || 1,
            f = p + s - 1 & ~(s - 1),
            v = m + n - 1 & ~(n - 1),
            _ = f * v * xa[e];
        return l
    }
}
const Vo = 4
  , Vn = 124
  , z_ = 32
  , uc = 20
  , Y_ = 542327876
  , $n = {
    SIZE: 1,
    FLAGS: 2,
    HEIGHT: 3,
    WIDTH: 4,
    MIPMAP_COUNT: 7,
    PIXEL_FORMAT: 19
}
  , q_ = {
    SIZE: 0,
    FLAGS: 1,
    FOURCC: 2,
    RGB_BITCOUNT: 3,
    R_BIT_MASK: 4,
    G_BIT_MASK: 5,
    B_BIT_MASK: 6,
    A_BIT_MASK: 7
}
  , jn = {
    DXGI_FORMAT: 0,
    RESOURCE_DIMENSION: 1,
    MISC_FLAG: 2,
    ARRAY_SIZE: 3,
    MISC_FLAGS2: 4
}
  , K_ = 1
  , Z_ = 2
  , Q_ = 4
  , J_ = 64
  , tx = 512
  , ex = 131072
  , rx = 827611204
  , ix = 861165636
  , sx = 894720068
  , nx = 808540228
  , ax = 4
  , ox = {
    [rx]: we.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    [ix]: we.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    [sx]: we.COMPRESSED_RGBA_S3TC_DXT5_EXT
}
  , hx = {
    70: we.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    71: we.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    73: we.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    74: we.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    76: we.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    77: we.COMPRESSED_RGBA_S3TC_DXT5_EXT,
    72: we.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
    75: we.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
    78: we.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,
    96: we.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,
    95: we.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,
    98: we.COMPRESSED_RGBA_BPTC_UNORM_EXT,
    99: we.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
};
function lx(i) {
    const t = new Uint32Array(i);
    if (t[0] !== Y_)
        throw new Error("Invalid DDS file magic word");
    const e = new Uint32Array(i,0,Vn / Uint32Array.BYTES_PER_ELEMENT)
      , r = e[$n.HEIGHT]
      , s = e[$n.WIDTH]
      , n = e[$n.MIPMAP_COUNT]
      , a = new Uint32Array(i,$n.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,z_ / Uint32Array.BYTES_PER_ELEMENT)
      , o = a[K_];
    if (o & Q_) {
        const l = a[q_.FOURCC];
        if (l !== nx) {
            const I = ox[l]
              , S = Vo + Vn
              , P = new Uint8Array(i,S);
            return [new Di(P,{
                format: I,
                width: s,
                height: r,
                levels: n
            })]
        }
        const c = Vo + Vn
          , p = new Uint32Array(t.buffer,c,uc / Uint32Array.BYTES_PER_ELEMENT)
          , m = p[jn.DXGI_FORMAT]
          , f = p[jn.RESOURCE_DIMENSION]
          , v = p[jn.MISC_FLAG]
          , _ = p[jn.ARRAY_SIZE]
          , T = hx[m];
        if (T === void 0)
            throw new Error(`DDSParser cannot parse texture data with DXGI format ${m}`);
        if (v === ax)
            throw new Error("DDSParser does not support cubemap textures");
        if (f === 6)
            throw new Error("DDSParser does not supported 3D texture data");
        const A = new Array
          , E = Vo + Vn + uc;
        if (_ === 1)
            A.push(new Uint8Array(i,E));
        else {
            const I = xa[T];
            let S = 0
              , P = s
              , k = r;
            for (let d = 0; d < n; d++) {
                const O = Math.max(1, P + 3 & -4)
                  , N = Math.max(1, k + 3 & -4)
                  , z = O * N * I;
                S += z,
                P = P >>> 1,
                k = k >>> 1
            }
            let $ = E;
            for (let d = 0; d < _; d++)
                A.push(new Uint8Array(i,$,S)),
                $ += S
        }
        return A.map(I => new Di(I,{
            format: T,
            width: s,
            height: r,
            levels: n
        }))
    }
    throw o & J_ ? new Error("DDSParser does not support uncompressed texture data.") : o & tx ? new Error("DDSParser does not supported YUV uncompressed texture data.") : o & ex ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : o & Z_ ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!")
}
const cc = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]
  , ux = 67305985
  , ir = {
    FILE_IDENTIFIER: 0,
    ENDIANNESS: 12,
    GL_TYPE: 16,
    GL_TYPE_SIZE: 20,
    GL_FORMAT: 24,
    GL_INTERNAL_FORMAT: 28,
    GL_BASE_INTERNAL_FORMAT: 32,
    PIXEL_WIDTH: 36,
    PIXEL_HEIGHT: 40,
    PIXEL_DEPTH: 44,
    NUMBER_OF_ARRAY_ELEMENTS: 48,
    NUMBER_OF_FACES: 52,
    NUMBER_OF_MIPMAP_LEVELS: 56,
    BYTES_OF_KEY_VALUE_DATA: 60
}
  , Wh = 64
  , dc = {
    [mt.UNSIGNED_BYTE]: 1,
    [mt.UNSIGNED_SHORT]: 2,
    [mt.INT]: 4,
    [mt.UNSIGNED_INT]: 4,
    [mt.FLOAT]: 4,
    [mt.HALF_FLOAT]: 8
}
  , cx = {
    [Z.RGBA]: 4,
    [Z.RGB]: 3,
    [Z.RG]: 2,
    [Z.RED]: 1,
    [Z.LUMINANCE]: 1,
    [Z.LUMINANCE_ALPHA]: 2,
    [Z.ALPHA]: 1
}
  , dx = {
    [mt.UNSIGNED_SHORT_4_4_4_4]: 2,
    [mt.UNSIGNED_SHORT_5_5_5_1]: 2,
    [mt.UNSIGNED_SHORT_5_6_5]: 2
};
function fx(i, t, e=!1) {
    const r = new DataView(t);
    if (!px(i, r))
        return null;
    const s = r.getUint32(ir.ENDIANNESS, !0) === ux
      , n = r.getUint32(ir.GL_TYPE, s)
      , a = r.getUint32(ir.GL_FORMAT, s)
      , o = r.getUint32(ir.GL_INTERNAL_FORMAT, s)
      , l = r.getUint32(ir.PIXEL_WIDTH, s)
      , c = r.getUint32(ir.PIXEL_HEIGHT, s) || 1
      , p = r.getUint32(ir.PIXEL_DEPTH, s) || 1
      , m = r.getUint32(ir.NUMBER_OF_ARRAY_ELEMENTS, s) || 1
      , f = r.getUint32(ir.NUMBER_OF_FACES, s)
      , v = r.getUint32(ir.NUMBER_OF_MIPMAP_LEVELS, s)
      , _ = r.getUint32(ir.BYTES_OF_KEY_VALUE_DATA, s);
    if (c === 0 || p !== 1)
        throw new Error("Only 2D textures are supported");
    if (f !== 1)
        throw new Error("CubeTextures are not supported by KTXLoader yet!");
    if (m !== 1)
        throw new Error("WebGL does not support array textures");
    const T = 4
      , A = 4
      , E = l + 3 & -4
      , I = c + 3 & -4
      , S = new Array(m);
    let P = l * c;
    n === 0 && (P = E * I);
    let k;
    if (n !== 0 ? dc[n] ? k = dc[n] * cx[a] : k = dx[n] : k = xa[o],
    k === void 0)
        throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
    const $ = e ? mx(r, _, s) : null;
    let d = P * k
      , O = l
      , N = c
      , z = E
      , J = I
      , V = Wh + _;
    for (let B = 0; B < v; B++) {
        const j = r.getUint32(V, s);
        let rt = V + 4;
        for (let at = 0; at < m; at++) {
            let st = S[at];
            st || (st = S[at] = new Array(v)),
            st[B] = {
                levelID: B,
                levelWidth: v > 1 || n !== 0 ? O : z,
                levelHeight: v > 1 || n !== 0 ? N : J,
                levelBuffer: new Uint8Array(t,rt,d)
            },
            rt += d
        }
        V += j + 4,
        V = V % 4 !== 0 ? V + 4 - V % 4 : V,
        O = O >> 1 || 1,
        N = N >> 1 || 1,
        z = O + T - 1 & ~(T - 1),
        J = N + A - 1 & ~(A - 1),
        d = z * J * k
    }
    return n !== 0 ? {
        uncompressed: S.map(B => {
            let j = B[0].levelBuffer
              , rt = !1;
            return n === mt.FLOAT ? j = new Float32Array(B[0].levelBuffer.buffer,B[0].levelBuffer.byteOffset,B[0].levelBuffer.byteLength / 4) : n === mt.UNSIGNED_INT ? (rt = !0,
            j = new Uint32Array(B[0].levelBuffer.buffer,B[0].levelBuffer.byteOffset,B[0].levelBuffer.byteLength / 4)) : n === mt.INT && (rt = !0,
            j = new Int32Array(B[0].levelBuffer.buffer,B[0].levelBuffer.byteOffset,B[0].levelBuffer.byteLength / 4)),
            {
                resource: new Pa(j,{
                    width: B[0].levelWidth,
                    height: B[0].levelHeight
                }),
                type: n,
                format: rt ? gx(a) : a
            }
        }
        ),
        kvData: $
    } : {
        compressed: S.map(B => new Di(null,{
            format: o,
            width: l,
            height: c,
            levels: v,
            levelBuffers: B
        })),
        kvData: $
    }
}
function px(i, t) {
    for (let e = 0; e < cc.length; e++)
        if (t.getUint8(e) !== cc[e])
            return console.error(`${i} is not a valid *.ktx file!`),
            !1;
    return !0
}
function gx(i) {
    switch (i) {
    case Z.RGBA:
        return Z.RGBA_INTEGER;
    case Z.RGB:
        return Z.RGB_INTEGER;
    case Z.RG:
        return Z.RG_INTEGER;
    case Z.RED:
        return Z.RED_INTEGER;
    default:
        return i
    }
}
function mx(i, t, e) {
    const r = new Map;
    let s = 0;
    for (; s < t; ) {
        const n = i.getUint32(Wh + s, e)
          , a = Wh + s + 4
          , o = 3 - (n + 3) % 4;
        if (n === 0 || n > t - s) {
            console.error("KTXLoader: keyAndValueByteSize out of bounds");
            break
        }
        let l = 0;
        for (; l < n && i.getUint8(a + l) !== 0; l++)
            ;
        if (l === -1) {
            console.error("KTXLoader: Failed to find null byte terminating kvData key");
            break
        }
        const c = new TextDecoder().decode(new Uint8Array(i.buffer,a,l))
          , p = new DataView(i.buffer,a + l + 1,n - l - 1);
        r.set(c, p),
        s += 4 + n + o
    }
    return r
}
const yx = {
    extension: {
        type: et.LoadParser,
        priority: dr.High
    },
    name: "loadDDS",
    test(i) {
        return di(i, ".dds")
    },
    async load(i, t, e) {
        const r = await (await nt.ADAPTER.fetch(i)).arrayBuffer()
          , s = lx(r).map(n => {
            const a = new Tt(n,{
                mipmap: Br.OFF,
                alphaMode: ke.NO_PREMULTIPLIED_ALPHA,
                resolution: Fr(i),
                ...t.data
            });
            return un(a, e, i)
        }
        );
        return s.length === 1 ? s[0] : s
    },
    unload(i) {
        Array.isArray(i) ? i.forEach(t => t.destroy(!0)) : i.destroy(!0)
    }
};
ot.add(yx);
const vx = {
    extension: {
        type: et.LoadParser,
        priority: dr.High
    },
    name: "loadKTX",
    test(i) {
        return di(i, ".ktx")
    },
    async load(i, t, e) {
        const r = await (await nt.ADAPTER.fetch(i)).arrayBuffer()
          , {compressed: s, uncompressed: n, kvData: a} = fx(i, r)
          , o = s ?? n
          , l = {
            mipmap: Br.OFF,
            alphaMode: ke.NO_PREMULTIPLIED_ALPHA,
            resolution: Fr(i),
            ...t.data
        }
          , c = o.map(p => {
            o === n && Object.assign(l, {
                type: p.type,
                format: p.format
            });
            const m = p.resource ?? p
              , f = new Tt(m,l);
            return f.ktxKeyValueData = a,
            un(f, e, i)
        }
        );
        return c.length === 1 ? c[0] : c
    },
    unload(i) {
        Array.isArray(i) ? i.forEach(t => t.destroy(!0)) : i.destroy(!0)
    }
};
ot.add(vx);
const _x = ["s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"]
  , xx = {
    extension: et.ResolveParser,
    test: i => {
        const t = ge.extname(i).slice(1);
        return ["basis", "ktx", "dds"].includes(t)
    }
    ,
    parse: i => {
        var r, s;
        const t = i.split(".")
          , e = t.pop();
        if (["ktx", "dds"].includes(e)) {
            const n = t.pop();
            if (_x.includes(n))
                return {
                    resolution: parseFloat(((r = nt.RETINA_PREFIX.exec(i)) == null ? void 0 : r[1]) ?? "1"),
                    format: n,
                    src: i
                }
        }
        return {
            resolution: parseFloat(((s = nt.RETINA_PREFIX.exec(i)) == null ? void 0 : s[1]) ?? "1"),
            format: e,
            src: i
        }
    }
};
ot.add(xx);
const Wn = new At
  , bx = 4
  , ff = class zs {
    constructor(t) {
        this.renderer = t,
        this._rendererPremultipliedAlpha = !1
    }
    contextChange() {
        var e;
        const t = (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
        this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha)
    }
    async image(t, e, r, s) {
        const n = new Image;
        return n.src = await this.base64(t, e, r, s),
        n
    }
    async base64(t, e, r, s) {
        const n = this.canvas(t, s);
        if (n.toBlob !== void 0)
            return new Promise( (a, o) => {
                n.toBlob(l => {
                    if (!l) {
                        o(new Error("ICanvas.toBlob failed!"));
                        return
                    }
                    const c = new FileReader;
                    c.onload = () => a(c.result),
                    c.onerror = o,
                    c.readAsDataURL(l)
                }
                , e, r)
            }
            );
        if (n.toDataURL !== void 0)
            return n.toDataURL(e, r);
        if (n.convertToBlob !== void 0) {
            const a = await n.convertToBlob({
                type: e,
                quality: r
            });
            return new Promise( (o, l) => {
                const c = new FileReader;
                c.onload = () => o(c.result),
                c.onerror = l,
                c.readAsDataURL(a)
            }
            )
        }
        throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")
    }
    canvas(t, e) {
        const {pixels: r, width: s, height: n, flipY: a, premultipliedAlpha: o} = this._rawPixels(t, e);
        a && zs._flipY(r, s, n),
        o && zs._unpremultiplyAlpha(r);
        const l = new hn(s,n,1)
          , c = new ImageData(new Uint8ClampedArray(r.buffer),s,n);
        return l.context.putImageData(c, 0, 0),
        l.canvas
    }
    pixels(t, e) {
        const {pixels: r, width: s, height: n, flipY: a, premultipliedAlpha: o} = this._rawPixels(t, e);
        return a && zs._flipY(r, s, n),
        o && zs._unpremultiplyAlpha(r),
        r
    }
    _rawPixels(t, e) {
        const r = this.renderer;
        if (!r)
            throw new Error("The Extract has already been destroyed");
        let s, n = !1, a = !1, o, l = !1;
        t && (t instanceof Or ? o = t : (o = r.generateTexture(t, {
            region: e,
            resolution: r.resolution,
            multisample: r.multisample
        }),
        l = !0,
        e && (Wn.width = e.width,
        Wn.height = e.height,
        e = Wn)));
        const c = r.gl;
        if (o) {
            if (s = o.baseTexture.resolution,
            e = e ?? o.frame,
            n = !1,
            a = o.baseTexture.alphaMode > 0 && o.baseTexture.format === Z.RGBA,
            !l) {
                r.renderTexture.bind(o);
                const v = o.framebuffer.glFramebuffers[r.CONTEXT_UID];
                v.blitFramebuffer && r.framebuffer.bind(v.blitFramebuffer)
            }
        } else
            s = r.resolution,
            e || (e = Wn,
            e.width = r.width / s,
            e.height = r.height / s),
            n = !0,
            a = this._rendererPremultipliedAlpha,
            r.renderTexture.bind();
        const p = Math.max(Math.round(e.width * s), 1)
          , m = Math.max(Math.round(e.height * s), 1)
          , f = new Uint8Array(bx * p * m);
        return c.readPixels(Math.round(e.x * s), Math.round(e.y * s), p, m, c.RGBA, c.UNSIGNED_BYTE, f),
        l && (o == null || o.destroy(!0)),
        {
            pixels: f,
            width: p,
            height: m,
            flipY: n,
            premultipliedAlpha: a
        }
    }
    destroy() {
        this.renderer = null
    }
    static _flipY(t, e, r) {
        const s = e << 2
          , n = r >> 1
          , a = new Uint8Array(s);
        for (let o = 0; o < n; o++) {
            const l = o * s
              , c = (r - o - 1) * s;
            a.set(t.subarray(l, l + s)),
            t.copyWithin(l, c, c + s),
            t.set(a, c)
        }
    }
    static _unpremultiplyAlpha(t) {
        t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
        const e = t.length;
        for (let r = 0; r < e; r += 4) {
            const s = t[r + 3];
            if (s !== 0) {
                const n = 255.001 / s;
                t[r] = t[r] * n + .5,
                t[r + 1] = t[r + 1] * n + .5,
                t[r + 2] = t[r + 2] * n + .5
            }
        }
    }
}
;
ff.extension = {
    name: "extract",
    type: et.RendererSystem
};
let Tx = ff;
ot.add(Tx);
const ba = {
    build(i) {
        const t = i.points;
        let e, r, s, n, a, o;
        if (i.type === Zt.CIRC) {
            const _ = i.shape;
            e = _.x,
            r = _.y,
            a = o = _.radius,
            s = n = 0
        } else if (i.type === Zt.ELIP) {
            const _ = i.shape;
            e = _.x,
            r = _.y,
            a = _.width,
            o = _.height,
            s = n = 0
        } else {
            const _ = i.shape
              , T = _.width / 2
              , A = _.height / 2;
            e = _.x + T,
            r = _.y + A,
            a = o = Math.max(0, Math.min(_.radius, Math.min(T, A))),
            s = T - a,
            n = A - o
        }
        if (!(a >= 0 && o >= 0 && s >= 0 && n >= 0)) {
            t.length = 0;
            return
        }
        const l = Math.ceil(2.3 * Math.sqrt(a + o))
          , c = l * 8 + (s ? 4 : 0) + (n ? 4 : 0);
        if (t.length = c,
        c === 0)
            return;
        if (l === 0) {
            t.length = 8,
            t[0] = t[6] = e + s,
            t[1] = t[3] = r + n,
            t[2] = t[4] = e - s,
            t[5] = t[7] = r - n;
            return
        }
        let p = 0
          , m = l * 4 + (s ? 2 : 0) + 2
          , f = m
          , v = c;
        {
            const _ = s + a
              , T = n
              , A = e + _
              , E = e - _
              , I = r + T;
            if (t[p++] = A,
            t[p++] = I,
            t[--m] = I,
            t[--m] = E,
            n) {
                const S = r - T;
                t[f++] = E,
                t[f++] = S,
                t[--v] = S,
                t[--v] = A
            }
        }
        for (let _ = 1; _ < l; _++) {
            const T = Math.PI / 2 * (_ / l)
              , A = s + Math.cos(T) * a
              , E = n + Math.sin(T) * o
              , I = e + A
              , S = e - A
              , P = r + E
              , k = r - E;
            t[p++] = I,
            t[p++] = P,
            t[--m] = P,
            t[--m] = S,
            t[f++] = S,
            t[f++] = k,
            t[--v] = k,
            t[--v] = I
        }
        {
            const _ = s
              , T = n + o
              , A = e + _
              , E = e - _
              , I = r + T
              , S = r - T;
            t[p++] = A,
            t[p++] = I,
            t[--v] = S,
            t[--v] = A,
            s && (t[p++] = E,
            t[p++] = I,
            t[--v] = S,
            t[--v] = E)
        }
    },
    triangulate(i, t) {
        const e = i.points
          , r = t.points
          , s = t.indices;
        if (e.length === 0)
            return;
        let n = r.length / 2;
        const a = n;
        let o, l;
        if (i.type !== Zt.RREC) {
            const p = i.shape;
            o = p.x,
            l = p.y
        } else {
            const p = i.shape;
            o = p.x + p.width / 2,
            l = p.y + p.height / 2
        }
        const c = i.matrix;
        r.push(i.matrix ? c.a * o + c.c * l + c.tx : o, i.matrix ? c.b * o + c.d * l + c.ty : l),
        n++,
        r.push(e[0], e[1]);
        for (let p = 2; p < e.length; p += 2)
            r.push(e[p], e[p + 1]),
            s.push(n++, a, n);
        s.push(a + 1, a, n)
    }
};
function fc(i, t=!1) {
    const e = i.length;
    if (e < 6)
        return;
    let r = 0;
    for (let s = 0, n = i[e - 2], a = i[e - 1]; s < e; s += 2) {
        const o = i[s]
          , l = i[s + 1];
        r += (o - n) * (l + a),
        n = o,
        a = l
    }
    if (!t && r > 0 || t && r <= 0) {
        const s = e / 2;
        for (let n = s + s % 2; n < e; n += 2) {
            const a = e - n - 2
              , o = e - n - 1
              , l = n
              , c = n + 1;
            [i[a],i[l]] = [i[l], i[a]],
            [i[o],i[c]] = [i[c], i[o]]
        }
    }
}
const pf = {
    build(i) {
        i.points = i.shape.points.slice()
    },
    triangulate(i, t) {
        let e = i.points;
        const r = i.holes
          , s = t.points
          , n = t.indices;
        if (e.length >= 6) {
            fc(e, !1);
            const a = [];
            for (let c = 0; c < r.length; c++) {
                const p = r[c];
                fc(p.points, !0),
                a.push(e.length / 2),
                e = e.concat(p.points)
            }
            const o = Mc(e, a, 2);
            if (!o)
                return;
            const l = s.length / 2;
            for (let c = 0; c < o.length; c += 3)
                n.push(o[c] + l),
                n.push(o[c + 1] + l),
                n.push(o[c + 2] + l);
            for (let c = 0; c < e.length; c++)
                s.push(e[c])
        }
    }
}
  , wx = {
    build(i) {
        const t = i.shape
          , e = t.x
          , r = t.y
          , s = t.width
          , n = t.height
          , a = i.points;
        a.length = 0,
        s >= 0 && n >= 0 && a.push(e, r, e + s, r, e + s, r + n, e, r + n)
    },
    triangulate(i, t) {
        const e = i.points
          , r = t.points;
        if (e.length === 0)
            return;
        const s = r.length / 2;
        r.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]),
        t.indices.push(s, s + 1, s + 2, s + 1, s + 2, s + 3)
    }
}
  , Ex = {
    build(i) {
        ba.build(i)
    },
    triangulate(i, t) {
        ba.triangulate(i, t)
    }
};
var Ye = (i => (i.MITER = "miter",
i.BEVEL = "bevel",
i.ROUND = "round",
i))(Ye || {})
  , oi = (i => (i.BUTT = "butt",
i.ROUND = "round",
i.SQUARE = "square",
i))(oi || {});
const ms = {
    adaptive: !0,
    maxLength: 10,
    minSegments: 8,
    maxSegments: 2048,
    epsilon: 1e-4,
    _segmentsCount(i, t=20) {
        if (!this.adaptive || !i || isNaN(i))
            return t;
        let e = Math.ceil(i / this.maxLength);
        return e < this.minSegments ? e = this.minSegments : e > this.maxSegments && (e = this.maxSegments),
        e
    }
};
class pc {
    static curveTo(t, e, r, s, n, a) {
        const o = a[a.length - 2]
          , l = a[a.length - 1] - e
          , c = o - t
          , p = s - e
          , m = r - t
          , f = Math.abs(l * m - c * p);
        if (f < 1e-8 || n === 0)
            return (a[a.length - 2] !== t || a[a.length - 1] !== e) && a.push(t, e),
            null;
        const v = l * l + c * c
          , _ = p * p + m * m
          , T = l * p + c * m
          , A = n * Math.sqrt(v) / f
          , E = n * Math.sqrt(_) / f
          , I = A * T / v
          , S = E * T / _
          , P = A * m + E * c
          , k = A * p + E * l
          , $ = c * (E + I)
          , d = l * (E + I)
          , O = m * (A + S)
          , N = p * (A + S)
          , z = Math.atan2(d - k, $ - P)
          , J = Math.atan2(N - k, O - P);
        return {
            cx: P + t,
            cy: k + e,
            radius: n,
            startAngle: z,
            endAngle: J,
            anticlockwise: c * p > m * l
        }
    }
    static arc(t, e, r, s, n, a, o, l, c) {
        const p = o - a
          , m = ms._segmentsCount(Math.abs(p) * n, Math.ceil(Math.abs(p) / da) * 40)
          , f = p / (m * 2)
          , v = f * 2
          , _ = Math.cos(f)
          , T = Math.sin(f)
          , A = m - 1
          , E = A % 1 / A;
        for (let I = 0; I <= A; ++I) {
            const S = I + E * I
              , P = f + a + v * S
              , k = Math.cos(P)
              , $ = -Math.sin(P);
            c.push((_ * k + T * $) * n + r, (_ * -$ + T * k) * n + s)
        }
    }
}
class Ax {
    constructor() {
        this.reset()
    }
    begin(t, e, r) {
        this.reset(),
        this.style = t,
        this.start = e,
        this.attribStart = r
    }
    end(t, e) {
        this.attribSize = e - this.attribStart,
        this.size = t - this.start
    }
    reset() {
        this.style = null,
        this.size = 0,
        this.start = 0,
        this.attribStart = 0,
        this.attribSize = 0
    }
}
class gl {
    static curveLength(t, e, r, s, n, a, o, l) {
        let c = 0
          , p = 0
          , m = 0
          , f = 0
          , v = 0
          , _ = 0
          , T = 0
          , A = 0
          , E = 0
          , I = 0
          , S = 0
          , P = t
          , k = e;
        for (let $ = 1; $ <= 10; ++$)
            p = $ / 10,
            m = p * p,
            f = m * p,
            v = 1 - p,
            _ = v * v,
            T = _ * v,
            A = T * t + 3 * _ * p * r + 3 * v * m * n + f * o,
            E = T * e + 3 * _ * p * s + 3 * v * m * a + f * l,
            I = P - A,
            S = k - E,
            P = A,
            k = E,
            c += Math.sqrt(I * I + S * S);
        return c
    }
    static curveTo(t, e, r, s, n, a, o) {
        const l = o[o.length - 2]
          , c = o[o.length - 1];
        o.length -= 2;
        const p = ms._segmentsCount(gl.curveLength(l, c, t, e, r, s, n, a));
        let m = 0
          , f = 0
          , v = 0
          , _ = 0
          , T = 0;
        o.push(l, c);
        for (let A = 1, E = 0; A <= p; ++A)
            E = A / p,
            m = 1 - E,
            f = m * m,
            v = f * m,
            _ = E * E,
            T = _ * E,
            o.push(v * l + 3 * f * E * t + 3 * m * _ * r + T * n, v * c + 3 * f * E * e + 3 * m * _ * s + T * a)
    }
}
function gc(i, t, e, r, s, n, a, o) {
    const l = i - e * s
      , c = t - r * s
      , p = i + e * n
      , m = t + r * n;
    let f, v;
    a ? (f = r,
    v = -e) : (f = -r,
    v = e);
    const _ = l + f
      , T = c + v
      , A = p + f
      , E = m + v;
    return o.push(_, T, A, E),
    2
}
function _i(i, t, e, r, s, n, a, o) {
    const l = e - i
      , c = r - t;
    let p = Math.atan2(l, c)
      , m = Math.atan2(s - i, n - t);
    o && p < m ? p += Math.PI * 2 : !o && p > m && (m += Math.PI * 2);
    let f = p;
    const v = m - p
      , _ = Math.abs(v)
      , T = Math.sqrt(l * l + c * c)
      , A = (15 * _ * Math.sqrt(T) / Math.PI >> 0) + 1
      , E = v / A;
    if (f += E,
    o) {
        a.push(i, t, e, r);
        for (let I = 1, S = f; I < A; I++,
        S += E)
            a.push(i, t, i + Math.sin(S) * T, t + Math.cos(S) * T);
        a.push(i, t, s, n)
    } else {
        a.push(e, r, i, t);
        for (let I = 1, S = f; I < A; I++,
        S += E)
            a.push(i + Math.sin(S) * T, t + Math.cos(S) * T, i, t);
        a.push(s, n, i, t)
    }
    return A * 2
}
function Sx(i, t) {
    const e = i.shape;
    let r = i.points || e.points.slice();
    const s = t.closePointEps;
    if (r.length === 0)
        return;
    const n = i.lineStyle
      , a = new Bt(r[0],r[1])
      , o = new Bt(r[r.length - 2],r[r.length - 1])
      , l = e.type !== Zt.POLY || e.closeStroke
      , c = Math.abs(a.x - o.x) < s && Math.abs(a.y - o.y) < s;
    if (l) {
        r = r.slice(),
        c && (r.pop(),
        r.pop(),
        o.set(r[r.length - 2], r[r.length - 1]));
        const st = (a.x + o.x) * .5
          , dt = (o.y + a.y) * .5;
        r.unshift(st, dt),
        r.push(st, dt)
    }
    const p = t.points
      , m = r.length / 2;
    let f = r.length;
    const v = p.length / 2
      , _ = n.width / 2
      , T = _ * _
      , A = n.miterLimit * n.miterLimit;
    let E = r[0]
      , I = r[1]
      , S = r[2]
      , P = r[3]
      , k = 0
      , $ = 0
      , d = -(I - P)
      , O = E - S
      , N = 0
      , z = 0
      , J = Math.sqrt(d * d + O * O);
    d /= J,
    O /= J,
    d *= _,
    O *= _;
    const V = n.alignment
      , B = (1 - V) * 2
      , j = V * 2;
    l || (n.cap === oi.ROUND ? f += _i(E - d * (B - j) * .5, I - O * (B - j) * .5, E - d * B, I - O * B, E + d * j, I + O * j, p, !0) + 2 : n.cap === oi.SQUARE && (f += gc(E, I, d, O, B, j, !0, p))),
    p.push(E - d * B, I - O * B, E + d * j, I + O * j);
    for (let st = 1; st < m - 1; ++st) {
        E = r[(st - 1) * 2],
        I = r[(st - 1) * 2 + 1],
        S = r[st * 2],
        P = r[st * 2 + 1],
        k = r[(st + 1) * 2],
        $ = r[(st + 1) * 2 + 1],
        d = -(I - P),
        O = E - S,
        J = Math.sqrt(d * d + O * O),
        d /= J,
        O /= J,
        d *= _,
        O *= _,
        N = -(P - $),
        z = S - k,
        J = Math.sqrt(N * N + z * z),
        N /= J,
        z /= J,
        N *= _,
        z *= _;
        const dt = S - E
          , Ft = I - P
          , Q = S - k
          , K = $ - P
          , xt = dt * Q + Ft * K
          , Ct = Ft * Q - K * dt
          , It = Ct < 0;
        if (Math.abs(Ct) < .001 * Math.abs(xt)) {
            p.push(S - d * B, P - O * B, S + d * j, P + O * j),
            xt >= 0 && (n.join === Ye.ROUND ? f += _i(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, !1) + 4 : f += 2,
            p.push(S - N * j, P - z * j, S + N * B, P + z * B));
            continue
        }
        const kt = (-d + E) * (-O + P) - (-d + S) * (-O + I)
          , Ot = (-N + k) * (-z + P) - (-N + S) * (-z + $)
          , Mt = (dt * Ot - Q * kt) / Ct
          , $t = (K * kt - Ft * Ot) / Ct
          , qt = (Mt - S) * (Mt - S) + ($t - P) * ($t - P)
          , Dt = S + (Mt - S) * B
          , Yt = P + ($t - P) * B
          , _t = S - (Mt - S) * j
          , Kt = P - ($t - P) * j
          , Xt = Math.min(dt * dt + Ft * Ft, Q * Q + K * K)
          , me = It ? B : j
          , Ee = Xt + me * me * T
          , fr = qt <= Ee;
        let oe = n.join;
        if (oe === Ye.MITER && qt / T > A && (oe = Ye.BEVEL),
        fr)
            switch (oe) {
            case Ye.MITER:
                {
                    p.push(Dt, Yt, _t, Kt);
                    break
                }
            case Ye.BEVEL:
                {
                    It ? p.push(Dt, Yt, S + d * j, P + O * j, Dt, Yt, S + N * j, P + z * j) : p.push(S - d * B, P - O * B, _t, Kt, S - N * B, P - z * B, _t, Kt),
                    f += 2;
                    break
                }
            case Ye.ROUND:
                {
                    It ? (p.push(Dt, Yt, S + d * j, P + O * j),
                    f += _i(S, P, S + d * j, P + O * j, S + N * j, P + z * j, p, !0) + 4,
                    p.push(Dt, Yt, S + N * j, P + z * j)) : (p.push(S - d * B, P - O * B, _t, Kt),
                    f += _i(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, !1) + 4,
                    p.push(S - N * B, P - z * B, _t, Kt));
                    break
                }
            }
        else {
            switch (p.push(S - d * B, P - O * B, S + d * j, P + O * j),
            oe) {
            case Ye.MITER:
                {
                    It ? p.push(_t, Kt, _t, Kt) : p.push(Dt, Yt, Dt, Yt),
                    f += 2;
                    break
                }
            case Ye.ROUND:
                {
                    It ? f += _i(S, P, S + d * j, P + O * j, S + N * j, P + z * j, p, !0) + 2 : f += _i(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, !1) + 2;
                    break
                }
            }
            p.push(S - N * B, P - z * B, S + N * j, P + z * j),
            f += 2
        }
    }
    E = r[(m - 2) * 2],
    I = r[(m - 2) * 2 + 1],
    S = r[(m - 1) * 2],
    P = r[(m - 1) * 2 + 1],
    d = -(I - P),
    O = E - S,
    J = Math.sqrt(d * d + O * O),
    d /= J,
    O /= J,
    d *= _,
    O *= _,
    p.push(S - d * B, P - O * B, S + d * j, P + O * j),
    l || (n.cap === oi.ROUND ? f += _i(S - d * (B - j) * .5, P - O * (B - j) * .5, S - d * B, P - O * B, S + d * j, P + O * j, p, !1) + 2 : n.cap === oi.SQUARE && (f += gc(S, P, d, O, B, j, !1, p)));
    const rt = t.indices
      , at = ms.epsilon * ms.epsilon;
    for (let st = v; st < f + v - 2; ++st)
        E = p[st * 2],
        I = p[st * 2 + 1],
        S = p[(st + 1) * 2],
        P = p[(st + 1) * 2 + 1],
        k = p[(st + 2) * 2],
        $ = p[(st + 2) * 2 + 1],
        !(Math.abs(E * (P - $) + S * ($ - I) + k * (I - P)) < at) && rt.push(st, st + 1, st + 2)
}
function Cx(i, t) {
    let e = 0;
    const r = i.shape
      , s = i.points || r.points
      , n = r.type !== Zt.POLY || r.closeStroke;
    if (s.length === 0)
        return;
    const a = t.points
      , o = t.indices
      , l = s.length / 2
      , c = a.length / 2;
    let p = c;
    for (a.push(s[0], s[1]),
    e = 1; e < l; e++)
        a.push(s[e * 2], s[e * 2 + 1]),
        o.push(p, p + 1),
        p++;
    n && o.push(p, c)
}
function mc(i, t) {
    i.lineStyle.native ? Cx(i, t) : Sx(i, t)
}
class ml {
    static curveLength(t, e, r, s, n, a) {
        const o = t - 2 * r + n
          , l = e - 2 * s + a
          , c = 2 * r - 2 * t
          , p = 2 * s - 2 * e
          , m = 4 * (o * o + l * l)
          , f = 4 * (o * c + l * p)
          , v = c * c + p * p
          , _ = 2 * Math.sqrt(m + f + v)
          , T = Math.sqrt(m)
          , A = 2 * m * T
          , E = 2 * Math.sqrt(v)
          , I = f / T;
        return (A * _ + T * f * (_ - E) + (4 * v * m - f * f) * Math.log((2 * T + I + _) / (I + E))) / (4 * A)
    }
    static curveTo(t, e, r, s, n) {
        const a = n[n.length - 2]
          , o = n[n.length - 1]
          , l = ms._segmentsCount(ml.curveLength(a, o, t, e, r, s));
        let c = 0
          , p = 0;
        for (let m = 1; m <= l; ++m) {
            const f = m / l;
            c = a + (t - a) * f,
            p = o + (e - o) * f,
            n.push(c + (t + (r - t) * f - c) * f, p + (e + (s - e) * f - p) * f)
        }
    }
}
const $o = {
    [Zt.POLY]: pf,
    [Zt.CIRC]: ba,
    [Zt.ELIP]: ba,
    [Zt.RECT]: wx,
    [Zt.RREC]: Ex
}
  , yc = []
  , Xn = [];
class Ta {
    constructor(t, e=null, r=null, s=null) {
        this.points = [],
        this.holes = [],
        this.shape = t,
        this.lineStyle = r,
        this.fillStyle = e,
        this.matrix = s,
        this.type = t.type
    }
    clone() {
        return new Ta(this.shape,this.fillStyle,this.lineStyle,this.matrix)
    }
    destroy() {
        this.shape = null,
        this.holes.length = 0,
        this.holes = null,
        this.points.length = 0,
        this.points = null,
        this.lineStyle = null,
        this.fillStyle = null
    }
}
const Yi = new Bt
  , gf = class mf extends dd {
    constructor() {
        super(),
        this.closePointEps = 1e-4,
        this.boundsPadding = 0,
        this.uvsFloat32 = null,
        this.indicesUint16 = null,
        this.batchable = !1,
        this.points = [],
        this.colors = [],
        this.uvs = [],
        this.indices = [],
        this.textureIds = [],
        this.graphicsData = [],
        this.drawCalls = [],
        this.batchDirty = -1,
        this.batches = [],
        this.dirty = 0,
        this.cacheDirty = -1,
        this.clearDirty = 0,
        this.shapeIndex = 0,
        this._bounds = new ya,
        this.boundsDirty = -1
    }
    get bounds() {
        return this.updateBatches(),
        this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty,
        this.calculateBounds()),
        this._bounds
    }
    invalidate() {
        this.boundsDirty = -1,
        this.dirty++,
        this.batchDirty++,
        this.shapeIndex = 0,
        this.points.length = 0,
        this.colors.length = 0,
        this.uvs.length = 0,
        this.indices.length = 0,
        this.textureIds.length = 0;
        for (let t = 0; t < this.drawCalls.length; t++)
            this.drawCalls[t].texArray.clear(),
            Xn.push(this.drawCalls[t]);
        this.drawCalls.length = 0;
        for (let t = 0; t < this.batches.length; t++) {
            const e = this.batches[t];
            e.reset(),
            yc.push(e)
        }
        this.batches.length = 0
    }
    clear() {
        return this.graphicsData.length > 0 && (this.invalidate(),
        this.clearDirty++,
        this.graphicsData.length = 0),
        this
    }
    drawShape(t, e=null, r=null, s=null) {
        const n = new Ta(t,e,r,s);
        return this.graphicsData.push(n),
        this.dirty++,
        this
    }
    drawHole(t, e=null) {
        if (!this.graphicsData.length)
            return null;
        const r = new Ta(t,null,null,e)
          , s = this.graphicsData[this.graphicsData.length - 1];
        return r.lineStyle = s.lineStyle,
        s.holes.push(r),
        this.dirty++,
        this
    }
    destroy() {
        super.destroy();
        for (let t = 0; t < this.graphicsData.length; ++t)
            this.graphicsData[t].destroy();
        this.points.length = 0,
        this.points = null,
        this.colors.length = 0,
        this.colors = null,
        this.uvs.length = 0,
        this.uvs = null,
        this.indices.length = 0,
        this.indices = null,
        this.indexBuffer.destroy(),
        this.indexBuffer = null,
        this.graphicsData.length = 0,
        this.graphicsData = null,
        this.drawCalls.length = 0,
        this.drawCalls = null,
        this.batches.length = 0,
        this.batches = null,
        this._bounds = null
    }
    containsPoint(t) {
        const e = this.graphicsData;
        for (let r = 0; r < e.length; ++r) {
            const s = e[r];
            if (s.fillStyle.visible && s.shape && (s.matrix ? s.matrix.applyInverse(t, Yi) : Yi.copyFrom(t),
            s.shape.contains(Yi.x, Yi.y))) {
                let n = !1;
                if (s.holes) {
                    for (let a = 0; a < s.holes.length; a++)
                        if (s.holes[a].shape.contains(Yi.x, Yi.y)) {
                            n = !0;
                            break
                        }
                }
                if (!n)
                    return !0
            }
        }
        return !1
    }
    updateBatches() {
        if (!this.graphicsData.length) {
            this.batchable = !0;
            return
        }
        if (!this.validateBatching())
            return;
        this.cacheDirty = this.dirty;
        const t = this.uvs
          , e = this.graphicsData;
        let r = null
          , s = null;
        this.batches.length > 0 && (r = this.batches[this.batches.length - 1],
        s = r.style);
        for (let l = this.shapeIndex; l < e.length; l++) {
            this.shapeIndex++;
            const c = e[l]
              , p = c.fillStyle
              , m = c.lineStyle;
            $o[c.type].build(c),
            c.matrix && this.transformPoints(c.points, c.matrix),
            (p.visible || m.visible) && this.processHoles(c.holes);
            for (let f = 0; f < 2; f++) {
                const v = f === 0 ? p : m;
                if (!v.visible)
                    continue;
                const _ = v.texture.baseTexture
                  , T = this.indices.length
                  , A = this.points.length / 2;
                _.wrapMode = Yr.REPEAT,
                f === 0 ? this.processFill(c) : this.processLine(c);
                const E = this.points.length / 2 - A;
                E !== 0 && (r && !this._compareStyles(s, v) && (r.end(T, A),
                r = null),
                r || (r = yc.pop() || new Ax,
                r.begin(v, T, A),
                this.batches.push(r),
                s = v),
                this.addUvs(this.points, t, v.texture, A, E, v.matrix))
            }
        }
        const n = this.indices.length
          , a = this.points.length / 2;
        if (r && r.end(n, a),
        this.batches.length === 0) {
            this.batchable = !0;
            return
        }
        const o = a > 65535;
        this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices),
        this.batchable = this.isBatchable(),
        this.batchable ? this.packBatches() : this.buildDrawCalls()
    }
    _compareStyles(t, e) {
        return !(!t || !e || t.texture.baseTexture !== e.texture.baseTexture || t.color + t.alpha !== e.color + e.alpha || !!t.native != !!e.native)
    }
    validateBatching() {
        if (this.dirty === this.cacheDirty || !this.graphicsData.length)
            return !1;
        for (let t = 0, e = this.graphicsData.length; t < e; t++) {
            const r = this.graphicsData[t]
              , s = r.fillStyle
              , n = r.lineStyle;
            if (s && !s.texture.baseTexture.valid || n && !n.texture.baseTexture.valid)
                return !1
        }
        return !0
    }
    packBatches() {
        this.batchDirty++,
        this.uvsFloat32 = new Float32Array(this.uvs);
        const t = this.batches;
        for (let e = 0, r = t.length; e < r; e++) {
            const s = t[e];
            for (let n = 0; n < s.size; n++) {
                const a = s.start + n;
                this.indicesUint16[a] = this.indicesUint16[a] - s.attribStart
            }
        }
    }
    isBatchable() {
        if (this.points.length > 65535 * 2)
            return !1;
        const t = this.batches;
        for (let e = 0; e < t.length; e++)
            if (t[e].style.native)
                return !1;
        return this.points.length < mf.BATCHABLE_SIZE * 2
    }
    buildDrawCalls() {
        let t = ++Tt._globalBatch;
        for (let m = 0; m < this.drawCalls.length; m++)
            this.drawCalls[m].texArray.clear(),
            Xn.push(this.drawCalls[m]);
        this.drawCalls.length = 0;
        const e = this.colors
          , r = this.textureIds;
        let s = Xn.pop();
        s || (s = new bh,
        s.texArray = new Ah),
        s.texArray.count = 0,
        s.start = 0,
        s.size = 0,
        s.type = or.TRIANGLES;
        let n = 0
          , a = null
          , o = 0
          , l = !1
          , c = or.TRIANGLES
          , p = 0;
        this.drawCalls.push(s);
        for (let m = 0; m < this.batches.length; m++) {
            const f = this.batches[m]
              , v = 8
              , _ = f.style
              , T = _.texture.baseTexture;
            l !== !!_.native && (l = !!_.native,
            c = l ? or.LINES : or.TRIANGLES,
            a = null,
            n = v,
            t++),
            a !== T && (a = T,
            T._batchEnabled !== t && (n === v && (t++,
            n = 0,
            s.size > 0 && (s = Xn.pop(),
            s || (s = new bh,
            s.texArray = new Ah),
            this.drawCalls.push(s)),
            s.start = p,
            s.size = 0,
            s.texArray.count = 0,
            s.type = c),
            T.touched = 1,
            T._batchEnabled = t,
            T._batchLocation = n,
            T.wrapMode = Yr.REPEAT,
            s.texArray.elements[s.texArray.count++] = T,
            n++)),
            s.size += f.size,
            p += f.size,
            o = T._batchLocation,
            this.addColors(e, _.color, _.alpha, f.attribSize, f.attribStart),
            this.addTextureIds(r, o, f.attribSize, f.attribStart)
        }
        Tt._globalBatch = t,
        this.packAttributes()
    }
    packAttributes() {
        const t = this.points
          , e = this.uvs
          , r = this.colors
          , s = this.textureIds
          , n = new ArrayBuffer(t.length * 3 * 4)
          , a = new Float32Array(n)
          , o = new Uint32Array(n);
        let l = 0;
        for (let c = 0; c < t.length / 2; c++)
            a[l++] = t[c * 2],
            a[l++] = t[c * 2 + 1],
            a[l++] = e[c * 2],
            a[l++] = e[c * 2 + 1],
            o[l++] = r[c],
            a[l++] = s[c];
        this._buffer.update(n),
        this._indexBuffer.update(this.indicesUint16)
    }
    processFill(t) {
        t.holes.length ? pf.triangulate(t, this) : $o[t.type].triangulate(t, this)
    }
    processLine(t) {
        mc(t, this);
        for (let e = 0; e < t.holes.length; e++)
            mc(t.holes[e], this)
    }
    processHoles(t) {
        for (let e = 0; e < t.length; e++) {
            const r = t[e];
            $o[r.type].build(r),
            r.matrix && this.transformPoints(r.points, r.matrix)
        }
    }
    calculateBounds() {
        const t = this._bounds;
        t.clear(),
        t.addVertexData(this.points, 0, this.points.length),
        t.pad(this.boundsPadding, this.boundsPadding)
    }
    transformPoints(t, e) {
        for (let r = 0; r < t.length / 2; r++) {
            const s = t[r * 2]
              , n = t[r * 2 + 1];
            t[r * 2] = e.a * s + e.c * n + e.tx,
            t[r * 2 + 1] = e.b * s + e.d * n + e.ty
        }
    }
    addColors(t, e, r, s, n=0) {
        const a = Pt.shared.setValue(e).toLittleEndianNumber()
          , o = Pt.shared.setValue(a).toPremultiplied(r);
        t.length = Math.max(t.length, n + s);
        for (let l = 0; l < s; l++)
            t[n + l] = o
    }
    addTextureIds(t, e, r, s=0) {
        t.length = Math.max(t.length, s + r);
        for (let n = 0; n < r; n++)
            t[s + n] = e
    }
    addUvs(t, e, r, s, n, a=null) {
        let o = 0;
        const l = e.length
          , c = r.frame;
        for (; o < n; ) {
            let m = t[(s + o) * 2]
              , f = t[(s + o) * 2 + 1];
            if (a) {
                const v = a.a * m + a.c * f + a.tx;
                f = a.b * m + a.d * f + a.ty,
                m = v
            }
            o++,
            e.push(m / c.width, f / c.height)
        }
        const p = r.baseTexture;
        (c.width < p.width || c.height < p.height) && this.adjustUvs(e, r, l, n)
    }
    adjustUvs(t, e, r, s) {
        const n = e.baseTexture
          , a = 1e-6
          , o = r + s * 2
          , l = e.frame
          , c = l.width / n.width
          , p = l.height / n.height;
        let m = l.x / l.width
          , f = l.y / l.height
          , v = Math.floor(t[r] + a)
          , _ = Math.floor(t[r + 1] + a);
        for (let T = r + 2; T < o; T += 2)
            v = Math.min(v, Math.floor(t[T] + a)),
            _ = Math.min(_, Math.floor(t[T + 1] + a));
        m -= v,
        f -= _;
        for (let T = r; T < o; T += 2)
            t[T] = (t[T] + m) * c,
            t[T + 1] = (t[T + 1] + f) * p
    }
}
;
gf.BATCHABLE_SIZE = 100;
let Ix = gf;
class Ua {
    constructor() {
        this.color = 16777215,
        this.alpha = 1,
        this.texture = ut.WHITE,
        this.matrix = null,
        this.visible = !1,
        this.reset()
    }
    clone() {
        const t = new Ua;
        return t.color = this.color,
        t.alpha = this.alpha,
        t.texture = this.texture,
        t.matrix = this.matrix,
        t.visible = this.visible,
        t
    }
    reset() {
        this.color = 16777215,
        this.alpha = 1,
        this.texture = ut.WHITE,
        this.matrix = null,
        this.visible = !1
    }
    destroy() {
        this.texture = null,
        this.matrix = null
    }
}
class yl extends Ua {
    constructor() {
        super(...arguments),
        this.width = 0,
        this.alignment = .5,
        this.native = !1,
        this.cap = oi.BUTT,
        this.join = Ye.MITER,
        this.miterLimit = 10
    }
    clone() {
        const t = new yl;
        return t.color = this.color,
        t.alpha = this.alpha,
        t.texture = this.texture,
        t.matrix = this.matrix,
        t.visible = this.visible,
        t.width = this.width,
        t.alignment = this.alignment,
        t.native = this.native,
        t.cap = this.cap,
        t.join = this.join,
        t.miterLimit = this.miterLimit,
        t
    }
    reset() {
        super.reset(),
        this.color = 0,
        this.alignment = .5,
        this.width = 0,
        this.native = !1,
        this.cap = oi.BUTT,
        this.join = Ye.MITER,
        this.miterLimit = 10
    }
}
const jo = {}
  , Xh = class ia extends Ue {
    constructor(t=null) {
        super(),
        this.shader = null,
        this.pluginName = "batch",
        this.currentPath = null,
        this.batches = [],
        this.batchTint = -1,
        this.batchDirty = -1,
        this.vertexData = null,
        this._fillStyle = new Ua,
        this._lineStyle = new yl,
        this._matrix = null,
        this._holeMode = !1,
        this.state = Nr.for2d(),
        this._geometry = t || new Ix,
        this._geometry.refCount++,
        this._transformID = -1,
        this._tintColor = new Pt(16777215),
        this.blendMode = Y.NORMAL
    }
    get geometry() {
        return this._geometry
    }
    clone() {
        return this.finishPoly(),
        new ia(this._geometry)
    }
    set blendMode(t) {
        this.state.blendMode = t
    }
    get blendMode() {
        return this.state.blendMode
    }
    get tint() {
        return this._tintColor.value
    }
    set tint(t) {
        this._tintColor.setValue(t)
    }
    get fill() {
        return this._fillStyle
    }
    get line() {
        return this._lineStyle
    }
    lineStyle(t=null, e=0, r, s=.5, n=!1) {
        return typeof t == "number" && (t = {
            width: t,
            color: e,
            alpha: r,
            alignment: s,
            native: n
        }),
        this.lineTextureStyle(t)
    }
    lineTextureStyle(t) {
        const e = {
            width: 0,
            texture: ut.WHITE,
            color: t != null && t.texture ? 16777215 : 0,
            matrix: null,
            alignment: .5,
            native: !1,
            cap: oi.BUTT,
            join: Ye.MITER,
            miterLimit: 10
        };
        t = Object.assign(e, t),
        this.normalizeColor(t),
        this.currentPath && this.startPoly();
        const r = t.width > 0 && t.alpha > 0;
        return r ? (t.matrix && (t.matrix = t.matrix.clone(),
        t.matrix.invert()),
        Object.assign(this._lineStyle, {
            visible: r
        }, t)) : this._lineStyle.reset(),
        this
    }
    startPoly() {
        if (this.currentPath) {
            const t = this.currentPath.points
              , e = this.currentPath.points.length;
            e > 2 && (this.drawShape(this.currentPath),
            this.currentPath = new Mi,
            this.currentPath.closeStroke = !1,
            this.currentPath.points.push(t[e - 2], t[e - 1]))
        } else
            this.currentPath = new Mi,
            this.currentPath.closeStroke = !1
    }
    finishPoly() {
        this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath),
        this.currentPath = null) : this.currentPath.points.length = 0)
    }
    moveTo(t, e) {
        return this.startPoly(),
        this.currentPath.points[0] = t,
        this.currentPath.points[1] = e,
        this
    }
    lineTo(t, e) {
        this.currentPath || this.moveTo(0, 0);
        const r = this.currentPath.points
          , s = r[r.length - 2]
          , n = r[r.length - 1];
        return (s !== t || n !== e) && r.push(t, e),
        this
    }
    _initCurve(t=0, e=0) {
        this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
    }
    quadraticCurveTo(t, e, r, s) {
        this._initCurve();
        const n = this.currentPath.points;
        return n.length === 0 && this.moveTo(0, 0),
        ml.curveTo(t, e, r, s, n),
        this
    }
    bezierCurveTo(t, e, r, s, n, a) {
        return this._initCurve(),
        gl.curveTo(t, e, r, s, n, a, this.currentPath.points),
        this
    }
    arcTo(t, e, r, s, n) {
        this._initCurve(t, e);
        const a = this.currentPath.points
          , o = pc.curveTo(t, e, r, s, n, a);
        if (o) {
            const {cx: l, cy: c, radius: p, startAngle: m, endAngle: f, anticlockwise: v} = o;
            this.arc(l, c, p, m, f, v)
        }
        return this
    }
    arc(t, e, r, s, n, a=!1) {
        if (s === n)
            return this;
        if (!a && n <= s ? n += da : a && s <= n && (s += da),
        n - s === 0)
            return this;
        const o = t + Math.cos(s) * r
          , l = e + Math.sin(s) * r
          , c = this._geometry.closePointEps;
        let p = this.currentPath ? this.currentPath.points : null;
        if (p) {
            const m = Math.abs(p[p.length - 2] - o)
              , f = Math.abs(p[p.length - 1] - l);
            m < c && f < c || p.push(o, l)
        } else
            this.moveTo(o, l),
            p = this.currentPath.points;
        return pc.arc(o, l, t, e, r, s, n, a, p),
        this
    }
    beginFill(t=0, e) {
        return this.beginTextureFill({
            texture: ut.WHITE,
            color: t,
            alpha: e
        })
    }
    normalizeColor(t) {
        const e = Pt.shared.setValue(t.color ?? 0);
        t.color = e.toNumber(),
        t.alpha ?? (t.alpha = e.alpha)
    }
    beginTextureFill(t) {
        const e = {
            texture: ut.WHITE,
            color: 16777215,
            matrix: null
        };
        t = Object.assign(e, t),
        this.normalizeColor(t),
        this.currentPath && this.startPoly();
        const r = t.alpha > 0;
        return r ? (t.matrix && (t.matrix = t.matrix.clone(),
        t.matrix.invert()),
        Object.assign(this._fillStyle, {
            visible: r
        }, t)) : this._fillStyle.reset(),
        this
    }
    endFill() {
        return this.finishPoly(),
        this._fillStyle.reset(),
        this
    }
    drawRect(t, e, r, s) {
        return this.drawShape(new At(t,e,r,s))
    }
    drawRoundedRect(t, e, r, s, n) {
        return this.drawShape(new Ba(t,e,r,s,n))
    }
    drawCircle(t, e, r) {
        return this.drawShape(new Ma(t,e,r))
    }
    drawEllipse(t, e, r, s) {
        return this.drawShape(new Da(t,e,r,s))
    }
    drawPolygon(...t) {
        let e, r = !0;
        const s = t[0];
        s.points ? (r = s.closeStroke,
        e = s.points) : Array.isArray(t[0]) ? e = t[0] : e = t;
        const n = new Mi(e);
        return n.closeStroke = r,
        this.drawShape(n),
        this
    }
    drawShape(t) {
        return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix),
        this
    }
    clear() {
        return this._geometry.clear(),
        this._lineStyle.reset(),
        this._fillStyle.reset(),
        this._boundsID++,
        this._matrix = null,
        this._holeMode = !1,
        this.currentPath = null,
        this
    }
    isFastRect() {
        const t = this._geometry.graphicsData;
        return t.length === 1 && t[0].shape.type === Zt.RECT && !t[0].matrix && !t[0].holes.length && !(t[0].lineStyle.visible && t[0].lineStyle.width)
    }
    _render(t) {
        this.finishPoly();
        const e = this._geometry;
        e.updateBatches(),
        e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(),
        this._renderBatched(t)) : (t.batch.flush(),
        this._renderDirect(t))
    }
    _populateBatches() {
        const t = this._geometry
          , e = this.blendMode
          , r = t.batches.length;
        this.batchTint = -1,
        this._transformID = -1,
        this.batchDirty = t.batchDirty,
        this.batches.length = r,
        this.vertexData = new Float32Array(t.points);
        for (let s = 0; s < r; s++) {
            const n = t.batches[s]
              , a = n.style.color
              , o = new Float32Array(this.vertexData.buffer,n.attribStart * 4 * 2,n.attribSize * 2)
              , l = new Float32Array(t.uvsFloat32.buffer,n.attribStart * 4 * 2,n.attribSize * 2)
              , c = new Uint16Array(t.indicesUint16.buffer,n.start * 2,n.size)
              , p = {
                vertexData: o,
                blendMode: e,
                indices: c,
                uvs: l,
                _batchRGB: Pt.shared.setValue(a).toRgbArray(),
                _tintRGB: a,
                _texture: n.style.texture,
                alpha: n.style.alpha,
                worldAlpha: 1
            };
            this.batches[s] = p
        }
    }
    _renderBatched(t) {
        if (this.batches.length) {
            t.batch.setObjectRenderer(t.plugins[this.pluginName]),
            this.calculateVertices(),
            this.calculateTints();
            for (let e = 0, r = this.batches.length; e < r; e++) {
                const s = this.batches[e];
                s.worldAlpha = this.worldAlpha * s.alpha,
                t.plugins[this.pluginName].render(s)
            }
        }
    }
    _renderDirect(t) {
        const e = this._resolveDirectShader(t)
          , r = this._geometry
          , s = this.worldAlpha
          , n = e.uniforms
          , a = r.drawCalls;
        n.translationMatrix = this.transform.worldTransform,
        Pt.shared.setValue(this._tintColor).premultiply(s).toArray(n.tint),
        t.shader.bind(e),
        t.geometry.bind(r, e),
        t.state.set(this.state);
        for (let o = 0, l = a.length; o < l; o++)
            this._renderDrawCallDirect(t, r.drawCalls[o])
    }
    _renderDrawCallDirect(t, e) {
        const {texArray: r, type: s, size: n, start: a} = e
          , o = r.count;
        for (let l = 0; l < o; l++)
            t.texture.bind(r.elements[l], l);
        t.geometry.draw(s, n, a)
    }
    _resolveDirectShader(t) {
        let e = this.shader;
        const r = this.pluginName;
        if (!e) {
            if (!jo[r]) {
                const {maxTextures: s} = t.plugins[r]
                  , n = new Int32Array(s);
                for (let l = 0; l < s; l++)
                    n[l] = l;
                const a = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new Wt,
                    default: cr.from({
                        uSamplers: n
                    }, !0)
                }
                  , o = t.plugins[r]._shader.program;
                jo[r] = new Dr(o,a)
            }
            e = jo[r]
        }
        return e
    }
    _calculateBounds() {
        this.finishPoly();
        const t = this._geometry;
        if (!t.graphicsData.length)
            return;
        const {minX: e, minY: r, maxX: s, maxY: n} = t.bounds;
        this._bounds.addFrame(this.transform, e, r, s, n)
    }
    containsPoint(t) {
        return this.worldTransform.applyInverse(t, ia._TEMP_POINT),
        this._geometry.containsPoint(ia._TEMP_POINT)
    }
    calculateTints() {
        if (this.batchTint !== this.tint) {
            this.batchTint = this._tintColor.toNumber();
            for (let t = 0; t < this.batches.length; t++) {
                const e = this.batches[t];
                e._tintRGB = Pt.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber()
            }
        }
    }
    calculateVertices() {
        const t = this.transform._worldID;
        if (this._transformID === t)
            return;
        this._transformID = t;
        const e = this.transform.worldTransform
          , r = e.a
          , s = e.b
          , n = e.c
          , a = e.d
          , o = e.tx
          , l = e.ty
          , c = this._geometry.points
          , p = this.vertexData;
        let m = 0;
        for (let f = 0; f < c.length; f += 2) {
            const v = c[f]
              , _ = c[f + 1];
            p[m++] = r * v + n * _ + o,
            p[m++] = a * _ + s * v + l
        }
    }
    closePath() {
        const t = this.currentPath;
        return t && (t.closeStroke = !0,
        this.finishPoly()),
        this
    }
    setMatrix(t) {
        return this._matrix = t,
        this
    }
    beginHole() {
        return this.finishPoly(),
        this._holeMode = !0,
        this
    }
    endHole() {
        return this.finishPoly(),
        this._holeMode = !1,
        this
    }
    destroy(t) {
        this._geometry.refCount--,
        this._geometry.refCount === 0 && this._geometry.dispose(),
        this._matrix = null,
        this.currentPath = null,
        this._lineStyle.destroy(),
        this._lineStyle = null,
        this._fillStyle.destroy(),
        this._fillStyle = null,
        this._geometry = null,
        this.shader = null,
        this.vertexData = null,
        this.batches.length = 0,
        this.batches = null,
        super.destroy(t)
    }
}
;
Xh.curves = ms,
Xh._TEMP_POINT = new Bt;
let cn = Xh;
class Rx {
    constructor(t, e) {
        this.uvBuffer = t,
        this.uvMatrix = e,
        this.data = null,
        this._bufferUpdateId = -1,
        this._textureUpdateId = -1,
        this._updateID = 0
    }
    update(t) {
        if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID)
            return;
        this._bufferUpdateId = this.uvBuffer._updateID,
        this._textureUpdateId = this.uvMatrix._updateID;
        const e = this.uvBuffer.data;
        (!this.data || this.data.length !== e.length) && (this.data = new Float32Array(e.length)),
        this.uvMatrix.multiplyUvs(e, this.data),
        this._updateID++
    }
}
const Wo = new Bt
  , vc = new Mi
  , yf = class vf extends Ue {
    constructor(t, e, r, s=or.TRIANGLES) {
        super(),
        this.geometry = t,
        this.shader = e,
        this.state = r || Nr.for2d(),
        this.drawMode = s,
        this.start = 0,
        this.size = 0,
        this.uvs = null,
        this.indices = null,
        this.vertexData = new Float32Array(1),
        this.vertexDirty = -1,
        this._transformID = -1,
        this._roundPixels = nt.ROUND_PIXELS,
        this.batchUvs = null
    }
    get geometry() {
        return this._geometry
    }
    set geometry(t) {
        this._geometry !== t && (this._geometry && (this._geometry.refCount--,
        this._geometry.refCount === 0 && this._geometry.dispose()),
        this._geometry = t,
        this._geometry && this._geometry.refCount++,
        this.vertexDirty = -1)
    }
    get uvBuffer() {
        return this.geometry.buffers[1]
    }
    get verticesBuffer() {
        return this.geometry.buffers[0]
    }
    set material(t) {
        this.shader = t
    }
    get material() {
        return this.shader
    }
    set blendMode(t) {
        this.state.blendMode = t
    }
    get blendMode() {
        return this.state.blendMode
    }
    set roundPixels(t) {
        this._roundPixels !== t && (this._transformID = -1),
        this._roundPixels = t
    }
    get roundPixels() {
        return this._roundPixels
    }
    get tint() {
        return "tint"in this.shader ? this.shader.tint : null
    }
    set tint(t) {
        this.shader.tint = t
    }
    get tintValue() {
        return this.shader.tintValue
    }
    get texture() {
        return "texture"in this.shader ? this.shader.texture : null
    }
    set texture(t) {
        this.shader.texture = t
    }
    _render(t) {
        const e = this.geometry.buffers[0].data;
        this.shader.batchable && this.drawMode === or.TRIANGLES && e.length < vf.BATCHABLE_SIZE * 2 ? this._renderToBatch(t) : this._renderDefault(t)
    }
    _renderDefault(t) {
        const e = this.shader;
        e.alpha = this.worldAlpha,
        e.update && e.update(),
        t.batch.flush(),
        e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0),
        t.shader.bind(e),
        t.state.set(this.state),
        t.geometry.bind(this.geometry, e),
        t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
    }
    _renderToBatch(t) {
        const e = this.geometry
          , r = this.shader;
        r.uvMatrix && (r.uvMatrix.update(),
        this.calculateUvs()),
        this.calculateVertices(),
        this.indices = e.indexBuffer.data,
        this._tintRGB = r._tintRGB,
        this._texture = r.texture;
        const s = this.material.pluginName;
        t.batch.setObjectRenderer(t.plugins[s]),
        t.plugins[s].render(this)
    }
    calculateVertices() {
        const t = this.geometry.buffers[0]
          , e = t.data
          , r = t._updateID;
        if (r === this.vertexDirty && this._transformID === this.transform._worldID)
            return;
        this._transformID = this.transform._worldID,
        this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
        const s = this.transform.worldTransform
          , n = s.a
          , a = s.b
          , o = s.c
          , l = s.d
          , c = s.tx
          , p = s.ty
          , m = this.vertexData;
        for (let f = 0; f < m.length / 2; f++) {
            const v = e[f * 2]
              , _ = e[f * 2 + 1];
            m[f * 2] = n * v + o * _ + c,
            m[f * 2 + 1] = a * v + l * _ + p
        }
        if (this._roundPixels) {
            const f = nt.RESOLUTION;
            for (let v = 0; v < m.length; ++v)
                m[v] = Math.round(m[v] * f) / f
        }
        this.vertexDirty = r
    }
    calculateUvs() {
        const t = this.geometry.buffers[1]
          , e = this.shader;
        e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Rx(t,e.uvMatrix)),
        this.batchUvs.update(),
        this.uvs = this.batchUvs.data)
    }
    _calculateBounds() {
        this.calculateVertices(),
        this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
    }
    containsPoint(t) {
        if (!this.getBounds().contains(t.x, t.y))
            return !1;
        this.worldTransform.applyInverse(t, Wo);
        const e = this.geometry.getBuffer("aVertexPosition").data
          , r = vc.points
          , s = this.geometry.getIndex().data
          , n = s.length
          , a = this.drawMode === 4 ? 3 : 1;
        for (let o = 0; o + 2 < n; o += a) {
            const l = s[o] * 2
              , c = s[o + 1] * 2
              , p = s[o + 2] * 2;
            if (r[0] = e[l],
            r[1] = e[l + 1],
            r[2] = e[c],
            r[3] = e[c + 1],
            r[4] = e[p],
            r[5] = e[p + 1],
            vc.contains(Wo.x, Wo.y))
                return !0
        }
        return !1
    }
    destroy(t) {
        super.destroy(t),
        this._cachedTexture && (this._cachedTexture.destroy(),
        this._cachedTexture = null),
        this.geometry = null,
        this.shader = null,
        this.state = null,
        this.uvs = null,
        this.indices = null,
        this.vertexData = null
    }
}
;
yf.BATCHABLE_SIZE = 100;
let Be = yf;
class Ga extends li {
    constructor(t, e, r) {
        super();
        const s = new pe(t)
          , n = new pe(e,!0)
          , a = new pe(r,!0,!0);
        this.addAttribute("aVertexPosition", s, 2, !1, mt.FLOAT).addAttribute("aTextureCoord", n, 2, !1, mt.FLOAT).addIndex(a),
        this._updateId = -1
    }
    get vertexDirtyId() {
        return this.buffers[0]._updateID
    }
}
var Px = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`
  , Mx = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class ys extends Dr {
    constructor(t, e) {
        const r = {
            uSampler: t,
            alpha: 1,
            uTextureMatrix: Wt.IDENTITY,
            uColor: new Float32Array([1, 1, 1, 1])
        };
        e = Object.assign({
            tint: 16777215,
            alpha: 1,
            pluginName: "batch"
        }, e),
        e.uniforms && Object.assign(r, e.uniforms),
        super(e.program || zr.from(Mx, Px), r),
        this._colorDirty = !1,
        this.uvMatrix = new ul(t),
        this.batchable = e.program === void 0,
        this.pluginName = e.pluginName,
        this._tintColor = new Pt(e.tint),
        this._tintRGB = this._tintColor.toLittleEndianNumber(),
        this._colorDirty = !0,
        this.alpha = e.alpha
    }
    get texture() {
        return this.uniforms.uSampler
    }
    set texture(t) {
        this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0),
        this.uniforms.uSampler = t,
        this.uvMatrix.texture = t)
    }
    set alpha(t) {
        t !== this._alpha && (this._alpha = t,
        this._colorDirty = !0)
    }
    get alpha() {
        return this._alpha
    }
    set tint(t) {
        t !== this.tint && (this._tintColor.setValue(t),
        this._tintRGB = this._tintColor.toLittleEndianNumber(),
        this._colorDirty = !0)
    }
    get tint() {
        return this._tintColor.value
    }
    get tintValue() {
        return this._tintColor.toNumber()
    }
    update() {
        if (this._colorDirty) {
            this._colorDirty = !1;
            const t = this.texture.baseTexture.alphaMode;
            Pt.shared.setValue(this._tintColor).premultiply(this._alpha, t).toArray(this.uniforms.uColor)
        }
        this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
    }
}
class Dx extends Ga {
    constructor(t=100, e=100, r=10, s=10) {
        super(),
        this.segWidth = r,
        this.segHeight = s,
        this.width = t,
        this.height = e,
        this.build()
    }
    build() {
        const t = this.segWidth * this.segHeight
          , e = []
          , r = []
          , s = []
          , n = this.segWidth - 1
          , a = this.segHeight - 1
          , o = this.width / n
          , l = this.height / a;
        for (let p = 0; p < t; p++) {
            const m = p % this.segWidth
              , f = p / this.segWidth | 0;
            e.push(m * o, f * l),
            r.push(m / n, f / a)
        }
        const c = n * a;
        for (let p = 0; p < c; p++) {
            const m = p % n
              , f = p / n | 0
              , v = f * this.segWidth + m
              , _ = f * this.segWidth + m + 1
              , T = (f + 1) * this.segWidth + m
              , A = (f + 1) * this.segWidth + m + 1;
            s.push(v, _, T, _, A, T)
        }
        this.buffers[0].data = new Float32Array(e),
        this.buffers[1].data = new Float32Array(r),
        this.indexBuffer.data = new Uint16Array(s),
        this.buffers[0].update(),
        this.buffers[1].update(),
        this.indexBuffer.update()
    }
}
class Bx extends Ga {
    constructor(t=200, e, r=0) {
        super(new Float32Array(e.length * 4), new Float32Array(e.length * 4), new Uint16Array((e.length - 1) * 6)),
        this.points = e,
        this._width = t,
        this.textureScale = r,
        this.build()
    }
    get width() {
        return this._width
    }
    build() {
        const t = this.points;
        if (!t)
            return;
        const e = this.getBuffer("aVertexPosition")
          , r = this.getBuffer("aTextureCoord")
          , s = this.getIndex();
        if (t.length < 1)
            return;
        e.data.length / 4 !== t.length && (e.data = new Float32Array(t.length * 4),
        r.data = new Float32Array(t.length * 4),
        s.data = new Uint16Array((t.length - 1) * 6));
        const n = r.data
          , a = s.data;
        n[0] = 0,
        n[1] = 0,
        n[2] = 0,
        n[3] = 1;
        let o = 0
          , l = t[0];
        const c = this._width * this.textureScale
          , p = t.length;
        for (let f = 0; f < p; f++) {
            const v = f * 4;
            if (this.textureScale > 0) {
                const _ = l.x - t[f].x
                  , T = l.y - t[f].y
                  , A = Math.sqrt(_ * _ + T * T);
                l = t[f],
                o += A / c
            } else
                o = f / (p - 1);
            n[v] = o,
            n[v + 1] = 0,
            n[v + 2] = o,
            n[v + 3] = 1
        }
        let m = 0;
        for (let f = 0; f < p - 1; f++) {
            const v = f * 2;
            a[m++] = v,
            a[m++] = v + 1,
            a[m++] = v + 2,
            a[m++] = v + 2,
            a[m++] = v + 1,
            a[m++] = v + 3
        }
        r.update(),
        s.update(),
        this.updateVertices()
    }
    updateVertices() {
        const t = this.points;
        if (t.length < 1)
            return;
        let e = t[0], r, s = 0, n = 0;
        const a = this.buffers[0].data
          , o = t.length
          , l = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
        for (let c = 0; c < o; c++) {
            const p = t[c]
              , m = c * 4;
            c < t.length - 1 ? r = t[c + 1] : r = p,
            n = -(r.x - e.x),
            s = r.y - e.y;
            const f = Math.sqrt(s * s + n * n);
            f < 1e-6 ? (s = 0,
            n = 0) : (s /= f,
            n /= f,
            s *= l,
            n *= l),
            a[m] = p.x + s,
            a[m + 1] = p.y + n,
            a[m + 2] = p.x - s,
            a[m + 3] = p.y - n,
            e = p
        }
        this.buffers[0].update()
    }
    update() {
        this.textureScale > 0 ? this.build() : this.updateVertices()
    }
}
class Fx extends Be {
    constructor(t, e, r) {
        const s = new Dx(t.width,t.height,e,r)
          , n = new ys(ut.WHITE);
        super(s, n),
        this.texture = t,
        this.autoResize = !0
    }
    textureUpdated() {
        this._textureID = this.shader.texture._updateID;
        const t = this.geometry
          , {width: e, height: r} = this.shader.texture;
        this.autoResize && (t.width !== e || t.height !== r) && (t.width = this.shader.texture.width,
        t.height = this.shader.texture.height,
        t.build())
    }
    set texture(t) {
        this.shader.texture !== t && (this.shader.texture = t,
        this._textureID = -1,
        t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
    }
    get texture() {
        return this.shader.texture
    }
    _render(t) {
        this._textureID !== this.shader.texture._updateID && this.textureUpdated(),
        super._render(t)
    }
    destroy(t) {
        this.shader.texture.off("update", this.textureUpdated, this),
        super.destroy(t)
    }
}
const zn = 10;
class Ha extends Fx {
    constructor(t, e, r, s, n) {
        var a, o, l, c;
        super(ut.WHITE, 4, 4),
        this._origWidth = t.orig.width,
        this._origHeight = t.orig.height,
        this._width = this._origWidth,
        this._height = this._origHeight,
        this._leftWidth = e ?? ((a = t.defaultBorders) == null ? void 0 : a.left) ?? zn,
        this._rightWidth = s ?? ((o = t.defaultBorders) == null ? void 0 : o.right) ?? zn,
        this._topHeight = r ?? ((l = t.defaultBorders) == null ? void 0 : l.top) ?? zn,
        this._bottomHeight = n ?? ((c = t.defaultBorders) == null ? void 0 : c.bottom) ?? zn,
        this.texture = t
    }
    textureUpdated() {
        this._textureID = this.shader.texture._updateID,
        this._refresh()
    }
    get vertices() {
        return this.geometry.getBuffer("aVertexPosition").data
    }
    set vertices(t) {
        this.geometry.getBuffer("aVertexPosition").data = t
    }
    updateHorizontalVertices() {
        const t = this.vertices
          , e = this._getMinScale();
        t[9] = t[11] = t[13] = t[15] = this._topHeight * e,
        t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e,
        t[25] = t[27] = t[29] = t[31] = this._height
    }
    updateVerticalVertices() {
        const t = this.vertices
          , e = this._getMinScale();
        t[2] = t[10] = t[18] = t[26] = this._leftWidth * e,
        t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e,
        t[6] = t[14] = t[22] = t[30] = this._width
    }
    _getMinScale() {
        const t = this._leftWidth + this._rightWidth
          , e = this._width > t ? 1 : this._width / t
          , r = this._topHeight + this._bottomHeight
          , s = this._height > r ? 1 : this._height / r;
        return Math.min(e, s)
    }
    get width() {
        return this._width
    }
    set width(t) {
        this._width = t,
        this._refresh()
    }
    get height() {
        return this._height
    }
    set height(t) {
        this._height = t,
        this._refresh()
    }
    get leftWidth() {
        return this._leftWidth
    }
    set leftWidth(t) {
        this._leftWidth = t,
        this._refresh()
    }
    get rightWidth() {
        return this._rightWidth
    }
    set rightWidth(t) {
        this._rightWidth = t,
        this._refresh()
    }
    get topHeight() {
        return this._topHeight
    }
    set topHeight(t) {
        this._topHeight = t,
        this._refresh()
    }
    get bottomHeight() {
        return this._bottomHeight
    }
    set bottomHeight(t) {
        this._bottomHeight = t,
        this._refresh()
    }
    _refresh() {
        const t = this.texture
          , e = this.geometry.buffers[1].data;
        this._origWidth = t.orig.width,
        this._origHeight = t.orig.height;
        const r = 1 / this._origWidth
          , s = 1 / this._origHeight;
        e[0] = e[8] = e[16] = e[24] = 0,
        e[1] = e[3] = e[5] = e[7] = 0,
        e[6] = e[14] = e[22] = e[30] = 1,
        e[25] = e[27] = e[29] = e[31] = 1,
        e[2] = e[10] = e[18] = e[26] = r * this._leftWidth,
        e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth,
        e[9] = e[11] = e[13] = e[15] = s * this._topHeight,
        e[17] = e[19] = e[21] = e[23] = 1 - s * this._bottomHeight,
        this.updateHorizontalVertices(),
        this.updateVerticalVertices(),
        this.geometry.buffers[0].update(),
        this.geometry.buffers[1].update()
    }
}
class Ox extends Be {
    constructor(t=ut.EMPTY, e, r, s, n) {
        const a = new Ga(e,r,s);
        a.getBuffer("aVertexPosition").static = !1;
        const o = new ys(t);
        super(a, o, null, n),
        this.autoUpdate = !0
    }
    get vertices() {
        return this.geometry.getBuffer("aVertexPosition").data
    }
    set vertices(t) {
        this.geometry.getBuffer("aVertexPosition").data = t
    }
    _render(t) {
        this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(),
        super._render(t)
    }
}
class Nx extends Be {
    constructor(t, e, r=0) {
        const s = new Bx(t.height,e,r)
          , n = new ys(t);
        r > 0 && (t.baseTexture.wrapMode = Yr.REPEAT),
        super(s, n),
        this.autoUpdate = !0
    }
    _render(t) {
        const e = this.geometry;
        (this.autoUpdate || e._width !== this.shader.texture.height) && (e._width = this.shader.texture.height,
        e.update()),
        super._render(t)
    }
}
class Lx {
    constructor(t) {
        this.maxItemsPerFrame = t,
        this.itemsLeft = 0
    }
    beginFrame() {
        this.itemsLeft = this.maxItemsPerFrame
    }
    allowedToUpload() {
        return this.itemsLeft-- > 0
    }
}
function kx(i, t) {
    var r;
    let e = !1;
    if ((r = i == null ? void 0 : i._textures) != null && r.length) {
        for (let s = 0; s < i._textures.length; s++)
            if (i._textures[s]instanceof ut) {
                const n = i._textures[s].baseTexture;
                t.includes(n) || (t.push(n),
                e = !0)
            }
    }
    return e
}
function Ux(i, t) {
    if (i.baseTexture instanceof Tt) {
        const e = i.baseTexture;
        return t.includes(e) || t.push(e),
        !0
    }
    return !1
}
function Gx(i, t) {
    if (i._texture && i._texture instanceof ut) {
        const e = i._texture.baseTexture;
        return t.includes(e) || t.push(e),
        !0
    }
    return !1
}
function Hx(i, t) {
    return t instanceof fl ? (t.updateText(!0),
    !0) : !1
}
function Vx(i, t) {
    if (t instanceof ui) {
        const e = t.toFontString();
        return si.measureFont(e),
        !0
    }
    return !1
}
function $x(i, t) {
    if (i instanceof fl) {
        t.includes(i.style) || t.push(i.style),
        t.includes(i) || t.push(i);
        const e = i._texture.baseTexture;
        return t.includes(e) || t.push(e),
        !0
    }
    return !1
}
function jx(i, t) {
    return i instanceof ui ? (t.includes(i) || t.push(i),
    !0) : !1
}
const _f = class xf {
    constructor(t) {
        this.limiter = new Lx(xf.uploadsPerFrame),
        this.renderer = t,
        this.uploadHookHelper = null,
        this.queue = [],
        this.addHooks = [],
        this.uploadHooks = [],
        this.completes = [],
        this.ticking = !1,
        this.delayedTick = () => {
            this.queue && this.prepareItems()
        }
        ,
        this.registerFindHook($x),
        this.registerFindHook(jx),
        this.registerFindHook(kx),
        this.registerFindHook(Ux),
        this.registerFindHook(Gx),
        this.registerUploadHook(Hx),
        this.registerUploadHook(Vx)
    }
    upload(t) {
        return new Promise(e => {
            t && this.add(t),
            this.queue.length ? (this.completes.push(e),
            this.ticking || (this.ticking = !0,
            je.system.addOnce(this.tick, this, Fi.UTILITY))) : e()
        }
        )
    }
    tick() {
        setTimeout(this.delayedTick, 0)
    }
    prepareItems() {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload(); ) {
            const t = this.queue[0];
            let e = !1;
            if (t && !t._destroyed) {
                for (let r = 0, s = this.uploadHooks.length; r < s; r++)
                    if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                        this.queue.shift(),
                        e = !0;
                        break
                    }
            }
            e || this.queue.shift()
        }
        if (this.queue.length)
            je.system.addOnce(this.tick, this, Fi.UTILITY);
        else {
            this.ticking = !1;
            const t = this.completes.slice(0);
            this.completes.length = 0;
            for (let e = 0, r = t.length; e < r; e++)
                t[e]()
        }
    }
    registerFindHook(t) {
        return t && this.addHooks.push(t),
        this
    }
    registerUploadHook(t) {
        return t && this.uploadHooks.push(t),
        this
    }
    add(t) {
        for (let e = 0, r = this.addHooks.length; e < r && !this.addHooks[e](t, this.queue); e++)
            ;
        if (t instanceof Ue)
            for (let e = t.children.length - 1; e >= 0; e--)
                this.add(t.children[e]);
        return this
    }
    destroy() {
        this.ticking && je.system.remove(this.tick, this),
        this.ticking = !1,
        this.addHooks = null,
        this.uploadHooks = null,
        this.renderer = null,
        this.completes = null,
        this.queue = null,
        this.limiter = null,
        this.uploadHookHelper = null
    }
}
;
_f.uploadsPerFrame = 4;
let wa = _f;
Object.defineProperties(nt, {
    UPLOADS_PER_FRAME: {
        get() {
            return wa.uploadsPerFrame
        },
        set(i) {
            vt("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"),
            wa.uploadsPerFrame = i
        }
    }
});
function bf(i, t) {
    return t instanceof Tt ? (t._glTextures[i.CONTEXT_UID] || i.texture.bind(t),
    !0) : !1
}
function Wx(i, t) {
    if (!(t instanceof cn))
        return !1;
    const {geometry: e} = t;
    t.finishPoly(),
    e.updateBatches();
    const {batches: r} = e;
    for (let s = 0; s < r.length; s++) {
        const {texture: n} = r[s].style;
        n && bf(i, n.baseTexture)
    }
    return e.batchable || i.geometry.bind(e, t._resolveDirectShader(i)),
    !0
}
function Xx(i, t) {
    return i instanceof cn ? (t.push(i),
    !0) : !1
}
class Tf extends wa {
    constructor(t) {
        super(t),
        this.uploadHookHelper = this.renderer,
        this.registerFindHook(Xx),
        this.registerUploadHook(bf),
        this.registerUploadHook(Wx)
    }
}
Tf.extension = {
    name: "prepare",
    type: et.RendererSystem
};
ot.add(Tf);
const wf = class Ys {
    constructor(t, e, r) {
        this.linkedSheets = [],
        (t instanceof Tt || t instanceof ut) && (t = {
            texture: t,
            data: e,
            resolutionFilename: r
        });
        const {texture: s, data: n, resolutionFilename: a=null, cachePrefix: o=""} = t;
        this.cachePrefix = o,
        this._texture = s instanceof ut ? s : null,
        this.baseTexture = s instanceof Tt ? s : this._texture.baseTexture,
        this.textures = {},
        this.animations = {},
        this.data = n;
        const l = this.baseTexture.resource;
        this.resolution = this._updateResolution(a || (l ? l.url : null)),
        this._frames = this.data.frames,
        this._frameKeys = Object.keys(this._frames),
        this._batchIndex = 0,
        this._callback = null
    }
    _updateResolution(t=null) {
        const {scale: e} = this.data.meta;
        let r = Fr(t, null);
        return r === null && (r = typeof e == "number" ? e : parseFloat(e ?? "1")),
        r !== 1 && this.baseTexture.setResolution(r),
        r
    }
    parse() {
        return new Promise(t => {
            this._callback = t,
            this._batchIndex = 0,
            this._frameKeys.length <= Ys.BATCH_SIZE ? (this._processFrames(0),
            this._processAnimations(),
            this._parseComplete()) : this._nextBatch()
        }
        )
    }
    _processFrames(t) {
        let e = t;
        const r = Ys.BATCH_SIZE;
        for (; e - t < r && e < this._frameKeys.length; ) {
            const s = this._frameKeys[e]
              , n = this._frames[s]
              , a = n.frame;
            if (a) {
                let o = null
                  , l = null;
                const c = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame
                  , p = new At(0,0,Math.floor(c.w) / this.resolution,Math.floor(c.h) / this.resolution);
                n.rotated ? o = new At(Math.floor(a.x) / this.resolution,Math.floor(a.y) / this.resolution,Math.floor(a.h) / this.resolution,Math.floor(a.w) / this.resolution) : o = new At(Math.floor(a.x) / this.resolution,Math.floor(a.y) / this.resolution,Math.floor(a.w) / this.resolution,Math.floor(a.h) / this.resolution),
                n.trimmed !== !1 && n.spriteSourceSize && (l = new At(Math.floor(n.spriteSourceSize.x) / this.resolution,Math.floor(n.spriteSourceSize.y) / this.resolution,Math.floor(a.w) / this.resolution,Math.floor(a.h) / this.resolution)),
                this.textures[s] = new ut(this.baseTexture,o,p,l,n.rotated ? 2 : 0,n.anchor,n.borders),
                ut.addToCache(this.textures[s], this.cachePrefix + s.toString())
            }
            e++
        }
    }
    _processAnimations() {
        const t = this.data.animations || {};
        for (const e in t) {
            this.animations[e] = [];
            for (let r = 0; r < t[e].length; r++) {
                const s = t[e][r];
                this.animations[e].push(this.textures[s])
            }
        }
    }
    _parseComplete() {
        const t = this._callback;
        this._callback = null,
        this._batchIndex = 0,
        t.call(this, this.textures)
    }
    _nextBatch() {
        this._processFrames(this._batchIndex * Ys.BATCH_SIZE),
        this._batchIndex++,
        setTimeout( () => {
            this._batchIndex * Ys.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(),
            this._parseComplete())
        }
        , 0)
    }
    destroy(t=!1) {
        var e;
        for (const r in this.textures)
            this.textures[r].destroy();
        this._frames = null,
        this._frameKeys = null,
        this.data = null,
        this.textures = null,
        t && ((e = this._texture) == null || e.destroy(),
        this.baseTexture.destroy()),
        this._texture = null,
        this.baseTexture = null,
        this.linkedSheets = []
    }
}
;
wf.BATCH_SIZE = 1e3;
let _c = wf;
const zx = ["jpg", "png", "jpeg", "avif", "webp", "s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"];
function Ef(i, t, e) {
    const r = {};
    if (i.forEach(s => {
        r[s] = t
    }
    ),
    Object.keys(t.textures).forEach(s => {
        r[`${t.cachePrefix}${s}`] = t.textures[s]
    }
    ),
    !e) {
        const s = ge.dirname(i[0]);
        t.linkedSheets.forEach( (n, a) => {
            Object.assign(r, Ef([`${s}/${t.data.meta.related_multi_packs[a]}`], n, !0))
        }
        )
    }
    return r
}
const Yx = {
    extension: et.Asset,
    cache: {
        test: i => i instanceof _c,
        getCacheableAssets: (i, t) => Ef(i, t, !1)
    },
    resolver: {
        test: i => {
            const t = i.split("?")[0].split(".")
              , e = t.pop()
              , r = t.pop();
            return e === "json" && zx.includes(r)
        }
        ,
        parse: i => {
            var e;
            const t = i.split(".");
            return {
                resolution: parseFloat(((e = nt.RETINA_PREFIX.exec(i)) == null ? void 0 : e[1]) ?? "1"),
                format: t[t.length - 2],
                src: i
            }
        }
    },
    loader: {
        name: "spritesheetLoader",
        extension: {
            type: et.LoadParser,
            priority: dr.Normal
        },
        async testParse(i, t) {
            return ge.extname(t.src).toLowerCase() === ".json" && !!i.frames
        },
        async parse(i, t, e) {
            var p, m;
            const {texture: r, imageFilename: s, cachePrefix: n} = (t == null ? void 0 : t.data) ?? {};
            let a = ge.dirname(t.src);
            a && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
            let o;
            if (r && r.baseTexture)
                o = r;
            else {
                const f = $h(a + (s ?? i.meta.image), t.src);
                o = (await e.load([f]))[f]
            }
            const l = new _c({
                texture: o.baseTexture,
                data: i,
                resolutionFilename: t.src,
                cachePrefix: n
            });
            await l.parse();
            const c = (p = i == null ? void 0 : i.meta) == null ? void 0 : p.related_multi_packs;
            if (Array.isArray(c)) {
                const f = [];
                for (const _ of c) {
                    if (typeof _ != "string")
                        continue;
                    let T = a + _;
                    (m = t.data) != null && m.ignoreMultiPack || (T = $h(T, t.src),
                    f.push(e.load({
                        src: T,
                        data: {
                            ignoreMultiPack: !0
                        }
                    })))
                }
                const v = await Promise.all(f);
                l.linkedSheets = v,
                v.forEach(_ => {
                    _.linkedSheets = [l].concat(l.linkedSheets.filter(T => T !== _))
                }
                )
            }
            return l
        },
        unload(i) {
            i.destroy(!0)
        }
    }
};
ot.add(Yx);
class Ea {
    constructor() {
        this.info = [],
        this.common = [],
        this.page = [],
        this.char = [],
        this.kerning = [],
        this.distanceField = []
    }
}
class sa {
    static test(t) {
        return typeof t == "string" && t.startsWith("info face=")
    }
    static parse(t) {
        const e = t.match(/^[a-z]+\s+.+$/gm)
          , r = {
            info: [],
            common: [],
            page: [],
            char: [],
            chars: [],
            kerning: [],
            kernings: [],
            distanceField: []
        };
        for (const n in e) {
            const a = e[n].match(/^[a-z]+/gm)[0]
              , o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm)
              , l = {};
            for (const c in o) {
                const p = o[c].split("=")
                  , m = p[0]
                  , f = p[1].replace(/"/gm, "")
                  , v = parseFloat(f)
                  , _ = isNaN(v) ? f : v;
                l[m] = _
            }
            r[a].push(l)
        }
        const s = new Ea;
        return r.info.forEach(n => s.info.push({
            face: n.face,
            size: parseInt(n.size, 10)
        })),
        r.common.forEach(n => s.common.push({
            lineHeight: parseInt(n.lineHeight, 10)
        })),
        r.page.forEach(n => s.page.push({
            id: parseInt(n.id, 10),
            file: n.file
        })),
        r.char.forEach(n => s.char.push({
            id: parseInt(n.id, 10),
            page: parseInt(n.page, 10),
            x: parseInt(n.x, 10),
            y: parseInt(n.y, 10),
            width: parseInt(n.width, 10),
            height: parseInt(n.height, 10),
            xoffset: parseInt(n.xoffset, 10),
            yoffset: parseInt(n.yoffset, 10),
            xadvance: parseInt(n.xadvance, 10)
        })),
        r.kerning.forEach(n => s.kerning.push({
            first: parseInt(n.first, 10),
            second: parseInt(n.second, 10),
            amount: parseInt(n.amount, 10)
        })),
        r.distanceField.forEach(n => s.distanceField.push({
            distanceRange: parseInt(n.distanceRange, 10),
            fieldType: n.fieldType
        })),
        s
    }
}
class zh {
    static test(t) {
        const e = t;
        return typeof t != "string" && "getElementsByTagName"in t && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null
    }
    static parse(t) {
        const e = new Ea
          , r = t.getElementsByTagName("info")
          , s = t.getElementsByTagName("common")
          , n = t.getElementsByTagName("page")
          , a = t.getElementsByTagName("char")
          , o = t.getElementsByTagName("kerning")
          , l = t.getElementsByTagName("distanceField");
        for (let c = 0; c < r.length; c++)
            e.info.push({
                face: r[c].getAttribute("face"),
                size: parseInt(r[c].getAttribute("size"), 10)
            });
        for (let c = 0; c < s.length; c++)
            e.common.push({
                lineHeight: parseInt(s[c].getAttribute("lineHeight"), 10)
            });
        for (let c = 0; c < n.length; c++)
            e.page.push({
                id: parseInt(n[c].getAttribute("id"), 10) || 0,
                file: n[c].getAttribute("file")
            });
        for (let c = 0; c < a.length; c++) {
            const p = a[c];
            e.char.push({
                id: parseInt(p.getAttribute("id"), 10),
                page: parseInt(p.getAttribute("page"), 10) || 0,
                x: parseInt(p.getAttribute("x"), 10),
                y: parseInt(p.getAttribute("y"), 10),
                width: parseInt(p.getAttribute("width"), 10),
                height: parseInt(p.getAttribute("height"), 10),
                xoffset: parseInt(p.getAttribute("xoffset"), 10),
                yoffset: parseInt(p.getAttribute("yoffset"), 10),
                xadvance: parseInt(p.getAttribute("xadvance"), 10)
            })
        }
        for (let c = 0; c < o.length; c++)
            e.kerning.push({
                first: parseInt(o[c].getAttribute("first"), 10),
                second: parseInt(o[c].getAttribute("second"), 10),
                amount: parseInt(o[c].getAttribute("amount"), 10)
            });
        for (let c = 0; c < l.length; c++)
            e.distanceField.push({
                fieldType: l[c].getAttribute("fieldType"),
                distanceRange: parseInt(l[c].getAttribute("distanceRange"), 10)
            });
        return e
    }
}
class Yh {
    static test(t) {
        return typeof t == "string" && t.includes("<font>") ? zh.test(nt.ADAPTER.parseXML(t)) : !1
    }
    static parse(t) {
        return zh.parse(nt.ADAPTER.parseXML(t))
    }
}
const Xo = [sa, zh, Yh];
function qx(i) {
    for (let t = 0; t < Xo.length; t++)
        if (Xo[t].test(i))
            return Xo[t];
    return null
}
function Kx(i, t, e, r, s, n) {
    const a = e.fill;
    if (Array.isArray(a)) {
        if (a.length === 1)
            return a[0]
    } else
        return a;
    let o;
    const l = e.dropShadow ? e.dropShadowDistance : 0
      , c = e.padding || 0
      , p = i.width / r - l - c * 2
      , m = i.height / r - l - c * 2
      , f = a.slice()
      , v = e.fillGradientStops.slice();
    if (!v.length) {
        const _ = f.length + 1;
        for (let T = 1; T < _; ++T)
            v.push(T / _)
    }
    if (f.unshift(a[0]),
    v.unshift(0),
    f.push(a[a.length - 1]),
    v.push(1),
    e.fillGradientType === La.LINEAR_VERTICAL) {
        o = t.createLinearGradient(p / 2, c, p / 2, m + c);
        let _ = 0;
        const T = (n.fontProperties.fontSize + e.strokeThickness) / m;
        for (let A = 0; A < s.length; A++) {
            const E = n.lineHeight * A;
            for (let I = 0; I < f.length; I++) {
                let S = 0;
                typeof v[I] == "number" ? S = v[I] : S = I / f.length;
                const P = E / m + S * T;
                let k = Math.max(_, P);
                k = Math.min(k, 1),
                o.addColorStop(k, f[I]),
                _ = k
            }
        }
    } else {
        o = t.createLinearGradient(c, m / 2, p + c, m / 2);
        const _ = f.length + 1;
        let T = 1;
        for (let A = 0; A < f.length; A++) {
            let E;
            typeof v[A] == "number" ? E = v[A] : E = T / _,
            o.addColorStop(E, f[A]),
            T++
        }
    }
    return o
}
function Zx(i, t, e, r, s, n, a) {
    const o = e.text
      , l = e.fontProperties;
    t.translate(r, s),
    t.scale(n, n);
    const c = a.strokeThickness / 2
      , p = -(a.strokeThickness / 2);
    if (t.font = a.toFontString(),
    t.lineWidth = a.strokeThickness,
    t.textBaseline = a.textBaseline,
    t.lineJoin = a.lineJoin,
    t.miterLimit = a.miterLimit,
    t.fillStyle = Kx(i, t, a, n, [o], e),
    t.strokeStyle = a.stroke,
    a.dropShadow) {
        const m = a.dropShadowColor
          , f = a.dropShadowBlur * n
          , v = a.dropShadowDistance * n;
        t.shadowColor = Pt.shared.setValue(m).setAlpha(a.dropShadowAlpha).toRgbaString(),
        t.shadowBlur = f,
        t.shadowOffsetX = Math.cos(a.dropShadowAngle) * v,
        t.shadowOffsetY = Math.sin(a.dropShadowAngle) * v
    } else
        t.shadowColor = "black",
        t.shadowBlur = 0,
        t.shadowOffsetX = 0,
        t.shadowOffsetY = 0;
    a.stroke && a.strokeThickness && t.strokeText(o, c, p + e.lineHeight - l.descent),
    a.fill && t.fillText(o, c, p + e.lineHeight - l.descent),
    t.setTransform(1, 0, 0, 1, 0, 0),
    t.fillStyle = "rgba(0, 0, 0, 0)"
}
function na(i) {
    return i.codePointAt ? i.codePointAt(0) : i.charCodeAt(0)
}
function Af(i) {
    return Array.from ? Array.from(i) : i.split("")
}
function Qx(i) {
    typeof i == "string" && (i = [i]);
    const t = [];
    for (let e = 0, r = i.length; e < r; e++) {
        const s = i[e];
        if (Array.isArray(s)) {
            if (s.length !== 2)
                throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`);
            const n = s[0].charCodeAt(0)
              , a = s[1].charCodeAt(0);
            if (a < n)
                throw new Error("[BitmapFont]: Invalid character range.");
            for (let o = n, l = a; o <= l; o++)
                t.push(String.fromCharCode(o))
        } else
            t.push(...Af(s))
    }
    if (t.length === 0)
        throw new Error("[BitmapFont]: Empty set when resolving characters.");
    return t
}
const ei = class Ar {
    constructor(t, e, r) {
        var p;
        const [s] = t.info
          , [n] = t.common
          , [a] = t.page
          , [o] = t.distanceField
          , l = Fr(a.file)
          , c = {};
        this._ownsTextures = r,
        this.font = s.face,
        this.size = s.size,
        this.lineHeight = n.lineHeight / l,
        this.chars = {},
        this.pageTextures = c;
        for (let m = 0; m < t.page.length; m++) {
            const {id: f, file: v} = t.page[m];
            c[f] = e instanceof Array ? e[m] : e[v],
            o != null && o.fieldType && o.fieldType !== "none" && (c[f].baseTexture.alphaMode = ke.NO_PREMULTIPLIED_ALPHA,
            c[f].baseTexture.mipmap = Br.OFF)
        }
        for (let m = 0; m < t.char.length; m++) {
            const {id: f, page: v} = t.char[m];
            let {x: _, y: T, width: A, height: E, xoffset: I, yoffset: S, xadvance: P} = t.char[m];
            _ /= l,
            T /= l,
            A /= l,
            E /= l,
            I /= l,
            S /= l,
            P /= l;
            const k = new At(_ + c[v].frame.x / l,T + c[v].frame.y / l,A,E);
            this.chars[f] = {
                xOffset: I,
                yOffset: S,
                xAdvance: P,
                kerning: {},
                texture: new ut(c[v].baseTexture,k),
                page: v
            }
        }
        for (let m = 0; m < t.kerning.length; m++) {
            let {first: f, second: v, amount: _} = t.kerning[m];
            f /= l,
            v /= l,
            _ /= l,
            this.chars[v] && (this.chars[v].kerning[f] = _)
        }
        this.distanceFieldRange = o == null ? void 0 : o.distanceRange,
        this.distanceFieldType = ((p = o == null ? void 0 : o.fieldType) == null ? void 0 : p.toLowerCase()) ?? "none"
    }
    destroy() {
        for (const t in this.chars)
            this.chars[t].texture.destroy(),
            this.chars[t].texture = null;
        for (const t in this.pageTextures)
            this._ownsTextures && this.pageTextures[t].destroy(!0),
            this.pageTextures[t] = null;
        this.chars = null,
        this.pageTextures = null
    }
    static install(t, e, r) {
        let s;
        if (t instanceof Ea)
            s = t;
        else {
            const a = qx(t);
            if (!a)
                throw new Error("Unrecognized data format for font.");
            s = a.parse(t)
        }
        e instanceof ut && (e = [e]);
        const n = new Ar(s,e,r);
        return Ar.available[n.font] = n,
        n
    }
    static uninstall(t) {
        const e = Ar.available[t];
        if (!e)
            throw new Error(`No font found named '${t}'`);
        e.destroy(),
        delete Ar.available[t]
    }
    static from(t, e, r) {
        if (!t)
            throw new Error("[BitmapFont] Property `name` is required.");
        const {chars: s, padding: n, resolution: a, textureWidth: o, textureHeight: l, ...c} = Object.assign({}, Ar.defaultOptions, r)
          , p = Qx(s)
          , m = e instanceof ui ? e : new ui(e)
          , f = o
          , v = new Ea;
        v.info[0] = {
            face: m.fontFamily,
            size: m.fontSize
        },
        v.common[0] = {
            lineHeight: m.fontSize
        };
        let _ = 0, T = 0, A, E, I, S = 0;
        const P = [];
        for (let $ = 0; $ < p.length; $++) {
            A || (A = nt.ADAPTER.createCanvas(),
            A.width = o,
            A.height = l,
            E = A.getContext("2d"),
            I = new Tt(A,{
                resolution: a,
                ...c
            }),
            P.push(new ut(I)),
            v.page.push({
                id: P.length - 1,
                file: ""
            }));
            const d = p[$]
              , O = si.measureText(d, m, !1, A)
              , N = O.width
              , z = Math.ceil(O.height)
              , J = Math.ceil((m.fontStyle === "italic" ? 2 : 1) * N);
            if (T >= l - z * a) {
                if (T === 0)
                    throw new Error(`[BitmapFont] textureHeight ${l}px is too small (fontFamily: '${m.fontFamily}', fontSize: ${m.fontSize}px, char: '${d}')`);
                --$,
                A = null,
                E = null,
                I = null,
                T = 0,
                _ = 0,
                S = 0;
                continue
            }
            if (S = Math.max(z + O.fontProperties.descent, S),
            J * a + _ >= f) {
                if (_ === 0)
                    throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${m.fontFamily}', fontSize: ${m.fontSize}px, char: '${d}')`);
                --$,
                T += S * a,
                T = Math.ceil(T),
                _ = 0,
                S = 0;
                continue
            }
            Zx(A, E, O, _, T, a, m);
            const V = na(O.text);
            v.char.push({
                id: V,
                page: P.length - 1,
                x: _ / a,
                y: T / a,
                width: J,
                height: z,
                xoffset: 0,
                yoffset: 0,
                xadvance: N - (m.dropShadow ? m.dropShadowDistance : 0) - (m.stroke ? m.strokeThickness : 0)
            }),
            _ += (J + 2 * n) * a,
            _ = Math.ceil(_)
        }
        if (!(r != null && r.skipKerning))
            for (let $ = 0, d = p.length; $ < d; $++) {
                const O = p[$];
                for (let N = 0; N < d; N++) {
                    const z = p[N]
                      , J = E.measureText(O).width
                      , V = E.measureText(z).width
                      , B = E.measureText(O + z).width - (J + V);
                    B && v.kerning.push({
                        first: na(O),
                        second: na(z),
                        amount: B
                    })
                }
            }
        const k = new Ar(v,P,!0);
        return Ar.available[t] !== void 0 && Ar.uninstall(t),
        Ar.available[t] = k,
        k
    }
}
;
ei.ALPHA = [["a", "z"], ["A", "Z"], " "],
ei.NUMERIC = [["0", "9"]],
ei.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "],
ei.ASCII = [[" ", "~"]],
ei.defaultOptions = {
    resolution: 1,
    textureWidth: 512,
    textureHeight: 512,
    padding: 4,
    chars: ei.ALPHANUMERIC
},
ei.available = {};
let ri = ei;
var Jx = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`
  , tb = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const xc = []
  , bc = []
  , Tc = []
  , eb = class Sf extends Ue {
    constructor(t, e={}) {
        super();
        const {align: r, tint: s, maxWidth: n, letterSpacing: a, fontName: o, fontSize: l} = Object.assign({}, Sf.styleDefaults, e);
        if (!ri.available[o])
            throw new Error(`Missing BitmapFont "${o}"`);
        this._activePagesMeshData = [],
        this._textWidth = 0,
        this._textHeight = 0,
        this._align = r,
        this._tintColor = new Pt(s),
        this._font = void 0,
        this._fontName = o,
        this._fontSize = l,
        this.text = t,
        this._maxWidth = n,
        this._maxLineHeight = 0,
        this._letterSpacing = a,
        this._anchor = new Xr( () => {
            this.dirty = !0
        }
        ,this,0,0),
        this._roundPixels = nt.ROUND_PIXELS,
        this.dirty = !0,
        this._resolution = nt.RESOLUTION,
        this._autoResolution = !0,
        this._textureCache = {}
    }
    updateText() {
        var J;
        const t = ri.available[this._fontName]
          , e = this.fontSize
          , r = e / t.size
          , s = new Bt
          , n = []
          , a = []
          , o = []
          , l = this._text.replace(/(?:\r\n|\r)/g, `
`) || " "
          , c = Af(l)
          , p = this._maxWidth * t.size / e
          , m = t.distanceFieldType === "none" ? xc : bc;
        let f = null
          , v = 0
          , _ = 0
          , T = 0
          , A = -1
          , E = 0
          , I = 0
          , S = 0
          , P = 0;
        for (let V = 0; V < c.length; V++) {
            const B = c[V]
              , j = na(B);
            if (/(?:\s)/.test(B) && (A = V,
            E = v,
            P++),
            B === "\r" || B === `
`) {
                a.push(v),
                o.push(-1),
                _ = Math.max(_, v),
                ++T,
                ++I,
                s.x = 0,
                s.y += t.lineHeight,
                f = null,
                P = 0;
                continue
            }
            const rt = t.chars[j];
            if (!rt)
                continue;
            f && rt.kerning[f] && (s.x += rt.kerning[f]);
            const at = Tc.pop() || {
                texture: ut.EMPTY,
                line: 0,
                charCode: 0,
                prevSpaces: 0,
                position: new Bt
            };
            at.texture = rt.texture,
            at.line = T,
            at.charCode = j,
            at.position.x = Math.round(s.x + rt.xOffset + this._letterSpacing / 2),
            at.position.y = Math.round(s.y + rt.yOffset),
            at.prevSpaces = P,
            n.push(at),
            v = at.position.x + Math.max(rt.xAdvance - rt.xOffset, rt.texture.orig.width),
            s.x += rt.xAdvance + this._letterSpacing,
            S = Math.max(S, rt.yOffset + rt.texture.height),
            f = j,
            A !== -1 && p > 0 && s.x > p && (++I,
            Pi(n, 1 + A - I, 1 + V - A),
            V = A,
            A = -1,
            a.push(E),
            o.push(n.length > 0 ? n[n.length - 1].prevSpaces : 0),
            _ = Math.max(_, E),
            T++,
            s.x = 0,
            s.y += t.lineHeight,
            f = null,
            P = 0)
        }
        const k = c[c.length - 1];
        k !== "\r" && k !== `
` && (/(?:\s)/.test(k) && (v = E),
        a.push(v),
        _ = Math.max(_, v),
        o.push(-1));
        const $ = [];
        for (let V = 0; V <= T; V++) {
            let B = 0;
            this._align === "right" ? B = _ - a[V] : this._align === "center" ? B = (_ - a[V]) / 2 : this._align === "justify" && (B = o[V] < 0 ? 0 : (_ - a[V]) / o[V]),
            $.push(B)
        }
        const d = n.length
          , O = {}
          , N = []
          , z = this._activePagesMeshData;
        m.push(...z);
        for (let V = 0; V < d; V++) {
            const B = n[V].texture
              , j = B.baseTexture.uid;
            if (!O[j]) {
                let rt = m.pop();
                if (!rt) {
                    const st = new Ga;
                    let dt, Ft;
                    t.distanceFieldType === "none" ? (dt = new ys(ut.EMPTY),
                    Ft = Y.NORMAL) : (dt = new ys(ut.EMPTY,{
                        program: zr.from(tb, Jx),
                        uniforms: {
                            uFWidth: 0
                        }
                    }),
                    Ft = Y.NORMAL_NPM);
                    const Q = new Be(st,dt);
                    Q.blendMode = Ft,
                    rt = {
                        index: 0,
                        indexCount: 0,
                        vertexCount: 0,
                        uvsCount: 0,
                        total: 0,
                        mesh: Q,
                        vertices: null,
                        uvs: null,
                        indices: null
                    }
                }
                rt.index = 0,
                rt.indexCount = 0,
                rt.vertexCount = 0,
                rt.uvsCount = 0,
                rt.total = 0;
                const {_textureCache: at} = this;
                at[j] = at[j] || new ut(B.baseTexture),
                rt.mesh.texture = at[j],
                rt.mesh.tint = this._tintColor.value,
                N.push(rt),
                O[j] = rt
            }
            O[j].total++
        }
        for (let V = 0; V < z.length; V++)
            N.includes(z[V]) || this.removeChild(z[V].mesh);
        for (let V = 0; V < N.length; V++)
            N[V].mesh.parent !== this && this.addChild(N[V].mesh);
        this._activePagesMeshData = N;
        for (const V in O) {
            const B = O[V]
              , j = B.total;
            if (!(((J = B.indices) == null ? void 0 : J.length) > 6 * j) || B.vertices.length < Be.BATCHABLE_SIZE * 2)
                B.vertices = new Float32Array(4 * 2 * j),
                B.uvs = new Float32Array(4 * 2 * j),
                B.indices = new Uint16Array(6 * j);
            else {
                const rt = B.total
                  , at = B.vertices;
                for (let st = rt * 4 * 2; st < at.length; st++)
                    at[st] = 0
            }
            B.mesh.size = 6 * j
        }
        for (let V = 0; V < d; V++) {
            const B = n[V];
            let j = B.position.x + $[B.line] * (this._align === "justify" ? B.prevSpaces : 1);
            this._roundPixels && (j = Math.round(j));
            const rt = j * r
              , at = B.position.y * r
              , st = B.texture
              , dt = O[st.baseTexture.uid]
              , Ft = st.frame
              , Q = st._uvs
              , K = dt.index++;
            dt.indices[K * 6 + 0] = 0 + K * 4,
            dt.indices[K * 6 + 1] = 1 + K * 4,
            dt.indices[K * 6 + 2] = 2 + K * 4,
            dt.indices[K * 6 + 3] = 0 + K * 4,
            dt.indices[K * 6 + 4] = 2 + K * 4,
            dt.indices[K * 6 + 5] = 3 + K * 4,
            dt.vertices[K * 8 + 0] = rt,
            dt.vertices[K * 8 + 1] = at,
            dt.vertices[K * 8 + 2] = rt + Ft.width * r,
            dt.vertices[K * 8 + 3] = at,
            dt.vertices[K * 8 + 4] = rt + Ft.width * r,
            dt.vertices[K * 8 + 5] = at + Ft.height * r,
            dt.vertices[K * 8 + 6] = rt,
            dt.vertices[K * 8 + 7] = at + Ft.height * r,
            dt.uvs[K * 8 + 0] = Q.x0,
            dt.uvs[K * 8 + 1] = Q.y0,
            dt.uvs[K * 8 + 2] = Q.x1,
            dt.uvs[K * 8 + 3] = Q.y1,
            dt.uvs[K * 8 + 4] = Q.x2,
            dt.uvs[K * 8 + 5] = Q.y2,
            dt.uvs[K * 8 + 6] = Q.x3,
            dt.uvs[K * 8 + 7] = Q.y3
        }
        this._textWidth = _ * r,
        this._textHeight = (s.y + t.lineHeight) * r;
        for (const V in O) {
            const B = O[V];
            if (this.anchor.x !== 0 || this.anchor.y !== 0) {
                let st = 0;
                const dt = this._textWidth * this.anchor.x
                  , Ft = this._textHeight * this.anchor.y;
                for (let Q = 0; Q < B.total; Q++)
                    B.vertices[st++] -= dt,
                    B.vertices[st++] -= Ft,
                    B.vertices[st++] -= dt,
                    B.vertices[st++] -= Ft,
                    B.vertices[st++] -= dt,
                    B.vertices[st++] -= Ft,
                    B.vertices[st++] -= dt,
                    B.vertices[st++] -= Ft
            }
            this._maxLineHeight = S * r;
            const j = B.mesh.geometry.getBuffer("aVertexPosition")
              , rt = B.mesh.geometry.getBuffer("aTextureCoord")
              , at = B.mesh.geometry.getIndex();
            j.data = B.vertices,
            rt.data = B.uvs,
            at.data = B.indices,
            j.update(),
            rt.update(),
            at.update()
        }
        for (let V = 0; V < n.length; V++)
            Tc.push(n[V]);
        this._font = t,
        this.dirty = !1
    }
    updateTransform() {
        this.validate(),
        this.containerUpdateTransform()
    }
    _render(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution,
        this.dirty = !0);
        const {distanceFieldRange: e, distanceFieldType: r, size: s} = ri.available[this._fontName];
        if (r !== "none") {
            const {a: n, b: a, c: o, d: l} = this.worldTransform
              , c = Math.sqrt(n * n + a * a)
              , p = Math.sqrt(o * o + l * l)
              , m = (Math.abs(c) + Math.abs(p)) / 2
              , f = this.fontSize / s
              , v = t._view.resolution;
            for (const _ of this._activePagesMeshData)
                _.mesh.shader.uniforms.uFWidth = m * e * f * v
        }
        super._render(t)
    }
    getLocalBounds() {
        return this.validate(),
        super.getLocalBounds()
    }
    validate() {
        const t = ri.available[this._fontName];
        if (!t)
            throw new Error(`Missing BitmapFont "${this._fontName}"`);
        this._font !== t && (this.dirty = !0),
        this.dirty && this.updateText()
    }
    get tint() {
        return this._tintColor.value
    }
    set tint(t) {
        if (this.tint !== t) {
            this._tintColor.setValue(t);
            for (let e = 0; e < this._activePagesMeshData.length; e++)
                this._activePagesMeshData[e].mesh.tint = t
        }
    }
    get align() {
        return this._align
    }
    set align(t) {
        this._align !== t && (this._align = t,
        this.dirty = !0)
    }
    get fontName() {
        return this._fontName
    }
    set fontName(t) {
        if (!ri.available[t])
            throw new Error(`Missing BitmapFont "${t}"`);
        this._fontName !== t && (this._fontName = t,
        this.dirty = !0)
    }
    get fontSize() {
        return this._fontSize ?? ri.available[this._fontName].size
    }
    set fontSize(t) {
        this._fontSize !== t && (this._fontSize = t,
        this.dirty = !0)
    }
    get anchor() {
        return this._anchor
    }
    set anchor(t) {
        typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t)
    }
    get text() {
        return this._text
    }
    set text(t) {
        t = String(t ?? ""),
        this._text !== t && (this._text = t,
        this.dirty = !0)
    }
    get maxWidth() {
        return this._maxWidth
    }
    set maxWidth(t) {
        this._maxWidth !== t && (this._maxWidth = t,
        this.dirty = !0)
    }
    get maxLineHeight() {
        return this.validate(),
        this._maxLineHeight
    }
    get textWidth() {
        return this.validate(),
        this._textWidth
    }
    get letterSpacing() {
        return this._letterSpacing
    }
    set letterSpacing(t) {
        this._letterSpacing !== t && (this._letterSpacing = t,
        this.dirty = !0)
    }
    get roundPixels() {
        return this._roundPixels
    }
    set roundPixels(t) {
        t !== this._roundPixels && (this._roundPixels = t,
        this.dirty = !0)
    }
    get textHeight() {
        return this.validate(),
        this._textHeight
    }
    get resolution() {
        return this._resolution
    }
    set resolution(t) {
        this._autoResolution = !1,
        this._resolution !== t && (this._resolution = t,
        this.dirty = !0)
    }
    destroy(t) {
        const {_textureCache: e} = this
          , r = ri.available[this._fontName].distanceFieldType === "none" ? xc : bc;
        r.push(...this._activePagesMeshData);
        for (const s of this._activePagesMeshData)
            this.removeChild(s.mesh);
        this._activePagesMeshData = [],
        r.filter(s => e[s.mesh.texture.baseTexture.uid]).forEach(s => {
            s.mesh.texture = ut.EMPTY
        }
        );
        for (const s in e)
            e[s].destroy(),
            delete e[s];
        this._font = null,
        this._tintColor = null,
        this._textureCache = null,
        super.destroy(t)
    }
}
;
eb.styleDefaults = {
    align: "left",
    tint: 16777215,
    maxWidth: 0,
    letterSpacing: 0
};
const rb = [".xml", ".fnt"]
  , ib = {
    extension: {
        type: et.LoadParser,
        priority: dr.Normal
    },
    name: "loadBitmapFont",
    test(i) {
        return rb.includes(ge.extname(i).toLowerCase())
    },
    async testParse(i) {
        return sa.test(i) || Yh.test(i)
    },
    async parse(i, t, e) {
        const r = sa.test(i) ? sa.parse(i) : Yh.parse(i)
          , {src: s} = t
          , {page: n} = r
          , a = [];
        for (let c = 0; c < n.length; ++c) {
            const p = n[c].file;
            let m = ge.join(ge.dirname(s), p);
            m = $h(m, s),
            a.push(m)
        }
        const o = await e.load(a)
          , l = a.map(c => o[c]);
        return ri.install(r, l, !0)
    },
    async load(i, t) {
        return (await nt.ADAPTER.fetch(i)).text()
    },
    unload(i) {
        i.destroy()
    }
};
ot.add(ib);
const qh = class es extends ui {
    constructor() {
        super(...arguments),
        this._fonts = [],
        this._overrides = [],
        this._stylesheet = "",
        this.fontsDirty = !1
    }
    static from(t) {
        return new es(Object.keys(es.defaultOptions).reduce( (e, r) => ({
            ...e,
            [r]: t[r]
        }), {}))
    }
    cleanFonts() {
        this._fonts.length > 0 && (this._fonts.forEach(t => {
            URL.revokeObjectURL(t.src),
            t.refs--,
            t.refs === 0 && (t.fontFace && document.fonts.delete(t.fontFace),
            delete es.availableFonts[t.originalUrl])
        }
        ),
        this.fontFamily = "Arial",
        this._fonts.length = 0,
        this.styleID++,
        this.fontsDirty = !0)
    }
    loadFont(t, e={}) {
        const {availableFonts: r} = es;
        if (r[t]) {
            const s = r[t];
            return this._fonts.push(s),
            s.refs++,
            this.styleID++,
            this.fontsDirty = !0,
            Promise.resolve()
        }
        return nt.ADAPTER.fetch(t).then(s => s.blob()).then(async s => new Promise( (n, a) => {
            const o = URL.createObjectURL(s)
              , l = new FileReader;
            l.onload = () => n([o, l.result]),
            l.onerror = a,
            l.readAsDataURL(s)
        }
        )).then(async ([s,n]) => {
            const a = Object.assign({
                family: ge.basename(t, ge.extname(t)),
                weight: "normal",
                style: "normal",
                display: "auto",
                src: s,
                dataSrc: n,
                refs: 1,
                originalUrl: t,
                fontFace: null
            }, e);
            r[t] = a,
            this._fonts.push(a),
            this.styleID++;
            const o = new FontFace(a.family,`url(${a.src})`,{
                weight: a.weight,
                style: a.style,
                display: a.display
            });
            a.fontFace = o,
            await o.load(),
            document.fonts.add(o),
            await document.fonts.ready,
            this.styleID++,
            this.fontsDirty = !0
        }
        )
    }
    addOverride(...t) {
        const e = t.filter(r => !this._overrides.includes(r));
        e.length > 0 && (this._overrides.push(...e),
        this.styleID++)
    }
    removeOverride(...t) {
        const e = t.filter(r => this._overrides.includes(r));
        e.length > 0 && (this._overrides = this._overrides.filter(r => !e.includes(r)),
        this.styleID++)
    }
    toCSS(t) {
        return [`transform: scale(${t})`, "transform-origin: top left", "display: inline-block", `color: ${this.normalizeColor(this.fill)}`, `font-size: ${this.fontSize}px`, `font-family: ${this.fontFamily}`, `font-weight: ${this.fontWeight}`, `font-style: ${this.fontStyle}`, `font-variant: ${this.fontVariant}`, `letter-spacing: ${this.letterSpacing}px`, `text-align: ${this.align}`, `padding: ${this.padding}px`, `white-space: ${this.whiteSpace}`, ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [], ...this.wordWrap ? [`word-wrap: ${this.breakWords ? "break-all" : "break-word"}`, `max-width: ${this.wordWrapWidth}px`] : [], ...this.strokeThickness ? [`-webkit-text-stroke-width: ${this.strokeThickness}px`, `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`, `text-stroke-width: ${this.strokeThickness}px`, `text-stroke-color: ${this.normalizeColor(this.stroke)}`, "paint-order: stroke"] : [], ...this.dropShadow ? [this.dropShadowToCSS()] : [], ...this._overrides].join(";")
    }
    toGlobalCSS() {
        return this._fonts.reduce( (t, e) => `${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style};
                font-display: ${e.display};
            }`, this._stylesheet)
    }
    get stylesheet() {
        return this._stylesheet
    }
    set stylesheet(t) {
        this._stylesheet !== t && (this._stylesheet = t,
        this.styleID++)
    }
    normalizeColor(t) {
        return Array.isArray(t) && (t = sd(t)),
        typeof t == "number" ? id(t) : t
    }
    dropShadowToCSS() {
        let t = this.normalizeColor(this.dropShadowColor);
        const e = this.dropShadowAlpha
          , r = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance)
          , s = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
        t.startsWith("#") && e < 1 && (t += (e * 255 | 0).toString(16).padStart(2, "0"));
        const n = `${r}px ${s}px`;
        return this.dropShadowBlur > 0 ? `text-shadow: ${n} ${this.dropShadowBlur}px ${t}` : `text-shadow: ${n} ${t}`
    }
    reset() {
        Object.assign(this, es.defaultOptions)
    }
    onBeforeDraw() {
        const {fontsDirty: t} = this;
        return this.fontsDirty = !1,
        this.isSafari && this._fonts.length > 0 && t ? new Promise(e => setTimeout(e, 100)) : Promise.resolve()
    }
    get isSafari() {
        const {userAgent: t} = nt.ADAPTER.getNavigator();
        return /^((?!chrome|android).)*safari/i.test(t)
    }
    set fillGradientStops(t) {
        console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText")
    }
    get fillGradientStops() {
        return super.fillGradientStops
    }
    set fillGradientType(t) {
        console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText")
    }
    get fillGradientType() {
        return super.fillGradientType
    }
    set miterLimit(t) {
        console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText")
    }
    get miterLimit() {
        return super.miterLimit
    }
    set trim(t) {
        console.warn("[HTMLTextStyle] trim is not supported by HTMLText")
    }
    get trim() {
        return super.trim
    }
    set textBaseline(t) {
        console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText")
    }
    get textBaseline() {
        return super.textBaseline
    }
    set leading(t) {
        console.warn("[HTMLTextStyle] leading is not supported by HTMLText")
    }
    get leading() {
        return super.leading
    }
    set lineJoin(t) {
        console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText")
    }
    get lineJoin() {
        return super.lineJoin
    }
}
;
qh.availableFonts = {},
qh.defaultOptions = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fontFamily: "Arial",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    whiteSpace: "normal",
    wordWrap: !1,
    wordWrapWidth: 100
};
let zo = qh;
const Yn = class rs extends Lr {
    constructor(t="", e={}) {
        super(ut.EMPTY),
        this._text = null,
        this._style = null,
        this._autoResolution = !0,
        this.localStyleID = -1,
        this.dirty = !1,
        this._updateID = 0,
        this.ownsStyle = !1;
        const r = new Image
          , s = ut.from(r, {
            scaleMode: nt.SCALE_MODE,
            resourceOptions: {
                autoLoad: !1
            }
        });
        s.orig = new At,
        s.trim = new At,
        this.texture = s;
        const n = "http://www.w3.org/2000/svg"
          , a = "http://www.w3.org/1999/xhtml"
          , o = document.createElementNS(n, "svg")
          , l = document.createElementNS(n, "foreignObject")
          , c = document.createElementNS(a, "div")
          , p = document.createElementNS(a, "style");
        l.setAttribute("width", "10000"),
        l.setAttribute("height", "10000"),
        l.style.overflow = "hidden",
        o.appendChild(l),
        this.maxWidth = rs.defaultMaxWidth,
        this.maxHeight = rs.defaultMaxHeight,
        this._domElement = c,
        this._styleElement = p,
        this._svgRoot = o,
        this._foreignObject = l,
        this._foreignObject.appendChild(p),
        this._foreignObject.appendChild(c),
        this._image = r,
        this._loadImage = new Image,
        this._autoResolution = rs.defaultAutoResolution,
        this._resolution = rs.defaultResolution ?? nt.RESOLUTION,
        this.text = t,
        this.style = e
    }
    measureText(t) {
        var p, m;
        const {text: e, style: r, resolution: s} = Object.assign({
            text: this._text,
            style: this._style,
            resolution: this._resolution
        }, t);
        Object.assign(this._domElement, {
            innerHTML: e,
            style: r.toCSS(s)
        }),
        this._styleElement.textContent = r.toGlobalCSS(),
        document.body.appendChild(this._svgRoot);
        const n = this._domElement.getBoundingClientRect();
        this._svgRoot.remove();
        const {width: a, height: o} = n;
        (a > this.maxWidth || o > this.maxHeight) && console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");
        const l = Math.min(this.maxWidth, Math.ceil(a))
          , c = Math.min(this.maxHeight, Math.ceil(o));
        return this._svgRoot.setAttribute("width", l.toString()),
        this._svgRoot.setAttribute("height", c.toString()),
        e !== this._text && (this._domElement.innerHTML = this._text),
        r !== this._style && (Object.assign(this._domElement, {
            style: (p = this._style) == null ? void 0 : p.toCSS(s)
        }),
        this._styleElement.textContent = (m = this._style) == null ? void 0 : m.toGlobalCSS()),
        {
            width: l + r.padding * 2,
            height: c + r.padding * 2
        }
    }
    async updateText(t=!0) {
        const {style: e, _image: r, _loadImage: s} = this;
        if (this.localStyleID !== e.styleID && (this.dirty = !0,
        this.localStyleID = e.styleID),
        !this.dirty && t)
            return;
        const {width: n, height: a} = this.measureText();
        r.width = s.width = Math.ceil(Math.max(1, n)),
        r.height = s.height = Math.ceil(Math.max(1, a)),
        this._updateID++;
        const o = this._updateID;
        await new Promise(l => {
            s.onload = async () => {
                if (o < this._updateID) {
                    l();
                    return
                }
                await e.onBeforeDraw(),
                r.src = s.src,
                s.onload = null,
                s.src = "",
                this.updateTexture(),
                l()
            }
            ;
            const c = new XMLSerializer().serializeToString(this._svgRoot);
            s.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(c)}`
        }
        )
    }
    get source() {
        return this._image
    }
    updateTexture() {
        const {style: t, texture: e, _image: r, resolution: s} = this
          , {padding: n} = t
          , {baseTexture: a} = e;
        e.trim.width = e._frame.width = r.width / s,
        e.trim.height = e._frame.height = r.height / s,
        e.trim.x = -n,
        e.trim.y = -n,
        e.orig.width = e._frame.width - n * 2,
        e.orig.height = e._frame.height - n * 2,
        this._onTextureUpdate(),
        a.setRealSize(r.width, r.height, s),
        this.dirty = !1
    }
    _render(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution,
        this.dirty = !0),
        this.updateText(!0),
        super._render(t)
    }
    _renderCanvas(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution,
        this.dirty = !0),
        this.updateText(!0),
        super._renderCanvas(t)
    }
    getLocalBounds(t) {
        return this.updateText(!0),
        super.getLocalBounds(t)
    }
    _calculateBounds() {
        this.updateText(!0),
        this.calculateVertices(),
        this._bounds.addQuad(this.vertexData)
    }
    _onStyleChange() {
        this.dirty = !0
    }
    destroy(t) {
        var r, s, n, a, o;
        typeof t == "boolean" && (t = {
            children: t
        }),
        t = Object.assign({}, rs.defaultDestroyOptions, t),
        super.destroy(t);
        const e = null;
        this.ownsStyle && ((r = this._style) == null || r.cleanFonts()),
        this._style = e,
        (s = this._svgRoot) == null || s.remove(),
        this._svgRoot = e,
        (n = this._domElement) == null || n.remove(),
        this._domElement = e,
        (a = this._foreignObject) == null || a.remove(),
        this._foreignObject = e,
        (o = this._styleElement) == null || o.remove(),
        this._styleElement = e,
        this._loadImage.src = "",
        this._loadImage.onload = null,
        this._loadImage = e,
        this._image.src = "",
        this._image = e
    }
    get width() {
        return this.updateText(!0),
        Math.abs(this.scale.x) * this._image.width / this.resolution
    }
    set width(t) {
        this.updateText(!0);
        const e = Wr(this.scale.x) || 1;
        this.scale.x = e * t / this._image.width / this.resolution,
        this._width = t
    }
    get height() {
        return this.updateText(!0),
        Math.abs(this.scale.y) * this._image.height / this.resolution
    }
    set height(t) {
        this.updateText(!0);
        const e = Wr(this.scale.y) || 1;
        this.scale.y = e * t / this._image.height / this.resolution,
        this._height = t
    }
    get style() {
        return this._style
    }
    set style(t) {
        this._style !== t && (t = t || {},
        t instanceof zo ? (this.ownsStyle = !1,
        this._style = t) : t instanceof ui ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"),
        this.ownsStyle = !0,
        this._style = zo.from(t)) : (this.ownsStyle = !0,
        this._style = new zo(t)),
        this.localStyleID = -1,
        this.dirty = !0)
    }
    get text() {
        return this._text
    }
    set text(t) {
        t = String(t === "" || t === null || t === void 0 ? " " : t),
        t = this.sanitiseText(t),
        this._text !== t && (this._text = t,
        this.dirty = !0)
    }
    get resolution() {
        return this._resolution
    }
    set resolution(t) {
        this._autoResolution = !1,
        this._resolution !== t && (this._resolution = t,
        this.dirty = !0)
    }
    sanitiseText(t) {
        return t.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;")
    }
}
;
Yn.defaultDestroyOptions = {
    texture: !0,
    children: !1,
    baseTexture: !0
},
Yn.defaultMaxWidth = 2024,
Yn.defaultMaxHeight = 2024,
Yn.defaultAutoResolution = !0;
const ti = new At;
class Cf {
    constructor(t) {
        this.renderer = t
    }
    async image(t, e, r, s) {
        const n = new Image;
        return n.src = await this.base64(t, e, r, s),
        n
    }
    async base64(t, e, r, s) {
        const n = this.canvas(t, s);
        if (n.toBlob !== void 0)
            return new Promise( (a, o) => {
                n.toBlob(l => {
                    if (!l) {
                        o(new Error("ICanvas.toBlob failed!"));
                        return
                    }
                    const c = new FileReader;
                    c.onload = () => a(c.result),
                    c.onerror = o,
                    c.readAsDataURL(l)
                }
                , e, r)
            }
            );
        if (n.toDataURL !== void 0)
            return n.toDataURL(e, r);
        if (n.convertToBlob !== void 0) {
            const a = await n.convertToBlob({
                type: e,
                quality: r
            });
            return new Promise( (o, l) => {
                const c = new FileReader;
                c.onload = () => o(c.result),
                c.onerror = l,
                c.readAsDataURL(a)
            }
            )
        }
        throw new Error("CanvasExtract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")
    }
    canvas(t, e) {
        const r = this.renderer;
        if (!r)
            throw new Error("The CanvasExtract has already been destroyed");
        let s, n, a;
        t && (t instanceof Or ? a = t : (a = r.generateTexture(t, {
            region: e,
            resolution: r.resolution
        }),
        e && (ti.width = e.width,
        ti.height = e.height,
        e = ti))),
        a ? (s = a.baseTexture._canvasRenderTarget.context,
        n = a.baseTexture._canvasRenderTarget.resolution,
        e = e ?? a.frame) : (s = r.canvasContext.rootContext,
        n = r._view.resolution,
        e || (e = ti,
        e.width = r.width / n,
        e.height = r.height / n));
        const o = Math.round(e.x * n)
          , l = Math.round(e.y * n)
          , c = Math.max(Math.round(e.width * n), 1)
          , p = Math.max(Math.round(e.height * n), 1)
          , m = new hn(c,p,1)
          , f = s.getImageData(o, l, c, p);
        return m.context.putImageData(f, 0, 0),
        m.canvas
    }
    pixels(t, e) {
        const r = this.renderer;
        if (!r)
            throw new Error("The CanvasExtract has already been destroyed");
        let s, n, a;
        t && (t instanceof Or ? a = t : (a = r.generateTexture(t, {
            region: e,
            resolution: r.resolution
        }),
        e && (ti.width = e.width,
        ti.height = e.height,
        e = ti))),
        a ? (s = a.baseTexture._canvasRenderTarget.context,
        n = a.baseTexture._canvasRenderTarget.resolution,
        e = e ?? a.frame) : (s = r.canvasContext.rootContext,
        n = r.resolution,
        e || (e = ti,
        e.width = r.width / n,
        e.height = r.height / n));
        const o = Math.round(e.x * n)
          , l = Math.round(e.y * n)
          , c = Math.max(Math.round(e.width * n), 1)
          , p = Math.max(Math.round(e.height * n), 1);
        return s.getImageData(o, l, c, p).data
    }
    destroy() {
        this.renderer = null
    }
}
Cf.extension = {
    name: "extract",
    type: et.CanvasRendererSystem
};
ot.add(Cf);
let Yo;
const Hs = new Wt;
cn.prototype.generateCanvasTexture = function(i, t=1) {
    const e = this.getLocalBounds(new At);
    e.width = Math.max(e.width, 1 / t),
    e.height = Math.max(e.height, 1 / t);
    const r = Or.create({
        width: e.width,
        height: e.height,
        scaleMode: i,
        resolution: t
    });
    Yo || (Yo = new Na),
    this.transform.updateLocalTransform(),
    this.transform.localTransform.copyTo(Hs),
    Hs.invert(),
    Hs.tx -= e.x,
    Hs.ty -= e.y,
    Yo.render(this, {
        renderTexture: r,
        clear: !0,
        transform: Hs
    });
    const s = ut.from(r.baseTexture._canvasRenderTarget.canvas, {
        scaleMode: i
    });
    return s.baseTexture.setResolution(t),
    s
}
;
cn.prototype.cachedGraphicsData = [];
cn.prototype._renderCanvas = function(i) {
    this.isMask !== !0 && (this.finishPoly(),
    i.plugins.graphics.render(this))
}
;
class nn {
    static offsetPolygon(t, e) {
        const r = []
          , s = t.length;
        e = nn.isPolygonClockwise(t) ? e : -1 * e;
        for (let n = 0; n < s; n += 2) {
            let a = n - 2;
            a < 0 && (a += s);
            const o = (n + 2) % s;
            let l = t[n] - t[a]
              , c = t[n + 1] - t[a + 1]
              , p = Math.sqrt(l * l + c * c);
            l /= p,
            c /= p,
            l *= e,
            c *= e;
            const m = -c
              , f = l
              , v = [t[a] + m, t[a + 1] + f]
              , _ = [t[n] + m, t[n + 1] + f];
            let T = t[o] - t[n]
              , A = t[o + 1] - t[n + 1];
            p = Math.sqrt(T * T + A * A),
            T /= p,
            A /= p,
            T *= e,
            A *= e;
            const E = -A
              , I = T
              , S = [t[n] + E, t[n + 1] + I]
              , P = [t[o] + E, t[o + 1] + I]
              , k = nn.findIntersection(v[0], v[1], _[0], _[1], S[0], S[1], P[0], P[1]);
            k && r.push(...k)
        }
        return r
    }
    static findIntersection(t, e, r, s, n, a, o, l) {
        const c = (l - a) * (r - t) - (o - n) * (s - e)
          , p = (o - n) * (e - a) - (l - a) * (t - n)
          , m = (r - t) * (e - a) - (s - e) * (t - n);
        if (c === 0)
            return p === 0 && m === 0 ? [(t + r) / 2, (e + s) / 2] : null;
        const f = p / c;
        return [t + f * (r - t), e + f * (s - e)]
    }
    static isPolygonClockwise(t) {
        let e = 0;
        for (let r = 0, s = t.length - 2; r < t.length; s = r,
        r += 2)
            e += (t[r] - t[s]) * (t[r + 1] + t[s + 1]);
        return e > 0
    }
}
class If {
    constructor(t) {
        this._svgMatrix = null,
        this._tempMatrix = new Wt,
        this.renderer = t
    }
    _calcCanvasStyle(t, e) {
        let r;
        return t.texture && t.texture.baseTexture !== ut.WHITE.baseTexture ? t.texture.valid ? (r = _e.getTintedPattern(t.texture, e),
        this.setPatternTransform(r, t.matrix || Wt.IDENTITY)) : r = "#808080" : r = `#${`00000${(e | 0).toString(16)}`.slice(-6)}`,
        r
    }
    render(t) {
        const e = this.renderer
          , r = e.canvasContext.activeContext
          , s = t.worldAlpha
          , n = t.transform.worldTransform;
        e.canvasContext.setContextTransform(n),
        e.canvasContext.setBlendMode(t.blendMode);
        const a = t.geometry.graphicsData;
        let o, l;
        const c = Pt.shared.setValue(t.tint).toArray();
        for (let p = 0; p < a.length; p++) {
            const m = a[p]
              , f = m.shape
              , v = m.fillStyle
              , _ = m.lineStyle
              , T = m.fillStyle.color | 0
              , A = m.lineStyle.color | 0;
            if (m.matrix && e.canvasContext.setContextTransform(n.copyTo(this._tempMatrix).append(m.matrix)),
            v.visible && (o = this._calcCanvasStyle(v, Pt.shared.setValue(T).multiply(c).toNumber())),
            _.visible && (l = this._calcCanvasStyle(_, Pt.shared.setValue(A).multiply(c).toNumber())),
            r.lineWidth = _.width,
            r.lineCap = _.cap,
            r.lineJoin = _.join,
            r.miterLimit = _.miterLimit,
            m.type === Zt.POLY) {
                r.beginPath();
                const E = f;
                let I = E.points;
                const S = m.holes;
                let P, k, $, d, O;
                r.moveTo(I[0], I[1]);
                for (let N = 2; N < I.length; N += 2)
                    r.lineTo(I[N], I[N + 1]);
                if (E.closeStroke && r.closePath(),
                S.length > 0) {
                    O = [],
                    P = 0,
                    $ = I[0],
                    d = I[1];
                    for (let N = 2; N + 2 < I.length; N += 2)
                        P += (I[N] - $) * (I[N + 3] - d) - (I[N + 2] - $) * (I[N + 1] - d);
                    for (let N = 0; N < S.length; N++)
                        if (I = S[N].shape.points,
                        !!I) {
                            k = 0,
                            $ = I[0],
                            d = I[1];
                            for (let z = 2; z + 2 < I.length; z += 2)
                                k += (I[z] - $) * (I[z + 3] - d) - (I[z + 2] - $) * (I[z + 1] - d);
                            if (k * P < 0) {
                                r.moveTo(I[0], I[1]);
                                for (let z = 2; z < I.length; z += 2)
                                    r.lineTo(I[z], I[z + 1])
                            } else {
                                r.moveTo(I[I.length - 2], I[I.length - 1]);
                                for (let z = I.length - 4; z >= 0; z -= 2)
                                    r.lineTo(I[z], I[z + 1])
                            }
                            S[N].shape.closeStroke && r.closePath(),
                            O[N] = k * P < 0
                        }
                }
                v.visible && (r.globalAlpha = v.alpha * s,
                r.fillStyle = o,
                r.fill()),
                _.visible && this.paintPolygonStroke(E, _, l, S, O, s, r)
            } else if (m.type === Zt.RECT) {
                const E = f;
                if (v.visible && (r.globalAlpha = v.alpha * s,
                r.fillStyle = o,
                r.fillRect(E.x, E.y, E.width, E.height)),
                _.visible) {
                    const I = _.width * (.5 - (1 - _.alignment))
                      , S = E.width + 2 * I
                      , P = E.height + 2 * I;
                    r.globalAlpha = _.alpha * s,
                    r.strokeStyle = l,
                    r.strokeRect(E.x - I, E.y - I, S, P)
                }
            } else if (m.type === Zt.CIRC) {
                const E = f;
                if (r.beginPath(),
                r.arc(E.x, E.y, E.radius, 0, 2 * Math.PI),
                r.closePath(),
                v.visible && (r.globalAlpha = v.alpha * s,
                r.fillStyle = o,
                r.fill()),
                _.visible) {
                    if (_.alignment !== .5) {
                        const I = _.width * (.5 - (1 - _.alignment));
                        r.beginPath(),
                        r.arc(E.x, E.y, E.radius + I, 0, 2 * Math.PI),
                        r.closePath()
                    }
                    r.globalAlpha = _.alpha * s,
                    r.strokeStyle = l,
                    r.stroke()
                }
            } else if (m.type === Zt.ELIP) {
                const E = f
                  , I = _.alignment === 1;
                if (I || this.paintEllipse(E, v, _, o, s, r),
                _.visible) {
                    if (_.alignment !== .5) {
                        const S = .5522848
                          , P = _.width * (.5 - (1 - _.alignment))
                          , k = (E.width + P) * 2
                          , $ = (E.height + P) * 2
                          , d = E.x - k / 2
                          , O = E.y - $ / 2
                          , N = k / 2 * S
                          , z = $ / 2 * S
                          , J = d + k
                          , V = O + $
                          , B = d + k / 2
                          , j = O + $ / 2;
                        r.beginPath(),
                        r.moveTo(d, j),
                        r.bezierCurveTo(d, j - z, B - N, O, B, O),
                        r.bezierCurveTo(B + N, O, J, j - z, J, j),
                        r.bezierCurveTo(J, j + z, B + N, V, B, V),
                        r.bezierCurveTo(B - N, V, d, j + z, d, j),
                        r.closePath()
                    }
                    r.globalAlpha = _.alpha * s,
                    r.strokeStyle = l,
                    r.stroke()
                }
                I && this.paintEllipse(E, v, _, o, s, r)
            } else if (m.type === Zt.RREC) {
                const E = f
                  , I = _.alignment === 1;
                if (I || this.paintRoundedRectangle(E, v, _, o, s, r),
                _.visible) {
                    if (_.alignment !== .5) {
                        const S = E.width
                          , P = E.height
                          , k = _.width * (.5 - (1 - _.alignment))
                          , $ = E.x - k
                          , d = E.y - k
                          , O = E.width + 2 * k
                          , N = E.height + 2 * k
                          , z = k * (_.alignment >= 1 ? Math.min(O / S, N / P) : Math.min(S / O, P / N));
                        let J = E.radius + z;
                        const V = Math.min(O, N) / 2;
                        J = J > V ? V : J,
                        r.beginPath(),
                        r.moveTo($, d + J),
                        r.lineTo($, d + N - J),
                        r.quadraticCurveTo($, d + N, $ + J, d + N),
                        r.lineTo($ + O - J, d + N),
                        r.quadraticCurveTo($ + O, d + N, $ + O, d + N - J),
                        r.lineTo($ + O, d + J),
                        r.quadraticCurveTo($ + O, d, $ + O - J, d),
                        r.lineTo($ + J, d),
                        r.quadraticCurveTo($, d, $, d + J),
                        r.closePath()
                    }
                    r.globalAlpha = _.alpha * s,
                    r.strokeStyle = l,
                    r.stroke()
                }
                I && this.paintRoundedRectangle(E, v, _, o, s, r)
            }
        }
    }
    paintPolygonStroke(t, e, r, s, n, a, o) {
        if (e.alignment !== .5) {
            const l = e.width * (.5 - (1 - e.alignment));
            let c = nn.offsetPolygon(t.points, l), p;
            o.beginPath(),
            o.moveTo(c[0], c[1]);
            for (let m = 2; m < c.length; m += 2)
                o.lineTo(c[m], c[m + 1]);
            t.closeStroke && o.closePath();
            for (let m = 0; m < s.length; m++) {
                if (p = s[m].shape.points,
                c = nn.offsetPolygon(p, l),
                n[m]) {
                    o.moveTo(c[0], c[1]);
                    for (let f = 2; f < c.length; f += 2)
                        o.lineTo(c[f], c[f + 1])
                } else {
                    o.moveTo(c[c.length - 2], c[c.length - 1]);
                    for (let f = c.length - 4; f >= 0; f -= 2)
                        o.lineTo(c[f], c[f + 1])
                }
                s[m].shape.closeStroke && o.closePath()
            }
        }
        o.globalAlpha = e.alpha * a,
        o.strokeStyle = r,
        o.stroke()
    }
    paintEllipse(t, e, r, s, n, a) {
        const o = t.width * 2
          , l = t.height * 2
          , c = t.x - o / 2
          , p = t.y - l / 2
          , m = .5522848
          , f = o / 2 * m
          , v = l / 2 * m
          , _ = c + o
          , T = p + l
          , A = c + o / 2
          , E = p + l / 2;
        r.alignment === 0 && a.save(),
        a.beginPath(),
        a.moveTo(c, E),
        a.bezierCurveTo(c, E - v, A - f, p, A, p),
        a.bezierCurveTo(A + f, p, _, E - v, _, E),
        a.bezierCurveTo(_, E + v, A + f, T, A, T),
        a.bezierCurveTo(A - f, T, c, E + v, c, E),
        a.closePath(),
        r.alignment === 0 && a.clip(),
        e.visible && (a.globalAlpha = e.alpha * n,
        a.fillStyle = s,
        a.fill()),
        r.alignment === 0 && a.restore()
    }
    paintRoundedRectangle(t, e, r, s, n, a) {
        const o = t.x
          , l = t.y
          , c = t.width
          , p = t.height;
        let m = t.radius;
        const f = Math.min(c, p) / 2;
        m = m > f ? f : m,
        r.alignment === 0 && a.save(),
        a.beginPath(),
        a.moveTo(o, l + m),
        a.lineTo(o, l + p - m),
        a.quadraticCurveTo(o, l + p, o + m, l + p),
        a.lineTo(o + c - m, l + p),
        a.quadraticCurveTo(o + c, l + p, o + c, l + p - m),
        a.lineTo(o + c, l + m),
        a.quadraticCurveTo(o + c, l, o + c - m, l),
        a.lineTo(o + m, l),
        a.quadraticCurveTo(o, l, o, l + m),
        a.closePath(),
        r.alignment === 0 && a.clip(),
        e.visible && (a.globalAlpha = e.alpha * n,
        a.fillStyle = s,
        a.fill()),
        r.alignment === 0 && a.restore()
    }
    setPatternTransform(t, e) {
        if (this._svgMatrix !== !1) {
            if (!this._svgMatrix) {
                const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                if (r != null && r.createSVGMatrix && (this._svgMatrix = r.createSVGMatrix()),
                !this._svgMatrix || !t.setTransform) {
                    this._svgMatrix = !1;
                    return
                }
            }
            this._svgMatrix.a = e.a,
            this._svgMatrix.b = e.b,
            this._svgMatrix.c = e.c,
            this._svgMatrix.d = e.d,
            this._svgMatrix.e = e.tx,
            this._svgMatrix.f = e.ty,
            t.setTransform(this._svgMatrix.inverse())
        }
    }
    destroy() {
        this.renderer = null,
        this._svgMatrix = null,
        this._tempMatrix = null
    }
}
If.extension = {
    name: "graphics",
    type: et.CanvasRendererPlugin
};
ot.add(If);
Object.defineProperties(nt, {
    MESH_CANVAS_PADDING: {
        get() {
            return Be.defaultCanvasPadding
        },
        set(i) {
            vt("7.1.0", "settings.MESH_CANVAS_PADDING is deprecated, use Mesh.defaultCanvasPadding"),
            Be.defaultCanvasPadding = i
        }
    }
});
ys.prototype._renderCanvas = function(i, t) {
    i.plugins.mesh.render(t)
}
;
Ha.prototype._cachedTint = 16777215;
Ha.prototype._tintedCanvas = null;
Ha.prototype._canvasUvs = null;
Ha.prototype._renderCanvas = function(i) {
    const t = i.canvasContext.activeContext
      , e = this.worldTransform
      , r = this.tintValue !== 16777215
      , s = this.texture;
    if (!s.valid)
        return;
    r && this._cachedTint !== this.tintValue && (this._cachedTint = this.tintValue,
    this._tintedCanvas = _e.getTintedCanvas(this, this.tintValue));
    const n = r ? this._tintedCanvas : s.baseTexture.getDrawableSource();
    this._canvasUvs || (this._canvasUvs = [0, 0, 0, 0, 0, 0, 0, 0]);
    const a = this.vertices
      , o = this._canvasUvs
      , l = r ? 0 : s.frame.x
      , c = r ? 0 : s.frame.y
      , p = l + s.frame.width
      , m = c + s.frame.height;
    o[0] = l,
    o[1] = l + this._leftWidth,
    o[2] = p - this._rightWidth,
    o[3] = p,
    o[4] = c,
    o[5] = c + this._topHeight,
    o[6] = m - this._bottomHeight,
    o[7] = m;
    for (let f = 0; f < 8; f++)
        o[f] *= s.baseTexture.resolution;
    t.globalAlpha = this.worldAlpha,
    i.canvasContext.setBlendMode(this.blendMode),
    i.canvasContext.setContextTransform(e, this.roundPixels);
    for (let f = 0; f < 3; f++)
        for (let v = 0; v < 3; v++) {
            const _ = v * 2 + f * 8
              , T = Math.max(1, o[v + 1] - o[v])
              , A = Math.max(1, o[f + 5] - o[f + 4])
              , E = Math.max(1, a[_ + 10] - a[_])
              , I = Math.max(1, a[_ + 11] - a[_ + 1]);
            t.drawImage(n, o[v], o[f + 4], T, A, a[_], a[_ + 1], E, I)
        }
}
;
let wc = !1;
Be.prototype._cachedTint = 16777215;
Be.prototype._tintedCanvas = null;
Be.prototype._cachedTexture = null;
Be.prototype._renderCanvas = function(i) {
    this.shader.uvMatrix && (this.shader.uvMatrix.update(),
    this.calculateUvs()),
    this.material._renderCanvas ? this.material._renderCanvas(i, this) : wc || (wc = !0,
    globalThis.console.warn("Mesh with custom shaders are not supported in CanvasRenderer."))
}
;
Be.prototype._canvasPadding = null;
Be.defaultCanvasPadding = 0;
Object.defineProperty(Be.prototype, "canvasPadding", {
    get() {
        return this._canvasPadding ?? Be.defaultCanvasPadding
    },
    set(i) {
        this._canvasPadding = i
    }
});
Ox.prototype._renderCanvas = function(i) {
    this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(),
    this.shader.update && this.shader.update(),
    this.calculateUvs(),
    this.material._renderCanvas(i, this)
}
;
Nx.prototype._renderCanvas = function(i) {
    (this.autoUpdate || this.geometry._width !== this.shader.texture.height) && (this.geometry._width = this.shader.texture.height,
    this.geometry.update()),
    this.shader.update && this.shader.update(),
    this.calculateUvs(),
    this.material._renderCanvas(i, this)
}
;
class Rf {
    constructor(t) {
        this.renderer = t
    }
    render(t) {
        const e = this.renderer
          , r = t.worldTransform;
        e.canvasContext.activeContext.globalAlpha = t.worldAlpha,
        e.canvasContext.setBlendMode(t.blendMode),
        e.canvasContext.setContextTransform(r, t.roundPixels),
        t.drawMode !== or.TRIANGLES ? this._renderTriangleMesh(t) : this._renderTriangles(t)
    }
    _renderTriangleMesh(t) {
        const e = t.geometry.buffers[0].data.length;
        for (let r = 0; r < e - 2; r++) {
            const s = r * 2;
            this._renderDrawTriangle(t, s, s + 2, s + 4)
        }
    }
    _renderTriangles(t) {
        const e = t.geometry.getIndex().data
          , r = e.length;
        for (let s = 0; s < r; s += 3) {
            const n = e[s] * 2
              , a = e[s + 1] * 2
              , o = e[s + 2] * 2;
            this._renderDrawTriangle(t, n, a, o)
        }
    }
    _renderDrawTriangle(t, e, r, s) {
        var dt;
        const n = this.renderer.canvasContext.activeContext
          , a = t.geometry.buffers[0].data
          , {uvs: o, texture: l} = t;
        if (!l.valid)
            return;
        const c = t.tintValue !== 16777215
          , p = l.baseTexture
          , m = p.width
          , f = p.height;
        t._cachedTexture && t._cachedTexture.baseTexture !== p && (t._cachedTint = 16777215,
        (dt = t._cachedTexture) == null || dt.destroy(),
        t._cachedTexture = null,
        t._tintedCanvas = null),
        c && t._cachedTint !== t.tintValue && (t._cachedTint = t.tintValue,
        t._cachedTexture = t._cachedTexture || new ut(p),
        t._tintedCanvas = _e.getTintedCanvas({
            texture: t._cachedTexture
        }, t.tintValue));
        const v = c ? t._tintedCanvas : p.getDrawableSource()
          , _ = o[e] * p.width
          , T = o[r] * p.width
          , A = o[s] * p.width
          , E = o[e + 1] * p.height
          , I = o[r + 1] * p.height
          , S = o[s + 1] * p.height;
        let P = a[e]
          , k = a[r]
          , $ = a[s]
          , d = a[e + 1]
          , O = a[r + 1]
          , N = a[s + 1];
        const z = t.canvasPadding / this.renderer.canvasContext.activeResolution;
        if (z > 0) {
            const {a: Ft, b: Q, c: K, d: xt} = t.worldTransform
              , Ct = (P + k + $) / 3
              , It = (d + O + N) / 3;
            let kt = P - Ct
              , Ot = d - It
              , Mt = Ft * kt + K * Ot
              , $t = Q * kt + xt * Ot
              , qt = Math.sqrt(Mt * Mt + $t * $t)
              , Dt = 1 + z / qt;
            P = Ct + kt * Dt,
            d = It + Ot * Dt,
            kt = k - Ct,
            Ot = O - It,
            Mt = Ft * kt + K * Ot,
            $t = Q * kt + xt * Ot,
            qt = Math.sqrt(Mt * Mt + $t * $t),
            Dt = 1 + z / qt,
            k = Ct + kt * Dt,
            O = It + Ot * Dt,
            kt = $ - Ct,
            Ot = N - It,
            Mt = Ft * kt + K * Ot,
            $t = Q * kt + xt * Ot,
            qt = Math.sqrt(Mt * Mt + $t * $t),
            Dt = 1 + z / qt,
            $ = Ct + kt * Dt,
            N = It + Ot * Dt
        }
        n.save(),
        n.beginPath(),
        n.moveTo(P, d),
        n.lineTo(k, O),
        n.lineTo($, N),
        n.closePath(),
        n.clip();
        const J = _ * I + E * A + T * S - I * A - E * T - _ * S
          , V = P * I + E * $ + k * S - I * $ - E * k - P * S
          , B = _ * k + P * A + T * $ - k * A - P * T - _ * $
          , j = _ * I * $ + E * k * A + P * T * S - P * I * A - E * T * $ - _ * k * S
          , rt = d * I + E * N + O * S - I * N - E * O - d * S
          , at = _ * O + d * A + T * N - O * A - d * T - _ * N
          , st = _ * I * N + E * O * A + d * T * S - d * I * A - E * T * N - _ * O * S;
        n.transform(V / J, rt / J, B / J, at / J, j / J, st / J),
        n.drawImage(v, 0, 0, m * p.resolution, f * p.resolution, 0, 0, m, f),
        n.restore(),
        this.renderer.canvasContext.invalidateBlendMode()
    }
    renderMeshFlat(t) {
        const e = this.renderer.canvasContext.activeContext
          , r = t.geometry.getBuffer("aVertexPosition").data
          , s = r.length / 2;
        e.beginPath();
        for (let n = 1; n < s - 2; ++n) {
            const a = n * 2
              , o = r[a]
              , l = r[a + 1]
              , c = r[a + 2]
              , p = r[a + 3]
              , m = r[a + 4]
              , f = r[a + 5];
            e.moveTo(o, l),
            e.lineTo(c, p),
            e.lineTo(m, f)
        }
        e.fillStyle = "#FF0000",
        e.fill(),
        e.closePath()
    }
    destroy() {
        this.renderer = null
    }
}
Rf.extension = {
    name: "mesh",
    type: et.CanvasRendererPlugin
};
ot.add(Rf);
const Ec = 16;
function sb(i, t) {
    const e = i;
    if (t instanceof Tt) {
        const r = t.source
          , s = r.width === 0 ? e.canvas.width : Math.min(e.canvas.width, r.width)
          , n = r.height === 0 ? e.canvas.height : Math.min(e.canvas.height, r.height);
        return e.ctx.drawImage(r, 0, 0, s, n, 0, 0, e.canvas.width, e.canvas.height),
        !0
    }
    return !1
}
class Pf extends wa {
    constructor(t) {
        super(t),
        this.uploadHookHelper = this,
        this.canvas = nt.ADAPTER.createCanvas(Ec, Ec),
        this.ctx = this.canvas.getContext("2d"),
        this.registerUploadHook(sb)
    }
    destroy() {
        super.destroy(),
        this.ctx = null,
        this.canvas = null
    }
}
Pf.extension = {
    name: "prepare",
    type: et.CanvasRendererSystem
};
ot.add(Pf);
Lr.prototype._tintedCanvas = null;
Lr.prototype._renderCanvas = function(i) {
    i.plugins.sprite.render(this)
}
;
const Ac = new Wt;
class Mf {
    constructor(t) {
        this.renderer = t
    }
    render(t) {
        const e = t._texture
          , r = this.renderer
          , s = r.canvasContext.activeContext
          , n = r.canvasContext.activeResolution;
        if (!e.valid)
            return;
        const a = e._frame.width
          , o = e._frame.height;
        let l = e._frame.width
          , c = e._frame.height;
        e.trim && (l = e.trim.width,
        c = e.trim.height);
        let p = t.transform.worldTransform
          , m = 0
          , f = 0;
        const v = e.baseTexture.getDrawableSource();
        if (e.orig.width <= 0 || e.orig.height <= 0 || !e.valid || !v)
            return;
        r.canvasContext.setBlendMode(t.blendMode, !0),
        s.globalAlpha = t.worldAlpha;
        const _ = e.baseTexture.scaleMode === hr.LINEAR
          , T = r.canvasContext.smoothProperty;
        T && s[T] !== _ && (s[T] = _),
        e.trim ? (m = e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width,
        f = e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height) : (m = (.5 - t.anchor.x) * e.orig.width,
        f = (.5 - t.anchor.y) * e.orig.height),
        e.rotate && (p.copyTo(Ac),
        p = Ac,
        ee.matrixAppendRotationInv(p, e.rotate, m, f),
        m = 0,
        f = 0),
        m -= l / 2,
        f -= c / 2,
        r.canvasContext.setContextTransform(p, t.roundPixels, 1),
        t.roundPixels && (m = m | 0,
        f = f | 0);
        const A = e.baseTexture.resolution
          , E = r.canvasContext._outerBlend;
        E && (s.save(),
        s.beginPath(),
        s.rect(m * n, f * n, l * n, c * n),
        s.clip()),
        t.tint !== 16777215 ? ((t._cachedTint !== t.tintValue || t._tintedCanvas.tintId !== t._texture._updateID) && (t._cachedTint = t.tintValue,
        t._tintedCanvas = _e.getTintedCanvas(t, t.tintValue)),
        s.drawImage(t._tintedCanvas, 0, 0, Math.floor(a * A), Math.floor(o * A), Math.floor(m * n), Math.floor(f * n), Math.floor(l * n), Math.floor(c * n))) : s.drawImage(v, e._frame.x * A, e._frame.y * A, Math.floor(a * A), Math.floor(o * A), Math.floor(m * n), Math.floor(f * n), Math.floor(l * n), Math.floor(c * n)),
        E && s.restore(),
        r.canvasContext.setBlendMode(Y.NORMAL)
    }
    destroy() {
        this.renderer = null
    }
}
Mf.extension = {
    name: "sprite",
    type: et.CanvasRendererPlugin
};
ot.add(Mf);
var vl = {};
vl.byteLength = ob;
vl.toByteArray = lb;
vl.fromByteArray = db;
var Rr = []
  , ze = []
  , nb = typeof Uint8Array < "u" ? Uint8Array : Array
  , qo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var qi = 0, ab = qo.length; qi < ab; ++qi)
    Rr[qi] = qo[qi],
    ze[qo.charCodeAt(qi)] = qi;
ze[45] = 62;
ze[95] = 63;
function Df(i) {
    var t = i.length;
    if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var e = i.indexOf("=");
    e === -1 && (e = t);
    var r = e === t ? 0 : 4 - e % 4;
    return [e, r]
}
function ob(i) {
    var t = Df(i)
      , e = t[0]
      , r = t[1];
    return (e + r) * 3 / 4 - r
}
function hb(i, t, e) {
    return (t + e) * 3 / 4 - e
}
function lb(i) {
    var t, e = Df(i), r = e[0], s = e[1], n = new nb(hb(i, r, s)), a = 0, o = s > 0 ? r - 4 : r, l;
    for (l = 0; l < o; l += 4)
        t = ze[i.charCodeAt(l)] << 18 | ze[i.charCodeAt(l + 1)] << 12 | ze[i.charCodeAt(l + 2)] << 6 | ze[i.charCodeAt(l + 3)],
        n[a++] = t >> 16 & 255,
        n[a++] = t >> 8 & 255,
        n[a++] = t & 255;
    return s === 2 && (t = ze[i.charCodeAt(l)] << 2 | ze[i.charCodeAt(l + 1)] >> 4,
    n[a++] = t & 255),
    s === 1 && (t = ze[i.charCodeAt(l)] << 10 | ze[i.charCodeAt(l + 1)] << 4 | ze[i.charCodeAt(l + 2)] >> 2,
    n[a++] = t >> 8 & 255,
    n[a++] = t & 255),
    n
}
function ub(i) {
    return Rr[i >> 18 & 63] + Rr[i >> 12 & 63] + Rr[i >> 6 & 63] + Rr[i & 63]
}
function cb(i, t, e) {
    for (var r, s = [], n = t; n < e; n += 3)
        r = (i[n] << 16 & 16711680) + (i[n + 1] << 8 & 65280) + (i[n + 2] & 255),
        s.push(ub(r));
    return s.join("")
}
function db(i) {
    for (var t, e = i.length, r = e % 3, s = [], n = 16383, a = 0, o = e - r; a < o; a += n)
        s.push(cb(i, a, a + n > o ? o : a + n));
    return r === 1 ? (t = i[e - 1],
    s.push(Rr[t >> 2] + Rr[t << 4 & 63] + "==")) : r === 2 && (t = (i[e - 2] << 8) + i[e - 1],
    s.push(Rr[t >> 10] + Rr[t >> 4 & 63] + Rr[t << 2 & 63] + "=")),
    s.join("")
}
var Bf = {
    exports: {}
};
(function(i) {
    (function(t) {
        var e = function(f, v, _) {
            var T = f instanceof ArrayBuffer || typeof Buffer < "u" && f instanceof Buffer;
            if (!T)
                throw new Error("Must specify a valid ArrayBuffer or Buffer.");
            v = v || 0,
            _ = _ || f.byteLength || f.length,
            this._view = new Uint8Array(f.buffer || f,v,_),
            this.bigEndian = !1
        };
        e._scratch = new DataView(new ArrayBuffer(8)),
        Object.defineProperty(e.prototype, "buffer", {
            get: function() {
                return typeof Buffer < "u" ? Buffer.from(this._view.buffer) : this._view.buffer
            },
            enumerable: !0,
            configurable: !1
        }),
        Object.defineProperty(e.prototype, "byteLength", {
            get: function() {
                return this._view.length
            },
            enumerable: !0,
            configurable: !1
        }),
        e.prototype._setBit = function(f, v) {
            v ? this._view[f >> 3] |= 1 << (f & 7) : this._view[f >> 3] &= ~(1 << (f & 7))
        }
        ,
        e.prototype.getBits = function(f, v, _) {
            var T = this._view.length * 8 - f;
            if (v > T)
                throw new Error("Cannot get " + v + " bit(s) from offset " + f + ", " + T + " available");
            for (var A = 0, E = 0; E < v; ) {
                var I = v - E, S = f & 7, P = this._view[f >> 3], k = Math.min(I, 8 - S), $, d;
                this.bigEndian ? ($ = ~(255 << k),
                d = P >> 8 - k - S & $,
                A <<= k,
                A |= d) : ($ = ~(255 << k),
                d = P >> S & $,
                A |= d << E),
                f += k,
                E += k
            }
            return _ ? (v !== 32 && A & 1 << v - 1 && (A |= -1 ^ (1 << v) - 1),
            A) : A >>> 0
        }
        ,
        e.prototype.setBits = function(f, v, _) {
            var T = this._view.length * 8 - f;
            if (_ > T)
                throw new Error("Cannot set " + _ + " bit(s) from offset " + f + ", " + T + " available");
            for (var A = 0; A < _; ) {
                var E = _ - A, I = f & 7, S = f >> 3, P = Math.min(E, 8 - I), k, $, d;
                if (this.bigEndian) {
                    k = ~(-1 << P),
                    $ = v >> _ - A - P & k;
                    var O = 8 - I - P;
                    d = ~(k << O),
                    this._view[S] = this._view[S] & d | $ << O
                } else
                    k = ~(255 << P),
                    $ = v & k,
                    v >>= P,
                    d = ~(k << I),
                    this._view[S] = this._view[S] & d | $ << I;
                f += P,
                A += P
            }
        }
        ,
        e.prototype.getBoolean = function(f) {
            return this.getBits(f, 1, !1) !== 0
        }
        ,
        e.prototype.getInt8 = function(f) {
            return this.getBits(f, 8, !0)
        }
        ,
        e.prototype.getUint8 = function(f) {
            return this.getBits(f, 8, !1)
        }
        ,
        e.prototype.getInt16 = function(f) {
            return this.getBits(f, 16, !0)
        }
        ,
        e.prototype.getUint16 = function(f) {
            return this.getBits(f, 16, !1)
        }
        ,
        e.prototype.getInt32 = function(f) {
            return this.getBits(f, 32, !0)
        }
        ,
        e.prototype.getUint32 = function(f) {
            return this.getBits(f, 32, !1)
        }
        ,
        e.prototype.getFloat32 = function(f) {
            return e._scratch.setUint32(0, this.getUint32(f)),
            e._scratch.getFloat32(0)
        }
        ,
        e.prototype.getFloat64 = function(f) {
            return e._scratch.setUint32(0, this.getUint32(f)),
            e._scratch.setUint32(4, this.getUint32(f + 32)),
            e._scratch.getFloat64(0)
        }
        ,
        e.prototype.setBoolean = function(f, v) {
            this.setBits(f, v ? 1 : 0, 1)
        }
        ,
        e.prototype.setInt8 = e.prototype.setUint8 = function(f, v) {
            this.setBits(f, v, 8)
        }
        ,
        e.prototype.setInt16 = e.prototype.setUint16 = function(f, v) {
            this.setBits(f, v, 16)
        }
        ,
        e.prototype.setInt32 = e.prototype.setUint32 = function(f, v) {
            this.setBits(f, v, 32)
        }
        ,
        e.prototype.setFloat32 = function(f, v) {
            e._scratch.setFloat32(0, v),
            this.setBits(f, e._scratch.getUint32(0), 32)
        }
        ,
        e.prototype.setFloat64 = function(f, v) {
            e._scratch.setFloat64(0, v),
            this.setBits(f, e._scratch.getUint32(0), 32),
            this.setBits(f + 32, e._scratch.getUint32(4), 32)
        }
        ,
        e.prototype.getArrayBuffer = function(f, v) {
            for (var _ = new Uint8Array(v), T = 0; T < v; T++)
                _[T] = this.getUint8(f + T * 8);
            return _
        }
        ;
        var r = function(f, v) {
            return function() {
                if (this._index + v > this._length)
                    throw new Error("Trying to read past the end of the stream");
                var _ = this._view[f](this._index);
                return this._index += v,
                _
            }
        }
          , s = function(f, v) {
            return function(_) {
                this._view[f](this._index, _),
                this._index += v
            }
        };
        function n(f, v) {
            return o(f, v, !1)
        }
        function a(f, v) {
            return o(f, v, !0)
        }
        function o(f, v, _) {
            if (v === 0)
                return "";
            var T = 0
              , A = []
              , E = !0
              , I = !!v;
            for (v || (v = Math.floor((f._length - f._index) / 8)); T < v; ) {
                var S = f.readUint8();
                if (S === 0 && (E = !1,
                !I))
                    break;
                E && A.push(S),
                T++
            }
            var P = String.fromCharCode.apply(null, A);
            if (_)
                try {
                    return decodeURIComponent(escape(P))
                } catch {
                    return P
                }
            else
                return P
        }
        function l(f, v, _) {
            for (var T = _ || v.length + 1, A = 0; A < T; A++)
                f.writeUint8(A < v.length ? v.charCodeAt(A) : 0)
        }
        function c(f, v, _) {
            for (var T = p(v), A = _ || T.length + 1, E = 0; E < A; E++)
                f.writeUint8(E < T.length ? T[E] : 0)
        }
        function p(f) {
            var v = [], _, T;
            for (_ = 0; _ < f.length; _++)
                T = f.charCodeAt(_),
                T <= 127 ? v.push(T) : T <= 2047 ? (v.push(T >> 6 | 192),
                v.push(T & 63 | 128)) : T <= 65535 ? (v.push(T >> 12 | 224),
                v.push(T >> 6 & 63 | 128),
                v.push(T & 63 | 128)) : (v.push(T >> 18 | 240),
                v.push(T >> 12 & 63 | 128),
                v.push(T >> 6 & 63 | 128),
                v.push(T & 63 | 128));
            return v
        }
        var m = function(f, v, _) {
            var T = f instanceof ArrayBuffer || typeof Buffer < "u" && f instanceof Buffer;
            if (!(f instanceof e) && !T)
                throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");
            T ? this._view = new e(f,v,_) : this._view = f,
            this._index = 0,
            this._startIndex = 0,
            this._length = this._view.byteLength * 8
        };
        Object.defineProperty(m.prototype, "index", {
            get: function() {
                return this._index - this._startIndex
            },
            set: function(f) {
                this._index = f + this._startIndex
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "length", {
            get: function() {
                return this._length - this._startIndex
            },
            set: function(f) {
                this._length = f + this._startIndex
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "bitsLeft", {
            get: function() {
                return this._length - this._index
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "byteIndex", {
            get: function() {
                return Math.ceil(this._index / 8)
            },
            set: function(f) {
                this._index = f * 8
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(m.prototype, "buffer", {
            get: function() {
                return this._view.buffer
            },
            enumerable: !0,
            configurable: !1
        }),
        Object.defineProperty(m.prototype, "view", {
            get: function() {
                return this._view
            },
            enumerable: !0,
            configurable: !1
        }),
        Object.defineProperty(m.prototype, "bigEndian", {
            get: function() {
                return this._view.bigEndian
            },
            set: function(f) {
                this._view.bigEndian = f
            },
            enumerable: !0,
            configurable: !1
        }),
        m.prototype.readBits = function(f, v) {
            var _ = this._view.getBits(this._index, f, v);
            return this._index += f,
            _
        }
        ,
        m.prototype.writeBits = function(f, v) {
            this._view.setBits(this._index, f, v),
            this._index += v
        }
        ,
        m.prototype.readBoolean = r("getBoolean", 1),
        m.prototype.readInt8 = r("getInt8", 8),
        m.prototype.readUint8 = r("getUint8", 8),
        m.prototype.readInt16 = r("getInt16", 16),
        m.prototype.readUint16 = r("getUint16", 16),
        m.prototype.readInt32 = r("getInt32", 32),
        m.prototype.readUint32 = r("getUint32", 32),
        m.prototype.readFloat32 = r("getFloat32", 32),
        m.prototype.readFloat64 = r("getFloat64", 64),
        m.prototype.writeBoolean = s("setBoolean", 1),
        m.prototype.writeInt8 = s("setInt8", 8),
        m.prototype.writeUint8 = s("setUint8", 8),
        m.prototype.writeInt16 = s("setInt16", 16),
        m.prototype.writeUint16 = s("setUint16", 16),
        m.prototype.writeInt32 = s("setInt32", 32),
        m.prototype.writeUint32 = s("setUint32", 32),
        m.prototype.writeFloat32 = s("setFloat32", 32),
        m.prototype.writeFloat64 = s("setFloat64", 64),
        m.prototype.readASCIIString = function(f) {
            return n(this, f)
        }
        ,
        m.prototype.readUTF8String = function(f) {
            return a(this, f)
        }
        ,
        m.prototype.writeASCIIString = function(f, v) {
            l(this, f, v)
        }
        ,
        m.prototype.writeUTF8String = function(f, v) {
            c(this, f, v)
        }
        ,
        m.prototype.readBitStream = function(f) {
            var v = new m(this._view);
            return v._startIndex = this._index,
            v._index = this._index,
            v.length = f,
            this._index += f,
            v
        }
        ,
        m.prototype.writeBitStream = function(f, v) {
            v || (v = f.bitsLeft);
            for (var _; v > 0; )
                _ = Math.min(v, 32),
                this.writeBits(f.readBits(_), _),
                v -= _
        }
        ,
        m.prototype.readArrayBuffer = function(f) {
            var v = this._view.getArrayBuffer(this._index, f);
            return this._index += f * 8,
            v
        }
        ,
        m.prototype.writeArrayBuffer = function(f, v) {
            this.writeBitStream(new m(f), v * 8)
        }
        ,
        i.exports && (i.exports = {
            BitView: e,
            BitStream: m
        })
    }
    )()
}
)(Bf);
var fb = Bf.exports;
const mb = Aa(fb);
/*!
 * ==========================================================
 *  COLOR PICKER PLUGIN 1.4.2
 * ==========================================================
 * Author: Taufik Nurrohman <https://github.com/tovic>
 * License: MIT
 * ----------------------------------------------------------
 */
(function(i, t, e) {
    var r = "__instance__"
      , s = "firstChild"
      , n = setTimeout;
    function a(d) {
        return typeof d < "u"
    }
    function o(d) {
        return typeof d == "string"
    }
    function l(d) {
        return typeof d == "object"
    }
    function c(d) {
        return Object.keys(d).length
    }
    function p(d, O, N) {
        return d < O ? O : d > N ? N : d
    }
    function m(d, O) {
        return parseInt(d, O)
    }
    function f(d) {
        return Math.round(d)
    }
    function v(d) {
        var O = +d[0], N = +d[1], z = +d[2], J, V, B, j, rt, at, st, dt;
        switch (j = Math.floor(O * 6),
        rt = O * 6 - j,
        at = z * (1 - N),
        st = z * (1 - rt * N),
        dt = z * (1 - (1 - rt) * N),
        j = j || 0,
        st = st || 0,
        dt = dt || 0,
        j % 6) {
        case 0:
            J = z,
            V = dt,
            B = at;
            break;
        case 1:
            J = st,
            V = z,
            B = at;
            break;
        case 2:
            J = at,
            V = z,
            B = dt;
            break;
        case 3:
            J = at,
            V = st,
            B = z;
            break;
        case 4:
            J = dt,
            V = at,
            B = z;
            break;
        case 5:
            J = z,
            V = at,
            B = st;
            break
        }
        return [f(J * 255), f(V * 255), f(B * 255)]
    }
    function _(d) {
        return A(v(d))
    }
    function T(d) {
        var O = +d[0], N = +d[1], z = +d[2], J = Math.max(O, N, z), V = Math.min(O, N, z), B = J - V, j, rt = J === 0 ? 0 : B / J, at = J / 255;
        switch (J) {
        case V:
            j = 0;
            break;
        case O:
            j = N - z + B * (N < z ? 6 : 0),
            j /= 6 * B;
            break;
        case N:
            j = z - O + B * 2,
            j /= 6 * B;
            break;
        case z:
            j = O - N + B * 4,
            j /= 6 * B;
            break
        }
        return [j, rt, at]
    }
    function A(d) {
        var O = +d[2] | +d[1] << 8 | +d[0] << 16;
        return O = "000000" + O.toString(16),
        O.slice(-6)
    }
    function E(d) {
        return T(I(d))
    }
    function I(d) {
        return d.length === 3 && (d = d.replace(/./g, "$&$&")),
        [m(d[0] + d[1], 16), m(d[2] + d[3], 16), m(d[4] + d[5], 16)]
    }
    function S(d) {
        return [+d[0] / 360, +d[1] / 100, +d[2] / 100]
    }
    function P(d) {
        return [f(+d[0] * 360), f(+d[1] * 100), f(+d[2] * 100)]
    }
    function k(d) {
        return [+d[0] / 255, +d[1] / 255, +d[2] / 255]
    }
    function $(d) {
        if (l(d))
            return d;
        var O = /\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(d)
          , N = /\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(d)
          , z = d[0] === "#" && d.match(/^#([\da-f]{3}|[\da-f]{6})$/i);
        return z ? E(d.slice(1)) : N ? S([+N[1], +N[2], +N[3]]) : O ? T([+O[1], +O[2], +O[3]]) : [0, 1, 1]
    }
    (function(d) {
        d.version = "1.4.2",
        d[r] = {},
        d.each = function(O, N) {
            return n(function() {
                var z = d[r], J;
                for (J in z)
                    O.call(z[J], J, z)
            }, N === 0 ? 0 : N || 1),
            d
        }
        ,
        d.parse = $,
        d._HSV2RGB = v,
        d._HSV2HEX = _,
        d._RGB2HSV = T,
        d._HEX2HSV = E,
        d._HEX2RGB = function(O) {
            return k(I(O))
        }
        ,
        d.HSV2RGB = function(O) {
            return v(S(O))
        }
        ,
        d.HSV2HEX = function(O) {
            return _(S(O))
        }
        ,
        d.RGB2HSV = function(O) {
            return P(T(O))
        }
        ,
        d.RGB2HEX = A,
        d.HEX2HSV = function(O) {
            return P(E(O))
        }
        ,
        d.HEX2RGB = I
    }
    )(i[e] = function(d, O, N) {
        var z = t.body
          , J = t.documentElement
          , V = this
          , B = i[e]
          , j = !1
          , rt = {}
          , at = t.createElement("div")
          , st = "touchstart mousedown"
          , dt = "touchmove mousemove"
          , Ft = "touchend mouseup"
          , Q = "orientationchange resize";
        if (!(V instanceof B))
            return new B(d,O);
        B[r][d.id || d.name || c(B[r])] = V,
        (!a(O) || O === !0) && (O = st);
        function K(tt, St, jt) {
            tt = tt.split(/\s+/);
            for (var ie = 0, le = tt.length; ie < le; ++ie)
                St.addEventListener(tt[ie], jt, !1)
        }
        function xt(tt, St, jt) {
            tt = tt.split(/\s+/);
            for (var ie = 0, le = tt.length; ie < le; ++ie)
                St.removeEventListener(tt[ie], jt)
        }
        function Ct(tt, St) {
            var jt = "touches"
              , ie = "clientX"
              , le = "clientY"
              , ye = St[jt] ? St[jt][0][ie] : St[ie]
              , Ge = St[jt] ? St[jt][0][le] : St[le]
              , Gr = It(tt);
            return {
                x: ye - Gr.l,
                y: Ge - Gr.t
            }
        }
        function It(tt) {
            var St, jt, ie;
            return tt === i ? (St = i.pageXOffset || J.scrollLeft,
            jt = i.pageYOffset || J.scrollTop) : (ie = tt.getBoundingClientRect(),
            St = ie.left,
            jt = ie.top),
            {
                l: St,
                t: jt
            }
        }
        function kt(tt, St) {
            for (; (tt = tt.parentElement) && tt !== St; )
                ;
            return tt
        }
        function Ot(tt) {
            tt && tt.preventDefault()
        }
        function Mt(tt) {
            return tt === i ? {
                w: i.innerWidth,
                h: i.innerHeight
            } : {
                w: tt.offsetWidth,
                h: tt.offsetHeight
            }
        }
        function $t(tt) {
            return j || (a(tt) ? tt : !1)
        }
        function qt(tt) {
            j = tt
        }
        function Dt(tt, St, jt) {
            return a(tt) ? a(St) ? (a(rt[tt]) || (rt[tt] = {}),
            a(jt) || (jt = c(rt[tt])),
            rt[tt][jt] = St,
            V) : rt[tt] : rt
        }
        function Yt(tt, St) {
            return a(tt) ? a(St) ? (delete rt[tt][St],
            V) : (rt[tt] = {},
            V) : (rt = {},
            V)
        }
        function _t(tt, St, jt) {
            if (!a(rt[tt]))
                return V;
            if (a(jt))
                a(rt[tt][jt]) && rt[tt][jt].apply(V, St);
            else
                for (var ie in rt[tt])
                    rt[tt][ie].apply(V, St);
            return V
        }
        qt(B.parse(d.getAttribute("data-color") || d.value || [0, 1, 1])),
        at.className = "color-picker",
        at.innerHTML = '<div class="color-picker-container"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';
        var Kt = at[s].children, Xt = $t([0, 1, 1]), me = Kt[0], Ee = Kt[1], fr = me[s], oe = Ee[s], Ts = 0, ws = 0, Ni = 0, Fe = 0, Ze = 0, Qe = 0, ft = 0, be = 0, Ae = [_(Xt)], Es;
        function kr(tt, St) {
            (!tt || tt === "h") && _t("change:h", St),
            (!tt || tt === "sv") && _t("change:sv", St),
            _t("change", St)
        }
        function Li() {
            return at.parentNode
        }
        function fi(tt, St) {
            tt || ((N || St || z).appendChild(at),
            V.visible = !0),
            ft = Mt(at).w,
            be = Mt(at).h;
            var jt = Mt(Ee)
              , ie = Mt(oe)
              , le = Mt(me).h
              , ye = jt.w
              , Ge = jt.h
              , Gr = Mt(fr).h
              , Je = ie.w
              , pr = ie.h;
            if (tt) {
                let Jt = function(te) {
                    var Re = te.target
                      , He = Re === d || kt(Re, d) === d;
                    He ? !Li() && (fi(),
                    _t("enter")) : V.exit()
                };
                at.style.left = at.style.top = "-9999px",
                O !== !1 && K(O, d, Jt),
                V.create = function() {
                    return fi(1),
                    _t("create"),
                    V
                }
                ,
                V.destroy = function() {
                    return O !== !1 && xt(O, d, Jt),
                    V.exit(),
                    qt(!1),
                    _t("destroy"),
                    V
                }
            } else
                Ur();
            Es = function() {
                Xt = $t(Xt),
                Kr(),
                fr.style.top = le - Gr / 2 - le * +Xt[0] + "px",
                oe.style.right = ye - Je / 2 - ye * +Xt[1] + "px",
                oe.style.top = Ge - pr / 2 - Ge * +Xt[2] + "px"
            }
            ,
            V.exit = function(Jt) {
                var te = Li();
                return te && (te.removeChild(at),
                V.visible = !1),
                xt(st, me, fn),
                xt(st, Ee, As),
                xt(dt, t, ue),
                xt(Ft, t, ki),
                xt(Q, i, Ur),
                _t("exit"),
                V
            }
            ;
            function Kr(Jt) {
                v(Xt);
                var te = v([Xt[0], 1, 1]);
                Ee.style.backgroundColor = "rgb(" + te.join(",") + ")",
                qt(Xt),
                Ot(Jt)
            }
            Es();
            function dn(Jt) {
                var te = p(Ct(me, Jt).y, 0, le);
                Xt[0] = (le - te) / le,
                fr.style.top = te - Gr / 2 + "px",
                Kr(Jt)
            }
            function Oe(Jt) {
                var te = Ct(Ee, Jt)
                  , Re = p(te.x, 0, ye)
                  , He = p(te.y, 0, Ge);
                Xt[1] = 1 - (ye - Re) / ye,
                Xt[2] = (Ge - He) / Ge,
                oe.style.right = ye - Re - Je / 2 + "px",
                oe.style.top = He - pr / 2 + "px",
                Kr(Jt)
            }
            function ue(Jt) {
                Ni && (dn(Jt),
                Ae = [_(Xt)],
                Ts || (_t("drag:h", Ae),
                _t("drag", Ae),
                kr("h", Ae))),
                Fe && (Oe(Jt),
                Ae = [_(Xt)],
                ws || (_t("drag:sv", Ae),
                _t("drag", Ae),
                kr("sv", Ae))),
                Ts = 0,
                ws = 0
            }
            function ki(Jt) {
                var te = Jt.target
                  , Re = Ni ? "h" : "sv"
                  , He = [_(Xt), V]
                  , Ui = te === d || kt(te, d) === d
                  , pn = te === at || kt(te, at) === at;
                !Ui && !pn ? Li() && O !== !1 && (V.exit(),
                kr(0, He)) : pn && (_t("stop:" + Re, He),
                _t("stop", He),
                kr(Re, He)),
                Ni = 0,
                Fe = 0
            }
            function fn(Jt) {
                Ts = 1,
                Ni = 1,
                ue(Jt),
                Ot(Jt),
                _t("start:h", Ae),
                _t("start", Ae),
                kr("h", Ae)
            }
            function As(Jt) {
                ws = 1,
                Fe = 1,
                ue(Jt),
                Ot(Jt),
                _t("start:sv", Ae),
                _t("start", Ae),
                kr("sv", Ae)
            }
            tt || (K(st, me, fn),
            K(st, Ee, As),
            K(dt, t, ue),
            K(Ft, t, ki),
            K(Q, i, Ur))
        }
        fi(1),
        n(function() {
            var tt = [_(Xt)];
            _t("create", tt),
            kr(0, tt)
        }, 0),
        V.fit = function(tt) {
            var St = Mt(i)
              , jt = Mt(J)
              , ie = St.w - jt.w
              , le = St.h - J.clientHeight
              , ye = It(i)
              , Ge = It(d);
            if (Ze = Ge.l + ye.l,
            Qe = Ge.t + ye.t + Mt(d).h,
            l(tt))
                a(tt[0]) && (Ze = tt[0]),
                a(tt[1]) && (Qe = tt[1]);
            else {
                var Gr = ye.l
                  , Je = ye.t
                  , pr = ye.l + St.w - ft - ie
                  , Kr = ye.t + St.h - be - le;
                Ze = p(Ze, Gr, pr) >> 0,
                Qe = p(Qe, Je, Kr) >> 0
            }
            return at.style.left = Ze + "px",
            at.style.top = Qe + "px",
            _t("fit"),
            V
        }
        ;
        function Ur() {
            return V.fit()
        }
        return V.set = function(tt) {
            return a(tt) ? (o(tt) && (tt = B.parse(tt)),
            qt(tt),
            Es(),
            V) : $t()
        }
        ,
        V.get = function(tt) {
            return $t(tt)
        }
        ,
        V.source = d,
        V.self = at,
        V.visible = !1,
        V.on = Dt,
        V.off = Yt,
        V.fire = _t,
        V.hooks = rt,
        V.enter = function(tt) {
            return fi(0, tt),
            _t("enter"),
            V
        }
        ,
        V
    }
    )
}
)(window, document, "CP");
export {pb as $, i_ as A, mb as B, Ue as C, cn as G, Bt as P, Or as R, Lr as S, ut as T, ui as a, fl as b, hr as c, Kh as d, vl as e, _c as f, qe as g, Pr as i, nt as s};
