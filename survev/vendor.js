// vendor-DI5YnaFM.js
var on = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ca(i) {
    return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
}
function Vp(i) {
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
        var n = Object.getOwnPropertyDescriptor(i, r);
        Object.defineProperty(e, r, n.get ? n : {
            enumerable: !0,
            get: function() {
                return i[r]
            }
        })
    }),
    e
}
var jc = {
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
    )(typeof window < "u" ? window : on, function(t, e) {
        var r = []
          , n = Object.getPrototypeOf
          , s = r.slice
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
          , g = c.hasOwnProperty
          , f = g.toString
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
        function S(h, u, m) {
            m = m || E;
            var y, x, b = m.createElement("script");
            if (b.text = h,
            u)
                for (y in I)
                    x = u[y] || u.getAttribute && u.getAttribute(y),
                    x && b.setAttribute(y, x);
            m.head.appendChild(b).parentNode.removeChild(b)
        }
        function P(h) {
            return h == null ? h + "" : typeof h == "object" || typeof h == "function" ? c[p.call(h)] || "object" : typeof h
        }
        var k = "3.7.1"
          , V = /HTML$/i
          , d = function(h, u) {
            return new d.fn.init(h,u)
        };
        d.fn = d.prototype = {
            jquery: k,
            constructor: d,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(h) {
                return h == null ? s.call(this) : h < 0 ? this[h + this.length] : this[h]
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
                return this.pushStack(d.map(this, function(u, m) {
                    return h.call(u, m, u)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
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
                  , m = +h + (h < 0 ? u : 0);
                return this.pushStack(m >= 0 && m < u ? [this[m]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: o,
            sort: r.sort,
            splice: r.splice
        },
        d.extend = d.fn.extend = function() {
            var h, u, m, y, x, b, w = arguments[0] || {}, M = 1, R = arguments.length, F = !1;
            for (typeof w == "boolean" && (F = w,
            w = arguments[M] || {},
            M++),
            typeof w != "object" && !T(w) && (w = {}),
            M === R && (w = this,
            M--); M < R; M++)
                if ((h = arguments[M]) != null)
                    for (u in h)
                        y = h[u],
                        !(u === "__proto__" || w === y) && (F && y && (d.isPlainObject(y) || (x = Array.isArray(y))) ? (m = w[u],
                        x && !Array.isArray(m) ? b = [] : !x && !d.isPlainObject(m) ? b = {} : b = m,
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
                var u, m;
                return !h || p.call(h) !== "[object Object]" ? !1 : (u = n(h),
                u ? (m = g.call(u, "constructor") && u.constructor,
                typeof m == "function" && f.call(m) === v) : !0)
            },
            isEmptyObject: function(h) {
                var u;
                for (u in h)
                    return !1;
                return !0
            },
            globalEval: function(h, u, m) {
                S(h, {
                    nonce: u && u.nonce
                }, m)
            },
            each: function(h, u) {
                var m, y = 0;
                if (O(h))
                    for (m = h.length; y < m && u.call(h[y], y, h[y]) !== !1; y++)
                        ;
                else
                    for (y in h)
                        if (u.call(h[y], y, h[y]) === !1)
                            break;
                return h
            },
            text: function(h) {
                var u, m = "", y = 0, x = h.nodeType;
                if (!x)
                    for (; u = h[y++]; )
                        m += d.text(u);
                return x === 1 || x === 11 ? h.textContent : x === 9 ? h.documentElement.textContent : x === 3 || x === 4 ? h.nodeValue : m
            },
            makeArray: function(h, u) {
                var m = u || [];
                return h != null && (O(Object(h)) ? d.merge(m, typeof h == "string" ? [h] : h) : o.call(m, h)),
                m
            },
            inArray: function(h, u, m) {
                return u == null ? -1 : l.call(u, h, m)
            },
            isXMLDoc: function(h) {
                var u = h && h.namespaceURI
                  , m = h && (h.ownerDocument || h).documentElement;
                return !V.test(u || m && m.nodeName || "HTML")
            },
            merge: function(h, u) {
                for (var m = +u.length, y = 0, x = h.length; y < m; y++)
                    h[x++] = u[y];
                return h.length = x,
                h
            },
            grep: function(h, u, m) {
                for (var y, x = [], b = 0, w = h.length, M = !m; b < w; b++)
                    y = !u(h[b], b),
                    y !== M && x.push(h[b]);
                return x
            },
            map: function(h, u, m) {
                var y, x, b = 0, w = [];
                if (O(h))
                    for (y = h.length; b < y; b++)
                        x = u(h[b], b, m),
                        x != null && w.push(x);
                else
                    for (b in h)
                        x = u(h[b], b, m),
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
              , m = P(h);
            return T(h) || A(h) ? !1 : m === "array" || u === 0 || typeof u == "number" && u > 0 && u - 1 in h
        }
        function N(h, u) {
            return h.nodeName && h.nodeName.toLowerCase() === u.toLowerCase()
        }
        var z = r.pop
          , J = r.sort
          , $ = r.splice
          , B = "[\\x20\\t\\r\\n\\f]"
          , W = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$","g");
        d.contains = function(h, u) {
            var m = u && u.parentNode;
            return h === m || !!(m && m.nodeType === 1 && (h.contains ? h.contains(m) : h.compareDocumentPosition && h.compareDocumentPosition(m) & 16))
        }
        ;
        var tt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
        function at(h, u) {
            return u ? h === "\0" ? "�" : h.slice(0, -1) + "\\" + h.charCodeAt(h.length - 1).toString(16) + " " : "\\" + h
        }
        d.escapeSelector = function(h) {
            return (h + "").replace(tt, at)
        }
        ;
        var nt = E
          , dt = o;
        (function() {
            var h, u, m, y, x, b = dt, w, M, R, F, H, X = d.expando, U = 0, Y = 0, wt = xs(), Ht = xs(), Rt = xs(), Te = xs(), ce = function(C, D) {
                return C === D && (x = !0),
                0
            }, gr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", mr = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", Ut = "\\[" + B + "*(" + mr + ")(?:" + B + "*([*^$|!~]?=)" + B + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + mr + "))|)" + B + "*\\]", yi = ":(" + mr + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ut + ")*)|.*)\\)|)", $t = new RegExp(B + "+","g"), se = new RegExp("^" + B + "*," + B + "*"), Pn = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"), ho = new RegExp(B + "|>"), yr = new RegExp(yi), Mn = new RegExp("^" + mr + "$"), vr = {
                ID: new RegExp("^#(" + mr + ")"),
                CLASS: new RegExp("^\\.(" + mr + ")"),
                TAG: new RegExp("^(" + mr + "|[*])"),
                ATTR: new RegExp("^" + Ut),
                PSEUDO: new RegExp("^" + yi),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)","i"),
                bool: new RegExp("^(?:" + gr + ")$","i"),
                needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)","i")
            }, Qr = /^(?:input|select|textarea|button)$/i, Jr = /^h\d$/i, je = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, lo = /[+~]/, Hr = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])","g"), $r = function(C, D) {
                var L = "0x" + C.slice(1) - 65536;
                return D || (L < 0 ? String.fromCharCode(L + 65536) : String.fromCharCode(L >> 10 | 55296, L & 1023 | 56320))
            }, Np = function() {
                ti()
            }, Lp = Ts(function(C) {
                return C.disabled === !0 && N(C, "fieldset")
            }, {
                dir: "parentNode",
                next: "legend"
            });
            function kp() {
                try {
                    return w.activeElement
                } catch {}
            }
            try {
                b.apply(r = s.call(nt.childNodes), nt.childNodes),
                r[nt.childNodes.length].nodeType
            } catch {
                b = {
                    apply: function(D, L) {
                        dt.apply(D, s.call(L))
                    },
                    call: function(D) {
                        dt.apply(D, s.call(arguments, 1))
                    }
                }
            }
            function zt(C, D, L, G) {
                var j, it, ht, pt, lt, Nt, bt, Et = D && D.ownerDocument, Lt = D ? D.nodeType : 9;
                if (L = L || [],
                typeof C != "string" || !C || Lt !== 1 && Lt !== 9 && Lt !== 11)
                    return L;
                if (!G && (ti(D),
                D = D || w,
                R)) {
                    if (Lt !== 11 && (lt = je.exec(C)))
                        if (j = lt[1]) {
                            if (Lt === 9)
                                if (ht = D.getElementById(j)) {
                                    if (ht.id === j)
                                        return b.call(L, ht),
                                        L
                                } else
                                    return L;
                            else if (Et && (ht = Et.getElementById(j)) && zt.contains(D, ht) && ht.id === j)
                                return b.call(L, ht),
                                L
                        } else {
                            if (lt[2])
                                return b.apply(L, D.getElementsByTagName(C)),
                                L;
                            if ((j = lt[3]) && D.getElementsByClassName)
                                return b.apply(L, D.getElementsByClassName(j)),
                                L
                        }
                    if (!Te[C + " "] && (!F || !F.test(C))) {
                        if (bt = C,
                        Et = D,
                        Lt === 1 && (ho.test(C) || Pn.test(C))) {
                            for (Et = lo.test(C) && uo(D.parentNode) || D,
                            (Et != D || !_.scope) && ((pt = D.getAttribute("id")) ? pt = d.escapeSelector(pt) : D.setAttribute("id", pt = X)),
                            Nt = Dn(C),
                            it = Nt.length; it--; )
                                Nt[it] = (pt ? "#" + pt : ":scope") + " " + bs(Nt[it]);
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
                return iu(C.replace(W, "$1"), D, L, G)
            }
            function xs() {
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
            function $i(C) {
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
            function Up(C) {
                return function(D) {
                    return N(D, "input") && D.type === C
                }
            }
            function Gp(C) {
                return function(D) {
                    return (N(D, "input") || N(D, "button")) && D.type === C
                }
            }
            function eu(C) {
                return function(D) {
                    return "form"in D ? D.parentNode && D.disabled === !1 ? "label"in D ? "label"in D.parentNode ? D.parentNode.disabled === C : D.disabled === C : D.isDisabled === C || D.isDisabled !== !C && Lp(D) === C : D.disabled === C : "label"in D ? D.disabled === C : !1
                }
            }
            function vi(C) {
                return er(function(D) {
                    return D = +D,
                    er(function(L, G) {
                        for (var j, it = C([], L.length, D), ht = it.length; ht--; )
                            L[j = it[ht]] && (L[j] = !(G[j] = L[j]))
                    })
                })
            }
            function uo(C) {
                return C && typeof C.getElementsByTagName < "u" && C
            }
            function ti(C) {
                var D, L = C ? C.ownerDocument || C : nt;
                return L == w || L.nodeType !== 9 || !L.documentElement || (w = L,
                M = w.documentElement,
                R = !d.isXMLDoc(w),
                H = M.matches || M.webkitMatchesSelector || M.msMatchesSelector,
                M.msMatchesSelector && nt != w && (D = w.defaultView) && D.top !== D && D.addEventListener("unload", Np),
                _.getById = $i(function(G) {
                    return M.appendChild(G).id = d.expando,
                    !w.getElementsByName || !w.getElementsByName(d.expando).length
                }),
                _.disconnectedMatch = $i(function(G) {
                    return H.call(G, "*")
                }),
                _.scope = $i(function() {
                    return w.querySelectorAll(":scope")
                }),
                _.cssHas = $i(function() {
                    try {
                        return w.querySelector(":has(*,:jqfake)"),
                        !1
                    } catch {
                        return !0
                    }
                }),
                _.getById ? (u.filter.ID = function(G) {
                    var j = G.replace(Hr, $r);
                    return function(it) {
                        return it.getAttribute("id") === j
                    }
                }
                ,
                u.find.ID = function(G, j) {
                    if (typeof j.getElementById < "u" && R) {
                        var it = j.getElementById(G);
                        return it ? [it] : []
                    }
                }
                ) : (u.filter.ID = function(G) {
                    var j = G.replace(Hr, $r);
                    return function(it) {
                        var ht = typeof it.getAttributeNode < "u" && it.getAttributeNode("id");
                        return ht && ht.value === j
                    }
                }
                ,
                u.find.ID = function(G, j) {
                    if (typeof j.getElementById < "u" && R) {
                        var it, ht, pt, lt = j.getElementById(G);
                        if (lt) {
                            if (it = lt.getAttributeNode("id"),
                            it && it.value === G)
                                return [lt];
                            for (pt = j.getElementsByName(G),
                            ht = 0; lt = pt[ht++]; )
                                if (it = lt.getAttributeNode("id"),
                                it && it.value === G)
                                    return [lt]
                        }
                        return []
                    }
                }
                ),
                u.find.TAG = function(G, j) {
                    return typeof j.getElementsByTagName < "u" ? j.getElementsByTagName(G) : j.querySelectorAll(G)
                }
                ,
                u.find.CLASS = function(G, j) {
                    if (typeof j.getElementsByClassName < "u" && R)
                        return j.getElementsByClassName(G)
                }
                ,
                F = [],
                $i(function(G) {
                    var j;
                    M.appendChild(G).innerHTML = "<a id='" + X + "' href='' disabled='disabled'></a><select id='" + X + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                    G.querySelectorAll("[selected]").length || F.push("\\[" + B + "*(?:value|" + gr + ")"),
                    G.querySelectorAll("[id~=" + X + "-]").length || F.push("~="),
                    G.querySelectorAll("a#" + X + "+*").length || F.push(".#.+[+~]"),
                    G.querySelectorAll(":checked").length || F.push(":checked"),
                    j = w.createElement("input"),
                    j.setAttribute("type", "hidden"),
                    G.appendChild(j).setAttribute("name", "D"),
                    M.appendChild(G).disabled = !0,
                    G.querySelectorAll(":disabled").length !== 2 && F.push(":enabled", ":disabled"),
                    j = w.createElement("input"),
                    j.setAttribute("name", ""),
                    G.appendChild(j),
                    G.querySelectorAll("[name='']").length || F.push("\\[" + B + "*name" + B + "*=" + B + `*(?:''|"")`)
                }),
                _.cssHas || F.push(":has"),
                F = F.length && new RegExp(F.join("|")),
                ce = function(G, j) {
                    if (G === j)
                        return x = !0,
                        0;
                    var it = !G.compareDocumentPosition - !j.compareDocumentPosition;
                    return it || (it = (G.ownerDocument || G) == (j.ownerDocument || j) ? G.compareDocumentPosition(j) : 1,
                    it & 1 || !_.sortDetached && j.compareDocumentPosition(G) === it ? G === w || G.ownerDocument == nt && zt.contains(nt, G) ? -1 : j === w || j.ownerDocument == nt && zt.contains(nt, j) ? 1 : y ? l.call(y, G) - l.call(y, j) : 0 : it & 4 ? -1 : 1)
                }
                ),
                w
            }
            zt.matches = function(C, D) {
                return zt(C, null, null, D)
            }
            ,
            zt.matchesSelector = function(C, D) {
                if (ti(C),
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
                return (C.ownerDocument || C) != w && ti(C),
                d.contains(C, D)
            }
            ,
            zt.attr = function(C, D) {
                (C.ownerDocument || C) != w && ti(C);
                var L = u.attrHandle[D.toLowerCase()]
                  , G = L && g.call(u.attrHandle, D.toLowerCase()) ? L(C, D, !R) : void 0;
                return G !== void 0 ? G : C.getAttribute(D)
            }
            ,
            zt.error = function(C) {
                throw new Error("Syntax error, unrecognized expression: " + C)
            }
            ,
            d.uniqueSort = function(C) {
                var D, L = [], G = 0, j = 0;
                if (x = !_.sortStable,
                y = !_.sortStable && s.call(C, 0),
                J.call(C, ce),
                x) {
                    for (; D = C[j++]; )
                        D === C[j] && (G = L.push(j));
                    for (; G--; )
                        $.call(C, L[G], 1)
                }
                return y = null,
                C
            }
            ,
            d.fn.uniqueSort = function() {
                return this.pushStack(d.uniqueSort(s.apply(this)))
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
                        return C[1] = C[1].replace(Hr, $r),
                        C[3] = (C[3] || C[4] || C[5] || "").replace(Hr, $r),
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
                        return vr.CHILD.test(C[0]) ? null : (C[3] ? C[2] = C[4] || C[5] || "" : L && yr.test(L) && (D = Dn(L, !0)) && (D = L.indexOf(")", L.length - D) - L.length) && (C[0] = C[0].slice(0, D),
                        C[2] = L.slice(0, D)),
                        C.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(C) {
                        var D = C.replace(Hr, $r).toLowerCase();
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
                            var j = zt.attr(G, C);
                            return j == null ? D === "!=" : D ? (j += "",
                            D === "=" ? j === L : D === "!=" ? j !== L : D === "^=" ? L && j.indexOf(L) === 0 : D === "*=" ? L && j.indexOf(L) > -1 : D === "$=" ? L && j.slice(-L.length) === L : D === "~=" ? (" " + j.replace($t, " ") + " ").indexOf(L) > -1 : D === "|=" ? j === L || j.slice(0, L.length + 1) === L + "-" : !1) : !0
                        }
                    },
                    CHILD: function(C, D, L, G, j) {
                        var it = C.slice(0, 3) !== "nth"
                          , ht = C.slice(-4) !== "last"
                          , pt = D === "of-type";
                        return G === 1 && j === 0 ? function(lt) {
                            return !!lt.parentNode
                        }
                        : function(lt, Nt, bt) {
                            var Et, Lt, yt, Qt, Le, Se = it !== ht ? "nextSibling" : "previousSibling", Xe = lt.parentNode, _r = pt && lt.nodeName.toLowerCase(), Vi = !bt && !pt, Pe = !1;
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
                                ht && Vi) {
                                    for (Lt = Xe[X] || (Xe[X] = {}),
                                    Et = Lt[C] || [],
                                    Qt = Et[0] === U && Et[1],
                                    Pe = Qt && Et[2],
                                    yt = Qt && Xe.childNodes[Qt]; yt = ++Qt && yt && yt[Se] || (Pe = Qt = 0) || Le.pop(); )
                                        if (yt.nodeType === 1 && ++Pe && yt === lt) {
                                            Lt[C] = [U, Qt, Pe];
                                            break
                                        }
                                } else if (Vi && (Lt = lt[X] || (lt[X] = {}),
                                Et = Lt[C] || [],
                                Qt = Et[0] === U && Et[1],
                                Pe = Qt),
                                Pe === !1)
                                    for (; (yt = ++Qt && yt && yt[Se] || (Pe = Qt = 0) || Le.pop()) && !((pt ? N(yt, _r) : yt.nodeType === 1) && ++Pe && (Vi && (Lt = yt[X] || (yt[X] = {}),
                                    Lt[C] = [U, Pe]),
                                    yt === lt)); )
                                        ;
                                return Pe -= j,
                                Pe === G || Pe % G === 0 && Pe / G >= 0
                            }
                        }
                    },
                    PSEUDO: function(C, D) {
                        var L, G = u.pseudos[C] || u.setFilters[C.toLowerCase()] || zt.error("unsupported pseudo: " + C);
                        return G[X] ? G(D) : G.length > 1 ? (L = [C, C, "", D],
                        u.setFilters.hasOwnProperty(C.toLowerCase()) ? er(function(j, it) {
                            for (var ht, pt = G(j, D), lt = pt.length; lt--; )
                                ht = l.call(j, pt[lt]),
                                j[ht] = !(it[ht] = pt[lt])
                        }) : function(j) {
                            return G(j, 0, L)
                        }
                        ) : G
                    }
                },
                pseudos: {
                    not: er(function(C) {
                        var D = []
                          , L = []
                          , G = go(C.replace(W, "$1"));
                        return G[X] ? er(function(j, it, ht, pt) {
                            for (var lt, Nt = G(j, null, pt, []), bt = j.length; bt--; )
                                (lt = Nt[bt]) && (j[bt] = !(it[bt] = lt))
                        }) : function(j, it, ht) {
                            return D[0] = j,
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
                        return C = C.replace(Hr, $r),
                        function(D) {
                            return (D.textContent || d.text(D)).indexOf(C) > -1
                        }
                    }),
                    lang: er(function(C) {
                        return Mn.test(C || "") || zt.error("unsupported lang: " + C),
                        C = C.replace(Hr, $r).toLowerCase(),
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
                        return C === kp() && w.hasFocus() && !!(C.type || C.href || ~C.tabIndex)
                    },
                    enabled: eu(!1),
                    disabled: eu(!0),
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
                        return Jr.test(C.nodeName)
                    },
                    input: function(C) {
                        return Qr.test(C.nodeName)
                    },
                    button: function(C) {
                        return N(C, "input") && C.type === "button" || N(C, "button")
                    },
                    text: function(C) {
                        var D;
                        return N(C, "input") && C.type === "text" && ((D = C.getAttribute("type")) == null || D.toLowerCase() === "text")
                    },
                    first: vi(function() {
                        return [0]
                    }),
                    last: vi(function(C, D) {
                        return [D - 1]
                    }),
                    eq: vi(function(C, D, L) {
                        return [L < 0 ? L + D : L]
                    }),
                    even: vi(function(C, D) {
                        for (var L = 0; L < D; L += 2)
                            C.push(L);
                        return C
                    }),
                    odd: vi(function(C, D) {
                        for (var L = 1; L < D; L += 2)
                            C.push(L);
                        return C
                    }),
                    lt: vi(function(C, D, L) {
                        var G;
                        for (L < 0 ? G = L + D : L > D ? G = D : G = L; --G >= 0; )
                            C.push(G);
                        return C
                    }),
                    gt: vi(function(C, D, L) {
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
                u.pseudos[h] = Up(h);
            for (h in {
                submit: !0,
                reset: !0
            })
                u.pseudos[h] = Gp(h);
            function ru() {}
            ru.prototype = u.filters = u.pseudos,
            u.setFilters = new ru;
            function Dn(C, D) {
                var L, G, j, it, ht, pt, lt, Nt = Ht[C + " "];
                if (Nt)
                    return D ? 0 : Nt.slice(0);
                for (ht = C,
                pt = [],
                lt = u.preFilter; ht; ) {
                    (!L || (G = se.exec(ht))) && (G && (ht = ht.slice(G[0].length) || ht),
                    pt.push(j = [])),
                    L = !1,
                    (G = Pn.exec(ht)) && (L = G.shift(),
                    j.push({
                        value: L,
                        type: G[0].replace(W, " ")
                    }),
                    ht = ht.slice(L.length));
                    for (it in u.filter)
                        (G = vr[it].exec(ht)) && (!lt[it] || (G = lt[it](G))) && (L = G.shift(),
                        j.push({
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
            function bs(C) {
                for (var D = 0, L = C.length, G = ""; D < L; D++)
                    G += C[D].value;
                return G
            }
            function Ts(C, D, L) {
                var G = D.dir
                  , j = D.next
                  , it = j || G
                  , ht = L && it === "parentNode"
                  , pt = Y++;
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
                                j && N(lt, j))
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
            function co(C) {
                return C.length > 1 ? function(D, L, G) {
                    for (var j = C.length; j--; )
                        if (!C[j](D, L, G))
                            return !1;
                    return !0
                }
                : C[0]
            }
            function Hp(C, D, L) {
                for (var G = 0, j = D.length; G < j; G++)
                    zt(C, D[G], L);
                return L
            }
            function ws(C, D, L, G, j) {
                for (var it, ht = [], pt = 0, lt = C.length, Nt = D != null; pt < lt; pt++)
                    (it = C[pt]) && (!L || L(it, G, j)) && (ht.push(it),
                    Nt && D.push(pt));
                return ht
            }
            function fo(C, D, L, G, j, it) {
                return G && !G[X] && (G = fo(G)),
                j && !j[X] && (j = fo(j, it)),
                er(function(ht, pt, lt, Nt) {
                    var bt, Et, Lt, yt, Qt = [], Le = [], Se = pt.length, Xe = ht || Hp(D || "*", lt.nodeType ? [lt] : lt, []), _r = C && (ht || !D) ? ws(Xe, Qt, C, lt, Nt) : Xe;
                    if (L ? (yt = j || (ht ? C : Se || G) ? [] : pt,
                    L(_r, yt, lt, Nt)) : yt = _r,
                    G)
                        for (bt = ws(yt, Le),
                        G(bt, [], lt, Nt),
                        Et = bt.length; Et--; )
                            (Lt = bt[Et]) && (yt[Le[Et]] = !(_r[Le[Et]] = Lt));
                    if (ht) {
                        if (j || C) {
                            if (j) {
                                for (bt = [],
                                Et = yt.length; Et--; )
                                    (Lt = yt[Et]) && bt.push(_r[Et] = Lt);
                                j(null, yt = [], bt, Nt)
                            }
                            for (Et = yt.length; Et--; )
                                (Lt = yt[Et]) && (bt = j ? l.call(ht, Lt) : Qt[Et]) > -1 && (ht[bt] = !(pt[bt] = Lt))
                        }
                    } else
                        yt = ws(yt === pt ? yt.splice(Se, yt.length) : yt),
                        j ? j(null, pt, yt, Nt) : b.apply(pt, yt)
                })
            }
            function po(C) {
                for (var D, L, G, j = C.length, it = u.relative[C[0].type], ht = it || u.relative[" "], pt = it ? 1 : 0, lt = Ts(function(Et) {
                    return Et === D
                }, ht, !0), Nt = Ts(function(Et) {
                    return l.call(D, Et) > -1
                }, ht, !0), bt = [function(Et, Lt, yt) {
                    var Qt = !it && (yt || Lt != m) || ((D = Lt).nodeType ? lt(Et, Lt, yt) : Nt(Et, Lt, yt));
                    return D = null,
                    Qt
                }
                ]; pt < j; pt++)
                    if (L = u.relative[C[pt].type])
                        bt = [Ts(co(bt), L)];
                    else {
                        if (L = u.filter[C[pt].type].apply(null, C[pt].matches),
                        L[X]) {
                            for (G = ++pt; G < j && !u.relative[C[G].type]; G++)
                                ;
                            return fo(pt > 1 && co(bt), pt > 1 && bs(C.slice(0, pt - 1).concat({
                                value: C[pt - 2].type === " " ? "*" : ""
                            })).replace(W, "$1"), L, pt < G && po(C.slice(pt, G)), G < j && po(C = C.slice(G)), G < j && bs(C))
                        }
                        bt.push(L)
                    }
                return co(bt)
            }
            function $p(C, D) {
                var L = D.length > 0
                  , G = C.length > 0
                  , j = function(it, ht, pt, lt, Nt) {
                    var bt, Et, Lt, yt = 0, Qt = "0", Le = it && [], Se = [], Xe = m, _r = it || G && u.find.TAG("*", Nt), Vi = U += Xe == null ? 1 : Math.random() || .1, Pe = _r.length;
                    for (Nt && (m = ht == w || ht || Nt); Qt !== Pe && (bt = _r[Qt]) != null; Qt++) {
                        if (G && bt) {
                            for (Et = 0,
                            !ht && bt.ownerDocument != w && (ti(bt),
                            pt = !R); Lt = C[Et++]; )
                                if (Lt(bt, ht || w, pt)) {
                                    b.call(lt, bt);
                                    break
                                }
                            Nt && (U = Vi)
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
                            Se = ws(Se)
                        }
                        b.apply(lt, Se),
                        Nt && !it && Se.length > 0 && yt + D.length > 1 && d.uniqueSort(lt)
                    }
                    return Nt && (U = Vi,
                    m = Xe),
                    Le
                };
                return L ? er(j) : j
            }
            function go(C, D) {
                var L, G = [], j = [], it = Rt[C + " "];
                if (!it) {
                    for (D || (D = Dn(C)),
                    L = D.length; L--; )
                        it = po(D[L]),
                        it[X] ? G.push(it) : j.push(it);
                    it = Rt(C, $p(j, G)),
                    it.selector = C
                }
                return it
            }
            function iu(C, D, L, G) {
                var j, it, ht, pt, lt, Nt = typeof C == "function" && C, bt = !G && Dn(C = Nt.selector || C);
                if (L = L || [],
                bt.length === 1) {
                    if (it = bt[0] = bt[0].slice(0),
                    it.length > 2 && (ht = it[0]).type === "ID" && D.nodeType === 9 && R && u.relative[it[1].type]) {
                        if (D = (u.find.ID(ht.matches[0].replace(Hr, $r), D) || [])[0],
                        D)
                            Nt && (D = D.parentNode);
                        else
                            return L;
                        C = C.slice(it.shift().value.length)
                    }
                    for (j = vr.needsContext.test(C) ? 0 : it.length; j-- && (ht = it[j],
                    !u.relative[pt = ht.type]); )
                        if ((lt = u.find[pt]) && (G = lt(ht.matches[0].replace(Hr, $r), lo.test(it[0].type) && uo(D.parentNode) || D))) {
                            if (it.splice(j, 1),
                            C = G.length && bs(it),
                            !C)
                                return b.apply(L, G),
                                L;
                            break
                        }
                }
                return (Nt || go(C, bt))(G, D, !R, L, !D || lo.test(C) && uo(D.parentNode) || D),
                L
            }
            _.sortStable = X.split("").sort(ce).join("") === X,
            ti(),
            _.sortDetached = $i(function(C) {
                return C.compareDocumentPosition(w.createElement("fieldset")) & 1
            }),
            d.find = zt,
            d.expr[":"] = d.expr.pseudos,
            d.unique = d.uniqueSort,
            zt.compile = go,
            zt.select = iu,
            zt.setDocument = ti,
            zt.tokenize = Dn,
            zt.escape = d.escapeSelector,
            zt.getText = d.text,
            zt.isXML = d.isXMLDoc,
            zt.selectors = d.expr,
            zt.support = d.support,
            zt.uniqueSort = d.uniqueSort
        }
        )();
        var Ft = function(h, u, m) {
            for (var y = [], x = m !== void 0; (h = h[u]) && h.nodeType !== 9; )
                if (h.nodeType === 1) {
                    if (x && d(h).is(m))
                        break;
                    y.push(h)
                }
            return y
        }
          , Q = function(h, u) {
            for (var m = []; h; h = h.nextSibling)
                h.nodeType === 1 && h !== u && m.push(h);
            return m
        }
          , K = d.expr.match.needsContext
          , xt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function Ct(h, u, m) {
            return T(u) ? d.grep(h, function(y, x) {
                return !!u.call(y, x, y) !== m
            }) : u.nodeType ? d.grep(h, function(y) {
                return y === u !== m
            }) : typeof u != "string" ? d.grep(h, function(y) {
                return l.call(u, y) > -1 !== m
            }) : d.filter(u, h, m)
        }
        d.filter = function(h, u, m) {
            var y = u[0];
            return m && (h = ":not(" + h + ")"),
            u.length === 1 && y.nodeType === 1 ? d.find.matchesSelector(y, h) ? [y] : [] : d.find.matches(h, d.grep(u, function(x) {
                return x.nodeType === 1
            }))
        }
        ,
        d.fn.extend({
            find: function(h) {
                var u, m, y = this.length, x = this;
                if (typeof h != "string")
                    return this.pushStack(d(h).filter(function() {
                        for (u = 0; u < y; u++)
                            if (d.contains(x[u], this))
                                return !0
                    }));
                for (m = this.pushStack([]),
                u = 0; u < y; u++)
                    d.find(h, x[u], m);
                return y > 1 ? d.uniqueSort(m) : m
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
        var It, kt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Ot = d.fn.init = function(h, u, m) {
            var y, x;
            if (!h)
                return this;
            if (m = m || It,
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
                    return !u || u.jquery ? (u || m).find(h) : this.constructor(u).find(h);
            else {
                if (h.nodeType)
                    return this[0] = h,
                    this.length = 1,
                    this;
                if (T(h))
                    return m.ready !== void 0 ? m.ready(h) : h(d)
            }
            return d.makeArray(h, this)
        }
        ;
        Ot.prototype = d.fn,
        It = d(E);
        var Mt = /^(?:parents|prev(?:Until|All))/
          , Vt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        d.fn.extend({
            has: function(h) {
                var u = d(h, this)
                  , m = u.length;
                return this.filter(function() {
                    for (var y = 0; y < m; y++)
                        if (d.contains(this, u[y]))
                            return !0
                })
            },
            closest: function(h, u) {
                var m, y = 0, x = this.length, b = [], w = typeof h != "string" && d(h);
                if (!K.test(h)) {
                    for (; y < x; y++)
                        for (m = this[y]; m && m !== u; m = m.parentNode)
                            if (m.nodeType < 11 && (w ? w.index(m) > -1 : m.nodeType === 1 && d.find.matchesSelector(m, h))) {
                                b.push(m);
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
        function Yt(h, u) {
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
            parentsUntil: function(h, u, m) {
                return Ft(h, "parentNode", m)
            },
            next: function(h) {
                return Yt(h, "nextSibling")
            },
            prev: function(h) {
                return Yt(h, "previousSibling")
            },
            nextAll: function(h) {
                return Ft(h, "nextSibling")
            },
            prevAll: function(h) {
                return Ft(h, "previousSibling")
            },
            nextUntil: function(h, u, m) {
                return Ft(h, "nextSibling", m)
            },
            prevUntil: function(h, u, m) {
                return Ft(h, "previousSibling", m)
            },
            siblings: function(h) {
                return Q((h.parentNode || {}).firstChild, h)
            },
            children: function(h) {
                return Q(h.firstChild)
            },
            contents: function(h) {
                return h.contentDocument != null && n(h.contentDocument) ? h.contentDocument : (N(h, "template") && (h = h.content || h),
                d.merge([], h.childNodes))
            }
        }, function(h, u) {
            d.fn[h] = function(m, y) {
                var x = d.map(this, u, m);
                return h.slice(-5) !== "Until" && (y = m),
                y && typeof y == "string" && (x = d.filter(y, x)),
                this.length > 1 && (Vt[h] || d.uniqueSort(x),
                Mt.test(h) && x.reverse()),
                this.pushStack(x)
            }
        });
        var Dt = /[^\x20\t\r\n\f]+/g;
        function qt(h) {
            var u = {};
            return d.each(h.match(Dt) || [], function(m, y) {
                u[y] = !0
            }),
            u
        }
        d.Callbacks = function(h) {
            h = typeof h == "string" ? qt(h) : d.extend({}, h);
            var u, m, y, x, b = [], w = [], M = -1, R = function() {
                for (x = x || h.once,
                y = u = !0; w.length; M = -1)
                    for (m = w.shift(); ++M < b.length; )
                        b[M].apply(m[0], m[1]) === !1 && h.stopOnFalse && (M = b.length,
                        m = !1);
                h.memory || (m = !1),
                u = !1,
                x && (m ? b = [] : b = "")
            }, F = {
                add: function() {
                    return b && (m && !u && (M = b.length - 1,
                    w.push(m)),
                    function H(X) {
                        d.each(X, function(U, Y) {
                            T(Y) ? (!h.unique || !F.has(Y)) && b.push(Y) : Y && Y.length && P(Y) !== "string" && H(Y)
                        })
                    }(arguments),
                    m && !u && R()),
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
                    b = m = "",
                    this
                },
                disabled: function() {
                    return !b
                },
                lock: function() {
                    return x = w = [],
                    !m && !u && (b = m = ""),
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
        function Xt(h, u, m, y) {
            var x;
            try {
                h && T(x = h.promise) ? x.call(h).done(u).fail(m) : h && T(x = h.then) ? x.call(h, u, m) : u.apply(void 0, [h].slice(y))
            } catch (b) {
                m.apply(void 0, [b])
            }
        }
        d.extend({
            Deferred: function(h) {
                var u = [["notify", "progress", d.Callbacks("memory"), d.Callbacks("memory"), 2], ["resolve", "done", d.Callbacks("once memory"), d.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", d.Callbacks("once memory"), d.Callbacks("once memory"), 1, "rejected"]]
                  , m = "pending"
                  , y = {
                    state: function() {
                        return m
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
                        function F(H, X, U, Y) {
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
                                        T(gr) ? Y ? gr.call(ce, F(R, X, _t, Y), F(R, X, Kt, Y)) : (R++,
                                        gr.call(ce, F(R, X, _t, Y), F(R, X, Kt, Y), F(R, X, _t, X.notifyWith))) : (U !== _t && (wt = void 0,
                                        Ht = [ce]),
                                        (Y || X.resolveWith)(wt, Ht))
                                    }
                                }
                                  , Te = Y ? Rt : function() {
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
                        m = R
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
                  , m = u
                  , y = Array(m)
                  , x = s.call(arguments)
                  , b = d.Deferred()
                  , w = function(M) {
                    return function(R) {
                        y[M] = this,
                        x[M] = arguments.length > 1 ? s.call(arguments) : R,
                        --u || b.resolveWith(y, x)
                    }
                };
                if (u <= 1 && (Xt(h, b.done(w(m)).resolve, b.reject, !u),
                b.state() === "pending" || T(x[m] && x[m].then)))
                    return b.then();
                for (; m--; )
                    Xt(x[m], w(m), b.reject);
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
        var oe = function(h, u, m, y, x, b, w) {
            var M = 0
              , R = h.length
              , F = m == null;
            if (P(m) === "object") {
                x = !0;
                for (M in m)
                    oe(h, u, M, m[M], !0, b, w)
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
                    u(h[M], m, w ? y : y.call(h[M], M, u(h[M], m)));
            return x ? h : F ? u.call(h) : R ? u(h[0], m) : b
        }
          , Tn = /^-ms-/
          , wn = /-([a-z])/g;
        function Ni(h, u) {
            return u.toUpperCase()
        }
        function Fe(h) {
            return h.replace(Tn, "ms-").replace(wn, Ni)
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
            set: function(h, u, m) {
                var y, x = this.cache(h);
                if (typeof u == "string")
                    x[Fe(u)] = m;
                else
                    for (y in u)
                        x[Fe(y)] = u[y];
                return x
            },
            get: function(h, u) {
                return u === void 0 ? this.cache(h) : h[this.expando] && h[this.expando][Fe(u)]
            },
            access: function(h, u, m) {
                return u === void 0 || u && typeof u == "string" && m === void 0 ? this.get(h, u) : (this.set(h, u, m),
                m !== void 0 ? m : u)
            },
            remove: function(h, u) {
                var m, y = h[this.expando];
                if (y !== void 0) {
                    if (u !== void 0)
                        for (Array.isArray(u) ? u = u.map(Fe) : (u = Fe(u),
                        u = u in y ? [u] : u.match(Dt) || []),
                        m = u.length; m--; )
                            delete y[u[m]];
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
          , En = /[A-Z]/g;
        function kr(h) {
            return h === "true" ? !0 : h === "false" ? !1 : h === "null" ? null : h === +h + "" ? +h : Ae.test(h) ? JSON.parse(h) : h
        }
        function Li(h, u, m) {
            var y;
            if (m === void 0 && h.nodeType === 1)
                if (y = "data-" + u.replace(En, "-$&").toLowerCase(),
                m = h.getAttribute(y),
                typeof m == "string") {
                    try {
                        m = kr(m)
                    } catch {}
                    be.set(h, u, m)
                } else
                    m = void 0;
            return m
        }
        d.extend({
            hasData: function(h) {
                return be.hasData(h) || ft.hasData(h)
            },
            data: function(h, u, m) {
                return be.access(h, u, m)
            },
            removeData: function(h, u) {
                be.remove(h, u)
            },
            _data: function(h, u, m) {
                return ft.access(h, u, m)
            },
            _removeData: function(h, u) {
                ft.remove(h, u)
            }
        }),
        d.fn.extend({
            data: function(h, u) {
                var m, y, x, b = this[0], w = b && b.attributes;
                if (h === void 0) {
                    if (this.length && (x = be.get(b),
                    b.nodeType === 1 && !ft.get(b, "hasDataAttrs"))) {
                        for (m = w.length; m--; )
                            w[m] && (y = w[m].name,
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
            queue: function(h, u, m) {
                var y;
                if (h)
                    return u = (u || "fx") + "queue",
                    y = ft.get(h, u),
                    m && (!y || Array.isArray(m) ? y = ft.access(h, u, d.makeArray(m)) : y.push(m)),
                    y || []
            },
            dequeue: function(h, u) {
                u = u || "fx";
                var m = d.queue(h, u)
                  , y = m.length
                  , x = m.shift()
                  , b = d._queueHooks(h, u)
                  , w = function() {
                    d.dequeue(h, u)
                };
                x === "inprogress" && (x = m.shift(),
                y--),
                x && (u === "fx" && m.unshift("inprogress"),
                delete b.stop,
                x.call(h, w, b)),
                !y && b && b.empty.fire()
            },
            _queueHooks: function(h, u) {
                var m = u + "queueHooks";
                return ft.get(h, m) || ft.access(h, m, {
                    empty: d.Callbacks("once memory").add(function() {
                        ft.remove(h, [u + "queue", m])
                    })
                })
            }
        }),
        d.fn.extend({
            queue: function(h, u) {
                var m = 2;
                return typeof h != "string" && (u = h,
                h = "fx",
                m--),
                arguments.length < m ? d.queue(this[0], h) : u === void 0 ? this : this.each(function() {
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
                var m, y = 1, x = d.Deferred(), b = this, w = this.length, M = function() {
                    --y || x.resolveWith(b, [b])
                };
                for (typeof h != "string" && (u = h,
                h = void 0),
                h = h || "fx"; w--; )
                    m = ft.get(b[w], h + "queueHooks"),
                    m && m.empty && (y++,
                    m.empty.add(M));
                return M(),
                x.promise(u)
            }
        });
        var pi = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Ur = new RegExp("^(?:([+-])=|)(" + pi + ")([a-z%]*)$","i")
          , et = ["Top", "Right", "Bottom", "Left"]
          , St = E.documentElement
          , Wt = function(h) {
            return d.contains(h.ownerDocument, h)
        }
          , ie = {
            composed: !0
        };
        St.getRootNode && (Wt = function(h) {
            return d.contains(h.ownerDocument, h) || h.getRootNode(ie) === h.ownerDocument
        }
        );
        var le = function(h, u) {
            return h = u || h,
            h.style.display === "none" || h.style.display === "" && Wt(h) && d.css(h, "display") === "none"
        };
        function ye(h, u, m, y) {
            var x, b, w = 20, M = y ? function() {
                return y.cur()
            }
            : function() {
                return d.css(h, u, "")
            }
            , R = M(), F = m && m[3] || (d.cssNumber[u] ? "" : "px"), H = h.nodeType && (d.cssNumber[u] || F !== "px" && +R) && Ur.exec(d.css(h, u));
            if (H && H[3] !== F) {
                for (R = R / 2,
                F = F || H[3],
                H = +R || 1; w--; )
                    d.style(h, u, H + F),
                    (1 - b) * (1 - (b = M() / R || .5)) <= 0 && (w = 0),
                    H = H / b;
                H = H * 2,
                d.style(h, u, H + F),
                m = m || []
            }
            return m && (H = +H || +R || 0,
            x = m[1] ? H + (m[1] + 1) * m[2] : +m[2],
            y && (y.unit = F,
            y.start = H,
            y.end = x)),
            x
        }
        var Ge = {};
        function Gr(h) {
            var u, m = h.ownerDocument, y = h.nodeName, x = Ge[y];
            return x || (u = m.body.appendChild(m.createElement(y)),
            x = d.css(u, "display"),
            u.parentNode.removeChild(u),
            x === "none" && (x = "block"),
            Ge[y] = x,
            x)
        }
        function Je(h, u) {
            for (var m, y, x = [], b = 0, w = h.length; b < w; b++)
                y = h[b],
                y.style && (m = y.style.display,
                u ? (m === "none" && (x[b] = ft.get(y, "display") || null,
                x[b] || (y.style.display = "")),
                y.style.display === "" && le(y) && (x[b] = Gr(y))) : m !== "none" && (x[b] = "none",
                ft.set(y, "display", m)));
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
          , Zr = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
          , ps = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var h = E.createDocumentFragment()
              , u = h.appendChild(E.createElement("div"))
              , m = E.createElement("input");
            m.setAttribute("type", "radio"),
            m.setAttribute("checked", "checked"),
            m.setAttribute("name", "t"),
            u.appendChild(m),
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
            var m;
            return typeof h.getElementsByTagName < "u" ? m = h.getElementsByTagName(u || "*") : typeof h.querySelectorAll < "u" ? m = h.querySelectorAll(u || "*") : m = [],
            u === void 0 || u && N(h, u) ? d.merge([h], m) : m
        }
        function ki(h, u) {
            for (var m = 0, y = h.length; m < y; m++)
                ft.set(h[m], "globalEval", !u || ft.get(u[m], "globalEval"))
        }
        var gs = /<|&#?\w+;/;
        function An(h, u, m, y, x) {
            for (var b, w, M, R, F, H, X = u.createDocumentFragment(), U = [], Y = 0, wt = h.length; Y < wt; Y++)
                if (b = h[Y],
                b || b === 0)
                    if (P(b) === "object")
                        d.merge(U, b.nodeType ? [b] : b);
                    else if (!gs.test(b))
                        U.push(u.createTextNode(b));
                    else {
                        for (w = w || X.appendChild(u.createElement("div")),
                        M = (Zr.exec(b) || ["", ""])[1].toLowerCase(),
                        R = Oe[M] || Oe._default,
                        w.innerHTML = R[1] + d.htmlPrefilter(b) + R[2],
                        H = R[0]; H--; )
                            w = w.lastChild;
                        d.merge(U, w.childNodes),
                        w = X.firstChild,
                        w.textContent = ""
                    }
            for (X.textContent = "",
            Y = 0; b = U[Y++]; ) {
                if (y && d.inArray(b, y) > -1) {
                    x && x.push(b);
                    continue
                }
                if (F = Wt(b),
                w = ue(X.appendChild(b), "script"),
                F && ki(w),
                m)
                    for (H = 0; b = w[H++]; )
                        ps.test(b.type || "") && m.push(b)
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
        function He(h, u, m, y, x, b) {
            var w, M;
            if (typeof u == "object") {
                typeof m != "string" && (y = y || m,
                m = void 0);
                for (M in u)
                    He(h, M, m, y, u[M], b);
                return h
            }
            if (y == null && x == null ? (x = m,
            y = m = void 0) : x == null && (typeof m == "string" ? (x = y,
            y = void 0) : (x = y,
            y = m,
            m = void 0)),
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
                d.event.add(this, u, x, y, m)
            })
        }
        d.event = {
            global: {},
            add: function(h, u, m, y, x) {
                var b, w, M, R, F, H, X, U, Y, wt, Ht, Rt = ft.get(h);
                if (Ze(h))
                    for (m.handler && (b = m,
                    m = b.handler,
                    x = b.selector),
                    x && d.find.matchesSelector(St, x),
                    m.guid || (m.guid = d.guid++),
                    (R = Rt.events) || (R = Rt.events = Object.create(null)),
                    (w = Rt.handle) || (w = Rt.handle = function(Te) {
                        return typeof d < "u" && d.event.triggered !== Te.type ? d.event.dispatch.apply(h, arguments) : void 0
                    }
                    ),
                    u = (u || "").match(Dt) || [""],
                    F = u.length; F--; )
                        M = Jt.exec(u[F]) || [],
                        Y = Ht = M[1],
                        wt = (M[2] || "").split(".").sort(),
                        Y && (X = d.event.special[Y] || {},
                        Y = (x ? X.delegateType : X.bindType) || Y,
                        X = d.event.special[Y] || {},
                        H = d.extend({
                            type: Y,
                            origType: Ht,
                            data: y,
                            handler: m,
                            guid: m.guid,
                            selector: x,
                            needsContext: x && d.expr.match.needsContext.test(x),
                            namespace: wt.join(".")
                        }, b),
                        (U = R[Y]) || (U = R[Y] = [],
                        U.delegateCount = 0,
                        (!X.setup || X.setup.call(h, y, wt, w) === !1) && h.addEventListener && h.addEventListener(Y, w)),
                        X.add && (X.add.call(h, H),
                        H.handler.guid || (H.handler.guid = m.guid)),
                        x ? U.splice(U.delegateCount++, 0, H) : U.push(H),
                        d.event.global[Y] = !0)
            },
            remove: function(h, u, m, y, x) {
                var b, w, M, R, F, H, X, U, Y, wt, Ht, Rt = ft.hasData(h) && ft.get(h);
                if (!(!Rt || !(R = Rt.events))) {
                    for (u = (u || "").match(Dt) || [""],
                    F = u.length; F--; ) {
                        if (M = Jt.exec(u[F]) || [],
                        Y = Ht = M[1],
                        wt = (M[2] || "").split(".").sort(),
                        !Y) {
                            for (Y in R)
                                d.event.remove(h, Y + u[F], m, y, !0);
                            continue
                        }
                        for (X = d.event.special[Y] || {},
                        Y = (y ? X.delegateType : X.bindType) || Y,
                        U = R[Y] || [],
                        M = M[2] && new RegExp("(^|\\.)" + wt.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        w = b = U.length; b--; )
                            H = U[b],
                            (x || Ht === H.origType) && (!m || m.guid === H.guid) && (!M || M.test(H.namespace)) && (!y || y === H.selector || y === "**" && H.selector) && (U.splice(b, 1),
                            H.selector && U.delegateCount--,
                            X.remove && X.remove.call(h, H));
                        w && !U.length && ((!X.teardown || X.teardown.call(h, wt, Rt.handle) === !1) && d.removeEvent(h, Y, Rt.handle),
                        delete R[Y])
                    }
                    d.isEmptyObject(R) && ft.remove(h, "handle events")
                }
            },
            dispatch: function(h) {
                var u, m, y, x, b, w, M = new Array(arguments.length), R = d.event.fix(h), F = (ft.get(this, "events") || Object.create(null))[R.type] || [], H = d.event.special[R.type] || {};
                for (M[0] = R,
                u = 1; u < arguments.length; u++)
                    M[u] = arguments[u];
                if (R.delegateTarget = this,
                !(H.preDispatch && H.preDispatch.call(this, R) === !1)) {
                    for (w = d.event.handlers.call(this, R, F),
                    u = 0; (x = w[u++]) && !R.isPropagationStopped(); )
                        for (R.currentTarget = x.elem,
                        m = 0; (b = x.handlers[m++]) && !R.isImmediatePropagationStopped(); )
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
                var m, y, x, b, w, M = [], R = u.delegateCount, F = h.target;
                if (R && F.nodeType && !(h.type === "click" && h.button >= 1)) {
                    for (; F !== this; F = F.parentNode || this)
                        if (F.nodeType === 1 && !(h.type === "click" && F.disabled === !0)) {
                            for (b = [],
                            w = {},
                            m = 0; m < R; m++)
                                y = u[m],
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
                    set: function(m) {
                        Object.defineProperty(this, h, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: m
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
        function Ui(h, u, m) {
            if (!m) {
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
                        else if (b = s.call(arguments),
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
        d.removeEvent = function(h, u, m) {
            h.removeEventListener && h.removeEventListener(u, m)
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
            function m(y) {
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
                        y || this.addEventListener(u, m),
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
                        y ? ft.set(this, u, y) : (this.removeEventListener(u, m),
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
                    b || (E.documentMode ? this.addEventListener(u, m) : y.addEventListener(h, m, !0)),
                    ft.set(x, u, (b || 0) + 1)
                },
                teardown: function() {
                    var y = this.ownerDocument || this.document || this
                      , x = E.documentMode ? this : y
                      , b = ft.get(x, u) - 1;
                    b ? ft.set(x, u, b) : (E.documentMode ? this.removeEventListener(u, m) : y.removeEventListener(h, m, !0),
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
                handle: function(m) {
                    var y, x = this, b = m.relatedTarget, w = m.handleObj;
                    return (!b || b !== x && !d.contains(x, b)) && (m.type = w.origType,
                    y = w.handler.apply(this, arguments),
                    m.type = u),
                    y
                }
            }
        }),
        d.fn.extend({
            on: function(h, u, m, y) {
                return He(this, h, u, m, y)
            },
            one: function(h, u, m, y) {
                return He(this, h, u, m, y, 1)
            },
            off: function(h, u, m) {
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
                return (u === !1 || typeof u == "function") && (m = u,
                u = void 0),
                m === !1 && (m = Re),
                this.each(function() {
                    d.event.remove(this, h, m, u)
                })
            }
        });
        var ms = /<script|<style|<link/i
          , np = /checked\s*(?:[^=]|=\s*.checked.)/i
          , sp = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
        function Dl(h, u) {
            return N(h, "table") && N(u.nodeType !== 11 ? u : u.firstChild, "tr") && d(h).children("tbody")[0] || h
        }
        function ap(h) {
            return h.type = (h.getAttribute("type") !== null) + "/" + h.type,
            h
        }
        function op(h) {
            return (h.type || "").slice(0, 5) === "true/" ? h.type = h.type.slice(5) : h.removeAttribute("type"),
            h
        }
        function Bl(h, u) {
            var m, y, x, b, w, M, R;
            if (u.nodeType === 1) {
                if (ft.hasData(h) && (b = ft.get(h),
                R = b.events,
                R)) {
                    ft.remove(u, "handle events");
                    for (x in R)
                        for (m = 0,
                        y = R[x].length; m < y; m++)
                            d.event.add(u, x, R[x][m])
                }
                be.hasData(h) && (w = be.access(h),
                M = d.extend({}, w),
                be.set(u, M))
            }
        }
        function hp(h, u) {
            var m = u.nodeName.toLowerCase();
            m === "input" && pr.test(h.type) ? u.checked = h.checked : (m === "input" || m === "textarea") && (u.defaultValue = h.defaultValue)
        }
        function Gi(h, u, m, y) {
            u = a(u);
            var x, b, w, M, R, F, H = 0, X = h.length, U = X - 1, Y = u[0], wt = T(Y);
            if (wt || X > 1 && typeof Y == "string" && !_.checkClone && np.test(Y))
                return h.each(function(Ht) {
                    var Rt = h.eq(Ht);
                    wt && (u[0] = Y.call(this, Ht, Rt.html())),
                    Gi(Rt, u, m, y)
                });
            if (X && (x = An(u, h[0].ownerDocument, !1, h, y),
            b = x.firstChild,
            x.childNodes.length === 1 && (x = b),
            b || y)) {
                for (w = d.map(ue(x, "script"), ap),
                M = w.length; H < X; H++)
                    R = x,
                    H !== U && (R = d.clone(R, !0, !0),
                    M && d.merge(w, ue(R, "script"))),
                    m.call(h[H], R, H);
                if (M)
                    for (F = w[w.length - 1].ownerDocument,
                    d.map(w, op),
                    H = 0; H < M; H++)
                        R = w[H],
                        ps.test(R.type || "") && !ft.access(R, "globalEval") && d.contains(F, R) && (R.src && (R.type || "").toLowerCase() !== "module" ? d._evalUrl && !R.noModule && d._evalUrl(R.src, {
                            nonce: R.nonce || R.getAttribute("nonce")
                        }, F) : S(R.textContent.replace(sp, ""), R, F))
            }
            return h
        }
        function Fl(h, u, m) {
            for (var y, x = u ? d.filter(u, h) : h, b = 0; (y = x[b]) != null; b++)
                !m && y.nodeType === 1 && d.cleanData(ue(y)),
                y.parentNode && (m && Wt(y) && ki(ue(y, "script")),
                y.parentNode.removeChild(y));
            return h
        }
        d.extend({
            htmlPrefilter: function(h) {
                return h
            },
            clone: function(h, u, m) {
                var y, x, b, w, M = h.cloneNode(!0), R = Wt(h);
                if (!_.noCloneChecked && (h.nodeType === 1 || h.nodeType === 11) && !d.isXMLDoc(h))
                    for (w = ue(M),
                    b = ue(h),
                    y = 0,
                    x = b.length; y < x; y++)
                        hp(b[y], w[y]);
                if (u)
                    if (m)
                        for (b = b || ue(h),
                        w = w || ue(M),
                        y = 0,
                        x = b.length; y < x; y++)
                            Bl(b[y], w[y]);
                    else
                        Bl(h, M);
                return w = ue(M, "script"),
                w.length > 0 && ki(w, !R && ue(h, "script")),
                M
            },
            cleanData: function(h) {
                for (var u, m, y, x = d.event.special, b = 0; (m = h[b]) !== void 0; b++)
                    if (Ze(m)) {
                        if (u = m[ft.expando]) {
                            if (u.events)
                                for (y in u.events)
                                    x[y] ? d.event.remove(m, y) : d.removeEvent(m, y, u.handle);
                            m[ft.expando] = void 0
                        }
                        m[be.expando] && (m[be.expando] = void 0)
                    }
            }
        }),
        d.fn.extend({
            detach: function(h) {
                return Fl(this, h, !0)
            },
            remove: function(h) {
                return Fl(this, h)
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
                        var u = Dl(this, h);
                        u.appendChild(h)
                    }
                })
            },
            prepend: function() {
                return Gi(this, arguments, function(h) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var u = Dl(this, h);
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
                    var m = this[0] || {}
                      , y = 0
                      , x = this.length;
                    if (u === void 0 && m.nodeType === 1)
                        return m.innerHTML;
                    if (typeof u == "string" && !ms.test(u) && !Oe[(Zr.exec(u) || ["", ""])[1].toLowerCase()]) {
                        u = d.htmlPrefilter(u);
                        try {
                            for (; y < x; y++)
                                m = this[y] || {},
                                m.nodeType === 1 && (d.cleanData(ue(m, !1)),
                                m.innerHTML = u);
                            m = 0
                        } catch {}
                    }
                    m && this.empty().append(u)
                }, null, h, arguments.length)
            },
            replaceWith: function() {
                var h = [];
                return Gi(this, arguments, function(u) {
                    var m = this.parentNode;
                    d.inArray(this, h) < 0 && (d.cleanData(ue(this)),
                    m && m.replaceChild(u, this))
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
            d.fn[h] = function(m) {
                for (var y, x = [], b = d(m), w = b.length - 1, M = 0; M <= w; M++)
                    y = M === w ? this : this.clone(!0),
                    d(b[M])[u](y),
                    o.apply(x, y.get());
                return this.pushStack(x)
            }
        });
        var Ka = new RegExp("^(" + pi + ")(?!px)[a-z%]+$","i")
          , Za = /^--/
          , ys = function(h) {
            var u = h.ownerDocument.defaultView;
            return (!u || !u.opener) && (u = t),
            u.getComputedStyle(h)
        }
          , Ol = function(h, u, m) {
            var y, x, b = {};
            for (x in u)
                b[x] = h.style[x],
                h.style[x] = u[x];
            y = m.call(h);
            for (x in u)
                h.style[x] = b[x];
            return y
        }
          , lp = new RegExp(et.join("|"),"i");
        (function() {
            function h() {
                if (F) {
                    R.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    F.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    St.appendChild(R).appendChild(F);
                    var H = t.getComputedStyle(F);
                    m = H.top !== "1%",
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
            var m, y, x, b, w, M, R = E.createElement("div"), F = E.createElement("div");
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
                    m
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
                    var H, X, U, Y;
                    return w == null && (H = E.createElement("table"),
                    X = E.createElement("tr"),
                    U = E.createElement("div"),
                    H.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                    X.style.cssText = "box-sizing:content-box;border:1px solid",
                    X.style.height = "1px",
                    U.style.height = "9px",
                    U.style.display = "block",
                    St.appendChild(H).appendChild(X).appendChild(U),
                    Y = t.getComputedStyle(X),
                    w = parseInt(Y.height, 10) + parseInt(Y.borderTopWidth, 10) + parseInt(Y.borderBottomWidth, 10) === X.offsetHeight,
                    St.removeChild(H)),
                    w
                }
            }))
        }
        )();
        function Sn(h, u, m) {
            var y, x, b, w, M = Za.test(u), R = h.style;
            return m = m || ys(h),
            m && (w = m.getPropertyValue(u) || m[u],
            M && w && (w = w.replace(W, "$1") || void 0),
            w === "" && !Wt(h) && (w = d.style(h, u)),
            !_.pixelBoxStyles() && Ka.test(w) && lp.test(u) && (y = R.width,
            x = R.minWidth,
            b = R.maxWidth,
            R.minWidth = R.maxWidth = R.width = w,
            w = m.width,
            R.width = y,
            R.minWidth = x,
            R.maxWidth = b)),
            w !== void 0 ? w + "" : w
        }
        function Nl(h, u) {
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
        var Ll = ["Webkit", "Moz", "ms"]
          , kl = E.createElement("div").style
          , Ul = {};
        function up(h) {
            for (var u = h[0].toUpperCase() + h.slice(1), m = Ll.length; m--; )
                if (h = Ll[m] + u,
                h in kl)
                    return h
        }
        function Qa(h) {
            var u = d.cssProps[h] || Ul[h];
            return u || (h in kl ? h : Ul[h] = up(h) || h)
        }
        var cp = /^(none|table(?!-c[ea]).+)/
          , dp = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Gl = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Hl(h, u, m) {
            var y = Ur.exec(u);
            return y ? Math.max(0, y[2] - (m || 0)) + (y[3] || "px") : u
        }
        function Ja(h, u, m, y, x, b) {
            var w = u === "width" ? 1 : 0
              , M = 0
              , R = 0
              , F = 0;
            if (m === (y ? "border" : "content"))
                return 0;
            for (; w < 4; w += 2)
                m === "margin" && (F += d.css(h, m + et[w], !0, x)),
                y ? (m === "content" && (R -= d.css(h, "padding" + et[w], !0, x)),
                m !== "margin" && (R -= d.css(h, "border" + et[w] + "Width", !0, x))) : (R += d.css(h, "padding" + et[w], !0, x),
                m !== "padding" ? R += d.css(h, "border" + et[w] + "Width", !0, x) : M += d.css(h, "border" + et[w] + "Width", !0, x));
            return !y && b >= 0 && (R += Math.max(0, Math.ceil(h["offset" + u[0].toUpperCase() + u.slice(1)] - b - R - M - .5)) || 0),
            R + F
        }
        function $l(h, u, m) {
            var y = ys(h)
              , x = !_.boxSizingReliable() || m
              , b = x && d.css(h, "boxSizing", !1, y) === "border-box"
              , w = b
              , M = Sn(h, u, y)
              , R = "offset" + u[0].toUpperCase() + u.slice(1);
            if (Ka.test(M)) {
                if (!m)
                    return M;
                M = "auto"
            }
            return (!_.boxSizingReliable() && b || !_.reliableTrDimensions() && N(h, "tr") || M === "auto" || !parseFloat(M) && d.css(h, "display", !1, y) === "inline") && h.getClientRects().length && (b = d.css(h, "boxSizing", !1, y) === "border-box",
            w = R in h,
            w && (M = h[R])),
            M = parseFloat(M) || 0,
            M + Ja(h, u, m || (b ? "border" : "content"), w, y, M) + "px"
        }
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(h, u) {
                        if (u) {
                            var m = Sn(h, "opacity");
                            return m === "" ? "1" : m
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
            style: function(h, u, m, y) {
                if (!(!h || h.nodeType === 3 || h.nodeType === 8 || !h.style)) {
                    var x, b, w, M = Fe(u), R = Za.test(u), F = h.style;
                    if (R || (u = Qa(M)),
                    w = d.cssHooks[u] || d.cssHooks[M],
                    m !== void 0) {
                        if (b = typeof m,
                        b === "string" && (x = Ur.exec(m)) && x[1] && (m = ye(h, u, x),
                        b = "number"),
                        m == null || m !== m)
                            return;
                        b === "number" && !R && (m += x && x[3] || (d.cssNumber[M] ? "" : "px")),
                        !_.clearCloneStyle && m === "" && u.indexOf("background") === 0 && (F[u] = "inherit"),
                        (!w || !("set"in w) || (m = w.set(h, m, y)) !== void 0) && (R ? F.setProperty(u, m) : F[u] = m)
                    } else
                        return w && "get"in w && (x = w.get(h, !1, y)) !== void 0 ? x : F[u]
                }
            },
            css: function(h, u, m, y) {
                var x, b, w, M = Fe(u), R = Za.test(u);
                return R || (u = Qa(M)),
                w = d.cssHooks[u] || d.cssHooks[M],
                w && "get"in w && (x = w.get(h, !0, m)),
                x === void 0 && (x = Sn(h, u, y)),
                x === "normal" && u in Gl && (x = Gl[u]),
                m === "" || m ? (b = parseFloat(x),
                m === !0 || isFinite(b) ? b || 0 : x) : x
            }
        }),
        d.each(["height", "width"], function(h, u) {
            d.cssHooks[u] = {
                get: function(m, y, x) {
                    if (y)
                        return cp.test(d.css(m, "display")) && (!m.getClientRects().length || !m.getBoundingClientRect().width) ? Ol(m, dp, function() {
                            return $l(m, u, x)
                        }) : $l(m, u, x)
                },
                set: function(m, y, x) {
                    var b, w = ys(m), M = !_.scrollboxSize() && w.position === "absolute", R = M || x, F = R && d.css(m, "boxSizing", !1, w) === "border-box", H = x ? Ja(m, u, x, F, w) : 0;
                    return F && M && (H -= Math.ceil(m["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(w[u]) - Ja(m, u, "border", !1, w) - .5)),
                    H && (b = Ur.exec(y)) && (b[3] || "px") !== "px" && (m.style[u] = y,
                    y = d.css(m, u)),
                    Hl(m, y, H)
                }
            }
        }),
        d.cssHooks.marginLeft = Nl(_.reliableMarginLeft, function(h, u) {
            if (u)
                return (parseFloat(Sn(h, "marginLeft")) || h.getBoundingClientRect().left - Ol(h, {
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
                expand: function(m) {
                    for (var y = 0, x = {}, b = typeof m == "string" ? m.split(" ") : [m]; y < 4; y++)
                        x[h + et[y] + u] = b[y] || b[y - 2] || b[0];
                    return x
                }
            },
            h !== "margin" && (d.cssHooks[h + u].set = Hl)
        }),
        d.fn.extend({
            css: function(h, u) {
                return oe(this, function(m, y, x) {
                    var b, w, M = {}, R = 0;
                    if (Array.isArray(y)) {
                        for (b = ys(m),
                        w = y.length; R < w; R++)
                            M[y[R]] = d.css(m, y[R], !1, b);
                        return M
                    }
                    return x !== void 0 ? d.style(m, y, x) : d.css(m, y)
                }, h, u, arguments.length > 1)
            }
        });
        function Ne(h, u, m, y, x) {
            return new Ne.prototype.init(h,u,m,y,x)
        }
        d.Tween = Ne,
        Ne.prototype = {
            constructor: Ne,
            init: function(h, u, m, y, x, b) {
                this.elem = h,
                this.prop = m,
                this.easing = x || d.easing._default,
                this.options = u,
                this.start = this.now = this.cur(),
                this.end = y,
                this.unit = b || (d.cssNumber[m] ? "" : "px")
            },
            cur: function() {
                var h = Ne.propHooks[this.prop];
                return h && h.get ? h.get(this) : Ne.propHooks._default.get(this)
            },
            run: function(h) {
                var u, m = Ne.propHooks[this.prop];
                return this.options.duration ? this.pos = u = d.easing[this.easing](h, this.options.duration * h, 0, 1, this.options.duration) : this.pos = u = h,
                this.now = (this.end - this.start) * u + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                m && m.set ? m.set(this) : Ne.propHooks._default.set(this),
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
                    d.fx.step[h.prop] ? d.fx.step[h.prop](h) : h.elem.nodeType === 1 && (d.cssHooks[h.prop] || h.elem.style[Qa(h.prop)] != null) ? d.style(h.elem, h.prop, h.now + h.unit) : h.elem[h.prop] = h.now
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
        var Hi, vs, fp = /^(?:toggle|show|hide)$/, pp = /queueHooks$/;
        function to() {
            vs && (E.hidden === !1 && t.requestAnimationFrame ? t.requestAnimationFrame(to) : t.setTimeout(to, d.fx.interval),
            d.fx.tick())
        }
        function Vl() {
            return t.setTimeout(function() {
                Hi = void 0
            }),
            Hi = Date.now()
        }
        function _s(h, u) {
            var m, y = 0, x = {
                height: h
            };
            for (u = u ? 1 : 0; y < 4; y += 2 - u)
                m = et[y],
                x["margin" + m] = x["padding" + m] = h;
            return u && (x.opacity = x.width = h),
            x
        }
        function Wl(h, u, m) {
            for (var y, x = (tr.tweeners[u] || []).concat(tr.tweeners["*"]), b = 0, w = x.length; b < w; b++)
                if (y = x[b].call(m, u, h))
                    return y
        }
        function gp(h, u, m) {
            var y, x, b, w, M, R, F, H, X = "width"in u || "height"in u, U = this, Y = {}, wt = h.style, Ht = h.nodeType && le(h), Rt = ft.get(h, "fxshow");
            m.queue || (w = d._queueHooks(h, "fx"),
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
                fp.test(x)) {
                    if (delete u[y],
                    b = b || x === "toggle",
                    x === (Ht ? "hide" : "show"))
                        if (x === "show" && Rt && Rt[y] !== void 0)
                            Ht = !0;
                        else
                            continue;
                    Y[y] = Rt && Rt[y] || d.style(h, y)
                }
            if (R = !d.isEmptyObject(u),
            !(!R && d.isEmptyObject(Y))) {
                X && h.nodeType === 1 && (m.overflow = [wt.overflow, wt.overflowX, wt.overflowY],
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
                m.overflow && (wt.overflow = "hidden",
                U.always(function() {
                    wt.overflow = m.overflow[0],
                    wt.overflowX = m.overflow[1],
                    wt.overflowY = m.overflow[2]
                })),
                R = !1;
                for (y in Y)
                    R || (Rt ? "hidden"in Rt && (Ht = Rt.hidden) : Rt = ft.access(h, "fxshow", {
                        display: F
                    }),
                    b && (Rt.hidden = !Ht),
                    Ht && Je([h], !0),
                    U.done(function() {
                        Ht || Je([h]),
                        ft.remove(h, "fxshow");
                        for (y in Y)
                            d.style(h, y, Y[y])
                    })),
                    R = Wl(Ht ? Rt[y] : 0, y, U),
                    y in Rt || (Rt[y] = R.start,
                    Ht && (R.end = R.start,
                    R.start = 0))
            }
        }
        function mp(h, u) {
            var m, y, x, b, w;
            for (m in h)
                if (y = Fe(m),
                x = u[y],
                b = h[m],
                Array.isArray(b) && (x = b[1],
                b = h[m] = b[0]),
                m !== y && (h[y] = b,
                delete h[m]),
                w = d.cssHooks[y],
                w && "expand"in w) {
                    b = w.expand(b),
                    delete h[y];
                    for (m in b)
                        m in h || (h[m] = b[m],
                        u[m] = x)
                } else
                    u[y] = x
        }
        function tr(h, u, m) {
            var y, x, b = 0, w = tr.prefilters.length, M = d.Deferred().always(function() {
                delete R.elem
            }), R = function() {
                if (x)
                    return !1;
                for (var X = Hi || Vl(), U = Math.max(0, F.startTime + F.duration - X), Y = U / F.duration || 0, wt = 1 - Y, Ht = 0, Rt = F.tweens.length; Ht < Rt; Ht++)
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
                }, m),
                originalProperties: u,
                originalOptions: m,
                startTime: Hi || Vl(),
                duration: m.duration,
                tweens: [],
                createTween: function(X, U) {
                    var Y = d.Tween(h, F.opts, X, U, F.opts.specialEasing[X] || F.opts.easing);
                    return F.tweens.push(Y),
                    Y
                },
                stop: function(X) {
                    var U = 0
                      , Y = X ? F.tweens.length : 0;
                    if (x)
                        return this;
                    for (x = !0; U < Y; U++)
                        F.tweens[U].run(1);
                    return X ? (M.notifyWith(h, [F, 1, 0]),
                    M.resolveWith(h, [F, X])) : M.rejectWith(h, [F, X]),
                    this
                }
            }), H = F.props;
            for (mp(H, F.opts.specialEasing); b < w; b++)
                if (y = tr.prefilters[b].call(F, h, H, F.opts),
                y)
                    return T(y.stop) && (d._queueHooks(F.elem, F.opts.queue).stop = y.stop.bind(y)),
                    y;
            return d.map(H, Wl, F),
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
                    var m = this.createTween(h, u);
                    return ye(m.elem, h, Ur.exec(u), m),
                    m
                }
                ]
            },
            tweener: function(h, u) {
                T(h) ? (u = h,
                h = ["*"]) : h = h.match(Dt);
                for (var m, y = 0, x = h.length; y < x; y++)
                    m = h[y],
                    tr.tweeners[m] = tr.tweeners[m] || [],
                    tr.tweeners[m].unshift(u)
            },
            prefilters: [gp],
            prefilter: function(h, u) {
                u ? tr.prefilters.unshift(h) : tr.prefilters.push(h)
            }
        }),
        d.speed = function(h, u, m) {
            var y = h && typeof h == "object" ? d.extend({}, h) : {
                complete: m || !m && u || T(h) && h,
                duration: h,
                easing: m && u || u && !T(u) && u
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
            fadeTo: function(h, u, m, y) {
                return this.filter(le).css("opacity", 0).show().end().animate({
                    opacity: u
                }, h, m, y)
            },
            animate: function(h, u, m, y) {
                var x = d.isEmptyObject(h)
                  , b = d.speed(u, m, y)
                  , w = function() {
                    var M = tr(this, d.extend({}, h), b);
                    (x || ft.get(this, "finish")) && M.stop(!0)
                };
                return w.finish = w,
                x || b.queue === !1 ? this.each(w) : this.queue(b.queue, w)
            },
            stop: function(h, u, m) {
                var y = function(x) {
                    var b = x.stop;
                    delete x.stop,
                    b(m)
                };
                return typeof h != "string" && (m = u,
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
                            M[b] && M[b].stop && pp.test(b) && y(M[b]);
                    for (b = w.length; b--; )
                        w[b].elem === this && (h == null || w[b].queue === h) && (w[b].anim.stop(m),
                        x = !1,
                        w.splice(b, 1));
                    (x || !m) && d.dequeue(this, h)
                })
            },
            finish: function(h) {
                return h !== !1 && (h = h || "fx"),
                this.each(function() {
                    var u, m = ft.get(this), y = m[h + "queue"], x = m[h + "queueHooks"], b = d.timers, w = y ? y.length : 0;
                    for (m.finish = !0,
                    d.queue(this, h, []),
                    x && x.stop && x.stop.call(this, !0),
                    u = b.length; u--; )
                        b[u].elem === this && b[u].queue === h && (b[u].anim.stop(!0),
                        b.splice(u, 1));
                    for (u = 0; u < w; u++)
                        y[u] && y[u].finish && y[u].finish.call(this);
                    delete m.finish
                })
            }
        }),
        d.each(["toggle", "show", "hide"], function(h, u) {
            var m = d.fn[u];
            d.fn[u] = function(y, x, b) {
                return y == null || typeof y == "boolean" ? m.apply(this, arguments) : this.animate(_s(u, !0), y, x, b)
            }
        }),
        d.each({
            slideDown: _s("show"),
            slideUp: _s("hide"),
            slideToggle: _s("toggle"),
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
            d.fn[h] = function(m, y, x) {
                return this.animate(u, m, y, x)
            }
        }),
        d.timers = [],
        d.fx.tick = function() {
            var h, u = 0, m = d.timers;
            for (Hi = Date.now(); u < m.length; u++)
                h = m[u],
                !h() && m[u] === h && m.splice(u--, 1);
            m.length || d.fx.stop(),
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
            vs || (vs = !0,
            to())
        }
        ,
        d.fx.stop = function() {
            vs = null
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
            this.queue(u, function(m, y) {
                var x = t.setTimeout(m, h);
                y.stop = function() {
                    t.clearTimeout(x)
                }
            })
        }
        ,
        function() {
            var h = E.createElement("input")
              , u = E.createElement("select")
              , m = u.appendChild(E.createElement("option"));
            h.type = "checkbox",
            _.checkOn = h.value !== "",
            _.optSelected = m.selected,
            h = E.createElement("input"),
            h.value = "t",
            h.type = "radio",
            _.radioValue = h.value === "t"
        }();
        var jl, Cn = d.expr.attrHandle;
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
            attr: function(h, u, m) {
                var y, x, b = h.nodeType;
                if (!(b === 3 || b === 8 || b === 2)) {
                    if (typeof h.getAttribute > "u")
                        return d.prop(h, u, m);
                    if ((b !== 1 || !d.isXMLDoc(h)) && (x = d.attrHooks[u.toLowerCase()] || (d.expr.match.bool.test(u) ? jl : void 0)),
                    m !== void 0) {
                        if (m === null) {
                            d.removeAttr(h, u);
                            return
                        }
                        return x && "set"in x && (y = x.set(h, m, u)) !== void 0 ? y : (h.setAttribute(u, m + ""),
                        m)
                    }
                    return x && "get"in x && (y = x.get(h, u)) !== null ? y : (y = d.find.attr(h, u),
                    y ?? void 0)
                }
            },
            attrHooks: {
                type: {
                    set: function(h, u) {
                        if (!_.radioValue && u === "radio" && N(h, "input")) {
                            var m = h.value;
                            return h.setAttribute("type", u),
                            m && (h.value = m),
                            u
                        }
                    }
                }
            },
            removeAttr: function(h, u) {
                var m, y = 0, x = u && u.match(Dt);
                if (x && h.nodeType === 1)
                    for (; m = x[y++]; )
                        h.removeAttribute(m)
            }
        }),
        jl = {
            set: function(h, u, m) {
                return u === !1 ? d.removeAttr(h, m) : h.setAttribute(m, m),
                m
            }
        },
        d.each(d.expr.match.bool.source.match(/\w+/g), function(h, u) {
            var m = Cn[u] || d.find.attr;
            Cn[u] = function(y, x, b) {
                var w, M, R = x.toLowerCase();
                return b || (M = Cn[R],
                Cn[R] = w,
                w = m(y, x, b) != null ? R : null,
                Cn[R] = M),
                w
            }
        });
        var yp = /^(?:input|select|textarea|button)$/i
          , vp = /^(?:a|area)$/i;
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
            prop: function(h, u, m) {
                var y, x, b = h.nodeType;
                if (!(b === 3 || b === 8 || b === 2))
                    return (b !== 1 || !d.isXMLDoc(h)) && (u = d.propFix[u] || u,
                    x = d.propHooks[u]),
                    m !== void 0 ? x && "set"in x && (y = x.set(h, m, u)) !== void 0 ? y : h[u] = m : x && "get"in x && (y = x.get(h, u)) !== null ? y : h[u]
            },
            propHooks: {
                tabIndex: {
                    get: function(h) {
                        var u = d.find.attr(h, "tabindex");
                        return u ? parseInt(u, 10) : yp.test(h.nodeName) || vp.test(h.nodeName) && h.href ? 0 : -1
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
        function gi(h) {
            var u = h.match(Dt) || [];
            return u.join(" ")
        }
        function mi(h) {
            return h.getAttribute && h.getAttribute("class") || ""
        }
        function eo(h) {
            return Array.isArray(h) ? h : typeof h == "string" ? h.match(Dt) || [] : []
        }
        d.fn.extend({
            addClass: function(h) {
                var u, m, y, x, b, w;
                return T(h) ? this.each(function(M) {
                    d(this).addClass(h.call(this, M, mi(this)))
                }) : (u = eo(h),
                u.length ? this.each(function() {
                    if (y = mi(this),
                    m = this.nodeType === 1 && " " + gi(y) + " ",
                    m) {
                        for (b = 0; b < u.length; b++)
                            x = u[b],
                            m.indexOf(" " + x + " ") < 0 && (m += x + " ");
                        w = gi(m),
                        y !== w && this.setAttribute("class", w)
                    }
                }) : this)
            },
            removeClass: function(h) {
                var u, m, y, x, b, w;
                return T(h) ? this.each(function(M) {
                    d(this).removeClass(h.call(this, M, mi(this)))
                }) : arguments.length ? (u = eo(h),
                u.length ? this.each(function() {
                    if (y = mi(this),
                    m = this.nodeType === 1 && " " + gi(y) + " ",
                    m) {
                        for (b = 0; b < u.length; b++)
                            for (x = u[b]; m.indexOf(" " + x + " ") > -1; )
                                m = m.replace(" " + x + " ", " ");
                        w = gi(m),
                        y !== w && this.setAttribute("class", w)
                    }
                }) : this) : this.attr("class", "")
            },
            toggleClass: function(h, u) {
                var m, y, x, b, w = typeof h, M = w === "string" || Array.isArray(h);
                return T(h) ? this.each(function(R) {
                    d(this).toggleClass(h.call(this, R, mi(this), u), u)
                }) : typeof u == "boolean" && M ? u ? this.addClass(h) : this.removeClass(h) : (m = eo(h),
                this.each(function() {
                    if (M)
                        for (b = d(this),
                        x = 0; x < m.length; x++)
                            y = m[x],
                            b.hasClass(y) ? b.removeClass(y) : b.addClass(y);
                    else
                        (h === void 0 || w === "boolean") && (y = mi(this),
                        y && ft.set(this, "__className__", y),
                        this.setAttribute && this.setAttribute("class", y || h === !1 ? "" : ft.get(this, "__className__") || ""))
                }))
            },
            hasClass: function(h) {
                var u, m, y = 0;
                for (u = " " + h + " "; m = this[y++]; )
                    if (m.nodeType === 1 && (" " + gi(mi(m)) + " ").indexOf(u) > -1)
                        return !0;
                return !1
            }
        });
        var _p = /\r/g;
        d.fn.extend({
            val: function(h) {
                var u, m, y, x = this[0];
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
                u && "get"in u && (m = u.get(x, "value")) !== void 0 ? m : (m = x.value,
                typeof m == "string" ? m.replace(_p, "") : m ?? "")) : void 0
            }
        }),
        d.extend({
            valHooks: {
                option: {
                    get: function(h) {
                        var u = d.find.attr(h, "value");
                        return u ?? gi(d.text(h))
                    }
                },
                select: {
                    get: function(h) {
                        var u, m, y, x = h.options, b = h.selectedIndex, w = h.type === "select-one", M = w ? null : [], R = w ? b + 1 : x.length;
                        for (b < 0 ? y = R : y = w ? b : 0; y < R; y++)
                            if (m = x[y],
                            (m.selected || y === b) && !m.disabled && (!m.parentNode.disabled || !N(m.parentNode, "optgroup"))) {
                                if (u = d(m).val(),
                                w)
                                    return u;
                                M.push(u)
                            }
                        return M
                    },
                    set: function(h, u) {
                        for (var m, y, x = h.options, b = d.makeArray(u), w = x.length; w--; )
                            y = x[w],
                            (y.selected = d.inArray(d.valHooks.option.get(y), b) > -1) && (m = !0);
                        return m || (h.selectedIndex = -1),
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
        var In = t.location
          , Xl = {
            guid: Date.now()
        }
          , ro = /\?/;
        d.parseXML = function(h) {
            var u, m;
            if (!h || typeof h != "string")
                return null;
            try {
                u = new t.DOMParser().parseFromString(h, "text/xml")
            } catch {}
            return m = u && u.getElementsByTagName("parsererror")[0],
            (!u || m) && d.error("Invalid XML: " + (m ? d.map(m.childNodes, function(y) {
                return y.textContent
            }).join(`
`) : h)),
            u
        }
        ;
        var zl = /^(?:focusinfocus|focusoutblur)$/
          , ql = function(h) {
            h.stopPropagation()
        };
        d.extend(d.event, {
            trigger: function(h, u, m, y) {
                var x, b, w, M, R, F, H, X, U = [m || E], Y = g.call(h, "type") ? h.type : h, wt = g.call(h, "namespace") ? h.namespace.split(".") : [];
                if (b = X = w = m = m || E,
                !(m.nodeType === 3 || m.nodeType === 8) && !zl.test(Y + d.event.triggered) && (Y.indexOf(".") > -1 && (wt = Y.split("."),
                Y = wt.shift(),
                wt.sort()),
                R = Y.indexOf(":") < 0 && "on" + Y,
                h = h[d.expando] ? h : new d.Event(Y,typeof h == "object" && h),
                h.isTrigger = y ? 2 : 3,
                h.namespace = wt.join("."),
                h.rnamespace = h.namespace ? new RegExp("(^|\\.)" + wt.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                h.result = void 0,
                h.target || (h.target = m),
                u = u == null ? [h] : d.makeArray(u, [h]),
                H = d.event.special[Y] || {},
                !(!y && H.trigger && H.trigger.apply(m, u) === !1))) {
                    if (!y && !H.noBubble && !A(m)) {
                        for (M = H.delegateType || Y,
                        zl.test(M + Y) || (b = b.parentNode); b; b = b.parentNode)
                            U.push(b),
                            w = b;
                        w === (m.ownerDocument || E) && U.push(w.defaultView || w.parentWindow || t)
                    }
                    for (x = 0; (b = U[x++]) && !h.isPropagationStopped(); )
                        X = b,
                        h.type = x > 1 ? M : H.bindType || Y,
                        F = (ft.get(b, "events") || Object.create(null))[h.type] && ft.get(b, "handle"),
                        F && F.apply(b, u),
                        F = R && b[R],
                        F && F.apply && Ze(b) && (h.result = F.apply(b, u),
                        h.result === !1 && h.preventDefault());
                    return h.type = Y,
                    !y && !h.isDefaultPrevented() && (!H._default || H._default.apply(U.pop(), u) === !1) && Ze(m) && R && T(m[Y]) && !A(m) && (w = m[R],
                    w && (m[R] = null),
                    d.event.triggered = Y,
                    h.isPropagationStopped() && X.addEventListener(Y, ql),
                    m[Y](),
                    h.isPropagationStopped() && X.removeEventListener(Y, ql),
                    d.event.triggered = void 0,
                    w && (m[R] = w)),
                    h.result
                }
            },
            simulate: function(h, u, m) {
                var y = d.extend(new d.Event, m, {
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
                var m = this[0];
                if (m)
                    return d.event.trigger(h, u, m, !0)
            }
        });
        var xp = /\[\]$/
          , Yl = /\r?\n/g
          , bp = /^(?:submit|button|image|reset|file)$/i
          , Tp = /^(?:input|select|textarea|keygen)/i;
        function io(h, u, m, y) {
            var x;
            if (Array.isArray(u))
                d.each(u, function(b, w) {
                    m || xp.test(h) ? y(h, w) : io(h + "[" + (typeof w == "object" && w != null ? b : "") + "]", w, m, y)
                });
            else if (!m && P(u) === "object")
                for (x in u)
                    io(h + "[" + x + "]", u[x], m, y);
            else
                y(h, u)
        }
        d.param = function(h, u) {
            var m, y = [], x = function(b, w) {
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
                for (m in h)
                    io(m, h[m], u, x);
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
                    return this.name && !d(this).is(":disabled") && Tp.test(this.nodeName) && !bp.test(h) && (this.checked || !pr.test(h))
                }).map(function(h, u) {
                    var m = d(this).val();
                    return m == null ? null : Array.isArray(m) ? d.map(m, function(y) {
                        return {
                            name: u.name,
                            value: y.replace(Yl, `\r
`)
                        }
                    }) : {
                        name: u.name,
                        value: m.replace(Yl, `\r
`)
                    }
                }).get()
            }
        });
        var wp = /%20/g
          , Ep = /#.*$/
          , Ap = /([?&])_=[^&]*/
          , Sp = /^(.*?):[ \t]*([^\r\n]*)$/mg
          , Cp = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , Ip = /^(?:GET|HEAD)$/
          , Rp = /^\/\//
          , Kl = {}
          , no = {}
          , Zl = "*/".concat("*")
          , so = E.createElement("a");
        so.href = In.href;
        function Ql(h) {
            return function(u, m) {
                typeof u != "string" && (m = u,
                u = "*");
                var y, x = 0, b = u.toLowerCase().match(Dt) || [];
                if (T(m))
                    for (; y = b[x++]; )
                        y[0] === "+" ? (y = y.slice(1) || "*",
                        (h[y] = h[y] || []).unshift(m)) : (h[y] = h[y] || []).push(m)
            }
        }
        function Jl(h, u, m, y) {
            var x = {}
              , b = h === no;
            function w(M) {
                var R;
                return x[M] = !0,
                d.each(h[M] || [], function(F, H) {
                    var X = H(u, m, y);
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
        function ao(h, u) {
            var m, y, x = d.ajaxSettings.flatOptions || {};
            for (m in u)
                u[m] !== void 0 && ((x[m] ? h : y || (y = {}))[m] = u[m]);
            return y && d.extend(!0, h, y),
            h
        }
        function Pp(h, u, m) {
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
            if (R[0]in m)
                b = R[0];
            else {
                for (x in m) {
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
                m[b]
        }
        function Mp(h, u, m, y) {
            var x, b, w, M, R, F = {}, H = h.dataTypes.slice();
            if (H[1])
                for (w in h.converters)
                    F[w.toLowerCase()] = h.converters[w];
            for (b = H.shift(); b; )
                if (h.responseFields[b] && (m[h.responseFields[b]] = u),
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
                url: In.href,
                type: "GET",
                isLocal: Cp.test(In.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Zl,
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
                return u ? ao(ao(h, d.ajaxSettings), u) : ao(d.ajaxSettings, h)
            },
            ajaxPrefilter: Ql(Kl),
            ajaxTransport: Ql(no),
            ajax: function(h, u) {
                typeof h == "object" && (u = h,
                h = void 0),
                u = u || {};
                var m, y, x, b, w, M, R, F, H, X, U = d.ajaxSetup({}, u), Y = U.context || U, wt = U.context && (Y.nodeType || Y.jquery) ? d(Y) : d.event, Ht = d.Deferred(), Rt = d.Callbacks("once memory"), Te = U.statusCode || {}, ce = {}, gr = {}, mr = "canceled", Ut = {
                    readyState: 0,
                    getResponseHeader: function($t) {
                        var se;
                        if (R) {
                            if (!b)
                                for (b = {}; se = Sp.exec(x); )
                                    b[se[1].toLowerCase() + " "] = (b[se[1].toLowerCase() + " "] || []).concat(se[2]);
                            se = b[$t.toLowerCase() + " "]
                        }
                        return se == null ? null : se.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return R ? x : null
                    },
                    setRequestHeader: function($t, se) {
                        return R == null && ($t = gr[$t.toLowerCase()] = gr[$t.toLowerCase()] || $t,
                        ce[$t] = se),
                        this
                    },
                    overrideMimeType: function($t) {
                        return R == null && (U.mimeType = $t),
                        this
                    },
                    statusCode: function($t) {
                        var se;
                        if ($t)
                            if (R)
                                Ut.always($t[Ut.status]);
                            else
                                for (se in $t)
                                    Te[se] = [Te[se], $t[se]];
                        return this
                    },
                    abort: function($t) {
                        var se = $t || mr;
                        return m && m.abort(se),
                        yi(0, se),
                        this
                    }
                };
                if (Ht.promise(Ut),
                U.url = ((h || U.url || In.href) + "").replace(Rp, In.protocol + "//"),
                U.type = u.method || u.type || U.method || U.type,
                U.dataTypes = (U.dataType || "*").toLowerCase().match(Dt) || [""],
                U.crossDomain == null) {
                    M = E.createElement("a");
                    try {
                        M.href = U.url,
                        M.href = M.href,
                        U.crossDomain = so.protocol + "//" + so.host != M.protocol + "//" + M.host
                    } catch {
                        U.crossDomain = !0
                    }
                }
                if (U.data && U.processData && typeof U.data != "string" && (U.data = d.param(U.data, U.traditional)),
                Jl(Kl, U, u, Ut),
                R)
                    return Ut;
                F = d.event && U.global,
                F && d.active++ === 0 && d.event.trigger("ajaxStart"),
                U.type = U.type.toUpperCase(),
                U.hasContent = !Ip.test(U.type),
                y = U.url.replace(Ep, ""),
                U.hasContent ? U.data && U.processData && (U.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (U.data = U.data.replace(wp, "+")) : (X = U.url.slice(y.length),
                U.data && (U.processData || typeof U.data == "string") && (y += (ro.test(y) ? "&" : "?") + U.data,
                delete U.data),
                U.cache === !1 && (y = y.replace(Ap, "$1"),
                X = (ro.test(y) ? "&" : "?") + "_=" + Xl.guid++ + X),
                U.url = y + X),
                U.ifModified && (d.lastModified[y] && Ut.setRequestHeader("If-Modified-Since", d.lastModified[y]),
                d.etag[y] && Ut.setRequestHeader("If-None-Match", d.etag[y])),
                (U.data && U.hasContent && U.contentType !== !1 || u.contentType) && Ut.setRequestHeader("Content-Type", U.contentType),
                Ut.setRequestHeader("Accept", U.dataTypes[0] && U.accepts[U.dataTypes[0]] ? U.accepts[U.dataTypes[0]] + (U.dataTypes[0] !== "*" ? ", " + Zl + "; q=0.01" : "") : U.accepts["*"]);
                for (H in U.headers)
                    Ut.setRequestHeader(H, U.headers[H]);
                if (U.beforeSend && (U.beforeSend.call(Y, Ut, U) === !1 || R))
                    return Ut.abort();
                if (mr = "abort",
                Rt.add(U.complete),
                Ut.done(U.success),
                Ut.fail(U.error),
                m = Jl(no, U, u, Ut),
                !m)
                    yi(-1, "No Transport");
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
                        m.send(ce, yi)
                    } catch ($t) {
                        if (R)
                            throw $t;
                        yi(-1, $t)
                    }
                }
                function yi($t, se, Pn, ho) {
                    var yr, Mn, vr, Qr, Jr, je = se;
                    R || (R = !0,
                    w && t.clearTimeout(w),
                    m = void 0,
                    x = ho || "",
                    Ut.readyState = $t > 0 ? 4 : 0,
                    yr = $t >= 200 && $t < 300 || $t === 304,
                    Pn && (Qr = Pp(U, Ut, Pn)),
                    !yr && d.inArray("script", U.dataTypes) > -1 && d.inArray("json", U.dataTypes) < 0 && (U.converters["text script"] = function() {}
                    ),
                    Qr = Mp(U, Qr, Ut, yr),
                    yr ? (U.ifModified && (Jr = Ut.getResponseHeader("Last-Modified"),
                    Jr && (d.lastModified[y] = Jr),
                    Jr = Ut.getResponseHeader("etag"),
                    Jr && (d.etag[y] = Jr)),
                    $t === 204 || U.type === "HEAD" ? je = "nocontent" : $t === 304 ? je = "notmodified" : (je = Qr.state,
                    Mn = Qr.data,
                    vr = Qr.error,
                    yr = !vr)) : (vr = je,
                    ($t || !je) && (je = "error",
                    $t < 0 && ($t = 0))),
                    Ut.status = $t,
                    Ut.statusText = (se || je) + "",
                    yr ? Ht.resolveWith(Y, [Mn, je, Ut]) : Ht.rejectWith(Y, [Ut, je, vr]),
                    Ut.statusCode(Te),
                    Te = void 0,
                    F && wt.trigger(yr ? "ajaxSuccess" : "ajaxError", [Ut, U, yr ? Mn : vr]),
                    Rt.fireWith(Y, [Ut, je]),
                    F && (wt.trigger("ajaxComplete", [Ut, U]),
                    --d.active || d.event.trigger("ajaxStop")))
                }
                return Ut
            },
            getJSON: function(h, u, m) {
                return d.get(h, u, m, "json")
            },
            getScript: function(h, u) {
                return d.get(h, void 0, u, "script")
            }
        }),
        d.each(["get", "post"], function(h, u) {
            d[u] = function(m, y, x, b) {
                return T(y) && (b = b || x,
                x = y,
                y = void 0),
                d.ajax(d.extend({
                    url: m,
                    type: u,
                    dataType: b,
                    data: y,
                    success: x
                }, d.isPlainObject(m) && m))
            }
        }),
        d.ajaxPrefilter(function(h) {
            var u;
            for (u in h.headers)
                u.toLowerCase() === "content-type" && (h.contentType = h.headers[u] || "")
        }),
        d._evalUrl = function(h, u, m) {
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
                    d.globalEval(y, u, m)
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
                    for (var m = this; m.firstElementChild; )
                        m = m.firstElementChild;
                    return m
                }).append(this)),
                this
            },
            wrapInner: function(h) {
                return T(h) ? this.each(function(u) {
                    d(this).wrapInner(h.call(this, u))
                }) : this.each(function() {
                    var u = d(this)
                      , m = u.contents();
                    m.length ? m.wrapAll(h) : u.append(h)
                })
            },
            wrap: function(h) {
                var u = T(h);
                return this.each(function(m) {
                    d(this).wrapAll(u ? h.call(this, m) : h)
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
        var Dp = {
            0: 200,
            1223: 204
        }
          , Rn = d.ajaxSettings.xhr();
        _.cors = !!Rn && "withCredentials"in Rn,
        _.ajax = Rn = !!Rn,
        d.ajaxTransport(function(h) {
            var u, m;
            if (_.cors || Rn && !h.crossDomain)
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
                                u && (u = m = w.onload = w.onerror = w.onabort = w.ontimeout = w.onreadystatechange = null,
                                M === "abort" ? w.abort() : M === "error" ? typeof w.status != "number" ? x(0, "error") : x(w.status, w.statusText) : x(Dp[w.status] || w.status, w.statusText, (w.responseType || "text") !== "text" || typeof w.responseText != "string" ? {
                                    binary: w.response
                                } : {
                                    text: w.responseText
                                }, w.getAllResponseHeaders()))
                            }
                        }
                        ,
                        w.onload = u(),
                        m = w.onerror = w.ontimeout = u("error"),
                        w.onabort !== void 0 ? w.onabort = m : w.onreadystatechange = function() {
                            w.readyState === 4 && t.setTimeout(function() {
                                u && m()
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
                var u, m;
                return {
                    send: function(y, x) {
                        u = d("<script>").attr(h.scriptAttrs || {}).prop({
                            charset: h.scriptCharset,
                            src: h.url
                        }).on("load error", m = function(b) {
                            u.remove(),
                            m = null,
                            b && x(b.type === "error" ? 404 : 200, b.type)
                        }
                        ),
                        E.head.appendChild(u[0])
                    },
                    abort: function() {
                        m && m()
                    }
                }
            }
        });
        var tu = []
          , oo = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var h = tu.pop() || d.expando + "_" + Xl.guid++;
                return this[h] = !0,
                h
            }
        }),
        d.ajaxPrefilter("json jsonp", function(h, u, m) {
            var y, x, b, w = h.jsonp !== !1 && (oo.test(h.url) ? "url" : typeof h.data == "string" && (h.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && oo.test(h.data) && "data");
            if (w || h.dataTypes[0] === "jsonp")
                return y = h.jsonpCallback = T(h.jsonpCallback) ? h.jsonpCallback() : h.jsonpCallback,
                w ? h[w] = h[w].replace(oo, "$1" + y) : h.jsonp !== !1 && (h.url += (ro.test(h.url) ? "&" : "?") + h.jsonp + "=" + y),
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
                m.always(function() {
                    x === void 0 ? d(t).removeProp(y) : t[y] = x,
                    h[y] && (h.jsonpCallback = u.jsonpCallback,
                    tu.push(y)),
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
        d.parseHTML = function(h, u, m) {
            if (typeof h != "string")
                return [];
            typeof u == "boolean" && (m = u,
            u = !1);
            var y, x, b;
            return u || (_.createHTMLDocument ? (u = E.implementation.createHTMLDocument(""),
            y = u.createElement("base"),
            y.href = E.location.href,
            u.head.appendChild(y)) : u = E),
            x = xt.exec(h),
            b = !m && [],
            x ? [u.createElement(x[1])] : (x = An([h], u, b),
            b && b.length && d(b).remove(),
            d.merge([], x.childNodes))
        }
        ,
        d.fn.load = function(h, u, m) {
            var y, x, b, w = this, M = h.indexOf(" ");
            return M > -1 && (y = gi(h.slice(M)),
            h = h.slice(0, M)),
            T(u) ? (m = u,
            u = void 0) : u && typeof u == "object" && (x = "POST"),
            w.length > 0 && d.ajax({
                url: h,
                type: x || "GET",
                dataType: "html",
                data: u
            }).done(function(R) {
                b = arguments,
                w.html(y ? d("<div>").append(d.parseHTML(R)).find(y) : R)
            }).always(m && function(R, F) {
                w.each(function() {
                    m.apply(this, b || [R.responseText, F, R])
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
            setOffset: function(h, u, m) {
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
                T(u) && (u = u.call(h, m, d.extend({}, M))),
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
                var u, m, y = this[0];
                if (y)
                    return y.getClientRects().length ? (u = y.getBoundingClientRect(),
                    m = y.ownerDocument.defaultView,
                    {
                        top: u.top + m.pageYOffset,
                        left: u.left + m.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var h, u, m, y = this[0], x = {
                        top: 0,
                        left: 0
                    };
                    if (d.css(y, "position") === "fixed")
                        u = y.getBoundingClientRect();
                    else {
                        for (u = this.offset(),
                        m = y.ownerDocument,
                        h = y.offsetParent || m.documentElement; h && (h === m.body || h === m.documentElement) && d.css(h, "position") === "static"; )
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
            var m = u === "pageYOffset";
            d.fn[h] = function(y) {
                return oe(this, function(x, b, w) {
                    var M;
                    if (A(x) ? M = x : x.nodeType === 9 && (M = x.defaultView),
                    w === void 0)
                        return M ? M[u] : x[b];
                    M ? M.scrollTo(m ? M.pageXOffset : w, m ? w : M.pageYOffset) : x[b] = w
                }, h, y, arguments.length)
            }
        }),
        d.each(["top", "left"], function(h, u) {
            d.cssHooks[u] = Nl(_.pixelPosition, function(m, y) {
                if (y)
                    return y = Sn(m, u),
                    Ka.test(y) ? d(m).position()[u] + "px" : y
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
            }, function(m, y) {
                d.fn[y] = function(x, b) {
                    var w = arguments.length && (m || typeof x != "boolean")
                      , M = m || (x === !0 || b === !0 ? "margin" : "border");
                    return oe(this, function(R, F, H) {
                        var X;
                        return A(R) ? y.indexOf("outer") === 0 ? R["inner" + h] : R.document.documentElement["client" + h] : R.nodeType === 9 ? (X = R.documentElement,
                        Math.max(R.body["scroll" + h], X["scroll" + h], R.body["offset" + h], X["offset" + h], X["client" + h])) : H === void 0 ? d.css(R, F, M) : d.style(R, F, H, M)
                    }, u, w ? x : void 0, w)
                }
            })
        }),
        d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(h, u) {
            d.fn[u] = function(m) {
                return this.on(u, m)
            }
        }),
        d.fn.extend({
            bind: function(h, u, m) {
                return this.on(h, null, u, m)
            },
            unbind: function(h, u) {
                return this.off(h, null, u)
            },
            delegate: function(h, u, m, y) {
                return this.on(u, h, m, y)
            },
            undelegate: function(h, u, m) {
                return arguments.length === 1 ? this.off(h, "**") : this.off(u, h || "**", m)
            },
            hover: function(h, u) {
                return this.on("mouseenter", h).on("mouseleave", u || h)
            }
        }),
        d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(h, u) {
            d.fn[u] = function(m, y) {
                return arguments.length > 0 ? this.on(u, null, m, y) : this.trigger(u)
            }
        });
        var Bp = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
        d.proxy = function(h, u) {
            var m, y, x;
            if (typeof u == "string" && (m = h[u],
            u = h,
            h = m),
            !!T(h))
                return y = s.call(arguments, 2),
                x = function() {
                    return h.apply(u || this, y.concat(s.call(arguments)))
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
            return h == null ? "" : (h + "").replace(Bp, "$1")
        }
        ;
        var Fp = t.jQuery
          , Op = t.$;
        return d.noConflict = function(h) {
            return t.$ === d && (t.$ = Op),
            h && t.jQuery === d && (t.jQuery = Fp),
            d
        }
        ,
        typeof e > "u" && (t.jQuery = t.$ = d),
        d
    })
}
)(jc);
var Wp = jc.exports;
const p1 = Ca(Wp);
var Oi = (i => (i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY",
i[i.WEBGL = 1] = "WEBGL",
i[i.WEBGL2 = 2] = "WEBGL2",
i))(Oi || {})
  , ul = (i => (i[i.UNKNOWN = 0] = "UNKNOWN",
i[i.WEBGL = 1] = "WEBGL",
i[i.CANVAS = 2] = "CANVAS",
i))(ul || {})
  , uh = (i => (i[i.COLOR = 16384] = "COLOR",
i[i.DEPTH = 256] = "DEPTH",
i[i.STENCIL = 1024] = "STENCIL",
i))(uh || {})
  , q = (i => (i[i.NORMAL = 0] = "NORMAL",
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
i))(q || {})
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
  , hn = (i => (i[i.TEXTURE_2D = 3553] = "TEXTURE_2D",
i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP",
i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY",
i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X",
i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X",
i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y",
i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y",
i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z",
i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z",
i))(hn || {})
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
  , cl = (i => (i[i.AUTO = 0] = "AUTO",
i[i.MANUAL = 1] = "MANUAL",
i))(cl || {})
  , Ye = (i => (i.LOW = "lowp",
i.MEDIUM = "mediump",
i.HIGH = "highp",
i))(Ye || {})
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
const jp = {
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
  , st = {
    ADAPTER: jp,
    RESOLUTION: 1,
    CREATE_IMAGE_BITMAP: !1,
    ROUND_PIXELS: !1
};
var mo = /iPhone/i
  , nu = /iPod/i
  , su = /iPad/i
  , au = /\biOS-universal(?:.+)Mac\b/i
  , yo = /\bAndroid(?:.+)Mobile\b/i
  , ou = /Android/i
  , Wi = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
  , Es = /Silk/i
  , Vr = /Windows Phone/i
  , hu = /\bWindows(?:.+)ARM\b/i
  , lu = /BlackBerry/i
  , uu = /BB10/i
  , cu = /Opera Mini/i
  , du = /\b(CriOS|Chrome)(?:.+)Mobile/i
  , fu = /Mobile(?:.+)Firefox\b/i
  , pu = function(i) {
    return typeof i < "u" && i.platform === "MacIntel" && typeof i.maxTouchPoints == "number" && i.maxTouchPoints > 1 && typeof MSStream > "u"
};
function Xp(i) {
    return function(t) {
        return t.test(i)
    }
}
function gu(i) {
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
    var n = Xp(e)
      , s = {
        apple: {
            phone: n(mo) && !n(Vr),
            ipod: n(nu),
            tablet: !n(mo) && (n(su) || pu(t)) && !n(Vr),
            universal: n(au),
            device: (n(mo) || n(nu) || n(su) || n(au) || pu(t)) && !n(Vr)
        },
        amazon: {
            phone: n(Wi),
            tablet: !n(Wi) && n(Es),
            device: n(Wi) || n(Es)
        },
        android: {
            phone: !n(Vr) && n(Wi) || !n(Vr) && n(yo),
            tablet: !n(Vr) && !n(Wi) && !n(yo) && (n(Es) || n(ou)),
            device: !n(Vr) && (n(Wi) || n(Es) || n(yo) || n(ou)) || n(/\bokhttp\b/i)
        },
        windows: {
            phone: n(Vr),
            tablet: n(hu),
            device: n(Vr) || n(hu)
        },
        other: {
            blackberry: n(lu),
            blackberry10: n(uu),
            opera: n(cu),
            firefox: n(fu),
            chrome: n(du),
            device: n(lu) || n(uu) || n(cu) || n(fu) || n(du)
        },
        any: !1,
        phone: !1,
        tablet: !1
    };
    return s.any = s.apple.device || s.android.device || s.windows.device || s.other.device,
    s.phone = s.apple.phone || s.android.phone || s.windows.phone,
    s.tablet = s.apple.tablet || s.android.tablet || s.windows.tablet,
    s
}
const zp = gu.default ?? gu
  , Pr = zp(globalThis.navigator);
st.RETINA_PREFIX = /@([0-9\.]+)x/;
st.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var Xc = {
    exports: {}
};
(function(i) {
    var t = Object.prototype.hasOwnProperty
      , e = "~";
    function r() {}
    Object.create && (r.prototype = Object.create(null),
    new r().__proto__ || (e = !1));
    function n(l, c, p) {
        this.fn = l,
        this.context = c,
        this.once = p || !1
    }
    function s(l, c, p, g, f) {
        if (typeof p != "function")
            throw new TypeError("The listener must be a function");
        var v = new n(p,g || l,f)
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
        var c = [], p, g;
        if (this._eventsCount === 0)
            return c;
        for (g in p = this._events)
            t.call(p, g) && c.push(e ? g.slice(1) : g);
        return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(p)) : c
    }
    ,
    o.prototype.listeners = function(c) {
        var p = e ? e + c : c
          , g = this._events[p];
        if (!g)
            return [];
        if (g.fn)
            return [g.fn];
        for (var f = 0, v = g.length, _ = new Array(v); f < v; f++)
            _[f] = g[f].fn;
        return _
    }
    ,
    o.prototype.listenerCount = function(c) {
        var p = e ? e + c : c
          , g = this._events[p];
        return g ? g.fn ? 1 : g.length : 0
    }
    ,
    o.prototype.emit = function(c, p, g, f, v, _) {
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
                return A.fn.call(A.context, p, g),
                !0;
            case 4:
                return A.fn.call(A.context, p, g, f),
                !0;
            case 5:
                return A.fn.call(A.context, p, g, f, v),
                !0;
            case 6:
                return A.fn.call(A.context, p, g, f, v, _),
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
                    A[S].fn.call(A[S].context, p, g);
                    break;
                case 4:
                    A[S].fn.call(A[S].context, p, g, f);
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
    o.prototype.on = function(c, p, g) {
        return s(this, c, p, g, !1)
    }
    ,
    o.prototype.once = function(c, p, g) {
        return s(this, c, p, g, !0)
    }
    ,
    o.prototype.removeListener = function(c, p, g, f) {
        var v = e ? e + c : c;
        if (!this._events[v])
            return this;
        if (!p)
            return a(this, v),
            this;
        var _ = this._events[v];
        if (_.fn)
            _.fn === p && (!f || _.once) && (!g || _.context === g) && a(this, v);
        else {
            for (var T = 0, A = [], E = _.length; T < E; T++)
                (_[T].fn !== p || f && !_[T].once || g && _[T].context !== g) && A.push(_[T]);
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
)(Xc);
var qp = Xc.exports;
const xn = Ca(qp);
var dl = {
    exports: {}
};
dl.exports = Ia;
dl.exports.default = Ia;
function Ia(i, t, e) {
    e = e || 2;
    var r = t && t.length
      , n = r ? t[0] * e : i.length
      , s = zc(i, 0, n, e, !0)
      , a = [];
    if (!s || s.next === s.prev)
        return a;
    var o, l, c, p, g, f, v;
    if (r && (s = Jp(i, t, s, e)),
    i.length > 80 * e) {
        o = c = i[0],
        l = p = i[1];
        for (var _ = e; _ < n; _ += e)
            g = i[_],
            f = i[_ + 1],
            g < o && (o = g),
            f < l && (l = f),
            g > c && (c = g),
            f > p && (p = f);
        v = Math.max(c - o, p - l),
        v = v !== 0 ? 32767 / v : 0
    }
    return Jn(s, a, e, o, l, v, 0),
    a
}
function zc(i, t, e, r, n) {
    var s, a;
    if (n === fh(i, t, e, r) > 0)
        for (s = t; s < e; s += r)
            a = mu(s, i[s], i[s + 1], a);
    else
        for (s = e - r; s >= t; s -= r)
            a = mu(s, i[s], i[s + 1], a);
    return a && Ra(a, a.next) && (es(a),
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
        !e.steiner && (Ra(e, e.next) || ne(e.prev, e, e.next) === 0)) {
            if (es(e),
            e = t = e.prev,
            e === e.next)
                break;
            r = !0
        } else
            e = e.next;
    while (r || e !== t);
    return t
}
function Jn(i, t, e, r, n, s, a) {
    if (i) {
        !a && s && ng(i, r, n, s);
        for (var o = i, l, c; i.prev !== i.next; ) {
            if (l = i.prev,
            c = i.next,
            s ? Kp(i, r, n, s) : Yp(i)) {
                t.push(l.i / e | 0),
                t.push(i.i / e | 0),
                t.push(c.i / e | 0),
                es(i),
                i = c.next,
                o = c.next;
                continue
            }
            if (i = c,
            i === o) {
                a ? a === 1 ? (i = Zp(Bi(i), t, e),
                Jn(i, t, e, r, n, s, 2)) : a === 2 && Qp(i, t, e, r, n, s) : Jn(Bi(i), t, e, r, n, s, 1);
                break
            }
        }
    }
}
function Yp(i) {
    var t = i.prev
      , e = i
      , r = i.next;
    if (ne(t, e, r) >= 0)
        return !1;
    for (var n = t.x, s = e.x, a = r.x, o = t.y, l = e.y, c = r.y, p = n < s ? n < a ? n : a : s < a ? s : a, g = o < l ? o < c ? o : c : l < c ? l : c, f = n > s ? n > a ? n : a : s > a ? s : a, v = o > l ? o > c ? o : c : l > c ? l : c, _ = r.next; _ !== t; ) {
        if (_.x >= p && _.x <= f && _.y >= g && _.y <= v && sn(n, o, s, l, a, c, _.x, _.y) && ne(_.prev, _, _.next) >= 0)
            return !1;
        _ = _.next
    }
    return !0
}
function Kp(i, t, e, r) {
    var n = i.prev
      , s = i
      , a = i.next;
    if (ne(n, s, a) >= 0)
        return !1;
    for (var o = n.x, l = s.x, c = a.x, p = n.y, g = s.y, f = a.y, v = o < l ? o < c ? o : c : l < c ? l : c, _ = p < g ? p < f ? p : f : g < f ? g : f, T = o > l ? o > c ? o : c : l > c ? l : c, A = p > g ? p > f ? p : f : g > f ? g : f, E = ch(v, _, t, e, r), I = ch(T, A, t, e, r), S = i.prevZ, P = i.nextZ; S && S.z >= E && P && P.z <= I; ) {
        if (S.x >= v && S.x <= T && S.y >= _ && S.y <= A && S !== n && S !== a && sn(o, p, l, g, c, f, S.x, S.y) && ne(S.prev, S, S.next) >= 0 || (S = S.prevZ,
        P.x >= v && P.x <= T && P.y >= _ && P.y <= A && P !== n && P !== a && sn(o, p, l, g, c, f, P.x, P.y) && ne(P.prev, P, P.next) >= 0))
            return !1;
        P = P.nextZ
    }
    for (; S && S.z >= E; ) {
        if (S.x >= v && S.x <= T && S.y >= _ && S.y <= A && S !== n && S !== a && sn(o, p, l, g, c, f, S.x, S.y) && ne(S.prev, S, S.next) >= 0)
            return !1;
        S = S.prevZ
    }
    for (; P && P.z <= I; ) {
        if (P.x >= v && P.x <= T && P.y >= _ && P.y <= A && P !== n && P !== a && sn(o, p, l, g, c, f, P.x, P.y) && ne(P.prev, P, P.next) >= 0)
            return !1;
        P = P.nextZ
    }
    return !0
}
function Zp(i, t, e) {
    var r = i;
    do {
        var n = r.prev
          , s = r.next.next;
        !Ra(n, s) && qc(n, r, r.next, s) && ts(n, s) && ts(s, n) && (t.push(n.i / e | 0),
        t.push(r.i / e | 0),
        t.push(s.i / e | 0),
        es(r),
        es(r.next),
        r = i = s),
        r = r.next
    } while (r !== i);
    return Bi(r)
}
function Qp(i, t, e, r, n, s) {
    var a = i;
    do {
        for (var o = a.next.next; o !== a.prev; ) {
            if (a.i !== o.i && og(a, o)) {
                var l = Yc(a, o);
                a = Bi(a, a.next),
                l = Bi(l, l.next),
                Jn(a, t, e, r, n, s, 0),
                Jn(l, t, e, r, n, s, 0);
                return
            }
            o = o.next
        }
        a = a.next
    } while (a !== i)
}
function Jp(i, t, e, r) {
    var n = [], s, a, o, l, c;
    for (s = 0,
    a = t.length; s < a; s++)
        o = t[s] * r,
        l = s < a - 1 ? t[s + 1] * r : i.length,
        c = zc(i, o, l, r, !1),
        c === c.next && (c.steiner = !0),
        n.push(ag(c));
    for (n.sort(tg),
    s = 0; s < n.length; s++)
        e = eg(n[s], e);
    return e
}
function tg(i, t) {
    return i.x - t.x
}
function eg(i, t) {
    var e = rg(i, t);
    if (!e)
        return t;
    var r = Yc(e, i);
    return Bi(r, r.next),
    Bi(e, e.next)
}
function rg(i, t) {
    var e = t, r = i.x, n = i.y, s = -1 / 0, a;
    do {
        if (n <= e.y && n >= e.next.y && e.next.y !== e.y) {
            var o = e.x + (n - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
            if (o <= r && o > s && (s = o,
            a = e.x < e.next.x ? e : e.next,
            o === r))
                return a
        }
        e = e.next
    } while (e !== t);
    if (!a)
        return null;
    var l = a, c = a.x, p = a.y, g = 1 / 0, f;
    e = a;
    do
        r >= e.x && e.x >= c && r !== e.x && sn(n < p ? r : s, n, c, p, n < p ? s : r, n, e.x, e.y) && (f = Math.abs(n - e.y) / (r - e.x),
        ts(e, i) && (f < g || f === g && (e.x > a.x || e.x === a.x && ig(a, e))) && (a = e,
        g = f)),
        e = e.next;
    while (e !== l);
    return a
}
function ig(i, t) {
    return ne(i.prev, i, t.prev) < 0 && ne(t.next, i, i.next) < 0
}
function ng(i, t, e, r) {
    var n = i;
    do
        n.z === 0 && (n.z = ch(n.x, n.y, t, e, r)),
        n.prevZ = n.prev,
        n.nextZ = n.next,
        n = n.next;
    while (n !== i);
    n.prevZ.nextZ = null,
    n.prevZ = null,
    sg(n)
}
function sg(i) {
    var t, e, r, n, s, a, o, l, c = 1;
    do {
        for (e = i,
        i = null,
        s = null,
        a = 0; e; ) {
            for (a++,
            r = e,
            o = 0,
            t = 0; t < c && (o++,
            r = r.nextZ,
            !!r); t++)
                ;
            for (l = c; o > 0 || l > 0 && r; )
                o !== 0 && (l === 0 || !r || e.z <= r.z) ? (n = e,
                e = e.nextZ,
                o--) : (n = r,
                r = r.nextZ,
                l--),
                s ? s.nextZ = n : i = n,
                n.prevZ = s,
                s = n;
            e = r
        }
        s.nextZ = null,
        c *= 2
    } while (a > 1);
    return i
}
function ch(i, t, e, r, n) {
    return i = (i - e) * n | 0,
    t = (t - r) * n | 0,
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
function ag(i) {
    var t = i
      , e = i;
    do
        (t.x < e.x || t.x === e.x && t.y < e.y) && (e = t),
        t = t.next;
    while (t !== i);
    return e
}
function sn(i, t, e, r, n, s, a, o) {
    return (n - a) * (t - o) >= (i - a) * (s - o) && (i - a) * (r - o) >= (e - a) * (t - o) && (e - a) * (s - o) >= (n - a) * (r - o)
}
function og(i, t) {
    return i.next.i !== t.i && i.prev.i !== t.i && !hg(i, t) && (ts(i, t) && ts(t, i) && lg(i, t) && (ne(i.prev, i, t.prev) || ne(i, t.prev, t)) || Ra(i, t) && ne(i.prev, i, i.next) > 0 && ne(t.prev, t, t.next) > 0)
}
function ne(i, t, e) {
    return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y)
}
function Ra(i, t) {
    return i.x === t.x && i.y === t.y
}
function qc(i, t, e, r) {
    var n = Ss(ne(i, t, e))
      , s = Ss(ne(i, t, r))
      , a = Ss(ne(e, r, i))
      , o = Ss(ne(e, r, t));
    return !!(n !== s && a !== o || n === 0 && As(i, e, t) || s === 0 && As(i, r, t) || a === 0 && As(e, i, r) || o === 0 && As(e, t, r))
}
function As(i, t, e) {
    return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y)
}
function Ss(i) {
    return i > 0 ? 1 : i < 0 ? -1 : 0
}
function hg(i, t) {
    var e = i;
    do {
        if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && qc(e, e.next, i, t))
            return !0;
        e = e.next
    } while (e !== i);
    return !1
}
function ts(i, t) {
    return ne(i.prev, i, i.next) < 0 ? ne(i, t, i.next) >= 0 && ne(i, i.prev, t) >= 0 : ne(i, t, i.prev) < 0 || ne(i, i.next, t) < 0
}
function lg(i, t) {
    var e = i
      , r = !1
      , n = (i.x + t.x) / 2
      , s = (i.y + t.y) / 2;
    do
        e.y > s != e.next.y > s && e.next.y !== e.y && n < (e.next.x - e.x) * (s - e.y) / (e.next.y - e.y) + e.x && (r = !r),
        e = e.next;
    while (e !== i);
    return r
}
function Yc(i, t) {
    var e = new dh(i.i,i.x,i.y)
      , r = new dh(t.i,t.x,t.y)
      , n = i.next
      , s = t.prev;
    return i.next = t,
    t.prev = i,
    e.next = n,
    n.prev = e,
    r.next = e,
    e.prev = r,
    s.next = r,
    r.prev = s,
    r
}
function mu(i, t, e, r) {
    var n = new dh(i,t,e);
    return r ? (n.next = r.next,
    n.prev = r,
    r.next.prev = n,
    r.next = n) : (n.prev = n,
    n.next = n),
    n
}
function es(i) {
    i.next.prev = i.prev,
    i.prev.next = i.next,
    i.prevZ && (i.prevZ.nextZ = i.nextZ),
    i.nextZ && (i.nextZ.prevZ = i.prevZ)
}
function dh(i, t, e) {
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
Ia.deviation = function(i, t, e, r) {
    var n = t && t.length
      , s = n ? t[0] * e : i.length
      , a = Math.abs(fh(i, 0, s, e));
    if (n)
        for (var o = 0, l = t.length; o < l; o++) {
            var c = t[o] * e
              , p = o < l - 1 ? t[o + 1] * e : i.length;
            a -= Math.abs(fh(i, c, p, e))
        }
    var g = 0;
    for (o = 0; o < r.length; o += 3) {
        var f = r[o] * e
          , v = r[o + 1] * e
          , _ = r[o + 2] * e;
        g += Math.abs((i[f] - i[_]) * (i[v + 1] - i[f + 1]) - (i[f] - i[v]) * (i[_ + 1] - i[f + 1]))
    }
    return a === 0 && g === 0 ? 0 : Math.abs((g - a) / a)
}
;
function fh(i, t, e, r) {
    for (var n = 0, s = t, a = e - r; s < e; s += r)
        n += (i[a] - i[s]) * (i[s + 1] + i[a + 1]),
        a = s;
    return n
}
Ia.flatten = function(i) {
    for (var t = i[0][0].length, e = {
        vertices: [],
        holes: [],
        dimensions: t
    }, r = 0, n = 0; n < i.length; n++) {
        for (var s = 0; s < i[n].length; s++)
            for (var a = 0; a < t; a++)
                e.vertices.push(i[n][s][a]);
        n > 0 && (r += i[n - 1].length,
        e.holes.push(r))
    }
    return e
}
;
var ug = dl.exports;
const Kc = Ca(ug);
var ha = {
    exports: {}
};
/*! https://mths.be/punycode v1.4.1 by @mathias */
ha.exports;
(function(i, t) {
    (function(e) {
        var r = t && !t.nodeType && t
          , n = i && !i.nodeType && i
          , s = typeof on == "object" && on;
        (s.global === s || s.window === s || s.self === s) && (e = s);
        var a, o = 2147483647, l = 36, c = 1, p = 26, g = 38, f = 700, v = 72, _ = 128, T = "-", A = /^xn--/, E = /[^\x20-\x7E]/, I = /[\x2E\u3002\uFF0E\uFF61]/g, S = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        }, P = l - c, k = Math.floor, V = String.fromCharCode, d;
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
        function $(Q) {
            return N(Q, function(K) {
                var xt = "";
                return K > 65535 && (K -= 65536,
                xt += V(K >>> 10 & 1023 | 55296),
                K = 56320 | K & 1023),
                xt += V(K),
                xt
            }).join("")
        }
        function B(Q) {
            return Q - 48 < 10 ? Q - 22 : Q - 65 < 26 ? Q - 65 : Q - 97 < 26 ? Q - 97 : l
        }
        function W(Q, K) {
            return Q + 22 + 75 * (Q < 26) - ((K != 0) << 5)
        }
        function tt(Q, K, xt) {
            var Ct = 0;
            for (Q = xt ? k(Q / f) : Q >> 1,
            Q += k(Q / K); Q > P * p >> 1; Ct += l)
                Q = k(Q / P);
            return k(Ct + (P + 1) * Q / (Q + g))
        }
        function at(Q) {
            var K = [], xt = Q.length, Ct, It = 0, kt = _, Ot = v, Mt, Vt, Yt, Dt, qt, _t, Kt, Xt, me;
            for (Mt = Q.lastIndexOf(T),
            Mt < 0 && (Mt = 0),
            Vt = 0; Vt < Mt; ++Vt)
                Q.charCodeAt(Vt) >= 128 && O("not-basic"),
                K.push(Q.charCodeAt(Vt));
            for (Yt = Mt > 0 ? Mt + 1 : 0; Yt < xt; ) {
                for (Dt = It,
                qt = 1,
                _t = l; Yt >= xt && O("invalid-input"),
                Kt = B(Q.charCodeAt(Yt++)),
                (Kt >= l || Kt > k((o - It) / qt)) && O("overflow"),
                It += Kt * qt,
                Xt = _t <= Ot ? c : _t >= Ot + p ? p : _t - Ot,
                !(Kt < Xt); _t += l)
                    me = l - Xt,
                    qt > k(o / me) && O("overflow"),
                    qt *= me;
                Ct = K.length + 1,
                Ot = tt(It - Dt, Ct, Dt == 0),
                k(It / Ct) > o - kt && O("overflow"),
                kt += k(It / Ct),
                It %= Ct,
                K.splice(It++, 0, kt)
            }
            return $(K)
        }
        function nt(Q) {
            var K, xt, Ct, It, kt, Ot, Mt, Vt, Yt, Dt, qt, _t = [], Kt, Xt, me, Ee;
            for (Q = J(Q),
            Kt = Q.length,
            K = _,
            xt = 0,
            kt = v,
            Ot = 0; Ot < Kt; ++Ot)
                qt = Q[Ot],
                qt < 128 && _t.push(V(qt));
            for (Ct = It = _t.length,
            It && _t.push(T); Ct < Kt; ) {
                for (Mt = o,
                Ot = 0; Ot < Kt; ++Ot)
                    qt = Q[Ot],
                    qt >= K && qt < Mt && (Mt = qt);
                for (Xt = Ct + 1,
                Mt - K > k((o - xt) / Xt) && O("overflow"),
                xt += (Mt - K) * Xt,
                K = Mt,
                Ot = 0; Ot < Kt; ++Ot)
                    if (qt = Q[Ot],
                    qt < K && ++xt > o && O("overflow"),
                    qt == K) {
                        for (Vt = xt,
                        Yt = l; Dt = Yt <= kt ? c : Yt >= kt + p ? p : Yt - kt,
                        !(Vt < Dt); Yt += l)
                            Ee = Vt - Dt,
                            me = l - Dt,
                            _t.push(V(W(Dt + Ee % me, 0))),
                            Vt = k(Ee / me);
                        _t.push(V(W(Vt, 0))),
                        kt = tt(xt, Xt, Ct == It),
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
                return E.test(K) ? "xn--" + nt(K) : K
            })
        }
        if (a = {
            version: "1.4.1",
            ucs2: {
                decode: J,
                encode: $
            },
            decode: at,
            encode: nt,
            toASCII: Ft,
            toUnicode: dt
        },
        r && n)
            if (i.exports == r)
                n.exports = a;
            else
                for (d in a)
                    a.hasOwnProperty(d) && (r[d] = a[d]);
        else
            e.punycode = a
    }
    )(on)
}
)(ha, ha.exports);
var cg = ha.exports
  , ci = TypeError;
const dg = {}
  , fg = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dg
}, Symbol.toStringTag, {
    value: "Module"
}))
  , pg = Vp(fg);
var fl = typeof Map == "function" && Map.prototype
  , vo = Object.getOwnPropertyDescriptor && fl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
  , la = fl && vo && typeof vo.get == "function" ? vo.get : null
  , yu = fl && Map.prototype.forEach
  , pl = typeof Set == "function" && Set.prototype
  , _o = Object.getOwnPropertyDescriptor && pl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
  , ua = pl && _o && typeof _o.get == "function" ? _o.get : null
  , vu = pl && Set.prototype.forEach
  , gg = typeof WeakMap == "function" && WeakMap.prototype
  , Yn = gg ? WeakMap.prototype.has : null
  , mg = typeof WeakSet == "function" && WeakSet.prototype
  , Kn = mg ? WeakSet.prototype.has : null
  , yg = typeof WeakRef == "function" && WeakRef.prototype
  , _u = yg ? WeakRef.prototype.deref : null
  , vg = Boolean.prototype.valueOf
  , _g = Object.prototype.toString
  , xg = Function.prototype.toString
  , bg = String.prototype.match
  , gl = String.prototype.slice
  , ai = String.prototype.replace
  , Tg = String.prototype.toUpperCase
  , xu = String.prototype.toLowerCase
  , Zc = RegExp.prototype.test
  , bu = Array.prototype.concat
  , Ir = Array.prototype.join
  , wg = Array.prototype.slice
  , Tu = Math.floor
  , ph = typeof BigInt == "function" ? BigInt.prototype.valueOf : null
  , xo = Object.getOwnPropertySymbols
  , gh = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null
  , gn = typeof Symbol == "function" && typeof Symbol.iterator == "object"
  , Ie = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === gn || !0) ? Symbol.toStringTag : null
  , Qc = Object.prototype.propertyIsEnumerable
  , wu = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(i) {
    return i.__proto__
}
: null);
function Eu(i, t) {
    if (i === 1 / 0 || i === -1 / 0 || i !== i || i && i > -1e3 && i < 1e3 || Zc.call(/e/, t))
        return t;
    var e = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof i == "number") {
        var r = i < 0 ? -Tu(-i) : Tu(i);
        if (r !== i) {
            var n = String(r)
              , s = gl.call(t, n.length + 1);
            return ai.call(n, e, "$&_") + "." + ai.call(ai.call(s, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return ai.call(t, e, "$&_")
}
var mh = pg
  , Au = mh.custom
  , Su = ed(Au) ? Au : null
  , Jc = {
    __proto__: null,
    double: '"',
    single: "'"
}
  , Eg = {
    __proto__: null,
    double: /(["\\])/g,
    single: /(['\\])/g
}
  , Pa = function i(t, e, r, n) {
    var s = e || {};
    if (jr(s, "quoteStyle") && !jr(Jc, s.quoteStyle))
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (jr(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var a = jr(s, "customInspect") ? s.customInspect : !0;
    if (typeof a != "boolean" && a !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (jr(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (jr(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var o = s.numericSeparator;
    if (typeof t > "u")
        return "undefined";
    if (t === null)
        return "null";
    if (typeof t == "boolean")
        return t ? "true" : "false";
    if (typeof t == "string")
        return id(t, s);
    if (typeof t == "number") {
        if (t === 0)
            return 1 / 0 / t > 0 ? "0" : "-0";
        var l = String(t);
        return o ? Eu(t, l) : l
    }
    if (typeof t == "bigint") {
        var c = String(t) + "n";
        return o ? Eu(t, c) : c
    }
    var p = typeof s.depth > "u" ? 5 : s.depth;
    if (typeof r > "u" && (r = 0),
    r >= p && p > 0 && typeof t == "object")
        return yh(t) ? "[Array]" : "[Object]";
    var g = $g(s, r);
    if (typeof n > "u")
        n = [];
    else if (rd(n, t) >= 0)
        return "[Circular]";
    function f(B, W, tt) {
        if (W && (n = wg.call(n),
        n.push(W)),
        tt) {
            var at = {
                depth: s.depth
            };
            return jr(s, "quoteStyle") && (at.quoteStyle = s.quoteStyle),
            i(B, at, r + 1, n)
        }
        return i(B, s, r + 1, n)
    }
    if (typeof t == "function" && !Cu(t)) {
        var v = Bg(t)
          , _ = Cs(t, f);
        return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (_.length > 0 ? " { " + Ir.call(_, ", ") + " }" : "")
    }
    if (ed(t)) {
        var T = gn ? ai.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : gh.call(t);
        return typeof t == "object" && !gn ? Bn(T) : T
    }
    if (Ug(t)) {
        for (var A = "<" + xu.call(String(t.nodeName)), E = t.attributes || [], I = 0; I < E.length; I++)
            A += " " + E[I].name + "=" + td(Ag(E[I].value), "double", s);
        return A += ">",
        t.childNodes && t.childNodes.length && (A += "..."),
        A += "</" + xu.call(String(t.nodeName)) + ">",
        A
    }
    if (yh(t)) {
        if (t.length === 0)
            return "[]";
        var S = Cs(t, f);
        return g && !Hg(S) ? "[" + vh(S, g) + "]" : "[ " + Ir.call(S, ", ") + " ]"
    }
    if (Cg(t)) {
        var P = Cs(t, f);
        return !("cause"in Error.prototype) && "cause"in t && !Qc.call(t, "cause") ? "{ [" + String(t) + "] " + Ir.call(bu.call("[cause]: " + f(t.cause), P), ", ") + " }" : P.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ir.call(P, ", ") + " }"
    }
    if (typeof t == "object" && a) {
        if (Su && typeof t[Su] == "function" && mh)
            return mh(t, {
                depth: p - r
            });
        if (a !== "symbol" && typeof t.inspect == "function")
            return t.inspect()
    }
    if (Fg(t)) {
        var k = [];
        return yu && yu.call(t, function(B, W) {
            k.push(f(W, t, !0) + " => " + f(B, t))
        }),
        Iu("Map", la.call(t), k, g)
    }
    if (Lg(t)) {
        var V = [];
        return vu && vu.call(t, function(B) {
            V.push(f(B, t))
        }),
        Iu("Set", ua.call(t), V, g)
    }
    if (Og(t))
        return bo("WeakMap");
    if (kg(t))
        return bo("WeakSet");
    if (Ng(t))
        return bo("WeakRef");
    if (Rg(t))
        return Bn(f(Number(t)));
    if (Mg(t))
        return Bn(f(ph.call(t)));
    if (Pg(t))
        return Bn(vg.call(t));
    if (Ig(t))
        return Bn(f(String(t)));
    if (typeof window < "u" && t === window)
        return "{ [object Window] }";
    if (typeof globalThis < "u" && t === globalThis || typeof on < "u" && t === on)
        return "{ [object globalThis] }";
    if (!Sg(t) && !Cu(t)) {
        var d = Cs(t, f)
          , O = wu ? wu(t) === Object.prototype : t instanceof Object || t.constructor === Object
          , N = t instanceof Object ? "" : "null prototype"
          , z = !O && Ie && Object(t) === t && Ie in t ? gl.call(di(t), 8, -1) : N ? "Object" : ""
          , J = O || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : ""
          , $ = J + (z || N ? "[" + Ir.call(bu.call([], z || [], N || []), ": ") + "] " : "");
        return d.length === 0 ? $ + "{}" : g ? $ + "{" + vh(d, g) + "}" : $ + "{ " + Ir.call(d, ", ") + " }"
    }
    return String(t)
};
function td(i, t, e) {
    var r = e.quoteStyle || t
      , n = Jc[r];
    return n + i + n
}
function Ag(i) {
    return ai.call(String(i), /"/g, "&quot;")
}
function yh(i) {
    return di(i) === "[object Array]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Sg(i) {
    return di(i) === "[object Date]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Cu(i) {
    return di(i) === "[object RegExp]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Cg(i) {
    return di(i) === "[object Error]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Ig(i) {
    return di(i) === "[object String]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Rg(i) {
    return di(i) === "[object Number]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function Pg(i) {
    return di(i) === "[object Boolean]" && (!Ie || !(typeof i == "object" && Ie in i))
}
function ed(i) {
    if (gn)
        return i && typeof i == "object" && i instanceof Symbol;
    if (typeof i == "symbol")
        return !0;
    if (!i || typeof i != "object" || !gh)
        return !1;
    try {
        return gh.call(i),
        !0
    } catch {}
    return !1
}
function Mg(i) {
    if (!i || typeof i != "object" || !ph)
        return !1;
    try {
        return ph.call(i),
        !0
    } catch {}
    return !1
}
var Dg = Object.prototype.hasOwnProperty || function(i) {
    return i in this
}
;
function jr(i, t) {
    return Dg.call(i, t)
}
function di(i) {
    return _g.call(i)
}
function Bg(i) {
    if (i.name)
        return i.name;
    var t = bg.call(xg.call(i), /^function\s*([\w$]+)/);
    return t ? t[1] : null
}
function rd(i, t) {
    if (i.indexOf)
        return i.indexOf(t);
    for (var e = 0, r = i.length; e < r; e++)
        if (i[e] === t)
            return e;
    return -1
}
function Fg(i) {
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
function Og(i) {
    if (!Yn || !i || typeof i != "object")
        return !1;
    try {
        Yn.call(i, Yn);
        try {
            Kn.call(i, Kn)
        } catch {
            return !0
        }
        return i instanceof WeakMap
    } catch {}
    return !1
}
function Ng(i) {
    if (!_u || !i || typeof i != "object")
        return !1;
    try {
        return _u.call(i),
        !0
    } catch {}
    return !1
}
function Lg(i) {
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
function kg(i) {
    if (!Kn || !i || typeof i != "object")
        return !1;
    try {
        Kn.call(i, Kn);
        try {
            Yn.call(i, Yn)
        } catch {
            return !0
        }
        return i instanceof WeakSet
    } catch {}
    return !1
}
function Ug(i) {
    return !i || typeof i != "object" ? !1 : typeof HTMLElement < "u" && i instanceof HTMLElement ? !0 : typeof i.nodeName == "string" && typeof i.getAttribute == "function"
}
function id(i, t) {
    if (i.length > t.maxStringLength) {
        var e = i.length - t.maxStringLength
          , r = "... " + e + " more character" + (e > 1 ? "s" : "");
        return id(gl.call(i, 0, t.maxStringLength), t) + r
    }
    var n = Eg[t.quoteStyle || "single"];
    n.lastIndex = 0;
    var s = ai.call(ai.call(i, n, "\\$1"), /[\x00-\x1f]/g, Gg);
    return td(s, "single", t)
}
function Gg(i) {
    var t = i.charCodeAt(0)
      , e = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[t];
    return e ? "\\" + e : "\\x" + (t < 16 ? "0" : "") + Tg.call(t.toString(16))
}
function Bn(i) {
    return "Object(" + i + ")"
}
function bo(i) {
    return i + " { ? }"
}
function Iu(i, t, e, r) {
    var n = r ? vh(e, r) : Ir.call(e, ", ");
    return i + " (" + t + ") {" + n + "}"
}
function Hg(i) {
    for (var t = 0; t < i.length; t++)
        if (rd(i[t], `
`) >= 0)
            return !1;
    return !0
}
function $g(i, t) {
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
function vh(i, t) {
    if (i.length === 0)
        return "";
    var e = `
` + t.prev + t.base;
    return e + Ir.call(i, "," + e) + `
` + t.prev
}
function Cs(i, t) {
    var e = yh(i)
      , r = [];
    if (e) {
        r.length = i.length;
        for (var n = 0; n < i.length; n++)
            r[n] = jr(i, n) ? t(i[n], i) : ""
    }
    var s = typeof xo == "function" ? xo(i) : [], a;
    if (gn) {
        a = {};
        for (var o = 0; o < s.length; o++)
            a["$" + s[o]] = s[o]
    }
    for (var l in i)
        jr(i, l) && (e && String(Number(l)) === l && l < i.length || gn && a["$" + l]instanceof Symbol || (Zc.call(/[^\w$]/, l) ? r.push(t(l, i) + ": " + t(i[l], i)) : r.push(l + ": " + t(i[l], i))));
    if (typeof xo == "function")
        for (var c = 0; c < s.length; c++)
            Qc.call(i, s[c]) && r.push("[" + t(s[c]) + "]: " + t(i[s[c]], i));
    return r
}
var Vg = Pa
  , Wg = ci
  , Ma = function(i, t, e) {
    for (var r = i, n; (n = r.next) != null; r = n)
        if (n.key === t)
            return r.next = n.next,
            e || (n.next = i.next,
            i.next = n),
            n
}
  , jg = function(i, t) {
    if (i) {
        var e = Ma(i, t);
        return e && e.value
    }
}
  , Xg = function(i, t, e) {
    var r = Ma(i, t);
    r ? r.value = e : i.next = {
        key: t,
        next: i.next,
        value: e
    }
}
  , zg = function(i, t) {
    return i ? !!Ma(i, t) : !1
}
  , qg = function(i, t) {
    if (i)
        return Ma(i, t, !0)
}
  , Yg = function() {
    var t, e = {
        assert: function(r) {
            if (!e.has(r))
                throw new Wg("Side channel does not contain " + Vg(r))
        },
        delete: function(r) {
            var n = t && t.next
              , s = qg(t, r);
            return s && n && n === s && (t = void 0),
            !!s
        },
        get: function(r) {
            return jg(t, r)
        },
        has: function(r) {
            return zg(t, r)
        },
        set: function(r, n) {
            t || (t = {
                next: void 0
            }),
            Xg(t, r, n)
        }
    };
    return e
}
  , Kg = Object
  , Zg = Error
  , Qg = EvalError
  , Jg = RangeError
  , tm = ReferenceError
  , nd = SyntaxError
  , em = URIError
  , rm = Math.abs
  , im = Math.floor
  , nm = Math.max
  , sm = Math.min
  , am = Math.pow
  , om = Object.getOwnPropertyDescriptor
  , Ks = om;
if (Ks)
    try {
        Ks([], "length")
    } catch {
        Ks = null
    }
var Da = Ks
  , Zs = Object.defineProperty || !1;
if (Zs)
    try {
        Zs({}, "a", {
            value: 1
        })
    } catch {
        Zs = !1
    }
var Ba = Zs, To, Ru;
function hm() {
    return Ru || (Ru = 1,
    To = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
            return !1;
        if (typeof Symbol.iterator == "symbol")
            return !0;
        var t = {}
          , e = Symbol("test")
          , r = Object(e);
        if (typeof e == "string" || Object.prototype.toString.call(e) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
            return !1;
        var n = 42;
        t[e] = n;
        for (var s in t)
            return !1;
        if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
            return !1;
        var a = Object.getOwnPropertySymbols(t);
        if (a.length !== 1 || a[0] !== e || !Object.prototype.propertyIsEnumerable.call(t, e))
            return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var o = Object.getOwnPropertyDescriptor(t, e);
            if (o.value !== n || o.enumerable !== !0)
                return !1
        }
        return !0
    }
    ),
    To
}
var wo, Pu;
function lm() {
    if (Pu)
        return wo;
    Pu = 1;
    var i = typeof Symbol < "u" && Symbol
      , t = hm();
    return wo = function() {
        return typeof i != "function" || typeof Symbol != "function" || typeof i("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : t()
    }
    ,
    wo
}
var Eo, Mu;
function um() {
    if (Mu)
        return Eo;
    Mu = 1;
    var i = "Function.prototype.bind called on incompatible "
      , t = Object.prototype.toString
      , e = Math.max
      , r = "[object Function]"
      , n = function(l, c) {
        for (var p = [], g = 0; g < l.length; g += 1)
            p[g] = l[g];
        for (var f = 0; f < c.length; f += 1)
            p[f + l.length] = c[f];
        return p
    }
      , s = function(l, c) {
        for (var p = [], g = c, f = 0; g < l.length; g += 1,
        f += 1)
            p[f] = l[g];
        return p
    }
      , a = function(o, l) {
        for (var c = "", p = 0; p < o.length; p += 1)
            c += o[p],
            p + 1 < o.length && (c += l);
        return c
    };
    return Eo = function(l) {
        var c = this;
        if (typeof c != "function" || t.apply(c) !== r)
            throw new TypeError(i + c);
        for (var p = s(arguments, 1), g, f = function() {
            if (this instanceof g) {
                var E = c.apply(this, n(p, arguments));
                return Object(E) === E ? E : this
            }
            return c.apply(l, n(p, arguments))
        }, v = e(0, c.length - p.length), _ = [], T = 0; T < v; T++)
            _[T] = "$" + T;
        if (g = Function("binder", "return function (" + a(_, ",") + "){ return binder.apply(this,arguments); }")(f),
        c.prototype) {
            var A = function() {};
            A.prototype = c.prototype,
            g.prototype = new A,
            A.prototype = null
        }
        return g
    }
    ,
    Eo
}
var Ao, Du;
function as() {
    if (Du)
        return Ao;
    Du = 1;
    var i = um();
    return Ao = Function.prototype.bind || i,
    Ao
}
var So, Bu;
function ml() {
    return Bu || (Bu = 1,
    So = Function.prototype.call),
    So
}
var Co, Fu;
function yl() {
    return Fu || (Fu = 1,
    Co = Function.prototype.apply),
    Co
}
var cm = typeof Reflect < "u" && Reflect && Reflect.apply, dm = as(), fm = yl(), pm = ml(), gm = cm, sd = gm || dm.call(pm, fm), mm = as(), ym = ci, vm = ml(), _m = sd, ad = function(t) {
    if (t.length < 1 || typeof t[0] != "function")
        throw new ym("a function is required");
    return _m(mm, vm, t)
}, Io, Ou;
function xm() {
    if (Ou)
        return Io;
    Ou = 1;
    var i = ad
      , t = Da
      , e = [].__proto__ === Array.prototype
      , r = e && t && t(Object.prototype, "__proto__")
      , n = Object
      , s = n.getPrototypeOf;
    return Io = r && typeof r.get == "function" ? i([r.get]) : typeof s == "function" ? function(o) {
        return s(o == null ? o : n(o))
    }
    : !1,
    Io
}
var Ro, Nu;
function bm() {
    if (Nu)
        return Ro;
    Nu = 1;
    var i = Function.prototype.call
      , t = Object.prototype.hasOwnProperty
      , e = as();
    return Ro = e.call(i, t),
    Ro
}
var Gt, od = Kg, Tm = Zg, wm = Qg, Em = Jg, Am = tm, mn = nd, ln = ci, Sm = em, Cm = rm, Im = im, Rm = nm, Pm = sm, Mm = am, hd = Function, Po = function(i) {
    try {
        return hd('"use strict"; return (' + i + ").constructor;")()
    } catch {}
}, rs = Da, Dm = Ba, Mo = function() {
    throw new ln
}, Bm = rs ? function() {
    try {
        return arguments.callee,
        Mo
    } catch {
        try {
            return rs(arguments, "callee").get
        } catch {
            return Mo
        }
    }
}() : Mo, ji = lm()(), Fm = xm(), ve = typeof Reflect == "function" && Reflect.getPrototypeOf || od.getPrototypeOf || Fm, ld = yl(), os = ml(), Zi = {}, Om = typeof Uint8Array > "u" || !ve ? Gt : ve(Uint8Array), Ri = {
    __proto__: null,
    "%AggregateError%": typeof AggregateError > "u" ? Gt : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer > "u" ? Gt : ArrayBuffer,
    "%ArrayIteratorPrototype%": ji && ve ? ve([][Symbol.iterator]()) : Gt,
    "%AsyncFromSyncIteratorPrototype%": Gt,
    "%AsyncFunction%": Zi,
    "%AsyncGenerator%": Zi,
    "%AsyncGeneratorFunction%": Zi,
    "%AsyncIteratorPrototype%": Zi,
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
    "%Error%": Tm,
    "%eval%": eval,
    "%EvalError%": wm,
    "%Float32Array%": typeof Float32Array > "u" ? Gt : Float32Array,
    "%Float64Array%": typeof Float64Array > "u" ? Gt : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? Gt : FinalizationRegistry,
    "%Function%": hd,
    "%GeneratorFunction%": Zi,
    "%Int8Array%": typeof Int8Array > "u" ? Gt : Int8Array,
    "%Int16Array%": typeof Int16Array > "u" ? Gt : Int16Array,
    "%Int32Array%": typeof Int32Array > "u" ? Gt : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": ji && ve ? ve(ve([][Symbol.iterator]())) : Gt,
    "%JSON%": typeof JSON == "object" ? JSON : Gt,
    "%Map%": typeof Map > "u" ? Gt : Map,
    "%MapIteratorPrototype%": typeof Map > "u" || !ji || !ve ? Gt : ve(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": od,
    "%Object.getOwnPropertyDescriptor%": rs,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise > "u" ? Gt : Promise,
    "%Proxy%": typeof Proxy > "u" ? Gt : Proxy,
    "%RangeError%": Em,
    "%ReferenceError%": Am,
    "%Reflect%": typeof Reflect > "u" ? Gt : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set > "u" ? Gt : Set,
    "%SetIteratorPrototype%": typeof Set > "u" || !ji || !ve ? Gt : ve(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? Gt : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": ji && ve ? ve(""[Symbol.iterator]()) : Gt,
    "%Symbol%": ji ? Symbol : Gt,
    "%SyntaxError%": mn,
    "%ThrowTypeError%": Bm,
    "%TypedArray%": Om,
    "%TypeError%": ln,
    "%Uint8Array%": typeof Uint8Array > "u" ? Gt : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? Gt : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array > "u" ? Gt : Uint16Array,
    "%Uint32Array%": typeof Uint32Array > "u" ? Gt : Uint32Array,
    "%URIError%": Sm,
    "%WeakMap%": typeof WeakMap > "u" ? Gt : WeakMap,
    "%WeakRef%": typeof WeakRef > "u" ? Gt : WeakRef,
    "%WeakSet%": typeof WeakSet > "u" ? Gt : WeakSet,
    "%Function.prototype.call%": os,
    "%Function.prototype.apply%": ld,
    "%Object.defineProperty%": Dm,
    "%Math.abs%": Cm,
    "%Math.floor%": Im,
    "%Math.max%": Rm,
    "%Math.min%": Pm,
    "%Math.pow%": Mm
};
if (ve)
    try {
        null.error
    } catch (i) {
        var Nm = ve(ve(i));
        Ri["%Error.prototype%"] = Nm
    }
var Lm = function i(t) {
    var e;
    if (t === "%AsyncFunction%")
        e = Po("async function () {}");
    else if (t === "%GeneratorFunction%")
        e = Po("function* () {}");
    else if (t === "%AsyncGeneratorFunction%")
        e = Po("async function* () {}");
    else if (t === "%AsyncGenerator%") {
        var r = i("%AsyncGeneratorFunction%");
        r && (e = r.prototype)
    } else if (t === "%AsyncIteratorPrototype%") {
        var n = i("%AsyncGenerator%");
        n && ve && (e = ve(n.prototype))
    }
    return Ri[t] = e,
    e
}
  , Lu = {
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
}
  , hs = as()
  , ca = bm()
  , km = hs.call(os, Array.prototype.concat)
  , Um = hs.call(ld, Array.prototype.splice)
  , ku = hs.call(os, String.prototype.replace)
  , da = hs.call(os, String.prototype.slice)
  , Gm = hs.call(os, RegExp.prototype.exec)
  , Hm = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
  , $m = /\\(\\)?/g
  , Vm = function(t) {
    var e = da(t, 0, 1)
      , r = da(t, -1);
    if (e === "%" && r !== "%")
        throw new mn("invalid intrinsic syntax, expected closing `%`");
    if (r === "%" && e !== "%")
        throw new mn("invalid intrinsic syntax, expected opening `%`");
    var n = [];
    return ku(t, Hm, function(s, a, o, l) {
        n[n.length] = o ? ku(l, $m, "$1") : a || s
    }),
    n
}
  , Wm = function(t, e) {
    var r = t, n;
    if (ca(Lu, r) && (n = Lu[r],
    r = "%" + n[0] + "%"),
    ca(Ri, r)) {
        var s = Ri[r];
        if (s === Zi && (s = Lm(r)),
        typeof s > "u" && !e)
            throw new ln("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return {
            alias: n,
            name: r,
            value: s
        }
    }
    throw new mn("intrinsic " + t + " does not exist!")
}
  , Fa = function(t, e) {
    if (typeof t != "string" || t.length === 0)
        throw new ln("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof e != "boolean")
        throw new ln('"allowMissing" argument must be a boolean');
    if (Gm(/^%?[^%]*%?$/, t) === null)
        throw new mn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var r = Vm(t)
      , n = r.length > 0 ? r[0] : ""
      , s = Wm("%" + n + "%", e)
      , a = s.name
      , o = s.value
      , l = !1
      , c = s.alias;
    c && (n = c[0],
    Um(r, km([0, 1], c)));
    for (var p = 1, g = !0; p < r.length; p += 1) {
        var f = r[p]
          , v = da(f, 0, 1)
          , _ = da(f, -1);
        if ((v === '"' || v === "'" || v === "`" || _ === '"' || _ === "'" || _ === "`") && v !== _)
            throw new mn("property names with quotes must have matching quotes");
        if ((f === "constructor" || !g) && (l = !0),
        n += "." + f,
        a = "%" + n + "%",
        ca(Ri, a))
            o = Ri[a];
        else if (o != null) {
            if (!(f in o)) {
                if (!e)
                    throw new ln("base intrinsic for " + t + " exists, but the property is not available.");
                return
            }
            if (rs && p + 1 >= r.length) {
                var T = rs(o, f);
                g = !!T,
                g && "get"in T && !("originalValue"in T.get) ? o = T.get : o = o[f]
            } else
                g = ca(o, f),
                o = o[f];
            g && !l && (Ri[a] = o)
        }
    }
    return o
}
  , ud = {
    exports: {}
}
  , Uu = Ba
  , jm = nd
  , Xi = ci
  , Gu = Da
  , Xm = function(t, e, r) {
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
    var n = arguments.length > 3 ? arguments[3] : null
      , s = arguments.length > 4 ? arguments[4] : null
      , a = arguments.length > 5 ? arguments[5] : null
      , o = arguments.length > 6 ? arguments[6] : !1
      , l = !!Gu && Gu(t, e);
    if (Uu)
        Uu(t, e, {
            configurable: a === null && l ? l.configurable : !a,
            enumerable: n === null && l ? l.enumerable : !n,
            value: r,
            writable: s === null && l ? l.writable : !s
        });
    else if (o || !n && !s && !a)
        t[e] = r;
    else
        throw new jm("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")
}
  , _h = Ba
  , cd = function() {
    return !!_h
};
cd.hasArrayLengthDefineBug = function() {
    if (!_h)
        return null;
    try {
        return _h([], "length", {
            value: 1
        }).length !== 1
    } catch {
        return !0
    }
}
;
var zm = cd
  , qm = Fa
  , Hu = Xm
  , Ym = zm()
  , $u = Da
  , Vu = ci
  , Km = qm("%Math.floor%")
  , Zm = function(t, e) {
    if (typeof t != "function")
        throw new Vu("`fn` is not a function");
    if (typeof e != "number" || e < 0 || e > 4294967295 || Km(e) !== e)
        throw new Vu("`length` must be a positive 32-bit integer");
    var r = arguments.length > 2 && !!arguments[2]
      , n = !0
      , s = !0;
    if ("length"in t && $u) {
        var a = $u(t, "length");
        a && !a.configurable && (n = !1),
        a && !a.writable && (s = !1)
    }
    return (n || s || !r) && (Ym ? Hu(t, "length", e, !0, !0) : Hu(t, "length", e)),
    t
}
  , Qm = as()
  , Jm = yl()
  , ty = sd
  , ey = function() {
    return ty(Qm, Jm, arguments)
};
(function(i) {
    var t = Zm
      , e = Ba
      , r = ad
      , n = ey;
    i.exports = function(a) {
        var o = r(arguments)
          , l = a.length - (arguments.length - 1);
        return t(o, 1 + (l > 0 ? l : 0), !0)
    }
    ,
    e ? e(i.exports, "apply", {
        value: n
    }) : i.exports.apply = n
}
)(ud);
var ry = ud.exports
  , dd = Fa
  , fd = ry
  , iy = fd(dd("String.prototype.indexOf"))
  , pd = function(t, e) {
    var r = dd(t, !!e);
    return typeof r == "function" && iy(t, ".prototype.") > -1 ? fd(r) : r
}
  , ny = Fa
  , ls = pd
  , sy = Pa
  , ay = ci
  , Wu = ny("%Map%", !0)
  , oy = ls("Map.prototype.get", !0)
  , hy = ls("Map.prototype.set", !0)
  , ly = ls("Map.prototype.has", !0)
  , uy = ls("Map.prototype.delete", !0)
  , cy = ls("Map.prototype.size", !0)
  , gd = !!Wu && function() {
    var t, e = {
        assert: function(r) {
            if (!e.has(r))
                throw new ay("Side channel does not contain " + sy(r))
        },
        delete: function(r) {
            if (t) {
                var n = uy(t, r);
                return cy(t) === 0 && (t = void 0),
                n
            }
            return !1
        },
        get: function(r) {
            if (t)
                return oy(t, r)
        },
        has: function(r) {
            return t ? ly(t, r) : !1
        },
        set: function(r, n) {
            t || (t = new Wu),
            hy(t, r, n)
        }
    };
    return e
}
  , dy = Fa
  , Oa = pd
  , fy = Pa
  , Is = gd
  , py = ci
  , zi = dy("%WeakMap%", !0)
  , gy = Oa("WeakMap.prototype.get", !0)
  , my = Oa("WeakMap.prototype.set", !0)
  , yy = Oa("WeakMap.prototype.has", !0)
  , vy = Oa("WeakMap.prototype.delete", !0)
  , _y = zi ? function() {
    var t, e, r = {
        assert: function(n) {
            if (!r.has(n))
                throw new py("Side channel does not contain " + fy(n))
        },
        delete: function(n) {
            if (zi && n && (typeof n == "object" || typeof n == "function")) {
                if (t)
                    return vy(t, n)
            } else if (Is && e)
                return e.delete(n);
            return !1
        },
        get: function(n) {
            return zi && n && (typeof n == "object" || typeof n == "function") && t ? gy(t, n) : e && e.get(n)
        },
        has: function(n) {
            return zi && n && (typeof n == "object" || typeof n == "function") && t ? yy(t, n) : !!e && e.has(n)
        },
        set: function(n, s) {
            zi && n && (typeof n == "object" || typeof n == "function") ? (t || (t = new zi),
            my(t, n, s)) : Is && (e || (e = Is()),
            e.set(n, s))
        }
    };
    return r
}
: Is
  , xy = ci
  , by = Pa
  , Ty = Yg
  , wy = gd
  , Ey = _y
  , Ay = Ey || wy || Ty
  , Sy = function() {
    var t, e = {
        assert: function(r) {
            if (!e.has(r))
                throw new xy("Side channel does not contain " + by(r))
        },
        delete: function(r) {
            return !!t && t.delete(r)
        },
        get: function(r) {
            return t && t.get(r)
        },
        has: function(r) {
            return !!t && t.has(r)
        },
        set: function(r, n) {
            t || (t = Ay()),
            t.set(r, n)
        }
    };
    return e
}
  , Cy = String.prototype.replace
  , Iy = /%20/g
  , Do = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
}
  , vl = {
    default: Do.RFC3986,
    formatters: {
        RFC1738: function(i) {
            return Cy.call(i, Iy, "+")
        },
        RFC3986: function(i) {
            return String(i)
        }
    },
    RFC1738: Do.RFC1738,
    RFC3986: Do.RFC3986
}
  , Ry = vl
  , Bo = Object.prototype.hasOwnProperty
  , Ci = Array.isArray
  , xr = function() {
    for (var i = [], t = 0; t < 256; ++t)
        i.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
    return i
}()
  , Py = function(t) {
    for (; t.length > 1; ) {
        var e = t.pop()
          , r = e.obj[e.prop];
        if (Ci(r)) {
            for (var n = [], s = 0; s < r.length; ++s)
                typeof r[s] < "u" && n.push(r[s]);
            e.obj[e.prop] = n
        }
    }
}
  , md = function(t, e) {
    for (var r = e && e.plainObjects ? {
        __proto__: null
    } : {}, n = 0; n < t.length; ++n)
        typeof t[n] < "u" && (r[n] = t[n]);
    return r
}
  , My = function i(t, e, r) {
    if (!e)
        return t;
    if (typeof e != "object" && typeof e != "function") {
        if (Ci(t))
            t.push(e);
        else if (t && typeof t == "object")
            (r && (r.plainObjects || r.allowPrototypes) || !Bo.call(Object.prototype, e)) && (t[e] = !0);
        else
            return [t, e];
        return t
    }
    if (!t || typeof t != "object")
        return [t].concat(e);
    var n = t;
    return Ci(t) && !Ci(e) && (n = md(t, r)),
    Ci(t) && Ci(e) ? (e.forEach(function(s, a) {
        if (Bo.call(t, a)) {
            var o = t[a];
            o && typeof o == "object" && s && typeof s == "object" ? t[a] = i(o, s, r) : t.push(s)
        } else
            t[a] = s
    }),
    t) : Object.keys(e).reduce(function(s, a) {
        var o = e[a];
        return Bo.call(s, a) ? s[a] = i(s[a], o, r) : s[a] = o,
        s
    }, n)
}
  , Dy = function(t, e) {
    return Object.keys(e).reduce(function(r, n) {
        return r[n] = e[n],
        r
    }, t)
}
  , By = function(i, t, e) {
    var r = i.replace(/\+/g, " ");
    if (e === "iso-8859-1")
        return r.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
        return decodeURIComponent(r)
    } catch {
        return r
    }
}
  , Fo = 1024
  , Fy = function(t, e, r, n, s) {
    if (t.length === 0)
        return t;
    var a = t;
    if (typeof t == "symbol" ? a = Symbol.prototype.toString.call(t) : typeof t != "string" && (a = String(t)),
    r === "iso-8859-1")
        return escape(a).replace(/%u[0-9a-f]{4}/gi, function(v) {
            return "%26%23" + parseInt(v.slice(2), 16) + "%3B"
        });
    for (var o = "", l = 0; l < a.length; l += Fo) {
        for (var c = a.length >= Fo ? a.slice(l, l + Fo) : a, p = [], g = 0; g < c.length; ++g) {
            var f = c.charCodeAt(g);
            if (f === 45 || f === 46 || f === 95 || f === 126 || f >= 48 && f <= 57 || f >= 65 && f <= 90 || f >= 97 && f <= 122 || s === Ry.RFC1738 && (f === 40 || f === 41)) {
                p[p.length] = c.charAt(g);
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
            g += 1,
            f = 65536 + ((f & 1023) << 10 | c.charCodeAt(g) & 1023),
            p[p.length] = xr[240 | f >> 18] + xr[128 | f >> 12 & 63] + xr[128 | f >> 6 & 63] + xr[128 | f & 63]
        }
        o += p.join("")
    }
    return o
}
  , Oy = function(t) {
    for (var e = [{
        obj: {
            o: t
        },
        prop: "o"
    }], r = [], n = 0; n < e.length; ++n)
        for (var s = e[n], a = s.obj[s.prop], o = Object.keys(a), l = 0; l < o.length; ++l) {
            var c = o[l]
              , p = a[c];
            typeof p == "object" && p !== null && r.indexOf(p) === -1 && (e.push({
                obj: a,
                prop: c
            }),
            r.push(p))
        }
    return Py(e),
    t
}
  , Ny = function(t) {
    return Object.prototype.toString.call(t) === "[object RegExp]"
}
  , Ly = function(t) {
    return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
}
  , ky = function(t, e) {
    return [].concat(t, e)
}
  , Uy = function(t, e) {
    if (Ci(t)) {
        for (var r = [], n = 0; n < t.length; n += 1)
            r.push(e(t[n]));
        return r
    }
    return e(t)
}
  , yd = {
    arrayToObject: md,
    assign: Dy,
    combine: ky,
    compact: Oy,
    decode: By,
    encode: Fy,
    isBuffer: Ly,
    isRegExp: Ny,
    maybeMap: Uy,
    merge: My
}
  , vd = Sy
  , Qs = yd
  , Zn = vl
  , Gy = Object.prototype.hasOwnProperty
  , _d = {
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
  , Hy = Array.prototype.push
  , xd = function(i, t) {
    Hy.apply(i, Sr(t) ? t : [t])
}
  , $y = Date.prototype.toISOString
  , ju = Zn.default
  , de = {
    addQueryPrefix: !1,
    allowDots: !1,
    allowEmptyArrays: !1,
    arrayFormat: "indices",
    charset: "utf-8",
    charsetSentinel: !1,
    commaRoundTrip: !1,
    delimiter: "&",
    encode: !0,
    encodeDotInKeys: !1,
    encoder: Qs.encode,
    encodeValuesOnly: !1,
    filter: void 0,
    format: ju,
    formatter: Zn.formatters[ju],
    indices: !1,
    serializeDate: function(t) {
        return $y.call(t)
    },
    skipNulls: !1,
    strictNullHandling: !1
}
  , Vy = function(t) {
    return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
}
  , Oo = {}
  , Wy = function i(t, e, r, n, s, a, o, l, c, p, g, f, v, _, T, A, E, I) {
    for (var S = t, P = I, k = 0, V = !1; (P = P.get(Oo)) !== void 0 && !V; ) {
        var d = P.get(t);
        if (k += 1,
        typeof d < "u") {
            if (d === k)
                throw new RangeError("Cyclic object value");
            V = !0
        }
        typeof P.get(Oo) > "u" && (k = 0)
    }
    if (typeof p == "function" ? S = p(e, S) : S instanceof Date ? S = v(S) : r === "comma" && Sr(S) && (S = Qs.maybeMap(S, function(Q) {
        return Q instanceof Date ? v(Q) : Q
    })),
    S === null) {
        if (a)
            return c && !A ? c(e, de.encoder, E, "key", _) : e;
        S = ""
    }
    if (Vy(S) || Qs.isBuffer(S)) {
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
        A && c && (S = Qs.maybeMap(S, c)),
        z = [{
            value: S.length > 0 ? S.join(",") || null : void 0
        }];
    else if (Sr(p))
        z = p;
    else {
        var J = Object.keys(S);
        z = g ? J.sort(g) : J
    }
    var $ = l ? String(e).replace(/\./g, "%2E") : String(e)
      , B = n && Sr(S) && S.length === 1 ? $ + "[]" : $;
    if (s && Sr(S) && S.length === 0)
        return B + "[]";
    for (var W = 0; W < z.length; ++W) {
        var tt = z[W]
          , at = typeof tt == "object" && tt && typeof tt.value < "u" ? tt.value : S[tt];
        if (!(o && at === null)) {
            var nt = f && l ? String(tt).replace(/\./g, "%2E") : String(tt)
              , dt = Sr(S) ? typeof r == "function" ? r(B, nt) : B : B + (f ? "." + nt : "[" + nt + "]");
            I.set(t, k);
            var Ft = vd();
            Ft.set(Oo, I),
            xd(N, i(at, dt, r, n, s, a, o, l, r === "comma" && A && Sr(S) ? null : c, p, g, f, v, _, T, A, E, Ft))
        }
    }
    return N
}
  , jy = function(t) {
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
    var r = Zn.default;
    if (typeof t.format < "u") {
        if (!Gy.call(Zn.formatters, t.format))
            throw new TypeError("Unknown format option provided.");
        r = t.format
    }
    var n = Zn.formatters[r]
      , s = de.filter;
    (typeof t.filter == "function" || Sr(t.filter)) && (s = t.filter);
    var a;
    if (t.arrayFormat in _d ? a = t.arrayFormat : "indices"in t ? a = t.indices ? "indices" : "repeat" : a = de.arrayFormat,
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
        commaRoundTrip: !!t.commaRoundTrip,
        delimiter: typeof t.delimiter > "u" ? de.delimiter : t.delimiter,
        encode: typeof t.encode == "boolean" ? t.encode : de.encode,
        encodeDotInKeys: typeof t.encodeDotInKeys == "boolean" ? t.encodeDotInKeys : de.encodeDotInKeys,
        encoder: typeof t.encoder == "function" ? t.encoder : de.encoder,
        encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : de.encodeValuesOnly,
        filter: s,
        format: r,
        formatter: n,
        serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : de.serializeDate,
        skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : de.skipNulls,
        sort: typeof t.sort == "function" ? t.sort : null,
        strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : de.strictNullHandling
    }
}
  , Xy = function(i, t) {
    var e = i, r = jy(t), n, s;
    typeof r.filter == "function" ? (s = r.filter,
    e = s("", e)) : Sr(r.filter) && (s = r.filter,
    n = s);
    var a = [];
    if (typeof e != "object" || e === null)
        return "";
    var o = _d[r.arrayFormat]
      , l = o === "comma" && r.commaRoundTrip;
    n || (n = Object.keys(e)),
    r.sort && n.sort(r.sort);
    for (var c = vd(), p = 0; p < n.length; ++p) {
        var g = n[p]
          , f = e[g];
        r.skipNulls && f === null || xd(a, Wy(f, g, o, l, r.allowEmptyArrays, r.strictNullHandling, r.skipNulls, r.encodeDotInKeys, r.encode ? r.encoder : null, r.filter, r.sort, r.allowDots, r.serializeDate, r.format, r.formatter, r.encodeValuesOnly, r.charset, c))
    }
    var v = a.join(r.delimiter)
      , _ = r.addQueryPrefix === !0 ? "?" : "";
    return r.charsetSentinel && (r.charset === "iso-8859-1" ? _ += "utf8=%26%2310003%3B&" : _ += "utf8=%E2%9C%93&"),
    v.length > 0 ? _ + v : ""
}
  , yn = yd
  , xh = Object.prototype.hasOwnProperty
  , zy = Array.isArray
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
    decoder: yn.decode,
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
  , qy = function(i) {
    return i.replace(/&#(\d+);/g, function(t, e) {
        return String.fromCharCode(parseInt(e, 10))
    })
}
  , bd = function(i, t) {
    return i && typeof i == "string" && t.comma && i.indexOf(",") > -1 ? i.split(",") : i
}
  , Yy = "utf8=%26%2310003%3B"
  , Ky = "utf8=%E2%9C%93"
  , Zy = function(t, e) {
    var r = {
        __proto__: null
    }
      , n = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t;
    n = n.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
    var s = e.parameterLimit === 1 / 0 ? void 0 : e.parameterLimit, a = n.split(e.delimiter, s), o = -1, l, c = e.charset;
    if (e.charsetSentinel)
        for (l = 0; l < a.length; ++l)
            a[l].indexOf("utf8=") === 0 && (a[l] === Ky ? c = "utf-8" : a[l] === Yy && (c = "iso-8859-1"),
            o = l,
            l = a.length);
    for (l = 0; l < a.length; ++l)
        if (l !== o) {
            var p = a[l], g = p.indexOf("]="), f = g === -1 ? p.indexOf("=") : g + 1, v, _;
            f === -1 ? (v = e.decoder(p, ae.decoder, c, "key"),
            _ = e.strictNullHandling ? null : "") : (v = e.decoder(p.slice(0, f), ae.decoder, c, "key"),
            _ = yn.maybeMap(bd(p.slice(f + 1), e), function(A) {
                return e.decoder(A, ae.decoder, c, "value")
            })),
            _ && e.interpretNumericEntities && c === "iso-8859-1" && (_ = qy(String(_))),
            p.indexOf("[]=") > -1 && (_ = zy(_) ? [_] : _);
            var T = xh.call(r, v);
            T && e.duplicates === "combine" ? r[v] = yn.combine(r[v], _) : (!T || e.duplicates === "last") && (r[v] = _)
        }
    return r
}
  , Qy = function(i, t, e, r) {
    for (var n = r ? t : bd(t, e), s = i.length - 1; s >= 0; --s) {
        var a, o = i[s];
        if (o === "[]" && e.parseArrays)
            a = e.allowEmptyArrays && (n === "" || e.strictNullHandling && n === null) ? [] : [].concat(n);
        else {
            a = e.plainObjects ? {
                __proto__: null
            } : {};
            var l = o.charAt(0) === "[" && o.charAt(o.length - 1) === "]" ? o.slice(1, -1) : o
              , c = e.decodeDotInKeys ? l.replace(/%2E/g, ".") : l
              , p = parseInt(c, 10);
            !e.parseArrays && c === "" ? a = {
                0: n
            } : !isNaN(p) && o !== c && String(p) === c && p >= 0 && e.parseArrays && p <= e.arrayLimit ? (a = [],
            a[p] = n) : c !== "__proto__" && (a[c] = n)
        }
        n = a
    }
    return n
}
  , Jy = function(t, e, r, n) {
    if (t) {
        var s = r.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t
          , a = /(\[[^[\]]*])/
          , o = /(\[[^[\]]*])/g
          , l = r.depth > 0 && a.exec(s)
          , c = l ? s.slice(0, l.index) : s
          , p = [];
        if (c) {
            if (!r.plainObjects && xh.call(Object.prototype, c) && !r.allowPrototypes)
                return;
            p.push(c)
        }
        for (var g = 0; r.depth > 0 && (l = o.exec(s)) !== null && g < r.depth; ) {
            if (g += 1,
            !r.plainObjects && xh.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes)
                return;
            p.push(l[1])
        }
        if (l) {
            if (r.strictDepth === !0)
                throw new RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
            p.push("[" + s.slice(l.index) + "]")
        }
        return Qy(p, e, r, n)
    }
}
  , tv = function(t) {
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
    var n = typeof t.allowDots > "u" ? t.decodeDotInKeys === !0 ? !0 : ae.allowDots : !!t.allowDots;
    return {
        allowDots: n,
        allowEmptyArrays: typeof t.allowEmptyArrays == "boolean" ? !!t.allowEmptyArrays : ae.allowEmptyArrays,
        allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : ae.allowPrototypes,
        allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : ae.allowSparse,
        arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : ae.arrayLimit,
        charset: e,
        charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : ae.charsetSentinel,
        comma: typeof t.comma == "boolean" ? t.comma : ae.comma,
        decodeDotInKeys: typeof t.decodeDotInKeys == "boolean" ? t.decodeDotInKeys : ae.decodeDotInKeys,
        decoder: typeof t.decoder == "function" ? t.decoder : ae.decoder,
        delimiter: typeof t.delimiter == "string" || yn.isRegExp(t.delimiter) ? t.delimiter : ae.delimiter,
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
  , ev = function(i, t) {
    var e = tv(t);
    if (i === "" || i === null || typeof i > "u")
        return e.plainObjects ? {
            __proto__: null
        } : {};
    for (var r = typeof i == "string" ? Zy(i, e) : i, n = e.plainObjects ? {
        __proto__: null
    } : {}, s = Object.keys(r), a = 0; a < s.length; ++a) {
        var o = s[a]
          , l = Jy(o, r[o], e, typeof i == "string");
        n = yn.merge(n, l, e)
    }
    return e.allowSparse === !0 ? n : yn.compact(n)
}
  , rv = Xy
  , iv = ev
  , nv = vl
  , sv = {
    formats: nv,
    parse: iv,
    stringify: rv
}
  , av = cg;
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
var ov = /^([a-z0-9.+-]+:)/i
  , hv = /:[0-9]*$/
  , lv = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/
  , uv = ["<", ">", '"', "`", " ", "\r", `
`, "	"]
  , cv = ["{", "}", "|", "\\", "^", "`"].concat(uv)
  , bh = ["'"].concat(cv)
  , Xu = ["%", "/", "?", ";", "#"].concat(bh)
  , zu = ["/", "?", "#"]
  , dv = 255
  , qu = /^[+a-z0-9A-Z_-]{0,63}$/
  , fv = /^([+a-z0-9A-Z_-]{0,63})(.*)$/
  , pv = {
    javascript: !0,
    "javascript:": !0
}
  , Th = {
    javascript: !0,
    "javascript:": !0
}
  , un = {
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
  , wh = sv;
function Na(i, t, e) {
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
      , n = r !== -1 && r < i.indexOf("#") ? "?" : "#"
      , s = i.split(n)
      , a = /\\/g;
    s[0] = s[0].replace(a, "/"),
    i = s.join(n);
    var o = i;
    if (o = o.trim(),
    !e && i.split("#").length === 1) {
        var l = lv.exec(o);
        if (l)
            return this.path = o,
            this.href = o,
            this.pathname = l[1],
            l[2] ? (this.search = l[2],
            t ? this.query = wh.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "",
            this.query = {}),
            this
    }
    var c = ov.exec(o);
    if (c) {
        c = c[0];
        var p = c.toLowerCase();
        this.protocol = p,
        o = o.substr(c.length)
    }
    if (e || c || o.match(/^\/\/[^@/]+@[^@/]+/)) {
        var g = o.substr(0, 2) === "//";
        g && !(c && Th[c]) && (o = o.substr(2),
        this.slashes = !0)
    }
    if (!Th[c] && (g || c && !un[c])) {
        for (var f = -1, v = 0; v < zu.length; v++) {
            var _ = o.indexOf(zu[v]);
            _ !== -1 && (f === -1 || _ < f) && (f = _)
        }
        var T, A;
        f === -1 ? A = o.lastIndexOf("@") : A = o.lastIndexOf("@", f),
        A !== -1 && (T = o.slice(0, A),
        o = o.slice(A + 1),
        this.auth = decodeURIComponent(T)),
        f = -1;
        for (var v = 0; v < Xu.length; v++) {
            var _ = o.indexOf(Xu[v]);
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
                if (P && !P.match(qu)) {
                    for (var k = "", V = 0, d = P.length; V < d; V++)
                        P.charCodeAt(V) > 127 ? k += "x" : k += P[V];
                    if (!k.match(qu)) {
                        var O = I.slice(0, v)
                          , N = I.slice(v + 1)
                          , z = P.match(fv);
                        z && (O.push(z[1]),
                        N.unshift(z[2])),
                        N.length && (o = "/" + N.join(".") + o),
                        this.hostname = O.join(".");
                        break
                    }
                }
            }
        this.hostname.length > dv ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(),
        E || (this.hostname = av.toASCII(this.hostname));
        var J = this.port ? ":" + this.port : ""
          , $ = this.hostname || "";
        this.host = $ + J,
        this.href += this.host,
        E && (this.hostname = this.hostname.substr(1, this.hostname.length - 2),
        o[0] !== "/" && (o = "/" + o))
    }
    if (!pv[p])
        for (var v = 0, S = bh.length; v < S; v++) {
            var B = bh[v];
            if (o.indexOf(B) !== -1) {
                var W = encodeURIComponent(B);
                W === B && (W = escape(B)),
                o = o.split(B).join(W)
            }
        }
    var tt = o.indexOf("#");
    tt !== -1 && (this.hash = o.substr(tt),
    o = o.slice(0, tt));
    var at = o.indexOf("?");
    if (at !== -1 ? (this.search = o.substr(at),
    this.query = o.substr(at + 1),
    t && (this.query = wh.parse(this.query)),
    o = o.slice(0, at)) : t && (this.search = "",
    this.query = {}),
    o && (this.pathname = o),
    un[p] && this.hostname && !this.pathname && (this.pathname = "/"),
    this.pathname || this.search) {
        var J = this.pathname || ""
          , nt = this.search || "";
        this.path = J + nt
    }
    return this.href = this.format(),
    this
}
;
function gv(i) {
    return typeof i == "string" && (i = Na(i)),
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
      , n = !1
      , s = "";
    this.host ? n = i + this.host : this.hostname && (n = i + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"),
    this.port && (n += ":" + this.port)),
    this.query && typeof this.query == "object" && Object.keys(this.query).length && (s = wh.stringify(this.query, {
        arrayFormat: "repeat",
        addQueryPrefix: !1
    }));
    var a = this.search || s && "?" + s || "";
    return t && t.substr(-1) !== ":" && (t += ":"),
    this.slashes || (!t || un[t]) && n !== !1 ? (n = "//" + (n || ""),
    e && e.charAt(0) !== "/" && (e = "/" + e)) : n || (n = ""),
    r && r.charAt(0) !== "#" && (r = "#" + r),
    a && a.charAt(0) !== "?" && (a = "?" + a),
    e = e.replace(/[?#]/g, function(o) {
        return encodeURIComponent(o)
    }),
    a = a.replace("#", "%23"),
    t + n + e + a + r
}
;
function mv(i, t) {
    return Na(i, !1, !0).resolve(t)
}
lr.prototype.resolve = function(i) {
    return this.resolveObject(Na(i, !1, !0)).format()
}
;
lr.prototype.resolveObject = function(i) {
    if (typeof i == "string") {
        var t = new lr;
        t.parse(i, !1, !0),
        i = t
    }
    for (var e = new lr, r = Object.keys(this), n = 0; n < r.length; n++) {
        var s = r[n];
        e[s] = this[s]
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
        return un[e.protocol] && e.hostname && !e.pathname && (e.pathname = "/",
        e.path = e.pathname),
        e.href = e.format(),
        e
    }
    if (i.protocol && i.protocol !== e.protocol) {
        if (!un[i.protocol]) {
            for (var c = Object.keys(i), p = 0; p < c.length; p++) {
                var g = c[p];
                e[g] = i[g]
            }
            return e.href = e.format(),
            e
        }
        if (e.protocol = i.protocol,
        !i.host && !Th[i.protocol]) {
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
      , P = e.protocol && !un[e.protocol];
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
    for (var V = I.slice(-1)[0], d = (e.host || i.host || I.length > 1) && (V === "." || V === "..") || V === "", O = 0, N = I.length; N >= 0; N--)
        V = I[N],
        V === "." ? I.splice(N, 1) : V === ".." ? (I.splice(N, 1),
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
      , t = hv.exec(i);
    t && (t = t[0],
    t !== ":" && (this.port = t.substr(1)),
    i = i.substr(0, i.length - t.length)),
    i && (this.hostname = i)
}
;
var yv = Na
  , vv = mv
  , _v = gv;
const Yu = {};
function vt(i, t, e=3) {
    if (Yu[t])
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
    Yu[t] = !0
}
const xv = {
    get parse() {
        return vt("7.3.0", "utils.url.parse is deprecated, use native URL API instead."),
        yv
    },
    get format() {
        return vt("7.3.0", "utils.url.format is deprecated, use native URL API instead."),
        _v
    },
    get resolve() {
        return vt("7.3.0", "utils.url.resolve is deprecated, use native URL API instead."),
        vv
    }
};
function rr(i) {
    if (typeof i != "string")
        throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`)
}
function Fn(i) {
    return i.split("?")[0].split("#")[0]
}
function bv(i) {
    return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
function Tv(i, t, e) {
    return i.replace(new RegExp(bv(t),"g"), e)
}
function wv(i, t) {
    let e = ""
      , r = 0
      , n = -1
      , s = 0
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
            if (!(n === o - 1 || s === 1))
                if (n !== o - 1 && s === 2) {
                    if (e.length < 2 || r !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                        if (e.length > 2) {
                            const l = e.lastIndexOf("/");
                            if (l !== e.length - 1) {
                                l === -1 ? (e = "",
                                r = 0) : (e = e.slice(0, l),
                                r = e.length - 1 - e.lastIndexOf("/")),
                                n = o,
                                s = 0;
                                continue
                            }
                        } else if (e.length === 2 || e.length === 1) {
                            e = "",
                            r = 0,
                            n = o,
                            s = 0;
                            continue
                        }
                    }
                } else
                    e.length > 0 ? e += `/${i.slice(n + 1, o)}` : e = i.slice(n + 1, o),
                    r = o - n - 1;
            n = o,
            s = 0
        } else
            a === 46 && s !== -1 ? ++s : s = -1
    }
    return e
}
const ge = {
    toPosix(i) {
        return Tv(i, "\\", "/")
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
        const r = Fn(this.toPosix(t ?? st.ADAPTER.getBaseUrl()))
          , n = Fn(this.toPosix(e ?? this.rootname(r)));
        return i = this.toPosix(i),
        i.startsWith("/") ? ge.join(n, i.slice(1)) : this.isAbsolute(i) ? i : this.join(r, i)
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
        return i = wv(i),
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
                    const n = i[e - 1] ?? "";
                    this.joinExtensions.includes(this.extname(n).toLowerCase()) ? t += `/../${r}` : t += `/${r}`
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
          , n = !0;
        const s = this.getProtocol(i)
          , a = i;
        i = i.slice(s.length);
        for (let o = i.length - 1; o >= 1; --o)
            if (t = i.charCodeAt(o),
            t === 47) {
                if (!n) {
                    r = o;
                    break
                }
            } else
                n = !1;
        return r === -1 ? e ? "/" : this.isUrl(a) ? s + i : s : e && r === 1 ? "//" : s + i.slice(0, r)
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
        i = Fn(this.toPosix(i));
        let e = 0, r = -1, n = !0, s;
        if (t !== void 0 && t.length > 0 && t.length <= i.length) {
            if (t.length === i.length && t === i)
                return "";
            let a = t.length - 1
              , o = -1;
            for (s = i.length - 1; s >= 0; --s) {
                const l = i.charCodeAt(s);
                if (l === 47) {
                    if (!n) {
                        e = s + 1;
                        break
                    }
                } else
                    o === -1 && (n = !1,
                    o = s + 1),
                    a >= 0 && (l === t.charCodeAt(a) ? --a === -1 && (r = s) : (a = -1,
                    r = o))
            }
            return e === r ? r = o : r === -1 && (r = i.length),
            i.slice(e, r)
        }
        for (s = i.length - 1; s >= 0; --s)
            if (i.charCodeAt(s) === 47) {
                if (!n) {
                    e = s + 1;
                    break
                }
            } else
                r === -1 && (n = !1,
                r = s + 1);
        return r === -1 ? "" : i.slice(e, r)
    },
    extname(i) {
        rr(i),
        i = Fn(this.toPosix(i));
        let t = -1
          , e = 0
          , r = -1
          , n = !0
          , s = 0;
        for (let a = i.length - 1; a >= 0; --a) {
            const o = i.charCodeAt(a);
            if (o === 47) {
                if (!n) {
                    e = a + 1;
                    break
                }
                continue
            }
            r === -1 && (n = !1,
            r = a + 1),
            o === 46 ? t === -1 ? t = a : s !== 1 && (s = 1) : t !== -1 && (s = -1)
        }
        return t === -1 || r === -1 || s === 0 || s === 1 && t === r - 1 && t === e + 1 ? "" : i.slice(t, r)
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
        i = Fn(this.toPosix(i));
        let e = i.charCodeAt(0);
        const r = this.isAbsolute(i);
        let n;
        t.root = this.rootname(i),
        r || this.hasProtocol(i) ? n = 1 : n = 0;
        let s = -1
          , a = 0
          , o = -1
          , l = !0
          , c = i.length - 1
          , p = 0;
        for (; c >= n; --c) {
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
            e === 46 ? s === -1 ? s = c : p !== 1 && (p = 1) : s !== -1 && (p = -1)
        }
        return s === -1 || o === -1 || p === 0 || p === 1 && s === o - 1 && s === a + 1 ? o !== -1 && (a === 0 && r ? t.base = t.name = i.slice(1, o) : t.base = t.name = i.slice(a, o)) : (a === 0 && r ? (t.name = i.slice(1, s),
        t.base = i.slice(1, o)) : (t.name = i.slice(a, s),
        t.base = i.slice(a, o)),
        t.ext = i.slice(s, o)),
        t.dir = this.dirname(i),
        t
    },
    sep: "/",
    delimiter: ":",
    joinExtensions: [".html"]
};
let No;
async function Td() {
    return No ?? (No = (async () => {
        var s;
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
        const n = new Uint8Array(4);
        return i.readPixels(0, 0, 1, 1, i.RGBA, i.UNSIGNED_BYTE, n),
        i.deleteFramebuffer(r),
        i.deleteTexture(e),
        (s = i.getExtension("WEBGL_lose_context")) == null || s.loseContext(),
        n[0] <= n[3] ? ke.PMA : ke.UNPACK
    }
    )()),
    No
}
function Ev() {
    vt("7.0.0", "skipHello is deprecated, please use settings.RENDER_OPTIONS.hello")
}
function Av() {
    vt("7.0.0", `sayHello is deprecated, please use Renderer's "hello" option`)
}
let Lo;
function wd() {
    return typeof Lo > "u" && (Lo = function() {
        var t;
        const i = {
            stencil: !0,
            failIfMajorPerformanceCaveat: st.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
        };
        try {
            if (!st.ADAPTER.getWebGLRenderingContext())
                return !1;
            const e = st.ADAPTER.createCanvas();
            let r = e.getContext("webgl", i) || e.getContext("experimental-webgl", i);
            const n = !!((t = r == null ? void 0 : r.getContextAttributes()) != null && t.stencil);
            if (r) {
                const s = r.getExtension("WEBGL_lose_context");
                s && s.loseContext()
            }
            return r = null,
            n
        } catch {
            return !1
        }
    }()),
    Lo
}
var Sv = {
    grad: .9,
    turn: 360,
    rad: 360 / (2 * Math.PI)
}
  , Wr = function(i) {
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
  , Ed = function(i) {
    return (i = isFinite(i) ? i % 360 : 0) > 0 ? i : i + 360
}
  , Ku = function(i) {
    return {
        r: Ke(i.r, 0, 255),
        g: Ke(i.g, 0, 255),
        b: Ke(i.b, 0, 255),
        a: Ke(i.a)
    }
}
  , ko = function(i) {
    return {
        r: xe(i.r),
        g: xe(i.g),
        b: xe(i.b),
        a: xe(i.a, 3)
    }
}
  , Cv = /^#([0-9a-f]{3,8})$/i
  , Rs = function(i) {
    var t = i.toString(16);
    return t.length < 2 ? "0" + t : t
}
  , Ad = function(i) {
    var t = i.r
      , e = i.g
      , r = i.b
      , n = i.a
      , s = Math.max(t, e, r)
      , a = s - Math.min(t, e, r)
      , o = a ? s === t ? (e - r) / a : s === e ? 2 + (r - t) / a : 4 + (t - e) / a : 0;
    return {
        h: 60 * (o < 0 ? o + 6 : o),
        s: s ? a / s * 100 : 0,
        v: s / 255 * 100,
        a: n
    }
}
  , Sd = function(i) {
    var t = i.h
      , e = i.s
      , r = i.v
      , n = i.a;
    t = t / 360 * 6,
    e /= 100,
    r /= 100;
    var s = Math.floor(t)
      , a = r * (1 - e)
      , o = r * (1 - (t - s) * e)
      , l = r * (1 - (1 - t + s) * e)
      , c = s % 6;
    return {
        r: 255 * [r, o, a, a, l, r][c],
        g: 255 * [l, r, r, o, a, a][c],
        b: 255 * [a, a, l, r, r, o][c],
        a: n
    }
}
  , Zu = function(i) {
    return {
        h: Ed(i.h),
        s: Ke(i.s, 0, 100),
        l: Ke(i.l, 0, 100),
        a: Ke(i.a)
    }
}
  , Qu = function(i) {
    return {
        h: xe(i.h),
        s: xe(i.s),
        l: xe(i.l),
        a: xe(i.a, 3)
    }
}
  , Ju = function(i) {
    return Sd((e = (t = i).s,
    {
        h: t.h,
        s: (e *= ((r = t.l) < 50 ? r : 100 - r) / 100) > 0 ? 2 * e / (r + e) * 100 : 0,
        v: r + e,
        a: t.a
    }));
    var t, e, r
}
  , Qn = function(i) {
    return {
        h: (t = Ad(i)).h,
        s: (n = (200 - (e = t.s)) * (r = t.v) / 100) > 0 && n < 200 ? e * r / 100 / (n <= 100 ? n : 200 - n) * 100 : 0,
        l: n / 2,
        a: t.a
    };
    var t, e, r, n
}
  , Iv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , Rv = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , Pv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , Mv = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i
  , Eh = {
    string: [[function(i) {
        var t = Cv.exec(i);
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
        var t = Pv.exec(i) || Mv.exec(i);
        return t ? t[2] !== t[4] || t[4] !== t[6] ? null : Ku({
            r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
            g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
            b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
            a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
        }) : null
    }
    , "rgb"], [function(i) {
        var t = Iv.exec(i) || Rv.exec(i);
        if (!t)
            return null;
        var e, r, n = Zu({
            h: (e = t[1],
            r = t[2],
            r === void 0 && (r = "deg"),
            Number(e) * (Sv[r] || 1)),
            s: Number(t[3]),
            l: Number(t[4]),
            a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
        });
        return Ju(n)
    }
    , "hsl"]],
    object: [[function(i) {
        var t = i.r
          , e = i.g
          , r = i.b
          , n = i.a
          , s = n === void 0 ? 1 : n;
        return Wr(t) && Wr(e) && Wr(r) ? Ku({
            r: Number(t),
            g: Number(e),
            b: Number(r),
            a: Number(s)
        }) : null
    }
    , "rgb"], [function(i) {
        var t = i.h
          , e = i.s
          , r = i.l
          , n = i.a
          , s = n === void 0 ? 1 : n;
        if (!Wr(t) || !Wr(e) || !Wr(r))
            return null;
        var a = Zu({
            h: Number(t),
            s: Number(e),
            l: Number(r),
            a: Number(s)
        });
        return Ju(a)
    }
    , "hsl"], [function(i) {
        var t = i.h
          , e = i.s
          , r = i.v
          , n = i.a
          , s = n === void 0 ? 1 : n;
        if (!Wr(t) || !Wr(e) || !Wr(r))
            return null;
        var a = function(o) {
            return {
                h: Ed(o.h),
                s: Ke(o.s, 0, 100),
                v: Ke(o.v, 0, 100),
                a: Ke(o.a)
            }
        }({
            h: Number(t),
            s: Number(e),
            v: Number(r),
            a: Number(s)
        });
        return Sd(a)
    }
    , "hsv"]]
}
  , tc = function(i, t) {
    for (var e = 0; e < t.length; e++) {
        var r = t[e][0](i);
        if (r)
            return [r, t[e][1]]
    }
    return [null, void 0]
}
  , Dv = function(i) {
    return typeof i == "string" ? tc(i.trim(), Eh.string) : typeof i == "object" && i !== null ? tc(i, Eh.object) : [null, void 0]
}
  , Uo = function(i, t) {
    var e = Qn(i);
    return {
        h: e.h,
        s: Ke(e.s + 100 * t, 0, 100),
        l: e.l,
        a: e.a
    }
}
  , Go = function(i) {
    return (299 * i.r + 587 * i.g + 114 * i.b) / 1e3 / 255
}
  , ec = function(i, t) {
    var e = Qn(i);
    return {
        h: e.h,
        s: e.s,
        l: Ke(e.l + 100 * t, 0, 100),
        a: e.a
    }
}
  , Ah = function() {
    function i(t) {
        this.parsed = Dv(t)[0],
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
        return xe(Go(this.rgba), 2)
    }
    ,
    i.prototype.isDark = function() {
        return Go(this.rgba) < .5
    }
    ,
    i.prototype.isLight = function() {
        return Go(this.rgba) >= .5
    }
    ,
    i.prototype.toHex = function() {
        return t = ko(this.rgba),
        e = t.r,
        r = t.g,
        n = t.b,
        a = (s = t.a) < 1 ? Rs(xe(255 * s)) : "",
        "#" + Rs(e) + Rs(r) + Rs(n) + a;
        var t, e, r, n, s, a
    }
    ,
    i.prototype.toRgb = function() {
        return ko(this.rgba)
    }
    ,
    i.prototype.toRgbString = function() {
        return t = ko(this.rgba),
        e = t.r,
        r = t.g,
        n = t.b,
        (s = t.a) < 1 ? "rgba(" + e + ", " + r + ", " + n + ", " + s + ")" : "rgb(" + e + ", " + r + ", " + n + ")";
        var t, e, r, n, s
    }
    ,
    i.prototype.toHsl = function() {
        return Qu(Qn(this.rgba))
    }
    ,
    i.prototype.toHslString = function() {
        return t = Qu(Qn(this.rgba)),
        e = t.h,
        r = t.s,
        n = t.l,
        (s = t.a) < 1 ? "hsla(" + e + ", " + r + "%, " + n + "%, " + s + ")" : "hsl(" + e + ", " + r + "%, " + n + "%)";
        var t, e, r, n, s
    }
    ,
    i.prototype.toHsv = function() {
        return t = Ad(this.rgba),
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
        Tr(Uo(this.rgba, t))
    }
    ,
    i.prototype.desaturate = function(t) {
        return t === void 0 && (t = .1),
        Tr(Uo(this.rgba, -t))
    }
    ,
    i.prototype.grayscale = function() {
        return Tr(Uo(this.rgba, -1))
    }
    ,
    i.prototype.lighten = function(t) {
        return t === void 0 && (t = .1),
        Tr(ec(this.rgba, t))
    }
    ,
    i.prototype.darken = function(t) {
        return t === void 0 && (t = .1),
        Tr(ec(this.rgba, -t))
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
        var e = Qn(this.rgba);
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
    return i instanceof Ah ? i : new Ah(i)
}
  , rc = []
  , Bv = function(i) {
    i.forEach(function(t) {
        rc.indexOf(t) < 0 && (t(Ah, Eh),
        rc.push(t))
    })
};
function Fv(i, t) {
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
    for (var n in e)
        r[e[n]] = n;
    var s = {};
    i.prototype.toName = function(a) {
        if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
            return "transparent";
        var o, l, c = r[this.toHex()];
        if (c)
            return c;
        if (a != null && a.closest) {
            var p = this.toRgb()
              , g = 1 / 0
              , f = "black";
            if (!s.length)
                for (var v in e)
                    s[v] = new i(e[v]).toRgb();
            for (var _ in e) {
                var T = (o = p,
                l = s[_],
                Math.pow(o.r - l.r, 2) + Math.pow(o.g - l.g, 2) + Math.pow(o.b - l.b, 2));
                T < g && (g = T,
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
Bv([Fv]);
const Qi = class Js {
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
        if (t instanceof Js)
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
            return t.length !== e.length ? !1 : t.every( (n, s) => n === e[s]);
        if (t !== null && e !== null) {
            const n = Object.keys(t)
              , s = Object.keys(e);
            return n.length !== s.length ? !1 : n.every(a => t[a] === e[a])
        }
        return t === e
    }
    toRgba() {
        const [t,e,r,n] = this._components;
        return {
            r: t,
            g: e,
            b: r,
            a: n
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
        const [e,r,n] = this._components;
        return t = t ?? [],
        t[0] = Math.round(e * 255),
        t[1] = Math.round(r * 255),
        t[2] = Math.round(n * 255),
        t
    }
    toRgbArray(t) {
        t = t ?? [];
        const [e,r,n] = this._components;
        return t[0] = e,
        t[1] = r,
        t[2] = n,
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
        const [e,r,n,s] = Js.temp.setValue(t)._components;
        return this._components[0] *= e,
        this._components[1] *= r,
        this._components[2] *= n,
        this._components[3] *= s,
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
          , n = this._int >> 8 & 255
          , s = this._int & 255;
        return e && (r = r * t + .5 | 0,
        n = n * t + .5 | 0,
        s = s * t + .5 | 0),
        (t * 255 << 24) + (r << 16) + (n << 8) + s
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
        const [e,r,n] = this._components;
        return this._components[0] = Math.round(e * t) / t,
        this._components[1] = Math.round(r * t) / t,
        this._components[2] = Math.round(n * t) / t,
        this.refreshInt(),
        this._value = null,
        this
    }
    toArray(t) {
        t = t ?? [];
        const [e,r,n,s] = this._components;
        return t[0] = e,
        t[1] = r,
        t[2] = n,
        t[3] = s,
        t
    }
    normalize(t) {
        let e, r, n, s;
        if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
            const a = t;
            e = (a >> 16 & 255) / 255,
            r = (a >> 8 & 255) / 255,
            n = (a & 255) / 255,
            s = 1
        } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t),
            [e,r,n,s=1] = t;
        else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4)
            t = this._clamp(t, 0, 255),
            [e,r,n,s=255] = t,
            e /= 255,
            r /= 255,
            n /= 255,
            s /= 255;
        else if (typeof t == "string" || typeof t == "object") {
            if (typeof t == "string") {
                const o = Js.HEX_PATTERN.exec(t);
                o && (t = `#${o[2]}`)
            }
            const a = Tr(t);
            a.isValid() && ({r: e, g: r, b: n, a: s} = a.rgba,
            e /= 255,
            r /= 255,
            n /= 255)
        }
        if (e !== void 0)
            this._components[0] = e,
            this._components[1] = r,
            this._components[2] = n,
            this._components[3] = s,
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
        return typeof t == "number" ? Math.min(Math.max(t, e), r) : (t.forEach( (n, s) => {
            t[s] = Math.min(Math.max(n, e), r)
        }
        ),
        t)
    }
}
;
Qi.shared = new Qi,
Qi.temp = new Qi,
Qi.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
let Pt = Qi;
function Ov(i, t=[]) {
    return vt("7.2.0", "utils.hex2rgb is deprecated, use Color#toRgbArray instead"),
    Pt.shared.setValue(i).toRgbArray(t)
}
function Cd(i) {
    return vt("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"),
    Pt.shared.setValue(i).toHex()
}
function Nv(i) {
    return vt("7.2.0", "utils.string2hex is deprecated, use Color#toNumber instead"),
    Pt.shared.setValue(i).toNumber()
}
function Id(i) {
    return vt("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"),
    Pt.shared.setValue(i).toNumber()
}
function Lv() {
    const i = []
      , t = [];
    for (let r = 0; r < 32; r++)
        i[r] = r,
        t[r] = r;
    i[q.NORMAL_NPM] = q.NORMAL,
    i[q.ADD_NPM] = q.ADD,
    i[q.SCREEN_NPM] = q.SCREEN,
    t[q.NORMAL] = q.NORMAL_NPM,
    t[q.ADD] = q.ADD_NPM,
    t[q.SCREEN] = q.SCREEN_NPM;
    const e = [];
    return e.push(t),
    e.push(i),
    e
}
const _l = Lv();
function xl(i, t) {
    return _l[t ? 1 : 0][i]
}
function kv(i, t, e, r=!0) {
    return vt("7.2.0", "utils.premultiplyRgba has moved to Color.premultiply"),
    Pt.shared.setValue(i).premultiply(t, r).toArray(e ?? new Float32Array(4))
}
function Uv(i, t) {
    return vt("7.2.0", "utils.premultiplyTint has moved to Color.toPremultiplied"),
    Pt.shared.setValue(i).toPremultiplied(t)
}
function Gv(i, t, e, r=!0) {
    return vt("7.2.0", "utils.premultiplyTintToRgba has moved to Color.premultiply"),
    Pt.shared.setValue(i).premultiply(t, r).toArray(e ?? new Float32Array(4))
}
const Rd = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
function Pd(i, t=null) {
    const e = i * 6;
    if (t = t || new Uint16Array(e),
    t.length !== e)
        throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${e}`);
    for (let r = 0, n = 0; r < e; r += 6,
    n += 4)
        t[r + 0] = n + 0,
        t[r + 1] = n + 1,
        t[r + 2] = n + 2,
        t[r + 3] = n + 0,
        t[r + 4] = n + 2,
        t[r + 5] = n + 3;
    return t
}
function La(i) {
    if (i.BYTES_PER_ELEMENT === 4)
        return i instanceof Float32Array ? "Float32Array" : i instanceof Uint32Array ? "Uint32Array" : "Int32Array";
    if (i.BYTES_PER_ELEMENT === 2) {
        if (i instanceof Uint16Array)
            return "Uint16Array"
    } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array)
        return "Uint8Array";
    return null
}
const Hv = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
};
function $v(i, t) {
    let e = 0
      , r = 0;
    const n = {};
    for (let l = 0; l < i.length; l++)
        r += t[l],
        e += i[l].length;
    const s = new ArrayBuffer(e * 4);
    let a = null
      , o = 0;
    for (let l = 0; l < i.length; l++) {
        const c = t[l]
          , p = i[l]
          , g = La(p);
        n[g] || (n[g] = new Hv[g](s)),
        a = n[g];
        for (let f = 0; f < p.length; f++) {
            const v = (f / c | 0) * r + o
              , _ = f % c;
            a[v + _] = p[f]
        }
        o += c
    }
    return new Float32Array(s)
}
function is(i) {
    return i += i === 0 ? 1 : 0,
    --i,
    i |= i >>> 1,
    i |= i >>> 2,
    i |= i >>> 4,
    i |= i >>> 8,
    i |= i >>> 16,
    i + 1
}
function Sh(i) {
    return !(i & i - 1) && !!i
}
function Ch(i) {
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
    let n;
    if (t >= r || e === 0)
        return;
    e = t + e > r ? r - t : e;
    const s = r - e;
    for (n = t; n < s; ++n)
        i[n] = i[n + e];
    i.length = s
}
function Xr(i) {
    return i === 0 ? 0 : i < 0 ? -1 : 1
}
let Vv = 0;
function hi() {
    return ++Vv
}
const Ih = class {
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
Ih.EMPTY = new Ih(0,0,0,0);
let Rh = Ih;
const Ph = {}
  , Me = Object.create(null)
  , Ve = Object.create(null);
function Wv() {
    let i;
    for (i in Me)
        Me[i].destroy();
    for (i in Ve)
        Ve[i].destroy()
}
function jv() {
    let i;
    for (i in Me)
        delete Me[i];
    for (i in Ve)
        delete Ve[i]
}
class us {
    constructor(t, e, r) {
        this._canvas = st.ADAPTER.createCanvas(),
        this._context = this._canvas.getContext("2d"),
        this.resolution = r || st.RESOLUTION,
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
function ic(i, t, e) {
    for (let r = 0, n = 4 * e * t; r < t; ++r,
    n += 4)
        if (i[n + 3] !== 0)
            return !1;
    return !0
}
function nc(i, t, e, r, n) {
    const s = 4 * t;
    for (let a = r, o = r * s + 4 * e; a <= n; ++a,
    o += s)
        if (i[o + 3] !== 0)
            return !1;
    return !0
}
function Md(i) {
    const {width: t, height: e} = i
      , r = i.getContext("2d", {
        willReadFrequently: !0
    });
    if (r === null)
        throw new TypeError("Failed to get canvas 2D context");
    const n = r.getImageData(0, 0, t, e).data;
    let s = 0
      , a = 0
      , o = t - 1
      , l = e - 1;
    for (; a < e && ic(n, t, a); )
        ++a;
    if (a === e)
        return Rh.EMPTY;
    for (; ic(n, t, l); )
        --l;
    for (; nc(n, t, s, a, l); )
        ++s;
    for (; nc(n, t, o, a, l); )
        --o;
    return ++o,
    ++l,
    new Rh(s,a,o,l)
}
function Dd(i) {
    const t = Md(i)
      , {width: e, height: r} = t;
    let n = null;
    if (!t.isEmpty()) {
        const s = i.getContext("2d");
        if (s === null)
            throw new TypeError("Failed to get canvas 2D context");
        n = s.getImageData(t.left, t.top, e, r)
    }
    return {
        width: e,
        height: r,
        data: n
    }
}
function Xv(i) {
    const t = Rd.exec(i);
    if (t)
        return {
            mediaType: t[1] ? t[1].toLowerCase() : void 0,
            subType: t[2] ? t[2].toLowerCase() : void 0,
            charset: t[3] ? t[3].toLowerCase() : void 0,
            encoding: t[4] ? t[4].toLowerCase() : void 0,
            data: t[5]
        }
}
function Bd(i, t=globalThis.location) {
    if (i.startsWith("data:"))
        return "";
    t = t || globalThis.location;
    const e = new URL(i,document.baseURI);
    return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : ""
}
function Fr(i, t=1) {
    var r;
    const e = (r = st.RETINA_PREFIX) == null ? void 0 : r.exec(i);
    return e ? parseFloat(e[1]) : t
}
const zv = Object.freeze(Object.defineProperty({
    __proto__: null,
    BaseTextureCache: Ve,
    BoundingBox: Rh,
    CanvasRenderTarget: us,
    DATA_URI: Rd,
    EventEmitter: xn,
    ProgramCache: Ph,
    TextureCache: Me,
    clearTextureCache: jv,
    correctBlendMode: xl,
    createIndicesForQuads: Pd,
    decomposeDataUri: Xv,
    deprecation: vt,
    destroyTextureCache: Wv,
    detectVideoAlphaMode: Td,
    determineCrossOrigin: Bd,
    earcut: Kc,
    getBufferType: La,
    getCanvasBoundingBox: Md,
    getResolutionOfUrl: Fr,
    hex2rgb: Ov,
    hex2string: Cd,
    interleaveTypedArrays: $v,
    isMobile: Pr,
    isPow2: Sh,
    isWebGLSupported: wd,
    log2: Ch,
    nextPow2: is,
    path: ge,
    premultiplyBlendMode: _l,
    premultiplyRgba: kv,
    premultiplyTint: Uv,
    premultiplyTintToRgba: Gv,
    removeItems: Pi,
    rgb2hex: Id,
    sayHello: Av,
    sign: Xr,
    skipHello: Ev,
    string2hex: Nv,
    trimCanvas: Dd,
    uid: hi,
    url: xv
}, Symbol.toStringTag, {
    value: "Module"
}));
var rt = (i => (i.Renderer = "renderer",
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
i))(rt || {});
const Mh = i => {
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
  , sc = (i, t) => Mh(i).priority ?? t
  , ot = {
    _addHandlers: {},
    _removeHandlers: {},
    _queue: {},
    remove(...i) {
        return i.map(Mh).forEach(t => {
            t.type.forEach(e => {
                var r, n;
                return (n = (r = this._removeHandlers)[e]) == null ? void 0 : n.call(r, t)
            }
            )
        }
        ),
        this
    },
    add(...i) {
        return i.map(Mh).forEach(t => {
            t.type.forEach(e => {
                var s, a;
                const r = this._addHandlers
                  , n = this._queue;
                r[e] ? (s = r[e]) == null || s.call(r, t) : (n[e] = n[e] || [],
                (a = n[e]) == null || a.push(t))
            }
            )
        }
        ),
        this
    },
    handle(i, t, e) {
        var a;
        const r = this._addHandlers
          , n = this._removeHandlers;
        if (r[i] || n[i])
            throw new Error(`Extension type ${i} already has a handler`);
        r[i] = t,
        n[i] = e;
        const s = this._queue;
        return s[i] && ((a = s[i]) == null || a.forEach(o => t(o)),
        delete s[i]),
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
            t.sort( (n, s) => sc(s, e) - sc(n, e)))
        }
        , r => {
            const n = t.indexOf(r.ref);
            n !== -1 && t.splice(n, 1)
        }
        )
    }
};
class Dh {
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
const qv = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);
function Yv(i) {
    let t = "";
    for (let e = 0; e < i; ++e)
        e > 0 && (t += `
else `),
        e < i - 1 && (t += `if(test == ${e}.0){}`);
    return t
}
function Kv(i, t) {
    if (i === 0)
        throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    const e = t.createShader(t.FRAGMENT_SHADER);
    for (; ; ) {
        const r = qv.replace(/%forloop%/gi, Yv(i));
        if (t.shaderSource(e, r),
        t.compileShader(e),
        !t.getShaderParameter(e, t.COMPILE_STATUS))
            i = i / 2 | 0;
        else
            break
    }
    return i
}
const Ho = 0
  , $o = 1
  , Vo = 2
  , Wo = 3
  , jo = 4
  , Xo = 5;
class Nr {
    constructor() {
        this.data = 0,
        this.blendMode = q.NORMAL,
        this.polygonOffset = 0,
        this.blend = !0,
        this.depthMask = !0
    }
    get blend() {
        return !!(this.data & 1 << Ho)
    }
    set blend(t) {
        !!(this.data & 1 << Ho) !== t && (this.data ^= 1 << Ho)
    }
    get offsets() {
        return !!(this.data & 1 << $o)
    }
    set offsets(t) {
        !!(this.data & 1 << $o) !== t && (this.data ^= 1 << $o)
    }
    get culling() {
        return !!(this.data & 1 << Vo)
    }
    set culling(t) {
        !!(this.data & 1 << Vo) !== t && (this.data ^= 1 << Vo)
    }
    get depthTest() {
        return !!(this.data & 1 << Wo)
    }
    set depthTest(t) {
        !!(this.data & 1 << Wo) !== t && (this.data ^= 1 << Wo)
    }
    get depthMask() {
        return !!(this.data & 1 << Xo)
    }
    set depthMask(t) {
        !!(this.data & 1 << Xo) !== t && (this.data ^= 1 << Xo)
    }
    get clockwiseFrontFace() {
        return !!(this.data & 1 << jo)
    }
    set clockwiseFrontFace(t) {
        !!(this.data & 1 << jo) !== t && (this.data ^= 1 << jo)
    }
    get blendMode() {
        return this._blendMode
    }
    set blendMode(t) {
        this.blend = t !== q.NONE,
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
const Bh = [];
function Fd(i, t) {
    if (!i)
        return null;
    let e = "";
    if (typeof i == "string") {
        const r = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
        r && (e = r[1].toLowerCase())
    }
    for (let r = Bh.length - 1; r >= 0; --r) {
        const n = Bh[r];
        if (n.test && n.test(i, e))
            return new n(i,t)
    }
    throw new Error("Unrecognized source type to auto-detect Resource")
}
class ur {
    constructor(t) {
        this.items = [],
        this._name = t,
        this._aliasCount = 0
    }
    emit(t, e, r, n, s, a, o, l) {
        if (arguments.length > 8)
            throw new Error("max arguments reached");
        const {name: c, items: p} = this;
        this._aliasCount++;
        for (let g = 0, f = p.length; g < f; g++)
            p[g][c](t, e, r, n, s, a, o, l);
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
class ns {
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
class ka extends ns {
    constructor(t, e) {
        const {width: r, height: n} = e || {};
        if (!r || !n)
            throw new Error("BufferResource width or height invalid");
        super(r, n),
        this.data = t,
        this.unpackAlignment = e.unpackAlignment ?? 4
    }
    upload(t, e, r) {
        const n = t.gl;
        n.pixelStorei(n.UNPACK_ALIGNMENT, this.unpackAlignment),
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ke.UNPACK);
        const s = e.realWidth
          , a = e.realHeight;
        return r.width === s && r.height === a ? n.texSubImage2D(e.target, 0, 0, 0, s, a, e.format, r.type, this.data) : (r.width = s,
        r.height = a,
        n.texImage2D(e.target, 0, r.internalFormat, s, a, 0, e.format, r.type, this.data)),
        !0
    }
    dispose() {
        this.data = null
    }
    static test(t) {
        return t === null || t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array
    }
}
const Zv = {
    scaleMode: hr.NEAREST,
    alphaMode: ke.NPM
}
  , Fh = class Ji extends xn {
    constructor(t=null, e=null) {
        super(),
        e = Object.assign({}, Ji.defaultOptions, e);
        const {alphaMode: r, mipmap: n, anisotropicLevel: s, scaleMode: a, width: o, height: l, wrapMode: c, format: p, type: g, target: f, resolution: v, resourceOptions: _} = e;
        t && !(t instanceof ns) && (t = Fd(t, _),
        t.internal = !0),
        this.resolution = v || st.RESOLUTION,
        this.width = Math.round((o || 0) * this.resolution) / this.resolution,
        this.height = Math.round((l || 0) * this.resolution) / this.resolution,
        this._mipmap = n,
        this.anisotropicLevel = s,
        this._wrapMode = c,
        this._scaleMode = a,
        this.format = p,
        this.type = g,
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
        this.isPowerOfTwo = Sh(this.realWidth) && Sh(this.realHeight)
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
        this.cacheId && (delete Ve[this.cacheId],
        delete Me[this.cacheId],
        this.cacheId = null),
        this.valid = !1,
        this.dispose(),
        Ji.removeFromCache(this),
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
    static from(t, e, r=st.STRICT_TEXTURE_CACHE) {
        const n = typeof t == "string";
        let s = null;
        if (n)
            s = t;
        else {
            if (!t._pixiId) {
                const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t._pixiId = `${o}_${hi()}`
            }
            s = t._pixiId
        }
        let a = Ve[s];
        if (n && r && !a)
            throw new Error(`The cacheId "${s}" does not exist in BaseTextureCache.`);
        return a || (a = new Ji(t,e),
        a.cacheId = s,
        Ji.addToCache(a, s)),
        a
    }
    static fromBuffer(t, e, r, n) {
        t = t || new Float32Array(e * r * 4);
        const s = new ka(t,{
            width: e,
            height: r,
            ...n == null ? void 0 : n.resourceOptions
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
        s.internal = !0,
        new Ji(s,Object.assign({}, Zv, {
            type: o,
            format: a
        }, n))
    }
    static addToCache(t, e) {
        e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e),
        Ve[e] && Ve[e] !== t && console.warn(`BaseTexture added to the cache with an id [${e}] that already had an entry`),
        Ve[e] = t)
    }
    static removeFromCache(t) {
        if (typeof t == "string") {
            const e = Ve[t];
            if (e) {
                const r = e.textureCacheIds.indexOf(t);
                return r > -1 && e.textureCacheIds.splice(r, 1),
                delete Ve[t],
                e
            }
        } else if (t != null && t.textureCacheIds) {
            for (let e = 0; e < t.textureCacheIds.length; ++e)
                delete Ve[t.textureCacheIds[e]];
            return t.textureCacheIds.length = 0,
            t
        }
        return null
    }
}
;
Fh.defaultOptions = {
    mipmap: Br.POW2,
    anisotropicLevel: 0,
    scaleMode: hr.LINEAR,
    wrapMode: Yr.CLAMP,
    alphaMode: ke.UNPACK,
    target: hn.TEXTURE_2D,
    format: Z.RGBA,
    type: mt.UNSIGNED_BYTE
},
Fh._globalBatch = 0;
let Tt = Fh;
class Oh {
    constructor() {
        this.texArray = null,
        this.blend = 0,
        this.type = or.TRIANGLES,
        this.start = 0,
        this.size = 0,
        this.data = null
    }
}
let Qv = 0
  , pe = class Od {
    constructor(t, e=!0, r=!1) {
        this.data = t || new Float32Array(1),
        this._glBuffers = {},
        this._updateID = 0,
        this.index = r,
        this.static = e,
        this.id = Qv++,
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
        new Od(t)
    }
}
;
class fa {
    constructor(t, e=0, r=!1, n=mt.FLOAT, s, a, o, l=1) {
        this.buffer = t,
        this.size = e,
        this.normalized = r,
        this.type = n,
        this.stride = s,
        this.start = a,
        this.instance = o,
        this.divisor = l
    }
    destroy() {
        this.buffer = null
    }
    static from(t, e, r, n, s) {
        return new fa(t,e,r,n,s)
    }
}
const Jv = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
};
function t0(i, t) {
    let e = 0
      , r = 0;
    const n = {};
    for (let l = 0; l < i.length; l++)
        r += t[l],
        e += i[l].length;
    const s = new ArrayBuffer(e * 4);
    let a = null
      , o = 0;
    for (let l = 0; l < i.length; l++) {
        const c = t[l]
          , p = i[l]
          , g = La(p);
        n[g] || (n[g] = new Jv[g](s)),
        a = n[g];
        for (let f = 0; f < p.length; f++) {
            const v = (f / c | 0) * r + o
              , _ = f % c;
            a[v + _] = p[f]
        }
        o += c
    }
    return new Float32Array(s)
}
const ac = {
    5126: 4,
    5123: 2,
    5121: 1
};
let e0 = 0;
const r0 = {
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
        this.id = e0++,
        this.instanced = !1,
        this.instanceCount = 1,
        this.disposeRunner = new ur("disposeGeometry"),
        this.refCount = 0
    }
    addAttribute(t, e, r=0, n=!1, s, a, o, l=!1) {
        if (!e)
            throw new Error("You must pass a buffer when creating an attribute");
        e instanceof pe || (e instanceof Array && (e = new Float32Array(e)),
        e = new pe(e));
        const c = t.split("|");
        if (c.length > 1) {
            for (let g = 0; g < c.length; g++)
                this.addAttribute(c[g], e, r, n, s);
            return this
        }
        let p = this.buffers.indexOf(e);
        return p === -1 && (this.buffers.push(e),
        p = this.buffers.length - 1),
        this.attributes[t] = new fa(p,r,n,s,a,o,l),
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
        let n;
        for (n in this.attributes) {
            const s = this.attributes[n]
              , a = this.buffers[s.buffer];
            t.push(a.data),
            e.push(s.size * ac[s.type] / 4),
            s.buffer = 0
        }
        for (r.data = t0(t, e),
        n = 0; n < this.buffers.length; n++)
            this.buffers[n] !== this.indexBuffer && this.buffers[n].destroy();
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
            t.attributes[e] = new fa(r.buffer,r.size,r.normalized,r.type,r.stride,r.start,r.instance)
        }
        return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)],
        t.indexBuffer.type = Mr.ELEMENT_ARRAY_BUFFER),
        t
    }
    static merge(t) {
        const e = new li
          , r = []
          , n = []
          , s = [];
        let a;
        for (let o = 0; o < t.length; o++) {
            a = t[o];
            for (let l = 0; l < a.buffers.length; l++)
                n[l] = n[l] || 0,
                n[l] += a.buffers[l].data.length,
                s[l] = 0
        }
        for (let o = 0; o < a.buffers.length; o++)
            r[o] = new r0[La(a.buffers[o].data)](n[o]),
            e.buffers[o] = new pe(r[o]);
        for (let o = 0; o < t.length; o++) {
            a = t[o];
            for (let l = 0; l < a.buffers.length; l++)
                r[l].set(a.buffers[l].data, s[l]),
                s[l] += a.buffers[l].data.length
        }
        if (e.attributes = a.attributes,
        a.indexBuffer) {
            e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)],
            e.indexBuffer.type = Mr.ELEMENT_ARRAY_BUFFER;
            let o = 0
              , l = 0
              , c = 0
              , p = 0;
            for (let g = 0; g < a.buffers.length; g++)
                if (a.buffers[g] !== a.indexBuffer) {
                    p = g;
                    break
                }
            for (const g in a.attributes) {
                const f = a.attributes[g];
                (f.buffer | 0) === p && (l += f.size * ac[f.type] / 4)
            }
            for (let g = 0; g < t.length; g++) {
                const f = t[g].indexBuffer.data;
                for (let v = 0; v < f.length; v++)
                    e.indexBuffer.data[v + c] += o;
                o += t[g].buffers[p].data.length / l,
                c += f.length
            }
        }
        return e
    }
}
class Nd extends li {
    constructor(t=!1) {
        super(),
        this._buffer = new pe(null,t,!1),
        this._indexBuffer = new pe(null,t,!0),
        this.addAttribute("aVertexPosition", this._buffer, 2, !1, mt.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, mt.FLOAT).addAttribute("aColor", this._buffer, 4, !0, mt.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, mt.FLOAT).addIndex(this._indexBuffer)
    }
}
const pa = Math.PI * 2
  , i0 = 180 / Math.PI
  , n0 = Math.PI / 180;
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
const Ps = [new Bt, new Bt, new Bt, new Bt];
class At {
    constructor(t=0, e=0, r=0, n=0) {
        this.x = Number(t),
        this.y = Number(e),
        this.width = Number(r),
        this.height = Number(n),
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
          , n = this.right
          , s = this.top
          , a = this.bottom;
        if (n <= r || a <= s)
            return !1;
        const o = Ps[0].set(t.left, t.top)
          , l = Ps[1].set(t.left, t.bottom)
          , c = Ps[2].set(t.right, t.top)
          , p = Ps[3].set(t.right, t.bottom);
        if (c.x <= o.x || l.y <= o.y)
            return !1;
        const g = Math.sign(e.a * e.d - e.b * e.c);
        if (g === 0 || (e.apply(o, o),
        e.apply(l, l),
        e.apply(c, c),
        e.apply(p, p),
        Math.max(o.x, l.x, c.x, p.x) <= r || Math.min(o.x, l.x, c.x, p.x) >= n || Math.max(o.y, l.y, c.y, p.y) <= s || Math.min(o.y, l.y, c.y, p.y) >= a))
            return !1;
        const f = g * (l.y - o.y)
          , v = g * (o.x - l.x)
          , _ = f * r + v * s
          , T = f * n + v * s
          , A = f * r + v * a
          , E = f * n + v * a;
        if (Math.max(_, T, A, E) <= f * o.x + v * o.y || Math.min(_, T, A, E) >= f * p.x + v * p.y)
            return !1;
        const I = g * (o.y - c.y)
          , S = g * (c.x - o.x)
          , P = I * r + S * s
          , k = I * n + S * s
          , V = I * r + S * a
          , d = I * n + S * a;
        return !(Math.max(P, k, V, d) <= I * o.x + S * o.y || Math.min(P, k, V, d) >= I * p.x + S * p.y)
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
          , n = Math.max(this.y, t.y)
          , s = Math.min(this.y + this.height, t.y + t.height);
        return this.x = e,
        this.width = Math.max(r - e, 0),
        this.y = n,
        this.height = Math.max(s - n, 0),
        this
    }
    ceil(t=1, e=.001) {
        const r = Math.ceil((this.x + this.width - e) * t) / t
          , n = Math.ceil((this.y + this.height - e) * t) / t;
        return this.x = Math.floor((this.x + e) * t) / t,
        this.y = Math.floor((this.y + e) * t) / t,
        this.width = r - this.x,
        this.height = n - this.y,
        this
    }
    enlarge(t) {
        const e = Math.min(this.x, t.x)
          , r = Math.max(this.x + this.width, t.x + t.width)
          , n = Math.min(this.y, t.y)
          , s = Math.max(this.y + this.height, t.y + t.height);
        return this.x = e,
        this.width = r - e,
        this.y = n,
        this.height = s - n,
        this
    }
}
At.prototype.toString = function() {
    return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
}
;
class Ua {
    constructor(t=0, e=0, r=0) {
        this.x = t,
        this.y = e,
        this.radius = r,
        this.type = Zt.CIRC
    }
    clone() {
        return new Ua(this.x,this.y,this.radius)
    }
    contains(t, e) {
        if (this.radius <= 0)
            return !1;
        const r = this.radius * this.radius;
        let n = this.x - t
          , s = this.y - e;
        return n *= n,
        s *= s,
        n + s <= r
    }
    getBounds() {
        return new At(this.x - this.radius,this.y - this.radius,this.radius * 2,this.radius * 2)
    }
}
Ua.prototype.toString = function() {
    return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`
}
;
class Ga {
    constructor(t=0, e=0, r=0, n=0) {
        this.x = t,
        this.y = e,
        this.width = r,
        this.height = n,
        this.type = Zt.ELIP
    }
    clone() {
        return new Ga(this.x,this.y,this.width,this.height)
    }
    contains(t, e) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        let r = (t - this.x) / this.width
          , n = (e - this.y) / this.height;
        return r *= r,
        n *= n,
        r + n <= 1
    }
    getBounds() {
        return new At(this.x - this.width,this.y - this.height,this.width,this.height)
    }
}
Ga.prototype.toString = function() {
    return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
}
;
class Mi {
    constructor(...t) {
        let e = Array.isArray(t[0]) ? t[0] : t;
        if (typeof e[0] != "number") {
            const r = [];
            for (let n = 0, s = e.length; n < s; n++)
                r.push(e[n].x, e[n].y);
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
        const n = this.points.length / 2;
        for (let s = 0, a = n - 1; s < n; a = s++) {
            const o = this.points[s * 2]
              , l = this.points[s * 2 + 1]
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
class Ha {
    constructor(t=0, e=0, r=0, n=0, s=20) {
        this.x = t,
        this.y = e,
        this.width = r,
        this.height = n,
        this.radius = s,
        this.type = Zt.RREC
    }
    clone() {
        return new Ha(this.x,this.y,this.width,this.height,this.radius)
    }
    contains(t, e) {
        if (this.width <= 0 || this.height <= 0)
            return !1;
        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
            const r = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
            if (e >= this.y + r && e <= this.y + this.height - r || t >= this.x + r && t <= this.x + this.width - r)
                return !0;
            let n = t - (this.x + r)
              , s = e - (this.y + r);
            const a = r * r;
            if (n * n + s * s <= a || (n = t - (this.x + this.width - r),
            n * n + s * s <= a) || (s = e - (this.y + this.height - r),
            n * n + s * s <= a) || (n = t - (this.x + r),
            n * n + s * s <= a))
                return !0
        }
        return !1
    }
}
Ha.prototype.toString = function() {
    return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`
}
;
class jt {
    constructor(t=1, e=0, r=0, n=1, s=0, a=0) {
        this.array = null,
        this.a = t,
        this.b = e,
        this.c = r,
        this.d = n,
        this.tx = s,
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
    set(t, e, r, n, s, a) {
        return this.a = t,
        this.b = e,
        this.c = r,
        this.d = n,
        this.tx = s,
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
          , n = t.y;
        return e.x = this.a * r + this.c * n + this.tx,
        e.y = this.b * r + this.d * n + this.ty,
        e
    }
    applyInverse(t, e) {
        e = e || new Bt;
        const r = 1 / (this.a * this.d + this.c * -this.b)
          , n = t.x
          , s = t.y;
        return e.x = this.d * r * n + -this.c * r * s + (this.ty * this.c - this.tx * this.d) * r,
        e.y = this.a * r * s + -this.b * r * n + (-this.ty * this.a + this.tx * this.b) * r,
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
          , n = this.a
          , s = this.c
          , a = this.tx;
        return this.a = n * e - this.b * r,
        this.b = n * r + this.b * e,
        this.c = s * e - this.d * r,
        this.d = s * r + this.d * e,
        this.tx = a * e - this.ty * r,
        this.ty = a * r + this.ty * e,
        this
    }
    append(t) {
        const e = this.a
          , r = this.b
          , n = this.c
          , s = this.d;
        return this.a = t.a * e + t.b * n,
        this.b = t.a * r + t.b * s,
        this.c = t.c * e + t.d * n,
        this.d = t.c * r + t.d * s,
        this.tx = t.tx * e + t.ty * n + this.tx,
        this.ty = t.tx * r + t.ty * s + this.ty,
        this
    }
    setTransform(t, e, r, n, s, a, o, l, c) {
        return this.a = Math.cos(o + c) * s,
        this.b = Math.sin(o + c) * s,
        this.c = -Math.sin(o - l) * a,
        this.d = Math.cos(o - l) * a,
        this.tx = t - (r * this.a + n * this.c),
        this.ty = e - (r * this.b + n * this.d),
        this
    }
    prepend(t) {
        const e = this.tx;
        if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
            const r = this.a
              , n = this.c;
            this.a = r * t.a + this.b * t.c,
            this.b = r * t.b + this.b * t.d,
            this.c = n * t.a + this.d * t.c,
            this.d = n * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx,
        this.ty = e * t.b + this.ty * t.d + t.ty,
        this
    }
    decompose(t) {
        const e = this.a
          , r = this.b
          , n = this.c
          , s = this.d
          , a = t.pivot
          , o = -Math.atan2(-n, s)
          , l = Math.atan2(r, e)
          , c = Math.abs(o + l);
        return c < 1e-5 || Math.abs(pa - c) < 1e-5 ? (t.rotation = l,
        t.skew.x = t.skew.y = 0) : (t.rotation = 0,
        t.skew.x = o,
        t.skew.y = l),
        t.scale.x = Math.sqrt(e * e + r * r),
        t.scale.y = Math.sqrt(n * n + s * s),
        t.position.x = this.tx + (a.x * e + a.y * n),
        t.position.y = this.ty + (a.x * r + a.y * s),
        t
    }
    invert() {
        const t = this.a
          , e = this.b
          , r = this.c
          , n = this.d
          , s = this.tx
          , a = t * n - e * r;
        return this.a = n / a,
        this.b = -e / a,
        this.c = -r / a,
        this.d = t / a,
        this.tx = (r * this.ty - n * s) / a,
        this.ty = -(t * this.ty - e * s) / a,
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
        const t = new jt;
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
        return new jt
    }
    static get TEMP_MATRIX() {
        return new jt
    }
}
jt.prototype.toString = function() {
    return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
}
;
const bi = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]
  , Ti = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1]
  , wi = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1]
  , Ei = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1]
  , Nh = []
  , Ld = []
  , Ms = Math.sign;
function s0() {
    for (let i = 0; i < 16; i++) {
        const t = [];
        Nh.push(t);
        for (let e = 0; e < 16; e++) {
            const r = Ms(bi[i] * bi[e] + wi[i] * Ti[e])
              , n = Ms(Ti[i] * bi[e] + Ei[i] * Ti[e])
              , s = Ms(bi[i] * wi[e] + wi[i] * Ei[e])
              , a = Ms(Ti[i] * wi[e] + Ei[i] * Ei[e]);
            for (let o = 0; o < 16; o++)
                if (bi[o] === r && Ti[o] === n && wi[o] === s && Ei[o] === a) {
                    t.push(o);
                    break
                }
        }
    }
    for (let i = 0; i < 16; i++) {
        const t = new jt;
        t.set(bi[i], Ti[i], wi[i], Ei[i], 0, 0),
        Ld.push(t)
    }
}
s0();
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
    uX: i => bi[i],
    uY: i => Ti[i],
    vX: i => wi[i],
    vY: i => Ei[i],
    inv: i => i & 8 ? i & 15 : -i & 7,
    add: (i, t) => Nh[i][t],
    sub: (i, t) => Nh[i][ee.inv(t)],
    rotate180: i => i ^ 4,
    isVertical: i => (i & 3) === 2,
    byDirection: (i, t) => Math.abs(i) * 2 <= Math.abs(t) ? t >= 0 ? ee.S : ee.N : Math.abs(t) * 2 <= Math.abs(i) ? i > 0 ? ee.E : ee.W : t > 0 ? i > 0 ? ee.SE : ee.SW : i > 0 ? ee.NE : ee.NW,
    matrixAppendRotationInv: (i, t, e=0, r=0) => {
        const n = Ld[ee.inv(t)];
        n.tx = e,
        n.ty = r,
        i.append(n)
    }
};
class zr {
    constructor(t, e, r=0, n=0) {
        this._x = r,
        this._y = n,
        this.cb = t,
        this.scope = e
    }
    clone(t=this.cb, e=this.scope) {
        return new zr(t,e,this._x,this._y)
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
zr.prototype.toString = function() {
    return `[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`
}
;
const Lh = class {
    constructor() {
        this.worldTransform = new jt,
        this.localTransform = new jt,
        this.position = new zr(this.onChange,this,0,0),
        this.scale = new zr(this.onChange,this,1,1),
        this.pivot = new zr(this.onChange,this,0,0),
        this.skew = new zr(this.updateSkew,this,0,0),
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
Lh.IDENTITY = new Lh;
let $a = Lh;
$a.prototype.toString = function() {
    return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`
}
;
var a0 = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`
  , o0 = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;
function oc(i, t, e) {
    const r = i.createShader(t);
    return i.shaderSource(r, e),
    i.compileShader(r),
    r
}
function zo(i) {
    const t = new Array(i);
    for (let e = 0; e < t.length; e++)
        t[e] = !1;
    return t
}
function kd(i, t) {
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
        return zo(2 * t);
    case "bvec3":
        return zo(3 * t);
    case "bvec4":
        return zo(4 * t);
    case "mat2":
        return new Float32Array([1, 0, 0, 1]);
    case "mat3":
        return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    case "mat4":
        return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    return null
}
const cn = [{
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
  , h0 = {
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
  , l0 = {
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
function u0(i, t) {
    var r;
    const e = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
    for (const n in i.uniforms) {
        const s = t[n];
        if (!s) {
            ((r = i.uniforms[n]) == null ? void 0 : r.group) === !0 && (i.uniforms[n].ubo ? e.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${n}, '${n}');
                    `) : e.push(`
                        renderer.shader.syncUniformGroup(uv.${n}, syncData);
                    `));
            continue
        }
        const a = i.uniforms[n];
        let o = !1;
        for (let l = 0; l < cn.length; l++)
            if (cn[l].test(s, a)) {
                e.push(cn[l].code(n, a)),
                o = !0;
                break
            }
        if (!o) {
            const l = (s.size === 1 && !s.isArray ? h0 : l0)[s.type].replace("location", `ud["${n}"].location`);
            e.push(`
            cu = ud["${n}"];
            cv = cu.value;
            v = uv["${n}"];
            ${l};`)
        }
    }
    return new Function("ud","uv","renderer","syncData",e.join(`
`))
}
const Ud = {};
let qi = Ud;
function c0() {
    if (qi === Ud || qi != null && qi.isContextLost()) {
        const i = st.ADAPTER.createCanvas();
        let t;
        st.PREFER_ENV >= Oi.WEBGL2 && (t = i.getContext("webgl2", {})),
        t || (t = i.getContext("webgl", {}) || i.getContext("experimental-webgl", {}),
        t ? t.getExtension("WEBGL_draw_buffers") : t = null),
        qi = t
    }
    return qi
}
let Ds;
function d0() {
    if (!Ds) {
        Ds = Ye.MEDIUM;
        const i = c0();
        if (i && i.getShaderPrecisionFormat) {
            const t = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT);
            t && (Ds = t.precision ? Ye.HIGH : Ye.MEDIUM)
        }
    }
    return Ds
}
function hc(i, t) {
    const e = i.getShaderSource(t).split(`
`).map( (c, p) => `${p}: ${c}`)
      , r = i.getShaderInfoLog(t)
      , n = r.split(`
`)
      , s = {}
      , a = n.map(c => parseFloat(c.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(c => c && !s[c] ? (s[c] = !0,
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
function f0(i, t, e, r) {
    i.getProgramParameter(t, i.LINK_STATUS) || (i.getShaderParameter(e, i.COMPILE_STATUS) || hc(i, e),
    i.getShaderParameter(r, i.COMPILE_STATUS) || hc(i, r),
    console.error("PixiJS Error: Could not initialize shader."),
    i.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", i.getProgramInfoLog(t)))
}
const p0 = {
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
function Gd(i) {
    return p0[i]
}
let Bs = null;
const lc = {
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
function Hd(i, t) {
    if (!Bs) {
        const e = Object.keys(lc);
        Bs = {};
        for (let r = 0; r < e.length; ++r) {
            const n = e[r];
            Bs[i[n]] = lc[n]
        }
    }
    return Bs[t]
}
function uc(i, t, e) {
    if (i.substring(0, 9) !== "precision") {
        let r = t;
        return t === Ye.HIGH && e !== Ye.HIGH && (r = Ye.MEDIUM),
        `precision ${r} float;
${i}`
    } else if (e !== Ye.HIGH && i.substring(0, 15) === "precision highp")
        return i.replace("precision highp", "precision mediump");
    return i
}
let On;
function g0() {
    if (typeof On == "boolean")
        return On;
    try {
        On = new Function("param1","param2","param3","return param1[param2] === param3;")({
            a: "b"
        }, "a", "b") === !0
    } catch {
        On = !1
    }
    return On
}
let m0 = 0;
const Fs = {}
  , kh = class tn {
    constructor(t, e, r="pixi-shader", n={}) {
        this.extra = {},
        this.id = m0++,
        this.vertexSrc = t || tn.defaultVertexSrc,
        this.fragmentSrc = e || tn.defaultFragmentSrc,
        this.vertexSrc = this.vertexSrc.trim(),
        this.fragmentSrc = this.fragmentSrc.trim(),
        this.extra = n,
        this.vertexSrc.substring(0, 8) !== "#version" && (r = r.replace(/\s+/g, "-"),
        Fs[r] ? (Fs[r]++,
        r += `-${Fs[r]}`) : Fs[r] = 1,
        this.vertexSrc = `#define SHADER_NAME ${r}
${this.vertexSrc}`,
        this.fragmentSrc = `#define SHADER_NAME ${r}
${this.fragmentSrc}`,
        this.vertexSrc = uc(this.vertexSrc, tn.defaultVertexPrecision, Ye.HIGH),
        this.fragmentSrc = uc(this.fragmentSrc, tn.defaultFragmentPrecision, d0())),
        this.glPrograms = {},
        this.syncUniforms = null
    }
    static get defaultVertexSrc() {
        return o0
    }
    static get defaultFragmentSrc() {
        return a0
    }
    static from(t, e, r) {
        const n = t + e;
        let s = Ph[n];
        return s || (Ph[n] = s = new tn(t,e,r)),
        s
    }
}
;
kh.defaultVertexPrecision = Ye.HIGH,
kh.defaultFragmentPrecision = Pr.apple.device ? Ye.HIGH : Ye.MEDIUM;
let qr = kh
  , y0 = 0;
class cr {
    constructor(t, e, r) {
        this.group = !0,
        this.syncUniforms = {},
        this.dirtyId = 0,
        this.id = y0++,
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
            const n = e.uniforms[r];
            if (n.group === !0 && this.checkUniformExists(t, n))
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
        const n = qr.from(t, e);
        return new Dr(n,r)
    }
}
class v0 {
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
            for (let s = 0; s < t; s++)
                r[s] = s;
            this.defaultGroupCache[t] = cr.from({
                uSamplers: r
            }, !0);
            let n = this.fragTemplate;
            n = n.replace(/%count%/gi, `${t}`),
            n = n.replace(/%forloop%/gi, this.generateSampleSrc(t)),
            this.programCache[t] = new qr(this.vertexSrc,n)
        }
        const e = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new jt,
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
class Uh {
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
function _0() {
    return !Pr.apple.device
}
function x0(i) {
    let t = !0;
    const e = st.ADAPTER.getNavigator();
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
class Va {
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
var b0 = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`
  , T0 = `precision highp float;
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
const $n = class nr extends Va {
    constructor(t) {
        super(t),
        this.setShaderGenerator(),
        this.geometryClass = Nd,
        this.vertexSize = 6,
        this.state = Nr.for2d(),
        this.size = nr.defaultBatchSize * 4,
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
        return this._defaultMaxTextures = this._defaultMaxTextures ?? x0(32),
        this._defaultMaxTextures
    }
    static set defaultMaxTextures(t) {
        this._defaultMaxTextures = t
    }
    static get canUploadSameBuffer() {
        return this._canUploadSameBuffer = this._canUploadSameBuffer ?? _0(),
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
        return T0
    }
    static get defaultFragmentTemplate() {
        return b0
    }
    setShaderGenerator({vertex: t=nr.defaultVertexSrc, fragment: e=nr.defaultFragmentTemplate}={}) {
        this.shaderGenerator = new v0(t,e)
    }
    contextChange() {
        const t = this.renderer.gl;
        st.PREFER_ENV === Oi.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), nr.defaultMaxTextures),
        this.maxTextures = Kv(this.maxTextures, t)),
        this._shader = this.shaderGenerator.generateShader(this.maxTextures);
        for (let e = 0; e < this._packedGeometryPoolSize; e++)
            this._packedGeometries[e] = new this.geometryClass;
        this.initFlushBuffers()
    }
    initFlushBuffers() {
        const {_drawCallPool: t, _textureArrayPool: e} = nr
          , r = this.size / 4
          , n = Math.floor(r / this.maxTextures) + 1;
        for (; t.length < r; )
            t.push(new Oh);
        for (; e.length < n; )
            e.push(new Uh);
        for (let s = 0; s < this.maxTextures; s++)
            this._tempBoundTextures[s] = null
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
          , r = nr._textureArrayPool
          , n = this.renderer.batch
          , s = this._tempBoundTextures
          , a = this.renderer.textureGC.count;
        let o = ++Tt._globalBatch
          , l = 0
          , c = r[0]
          , p = 0;
        n.copyBoundTextures(s, e);
        for (let g = 0; g < this._bufferSize; ++g) {
            const f = t[g];
            t[g] = null,
            f._batchEnabled !== o && (c.count >= e && (n.boundArray(c, s, o, e),
            this.buildDrawCalls(c, p, g),
            p = g,
            c = r[++l],
            ++o),
            f._batchEnabled = o,
            f.touched = a,
            c.elements[c.count++] = f)
        }
        c.count > 0 && (n.boundArray(c, s, o, e),
        this.buildDrawCalls(c, p, this._bufferSize),
        ++l,
        ++o);
        for (let g = 0; g < s.length; g++)
            s[g] = null;
        Tt._globalBatch = o
    }
    buildDrawCalls(t, e, r) {
        const {_bufferedElements: n, _attributeBuffer: s, _indexBuffer: a, vertexSize: o} = this
          , l = nr._drawCallPool;
        let c = this._dcIndex
          , p = this._aIndex
          , g = this._iIndex
          , f = l[c];
        f.start = this._iIndex,
        f.texArray = t;
        for (let v = e; v < r; ++v) {
            const _ = n[v]
              , T = _._texture.baseTexture
              , A = _l[T.alphaMode ? 1 : 0][_.blendMode];
            n[v] = null,
            e < v && f.blend !== A && (f.size = g - f.start,
            e = v,
            f = l[++c],
            f.texArray = t,
            f.start = g),
            this.packInterleavedGeometry(_, s, a, p, g),
            p += _.vertexData.length / 2 * o,
            g += _.indices.length,
            f.blend = A
        }
        e < r && (f.size = g - f.start,
        ++c),
        this._dcIndex = c,
        this._aIndex = p,
        this._iIndex = g
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
        nr.canUploadSameBuffer ? (t[this._flushId]._buffer.update(e.rawBinaryData),
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
          , n = nr._drawCallPool;
        let s = null;
        for (let a = 0; a < t; a++) {
            const {texArray: o, type: l, size: c, start: p, blend: g} = n[a];
            s !== o && (s = o,
            this.bindAndClearTexArray(o)),
            this.state.blendMode = g,
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
        nr.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
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
        const e = is(Math.ceil(t / 8))
          , r = Ch(e)
          , n = e * 8;
        this._aBuffers.length <= r && (this._iBuffers.length = r + 1);
        let s = this._aBuffers[n];
        return s || (this._aBuffers[n] = s = new Dh(n * this.vertexSize * 4)),
        s
    }
    getIndexBuffer(t) {
        const e = is(Math.ceil(t / 12))
          , r = Ch(e)
          , n = e * 12;
        this._iBuffers.length <= r && (this._iBuffers.length = r + 1);
        let s = this._iBuffers[r];
        return s || (this._iBuffers[r] = s = new Uint16Array(n)),
        s
    }
    packInterleavedGeometry(t, e, r, n, s) {
        const {uint32View: a, float32View: o} = e
          , l = n / this.vertexSize
          , c = t.uvs
          , p = t.indices
          , g = t.vertexData
          , f = t._texture.baseTexture._batchLocation
          , v = Math.min(t.worldAlpha, 1)
          , _ = Pt.shared.setValue(t._tintRGB).toPremultiplied(v, t._texture.baseTexture.alphaMode > 0);
        for (let T = 0; T < g.length; T += 2)
            o[n++] = g[T],
            o[n++] = g[T + 1],
            o[n++] = c[T],
            o[n++] = c[T + 1],
            a[n++] = _,
            o[n++] = f;
        for (let T = 0; T < p.length; T++)
            r[s++] = l + p[T]
    }
}
;
$n.defaultBatchSize = 4096,
$n.extension = {
    name: "batch",
    type: rt.RendererPlugin
},
$n._drawCallPool = [],
$n._textureArrayPool = [];
let Ai = $n;
ot.add(Ai);
var w0 = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`
  , E0 = `attribute vec2 aVertexPosition;

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
const Gh = class Vn extends Dr {
    constructor(t, e, r) {
        const n = qr.from(t || Vn.defaultVertexSrc, e || Vn.defaultFragmentSrc);
        super(n, r),
        this.padding = 0,
        this.resolution = Vn.defaultResolution,
        this.multisample = Vn.defaultMultisample,
        this.enabled = !0,
        this.autoFit = !0,
        this.state = new Nr
    }
    apply(t, e, r, n, s) {
        t.applyFilter(this, e, r, n)
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
        return E0
    }
    static get defaultFragmentSrc() {
        return w0
    }
}
;
Gh.defaultResolution = 1,
Gh.defaultMultisample = he.NONE;
let De = Gh;
class ga {
    constructor() {
        this.clearBeforeRender = !0,
        this._backgroundColor = new Pt(0),
        this.alpha = 1
    }
    init(t) {
        this.clearBeforeRender = t.clearBeforeRender;
        const {backgroundColor: e, background: r, backgroundAlpha: n} = t
          , s = r ?? e;
        s !== void 0 && (this.color = s),
        this.alpha = n
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
ga.defaultOptions = {
    backgroundAlpha: 1,
    backgroundColor: 0,
    clearBeforeRender: !0
},
ga.extension = {
    type: [rt.RendererSystem, rt.CanvasRendererSystem],
    name: "background"
};
ot.add(ga);
class $d {
    constructor(t) {
        this.renderer = t,
        this.emptyRenderer = new Va(t),
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
        for (let n = e - 1; n >= 0; --n)
            t[n] = r[n] || null,
            t[n] && (t[n]._batchLocation = n)
    }
    boundArray(t, e, r, n) {
        const {elements: s, ids: a, count: o} = t;
        let l = 0;
        for (let c = 0; c < o; c++) {
            const p = s[c]
              , g = p._batchLocation;
            if (g >= 0 && g < n && e[g] === p) {
                a[c] = g;
                continue
            }
            for (; l < n; ) {
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
$d.extension = {
    type: rt.RendererSystem,
    name: "batch"
};
ot.add($d);
let cc = 0;
class ma {
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
        this.renderer.CONTEXT_UID = cc++
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
        this.renderer.CONTEXT_UID = cc++,
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
        if (st.PREFER_ENV >= Oi.WEBGL2 && (r = t.getContext("webgl2", e)),
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
        const n = r || !!t.getExtension("OES_element_index_uint");
        this.supports.uint32Indices = n,
        n || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
    }
}
ma.defaultOptions = {
    context: null,
    antialias: !1,
    premultipliedAlpha: !0,
    preserveDrawingBuffer: !1,
    powerPreference: "default"
},
ma.extension = {
    type: rt.RendererSystem,
    name: "context"
};
ot.add(ma);
class Hh {
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
                const n = this.colorTextures[r]
                  , s = n.resolution;
                n.setSize(t / s, e / s)
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
class bl extends Tt {
    constructor(t={}) {
        if (typeof t == "number") {
            const e = arguments[0]
              , r = arguments[1]
              , n = arguments[2]
              , s = arguments[3];
            t = {
                width: e,
                height: r,
                scaleMode: n,
                resolution: s
            }
        }
        t.width = t.width ?? 100,
        t.height = t.height ?? 100,
        t.multisample ?? (t.multisample = he.NONE),
        super(null, t),
        this.mipmap = Br.OFF,
        this.valid = !0,
        this._clear = new Pt([0, 0, 0, 0]),
        this.framebuffer = new Hh(this.realWidth,this.realHeight).addColorTexture(0, this),
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
class Kr extends ns {
    constructor(t) {
        const e = t
          , r = e.naturalWidth || e.videoWidth || e.displayWidth || e.width
          , n = e.naturalHeight || e.videoHeight || e.displayHeight || e.height;
        super(r, n),
        this.source = t,
        this.noSubImage = !1
    }
    static crossOrigin(t, e, r) {
        r === void 0 && !e.startsWith("data:") ? t.crossOrigin = Bd(e) : r !== !1 && (t.crossOrigin = typeof r == "string" ? r : "anonymous")
    }
    upload(t, e, r, n) {
        const s = t.gl
          , a = e.realWidth
          , o = e.realHeight;
        if (n = n || this.source,
        typeof HTMLImageElement < "u" && n instanceof HTMLImageElement) {
            if (!n.complete || n.naturalWidth === 0)
                return !1
        } else if (typeof HTMLVideoElement < "u" && n instanceof HTMLVideoElement && n.readyState <= 1)
            return !1;
        return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === ke.UNPACK),
        !this.noSubImage && e.target === s.TEXTURE_2D && r.width === a && r.height === o ? s.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, e.format, r.type, n) : (r.width = a,
        r.height = o,
        s.texImage2D(e.target, 0, r.internalFormat, e.format, r.type, n)),
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
class Vd extends Kr {
    constructor(t, e) {
        if (e = e || {},
        typeof t == "string") {
            const r = new Image;
            Kr.crossOrigin(r, t, e.crossorigin),
            r.src = t,
            t = r
        }
        super(t),
        !t.complete && this._width && this._height && (this._width = 0,
        this._height = 0),
        this.url = t.src,
        this._process = null,
        this.preserveBitmap = !1,
        this.createBitmap = (e.createBitmap ?? st.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap,
        this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null,
        this.bitmap = null,
        this._load = null,
        e.autoLoad !== !1 && this.load()
    }
    load(t) {
        return this._load ? this._load : (t !== void 0 && (this.createBitmap = t),
        this._load = new Promise( (e, r) => {
            const n = this.source;
            this.url = n.src;
            const s = () => {
                this.destroyed || (n.onload = null,
                n.onerror = null,
                this.update(),
                this._load = null,
                this.createBitmap ? e(this.process()) : e(this))
            }
            ;
            n.complete && n.src ? s() : (n.onload = s,
            n.onerror = a => {
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
        }).then(n => n.blob()).then(n => e(n, 0, 0, t.width, t.height, {
            premultiplyAlpha: this.alphaMode === null || this.alphaMode === ke.UNPACK ? "premultiply" : "none"
        })).then(n => this.destroyed ? Promise.reject() : (this.bitmap = n,
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
            let n = !0;
            const s = e._glTextures;
            for (const a in s) {
                const o = s[a];
                if (o !== r && o.dirtyId !== e.dirtyId) {
                    n = !1;
                    break
                }
            }
            n && (this.bitmap.close && this.bitmap.close(),
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
class Tl {
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
        const n = e.width
          , s = e.height;
        if (r) {
            const a = t.width / 2 / n
              , o = t.height / 2 / s
              , l = t.x / n + a
              , c = t.y / s + o;
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
            this.x0 = t.x / n,
            this.y0 = t.y / s,
            this.x1 = (t.x + t.width) / n,
            this.y1 = t.y / s,
            this.x2 = (t.x + t.width) / n,
            this.y2 = (t.y + t.height) / s,
            this.x3 = t.x / n,
            this.y3 = (t.y + t.height) / s;
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
Tl.prototype.toString = function() {
    return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`
}
;
const dc = new Tl;
function Os(i) {
    i.destroy = function() {}
    ,
    i.on = function() {}
    ,
    i.once = function() {}
    ,
    i.emit = function() {}
}
class ut extends xn {
    constructor(t, e, r, n, s, a, o) {
        if (super(),
        this.noFrame = !1,
        e || (this.noFrame = !0,
        e = new At(0,0,1,1)),
        t instanceof ut && (t = t.baseTexture),
        this.baseTexture = t,
        this._frame = e,
        this.trim = n,
        this.valid = !1,
        this.destroyed = !1,
        this._uvs = dc,
        this.uvMatrix = null,
        this.orig = r || e,
        this._rotate = Number(s || 0),
        s === !0)
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
        var n;
        const t = this._frame.clone()
          , e = this._frame === this.orig ? t : this.orig.clone()
          , r = new ut(this.baseTexture,!this.noFrame && t,e,(n = this.trim) == null ? void 0 : n.clone(),this.rotate,this.defaultAnchor,this.defaultBorders);
        return this.noFrame && (r._frame = t),
        r
    }
    updateUvs() {
        this._uvs === dc && (this._uvs = new Tl),
        this._uvs.set(this._frame, this.baseTexture, this.rotate),
        this._updateID++
    }
    static from(t, e={}, r=st.STRICT_TEXTURE_CACHE) {
        const n = typeof t == "string";
        let s = null;
        if (n)
            s = t;
        else if (t instanceof Tt) {
            if (!t.cacheId) {
                const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t.cacheId = `${o}-${hi()}`,
                Tt.addToCache(t, t.cacheId)
            }
            s = t.cacheId
        } else {
            if (!t._pixiId) {
                const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
                t._pixiId = `${o}_${hi()}`
            }
            s = t._pixiId
        }
        let a = Me[s];
        if (n && r && !a)
            throw new Error(`The cacheId "${s}" does not exist in TextureCache.`);
        return !a && !(t instanceof Tt) ? (e.resolution || (e.resolution = Fr(t)),
        a = new ut(new Tt(t,e)),
        a.baseTexture.cacheId = s,
        Tt.addToCache(a.baseTexture, s),
        ut.addToCache(a, s)) : !a && t instanceof Tt && (a = new ut(t),
        ut.addToCache(a, s)),
        a
    }
    static fromURL(t, e) {
        const r = Object.assign({
            autoLoad: !1
        }, e == null ? void 0 : e.resourceOptions)
          , n = ut.from(t, Object.assign({
            resourceOptions: r
        }, e), !1)
          , s = n.baseTexture.resource;
        return n.baseTexture.valid ? Promise.resolve(n) : s.load().then( () => Promise.resolve(n))
    }
    static fromBuffer(t, e, r, n) {
        return new ut(Tt.fromBuffer(t, e, r, n))
    }
    static fromLoader(t, e, r, n) {
        const s = new Tt(t,Object.assign({
            scaleMode: Tt.defaultOptions.scaleMode,
            resolution: Fr(e)
        }, n))
          , {resource: a} = s;
        a instanceof Vd && (a.url = e);
        const o = new ut(s);
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
        const {x: e, y: r, width: n, height: s} = t
          , a = e + n > this.baseTexture.width
          , o = r + s > this.baseTexture.height;
        if (a || o) {
            const l = a && o ? "and" : "or"
              , c = `X: ${e} + ${n} = ${e + n} > ${this.baseTexture.width}`
              , p = `Y: ${r} + ${s} = ${r + s} > ${this.baseTexture.height}`;
            throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${c} ${l} ${p}`)
        }
        this.valid = n && s && this.baseTexture.valid,
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
        Os(ut._EMPTY),
        Os(ut._EMPTY.baseTexture)),
        ut._EMPTY
    }
    static get WHITE() {
        if (!ut._WHITE) {
            const t = st.ADAPTER.createCanvas(16, 16)
              , e = t.getContext("2d");
            t.width = 16,
            t.height = 16,
            e.fillStyle = "white",
            e.fillRect(0, 0, 16, 16),
            ut._WHITE = new ut(Tt.from(t)),
            Os(ut._WHITE),
            Os(ut._WHITE.baseTexture)
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
        const n = this.baseTexture.resolution
          , s = Math.round(t * n) / n
          , a = Math.round(e * n) / n;
        this.valid = s > 0 && a > 0,
        this._frame.width = this.orig.width = s,
        this._frame.height = this.orig.height = a,
        r && this.baseTexture.resize(s, a),
        this.updateUvs()
    }
    setResolution(t) {
        const {baseTexture: e} = this;
        e.resolution !== t && (e.setResolution(t),
        this.resize(e.width, e.height, !1))
    }
    static create(t) {
        return new Or(new bl(t))
    }
}
class Wd {
    constructor(t) {
        this.texturePool = {},
        this.textureOptions = t || {},
        this.enableFullScreen = !1,
        this._pixelsWidth = 0,
        this._pixelsHeight = 0
    }
    createTexture(t, e, r=he.NONE) {
        const n = new bl(Object.assign({
            width: t,
            height: e,
            resolution: 1,
            multisample: r
        }, this.textureOptions));
        return new Or(n)
    }
    getOptimalTexture(t, e, r=1, n=he.NONE) {
        let s;
        t = Math.max(Math.ceil(t * r - 1e-6), 1),
        e = Math.max(Math.ceil(e * r - 1e-6), 1),
        !this.enableFullScreen || t !== this._pixelsWidth || e !== this._pixelsHeight ? (t = is(t),
        e = is(e),
        s = ((t & 65535) << 16 | e & 65535) >>> 0,
        n > 1 && (s += n * 4294967296)) : s = n > 1 ? -n : -1,
        this.texturePool[s] || (this.texturePool[s] = []);
        let a = this.texturePool[s].pop();
        return a || (a = this.createTexture(t, e, n)),
        a.filterPoolKey = s,
        a.setResolution(r),
        a
    }
    getFilterTexture(t, e, r) {
        const n = this.getOptimalTexture(t.width, t.height, e || t.resolution, r || he.NONE);
        return n.filterFrame = t.filterFrame,
        n
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
                    for (let n = 0; n < r.length; n++)
                        r[n].destroy(!0)
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
                    for (let n = 0; n < r.length; n++)
                        r[n].destroy(!0);
                this.texturePool[e] = []
            }
            this._pixelsWidth = t.width,
            this._pixelsHeight = t.height
        }
    }
}
Wd.SCREEN_KEY = -1;
class A0 extends li {
    constructor() {
        super(),
        this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
    }
}
class jd extends li {
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
          , n = 0;
        return this.uvs[0] = r,
        this.uvs[1] = n,
        this.uvs[2] = r + e.width / t.width,
        this.uvs[3] = n,
        this.uvs[4] = r + e.width / t.width,
        this.uvs[5] = n + e.height / t.height,
        this.uvs[6] = r,
        this.uvs[7] = n + e.height / t.height,
        r = e.x,
        n = e.y,
        this.vertices[0] = r,
        this.vertices[1] = n,
        this.vertices[2] = r + e.width,
        this.vertices[3] = n,
        this.vertices[4] = r + e.width,
        this.vertices[5] = n + e.height,
        this.vertices[6] = r,
        this.vertices[7] = n + e.height,
        this.invalidate(),
        this
    }
    invalidate() {
        return this.vertexBuffer._updateID++,
        this.uvBuffer._updateID++,
        this
    }
}
class S0 {
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
const Ns = [new Bt, new Bt, new Bt, new Bt]
  , qo = new jt;
class Xd {
    constructor(t) {
        this.renderer = t,
        this.defaultFilterStack = [{}],
        this.texturePool = new Wd,
        this.statePool = [],
        this.quad = new A0,
        this.quadUv = new jd,
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
          , n = this.defaultFilterStack
          , s = this.statePool.pop() || new S0
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
          , g = e[0].padding
          , f = e[0].autoFit
          , v = e[0].legacy ?? !0;
        for (let A = 1; A < e.length; A++) {
            const E = e[A];
            c = Math.min(c, E.resolution || o),
            p = Math.min(p, E.multisample ?? l),
            g = this.useMaxPadding ? Math.max(g, E.padding) : g + E.padding,
            f = f && E.autoFit,
            v = v || (E.legacy ?? !0)
        }
        n.length === 1 && (this.defaultFilterStack[0].renderTexture = a.current),
        n.push(s),
        s.resolution = c,
        s.multisample = p,
        s.legacy = v,
        s.target = t,
        s.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)),
        s.sourceFrame.pad(g);
        const _ = this.tempRect.copyFrom(a.sourceFrame);
        r.projection.transform && this.transformAABB(qo.copyFrom(r.projection.transform).invert(), _),
        f ? (s.sourceFrame.fit(_),
        (s.sourceFrame.width <= 0 || s.sourceFrame.height <= 0) && (s.sourceFrame.width = 0,
        s.sourceFrame.height = 0)) : s.sourceFrame.intersects(_) || (s.sourceFrame.width = 0,
        s.sourceFrame.height = 0),
        this.roundFrame(s.sourceFrame, a.current ? a.current.resolution : r.resolution, a.sourceFrame, a.destinationFrame, r.projection.transform),
        s.renderTexture = this.getOptimalFilterTexture(s.sourceFrame.width, s.sourceFrame.height, c, p),
        s.filters = e,
        s.destinationFrame.width = s.renderTexture.width,
        s.destinationFrame.height = s.renderTexture.height;
        const T = this.tempRect;
        T.x = 0,
        T.y = 0,
        T.width = s.sourceFrame.width,
        T.height = s.sourceFrame.height,
        s.renderTexture.filterFrame = s.sourceFrame,
        s.bindingSourceFrame.copyFrom(a.sourceFrame),
        s.bindingDestinationFrame.copyFrom(a.destinationFrame),
        s.transform = r.projection.transform,
        r.projection.transform = null,
        a.bind(s.renderTexture, s.sourceFrame, T),
        r.framebuffer.clear(0, 0, 0, 0)
    }
    pop() {
        const t = this.defaultFilterStack
          , e = t.pop()
          , r = e.filters;
        this.activeState = e;
        const n = this.globalUniforms.uniforms;
        n.outputFrame = e.sourceFrame,
        n.resolution = e.resolution;
        const s = n.inputSize
          , a = n.inputPixel
          , o = n.inputClamp;
        if (s[0] = e.destinationFrame.width,
        s[1] = e.destinationFrame.height,
        s[2] = 1 / s[0],
        s[3] = 1 / s[1],
        a[0] = Math.round(s[0] * e.resolution),
        a[1] = Math.round(s[1] * e.resolution),
        a[2] = 1 / a[0],
        a[3] = 1 / a[1],
        o[0] = .5 * a[2],
        o[1] = .5 * a[3],
        o[2] = e.sourceFrame.width * s[2] - .5 * a[2],
        o[3] = e.sourceFrame.height * s[3] - .5 * a[3],
        e.legacy) {
            const c = n.filterArea;
            c[0] = e.destinationFrame.width,
            c[1] = e.destinationFrame.height,
            c[2] = e.sourceFrame.x,
            c[3] = e.sourceFrame.y,
            n.filterClamp = n.inputClamp
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
            let g = 0;
            for (g = 0; g < r.length - 1; ++g) {
                g === 1 && e.multisample > 1 && (p = this.getOptimalFilterTexture(c.width, c.height, e.resolution),
                p.filterFrame = c.filterFrame),
                r[g].apply(this, c, p, Cr.CLEAR, e);
                const f = c;
                c = p,
                p = f
            }
            r[g].apply(this, c, l.renderTexture, Cr.BLEND, e),
            g > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture),
            this.returnFilterTexture(c),
            this.returnFilterTexture(p)
        }
        e.clear(),
        this.statePool.push(e)
    }
    bindAndClear(t, e=Cr.CLEAR) {
        const {renderTexture: r, state: n} = this.renderer;
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
        const s = n.stateId & 1 || this.forceClear;
        (e === Cr.CLEAR || e === Cr.BLIT && s) && this.renderer.framebuffer.clear(0, 0, 0, 0)
    }
    applyFilter(t, e, r, n) {
        const s = this.renderer;
        s.state.set(t.state),
        this.bindAndClear(r, n),
        t.uniforms.uSampler = e,
        t.uniforms.filterGlobals = this.globalUniforms,
        s.shader.bind(t),
        t.legacy = !!t.program.attributeData.aTextureCoord,
        t.legacy ? (this.quadUv.map(e._frame, e.filterFrame),
        s.geometry.bind(this.quadUv),
        s.geometry.draw(or.TRIANGLES)) : (s.geometry.bind(this.quad),
        s.geometry.draw(or.TRIANGLE_STRIP))
    }
    calculateSpriteMatrix(t, e) {
        const {sourceFrame: r, destinationFrame: n} = this.activeState
          , {orig: s} = e._texture
          , a = t.set(n.width, 0, 0, n.height, r.x, r.y)
          , o = e.worldTransform.copyTo(jt.TEMP_MATRIX);
        return o.invert(),
        a.prepend(o),
        a.scale(1 / s.width, 1 / s.height),
        a.translate(e.anchor.x, e.anchor.y),
        a
    }
    destroy() {
        this.renderer = null,
        this.texturePool.clear(!1)
    }
    getOptimalFilterTexture(t, e, r=1, n=he.NONE) {
        return this.texturePool.getOptimalTexture(t, e, r, n)
    }
    getFilterTexture(t, e, r) {
        if (typeof t == "number") {
            const s = t;
            t = e,
            e = s
        }
        t = t || this.activeState.renderTexture;
        const n = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, r || he.NONE);
        return n.filterFrame = t.filterFrame,
        n
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
        const r = Ns[0]
          , n = Ns[1]
          , s = Ns[2]
          , a = Ns[3];
        r.set(e.left, e.top),
        n.set(e.left, e.bottom),
        s.set(e.right, e.top),
        a.set(e.right, e.bottom),
        t.apply(r, r),
        t.apply(n, n),
        t.apply(s, s),
        t.apply(a, a);
        const o = Math.min(r.x, n.x, s.x, a.x)
          , l = Math.min(r.y, n.y, s.y, a.y)
          , c = Math.max(r.x, n.x, s.x, a.x)
          , p = Math.max(r.y, n.y, s.y, a.y);
        e.x = o,
        e.y = l,
        e.width = c - o,
        e.height = p - l
    }
    roundFrame(t, e, r, n, s) {
        if (!(t.width <= 0 || t.height <= 0 || r.width <= 0 || r.height <= 0)) {
            if (s) {
                const {a, b: o, c: l, d: c} = s;
                if ((Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(c) > 1e-4))
                    return
            }
            s = s ? qo.copyFrom(s) : qo.identity(),
            s.translate(-r.x, -r.y).scale(n.width / r.width, n.height / r.height).translate(n.x, n.y),
            this.transformAABB(s, t),
            t.ceil(e),
            this.transformAABB(s.invert(), t)
        }
    }
}
Xd.extension = {
    type: rt.RendererSystem,
    name: "filter"
};
ot.add(Xd);
class C0 {
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
const I0 = new At;
class zd {
    constructor(t) {
        this.renderer = t,
        this.managedFramebuffers = [],
        this.unknownFramebuffer = new Hh(10,10),
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
            st.PREFER_ENV === Oi.WEBGL_LEGACY && (e = null,
            r = null),
            e ? t.drawBuffers = n => e.drawBuffersWEBGL(n) : (this.hasMRT = !1,
            t.drawBuffers = () => {}
            ),
            r || (this.writeDepthTexture = !1)
        } else
            this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
    }
    bind(t, e, r=0) {
        const {gl: n} = this;
        if (t) {
            const s = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
            this.current !== t && (this.current = t,
            n.bindFramebuffer(n.FRAMEBUFFER, s.framebuffer)),
            s.mipLevel !== r && (t.dirtyId++,
            t.dirtyFormat++,
            s.mipLevel = r),
            s.dirtyId !== t.dirtyId && (s.dirtyId = t.dirtyId,
            s.dirtyFormat !== t.dirtyFormat ? (s.dirtyFormat = t.dirtyFormat,
            s.dirtySize = t.dirtySize,
            this.updateFramebuffer(t, r)) : s.dirtySize !== t.dirtySize && (s.dirtySize = t.dirtySize,
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
            n.bindFramebuffer(n.FRAMEBUFFER, null)),
            e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
    }
    setViewport(t, e, r, n) {
        const s = this.viewport;
        t = Math.round(t),
        e = Math.round(e),
        r = Math.round(r),
        n = Math.round(n),
        (s.width !== r || s.height !== n || s.x !== t || s.y !== e) && (s.x = t,
        s.y = e,
        s.width = r,
        s.height = n,
        this.gl.viewport(t, e, r, n))
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
    clear(t, e, r, n, s=uh.COLOR | uh.DEPTH) {
        const {gl: a} = this;
        a.clearColor(t, e, r, n),
        a.clear(s)
    }
    initFramebuffer(t) {
        const {gl: e} = this
          , r = new C0(e.createFramebuffer());
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
        const n = t.colorTextures;
        let s = n.length;
        e.drawBuffers || (s = Math.min(s, 1));
        for (let a = 0; a < s; a++) {
            const o = n[a]
              , l = o.parentTextureArray || o;
            this.renderer.texture.bind(l, 0),
            a === 0 && r.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, r.msaaBuffer),
            e.renderbufferStorageMultisample(e.RENDERBUFFER, r.multisample, l._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height))
        }
        t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
    }
    updateFramebuffer(t, e) {
        const {gl: r} = this
          , n = t.glFramebuffers[this.CONTEXT_UID]
          , s = t.colorTextures;
        let a = s.length;
        r.drawBuffers || (a = Math.min(a, 1)),
        n.multisample > 1 && this.canMultisampleFramebuffer(t) ? n.msaaBuffer = n.msaaBuffer || r.createRenderbuffer() : n.msaaBuffer && (r.deleteRenderbuffer(n.msaaBuffer),
        n.msaaBuffer = null,
        n.blitFramebuffer && (n.blitFramebuffer.dispose(),
        n.blitFramebuffer = null));
        const o = [];
        for (let l = 0; l < a; l++) {
            const c = s[l]
              , p = c.parentTextureArray || c;
            this.renderer.texture.bind(p, 0),
            l === 0 && n.msaaBuffer ? (r.bindRenderbuffer(r.RENDERBUFFER, n.msaaBuffer),
            r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, p._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height),
            r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, n.msaaBuffer)) : (r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + l, c.target, p._glTextures[this.CONTEXT_UID].texture, e),
            o.push(r.COLOR_ATTACHMENT0 + l))
        }
        if (o.length > 1 && r.drawBuffers(o),
        t.depthTexture && this.writeDepthTexture) {
            const l = t.depthTexture;
            this.renderer.texture.bind(l, 0),
            r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, e)
        }
        if ((t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)) {
            n.stencil = n.stencil || r.createRenderbuffer();
            let l, c;
            this.renderer.context.webGLVersion === 1 ? (l = r.DEPTH_STENCIL_ATTACHMENT,
            c = r.DEPTH_STENCIL) : t.depth && t.stencil ? (l = r.DEPTH_STENCIL_ATTACHMENT,
            c = r.DEPTH24_STENCIL8) : t.depth ? (l = r.DEPTH_ATTACHMENT,
            c = r.DEPTH_COMPONENT24) : (l = r.STENCIL_ATTACHMENT,
            c = r.STENCIL_INDEX8),
            r.bindRenderbuffer(r.RENDERBUFFER, n.stencil),
            n.msaaBuffer ? r.renderbufferStorageMultisample(r.RENDERBUFFER, n.multisample, c, t.width, t.height) : r.renderbufferStorage(r.RENDERBUFFER, c, t.width, t.height),
            r.framebufferRenderbuffer(r.FRAMEBUFFER, l, r.RENDERBUFFER, n.stencil)
        } else
            n.stencil && (r.deleteRenderbuffer(n.stencil),
            n.stencil = null)
    }
    canMultisampleFramebuffer(t) {
        return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture
    }
    detectSamples(t) {
        const {msaaSamples: e} = this;
        let r = he.NONE;
        if (t <= 1 || e === null)
            return r;
        for (let n = 0; n < e.length; n++)
            if (e[n] <= t) {
                r = e[n];
                break
            }
        return r === 1 && (r = he.NONE),
        r
    }
    blit(t, e, r) {
        const {current: n, renderer: s, gl: a, CONTEXT_UID: o} = this;
        if (s.context.webGLVersion !== 2 || !n)
            return;
        const l = n.glFramebuffers[o];
        if (!l)
            return;
        if (!t) {
            if (!l.msaaBuffer)
                return;
            const p = n.colorTextures[0];
            if (!p)
                return;
            l.blitFramebuffer || (l.blitFramebuffer = new Hh(n.width,n.height),
            l.blitFramebuffer.addColorTexture(0, p)),
            t = l.blitFramebuffer,
            t.colorTextures[0] !== p && (t.colorTextures[0] = p,
            t.dirtyId++,
            t.dirtyFormat++),
            (t.width !== n.width || t.height !== n.height) && (t.width = n.width,
            t.height = n.height,
            t.dirtyId++,
            t.dirtySize++)
        }
        e || (e = I0,
        e.width = n.width,
        e.height = n.height),
        r || (r = e);
        const c = e.width === r.width && e.height === r.height;
        this.bind(t),
        a.bindFramebuffer(a.READ_FRAMEBUFFER, l.framebuffer),
        a.blitFramebuffer(e.left, e.top, e.right, e.bottom, r.left, r.top, r.right, r.bottom, a.COLOR_BUFFER_BIT, c ? a.NEAREST : a.LINEAR),
        a.bindFramebuffer(a.READ_FRAMEBUFFER, t.glFramebuffers[this.CONTEXT_UID].framebuffer)
    }
    disposeFramebuffer(t, e) {
        const r = t.glFramebuffers[this.CONTEXT_UID]
          , n = this.gl;
        if (!r)
            return;
        delete t.glFramebuffers[this.CONTEXT_UID];
        const s = this.managedFramebuffers.indexOf(t);
        s >= 0 && this.managedFramebuffers.splice(s, 1),
        t.disposeRunner.remove(this),
        e || (n.deleteFramebuffer(r.framebuffer),
        r.msaaBuffer && n.deleteRenderbuffer(r.msaaBuffer),
        r.stencil && n.deleteRenderbuffer(r.stencil)),
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
          , n = t.height
          , s = this.gl
          , a = e.stencil = s.createRenderbuffer();
        s.bindRenderbuffer(s.RENDERBUFFER, a);
        let o, l;
        this.renderer.context.webGLVersion === 1 ? (o = s.DEPTH_STENCIL_ATTACHMENT,
        l = s.DEPTH_STENCIL) : t.depth ? (o = s.DEPTH_STENCIL_ATTACHMENT,
        l = s.DEPTH24_STENCIL8) : (o = s.STENCIL_ATTACHMENT,
        l = s.STENCIL_INDEX8),
        e.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, e.multisample, l, r, n) : s.renderbufferStorage(s.RENDERBUFFER, l, r, n),
        s.framebufferRenderbuffer(s.FRAMEBUFFER, o, s.RENDERBUFFER, a)
    }
    reset() {
        this.current = this.unknownFramebuffer,
        this.viewport = new At
    }
    destroy() {
        this.renderer = null
    }
}
zd.extension = {
    type: rt.RendererSystem,
    name: "framebuffer"
};
ot.add(zd);
const Yo = {
    5126: 4,
    5123: 2,
    5121: 1
};
class qd {
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
            st.PREFER_ENV === Oi.WEBGL_LEGACY && (r = null),
            r ? (t.createVertexArray = () => r.createVertexArrayOES(),
            t.bindVertexArray = n => r.bindVertexArrayOES(n),
            t.deleteVertexArray = n => r.deleteVertexArrayOES(n)) : (this.hasVao = !1,
            t.createVertexArray = () => null,
            t.bindVertexArray = () => null,
            t.deleteVertexArray = () => null)
        }
        if (e.webGLVersion !== 2) {
            const r = t.getExtension("ANGLE_instanced_arrays");
            r ? (t.vertexAttribDivisor = (n, s) => r.vertexAttribDivisorANGLE(n, s),
            t.drawElementsInstanced = (n, s, a, o, l) => r.drawElementsInstancedANGLE(n, s, a, o, l),
            t.drawArraysInstanced = (n, s, a, o) => r.drawArraysInstancedANGLE(n, s, a, o)) : this.hasInstance = !1
        }
        this.canUseUInt32ElementIndex = e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex
    }
    bind(t, e) {
        e = e || this.renderer.shader.shader;
        const {gl: r} = this;
        let n = t.glVertexArrayObjects[this.CONTEXT_UID]
          , s = !1;
        n || (this.managedGeometries[t.id] = t,
        t.disposeRunner.add(this),
        t.glVertexArrayObjects[this.CONTEXT_UID] = n = {},
        s = !0);
        const a = n[e.program.id] || this.initGeometryVao(t, e, s);
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
            const n = t.buffers[r];
            e.update(n)
        }
    }
    checkCompatibility(t, e) {
        const r = t.attributes
          , n = e.attributeData;
        for (const s in n)
            if (!r[s])
                throw new Error(`shader and geometry incompatible, geometry missing the "${s}" attribute`)
    }
    getSignature(t, e) {
        const r = t.attributes
          , n = e.attributeData
          , s = ["g", t.id];
        for (const a in r)
            n[a] && s.push(a, n[a].location);
        return s.join("-")
    }
    initGeometryVao(t, e, r=!0) {
        const n = this.gl
          , s = this.CONTEXT_UID
          , a = this.renderer.buffer
          , o = e.program;
        o.glPrograms[s] || this.renderer.shader.generateProgram(e),
        this.checkCompatibility(t, o);
        const l = this.getSignature(t, o)
          , c = t.glVertexArrayObjects[this.CONTEXT_UID];
        let p = c[l];
        if (p)
            return c[o.id] = p,
            p;
        const g = t.buffers
          , f = t.attributes
          , v = {}
          , _ = {};
        for (const T in g)
            v[T] = 0,
            _[T] = 0;
        for (const T in f)
            !f[T].size && o.attributeData[T] ? f[T].size = o.attributeData[T].size : f[T].size || console.warn(`PIXI Geometry attribute '${T}' size cannot be determined (likely the bound shader does not have the attribute)`),
            v[f[T].buffer] += f[T].size * Yo[f[T].type];
        for (const T in f) {
            const A = f[T]
              , E = A.size;
            A.stride === void 0 && (v[A.buffer] === E * Yo[A.type] ? A.stride = 0 : A.stride = v[A.buffer]),
            A.start === void 0 && (A.start = _[A.buffer],
            _[A.buffer] += E * Yo[A.type])
        }
        p = n.createVertexArray(),
        n.bindVertexArray(p);
        for (let T = 0; T < g.length; T++) {
            const A = g[T];
            a.bind(A),
            r && A._glBuffers[s].refCount++
        }
        return this.activateVao(t, o),
        c[o.id] = p,
        c[l] = p,
        n.bindVertexArray(null),
        a.unbind(Mr.ARRAY_BUFFER),
        p
    }
    disposeGeometry(t, e) {
        var o;
        if (!this.managedGeometries[t.id])
            return;
        delete this.managedGeometries[t.id];
        const r = t.glVertexArrayObjects[this.CONTEXT_UID]
          , n = this.gl
          , s = t.buffers
          , a = (o = this.renderer) == null ? void 0 : o.buffer;
        if (t.disposeRunner.remove(this),
        !!r) {
            if (a)
                for (let l = 0; l < s.length; l++) {
                    const c = s[l]._glBuffers[this.CONTEXT_UID];
                    c && (c.refCount--,
                    c.refCount === 0 && !e && a.dispose(s[l], e))
                }
            if (!e) {
                for (const l in r)
                    if (l[0] === "g") {
                        const c = r[l];
                        this._activeVao === c && this.unbind(),
                        n.deleteVertexArray(c)
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
          , n = this.CONTEXT_UID
          , s = this.renderer.buffer
          , a = t.buffers
          , o = t.attributes;
        t.indexBuffer && s.bind(t.indexBuffer);
        let l = null;
        for (const c in o) {
            const p = o[c]
              , g = a[p.buffer]
              , f = g._glBuffers[n];
            if (e.attributeData[c]) {
                l !== f && (s.bind(g),
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
    draw(t, e, r, n) {
        const {gl: s} = this
          , a = this._activeGeometry;
        if (a.indexBuffer) {
            const o = a.indexBuffer.data.BYTES_PER_ELEMENT
              , l = o === 2 ? s.UNSIGNED_SHORT : s.UNSIGNED_INT;
            o === 2 || o === 4 && this.canUseUInt32ElementIndex ? a.instanced ? s.drawElementsInstanced(t, e || a.indexBuffer.data.length, l, (r || 0) * o, n || 1) : s.drawElements(t, e || a.indexBuffer.data.length, l, (r || 0) * o) : console.warn("unsupported index buffer type: uint32")
        } else
            a.instanced ? s.drawArraysInstanced(t, r, e || a.getSize(), n || 1) : s.drawArrays(t, r, e || a.getSize());
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
qd.extension = {
    type: rt.RendererSystem,
    name: "geometry"
};
ot.add(qd);
const fc = new jt;
class wl {
    constructor(t, e) {
        this._texture = t,
        this.mapCoord = new jt,
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
        for (let n = 0; n < t.length; n += 2) {
            const s = t[n]
              , a = t[n + 1];
            e[n] = s * r.a + a * r.c + r.tx,
            e[n + 1] = s * r.b + a * r.d + r.ty
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
        const n = e.orig
          , s = e.trim;
        s && (fc.set(n.width / s.width, 0, 0, n.height / s.height, -s.x / s.width, -s.y / s.height),
        this.mapCoord.append(fc));
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
var R0 = `varying vec2 vMaskCoord;
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
  , P0 = `attribute vec2 aVertexPosition;
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
class M0 extends De {
    constructor(t, e, r) {
        let n = null;
        typeof t != "string" && e === void 0 && r === void 0 && (n = t,
        t = void 0,
        e = void 0,
        r = void 0),
        super(t || P0, e || R0, r),
        this.maskSprite = n,
        this.maskMatrix = new jt
    }
    get maskSprite() {
        return this._maskSprite
    }
    set maskSprite(t) {
        this._maskSprite = t,
        this._maskSprite && (this._maskSprite.renderable = !1)
    }
    apply(t, e, r, n) {
        const s = this._maskSprite
          , a = s._texture;
        a.valid && (a.uvMatrix || (a.uvMatrix = new wl(a,0)),
        a.uvMatrix.update(),
        this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1,
        this.uniforms.mask = a,
        this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, s).prepend(a.uvMatrix.mapCoord),
        this.uniforms.alpha = s.worldAlpha,
        this.uniforms.maskClamp = a.uvMatrix.uClampFrame,
        t.applyFilter(this, e, r, n))
    }
}
class D0 {
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
class Yd {
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
            const s = this.maskDataPool.pop() || new D0;
            s.pooled = !0,
            s.maskObject = e,
            r = s
        }
        const n = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
        if (r.copyCountersOrReset(n),
        r._colorMask = n ? n._colorMask : 15,
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
        let n = t._filters;
        n || (n = this.alphaMaskPool[this.alphaMaskIndex],
        n || (n = this.alphaMaskPool[this.alphaMaskIndex] = [new M0])),
        n[0].resolution = t.resolution,
        n[0].multisample = t.multisample,
        n[0].maskSprite = e;
        const s = r.filterArea;
        r.filterArea = e.getBounds(!0),
        this.renderer.filter.push(r, n),
        r.filterArea = s,
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
Yd.extension = {
    type: rt.RendererSystem,
    name: "mask"
};
ot.add(Yd);
class Kd {
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
        const n = this.getStackLength();
        n !== r && (n === 0 ? e.disable(this.glConst) : (e.enable(this.glConst),
        this._useCurrent()))
    }
    _useCurrent() {}
    destroy() {
        this.renderer = null,
        this.maskStack = null
    }
}
const pc = new jt
  , gc = []
  , Zd = class ta extends Kd {
    constructor(t) {
        super(t),
        this.glConst = st.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST
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
          , {renderer: n} = this
          , s = n.renderTexture
          , a = r.getBounds(!0, gc.pop() ?? new At);
        this.roundFrameToPixels(a, s.current ? s.current.resolution : n.resolution, s.sourceFrame, s.destinationFrame, n.projection.transform),
        e && a.fit(e),
        t._scissorRectLocal = a
    }
    static isMatrixRotated(t) {
        if (!t)
            return !1;
        const {a: e, b: r, c: n, d: s} = t;
        return (Math.abs(r) > 1e-4 || Math.abs(n) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(s) > 1e-4)
    }
    testScissor(t) {
        const {maskObject: e} = t;
        if (!e.isFastRect || !e.isFastRect() || ta.isMatrixRotated(e.worldTransform) || ta.isMatrixRotated(this.renderer.projection.transform))
            return !1;
        this.calcScissorRect(t);
        const r = t._scissorRectLocal;
        return r.width > 0 && r.height > 0
    }
    roundFrameToPixels(t, e, r, n, s) {
        ta.isMatrixRotated(s) || (s = s ? pc.copyFrom(s) : pc.identity(),
        s.translate(-r.x, -r.y).scale(n.width / r.width, n.height / r.height).translate(n.x, n.y),
        this.renderer.filter.transformAABB(s, t),
        t.fit(n),
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
        t && gc.push(t._scissorRectLocal),
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
Zd.extension = {
    type: rt.RendererSystem,
    name: "scissor"
};
let B0 = Zd;
ot.add(B0);
class Qd extends Kd {
    constructor(t) {
        super(t),
        this.glConst = st.ADAPTER.getWebGLRenderingContext().STENCIL_TEST
    }
    getStackLength() {
        const t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0
    }
    push(t) {
        const e = t.maskObject
          , {gl: r} = this.renderer
          , n = t._stencilCounter;
        n === 0 && (this.renderer.framebuffer.forceStencil(),
        r.clearStencil(0),
        r.clear(r.STENCIL_BUFFER_BIT),
        r.enable(r.STENCIL_TEST)),
        t._stencilCounter++;
        const s = t._colorMask;
        s !== 0 && (t._colorMask = 0,
        r.colorMask(!1, !1, !1, !1)),
        r.stencilFunc(r.EQUAL, n, 4294967295),
        r.stencilOp(r.KEEP, r.KEEP, r.INCR),
        e.renderable = !0,
        e.render(this.renderer),
        this.renderer.batch.flush(),
        e.renderable = !1,
        s !== 0 && (t._colorMask = s,
        r.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)),
        this._useCurrent()
    }
    pop(t) {
        const e = this.renderer.gl;
        if (this.getStackLength() === 0)
            e.disable(e.STENCIL_TEST);
        else {
            const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null
              , n = r ? r._colorMask : 15;
            n !== 0 && (r._colorMask = 0,
            e.colorMask(!1, !1, !1, !1)),
            e.stencilOp(e.KEEP, e.KEEP, e.DECR),
            t.renderable = !0,
            t.render(this.renderer),
            this.renderer.batch.flush(),
            t.renderable = !1,
            n !== 0 && (r._colorMask = n,
            e.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)),
            this._useCurrent()
        }
    }
    _useCurrent() {
        const t = this.renderer.gl;
        t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295),
        t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
    }
}
Qd.extension = {
    type: rt.RendererSystem,
    name: "stencil"
};
ot.add(Qd);
class Jd {
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
Jd.extension = {
    type: [rt.RendererSystem, rt.CanvasRendererSystem],
    name: "_plugin"
};
ot.add(Jd);
class tf {
    constructor(t) {
        this.renderer = t,
        this.destinationFrame = null,
        this.sourceFrame = null,
        this.defaultFrame = null,
        this.projectionMatrix = new jt,
        this.transform = null
    }
    update(t, e, r, n) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame,
        this.sourceFrame = e || this.sourceFrame || t,
        this.calculateProjection(this.destinationFrame, this.sourceFrame, r, n),
        this.transform && this.projectionMatrix.append(this.transform);
        const s = this.renderer;
        s.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix,
        s.globalUniforms.update(),
        s.shader.shader && s.shader.syncUniformGroup(s.shader.shader.uniforms.globals)
    }
    calculateProjection(t, e, r, n) {
        const s = this.projectionMatrix
          , a = n ? -1 : 1;
        s.identity(),
        s.a = 1 / e.width * 2,
        s.d = a * (1 / e.height * 2),
        s.tx = -1 - e.x * s.a,
        s.ty = -a - e.y * s.d
    }
    setTransform(t) {}
    destroy() {
        this.renderer = null
    }
}
tf.extension = {
    type: rt.RendererSystem,
    name: "projection"
};
ot.add(tf);
const F0 = new $a
  , mc = new At;
class ef {
    constructor(t) {
        this.renderer = t,
        this._tempMatrix = new jt
    }
    generateTexture(t, e) {
        const {region: r, ...n} = e || {}
          , s = (r == null ? void 0 : r.copyTo(mc)) || t.getLocalBounds(mc, !0)
          , a = n.resolution || this.renderer.resolution;
        s.width = Math.max(s.width, 1 / a),
        s.height = Math.max(s.height, 1 / a),
        n.width = s.width,
        n.height = s.height,
        n.resolution = a,
        n.multisample ?? (n.multisample = this.renderer.multisample);
        const o = Or.create(n);
        this._tempMatrix.tx = -s.x,
        this._tempMatrix.ty = -s.y;
        const l = t.transform;
        return t.transform = F0,
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
ef.extension = {
    type: [rt.RendererSystem, rt.CanvasRendererSystem],
    name: "textureGenerator"
};
ot.add(ef);
const _i = new At
  , Nn = new At;
class rf {
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
        const n = this.renderer;
        this.current = t;
        let s, a, o;
        t ? (s = t.baseTexture,
        o = s.resolution,
        e || (_i.width = t.frame.width,
        _i.height = t.frame.height,
        e = _i),
        r || (Nn.x = t.frame.x,
        Nn.y = t.frame.y,
        Nn.width = e.width,
        Nn.height = e.height,
        r = Nn),
        a = s.framebuffer) : (o = n.resolution,
        e || (_i.width = n._view.screen.width,
        _i.height = n._view.screen.height,
        e = _i),
        r || (r = _i,
        r.width = e.width,
        r.height = e.height));
        const l = this.viewportFrame;
        l.x = r.x * o,
        l.y = r.y * o,
        l.width = r.width * o,
        l.height = r.height * o,
        t || (l.y = n.view.height - (l.y + l.height)),
        l.ceil(),
        this.renderer.framebuffer.bind(a, l),
        this.renderer.projection.update(r, e, o, !a),
        t ? this.renderer.mask.setMaskStack(s.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack),
        this.sourceFrame.copyFrom(e),
        this.destinationFrame.copyFrom(r)
    }
    clear(t, e) {
        const r = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor
          , n = Pt.shared.setValue(t || r);
        (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && n.premultiply(n.alpha);
        const s = this.destinationFrame
          , a = this.current ? this.current.baseTexture : this.renderer._view.screen
          , o = s.width !== a.width || s.height !== a.height;
        if (o) {
            let {x: l, y: c, width: p, height: g} = this.viewportFrame;
            l = Math.round(l),
            c = Math.round(c),
            p = Math.round(p),
            g = Math.round(g),
            this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),
            this.renderer.gl.scissor(l, c, p, g)
        }
        this.renderer.framebuffer.clear(n.red, n.green, n.blue, n.alpha, e),
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
rf.extension = {
    type: rt.RendererSystem,
    name: "renderTexture"
};
ot.add(rf);
class O0 {
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
function N0(i, t) {
    const e = {}
      , r = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES);
    for (let n = 0; n < r; n++) {
        const s = t.getActiveAttrib(i, n);
        if (s.name.startsWith("gl_"))
            continue;
        const a = Hd(t, s.type)
          , o = {
            type: a,
            name: s.name,
            size: Gd(a),
            location: t.getAttribLocation(i, s.name)
        };
        e[s.name] = o
    }
    return e
}
function L0(i, t) {
    const e = {}
      , r = t.getProgramParameter(i, t.ACTIVE_UNIFORMS);
    for (let n = 0; n < r; n++) {
        const s = t.getActiveUniform(i, n)
          , a = s.name.replace(/\[.*?\]$/, "")
          , o = !!s.name.match(/\[.*?\]$/)
          , l = Hd(t, s.type);
        e[a] = {
            name: a,
            index: n,
            type: l,
            size: s.size,
            isArray: o,
            value: kd(l, s.size)
        }
    }
    return e
}
function k0(i, t) {
    var o;
    const e = oc(i, i.VERTEX_SHADER, t.vertexSrc)
      , r = oc(i, i.FRAGMENT_SHADER, t.fragmentSrc)
      , n = i.createProgram();
    i.attachShader(n, e),
    i.attachShader(n, r);
    const s = (o = t.extra) == null ? void 0 : o.transformFeedbackVaryings;
    if (s && (typeof i.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : i.transformFeedbackVaryings(n, s.names, s.bufferMode === "separate" ? i.SEPARATE_ATTRIBS : i.INTERLEAVED_ATTRIBS)),
    i.linkProgram(n),
    i.getProgramParameter(n, i.LINK_STATUS) || f0(i, n, e, r),
    t.attributeData = N0(n, i),
    t.uniformData = L0(n, i),
    !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
        const l = Object.keys(t.attributeData);
        l.sort( (c, p) => c > p ? 1 : -1);
        for (let c = 0; c < l.length; c++)
            t.attributeData[l[c]].location = c,
            i.bindAttribLocation(n, c, l[c]);
        i.linkProgram(n)
    }
    i.deleteShader(e),
    i.deleteShader(r);
    const a = {};
    for (const l in t.uniformData) {
        const c = t.uniformData[l];
        a[l] = {
            location: i.getUniformLocation(n, l),
            value: kd(c.type, c.size)
        }
    }
    return new O0(n,a)
}
function U0(i, t, e, r, n) {
    e.buffer.update(n)
}
const G0 = {
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
  , nf = {
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
function H0(i) {
    const t = i.map(s => ({
        data: s,
        offset: 0,
        dataLen: 0,
        dirty: 0
    }));
    let e = 0
      , r = 0
      , n = 0;
    for (let s = 0; s < t.length; s++) {
        const a = t[s];
        if (e = nf[a.data.type],
        a.data.size > 1 && (e = Math.max(e, 16) * a.data.size),
        a.dataLen = e,
        r % e !== 0 && r < 16) {
            const o = r % e % 16;
            r += o,
            n += o
        }
        r + e > 16 ? (n = Math.ceil(n / 16) * 16,
        a.offset = n,
        n += e,
        r = e) : (a.offset = n,
        r += e,
        n += e)
    }
    return n = Math.ceil(n / 16) * 16,
    {
        uboElements: t,
        size: n
    }
}
function $0(i, t) {
    const e = [];
    for (const r in i)
        t[r] && e.push(t[r]);
    return e.sort( (r, n) => r.index - n.index),
    e
}
function V0(i, t) {
    if (!i.autoManage)
        return {
            size: 0,
            syncFunc: U0
        };
    const e = $0(i.uniforms, t)
      , {uboElements: r, size: n} = H0(e)
      , s = [`
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
        for (let g = 0; g < cn.length; g++) {
            const f = cn[g];
            if (f.codeUbo && f.test(o.data, l)) {
                s.push(`offset = ${o.offset / 4};`, cn[g].codeUbo(o.data.name, l)),
                p = !0;
                break
            }
        }
        if (!p)
            if (o.data.size > 1) {
                const g = Gd(o.data.type)
                  , f = Math.max(nf[o.data.type] / 16, 1)
                  , v = g / f
                  , _ = (4 - v % 4) % 4;
                s.push(`
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
                const g = G0[o.data.type];
                s.push(`
                cv = ud.${c}.value;
                v = uv.${c};
                offset = ${o.offset / 4};
                ${g};
                `)
            }
    }
    return s.push(`
       renderer.buffer.update(buffer);
    `),
    {
        size: n,
        syncFunc: new Function("ud","uv","renderer","syncData","buffer",s.join(`
`))
    }
}
let W0 = 0;
const Ls = {
    textureCount: 0,
    uboCount: 0
};
class sf {
    constructor(t) {
        this.destroyed = !1,
        this.renderer = t,
        this.systemCheck(),
        this.gl = null,
        this.shader = null,
        this.program = null,
        this.cache = {},
        this._uboCache = {},
        this.id = W0++
    }
    systemCheck() {
        if (!g0())
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
          , n = r.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
        return this.shader = t,
        this.program !== r && (this.program = r,
        this.gl.useProgram(n.program)),
        e || (Ls.textureCount = 0,
        Ls.uboCount = 0,
        this.syncUniformGroup(t.uniformGroup, Ls)),
        n
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
        return this.cache[e] || (this.cache[e] = u0(t, this.shader.program.uniformData)),
        t.syncUniforms[this.shader.program.id] = this.cache[e],
        t.syncUniforms[this.shader.program.id]
    }
    syncUniformBufferGroup(t, e) {
        const r = this.getGlProgram();
        if (!t.static || t.dirtyId !== 0 || !r.uniformGroups[t.id]) {
            t.dirtyId = 0;
            const n = r.uniformGroups[t.id] || this.createSyncBufferGroup(t, r, e);
            t.buffer.update(),
            n(r.uniformData, t.uniforms, this.renderer, Ls, t.buffer)
        }
        this.renderer.buffer.bindBufferBase(t.buffer, r.uniformBufferBindings[e])
    }
    createSyncBufferGroup(t, e, r) {
        const {gl: n} = this.renderer;
        this.renderer.buffer.bind(t.buffer);
        const s = this.gl.getUniformBlockIndex(e.program, r);
        e.uniformBufferBindings[r] = this.shader.uniformBindCount,
        n.uniformBlockBinding(e.program, s, this.shader.uniformBindCount),
        this.shader.uniformBindCount++;
        const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
        let o = this._uboCache[a];
        if (o || (o = this._uboCache[a] = V0(t, this.shader.program.uniformData)),
        t.autoManage) {
            const l = new Float32Array(o.size / 4);
            t.buffer.update(l)
        }
        return e.uniformGroups[t.id] = o.syncFunc,
        e.uniformGroups[t.id]
    }
    getSignature(t, e, r) {
        const n = t.uniforms
          , s = [`${r}-`];
        for (const a in n)
            s.push(a),
            e[a] && s.push(e[a].type);
        return s.join("-")
    }
    getGlProgram() {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
    }
    generateProgram(t) {
        const e = this.gl
          , r = t.program
          , n = k0(e, r);
        return r.glPrograms[this.renderer.CONTEXT_UID] = n,
        n
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
sf.extension = {
    type: rt.RendererSystem,
    name: "shader"
};
ot.add(sf);
class ya {
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
ya.defaultOptions = {
    hello: !1
},
ya.extension = {
    type: [rt.RendererSystem, rt.CanvasRendererSystem],
    name: "startup"
};
ot.add(ya);
function j0(i, t=[]) {
    return t[q.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.ADD] = [i.ONE, i.ONE],
    t[q.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.SCREEN] = [i.ONE, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.NONE] = [0, 0],
    t[q.NORMAL_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE],
    t[q.SCREEN_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA],
    t[q.SRC_IN] = [i.DST_ALPHA, i.ZERO],
    t[q.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO],
    t[q.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA],
    t[q.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE],
    t[q.DST_IN] = [i.ZERO, i.SRC_ALPHA],
    t[q.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA],
    t[q.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA],
    t[q.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA],
    t[q.SUBTRACT] = [i.ONE, i.ONE, i.ONE, i.ONE, i.FUNC_REVERSE_SUBTRACT, i.FUNC_ADD],
    t
}
const X0 = 0
  , z0 = 1
  , q0 = 2
  , Y0 = 3
  , K0 = 4
  , Z0 = 5
  , af = class $h {
    constructor() {
        this.gl = null,
        this.stateId = 0,
        this.polygonOffset = 0,
        this.blendMode = q.NONE,
        this._blendEq = !1,
        this.map = [],
        this.map[X0] = this.setBlend,
        this.map[z0] = this.setOffset,
        this.map[q0] = this.setCullFace,
        this.map[Y0] = this.setDepthTest,
        this.map[K0] = this.setFrontFace,
        this.map[Z0] = this.setDepthMask,
        this.checks = [],
        this.defaultState = new Nr,
        this.defaultState.blend = !0
    }
    contextChange(t) {
        this.gl = t,
        this.blendModes = j0(t),
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
        this.updateCheck($h.checkBlendMode, t),
        this.gl[t ? "enable" : "disable"](this.gl.BLEND)
    }
    setOffset(t) {
        this.updateCheck($h.checkPolygonOffset, t),
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
af.extension = {
    type: rt.RendererSystem,
    name: "state"
};
let Q0 = af;
ot.add(Q0);
class of extends xn {
    constructor() {
        super(...arguments),
        this.runners = {},
        this._systemsHash = {}
    }
    setup(t) {
        this.addRunners(...t.runners);
        const e = (t.priority ?? []).filter(n => t.systems[n])
          , r = [...e, ...Object.keys(t.systems).filter(n => !e.includes(n))];
        for (const n of r)
            this.addSystem(t.systems[n], n)
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
        for (const n in this.runners)
            this.runners[n].add(r);
        return this
    }
    emitWithCustomOptions(t, e) {
        const r = Object.keys(this._systemsHash);
        t.items.forEach(n => {
            const s = r.find(a => this._systemsHash[a] === n);
            n[t.name](e[s])
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
const Wn = class ea {
    constructor(t) {
        this.renderer = t,
        this.count = 0,
        this.checkCount = 0,
        this.maxIdle = ea.defaultMaxIdle,
        this.checkCountMax = ea.defaultCheckCountMax,
        this.mode = ea.defaultMode
    }
    postrender() {
        this.renderer.objectRenderer.renderingToScreen && (this.count++,
        this.mode !== cl.MANUAL && (this.checkCount++,
        this.checkCount > this.checkCountMax && (this.checkCount = 0,
        this.run())))
    }
    run() {
        const t = this.renderer.texture
          , e = t.managedTextures;
        let r = !1;
        for (let n = 0; n < e.length; n++) {
            const s = e[n];
            s.resource && this.count - s.touched > this.maxIdle && (t.destroyTexture(s, !0),
            e[n] = null,
            r = !0)
        }
        if (r) {
            let n = 0;
            for (let s = 0; s < e.length; s++)
                e[s] !== null && (e[n++] = e[s]);
            e.length = n
        }
    }
    unload(t) {
        const e = this.renderer.texture
          , r = t._texture;
        r && !r.framebuffer && e.destroyTexture(r);
        for (let n = t.children.length - 1; n >= 0; n--)
            this.unload(t.children[n])
    }
    destroy() {
        this.renderer = null
    }
}
;
Wn.defaultMode = cl.AUTO,
Wn.defaultMaxIdle = 60 * 60,
Wn.defaultCheckCountMax = 60 * 10,
Wn.extension = {
    type: rt.RendererSystem,
    name: "textureGC"
};
let Si = Wn;
ot.add(Si);
class Ko {
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
function J0(i) {
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
function t_(i) {
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
class hf {
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
        this.internalFormats = t_(t),
        this.samplerTypes = J0(t);
        const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = e;
        for (let n = 0; n < e; n++)
            this.boundTextures[n] = null;
        this.emptyTextures = {};
        const r = new Ko(t.createTexture());
        t.bindTexture(t.TEXTURE_2D, r.texture),
        t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)),
        this.emptyTextures[t.TEXTURE_2D] = r,
        this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Ko(t.createTexture()),
        t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
        for (let n = 0; n < 6; n++)
            t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR),
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
        for (let n = 0; n < this.boundTextures.length; n++)
            this.bind(null, n)
    }
    bind(t, e=0) {
        const {gl: r} = this;
        if (t = t == null ? void 0 : t.castToBaseTexture(),
        (t == null ? void 0 : t.valid) && !t.parentTextureArray) {
            t.touched = this.renderer.textureGC.count;
            const n = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
            this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e,
            r.activeTexture(r.TEXTURE0 + e)),
            r.bindTexture(t.target, n.texture)),
            n.dirtyId !== t.dirtyId ? (this.currentLocation !== e && (this.currentLocation = e,
            r.activeTexture(r.TEXTURE0 + e)),
            this.updateTexture(t)) : n.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t),
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
            for (let n = 0; n < r.length; n++)
                r[n] === this.unknownTexture && this.bind(null, n)
        }
        for (let n = 0; n < r.length; n++)
            r[n] === t && (this.currentLocation !== n && (e.activeTexture(e.TEXTURE0 + n),
            this.currentLocation = n),
            e.bindTexture(t.target, this.emptyTextures[t.target].texture),
            r[n] = null)
    }
    ensureSamplerType(t) {
        const {boundTextures: e, hasIntegerTextures: r, CONTEXT_UID: n} = this;
        if (r)
            for (let s = t - 1; s >= 0; --s) {
                const a = e[s];
                a && a._glTextures[n].samplerType !== ct.FLOAT && this.renderer.texture.unbind(a)
            }
    }
    initTexture(t) {
        const e = new Ko(this.gl.createTexture());
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
        var n;
        const e = t._glTextures[this.CONTEXT_UID];
        if (!e)
            return;
        const r = this.renderer;
        if (this.initTextureType(t, e),
        (n = t.resource) == null ? void 0 : n.upload(r, t, e))
            e.samplerType !== ct.FLOAT && (this.hasIntegerTextures = !0);
        else {
            const s = t.realWidth
              , a = t.realHeight
              , o = r.gl;
            (e.width !== s || e.height !== a || e.dirtyId < 0) && (e.width = s,
            e.height = a,
            o.texImage2D(t.target, 0, e.internalFormat, s, a, 0, t.format, e.type, null))
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
            const n = this.managedTextures.indexOf(t);
            n !== -1 && Pi(this.managedTextures, n, 1)
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
            const n = this.renderer.context.extensions.anisotropicFiltering;
            if (n && t.anisotropicLevel > 0 && t.scaleMode === hr.LINEAR) {
                const s = Math.min(t.anisotropicLevel, r.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                r.texParameterf(t.target, n.TEXTURE_MAX_ANISOTROPY_EXT, s)
            }
        } else
            r.texParameteri(t.target, r.TEXTURE_MIN_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR : r.NEAREST);
        r.texParameteri(t.target, r.TEXTURE_MAG_FILTER, t.scaleMode === hr.LINEAR ? r.LINEAR : r.NEAREST)
    }
    destroy() {
        this.renderer = null
    }
}
hf.extension = {
    type: rt.RendererSystem,
    name: "texture"
};
ot.add(hf);
class lf {
    constructor(t) {
        this.renderer = t
    }
    contextChange() {
        this.gl = this.renderer.gl,
        this.CONTEXT_UID = this.renderer.CONTEXT_UID
    }
    bind(t) {
        const {gl: e, CONTEXT_UID: r} = this
          , n = t._glTransformFeedbacks[r] || this.createGLTransformFeedback(t);
        e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n)
    }
    unbind() {
        const {gl: t} = this;
        t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null)
    }
    beginTransformFeedback(t, e) {
        const {gl: r, renderer: n} = this;
        e && n.shader.bind(e),
        r.beginTransformFeedback(t)
    }
    endTransformFeedback() {
        const {gl: t} = this;
        t.endTransformFeedback()
    }
    createGLTransformFeedback(t) {
        const {gl: e, renderer: r, CONTEXT_UID: n} = this
          , s = e.createTransformFeedback();
        t._glTransformFeedbacks[n] = s,
        e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, s);
        for (let a = 0; a < t.buffers.length; a++) {
            const o = t.buffers[a];
            o && (r.buffer.update(o),
            o._glBuffers[n].refCount++,
            e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, a, o._glBuffers[n].buffer || null))
        }
        return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null),
        t.disposeRunner.add(this),
        s
    }
    disposeTransformFeedback(t, e) {
        const r = t._glTransformFeedbacks[this.CONTEXT_UID]
          , n = this.gl;
        t.disposeRunner.remove(this);
        const s = this.renderer.buffer;
        if (s)
            for (let a = 0; a < t.buffers.length; a++) {
                const o = t.buffers[a];
                if (!o)
                    continue;
                const l = o._glBuffers[this.CONTEXT_UID];
                l && (l.refCount--,
                l.refCount === 0 && !e && s.dispose(o, e))
            }
        r && (e || n.deleteTransformFeedback(r),
        delete t._glTransformFeedbacks[this.CONTEXT_UID])
    }
    destroy() {
        this.renderer = null
    }
}
lf.extension = {
    type: rt.RendererSystem,
    name: "transformFeedback"
};
ot.add(lf);
class va {
    constructor(t) {
        this.renderer = t
    }
    init(t) {
        this.screen = new At(0,0,t.width,t.height),
        this.element = t.view || st.ADAPTER.createCanvas(),
        this.resolution = t.resolution || st.RESOLUTION,
        this.autoDensity = !!t.autoDensity
    }
    resizeView(t, e) {
        this.element.width = Math.round(t * this.resolution),
        this.element.height = Math.round(e * this.resolution);
        const r = this.element.width / this.resolution
          , n = this.element.height / this.resolution;
        this.screen.width = r,
        this.screen.height = n,
        this.autoDensity && (this.element.style.width = `${r}px`,
        this.element.style.height = `${n}px`),
        this.renderer.emit("resize", r, n),
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
va.defaultOptions = {
    width: 800,
    height: 600,
    resolution: void 0,
    autoDensity: !1
},
va.extension = {
    type: [rt.RendererSystem, rt.CanvasRendererSystem],
    name: "_view"
};
ot.add(va);
st.PREFER_ENV = Oi.WEBGL2;
st.STRICT_TEXTURE_CACHE = !1;
st.RENDER_OPTIONS = {
    ...ma.defaultOptions,
    ...ga.defaultOptions,
    ...va.defaultOptions,
    ...ya.defaultOptions
};
Object.defineProperties(st, {
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
            return Ai.defaultMaxTextures
        },
        set(i) {
            vt("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"),
            Ai.defaultMaxTextures = i
        }
    },
    SPRITE_BATCH_SIZE: {
        get() {
            return Ai.defaultBatchSize
        },
        set(i) {
            vt("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"),
            Ai.defaultBatchSize = i
        }
    },
    CAN_UPLOAD_SAME_BUFFER: {
        get() {
            return Ai.canUploadSameBuffer
        },
        set(i) {
            vt("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"),
            Ai.canUploadSameBuffer = i
        }
    },
    GC_MODE: {
        get() {
            return Si.defaultMode
        },
        set(i) {
            vt("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"),
            Si.defaultMode = i
        }
    },
    GC_MAX_IDLE: {
        get() {
            return Si.defaultMaxIdle
        },
        set(i) {
            vt("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"),
            Si.defaultMaxIdle = i
        }
    },
    GC_MAX_CHECK_COUNT: {
        get() {
            return Si.defaultCheckCountMax
        },
        set(i) {
            vt("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"),
            Si.defaultCheckCountMax = i
        }
    },
    PRECISION_VERTEX: {
        get() {
            return qr.defaultVertexPrecision
        },
        set(i) {
            vt("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"),
            qr.defaultVertexPrecision = i
        }
    },
    PRECISION_FRAGMENT: {
        get() {
            return qr.defaultFragmentPrecision
        },
        set(i) {
            vt("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"),
            qr.defaultFragmentPrecision = i
        }
    }
});
var Fi = (i => (i[i.INTERACTION = 50] = "INTERACTION",
i[i.HIGH = 25] = "HIGH",
i[i.NORMAL = 0] = "NORMAL",
i[i.LOW = -25] = "LOW",
i[i.UTILITY = -50] = "UTILITY",
i))(Fi || {});
class Zo {
    constructor(t, e=null, r=0, n=!1) {
        this.next = null,
        this.previous = null,
        this._destroyed = !1,
        this.fn = t,
        this.context = e,
        this.priority = r,
        this.once = n
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
const uf = class $e {
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
        this._head = new Zo(null,null,1 / 0),
        this.deltaMS = 1 / $e.targetFPMS,
        this.elapsedMS = 1 / $e.targetFPMS,
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
        return this._addListener(new Zo(t,e,r))
    }
    addOnce(t, e, r=Fi.NORMAL) {
        return this._addListener(new Zo(t,e,r,!0))
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
                const s = t - this._lastFrame | 0;
                if (s < this._minElapsedMS)
                    return;
                this._lastFrame = t - s % this._minElapsedMS
            }
            this.deltaMS = e,
            this.deltaTime = this.deltaMS * $e.targetFPMS;
            const r = this._head;
            let n = r.next;
            for (; n; )
                n = n.emit(this.deltaTime);
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
          , r = Math.min(Math.max(0, e) / 1e3, $e.targetFPMS);
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
        if (!$e._shared) {
            const t = $e._shared = new $e;
            t.autoStart = !0,
            t._protected = !0
        }
        return $e._shared
    }
    static get system() {
        if (!$e._system) {
            const t = $e._system = new $e;
            t.autoStart = !0,
            t._protected = !0
        }
        return $e._system
    }
}
;
uf.targetFPMS = .06;
let We = uf;
Object.defineProperties(st, {
    TARGET_FPMS: {
        get() {
            return We.targetFPMS
        },
        set(i) {
            vt("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),
            We.targetFPMS = i
        }
    }
});
class cf {
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
        this.ticker = t.sharedTicker ? We.shared : new We,
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
cf.extension = rt.Application;
ot.add(cf);
const df = [];
ot.handleByList(rt.Renderer, df);
function e_(i) {
    for (const t of df)
        if (t.test(i))
            return new t(i);
    throw new Error("Unable to auto-detect a suitable renderer.")
}
var r_ = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`
  , i_ = `attribute vec2 aVertexPosition;

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
const n_ = r_
  , ff = i_;
class pf {
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
pf.extension = {
    type: rt.RendererSystem,
    name: "_multisample"
};
ot.add(pf);
class s_ {
    constructor(t) {
        this.buffer = t || null,
        this.updateID = -1,
        this.byteLength = -1,
        this.refCount = 0
    }
}
class gf {
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
          , n = t._glBuffers[r] || this.createGLBuffer(t);
        e.bindBuffer(t.type, n.buffer)
    }
    unbind(t) {
        const {gl: e} = this;
        e.bindBuffer(t, null)
    }
    bindBufferBase(t, e) {
        const {gl: r, CONTEXT_UID: n} = this;
        if (this.boundBufferBases[e] !== t) {
            const s = t._glBuffers[n] || this.createGLBuffer(t);
            this.boundBufferBases[e] = t,
            r.bindBufferBase(r.UNIFORM_BUFFER, e, s.buffer)
        }
    }
    bindBufferRange(t, e, r) {
        const {gl: n, CONTEXT_UID: s} = this;
        r = r || 0;
        const a = t._glBuffers[s] || this.createGLBuffer(t);
        n.bindBufferRange(n.UNIFORM_BUFFER, e || 0, a.buffer, r * 256, 256)
    }
    update(t) {
        const {gl: e, CONTEXT_UID: r} = this
          , n = t._glBuffers[r] || this.createGLBuffer(t);
        if (t._updateID !== n.updateID)
            if (n.updateID = t._updateID,
            e.bindBuffer(t.type, n.buffer),
            n.byteLength >= t.data.byteLength)
                e.bufferSubData(t.type, 0, t.data);
            else {
                const s = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
                n.byteLength = t.data.byteLength,
                e.bufferData(t.type, t.data, s)
            }
    }
    dispose(t, e) {
        if (!this.managedBuffers[t.id])
            return;
        delete this.managedBuffers[t.id];
        const r = t._glBuffers[this.CONTEXT_UID]
          , n = this.gl;
        t.disposeRunner.remove(this),
        r && (e || n.deleteBuffer(r.buffer),
        delete t._glBuffers[this.CONTEXT_UID])
    }
    disposeAll(t) {
        const e = Object.keys(this.managedBuffers);
        for (let r = 0; r < e.length; r++)
            this.dispose(this.managedBuffers[e[r]], t)
    }
    createGLBuffer(t) {
        const {CONTEXT_UID: e, gl: r} = this;
        return t._glBuffers[e] = new s_(r.createBuffer()),
        this.managedBuffers[t.id] = t,
        t.disposeRunner.add(this),
        t._glBuffers[e]
    }
}
gf.extension = {
    type: rt.RendererSystem,
    name: "buffer"
};
ot.add(gf);
class mf {
    constructor(t) {
        this.renderer = t
    }
    render(t, e) {
        const r = this.renderer;
        let n, s, a, o;
        if (e && (n = e.renderTexture,
        s = e.clear,
        a = e.transform,
        o = e.skipUpdateTransform),
        this.renderingToScreen = !n,
        r.runners.prerender.emit(),
        r.emit("prerender"),
        r.projection.transform = a,
        !r.context.isLost) {
            if (n || (this.lastObjectRendered = t),
            !o) {
                const l = t.enableTempParent();
                t.updateTransform(),
                t.disableTempParent(l)
            }
            r.renderTexture.bind(n),
            r.batch.currentRenderer.start(),
            (s ?? r.background.clearBeforeRender) && r.renderTexture.clear(),
            t.render(r),
            r.batch.currentRenderer.flush(),
            n && (e.blit && r.framebuffer.blit(),
            n.baseTexture.update()),
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
mf.extension = {
    type: rt.RendererSystem,
    name: "objectRenderer"
};
ot.add(mf);
const ra = class Vh extends of {
    constructor(t) {
        super(),
        this.type = ul.WEBGL,
        t = Object.assign({}, st.RENDER_OPTIONS, t),
        this.gl = null,
        this.CONTEXT_UID = 0,
        this.globalUniforms = new cr({
            projectionMatrix: new jt
        },!0);
        const e = {
            runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
            systems: Vh.__systems,
            priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"]
        };
        this.setup(e),
        "useContextAlpha"in t && (vt("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"),
        t.premultipliedAlpha = t.useContextAlpha && t.useContextAlpha !== "notMultiplied",
        t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha),
        this._plugin.rendererPlugins = Vh.__plugins,
        this.options = t,
        this.startup.run(this.options)
    }
    static test(t) {
        return t != null && t.forceCanvas ? !1 : wd()
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
ra.extension = {
    type: rt.Renderer,
    priority: 1
},
ra.__plugins = {},
ra.__systems = {};
let El = ra;
ot.handleByMap(rt.RendererPlugin, El.__plugins);
ot.handleByMap(rt.RendererSystem, El.__systems);
ot.add(El);
class yf extends ns {
    constructor(t, e) {
        const {width: r, height: n} = e || {};
        super(r, n),
        this.items = [],
        this.itemDirtyIds = [];
        for (let s = 0; s < t; s++) {
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
            t[r] && (t[r].castToBaseTexture ? this.addBaseTextureAt(t[r].castToBaseTexture(), r) : t[r]instanceof ns ? this.addResourceAt(t[r], r) : this.addResourceAt(Fd(t[r], e), r))
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
class a_ extends yf {
    constructor(t, e) {
        const {width: r, height: n} = e || {};
        let s, a;
        Array.isArray(t) ? (s = t,
        a = t.length) : a = t,
        super(a, {
            width: r,
            height: n
        }),
        s && this.initFromArray(s, e)
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
        t.target = hn.TEXTURE_2D_ARRAY
    }
    upload(t, e, r) {
        const {length: n, itemDirtyIds: s, items: a} = this
          , {gl: o} = t;
        r.dirtyId < 0 && o.texImage3D(o.TEXTURE_2D_ARRAY, 0, r.internalFormat, this._width, this._height, n, 0, e.format, r.type, null);
        for (let l = 0; l < n; l++) {
            const c = a[l];
            s[l] < c.dirtyId && (s[l] = c.dirtyId,
            c.valid && o.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, l, c.resource.width, c.resource.height, 1, e.format, r.type, c.resource.source))
        }
        return !0
    }
}
class vf extends Kr {
    constructor(t) {
        super(t)
    }
    static test(t) {
        const {OffscreenCanvas: e} = globalThis;
        return e && t instanceof e ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement
    }
}
const _f = class jn extends yf {
    constructor(t, e) {
        const {width: r, height: n, autoLoad: s, linkBaseTexture: a} = e || {};
        if (t && t.length !== jn.SIDES)
            throw new Error(`Invalid length. Got ${t.length}, expected 6`);
        super(6, {
            width: r,
            height: n
        });
        for (let o = 0; o < jn.SIDES; o++)
            this.items[o].target = hn.TEXTURE_CUBE_MAP_POSITIVE_X + o;
        this.linkBaseTexture = a !== !1,
        t && this.initFromArray(t, e),
        s !== !1 && this.load()
    }
    bind(t) {
        super.bind(t),
        t.target = hn.TEXTURE_CUBE_MAP
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
            t.target = hn.TEXTURE_CUBE_MAP_POSITIVE_X + e,
            t.parentTextureArray = this.baseTexture,
            this.items[e] = t;
        return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight),
        this.items[e] = t,
        this
    }
    upload(t, e, r) {
        const n = this.itemDirtyIds;
        for (let s = 0; s < jn.SIDES; s++) {
            const a = this.items[s];
            (n[s] < a.dirtyId || r.dirtyId < e.dirtyId) && (a.valid && a.resource ? (a.resource.upload(t, a, r),
            n[s] = a.dirtyId) : n[s] < -1 && (t.gl.texImage2D(a.target, 0, r.internalFormat, e.realWidth, e.realHeight, 0, e.format, r.type, null),
            n[s] = -1))
        }
        return !0
    }
    static test(t) {
        return Array.isArray(t) && t.length === jn.SIDES
    }
}
;
_f.SIDES = 6;
let o_ = _f;
class an extends Kr {
    constructor(t, e) {
        e = e || {};
        let r, n, s;
        typeof t == "string" ? (r = an.EMPTY,
        n = t,
        s = !0) : (r = t,
        n = null,
        s = !1),
        super(r),
        this.url = n,
        this.crossOrigin = e.crossOrigin ?? !0,
        this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null,
        this.ownsImageBitmap = e.ownsImageBitmap ?? s,
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
                const r = await st.ADAPTER.fetch(this.url, {
                    mode: this.crossOrigin ? "cors" : "no-cors"
                });
                if (this.destroyed)
                    return;
                const n = await r.blob();
                if (this.destroyed)
                    return;
                const s = await createImageBitmap(n, {
                    premultiplyAlpha: this.alphaMode === null || this.alphaMode === ke.UNPACK ? "premultiply" : "none"
                });
                if (this.destroyed) {
                    s.close();
                    return
                }
                this.source = s,
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
        return an._EMPTY = an._EMPTY ?? st.ADAPTER.createCanvas(0, 0),
        an._EMPTY
    }
}
const Wh = class ia extends Kr {
    constructor(t, e) {
        e = e || {},
        super(st.ADAPTER.createCanvas()),
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
            ia.SVG_XML.test(this.svg.trim())) {
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
        Kr.crossOrigin(t, this.svg, this._crossorigin),
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
            let n = e * this.scale
              , s = r * this.scale;
            (this._overrideWidth || this._overrideHeight) && (n = this._overrideWidth || this._overrideHeight / r * e,
            s = this._overrideHeight || this._overrideWidth / e * r),
            n = Math.round(n),
            s = Math.round(s);
            const a = this.source;
            a.width = n,
            a.height = s,
            a._pixiId = `canvas_${hi()}`,
            a.getContext("2d").drawImage(t, 0, 0, e, r, 0, 0, n, s),
            this._resolve(),
            this._resolve = null
        }
    }
    static getSize(t) {
        const e = ia.SVG_SIZE.exec(t)
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
        return e === "svg" || typeof t == "string" && t.startsWith("data:image/svg+xml") || typeof t == "string" && ia.SVG_XML.test(t)
    }
}
;
Wh.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,
Wh.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
let jh = Wh;
class h_ extends Kr {
    constructor(t) {
        super(t)
    }
    static test(t) {
        return !!globalThis.VideoFrame && t instanceof globalThis.VideoFrame
    }
}
const Xh = class zh extends Kr {
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
            const n = t[0].src || t[0];
            Kr.crossOrigin(r, n, e.crossorigin);
            for (let s = 0; s < t.length; ++s) {
                const a = document.createElement("source");
                let {src: o, mime: l} = t[s];
                if (o = o || t[s],
                o.startsWith("data:"))
                    l = o.slice(5, o.indexOf(";"));
                else if (!o.startsWith("blob:")) {
                    const c = o.split("?").shift().toLowerCase()
                      , p = c.slice(c.lastIndexOf(".") + 1);
                    l = l || zh.MIME_TYPES[p] || `video/${p}`
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
                const e = We.shared.elapsedMS * this.source.playbackRate;
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
        this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.source.requestVideoFrameCallback ? (this._isConnectedToTicker && (We.shared.remove(this.update, this),
        this._isConnectedToTicker = !1,
        this._msToNextUpdate = 0),
        this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
        this._videoFrameRequestCallbackHandle = null),
        this._isConnectedToTicker || (We.shared.add(this.update, this),
        this._isConnectedToTicker = !0,
        this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle),
        this._videoFrameRequestCallbackHandle = null),
        this._isConnectedToTicker && (We.shared.remove(this.update, this),
        this._isConnectedToTicker = !1,
        this._msToNextUpdate = 0))
    }
    static test(t, e) {
        return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || zh.TYPES.includes(e)
    }
}
;
Xh.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"],
Xh.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
};
let xf = Xh;
Bh.push(an, Vd, vf, xf, h_, jh, ka, o_, a_);
Tt.prototype.getDrawableSource = function() {
    const i = this.resource;
    return i ? i.bitmap || i.source : null
}
;
bl.prototype._canvasRenderTarget = null;
ut.prototype.patternCache = null;
ut.prototype.tintCache = null;
let Ln;
function yc(i) {
    const t = st.ADAPTER.createCanvas(6, 1)
      , e = t.getContext("2d");
    return e.fillStyle = i,
    e.fillRect(0, 0, 6, 1),
    t
}
function bf() {
    if (typeof document > "u")
        return !1;
    if (Ln !== void 0)
        return Ln;
    const i = yc("#ff00ff")
      , t = yc("#ffff00")
      , e = st.ADAPTER.createCanvas(6, 1).getContext("2d");
    e.globalCompositeOperation = "multiply",
    e.drawImage(i, 0, 0),
    e.drawImage(t, 2, 0);
    const r = e.getImageData(2, 0, 1, 1);
    if (!r)
        Ln = !1;
    else {
        const n = r.data;
        Ln = n[0] === 255 && n[1] === 0 && n[2] === 0
    }
    return Ln
}
function l_(i=[]) {
    return bf() ? (i[q.NORMAL] = "source-over",
    i[q.ADD] = "lighter",
    i[q.MULTIPLY] = "multiply",
    i[q.SCREEN] = "screen",
    i[q.OVERLAY] = "overlay",
    i[q.DARKEN] = "darken",
    i[q.LIGHTEN] = "lighten",
    i[q.COLOR_DODGE] = "color-dodge",
    i[q.COLOR_BURN] = "color-burn",
    i[q.HARD_LIGHT] = "hard-light",
    i[q.SOFT_LIGHT] = "soft-light",
    i[q.DIFFERENCE] = "difference",
    i[q.EXCLUSION] = "exclusion",
    i[q.HUE] = "hue",
    i[q.SATURATION] = "saturation",
    i[q.COLOR] = "color",
    i[q.LUMINOSITY] = "luminosity") : (i[q.NORMAL] = "source-over",
    i[q.ADD] = "lighter",
    i[q.MULTIPLY] = "source-over",
    i[q.SCREEN] = "source-over",
    i[q.OVERLAY] = "source-over",
    i[q.DARKEN] = "source-over",
    i[q.LIGHTEN] = "source-over",
    i[q.COLOR_DODGE] = "source-over",
    i[q.COLOR_BURN] = "source-over",
    i[q.HARD_LIGHT] = "source-over",
    i[q.SOFT_LIGHT] = "source-over",
    i[q.DIFFERENCE] = "source-over",
    i[q.EXCLUSION] = "source-over",
    i[q.HUE] = "source-over",
    i[q.SATURATION] = "source-over",
    i[q.COLOR] = "source-over",
    i[q.LUMINOSITY] = "source-over"),
    i[q.NORMAL_NPM] = i[q.NORMAL],
    i[q.ADD_NPM] = i[q.ADD],
    i[q.SCREEN_NPM] = i[q.SCREEN],
    i[q.SRC_IN] = "source-in",
    i[q.SRC_OUT] = "source-out",
    i[q.SRC_ATOP] = "source-atop",
    i[q.DST_OVER] = "destination-over",
    i[q.DST_IN] = "destination-in",
    i[q.DST_OUT] = "destination-out",
    i[q.DST_ATOP] = "destination-atop",
    i[q.XOR] = "xor",
    i[q.SUBTRACT] = "source-over",
    i
}
const u_ = new jt;
class Tf {
    constructor(t) {
        this.activeResolution = 1,
        this.smoothProperty = "imageSmoothingEnabled",
        this.blendModes = l_(),
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
        let n = t;
        const s = this._projTransform
          , a = this.activeResolution;
        r = r || a,
        s && (n = u_,
        n.copyFrom(t),
        n.prepend(s)),
        e ? this.activeContext.setTransform(n.a * r, n.b * r, n.c * r, n.d * r, n.tx * a | 0, n.ty * a | 0) : this.activeContext.setTransform(n.a * r, n.b * r, n.c * r, n.d * r, n.tx * a, n.ty * a)
    }
    clear(t, e) {
        const {activeContext: r, renderer: n} = this
          , s = t ? Pt.shared.setValue(t) : this.renderer.background.backgroundColor;
        r.clearRect(0, 0, n.width, n.height),
        t && (r.globalAlpha = e ?? this.renderer.background.alpha,
        r.fillStyle = s.toHex(),
        r.fillRect(0, 0, n.width, n.height),
        r.globalAlpha = 1)
    }
    setBlendMode(t, e) {
        const r = t === q.SRC_IN || t === q.SRC_OUT || t === q.DST_IN || t === q.DST_ATOP;
        !e && r && (t = q.NORMAL),
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
Tf.extension = {
    type: rt.CanvasRendererSystem,
    name: "canvasContext"
};
ot.add(Tf);
class wf {
    constructor(t) {
        this._foundShapes = [],
        this.renderer = t
    }
    pushMask(t) {
        const e = this.renderer
          , r = t.maskObject || t;
        e.canvasContext.activeContext.save();
        const n = this._foundShapes;
        if (this.recursiveFindShapes(r, n),
        n.length > 0) {
            const s = e.canvasContext.activeContext;
            s.beginPath();
            for (let a = 0; a < n.length; a++) {
                const o = n[a]
                  , l = o.transform.worldTransform;
                this.renderer.canvasContext.setContextTransform(l),
                this.renderGraphicsShape(o)
            }
            n.length = 0,
            s.clip()
        }
    }
    recursiveFindShapes(t, e) {
        t.geometry && t.geometry.graphicsData && e.push(t);
        const {children: r} = t;
        if (r)
            for (let n = 0; n < r.length; n++)
                this.recursiveFindShapes(r[n], e)
    }
    renderGraphicsShape(t) {
        t.finishPoly();
        const e = this.renderer.canvasContext.activeContext
          , r = t.geometry.graphicsData
          , n = r.length;
        if (n !== 0)
            for (let s = 0; s < n; s++) {
                const a = r[s]
                  , o = a.shape;
                if (o.type === Zt.POLY) {
                    let l = o.points;
                    const c = a.holes;
                    let p, g, f, v;
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
                                g = 0,
                                f = l[0],
                                v = l[1];
                                for (let T = 2; T + 2 < l.length; T += 2)
                                    g += (l[T] - f) * (l[T + 3] - v) - (l[T + 2] - f) * (l[T + 1] - v);
                                if (g * p < 0) {
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
                      , g = o.y - c / 2
                      , f = .5522848
                      , v = l / 2 * f
                      , _ = c / 2 * f
                      , T = p + l
                      , A = g + c
                      , E = p + l / 2
                      , I = g + c / 2;
                    e.moveTo(p, I),
                    e.bezierCurveTo(p, I - _, E - v, g, E, g),
                    e.bezierCurveTo(E + v, g, T, I - _, T, I),
                    e.bezierCurveTo(T, I + _, E + v, A, E, A),
                    e.bezierCurveTo(E - v, A, p, I + _, p, I),
                    e.closePath()
                } else if (o.type === Zt.RREC) {
                    const l = o.x
                      , c = o.y
                      , p = o.width
                      , g = o.height;
                    let f = o.radius;
                    const v = Math.min(p, g) / 2;
                    f = f > v ? v : f,
                    e.moveTo(l, c + f),
                    e.lineTo(l, c + g - f),
                    e.quadraticCurveTo(l, c + g, l + f, c + g),
                    e.lineTo(l + p - f, c + g),
                    e.quadraticCurveTo(l + p, c + g, l + p, c + g - f),
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
wf.extension = {
    type: rt.CanvasRendererSystem,
    name: "mask"
};
ot.add(wf);
class Ef {
    constructor(t) {
        this.renderer = t
    }
    render(t, e) {
        const r = this.renderer;
        if (!r.view)
            return;
        const n = r.canvasContext;
        let s, a, o, l;
        e && (s = e.renderTexture,
        a = e.clear,
        o = e.transform,
        l = e.skipUpdateTransform),
        this.renderingToScreen = !s,
        r.emit("prerender");
        const c = r.resolution;
        s ? (s = s.castToBaseTexture(),
        s._canvasRenderTarget || (s._canvasRenderTarget = new us(s.width,s.height,s.resolution),
        s.resource = new vf(s._canvasRenderTarget.canvas),
        s.valid = !0),
        n.activeContext = s._canvasRenderTarget.context,
        r.canvasContext.activeResolution = s._canvasRenderTarget.resolution) : (n.activeContext = n.rootContext,
        n.activeResolution = c);
        const p = n.activeContext;
        if (n._projTransform = o || null,
        s || (this.lastObjectRendered = t),
        !l) {
            const f = t.enableTempParent();
            t.updateTransform(),
            t.disableTempParent(f)
        }
        if (p.save(),
        p.setTransform(1, 0, 0, 1, 0, 0),
        p.globalAlpha = 1,
        n._activeBlendMode = q.NORMAL,
        n._outerBlend = !1,
        p.globalCompositeOperation = n.blendModes[q.NORMAL],
        a ?? r.background.clearBeforeRender)
            if (this.renderingToScreen) {
                p.clearRect(0, 0, r.width, r.height);
                const f = r.background;
                f.alpha > 0 && (p.globalAlpha = f.backgroundColor.alpha,
                p.fillStyle = f.backgroundColor.toHex(),
                p.fillRect(0, 0, r.width, r.height),
                p.globalAlpha = 1)
            } else
                s = s,
                s._canvasRenderTarget.clear(),
                s.clear.alpha > 0 && (p.globalAlpha = s.clear.alpha,
                p.fillStyle = s.clear.toHex(),
                p.fillRect(0, 0, s.realWidth, s.realHeight),
                p.globalAlpha = 1);
        const g = n.activeContext;
        n.activeContext = p,
        t.renderCanvas(r),
        n.activeContext = g,
        p.restore(),
        n.activeResolution = c,
        n._projTransform = null,
        r.emit("postrender")
    }
    destroy() {
        this.lastObjectRendered = null,
        this.render = null
    }
}
Ef.extension = {
    type: rt.CanvasRendererSystem,
    name: "objectRenderer"
};
ot.add(Ef);
const {deprecation: Ce} = zv
  , na = class qh extends of {
    constructor(t) {
        super(),
        this.type = ul.CANVAS,
        this.rendererLogId = "Canvas",
        t = Object.assign({}, st.RENDER_OPTIONS, t);
        const e = {
            runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
            systems: qh.__systems,
            priority: ["textureGenerator", "background", "_view", "_plugin", "startup", "mask", "canvasContext", "objectRenderer"]
        };
        this.setup(e),
        "useContextAlpha"in t && (Ce("7.0.0", "options.useContextAlpha is deprecated, use options.backgroundAlpha instead"),
        t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha),
        this._plugin.rendererPlugins = qh.__plugins,
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
na.extension = {
    type: rt.Renderer,
    priority: 0
},
na.__plugins = {},
na.__systems = {};
let Wa = na;
ot.handleByMap(rt.CanvasRendererPlugin, Wa.__plugins);
ot.handleByMap(rt.CanvasRendererSystem, Wa.__systems);
ot.add(Wa);
const _e = {
    canvas: null,
    getTintedCanvas: (i, t) => {
        const e = i.texture
          , r = Pt.shared.setValue(t).toHex();
        e.tintCache = e.tintCache || {};
        const n = e.tintCache[r];
        let s;
        if (n) {
            if (n.tintId === e._updateID)
                return e.tintCache[r];
            s = e.tintCache[r]
        } else
            s = st.ADAPTER.createCanvas();
        return _e.tintMethod(e, t, s),
        s.tintId = e._updateID,
        _e.convertTintToImage || (e.tintCache[r] = s),
        s
    }
    ,
    getTintedPattern: (i, t) => {
        const e = Pt.shared.setValue(t).toHex();
        i.patternCache = i.patternCache || {};
        let r = i.patternCache[e];
        return (r == null ? void 0 : r.tintId) === i._updateID || (_e.canvas || (_e.canvas = st.ADAPTER.createCanvas()),
        _e.tintMethod(i, t, _e.canvas),
        r = _e.canvas.getContext("2d").createPattern(_e.canvas, "repeat"),
        r.tintId = i._updateID,
        i.patternCache[e] = r),
        r
    }
    ,
    tintWithMultiply: (i, t, e) => {
        const r = e.getContext("2d")
          , n = i._frame.clone()
          , s = i.baseTexture.resolution;
        n.x *= s,
        n.y *= s,
        n.width *= s,
        n.height *= s,
        e.width = Math.ceil(n.width),
        e.height = Math.ceil(n.height),
        r.save(),
        r.fillStyle = Pt.shared.setValue(t).toHex(),
        r.fillRect(0, 0, n.width, n.height),
        r.globalCompositeOperation = "multiply";
        const a = i.baseTexture.getDrawableSource();
        r.drawImage(a, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height),
        r.globalCompositeOperation = "destination-atop",
        r.drawImage(a, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height),
        r.restore()
    }
    ,
    tintWithOverlay: (i, t, e) => {
        const r = e.getContext("2d")
          , n = i._frame.clone()
          , s = i.baseTexture.resolution;
        n.x *= s,
        n.y *= s,
        n.width *= s,
        n.height *= s,
        e.width = Math.ceil(n.width),
        e.height = Math.ceil(n.height),
        r.save(),
        r.globalCompositeOperation = "copy",
        r.fillStyle = `#${`00000${(t | 0).toString(16)}`.slice(-6)}`,
        r.fillRect(0, 0, n.width, n.height),
        r.globalCompositeOperation = "destination-atop",
        r.drawImage(i.baseTexture.getDrawableSource(), n.x, n.y, n.width, n.height, 0, 0, n.width, n.height),
        r.restore()
    }
    ,
    tintWithPerPixel: (i, t, e) => {
        const r = e.getContext("2d")
          , n = i._frame.clone()
          , s = i.baseTexture.resolution;
        n.x *= s,
        n.y *= s,
        n.width *= s,
        n.height *= s,
        e.width = Math.ceil(n.width),
        e.height = Math.ceil(n.height),
        r.save(),
        r.globalCompositeOperation = "copy",
        r.drawImage(i.baseTexture.getDrawableSource(), n.x, n.y, n.width, n.height, 0, 0, n.width, n.height),
        r.restore();
        const [a,o,l] = Pt.shared.setValue(t).toArray()
          , c = r.getImageData(0, 0, n.width, n.height)
          , p = c.data;
        for (let g = 0; g < p.length; g += 4)
            p[g + 0] *= a,
            p[g + 1] *= o,
            p[g + 2] *= l;
        r.putImageData(c, 0, 0)
    }
    ,
    roundColor: i => (vt("7.3.0", "PIXI.canvasUtils.roundColor is deprecated"),
    Pt.shared.setValue(i).round(_e.cacheStepsPerColorChannel).toNumber()),
    cacheStepsPerColorChannel: 8,
    convertTintToImage: !1,
    canUseMultiply: bf(),
    tintMethod: null
};
_e.tintMethod = _e.canUseMultiply ? _e.tintWithMultiply : _e.tintWithPerPixel;
class _a {
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
        const {a: r, b: n, c: s, d: a, tx: o, ty: l} = t
          , c = r * e.x + s * e.y + o
          , p = n * e.x + a * e.y + l;
        this.minX = Math.min(this.minX, c),
        this.maxX = Math.max(this.maxX, c),
        this.minY = Math.min(this.minY, p),
        this.maxY = Math.max(this.maxY, p)
    }
    addQuad(t) {
        let e = this.minX
          , r = this.minY
          , n = this.maxX
          , s = this.maxY
          , a = t[0]
          , o = t[1];
        e = a < e ? a : e,
        r = o < r ? o : r,
        n = a > n ? a : n,
        s = o > s ? o : s,
        a = t[2],
        o = t[3],
        e = a < e ? a : e,
        r = o < r ? o : r,
        n = a > n ? a : n,
        s = o > s ? o : s,
        a = t[4],
        o = t[5],
        e = a < e ? a : e,
        r = o < r ? o : r,
        n = a > n ? a : n,
        s = o > s ? o : s,
        a = t[6],
        o = t[7],
        e = a < e ? a : e,
        r = o < r ? o : r,
        n = a > n ? a : n,
        s = o > s ? o : s,
        this.minX = e,
        this.minY = r,
        this.maxX = n,
        this.maxY = s
    }
    addFrame(t, e, r, n, s) {
        this.addFrameMatrix(t.worldTransform, e, r, n, s)
    }
    addFrameMatrix(t, e, r, n, s) {
        const a = t.a
          , o = t.b
          , l = t.c
          , c = t.d
          , p = t.tx
          , g = t.ty;
        let f = this.minX
          , v = this.minY
          , _ = this.maxX
          , T = this.maxY
          , A = a * e + l * r + p
          , E = o * e + c * r + g;
        f = A < f ? A : f,
        v = E < v ? E : v,
        _ = A > _ ? A : _,
        T = E > T ? E : T,
        A = a * n + l * r + p,
        E = o * n + c * r + g,
        f = A < f ? A : f,
        v = E < v ? E : v,
        _ = A > _ ? A : _,
        T = E > T ? E : T,
        A = a * e + l * s + p,
        E = o * e + c * s + g,
        f = A < f ? A : f,
        v = E < v ? E : v,
        _ = A > _ ? A : _,
        T = E > T ? E : T,
        A = a * n + l * s + p,
        E = o * n + c * s + g,
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
        let n = this.minX
          , s = this.minY
          , a = this.maxX
          , o = this.maxY;
        for (let l = e; l < r; l += 2) {
            const c = t[l]
              , p = t[l + 1];
            n = c < n ? c : n,
            s = p < s ? p : s,
            a = c > a ? c : a,
            o = p > o ? p : o
        }
        this.minX = n,
        this.minY = s,
        this.maxX = a,
        this.maxY = o
    }
    addVertices(t, e, r, n) {
        this.addVerticesMatrix(t.worldTransform, e, r, n)
    }
    addVerticesMatrix(t, e, r, n, s=0, a=s) {
        const o = t.a
          , l = t.b
          , c = t.c
          , p = t.d
          , g = t.tx
          , f = t.ty;
        let v = this.minX
          , _ = this.minY
          , T = this.maxX
          , A = this.maxY;
        for (let E = r; E < n; E += 2) {
            const I = e[E]
              , S = e[E + 1]
              , P = o * I + c * S + g
              , k = p * S + l * I + f;
            v = Math.min(v, P - s),
            T = Math.max(T, P + s),
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
          , n = this.maxX
          , s = this.maxY;
        this.minX = t.minX < e ? t.minX : e,
        this.minY = t.minY < r ? t.minY : r,
        this.maxX = t.maxX > n ? t.maxX : n,
        this.maxY = t.maxY > s ? t.maxY : s
    }
    addBoundsMask(t, e) {
        const r = t.minX > e.minX ? t.minX : e.minX
          , n = t.minY > e.minY ? t.minY : e.minY
          , s = t.maxX < e.maxX ? t.maxX : e.maxX
          , a = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (r <= s && n <= a) {
            const o = this.minX
              , l = this.minY
              , c = this.maxX
              , p = this.maxY;
            this.minX = r < o ? r : o,
            this.minY = n < l ? n : l,
            this.maxX = s > c ? s : c,
            this.maxY = a > p ? a : p
        }
    }
    addBoundsMatrix(t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
    }
    addBoundsArea(t, e) {
        const r = t.minX > e.x ? t.minX : e.x
          , n = t.minY > e.y ? t.minY : e.y
          , s = t.maxX < e.x + e.width ? t.maxX : e.x + e.width
          , a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (r <= s && n <= a) {
            const o = this.minX
              , l = this.minY
              , c = this.maxX
              , p = this.maxY;
            this.minX = r < o ? r : o,
            this.minY = n < l ? n : l,
            this.maxX = s > c ? s : c,
            this.maxY = a > p ? a : p
        }
    }
    pad(t=0, e=t) {
        this.isEmpty() || (this.minX -= t,
        this.maxX += t,
        this.minY -= e,
        this.maxY += e)
    }
    addFramePad(t, e, r, n, s, a) {
        t -= s,
        e -= a,
        r += s,
        n += a,
        this.minX = this.minX < t ? this.minX : t,
        this.maxX = this.maxX > r ? this.maxX : r,
        this.minY = this.minY < e ? this.minY : e,
        this.maxY = this.maxY > n ? this.maxY : n
    }
}
class re extends xn {
    constructor() {
        super(),
        this.tempDisplayObjectParent = null,
        this.transform = new $a,
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
        this._bounds = new _a,
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
            const n = e[r];
            Object.defineProperty(re.prototype, n, Object.getOwnPropertyDescriptor(t, n))
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
        this._localBounds || (this._localBounds = new _a);
        const e = this.transform
          , r = this.parent;
        this.parent = null,
        this._tempDisplayObjectParent.worldAlpha = (r == null ? void 0 : r.worldAlpha) ?? 1,
        this.transform = this._tempDisplayObjectParent.transform;
        const n = this._bounds
          , s = this._boundsID;
        this._bounds = this._localBounds;
        const a = this.getBounds(!1, t);
        return this.parent = r,
        this.transform = e,
        this._bounds = n,
        this._bounds.updateID += this._boundsID - s,
        a
    }
    toGlobal(t, e, r=!1) {
        return r || (this._recursivePostUpdateTransform(),
        this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent,
        this.displayObjectUpdateTransform(),
        this.parent = null)),
        this.worldTransform.apply(t, e)
    }
    toLocal(t, e, r, n) {
        return e && (t = e.toGlobal(t, r, n)),
        n || (this._recursivePostUpdateTransform(),
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
    setTransform(t=0, e=0, r=1, n=1, s=0, a=0, o=0, l=0, c=0) {
        return this.position.x = t,
        this.position.y = e,
        this.scale.x = r || 1,
        this.scale.y = n || 1,
        this.rotation = s,
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
        return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new c_),
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
        return this.transform.rotation * i0
    }
    set angle(t) {
        this.transform.rotation = t * n0
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
class c_ extends re {
    constructor() {
        super(...arguments),
        this.sortDirty = null
    }
}
re.prototype.displayObjectUpdateTransform = re.prototype.updateTransform;
const d_ = new jt;
function f_(i, t) {
    return i.zIndex === t.zIndex ? i._lastSortedIndex - t._lastSortedIndex : i.zIndex - t.zIndex
}
const Af = class Yh extends re {
    constructor() {
        super(),
        this.children = [],
        this.sortableChildren = Yh.defaultSortableChildren,
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
          , n = this.getChildIndex(e);
        this.children[r] = e,
        this.children[n] = t,
        this.onChildrenChange(r < n ? r : n)
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
          , n = e
          , s = n - r;
        let a;
        if (s > 0 && s <= n) {
            a = this.children.splice(r, s);
            for (let o = 0; o < a.length; ++o)
                a[o].parent = null,
                a[o].transform && (a[o].transform._parentID = -1);
            this._boundsID++,
            this.onChildrenChange(t);
            for (let o = 0; o < a.length; ++o)
                a[o].emit("removed", this),
                this.emit("childRemoved", a[o], this, o);
            return a
        } else if (s === 0 && this.children.length === 0)
            return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    }
    sortChildren() {
        let t = !1;
        for (let e = 0, r = this.children.length; e < r; ++e) {
            const n = this.children[e];
            n._lastSortedIndex = e,
            !t && n.zIndex !== 0 && (t = !0)
        }
        t && this.children.length > 1 && this.children.sort(f_),
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
            for (let n = 0, s = this.children.length; n < s; ++n) {
                const a = this.children[n];
                a.visible && a.updateTransform()
            }
        return r
    }
    _calculateBounds() {}
    _renderWithCulling(t) {
        const e = t.renderTexture.sourceFrame;
        if (!(e.width > 0 && e.height > 0))
            return;
        let r, n;
        this.cullArea ? (r = this.cullArea,
        n = this.worldTransform) : this._render !== Yh.prototype._render && (r = this.getBounds(!0));
        const s = t.projection.transform;
        if (s && (n ? (n = d_.copyFrom(n),
        n.prepend(s)) : n = s),
        r && e.intersects(r, n))
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
                for (let r = 0, n = this.children.length; r < n; ++r)
                    this.children[r].render(t)
            }
    }
    renderAdvanced(t) {
        var s, a, o;
        const e = this.filters
          , r = this._mask;
        if (e) {
            this._enabledFilters || (this._enabledFilters = []),
            this._enabledFilters.length = 0;
            for (let l = 0; l < e.length; l++)
                e[l].enabled && this._enabledFilters.push(e[l])
        }
        const n = e && ((s = this._enabledFilters) == null ? void 0 : s.length) || r && (!r.isMaskData || r.enabled && (r.autoDetect || r.type !== fe.NONE));
        if (n && t.batch.flush(),
        e && ((a = this._enabledFilters) != null && a.length) && t.filter.push(this, this._enabledFilters),
        r && t.mask.push(this, this._mask),
        this.cullable)
            this._renderWithCulling(t);
        else {
            this._render(t);
            for (let l = 0, c = this.children.length; l < c; ++l)
                this.children[l].render(t)
        }
        n && t.batch.flush(),
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
            for (let n = 0; n < r.length; ++n)
                r[n].destroy(t)
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
Af.defaultSortableChildren = !1;
let Ue = Af;
Ue.prototype.containerUpdateTransform = Ue.prototype.updateTransform;
Object.defineProperties(st, {
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
const kn = new Bt
  , p_ = new Uint16Array([0, 1, 2, 0, 2, 3]);
class Lr extends Ue {
    constructor(t) {
        super(),
        this._anchor = new zr(this._onAnchorUpdate,this,t ? t.defaultAnchor.x : 0,t ? t.defaultAnchor.y : 0),
        this._texture = null,
        this._width = 0,
        this._height = 0,
        this._tintColor = new Pt(16777215),
        this._tintRGB = null,
        this.tint = 16777215,
        this.blendMode = q.NORMAL,
        this._cachedTint = 16777215,
        this.uvs = null,
        this.texture = t || ut.EMPTY,
        this.vertexData = new Float32Array(8),
        this.vertexTrimmedData = null,
        this._transformID = -1,
        this._textureID = -1,
        this._transformTrimmedID = -1,
        this._textureTrimmedID = -1,
        this.indices = p_,
        this.pluginName = "batch",
        this.isSprite = !0,
        this._roundPixels = st.ROUND_PIXELS
    }
    _onTextureUpdate() {
        this._textureID = -1,
        this._textureTrimmedID = -1,
        this._cachedTint = 16777215,
        this._width && (this.scale.x = Xr(this.scale.x) * this._width / this._texture.orig.width),
        this._height && (this.scale.y = Xr(this.scale.y) * this._height / this._texture.orig.height)
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
          , n = e.b
          , s = e.c
          , a = e.d
          , o = e.tx
          , l = e.ty
          , c = this.vertexData
          , p = t.trim
          , g = t.orig
          , f = this._anchor;
        let v = 0
          , _ = 0
          , T = 0
          , A = 0;
        if (p ? (_ = p.x - f._x * g.width,
        v = _ + p.width,
        A = p.y - f._y * g.height,
        T = A + p.height) : (_ = -f._x * g.width,
        v = _ + g.width,
        A = -f._y * g.height,
        T = A + g.height),
        c[0] = r * _ + s * A + o,
        c[1] = a * A + n * _ + l,
        c[2] = r * v + s * A + o,
        c[3] = a * A + n * v + l,
        c[4] = r * v + s * T + o,
        c[5] = a * T + n * v + l,
        c[6] = r * _ + s * T + o,
        c[7] = a * T + n * _ + l,
        this._roundPixels) {
            const E = st.RESOLUTION;
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
          , n = this._anchor
          , s = this.transform.worldTransform
          , a = s.a
          , o = s.b
          , l = s.c
          , c = s.d
          , p = s.tx
          , g = s.ty
          , f = -n._x * r.width
          , v = f + r.width
          , _ = -n._y * r.height
          , T = _ + r.height;
        if (e[0] = a * f + l * _ + p,
        e[1] = c * _ + o * f + g,
        e[2] = a * v + l * _ + p,
        e[3] = c * _ + o * v + g,
        e[4] = a * v + l * T + p,
        e[5] = c * T + o * v + g,
        e[6] = a * f + l * T + p,
        e[7] = c * T + o * f + g,
        this._roundPixels) {
            const A = st.RESOLUTION;
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
        return this.children.length === 0 ? (this._localBounds || (this._localBounds = new _a),
        this._localBounds.minX = this._texture.orig.width * -this._anchor._x,
        this._localBounds.minY = this._texture.orig.height * -this._anchor._y,
        this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x),
        this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y),
        t || (this._localBoundsRect || (this._localBoundsRect = new At),
        t = this._localBoundsRect),
        this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
    }
    containsPoint(t) {
        this.worldTransform.applyInverse(t, kn);
        const e = this._texture.orig.width
          , r = this._texture.orig.height
          , n = -e * this.anchor.x;
        let s = 0;
        return kn.x >= n && kn.x < n + e && (s = -r * this.anchor.y,
        kn.y >= s && kn.y < s + r)
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
        const e = Xr(this.scale.x) || 1;
        this.scale.x = e * t / this._texture.orig.width,
        this._width = t
    }
    get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height
    }
    set height(t) {
        const e = Xr(this.scale.y) || 1;
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
const Un = new Bt;
class Al extends Lr {
    constructor(t, e=100, r=100) {
        super(t),
        this.tileTransform = new $a,
        this._width = e,
        this._height = r,
        this.uvMatrix = this.texture.uvMatrix || new wl(t),
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
          , n = this._height * (1 - this._anchor._y);
        this._bounds.addFrame(this.transform, t, e, r, n)
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
        this.worldTransform.applyInverse(t, Un);
        const e = this._width
          , r = this._height
          , n = -e * this.anchor._x;
        if (Un.x >= n && Un.x < n + e) {
            const s = -r * this.anchor._y;
            if (Un.y >= s && Un.y < s + r)
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
        return new Al(r,e.width,e.height)
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
var g_ = `#version 300 es
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
  , m_ = `#version 300 es
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
  , y_ = `#version 100
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
  , vc = `#version 100
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
  , v_ = `#version 100
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
const ks = new jt;
class Sf extends Va {
    constructor(t) {
        super(t),
        t.runners.contextChange.add(this),
        this.quad = new jd,
        this.state = Nr.for2d()
    }
    contextChange() {
        const t = this.renderer
          , e = {
            globals: t.globalUniforms
        };
        this.simpleShader = Dr.from(vc, v_, e),
        this.shader = t.context.webGLVersion > 1 ? Dr.from(m_, g_, e) : Dr.from(vc, y_, e)
    }
    render(t) {
        const e = this.renderer
          , r = this.quad;
        let n = r.vertices;
        n[0] = n[6] = t._width * -t.anchor.x,
        n[1] = n[3] = t._height * -t.anchor.y,
        n[2] = n[4] = t._width * (1 - t.anchor.x),
        n[5] = n[7] = t._height * (1 - t.anchor.y);
        const s = t.uvRespectAnchor ? t.anchor.x : 0
          , a = t.uvRespectAnchor ? t.anchor.y : 0;
        n = r.uvs,
        n[0] = n[6] = -s,
        n[1] = n[3] = -a,
        n[2] = n[4] = 1 - s,
        n[5] = n[7] = 1 - a,
        r.invalidate();
        const o = t._texture
          , l = o.baseTexture
          , c = l.alphaMode > 0
          , p = t.tileTransform.localTransform
          , g = t.uvMatrix;
        let f = l.isPowerOfTwo && o.frame.width === l.width && o.frame.height === l.height;
        f && (l._glTextures[e.CONTEXT_UID] ? f = l.wrapMode !== Yr.CLAMP : l.wrapMode === Yr.CLAMP && (l.wrapMode = Yr.REPEAT));
        const v = f ? this.simpleShader : this.shader
          , _ = o.width
          , T = o.height
          , A = t._width
          , E = t._height;
        ks.set(p.a * _ / A, p.b * _ / E, p.c * T / A, p.d * T / E, p.tx / A, p.ty / E),
        ks.invert(),
        f ? ks.prepend(g.mapCoord) : (v.uniforms.uMapCoord = g.mapCoord.toArray(!0),
        v.uniforms.uClampFrame = g.uClampFrame,
        v.uniforms.uClampOffset = g.uClampOffset),
        v.uniforms.uTransform = ks.toArray(!0),
        v.uniforms.uColor = Pt.shared.setValue(t.tint).premultiply(t.worldAlpha, c).toArray(v.uniforms.uColor),
        v.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0),
        v.uniforms.uSampler = o,
        e.shader.bind(v),
        e.geometry.bind(r),
        this.state.blendMode = xl(t.blendMode, c),
        e.state.set(this.state),
        e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
    }
}
Sf.extension = {
    name: "tilingSprite",
    type: rt.RendererPlugin
};
ot.add(Sf);
const Us = new jt
  , Gn = new jt
  , br = [new Bt, new Bt, new Bt, new Bt];
Al.prototype._renderCanvas = function(i) {
    const t = this._texture;
    if (!t.baseTexture.valid)
        return;
    const e = i.canvasContext.activeContext
      , r = this.worldTransform
      , n = t.baseTexture
      , s = n.getDrawableSource()
      , a = n.resolution;
    if (this._textureID !== this._texture._updateID || this._cachedTint !== this.tintValue) {
        this._textureID = this._texture._updateID;
        const f = new us(t._frame.width,t._frame.height,a);
        this.tintValue !== 16777215 ? (this._tintedCanvas = _e.getTintedCanvas(this, this.tintValue),
        f.context.drawImage(this._tintedCanvas, 0, 0)) : f.context.drawImage(s, -t._frame.x * a, -t._frame.y * a),
        this._cachedTint = this.tintValue,
        this._canvasPattern = f.context.createPattern(f.canvas, "repeat")
    }
    e.globalAlpha = this.worldAlpha,
    i.canvasContext.setBlendMode(this.blendMode),
    this.tileTransform.updateLocalTransform();
    const o = this.tileTransform.localTransform
      , l = this._width
      , c = this._height;
    Us.identity(),
    Gn.copyFrom(o),
    this.uvRespectAnchor || Gn.translate(-this.anchor.x * l, -this.anchor.y * c),
    Gn.scale(1 / a, 1 / a),
    Us.prepend(Gn),
    Us.prepend(r),
    i.canvasContext.setContextTransform(Us),
    e.fillStyle = this._canvasPattern;
    const p = this.anchor.x * -l
      , g = this.anchor.y * -c;
    br[0].set(p, g),
    br[1].set(p + l, g),
    br[2].set(p + l, g + c),
    br[3].set(p, g + c);
    for (let f = 0; f < 4; f++)
        Gn.applyInverse(br[f], br[f]);
    e.beginPath(),
    e.moveTo(br[0].x, br[0].y);
    for (let f = 1; f < 4; f++)
        e.lineTo(br[f].x, br[f].y);
    e.closePath(),
    e.fill()
}
;
class __ extends Ue {
    constructor(t=1500, e, r=16384, n=!1) {
        super();
        const s = 16384;
        r > s && (r = s),
        this._properties = [!1, !0, !1, !1, !1],
        this._maxSize = t,
        this._batchSize = r,
        this._buffers = null,
        this._bufferUpdateIDs = [],
        this._updateID = 0,
        this.interactiveChildren = !1,
        this.blendMode = q.NORMAL,
        this.autoResize = n,
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
class _c {
    constructor(t, e, r) {
        this.geometry = new li,
        this.indexBuffer = null,
        this.size = r,
        this.dynamicProperties = [],
        this.staticProperties = [];
        for (let n = 0; n < t.length; ++n) {
            let s = t[n];
            s = {
                attributeName: s.attributeName,
                size: s.size,
                uploadFunction: s.uploadFunction,
                type: s.type || mt.FLOAT,
                offset: s.offset
            },
            e[n] ? this.dynamicProperties.push(s) : this.staticProperties.push(s)
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
        this.indexBuffer = new pe(Pd(this.size),!0,!0),
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
        let n = 0;
        this.staticStride = 0;
        for (let a = 0; a < this.staticProperties.length; ++a) {
            const o = this.staticProperties[a];
            o.offset = n,
            n += o.size,
            this.staticStride += o.size
        }
        const s = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(s),
        this.staticDataUint32 = new Uint32Array(s),
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
        for (let n = 0; n < this.dynamicProperties.length; n++) {
            const s = this.dynamicProperties[n];
            s.uploadFunction(t, e, r, s.type === mt.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, s.offset)
        }
        this.dynamicBuffer._updateID++
    }
    uploadStatic(t, e, r) {
        for (let n = 0; n < this.staticProperties.length; n++) {
            const s = this.staticProperties[n];
            s.uploadFunction(t, e, r, s.type === mt.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, s.offset)
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
var x_ = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`
  , b_ = `attribute vec2 aVertexPosition;
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
class Cf extends Va {
    constructor(t) {
        super(t),
        this.shader = null,
        this.properties = null,
        this.tempMatrix = new jt,
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
        this.shader = Dr.from(b_, x_, {}),
        this.state = Nr.for2d()
    }
    render(t) {
        const e = t.children
          , r = t._maxSize
          , n = t._batchSize
          , s = this.renderer;
        let a = e.length;
        if (a === 0)
            return;
        a > r && !t.autoResize && (a = r);
        let o = t._buffers;
        o || (o = t._buffers = this.generateBuffers(t));
        const l = e[0]._texture.baseTexture
          , c = l.alphaMode > 0;
        this.state.blendMode = xl(t.blendMode, c),
        s.state.set(this.state);
        const p = s.gl
          , g = t.worldTransform.copyTo(this.tempMatrix);
        g.prepend(s.globalUniforms.uniforms.projectionMatrix),
        this.shader.uniforms.translationMatrix = g.toArray(!0),
        this.shader.uniforms.uColor = Pt.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, c).toArray(this.shader.uniforms.uColor),
        this.shader.uniforms.uSampler = l,
        this.renderer.shader.bind(this.shader);
        let f = !1;
        for (let v = 0, _ = 0; v < a; v += n,
        _ += 1) {
            let T = a - v;
            T > n && (T = n),
            _ >= o.length && o.push(this._generateOneMoreBuffer(t));
            const A = o[_];
            A.uploadDynamic(e, v, T);
            const E = t._bufferUpdateIDs[_] || 0;
            f = f || A._updateID < E,
            f && (A._updateID = t._updateID,
            A.uploadStatic(e, v, T)),
            s.geometry.bind(A.geometry),
            p.drawElements(p.TRIANGLES, T * 6, p.UNSIGNED_SHORT, 0)
        }
    }
    generateBuffers(t) {
        const e = []
          , r = t._maxSize
          , n = t._batchSize
          , s = t._properties;
        for (let a = 0; a < r; a += n)
            e.push(new _c(this.properties,s,n));
        return e
    }
    _generateOneMoreBuffer(t) {
        const e = t._batchSize
          , r = t._properties;
        return new _c(this.properties,r,e)
    }
    uploadVertices(t, e, r, n, s, a) {
        let o = 0
          , l = 0
          , c = 0
          , p = 0;
        for (let g = 0; g < r; ++g) {
            const f = t[e + g]
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
            n[a] = l * _,
            n[a + 1] = p * T,
            n[a + s] = o * _,
            n[a + s + 1] = p * T,
            n[a + s * 2] = o * _,
            n[a + s * 2 + 1] = c * T,
            n[a + s * 3] = l * _,
            n[a + s * 3 + 1] = c * T,
            a += s * 4
        }
    }
    uploadPosition(t, e, r, n, s, a) {
        for (let o = 0; o < r; o++) {
            const l = t[e + o].position;
            n[a] = l.x,
            n[a + 1] = l.y,
            n[a + s] = l.x,
            n[a + s + 1] = l.y,
            n[a + s * 2] = l.x,
            n[a + s * 2 + 1] = l.y,
            n[a + s * 3] = l.x,
            n[a + s * 3 + 1] = l.y,
            a += s * 4
        }
    }
    uploadRotation(t, e, r, n, s, a) {
        for (let o = 0; o < r; o++) {
            const l = t[e + o].rotation;
            n[a] = l,
            n[a + s] = l,
            n[a + s * 2] = l,
            n[a + s * 3] = l,
            a += s * 4
        }
    }
    uploadUvs(t, e, r, n, s, a) {
        for (let o = 0; o < r; ++o) {
            const l = t[e + o]._texture._uvs;
            l ? (n[a] = l.x0,
            n[a + 1] = l.y0,
            n[a + s] = l.x1,
            n[a + s + 1] = l.y1,
            n[a + s * 2] = l.x2,
            n[a + s * 2 + 1] = l.y2,
            n[a + s * 3] = l.x3,
            n[a + s * 3 + 1] = l.y3,
            a += s * 4) : (n[a] = 0,
            n[a + 1] = 0,
            n[a + s] = 0,
            n[a + s + 1] = 0,
            n[a + s * 2] = 0,
            n[a + s * 2 + 1] = 0,
            n[a + s * 3] = 0,
            n[a + s * 3 + 1] = 0,
            a += s * 4)
        }
    }
    uploadTint(t, e, r, n, s, a) {
        for (let o = 0; o < r; ++o) {
            const l = t[e + o]
              , c = Pt.shared.setValue(l._tintRGB).toPremultiplied(l.alpha, l.texture.baseTexture.alphaMode > 0);
            n[a] = c,
            n[a + s] = c,
            n[a + s * 2] = c,
            n[a + s * 3] = c,
            a += s * 4
        }
    }
    destroy() {
        super.destroy(),
        this.shader && (this.shader.destroy(),
        this.shader = null),
        this.tempMatrix = null
    }
}
Cf.extension = {
    name: "particle",
    type: rt.RendererPlugin
};
ot.add(Cf);
__.prototype.renderCanvas = function(i) {
    if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable)
        return;
    const t = i.canvasContext.activeContext
      , e = this.worldTransform;
    let r = !0
      , n = 0
      , s = 0
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
            n = c.anchor.x * (-p.width * c.scale.x) + c.position.x + .5,
            s = c.anchor.y * (-p.height * c.scale.y) + c.position.y + .5,
            a = p.width * c.scale.x,
            o = p.height * c.scale.y;
        else {
            r || (r = !0),
            c.displayObjectUpdateTransform();
            const v = c.worldTransform;
            i.canvasContext.setContextTransform(v, this.roundPixels, 1),
            n = c.anchor.x * -p.width + .5,
            s = c.anchor.y * -p.height + .5,
            a = p.width,
            o = p.height
        }
        const g = c._texture.baseTexture.resolution
          , f = i.canvasContext.activeResolution;
        t.drawImage(c._texture.baseTexture.getDrawableSource(), p.x * g, p.y * g, p.width * g, p.height * g, n * f, s * f, a * f, o * f)
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
var ja = (i => (i[i.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL",
i[i.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL",
i))(ja || {});
const Gs = {
    willReadFrequently: !0
}
  , wr = class gt {
    static get experimentalLetterSpacingSupported() {
        let t = gt._experimentalLetterSpacingSupported;
        if (t !== void 0) {
            const e = st.ADAPTER.getCanvasRenderingContext2D().prototype;
            t = gt._experimentalLetterSpacingSupported = "letterSpacing"in e || "textLetterSpacing"in e
        }
        return t
    }
    constructor(t, e, r, n, s, a, o, l, c) {
        this.text = t,
        this.style = e,
        this.width = r,
        this.height = n,
        this.lines = s,
        this.lineWidths = a,
        this.lineHeight = o,
        this.maxLineWidth = l,
        this.fontProperties = c
    }
    static measureText(t, e, r, n=gt._canvas) {
        r = r ?? e.wordWrap;
        const s = e.toFontString()
          , a = gt.measureFont(s);
        a.fontSize === 0 && (a.fontSize = e.fontSize,
        a.ascent = e.fontSize);
        const o = n.getContext("2d", Gs);
        o.font = s;
        const l = (r ? gt.wordWrap(t, e, n) : t).split(/(?:\r\n|\r|\n)/)
          , c = new Array(l.length);
        let p = 0;
        for (let _ = 0; _ < l.length; _++) {
            const T = gt._measureText(l[_], e.letterSpacing, o);
            c[_] = T,
            p = Math.max(p, T)
        }
        let g = p + e.strokeThickness;
        e.dropShadow && (g += e.dropShadowDistance);
        const f = e.lineHeight || a.fontSize + e.strokeThickness;
        let v = Math.max(f, a.fontSize + e.strokeThickness * 2) + e.leading + (l.length - 1) * (f + e.leading);
        return e.dropShadow && (v += e.dropShadowDistance),
        new gt(t,e,g,v,l,c,f + e.leading,p,a)
    }
    static _measureText(t, e, r) {
        let n = !1;
        gt.experimentalLetterSpacingSupported && (gt.experimentalLetterSpacing ? (r.letterSpacing = `${e}px`,
        r.textLetterSpacing = `${e}px`,
        n = !0) : (r.letterSpacing = "0px",
        r.textLetterSpacing = "0px"));
        let s = r.measureText(t).width;
        return s > 0 && (n ? s -= e : s += (gt.graphemeSegmenter(t).length - 1) * e),
        s
    }
    static wordWrap(t, e, r=gt._canvas) {
        const n = r.getContext("2d", Gs);
        let s = 0
          , a = ""
          , o = "";
        const l = Object.create(null)
          , {letterSpacing: c, whiteSpace: p} = e
          , g = gt.collapseSpaces(p)
          , f = gt.collapseNewlines(p);
        let v = !g;
        const _ = e.wordWrapWidth + c
          , T = gt.tokenize(t);
        for (let A = 0; A < T.length; A++) {
            let E = T[A];
            if (gt.isNewline(E)) {
                if (!f) {
                    o += gt.addLine(a),
                    v = !g,
                    a = "",
                    s = 0;
                    continue
                }
                E = " "
            }
            if (g) {
                const S = gt.isBreakingSpace(E)
                  , P = gt.isBreakingSpace(a[a.length - 1]);
                if (S && P)
                    continue
            }
            const I = gt.getFromCache(E, c, l, n);
            if (I > _)
                if (a !== "" && (o += gt.addLine(a),
                a = "",
                s = 0),
                gt.canBreakWords(E, e.breakWords)) {
                    const S = gt.wordWrapSplit(E);
                    for (let P = 0; P < S.length; P++) {
                        let k = S[P]
                          , V = k
                          , d = 1;
                        for (; S[P + d]; ) {
                            const N = S[P + d];
                            if (!gt.canBreakChars(V, N, E, P, e.breakWords))
                                k += N;
                            else
                                break;
                            V = N,
                            d++
                        }
                        P += d - 1;
                        const O = gt.getFromCache(k, c, l, n);
                        O + s > _ && (o += gt.addLine(a),
                        v = !1,
                        a = "",
                        s = 0),
                        a += k,
                        s += O
                    }
                } else {
                    a.length > 0 && (o += gt.addLine(a),
                    a = "",
                    s = 0);
                    const S = A === T.length - 1;
                    o += gt.addLine(E, !S),
                    v = !1,
                    a = "",
                    s = 0
                }
            else
                I + s > _ && (v = !1,
                o += gt.addLine(a),
                a = "",
                s = 0),
                (a.length > 0 || !gt.isBreakingSpace(E) || v) && (a += E,
                s += I)
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
    static getFromCache(t, e, r, n) {
        let s = r[t];
        return typeof s != "number" && (s = gt._measureText(t, e, n) + e,
        r[t] = s),
        s
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
        for (let n = 0; n < t.length; n++) {
            const s = t[n]
              , a = t[n + 1];
            if (gt.isBreakingSpace(s, a) || gt.isNewline(s)) {
                r !== "" && (e.push(r),
                r = ""),
                e.push(s);
                continue
            }
            r += s
        }
        return r !== "" && e.push(r),
        e
    }
    static canBreakWords(t, e) {
        return e
    }
    static canBreakChars(t, e, r, n, s) {
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
          , n = gt._context;
        n.font = t;
        const s = gt.METRICS_STRING + gt.BASELINE_SYMBOL
          , a = Math.ceil(n.measureText(s).width);
        let o = Math.ceil(n.measureText(gt.BASELINE_SYMBOL).width);
        const l = Math.ceil(gt.HEIGHT_MULTIPLIER * o);
        if (o = o * gt.BASELINE_MULTIPLIER | 0,
        a === 0 || l === 0)
            return gt._fonts[t] = e,
            e;
        r.width = a,
        r.height = l,
        n.fillStyle = "#f00",
        n.fillRect(0, 0, a, l),
        n.font = t,
        n.textBaseline = "alphabetic",
        n.fillStyle = "#000",
        n.fillText(s, 0, o);
        const c = n.getImageData(0, 0, a, l).data
          , p = c.length
          , g = a * 4;
        let f = 0
          , v = 0
          , _ = !1;
        for (f = 0; f < o; ++f) {
            for (let T = 0; T < g; T += 4)
                if (c[v + T] !== 255) {
                    _ = !0;
                    break
                }
            if (!_)
                v += g;
            else
                break
        }
        for (e.ascent = o - f,
        v = p - g,
        _ = !1,
        f = l; f > o; --f) {
            for (let T = 0; T < g; T += 4)
                if (c[v + T] !== 255) {
                    _ = !0;
                    break
                }
            if (!_)
                v -= g;
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
                if ((t = r.getContext("2d", Gs)) != null && t.measureText)
                    return gt.__canvas = r,
                    r;
                e = st.ADAPTER.createCanvas()
            } catch {
                e = st.ADAPTER.createCanvas()
            }
            e.width = e.height = 10,
            gt.__canvas = e
        }
        return gt.__canvas
    }
    static get _context() {
        return gt.__context || (gt.__context = gt._canvas.getContext("2d", Gs)),
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
let ni = wr;
const T_ = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"]
  , If = class Xn {
    constructor(t) {
        this.styleID = 0,
        this.reset(),
        Jo(this, t, t)
    }
    clone() {
        const t = {};
        return Jo(t, this, Xn.defaultStyle),
        new Xn(t)
    }
    reset() {
        Jo(this, Xn.defaultStyle, Xn.defaultStyle)
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
        const e = Qo(t);
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
        const e = Qo(t);
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
        w_(this._fillGradientStops, t) || (this._fillGradientStops = t,
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
        const e = Qo(t);
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
            let n = e[r].trim();
            !/([\"\'])[^\'\"]+\1/.test(n) && !T_.includes(n) && (n = `"${n}"`),
            e[r] = n
        }
        return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`
    }
}
;
If.defaultStyle = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fillGradientType: ja.LINEAR_VERTICAL,
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
let ui = If;
function Qo(i) {
    const t = Pt.shared
      , e = r => {
        const n = t.setValue(r);
        return n.alpha === 1 ? n.toHex() : n.toRgbaString()
    }
    ;
    return Array.isArray(i) ? i.map(e) : e(i)
}
function w_(i, t) {
    if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length)
        return !1;
    for (let e = 0; e < i.length; ++e)
        if (i[e] !== t[e])
            return !1;
    return !0
}
function Jo(i, t, e) {
    for (const r in e)
        Array.isArray(t[r]) ? i[r] = t[r].slice() : i[r] = t[r]
}
const E_ = {
    texture: !0,
    children: !1,
    baseTexture: !0
}
  , Rf = class Kh extends Lr {
    constructor(t, e, r) {
        let n = !1;
        r || (r = st.ADAPTER.createCanvas(),
        n = !0),
        r.width = 3,
        r.height = 3;
        const s = ut.from(r);
        s.orig = new At,
        s.trim = new At,
        super(s),
        this._ownCanvas = n,
        this.canvas = r,
        this.context = r.getContext("2d", {
            willReadFrequently: !0
        }),
        this._resolution = Kh.defaultResolution ?? st.RESOLUTION,
        this._autoResolution = Kh.defaultAutoResolution,
        this._text = null,
        this._style = null,
        this._styleListener = null,
        this._font = "",
        this.text = t,
        this.style = e,
        this.localStyleID = -1
    }
    static get experimentalLetterSpacing() {
        return ni.experimentalLetterSpacing
    }
    static set experimentalLetterSpacing(t) {
        vt("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"),
        ni.experimentalLetterSpacing = t
    }
    updateText(t) {
        const e = this._style;
        if (this.localStyleID !== e.styleID && (this.dirty = !0,
        this.localStyleID = e.styleID),
        !this.dirty && t)
            return;
        this._font = this._style.toFontString();
        const r = this.context
          , n = ni.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas)
          , s = n.width
          , a = n.height
          , o = n.lines
          , l = n.lineHeight
          , c = n.lineWidths
          , p = n.maxLineWidth
          , g = n.fontProperties;
        this.canvas.width = Math.ceil(Math.ceil(Math.max(1, s) + e.padding * 2) * this._resolution),
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
                  , V = e.dropShadowDistance * this._resolution;
                r.shadowColor = Pt.shared.setValue(P).setAlpha(e.dropShadowAlpha).toRgbaString(),
                r.shadowBlur = k,
                r.shadowOffsetX = Math.cos(e.dropShadowAngle) * V,
                r.shadowOffsetY = Math.sin(e.dropShadowAngle) * V + I
            } else
                r.fillStyle = this._generateFillStyle(e, o, n),
                r.strokeStyle = e.stroke,
                r.shadowColor = "black",
                r.shadowBlur = 0,
                r.shadowOffsetX = 0,
                r.shadowOffsetY = 0;
            let S = (l - g.fontSize) / 2;
            l - g.fontSize < 0 && (S = 0);
            for (let P = 0; P < o.length; P++)
                f = e.strokeThickness / 2,
                v = e.strokeThickness / 2 + P * l + g.ascent + S,
                e.align === "right" ? f += p - c[P] : e.align === "center" && (f += (p - c[P]) / 2),
                e.stroke && e.strokeThickness && this.drawLetterSpacing(o[P], f + e.padding, v + e.padding - E, !0),
                e.fill && this.drawLetterSpacing(o[P], f + e.padding, v + e.padding - E)
        }
        this.updateTexture()
    }
    drawLetterSpacing(t, e, r, n=!1) {
        const s = this._style.letterSpacing;
        let a = !1;
        if (ni.experimentalLetterSpacingSupported && (ni.experimentalLetterSpacing ? (this.context.letterSpacing = `${s}px`,
        this.context.textLetterSpacing = `${s}px`,
        a = !0) : (this.context.letterSpacing = "0px",
        this.context.textLetterSpacing = "0px")),
        s === 0 || a) {
            n ? this.context.strokeText(t, e, r) : this.context.fillText(t, e, r);
            return
        }
        let o = e;
        const l = ni.graphemeSegmenter(t);
        let c = this.context.measureText(t).width
          , p = 0;
        for (let g = 0; g < l.length; ++g) {
            const f = l[g];
            n ? this.context.strokeText(f, o, r) : this.context.fillText(f, o, r);
            let v = "";
            for (let _ = g + 1; _ < l.length; ++_)
                v += l[_];
            p = this.context.measureText(v).width,
            o += c - p + s,
            c = p
        }
    }
    updateTexture() {
        const t = this.canvas;
        if (this._style.trim) {
            const a = Dd(t);
            a.data && (t.width = a.width,
            t.height = a.height,
            this.context.putImageData(a.data, 0, 0))
        }
        const e = this._texture
          , r = this._style
          , n = r.trim ? 0 : r.padding
          , s = e.baseTexture;
        e.trim.width = e._frame.width = t.width / this._resolution,
        e.trim.height = e._frame.height = t.height / this._resolution,
        e.trim.x = -n,
        e.trim.y = -n,
        e.orig.width = e._frame.width - n * 2,
        e.orig.height = e._frame.height - n * 2,
        this._onTextureUpdate(),
        s.setRealSize(t.width, t.height, this._resolution),
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
        const n = t.fill;
        if (Array.isArray(n)) {
            if (n.length === 1)
                return n[0]
        } else
            return n;
        let s;
        const a = t.dropShadow ? t.dropShadowDistance : 0
          , o = t.padding || 0
          , l = this.canvas.width / this._resolution - a - o * 2
          , c = this.canvas.height / this._resolution - a - o * 2
          , p = n.slice()
          , g = t.fillGradientStops.slice();
        if (!g.length) {
            const f = p.length + 1;
            for (let v = 1; v < f; ++v)
                g.push(v / f)
        }
        if (p.unshift(n[0]),
        g.unshift(0),
        p.push(n[n.length - 1]),
        g.push(1),
        t.fillGradientType === ja.LINEAR_VERTICAL) {
            s = this.context.createLinearGradient(l / 2, o, l / 2, c + o);
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
                    let V = 0;
                    typeof g[k] == "number" ? V = g[k] : V = k / p.length;
                    let d = Math.min(1, Math.max(0, A / c + V * P));
                    d = Number(d.toFixed(5)),
                    s.addColorStop(d, p[k])
                }
            }
        } else {
            s = this.context.createLinearGradient(o, c / 2, l + o, c / 2);
            const f = p.length + 1;
            let v = 1;
            for (let _ = 0; _ < p.length; _++) {
                let T;
                typeof g[_] == "number" ? T = g[_] : T = v / f,
                s.addColorStop(T, p[_]),
                v++
            }
        }
        return s
    }
    destroy(t) {
        typeof t == "boolean" && (t = {
            children: t
        }),
        t = Object.assign({}, E_, t),
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
        const e = Xr(this.scale.x) || 1;
        this.scale.x = e * t / this._texture.orig.width,
        this._width = t
    }
    get height() {
        return this.updateText(!0),
        Math.abs(this.scale.y) * this._texture.orig.height
    }
    set height(t) {
        this.updateText(!0);
        const e = Xr(this.scale.y) || 1;
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
Rf.defaultAutoResolution = !0;
let Sl = Rf;
Sl.prototype._renderCanvas = function(i) {
    this._autoResolution && this._resolution !== i.resolution && (this._resolution = i.resolution,
    this.dirty = !0),
    this.updateText(!0),
    Lr.prototype._renderCanvas.call(this, i)
}
;
const Pf = new jt;
re.prototype._cacheAsBitmap = !1;
re.prototype._cacheData = null;
re.prototype._cacheAsBitmapResolution = null;
re.prototype._cacheAsBitmapMultisample = null;
class A_ {
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
            i ? (this._cacheData || (this._cacheData = new A_),
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
    const n = i.renderTexture.current
      , s = i.renderTexture.sourceFrame.clone()
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
    const p = this.transform.localTransform.copyTo(Pf).invert().translate(-e.x, -e.y);
    this.render = this._cacheData.originalRender,
    i.render(this, {
        renderTexture: l,
        clear: !0,
        transform: p,
        skipUpdateTransform: !1
    }),
    i.framebuffer.blit(),
    i.projection.transform = o,
    i.renderTexture.bind(n, s, a),
    this.render = this._renderCached,
    this.updateTransform = this.displayObjectUpdateTransform,
    this.calculateBounds = this._calculateCachedBounds,
    this.getLocalBounds = this._getCachedLocalBounds,
    this._mask = null,
    this.filterArea = null,
    this.alpha = t;
    const g = new Lr(l);
    g.transform.worldTransform = this.transform.worldTransform,
    g.anchor.x = -(e.x / e.width),
    g.anchor.y = -(e.y / e.height),
    g.alpha = t,
    g._bounds = this._bounds,
    this._cacheData.sprite = g,
    this.transform._parentID = -1,
    this.parent ? this.updateTransform() : (this.enableTempParent(),
    this.updateTransform(),
    this.disableTempParent(null)),
    this.containsPoint = g.containsPoint.bind(g)
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
      , n = i._projTransform
      , s = this.cacheAsBitmapResolution || i.resolution;
    t.ceil(s),
    t.width = Math.max(t.width, 1 / s),
    t.height = Math.max(t.height, 1 / s);
    const a = Or.create({
        width: t.width,
        height: t.height,
        resolution: s
    })
      , o = `cacheAsBitmap_${hi()}`;
    this._cacheData.textureCacheId = o,
    Tt.addToCache(a.baseTexture, o),
    ut.addToCache(a, o);
    const l = Pf;
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
    i._projTransform = n,
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
            const n = this.children[e];
            if (!n.getChildByName)
                continue;
            const s = n.getChildByName(i, !0);
            if (s)
                return s
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
var S_ = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class C_ extends De {
    constructor(t=1) {
        super(n_, S_, {
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
const I_ = {
    5: [.153388, .221461, .250301],
    7: [.071303, .131514, .189879, .214607],
    9: [.028532, .067234, .124009, .179044, .20236],
    11: [.0093, .028002, .065984, .121703, .175713, .198596],
    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
}
  , R_ = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
`);
function P_(i) {
    const t = I_[i]
      , e = t.length;
    let r = R_
      , n = "";
    const s = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
    let a;
    for (let o = 0; o < i; o++) {
        let l = s.replace("%index%", o.toString());
        a = o,
        o >= e && (a = i - o - 1),
        l = l.replace("%value%", t[a].toString()),
        n += l,
        n += `
`
    }
    return r = r.replace("%blur%", n),
    r = r.replace("%size%", i.toString()),
    r
}
const M_ = `
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
function D_(i, t) {
    const e = Math.ceil(i / 2);
    let r = M_, n = "", s;
    t ? s = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : s = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
    for (let a = 0; a < i; a++) {
        let o = s.replace("%index%", a.toString());
        o = o.replace("%sampleIndex%", `${a - (e - 1)}.0`),
        n += o,
        n += `
`
    }
    return r = r.replace("%blur%", n),
    r = r.replace("%size%", i.toString()),
    r
}
class Zh extends De {
    constructor(t, e=8, r=4, n=De.defaultResolution, s=5) {
        const a = D_(s, t)
          , o = P_(s);
        super(a, o),
        this.horizontal = t,
        this.resolution = n,
        this._quality = 0,
        this.quality = r,
        this.blur = e
    }
    apply(t, e, r, n) {
        if (r ? this.horizontal ? this.uniforms.strength = 1 / r.width * (r.width / e.width) : this.uniforms.strength = 1 / r.height * (r.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height),
        this.uniforms.strength *= this.strength,
        this.uniforms.strength /= this.passes,
        this.passes === 1)
            t.applyFilter(this, e, r, n);
        else {
            const s = t.getFilterTexture()
              , a = t.renderer;
            let o = e
              , l = s;
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
            t.applyFilter(this, l, r, n),
            t.returnFilterTexture(s)
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
class B_ extends De {
    constructor(t=8, e=4, r=De.defaultResolution, n=5) {
        super(),
        this._repeatEdgePixels = !1,
        this.blurXFilter = new Zh(!0,t,e,r,n),
        this.blurYFilter = new Zh(!1,t,e,r,n),
        this.resolution = r,
        this.quality = e,
        this.blur = t,
        this.repeatEdgePixels = !1
    }
    apply(t, e, r, n) {
        const s = Math.abs(this.blurXFilter.strength)
          , a = Math.abs(this.blurYFilter.strength);
        if (s && a) {
            const o = t.getFilterTexture();
            this.blurXFilter.apply(t, e, o, Cr.CLEAR),
            this.blurYFilter.apply(t, o, r, n),
            t.returnFilterTexture(o)
        } else
            a ? this.blurYFilter.apply(t, e, r, n) : this.blurXFilter.apply(t, e, r, n)
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
var F_ = `varying vec2 vTextureCoord;
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
class Qh extends De {
    constructor() {
        const t = {
            m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
            uAlpha: 1
        };
        super(ff, F_, t),
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
        const [r,n,s] = Pt.shared.setValue(t).toArray()
          , a = [r, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, s, 0, 0, 0, 0, 0, 1, 0];
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
          , n = Math.sin(t)
          , s = Math.sqrt
          , a = 1 / 3
          , o = s(a)
          , l = r + (1 - r) * a
          , c = a * (1 - r) - o * n
          , p = a * (1 - r) + o * n
          , g = a * (1 - r) + o * n
          , f = r + a * (1 - r)
          , v = a * (1 - r) - o * n
          , _ = a * (1 - r) - o * n
          , T = a * (1 - r) + o * n
          , A = r + a * (1 - r)
          , E = [l, c, p, 0, 0, g, f, v, 0, 0, _, T, A, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(E, e)
    }
    contrast(t, e) {
        const r = (t || 0) + 1
          , n = -.5 * (r - 1)
          , s = [r, 0, 0, 0, n, 0, r, 0, 0, n, 0, 0, r, 0, n, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e)
    }
    saturate(t=0, e) {
        const r = t * 2 / 3 + 1
          , n = (r - 1) * -.5
          , s = [r, n, n, 0, 0, n, r, n, 0, 0, n, n, r, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e)
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
    colorTone(t, e, r, n, s) {
        t = t || .2,
        e = e || .15,
        r = r || 16770432,
        n = n || 3375104;
        const a = Pt.shared
          , [o,l,c] = a.setValue(r).toArray()
          , [p,g,f] = a.setValue(n).toArray()
          , v = [.3, .59, .11, 0, 0, o, l, c, t, 0, p, g, f, e, 0, o - p, l - g, c - f, 0, 0];
        this._loadMatrix(v, s)
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
Qh.prototype.grayscale = Qh.prototype.greyscale;
var O_ = `varying vec2 vFilterCoord;
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
  , N_ = `attribute vec2 aVertexPosition;

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
class L_ extends De {
    constructor(t, e) {
        const r = new jt;
        t.renderable = !1,
        super(N_, O_, {
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
    apply(t, e, r, n) {
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite),
        this.uniforms.scale.x = this.scale.x,
        this.uniforms.scale.y = this.scale.y;
        const s = this.maskSprite.worldTransform
          , a = Math.sqrt(s.a * s.a + s.b * s.b)
          , o = Math.sqrt(s.c * s.c + s.d * s.d);
        a !== 0 && o !== 0 && (this.uniforms.rotation[0] = s.a / a,
        this.uniforms.rotation[1] = s.b / a,
        this.uniforms.rotation[2] = s.c / o,
        this.uniforms.rotation[3] = s.d / o),
        t.applyFilter(this, e, r, n)
    }
    get map() {
        return this.uniforms.mapSampler
    }
    set map(t) {
        this.uniforms.mapSampler = t
    }
}
var k_ = `varying vec2 v_rgbNW;
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
  , U_ = `
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
class G_ extends De {
    constructor() {
        super(U_, k_)
    }
}
var H_ = `precision highp float;

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
class $_ extends De {
    constructor(t=.5, e=Math.random()) {
        super(ff, H_, {
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
const xc = {
    AlphaFilter: C_,
    BlurFilter: B_,
    BlurFilterPass: Zh,
    ColorMatrixFilter: Qh,
    DisplacementFilter: L_,
    FXAAFilter: G_,
    NoiseFilter: $_
};
Object.entries(xc).forEach( ([i,t]) => {
    Object.defineProperty(xc, i, {
        get() {
            return vt("7.1.0", `filters.${i} has moved to ${i}`),
            t
        }
    })
}
);
class V_ {
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
        this.tickerAdded || !this.domElement || (We.system.add(this.tickerUpdate, this, Fi.INTERACTION),
        this.tickerAdded = !0)
    }
    removeTickerListener() {
        this.tickerAdded && (We.system.remove(this.tickerUpdate, this),
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
const si = new V_;
class cs {
    constructor(t) {
        this.bubbles = !0,
        this.cancelBubble = !0,
        this.cancelable = !1,
        this.composed = !1,
        this.defaultPrevented = !1,
        this.eventPhase = cs.prototype.NONE,
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
    initUIEvent(t, e, r, n, s) {
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
class xa extends cs {
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
    initMouseEvent(t, e, r, n, s, a, o, l, c, p, g, f, v, _, T) {
        throw new Error("Method not implemented.")
    }
}
class sr extends xa {
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
class dn extends xa {
    constructor() {
        super(...arguments),
        this.DOM_DELTA_PIXEL = 0,
        this.DOM_DELTA_LINE = 1,
        this.DOM_DELTA_PAGE = 2
    }
}
dn.DOM_DELTA_PIXEL = 0,
dn.DOM_DELTA_LINE = 1,
dn.DOM_DELTA_PAGE = 2;
const W_ = 2048
  , j_ = new Bt
  , th = new Bt;
class X_ {
    constructor(t) {
        this.dispatch = new xn,
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
        this.mappingTable[t].sort( (r, n) => r.priority - n.priority)
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
            for (let r = 0, n = e.length; r < n; r++)
                e[r].fn(t);
        else
            console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`)
    }
    hitTest(t, e) {
        si.pauseUpdate = !0;
        const r = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive"
          , n = this[r](this.rootTarget, this.rootTarget.eventMode, j_.set(t, e), this.hitTestFn, this.hitPruneFn);
        return n && n[0]
    }
    propagate(t, e) {
        if (!t.target)
            return;
        const r = t.composedPath();
        t.eventPhase = t.CAPTURING_PHASE;
        for (let n = 0, s = r.length - 1; n < s; n++)
            if (t.currentTarget = r[n],
            this.notifyTarget(t, e),
            t.propagationStopped || t.propagationImmediatelyStopped)
                return;
        if (t.eventPhase = t.AT_TARGET,
        t.currentTarget = t.target,
        this.notifyTarget(t, e),
        !(t.propagationStopped || t.propagationImmediatelyStopped)) {
            t.eventPhase = t.BUBBLING_PHASE;
            for (let n = r.length - 2; n >= 0; n--)
                if (t.currentTarget = r[n],
                this.notifyTarget(t, e),
                t.propagationStopped || t.propagationImmediatelyStopped)
                    return
        }
    }
    all(t, e, r=this._allInteractiveElements) {
        if (r.length === 0)
            return;
        t.eventPhase = t.BUBBLING_PHASE;
        const n = Array.isArray(e) ? e : [e];
        for (let s = r.length - 1; s >= 0; s--)
            n.forEach(a => {
                t.currentTarget = r[s],
                this.notifyTarget(t, a)
            }
            )
    }
    propagationPath(t) {
        const e = [t];
        for (let r = 0; r < W_ && t !== this.rootTarget; r++) {
            if (!t.parent)
                throw new Error("Cannot find propagation path to disconnected target");
            e.push(t.parent),
            t = t.parent
        }
        return e.reverse(),
        e
    }
    hitTestMoveRecursive(t, e, r, n, s, a=!1) {
        let o = !1;
        if (this._interactivePrune(t))
            return null;
        if ((t.eventMode === "dynamic" || e === "dynamic") && (si.pauseUpdate = !1),
        t.interactiveChildren && t.children) {
            const p = t.children;
            for (let g = p.length - 1; g >= 0; g--) {
                const f = p[g]
                  , v = this.hitTestMoveRecursive(f, this._isInteractive(e) ? e : f.eventMode, r, n, s, a || s(t, r));
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
        a || this._hitElements.length > 0 ? null : o ? this._hitElements : l && !s(t, r) && n(t, r) ? c ? [t] : [] : null
    }
    hitTestRecursive(t, e, r, n, s) {
        if (this._interactivePrune(t) || s(t, r))
            return null;
        if ((t.eventMode === "dynamic" || e === "dynamic") && (si.pauseUpdate = !1),
        t.interactiveChildren && t.children) {
            const l = t.children;
            for (let c = l.length - 1; c >= 0; c--) {
                const p = l[c]
                  , g = this.hitTestRecursive(p, this._isInteractive(e) ? e : p.eventMode, r, n, s);
                if (g) {
                    if (g.length > 0 && !g[g.length - 1].parent)
                        continue;
                    const f = t.isInteractive();
                    return (g.length > 0 || f) && g.push(t),
                    g
                }
            }
        }
        const a = this._isInteractive(e)
          , o = t.isInteractive();
        return a && n(t, r) ? o ? [t] : [] : null
    }
    _isInteractive(t) {
        return t === "static" || t === "dynamic"
    }
    _interactivePrune(t) {
        return !!(!t || t.isMask || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren || t.isMask)
    }
    hitPruneFn(t, e) {
        var r;
        if (t.hitArea && (t.worldTransform.applyInverse(e, th),
        !t.hitArea.contains(th.x, th.y)))
            return !0;
        if (t._mask) {
            const n = t._mask.isMaskData ? t._mask.maskObject : t._mask;
            if (n && !((r = n.containsPoint) != null && r.call(n, e)))
                return !0
        }
        return !1
    }
    hitTestFn(t, e) {
        return t.eventMode === "passive" ? !1 : t.hitArea ? !0 : t.containsPoint ? t.containsPoint(e) : !1
    }
    notifyTarget(t, e) {
        var s, a;
        e = e ?? t.type;
        const r = `on${e}`;
        (a = (s = t.currentTarget)[r]) == null || a.call(s, t);
        const n = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${e}capture` : e;
        this.notifyListeners(t, n),
        t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e)
    }
    mapPointerDown(t) {
        if (!(t instanceof sr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.createPointerEvent(t);
        if (this.dispatchEvent(e, "pointerdown"),
        e.pointerType === "touch")
            this.dispatchEvent(e, "touchstart");
        else if (e.pointerType === "mouse" || e.pointerType === "pen") {
            const n = e.button === 2;
            this.dispatchEvent(e, n ? "rightdown" : "mousedown")
        }
        const r = this.trackingData(t.pointerId);
        r.pressTargetsByButton[t.button] = e.composedPath(),
        this.freeEvent(e)
    }
    mapPointerMove(t) {
        var l, c;
        if (!(t instanceof sr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        this._allInteractiveElements.length = 0,
        this._hitElements.length = 0,
        this._isPointerMoveEvent = !0;
        const e = this.createPointerEvent(t);
        this._isPointerMoveEvent = !1;
        const r = e.pointerType === "mouse" || e.pointerType === "pen"
          , n = this.trackingData(t.pointerId)
          , s = this.findMountedTarget(n.overTargets);
        if (((l = n.overTargets) == null ? void 0 : l.length) > 0 && s !== e.target) {
            const p = t.type === "mousemove" ? "mouseout" : "pointerout"
              , g = this.createPointerEvent(t, p, s);
            if (this.dispatchEvent(g, "pointerout"),
            r && this.dispatchEvent(g, "mouseout"),
            !e.composedPath().includes(s)) {
                const f = this.createPointerEvent(t, "pointerleave", s);
                for (f.eventPhase = f.AT_TARGET; f.target && !e.composedPath().includes(f.target); )
                    f.currentTarget = f.target,
                    this.notifyTarget(f),
                    r && this.notifyTarget(f, "mouseleave"),
                    f.target = f.target.parent;
                this.freeEvent(f)
            }
            this.freeEvent(g)
        }
        if (s !== e.target) {
            const p = t.type === "mousemove" ? "mouseover" : "pointerover"
              , g = this.clonePointerEvent(e, p);
            this.dispatchEvent(g, "pointerover"),
            r && this.dispatchEvent(g, "mouseover");
            let f = s == null ? void 0 : s.parent;
            for (; f && f !== this.rootTarget.parent && f !== e.target; )
                f = f.parent;
            if (!f || f === this.rootTarget.parent) {
                const v = this.clonePointerEvent(e, "pointerenter");
                for (v.eventPhase = v.AT_TARGET; v.target && v.target !== s && v.target !== this.rootTarget.parent; )
                    v.currentTarget = v.target,
                    this.notifyTarget(v),
                    r && this.notifyTarget(v, "mouseenter"),
                    v.target = v.target.parent;
                this.freeEvent(v)
            }
            this.freeEvent(g)
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
        n.overTargets = e.composedPath(),
        this.freeEvent(e)
    }
    mapPointerOver(t) {
        var a;
        if (!(t instanceof sr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.trackingData(t.pointerId)
          , r = this.createPointerEvent(t)
          , n = r.pointerType === "mouse" || r.pointerType === "pen";
        this.dispatchEvent(r, "pointerover"),
        n && this.dispatchEvent(r, "mouseover"),
        r.pointerType === "mouse" && (this.cursor = (a = r.target) == null ? void 0 : a.cursor);
        const s = this.clonePointerEvent(r, "pointerenter");
        for (s.eventPhase = s.AT_TARGET; s.target && s.target !== this.rootTarget.parent; )
            s.currentTarget = s.target,
            this.notifyTarget(s),
            n && this.notifyTarget(s, "mouseenter"),
            s.target = s.target.parent;
        e.overTargets = r.composedPath(),
        this.freeEvent(r),
        this.freeEvent(s)
    }
    mapPointerOut(t) {
        if (!(t instanceof sr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.trackingData(t.pointerId);
        if (e.overTargets) {
            const r = t.pointerType === "mouse" || t.pointerType === "pen"
              , n = this.findMountedTarget(e.overTargets)
              , s = this.createPointerEvent(t, "pointerout", n);
            this.dispatchEvent(s),
            r && this.dispatchEvent(s, "mouseout");
            const a = this.createPointerEvent(t, "pointerleave", n);
            for (a.eventPhase = a.AT_TARGET; a.target && a.target !== this.rootTarget.parent; )
                a.currentTarget = a.target,
                this.notifyTarget(a),
                r && this.notifyTarget(a, "mouseleave"),
                a.target = a.target.parent;
            e.overTargets = null,
            this.freeEvent(s),
            this.freeEvent(a)
        }
        this.cursor = null
    }
    mapPointerUp(t) {
        if (!(t instanceof sr)) {
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
        const n = this.trackingData(t.pointerId)
          , s = this.findMountedTarget(n.pressTargetsByButton[t.button]);
        let a = s;
        if (s && !r.composedPath().includes(s)) {
            let o = s;
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
            delete n.pressTargetsByButton[t.button],
            a = o
        }
        if (a) {
            const o = this.clonePointerEvent(r, "click");
            o.target = a,
            o.path = null,
            n.clicksByButton[t.button] || (n.clicksByButton[t.button] = {
                clickCount: 0,
                target: o.target,
                timeStamp: e
            });
            const l = n.clicksByButton[t.button];
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
        if (!(t instanceof sr)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const e = this.trackingData(t.pointerId)
          , r = this.findMountedTarget(e.pressTargetsByButton[t.button])
          , n = this.createPointerEvent(t);
        if (r) {
            let s = r;
            for (; s; )
                n.currentTarget = s,
                this.notifyTarget(n, "pointerupoutside"),
                n.pointerType === "touch" ? this.notifyTarget(n, "touchendoutside") : (n.pointerType === "mouse" || n.pointerType === "pen") && this.notifyTarget(n, n.button === 2 ? "rightupoutside" : "mouseupoutside"),
                s = s.parent;
            delete e.pressTargetsByButton[t.button]
        }
        this.freeEvent(n)
    }
    mapWheel(t) {
        if (!(t instanceof dn)) {
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
        const n = this.allocateEvent(sr);
        return this.copyPointerData(t, n),
        this.copyMouseData(t, n),
        this.copyData(t, n),
        n.nativeEvent = t.nativeEvent,
        n.originalEvent = t,
        n.target = r ?? this.hitTest(n.global.x, n.global.y) ?? this._hitElements[0],
        typeof e == "string" && (n.type = e),
        n
    }
    createWheelEvent(t) {
        const e = this.allocateEvent(dn);
        return this.copyWheelData(t, e),
        this.copyMouseData(t, e),
        this.copyData(t, e),
        e.nativeEvent = t.nativeEvent,
        e.originalEvent = t,
        e.target = this.hitTest(e.global.x, e.global.y),
        e
    }
    clonePointerEvent(t, e) {
        const r = this.allocateEvent(sr);
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
        t instanceof sr && e instanceof sr && (e.pointerId = t.pointerId,
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
        t instanceof xa && e instanceof xa && (e.altKey = t.altKey,
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
                for (let n = 0, s = r.length; n < s && !t.propagationImmediatelyStopped; n++)
                    r[n].once && t.currentTarget.removeListener(e, r[n].fn, void 0, !0),
                    r[n].fn.call(r[n].context, t)
    }
}
const z_ = 1
  , q_ = {
    touchstart: "pointerdown",
    touchend: "pointerup",
    touchendoutside: "pointerupoutside",
    touchmove: "pointermove",
    touchcancel: "pointercancel"
}
  , Jh = class tl {
    constructor(t) {
        this.supportsTouchEvents = "ontouchstart"in globalThis,
        this.supportsPointerEvents = !!globalThis.PointerEvent,
        this.domElement = null,
        this.resolution = 1,
        this.renderer = t,
        this.rootBoundary = new X_(null),
        si.init(this),
        this.autoPreventDefault = !0,
        this.eventsAdded = !1,
        this.rootPointerEvent = new sr(null),
        this.rootWheelEvent = new dn(null),
        this.cursorStyles = {
            default: "inherit",
            pointer: "pointer"
        },
        this.features = new Proxy({
            ...tl.defaultEventFeatures
        },{
            set: (e, r, n) => (r === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = n),
            e[r] = n,
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
        tl._defaultEventMode = t.eventMode ?? "auto",
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
        for (let r = 0, n = e.length; r < n; r++) {
            const s = e[r]
              , a = this.bootstrapEvent(this.rootPointerEvent, s);
            this.rootBoundary.mapEvent(a)
        }
        this.setCursor(this.rootBoundary.cursor)
    }
    onPointerMove(t) {
        if (!this.features.move)
            return;
        this.rootBoundary.rootTarget = this.renderer.lastObjectRendered,
        si.pointerMoved();
        const e = this.normalizeToPointerData(t);
        for (let r = 0, n = e.length; r < n; r++) {
            const s = this.bootstrapEvent(this.rootPointerEvent, e[r]);
            this.rootBoundary.mapEvent(s)
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
          , n = this.normalizeToPointerData(t);
        for (let s = 0, a = n.length; s < a; s++) {
            const o = this.bootstrapEvent(this.rootPointerEvent, n[s]);
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
        for (let r = 0, n = e.length; r < n; r++) {
            const s = this.bootstrapEvent(this.rootPointerEvent, e[r]);
            this.rootBoundary.mapEvent(s)
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
        si.domElement = t,
        this.addEvents()
    }
    addEvents() {
        if (this.eventsAdded || !this.domElement)
            return;
        si.addTickerListener();
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
        si.removeTickerListener();
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
        const n = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
            x: 0,
            y: 0,
            width: this.domElement.width,
            height: this.domElement.height,
            left: 0,
            top: 0
        }
          , s = 1 / this.resolution;
        t.x = (e - n.left) * (this.domElement.width / n.width) * s,
        t.y = (r - n.top) * (this.domElement.height / n.height) * s
    }
    normalizeToPointerData(t) {
        const e = [];
        if (this.supportsTouchEvents && t instanceof TouchEvent)
            for (let r = 0, n = t.changedTouches.length; r < n; r++) {
                const s = t.changedTouches[r];
                typeof s.button > "u" && (s.button = 0),
                typeof s.buttons > "u" && (s.buttons = 1),
                typeof s.isPrimary > "u" && (s.isPrimary = t.touches.length === 1 && t.type === "touchstart"),
                typeof s.width > "u" && (s.width = s.radiusX || 1),
                typeof s.height > "u" && (s.height = s.radiusY || 1),
                typeof s.tiltX > "u" && (s.tiltX = 0),
                typeof s.tiltY > "u" && (s.tiltY = 0),
                typeof s.pointerType > "u" && (s.pointerType = "touch"),
                typeof s.pointerId > "u" && (s.pointerId = s.identifier || 0),
                typeof s.pressure > "u" && (s.pressure = s.force || .5),
                typeof s.twist > "u" && (s.twist = 0),
                typeof s.tangentialPressure > "u" && (s.tangentialPressure = 0),
                typeof s.layerX > "u" && (s.layerX = s.offsetX = s.clientX),
                typeof s.layerY > "u" && (s.layerY = s.offsetY = s.clientY),
                s.isNormalized = !0,
                s.type = t.type,
                e.push(s)
            }
        else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
            const r = t;
            typeof r.isPrimary > "u" && (r.isPrimary = !0),
            typeof r.width > "u" && (r.width = 1),
            typeof r.height > "u" && (r.height = 1),
            typeof r.tiltX > "u" && (r.tiltX = 0),
            typeof r.tiltY > "u" && (r.tiltY = 0),
            typeof r.pointerType > "u" && (r.pointerType = "mouse"),
            typeof r.pointerId > "u" && (r.pointerId = z_),
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
        t.type.startsWith("touch") && (t.type = q_[t.type] || t.type),
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
Jh.extension = {
    name: "events",
    type: [rt.RendererSystem, rt.CanvasRendererSystem]
},
Jh.defaultEventFeatures = {
    move: !0,
    globalMove: !0,
    click: !0,
    wheel: !0
};
let el = Jh;
ot.add(el);
function bc(i) {
    return i === "dynamic" || i === "static"
}
const Y_ = {
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
        return this._internalInteractive ?? bc(el.defaultEventMode)
    },
    set interactive(i) {
        vt("7.2.0", "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."),
        this._internalInteractive = i,
        this.eventMode = i ? "static" : "auto"
    },
    _internalEventMode: void 0,
    get eventMode() {
        return this._internalEventMode ?? el.defaultEventMode
    },
    set eventMode(i) {
        this._internalInteractive = bc(i),
        this._internalEventMode = i
    },
    isInteractive() {
        return this.eventMode === "static" || this.eventMode === "dynamic"
    },
    interactiveChildren: !0,
    hitArea: null,
    addEventListener(i, t, e) {
        const r = typeof e == "boolean" && e || typeof e == "object" && e.capture
          , n = typeof e == "object" ? e.signal : void 0
          , s = typeof e == "object" ? e.once === !0 : !1
          , a = typeof t == "function" ? void 0 : t;
        i = r ? `${i}capture` : i;
        const o = typeof t == "function" ? t : t.handleEvent
          , l = this;
        n && n.addEventListener("abort", () => {
            l.off(i, o, a)
        }
        ),
        s ? l.once(i, o, a) : l.on(i, o, a)
    },
    removeEventListener(i, t, e) {
        const r = typeof e == "boolean" && e || typeof e == "object" && e.capture
          , n = typeof t == "function" ? void 0 : t;
        i = r ? `${i}capture` : i,
        t = typeof t == "function" ? t : t.handleEvent,
        this.off(i, t, n)
    },
    dispatchEvent(i) {
        if (!(i instanceof cs))
            throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
        return i.defaultPrevented = !1,
        i.path = null,
        i.target = this,
        i.manager.dispatchEvent(i),
        !i.defaultPrevented
    }
};
re.mixin(Y_);
const K_ = {
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
re.mixin(K_);
const Z_ = 9
  , Hs = 100
  , Q_ = 0
  , J_ = 0
  , Tc = 2
  , wc = 1
  , tx = -1e3
  , ex = -1e3
  , rx = 2;
class Mf {
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
        e.style.width = `${Hs}px`,
        e.style.height = `${Hs}px`,
        e.style.position = "absolute",
        e.style.top = `${Q_}px`,
        e.style.left = `${J_}px`,
        e.style.zIndex = Tc.toString(),
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
        t.style.width = `${wc}px`,
        t.style.height = `${wc}px`,
        t.style.position = "absolute",
        t.style.top = `${tx}px`,
        t.style.left = `${ex}px`,
        t.style.zIndex = rx.toString(),
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
        const {x: e, y: r, width: n, height: s} = this.renderer.view.getBoundingClientRect()
          , {width: a, height: o, resolution: l} = this.renderer
          , c = n / a * l
          , p = s / o * l;
        let g = this.div;
        g.style.left = `${e}px`,
        g.style.top = `${r}px`,
        g.style.width = `${a}px`,
        g.style.height = `${o}px`;
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
                g = v._accessibleDiv;
                let _ = v.hitArea;
                const T = v.worldTransform;
                v.hitArea ? (g.style.left = `${(T.tx + _.x * T.a) * c}px`,
                g.style.top = `${(T.ty + _.y * T.d) * p}px`,
                g.style.width = `${_.width * T.a * c}px`,
                g.style.height = `${_.height * T.d * p}px`) : (_ = v.getBounds(),
                this.capHitArea(_),
                g.style.left = `${_.x * c}px`,
                g.style.top = `${_.y * p}px`,
                g.style.width = `${_.width * c}px`,
                g.style.height = `${_.height * p}px`,
                g.title !== v.accessibleTitle && v.accessibleTitle !== null && (g.title = v.accessibleTitle),
                g.getAttribute("aria-label") !== v.accessibleHint && v.accessibleHint !== null && g.setAttribute("aria-label", v.accessibleHint)),
                (v.accessibleTitle !== g.title || v.tabIndex !== g.tabIndex) && (g.title = v.accessibleTitle,
                g.tabIndex = v.tabIndex,
                this.debug && this.updateDebugHTML(g))
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
        e.style.width = `${Hs}px`,
        e.style.height = `${Hs}px`,
        e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent",
        e.style.position = "absolute",
        e.style.zIndex = Tc.toString(),
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
          , n = this.renderer.events.rootBoundary
          , s = Object.assign(new cs(n), {
            target: r
        });
        n.rootTarget = this.renderer.lastObjectRendered,
        e.forEach(a => n.dispatchEvent(s, a))
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
        t.keyCode === Z_ && this.activate()
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
Mf.extension = {
    name: "accessibility",
    type: [rt.RendererPlugin, rt.CanvasRendererPlugin]
};
ot.add(Mf);
const Df = class rl {
    constructor(t) {
        this.stage = new Ue,
        t = Object.assign({
            forceCanvas: !1
        }, t),
        this.renderer = e_(t),
        rl._plugins.forEach(e => {
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
        const r = rl._plugins.slice(0);
        r.reverse(),
        r.forEach(n => {
            n.destroy.call(this)
        }
        ),
        this.stage.destroy(e),
        this.stage = null,
        this.renderer.destroy(t),
        this.renderer = null
    }
}
;
Df._plugins = [];
let ix = Df;
ot.handleByList(rt.Application, ix._plugins);
class Bf {
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
                const {clientWidth: n, clientHeight: s} = this._resizeTo;
                e = n,
                r = s
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
Bf.extension = rt.Application;
ot.add(Bf);
const Ec = {
    loader: rt.LoadParser,
    resolver: rt.ResolveParser,
    cache: rt.CacheParser,
    detection: rt.DetectionParser
};
ot.handle(rt.Asset, i => {
    const t = i.ref;
    Object.entries(Ec).filter( ([e]) => !!t[e]).forEach( ([e,r]) => ot.add(Object.assign(t[e], {
        extension: t[e].extension ?? r
    })))
}
, i => {
    const t = i.ref;
    Object.keys(Ec).filter(e => !!t[e]).forEach(e => ot.remove(t[e]))
}
);
class nx {
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
function bn(i, t) {
    if (Array.isArray(t)) {
        for (const e of t)
            if (i.startsWith(`data:${e}`))
                return !0;
        return !1
    }
    return i.startsWith(`data:${t}`)
}
function fi(i, t) {
    const e = i.split("?")[0]
      , r = ge.extname(e).toLowerCase();
    return Array.isArray(t) ? t.includes(r) : r === t
}
const ar = (i, t, e=!1) => (Array.isArray(i) || (i = [i]),
t ? i.map(r => typeof r == "string" || e ? t(r) : r) : i)
  , il = (i, t) => {
    const e = t.split("?")[1];
    return e && (i += `?${e}`),
    i
}
;
function Ff(i, t, e, r, n) {
    const s = t[e];
    for (let a = 0; a < s.length; a++) {
        const o = s[a];
        e < t.length - 1 ? Ff(i.replace(r[e], o), t, e + 1, r, n) : n.push(i.replace(r[e], o))
    }
}
function sx(i) {
    const t = /\{(.*?)\}/g
      , e = i.match(t)
      , r = [];
    if (e) {
        const n = [];
        e.forEach(s => {
            const a = s.substring(1, s.length - 1).split(",");
            n.push(a)
        }
        ),
        Ff(i, n, 0, e, r)
    } else
        r.push(i);
    return r
}
const ba = i => !Array.isArray(i);
class ax {
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
        let n;
        for (let o = 0; o < this.parsers.length; o++) {
            const l = this.parsers[o];
            if (l.test(e)) {
                n = l.getCacheableAssets(r, e);
                break
            }
        }
        n || (n = {},
        r.forEach(o => {
            n[o] = e
        }
        ));
        const s = Object.keys(n)
          , a = {
            cacheKeys: s,
            keys: r
        };
        if (r.forEach(o => {
            this._cacheMap.set(o, a)
        }
        ),
        s.forEach(o => {
            this._cache.has(o) && this._cache.get(o) !== e && console.warn("[Cache] already has key:", o),
            this._cache.set(o, n[o])
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
const Ii = new ax;
class ox {
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
            let n = null
              , s = null;
            if (e.loadParser && (s = this._parserHash[e.loadParser],
            s || console.warn(`[Assets] specified load parser "${e.loadParser}" not found while loading ${t}`)),
            !s) {
                for (let l = 0; l < this.parsers.length; l++) {
                    const c = this.parsers[l];
                    if (c.load && ((a = c.test) != null && a.call(c, t, e, this))) {
                        s = c;
                        break
                    }
                }
                if (!s)
                    return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`),
                    null
            }
            n = await s.load(t, e, this),
            r.parser = s;
            for (let l = 0; l < this.parsers.length; l++) {
                const c = this.parsers[l];
                c.parse && c.parse && await ((o = c.testParse) == null ? void 0 : o.call(c, n, e, this)) && (n = await c.parse(n, e, this) || n,
                r.parser = c)
            }
            return n
        }
        )(),
        r
    }
    async load(t, e) {
        this._parsersValidated || this._validateParsers();
        let r = 0;
        const n = {}
          , s = ba(t)
          , a = ar(t, c => ({
            alias: [c],
            src: c
        }))
          , o = a.length
          , l = a.map(async c => {
            const p = ge.toAbsolute(c.src);
            if (!n[c.src])
                try {
                    this.promiseCache[p] || (this.promiseCache[p] = this._getLoadPromiseAndParser(p, c)),
                    n[c.src] = await this.promiseCache[p].promise,
                    e && e(++r / o)
                } catch (g) {
                    throw delete this.promiseCache[p],
                    delete n[c.src],
                    new Error(`[Loader.load] Failed to load ${p}.
${g}`)
                }
        }
        );
        return await Promise.all(l),
        s ? n[a[0].src] : n
    }
    async unload(t) {
        const e = ar(t, r => ({
            alias: [r],
            src: r
        })).map(async r => {
            var a, o;
            const n = ge.toAbsolute(r.src)
              , s = this.promiseCache[n];
            if (s) {
                const l = await s.promise;
                delete this.promiseCache[n],
                (o = (a = s.parser) == null ? void 0 : a.unload) == null || o.call(a, l, r, this)
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
const hx = ".json"
  , lx = "application/json"
  , ux = {
    extension: {
        type: rt.LoadParser,
        priority: dr.Low
    },
    name: "loadJson",
    test(i) {
        return bn(i, lx) || fi(i, hx)
    },
    async load(i) {
        return await (await st.ADAPTER.fetch(i)).json()
    }
};
ot.add(ux);
const cx = ".txt"
  , dx = "text/plain"
  , fx = {
    name: "loadTxt",
    extension: {
        type: rt.LoadParser,
        priority: dr.Low
    },
    test(i) {
        return bn(i, dx) || fi(i, cx)
    },
    async load(i) {
        return await (await st.ADAPTER.fetch(i)).text()
    }
};
ot.add(fx);
const px = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"]
  , gx = [".ttf", ".otf", ".woff", ".woff2"]
  , mx = ["font/ttf", "font/otf", "font/woff", "font/woff2"]
  , yx = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
function vx(i) {
    const t = ge.extname(i)
      , e = ge.basename(i, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(s => s.charAt(0).toUpperCase() + s.slice(1));
    let r = e.length > 0;
    for (const s of e)
        if (!s.match(yx)) {
            r = !1;
            break
        }
    let n = e.join(" ");
    return r || (n = `"${n.replace(/[\\"]/g, "\\$&")}"`),
    n
}
const _x = /^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;
function xx(i) {
    return _x.test(i) ? i : encodeURI(i)
}
const bx = {
    extension: {
        type: rt.LoadParser,
        priority: dr.Low
    },
    name: "loadWebFont",
    test(i) {
        return bn(i, mx) || fi(i, gx)
    },
    async load(i, t) {
        var r, n, s;
        const e = st.ADAPTER.getFontFaceSet();
        if (e) {
            const a = []
              , o = ((r = t.data) == null ? void 0 : r.family) ?? vx(i)
              , l = ((s = (n = t.data) == null ? void 0 : n.weights) == null ? void 0 : s.filter(p => px.includes(p))) ?? ["normal"]
              , c = t.data ?? {};
            for (let p = 0; p < l.length; p++) {
                const g = l[p]
                  , f = new FontFace(o,`url(${xx(i)})`,{
                    ...c,
                    weight: g
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
        (Array.isArray(i) ? i : [i]).forEach(t => st.ADAPTER.getFontFaceSet().delete(t))
    }
};
ot.add(bx);
const Tx = `(function() {
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
let fn = null
  , nl = class {
    constructor() {
        fn || (fn = URL.createObjectURL(new Blob([Tx],{
            type: "application/javascript"
        }))),
        this.worker = new Worker(fn)
    }
}
;
nl.revokeObjectURL = function() {
    fn && (URL.revokeObjectURL(fn),
    fn = null)
}
;
const wx = `(function() {
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
let pn = null;
class Of {
    constructor() {
        pn || (pn = URL.createObjectURL(new Blob([wx],{
            type: "application/javascript"
        }))),
        this.worker = new Worker(pn)
    }
}
Of.revokeObjectURL = function() {
    pn && (URL.revokeObjectURL(pn),
    pn = null)
}
;
let Ac = 0, eh;
class Ex {
    constructor() {
        this._initialized = !1,
        this._createdWorkers = 0,
        this.workerPool = [],
        this.queue = [],
        this.resolveHash = {}
    }
    isImageBitmapSupported() {
        return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise(t => {
            const {worker: e} = new nl;
            e.addEventListener("message", r => {
                e.terminate(),
                nl.revokeObjectURL(),
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
        eh === void 0 && (eh = navigator.hardwareConcurrency || 4);
        let t = this.workerPool.pop();
        return !t && this._createdWorkers < eh && (this._createdWorkers++,
        t = new Of().worker,
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
        const r = new Promise( (n, s) => {
            this.queue.push({
                id: t,
                arguments: e,
                resolve: n,
                reject: s
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
        this.resolveHash[Ac] = {
            resolve: e.resolve,
            reject: e.reject
        },
        t.postMessage({
            data: e.arguments,
            uuid: Ac++,
            id: r
        })
    }
}
const Sc = new Ex;
function ds(i, t, e) {
    i.resource.internal = !0;
    const r = new ut(i)
      , n = () => {
        delete t.promiseCache[e],
        Ii.has(e) && Ii.remove(e)
    }
    ;
    return r.baseTexture.once("destroyed", () => {
        e in t.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."),
        n())
    }
    ),
    r.once("destroyed", () => {
        i.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."),
        n())
    }
    ),
    r
}
const Ax = [".jpeg", ".jpg", ".png", ".webp", ".avif"]
  , Sx = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function Cx(i) {
    const t = await st.ADAPTER.fetch(i);
    if (!t.ok)
        throw new Error(`[loadImageBitmap] Failed to fetch ${i}: ${t.status} ${t.statusText}`);
    const e = await t.blob();
    return await createImageBitmap(e)
}
const Xa = {
    name: "loadTextures",
    extension: {
        type: rt.LoadParser,
        priority: dr.High
    },
    config: {
        preferWorkers: !0,
        preferCreateImageBitmap: !0,
        crossOrigin: "anonymous"
    },
    test(i) {
        return bn(i, Sx) || fi(i, Ax)
    },
    async load(i, t, e) {
        var o;
        const r = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
        let n;
        r ? this.config.preferWorkers && await Sc.isImageBitmapSupported() ? n = await Sc.loadImageBitmap(i) : n = await Cx(i) : n = await new Promise( (l, c) => {
            const p = new Image;
            p.crossOrigin = this.config.crossOrigin,
            p.src = i,
            p.complete ? l(p) : (p.onload = () => l(p),
            p.onerror = g => c(g))
        }
        );
        const s = {
            ...t.data
        };
        s.resolution ?? (s.resolution = Fr(i)),
        r && ((o = s.resourceOptions) == null ? void 0 : o.ownsImageBitmap) === void 0 && (s.resourceOptions = {
            ...s.resourceOptions
        },
        s.resourceOptions.ownsImageBitmap = !0);
        const a = new Tt(n,s);
        return a.resource.src = i,
        ds(a, e, i)
    },
    unload(i) {
        i.destroy(!0)
    }
};
ot.add(Xa);
const Ix = ".svg"
  , Rx = "image/svg+xml"
  , Px = {
    extension: {
        type: rt.LoadParser,
        priority: dr.High
    },
    name: "loadSVG",
    test(i) {
        return bn(i, Rx) || fi(i, Ix)
    },
    async testParse(i) {
        return jh.test(i)
    },
    async parse(i, t, e) {
        var s;
        const r = new jh(i,(s = t == null ? void 0 : t.data) == null ? void 0 : s.resourceOptions);
        await r.load();
        const n = new Tt(r,{
            resolution: Fr(i),
            ...t == null ? void 0 : t.data
        });
        return n.resource.src = t.src,
        ds(n, e, t.src)
    },
    async load(i, t) {
        return (await st.ADAPTER.fetch(i)).text()
    },
    unload: Xa.unload
};
ot.add(Px);
const Mx = [".mp4", ".m4v", ".webm", ".ogv"]
  , Dx = ["video/mp4", "video/webm", "video/ogg"]
  , Bx = {
    name: "loadVideo",
    extension: {
        type: rt.LoadParser,
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
        return bn(i, Dx) || fi(i, Mx)
    },
    async load(i, t, e) {
        var a;
        let r;
        const n = await (await st.ADAPTER.fetch(i)).blob()
          , s = URL.createObjectURL(n);
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
              , l = new xf(s,o);
            await l.load();
            const c = new Tt(l,{
                alphaMode: await Td(),
                resolution: Fr(i),
                ...t == null ? void 0 : t.data
            });
            c.resource.src = i,
            r = ds(c, e, i),
            r.baseTexture.once("destroyed", () => {
                URL.revokeObjectURL(s)
            }
            )
        } catch (o) {
            throw URL.revokeObjectURL(s),
            o
        }
        return r
    },
    unload(i) {
        i.destroy(!0)
    }
};
ot.add(Bx);
class Fx {
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
        const {alias: e, name: r, src: n, srcs: s} = t;
        return ar(e || r || n || s, a => typeof a == "string" ? a : Array.isArray(a) ? a.map(o => (o == null ? void 0 : o.src) ?? (o == null ? void 0 : o.srcs) ?? o) : a != null && a.src || a != null && a.srcs ? a.src ?? a.srcs : a, !0)
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
        Array.isArray(e) ? e.forEach(n => {
            const s = n.src ?? n.srcs
              , a = n.alias ?? n.name;
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
                ...n,
                alias: o,
                src: s
            })
        }
        ) : Object.keys(e).forEach(n => {
            const s = [n, this._createBundleAssetId(t, n)];
            if (typeof e[n] == "string")
                this.add({
                    alias: s,
                    src: e[n]
                });
            else if (Array.isArray(e[n]))
                this.add({
                    alias: s,
                    src: e[n]
                });
            else {
                const a = e[n]
                  , o = a.src ?? a.srcs;
                this.add({
                    ...a,
                    alias: s,
                    src: Array.isArray(o) ? o : [o]
                })
            }
            r.push(...s)
        }
        ),
        this._bundles[t] = r
    }
    add(t, e, r, n, s) {
        const a = [];
        typeof t == "string" || Array.isArray(t) && typeof t[0] == "string" ? (vt("7.2.0", `Assets.add now uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser }) instead.`),
        a.push({
            alias: t,
            src: e,
            data: r,
            format: n,
            loadParser: s
        })) : Array.isArray(t) ? a.push(...t) : a.push(t);
        let o;
        o = l => {
            this.hasKey(l) && console.warn(`[Resolver] already has key: ${l} overwriting`)
        }
        ,
        ar(a).forEach(l => {
            const {src: c, srcs: p} = l;
            let {data: g, format: f, loadParser: v} = l;
            const _ = ar(c || p).map(E => typeof E == "string" ? sx(E) : Array.isArray(E) ? E : [E])
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
                        g = I.data ?? g,
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
                        data: g,
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
        const e = ba(t);
        t = ar(t);
        const r = {};
        return t.forEach(n => {
            const s = this._bundles[n];
            if (s) {
                const a = this.resolve(s)
                  , o = {};
                for (const l in a) {
                    const c = a[l];
                    o[this._extractAssetIdFromBundle(n, l)] = c
                }
                r[n] = o
            }
        }
        ),
        e ? r[t[0]] : r
    }
    resolveUrl(t) {
        const e = this.resolve(t);
        if (typeof t != "string") {
            const r = {};
            for (const n in e)
                r[n] = e[n].src;
            return r
        }
        return e.src
    }
    resolve(t) {
        const e = ba(t);
        t = ar(t);
        const r = {};
        return t.forEach(n => {
            if (!this._resolverHash[n])
                if (this._assetMap[n]) {
                    let s = this._assetMap[n];
                    const a = s[0]
                      , o = this._getPreferredOrder(s);
                    o == null || o.priority.forEach(l => {
                        o.params[l].forEach(c => {
                            const p = s.filter(g => g[l] ? g[l] === c : !1);
                            p.length && (s = p)
                        }
                        )
                    }
                    ),
                    this._resolverHash[n] = s[0] ?? a
                } else
                    this._resolverHash[n] = this.buildResolvedAsset({
                        alias: [n],
                        src: n
                    }, {});
            r[n] = this._resolverHash[n]
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
              , n = this._preferredOrder.find(s => s.params.format.includes(r.format));
            if (n)
                return n
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
        const {aliases: r, data: n, loadParser: s, format: a} = e;
        return (this._basePath || this._rootPath) && (t.src = ge.toAbsolute(t.src, this._basePath, this._rootPath)),
        t.alias = r ?? t.alias ?? [t.src],
        t.src = this._appendDefaultSearchParams(t.src),
        t.data = {
            ...n || {},
            ...t.data
        },
        t.loadParser = s ?? t.loadParser,
        t.format = a ?? t.format ?? ge.extname(t.src).slice(1),
        t.srcs = t.src,
        t.name = t.alias,
        t
    }
}
class Ox {
    constructor() {
        this._detections = [],
        this._initialized = !1,
        this.resolver = new Fx,
        this.loader = new ox,
        this.cache = Ii,
        this._backgroundLoader = new nx(this.loader),
        this._backgroundLoader.active = !0,
        this.reset()
    }
    async init(t={}) {
        var s, a;
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
        const e = ((s = t.texturePreference) == null ? void 0 : s.resolution) ?? 1
          , r = typeof e == "number" ? [e] : e
          , n = await this._detectFormats({
            preferredFormats: (a = t.texturePreference) == null ? void 0 : a.format,
            skipDetections: t.skipDetections,
            detections: this._detections
        });
        this.resolver.prefer({
            params: {
                format: n,
                resolution: r
            }
        }),
        t.preferences && this.setPreferences(t.preferences)
    }
    add(t, e, r, n, s) {
        this.resolver.add(t, e, r, n, s)
    }
    async load(t, e) {
        this._initialized || await this.init();
        const r = ba(t)
          , n = ar(t).map(o => {
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
          , s = this.resolver.resolve(n)
          , a = await this._mapLoadToResolve(s, e);
        return r ? a[n[0]] : a
    }
    addBundle(t, e) {
        this.resolver.addBundle(t, e)
    }
    async loadBundle(t, e) {
        this._initialized || await this.init();
        let r = !1;
        typeof t == "string" && (r = !0,
        t = [t]);
        const n = this.resolver.resolveBundle(t)
          , s = {}
          , a = Object.keys(n);
        let o = 0
          , l = 0;
        const c = () => {
            e == null || e(++o / l)
        }
          , p = a.map(g => {
            const f = n[g];
            return l += Object.keys(f).length,
            this._mapLoadToResolve(f, c).then(v => {
                s[g] = v
            }
            )
        }
        );
        return await Promise.all(p),
        r ? s[t[0]] : s
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
            return Ii.get(t);
        const e = {};
        for (let r = 0; r < t.length; r++)
            e[r] = Ii.get(t[r]);
        return e
    }
    async _mapLoadToResolve(t, e) {
        const r = Object.values(t)
          , n = Object.keys(t);
        this._backgroundLoader.active = !1;
        const s = await this.loader.load(r, e);
        this._backgroundLoader.active = !0;
        const a = {};
        return r.forEach( (o, l) => {
            const c = s[o.src]
              , p = [o.src];
            o.alias && p.push(...o.alias),
            a[n[l]] = c,
            Ii.set(p, c)
        }
        ),
        a
    }
    async unload(t) {
        this._initialized || await this.init();
        const e = ar(t).map(n => typeof n != "string" ? n.src : n)
          , r = this.resolver.resolve(e);
        await this._unloadFromResolved(r)
    }
    async unloadBundle(t) {
        this._initialized || await this.init(),
        t = ar(t);
        const e = this.resolver.resolveBundle(t)
          , r = Object.keys(e).map(n => this._unloadFromResolved(e[n]));
        await Promise.all(r)
    }
    async _unloadFromResolved(t) {
        const e = Object.values(t);
        e.forEach(r => {
            Ii.remove(r.src)
        }
        ),
        await this.loader.unload(e)
    }
    async _detectFormats(t) {
        let e = [];
        t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]);
        for (const r of t.detections)
            t.skipDetections || await r.test() ? e = await r.add(e) : t.skipDetections || (e = await r.remove(e));
        return e = e.filter( (r, n) => e.indexOf(r) === n),
        e
    }
    get detections() {
        return this._detections
    }
    get preferWorkers() {
        return Xa.config.preferWorkers
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
const $s = new Ox;
ot.handleByList(rt.LoadParser, $s.loader.parsers).handleByList(rt.ResolveParser, $s.resolver.parsers).handleByList(rt.CacheParser, $s.cache.parsers).handleByList(rt.DetectionParser, $s.detections);
const Nx = {
    extension: rt.CacheParser,
    test: i => Array.isArray(i) && i.every(t => t instanceof ut),
    getCacheableAssets: (i, t) => {
        const e = {};
        return i.forEach(r => {
            t.forEach( (n, s) => {
                e[r + (s === 0 ? "" : s + 1)] = n
            }
            )
        }
        ),
        e
    }
};
ot.add(Nx);
async function Nf(i) {
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
const Lx = {
    extension: {
        type: rt.DetectionParser,
        priority: 1
    },
    test: async () => Nf("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),
    add: async i => [...i, "avif"],
    remove: async i => i.filter(t => t !== "avif")
};
ot.add(Lx);
const kx = {
    extension: {
        type: rt.DetectionParser,
        priority: 0
    },
    test: async () => Nf("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),
    add: async i => [...i, "webp"],
    remove: async i => i.filter(t => t !== "webp")
};
ot.add(kx);
const Cc = ["png", "jpg", "jpeg"]
  , Ux = {
    extension: {
        type: rt.DetectionParser,
        priority: -1
    },
    test: () => Promise.resolve(!0),
    add: async i => [...i, ...Cc],
    remove: async i => i.filter(t => !Cc.includes(t))
};
ot.add(Ux);
const Gx = "WorkerGlobalScope"in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
function Cl(i) {
    return Gx ? !1 : document.createElement("video").canPlayType(i) !== ""
}
const Hx = {
    extension: {
        type: rt.DetectionParser,
        priority: 0
    },
    test: async () => Cl("video/webm"),
    add: async i => [...i, "webm"],
    remove: async i => i.filter(t => t !== "webm")
};
ot.add(Hx);
const $x = {
    extension: {
        type: rt.DetectionParser,
        priority: 0
    },
    test: async () => Cl("video/mp4"),
    add: async i => [...i, "mp4", "m4v"],
    remove: async i => i.filter(t => t !== "mp4" && t !== "m4v")
};
ot.add($x);
const Vx = {
    extension: {
        type: rt.DetectionParser,
        priority: 0
    },
    test: async () => Cl("video/ogg"),
    add: async i => [...i, "ogv"],
    remove: async i => i.filter(t => t !== "ogv")
};
ot.add(Vx);
const Wx = {
    extension: rt.ResolveParser,
    test: Xa.test,
    parse: i => {
        var t;
        return {
            resolution: parseFloat(((t = st.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) ?? "1"),
            format: ge.extname(i).slice(1),
            src: i
        }
    }
};
ot.add(Wx);
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
const Ta = {
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
let Er, en;
function Ic() {
    en = {
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
const jx = {
    extension: {
        type: rt.DetectionParser,
        priority: 2
    },
    test: async () => {
        const i = st.ADAPTER.createCanvas().getContext("webgl");
        return i ? (Er = i,
        !0) : (console.warn("WebGL not available for compressed textures."),
        !1)
    }
    ,
    add: async i => {
        en || Ic();
        const t = [];
        for (const e in en)
            en[e] && t.push(e);
        return [...t, ...i]
    }
    ,
    remove: async i => (en || Ic(),
    i.filter(t => !(t in en)))
};
ot.add(jx);
class Xx extends ka {
    constructor(t, e={
        width: 1,
        height: 1,
        autoLoad: !0
    }) {
        let r, n;
        typeof t == "string" ? (r = t,
        n = new Uint8Array) : (r = null,
        n = t),
        super(n, e),
        this.origin = r,
        this.buffer = n ? new Dh(n) : null,
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
        this.buffer = new Dh(t),
        this.loaded = !0,
        this.onBlobLoaded(t),
        this.update(),
        this)),
        this._load)
    }
}
class Di extends Xx {
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
        const n = t.gl;
        if (!t.context.extensions[this._extension])
            throw new Error(`${this._extension} textures are not supported on the current machine`);
        if (!this._levelBuffers)
            return !1;
        n.pixelStorei(n.UNPACK_ALIGNMENT, 4);
        for (let s = 0, a = this.levels; s < a; s++) {
            const {levelID: o, levelWidth: l, levelHeight: c, levelBuffer: p} = this._levelBuffers[s];
            n.compressedTexImage2D(n.TEXTURE_2D, o, this.format, l, c, 0, p)
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
    static _createLevelBuffers(t, e, r, n, s, a, o) {
        const l = new Array(r);
        let c = t.byteOffset
          , p = a
          , g = o
          , f = p + n - 1 & ~(n - 1)
          , v = g + s - 1 & ~(s - 1)
          , _ = f * v * Ta[e];
        for (let T = 0; T < r; T++)
            l[T] = {
                levelID: T,
                levelWidth: r > 1 ? p : f,
                levelHeight: r > 1 ? g : v,
                levelBuffer: new Uint8Array(t.buffer,c,_)
            },
            c += _,
            p = p >> 1 || 1,
            g = g >> 1 || 1,
            f = p + n - 1 & ~(n - 1),
            v = g + s - 1 & ~(s - 1),
            _ = f * v * Ta[e];
        return l
    }
}
const rh = 4
  , Vs = 124
  , zx = 32
  , Rc = 20
  , qx = 542327876
  , Ws = {
    SIZE: 1,
    FLAGS: 2,
    HEIGHT: 3,
    WIDTH: 4,
    MIPMAP_COUNT: 7,
    PIXEL_FORMAT: 19
}
  , Yx = {
    SIZE: 0,
    FLAGS: 1,
    FOURCC: 2,
    RGB_BITCOUNT: 3,
    R_BIT_MASK: 4,
    G_BIT_MASK: 5,
    B_BIT_MASK: 6,
    A_BIT_MASK: 7
}
  , js = {
    DXGI_FORMAT: 0,
    RESOURCE_DIMENSION: 1,
    MISC_FLAG: 2,
    ARRAY_SIZE: 3,
    MISC_FLAGS2: 4
}
  , Kx = 1
  , Zx = 2
  , Qx = 4
  , Jx = 64
  , tb = 512
  , eb = 131072
  , rb = 827611204
  , ib = 861165636
  , nb = 894720068
  , sb = 808540228
  , ab = 4
  , ob = {
    [rb]: we.COMPRESSED_RGBA_S3TC_DXT1_EXT,
    [ib]: we.COMPRESSED_RGBA_S3TC_DXT3_EXT,
    [nb]: we.COMPRESSED_RGBA_S3TC_DXT5_EXT
}
  , hb = {
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
function lb(i) {
    const t = new Uint32Array(i);
    if (t[0] !== qx)
        throw new Error("Invalid DDS file magic word");
    const e = new Uint32Array(i,0,Vs / Uint32Array.BYTES_PER_ELEMENT)
      , r = e[Ws.HEIGHT]
      , n = e[Ws.WIDTH]
      , s = e[Ws.MIPMAP_COUNT]
      , a = new Uint32Array(i,Ws.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT,zx / Uint32Array.BYTES_PER_ELEMENT)
      , o = a[Kx];
    if (o & Qx) {
        const l = a[Yx.FOURCC];
        if (l !== sb) {
            const I = ob[l]
              , S = rh + Vs
              , P = new Uint8Array(i,S);
            return [new Di(P,{
                format: I,
                width: n,
                height: r,
                levels: s
            })]
        }
        const c = rh + Vs
          , p = new Uint32Array(t.buffer,c,Rc / Uint32Array.BYTES_PER_ELEMENT)
          , g = p[js.DXGI_FORMAT]
          , f = p[js.RESOURCE_DIMENSION]
          , v = p[js.MISC_FLAG]
          , _ = p[js.ARRAY_SIZE]
          , T = hb[g];
        if (T === void 0)
            throw new Error(`DDSParser cannot parse texture data with DXGI format ${g}`);
        if (v === ab)
            throw new Error("DDSParser does not support cubemap textures");
        if (f === 6)
            throw new Error("DDSParser does not supported 3D texture data");
        const A = new Array
          , E = rh + Vs + Rc;
        if (_ === 1)
            A.push(new Uint8Array(i,E));
        else {
            const I = Ta[T];
            let S = 0
              , P = n
              , k = r;
            for (let d = 0; d < s; d++) {
                const O = Math.max(1, P + 3 & -4)
                  , N = Math.max(1, k + 3 & -4)
                  , z = O * N * I;
                S += z,
                P = P >>> 1,
                k = k >>> 1
            }
            let V = E;
            for (let d = 0; d < _; d++)
                A.push(new Uint8Array(i,V,S)),
                V += S
        }
        return A.map(I => new Di(I,{
            format: T,
            width: n,
            height: r,
            levels: s
        }))
    }
    throw o & Jx ? new Error("DDSParser does not support uncompressed texture data.") : o & tb ? new Error("DDSParser does not supported YUV uncompressed texture data.") : o & eb ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : o & Zx ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!")
}
const Pc = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]
  , ub = 67305985
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
  , sl = 64
  , Mc = {
    [mt.UNSIGNED_BYTE]: 1,
    [mt.UNSIGNED_SHORT]: 2,
    [mt.INT]: 4,
    [mt.UNSIGNED_INT]: 4,
    [mt.FLOAT]: 4,
    [mt.HALF_FLOAT]: 8
}
  , cb = {
    [Z.RGBA]: 4,
    [Z.RGB]: 3,
    [Z.RG]: 2,
    [Z.RED]: 1,
    [Z.LUMINANCE]: 1,
    [Z.LUMINANCE_ALPHA]: 2,
    [Z.ALPHA]: 1
}
  , db = {
    [mt.UNSIGNED_SHORT_4_4_4_4]: 2,
    [mt.UNSIGNED_SHORT_5_5_5_1]: 2,
    [mt.UNSIGNED_SHORT_5_6_5]: 2
};
function fb(i, t, e=!1) {
    const r = new DataView(t);
    if (!pb(i, r))
        return null;
    const n = r.getUint32(ir.ENDIANNESS, !0) === ub
      , s = r.getUint32(ir.GL_TYPE, n)
      , a = r.getUint32(ir.GL_FORMAT, n)
      , o = r.getUint32(ir.GL_INTERNAL_FORMAT, n)
      , l = r.getUint32(ir.PIXEL_WIDTH, n)
      , c = r.getUint32(ir.PIXEL_HEIGHT, n) || 1
      , p = r.getUint32(ir.PIXEL_DEPTH, n) || 1
      , g = r.getUint32(ir.NUMBER_OF_ARRAY_ELEMENTS, n) || 1
      , f = r.getUint32(ir.NUMBER_OF_FACES, n)
      , v = r.getUint32(ir.NUMBER_OF_MIPMAP_LEVELS, n)
      , _ = r.getUint32(ir.BYTES_OF_KEY_VALUE_DATA, n);
    if (c === 0 || p !== 1)
        throw new Error("Only 2D textures are supported");
    if (f !== 1)
        throw new Error("CubeTextures are not supported by KTXLoader yet!");
    if (g !== 1)
        throw new Error("WebGL does not support array textures");
    const T = 4
      , A = 4
      , E = l + 3 & -4
      , I = c + 3 & -4
      , S = new Array(g);
    let P = l * c;
    s === 0 && (P = E * I);
    let k;
    if (s !== 0 ? Mc[s] ? k = Mc[s] * cb[a] : k = db[s] : k = Ta[o],
    k === void 0)
        throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
    const V = e ? mb(r, _, n) : null;
    let d = P * k
      , O = l
      , N = c
      , z = E
      , J = I
      , $ = sl + _;
    for (let B = 0; B < v; B++) {
        const W = r.getUint32($, n);
        let tt = $ + 4;
        for (let at = 0; at < g; at++) {
            let nt = S[at];
            nt || (nt = S[at] = new Array(v)),
            nt[B] = {
                levelID: B,
                levelWidth: v > 1 || s !== 0 ? O : z,
                levelHeight: v > 1 || s !== 0 ? N : J,
                levelBuffer: new Uint8Array(t,tt,d)
            },
            tt += d
        }
        $ += W + 4,
        $ = $ % 4 !== 0 ? $ + 4 - $ % 4 : $,
        O = O >> 1 || 1,
        N = N >> 1 || 1,
        z = O + T - 1 & ~(T - 1),
        J = N + A - 1 & ~(A - 1),
        d = z * J * k
    }
    return s !== 0 ? {
        uncompressed: S.map(B => {
            let W = B[0].levelBuffer
              , tt = !1;
            return s === mt.FLOAT ? W = new Float32Array(B[0].levelBuffer.buffer,B[0].levelBuffer.byteOffset,B[0].levelBuffer.byteLength / 4) : s === mt.UNSIGNED_INT ? (tt = !0,
            W = new Uint32Array(B[0].levelBuffer.buffer,B[0].levelBuffer.byteOffset,B[0].levelBuffer.byteLength / 4)) : s === mt.INT && (tt = !0,
            W = new Int32Array(B[0].levelBuffer.buffer,B[0].levelBuffer.byteOffset,B[0].levelBuffer.byteLength / 4)),
            {
                resource: new ka(W,{
                    width: B[0].levelWidth,
                    height: B[0].levelHeight
                }),
                type: s,
                format: tt ? gb(a) : a
            }
        }
        ),
        kvData: V
    } : {
        compressed: S.map(B => new Di(null,{
            format: o,
            width: l,
            height: c,
            levels: v,
            levelBuffers: B
        })),
        kvData: V
    }
}
function pb(i, t) {
    for (let e = 0; e < Pc.length; e++)
        if (t.getUint8(e) !== Pc[e])
            return console.error(`${i} is not a valid *.ktx file!`),
            !1;
    return !0
}
function gb(i) {
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
function mb(i, t, e) {
    const r = new Map;
    let n = 0;
    for (; n < t; ) {
        const s = i.getUint32(sl + n, e)
          , a = sl + n + 4
          , o = 3 - (s + 3) % 4;
        if (s === 0 || s > t - n) {
            console.error("KTXLoader: keyAndValueByteSize out of bounds");
            break
        }
        let l = 0;
        for (; l < s && i.getUint8(a + l) !== 0; l++)
            ;
        if (l === -1) {
            console.error("KTXLoader: Failed to find null byte terminating kvData key");
            break
        }
        const c = new TextDecoder().decode(new Uint8Array(i.buffer,a,l))
          , p = new DataView(i.buffer,a + l + 1,s - l - 1);
        r.set(c, p),
        n += 4 + s + o
    }
    return r
}
const yb = {
    extension: {
        type: rt.LoadParser,
        priority: dr.High
    },
    name: "loadDDS",
    test(i) {
        return fi(i, ".dds")
    },
    async load(i, t, e) {
        const r = await (await st.ADAPTER.fetch(i)).arrayBuffer()
          , n = lb(r).map(s => {
            const a = new Tt(s,{
                mipmap: Br.OFF,
                alphaMode: ke.NO_PREMULTIPLIED_ALPHA,
                resolution: Fr(i),
                ...t.data
            });
            return ds(a, e, i)
        }
        );
        return n.length === 1 ? n[0] : n
    },
    unload(i) {
        Array.isArray(i) ? i.forEach(t => t.destroy(!0)) : i.destroy(!0)
    }
};
ot.add(yb);
const vb = {
    extension: {
        type: rt.LoadParser,
        priority: dr.High
    },
    name: "loadKTX",
    test(i) {
        return fi(i, ".ktx")
    },
    async load(i, t, e) {
        const r = await (await st.ADAPTER.fetch(i)).arrayBuffer()
          , {compressed: n, uncompressed: s, kvData: a} = fb(i, r)
          , o = n ?? s
          , l = {
            mipmap: Br.OFF,
            alphaMode: ke.NO_PREMULTIPLIED_ALPHA,
            resolution: Fr(i),
            ...t.data
        }
          , c = o.map(p => {
            o === s && Object.assign(l, {
                type: p.type,
                format: p.format
            });
            const g = p.resource ?? p
              , f = new Tt(g,l);
            return f.ktxKeyValueData = a,
            ds(f, e, i)
        }
        );
        return c.length === 1 ? c[0] : c
    },
    unload(i) {
        Array.isArray(i) ? i.forEach(t => t.destroy(!0)) : i.destroy(!0)
    }
};
ot.add(vb);
const _b = ["s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"]
  , xb = {
    extension: rt.ResolveParser,
    test: i => {
        const t = ge.extname(i).slice(1);
        return ["basis", "ktx", "dds"].includes(t)
    }
    ,
    parse: i => {
        var r, n;
        const t = i.split(".")
          , e = t.pop();
        if (["ktx", "dds"].includes(e)) {
            const s = t.pop();
            if (_b.includes(s))
                return {
                    resolution: parseFloat(((r = st.RETINA_PREFIX.exec(i)) == null ? void 0 : r[1]) ?? "1"),
                    format: s,
                    src: i
                }
        }
        return {
            resolution: parseFloat(((n = st.RETINA_PREFIX.exec(i)) == null ? void 0 : n[1]) ?? "1"),
            format: e,
            src: i
        }
    }
};
ot.add(xb);
const Xs = new At
  , bb = 4
  , Lf = class zn {
    constructor(t) {
        this.renderer = t,
        this._rendererPremultipliedAlpha = !1
    }
    contextChange() {
        var e;
        const t = (e = this.renderer) == null ? void 0 : e.gl.getContextAttributes();
        this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha)
    }
    async image(t, e, r, n) {
        const s = new Image;
        return s.src = await this.base64(t, e, r, n),
        s
    }
    async base64(t, e, r, n) {
        const s = this.canvas(t, n);
        if (s.toBlob !== void 0)
            return new Promise( (a, o) => {
                s.toBlob(l => {
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
        if (s.toDataURL !== void 0)
            return s.toDataURL(e, r);
        if (s.convertToBlob !== void 0) {
            const a = await s.convertToBlob({
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
        const {pixels: r, width: n, height: s, flipY: a, premultipliedAlpha: o} = this._rawPixels(t, e);
        a && zn._flipY(r, n, s),
        o && zn._unpremultiplyAlpha(r);
        const l = new us(n,s,1)
          , c = new ImageData(new Uint8ClampedArray(r.buffer),n,s);
        return l.context.putImageData(c, 0, 0),
        l.canvas
    }
    pixels(t, e) {
        const {pixels: r, width: n, height: s, flipY: a, premultipliedAlpha: o} = this._rawPixels(t, e);
        return a && zn._flipY(r, n, s),
        o && zn._unpremultiplyAlpha(r),
        r
    }
    _rawPixels(t, e) {
        const r = this.renderer;
        if (!r)
            throw new Error("The Extract has already been destroyed");
        let n, s = !1, a = !1, o, l = !1;
        t && (t instanceof Or ? o = t : (o = r.generateTexture(t, {
            region: e,
            resolution: r.resolution,
            multisample: r.multisample
        }),
        l = !0,
        e && (Xs.width = e.width,
        Xs.height = e.height,
        e = Xs)));
        const c = r.gl;
        if (o) {
            if (n = o.baseTexture.resolution,
            e = e ?? o.frame,
            s = !1,
            a = o.baseTexture.alphaMode > 0 && o.baseTexture.format === Z.RGBA,
            !l) {
                r.renderTexture.bind(o);
                const v = o.framebuffer.glFramebuffers[r.CONTEXT_UID];
                v.blitFramebuffer && r.framebuffer.bind(v.blitFramebuffer)
            }
        } else
            n = r.resolution,
            e || (e = Xs,
            e.width = r.width / n,
            e.height = r.height / n),
            s = !0,
            a = this._rendererPremultipliedAlpha,
            r.renderTexture.bind();
        const p = Math.max(Math.round(e.width * n), 1)
          , g = Math.max(Math.round(e.height * n), 1)
          , f = new Uint8Array(bb * p * g);
        return c.readPixels(Math.round(e.x * n), Math.round(e.y * n), p, g, c.RGBA, c.UNSIGNED_BYTE, f),
        l && (o == null || o.destroy(!0)),
        {
            pixels: f,
            width: p,
            height: g,
            flipY: s,
            premultipliedAlpha: a
        }
    }
    destroy() {
        this.renderer = null
    }
    static _flipY(t, e, r) {
        const n = e << 2
          , s = r >> 1
          , a = new Uint8Array(n);
        for (let o = 0; o < s; o++) {
            const l = o * n
              , c = (r - o - 1) * n;
            a.set(t.subarray(l, l + n)),
            t.copyWithin(l, c, c + n),
            t.set(a, c)
        }
    }
    static _unpremultiplyAlpha(t) {
        t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
        const e = t.length;
        for (let r = 0; r < e; r += 4) {
            const n = t[r + 3];
            if (n !== 0) {
                const s = 255.001 / n;
                t[r] = t[r] * s + .5,
                t[r + 1] = t[r + 1] * s + .5,
                t[r + 2] = t[r + 2] * s + .5
            }
        }
    }
}
;
Lf.extension = {
    name: "extract",
    type: rt.RendererSystem
};
let Tb = Lf;
ot.add(Tb);
const wa = {
    build(i) {
        const t = i.points;
        let e, r, n, s, a, o;
        if (i.type === Zt.CIRC) {
            const _ = i.shape;
            e = _.x,
            r = _.y,
            a = o = _.radius,
            n = s = 0
        } else if (i.type === Zt.ELIP) {
            const _ = i.shape;
            e = _.x,
            r = _.y,
            a = _.width,
            o = _.height,
            n = s = 0
        } else {
            const _ = i.shape
              , T = _.width / 2
              , A = _.height / 2;
            e = _.x + T,
            r = _.y + A,
            a = o = Math.max(0, Math.min(_.radius, Math.min(T, A))),
            n = T - a,
            s = A - o
        }
        if (!(a >= 0 && o >= 0 && n >= 0 && s >= 0)) {
            t.length = 0;
            return
        }
        const l = Math.ceil(2.3 * Math.sqrt(a + o))
          , c = l * 8 + (n ? 4 : 0) + (s ? 4 : 0);
        if (t.length = c,
        c === 0)
            return;
        if (l === 0) {
            t.length = 8,
            t[0] = t[6] = e + n,
            t[1] = t[3] = r + s,
            t[2] = t[4] = e - n,
            t[5] = t[7] = r - s;
            return
        }
        let p = 0
          , g = l * 4 + (n ? 2 : 0) + 2
          , f = g
          , v = c;
        {
            const _ = n + a
              , T = s
              , A = e + _
              , E = e - _
              , I = r + T;
            if (t[p++] = A,
            t[p++] = I,
            t[--g] = I,
            t[--g] = E,
            s) {
                const S = r - T;
                t[f++] = E,
                t[f++] = S,
                t[--v] = S,
                t[--v] = A
            }
        }
        for (let _ = 1; _ < l; _++) {
            const T = Math.PI / 2 * (_ / l)
              , A = n + Math.cos(T) * a
              , E = s + Math.sin(T) * o
              , I = e + A
              , S = e - A
              , P = r + E
              , k = r - E;
            t[p++] = I,
            t[p++] = P,
            t[--g] = P,
            t[--g] = S,
            t[f++] = S,
            t[f++] = k,
            t[--v] = k,
            t[--v] = I
        }
        {
            const _ = n
              , T = s + o
              , A = e + _
              , E = e - _
              , I = r + T
              , S = r - T;
            t[p++] = A,
            t[p++] = I,
            t[--v] = S,
            t[--v] = A,
            n && (t[p++] = E,
            t[p++] = I,
            t[--v] = S,
            t[--v] = E)
        }
    },
    triangulate(i, t) {
        const e = i.points
          , r = t.points
          , n = t.indices;
        if (e.length === 0)
            return;
        let s = r.length / 2;
        const a = s;
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
        s++,
        r.push(e[0], e[1]);
        for (let p = 2; p < e.length; p += 2)
            r.push(e[p], e[p + 1]),
            n.push(s++, a, s);
        n.push(a + 1, a, s)
    }
};
function Dc(i, t=!1) {
    const e = i.length;
    if (e < 6)
        return;
    let r = 0;
    for (let n = 0, s = i[e - 2], a = i[e - 1]; n < e; n += 2) {
        const o = i[n]
          , l = i[n + 1];
        r += (o - s) * (l + a),
        s = o,
        a = l
    }
    if (!t && r > 0 || t && r <= 0) {
        const n = e / 2;
        for (let s = n + n % 2; s < e; s += 2) {
            const a = e - s - 2
              , o = e - s - 1
              , l = s
              , c = s + 1;
            [i[a],i[l]] = [i[l], i[a]],
            [i[o],i[c]] = [i[c], i[o]]
        }
    }
}
const kf = {
    build(i) {
        i.points = i.shape.points.slice()
    },
    triangulate(i, t) {
        let e = i.points;
        const r = i.holes
          , n = t.points
          , s = t.indices;
        if (e.length >= 6) {
            Dc(e, !1);
            const a = [];
            for (let c = 0; c < r.length; c++) {
                const p = r[c];
                Dc(p.points, !0),
                a.push(e.length / 2),
                e = e.concat(p.points)
            }
            const o = Kc(e, a, 2);
            if (!o)
                return;
            const l = n.length / 2;
            for (let c = 0; c < o.length; c += 3)
                s.push(o[c] + l),
                s.push(o[c + 1] + l),
                s.push(o[c + 2] + l);
            for (let c = 0; c < e.length; c++)
                n.push(e[c])
        }
    }
}
  , wb = {
    build(i) {
        const t = i.shape
          , e = t.x
          , r = t.y
          , n = t.width
          , s = t.height
          , a = i.points;
        a.length = 0,
        n >= 0 && s >= 0 && a.push(e, r, e + n, r, e + n, r + s, e, r + s)
    },
    triangulate(i, t) {
        const e = i.points
          , r = t.points;
        if (e.length === 0)
            return;
        const n = r.length / 2;
        r.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]),
        t.indices.push(n, n + 1, n + 2, n + 1, n + 2, n + 3)
    }
}
  , Eb = {
    build(i) {
        wa.build(i)
    },
    triangulate(i, t) {
        wa.triangulate(i, t)
    }
};
var qe = (i => (i.MITER = "miter",
i.BEVEL = "bevel",
i.ROUND = "round",
i))(qe || {})
  , oi = (i => (i.BUTT = "butt",
i.ROUND = "round",
i.SQUARE = "square",
i))(oi || {});
const vn = {
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
class Bc {
    static curveTo(t, e, r, n, s, a) {
        const o = a[a.length - 2]
          , l = a[a.length - 1] - e
          , c = o - t
          , p = n - e
          , g = r - t
          , f = Math.abs(l * g - c * p);
        if (f < 1e-8 || s === 0)
            return (a[a.length - 2] !== t || a[a.length - 1] !== e) && a.push(t, e),
            null;
        const v = l * l + c * c
          , _ = p * p + g * g
          , T = l * p + c * g
          , A = s * Math.sqrt(v) / f
          , E = s * Math.sqrt(_) / f
          , I = A * T / v
          , S = E * T / _
          , P = A * g + E * c
          , k = A * p + E * l
          , V = c * (E + I)
          , d = l * (E + I)
          , O = g * (A + S)
          , N = p * (A + S)
          , z = Math.atan2(d - k, V - P)
          , J = Math.atan2(N - k, O - P);
        return {
            cx: P + t,
            cy: k + e,
            radius: s,
            startAngle: z,
            endAngle: J,
            anticlockwise: c * p > g * l
        }
    }
    static arc(t, e, r, n, s, a, o, l, c) {
        const p = o - a
          , g = vn._segmentsCount(Math.abs(p) * s, Math.ceil(Math.abs(p) / pa) * 40)
          , f = p / (g * 2)
          , v = f * 2
          , _ = Math.cos(f)
          , T = Math.sin(f)
          , A = g - 1
          , E = A % 1 / A;
        for (let I = 0; I <= A; ++I) {
            const S = I + E * I
              , P = f + a + v * S
              , k = Math.cos(P)
              , V = -Math.sin(P);
            c.push((_ * k + T * V) * s + r, (_ * -V + T * k) * s + n)
        }
    }
}
class Ab {
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
class Il {
    static curveLength(t, e, r, n, s, a, o, l) {
        let c = 0
          , p = 0
          , g = 0
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
        for (let V = 1; V <= 10; ++V)
            p = V / 10,
            g = p * p,
            f = g * p,
            v = 1 - p,
            _ = v * v,
            T = _ * v,
            A = T * t + 3 * _ * p * r + 3 * v * g * s + f * o,
            E = T * e + 3 * _ * p * n + 3 * v * g * a + f * l,
            I = P - A,
            S = k - E,
            P = A,
            k = E,
            c += Math.sqrt(I * I + S * S);
        return c
    }
    static curveTo(t, e, r, n, s, a, o) {
        const l = o[o.length - 2]
          , c = o[o.length - 1];
        o.length -= 2;
        const p = vn._segmentsCount(Il.curveLength(l, c, t, e, r, n, s, a));
        let g = 0
          , f = 0
          , v = 0
          , _ = 0
          , T = 0;
        o.push(l, c);
        for (let A = 1, E = 0; A <= p; ++A)
            E = A / p,
            g = 1 - E,
            f = g * g,
            v = f * g,
            _ = E * E,
            T = _ * E,
            o.push(v * l + 3 * f * E * t + 3 * g * _ * r + T * s, v * c + 3 * f * E * e + 3 * g * _ * n + T * a)
    }
}
function Fc(i, t, e, r, n, s, a, o) {
    const l = i - e * n
      , c = t - r * n
      , p = i + e * s
      , g = t + r * s;
    let f, v;
    a ? (f = r,
    v = -e) : (f = -r,
    v = e);
    const _ = l + f
      , T = c + v
      , A = p + f
      , E = g + v;
    return o.push(_, T, A, E),
    2
}
function xi(i, t, e, r, n, s, a, o) {
    const l = e - i
      , c = r - t;
    let p = Math.atan2(l, c)
      , g = Math.atan2(n - i, s - t);
    o && p < g ? p += Math.PI * 2 : !o && p > g && (g += Math.PI * 2);
    let f = p;
    const v = g - p
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
        a.push(i, t, n, s)
    } else {
        a.push(e, r, i, t);
        for (let I = 1, S = f; I < A; I++,
        S += E)
            a.push(i + Math.sin(S) * T, t + Math.cos(S) * T, i, t);
        a.push(n, s, i, t)
    }
    return A * 2
}
function Sb(i, t) {
    const e = i.shape;
    let r = i.points || e.points.slice();
    const n = t.closePointEps;
    if (r.length === 0)
        return;
    const s = i.lineStyle
      , a = new Bt(r[0],r[1])
      , o = new Bt(r[r.length - 2],r[r.length - 1])
      , l = e.type !== Zt.POLY || e.closeStroke
      , c = Math.abs(a.x - o.x) < n && Math.abs(a.y - o.y) < n;
    if (l) {
        r = r.slice(),
        c && (r.pop(),
        r.pop(),
        o.set(r[r.length - 2], r[r.length - 1]));
        const nt = (a.x + o.x) * .5
          , dt = (o.y + a.y) * .5;
        r.unshift(nt, dt),
        r.push(nt, dt)
    }
    const p = t.points
      , g = r.length / 2;
    let f = r.length;
    const v = p.length / 2
      , _ = s.width / 2
      , T = _ * _
      , A = s.miterLimit * s.miterLimit;
    let E = r[0]
      , I = r[1]
      , S = r[2]
      , P = r[3]
      , k = 0
      , V = 0
      , d = -(I - P)
      , O = E - S
      , N = 0
      , z = 0
      , J = Math.sqrt(d * d + O * O);
    d /= J,
    O /= J,
    d *= _,
    O *= _;
    const $ = s.alignment
      , B = (1 - $) * 2
      , W = $ * 2;
    l || (s.cap === oi.ROUND ? f += xi(E - d * (B - W) * .5, I - O * (B - W) * .5, E - d * B, I - O * B, E + d * W, I + O * W, p, !0) + 2 : s.cap === oi.SQUARE && (f += Fc(E, I, d, O, B, W, !0, p))),
    p.push(E - d * B, I - O * B, E + d * W, I + O * W);
    for (let nt = 1; nt < g - 1; ++nt) {
        E = r[(nt - 1) * 2],
        I = r[(nt - 1) * 2 + 1],
        S = r[nt * 2],
        P = r[nt * 2 + 1],
        k = r[(nt + 1) * 2],
        V = r[(nt + 1) * 2 + 1],
        d = -(I - P),
        O = E - S,
        J = Math.sqrt(d * d + O * O),
        d /= J,
        O /= J,
        d *= _,
        O *= _,
        N = -(P - V),
        z = S - k,
        J = Math.sqrt(N * N + z * z),
        N /= J,
        z /= J,
        N *= _,
        z *= _;
        const dt = S - E
          , Ft = I - P
          , Q = S - k
          , K = V - P
          , xt = dt * Q + Ft * K
          , Ct = Ft * Q - K * dt
          , It = Ct < 0;
        if (Math.abs(Ct) < .001 * Math.abs(xt)) {
            p.push(S - d * B, P - O * B, S + d * W, P + O * W),
            xt >= 0 && (s.join === qe.ROUND ? f += xi(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, !1) + 4 : f += 2,
            p.push(S - N * W, P - z * W, S + N * B, P + z * B));
            continue
        }
        const kt = (-d + E) * (-O + P) - (-d + S) * (-O + I)
          , Ot = (-N + k) * (-z + P) - (-N + S) * (-z + V)
          , Mt = (dt * Ot - Q * kt) / Ct
          , Vt = (K * kt - Ft * Ot) / Ct
          , Yt = (Mt - S) * (Mt - S) + (Vt - P) * (Vt - P)
          , Dt = S + (Mt - S) * B
          , qt = P + (Vt - P) * B
          , _t = S - (Mt - S) * W
          , Kt = P - (Vt - P) * W
          , Xt = Math.min(dt * dt + Ft * Ft, Q * Q + K * K)
          , me = It ? B : W
          , Ee = Xt + me * me * T
          , fr = Yt <= Ee;
        let oe = s.join;
        if (oe === qe.MITER && Yt / T > A && (oe = qe.BEVEL),
        fr)
            switch (oe) {
            case qe.MITER:
                {
                    p.push(Dt, qt, _t, Kt);
                    break
                }
            case qe.BEVEL:
                {
                    It ? p.push(Dt, qt, S + d * W, P + O * W, Dt, qt, S + N * W, P + z * W) : p.push(S - d * B, P - O * B, _t, Kt, S - N * B, P - z * B, _t, Kt),
                    f += 2;
                    break
                }
            case qe.ROUND:
                {
                    It ? (p.push(Dt, qt, S + d * W, P + O * W),
                    f += xi(S, P, S + d * W, P + O * W, S + N * W, P + z * W, p, !0) + 4,
                    p.push(Dt, qt, S + N * W, P + z * W)) : (p.push(S - d * B, P - O * B, _t, Kt),
                    f += xi(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, !1) + 4,
                    p.push(S - N * B, P - z * B, _t, Kt));
                    break
                }
            }
        else {
            switch (p.push(S - d * B, P - O * B, S + d * W, P + O * W),
            oe) {
            case qe.MITER:
                {
                    It ? p.push(_t, Kt, _t, Kt) : p.push(Dt, qt, Dt, qt),
                    f += 2;
                    break
                }
            case qe.ROUND:
                {
                    It ? f += xi(S, P, S + d * W, P + O * W, S + N * W, P + z * W, p, !0) + 2 : f += xi(S, P, S - d * B, P - O * B, S - N * B, P - z * B, p, !1) + 2;
                    break
                }
            }
            p.push(S - N * B, P - z * B, S + N * W, P + z * W),
            f += 2
        }
    }
    E = r[(g - 2) * 2],
    I = r[(g - 2) * 2 + 1],
    S = r[(g - 1) * 2],
    P = r[(g - 1) * 2 + 1],
    d = -(I - P),
    O = E - S,
    J = Math.sqrt(d * d + O * O),
    d /= J,
    O /= J,
    d *= _,
    O *= _,
    p.push(S - d * B, P - O * B, S + d * W, P + O * W),
    l || (s.cap === oi.ROUND ? f += xi(S - d * (B - W) * .5, P - O * (B - W) * .5, S - d * B, P - O * B, S + d * W, P + O * W, p, !1) + 2 : s.cap === oi.SQUARE && (f += Fc(S, P, d, O, B, W, !1, p)));
    const tt = t.indices
      , at = vn.epsilon * vn.epsilon;
    for (let nt = v; nt < f + v - 2; ++nt)
        E = p[nt * 2],
        I = p[nt * 2 + 1],
        S = p[(nt + 1) * 2],
        P = p[(nt + 1) * 2 + 1],
        k = p[(nt + 2) * 2],
        V = p[(nt + 2) * 2 + 1],
        !(Math.abs(E * (P - V) + S * (V - I) + k * (I - P)) < at) && tt.push(nt, nt + 1, nt + 2)
}
function Cb(i, t) {
    let e = 0;
    const r = i.shape
      , n = i.points || r.points
      , s = r.type !== Zt.POLY || r.closeStroke;
    if (n.length === 0)
        return;
    const a = t.points
      , o = t.indices
      , l = n.length / 2
      , c = a.length / 2;
    let p = c;
    for (a.push(n[0], n[1]),
    e = 1; e < l; e++)
        a.push(n[e * 2], n[e * 2 + 1]),
        o.push(p, p + 1),
        p++;
    s && o.push(p, c)
}
function Oc(i, t) {
    i.lineStyle.native ? Cb(i, t) : Sb(i, t)
}
class Rl {
    static curveLength(t, e, r, n, s, a) {
        const o = t - 2 * r + s
          , l = e - 2 * n + a
          , c = 2 * r - 2 * t
          , p = 2 * n - 2 * e
          , g = 4 * (o * o + l * l)
          , f = 4 * (o * c + l * p)
          , v = c * c + p * p
          , _ = 2 * Math.sqrt(g + f + v)
          , T = Math.sqrt(g)
          , A = 2 * g * T
          , E = 2 * Math.sqrt(v)
          , I = f / T;
        return (A * _ + T * f * (_ - E) + (4 * v * g - f * f) * Math.log((2 * T + I + _) / (I + E))) / (4 * A)
    }
    static curveTo(t, e, r, n, s) {
        const a = s[s.length - 2]
          , o = s[s.length - 1]
          , l = vn._segmentsCount(Rl.curveLength(a, o, t, e, r, n));
        let c = 0
          , p = 0;
        for (let g = 1; g <= l; ++g) {
            const f = g / l;
            c = a + (t - a) * f,
            p = o + (e - o) * f,
            s.push(c + (t + (r - t) * f - c) * f, p + (e + (n - e) * f - p) * f)
        }
    }
}
const ih = {
    [Zt.POLY]: kf,
    [Zt.CIRC]: wa,
    [Zt.ELIP]: wa,
    [Zt.RECT]: wb,
    [Zt.RREC]: Eb
}
  , Nc = []
  , zs = [];
class Ea {
    constructor(t, e=null, r=null, n=null) {
        this.points = [],
        this.holes = [],
        this.shape = t,
        this.lineStyle = r,
        this.fillStyle = e,
        this.matrix = n,
        this.type = t.type
    }
    clone() {
        return new Ea(this.shape,this.fillStyle,this.lineStyle,this.matrix)
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
  , Uf = class Gf extends Nd {
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
        this._bounds = new _a,
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
            zs.push(this.drawCalls[t]);
        this.drawCalls.length = 0;
        for (let t = 0; t < this.batches.length; t++) {
            const e = this.batches[t];
            e.reset(),
            Nc.push(e)
        }
        this.batches.length = 0
    }
    clear() {
        return this.graphicsData.length > 0 && (this.invalidate(),
        this.clearDirty++,
        this.graphicsData.length = 0),
        this
    }
    drawShape(t, e=null, r=null, n=null) {
        const s = new Ea(t,e,r,n);
        return this.graphicsData.push(s),
        this.dirty++,
        this
    }
    drawHole(t, e=null) {
        if (!this.graphicsData.length)
            return null;
        const r = new Ea(t,null,null,e)
          , n = this.graphicsData[this.graphicsData.length - 1];
        return r.lineStyle = n.lineStyle,
        n.holes.push(r),
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
            const n = e[r];
            if (n.fillStyle.visible && n.shape && (n.matrix ? n.matrix.applyInverse(t, Yi) : Yi.copyFrom(t),
            n.shape.contains(Yi.x, Yi.y))) {
                let s = !1;
                if (n.holes) {
                    for (let a = 0; a < n.holes.length; a++)
                        if (n.holes[a].shape.contains(Yi.x, Yi.y)) {
                            s = !0;
                            break
                        }
                }
                if (!s)
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
          , n = null;
        this.batches.length > 0 && (r = this.batches[this.batches.length - 1],
        n = r.style);
        for (let l = this.shapeIndex; l < e.length; l++) {
            this.shapeIndex++;
            const c = e[l]
              , p = c.fillStyle
              , g = c.lineStyle;
            ih[c.type].build(c),
            c.matrix && this.transformPoints(c.points, c.matrix),
            (p.visible || g.visible) && this.processHoles(c.holes);
            for (let f = 0; f < 2; f++) {
                const v = f === 0 ? p : g;
                if (!v.visible)
                    continue;
                const _ = v.texture.baseTexture
                  , T = this.indices.length
                  , A = this.points.length / 2;
                _.wrapMode = Yr.REPEAT,
                f === 0 ? this.processFill(c) : this.processLine(c);
                const E = this.points.length / 2 - A;
                E !== 0 && (r && !this._compareStyles(n, v) && (r.end(T, A),
                r = null),
                r || (r = Nc.pop() || new Ab,
                r.begin(v, T, A),
                this.batches.push(r),
                n = v),
                this.addUvs(this.points, t, v.texture, A, E, v.matrix))
            }
        }
        const s = this.indices.length
          , a = this.points.length / 2;
        if (r && r.end(s, a),
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
              , n = r.fillStyle
              , s = r.lineStyle;
            if (n && !n.texture.baseTexture.valid || s && !s.texture.baseTexture.valid)
                return !1
        }
        return !0
    }
    packBatches() {
        this.batchDirty++,
        this.uvsFloat32 = new Float32Array(this.uvs);
        const t = this.batches;
        for (let e = 0, r = t.length; e < r; e++) {
            const n = t[e];
            for (let s = 0; s < n.size; s++) {
                const a = n.start + s;
                this.indicesUint16[a] = this.indicesUint16[a] - n.attribStart
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
        return this.points.length < Gf.BATCHABLE_SIZE * 2
    }
    buildDrawCalls() {
        let t = ++Tt._globalBatch;
        for (let g = 0; g < this.drawCalls.length; g++)
            this.drawCalls[g].texArray.clear(),
            zs.push(this.drawCalls[g]);
        this.drawCalls.length = 0;
        const e = this.colors
          , r = this.textureIds;
        let n = zs.pop();
        n || (n = new Oh,
        n.texArray = new Uh),
        n.texArray.count = 0,
        n.start = 0,
        n.size = 0,
        n.type = or.TRIANGLES;
        let s = 0
          , a = null
          , o = 0
          , l = !1
          , c = or.TRIANGLES
          , p = 0;
        this.drawCalls.push(n);
        for (let g = 0; g < this.batches.length; g++) {
            const f = this.batches[g]
              , v = 8
              , _ = f.style
              , T = _.texture.baseTexture;
            l !== !!_.native && (l = !!_.native,
            c = l ? or.LINES : or.TRIANGLES,
            a = null,
            s = v,
            t++),
            a !== T && (a = T,
            T._batchEnabled !== t && (s === v && (t++,
            s = 0,
            n.size > 0 && (n = zs.pop(),
            n || (n = new Oh,
            n.texArray = new Uh),
            this.drawCalls.push(n)),
            n.start = p,
            n.size = 0,
            n.texArray.count = 0,
            n.type = c),
            T.touched = 1,
            T._batchEnabled = t,
            T._batchLocation = s,
            T.wrapMode = Yr.REPEAT,
            n.texArray.elements[n.texArray.count++] = T,
            s++)),
            n.size += f.size,
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
          , n = this.textureIds
          , s = new ArrayBuffer(t.length * 3 * 4)
          , a = new Float32Array(s)
          , o = new Uint32Array(s);
        let l = 0;
        for (let c = 0; c < t.length / 2; c++)
            a[l++] = t[c * 2],
            a[l++] = t[c * 2 + 1],
            a[l++] = e[c * 2],
            a[l++] = e[c * 2 + 1],
            o[l++] = r[c],
            a[l++] = n[c];
        this._buffer.update(s),
        this._indexBuffer.update(this.indicesUint16)
    }
    processFill(t) {
        t.holes.length ? kf.triangulate(t, this) : ih[t.type].triangulate(t, this)
    }
    processLine(t) {
        Oc(t, this);
        for (let e = 0; e < t.holes.length; e++)
            Oc(t.holes[e], this)
    }
    processHoles(t) {
        for (let e = 0; e < t.length; e++) {
            const r = t[e];
            ih[r.type].build(r),
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
            const n = t[r * 2]
              , s = t[r * 2 + 1];
            t[r * 2] = e.a * n + e.c * s + e.tx,
            t[r * 2 + 1] = e.b * n + e.d * s + e.ty
        }
    }
    addColors(t, e, r, n, s=0) {
        const a = Pt.shared.setValue(e).toLittleEndianNumber()
          , o = Pt.shared.setValue(a).toPremultiplied(r);
        t.length = Math.max(t.length, s + n);
        for (let l = 0; l < n; l++)
            t[s + l] = o
    }
    addTextureIds(t, e, r, n=0) {
        t.length = Math.max(t.length, n + r);
        for (let s = 0; s < r; s++)
            t[n + s] = e
    }
    addUvs(t, e, r, n, s, a=null) {
        let o = 0;
        const l = e.length
          , c = r.frame;
        for (; o < s; ) {
            let g = t[(n + o) * 2]
              , f = t[(n + o) * 2 + 1];
            if (a) {
                const v = a.a * g + a.c * f + a.tx;
                f = a.b * g + a.d * f + a.ty,
                g = v
            }
            o++,
            e.push(g / c.width, f / c.height)
        }
        const p = r.baseTexture;
        (c.width < p.width || c.height < p.height) && this.adjustUvs(e, r, l, s)
    }
    adjustUvs(t, e, r, n) {
        const s = e.baseTexture
          , a = 1e-6
          , o = r + n * 2
          , l = e.frame
          , c = l.width / s.width
          , p = l.height / s.height;
        let g = l.x / l.width
          , f = l.y / l.height
          , v = Math.floor(t[r] + a)
          , _ = Math.floor(t[r + 1] + a);
        for (let T = r + 2; T < o; T += 2)
            v = Math.min(v, Math.floor(t[T] + a)),
            _ = Math.min(_, Math.floor(t[T + 1] + a));
        g -= v,
        f -= _;
        for (let T = r; T < o; T += 2)
            t[T] = (t[T] + g) * c,
            t[T + 1] = (t[T + 1] + f) * p
    }
}
;
Uf.BATCHABLE_SIZE = 100;
let Ib = Uf;
class za {
    constructor() {
        this.color = 16777215,
        this.alpha = 1,
        this.texture = ut.WHITE,
        this.matrix = null,
        this.visible = !1,
        this.reset()
    }
    clone() {
        const t = new za;
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
class Pl extends za {
    constructor() {
        super(...arguments),
        this.width = 0,
        this.alignment = .5,
        this.native = !1,
        this.cap = oi.BUTT,
        this.join = qe.MITER,
        this.miterLimit = 10
    }
    clone() {
        const t = new Pl;
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
        this.join = qe.MITER,
        this.miterLimit = 10
    }
}
const nh = {}
  , al = class sa extends Ue {
    constructor(t=null) {
        super(),
        this.shader = null,
        this.pluginName = "batch",
        this.currentPath = null,
        this.batches = [],
        this.batchTint = -1,
        this.batchDirty = -1,
        this.vertexData = null,
        this._fillStyle = new za,
        this._lineStyle = new Pl,
        this._matrix = null,
        this._holeMode = !1,
        this.state = Nr.for2d(),
        this._geometry = t || new Ib,
        this._geometry.refCount++,
        this._transformID = -1,
        this._tintColor = new Pt(16777215),
        this.blendMode = q.NORMAL
    }
    get geometry() {
        return this._geometry
    }
    clone() {
        return this.finishPoly(),
        new sa(this._geometry)
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
    lineStyle(t=null, e=0, r, n=.5, s=!1) {
        return typeof t == "number" && (t = {
            width: t,
            color: e,
            alpha: r,
            alignment: n,
            native: s
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
            join: qe.MITER,
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
          , n = r[r.length - 2]
          , s = r[r.length - 1];
        return (n !== t || s !== e) && r.push(t, e),
        this
    }
    _initCurve(t=0, e=0) {
        this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
    }
    quadraticCurveTo(t, e, r, n) {
        this._initCurve();
        const s = this.currentPath.points;
        return s.length === 0 && this.moveTo(0, 0),
        Rl.curveTo(t, e, r, n, s),
        this
    }
    bezierCurveTo(t, e, r, n, s, a) {
        return this._initCurve(),
        Il.curveTo(t, e, r, n, s, a, this.currentPath.points),
        this
    }
    arcTo(t, e, r, n, s) {
        this._initCurve(t, e);
        const a = this.currentPath.points
          , o = Bc.curveTo(t, e, r, n, s, a);
        if (o) {
            const {cx: l, cy: c, radius: p, startAngle: g, endAngle: f, anticlockwise: v} = o;
            this.arc(l, c, p, g, f, v)
        }
        return this
    }
    arc(t, e, r, n, s, a=!1) {
        if (n === s)
            return this;
        if (!a && s <= n ? s += pa : a && n <= s && (n += pa),
        s - n === 0)
            return this;
        const o = t + Math.cos(n) * r
          , l = e + Math.sin(n) * r
          , c = this._geometry.closePointEps;
        let p = this.currentPath ? this.currentPath.points : null;
        if (p) {
            const g = Math.abs(p[p.length - 2] - o)
              , f = Math.abs(p[p.length - 1] - l);
            g < c && f < c || p.push(o, l)
        } else
            this.moveTo(o, l),
            p = this.currentPath.points;
        return Bc.arc(o, l, t, e, r, n, s, a, p),
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
    drawRect(t, e, r, n) {
        return this.drawShape(new At(t,e,r,n))
    }
    drawRoundedRect(t, e, r, n, s) {
        return this.drawShape(new Ha(t,e,r,n,s))
    }
    drawCircle(t, e, r) {
        return this.drawShape(new Ua(t,e,r))
    }
    drawEllipse(t, e, r, n) {
        return this.drawShape(new Ga(t,e,r,n))
    }
    drawPolygon(...t) {
        let e, r = !0;
        const n = t[0];
        n.points ? (r = n.closeStroke,
        e = n.points) : Array.isArray(t[0]) ? e = t[0] : e = t;
        const s = new Mi(e);
        return s.closeStroke = r,
        this.drawShape(s),
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
        for (let n = 0; n < r; n++) {
            const s = t.batches[n]
              , a = s.style.color
              , o = new Float32Array(this.vertexData.buffer,s.attribStart * 4 * 2,s.attribSize * 2)
              , l = new Float32Array(t.uvsFloat32.buffer,s.attribStart * 4 * 2,s.attribSize * 2)
              , c = new Uint16Array(t.indicesUint16.buffer,s.start * 2,s.size)
              , p = {
                vertexData: o,
                blendMode: e,
                indices: c,
                uvs: l,
                _batchRGB: Pt.shared.setValue(a).toRgbArray(),
                _tintRGB: a,
                _texture: s.style.texture,
                alpha: s.style.alpha,
                worldAlpha: 1
            };
            this.batches[n] = p
        }
    }
    _renderBatched(t) {
        if (this.batches.length) {
            t.batch.setObjectRenderer(t.plugins[this.pluginName]),
            this.calculateVertices(),
            this.calculateTints();
            for (let e = 0, r = this.batches.length; e < r; e++) {
                const n = this.batches[e];
                n.worldAlpha = this.worldAlpha * n.alpha,
                t.plugins[this.pluginName].render(n)
            }
        }
    }
    _renderDirect(t) {
        const e = this._resolveDirectShader(t)
          , r = this._geometry
          , n = this.worldAlpha
          , s = e.uniforms
          , a = r.drawCalls;
        s.translationMatrix = this.transform.worldTransform,
        Pt.shared.setValue(this._tintColor).premultiply(n).toArray(s.tint),
        t.shader.bind(e),
        t.geometry.bind(r, e),
        t.state.set(this.state);
        for (let o = 0, l = a.length; o < l; o++)
            this._renderDrawCallDirect(t, r.drawCalls[o])
    }
    _renderDrawCallDirect(t, e) {
        const {texArray: r, type: n, size: s, start: a} = e
          , o = r.count;
        for (let l = 0; l < o; l++)
            t.texture.bind(r.elements[l], l);
        t.geometry.draw(n, s, a)
    }
    _resolveDirectShader(t) {
        let e = this.shader;
        const r = this.pluginName;
        if (!e) {
            if (!nh[r]) {
                const {maxTextures: n} = t.plugins[r]
                  , s = new Int32Array(n);
                for (let l = 0; l < n; l++)
                    s[l] = l;
                const a = {
                    tint: new Float32Array([1, 1, 1, 1]),
                    translationMatrix: new jt,
                    default: cr.from({
                        uSamplers: s
                    }, !0)
                }
                  , o = t.plugins[r]._shader.program;
                nh[r] = new Dr(o,a)
            }
            e = nh[r]
        }
        return e
    }
    _calculateBounds() {
        this.finishPoly();
        const t = this._geometry;
        if (!t.graphicsData.length)
            return;
        const {minX: e, minY: r, maxX: n, maxY: s} = t.bounds;
        this._bounds.addFrame(this.transform, e, r, n, s)
    }
    containsPoint(t) {
        return this.worldTransform.applyInverse(t, sa._TEMP_POINT),
        this._geometry.containsPoint(sa._TEMP_POINT)
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
          , n = e.b
          , s = e.c
          , a = e.d
          , o = e.tx
          , l = e.ty
          , c = this._geometry.points
          , p = this.vertexData;
        let g = 0;
        for (let f = 0; f < c.length; f += 2) {
            const v = c[f]
              , _ = c[f + 1];
            p[g++] = r * v + s * _ + o,
            p[g++] = a * _ + n * v + l
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
al.curves = vn,
al._TEMP_POINT = new Bt;
let fs = al;
class Rb {
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
const sh = new Bt
  , Lc = new Mi
  , Hf = class $f extends Ue {
    constructor(t, e, r, n=or.TRIANGLES) {
        super(),
        this.geometry = t,
        this.shader = e,
        this.state = r || Nr.for2d(),
        this.drawMode = n,
        this.start = 0,
        this.size = 0,
        this.uvs = null,
        this.indices = null,
        this.vertexData = new Float32Array(1),
        this.vertexDirty = -1,
        this._transformID = -1,
        this._roundPixels = st.ROUND_PIXELS,
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
        this.shader.batchable && this.drawMode === or.TRIANGLES && e.length < $f.BATCHABLE_SIZE * 2 ? this._renderToBatch(t) : this._renderDefault(t)
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
        const n = this.material.pluginName;
        t.batch.setObjectRenderer(t.plugins[n]),
        t.plugins[n].render(this)
    }
    calculateVertices() {
        const t = this.geometry.buffers[0]
          , e = t.data
          , r = t._updateID;
        if (r === this.vertexDirty && this._transformID === this.transform._worldID)
            return;
        this._transformID = this.transform._worldID,
        this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
        const n = this.transform.worldTransform
          , s = n.a
          , a = n.b
          , o = n.c
          , l = n.d
          , c = n.tx
          , p = n.ty
          , g = this.vertexData;
        for (let f = 0; f < g.length / 2; f++) {
            const v = e[f * 2]
              , _ = e[f * 2 + 1];
            g[f * 2] = s * v + o * _ + c,
            g[f * 2 + 1] = a * v + l * _ + p
        }
        if (this._roundPixels) {
            const f = st.RESOLUTION;
            for (let v = 0; v < g.length; ++v)
                g[v] = Math.round(g[v] * f) / f
        }
        this.vertexDirty = r
    }
    calculateUvs() {
        const t = this.geometry.buffers[1]
          , e = this.shader;
        e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Rb(t,e.uvMatrix)),
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
        this.worldTransform.applyInverse(t, sh);
        const e = this.geometry.getBuffer("aVertexPosition").data
          , r = Lc.points
          , n = this.geometry.getIndex().data
          , s = n.length
          , a = this.drawMode === 4 ? 3 : 1;
        for (let o = 0; o + 2 < s; o += a) {
            const l = n[o] * 2
              , c = n[o + 1] * 2
              , p = n[o + 2] * 2;
            if (r[0] = e[l],
            r[1] = e[l + 1],
            r[2] = e[c],
            r[3] = e[c + 1],
            r[4] = e[p],
            r[5] = e[p + 1],
            Lc.contains(sh.x, sh.y))
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
Hf.BATCHABLE_SIZE = 100;
let Be = Hf;
class qa extends li {
    constructor(t, e, r) {
        super();
        const n = new pe(t)
          , s = new pe(e,!0)
          , a = new pe(r,!0,!0);
        this.addAttribute("aVertexPosition", n, 2, !1, mt.FLOAT).addAttribute("aTextureCoord", s, 2, !1, mt.FLOAT).addIndex(a),
        this._updateId = -1
    }
    get vertexDirtyId() {
        return this.buffers[0]._updateID
    }
}
var Pb = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`
  , Mb = `attribute vec2 aVertexPosition;
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
class _n extends Dr {
    constructor(t, e) {
        const r = {
            uSampler: t,
            alpha: 1,
            uTextureMatrix: jt.IDENTITY,
            uColor: new Float32Array([1, 1, 1, 1])
        };
        e = Object.assign({
            tint: 16777215,
            alpha: 1,
            pluginName: "batch"
        }, e),
        e.uniforms && Object.assign(r, e.uniforms),
        super(e.program || qr.from(Mb, Pb), r),
        this._colorDirty = !1,
        this.uvMatrix = new wl(t),
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
class Db extends qa {
    constructor(t=100, e=100, r=10, n=10) {
        super(),
        this.segWidth = r,
        this.segHeight = n,
        this.width = t,
        this.height = e,
        this.build()
    }
    build() {
        const t = this.segWidth * this.segHeight
          , e = []
          , r = []
          , n = []
          , s = this.segWidth - 1
          , a = this.segHeight - 1
          , o = this.width / s
          , l = this.height / a;
        for (let p = 0; p < t; p++) {
            const g = p % this.segWidth
              , f = p / this.segWidth | 0;
            e.push(g * o, f * l),
            r.push(g / s, f / a)
        }
        const c = s * a;
        for (let p = 0; p < c; p++) {
            const g = p % s
              , f = p / s | 0
              , v = f * this.segWidth + g
              , _ = f * this.segWidth + g + 1
              , T = (f + 1) * this.segWidth + g
              , A = (f + 1) * this.segWidth + g + 1;
            n.push(v, _, T, _, A, T)
        }
        this.buffers[0].data = new Float32Array(e),
        this.buffers[1].data = new Float32Array(r),
        this.indexBuffer.data = new Uint16Array(n),
        this.buffers[0].update(),
        this.buffers[1].update(),
        this.indexBuffer.update()
    }
}
class Bb extends qa {
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
          , n = this.getIndex();
        if (t.length < 1)
            return;
        e.data.length / 4 !== t.length && (e.data = new Float32Array(t.length * 4),
        r.data = new Float32Array(t.length * 4),
        n.data = new Uint16Array((t.length - 1) * 6));
        const s = r.data
          , a = n.data;
        s[0] = 0,
        s[1] = 0,
        s[2] = 0,
        s[3] = 1;
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
            s[v] = o,
            s[v + 1] = 0,
            s[v + 2] = o,
            s[v + 3] = 1
        }
        let g = 0;
        for (let f = 0; f < p - 1; f++) {
            const v = f * 2;
            a[g++] = v,
            a[g++] = v + 1,
            a[g++] = v + 2,
            a[g++] = v + 2,
            a[g++] = v + 1,
            a[g++] = v + 3
        }
        r.update(),
        n.update(),
        this.updateVertices()
    }
    updateVertices() {
        const t = this.points;
        if (t.length < 1)
            return;
        let e = t[0], r, n = 0, s = 0;
        const a = this.buffers[0].data
          , o = t.length
          , l = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
        for (let c = 0; c < o; c++) {
            const p = t[c]
              , g = c * 4;
            c < t.length - 1 ? r = t[c + 1] : r = p,
            s = -(r.x - e.x),
            n = r.y - e.y;
            const f = Math.sqrt(n * n + s * s);
            f < 1e-6 ? (n = 0,
            s = 0) : (n /= f,
            s /= f,
            n *= l,
            s *= l),
            a[g] = p.x + n,
            a[g + 1] = p.y + s,
            a[g + 2] = p.x - n,
            a[g + 3] = p.y - s,
            e = p
        }
        this.buffers[0].update()
    }
    update() {
        this.textureScale > 0 ? this.build() : this.updateVertices()
    }
}
class Fb extends Be {
    constructor(t, e, r) {
        const n = new Db(t.width,t.height,e,r)
          , s = new _n(ut.WHITE);
        super(n, s),
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
const qs = 10;
class Ya extends Fb {
    constructor(t, e, r, n, s) {
        var a, o, l, c;
        super(ut.WHITE, 4, 4),
        this._origWidth = t.orig.width,
        this._origHeight = t.orig.height,
        this._width = this._origWidth,
        this._height = this._origHeight,
        this._leftWidth = e ?? ((a = t.defaultBorders) == null ? void 0 : a.left) ?? qs,
        this._rightWidth = n ?? ((o = t.defaultBorders) == null ? void 0 : o.right) ?? qs,
        this._topHeight = r ?? ((l = t.defaultBorders) == null ? void 0 : l.top) ?? qs,
        this._bottomHeight = s ?? ((c = t.defaultBorders) == null ? void 0 : c.bottom) ?? qs,
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
          , n = this._height > r ? 1 : this._height / r;
        return Math.min(e, n)
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
          , n = 1 / this._origHeight;
        e[0] = e[8] = e[16] = e[24] = 0,
        e[1] = e[3] = e[5] = e[7] = 0,
        e[6] = e[14] = e[22] = e[30] = 1,
        e[25] = e[27] = e[29] = e[31] = 1,
        e[2] = e[10] = e[18] = e[26] = r * this._leftWidth,
        e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth,
        e[9] = e[11] = e[13] = e[15] = n * this._topHeight,
        e[17] = e[19] = e[21] = e[23] = 1 - n * this._bottomHeight,
        this.updateHorizontalVertices(),
        this.updateVerticalVertices(),
        this.geometry.buffers[0].update(),
        this.geometry.buffers[1].update()
    }
}
class Ob extends Be {
    constructor(t=ut.EMPTY, e, r, n, s) {
        const a = new qa(e,r,n);
        a.getBuffer("aVertexPosition").static = !1;
        const o = new _n(t);
        super(a, o, null, s),
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
class Nb extends Be {
    constructor(t, e, r=0) {
        const n = new Bb(t.height,e,r)
          , s = new _n(t);
        r > 0 && (t.baseTexture.wrapMode = Yr.REPEAT),
        super(n, s),
        this.autoUpdate = !0
    }
    _render(t) {
        const e = this.geometry;
        (this.autoUpdate || e._width !== this.shader.texture.height) && (e._width = this.shader.texture.height,
        e.update()),
        super._render(t)
    }
}
class Lb {
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
function kb(i, t) {
    var r;
    let e = !1;
    if ((r = i == null ? void 0 : i._textures) != null && r.length) {
        for (let n = 0; n < i._textures.length; n++)
            if (i._textures[n]instanceof ut) {
                const s = i._textures[n].baseTexture;
                t.includes(s) || (t.push(s),
                e = !0)
            }
    }
    return e
}
function Ub(i, t) {
    if (i.baseTexture instanceof Tt) {
        const e = i.baseTexture;
        return t.includes(e) || t.push(e),
        !0
    }
    return !1
}
function Gb(i, t) {
    if (i._texture && i._texture instanceof ut) {
        const e = i._texture.baseTexture;
        return t.includes(e) || t.push(e),
        !0
    }
    return !1
}
function Hb(i, t) {
    return t instanceof Sl ? (t.updateText(!0),
    !0) : !1
}
function $b(i, t) {
    if (t instanceof ui) {
        const e = t.toFontString();
        return ni.measureFont(e),
        !0
    }
    return !1
}
function Vb(i, t) {
    if (i instanceof Sl) {
        t.includes(i.style) || t.push(i.style),
        t.includes(i) || t.push(i);
        const e = i._texture.baseTexture;
        return t.includes(e) || t.push(e),
        !0
    }
    return !1
}
function Wb(i, t) {
    return i instanceof ui ? (t.includes(i) || t.push(i),
    !0) : !1
}
const Vf = class Wf {
    constructor(t) {
        this.limiter = new Lb(Wf.uploadsPerFrame),
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
        this.registerFindHook(Vb),
        this.registerFindHook(Wb),
        this.registerFindHook(kb),
        this.registerFindHook(Ub),
        this.registerFindHook(Gb),
        this.registerUploadHook(Hb),
        this.registerUploadHook($b)
    }
    upload(t) {
        return new Promise(e => {
            t && this.add(t),
            this.queue.length ? (this.completes.push(e),
            this.ticking || (this.ticking = !0,
            We.system.addOnce(this.tick, this, Fi.UTILITY))) : e()
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
                for (let r = 0, n = this.uploadHooks.length; r < n; r++)
                    if (this.uploadHooks[r](this.uploadHookHelper, t)) {
                        this.queue.shift(),
                        e = !0;
                        break
                    }
            }
            e || this.queue.shift()
        }
        if (this.queue.length)
            We.system.addOnce(this.tick, this, Fi.UTILITY);
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
        this.ticking && We.system.remove(this.tick, this),
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
Vf.uploadsPerFrame = 4;
let Aa = Vf;
Object.defineProperties(st, {
    UPLOADS_PER_FRAME: {
        get() {
            return Aa.uploadsPerFrame
        },
        set(i) {
            vt("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"),
            Aa.uploadsPerFrame = i
        }
    }
});
function jf(i, t) {
    return t instanceof Tt ? (t._glTextures[i.CONTEXT_UID] || i.texture.bind(t),
    !0) : !1
}
function jb(i, t) {
    if (!(t instanceof fs))
        return !1;
    const {geometry: e} = t;
    t.finishPoly(),
    e.updateBatches();
    const {batches: r} = e;
    for (let n = 0; n < r.length; n++) {
        const {texture: s} = r[n].style;
        s && jf(i, s.baseTexture)
    }
    return e.batchable || i.geometry.bind(e, t._resolveDirectShader(i)),
    !0
}
function Xb(i, t) {
    return i instanceof fs ? (t.push(i),
    !0) : !1
}
class Xf extends Aa {
    constructor(t) {
        super(t),
        this.uploadHookHelper = this.renderer,
        this.registerFindHook(Xb),
        this.registerUploadHook(jf),
        this.registerUploadHook(jb)
    }
}
Xf.extension = {
    name: "prepare",
    type: rt.RendererSystem
};
ot.add(Xf);
const zf = class qn {
    constructor(t, e, r) {
        this.linkedSheets = [],
        (t instanceof Tt || t instanceof ut) && (t = {
            texture: t,
            data: e,
            resolutionFilename: r
        });
        const {texture: n, data: s, resolutionFilename: a=null, cachePrefix: o=""} = t;
        this.cachePrefix = o,
        this._texture = n instanceof ut ? n : null,
        this.baseTexture = n instanceof Tt ? n : this._texture.baseTexture,
        this.textures = {},
        this.animations = {},
        this.data = s;
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
            this._frameKeys.length <= qn.BATCH_SIZE ? (this._processFrames(0),
            this._processAnimations(),
            this._parseComplete()) : this._nextBatch()
        }
        )
    }
    _processFrames(t) {
        let e = t;
        const r = qn.BATCH_SIZE;
        for (; e - t < r && e < this._frameKeys.length; ) {
            const n = this._frameKeys[e]
              , s = this._frames[n]
              , a = s.frame;
            if (a) {
                let o = null
                  , l = null;
                const c = s.trimmed !== !1 && s.sourceSize ? s.sourceSize : s.frame
                  , p = new At(0,0,Math.floor(c.w) / this.resolution,Math.floor(c.h) / this.resolution);
                s.rotated ? o = new At(Math.floor(a.x) / this.resolution,Math.floor(a.y) / this.resolution,Math.floor(a.h) / this.resolution,Math.floor(a.w) / this.resolution) : o = new At(Math.floor(a.x) / this.resolution,Math.floor(a.y) / this.resolution,Math.floor(a.w) / this.resolution,Math.floor(a.h) / this.resolution),
                s.trimmed !== !1 && s.spriteSourceSize && (l = new At(Math.floor(s.spriteSourceSize.x) / this.resolution,Math.floor(s.spriteSourceSize.y) / this.resolution,Math.floor(a.w) / this.resolution,Math.floor(a.h) / this.resolution)),
                this.textures[n] = new ut(this.baseTexture,o,p,l,s.rotated ? 2 : 0,s.anchor,s.borders),
                ut.addToCache(this.textures[n], this.cachePrefix + n.toString())
            }
            e++
        }
    }
    _processAnimations() {
        const t = this.data.animations || {};
        for (const e in t) {
            this.animations[e] = [];
            for (let r = 0; r < t[e].length; r++) {
                const n = t[e][r];
                this.animations[e].push(this.textures[n])
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
        this._processFrames(this._batchIndex * qn.BATCH_SIZE),
        this._batchIndex++,
        setTimeout( () => {
            this._batchIndex * qn.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(),
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
zf.BATCH_SIZE = 1e3;
let kc = zf;
const zb = ["jpg", "png", "jpeg", "avif", "webp", "s3tc", "s3tc_sRGB", "etc", "etc1", "pvrtc", "atc", "astc", "bptc"];
function qf(i, t, e) {
    const r = {};
    if (i.forEach(n => {
        r[n] = t
    }
    ),
    Object.keys(t.textures).forEach(n => {
        r[`${t.cachePrefix}${n}`] = t.textures[n]
    }
    ),
    !e) {
        const n = ge.dirname(i[0]);
        t.linkedSheets.forEach( (s, a) => {
            Object.assign(r, qf([`${n}/${t.data.meta.related_multi_packs[a]}`], s, !0))
        }
        )
    }
    return r
}
const qb = {
    extension: rt.Asset,
    cache: {
        test: i => i instanceof kc,
        getCacheableAssets: (i, t) => qf(i, t, !1)
    },
    resolver: {
        test: i => {
            const t = i.split("?")[0].split(".")
              , e = t.pop()
              , r = t.pop();
            return e === "json" && zb.includes(r)
        }
        ,
        parse: i => {
            var e;
            const t = i.split(".");
            return {
                resolution: parseFloat(((e = st.RETINA_PREFIX.exec(i)) == null ? void 0 : e[1]) ?? "1"),
                format: t[t.length - 2],
                src: i
            }
        }
    },
    loader: {
        name: "spritesheetLoader",
        extension: {
            type: rt.LoadParser,
            priority: dr.Normal
        },
        async testParse(i, t) {
            return ge.extname(t.src).toLowerCase() === ".json" && !!i.frames
        },
        async parse(i, t, e) {
            var p, g;
            const {texture: r, imageFilename: n, cachePrefix: s} = (t == null ? void 0 : t.data) ?? {};
            let a = ge.dirname(t.src);
            a && a.lastIndexOf("/") !== a.length - 1 && (a += "/");
            let o;
            if (r && r.baseTexture)
                o = r;
            else {
                const f = il(a + (n ?? i.meta.image), t.src);
                o = (await e.load([f]))[f]
            }
            const l = new kc({
                texture: o.baseTexture,
                data: i,
                resolutionFilename: t.src,
                cachePrefix: s
            });
            await l.parse();
            const c = (p = i == null ? void 0 : i.meta) == null ? void 0 : p.related_multi_packs;
            if (Array.isArray(c)) {
                const f = [];
                for (const _ of c) {
                    if (typeof _ != "string")
                        continue;
                    let T = a + _;
                    (g = t.data) != null && g.ignoreMultiPack || (T = il(T, t.src),
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
ot.add(qb);
class Sa {
    constructor() {
        this.info = [],
        this.common = [],
        this.page = [],
        this.char = [],
        this.kerning = [],
        this.distanceField = []
    }
}
class aa {
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
        for (const s in e) {
            const a = e[s].match(/^[a-z]+/gm)[0]
              , o = e[s].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm)
              , l = {};
            for (const c in o) {
                const p = o[c].split("=")
                  , g = p[0]
                  , f = p[1].replace(/"/gm, "")
                  , v = parseFloat(f)
                  , _ = isNaN(v) ? f : v;
                l[g] = _
            }
            r[a].push(l)
        }
        const n = new Sa;
        return r.info.forEach(s => n.info.push({
            face: s.face,
            size: parseInt(s.size, 10)
        })),
        r.common.forEach(s => n.common.push({
            lineHeight: parseInt(s.lineHeight, 10)
        })),
        r.page.forEach(s => n.page.push({
            id: parseInt(s.id, 10),
            file: s.file
        })),
        r.char.forEach(s => n.char.push({
            id: parseInt(s.id, 10),
            page: parseInt(s.page, 10),
            x: parseInt(s.x, 10),
            y: parseInt(s.y, 10),
            width: parseInt(s.width, 10),
            height: parseInt(s.height, 10),
            xoffset: parseInt(s.xoffset, 10),
            yoffset: parseInt(s.yoffset, 10),
            xadvance: parseInt(s.xadvance, 10)
        })),
        r.kerning.forEach(s => n.kerning.push({
            first: parseInt(s.first, 10),
            second: parseInt(s.second, 10),
            amount: parseInt(s.amount, 10)
        })),
        r.distanceField.forEach(s => n.distanceField.push({
            distanceRange: parseInt(s.distanceRange, 10),
            fieldType: s.fieldType
        })),
        n
    }
}
class ol {
    static test(t) {
        const e = t;
        return typeof t != "string" && "getElementsByTagName"in t && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null
    }
    static parse(t) {
        const e = new Sa
          , r = t.getElementsByTagName("info")
          , n = t.getElementsByTagName("common")
          , s = t.getElementsByTagName("page")
          , a = t.getElementsByTagName("char")
          , o = t.getElementsByTagName("kerning")
          , l = t.getElementsByTagName("distanceField");
        for (let c = 0; c < r.length; c++)
            e.info.push({
                face: r[c].getAttribute("face"),
                size: parseInt(r[c].getAttribute("size"), 10)
            });
        for (let c = 0; c < n.length; c++)
            e.common.push({
                lineHeight: parseInt(n[c].getAttribute("lineHeight"), 10)
            });
        for (let c = 0; c < s.length; c++)
            e.page.push({
                id: parseInt(s[c].getAttribute("id"), 10) || 0,
                file: s[c].getAttribute("file")
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
class hl {
    static test(t) {
        return typeof t == "string" && t.includes("<font>") ? ol.test(st.ADAPTER.parseXML(t)) : !1
    }
    static parse(t) {
        return ol.parse(st.ADAPTER.parseXML(t))
    }
}
const ah = [aa, ol, hl];
function Yb(i) {
    for (let t = 0; t < ah.length; t++)
        if (ah[t].test(i))
            return ah[t];
    return null
}
function Kb(i, t, e, r, n, s) {
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
      , g = i.height / r - l - c * 2
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
    e.fillGradientType === ja.LINEAR_VERTICAL) {
        o = t.createLinearGradient(p / 2, c, p / 2, g + c);
        let _ = 0;
        const T = (s.fontProperties.fontSize + e.strokeThickness) / g;
        for (let A = 0; A < n.length; A++) {
            const E = s.lineHeight * A;
            for (let I = 0; I < f.length; I++) {
                let S = 0;
                typeof v[I] == "number" ? S = v[I] : S = I / f.length;
                const P = E / g + S * T;
                let k = Math.max(_, P);
                k = Math.min(k, 1),
                o.addColorStop(k, f[I]),
                _ = k
            }
        }
    } else {
        o = t.createLinearGradient(c, g / 2, p + c, g / 2);
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
function Zb(i, t, e, r, n, s, a) {
    const o = e.text
      , l = e.fontProperties;
    t.translate(r, n),
    t.scale(s, s);
    const c = a.strokeThickness / 2
      , p = -(a.strokeThickness / 2);
    if (t.font = a.toFontString(),
    t.lineWidth = a.strokeThickness,
    t.textBaseline = a.textBaseline,
    t.lineJoin = a.lineJoin,
    t.miterLimit = a.miterLimit,
    t.fillStyle = Kb(i, t, a, s, [o], e),
    t.strokeStyle = a.stroke,
    a.dropShadow) {
        const g = a.dropShadowColor
          , f = a.dropShadowBlur * s
          , v = a.dropShadowDistance * s;
        t.shadowColor = Pt.shared.setValue(g).setAlpha(a.dropShadowAlpha).toRgbaString(),
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
function oa(i) {
    return i.codePointAt ? i.codePointAt(0) : i.charCodeAt(0)
}
function Yf(i) {
    return Array.from ? Array.from(i) : i.split("")
}
function Qb(i) {
    typeof i == "string" && (i = [i]);
    const t = [];
    for (let e = 0, r = i.length; e < r; e++) {
        const n = i[e];
        if (Array.isArray(n)) {
            if (n.length !== 2)
                throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${n.length}.`);
            const s = n[0].charCodeAt(0)
              , a = n[1].charCodeAt(0);
            if (a < s)
                throw new Error("[BitmapFont]: Invalid character range.");
            for (let o = s, l = a; o <= l; o++)
                t.push(String.fromCharCode(o))
        } else
            t.push(...Yf(n))
    }
    if (t.length === 0)
        throw new Error("[BitmapFont]: Empty set when resolving characters.");
    return t
}
const ri = class Ar {
    constructor(t, e, r) {
        var p;
        const [n] = t.info
          , [s] = t.common
          , [a] = t.page
          , [o] = t.distanceField
          , l = Fr(a.file)
          , c = {};
        this._ownsTextures = r,
        this.font = n.face,
        this.size = n.size,
        this.lineHeight = s.lineHeight / l,
        this.chars = {},
        this.pageTextures = c;
        for (let g = 0; g < t.page.length; g++) {
            const {id: f, file: v} = t.page[g];
            c[f] = e instanceof Array ? e[g] : e[v],
            o != null && o.fieldType && o.fieldType !== "none" && (c[f].baseTexture.alphaMode = ke.NO_PREMULTIPLIED_ALPHA,
            c[f].baseTexture.mipmap = Br.OFF)
        }
        for (let g = 0; g < t.char.length; g++) {
            const {id: f, page: v} = t.char[g];
            let {x: _, y: T, width: A, height: E, xoffset: I, yoffset: S, xadvance: P} = t.char[g];
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
        for (let g = 0; g < t.kerning.length; g++) {
            let {first: f, second: v, amount: _} = t.kerning[g];
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
        let n;
        if (t instanceof Sa)
            n = t;
        else {
            const a = Yb(t);
            if (!a)
                throw new Error("Unrecognized data format for font.");
            n = a.parse(t)
        }
        e instanceof ut && (e = [e]);
        const s = new Ar(n,e,r);
        return Ar.available[s.font] = s,
        s
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
        const {chars: n, padding: s, resolution: a, textureWidth: o, textureHeight: l, ...c} = Object.assign({}, Ar.defaultOptions, r)
          , p = Qb(n)
          , g = e instanceof ui ? e : new ui(e)
          , f = o
          , v = new Sa;
        v.info[0] = {
            face: g.fontFamily,
            size: g.fontSize
        },
        v.common[0] = {
            lineHeight: g.fontSize
        };
        let _ = 0, T = 0, A, E, I, S = 0;
        const P = [];
        for (let V = 0; V < p.length; V++) {
            A || (A = st.ADAPTER.createCanvas(),
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
            const d = p[V]
              , O = ni.measureText(d, g, !1, A)
              , N = O.width
              , z = Math.ceil(O.height)
              , J = Math.ceil((g.fontStyle === "italic" ? 2 : 1) * N);
            if (T >= l - z * a) {
                if (T === 0)
                    throw new Error(`[BitmapFont] textureHeight ${l}px is too small (fontFamily: '${g.fontFamily}', fontSize: ${g.fontSize}px, char: '${d}')`);
                --V,
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
                    throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${g.fontFamily}', fontSize: ${g.fontSize}px, char: '${d}')`);
                --V,
                T += S * a,
                T = Math.ceil(T),
                _ = 0,
                S = 0;
                continue
            }
            Zb(A, E, O, _, T, a, g);
            const $ = oa(O.text);
            v.char.push({
                id: $,
                page: P.length - 1,
                x: _ / a,
                y: T / a,
                width: J,
                height: z,
                xoffset: 0,
                yoffset: 0,
                xadvance: N - (g.dropShadow ? g.dropShadowDistance : 0) - (g.stroke ? g.strokeThickness : 0)
            }),
            _ += (J + 2 * s) * a,
            _ = Math.ceil(_)
        }
        if (!(r != null && r.skipKerning))
            for (let V = 0, d = p.length; V < d; V++) {
                const O = p[V];
                for (let N = 0; N < d; N++) {
                    const z = p[N]
                      , J = E.measureText(O).width
                      , $ = E.measureText(z).width
                      , B = E.measureText(O + z).width - (J + $);
                    B && v.kerning.push({
                        first: oa(O),
                        second: oa(z),
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
ri.ALPHA = [["a", "z"], ["A", "Z"], " "],
ri.NUMERIC = [["0", "9"]],
ri.ALPHANUMERIC = [["a", "z"], ["A", "Z"], ["0", "9"], " "],
ri.ASCII = [[" ", "~"]],
ri.defaultOptions = {
    resolution: 1,
    textureWidth: 512,
    textureHeight: 512,
    padding: 4,
    chars: ri.ALPHANUMERIC
},
ri.available = {};
let ii = ri;
var Jb = `// Pixi texture info\r
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
  , t1 = `// Mesh material default fragment\r
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
const Uc = []
  , Gc = []
  , Hc = []
  , e1 = class Kf extends Ue {
    constructor(t, e={}) {
        super();
        const {align: r, tint: n, maxWidth: s, letterSpacing: a, fontName: o, fontSize: l} = Object.assign({}, Kf.styleDefaults, e);
        if (!ii.available[o])
            throw new Error(`Missing BitmapFont "${o}"`);
        this._activePagesMeshData = [],
        this._textWidth = 0,
        this._textHeight = 0,
        this._align = r,
        this._tintColor = new Pt(n),
        this._font = void 0,
        this._fontName = o,
        this._fontSize = l,
        this.text = t,
        this._maxWidth = s,
        this._maxLineHeight = 0,
        this._letterSpacing = a,
        this._anchor = new zr( () => {
            this.dirty = !0
        }
        ,this,0,0),
        this._roundPixels = st.ROUND_PIXELS,
        this.dirty = !0,
        this._resolution = st.RESOLUTION,
        this._autoResolution = !0,
        this._textureCache = {}
    }
    updateText() {
        var J;
        const t = ii.available[this._fontName]
          , e = this.fontSize
          , r = e / t.size
          , n = new Bt
          , s = []
          , a = []
          , o = []
          , l = this._text.replace(/(?:\r\n|\r)/g, `
`) || " "
          , c = Yf(l)
          , p = this._maxWidth * t.size / e
          , g = t.distanceFieldType === "none" ? Uc : Gc;
        let f = null
          , v = 0
          , _ = 0
          , T = 0
          , A = -1
          , E = 0
          , I = 0
          , S = 0
          , P = 0;
        for (let $ = 0; $ < c.length; $++) {
            const B = c[$]
              , W = oa(B);
            if (/(?:\s)/.test(B) && (A = $,
            E = v,
            P++),
            B === "\r" || B === `
`) {
                a.push(v),
                o.push(-1),
                _ = Math.max(_, v),
                ++T,
                ++I,
                n.x = 0,
                n.y += t.lineHeight,
                f = null,
                P = 0;
                continue
            }
            const tt = t.chars[W];
            if (!tt)
                continue;
            f && tt.kerning[f] && (n.x += tt.kerning[f]);
            const at = Hc.pop() || {
                texture: ut.EMPTY,
                line: 0,
                charCode: 0,
                prevSpaces: 0,
                position: new Bt
            };
            at.texture = tt.texture,
            at.line = T,
            at.charCode = W,
            at.position.x = Math.round(n.x + tt.xOffset + this._letterSpacing / 2),
            at.position.y = Math.round(n.y + tt.yOffset),
            at.prevSpaces = P,
            s.push(at),
            v = at.position.x + Math.max(tt.xAdvance - tt.xOffset, tt.texture.orig.width),
            n.x += tt.xAdvance + this._letterSpacing,
            S = Math.max(S, tt.yOffset + tt.texture.height),
            f = W,
            A !== -1 && p > 0 && n.x > p && (++I,
            Pi(s, 1 + A - I, 1 + $ - A),
            $ = A,
            A = -1,
            a.push(E),
            o.push(s.length > 0 ? s[s.length - 1].prevSpaces : 0),
            _ = Math.max(_, E),
            T++,
            n.x = 0,
            n.y += t.lineHeight,
            f = null,
            P = 0)
        }
        const k = c[c.length - 1];
        k !== "\r" && k !== `
` && (/(?:\s)/.test(k) && (v = E),
        a.push(v),
        _ = Math.max(_, v),
        o.push(-1));
        const V = [];
        for (let $ = 0; $ <= T; $++) {
            let B = 0;
            this._align === "right" ? B = _ - a[$] : this._align === "center" ? B = (_ - a[$]) / 2 : this._align === "justify" && (B = o[$] < 0 ? 0 : (_ - a[$]) / o[$]),
            V.push(B)
        }
        const d = s.length
          , O = {}
          , N = []
          , z = this._activePagesMeshData;
        g.push(...z);
        for (let $ = 0; $ < d; $++) {
            const B = s[$].texture
              , W = B.baseTexture.uid;
            if (!O[W]) {
                let tt = g.pop();
                if (!tt) {
                    const nt = new qa;
                    let dt, Ft;
                    t.distanceFieldType === "none" ? (dt = new _n(ut.EMPTY),
                    Ft = q.NORMAL) : (dt = new _n(ut.EMPTY,{
                        program: qr.from(t1, Jb),
                        uniforms: {
                            uFWidth: 0
                        }
                    }),
                    Ft = q.NORMAL_NPM);
                    const Q = new Be(nt,dt);
                    Q.blendMode = Ft,
                    tt = {
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
                tt.index = 0,
                tt.indexCount = 0,
                tt.vertexCount = 0,
                tt.uvsCount = 0,
                tt.total = 0;
                const {_textureCache: at} = this;
                at[W] = at[W] || new ut(B.baseTexture),
                tt.mesh.texture = at[W],
                tt.mesh.tint = this._tintColor.value,
                N.push(tt),
                O[W] = tt
            }
            O[W].total++
        }
        for (let $ = 0; $ < z.length; $++)
            N.includes(z[$]) || this.removeChild(z[$].mesh);
        for (let $ = 0; $ < N.length; $++)
            N[$].mesh.parent !== this && this.addChild(N[$].mesh);
        this._activePagesMeshData = N;
        for (const $ in O) {
            const B = O[$]
              , W = B.total;
            if (!(((J = B.indices) == null ? void 0 : J.length) > 6 * W) || B.vertices.length < Be.BATCHABLE_SIZE * 2)
                B.vertices = new Float32Array(4 * 2 * W),
                B.uvs = new Float32Array(4 * 2 * W),
                B.indices = new Uint16Array(6 * W);
            else {
                const tt = B.total
                  , at = B.vertices;
                for (let nt = tt * 4 * 2; nt < at.length; nt++)
                    at[nt] = 0
            }
            B.mesh.size = 6 * W
        }
        for (let $ = 0; $ < d; $++) {
            const B = s[$];
            let W = B.position.x + V[B.line] * (this._align === "justify" ? B.prevSpaces : 1);
            this._roundPixels && (W = Math.round(W));
            const tt = W * r
              , at = B.position.y * r
              , nt = B.texture
              , dt = O[nt.baseTexture.uid]
              , Ft = nt.frame
              , Q = nt._uvs
              , K = dt.index++;
            dt.indices[K * 6 + 0] = 0 + K * 4,
            dt.indices[K * 6 + 1] = 1 + K * 4,
            dt.indices[K * 6 + 2] = 2 + K * 4,
            dt.indices[K * 6 + 3] = 0 + K * 4,
            dt.indices[K * 6 + 4] = 2 + K * 4,
            dt.indices[K * 6 + 5] = 3 + K * 4,
            dt.vertices[K * 8 + 0] = tt,
            dt.vertices[K * 8 + 1] = at,
            dt.vertices[K * 8 + 2] = tt + Ft.width * r,
            dt.vertices[K * 8 + 3] = at,
            dt.vertices[K * 8 + 4] = tt + Ft.width * r,
            dt.vertices[K * 8 + 5] = at + Ft.height * r,
            dt.vertices[K * 8 + 6] = tt,
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
        this._textHeight = (n.y + t.lineHeight) * r;
        for (const $ in O) {
            const B = O[$];
            if (this.anchor.x !== 0 || this.anchor.y !== 0) {
                let nt = 0;
                const dt = this._textWidth * this.anchor.x
                  , Ft = this._textHeight * this.anchor.y;
                for (let Q = 0; Q < B.total; Q++)
                    B.vertices[nt++] -= dt,
                    B.vertices[nt++] -= Ft,
                    B.vertices[nt++] -= dt,
                    B.vertices[nt++] -= Ft,
                    B.vertices[nt++] -= dt,
                    B.vertices[nt++] -= Ft,
                    B.vertices[nt++] -= dt,
                    B.vertices[nt++] -= Ft
            }
            this._maxLineHeight = S * r;
            const W = B.mesh.geometry.getBuffer("aVertexPosition")
              , tt = B.mesh.geometry.getBuffer("aTextureCoord")
              , at = B.mesh.geometry.getIndex();
            W.data = B.vertices,
            tt.data = B.uvs,
            at.data = B.indices,
            W.update(),
            tt.update(),
            at.update()
        }
        for (let $ = 0; $ < s.length; $++)
            Hc.push(s[$]);
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
        const {distanceFieldRange: e, distanceFieldType: r, size: n} = ii.available[this._fontName];
        if (r !== "none") {
            const {a: s, b: a, c: o, d: l} = this.worldTransform
              , c = Math.sqrt(s * s + a * a)
              , p = Math.sqrt(o * o + l * l)
              , g = (Math.abs(c) + Math.abs(p)) / 2
              , f = this.fontSize / n
              , v = t._view.resolution;
            for (const _ of this._activePagesMeshData)
                _.mesh.shader.uniforms.uFWidth = g * e * f * v
        }
        super._render(t)
    }
    getLocalBounds() {
        return this.validate(),
        super.getLocalBounds()
    }
    validate() {
        const t = ii.available[this._fontName];
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
        if (!ii.available[t])
            throw new Error(`Missing BitmapFont "${t}"`);
        this._fontName !== t && (this._fontName = t,
        this.dirty = !0)
    }
    get fontSize() {
        return this._fontSize ?? ii.available[this._fontName].size
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
          , r = ii.available[this._fontName].distanceFieldType === "none" ? Uc : Gc;
        r.push(...this._activePagesMeshData);
        for (const n of this._activePagesMeshData)
            this.removeChild(n.mesh);
        this._activePagesMeshData = [],
        r.filter(n => e[n.mesh.texture.baseTexture.uid]).forEach(n => {
            n.mesh.texture = ut.EMPTY
        }
        );
        for (const n in e)
            e[n].destroy(),
            delete e[n];
        this._font = null,
        this._tintColor = null,
        this._textureCache = null,
        super.destroy(t)
    }
}
;
e1.styleDefaults = {
    align: "left",
    tint: 16777215,
    maxWidth: 0,
    letterSpacing: 0
};
const r1 = [".xml", ".fnt"]
  , i1 = {
    extension: {
        type: rt.LoadParser,
        priority: dr.Normal
    },
    name: "loadBitmapFont",
    test(i) {
        return r1.includes(ge.extname(i).toLowerCase())
    },
    async testParse(i) {
        return aa.test(i) || hl.test(i)
    },
    async parse(i, t, e) {
        const r = aa.test(i) ? aa.parse(i) : hl.parse(i)
          , {src: n} = t
          , {page: s} = r
          , a = [];
        for (let c = 0; c < s.length; ++c) {
            const p = s[c].file;
            let g = ge.join(ge.dirname(n), p);
            g = il(g, n),
            a.push(g)
        }
        const o = await e.load(a)
          , l = a.map(c => o[c]);
        return ii.install(r, l, !0)
    },
    async load(i, t) {
        return (await st.ADAPTER.fetch(i)).text()
    },
    unload(i) {
        i.destroy()
    }
};
ot.add(i1);
const ll = class rn extends ui {
    constructor() {
        super(...arguments),
        this._fonts = [],
        this._overrides = [],
        this._stylesheet = "",
        this.fontsDirty = !1
    }
    static from(t) {
        return new rn(Object.keys(rn.defaultOptions).reduce( (e, r) => ({
            ...e,
            [r]: t[r]
        }), {}))
    }
    cleanFonts() {
        this._fonts.length > 0 && (this._fonts.forEach(t => {
            URL.revokeObjectURL(t.src),
            t.refs--,
            t.refs === 0 && (t.fontFace && document.fonts.delete(t.fontFace),
            delete rn.availableFonts[t.originalUrl])
        }
        ),
        this.fontFamily = "Arial",
        this._fonts.length = 0,
        this.styleID++,
        this.fontsDirty = !0)
    }
    loadFont(t, e={}) {
        const {availableFonts: r} = rn;
        if (r[t]) {
            const n = r[t];
            return this._fonts.push(n),
            n.refs++,
            this.styleID++,
            this.fontsDirty = !0,
            Promise.resolve()
        }
        return st.ADAPTER.fetch(t).then(n => n.blob()).then(async n => new Promise( (s, a) => {
            const o = URL.createObjectURL(n)
              , l = new FileReader;
            l.onload = () => s([o, l.result]),
            l.onerror = a,
            l.readAsDataURL(n)
        }
        )).then(async ([n,s]) => {
            const a = Object.assign({
                family: ge.basename(t, ge.extname(t)),
                weight: "normal",
                style: "normal",
                display: "auto",
                src: n,
                dataSrc: s,
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
        return Array.isArray(t) && (t = Id(t)),
        typeof t == "number" ? Cd(t) : t
    }
    dropShadowToCSS() {
        let t = this.normalizeColor(this.dropShadowColor);
        const e = this.dropShadowAlpha
          , r = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance)
          , n = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
        t.startsWith("#") && e < 1 && (t += (e * 255 | 0).toString(16).padStart(2, "0"));
        const s = `${r}px ${n}px`;
        return this.dropShadowBlur > 0 ? `text-shadow: ${s} ${this.dropShadowBlur}px ${t}` : `text-shadow: ${s} ${t}`
    }
    reset() {
        Object.assign(this, rn.defaultOptions)
    }
    onBeforeDraw() {
        const {fontsDirty: t} = this;
        return this.fontsDirty = !1,
        this.isSafari && this._fonts.length > 0 && t ? new Promise(e => setTimeout(e, 100)) : Promise.resolve()
    }
    get isSafari() {
        const {userAgent: t} = st.ADAPTER.getNavigator();
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
ll.availableFonts = {},
ll.defaultOptions = {
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
let oh = ll;
const Ys = class nn extends Lr {
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
          , n = ut.from(r, {
            scaleMode: st.SCALE_MODE,
            resourceOptions: {
                autoLoad: !1
            }
        });
        n.orig = new At,
        n.trim = new At,
        this.texture = n;
        const s = "http://www.w3.org/2000/svg"
          , a = "http://www.w3.org/1999/xhtml"
          , o = document.createElementNS(s, "svg")
          , l = document.createElementNS(s, "foreignObject")
          , c = document.createElementNS(a, "div")
          , p = document.createElementNS(a, "style");
        l.setAttribute("width", "10000"),
        l.setAttribute("height", "10000"),
        l.style.overflow = "hidden",
        o.appendChild(l),
        this.maxWidth = nn.defaultMaxWidth,
        this.maxHeight = nn.defaultMaxHeight,
        this._domElement = c,
        this._styleElement = p,
        this._svgRoot = o,
        this._foreignObject = l,
        this._foreignObject.appendChild(p),
        this._foreignObject.appendChild(c),
        this._image = r,
        this._loadImage = new Image,
        this._autoResolution = nn.defaultAutoResolution,
        this._resolution = nn.defaultResolution ?? st.RESOLUTION,
        this.text = t,
        this.style = e
    }
    measureText(t) {
        var p, g;
        const {text: e, style: r, resolution: n} = Object.assign({
            text: this._text,
            style: this._style,
            resolution: this._resolution
        }, t);
        Object.assign(this._domElement, {
            innerHTML: e,
            style: r.toCSS(n)
        }),
        this._styleElement.textContent = r.toGlobalCSS(),
        document.body.appendChild(this._svgRoot);
        const s = this._domElement.getBoundingClientRect();
        this._svgRoot.remove();
        const {width: a, height: o} = s;
        (a > this.maxWidth || o > this.maxHeight) && console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");
        const l = Math.min(this.maxWidth, Math.ceil(a))
          , c = Math.min(this.maxHeight, Math.ceil(o));
        return this._svgRoot.setAttribute("width", l.toString()),
        this._svgRoot.setAttribute("height", c.toString()),
        e !== this._text && (this._domElement.innerHTML = this._text),
        r !== this._style && (Object.assign(this._domElement, {
            style: (p = this._style) == null ? void 0 : p.toCSS(n)
        }),
        this._styleElement.textContent = (g = this._style) == null ? void 0 : g.toGlobalCSS()),
        {
            width: l + r.padding * 2,
            height: c + r.padding * 2
        }
    }
    async updateText(t=!0) {
        const {style: e, _image: r, _loadImage: n} = this;
        if (this.localStyleID !== e.styleID && (this.dirty = !0,
        this.localStyleID = e.styleID),
        !this.dirty && t)
            return;
        const {width: s, height: a} = this.measureText();
        r.width = n.width = Math.ceil(Math.max(1, s)),
        r.height = n.height = Math.ceil(Math.max(1, a)),
        this._updateID++;
        const o = this._updateID;
        await new Promise(l => {
            n.onload = async () => {
                if (o < this._updateID) {
                    l();
                    return
                }
                await e.onBeforeDraw(),
                r.src = n.src,
                n.onload = null,
                n.src = "",
                this.updateTexture(),
                l()
            }
            ;
            const c = new XMLSerializer().serializeToString(this._svgRoot);
            n.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(c)}`
        }
        )
    }
    get source() {
        return this._image
    }
    updateTexture() {
        const {style: t, texture: e, _image: r, resolution: n} = this
          , {padding: s} = t
          , {baseTexture: a} = e;
        e.trim.width = e._frame.width = r.width / n,
        e.trim.height = e._frame.height = r.height / n,
        e.trim.x = -s,
        e.trim.y = -s,
        e.orig.width = e._frame.width - s * 2,
        e.orig.height = e._frame.height - s * 2,
        this._onTextureUpdate(),
        a.setRealSize(r.width, r.height, n),
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
        var r, n, s, a, o;
        typeof t == "boolean" && (t = {
            children: t
        }),
        t = Object.assign({}, nn.defaultDestroyOptions, t),
        super.destroy(t);
        const e = null;
        this.ownsStyle && ((r = this._style) == null || r.cleanFonts()),
        this._style = e,
        (n = this._svgRoot) == null || n.remove(),
        this._svgRoot = e,
        (s = this._domElement) == null || s.remove(),
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
        const e = Xr(this.scale.x) || 1;
        this.scale.x = e * t / this._image.width / this.resolution,
        this._width = t
    }
    get height() {
        return this.updateText(!0),
        Math.abs(this.scale.y) * this._image.height / this.resolution
    }
    set height(t) {
        this.updateText(!0);
        const e = Xr(this.scale.y) || 1;
        this.scale.y = e * t / this._image.height / this.resolution,
        this._height = t
    }
    get style() {
        return this._style
    }
    set style(t) {
        this._style !== t && (t = t || {},
        t instanceof oh ? (this.ownsStyle = !1,
        this._style = t) : t instanceof ui ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"),
        this.ownsStyle = !0,
        this._style = oh.from(t)) : (this.ownsStyle = !0,
        this._style = new oh(t)),
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
Ys.defaultDestroyOptions = {
    texture: !0,
    children: !1,
    baseTexture: !0
},
Ys.defaultMaxWidth = 2024,
Ys.defaultMaxHeight = 2024,
Ys.defaultAutoResolution = !0;
const ei = new At;
class Zf {
    constructor(t) {
        this.renderer = t
    }
    async image(t, e, r, n) {
        const s = new Image;
        return s.src = await this.base64(t, e, r, n),
        s
    }
    async base64(t, e, r, n) {
        const s = this.canvas(t, n);
        if (s.toBlob !== void 0)
            return new Promise( (a, o) => {
                s.toBlob(l => {
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
        if (s.toDataURL !== void 0)
            return s.toDataURL(e, r);
        if (s.convertToBlob !== void 0) {
            const a = await s.convertToBlob({
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
        let n, s, a;
        t && (t instanceof Or ? a = t : (a = r.generateTexture(t, {
            region: e,
            resolution: r.resolution
        }),
        e && (ei.width = e.width,
        ei.height = e.height,
        e = ei))),
        a ? (n = a.baseTexture._canvasRenderTarget.context,
        s = a.baseTexture._canvasRenderTarget.resolution,
        e = e ?? a.frame) : (n = r.canvasContext.rootContext,
        s = r._view.resolution,
        e || (e = ei,
        e.width = r.width / s,
        e.height = r.height / s));
        const o = Math.round(e.x * s)
          , l = Math.round(e.y * s)
          , c = Math.max(Math.round(e.width * s), 1)
          , p = Math.max(Math.round(e.height * s), 1)
          , g = new us(c,p,1)
          , f = n.getImageData(o, l, c, p);
        return g.context.putImageData(f, 0, 0),
        g.canvas
    }
    pixels(t, e) {
        const r = this.renderer;
        if (!r)
            throw new Error("The CanvasExtract has already been destroyed");
        let n, s, a;
        t && (t instanceof Or ? a = t : (a = r.generateTexture(t, {
            region: e,
            resolution: r.resolution
        }),
        e && (ei.width = e.width,
        ei.height = e.height,
        e = ei))),
        a ? (n = a.baseTexture._canvasRenderTarget.context,
        s = a.baseTexture._canvasRenderTarget.resolution,
        e = e ?? a.frame) : (n = r.canvasContext.rootContext,
        s = r.resolution,
        e || (e = ei,
        e.width = r.width / s,
        e.height = r.height / s));
        const o = Math.round(e.x * s)
          , l = Math.round(e.y * s)
          , c = Math.max(Math.round(e.width * s), 1)
          , p = Math.max(Math.round(e.height * s), 1);
        return n.getImageData(o, l, c, p).data
    }
    destroy() {
        this.renderer = null
    }
}
Zf.extension = {
    name: "extract",
    type: rt.CanvasRendererSystem
};
ot.add(Zf);
let hh;
const Hn = new jt;
fs.prototype.generateCanvasTexture = function(i, t=1) {
    const e = this.getLocalBounds(new At);
    e.width = Math.max(e.width, 1 / t),
    e.height = Math.max(e.height, 1 / t);
    const r = Or.create({
        width: e.width,
        height: e.height,
        scaleMode: i,
        resolution: t
    });
    hh || (hh = new Wa),
    this.transform.updateLocalTransform(),
    this.transform.localTransform.copyTo(Hn),
    Hn.invert(),
    Hn.tx -= e.x,
    Hn.ty -= e.y,
    hh.render(this, {
        renderTexture: r,
        clear: !0,
        transform: Hn
    });
    const n = ut.from(r.baseTexture._canvasRenderTarget.canvas, {
        scaleMode: i
    });
    return n.baseTexture.setResolution(t),
    n
}
;
fs.prototype.cachedGraphicsData = [];
fs.prototype._renderCanvas = function(i) {
    this.isMask !== !0 && (this.finishPoly(),
    i.plugins.graphics.render(this))
}
;
class ss {
    static offsetPolygon(t, e) {
        const r = []
          , n = t.length;
        e = ss.isPolygonClockwise(t) ? e : -1 * e;
        for (let s = 0; s < n; s += 2) {
            let a = s - 2;
            a < 0 && (a += n);
            const o = (s + 2) % n;
            let l = t[s] - t[a]
              , c = t[s + 1] - t[a + 1]
              , p = Math.sqrt(l * l + c * c);
            l /= p,
            c /= p,
            l *= e,
            c *= e;
            const g = -c
              , f = l
              , v = [t[a] + g, t[a + 1] + f]
              , _ = [t[s] + g, t[s + 1] + f];
            let T = t[o] - t[s]
              , A = t[o + 1] - t[s + 1];
            p = Math.sqrt(T * T + A * A),
            T /= p,
            A /= p,
            T *= e,
            A *= e;
            const E = -A
              , I = T
              , S = [t[s] + E, t[s + 1] + I]
              , P = [t[o] + E, t[o + 1] + I]
              , k = ss.findIntersection(v[0], v[1], _[0], _[1], S[0], S[1], P[0], P[1]);
            k && r.push(...k)
        }
        return r
    }
    static findIntersection(t, e, r, n, s, a, o, l) {
        const c = (l - a) * (r - t) - (o - s) * (n - e)
          , p = (o - s) * (e - a) - (l - a) * (t - s)
          , g = (r - t) * (e - a) - (n - e) * (t - s);
        if (c === 0)
            return p === 0 && g === 0 ? [(t + r) / 2, (e + n) / 2] : null;
        const f = p / c;
        return [t + f * (r - t), e + f * (n - e)]
    }
    static isPolygonClockwise(t) {
        let e = 0;
        for (let r = 0, n = t.length - 2; r < t.length; n = r,
        r += 2)
            e += (t[r] - t[n]) * (t[r + 1] + t[n + 1]);
        return e > 0
    }
}
class Qf {
    constructor(t) {
        this._svgMatrix = null,
        this._tempMatrix = new jt,
        this.renderer = t
    }
    _calcCanvasStyle(t, e) {
        let r;
        return t.texture && t.texture.baseTexture !== ut.WHITE.baseTexture ? t.texture.valid ? (r = _e.getTintedPattern(t.texture, e),
        this.setPatternTransform(r, t.matrix || jt.IDENTITY)) : r = "#808080" : r = `#${`00000${(e | 0).toString(16)}`.slice(-6)}`,
        r
    }
    render(t) {
        const e = this.renderer
          , r = e.canvasContext.activeContext
          , n = t.worldAlpha
          , s = t.transform.worldTransform;
        e.canvasContext.setContextTransform(s),
        e.canvasContext.setBlendMode(t.blendMode);
        const a = t.geometry.graphicsData;
        let o, l;
        const c = Pt.shared.setValue(t.tint).toArray();
        for (let p = 0; p < a.length; p++) {
            const g = a[p]
              , f = g.shape
              , v = g.fillStyle
              , _ = g.lineStyle
              , T = g.fillStyle.color | 0
              , A = g.lineStyle.color | 0;
            if (g.matrix && e.canvasContext.setContextTransform(s.copyTo(this._tempMatrix).append(g.matrix)),
            v.visible && (o = this._calcCanvasStyle(v, Pt.shared.setValue(T).multiply(c).toNumber())),
            _.visible && (l = this._calcCanvasStyle(_, Pt.shared.setValue(A).multiply(c).toNumber())),
            r.lineWidth = _.width,
            r.lineCap = _.cap,
            r.lineJoin = _.join,
            r.miterLimit = _.miterLimit,
            g.type === Zt.POLY) {
                r.beginPath();
                const E = f;
                let I = E.points;
                const S = g.holes;
                let P, k, V, d, O;
                r.moveTo(I[0], I[1]);
                for (let N = 2; N < I.length; N += 2)
                    r.lineTo(I[N], I[N + 1]);
                if (E.closeStroke && r.closePath(),
                S.length > 0) {
                    O = [],
                    P = 0,
                    V = I[0],
                    d = I[1];
                    for (let N = 2; N + 2 < I.length; N += 2)
                        P += (I[N] - V) * (I[N + 3] - d) - (I[N + 2] - V) * (I[N + 1] - d);
                    for (let N = 0; N < S.length; N++)
                        if (I = S[N].shape.points,
                        !!I) {
                            k = 0,
                            V = I[0],
                            d = I[1];
                            for (let z = 2; z + 2 < I.length; z += 2)
                                k += (I[z] - V) * (I[z + 3] - d) - (I[z + 2] - V) * (I[z + 1] - d);
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
                v.visible && (r.globalAlpha = v.alpha * n,
                r.fillStyle = o,
                r.fill()),
                _.visible && this.paintPolygonStroke(E, _, l, S, O, n, r)
            } else if (g.type === Zt.RECT) {
                const E = f;
                if (v.visible && (r.globalAlpha = v.alpha * n,
                r.fillStyle = o,
                r.fillRect(E.x, E.y, E.width, E.height)),
                _.visible) {
                    const I = _.width * (.5 - (1 - _.alignment))
                      , S = E.width + 2 * I
                      , P = E.height + 2 * I;
                    r.globalAlpha = _.alpha * n,
                    r.strokeStyle = l,
                    r.strokeRect(E.x - I, E.y - I, S, P)
                }
            } else if (g.type === Zt.CIRC) {
                const E = f;
                if (r.beginPath(),
                r.arc(E.x, E.y, E.radius, 0, 2 * Math.PI),
                r.closePath(),
                v.visible && (r.globalAlpha = v.alpha * n,
                r.fillStyle = o,
                r.fill()),
                _.visible) {
                    if (_.alignment !== .5) {
                        const I = _.width * (.5 - (1 - _.alignment));
                        r.beginPath(),
                        r.arc(E.x, E.y, E.radius + I, 0, 2 * Math.PI),
                        r.closePath()
                    }
                    r.globalAlpha = _.alpha * n,
                    r.strokeStyle = l,
                    r.stroke()
                }
            } else if (g.type === Zt.ELIP) {
                const E = f
                  , I = _.alignment === 1;
                if (I || this.paintEllipse(E, v, _, o, n, r),
                _.visible) {
                    if (_.alignment !== .5) {
                        const S = .5522848
                          , P = _.width * (.5 - (1 - _.alignment))
                          , k = (E.width + P) * 2
                          , V = (E.height + P) * 2
                          , d = E.x - k / 2
                          , O = E.y - V / 2
                          , N = k / 2 * S
                          , z = V / 2 * S
                          , J = d + k
                          , $ = O + V
                          , B = d + k / 2
                          , W = O + V / 2;
                        r.beginPath(),
                        r.moveTo(d, W),
                        r.bezierCurveTo(d, W - z, B - N, O, B, O),
                        r.bezierCurveTo(B + N, O, J, W - z, J, W),
                        r.bezierCurveTo(J, W + z, B + N, $, B, $),
                        r.bezierCurveTo(B - N, $, d, W + z, d, W),
                        r.closePath()
                    }
                    r.globalAlpha = _.alpha * n,
                    r.strokeStyle = l,
                    r.stroke()
                }
                I && this.paintEllipse(E, v, _, o, n, r)
            } else if (g.type === Zt.RREC) {
                const E = f
                  , I = _.alignment === 1;
                if (I || this.paintRoundedRectangle(E, v, _, o, n, r),
                _.visible) {
                    if (_.alignment !== .5) {
                        const S = E.width
                          , P = E.height
                          , k = _.width * (.5 - (1 - _.alignment))
                          , V = E.x - k
                          , d = E.y - k
                          , O = E.width + 2 * k
                          , N = E.height + 2 * k
                          , z = k * (_.alignment >= 1 ? Math.min(O / S, N / P) : Math.min(S / O, P / N));
                        let J = E.radius + z;
                        const $ = Math.min(O, N) / 2;
                        J = J > $ ? $ : J,
                        r.beginPath(),
                        r.moveTo(V, d + J),
                        r.lineTo(V, d + N - J),
                        r.quadraticCurveTo(V, d + N, V + J, d + N),
                        r.lineTo(V + O - J, d + N),
                        r.quadraticCurveTo(V + O, d + N, V + O, d + N - J),
                        r.lineTo(V + O, d + J),
                        r.quadraticCurveTo(V + O, d, V + O - J, d),
                        r.lineTo(V + J, d),
                        r.quadraticCurveTo(V, d, V, d + J),
                        r.closePath()
                    }
                    r.globalAlpha = _.alpha * n,
                    r.strokeStyle = l,
                    r.stroke()
                }
                I && this.paintRoundedRectangle(E, v, _, o, n, r)
            }
        }
    }
    paintPolygonStroke(t, e, r, n, s, a, o) {
        if (e.alignment !== .5) {
            const l = e.width * (.5 - (1 - e.alignment));
            let c = ss.offsetPolygon(t.points, l), p;
            o.beginPath(),
            o.moveTo(c[0], c[1]);
            for (let g = 2; g < c.length; g += 2)
                o.lineTo(c[g], c[g + 1]);
            t.closeStroke && o.closePath();
            for (let g = 0; g < n.length; g++) {
                if (p = n[g].shape.points,
                c = ss.offsetPolygon(p, l),
                s[g]) {
                    o.moveTo(c[0], c[1]);
                    for (let f = 2; f < c.length; f += 2)
                        o.lineTo(c[f], c[f + 1])
                } else {
                    o.moveTo(c[c.length - 2], c[c.length - 1]);
                    for (let f = c.length - 4; f >= 0; f -= 2)
                        o.lineTo(c[f], c[f + 1])
                }
                n[g].shape.closeStroke && o.closePath()
            }
        }
        o.globalAlpha = e.alpha * a,
        o.strokeStyle = r,
        o.stroke()
    }
    paintEllipse(t, e, r, n, s, a) {
        const o = t.width * 2
          , l = t.height * 2
          , c = t.x - o / 2
          , p = t.y - l / 2
          , g = .5522848
          , f = o / 2 * g
          , v = l / 2 * g
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
        e.visible && (a.globalAlpha = e.alpha * s,
        a.fillStyle = n,
        a.fill()),
        r.alignment === 0 && a.restore()
    }
    paintRoundedRectangle(t, e, r, n, s, a) {
        const o = t.x
          , l = t.y
          , c = t.width
          , p = t.height;
        let g = t.radius;
        const f = Math.min(c, p) / 2;
        g = g > f ? f : g,
        r.alignment === 0 && a.save(),
        a.beginPath(),
        a.moveTo(o, l + g),
        a.lineTo(o, l + p - g),
        a.quadraticCurveTo(o, l + p, o + g, l + p),
        a.lineTo(o + c - g, l + p),
        a.quadraticCurveTo(o + c, l + p, o + c, l + p - g),
        a.lineTo(o + c, l + g),
        a.quadraticCurveTo(o + c, l, o + c - g, l),
        a.lineTo(o + g, l),
        a.quadraticCurveTo(o, l, o, l + g),
        a.closePath(),
        r.alignment === 0 && a.clip(),
        e.visible && (a.globalAlpha = e.alpha * s,
        a.fillStyle = n,
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
Qf.extension = {
    name: "graphics",
    type: rt.CanvasRendererPlugin
};
ot.add(Qf);
Object.defineProperties(st, {
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
_n.prototype._renderCanvas = function(i, t) {
    i.plugins.mesh.render(t)
}
;
Ya.prototype._cachedTint = 16777215;
Ya.prototype._tintedCanvas = null;
Ya.prototype._canvasUvs = null;
Ya.prototype._renderCanvas = function(i) {
    const t = i.canvasContext.activeContext
      , e = this.worldTransform
      , r = this.tintValue !== 16777215
      , n = this.texture;
    if (!n.valid)
        return;
    r && this._cachedTint !== this.tintValue && (this._cachedTint = this.tintValue,
    this._tintedCanvas = _e.getTintedCanvas(this, this.tintValue));
    const s = r ? this._tintedCanvas : n.baseTexture.getDrawableSource();
    this._canvasUvs || (this._canvasUvs = [0, 0, 0, 0, 0, 0, 0, 0]);
    const a = this.vertices
      , o = this._canvasUvs
      , l = r ? 0 : n.frame.x
      , c = r ? 0 : n.frame.y
      , p = l + n.frame.width
      , g = c + n.frame.height;
    o[0] = l,
    o[1] = l + this._leftWidth,
    o[2] = p - this._rightWidth,
    o[3] = p,
    o[4] = c,
    o[5] = c + this._topHeight,
    o[6] = g - this._bottomHeight,
    o[7] = g;
    for (let f = 0; f < 8; f++)
        o[f] *= n.baseTexture.resolution;
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
            t.drawImage(s, o[v], o[f + 4], T, A, a[_], a[_ + 1], E, I)
        }
}
;
let $c = !1;
Be.prototype._cachedTint = 16777215;
Be.prototype._tintedCanvas = null;
Be.prototype._cachedTexture = null;
Be.prototype._renderCanvas = function(i) {
    this.shader.uvMatrix && (this.shader.uvMatrix.update(),
    this.calculateUvs()),
    this.material._renderCanvas ? this.material._renderCanvas(i, this) : $c || ($c = !0,
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
Ob.prototype._renderCanvas = function(i) {
    this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(),
    this.shader.update && this.shader.update(),
    this.calculateUvs(),
    this.material._renderCanvas(i, this)
}
;
Nb.prototype._renderCanvas = function(i) {
    (this.autoUpdate || this.geometry._width !== this.shader.texture.height) && (this.geometry._width = this.shader.texture.height,
    this.geometry.update()),
    this.shader.update && this.shader.update(),
    this.calculateUvs(),
    this.material._renderCanvas(i, this)
}
;
class Jf {
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
            const n = r * 2;
            this._renderDrawTriangle(t, n, n + 2, n + 4)
        }
    }
    _renderTriangles(t) {
        const e = t.geometry.getIndex().data
          , r = e.length;
        for (let n = 0; n < r; n += 3) {
            const s = e[n] * 2
              , a = e[n + 1] * 2
              , o = e[n + 2] * 2;
            this._renderDrawTriangle(t, s, a, o)
        }
    }
    _renderDrawTriangle(t, e, r, n) {
        var dt;
        const s = this.renderer.canvasContext.activeContext
          , a = t.geometry.buffers[0].data
          , {uvs: o, texture: l} = t;
        if (!l.valid)
            return;
        const c = t.tintValue !== 16777215
          , p = l.baseTexture
          , g = p.width
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
          , A = o[n] * p.width
          , E = o[e + 1] * p.height
          , I = o[r + 1] * p.height
          , S = o[n + 1] * p.height;
        let P = a[e]
          , k = a[r]
          , V = a[n]
          , d = a[e + 1]
          , O = a[r + 1]
          , N = a[n + 1];
        const z = t.canvasPadding / this.renderer.canvasContext.activeResolution;
        if (z > 0) {
            const {a: Ft, b: Q, c: K, d: xt} = t.worldTransform
              , Ct = (P + k + V) / 3
              , It = (d + O + N) / 3;
            let kt = P - Ct
              , Ot = d - It
              , Mt = Ft * kt + K * Ot
              , Vt = Q * kt + xt * Ot
              , Yt = Math.sqrt(Mt * Mt + Vt * Vt)
              , Dt = 1 + z / Yt;
            P = Ct + kt * Dt,
            d = It + Ot * Dt,
            kt = k - Ct,
            Ot = O - It,
            Mt = Ft * kt + K * Ot,
            Vt = Q * kt + xt * Ot,
            Yt = Math.sqrt(Mt * Mt + Vt * Vt),
            Dt = 1 + z / Yt,
            k = Ct + kt * Dt,
            O = It + Ot * Dt,
            kt = V - Ct,
            Ot = N - It,
            Mt = Ft * kt + K * Ot,
            Vt = Q * kt + xt * Ot,
            Yt = Math.sqrt(Mt * Mt + Vt * Vt),
            Dt = 1 + z / Yt,
            V = Ct + kt * Dt,
            N = It + Ot * Dt
        }
        s.save(),
        s.beginPath(),
        s.moveTo(P, d),
        s.lineTo(k, O),
        s.lineTo(V, N),
        s.closePath(),
        s.clip();
        const J = _ * I + E * A + T * S - I * A - E * T - _ * S
          , $ = P * I + E * V + k * S - I * V - E * k - P * S
          , B = _ * k + P * A + T * V - k * A - P * T - _ * V
          , W = _ * I * V + E * k * A + P * T * S - P * I * A - E * T * V - _ * k * S
          , tt = d * I + E * N + O * S - I * N - E * O - d * S
          , at = _ * O + d * A + T * N - O * A - d * T - _ * N
          , nt = _ * I * N + E * O * A + d * T * S - d * I * A - E * T * N - _ * O * S;
        s.transform($ / J, tt / J, B / J, at / J, W / J, nt / J),
        s.drawImage(v, 0, 0, g * p.resolution, f * p.resolution, 0, 0, g, f),
        s.restore(),
        this.renderer.canvasContext.invalidateBlendMode()
    }
    renderMeshFlat(t) {
        const e = this.renderer.canvasContext.activeContext
          , r = t.geometry.getBuffer("aVertexPosition").data
          , n = r.length / 2;
        e.beginPath();
        for (let s = 1; s < n - 2; ++s) {
            const a = s * 2
              , o = r[a]
              , l = r[a + 1]
              , c = r[a + 2]
              , p = r[a + 3]
              , g = r[a + 4]
              , f = r[a + 5];
            e.moveTo(o, l),
            e.lineTo(c, p),
            e.lineTo(g, f)
        }
        e.fillStyle = "#FF0000",
        e.fill(),
        e.closePath()
    }
    destroy() {
        this.renderer = null
    }
}
Jf.extension = {
    name: "mesh",
    type: rt.CanvasRendererPlugin
};
ot.add(Jf);
const Vc = 16;
function n1(i, t) {
    const e = i;
    if (t instanceof Tt) {
        const r = t.source
          , n = r.width === 0 ? e.canvas.width : Math.min(e.canvas.width, r.width)
          , s = r.height === 0 ? e.canvas.height : Math.min(e.canvas.height, r.height);
        return e.ctx.drawImage(r, 0, 0, n, s, 0, 0, e.canvas.width, e.canvas.height),
        !0
    }
    return !1
}
class tp extends Aa {
    constructor(t) {
        super(t),
        this.uploadHookHelper = this,
        this.canvas = st.ADAPTER.createCanvas(Vc, Vc),
        this.ctx = this.canvas.getContext("2d"),
        this.registerUploadHook(n1)
    }
    destroy() {
        super.destroy(),
        this.ctx = null,
        this.canvas = null
    }
}
tp.extension = {
    name: "prepare",
    type: rt.CanvasRendererSystem
};
ot.add(tp);
Lr.prototype._tintedCanvas = null;
Lr.prototype._renderCanvas = function(i) {
    i.plugins.sprite.render(this)
}
;
const Wc = new jt;
class ep {
    constructor(t) {
        this.renderer = t
    }
    render(t) {
        const e = t._texture
          , r = this.renderer
          , n = r.canvasContext.activeContext
          , s = r.canvasContext.activeResolution;
        if (!e.valid)
            return;
        const a = e._frame.width
          , o = e._frame.height;
        let l = e._frame.width
          , c = e._frame.height;
        e.trim && (l = e.trim.width,
        c = e.trim.height);
        let p = t.transform.worldTransform
          , g = 0
          , f = 0;
        const v = e.baseTexture.getDrawableSource();
        if (e.orig.width <= 0 || e.orig.height <= 0 || !e.valid || !v)
            return;
        r.canvasContext.setBlendMode(t.blendMode, !0),
        n.globalAlpha = t.worldAlpha;
        const _ = e.baseTexture.scaleMode === hr.LINEAR
          , T = r.canvasContext.smoothProperty;
        T && n[T] !== _ && (n[T] = _),
        e.trim ? (g = e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width,
        f = e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height) : (g = (.5 - t.anchor.x) * e.orig.width,
        f = (.5 - t.anchor.y) * e.orig.height),
        e.rotate && (p.copyTo(Wc),
        p = Wc,
        ee.matrixAppendRotationInv(p, e.rotate, g, f),
        g = 0,
        f = 0),
        g -= l / 2,
        f -= c / 2,
        r.canvasContext.setContextTransform(p, t.roundPixels, 1),
        t.roundPixels && (g = g | 0,
        f = f | 0);
        const A = e.baseTexture.resolution
          , E = r.canvasContext._outerBlend;
        E && (n.save(),
        n.beginPath(),
        n.rect(g * s, f * s, l * s, c * s),
        n.clip()),
        t.tint !== 16777215 ? ((t._cachedTint !== t.tintValue || t._tintedCanvas.tintId !== t._texture._updateID) && (t._cachedTint = t.tintValue,
        t._tintedCanvas = _e.getTintedCanvas(t, t.tintValue)),
        n.drawImage(t._tintedCanvas, 0, 0, Math.floor(a * A), Math.floor(o * A), Math.floor(g * s), Math.floor(f * s), Math.floor(l * s), Math.floor(c * s))) : n.drawImage(v, e._frame.x * A, e._frame.y * A, Math.floor(a * A), Math.floor(o * A), Math.floor(g * s), Math.floor(f * s), Math.floor(l * s), Math.floor(c * s)),
        E && n.restore(),
        r.canvasContext.setBlendMode(q.NORMAL)
    }
    destroy() {
        this.renderer = null
    }
}
ep.extension = {
    name: "sprite",
    type: rt.CanvasRendererPlugin
};
ot.add(ep);
var Ml = {};
Ml.byteLength = o1;
Ml.toByteArray = l1;
Ml.fromByteArray = d1;
var Rr = []
  , ze = []
  , s1 = typeof Uint8Array < "u" ? Uint8Array : Array
  , lh = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ki = 0, a1 = lh.length; Ki < a1; ++Ki)
    Rr[Ki] = lh[Ki],
    ze[lh.charCodeAt(Ki)] = Ki;
ze[45] = 62;
ze[95] = 63;
function rp(i) {
    var t = i.length;
    if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var e = i.indexOf("=");
    e === -1 && (e = t);
    var r = e === t ? 0 : 4 - e % 4;
    return [e, r]
}
function o1(i) {
    var t = rp(i)
      , e = t[0]
      , r = t[1];
    return (e + r) * 3 / 4 - r
}
function h1(i, t, e) {
    return (t + e) * 3 / 4 - e
}
function l1(i) {
    var t, e = rp(i), r = e[0], n = e[1], s = new s1(h1(i, r, n)), a = 0, o = n > 0 ? r - 4 : r, l;
    for (l = 0; l < o; l += 4)
        t = ze[i.charCodeAt(l)] << 18 | ze[i.charCodeAt(l + 1)] << 12 | ze[i.charCodeAt(l + 2)] << 6 | ze[i.charCodeAt(l + 3)],
        s[a++] = t >> 16 & 255,
        s[a++] = t >> 8 & 255,
        s[a++] = t & 255;
    return n === 2 && (t = ze[i.charCodeAt(l)] << 2 | ze[i.charCodeAt(l + 1)] >> 4,
    s[a++] = t & 255),
    n === 1 && (t = ze[i.charCodeAt(l)] << 10 | ze[i.charCodeAt(l + 1)] << 4 | ze[i.charCodeAt(l + 2)] >> 2,
    s[a++] = t >> 8 & 255,
    s[a++] = t & 255),
    s
}
function u1(i) {
    return Rr[i >> 18 & 63] + Rr[i >> 12 & 63] + Rr[i >> 6 & 63] + Rr[i & 63]
}
function c1(i, t, e) {
    for (var r, n = [], s = t; s < e; s += 3)
        r = (i[s] << 16 & 16711680) + (i[s + 1] << 8 & 65280) + (i[s + 2] & 255),
        n.push(u1(r));
    return n.join("")
}
function d1(i) {
    for (var t, e = i.length, r = e % 3, n = [], s = 16383, a = 0, o = e - r; a < o; a += s)
        n.push(c1(i, a, a + s > o ? o : a + s));
    return r === 1 ? (t = i[e - 1],
    n.push(Rr[t >> 2] + Rr[t << 4 & 63] + "==")) : r === 2 && (t = (i[e - 2] << 8) + i[e - 1],
    n.push(Rr[t >> 10] + Rr[t >> 4 & 63] + Rr[t << 2 & 63] + "=")),
    n.join("")
}
var ip = {
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
                var I = v - E, S = f & 7, P = this._view[f >> 3], k = Math.min(I, 8 - S), V, d;
                this.bigEndian ? (V = ~(255 << k),
                d = P >> 8 - k - S & V,
                A <<= k,
                A |= d) : (V = ~(255 << k),
                d = P >> S & V,
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
                var E = _ - A, I = f & 7, S = f >> 3, P = Math.min(E, 8 - I), k, V, d;
                if (this.bigEndian) {
                    k = ~(-1 << P),
                    V = v >> _ - A - P & k;
                    var O = 8 - I - P;
                    d = ~(k << O),
                    this._view[S] = this._view[S] & d | V << O
                } else
                    k = ~(255 << P),
                    V = v & k,
                    v >>= P,
                    d = ~(k << I),
                    this._view[S] = this._view[S] & d | V << I;
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
          , n = function(f, v) {
            return function(_) {
                this._view[f](this._index, _),
                this._index += v
            }
        };
        function s(f, v) {
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
        var g = function(f, v, _) {
            var T = f instanceof ArrayBuffer || typeof Buffer < "u" && f instanceof Buffer;
            if (!(f instanceof e) && !T)
                throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");
            T ? this._view = new e(f,v,_) : this._view = f,
            this._index = 0,
            this._startIndex = 0,
            this._length = this._view.byteLength * 8
        };
        Object.defineProperty(g.prototype, "index", {
            get: function() {
                return this._index - this._startIndex
            },
            set: function(f) {
                this._index = f + this._startIndex
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(g.prototype, "length", {
            get: function() {
                return this._length - this._startIndex
            },
            set: function(f) {
                this._length = f + this._startIndex
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(g.prototype, "bitsLeft", {
            get: function() {
                return this._length - this._index
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(g.prototype, "byteIndex", {
            get: function() {
                return Math.ceil(this._index / 8)
            },
            set: function(f) {
                this._index = f * 8
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(g.prototype, "buffer", {
            get: function() {
                return this._view.buffer
            },
            enumerable: !0,
            configurable: !1
        }),
        Object.defineProperty(g.prototype, "view", {
            get: function() {
                return this._view
            },
            enumerable: !0,
            configurable: !1
        }),
        Object.defineProperty(g.prototype, "bigEndian", {
            get: function() {
                return this._view.bigEndian
            },
            set: function(f) {
                this._view.bigEndian = f
            },
            enumerable: !0,
            configurable: !1
        }),
        g.prototype.readBits = function(f, v) {
            var _ = this._view.getBits(this._index, f, v);
            return this._index += f,
            _
        }
        ,
        g.prototype.writeBits = function(f, v) {
            this._view.setBits(this._index, f, v),
            this._index += v
        }
        ,
        g.prototype.readBoolean = r("getBoolean", 1),
        g.prototype.readInt8 = r("getInt8", 8),
        g.prototype.readUint8 = r("getUint8", 8),
        g.prototype.readInt16 = r("getInt16", 16),
        g.prototype.readUint16 = r("getUint16", 16),
        g.prototype.readInt32 = r("getInt32", 32),
        g.prototype.readUint32 = r("getUint32", 32),
        g.prototype.readFloat32 = r("getFloat32", 32),
        g.prototype.readFloat64 = r("getFloat64", 64),
        g.prototype.writeBoolean = n("setBoolean", 1),
        g.prototype.writeInt8 = n("setInt8", 8),
        g.prototype.writeUint8 = n("setUint8", 8),
        g.prototype.writeInt16 = n("setInt16", 16),
        g.prototype.writeUint16 = n("setUint16", 16),
        g.prototype.writeInt32 = n("setInt32", 32),
        g.prototype.writeUint32 = n("setUint32", 32),
        g.prototype.writeFloat32 = n("setFloat32", 32),
        g.prototype.writeFloat64 = n("setFloat64", 64),
        g.prototype.readASCIIString = function(f) {
            return s(this, f)
        }
        ,
        g.prototype.readUTF8String = function(f) {
            return a(this, f)
        }
        ,
        g.prototype.writeASCIIString = function(f, v) {
            l(this, f, v)
        }
        ,
        g.prototype.writeUTF8String = function(f, v) {
            c(this, f, v)
        }
        ,
        g.prototype.readBitStream = function(f) {
            var v = new g(this._view);
            return v._startIndex = this._index,
            v._index = this._index,
            v.length = f,
            this._index += f,
            v
        }
        ,
        g.prototype.writeBitStream = function(f, v) {
            v || (v = f.bitsLeft);
            for (var _; v > 0; )
                _ = Math.min(v, 32),
                this.writeBits(f.readBits(_), _),
                v -= _
        }
        ,
        g.prototype.readArrayBuffer = function(f) {
            var v = this._view.getArrayBuffer(this._index, f);
            return this._index += f * 8,
            v
        }
        ,
        g.prototype.writeArrayBuffer = function(f, v) {
            this.writeBitStream(new g(f), v * 8)
        }
        ,
        i.exports && (i.exports = {
            BitView: e,
            BitStream: g
        })
    }
    )()
}
)(ip);
var f1 = ip.exports;
const m1 = Ca(f1);
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
      , n = "firstChild"
      , s = setTimeout;
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
    function g(d, O) {
        return parseInt(d, O)
    }
    function f(d) {
        return Math.round(d)
    }
    function v(d) {
        var O = +d[0], N = +d[1], z = +d[2], J, $, B, W, tt, at, nt, dt;
        switch (W = Math.floor(O * 6),
        tt = O * 6 - W,
        at = z * (1 - N),
        nt = z * (1 - tt * N),
        dt = z * (1 - (1 - tt) * N),
        W = W || 0,
        nt = nt || 0,
        dt = dt || 0,
        W % 6) {
        case 0:
            J = z,
            $ = dt,
            B = at;
            break;
        case 1:
            J = nt,
            $ = z,
            B = at;
            break;
        case 2:
            J = at,
            $ = z,
            B = dt;
            break;
        case 3:
            J = at,
            $ = nt,
            B = z;
            break;
        case 4:
            J = dt,
            $ = at,
            B = z;
            break;
        case 5:
            J = z,
            $ = at,
            B = nt;
            break
        }
        return [f(J * 255), f($ * 255), f(B * 255)]
    }
    function _(d) {
        return A(v(d))
    }
    function T(d) {
        var O = +d[0], N = +d[1], z = +d[2], J = Math.max(O, N, z), $ = Math.min(O, N, z), B = J - $, W, tt = J === 0 ? 0 : B / J, at = J / 255;
        switch (J) {
        case $:
            W = 0;
            break;
        case O:
            W = N - z + B * (N < z ? 6 : 0),
            W /= 6 * B;
            break;
        case N:
            W = z - O + B * 2,
            W /= 6 * B;
            break;
        case z:
            W = O - N + B * 4,
            W /= 6 * B;
            break
        }
        return [W, tt, at]
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
        [g(d[0] + d[1], 16), g(d[2] + d[3], 16), g(d[4] + d[5], 16)]
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
    function V(d) {
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
            return s(function() {
                var z = d[r], J;
                for (J in z)
                    O.call(z[J], J, z)
            }, N === 0 ? 0 : N || 1),
            d
        }
        ,
        d.parse = V,
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
          , $ = this
          , B = i[e]
          , W = !1
          , tt = {}
          , at = t.createElement("div")
          , nt = "touchstart mousedown"
          , dt = "touchmove mousemove"
          , Ft = "touchend mouseup"
          , Q = "orientationchange resize";
        if (!($ instanceof B))
            return new B(d,O);
        B[r][d.id || d.name || c(B[r])] = $,
        (!a(O) || O === !0) && (O = nt);
        function K(et, St, Wt) {
            et = et.split(/\s+/);
            for (var ie = 0, le = et.length; ie < le; ++ie)
                St.addEventListener(et[ie], Wt, !1)
        }
        function xt(et, St, Wt) {
            et = et.split(/\s+/);
            for (var ie = 0, le = et.length; ie < le; ++ie)
                St.removeEventListener(et[ie], Wt)
        }
        function Ct(et, St) {
            var Wt = "touches"
              , ie = "clientX"
              , le = "clientY"
              , ye = St[Wt] ? St[Wt][0][ie] : St[ie]
              , Ge = St[Wt] ? St[Wt][0][le] : St[le]
              , Gr = It(et);
            return {
                x: ye - Gr.l,
                y: Ge - Gr.t
            }
        }
        function It(et) {
            var St, Wt, ie;
            return et === i ? (St = i.pageXOffset || J.scrollLeft,
            Wt = i.pageYOffset || J.scrollTop) : (ie = et.getBoundingClientRect(),
            St = ie.left,
            Wt = ie.top),
            {
                l: St,
                t: Wt
            }
        }
        function kt(et, St) {
            for (; (et = et.parentElement) && et !== St; )
                ;
            return et
        }
        function Ot(et) {
            et && et.preventDefault()
        }
        function Mt(et) {
            return et === i ? {
                w: i.innerWidth,
                h: i.innerHeight
            } : {
                w: et.offsetWidth,
                h: et.offsetHeight
            }
        }
        function Vt(et) {
            return W || (a(et) ? et : !1)
        }
        function Yt(et) {
            W = et
        }
        function Dt(et, St, Wt) {
            return a(et) ? a(St) ? (a(tt[et]) || (tt[et] = {}),
            a(Wt) || (Wt = c(tt[et])),
            tt[et][Wt] = St,
            $) : tt[et] : tt
        }
        function qt(et, St) {
            return a(et) ? a(St) ? (delete tt[et][St],
            $) : (tt[et] = {},
            $) : (tt = {},
            $)
        }
        function _t(et, St, Wt) {
            if (!a(tt[et]))
                return $;
            if (a(Wt))
                a(tt[et][Wt]) && tt[et][Wt].apply($, St);
            else
                for (var ie in tt[et])
                    tt[et][ie].apply($, St);
            return $
        }
        Yt(B.parse(d.getAttribute("data-color") || d.value || [0, 1, 1])),
        at.className = "color-picker",
        at.innerHTML = '<div class="color-picker-container"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';
        var Kt = at[n].children, Xt = Vt([0, 1, 1]), me = Kt[0], Ee = Kt[1], fr = me[n], oe = Ee[n], Tn = 0, wn = 0, Ni = 0, Fe = 0, Ze = 0, Qe = 0, ft = 0, be = 0, Ae = [_(Xt)], En;
        function kr(et, St) {
            (!et || et === "h") && _t("change:h", St),
            (!et || et === "sv") && _t("change:sv", St),
            _t("change", St)
        }
        function Li() {
            return at.parentNode
        }
        function pi(et, St) {
            et || ((N || St || z).appendChild(at),
            $.visible = !0),
            ft = Mt(at).w,
            be = Mt(at).h;
            var Wt = Mt(Ee)
              , ie = Mt(oe)
              , le = Mt(me).h
              , ye = Wt.w
              , Ge = Wt.h
              , Gr = Mt(fr).h
              , Je = ie.w
              , pr = ie.h;
            if (et) {
                let Jt = function(te) {
                    var Re = te.target
                      , He = Re === d || kt(Re, d) === d;
                    He ? !Li() && (pi(),
                    _t("enter")) : $.exit()
                };
                at.style.left = at.style.top = "-9999px",
                O !== !1 && K(O, d, Jt),
                $.create = function() {
                    return pi(1),
                    _t("create"),
                    $
                }
                ,
                $.destroy = function() {
                    return O !== !1 && xt(O, d, Jt),
                    $.exit(),
                    Yt(!1),
                    _t("destroy"),
                    $
                }
            } else
                Ur();
            En = function() {
                Xt = Vt(Xt),
                Zr(),
                fr.style.top = le - Gr / 2 - le * +Xt[0] + "px",
                oe.style.right = ye - Je / 2 - ye * +Xt[1] + "px",
                oe.style.top = Ge - pr / 2 - Ge * +Xt[2] + "px"
            }
            ,
            $.exit = function(Jt) {
                var te = Li();
                return te && (te.removeChild(at),
                $.visible = !1),
                xt(nt, me, gs),
                xt(nt, Ee, An),
                xt(dt, t, ue),
                xt(Ft, t, ki),
                xt(Q, i, Ur),
                _t("exit"),
                $
            }
            ;
            function Zr(Jt) {
                v(Xt);
                var te = v([Xt[0], 1, 1]);
                Ee.style.backgroundColor = "rgb(" + te.join(",") + ")",
                Yt(Xt),
                Ot(Jt)
            }
            En();
            function ps(Jt) {
                var te = p(Ct(me, Jt).y, 0, le);
                Xt[0] = (le - te) / le,
                fr.style.top = te - Gr / 2 + "px",
                Zr(Jt)
            }
            function Oe(Jt) {
                var te = Ct(Ee, Jt)
                  , Re = p(te.x, 0, ye)
                  , He = p(te.y, 0, Ge);
                Xt[1] = 1 - (ye - Re) / ye,
                Xt[2] = (Ge - He) / Ge,
                oe.style.right = ye - Re - Je / 2 + "px",
                oe.style.top = He - pr / 2 + "px",
                Zr(Jt)
            }
            function ue(Jt) {
                Ni && (ps(Jt),
                Ae = [_(Xt)],
                Tn || (_t("drag:h", Ae),
                _t("drag", Ae),
                kr("h", Ae))),
                Fe && (Oe(Jt),
                Ae = [_(Xt)],
                wn || (_t("drag:sv", Ae),
                _t("drag", Ae),
                kr("sv", Ae))),
                Tn = 0,
                wn = 0
            }
            function ki(Jt) {
                var te = Jt.target
                  , Re = Ni ? "h" : "sv"
                  , He = [_(Xt), $]
                  , Ui = te === d || kt(te, d) === d
                  , ms = te === at || kt(te, at) === at;
                !Ui && !ms ? Li() && O !== !1 && ($.exit(),
                kr(0, He)) : ms && (_t("stop:" + Re, He),
                _t("stop", He),
                kr(Re, He)),
                Ni = 0,
                Fe = 0
            }
            function gs(Jt) {
                Tn = 1,
                Ni = 1,
                ue(Jt),
                Ot(Jt),
                _t("start:h", Ae),
                _t("start", Ae),
                kr("h", Ae)
            }
            function An(Jt) {
                wn = 1,
                Fe = 1,
                ue(Jt),
                Ot(Jt),
                _t("start:sv", Ae),
                _t("start", Ae),
                kr("sv", Ae)
            }
            et || (K(nt, me, gs),
            K(nt, Ee, An),
            K(dt, t, ue),
            K(Ft, t, ki),
            K(Q, i, Ur))
        }
        pi(1),
        s(function() {
            var et = [_(Xt)];
            _t("create", et),
            kr(0, et)
        }, 0),
        $.fit = function(et) {
            var St = Mt(i)
              , Wt = Mt(J)
              , ie = St.w - Wt.w
              , le = St.h - J.clientHeight
              , ye = It(i)
              , Ge = It(d);
            if (Ze = Ge.l + ye.l,
            Qe = Ge.t + ye.t + Mt(d).h,
            l(et))
                a(et[0]) && (Ze = et[0]),
                a(et[1]) && (Qe = et[1]);
            else {
                var Gr = ye.l
                  , Je = ye.t
                  , pr = ye.l + St.w - ft - ie
                  , Zr = ye.t + St.h - be - le;
                Ze = p(Ze, Gr, pr) >> 0,
                Qe = p(Qe, Je, Zr) >> 0
            }
            return at.style.left = Ze + "px",
            at.style.top = Qe + "px",
            _t("fit"),
            $
        }
        ;
        function Ur() {
            return $.fit()
        }
        return $.set = function(et) {
            return a(et) ? (o(et) && (et = B.parse(et)),
            Yt(et),
            En(),
            $) : Vt()
        }
        ,
        $.get = function(et) {
            return Vt(et)
        }
        ,
        $.source = d,
        $.self = at,
        $.visible = !1,
        $.on = Dt,
        $.off = qt,
        $.fire = _t,
        $.hooks = tt,
        $.enter = function(et) {
            return pi(0, et),
            _t("enter"),
            $
        }
        ,
        $
    }
    )
}
)(window, document, "CP");
export {p1 as $, ix as A, m1 as B, Ue as C, fs as G, Bt as P, Or as R, Lr as S, ut as T, ui as a, Sl as b, hr as c, ul as d, Ml as e, kc as f, Ye as g, Pr as i, st as s};
