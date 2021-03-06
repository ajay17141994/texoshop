! function() {
    "use strict";
    var e = function(e) {
            e.palette.draw(e.type, e.color.r, e.color.g, e.color.b), e.slider.draw(e.type, e.color.r, e.color.g, e.color.b), e.controls.setColor(e.color), e.button.setColor(e.color)
        },
        r = function(e) {
            e.slider.setHandleByColor(e.type, e.color.r, e.color.g, e.color.b), e.palette.setHandleByColor(e.type, e.color.r, e.color.g, e.color.b)
        },
        t = function(t) {
            t.$root.on("jcp-type-changed", function(o, a) {
                t.type = a, e(t), r(t)
            }), t.$root.on("jcp-color-changed", function(o, a, n, l, i) {
                t.color = {
                    r: a,
                    g: n,
                    b: l
                }, e(t), "controls" === i && r(t)
            })
        },
        o = function(o, a) {
            this.$root = a, this.palette = null, this.slider = null, this.control = null, this.button = null, this.type = "h", this.color = {
                r: 255,
                g: 255,
                b: 255
            }, this.options = jQuery.extend(!0, {}, o), jQuery.fn.jColorPicker.helpers.isCanvasSupported() && (this.$root.addClass("jcolor-picker"), this.$root.append('<div data-type="holder"></div>'), this.palette = new jQuery.fn.jColorPicker.palette(this.$root), this.slider = new jQuery.fn.jColorPicker.slider(this.$root), this.controls = new jQuery.fn.jColorPicker.controls(this.$root), this.button = new jQuery.fn.jColorPicker.button(this.$root), t(this), e(this), r(this))
        };
    jQuery.fn.jColorPicker = function(e) {
        return this.each(function() {
            var r, t = jQuery(this);
            r = new o(e, t), t.data("jColorPicker", r)
        })
    }
}(),
function(e) {
    "use strict";
    var r = function(e, r) {
            var t = Math.round(256 - (r.r + r.g + r.b) / 3);
            t >= 108 && t <= 148 && (t = 0), e.$btn.css({
                "background-color": "rgb(" + Math.round(r.r) + ", " + Math.round(r.g) + ", " + Math.round(r.b) + ")"
            }), e.$btnArr.css({
                "border-top-color": "rgb(" + t + ", " + t + ", " + t + ")"
            })
        },
        t = function(r) {
            r.$btn.on("click", function(e) {
                e.stopPropagation(), r.$holder.toggleClass("jcp-visible");
                var t = r.$holder.get(0).getBoundingClientRect();
                t.left + t.width > window.innerWidth ? r.$holder.addClass("jcp-right") : r.$holder.removeClass("jcp-right")
            }), r.$holder.on("click", function(e) {
                e.stopPropagation()
            }), e(document).on("click", function() {
                r.$holder.removeClass("jcp-visible")
            })
        };
    jQuery.fn.jColorPicker.button = function(e) {
        this.$root = e, this.$holder = this.$root.find('[data-type="holder"]'), this.$root.prepend('<div data-type="btn"><div data-type="arrow"></div></div>'), this.$btn = this.$root.find('[data-type="btn"]'), this.$btnArr = this.$btn.find('[data-type="arrow"]'), this.$holder.css({
            top: this.$btn.height()
        }), t(this)
    }, jQuery.fn.jColorPicker.button.prototype.setColor = function(e) {
        r(this, e)
    }
}(jQuery),
function(e) {
    "use strict";
    var r = function(r, t) {
            var o = jQuery.fn.jColorPicker.helpers.rgbToHex(t.r, t.g, t.b),
                a = jQuery.fn.jColorPicker.helpers.RGBtoHSV(t.r, t.g, t.b),
                n = e(document.activeElement).attr("data-type");
            r.$color.css({
                "background-color": "#" + o
            }), "color-tb" !== n && r.$colorTB.val(o), "input-h" !== n && r.$h.val(Math.round(360 * a.h)), "input-s" !== n && r.$s.val(Math.round(100 * a.s)), "input-v" !== n && r.$v.val(Math.round(100 * a.v)), "input-r" !== n && r.$r.val(t.r), "input-g" !== n && r.$g.val(t.g), "input-b" !== n && r.$b.val(t.b), r.$rgbLabel.text("rgb(" + Math.round(t.r) + ", " + Math.round(t.g) + ", " + Math.round(t.b) + ")")
        },
        t = function(e, r, t) {
            var o = !0;
            switch (r) {
                case "h":
                    t < 0 && (t = 0, o = !1), t > 359 && (t = 0, o = !1);
                    break;
                case "s":
                case "v":
                    t < 0 && (t = 0, o = !1), t > 100 && (t = 100, o = !1);
                    break;
                case "r":
                case "g":
                case "b":
                    t < 0 && (t = 0, o = !1), t > 255 && (t = 255, o = !1)
            }
            return {
                isValid: o,
                val: t
            }
        },
        o = function(r, o) {
            var a = o.attr("data-type").replace("input-", "");
            if ("h" === a || "s" === a || "v" === a) {
                var n = t(0, "h", (Number(e.trim(r.$h.val())) || 0) / 360).val,
                    l = t(0, "s", (Number(e.trim(r.$s.val())) || 0) / 100).val,
                    i = t(0, "v", (Number(e.trim(r.$v.val())) || 0) / 100).val,
                    s = jQuery.fn.jColorPicker.helpers.HSVtoRGB(n, l, i),
                    c = e('[data-type="types"] [type="radio"]:checked').val(),
                    u = a === c ? "controls-selected-type" : "controls";
                r.$root.trigger("jcp-color-changed", [s.r, s.g, s.b, u])
            } else {
                var d = t(0, "r", Number(e.trim(r.$r.val())) || 0).val,
                    p = t(0, "g", Number(e.trim(r.$g.val())) || 0).val,
                    h = t(0, "b", Number(e.trim(r.$b.val())) || 0).val;
                r.$root.trigger("jcp-color-changed", [d, p, h, "controls"])
            }
        },
        a = function(r) {
            r.$root.on("keydown", '[data-type="types"] [type="text"]', function(a) {
                var n = e(this).attr("data-type").replace("input-", "");
                if (38 === a.which || 38 == a.keyCode) {
                    var l = Number(e.trim(e(this).val())) || 0;
                    e(this).val(t(0, n, l + 1).val), a.preventDefault()
                }
                if (40 === a.which || 40 == a.keyCode) {
                    var l = Number(e.trim(e(this).val())) || 0;
                    e(this).val(t(0, n, l - 1).val), a.preventDefault()
                }
                o(r, e(this))
            }), r.$root.on("blur", '[data-type="types"] [type="text"]', function(a) {
                var n = e(this).attr("data-type").replace("input-", ""),
                    l = e.trim(e(this).val());
                e.isNumeric(l) && t(0, n, Number(l) || 0).isValid || o(r, e(this))
            }), r.$root.on("change", '[data-type="types"] [type="radio"]', function() {
                r.$root.trigger("jcp-type-changed", [e(this).val()])
            }), r.$colorTB.on("keyup blur", function() {
                var t = e.trim(e(this).val());
                if (/(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(t)) {
                    if (t.length < 6)
                        for (var o = 6 - t.length, a = 0; a < o; a++) t = "0" + t
                } else t = "000000";
                var n = jQuery.fn.jColorPicker.helpers.hexToRgb(t);
                r.$root.trigger("jcp-color-changed", [n.r, n.g, n.b, "controls"])
            })
        },
        n = function(e) {
            for (var r, t = [{
                    val: "h",
                    name: "H",
                    char: "&deg;",
                    selected: !0
                }, {
                    val: "s",
                    name: "S",
                    char: "%"
                }, {
                    val: "v",
                    name: "V",
                    char: "%"
                }, {
                    val: "r",
                    name: "R",
                    char: ""
                }, {
                    val: "g",
                    name: "G",
                    char: ""
                }, {
                    val: "b",
                    name: "B",
                    char: ""
                }], o = "", a = 0; a < t.length; a++) {
                r = t[a].selected ? " checked " : "";
                var n = t[a];
                o += '<div class="jcp-type"><input type="radio" ' + r + ' name="type" value="' + n.val + '" id="radio-' + n.val + '" /><label for="radio-' + n.val + '">' + n.name + ': </label><input type="text" name="input-' + n.val + '" data-type="input-' + n.val + '" maxlength="3" /> ' + n.char + " </div>"
            }
            e.$controls.append('<div data-type="types">' + o + "</div>");
            for (var l = 0; l < t.length; l++) e["$" + t[l].val] = e.$controls.find('[data-type="input-' + t[l].val + '"]')
        },
        l = function(e) {
            e.$root.find('[data-type="holder"]').append('<div data-type="controls"><div data-type="color" /></div>'), e.$controls = e.$root.find('[data-type="controls"]'), e.$color = e.$root.find('[data-type="color"]'), n(e), e.$controls.append('<div data-type="rgb-label"></div><div data-type="cmyk-label"></div>'), e.$rgbLabel = e.$root.find('[data-type="rgb-label"]'), e.$controls.append('<div class="jcp-color-preview"><label>#</label> <input type="text" data-type="color-tb" maxlength="6" /></div>'), e.$colorTB = e.$root.find('[data-type="color-tb"]'), e.$controls.append('<button class="jcp-btn">Select</button>')
        };
    jQuery.fn.jColorPicker.controls = function(e) {
        this.$root = e, this.$controls = null, this.$color = null, this.$colorTB = null, l(this), a(this)
    }, jQuery.fn.jColorPicker.controls.prototype.setColor = function(e) {
        r(this, e)
    }
}(jQuery),
function(e) {
    "use strict";
    jQuery.fn.jColorPicker.helpers = jQuery.fn.jColorPicker.helpers || {}, jQuery.fn.jColorPicker.helpers.isCanvasSupported = function() {
        return !!document.createElement("canvas").getContext
    };
    var r = function(e) {
        var r = e.toString(16);
        return 1 === r.length ? "0" + r : r
    };
    jQuery.fn.jColorPicker.helpers.rgbToHex = function(e, t, o) {
        return r(e) + r(t) + r(o)
    }, jQuery.fn.jColorPicker.helpers.hexToRgb = function(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, r, t, o) {
            return r + r + t + t + o + o
        });
        var r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return r ? {
            r: parseInt(r[1], 16),
            g: parseInt(r[2], 16),
            b: parseInt(r[3], 16)
        } : null
    }, jQuery.fn.jColorPicker.helpers.HSVtoRGB = function(e, r, t) {
        var o, a, n, l, i, s, c, u;
        switch (l = Math.floor(6 * e), i = 6 * e - l, s = t * (1 - r), c = t * (1 - i * r), u = t * (1 - (1 - i) * r), l % 6) {
            case 0:
                o = t, a = u, n = s;
                break;
            case 1:
                o = c, a = t, n = s;
                break;
            case 2:
                o = s, a = t, n = u;
                break;
            case 3:
                o = s, a = c, n = t;
                break;
            case 4:
                o = u, a = s, n = t;
                break;
            case 5:
                o = t, a = s, n = c
        }
        return {
            r: Math.round(255 * o),
            g: Math.round(255 * a),
            b: Math.round(255 * n)
        }
    }, jQuery.fn.jColorPicker.helpers.RGBtoHSV = function(e, r, t) {
        var o, a = Math.max(e, r, t),
            n = Math.min(e, r, t),
            l = a - n,
            i = 0 === a ? 0 : l / a,
            s = a / 255;
        switch (a) {
            case n:
                o = 0;
                break;
            case e:
                o = r - t + l * (r < t ? 6 : 0), o /= 6 * l;
                break;
            case r:
                o = t - e + 2 * l, o /= 6 * l;
                break;
            case t:
                o = e - r + 4 * l, o /= 6 * l
        }
        return {
            h: o,
            s: i,
            v: s
        }
    };
    var t = function(e, r, t, o, a) {
        var n = 4 * (o * a + t);
        e[n] = Math.round(r.r), e[n + 1] = Math.round(r.g), e[n + 2] = Math.round(r.b), e[n + 3] = 255
    };
    jQuery.fn.jColorPicker.helpers.drawRed = function(e, r, o, a, n) {
        for (var l = 0, i = 0; i < o; i++) {
            for (var s = 0; s < r; s++) t(e, {
                r: 255 - l,
                g: a,
                b: n
            }, s, i, r);
            l++
        }
    }, jQuery.fn.jColorPicker.helpers.drawGreen = function(e, r, o, a, n) {
        for (var l = 0, i = 0; i < o; i++) {
            for (var s = 0; s < r; s++) t(e, {
                r: a,
                g: 255 - l,
                b: n
            }, s, i, r);
            l++
        }
    }, jQuery.fn.jColorPicker.helpers.drawBlue = function(e, r, o, a, n) {
        for (var l = 0, i = 0; i < o; i++) {
            for (var s = 0; s < r; s++) t(e, {
                r: a,
                g: n,
                b: 255 - l
            }, s, i, r);
            l++
        }
    }, jQuery.fn.jColorPicker.helpers.drawHew = function(e, r, o) {
        for (var a = 1, n = 0; n < o; n++) {
            for (var l = 0; l < r; l++) {
                n === o - 1 && (a = 0);
                var i = jQuery.fn.jColorPicker.helpers.HSVtoRGB(a, 1, 1);
                t(e, i, l, n, r)
            }
            a -= 1 / 256
        }
    }, jQuery.fn.jColorPicker.helpers.drawSaturation = function(e, r, o, a, n) {
        for (var l = 1, i = 0; i < o; i++) {
            for (var s = 0; s < r; s++) {
                i === o - 1 && (l = 0);
                var c = jQuery.fn.jColorPicker.helpers.HSVtoRGB(a, l, n);
                t(e, c, s, i, r)
            }
            l -= 1 / 256
        }
    }, jQuery.fn.jColorPicker.helpers.drawValue = function(e, r, o, a, n) {
        for (var l = 1, i = 0; i < o; i++) {
            for (var s = 0; s < r; s++) {
                i === o - 1 && (l = 0);
                var c = jQuery.fn.jColorPicker.helpers.HSVtoRGB(a, n, l);
                t(e, c, s, i, r)
            }
            l -= 1 / 256
        }
    }, jQuery.fn.jColorPicker.helpers.drawRedGreen = function(e, r, o, a) {
        for (var n = 255, l = 0; l < o; l++) {
            for (var i = 0, s = 0; s < r; s++) t(e, {
                r: i,
                g: n,
                b: a
            }, s, l, r), i += 1;
            n -= 1
        }
    }, jQuery.fn.jColorPicker.helpers.drawRedBlue = function(e, r, o, a) {
        for (var n = 255, l = 0; l < o; l++) {
            for (var i = 0, s = 0; s < r; s++) t(e, {
                r: n,
                g: a,
                b: i
            }, s, l, r), i += 1;
            n -= 1
        }
    }, jQuery.fn.jColorPicker.helpers.drawGreenBlue = function(e, r, o, a) {
        for (var n = 255, l = 0; l < o; l++) {
            for (var i = 0, s = 0; s < r; s++) t(e, {
                r: a,
                g: n,
                b: i
            }, s, l, r), i += 1;
            n -= 1
        }
    }, jQuery.fn.jColorPicker.helpers.drawValueSaturation = function(e, r, o, a) {
        for (var n = 1, l = 0; l < o; l++) {
            for (var i = 0, s = 0; s < r; s++) {
                s === r - 1 && (i = 1), l === o - 1 && (n = 0);
                var c = jQuery.fn.jColorPicker.helpers.HSVtoRGB(a, i, n);
                t(e, c, s, l, r), i += 1 / 256
            }
            n -= 1 / 256
        }
    }, jQuery.fn.jColorPicker.helpers.drawValueHew = function(e, r, o, a) {
        for (var n = 1, l = 0; l < o; l++) {
            for (var i = 0, s = 0; s < r; s++) {
                s === r - 1 && (i = 1), l === o - 1 && (n = 0);
                var c = jQuery.fn.jColorPicker.helpers.HSVtoRGB(i, a, n);
                t(e, c, s, l, r), i += 1 / 256
            }
            n -= 1 / 256
        }
    }, jQuery.fn.jColorPicker.helpers.drawSaturationHew = function(e, r, o, a) {
        for (var n = 1, l = 0; l < o; l++) {
            for (var i = 0, s = 0; s < r; s++) {
                s === r - 1 && (i = 1), l === o - 1 && (n = 0);
                var c = jQuery.fn.jColorPicker.helpers.HSVtoRGB(i, n, a);
                t(e, c, s, l, r), i += 1 / 256
            }
            n -= 1 / 256
        }
    }
}(jQuery),
function(e) {
    "use strict";
    var r = function(e, r, t, o, a, n) {
            var l = Math.round(e.$paletteHandle.outerWidth() / 2),
                i = Math.round(256 - (o + a + n) / 3);
            i >= 108 && i <= 148 && (i = 0), e.$paletteHandle.css({
                left: r - l + "px",
                top: t - l + "px",
                "border-color": "rgb(" + i + ", " + i + "," + i + ")"
            })
        },
        t = function(e, t, o, a, n) {
            var l, i;
            switch (t) {
                case "h":
                    var s = jQuery.fn.jColorPicker.helpers.RGBtoHSV(o, a, n);
                    l = Math.round(256 * s.s), i = 256 - Math.round(256 * s.v);
                    break;
                case "s":
                    var s = jQuery.fn.jColorPicker.helpers.RGBtoHSV(o, a, n);
                    l = Math.round(256 * s.h), i = 256 - Math.round(256 * s.v);
                    break;
                case "v":
                    var s = jQuery.fn.jColorPicker.helpers.RGBtoHSV(o, a, n);
                    l = Math.round(256 * s.h), i = 256 - Math.round(256 * s.s);
                    break;
                case "r":
                    l = n, i = 256 - a;
                    break;
                case "g":
                    l = n, i = 256 - o;
                    break;
                case "b":
                    l = o, i = 256 - a
            }
            r(e, l, i, o, a, n)
        },
        o = function(e, r, t, o, a) {
            var n, l = new Uint8ClampedArray(262144);
            switch (r) {
                case "h":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(t, o, a);
                    jQuery.fn.jColorPicker.helpers.drawValueSaturation(l, 256, 256, i.h);
                    break;
                case "s":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(t, o, a);
                    jQuery.fn.jColorPicker.helpers.drawValueHew(l, 256, 256, i.s);
                    break;
                case "v":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(t, o, a);
                    jQuery.fn.jColorPicker.helpers.drawSaturationHew(l, 256, 256, i.v);
                    break;
                case "r":
                    jQuery.fn.jColorPicker.helpers.drawGreenBlue(l, 256, 256, t);
                    break;
                case "g":
                    jQuery.fn.jColorPicker.helpers.drawRedBlue(l, 256, 256, o);
                    break;
                case "b":
                    jQuery.fn.jColorPicker.helpers.drawRedGreen(l, 256, 256, a)
            }
            n = e.paletteCtx.createImageData(256, 256), n.data.set(l), e.paletteCtx.putImageData(n, 0, 0)
        },
        a = function(e, t, o) {
            var a, n, l;
            return e.paletteMouseDown && (t = Math.round(t), o = Math.round(o), n = Math.round(e.$palette.width()), l = Math.round(e.$palette.height()), t < 0 && (t = 0), t >= n && (t = n - 1), o < 0 && (o = 0), o >= l && (o = l - 1), a = e.paletteCtx.getImageData(t, o, 1, 1).data, r(e, t, o, a[0], a[1], a[2]), e.$root.trigger("jcp-color-changed", [a[0], a[1], a[2], "palette"])), e.sliderMouseDown
        },
        n = function(t) {
            t.$paletteHandle.on("mousedown", function(e) {
                e.preventDefault(), t.paletteMouseDown = !0
            }), e(document).on("mouseup", function() {
                t.paletteMouseDown = !1
            }), e(document).on("mousemove", function(e) {
                var r = t.$palette.parent().offset(),
                    o = e.pageX - r.left,
                    n = e.pageY - r.top;
                a(t, o, n) && e.preventDefault()
            }), t.$paletteHandle.on("touchstart", function(e) {
                e.preventDefault(), t.paletteMouseDown = !0
            }), t.$paletteHandle.on("touchmove", function(e) {
                var r = e.changedTouches;
                if (r.length > 0) {
                    var o = t.$palette.parent().offset(),
                        n = r[0].pageX - o.left,
                        l = r[0].pageY - o.top;
                    a(t, n, l) && e.preventDefault()
                }
            }), t.$paletteHandle.on("touchend", function(e) {
                t.paletteMouseDown = !0
            }), t.$palette.on("click", function(e) {
                var o = t.$palette.parent().offset(),
                    a = e.pageX - o.left,
                    n = e.pageY - o.top,
                    l = t.paletteCtx.getImageData(a, n, 1, 1).data;
                r(t, a, n, l[0], l[1], l[2]), t.$root.trigger("jcp-color-changed", [l[0], l[1], l[2], "palette"])
            })
        },
        l = function(e) {
            e.$root.find('[data-type="holder"]').append('<div data-type="palette-box"><canvas width="256" height="256" data-type="palette" /><div data-type="palette-handle" /></div>'), e.$paletteBox = e.$root.find('[data-type="palette-box"]'), e.$paletteHandle = e.$root.find('[data-type="palette-handle"]'), e.$palette = e.$paletteBox.find('[data-type="palette"]'), e.palette = e.$palette.get(0), e.paletteCtx = e.palette.getContext("2d")
        };
    jQuery.fn.jColorPicker.palette = function(e) {
        this.$root = e, this.$paletteBox = null, this.$palette = null, this.$paletteHandle = null, this.palette = null, this.paletteCtx = null, this.paletteMouseDown = !1, l(this), n(this)
    }, jQuery.fn.jColorPicker.palette.prototype.draw = function(e, r, t, a) {
        o(this, e, r, t, a)
    }, jQuery.fn.jColorPicker.palette.prototype.setHandleByColor = function(e, r, o, a) {
        t(this, e, r, o, a)
    }
}(jQuery),
function(e) {
    "use strict";
    var r = function(e, r, t, o, a) {
            var n = Math.round(e.$sliderHandle.outerHeight() / 2),
                l = Math.round(256 - (t + o + a) / 3);
            l >= 108 && l <= 148 && (l = 0), e.$sliderHandle.css({
                left: "-1px",
                top: r - n + "px",
                "background-color": "rgba(" + l + ", " + l + "," + l + ", 0.5)"
            })
        },
        t = function(e, t, o) {
            var a, n;
            return e.sliderMouseDown && (o = Math.round(o), a = Math.round(e.$slider.height()), o < 0 && (o = 0), o >= a && (o = a - 1), n = e.sliderCtx.getImageData(0, o, 1, 1).data, r(e, o, n[0], n[1], n[2]), e.$root.trigger("jcp-color-changed", [n[0], n[1], n[2], "slider"])), e.sliderMouseDown
        },
        o = function(e, t, o, a, n) {
            var l;
            switch (t) {
                case "h":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(o, a, n);
                    l = 256 - Math.round(256 * i.h);
                    break;
                case "s":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(o, a, n);
                    l = 256 - Math.round(256 * i.s);
                    break;
                case "v":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(o, a, n);
                    l = 256 - Math.round(256 * i.v);
                    break;
                case "r":
                    l = 256 - o;
                    break;
                case "g":
                    l = 256 - a;
                    break;
                case "b":
                    l = 256 - n
            }
            r(e, l, o, a, n)
        },
        a = function(e, r, t, o, a) {
            var n, l = new Uint8ClampedArray(20480);
            switch (r) {
                case "h":
                    jQuery.fn.jColorPicker.helpers.drawHew(l, 20, 256);
                    break;
                case "s":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(t, o, a);
                    jQuery.fn.jColorPicker.helpers.drawSaturation(l, 20, 256, i.h, i.v);
                    break;
                case "v":
                    var i = jQuery.fn.jColorPicker.helpers.RGBtoHSV(t, o, a);
                    jQuery.fn.jColorPicker.helpers.drawValue(l, 20, 256, i.h, i.v);
                    break;
                case "r":
                    jQuery.fn.jColorPicker.helpers.drawRed(l, 20, 256, o, a);
                    break;
                case "g":
                    jQuery.fn.jColorPicker.helpers.drawGreen(l, 20, 256, t, a);
                    break;
                case "b":
                    jQuery.fn.jColorPicker.helpers.drawBlue(l, 20, 256, t, o)
            }
            n = e.sliderCtx.createImageData(20, 256), n.data.set(l), e.sliderCtx.putImageData(n, 0, 0)
        },
        n = function(e) {
            e.$root.find('[data-type="holder"]').append('<div data-type="slider-box"><canvas width="20" height="256" data-type="slider" /><div data-type="slider-handle" /></div>'), e.$sliderBox = e.$root.find('[data-type="slider-box"]'), e.$sliderHandle = e.$root.find('[data-type="slider-handle"]'), e.$slider = e.$sliderBox.find('[data-type="slider"]'), e.slider = e.$slider.get(0), e.sliderCtx = e.slider.getContext("2d")
        },
        l = function(o) {
            o.$sliderHandle.on("mousedown", function(e) {
                e.preventDefault(), o.sliderMouseDown = !0
            }), e(document).on("mouseup", function() {
                o.sliderMouseDown = !1
            }), e(document).on("mousemove", function(e) {
                var r = o.$slider.parent().offset(),
                    a = (e.pageX, r.left, e.pageY - r.top);
                t(o, 0, a) && e.preventDefault()
            }), o.$sliderHandle.on("touchstart", function(e) {
                e.preventDefault(), o.sliderMouseDown = !0
            }), o.$sliderHandle.on("touchmove", function(e) {
                var r = e.changedTouches;
                if (r.length > 0) {
                    var a = o.$slider.parent().offset(),
                        n = (r[0].pageX, a.left, r[0].pageY - a.top);
                    t(o, 0, n) && e.preventDefault()
                }
            }), o.$sliderHandle.on("touchend", function(e) {
                o.sliderMouseDown = !0
            }), o.$slider.on("click", function(e) {
                var t = o.$slider.parent().offset(),
                    a = e.pageY - t.top,
                    n = o.sliderCtx.getImageData(0, a, 1, 1).data;
                r(o, a, n[0], n[1], n[2]), o.$root.trigger("jcp-color-changed", [n[0], n[1], n[2], "slider"])
            })
        };
    jQuery.fn.jColorPicker.slider = function(e) {
        this.$root = e, this.$sliderBox = null, this.$sliderHandle = null, this.$slider = null, this.slider = null, this.sliderCtx = null, this.sliderMouseDown = !1, n(this), l(this)
    }, jQuery.fn.jColorPicker.slider.prototype.draw = function(e, r, t, o) {
        a(this, e, r, t, o)
    }, jQuery.fn.jColorPicker.slider.prototype.setHandleByColor = function(e, r, t, a) {
        o(this, e, r, t, a)
    }
}(jQuery);