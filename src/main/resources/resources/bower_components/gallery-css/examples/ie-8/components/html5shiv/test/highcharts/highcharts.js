/*
 Highcharts JS v2.1.9 (2011-11-11)

 (c) 2009-2011 Torstein H?nsi

 License: www.highcharts.com/license
 */
(function () {
    function sa(a, b) {
        var c;
        a || (a = {});
        for (c in b)a[c] = b[c];
        return a
    }

    function ja(a, b) {
        return parseInt(a, b || 10)
    }

    function Sb(a) {
        return typeof a === "string"
    }

    function Nb(a) {
        return typeof a === "object"
    }

    function lc(a) {
        return typeof a === "number"
    }

    function mc(a) {
        return Fa.log(a) / Fa.LN10
    }

    function nc(a, b) {
        for (var c = a.length; c--;)if (a[c] === b) {
            a.splice(c, 1);
            break
        }
    }

    function K(a) {
        return a !== Wa && a !== null
    }

    function Ga(a, b, c) {
        var d, e;
        if (Sb(b))if (K(c))a.setAttribute(b, c); else {
            if (a && a.getAttribute)e = a.getAttribute(b)
        } else if (K(b) &&
            Nb(b))for (d in b)a.setAttribute(d, b[d]);
        return e
    }

    function zc(a) {
        return Object.prototype.toString.call(a) === "[object Array]" ? a : [a]
    }

    function A() {
        var a = arguments, b, c, d = a.length;
        for (b = 0; b < d; b++) {
            c = a[b];
            if (typeof c !== "undefined" && c !== null)return c
        }
    }

    function Ja(a, b) {
        if (Pc)if (b && b.opacity !== Wa)b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        sa(a.style, b)
    }

    function hb(a, b, c, d, e) {
        a = ua.createElement(a);
        b && sa(a, b);
        e && Ja(a, {padding: 0, border: jb, margin: 0});
        c && Ja(a, c);
        d && d.appendChild(a);
        return a
    }

    function yb(a, b) {
        var c =
            function () {
            };
        c.prototype = new a;
        sa(c.prototype, b);
        return c
    }

    function Ed(a, b, c, d) {
        var e = Xa.lang;
        a = a;
        var f = isNaN(b = bb(b)) ? 2 : b;
        b = c === undefined ? e.decimalPoint : c;
        d = d === undefined ? e.thousandsSep : d;
        e = a < 0 ? "-" : "";
        c = String(ja(a = bb(+a || 0).toFixed(f)));
        var g = c.length > 3 ? c.length % 3 : 0;
        return e + (g ? c.substr(0, g) + d : "") + c.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (f ? b + bb(a - c).toFixed(f).slice(2) : "")
    }

    function Fd(a) {
        var b = {left: a.offsetLeft, top: a.offsetTop};
        for (a = a.offsetParent; a;) {
            b.left += a.offsetLeft;
            b.top += a.offsetTop;
            if (a !== ua.body && a !== ua.documentElement) {
                b.left -= a.scrollLeft;
                b.top -= a.scrollTop
            }
            a = a.offsetParent
        }
        return b
    }

    function Gd() {
        this.symbol = this.color = 0
    }

    function fe(a, b, c, d, e, f, g) {
        var h = g.x;
        g = g.y;
        var i = h - a + c - 25, j = g - b + d + 10, m;
        if (i < 7)i = c + h + 15;
        if (i + a > c + e) {
            i -= i + a - (c + e);
            j -= b;
            m = true
        }
        if (j < 5) {
            j = 5;
            if (m && g >= j && g <= j + b)j = g + b - 5
        } else if (j + b > d + f)j = d + f - b - 5;
        return {x: i, y: j}
    }

    function Hd(a, b) {
        var c = a.length, d;
        for (d = 0; d < c; d++)a[d].ss_i = d;
        a.sort(function (e, f) {
            var g = b(e, f);
            return g === 0 ? e.ss_i - f.ss_i : g
        });
        for (d = 0; d < c; d++)delete a[d].ss_i
    }

    function Ac(a) {
        for (var b in a) {
            a[b] && a[b].destroy && a[b].destroy();
            delete a[b]
        }
    }

    function oc(a, b) {
        Bc = A(a, b.animation)
    }

    function Id() {
        var a = Xa.global.useUTC;
        Qc = a ? Date.UTC : function (b, c, d, e, f, g) {
            return (new Date(b, c, A(d, 1), A(e, 0), A(f, 0), A(g, 0))).getTime()
        };
        id = a ? "getUTCMinutes" : "getMinutes";
        jd = a ? "getUTCHours" : "getHours";
        kd = a ? "getUTCDay" : "getDay";
        Cc = a ? "getUTCDate" : "getDate";
        Rc = a ? "getUTCMonth" : "getMonth";
        Sc = a ? "getUTCFullYear" : "getFullYear";
        Jd = a ? "setUTCMinutes" : "setMinutes";
        Kd = a ? "setUTCHours" : "setHours";
        ld =
            a ? "setUTCDate" : "setDate";
        Ld = a ? "setUTCMonth" : "setMonth";
        Md = a ? "setUTCFullYear" : "setFullYear"
    }

    function pc(a) {
        Tc || (Tc = hb(Tb));
        a && Tc.appendChild(a);
        Tc.innerHTML = ""
    }

    function Uc() {
    }

    function Nd(a, b) {
        function c(p) {
            function q(k, n) {
                this.pos = k;
                this.minor = n;
                this.isNew = true;
                n || this.addLabel()
            }

            function w(k) {
                if (k) {
                    this.options = k;
                    this.id = k.id
                }
                return this
            }

            function x(k, n, t, r) {
                this.isNegative = n;
                this.options = k;
                this.x = t;
                this.stack = r;
                this.alignOptions = {
                    align: k.align || (va ? n ? "left" : "right" : "center"), verticalAlign: k.verticalAlign ||
                    (va ? "middle" : n ? "bottom" : "top"), y: A(k.y, va ? 4 : n ? 14 : -6), x: A(k.x, va ? n ? -6 : 6 : 0)
                };
                this.textAlign = k.textAlign || (va ? n ? "right" : "left" : "center")
            }

            function V() {
                var k = [], n = [], t;
                pa = wa = null;
                zb = [];
                u(Ha, function (r) {
                    t = false;
                    u(["xAxis", "yAxis"], function (F) {
                        if (r.isCartesian && (F === "xAxis" && xa || F === "yAxis" && !xa) && (r.options[F] === o.index || r.options[F] === Wa && o.index === 0)) {
                            r[F] = I;
                            zb.push(r);
                            t = true
                        }
                    });
                    if (!r.visible && z.ignoreHiddenSeries)t = false;
                    if (t) {
                        var J, E, Q, fa, ka, $;
                        if (!xa) {
                            J = r.options.stacking;
                            Vc = J === "percent";
                            if (J) {
                                ka =
                                    r.options.stack;
                                fa = r.type + A(ka, "");
                                $ = "-" + fa;
                                r.stackKey = fa;
                                E = k[fa] || [];
                                k[fa] = E;
                                Q = n[$] || [];
                                n[$] = Q
                            }
                            if (Vc) {
                                pa = 0;
                                wa = 99
                            }
                        }
                        if (r.isCartesian) {
                            u(r.data, function (F) {
                                var O = F.x, S = F.y, aa = S < 0, Eb = aa ? Q : E, kb = aa ? $ : fa;
                                if (pa === null)pa = wa = F[qa];
                                if (xa)if (O > wa)wa = O; else {
                                    if (O < pa)pa = O
                                } else if (K(S)) {
                                    if (J)Eb[O] = K(Eb[O]) ? Eb[O] + S : S;
                                    S = Eb ? Eb[O] : S;
                                    F = A(F.low, S);
                                    if (!Vc)if (S > wa)wa = S; else if (F < pa)pa = F;
                                    if (J) {
                                        s[kb] || (s[kb] = {});
                                        s[kb][O] || (s[kb][O] = new x(o.stackLabels, aa, O, ka));
                                        s[kb][O].setTotal(S)
                                    }
                                }
                            });
                            if (/(area|column|bar)/.test(r.type) && !xa)if (pa >= 0) {
                                pa = 0;
                                Od = true
                            } else if (wa < 0) {
                                wa = 0;
                                Pd = true
                            }
                        }
                    }
                })
            }

            function N(k, n) {
                var t, r;
                Fb = n ? 1 : Fa.pow(10, lb(Fa.log(k) / Fa.LN10));
                t = k / Fb;
                if (!n) {
                    n = [1, 2, 2.5, 5, 10];
                    if (o.allowDecimals === false || ca)if (Fb === 1)n = [1, 2, 5, 10]; else if (Fb <= 0.1)n = [1 / Fb]
                }
                for (r = 0; r < n.length; r++) {
                    k = n[r];
                    if (t <= (n[r] + (n[r + 1] || n[r])) / 2)break
                }
                k *= Fb;
                return k
            }

            function ta(k) {
                var n;
                n = k;
                Fb = A(Fb, Fa.pow(10, lb(Fa.log(Ta) / Fa.LN10)));
                if (Fb < 1) {
                    n = W(1 / Fb) * 10;
                    n = W(k * n) / n
                }
                return n
            }

            function da() {
                var k, n, t, r, J = o.tickInterval, E = o.tickPixelInterval;
                k = o.maxZoom ||
                (xa && !K(o.min) && !K(o.max) ? tb(l.smallestInterval * 5, wa - pa) : null);
                ya = R ? Da : Aa;
                if (Ub) {
                    t = l[xa ? "xAxis" : "yAxis"][o.linkedTo];
                    r = t.getExtremes();
                    ia = A(r.min, r.dataMin);
                    ra = A(r.max, r.dataMax)
                } else {
                    ia = A(Vb, o.min, pa);
                    ra = A(Gb, o.max, wa)
                }
                if (ca) {
                    ia = mc(ia);
                    ra = mc(ra)
                }
                if (ra - ia < k) {
                    r = (k - ra + ia) / 2;
                    ia = Ia(ia - r, A(o.min, ia - r), pa);
                    ra = tb(ia + k, A(o.max, ia + k), wa)
                }
                if (!Ya && !Vc && !Ub && K(ia) && K(ra)) {
                    k = ra - ia || 1;
                    if (!K(o.min) && !K(Vb) && Qd && (pa < 0 || !Od))ia -= k * Qd;
                    if (!K(o.max) && !K(Gb) && Rd && (wa > 0 || !Pd))ra += k * Rd
                }
                Ta = ia === ra ? 1 : Ub && !J && E === t.options.tickPixelInterval ?
                    t.tickInterval : A(J, Ya ? 1 : (ra - ia) * E / ya);
                if (!D && !K(o.tickInterval))Ta = N(Ta);
                I.tickInterval = Ta;
                Wc = o.minorTickInterval === "auto" && Ta ? Ta / 5 : o.minorTickInterval;
                if (D) {
                    Ba = [];
                    J = Xa.global.useUTC;
                    var Q = 1E3 / ub, fa = 6E4 / ub, ka = 36E5 / ub;
                    E = 864E5 / ub;
                    k = 6048E5 / ub;
                    r = 2592E6 / ub;
                    var $ = 31556952E3 / ub, F = [["second", Q, [1, 2, 5, 10, 15, 30]], ["minute", fa, [1, 2, 5, 10, 15, 30]], ["hour", ka, [1, 2, 3, 4, 6, 8, 12]], ["day", E, [1, 2]], ["week", k, [1, 2]], ["month", r, [1, 2, 3, 4, 6]], ["year", $, null]], O = F[6], S = O[1], aa = O[2];
                    for (t = 0; t < F.length; t++) {
                        O = F[t];
                        S = O[1];
                        aa =
                            O[2];
                        if (F[t + 1])if (Ta <= (S * aa[aa.length - 1] + F[t + 1][1]) / 2)break
                    }
                    if (S === $ && Ta < 5 * S)aa = [1, 2, 5];
                    F = N(Ta / S, aa);
                    aa = new Date(ia * ub);
                    aa.setMilliseconds(0);
                    if (S >= Q)aa.setSeconds(S >= fa ? 0 : F * lb(aa.getSeconds() / F));
                    if (S >= fa)aa[Jd](S >= ka ? 0 : F * lb(aa[id]() / F));
                    if (S >= ka)aa[Kd](S >= E ? 0 : F * lb(aa[jd]() / F));
                    if (S >= E)aa[ld](S >= r ? 1 : F * lb(aa[Cc]() / F));
                    if (S >= r) {
                        aa[Ld](S >= $ ? 0 : F * lb(aa[Rc]() / F));
                        n = aa[Sc]()
                    }
                    if (S >= $) {
                        n -= n % F;
                        aa[Md](n)
                    }
                    S === k && aa[ld](aa[Cc]() - aa[kd]() + o.startOfWeek);
                    t = 1;
                    n = aa[Sc]();
                    Q = aa.getTime() / ub;
                    fa = aa[Rc]();
                    for (ka = aa[Cc](); Q <
                    ra && t < Da;) {
                        Ba.push(Q);
                        if (S === $)Q = Qc(n + t * F, 0) / ub; else if (S === r)Q = Qc(n, fa + t * F) / ub; else if (!J && (S === E || S === k))Q = Qc(n, fa, ka + t * F * (S === E ? 1 : 7)); else Q += S * F;
                        t++
                    }
                    Ba.push(Q);
                    Xc = o.dateTimeLabelFormats[O[0]]
                } else {
                    t = ta(lb(ia / Ta) * Ta);
                    n = ta(md(ra / Ta) * Ta);
                    Ba = [];
                    for (t = ta(t); t <= n;) {
                        Ba.push(t);
                        t = ta(t + Ta)
                    }
                }
                if (!Ub) {
                    if (Ya || xa && l.hasColumn) {
                        n = (Ya ? 1 : Ta) * 0.5;
                        if (Ya || !K(A(o.min, Vb)))ia -= n;
                        if (Ya || !K(A(o.max, Gb)))ra += n
                    }
                    n = Ba[0];
                    t = Ba[Ba.length - 1];
                    if (o.startOnTick)ia = n; else ia > n && Ba.shift();
                    if (o.endOnTick)ra = t; else ra < t && Ba.pop();
                    Ob || (Ob = {x: 0, y: 0});
                    if (!D && Ba.length > Ob[qa])Ob[qa] = Ba.length
                }
            }

            function Ma() {
                var k, n;
                Dc = ia;
                Sd = ra;
                V();
                da();
                Hb = fb;
                fb = ya / (ra - ia || 1);
                if (!xa)for (k in s)for (n in s[k])s[k][n].cum = s[k][n].total;
                if (!I.isDirty)I.isDirty = ia !== Dc || ra !== Sd
            }

            function za(k) {
                k = (new w(k)).render();
                Pb.push(k);
                return k
            }

            function eb() {
                var k = o.title, n = o.stackLabels, t = o.alternateGridColor, r = o.lineWidth, J, E, Q = (J = l.hasRendered) && K(Dc) && !isNaN(Dc);
                E = zb.length && K(ia) && K(ra);
                ya = R ? Da : Aa;
                fb = ya / (ra - ia || 1);
                cc = R ? X : vb;
                if (E || Ub) {
                    if (Wc && !Ya)for (E = ia +
                    (Ba[0] - ia) % Wc; E <= ra; E += Wc) {
                        Wb[E] || (Wb[E] = new q(E, true));
                        Q && Wb[E].isNew && Wb[E].render(null, true);
                        Wb[E].isActive = true;
                        Wb[E].render()
                    }
                    u(Ba, function ($, F) {
                        if (!Ub || $ >= ia && $ <= ra) {
                            Q && mb[$].isNew && mb[$].render(F, true);
                            mb[$].isActive = true;
                            mb[$].render(F)
                        }
                    });
                    t && u(Ba, function ($, F) {
                        if (F % 2 === 0 && $ < ra) {
                            dc[$] || (dc[$] = new w);
                            dc[$].options = {from: $, to: Ba[F + 1] !== Wa ? Ba[F + 1] : ra, color: t};
                            dc[$].render();
                            dc[$].isActive = true
                        }
                    });
                    J || u((o.plotLines || []).concat(o.plotBands || []), function ($) {
                        Pb.push((new w($)).render())
                    })
                }
                u([mb,
                    Wb, dc], function ($) {
                    for (var F in $)if ($[F].isActive)$[F].isActive = false; else {
                        $[F].destroy();
                        delete $[F]
                    }
                });
                if (r) {
                    J = X + (Oa ? Da : 0) + la;
                    E = cb - vb - (Oa ? Aa : 0) + la;
                    J = ga.crispLine([Za, R ? X : J, R ? E : ea, Ka, R ? $a - Ib : J, R ? E : cb - vb], r);
                    if (La)La.animate({d: J}); else La = ga.path(J).attr({stroke: o.lineColor, "stroke-width": r, zIndex: 7}).add()
                }
                if (ba) {
                    J = R ? X : ea;
                    r = ja(k.style.fontSize || 12);
                    J = {low: J + (R ? 0 : ya), middle: J + ya / 2, high: J + (R ? ya : 0)}[k.align];
                    r = (R ? ea + Aa : X) + (R ? 1 : -1) * (Oa ? -1 : 1) * nd + (L === 2 ? r : 0);
                    ba[ba.isNew ? "attr" : "animate"]({
                        x: R ? J : r + (Oa ?
                            Da : 0) + la + (k.x || 0), y: R ? r - (Oa ? Aa : 0) + la : J + (k.y || 0)
                    });
                    ba.isNew = false
                }
                if (n && n.enabled) {
                    var fa, ka;
                    n = I.stackTotalGroup;
                    if (!n)I.stackTotalGroup = n = ga.g("stack-labels").attr({visibility: Ab, zIndex: 6}).translate(X, ea).add();
                    for (fa in s) {
                        k = s[fa];
                        for (ka in k)k[ka].render(n)
                    }
                }
                I.isDirty = false
            }

            function ab(k) {
                for (var n = Pb.length; n--;)Pb[n].id === k && Pb[n].destroy()
            }

            var xa = p.isX, Oa = p.opposite, R = va ? !xa : xa, L = R ? Oa ? 0 : 2 : Oa ? 1 : 3, s = {}, o = Ca(xa ? Yc : od, [ge, he, Td, ie][L], p), I = this, ba, B = o.type, D = B === "datetime", ca = B === "logarithmic",
                la = o.offset || 0, qa = xa ? "x" : "y", ya, fb, Hb, cc = R ? X : vb, G, ha, na, Ra, La, pa, wa, zb, Vb, Gb, ra = null, ia = null, Dc, Sd, Qd = o.minPadding, Rd = o.maxPadding, Ub = K(o.linkedTo), Od, Pd, Vc;
            B = o.events;
            var pd, Pb = [], Ta, Wc, Fb, Ba, mb = {}, Wb = {}, dc = {}, qc, rc, nd, Xc, Ya = o.categories, je = o.labels.formatter || function () {
                    var k = this.value;
                    return Xc ? Zc(Xc, k) : Ta % 1E6 === 0 ? k / 1E6 + "M" : Ta % 1E3 === 0 ? k / 1E3 + "k" : !Ya && k >= 1E3 ? Ed(k, 0) : k
                }, $c = R && o.labels.staggerLines, ec = o.reversed, fc = Ya && o.tickmarkPlacement === "between" ? 0.5 : 0;
            q.prototype = {
                addLabel: function () {
                    var k = this.pos,
                        n = o.labels, t = !(k === ia && !A(o.showFirstLabel, 1) || k === ra && !A(o.showLastLabel, 0)), r = Ya && R && Ya.length && !n.step && !n.staggerLines && !n.rotation && Da / Ya.length || !R && Da / 2, J = Ya && K(Ya[k]) ? Ya[k] : k, E = this.label;
                    k = je.call({
                        isFirst: k === Ba[0],
                        isLast: k === Ba[Ba.length - 1],
                        dateTimeLabelFormat: Xc,
                        value: ca ? Fa.pow(10, J) : J
                    });
                    r = r && {width: Ia(1, W(r - 2 * (n.padding || 10))) + Ua};
                    r = sa(r, n.style);
                    if (E === Wa)this.label = K(k) && t && n.enabled ? ga.text(k, 0, 0, n.useHTML).attr({
                        align: n.align,
                        rotation: n.rotation
                    }).css(r).add(na) : null; else E && E.attr({text: k}).css(r)
                },
                getLabelSize: function () {
                    var k = this.label;
                    return k ? (this.labelBBox = k.getBBox())[R ? "height" : "width"] : 0
                }, render: function (k, n) {
                    var t = !this.minor, r = this.label, J = this.pos, E = o.labels, Q = this.gridLine, fa = t ? o.gridLineWidth : o.minorGridLineWidth, ka = t ? o.gridLineColor : o.minorGridLineColor, $ = t ? o.gridLineDashStyle : o.minorGridLineDashStyle, F = this.mark, O = t ? o.tickLength : o.minorTickLength, S = t ? o.tickWidth : o.minorTickWidth || 0, aa = t ? o.tickColor : o.minorTickColor, Eb = t ? o.tickPosition : o.minorTickPosition, kb = E.step, nb = n && ad ||
                        cb, Qb;
                    Qb = R ? G(J + fc, null, null, n) + cc : X + la + (Oa ? (n && qd || $a) - Ib - X : 0);
                    nb = R ? nb - vb + la - (Oa ? Aa : 0) : nb - G(J + fc, null, null, n) - cc;
                    if (fa) {
                        J = ha(J + fc, fa, n);
                        if (Q === Wa) {
                            Q = {stroke: ka, "stroke-width": fa};
                            if ($)Q.dashstyle = $;
                            if (t)Q.zIndex = 1;
                            this.gridLine = Q = fa ? ga.path(J).attr(Q).add(Ra) : null
                        }
                        !n && Q && J && Q.animate({d: J})
                    }
                    if (S) {
                        if (Eb === "inside")O = -O;
                        if (Oa)O = -O;
                        t = ga.crispLine([Za, Qb, nb, Ka, Qb + (R ? 0 : -O), nb + (R ? O : 0)], S);
                        if (F)F.animate({d: t}); else this.mark = ga.path(t).attr({stroke: aa, "stroke-width": S}).add(na)
                    }
                    if (r && !isNaN(Qb)) {
                        Qb = Qb +
                        E.x - (fc && R ? fc * fb * (ec ? -1 : 1) : 0);
                        nb = nb + E.y - (fc && !R ? fc * fb * (ec ? 1 : -1) : 0);
                        K(E.y) || (nb += ja(r.styles.lineHeight) * 0.9 - r.getBBox().height / 2);
                        if ($c)nb += k / (kb || 1) % $c * 16;
                        if (kb)r[k % kb ? "hide" : "show"]();
                        r[this.isNew ? "attr" : "animate"]({x: Qb, y: nb})
                    }
                    this.isNew = false
                }, destroy: function () {
                    Ac(this)
                }
            };
            w.prototype = {
                render: function () {
                    var k = this, n = k.options, t = n.label, r = k.label, J = n.width, E = n.to, Q = n.from, fa = n.value, ka, $ = n.dashStyle, F = k.svgElem, O = [], S, aa, Eb = n.color;
                    aa = n.zIndex;
                    var kb = n.events;
                    if (ca) {
                        Q = mc(Q);
                        E = mc(E);
                        fa = mc(fa)
                    }
                    if (J) {
                        O =
                            ha(fa, J);
                        n = {stroke: Eb, "stroke-width": J};
                        if ($)n.dashstyle = $
                    } else if (K(Q) && K(E)) {
                        Q = Ia(Q, ia);
                        E = tb(E, ra);
                        ka = ha(E);
                        if ((O = ha(Q)) && ka)O.push(ka[4], ka[5], ka[1], ka[2]); else O = null;
                        n = {fill: Eb}
                    } else return;
                    if (K(aa))n.zIndex = aa;
                    if (F)if (O)F.animate({d: O}, null, F.onGetPath); else {
                        F.hide();
                        F.onGetPath = function () {
                            F.show()
                        }
                    } else if (O && O.length) {
                        k.svgElem = F = ga.path(O).attr(n).add();
                        if (kb) {
                            $ = function (nb) {
                                F.on(nb, function (Qb) {
                                    kb[nb].apply(k, [Qb])
                                })
                            };
                            for (S in kb)$(S)
                        }
                    }
                    if (t && K(t.text) && O && O.length && Da > 0 && Aa > 0) {
                        t = Ca({
                            align: R &&
                            ka && "center",
                            x: R ? !ka && 4 : 10,
                            verticalAlign: !R && ka && "middle",
                            y: R ? ka ? 16 : 10 : ka ? 6 : -4,
                            rotation: R && !ka && 90
                        }, t);
                        if (!r)k.label = r = ga.text(t.text, 0, 0).attr({
                            align: t.textAlign || t.align,
                            rotation: t.rotation,
                            zIndex: aa
                        }).css(t.style).add();
                        ka = [O[1], O[4], A(O[6], O[1])];
                        O = [O[2], O[5], A(O[7], O[2])];
                        S = tb.apply(Fa, ka);
                        aa = tb.apply(Fa, O);
                        r.align(t, false, {x: S, y: aa, width: Ia.apply(Fa, ka) - S, height: Ia.apply(Fa, O) - aa});
                        r.show()
                    } else r && r.hide();
                    return k
                }, destroy: function () {
                    Ac(this);
                    nc(Pb, this)
                }
            };
            x.prototype = {
                destroy: function () {
                    Ac(this)
                },
                setTotal: function (k) {
                    this.cum = this.total = k
                }, render: function (k) {
                    var n = this.options.formatter.call(this);
                    if (this.label)this.label.attr({
                        text: n,
                        visibility: ob
                    }); else this.label = l.renderer.text(n, 0, 0).css(this.options.style).attr({
                        align: this.textAlign,
                        rotation: this.options.rotation,
                        visibility: ob
                    }).add(k)
                }, setOffset: function (k, n) {
                    var t = this.isNegative, r = I.translate(this.total), J = I.translate(0);
                    J = bb(r - J);
                    var E = l.xAxis[0].translate(this.x) + k, Q = l.plotHeight;
                    t = {
                        x: va ? t ? r : r - J : E, y: va ? Q - E - n : t ? Q - r - J : Q - r, width: va ?
                            J : n, height: va ? n : J
                    };
                    this.label && this.label.align(this.alignOptions, null, t).attr({visibility: Ab})
                }
            };
            G = function (k, n, t, r, J) {
                var E = 1, Q = 0, fa = r ? Hb : fb;
                r = r ? Dc : ia;
                fa || (fa = fb);
                if (t) {
                    E *= -1;
                    Q = ya
                }
                if (ec) {
                    E *= -1;
                    Q -= E * ya
                }
                if (n) {
                    if (ec)k = ya - k;
                    k = k / fa + r;
                    if (ca && J)k = Fa.pow(10, k)
                } else {
                    if (ca && J)k = mc(k);
                    k = E * (k - r) * fa + Q
                }
                return k
            };
            ha = function (k, n, t) {
                var r, J, E;
                k = G(k, null, null, t);
                var Q = t && ad || cb, fa = t && qd || $a, ka;
                t = J = W(k + cc);
                r = E = W(Q - k - cc);
                if (isNaN(k))ka = true; else if (R) {
                    r = ea;
                    E = Q - vb;
                    if (t < X || t > X + Da)ka = true
                } else {
                    t = X;
                    J = fa - Ib;
                    if (r < ea || r >
                        ea + Aa)ka = true
                }
                return ka ? null : ga.crispLine([Za, t, r, Ka, J, E], n || 0)
            };
            if (va && xa && ec === Wa)ec = true;
            sa(I, {
                addPlotBand: za, addPlotLine: za, adjustTickAmount: function () {
                    if (Ob && !D && !Ya && !Ub) {
                        var k = qc, n = Ba.length;
                        qc = Ob[qa];
                        if (n < qc) {
                            for (; Ba.length < qc;)Ba.push(ta(Ba[Ba.length - 1] + Ta));
                            fb *= (n - 1) / (qc - 1);
                            ra = Ba[Ba.length - 1]
                        }
                        if (K(k) && qc !== k)I.isDirty = true
                    }
                }, categories: Ya, getExtremes: function () {
                    return {min: ia, max: ra, dataMin: pa, dataMax: wa, userMin: Vb, userMax: Gb}
                }, getPlotLinePath: ha, getThreshold: function (k) {
                    if (ia > k)k = ia; else if (ra <
                        k)k = ra;
                    return G(k, 0, 1)
                }, isXAxis: xa, options: o, plotLinesAndBands: Pb, getOffset: function () {
                    var k = zb.length && K(ia) && K(ra), n = 0, t = 0, r = o.title, J = o.labels, E = [-1, 1, 1, -1][L], Q;
                    if (!na) {
                        na = ga.g("axis").attr({zIndex: 7}).add();
                        Ra = ga.g("grid").attr({zIndex: 1}).add()
                    }
                    rc = 0;
                    if (k || Ub) {
                        u(Ba, function (fa) {
                            if (mb[fa])mb[fa].addLabel(); else mb[fa] = new q(fa);
                            if (L === 0 || L === 2 || {1: "left", 3: "right"}[L] === J.align)rc = Ia(mb[fa].getLabelSize(), rc)
                        });
                        if ($c)rc += ($c - 1) * 16
                    } else for (Q in mb) {
                        mb[Q].destroy();
                        delete mb[Q]
                    }
                    if (r && r.text) {
                        if (!ba) {
                            ba =
                                I.axisTitle = ga.text(r.text, 0, 0, r.useHTML).attr({
                                    zIndex: 7,
                                    rotation: r.rotation || 0,
                                    align: r.textAlign || {low: "left", middle: "center", high: "right"}[r.align]
                                }).css(r.style).add();
                            ba.isNew = true
                        }
                        n = ba.getBBox()[R ? "height" : "width"];
                        t = A(r.margin, R ? 5 : 10)
                    }
                    la = E * (o.offset || Xb[L]);
                    nd = rc + (L !== 2 && rc && E * o.labels[R ? "y" : "x"]) + t;
                    Xb[L] = Ia(Xb[L], nd + n + E * la)
                }, render: eb, setCategories: function (k, n) {
                    I.categories = p.categories = Ya = k;
                    u(zb, function (t) {
                        t.translate();
                        t.setTooltipPoints(true)
                    });
                    I.isDirty = true;
                    A(n, true) && l.redraw()
                }, setExtremes: function (k,
                                          n, t, r) {
                    t = A(t, true);
                    Pa(I, "setExtremes", {min: k, max: n}, function () {
                        Vb = k;
                        Gb = n;
                        t && l.redraw(r)
                    })
                }, setScale: Ma, setTickPositions: da, translate: G, redraw: function () {
                    Yb.resetTracker && Yb.resetTracker();
                    eb();
                    u(Pb, function (k) {
                        k.render()
                    });
                    u(zb, function (k) {
                        k.isDirty = true
                    })
                }, removePlotBand: ab, removePlotLine: ab, reversed: ec, stacks: s, destroy: function () {
                    var k;
                    pb(I);
                    for (k in s) {
                        Ac(s[k]);
                        s[k] = null
                    }
                    if (I.stackTotalGroup)I.stackTotalGroup = I.stackTotalGroup.destroy();
                    u([mb, Wb, dc, Pb], function (n) {
                        Ac(n)
                    });
                    u([La, na, Ra, ba], function (n) {
                        n &&
                        n.destroy()
                    });
                    La = na = Ra = ba = null
                }
            });
            for (pd in B)Qa(I, pd, B[pd]);
            Ma()
        }

        function d() {
            var p = {};
            return {
                add: function (q, w, x, V) {
                    if (!p[q]) {
                        w = ga.text(w, 0, 0).css(a.toolbar.itemStyle).align({
                            align: "right",
                            x: -Ib - 20,
                            y: ea + 30
                        }).on("click", V).attr({align: "right", zIndex: 20}).add();
                        p[q] = w
                    }
                }, remove: function (q) {
                    pc(p[q].element);
                    p[q] = null
                }
            }
        }

        function e(p) {
            function q() {
                var B = this.points || zc(this), D = B[0].series.xAxis, ca = this.x;
                D = D && D.options.type === "datetime";
                var la = Sb(ca) || D, qa;
                qa = la ? ['<span style="font-size: 10px">' + (D ? Zc("%A, %b %e, %Y",
                    ca) : ca) + "</span>"] : [];
                u(B, function (ya) {
                    qa.push(ya.point.tooltipFormatter(la))
                });
                return qa.join("<br/>")
            }

            function w(B, D) {
                L = xa ? B : (2 * L + B) / 3;
                s = xa ? D : (s + D) / 2;
                o.translate(L, s);
                rd = bb(B - L) > 1 || bb(D - s) > 1 ? function () {
                    w(B, D)
                } : null
            }

            function x() {
                if (!xa) {
                    var B = l.hoverPoints;
                    o.hide();
                    u(da, function (D) {
                        D && D.hide()
                    });
                    B && u(B, function (D) {
                        D.setState()
                    });
                    l.hoverPoints = null;
                    xa = true
                }
            }

            var V, N = p.borderWidth, ta = p.crosshairs, da = [], Ma = p.style, za = p.shared, eb = ja(Ma.padding), ab = N + eb, xa = true, Oa, R, L = 0, s = 0;
            Ma.padding = 0;
            var o = ga.g("tooltip").attr({zIndex: 8}).add(),
                I = ga.rect(ab, ab, 0, 0, p.borderRadius, N).attr({
                    fill: p.backgroundColor,
                    "stroke-width": N
                }).add(o).shadow(p.shadow), ba = ga.text("", eb + ab, ja(Ma.fontSize) + eb + ab, p.useHTML).attr({zIndex: 1}).css(Ma).add(o);
            o.hide();
            return {
                shared: za, refresh: function (B) {
                    var D, ca, la, qa = 0, ya = {}, fb = [];
                    la = B.tooltipPos;
                    D = p.formatter || q;
                    ya = l.hoverPoints;
                    if (za) {
                        ya && u(ya, function (Hb) {
                            Hb.setState()
                        });
                        l.hoverPoints = B;
                        u(B, function (Hb) {
                            Hb.setState(Bb);
                            qa += Hb.plotY;
                            fb.push(Hb.getLabelConfig())
                        });
                        ca = B[0].plotX;
                        qa = W(qa) / B.length;
                        ya = {x: B[0].category};
                        ya.points = fb;
                        B = B[0]
                    } else ya = B.getLabelConfig();
                    ya = D.call(ya);
                    V = B.series;
                    ca = za ? ca : B.plotX;
                    qa = za ? qa : B.plotY;
                    D = W(la ? la[0] : va ? Da - qa : ca);
                    ca = W(la ? la[1] : va ? Aa - ca : qa);
                    la = za || !B.series.isCartesian || gc(D, ca);
                    if (ya === false || !la)x(); else {
                        if (xa) {
                            o.show();
                            xa = false
                        }
                        ba.attr({text: ya});
                        la = ba.getBBox();
                        Oa = la.width + 2 * eb;
                        R = la.height + 2 * eb;
                        I.attr({width: Oa, height: R, stroke: p.borderColor || B.color || V.color || "#606060"});
                        D = fe(Oa, R, X, ea, Da, Aa, {x: D, y: ca});
                        w(W(D.x - ab), W(D.y - ab))
                    }
                    if (ta) {
                        ta = zc(ta);
                        for (D = ta.length; D--;) {
                            ca = B.series[D ?
                                "yAxis" : "xAxis"];
                            if (ta[D] && ca) {
                                ca = ca.getPlotLinePath(B[D ? "y" : "x"], 1);
                                if (da[D])da[D].attr({d: ca, visibility: Ab}); else {
                                    la = {"stroke-width": ta[D].width || 1, stroke: ta[D].color || "#C0C0C0", zIndex: 2};
                                    if (ta[D].dashStyle)la.dashstyle = ta[D].dashStyle;
                                    da[D] = ga.path(ca).attr(la).add()
                                }
                            }
                        }
                    }
                }, hide: x, destroy: function () {
                    u(da, function (B) {
                        B && B.destroy()
                    });
                    u([I, ba, o], function (B) {
                        B && B.destroy()
                    });
                    I = ba = o = null
                }
            }
        }

        function f(p) {
            function q(L) {
                var s, o = Ud && ua.width / ua.body.scrollWidth - 1, I, ba, B;
                L = L || db.event;
                if (!L.target)L.target =
                    L.srcElement;
                s = L.touches ? L.touches.item(0) : L;
                if (L.type !== "mousemove" || db.opera || o) {
                    Jb = Fd(oa);
                    I = Jb.left;
                    ba = Jb.top
                }
                if (Pc) {
                    B = L.x;
                    s = L.y
                } else if (s.layerX === Wa) {
                    B = s.pageX - I;
                    s = s.pageY - ba
                } else {
                    B = L.layerX;
                    s = L.layerY
                }
                if (o) {
                    B += W((o + 1) * I - I);
                    s += W((o + 1) * ba - ba)
                }
                return sa(L, {chartX: B, chartY: s})
            }

            function w(L) {
                var s = {xAxis: [], yAxis: []};
                u(Va, function (o) {
                    var I = o.translate, ba = o.isXAxis;
                    s[ba ? "xAxis" : "yAxis"].push({axis: o, value: I((va ? !ba : ba) ? L.chartX - X : Aa - L.chartY + ea, true)})
                });
                return s
            }

            function x() {
                var L = l.hoverSeries,
                    s = l.hoverPoint;
                s && s.onMouseOut();
                L && L.onMouseOut();
                hc && hc.hide();
                sd = null
            }

            function V() {
                if (za) {
                    var L = {xAxis: [], yAxis: []}, s = za.getBBox(), o = s.x - X, I = s.y - ea;
                    if (Ma) {
                        u(Va, function (ba) {
                            var B = ba.translate, D = ba.isXAxis, ca = va ? !D : D, la = B(ca ? o : Aa - I - s.height, true, 0, 0, 1);
                            B = B(ca ? o + s.width : Aa - I, true, 0, 0, 1);
                            L[D ? "xAxis" : "yAxis"].push({axis: ba, min: tb(la, B), max: Ia(la, B)})
                        });
                        Pa(l, "selection", L, td)
                    }
                    za = za.destroy()
                }
                l.mouseIsDown = ud = Ma = false;
                pb(ua, Kb ? "touchend" : "mouseup", V)
            }

            function N(L) {
                var s = K(L.pageX) ? L.pageX : L.page.x;
                L =
                    K(L.pageX) ? L.pageY : L.page.y;
                Jb && !gc(s - Jb.left - X, L - Jb.top - ea) && x()
            }

            var ta, da, Ma, za, eb = z.zoomType, ab = /x/.test(eb), xa = /y/.test(eb), Oa = ab && !va || xa && va, R = xa && !va || ab && va;
            bd = function () {
                if (Ec) {
                    Ec.translate(X, ea);
                    va && Ec.attr({width: l.plotWidth, height: l.plotHeight}).invert()
                } else l.trackerGroup = Ec = ga.g("tracker").attr({zIndex: 9}).add()
            };
            bd();
            if (p.enabled)l.tooltip = hc = e(p);
            (function () {
                oa.onmousedown = function (s) {
                    s = q(s);
                    !Kb && s.preventDefault && s.preventDefault();
                    l.mouseIsDown = ud = true;
                    ta = s.chartX;
                    da = s.chartY;
                    Qa(ua,
                        Kb ? "touchend" : "mouseup", V)
                };
                var L = function (s) {
                    if (!(s && s.touches && s.touches.length > 1)) {
                        s = q(s);
                        if (!Kb)s.returnValue = false;
                        var o = s.chartX, I = s.chartY, ba = !gc(o - X, I - ea);
                        Jb || (Jb = Fd(oa));
                        if (Kb && s.type === "touchstart")if (Ga(s.target, "isTracker"))l.runTrackerClick || s.preventDefault(); else!ke && !ba && s.preventDefault();
                        if (ba) {
                            if (o < X)o = X; else if (o > X + Da)o = X + Da;
                            if (I < ea)I = ea; else if (I > ea + Aa)I = ea + Aa
                        }
                        if (ud && s.type !== "touchstart") {
                            Ma = Math.sqrt(Math.pow(ta - o, 2) + Math.pow(da - I, 2));
                            if (Ma > 10) {
                                if (sc && (ab || xa) && gc(ta - X, da - ea))za ||
                                (za = ga.rect(X, ea, Oa ? 1 : Da, R ? 1 : Aa, 0).attr({
                                    fill: z.selectionMarkerFill || "rgba(69,114,167,0.25)",
                                    zIndex: 7
                                }).add());
                                if (za && Oa) {
                                    o = o - ta;
                                    za.attr({width: bb(o), x: (o > 0 ? 0 : o) + ta})
                                }
                                if (za && R) {
                                    I = I - da;
                                    za.attr({height: bb(I), y: (I > 0 ? 0 : I) + da})
                                }
                            }
                        } else if (!ba) {
                            var B;
                            I = l.hoverPoint;
                            o = l.hoverSeries;
                            var D, ca, la = $a, qa = va ? s.chartY : s.chartX - X;
                            if (hc && p.shared) {
                                B = [];
                                D = Ha.length;
                                for (ca = 0; ca < D; ca++)if (Ha[ca].visible && Ha[ca].tooltipPoints.length) {
                                    s = Ha[ca].tooltipPoints[qa];
                                    s._dist = bb(qa - s.plotX);
                                    la = tb(la, s._dist);
                                    B.push(s)
                                }
                                for (D =
                                         B.length; D--;)B[D]._dist > la && B.splice(D, 1);
                                if (B.length && B[0].plotX !== sd) {
                                    hc.refresh(B);
                                    sd = B[0].plotX
                                }
                            }
                            if (o && o.tracker)(s = o.tooltipPoints[qa]) && s !== I && s.onMouseOver()
                        }
                        return ba || !sc
                    }
                };
                oa.onmousemove = L;
                Qa(oa, "mouseleave", x);
                Qa(ua, "mousemove", N);
                oa.ontouchstart = function (s) {
                    if (ab || xa)oa.onmousedown(s);
                    L(s)
                };
                oa.ontouchmove = L;
                oa.ontouchend = function () {
                    Ma && x()
                };
                oa.onclick = function (s) {
                    var o = l.hoverPoint;
                    s = q(s);
                    s.cancelBubble = true;
                    if (!Ma)if (o && Ga(s.target, "isTracker")) {
                        var I = o.plotX, ba = o.plotY;
                        sa(o, {
                            pageX: Jb.left +
                            X + (va ? Da - ba : I), pageY: Jb.top + ea + (va ? Aa - I : ba)
                        });
                        Pa(o.series, "click", sa(s, {point: o}));
                        o.firePointEvent("click", s)
                    } else {
                        sa(s, w(s));
                        gc(s.chartX - X, s.chartY - ea) && Pa(l, "click", s)
                    }
                    Ma = false
                }
            })();
            Vd = setInterval(function () {
                rd && rd()
            }, 32);
            sa(this, {
                zoomX: ab, zoomY: xa, resetTracker: x, destroy: function () {
                    if (l.trackerGroup)l.trackerGroup = Ec = l.trackerGroup.destroy();
                    pb(ua, "mousemove", N);
                    oa.onclick = oa.onmousedown = oa.onmousemove = oa.ontouchstart = oa.ontouchend = oa.ontouchmove = null
                }
            })
        }

        function g(p) {
            var q = p.type || z.type || z.defaultSeriesType,
                w = wb[q], x = l.hasRendered;
            if (x)if (va && q === "column")w = wb.bar; else if (!va && q === "bar")w = wb.column;
            q = new w;
            q.init(l, p);
            if (!x && q.inverted)va = true;
            if (q.isCartesian)sc = q.isCartesian;
            Ha.push(q);
            return q
        }

        function h() {
            z.alignTicks !== false && u(Va, function (p) {
                p.adjustTickAmount()
            });
            Ob = null
        }

        function i(p) {
            var q = l.isDirtyLegend, w, x = l.isDirtyBox, V = Ha.length, N = V, ta = l.clipRect;
            for (oc(p, l); N--;) {
                p = Ha[N];
                if (p.isDirty && p.options.stacking) {
                    w = true;
                    break
                }
            }
            if (w)for (N = V; N--;) {
                p = Ha[N];
                if (p.options.stacking)p.isDirty = true
            }
            u(Ha,
                function (da) {
                    if (da.isDirty) {
                        da.cleanData();
                        da.getSegments();
                        if (da.options.legendType === "point")q = true
                    }
                });
            if (q && Fc.renderLegend) {
                Fc.renderLegend();
                l.isDirtyLegend = false
            }
            if (sc) {
                if (!cd) {
                    Ob = null;
                    u(Va, function (da) {
                        da.setScale()
                    })
                }
                h();
                Gc();
                u(Va, function (da) {
                    if (da.isDirty || x) {
                        da.redraw();
                        x = true
                    }
                })
            }
            if (x) {
                vd();
                bd();
                if (ta) {
                    Hc(ta);
                    ta.animate({width: l.plotSizeX, height: l.plotSizeY})
                }
            }
            u(Ha, function (da) {
                if (da.isDirty && da.visible && (!da.isCartesian || da.xAxis))da.redraw()
            });
            Yb && Yb.resetTracker && Yb.resetTracker();
            Pa(l,
                "redraw")
        }

        function j() {
            var p = a.xAxis || {}, q = a.yAxis || {}, w;
            p = zc(p);
            u(p, function (x, V) {
                x.index = V;
                x.isX = true
            });
            q = zc(q);
            u(q, function (x, V) {
                x.index = V
            });
            Va = p.concat(q);
            l.xAxis = [];
            l.yAxis = [];
            Va = tc(Va, function (x) {
                w = new c(x);
                l[w.isXAxis ? "xAxis" : "yAxis"].push(w);
                return w
            });
            h()
        }

        function m(p, q) {
            uc = Ca(a.title, p);
            Ic = Ca(a.subtitle, q);
            u([["title", p, uc], ["subtitle", q, Ic]], function (w) {
                var x = w[0], V = l[x], N = w[1];
                w = w[2];
                if (V && N)V = V.destroy();
                if (w && w.text && !V)l[x] = ga.text(w.text, 0, 0, w.useHTML).attr({
                    align: w.align, "class": "highcharts-" +
                    x, zIndex: 1
                }).css(w.style).add().align(w, false, Rb)
            })
        }

        function v() {
            qb = z.renderTo;
            Wd = vc + wd++;
            if (Sb(qb))qb = ua.getElementById(qb);
            qb.innerHTML = "";
            if (!qb.offsetWidth) {
                Zb = qb.cloneNode(0);
                Ja(Zb, {position: ic, top: "-9999px", display: ""});
                ua.body.appendChild(Zb)
            }
            dd = (Zb || qb).offsetWidth;
            Jc = (Zb || qb).offsetHeight;
            l.chartWidth = $a = z.width || dd || 600;
            l.chartHeight = cb = z.height || (Jc > 19 ? Jc : 400);
            l.container = oa = hb(Tb, {className: "highcharts-container" + (z.className ? " " + z.className : ""), id: Wd}, sa({
                position: Xd, overflow: ob, width: $a +
                Ua, height: cb + Ua, textAlign: "left"
            }, z.style), Zb || qb);
            l.renderer = ga = z.forExport ? new ed(oa, $a, cb, true) : new fd(oa, $a, cb);
            var p, q;
            if (Yd && oa.getBoundingClientRect) {
                p = function () {
                    Ja(oa, {left: 0, top: 0});
                    q = oa.getBoundingClientRect();
                    Ja(oa, {left: -(q.left - ja(q.left)) + Ua, top: -(q.top - ja(q.top)) + Ua})
                };
                p();
                Qa(db, "resize", p);
                Qa(l, "destroy", function () {
                    pb(db, "resize", p)
                })
            }
        }

        function P() {
            function p() {
                var w = z.width || qb.offsetWidth, x = z.height || qb.offsetHeight;
                if (w && x) {
                    if (w !== dd || x !== Jc) {
                        clearTimeout(q);
                        q = setTimeout(function () {
                            xd(w,
                                x, false)
                        }, 100)
                    }
                    dd = w;
                    Jc = x
                }
            }

            var q;
            Qa(db, "resize", p);
            Qa(l, "destroy", function () {
                pb(db, "resize", p)
            })
        }

        function T() {
            Pa(l, "endResize", null, function () {
                cd -= 1
            })
        }

        function Y() {
            var p = a.labels, q = a.credits, w;
            m();
            Fc = l.legend = new le;
            Gc();
            u(Va, function (x) {
                x.setTickPositions(true)
            });
            h();
            Gc();
            vd();
            sc && u(Va, function (x) {
                x.render()
            });
            if (!l.seriesGroup)l.seriesGroup = ga.g("series-group").attr({zIndex: 3}).add();
            u(Ha, function (x) {
                x.translate();
                x.setTooltipPoints();
                x.render()
            });
            p.items && u(p.items, function () {
                var x = sa(p.style, this.style),
                    V = ja(x.left) + X, N = ja(x.top) + ea + 12;
                delete x.left;
                delete x.top;
                ga.text(this.html, V, N).attr({zIndex: 2}).css(x).add()
            });
            if (!l.toolbar)l.toolbar = d();
            if (q.enabled && !l.credits) {
                w = q.href;
                l.credits = ga.text(q.text, 0, 0).on("click", function () {
                    if (w)location.href = w
                }).attr({align: q.position.align, zIndex: 8}).css(q.style).add().align(q.position)
            }
            bd();
            l.hasRendered = true;
            if (Zb) {
                qb.appendChild(oa);
                pc(Zb)
            }
        }

        function H() {
            var p, q = oa && oa.parentNode;
            if (l !== null) {
                Pa(l, "destroy");
                pb(db, "unload", H);
                pb(l);
                for (p = Va.length; p--;)Va[p] =
                    Va[p].destroy();
                for (p = Ha.length; p--;)Ha[p] = Ha[p].destroy();
                u(["title", "subtitle", "seriesGroup", "clipRect", "credits", "tracker"], function (w) {
                    var x = l[w];
                    if (x)l[w] = x.destroy()
                });
                u([wc, xc, Kc, Fc, hc, ga, Yb], function (w) {
                    w && w.destroy && w.destroy()
                });
                wc = xc = Kc = Fc = hc = ga = Yb = null;
                if (oa) {
                    oa.innerHTML = "";
                    pb(oa);
                    q && pc(oa);
                    oa = null
                }
                clearInterval(Vd);
                for (p in l)delete l[p];
                l = null
            }
        }

        function U() {
            if (!Lc && db == db.top && ua.readyState !== "complete")ua.attachEvent("onreadystatechange", function () {
                ua.detachEvent("onreadystatechange",
                    U);
                ua.readyState === "complete" && U()
            }); else {
                v();
                yd();
                zd();
                u(a.series || [], function (p) {
                    g(p)
                });
                l.inverted = va = A(va, a.chart.inverted);
                j();
                l.render = Y;
                l.tracker = Yb = new f(a.tooltip);
                Y();
                Pa(l, "load");
                b && b.apply(l, [l]);
                u(l.callbacks, function (p) {
                    p.apply(l, [l])
                })
            }
        }

        Yc = Ca(Yc, Xa.xAxis);
        od = Ca(od, Xa.yAxis);
        Xa.xAxis = Xa.yAxis = null;
        a = Ca(Xa, a);
        var z = a.chart, M = z.margin;
        M = Nb(M) ? M : [M, M, M, M];
        var y = A(z.marginTop, M[0]), C = A(z.marginRight, M[1]), Z = A(z.marginBottom, M[2]), Sa = A(z.marginLeft, M[3]), Na = z.spacingTop, Ea = z.spacingRight,
            gb = z.spacingBottom, Lb = z.spacingLeft, Rb, uc, Ic, ea, Ib, vb, X, Xb, qb, Zb, oa, Wd, dd, Jc, $a, cb, qd, ad, wc, Kc, Ad, xc, l = this, ke = (M = z.events) && !!M.click, Bd, gc, hc, ud, jc, Zd, Cd, Aa, Da, Yb, Ec, bd, Fc, $b, ac, Jb, sc = z.showAxes, cd = 0, Va = [], Ob, Ha = [], va, ga, rd, Vd, sd, vd, Gc, yd, zd, xd, td, $d, le = function () {
                function p(G, ha) {
                    var na = G.legendItem, Ra = G.legendLine, La = G.legendSymbol, pa = Oa.color, wa = ha ? N.itemStyle.color : pa, zb = ha ? G.color : pa;
                    pa = ha ? G.pointAttr[ib] : {stroke: pa, fill: pa};
                    na && na.css({fill: wa});
                    Ra && Ra.attr({stroke: zb});
                    La && La.attr(pa)
                }

                function q(G,
                           ha, na) {
                    var Ra = G.legendItem, La = G.legendLine, pa = G.legendSymbol;
                    G = G.checkbox;
                    Ra && Ra.attr({x: ha, y: na});
                    La && La.translate(ha, na - 4);
                    pa && pa.attr({x: ha + pa.xOff, y: na + pa.yOff});
                    if (G) {
                        G.x = ha;
                        G.y = na
                    }
                }

                function w() {
                    u(za, function (G) {
                        var ha = G.checkbox, na = qa.alignAttr;
                        ha && Ja(ha, {left: na.translateX + G.legendItemWidth + ha.x - 40 + Ua, top: na.translateY + ha.y - 11 + Ua})
                    })
                }

                function x(G) {
                    var ha, na, Ra, La, pa = G.legendItem;
                    La = G.series || G;
                    var wa = La.options, zb = wa && wa.borderWidth || 0;
                    if (!pa) {
                        La = /^(bar|pie|area|column)$/.test(La.type);
                        G.legendItem =
                            pa = ga.text(N.labelFormatter.call(G), 0, 0).css(G.visible ? ab : Oa).on("mouseover", function () {
                                G.setState(Bb);
                                pa.css(xa)
                            }).on("mouseout", function () {
                                pa.css(G.visible ? ab : Oa);
                                G.setState()
                            }).on("click", function () {
                                var Gb = function () {
                                    G.setVisible()
                                };
                                G.firePointEvent ? G.firePointEvent("legendItemClick", null, Gb) : Pa(G, "legendItemClick", null, Gb)
                            }).attr({zIndex: 2}).add(qa);
                        if (!La && wa && wa.lineWidth) {
                            var Vb = {"stroke-width": wa.lineWidth, zIndex: 2};
                            if (wa.dashStyle)Vb.dashstyle = wa.dashStyle;
                            G.legendLine = ga.path([Za, -da - Ma,
                                0, Ka, -Ma, 0]).attr(Vb).add(qa)
                        }
                        if (La)ha = ga.rect(na = -da - Ma, Ra = -11, da, 12, 2).attr({zIndex: 3}).add(qa); else if (wa && wa.marker && wa.marker.enabled)ha = ga.symbol(G.symbol, na = -da / 2 - Ma, Ra = -4, wa.marker.radius).attr({zIndex: 3}).add(qa);
                        if (ha) {
                            ha.xOff = na + zb % 2 / 2;
                            ha.yOff = Ra + zb % 2 / 2
                        }
                        G.legendSymbol = ha;
                        p(G, G.visible);
                        if (wa && wa.showCheckbox) {
                            G.checkbox = hb("input", {
                                type: "checkbox",
                                checked: G.selected,
                                defaultChecked: G.selected
                            }, N.itemCheckboxStyle, oa);
                            Qa(G.checkbox, "click", function (Gb) {
                                Pa(G, "checkboxClick", {checked: Gb.target.checked},
                                    function () {
                                        G.select()
                                    })
                            })
                        }
                    }
                    ha = pa.getBBox();
                    na = G.legendItemWidth = N.itemWidth || da + Ma + ha.width + R;
                    B = ha.height;
                    if (ta && o - s + na > (fb || $a - 2 * R - s)) {
                        o = s;
                        I += B
                    }
                    ba = I;
                    q(G, o, I);
                    if (ta)o += na; else I += B;
                    ya = fb || Ia(ta ? o - s : na, ya)
                }

                function V() {
                    o = s;
                    I = L;
                    ba = ya = 0;
                    qa || (qa = ga.g("legend").attr({zIndex: 7}).add());
                    za = [];
                    u(Hb, function (Ra) {
                        var La = Ra.options;
                        if (La.showInLegend)za = za.concat(La.legendType === "point" ? Ra.data : Ra)
                    });
                    Hd(za, function (Ra, La) {
                        return (Ra.options.legendIndex || 0) - (La.options.legendIndex || 0)
                    });
                    cc && za.reverse();
                    u(za,
                        x);
                    $b = fb || ya;
                    ac = ba - L + B;
                    if (ca || la) {
                        $b += 2 * R;
                        ac += 2 * R;
                        if (D) {
                            if ($b > 0 && ac > 0) {
                                D[D.isNew ? "attr" : "animate"](D.crisp(null, null, null, $b, ac));
                                D.isNew = false
                            }
                        } else {
                            D = ga.rect(0, 0, $b, ac, N.borderRadius, ca || 0).attr({
                                stroke: N.borderColor,
                                "stroke-width": ca || 0,
                                fill: la || jb
                            }).add(qa).shadow(N.shadow);
                            D.isNew = true
                        }
                        D[za.length ? "show" : "hide"]()
                    }
                    for (var G = ["left", "right", "top", "bottom"], ha, na = 4; na--;) {
                        ha = G[na];
                        if (eb[ha] && eb[ha] !== "auto") {
                            N[na < 2 ? "align" : "verticalAlign"] = ha;
                            N[na < 2 ? "x" : "y"] = ja(eb[ha]) * (na % 2 ? -1 : 1)
                        }
                    }
                    za.length &&
                    qa.align(sa(N, {width: $b, height: ac}), true, Rb);
                    cd || w()
                }

                var N = l.options.legend;
                if (N.enabled) {
                    var ta = N.layout === "horizontal", da = N.symbolWidth, Ma = N.symbolPadding, za, eb = N.style, ab = N.itemStyle, xa = N.itemHoverStyle, Oa = N.itemHiddenStyle, R = ja(eb.padding), L = 18, s = 4 + R + da + Ma, o, I, ba, B = 0, D, ca = N.borderWidth, la = N.backgroundColor, qa, ya, fb = N.width, Hb = l.series, cc = N.reversed;
                    V();
                    Qa(l, "endResize", w);
                    return {
                        colorizeItem: p, destroyItem: function (G) {
                            var ha = G.checkbox;
                            u(["legendItem", "legendLine", "legendSymbol"], function (na) {
                                G[na] &&
                                G[na].destroy()
                            });
                            ha && pc(G.checkbox)
                        }, renderLegend: V, destroy: function () {
                            if (D)D = D.destroy();
                            if (qa)qa = qa.destroy()
                        }
                    }
                }
            };
        gc = function (p, q) {
            return p >= 0 && p <= Da && q >= 0 && q <= Aa
        };
        $d = function () {
            Pa(l, "selection", {resetSelection: true}, td);
            l.toolbar.remove("zoom")
        };
        td = function (p) {
            var q = Xa.lang, w = l.pointCount < 100;
            l.toolbar.add("zoom", q.resetZoom, q.resetZoomTitle, $d);
            !p || p.resetSelection ? u(Va, function (x) {
                x.setExtremes(null, null, false, w)
            }) : u(p.xAxis.concat(p.yAxis), function (x) {
                var V = x.axis;
                if (l.tracker[V.isXAxis ? "zoomX" :
                        "zoomY"])V.setExtremes(x.min, x.max, false, w)
            });
            i()
        };
        Gc = function () {
            var p = a.legend, q = A(p.margin, 10), w = p.x, x = p.y, V = p.align, N = p.verticalAlign, ta;
            yd();
            if ((l.title || l.subtitle) && !K(y))if (ta = Ia(l.title && !uc.floating && !uc.verticalAlign && uc.y || 0, l.subtitle && !Ic.floating && !Ic.verticalAlign && Ic.y || 0))ea = Ia(ea, ta + A(uc.margin, 15) + Na);
            if (p.enabled && !p.floating)if (V === "right")K(C) || (Ib = Ia(Ib, $b - w + q + Ea)); else if (V === "left")K(Sa) || (X = Ia(X, $b + w + q + Lb)); else if (N === "top")K(y) || (ea = Ia(ea, ac + x + q + Na)); else if (N === "bottom")K(Z) ||
            (vb = Ia(vb, ac - x + q + gb));
            sc && u(Va, function (da) {
                da.getOffset()
            });
            K(Sa) || (X += Xb[3]);
            K(y) || (ea += Xb[0]);
            K(Z) || (vb += Xb[2]);
            K(C) || (Ib += Xb[1]);
            zd()
        };
        xd = function (p, q, w) {
            var x = l.title, V = l.subtitle;
            cd += 1;
            oc(w, l);
            ad = cb;
            qd = $a;
            l.chartWidth = $a = W(p);
            l.chartHeight = cb = W(q);
            Ja(oa, {width: $a + Ua, height: cb + Ua});
            ga.setSize($a, cb, w);
            Da = $a - X - Ib;
            Aa = cb - ea - vb;
            Ob = null;
            u(Va, function (N) {
                N.isDirty = true;
                N.setScale()
            });
            u(Ha, function (N) {
                N.isDirty = true
            });
            l.isDirtyLegend = true;
            l.isDirtyBox = true;
            Gc();
            x && x.align(null, null, Rb);
            V && V.align(null,
                null, Rb);
            i(w);
            ad = null;
            Pa(l, "resize");
            Bc === false ? T() : setTimeout(T, Bc && Bc.duration || 500)
        };
        zd = function () {
            l.plotLeft = X = W(X);
            l.plotTop = ea = W(ea);
            l.plotWidth = Da = W($a - X - Ib);
            l.plotHeight = Aa = W(cb - ea - vb);
            l.plotSizeX = va ? Aa : Da;
            l.plotSizeY = va ? Da : Aa;
            Rb = {x: Lb, y: Na, width: $a - Lb - Ea, height: cb - Na - gb}
        };
        yd = function () {
            ea = A(y, Na);
            Ib = A(C, Ea);
            vb = A(Z, gb);
            X = A(Sa, Lb);
            Xb = [0, 0, 0, 0]
        };
        vd = function () {
            var p = z.borderWidth || 0, q = z.backgroundColor, w = z.plotBackgroundColor, x = z.plotBackgroundImage, V, N = {
                x: X,
                y: ea,
                width: Da,
                height: Aa
            };
            V = p + (z.shadow ?
                8 : 0);
            if (p || q)if (wc)wc.animate(wc.crisp(null, null, null, $a - V, cb - V)); else wc = ga.rect(V / 2, V / 2, $a - V, cb - V, z.borderRadius, p).attr({
                stroke: z.borderColor,
                "stroke-width": p,
                fill: q || jb
            }).add().shadow(z.shadow);
            if (w)if (Kc)Kc.animate(N); else Kc = ga.rect(X, ea, Da, Aa, 0).attr({fill: w}).add().shadow(z.plotShadow);
            if (x)if (Ad)Ad.animate(N); else Ad = ga.image(x, X, ea, Da, Aa).add();
            if (z.plotBorderWidth)if (xc)xc.animate(xc.crisp(null, X, ea, Da, Aa)); else xc = ga.rect(X, ea, Da, Aa, 0, z.plotBorderWidth).attr({
                stroke: z.plotBorderColor,
                "stroke-width": z.plotBorderWidth, zIndex: 4
            }).add();
            l.isDirtyBox = false
        };
        Qa(db, "unload", H);
        z.reflow !== false && Qa(l, "load", P);
        if (M)for (Bd in M)Qa(l, Bd, M[Bd]);
        l.options = a;
        l.series = Ha;
        l.addSeries = function (p, q, w) {
            var x;
            if (p) {
                oc(w, l);
                q = A(q, true);
                Pa(l, "addSeries", {options: p}, function () {
                    x = g(p);
                    x.isDirty = true;
                    l.isDirtyLegend = true;
                    q && l.redraw()
                })
            }
            return x
        };
        l.animation = A(z.animation, true);
        l.destroy = H;
        l.get = function (p) {
            var q, w, x;
            for (q = 0; q < Va.length; q++)if (Va[q].options.id === p)return Va[q];
            for (q = 0; q < Ha.length; q++)if (Ha[q].options.id ===
                p)return Ha[q];
            for (q = 0; q < Ha.length; q++) {
                x = Ha[q].data;
                for (w = 0; w < x.length; w++)if (x[w].id === p)return x[w]
            }
            return null
        };
        l.getSelectedPoints = function () {
            var p = [];
            u(Ha, function (q) {
                p = p.concat(Dd(q.data, function (w) {
                    return w.selected
                }))
            });
            return p
        };
        l.getSelectedSeries = function () {
            return Dd(Ha, function (p) {
                return p.selected
            })
        };
        l.hideLoading = function () {
            gd(jc, {opacity: 0}, {
                duration: a.loading.hideDuration, complete: function () {
                    Ja(jc, {display: jb})
                }
            });
            Cd = false
        };
        l.isInsidePlot = gc;
        l.redraw = i;
        l.setSize = xd;
        l.setTitle = m;
        l.showLoading =
            function (p) {
                var q = a.loading;
                if (!jc) {
                    jc = hb(Tb, {className: "highcharts-loading"}, sa(q.style, {
                        left: X + Ua,
                        top: ea + Ua,
                        width: Da + Ua,
                        height: Aa + Ua,
                        zIndex: 10,
                        display: jb
                    }), oa);
                    Zd = hb("span", null, q.labelStyle, jc)
                }
                Zd.innerHTML = p || a.lang.loading;
                if (!Cd) {
                    Ja(jc, {opacity: 0, display: ""});
                    gd(jc, {opacity: q.style.opacity}, {duration: q.showDuration});
                    Cd = true
                }
            };
        l.pointCount = 0;
        l.counters = new Gd;
        U()
    }

    var ua = document, db = window, Fa = Math, W = Fa.round, lb = Fa.floor, md = Fa.ceil, Ia = Fa.max, tb = Fa.min, bb = Fa.abs, rb = Fa.cos, Cb = Fa.sin, kc = Fa.PI, ae =
        kc * 2 / 360, yc = navigator.userAgent, Pc = /msie/i.test(yc) && !db.opera, Mc = ua.documentMode === 8, Ud = /AppleWebKit/.test(yc), Yd = /Firefox/.test(yc), Lc = !!ua.createElementNS && !!ua.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, me = Yd && parseInt(yc.split("Firefox/")[1], 10) < 4, fd, Kb = ua.documentElement.ontouchstart !== undefined, be = {}, wd = 0, ub = 1, Tc, Xa, Zc, Bc, Nc, Wa, Tb = "div", ic = "absolute", Xd = "relative", ob = "hidden", vc = "highcharts-", Ab = "visible", Ua = "px", jb = "none", Za = "M", Ka = "L", ce = "rgba(192,192,192," + (Lc ? 1.0E-6 :
            0.0020) + ")", ib = "", Bb = "hover", Qc, id, jd, kd, Cc, Rc, Sc, Jd, Kd, ld, Ld, Md, ma = db.HighchartsAdapter, Db = ma || {}, u = Db.each, Dd = Db.grep, tc = Db.map, Ca = Db.merge, Qa = Db.addEvent, pb = Db.removeEvent, Pa = Db.fireEvent, gd = Db.animate, Hc = Db.stop, wb = {};
    Zc = function (a, b, c) {
        function d(P) {
            return P.toString().replace(/^([0-9])$/, "0$1")
        }

        if (!K(b) || isNaN(b))return "Invalid date";
        a = A(a, "%Y-%m-%d %H:%M:%S");
        b = new Date(b * ub);
        var e, f = b[jd](), g = b[kd](), h = b[Cc](), i = b[Rc](), j = b[Sc](), m = Xa.lang, v = m.weekdays;
        b = {
            a: v[g].substr(0, 3),
            A: v[g],
            d: d(h),
            e: h,
            b: m.shortMonths[i],
            B: m.months[i],
            m: d(i + 1),
            y: j.toString().substr(2, 2),
            Y: j,
            H: d(f),
            I: d(f % 12 || 12),
            l: f % 12 || 12,
            M: d(b[id]()),
            p: f < 12 ? "AM" : "PM",
            P: f < 12 ? "am" : "pm",
            S: d(b.getSeconds())
        };
        for (e in b)a = a.replace("%" + e, b[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    Gd.prototype = {
        wrapColor: function (a) {
            if (this.color >= a)this.color = 0
        }, wrapSymbol: function (a) {
            if (this.symbol >= a)this.symbol = 0
        }
    };
    Nc = {
        init: function (a, b, c) {
            b = b || "";
            var d = a.shift, e = b.indexOf("C") > -1, f = e ? 7 : 3, g;
            b = b.split(" ");
            c = [].concat(c);
            var h,
                i, j = function (m) {
                    for (g = m.length; g--;)m[g] === Za && m.splice(g + 1, 0, m[g + 1], m[g + 2], m[g + 1], m[g + 2])
                };
            if (e) {
                j(b);
                j(c)
            }
            if (a.isArea) {
                h = b.splice(b.length - 6, 6);
                i = c.splice(c.length - 6, 6)
            }
            if (d) {
                c = [].concat(c).splice(0, f).concat(c);
                a.shift = false
            }
            if (b.length)for (a = c.length; b.length < a;) {
                d = [].concat(b).splice(b.length - f, f);
                if (e) {
                    d[f - 6] = d[f - 2];
                    d[f - 5] = d[f - 1]
                }
                b = b.concat(d)
            }
            if (h) {
                b = b.concat(h);
                c = c.concat(i)
            }
            return [b, c]
        }, step: function (a, b, c, d) {
            var e = [], f = a.length;
            if (c === 1)e = d; else if (f === b.length && c < 1)for (; f--;) {
                d = parseFloat(a[f]);
                e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d
            } else e = b;
            return e
        }
    };
    ma && ma.init && ma.init(Nc);
    if (!ma && db.jQuery) {
        var Mb = jQuery;
        u = function (a, b) {
            for (var c = 0, d = a.length; c < d; c++)if (b.call(a[c], a[c], c, a) === false)return c
        };
        Dd = Mb.grep;
        tc = function (a, b) {
            for (var c = [], d = 0, e = a.length; d < e; d++)c[d] = b.call(a[d], a[d], d, a);
            return c
        };
        Ca = function () {
            var a = arguments;
            return Mb.extend(true, null, a[0], a[1], a[2], a[3])
        };
        Qa = function (a, b, c) {
            Mb(a).bind(b, c)
        };
        pb = function (a, b, c) {
            var d = ua.removeEventListener ? "removeEventListener" : "detachEvent";
            if (ua[d] && !a[d])a[d] = function () {
            };
            Mb(a).unbind(b, c)
        };
        Pa = function (a, b, c, d) {
            var e = Mb.Event(b), f = "detached" + b;
            sa(e, c);
            if (a[b]) {
                a[f] = a[b];
                a[b] = null
            }
            Mb(a).trigger(e);
            if (a[f]) {
                a[b] = a[f];
                a[f] = null
            }
            d && !e.isDefaultPrevented() && d(e)
        };
        gd = function (a, b, c) {
            var d = Mb(a);
            if (b.d) {
                a.toD = b.d;
                b.d = 1
            }
            d.stop();
            d.animate(b, c)
        };
        Hc = function (a) {
            Mb(a).stop()
        };
        Mb.extend(Mb.easing, {
            easeOutQuad: function (a, b, c, d, e) {
                return -d * (b /= e) * (b - 2) + c
            }
        });
        var de = jQuery.fx, ee = de.step;
        u(["cur", "_default", "width", "height"], function (a, b) {
            var c = b ?
                ee : de.prototype, d = c[a], e;
            if (d)c[a] = function (f) {
                f = b ? f : this;
                e = f.elem;
                return e.attr ? e.attr(f.prop, f.now) : d.apply(this, arguments)
            }
        });
        ee.d = function (a) {
            var b = a.elem;
            if (!a.started) {
                var c = Nc.init(b, b.d, b.toD);
                a.start = c[0];
                a.end = c[1];
                a.started = true
            }
            b.attr("d", Nc.step(a.start, a.end, a.pos, b.toD))
        }
    }
    ma = {enabled: true, align: "center", x: 0, y: 15, style: {color: "#666", fontSize: "11px", lineHeight: "14px"}};
    Xa = {
        colors: ["#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92"],
        symbols: ["circle",
            "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            decimalPoint: ".",
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {useUTC: true},
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: true,
            spacingTop: 10,
            spacingRight: 10,
            spacingBottom: 15,
            spacingLeft: 10,
            style: {fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif', fontSize: "12px"},
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0"
        },
        title: {text: "Chart title", align: "center", y: 15, style: {color: "#3E576F", fontSize: "16px"}},
        subtitle: {text: "", align: "center", y: 30, style: {color: "#6D869F"}},
        plotOptions: {
            line: {
                allowPointSelect: false,
                showCheckbox: false,
                animation: {duration: 1E3},
                events: {},
                lineWidth: 2,
                shadow: true,
                marker: {
                    enabled: true,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {hover: {}, select: {fillColor: "#FFFFFF", lineColor: "#000000", lineWidth: 2}}
                },
                point: {events: {}},
                dataLabels: Ca(ma, {
                    enabled: false, y: -6, formatter: function () {
                        return this.y
                    }
                }),
                showInLegend: true,
                states: {hover: {marker: {}}, select: {marker: {}}},
                stickyTracking: true
            }
        },
        labels: {style: {position: ic, color: "#3E576F"}},
        legend: {
            enabled: true,
            align: "center",
            layout: "horizontal",
            labelFormatter: function () {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            shadow: false,
            style: {padding: "5px"},
            itemStyle: {cursor: "pointer", color: "#3E576F"},
            itemHoverStyle: {cursor: "pointer", color: "#000000"},
            itemHiddenStyle: {color: "#C0C0C0"},
            itemCheckboxStyle: {position: ic, width: "13px", height: "13px"},
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0
        },
        loading: {
            hideDuration: 100,
            labelStyle: {fontWeight: "bold", position: Xd, top: "1em"},
            showDuration: 100,
            style: {position: ic, backgroundColor: "white", opacity: 0.5, textAlign: "center"}
        },
        tooltip: {
            enabled: true,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 2,
            borderRadius: 5,
            shadow: true,
            snap: Kb ? 25 : 10,
            style: {color: "#333333", fontSize: "12px", padding: "5px", whiteSpace: "nowrap"}
        },
        toolbar: {itemStyle: {color: "#4572A7", cursor: "pointer"}},
        credits: {
            enabled: true,
            text: "Highcharts.com",
            href: "http://www.highcharts.com",
            position: {align: "right", x: -10, verticalAlign: "bottom", y: -5},
            style: {cursor: "pointer", color: "#909090", fontSize: "10px"}
        }
    };
    var Yc = {
            dateTimeLabelFormats: {
                second: "%H:%M:%S", minute: "%H:%M",
                hour: "%H:%M", day: "%e. %b", week: "%e. %b", month: "%b '%y", year: "%Y"
            },
            endOnTick: false,
            gridLineColor: "#C0C0C0",
            labels: ma,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            max: null,
            min: null,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: false,
            tickColor: "#C0D0E0",
            tickLength: 5,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle", style: {
                    color: "#6D869F",
                    fontWeight: "bold"
                }
            },
            type: "linear"
        }, od = Ca(Yc, {
            endOnTick: true,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: true,
            labels: {align: "right", x: -8, y: 3},
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: true,
            tickWidth: 0,
            title: {rotation: 270, text: "Y-values"},
            stackLabels: {
                enabled: false, formatter: function () {
                    return this.total
                }, style: ma.style
            }
        }), ie = {labels: {align: "right", x: -8, y: null}, title: {rotation: 270}}, he = {
            labels: {align: "left", x: 8, y: null},
            title: {rotation: 90}
        }, Td = {labels: {align: "center", x: 0, y: 14}, title: {rotation: 0}},
        ge = Ca(Td, {labels: {y: -5}}), xb = Xa.plotOptions;
    ma = xb.line;
    xb.spline = Ca(ma);
    xb.scatter = Ca(ma, {lineWidth: 0, states: {hover: {lineWidth: 0}}});
    xb.area = Ca(ma, {});
    xb.areaspline = Ca(xb.area);
    xb.column = Ca(ma, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        states: {hover: {brightness: 0.1, shadow: false}, select: {color: "#C0C0C0", borderColor: "#000000", shadow: false}},
        dataLabels: {y: null, verticalAlign: null}
    });
    xb.bar = Ca(xb.column, {
        dataLabels: {
            align: "left", x: 5,
            y: 0
        }
    });
    xb.pie = Ca(ma, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: ["50%", "50%"],
        colorByPoint: true,
        dataLabels: {
            distance: 30, enabled: true, formatter: function () {
                return this.point.name
            }, y: 5
        },
        legendType: "point",
        marker: null,
        size: "75%",
        showInLegend: false,
        slicedOffset: 10,
        states: {hover: {brightness: 0.1, shadow: false}}
    });
    Id();
    var bc = function (a) {
        var b = [], c;
        (function (d) {
            if (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(d))b = [ja(c[1]), ja(c[2]), ja(c[3]), parseFloat(c[4],
                10)]; else if (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(d))b = [ja(c[1], 16), ja(c[2], 16), ja(c[3], 16), 1]
        })(a);
        return {
            get: function (d) {
                return b && !isNaN(b[0]) ? d === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : d === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a
            }, brighten: function (d) {
                if (lc(d) && d !== 0) {
                    var e;
                    for (e = 0; e < 3; e++) {
                        b[e] += ja(d * 255);
                        if (b[e] < 0)b[e] = 0;
                        if (b[e] > 255)b[e] = 255
                    }
                }
                return this
            }, setOpacity: function (d) {
                b[3] = d;
                return this
            }
        }
    };
    Uc.prototype = {
        init: function (a, b) {
            this.element = ua.createElementNS("http://www.w3.org/2000/svg",
                b);
            this.renderer = a
        }, animate: function (a, b, c) {
            if (b = A(b, Bc, true)) {
                b = Ca(b);
                if (c)b.complete = c;
                gd(this, a, b)
            } else {
                this.attr(a);
                c && c()
            }
        }, attr: function (a, b) {
            var c, d, e, f, g = this.element, h = g.nodeName, i = this.renderer, j, m = this.shadows, v = this.htmlNode, P, T = this;
            if (Sb(a) && K(b)) {
                c = a;
                a = {};
                a[c] = b
            }
            if (Sb(a)) {
                c = a;
                if (h === "circle")c = {x: "cx", y: "cy"}[c] || c; else if (c === "strokeWidth")c = "stroke-width";
                T = Ga(g, c) || this[c] || 0;
                if (c !== "d" && c !== "visibility")T = parseFloat(T)
            } else for (c in a) {
                j = false;
                d = a[c];
                if (c === "d") {
                    if (d && d.join)d =
                        d.join(" ");
                    if (/(NaN| {2}|^$)/.test(d))d = "M 0 0";
                    this.d = d
                } else if (c === "x" && h === "text") {
                    for (e = 0; e < g.childNodes.length; e++) {
                        f = g.childNodes[e];
                        Ga(f, "x") === Ga(g, "x") && Ga(f, "x", d)
                    }
                    if (this.rotation)Ga(g, "transform", "rotate(" + this.rotation + " " + d + " " + ja(a.y || Ga(g, "y")) + ")")
                } else if (c === "fill")d = i.color(d, g, c); else if (h === "circle" && (c === "x" || c === "y"))c = {
                    x: "cx",
                    y: "cy"
                }[c] || c; else if (c === "translateX" || c === "translateY" || c === "rotation" || c === "verticalAlign") {
                    this[c] = d;
                    this.updateTransform();
                    j = true
                } else if (c ===
                    "stroke")d = i.color(d, g, c); else if (c === "dashstyle") {
                    c = "stroke-dasharray";
                    d = d && d.toLowerCase();
                    if (d === "solid")d = jb; else if (d) {
                        d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                        for (e = d.length; e--;)d[e] = ja(d[e]) * a["stroke-width"];
                        d = d.join(",")
                    }
                } else if (c === "isTracker")this[c] = d; else if (c === "width")d = ja(d); else if (c ===
                    "align") {
                    c = "text-anchor";
                    d = {left: "start", center: "middle", right: "end"}[d]
                } else if (c === "title") {
                    e = ua.createElementNS("http://www.w3.org/2000/svg", "title");
                    e.appendChild(ua.createTextNode(d));
                    g.appendChild(e)
                }
                if (c === "strokeWidth")c = "stroke-width";
                if (Ud && c === "stroke-width" && d === 0)d = 1.0E-6;
                if (this.symbolName && /^(x|y|r|start|end|innerR)/.test(c)) {
                    if (!P) {
                        this.symbolAttr(a);
                        P = true
                    }
                    j = true
                }
                if (m && /^(width|height|visibility|x|y|d)$/.test(c))for (e = m.length; e--;)Ga(m[e], c, d);
                if ((c === "width" || c === "height") && h ===
                    "rect" && d < 0)d = 0;
                if (c === "text") {
                    this.textStr = d;
                    this.added && i.buildText(this)
                } else j || Ga(g, c, d);
                if (v && (c === "x" || c === "y" || c === "translateX" || c === "translateY" || c === "visibility")) {
                    e = v.length ? v : [this];
                    f = e.length;
                    var Y;
                    for (Y = 0; Y < f; Y++) {
                        v = e[Y];
                        j = v.getBBox();
                        v = v.htmlNode;
                        Ja(v, sa(this.styles, {left: j.x + (this.translateX || 0) + Ua, top: j.y + (this.translateY || 0) + Ua}));
                        c === "visibility" && Ja(v, {visibility: d})
                    }
                }
            }
            return T
        }, symbolAttr: function (a) {
            var b = this;
            u(["x", "y", "r", "start", "end", "width", "height", "innerR"], function (c) {
                b[c] =
                    A(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](W(b.x * 2) / 2, W(b.y * 2) / 2, b.r, {
                    start: b.start,
                    end: b.end,
                    width: b.width,
                    height: b.height,
                    innerR: b.innerR
                })
            })
        }, clip: function (a) {
            return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")")
        }, crisp: function (a, b, c, d, e) {
            var f, g = {}, h = {}, i;
            a = a || this.strokeWidth || 0;
            i = a % 2 / 2;
            h.x = lb(b || this.x || 0) + i;
            h.y = lb(c || this.y || 0) + i;
            h.width = lb((d || this.width || 0) - 2 * i);
            h.height = lb((e || this.height || 0) - 2 * i);
            h.strokeWidth = a;
            for (f in h)if (this[f] !== h[f])this[f] = g[f] = h[f];
            return g
        }, css: function (a) {
            var b = this.element;
            b = a && a.width && b.nodeName === "text";
            var c, d = "", e = function (f, g) {
                return "-" + g.toLowerCase()
            };
            if (a && a.color)a.fill = a.color;
            this.styles = a = sa(this.styles, a);
            if (Pc && !Lc) {
                b && delete a.width;
                Ja(this.element, a)
            } else {
                for (c in a)d += c.replace(/([A-Z])/g, e) + ":" + a[c] + ";";
                this.attr({style: d})
            }
            b && this.added && this.renderer.buildText(this);
            return this
        }, on: function (a, b) {
            var c = b;
            if (Kb && a === "click") {
                a = "touchstart";
                c = function (d) {
                    d.preventDefault();
                    b()
                }
            }
            this.element["on" + a] = c;
            return this
        },
        translate: function (a, b) {
            return this.attr({translateX: a, translateY: b})
        }, invert: function () {
            this.inverted = true;
            this.updateTransform();
            return this
        }, updateTransform: function () {
            var a = this.translateX || 0, b = this.translateY || 0, c = this.inverted, d = this.rotation, e = [];
            if (c) {
                a += this.attr("width");
                b += this.attr("height")
            }
            if (a || b)e.push("translate(" + a + "," + b + ")");
            if (c)e.push("rotate(90) scale(-1,1)"); else d && e.push("rotate(" + d + " " + this.x + " " + this.y + ")");
            e.length && Ga(this.element, "transform", e.join(" "))
        }, toFront: function () {
            var a =
                this.element;
            a.parentNode.appendChild(a);
            return this
        }, align: function (a, b, c) {
            if (a) {
                this.alignOptions = a;
                this.alignByTranslate = b;
                c || this.renderer.alignedObjects.push(this)
            } else {
                a = this.alignOptions;
                b = this.alignByTranslate
            }
            c = A(c, this.renderer);
            var d = a.align, e = a.verticalAlign, f = (c.x || 0) + (a.x || 0), g = (c.y || 0) + (a.y || 0), h = {};
            if (/^(right|center)$/.test(d))f += (c.width - (a.width || 0)) / {right: 1, center: 2}[d];
            h[b ? "translateX" : "x"] = W(f);
            if (/^(bottom|middle)$/.test(e))g += (c.height - (a.height || 0)) / ({bottom: 1, middle: 2}[e] ||
            1);
            h[b ? "translateY" : "y"] = W(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = true;
            this.alignAttr = h;
            return this
        }, getBBox: function () {
            var a, b, c, d = this.rotation, e = d * ae;
            try {
                a = sa({}, this.element.getBBox())
            } catch (f) {
                a = {width: 0, height: 0}
            }
            b = a.width;
            c = a.height;
            if (d) {
                a.width = bb(c * Cb(e)) + bb(b * rb(e));
                a.height = bb(c * rb(e)) + bb(b * Cb(e))
            }
            return a
        }, show: function () {
            return this.attr({visibility: Ab})
        }, hide: function () {
            return this.attr({visibility: ob})
        }, add: function (a) {
            var b = this.renderer, c = a || b, d = c.element || b.box, e =
                d.childNodes, f = this.element, g = Ga(f, "zIndex");
            this.parentInverted = a && a.inverted;
            this.textStr !== undefined && b.buildText(this);
            if (a && this.htmlNode) {
                if (!a.htmlNode)a.htmlNode = [];
                a.htmlNode.push(this)
            }
            if (g) {
                c.handleZ = true;
                g = ja(g)
            }
            if (c.handleZ)for (c = 0; c < e.length; c++) {
                a = e[c];
                b = Ga(a, "zIndex");
                if (a !== f && (ja(b) > g || !K(g) && K(b))) {
                    d.insertBefore(f, a);
                    return this
                }
            }
            d.appendChild(f);
            this.added = true;
            return this
        }, safeRemoveChild: function (a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        }, destroy: function () {
            var a = this, b = a.element ||
                {}, c = a.shadows, d, e;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = null;
            Hc(a);
            if (a.clipPath)a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (e = 0; e < a.stops.length; e++)a.stops[e] = a.stops[e].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            c && u(c, function (f) {
                a.safeRemoveChild(f)
            });
            nc(a.renderer.alignedObjects, a);
            for (d in a)delete a[d];
            return null
        }, empty: function () {
            for (var a = this.element, b = a.childNodes, c = b.length; c--;)a.removeChild(b[c])
        }, shadow: function (a, b) {
            var c = [], d, e, f = this.element, g = this.parentInverted ?
                "(-1,-1)" : "(1,1)";
            if (a) {
                for (d = 1; d <= 3; d++) {
                    e = f.cloneNode(0);
                    Ga(e, {
                        isShadow: "true",
                        stroke: "rgb(0, 0, 0)",
                        "stroke-opacity": 0.05 * d,
                        "stroke-width": 7 - 2 * d,
                        transform: "translate" + g,
                        fill: jb
                    });
                    b ? b.element.appendChild(e) : f.parentNode.insertBefore(e, f);
                    c.push(e)
                }
                this.shadows = c
            }
            return this
        }
    };
    var ed = function () {
        this.init.apply(this, arguments)
    };
    ed.prototype = {
        Element: Uc, init: function (a, b, c, d) {
            var e = location, f;
            f = this.createElement("svg").attr({xmlns: "http://www.w3.org/2000/svg", version: "1.1"});
            a.appendChild(f.element);
            this.box = f.element;
            this.boxWrapper = f;
            this.alignedObjects = [];
            this.url = Pc ? "" : e.href.replace(/#.*?$/, "");
            this.defs = this.createElement("defs").add();
            this.forExport = d;
            this.gradients = [];
            this.setSize(b, c, false)
        }, destroy: function () {
            var a, b = this.gradients, c = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            if (b) {
                for (a = 0; a < b.length; a++)this.gradients[a] = b[a].destroy();
                this.gradients = null
            }
            if (c)this.defs = c.destroy();
            return this.alignedObjects = null
        }, createElement: function (a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        }, buildText: function (a) {
            for (var b = a.element, c = A(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), d = b.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = Ga(b, "x"), h = a.styles, i = h && a.useHTML && !this.forExport, j = a.htmlNode, m = h && ja(h.width), v = h && h.lineHeight, P, T = d.length; T--;)b.removeChild(d[T]);
            m && !a.added &&
            this.box.appendChild(b);
            u(c, function (Y, H) {
                var U, z = 0, M;
                Y = Y.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                U = Y.split("|||");
                u(U, function (y) {
                    if (y !== "" || U.length === 1) {
                        var C = {}, Z = ua.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        e.test(y) && Ga(Z, "style", y.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
                        if (f.test(y)) {
                            Ga(Z, "onclick", 'location.href="' + y.match(f)[1] + '"');
                            Ja(Z, {cursor: "pointer"})
                        }
                        y = (y.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        Z.appendChild(ua.createTextNode(y));
                        if (z)C.dx = 3; else C.x = g;
                        if (!z) {
                            if (H) {
                                !Lc && a.renderer.forExport && Ja(Z, {display: "block"});
                                M = db.getComputedStyle && ja(db.getComputedStyle(P, null).getPropertyValue("line-height"));
                                if (!M || isNaN(M))M = v || P.offsetHeight || 18;
                                Ga(Z, "dy", M)
                            }
                            P = Z
                        }
                        Ga(Z, C);
                        b.appendChild(Z);
                        z++;
                        if (m) {
                            y = y.replace(/-/g, "- ").split(" ");
                            for (var Sa, Na = []; y.length || Na.length;) {
                                Sa = b.getBBox().width;
                                C = Sa > m;
                                if (!C || y.length === 1) {
                                    y = Na;
                                    Na = [];
                                    if (y.length) {
                                        Z = ua.createElementNS("http://www.w3.org/2000/svg", "tspan");
                                        Ga(Z, {dy: v || 16, x: g});
                                        b.appendChild(Z);
                                        if (Sa > m)m = Sa
                                    }
                                } else {
                                    Z.removeChild(Z.firstChild);
                                    Na.unshift(y.pop())
                                }
                                y.length && Z.appendChild(ua.createTextNode(y.join(" ").replace(/- /g, "-")))
                            }
                        }
                    }
                })
            });
            if (i) {
                if (!j)j = a.htmlNode = hb("span", null, sa(h, {position: ic, top: 0, left: 0}), this.box.parentNode);
                j.innerHTML = a.textStr;
                for (T = d.length; T--;)d[T].style.visibility = ob
            }
        }, crispLine: function (a, b) {
            if (a[1] === a[4])a[1] = a[4] = W(a[1]) + b % 2 / 2;
            if (a[2] === a[5])a[2] = a[5] = W(a[2]) + b % 2 / 2;
            return a
        }, path: function (a) {
            return this.createElement("path").attr({d: a, fill: jb})
        }, circle: function (a,
                             b, c) {
            a = Nb(a) ? a : {x: a, y: b, r: c};
            return this.createElement("circle").attr(a)
        }, arc: function (a, b, c, d, e, f) {
            if (Nb(a)) {
                b = a.y;
                c = a.r;
                d = a.innerR;
                e = a.start;
                f = a.end;
                a = a.x
            }
            return this.symbol("arc", a || 0, b || 0, c || 0, {innerR: d || 0, start: e || 0, end: f || 0})
        }, rect: function (a, b, c, d, e, f) {
            if (Nb(a)) {
                b = a.y;
                c = a.width;
                d = a.height;
                e = a.r;
                f = a.strokeWidth;
                a = a.x
            }
            e = this.createElement("rect").attr({rx: e, ry: e, fill: jb});
            return e.attr(e.crisp(f, a, b, Ia(c, 0), Ia(d, 0)))
        }, setSize: function (a, b, c) {
            var d = this.alignedObjects, e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[A(c, true) ? "animate" : "attr"]({width: a, height: b}); e--;)d[e].align()
        }, g: function (a) {
            var b = this.createElement("g");
            return K(a) ? b.attr({"class": vc + a}) : b
        }, image: function (a, b, c, d, e) {
            var f = {preserveAspectRatio: jb};
            arguments.length > 1 && sa(f, {x: b, y: c, width: d, height: e});
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        }, symbol: function (a, b, c, d, e) {
            var f,
                g = this.symbols[a];
            g = g && g(W(b), W(c), d, e);
            var h = /^url\((.*?)\)$/, i;
            if (g) {
                f = this.path(g);
                sa(f, {symbolName: a, x: b, y: c, r: d});
                e && sa(f, e)
            } else if (h.test(a)) {
                var j = function (m, v) {
                    m.attr({width: v[0], height: v[1]}).translate(-W(v[0] / 2), -W(v[1] / 2))
                };
                i = a.match(h)[1];
                a = be[i];
                f = this.image(i).attr({x: b, y: c});
                if (a)j(f, a); else {
                    f.attr({width: 0, height: 0});
                    hb("img", {
                        onload: function () {
                            j(f, be[i] = [this.width, this.height])
                        }, src: i
                    })
                }
            } else f = this.circle(b, c, d);
            return f
        }, symbols: {
            square: function (a, b, c) {
                c = 0.707 * c;
                return [Za, a - c,
                    b - c, Ka, a + c, b - c, a + c, b + c, a - c, b + c, "Z"]
            }, triangle: function (a, b, c) {
                return [Za, a, b - 1.33 * c, Ka, a + c, b + 0.67 * c, a - c, b + 0.67 * c, "Z"]
            }, "triangle-down": function (a, b, c) {
                return [Za, a, b + 1.33 * c, Ka, a - c, b - 0.67 * c, a + c, b - 0.67 * c, "Z"]
            }, diamond: function (a, b, c) {
                return [Za, a, b - c, Ka, a + c, b, a, b + c, a - c, b, "Z"]
            }, arc: function (a, b, c, d) {
                var e = d.start, f = d.end - 1.0E-6, g = d.innerR, h = rb(e), i = Cb(e), j = rb(f);
                f = Cb(f);
                d = d.end - e < kc ? 0 : 1;
                return [Za, a + c * h, b + c * i, "A", c, c, 0, d, 1, a + c * j, b + c * f, Ka, a + g * j, b + g * f, "A", g, g, 0, d, 0, a + g * h, b + g * i, "Z"]
            }
        }, clipRect: function (a, b,
                               c, d) {
            var e = vc + wd++, f = this.createElement("clipPath").attr({id: e}).add(this.defs);
            a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        }, color: function (a, b, c) {
            var d, e = /^rgba/;
            if (a && a.linearGradient) {
                var f = this;
                b = a.linearGradient;
                c = vc + wd++;
                var g, h, i;
                g = f.createElement("linearGradient").attr({
                    id: c,
                    gradientUnits: "userSpaceOnUse",
                    x1: b[0],
                    y1: b[1],
                    x2: b[2],
                    y2: b[3]
                }).add(f.defs);
                f.gradients.push(g);
                g.stops = [];
                u(a.stops, function (j) {
                    if (e.test(j[1])) {
                        d = bc(j[1]);
                        h = d.get("rgb");
                        i = d.get("a")
                    } else {
                        h = j[1];
                        i = 1
                    }
                    j =
                        f.createElement("stop").attr({offset: j[0], "stop-color": h, "stop-opacity": i}).add(g);
                    g.stops.push(j)
                });
                return "url(" + this.url + "#" + c + ")"
            } else if (e.test(a)) {
                d = bc(a);
                Ga(b, c + "-opacity", d.get("a"));
                return d.get("rgb")
            } else {
                b.removeAttribute(c + "-opacity");
                return a
            }
        }, text: function (a, b, c, d) {
            var e = Xa.chart.style;
            b = W(A(b, 0));
            c = W(A(c, 0));
            a = this.createElement("text").attr({x: b, y: c, text: a}).css({fontFamily: e.fontFamily, fontSize: e.fontSize});
            a.x = b;
            a.y = c;
            a.useHTML = d;
            return a
        }
    };
    fd = ed;
    if (!Lc) {
        Db = yb(Uc, {
            init: function (a,
                            b) {
                var c = ["<", b, ' filled="f" stroked="f"'], d = ["position: ", ic, ";"];
                if (b === "shape" || b === Tb)d.push("left:0;top:0;width:10px;height:10px;");
                if (Mc)d.push("visibility: ", b === Tb ? ob : Ab);
                c.push(' style="', d.join(""), '"/>');
                if (b) {
                    c = b === Tb || b === "span" || b === "img" ? c.join("") : a.prepVML(c);
                    this.element = hb(c)
                }
                this.renderer = a
            }, add: function (a) {
                var b = this.renderer, c = this.element, d = b.box;
                d = a ? a.element || a : d;
                a && a.inverted && b.invertChild(c, d);
                Mc && d.gVis === ob && Ja(c, {visibility: ob});
                d.appendChild(c);
                this.added = true;
                this.alignOnAdd &&
                this.updateTransform();
                return this
            }, attr: function (a, b) {
                var c, d, e, f = this.element || {}, g = f.style, h = f.nodeName, i = this.renderer, j = this.symbolName, m, v, P = this.shadows, T = this;
                if (Sb(a) && K(b)) {
                    c = a;
                    a = {};
                    a[c] = b
                }
                if (Sb(a)) {
                    c = a;
                    T = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c]
                } else for (c in a) {
                    d = a[c];
                    m = false;
                    if (j && /^(x|y|r|start|end|width|height|innerR)/.test(c)) {
                        if (!v) {
                            this.symbolAttr(a);
                            v = true
                        }
                        m = true
                    } else if (c === "d") {
                        d = d || [];
                        this.d = d.join(" ");
                        e = d.length;
                        for (m = []; e--;)m[e] = lc(d[e]) ? W(d[e] * 10) -
                        5 : d[e] === "Z" ? "x" : d[e];
                        d = m.join(" ") || "x";
                        f.path = d;
                        if (P)for (e = P.length; e--;)P[e].path = d;
                        m = true
                    } else if (c === "zIndex" || c === "visibility") {
                        if (Mc && c === "visibility" && h === "DIV") {
                            f.gVis = d;
                            m = f.childNodes;
                            for (e = m.length; e--;)Ja(m[e], {visibility: d});
                            if (d === Ab)d = null
                        }
                        if (d)g[c] = d;
                        m = true
                    } else if (/^(width|height)$/.test(c)) {
                        this[c] = d;
                        if (this.updateClipping) {
                            this[c] = d;
                            this.updateClipping()
                        } else g[c] = d;
                        m = true
                    } else if (/^(x|y)$/.test(c)) {
                        this[c] = d;
                        if (f.tagName === "SPAN")this.updateTransform(); else g[{x: "left", y: "top"}[c]] =
                            d
                    } else if (c === "class")f.className = d; else if (c === "stroke") {
                        d = i.color(d, f, c);
                        c = "strokecolor"
                    } else if (c === "stroke-width" || c === "strokeWidth") {
                        f.stroked = d ? true : false;
                        c = "strokeweight";
                        this[c] = d;
                        if (lc(d))d += Ua
                    } else if (c === "dashstyle") {
                        (f.getElementsByTagName("stroke")[0] || hb(i.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid";
                        this.dashstyle = d;
                        m = true
                    } else if (c === "fill")if (h === "SPAN")g.color = d; else {
                        f.filled = d !== jb ? true : false;
                        d = i.color(d, f, c);
                        c = "fillcolor"
                    } else if (c === "translateX" || c === "translateY" || c === "rotation" ||
                        c === "align") {
                        if (c === "align")c = "textAlign";
                        this[c] = d;
                        this.updateTransform();
                        m = true
                    } else if (c === "text") {
                        this.bBox = null;
                        f.innerHTML = d;
                        m = true
                    }
                    if (P && c === "visibility")for (e = P.length; e--;)P[e].style[c] = d;
                    if (!m)if (Mc)f[c] = d; else Ga(f, c, d)
                }
                return T
            }, clip: function (a) {
                var b = this, c = a.members;
                c.push(b);
                b.destroyClip = function () {
                    nc(c, b)
                };
                return b.css(a.getCSS(b.inverted))
            }, css: function (a) {
                var b = this.element;
                if (b = a && b.tagName === "SPAN" && a.width) {
                    delete a.width;
                    this.textWidth = b;
                    this.updateTransform()
                }
                this.styles = sa(this.styles,
                    a);
                Ja(this.element, a);
                return this
            }, safeRemoveChild: function (a) {
                a.parentNode && pc(a)
            }, destroy: function () {
                this.destroyClip && this.destroyClip();
                return Uc.prototype.destroy.apply(this)
            }, empty: function () {
                for (var a = this.element.childNodes, b = a.length, c; b--;) {
                    c = a[b];
                    c.parentNode.removeChild(c)
                }
            }, getBBox: function () {
                var a = this.element, b = this.bBox;
                if (!b) {
                    if (a.nodeName === "text")a.style.position = ic;
                    b = this.bBox = {x: a.offsetLeft, y: a.offsetTop, width: a.offsetWidth, height: a.offsetHeight}
                }
                return b
            }, on: function (a, b) {
                this.element["on" +
                a] = function () {
                    var c = db.event;
                    c.target = c.srcElement;
                    b(c)
                };
                return this
            }, updateTransform: function () {
                if (this.added) {
                    var a = this, b = a.element, c = a.translateX || 0, d = a.translateY || 0, e = a.x || 0, f = a.y || 0, g = a.textAlign || "left", h = {
                        left: 0,
                        center: 0.5,
                        right: 1
                    }[g], i = g && g !== "left";
                    if (c || d)a.css({marginLeft: c, marginTop: d});
                    a.inverted && u(b.childNodes, function (z) {
                        a.renderer.invertChild(z, b)
                    });
                    if (b.tagName === "SPAN") {
                        var j, m;
                        c = a.rotation;
                        var v;
                        j = 0;
                        d = 1;
                        var P = 0, T;
                        v = ja(a.textWidth);
                        var Y = a.xCorr || 0, H = a.yCorr || 0, U = [c, g, b.innerHTML,
                            a.textWidth].join(",");
                        if (U !== a.cTT) {
                            if (K(c)) {
                                j = c * ae;
                                d = rb(j);
                                P = Cb(j);
                                Ja(b, {filter: c ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", d, ", M12=", -P, ", M21=", P, ", M22=", d, ", sizingMethod='auto expand')"].join("") : jb})
                            }
                            j = b.offsetWidth;
                            m = b.offsetHeight;
                            if (j > v) {
                                Ja(b, {width: v + Ua, display: "block", whiteSpace: "normal"});
                                j = v
                            }
                            v = W((ja(b.style.fontSize) || 12) * 1.2);
                            Y = d < 0 && -j;
                            H = P < 0 && -m;
                            T = d * P < 0;
                            Y += P * v * (T ? 1 - h : h);
                            H -= d * v * (c ? T ? h : 1 - h : 1);
                            if (i) {
                                Y -= j * h * (d < 0 ? -1 : 1);
                                if (c)H -= m * h * (P < 0 ? -1 : 1);
                                Ja(b, {textAlign: g})
                            }
                            a.xCorr = Y;
                            a.yCorr =
                                H
                        }
                        Ja(b, {left: e + Y, top: f + H});
                        a.cTT = U
                    }
                } else this.alignOnAdd = true
            }, shadow: function (a, b) {
                var c = [], d, e = this.element, f = this.renderer, g, h = e.style, i, j = e.path;
                if (j && typeof j.value !== "string")j = "x";
                if (a) {
                    for (d = 1; d <= 3; d++) {
                        i = ['<shape isShadow="true" strokeweight="', 7 - 2 * d, '" filled="false" path="', j, '" coordsize="100,100" style="', e.style.cssText, '" />'];
                        g = hb(f.prepVML(i), null, {left: ja(h.left) + 1, top: ja(h.top) + 1});
                        i = ['<stroke color="black" opacity="', 0.05 * d, '"/>'];
                        hb(f.prepVML(i), null, null, g);
                        b ? b.element.appendChild(g) :
                            e.parentNode.insertBefore(g, e);
                        c.push(g)
                    }
                    this.shadows = c
                }
                return this
            }
        });
        ma = function () {
            this.init.apply(this, arguments)
        };
        ma.prototype = Ca(ed.prototype, {
            Element: Db, isIE8: yc.indexOf("MSIE 8.0") > -1, init: function (a, b, c) {
                var d;
                this.alignedObjects = [];
                d = this.createElement(Tb);
                a.appendChild(d.element);
                this.box = d.element;
                this.boxWrapper = d;
                this.setSize(b, c, false);
                if (!ua.namespaces.hcv) {
                    ua.namespaces.add("hcv", "urn:schemas-microsoft-com:vml");
                    ua.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                }
            },
            clipRect: function (a, b, c, d) {
                var e = this.createElement();
                return sa(e, {
                    members: [], left: a, top: b, width: c, height: d, getCSS: function (f) {
                        var g = this.top, h = this.left, i = h + this.width, j = g + this.height;
                        g = {clip: "rect(" + W(f ? h : g) + "px," + W(f ? j : i) + "px," + W(f ? i : j) + "px," + W(f ? g : h) + "px)"};
                        !f && Mc && sa(g, {width: i + Ua, height: j + Ua});
                        return g
                    }, updateClipping: function () {
                        u(e.members, function (f) {
                            f.css(e.getCSS(f.inverted))
                        })
                    }
                })
            }, color: function (a, b, c) {
                var d, e = /^rgba/;
                if (a && a.linearGradient) {
                    var f, g, h = a.linearGradient, i, j, m, v;
                    u(a.stops,
                        function (P, T) {
                            if (e.test(P[1])) {
                                d = bc(P[1]);
                                f = d.get("rgb");
                                g = d.get("a")
                            } else {
                                f = P[1];
                                g = 1
                            }
                            if (T) {
                                m = f;
                                v = g
                            } else {
                                i = f;
                                j = g
                            }
                        });
                    a = 90 - Fa.atan((h[3] - h[1]) / (h[2] - h[0])) * 180 / kc;
                    a = ["<", c, ' colors="0% ', i, ",100% ", m, '" angle="', a, '" opacity="', v, '" o:opacity2="', j, '" type="gradient" focus="100%" />'];
                    hb(this.prepVML(a), null, null, b)
                } else if (e.test(a) && b.tagName !== "IMG") {
                    d = bc(a);
                    a = ["<", c, ' opacity="', d.get("a"), '"/>'];
                    hb(this.prepVML(a), null, null, b);
                    return d.get("rgb")
                } else {
                    b = b.getElementsByTagName(c);
                    if (b.length)b[0].opacity =
                        1;
                    return a
                }
            }, prepVML: function (a) {
                var b = this.isIE8;
                a = a.join("");
                if (b) {
                    a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />');
                    a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')
                } else a = a.replace("<", "<hcv:");
                return a
            }, text: function (a, b, c) {
                var d = Xa.chart.style;
                return this.createElement("span").attr({text: a, x: W(b), y: W(c)}).css({
                    whiteSpace: "nowrap", fontFamily: d.fontFamily,
                    fontSize: d.fontSize
                })
            }, path: function (a) {
                return this.createElement("shape").attr({coordsize: "100 100", d: a})
            }, circle: function (a, b, c) {
                return this.symbol("circle").attr({x: a, y: b, r: c})
            }, g: function (a) {
                var b;
                if (a)b = {className: vc + a, "class": vc + a};
                return this.createElement(Tb).attr(b)
            }, image: function (a, b, c, d, e) {
                var f = this.createElement("img").attr({src: a});
                arguments.length > 1 && f.css({left: b, top: c, width: d, height: e});
                return f
            }, rect: function (a, b, c, d, e, f) {
                if (Nb(a)) {
                    b = a.y;
                    c = a.width;
                    d = a.height;
                    e = a.r;
                    f = a.strokeWidth;
                    a = a.x
                }
                var g = this.symbol("rect");
                g.r = e;
                return g.attr(g.crisp(f, a, b, Ia(c, 0), Ia(d, 0)))
            }, invertChild: function (a, b) {
                var c = b.style;
                Ja(a, {flip: "x", left: ja(c.width) - 10, top: ja(c.height) - 10, rotation: -90})
            }, symbols: {
                arc: function (a, b, c, d) {
                    var e = d.start, f = d.end, g = rb(e), h = Cb(e), i = rb(f), j = Cb(f);
                    d = d.innerR;
                    var m = 0.07 / c, v = d && 0.1 / d || 0;
                    if (f - e === 0)return ["x"]; else if (2 * kc - f + e < m)i = -m; else if (f - e < v)i = rb(e + v);
                    return ["wa", a - c, b - c, a + c, b + c, a + c * g, b + c * h, a + c * i, b + c * j, "at", a - d, b - d, a + d, b + d, a + d * i, b + d * j, a + d * g, b + d * h, "x", "e"]
                }, circle: function (a,
                                     b, c) {
                    return ["wa", a - c, b - c, a + c, b + c, a + c, b, a + c, b, "e"]
                }, rect: function (a, b, c, d) {
                    if (!K(d))return [];
                    var e = d.width;
                    d = d.height;
                    var f = a + e, g = b + d;
                    c = tb(c, e, d);
                    return [Za, a + c, b, Ka, f - c, b, "wa", f - 2 * c, b, f, b + 2 * c, f - c, b, f, b + c, Ka, f, g - c, "wa", f - 2 * c, g - 2 * c, f, g, f, g - c, f - c, g, Ka, a + c, g, "wa", a, g - 2 * c, a + 2 * c, g, a + c, g, a, g - c, Ka, a, b + c, "wa", a, b, a + 2 * c, b + 2 * c, a, b + c, a + c, b, "x", "e"]
                }
            }
        });
        fd = ma
    }
    Nd.prototype.callbacks = [];
    var Oc = function () {
    };
    Oc.prototype = {
        init: function (a, b) {
            var c = a.chart.counters, d;
            this.series = a;
            this.applyOptions(b);
            this.pointAttr =
            {};
            if (a.options.colorByPoint) {
                d = a.chart.options.colors;
                if (!this.options)this.options = {};
                this.color = this.options.color = this.color || d[c.color++];
                c.wrapColor(d.length)
            }
            a.chart.pointCount++;
            return this
        }, applyOptions: function (a) {
            var b = this.series;
            this.config = a;
            if (lc(a) || a === null)this.y = a; else if (Nb(a) && !lc(a.length)) {
                sa(this, a);
                this.options = a
            } else if (Sb(a[0])) {
                this.name = a[0];
                this.y = a[1]
            } else if (lc(a[0])) {
                this.x = a[0];
                this.y = a[1]
            }
            if (this.x === Wa)this.x = b.autoIncrement()
        }, destroy: function () {
            var a = this, b = a.series,
                c = b.chart.hoverPoints, d;
            b.chart.pointCount--;
            if (c) {
                a.setState();
                nc(c, a)
            }
            a === b.chart.hoverPoint && a.onMouseOut();
            pb(a);
            u(["graphic", "tracker", "group", "dataLabel", "connector", "shadowGroup"], function (e) {
                a[e] && a[e].destroy()
            });
            a.legendItem && a.series.chart.legend.destroyItem(a);
            for (d in a)a[d] = null
        }, getLabelConfig: function () {
            return {
                x: this.category,
                y: this.y,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        }, select: function (a, b) {
            var c = this, d = c.series.chart;
            a = A(a,
                !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {accumulate: b}, function () {
                c.selected = a;
                c.setState(a && "select");
                b || u(d.getSelectedPoints(), function (e) {
                    if (e.selected && e !== c) {
                        e.selected = false;
                        e.setState(ib);
                        e.firePointEvent("unselect")
                    }
                })
            })
        }, onMouseOver: function () {
            var a = this.series.chart, b = a.tooltip, c = a.hoverPoint;
            c && c !== this && c.onMouseOut();
            this.firePointEvent("mouseOver");
            b && !b.shared && b.refresh(this);
            this.setState(Bb);
            a.hoverPoint = this
        }, onMouseOut: function () {
            this.firePointEvent("mouseOut");
            this.setState();
            this.series.chart.hoverPoint = null
        }, tooltipFormatter: function (a) {
            var b = this.series;
            return ['<span style="color:' + b.color + '">', this.name || b.name, "</span>: ", !a ? "<b>x = " + (this.name || this.x) + ",</b> " : "", "<b>", !a ? "y = " : "", this.y, "</b>"].join("")
        }, update: function (a, b, c) {
            var d = this, e = d.series, f = d.graphic, g = e.chart;
            b = A(b, true);
            d.firePointEvent("update", {options: a}, function () {
                d.applyOptions(a);
                if (Nb(a)) {
                    e.getAttribs();
                    f && f.attr(d.pointAttr[e.state])
                }
                e.isDirty = true;
                b && g.redraw(c)
            })
        }, remove: function (a, b) {
            var c =
                this, d = c.series, e = d.chart, f = d.data;
            oc(b, e);
            a = A(a, true);
            c.firePointEvent("remove", null, function () {
                nc(f, c);
                c.destroy();
                d.isDirty = true;
                a && e.redraw()
            })
        }, firePointEvent: function (a, b, c) {
            var d = this, e = this.series.options;
            if (e.point.events[a] || d.options && d.options.events && d.options.events[a])this.importEvents();
            if (a === "click" && e.allowPointSelect)c = function (f) {
                d.select(null, f.ctrlKey || f.metaKey || f.shiftKey)
            };
            Pa(this, a, b, c)
        }, importEvents: function () {
            if (!this.hasImportedEvents) {
                var a = Ca(this.series.options.point,
                    this.options).events, b;
                this.events = a;
                for (b in a)Qa(this, b, a[b]);
                this.hasImportedEvents = true
            }
        }, setState: function (a) {
            var b = this.series, c = b.options.states, d = xb[b.type].marker && b.options.marker, e = d && !d.enabled, f = (d = d && d.states[a]) && d.enabled === false, g = b.stateMarkerGraphic, h = b.chart, i = this.pointAttr;
            a = a || ib;
            if (!(a === this.state || this.selected && a !== "select" || c[a] && c[a].enabled === false || a && (f || e && !d.enabled))) {
                if (this.graphic)this.graphic.attr(i[a]); else {
                    if (a) {
                        if (!g)b.stateMarkerGraphic = g = h.renderer.circle(0,
                            0, i[a].r).attr(i[a]).add(b.group);
                        g.translate(this.plotX, this.plotY)
                    }
                    if (g)g[a ? "show" : "hide"]()
                }
                this.state = a
            }
        }
    };
    var sb = function () {
    };
    sb.prototype = {
        isCartesian: true,
        type: "line",
        pointClass: Oc,
        pointAttrToOptions: {stroke: "lineColor", "stroke-width": "lineWidth", fill: "fillColor", r: "radius"},
        init: function (a, b) {
            var c, d;
            d = a.series.length;
            this.chart = a;
            b = this.setOptions(b);
            sa(this, {
                index: d,
                options: b,
                name: b.name || "Series " + (d + 1),
                state: ib,
                pointAttr: {},
                visible: b.visible !== false,
                selected: b.selected === true
            });
            d = b.events;
            for (c in d)Qa(this, c, d[c]);
            if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect)a.runTrackerClick = true;
            this.getColor();
            this.getSymbol();
            this.setData(b.data, false)
        },
        autoIncrement: function () {
            var a = this.options, b = this.xIncrement;
            b = A(b, a.pointStart, 0);
            this.pointInterval = A(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        },
        cleanData: function () {
            var a = this.chart, b = this.data, c, d, e = a.smallestInterval, f, g;
            Hd(b, function (h, i) {
                return h.x - i.x
            });
            if (this.options.connectNulls)for (g =
                                                   b.length - 1; g >= 0; g--)b[g].y === null && b[g - 1] && b[g + 1] && b.splice(g, 1);
            for (g = b.length - 1; g >= 0; g--)if (b[g - 1]) {
                f = b[g].x - b[g - 1].x;
                if (f > 0 && (d === Wa || f < d)) {
                    d = f;
                    c = g
                }
            }
            if (e === Wa || d < e)a.smallestInterval = d;
            this.closestPoints = c
        },
        getSegments: function () {
            var a = -1, b = [], c = this.data;
            u(c, function (d, e) {
                if (d.y === null) {
                    e > a + 1 && b.push(c.slice(a + 1, e));
                    a = e
                } else e === c.length - 1 && b.push(c.slice(a + 1, e + 1))
            });
            this.segments = b
        },
        setOptions: function (a) {
            var b = this.chart.options.plotOptions;
            return Ca(b[this.type], b.series, a)
        },
        getColor: function () {
            var a =
                this.chart.options.colors, b = this.chart.counters;
            this.color = this.options.color || a[b.color++] || "#0000ff";
            b.wrapColor(a.length)
        },
        getSymbol: function () {
            var a = this.chart.options.symbols, b = this.chart.counters;
            this.symbol = this.options.marker.symbol || a[b.symbol++];
            b.wrapSymbol(a.length)
        },
        addPoint: function (a, b, c, d) {
            var e = this.data, f = this.graph, g = this.area, h = this.chart;
            a = (new this.pointClass).init(this, a);
            oc(d, h);
            if (f && c)f.shift = c;
            if (g) {
                g.shift = c;
                g.isArea = true
            }
            b = A(b, true);
            e.push(a);
            c && e[0].remove(false);
            this.getAttribs();
            this.isDirty = true;
            b && h.redraw()
        },
        setData: function (a, b) {
            var c = this, d = c.data, e = c.initialColor, f = c.chart, g = d && d.length || 0;
            c.xIncrement = null;
            if (K(e))f.counters.color = e;
            for (a = tc(zc(a || []), function (h) {
                return (new c.pointClass).init(c, h)
            }); g--;)d[g].destroy();
            c.data = a;
            c.cleanData();
            c.getSegments();
            c.getAttribs();
            c.isDirty = true;
            f.isDirtyBox = true;
            A(b, true) && f.redraw(false)
        },
        remove: function (a, b) {
            var c = this, d = c.chart;
            a = A(a, true);
            if (!c.isRemoving) {
                c.isRemoving = true;
                Pa(c, "remove", null, function () {
                    c.destroy();
                    d.isDirtyLegend =
                        d.isDirtyBox = true;
                    a && d.redraw(b)
                })
            }
            c.isRemoving = false
        },
        translate: function () {
            for (var a = this.chart, b = this.options.stacking, c = this.xAxis.categories, d = this.yAxis, e = this.data, f = e.length; f--;) {
                var g = e[f], h = g.x, i = g.y, j = g.low, m = d.stacks[(i < 0 ? "-" : "") + this.stackKey];
                g.plotX = this.xAxis.translate(h);
                if (b && this.visible && m && m[h]) {
                    j = m[h];
                    h = j.total;
                    j.cum = j = j.cum - i;
                    i = j + i;
                    if (b === "percent") {
                        j = h ? j * 100 / h : 0;
                        i = h ? i * 100 / h : 0
                    }
                    g.percentage = h ? g.y * 100 / h : 0;
                    g.stackTotal = h
                }
                if (K(j))g.yBottom = d.translate(j, 0, 1, 0, 1);
                if (i !== null)g.plotY =
                    d.translate(i, 0, 1, 0, 1);
                g.clientX = a.inverted ? a.plotHeight - g.plotX : g.plotX;
                g.category = c && c[g.x] !== Wa ? c[g.x] : g.x
            }
        },
        setTooltipPoints: function (a) {
            var b = this.chart, c = b.inverted, d = [], e = W((c ? b.plotTop : b.plotLeft) + b.plotSizeX), f, g, h = [];
            if (a)this.tooltipPoints = null;
            u(this.segments, function (i) {
                d = d.concat(i)
            });
            if (this.xAxis && this.xAxis.reversed)d = d.reverse();
            u(d, function (i, j) {
                f = d[j - 1] ? d[j - 1]._high + 1 : 0;
                for (g = i._high = d[j + 1] ? lb((i.plotX + (d[j + 1] ? d[j + 1].plotX : e)) / 2) : e; f <= g;)h[c ? e - f++ : f++] = i
            });
            this.tooltipPoints = h
        },
        onMouseOver: function () {
            var a = this.chart, b = a.hoverSeries;
            if (!(!Kb && a.mouseIsDown)) {
                b && b !== this && b.onMouseOut();
                this.options.events.mouseOver && Pa(this, "mouseOver");
                this.tracker && this.tracker.toFront();
                this.setState(Bb);
                a.hoverSeries = this
            }
        },
        onMouseOut: function () {
            var a = this.options, b = this.chart, c = b.tooltip, d = b.hoverPoint;
            d && d.onMouseOut();
            this && a.events.mouseOut && Pa(this, "mouseOut");
            c && !a.stickyTracking && c.hide();
            this.setState();
            b.hoverSeries = null
        },
        animate: function (a) {
            var b = this.chart, c = this.clipRect,
                d = this.options.animation;
            if (d && !Nb(d))d = {};
            if (a) {
                if (!c.isAnimating) {
                    c.attr("width", 0);
                    c.isAnimating = true
                }
            } else {
                c.animate({width: b.plotSizeX}, d);
                this.animate = null
            }
        },
        drawPoints: function () {
            var a, b = this.data, c = this.chart, d, e, f, g, h, i;
            if (this.options.marker.enabled)for (f = b.length; f--;) {
                g = b[f];
                d = g.plotX;
                e = g.plotY;
                i = g.graphic;
                if (e !== Wa && !isNaN(e)) {
                    a = g.pointAttr[g.selected ? "select" : ib];
                    h = a.r;
                    if (i)i.animate({
                        x: d,
                        y: e,
                        r: h
                    }); else g.graphic = c.renderer.symbol(A(g.marker && g.marker.symbol, this.symbol), d, e, h).attr(a).add(this.group)
                }
            }
        },
        convertAttribs: function (a, b, c, d) {
            var e = this.pointAttrToOptions, f, g, h = {};
            a = a || {};
            b = b || {};
            c = c || {};
            d = d || {};
            for (f in e) {
                g = e[f];
                h[f] = A(a[g], b[f], c[f], d[f])
            }
            return h
        },
        getAttribs: function () {
            var a = this, b = xb[a.type].marker ? a.options.marker : a.options, c = b.states, d = c[Bb], e, f = a.color, g = {
                stroke: f,
                fill: f
            }, h = a.data, i = [], j, m = a.pointAttrToOptions, v;
            if (a.options.marker) {
                d.radius = d.radius || b.radius + 2;
                d.lineWidth = d.lineWidth || b.lineWidth + 1
            } else d.color = d.color || bc(d.color || f).brighten(d.brightness).get();
            i[ib] = a.convertAttribs(b,
                g);
            u([Bb, "select"], function (P) {
                i[P] = a.convertAttribs(c[P], i[ib])
            });
            a.pointAttr = i;
            for (f = h.length; f--;) {
                g = h[f];
                if ((b = g.options && g.options.marker || g.options) && b.enabled === false)b.radius = 0;
                e = false;
                if (g.options)for (v in m)if (K(b[m[v]]))e = true;
                if (e) {
                    j = [];
                    c = b.states || {};
                    e = c[Bb] = c[Bb] || {};
                    if (!a.options.marker)e.color = bc(e.color || g.options.color).brighten(e.brightness || d.brightness).get();
                    j[ib] = a.convertAttribs(b, i[ib]);
                    j[Bb] = a.convertAttribs(c[Bb], i[Bb], j[ib]);
                    j.select = a.convertAttribs(c.select, i.select,
                        j[ib])
                } else j = i;
                g.pointAttr = j
            }
        },
        destroy: function () {
            var a = this, b = a.chart, c = a.clipRect, d = /\/5[0-9\.]+ (Safari|Mobile)\//.test(yc), e, f;
            Pa(a, "destroy");
            pb(a);
            a.legendItem && a.chart.legend.destroyItem(a);
            u(a.data, function (g) {
                g.destroy()
            });
            if (c && c !== b.clipRect)a.clipRect = c.destroy();
            u(["area", "graph", "dataLabelsGroup", "group", "tracker"], function (g) {
                if (a[g]) {
                    e = d && g === "group" ? "hide" : "destroy";
                    a[g][e]()
                }
            });
            if (b.hoverSeries === a)b.hoverSeries = null;
            nc(b.series, a);
            for (f in a)delete a[f]
        },
        drawDataLabels: function () {
            if (this.options.dataLabels.enabled) {
                var a,
                    b, c = this.data, d = this.options, e = d.dataLabels, f, g = this.dataLabelsGroup, h = this.chart, i = h.renderer, j = h.inverted, m = this.type, v;
                v = d.stacking;
                var P = m === "column" || m === "bar", T = e.verticalAlign === null, Y = e.y === null;
                if (P)if (v) {
                    if (T)e = Ca(e, {verticalAlign: "middle"});
                    if (Y)e = Ca(e, {y: {top: 14, middle: 4, bottom: -6}[e.verticalAlign]})
                } else if (T)e = Ca(e, {verticalAlign: "top"});
                if (g)g.translate(h.plotLeft, h.plotTop); else g = this.dataLabelsGroup = i.g("data-labels").attr({
                    visibility: this.visible ? Ab : ob,
                    zIndex: 6
                }).translate(h.plotLeft,
                    h.plotTop).add();
                v = e.color;
                if (v === "auto")v = null;
                e.style.color = A(v, this.color, "black");
                u(c, function (H) {
                    var U = H.barX, z = U && U + H.barW / 2 || H.plotX || -999, M = A(H.plotY, -999), y = H.dataLabel, C = e.align, Z = Y ? H.y >= 0 ? -6 : 12 : e.y;
                    f = e.formatter.call(H.getLabelConfig());
                    a = (j ? h.plotWidth - M : z) + e.x;
                    b = (j ? h.plotHeight - z : M) + Z;
                    if (m === "column")a += {left: -1, right: 1}[C] * H.barW / 2 || 0;
                    if (j && H.y < 0) {
                        C = "right";
                        a -= 10
                    }
                    if (y) {
                        if (j && !e.y)b = b + ja(y.styles.lineHeight) * 0.9 - y.getBBox().height / 2;
                        y.attr({text: f}).animate({x: a, y: b})
                    } else if (K(f)) {
                        y =
                            H.dataLabel = i.text(f, a, b).attr({align: C, rotation: e.rotation, zIndex: 1}).css(e.style).add(g);
                        j && !e.y && y.attr({y: b + ja(y.styles.lineHeight) * 0.9 - y.getBBox().height / 2})
                    }
                    if (P && d.stacking && y) {
                        z = H.barY;
                        M = H.barW;
                        H = H.barH;
                        y.align(e, null, {
                            x: j ? h.plotWidth - z - H : U,
                            y: j ? h.plotHeight - U - M : z,
                            width: j ? H : M,
                            height: j ? M : H
                        })
                    }
                })
            }
        },
        drawGraph: function () {
            var a = this, b = a.options, c = a.graph, d = [], e, f = a.area, g = a.group, h = b.lineColor || a.color, i = b.lineWidth, j = b.dashStyle, m, v = a.chart.renderer, P = a.yAxis.getThreshold(b.threshold || 0), T = /^area/.test(a.type),
                Y = [], H = [];
            u(a.segments, function (U) {
                m = [];
                u(U, function (C, Z) {
                    if (a.getPointSpline)m.push.apply(m, a.getPointSpline(U, C, Z)); else {
                        m.push(Z ? Ka : Za);
                        Z && b.step && m.push(C.plotX, U[Z - 1].plotY);
                        m.push(C.plotX, C.plotY)
                    }
                });
                if (U.length > 1)d = d.concat(m); else Y.push(U[0]);
                if (T) {
                    var z = [], M, y = m.length;
                    for (M = 0; M < y; M++)z.push(m[M]);
                    y === 3 && z.push(Ka, m[1], m[2]);
                    if (b.stacking && a.type !== "areaspline")for (M = U.length - 1; M >= 0; M--)z.push(U[M].plotX, U[M].yBottom); else z.push(Ka, U[U.length - 1].plotX, P, Ka, U[0].plotX, P);
                    H = H.concat(z)
                }
            });
            a.graphPath = d;
            a.singlePoints = Y;
            if (T) {
                e = A(b.fillColor, bc(a.color).setOpacity(b.fillOpacity || 0.75).get());
                if (f)f.animate({d: H}); else a.area = a.chart.renderer.path(H).attr({fill: e}).add(g)
            }
            if (c) {
                Hc(c);
                c.animate({d: d})
            } else if (i) {
                c = {stroke: h, "stroke-width": i};
                if (j)c.dashstyle = j;
                a.graph = v.path(d).attr(c).add(g).shadow(b.shadow)
            }
        },
        render: function () {
            var a = this, b = a.chart, c, d, e = a.options, f = e.animation, g = f && a.animate;
            f = g ? f && f.duration || 500 : 0;
            var h = a.clipRect, i = b.renderer;
            if (!h) {
                h = a.clipRect = !b.hasRendered &&
                b.clipRect ? b.clipRect : i.clipRect(0, 0, b.plotSizeX, b.plotSizeY);
                if (!b.clipRect)b.clipRect = h
            }
            if (!a.group) {
                c = a.group = i.g("series");
                if (b.inverted) {
                    d = function () {
                        c.attr({width: b.plotWidth, height: b.plotHeight}).invert()
                    };
                    d();
                    Qa(b, "resize", d);
                    Qa(a, "destroy", function () {
                        pb(b, "resize", d)
                    })
                }
                c.clip(a.clipRect).attr({
                    visibility: a.visible ? Ab : ob,
                    zIndex: e.zIndex
                }).translate(b.plotLeft, b.plotTop).add(b.seriesGroup)
            }
            a.drawDataLabels();
            g && a.animate(true);
            a.drawGraph && a.drawGraph();
            a.drawPoints();
            a.options.enableMouseTracking !==
            false && a.drawTracker();
            g && a.animate();
            setTimeout(function () {
                h.isAnimating = false;
                if ((c = a.group) && h !== b.clipRect && h.renderer) {
                    c.clip(a.clipRect = b.clipRect);
                    h.destroy()
                }
            }, f);
            a.isDirty = false
        },
        redraw: function () {
            var a = this.chart, b = this.group;
            if (b) {
                a.inverted && b.attr({width: a.plotWidth, height: a.plotHeight});
                b.animate({translateX: a.plotLeft, translateY: a.plotTop})
            }
            this.translate();
            this.setTooltipPoints(true);
            this.render()
        },
        setState: function (a) {
            var b = this.options, c = this.graph, d = b.states;
            b = b.lineWidth;
            a = a ||
            ib;
            if (this.state !== a) {
                this.state = a;
                if (!(d[a] && d[a].enabled === false)) {
                    if (a)b = d[a].lineWidth || b + 1;
                    if (c && !c.dashstyle)c.attr({"stroke-width": b}, a ? 0 : 500)
                }
            }
        },
        setVisible: function (a, b) {
            var c = this.chart, d = this.legendItem, e = this.group, f = this.tracker, g = this.dataLabelsGroup, h, i = this.data, j = c.options.chart.ignoreHiddenSeries;
            h = this.visible;
            h = (this.visible = a = a === Wa ? !h : a) ? "show" : "hide";
            e && e[h]();
            if (f)f[h](); else for (e = i.length; e--;) {
                f = i[e];
                f.tracker && f.tracker[h]()
            }
            g && g[h]();
            d && c.legend.colorizeItem(this, a);
            this.isDirty =
                true;
            this.options.stacking && u(c.series, function (m) {
                if (m.options.stacking && m.visible)m.isDirty = true
            });
            if (j)c.isDirtyBox = true;
            b !== false && c.redraw();
            Pa(this, h)
        },
        show: function () {
            this.setVisible(true)
        },
        hide: function () {
            this.setVisible(false)
        },
        select: function (a) {
            this.selected = a = a === Wa ? !this.selected : a;
            if (this.checkbox)this.checkbox.checked = a;
            Pa(this, a ? "select" : "unselect")
        },
        drawTracker: function () {
            var a = this, b = a.options, c = [].concat(a.graphPath), d = c.length, e = a.chart, f = e.options.tooltip.snap, g = a.tracker, h = b.cursor;
            h = h && {cursor: h};
            var i = a.singlePoints, j;
            if (d)for (j = d + 1; j--;) {
                c[j] === Za && c.splice(j + 1, 0, c[j + 1] - f, c[j + 2], Ka);
                if (j && c[j] === Za || j === d)c.splice(j, 0, Ka, c[j - 2] + f, c[j - 1])
            }
            for (j = 0; j < i.length; j++) {
                d = i[j];
                c.push(Za, d.plotX - f, d.plotY, Ka, d.plotX + f, d.plotY)
            }
            if (g)g.attr({d: c}); else a.tracker = e.renderer.path(c).attr({
                isTracker: true,
                stroke: ce,
                fill: jb,
                "stroke-width": b.lineWidth + 2 * f,
                visibility: a.visible ? Ab : ob,
                zIndex: b.zIndex || 1
            }).on(Kb ? "touchstart" : "mouseover", function () {
                e.hoverSeries !== a && a.onMouseOver()
            }).on("mouseout",
                function () {
                    b.stickyTracking || a.onMouseOut()
                }).css(h).add(e.trackerGroup)
        }
    };
    ma = yb(sb);
    wb.line = ma;
    ma = yb(sb, {type: "area"});
    wb.area = ma;
    ma = yb(sb, {
        type: "spline", getPointSpline: function (a, b, c) {
            var d = b.plotX, e = b.plotY, f = a[c - 1], g = a[c + 1], h, i, j, m;
            if (c && c < a.length - 1) {
                a = f.plotY;
                j = g.plotX;
                g = g.plotY;
                var v;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                j = (1.5 * d + j) / 2.5;
                m = (1.5 * e + g) / 2.5;
                v = (m - i) * (j - d) / (j - h) + e - m;
                i += v;
                m += v;
                if (i > a && i > e) {
                    i = Ia(a, e);
                    m = 2 * e - i
                } else if (i < a && i < e) {
                    i = tb(a, e);
                    m = 2 * e - i
                }
                if (m > g && m > e) {
                    m = Ia(g, e);
                    i = 2 * e - m
                } else if (m <
                    g && m < e) {
                    m = tb(g, e);
                    i = 2 * e - m
                }
                b.rightContX = j;
                b.rightContY = m
            }
            if (c) {
                b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e];
                f.rightContX = f.rightContY = null
            } else b = [Za, d, e];
            return b
        }
    });
    wb.spline = ma;
    ma = yb(ma, {type: "areaspline"});
    wb.areaspline = ma;
    var hd = yb(sb, {
        type: "column",
        pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color", r: "borderRadius"},
        init: function () {
            sb.prototype.init.apply(this, arguments);
            var a = this, b = a.chart;
            b.hasColumn = true;
            b.hasRendered && u(b.series, function (c) {
                if (c.type ===
                    a.type)c.isDirty = true
            })
        },
        translate: function () {
            var a = this, b = a.chart, c = a.options, d = c.stacking, e = c.borderWidth, f = 0, g = a.xAxis.reversed, h = a.xAxis.categories, i = {}, j, m;
            sb.prototype.translate.apply(a);
            u(b.series, function (C) {
                if (C.type === a.type && C.visible) {
                    if (C.options.stacking) {
                        j = C.stackKey;
                        if (i[j] === Wa)i[j] = f++;
                        m = i[j]
                    } else m = f++;
                    C.columnIndex = m
                }
            });
            var v = a.data, P = a.closestPoints;
            h = bb(v[1] ? v[P].plotX - v[P - 1].plotX : b.plotSizeX / (h && h.length || 1));
            P = h * c.groupPadding;
            var T = (h - 2 * P) / f, Y = c.pointWidth, H = K(Y) ? (T - Y) / 2 :
            T * c.pointPadding, U = Ia(A(Y, T - 2 * H), 1), z = H + (P + ((g ? f - a.columnIndex : a.columnIndex) || 0) * T - h / 2) * (g ? -1 : 1), M = a.yAxis.getThreshold(c.threshold || 0), y = A(c.minPointLength, 5);
            u(v, function (C) {
                var Z = C.plotY, Sa = C.yBottom || M, Na = C.plotX + z, Ea = md(tb(Z, Sa)), gb = md(Ia(Z, Sa) - Ea), Lb = a.yAxis.stacks[(C.y < 0 ? "-" : "") + a.stackKey], Rb;
                d && a.visible && Lb && Lb[C.x] && Lb[C.x].setOffset(z, U);
                if (bb(gb) < y) {
                    if (y) {
                        gb = y;
                        Ea = bb(Ea - M) > y ? Sa - y : M - (Z <= M ? y : 0)
                    }
                    Rb = Ea - 3
                }
                sa(C, {barX: Na, barY: Ea, barW: U, barH: gb});
                C.shapeType = "rect";
                Z = sa(b.renderer.Element.prototype.crisp.apply({},
                    [e, Na, Ea, U, gb]), {r: c.borderRadius});
                if (e % 2) {
                    Z.y -= 1;
                    Z.height += 1
                }
                C.shapeArgs = Z;
                C.trackerArgs = K(Rb) && Ca(C.shapeArgs, {height: Ia(6, gb + 3), y: Rb})
            })
        },
        getSymbol: function () {
        },
        drawGraph: function () {
        },
        drawPoints: function () {
            var a = this, b = a.options, c = a.chart.renderer, d, e;
            u(a.data, function (f) {
                var g = f.plotY;
                if (g !== Wa && !isNaN(g) && f.y !== null) {
                    d = f.graphic;
                    e = f.shapeArgs;
                    if (d) {
                        Hc(d);
                        d.animate(e)
                    } else f.graphic = c[f.shapeType](e).attr(f.pointAttr[f.selected ? "select" : ib]).add(a.group).shadow(b.shadow)
                }
            })
        },
        drawTracker: function () {
            var a =
                this, b = a.chart, c = b.renderer, d, e, f = +new Date, g = a.options, h = g.cursor, i = h && {cursor: h}, j;
            u(a.data, function (m) {
                e = m.tracker;
                d = m.trackerArgs || m.shapeArgs;
                delete d.strokeWidth;
                if (m.y !== null)if (e)e.attr(d); else m.tracker = c[m.shapeType](d).attr({
                    isTracker: f,
                    fill: ce,
                    visibility: a.visible ? Ab : ob,
                    zIndex: g.zIndex || 1
                }).on(Kb ? "touchstart" : "mouseover", function (v) {
                    j = v.relatedTarget || v.fromElement;
                    b.hoverSeries !== a && Ga(j, "isTracker") !== f && a.onMouseOver();
                    m.onMouseOver()
                }).on("mouseout", function (v) {
                    if (!g.stickyTracking) {
                        j =
                            v.relatedTarget || v.toElement;
                        Ga(j, "isTracker") !== f && a.onMouseOut()
                    }
                }).css(i).add(m.group || b.trackerGroup)
            })
        },
        animate: function (a) {
            var b = this, c = b.data;
            if (!a) {
                u(c, function (d) {
                    var e = d.graphic;
                    d = d.shapeArgs;
                    if (e) {
                        e.attr({height: 0, y: b.yAxis.translate(0, 0, 1)});
                        e.animate({height: d.height, y: d.y}, b.options.animation)
                    }
                });
                b.animate = null
            }
        },
        remove: function () {
            var a = this, b = a.chart;
            b.hasRendered && u(b.series, function (c) {
                if (c.type === a.type)c.isDirty = true
            });
            sb.prototype.remove.apply(a, arguments)
        }
    });
    wb.column = hd;
    ma = yb(hd,
        {
            type: "bar", init: function (a) {
            a.inverted = this.inverted = true;
            hd.prototype.init.apply(this, arguments)
        }
        });
    wb.bar = ma;
    ma = yb(sb, {
        type: "scatter", translate: function () {
            var a = this;
            sb.prototype.translate.apply(a);
            u(a.data, function (b) {
                b.shapeType = "circle";
                b.shapeArgs = {x: b.plotX, y: b.plotY, r: a.chart.options.tooltip.snap}
            })
        }, drawTracker: function () {
            var a = this, b = a.options.cursor, c = b && {cursor: b}, d;
            u(a.data, function (e) {
                (d = e.graphic) && d.attr({isTracker: true}).on("mouseover", function () {
                    a.onMouseOver();
                    e.onMouseOver()
                }).on("mouseout",
                    function () {
                        a.options.stickyTracking || a.onMouseOut()
                    }).css(c)
            })
        }, cleanData: function () {
        }
    });
    wb.scatter = ma;
    ma = yb(Oc, {
        init: function () {
            Oc.prototype.init.apply(this, arguments);
            var a = this, b;
            sa(a, {visible: a.visible !== false, name: A(a.name, "Slice")});
            b = function () {
                a.slice()
            };
            Qa(a, "select", b);
            Qa(a, "unselect", b);
            return a
        }, setVisible: function (a) {
            var b = this.series.chart, c = this.tracker, d = this.dataLabel, e = this.connector, f = this.shadowGroup, g;
            g = (this.visible = a = a === Wa ? !this.visible : a) ? "show" : "hide";
            this.group[g]();
            c &&
            c[g]();
            d && d[g]();
            e && e[g]();
            f && f[g]();
            this.legendItem && b.legend.colorizeItem(this, a)
        }, slice: function (a, b, c) {
            var d = this.series.chart, e = this.slicedTranslation;
            oc(c, d);
            A(b, true);
            a = this.sliced = K(a) ? a : !this.sliced;
            a = {translateX: a ? e[0] : d.plotLeft, translateY: a ? e[1] : d.plotTop};
            this.group.animate(a);
            this.shadowGroup && this.shadowGroup.animate(a)
        }
    });
    ma = yb(sb, {
        type: "pie",
        isCartesian: false,
        pointClass: ma,
        pointAttrToOptions: {stroke: "borderColor", "stroke-width": "borderWidth", fill: "color"},
        getColor: function () {
            this.initialColor =
                this.chart.counters.color
        },
        animate: function () {
            var a = this;
            u(a.data, function (b) {
                var c = b.graphic;
                b = b.shapeArgs;
                var d = -kc / 2;
                if (c) {
                    c.attr({r: 0, start: d, end: d});
                    c.animate({r: b.r, start: b.start, end: b.end}, a.options.animation)
                }
            });
            a.animate = null
        },
        translate: function () {
            var a = 0, b = -0.25, c = this.options, d = c.slicedOffset, e = d + c.borderWidth, f = c.center.concat([c.size, c.innerSize || 0]), g = this.chart, h = g.plotWidth, i = g.plotHeight, j, m, v, P = this.data, T = 2 * kc, Y, H = tb(h, i), U, z, M, y = c.dataLabels.distance;
            f = tc(f, function (C, Z) {
                return (U =
                    /%$/.test(C)) ? [h, i, H, H][Z] * ja(C) / 100 : C
            });
            this.getX = function (C, Z) {
                v = Fa.asin((C - f[1]) / (f[2] / 2 + y));
                return f[0] + (Z ? -1 : 1) * rb(v) * (f[2] / 2 + y)
            };
            this.center = f;
            u(P, function (C) {
                a += C.y
            });
            u(P, function (C) {
                Y = a ? C.y / a : 0;
                j = W(b * T * 1E3) / 1E3;
                b += Y;
                m = W(b * T * 1E3) / 1E3;
                C.shapeType = "arc";
                C.shapeArgs = {x: f[0], y: f[1], r: f[2] / 2, innerR: f[3] / 2, start: j, end: m};
                v = (m + j) / 2;
                C.slicedTranslation = tc([rb(v) * d + g.plotLeft, Cb(v) * d + g.plotTop], W);
                z = rb(v) * f[2] / 2;
                M = Cb(v) * f[2] / 2;
                C.tooltipPos = [f[0] + z * 0.7, f[1] + M * 0.7];
                C.labelPos = [f[0] + z + rb(v) * y, f[1] + M + Cb(v) *
                y, f[0] + z + rb(v) * e, f[1] + M + Cb(v) * e, f[0] + z, f[1] + M, y < 0 ? "center" : v < T / 4 ? "left" : "right", v];
                C.percentage = Y * 100;
                C.total = a
            });
            this.setTooltipPoints()
        },
        render: function () {
            this.drawPoints();
            this.options.enableMouseTracking !== false && this.drawTracker();
            this.drawDataLabels();
            this.options.animation && this.animate && this.animate();
            this.isDirty = false
        },
        drawPoints: function () {
            var a = this.chart, b = a.renderer, c, d, e, f = this.options.shadow, g, h;
            u(this.data, function (i) {
                d = i.graphic;
                h = i.shapeArgs;
                e = i.group;
                g = i.shadowGroup;
                if (f && !g)g =
                    i.shadowGroup = b.g("shadow").attr({zIndex: 4}).add();
                if (!e)e = i.group = b.g("point").attr({zIndex: 5}).add();
                c = i.sliced ? i.slicedTranslation : [a.plotLeft, a.plotTop];
                e.translate(c[0], c[1]);
                g && g.translate(c[0], c[1]);
                if (d)d.animate(h); else i.graphic = b.arc(h).attr(sa(i.pointAttr[ib], {"stroke-linejoin": "round"})).add(i.group).shadow(f, g);
                i.visible === false && i.setVisible(false)
            })
        },
        drawDataLabels: function () {
            var a = this.data, b, c = this.chart, d = this.options.dataLabels, e = A(d.connectorPadding, 10), f = A(d.connectorWidth, 1),
                g, h, i = A(d.softConnector, true), j = d.distance, m = this.center, v = m[2] / 2;
            m = m[1];
            var P = j > 0, T = [[], []], Y, H, U, z, M = 2, y;
            if (d.enabled) {
                sb.prototype.drawDataLabels.apply(this);
                u(a, function (gb) {
                    if (gb.dataLabel)T[gb.labelPos[7] < kc / 2 ? 0 : 1].push(gb)
                });
                T[1].reverse();
                z = function (gb, Lb) {
                    return Lb.y - gb.y
                };
                for (a = T[0][0] && T[0][0].dataLabel && ja(T[0][0].dataLabel.styles.lineHeight); M--;) {
                    var C = [], Z = [], Sa = T[M], Na = Sa.length, Ea;
                    for (y = m - v - j; y <= m + v + j; y += a)C.push(y);
                    U = C.length;
                    if (Na > U) {
                        h = [].concat(Sa);
                        h.sort(z);
                        for (y = Na; y--;)h[y].rank =
                            y;
                        for (y = Na; y--;)Sa[y].rank >= U && Sa.splice(y, 1);
                        Na = Sa.length
                    }
                    for (y = 0; y < Na; y++) {
                        b = Sa[y];
                        h = b.labelPos;
                        b = 9999;
                        for (H = 0; H < U; H++) {
                            g = bb(C[H] - h[1]);
                            if (g < b) {
                                b = g;
                                Ea = H
                            }
                        }
                        if (Ea < y && C[y] !== null)Ea = y; else {
                            if (U < Na - y + Ea && C[y] !== null)Ea = U - Na + y;
                            for (; C[Ea] === null;)Ea++
                        }
                        Z.push({i: Ea, y: C[Ea]});
                        C[Ea] = null
                    }
                    Z.sort(z);
                    for (y = 0; y < Na; y++) {
                        b = Sa[y];
                        h = b.labelPos;
                        g = b.dataLabel;
                        H = Z.pop();
                        Y = h[1];
                        U = b.visible === false ? ob : Ab;
                        Ea = H.i;
                        H = H.y;
                        if (Y > H && C[Ea + 1] !== null || Y < H && C[Ea - 1] !== null)H = Y;
                        Y = this.getX(Ea === 0 || Ea === C.length - 1 ? Y : H, M);
                        g.attr({
                            visibility: U,
                            align: h[6]
                        })[g.moved ? "animate" : "attr"]({x: Y + d.x + ({left: e, right: -e}[h[6]] || 0), y: H + d.y});
                        g.moved = true;
                        if (P && f) {
                            g = b.connector;
                            h = i ? [Za, Y + (h[6] === "left" ? 5 : -5), H, "C", Y, H, 2 * h[2] - h[4], 2 * h[3] - h[5], h[2], h[3], Ka, h[4], h[5]] : [Za, Y + (h[6] === "left" ? 5 : -5), H, Ka, h[2], h[3], Ka, h[4], h[5]];
                            if (g) {
                                g.animate({d: h});
                                g.attr("visibility", U)
                            } else b.connector = g = this.chart.renderer.path(h).attr({
                                "stroke-width": f,
                                stroke: d.connectorColor || b.color || "#606060",
                                visibility: U,
                                zIndex: 3
                            }).translate(c.plotLeft, c.plotTop).add()
                        }
                    }
                }
            }
        },
        drawTracker: hd.prototype.drawTracker,
        getSymbol: function () {
        }
    });
    wb.pie = ma;
    db.Highcharts = {
        Chart: Nd,
        dateFormat: Zc,
        pathAnim: Nc,
        getOptions: function () {
            return Xa
        },
        hasRtlBug: me,
        numberFormat: Ed,
        Point: Oc,
        Color: bc,
        Renderer: fd,
        seriesTypes: wb,
        setOptions: function (a) {
            Xa = Ca(Xa, a);
            Id();
            return Xa
        },
        Series: sb,
        addEvent: Qa,
        removeEvent: pb,
        createElement: hb,
        discardElement: pc,
        css: Ja,
        each: u,
        extend: sa,
        map: tc,
        merge: Ca,
        pick: A,
        extendClass: yb,
        product: "Highcharts",
        version: "2.1.9"
    }
})();
