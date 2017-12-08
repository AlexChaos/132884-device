var write = document.querySelector(".write-us");
var popup = document.querySelector(".modal-contact");
var close = document.querySelector(".modal-close");
var mapLink = document.querySelector(".modal-img");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var form = popup.querySelector("form");
var yourName = popup.querySelector(".your-name");
var yourAdress = popup.querySelector(".your-adress");
var storage = localStorage.getItem("yourName");

write.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
      yourName.value = storage;
      yourAdress.focus();
    } else {
      yourName.focus();
    }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if ( !yourName.value || !yourAdress.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("your-name", yourName.value);
  }
});

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });










  /*grayscale для IE*/
$(document).ready(function() {

  // Grayscale images on Safari and Opera browsers
  if(getBrowser()=='opera' || getBrowser()=='safari'){
    var $images = $(".container img")
    , imageCount = $images.length
    , counter = 0;

    // One instead of on, because it need only fire once per image
    $images.one("load",function(){
      // increment counter every time an image finishes loading
      counter++;
      if (counter == imageCount) {
        // do stuff when all have loaded
        grayscale($('.container img'));
        $(".container img").hover(
          function () {
            grayscale.reset($(this));
          },
          function () {
            grayscale($(this));
          }
        );
      }
    }).each(function () {
    if (this.complete) {
      // manually trigger load event in
      // event of a cache pull
        $(this).trigger("load");
      }
    });
  };


  // Grayscale images only on browsers IE10+ since they removed support for CSS grayscale filter
  if (getInternetExplorerVersion() >= 10){
    $('.container img').each(function(){
      var el = $(this);
      el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"5","opacity":"0"}).insertBefore(el).queue(function(){
        var el = $(this);
        el.parent().css({"width":this.width,"height":this.height});
        el.dequeue();
      });
      this.src = grayscaleIE10(this.src);
    });

    // Quick animation on IE10+
    $('.container img').hover(
      function () {
        $(this).parent().find('img:first').stop().animate({opacity:1}, 200);
      },
      function () {
        $('.img_grayscale').stop().animate({opacity:0}, 200);
      }
    );

    function grayscaleIE10(src){
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var imgObj = new Image();
      imgObj.src = src;
      canvas.width = imgObj.width;
      canvas.height = imgObj.height;
      ctx.drawImage(imgObj, 0, 0);
      var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for(var y = 0; y < imgPixels.height; y++){
        for(var x = 0; x < imgPixels.width; x++){
          var i = (y * 4) * imgPixels.width + x * 4;
          var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
          imgPixels.data[i] = avg;
          imgPixels.data[i + 1] = avg;
          imgPixels.data[i + 2] = avg;
        }
      }
      ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
      return canvas.toDataURL();
    };
  };

  // This block simply ads a corresponding class to the body tag so that we can target browsers with CSS classes
  if(getBrowser()=='mozilla'){
    // Mozilla
    $('body').addClass('mozilla');
  }
  else if(getBrowser()=='ie'){
    // IE Favourite
    $('body').addClass('ie');
  }
  else if(getBrowser()=='opera'){
    // Opera
    $('body').addClass('opera');
  }
  else if (getBrowser()=='safari'){ // safari
    // Safari
    $('body').addClass('safari');
  }
  else if(getBrowser()=='chrome'){
    // Chrome
    $('body').addClass('chrome');
  };
  if (getInternetExplorerVersion() >= 10){
    $('body').addClass('ie11');
  };

  // Detection function to tell what kind of browser is used
  function getBrowser(){
    var userAgent = navigator.userAgent.toLowerCase();
    $.browser.chrome = /chrome/.test(userAgent);
    $.browser.safari= /webkit/.test(userAgent);
    $.browser.opera=/opera/.test(userAgent);
    $.browser.msie=/msie/.test( userAgent ) && !/opera/.test( userAgent );
    $.browser.mozilla= /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) || /firefox/.test(userAgent);

    if($.browser.chrome) return "chrome";
    if($.browser.mozilla) return "mozilla";
    if($.browser.opera) return "opera";
    if($.browser.safari) return "safari";
    if($.browser.msie) return "ie";
  };

  // Since IE11 can not be detected like this because the new user agent on IE11 is trying to hide as Mozilla
  // we detect IE11 with this function
  function getInternetExplorerVersion(){
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer'){
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape'){
      var ua = navigator.userAgent;
      var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
      rv = parseFloat( RegExp.$1 );
    }
    return rv;
  };
});








var grayscale = function() {
    var e = {
            colorProps: ["color", "backgroundColor", "borderBottomColor", "borderTopColor", "borderLeftColor", "borderRightColor", "backgroundImage"],
            externalImageHandler: {
                init: function(e, t) {
                    if (e.nodeName.toLowerCase() === "img") {} else {
                        r(e).backgroundImageSRC = t;
                        e.style.backgroundImage = ""
                    }
                },
                reset: function(e) {
                    if (e.nodeName.toLowerCase() === "img") {} else {
                        e.style.backgroundImage = "url(" + (r(e).backgroundImageSRC || "") + ")"
                    }
                }
            }
        },
        t = function() {
            try {
                window.console.log.apply(console, arguments)
            } catch (e) {}
        },
        n = function(e) {
            return (new RegExp("https?://(?!" + window.location.hostname + ")")).test(e)
        },
        r = function() {
            var e = [0],
                t = "data" + +(new Date);
            return function(n) {
                var r = n[t],
                    i = e.length;
                if (!r) {
                    r = n[t] = i;
                    e[r] = {}
                }
                return e[r]
            }
        }(),
        i = function(e, t, n) {
            var s = document.createElement("canvas"),
                u = s.getContext("2d"),
                a = e.naturalHeight || e.offsetHeight || e.height,
                f = e.naturalWidth || e.offsetWidth || e.width,
                l;
            s.height = a;
            s.width = f;
            u.drawImage(e, 0, 0);
            try {
                l = u.getImageData(0, 0, f, a)
            } catch (c) {}
            if (t) {
                i.preparing = true;
                var h = 0;
                (function() {
                    if (!i.preparing) {
                        return
                    }
                    if (h === a) {
                        u.putImageData(l, 0, 0, 0, 0, f, a);
                        n ? r(n).BGdataURL = s.toDataURL() : r(e).dataURL = s.toDataURL()
                    }
                    for (var t = 0; t < f; t++) {
                        var c = (h * f + t) * 4;
                        l.data[c] = l.data[c + 1] = l.data[c + 2] = o(l.data[c], l.data[c + 1], l.data[c + 2])
                    }
                    h++;
                    setTimeout(arguments.callee, 0)
                })();
                return
            } else {
                i.preparing = false
            }
            for (var h = 0; h < a; h++) {
                for (var p = 0; p < f; p++) {
                    var d = (h * f + p) * 4;
                    l.data[d] = l.data[d + 1] = l.data[d + 2] = o(l.data[d], l.data[d + 1], l.data[d + 2])
                }
            }
            u.putImageData(l, 0, 0, 0, 0, f, a);
            return s
        },
        s = function(e, t) {
            var n = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null)[t] : e.currentStyle[t];
            if (n && /^#[A-F0-9]/i.test(n)) {
                var r = n.match(/[A-F0-9]{2}/ig);
                n = "rgb(" + parseInt(r[0], 16) + "," + parseInt(r[1], 16) + "," + parseInt(r[2], 16) + ")"
            }
            return n
        },
        o = function(e, t, n) {
            return parseInt(.2125 * e + .7154 * t + .0721 * n, 10)
        },
        u = function(e) {
            var t = Array.prototype.slice.call(e.getElementsByTagName("*"));
            t.unshift(e);
            return t
        };
    var a = function(t) {
        if (t && t[0] && t.length && t[0].nodeName) {
            var f = Array.prototype.slice.call(t),
                l = -1,
                c = f.length;
            while (++l < c) {
                a.call(this, f[l])
            }
            return
        }
        t = t || document.documentElement;
        if (!document.createElement("canvas").getContext) {
            t.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)";
            t.style.zoom = 1;
            return
        }
        var h = u(t),
            p = -1,
            d = h.length;
        while (++p < d) {
            var v = h[p];
            if (v.nodeName.toLowerCase() === "img") {
                var m = v.getAttribute("src");
                if (!m) {
                    continue
                }
                if (n(m)) {
                    e.externalImageHandler.init(v, m)
                } else {
                    r(v).realSRC = m;
                    try {
                        v.src = r(v).dataURL || i(v).toDataURL()
                    } catch (g) {
                        e.externalImageHandler.init(v, m)
                    }
                }
            } else {
                for (var y = 0, b = e.colorProps.length; y < b; y++) {
                    var w = e.colorProps[y],
                        E = s(v, w);
                    if (!E) {
                        continue
                    }
                    if (v.style[w]) {
                        r(v)[w] = E
                    }
                    if (E.substring(0, 4) === "rgb(") {
                        var S = o.apply(null, E.match(/\d+/g));
                        v.style[w] = E = "rgb(" + S + "," + S + "," + S + ")";
                        continue
                    }
                    if (E.indexOf("url(") > -1) {
                        var x = /\(['"]?(.+?)['"]?\)/,
                            T = E.match(x)[1];
                        if (n(T)) {
                            e.externalImageHandler.init(v, T);
                            r(v).externalBG = true;
                            continue
                        }
                        try {
                            var N = r(v).BGdataURL || function() {
                                var e = document.createElement("img");
                                e.src = T;
                                return i(e).toDataURL()
                            }();
                            v.style[w] = E.replace(x, function(e, t) {
                                return "(" + N + ")"
                            })
                        } catch (g) {
                            e.externalImageHandler.init(v, T)
                        }
                    }
                }
            }
        }
    };
    a.reset = function(t) {
        if (t && t[0] && t.length && t[0].nodeName) {
            var i = Array.prototype.slice.call(t),
                s = -1,
                o = i.length;
            while (++s < o) {
                a.reset.call(this, i[s])
            }
            return
        }
        t = t || document.documentElement;
        if (!document.createElement("canvas").getContext) {
            t.style.filter = "progid:DXImageTransform.Microsoft.BasicImage(grayscale=0)";
            return
        }
        var f = u(t),
            l = -1,
            c = f.length;
        while (++l < c) {
            var h = f[l];
            if (h.nodeName.toLowerCase() === "img") {
                var p = h.getAttribute("src");
                if (n(p)) {
                    e.externalImageHandler.reset(h, p)
                }
                h.src = r(h).realSRC || p
            } else {
                for (var d = 0, v = e.colorProps.length; d < v; d++) {
                    if (r(h).externalBG) {
                        e.externalImageHandler.reset(h)
                    }
                    var m = e.colorProps[d];
                    h.style[m] = r(h)[m] || ""
                }
            }
        }
    };
    a.prepare = function(e) {
        if (e && e[0] && e.length && e[0].nodeName) {
            var t = Array.prototype.slice.call(e),
                o = -1,
                f = t.length;
            while (++o < f) {
                a.prepare.call(null, t[o])
            }
            return
        }
        e = e || document.documentElement;
        if (!document.createElement("canvas").getContext) {
            return
        }
        var l = u(e),
            c = -1,
            h = l.length;
        while (++c < h) {
            var p = l[c];
            if (r(p).skip) {
                return
            }
            if (p.nodeName.toLowerCase() === "img") {
                if (p.getAttribute("src") && !n(p.src)) {
                    i(p, true)
                }
            } else {
                var d = s(p, "backgroundImage");
                if (d.indexOf("url(") > -1) {
                    var v = /\(['"]?(.+?)['"]?\)/,
                        m = d.match(v)[1];
                    if (!n(m)) {
                        var g = document.createElement("img");
                        g.src = m;
                        i(g, true, p)
                    }
                }
            }
        }
    };
    return a
}()
  /*grayscale для IE*/
