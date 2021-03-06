"use strict";

function isJQueryAvailable() {
    return "undefined" != typeof jQuery
}
var Kairos_APP_ID;
var Kairos_SECRET;
$.ajax({
    type:"GET",
    url:"/Kairos_APP_ID",
    async: false,
    contentType: "application/json; charset=utf-8",
    success:function(data){
        Kairos_APP_ID = data;
    }
});
$.ajax({
    type:"GET",
    url:"/Kairos_SECRET",
    async: false,
    contentType: "application/json; charset=utf-8",
    success:function(data){
        Kairos_SECRET = data;
    }
});

var Kairos = function(e, t) {
    this.app_id = e, this.app_key = t, this.api_host = "https://api.kairos.com/"
};
Kairos.prototype.authenticationProvided = function() {
    return !(!this.app_key || !this.app_id)
}, Kairos.prototype.detect = function(e, t, a) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e && t && jQuery.isFunction(t)) {
        var i = this.api_host + "detect",
            r = {
                image: e
            };
        jQuery.isEmptyObject(a) || (r = jQuery.extend(r, a));
        var s = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(i, {
            headers: s,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(r),
            success: t,
            error: t
        })
    }
}, Kairos.prototype.enroll = function(e, t, a, i, r) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e && t && a && i && jQuery.isFunction(i)) {
        var s = this.api_host + "enroll",
            p = {
                image: e,
                gallery_name: t,
                subject_id: a
            };
        jQuery.isEmptyObject(r) || (p = jQuery.extend(p, r));
        var o = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(s, {
            headers: o,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(p),
            success: i,
            error: i
        })
    }
}, Kairos.prototype.recognize = function(e, t, a, i) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e && a && jQuery.isFunction(a)) {
        var r = this.api_host + "recognize",
            s = {
                image: e,
                gallery_name: t
            };
        jQuery.isEmptyObject(i) || (s = jQuery.extend(s, i));
        var p = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(r, {
            headers: p,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(s),
            success: a,
            error: a
        })
    }
}, Kairos.prototype.viewGalleries = function(e, t) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e && jQuery.isFunction(e)) {
        var a = this.api_host + "gallery/list_all",
            i = {};
        jQuery.isEmptyObject(t) || (i = jQuery.extend(i, t));
        var r = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(a, {
            headers: r,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(i),
            success: e,
            error: e
        })
    }
}, Kairos.prototype.viewSubjectsInGallery = function(e, t, a) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e && t && jQuery.isFunction(t)) {
        var i = this.api_host + "gallery/view",
            r = {
                gallery_name: e
            };
        jQuery.isEmptyObject(a) || (r = jQuery.extend(r, a));
        var s = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(i, {
            headers: s,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(r),
            success: t,
            error: t
        })
    }
}, Kairos.prototype.removeGallery = function(e, t, a) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e) {
        var i = this.api_host + "gallery/remove",
            r = {
                gallery_name: e
            };
        jQuery.isEmptyObject(a) || (r = jQuery.extend(r, a));
        var s = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(i, {
            headers: s,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(r),
            success: t,
            error: t
        })
    }
}, Kairos.prototype.removeSubjectFromGallery = function(e, t, a, i) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && t && e) {
        var r = this.api_host + "gallery/remove_subject",
            s = {
                gallery_name: t,
                subject_id: e
            };
        jQuery.isEmptyObject(i) || (s = jQuery.extend(s, i));
        var p = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(r, {
            headers: p,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(s),
            success: a,
            error: a
        })
    }
}, Kairos.prototype.verify = function(e, t, a, i, r) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e && t && a && i && jQuery.isFunction(i)) {
        var s = this.api_host + "verify",
            p = {
                image: e,
                gallery_name: t,
                subject_id: a
            };
        jQuery.isEmptyObject(r) || (p = jQuery.extend(p, r));
        var o = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(s, {
            headers: o,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(p),
            success: i,
            error: i
        })
    }
}, Kairos.prototype.checkAuthentication = function(e, t) {
    if (0 != this.authenticationProvided() && 0 != isJQueryAvailable() && e && jQuery.isFunction(e)) {
        var a = this.api_host + "gallery/list_all",
            i = {};
        jQuery.isEmptyObject(t) || (i = jQuery.extend(i, t));
        var r = {
            "Content-type": "application/json",
            app_id: this.app_id,
            app_key: this.app_key
        };
        jQuery.ajax(a, {
            headers: r,
            type: "POST",
            dataType: "raw",
            data: JSON.stringify(i),
            success: e,
            error: e
        })
    }
}, $(function() {
    var e = $("video")[0],
        t = $("canvas")[0],
        a = !1,
        i = 0,
        r = 0,
        s = new Kairos(Kairos_APP_ID, Kairos_SECRET);
    navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, navigator.getMedia({
        video: !0,
        audio: !1
    }, function(t) {
        if (navigator.mozGetUserMedia) e.mozSrcObject = t;
        else {
            var a = window.URL || window.webkitURL;
            e.src = a.createObjectURL(t)
        }
        e.play()
    }, function(e) {
        window.console
    }), e.addEventListener("canplay", function(s) {
        a || (i = e.videoWidth, r = e.videoHeight, e.setAttribute("width", i), e.setAttribute("height", r), t.setAttribute("width", i), t.setAttribute("height", r), a = !0)
    }, !1);
    var p = "live",
        o = !1;
    $("#action-button").click(function(a) {
        if ("live" == p) {
            $(".overlay").css("display", "block");
            var n = t.getContext("2d");
            if (i && r && (t.width = i, t.height = r, n.drawImage(e, 0, 0, i, r)), o = t.toDataURL("image/png"), $("video").css("display", "none"), $("canvas").css("display", "block"), "f1" == mode) {
                var y = function(e) {
                    var t = JSON.parse(e.responseText);
                    if (t.images) {
                        for (var a, i = t.images[0].faces, r = 0; r < i.length; r++) n.lineWidth = "6", n.strokeStyle = "red", a = i[r], n.rect(a.topLeftX, a.topLeftY, a.width, a.height), n.stroke();
                        var s = {
                                asian: i[0].attributes.asian,
                                black: i[0].attributes.black,
                                hispanic: i[0].attributes.hispanic,
                                other: i[0].attributes.other,
                                white: i[0].attributes.white
                            },
                            o = 0,
                            y = "asian";
                        for (var d in s) s.hasOwnProperty(d) && s[d] >= o && (o = s[d], y = d);
                        o = o.toFixed(3);
                        var c = "guy";
                        "F" == i[0].attributes.gender.type && (c = "girl"), $("#speech").text("You look " + 100 * o + "% like a " + i[0].attributes.age + "-year-old " + y + " " + c + ".")
                    } else $("#speech").text("Sorry, I can't see where your face is.");
                    p = "result", $(".overlay").css("display", "none")
                };
                $("#action-button").text("Reset");
                var d = String(o);
                d = d.replace("data:image/jpeg;base64,", ""), d = d.replace("data:image/jpg;base64,", ""), d = d.replace("data:image/png;base64,", ""), d = d.replace("data:image/gif;base64,", ""), d = d.replace("data:image/bmp;base64,", "");
                var c = {
                    selector: "FULL"
                };
                s.detect(d, y, c)
            }
        } else "result" == p && (p = "live", $("#action-button").text("Snap!"), $("video").css("display", "block"), $("canvas").css("display", "none"), $("#speech").text("Send me a snap!"))
    })
});
var mode = "f1",
    changeMode = function(e) {
        mode = e
    };
