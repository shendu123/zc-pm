Array.isArray || (Array.isArray = function (e) {
    return Object.prototype.toString.call(e) === "[object Array]"
})
Array.prototype.every || (Array.prototype.every = function (e) {
    "use strict";
    if (this == null) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if (typeof e != "function") throw new TypeError;
    var r = arguments[1];
    for (var i = 0; i < n; i++)
        if (i in t && !e.call(r, t[i], i, t)) return !1;
    return !0
})
Array.prototype.filter || (Array.prototype.filter = function (e) {
    "use strict";
    if (this == null) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if (typeof e != "function") throw new TypeError;
    var r = [],
        i = arguments[1];
    for (var s = 0; s < n; s++)
        if (s in t) {
            var o = t[s];
            e.call(i, o, s, t) && r.push(o)
        }
    return r
})
Array.prototype.forEach || (Array.prototype.forEach = function (t, n) {
    var r, i;
    if (this == null) throw new TypeError("this is null or not defined");
    var s = Object(this),
        o = s.length >>> 0;
    if ({}.toString.call(t) !== "[object Function]") throw new TypeError(t + " is not a function");
    n && (r = n), i = 0;
    while (i < o) {
        var u;
        Object.prototype.hasOwnProperty.call(s, i) && (u = s[i], t.call(r, u, i, s)), i++
    }
})
Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
    "use strict";
    if (this == null) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if (n === 0) return -1;
    var r = 0;
    arguments.length > 1 && (r = Number(arguments[1]), r != r ? r = 0 : r != 0 && r != Infinity && r != -Infinity && (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
    if (r >= n) return -1;
    var i = r >= 0 ? r : Math.max(n - Math.abs(r), 0);
    for (; i < n; i++)
        if (i in t && t[i] === e) return i;
    return -1
})
Array.prototype.lastIndexOf || (Array.prototype.lastIndexOf = function (e) {
    "use strict";
    if (this == null) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if (n === 0) return -1;
    var r = n;
    arguments.length > 1 && (r = Number(arguments[1]), r != r ? r = 0 : r != 0 && r != 1 / 0 && r != -(1 / 0) && (r = (r > 0 || -1) * Math.floor(Math.abs(r))));
    var i = r >= 0 ? Math.min(r, n - 1) : n - Math.abs(r);
    for (; i >= 0; i--)
        if (i in t && t[i] === e) return i;
    return -1
})
Array.prototype.map || (Array.prototype.map = function (e, t) {
    var n, r, i;
    if (this == null) throw new TypeError(" this is null or not defined");
    var s = Object(this),
        o = s.length >>> 0;
    if (typeof e != "function") throw new TypeError(e + " is not a function");
    t && (n = t), r = new Array(o), i = 0;
    while (i < o) {
        var u, a;
        i in s && (u = s[i], a = e.call(n, u, i, s), r[i] = a), i++
    }
    return r
})
Array.prototype.reduce || (Array.prototype.reduce = function (t) {
    if (this === null || this === undefined) throw new TypeError("Object is null or undefined");
    var n = 0,
        r = this.length >> 0,
        i;
    if (typeof t != "function") throw new TypeError("First argument is not callable");
    if (arguments.length < 2) {
        if (r === 0) throw new TypeError("Array length is 0 and no second argument");
        i = this[0], n = 1
    } else i = arguments[1];
    while (n < r) n in this && (i = t.call(undefined, i, this[n], n, this)), ++n;
    return i
})
Array.prototype.reduceRight || (Array.prototype.reduceRight = function (e) {
    "use strict";
    if (this == null) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if (typeof e != "function") throw new TypeError;
    if (n === 0 && arguments.length === 1) throw new TypeError;
    var r = n - 1,
        i;
    if (arguments.length >= 2) i = arguments[1];
    else
        do {
            if (r in this) {
                i = this[r--];
                break
            }
            if (--r < 0) throw new TypeError
        } while (!0);
    while (r >= 0) r in t && (i = e.call(undefined, i, t[r], r, t)), r--;
    return i
})
Array.prototype.some || (Array.prototype.some = function (e) {
    "use strict";
    if (this == null) throw new TypeError;
    var t = Object(this),
        n = t.length >>> 0;
    if (typeof e != "function") throw new TypeError;
    var r = arguments[1];
    for (var i = 0; i < n; i++)
        if (i in t && e.call(r, t[i], i, t)) return !0;
    return !1
})
Date.now || (Date.now = function () {
    return +(new Date)
})
Date.prototype.toISOString || (Date.prototype.toISOString = function () {
    function e(e) {
        var t = String(e);
        return t.length === 1 && (t = "0" + t), t
    }

    return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5) + "Z"
})
Function.prototype.bind || (Function.prototype.bind = function (e) {
    if (typeof this != "function") throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var t = Array.prototype.slice.call(arguments, 1),
        n = this,
        r = function () {
        },
        i = function () {
            return n.apply(this instanceof r && e ? this : e, t.concat(Array.prototype.slice.call(arguments)))
        };
    return r.prototype = this.prototype, i.prototype = new r, i
})
Object.keys || (Object.keys = function () {
    var e = Object.prototype.hasOwnProperty,
        t = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        r = n.length;
    return function (i) {
        if (typeof i != "object" && typeof i != "function" || i === null) throw new TypeError("Object.keys called on non-object");
        var s = [];
        for (var o in i) e.call(i, o) && s.push(o);
        if (t)
            for (var u = 0; u < r; u++) e.call(i, n[u]) && s.push(n[u]);
        return s
    }
}())
String.prototype.trim || (String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g, "")
})
(function () {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }

    function quote(e) {
        return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function (e) {
                var t = meta[e];
                return typeof t == "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var n, r, i, s, o = gap,
            u, a = t[e];
        a && typeof a == "object" && typeof a.toJSON == "function" && (a = a.toJSON(e)), typeof rep == "function" && (a = rep.call(t, e, a));
        switch (typeof a) {
            case "string":
                return quote(a);
            case "number":
                return isFinite(a) ? String(a) : "null";
            case "boolean":
            case "null":
                return String(a);
            case "object":
                if (!a) return "null";
                gap += indent, u = [];
                if (Object.prototype.toString.apply(a) === "[object Array]") {
                    s = a.length;
                    for (n = 0; n < s; n += 1) u[n] = str(n, a) || "null";
                    return i = u.length === 0 ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + o + "]" : "[" + u.join(",") + "]", gap = o, i
                }
                if (rep && typeof rep == "object") {
                    s = rep.length;
                    for (n = 0; n < s; n += 1) r = rep[n], typeof r == "string" && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i))
                } else
                    for (r in a) Object.hasOwnProperty.call(a, r) && (i = str(r, a), i && u.push(quote(r) + (gap ? ": " : ":") + i));
                return i = u.length === 0 ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + o + "}" : "{" + u.join(",") + "}", gap = o, i
        }
    }

    typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function (e) {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (e) {
        return this.valueOf()
    });
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;
    typeof JSON.stringify != "function" && (JSON.stringify = function (e, t, n) {
        var r;
        gap = "", indent = "";
        if (typeof n == "number")
            for (r = 0; r < n; r += 1) indent += " ";
        else typeof n == "string" && (indent = n);
        rep = t;
        if (!t || typeof t == "function" || typeof t == "object" && typeof t.length == "number") return str("", {
            "": e
        });
        throw new Error("JSON.stringify")
    }), typeof JSON.parse != "function" && (JSON.parse = function (text, reviver) {
        function walk(e, t) {
            var n, r, i = e[t];
            if (i && typeof i == "object")
                for (n in i) Object.hasOwnProperty.call(i, n) && (r = walk(i, n), r !== undefined ? i[n] = r : delete i[n]);
            return reviver.call(e, t, i)
        }

        var j;
        text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (e) {
            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse")
    })
})()
/* State-based routing for AngularJS @version v0.2.13*/
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function (a, b, c) {
        "use strict";

        function d(a, b) {
            return M(new (M(function () {
            }, {
                prototype: a
            })), b)
        }

        function e(a) {
            return L(arguments, function (b) {
                b !== a && L(b, function (b, c) {
                    a.hasOwnProperty(c) || (a[c] = b)
                })
            }), a
        }

        function f(a, b) {
            var c = [];
            for (var d in a.path) {
                if (a.path[d] !== b.path[d]) break;
                c.push(a.path[d])
            }
            return c
        }

        function g(a) {
            if (Object.keys) return Object.keys(a);
            var c = [];
            return b.forEach(a, function (a, b) {
                c.push(b)
            }), c
        }

        function h(a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
            var c = a.length >>> 0,
                d = Number(arguments[2]) || 0;
            for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)
                if (d in a && a[d] === b) return d;
            return -1
        }

        function i(a, b, c, d) {
            var e, i = f(c, d),
                j = {},
                k = [];
            for (var l in i)
                if (i[l].params && (e = g(i[l].params), e.length))
                    for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
            return M({}, j, b)
        }

        function j(a, b, c) {
            if (!c) {
                c = [];
                for (var d in a) c.push(d)
            }
            for (var e = 0; e < c.length; e++) {
                var f = c[e];
                if (a[f] != b[f]) return !1
            }
            return !0
        }

        function k(a, b) {
            var c = {};
            return L(a, function (a) {
                c[a] = b[a]
            }), c
        }

        function l(a) {
            var b = {},
                c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var d in a) -1 == h(c, d) && (b[d] = a[d]);
            return b
        }

        function m(a, b) {
            var c = K(a),
                d = c ? [] : {};
            return L(a, function (a, e) {
                b(a, e) && (d[c ? d.length : e] = a)
            }), d
        }

        function n(a, b) {
            var c = K(a) ? [] : {};
            return L(a, function (a, d) {
                c[d] = b(a, d)
            }), c
        }

        function o(a, b) {
            var d = 1,
                f = 2,
                i = {},
                j = [],
                k = i,
                m = M(a.when(i), {
                    $$promises: i,
                    $$values: i
                });
            this.study = function (i) {
                function n(a, c) {
                    if (s[c] !== f) {
                        if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
                        if (s[c] = d, I(a)) q.push(c, [
                            function () {
                                return b.get(a)
                            }
                        ], j);
                        else {
                            var e = b.annotate(a);
                            L(e, function (a) {
                                a !== c && i.hasOwnProperty(a) && n(i[a], a)
                            }), q.push(c, a, e)
                        }
                        r.pop(), s[c] = f
                    }
                }

                function o(a) {
                    return J(a) && a.then && a.$$promises
                }

                if (!J(i)) throw new Error("'invocables' must be an object");
                var p = g(i || {}),
                    q = [],
                    r = [],
                    s = {};
                return L(i, n), i = r = s = null,
                    function (d, f, g) {
                        function h() {
                            --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
                        }

                        function i(a) {
                            r.$$failure = a, n.reject(a)
                        }

                        function j(c, e, f) {
                            function j(a) {
                                l.reject(a), i(a)
                            }

                            function k() {
                                if (!G(r.$$failure)) try {
                                    l.resolve(b.invoke(e, g, t)), l.promise.then(function (a) {
                                        t[c] = a, h()
                                    }, j)
                                } catch (a) {
                                    j(a)
                                }
                            }

                            var l = a.defer(),
                                m = 0;
                            L(f, function (a) {
                                s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function (b) {
                                    t[a] = b, --m || k()
                                }, j))
                            }), m || k(), s[c] = l.promise
                        }

                        if (o(d) && g === c && (g = f, f = d, d = null), d) {
                            if (!J(d)) throw new Error("'locals' must be an object")
                        } else d = k;
                        if (f) {
                            if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else f = m;
                        var n = a.defer(),
                            r = n.promise,
                            s = r.$$promises = {},
                            t = M({}, d),
                            u = 1 + q.length / 3,
                            v = !1;
                        if (G(f.$$failure)) return i(f.$$failure), r;
                        f.$$inheritedValues && e(t, l(f.$$inheritedValues, p)), M(s, f.$$promises), f.$$values ? (v = e(t, l(f.$$values, p)), r.$$inheritedValues = l(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = l(f.$$inheritedValues, p)), f.then(h, i));
                        for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
                        return r
                    }
            }, this.resolve = function (a, b, c, d) {
                return this.study(a)(b, c, d)
            }
        }

        function p(a, b, c) {
            this.fromConfig = function (a, b, c) {
                return G(a.template) ? this.fromString(a.template, b) : G(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : G(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
            }, this.fromString = function (a, b) {
                return H(a) ? a(b) : a
            }, this.fromUrl = function (c, d) {
                return H(c) && (c = c(d)), null == c ? null : a.get(c, {
                    cache: b,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function (a) {
                    return a.data
                })
            }, this.fromProvider = function (a, b, d) {
                return c.invoke(a, null, d || {
                        params: b
                    })
            }
        }

        function q(a, b, e) {
            function f(b, c, d, e) {
                if (q.push(b), o[b]) return o[b];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
                if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
                return p[b] = new O.Param(b, c, d, e), p[b]
            }

            function g(a, b, c) {
                var d = ["", ""],
                    e = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!b) return e;
                switch (c) {
                    case !1:
                        d = ["(", ")"];
                        break;
                    case !0:
                        d = ["?(", ")?"];
                        break;
                    default:
                        d = ["(" + c + "|", ")?"]
                }
                return e + d[0] + b + d[1]
            }

            function h(c, e) {
                var f, g, h, i, j;
                return f = c[2] || c[3], j = b.params[f], h = a.substring(m, c.index), g = e ? c[4] : c[4] || ("*" == c[1] ? ".*" : null), i = O.type(g || "string") || d(O.type("string"), {
                        pattern: new RegExp(g)
                    }), {
                    id: f,
                    regexp: g,
                    segment: h,
                    type: i,
                    cfg: j
                }
            }

            b = M({
                params: {}
            }, J(b) ? b : {});
            var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                l = "^",
                m = 0,
                n = this.segments = [],
                o = e ? e.params : {},
                p = this.params = e ? e.params.$$new() : new O.ParamSet,
                q = [];
            this.source = a;
            for (var r, s, t;
                 (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash), n.push(r.segment), m = j.lastIndex;
            t = a.substring(m);
            var u = t.indexOf("?");
            if (u >= 0) {
                var v = this.sourceSearch = t.substring(u);
                if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0)
                    for (m = 0; i = k.exec(v);) r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
            } else this.sourcePath = a, this.sourceSearch = "";
            l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
        }

        function r(a) {
            M(this, a)
        }

        function s() {
            function a(a) {
                return null != a ? a.toString().replace(/\//g, "%2F") : a
            }

            function e(a) {
                return null != a ? a.toString().replace(/%2F/g, "/") : a
            }

            function f(a) {
                return this.pattern.test(a)
            }

            function i() {
                return {
                    strict: t,
                    caseInsensitive: p
                }
            }

            function j(a) {
                return H(a) || K(a) && H(a[a.length - 1])
            }

            function k() {
                for (; x.length;) {
                    var a = x.shift();
                    if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    b.extend(v[a.name], o.invoke(a.def))
                }
            }

            function l(a) {
                M(this, a || {})
            }

            O = this;
            var o, p = !1,
                t = !0,
                u = !1,
                v = {},
                w = !0,
                x = [],
                y = {
                    string: {
                        encode: a,
                        decode: e,
                        is: f,
                        pattern: /[^/]*/
                    },
                    "int": {
                        encode: a,
                        decode: function (a) {
                            return parseInt(a, 10)
                        }, is: function (a) {
                            return G(a) && this.decode(a.toString()) === a
                        }, pattern: /\d+/
                    },
                    bool: {
                        encode: function (a) {
                            return a ? 1 : 0
                        }, decode: function (a) {
                            return 0 !== parseInt(a, 10)
                        }, is: function (a) {
                            return a === !0 || a === !1
                        }, pattern: /0|1/
                    },
                    date: {
                        encode: function (a) {
                            return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
                        }, decode: function (a) {
                            if (this.is(a)) return a;
                            var b = this.capture.exec(a);
                            return b ? new Date(b[1], b[2] - 1, b[3]) : c
                        }, is: function (a) {
                            return a instanceof Date && !isNaN(a.valueOf())
                        }, equals: function (a, b) {
                            return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
                        }, pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: b.toJson,
                        decode: b.fromJson,
                        is: b.isObject,
                        equals: b.equals,
                        pattern: /[^/]*/
                    },
                    any: {
                        encode: b.identity,
                        decode: b.identity,
                        is: b.identity,
                        equals: b.equals,
                        pattern: /.*/
                    }
                };
            s.$$getDefaultValue = function (a) {
                if (!j(a.value)) return a.value;
                if (!o) throw new Error("Injectable functions cannot be called at configuration time");
                return o.invoke(a.value)
            }, this.caseInsensitive = function (a) {
                return G(a) && (p = a), p
            }, this.strictMode = function (a) {
                return G(a) && (t = a), t
            }, this.defaultSquashPolicy = function (a) {
                if (!G(a)) return u;
                if (a !== !0 && a !== !1 && !I(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
                return u = a, a
            }, this.compile = function (a, b) {
                return new q(a, M(i(), b))
            }, this.isMatcher = function (a) {
                if (!J(a)) return !1;
                var b = !0;
                return L(q.prototype, function (c, d) {
                    H(c) && (b = b && G(a[d]) && H(a[d]))
                }), b
            }, this.type = function (a, b, c) {
                if (!G(b)) return v[a];
                if (v.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
                return v[a] = new r(M({
                    name: a
                }, b)), c && (x.push({
                    name: a,
                    def: c
                }), w || k()), this
            }, L(y, function (a, b) {
                v[b] = new r(M({
                    name: b
                }, a))
            }), v = d(v, {}), this.$get = ["$injector",
                function (a) {
                    return o = a, w = !1, k(), L(y, function (a, b) {
                        v[b] || (v[b] = new r(a))
                    }), this
                }
            ], this.Param = function (a, b, d, e) {
                function f(a) {
                    var b = J(a) ? g(a) : [],
                        c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
                    return c && (a = {
                        value: a
                    }), a.$$fn = j(a.value) ? a.value : function () {
                        return a.value
                    }, a
                }

                function i(b, c, d) {
                    if (b.type && c) throw new Error("Param '" + a + "' has two type configurations.");
                    return c ? c : b.type ? b.type instanceof r ? b.type : new r(b.type) : "config" === d ? v.any : v.string
                }

                function k() {
                    var b = {
                            array: "search" === e ? "auto" : !1
                        },
                        c = a.match(/\[\]$/) ? {
                            array: !0
                        } : {};
                    return M(b, c, d).array
                }

                function l(a, b) {
                    var c = a.squash;
                    if (!b || c === !1) return !1;
                    if (!G(c) || null == c) return u;
                    if (c === !0 || I(c)) return c;
                    throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
                }

                function p(a, b, d, e) {
                    var f, g, i = [{
                        from: "",
                        to: d || b ? c : ""
                    }, {
                        from: null,
                        to: d || b ? c : ""
                    }];
                    return f = K(a.replace) ? a.replace : [], I(e) && f.push({
                        from: e,
                        to: c
                    }), g = n(f, function (a) {
                        return a.from
                    }), m(i, function (a) {
                        return -1 === h(g, a.from)
                    }).concat(f)
                }

                function q() {
                    if (!o) throw new Error("Injectable functions cannot be called at configuration time");
                    return o.invoke(d.$$fn)
                }

                function s(a) {
                    function b(a) {
                        return function (b) {
                            return b.from === a
                        }
                    }

                    function c(a) {
                        var c = n(m(w.replace, b(a)), function (a) {
                            return a.to
                        });
                        return c.length ? c[0] : a
                    }

                    return a = c(a), G(a) ? w.type.decode(a) : q()
                }

                function t() {
                    return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}"
                }

                var w = this;
                d = f(d), b = i(d, b, e);
                var x = k();
                b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");
                var y = d.value !== c,
                    z = l(d, y),
                    A = p(d, x, y, z);
                M(this, {
                    id: a,
                    type: b,
                    location: e,
                    array: x,
                    squash: z,
                    replace: A,
                    isOptional: y,
                    value: s,
                    dynamic: c,
                    config: d,
                    toString: t
                })
            }, l.prototype = {
                $$new: function () {
                    return d(this, M(new l, {
                        $$parent: this
                    }))
                }, $$keys: function () {
                    for (var a = [], b = [], c = this, d = g(l.prototype); c;) b.push(c), c = c.$$parent;
                    return b.reverse(), L(b, function (b) {
                        L(g(b), function (b) {
                            -1 === h(a, b) && -1 === h(d, b) && a.push(b)
                        })
                    }), a
                }, $$values: function (a) {
                    var b = {},
                        c = this;
                    return L(c.$$keys(), function (d) {
                        b[d] = c[d].value(a && a[d])
                    }), b
                }, $$equals: function (a, b) {
                    var c = !0,
                        d = this;
                    return L(d.$$keys(), function (e) {
                        var f = a && a[e],
                            g = b && b[e];
                        d[e].type.equals(f, g) || (c = !1)
                    }), c
                }, $$validates: function (a) {
                    var b, c, d, e = !0,
                        f = this;
                    return L(this.$$keys(), function (g) {
                        d = f[g], c = a[g], b = !c && d.isOptional, e = e && (b || !!d.type.is(c))
                    }), e
                }, $$parent: c
            }, this.ParamSet = l
        }

        function t(a, d) {
            function e(a) {
                var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
                return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
            }

            function f(a, b) {
                return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
                    return b["$" === c ? 0 : Number(c)]
                })
            }

            function g(a, b, c) {
                if (!c) return !1;
                var d = a.invoke(b, b, {
                    $match: c
                });
                return G(d) ? d : !0
            }

            function h(d, e, f, g) {
                function h(a, b, c) {
                    return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a
                }

                function m(a) {
                    function b(a) {
                        var b = a(f, d);
                        return b ? (I(b) && d.replace().url(b), !0) : !1
                    }

                    if (!a || !a.defaultPrevented) {
                        var e = o && d.url() === o;
                        if (o = c, e) return !0;
                        var g, h = j.length;
                        for (g = 0; h > g; g++)
                            if (b(j[g])) return;
                        k && b(k)
                    }
                }

                function n() {
                    return i = i || e.$on("$locationChangeSuccess", m)
                }

                var o, p = g.baseHref(),
                    q = d.url();
                return l || n(), {
                    sync: function () {
                        m()
                    }, listen: function () {
                        return n()
                    }, update: function (a) {
                        return a ? void(q = d.url()) : void(d.url() !== q && (d.url(q), d.replace()))
                    }, push: function (a, b, e) {
                        d.url(a.format(b || {})), o = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
                    }, href: function (c, e, f) {
                        if (!c.validates(e)) return null;
                        var g = a.html5Mode();
                        b.isObject(g) && (g = g.enabled);
                        var i = c.format(e);
                        if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), i = h(i, g, f.absolute), !f.absolute || !i) return i;
                        var j = !g && i ? "/" : "",
                            k = d.port();
                        return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
                    }
                }
            }

            var i, j = [],
                k = null,
                l = !1;
            this.rule = function (a) {
                if (!H(a)) throw new Error("'rule' must be a function");
                return j.push(a), this
            }, this.otherwise = function (a) {
                if (I(a)) {
                    var b = a;
                    a = function () {
                        return b
                    }
                } else if (!H(a)) throw new Error("'rule' must be a function");
                return k = a, this
            }, this.when = function (a, b) {
                var c, h = I(b);
                if (I(a) && (a = d.compile(a)), !h && !H(b) && !K(b)) throw new Error("invalid 'handler' in when()");
                var i = {
                        matcher: function (a, b) {
                            return h && (c = d.compile(b), b = ["$match",
                                function (a) {
                                    return c.format(a)
                                }
                            ]), M(function (c, d) {
                                return g(c, b, a.exec(d.path(), d.search()))
                            }, {
                                prefix: I(a.prefix) ? a.prefix : ""
                            })
                        }, regex: function (a, b) {
                            if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
                            return h && (c = b, b = ["$match",
                                function (a) {
                                    return f(c, a)
                                }
                            ]), M(function (c, d) {
                                return g(c, b, a.exec(d.path()))
                            }, {
                                prefix: e(a)
                            })
                        }
                    },
                    j = {
                        matcher: d.isMatcher(a),
                        regex: a instanceof RegExp
                    };
                for (var k in j)
                    if (j[k]) return this.rule(i[k](a, b));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function (a) {
                a === c && (a = !0), l = a
            }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function u(a, e) {
            function f(a) {
                return 0 === a.indexOf(".") || 0 === a.indexOf("^")
            }

            function l(a, b) {
                if (!a) return c;
                var d = I(a),
                    e = d ? a : a.name,
                    g = f(e);
                if (g) {
                    if (!b) throw new Error("No reference point given for path '" + e + "'");
                    b = l(b);
                    for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)
                        if ("" !== h[i] || 0 !== i) {
                            if ("^" !== h[i]) break;
                            if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                            k = k.parent
                        } else k = b;
                    h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
                }
                var m = y[e];
                return !m || !d && (d || m !== a && m.self !== a) ? c : m
            }

            function m(a, b) {
                z[a] || (z[a] = []), z[a].push(b)
            }

            function o(a) {
                for (var b = z[a] || []; b.length;) p(b.shift())
            }

            function p(b) {
                b = d(b, {
                    self: b,
                    resolve: b.resolve || {}, toString: function () {
                        return this.name
                    }
                });
                var c = b.name;
                if (!I(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (y.hasOwnProperty(c)) throw new Error("State '" + c + "'' is already defined");
                var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : I(b.parent) ? b.parent : J(b.parent) && I(b.parent.name) ? b.parent.name : "";
                if (e && !y[e]) return m(e, b.self);
                for (var f in B) H(B[f]) && (b[f] = B[f](b, B.$delegates[f]));
                return y[c] = b, !b[A] && b.url && a.when(b.url, ["$match", "$stateParams",
                    function (a, c) {
                        x.$current.navigable == b && j(a, c) || x.transitionTo(b, a, {
                            inherit: !0,
                            location: !1
                        })
                    }
                ]), o(c), b
            }

            function q(a) {
                return a.indexOf("*") > -1
            }

            function r(a) {
                var b = a.split("."),
                    c = x.$current.name.split(".");
                if ("**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length) return !1;
                for (var d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
                return c.join("") === b.join("")
            }

            function s(a, b) {
                return I(a) && !G(b) ? B[a] : H(b) && I(a) ? (B[a] && !B.$delegates[a] && (B.$delegates[a] = B[a]), B[a] = b, this) : this
            }

            function t(a, b) {
                return J(a) ? b = a : b.name = a, p(b), this
            }

            function u(a, e, f, h, m, o, p) {
                function s(b, c, d, f) {
                    var g = a.$broadcast("$stateNotFound", b, c, d);
                    if (g.defaultPrevented) return p.update(), B;
                    if (!g.retry) return null;
                    if (f.$retry) return p.update(), C;
                    var h = x.transition = e.when(g.retry);
                    return h.then(function () {
                        return h !== x.transition ? u : (b.options.$retry = !0, x.transitionTo(b.to, b.toParams, b.options))
                    }, function () {
                        return B
                    }), p.update(), h
                }

                function t(a, c, d, g, i, j) {
                    var l = d ? c : k(a.params.$$keys(), c),
                        n = {
                            $stateParams: l
                        };
                    i.resolve = m.resolve(a.resolve, n, i.resolve, a);
                    var o = [i.resolve.then(function (a) {
                        i.globals = a
                    })];
                    return g && o.push(g), L(a.views, function (c, d) {
                        var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};
                        e.$template = [
                            function () {
                                return f.load(d, {
                                        view: c,
                                        locals: n,
                                        params: l,
                                        notify: j.notify
                                    }) || ""
                            }
                        ], o.push(m.resolve(e, n, i.resolve, a).then(function (f) {
                            if (H(c.controllerProvider) || K(c.controllerProvider)) {
                                var g = b.extend({}, e, n);
                                f.$$controller = h.invoke(c.controllerProvider, null, g)
                            } else f.$$controller = c.controller;
                            f.$$state = a, f.$$controllerAs = c.controllerAs, i[d] = f
                        }))
                    }), e.all(o).then(function () {
                        return i
                    })
                }

                var u = e.reject(new Error("transition superseded")),
                    z = e.reject(new Error("transition prevented")),
                    B = e.reject(new Error("transition aborted")),
                    C = e.reject(new Error("transition failed"));
                return w.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, x = {
                    params: {},
                    current: w.self,
                    $current: w,
                    transition: null
                }, x.reload = function () {
                    return x.transitionTo(x.current, o, {
                        reload: !0,
                        inherit: !1,
                        notify: !0
                    })
                }, x.go = function (a, b, c) {
                    return x.transitionTo(a, b, M({
                        inherit: !0,
                        relative: x.$current
                    }, c))
                }, x.transitionTo = function (b, c, f) {
                    c = c || {}, f = M({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, f || {});
                    var g, j = x.$current,
                        m = x.params,
                        n = j.path,
                        q = l(b, f.relative);
                    if (!G(q)) {
                        var r = {
                                to: b,
                                toParams: c,
                                options: f
                            },
                            y = s(r, j.self, m, f);
                        if (y) return y;
                        if (b = r.to, c = r.toParams, f = r.options, q = l(b, f.relative), !G(q)) {
                            if (!f.relative) throw new Error("No such state '" + b + "'");
                            throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
                        }
                    }
                    if (q[A]) throw new Error("Cannot transition to abstract state '" + b + "'");
                    if (f.inherit && (c = i(o, c || {}, x.$current, q)), !q.params.$$validates(c)) return C;
                    c = q.params.$$values(c), b = q;
                    var B = b.path,
                        D = 0,
                        E = B[D],
                        F = w.locals,
                        H = [];
                    if (!f.reload)
                        for (; E && E === n[D] && E.ownParams.$$equals(c, m);) F = H[D] = E.locals, D++, E = B[D];
                    if (v(b, j, F, f)) return b.self.reloadOnSearch !== !1 && p.update(), x.transition = null, e.when(x.current);
                    if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, m).defaultPrevented) return p.update(), z;
                    for (var I = e.when(F), J = D; J < B.length; J++, E = B[J]) F = H[J] = d(F), I = t(E, c, E === b, I, F, f);
                    var K = x.transition = I.then(function () {
                        var d, e, g;
                        if (x.transition !== K) return u;
                        for (d = n.length - 1; d >= D; d--) g = n[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                        for (d = D; d < B.length; d++) e = B[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
                        return x.transition !== K ? u : (x.$current = b, x.current = b.self, x.params = c, N(x.params, o), x.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === f.location
                        }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, m), p.update(!0), x.current)
                    }, function (d) {
                        return x.transition !== K ? u : (x.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, m, d), g.defaultPrevented || p.update(), e.reject(d))
                    });
                    return K
                }, x.is = function (a, b, d) {
                    d = M({
                        relative: x.$current
                    }, d || {});
                    var e = l(a, d.relative);
                    return G(e) ? x.$current !== e ? !1 : b ? j(e.params.$$values(b), o) : !0 : c
                }, x.includes = function (a, b, d) {
                    if (d = M({
                            relative: x.$current
                        }, d || {}), I(a) && q(a)) {
                        if (!r(a)) return !1;
                        a = x.$current.name
                    }
                    var e = l(a, d.relative);
                    return G(e) ? G(x.$current.includes[e.name]) ? b ? j(e.params.$$values(b), o, g(b)) : !0 : !1 : c
                }, x.href = function (a, b, d) {
                    d = M({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: x.$current
                    }, d || {});
                    var e = l(a, d.relative);
                    if (!G(e)) return null;
                    d.inherit && (b = i(o, b || {}, x.$current, e));
                    var f = e && d.lossy ? e.navigable : e;
                    return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys(), b || {}), {
                        absolute: d.absolute
                    }) : null
                }, x.get = function (a, b) {
                    if (0 === arguments.length) return n(g(y), function (a) {
                        return y[a].self
                    });
                    var c = l(a, b || x.$current);
                    return c && c.self ? c.self : null
                }, x
            }

            function v(a, b, c, d) {
                return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0
            }

            var w, x, y = {},
                z = {},
                A = "abstract",
                B = {
                    parent: function (a) {
                        if (G(a.parent) && a.parent) return l(a.parent);
                        var b = /^(.+)\.[^.]+$/.exec(a.name);
                        return b ? l(b[1]) : w
                    }, data: function (a) {
                        return a.parent && a.parent.data && (a.data = a.self.data = M({}, a.parent.data, a.data)), a.data
                    }, url: function (a) {
                        var b = a.url,
                            c = {
                                params: a.params || {}
                            };
                        if (I(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || w).url.concat(b, c);
                        if (!b || e.isMatcher(b)) return b;
                        throw new Error("Invalid url '" + b + "' in state '" + a + "'")
                    }, navigable: function (a) {
                        return a.url ? a : a.parent ? a.parent.navigable : null
                    }, ownParams: function (a) {
                        var b = a.url && a.url.params || new O.ParamSet;
                        return L(a.params || {}, function (a, c) {
                            b[c] || (b[c] = new O.Param(c, null, a, "config"))
                        }), b
                    }, params: function (a) {
                        return a.parent && a.parent.params ? M(a.parent.params.$$new(), a.ownParams) : new O.ParamSet
                    }, views: function (a) {
                        var b = {};
                        return L(G(a.views) ? a.views : {
                            "": a
                        }, function (c, d) {
                            d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
                        }), b
                    }, path: function (a) {
                        return a.parent ? a.parent.path.concat(a) : []
                    }, includes: function (a) {
                        var b = a.parent ? M({}, a.parent.includes) : {};
                        return b[a.name] = !0, b
                    }, $delegates: {}
                };
            w = p({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), w.navigable = null, this.decorator = s, this.state = t, this.$get = u, u.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function v() {
            function a(a, b) {
                return {
                    load: function (c, d) {
                        var e, f = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return d = M(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e
                    }
                }
            }

            this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
        }

        function w() {
            var a = !1;
            this.useAnchorScroll = function () {
                a = !0
            }, this.$get = ["$anchorScroll", "$timeout",
                function (b, c) {
                    return a ? b : function (a) {
                        c(function () {
                            a[0].scrollIntoView()
                        }, 0, !1)
                    }
                }
            ]
        }

        function x(a, c, d, e) {
            function f() {
                return c.has ? function (a) {
                    return c.has(a) ? c.get(a) : null
                } : function (a) {
                    try {
                        return c.get(a)
                    } catch (b) {
                        return null
                    }
                }
            }

            function g(a, b) {
                var c = function () {
                    return {
                        enter: function (a, b, c) {
                            b.after(a), c()
                        }, leave: function (a, b) {
                            a.remove(), b()
                        }
                    }
                };
                if (j) return {
                    enter: function (a, b, c) {
                        var d = j.enter(a, null, b, c);
                        d && d.then && d.then(c)
                    }, leave: function (a, b) {
                        var c = j.leave(a, b);
                        c && c.then && c.then(b)
                    }
                };
                if (i) {
                    var d = i && i(b, a);
                    return {
                        enter: function (a, b, c) {
                            d.enter(a, null, b), c()
                        }, leave: function (a, b) {
                            d.leave(a), b()
                        }
                    }
                }
                return c()
            }

            var h = f(),
                i = h("$animator"),
                j = h("$animate"),
                k = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function (c, f, h) {
                        return function (c, f, i) {
                            function j() {
                                l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function () {
                                    l = null
                                }), l = m, m = null)
                            }

                            function k(g) {
                                var k, l = z(c, i, f, e),
                                    s = l && a.$current && a.$current.locals[l];
                                if (g || s !== o) {
                                    k = c.$new(), o = a.$current.locals[l];
                                    var t = h(k, function (a) {
                                        r.enter(a, f, function () {
                                            n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a)
                                        }), j()
                                    });
                                    m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p)
                                }
                            }

                            var l, m, n, o, p = i.onload || "",
                                q = i.autoscroll,
                                r = g(i, c);
                            c.$on("$stateChangeSuccess", function () {
                                k(!1)
                            }), c.$on("$viewContentLoading", function () {
                                k(!1)
                            }), k(!0)
                        }
                    }
                };
            return k
        }

        function y(a, b, c, d) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function (e) {
                    var f = e.html();
                    return function (e, g, h) {
                        var i = c.$current,
                            j = z(e, h, g, d),
                            k = i && i.locals[j];
                        if (k) {
                            g.data("$uiView", {
                                name: j,
                                state: k.$$state
                            }), g.html(k.$template ? k.$template : f);
                            var l = a(g.contents());
                            if (k.$$controller) {
                                k.$scope = e;
                                var m = b(k.$$controller, k);
                                k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m)
                            }
                            l(e)
                        }
                    }
                }
            }
        }

        function z(a, b, c, d) {
            var e = d(b.uiView || b.name || "")(a),
                f = c.inheritedData("$uiView");
            return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
        }

        function A(a, b) {
            var c, d = a.match(/^\s*({[^}]*})\s*$/);
            if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
            return {
                state: c[1],
                paramExpr: c[3] || null
            }
        }

        function B(a) {
            var b = a.parent().inheritedData("$uiView");
            return b && b.state && b.state.name ? b.state : void 0
        }

        function C(a, c) {
            var d = ["location", "inherit", "reload"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function (e, f, g, h) {
                    var i = A(g.uiSref, a.current.name),
                        j = null,
                        k = B(f) || a.$current,
                        l = null,
                        m = "A" === f.prop("tagName"),
                        n = "FORM" === f[0].nodeName,
                        o = n ? "action" : "href",
                        p = !0,
                        q = {
                            relative: k,
                            inherit: !0
                        },
                        r = e.$eval(g.uiSrefOpts) || {};
                    b.forEach(d, function (a) {
                        a in r && (q[a] = r[a])
                    });
                    var s = function (c) {
                        if (c && (j = b.copy(c)), p) {
                            l = a.href(i.state, j, q);
                            var d = h[1] || h[0];
                            return d && d.$$setStateInfo(i.state, j), null === l ? (p = !1, !1) : void g.$set(o, l)
                        }
                    };
                    i.paramExpr && (e.$watch(i.paramExpr, function (a) {
                        a !== j && s(a)
                    }, !0), j = b.copy(e.$eval(i.paramExpr))), s(), n || f.bind("click", function (b) {
                        var d = b.which || b.button;
                        if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
                            var e = c(function () {
                                a.go(i.state, j, q)
                            });
                            b.preventDefault();
                            var g = m && !l ? 1 : 0;
                            b.preventDefault = function () {
                                g-- <= 0 && c.cancel(e)
                            }
                        }
                    })
                }
            }
        }

        function D(a, b, c) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs",
                    function (b, d, e) {
                        function f() {
                            g() ? d.addClass(j) : d.removeClass(j)
                        }

                        function g() {
                            return "undefined" != typeof e.uiSrefActiveEq ? h && a.is(h.name, i) : h && a.includes(h.name, i)
                        }

                        var h, i, j;
                        j = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$setStateInfo = function (b, c) {
                            h = a.get(b, B(d)), i = c, f()
                        }, b.$on("$stateChangeSuccess", f)
                    }
                ]
            }
        }

        function E(a) {
            var b = function (b) {
                return a.is(b)
            };
            return b.$stateful = !0, b
        }

        function F(a) {
            var b = function (b) {
                return a.includes(b)
            };
            return b.$stateful = !0, b
        }

        var G = b.isDefined,
            H = b.isFunction,
            I = b.isString,
            J = b.isObject,
            K = b.isArray,
            L = b.forEach,
            M = b.extend,
            N = b.copy;
        b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), o.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", o), p.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", p);
        var O;
        q.prototype.concat = function (a, b) {
            var c = {
                caseInsensitive: O.caseInsensitive(),
                strict: O.strictMode(),
                squash: O.defaultSquashPolicy()
            };
            return new q(this.sourcePath + a + this.sourceSearch, M(c, b), this)
        }, q.prototype.toString = function () {
            return this.source
        }, q.prototype.exec = function (a, b) {
            function c(a) {
                function b(a) {
                    return a.split("").reverse().join("")
                }

                function c(a) {
                    return a.replace(/\\-/, "-")
                }

                var d = b(a).split(/-(?!\\)/),
                    e = n(d, b);
                return n(e, c).reverse()
            }

            var d = this.regexp.exec(a);
            if (!d) return null;
            b = b || {};
            var e, f, g, h = this.parameters(),
                i = h.length,
                j = this.segments.length - 1,
                k = {};
            if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (e = 0; j > e; e++) {
                g = h[e];
                var l = this.params[g],
                    m = d[e + 1];
                for (f = 0; f < l.replace; f++) l.replace[f].from === m && (m = l.replace[f].to);
                m && l.array === !0 && (m = c(m)), k[g] = l.value(m)
            }
            for (; i > e; e++) g = h[e], k[g] = this.params[g].value(b[g]);
            return k
        }, q.prototype.parameters = function (a) {
            return G(a) ? this.params[a] || null : this.$$paramNames
        }, q.prototype.validates = function (a) {
            return this.params.$$validates(a)
        }, q.prototype.format = function (a) {
            function b(a) {
                return encodeURIComponent(a).replace(/-/g, function (a) {
                    return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
                })
            }

            a = a || {};
            var c = this.segments,
                d = this.parameters(),
                e = this.params;
            if (!this.validates(a)) return null;
            var f, g = !1,
                h = c.length - 1,
                i = d.length,
                j = c[0];
            for (f = 0; i > f; f++) {
                var k = h > f,
                    l = d[f],
                    m = e[l],
                    o = m.value(a[l]),
                    p = m.isOptional && m.type.equals(m.value(), o),
                    q = p ? m.squash : !1,
                    r = m.type.encode(o);
                if (k) {
                    var s = c[f + 1];
                    if (q === !1) null != r && (j += K(r) ? n(r, b).join("-") : encodeURIComponent(r)), j += s;
                    else if (q === !0) {
                        var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        j += s.match(t)[1]
                    } else I(q) && (j += q + s)
                } else {
                    if (null == r || p && q !== !1) continue;
                    K(r) || (r = [r]), r = n(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
                }
            }
            return j
        }, r.prototype.is = function () {
            return !0
        }, r.prototype.encode = function (a) {
            return a
        }, r.prototype.decode = function (a) {
            return a
        }, r.prototype.equals = function (a, b) {
            return a == b
        }, r.prototype.$subPattern = function () {
            var a = this.pattern.toString();
            return a.substr(1, a.length - 2)
        }, r.prototype.pattern = /.*/, r.prototype.toString = function () {
            return "{Type:" + this.name + "}"
        }, r.prototype.$asArray = function (a, b) {
            function d(a, b) {
                function d(a, b) {
                    return function () {
                        return a[b].apply(a, arguments)
                    }
                }

                function e(a) {
                    return K(a) ? a : G(a) ? [a] : []
                }

                function f(a) {
                    switch (a.length) {
                        case 0:
                            return c;
                        case 1:
                            return "auto" === b ? a[0] : a;
                        default:
                            return a
                    }
                }

                function g(a) {
                    return !a
                }

                function h(a, b) {
                    return function (c) {
                        c = e(c);
                        var d = n(c, a);
                        return b === !0 ? 0 === m(d, g).length : f(d)
                    }
                }

                function i(a) {
                    return function (b, c) {
                        var d = e(b),
                            f = e(c);
                        if (d.length !== f.length) return !1;
                        for (var g = 0; g < d.length; g++)
                            if (!a(d[g], f[g])) return !1;
                        return !0
                    }
                }

                this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$arrayMode = b
            }

            if (!a) return this;
            if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
            return new d(this, a)
        }, b.module("ui.router.util").provider("$urlMatcherFactory", s), b.module("ui.router.util").run(["$urlMatcherFactory",
            function () {
            }
        ]), t.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", t), u.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", u), v.$inject = [], b.module("ui.router.state").provider("$view", v), b.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], y.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", x), b.module("ui.router.state").directive("uiView", y), C.$inject = ["$state", "$timeout"], D.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", C).directive("uiSrefActive", D).directive("uiSrefActiveEq", D), E.$inject = ["$state"], F.$inject = ["$state"], b.module("ui.router.state").filter("isState", E).filter("includedByState", F)
    }(window, window.angular);
/* oclazyload @version v0.6.3*/
!function () {
    "use strict";

    function e(e) {
        var n = [];
        return angular.forEach(e.requires, function (e) {
            -1 === l.indexOf(e) && n.push(e)
        }), n
    }

    function n(e) {
        if (!angular.isString(e)) return !1;
        try {
            return L(e)
        } catch (n) {
            if (/No module/.test(n) || n.message.indexOf("$injector:nomod") > -1) return !1
        }
    }

    function r(e) {
        try {
            return L(e)
        } catch (n) {
            throw (/No module/.test(n) || n.message.indexOf("$injector:nomod") > -1) && (n.message = 'The module "' + e + '" that you are trying to load does not exist. ' + n.message), n
        }
    }

    function a(e, n, r, a) {
        if (n) {
            var t, i, u, l;
            for (t = 0, i = n.length; i > t; t++)
                if (u = n[t], angular.isArray(u)) {
                    if (null !== e) {
                        if (!e.hasOwnProperty(u[0])) throw new Error("unsupported provider " + u[0]);
                        l = e[u[0]]
                    }
                    var s = o(u, r);
                    if ("invoke" !== u[1]) s && angular.isDefined(l) && l[u[1]].apply(l, u[2]);
                    else {
                        var c = function (e) {
                            var n = f.indexOf(r + "-" + e);
                            (-1 === n || a) && (-1 === n && f.push(r + "-" + e), angular.isDefined(l) && l[u[1]].apply(l, u[2]))
                        };
                        if (angular.isFunction(u[2][0])) c(u[2][0]);
                        else if (angular.isArray(u[2][0]))
                            for (var d = 0, g = u[2][0].length; g > d; d++) angular.isFunction(u[2][0][d]) && c(u[2][0][d])
                    }
                }
        }
    }

    function t(e, n, r) {
        if (n) {
            var o, u, s, f = [];
            for (o = n.length - 1; o >= 0; o--)
                if (u = n[o], "string" != typeof u && (u = i(u)), u && -1 === c.indexOf(u)) {
                    var g = -1 === l.indexOf(u);
                    if (s = L(u), g && (l.push(u), t(e, s.requires, r)), s._runBlocks.length > 0)
                        for (d[u] = []; s._runBlocks.length > 0;) d[u].push(s._runBlocks.shift());
                    angular.isDefined(d[u]) && (g || r.rerun) && (f = f.concat(d[u])), a(e, s._invokeQueue, u, r.reconfig), a(e, s._configBlocks, u, r.reconfig), h(g ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded", u), n.pop(), c.push(u)
                }
            var p = e.getInstanceInjector();
            angular.forEach(f, function (e) {
                p.invoke(e)
            })
        }
    }

    function o(e, n) {
        var r = e[2][0],
            a = e[1],
            t = !1;
        angular.isUndefined(s[n]) && (s[n] = {}), angular.isUndefined(s[n][a]) && (s[n][a] = {});
        var o = function (e, r) {
                t = !0, s[n][a][e].push(r), h("ocLazyLoad.componentLoaded", [n, a, e])
            },
            i = function (e) {
                return angular.isArray(e) ? w(e.toString()) : angular.isObject(e) ? w(j(e)) : angular.isDefined(e) && null !== e ? w(e.toString()) : e
            };
        if (angular.isString(r)) angular.isUndefined(s[n][a][r]) && (s[n][a][r] = []), -1 === s[n][a][r].indexOf(i(e[2][1])) && o(r, i(e[2][1]));
        else {
            if (!angular.isObject(r)) return !1;
            angular.forEach(r, function (e) {
                angular.isString(e) && (angular.isUndefined(s[n][a][e]) && (s[n][a][e] = []), -1 === s[n][a][e].indexOf(i(r[1])) && o(e, i(r[1])))
            })
        }
        return t
    }

    function i(e) {
        var n = null;
        return angular.isString(e) ? n = e : angular.isObject(e) && e.hasOwnProperty("name") && angular.isString(e.name) && (n = e.name), n
    }

    function u(e) {
        if (0 === p.length) {
            var n = [e],
                r = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                t = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
                o = function (e) {
                    return e && n.push(e)
                };
            angular.forEach(r, function (n) {
                r[n] = !0, o(document.getElementById(n)), n = n.replace(":", "\\:"), e[0].querySelectorAll && (angular.forEach(e[0].querySelectorAll("." + n), o), angular.forEach(e[0].querySelectorAll("." + n + "\\:"), o), angular.forEach(e[0].querySelectorAll("[" + n + "]"), o))
            }), angular.forEach(n, function (n) {
                if (0 === p.length) {
                    var a = " " + e.className + " ",
                        o = t.exec(a);
                    o ? p.push((o[2] || "").replace(/\s+/g, ",")) : angular.forEach(n.attributes, function (e) {
                        0 === p.length && r[e.name] && p.push(e.value)
                    })
                }
            })
        }
        0 !== p.length || (window.jasmine || window.mocha) && angular.isDefined(angular.mock) || console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");
        var i = function u(e) {
            if (-1 === l.indexOf(e)) {
                l.push(e);
                var n = angular.module(e);
                a(null, n._invokeQueue, e), a(null, n._configBlocks, e), angular.forEach(n.requires, u)
            }
        };
        angular.forEach(p, function (e) {
            i(e)
        }), p = [], m.pop()
    }

    var l = ["ng"],
        s = {},
        f = [],
        c = [],
        d = {},
        g = angular.module("oc.lazyLoad", ["ng"]),
        h = angular.noop,
        p = [],
        m = [!0];
    g.provider("$ocLazyLoad", ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider",
        function (a, o, s, f, d, g) {
            var v, L, w, j = {},
                O = {
                    $controllerProvider: a,
                    $compileProvider: s,
                    $filterProvider: f,
                    $provide: o,
                    $injector: d,
                    $animateProvider: g
                },
                E = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0],
                x = !1,
                b = !1;
            u(angular.element(window.document)), this.$get = ["$log", "$q", "$templateCache", "$http", "$rootElement", "$rootScope", "$cacheFactory", "$interval",
                function (a, o, u, s, f, d, g, $) {
                    var S, D = g("ocLazyLoad"),
                        z = !1,
                        A = !1;
                    x || (a = {}, a.error = angular.noop, a.warn = angular.noop, a.info = angular.noop), O.getInstanceInjector = function () {
                        return S ? S : S = f.data("$injector") || angular.injector()
                    }, h = function (e, n) {
                        b && d.$broadcast(e, n), x && a.info(e, n)
                    };
                    var P = function (e, n, r) {
                        var a, t, i = o.defer(),
                            u = function (e) {
                                var n = (new Date).getTime();
                                return e.indexOf("?") >= 0 ? "&" === e.substring(0, e.length - 1) ? e + "_dc=" + n : e + "&_dc=" + n : e + "?_dc=" + n
                            };
                        switch (angular.isUndefined(D.get(n)) && D.put(n, i.promise), e) {
                            case "css":
                                a = document.createElement("link"), a.type = "text/css", a.rel = "stylesheet", a.href = r.cache === !1 ? u(n) : n;
                                break;
                            case "js":
                                a = document.createElement("script"), a.src = r.cache === !1 ? u(n) : n;
                                break;
                            default:
                                i.reject(new Error('Requested type "' + e + '" is not known. Could not inject "' + n + '"'))
                        }
                        a.onload = a.onreadystatechange = function () {
                            a.readyState && !/^c|loade/.test(a.readyState) || t || (a.onload = a.onreadystatechange = null, t = 1, h("ocLazyLoad.fileLoaded", n), i.resolve())
                        }, a.onerror = function () {
                            i.reject(new Error("Unable to load " + n))
                        }, a.async = r.serie ? 0 : 1;
                        var l = E.lastChild;
                        if (r.insertBefore) {
                            var s = angular.element(r.insertBefore);
                            s && s.length > 0 && (l = s[0])
                        }
                        if (E.insertBefore(a, l), "css" == e) {
                            if (!z) {
                                var f = navigator.userAgent.toLowerCase();
                                if (/iP(hone|od|ad)/.test(navigator.platform)) {
                                    var c = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                        d = parseFloat([parseInt(c[1], 10), parseInt(c[2], 10), parseInt(c[3] || 0, 10)].join("."));
                                    A = 6 > d
                                } else if (f.indexOf("android") > -1) {
                                    var g = parseFloat(f.slice(f.indexOf("android") + 8));
                                    A = 4.4 > g
                                } else if (f.indexOf("safari") > -1 && -1 == f.indexOf("chrome")) {
                                    var p = parseFloat(f.match(/version\/([\.\d]+)/i)[1]);
                                    A = 6 > p
                                }
                            }
                            if (A) var m = 1e3,
                                v = $(function () {
                                    try {
                                        a.sheet.cssRules, $.cancel(v), a.onload()
                                    } catch (e) {
                                        --m <= 0 && a.onerror()
                                    }
                                }, 20)
                        }
                        return i.promise
                    };
                    angular.isUndefined(v) && (v = function (e, n, r) {
                        var a = [];
                        angular.forEach(e, function (e) {
                            a.push(P("js", e, r))
                        }), o.all(a).then(function () {
                            n()
                        }, function (e) {
                            n(e)
                        })
                    }, v.ocLazyLoadLoader = !0), angular.isUndefined(L) && (L = function (e, n, r) {
                        var a = [];
                        angular.forEach(e, function (e) {
                            a.push(P("css", e, r))
                        }), o.all(a).then(function () {
                            n()
                        }, function (e) {
                            n(e)
                        })
                    }, L.ocLazyLoadLoader = !0), angular.isUndefined(w) && (w = function (e, n, r) {
                        var a = [];
                        return angular.forEach(e, function (e) {
                            var n = o.defer();
                            a.push(n.promise), s.get(e, r).success(function (r) {
                                angular.isString(r) && r.length > 0 && angular.forEach(angular.element(r), function (e) {
                                    "SCRIPT" === e.nodeName && "text/ng-template" === e.type && u.put(e.id, e.innerHTML)
                                }), angular.isUndefined(D.get(e)) && D.put(e, !0), n.resolve()
                            }).error(function (r) {
                                n.reject(new Error('Unable to load template file "' + e + '": ' + r))
                            })
                        }), o.all(a).then(function () {
                            n()
                        }, function (e) {
                            n(e)
                        })
                    }, w.ocLazyLoadLoader = !0);
                    var k = function M(e, n) {
                        var r = [],
                            t = [],
                            i = [],
                            u = [],
                            l = null;
                        m.push(!0), angular.extend(n || {}, e);
                        var s = function (e) {
                            var o, s = null;
                            if ("object" == typeof e && (s = e.type, e = e.path), l = D.get(e), angular.isUndefined(l) || n.cache === !1) {
                                if (null !== (o = /^(css|less|html|htm|js)?(?=!)/.exec(e)) && (s = o[1], e = e.substr(o[1].length + 1, e.length)), !s)
                                    if (null !== (o = /[.](css|less|html|htm|js)?(\?.*)?$/.exec(e))) s = o[1];
                                    else {
                                        if (v.hasOwnProperty("ocLazyLoadLoader") || !v.hasOwnProperty("load")) return void a.error("File type could not be determined. " + e);
                                        s = "js"
                                    }
                                "css" !== s && "less" !== s || -1 !== r.indexOf(e) ? "html" !== s && "htm" !== s || -1 !== t.indexOf(e) ? "js" === s || -1 === i.indexOf(e) ? i.push(e) : a.error("File type is not valid. " + e) : t.push(e) : r.push(e)
                            } else l && u.push(l)
                        };
                        if (n.serie ? s(n.files.shift()) : angular.forEach(n.files, function (e) {
                                s(e)
                            }), r.length > 0) {
                            var f = o.defer();
                            L(r, function (e) {
                                angular.isDefined(e) && L.hasOwnProperty("ocLazyLoadLoader") ? (a.error(e), f.reject(e)) : f.resolve()
                            }, n), u.push(f.promise)
                        }
                        if (t.length > 0) {
                            var c = o.defer();
                            w(t, function (e) {
                                angular.isDefined(e) && w.hasOwnProperty("ocLazyLoadLoader") ? (a.error(e), c.reject(e)) : c.resolve()
                            }, n), u.push(c.promise)
                        }
                        if (i.length > 0) {
                            var d = o.defer();
                            v(i, function (e) {
                                angular.isDefined(e) && v.hasOwnProperty("ocLazyLoadLoader") ? (a.error(e), d.reject(e)) : d.resolve()
                            }, n), u.push(d.promise)
                        }
                        return n.serie && n.files.length > 0 ? o.all(u).then(function () {
                            return M(e, n)
                        }) : o.all(u)["finally"](function (e) {
                            return m.pop(), e
                        })
                    };
                    return {
                        getModuleConfig: function (e) {
                            if (!angular.isString(e)) throw new Error("You need to give the name of the module to get");
                            return j[e] ? j[e] : null
                        }, setModuleConfig: function (e) {
                            if (!angular.isObject(e)) throw new Error("You need to give the module config object to set");
                            return j[e.name] = e, e
                        }, getModules: function () {
                            return l
                        }, isLoaded: function (e) {
                            var r = function (e) {
                                var r = l.indexOf(e) > -1;
                                return r || (r = !!n(e)), r
                            };
                            if (angular.isString(e) && (e = [e]), angular.isArray(e)) {
                                var a, t;
                                for (a = 0, t = e.length; t > a; a++)
                                    if (!r(e[a])) return !1;
                                return !0
                            }
                            throw new Error("You need to define the module(s) name(s)")
                        }, load: function (u, l) {
                            var s, f = this,
                                d = null,
                                g = [],
                                h = [],
                                v = o.defer();
                            if (angular.isUndefined(l) && (l = {}), angular.isArray(u)) return angular.forEach(u, function (e) {
                                e && h.push(f.load(e, l))
                            }), o.all(h).then(function () {
                                v.resolve(u)
                            }, function (e) {
                                v.reject(e)
                            }), v.promise;
                            if ("string" == typeof u ? (d = f.getModuleConfig(u), d || (d = {
                                    files: [u]
                                })) : "object" == typeof u && (d = angular.isDefined(u.path) && angular.isDefined(u.type) ? {
                                        files: [u]
                                    } : f.setModuleConfig(u)), null === d) {
                                var L = i(u);
                                return s = 'Module "' + (L || "unknown") + '" is not configured, cannot load.', a.error(s), v.reject(new Error(s)), v.promise
                            }
                            angular.isDefined(d.template) && (angular.isUndefined(d.files) && (d.files = []), angular.isString(d.template) ? d.files.push(d.template) : angular.isArray(d.template) && d.files.concat(d.template)), g.push = function (e) {
                                -1 === this.indexOf(e) && Array.prototype.push.apply(this, arguments)
                            };
                            var w = {};
                            angular.extend(w, l, d);
                            var j = function E(t) {
                                var u, l, s, c, d = [];
                                if (u = i(t), null === u) return o.when();
                                try {
                                    l = r(u)
                                } catch (h) {
                                    var p = o.defer();
                                    return a.error(h.message), p.reject(h), p.promise
                                }
                                return s = e(l), angular.forEach(s, function (e) {
                                    if ("string" == typeof e) {
                                        var r = f.getModuleConfig(e);
                                        if (null === r) return void g.push(e);
                                        e = r
                                    }
                                    return n(e.name) ? void("string" != typeof t && (c = e.files.filter(function (n) {
                                        return f.getModuleConfig(e.name).files.indexOf(n) < 0
                                    }), 0 !== c.length && a.warn('Module "', u, '" attempted to redefine configuration for dependency. "', e.name, '"\n Additional Files Loaded:', c), d.push(k(e.files, w).then(function () {
                                        return E(e)
                                    })))) : (angular.isArray(e) ? e = {
                                        files: e
                                    } : "object" == typeof e && e.hasOwnProperty("name") && e.name && (f.setModuleConfig(e), g.push(e.name)), void(e.hasOwnProperty("files") && 0 !== e.files.length && e.files && d.push(k(e, w).then(function () {
                                        return E(e)
                                    }))))
                                }), o.all(d)
                            };
                            return angular.isUndefined(d.files) && angular.isDefined(d.name) && n(d.name) && (m.push(!0), y(d.name), m.pop()), k(d, w).then(function () {
                                if (0 === p.length) v.resolve(u);
                                else {
                                    var e = function n(e) {
                                        g.push(e), j(e).then(function () {
                                            try {
                                                c = [], t(O, g, w)
                                            } catch (e) {
                                                return a.error(e.message), void v.reject(e)
                                            }
                                            p.length > 0 ? n(p.shift()) : v.resolve(u)
                                        }, function (e) {
                                            v.reject(e)
                                        })
                                    };
                                    e(p.shift())
                                }
                            }, function (e) {
                                v.reject(e)
                            }), v.promise
                        }
                    }
                }
            ], this.config = function (e) {
                if (angular.isDefined(e.jsLoader) || angular.isDefined(e.asyncLoader)) {
                    if (!angular.isFunction(e.jsLoader || e.asyncLoader)) throw "The js loader needs to be a function";
                    v = e.jsLoader || e.asyncLoader
                }
                if (angular.isDefined(e.cssLoader)) {
                    if (!angular.isFunction(e.cssLoader)) throw "The css loader needs to be a function";
                    L = e.cssLoader
                }
                if (angular.isDefined(e.templatesLoader)) {
                    if (!angular.isFunction(e.templatesLoader)) throw "The template loader needs to be a function";
                    w = e.templatesLoader
                }
                angular.isDefined(e.modules) && (angular.isArray(e.modules) ? angular.forEach(e.modules, function (e) {
                    j[e.name] = e
                }) : j[e.modules.name] = e.modules), angular.isDefined(e.debug) && (x = e.debug), angular.isDefined(e.events) && (b = e.events)
            }
        }
    ]), g.directive("ocLazyLoad", ["$ocLazyLoad", "$compile", "$animate", "$parse",
        function (e, n, r, a) {
            return {
                restrict: "A",
                terminal: !0,
                priority: 1e3,
                compile: function (t) {
                    var o = t[0].innerHTML;
                    return t.html(""),
                        function (t, i, u) {
                            var l = a(u.ocLazyLoad);
                            t.$watch(function () {
                                return l(t) || u.ocLazyLoad
                            }, function (a) {
                                angular.isDefined(a) && e.load(a).then(function () {
                                    r.enter(n(o)(t), null, i)
                                })
                            }, !0)
                        }
                }
            }
        }
    ]);
    var v = angular.bootstrap;
    angular.bootstrap = function (e, n, r) {
        return angular.forEach(n.slice(), function (e) {
            y(e)
        }), v(e, n, r)
    };
    var y = function (e) {
            m.length > 0 && angular.isString(e) && -1 === p.indexOf(e) && p.push(e)
        },
        L = angular.module;
    angular.module = function (e, n, r) {
        return y(e), L(e, n, r)
    };
    var w = function (e) {
            var n, r, a, t = 0;
            if (0 == e.length) return t;
            for (n = 0, a = e.length; a > n; n++) r = e.charCodeAt(n), t = (t << 5) - t + r, t |= 0;
            return t
        },
        j = function (e) {
            var n = [];
            return JSON.stringify(e, function (e, r) {
                if ("object" == typeof r && null !== r) {
                    if (-1 !== n.indexOf(r)) return;
                    n.push(r)
                }
                return r
            })
        };
    Array.prototype.indexOf || (Array.prototype.indexOf = function (e, n) {
        var r;
        if (null == this) throw new TypeError('"this" is null or not defined');
        var a = Object(this),
            t = a.length >>> 0;
        if (0 === t) return -1;
        var o = +n || 0;
        if (1 / 0 === Math.abs(o) && (o = 0), o >= t) return -1;
        for (r = Math.max(o >= 0 ? o : t - Math.abs(o), 0); t > r;) {
            if (r in a && a[r] === e) return r;
            r++
        }
        return -1
    })
}();
/* angular-messages AngularJS v1.3.15*/
(function (r, f, s) {
    'use strict';
    f.module("ngMessages", []).directive("ngMessages", ["$compile", "$animate", "$templateRequest",
        function (q, k, l) {
            return {
                restrict: "AE",
                controller: function () {
                    this.$renderNgMessageClasses = f.noop;
                    var b = [];
                    this.registerMessage = function (d, a) {
                        for (var c = 0; c < b.length; c++)
                            if (b[c].type == a.type) {
                                if (d != c) {
                                    var g = b[d];
                                    b[d] = b[c];
                                    d < b.length ? b[c] = g : b.splice(0, c)
                                }
                                return
                            }
                        b.splice(d, 0, a)
                    };
                    this.renderMessages = function (d, a) {
                        d = d || {};
                        var c;
                        f.forEach(b, function (b) {
                            var e;
                            if (e = !c || a) e = d[b.type], e = null !== e && !1 !== e && e;
                            e ? (b.attach(), c = !0) : b.detach()
                        });
                        this.renderElementClasses(c)
                    }
                }, require: "ngMessages",
                link: function (b, d, a, c) {
                    c.renderElementClasses = function (b) {
                        b ? k.setClass(d, "ng-active", "ng-inactive") : k.setClass(d, "ng-inactive", "ng-active")
                    };
                    var g = f.isString(a.ngMessagesMultiple) || f.isString(a.multiple),
                        e;
                    b.$watchCollection(a.ngMessages || a["for"], function (b) {
                        e = b;
                        c.renderMessages(b, g)
                    });
                    (a = a.ngMessagesInclude || a.include) && l(a).then(function (a) {
                        var h;
                        a = f.element("<div/>").html(a);
                        f.forEach(a.children(), function (a) {
                            a = f.element(a);
                            h ? h.after(a) : d.prepend(a);
                            h = a;
                            q(a)(b)
                        });
                        c.renderMessages(e, g)
                    })
                }
            }
        }
    ]).directive("ngMessage", ["$animate",
        function (f) {
            return {
                require: "^ngMessages",
                transclude: "element",
                terminal: !0,
                restrict: "AE",
                link: function (k, l, b, d, a) {
                    for (var c, g, e = l[0], n = e.parentNode, h = 0, p = 0; h < n.childNodes.length; h++) {
                        var m = n.childNodes[h];
                        if (8 == m.nodeType && 0 <= m.nodeValue.indexOf("ngMessage")) {
                            if (m === e) {
                                c = p;
                                break
                            }
                            p++
                        }
                    }
                    d.registerMessage(c, {
                        type: b.ngMessage || b.when,
                        attach: function () {
                            g || a(k, function (a) {
                                f.enter(a, null, l);
                                g = a
                            })
                        }, detach: function (a) {
                            g && (f.leave(g), g = null)
                        }
                    })
                }
            }
        }
    ])
})(window, window.angular);
/*jQuery Autocomplete plugin 1.1*/
;
(function ($) {
    $.fn.extend({
        autocomplete: function (urlOrData, options) {
            var isUrl = typeof urlOrData == "string";
            options = $.extend({}, $.Autocompleter.defaults, {
                url: isUrl ? urlOrData : null,
                data: isUrl ? null : urlOrData,
                delay: isUrl ? $.Autocompleter.defaults.delay : 10,
                max: options && !options.scroll ? 10 : 150
            }, options);
            options.highlight = options.highlight || function (value) {
                    return value;
                };
            options.formatMatch = options.formatMatch || options.formatItem;
            return this.each(function () {
                new $.Autocompleter(this, options);
            });
        }, result: function (handler) {
            return this.bind("result", handler);
        }, search: function (handler) {
            return this.trigger("search", [handler]);
        }, flushCache: function () {
            return this.trigger("flushCache");
        }, setOptions: function (options) {
            return this.trigger("setOptions", [options]);
        }, unautocomplete: function () {
            return this.trigger("unautocomplete");
        }
    });
    $.Autocompleter = function (input, options) {
        var KEY = {
            UP: 38,
            DOWN: 40,
            DEL: 46,
            TAB: 9,
            RETURN: 13,
            ESC: 27,
            COMMA: 188,
            PAGEUP: 33,
            PAGEDOWN: 34,
            BACKSPACE: 8
        };
        var $input = $(input).attr("autocomplete", "off").addClass(options.inputClass);
        var timeout;
        var previousValue = "";
        var cache = $.Autocompleter.Cache(options);
        var hasFocus = 0;
        var lastKeyPressCode;
        var config = {
            mouseDownOnSelect: false
        };
        var select = $.Autocompleter.Select(options, input, selectCurrent, config);
        var blockSubmit;
        $.browser.opera && $(input.form).bind("submit.autocomplete", function () {
            if (blockSubmit) {
                blockSubmit = false;
                return false;
            }
        });
        $input.bind(($.browser.opera ? "keypress" : "keydown") + ".autocomplete", function (event) {
            hasFocus = 1;
            lastKeyPressCode = event.keyCode;
            switch (event.keyCode) {
                case KEY.UP:
                    event.preventDefault();
                    if (select.visible()) {
                        select.prev();
                    } else {
                        onChange(0, true);
                    }
                    break;
                case KEY.DOWN:
                    event.preventDefault();
                    if (select.visible()) {
                        select.next();
                    } else {
                        onChange(0, true);
                    }
                    break;
                case KEY.PAGEUP:
                    event.preventDefault();
                    if (select.visible()) {
                        select.pageUp();
                    } else {
                        onChange(0, true);
                    }
                    break;
                case KEY.PAGEDOWN:
                    event.preventDefault();
                    if (select.visible()) {
                        select.pageDown();
                    } else {
                        onChange(0, true);
                    }
                    break;
                case options.multiple && $.trim(options.multipleSeparator) == "," && KEY.COMMA:
                case KEY.TAB:
                case KEY.RETURN:
                    if (selectCurrent()) {
                        event.preventDefault();
                        blockSubmit = true;
                        return false;
                    }
                    break;
                case KEY.ESC:
                    select.hide();
                    break;
                default:
                    clearTimeout(timeout);
                    timeout = setTimeout(onChange, options.delay);
                    break;
            }
        }).focus(function () {
            hasFocus++;
        }).blur(function () {
            hasFocus = 0;
            if (!config.mouseDownOnSelect) {
                hideResults();
            }
        }).click(function () {
            if (hasFocus++ > 1 && !select.visible()) {
                onChange(0, true);
            }
        }).bind("search", function () {
            var fn = (arguments.length > 1) ? arguments[1] : null;

            function findValueCallback(q, data) {
                var result;
                if (data && data.length) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].result.toLowerCase() == q.toLowerCase()) {
                            result = data[i];
                            break;
                        }
                    }
                }
                if (typeof fn == "function") fn(result);
                else $input.trigger("result", result && [result.data, result.value]);
            }

            $.each(trimWords($input.val()), function (i, value) {
                request(value, findValueCallback, findValueCallback);
            });
        }).bind("flushCache", function () {
            cache.flush();
        }).bind("setOptions", function () {
            $.extend(options, arguments[1]);
            if ("data" in arguments[1]) cache.populate();
        }).bind("unautocomplete", function () {
            select.unbind();
            $input.unbind();
            $(input.form).unbind(".autocomplete");
        }).bind("input", function () {
            if ($input.val()) onChange(0, true);
        });

        function selectCurrent() {
            var selected = select.selected();
            if (!selected) return false;
            var v = selected.result;
            previousValue = v;
            if (options.multiple) {
                var words = trimWords($input.val());
                if (words.length > 1) {
                    var seperator = options.multipleSeparator.length;
                    var cursorAt = $(input).selection().start;
                    var wordAt, progress = 0;
                    $.each(words, function (i, word) {
                        progress += word.length;
                        if (cursorAt <= progress) {
                            wordAt = i;
                            return false;
                        }
                        progress += seperator;
                    });
                    words[wordAt] = v;
                    v = words.join(options.multipleSeparator);
                }
                v += options.multipleSeparator;
            }
            $input.val(v);
            hideResultsNow();
            $input.trigger("result", [selected.data, selected.value]);
            return true;
        }

        function onChange(crap, skipPrevCheck) {
            if (lastKeyPressCode == KEY.DEL) {
                select.hide();
                return;
            }
            var currentValue = $input.val();
            if (!skipPrevCheck && currentValue == previousValue) return;
            previousValue = currentValue;
            currentValue = lastWord(currentValue);
            if (currentValue.length >= options.minChars) {
                $input.addClass(options.loadingClass);
                if (!options.matchCase) currentValue = currentValue.toLowerCase();
                request(currentValue, receiveData, hideResultsNow);
            } else {
                stopLoading();
                select.hide();
            }
        };

        function trimWords(value) {
            if (!value) return [""];
            if (!options.multiple) return [$.trim(value)];
            return $.map(value.split(options.multipleSeparator), function (word) {
                return $.trim(value).length ? $.trim(word) : null;
            });
        }

        function lastWord(value) {
            if (!options.multiple) return value;
            var words = trimWords(value);
            if (words.length == 1) return words[0];
            var cursorAt = $(input).selection().start;
            if (cursorAt == value.length) {
                words = trimWords(value)
            } else {
                words = trimWords(value.replace(value.substring(cursorAt), ""));
            }
            return words[words.length - 1];
        }

        function autoFill(q, sValue) {
            if (options.autoFill && (lastWord($input.val()).toLowerCase() == q.toLowerCase()) && lastKeyPressCode != KEY.BACKSPACE) {
                $input.val($input.val() + sValue.substring(lastWord(previousValue).length));
                $(input).selection(previousValue.length, previousValue.length + sValue.length);
            }
        };

        function hideResults() {
            clearTimeout(timeout);
            timeout = setTimeout(hideResultsNow, 200);
        };

        function hideResultsNow() {
            var wasVisible = select.visible();
            select.hide();
            clearTimeout(timeout);
            stopLoading();
            if (options.mustMatch) {
                $input.search(function (result) {
                    if (!result) {
                        if (options.multiple) {
                            var words = trimWords($input.val()).slice(0, -1);
                            $input.val(words.join(options.multipleSeparator) + (words.length ? options.multipleSeparator : ""));
                        } else {
                            $input.val("");
                            $input.trigger("result", null);
                        }
                    }
                });
            }
        };

        function receiveData(q, data) {
            if (data && data.length && hasFocus) {
                stopLoading();
                select.display(data, q);
                autoFill(q, data[0].value);
                select.show();
            } else {
                hideResultsNow();
            }
        };

        function request(term, success, failure) {
            if (!options.matchCase) term = term.toLowerCase();
            var data = cache.load(term);
            if (data && data.length) {
                success(term, data);
            } else if ((typeof options.url == "string") && (options.url.length > 0)) {
                var extraParams = {
                    timestamp: +new Date()
                };
                $.each(options.extraParams, function (key, param) {
                    extraParams[key] = typeof param == "function" ? param() : param;
                });
                $.ajax({
                    mode: "abort",
                    port: "autocomplete" + input.name,
                    dataType: options.dataType,
                    url: options.url,
                    data: $.extend({
                        q: lastWord(term),
                        limit: options.max
                    }, extraParams),
                    success: function (data) {
                        var parsed = options.parse && options.parse(data) || parse(data);
                        cache.add(term, parsed);
                        success(term, parsed);
                    }
                });
            } else {
                select.emptyList();
                failure(term);
            }
        };

        function parse(data) {
            var parsed = [];
            var rows = data.split("\n");
            for (var i = 0; i < rows.length; i++) {
                var row = $.trim(rows[i]);
                if (row) {
                    row = row.split("|");
                    parsed[parsed.length] = {
                        data: row,
                        value: row[0],
                        result: options.formatResult && options.formatResult(row, row[0]) || row[0]
                    };
                }
            }
            return parsed;
        };

        function stopLoading() {
            $input.removeClass(options.loadingClass);
        };
    };
    $.Autocompleter.defaults = {
        inputClass: "ac_input",
        resultsClass: "ac_results",
        loadingClass: "ac_loading",
        minChars: 1,
        delay: 400,
        matchCase: false,
        matchSubset: true,
        matchContains: false,
        cacheLength: 10,
        max: 100,
        mustMatch: false,
        extraParams: {},
        selectFirst: true,
        formatItem: function (row) {
            return row[0];
        }, formatMatch: null,
        autoFill: false,
        width: 0,
        multiple: false,
        multipleSeparator: ", ",
        highlight: function (value, term) {
            return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>");
        }, scroll: true,
        scrollHeight: 180
    };
    $.Autocompleter.Cache = function (options) {
        var data = {};
        var length = 0;

        function matchSubset(s, sub) {
            if (!options.matchCase) s = s.toLowerCase();
            var i = s.indexOf(sub);
            if (options.matchContains == "word") {
                i = s.toLowerCase().search("\\b" + sub.toLowerCase());
            }
            if (i == -1) return false;
            return i == 0 || options.matchContains;
        };

        function add(q, value) {
            if (length > options.cacheLength) {
                flush();
            }
            if (!data[q]) {
                length++;
            }
            data[q] = value;
        }

        function populate() {
            if (!options.data) return false;
            var stMatchSets = {},
                nullData = 0;
            if (!options.url) options.cacheLength = 1;
            stMatchSets[""] = [];
            for (var i = 0, ol = options.data.length; i < ol; i++) {
                var rawValue = options.data[i];
                rawValue = (typeof rawValue == "string") ? [rawValue] : rawValue;
                var value = options.formatMatch(rawValue, i + 1, options.data.length);
                if (value === false) continue;
                var firstChar = value.charAt(0).toLowerCase();
                if (!stMatchSets[firstChar]) stMatchSets[firstChar] = [];
                var row = {
                    value: value,
                    data: rawValue,
                    result: options.formatResult && options.formatResult(rawValue) || value
                };
                stMatchSets[firstChar].push(row);
                if (nullData++ < options.max) {
                    stMatchSets[""].push(row);
                }
            }
            ;
            $.each(stMatchSets, function (i, value) {
                options.cacheLength++;
                add(i, value);
            });
        }

        setTimeout(populate, 25);

        function flush() {
            data = {};
            length = 0;
        }

        return {
            flush: flush,
            add: add,
            populate: populate,
            load: function (q) {
                if (!options.cacheLength || !length) return null;
                if (!options.url && options.matchContains) {
                    var csub = [];
                    for (var k in data) {
                        if (k.length > 0) {
                            var c = data[k];
                            $.each(c, function (i, x) {
                                if (matchSubset(x.value, q)) {
                                    csub.push(x);
                                }
                            });
                        }
                    }
                    return csub;
                } else if (data[q]) {
                    return data[q];
                } else if (options.matchSubset) {
                    for (var i = q.length - 1; i >= options.minChars; i--) {
                        var c = data[q.substr(0, i)];
                        if (c) {
                            var csub = [];
                            $.each(c, function (i, x) {
                                if (matchSubset(x.value, q)) {
                                    csub[csub.length] = x;
                                }
                            });
                            return csub;
                        }
                    }
                }
                return null;
            }
        };
    };
    $.Autocompleter.Select = function (options, input, select, config) {
        var CLASSES = {
            ACTIVE: "ac_over"
        };
        var listItems, active = -1,
            data, term = "",
            needsInit = true,
            element, list;

        function init() {
            if (!needsInit) return;
            element = $("<div/>").hide().addClass(options.resultsClass).css("position", "absolute").appendTo(document.body);
            list = $("<ul/>").appendTo(element).mouseover(function (event) {
                if (target(event).nodeName && target(event).nodeName.toUpperCase() == 'LI') {
                    active = $("li", list).removeClass(CLASSES.ACTIVE).index(target(event));
                    $(target(event)).addClass(CLASSES.ACTIVE);
                }
            }).click(function (event) {
                $(target(event)).addClass(CLASSES.ACTIVE);
                select();
                input.focus();
                return false;
            }).mousedown(function () {
                config.mouseDownOnSelect = true;
            }).mouseup(function () {
                config.mouseDownOnSelect = false;
            });
            if (options.width > 0) element.css("width", options.width);
            needsInit = false;
        }

        function target(event) {
            var element = event.target;
            while (element && element.tagName != "LI") element = element.parentNode;
            if (!element) return [];
            return element;
        }

        function moveSelect(step) {
            listItems.slice(active, active + 1).removeClass(CLASSES.ACTIVE);
            movePosition(step);
            var activeItem = listItems.slice(active, active + 1).addClass(CLASSES.ACTIVE);
            if (options.scroll) {
                var offset = 0;
                listItems.slice(0, active).each(function () {
                    offset += this.offsetHeight;
                });
                if ((offset + activeItem[0].offsetHeight - list.scrollTop()) > list[0].clientHeight) {
                    list.scrollTop(offset + activeItem[0].offsetHeight - list.innerHeight());
                } else if (offset < list.scrollTop()) {
                    list.scrollTop(offset);
                }
            }
        };

        function movePosition(step) {
            active += step;
            if (active < 0) {
                active = listItems.size() - 1;
            } else if (active >= listItems.size()) {
                active = 0;
            }
        }

        function limitNumberOfItems(available) {
            return options.max && options.max < available ? options.max : available;
        }

        function fillList() {
            list.empty();
            var max = limitNumberOfItems(data.length);
            for (var i = 0; i < max; i++) {
                if (!data[i]) continue;
                var formatted = options.formatItem(data[i].data, i + 1, max, data[i].value, term);
                if (formatted === false) continue;
                var li = $("<li/>").html(options.highlight(formatted, term)).addClass(i % 2 == 0 ? "ac_even" : "ac_odd").appendTo(list)[0];
                $.data(li, "ac_data", data[i]);
            }
            listItems = list.find("li");
            if (options.selectFirst) {
                listItems.slice(0, 1).addClass(CLASSES.ACTIVE);
                active = 0;
            }
            if ($.fn.bgiframe) list.bgiframe();
        }

        return {
            display: function (d, q) {
                init();
                data = d;
                term = q;
                fillList();
            }, next: function () {
                moveSelect(1);
            }, prev: function () {
                moveSelect(-1);
            }, pageUp: function () {
                if (active != 0 && active - 8 < 0) {
                    moveSelect(-active);
                } else {
                    moveSelect(-8);
                }
            }, pageDown: function () {
                if (active != listItems.size() - 1 && active + 8 > listItems.size()) {
                    moveSelect(listItems.size() - 1 - active);
                } else {
                    moveSelect(8);
                }
            }, hide: function () {
                element && element.hide();
                listItems && listItems.removeClass(CLASSES.ACTIVE);
                active = -1;
            }, visible: function () {
                return element && element.is(":visible");
            }, current: function () {
                return this.visible() && (listItems.filter("." + CLASSES.ACTIVE)[0] || options.selectFirst && listItems[0]);
            }, show: function () {
                var offset = $(input).offset();
                element.css({
                    width: typeof options.width == "string" || options.width > 0 ? options.width : $(input).width(),
                    top: offset.top + input.offsetHeight,
                    left: offset.left
                }).show();
                if (options.scroll) {
                    list.scrollTop(0);
                    list.css({
                        maxHeight: options.scrollHeight,
                        overflow: 'auto'
                    });
                    if ($.browser.msie && typeof document.body.style.maxHeight === "undefined") {
                        var listHeight = 0;
                        listItems.each(function () {
                            listHeight += this.offsetHeight;
                        });
                        var scrollbarsVisible = listHeight > options.scrollHeight;
                        list.css('height', scrollbarsVisible ? options.scrollHeight : listHeight);
                        if (!scrollbarsVisible) {
                            listItems.width(list.width() - parseInt(listItems.css("padding-left")) - parseInt(listItems.css("padding-right")));
                        }
                    }
                }
            }, selected: function () {
                var selected = listItems && listItems.filter("." + CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);
                return selected && selected.length && $.data(selected[0], "ac_data");
            }, emptyList: function () {
                list && list.empty();
            }, unbind: function () {
                element && element.remove();
            }
        };
    };
    $.fn.selection = function (start, end) {
        if (start !== undefined) {
            return this.each(function () {
                if (this.createTextRange) {
                    var selRange = this.createTextRange();
                    if (end === undefined || start == end) {
                        selRange.move("character", start);
                        selRange.select();
                    } else {
                        selRange.collapse(true);
                        selRange.moveStart("character", start);
                        selRange.moveEnd("character", end);
                        selRange.select();
                    }
                } else if (this.setSelectionRange) {
                    this.setSelectionRange(start, end);
                } else if (this.selectionStart) {
                    this.selectionStart = start;
                    this.selectionEnd = end;
                }
            });
        }
        var field = this[0];
        if (field.createTextRange) {
            var range = document.selection.createRange(),
                orig = field.value,
                teststring = "<->",
                textLength = range.text.length;
            range.text = teststring;
            var caretAt = field.value.indexOf(teststring);
            field.value = orig;
            this.selection(caretAt, caretAt + textLength);
            return {
                start: caretAt,
                end: caretAt + textLength
            }
        } else if (field.selectionStart !== undefined) {
            return {
                start: field.selectionStart,
                end: field.selectionEnd
            }
        }
    };
})(jQuery);
/*angular-bootstrap Version: 0.13.0*/
angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope",
    function (a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }

        var e = function (d, f, g) {
                g = g || {};
                var h = a.defer(),
                    i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                    j = function () {
                        c.$apply(function () {
                            d.unbind(i, j), h.resolve(d)
                        })
                    };
                return i && d.bind(i, j), b(function () {
                    angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
                }), h.promise.cancel = function () {
                    i && d.unbind(i, j), h.reject("Transition cancelled")
                }, h.promise
            },
            f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            },
            h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }
]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition",
    function (a) {
        return {
            link: function (b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }

                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }

                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                        height: c[0].scrollHeight + "px"
                    }).then(g))
                }

                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                        height: "auto"
                    })
                }

                function h() {
                    if (k) k = !1, i(), c.css({
                        height: 0
                    });
                    else {
                        c.css({
                            height: c[0].scrollHeight + "px"
                        });
                        {
                            c[0].offsetWidth
                        }
                        c.removeClass("collapse in").addClass("collapsing"), e({
                            height: 0
                        }).then(i)
                    }
                }

                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }

                var j, k = !0;
                b.$watch(d.collapse, function (a) {
                    a ? h() : f()
                })
            }
        }
    }
]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig",
    function (a, b, c) {
        this.groups = [], this.closeOthers = function (d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function (a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function (a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function () {
                b.removeGroup(a)
            })
        }, this.removeGroup = function (a) {
            var b = this.groups.indexOf(a);
            -1 !== b && this.groups.splice(b, 1)
        }
    }
]).directive("accordion", function () {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function () {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function () {
            this.setHeading = function (a) {
                this.heading = a
            }
        }, link: function (a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function (b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function () {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }
    }
}).directive("accordionHeading", function () {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function (a, b, c, d, e) {
            d.setHeading(e(a, function () {
            }))
        }
    }
}).directive("accordionTransclude", function () {
    return {
        require: "^accordionGroup",
        link: function (a, b, c, d) {
            a.$watch(function () {
                return d[c.accordionTransclude]
            }, function (a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs",
    function (a, b) {
        a.closeable = "close" in b, this.close = a.close
    }
]).directive("alert", function () {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    }
}).directive("dismissOnTimeout", ["$timeout",
    function (a) {
        return {
            require: "alert",
            link: function (b, c, d, e) {
                a(function () {
                    e.close()
                }, parseInt(d.dismissOnTimeout, 10))
            }
        }
    }
]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
    return function (a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig",
    function (a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }
]).directive("btnRadio", function () {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function (a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function () {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function () {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function () {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function () {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function (a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }

            var h = d[0],
                i = d[1];
            i.$render = function () {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function () {
                a.$apply(function () {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition",
    function (a, b, c, d) {
        function e() {
            f();
            var b = +a.interval;
            !isNaN(b) && b > 0 && (h = c(g, b))
        }

        function f() {
            h && (c.cancel(h), h = null)
        }

        function g() {
            var b = +a.interval;
            i && !isNaN(b) && b > 0 ? a.next() : a.pause()
        }

        var h, i, j = this,
            k = j.slides = a.slides = [],
            l = -1;
        j.currentSlide = null;
        var m = !1;
        j.select = a.select = function (c, f) {
            function g() {
                if (!m) {
                    if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
                        c.$element.addClass(f);
                        {
                            c.$element[0].offsetWidth
                        }
                        angular.forEach(k, function (a) {
                            angular.extend(a, {
                                direction: "",
                                entering: !1,
                                leaving: !1,
                                active: !1
                            })
                        }), angular.extend(c, {
                            direction: f,
                            active: !0,
                            entering: !0
                        }), angular.extend(j.currentSlide || {}, {
                            direction: f,
                            leaving: !0
                        }), a.$currentTransition = d(c.$element, {}),
                            function (b, c) {
                                a.$currentTransition.then(function () {
                                    h(b, c)
                                }, function () {
                                    h(b, c)
                                })
                            }(c, j.currentSlide)
                    } else h(c, j.currentSlide);
                    j.currentSlide = c, l = i, e()
                }
            }

            function h(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }

            var i = k.indexOf(c);
            void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function () {
            m = !0
        }), j.indexOfSlide = function (a) {
            return k.indexOf(a)
        }, a.next = function () {
            var b = (l + 1) % k.length;
            return a.$currentTransition ? void 0 : j.select(k[b], "next")
        }, a.prev = function () {
            var b = 0 > l - 1 ? k.length - 1 : l - 1;
            return a.$currentTransition ? void 0 : j.select(k[b], "prev")
        }, a.isActive = function (a) {
            return j.currentSlide === a
        }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function () {
            i || (i = !0, e())
        }, a.pause = function () {
            a.noPause || (i = !1, f())
        }, j.addSlide = function (b, c) {
            b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
        }, j.removeSlide = function (a) {
            var b = k.indexOf(a);
            k.splice(b, 1), k.length > 0 && a.active ? j.select(b >= k.length ? k[b - 1] : k[b]) : l > b && l--
        }
    }
]).directive("carousel", [
    function () {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }
]).directive("slide", function () {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?"
        },
        link: function (a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function () {
                d.removeSlide(a)
            }), a.$watch("active", function (b) {
                b && d.select(a)
            })
        }
    }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter",
    function (a, b) {
        function c(a) {
            var c = [],
                d = a.split("");
            return angular.forEach(e, function (b, e) {
                var f = a.indexOf(e);
                if (f > -1) {
                    a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                    for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                    a = a.join(""), c.push({
                        index: f,
                        apply: b.apply
                    })
                }
            }), {
                regex: new RegExp("^" + d.join("") + "$"),
                map: b(c, "index")
            }
        }

        function d(a, b, c) {
            return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
        }

        this.parsers = {};
        var e = {
            yyyy: {
                regex: "\\d{4}",
                apply: function (a) {
                    this.year = +a
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function (a) {
                    this.year = +a + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function (a) {
                    this.year = +a
                }
            },
            MMMM: {
                regex: a.DATETIME_FORMATS.MONTH.join("|"),
                apply: function (b) {
                    this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
                }
            },
            MMM: {
                regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function (b) {
                    this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function (a) {
                    this.month = a - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function (a) {
                    this.month = a - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function (a) {
                    this.date = +a
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function (a) {
                    this.date = +a
                }
            },
            EEEE: {
                regex: a.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
            }
        };
        this.parse = function (b, e) {
            if (!angular.isString(b) || !e) return b;
            e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
            var f = this.parsers[e],
                g = f.regex,
                h = f.map,
                i = b.match(g);
            if (i && i.length) {
                for (var j, k = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0
                }, l = 1, m = i.length; m > l; l++) {
                    var n = h[l - 1];
                    n.apply && n.apply.call(k, i[l])
                }
                return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
            }
        }
    }
]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window",
    function (a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }

        var e = function (b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function (b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    },
                    f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {
                    width: g.width || b.prop("offsetWidth"),
                    height: g.height || b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }, offset: function (c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: d.width || c.prop("offsetWidth"),
                    height: d.height || c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
                }
            }, positionElements: function (a, b, c, d) {
                var e, f, g, h, i = c.split("-"),
                    j = i[0],
                    k = i[1] || "center";
                e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
                var l = {
                        center: function () {
                            return e.left + e.width / 2 - f / 2
                        }, left: function () {
                            return e.left
                        }, right: function () {
                            return e.left + e.width
                        }
                    },
                    m = {
                        center: function () {
                            return e.top + e.height / 2 - g / 2
                        }, top: function () {
                            return e.top
                        }, bottom: function () {
                            return e.top + e.height
                        }
                    };
                switch (j) {
                    case "right":
                        h = {
                            top: m[k](),
                            left: l[j]()
                        };
                        break;
                    case "left":
                        h = {
                            top: m[k](),
                            left: e.left - f
                        };
                        break;
                    case "bottom":
                        h = {
                            top: m[j](),
                            left: l[k]()
                        };
                        break;
                    default:
                        h = {
                            top: e.top - g,
                            left: l[k]()
                        }
                }
                return h
            }
        }
    }
]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig",
    function (a, b, c, d, e, f, g, h) {
        var i = this,
            j = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function (c, e) {
            i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
        }), angular.forEach(["minDate", "maxDate"], function (d) {
            b[d] ? a.$parent.$watch(c(b[d]), function (a) {
                i[d] = a ? new Date(a) : null, i.refreshView()
            }) : i[d] = h[d] ? new Date(h[d]) : null
        }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function (b) {
            return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
        }, this.init = function (a) {
            j = a, j.$render = function () {
                i.render()
            }
        }, this.render = function () {
            if (j.$modelValue) {
                var a = new Date(j.$modelValue),
                    b = !isNaN(a);
                b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
            }
            this.refreshView()
        }, this.refreshView = function () {
            if (this.element) {
                this._refreshView();
                var a = j.$modelValue ? new Date(j.$modelValue) : null;
                j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
            }
        }, this.createDateObject = function (a, b) {
            var c = j.$modelValue ? new Date(j.$modelValue) : null;
            return {
                date: a,
                label: g(a, b),
                selected: c && 0 === this.compare(a, c),
                disabled: this.isDisabled(a),
                current: 0 === this.compare(a, new Date)
            }
        }, this.isDisabled = function (c) {
            return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
                    date: c,
                    mode: a.datepickerMode
                })
        }, this.split = function (a, b) {
            for (var c = []; a.length > 0;) c.push(a.splice(0, b));
            return c
        }, a.select = function (b) {
            if (a.datepickerMode === i.minMode) {
                var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
            } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
        }, a.move = function (a) {
            var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
                c = i.activeDate.getMonth() + a * (i.step.months || 0);
            i.activeDate.setFullYear(b, c, 1), i.refreshView()
        }, a.toggleMode = function (b) {
            b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
        }, a.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var k = function () {
            e(function () {
                i.element[0].focus()
            }, 0, !1)
        };
        a.$on("datepicker.focus", k), a.keydown = function (b) {
            var c = a.keys[b.which];
            if (c && !b.shiftKey && !b.altKey)
                if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                    if (i.isDisabled(i.activeDate)) return;
                    a.select(i.activeDate), k()
                } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
        }
    }
]).directive("datepicker", function () {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&"
        },
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function (a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}).directive("daypicker", ["dateFilter",
    function (a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function (b, c, d, e) {
                function f(a, b) {
                    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
                }

                function g(a, b) {
                    var c = new Array(b),
                        d = new Date(a),
                        e = 0;
                    for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                    return c
                }

                function h(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }

                b.showWeeks = e.showWeeks, e.step = {
                    months: 1
                }, e.element = c;
                var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                e._refreshView = function () {
                    var c = e.activeDate.getFullYear(),
                        d = e.activeDate.getMonth(),
                        f = new Date(c, d, 1),
                        i = e.startingDay - f.getDay(),
                        j = i > 0 ? 7 - i : -i,
                        k = new Date(f);
                    j > 0 && k.setDate(-j + 1);
                    for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                        secondary: l[m].getMonth() !== d,
                        uid: b.uniqueId + "-" + m
                    });
                    b.labels = new Array(7);
                    for (var n = 0; 7 > n; n++) b.labels[n] = {
                        abbr: a(l[n].date, e.formatDayHeader),
                        full: a(l[n].date, "EEEE")
                    };
                    if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                        b.weekNumbers = [];
                        for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;) ;
                    }
                }, e.compare = function (a, b) {
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
                }, e.handleKeyDown = function (a) {
                    var b = e.activeDate.getDate();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 7;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 7;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
                    } else "home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                    e.activeDate.setDate(b)
                }, e.refreshView()
            }
        }
    }
]).directive("monthpicker", ["dateFilter",
    function (a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function (b, c, d, e) {
                e.step = {
                    years: 1
                }, e.element = c, e._refreshView = function () {
                    for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                        uid: b.uniqueId + "-" + f
                    });
                    b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
                }, e.compare = function (a, b) {
                    return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
                }, e.handleKeyDown = function (a) {
                    var b = e.activeDate.getMonth();
                    if ("left" === a) b -= 1;
                    else if ("up" === a) b -= 3;
                    else if ("right" === a) b += 1;
                    else if ("down" === a) b += 3;
                    else if ("pageup" === a || "pagedown" === a) {
                        var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setFullYear(c)
                    } else "home" === a ? b = 0 : "end" === a && (b = 11);
                    e.activeDate.setMonth(b)
                }, e.refreshView()
            }
        }
    }
]).directive("yearpicker", ["dateFilter",
    function () {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function (a, b, c, d) {
                function e(a) {
                    return parseInt((a - 1) / f, 10) * f + 1
                }

                var f = d.yearRange;
                d.step = {
                    years: f
                }, d.element = b, d._refreshView = function () {
                    for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                        uid: a.uniqueId + "-" + c
                    });
                    a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
                }, d.compare = function (a, b) {
                    return a.getFullYear() - b.getFullYear()
                }, d.handleKeyDown = function (a) {
                    var b = d.activeDate.getFullYear();
                    "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
                }, d.refreshView()
            }
        }
    }
]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    hasTimepicker:true,
    format:null,
    hourStep:1,
    secondStep:1,
    minuteStep:1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig","$filter","$parse",
    function (a, b, c, d, e, f, g , $filter ,$parse) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                hasTimepicker: "@",
                format: "@",
                hourStep: "@",
                secondStep: "@",
                minuteStep: "@",
                dateDisabled: "&"
            },
            link: function (h, i, j, k) {
                console.log(h);
                h.changeHours = function(){
                    /*  var o =  h.hours + 1;
                     h.hours =  o > 24 ? 0 : o;
                     $('[ng-model=hours]').val(h.hours);*/
                    h.hours = $('[ng-model=hours]').val();
                    setValue();
                }
                h.changeMinutes  = function(){
                    /*  var o =  h.minutes + 15;
                     h.minutes =  o > 60 ? 0 : o ;
                     $('[ng-model=minutes]').val(h.minutes);*/
                    h.minutes = $('[ng-model=minutes]').val();
                    setValue();
                }
                h.changeSecond = function(){
                    /*if( !h.date ){ return ;}
                     var o =  h.second + 15;
                     h.second =  o > 60 ? 0 : o ;*/
                    // $('[ng-model=second]').val(h.second);
                    h.second = $('[ng-model=second]').val();
                    setValue();
                }
                h.incrementHours = function (event) {
                    var o =  parseInt($('[ng-model=hours]').val() || h.hours) + 1;
                    h.hours =  o > 24 ? 0 : o;
                    $('[ng-model=hours]').val(h.hours);
                    setValue();
                };
                h.decrementHours = function (event) {
                    var  o =  parseInt($('[ng-model=hours]').val() || h.hours)  - 1;
                    h.hours =  o < 0 ? 24 : o ;
                    $('[ng-model=hours]').val(h.hours);
                    setValue();
                };
                h.incrementMinutes = function (event) {
                    var o =   parseInt($('[ng-model=minutes]').val() || h.minutes)  + 15;
                    h.minutes =  o > 60 ? 0 : o ;
                    $('[ng-model=minutes]').val(h.minutes);
                    setValue();
                };
                h.decrementMinutes = function (event) {
                    var o =  parseInt($('[ng-model=minutes]').val() || h.minutes) - 15;
                    h.minutes =  o < 0 ? 60 : o ;
                    $('[ng-model=minutes]').val(h.minutes);
                    setValue();
                };
                h.incrementSecond = function (event) {
                    if( !h.date ){ return ;}
                    var o =  parseInt($('[ng-model=second]').val() || h.second) + 15;
                    h.second =  o > 60 ? 0 : o ;
                    $('[ng-model=second]').val(h.second);
                    setValue();
                };
                h.decrementSecond = function (event) {
                    var o = parseInt($('[ng-model=second]').val() || h.second) - 15;
                    h.second =  o < 0 ? 60 :  o  ;
                    $('[ng-model=second]').val(h.second);
                    setValue();
                };

                function setValue(){
                    if( !h.date ){
                        h.date = new Date();
                    }
                    h.date.setHours( h.hours , h.minutes , h.second);
                    var defaultFormat = j.hasTimepicker ? "yyyy-MM-dd hh:mm:ss" : 'yyyy-MM-dd';
                    // $parse(j.ngModel).assign(h, $filter("date")(h.date, j.format || defaultFormat));
                    $('[ng-model="'+ j.ngModel +'"]').val( $filter("date")(h.date, j.format || defaultFormat));
                }

                if( h.date ){
                    var date =  h.date;
                    h.hours =   date.getHours() || 0;
                    h.minutes =  date.getMinutes() || 0;
                    h.second = date.getSeconds() || 0;
                }
                else{
                    h.hours =  0;
                    h.minutes =  0;
                    h.second =  0;
                }
                $('[ng-model=hours]').val(h.hours);
                $('[ng-model=minutes]').val(h.minutes);
                $('[ng-model=second]').val(h.second);

                function l(a) {
                    return a.replace(/([A-Z])/g, function (a) {
                        return "-" + a.toLowerCase()
                    })
                }

                function m(a) {
                    if (a) {
                        if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = f.parse(a, n) || new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null
                }

                var n,
                    o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                    p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
                h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function (a) {
                    return h[a + "Text"] || g[a + "Text"]
                }, j.$observe("datepickerPopup", function (a) {
                    n = a || g.datepickerPopup, k.$render()
                });
                var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                q.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var r = angular.element(q.children()[0]);
                j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function (a, b) {
                    r.attr(l(b), a)
                }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function (a) {
                    if (j[a]) {
                        var c = b(j[a]);
                        if (h.$parent.$watch(c, function (b) {
                                h.watchData[a] = b
                            }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                            var d = c.assign;
                            h.$watch("watchData." + a, function (a, b) {
                                a !== b && d(h.$parent, a)
                            })
                        }
                    }
                }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function (a) {
                    angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
                }, i.bind("input change keyup", function () {
                    h.$apply(function () {
                        h.date = k.$modelValue
                    })
                }), k.$render = function () {
                    var a = k.$viewValue ? e(k.$viewValue, n) : "";
                    i.val(a), h.date = m(k.$modelValue)
                };
                var s = function (a) {
                        h.isOpen && a.target !== i[0] && h.$apply(function () {
                            h.isOpen = !1
                        })
                    },
                    t = function (a) {
                        h.keydown(a)
                    };
                i.bind("keydown", t), h.keydown = function (a) {
                    27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
                }, h.$watch("isOpen", function (a) {
                    a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
                }), h.select = function (a) {
                    if ("today" === a) {
                        var b = new Date;
                        angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                    }
                    h.dateSelection(a)
                }, h.close = function () {
                    h.isOpen = !1, i[0].focus()
                };
                var u = a(q)(h);
                q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function () {
                    u.remove(), i.unbind("keydown", t), c.unbind("click", s)
                })
            }
        }
    }
]).directive("datepickerPopupWrap", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function (a, b) {
            b.bind("click", function (a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", ["$document",
    function (a) {
        var b = null;
        this.open = function (e) {
            b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
        }, this.close = function (e) {
            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
        };
        var c = function (a) {
                if (b) {
                    var c = b.getToggleElement();
                    a && c && c[0].contains(a.target) || b.$apply(function () {
                        b.isOpen = !1
                    })
                }
            },
            d = function (a) {
                27 === a.which && (b.focusToggleElement(), c())
            }
    }
]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate",
    function (a, b, c, d, e, f) {
        var g, h = this,
            i = a.$new(),
            j = d.openClass,
            k = angular.noop,
            l = b.onToggle ? c(b.onToggle) : angular.noop;
        this.init = function (d) {
            h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function (a) {
                i.isOpen = !!a
            }))
        }, this.toggle = function (a) {
            return i.isOpen = arguments.length ? !!a : !i.isOpen
        }, this.isOpen = function () {
            return i.isOpen
        }, i.getToggleElement = function () {
            return h.toggleElement
        }, i.focusToggleElement = function () {
            h.toggleElement && h.toggleElement[0].focus()
        }, i.$watch("isOpen", function (b, c) {
            f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
                open: !!b
            })
        }), a.$on("$locationChangeSuccess", function () {
            i.isOpen = !1
        }), a.$on("$destroy", function () {
            i.$destroy()
        })
    }
]).directive("dropdown", function () {
    return {
        controller: "DropdownController",
        link: function (a, b, c, d) {
            d.init(b)
        }
    }
}).directive("dropdownToggle", function () {
    return {
        require: "?^dropdown",
        link: function (a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function (e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function (a) {
                    b.attr("aria-expanded", !!a)
                }), a.$on("$destroy", function () {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
    return {
        createNew: function () {
            var a = [];
            return {
                add: function (b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                }, get: function (b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                }, keys: function () {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                }, top: function () {
                    return a[a.length - 1]
                }, remove: function (b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                }, removeTop: function () {
                    return a.splice(a.length - 1, 1)[0]
                }, length: function () {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout",
    function (a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            link: function (b, c, d) {
                b.backdropClass = d.backdropClass || "", b.animate = !1, a(function () {
                    b.animate = !0
                })
            }
        }
    }
]).directive("modalWindow", ["$modalStack", "$timeout",
    function (a, b) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: function (a, b) {
                return b.templateUrl || "template/modal/window.html"
            }, link: function (c, d, e) {
                d.addClass(e.windowClass || ""), c.size = e.size, d.on("click", function (a) {
                    c.close(a)
                }), b(function () {
                    c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
                }), c.close = function (b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }
        }
    }
]).directive("modalTransclude", function () {
    return {
        link: function (a, b, c, d, e) {
            e(a.$parent, function (a) {
                b.empty(), b.append(a)
            })
        }
    }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap",
    function (a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
            return a
        }

        function h(a) {
            var b = c.find("body").eq(0),
                d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, function () {
                d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
            })
        }

        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function () {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }

        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }

            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function () {
                    b.cancel(i), g(), d.$apply()
                })
            } else b(g)
        }

        var k, l, m = "modal-open",
            n = f.createNew(),
            o = {};
        return e.$watch(g, function (a) {
            l && (l.index = a)
        }), c.bind("keydown", function (a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function () {
                o.dismiss(b.key, "escape key press")
            })))
        }), o.open = function (a, b) {
            n.add(a, {
                deferred: b.deferred,
                modalScope: b.scope,
                backdrop: b.backdrop,
                keyboard: b.keyboard
            });
            var f = c.find("body").eq(0),
                h = g();
            if (h >= 0 && !k) {
                l = e.$new(!0), l.index = h;
                var i = angular.element("<div modal-backdrop></div>");
                i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
            }
            var j = angular.element("<div modal-window></div>");
            j.attr({
                "template-url": b.windowTemplateUrl,
                "window-class": b.windowClass,
                size: b.size,
                index: n.length() - 1,
                animate: "animate"
            }).html(b.content);
            var o = d(j)(b.scope);
            n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
        }, o.close = function (a, b) {
            var c = n.get(a);
            c && (c.value.deferred.resolve(b), h(a))
        }, o.dismiss = function (a, b) {
            var c = n.get(a);
            c && (c.value.deferred.reject(b), h(a))
        }, o.dismissAll = function (a) {
            for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function () {
            return n.top()
        }, o
    }
]).provider("$modal", function () {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack",
            function (b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
                        cache: f
                    }).then(function (a) {
                        return a.data
                    })
                }

                function j(a) {
                    var c = [];
                    return angular.forEach(a, function (a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }

                var k = {};
                return k.open = function (b) {
                    var e = d.defer(),
                        f = d.defer(),
                        k = {
                            result: e.promise,
                            opened: f.promise,
                            close: function (a) {
                                h.close(k, a)
                            }, dismiss: function (a) {
                                h.dismiss(k, a)
                            }
                        };
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function (a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {},
                            j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                            scope: d,
                            deferred: e,
                            content: a[0],
                            backdrop: b.backdrop,
                            keyboard: b.keyboard,
                            backdropClass: b.backdropClass,
                            windowClass: b.windowClass,
                            windowTemplateUrl: b.windowTemplateUrl,
                            size: b.size
                        })
                    }, function (a) {
                        e.reject(a)
                    }), l.then(function () {
                        f.resolve(!0)
                    }, function () {
                        f.reject(!1)
                    }), k
                }, k
            }
        ]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse",
    function (a, b, c) {
        var d = this,
            e = {
                $setViewValue: angular.noop
            },
            f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function (f, g) {
            e = f, this.config = g, e.$render = function () {
                d.render()
            }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
                d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
            }) : this.itemsPerPage = g.itemsPerPage
        }, this.calculateTotalPages = function () {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.render = function () {
            a.page = parseInt(e.$viewValue, 10) || 1
        }, a.selectPage = function (b) {
            a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
        }, a.getText = function (b) {
            return a[b + "Text"] || d.config[b + "Text"]
        }, a.noPrevious = function () {
            return 1 === a.page
        }, a.noNext = function () {
            return a.page === a.totalPages
        }, a.$watch("totalItems", function () {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function (b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }
]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig",
    function (a, b) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@"
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function (c, d, e, f) {
                function g(a, b, c) {
                    return {
                        number: a,
                        text: b,
                        active: c
                    }
                }

                function h(a, b) {
                    var c = [],
                        d = 1,
                        e = b,
                        f = angular.isDefined(k) && b > k;
                    f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                    for (var h = d; e >= h; h++) {
                        var i = g(h, h, h === a);
                        c.push(i)
                    }
                    if (f && !l) {
                        if (d > 1) {
                            var j = g(d - 1, "...", !1);
                            c.unshift(j)
                        }
                        if (b > e) {
                            var m = g(e + 1, "...", !1);
                            c.push(m)
                        }
                    }
                    return c
                }

                var i = f[0],
                    j = f[1];
                if (j) {
                    var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                        l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                    c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
                        k = parseInt(a, 10), i.render()
                    });
                    var m = i.render;
                    i.render = function () {
                        m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                    }
                }
            }
        }
    }
]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig",
    function (a) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@"
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function (b, c, d, e) {
                var f = e[0],
                    g = e[1];
                g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
            }
        }
    }
]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function (a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }

    var b = {
            placement: "top",
            animation: !0,
            popupDelay: 0
        },
        c = {
            mouseenter: "mouseleave",
            click: "click",
            focus: "blur"
        },
        d = {};
    this.options = function (a) {
        angular.extend(d, a)
    }, this.setTriggers = function (a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate",
        function (e, f, g, h, i, j) {
            return function (e, k, l) {
                function m(a) {
                    var b = a || n.trigger || l,
                        d = c[b] || b;
                    return {
                        show: b,
                        hide: d
                    }
                }

                var n = angular.extend({}, b, d),
                    o = a(e),
                    p = j.startSymbol(),
                    q = j.endSymbol(),
                    r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
                return {
                    restrict: "EA",
                    compile: function () {
                        var a = f(r);
                        return function (b, c, d) {
                            function f() {
                                D.isOpen ? l() : j()
                            }

                            function j() {
                                (!C || b.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function (a) {
                                        a()
                                    })) : o()())
                            }

                            function l() {
                                b.$apply(function () {
                                    p()
                                })
                            }

                            function o() {
                                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), A ? h.find("body").append(w) : c.after(w), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                            }

                            function p() {
                                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                            }

                            function q() {
                                w && r(), x = D.$new(), w = a(x, angular.noop)
                            }

                            function r() {
                                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                            }

                            function s() {
                                t(), u()
                            }

                            function t() {
                                var a = d[k + "Placement"];
                                D.placement = angular.isDefined(a) ? a : n.placement
                            }

                            function u() {
                                var a = d[k + "PopupDelay"],
                                    b = parseInt(a, 10);
                                D.popupDelay = isNaN(b) ? n.popupDelay : b
                            }

                            function v() {
                                var a = d[k + "Trigger"];
                                F(), B = m(a), B.show === B.hide ? c.bind(B.show, f) : (c.bind(B.show, j), c.bind(B.hide, l))
                            }

                            var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
                                B = m(void 0),
                                C = angular.isDefined(d[k + "Enable"]),
                                D = b.$new(!0),
                                E = function () {
                                    var a = i.positionElements(c, w, D.placement, A);
                                    a.top += "px", a.left += "px", w.css(a)
                                };
                            D.isOpen = !1, d.$observe(e, function (a) {
                                D.content = a, !a && D.isOpen && p()
                            }), d.$observe("disabled", function (a) {
                                a && D.isOpen && p()
                            }), d.$observe(k + "Title", function (a) {
                                D.title = a
                            });
                            var F = function () {
                                c.unbind(B.show, j), c.unbind(B.hide, l)
                            };
                            v();
                            var G = b.$eval(d[k + "Animation"]);
                            D.animation = angular.isDefined(G) ? !!G : n.animation;
                            var H = b.$eval(d[k + "AppendToBody"]);
                            A = angular.isDefined(H) ? H : A, A && b.$on("$locationChangeSuccess", function () {
                                D.isOpen && p()
                            }), b.$on("$destroy", function () {
                                g.cancel(y), g.cancel(z), F(), r(), D = null
                            })
                        }
                    }
                }
            }
        }
    ]
}).directive("tooltipPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip",
    function (a) {
        return a("tooltip", "tooltip", "mouseenter")
    }
]).directive("tooltipHtmlUnsafePopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip",
    function (a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }
]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip",
    function (a) {
        return a("popover", "popover", "click")
    }
]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig",
    function (a, b, c) {
        var d = this,
            e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function (b, c) {
            e || c.css({
                transition: "none"
            }), this.bars.push(b), b.$watch("value", function (c) {
                b.percent = +(100 * c / a.max).toFixed(2)
            }), b.$on("$destroy", function () {
                c = null, d.removeBar(b)
            })
        }, this.removeBar = function (a) {
            this.bars.splice(this.bars.indexOf(a), 1)
        }
    }
]).directive("progress", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function (a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function () {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function (a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig",
    function (a, b, c) {
        var d = {
            $setViewValue: angular.noop
        };
        this.init = function (e) {
            d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
            var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
            a.range = this.buildTemplateObjects(f)
        }, this.buildTemplateObjects = function (a) {
            for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
                index: b
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, a[b]);
            return a
        }, a.rate = function (b) {
            !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
        }, a.enter = function (b) {
            a.readonly || (a.value = b), a.onHover({
                value: b
            })
        }, a.reset = function () {
            a.value = d.$viewValue, a.onLeave()
        }, a.onKeydown = function (b) {
            /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
        }, this.render = function () {
            a.value = d.$viewValue
        }
    }
]).directive("rating", function () {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function (a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope",
    function (a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function (a) {
            angular.forEach(c, function (b) {
                b.active && b !== a && (b.active = !1, b.onDeselect())
            }), a.active = !0, a.onSelect()
        }, b.addTab = function (a) {
            c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
        }, b.removeTab = function (a) {
            var e = c.indexOf(a);
            if (a.active && c.length > 1 && !d) {
                var f = e == c.length - 1 ? e - 1 : e + 1;
                b.select(c[f])
            }
            c.splice(e, 1)
        };
        var d;
        a.$on("$destroy", function () {
            d = !0
        })
    }
]).directive("tabset", function () {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function (a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }
    }
}).directive("tab", ["$parse",
    function (a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function () {
            }, compile: function (b, c, d) {
                return function (b, c, e, f) {
                    b.$watch("active", function (a) {
                        a && f.select(b)
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
                        b.disabled = !!a
                    }), b.select = function () {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function () {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }
        }
    }
]).directive("tabHeadingTransclude", [
    function () {
        return {
            restrict: "A",
            require: "^tab",
            link: function (a, b) {
                a.$watch("headingElement", function (a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }
]).directive("tabContentTransclude", function () {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }

    return {
        restrict: "A",
        require: "^tabset",
        link: function (b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function (b) {
                angular.forEach(b, function (b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}),
    angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
        hourStep: 1,
        minuteStep: 1,
        showMeridian: !0,
        meridians: null,
        readonlyInput: !1,
        date: new Date() ,
        mousewheel: !0
    }).controller("TimepickerController",
        ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig",
            function (a, b, c, d, e, f) {

                console.log( a )

                function g() {
                    var b = parseInt(a.hours, 10),
                        c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
                    return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
                }

                function h() {
                    var b = parseInt(a.minutes, 10);
                    return b >= 0 && 60 > b ? b : void 0
                }

                function i(a) {
                    return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
                }

                function j(a) {
                    k(), o.$setViewValue(new Date(n)), l(a)
                }

                function k() {
                    o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
                }

                function l(b) {
                    var c = n.getHours(),
                        d = n.getMinutes();
                    a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
                }

                function m(a) {
                    var b = new Date(n.getTime() + 6e4 * a);
                    n.setHours(b.getHours(), b.getMinutes() , b.getSeconds()), j()
                    f.date.setHours(b.getHours(), b.getMinutes() , b.getSeconds()) ;
                }

                var n = new Date,
                    o = {
                        $setViewValue: angular.noop
                    },
                    p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
                this.init = function (c, d) {
                    o = c, o.$render = this.render;
                    var e = d.eq(0),
                        g = d.eq(1),
                        h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
                    h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
                };
                var q = f.hourStep;
                var s = f.secondStep;
                b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) {
                    q = parseInt(a, 10)
                });
                var r = f.minuteStep;
                b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) {
                    r = parseInt(a, 10)
                }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) {
                    if (a.showMeridian = !!b, o.$error.time) {
                        var c = g(),
                            d = h();
                        angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
                    } else l()
                }), this.setupMousewheelEvents = function (b, c) {
                    var d = function (a) {
                        a.originalEvent && (a = a.originalEvent);
                        var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                        return a.detail || b > 0
                    };
                    b.bind("mousewheel wheel", function (b) {
                        a.$apply(d(b) ? a.incrementHours(b) : a.decrementHours(b)), b.preventDefault()
                    }), c.bind("mousewheel wheel", function (b) {
                        a.$apply(d(b) ? a.incrementMinutes(b) : a.decrementMinutes(b)), b.preventDefault()
                    })
                }, this.setupInputEvents = function (b, c) {
                    if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
                    var d = function (b, c) {
                        o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
                    };
                    a.updateHours = function () {
                        var a = g();
                        angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
                    }, b.bind("blur", function () {
                        !a.invalidHours && a.hours < 10 && a.$apply(function () {
                            a.hours = i(a.hours)
                        })
                    }), a.updateMinutes = function () {
                        var a = h();
                        angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
                    }, c.bind("blur", function () {
                        !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
                            a.minutes = i(a.minutes)
                        })
                    })
                }, this.render = function () {
                    var a = o.$modelValue ? new Date(o.$modelValue) : null;
                    isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
                },
                    a.incrementHours = function (event) {
                        m(60 * q);
                        a.dateTime(event);
                    },
                    a.decrementHours = function (event) {
                        m(60 * -q);
                        a.dateTime(event);
                    },
                    a.incrementMinutes = function (event) {
                        m(r);
                        a.dateTime(event);
                    },
                    a.decrementMinutes = function (event) {
                        m(-r);
                        a.dateTime(event);
                    },
                    a.incrementSecond = function (event) {
                        m(s / 60 );
                        a.dateTime(event);
                    },
                    a.decrementSecond = function (event) {
                        m(-s  / 60 );
                        a.dateTime(event);
                    },
                    a.toggleMeridian = function () {
                        m(720 * (n.getHours() < 12 ? 1 : -1))
                    },
                    a.dateTime = function (event) {
                        var date = $(event.target).parents('ul').siblings('input[placeholder="日/月"]');
                        if (date.val().indexOf('-') > 0) {
                            var ymd = date.val().substr(0, 10);
                            var text = " " + this.hours + ":" + this.minutes;
                            date.val(ymd + text);
                        }
                    }
            }
        ]).directive("timepicker", function () {
        return {
            restrict: "EA",
            require: ["timepicker", "?^ngModel"],
            controller: "TimepickerController",
            replace: !0,
            scope: {},
            templateUrl: "template/timepicker/timepicker.html",
            link: function (a, b, c, d) {
                var e = d[0],
                    f = d[1];
                f && e.init(f, b.find("input"))
            }
        }
    }), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse",
    function (a) {
        var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function (c) {
                var d = c.match(b);
                if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }
]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser",
    function (a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function (i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1,
                    o = i.$eval(k.typeaheadWaitMs) || 0,
                    p = i.$eval(k.typeaheadEditable) !== !1,
                    q = b(k.typeaheadLoading).assign || angular.noop,
                    r = b(k.typeaheadOnSelect),
                    s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                    t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                    u = i.$eval(k.typeaheadFocusFirst) !== !1,
                    v = b(k.ngModel).assign,
                    w = g.parse(k.typeahead),
                    x = i.$new();
                i.$on("$destroy", function () {
                    x.$destroy()
                });
                var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
                j.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": y
                });
                var z = angular.element("<div typeahead-popup></div>");
                z.attr({
                    id: y,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
                var A = function () {
                        x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                    },
                    B = function (a) {
                        return y + "-option-" + a
                    };
                x.$watch("activeIdx", function (a) {
                    0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
                });
                var C = function (a) {
                    var b = {
                        $viewValue: a
                    };
                    q(i, !0), c.when(w.source(i, b)).then(function (c) {
                        var d = a === l.$viewValue;
                        if (d && m)
                            if (c.length > 0) {
                                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                                for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                    id: B(e),
                                    label: w.viewMapper(x, b),
                                    model: c[e]
                                });
                                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                            } else A();
                        d && q(i, !1)
                    }, function () {
                        A(), q(i, !1)
                    })
                };
                A(), x.query = void 0;
                var D, E = function (a) {
                        D = d(function () {
                            C(a)
                        }, o)
                    },
                    F = function () {
                        D && d.cancel(D)
                    };
                l.$parsers.unshift(function (a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function (a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
                }), x.select = function (a) {
                    var b, c, e = {};
                    e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {
                        $item: c,
                        $model: b,
                        $label: w.viewMapper(i, e)
                    }), A(), d(function () {
                        j[0].focus()
                    }, 0, !1)
                }, j.bind("keydown", function (a) {
                    0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function () {
                        x.select(x.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
                }), j.bind("blur", function () {
                    m = !1
                });
                var G = function (a) {
                    j[0] !== a.target && (A(), x.$digest())
                };
                e.bind("click", G), i.$on("$destroy", function () {
                    e.unbind("click", G), t && H.remove()
                });
                var H = a(z)(x);
                t ? e.find("body").append(H) : j.after(H)
            }
        }
    }
]).directive("typeaheadPopup", function () {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function (a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function () {
                return a.matches.length > 0
            }, a.isActive = function (b) {
                return a.active == b
            }, a.selectActive = function (b) {
                a.active = b
            }, a.selectMatch = function (b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse",
    function (a, b, c, d) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function (e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {
                    cache: b
                }).success(function (a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }
        }
    }
]).filter("typeaheadHighlight", function () {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    return function (b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache",
    function (a) {
        a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }
]), angular.module("template/accordion/accordion.html", []).run(["$templateCache",
    function (a) {
        a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }
]), angular.module("template/alert/alert.html", []).run(["$templateCache",
    function (a) {
        a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }
]), angular.module("template/carousel/carousel.html", []).run(["$templateCache",
    function (a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }
]), angular.module("template/carousel/slide.html", []).run(["$templateCache",
    function (a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }
]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }
]), angular.module("template/datepicker/day.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/datepicker/month.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]),
    angular.module("template/datepicker/popup.html", []).run(["$templateCache",
        function (a) {
            a.put("template/datepicker/popup.html",
                '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ' +
                'ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n ' +
                '<li ng-if="hasTimepicker" class="timepicker-panel">' +
                '<table  ng-required="true" hour-step="1" minute-step="5" second-step="5" show-meridian="ismeridian" required="required">' +
                '<tbody> <tr class="text-center"> ' +
                '<td><a ng-click="incrementHours($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td> ' +
                '<td>&nbsp;</td> ' +
                '<td><a ng-click="incrementMinutes($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td> ' +
                '<td>&nbsp;</td> ' +
                '<td><a ng-click="incrementSecond($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td> ' +
                '<td ng-show="showMeridian" class="ng-hide"></td> </tr> ' +
                '<tr> ' +
                '<td  class="form-group" > ' +
                '<input type="text" ng-model="hours" class="form-control text-center " style="width:100%"  ng-mousewheel="incrementHours($event)" ng-change="changeHours()" maxlength="2"> ' +
                '</td> ' +
                '<td>:</td> ' +
                '<td class="form-group"> ' +
                '<input type="text" ng-model="minutes" class="form-control text-center "  style="width:100%"  ng-change="changeMinutes()" maxlength="2"> ' +
                '</td> ' +
                '<td>:</td> ' +
                '<td class="form-group"> ' +
                '<input type="text" ng-model="second" class="form-control text-center "  style="width:100%"   ng-change="changeSecond()" maxlength="2"> ' +
                '</td> ' +
                '</tr> ' +
                '<tr class="text-center"> ' +
                '<td><a ng-click="decrementHours($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td> ' +
                '<td>&nbsp;</td> ' +
                '<td><a ng-click="decrementMinutes($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td> ' +
                '<td>&nbsp;</td> ' +
                '<td><a ng-click="decrementSecond($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td> ' +
                '<td ng-show="showMeridian" class="ng-hide"></td> ' +
                '</tr> ' +
                '</tbody> </table><li>' +
                '<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			' +
                '<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			' +
                '<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		' +
                '</span>\n		<button type="button" class="btn btn-sm btn-success pull-right btn-close" ng-click="close()">{{ getText(\'close\') }}</button>\n	' +
                '</li>\n</ul>\n')
        }
    ]), angular.module("template/datepicker/year.html", []).run(["$templateCache",
    function (a) {
        a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/modal/backdrop.html", []).run(["$templateCache",
    function (a) {
        a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }
]), angular.module("template/modal/window.html", []).run(["$templateCache",
    function (a) {
        a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
    }
]), angular.module("template/pagination/pager.html", []).run(["$templateCache",
    function (a) {
        a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
    }
]), angular.module("template/pagination/pagination.html", []).run(["$templateCache",
    function (a) {
        a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
    }
]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }
]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }
]), angular.module("template/popover/popover.html", []).run(["$templateCache",
    function (a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }
]), angular.module("template/progressbar/bar.html", []).run(["$templateCache",
    function (a) {
        a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progress.html", []).run(["$templateCache",
    function (a) {
        a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache",
    function (a) {
        a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
    }
]), angular.module("template/rating/rating.html", []).run(["$templateCache",
    function (a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }
]), angular.module("template/tabs/tab.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }
]), angular.module("template/tabs/tabset.html", []).run(["$templateCache",
    function (a) {
        a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }
]),
    angular.module("template/timepicker/timepicker.html", []).run(["$templateCache",
        function (a) {
            a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n		' +
                '	<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			' +
                '<td ng-show="showMeridian"></td>\n		</tr>\n		' +
                '<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				' +
                '<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours($event)" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			' +
                '<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				' +
                '<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n		' +
                '	<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		' +
                '<tr class="text-center">\n			<td><a ng-click="decrementHours($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n		' +
                '	<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes($event)" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n		' +
                '	<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
        }
    ]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache",
    function (a) {
        a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }
]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache",
    function (a) {
        a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }
]);
/* iconpicker */
angular.module("ui-iconpicker/values/icon-groups-map", []).value("iconGroupsMap", {
    "bootstrap": {
        prefix: "glyphicon glyphicon-",
        classes: ["asterisk", "plus", "euro", "minus", "cloud", "envelope", "pencil", "glass", "music", "search", "heart", "star", "star-empty", "user", "film", "th-large", "th", "th-list", "ok", "remove", "zoom-in", "zoom-out", "off", "signal", "cog", "trash", "home", "file", "time", "road", "download-alt", "download", "upload", "inbox", "play-circle", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "indent-left", "indent-right", "facetime-video", "picture", "map-marker", "adjust", "tint", "edit", "share", "check", "move", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-sign", "minus-sign", "remove-sign", "ok-sign", "question-sign", "info-sign", "screenshot", "remove-circle", "ok-circle", "ban-circle", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "share-alt", "resize-full", "resize-small", "exclamation-sign", "gift", "leaf", "fire", "eye-open", "eye-close", "warning-sign", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder-close", "folder-open", "resize-vertical", "resize-horizontal", "hdd", "bullhorn", "bell", "certificate", "thumbs-up", "thumbs-down", "hand-right", "hand-left", "hand-up", "hand-down", "circle-arrow-right", "circle-arrow-left", "circle-arrow-up", "circle-arrow-down", "globe", "wrench", "tasks", "filter", "briefcase", "fullscreen", "dashboard", "paperclip", "heart-empty", "link", "phone", "pushpin", "usd", "gbp", "sort", "sort-by-alphabet", "sort-by-alphabet-alt", "sort-by-order", "sort-by-order-alt", "sort-by-attributes", "sort-by-attributes-alt", "unchecked", "expand", "collapse-down", "collapse-up", "log-in", "flash", "log-out", "new-window", "record", "save", "open", "saved", "import", "export", "send", "floppy-disk", "floppy-saved", "floppy-remove", "floppy-save", "floppy-open", "credit-card", "transfer", "cutlery", "header", "compressed", "earphone", "phone-alt", "tower", "stats", "sd-video", "hd-video", "subtitles", "sound-stereo", "sound-dolby", "sound-5-1", "sound-6-1", "sound-7-1", "copyright-mark", "registration-mark", "cloud-download", "cloud-upload", "tree-conifer", "tree-deciduous"]
    },
    "font-awesome": {
        prefix: "fa fa-lg fa-",
        classes: ["glass", "music", "search", "envelope-o", "heart", "star", "star-o", "user", "film", "th-large", "th", "th-list", "check", "times", "search-plus", "search-minus", "power-off", "signal", "gear", "cog", "trash-o", "home", "file-o", "clock-o", "road", "download", "arrow-circle-o-down", "arrow-circle-o-up", "inbox", "play-circle-o", "rotate-right", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "volume-up", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-left", "align-center", "align-right", "align-justify", "list", "dedent", "outdent", "indent", "video-camera", "picture-o", "pencil", "map-marker", "adjust", "tint", "edit", "pencil-square-o", "share-square-o", "check-square-o", "arrows", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "forward", "fast-forward", "step-forward", "eject", "chevron-left", "chevron-right", "plus-circle", "minus-circle", "times-circle", "check-circle", "question-circle", "info-circle", "crosshairs", "times-circle-o", "check-circle-o", "ban", "arrow-left", "arrow-right", "arrow-up", "arrow-down", "mail-forward", "share", "expand", "compress", "plus", "minus", "asterisk", "exclamation-circle", "gift", "leaf", "fire", "eye", "eye-slash", "warning", "exclamation-triangle", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "chevron-down", "retweet", "shopping-cart", "folder", "folder-open", "arrows-v", "arrows-h", "bar-chart-o", "twitter-square", "facebook-square", "camera-retro", "key", "gears", "cogs", "comments", "thumbs-o-up", "thumbs-o-down", "star-half", "heart-o", "sign-out", "linkedin-square", "thumb-tack", "external-link", "sign-in", "trophy", "github-square", "upload", "lemon-o", "phone", "square-o", "bookmark-o", "phone-square", "twitter", "facebook", "github", "unlock", "credit-card", "rss", "hdd-o", "bullhorn", "bell", "certificate", "hand-o-right", "hand-o-left", "hand-o-up", "hand-o-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-circle-down", "globe", "wrench", "tasks", "filter", "briefcase", "arrows-alt", "group", "users", "chain", "link", "cloud", "flask", "cut", "scissors", "copy", "files-o", "paperclip", "save", "floppy-o", "square", "bars", "list-ul", "list-ol", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-square", "google-plus-square", "google-plus", "money", "caret-down", "caret-up", "caret-left", "caret-right", "columns", "unsorted", "sort", "sort-down", "sort-asc", "sort-up", "sort-desc", "envelope", "linkedin", "rotate-left", "undo", "legal", "gavel", "dashboard", "tachometer", "comment-o", "comments-o", "flash", "bolt", "sitemap", "umbrella", "paste", "clipboard", "lightbulb-o", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-o", "coffee", "cutlery", "file-text-o", "building-o", "hospital-o", "ambulance", "medkit", "fighter-jet", "beer", "h-square", "plus-square", "angle-double-left", "angle-double-right", "angle-double-up", "angle-double-down", "angle-left", "angle-right", "angle-up", "angle-down", "desktop", "laptop", "tablet", "mobile-phone", "mobile", "circle-o", "quote-left", "quote-right", "spinner", "circle", "mail-reply", "reply", "github-alt", "folder-o", "folder-open-o", "smile-o", "frown-o", "meh-o", "gamepad", "keyboard-o", "flag-o", "flag-checkered", "terminal", "code", "reply-all", "mail-reply-all", "star-half-empty", "star-half-full", "star-half-o", "location-arrow", "crop", "code-fork", "unlink", "chain-broken", "question", "info", "exclamation", "superscript", "subscript", "eraser", "puzzle-piece", "microphone", "microphone-slash", "shield", "calendar-o", "fire-extinguisher", "rocket", "maxcdn", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-circle-down", "html5", "css3", "anchor", "unlock-alt", "bullseye", "ellipsis-h", "ellipsis-v", "rss-square", "play-circle", "ticket", "minus-square", "minus-square-o", "level-up", "level-down", "check-square", "pencil-square", "external-link-square", "share-square", "compass", "toggle-down", "caret-square-o-down", "toggle-up", "caret-square-o-up", "toggle-right", "caret-square-o-right", "euro", "eur", "gbp", "dollar", "usd", "rupee", "inr", "cny", "rmb", "yen", "jpy", "ruble", "rouble", "rub", "won", "krw", "bitcoin", "btc", "file", "file-text", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-numeric-asc", "sort-numeric-desc", "thumbs-up", "thumbs-down", "youtube-square", "youtube", "xing", "xing-square", "youtube-play", "dropbox", "stack-overflow", "instagram", "flickr", "adn", "bitbucket", "bitbucket-square", "tumblr", "tumblr-square", "long-arrow-down", "long-arrow-up", "long-arrow-left", "long-arrow-right", "apple", "windows", "android", "linux", "dribbble", "skype", "foursquare", "trello", "female", "male", "gittip", "sun-o", "moon-o", "archive", "bug", "vk", "weibo", "renren", "pagelines", "stack-exchange", "arrow-circle-o-right", "arrow-circle-o-left", "toggle-left", "caret-square-o-left", "dot-circle-o", "wheelchair", "vimeo-square", "turkish-lira", "try", "plus-square-o"]
    }
});
angular.module("ui-iconpicker/services/IconGroupCollection", ["ui-iconpicker/values/icon-groups-map"]).factory("IconGroupCollection", ["iconGroupsMap",
    function (iconGroupsMap) {
        var IconGroupCollection;
        return IconGroupCollection = (function () {
            function IconGroupCollection(groupIdLiteral) {
                if (groupIdLiteral == null) {
                    groupIdLiteral = "bootstrap"
                }
                this.iconGroupsMap = {};
                this.includeGroups(groupIdLiteral)
            }

            IconGroupCollection.prototype.filterByGroups = function (groupIdLiteral) {
                var group, groupId, groupIds, _ref;
                if (groupIdLiteral == null) {
                    groupIdLiteral = "bootstrap"
                }
                if (groupIdLiteral !== "all") {
                    groupIds = groupIdLiteral.split(" ");
                    _ref = this.iconGroupsMap;
                    for (groupId in _ref) {
                        group = _ref[groupId];
                        if (groupIds.indexOf(groupId) !== -1) {
                            delete this.iconGroupsMap[groupId]
                        }
                    }
                }
                return this
            };
            IconGroupCollection.prototype.includeGroups = function (groupIdLiteral) {
                var group, groupId, groupIds;
                if (groupIdLiteral == null) {
                    groupIdLiteral = "bootstrap"
                }
                groupIds = groupIdLiteral.split(" ");
                for (groupId in iconGroupsMap) {
                    group = iconGroupsMap[groupId];
                    if (this.iconGroupsMap[groupId] == null) {
                        if (groupIdLiteral === "all" || groupIds.indexOf(groupId) !== -1) {
                            this.iconGroupsMap[groupId] = group
                        }
                    }
                }
                return this
            };
            IconGroupCollection.prototype.getClassArray = function () {
                var classes, group, iconClass, id, _i, _len, _ref, _ref1;
                classes = [];
                _ref = this.iconGroupsMap;
                for (id in _ref) {
                    group = _ref[id];
                    _ref1 = group.classes;
                    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                        iconClass = _ref1[_i];
                        classes.push(group.prefix + iconClass)
                    }
                }
                return classes
            };
            return IconGroupCollection
        })()
    }
]);
angular.module("ui-iconpicker/templates/iconpicker", ["ui.bootstrap"]).run(["$templateCache",
    function ($templateCache) {
        return $templateCache.put("templates/iconpicker.html", "<span class=\"btn-group ui-iconpicker\" ng-click=\"open = !open\" ng-class=\"{ disabled: disabled,open:open }\">\n	<button type=\"button\" class=\"btn btn-default dropdown-toggle\"><i class=\"{{ iconClass }}\"></i><span class=\"caret\"></span>\n	</button>\n	<ul class=\"dropdown-menu\" role=\"menu\">\n		<li ng-repeat=\"class in availableIconClasses\">\n			<button class=\"btn btn-default\" type=\"button\" ng-click=\"$parent.iconClass = class\"><span class=\"{{ class }}\"></span></button>\n		</li>\n	</ul>\n	<input name=\"{{ name }}\" type=\"hidden\" value=\"{{ iconClass }}\" ng-if=\"name\" />\n</span>")
    }
]);
angular.module("ui-iconpicker/directives/ui-iconpicker", ["ui-iconpicker/services/IconGroupCollection", "ui-iconpicker/templates/iconpicker"]).directive("uiIconpicker", ["IconGroupCollection",
    function (IconGroupCollection) {
        return {
            replace: true,
            restrict: "E",
            scope: {
                name: "@",
                model: "=?ngModel"
            },
            templateUrl: "templates/iconpicker.html",
            link: function ($scope, $element, attrs) {
                var _ref;
                $scope.availableIconClasses = (new IconGroupCollection(attrs.groups)).getClassArray();
                $scope.iconClass = (_ref = attrs.value) != null ? _ref : '';
                if (attrs.ngModel) {
                    $scope.model = $scope[attrs.ngModel];
                    $scope.$watch("iconClass", function () {
                        return $scope.model = $scope.iconClass
                    });
                    $scope.$watch("model", function () {
                        return $scope.iconClass = $scope.model
                    })
                }
                $scope.open = false;
                $scope.$dropdownButton = $element.find("button").eq(0);
                return $scope.disabled = attrs.disabled != null
            }
        }
    }
]);
angular.module("ui-iconpicker", ["ui-iconpicker/directives/ui-iconpicker"]);
/*! angular-loading-bar v0.7.1*/
!function () {
    "use strict";
    angular.module("angular-loading-bar", ["cfp.loadingBarInterceptor"]), angular.module("chieffancypants.loadingBar", ["cfp.loadingBarInterceptor"]), angular.module("cfp.loadingBarInterceptor", ["cfp.loadingBar"]).config(["$httpProvider",
        function (a) {
            var b = ["$q", "$cacheFactory", "$timeout", "$rootScope", "$log", "cfpLoadingBar",
                function (b, c, d, e, f, g) {
                    function h() {
                        d.cancel(j), g.complete(), l = 0, k = 0
                    }

                    function i(b) {
                        var d, e = c.get("$http"),
                            f = a.defaults;
                        !b.cache && !f.cache || b.cache === !1 || "GET" !== b.method && "JSONP" !== b.method || (d = angular.isObject(b.cache) ? b.cache : angular.isObject(f.cache) ? f.cache : e);
                        var g = void 0 !== d ? void 0 !== d.get(b.url) : !1;
                        return void 0 !== b.cached && g !== b.cached ? b.cached : (b.cached = g, g)
                    }

                    var j, k = 0,
                        l = 0,
                        m = g.latencyThreshold;
                    return {
                        request: function (a) {
                            return a.ignoreLoadingBar || i(a) || (e.$broadcast("cfpLoadingBar:loading", {
                                url: a.url
                            }), 0 === k && (j = d(function () {
                                g.start()
                            }, m)), k++, g.set(l / k)), a
                        }, response: function (a) {
                            return a && a.config ? (a.config.ignoreLoadingBar || i(a.config) || (l++, e.$broadcast("cfpLoadingBar:loaded", {
                                url: a.config.url,
                                result: a
                            }), l >= k ? h() : g.set(l / k)), a) : (f.error("Broken interceptor detected: Config object not supplied in response:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"), a)
                        }, responseError: function (a) {
                            return a && a.config ? (a.config.ignoreLoadingBar || i(a.config) || (l++, e.$broadcast("cfpLoadingBar:loaded", {
                                url: a.config.url,
                                result: a
                            }), l >= k ? h() : g.set(l / k)), b.reject(a)) : (f.error("Broken interceptor detected: Config object not supplied in rejection:\n https://github.com/chieffancypants/angular-loading-bar/pull/50"), b.reject(a))
                        }
                    }
                }
            ];
            a.interceptors.push(b)
        }
    ]), angular.module("cfp.loadingBar", []).provider("cfpLoadingBar", function () {
        this.includeSpinner = !0, this.includeBar = !0, this.latencyThreshold = 100, this.startSize = .02, this.parentSelector = "body", this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>', this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>', this.$get = ["$injector", "$document", "$timeout", "$rootScope",
            function (a, b, c, d) {
                function e() {
                    k || (k = a.get("$animate"));
                    var e = b.find(n).eq(0);
                    c.cancel(m), r || (d.$broadcast("cfpLoadingBar:started"), r = !0, u && k.enter(o, e, angular.element(e[0].lastChild)), t && k.enter(q, e, angular.element(e[0].lastChild)), f(v))
                }

                function f(a) {
                    if (r) {
                        var b = 100 * a + "%";
                        p.css("width", b), s = a, c.cancel(l), l = c(function () {
                            g()
                        }, 250)
                    }
                }

                function g() {
                    if (!(h() >= 1)) {
                        var a = 0,
                            b = h();
                        a = b >= 0 && .25 > b ? (3 * Math.random() + 3) / 100 : b >= .25 && .65 > b ? 3 * Math.random() / 100 : b >= .65 && .9 > b ? 2 * Math.random() / 100 : b >= .9 && .99 > b ? .005 : 0;
                        var c = h() + a;
                        f(c)
                    }
                }

                function h() {
                    return s
                }

                function i() {
                    s = 0, r = !1
                }

                function j() {
                    k || (k = a.get("$animate")), d.$broadcast("cfpLoadingBar:completed"), f(1), c.cancel(m), m = c(function () {
                        var a = k.leave(o, i);
                        a && a.then && a.then(i), k.leave(q)
                    }, 500)
                }

                var k, l, m, n = this.parentSelector,
                    o = angular.element(this.loadingBarTemplate),
                    p = o.find("div").eq(0),
                    q = angular.element(this.spinnerTemplate),
                    r = !1,
                    s = 0,
                    t = this.includeSpinner,
                    u = this.includeBar,
                    v = this.startSize;
                return {
                    start: e,
                    set: f,
                    status: h,
                    inc: g,
                    complete: j,
                    includeSpinner: this.includeSpinner,
                    latencyThreshold: this.latencyThreshold,
                    parentSelector: this.parentSelector,
                    startSize: this.startSize
                }
            }
        ]
    })
}();
!function () {
    function a(a, b) {
        window.XMLHttpRequest.prototype[a] = b(window.XMLHttpRequest.prototype[a])
    }

    function b(a, b, c) {
        try {
            Object.defineProperty(a, b, {
                get: c
            })
        } catch (d) {
        }
    }

    if (window.FileAPI || (window.FileAPI = {}), FileAPI.shouldLoad = window.XMLHttpRequest && !window.FormData || FileAPI.forceLoad, FileAPI.shouldLoad) {
        var c = function (a) {
            if (!a.__listeners) {
                a.upload || (a.upload = {}), a.__listeners = [];
                var b = a.upload.addEventListener;
                a.upload.addEventListener = function (c, d) {
                    a.__listeners[c] = d, b && b.apply(this, arguments)
                }
            }
        };
        a("open", function (a) {
            return function (b, d, e) {
                c(this), this.__url = d;
                try {
                    a.apply(this, [b, d, e])
                } catch (f) {
                    f.message.indexOf("Access is denied") > -1 && (this.__origError = f, a.apply(this, [b, "_fix_for_ie_crossdomain__", e]))
                }
            }
        }), a("getResponseHeader", function (a) {
            return function (b) {
                return this.__fileApiXHR && this.__fileApiXHR.getResponseHeader ? this.__fileApiXHR.getResponseHeader(b) : null == a ? null : a.apply(this, [b])
            }
        }), a("getAllResponseHeaders", function (a) {
            return function () {
                return this.__fileApiXHR && this.__fileApiXHR.getAllResponseHeaders ? this.__fileApiXHR.getAllResponseHeaders() : null == a ? null : a.apply(this)
            }
        }), a("abort", function (a) {
            return function () {
                return this.__fileApiXHR && this.__fileApiXHR.abort ? this.__fileApiXHR.abort() : null == a ? null : a.apply(this)
            }
        }), a("setRequestHeader", function (a) {
            return function (b, d) {
                if ("__setXHR_" === b) {
                    c(this);
                    var e = d(this);
                    e instanceof Function && e(this)
                } else this.__requestHeaders = this.__requestHeaders || {}, this.__requestHeaders[b] = d, a.apply(this, arguments)
            }
        }), a("send", function (a) {
            return function () {
                var c = this;
                if (arguments[0] && arguments[0].__isFileAPIShim) {
                    var d = arguments[0],
                        e = {
                            url: c.__url,
                            jsonp: !1,
                            cache: !0,
                            complete: function (a, d) {
                                c.__completed = !0, !a && c.__listeners.load && c.__listeners.load({
                                    type: "load",
                                    loaded: c.__loaded,
                                    total: c.__total,
                                    target: c,
                                    lengthComputable: !0
                                }), !a && c.__listeners.loadend && c.__listeners.loadend({
                                    type: "loadend",
                                    loaded: c.__loaded,
                                    total: c.__total,
                                    target: c,
                                    lengthComputable: !0
                                }), "abort" === a && c.__listeners.abort && c.__listeners.abort({
                                    type: "abort",
                                    loaded: c.__loaded,
                                    total: c.__total,
                                    target: c,
                                    lengthComputable: !0
                                }), void 0 !== d.status && b(c, "status", function () {
                                    return 0 === d.status && a && "abort" !== a ? 500 : d.status
                                }), void 0 !== d.statusText && b(c, "statusText", function () {
                                    return d.statusText
                                }), b(c, "readyState", function () {
                                    return 4
                                }), void 0 !== d.response && b(c, "response", function () {
                                    return d.response
                                });
                                var e = d.responseText || (a && 0 === d.status && "abort" !== a ? a : void 0);
                                b(c, "responseText", function () {
                                    return e
                                }), b(c, "response", function () {
                                    return e
                                }), a && b(c, "err", function () {
                                    return a
                                }), c.__fileApiXHR = d, c.onreadystatechange && c.onreadystatechange(), c.onload && c.onload()
                            }, progress: function (a) {
                                if (a.target = c, c.__listeners.progress && c.__listeners.progress(a), c.__total = a.total, c.__loaded = a.loaded, a.total === a.loaded) {
                                    var b = this;
                                    setTimeout(function () {
                                        c.__completed || (c.getAllResponseHeaders = function () {
                                        }, b.complete(null, {
                                            status: 204,
                                            statusText: "No Content"
                                        }))
                                    }, FileAPI.noContentTimeout || 1e4)
                                }
                            }, headers: c.__requestHeaders
                        };
                    e.data = {}, e.files = {};
                    for (var f = 0; f < d.data.length; f++) {
                        var g = d.data[f];
                        null != g.val && null != g.val.name && null != g.val.size && null != g.val.type ? e.files[g.key] = g.val : e.data[g.key] = g.val
                    }
                    setTimeout(function () {
                        if (!FileAPI.hasFlash) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                        c.__fileApiXHR = FileAPI.upload(e)
                    }, 1)
                } else {
                    if (this.__origError) throw this.__origError;
                    a.apply(c, arguments)
                }
            }
        }), window.XMLHttpRequest.__isFileAPIShim = !0, window.FormData = FormData = function () {
            return {
                append: function (a, b, c) {
                    b.__isFileAPIBlobShim && (b = b.data[0]), this.data.push({
                        key: a,
                        val: b,
                        name: c
                    })
                }, data: [],
                __isFileAPIShim: !0
            }
        }, window.Blob = Blob = function (a) {
            return {
                data: a,
                __isFileAPIBlobShim: !0
            }
        }
    }
}(),
    function () {
        function a(a) {
            return "input" === a[0].tagName.toLowerCase() && a.attr("type") && "file" === a.attr("type").toLowerCase()
        }

        function b() {
            try {
                var a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                if (a) return !0
            } catch (b) {
                if (void 0 !== navigator.mimeTypes["application/x-shockwave-flash"]) return !0
            }
            return !1
        }

        function c(a) {
            var b = 0,
                c = 0;
            if (window.jQuery) return jQuery(a).offset();
            if (a.offsetParent)
                do b += a.offsetLeft - a.scrollLeft, c += a.offsetTop - a.scrollTop, a = a.offsetParent; while (a);
            return {
                left: b,
                top: c
            }
        }

        if (FileAPI.shouldLoad) {
            if (FileAPI.forceLoad && (FileAPI.html5 = !1), !FileAPI.upload) {
                var d, e, f, g, h, i = document.createElement("script"),
                    j = document.getElementsByTagName("script");
                if (window.FileAPI.jsUrl) d = window.FileAPI.jsUrl;
                else if (window.FileAPI.jsPath) e = window.FileAPI.jsPath;
                else
                    for (f = 0; f < j.length; f++)
                        if (h = j[f].src, g = h.search(/\/ng\-file\-upload[\-a-zA-z0-9\.]*\.js/), g > -1) {
                            e = h.substring(0, g + 1);
                            break
                        }
                null == FileAPI.staticPath && (FileAPI.staticPath = e), i.setAttribute("src", d || e + "FileAPI.min.js"), document.getElementsByTagName("head")[0].appendChild(i), FileAPI.hasFlash = b()
            }
            FileAPI.ngfFixIE = function (d, e, f, g) {
                if (!b()) throw 'Adode Flash Player need to be installed. To check ahead use "FileAPI.hasFlash"';
                var h = function () {
                    if (d.attr("disabled")) d.$$ngfRefElem.removeClass("js-fileapi-wrapper");
                    else {
                        var b = d.$$ngfRefElem;
                        b ? f(d.$$ngfRefElem) : (b = d.$$ngfRefElem = e(), b.addClass("js-fileapi-wrapper"), !a(d), setTimeout(function () {
                            b.bind("mouseenter", h)
                        }, 10), b.bind("change", function (a) {
                            i.apply(this, [a]), g.apply(this, [a])
                        })), a(d) || b.css("position", "absolute").css("top", c(d[0]).top + "px").css("left", c(d[0]).left + "px").css("width", d[0].offsetWidth + "px").css("height", d[0].offsetHeight + "px").css("filter", "alpha(opacity=0)").css("display", d.css("display")).css("overflow", "hidden").css("z-index", "900000").css("visibility", "visible")
                    }
                };
                d.bind("mouseenter", h);
                var i = function (a) {
                    for (var b = FileAPI.getFiles(a), c = 0; c < b.length; c++) void 0 === b[c].size && (b[c].size = 0), void 0 === b[c].name && (b[c].name = "file"), void 0 === b[c].type && (b[c].type = "undefined");
                    a.target || (a.target = {}), a.target.files = b, a.target.files !== b && (a.__files_ = b), (a.__files_ || a.target.files).item = function (b) {
                        return (a.__files_ || a.target.files)[b] || null
                    }
                }
            }, FileAPI.disableFileInput = function (a, b) {
                b ? a.removeClass("js-fileapi-wrapper") : a.addClass("js-fileapi-wrapper")
            }
        }
    }(), window.FileReader || (window.FileReader = function () {
    var a = this,
        b = !1;
    this.listeners = {}, this.addEventListener = function (b, c) {
        a.listeners[b] = a.listeners[b] || [], a.listeners[b].push(c)
    }, this.removeEventListener = function (b, c) {
        a.listeners[b] && a.listeners[b].splice(a.listeners[b].indexOf(c), 1)
    }, this.dispatchEvent = function (b) {
        var c = a.listeners[b.type];
        if (c)
            for (var d = 0; d < c.length; d++) c[d].call(a, b)
    }, this.onabort = this.onerror = this.onload = this.onloadstart = this.onloadend = this.onprogress = null;
    var c = function (b, c) {
            var d = {
                type: b,
                target: a,
                loaded: c.loaded,
                total: c.total,
                error: c.error
            };
            return null != c.result && (d.target.result = c.result), d
        },
        d = function (d) {
            b || (b = !0, a.onloadstart && a.onloadstart(c("loadstart", d)));
            var e;
            "load" === d.type ? (a.onloadend && a.onloadend(c("loadend", d)), e = c("load", d), a.onload && a.onload(e), a.dispatchEvent(e)) : "progress" === d.type ? (e = c("progress", d), a.onprogress && a.onprogress(e), a.dispatchEvent(e)) : (e = c("error", d), a.onerror && a.onerror(e), a.dispatchEvent(e))
        };
    this.readAsArrayBuffer = function (a) {
        FileAPI.readAsBinaryString(a, d)
    }, this.readAsBinaryString = function (a) {
        FileAPI.readAsBinaryString(a, d)
    }, this.readAsDataURL = function (a) {
        FileAPI.readAsDataURL(a, d)
    }, this.readAsText = function (a) {
        FileAPI.readAsText(a, d)
    }
}), !window.XMLHttpRequest || window.FileAPI && FileAPI.shouldLoad || (window.XMLHttpRequest.prototype.setRequestHeader = function (a) {
    return function (b, c) {
        if ("__setXHR_" === b) {
            var d = c(this);
            d instanceof Function && d(this)
        } else a.apply(this, arguments)
    }
}(window.XMLHttpRequest.prototype.setRequestHeader));
var ngFileUpload = angular.module("ngFileUpload", []);
ngFileUpload.version = "5.0.9", ngFileUpload.service("Upload", ["$http", "$q", "$timeout",
    function (a, b, c) {
        function d(d) {
            d.method = d.method || "POST", d.headers = d.headers || {};
            var e = b.defer(),
                f = e.promise;
            return d.headers.__setXHR_ = function () {
                return function (a) {
                    a && (d.__XHR = a, d.xhrFn && d.xhrFn(a), a.upload.addEventListener("progress", function (a) {
                        a.config = d, e.notify ? e.notify(a) : f.progressFunc && c(function () {
                                f.progressFunc(a)
                            })
                    }, !1), a.upload.addEventListener("load", function (a) {
                        a.lengthComputable && (a.config = d, e.notify ? e.notify(a) : f.progressFunc && c(function () {
                                f.progressFunc(a)
                            }))
                    }, !1))
                }
            }, a(d).then(function (a) {
                e.resolve(a)
            }, function (a) {
                e.reject(a)
            }, function (a) {
                e.notify(a)
            }), f.success = function (a) {
                return f.then(function (b) {
                    a(b.data, b.status, b.headers, d)
                }), f
            }, f.error = function (a) {
                return f.then(null, function (b) {
                    a(b.data, b.status, b.headers, d)
                }), f
            }, f.progress = function (a) {
                return f.progressFunc = a, f.then(null, null, function (b) {
                    a(b)
                }), f
            }, f.abort = function () {
                return d.__XHR && c(function () {
                    d.__XHR.abort()
                }), f
            }, f.xhr = function (a) {
                return d.xhrFn = function (b) {
                    return function () {
                        b && b.apply(f, arguments), a.apply(f, arguments)
                    }
                }(d.xhrFn), f
            }, f
        }

        this.upload = function (a) {
            function b(c, d, e) {
                if (void 0 !== d)
                    if (angular.isDate(d) && (d = d.toISOString()), angular.isString(d)) c.append(e, d);
                    else if ("form" === a.sendFieldsAs)
                        if (angular.isObject(d))
                            for (var f in d) d.hasOwnProperty(f) && b(c, d[f], e + "[" + f + "]");
                        else c.append(e, d);
                    else d = angular.isString(d) ? d : JSON.stringify(d), "json-blob" === a.sendFieldsAs ? c.append(e, new Blob([d], {
                            type: "application/json"
                        })) : c.append(e, d)
            }

            return a.headers = a.headers || {}, a.headers["Content-Type"] = void 0, a.transformRequest = a.transformRequest ? angular.isArray(a.transformRequest) ? a.transformRequest : [a.transformRequest] : [], a.transformRequest.push(function (c) {
                var d, e = new FormData,
                    f = {};
                for (d in a.fields) a.fields.hasOwnProperty(d) && (f[d] = a.fields[d]);
                c && (f.data = c);
                for (d in f)
                    if (f.hasOwnProperty(d)) {
                        var g = f[d];
                        a.formDataAppender ? a.formDataAppender(e, d, g) : b(e, g, d)
                    }
                if (null != a.file) {
                    var h = a.fileFormDataName || "file";
                    if (angular.isArray(a.file))
                        for (var i = angular.isString(h), j = 0; j < a.file.length; j++) e.append(i ? h : h[j], a.file[j], a.fileName && a.fileName[j] || a.file[j].name);
                    else e.append(h, a.file, a.fileName || a.file.name)
                }
                return e
            }), d(a)
        }, this.http = function (b) {
            return b.transformRequest = b.transformRequest || function (b) {
                    return window.ArrayBuffer && b instanceof window.ArrayBuffer || b instanceof Blob ? b : a.defaults.transformRequest[0](arguments)
                }, d(b)
        }
    }
]),
    function () {
        function a(a, e, f, g, h, i, j) {
            function k() {
                return "input" === e[0].tagName.toLowerCase() && f.type && "file" === f.type.toLowerCase()
            }

            function l(b) {
                if (!r) {
                    r = !0;
                    try {
                        for (var e = b.__files_ || b.target && b.target.files, j = [], k = [], l = 0; l < e.length; l++) {
                            var m = e.item(l);
                            c(a, h, f, m, b) ? j.push(m) : k.push(m)
                        }
                        d(h, i, a, g, f, f.ngfChange || f.ngfSelect, j, k, b), 0 === j.length && (b.target.value = j)
                    } finally {
                        r = !1
                    }
                }
            }

            function m(b) {
                f.ngfMultiple && b.attr("multiple", h(f.ngfMultiple)(a)), f.ngfCapture && b.attr("capture", h(f.ngfCapture)(a)), f.accept && b.attr("accept", f.accept);
                for (var c = 0; c < e[0].attributes.length; c++) {
                    var d = e[0].attributes[c];
                    (k() && "type" !== d.name || "type" !== d.name && "class" !== d.name && "id" !== d.name && "style" !== d.name) && b.attr(d.name, d.value)
                }
            }

            function n(b, c) {
                if (!c && (b || k())) return e.$$ngfRefElem || e;
                var d = angular.element('<input type="file">');
                return m(d), k() ? (e.replaceWith(d), e = d, d.attr("__ngf_gen__", !0), j(e)(a)) : (d.css("visibility", "hidden").css("position", "absolute").css("overflow", "hidden").css("width", "0px").css("height", "0px").css("z-index", "-100000").css("border", "none").css("margin", "0px").css("padding", "0px").attr("tabindex", "-1"), e.$$ngfRefElem && e.$$ngfRefElem.remove(), e.$$ngfRefElem = d, document.body.appendChild(d[0])), d
            }

            function o(b) {
                d(h, i, a, g, f, f.ngfChange || f.ngfSelect, [], [], b, !0)
            }

            function p(c) {
                function d(a) {
                    a && i[0].click(), (k() || !a) && e.bind("click touchend", p)
                }

                if (e.attr("disabled") || q) return !1;
                null != c && (c.preventDefault(), c.stopPropagation());
                var g = h(f.ngfResetOnClick)(a) !== !1,
                    i = n(c, g);
                return i && ((!c || g) && i.bind("change", l), c && g && h(f.ngfResetModelOnClick)(a) !== !1 && o(c), b(navigator.userAgent) ? setTimeout(function () {
                    d(c)
                }, 0) : d(c)), !1
            }

            if (!e.attr("__ngf_gen__")) {
                a.$on("$destroy", function () {
                    e.$$ngfRefElem && e.$$ngfRefElem.remove()
                });
                var q = !1;
                -1 === f.ngfSelect.search(/\W+$files\W+/) && a.$watch(f.ngfSelect, function (a) {
                    q = a === !1
                });
                var r = !1;
                window.FileAPI && window.FileAPI.ngfFixIE ? window.FileAPI.ngfFixIE(e, n, m, l) : p()
            }
        }

        function b(a) {
            var b = a.match(/Android[^\d]*(\d+)\.(\d+)/);
            return b && b.length > 2 ? parseInt(b[1]) < 4 || 4 === parseInt(b[1]) && parseInt(b[2]) < 4 : /.*Windows.*Safari.*/.test(a)
        }

        ngFileUpload.directive("ngfSelect", ["$parse", "$timeout", "$compile",
            function (b, c, d) {
                return {
                    restrict: "AEC",
                    require: "?ngModel",
                    link: function (e, f, g, h) {
                        a(e, f, g, h, b, c, d)
                    }
                }
            }
        ]), ngFileUpload.validate = function (a, b, c, d, e) {
            function f(a) {
                if (a.length > 2 && "/" === a[0] && "/" === a[a.length - 1]) return a.substring(1, a.length - 1);
                var b = a.split(","),
                    c = "";
                if (b.length > 1)
                    for (var d = 0; d < b.length; d++) c += "(" + f(b[d]) + ")", d < b.length - 1 && (c += "|");
                else 0 === a.indexOf(".") && (a = "*" + a), c = "^" + a.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g"), "\\$&") + "$", c = c.replace(/\\\*/g, ".*").replace(/\\\?/g, ".");
                return c
            }

            var g = b(c.ngfAccept)(a, {
                    $file: d,
                    $event: e
                }),
                h = b(c.ngfMaxSize)(a, {
                        $file: d,
                        $event: e
                    }) || 9007199254740991,
                i = b(c.ngfMinSize)(a, {
                        $file: d,
                        $event: e
                    }) || -1;
            if (null != g && angular.isString(g)) {
                var j = new RegExp(f(g), "gi");
                g = null != d.type && j.test(d.type.toLowerCase()) || null != d.name && j.test(d.name.toLowerCase())
            }
            return (null == g || g) && (null == d.size || d.size < h && d.size > i)
        }, ngFileUpload.updateModel = function (a, b, c, d, e, f, g, h, i, j) {
            function k() {
                if (a(e.ngfKeep)(c) === !0) {
                    var j = (d.$modelValue || []).slice(0);
                    if (g && g.length)
                        if (a(e.ngfKeepDistinct)(c) === !0) {
                            for (var k = j.length, l = 0; l < g.length; l++) {
                                for (var m = 0; k > m && g[l].name !== j[m].name; m++) ;
                                m === k && j.push(g[l])
                            }
                            g = j
                        } else g = j.concat(g);
                    else g = j
                }
                d && (a(e.ngModel).assign(c, g), b(function () {
                    d && d.$setViewValue(null != g && 0 === g.length ? null : g)
                })), e.ngModelRejected && a(e.ngModelRejected).assign(c, h), f && a(f)(c, {
                    $files: g,
                    $rejectedFiles: h,
                    $event: i
                })
            }

            j ? k() : b(function () {
                k()
            })
        };
        var c = ngFileUpload.validate,
            d = ngFileUpload.updateModel
    }(),
    function () {
        function a(a, e, f, g, h, i, j) {
            function k(a, b, d) {
                var e = !0,
                    f = d.dataTransfer.items;
                if (null != f)
                    for (var g = 0; g < f.length && e; g++) e = e && ("file" === f[g].kind || "" === f[g].kind) && c(a, h, b, f[g], d);
                var i = h(b.ngfDragOverClass)(a, {
                    $event: d
                });
                return i && (i.delay && (r = i.delay), i.accept && (i = e ? i.accept : i.reject)), i || b.ngfDragOverClass || "dragover"
            }

            function l(b, d, e, g) {
                function k(d) {
                    c(a, h, f, d, b) ? m.push(d) : n.push(d)
                }

                function l(a, b, c) {
                    if (null != b)
                        if (b.isDirectory) {
                            var d = (c || "") + b.name;
                            k({
                                name: b.name,
                                type: "directory",
                                path: d
                            });
                            var e = b.createReader(),
                                f = [];
                            p++;
                            var g = function () {
                                e.readEntries(function (d) {
                                    try {
                                        if (d.length) f = f.concat(Array.prototype.slice.call(d || [], 0)), g();
                                        else {
                                            for (var e = 0; e < f.length; e++) l(a, f[e], (c ? c : "") + b.name + "/");
                                            p--
                                        }
                                    } catch (h) {
                                        p--, console.error(h)
                                    }
                                }, function () {
                                    p--
                                })
                            };
                            g()
                        } else p++, b.file(function (a) {
                            try {
                                p--, a.path = (c ? c : "") + a.name, k(a)
                            } catch (b) {
                                p--, console.error(b)
                            }
                        }, function () {
                            p--
                        })
                }

                var m = [],
                    n = [],
                    o = b.dataTransfer.items,
                    p = 0;
                if (o && o.length > 0 && "file" !== j.protocol())
                    for (var q = 0; q < o.length; q++) {
                        if (o[q].webkitGetAsEntry && o[q].webkitGetAsEntry() && o[q].webkitGetAsEntry().isDirectory) {
                            var r = o[q].webkitGetAsEntry();
                            if (r.isDirectory && !e) continue;
                            null != r && l(m, r)
                        } else {
                            var s = o[q].getAsFile();
                            null != s && k(s)
                        }
                        if (!g && m.length > 0) break
                    } else {
                    var t = b.dataTransfer.files;
                    if (null != t)
                        for (var u = 0; u < t.length && (k(t.item(u)), g || !(m.length > 0)); u++) ;
                }
                var v = 0;
                !function w(a) {
                    i(function () {
                        if (p) 10 * v++ < 2e4 && w(10);
                        else {
                            if (!g && m.length > 1) {
                                for (q = 0;
                                     "directory" === m[q].type;) q++;
                                m = [m[q]]
                            }
                            d(m, n)
                        }
                    }, a || 0)
                }()
            }

            var m = b();
            if (f.dropAvailable && i(function () {
                    a[f.dropAvailable] ? a[f.dropAvailable].value = m : a[f.dropAvailable] = m
                }), !m) return void(h(f.ngfHideOnDropNotAvailable)(a) === !0 && e.css("display", "none"));
            var n = !1;
            -1 === f.ngfDrop.search(/\W+$files\W+/) && a.$watch(f.ngfDrop, function (a) {
                n = a === !1
            });
            var o, p = null,
                q = h(f.ngfStopPropagation),
                r = 1;
            e[0].addEventListener("dragover", function (b) {
                if (!e.attr("disabled") && !n) {
                    if (b.preventDefault(), q(a) && b.stopPropagation(), navigator.userAgent.indexOf("Chrome") > -1) {
                        var c = b.dataTransfer.effectAllowed;
                        b.dataTransfer.dropEffect = "move" === c || "linkMove" === c ? "move" : "copy"
                    }
                    i.cancel(p), a.actualDragOverClass || (o = k(a, f, b)), e.addClass(o)
                }
            }, !1), e[0].addEventListener("dragenter", function (b) {
                e.attr("disabled") || n || (b.preventDefault(), q(a) && b.stopPropagation())
            }, !1), e[0].addEventListener("dragleave", function () {
                e.attr("disabled") || n || (p = i(function () {
                    e.removeClass(o), o = null
                }, r || 1))
            }, !1), e[0].addEventListener("drop", function (b) {
                e.attr("disabled") || n || (b.preventDefault(), q(a) && b.stopPropagation(), e.removeClass(o), o = null, l(b, function (c, e) {
                    d(h, i, a, g, f, f.ngfChange || f.ngfDrop, c, e, b)
                }, h(f.ngfAllowDir)(a) !== !1, f.multiple || h(f.ngfMultiple)(a)))
            }, !1)
        }

        function b() {
            var a = document.createElement("div");
            return "draggable" in a && "ondrop" in a
        }

        var c = ngFileUpload.validate,
            d = ngFileUpload.updateModel;
        ngFileUpload.directive("ngfDrop", ["$parse", "$timeout", "$location",
            function (b, c, d) {
                return {
                    restrict: "AEC",
                    require: "?ngModel",
                    link: function (e, f, g, h) {
                        a(e, f, g, h, b, c, d)
                    }
                }
            }
        ]), ngFileUpload.directive("ngfNoFileDrop", function () {
            return function (a, c) {
                b() && c.css("display", "none")
            }
        }), ngFileUpload.directive("ngfDropAvailable", ["$parse", "$timeout",
            function (a, c) {
                return function (d, e, f) {
                    if (b()) {
                        var g = a(f.ngfDropAvailable);
                        c(function () {
                            g(d), g.assign && g.assign(d, !0)
                        })
                    }
                }
            }
        ]), ngFileUpload.directive("ngfSrc", ["$parse", "$timeout",
            function (a, b) {
                return {
                    restrict: "AE",
                    link: function (d, e, f) {
                        window.FileReader && d.$watch(f.ngfSrc, function (g) {
                            g && c(d, a, f, g, null) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 8") || g.size < 2e4) && (!window.FileAPI || -1 === navigator.userAgent.indexOf("MSIE 9") || g.size < 4e6) ? b(function () {
                                var a = window.URL || window.webkitURL;
                                if (a && a.createObjectURL) e.attr("src", a.createObjectURL(g));
                                else {
                                    var c = new FileReader;
                                    c.readAsDataURL(g), c.onload = function (a) {
                                        b(function () {
                                            e.attr("src", a.target.result)
                                        })
                                    }
                                }
                            }) : e.attr("src", f.ngfDefaultSrc || "")
                        })
                    }
                }
            }
        ])
    }();
(function (e) {
    var t = function (e, t) {
            return e << t | e >>> 32 - t
        },
        n = function (e, t) {
            var n, r, i, s, o;
            return i = e & 2147483648, s = t & 2147483648, n = e & 1073741824, r = t & 1073741824, o = (e & 1073741823) + (t & 1073741823), n & r ? o ^ 2147483648 ^ i ^ s : n | r ? o & 1073741824 ? o ^ 3221225472 ^ i ^ s : o ^ 1073741824 ^ i ^ s : o ^ i ^ s
        },
        r = function (e, t, n) {
            return e & t | ~e & n
        },
        i = function (e, t, n) {
            return e & n | t & ~n
        },
        s = function (e, t, n) {
            return e ^ t ^ n
        },
        o = function (e, t, n) {
            return t ^ (e | ~n)
        },
        u = function (e, i, s, o, u, a, f) {
            return e = n(e, n(n(r(i, s, o), u), f)), n(t(e, a), i)
        },
        a = function (e, r, s, o, u, a, f) {
            return e = n(e, n(n(i(r, s, o), u), f)), n(t(e, a), r)
        },
        f = function (e, r, i, o, u, a, f) {
            return e = n(e, n(n(s(r, i, o), u), f)), n(t(e, a), r)
        },
        l = function (e, r, i, s, u, a, f) {
            return e = n(e, n(n(o(r, i, s), u), f)), n(t(e, a), r)
        },
        c = function (e) {
            var t, n = e.length,
                r = n + 8,
                i = (r - r % 64) / 64,
                s = (i + 1) * 16,
                o = Array(s - 1),
                u = 0,
                a = 0;
            while (a < n) t = (a - a % 4) / 4, u = a % 4 * 8, o[t] = o[t] | e.charCodeAt(a) << u, a++;
            return t = (a - a % 4) / 4, u = a % 4 * 8, o[t] = o[t] | 128 << u, o[s - 2] = n << 3, o[s - 1] = n >>> 29, o
        },
        h = function (e) {
            var t = "",
                n = "",
                r, i;
            for (i = 0; i <= 3; i++) r = e >>> i * 8 & 255, n = "0" + r.toString(16), t += n.substr(n.length - 2, 2);
            return t
        },
        p = function (e) {
            e = e.replace(/\x0d\x0a/g, "\n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(r & 63 | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(r & 63 | 128))
            }
            return t
        };
    e.extend({
        md5: function (e) {
            var t = Array(),
                r, i, s, o, d, v, m, g, y, b = 7,
                w = 12,
                E = 17,
                S = 22,
                x = 5,
                T = 9,
                N = 14,
                C = 20,
                k = 4,
                L = 11,
                A = 16,
                O = 23,
                M = 6,
                _ = 10,
                D = 15,
                P = 21;
            e = p(e), t = c(e), v = 1732584193, m = 4023233417, g = 2562383102, y = 271733878;
            for (r = 0; r < t.length; r += 16) i = v, s = m, o = g, d = y, v = u(v, m, g, y, t[r + 0], b, 3614090360), y = u(y, v, m, g, t[r + 1], w, 3905402710), g = u(g, y, v, m, t[r + 2], E, 606105819), m = u(m, g, y, v, t[r + 3], S, 3250441966), v = u(v, m, g, y, t[r + 4], b, 4118548399), y = u(y, v, m, g, t[r + 5], w, 1200080426), g = u(g, y, v, m, t[r + 6], E, 2821735955), m = u(m, g, y, v, t[r + 7], S, 4249261313), v = u(v, m, g, y, t[r + 8], b, 1770035416), y = u(y, v, m, g, t[r + 9], w, 2336552879), g = u(g, y, v, m, t[r + 10], E, 4294925233), m = u(m, g, y, v, t[r + 11], S, 2304563134), v = u(v, m, g, y, t[r + 12], b, 1804603682), y = u(y, v, m, g, t[r + 13], w, 4254626195), g = u(g, y, v, m, t[r + 14], E, 2792965006), m = u(m, g, y, v, t[r + 15], S, 1236535329), v = a(v, m, g, y, t[r + 1], x, 4129170786), y = a(y, v, m, g, t[r + 6], T, 3225465664), g = a(g, y, v, m, t[r + 11], N, 643717713), m = a(m, g, y, v, t[r + 0], C, 3921069994), v = a(v, m, g, y, t[r + 5], x, 3593408605), y = a(y, v, m, g, t[r + 10], T, 38016083), g = a(g, y, v, m, t[r + 15], N, 3634488961), m = a(m, g, y, v, t[r + 4], C, 3889429448), v = a(v, m, g, y, t[r + 9], x, 568446438), y = a(y, v, m, g, t[r + 14], T, 3275163606), g = a(g, y, v, m, t[r + 3], N, 4107603335), m = a(m, g, y, v, t[r + 8], C, 1163531501), v = a(v, m, g, y, t[r + 13], x, 2850285829), y = a(y, v, m, g, t[r + 2], T, 4243563512), g = a(g, y, v, m, t[r + 7], N, 1735328473), m = a(m, g, y, v, t[r + 12], C, 2368359562), v = f(v, m, g, y, t[r + 5], k, 4294588738), y = f(y, v, m, g, t[r + 8], L, 2272392833), g = f(g, y, v, m, t[r + 11], A, 1839030562), m = f(m, g, y, v, t[r + 14], O, 4259657740), v = f(v, m, g, y, t[r + 1], k, 2763975236), y = f(y, v, m, g, t[r + 4], L, 1272893353), g = f(g, y, v, m, t[r + 7], A, 4139469664), m = f(m, g, y, v, t[r + 10], O, 3200236656), v = f(v, m, g, y, t[r + 13], k, 681279174), y = f(y, v, m, g, t[r + 0], L, 3936430074), g = f(g, y, v, m, t[r + 3], A, 3572445317), m = f(m, g, y, v, t[r + 6], O, 76029189), v = f(v, m, g, y, t[r + 9], k, 3654602809), y = f(y, v, m, g, t[r + 12], L, 3873151461), g = f(g, y, v, m, t[r + 15], A, 530742520), m = f(m, g, y, v, t[r + 2], O, 3299628645), v = l(v, m, g, y, t[r + 0], M, 4096336452), y = l(y, v, m, g, t[r + 7], _, 1126891415), g = l(g, y, v, m, t[r + 14], D, 2878612391), m = l(m, g, y, v, t[r + 5], P, 4237533241), v = l(v, m, g, y, t[r + 12], M, 1700485571), y = l(y, v, m, g, t[r + 3], _, 2399980690), g = l(g, y, v, m, t[r + 10], D, 4293915773), m = l(m, g, y, v, t[r + 1], P, 2240044497), v = l(v, m, g, y, t[r + 8], M, 1873313359), y = l(y, v, m, g, t[r + 15], _, 4264355552), g = l(g, y, v, m, t[r + 6], D, 2734768916), m = l(m, g, y, v, t[r + 13], P, 1309151649), v = l(v, m, g, y, t[r + 4], M, 4149444226), y = l(y, v, m, g, t[r + 11], _, 3174756917), g = l(g, y, v, m, t[r + 2], D, 718787259), m = l(m, g, y, v, t[r + 9], P, 3951481745), v = n(v, i), m = n(m, s), g = n(g, o), y = n(y, d);
            var H = h(v) + h(m) + h(g) + h(y);
            return H.toLowerCase()
        }
    })
})(jQuery)
/* WebUploader 0.1.6 */
!function (a, b) {
    var c, d = {},
        e = function (a, b) {
            var c, d, e;
            if ("string" == typeof a) return h(a);
            for (c = [], d = a.length, e = 0; d > e; e++) c.push(h(a[e]));
            return b.apply(null, c)
        },
        f = function (a, b, c) {
            2 === arguments.length && (c = b, b = null), e(b || [], function () {
                g(a, c, arguments)
            })
        },
        g = function (a, b, c) {
            var f, g = {
                exports: b
            };
            "function" == typeof b && (c.length || (c = [e, g.exports, g]), f = b.apply(null, c), void 0 !== f && (g.exports = f)), d[a] = g.exports
        },
        h = function (b) {
            var c = d[b] || a[b];
            if (!c) throw new Error("`" + b + "` is undefined");
            return c
        },
        i = function (a) {
            var b, c, e, f, g, h;
            h = function (a) {
                return a && a.charAt(0).toUpperCase() + a.substr(1)
            };
            for (b in d)
                if (c = a, d.hasOwnProperty(b)) {
                    for (e = b.split("/"), g = h(e.pop()); f = h(e.shift());) c[f] = c[f] || {}, c = c[f];
                    c[g] = d[b]
                }
            return a
        },
        j = function (c) {
            return a.__dollar = c, i(b(a, f, e))
        };
    "object" == typeof module && "object" == typeof module.exports ? module.exports = j() : "function" == typeof define && define.amd ? define(["jquery"], j) : (c = a.WebUploader, a.WebUploader = j(), a.WebUploader.noConflict = function () {
        a.WebUploader = c
    })
}(window, function (a, b, c) {
    return b("dollar-third", [], function () {
        var b = a.require,
            c = a.__dollar || a.jQuery || a.Zepto || b("jquery") || b("zepto");
        if (!c) throw new Error("jQuery or Zepto not found!");
        return c
    }), b("dollar", ["dollar-third"], function (a) {
        return a
    }), b("promise-builtin", ["dollar"], function (a) {
        function b(b) {
            var c, d, e, f, g, h, i = [],
                j = !b && [],
                k = function (a) {
                    for (h = a, c = !0, g = e || 0, e = 0, f = i.length, d = !0; i && f > g; g++) i[g].apply(a[0], a[1]);
                    d = !1, i && (j ? j.length && k(j.shift()) : i = [])
                },
                l = {
                    add: function () {
                        if (i) {
                            var b = i.length;
                            !function c(b) {
                                a.each(b, function (b, d) {
                                    var e = a.type(d);
                                    "function" === e ? i.push(d) : d && d.length && "string" !== e && c(d)
                                })
                            }(arguments), d ? f = i.length : h && (e = b, k(h))
                        }
                        return this
                    }, disable: function () {
                        return i = j = h = void 0, this
                    }, lock: function () {
                        return j = void 0, h || l.disable(), this
                    }, fireWith: function (a, b) {
                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                    }, fire: function () {
                        return l.fireWith(this, arguments), this
                    }
                };
            return l
        }

        function c(d) {
            var e = [
                    ["resolve", "done", b(!0), "resolved"],
                    ["reject", "fail", b(!0), "rejected"],
                    ["notify", "progress", b()]
                ],
                f = "pending",
                g = {
                    state: function () {
                        return f
                    }, always: function () {
                        return h.done(arguments).fail(arguments), this
                    }, then: function () {
                        var b = arguments;
                        return c(function (c) {
                            a.each(e, function (d, e) {
                                var f = e[0],
                                    i = a.isFunction(b[d]) && b[d];
                                h[e[1]](function () {
                                    var b;
                                    b = i && i.apply(this, arguments), b && a.isFunction(b.promise) ? b.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f + "With"](this === g ? c.promise() : this, i ? [b] : arguments)
                                })
                            }), b = null
                        }).promise()
                    }, promise: function (b) {
                        return null != b ? a.extend(b, g) : g
                    }
                },
                h = {};
            return g.pipe = g.then, a.each(e, function (a, b) {
                var c = b[2],
                    d = b[3];
                g[b[1]] = c.add, d && c.add(function () {
                    f = d
                }, e[1 ^ a][2].disable, e[2][2].lock), h[b[0]] = function () {
                    return h[b[0] + "With"](this === h ? g : this, arguments), this
                }, h[b[0] + "With"] = c.fireWith
            }), g.promise(h), d && d.call(h, h), h
        }

        var d;
        return d = {
            Deferred: c,
            isPromise: function (a) {
                return a && "function" == typeof a.then
            }, when: function (b) {
                var d, e, f, g = 0,
                    h = [].slice,
                    i = h.call(arguments),
                    j = i.length,
                    k = 1 !== j || b && a.isFunction(b.promise) ? j : 0,
                    l = 1 === k ? b : c(),
                    m = function (a, b, c) {
                        return function (e) {
                            b[a] = this, c[a] = arguments.length > 1 ? h.call(arguments) : e, c === d ? l.notifyWith(b, c) : --k || l.resolveWith(b, c)
                        }
                    };
                if (j > 1)
                    for (d = new Array(j), e = new Array(j), f = new Array(j); j > g; g++) i[g] && a.isFunction(i[g].promise) ? i[g].promise().done(m(g, f, i)).fail(l.reject).progress(m(g, e, d)) : --k;
                return k || l.resolveWith(f, i), l.promise()
            }
        }
    }), b("promise", ["promise-builtin"], function (a) {
        return a
    }), b("base", ["dollar", "promise"], function (b, c) {
        function d(a) {
            return function () {
                return h.apply(a, arguments)
            }
        }

        function e(a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        }

        function f(a) {
            var b;
            return Object.create ? Object.create(a) : (b = function () {
            }, b.prototype = a, new b)
        }

        var g = function () {
            },
            h = Function.call;
        return {
            version: "0.1.6",
            $: b,
            Deferred: c.Deferred,
            isPromise: c.isPromise,
            when: c.when,
            browser: function (a) {
                var b = {},
                    c = a.match(/WebKit\/([\d.]+)/),
                    d = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/),
                    e = a.match(/MSIE\s([\d\.]+)/) || a.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
                    f = a.match(/Firefox\/([\d.]+)/),
                    g = a.match(/Safari\/([\d.]+)/),
                    h = a.match(/OPR\/([\d.]+)/);
                return c && (b.webkit = parseFloat(c[1])), d && (b.chrome = parseFloat(d[1])), e && (b.ie = parseFloat(e[1])), f && (b.firefox = parseFloat(f[1])), g && (b.safari = parseFloat(g[1])), h && (b.opera = parseFloat(h[1])), b
            }(navigator.userAgent),
            os: function (a) {
                var b = {},
                    c = a.match(/(?:Android);?[\s\/]+([\d.]+)?/),
                    d = a.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/);
                return c && (b.android = parseFloat(c[1])), d && (b.ios = parseFloat(d[1].replace(/_/g, "."))), b
            }(navigator.userAgent),
            inherits: function (a, c, d) {
                var e;
                return "function" == typeof c ? (e = c, c = null) : e = c && c.hasOwnProperty("constructor") ? c.constructor : function () {
                    return a.apply(this, arguments)
                }, b.extend(!0, e, a, d || {}), e.__super__ = a.prototype, e.prototype = f(a.prototype), c && b.extend(!0, e.prototype, c), e
            }, noop: g,
            bindFn: e,
            log: function () {
                return a.console ? e(console.log, console) : g
            }(),
            nextTick: function () {
                return function (a) {
                    setTimeout(a, 1)
                }
            }(),
            slice: d([].slice),
            guid: function () {
                var a = 0;
                return function (b) {
                    for (var c = (+new Date).toString(32), d = 0; 5 > d; d++) c += Math.floor(65535 * Math.random()).toString(32);
                    return (b || "wu_") + c + (a++).toString(32)
                }
            }(),
            formatSize: function (a, b, c) {
                var d;
                for (c = c || ["B", "K", "M", "G", "TB"];
                     (d = c.shift()) && a > 1024;) a /= 1024;
                return ("B" === d ? a : a.toFixed(b || 2)) + d
            }
        }
    }), b("mediator", ["base"], function (a) {
        function b(a, b, c, d) {
            return f.grep(a, function (a) {
                return !(!a || b && a.e !== b || c && a.cb !== c && a.cb._cb !== c || d && a.ctx !== d)
            })
        }

        function c(a, b, c) {
            f.each((a || "").split(h), function (a, d) {
                c(d, b)
            })
        }

        function d(a, b) {
            for (var c, d = !1, e = -1, f = a.length; ++e < f;)
                if (c = a[e], c.cb.apply(c.ctx2, b) === !1) {
                    d = !0;
                    break
                }
            return !d
        }

        var e, f = a.$,
            g = [].slice,
            h = /\s+/;
        return e = {
            on: function (a, b, d) {
                var e, f = this;
                return b ? (e = this._events || (this._events = []), c(a, b, function (a, b) {
                    var c = {
                        e: a
                    };
                    c.cb = b, c.ctx = d, c.ctx2 = d || f, c.id = e.length, e.push(c)
                }), this) : this
            }, once: function (a, b, d) {
                var e = this;
                return b ? (c(a, b, function (a, b) {
                    var c = function () {
                        return e.off(a, c), b.apply(d || e, arguments)
                    };
                    c._cb = b, e.on(a, c, d)
                }), e) : e
            }, off: function (a, d, e) {
                var g = this._events;
                return g ? a || d || e ? (c(a, d, function (a, c) {
                    f.each(b(g, a, c, e), function () {
                        delete g[this.id]
                    })
                }), this) : (this._events = [], this) : this
            }, trigger: function (a) {
                var c, e, f;
                return this._events && a ? (c = g.call(arguments, 1), e = b(this._events, a), f = b(this._events, "all"), d(e, c) && d(f, arguments)) : this
            }
        }, f.extend({
            installTo: function (a) {
                return f.extend(a, e)
            }
        }, e)
    }), b("uploader", ["base", "mediator"], function (a, b) {
        function c(a) {
            this.options = d.extend(!0, {}, c.options, a), this._init(this.options)
        }

        var d = a.$;
        return c.options = {}, b.installTo(c.prototype), d.each({
            upload: "start-upload",
            stop: "stop-upload",
            getFile: "get-file",
            getFiles: "get-files",
            addFile: "add-file",
            addFiles: "add-file",
            sort: "sort-files",
            removeFile: "remove-file",
            cancelFile: "cancel-file",
            skipFile: "skip-file",
            retry: "retry",
            isInProgress: "is-in-progress",
            makeThumb: "make-thumb",
            md5File: "md5-file",
            getDimension: "get-dimension",
            addButton: "add-btn",
            predictRuntimeType: "predict-runtime-type",
            refresh: "refresh",
            disable: "disable",
            enable: "enable",
            reset: "reset"
        }, function (a, b) {
            c.prototype[a] = function () {
                return this.request(b, arguments)
            }
        }), d.extend(c.prototype, {
            state: "pending",
            _init: function (a) {
                var b = this;
                b.request("init", a, function () {
                    b.state = "ready", b.trigger("ready")
                })
            }, option: function (a, b) {
                var c = this.options;
                return arguments.length > 1 ? (d.isPlainObject(b) && d.isPlainObject(c[a]) ? d.extend(c[a], b) : c[a] = b, void 0) : a ? c[a] : c
            }, getStats: function () {
                var a = this.request("get-stats");
                return a ? {
                    successNum: a.numOfSuccess,
                    progressNum: a.numOfProgress,
                    cancelNum: a.numOfCancel,
                    invalidNum: a.numOfInvalid,
                    uploadFailNum: a.numOfUploadFailed,
                    queueNum: a.numOfQueue,
                    interruptNum: a.numofInterrupt
                } : {}
            }, trigger: function (a) {
                var c = [].slice.call(arguments, 1),
                    e = this.options,
                    f = "on" + a.substring(0, 1).toUpperCase() + a.substring(1);
                return b.trigger.apply(this, arguments) === !1 || d.isFunction(e[f]) && e[f].apply(this, c) === !1 || d.isFunction(this[f]) && this[f].apply(this, c) === !1 || b.trigger.apply(b, [this, a].concat(c)) === !1 ? !1 : !0
            }, destroy: function () {
                this.request("destroy", arguments), this.off()
            }, request: a.noop
        }), a.create = c.create = function (a) {
            return new c(a)
        }, a.Uploader = c, c
    }), b("runtime/runtime", ["base", "mediator"], function (a, b) {
        function c(b) {
            this.options = d.extend({
                container: document.body
            }, b), this.uid = a.guid("rt_")
        }

        var d = a.$,
            e = {},
            f = function (a) {
                for (var b in a)
                    if (a.hasOwnProperty(b)) return b;
                return null
            };
        return d.extend(c.prototype, {
            getContainer: function () {
                var a, b, c = this.options;
                return this._container ? this._container : (a = d(c.container || document.body), b = d(document.createElement("div")), b.attr("id", "rt_" + this.uid), b.css({
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1px",
                    height: "1px",
                    overflow: "hidden"
                }), a.append(b), a.addClass("webuploader-container"), this._container = b, this._parent = a, b)
            }, init: a.noop,
            exec: a.noop,
            destroy: function () {
                this._container && this._container.remove(), this._parent && this._parent.removeClass("webuploader-container"), this.off()
            }
        }), c.orders = "html5,flash", c.addRuntime = function (a, b) {
            e[a] = b
        }, c.hasRuntime = function (a) {
            return !!(a ? e[a] : f(e))
        }, c.create = function (a, b) {
            var g, h;
            if (b = b || c.orders, d.each(b.split(/\s*,\s*/g), function () {
                    return e[this] ? (g = this, !1) : void 0
                }), g = g || f(e), !g) throw new Error("Runtime Error");
            return h = new e[g](a)
        }, b.installTo(c.prototype), c
    }), b("runtime/client", ["base", "mediator", "runtime/runtime"], function (a, b, c) {
        function d(b, d) {
            var f, g = a.Deferred();
            this.uid = a.guid("client_"), this.runtimeReady = function (a) {
                return g.done(a)
            }, this.connectRuntime = function (b, h) {
                if (f) throw new Error("already connected!");
                return g.done(h), "string" == typeof b && e.get(b) && (f = e.get(b)), f = f || e.get(null, d), f ? (a.$.extend(f.options, b), f.__promise.then(g.resolve), f.__client++) : (f = c.create(b, b.runtimeOrder), f.__promise = g.promise(), f.once("ready", g.resolve), f.init(), e.add(f), f.__client = 1), d && (f.__standalone = d), f
            }, this.getRuntime = function () {
                return f
            }, this.disconnectRuntime = function () {
                f && (f.__client--, f.__client <= 0 && (e.remove(f), delete f.__promise, f.destroy()), f = null)
            }, this.exec = function () {
                if (f) {
                    var c = a.slice(arguments);
                    return b && c.unshift(b), f.exec.apply(this, c)
                }
            }, this.getRuid = function () {
                return f && f.uid
            }, this.destroy = function (a) {
                return function () {
                    a && a.apply(this, arguments), this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime()
                }
            }(this.destroy)
        }

        var e;
        return e = function () {
            var a = {};
            return {
                add: function (b) {
                    a[b.uid] = b
                }, get: function (b, c) {
                    var d;
                    if (b) return a[b];
                    for (d in a)
                        if (!c || !a[d].__standalone) return a[d];
                    return null
                }, remove: function (b) {
                    delete a[b.uid]
                }
            }
        }(), b.installTo(d.prototype), d
    }), b("lib/blob", ["base", "runtime/client"], function (a, b) {
        function c(a, c) {
            var d = this;
            d.source = c, d.ruid = a, this.size = c.size || 0, this.type = !c.type && this.ext && ~"jpg,jpeg,png,gif,bmp".indexOf(this.ext) ? "image/" + ("jpg" === this.ext ? "jpeg" : this.ext) : c.type || "application/octet-stream", b.call(d, "Blob"), this.uid = c.uid || this.uid, a && d.connectRuntime(a)
        }

        return a.inherits(b, {
            constructor: c,
            slice: function (a, b) {
                return this.exec("slice", a, b)
            }, getSource: function () {
                return this.source
            }
        }), c
    }), b("lib/file", ["base", "lib/blob"], function (a, b) {
        function c(a, c) {
            var f;
            this.name = c.name || "untitled" + d++, f = e.exec(c.name) ? RegExp.$1.toLowerCase() : "", !f && c.type && (f = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(c.type) ? RegExp.$1.toLowerCase() : "", this.name += "." + f), this.ext = f, this.lastModifiedDate = c.lastModifiedDate || (new Date).toLocaleString(), b.apply(this, arguments)
        }

        var d = 1,
            e = /\.([^.]+)$/;
        return a.inherits(b, c)
    }), b("lib/filepicker", ["base", "runtime/client", "lib/file"], function (b, c, d) {
        function e(a) {
            if (a = this.options = f.extend({}, e.options, a), a.container = f(a.id), !a.container.length) throw new Error("按钮指定错误");
            a.innerHTML = a.innerHTML || a.label || a.container.html() || "", a.button = f(a.button || document.createElement("div")), a.button.html(a.innerHTML), a.container.html(a.button), c.call(this, "FilePicker", !0)
        }

        var f = b.$;
        return e.options = {
            button: null,
            container: null,
            label: null,
            innerHTML: null,
            multiple: !0,
            accept: null,
            name: "file",
            style: "webuploader-pick"
        }, b.inherits(c, {
            constructor: e,
            init: function () {
                var c = this,
                    e = c.options,
                    g = e.button,
                    h = e.style;
                h && g.addClass("webuploader-pick"), c.on("all", function (a) {
                    var b;
                    switch (a) {
                        case "mouseenter":
                            h && g.addClass("webuploader-pick-hover");
                            break;
                        case "mouseleave":
                            h && g.removeClass("webuploader-pick-hover");
                            break;
                        case "change":
                            b = c.exec("getFiles"), c.trigger("select", f.map(b, function (a) {
                                return a = new d(c.getRuid(), a), a._refer = e.container, a
                            }), e.container)
                    }
                }), c.connectRuntime(e, function () {
                    c.refresh(), c.exec("init", e), c.trigger("ready")
                }), this._resizeHandler = b.bindFn(this.refresh, this), f(a).on("resize", this._resizeHandler)
            }, refresh: function () {
                var a = this.getRuntime().getContainer(),
                    b = this.options.button,
                    c = b.outerWidth ? b.outerWidth() : b.width(),
                    d = b.outerHeight ? b.outerHeight() : b.height(),
                    e = b.offset();
                c && d && a.css({
                    bottom: "auto",
                    right: "auto",
                    width: c + "px",
                    height: d + "px"
                }).offset(e)
            }, enable: function () {
                var a = this.options.button;
                a.removeClass("webuploader-pick-disable"), this.refresh()
            }, disable: function () {
                var a = this.options.button;
                this.getRuntime().getContainer().css({
                    top: "-99999px"
                }), a.addClass("webuploader-pick-disable")
            }, destroy: function () {
                var b = this.options.button;
                f(a).off("resize", this._resizeHandler), b.removeClass("webuploader-pick-disable webuploader-pick-hover webuploader-pick")
            }
        }), e
    }), b("widgets/widget", ["base", "uploader"], function (a, b) {
        function c(a) {
            if (!a) return !1;
            var b = a.length,
                c = e.type(a);
            return 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && "string" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a)
        }

        function d(a) {
            this.owner = a, this.options = a.options
        }

        var e = a.$,
            f = b.prototype._init,
            g = b.prototype.destroy,
            h = {},
            i = [];
        return e.extend(d.prototype, {
            init: a.noop,
            invoke: function (a, b) {
                var c = this.responseMap;
                return c && a in c && c[a] in this && e.isFunction(this[c[a]]) ? this[c[a]].apply(this, b) : h
            }, request: function () {
                return this.owner.request.apply(this.owner, arguments)
            }
        }), e.extend(b.prototype, {
            _init: function () {
                var a = this,
                    b = a._widgets = [],
                    c = a.options.disableWidgets || "";
                return e.each(i, function (d, e) {
                    (!c || !~c.indexOf(e._name)) && b.push(new e(a))
                }), f.apply(a, arguments)
            }, request: function (b, d, e) {
                var f, g, i, j, k = 0,
                    l = this._widgets,
                    m = l && l.length,
                    n = [],
                    o = [];
                for (d = c(d) ? d : [d]; m > k; k++) f = l[k], g = f.invoke(b, d), g !== h && (a.isPromise(g) ? o.push(g) : n.push(g));
                return e || o.length ? (i = a.when.apply(a, o), j = i.pipe ? "pipe" : "then", i[j](function () {
                    var b = a.Deferred(),
                        c = arguments;
                    return 1 === c.length && (c = c[0]), setTimeout(function () {
                        b.resolve(c)
                    }, 1), b.promise()
                })[e ? j : "done"](e || a.noop)) : n[0]
            }, destroy: function () {
                g.apply(this, arguments), this._widgets = null
            }
        }), b.register = d.register = function (b, c) {
            var f, g = {
                init: "init",
                destroy: "destroy",
                name: "anonymous"
            };
            return 1 === arguments.length ? (c = b, e.each(c, function (a) {
                return "_" === a[0] || "name" === a ? ("name" === a && (g.name = c.name), void 0) : (g[a.replace(/[A-Z]/g, "-$&").toLowerCase()] = a, void 0)
            })) : g = e.extend(g, b), c.responseMap = g, f = a.inherits(d, c), f._name = g.name, i.push(f), f
        }, b.unRegister = d.unRegister = function (a) {
            if (a && "anonymous" !== a)
                for (var b = i.length; b--;) i[b]._name === a && i.splice(b, 1)
        }, d
    }), b("widgets/filepicker", ["base", "uploader", "lib/filepicker", "widgets/widget"], function (a, b, c) {
        var d = a.$;
        return d.extend(b.options, {
            pick: null,
            accept: null
        }), b.register({
            name: "picker",
            init: function (a) {
                return this.pickers = [], a.pick && this.addBtn(a.pick)
            }, refresh: function () {
                d.each(this.pickers, function () {
                    this.refresh()
                })
            }, addBtn: function (b) {
                var e = this,
                    f = e.options,
                    g = f.accept,
                    h = [];
                if (b) return d.isPlainObject(b) || (b = {
                    id: b
                }), d(b.id).each(function () {
                    var i, j, k;
                    k = a.Deferred(), i = d.extend({}, b, {
                        accept: d.isPlainObject(g) ? [g] : g,
                        swf: f.swf,
                        runtimeOrder: f.runtimeOrder,
                        id: this
                    }), j = new c(i), j.once("ready", k.resolve), j.on("select", function (a) {
                        e.owner.request("add-file", [a])
                    }), j.on("dialogopen", function () {
                        e.owner.trigger("dialogOpen", j.button)
                    }), j.init(), e.pickers.push(j), h.push(k.promise())
                }), a.when.apply(a, h)
            }, disable: function () {
                d.each(this.pickers, function () {
                    this.disable()
                })
            }, enable: function () {
                d.each(this.pickers, function () {
                    this.enable()
                })
            }, destroy: function () {
                d.each(this.pickers, function () {
                    this.destroy()
                }), this.pickers = null
            }
        })
    }), b("lib/image", ["base", "runtime/client", "lib/blob"], function (a, b, c) {
        function d(a) {
            this.options = e.extend({}, d.options, a), b.call(this, "Image"), this.on("load", function () {
                this._info = this.exec("info"), this._meta = this.exec("meta")
            })
        }

        var e = a.$;
        return d.options = {
            quality: 90,
            crop: !1,
            preserveHeaders: !1,
            allowMagnify: !1
        }, a.inherits(b, {
            constructor: d,
            info: function (a) {
                return a ? (this._info = a, this) : this._info
            }, meta: function (a) {
                return a ? (this._meta = a, this) : this._meta
            }, loadFromBlob: function (a) {
                var b = this,
                    c = a.getRuid();
                this.connectRuntime(c, function () {
                    b.exec("init", b.options), b.exec("loadFromBlob", a)
                })
            }, resize: function () {
                var b = a.slice(arguments);
                return this.exec.apply(this, ["resize"].concat(b))
            }, crop: function () {
                var b = a.slice(arguments);
                return this.exec.apply(this, ["crop"].concat(b))
            }, getAsDataUrl: function (a) {
                return this.exec("getAsDataUrl", a)
            }, getAsBlob: function (a) {
                var b = this.exec("getAsBlob", a);
                return new c(this.getRuid(), b)
            }
        }), d
    }), b("widgets/image", ["base", "uploader", "lib/image", "widgets/widget"], function (a, b, c) {
        var d, e = a.$;
        return d = function (a) {
            var b = 0,
                c = [],
                d = function () {
                    for (var d; c.length && a > b;) d = c.shift(), b += d[0], d[1]()
                };
            return function (a, e, f) {
                c.push([e, f]), a.once("destroy", function () {
                    b -= e, setTimeout(d, 1)
                }), setTimeout(d, 1)
            }
        }(5242880), e.extend(b.options, {
            thumb: {
                width: 110,
                height: 110,
                quality: 70,
                allowMagnify: !0,
                crop: !0,
                preserveHeaders: !1,
                type: "image/jpeg"
            },
            compress: {
                width: 1600,
                height: 1600,
                quality: 90,
                allowMagnify: !1,
                crop: !1,
                preserveHeaders: !0
            }
        }), b.register({
            name: "image",
            makeThumb: function (a, b, f, g) {
                var h, i;
                return a = this.request("get-file", a), a.type.match(/^image/) ? (h = e.extend({}, this.options.thumb), e.isPlainObject(f) && (h = e.extend(h, f), f = null), f = f || h.width, g = g || h.height, i = new c(h), i.once("load", function () {
                    a._info = a._info || i.info(), a._meta = a._meta || i.meta(), 1 >= f && f > 0 && (f = a._info.width * f), 1 >= g && g > 0 && (g = a._info.height * g), i.resize(f, g)
                }), i.once("complete", function () {
                    b(!1, i.getAsDataUrl(h.type)), i.destroy()
                }), i.once("error", function (a) {
                    b(a || !0), i.destroy()
                }), d(i, a.source.size, function () {
                    a._info && i.info(a._info), a._meta && i.meta(a._meta), i.loadFromBlob(a.source)
                }), void 0) : (b(!0), void 0)
            }, beforeSendFile: function (b) {
                var d, f, g = this.options.compress || this.options.resize,
                    h = g && g.compressSize || 0,
                    i = g && g.noCompressIfLarger || !1;
                return b = this.request("get-file", b), !g || !~"image/jpeg,image/jpg".indexOf(b.type) || b.size < h || b._compressed ? void 0 : (g = e.extend({}, g), f = a.Deferred(), d = new c(g), f.always(function () {
                    d.destroy(), d = null
                }), d.once("error", f.reject), d.once("load", function () {
                    var a = g.width,
                        c = g.height;
                    b._info = b._info || d.info(), b._meta = b._meta || d.meta(), 1 >= a && a > 0 && (a = b._info.width * a), 1 >= c && c > 0 && (c = b._info.height * c), d.resize(a, c)
                }), d.once("complete", function () {
                    var a, c;
                    try {
                        a = d.getAsBlob(g.type), c = b.size, (!i || a.size < c) && (b.source = a, b.size = a.size, b.trigger("resize", a.size, c)), b._compressed = !0, f.resolve()
                    } catch (e) {
                        f.resolve()
                    }
                }), b._info && d.info(b._info), b._meta && d.meta(b._meta), d.loadFromBlob(b.source), f.promise())
            }
        })
    }), b("file", ["base", "mediator"], function (a, b) {
        function c() {
            return f + g++
        }

        function d(a) {
            this.name = a.name || "Untitled", this.size = a.size || 0, this.type = a.type || "application/octet-stream", this.lastModifiedDate = a.lastModifiedDate || 1 * new Date, this.id = c(), this.ext = h.exec(this.name) ? RegExp.$1 : "", this.statusText = "", i[this.id] = d.Status.INITED, this.source = a, this.loaded = 0, this.on("error", function (a) {
                this.setStatus(d.Status.ERROR, a)
            })
        }

        var e = a.$,
            f = "WU_FILE_",
            g = 0,
            h = /\.([^.]+)$/,
            i = {};
        return e.extend(d.prototype, {
            setStatus: function (a, b) {
                var c = i[this.id];
                "undefined" != typeof b && (this.statusText = b), a !== c && (i[this.id] = a, this.trigger("statuschange", a, c))
            }, getStatus: function () {
                return i[this.id]
            }, getSource: function () {
                return this.source
            }, destroy: function () {
                this.off(), delete i[this.id]
            }
        }), b.installTo(d.prototype), d.Status = {
            INITED: "inited",
            QUEUED: "queued",
            PROGRESS: "progress",
            ERROR: "error",
            COMPLETE: "complete",
            CANCELLED: "cancelled",
            INTERRUPT: "interrupt",
            INVALID: "invalid"
        }, d
    }), b("queue", ["base", "mediator", "file"], function (a, b, c) {
        function d() {
            this.stats = {
                numOfQueue: 0,
                numOfSuccess: 0,
                numOfCancel: 0,
                numOfProgress: 0,
                numOfUploadFailed: 0,
                numOfInvalid: 0,
                numofDeleted: 0,
                numofInterrupt: 0
            }, this._queue = [], this._map = {}
        }

        var e = a.$,
            f = c.Status;
        return e.extend(d.prototype, {
            append: function (a) {
                return this._queue.push(a), this._fileAdded(a), this
            }, prepend: function (a) {
                return this._queue.unshift(a), this._fileAdded(a), this
            }, getFile: function (a) {
                return "string" != typeof a ? a : this._map[a]
            }, fetch: function (a) {
                var b, c, d = this._queue.length;
                for (a = a || f.QUEUED, b = 0; d > b; b++)
                    if (c = this._queue[b], a === c.getStatus()) return c;
                return null
            }, sort: function (a) {
                "function" == typeof a && this._queue.sort(a)
            }, getFiles: function () {
                for (var a, b = [].slice.call(arguments, 0), c = [], d = 0, f = this._queue.length; f > d; d++) a = this._queue[d], (!b.length || ~e.inArray(a.getStatus(), b)) && c.push(a);
                return c
            }, removeFile: function (a) {
                var b = this._map[a.id];
                b && (delete this._map[a.id], a.destroy(), this.stats.numofDeleted++)
            }, _fileAdded: function (a) {
                var b = this,
                    c = this._map[a.id];
                c || (this._map[a.id] = a, a.on("statuschange", function (a, c) {
                    b._onFileStatusChange(a, c)
                }))
            }, _onFileStatusChange: function (a, b) {
                var c = this.stats;
                switch (b) {
                    case f.PROGRESS:
                        c.numOfProgress--;
                        break;
                    case f.QUEUED:
                        c.numOfQueue--;
                        break;
                    case f.ERROR:
                        c.numOfUploadFailed--;
                        break;
                    case f.INVALID:
                        c.numOfInvalid--;
                        break;
                    case f.INTERRUPT:
                        c.numofInterrupt--
                }
                switch (a) {
                    case f.QUEUED:
                        c.numOfQueue++;
                        break;
                    case f.PROGRESS:
                        c.numOfProgress++;
                        break;
                    case f.ERROR:
                        c.numOfUploadFailed++;
                        break;
                    case f.COMPLETE:
                        c.numOfSuccess++;
                        break;
                    case f.CANCELLED:
                        c.numOfCancel++;
                        break;
                    case f.INVALID:
                        c.numOfInvalid++;
                        break;
                    case f.INTERRUPT:
                        c.numofInterrupt++
                }
            }
        }), b.installTo(d.prototype), d
    }), b("widgets/queue", ["base", "uploader", "queue", "file", "lib/file", "runtime/client", "widgets/widget"], function (a, b, c, d, e, f) {
        var g = a.$,
            h = /\.\w+$/,
            i = d.Status;
        return b.register({
            name: "queue",
            init: function (b) {
                var d, e, h, i, j, k, l, m = this;
                if (g.isPlainObject(b.accept) && (b.accept = [b.accept]), b.accept) {
                    for (j = [], h = 0, e = b.accept.length; e > h; h++) i = b.accept[h].extensions, i && j.push(i);
                    j.length && (k = "\\." + j.join(",").replace(/,/g, "$|\\.").replace(/\*/g, ".*") + "$"), m.accept = new RegExp(k, "i")
                }
                return m.queue = new c, m.stats = m.queue.stats, "html5" === this.request("predict-runtime-type") ? (d = a.Deferred(), this.placeholder = l = new f("Placeholder"), l.connectRuntime({
                    runtimeOrder: "html5"
                }, function () {
                    m._ruid = l.getRuid(), d.resolve()
                }), d.promise()) : void 0
            }, _wrapFile: function (a) {
                if (!(a instanceof d)) {
                    if (!(a instanceof e)) {
                        if (!this._ruid) throw new Error("Can't add external files.");
                        a = new e(this._ruid, a)
                    }
                    a = new d(a)
                }
                return a
            }, acceptFile: function (a) {
                var b = !a || !a.size || this.accept && h.exec(a.name) && !this.accept.test(a.name);
                return !b
            }, _addFile: function (a) {
                var b = this;
                return a = b._wrapFile(a), b.owner.trigger("beforeFileQueued", a) ? b.acceptFile(a) ? (b.queue.append(a), b.owner.trigger("fileQueued", a), a) : (b.owner.trigger("error", "Q_TYPE_DENIED", a), void 0) : void 0
            }, getFile: function (a) {
                return this.queue.getFile(a)
            }, addFile: function (a) {
                var b = this;
                a.length || (a = [a]), a = g.map(a, function (a) {
                    return b._addFile(a)
                }), a.length && (b.owner.trigger("filesQueued", a), b.options.auto && setTimeout(function () {
                    b.request("start-upload")
                }, 20))
            }, getStats: function () {
                return this.stats
            }, removeFile: function (a, b) {
                var c = this;
                a = a.id ? a : c.queue.getFile(a), this.request("cancel-file", a), b && this.queue.removeFile(a)
            }, getFiles: function () {
                return this.queue.getFiles.apply(this.queue, arguments)
            }, fetchFile: function () {
                return this.queue.fetch.apply(this.queue, arguments)
            }, retry: function (a, b) {
                var c, d, e, f = this;
                if (a) return a = a.id ? a : f.queue.getFile(a), a.setStatus(i.QUEUED), b || f.request("start-upload"), void 0;
                for (c = f.queue.getFiles(i.ERROR), d = 0, e = c.length; e > d; d++) a = c[d], a.setStatus(i.QUEUED);
                f.request("start-upload")
            }, sortFiles: function () {
                return this.queue.sort.apply(this.queue, arguments)
            }, reset: function () {
                this.owner.trigger("reset"), this.queue = new c, this.stats = this.queue.stats
            }, destroy: function () {
                this.reset(), this.placeholder && this.placeholder.destroy()
            }
        })
    }), b("widgets/runtime", ["uploader", "runtime/runtime", "widgets/widget"], function (a, b) {
        return a.support = function () {
            return b.hasRuntime.apply(b, arguments)
        }, a.register({
            name: "runtime",
            init: function () {
                if (!this.predictRuntimeType()) throw Error("Runtime Error")
            }, predictRuntimeType: function () {
                var a, c, d = this.options.runtimeOrder || b.orders,
                    e = this.type;
                if (!e)
                    for (d = d.split(/\s*,\s*/g), a = 0, c = d.length; c > a; a++)
                        if (b.hasRuntime(d[a])) {
                            this.type = e = d[a];
                            break
                        }
                return e
            }
        })
    }), b("lib/transport", ["base", "runtime/client", "mediator"], function (a, b, c) {
        function d(a) {
            var c = this;
            a = c.options = e.extend(!0, {}, d.options, a || {}), b.call(this, "Transport"), this._blob = null, this._formData = a.formData || {}, this._headers = a.headers || {}, this.on("progress", this._timeout), this.on("load error", function () {
                c.trigger("progress", 1), clearTimeout(c._timer)
            })
        }

        var e = a.$;
        return d.options = {
            server: "",
            method: "POST",
            withCredentials: !1,
            fileVal: "file",
            timeout: 12e4,
            formData: {},
            headers: {},
            sendAsBinary: !1
        }, e.extend(d.prototype, {
            appendBlob: function (a, b, c) {
                var d = this,
                    e = d.options;
                d.getRuid() && d.disconnectRuntime(), d.connectRuntime(b.ruid, function () {
                    d.exec("init")
                }), d._blob = b, e.fileVal = a || e.fileVal, e.filename = c || e.filename
            }, append: function (a, b) {
                "object" == typeof a ? e.extend(this._formData, a) : this._formData[a] = b
            }, setRequestHeader: function (a, b) {
                "object" == typeof a ? e.extend(this._headers, a) : this._headers[a] = b
            }, send: function (a) {
                this.exec("send", a), this._timeout()
            }, abort: function () {
                return clearTimeout(this._timer), this.exec("abort")
            }, destroy: function () {
                this.trigger("destroy"), this.off(), this.exec("destroy"), this.disconnectRuntime()
            }, getResponse: function () {
                return this.exec("getResponse")
            }, getResponseAsJson: function () {
                return this.exec("getResponseAsJson")
            }, getStatus: function () {
                return this.exec("getStatus")
            }, _timeout: function () {
                var a = this,
                    b = a.options.timeout;
                b && (clearTimeout(a._timer), a._timer = setTimeout(function () {
                    a.abort(), a.trigger("error", "timeout")
                }, b))
            }
        }), c.installTo(d.prototype), d
    }), b("widgets/upload", ["base", "uploader", "file", "lib/transport", "widgets/widget"], function (a, b, c, d) {
        function e(a, b) {
            var c, d, e = [],
                f = a.source,
                g = f.size,
                h = b ? Math.ceil(g / b) : 1,
                i = 0,
                j = 0;
            for (d = {
                file: a,
                has: function () {
                    return !!e.length
                }, shift: function () {
                    return e.shift()
                }, unshift: function (a) {
                    e.unshift(a)
                }
            }; h > j;) c = Math.min(b, g - i), e.push({
                file: a,
                start: i,
                end: b ? i + c : g,
                total: g,
                chunks: h,
                chunk: j++,
                cuted: d
            }), i += c;
            return a.blocks = e.concat(), a.remaning = e.length, d
        }

        var f = a.$,
            g = a.isPromise,
            h = c.Status;
        f.extend(b.options, {
            prepareNextFile: !1,
            chunked: !1,
            chunkSize: 5242880,
            chunkRetry: 2,
            threads: 3,
            formData: {}
        }), b.register({
            name: "upload",
            init: function () {
                var b = this.owner,
                    c = this;
                this.runing = !1, this.progress = !1, b.on("startUpload", function () {
                    c.progress = !0
                }).on("uploadFinished", function () {
                    c.progress = !1
                }), this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this.__tick = a.bindFn(this._tick, this), b.on("uploadComplete", function (a) {
                    a.blocks && f.each(a.blocks, function (a, b) {
                        b.transport && (b.transport.abort(), b.transport.destroy()), delete b.transport
                    }), delete a.blocks, delete a.remaning
                })
            }, reset: function () {
                this.request("stop-upload", !0), this.runing = !1, this.pool = [], this.stack = [], this.pending = [], this.remaning = 0, this._trigged = !1, this._promise = null
            }, startUpload: function (b) {
                var c = this;
                if (f.each(c.request("get-files", h.INVALID), function () {
                        c.request("remove-file", this)
                    }), b ? (b = b.id ? b : c.request("get-file", b), b.getStatus() === h.INTERRUPT ? (b.setStatus(h.QUEUED), f.each(c.pool, function (a, c) {
                        c.file === b && (c.transport && c.transport.send(), b.setStatus(h.PROGRESS))
                    })) : b.getStatus() !== h.PROGRESS && b.setStatus(h.QUEUED)) : f.each(c.request("get-files", [h.INITED]), function () {
                        this.setStatus(h.QUEUED)
                    }), c.runing) return a.nextTick(c.__tick);
                c.runing = !0;
                var d = [];
                b || f.each(c.pool, function (a, b) {
                    var e = b.file;
                    e.getStatus() === h.INTERRUPT && (c._trigged = !1, d.push(e), b.transport && b.transport.send())
                }), f.each(d, function () {
                    this.setStatus(h.PROGRESS)
                }), b || f.each(c.request("get-files", h.INTERRUPT), function () {
                    this.setStatus(h.PROGRESS)
                }), c._trigged = !1, a.nextTick(c.__tick), c.owner.trigger("startUpload")
            }, stopUpload: function (b, c) {
                var d, e = this;
                if (b === !0 && (c = b, b = null), e.runing !== !1) {
                    if (b) {
                        if (b = b.id ? b : e.request("get-file", b), b.getStatus() !== h.PROGRESS && b.getStatus() !== h.QUEUED) return;
                        return b.setStatus(h.INTERRUPT), f.each(e.pool, function (a, c) {
                            return c.file === b ? (d = c, !1) : void 0
                        }), d.transport && d.transport.abort(), c && (e._putback(d), e._popBlock(d)), a.nextTick(e.__tick)
                    }
                    e.runing = !1, this._promise && this._promise.file && this._promise.file.setStatus(h.INTERRUPT), c && f.each(e.pool, function (a, b) {
                        b.transport && b.transport.abort(), b.file.setStatus(h.INTERRUPT)
                    }), e.owner.trigger("stopUpload")
                }
            }, cancelFile: function (a) {
                a = a.id ? a : this.request("get-file", a), a.blocks && f.each(a.blocks, function (a, b) {
                    var c = b.transport;
                    c && (c.abort(), c.destroy(), delete b.transport)
                }), a.setStatus(h.CANCELLED), this.owner.trigger("fileDequeued", a)
            }, isInProgress: function () {
                return !!this.progress
            }, _getStats: function () {
                return this.request("get-stats")
            }, skipFile: function (a, b) {
                a = a.id ? a : this.request("get-file", a), a.setStatus(b || h.COMPLETE), a.skipped = !0, a.blocks && f.each(a.blocks, function (a, b) {
                    var c = b.transport;
                    c && (c.abort(), c.destroy(), delete b.transport)
                }), this.owner.trigger("uploadSkip", a)
            }, _tick: function () {
                var b, c, d = this,
                    e = d.options;
                return d._promise ? d._promise.always(d.__tick) : (d.pool.length < e.threads && (c = d._nextBlock()) ? (d._trigged = !1, b = function (b) {
                    d._promise = null, b && b.file && d._startSend(b), a.nextTick(d.__tick)
                }, d._promise = g(c) ? c.always(b) : b(c)) : d.remaning || d._getStats().numOfQueue || d._getStats().numofInterrupt || (d.runing = !1, d._trigged || a.nextTick(function () {
                        d.owner.trigger("uploadFinished")
                    }), d._trigged = !0), void 0)
            }, _putback: function (a) {
                var b;
                a.cuted.unshift(a), b = this.stack.indexOf(a.cuted), ~b || this.stack.unshift(a.cuted)
            }, _getStack: function () {
                for (var a, b = 0; a = this.stack[b++];) {
                    if (a.has() && a.file.getStatus() === h.PROGRESS) return a;
                    (!a.has() || a.file.getStatus() !== h.PROGRESS && a.file.getStatus() !== h.INTERRUPT) && this.stack.splice(--b, 1)
                }
                return null
            }, _nextBlock: function () {
                var a, b, c, d, f = this,
                    h = f.options;
                return (a = this._getStack()) ? (h.prepareNextFile && !f.pending.length && f._prepareNextFile(), a.shift()) : f.runing ? (!f.pending.length && f._getStats().numOfQueue && f._prepareNextFile(), b = f.pending.shift(), c = function (b) {
                    return b ? (a = e(b, h.chunked ? h.chunkSize : 0), f.stack.push(a), a.shift()) : null
                }, g(b) ? (d = b.file, b = b[b.pipe ? "pipe" : "then"](c), b.file = d, b) : c(b)) : void 0
            }, _prepareNextFile: function () {
                var a, b = this,
                    c = b.request("fetch-file"),
                    d = b.pending;
                c && (a = b.request("before-send-file", c, function () {
                    return c.getStatus() === h.PROGRESS || c.getStatus() === h.INTERRUPT ? c : b._finishFile(c)
                }), b.owner.trigger("uploadStart", c), c.setStatus(h.PROGRESS), a.file = c, a.done(function () {
                    var b = f.inArray(a, d);
                    ~
                        b && d.splice(b, 1, c)
                }), a.fail(function (a) {
                    c.setStatus(h.ERROR, a), b.owner.trigger("uploadError", c, a), b.owner.trigger("uploadComplete", c)
                }), d.push(a))
            }, _popBlock: function (a) {
                var b = f.inArray(a, this.pool);
                this.pool.splice(b, 1), a.file.remaning--, this.remaning--
            }, _startSend: function (b) {
                var c, d = this,
                    e = b.file;
                return e.getStatus() !== h.PROGRESS ? (e.getStatus() === h.INTERRUPT && d._putback(b), void 0) : (d.pool.push(b), d.remaning++, b.blob = 1 === b.chunks ? e.source : e.source.slice(b.start, b.end), c = d.request("before-send", b, function () {
                    e.getStatus() === h.PROGRESS ? d._doSend(b) : (d._popBlock(b), a.nextTick(d.__tick))
                }), c.fail(function () {
                    1 === e.remaning ? d._finishFile(e).always(function () {
                        b.percentage = 1, d._popBlock(b), d.owner.trigger("uploadComplete", e), a.nextTick(d.__tick)
                    }) : (b.percentage = 1, d.updateFileProgress(e), d._popBlock(b), a.nextTick(d.__tick))
                }), void 0)
            }, _doSend: function (b) {
                var c, e, g = this,
                    i = g.owner,
                    j = g.options,
                    k = b.file,
                    l = new d(j),
                    m = f.extend({}, j.formData),
                    n = f.extend({}, j.headers);
                b.transport = l, l.on("destroy", function () {
                    delete b.transport, g._popBlock(b), a.nextTick(g.__tick)
                }), l.on("progress", function (a) {
                    b.percentage = a, g.updateFileProgress(k)
                }), c = function (a) {
                    var c;
                    return e = l.getResponseAsJson() || {}, e._raw = l.getResponse(), c = function (b) {
                        a = b
                    }, i.trigger("uploadAccept", b, e, c) || (a = a || "server"), a
                }, l.on("error", function (a, d) {
                    b.retried = b.retried || 0, b.chunks > 1 && ~"http,abort".indexOf(a) && b.retried < j.chunkRetry ? (b.retried++, l.send()) : (d || "server" !== a || (a = c(a)), k.setStatus(h.ERROR, a), i.trigger("uploadError", k, a), i.trigger("uploadComplete", k))
                }), l.on("load", function () {
                    var a;
                    return (a = c()) ? (l.trigger("error", a, !0), void 0) : (1 === k.remaning ? g._finishFile(k, e) : l.destroy(), void 0)
                }), m = f.extend(m, {
                    id: k.id,
                    name: k.name,
                    type: k.type,
                    lastModifiedDate: k.lastModifiedDate,
                    size: k.size
                }), b.chunks > 1 && f.extend(m, {
                    chunks: b.chunks,
                    chunk: b.chunk
                }), i.trigger("uploadBeforeSend", b, m, n), l.appendBlob(j.fileVal, b.blob, k.name), l.append(m), l.setRequestHeader(n), l.send()
            }, _finishFile: function (a, b, c) {
                var d = this.owner;
                return d.request("after-send-file", arguments, function () {
                    a.setStatus(h.COMPLETE), d.trigger("uploadSuccess", a, b, c)
                }).fail(function (b) {
                    a.getStatus() === h.PROGRESS && a.setStatus(h.ERROR, b), d.trigger("uploadError", a, b)
                }).always(function () {
                    d.trigger("uploadComplete", a)
                })
            }, updateFileProgress: function (a) {
                var b = 0,
                    c = 0;
                a.blocks && (f.each(a.blocks, function (a, b) {
                    c += (b.percentage || 0) * (b.end - b.start)
                }), b = c / a.size, this.owner.trigger("uploadProgress", a, b || 0))
            }
        })
    }), b("widgets/log", ["base", "uploader", "widgets/widget"], function (a, b) {
        function c(a) {
            var b = e.extend({}, d, a),
                c = f.replace(/^(.*)\?/, "$1" + e.param(b)),
                g = new Image;
            g.src = c
        }

        var d, e = a.$,
            f = " http://static.tieba.baidu.com/tb/pms/img/st.gif??",
            g = (location.hostname || location.host || "protected").toLowerCase(),
            h = g && /baidu/i.exec(g);
        if (h) return d = {
            dv: 3,
            master: "webuploader",
            online: /test/.exec(g) ? 0 : 1,
            module: "",
            product: g,
            type: 0
        }, b.register({
            name: "log",
            init: function () {
                var a = this.owner,
                    b = 0,
                    d = 0;
                a.on("error", function (a) {
                    c({
                        type: 2,
                        c_error_code: a
                    })
                }).on("uploadError", function (a, b) {
                    c({
                        type: 2,
                        c_error_code: "UPLOAD_ERROR",
                        c_reason: "" + b
                    })
                }).on("uploadComplete", function (a) {
                    b++, d += a.size
                }).on("uploadFinished", function () {
                    c({
                        c_count: b,
                        c_size: d
                    }), b = d = 0
                }), c({
                    c_usage: 1
                })
            }
        })
    }), b("runtime/compbase", [], function () {
        function a(a, b) {
            this.owner = a, this.options = a.options, this.getRuntime = function () {
                return b
            }, this.getRuid = function () {
                return b.uid
            }, this.trigger = function () {
                return a.trigger.apply(a, arguments)
            }
        }

        return a
    }), b("runtime/html5/runtime", ["base", "runtime/runtime", "runtime/compbase"], function (b, c, d) {
        function e() {
            var a = {},
                d = this,
                e = this.destroy;
            c.apply(d, arguments), d.type = f, d.exec = function (c, e) {
                var f, h = this,
                    i = h.uid,
                    j = b.slice(arguments, 2);
                return g[c] && (f = a[i] = a[i] || new g[c](h, d), f[e]) ? f[e].apply(f, j) : void 0
            }, d.destroy = function () {
                return e && e.apply(this, arguments)
            }
        }

        var f = "html5",
            g = {};
        return b.inherits(c, {
            constructor: e,
            init: function () {
                var a = this;
                setTimeout(function () {
                    a.trigger("ready")
                }, 1)
            }
        }), e.register = function (a, c) {
            var e = g[a] = b.inherits(d, c);
            return e
        }, a.Blob && a.FileReader && a.DataView && c.addRuntime(f, e), e
    }), b("runtime/html5/blob", ["runtime/html5/runtime", "lib/blob"], function (a, b) {
        return a.register("Blob", {
            slice: function (a, c) {
                var d = this.owner.source,
                    e = d.slice || d.webkitSlice || d.mozSlice;
                return d = e.call(d, a, c), new b(this.getRuid(), d)
            }
        })
    }), b("runtime/html5/filepicker", ["base", "runtime/html5/runtime"], function (a, b) {
        var c = a.$;
        return b.register("FilePicker", {
            init: function () {
                var a, b, d, e, f = this.getRuntime().getContainer(),
                    g = this,
                    h = g.owner,
                    i = g.options,
                    j = this.label = c(document.createElement("label")),
                    k = this.input = c(document.createElement("input"));
                if (k.attr("type", "file"), k.attr("capture", "camera"), k.attr("name", i.name), k.addClass("webuploader-element-invisible"), j.on("click", function (a) {
                        k.trigger("click"), a.stopPropagation(), h.trigger("dialogopen")
                    }), j.css({
                        opacity: 0,
                        width: "100%",
                        height: "100%",
                        display: "block",
                        cursor: "pointer",
                        background: "#ffffff"
                    }), i.multiple && k.attr("multiple", "multiple"), i.accept && i.accept.length > 0) {
                    for (a = [], b = 0, d = i.accept.length; d > b; b++) a.push(i.accept[b].mimeTypes);
                    k.attr("accept", a.join(","))
                }
                f.append(k), f.append(j), e = function (a) {
                    h.trigger(a.type)
                }, k.on("change", function (a) {
                    var b, d = arguments.callee;
                    g.files = a.target.files, b = this.cloneNode(!0), b.value = null, this.parentNode.replaceChild(b, this), k.off(), k = c(b).on("change", d).on("mouseenter mouseleave", e), h.trigger("change")
                }), j.on("mouseenter mouseleave", e)
            }, getFiles: function () {
                return this.files
            }, destroy: function () {
                this.input.off(), this.label.off()
            }
        })
    }), b("runtime/html5/util", ["base"], function (b) {
        var c = a.createObjectURL && a || a.URL && URL.revokeObjectURL && URL || a.webkitURL,
            d = b.noop,
            e = d;
        return c && (d = function () {
            return c.createObjectURL.apply(c, arguments)
        }, e = function () {
            return c.revokeObjectURL.apply(c, arguments)
        }), {
            createObjectURL: d,
            revokeObjectURL: e,
            dataURL2Blob: function (a) {
                var b, c, d, e, f, g;
                for (g = a.split(","), b = ~g[0].indexOf("base64") ? atob(g[1]) : decodeURIComponent(g[1]), d = new ArrayBuffer(b.length), c = new Uint8Array(d), e = 0; e < b.length; e++) c[e] = b.charCodeAt(e);
                return f = g[0].split(":")[1].split(";")[0], this.arrayBufferToBlob(d, f)
            }, dataURL2ArrayBuffer: function (a) {
                var b, c, d, e;
                for (e = a.split(","), b = ~e[0].indexOf("base64") ? atob(e[1]) : decodeURIComponent(e[1]), c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                return c.buffer
            }, arrayBufferToBlob: function (b, c) {
                var d, e = a.BlobBuilder || a.WebKitBlobBuilder;
                return e ? (d = new e, d.append(b), d.getBlob(c)) : new Blob([b], c ? {
                    type: c
                } : {})
            }, canvasToDataUrl: function (a, b, c) {
                return a.toDataURL(b, c / 100)
            }, parseMeta: function (a, b) {
                b(!1, {})
            }, updateImageHead: function (a) {
                return a
            }
        }
    }), b("runtime/html5/imagemeta", ["runtime/html5/util"], function (a) {
        var b;
        return b = {
            parsers: {
                65505: []
            },
            maxMetaDataSize: 262144,
            parse: function (a, b) {
                var c = this,
                    d = new FileReader;
                d.onload = function () {
                    b(!1, c._parse(this.result)), d = d.onload = d.onerror = null
                }, d.onerror = function (a) {
                    b(a.message), d = d.onload = d.onerror = null
                }, a = a.slice(0, c.maxMetaDataSize), d.readAsArrayBuffer(a.getSource())
            }, _parse: function (a, c) {
                if (!(a.byteLength < 6)) {
                    var d, e, f, g, h = new DataView(a),
                        i = 2,
                        j = h.byteLength - 4,
                        k = i,
                        l = {};
                    if (65496 === h.getUint16(0)) {
                        for (; j > i && (d = h.getUint16(i), d >= 65504 && 65519 >= d || 65534 === d) && (e = h.getUint16(i + 2) + 2, !(i + e > h.byteLength));) {
                            if (f = b.parsers[d], !c && f)
                                for (g = 0; g < f.length; g += 1) f[g].call(b, h, i, e, l);
                            i += e, k = i
                        }
                        k > 6 && (l.imageHead = a.slice ? a.slice(2, k) : new Uint8Array(a).subarray(2, k))
                    }
                    return l
                }
            }, updateImageHead: function (a, b) {
                var c, d, e, f = this._parse(a, !0);
                return e = 2, f.imageHead && (e = 2 + f.imageHead.byteLength), d = a.slice ? a.slice(e) : new Uint8Array(a).subarray(e), c = new Uint8Array(b.byteLength + 2 + d.byteLength), c[0] = 255, c[1] = 216, c.set(new Uint8Array(b), 2), c.set(new Uint8Array(d), b.byteLength + 2), c.buffer
            }
        }, a.parseMeta = function () {
            return b.parse.apply(b, arguments)
        }, a.updateImageHead = function () {
            return b.updateImageHead.apply(b, arguments)
        }, b
    }), b("runtime/html5/imagemeta/exif", ["base", "runtime/html5/imagemeta"], function (a, b) {
        var c = {};
        return c.ExifMap = function () {
            return this
        }, c.ExifMap.prototype.map = {
            Orientation: 274
        }, c.ExifMap.prototype.get = function (a) {
            return this[a] || this[this.map[a]]
        }, c.exifTagTypes = {
            1: {
                getValue: function (a, b) {
                    return a.getUint8(b)
                }, size: 1
            },
            2: {
                getValue: function (a, b) {
                    return String.fromCharCode(a.getUint8(b))
                }, size: 1,
                ascii: !0
            },
            3: {
                getValue: function (a, b, c) {
                    return a.getUint16(b, c)
                }, size: 2
            },
            4: {
                getValue: function (a, b, c) {
                    return a.getUint32(b, c)
                }, size: 4
            },
            5: {
                getValue: function (a, b, c) {
                    return a.getUint32(b, c) / a.getUint32(b + 4, c)
                }, size: 8
            },
            9: {
                getValue: function (a, b, c) {
                    return a.getInt32(b, c)
                }, size: 4
            },
            10: {
                getValue: function (a, b, c) {
                    return a.getInt32(b, c) / a.getInt32(b + 4, c)
                }, size: 8
            }
        }, c.exifTagTypes[7] = c.exifTagTypes[1], c.getExifValue = function (b, d, e, f, g, h) {
            var i, j, k, l, m, n, o = c.exifTagTypes[f];
            if (!o) return a.log("Invalid Exif data: Invalid tag type."), void 0;
            if (i = o.size * g, j = i > 4 ? d + b.getUint32(e + 8, h) : e + 8, j + i > b.byteLength) return a.log("Invalid Exif data: Invalid data offset."), void 0;
            if (1 === g) return o.getValue(b, j, h);
            for (k = [], l = 0; g > l; l += 1) k[l] = o.getValue(b, j + l * o.size, h);
            if (o.ascii) {
                for (m = "", l = 0; l < k.length && (n = k[l], "\0" !== n); l += 1) m += n;
                return m
            }
            return k
        }, c.parseExifTag = function (a, b, d, e, f) {
            var g = a.getUint16(d, e);
            f.exif[g] = c.getExifValue(a, b, d, a.getUint16(d + 2, e), a.getUint32(d + 4, e), e)
        }, c.parseExifTags = function (b, c, d, e, f) {
            var g, h, i;
            if (d + 6 > b.byteLength) return a.log("Invalid Exif data: Invalid directory offset."), void 0;
            if (g = b.getUint16(d, e), h = d + 2 + 12 * g, h + 4 > b.byteLength) return a.log("Invalid Exif data: Invalid directory size."), void 0;
            for (i = 0; g > i; i += 1) this.parseExifTag(b, c, d + 2 + 12 * i, e, f);
            return b.getUint32(h, e)
        }, c.parseExifData = function (b, d, e, f) {
            var g, h, i = d + 10;
            if (1165519206 === b.getUint32(d + 4)) {
                if (i + 8 > b.byteLength) return a.log("Invalid Exif data: Invalid segment size."), void 0;
                if (0 !== b.getUint16(d + 8)) return a.log("Invalid Exif data: Missing byte alignment offset."), void 0;
                switch (b.getUint16(i)) {
                    case 18761:
                        g = !0;
                        break;
                    case 19789:
                        g = !1;
                        break;
                    default:
                        return a.log("Invalid Exif data: Invalid byte alignment marker."), void 0
                }
                if (42 !== b.getUint16(i + 2, g)) return a.log("Invalid Exif data: Missing TIFF marker."), void 0;
                h = b.getUint32(i + 4, g), f.exif = new c.ExifMap, h = c.parseExifTags(b, i, i + h, g, f)
            }
        }, b.parsers[65505].push(c.parseExifData), c
    }), b("runtime/html5/image", ["base", "runtime/html5/runtime", "runtime/html5/util"], function (a, b, c) {
        var d = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
        return b.register("Image", {
            modified: !1,
            init: function () {
                var a = this,
                    b = new Image;
                b.onload = function () {
                    a._info = {
                        type: a.type,
                        width: this.width,
                        height: this.height
                    }, a._metas || "image/jpeg" !== a.type ? a.owner.trigger("load") : c.parseMeta(a._blob, function (b, c) {
                        a._metas = c, a.owner.trigger("load")
                    })
                }, b.onerror = function () {
                    a.owner.trigger("error")
                }, a._img = b
            }, loadFromBlob: function (a) {
                var b = this,
                    d = b._img;
                b._blob = a, b.type = a.type, d.src = c.createObjectURL(a.getSource()), b.owner.once("load", function () {
                    c.revokeObjectURL(d.src)
                })
            }, resize: function (a, b) {
                var c = this._canvas || (this._canvas = document.createElement("canvas"));
                this._resize(this._img, c, a, b), this._blob = null, this.modified = !0, this.owner.trigger("complete", "resize")
            }, crop: function (a, b, c, d, e) {
                var f = this._canvas || (this._canvas = document.createElement("canvas")),
                    g = this.options,
                    h = this._img,
                    i = h.naturalWidth,
                    j = h.naturalHeight,
                    k = this.getOrientation();
                e = e || 1, f.width = c, f.height = d, g.preserveHeaders || this._rotate2Orientaion(f, k), this._renderImageToCanvas(f, h, -a, -b, i * e, j * e), this._blob = null, this.modified = !0, this.owner.trigger("complete", "crop")
            }, getAsBlob: function (a) {
                var b, d = this._blob,
                    e = this.options;
                if (a = a || this.type, this.modified || this.type !== a) {
                    if (b = this._canvas, "image/jpeg" === a) {
                        if (d = c.canvasToDataUrl(b, a, e.quality), e.preserveHeaders && this._metas && this._metas.imageHead) return d = c.dataURL2ArrayBuffer(d), d = c.updateImageHead(d, this._metas.imageHead), d = c.arrayBufferToBlob(d, a)
                    } else d = c.canvasToDataUrl(b, a);
                    d = c.dataURL2Blob(d)
                }
                return d
            }, getAsDataUrl: function (a) {
                var b = this.options;
                return a = a || this.type, "image/jpeg" === a ? c.canvasToDataUrl(this._canvas, a, b.quality) : this._canvas.toDataURL(a)
            }, getOrientation: function () {
                return this._metas && this._metas.exif && this._metas.exif.get("Orientation") || 1
            }, info: function (a) {
                return a ? (this._info = a, this) : this._info
            }, meta: function (a) {
                return a ? (this._metas = a, this) : this._metas
            }, destroy: function () {
                var a = this._canvas;
                this._img.onload = null, a && (a.getContext("2d").clearRect(0, 0, a.width, a.height), a.width = a.height = 0, this._canvas = null), this._img.src = d, this._img = this._blob = null
            }, _resize: function (a, b, c, d) {
                var e, f, g, h, i, j = this.options,
                    k = a.width,
                    l = a.height,
                    m = this.getOrientation();
                ~
                    [5, 6, 7, 8].indexOf(m) && (c ^= d, d ^= c, c ^= d), e = Math[j.crop ? "max" : "min"](c / k, d / l), j.allowMagnify || (e = Math.min(1, e)), f = k * e, g = l * e, j.crop ? (b.width = c, b.height = d) : (b.width = f, b.height = g), h = (b.width - f) / 2, i = (b.height - g) / 2, j.preserveHeaders || this._rotate2Orientaion(b, m), this._renderImageToCanvas(b, a, h, i, f, g)
            }, _rotate2Orientaion: function (a, b) {
                var c = a.width,
                    d = a.height,
                    e = a.getContext("2d");
                switch (b) {
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        a.width = d, a.height = c
                }
                switch (b) {
                    case 2:
                        e.translate(c, 0), e.scale(-1, 1);
                        break;
                    case 3:
                        e.translate(c, d), e.rotate(Math.PI);
                        break;
                    case 4:
                        e.translate(0, d), e.scale(1, -1);
                        break;
                    case 5:
                        e.rotate(.5 * Math.PI), e.scale(1, -1);
                        break;
                    case 6:
                        e.rotate(.5 * Math.PI), e.translate(0, -d);
                        break;
                    case 7:
                        e.rotate(.5 * Math.PI), e.translate(c, -d), e.scale(-1, 1);
                        break;
                    case 8:
                        e.rotate(-.5 * Math.PI), e.translate(-c, 0)
                }
            }, _renderImageToCanvas: function () {
                function b(a, b, c) {
                    var d, e, f, g = document.createElement("canvas"),
                        h = g.getContext("2d"),
                        i = 0,
                        j = c,
                        k = c;
                    for (g.width = 1, g.height = c, h.drawImage(a, 0, 0), d = h.getImageData(0, 0, 1, c).data; k > i;) e = d[4 * (k - 1) + 3], 0 === e ? j = k : i = k, k = j + i >> 1;
                    return f = k / c, 0 === f ? 1 : f
                }

                function c(a) {
                    var b, c, d = a.naturalWidth,
                        e = a.naturalHeight;
                    return d * e > 1048576 ? (b = document.createElement("canvas"), b.width = b.height = 1, c = b.getContext("2d"), c.drawImage(a, -d + 1, 0), 0 === c.getImageData(0, 0, 1, 1).data[3]) : !1
                }

                return a.os.ios ? a.os.ios >= 7 ? function (a, c, d, e, f, g) {
                    var h = c.naturalWidth,
                        i = c.naturalHeight,
                        j = b(c, h, i);
                    return a.getContext("2d").drawImage(c, 0, 0, h * j, i * j, d, e, f, g)
                } : function (a, d, e, f, g, h) {
                    var i, j, k, l, m, n, o, p = d.naturalWidth,
                        q = d.naturalHeight,
                        r = a.getContext("2d"),
                        s = c(d),
                        t = "image/jpeg" === this.type,
                        u = 1024,
                        v = 0,
                        w = 0;
                    for (s && (p /= 2, q /= 2), r.save(), i = document.createElement("canvas"), i.width = i.height = u, j = i.getContext("2d"), k = t ? b(d, p, q) : 1, l = Math.ceil(u * g / p), m = Math.ceil(u * h / q / k); q > v;) {
                        for (n = 0, o = 0; p > n;) j.clearRect(0, 0, u, u), j.drawImage(d, -n, -v), r.drawImage(i, 0, 0, u, u, e + o, f + w, l, m), n += u, o += l;
                        v += u, w += m
                    }
                    r.restore(), i = j = null
                } : function (b) {
                    var c = a.slice(arguments, 1),
                        d = b.getContext("2d");
                    d.drawImage.apply(d, c)
                }
            }()
        })
    }), b("runtime/html5/jpegencoder", [], function () {
        function a(a) {
            function b(a) {
                for (var b = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], c = 0; 64 > c; c++) {
                    var d = y((b[c] * a + 50) / 100);
                    1 > d ? d = 1 : d > 255 && (d = 255), z[P[c]] = d
                }
                for (var e = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], f = 0; 64 > f; f++) {
                    var g = y((e[f] * a + 50) / 100);
                    1 > g ? g = 1 : g > 255 && (g = 255), A[P[f]] = g
                }
                for (var h = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], i = 0, j = 0; 8 > j; j++)
                    for (var k = 0; 8 > k; k++) B[i] = 1 / (8 * z[P[i]] * h[j] * h[k]), C[i] = 1 / (8 * A[P[i]] * h[j] * h[k]), i++
            }

            function c(a, b) {
                for (var c = 0, d = 0, e = new Array, f = 1; 16 >= f; f++) {
                    for (var g = 1; g <= a[f]; g++) e[b[d]] = [], e[b[d]][0] = c, e[b[d]][1] = f, d++, c++;
                    c *= 2
                }
                return e
            }

            function d() {
                t = c(Q, R), u = c(U, V), v = c(S, T), w = c(W, X)
            }

            function e() {
                for (var a = 1, b = 2, c = 1; 15 >= c; c++) {
                    for (var d = a; b > d; d++) E[32767 + d] = c, D[32767 + d] = [], D[32767 + d][1] = c, D[32767 + d][0] = d;
                    for (var e = -(b - 1); -a >= e; e++) E[32767 + e] = c, D[32767 + e] = [], D[32767 + e][1] = c, D[32767 + e][0] = b - 1 + e;
                    a <<= 1, b <<= 1
                }
            }

            function f() {
                for (var a = 0; 256 > a; a++) O[a] = 19595 * a, O[a + 256 >> 0] = 38470 * a, O[a + 512 >> 0] = 7471 * a + 32768, O[a + 768 >> 0] = -11059 * a, O[a + 1024 >> 0] = -21709 * a, O[a + 1280 >> 0] = 32768 * a + 8421375, O[a + 1536 >> 0] = -27439 * a, O[a + 1792 >> 0] = -5329 * a
            }

            function g(a) {
                for (var b = a[0], c = a[1] - 1; c >= 0;) b & 1 << c && (I |= 1 << J), c--, J--, 0 > J && (255 == I ? (h(255), h(0)) : h(I), J = 7, I = 0)
            }

            function h(a) {
                H.push(N[a])
            }

            function i(a) {
                h(255 & a >> 8), h(255 & a)
            }

            function j(a, b) {
                var c, d, e, f, g, h, i, j, k, l = 0,
                    m = 8,
                    n = 64;
                for (k = 0; m > k; ++k) {
                    c = a[l], d = a[l + 1], e = a[l + 2], f = a[l + 3], g = a[l + 4], h = a[l + 5], i = a[l + 6], j = a[l + 7];
                    var o = c + j,
                        p = c - j,
                        q = d + i,
                        r = d - i,
                        s = e + h,
                        t = e - h,
                        u = f + g,
                        v = f - g,
                        w = o + u,
                        x = o - u,
                        y = q + s,
                        z = q - s;
                    a[l] = w + y, a[l + 4] = w - y;
                    var A = .707106781 * (z + x);
                    a[l + 2] = x + A, a[l + 6] = x - A, w = v + t, y = t + r, z = r + p;
                    var B = .382683433 * (w - z),
                        C = .5411961 * w + B,
                        D = 1.306562965 * z + B,
                        E = .707106781 * y,
                        G = p + E,
                        H = p - E;
                    a[l + 5] = H + C, a[l + 3] = H - C, a[l + 1] = G + D, a[l + 7] = G - D, l += 8
                }
                for (l = 0, k = 0; m > k; ++k) {
                    c = a[l], d = a[l + 8], e = a[l + 16], f = a[l + 24], g = a[l + 32], h = a[l + 40], i = a[l + 48], j = a[l + 56];
                    var I = c + j,
                        J = c - j,
                        K = d + i,
                        L = d - i,
                        M = e + h,
                        N = e - h,
                        O = f + g,
                        P = f - g,
                        Q = I + O,
                        R = I - O,
                        S = K + M,
                        T = K - M;
                    a[l] = Q + S, a[l + 32] = Q - S;
                    var U = .707106781 * (T + R);
                    a[l + 16] = R + U, a[l + 48] = R - U, Q = P + N, S = N + L, T = L + J;
                    var V = .382683433 * (Q - T),
                        W = .5411961 * Q + V,
                        X = 1.306562965 * T + V,
                        Y = .707106781 * S,
                        Z = J + Y,
                        $ = J - Y;
                    a[l + 40] = $ + W, a[l + 24] = $ - W, a[l + 8] = Z + X, a[l + 56] = Z - X, l++
                }
                var _;
                for (k = 0; n > k; ++k) _ = a[k] * b[k], F[k] = _ > 0 ? 0 | _ + .5 : 0 | _ - .5;
                return F
            }

            function k() {
                i(65504), i(16), h(74), h(70), h(73), h(70), h(0), h(1), h(1), h(0), i(1), i(1), h(0), h(0)
            }

            function l(a, b) {
                i(65472), i(17), h(8), i(b), i(a), h(3), h(1), h(17), h(0), h(2), h(17), h(1), h(3), h(17), h(1)
            }

            function m() {
                i(65499), i(132), h(0);
                for (var a = 0; 64 > a; a++) h(z[a]);
                h(1);
                for (var b = 0; 64 > b; b++) h(A[b])
            }

            function n() {
                i(65476), i(418), h(0);
                for (var a = 0; 16 > a; a++) h(Q[a + 1]);
                for (var b = 0; 11 >= b; b++) h(R[b]);
                h(16);
                for (var c = 0; 16 > c; c++) h(S[c + 1]);
                for (var d = 0; 161 >= d; d++) h(T[d]);
                h(1);
                for (var e = 0; 16 > e; e++) h(U[e + 1]);
                for (var f = 0; 11 >= f; f++) h(V[f]);
                h(17);
                for (var g = 0; 16 > g; g++) h(W[g + 1]);
                for (var j = 0; 161 >= j; j++) h(X[j])
            }

            function o() {
                i(65498), i(12), h(3), h(1), h(0), h(2), h(17), h(3), h(17), h(0), h(63), h(0)
            }

            function p(a, b, c, d, e) {
                for (var f, h = e[0], i = e[240], k = 16, l = 63, m = 64, n = j(a, b), o = 0; m > o; ++o) G[P[o]] = n[o];
                var p = G[0] - c;
                c = G[0], 0 == p ? g(d[0]) : (f = 32767 + p, g(d[E[f]]), g(D[f]));
                for (var q = 63; q > 0 && 0 == G[q]; q--) ;
                if (0 == q) return g(h), c;
                for (var r, s = 1; q >= s;) {
                    for (var t = s; 0 == G[s] && q >= s; ++s) ;
                    var u = s - t;
                    if (u >= k) {
                        r = u >> 4;
                        for (var v = 1; r >= v; ++v) g(i);
                        u = 15 & u
                    }
                    f = 32767 + G[s], g(e[(u << 4) + E[f]]), g(D[f]), s++
                }
                return q != l && g(h), c
            }

            function q() {
                for (var a = String.fromCharCode, b = 0; 256 > b; b++) N[b] = a(b)
            }

            function r(a) {
                if (0 >= a && (a = 1), a > 100 && (a = 100), x != a) {
                    var c = 0;
                    c = 50 > a ? Math.floor(5e3 / a) : Math.floor(200 - 2 * a), b(c), x = a
                }
            }

            function s() {
                a || (a = 50), q(), d(), e(), f(), r(a)
            }

            Math.round;
            var t, u, v, w, x, y = Math.floor,
                z = new Array(64),
                A = new Array(64),
                B = new Array(64),
                C = new Array(64),
                D = new Array(65535),
                E = new Array(65535),
                F = new Array(64),
                G = new Array(64),
                H = [],
                I = 0,
                J = 7,
                K = new Array(64),
                L = new Array(64),
                M = new Array(64),
                N = new Array(256),
                O = new Array(2048),
                P = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
                Q = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
                R = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                S = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
                T = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
                U = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
                V = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                W = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
                X = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];
            this.encode = function (a, b) {
                b && r(b), H = new Array, I = 0, J = 7, i(65496), k(), m(), l(a.width, a.height), n(), o();
                var c = 0,
                    d = 0,
                    e = 0;
                I = 0, J = 7, this.encode.displayName = "_encode_";
                for (var f, h, j, q, s, x, y, z, A, D = a.data, E = a.width, F = a.height, G = 4 * E, N = 0; F > N;) {
                    for (f = 0; G > f;) {
                        for (s = G * N + f, x = s, y = -1, z = 0, A = 0; 64 > A; A++) z = A >> 3, y = 4 * (7 & A), x = s + z * G + y, N + z >= F && (x -= G * (N + 1 + z - F)), f + y >= G && (x -= f + y - G + 4), h = D[x++], j = D[x++], q = D[x++], K[A] = (O[h] + O[j + 256 >> 0] + O[q + 512 >> 0] >> 16) - 128, L[A] = (O[h + 768 >> 0] + O[j + 1024 >> 0] + O[q + 1280 >> 0] >> 16) - 128, M[A] = (O[h + 1280 >> 0] + O[j + 1536 >> 0] + O[q + 1792 >> 0] >> 16) - 128;
                        c = p(K, B, c, t, v), d = p(L, C, d, u, w), e = p(M, C, e, u, w), f += 32
                    }
                    N += 8
                }
                if (J >= 0) {
                    var P = [];
                    P[1] = J + 1, P[0] = (1 << J + 1) - 1, g(P)
                }
                i(65497);
                var Q = "data:image/jpeg;base64," + btoa(H.join(""));
                return H = [], Q
            }, s()
        }

        return a.encode = function (b, c) {
            var d = new a(c);
            return d.encode(b)
        }, a
    }), b("runtime/html5/androidpatch", ["runtime/html5/util", "runtime/html5/jpegencoder", "base"], function (a, b, c) {
        var d, e = a.canvasToDataUrl;
        a.canvasToDataUrl = function (a, f, g) {
            var h, i, j, k, l;
            return c.os.android ? ("image/jpeg" === f && "undefined" == typeof d && (k = e.apply(null, arguments), l = k.split(","), k = ~l[0].indexOf("base64") ? atob(l[1]) : decodeURIComponent(l[1]), k = k.substring(0, 2), d = 255 === k.charCodeAt(0) && 216 === k.charCodeAt(1)), "image/jpeg" !== f || d ? e.apply(null, arguments) : (i = a.width, j = a.height, h = a.getContext("2d"), b.encode(h.getImageData(0, 0, i, j), g))) : e.apply(null, arguments)
        }
    }), b("runtime/html5/transport", ["base", "runtime/html5/runtime"], function (a, b) {
        var c = a.noop,
            d = a.$;
        return b.register("Transport", {
            init: function () {
                this._status = 0, this._response = null
            }, send: function () {
                var b, c, e, f = this.owner,
                    g = this.options,
                    h = this._initAjax(),
                    i = f._blob,
                    j = g.server;
                g.sendAsBinary ? (j += (/\?/.test(j) ? "&" : "?") + d.param(f._formData), c = i.getSource()) : (b = new FormData, d.each(f._formData, function (a, c) {
                    b.append(a, c)
                }), b.append(g.fileVal, i.getSource(), g.filename || f._formData.name || "")), g.withCredentials && "withCredentials" in h ? (h.open(g.method, j, !0), h.withCredentials = !0) : h.open(g.method, j), this._setRequestHeader(h, g.headers), c ? (h.overrideMimeType && h.overrideMimeType("application/octet-stream"), a.os.android ? (e = new FileReader, e.onload = function () {
                    h.send(this.result), e = e.onload = null
                }, e.readAsArrayBuffer(c)) : h.send(c)) : h.send(b)
            }, getResponse: function () {
                return this._response
            }, getResponseAsJson: function () {
                return this._parseJson(this._response)
            }, getStatus: function () {
                return this._status
            }, abort: function () {
                var a = this._xhr;
                a && (a.upload.onprogress = c, a.onreadystatechange = c, a.abort(), this._xhr = a = null)
            }, destroy: function () {
                this.abort()
            }, _initAjax: function () {
                var a = this,
                    b = new XMLHttpRequest,
                    d = this.options;
                return !d.withCredentials || "withCredentials" in b || "undefined" == typeof XDomainRequest || (b = new XDomainRequest), b.upload.onprogress = function (b) {
                    var c = 0;
                    return b.lengthComputable && (c = b.loaded / b.total), a.trigger("progress", c)
                }, b.onreadystatechange = function () {
                    return 4 === b.readyState ? (b.upload.onprogress = c, b.onreadystatechange = c, a._xhr = null, a._status = b.status, b.status >= 200 && b.status < 300 ? (a._response = b.responseText, a.trigger("load")) : b.status >= 500 && b.status < 600 ? (a._response = b.responseText, a.trigger("error", "server")) : a.trigger("error", a._status ? "http" : "abort")) : void 0
                }, a._xhr = b, b
            }, _setRequestHeader: function (a, b) {
                d.each(b, function (b, c) {
                    a.setRequestHeader(b, c)
                })
            }, _parseJson: function (a) {
                var b;
                try {
                    b = JSON.parse(a)
                } catch (c) {
                    b = {}
                }
                return b
            }
        })
    }), b("webuploader", ["base", "widgets/filepicker", "widgets/image", "widgets/queue", "widgets/runtime", "widgets/upload", "widgets/log", "runtime/html5/blob", "runtime/html5/filepicker", "runtime/html5/imagemeta/exif", "runtime/html5/image", "runtime/html5/androidpatch", "runtime/html5/transport"], function (a) {
        return a
    }), c("webuploader")
});
"use strict";
if ("undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");
$.AdminLTE = {}, $.AdminLTE.options = {
    navbarMenuSlimscroll: !0,
    navbarMenuSlimscrollWidth: "3px",
    navbarMenuHeight: "200px",
    sidebarToggleSelector: "[data-toggle='offcanvas']",
    sidebarPushMenu: !0,
    sidebarSlimScroll: !0,
    enableBoxRefresh: !0,
    enableBSToppltip: !0,
    BSTooltipSelector: "[data-toggle='tooltip']",
    enableFastclick: !0,
    enableBoxWidget: !0,
    boxWidgetOptions: {
        boxWidgetIcons: {
            collapse: "fa fa-minus",
            open: "fa fa-plus",
            remove: "fa fa-times"
        },
        boxWidgetSelectors: {
            remove: '[data-widget="remove"]',
            collapse: '[data-widget="collapse"]'
        }
    },
    directChat: {
        enable: !0,
        contactToggleSelector: '[data-widget="chat-pane-toggle"]'
    },
    colors: {
        lightBlue: "#3c8dbc",
        red: "#f56954",
        green: "#00a65a",
        aqua: "#00c0ef",
        yellow: "#f39c12",
        blue: "#0073b7",
        navy: "#001F3F",
        teal: "#39CCCC",
        olive: "#3D9970",
        lime: "#01FF70",
        orange: "#FF851B",
        fuchsia: "#F012BE",
        purple: "#8E24AA",
        maroon: "#D81B60",
        black: "#222222",
        gray: "#d2d6de"
    },
    screenSizes: {
        xs: 480,
        sm: 768,
        md: 992,
        lg: 1200
    }
}, $(function () {
    var a = $.AdminLTE.options;
    $.AdminLTE.layout.activate(), $.AdminLTE.tree(".sidebar"), a.navbarMenuSlimscroll && "undefined" != typeof $.fn.slimscroll && $(".navbar .menu").slimscroll({
        height: "200px",
        alwaysVisible: !1,
        size: "3px"
    }).css("width", "100%"), a.sidebarPushMenu && $.AdminLTE.pushMenu(a.sidebarToggleSelector), a.enableBSToppltip && $(a.BSTooltipSelector).tooltip(), a.enableBoxWidget && $.AdminLTE.boxWidget.activate(), a.enableFastclick && "undefined" != typeof FastClick && FastClick.attach(document.body), a.directChat.enable && $(a.directChat.contactToggleSelector).click(function () {
        var a = $(this).parents(".direct-chat").first();
        a.toggleClass("direct-chat-contacts-open");
    }), $('.btn-group[data-toggle="btn-toggle"]').each(function () {
        var a = $(this);
        $(this).find(".btn").click(function (b) {
            a.find(".btn.active").removeClass("active"), $(this).addClass("active"), b.preventDefault();
        });
    });
}), $.AdminLTE.layout = {
    activate: function () {
        var a = this;
        a.fix(), a.fixSidebar(), $(window, ".wrapper").resize(function () {
            a.fix(), a.fixSidebar();
        });
    }, fix: function () {
        var a = $(".main-header").outerHeight() + $(".main-footer").outerHeight(),
            b = $(window).height(),
            c = $(".sidebar").height();
        $("body").hasClass("fixed") ? $(".content-wrapper, .right-side").css("min-height", b - $(".main-footer").outerHeight()) : b >= c ? $(".content-wrapper, .right-side").css("min-height", b - a) : $(".content-wrapper, .right-side").css("min-height", c);
    }, fixSidebar: function () {
        return $("body").hasClass("fixed") ? ("undefined" == typeof $.fn.slimScroll && console && console.error("Error: the fixed layout requires the slimscroll plugin!"), void($.AdminLTE.options.sidebarSlimScroll && "undefined" != typeof $.fn.slimScroll && ($(".sidebar").slimScroll({
            destroy: !0
        }).height("auto"), $(".sidebar").slimscroll({
            height: $(window).height() - $(".main-header").height() + "px",
            color: "rgba(0,0,0,0.2)",
            size: "3px"
        })))) : void("undefined" != typeof $.fn.slimScroll && $(".sidebar").slimScroll({
            destroy: !0
        }).height("auto"));
    }
}, $.AdminLTE.pushMenu = function (a) {
    var b = this.options.screenSizes;
    $(a).click(function (a) {
        a.preventDefault(), $(window).width() > b.sm - 1 ? $("body").toggleClass("sidebar-collapse") : $("body").hasClass("sidebar-open") ? ($("body").removeClass("sidebar-open"), $("body").removeClass("sidebar-collapse")) : $("body").addClass("sidebar-open");
    }), $(".content-wrapper").click(function () {
        $(window).width() <= b.sm - 1 && $("body").hasClass("sidebar-open") && $("body").removeClass("sidebar-open");
    });
}, $.AdminLTE.tree = function (a) {
    var b = this;
    $(".sidebar-menu").on("click", "li a", function (a) {
        var c = $(this),
            d = c.next();
        if (d.is(".treeview-menu") && d.is(":visible")) d.slideUp("normal", function () {
            d.removeClass("menu-open");
        }), d.parent("li").removeClass("active");
        else if (d.is(".treeview-menu") && !d.is(":visible")) {
            var e = c.parents("ul").first(),
                f = e.find("ul:visible").slideUp("normal");
            f.removeClass("menu-open");
            var g = c.parent("li");
            d.slideDown("normal", function () {
                d.addClass("menu-open"), e.find("li.active").removeClass("active"), g.addClass("active"), b.layout.fix();
            });
        }
        d.is(".treeview-menu") && a.preventDefault();
    });
}, $.AdminLTE.boxWidget = {
    activate: function () {
        var a = $.AdminLTE.options,
            b = this;
        $(a.boxWidgetOptions.boxWidgetSelectors.collapse).click(function (a) {
            a.preventDefault(), b.collapse($(this));
        }), $(a.boxWidgetOptions.boxWidgetSelectors.remove).click(function (a) {
            a.preventDefault(), b.remove($(this));
        });
    }, collapse: function (a) {
        var b = a.parents(".box").first(),
            c = b.find(".box-body, .box-footer");
        b.hasClass("collapsed-box") ? (a.children(".fa-plus").removeClass("fa-plus").addClass("fa-minus"), c.slideDown(300, function () {
            b.removeClass("collapsed-box");
        })) : (a.children(".fa-minus").removeClass("fa-minus").addClass("fa-plus"), c.slideUp(300, function () {
            b.addClass("collapsed-box");
        }));
    }, remove: function (a) {
        var b = a.parents(".box").first();
        b.slideUp();
    }, options: $.AdminLTE.options.boxWidgetOptions
},
    function (a) {
        a.fn.boxRefresh = function (b) {
            function c(a) {
                a.append(f), e.onLoadStart.call(a);
            }

            function d(a) {
                a.find(f).remove(), e.onLoadDone.call(a);
            }

            var e = a.extend({
                    trigger: ".refresh-btn",
                    source: "",
                    onLoadStart: function () {
                    }, onLoadDone: function () {
                    }
                }, b),
                f = a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
            return this.each(function () {
                if ("" === e.source) return void(console && console.log("Please specify a source first - boxRefresh()"));
                var b = a(this),
                    f = b.find(e.trigger).first();
                f.click(function (a) {
                    a.preventDefault(), c(b), b.find(".box-body").load(e.source, function () {
                        d(b);
                    });
                });
            });
        };
    }(jQuery),
    function (a) {
        a.fn.todolist = function (b) {
            var c = a.extend({
                onCheck: function () {
                }, onUncheck: function () {
                }
            }, b);
            return this.each(function () {
                "undefined" != typeof a.fn.iCheck ? (a("input", this).on("ifChecked", function () {
                    var b = a(this).parents("li").first();
                    b.toggleClass("done"), c.onCheck.call(b);
                }), a("input", this).on("ifUnchecked", function () {
                    var b = a(this).parents("li").first();
                    b.toggleClass("done"), c.onUncheck.call(b);
                })) : a("input", this).on("change", function () {
                    var b = a(this).parents("li").first();
                    b.toggleClass("done"), c.onCheck.call(b);
                });
            });
        };
    }(jQuery);
$.ajaxSetup({
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true
});
angular.message = function (msg) {
    if (typeof msg == "string") {
        alert(msg);
        return;
    }
    var html = "";
    for (var i in msg) {
        html += i + ":" + msg[i].join(",") + "\n";
    }
    alert(html);
};
angular.module("http.post", [], ["$httpProvider",
    function ($hP) {
        $hP.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
        var param = function (obj) {
            var query = "",
                name, value, fullSubName, subName, subValue, innerObj, i;
            for (name in obj) {
                value = obj[name];
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + "[" + i + "]";
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + "&";
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + "[" + subName + "]";
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + "&";
                    }
                } else if (value !== undefined && value !== null) query += encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&";
            }
            return query.length ? query.substr(0, query.length - 1) : query;
        };
        $hP.defaults.transformRequest = [
            function (data) {
                return angular.isObject(data) && String(data) !== "[object File]" ? param(data) : data;
            }
        ];
    }
]);
angular.module("app.router", ["ui.router", "oc.lazyLoad"]).provider("route", ["$stateProvider", "$urlRouterProvider",
    function ($sP, $uP) {
        var self = this,
            filePath = appDev ? "app/" : "dist/app/";
        this.state = function (sf, o) {
            var random = appVersion;
            var defaults = {
                page: {
                    title: "",
                    desc: "",
                    key: "",
                    content: ""
                },
                query: "",
                url: null,
                controller: "controller." + sf.replace(/-/g, "."),
                files: ["index"],
                utilsFiles: [],
                resolve: {},
                templateUrl: null
            };
            o = angular.extend({}, defaults, o);
            o.url = o.url || "/" + sf.replace(/-/g, "/");

            function path(s) {
                return s.replace(/\./g, "/").replace(/-/g, "/");
            }

            o.resolve.lazyload = ["$ocLazyLoad",
                function ($od) {
                    var as = [];

                    function gu(f) {
                        var url = "";
                        if (f.indexOf(".js") == -1) {
                            f = f + ".js";
                            url = filePath + path(sf) + "/" + f + random;
                        } else {
                            url = f + random;
                        }
                        return url;
                    }

                    angular.forEach(o.utilsFiles, function (n, i) {
                        var url = "",
                            f = n,
                            m = path(sf).split("/")[0];
                        if (f.indexOf(".js") == -1) {
                            f = f + ".js";
                            url = filePath + m + "/utils/" + f + random;
                        } else {
                            url = f + random;
                        }
                        this.push(url);
                    }, as);
                    angular.forEach(o.files, function (n, i) {
                        this.push(gu(n));
                    }, as);
                    return $od.load({
                        cache: !angular.debug,
                        name: sf,
                        files: as
                    });
                }
            ];
            o.templateUrl = o.templateUrl || filePath + path(sf) + "/index.html" + random;
            o.url += o.query;
            $sP.state(sf, o);
        };
        this.stateSub = function (a, b) {
            var s = a.split("."),
                root = filePath + s[0].replace(/-/g, "/") + "/";
            var defaults = {
                url: "/" + s[1],
                templateUrl: root + s[1] + ".html" + appVersion,
                controller: "controller." + s[0].replace(/-/g, "."),
                files: [root + "service.js" + appVersion, root + "index.js" + appVersion]
            };
            self.state(a, angular.extend({}, defaults, b));
        };
        this.init = function () {
            self.state("index-index-home", {
                page: {title: "首页"},
                files: ["index"]
            });
        };
        this.$get = function ($http, API_WD_DOMAIN) {
            return {
                dynamicRoutes: function () {
                    $http.get(API_WD_DOMAIN + "/basic/Node/route").success(function (manager) {
                            angular.forEach(manager, function (n, i) {
                                n.items.forEach(function (m, j) {
                                    m.options.utilsFiles = n.common;
                                    self.state(m.sref, m.options);
                                });
                            });

                        }
                    )
                }
            };
        };
    }
]);
angular.module("utils.directive", ["ui.bootstrap"]).directive("icheck", ["$timeout",
    function ($timeout) {
        return {
            restrict: "A",
            scope: {},
            link: function (scope, element, attrs) {
                var defaults = {
                    checkboxClass: "icheckbox_flat-blue",
                    radioClass: "iradio_flat-blue"
                };
                $timeout(function () {
                    element.iCheck(angular.extend(defaults, attrs));
                });
            }
        };
    }
]).directive("affix", ["$timeout",
    function ($timeout) {
        return {
            restrict: "A",
            scope: {},
            link: function (scope, element, attrs) {
                var defaults = {};
                $timeout(function () {
                    element.affix({});
                });
            }
        };
    }
]).directive("dateFormat", ["$filter",
    function ($filter) {
        var dateFilter = $filter("date");
        return {
            require: "ngModel",
            link: function (scope, elm, attrs, ctrl) {
                function formatter(value) {
                    return dateFilter(value, "yyyy-MM-dd");
                }

                function parser() {
                    return ctrl.$modelValue;
                }

                ctrl.$formatters.push(formatter);
                ctrl.$parsers.unshift(parser);
            }
        };
    }
]).directive("hintOnBlur", function () {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ngModel) {
            element.bind("focus", function () {
                $("#tips-info").html("");
                scope.$apply(function () {
                    ngModel.isblur = false;
                });
            }).bind("blur", function () {
                scope.$apply(function () {
                    ngModel.isblur = true;
                });
            });
        }
    };
}).directive("datepickerClick", ["$filter", "$parse",
    function ($filter, $parse) {
        return {
            require: "?ngModel",
            link: function ($scope, elm, attrs, ctrl) {
                elm.click(function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    $scope[attrs.datepickerClick] = true;
                    $scope.$apply();
                });
                var $input = elm.find("[type=datetime]");
                var modelName = $input.attr("ng-model");
                var syncName = $input.attr("sync");
                var minModelName = $input.attr("min-date");
                $scope.$watch(minModelName, function (val, oldVal) {
                    var date = $parse(modelName)($scope);
                    var minDate = $parse(minModelName)($scope);
                    if (val && !date && typeof minDate == "string") {
                        var time = minDate.split("-");
                        var new_year = time[0];
                        var new_month = time[1]++;
                        if (new_month > 12) {
                            new_month -= 12;
                            new_year++;
                        }
                        var new_date = new Date(new_year, new_month, 1);
                        var lastDay;
                        if (new_date.getTime() - 1e3 * 60 * 60 * 24 > new Date().getTime()) {
                            lastDay = new Date(new Date().getTime()).getDate();
                        } else {
                            lastDay = new Date(new_date.getTime() - 1e3 * 60 * 60 * 24).getDate();
                        }
                        var mi = "-";
                        if (new_month < 10) {
                            mi = "-0";
                        }
                        var lastDate = new_year + mi + new_month + "-" + lastDay;
                        $parse(modelName).assign($scope, lastDate);
                    }
                });
                if (syncName) {
                    $scope.$watch(syncName, function (val, oldVal) {
                        new Function("$scope", "date", "return $scope." + modelName + "= date;")($scope, val);
                    });
                    $scope.$watch(modelName, function (val, oldVal) {
                        if (typeof val == "object") {
                            new Function("$scope", "date", "return $scope." + syncName + "= date;")($scope, $filter("date")(val, "yyyy-MM-dd"));
                        } else new Function("$scope", "date", "return $scope." + syncName + "= date;")($scope, val);
                    });
                }
            }
        };
    }
])
    .directive("ungDatepicker", ["$filter", "$parse", "datepickerConfig",
        function ($filter, $parse, datepickerConfig) {
            return {
                require: "?^ngModel",
                // scope: {
                //     hasTimepicker : '@',
                //     format : '@'
                // },
                replace: true,
                template: '<input  type="datetime"  class="form-control" placeholder="日/月" datepicker-options="options" datepicker-popup="yyyy-MM-dd"   current-text="今天" clear-text="清空" close-text="确定"  readonly  />',
                transclude: true,
                link: function ($scope, elm, attrs, ngModel) {

                    $scope.hasTimepicker = attrs.hasTimepicker;
                    $scope.format = attrs.format;

                    elm.on("click", function () {
                        var $dropdown = $(this).next(".dropdown-menu");
                        if (elm.offset().top - $(window).scrollTop() > $(window).height() / 2) {
                            $dropdown.css("top", -$dropdown.height() - elm.height() + 5);
                        } else {
                            $dropdown.css("top", 0 + elm.height() + 13);
                        }
                        if (elm.offset().left - $(window).scrollLeft() >= $(window).width() / 2) {
                            $dropdown.css("left", elm.width() - $dropdown.width() + 13);
                        } else {
                            $dropdown.css("left", 0);
                        }
                        $(this).next(".dropdown-menu").show();
                        /*.off("click.datepicker").on("click", "tbody .btn,li:eq(1) .btn", function () {
                         $(this).closest(".dropdown-menu").hide();
                         });*/
                        $dropdown.off("click.datepicker").on("click.datepicker",'.btn-close', function (e) {
                            e.stopPropagation();
                            $(this).closest(".dropdown-menu").hide();
                        });
                        $(document).off("click.datepicker").on("click.datepicker", function () {
                            $(".dropdown-menu").hide();
                        });
                    });
                    elm.on("click", function (e) {
                        e.stopPropagation();
                    }).next(".dropdown-menu").on("click", function (e) {
                        e.stopPropagation();
                    });
                    $scope.$watch(attrs.ngModel, function (val) {
                        if (typeof val == "object") {
                            var defaultFormat = attrs.hasTimepicker ? "yyyy-MM-dd hh:mm:ss" : 'yyyy-MM-dd';
                            $parse(attrs.ngModel).assign($scope, $filter("date")(val, attrs.format || defaultFormat));
                        }
                    });
                }
            };
        }
    ])
    .directive("modalOpen", ["$modal",
        function ($modal) {
            return {
                require: "?ngModel",
                link: function ($scope, elm, attrs, ctrl) {
                    var scope = $scope;
                    var controller = ["$scope", "$rootScope", "$modalInstance", "item", "$state", "modalBasic",
                        function ($scope, $rootScope, $modalInstance, item, $state , modalBasic) {

                            var $modal = $(".modal-dialog");
                            $scope = $.extend ( {}, $scope,  modalBasic ) ;
                            $scope.ok = function ( options , $scope ) {
                                $rootScope.$emit("modalOk", {
                                    $modalInstance: $modalInstance,
                                    $scope: $scope
                                }, options);
                            };
                            $scope.cancel = function (options) {
                                $state.reload();
                                $modalInstance.dismiss("cancel");
                                $rootScope.$broadcast("modalClose", options);
                            };
                        }
                    ];
                    elm.click(function () {
                        setTimeout( function(){
                            $scope.$broadcast("modalOpen");
                            $modal.open({
                                templateUrl: attrs.modalOpen,
                                resolve: {
                                    item: function () {
                                        return $scope.item;
                                    }
                                },
                                size: attrs.size || "md",
                                controller: attrs.controller || controller
                            });
                        },100)
                    });

                }
            };
        }
    ]).directive("ueditor", function () {
    return {
        restrict: "EA",
        require: "?ngModel",
        scope: {
            height: "@?"
        },
        link: function (sp, em, at, cl) {
            function a(u, c) {
                var elt = document.createElement("script");
                elt.src = u;
                elt.anysc = true;
                if (elt.onload === null) {
                    elt.onload = function () {
                        typeof c == "function" && c();
                    };
                } else {
                    elt.onreadystatechange = function () {
                        if (elt.readyState == "loaded" || elt.readyState == "complete") {
                            typeof c == "function" && c();
                        }
                    };
                }
                document.getElementsByTagName("body")[0].appendChild(elt);
            }

            var _s = this,
                _initContent, ed, editorReady = false,
                bU = "/sea_modules/ueditor/";
            var fexUE = {
                initEditor: function () {
                    var _s = this;
                    if (typeof UE != "undefined") {
                        if (at.ueditor == "article") {
                            ed = new UE.ui.Editor({
                                serverUrl: "/api.wode-mall.com/basic/Ueditor/index",
                                initialContent: _initContent,
                                toolbars: [
                                    ["undo", "redo", "insertunorderedlist", "insertorderedlist", "cleardoc", "selectall", "print", "drafts", "simpleupload", 'insertimage',"date", "time", "map", "horizontal", "spechars", "blockquote", "pasteplain", "insertcode", "template", "background", "bold", "italic", "underline", "fontborder", "strikethrough", "forecolor", "backcolor", "superscript", "subscript", "justifyleft", "justifycenter", "justifyright", "justifyjustify", "touppercase", "tolowercase", "directionalityltr", "directionalityrtl", "indent", "removeformat", "formatmatch", "autotypeset", "customstyle", "paragraph", "rowspacingbottom", "rowspacingtop", "lineheight", "fontfamily", "fontsize", "imagenone", "imageleft", "imageright", "imagecenter", "inserttable", "deletetable", "mergeright", "mergedown", "splittorows", "splittocols", "splittocells", "mergecells", "insertcol", "insertrow", "deletecol", "deleterow", "insertparagraphbeforetable", "fullscreen", "source"]
                                ],
                                initialFrameHeight: sp.height || 500,
                                autoHeightEnabled: true,
                                wordCount: true,
                                elementPathEnabled: true
                            });
                        } else {
                            ed = new UE.ui.Editor({
                                serverUrl: "/api.wode-mall.com/basic/Ueditor/index",
                                initialContent: _initContent,
                                toolbars: [
                                    ["source", "undo", "redo", "bold", "italic", "removeformat", "formatmatch", "autotypeset", "blockquote", "pasteplain", "|", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "simpleupload",'insertimage']
                                ],
                                initialFrameHeight: sp.height || 500,
                                autoHeightEnabled: true,
                                wordCount: true,
                                elementPathEnabled: true
                            });
                        }
                        ed.render(em[0]);
                        ed.ready(function () {
                            editorReady = true;
                            _s.setContent(_initContent);
                            ed.addListener("contentChange", function () {
                                sp.$apply(function () {
                                    cl.$setViewValue(ed.getContent());
                                });
                            });
                        });
                    } else {
                        a(bU + "ueditor.config.js");
                        a(bU + "ueditor.all.min.js", function () {
                            _s.initEditor();
                        });
                    }
                }, setContent: function (content) {
                    if (ed && editorReady) {
                        ed.setContent(content);
                    }
                }
            };
            cl.$render = function () {
                _initContent = cl.$isEmpty(cl.$viewValue) ? "" : cl.$viewValue;
                fexUE.setContent(_initContent);
            };
            fexUE.initEditor();
        }
    };
})
    .directive("seniorTable", ["$state", "$modal", "PAGINATION", "$stateParams", "$filter", "$timeout", "utils", "security", "paginationConfig",
        function (e, t, i, n, a, r, o, s, l) {
            return {
                require: "?ngModel",
                link: function (a, d, c) {
                    a.searchCondition = angular.extend({}, n) || {}, a.currentPage = a.currentPage || 1, a.totalItems = a.totalItems || 0, a.maxSize = i.maxSize;
                    var u = c.pageSize || i.pageSize;
                    l.itemsPerPage = u, $(".box-header").bind("keypress", function (e) {
                        return 13 == e.keyCode ? a.searchInfo() : void 0;
                    }), a.searchInfo = function () {
                        return a.currentPage = 1, a.search(!0), !1;
                    }, a.pageChanged = function () {
                        return a.search(), !1;
                    };
                    var p = angular.extend({}, a.searchCondition);
                    delete p.currentPage ;
                    a.reload = function(){
                        a[c.seniorTable].get({
                            currentPage: n.currentPage || 1,
                            pageSize: u || 10,
                            key: ""
                        }, p).success(function (e, status) {
                            200 == status ? (e.data && (a.list = e.data, a.item = e.cond, a.totalItems = e.total, a.$emit("seniorTableLoaded", e)), a.currentPage = n.currentPage || 1, $(window).resize()) : r(function () {
                                if (status == 401) {
                                    o.message('401:未授权或令牌错误');
                                } else {
                                    o.message(e.error || "服务器出错！");
                                }
                            });
                        }).error(function () {
                            o.message("服务器无响应！");
                        })
                    };
                    a.reload();
                    (a.search = function (t) {
                        var i = t ? a.searchCondition : n;
                        return i.currentPage = a.searchCondition.currentPage = a.currentPage, e.go(e.current.name, i, {
                            reload: !0
                        }), this;
                    }, a.add = function () {
                        a.item = null, a.update();
                    }, a.update = function ( item ) {
                        var e = item || this.item;
                        return t.open({
                            templateUrl: c.dataTpl || "tpl-update.html",
                            resolve: {
                                item: function () {
                                    return e;
                                }, obj: function () {
                                    return a[c.seniorTable];
                                }, parentScope: function () {
                                    return a;
                                }
                            },
                            size: c.openSize || "md",
                            link :["$scope", "$rootScope", "$modalInstance", "item", "obj", "$state", "parentScope", "utils",    function (e, t, i, n, a, r, o, s) {
                            }],
                            controller: ["$scope", "$rootScope", "$modalInstance", "item", "obj", "$state", "parentScope", "utils",
                                function (e, t, i, n, a, r, o, s) {

                                    e.item = n, e.submitted = !1, e.interacted = function (t) {
                                        return t.$dirty || e.submitted || t.isblur;
                                    }, e.submitAddForm = function (l) {
                                        var submitObject = $.extend({} ,e.item);
                                        delete  submitObject.child;
                                        e.submitted = !0, l && (n ? a.update(submitObject).success(function (e, status) {
                                            200 == status ? (o.$emit("modalUpdateSuccess", o, e), i.dismiss("cancel")) : s.message(e.error);
                                        }).error(function () {
                                            s.message("服务器无响应！");
                                        }) : a.add(e.item).success(function (e, status) {
                                            200 == status ? ("false" != c.addedReload && ((r.go(r.current.name, o.searchCondition))), o.$emit("modalAddSuccess", o, e, i), i.dismiss("cancel")) : (s.message(e.error || e.message), o.$emit("modalAddError", o, e, i), r.reload());
                                        }).error(function () {
                                            s.message("服务器无响应！");
                                        }));
                                    }, e.ok = function () {
                                    }, e.cancel = function () {

                                        r.reload();
                                        i.dismiss("cancel");
                                    };

                                    setTimeout( function(){
                                        o.$emit("modalLoaded", o, e );
                                    },100)
                                }
                            ]
                        }), this;
                    }, a.remove = function (t , item ) {
                        var item = item || this.item;
                        $.MsgBox.Confirm('操作提示',t || "是否要删除？",function(){
                            a[c.seniorTable].remove && a[c.seniorTable].remove( item.id ).success(function (t, status) {
                                200 == status ? e.reload() : o.message(t.error || t.message);
                            }).error(function () {
                                o.message("服务器无响应！");
                            })
                        });
                        return this;
                    });
                }
            };
        }
    ]).directive("idCardValidator", ["$http", "$parse",
    function ($http, $parse) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function (scope, element, attrs, ngModel) {
                if (ngModel) {
                    ngModel.$parsers.push(function (value) {
                        if (/^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(value) || $parse(attrs.idCardValidator)(scope) === false) {
                            ngModel.$setValidity("idCardValidator", true);
                        } else {
                            ngModel.$setValidity("idCardValidator", false);
                        }
                        return value;
                    });
                }
            }
        };
    }
]).directive("mobileValidator", ["$http",
    function ($http) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function (scope, element, attrs, ngModel) {
                if (ngModel) ngModel.$parsers.push(function (value) {
                    if (/^(1\d{10})$/.test(value)) {
                        ngModel.$setValidity("mobileValidator", true);
                    } else {
                        ngModel.$setValidity("mobileValidator", false);
                    }
                    return value;
                });
            }
        };
    }
]).directive("moneyValidator", ["$http",
    function ($http) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function (scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function (value) {
                    if (/^\d+(\.\d{2})?$/.test(value)) {
                        ngModel.$setValidity("moneyValidator", true);
                    } else {
                        ngModel.$setValidity("moneyValidator", false);
                    }
                    return value;
                });
            }
        };
    }
]).directive("numberValidator", ["$http",
    function ($http) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function (scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function (value) {
                    if (/^\d+(\.\d+)?$/.test(value)) {
                        ngModel.$setValidity("numberValidator", true);
                    } else {
                        ngModel.$setValidity("numberValidator", false);
                    }
                    return value;
                });
            }
        };
    }
]).directive("maxNumber", ["$parse",
    function ($parse) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function (scope, element, attrs, ngModel) {
                scope.$watch(attrs.ngModel, function (val) {
                    var me = $parse(attrs.ngModel),
                        max = $parse(attrs.maxNumber);
                    if (val > max(scope)) {
                        me.assign(scope, max(scope));
                    }
                });
            }
        };
    }
]).directive("cropZoom", ["$parse",
    function ($parse) {
        return {
            restrict: "A",
            require: "?ngModel",
            link: function (scope, element, attrs, ngModel) {
                var isActive = false,
                    $crop = $(element).find(".image-crop");
                var width = element.data("deg", 0).width(),
                    $img = element.find("img");
                var $loading = $crop.find(".loading");
                scope.$watch(attrs.cropZoom, function () {
                    $img.hide();
                    resize();
                    if (!$loading.length) {
                        $loading = $('<div class="loading in" style="position: absolute"></div>').appendTo($crop);
                    } else {
                        $loading.show();
                    }
                });
                $img.hide().on("load", function () {
                    element.data("deg", 0);
                    $(this).attr("style", "");
                    $(this).fadeIn();
                    resize();
                    $loading.hide();
                });

                function resize() {
                    var $img = element.find("img").css({
                        position: "absolute",
                        "margin-top": ""
                    });
                    if ($img.width() > $img.height()) {
                        if (Math.abs(element.data("deg") % 180) === 0) {
                            if ($img.width() >= width) {
                                $img.width(width);
                            }
                        } else {
                            $img.css("margin-top", ($img.width() - $img.height()) / 2);
                        }
                    } else {
                        if ($img.height() >= width) {
                            $img.height(width);
                        }
                        if (Math.abs(element.data("deg") % 180) == 90) {
                            if ($img.width() > width) {
                                $img.width(width);
                            }
                            $img.css("margin-top", -($img.height() - $img.width()) / 2);
                        }
                    }
                    if (Math.abs(element.data("deg") % 180) === 0) {
                        $crop.height($img.height() || "auto");
                    } else {
                        $crop.height($img.width() || "auto");
                    }
                    $img.css("position", "");
                }

                element.click(function () {
                    isActive = true;
                }).on("click", ".rotate-left", function () {
                    var deg = (element.data("deg") || 0) - 90;
                    element.data("deg", deg);
                    resize();
                    element.find("img").css({
                        "-webkit-transform": "rotate(" + deg + "deg)",
                        "-moz-transform": "rotate(" + deg + "deg)",
                        transform: "rotate(" + deg + "deg)"
                    });
                }).on("click", ".rotate-right", function () {
                    var deg = (element.data("deg") || 0) + 90;
                    element.data("deg", deg);
                    resize();
                    element.find("img").css({
                        "-webkit-transform": "rotate(" + deg + "deg)",
                        "-moz-transform": "rotate(" + deg + "deg)",
                        transform: "rotate(" + deg + "deg)"
                    });
                }).on("click", ".delete", function () {
                    scope[attrs.cropZoom] = "";
                    scope.$apply();
                });
            }
        };
    }
])
    .directive('compileHtml', function ($compile) {
        return {
            restrict: 'AE',
            replace: true,
            link: function (scope, ele, attrs) {
                scope.$watch(function () {return scope.$eval(attrs.ngBindHtml);},
                    function(html) {
                        ele.html(html);
                        $compile(ele.contents())(scope);
                    });
            }
        };
    })
    .directive('tooltipPanel', ['$compile', '$parse', function ($compile , $parse) {
        return {
            restrict: 'AE',
            replace: true,
            link: function (scope, ele, attrs) {
                ele.css('position','relative').on('mouseenter',function(){
                    ele.find('.tooltip-panel').show();
                }).on('mouseleave',function(){
                    ele.find('.tooltip-panel').hide();
                }).find('.tooltip-panel').css({
                    position: 'absolute',
                    left :  0,
                    top : 0
                })
            }
        }
    }])
    .directive('treeList', ['$compile', '$parse', function ($compile , $parse) {
        return {
            restrict: 'AE',
            replace: true,
            link: function (scope, ele, attrs) {
                ele.on('click','.fa-angle-down',function(){
                    $(this).addClass('fa-angle-left').removeClass('fa-angle-down');
                    $(this).closest('.dropdown-slide-item').children('.dropdown-slide-children').show();
                })
                    .on('click','.fa-angle-left',function(){
                        $(this).removeClass('fa-angle-left').addClass('fa-angle-down');
                        $(this).closest('.dropdown-slide-item').children('.dropdown-slide-children').hide();
                    })
                    .on('click','.slide-all',function(){
                        var status =  $(this).data('status');
                        if( status ){
                            $(this).data('status', 0);
                            $('.dropdown-list-children',ele).hide();
                        }
                        else{
                            $(this).data('status', 1);
                            $('.dropdown-list-children',ele).show();
                        }
                    })
                    .on('click','.dropdown-toggle' , function(){
                        var $menu =   ele.find('.dropdown-menu');
                        if( $menu.css('display') == 'none' ){
                            $menu.show();
                        }
                        else{
                            $menu.hide();
                        }
                    })
                    .on('click','.dropdown-menu li .dropdown-tag' , function(){
                        ele.find('.dropdown-menu').hide();
                        $parse(ele.find('[model-key]').attr('model-key')).assign( scope , $(this).closest('li').data('id'));
                        $parse(ele.find('[model-value]').attr('model-value')).assign( scope , $(this).text() );
                        scope.$apply();
                    })
            }
        }
    }])
    .directive('treeTable', ['$compile',function ($compile) {
        return {
            restrict: 'AE',
            replace: true,
            link: function (scope, ele, attrs) {
                ele.on('click','.tree-node',function(){
                    var $arrowLeft = $(this).find('.fa-angle-left'),$arrowDown = $(this).find('.fa-angle-down');
                    if( $arrowDown.length ){
                        $(this).closest('.table-list-inner').find('> .row > .table-list-children').show();
                        $arrowDown.addClass('fa-angle-left').removeClass('fa-angle-down');
                    }
                    else{
                        $arrowLeft.removeClass('fa-angle-left').addClass('fa-angle-down');
                        $(this).closest('.table-list-inner').find('> .row > .table-list-children').hide();
                    }
                }).on('click','.slide-all',function(){
                    var status =  $(this).data('status');
                    if( status ){
                        $(this).data('status', 0).text('全部展开')
                        $('.table-list-children',ele).hide();
                    }
                    else{
                        $(this).data('status', 1).text('全部收起');
                        $('.table-list-children',ele).show();
                    }
                })
            }
        };
    }])
    .service('treeRender', ['$compile',function ($compile) {
        var _this  = this;
        this.renderList = function( data , index ,template , $scope ,selector ){
            var html = '';
            var $container = $(selector || '.tree-list');

            for(var i = 0 ; i < data.length ; i ++   ){
                var item = data[i];
                var icon = item.child ? '<i class="fa fa-angle-down fa-1x" style="font-weight: bold; font-size: 16px;"></i>' : '';
                html = template( item , icon ,index );

                var $elem = $( html ).data('item' , item ).click( function(e){
                    $scope.item  = $(this).data('item');
                });


                // if( i == 0 ){
                // $scope[ 'DATALIST' + index ] = data;
                if ( index && index !=0 ) {
                    var compileFn = $compile($elem);
                    var $dom = compileFn($scope);
                    $dom.appendTo($('.node-' + index , $container ));
                }
                else{
                    var compileFn = $compile($elem);
                    var $dom = compileFn($scope);
                    $dom.appendTo( $container );
                }
                // }

                if( item.child ){
                    _this.renderList( item.child ,item.id , template , $scope , selector );
                }
            }
        }
        this.renderTable = function( data  , index , template , $scope , selector ){
            var html = '';
            var $container = $(selector || '.tree-table');
            for(var i = 0 ; i < data.length ; i ++   ){
                var item = data[i];
                var icon = item.child ? '<i class="fa fa-angle-down fa-1x" style="font-weight: bold; font-size: 16px;"></i>' : '';


                //   if( i == 0 ){
                html =  template( item , icon ,( index || 0 ) );
                var $elem = $( html ).data('item' , item ).click( function(e){
                    $scope.item  = $(this).data('item');
                });
                //  }


                //  if( i == 0 ) {
                // $scope[ 'DATALIST' + item.id ] = data;
                if ( index != null && index!=0 ) {
                    var compileFn = $compile($elem);
                    var $dom = compileFn($scope);
                    $dom.appendTo($('.node-' + index, $container));
                }
                else {
                    var compileFn = $compile($elem);
                    var $dom = compileFn($scope);
                    $dom.appendTo($container);
                }
                // }
                if( item.child ){
                    _this.renderTable( item.child , item.id , template , $scope , selector );
                }
            }
        }
    }])
    .directive("autoComplete", ["$http", "API_WD_DOMAIN", "$parse",
        function ($http, API_WD_DOMAIN, $parse) {
            return {
                restrict: "AE",
                require: "?ngModel",
                link: function (scope, element, attrs, ngModel) {
                    var defaults = {
                        scroll: true,
                        scrollHeight: 300,
                        dataType: "json",
                        parse: function (data) {
                            return $.map(data.data.list, function (row) {
                                return {
                                    data: row,
                                    value: row.name,
                                    result: row.name
                                };
                            });
                        }, formatItem: function (row, n, m) {
                            return row.name;
                        }
                    };
                    $.browser = $.browser || {};
                    var opt = angular.extend(defaults, attrs.setting);
                    var url = !attrs.autoComplete ? API_WD_DOMAIN + "/xxxx/" : API_WD_DOMAIN + attrs.autoComplete;
                    $(element).autocomplete(url, opt).on("result", function (e, val) {
                        $parse(attrs["ngModel"]).assign(scope, val.name);
                        scope.autoCompleteName = val.name;
                        scope.$apply();
                    });
                }
            };
        }
    ]).directive("webUploader", ["$http", "API_WD_DOMAIN", "$parse", "$timeout",
    function ($http, API_WD_DOMAIN, $parse, $timeout) {
        return {
            restrict: "AE",
            require: "?ngModel",
            replace: true,
            transclude: true,
            template: '<div class="uploader">' + '<div class="file-picker"></div>' + '<div class="queueList"><ul  class="uploader-list filelist"></ul></div>' + "<span ng-transclude></span>" + '</div>',
            link: function (scope, element, attrs, ngModel) {
                var $wrap = element,
                    $coverImage, $queue = $(".filelist", element),
                    $statusBar = $wrap.find(".statusBar"),
                    $info = $statusBar.find(".info"),
                    $upload = $wrap.find(".uploadBtn"),
                    $placeHolder = $wrap.find(".placeholder"),
                    $progress = $statusBar.find(".progress").hide(),
                    fileCount = 0,
                    fileSize = 0,
                    ratio = window.devicePixelRatio || 1,
                    thumbnailWidth = 110 * ratio,
                    thumbnailHeight = 110 * ratio,
                    state = "pedding",
                    percentages = {},
                    isSupportBase64 = function () {
                        var data = new Image();
                        var support = true;
                        data.onload = data.onerror = function () {
                            if (this.width != 1 || this.height != 1) {
                                support = false;
                            }
                        };
                        data.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                        return support;
                    }(),
                    flashVersion = function () {
                        var version;
                        try {
                            version = navigator.plugins["Shockwave Flash"];
                            version = version.description;
                        } catch (ex) {
                            try {
                                version = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");
                            } catch (ex2) {
                                version = "0.0";
                            }
                        }
                        version = version.match(/\d+/g);
                        return parseFloat(version[0] + "." + version[1], 10);
                    }(),
                    supportTransition = function () {
                        var s = document.createElement("p").style,
                            r = "transition" in s || "WebkitTransition" in s || "MozTransition" in s || "msTransition" in s || "OTransition" in s;
                        s = null;
                        return r;
                    }(),
                    uploader;
                if (!WebUploader.Uploader.support() && !WebUploader.Uploader.support("flash") && WebUploader.browser.ie) {
                    if (flashVersion) {
                        (function (container) {
                            window["expressinstallcallback"] = function (state) {
                                switch (state) {
                                    case "Download.Cancelled":
                                        alert("您取消了更新！");
                                        break;
                                    case "Download.Failed":
                                        alert("安装失败");
                                        break;
                                    default:
                                        alert("安装已成功，请刷新！");
                                        break;
                                }
                                delete window["expressinstallcallback"];
                            };
                            var swf = "./expressInstall.swf";
                            var html = '<object type="application/' + 'x-shockwave-flash" data="' + swf + '" ';
                            if (WebUploader.browser.ie) {
                                html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
                            }
                            html += 'width="100%" height="100%" style="outline:0">' + '<param name="movie" value="' + swf + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowscriptaccess" value="always" />' + "</object>";
                            container.html(html);
                        })($wrap);
                    } else {
                        $wrap.html('<a href="http://www.adobe.com/go/getflashplayer" target="_blank" border="0"><img src="http://www.adobe.com/macromedia/style_guide/images/160x41_Get_Flash_Player.jpg" /></a>');
                    }
                    return;
                } else if (!WebUploader.Uploader.support()) {
                    alert("Web Uploader 不支持您的浏览器！");
                    return;
                }
                if (attrs.accept == "fileUpload") {
                    $title_name = "点击选择文件";
                } else {
                    $title_name = "点击选择图片";
                }
                uploader = WebUploader.create({
                    auto: true,
                    pick: {
                        id: element.find(".file-picker"),
                        label: attrs.label || $title_name,
                        multiple: true
                    },
                    formData: {
                        thumbHeight: 200,
                        thumbWidth: 200,
                        category: "change"
                    },
                    dnd: element.find(".placeholder"),
                    paste: attrs.id,
                    swf: "../../dist/Uploader.swf",
                    chunked: false,
                    chunkSize: 512 * 1024,
                    server: attrs.server || API_WD_DOMAIN + "/basic/Ueditor/index?action=uploadimage",
                    accept: attrs.accept || {
                        title: "Images",
                        extensions: "gif,jpg,jpeg,bmp,png",
                        mimeTypes: "image/*"
                    }, compress: {
                        width: attrs.width || 1600,
                        height: 1600,
                        quality: attrs.quality || 90,
                        allowMagnify: false,
                        crop: false,
                        preserveHeaders: true,
                        noCompressIfLarger: false,
                        compressSize: 0
                    }, disableGlobalDnd: true,
                    fileNumLimit: attrs.fileNumLimit || 300,
                    fileSizeLimit: attrs.fileSizeLimit || 4 * 1024 * 1024,
                    fileSingleSizeLimit: attrs.fileSingleSizeLimit || 4 * 1024 * 1024
                });
                uploader.on("dndAccept", function (items) {
                    var denied = false,
                        len = items.length,
                        i = 0,
                        unAllowed = "text/plain;application/javascript ";
                    for (; i < len; i++) {
                        if (~unAllowed.indexOf(items[i].type)) {
                            denied = true;
                            break;
                        }
                    }
                    return !denied;
                });
                uploader.on("dialogOpen", function () {
                });

                function addFile(file) {
                    var $li = $('<li id="' + file.id + '">' + '<p class="title">' + (file.name || "") + "</p>" + '<p class="imgWrap"></p>' + '<p class="progress"><span></span></p>' + "</li>"),
                        $btns = $('<div class="file-panel">' + '<span class="cancel">删除</span>' + '<span class="rotateRight">向右旋转</span>' + '<span class="rotateLeft">向左旋转</span></div>').appendTo($li),
                        $prgress = $li.find("p.progress span"),
                        $wrap = $li.find("p.imgWrap"),
                        $info = $('<p class="error"></p>'),
                        showError = function (code) {
                            switch (code) {
                                case "exceed_size":
                                    text = "文件大小超出";
                                    break;
                                case "interrupt":
                                    text = "上传暂停";
                                    break;
                                default:
                                    text = "上传失败，请重试";
                                    break;
                            }
                            $info.text(text).appendTo($li);
                        };
                    if (file.url) {
                        var img = $('<img src="' + file.url + '">');
                        $wrap.empty().append(img);
                        file.rotation = 0;
                    } else if (file.getStatus && file.getStatus() === "invalid") {
                        showError(file.statusText);
                    } else {
                        $wrap.text("预览中");
                        uploader.makeThumb(file, function (error, src) {
                            var img;
                            if (error) {
                                $wrap.text("不能预览");
                                return;
                            }
                            if (isSupportBase64) {
                                img = $('<img src="' + src + '">');
                                $wrap.empty().append(img);
                            } else {
                                img = $('<img src="' + file.url + '">');
                                $wrap.empty().append(img);
                            }
                        }, thumbnailWidth, thumbnailHeight);
                        percentages[file.id] = [file.size, 0];
                        file.rotation = 0;
                    }
                    !file.url && file.on("statuschange", function (cur, prev) {
                        if (prev === "progress") {
                            $prgress.hide().width(0);
                        } else if (prev === "queued") {
                        }
                        if (cur === "error" || cur === "invalid") {
                            showError(file.statusText);
                            percentages[file.id][1] = 1;
                        } else if (cur === "interrupt") {
                            showError("interrupt");
                        } else if (cur === "queued") {
                            $info.remove();
                            $prgress.css("display", "block");
                            percentages[file.id][1] = 0;
                        } else if (cur === "progress") {
                            $info.remove();
                            $prgress.css("display", "block");
                        } else if (cur === "complete") {
                            $prgress.hide().width(0);
                            $li.append('<span class="success"></span>');
                        }
                        $li.removeClass("state-" + prev).addClass("state-" + cur);
                    });
                    $li.on("mouseenter", function () {
                        $btns.stop().animate({
                            height: 30
                        });
                    });
                    $li.on("mouseleave", function () {
                        $btns.stop().animate({
                            height: 0
                        });
                    }).on("click", ".coverImage", function () {
                        var index = $(this).closest("li").index();
                        var value = $parse(attrs.ngModel)(scope);
                        value.unshift(value.splice(index));
                        $parse(attrs.ngModel).assign(scope, value);
                        $(this).closest("li").prependTo($queue);
                        $(this).hide().closest("li").siblings().find(".coverImage").stop(true, true).fadeIn();
                    });
                    $btns.on("click", "span", function () {
                        var index = $(this).index(),
                            deg;
                        switch (index) {
                            case 0:
                                var $li = $(this).closest("li");
                                index = $li.index();
                                var model = $parse(attrs.ngModel)(scope);
                                model.splice(index, 1);
                                $parse(attrs.ngModel).assign(scope, model);
                                var modelArray = $parse(attrs.ngModel + "Array")(scope),
                                    arr;
                                arr = modelArray.split(",");
                                arr.splice(index, 1);
                                $parse(attrs.ngModel + "Array").assign(scope, arr.join(","));
                                $li.off().find(".file-panel").off().end().remove();
                                if ($queue.find("li").length < attrs.fileNumLimit) {
                                    element.find("label").show();
                                }
                                uploader.removeFile(file);
                                return;
                            case 1:
                                file.rotation += 90;
                                break;
                            case 2:
                                file.rotation -= 90;
                                break;
                        }
                        if (supportTransition) {
                            deg = "rotate(" + file.rotation + "deg)";
                            $wrap.css({
                                "-webkit-transform": deg,
                                "-mos-transform": deg,
                                "-o-transform": deg,
                                transform: deg
                            });
                        } else {
                            $wrap.css("filter", "progid:DXImageTransform.Microsoft.BasicImage(rotation=" + ~~(file.rotation / 90 % 4 + 4) % 4 + ")");
                        }
                    });
                    $li.appendTo($queue);
                    $coverImage = $('<span class="coverImage">设置封面</span>').appendTo($li);
                    setCoverImage($coverImage, $li.index());
                    if ($queue.find("li").length >= attrs.fileNumLimit) {
                        element.find("label").hide();
                    }
                }

                function setCoverImage($coverImage, index) {
                    if (attrs.coverImage == "true" && index !== 0) {
                        $coverImage.show();
                    } else {
                        $coverImage.hide();
                    }
                }

                function removeFile(file) {
                    var $li = $("#" + file.id);
                    delete percentages[file.id];
                    updateTotalProgress();
                    $parse(attrs.ngModel).assign(scope, $parse(attrs.ngModel)(scope).splice($li.index(), 1));
                    var arr = $parse(attrs.ngModel + "Array")(scope).split(",");
                    $parse(attrs.ngModel + "Array").assign(scope, arr.splice($li.index(), 1).join(","));
                    $li.off().find(".file-panel").off().end().remove();
                    if ($queue.find("li").length < attrs.fileNumLimit) {
                        element.find("label").show();
                    }
                }

                function updateTotalProgress() {
                    var loaded = 0,
                        total = 0,
                        spans = $progress.children(),
                        percent;
                    $.each(percentages, function (k, v) {
                        total += v[0];
                        loaded += v[0] * v[1];
                    });
                    percent = total ? loaded / total : 0;
                    spans.eq(0).text(Math.round(percent * 100) + "%");
                    spans.eq(1).css("width", Math.round(percent * 100) + "%");
                    updateStatus();
                }

                function updateStatus() {
                    var text = "",
                        stats;
                    if (state === "ready") {
                        text = "选中" + fileCount + "张图片，共" + WebUploader.formatSize(fileSize) + "。";
                    } else if (state === "confirm") {
                        stats = uploader.getStats();
                        if (stats.uploadFailNum) {
                            text = "已成功上传" + stats.successNum + "张照片至XX相册，" + stats.uploadFailNum + '张照片上传失败，<a class="retry" href="#">重新上传</a>失败图片或<a class="ignore" href="#">忽略</a>';
                        }
                    } else {
                        stats = uploader.getStats();
                        text = "共" + fileCount + "张（" + WebUploader.formatSize(fileSize) + "），已上传" + stats.successNum + "张";
                        if (stats.uploadFailNum) {
                            text += "，失败" + stats.uploadFailNum + "张";
                        }
                    }
                    $info.html(text);
                }

                function setState(val) {
                    var file, stats;
                    if (val === state) {
                        return;
                    }
                    $upload.removeClass("state-" + state);
                    $upload.addClass("state-" + val);
                    state = val;
                    switch (state) {
                        case "pedding":
                            $placeHolder.removeClass("element-invisible");
                            $queue.hide();
                            $statusBar.addClass("element-invisible");
                            uploader.refresh();
                            break;
                        case "ready":
                            $placeHolder.addClass("element-invisible");
                            element.find(".uploader-start").removeClass("element-invisible");
                            $queue.show();
                            $statusBar.removeClass("element-invisible");
                            uploader.refresh();
                            break;
                        case "uploading":
                            element.find(".uploader-start").addClass("element-invisible");
                            $progress.show();
                            $upload.text("暂停上传");
                            break;
                        case "paused":
                            $progress.show();
                            $upload.text("继续上传");
                            break;
                        case "confirm":
                            $progress.hide();
                            element.find(".uploader-start").removeClass("element-invisible");
                            $upload.text("开始上传");
                            stats = uploader.getStats();
                            if (stats.successNum && !stats.uploadFailNum) {
                                setState("finish");
                                return;
                            }
                            break;
                        case "finish":
                            stats = uploader.getStats();
                            if (stats.successNum) {
                            } else {
                                state = "done";
                                location.reload();
                            }
                            break;
                    }
                    updateStatus();
                }

                uploader.onUploadProgress = function (file, percentage) {
                    var $li = $("#" + file.id),
                        $percent = $li.find(".progress span");
                    $percent.css("width", percentage * 100 + "%");
                    percentages[file.id][1] = percentage;
                    updateTotalProgress();
                };
                uploader.onFileQueued = function (file) {
                    fileCount++;
                    fileSize += file.size;
                    if (fileCount === 1) {
                        $placeHolder.addClass("element-invisible");
                        $statusBar.show();
                    }
                    addFile(file);
                    setState("ready");
                    updateTotalProgress();
                };
                uploader.onFileDequeued = function (file) {
                    fileCount--;
                    fileSize -= file.size;
                    if (!fileCount) {
                        setState("pedding");
                    }
                    removeFile(file);
                    updateTotalProgress();
                };
                uploader.on("all", function (type) {
                    var stats;
                    switch (type) {
                        case "uploadFinished":
                            setState("confirm");
                            break;
                        case "startUpload":
                            setState("uploading");
                            break;
                        case "stopUpload":
                            setState("paused");
                            break;
                    }
                });
                uploader.on("uploadSuccess", function (file, args) {
                    var arr = $parse(attrs.ngModel)(scope) || [];
                    var arrs = $parse(attrs.ngModel + "Array")(scope);
                    arrs = arrs ? arrs.split(",") : [];
                    args.isupload = true;
                    arr.push(args);
                    arrs.push(args.url);
                    $parse(attrs.ngModel).assign(scope, arr);
                    $parse(attrs.ngModel + "Array").assign(scope, arrs.join(","));
                    scope.$apply();
                });
                uploader.onError = function (code) {
                    alert("Eroor: " + code);
                };
                $upload.on("click", function () {
                    if ($(this).hasClass("disabled")) {
                        return false;
                    }
                    if (state === "ready") {
                        uploader.upload();
                    } else if (state === "paused") {
                        uploader.upload();
                    } else if (state === "uploading") {
                        uploader.stop();
                    }
                });
                $info.on("click", ".retry", function () {
                    uploader.retry();
                });
                $upload.addClass("state-" + state);
                updateTotalProgress();
                var isfirstload = true;
                scope.$watch(attrs.ngModel, function (val, oldValue) {
                    if (val) {
                        if (!isfirstload) $queue.find("li").remove();
                        var files = val || [],
                            arr = [];
                        for (var i = 0; i < files.length; i++) {
                            if (!files[i].isupload) addFile(files[i]);
                            arr.push(files[i].file_path);
                        }
                        $parse(attrs.ngModel + "Array").assign(scope, arr.join(","));
                        isfirstload = false;
                    }
                });
            }
        };
    }
]);
angular.module("utils.filter", []).filter("dateFormat", ["$filter",
    function ($filter) {
        return function (val) {
            var dateFilter = $filter("date");
            return dateFilter(val, "yyyy-MM-dd");
        };
    }
]).filter("price", ["$filter", "$sce",
    function ($filter, $sce) {
        return function (val, classes) {
            var pos = 2;
            if (val) {
                if (classes) {
                    var res = '<span class="' + classes + '">' + $filter("number")(val, pos) + " 元" + "</span>";
                    return $sce.trustAsHtml(res);
                } else return $filter("number")(val, pos);
            } else {
                if (classes) {
                    return $sce.trustAsHtml("&mdash;&mdash;");
                } else {
                    return "——";
                }
            }
        };
    }
]).filter("trust", ["$filter", "$sce",
    function ($filter, $sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    }
]).filter("rail2ds", ["$filter",
    function ($filter) {
        return function (val) {
            return val.replace(/\//g, "-");
        };
    }
]);
angular.module("utils.datepicker", []).service("datepickerTemplateCache", ["$templateCache",
    function ($templateCache) {
        this.reset = function () {
            $templateCache.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + "  <thead>\n" + "    <tr>\n" + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title | toCN }}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label | toCN:\' \' }}</span></button>\n' + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
            $templateCache.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + "  <thead>\n" + "    <tr>\n" + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title | toCN }}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label | toCN:\' \' }}</span></button>\n' + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
            $templateCache.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n' + "  <thead>\n" + "    <tr>\n" + '      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n' + '      <th colspan="{{4 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title | toCN:\' \' }}</strong></button></th>\n' + '      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n' + "    </tr>\n" + "    <tr>\n" + '      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr | toCN }}</small></th>\n' + "    </tr>\n" + "  </thead>\n" + "  <tbody>\n" + '    <tr ng-repeat="row in rows track by $index">\n' + '      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n' + '        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label }}</span></button>\n' + "      </td>\n" + "    </tr>\n" + "  </tbody>\n" + "</table>\n" + "");
        };
    }
]).filter("toCN", function () {
    return function (val, sep) {
        var map = {
            Sun: "日",
            Mon: "一",
            Tue: "二",
            Wed: "三",
            Thu: "四",
            Fri: "五",
            Sat: "六",
            January: "一月",
            February: "二月",
            March: "三月",
            April: "四月",
            May: "五月",
            June: "六月",
            July: "七月",
            August: "八月",
            September: "九月",
            October: "十月",
            November: "十一月",
            December: "十二月"
        };
        if (sep) {
            var res = [];
            val.split(sep).forEach(function (n) {
                res.push(map[n] ? map[n] : n);
            });
            return res.join(sep);
        } else {
            return map[val] ? map[val] : val;
        }
    };
});
angular.module("utils.service", []).service("utils", ["$http", "$filter", "API_WD_DOMAIN", "APPID", "$state", "$rootScope", "$timeout", "$modal",
    function ($http, $filter, API_WD_DOMAIN, APPID, $state, $rootScope, $timeout, $modal) {
        var self = this;
        this.message = function (msg, autoClose) {
            autoClose = autoClose === null ? true : false;

            function message(msg) {
                $modal.open({
                    template: '<div class="modal-header">' + '<button aria-label="Close" data-dismiss="modal" class="close" type="button" ng-click="cancel()"><span aria-hidden="true">×</span></button>' + '<h3 class="modal-title">提示</h3>' + "</div>" + '<div class="modal-body">' + '<form role="form">' + '<div class="box-body text-center">' + msg + "</div>" + "</form>" + "</div>" + '<div class="modal-footer">' + '<button class="btn btn-primary modv2-btn" ng-click="cancel()" type="button" >关闭</button>' + "</div>",
                    resolve: {},
                    size: "sm",
                    controller: ["$scope", "$rootScope", "$modalInstance", "$state", "$timeout",
                        function ($scope, $rootScope, $modalInstance, $state, $timeout) {
                            if (autoClose) {
                                $timeout(function () {
                                    $modalInstance.dismiss("cancel");
                                }, 1500);
                            }
                            $scope.cancel = function () {
                                $state.reload();
                                $modalInstance.dismiss("cancel");
                            };
                        }
                    ]
                });
            }

            if (typeof msg == "string") {
                message(msg);
                return;
            }
            var html = "";
            for (var i in msg) {
                html += i + ":" + msg[i].join(",") + "\n";
            }
            message(html);
        };
        this.login = function (user) {
            user.appid = APPID;
            user.password = $.md5(user.password);
            return $http.post(API_WD_DOMAIN + "/basic/Login/accessToken", user);
        };
        this.getMenu = function () {
            return $http.get(API_WD_DOMAIN + "/basic/Node/menu");
        };
        this.loginOut = function () {
            return $http.get(API_WD_DOMAIN + "/basic/Login/loginOut");
        };
        this.improveBusinessInfo = function (binfo) {
            if (binfo.pwd != binfo.confirmPwd) {
                alert("确认密码与新密码不一致");
                return false;
            }
            return $http.post(API_WD_DOMAIN + "/basic/Business/improveInfo", binfo);
        };
        this.getProfile = function () {
            return $http.get(API_WD_DOMAIN + "/basic/User/profile");
        };
        this.getUserMobile = function () {
            return $http.get(API_WD_DOMAIN + "/basic/User/profile");
        };
        this.system = function () {
            return $http.get(API_WD_DOMAIN + "/basic/System/all");
        }
        this.islogin = function () {
        };
        this.newRandomKey = function newRandomKey(coll, key, currentKey) {
            var randKey;
            do {
                randKey = coll[Math.floor(coll.length * Math.random())][key];
            } while (randKey == currentKey);
            return randKey;
        };
        this.dateFormat = function (date) {
            return $filter("date")(date, "yyyy-MM-dd");
        };
        this.browser = function () {
            var browser = {};
            var ua = navigator.userAgent.toLowerCase();
            browser.mozilla = /firefox/.test(ua) || ua.match(/gecko|khtml/i);
            browser.webkit = /webkit/.test(ua) || ua.match(/applewebkit/i);
            browser.opera = /opera/.test(ua) || ua.match(/repsto/i);
            browser.msie = /msie/.test(ua) || ua.match(/trident/i);
            browser.mobile = !!ua.match(/applewebkit.*mobile.*/) || !!ua.match(/applewebkit/) || ua.match(/iphone|ipod|ipad|android|symbianos|ios|windows phone|windows ce|ucweb|rv:1.2.3.4|midp/i);
            browser.ios = !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/);
            browser.android = ua.match(/android|linux/i);
            browser.iPhone = ua.match(/iphone/i);
            browser.iPad = ua.match(/ipad/i);
            browser.uc = ua.match(/ucweb|rv:1.2.3.4/i);
            browser.midp = ua.match(/midp/i);
            browser.safari = ua.match(/safari/i);
            browser.language = (navigator.browserLanguage || navigator.language).toLowerCase();
            return browser;
        };
    }
]).service("messageControl", ["$modal",
    function ($modal) {
        this.show = function ($scope, fn, size) {
            var item = this.item;
            var controller = ["$scope", "$rootScope", "$modalInstance", "item", "$state",
                function ($scope, $rootScope, $modalInstance, item, $state) {
                    $scope.messageOk = function () {
                        $modalInstance.dismiss("cancel");
                        fn.ok();
                    };
                    $scope.messageCancle = function () {
                        fn.cancel();
                        $modalInstance.dismiss("cancel");
                    };
                }
            ];
            if (typeof fn == "function" || angular.isArray(fn)) {
                controller = fn;
            }
            $modal.open({
                templateUrl: "tpl-message.html",
                resolve: {
                    item: function () {
                        return item;
                    }
                },
                size: size || "md",
                controller: controller
            });
        };
    }
]).service("cache", function () {
    var cacheArray = {};
    this.set = function (key, value) {
        cacheArray[key] = value;
    };
    this.get = function (key) {
        return cacheArray[key];
    };
}).service("security", ["$window", "$state", "$location",
    function ($window, $state, $location) {
        var _this = this;
        this.status = 0;
        this.signin = function (user) {
            if (user) $window.sessionStorage.user = JSON.stringify(user);
            $("#main").stop(true, true).fadeIn();
            $("#login-box").hide();
            if (!user.mobile && $window.sessionStorage.sysid != 1) {
                $(".businessLogin").fadeIn();
                $("#main .main-sidebar").hide();
            } else {
                $(".businessLogin").hide();
                $("#main .main-sidebar").show();
            }
            _this.status = 1;
        };
        this.signout = function () {
            $("#login-box").stop(true, true).fadeIn();
            $("#main").hide();
            _this.status = 0;
            this.clearSession();
        };
        this.clearSession = function () {
            $window.sessionStorage.clear();
        };
        this.isLogin = function () {
        };
    }
]).service('modalBasic',[function(){
    this.maxSize = function () {
        var p = {}, $modal = $(".modal-dialog");
        p.width = $modal.width();
        p.height = $modal.height();
        p.left = $modal.css('left');
        p.top = $modal.css('top');

        $modal.width('100%').height($(window).height()).css({
            left: 0,
            top: 0,
            marginTop : 0
        }).data('options', p).data('status', 'max').find('.fa-square-o').removeClass('fa-square-o').addClass('fa-minus-square-o')
    }
    this.normalSize = function () {
        var p = {}, $modal = $(".modal-dialog");
        p = $modal.data('options');
        $modal.width(p.width).height(p.height).css({
            left: p.left,
            top: p.top,
            marginTop : ''
        }).data('status', 'normal').find('.fa-minus-square-o').removeClass('fa-minus-square-o').addClass('fa-square-o')
    }
    this.toggleSize = function () {
        var $modal = $(".modal-dialog");
        if ($modal.data('status') == 'max') {
            this.normalSize();
        }
        else {
            this.maxSize();
        }
    }
}]).service("fileupload", ["Upload", "$timeout", "utils",
    function (Upload, $timeout, utils) {
        var self = this;
        this.upload = function (files, callback) {
            function upload(file, callback) {
                if (!file.uploaded) uploadS3(file, callback);
            }

            function uploadUsingUpload(file) {
                file.upload = Upload.upload({
                    url: "/api.wode-mall.com/basic/Ueditor/index",
                    method: "POST",
                    headers: {
                        "my-header": "my-header-value"
                    },
                    fields: {
                        thumbHeight: 200,
                        thumbWidth: 200,
                        category: "change"
                    },
                    file: file,
                    fileFormDataName: "file"
                });
                file.upload.then(function (response) {
                    $timeout(function () {
                        file.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ": " + response.data;
                });
                file.upload.progress(function (evt) {
                    file.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total));
                });
                file.upload.xhr(function (xhr) {
                });
            }

            function uploadUsing$http(file) {
                file.upload = Upload.http({
                    url: "/api.wode-mall.com/basic/Ueditor/index",
                    method: "POST",
                    headers: {
                        "Content-Type": file.type
                    },
                    data: file
                });
                file.upload.then(function (response) {
                    file.result = response.data;
                }, function (response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ": " + response.data;
                });
                file.upload.progress(function (evt) {
                    file.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total));
                });
            }

            function uploadS3(file, callback) {
                if (file.size / 1024e3 > 5) {
                    utils.message("上传的图片不能超过4M");
                    return;
                }
                file.upload = Upload.upload({
                    url: "/api.wode-mall.com/basic/Ueditor/index",
                    method: "POST",
                    fields: {
                        thumbHeight: 200,
                        thumbWidth: 200,
                        category: "change"
                    },
                    file: file
                });
                file.upload.then(function (response) {
                    $timeout(function () {
                        file.completed = true;
                        file.url = response.data.url;
                        file.file_path = response.data.file_path;
                        callback && callback(file, response);
                    });
                }, function (response) {
                });
                file.upload.progress(function (evt) {
                    file.progress = Math.min(100, parseInt(100 * evt.loaded / evt.total));
                });
            }

            if (files !== null) {
                if (files.length) {
                    for (var i = 0; i < files.length; i++) {
                        (function (file) {
                            upload(file, callback);
                        })(files[i]);
                    }
                } else {
                    upload(files, callback);
                }
            }
        };
        this.remove = function (files, i) {
            files && files.splice(i, 1);
        };
        this.filedToObject = function (files) {
            var f = [];
            if (files !== null) {
                files = typeof files == "string" ? files.split(",") : files;
                files.forEach(function (n) {
                    f.push({
                        name: n,
                        url: n.url,
                        file_path: n.file_path,
                        type: "image/*",
                        uploaded: true
                    });
                });
            }
            return f;
        };
        this.objectTofiled = function (files) {
            var f = [];
            if (files) {
                files.forEach(function (n) {
                    f.push(n.file_path);
                });
            }
            return f.join(",");
        };
        this.isCompleted = function () {
            for (var i = 0; i < files.length; i++) {
                if (!file[i].completed) {
                    return;
                }
            }
            self.completed = true;
        };
        this.completed = false;
    }
]);
var appVersion = "?v=" + new Date().getTime(),
    appDev = true;
var app = angular.module("app", ["ngSanitize", "utils.service", "utils.directive", "utils.filter", "utils.datepicker", "ui.router", "oc.lazyLoad", "app.router", "ngMessages", "ui.bootstrap", "ui-iconpicker", "angular-loading-bar", "ngFileUpload", "http.post"]);
app.constant("API_WD_DOMAIN", "/api.wode-mall.com");
app.constant("API_ND_DOMAIN", "");
app.constant("APPID", 1);
app.constant("PAGINATION", {
    maxSize: 10,
    currentPage: 1,
    pageSize: 10
});
app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$ocLazyLoadProvider", "$locationProvider", "routeProvider",
    function ($stateProvider, $urlRouterProvider, $httpProvider, $ocLazyLoadProvider, $locationProvider, routeProvider) {
        $ocLazyLoadProvider.config({
            jsLoader: function (files, callback, params) {
                seajs.use(files, callback);
            }, debug: false
        });
        $httpProvider.defaults.headers.content = true;
        $urlRouterProvider.otherwise("/index/index/home");
        routeProvider.init();
        $httpProvider.interceptors.push("httpInterceptor");
    }
]).factory("httpInterceptor", ["$q", "$injector", "$window",
    function ($q, $injector, $window) {
        var interceptor = {
            request: function (config) {
                config.headers = config.headers || {};
                if ($window.sessionStorage.token) {
                    var token = JSON.parse($window.sessionStorage.token);
                    config.headers.accesstoken = token.access_token;
                    config.headers.sysid = $window.sessionStorage.sysid;
                }
                return config;
            }, response: function (resp) {
                return resp;
            }, requestError: function (rejection) {
                return $q.reject(rejection);
            }, responseError: function (rejection) {
                var security = $injector.get("security");
                if (rejection.status == 401) {
                    security.signout();
                }
                ;
                return rejection;
            }
        };
        return interceptor;
    }
]).controller("controller.init", ["$scope", "$rootScope", "utils", "security", "$state", "$modal", "route", "$window",
    function ($scope, $rootScope, utils, security, $state, $modal, route, $window) {
        var user;

        try {
            user = JSON.parse($window.sessionStorage.user);
        } catch (e) {
        }
        utils.system().success(function (systems, status) {
            switch (status) {
                case 200:
                    $scope.systems = systems;
                    if (user) {
                        angular.forEach($scope.systems, function (system) {
                            if (system['sysid'] == $window.sessionStorage.sysid) {
                                $scope.systitle = system['title'];
                            }
                        });
                    }
                    break;
                default:
                    message(systems.error);
            }
        });
        $scope.signout = function () {
            utils.loginOut().success(function (res) {
                security.clearSession();
                window.location.href = "/";
            });
        };
        $rootScope.sendCodeAll = function () {
            utils.sendCodeAll().success(function (res) {
                utils.message(res.msg);
            }).error(function () {
                utils.message("发送失败，稍后重试！");
            });
        };
        var hash = window.location.hash;
        var arr = hash.substring(hash.indexOf("?") + 1, hash.length).split("&"),
            query = {};
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i].split("=");
            query[item[0]] = item[1];
        }

        function setMenus() {
            utils.getMenu().success(function (res, status) {
                switch (status) {
                    case 200:
                        $scope.menu = res;
                        break;
                    default:
                        message(res.error);
                }
            });
        }

        //完善商户信息
        $scope.improveBusinessInfo = function (binfo) {
            utils.improveBusinessInfo(binfo).success(function (res, status) {
                switch (status) {
                    case 200:
                        utils.getProfile().success(function (profile) {
                            $scope.profile = profile;
                            security.signin(profile);
                        });
                        route.dynamicRoutes();
                        setMenus();
                        break;
                    default:
                        utils.message(res.error);
                }
            });
        }
        if (!user) {
            security.signout();
        } else {
            $scope.profile = user;
            if (!user.mobile && $window.sessionStorage.sysid != 1) {
                $(".businessLogin").show();
                $("#main .main-sidebar").hide();
            } else {
                route.dynamicRoutes();
                setMenus();
            }
        }
        $scope.submitted = false;
        $scope.interacted = function (field) {
            return field.$dirty || $scope.submitted || field.isblur;
        };
        $scope.submitForm = function (isValid) {
            $scope.submitted = true;
            var message = function (msg) {
                $("#tips-info").html('<i class="fa fa-info-circle"></i> ' + msg);
            };
            if (!isValid) {
            } else {
                utils.login($scope.user).success(function (token, status) {
                    switch (status) {
                        case 200:
                            $window.sessionStorage.token = JSON.stringify(token);
                            $window.sessionStorage.sysid = $scope.sysid;
                            angular.forEach($scope.systems, function (system) {
                                if (system['sysid'] == $scope.sysid) {
                                    $scope.systitle = system['title'];
                                }
                            });
                            utils.getProfile().success(function (profile) {
                                $scope.profile = profile;
                                security.signin(profile);
                            });
                            route.dynamicRoutes();
                            setMenus();
                            break;
                        default:
                            message(token.error);
                    }
                });
            }
        };
    }
]).run(["$rootScope", "$state", "$stateParams", "$window", "$location", "$log", "$http", "cfpLoadingBar", "datepickerTemplateCache","API_WD_DOMAIN",
    function ($rootScope, $state, $stateParams, $window, $location, $log, $http, cfpLoadingBar, datepickerTemplateCache,HOST) {
        $state.in = function (node) {
            if (typeof node == "object") {
                var res = false;
                for (var i = 0; i < node.length; i++) {
                    var n = node[i];
                    n = n.replace(/-/g, "/");
                    var arr = $state.$current.name.split("-");
                    if (n == arr[1]) {
                        res = true;
                        break;
                    }
                }
                return res;
            } else {
                var arrr = $state.$current.name.split("-");
                return node == arrr[0];
            }
        };
        var $content = $(".content-wrapper"),
            $main = $(".main-sidebar");
        $('.sidebar').jScrollPane({
            autoReinitialise : true
        })
        $(window).scroll(function () {
            var minHeight = parseFloat($content.css("min-height")),
                sidebarHeight = $main.height();
            if (sidebarHeight > minHeight) {
                $content.css("min-height", sidebarHeight);
            }
        });
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        var locationChangeStartOff = $rootScope.$on("$locationChangeStart", locationChangeStart);
        var locationChangeSuccessOff = $rootScope.$on("$locationChangeSuccess", locationChangeSuccess);
        var routeChangeStartOff = $rootScope.$on("$routeChangeStart", routeChangeStart);
        var routeChangeSuccessOff = $rootScope.$on("$routeChangeSuccess", routeChangeSuccess);
        var timer;

        function locationChangeStart(event, newUrl) {
            $("#page-loading").addClass("in");
            return;
        }

        function locationChangeSuccess(event) {
            $("#page-loading").removeClass("in");
            return;
        }

        function routeChangeStart(event) {
        }

        function routeChangeSuccess(event) {
        }

        datepickerTemplateCache.reset();


        $rootScope.$on('$locationChangeSuccess',function (event,msg) {
            //console.log([event,msg]);
            $http({
                method  : 'POST',
                url     : HOST + '/basic/member_node/index',
                data    : {url:msg},
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(data) {
                console.log("权限");
                console.log(data);
                //$rootScope.q=data;
                // console.log($rootScope.q)
                //$window.sessionStorage.setItem('quanxuan', 'data');
                //console.log( $window.sessionStorage.getItem('quanxuan'))
                //debugger
                for(var i=0,j=data.all.length;i<j;i++){//所有的数据
                    for(var n=0,m=data.user.length;n<m;n++){//子集数据
                        if(data.all[i].id==data.user[n].id){
                            data.all[i]['userHave']=true;
                            break;
                        }else{
                            data.all[i]['userHave']=false;
                            continue;
                        }
                    }
                }
                console.log(data.all)

                $rootScope.userAuthority=data.all;
            });

        });


    }




]);
