if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length"in e && e.length
          , n = J.type(e);
        return "function" !== n && !J.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function i(e, t, n) {
        if (J.isFunction(t))
            return J.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return J.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ie.test(t))
                return J.filter(t, e, n);
            t = J.filter(t, e)
        }
        return J.grep(e, function(e) {
            return X.call(t, e) >= 0 !== n
        })
    }
    function r(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = ce[e] = {};
        return J.each(e.match(le) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function a() {
        Z.removeEventListener("DOMContentLoaded", a, !1),
        e.removeEventListener("load", a, !1),
        J.ready()
    }
    function s() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = J.expando + s.uid++
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(ve, "-$1").toLowerCase(),
            "string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : he.test(n) ? J.parseJSON(n) : n)
                } catch (e) {}
                pe.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function c() {
        return !0
    }
    function u() {
        return !1
    }
    function d() {
        try {
            return Z.activeElement
        } catch (e) {}
    }
    function f(e, t) {
        return J.nodeName(e, "table") && J.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function p(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function h(e) {
        var t = je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function v(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            fe.set(e[n], "globalEval", !t || fe.get(t[n], "globalEval"))
    }
    function g(e, t) {
        var n, i, r, o, a, s, l, c;
        if (1 === t.nodeType) {
            if (fe.hasData(e) && (o = fe.access(e),
            a = fe.set(t, o),
            c = o.events)) {
                delete a.handle,
                a.events = {};
                for (r in c)
                    for (n = 0,
                    i = c[r].length; n < i; n++)
                        J.event.add(t, r, c[r][n])
            }
            pe.hasData(e) && (s = pe.access(e),
            l = J.extend({}, s),
            pe.set(t, l))
        }
    }
    function m(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && J.nodeName(e, t) ? J.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && be.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function b(t, n) {
        var i, r = J(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : J.css(r[0], "display");
        return r.detach(),
        o
    }
    function x(e) {
        var t = Z
          , n = qe[e];
        return n || (n = b(e, t),
        "none" !== n && n || (De = (De || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = De[0].contentDocument,
        t.write(),
        t.close(),
        n = b(e, t),
        De.detach()),
        qe[e] = n),
        n
    }
    function w(e, t, n) {
        var i, r, o, a, s = e.style;
        return n = n || Ie(e),
        n && (a = n.getPropertyValue(t) || n[t]),
        n && ("" !== a || J.contains(e.ownerDocument, e) || (a = J.style(e, t)),
        Le.test(a) && Me.test(t) && (i = s.width,
        r = s.minWidth,
        o = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = a,
        a = n.width,
        s.width = i,
        s.minWidth = r,
        s.maxWidth = o)),
        void 0 !== a ? a + "" : a
    }
    function C(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function T(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), i = t, r = _e.length; r--; )
            if ((t = _e[r] + n)in e)
                return t;
        return i
    }
    function k(e, t, n) {
        var i = Fe.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function S(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
            "margin" === n && (a += J.css(e, n + me[o], !0, r)),
            i ? ("content" === n && (a -= J.css(e, "padding" + me[o], !0, r)),
            "margin" !== n && (a -= J.css(e, "border" + me[o] + "Width", !0, r))) : (a += J.css(e, "padding" + me[o], !0, r),
            "padding" !== n && (a += J.css(e, "border" + me[o] + "Width", !0, r)));
        return a
    }
    function E(e, t, n) {
        var i = !0
          , r = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Ie(e)
          , a = "border-box" === J.css(e, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (r = w(e, t, o),
            (r < 0 || null == r) && (r = e.style[t]),
            Le.test(r))
                return r;
            i = a && (G.boxSizingReliable() || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + S(e, t, n || (a ? "border" : "content"), i, o) + "px"
    }
    function P(e, t) {
        for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
            i = e[a],
            i.style && (o[a] = fe.get(i, "olddisplay"),
            n = i.style.display,
            t ? (o[a] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && ye(i) && (o[a] = fe.access(i, "olddisplay", x(i.nodeName)))) : (r = ye(i),
            "none" === n && r || fe.set(i, "olddisplay", r ? n : J.css(i, "display"))));
        for (a = 0; a < s; a++)
            i = e[a],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
        return e
    }
    function A(e, t, n, i, r) {
        return new A.prototype.init(e,t,n,i,r)
    }
    function O() {
        return setTimeout(function() {
            Re = void 0
        }),
        Re = J.now()
    }
    function j(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            n = me[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function N(e, t, n) {
        for (var i, r = (Ue[t] || []).concat(Ue["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e))
                return i
    }
    function D(e, t, n) {
        var i, r, o, a, s, l, c, u = this, d = {}, f = e.style, p = e.nodeType && ye(e), h = fe.get(e, "fxshow");
        n.queue || (s = J._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        u.always(function() {
            u.always(function() {
                s.unqueued--,
                J.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        c = J.css(e, "display"),
        "inline" === ("none" === c ? fe.get(e, "olddisplay") || x(e.nodeName) : c) && "none" === J.css(e, "float") && (f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        u.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i],
            Qe.exec(r)) {
                if (delete t[i],
                o = o || "toggle" === r,
                r === (p ? "hide" : "show")) {
                    if ("show" !== r || !h || void 0 === h[i])
                        continue;
                    p = !0
                }
                d[i] = h && h[i] || J.style(e, i)
            } else
                c = void 0;
        if (J.isEmptyObject(d))
            "inline" === ("none" === c ? x(e.nodeName) : c) && (f.display = c);
        else {
            h ? "hidden"in h && (p = h.hidden) : h = fe.access(e, "fxshow", {}),
            o && (h.hidden = !p),
            p ? J(e).show() : u.done(function() {
                J(e).hide()
            }),
            u.done(function() {
                var t;
                fe.remove(e, "fxshow");
                for (t in d)
                    J.style(e, t, d[t])
            });
            for (i in d)
                a = N(p ? h[i] : 0, i, u),
                i in h || (h[i] = a.start,
                p && (a.end = a.start,
                a.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function q(e, t) {
        var n, i, r, o, a;
        for (n in e)
            if (i = J.camelCase(n),
            r = t[i],
            o = e[n],
            J.isArray(o) && (r = o[1],
            o = e[n] = o[0]),
            n !== i && (e[i] = o,
            delete e[n]),
            (a = J.cssHooks[i]) && "expand"in a) {
                o = a.expand(o),
                delete e[i];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = r)
            } else
                t[i] = r
    }
    function M(e, t, n) {
        var i, r, o = 0, a = Ye.length, s = J.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = Re || O(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, a = 0, l = c.tweens.length; a < l; a++)
                c.tweens[a].run(o);
            return s.notifyWith(e, [c, o, n]),
            o < 1 && l ? n : (s.resolveWith(e, [c]),
            !1)
        }, c = s.promise({
            elem: e,
            props: J.extend({}, t),
            opts: J.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Re || O(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = J.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0
                  , i = t ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (q(u, c.opts.specialEasing); o < a; o++)
            if (i = Ye[o].call(c, e, u, c.opts))
                return i;
        return J.map(u, N, c),
        J.isFunction(c.opts.start) && c.opts.start.call(e, c),
        J.fx.timer(J.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var i, r = 0, o = t.toLowerCase().match(le) || [];
            if (J.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function I(e, t, n, i) {
        function r(s) {
            var l;
            return o[s] = !0,
            J.each(e[s] || [], function(e, s) {
                var c = s(t, n, i);
                return "string" != typeof c || a || o[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                r(c),
                !1)
            }),
            l
        }
        var o = {}
          , a = e === st;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function H(e, t) {
        var n, i, r = J.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && J.extend(!0, e, i),
        e
    }
    function F(e, t, n) {
        for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (r in s)
                if (s[r] && s[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                a || (a = r)
            }
            o = o || a
        }
        if (o)
            return o !== l[0] && l.unshift(o),
            n[o]
    }
    function W(e, t, n, i) {
        var r, o, a, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (a in e.converters)
                c[a.toLowerCase()] = e.converters[a];
        for (o = u.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = u.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (!(a = c[l + " " + o] || c["* " + o]))
                        for (r in c)
                            if (s = r.split(" "),
                            s[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                                !0 === a ? a = c[r] : !0 !== c[r] && (o = s[0],
                                u.unshift(s[1]));
                                break
                            }
                    if (!0 !== a)
                        if (a && e.throws)
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function z(e, t, n, i) {
        var r;
        if (J.isArray(t))
            J.each(t, function(t, r) {
                n || dt.test(e) ? i(e, r) : z(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== J.type(t))
            i(e, t);
        else
            for (r in t)
                z(e + "[" + r + "]", t[r], n, i)
    }
    function $(e) {
        return J.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var _ = []
      , R = _.slice
      , V = _.concat
      , Q = _.push
      , X = _.indexOf
      , B = {}
      , Y = B.toString
      , U = B.hasOwnProperty
      , G = {}
      , Z = e.document
      , J = function(e, t) {
        return new J.fn.init(e,t)
    }
      , K = function(e, t) {
        return t.toUpperCase()
    };
    J.fn = J.prototype = {
        jquery: "2.1.4",
        constructor: J,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : R.call(this)
        },
        pushStack: function(e) {
            var t = J.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return J.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(J.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: Q,
        sort: _.sort,
        splice: _.splice
    },
    J.extend = J.fn.extend = function() {
        var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof a && (c = a,
        a = arguments[s] || {},
        s++),
        "object" == typeof a || J.isFunction(a) || (a = {}),
        s === l && (a = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    n = a[t],
                    i = e[t],
                    a !== i && (c && i && (J.isPlainObject(i) || (r = J.isArray(i))) ? (r ? (r = !1,
                    o = n && J.isArray(n) ? n : []) : o = n && J.isPlainObject(n) ? n : {},
                    a[t] = J.extend(c, o, i)) : void 0 !== i && (a[t] = i));
        return a
    }
    ,
    J.extend({
        expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === J.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !J.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === J.type(e) && !e.nodeType && !J.isWindow(e) && !(e.constructor && !U.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? B[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = J.trim(e)) && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
            t.text = e,
            Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, K)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r = 0
              , o = e.length
              , a = n(e);
            if (i) {
                if (a)
                    for (; r < o && !1 !== t.apply(e[r], i); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === t.apply(e[r], i))
                            break
            } else if (a)
                for (; r < o && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? J.merge(i, "string" == typeof e ? [e] : e) : Q.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : X.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                e[r++] = t[i];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                !t(e[r], r) !== a && i.push(e[r]);
            return i
        },
        map: function(e, t, i) {
            var r, o = 0, a = e.length, s = n(e), l = [];
            if (s)
                for (; o < a; o++)
                    null != (r = t(e[o], o, i)) && l.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, i)) && l.push(r);
            return V.apply([], l)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            J.isFunction(e))
                return i = R.call(arguments, 2),
                r = function() {
                    return e.apply(t || this, i.concat(R.call(arguments)))
                }
                ,
                r.guid = e.guid = e.guid || J.guid++,
                r
        },
        now: Date.now,
        support: G
    }),
    J.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        B["[object " + t + "]"] = t.toLowerCase()
    });
    var ee = function(e) {
        function t(e, t, n, i) {
            var r, o, a, s, c, d, f, p, h, v;
            if ((t ? t.ownerDocument || t : F) !== j && O(t),
            t = t || j,
            n = n || [],
            s = t.nodeType,
            "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s)
                return n;
            if (!i && D) {
                if (11 !== s && (r = ge.exec(e)))
                    if (a = r[1]) {
                        if (9 === s) {
                            if (!(o = t.getElementById(a)) || !o.parentNode)
                                return n;
                            if (o.id === a)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && I(t, o) && o.id === a)
                            return n.push(o),
                            n
                    } else {
                        if (r[2])
                            return G.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = r[3]) && b.getElementsByClassName)
                            return G.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (b.qsa && (!q || !q.test(e))) {
                    if (p = f = H,
                    h = t,
                    v = 1 !== s && e,
                    1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (d = T(e),
                        (f = t.getAttribute("id")) ? p = f.replace(ye, "\\$&") : t.setAttribute("id", p),
                        p = "[id='" + p + "'] ",
                        c = d.length; c--; )
                            d[c] = p + u(d[c]);
                        h = me.test(e) && l(t.parentNode) || t,
                        v = d.join(",")
                    }
                    if (v)
                        try {
                            return G.apply(n, h.querySelectorAll(v)),
                            n
                        } catch (e) {} finally {
                            f || t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(ae, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[H] = !0,
            e
        }
        function r(e) {
            var t = j.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                x.attrHandle[n[i]] = t
        }
        function a(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return i(function(t) {
                return t = +t,
                i(function(n, i) {
                    for (var r, o = e([], n.length, t), a = o.length; a--; )
                        n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function c() {}
        function u(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function d(e, t, n) {
            var i = t.dir
              , r = n && "parentNode" === i
              , o = z++;
            return t.first ? function(t, n, o) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, o)
            }
            : function(t, n, a) {
                var s, l, c = [W, o];
                if (a) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, a))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r) {
                            if (l = t[H] || (t[H] = {}),
                            (s = l[i]) && s[0] === W && s[1] === o)
                                return c[2] = s[2];
                            if (l[i] = c,
                            c[2] = e(t, n, a))
                                return !0
                        }
            }
        }
        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
            : e[0]
        }
        function p(e, n, i) {
            for (var r = 0, o = n.length; r < o; r++)
                t(e, n[r], i);
            return i
        }
        function h(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++)
                (o = e[s]) && (n && !n(o, i, r) || (a.push(o),
                c && t.push(s)));
            return a
        }
        function v(e, t, n, r, o, a) {
            return r && !r[H] && (r = v(r)),
            o && !o[H] && (o = v(o, a)),
            i(function(i, a, s, l) {
                var c, u, d, f = [], v = [], g = a.length, m = i || p(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? m : h(m, f, e, s, l), b = n ? o || (i ? e : g || r) ? [] : a : y;
                if (n && n(y, b, s, l),
                r)
                    for (c = h(b, v),
                    r(c, [], s, l),
                    u = c.length; u--; )
                        (d = c[u]) && (b[v[u]] = !(y[v[u]] = d));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (c = [],
                            u = b.length; u--; )
                                (d = b[u]) && c.push(y[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--; )
                            (d = b[u]) && (c = o ? J(i, d) : f[u]) > -1 && (i[c] = !(a[c] = d))
                    }
                } else
                    b = h(b === a ? b.splice(g, b.length) : b),
                    o ? o(null, a, b, l) : G.apply(a, b)
            })
        }
        function g(e) {
            for (var t, n, i, r = e.length, o = x.relative[e[0].type], a = o || x.relative[" "], s = o ? 1 : 0, l = d(function(e) {
                return e === t
            }, a, !0), c = d(function(e) {
                return J(t, e) > -1
            }, a, !0), p = [function(e, n, i) {
                var r = !o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null,
                r
            }
            ]; s < r; s++)
                if (n = x.relative[e[s].type])
                    p = [d(f(p), n)];
                else {
                    if (n = x.filter[e[s].type].apply(null, e[s].matches),
                    n[H]) {
                        for (i = ++s; i < r && !x.relative[e[i].type]; i++)
                            ;
                        return v(s > 1 && f(p), s > 1 && u(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && u(e))
                    }
                    p.push(n)
                }
            return f(p)
        }
        function m(e, n) {
            var r = n.length > 0
              , o = e.length > 0
              , a = function(i, a, s, l, c) {
                var u, d, f, p = 0, v = "0", g = i && [], m = [], y = E, b = i || o && x.find.TAG("*", c), w = W += null == y ? 1 : Math.random() || .1, C = b.length;
                for (c && (E = a !== j && a); v !== C && null != (u = b[v]); v++) {
                    if (o && u) {
                        for (d = 0; f = e[d++]; )
                            if (f(u, a, s)) {
                                l.push(u);
                                break
                            }
                        c && (W = w)
                    }
                    r && ((u = !f && u) && p--,
                    i && g.push(u))
                }
                if (p += v,
                r && v !== p) {
                    for (d = 0; f = n[d++]; )
                        f(g, m, a, s);
                    if (i) {
                        if (p > 0)
                            for (; v--; )
                                g[v] || m[v] || (m[v] = Y.call(l));
                        m = h(m)
                    }
                    G.apply(l, m),
                    c && !i && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return c && (W = w,
                E = y),
                g
            };
            return r ? i(a) : a
        }
        var y, b, x, w, C, T, k, S, E, P, A, O, j, N, D, q, M, L, I, H = "sizzle" + 1 * new Date, F = e.document, W = 0, z = 0, $ = n(), _ = n(), R = n(), V = function(e, t) {
            return e === t && (A = !0),
            0
        }, Q = 1 << 31, X = {}.hasOwnProperty, B = [], Y = B.pop, U = B.push, G = B.push, Z = B.slice, J = function(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = te.replace("w", "w#"), ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", oe = new RegExp(ee + "+","g"), ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), se = new RegExp("^" + ee + "*," + ee + "*"), le = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ce = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ue = new RegExp(re), de = new RegExp("^" + ne + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, me = /[+~]/, ye = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), xe = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, we = function() {
            O()
        };
        try {
            G.apply(B = Z.call(F.childNodes), F.childNodes),
            B[F.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: B.length ? function(e, t) {
                    U.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        b = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        O = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : F;
            return i !== j && 9 === i.nodeType && i.documentElement ? (j = i,
            N = i.documentElement,
            n = i.defaultView,
            n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)),
            D = !C(i),
            b.attributes = r(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            b.getElementsByTagName = r(function(e) {
                return e.appendChild(i.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            b.getElementsByClassName = ve.test(i.getElementsByClassName),
            b.getById = r(function(e) {
                return N.appendChild(e).id = H,
                !i.getElementsByName || !i.getElementsByName(H).length
            }),
            b.getById ? (x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && D) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            x.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete x.find.ID,
            x.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            x.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }
            ,
            x.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (D)
                    return t.getElementsByClassName(e)
            }
            ,
            M = [],
            q = [],
            (b.qsa = ve.test(i.querySelectorAll)) && (r(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + K + ")"),
                e.querySelectorAll("[id~=" + H + "-]").length || q.push("~="),
                e.querySelectorAll(":checked").length || q.push(":checked"),
                e.querySelectorAll("a#" + H + "+*").length || q.push(".#.+[+~]")
            }),
            r(function(e) {
                var t = i.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (b.matchesSelector = ve.test(L = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(e) {
                b.disconnectedMatch = L.call(e, "div"),
                L.call(e, "[s!='']:x"),
                M.push("!=", re)
            }),
            q = q.length && new RegExp(q.join("|")),
            M = M.length && new RegExp(M.join("|")),
            t = ve.test(N.compareDocumentPosition),
            I = t || ve.test(N.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            V = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && I(F, e) ? -1 : t === i || t.ownerDocument === F && I(F, t) ? 1 : P ? J(P, e) - J(P, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, r = 0, o = e.parentNode, s = t.parentNode, l = [e], c = [t];
                if (!o || !s)
                    return e === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : P ? J(P, e) - J(P, t) : 0;
                if (o === s)
                    return a(e, t);
                for (n = e; n = n.parentNode; )
                    l.unshift(n);
                for (n = t; n = n.parentNode; )
                    c.unshift(n);
                for (; l[r] === c[r]; )
                    r++;
                return r ? a(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
            }
            ,
            i) : j
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && O(e),
            n = n.replace(ce, "='$1']"),
            b.matchesSelector && D && (!M || !M.test(n)) && (!q || !q.test(n)))
                try {
                    var i = L.call(e, n);
                    if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return i
                } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && O(e),
            I(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && O(e);
            var n = x.attrHandle[t.toLowerCase()]
              , i = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
            return void 0 !== i ? i : b.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (A = !b.detectDuplicates,
            P = !b.sortStable && e.slice(0),
            e.sort(V),
            A) {
                for (; t = e[r++]; )
                    t === e[r] && (i = n.push(r));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return P = null,
            e
        }
        ,
        w = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (3 === r || 4 === r)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += w(t);
            return n
        }
        ,
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: fe,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(be, xe),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(be, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, f, p, h, v = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; v; ) {
                                    for (d = t; d = d[v]; )
                                        if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                            return !1;
                                    h = v = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? g.firstChild : g.lastChild],
                            a && y) {
                                for (u = g[H] || (g[H] = {}),
                                c = u[e] || [],
                                p = c[0] === W && c[1],
                                f = c[0] === W && c[2],
                                d = p && g.childNodes[p]; d = ++p && d && d[v] || (f = p = 0) || h.pop(); )
                                    if (1 === d.nodeType && ++f && d === t) {
                                        u[e] = [W, p, f];
                                        break
                                    }
                            } else if (y && (c = (t[H] || (t[H] = {}))[e]) && c[0] === W)
                                f = c[1];
                            else
                                for (; (d = ++p && d && d[v] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++f || (y && ((d[H] || (d[H] = {}))[e] = [W, f]),
                                d !== t)); )
                                    ;
                            return (f -= r) === i || f % i == 0 && f / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (r = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), a = r.length; a--; )
                            i = J(e, r[a]),
                            e[i] = !(t[i] = r[a])
                    }) : function(e) {
                        return o(e, 0, r)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = []
                      , n = []
                      , r = k(e.replace(ae, "$1"));
                    return r[H] ? i(function(e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function(e) {
                    return e = e.replace(be, xe),
                    function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(be, xe).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; --i >= 0; )
                        e.push(i);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            x.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
        return c.prototype = x.filters = x.pseudos,
        x.setFilters = new c,
        T = t.tokenize = function(e, n) {
            var i, r, o, a, s, l, c, u = _[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (s = e,
            l = [],
            c = x.preFilter; s; ) {
                i && !(r = se.exec(s)) || (r && (s = s.slice(r[0].length) || s),
                l.push(o = [])),
                i = !1,
                (r = le.exec(s)) && (i = r.shift(),
                o.push({
                    value: i,
                    type: r[0].replace(ae, " ")
                }),
                s = s.slice(i.length));
                for (a in x.filter)
                    !(r = fe[a].exec(s)) || c[a] && !(r = c[a](r)) || (i = r.shift(),
                    o.push({
                        value: i,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return n ? s.length : s ? t.error(e) : _(e, l).slice(0)
        }
        ,
        k = t.compile = function(e, t) {
            var n, i = [], r = [], o = R[e + " "];
            if (!o) {
                for (t || (t = T(e)),
                n = t.length; n--; )
                    o = g(t[n]),
                    o[H] ? i.push(o) : r.push(o);
                o = R(e, m(r, i)),
                o.selector = e
            }
            return o
        }
        ,
        S = t.select = function(e, t, n, i) {
            var r, o, a, s, c, d = "function" == typeof e && e, f = !i && T(e = d.selector || e);
            if (n = n || [],
            1 === f.length) {
                if (o = f[0] = f[0].slice(0),
                o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && D && x.relative[o[1].type]) {
                    if (!(t = (x.find.ID(a.matches[0].replace(be, xe), t) || [])[0]))
                        return n;
                    d && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                !x.relative[s = a.type]); )
                    if ((c = x.find[s]) && (i = c(a.matches[0].replace(be, xe), me.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(r, 1),
                        !(e = i.length && u(o)))
                            return G.apply(n, i),
                            n;
                        break
                    }
            }
            return (d || k(e, f))(i, t, !D, n, me.test(e) && l(t.parentNode) || t),
            n
        }
        ,
        b.sortStable = H.split("").sort(V).join("") === H,
        b.detectDuplicates = !!A,
        O(),
        b.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("div"))
        }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        b.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(K, function(e, t, n) {
            var i;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    J.find = ee,
    J.expr = ee.selectors,
    J.expr[":"] = J.expr.pseudos,
    J.unique = ee.uniqueSort,
    J.text = ee.getText,
    J.isXMLDoc = ee.isXML,
    J.contains = ee.contains;
    var te = J.expr.match.needsContext
      , ne = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , ie = /^.[^:#\[\.,]*$/;
    J.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? J.find.matchesSelector(i, e) ? [i] : [] : J.find.matches(e, J.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    J.fn.extend({
        find: function(e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e)
                return this.pushStack(J(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (J.contains(r[t], this))
                            return !0
                }));
            for (t = 0; t < n; t++)
                J.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? J.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + e : e,
            i
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0))
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && te.test(e) ? J(e) : e || [], !1).length
        }
    });
    var re, oe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (J.fn.init = function(e, t) {
        var n, i;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : oe.exec(e)) || !n[1] && t)
                return !t || t.jquery ? (t || re).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof J ? t[0] : t,
                J.merge(this, J.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                ne.test(n[1]) && J.isPlainObject(t))
                    for (n in t)
                        J.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return i = Z.getElementById(n[2]),
            i && i.parentNode && (this.length = 1,
            this[0] = i),
            this.context = Z,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : J.isFunction(e) ? void 0 !== re.ready ? re.ready(e) : e(J) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        J.makeArray(e, this))
    }
    ).prototype = J.fn,
    re = J(Z);
    var ae = /^(?:parents|prev(?:Until|All))/
      , se = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    J.extend({
        dir: function(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && J(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    J.fn.extend({
        has: function(e) {
            var t = J(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (J.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], a = te.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && J.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? J.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? X.call(J(e), this[0]) : X.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(J.unique(J.merge(this.get(), J(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    J.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return J.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return J.dir(e, "parentNode", n)
        },
        next: function(e) {
            return r(e, "nextSibling")
        },
        prev: function(e) {
            return r(e, "previousSibling")
        },
        nextAll: function(e) {
            return J.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return J.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return J.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return J.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return J.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return J.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || J.merge([], e.childNodes)
        }
    }, function(e, t) {
        J.fn[e] = function(n, i) {
            var r = J.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (r = J.filter(i, r)),
            this.length > 1 && (se[e] || J.unique(r),
            ae.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var le = /\S+/g
      , ce = {};
    J.Callbacks = function(e) {
        e = "string" == typeof e ? ce[e] || o(e) : J.extend({}, e);
        var t, n, i, r, a, s, l = [], c = !e.once && [], u = function(o) {
            for (t = e.memory && o,
            n = !0,
            s = r || 0,
            r = 0,
            a = l.length,
            i = !0; l && s < a; s++)
                if (!1 === l[s].apply(o[0], o[1]) && e.stopOnFalse) {
                    t = !1;
                    break
                }
            i = !1,
            l && (c ? c.length && u(c.shift()) : t ? l = [] : d.disable())
        }, d = {
            add: function() {
                if (l) {
                    var n = l.length;
                    !function t(n) {
                        J.each(n, function(n, i) {
                            var r = J.type(i);
                            "function" === r ? e.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r && t(i)
                        })
                    }(arguments),
                    i ? a = l.length : t && (r = n,
                    u(t))
                }
                return this
            },
            remove: function() {
                return l && J.each(arguments, function(e, t) {
                    for (var n; (n = J.inArray(t, l, n)) > -1; )
                        l.splice(n, 1),
                        i && (n <= a && a--,
                        n <= s && s--)
                }),
                this
            },
            has: function(e) {
                return e ? J.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                a = 0,
                this
            },
            disable: function() {
                return l = c = t = void 0,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = void 0,
                t || d.disable(),
                this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return !l || n && !c || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                i ? c.push(t) : u(t)),
                this
            },
            fire: function() {
                return d.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return d
    }
    ,
    J.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", J.Callbacks("once memory"), "resolved"], ["reject", "fail", J.Callbacks("once memory"), "rejected"], ["notify", "progress", J.Callbacks("memory")]]
              , n = "pending"
              , i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return J.Deferred(function(n) {
                        J.each(t, function(t, o) {
                            var a = J.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? J.extend(e, i) : i
                }
            }
              , r = {};
            return i.pipe = i.then,
            J.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                i[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments),
                    this
                }
                ,
                r[o[0] + "With"] = a.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0, o = R.call(arguments), a = o.length, s = 1 !== a || e && J.isFunction(e.promise) ? a : 0, l = 1 === s ? e : J.Deferred(), c = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? R.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                }
            };
            if (a > 1)
                for (t = new Array(a),
                n = new Array(a),
                i = new Array(a); r < a; r++)
                    o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --s;
            return s || l.resolveWith(i, o),
            l.promise()
        }
    });
    var ue;
    J.fn.ready = function(e) {
        return J.ready.promise().done(e),
        this
    }
    ,
    J.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? J.readyWait++ : J.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --J.readyWait : J.isReady) || (J.isReady = !0,
            !0 !== e && --J.readyWait > 0 || (ue.resolveWith(Z, [J]),
            J.fn.triggerHandler && (J(Z).triggerHandler("ready"),
            J(Z).off("ready"))))
        }
    }),
    J.ready.promise = function(t) {
        return ue || (ue = J.Deferred(),
        "complete" === Z.readyState ? setTimeout(J.ready) : (Z.addEventListener("DOMContentLoaded", a, !1),
        e.addEventListener("load", a, !1))),
        ue.promise(t)
    }
    ,
    J.ready.promise();
    var de = J.access = function(e, t, n, i, r, o, a) {
        var s = 0
          , l = e.length
          , c = null == n;
        if ("object" === J.type(n)) {
            r = !0;
            for (s in n)
                J.access(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== i && (r = !0,
        J.isFunction(i) || (a = !0),
        c && (a ? (t.call(e, i),
        t = null) : (c = t,
        t = function(e, t, n) {
            return c.call(J(e), n)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
    }
    ;
    J.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ,
    s.uid = 1,
    s.accepts = J.acceptData,
    s.prototype = {
        key: function(e) {
            if (!s.accepts(e))
                return 0;
            var t = {}
              , n = e[this.expando];
            if (!n) {
                n = s.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (i) {
                    t[this.expando] = n,
                    J.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var i, r = this.key(e), o = this.cache[r];
            if ("string" == typeof t)
                o[t] = n;
            else if (J.isEmptyObject(o))
                J.extend(this.cache[r], t);
            else
                for (i in t)
                    o[i] = t[i];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t),
            void 0 !== i ? i : this.get(e, J.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i, r, o = this.key(e), a = this.cache[o];
            if (void 0 === t)
                this.cache[o] = {};
            else {
                J.isArray(t) ? i = t.concat(t.map(J.camelCase)) : (r = J.camelCase(t),
                t in a ? i = [t, r] : (i = r,
                i = i in a ? [i] : i.match(le) || [])),
                n = i.length;
                for (; n--; )
                    delete a[i[n]]
            }
        },
        hasData: function(e) {
            return !J.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var fe = new s
      , pe = new s
      , he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , ve = /([A-Z])/g;
    J.extend({
        hasData: function(e) {
            return pe.hasData(e) || fe.hasData(e)
        },
        data: function(e, t, n) {
            return pe.access(e, t, n)
        },
        removeData: function(e, t) {
            pe.remove(e, t)
        },
        _data: function(e, t, n) {
            return fe.access(e, t, n)
        },
        _removeData: function(e, t) {
            fe.remove(e, t)
        }
    }),
    J.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = pe.get(o),
                1 === o.nodeType && !fe.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--; )
                        a[n] && (i = a[n].name,
                        0 === i.indexOf("data-") && (i = J.camelCase(i.slice(5)),
                        l(o, i, r[i])));
                    fe.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                pe.set(this, e)
            }) : de(this, function(t) {
                var n, i = J.camelCase(e);
                if (o && void 0 === t) {
                    if (void 0 !== (n = pe.get(o, e)))
                        return n;
                    if (void 0 !== (n = pe.get(o, i)))
                        return n;
                    if (void 0 !== (n = l(o, i, void 0)))
                        return n
                } else
                    this.each(function() {
                        var n = pe.get(this, i);
                        pe.set(this, i, t),
                        -1 !== e.indexOf("-") && void 0 !== n && pe.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                pe.remove(this, e)
            })
        }
    }),
    J.extend({
        queue: function(e, t, n) {
            var i;
            if (e)
                return t = (t || "fx") + "queue",
                i = fe.get(e, t),
                n && (!i || J.isArray(n) ? i = fe.access(e, t, J.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = J.queue(e, t)
              , i = n.length
              , r = n.shift()
              , o = J._queueHooks(e, t)
              , a = function() {
                J.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            r.call(e, a, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return fe.get(e, n) || fe.access(e, n, {
                empty: J.Callbacks("once memory").add(function() {
                    fe.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    J.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? J.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = J.queue(this, e, t);
                J._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && J.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                J.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1, r = J.Deferred(), o = this, a = this.length, s = function() {
                --i || r.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; a--; )
                (n = fe.get(o[a], e + "queueHooks")) && n.empty && (i++,
                n.empty.add(s));
            return s(),
            r.promise(t)
        }
    });
    var ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , me = ["Top", "Right", "Bottom", "Left"]
      , ye = function(e, t) {
        return e = t || e,
        "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
    }
      , be = /^(?:checkbox|radio)$/i;
    !function() {
        var e = Z.createDocumentFragment()
          , t = e.appendChild(Z.createElement("div"))
          , n = Z.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    G.focusinBubbles = "onfocusin"in e;
    var xe = /^key/
      , we = /^(?:mouse|pointer|contextmenu)|click/
      , Ce = /^(?:focusinfocus|focusoutblur)$/
      , Te = /^([^.]*)(?:\.(.+)|)$/;
    J.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, p, h, v, g = fe.get(e);
            if (g)
                for (n.handler && (o = n,
                n = o.handler,
                r = o.selector),
                n.guid || (n.guid = J.guid++),
                (l = g.events) || (l = g.events = {}),
                (a = g.handle) || (a = g.handle = function(t) {
                    return void 0 !== J && J.event.triggered !== t.type ? J.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(le) || [""],
                c = t.length; c--; )
                    s = Te.exec(t[c]) || [],
                    p = v = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p && (d = J.event.special[p] || {},
                    p = (r ? d.delegateType : d.bindType) || p,
                    d = J.event.special[p] || {},
                    u = J.extend({
                        type: p,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && J.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o),
                    (f = l[p]) || (f = l[p] = [],
                    f.delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, h, a) || e.addEventListener && e.addEventListener(p, a, !1)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    J.event.global[p] = !0)
        },
        remove: function(e, t, n, i, r) {
            var o, a, s, l, c, u, d, f, p, h, v, g = fe.hasData(e) && fe.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(le) || [""],
                c = t.length; c--; )
                    if (s = Te.exec(t[c]) || [],
                    p = v = s[1],
                    h = (s[2] || "").split(".").sort(),
                    p) {
                        for (d = J.event.special[p] || {},
                        p = (i ? d.delegateType : d.bindType) || p,
                        f = l[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = f.length; o--; )
                            u = f[o],
                            !r && v !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || J.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            J.event.remove(e, p + t[c], n, i, !0);
                J.isEmptyObject(l) && (delete g.handle,
                fe.remove(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var o, a, s, l, c, u, d, f = [i || Z], p = U.call(t, "type") ? t.type : t, h = U.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = s = i = i || Z,
            3 !== i.nodeType && 8 !== i.nodeType && !Ce.test(p + J.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."),
            p = h.shift(),
            h.sort()),
            c = p.indexOf(":") < 0 && "on" + p,
            t = t[J.expando] ? t : new J.Event(p,"object" == typeof t && t),
            t.isTrigger = r ? 2 : 3,
            t.namespace = h.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = i),
            n = null == n ? [t] : J.makeArray(n, [t]),
            d = J.event.special[p] || {},
            r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!r && !d.noBubble && !J.isWindow(i)) {
                    for (l = d.delegateType || p,
                    Ce.test(l + p) || (a = a.parentNode); a; a = a.parentNode)
                        f.push(a),
                        s = a;
                    s === (i.ownerDocument || Z) && f.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0; (a = f[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? l : d.bindType || p,
                    u = (fe.get(a, "events") || {})[t.type] && fe.get(a, "handle"),
                    u && u.apply(a, n),
                    (u = c && a[c]) && u.apply && J.acceptData(a) && (t.result = u.apply(a, n),
                    !1 === t.result && t.preventDefault());
                return t.type = p,
                r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !J.acceptData(i) || c && J.isFunction(i[p]) && !J.isWindow(i) && (s = i[c],
                s && (i[c] = null),
                J.event.triggered = p,
                i[p](),
                J.event.triggered = void 0,
                s && (i[c] = s)),
                t.result
            }
        },
        dispatch: function(e) {
            e = J.event.fix(e);
            var t, n, i, r, o, a = [], s = R.call(arguments), l = (fe.get(this, "events") || {})[e.type] || [], c = J.event.special[e.type] || {};
            if (s[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                for (a = J.event.handlers.call(this, e, l),
                t = 0; (r = a[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                    n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        void 0 !== (i = ((J.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (i = [],
                        n = 0; n < s; n++)
                            o = t[n],
                            r = o.selector + " ",
                            void 0 === i[r] && (i[r] = o.needsContext ? J(r, this).index(l) >= 0 : J.find(r, this, null, [l]).length),
                            i[r] && i.push(o);
                        i.length && a.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }),
            a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
                i = n.documentElement,
                r = n.body,
                e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[J.expando])
                return e;
            var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
            for (a || (this.fixHooks[r] = a = we.test(r) ? this.mouseHooks : xe.test(r) ? this.keyHooks : {}),
            i = a.props ? this.props.concat(a.props) : this.props,
            e = new J.Event(o),
            t = i.length; t--; )
                n = i[t],
                e[n] = o[n];
            return e.target || (e.target = Z),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            a.filter ? a.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== d() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === d() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && J.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return J.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = J.extend(new J.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    J.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    ,
    J.Event = function(e, t) {
        if (!(this instanceof J.Event))
            return new J.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? c : u) : this.type = e,
        t && J.extend(this, t),
        this.timeStamp = e && e.timeStamp || J.now(),
        this[J.expando] = !0
    }
    ,
    J.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = c,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = c,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = c,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        J.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this, r = e.relatedTarget, o = e.handleObj;
                return r && (r === i || J.contains(i, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    G.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            J.event.simulate(t, e.target, J.event.fix(e), !0)
        };
        J.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = fe.access(i, t);
                r || i.addEventListener(e, n, !0),
                fe.access(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = fe.access(i, t) - 1;
                r ? fe.access(i, t, r) : (i.removeEventListener(e, n, !0),
                fe.remove(i, t))
            }
        }
    }),
    J.fn.extend({
        on: function(e, t, n, i, r) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (a in e)
                    this.on(a, t, n, e[a], r);
                return this
            }
            if (null == n && null == i ? (i = t,
            n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
            n = void 0) : (i = n,
            n = t,
            t = void 0)),
            !1 === i)
                i = u;
            else if (!i)
                return this;
            return 1 === r && (o = i,
            i = function(e) {
                return J().off(e),
                o.apply(this, arguments)
            }
            ,
            i.guid = o.guid || (o.guid = J.guid++)),
            this.each(function() {
                J.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                J(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = u),
            this.each(function() {
                J.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                J.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return J.event.trigger(e, t, n, !0)
        }
    });
    var ke = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Se = /<([\w:]+)/
      , Ee = /<|&#?\w+;/
      , Pe = /<(?:script|style|link)/i
      , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Oe = /^$|\/(?:java|ecma)script/i
      , je = /^true\/(.*)/
      , Ne = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ne.optgroup = Ne.option,
    Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead,
    Ne.th = Ne.td,
    J.extend({
        clone: function(e, t, n) {
            var i, r, o, a, s = e.cloneNode(!0), l = J.contains(e.ownerDocument, e);
            if (!(G.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e)))
                for (a = m(s),
                o = m(e),
                i = 0,
                r = o.length; i < r; i++)
                    y(o[i], a[i]);
            if (t)
                if (n)
                    for (o = o || m(e),
                    a = a || m(s),
                    i = 0,
                    r = o.length; i < r; i++)
                        g(o[i], a[i]);
                else
                    g(e, s);
            return a = m(s, "script"),
            a.length > 0 && v(a, !l && m(e, "script")),
            s
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, a, s, l, c, u = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
                if ((r = e[f]) || 0 === r)
                    if ("object" === J.type(r))
                        J.merge(d, r.nodeType ? [r] : r);
                    else if (Ee.test(r)) {
                        for (o = o || u.appendChild(t.createElement("div")),
                        a = (Se.exec(r) || ["", ""])[1].toLowerCase(),
                        s = Ne[a] || Ne._default,
                        o.innerHTML = s[1] + r.replace(ke, "<$1></$2>") + s[2],
                        c = s[0]; c--; )
                            o = o.lastChild;
                        J.merge(d, o.childNodes),
                        o = u.firstChild,
                        o.textContent = ""
                    } else
                        d.push(t.createTextNode(r));
            for (u.textContent = "",
            f = 0; r = d[f++]; )
                if ((!i || -1 === J.inArray(r, i)) && (l = J.contains(r.ownerDocument, r),
                o = m(u.appendChild(r), "script"),
                l && v(o),
                n))
                    for (c = 0; r = o[c++]; )
                        Oe.test(r.type || "") && n.push(r);
            return u
        },
        cleanData: function(e) {
            for (var t, n, i, r, o = J.event.special, a = 0; void 0 !== (n = e[a]); a++) {
                if (J.acceptData(n) && (r = n[fe.expando]) && (t = fe.cache[r])) {
                    if (t.events)
                        for (i in t.events)
                            o[i] ? J.event.remove(n, i) : J.removeEvent(n, i, t.handle);
                    fe.cache[r] && delete fe.cache[r]
                }
                delete pe.cache[n[pe.expando]]
            }
        }
    }),
    J.fn.extend({
        text: function(e) {
            return de(this, function(e) {
                return void 0 === e ? J.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    f(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = f(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? J.filter(e, this) : this, r = 0; null != (n = i[r]); r++)
                t || 1 !== n.nodeType || J.cleanData(m(n)),
                n.parentNode && (t && J.contains(n.ownerDocument, n) && v(m(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (J.cleanData(m(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return J.clone(this, e, t)
            })
        },
        html: function(e) {
            return de(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !Ne[(Se.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ke, "<$1></$2>");
                    try {
                        for (; n < i; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (J.cleanData(m(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                J.cleanData(m(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = V.apply([], e);
            var n, i, r, o, a, s, l = 0, c = this.length, u = this, d = c - 1, f = e[0], v = J.isFunction(f);
            if (v || c > 1 && "string" == typeof f && !G.checkClone && Ae.test(f))
                return this.each(function(n) {
                    var i = u.eq(n);
                    v && (e[0] = f.call(this, n, i.html())),
                    i.domManip(e, t)
                });
            if (c && (n = J.buildFragment(e, this[0].ownerDocument, !1, this),
            i = n.firstChild,
            1 === n.childNodes.length && (n = i),
            i)) {
                for (r = J.map(m(n, "script"), p),
                o = r.length; l < c; l++)
                    a = n,
                    l !== d && (a = J.clone(a, !0, !0),
                    o && J.merge(r, m(a, "script"))),
                    t.call(this[l], a, l);
                if (o)
                    for (s = r[r.length - 1].ownerDocument,
                    J.map(r, h),
                    l = 0; l < o; l++)
                        a = r[l],
                        Oe.test(a.type || "") && !fe.access(a, "globalEval") && J.contains(s, a) && (a.src ? J._evalUrl && J._evalUrl(a.src) : J.globalEval(a.textContent.replace(/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "")))
            }
            return this
        }
    }),
    J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        J.fn[e] = function(e) {
            for (var n, i = [], r = J(e), o = r.length - 1, a = 0; a <= o; a++)
                n = a === o ? this : this.clone(!0),
                J(r[a])[t](n),
                Q.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var De, qe = {}, Me = /^margin/, Le = new RegExp("^(" + ge + ")(?!px)[a-z%]+$","i"), Ie = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function() {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            a.innerHTML = "",
            r.appendChild(o);
            var t = e.getComputedStyle(a, null);
            n = "1%" !== t.top,
            i = "4px" === t.width,
            r.removeChild(o)
        }
        var n, i, r = Z.documentElement, o = Z.createElement("div"), a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box",
        a.cloneNode(!0).style.backgroundClip = "",
        G.clearCloneStyle = "content-box" === a.style.backgroundClip,
        o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        o.appendChild(a),
        e.getComputedStyle && J.extend(G, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == i && t(),
                i
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(Z.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                r.appendChild(o),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                r.removeChild(o),
                a.removeChild(n),
                t
            }
        }))
    }(),
    J.swap = function(e, t, n, i) {
        var r, o, a = {};
        for (o in t)
            a[o] = e.style[o],
            e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t)
            e.style[o] = a[o];
        return r
    }
    ;
    var He = /^(none|table(?!-c[ea]).+)/
      , Fe = new RegExp("^(" + ge + ")(.*)$","i")
      , We = new RegExp("^([+-])=(" + ge + ")","i")
      , ze = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , $e = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , _e = ["Webkit", "O", "Moz", "ms"];
    J.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, a, s = J.camelCase(t), l = e.style;
                if (t = J.cssProps[s] || (J.cssProps[s] = T(l, s)),
                a = J.cssHooks[t] || J.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t];
                o = typeof n,
                "string" === o && (r = We.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(J.css(e, t)),
                o = "number"),
                null != n && n === n && ("number" !== o || J.cssNumber[s] || (n += "px"),
                G.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, i)) || (l[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, o, a, s = J.camelCase(t);
            return t = J.cssProps[s] || (J.cssProps[s] = T(e.style, s)),
            a = J.cssHooks[t] || J.cssHooks[s],
            a && "get"in a && (r = a.get(e, !0, n)),
            void 0 === r && (r = w(e, t, i)),
            "normal" === r && t in $e && (r = $e[t]),
            "" === n || n ? (o = parseFloat(r),
            !0 === n || J.isNumeric(o) ? o || 0 : r) : r
        }
    }),
    J.each(["height", "width"], function(e, t) {
        J.cssHooks[t] = {
            get: function(e, n, i) {
                if (n)
                    return He.test(J.css(e, "display")) && 0 === e.offsetWidth ? J.swap(e, ze, function() {
                        return E(e, t, i)
                    }) : E(e, t, i)
            },
            set: function(e, n, i) {
                var r = i && Ie(e);
                return k(e, n, i ? S(e, t, i, "border-box" === J.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    J.cssHooks.marginRight = C(G.reliableMarginRight, function(e, t) {
        if (t)
            return J.swap(e, {
                display: "inline-block"
            }, w, [e, "marginRight"])
    }),
    J.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        J.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[e + me[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        Me.test(e) || (J.cssHooks[e + t].set = k)
    }),
    J.fn.extend({
        css: function(e, t) {
            return de(this, function(e, t, n) {
                var i, r, o = {}, a = 0;
                if (J.isArray(t)) {
                    for (i = Ie(e),
                    r = t.length; a < r; a++)
                        o[t[a]] = J.css(e, t[a], !1, i);
                    return o
                }
                return void 0 !== n ? J.style(e, t, n) : J.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return P(this, !0)
        },
        hide: function() {
            return P(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ye(this) ? J(this).show() : J(this).hide()
            })
        }
    }),
    J.Tween = A,
    A.prototype = {
        constructor: A,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (J.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : A.propHooks._default.set(this),
            this
        }
    },
    A.prototype.init.prototype = A.prototype,
    A.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    J.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    J.fx = A.prototype.init,
    J.fx.step = {};
    var Re, Ve, Qe = /^(?:toggle|show|hide)$/, Xe = new RegExp("^(?:([+-])=|)(" + ge + ")([a-z%]*)$","i"), Be = /queueHooks$/, Ye = [D], Ue = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , i = n.cur()
              , r = Xe.exec(t)
              , o = r && r[3] || (J.cssNumber[e] ? "" : "px")
              , a = (J.cssNumber[e] || "px" !== o && +i) && Xe.exec(J.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                r = r || [],
                a = +i || 1;
                do {
                    s = s || ".5",
                    a /= s,
                    J.style(n.elem, e, a + o)
                } while (s !== (s = n.cur() / i) && 1 !== s && --l)
            }
            return r && (a = n.start = +a || +i || 0,
            n.unit = o,
            n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]),
            n
        }
        ]
    };
    J.Animation = J.extend(M, {
        tweener: function(e, t) {
            J.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; i < r; i++)
                n = e[i],
                Ue[n] = Ue[n] || [],
                Ue[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Ye.unshift(e) : Ye.push(e)
        }
    }),
    J.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? J.extend({}, e) : {
            complete: n || !n && t || J.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !J.isFunction(t) && t
        };
        return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            J.isFunction(i.old) && i.old.call(this),
            i.queue && J.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    J.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(ye).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = J.isEmptyObject(e)
              , o = J.speed(t, n, i)
              , a = function() {
                var t = M(this, J.extend({}, e), o);
                (r || fe.get(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , o = J.timers
                  , a = fe.get(this);
                if (r)
                    a[r] && a[r].stop && i(a[r]);
                else
                    for (r in a)
                        a[r] && a[r].stop && Be.test(r) && i(a[r]);
                for (r = o.length; r--; )
                    o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n),
                    t = !1,
                    o.splice(r, 1));
                !t && n || J.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = fe.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = J.timers, a = i ? i.length : 0;
                for (n.finish = !0,
                J.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < a; t++)
                    i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    J.each(["toggle", "show", "hide"], function(e, t) {
        var n = J.fn[t];
        J.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, i, r)
        }
    }),
    J.each({
        slideDown: j("show"),
        slideUp: j("hide"),
        slideToggle: j("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        J.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    J.timers = [],
    J.fx.tick = function() {
        var e, t = 0, n = J.timers;
        for (Re = J.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || J.fx.stop(),
        Re = void 0
    }
    ,
    J.fx.timer = function(e) {
        J.timers.push(e),
        e() ? J.fx.start() : J.timers.pop()
    }
    ,
    J.fx.interval = 13,
    J.fx.start = function() {
        Ve || (Ve = setInterval(J.fx.tick, J.fx.interval))
    }
    ,
    J.fx.stop = function() {
        clearInterval(Ve),
        Ve = null
    }
    ,
    J.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    J.fn.delay = function(e, t) {
        return e = J.fx ? J.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var i = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e = Z.createElement("input")
          , t = Z.createElement("select")
          , n = t.appendChild(Z.createElement("option"));
        e.type = "checkbox",
        G.checkOn = "" !== e.value,
        G.optSelected = n.selected,
        t.disabled = !0,
        G.optDisabled = !n.disabled,
        e = Z.createElement("input"),
        e.value = "t",
        e.type = "radio",
        G.radioValue = "t" === e.value
    }();
    var Ge, Ze = J.expr.attrHandle;
    J.fn.extend({
        attr: function(e, t) {
            return de(this, J.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                J.removeAttr(this, e)
            })
        }
    }),
    J.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute ? J.prop(e, t, n) : (1 === o && J.isXMLDoc(e) || (t = t.toLowerCase(),
                i = J.attrHooks[t] || (J.expr.match.bool.test(t) ? Ge : void 0)),
                void 0 === n ? i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = J.find.attr(e, t),
                null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : void J.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(le);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    i = J.propFix[n] || n,
                    J.expr.match.bool.test(n) && (e[i] = !1),
                    e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!G.radioValue && "radio" === t && J.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    Ge = {
        set: function(e, t, n) {
            return !1 === t ? J.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    J.each(J.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ze[t] || J.find.attr;
        Ze[t] = function(e, t, i) {
            var r, o;
            return i || (o = Ze[t],
            Ze[t] = r,
            r = null != n(e, t, i) ? t.toLowerCase() : null,
            Ze[t] = o),
            r
        }
    });
    var Je = /^(?:input|select|textarea|button)$/i;
    J.fn.extend({
        prop: function(e, t) {
            return de(this, J.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[J.propFix[e] || e]
            })
        }
    }),
    J.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, r, o, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a)
                return o = 1 !== a || !J.isXMLDoc(e),
                o && (t = J.propFix[t] || t,
                r = J.propHooks[t]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Je.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    G.optSelected || (J.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        J.propFix[this.toLowerCase()] = this
    });
    J.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, a, s = "string" == typeof e && e, l = 0, c = this.length;
            if (J.isFunction(e))
                return this.each(function(t) {
                    J(this).addClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(le) || []; l < c; l++)
                    if (n = this[l],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(/[\t\r\n\f]/g, " ") : " ")) {
                        for (o = 0; r = t[o++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = J.trim(i),
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, a, s = 0 === arguments.length || "string" == typeof e && e, l = 0, c = this.length;
            if (J.isFunction(e))
                return this.each(function(t) {
                    J(this).removeClass(e.call(this, t, this.className))
                });
            if (s)
                for (t = (e || "").match(le) || []; l < c; l++)
                    if (n = this[l],
                    i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(/[\t\r\n\f]/g, " ") : "")) {
                        for (o = 0; r = t[o++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        a = e ? J.trim(i) : "",
                        n.className !== a && (n.className = a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : J.isFunction(e) ? this.each(function(n) {
                J(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, i = 0, r = J(this), o = e.match(le) || []; t = o[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    "undefined" !== n && "boolean" !== n || (this.className && fe.set(this, "__className__", this.className),
                    this.className = this.className || !1 === e ? "" : fe.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(/[\t\r\n\f]/g, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    J.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = J.isFunction(e),
                    this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? e.call(this, n, J(this).val()) : e,
                        null == r ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        (t = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return (t = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                    "string" == typeof n ? n.replace(/\r/g, "") : null == n ? "" : n)
            }
        }
    }),
    J.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = J.find.attr(e, "value");
                    return null != t ? t : J.trim(J.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (n = i[l],
                        (n.selected || l === r) && (G.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !J.nodeName(n.parentNode, "optgroup"))) {
                            if (t = J(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = J.makeArray(t), a = r.length; a--; )
                        i = r[a],
                        (i.selected = J.inArray(i.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    J.each(["radio", "checkbox"], function() {
        J.valHooks[this] = {
            set: function(e, t) {
                if (J.isArray(t))
                    return e.checked = J.inArray(J(e).val(), t) >= 0
            }
        },
        G.checkOn || (J.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        J.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    J.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ke = J.now()
      , et = /\?/;
    J.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    J.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser,
            t = n.parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + e),
        t
    }
    ;
    var tt = /([?&])_=[^&]*/
      , nt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , it = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , rt = /^(?:GET|HEAD)$/
      , ot = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , at = {}
      , st = {}
      , lt = "*/".concat("*")
      , ct = e.location.href
      , ut = ot.exec(ct.toLowerCase()) || [];
    J.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ct,
            type: "GET",
            isLocal: it.test(ut[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? H(H(e, J.ajaxSettings), t) : H(J.ajaxSettings, e)
        },
        ajaxPrefilter: L(at),
        ajaxTransport: L(st),
        ajax: function(e, t) {
            function n(e, t, n, a) {
                var l, u, m, y, x, C = t;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                i = void 0,
                o = a || "",
                w.readyState = e > 0 ? 4 : 0,
                l = e >= 200 && e < 300 || 304 === e,
                n && (y = F(d, w, n)),
                y = W(d, y, w, l),
                l ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"),
                x && (J.lastModified[r] = x),
                (x = w.getResponseHeader("etag")) && (J.etag[r] = x)),
                204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = y.state,
                u = y.data,
                m = y.error,
                l = !m)) : (m = C,
                !e && C || (C = "error",
                e < 0 && (e = 0))),
                w.status = e,
                w.statusText = (t || C) + "",
                l ? h.resolveWith(f, [u, C, w]) : h.rejectWith(f, [w, C, m]),
                w.statusCode(g),
                g = void 0,
                c && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? u : m]),
                v.fireWith(f, [w, C]),
                c && (p.trigger("ajaxComplete", [w, d]),
                --J.active || J.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var i, r, o, a, s, l, c, u, d = J.ajaxSetup({}, t), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? J(f) : J.event, h = J.Deferred(), v = J.Callbacks("once memory"), g = d.statusCode || {}, m = {}, y = {}, b = 0, x = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!a)
                            for (a = {}; t = nt.exec(o); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = y[n] = y[n] || e,
                    m[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (b < 2)
                            for (t in e)
                                g[t] = [g[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return i && i.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = v.add,
            w.success = w.done,
            w.error = w.fail,
            d.url = ((e || d.url || ct) + "").replace(/#.*$/, "").replace(/^\/\//, ut[1] + "//"),
            d.type = t.method || t.type || d.method || d.type,
            d.dataTypes = J.trim(d.dataType || "*").toLowerCase().match(le) || [""],
            null == d.crossDomain && (l = ot.exec(d.url.toLowerCase()),
            d.crossDomain = !(!l || l[1] === ut[1] && l[2] === ut[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (ut[3] || ("http:" === ut[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)),
            I(at, d, t, w),
            2 === b)
                return w;
            c = J.event && d.global,
            c && 0 == J.active++ && J.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !rt.test(d.type),
            r = d.url,
            d.hasContent || (d.data && (r = d.url += (et.test(r) ? "&" : "?") + d.data,
            delete d.data),
            !1 === d.cache && (d.url = tt.test(r) ? r.replace(tt, "$1_=" + Ke++) : r + (et.test(r) ? "&" : "?") + "_=" + Ke++)),
            d.ifModified && (J.lastModified[r] && w.setRequestHeader("If-Modified-Since", J.lastModified[r]),
            J.etag[r] && w.setRequestHeader("If-None-Match", J.etag[r])),
            (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && w.setRequestHeader("Content-Type", d.contentType),
            w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + lt + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers)
                w.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (!1 === d.beforeSend.call(f, w, d) || 2 === b))
                return w.abort();
            x = "abort";
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[u](d[u]);
            if (i = I(st, d, t, w)) {
                w.readyState = 1,
                c && p.trigger("ajaxSend", [w, d]),
                d.async && d.timeout > 0 && (s = setTimeout(function() {
                    w.abort("timeout")
                }, d.timeout));
                try {
                    b = 1,
                    i.send(m, n)
                } catch (e) {
                    if (!(b < 2))
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return J.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return J.get(e, void 0, t, "script")
        }
    }),
    J.each(["get", "post"], function(e, t) {
        J[t] = function(e, n, i, r) {
            return J.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            J.ajax({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            })
        }
    }),
    J._evalUrl = function(e) {
        return J.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    J.fn.extend({
        wrapAll: function(e) {
            var t;
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = J(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return J.isFunction(e) ? this.each(function(t) {
                J(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = J(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = J.isFunction(e);
            return this.each(function(n) {
                J(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    J.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }
    ,
    J.expr.filters.visible = function(e) {
        return !J.expr.filters.hidden(e)
    }
    ;
    var dt = /\[\]$/
      , ft = /^(?:submit|button|image|reset|file)$/i
      , pt = /^(?:input|select|textarea|keygen)/i;
    J.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = J.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = J.ajaxSettings && J.ajaxSettings.traditional),
        J.isArray(e) || e.jquery && !J.isPlainObject(e))
            J.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                z(n, e[n], t, r);
        return i.join("&").replace(/%20/g, "+")
    }
    ,
    J.fn.extend({
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = J.prop(this, "elements");
                return e ? J.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !J(this).is(":disabled") && pt.test(this.nodeName) && !ft.test(e) && (this.checked || !be.test(e))
            }).map(function(e, t) {
                var n = J(this).val();
                return null == n ? null : J.isArray(n) ? J.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    }),
    J.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    }
    ;
    var ht = 0
      , vt = {}
      , gt = {
        0: 200,
        1223: 204
    }
      , mt = J.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in vt)
            vt[e]()
    }),
    G.cors = !!mt && "withCredentials"in mt,
    G.ajax = mt = !!mt,
    J.ajaxTransport(function(e) {
        var t;
        if (G.cors || mt && !e.crossDomain)
            return {
                send: function(n, i) {
                    var r, o = e.xhr(), a = ++ht;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (r in e.xhrFields)
                            o[r] = e.xhrFields[r];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        o.setRequestHeader(r, n[r]);
                    t = function(e) {
                        return function() {
                            t && (delete vt[a],
                            t = o.onload = o.onerror = null,
                            "abort" === e ? o.abort() : "error" === e ? i(o.status, o.statusText) : i(gt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }
                    ,
                    o.onload = t(),
                    o.onerror = t("error"),
                    t = vt[a] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (e) {
                        if (t)
                            throw e
                    }
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return J.globalEval(e),
                e
            }
        }
    }),
    J.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    J.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = J("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && r("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    Z.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var yt = []
      , bt = /(=)\?(?=&|$)|\?\?/;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = yt.pop() || J.expando + "_" + Ke++;
            return this[e] = !0,
            e
        }
    }),
    J.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, a, s = !1 !== t.jsonp && (bt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && bt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return r = t.jsonpCallback = J.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace(bt, "$1" + r) : !1 !== t.jsonp && (t.url += (et.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            t.converters["script json"] = function() {
                return a || J.error(r + " was not called"),
                a[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[r],
            e[r] = function() {
                a = arguments
            }
            ,
            i.always(function() {
                e[r] = o,
                t[r] && (t.jsonpCallback = n.jsonpCallback,
                yt.push(r)),
                a && J.isFunction(o) && o(a[0]),
                a = o = void 0
            }),
            "script"
    }),
    J.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || Z;
        var i = ne.exec(e)
          , r = !n && [];
        return i ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, r),
        r && r.length && J(r).remove(),
        J.merge([], i.childNodes))
    }
    ;
    var xt = J.fn.load;
    J.fn.load = function(e, t, n) {
        if ("string" != typeof e && xt)
            return xt.apply(this, arguments);
        var i, r, o, a = this, s = e.indexOf(" ");
        return s >= 0 && (i = J.trim(e.slice(s)),
        e = e.slice(0, s)),
        J.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        a.length > 0 && J.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            a.html(i ? J("<div>").append(J.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            a.each(n, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        J.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    J.expr.filters.animated = function(e) {
        return J.grep(J.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var wt = e.document.documentElement;
    J.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, a, s, l, c, u = J.css(e, "position"), d = J(e), f = {};
            "static" === u && (e.style.position = "relative"),
            s = d.offset(),
            o = J.css(e, "top"),
            l = J.css(e, "left"),
            c = ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1,
            c ? (i = d.position(),
            a = i.top,
            r = i.left) : (a = parseFloat(o) || 0,
            r = parseFloat(l) || 0),
            J.isFunction(t) && (t = t.call(e, n, s)),
            null != t.top && (f.top = t.top - s.top + a),
            null != t.left && (f.left = t.left - s.left + r),
            "using"in t ? t.using.call(e, f) : d.css(f)
        }
    },
    J.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    J.offset.setOffset(this, e, t)
                });
            var t, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            if (o)
                return t = o.documentElement,
                J.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()),
                n = $(o),
                {
                    top: r.top + n.pageYOffset - t.clientTop,
                    left: r.left + n.pageXOffset - t.clientLeft
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === J.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                J.nodeName(e[0], "html") || (i = e.offset()),
                i.top += J.css(e[0], "borderTopWidth", !0),
                i.left += J.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - i.top - J.css(n, "marginTop", !0),
                    left: t.left - i.left - J.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || wt; e && !J.nodeName(e, "html") && "static" === J.css(e, "position"); )
                    e = e.offsetParent;
                return e || wt
            })
        }
    }),
    J.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = "pageYOffset" === n;
        J.fn[t] = function(r) {
            return de(this, function(t, r, o) {
                var a = $(t);
                if (void 0 === o)
                    return a ? a[n] : t[r];
                a ? a.scrollTo(i ? e.pageXOffset : o, i ? o : e.pageYOffset) : t[r] = o
            }, t, r, arguments.length, null)
        }
    }),
    J.each(["top", "left"], function(e, t) {
        J.cssHooks[t] = C(G.pixelPosition, function(e, n) {
            if (n)
                return n = w(e, t),
                Le.test(n) ? J(e).position()[t] + "px" : n
        })
    }),
    J.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        J.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            J.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i)
                  , a = n || (!0 === i || !0 === r ? "margin" : "border");
                return de(this, function(t, n, i) {
                    var r;
                    return J.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? J.css(t, n, a) : J.style(t, n, i, a)
                }, t, o ? i : void 0, o, null)
            }
        })
    }),
    J.fn.size = function() {
        return this.length
    }
    ,
    J.fn.andSelf = J.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return J
    });
    var Ct = e.jQuery
      , Tt = e.$;
    return J.noConflict = function(t) {
        return e.$ === J && (e.$ = Tt),
        t && e.jQuery === J && (e.jQuery = Ct),
        J
    }
    ,
    void 0 === t && (e.jQuery = e.$ = J),
    J
}),
window.Modernizr = function(e, t, n) {
    function i(e) {
        g.cssText = e
    }
    function r(e, t) {
        return i(x.join(e + ";") + (t || ""))
    }
    function o(e, t) {
        return typeof e === t
    }
    function a(e, t) {
        return !!~("" + e).indexOf(t)
    }
    function s(e, t) {
        for (var i in e) {
            var r = e[i];
            if (!a(r, "-") && g[r] !== n)
                return "pfx" != t || r
        }
        return !1
    }
    function l(e, t, i) {
        for (var r in e) {
            var a = t[e[r]];
            if (a !== n)
                return !1 === i ? e[r] : o(a, "function") ? a.bind(i || t) : a
        }
        return !1
    }
    function c(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , r = (e + " " + C.join(i + " ") + i).split(" ");
        return o(t, "string") || o(t, "undefined") ? s(r, t) : (r = (e + " " + T.join(i + " ") + i).split(" "),
        l(r, t, n))
    }
    var u, d, f = {}, p = t.documentElement, h = "modernizr", v = t.createElement(h), g = v.style, m = t.createElement("input"), y = ":)", b = {}.toString, x = " -webkit- -moz- -o- -ms- ".split(" "), w = "Webkit Moz O ms", C = w.split(" "), T = w.toLowerCase().split(" "), k = {
        svg: "http://www.w3.org/2000/svg"
    }, S = {}, E = {}, P = {}, A = [], O = A.slice, j = function(e, n, i, r) {
        var o, a, s, l, c = t.createElement("div"), u = t.body, d = u || t.createElement("body");
        if (parseInt(i, 10))
            for (; i--; )
                s = t.createElement("div"),
                s.id = r ? r[i] : h + (i + 1),
                c.appendChild(s);
        return o = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""),
        c.id = h,
        (u ? c : d).innerHTML += o,
        d.appendChild(c),
        u || (d.style.background = "",
        d.style.overflow = "hidden",
        l = p.style.overflow,
        p.style.overflow = "hidden",
        p.appendChild(d)),
        a = n(c, e),
        u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d),
        p.style.overflow = l),
        !!a
    }, N = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n)
            return n(t) && n(t).matches || !1;
        var i;
        return j("@media " + t + " { #" + h + " { position: absolute; } }", function(t) {
            i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
        }),
        i
    }, D = function() {
        function e(e, r) {
            r = r || t.createElement(i[e] || "div"),
            e = "on" + e;
            var a = e in r;
            return a || (r.setAttribute || (r = t.createElement("div")),
            r.setAttribute && r.removeAttribute && (r.setAttribute(e, ""),
            a = o(r[e], "function"),
            o(r[e], "undefined") || (r[e] = n),
            r.removeAttribute(e))),
            r = null,
            a
        }
        var i = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return e
    }(), q = {}.hasOwnProperty;
    d = o(q, "undefined") || o(q.call, "undefined") ? function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    }
    : function(e, t) {
        return q.call(e, t)
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t)
            throw new TypeError;
        var n = O.call(arguments, 1)
          , i = function() {
            if (this instanceof i) {
                var r = function() {};
                r.prototype = t.prototype;
                var o = new r
                  , a = t.apply(o, n.concat(O.call(arguments)));
                return Object(a) === a ? a : o
            }
            return t.apply(e, n.concat(O.call(arguments)))
        };
        return i
    }
    ),
    S.flexbox = function() {
        return c("flexWrap")
    }
    ,
    S.flexboxlegacy = function() {
        return c("boxDirection")
    }
    ,
    S.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }
    ,
    S.canvastext = function() {
        return !(!f.canvas || !o(t.createElement("canvas").getContext("2d").fillText, "function"))
    }
    ,
    S.webgl = function() {
        return !!e.WebGLRenderingContext
    }
    ,
    S.touch = function() {
        var n;
        return "ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : j(["@media (", x.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
            n = 9 === e.offsetTop
        }),
        n
    }
    ,
    S.geolocation = function() {
        return "geolocation"in navigator
    }
    ,
    S.postmessage = function() {
        return !!e.postMessage
    }
    ,
    S.websqldatabase = function() {
        return !!e.openDatabase
    }
    ,
    S.indexedDB = function() {
        return !!c("indexedDB", e)
    }
    ,
    S.hashchange = function() {
        return D("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }
    ,
    S.history = function() {
        return !(!e.history || !history.pushState)
    }
    ,
    S.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable"in e || "ondragstart"in e && "ondrop"in e
    }
    ,
    S.websockets = function() {
        return "WebSocket"in e || "MozWebSocket"in e
    }
    ,
    S.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"),
        a(g.backgroundColor, "rgba")
    }
    ,
    S.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"),
        a(g.backgroundColor, "rgba") || a(g.backgroundColor, "hsla")
    }
    ,
    S.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(g.background)
    }
    ,
    S.backgroundsize = function() {
        return c("backgroundSize")
    }
    ,
    S.borderimage = function() {
        return c("borderImage")
    }
    ,
    S.borderradius = function() {
        return c("borderRadius")
    }
    ,
    S.boxshadow = function() {
        return c("boxShadow")
    }
    ,
    S.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    }
    ,
    S.opacity = function() {
        return r("opacity:.55"),
        /^0.55$/.test(g.opacity)
    }
    ,
    S.cssanimations = function() {
        return c("animationName")
    }
    ,
    S.csscolumns = function() {
        return c("columnCount")
    }
    ,
    S.cssgradients = function() {
        var e = "background-image:";
        return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + x.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)),
        a(g.backgroundImage, "gradient")
    }
    ,
    S.cssreflections = function() {
        return c("boxReflect")
    }
    ,
    S.csstransforms = function() {
        return !!c("transform")
    }
    ,
    S.csstransforms3d = function() {
        var e = !!c("perspective");
        return e && "webkitPerspective"in p.style && j("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        e
    }
    ,
    S.csstransitions = function() {
        return c("transition")
    }
    ,
    S.fontface = function() {
        var e;
        return j('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
            var r = t.getElementById("smodernizr")
              , o = r.sheet || r.styleSheet
              , a = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
        }),
        e
    }
    ,
    S.generatedcontent = function() {
        var e;
        return j(["#", h, "{font:0/0 a}#", h, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
            e = t.offsetHeight >= 3
        }),
        e
    }
    ,
    S.video = function() {
        var e = t.createElement("video")
          , n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n),
            n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
            n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (e) {}
        return n
    }
    ,
    S.audio = function() {
        var e = t.createElement("audio")
          , n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n),
            n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
            n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {}
        return n
    }
    ,
    S.localstorage = function() {
        try {
            return localStorage.setItem(h, h),
            localStorage.removeItem(h),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    S.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h),
            sessionStorage.removeItem(h),
            !0
        } catch (e) {
            return !1
        }
    }
    ,
    S.webworkers = function() {
        return !!e.Worker
    }
    ,
    S.applicationcache = function() {
        return !!e.applicationCache
    }
    ,
    S.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(k.svg, "svg").createSVGRect
    }
    ,
    S.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == k.svg
    }
    ,
    S.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(b.call(t.createElementNS(k.svg, "animate")))
    }
    ,
    S.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(b.call(t.createElementNS(k.svg, "clipPath")))
    }
    ;
    for (var M in S)
        d(S, M) && (u = M.toLowerCase(),
        f[u] = S[M](),
        A.push((f[u] ? "" : "no-") + u));
    return f.input || function() {
        f.input = function(n) {
            for (var i = 0, r = n.length; i < r; i++)
                P[n[i]] = !!(n[i]in m);
            return P.list && (P.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
            P
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        f.inputtypes = function(e) {
            for (var i, r, o, a = 0, s = e.length; a < s; a++)
                m.setAttribute("type", r = e[a]),
                i = "text" !== m.type,
                i && (m.value = y,
                m.style.cssText = "position:absolute;visibility:hidden;",
                /^range$/.test(r) && m.style.WebkitAppearance !== n ? (p.appendChild(m),
                o = t.defaultView,
                i = o.getComputedStyle && "textfield" !== o.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight,
                p.removeChild(m)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? m.checkValidity && !1 === m.checkValidity() : m.value != y)),
                E[e[a]] = !!i;
            return E
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }(),
    f.addTest = function(e, t) {
        if ("object" == typeof e)
            for (var i in e)
                d(e, i) && f.addTest(i, e[i]);
        else {
            if (e = e.toLowerCase(),
            f[e] !== n)
                return f;
            t = "function" == typeof t ? t() : t,
            p.className += " " + (t ? "" : "no-") + e,
            f[e] = t
        }
        return f
    }
    ,
    i(""),
    v = m = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p")
              , i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var e = m.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function r(e) {
            var t = g[e[h]];
            return t || (t = {},
            v++,
            e[h] = v,
            g[v] = t),
            t
        }
        function o(e, n, i) {
            if (n || (n = t),
            u)
                return n.createElement(e);
            i || (i = r(n));
            var o;
            return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e),
            !o.canHaveChildren || f.test(e) || o.tagUrn ? o : i.frag.appendChild(o)
        }
        function a(e, n) {
            if (e || (e = t),
            u)
                return e.createDocumentFragment();
            n = n || r(e);
            for (var o = n.frag.cloneNode(), a = 0, s = i(), l = s.length; a < l; a++)
                o.createElement(s[a]);
            return o
        }
        function s(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement,
            t.createFrag = e.createDocumentFragment,
            t.frag = t.createFrag()),
            e.createElement = function(n) {
                return m.shivMethods ? o(n, e, t) : t.createElem(n)
            }
            ,
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(m, t.frag)
        }
        function l(e) {
            e || (e = t);
            var i = r(e);
            return !m.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            u || s(e, i),
            e
        }
        var c, u, d = e.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, h = "_html5shiv", v = 0, g = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                c = "hidden"in e,
                u = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                c = !0,
                u = !0
            }
        }();
        var m = {
            elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== d.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== d.shivMethods,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: a
        };
        e.html5 = m,
        l(t)
    }(this, t),
    f._version = "2.8.3",
    f._prefixes = x,
    f._domPrefixes = T,
    f._cssomPrefixes = C,
    f.mq = N,
    f.hasEvent = D,
    f.testProp = function(e) {
        return s([e])
    }
    ,
    f.testAllProps = c,
    f.testStyles = j,
    f.prefixed = function(e, t, n) {
        return t ? c(e, t, n) : c(e, "pfx")
    }
    ,
    p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + A.join(" "),
    f
}(this, this.document),
void 0 === jQuery) {
    var jQuery;
    jQuery = "function" == typeof require ? $ = require("jquery") : $
}
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, i, r) {
        return jQuery.easing[jQuery.easing.def](e, t, n, i, r)
    },
    easeInQuad: function(e, t, n, i, r) {
        return i * (t /= r) * t + n
    },
    easeOutQuad: function(e, t, n, i, r) {
        return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, i, r) {
        return i * (t /= r) * t * t + n
    },
    easeOutCubic: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, i, r) {
        return -i * ((t = t / r - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, i, r) {
        return i * (t /= r) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, i, r) {
        return i * ((t = t / r - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, i, r) {
        return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
    },
    easeOutSine: function(e, t, n, i, r) {
        return i * Math.sin(t / r * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, i, r) {
        return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
    },
    easeInExpo: function(e, t, n, i, r) {
        return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
    },
    easeOutExpo: function(e, t, n, i, r) {
        return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
    },
    easeInOutExpo: function(e, t, n, i, r) {
        return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function(e, t, n, i, r) {
        return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, i, r) {
        return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, i, r) {
        var o = 1.70158
          , a = 0
          , s = i;
        if (0 == t)
            return n;
        if (1 == (t /= r))
            return n + i;
        if (a || (a = .3 * r),
        s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else
            var o = a / (2 * Math.PI) * Math.asin(i / s);
        return -(s * Math.pow(2, 10 * (t -= 1))) * Math.sin((t * r - o) * (2 * Math.PI) / a) + n
    },
    easeOutElastic: function(e, t, n, i, r) {
        var o = 1.70158
          , a = 0
          , s = i;
        if (0 == t)
            return n;
        if (1 == (t /= r))
            return n + i;
        if (a || (a = .3 * r),
        s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else
            var o = a / (2 * Math.PI) * Math.asin(i / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
    },
    easeInOutElastic: function(e, t, n, i, r) {
        var o = 1.70158
          , a = 0
          , s = i;
        if (0 == t)
            return n;
        if (2 == (t /= r / 2))
            return n + i;
        if (a || (a = r * (.3 * 1.5)),
        s < Math.abs(i)) {
            s = i;
            var o = a / 4
        } else
            var o = a / (2 * Math.PI) * Math.asin(i / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * -.5 + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
    },
    easeInBack: function(e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158),
        i * (t /= r) * t * ((o + 1) * t - o) + n
    },
    easeOutBack: function(e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158),
        i * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + n
    },
    easeInOutBack: function(e, t, n, i, r, o) {
        return void 0 == o && (o = 1.70158),
        (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + n : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + n
    },
    easeInBounce: function(e, t, n, i, r) {
        return i - jQuery.easing.easeOutBounce(e, r - t, 0, i, r) + n
    },
    easeOutBounce: function(e, t, n, i, r) {
        return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, i, r) {
        return t < r / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, i, r) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, i, r) + .5 * i + n
    }
}),
jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(e, t, n, i, r) {
        return (t /= r / 2) < 1 ? i / 2 * t * t + n : i / 4 * ((t -= 2) * t * t + 2) + n
    }
}),
jQuery.Velocity || (function(e) {
    function t(e) {
        var t = e.length
          , i = n.type(e);
        return "function" !== i && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    if (!e.jQuery) {
        var n = function(e, t) {
            return new n.fn.init(e,t)
        };
        n.isWindow = function(e) {
            return null != e && e == e.window
        }
        ,
        n.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[a.call(e)] || "object" : typeof e
        }
        ,
        n.isArray = Array.isArray || function(e) {
            return "array" === n.type(e)
        }
        ,
        n.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e))
                return !1;
            try {
                if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            for (t in e)
                ;
            return void 0 === t || o.call(e, t)
        }
        ,
        n.each = function(e, n, i) {
            var r = 0
              , o = e.length
              , a = t(e);
            if (i) {
                if (a)
                    for (; o > r && !1 !== n.apply(e[r], i); r++)
                        ;
                else
                    for (r in e)
                        if (!1 === n.apply(e[r], i))
                            break
            } else if (a)
                for (; o > r && !1 !== n.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === n.call(e[r], r, e[r]))
                        break;
            return e
        }
        ,
        n.data = function(e, t, r) {
            if (void 0 === r) {
                var o = e[n.expando]
                  , a = o && i[o];
                if (void 0 === t)
                    return a;
                if (a && t in a)
                    return a[t]
            } else if (void 0 !== t) {
                var o = e[n.expando] || (e[n.expando] = ++n.uuid);
                return i[o] = i[o] || {},
                i[o][t] = r,
                r
            }
        }
        ,
        n.removeData = function(e, t) {
            var r = e[n.expando]
              , o = r && i[r];
            o && n.each(t, function(e, t) {
                delete o[t]
            })
        }
        ,
        n.extend = function() {
            var e, t, i, r, o, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s,
            s = arguments[l] || {},
            l++),
            "object" != typeof s && "function" !== n.type(s) && (s = {}),
            l === c && (s = this,
            l--); c > l; l++)
                if (null != (o = arguments[l]))
                    for (r in o)
                        e = s[r],
                        i = o[r],
                        s !== i && (u && i && (n.isPlainObject(i) || (t = n.isArray(i))) ? (t ? (t = !1,
                        a = e && n.isArray(e) ? e : []) : a = e && n.isPlainObject(e) ? e : {},
                        s[r] = n.extend(u, a, i)) : void 0 !== i && (s[r] = i));
            return s
        }
        ,
        n.queue = function(e, i, r) {
            if (e) {
                i = (i || "fx") + "queue";
                var o = n.data(e, i);
                return r ? (!o || n.isArray(r) ? o = n.data(e, i, function(e, n) {
                    var i = n || [];
                    return null != e && (t(Object(e)) ? function(e, t) {
                        for (var n = +t.length, i = 0, r = e.length; n > i; )
                            e[r++] = t[i++];
                        if (n !== n)
                            for (; void 0 !== t[i]; )
                                e[r++] = t[i++];
                        e.length = r
                    }(i, "string" == typeof e ? [e] : e) : [].push.call(i, e)),
                    i
                }(r)) : o.push(r),
                o) : o || []
            }
        }
        ,
        n.dequeue = function(e, t) {
            n.each(e.nodeType ? [e] : e, function(e, i) {
                t = t || "fx";
                var r = n.queue(i, t)
                  , o = r.shift();
                "inprogress" === o && (o = r.shift()),
                o && ("fx" === t && r.unshift("inprogress"),
                o.call(i, function() {
                    n.dequeue(i, t)
                }))
            })
        }
        ,
        n.fn = n.prototype = {
            init: function(e) {
                if (e.nodeType)
                    return this[0] = e,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; )
                        e = e.offsetParent;
                    return e || document
                }
                var t = this[0]
                  , e = e.apply(t)
                  , i = this.offset()
                  , r = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : n(e).offset();
                return i.top -= parseFloat(t.style.marginTop) || 0,
                i.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0,
                r.left += parseFloat(e.style.borderLeftWidth) || 0),
                {
                    top: i.top - r.top,
                    left: i.left - r.left
                }
            }
        };
        var i = {};
        n.expando = "velocity" + (new Date).getTime(),
        n.uuid = 0;
        for (var r = {}, o = r.hasOwnProperty, a = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)
            r["[object " + s[l] + "]"] = s[l].toLowerCase();
        n.fn.init.prototype = n.fn,
        e.Velocity = {
            Utilities: n
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, n, i) {
        function r(e) {
            for (var t = -1, n = e ? e.length : 0, i = []; ++t < n; ) {
                var r = e[t];
                r && i.push(r)
            }
            return i
        }
        function o(e) {
            return v.isWrapped(e) ? e = [].slice.call(e) : v.isNode(e) && (e = [e]),
            e
        }
        function a(e) {
            var t = f.data(e, "velocity");
            return null === t ? i : t
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }
        function l(e, n, i, r) {
            function o(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function a(e, t) {
                return 3 * t - 6 * e
            }
            function s(e) {
                return 3 * e
            }
            function l(e, t, n) {
                return ((o(t, n) * e + a(t, n)) * e + s(t)) * e
            }
            function c(e, t, n) {
                return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t)
            }
            function u(t, n) {
                for (var r = 0; v > r; ++r) {
                    var o = c(n, e, i);
                    if (0 === o)
                        return n;
                    n -= (l(n, e, i) - t) / o
                }
                return n
            }
            function d() {
                for (var t = 0; b > t; ++t)
                    T[t] = l(t * x, e, i)
            }
            function f(t, n, r) {
                var o, a, s = 0;
                do {
                    a = n + (r - n) / 2,
                    o = l(a, e, i) - t,
                    o > 0 ? r = a : n = a
                } while (Math.abs(o) > m && ++s < y);return a
            }
            function p(t) {
                for (var n = 0, r = 1, o = b - 1; r != o && T[r] <= t; ++r)
                    n += x;
                --r;
                var a = (t - T[r]) / (T[r + 1] - T[r])
                  , s = n + a * x
                  , l = c(s, e, i);
                return l >= g ? u(t, s) : 0 == l ? s : f(t, n, n + x)
            }
            function h() {
                k = !0,
                (e != n || i != r) && d()
            }
            var v = 4
              , g = .001
              , m = 1e-7
              , y = 10
              , b = 11
              , x = 1 / (b - 1)
              , w = "Float32Array"in t;
            if (4 !== arguments.length)
                return !1;
            for (var C = 0; 4 > C; ++C)
                if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C]))
                    return !1;
            e = Math.min(e, 1),
            i = Math.min(i, 1),
            e = Math.max(e, 0),
            i = Math.max(i, 0);
            var T = w ? new Float32Array(b) : new Array(b)
              , k = !1
              , S = function(t) {
                return k || h(),
                e === n && i === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(p(t), n, r)
            };
            S.getControlPoints = function() {
                return [{
                    x: e,
                    y: n
                }, {
                    x: i,
                    y: r
                }]
            }
            ;
            var E = "generateBezier(" + [e, n, i, r] + ")";
            return S.toString = function() {
                return E
            }
            ,
            S
        }
        function c(e, t) {
            var n = e;
            return v.isString(e) ? b.Easings[e] || (n = !1) : n = v.isArray(e) && 1 === e.length ? s.apply(null, e) : v.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : !(!v.isArray(e) || 4 !== e.length) && l.apply(null, e),
            !1 === n && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : y),
            n
        }
        function u(e) {
            if (e) {
                var t = (new Date).getTime()
                  , n = b.State.calls.length;
                n > 1e4 && (b.State.calls = r(b.State.calls));
                for (var o = 0; n > o; o++)
                    if (b.State.calls[o]) {
                        var s = b.State.calls[o]
                          , l = s[0]
                          , c = s[2]
                          , p = s[3]
                          , h = !!p
                          , g = null;
                        p || (p = b.State.calls[o][3] = t - 16);
                        for (var m = Math.min((t - p) / c.duration, 1), y = 0, x = l.length; x > y; y++) {
                            var C = l[y]
                              , k = C.element;
                            if (a(k)) {
                                var S = !1;
                                if (c.display !== i && null !== c.display && "none" !== c.display) {
                                    if ("flex" === c.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        f.each(E, function(e, t) {
                                            w.setPropertyValue(k, "display", t)
                                        })
                                    }
                                    w.setPropertyValue(k, "display", c.display)
                                }
                                c.visibility !== i && "hidden" !== c.visibility && w.setPropertyValue(k, "visibility", c.visibility);
                                for (var P in C)
                                    if ("element" !== P) {
                                        var A, O = C[P], j = v.isString(O.easing) ? b.Easings[O.easing] : O.easing;
                                        if (1 === m)
                                            A = O.endValue;
                                        else {
                                            var N = O.endValue - O.startValue;
                                            if (A = O.startValue + N * j(m, c, N),
                                            !h && A === O.currentValue)
                                                continue
                                        }
                                        if (O.currentValue = A,
                                        "tween" === P)
                                            g = A;
                                        else {
                                            if (w.Hooks.registered[P]) {
                                                var D = w.Hooks.getRoot(P)
                                                  , q = a(k).rootPropertyValueCache[D];
                                                q && (O.rootPropertyValue = q)
                                            }
                                            var M = w.setPropertyValue(k, P, O.currentValue + (0 === parseFloat(A) ? "" : O.unitType), O.rootPropertyValue, O.scrollData);
                                            w.Hooks.registered[P] && (a(k).rootPropertyValueCache[D] = w.Normalizations.registered[D] ? w.Normalizations.registered[D]("extract", null, M[1]) : M[1]),
                                            "transform" === M[0] && (S = !0)
                                        }
                                    }
                                c.mobileHA && a(k).transformCache.translate3d === i && (a(k).transformCache.translate3d = "(0px, 0px, 0px)",
                                S = !0),
                                S && w.flushTransformCache(k)
                            }
                        }
                        c.display !== i && "none" !== c.display && (b.State.calls[o][2].display = !1),
                        c.visibility !== i && "hidden" !== c.visibility && (b.State.calls[o][2].visibility = !1),
                        c.progress && c.progress.call(s[1], s[1], m, Math.max(0, p + c.duration - t), p, g),
                        1 === m && d(o)
                    }
            }
            b.State.isTicking && T(u)
        }
        function d(e, t) {
            if (!b.State.calls[e])
                return !1;
            for (var n = b.State.calls[e][0], r = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, c = 0, u = n.length; u > c; c++) {
                var d = n[c].element;
                if (t || o.loop || ("none" === o.display && w.setPropertyValue(d, "display", o.display),
                "hidden" === o.visibility && w.setPropertyValue(d, "visibility", o.visibility)),
                !0 !== o.loop && (f.queue(d)[1] === i || !/\.velocityQueueEntryFlag/i.test(f.queue(d)[1])) && a(d)) {
                    a(d).isAnimating = !1,
                    a(d).rootPropertyValueCache = {};
                    var p = !1;
                    f.each(w.Lists.transforms3D, function(e, t) {
                        var n = /^scale/.test(t) ? 1 : 0
                          , r = a(d).transformCache[t];
                        a(d).transformCache[t] !== i && new RegExp("^\\(" + n + "[^.]").test(r) && (p = !0,
                        delete a(d).transformCache[t])
                    }),
                    o.mobileHA && (p = !0,
                    delete a(d).transformCache.translate3d),
                    p && w.flushTransformCache(d),
                    w.Values.removeClass(d, "velocity-animating")
                }
                if (!t && o.complete && !o.loop && c === u - 1)
                    try {
                        o.complete.call(r, r)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                s && !0 !== o.loop && s(r),
                a(d) && !0 === o.loop && !t && (f.each(a(d).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0,
                    t.startValue = 360),
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0,
                    t.startValue = 100)
                }),
                b(d, "reverse", {
                    loop: !0,
                    delay: o.delay
                })),
                !1 !== o.queue && f.dequeue(d, o.queue)
            }
            b.State.calls[e] = !1;
            for (var h = 0, v = b.State.calls.length; v > h; h++)
                if (!1 !== b.State.calls[h]) {
                    l = !0;
                    break
                }
            !1 === l && (b.State.isTicking = !1,
            delete b.State.calls,
            b.State.calls = [])
        }
        var f, p = function() {
            if (n.documentMode)
                return n.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = n.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->",
                t.getElementsByTagName("span").length)
                    return t = null,
                    e
            }
            return i
        }(), h = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var n, i = (new Date).getTime();
                return n = Math.max(0, 16 - (i - e)),
                e = i + n,
                setTimeout(function() {
                    t(i + n)
                }, n)
            }
        }(), v = {
            isString: function(e) {
                return "string" == typeof e
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
                return e && e.nodeType
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== i && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            }
        }, g = !1;
        if (e.fn && e.fn.jquery ? (f = e,
        g = !0) : f = t.Velocity.Utilities,
        8 >= p && !g)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= p)
            return void (jQuery.fn.velocity = jQuery.fn.animate);
        var m = 400
          , y = "swing"
          , b = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: n.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: f,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: m,
                easing: y,
                begin: i,
                complete: i,
                progress: i,
                display: i,
                visibility: i,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                f.data(e, "velocity", {
                    isSVG: v.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        t.pageYOffset !== i ? (b.State.scrollAnchor = t,
        b.State.scrollPropertyLeft = "pageXOffset",
        b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body,
        b.State.scrollPropertyLeft = "scrollLeft",
        b.State.scrollPropertyTop = "scrollTop");
        var x = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }
            function t(t, n, i) {
                var r = {
                    x: t.x + i.dx * n,
                    v: t.v + i.dv * n,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: r.v,
                    dv: e(r)
                }
            }
            function n(n, i) {
                var r = {
                    dx: n.v,
                    dv: e(n)
                }
                  , o = t(n, .5 * i, r)
                  , a = t(n, .5 * i, o)
                  , s = t(n, i, a)
                  , l = 1 / 6 * (r.dx + 2 * (o.dx + a.dx) + s.dx)
                  , c = 1 / 6 * (r.dv + 2 * (o.dv + a.dv) + s.dv);
                return n.x = n.x + l * i,
                n.v = n.v + c * i,
                n
            }
            return function e(t, i, r) {
                var o, a, s, l = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, c = [0], u = 0;
                for (t = parseFloat(t) || 500,
                i = parseFloat(i) || 20,
                r = r || null,
                l.tension = t,
                l.friction = i,
                o = null !== r,
                o ? (u = e(t, i),
                a = u / r * .016) : a = .016; s = n(s || l, a),
                c.push(1 + s.x),
                u += 16,
                Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4; )
                    ;
                return o ? function(e) {
                    return c[e * (c.length - 1) | 0]
                }
                : u
            }
        }();
        b.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        },
        f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
            b.Easings[t[0]] = l.apply(null, t[1])
        });
        var w = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < w.Lists.colors.length; e++) {
                        var t = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var n, i, r;
                    if (p)
                        for (n in w.Hooks.templates) {
                            i = w.Hooks.templates[n],
                            r = i[0].split(" ");
                            var o = i[1].match(w.RegEx.valueSplit);
                            "Color" === r[0] && (r.push(r.shift()),
                            o.push(o.shift()),
                            w.Hooks.templates[n] = [r.join(" "), o.join(" ")])
                        }
                    for (n in w.Hooks.templates) {
                        i = w.Hooks.templates[n],
                        r = i[0].split(" ");
                        for (var e in r) {
                            var a = n + r[e]
                              , s = e;
                            w.Hooks.registered[a] = [n, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = w.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]),
                    w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]),
                    t
                },
                extractValue: function(e, t) {
                    var n = w.Hooks.registered[e];
                    if (n) {
                        var i = n[0]
                          , r = n[1];
                        return t = w.Hooks.cleanRootPropertyValue(i, t),
                        t.toString().match(w.RegEx.valueSplit)[r]
                    }
                    return t
                },
                injectValue: function(e, t, n) {
                    var i = w.Hooks.registered[e];
                    if (i) {
                        var r, o = i[0], a = i[1];
                        return n = w.Hooks.cleanRootPropertyValue(o, n),
                        r = n.toString().match(w.RegEx.valueSplit),
                        r[a] = t,
                        r.join(" ")
                    }
                    return n
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, n) {
                        switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var i;
                            return w.RegEx.wrappedValueAlreadyExtracted.test(n) ? i = n : (i = n.toString().match(w.RegEx.valueUnwrap),
                            i = i ? i[1].replace(/,(\s+)?/g, " ") : n),
                            i;
                        case "inject":
                            return "rect(" + n + ")"
                        }
                    },
                    blur: function(e, t, n) {
                        switch (e) {
                        case "name":
                            return b.State.isFirefox ? "filter" : "-webkit-filter";
                        case "extract":
                            var i = parseFloat(n);
                            if (!i && 0 !== i) {
                                var r = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                i = r ? r[1] : 0
                            }
                            return i;
                        case "inject":
                            return parseFloat(n) ? "blur(" + n + ")" : "none"
                        }
                    },
                    opacity: function(e, t, n) {
                        if (8 >= p)
                            switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var i = n.toString().match(/alpha\(opacity=(.*)\)/i);
                                return n = i ? i[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1,
                                parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")"
                            }
                        else
                            switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                            case "inject":
                                return n
                            }
                    }
                },
                register: function() {
                    9 >= p || b.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                    for (var e = 0; e < w.Lists.transformsBase.length; e++)
                        !function() {
                            var t = w.Lists.transformsBase[e];
                            w.Normalizations.registered[t] = function(e, n, r) {
                                switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return a(n) === i || a(n).transformCache[t] === i ? /^scale/i.test(t) ? 1 : 0 : a(n).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var o = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                    case "translate":
                                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                        break;
                                    case "scal":
                                    case "scale":
                                        b.State.isAndroid && a(n).transformCache[t] === i && 1 > r && (r = 1),
                                        o = !/(\d)$/i.test(r);
                                        break;
                                    case "skew":
                                        o = !/(deg|\d)$/i.test(r);
                                        break;
                                    case "rotate":
                                        o = !/(deg|\d)$/i.test(r)
                                    }
                                    return o || (a(n).transformCache[t] = "(" + r + ")"),
                                    a(n).transformCache[t]
                                }
                            }
                        }();
                    for (var e = 0; e < w.Lists.colors.length; e++)
                        !function() {
                            var t = w.Lists.colors[e];
                            w.Normalizations.registered[t] = function(e, n, r) {
                                switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var o;
                                    if (w.RegEx.wrappedValueAlreadyExtracted.test(r))
                                        o = r;
                                    else {
                                        var a, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(r) ? a = s[r] !== i ? s[r] : s.black : w.RegEx.isHex.test(r) ? a = "rgb(" + w.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (a = s.black),
                                        o = (a || r).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= p || 3 !== o.split(" ").length || (o += " 1"),
                                    o;
                                case "inject":
                                    return 8 >= p ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"),
                                    (8 >= p ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (p || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"),
                    new RegExp("^(" + t + ")$","i").test(e)
                },
                prefixCheck: function(e) {
                    if (b.State.prefixMatches[e])
                        return [b.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, i = t.length; i > n; n++) {
                        var r;
                        if (r = 0 === n ? e : t[n] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase()
                        }),
                        v.isString(b.State.prefixElement.style[r]))
                            return b.State.prefixMatches[e] = r,
                            [r, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, i) {
                        return t + t + n + n + i + i
                    }),
                    t = n.exec(e),
                    t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)","gi"), " ")
                }
            },
            getPropertyValue: function(e, n, r, o) {
                function s(e, n) {
                    function r() {
                        c && w.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= p)
                        l = f.css(e, n);
                    else {
                        var c = !1;
                        if (/^(width|height)$/.test(n) && 0 === w.getPropertyValue(e, "display") && (c = !0,
                        w.setPropertyValue(e, "display", w.Values.getDisplayType(e))),
                        !o) {
                            if ("height" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var u = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                                return r(),
                                u
                            }
                            if ("width" === n && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var d = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                                return r(),
                                d
                            }
                        }
                        var h;
                        h = a(e) === i ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null),
                        "borderColor" === n && (n = "borderTopColor"),
                        l = 9 === p && "filter" === n ? h.getPropertyValue(n) : h[n],
                        ("" === l || null === l) && (l = e.style[n]),
                        r()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(n)) {
                        var v = s(e, "position");
                        ("fixed" === v || "absolute" === v && /top|left/i.test(n)) && (l = f(e).position()[n] + "px")
                    }
                    return l
                }
                var l;
                if (w.Hooks.registered[n]) {
                    var c = n
                      , u = w.Hooks.getRoot(c);
                    r === i && (r = w.getPropertyValue(e, w.Names.prefixCheck(u)[0])),
                    w.Normalizations.registered[u] && (r = w.Normalizations.registered[u]("extract", e, r)),
                    l = w.Hooks.extractValue(c, r)
                } else if (w.Normalizations.registered[n]) {
                    var d, h;
                    d = w.Normalizations.registered[n]("name", e),
                    "transform" !== d && (h = s(e, w.Names.prefixCheck(d)[0]),
                    w.Values.isCSSNullValue(h) && w.Hooks.templates[n] && (h = w.Hooks.templates[n][1])),
                    l = w.Normalizations.registered[n]("extract", e, h)
                }
                if (!/^[\d-]/.test(l))
                    if (a(e) && a(e).isSVG && w.Names.SVGAttribute(n))
                        if (/^(height|width)$/i.test(n))
                            try {
                                l = e.getBBox()[n]
                            } catch (e) {
                                l = 0
                            }
                        else
                            l = e.getAttribute(n);
                    else
                        l = s(e, w.Names.prefixCheck(n)[0]);
                return w.Values.isCSSNullValue(l) && (l = 0),
                b.debug,
                l
            },
            setPropertyValue: function(e, n, i, r, o) {
                var s = n;
                if ("scroll" === n)
                    o.container ? o.container["scroll" + o.direction] = i : "Left" === o.direction ? t.scrollTo(i, o.alternateValue) : t.scrollTo(o.alternateValue, i);
                else if (w.Normalizations.registered[n] && "transform" === w.Normalizations.registered[n]("name", e))
                    w.Normalizations.registered[n]("inject", e, i),
                    s = "transform",
                    i = a(e).transformCache[n];
                else {
                    if (w.Hooks.registered[n]) {
                        var l = n
                          , c = w.Hooks.getRoot(n);
                        r = r || w.getPropertyValue(e, c),
                        i = w.Hooks.injectValue(l, i, r),
                        n = c
                    }
                    if (w.Normalizations.registered[n] && (i = w.Normalizations.registered[n]("inject", e, i),
                    n = w.Normalizations.registered[n]("name", e)),
                    s = w.Names.prefixCheck(n)[0],
                    8 >= p)
                        try {
                            e.style[s] = i
                        } catch (e) {
                            b.debug
                        }
                    else
                        a(e) && a(e).isSVG && w.Names.SVGAttribute(n) ? e.setAttribute(n, i) : e.style[s] = i;
                    b.debug
                }
                return [s, i]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(w.getPropertyValue(e, t))
                }
                var n = "";
                if ((p || b.State.isAndroid && !b.State.isChrome) && a(e).isSVG) {
                    var i = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    f.each(a(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"),
                        i[e] && (n += e + "(" + i[e].join(" ") + ") ",
                        delete i[e])
                    })
                } else {
                    var r, o;
                    f.each(a(e).transformCache, function(t) {
                        return r = a(e).transformCache[t],
                        "transformPerspective" === t ? (o = r,
                        !0) : (9 === p && "rotateZ" === t && (t = "rotate"),
                        void (n += t + r + " "))
                    }),
                    o && (n = "perspective" + o + " " + n)
                }
                w.setPropertyValue(e, "transform", n)
            }
        };
        w.Hooks.register(),
        w.Normalizations.register(),
        b.hook = function(e, t, n) {
            var r = i;
            return e = o(e),
            f.each(e, function(e, o) {
                if (a(o) === i && b.init(o),
                n === i)
                    r === i && (r = b.CSS.getPropertyValue(o, t));
                else {
                    var s = b.CSS.setPropertyValue(o, t, n);
                    "transform" === s[0] && b.CSS.flushTransformCache(o),
                    r = s
                }
            }),
            r
        }
        ;
        var C = function() {
            function e() {
                return s ? P.promise || null : l
            }
            function r() {
                function e(e) {
                    function d(e, t) {
                        var n = i
                          , r = i
                          , a = i;
                        return v.isArray(e) ? (n = e[0],
                        !v.isArray(e[1]) && /^[\d-]/.test(e[1]) || v.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (v.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || v.isArray(e[1])) && (r = t ? e[1] : c(e[1], s.duration),
                        e[2] !== i && (a = e[2]))) : n = e,
                        t || (r = r || s.easing),
                        v.isFunction(n) && (n = n.call(o, k, T)),
                        v.isFunction(a) && (a = a.call(o, k, T)),
                        [n || 0, r, a]
                    }
                    function p(e, t) {
                        var n, i;
                        return i = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return n = e,
                            ""
                        }),
                        n || (n = w.Values.getUnitType(e)),
                        [i, n]
                    }
                    if (s.begin && 0 === k)
                        try {
                            s.begin.call(h, h)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                    if ("scroll" === A) {
                        var m, x, C, S = /^x$/i.test(s.axis) ? "Left" : "Top", E = parseFloat(s.offset) || 0;
                        s.container ? v.isWrapped(s.container) || v.isNode(s.container) ? (s.container = s.container[0] || s.container,
                        m = s.container["scroll" + S],
                        C = m + f(o).position()[S.toLowerCase()] + E) : s.container = null : (m = b.State.scrollAnchor[b.State["scrollProperty" + S]],
                        x = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === S ? "Top" : "Left")]],
                        C = f(o).offset()[S.toLowerCase()] + E),
                        l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: m,
                                currentValue: m,
                                endValue: C,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: S,
                                    alternateValue: x
                                }
                            },
                            element: o
                        },
                        b.debug
                    } else if ("reverse" === A) {
                        if (!a(o).tweensContainer)
                            return void f.dequeue(o, s.queue);
                        "none" === a(o).opts.display && (a(o).opts.display = "auto"),
                        "hidden" === a(o).opts.visibility && (a(o).opts.visibility = "visible"),
                        a(o).opts.loop = !1,
                        a(o).opts.begin = null,
                        a(o).opts.complete = null,
                        y.easing || delete s.easing,
                        y.duration || delete s.duration,
                        s = f.extend({}, a(o).opts, s);
                        var O = f.extend(!0, {}, a(o).tweensContainer);
                        for (var j in O)
                            if ("element" !== j) {
                                var N = O[j].startValue;
                                O[j].startValue = O[j].currentValue = O[j].endValue,
                                O[j].endValue = N,
                                v.isEmptyObject(y) || (O[j].easing = s.easing),
                                b.debug
                            }
                        l = O
                    } else if ("start" === A) {
                        var O;
                        a(o).tweensContainer && !0 === a(o).isAnimating && (O = a(o).tweensContainer),
                        f.each(g, function(e, t) {
                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                var n = d(t, !0)
                                  , r = n[0]
                                  , o = n[1]
                                  , a = n[2];
                                if (w.RegEx.isHex.test(r)) {
                                    for (var s = ["Red", "Green", "Blue"], l = w.Values.hexToRgb(r), c = a ? w.Values.hexToRgb(a) : i, u = 0; u < s.length; u++) {
                                        var f = [l[u]];
                                        o && f.push(o),
                                        c !== i && f.push(c[u]),
                                        g[e + s[u]] = f
                                    }
                                    delete g[e]
                                }
                            }
                        });
                        for (var D in g) {
                            var q = d(g[D])
                              , I = q[0]
                              , H = q[1]
                              , F = q[2];
                            D = w.Names.camelCase(D);
                            var W = w.Hooks.getRoot(D)
                              , z = !1;
                            if (a(o).isSVG || "tween" === W || !1 !== w.Names.prefixCheck(W)[1] || w.Normalizations.registered[W] !== i) {
                                (s.display !== i && null !== s.display && "none" !== s.display || s.visibility !== i && "hidden" !== s.visibility) && /opacity|filter/.test(D) && !F && 0 !== I && (F = 0),
                                s._cacheValues && O && O[D] ? (F === i && (F = O[D].endValue + O[D].unitType),
                                z = a(o).rootPropertyValueCache[W]) : w.Hooks.registered[D] ? F === i ? (z = w.getPropertyValue(o, W),
                                F = w.getPropertyValue(o, D, z)) : z = w.Hooks.templates[W][1] : F === i && (F = w.getPropertyValue(o, D));
                                var $, _, R, V = !1;
                                if ($ = p(D, F),
                                F = $[0],
                                R = $[1],
                                $ = p(D, I),
                                I = $[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return V = t,
                                    ""
                                }),
                                _ = $[1],
                                F = parseFloat(F) || 0,
                                I = parseFloat(I) || 0,
                                "%" === _ && (/^(fontSize|lineHeight)$/.test(D) ? (I /= 100,
                                _ = "em") : /^scale/.test(D) ? (I /= 100,
                                _ = "") : /(Red|Green|Blue)$/i.test(D) && (I = I / 100 * 255,
                                _ = "")),
                                /[\/*]/.test(V))
                                    _ = R;
                                else if (R !== _ && 0 !== F)
                                    if (0 === I)
                                        _ = R;
                                    else {
                                        r = r || function() {
                                            var e = {
                                                myParent: o.parentNode || n.body,
                                                position: w.getPropertyValue(o, "position"),
                                                fontSize: w.getPropertyValue(o, "fontSize")
                                            }
                                              , i = e.position === M.lastPosition && e.myParent === M.lastParent
                                              , r = e.fontSize === M.lastFontSize;
                                            M.lastParent = e.myParent,
                                            M.lastPosition = e.position,
                                            M.lastFontSize = e.fontSize;
                                            var s = 100
                                              , l = {};
                                            if (r && i)
                                                l.emToPx = M.lastEmToPx,
                                                l.percentToPxWidth = M.lastPercentToPxWidth,
                                                l.percentToPxHeight = M.lastPercentToPxHeight;
                                            else {
                                                var c = a(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");
                                                b.init(c),
                                                e.myParent.appendChild(c),
                                                f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                    b.CSS.setPropertyValue(c, t, "hidden")
                                                }),
                                                b.CSS.setPropertyValue(c, "position", e.position),
                                                b.CSS.setPropertyValue(c, "fontSize", e.fontSize),
                                                b.CSS.setPropertyValue(c, "boxSizing", "content-box"),
                                                f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                    b.CSS.setPropertyValue(c, t, s + "%")
                                                }),
                                                b.CSS.setPropertyValue(c, "paddingLeft", s + "em"),
                                                l.percentToPxWidth = M.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / s,
                                                l.percentToPxHeight = M.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / s,
                                                l.emToPx = M.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / s,
                                                e.myParent.removeChild(c)
                                            }
                                            return null === M.remToPx && (M.remToPx = parseFloat(w.getPropertyValue(n.body, "fontSize")) || 16),
                                            null === M.vwToPx && (M.vwToPx = parseFloat(t.innerWidth) / 100,
                                            M.vhToPx = parseFloat(t.innerHeight) / 100),
                                            l.remToPx = M.remToPx,
                                            l.vwToPx = M.vwToPx,
                                            l.vhToPx = M.vhToPx,
                                            b.debug,
                                            l
                                        }();
                                        var Q = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                        switch (R) {
                                        case "%":
                                            F *= "x" === Q ? r.percentToPxWidth : r.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            F *= r[R + "ToPx"]
                                        }
                                        switch (_) {
                                        case "%":
                                            F *= 1 / ("x" === Q ? r.percentToPxWidth : r.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            F *= 1 / r[_ + "ToPx"]
                                        }
                                    }
                                switch (V) {
                                case "+":
                                    I = F + I;
                                    break;
                                case "-":
                                    I = F - I;
                                    break;
                                case "*":
                                    I *= F;
                                    break;
                                case "/":
                                    I = F / I
                                }
                                l[D] = {
                                    rootPropertyValue: z,
                                    startValue: F,
                                    currentValue: F,
                                    endValue: I,
                                    unitType: _,
                                    easing: H
                                },
                                b.debug
                            } else
                                b.debug
                        }
                        l.element = o
                    }
                    l.element && (w.Values.addClass(o, "velocity-animating"),
                    L.push(l),
                    "" === s.queue && (a(o).tweensContainer = l,
                    a(o).opts = s),
                    a(o).isAnimating = !0,
                    k === T - 1 ? (b.State.calls.push([L, h, s, null, P.resolver]),
                    !1 === b.State.isTicking && (b.State.isTicking = !0,
                    u())) : k++)
                }
                var r, o = this, s = f.extend({}, b.defaults, y), l = {};
                switch (a(o) === i && b.init(o),
                parseFloat(s.delay) && !1 !== s.queue && f.queue(o, s.queue, function(e) {
                    b.velocityQueueEntryFlag = !0,
                    a(o).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    }
                }),
                s.duration.toString().toLowerCase()) {
                case "fast":
                    s.duration = 200;
                    break;
                case "normal":
                    s.duration = m;
                    break;
                case "slow":
                    s.duration = 600;
                    break;
                default:
                    s.duration = parseFloat(s.duration) || 1
                }
                !1 !== b.mock && (!0 === b.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1,
                s.delay *= parseFloat(b.mock) || 1)),
                s.easing = c(s.easing, s.duration),
                s.begin && !v.isFunction(s.begin) && (s.begin = null),
                s.progress && !v.isFunction(s.progress) && (s.progress = null),
                s.complete && !v.isFunction(s.complete) && (s.complete = null),
                s.display !== i && null !== s.display && (s.display = s.display.toString().toLowerCase(),
                "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))),
                s.visibility !== i && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()),
                s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread,
                !1 === s.queue ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function(t, n) {
                    return !0 === n ? (P.promise && P.resolver(h),
                    !0) : (b.velocityQueueEntryFlag = !0,
                    void e(t))
                }),
                "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o)
            }
            var s, l, p, h, g, y, x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || v.isString(arguments[0].properties));
            if (v.isWrapped(this) ? (s = !1,
            p = 0,
            h = this,
            l = this) : (s = !0,
            p = 1,
            h = x ? arguments[0].elements || arguments[0].e : arguments[0]),
            h = o(h)) {
                x ? (g = arguments[0].properties || arguments[0].p,
                y = arguments[0].options || arguments[0].o) : (g = arguments[p],
                y = arguments[p + 1]);
                var T = h.length
                  , k = 0;
                if (!/^(stop|finish)$/i.test(g) && !f.isPlainObject(y)) {
                    var S = p + 1;
                    y = {};
                    for (var E = S; E < arguments.length; E++)
                        v.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? v.isString(arguments[E]) || v.isArray(arguments[E]) ? y.easing = arguments[E] : v.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                }
                var P = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                s && b.Promise && (P.promise = new b.Promise(function(e, t) {
                    P.resolver = e,
                    P.rejecter = t
                }
                ));
                var A;
                switch (g) {
                case "scroll":
                    A = "scroll";
                    break;
                case "reverse":
                    A = "reverse";
                    break;
                case "finish":
                case "stop":
                    f.each(h, function(e, t) {
                        a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout),
                        a(t).delayTimer.next && a(t).delayTimer.next(),
                        delete a(t).delayTimer)
                    });
                    var O = [];
                    return f.each(b.State.calls, function(e, t) {
                        t && f.each(t[1], function(n, r) {
                            var o = y === i ? "" : y;
                            return !0 !== o && t[2].queue !== o && (y !== i || !1 !== t[2].queue) || void f.each(h, function(n, i) {
                                i === r && ((!0 === y || v.isString(y)) && (f.each(f.queue(i, v.isString(y) ? y : ""), function(e, t) {
                                    v.isFunction(t) && t(null, !0)
                                }),
                                f.queue(i, v.isString(y) ? y : "", [])),
                                "stop" === g ? (a(i) && a(i).tweensContainer && !1 !== o && f.each(a(i).tweensContainer, function(e, t) {
                                    t.endValue = t.currentValue
                                }),
                                O.push(e)) : "finish" === g && (t[2].duration = 1))
                            })
                        })
                    }),
                    "stop" === g && (f.each(O, function(e, t) {
                        d(t, !0)
                    }),
                    P.promise && P.resolver(h)),
                    e();
                default:
                    if (!f.isPlainObject(g) || v.isEmptyObject(g)) {
                        if (v.isString(g) && b.Redirects[g]) {
                            var j = f.extend({}, y)
                              , N = j.duration
                              , D = j.delay || 0;
                            return !0 === j.backwards && (h = f.extend(!0, [], h).reverse()),
                            f.each(h, function(e, t) {
                                parseFloat(j.stagger) ? j.delay = D + parseFloat(j.stagger) * e : v.isFunction(j.stagger) && (j.delay = D + j.stagger.call(t, e, T)),
                                j.drag && (j.duration = parseFloat(N) || (/^(callout|transition)/.test(g) ? 1e3 : m),
                                j.duration = Math.max(j.duration * (j.backwards ? 1 - e / T : (e + 1) / T), .75 * j.duration, 200)),
                                b.Redirects[g].call(t, t, j || {}, e, T, h, P.promise ? P : i)
                            }),
                            e()
                        }
                        var q = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return P.promise && P.rejecter(new Error(q)),
                        e()
                    }
                    A = "start"
                }
                var M = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }
                  , L = [];
                f.each(h, function(e, t) {
                    v.isNode(t) && r.call(t)
                });
                var I, j = f.extend({}, b.defaults, y);
                if (j.loop = parseInt(j.loop),
                I = 2 * j.loop - 1,
                j.loop)
                    for (var H = 0; I > H; H++) {
                        var F = {
                            delay: j.delay,
                            progress: j.progress
                        };
                        H === I - 1 && (F.display = j.display,
                        F.visibility = j.visibility,
                        F.complete = j.complete),
                        C(h, "reverse", F)
                    }
                return e()
            }
        };
        b = f.extend(C, b),
        b.animate = C;
        var T = t.requestAnimationFrame || h;
        return b.State.isMobile || n.hidden === i || n.addEventListener("visibilitychange", function() {
            n.hidden ? (T = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }
            ,
            u()) : T = t.requestAnimationFrame || h
        }),
        e.Velocity = b,
        e !== t && (e.fn.velocity = C,
        e.fn.velocity.defaults = b.defaults),
        f.each(["Down", "Up"], function(e, t) {
            b.Redirects["slide" + t] = function(e, n, r, o, a, s) {
                var l = f.extend({}, n)
                  , c = l.begin
                  , u = l.complete
                  , d = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }
                  , p = {};
                l.display === i && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"),
                l.begin = function() {
                    c && c.call(a, a);
                    for (var n in d) {
                        p[n] = e.style[n];
                        var i = b.CSS.getPropertyValue(e, n);
                        d[n] = "Down" === t ? [i, 0] : [0, i]
                    }
                    p.overflow = e.style.overflow,
                    e.style.overflow = "hidden"
                }
                ,
                l.complete = function() {
                    for (var t in p)
                        e.style[t] = p[t];
                    u && u.call(a, a),
                    s && s.resolver(a)
                }
                ,
                b(e, d, l)
            }
        }),
        f.each(["In", "Out"], function(e, t) {
            b.Redirects["fade" + t] = function(e, n, r, o, a, s) {
                var l = f.extend({}, n)
                  , c = {
                    opacity: "In" === t ? 1 : 0
                }
                  , u = l.complete;
                l.complete = r !== o - 1 ? l.begin = null : function() {
                    u && u.call(a, a),
                    s && s.resolver(a)
                }
                ,
                l.display === i && (l.display = "In" === t ? "auto" : "none"),
                b(this, c, l)
            }
        }),
        b
    }(window.jQuery || window.Zepto || window, window, document)
})),
function(e, t, n, i) {
    "use strict";
    function r(e, t, n) {
        return setTimeout(u(e, n), t)
    }
    function o(e, t, n) {
        return !!Array.isArray(e) && (a(e, n[t], n),
        !0)
    }
    function a(e, t, n) {
        var r;
        if (e)
            if (e.forEach)
                e.forEach(t, n);
            else if (e.length !== i)
                for (r = 0; r < e.length; )
                    t.call(n, e[r], r, e),
                    r++;
            else
                for (r in e)
                    e.hasOwnProperty(r) && t.call(n, e[r], r, e)
    }
    function s(e, t, n) {
        for (var r = Object.keys(t), o = 0; o < r.length; )
            (!n || n && e[r[o]] === i) && (e[r[o]] = t[r[o]]),
            o++;
        return e
    }
    function l(e, t) {
        return s(e, t, !0)
    }
    function c(e, t, n) {
        var i, r = t.prototype;
        i = e.prototype = Object.create(r),
        i.constructor = e,
        i._super = r,
        n && s(i, n)
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function d(e, t) {
        return typeof e == ue ? e.apply(t ? t[0] || i : i, t) : e
    }
    function f(e, t) {
        return e === i ? t : e
    }
    function p(e, t, n) {
        a(m(t), function(t) {
            e.addEventListener(t, n, !1)
        })
    }
    function h(e, t, n) {
        a(m(t), function(t) {
            e.removeEventListener(t, n, !1)
        })
    }
    function v(e, t) {
        for (; e; ) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function g(e, t) {
        return e.indexOf(t) > -1
    }
    function m(e) {
        return e.trim().split(/\s+/g)
    }
    function y(e, t, n) {
        if (e.indexOf && !n)
            return e.indexOf(t);
        for (var i = 0; i < e.length; ) {
            if (n && e[i][n] == t || !n && e[i] === t)
                return i;
            i++
        }
        return -1
    }
    function b(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function x(e, t, n) {
        for (var i = [], r = [], o = 0; o < e.length; ) {
            var a = t ? e[o][t] : e[o];
            y(r, a) < 0 && i.push(e[o]),
            r[o] = a,
            o++
        }
        return n && (i = t ? i.sort(function(e, n) {
            return e[t] > n[t]
        }) : i.sort()),
        i
    }
    function w(e, t) {
        for (var n, r, o = t[0].toUpperCase() + t.slice(1), a = 0; a < le.length; ) {
            if (n = le[a],
            (r = n ? n + o : t)in e)
                return r;
            a++
        }
        return i
    }
    function C() {
        return he++
    }
    function T(e) {
        var t = e.ownerDocument;
        return t.defaultView || t.parentWindow
    }
    function k(e, t) {
        var n = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            d(e.options.enable, [e]) && n.handler(t)
        }
        ,
        this.init()
    }
    function S(e) {
        var t = e.options.inputClass;
        return new (t || (me ? W : ye ? _ : ge ? V : F))(e,E)
    }
    function E(e, t, n) {
        var i = n.pointers.length
          , r = n.changedPointers.length
          , o = t & Ce && 0 == i - r
          , a = t & (ke | Se) && 0 == i - r;
        n.isFirst = !!o,
        n.isFinal = !!a,
        o && (e.session = {}),
        n.eventType = t,
        P(e, n),
        e.emit("hammer.input", n),
        e.recognize(n),
        e.session.prevInput = n
    }
    function P(e, t) {
        var n = e.session
          , i = t.pointers
          , r = i.length;
        n.firstInput || (n.firstInput = j(t)),
        r > 1 && !n.firstMultiple ? n.firstMultiple = j(t) : 1 === r && (n.firstMultiple = !1);
        var o = n.firstInput
          , a = n.firstMultiple
          , s = a ? a.center : o.center
          , l = t.center = N(i);
        t.timeStamp = pe(),
        t.deltaTime = t.timeStamp - o.timeStamp,
        t.angle = L(s, l),
        t.distance = M(s, l),
        A(n, t),
        t.offsetDirection = q(t.deltaX, t.deltaY),
        t.scale = a ? H(a.pointers, i) : 1,
        t.rotation = a ? I(a.pointers, i) : 0,
        O(n, t);
        var c = e.element;
        v(t.srcEvent.target, c) && (c = t.srcEvent.target),
        t.target = c
    }
    function A(e, t) {
        var n = t.center
          , i = e.offsetDelta || {}
          , r = e.prevDelta || {}
          , o = e.prevInput || {};
        (t.eventType === Ce || o.eventType === ke) && (r = e.prevDelta = {
            x: o.deltaX || 0,
            y: o.deltaY || 0
        },
        i = e.offsetDelta = {
            x: n.x,
            y: n.y
        }),
        t.deltaX = r.x + (n.x - i.x),
        t.deltaY = r.y + (n.y - i.y)
    }
    function O(e, t) {
        var n, r, o, a, s = e.lastInterval || t, l = t.timeStamp - s.timeStamp;
        if (t.eventType != Se && (l > we || s.velocity === i)) {
            var c = s.deltaX - t.deltaX
              , u = s.deltaY - t.deltaY
              , d = D(l, c, u);
            r = d.x,
            o = d.y,
            n = fe(d.x) > fe(d.y) ? d.x : d.y,
            a = q(c, u),
            e.lastInterval = t
        } else
            n = s.velocity,
            r = s.velocityX,
            o = s.velocityY,
            a = s.direction;
        t.velocity = n,
        t.velocityX = r,
        t.velocityY = o,
        t.direction = a
    }
    function j(e) {
        for (var t = [], n = 0; n < e.pointers.length; )
            t[n] = {
                clientX: de(e.pointers[n].clientX),
                clientY: de(e.pointers[n].clientY)
            },
            n++;
        return {
            timeStamp: pe(),
            pointers: t,
            center: N(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function N(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: de(e[0].clientX),
                y: de(e[0].clientY)
            };
        for (var n = 0, i = 0, r = 0; t > r; )
            n += e[r].clientX,
            i += e[r].clientY,
            r++;
        return {
            x: de(n / t),
            y: de(i / t)
        }
    }
    function D(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }
    function q(e, t) {
        return e === t ? Ee : fe(e) >= fe(t) ? e > 0 ? Pe : Ae : t > 0 ? Oe : je
    }
    function M(e, t, n) {
        n || (n = Me);
        var i = t[n[0]] - e[n[0]]
          , r = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + r * r)
    }
    function L(e, t, n) {
        n || (n = Me);
        var i = t[n[0]] - e[n[0]]
          , r = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(r, i) / Math.PI
    }
    function I(e, t) {
        return L(t[1], t[0], Le) - L(e[1], e[0], Le)
    }
    function H(e, t) {
        return M(t[0], t[1], Le) / M(e[0], e[1], Le)
    }
    function F() {
        this.evEl = He,
        this.evWin = Fe,
        this.allow = !0,
        this.pressed = !1,
        k.apply(this, arguments)
    }
    function W() {
        this.evEl = $e,
        this.evWin = _e,
        k.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function z() {
        this.evTarget = Ve,
        this.evWin = Qe,
        this.started = !1,
        k.apply(this, arguments)
    }
    function $(e, t) {
        var n = b(e.touches)
          , i = b(e.changedTouches);
        return t & (ke | Se) && (n = x(n.concat(i), "identifier", !0)),
        [n, i]
    }
    function _() {
        this.evTarget = Be,
        this.targetIds = {},
        k.apply(this, arguments)
    }
    function R(e, t) {
        var n = b(e.touches)
          , i = this.targetIds;
        if (t & (Ce | Te) && 1 === n.length)
            return i[n[0].identifier] = !0,
            [n, n];
        var r, o, a = b(e.changedTouches), s = [], l = this.target;
        if (o = n.filter(function(e) {
            return v(e.target, l)
        }),
        t === Ce)
            for (r = 0; r < o.length; )
                i[o[r].identifier] = !0,
                r++;
        for (r = 0; r < a.length; )
            i[a[r].identifier] && s.push(a[r]),
            t & (ke | Se) && delete i[a[r].identifier],
            r++;
        return s.length ? [x(o.concat(s), "identifier", !0), s] : void 0
    }
    function V() {
        k.apply(this, arguments);
        var e = u(this.handler, this);
        this.touch = new _(this.manager,e),
        this.mouse = new F(this.manager,e)
    }
    function Q(e, t) {
        this.manager = e,
        this.set(t)
    }
    function X(e) {
        if (g(e, Ke))
            return Ke;
        var t = g(e, et)
          , n = g(e, tt);
        return t && n ? et + " " + tt : t || n ? t ? et : tt : g(e, Je) ? Je : Ze
    }
    function B(e) {
        this.id = C(),
        this.manager = null,
        this.options = l(e || {}, this.defaults),
        this.options.enable = f(this.options.enable, !0),
        this.state = nt,
        this.simultaneous = {},
        this.requireFail = []
    }
    function Y(e) {
        return e & st ? "cancel" : e & ot ? "end" : e & rt ? "move" : e & it ? "start" : ""
    }
    function U(e) {
        return e == je ? "down" : e == Oe ? "up" : e == Pe ? "left" : e == Ae ? "right" : ""
    }
    function G(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }
    function Z() {
        B.apply(this, arguments)
    }
    function J() {
        Z.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function K() {
        Z.apply(this, arguments)
    }
    function ee() {
        B.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function te() {
        Z.apply(this, arguments)
    }
    function ne() {
        Z.apply(this, arguments)
    }
    function ie() {
        B.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function re(e, t) {
        return t = t || {},
        t.recognizers = f(t.recognizers, re.defaults.preset),
        new oe(e,t)
    }
    function oe(e, t) {
        t = t || {},
        this.options = l(t, re.defaults),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.element = e,
        this.input = S(this),
        this.touchAction = new Q(this,this.options.touchAction),
        ae(this, !0),
        a(t.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        }, this)
    }
    function ae(e, t) {
        var n = e.element;
        a(e.options.cssProps, function(e, i) {
            n.style[w(n.style, i)] = t ? e : ""
        })
    }
    function se(e, n) {
        var i = t.createEvent("Event");
        i.initEvent(e, !0, !0),
        i.gesture = n,
        n.target.dispatchEvent(i)
    }
    var le = ["", "webkit", "moz", "MS", "ms", "o"]
      , ce = t.createElement("div")
      , ue = "function"
      , de = Math.round
      , fe = Math.abs
      , pe = Date.now
      , he = 1
      , ve = /mobile|tablet|ip(ad|hone|od)|android/i
      , ge = "ontouchstart"in e
      , me = w(e, "PointerEvent") !== i
      , ye = ge && ve.test(navigator.userAgent)
      , be = "touch"
      , xe = "mouse"
      , we = 25
      , Ce = 1
      , Te = 2
      , ke = 4
      , Se = 8
      , Ee = 1
      , Pe = 2
      , Ae = 4
      , Oe = 8
      , je = 16
      , Ne = Pe | Ae
      , De = Oe | je
      , qe = Ne | De
      , Me = ["x", "y"]
      , Le = ["clientX", "clientY"];
    k.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && p(this.element, this.evEl, this.domHandler),
            this.evTarget && p(this.target, this.evTarget, this.domHandler),
            this.evWin && p(T(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler),
            this.evTarget && h(this.target, this.evTarget, this.domHandler),
            this.evWin && h(T(this.element), this.evWin, this.domHandler)
        }
    };
    var Ie = {
        mousedown: Ce,
        mousemove: Te,
        mouseup: ke
    }
      , He = "mousedown"
      , Fe = "mousemove mouseup";
    c(F, k, {
        handler: function(e) {
            var t = Ie[e.type];
            t & Ce && 0 === e.button && (this.pressed = !0),
            t & Te && 1 !== e.which && (t = ke),
            this.pressed && this.allow && (t & ke && (this.pressed = !1),
            this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: xe,
                srcEvent: e
            }))
        }
    });
    var We = {
        pointerdown: Ce,
        pointermove: Te,
        pointerup: ke,
        pointercancel: Se,
        pointerout: Se
    }
      , ze = {
        2: be,
        3: "pen",
        4: xe,
        5: "kinect"
    }
      , $e = "pointerdown"
      , _e = "pointermove pointerup pointercancel";
    e.MSPointerEvent && ($e = "MSPointerDown",
    _e = "MSPointerMove MSPointerUp MSPointerCancel"),
    c(W, k, {
        handler: function(e) {
            var t = this.store
              , n = !1
              , i = e.type.toLowerCase().replace("ms", "")
              , r = We[i]
              , o = ze[e.pointerType] || e.pointerType
              , a = o == be
              , s = y(t, e.pointerId, "pointerId");
            r & Ce && (0 === e.button || a) ? 0 > s && (t.push(e),
            s = t.length - 1) : r & (ke | Se) && (n = !0),
            0 > s || (t[s] = e,
            this.callback(this.manager, r, {
                pointers: t,
                changedPointers: [e],
                pointerType: o,
                srcEvent: e
            }),
            n && t.splice(s, 1))
        }
    });
    var Re = {
        touchstart: Ce,
        touchmove: Te,
        touchend: ke,
        touchcancel: Se
    }
      , Ve = "touchstart"
      , Qe = "touchstart touchmove touchend touchcancel";
    c(z, k, {
        handler: function(e) {
            var t = Re[e.type];
            if (t === Ce && (this.started = !0),
            this.started) {
                var n = $.call(this, e, t);
                t & (ke | Se) && 0 == n[0].length - n[1].length && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: be,
                    srcEvent: e
                })
            }
        }
    });
    var Xe = {
        touchstart: Ce,
        touchmove: Te,
        touchend: ke,
        touchcancel: Se
    }
      , Be = "touchstart touchmove touchend touchcancel";
    c(_, k, {
        handler: function(e) {
            var t = Xe[e.type]
              , n = R.call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: be,
                srcEvent: e
            })
        }
    }),
    c(V, k, {
        handler: function(e, t, n) {
            var i = n.pointerType == be
              , r = n.pointerType == xe;
            if (i)
                this.mouse.allow = !1;
            else if (r && !this.mouse.allow)
                return;
            t & (ke | Se) && (this.mouse.allow = !0),
            this.callback(e, t, n)
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Ye = w(ce.style, "touchAction")
      , Ue = Ye !== i
      , Ge = "compute"
      , Ze = "auto"
      , Je = "manipulation"
      , Ke = "none"
      , et = "pan-x"
      , tt = "pan-y";
    Q.prototype = {
        set: function(e) {
            e == Ge && (e = this.compute()),
            Ue && (this.manager.element.style[Ye] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return a(this.manager.recognizers, function(t) {
                d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }),
            X(e.join(" "))
        },
        preventDefaults: function(e) {
            if (!Ue) {
                var t = e.srcEvent
                  , n = e.offsetDirection;
                if (this.manager.session.prevented)
                    return void t.preventDefault();
                var i = this.actions
                  , r = g(i, Ke)
                  , o = g(i, tt)
                  , a = g(i, et);
                return r || o && n & Ne || a && n & De ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var nt = 1
      , it = 2
      , rt = 4
      , ot = 8
      , at = ot
      , st = 16;
    B.prototype = {
        defaults: {},
        set: function(e) {
            return s(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (o(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return e = G(e, this),
            t[e.id] || (t[e.id] = e,
            e.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(e) {
            return o(e, "dropRecognizeWith", this) ? this : (e = G(e, this),
            delete this.simultaneous[e.id],
            this)
        },
        requireFailure: function(e) {
            if (o(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return e = G(e, this),
            -1 === y(t, e) && (t.push(e),
            e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (o(e, "dropRequireFailure", this))
                return this;
            e = G(e, this);
            var t = y(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                n.manager.emit(n.options.event + (t ? Y(i) : ""), e)
            }
            var n = this
              , i = this.state;
            ot > i && t(!0),
            t(),
            i >= ot && t(!0)
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void (this.state = 32)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
                if (!(this.requireFail[e].state & (32 | nt)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = s({}, e);
            return d(this.options.enable, [this, t]) ? (this.state & (at | st | 32) && (this.state = nt),
            this.state = this.process(t),
            void (this.state & (it | rt | ot | st) && this.tryEmit(t))) : (this.reset(),
            void (this.state = 32))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    },
    c(Z, B, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state
              , n = e.eventType
              , i = t & (it | rt)
              , r = this.attrTest(e);
            return i && (n & Se || !r) ? t | st : i || r ? n & ke ? t | ot : t & it ? t | rt : it : 32
        }
    }),
    c(J, Z, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: qe
        },
        getTouchAction: function() {
            var e = this.options.direction
              , t = [];
            return e & Ne && t.push(tt),
            e & De && t.push(et),
            t
        },
        directionTest: function(e) {
            var t = this.options
              , n = !0
              , i = e.distance
              , r = e.direction
              , o = e.deltaX
              , a = e.deltaY;
            return r & t.direction || (t.direction & Ne ? (r = 0 === o ? Ee : 0 > o ? Pe : Ae,
            n = o != this.pX,
            i = Math.abs(e.deltaX)) : (r = 0 === a ? Ee : 0 > a ? Oe : je,
            n = a != this.pY,
            i = Math.abs(e.deltaY))),
            e.direction = r,
            n && i > t.threshold && r & t.direction
        },
        attrTest: function(e) {
            return Z.prototype.attrTest.call(this, e) && (this.state & it || !(this.state & it) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = U(e.direction);
            t && this.manager.emit(this.options.event + t, e),
            this._super.emit.call(this, e)
        }
    }),
    c(K, Z, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ke]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & it)
        },
        emit: function(e) {
            if (this._super.emit.call(this, e),
            1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + t, e)
            }
        }
    }),
    c(ee, B, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Ze]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , o = e.deltaTime > t.time;
            if (this._input = e,
            !i || !n || e.eventType & (ke | Se) && !o)
                this.reset();
            else if (e.eventType & Ce)
                this.reset(),
                this._timer = r(function() {
                    this.state = at,
                    this.tryEmit()
                }, t.time, this);
            else if (e.eventType & ke)
                return at;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === at && (e && e.eventType & ke ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = pe(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    c(te, Z, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ke]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & it)
        }
    }),
    c(ne, Z, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Ne | De,
            pointers: 1
        },
        getTouchAction: function() {
            return J.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (Ne | De) ? t = e.velocity : n & Ne ? t = e.velocityX : n & De && (t = e.velocityY),
            this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && fe(t) > this.options.velocity && e.eventType & ke
        },
        emit: function(e) {
            var t = U(e.direction);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    c(ie, B, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Je]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , o = e.deltaTime < t.time;
            if (this.reset(),
            e.eventType & Ce && 0 === this.count)
                return this.failTimeout();
            if (i && o && n) {
                if (e.eventType != ke)
                    return this.failTimeout();
                var a = !this.pTime || e.timeStamp - this.pTime < t.interval
                  , s = !this.pCenter || M(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp,
                this.pCenter = e.center,
                s && a ? this.count += 1 : this.count = 1,
                this._input = e;
                if (0 === this.count % t.taps)
                    return this.hasRequireFailures() ? (this._timer = r(function() {
                        this.state = at,
                        this.tryEmit()
                    }, t.interval, this),
                    it) : at
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = r(function() {
                this.state = 32
            }, this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == at && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    re.VERSION = "2.0.4",
    re.defaults = {
        domEvents: !1,
        touchAction: Ge,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[te, {
            enable: !1
        }], [K, {
            enable: !1
        }, ["rotate"]], [ne, {
            direction: Ne
        }], [J, {
            direction: Ne
        }, ["swipe"]], [ie], [ie, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [ee]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    oe.prototype = {
        set: function(e) {
            return s(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(),
            this.input.target = e.inputTarget,
            this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var n, i = this.recognizers, r = t.curRecognizer;
                (!r || r && r.state & at) && (r = t.curRecognizer = null);
                for (var o = 0; o < i.length; )
                    n = i[o],
                    2 === t.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e),
                    !r && n.state & (it | rt | ot) && (r = t.curRecognizer = n),
                    o++
            }
        },
        get: function(e) {
            if (e instanceof B)
                return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e)
                    return t[n];
            return null
        },
        add: function(e) {
            if (o(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            e.manager = this,
            this.touchAction.update(),
            e
        },
        remove: function(e) {
            if (o(e, "remove", this))
                return this;
            var t = this.recognizers;
            return e = this.get(e),
            t.splice(y(t, e), 1),
            this.touchAction.update(),
            this
        },
        on: function(e, t) {
            var n = this.handlers;
            return a(m(e), function(e) {
                n[e] = n[e] || [],
                n[e].push(t)
            }),
            this
        },
        off: function(e, t) {
            var n = this.handlers;
            return a(m(e), function(e) {
                t ? n[e].splice(y(n[e], t), 1) : delete n[e]
            }),
            this
        },
        emit: function(e, t) {
            this.options.domEvents && se(e, t);
            var n = this.handlers[e] && this.handlers[e].slice();
            if (n && n.length) {
                t.type = e,
                t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                }
                ;
                for (var i = 0; i < n.length; )
                    n[i](t),
                    i++
            }
        },
        destroy: function() {
            this.element && ae(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    s(re, {
        INPUT_START: Ce,
        INPUT_MOVE: Te,
        INPUT_END: ke,
        INPUT_CANCEL: Se,
        STATE_POSSIBLE: nt,
        STATE_BEGAN: it,
        STATE_CHANGED: rt,
        STATE_ENDED: ot,
        STATE_RECOGNIZED: at,
        STATE_CANCELLED: st,
        STATE_FAILED: 32,
        DIRECTION_NONE: Ee,
        DIRECTION_LEFT: Pe,
        DIRECTION_RIGHT: Ae,
        DIRECTION_UP: Oe,
        DIRECTION_DOWN: je,
        DIRECTION_HORIZONTAL: Ne,
        DIRECTION_VERTICAL: De,
        DIRECTION_ALL: qe,
        Manager: oe,
        Input: k,
        TouchAction: Q,
        TouchInput: _,
        MouseInput: F,
        PointerEventInput: W,
        TouchMouseInput: V,
        SingleTouchInput: z,
        Recognizer: B,
        AttrRecognizer: Z,
        Tap: ie,
        Pan: J,
        Swipe: ne,
        Pinch: K,
        Rotate: te,
        Press: ee,
        on: p,
        off: h,
        each: a,
        merge: l,
        extend: s,
        inherit: c,
        bindFn: u,
        prefixed: w
    }),
    typeof define == ue && define.amd ? define(function() {
        return re
    }) : "undefined" != typeof module && module.exports ? module.exports = re : e.Hammer = re
}(window, document),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function(e, t) {
    function n(n, i) {
        var r = e(n);
        r.data("hammer") || r.data("hammer", new t(r[0],i))
    }
    e.fn.hammer = function(e) {
        return this.each(function() {
            n(this, e)
        })
    }
    ,
    t.Manager.prototype.emit = function(t) {
        return function(n, i) {
            t.call(this, n, i),
            e(this.element).trigger({
                type: n,
                gesture: i
            })
        }
    }(t.Manager.prototype.emit)
}),
function(e) {
    e.Package ? Materialize = {} : e.Materialize = {}
}(window),
function(e) {
    for (var t = 0, n = ["webkit", "moz"], i = e.requestAnimationFrame, r = e.cancelAnimationFrame, o = n.length; --o >= 0 && !i; )
        i = e[n[o] + "RequestAnimationFrame"],
        r = e[n[o] + "CancelRequestAnimationFrame"];
    i && r || (i = function(e) {
        var n = +Date.now()
          , i = Math.max(t + 16, n);
        return setTimeout(function() {
            e(t = i)
        }, i - n)
    }
    ,
    r = clearTimeout),
    e.requestAnimationFrame = i,
    e.cancelAnimationFrame = r
}(window),
Materialize.objectSelectorString = function(e) {
    return ((e.prop("tagName") || "") + (e.attr("id") || "") + (e.attr("class") || "")).replace(/\s/g, "")
}
,
Materialize.guid = function() {
    function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
}(),
Materialize.escapeHash = function(e) {
    return e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}
,
Materialize.elementOrParentIsFixed = function(e) {
    var t = $(e)
      , n = t.add(t.parents())
      , i = !1;
    return n.each(function() {
        if ("fixed" === $(this).css("position"))
            return i = !0,
            !1
    }),
    i
}
;
var getTime = Date.now || function() {
    return (new Date).getTime()
}
;
Materialize.throttle = function(e, t, n) {
    var i, r, o, a = null, s = 0;
    n || (n = {});
    var l = function() {
        s = !1 === n.leading ? 0 : getTime(),
        a = null,
        o = e.apply(i, r),
        i = r = null
    };
    return function() {
        var c = getTime();
        s || !1 !== n.leading || (s = c);
        var u = t - (c - s);
        return i = this,
        r = arguments,
        u <= 0 ? (clearTimeout(a),
        a = null,
        s = c,
        o = e.apply(i, r),
        i = r = null) : a || !1 === n.trailing || (a = setTimeout(l, u)),
        o
    }
}
;
var Vel;
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
function(e) {
    e.fn.collapsible = function(t, n) {
        var i = {
            accordion: void 0,
            onOpen: void 0,
            onClose: void 0
        }
          , r = t;
        return t = e.extend(i, t),
        this.each(function() {
            function i(t) {
                d = u.find("> li > .collapsible-header"),
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"),
                t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }),
                d.not(t).removeClass("active").parent().removeClass("active"),
                d.not(t).parent().children(".collapsible-body").stop(!0, !1).each(function() {
                    e(this).is(":visible") && e(this).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", ""),
                            s(e(this).siblings(".collapsible-header"))
                        }
                    })
                })
            }
            function o(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"),
                t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }
            function a(e) {
                e.toggleClass("active"),
                t.accordion || "accordion" === f || void 0 === f ? i(e) : o(e),
                s(e)
            }
            function s(e) {
                e.hasClass("active") ? "function" == typeof t.onOpen && t.onOpen.call(this, e.parent()) : "function" == typeof t.onClose && t.onClose.call(this, e.parent())
            }
            function l(e) {
                return c(e).length > 0
            }
            function c(e) {
                return e.closest("li > .collapsible-header")
            }
            var u = e(this)
              , d = e(this).find("> li > .collapsible-header")
              , f = u.data("collapsible");
            if (n >= 0 && n < d.length) {
                var p = d.eq(n);
                return void (p.length && ("open" === r || "close" === r && p.hasClass("active")) && a(p))
            }
            u.off("click.collapse", "> li > .collapsible-header"),
            d.off("click.collapse"),
            u.on("click.collapse", "> li > .collapsible-header", function(t) {
                var n = e(t.target);
                l(n) && (n = c(n)),
                a(n)
            }),
            t.accordion || "accordion" === f || void 0 === f ? a(d.filter(".active").first()) : d.filter(".active").each(function() {
                a(e(this))
            })
        })
    }
    ,
    e(document).ready(function() {
        e(".collapsible").collapsible()
    })
}(jQuery),
function(e) {
    e.fn.scrollTo = function(t) {
        return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top),
        this
    }
    ,
    e.fn.dropdown = function(t) {
        var n = {
            inDuration: 300,
            outDuration: 225,
            constrainWidth: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left",
            stopPropagation: !1
        };
        return "open" === t ? (this.each(function() {
            e(this).trigger("open")
        }),
        !1) : "close" === t ? (this.each(function() {
            e(this).trigger("close")
        }),
        !1) : void this.each(function() {
            function i() {
                void 0 !== a.data("induration") && (s.inDuration = a.data("induration")),
                void 0 !== a.data("outduration") && (s.outDuration = a.data("outduration")),
                void 0 !== a.data("constrainwidth") && (s.constrainWidth = a.data("constrainwidth")),
                void 0 !== a.data("hover") && (s.hover = a.data("hover")),
                void 0 !== a.data("gutter") && (s.gutter = a.data("gutter")),
                void 0 !== a.data("beloworigin") && (s.belowOrigin = a.data("beloworigin")),
                void 0 !== a.data("alignment") && (s.alignment = a.data("alignment")),
                void 0 !== a.data("stoppropagation") && (s.stopPropagation = a.data("stoppropagation"))
            }
            function r(t) {
                "focus" === t && (l = !0),
                i(),
                c.addClass("active"),
                a.addClass("active"),
                !0 === s.constrainWidth ? c.css("width", a.outerWidth()) : c.css("white-space", "nowrap");
                var n = window.innerHeight
                  , r = a.innerHeight()
                  , u = a.offset().left
                  , d = a.offset().top - e(window).scrollTop()
                  , f = s.alignment
                  , p = 0
                  , h = 0
                  , v = 0;
                !0 === s.belowOrigin && (v = r);
                var g = 0
                  , m = 0
                  , y = a.parent();
                if (y.is("body") || (y[0].scrollHeight > y[0].clientHeight && (g = y[0].scrollTop),
                y[0].scrollWidth > y[0].clientWidth && (m = y[0].scrollLeft)),
                u + c.innerWidth() > e(window).width() ? f = "right" : u - c.innerWidth() + a.innerWidth() < 0 && (f = "left"),
                d + c.innerHeight() > n)
                    if (d + r - c.innerHeight() < 0) {
                        var b = n - d - v;
                        c.css("max-height", b)
                    } else
                        v || (v += r),
                        v -= c.innerHeight();
                if ("left" === f)
                    p = s.gutter,
                    h = a.position().left + p;
                else if ("right" === f) {
                    var x = a.position().left + a.outerWidth() - c.outerWidth();
                    p = -s.gutter,
                    h = x + p
                }
                c.css({
                    position: "absolute",
                    top: a.position().top + v + g,
                    left: h + m
                }),
                c.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        e(this).css("height", "")
                    }
                }).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutSine"
                }),
                e(document).bind("click." + c.attr("id") + " touchstart." + c.attr("id"), function(t) {
                    c.is(t.target) || a.is(t.target) || c.find(t.target).length || (o(),
                    e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")))
                })
            }
            function o() {
                l = !1,
                c.fadeOut(s.outDuration),
                c.removeClass("active"),
                a.removeClass("active"),
                e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id")),
                setTimeout(function() {
                    c.css("max-height", "")
                }, s.outDuration)
            }
            var a = e(this)
              , s = e.extend({}, n, t)
              , l = !1
              , c = e("#" + a.attr("data-activates"));
            if (i(),
            a.after(c),
            s.hover) {
                var u = !1;
                a.unbind("click." + a.attr("id")),
                a.on("mouseenter", function(e) {
                    !1 === u && (r(),
                    u = !0)
                }),
                a.on("mouseleave", function(t) {
                    var n = t.toElement || t.relatedTarget;
                    e(n).closest(".dropdown-content").is(c) || (c.stop(!0, !0),
                    o(),
                    u = !1)
                }),
                c.on("mouseleave", function(t) {
                    var n = t.toElement || t.relatedTarget;
                    e(n).closest(".dropdown-button").is(a) || (c.stop(!0, !0),
                    o(),
                    u = !1)
                })
            } else
                a.unbind("click." + a.attr("id")),
                a.bind("click." + a.attr("id"), function(t) {
                    l || (a[0] != t.currentTarget || a.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? a.hasClass("active") && (o(),
                    e(document).unbind("click." + c.attr("id") + " touchstart." + c.attr("id"))) : (t.preventDefault(),
                    s.stopPropagation && t.stopPropagation(),
                    r("click")))
                });
            a.on("open", function(e, t) {
                r(t)
            }),
            a.on("close", o)
        })
    }
    ,
    e(document).ready(function() {
        e(".dropdown-button").dropdown()
    })
}(jQuery),
function(e) {
    var t = 0
      , n = 0
      , i = function() {
        return "materialize-modal-overlay-" + ++n
    }
      , r = {
        init: function(n) {
            var r = {
                opacity: .5,
                inDuration: 350,
                outDuration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0,
                startingTop: "4%",
                endingTop: "10%"
            };
            return n = e.extend(r, n),
            this.each(function() {
                var r = e(this)
                  , o = e(this).attr("id") || "#" + e(this).data("target")
                  , a = function() {
                    var i = r.data("overlay-id")
                      , o = e("#" + i);
                    r.removeClass("open"),
                    e("body").css({
                        overflow: "",
                        width: ""
                    }),
                    r.find(".modal-close").off("click.close"),
                    e(document).off("keyup.modal" + i),
                    o.velocity({
                        opacity: 0
                    }, {
                        duration: n.outDuration,
                        queue: !1,
                        ease: "easeOutQuart"
                    });
                    var a = {
                        duration: n.outDuration,
                        queue: !1,
                        ease: "easeOutCubic",
                        complete: function() {
                            e(this).css({
                                display: "none"
                            }),
                            "function" == typeof n.complete && n.complete.call(this, r),
                            o.remove(),
                            t--
                        }
                    };
                    r.hasClass("bottom-sheet") ? r.velocity({
                        bottom: "-100%",
                        opacity: 0
                    }, a) : r.velocity({
                        top: n.startingTop,
                        opacity: 0,
                        scaleX: .7
                    }, a)
                }
                  , s = function(o) {
                    var s = e("body")
                      , l = s.innerWidth();
                    if (s.css("overflow", "hidden"),
                    s.width(l),
                    !r.hasClass("open")) {
                        var c = i()
                          , u = e('<div class="modal-overlay"></div>');
                        lStack = ++t,
                        u.attr("id", c).css("z-index", 1e3 + 2 * lStack),
                        r.data("overlay-id", c).css("z-index", 1e3 + 2 * lStack + 1),
                        r.addClass("open"),
                        e("body").append(u),
                        n.dismissible && (u.click(function() {
                            a()
                        }),
                        e(document).on("keyup.modal" + c, function(e) {
                            27 === e.keyCode && a()
                        })),
                        r.find(".modal-close").on("click.close", function(e) {
                            a()
                        }),
                        u.css({
                            display: "block",
                            opacity: 0
                        }),
                        r.css({
                            display: "block",
                            opacity: 0
                        }),
                        u.velocity({
                            opacity: n.opacity
                        }, {
                            duration: n.inDuration,
                            queue: !1,
                            ease: "easeOutCubic"
                        }),
                        r.data("associated-overlay", u[0]);
                        var d = {
                            duration: n.inDuration,
                            queue: !1,
                            ease: "easeOutCubic",
                            complete: function() {
                                "function" == typeof n.ready && n.ready.call(this, r, o)
                            }
                        };
                        r.hasClass("bottom-sheet") ? r.velocity({
                            bottom: "0",
                            opacity: 1
                        }, d) : (e.Velocity.hook(r, "scaleX", .7),
                        r.css({
                            top: n.startingTop
                        }),
                        r.velocity({
                            top: n.endingTop,
                            opacity: 1,
                            scaleX: "1"
                        }, d))
                    }
                };
                e(document).off("click.modalTrigger", 'a[href="#' + o + '"], [data-target="' + o + '"]'),
                e(this).off("openModal"),
                e(this).off("closeModal"),
                e(document).on("click.modalTrigger", 'a[href="#' + o + '"], [data-target="' + o + '"]', function(t) {
                    n.startingTop = (e(this).offset().top - e(window).scrollTop()) / 1.15,
                    s(e(this)),
                    t.preventDefault()
                }),
                e(this).on("openModal", function() {
                    e(this).attr("href") || e(this).data("target"),
                    s()
                }),
                e(this).on("closeModal", function() {
                    a()
                })
            })
        },
        open: function() {
            e(this).trigger("openModal")
        },
        close: function() {
            e(this).trigger("closeModal")
        }
    };
    e.fn.modal = function(t) {
        return r[t] ? r[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.modal") : r.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    e.fn.materialbox = function() {
        return this.each(function() {
            function t() {
                o = !1;
                var t = l.parent(".material-placeholder")
                  , i = (window.innerWidth,
                window.innerHeight,
                l.data("width"))
                  , a = l.data("height");
                l.velocity("stop", !0),
                e("#materialbox-overlay").velocity("stop", !0),
                e(".materialbox-caption").velocity("stop", !0),
                e("#materialbox-overlay").velocity({
                    opacity: 0
                }, {
                    duration: s,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        r = !1,
                        e(this).remove()
                    }
                }),
                l.velocity({
                    width: i,
                    height: a,
                    left: 0,
                    top: 0
                }, {
                    duration: s,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }),
                        l.removeAttr("style"),
                        l.attr("style", u),
                        l.removeClass("active"),
                        o = !0,
                        n && n.css("overflow", "")
                    }
                }),
                e(".materialbox-caption").velocity({
                    opacity: 0
                }, {
                    duration: s,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        e(this).remove()
                    }
                })
            }
            if (!e(this).hasClass("initialized")) {
                e(this).addClass("initialized");
                var n, i, r = !1, o = !0, a = 275, s = 200, l = e(this), c = e("<div></div>").addClass("material-placeholder"), u = l.attr("style");
                l.wrap(c),
                l.on("click", function() {
                    var s = l.parent(".material-placeholder")
                      , c = window.innerWidth
                      , u = window.innerHeight
                      , d = l.width()
                      , f = l.height();
                    if (!1 === o)
                        return t(),
                        !1;
                    if (r && !0 === o)
                        return t(),
                        !1;
                    for (o = !1,
                    l.addClass("active"),
                    r = !0,
                    s.css({
                        width: s[0].getBoundingClientRect().width,
                        height: s[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }),
                    n = void 0,
                    i = s[0].parentNode; null !== i && !e(i).is(document); ) {
                        var p = e(i);
                        "visible" !== p.css("overflow") && (p.css("overflow", "visible"),
                        n = void 0 === n ? p : n.add(p)),
                        i = i.parentNode
                    }
                    l.css({
                        position: "absolute",
                        "z-index": 1e3,
                        "will-change": "left, top, width, height"
                    }).data("width", d).data("height", f);
                    var h = e('<div id="materialbox-overlay"></div>').css({
                        opacity: 0
                    }).click(function() {
                        !0 === o && t()
                    });
                    l.before(h);
                    var v = h[0].getBoundingClientRect();
                    if (h.css({
                        width: c,
                        height: u,
                        left: -1 * v.left,
                        top: -1 * v.top
                    }),
                    h.velocity({
                        opacity: 1
                    }, {
                        duration: a,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    "" !== l.data("caption")) {
                        var g = e('<div class="materialbox-caption"></div>');
                        g.text(l.data("caption")),
                        e("body").append(g),
                        g.css({
                            display: "inline"
                        }),
                        g.velocity({
                            opacity: 1
                        }, {
                            duration: a,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                    var m = 0
                      , y = d / c
                      , b = f / u
                      , x = 0
                      , w = 0;
                    y > b ? (m = f / d,
                    x = .9 * c,
                    w = .9 * c * m) : (m = d / f,
                    x = .9 * u * m,
                    w = .9 * u),
                    l.hasClass("responsive-img") ? l.velocity({
                        "max-width": x,
                        width: d
                    }, {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                            l.css({
                                left: 0,
                                top: 0
                            }).velocity({
                                height: w,
                                width: x,
                                left: e(document).scrollLeft() + c / 2 - l.parent(".material-placeholder").offset().left - x / 2,
                                top: e(document).scrollTop() + u / 2 - l.parent(".material-placeholder").offset().top - w / 2
                            }, {
                                duration: a,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    o = !0
                                }
                            })
                        }
                    }) : l.css("left", 0).css("top", 0).velocity({
                        height: w,
                        width: x,
                        left: e(document).scrollLeft() + c / 2 - l.parent(".material-placeholder").offset().left - x / 2,
                        top: e(document).scrollTop() + u / 2 - l.parent(".material-placeholder").offset().top - w / 2
                    }, {
                        duration: a,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            o = !0
                        }
                    })
                }),
                e(window).scroll(function() {
                    r && t()
                }),
                e(document).keyup(function(e) {
                    27 === e.keyCode && !0 === o && r && t()
                })
            }
        })
    }
    ,
    e(document).ready(function() {
        e(".materialboxed").materialbox()
    })
}(jQuery),
function(e) {
    e.fn.parallax = function() {
        var t = e(window).width();
        return this.each(function(n) {
            function i(n) {
                var i;
                i = t < 601 ? r.height() > 0 ? r.height() : r.children("img").height() : r.height() > 0 ? r.height() : 500;
                var o = r.children("img").first()
                  , a = o.height()
                  , s = a - i
                  , l = r.offset().top + i
                  , c = r.offset().top
                  , u = e(window).scrollTop()
                  , d = window.innerHeight
                  , f = u + d
                  , p = (f - c) / (i + d)
                  , h = Math.round(s * p);
                n && o.css("display", "block"),
                l > u && c < u + d && o.css("transform", "translate3D(-50%," + h + "px, 0)")
            }
            var r = e(this);
            r.addClass("parallax"),
            r.children("img").one("load", function() {
                i(!0)
            }).each(function() {
                this.complete && e(this).trigger("load")
            }),
            e(window).scroll(function() {
                t = e(window).width(),
                i(!1)
            }),
            e(window).resize(function() {
                t = e(window).width(),
                i(!1)
            })
        })
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var n = {
                onShow: null,
                swipeable: !1,
                responsiveThreshold: 1 / 0
            };
            return t = e.extend(n, t),
            this.each(function() {
                var n, i, r, o, a, s = e(this), l = e(window).width(), c = s.find("li.tab a"), u = s.width(), d = e(), f = Math.max(u, s[0].scrollWidth) / c.length, p = prev_index = 0, h = !1, v = 300, g = function(e) {
                    return u - e.position().left - e.outerWidth() - s.scrollLeft()
                }, m = function(e) {
                    return e.position().left + s.scrollLeft()
                }, y = function(e) {
                    p - e >= 0 ? (o.velocity({
                        right: g(n)
                    }, {
                        duration: v,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    o.velocity({
                        left: m(n)
                    }, {
                        duration: v,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (o.velocity({
                        left: m(n)
                    }, {
                        duration: v,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    o.velocity({
                        right: g(n)
                    }, {
                        duration: v,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    }))
                };
                t.swipeable && l > t.responsiveThreshold && (t.swipeable = !1),
                n = e(c.filter('[href="' + location.hash + '"]')),
                0 === n.length && (n = e(this).find("li.tab a.active").first()),
                0 === n.length && (n = e(this).find("li.tab a").first()),
                n.addClass("active"),
                p = c.index(n),
                p < 0 && (p = 0),
                void 0 !== n[0] && (i = e(n[0].hash),
                i.addClass("active")),
                s.find(".indicator").length || s.append('<div class="indicator"></div>'),
                o = s.find(".indicator"),
                s.append(o),
                s.is(":visible") && setTimeout(function() {
                    o.css({
                        right: g(n)
                    }),
                    o.css({
                        left: m(n)
                    })
                }, 0),
                e(window).off("resize.tabs").on("resize.tabs", function() {
                    u = s.width(),
                    f = Math.max(u, s[0].scrollWidth) / c.length,
                    p < 0 && (p = 0),
                    0 !== f && 0 !== u && (o.css({
                        right: g(n)
                    }),
                    o.css({
                        left: m(n)
                    }))
                }),
                t.swipeable ? (c.each(function() {
                    var t = e(Materialize.escapeHash(this.hash));
                    t.addClass("carousel-item"),
                    d = d.add(t)
                }),
                r = d.wrapAll('<div class="tabs-content carousel"></div>'),
                d.css("display", ""),
                e(".tabs-content.carousel").carousel({
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(e) {
                        if (!h) {
                            var t = p;
                            p = r.index(e),
                            n = c.eq(p),
                            y(t)
                        }
                    }
                })) : c.not(n).each(function() {
                    e(Materialize.escapeHash(this.hash)).hide()
                }),
                s.off("click.tabs").on("click.tabs", "a", function(r) {
                    if (e(this).parent().hasClass("disabled"))
                        return void r.preventDefault();
                    if (!e(this).attr("target")) {
                        h = !0,
                        u = s.width(),
                        f = Math.max(u, s[0].scrollWidth) / c.length,
                        n.removeClass("active");
                        var o = i;
                        n = e(this),
                        i = e(Materialize.escapeHash(this.hash)),
                        c = s.find("li.tab a"),
                        n.position(),
                        n.addClass("active"),
                        prev_index = p,
                        p = c.index(e(this)),
                        p < 0 && (p = 0),
                        t.swipeable ? d.length && d.carousel("set", p) : (void 0 !== i && (i.show(),
                        i.addClass("active"),
                        "function" == typeof t.onShow && t.onShow.call(this, i)),
                        void 0 === o || o.is(i) || (o.hide(),
                        o.removeClass("active"))),
                        a = setTimeout(function() {
                            h = !1
                        }, v),
                        y(prev_index),
                        r.preventDefault()
                    }
                })
            })
        },
        select_tab: function(e) {
            this.find('a[href="#' + e + '"]').trigger("click")
        }
    };
    e.fn.tabs = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tabs") : t.init.apply(this, arguments)
    }
    ,
    e(document).ready(function() {
        e("ul.tabs").tabs()
    })
}(jQuery),
function(e) {
    e.fn.tooltip = function(n) {
        var i = {
            delay: 350,
            tooltip: "",
            position: "bottom",
            html: !1
        };
        return "remove" === n ? (this.each(function() {
            e("#" + e(this).attr("data-tooltip-id")).remove(),
            e(this).off("mouseenter.tooltip mouseleave.tooltip")
        }),
        !1) : (n = e.extend(i, n),
        this.each(function() {
            var i = Materialize.guid()
              , r = e(this);
            r.attr("data-tooltip-id") && e("#" + r.attr("data-tooltip-id")).remove(),
            r.attr("data-tooltip-id", i);
            var o, a, s, l, c, u, d = function() {
                o = r.attr("data-html") ? "true" === r.attr("data-html") : n.html,
                a = r.attr("data-delay"),
                a = void 0 === a || "" === a ? n.delay : a,
                s = r.attr("data-position"),
                s = void 0 === s || "" === s ? n.position : s,
                l = r.attr("data-tooltip"),
                l = void 0 === l || "" === l ? n.tooltip : l
            };
            d();
            c = function() {
                var t = e('<div class="material-tooltip"></div>');
                return l = o ? e("<span></span>").html(l) : e("<span></span>").text(l),
                t.append(l).appendTo(e("body")).attr("id", i),
                u = e('<div class="backdrop"></div>'),
                u.appendTo(t),
                t
            }(),
            r.off("mouseenter.tooltip mouseleave.tooltip");
            var f, p = !1;
            r.on({
                "mouseenter.tooltip": function(e) {
                    var n = function() {
                        d(),
                        p = !0,
                        c.velocity("stop"),
                        u.velocity("stop"),
                        c.css({
                            visibility: "visible",
                            left: "0px",
                            top: "0px"
                        });
                        var e, n, i, o = r.outerWidth(), a = r.outerHeight(), l = c.outerHeight(), f = c.outerWidth(), h = "0px", v = "0px", g = u[0].offsetWidth, m = u[0].offsetHeight, y = 8, b = 8, x = 0;
                        "top" === s ? (e = r.offset().top - l - 5,
                        n = r.offset().left + o / 2 - f / 2,
                        i = t(n, e, f, l),
                        h = "-10px",
                        u.css({
                            bottom: 0,
                            left: 0,
                            borderRadius: "14px 14px 0 0",
                            transformOrigin: "50% 100%",
                            marginTop: l,
                            marginLeft: f / 2 - g / 2
                        })) : "left" === s ? (e = r.offset().top + a / 2 - l / 2,
                        n = r.offset().left - f - 5,
                        i = t(n, e, f, l),
                        v = "-10px",
                        u.css({
                            top: "-7px",
                            right: 0,
                            width: "14px",
                            height: "14px",
                            borderRadius: "14px 0 0 14px",
                            transformOrigin: "95% 50%",
                            marginTop: l / 2,
                            marginLeft: f
                        })) : "right" === s ? (e = r.offset().top + a / 2 - l / 2,
                        n = r.offset().left + o + 5,
                        i = t(n, e, f, l),
                        v = "+10px",
                        u.css({
                            top: "-7px",
                            left: 0,
                            width: "14px",
                            height: "14px",
                            borderRadius: "0 14px 14px 0",
                            transformOrigin: "5% 50%",
                            marginTop: l / 2,
                            marginLeft: "0px"
                        })) : (e = r.offset().top + r.outerHeight() + 5,
                        n = r.offset().left + o / 2 - f / 2,
                        i = t(n, e, f, l),
                        h = "+10px",
                        u.css({
                            top: 0,
                            left: 0,
                            marginLeft: f / 2 - g / 2
                        })),
                        c.css({
                            top: i.y,
                            left: i.x
                        }),
                        y = Math.SQRT2 * f / parseInt(g),
                        b = Math.SQRT2 * l / parseInt(m),
                        x = Math.max(y, b),
                        c.velocity({
                            translateY: h,
                            translateX: v
                        }, {
                            duration: 350,
                            queue: !1
                        }).velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            delay: 50,
                            queue: !1
                        }),
                        u.css({
                            visibility: "visible"
                        }).velocity({
                            opacity: 1
                        }, {
                            duration: 55,
                            delay: 0,
                            queue: !1
                        }).velocity({
                            scaleX: x,
                            scaleY: x
                        }, {
                            duration: 300,
                            delay: 0,
                            queue: !1,
                            easing: "easeInOutQuad"
                        })
                    };
                    f = setTimeout(n, a)
                },
                "mouseleave.tooltip": function() {
                    p = !1,
                    clearTimeout(f),
                    setTimeout(function() {
                        !0 !== p && (c.velocity({
                            opacity: 0,
                            translateY: 0,
                            translateX: 0
                        }, {
                            duration: 225,
                            queue: !1
                        }),
                        u.velocity({
                            opacity: 0,
                            scaleX: 1,
                            scaleY: 1
                        }, {
                            duration: 225,
                            queue: !1,
                            complete: function() {
                                u.css({
                                    visibility: "hidden"
                                }),
                                c.css({
                                    visibility: "hidden"
                                }),
                                p = !1
                            }
                        }))
                    }, 225)
                }
            })
        }))
    }
    ;
    var t = function(t, n, i, r) {
        var o = t
          , a = n;
        return o < 0 ? o = 4 : o + i > window.innerWidth && (o -= o + i - window.innerWidth),
        a < 0 ? a = 4 : a + r > window.innerHeight + e(window).scrollTop && (a -= a + r - window.innerHeight),
        {
            x: o,
            y: a
        }
    };
    e(document).ready(function() {
        e(".tooltipped").tooltip()
    })
}(jQuery),
function(e) {
    "use strict";
    function t(e) {
        return null !== e && e === e.window
    }
    function n(e) {
        return t(e) ? e : 9 === e.nodeType && e.defaultView
    }
    function i(e) {
        var t, i, r = {
            top: 0,
            left: 0
        }, o = e && e.ownerDocument;
        return t = o.documentElement,
        void 0 !== e.getBoundingClientRect && (r = e.getBoundingClientRect()),
        i = n(o),
        {
            top: r.top + i.pageYOffset - t.clientTop,
            left: r.left + i.pageXOffset - t.clientLeft
        }
    }
    function r(e) {
        var t = "";
        for (var n in e)
            e.hasOwnProperty(n) && (t += n + ":" + e[n] + ";");
        return t
    }
    function o(e) {
        if (!1 === u.allowEvent(e))
            return null;
        for (var t = null, n = e.target || e.srcElement; null !== n.parentElement; ) {
            if (!(n instanceof SVGElement || -1 === n.className.indexOf("waves-effect"))) {
                t = n;
                break
            }
            if (n.classList.contains("waves-effect")) {
                t = n;
                break
            }
            n = n.parentElement
        }
        return t
    }
    function a(t) {
        var n = o(t);
        null !== n && (c.show(t, n),
        "ontouchstart"in e && (n.addEventListener("touchend", c.hide, !1),
        n.addEventListener("touchcancel", c.hide, !1)),
        n.addEventListener("mouseup", c.hide, !1),
        n.addEventListener("mouseleave", c.hide, !1))
    }
    var s = s || {}
      , l = document.querySelectorAll.bind(document)
      , c = {
        duration: 750,
        show: function(e, t) {
            if (2 === e.button)
                return !1;
            var n = t || this
              , o = document.createElement("div");
            o.className = "waves-ripple",
            n.appendChild(o);
            var a = i(n)
              , s = e.pageY - a.top
              , l = e.pageX - a.left
              , u = "scale(" + n.clientWidth / 100 * 10 + ")";
            "touches"in e && (s = e.touches[0].pageY - a.top,
            l = e.touches[0].pageX - a.left),
            o.setAttribute("data-hold", Date.now()),
            o.setAttribute("data-scale", u),
            o.setAttribute("data-x", l),
            o.setAttribute("data-y", s);
            var d = {
                top: s + "px",
                left: l + "px"
            };
            o.className = o.className + " waves-notransition",
            o.setAttribute("style", r(d)),
            o.className = o.className.replace("waves-notransition", ""),
            d["-webkit-transform"] = u,
            d["-moz-transform"] = u,
            d["-ms-transform"] = u,
            d["-o-transform"] = u,
            d.transform = u,
            d.opacity = "1",
            d["-webkit-transition-duration"] = c.duration + "ms",
            d["-moz-transition-duration"] = c.duration + "ms",
            d["-o-transition-duration"] = c.duration + "ms",
            d["transition-duration"] = c.duration + "ms",
            d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            o.setAttribute("style", r(d))
        },
        hide: function(e) {
            u.touchup(e);
            var t = this
              , n = (t.clientWidth,
            null)
              , i = t.getElementsByClassName("waves-ripple");
            if (!(i.length > 0))
                return !1;
            n = i[i.length - 1];
            var o = n.getAttribute("data-x")
              , a = n.getAttribute("data-y")
              , s = n.getAttribute("data-scale")
              , l = Date.now() - Number(n.getAttribute("data-hold"))
              , d = 350 - l;
            d < 0 && (d = 0),
            setTimeout(function() {
                var e = {
                    top: a + "px",
                    left: o + "px",
                    opacity: "0",
                    "-webkit-transition-duration": c.duration + "ms",
                    "-moz-transition-duration": c.duration + "ms",
                    "-o-transition-duration": c.duration + "ms",
                    "transition-duration": c.duration + "ms",
                    "-webkit-transform": s,
                    "-moz-transform": s,
                    "-ms-transform": s,
                    "-o-transform": s,
                    transform: s
                };
                n.setAttribute("style", r(e)),
                setTimeout(function() {
                    try {
                        t.removeChild(n)
                    } catch (e) {
                        return !1
                    }
                }, c.duration)
            }, d)
        },
        wrapInput: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                if ("input" === n.tagName.toLowerCase()) {
                    var i = n.parentNode;
                    if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect"))
                        continue;
                    var r = document.createElement("i");
                    r.className = n.className + " waves-input-wrapper";
                    var o = n.getAttribute("style");
                    o || (o = ""),
                    r.setAttribute("style", o),
                    n.className = "waves-button-input",
                    n.removeAttribute("style"),
                    i.replaceChild(r, n),
                    r.appendChild(n)
                }
            }
        }
    }
      , u = {
        touches: 0,
        allowEvent: function(e) {
            var t = !0;
            return "touchstart" === e.type ? u.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                u.touches > 0 && (u.touches -= 1)
            }, 500) : "mousedown" === e.type && u.touches > 0 && (t = !1),
            t
        },
        touchup: function(e) {
            u.allowEvent(e)
        }
    };
    s.displayEffect = function(t) {
        t = t || {},
        "duration"in t && (c.duration = t.duration),
        c.wrapInput(l(".waves-effect")),
        "ontouchstart"in e && document.body.addEventListener("touchstart", a, !1),
        document.body.addEventListener("mousedown", a, !1)
    }
    ,
    s.attach = function(t) {
        "input" === t.tagName.toLowerCase() && (c.wrapInput([t]),
        t = t.parentElement),
        "ontouchstart"in e && t.addEventListener("touchstart", a, !1),
        t.addEventListener("mousedown", a, !1)
    }
    ,
    e.Waves = s,
    document.addEventListener("DOMContentLoaded", function() {
        s.displayEffect()
    }, !1)
}(window),
Materialize.toast = function(e, t, n, i) {
    n = n || "";
    var r = document.getElementById("toast-container");
    null === r && (r = document.createElement("div"),
    r.id = "toast-container",
    document.body.appendChild(r));
    var o = function(e) {
        var t = document.createElement("div");
        if (t.classList.add("toast"),
        n)
            for (var r = n.split(" "), o = 0, a = r.length; o < a; o++)
                t.classList.add(r[o]);
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e) : e instanceof jQuery ? t.appendChild(e[0]) : t.innerHTML = e;
        var s = new Hammer(t,{
            prevent_default: !1
        });
        return s.on("pan", function(e) {
            var n = e.deltaX;
            t.classList.contains("panning") || t.classList.add("panning");
            var i = 1 - Math.abs(n / 80);
            i < 0 && (i = 0),
            Vel(t, {
                left: n,
                opacity: i
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            })
        }),
        s.on("panend", function(e) {
            var n = e.deltaX;
            Math.abs(n) > 80 ? Vel(t, {
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof i && i(),
                    t.parentNode.removeChild(t)
                }
            }) : (t.classList.remove("panning"),
            Vel(t, {
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }),
        t
    }(e);
    e && r.appendChild(o),
    o.style.opacity = 0,
    Vel(o, {
        translateY: "-35px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var a, s = t;
    null != s && (a = setInterval(function() {
        null === o.parentNode && window.clearInterval(a),
        o.classList.contains("panning") || (s -= 20),
        s <= 0 && (Vel(o, {
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375,
            easing: "easeOutExpo",
            queue: !1,
            complete: function() {
                "function" == typeof i && i(),
                this[0].parentNode.removeChild(this[0])
            }
        }),
        window.clearInterval(a))
    }, 20))
}
,
function(e) {
    var t = {
        init: function(t) {
            var n = {
                menuWidth: 300,
                edge: "left",
                closeOnClick: !1,
                draggable: !0
            };
            t = e.extend(n, t),
            e(this).each(function() {
                var n = e(this)
                  , i = n.attr("data-activates")
                  , r = e("#" + i);
                300 != t.menuWidth && r.css("width", t.menuWidth);
                var o = e('.drag-target[data-sidenav="' + i + '"]');
                t.draggable ? (o.length && o.remove(),
                o = e('<div class="drag-target"></div>').attr("data-sidenav", i),
                e("body").append(o)) : o = e(),
                "left" == t.edge ? (r.css("transform", "translateX(-100%)"),
                o.css({
                    left: 0
                })) : (r.addClass("right-aligned").css("transform", "translateX(100%)"),
                o.css({
                    right: 0
                })),
                r.hasClass("fixed") && window.innerWidth > 992 && r.css("transform", "translateX(0)"),
                r.hasClass("fixed") && e(window).resize(function() {
                    window.innerWidth > 992 ? 0 !== e("#sidenav-overlay").length && l ? a(!0) : r.css("transform", "translateX(0%)") : !1 === l && ("left" === t.edge ? r.css("transform", "translateX(-100%)") : r.css("transform", "translateX(100%)"))
                }),
                !0 === t.closeOnClick && r.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    a()
                });
                var a = function(n) {
                    s = !1,
                    l = !1,
                    e("body").css({
                        overflow: "",
                        width: ""
                    }),
                    e("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            e(this).remove()
                        }
                    }),
                    "left" === t.edge ? (o.css({
                        width: "",
                        right: "",
                        left: "0"
                    }),
                    r.velocity({
                        translateX: "-100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === n && (r.removeAttr("style"),
                            r.css("width", t.menuWidth))
                        }
                    })) : (o.css({
                        width: "",
                        right: "0",
                        left: ""
                    }),
                    r.velocity({
                        translateX: "100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === n && (r.removeAttr("style"),
                            r.css("width", t.menuWidth))
                        }
                    }))
                }
                  , s = !1
                  , l = !1;
                t.draggable && (o.on("click", function() {
                    l && a()
                }),
                o.hammer({
                    prevent_default: !1
                }).bind("pan", function(n) {
                    if ("touch" == n.gesture.pointerType) {
                        var i = (n.gesture.direction,
                        n.gesture.center.x)
                          , o = (n.gesture.center.y,
                        n.gesture.velocityX,
                        e("body"))
                          , s = e("#sidenav-overlay")
                          , c = o.innerWidth();
                        if (o.css("overflow", "hidden"),
                        o.width(c),
                        0 === s.length && (s = e('<div id="sidenav-overlay"></div>'),
                        s.css("opacity", 0).click(function() {
                            a()
                        }),
                        e("body").append(s)),
                        "left" === t.edge && (i > t.menuWidth ? i = t.menuWidth : i < 0 && (i = 0)),
                        "left" === t.edge)
                            i < t.menuWidth / 2 ? l = !1 : i >= t.menuWidth / 2 && (l = !0),
                            r.css("transform", "translateX(" + (i - t.menuWidth) + "px)");
                        else {
                            i < window.innerWidth - t.menuWidth / 2 ? l = !0 : i >= window.innerWidth - t.menuWidth / 2 && (l = !1);
                            var u = i - t.menuWidth / 2;
                            u < 0 && (u = 0),
                            r.css("transform", "translateX(" + u + "px)")
                        }
                        var d;
                        "left" === t.edge ? (d = i / t.menuWidth,
                        s.velocity({
                            opacity: d
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (d = Math.abs((i - window.innerWidth) / t.menuWidth),
                        s.velocity({
                            opacity: d
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(n) {
                    if ("touch" == n.gesture.pointerType) {
                        var i = e("#sidenav-overlay")
                          , a = n.gesture.velocityX
                          , c = n.gesture.center.x
                          , u = c - t.menuWidth
                          , d = c - t.menuWidth / 2;
                        u > 0 && (u = 0),
                        d < 0 && (d = 0),
                        s = !1,
                        "left" === t.edge ? l && a <= .3 || a < -.5 ? (0 !== u && r.velocity({
                            translateX: [0, u]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        i.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        o.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        l = !0) : (!l || a > .3) && (e("body").css({
                            overflow: "",
                            width: ""
                        }),
                        r.velocity({
                            translateX: [-1 * t.menuWidth - 10, u]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        i.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }),
                        o.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : l && a >= -.3 || a > .5 ? (0 !== d && r.velocity({
                            translateX: [0, d]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        i.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        o.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        l = !0) : (!l || a < -.3) && (e("body").css({
                            overflow: "",
                            width: ""
                        }),
                        r.velocity({
                            translateX: [t.menuWidth + 10, d]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        i.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }),
                        o.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                })),
                n.off("click.sidenav").on("click.sidenav", function() {
                    if (!0 === l)
                        l = !1,
                        s = !1,
                        a();
                    else {
                        var n = e("body")
                          , i = e('<div id="sidenav-overlay"></div>')
                          , c = n.innerWidth();
                        n.css("overflow", "hidden"),
                        n.width(c),
                        e("body").append(o),
                        "left" === t.edge ? (o.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        r.velocity({
                            translateX: [0, -1 * t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (o.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        r.velocity({
                            translateX: [0, t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })),
                        i.css("opacity", 0).click(function() {
                            l = !1,
                            s = !1,
                            a(),
                            i.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            })
                        }),
                        e("body").append(i),
                        i.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                l = !0,
                                s = !1
                            }
                        })
                    }
                    return !1
                })
            })
        },
        destroy: function() {
            var t = e("#sidenav-overlay")
              , n = e('.drag-target[data-sidenav="' + e(this).attr("data-activates") + '"]');
            t.trigger("click"),
            n.remove(),
            e(this).off("click"),
            t.remove()
        },
        show: function() {
            this.trigger("click")
        },
        hide: function() {
            e("#sidenav-overlay").trigger("click")
        }
    };
    e.fn.sideNav = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    function t(t, n, i, r) {
        var a = e();
        return e.each(o, function(e, o) {
            if (o.height() > 0) {
                var s = o.offset().top
                  , l = o.offset().left
                  , c = l + o.width()
                  , u = s + o.height();
                !(l > n || c < r || s > i || u < t) && a.push(o)
            }
        }),
        a
    }
    function n(n) {
        ++l;
        var i = r.scrollTop()
          , o = r.scrollLeft()
          , s = o + r.width()
          , u = i + r.height()
          , d = t(i + c.top + n || 200, s + c.right, u + c.bottom, o + c.left);
        e.each(d, function(e, t) {
            "number" != typeof t.data("scrollSpy:ticks") && t.triggerHandler("scrollSpy:enter"),
            t.data("scrollSpy:ticks", l)
        }),
        e.each(a, function(e, t) {
            var n = t.data("scrollSpy:ticks");
            "number" == typeof n && n !== l && (t.triggerHandler("scrollSpy:exit"),
            t.data("scrollSpy:ticks", null))
        }),
        a = d
    }
    function i() {
        r.trigger("scrollSpy:winSize")
    }
    var r = e(window)
      , o = []
      , a = []
      , s = !1
      , l = 0
      , c = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    e.scrollSpy = function(t, i) {
        var a = {
            throttle: 100,
            scrollOffset: 200
        };
        i = e.extend(a, i);
        var l = [];
        t = e(t),
        t.each(function(t, n) {
            o.push(e(n)),
            e(n).data("scrollSpy:id", t),
            e('a[href="#' + e(n).attr("id") + '"]').click(function(t) {
                t.preventDefault();
                var n = e(Materialize.escapeHash(this.hash)).offset().top + 1;
                e("html, body").animate({
                    scrollTop: n - i.scrollOffset
                }, {
                    duration: 400,
                    queue: !1,
                    easing: "easeOutCubic"
                })
            })
        }),
        c.top = i.offsetTop || 0,
        c.right = i.offsetRight || 0,
        c.bottom = i.offsetBottom || 0,
        c.left = i.offsetLeft || 0;
        var u = Materialize.throttle(function() {
            n(i.scrollOffset)
        }, i.throttle || 100)
          , d = function() {
            e(document).ready(u)
        };
        return s || (r.on("scroll", d),
        r.on("resize", d),
        s = !0),
        setTimeout(d, 0),
        t.on("scrollSpy:enter", function() {
            l = e.grep(l, function(e) {
                return 0 != e.height()
            });
            var t = e(this);
            l[0] ? (e('a[href="#' + l[0].attr("id") + '"]').removeClass("active"),
            t.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(e(this)) : l.push(e(this))) : l.push(e(this)),
            e('a[href="#' + l[0].attr("id") + '"]').addClass("active")
        }),
        t.on("scrollSpy:exit", function() {
            if (l = e.grep(l, function(e) {
                return 0 != e.height()
            }),
            l[0]) {
                e('a[href="#' + l[0].attr("id") + '"]').removeClass("active");
                var t = e(this);
                l = e.grep(l, function(e) {
                    return e.attr("id") != t.attr("id")
                }),
                l[0] && e('a[href="#' + l[0].attr("id") + '"]').addClass("active")
            }
        }),
        t
    }
    ,
    e.winSizeSpy = function(t) {
        return e.winSizeSpy = function() {
            return r
        }
        ,
        t = t || {
            throttle: 100
        },
        r.on("resize", Materialize.throttle(i, t.throttle || 100))
    }
    ,
    e.fn.scrollSpy = function(t) {
        return e.scrollSpy(e(this), t)
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        function t(t) {
            var n = t.css("font-family")
              , r = t.css("font-size")
              , o = t.css("line-height");
            r && i.css("font-size", r),
            n && i.css("font-family", n),
            o && i.css("line-height", o),
            "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"),
            i.text(t.val() + "\n");
            var a = i.html().replace(/\n/g, "<br>");
            i.html(a),
            t.is(":visible") ? i.css("width", t.width()) : i.css("width", e(window).width() / 2),
            t.css("height", i.height())
        }
        Materialize.updateTextFields = function() {
            e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(t, n) {
                var i = e(this);
                e(n).val().length > 0 || n.autofocus || void 0 !== i.attr("placeholder") ? i.siblings("label").addClass("active") : e(n)[0].validity ? i.siblings("label").toggleClass("active", !0 === e(n)[0].validity.badInput) : i.siblings("label").removeClass("active")
            })
        }
        ;
        var n = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        e(document).on("change", n, function() {
            0 === e(this).val().length && void 0 === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"),
            validate_field(e(this))
        }),
        e(document).ready(function() {
            Materialize.updateTextFields()
        }),
        e(document).on("reset", function(t) {
            var i = e(t.target);
            i.is("form") && (i.find(n).removeClass("valid").removeClass("invalid"),
            i.find(n).each(function() {
                "" === e(this).attr("value") && e(this).siblings("label").removeClass("active")
            }),
            i.find("select.initialized").each(function() {
                var e = i.find("option[selected]").text();
                i.siblings("input.select-dropdown").val(e)
            }))
        }),
        e(document).on("focus", n, function() {
            e(this).siblings("label, .prefix").addClass("active")
        }),
        e(document).on("blur", n, function() {
            var t = e(this)
              , n = ".prefix";
            0 === t.val().length && !0 !== t[0].validity.badInput && void 0 === t.attr("placeholder") && (n += ", label"),
            t.siblings(n).removeClass("active"),
            validate_field(t)
        }),
        window.validate_field = function(e) {
            var t = void 0 !== e.attr("data-length")
              , n = parseInt(e.attr("data-length"))
              , i = e.val().length;
            0 === e.val().length && !1 === e[0].validity.badInput ? e.hasClass("validate") && (e.removeClass("valid"),
            e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && i <= n || e.is(":valid") && !t ? (e.removeClass("invalid"),
            e.addClass("valid")) : (e.removeClass("valid"),
            e.addClass("invalid")))
        }
        ;
        e(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function(t) {
            if (9 === t.which) {
                e(this).addClass("tabbed");
                return void e(this).one("blur", function(t) {
                    e(this).removeClass("tabbed")
                })
            }
        });
        var i = e(".hiddendiv").first();
        i.length || (i = e('<div class="hiddendiv common"></div>'),
        e("body").append(i));
        var r = ".materialize-textarea";
        e(r).each(function() {
            var n = e(this);
            n.val().length && t(n)
        }),
        e("body").on("keyup keydown autoresize", r, function() {
            t(e(this))
        }),
        e(document).on("change", '.file-field input[type="file"]', function() {
            for (var t = e(this).closest(".file-field"), n = t.find("input.file-path"), i = e(this)[0].files, r = [], o = 0; o < i.length; o++)
                r.push(i[o].name);
            n.val(r.join(", ")),
            n.trigger("change")
        });
        var o = "input[type=range]"
          , a = !1;
        e(o).each(function() {
            var t = e('<span class="thumb"><span class="value"></span></span>');
            e(this).after(t)
        });
        var s = ".range-field";
        e(document).on("change", o, function(t) {
            var n = e(this).siblings(".thumb");
            n.find(".value").html(e(this).val());
            var i = e(this).attr("max")
              , r = e(this).width() - 15
              , o = (e(this).parent(".range-field").outerWidth(),
            e(this).val() * (r / i));
            n.hasClass("active") || n.velocity({
                height: "30px",
                width: "30px",
                top: "-30px",
                marginLeft: "5px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }),
            n.addClass("active").css("left", o)
        }),
        e(document).on("mousedown touchstart", o, function(t) {
            var n = e(this).siblings(".thumb")
              , i = e(this).attr("max")
              , r = e(this).width() - 15
              , o = (e(this).parent(".range-field").outerWidth(),
            e(this).val() * (r / i));
            n.length <= 0 && (n = e('<span class="thumb"><span class="value"></span></span>'),
            e(this).after(n)),
            n.find(".value").html(e(this).val()),
            a = !0,
            e(this).addClass("active"),
            n.hasClass("active") || n.velocity({
                height: "30px",
                width: "30px",
                top: "-30px",
                marginLeft: "5px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }),
            "input" !== t.type && n.addClass("active").css("left", o)
        }),
        e(document).on("mouseup touchend", s, function() {
            a = !1,
            e(this).removeClass("active")
        }),
        e(document).on("input mousemove touchmove", s, function(t) {
            var n = e(this).children(".thumb")
              , i = e(this).find(o)
              , r = i.attr("max")
              , s = i.width() - 15
              , l = (e(this).outerWidth(),
            i.val() * (s / r));
            a && (n.hasClass("active") || n.velocity({
                height: "30px",
                width: "30px",
                top: "-30px",
                marginLeft: "5px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }),
            n.addClass("active").css("left", l),
            n.find(".value").html(n.siblings(o).val()))
        }),
        e(document).on("mouseout touchleave", s, function() {
            if (!a) {
                var t = e(this).children(".thumb");
                t.hasClass("active") && t.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "15px"
                }, {
                    duration: 100
                }),
                t.removeClass("active")
            }
        }),
        e.fn.autocomplete = function(t) {
            var n = {
                data: {},
                limit: 1 / 0,
                onAutocomplete: null,
                minLength: 1
            };
            return t = e.extend(n, t),
            this.each(function() {
                var n, i = e(this), r = t.data, o = 0, a = -1, s = i.closest(".input-field");
                if (!e.isEmptyObject(r)) {
                    var l, c = e('<ul class="autocomplete-content dropdown-content"></ul>');
                    s.length ? (l = s.children(".autocomplete-content.dropdown-content").first(),
                    l.length || s.append(c)) : (l = i.next(".autocomplete-content.dropdown-content"),
                    l.length || i.after(c)),
                    l.length && (c = l);
                    var u = function(e, t) {
                        var n = t.find("img")
                          , i = t.text().toLowerCase().indexOf("" + e.toLowerCase())
                          , r = i + e.length - 1
                          , o = t.text().slice(0, i)
                          , a = t.text().slice(i, r + 1)
                          , s = t.text().slice(r + 1);
                        t.html("<span>" + o + "<span class='highlight'>" + a + "</span>" + s + "</span>"),
                        n.length && t.prepend(n)
                    }
                      , d = function() {
                        a = -1,
                        c.find(".active").removeClass("active")
                    }
                      , f = function() {
                        c.empty(),
                        d(),
                        n = void 0
                    };
                    i.off("blur.autocomplete").on("blur.autocomplete", function() {
                        f()
                    }),
                    i.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function(a) {
                        o = 0;
                        var s = i.val().toLowerCase();
                        if (13 !== a.which && 38 !== a.which && 40 !== a.which) {
                            if (n !== s && (f(),
                            s.length >= t.minLength))
                                for (var l in r)
                                    if (r.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(s) && l.toLowerCase() !== s) {
                                        if (o >= t.limit)
                                            break;
                                        var d = e("<li></li>");
                                        r[l] ? d.append('<img src="' + r[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"),
                                        c.append(d),
                                        u(s, d),
                                        o++
                                    }
                            n = s
                        }
                    }),
                    i.off("keydown.autocomplete").on("keydown.autocomplete", function(e) {
                        var t, n = e.which, i = c.children("li").length, r = c.children(".active").first();
                        return 13 === n && a >= 0 ? (t = c.children("li").eq(a),
                        void (t.length && (t.trigger("mousedown.autocomplete"),
                        e.preventDefault()))) : void (38 !== n && 40 !== n || (e.preventDefault(),
                        38 === n && a > 0 && a--,
                        40 === n && a < i - 1 && a++,
                        r.removeClass("active"),
                        a >= 0 && c.children("li").eq(a).addClass("active")))
                    }),
                    c.on("mousedown.autocomplete touchstart.autocomplete", "li", function() {
                        var n = e(this).text().trim();
                        i.val(n),
                        i.trigger("change"),
                        f(),
                        "function" == typeof t.onAutocomplete && t.onAutocomplete.call(this, n)
                    })
                }
            })
        }
    }),
    e.fn.material_select = function(t) {
        function n(e, t, n) {
            var r = e.indexOf(t)
              , o = -1 === r;
            return o ? e.push(t) : e.splice(r, 1),
            n.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"),
            n.find("option").eq(t).prop("selected", o),
            i(e, n),
            o
        }
        function i(e, t) {
            for (var n = "", i = 0, r = e.length; i < r; i++) {
                var o = t.find("option").eq(e[i]).text();
                n += 0 === i ? o : ", " + o
            }
            "" === n && (n = t.find("option:disabled").eq(0).text()),
            t.siblings("input.select-dropdown").val(n)
        }
        e(this).each(function() {
            var i = e(this);
            if (!i.hasClass("browser-default")) {
                var r = !!i.attr("multiple")
                  , o = i.data("select-id");
                if (o && (i.parent().find("span.caret").remove(),
                i.parent().find("input").remove(),
                i.unwrap(),
                e("ul#select-options-" + o).remove()),
                "destroy" === t)
                    return void i.data("select-id", null).removeClass("initialized");
                var a = Materialize.guid();
                i.data("select-id", a);
                var s = e('<div class="select-wrapper"></div>');
                s.addClass(i.attr("class"));
                var l = e('<ul id="select-options-' + a + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>')
                  , c = i.children("option, optgroup")
                  , u = []
                  , d = !1
                  , f = i.find("option:selected").html() || i.find("option:first").html() || ""
                  , p = function(t, n, i) {
                    var o = n.is(":disabled") ? "disabled " : ""
                      , a = "optgroup-option" === i ? "optgroup-option " : ""
                      , s = r ? '<input type="checkbox"' + o + "/><label></label>" : ""
                      , c = n.data("icon")
                      , u = n.attr("class");
                    if (c) {
                        var d = "";
                        return u && (d = ' class="' + u + '"'),
                        l.append(e('<li class="' + o + a + '"><img alt="" src="' + c + '"' + d + "><span>" + s + n.html() + "</span></li>")),
                        !0
                    }
                    l.append(e('<li class="' + o + a + '"><span>' + s + n.html() + "</span></li>"))
                };
                c.length && c.each(function() {
                    if (e(this).is("option"))
                        r ? p(0, e(this), "multiple") : p(0, e(this));
                    else if (e(this).is("optgroup")) {
                        var t = e(this).children("option");
                        l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")),
                        t.each(function() {
                            p(0, e(this), "optgroup-option")
                        })
                    }
                }),
                l.find("li:not(.optgroup)").each(function(o) {
                    e(this).click(function(a) {
                        if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                            var s = !0;
                            r ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                return !t
                            }),
                            s = n(u, o, i),
                            g.trigger("focus")) : (l.find("li").removeClass("active"),
                            e(this).toggleClass("active"),
                            g.val(e(this).text())),
                            m(l, e(this)),
                            i.find("option").eq(o).prop("selected", s),
                            i.trigger("change"),
                            void 0 !== t && t()
                        }
                        a.stopPropagation()
                    })
                }),
                i.wrap(s);
                var h = e('<span class="caret">&#9660;</span>');
                i.is(":disabled") && h.addClass("disabled");
                var v = f.replace(/"/g, "&quot;")
                  , g = e('<input type="text" class="select-dropdown" readonly="true" ' + (i.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + a + '" value="' + v + '"/>');
                i.before(g),
                g.before(h),
                g.after(l),
                i.is(":disabled") || g.dropdown({
                    hover: !1,
                    closeOnClick: !1
                }),
                i.attr("tabindex") && e(g[0]).attr("tabindex", i.attr("tabindex")),
                i.addClass("initialized"),
                g.on({
                    focus: function() {
                        if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"),
                        !l.is(":visible")) {
                            e(this).trigger("open", ["focus"]);
                            var t = e(this).val();
                            r && t.indexOf(",") >= 0 && (t = t.split(",")[0]);
                            var n = l.find("li").filter(function() {
                                return e(this).text().toLowerCase() === t.toLowerCase()
                            })[0];
                            m(l, n, !0)
                        }
                    },
                    click: function(e) {
                        e.stopPropagation()
                    }
                }),
                g.on("blur", function() {
                    r || e(this).trigger("close"),
                    l.find("li.selected").removeClass("selected")
                }),
                l.hover(function() {
                    d = !0
                }, function() {
                    d = !1
                }),
                e(window).on({
                    click: function() {
                        r && (d || g.trigger("close"))
                    }
                }),
                r && i.find("option:selected:not(:disabled)").each(function() {
                    var t = e(this).index();
                    n(u, t, i),
                    l.find("li").eq(t).find(":checkbox").prop("checked", !0)
                });
                var m = function(t, n, i) {
                    if (n) {
                        t.find("li.selected").removeClass("selected");
                        var o = e(n);
                        o.addClass("selected"),
                        r && !i || l.scrollTo(o)
                    }
                }
                  , y = []
                  , b = function(t) {
                    if (9 == t.which)
                        return void g.trigger("close");
                    if (40 == t.which && !l.is(":visible"))
                        return void g.trigger("open");
                    if (13 != t.which || l.is(":visible")) {
                        t.preventDefault();
                        var n = String.fromCharCode(t.which).toLowerCase()
                          , i = [9, 13, 27, 38, 40];
                        if (n && -1 === i.indexOf(t.which)) {
                            y.push(n);
                            var o = y.join("")
                              , a = l.find("li").filter(function() {
                                return 0 === e(this).text().toLowerCase().indexOf(o)
                            })[0];
                            a && m(l, a)
                        }
                        if (13 == t.which) {
                            var s = l.find("li.selected:not(.disabled)")[0];
                            s && (e(s).trigger("click"),
                            r || g.trigger("close"))
                        }
                        40 == t.which && (a = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0],
                        m(l, a)),
                        27 == t.which && g.trigger("close"),
                        38 == t.which && (a = l.find("li.selected").prev("li:not(.disabled)")[0]) && m(l, a),
                        setTimeout(function() {
                            y = []
                        }, 1e3)
                    }
                };
                g.on("keydown", b)
            }
        })
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var n = {
                indicators: !0,
                height: 400,
                transition: 500,
                interval: 6e3
            };
            return t = e.extend(n, t),
            this.each(function() {
                function n(e, t) {
                    e.hasClass("center-align") ? e.velocity({
                        opacity: 0,
                        translateY: -100
                    }, {
                        duration: t,
                        queue: !1
                    }) : e.hasClass("right-align") ? e.velocity({
                        opacity: 0,
                        translateX: 100
                    }, {
                        duration: t,
                        queue: !1
                    }) : e.hasClass("left-align") && e.velocity({
                        opacity: 0,
                        translateX: -100
                    }, {
                        duration: t,
                        queue: !1
                    })
                }
                function i(e) {
                    e >= c.length ? e = 0 : e < 0 && (e = c.length - 1),
                    (u = l.find(".active").index()) != e && (r = c.eq(u),
                    $caption = r.find(".caption"),
                    r.removeClass("active"),
                    r.velocity({
                        opacity: 0
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            c.not(".active").velocity({
                                opacity: 0,
                                translateX: 0,
                                translateY: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    }),
                    n($caption, t.transition),
                    t.indicators && o.eq(u).removeClass("active"),
                    c.eq(e).velocity({
                        opacity: 1
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    c.eq(e).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: t.transition,
                        delay: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    c.eq(e).addClass("active"),
                    t.indicators && o.eq(e).addClass("active"))
                }
                var r, o, a, s = e(this), l = s.find("ul.slides").first(), c = l.find("> li"), u = l.find(".active").index();
                -1 != u && (r = c.eq(u)),
                s.hasClass("fullscreen") || (t.indicators ? s.height(t.height + 40) : s.height(t.height),
                l.height(t.height)),
                c.find(".caption").each(function() {
                    n(e(this), 0)
                }),
                c.find("img").each(function() {
                    var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                    e(this).attr("src") !== t && (e(this).css("background-image", "url(" + e(this).attr("src") + ")"),
                    e(this).attr("src", t))
                }),
                t.indicators && (o = e('<ul class="indicators"></ul>'),
                c.each(function(n) {
                    var r = e('<li class="indicator-item"></li>');
                    r.click(function() {
                        i(l.parent().find(e(this)).index()),
                        clearInterval(a),
                        a = setInterval(function() {
                            u = l.find(".active").index(),
                            c.length == u + 1 ? u = 0 : u += 1,
                            i(u)
                        }, t.transition + t.interval)
                    }),
                    o.append(r)
                }),
                s.append(o),
                o = s.find("ul.indicators").find("li.indicator-item")),
                r ? r.show() : (c.first().addClass("active").velocity({
                    opacity: 1
                }, {
                    duration: t.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }),
                u = 0,
                r = c.eq(u),
                t.indicators && o.eq(u).addClass("active")),
                r.find("img").each(function() {
                    r.find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    })
                }),
                a = setInterval(function() {
                    u = l.find(".active").index(),
                    i(u + 1)
                }, t.transition + t.interval);
                var d = !1
                  , f = !1
                  , p = !1;
                s.hammer({
                    prevent_default: !1
                }).bind("pan", function(e) {
                    if ("touch" === e.gesture.pointerType) {
                        clearInterval(a);
                        var t = e.gesture.direction
                          , n = e.gesture.deltaX
                          , i = e.gesture.velocityX
                          , r = e.gesture.velocityY;
                        $curr_slide = l.find(".active"),
                        Math.abs(i) > Math.abs(r) && $curr_slide.velocity({
                            translateX: n
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        4 === t && (n > s.innerWidth() / 2 || i < -.65) ? p = !0 : 2 === t && (n < -1 * s.innerWidth() / 2 || i > .65) && (f = !0);
                        var o;
                        f && (o = $curr_slide.next(),
                        0 === o.length && (o = c.first()),
                        o.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })),
                        p && (o = $curr_slide.prev(),
                        0 === o.length && (o = c.last()),
                        o.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(e) {
                    "touch" === e.gesture.pointerType && ($curr_slide = l.find(".active"),
                    d = !1,
                    curr_index = l.find(".active").index(),
                    !p && !f || c.length <= 1 ? $curr_slide.velocity({
                        translateX: 0
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }) : f ? (i(curr_index + 1),
                    $curr_slide.velocity({
                        translateX: -1 * s.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : p && (i(curr_index - 1),
                    $curr_slide.velocity({
                        translateX: s.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })),
                    f = !1,
                    p = !1,
                    clearInterval(a),
                    a = setInterval(function() {
                        u = l.find(".active").index(),
                        c.length == u + 1 ? u = 0 : u += 1,
                        i(u)
                    }, t.transition + t.interval))
                }),
                s.on("sliderPause", function() {
                    clearInterval(a)
                }),
                s.on("sliderStart", function() {
                    clearInterval(a),
                    a = setInterval(function() {
                        u = l.find(".active").index(),
                        c.length == u + 1 ? u = 0 : u += 1,
                        i(u)
                    }, t.transition + t.interval)
                }),
                s.on("sliderNext", function() {
                    u = l.find(".active").index(),
                    i(u + 1)
                }),
                s.on("sliderPrev", function() {
                    u = l.find(".active").index(),
                    i(u - 1)
                })
            })
        },
        pause: function() {
            e(this).trigger("sliderPause")
        },
        start: function() {
            e(this).trigger("sliderStart")
        },
        next: function() {
            e(this).trigger("sliderNext")
        },
        prev: function() {
            e(this).trigger("sliderPrev")
        }
    };
    e.fn.slider = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        e(document).on("click.card", ".card", function(t) {
            e(this).find("> .card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function() {
                    e(this).css({
                        display: "none"
                    })
                }
            }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (e(t.target).closest(".card").css("overflow", "hidden"),
            e(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            })))
        })
    })
}(jQuery),
function(e) {
    var t = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteOptions: {}
    };
    e(document).ready(function() {
        e(document).on("click", ".chip .close", function(t) {
            e(this).closest(".chips").attr("data-initialized") || e(this).closest(".chip").remove()
        })
    }),
    e.fn.material_chip = function(n) {
        var i = this;
        if (this.$el = e(this),
        this.$document = e(document),
        this.SELS = {
            CHIPS: ".chips",
            CHIP: ".chip",
            INPUT: "input",
            DELETE: ".material-icons",
            SELECTED_CHIP: ".selected"
        },
        "data" === n)
            return this.$el.data("chips");
        var r = e.extend({}, t, n);
        i.hasAutocomplete = !e.isEmptyObject(r.autocompleteOptions.data),
        this.init = function() {
            var t = 0;
            i.$el.each(function() {
                var n = e(this)
                  , o = Materialize.guid();
                i.chipId = o,
                r.data && r.data instanceof Array || (r.data = []),
                n.data("chips", r.data),
                n.attr("data-index", t),
                n.attr("data-initialized", !0),
                n.hasClass(i.SELS.CHIPS) || n.addClass("chips"),
                i.chips(n, o),
                t++
            })
        }
        ,
        this.handleEvents = function() {
            var t = i.SELS;
            i.$document.off("click.chips-focus", t.CHIPS).on("click.chips-focus", t.CHIPS, function(n) {
                e(n.target).find(t.INPUT).focus()
            }),
            i.$document.off("click.chips-select", t.CHIP).on("click.chips-select", t.CHIP, function(n) {
                var r = e(n.target);
                if (r.length) {
                    var o = r.hasClass("selected")
                      , a = r.closest(t.CHIPS);
                    e(t.CHIP).removeClass("selected"),
                    o || i.selectChip(r.index(), a)
                }
            }),
            i.$document.off("keydown.chips").on("keydown.chips", function(n) {
                if (!e(n.target).is("input, textarea")) {
                    var r, o = i.$document.find(t.CHIP + t.SELECTED_CHIP), a = o.closest(t.CHIPS), s = o.siblings(t.CHIP).length;
                    if (o.length)
                        if (8 === n.which || 46 === n.which) {
                            n.preventDefault(),
                            r = o.index(),
                            i.deleteChip(r, a);
                            var l = null;
                            r + 1 < s ? l = r : r !== s && r + 1 !== s || (l = s - 1),
                            l < 0 && (l = null),
                            null !== l && i.selectChip(l, a),
                            s || a.find("input").focus()
                        } else if (37 === n.which) {
                            if ((r = o.index() - 1) < 0)
                                return;
                            e(t.CHIP).removeClass("selected"),
                            i.selectChip(r, a)
                        } else if (39 === n.which) {
                            if (r = o.index() + 1,
                            e(t.CHIP).removeClass("selected"),
                            r > s)
                                return void a.find("input").focus();
                            i.selectChip(r, a)
                        }
                }
            }),
            i.$document.off("focusin.chips", t.CHIPS + " " + t.INPUT).on("focusin.chips", t.CHIPS + " " + t.INPUT, function(n) {
                var i = e(n.target).closest(t.CHIPS);
                i.addClass("focus"),
                i.siblings("label, .prefix").addClass("active"),
                e(t.CHIP).removeClass("selected")
            }),
            i.$document.off("focusout.chips", t.CHIPS + " " + t.INPUT).on("focusout.chips", t.CHIPS + " " + t.INPUT, function(n) {
                var i = e(n.target).closest(t.CHIPS);
                i.removeClass("focus"),
                i.data("chips").length || i.siblings("label").removeClass("active"),
                i.siblings(".prefix").removeClass("active")
            }),
            i.$document.off("keydown.chips-add", t.CHIPS + " " + t.INPUT).on("keydown.chips-add", t.CHIPS + " " + t.INPUT, function(n) {
                var r = e(n.target)
                  , o = r.closest(t.CHIPS)
                  , a = o.children(t.CHIP).length;
                if (13 === n.which) {
                    if (i.hasAutocomplete && o.find(".autocomplete-content.dropdown-content").length && o.find(".autocomplete-content.dropdown-content").children().length)
                        return;
                    return n.preventDefault(),
                    i.addChip({
                        tag: r.val()
                    }, o),
                    void r.val("")
                }
                if ((8 === n.keyCode || 37 === n.keyCode) && "" === r.val() && a)
                    return n.preventDefault(),
                    i.selectChip(a - 1, o),
                    void r.blur()
            }),
            i.$document.off("click.chips-delete", t.CHIPS + " " + t.DELETE).on("click.chips-delete", t.CHIPS + " " + t.DELETE, function(n) {
                var r = e(n.target)
                  , o = r.closest(t.CHIPS)
                  , a = r.closest(t.CHIP);
                n.stopPropagation(),
                i.deleteChip(a.index(), o),
                o.find("input").focus()
            })
        }
        ,
        this.chips = function(t, n) {
            t.empty(),
            t.data("chips").forEach(function(e) {
                t.append(i.renderChip(e))
            }),
            t.append(e('<input id="' + n + '" class="input" placeholder="">')),
            i.setPlaceholder(t);
            var o = t.next("label");
            o.length && (o.attr("for", n),
            t.data("chips").length && o.addClass("active"));
            var a = e("#" + n);
            i.hasAutocomplete && (r.autocompleteOptions.onAutocomplete = function(e) {
                i.addChip({
                    tag: e
                }, t),
                a.val(""),
                a.focus()
            }
            ,
            a.autocomplete(r.autocompleteOptions))
        }
        ,
        this.renderChip = function(t) {
            if (t.tag) {
                var n = e('<div class="chip"></div>');
                return n.text(t.tag),
                n.append(e('<i class="material-icons close">close</i>')),
                n
            }
        }
        ,
        this.setPlaceholder = function(e) {
            e.data("chips").length && r.placeholder ? e.find("input").prop("placeholder", r.placeholder) : !e.data("chips").length && r.secondaryPlaceholder && e.find("input").prop("placeholder", r.secondaryPlaceholder)
        }
        ,
        this.isValid = function(e, t) {
            for (var n = e.data("chips"), i = !1, r = 0; r < n.length; r++)
                if (n[r].tag === t.tag)
                    return void (i = !0);
            return "" !== t.tag && !i
        }
        ,
        this.addChip = function(e, t) {
            if (i.isValid(t, e)) {
                for (var n = i.renderChip(e), r = [], o = t.data("chips"), a = 0; a < o.length; a++)
                    r.push(o[a]);
                r.push(e),
                t.data("chips", r),
                n.insertBefore(t.find("input")),
                t.trigger("chip.add", e),
                i.setPlaceholder(t)
            }
        }
        ,
        this.deleteChip = function(e, t) {
            var n = t.data("chips")[e];
            t.find(".chip").eq(e).remove();
            for (var r = [], o = t.data("chips"), a = 0; a < o.length; a++)
                a !== e && r.push(o[a]);
            t.data("chips", r),
            t.trigger("chip.delete", n),
            i.setPlaceholder(t)
        }
        ,
        this.selectChip = function(e, t) {
            var n = t.find(".chip").eq(e);
            n && !1 === n.hasClass("selected") && (n.addClass("selected"),
            t.trigger("chip.select", t.data("chips")[e]))
        }
        ,
        this.getChipsElement = function(e, t) {
            return t.eq(e)
        }
        ,
        this.init(),
        this.handleEvents()
    }
}(jQuery),
function(e) {
    e.fn.pushpin = function(t) {
        var n = {
            top: 0,
            bottom: 1 / 0,
            offset: 0
        };
        return "remove" === t ? (this.each(function() {
            (id = e(this).data("pushpin-id")) && (e(window).off("scroll." + id),
            e(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
        }),
        !1) : (t = e.extend(n, t),
        $index = 0,
        this.each(function() {
            function n(e) {
                e.removeClass("pin-top"),
                e.removeClass("pinned"),
                e.removeClass("pin-bottom")
            }
            function i(i, r) {
                i.each(function() {
                    t.top <= r && t.bottom >= r && !e(this).hasClass("pinned") && (n(e(this)),
                    e(this).css("top", t.offset),
                    e(this).addClass("pinned")),
                    r < t.top && !e(this).hasClass("pin-top") && (n(e(this)),
                    e(this).css("top", 0),
                    e(this).addClass("pin-top")),
                    r > t.bottom && !e(this).hasClass("pin-bottom") && (n(e(this)),
                    e(this).addClass("pin-bottom"),
                    e(this).css("top", t.bottom - a))
                })
            }
            var r = Materialize.guid()
              , o = e(this)
              , a = e(this).offset().top;
            e(this).data("pushpin-id", r),
            i(o, e(window).scrollTop()),
            e(window).on("scroll." + r, function() {
                var n = e(window).scrollTop() + t.offset;
                i(o, n)
            })
        }))
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        e.fn.reverse = [].reverse,
        e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(n) {
            var i = e(this);
            t(i)
        }),
        e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(t) {
            var i = e(this);
            n(i)
        }),
        e(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function(i) {
            var r = e(this)
              , o = r.parent();
            o.hasClass("active") ? n(o) : t(o)
        }),
        e(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function(t) {
            var n = e(this)
              , r = n.parent();
            i(r)
        })
    }),
    e.fn.extend({
        openFAB: function() {
            t(e(this))
        },
        closeFAB: function() {
            n(e(this))
        },
        openToolbar: function() {
            i(e(this))
        },
        closeToolbar: function() {
            r(e(this))
        }
    });
    var t = function(t) {
        var n = t;
        if (!1 === n.hasClass("active")) {
            var i, r;
            !0 === n.hasClass("horizontal") ? r = 40 : i = 40,
            n.addClass("active"),
            n.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: i + "px",
                translateX: r + "px"
            }, {
                duration: 0
            });
            var o = 0;
            n.find("ul .btn-floating").reverse().each(function() {
                e(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0",
                    translateX: "0"
                }, {
                    duration: 80,
                    delay: o
                }),
                o += 40
            })
        }
    }
      , n = function(e) {
        var t, n, i = e;
        !0 === i.hasClass("horizontal") ? n = 40 : t = 40,
        i.removeClass("active"),
        i.find("ul .btn-floating").velocity("stop", !0),
        i.find("ul .btn-floating").velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: t + "px",
            translateX: n + "px"
        }, {
            duration: 80
        })
    }
      , i = function(t) {
        if ("true" !== t.attr("data-open")) {
            var n, i, o, a = window.innerWidth, s = window.innerHeight, l = t[0].getBoundingClientRect(), c = t.find("> a").first(), u = t.find("> ul").first(), d = e('<div class="fab-backdrop"></div>'), f = c.css("background-color");
            c.append(d),
            n = l.left - a / 2 + l.width / 2,
            i = s - l.bottom,
            o = a / d.width(),
            t.attr("data-origin-bottom", l.bottom),
            t.attr("data-origin-left", l.left),
            t.attr("data-origin-width", l.width),
            t.addClass("active"),
            t.attr("data-open", !0),
            t.css({
                "text-align": "center",
                width: "100%",
                bottom: 0,
                left: 0,
                transform: "translateX(" + n + "px)",
                transition: "none"
            }),
            c.css({
                transform: "translateY(" + -i + "px)",
                transition: "none"
            }),
            d.css({
                "background-color": f
            }),
            setTimeout(function() {
                t.css({
                    transform: "",
                    transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                }),
                c.css({
                    overflow: "visible",
                    transform: "",
                    transition: "transform .2s"
                }),
                setTimeout(function() {
                    t.css({
                        overflow: "hidden",
                        "background-color": f
                    }),
                    d.css({
                        transform: "scale(" + o + ")",
                        transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                    }),
                    u.find("> li > a").css({
                        opacity: 1
                    }),
                    e(window).on("scroll.fabToolbarClose", function() {
                        r(t),
                        e(window).off("scroll.fabToolbarClose"),
                        e(document).off("click.fabToolbarClose")
                    }),
                    e(document).on("click.fabToolbarClose", function(n) {
                        e(n.target).closest(u).length || (r(t),
                        e(window).off("scroll.fabToolbarClose"),
                        e(document).off("click.fabToolbarClose"))
                    })
                }, 100)
            }, 0)
        }
    }
      , r = function(e) {
        if ("true" === e.attr("data-open")) {
            var t, n, i = window.innerWidth, r = window.innerHeight, o = e.attr("data-origin-width"), a = e.attr("data-origin-bottom"), s = e.attr("data-origin-left"), l = e.find("> .btn-floating").first(), c = e.find("> ul").first(), u = e.find(".fab-backdrop"), d = l.css("background-color");
            t = s - i / 2 + o / 2,
            n = r - a,
            i / u.width(),
            e.removeClass("active"),
            e.attr("data-open", !1),
            e.css({
                "background-color": "transparent",
                transition: "none"
            }),
            l.css({
                transition: "none"
            }),
            u.css({
                transform: "scale(0)",
                "background-color": d
            }),
            c.find("> li > a").css({
                opacity: ""
            }),
            setTimeout(function() {
                u.remove(),
                e.css({
                    "text-align": "",
                    width: "",
                    bottom: "",
                    left: "",
                    overflow: "",
                    "background-color": "",
                    transform: "translate3d(" + -t + "px,0,0)"
                }),
                l.css({
                    overflow: "",
                    transform: "translate3d(0," + n + "px,0)"
                }),
                setTimeout(function() {
                    e.css({
                        transform: "translate3d(0,0,0)",
                        transition: "transform .2s"
                    }),
                    l.css({
                        transform: "translate3d(0,0,0)",
                        transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                    })
                }, 20)
            }, 200)
        }
    }
}(jQuery),
function(e) {
    Materialize.fadeInImage = function(t) {
        var n;
        if ("string" == typeof t)
            n = e(t);
        else {
            if ("object" != typeof t)
                return;
            n = t
        }
        n.css({
            opacity: 0
        }),
        e(n).velocity({
            opacity: 1
        }, {
            duration: 650,
            queue: !1,
            easing: "easeOutSine"
        }),
        e(n).velocity({
            opacity: 1
        }, {
            duration: 1300,
            queue: !1,
            easing: "swing",
            step: function(t, n) {
                n.start = 100;
                var i = t / 100
                  , r = 150 - (100 - t) / 1.75;
                r < 100 && (r = 100),
                t >= 0 && e(this).css({
                    "-webkit-filter": "grayscale(" + i + ")brightness(" + r + "%)",
                    filter: "grayscale(" + i + ")brightness(" + r + "%)"
                })
            }
        })
    }
    ,
    Materialize.showStaggeredList = function(t) {
        var n;
        if ("string" == typeof t)
            n = e(t);
        else {
            if ("object" != typeof t)
                return;
            n = t
        }
        var i = 0;
        n.find("li").velocity({
            translateX: "-100px"
        }, {
            duration: 0
        }),
        n.find("li").each(function() {
            e(this).velocity({
                opacity: "1",
                translateX: "0"
            }, {
                duration: 800,
                delay: i,
                easing: [60, 10]
            }),
            i += 120
        })
    }
    ,
    e(document).ready(function() {
        var t = !1
          , n = !1;
        e(".dismissable").each(function() {
            e(this).hammer({
                prevent_default: !1
            }).bind("pan", function(i) {
                if ("touch" === i.gesture.pointerType) {
                    var r = e(this)
                      , o = i.gesture.direction
                      , a = i.gesture.deltaX
                      , s = i.gesture.velocityX;
                    r.velocity({
                        translateX: a
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    4 === o && (a > r.innerWidth() / 2 || s < -.75) && (t = !0),
                    2 === o && (a < -1 * r.innerWidth() / 2 || s > .75) && (n = !0)
                }
            }).bind("panend", function(i) {
                if (Math.abs(i.gesture.deltaX) < e(this).innerWidth() / 2 && (n = !1,
                t = !1),
                "touch" === i.gesture.pointerType) {
                    var r = e(this);
                    if (t || n) {
                        var o;
                        o = t ? r.innerWidth() : -1 * r.innerWidth(),
                        r.velocity({
                            translateX: o
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                r.css("border", "none"),
                                r.velocity({
                                    height: 0,
                                    padding: 0
                                }, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        r.remove()
                                    }
                                })
                            }
                        })
                    } else
                        r.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                    t = !1,
                    n = !1
                }
            })
        })
    })
}(jQuery),
function(e) {
    var t = !1;
    Materialize.scrollFire = function(e) {
        var n = function() {
            for (var t = window.pageYOffset + window.innerHeight, n = 0; n < e.length; n++) {
                var i = e[n]
                  , r = i.selector
                  , o = i.offset
                  , a = i.callback
                  , s = document.querySelector(r);
                if (null !== s) {
                    if (t > s.getBoundingClientRect().top + window.pageYOffset + o && !0 !== i.done) {
                        if ("function" == typeof a)
                            a.call(this, s);
                        else if ("string" == typeof a) {
                            var l = new Function(a);
                            l(s)
                        }
                        i.done = !0
                    }
                }
            }
        }
          , i = Materialize.throttle(function() {
            n()
        }, e.throttle || 100);
        t || (window.addEventListener("scroll", i),
        window.addEventListener("resize", i),
        t = !0),
        setTimeout(i, 0)
    }
}(),
function(e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
}(function(e) {
    function t(o, a, l, d) {
        function f() {
            return t._.node("div", t._.node("div", t._.node("div", t._.node("div", k.component.nodes(b.open), w.box), w.wrap), w.frame), w.holder)
        }
        function p() {
            C.data(a, k).addClass(w.input).attr("tabindex", -1).val(C.data("value") ? k.get("select", x.format) : o.value),
            x.editable || C.on("focus." + b.id + " click." + b.id, function(e) {
                e.preventDefault(),
                k.$root.eq(0).focus()
            }).on("keydown." + b.id, g),
            r(o, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: o.id + "_root"
            })
        }
        function h() {
            k.$root.on({
                keydown: g,
                focusin: function(e) {
                    k.$root.removeClass(w.focused),
                    e.stopPropagation()
                },
                "mousedown click": function(t) {
                    var n = t.target;
                    n != k.$root.children()[0] && (t.stopPropagation(),
                    "mousedown" != t.type || e(n).is("input, select, textarea, button, option") || (t.preventDefault(),
                    k.$root.eq(0).focus()))
                }
            }).on({
                focus: function() {
                    C.addClass(w.target)
                },
                blur: function() {
                    C.removeClass(w.target)
                }
            }).on("focus.toOpen", m).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var t = e(this)
                  , n = t.data()
                  , i = t.hasClass(w.navDisabled) || t.hasClass(w.disabled)
                  , r = s();
                r = r && (r.type || r.href),
                (i || r && !e.contains(k.$root[0], r)) && k.$root.eq(0).focus(),
                !i && n.nav ? k.set("highlight", k.component.item.highlight, {
                    nav: n.nav
                }) : !i && "pick"in n ? k.set("select", n.pick) : n.clear ? k.clear().close(!0) : n.close && k.close(!0)
            }),
            r(k.$root[0], "hidden", !0)
        }
        function v() {
            var t;
            !0 === x.hiddenName ? (t = o.name,
            o.name = "") : (t = ["string" == typeof x.hiddenPrefix ? x.hiddenPrefix : "", "string" == typeof x.hiddenSuffix ? x.hiddenSuffix : "_submit"],
            t = t[0] + o.name + t[1]),
            k._hidden = e('<input type=hidden name="' + t + '"' + (C.data("value") || o.value ? ' value="' + k.get("select", x.formatSubmit) + '"' : "") + ">")[0],
            C.on("change." + b.id, function() {
                k._hidden.value = o.value ? k.get("select", x.formatSubmit) : ""
            }),
            x.container ? e(x.container).append(k._hidden) : C.after(k._hidden)
        }
        function g(e) {
            var t = e.keyCode
              , n = /^(8|46)$/.test(t);
            return 27 == t ? (k.close(),
            !1) : void ((32 == t || n || !b.open && k.component.key[t]) && (e.preventDefault(),
            e.stopPropagation(),
            n ? k.clear().close() : k.open()))
        }
        function m(e) {
            e.stopPropagation(),
            "focus" == e.type && k.$root.addClass(w.focused),
            k.open()
        }
        if (!o)
            return t;
        var y = !1
          , b = {
            id: o.id || "P" + Math.abs(~~(Math.random() * new Date))
        }
          , x = l ? e.extend(!0, {}, l.defaults, d) : d || {}
          , w = e.extend({}, t.klasses(), x.klass)
          , C = e(o)
          , T = function() {
            return this.start()
        }
          , k = T.prototype = {
            constructor: T,
            $node: C,
            start: function() {
                return b && b.start ? k : (b.methods = {},
                b.start = !0,
                b.open = !1,
                b.type = o.type,
                o.autofocus = o == s(),
                o.readOnly = !x.editable,
                o.id = o.id || b.id,
                "text" != o.type && (o.type = "text"),
                k.component = new l(k,x),
                k.$root = e(t._.node("div", f(), w.picker, 'id="' + o.id + '_root" tabindex="0"')),
                h(),
                x.formatSubmit && v(),
                p(),
                x.container ? e(x.container).append(k.$root) : C.after(k.$root),
                k.on({
                    start: k.component.onStart,
                    render: k.component.onRender,
                    stop: k.component.onStop,
                    open: k.component.onOpen,
                    close: k.component.onClose,
                    set: k.component.onSet
                }).on({
                    start: x.onStart,
                    render: x.onRender,
                    stop: x.onStop,
                    open: x.onOpen,
                    close: x.onClose,
                    set: x.onSet
                }),
                y = n(k.$root.children()[0]),
                o.autofocus && k.open(),
                k.trigger("start").trigger("render"))
            },
            render: function(e) {
                return e ? k.$root.html(f()) : k.$root.find("." + w.box).html(k.component.nodes(b.open)),
                k.trigger("render")
            },
            stop: function() {
                return b.start ? (k.close(),
                k._hidden && k._hidden.parentNode.removeChild(k._hidden),
                k.$root.remove(),
                C.removeClass(w.input).removeData(a),
                setTimeout(function() {
                    C.off("." + b.id)
                }, 0),
                o.type = b.type,
                o.readOnly = !1,
                k.trigger("stop"),
                b.methods = {},
                b.start = !1,
                k) : k
            },
            open: function(n) {
                return b.open ? k : (C.addClass(w.active),
                r(o, "expanded", !0),
                setTimeout(function() {
                    k.$root.addClass(w.opened),
                    r(k.$root[0], "hidden", !1)
                }, 0),
                !1 !== n && (b.open = !0,
                y && u.css("overflow", "hidden").css("padding-right", "+=" + i()),
                k.$root.eq(0).focus(),
                c.on("click." + b.id + " focusin." + b.id, function(e) {
                    var t = e.target;
                    t != o && t != document && 3 != e.which && k.close(t === k.$root.children()[0])
                }).on("keydown." + b.id, function(n) {
                    var i = n.keyCode
                      , r = k.component.key[i]
                      , o = n.target;
                    27 == i ? k.close(!0) : o != k.$root[0] || !r && 13 != i ? e.contains(k.$root[0], o) && 13 == i && (n.preventDefault(),
                    o.click()) : (n.preventDefault(),
                    r ? t._.trigger(k.component.key.go, k, [t._.trigger(r)]) : k.$root.find("." + w.highlighted).hasClass(w.disabled) || k.set("select", k.component.item.highlight).close())
                })),
                k.trigger("open"))
            },
            close: function(e) {
                return e && (k.$root.off("focus.toOpen").eq(0).focus(),
                setTimeout(function() {
                    k.$root.on("focus.toOpen", m)
                }, 0)),
                C.removeClass(w.active),
                r(o, "expanded", !1),
                setTimeout(function() {
                    k.$root.removeClass(w.opened + " " + w.focused),
                    r(k.$root[0], "hidden", !0)
                }, 0),
                b.open ? (b.open = !1,
                y && u.css("overflow", "").css("padding-right", "-=" + i()),
                c.off("." + b.id),
                k.trigger("close")) : k
            },
            clear: function(e) {
                return k.set("clear", null, e)
            },
            set: function(t, n, i) {
                var r, o, a = e.isPlainObject(t), s = a ? t : {};
                if (i = a && e.isPlainObject(n) ? n : i || {},
                t) {
                    a || (s[t] = n);
                    for (r in s)
                        o = s[r],
                        r in k.component.item && (void 0 === o && (o = null),
                        k.component.set(r, o, i)),
                        "select" != r && "clear" != r || C.val("clear" == r ? "" : k.get(r, x.format)).trigger("change");
                    k.render()
                }
                return i.muted ? k : k.trigger("set", s)
            },
            get: function(e, n) {
                if (e = e || "value",
                null != b[e])
                    return b[e];
                if ("valueSubmit" == e) {
                    if (k._hidden)
                        return k._hidden.value;
                    e = "value"
                }
                if ("value" == e)
                    return o.value;
                if (e in k.component.item) {
                    if ("string" == typeof n) {
                        var i = k.component.get(e);
                        return i ? t._.trigger(k.component.formats.toString, k.component, [n, i]) : ""
                    }
                    return k.component.get(e)
                }
            },
            on: function(t, n, i) {
                var r, o, a = e.isPlainObject(t), s = a ? t : {};
                if (t) {
                    a || (s[t] = n);
                    for (r in s)
                        o = s[r],
                        i && (r = "_" + r),
                        b.methods[r] = b.methods[r] || [],
                        b.methods[r].push(o)
                }
                return k
            },
            off: function() {
                var e, t, n = arguments;
                for (e = 0,
                namesCount = n.length; e < namesCount; e += 1)
                    (t = n[e])in b.methods && delete b.methods[t];
                return k
            },
            trigger: function(e, n) {
                var i = function(e) {
                    var i = b.methods[e];
                    i && i.map(function(e) {
                        t._.trigger(e, k, [n])
                    })
                };
                return i("_" + e),
                i(e),
                k
            }
        };
        return new T
    }
    function n(e) {
        var t, n = "position";
        return e.currentStyle ? t = e.currentStyle[n] : window.getComputedStyle && (t = getComputedStyle(e)[n]),
        "fixed" == t
    }
    function i() {
        if (u.height() <= l.height())
            return 0;
        var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body")
          , n = t[0].offsetWidth;
        t.css("overflow", "scroll");
        var i = e('<div style="width:100%" />').appendTo(t)
          , r = i[0].offsetWidth;
        return t.remove(),
        n - r
    }
    function r(t, n, i) {
        if (e.isPlainObject(n))
            for (var r in n)
                o(t, r, n[r]);
        else
            o(t, n, i)
    }
    function o(e, t, n) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, n)
    }
    function a(t, n) {
        e.isPlainObject(t) || (t = {
            attribute: n
        }),
        n = "";
        for (var i in t) {
            var r = ("role" == i ? "" : "aria-") + i;
            n += null == t[i] ? "" : r + '="' + t[i] + '"'
        }
        return n
    }
    function s() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var l = e(window)
      , c = e(document)
      , u = e(document.documentElement);
    return t.klasses = function(e) {
        return e = e || "picker",
        {
            picker: e,
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    }
    ,
    t._ = {
        group: function(e) {
            for (var n, i = "", r = t._.trigger(e.min, e); r <= t._.trigger(e.max, e, [r]); r += e.i)
                n = t._.trigger(e.item, e, [r]),
                i += t._.node(e.node, n[0], n[1], n[2]);
            return i
        },
        node: function(t, n, i, r) {
            return n ? (n = e.isArray(n) ? n.join("") : n,
            i = i ? ' class="' + i + '"' : "",
            r = r ? " " + r : "",
            "<" + t + i + r + ">" + n + "</" + t + ">") : ""
        },
        lead: function(e) {
            return (e < 10 ? "0" : "") + e
        },
        trigger: function(e, t, n) {
            return "function" == typeof e ? e.apply(t, n || []) : e
        },
        digits: function(e) {
            return /\d/.test(e[1]) ? 2 : 1
        },
        isDate: function(e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        },
        isInteger: function(e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
        },
        ariaAttr: a
    },
    t.extend = function(n, i) {
        e.fn[n] = function(r, o) {
            var a = this.data(n);
            return "picker" == r ? a : a && "string" == typeof r ? t._.trigger(a[r], a, [o]) : this.each(function() {
                e(this).data(n) || new t(this,n,i,r)
            })
        }
        ,
        e.fn[n].defaults = i.defaults
    }
    ,
    t
}),
function(e) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
}(function(e, t) {
    function n(e, t) {
        var n = this
          , i = e.$node[0]
          , r = i.value
          , o = e.$node.data("value")
          , a = o || r
          , s = o ? t.formatSubmit : t.format
          , l = function() {
            return i.currentStyle ? "rtl" == i.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
        };
        n.settings = t,
        n.$node = e.$node,
        n.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        },
        n.item = {},
        n.item.clear = null,
        n.item.disable = (t.disable || []).slice(0),
        n.item.enable = -function(e) {
            return !0 === e[0] ? e.shift() : -1
        }(n.item.disable),
        n.set("min", t.min).set("max", t.max).set("now"),
        a ? n.set("select", a, {
            format: s
        }) : n.set("select", null).set("highlight", n.item.now),
        n.key = {
            40: 7,
            38: -7,
            39: function() {
                return l() ? -1 : 1
            },
            37: function() {
                return l() ? 1 : -1
            },
            go: function(e) {
                var t = n.item.highlight
                  , i = new Date(t.year,t.month,t.date + e);
                n.set("highlight", i, {
                    interval: e
                }),
                this.render()
            }
        },
        e.on("render", function() {
            e.$root.find("." + t.klass.selectMonth).on("change", function() {
                var n = this.value;
                n && (e.set("highlight", [e.get("view").year, n, e.get("highlight").date]),
                e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }),
            e.$root.find("." + t.klass.selectYear).on("change", function() {
                var n = this.value;
                n && (e.set("highlight", [n, e.get("view").month, e.get("highlight").date]),
                e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function() {
            var i = "";
            n.disabled(n.get("now")) && (i = ":not(." + t.klass.buttonToday + ")"),
            e.$root.find("button" + i + ", select").attr("disabled", !1)
        }, 1).on("close", function() {
            e.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }
    var i = e._;
    n.prototype.set = function(e, t, n) {
        var i = this
          , r = i.item;
        return null === t ? ("clear" == e && (e = "select"),
        r[e] = t,
        i) : (r["enable" == e ? "disable" : "flip" == e ? "enable" : e] = i.queue[e].split(" ").map(function(r) {
            return t = i[r](e, t, n)
        }).pop(),
        "select" == e ? i.set("highlight", r.select, n) : "highlight" == e ? i.set("view", r.highlight, n) : e.match(/^(flip|min|max|disable|enable)$/) && (r.select && i.disabled(r.select) && i.set("select", r.select, n),
        r.highlight && i.disabled(r.highlight) && i.set("highlight", r.highlight, n)),
        i)
    }
    ,
    n.prototype.get = function(e) {
        return this.item[e]
    }
    ,
    n.prototype.create = function(e, n, r) {
        var o, a = this;
        return n = void 0 === n ? e : n,
        n == -1 / 0 || n == 1 / 0 ? o = n : t.isPlainObject(n) && i.isInteger(n.pick) ? n = n.obj : t.isArray(n) ? (n = new Date(n[0],n[1],n[2]),
        n = i.isDate(n) ? n : a.create().obj) : n = i.isInteger(n) || i.isDate(n) ? a.normalize(new Date(n), r) : a.now(e, n, r),
        {
            year: o || n.getFullYear(),
            month: o || n.getMonth(),
            date: o || n.getDate(),
            day: o || n.getDay(),
            obj: o || n,
            pick: o || n.getTime()
        }
    }
    ,
    n.prototype.createRange = function(e, n) {
        var r = this
          , o = function(e) {
            return !0 === e || t.isArray(e) || i.isDate(e) ? r.create(e) : e
        };
        return i.isInteger(e) || (e = o(e)),
        i.isInteger(n) || (n = o(n)),
        i.isInteger(e) && t.isPlainObject(n) ? e = [n.year, n.month, n.date + e] : i.isInteger(n) && t.isPlainObject(e) && (n = [e.year, e.month, e.date + n]),
        {
            from: o(e),
            to: o(n)
        }
    }
    ,
    n.prototype.withinRange = function(e, t) {
        return e = this.createRange(e.from, e.to),
        t.pick >= e.from.pick && t.pick <= e.to.pick
    }
    ,
    n.prototype.overlapRanges = function(e, t) {
        var n = this;
        return e = n.createRange(e.from, e.to),
        t = n.createRange(t.from, t.to),
        n.withinRange(e, t.from) || n.withinRange(e, t.to) || n.withinRange(t, e.from) || n.withinRange(t, e.to)
    }
    ,
    n.prototype.now = function(e, t, n) {
        return t = new Date,
        n && n.rel && t.setDate(t.getDate() + n.rel),
        this.normalize(t, n)
    }
    ,
    n.prototype.navigate = function(e, n, i) {
        var r, o, a, s, l = t.isArray(n), c = t.isPlainObject(n), u = this.item.view;
        if (l || c) {
            for (c ? (o = n.year,
            a = n.month,
            s = n.date) : (o = +n[0],
            a = +n[1],
            s = +n[2]),
            i && i.nav && u && u.month !== a && (o = u.year,
            a = u.month),
            r = new Date(o,a + (i && i.nav ? i.nav : 0),1),
            o = r.getFullYear(),
            a = r.getMonth(); new Date(o,a,s).getMonth() !== a; )
                s -= 1;
            n = [o, a, s]
        }
        return n
    }
    ,
    n.prototype.normalize = function(e) {
        return e.setHours(0, 0, 0, 0),
        e
    }
    ,
    n.prototype.measure = function(e, t) {
        var n = this;
        return t ? "string" == typeof t ? t = n.parse(e, t) : i.isInteger(t) && (t = n.now(e, t, {
            rel: t
        })) : t = "min" == e ? -1 / 0 : 1 / 0,
        t
    }
    ,
    n.prototype.viewset = function(e, t) {
        return this.create([t.year, t.month, 1])
    }
    ,
    n.prototype.validate = function(e, n, r) {
        var o, a, s, l, c = this, u = n, d = r && r.interval ? r.interval : 1, f = -1 === c.item.enable, p = c.item.min, h = c.item.max, v = f && c.item.disable.filter(function(e) {
            if (t.isArray(e)) {
                var r = c.create(e).pick;
                r < n.pick ? o = !0 : r > n.pick && (a = !0)
            }
            return i.isInteger(e)
        }).length;
        if ((!r || !r.nav) && (!f && c.disabled(n) || f && c.disabled(n) && (v || o || a) || !f && (n.pick <= p.pick || n.pick >= h.pick)))
            for (f && !v && (!a && d > 0 || !o && d < 0) && (d *= -1); c.disabled(n) && (Math.abs(d) > 1 && (n.month < u.month || n.month > u.month) && (n = u,
            d = d > 0 ? 1 : -1),
            n.pick <= p.pick ? (s = !0,
            d = 1,
            n = c.create([p.year, p.month, p.date + (n.pick === p.pick ? 0 : -1)])) : n.pick >= h.pick && (l = !0,
            d = -1,
            n = c.create([h.year, h.month, h.date + (n.pick === h.pick ? 0 : 1)])),
            !s || !l); )
                n = c.create([n.year, n.month, n.date + d]);
        return n
    }
    ,
    n.prototype.disabled = function(e) {
        var n = this
          , r = n.item.disable.filter(function(r) {
            return i.isInteger(r) ? e.day === (n.settings.firstDay ? r : r - 1) % 7 : t.isArray(r) || i.isDate(r) ? e.pick === n.create(r).pick : t.isPlainObject(r) ? n.withinRange(r, e) : void 0
        });
        return r = r.length && !r.filter(function(e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length,
        -1 === n.item.enable ? !r : r || e.pick < n.item.min.pick || e.pick > n.item.max.pick
    }
    ,
    n.prototype.parse = function(e, t, n) {
        var r = this
          , o = {};
        return t && "string" == typeof t ? (n && n.format || (n = n || {},
        n.format = r.settings.format),
        r.formats.toArray(n.format).map(function(e) {
            var n = r.formats[e]
              , a = n ? i.trigger(n, r, [t, o]) : e.replace(/^!/, "").length;
            n && (o[e] = t.substr(0, a)),
            t = t.substr(a)
        }),
        [o.yyyy || o.yy, +(o.mm || o.m) - 1, o.dd || o.d]) : t
    }
    ,
    n.prototype.formats = function() {
        function e(e, t, n) {
            var i = e.match(/\w+/)[0];
            return n.mm || n.m || (n.m = t.indexOf(i) + 1),
            i.length
        }
        function t(e) {
            return e.match(/\w+/)[0].length
        }
        return {
            d: function(e, t) {
                return e ? i.digits(e) : t.date
            },
            dd: function(e, t) {
                return e ? 2 : i.lead(t.date)
            },
            ddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysShort[n.day]
            },
            dddd: function(e, n) {
                return e ? t(e) : this.settings.weekdaysFull[n.day]
            },
            m: function(e, t) {
                return e ? i.digits(e) : t.month + 1
            },
            mm: function(e, t) {
                return e ? 2 : i.lead(t.month + 1)
            },
            mmm: function(t, n) {
                var i = this.settings.monthsShort;
                return t ? e(t, i, n) : i[n.month]
            },
            mmmm: function(t, n) {
                var i = this.settings.monthsFull;
                return t ? e(t, i, n) : i[n.month]
            },
            yy: function(e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            },
            yyyy: function(e, t) {
                return e ? 4 : t.year
            },
            toArray: function(e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(e, t) {
                var n = this;
                return n.formats.toArray(e).map(function(e) {
                    return i.trigger(n.formats[e], n, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    }(),
    n.prototype.isDateExact = function(e, n) {
        var r = this;
        return i.isInteger(e) && i.isInteger(n) || "boolean" == typeof e && "boolean" == typeof n ? e === n : (i.isDate(e) || t.isArray(e)) && (i.isDate(n) || t.isArray(n)) ? r.create(e).pick === r.create(n).pick : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && r.isDateExact(e.from, n.from) && r.isDateExact(e.to, n.to)
    }
    ,
    n.prototype.isDateOverlap = function(e, n) {
        var r = this
          , o = r.settings.firstDay ? 1 : 0;
        return i.isInteger(e) && (i.isDate(n) || t.isArray(n)) ? (e = e % 7 + o) === r.create(n).day + 1 : i.isInteger(n) && (i.isDate(e) || t.isArray(e)) ? (n = n % 7 + o) === r.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(n)) && r.overlapRanges(e, n)
    }
    ,
    n.prototype.flipEnable = function(e) {
        var t = this.item;
        t.enable = e || (-1 == t.enable ? 1 : -1)
    }
    ,
    n.prototype.deactivate = function(e, n) {
        var r = this
          , o = r.item.disable.slice(0);
        return "flip" == n ? r.flipEnable() : !1 === n ? (r.flipEnable(1),
        o = []) : !0 === n ? (r.flipEnable(-1),
        o = []) : n.map(function(e) {
            for (var n, a = 0; a < o.length; a += 1)
                if (r.isDateExact(e, o[a])) {
                    n = !0;
                    break
                }
            n || (i.isInteger(e) || i.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && o.push(e)
        }),
        o
    }
    ,
    n.prototype.activate = function(e, n) {
        var r = this
          , o = r.item.disable
          , a = o.length;
        return "flip" == n ? r.flipEnable() : !0 === n ? (r.flipEnable(1),
        o = []) : !1 === n ? (r.flipEnable(-1),
        o = []) : n.map(function(e) {
            var n, s, l, c;
            for (l = 0; l < a; l += 1) {
                if (s = o[l],
                r.isDateExact(s, e)) {
                    n = o[l] = null,
                    c = !0;
                    break
                }
                if (r.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0,
                    n = e) : t.isArray(e) ? (n = e,
                    n[3] || n.push("inverted")) : i.isDate(e) && (n = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (n)
                for (l = 0; l < a; l += 1)
                    if (r.isDateExact(o[l], e)) {
                        o[l] = null;
                        break
                    }
            if (c)
                for (l = 0; l < a; l += 1)
                    if (r.isDateOverlap(o[l], e)) {
                        o[l] = null;
                        break
                    }
            n && o.push(n)
        }),
        o.filter(function(e) {
            return null != e
        })
    }
    ,
    n.prototype.nodes = function(e) {
        var t = this
          , n = t.settings
          , r = t.item
          , o = r.now
          , a = r.select
          , s = r.highlight
          , l = r.view
          , c = r.disable
          , u = r.min
          , d = r.max
          , f = function(e, t) {
            return n.firstDay && (e.push(e.shift()),
            t.push(t.shift())),
            i.node("thead", i.node("tr", i.group({
                min: 0,
                max: 6,
                i: 1,
                node: "th",
                item: function(i) {
                    return [e[i], n.klass.weekdays, 'scope=col title="' + t[i] + '"']
                }
            })))
        }((n.showWeekdaysFull ? n.weekdaysFull : n.weekdaysLetter).slice(0), n.weekdaysFull.slice(0))
          , p = function(e) {
            return i.node("div", " ", n.klass["nav" + (e ? "Next" : "Prev")] + (e && l.year >= d.year && l.month >= d.month || !e && l.year <= u.year && l.month <= u.month ? " " + n.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + i.ariaAttr({
                role: "button",
                controls: t.$node[0].id + "_table"
            }) + ' title="' + (e ? n.labelMonthNext : n.labelMonthPrev) + '"')
        }
          , h = function(r) {
            var o = n.showMonthsShort ? n.monthsShort : n.monthsFull;
            return "short_months" == r && (o = n.monthsShort),
            n.selectMonths && void 0 == r ? i.node("select", i.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(e) {
                    return [o[e], 0, "value=" + e + (l.month == e ? " selected" : "") + (l.year == u.year && e < u.month || l.year == d.year && e > d.month ? " disabled" : "")]
                }
            }), n.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + i.ariaAttr({
                controls: t.$node[0].id + "_table"
            }) + ' title="' + n.labelMonthSelect + '"') : "short_months" == r ? null != a ? i.node("div", o[a.month]) : i.node("div", o[l.month]) : i.node("div", o[l.month], n.klass.month)
        }
          , v = function(r) {
            var o = l.year
              , a = !0 === n.selectYears ? 5 : ~~(n.selectYears / 2);
            if (a) {
                var s = u.year
                  , c = d.year
                  , f = o - a
                  , p = o + a;
                if (s > f && (p += s - f,
                f = s),
                c < p) {
                    var h = f - s
                      , v = p - c;
                    f -= h > v ? v : h,
                    p = c
                }
                if (n.selectYears && void 0 == r)
                    return i.node("select", i.group({
                        min: f,
                        max: p,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [e, 0, "value=" + e + (o == e ? " selected" : "")]
                        }
                    }), n.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + i.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + n.labelYearSelect + '"')
            }
            return "raw" == r ? i.node("div", o) : i.node("div", o, n.klass.year)
        };
        return createDayLabel = function() {
            return null != a ? i.node("div", a.date) : i.node("div", o.date)
        }
        ,
        createWeekdayLabel = function() {
            var e;
            return e = null != a ? a.day : o.day,
            n.weekdaysFull[e]
        }
        ,
        i.node("div", i.node("div", createWeekdayLabel(), "picker__weekday-display") + i.node("div", h("short_months"), n.klass.month_display) + i.node("div", createDayLabel(), n.klass.day_display) + i.node("div", v("raw"), n.klass.year_display), n.klass.date_display) + i.node("div", i.node("div", (n.selectYears,
        h() + v() + p() + p(1)), n.klass.header) + i.node("table", f + i.node("tbody", i.group({
            min: 0,
            max: 5,
            i: 1,
            node: "tr",
            item: function(e) {
                var r = n.firstDay && 0 === t.create([l.year, l.month, 1]).day ? -7 : 0;
                return [i.group({
                    min: 7 * e - l.day + r + 1,
                    max: function() {
                        return this.min + 7 - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(e) {
                        e = t.create([l.year, l.month, e + (n.firstDay ? 1 : 0)]);
                        var r = a && a.pick == e.pick
                          , f = s && s.pick == e.pick
                          , p = c && t.disabled(e) || e.pick < u.pick || e.pick > d.pick
                          , h = i.trigger(t.formats.toString, t, [n.format, e]);
                        return [i.node("div", e.date, function(t) {
                            return t.push(l.month == e.month ? n.klass.infocus : n.klass.outfocus),
                            o.pick == e.pick && t.push(n.klass.now),
                            r && t.push(n.klass.selected),
                            f && t.push(n.klass.highlighted),
                            p && t.push(n.klass.disabled),
                            t.join(" ")
                        }([n.klass.day]), "data-pick=" + e.pick + " " + i.ariaAttr({
                            role: "gridcell",
                            label: h,
                            selected: !(!r || t.$node.val() !== h) || null,
                            activedescendant: !!f || null,
                            disabled: !!p || null
                        })), "", i.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), n.klass.table, 'id="' + t.$node[0].id + '_table" ' + i.ariaAttr({
            role: "grid",
            controls: t.$node[0].id,
            readonly: !0
        })), n.klass.calendar_container) + i.node("div", i.node("button", n.today, "btn-flat picker__today", "type=button data-pick=" + o.pick + (e && !t.disabled(o) ? "" : " disabled") + " " + i.ariaAttr({
            controls: t.$node[0].id
        })) + i.node("button", n.clear, "btn-flat picker__clear", "type=button data-clear=1" + (e ? "" : " disabled") + " " + i.ariaAttr({
            controls: t.$node[0].id
        })) + i.node("button", n.close, "btn-flat picker__close", "type=button data-close=true " + (e ? "" : " disabled") + " " + i.ariaAttr({
            controls: t.$node[0].id
        })), n.klass.footer)
    }
    ,
    n.defaults = function(e) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: e + "table",
                header: e + "header",
                date_display: e + "date-display",
                day_display: e + "day-display",
                month_display: e + "month-display",
                year_display: e + "year-display",
                calendar_container: e + "calendar-container",
                navPrev: e + "nav--prev",
                navNext: e + "nav--next",
                navDisabled: e + "nav--disabled",
                month: e + "month",
                year: e + "year",
                selectMonth: e + "select--month",
                selectYear: e + "select--year",
                weekdays: e + "weekday",
                day: e + "day",
                disabled: e + "day--disabled",
                selected: e + "day--selected",
                highlighted: e + "day--highlighted",
                now: e + "day--today",
                infocus: e + "day--infocus",
                outfocus: e + "day--outfocus",
                footer: e + "footer",
                buttonClear: e + "button--clear",
                buttonToday: e + "button--today",
                buttonClose: e + "button--close"
            }
        }
    }(e.klasses().picker + "__"),
    e.extend("pickadate", n)
}),
function(e) {
    function t() {
        var t = +e(this).attr("data-length")
          , n = +e(this).val().length
          , i = n <= t;
        e(this).parent().find('span[class="character-counter"]').html(n + "/" + t),
        r(i, e(this))
    }
    function n(t) {
        var n = t.parent().find('span[class="character-counter"]');
        n.length || (n = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1),
        t.parent().append(n))
    }
    function i() {
        e(this).parent().find('span[class="character-counter"]').html("")
    }
    function r(e, t) {
        var n = t.hasClass("invalid");
        e && n ? t.removeClass("invalid") : e || n || (t.removeClass("valid"),
        t.addClass("invalid"))
    }
    e.fn.characterCounter = function() {
        return this.each(function() {
            var r = e(this);
            r.parent().find('span[class="character-counter"]').length || void 0 !== r.attr("data-length") && (r.on("input", t),
            r.on("focus", t),
            r.on("blur", i),
            n(r))
        })
    }
    ,
    e(document).ready(function() {
        e("input, textarea").characterCounter()
    })
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var n = {
                duration: 200,
                dist: -100,
                shift: 0,
                padding: 0,
                fullWidth: !1,
                indicators: !1,
                noWrap: !1,
                onCycleTo: null
            };
            t = e.extend(n, t);
            var i = Materialize.objectSelectorString(e(this));
            return this.each(function(n) {
                function r(e) {
                    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
                }
                function o(e) {
                    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
                }
                function a(e) {
                    return e >= T ? e % T : e < 0 ? a(T + e % T) : e
                }
                function s(n) {
                    var i, r, o, s, l, c, u, d = x;
                    if (b = "number" == typeof n ? n : b,
                    x = Math.floor((b + C / 2) / C),
                    o = b - x * C,
                    s = o < 0 ? 1 : -1,
                    l = -s * o * 2 / C,
                    r = T >> 1,
                    t.fullWidth ? u = "translateX(0)" : (u = "translateX(" + (H[0].clientWidth - g) / 2 + "px) ",
                    u += "translateY(" + (H[0].clientHeight - m) / 2 + "px)"),
                    F) {
                        var f = x % T
                          , p = I.find(".indicator-item.active");
                        p.index() !== f && (p.removeClass("active"),
                        I.find(".indicator-item").eq(f).addClass("active"))
                    }
                    for ((!t.noWrap || x >= 0 && x < T) && (c = v[a(x)],
                    e(c).hasClass("active") || (H.find(".carousel-item").removeClass("active"),
                    e(c).addClass("active")),
                    c.style[O] = u + " translateX(" + -o / 2 + "px) translateX(" + s * t.shift * l * i + "px) translateZ(" + t.dist * l + "px)",
                    c.style.zIndex = 0,
                    t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l,
                    c.style.opacity = tweenedOpacity,
                    c.style.display = "block"),
                    i = 1; i <= r; ++i)
                        t.fullWidth ? (zTranslation = t.dist,
                        tweenedOpacity = i === r && o < 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * i + l * s),
                        tweenedOpacity = 1 - .2 * (2 * i + l * s)),
                        (!t.noWrap || x + i < T) && (c = v[a(x + i)],
                        c.style[O] = u + " translateX(" + (t.shift + (C * i - o) / 2) + "px) translateZ(" + zTranslation + "px)",
                        c.style.zIndex = -i,
                        c.style.opacity = tweenedOpacity,
                        c.style.display = "block"),
                        t.fullWidth ? (zTranslation = t.dist,
                        tweenedOpacity = i === r && o > 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * i - l * s),
                        tweenedOpacity = 1 - .2 * (2 * i - l * s)),
                        (!t.noWrap || x - i >= 0) && (c = v[a(x - i)],
                        c.style[O] = u + " translateX(" + (-t.shift + (-C * i - o) / 2) + "px) translateZ(" + zTranslation + "px)",
                        c.style.zIndex = -i,
                        c.style.opacity = tweenedOpacity,
                        c.style.display = "block");
                    if ((!t.noWrap || x >= 0 && x < T) && (c = v[a(x)],
                    c.style[O] = u + " translateX(" + -o / 2 + "px) translateX(" + s * t.shift * l + "px) translateZ(" + t.dist * l + "px)",
                    c.style.zIndex = 0,
                    t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l,
                    c.style.opacity = tweenedOpacity,
                    c.style.display = "block"),
                    d !== x && "function" == typeof t.onCycleTo) {
                        var h = H.find(".carousel-item").eq(a(x));
                        t.onCycleTo.call(this, h, q)
                    }
                }
                function l() {
                    var e, t, n, i;
                    e = Date.now(),
                    t = e - N,
                    N = e,
                    n = b - j,
                    j = b,
                    i = 1e3 * n / (1 + t),
                    A = .8 * i + .2 * A
                }
                function c() {
                    var e, n;
                    E && (e = Date.now() - N,
                    n = E * Math.exp(-e / t.duration),
                    n > 2 || n < -2 ? (s(P - n),
                    requestAnimationFrame(c)) : s(P))
                }
                function u(n) {
                    if (q)
                        return n.preventDefault(),
                        n.stopPropagation(),
                        !1;
                    if (!t.fullWidth) {
                        var i = e(n.target).closest(".carousel-item").index();
                        0 !== x % T - i && (n.preventDefault(),
                        n.stopPropagation()),
                        d(i)
                    }
                }
                function d(e) {
                    var n = x % T - e;
                    t.noWrap || (n < 0 ? Math.abs(n + T) < Math.abs(n) && (n += T) : n > 0 && Math.abs(n - T) < n && (n -= T)),
                    n < 0 ? H.trigger("carouselNext", [Math.abs(n)]) : n > 0 && H.trigger("carouselPrev", [n])
                }
                function f(e) {
                    e.preventDefault(),
                    w = !0,
                    q = !1,
                    M = !1,
                    k = r(e),
                    S = o(e),
                    A = E = 0,
                    j = b,
                    N = Date.now(),
                    clearInterval(D),
                    D = setInterval(l, 100)
                }
                function p(e) {
                    var t, n;
                    if (w)
                        if (t = r(e),
                        y = o(e),
                        n = k - t,
                        Math.abs(S - y) < 30 && !M)
                            (n > 2 || n < -2) && (q = !0,
                            k = t,
                            s(b + n));
                        else {
                            if (q)
                                return e.preventDefault(),
                                e.stopPropagation(),
                                !1;
                            M = !0
                        }
                    if (q)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                }
                function h(e) {
                    if (w)
                        return w = !1,
                        clearInterval(D),
                        P = b,
                        (A > 10 || A < -10) && (E = .9 * A,
                        P = b + E),
                        P = Math.round(P / C) * C,
                        t.noWrap && (P >= C * (T - 1) ? P = C * (T - 1) : P < 0 && (P = 0)),
                        E = P - b,
                        N = Date.now(),
                        requestAnimationFrame(c),
                        q && (e.preventDefault(),
                        e.stopPropagation()),
                        !1
                }
                var v, g, m, b, x, w, C, T, k, S, E, P, A, O, j, N, D, q, M, L = i + n, I = e('<ul class="indicators"></ul>'), H = e(this), F = H.attr("data-indicators") || t.indicators;
                if (H.hasClass("initialized"))
                    return e(this).trigger("carouselNext", [1e-6]),
                    !0;
                if (t.fullWidth) {
                    t.dist = 0;
                    var W = H.find(".carousel-item img").first();
                    W.length ? imageHeight = W.on("load", function() {
                        H.css("height", e(this).height())
                    }) : (imageHeight = H.find(".carousel-item").first().height(),
                    H.css("height", imageHeight)),
                    F && H.find(".carousel-fixed-item").addClass("with-indicators")
                }
                H.addClass("initialized"),
                w = !1,
                b = P = 0,
                v = [],
                g = H.find(".carousel-item").first().innerWidth(),
                m = H.find(".carousel-item").first().innerHeight(),
                C = 2 * g + t.padding,
                H.find(".carousel-item").each(function(t) {
                    if (v.push(e(this)[0]),
                    F) {
                        var n = e('<li class="indicator-item"></li>');
                        0 === t && n.addClass("active"),
                        n.click(function(t) {
                            t.stopPropagation(),
                            d(e(this).index())
                        }),
                        I.append(n)
                    }
                }),
                F && H.append(I),
                T = v.length,
                O = "transform",
                ["webkit", "Moz", "O", "ms"].every(function(e) {
                    var t = e + "Transform";
                    return void 0 === document.body.style[t] || (O = t,
                    !1)
                }),
                e(window).off("resize." + L).on("resize." + L, function() {
                    t.fullWidth ? (g = H.find(".carousel-item").first().innerWidth(),
                    m = H.find(".carousel-item").first().innerHeight(),
                    C = 2 * g + t.padding,
                    b = 2 * x * g,
                    P = b) : s()
                }),
                function() {
                    void 0 !== window.ontouchstart && (H[0].addEventListener("touchstart", f),
                    H[0].addEventListener("touchmove", p),
                    H[0].addEventListener("touchend", h)),
                    H[0].addEventListener("mousedown", f),
                    H[0].addEventListener("mousemove", p),
                    H[0].addEventListener("mouseup", h),
                    H[0].addEventListener("mouseleave", h),
                    H[0].addEventListener("click", u)
                }(),
                s(b),
                e(this).on("carouselNext", function(e, t) {
                    void 0 === t && (t = 1),
                    P = C * Math.round(b / C) + C * t,
                    b !== P && (E = P - b,
                    N = Date.now(),
                    requestAnimationFrame(c))
                }),
                e(this).on("carouselPrev", function(e, t) {
                    void 0 === t && (t = 1),
                    P = C * Math.round(b / C) - C * t,
                    b !== P && (E = P - b,
                    N = Date.now(),
                    requestAnimationFrame(c))
                }),
                e(this).on("carouselSet", function(e, t) {
                    void 0 === t && (t = 0),
                    d(t)
                })
            })
        },
        next: function(t) {
            e(this).trigger("carouselNext", [t])
        },
        prev: function(t) {
            e(this).trigger("carouselPrev", [t])
        },
        set: function(t) {
            e(this).trigger("carouselSet", [t])
        }
    };
    e.fn.carousel = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.carousel") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            return this.each(function() {
                var n = e("#" + e(this).attr("data-activates"))
                  , i = (e("body"),
                e(this))
                  , r = i.parent(".tap-target-wrapper")
                  , o = r.find(".tap-target-wave")
                  , a = r.find(".tap-target-origin")
                  , s = i.find(".tap-target-content");
                r.length || (r = i.wrap(e('<div class="tap-target-wrapper"></div>')).parent()),
                s.length || (s = e('<div class="tap-target-content"></div>'),
                i.append(s)),
                o.length || (o = e('<div class="tap-target-wave"></div>'),
                a.length || (a = n.clone(!0, !0),
                a.addClass("tap-target-origin"),
                a.removeAttr("id"),
                a.removeAttr("style"),
                o.append(a)),
                r.append(o));
                var l = function() {
                    r.is(".open") && (r.removeClass("open"),
                    a.off("click.tapTarget"),
                    e(document).off("click.tapTarget"))
                };
                "open" == t && (function() {
                    var t = "fixed" === n.css("position");
                    if (!t)
                        for (var a = n.parents(), l = 0; l < a.length && !(t = "fixed" == e(a[l]).css("position")); l++)
                            ;
                    var c = n.outerWidth()
                      , u = n.outerHeight()
                      , d = t ? n.offset().top - e(document).scrollTop() : n.offset().top
                      , f = t ? n.offset().left - e(document).scrollLeft() : n.offset().left
                      , p = e(window).width()
                      , h = e(window).height()
                      , v = p / 2
                      , g = h / 2
                      , m = f <= v
                      , y = f > v
                      , b = d <= g
                      , x = d > g
                      , w = f >= .25 * p && f <= .75 * p
                      , C = i.outerWidth()
                      , T = i.outerHeight()
                      , k = d + u / 2 - T / 2
                      , S = f + c / 2 - C / 2
                      , E = t ? "fixed" : "absolute"
                      , P = w ? C : C / 2 + c
                      , A = T / 2
                      , O = b ? T / 2 : 0
                      , j = m && !w ? C / 2 - c : 0
                      , N = c
                      , D = x ? "bottom" : "top"
                      , q = 2 * c
                      , M = q
                      , L = T / 2 - M / 2
                      , I = C / 2 - q / 2
                      , H = {};
                    H.top = b ? k : "",
                    H.right = y ? p - S - C : "",
                    H.bottom = x ? h - k - T : "",
                    H.left = m ? S : "",
                    H.position = E,
                    r.css(H),
                    s.css({
                        width: P,
                        height: A,
                        top: O,
                        right: 0,
                        bottom: 0,
                        left: j,
                        padding: N,
                        verticalAlign: D
                    }),
                    o.css({
                        top: L,
                        left: I,
                        width: q,
                        height: M
                    })
                }(),
                function() {
                    r.is(".open") || (r.addClass("open"),
                    setTimeout(function() {
                        a.off("click.tapTarget").on("click.tapTarget", function(e) {
                            l(),
                            a.off("click.tapTarget")
                        }),
                        e(document).off("click.tapTarget").on("click.tapTarget", function(t) {
                            l(),
                            e(document).off("click.tapTarget")
                        })
                    }, 0))
                }()),
                "close" == t && l()
            })
        },
        open: function() {},
        close: function() {}
    };
    e.fn.tapTarget = function(n) {
        return t[n] || "object" == typeof n ? t.init.apply(this, arguments) : void e.error("Method " + n + " does not exist on jQuery.tap-target")
    }
}(jQuery);
