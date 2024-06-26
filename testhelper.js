function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/* v1.26.2 */
(function () {
  /*!
   * MIT License
   * 
   * Copyright (c) 2020 Filestack
   * 
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   * 
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   * 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   * 
   */
  var filestack = function (t) {
    var e = {};

    function n(i) {
      if (e[i]) return e[i].exports;
      var r = e[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof2(t) && t && t.__esModule) return t;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var r in t) {
        n.d(i, r, function (e) {
          return t[e];
        }.bind(null, r));
      }
      return i;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 52);
  }([function (t, e, n) {
    n.d(e, "c", function () {
      return r;
    }), n.d(e, "a", function () {
      return _o;
    }), n.d(e, "b", function () {
      return a;
    }), n.d(e, "d", function () {
      return s;
    }), n.d(e, "f", function () {
      return c;
    }), n.d(e, "e", function () {
      return u;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
     THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
     See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var _i = function i(t, e) {
      return (_i = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (t[n] = e[n]);
        }
      })(t, e);
    };

    function r(t, e) {
      function n() {
        this.constructor = t;
      }

      _i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
    }

    var _o = function o() {
      return (_o = Object.assign || function (t) {
        for (var e, n = 1, i = arguments.length; n < i; n++) {
          for (var r in e = arguments[n]) {
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
          }
        }

        return t;
      }).apply(this, arguments);
    };

    function a(t, e, n, i) {
      return new (n || (n = Promise))(function (r, o) {
        function a(t) {
          try {
            c(i.next(t));
          } catch (t) {
            o(t);
          }
        }

        function s(t) {
          try {
            c(i["throw"](t));
          } catch (t) {
            o(t);
          }
        }

        function c(t) {
          var e;
          t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
            t(e);
          })).then(a, s);
        }

        c((i = i.apply(t, e || [])).next());
      });
    }

    function s(t, e) {
      var n,
          i,
          r,
          o,
          a = {
        label: 0,
        sent: function sent() {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
      return o = {
        next: s(0),
        "throw": s(1),
        "return": s(2)
      }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
        return this;
      }), o;

      function s(o) {
        return function (s) {
          return function (o) {
            if (n) throw new TypeError("Generator is already executing.");

            for (; a;) {
              try {
                if (n = 1, i && (r = 2 & o[0] ? i["return"] : o[0] ? i["throw"] || ((r = i["return"]) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;

                switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                  case 0:
                  case 1:
                    r = o;
                    break;

                  case 4:
                    return a.label++, {
                      value: o[1],
                      done: !1
                    };

                  case 5:
                    a.label++, i = o[1], o = [0];
                    continue;

                  case 7:
                    o = a.ops.pop(), a.trys.pop();
                    continue;

                  default:
                    if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                      a = 0;
                      continue;
                    }

                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                      a.label = o[1];
                      break;
                    }

                    if (6 === o[0] && a.label < r[1]) {
                      a.label = r[1], r = o;
                      break;
                    }

                    if (r && a.label < r[2]) {
                      a.label = r[2], a.ops.push(o);
                      break;
                    }

                    r[2] && a.ops.pop(), a.trys.pop();
                    continue;
                }

                o = e.call(t, a);
              } catch (t) {
                o = [6, t], i = 0;
              } finally {
                n = r = 0;
              }
            }

            if (5 & o[0]) throw o[1];
            return {
              value: o[0] ? o[1] : void 0,
              done: !0
            };
          }([o, s]);
        };
      }
    }

    function c(t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          i = 0;
      if (n) return n.call(t);
      if (t && "number" == typeof t.length) return {
        next: function next() {
          return t && i >= t.length && (t = void 0), {
            value: t && t[i++],
            done: !t
          };
        }
      };
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function p(t, e) {
      var n = "function" == typeof Symbol && t[Symbol.iterator];
      if (!n) return t;
      var i,
          r,
          o = n.call(t),
          a = [];

      try {
        for (; (void 0 === e || e-- > 0) && !(i = o.next()).done;) {
          a.push(i.value);
        }
      } catch (t) {
        r = {
          error: t
        };
      } finally {
        try {
          i && !i.done && (n = o["return"]) && n.call(o);
        } finally {
          if (r) throw r.error;
        }
      }

      return a;
    }

    function u() {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t = t.concat(p(arguments[e]));
      }

      return t;
    }
  }, function (t, e, n) {
    n.r(e), n.d(e, "resolveCdnUrl", function () {
      return y;
    }), n.d(e, "resolveHost", function () {
      return v;
    }), n.d(e, "removeEmpty", function () {
      return g;
    }), n.d(e, "uniqueTime", function () {
      return b;
    }), n.d(e, "uniqueId", function () {
      return x;
    }), n.d(e, "getMimetype", function () {
      return k;
    }), n.d(e, "extensionToMime", function () {
      return w;
    }), n.d(e, "sanitizeName", function () {
      return _;
    }), n.d(e, "filterObject", function () {
      return j;
    }), n.d(e, "cleanUpCallbacks", function () {
      return O;
    }), n.d(e, "md5", function () {
      return l;
    }), n.d(e, "b64", function () {
      return f;
    }), n.d(e, "getVersion", function () {
      return d;
    }), n.d(e, "isMobile", function () {
      return m;
    }), n.d(e, "isFacebook", function () {
      return h;
    });

    var i,
        r = n(0),
        o = {
      "application/andrew-inset": ["ez"],
      "application/applixware": ["aw"],
      "application/atom+xml": ["atom"],
      "application/atomcat+xml": ["atomcat"],
      "application/atomsvc+xml": ["atomsvc"],
      "application/bdoc": ["bdoc"],
      "application/ccxml+xml": ["ccxml"],
      "application/cdmi-capability": ["cdmia"],
      "application/cdmi-container": ["cdmic"],
      "application/cdmi-domain": ["cdmid"],
      "application/cdmi-object": ["cdmio"],
      "application/cdmi-queue": ["cdmiq"],
      "application/cu-seeme": ["cu"],
      "application/dash+xml": ["mpd"],
      "application/davmount+xml": ["davmount"],
      "application/docbook+xml": ["dbk"],
      "application/dssc+der": ["dssc"],
      "application/dssc+xml": ["xdssc"],
      "application/ecmascript": ["ecma", "es"],
      "application/emma+xml": ["emma"],
      "application/epub+zip": ["epub"],
      "application/exi": ["exi"],
      "application/font-tdpfr": ["pfr"],
      "application/geo+json": ["geojson"],
      "application/gml+xml": ["gml"],
      "application/gpx+xml": ["gpx"],
      "application/gxf": ["gxf"],
      "application/gzip": ["gz"],
      "application/hjson": ["hjson"],
      "application/hyperstudio": ["stk"],
      "application/inkml+xml": ["ink", "inkml"],
      "application/ipfix": ["ipfix"],
      "application/java-archive": ["jar", "war", "ear"],
      "application/java-serialized-object": ["ser"],
      "application/java-vm": ["class"],
      "application/javascript": ["js", "mjs"],
      "application/json": ["json", "map"],
      "application/json5": ["json5"],
      "application/jsonml+json": ["jsonml"],
      "application/ld+json": ["jsonld"],
      "application/lost+xml": ["lostxml"],
      "application/mac-binhex40": ["hqx"],
      "application/mac-compactpro": ["cpt"],
      "application/mads+xml": ["mads"],
      "application/manifest+json": ["webmanifest"],
      "application/marc": ["mrc"],
      "application/marcxml+xml": ["mrcx"],
      "application/mathematica": ["ma", "nb", "mb"],
      "application/mathml+xml": ["mathml"],
      "application/mbox": ["mbox"],
      "application/mediaservercontrol+xml": ["mscml"],
      "application/metalink+xml": ["metalink"],
      "application/metalink4+xml": ["meta4"],
      "application/mets+xml": ["mets"],
      "application/mods+xml": ["mods"],
      "application/mp21": ["m21", "mp21"],
      "application/mp4": ["mp4s", "m4p"],
      "application/msword": ["doc", "dot"],
      "application/mxf": ["mxf"],
      "application/n-quads": ["nq"],
      "application/n-triples": ["nt"],
      "application/octet-stream": ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "msp", "buffer"],
      "application/oda": ["oda"],
      "application/oebps-package+xml": ["opf"],
      "application/ogg": ["ogx"],
      "application/omdoc+xml": ["omdoc"],
      "application/onenote": ["onetoc", "onetoc2", "onetmp", "onepkg"],
      "application/oxps": ["oxps"],
      "application/patch-ops-error+xml": ["xer"],
      "application/pdf": ["pdf"],
      "application/pgp-encrypted": ["pgp"],
      "application/pgp-signature": ["asc", "sig"],
      "application/pics-rules": ["prf"],
      "application/pkcs10": ["p10"],
      "application/pkcs7-mime": ["p7m", "p7c"],
      "application/pkcs7-signature": ["p7s"],
      "application/pkcs8": ["p8"],
      "application/pkix-attr-cert": ["ac"],
      "application/pkix-cert": ["cer"],
      "application/pkix-crl": ["crl"],
      "application/pkix-pkipath": ["pkipath"],
      "application/pkixcmp": ["pki"],
      "application/pls+xml": ["pls"],
      "application/postscript": ["ai", "eps", "ps"],
      "application/pskc+xml": ["pskcxml"],
      "application/raml+yaml": ["raml"],
      "application/rdf+xml": ["rdf", "owl"],
      "application/reginfo+xml": ["rif"],
      "application/relax-ng-compact-syntax": ["rnc"],
      "application/resource-lists+xml": ["rl"],
      "application/resource-lists-diff+xml": ["rld"],
      "application/rls-services+xml": ["rs"],
      "application/rpki-ghostbusters": ["gbr"],
      "application/rpki-manifest": ["mft"],
      "application/rpki-roa": ["roa"],
      "application/rsd+xml": ["rsd"],
      "application/rss+xml": ["rss"],
      "application/rtf": ["rtf"],
      "application/sbml+xml": ["sbml"],
      "application/scvp-cv-request": ["scq"],
      "application/scvp-cv-response": ["scs"],
      "application/scvp-vp-request": ["spq"],
      "application/scvp-vp-response": ["spp"],
      "application/sdp": ["sdp"],
      "application/set-payment-initiation": ["setpay"],
      "application/set-registration-initiation": ["setreg"],
      "application/shf+xml": ["shf"],
      "application/sieve": ["siv", "sieve"],
      "application/smil+xml": ["smi", "smil"],
      "application/sparql-query": ["rq"],
      "application/sparql-results+xml": ["srx"],
      "application/srgs": ["gram"],
      "application/srgs+xml": ["grxml"],
      "application/sru+xml": ["sru"],
      "application/ssdl+xml": ["ssdl"],
      "application/ssml+xml": ["ssml"],
      "application/tei+xml": ["tei", "teicorpus"],
      "application/thraud+xml": ["tfi"],
      "application/timestamped-data": ["tsd"],
      "application/voicexml+xml": ["vxml"],
      "application/wasm": ["wasm"],
      "application/widget": ["wgt"],
      "application/winhlp": ["hlp"],
      "application/wsdl+xml": ["wsdl"],
      "application/wspolicy+xml": ["wspolicy"],
      "application/xaml+xml": ["xaml"],
      "application/xcap-diff+xml": ["xdf"],
      "application/xenc+xml": ["xenc"],
      "application/xhtml+xml": ["xhtml", "xht"],
      "application/xml": ["xml", "xsl", "xsd", "rng"],
      "application/xml-dtd": ["dtd"],
      "application/xop+xml": ["xop"],
      "application/xproc+xml": ["xpl"],
      "application/xslt+xml": ["xslt"],
      "application/xspf+xml": ["xspf"],
      "application/xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
      "application/yang": ["yang"],
      "application/yin+xml": ["yin"],
      "application/zip": ["zip"],
      "audio/3gpp": ["*3gpp"],
      "audio/adpcm": ["adp"],
      "audio/basic": ["au", "snd"],
      "audio/midi": ["mid", "midi", "kar", "rmi"],
      "audio/mp3": ["*mp3"],
      "audio/mp4": ["m4a", "mp4a"],
      "audio/mpeg": ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"],
      "audio/ogg": ["oga", "ogg", "spx"],
      "audio/s3m": ["s3m"],
      "audio/silk": ["sil"],
      "audio/wav": ["wav"],
      "audio/wave": ["*wav"],
      "audio/webm": ["weba"],
      "audio/xm": ["xm"],
      "font/collection": ["ttc"],
      "font/otf": ["otf"],
      "font/ttf": ["ttf"],
      "font/woff": ["woff"],
      "font/woff2": ["woff2"],
      "image/aces": ["exr"],
      "image/apng": ["apng"],
      "image/bmp": ["bmp"],
      "image/cgm": ["cgm"],
      "image/dicom-rle": ["drle"],
      "image/emf": ["emf"],
      "image/fits": ["fits"],
      "image/g3fax": ["g3"],
      "image/gif": ["gif"],
      "image/heic": ["heic"],
      "image/heic-sequence": ["heics"],
      "image/heif": ["heif"],
      "image/heif-sequence": ["heifs"],
      "image/ief": ["ief"],
      "image/jls": ["jls"],
      "image/jp2": ["jp2", "jpg2"],
      "image/jpeg": ["jpeg", "jpg", "jpe"],
      "image/jpm": ["jpm"],
      "image/jpx": ["jpx", "jpf"],
      "image/jxr": ["jxr"],
      "image/ktx": ["ktx"],
      "image/png": ["png"],
      "image/sgi": ["sgi"],
      "image/svg+xml": ["svg", "svgz"],
      "image/t38": ["t38"],
      "image/tiff": ["tif", "tiff"],
      "image/tiff-fx": ["tfx"],
      "image/webp": ["webp"],
      "image/wmf": ["wmf"],
      "message/disposition-notification": ["disposition-notification"],
      "message/global": ["u8msg"],
      "message/global-delivery-status": ["u8dsn"],
      "message/global-disposition-notification": ["u8mdn"],
      "message/global-headers": ["u8hdr"],
      "message/rfc822": ["eml", "mime"],
      "model/3mf": ["3mf"],
      "model/gltf+json": ["gltf"],
      "model/gltf-binary": ["glb"],
      "model/iges": ["igs", "iges"],
      "model/mesh": ["msh", "mesh", "silo"],
      "model/stl": ["stl"],
      "model/vrml": ["wrl", "vrml"],
      "model/x3d+binary": ["*x3db", "x3dbz"],
      "model/x3d+fastinfoset": ["x3db"],
      "model/x3d+vrml": ["*x3dv", "x3dvz"],
      "model/x3d+xml": ["x3d", "x3dz"],
      "model/x3d-vrml": ["x3dv"],
      "text/cache-manifest": ["appcache", "manifest"],
      "text/calendar": ["ics", "ifb"],
      "text/coffeescript": ["coffee", "litcoffee"],
      "text/css": ["css"],
      "text/csv": ["csv"],
      "text/html": ["html", "htm", "shtml"],
      "text/jade": ["jade"],
      "text/jsx": ["jsx"],
      "text/less": ["less"],
      "text/markdown": ["markdown", "md"],
      "text/mathml": ["mml"],
      "text/mdx": ["mdx"],
      "text/n3": ["n3"],
      "text/plain": ["txt", "text", "conf", "def", "list", "log", "in", "ini"],
      "text/richtext": ["rtx"],
      "application/font-ttf": "ttf",
      "application/vnd.ms-fontobject": "eot",
      "application/font-otf": "otf",
      "text/rtf": ["*rtf"],
      "text/sgml": ["sgml", "sgm"],
      "text/shex": ["shex"],
      "text/slim": ["slim", "slm"],
      "text/stylus": ["stylus", "styl"],
      "text/tab-separated-values": ["tsv"],
      "text/troff": ["t", "tr", "roff", "man", "me", "ms"],
      "text/turtle": ["ttl"],
      "text/uri-list": ["uri", "uris", "urls"],
      "text/vcard": ["vcard", "vcr"],
      "text/vtt": ["vtt"],
      "text/xml": ["*xml"],
      "text/yaml": ["yaml", "yml"],
      "video/3gpp": ["3gp", "3gpp"],
      "video/3gpp2": ["3g2"],
      "video/h261": ["h261"],
      "video/h263": ["h263"],
      "video/h264": ["h264"],
      "video/jpeg": ["jpgv"],
      "video/jpm": ["*jpm", "jpgm"],
      "video/mj2": ["mj2", "mjp2"],
      "video/mp2t": ["ts"],
      "video/mp4": ["mp4", "mp4v", "mpg4"],
      "video/mpeg": ["mpeg", "mpg", "mpe", "m1v", "m2v"],
      "video/ogg": ["ogv"],
      "video/quicktime": ["qt", "mov"],
      "video/webm": ["webm"],
      "application/prs.cww": ["cww"],
      "application/vnd.3gpp.pic-bw-large": ["plb"],
      "application/vnd.3gpp.pic-bw-small": ["psb"],
      "application/vnd.3gpp.pic-bw-var": ["pvb"],
      "application/vnd.3gpp2.tcap": ["tcap"],
      "application/vnd.3m.post-it-notes": ["pwn"],
      "application/vnd.accpac.simply.aso": ["aso"],
      "application/vnd.accpac.simply.imp": ["imp"],
      "application/vnd.acucobol": ["acu"],
      "application/vnd.acucorp": ["atc", "acutc"],
      "application/vnd.adobe.air-application-installer-package+zip": ["air"],
      "application/vnd.adobe.formscentral.fcdt": ["fcdt"],
      "application/vnd.adobe.fxp": ["fxp", "fxpl"],
      "application/vnd.adobe.xdp+xml": ["xdp"],
      "application/vnd.adobe.xfdf": ["xfdf"],
      "application/vnd.ahead.space": ["ahead"],
      "application/vnd.airzip.filesecure.azf": ["azf"],
      "application/vnd.airzip.filesecure.azs": ["azs"],
      "application/vnd.amazon.ebook": ["azw"],
      "application/vnd.americandynamics.acc": ["acc"],
      "application/vnd.amiga.ami": ["ami"],
      "application/vnd.android.package-archive": ["apk"],
      "application/vnd.anser-web-certificate-issue-initiation": ["cii"],
      "application/vnd.anser-web-funds-transfer-initiation": ["fti"],
      "application/vnd.antix.game-component": ["atx"],
      "application/vnd.apple.installer+xml": ["mpkg"],
      "application/vnd.apple.keynote": ["keynote", "key"],
      "application/vnd.apple.mpegurl": ["m3u8"],
      "application/vnd.apple.numbers": ["numbers"],
      "application/vnd.apple.pages": ["pages"],
      "application/vnd.apple.key": ["key"],
      "application/vnd.apple.pkpass": ["pkpass"],
      "application/vnd.aristanetworks.swi": ["swi"],
      "application/vnd.astraea-software.iota": ["iota"],
      "application/vnd.audiograph": ["aep"],
      "application/vnd.blueice.multipass": ["mpm"],
      "application/vnd.bmi": ["bmi"],
      "application/vnd.businessobjects": ["rep"],
      "application/vnd.chemdraw+xml": ["cdxml"],
      "application/vnd.chipnuts.karaoke-mmd": ["mmd"],
      "application/vnd.cinderella": ["cdy"],
      "application/vnd.citationstyles.style+xml": ["csl"],
      "application/vnd.claymore": ["cla"],
      "application/vnd.cloanto.rp9": ["rp9"],
      "application/vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
      "application/vnd.cluetrust.cartomobile-config": ["c11amc"],
      "application/vnd.cluetrust.cartomobile-config-pkg": ["c11amz"],
      "application/vnd.commonspace": ["csp"],
      "application/vnd.contact.cmsg": ["cdbcmsg"],
      "application/vnd.cosmocaller": ["cmc"],
      "application/vnd.crick.clicker": ["clkx"],
      "application/vnd.crick.clicker.keyboard": ["clkk"],
      "application/vnd.crick.clicker.palette": ["clkp"],
      "application/vnd.crick.clicker.template": ["clkt"],
      "application/vnd.crick.clicker.wordbank": ["clkw"],
      "application/vnd.criticaltools.wbs+xml": ["wbs"],
      "application/vnd.ctc-posml": ["pml"],
      "application/vnd.cups-ppd": ["ppd"],
      "application/vnd.curl.car": ["car"],
      "application/vnd.curl.pcurl": ["pcurl"],
      "application/vnd.dart": ["dart"],
      "application/vnd.data-vision.rdz": ["rdz"],
      "application/vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
      "application/vnd.dece.ttml+xml": ["uvt", "uvvt"],
      "application/vnd.dece.unspecified": ["uvx", "uvvx"],
      "application/vnd.dece.zip": ["uvz", "uvvz"],
      "application/vnd.denovo.fcselayout-link": ["fe_launch"],
      "application/vnd.dna": ["dna"],
      "application/vnd.dolby.mlp": ["mlp"],
      "application/vnd.dpgraph": ["dpg"],
      "application/vnd.dreamfactory": ["dfac"],
      "application/vnd.ds-keypoint": ["kpxx"],
      "application/vnd.dvb.ait": ["ait"],
      "application/vnd.dvb.service": ["svc"],
      "application/vnd.dynageo": ["geo"],
      "application/vnd.ecowin.chart": ["mag"],
      "application/vnd.enliven": ["nml"],
      "application/vnd.epson.esf": ["esf"],
      "application/vnd.epson.msf": ["msf"],
      "application/vnd.epson.quickanime": ["qam"],
      "application/vnd.epson.salt": ["slt"],
      "application/vnd.epson.ssf": ["ssf"],
      "application/vnd.eszigno3+xml": ["es3", "et3"],
      "application/vnd.ezpix-album": ["ez2"],
      "application/vnd.ezpix-package": ["ez3"],
      "application/vnd.fdf": ["fdf"],
      "application/vnd.fdsn.mseed": ["mseed"],
      "application/vnd.fdsn.seed": ["seed", "dataless"],
      "application/vnd.flographit": ["gph"],
      "application/vnd.fluxtime.clip": ["ftc"],
      "application/vnd.framemaker": ["fm", "frame", "maker", "book"],
      "application/vnd.frogans.fnc": ["fnc"],
      "application/vnd.frogans.ltf": ["ltf"],
      "application/vnd.fsc.weblaunch": ["fsc"],
      "application/vnd.fujitsu.oasys": ["oas"],
      "application/vnd.fujitsu.oasys2": ["oa2"],
      "application/vnd.fujitsu.oasys3": ["oa3"],
      "application/vnd.fujitsu.oasysgp": ["fg5"],
      "application/vnd.fujitsu.oasysprs": ["bh2"],
      "application/vnd.fujixerox.ddd": ["ddd"],
      "application/vnd.fujixerox.docuworks": ["xdw"],
      "application/vnd.fujixerox.docuworks.binder": ["xbd"],
      "application/vnd.fuzzysheet": ["fzs"],
      "application/vnd.genomatix.tuxedo": ["txd"],
      "application/vnd.geogebra.file": ["ggb"],
      "application/vnd.geogebra.tool": ["ggt"],
      "application/vnd.geometry-explorer": ["gex", "gre"],
      "application/vnd.geonext": ["gxt"],
      "application/vnd.geoplan": ["g2w"],
      "application/vnd.geospace": ["g3w"],
      "application/vnd.gmx": ["gmx"],
      "application/vnd.google-apps.document": ["gdoc"],
      "application/vnd.google-apps.presentation": ["gslides"],
      "application/vnd.google-apps.spreadsheet": ["gsheet"],
      "application/vnd.google-earth.kml+xml": ["kml"],
      "application/vnd.google-earth.kmz": ["kmz"],
      "application/vnd.grafeq": ["gqf", "gqs"],
      "application/vnd.groove-account": ["gac"],
      "application/vnd.groove-help": ["ghf"],
      "application/vnd.groove-identity-message": ["gim"],
      "application/vnd.groove-injector": ["grv"],
      "application/vnd.groove-tool-message": ["gtm"],
      "application/vnd.groove-tool-template": ["tpl"],
      "application/vnd.groove-vcard": ["vcg"],
      "application/vnd.hal+xml": ["hal"],
      "application/vnd.handheld-entertainment+xml": ["zmm"],
      "application/vnd.hbci": ["hbci"],
      "application/vnd.hhe.lesson-player": ["les"],
      "application/vnd.hp-hpgl": ["hpgl"],
      "application/vnd.hp-hpid": ["hpid"],
      "application/vnd.hp-hps": ["hps"],
      "application/vnd.hp-jlyt": ["jlt"],
      "application/vnd.hp-pcl": ["pcl"],
      "application/vnd.hp-pclxl": ["pclxl"],
      "application/vnd.hydrostatix.sof-data": ["sfd-hdstx"],
      "application/vnd.ibm.minipay": ["mpy"],
      "application/vnd.ibm.modcap": ["afp", "listafp", "list3820"],
      "application/vnd.ibm.rights-management": ["irm"],
      "application/vnd.ibm.secure-container": ["sc"],
      "application/vnd.iccprofile": ["icc", "icm"],
      "application/vnd.igloader": ["igl"],
      "application/vnd.immervision-ivp": ["ivp"],
      "application/vnd.immervision-ivu": ["ivu"],
      "application/vnd.insors.igm": ["igm"],
      "application/vnd.intercon.formnet": ["xpw", "xpx"],
      "application/vnd.intergeo": ["i2g"],
      "application/vnd.intu.qbo": ["qbo"],
      "application/vnd.intu.qfx": ["qfx"],
      "application/vnd.ipunplugged.rcprofile": ["rcprofile"],
      "application/vnd.irepository.package+xml": ["irp"],
      "application/vnd.is-xpr": ["xpr"],
      "application/vnd.isac.fcs": ["fcs"],
      "application/vnd.jam": ["jam"],
      "application/vnd.jcp.javame.midlet-rms": ["rms"],
      "application/vnd.jisp": ["jisp"],
      "application/vnd.joost.joda-archive": ["joda"],
      "application/vnd.kahootz": ["ktz", "ktr"],
      "application/vnd.kde.karbon": ["karbon"],
      "application/vnd.kde.kchart": ["chrt"],
      "application/vnd.kde.kformula": ["kfo"],
      "application/vnd.kde.kivio": ["flw"],
      "application/vnd.kde.kontour": ["kon"],
      "application/vnd.kde.kpresenter": ["kpr", "kpt"],
      "application/vnd.kde.kspread": ["ksp"],
      "application/vnd.kde.kword": ["kwd", "kwt"],
      "application/vnd.kenameaapp": ["htke"],
      "application/vnd.kidspiration": ["kia"],
      "application/vnd.kinar": ["kne", "knp"],
      "application/vnd.koan": ["skp", "skd", "skt", "skm"],
      "application/vnd.kodak-descriptor": ["sse"],
      "application/vnd.las.las+xml": ["lasxml"],
      "application/vnd.llamagraphics.life-balance.desktop": ["lbd"],
      "application/vnd.llamagraphics.life-balance.exchange+xml": ["lbe"],
      "application/vnd.lotus-1-2-3": ["123"],
      "application/vnd.lotus-approach": ["apr"],
      "application/vnd.lotus-freelance": ["pre"],
      "application/vnd.lotus-notes": ["nsf"],
      "application/vnd.lotus-organizer": ["org"],
      "application/vnd.lotus-screencam": ["scm"],
      "application/vnd.lotus-wordpro": ["lwp"],
      "application/vnd.macports.portpkg": ["portpkg"],
      "application/vnd.mcd": ["mcd"],
      "application/vnd.medcalcdata": ["mc1"],
      "application/vnd.mediastation.cdkey": ["cdkey"],
      "application/vnd.mfer": ["mwf"],
      "application/vnd.mfmp": ["mfm"],
      "application/vnd.micrografx.flo": ["flo"],
      "application/vnd.micrografx.igx": ["igx"],
      "application/vnd.mif": ["mif"],
      "application/vnd.mobius.daf": ["daf"],
      "application/vnd.mobius.dis": ["dis"],
      "application/vnd.mobius.mbk": ["mbk"],
      "application/vnd.mobius.mqy": ["mqy"],
      "application/vnd.mobius.msl": ["msl"],
      "application/vnd.mobius.plc": ["plc"],
      "application/vnd.mobius.txf": ["txf"],
      "application/vnd.mophun.application": ["mpn"],
      "application/vnd.mophun.certificate": ["mpc"],
      "application/vnd.mozilla.xul+xml": ["xul"],
      "application/vnd.ms-artgalry": ["cil"],
      "application/vnd.ms-cab-compressed": ["cab"],
      "application/vnd.ms-excel": ["xls", "xlm", "xla", "xlc", "xlt", "xlw"],
      "application/vnd.ms-excel.addin.macroenabled.12": ["xlam"],
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": ["xlsb"],
      "application/vnd.ms-excel.sheet.macroenabled.12": ["xlsm"],
      "application/vnd.ms-excel.template.macroenabled.12": ["xltm"],
      "application/vnd.ms-htmlhelp": ["chm"],
      "application/vnd.ms-ims": ["ims"],
      "application/vnd.ms-lrm": ["lrm"],
      "application/vnd.ms-officetheme": ["thmx"],
      "application/vnd.ms-outlook": ["msg"],
      "application/vnd.ms-pki.seccat": ["cat"],
      "application/vnd.ms-pki.stl": ["*stl"],
      "application/vnd.ms-powerpoint": ["ppt", "pps", "pot"],
      "application/vnd.ms-powerpoint.addin.macroenabled.12": ["ppam"],
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": ["pptm"],
      "application/vnd.ms-powerpoint.slide.macroenabled.12": ["sldm"],
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": ["ppsm"],
      "application/vnd.ms-powerpoint.template.macroenabled.12": ["potm"],
      "application/vnd.ms-project": ["mpp", "mpt"],
      "application/vnd.ms-word.document.macroenabled.12": ["docm"],
      "application/vnd.ms-word.template.macroenabled.12": ["dotm"],
      "application/vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
      "application/vnd.ms-wpl": ["wpl"],
      "application/vnd.ms-xpsdocument": ["xps"],
      "application/vnd.mseq": ["mseq"],
      "application/vnd.musician": ["mus"],
      "application/vnd.muvee.style": ["msty"],
      "application/vnd.mynfc": ["taglet"],
      "application/vnd.neurolanguage.nlu": ["nlu"],
      "application/vnd.nitf": ["ntf", "nitf"],
      "application/vnd.noblenet-directory": ["nnd"],
      "application/vnd.noblenet-sealer": ["nns"],
      "application/vnd.noblenet-web": ["nnw"],
      "application/vnd.nokia.n-gage.data": ["ngdat"],
      "application/vnd.nokia.n-gage.symbian.install": ["n-gage"],
      "application/vnd.nokia.radio-preset": ["rpst"],
      "application/vnd.nokia.radio-presets": ["rpss"],
      "application/vnd.novadigm.edm": ["edm"],
      "application/vnd.novadigm.edx": ["edx"],
      "application/vnd.novadigm.ext": ["ext"],
      "application/vnd.oasis.opendocument.chart": ["odc"],
      "application/vnd.oasis.opendocument.chart-template": ["otc"],
      "application/vnd.oasis.opendocument.database": ["odb"],
      "application/vnd.oasis.opendocument.formula": ["odf"],
      "application/vnd.oasis.opendocument.formula-template": ["odft"],
      "application/vnd.oasis.opendocument.graphics": ["odg"],
      "application/vnd.oasis.opendocument.graphics-template": ["otg"],
      "application/vnd.oasis.opendocument.image": ["odi"],
      "application/vnd.oasis.opendocument.image-template": ["oti"],
      "application/vnd.oasis.opendocument.presentation": ["odp"],
      "application/vnd.oasis.opendocument.presentation-template": ["otp"],
      "application/vnd.oasis.opendocument.spreadsheet": ["ods"],
      "application/vnd.oasis.opendocument.spreadsheet-template": ["ots"],
      "application/vnd.oasis.opendocument.text": ["odt"],
      "application/vnd.oasis.opendocument.text-master": ["odm"],
      "application/vnd.oasis.opendocument.text-template": ["ott"],
      "application/vnd.oasis.opendocument.text-web": ["oth"],
      "application/vnd.olpc-sugar": ["xo"],
      "application/vnd.oma.dd2+xml": ["dd2"],
      "application/vnd.openofficeorg.extension": ["oxt"],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": ["pptx"],
      "application/vnd.openxmlformats-officedocument.presentationml.slide": ["sldx"],
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": ["ppsx"],
      "application/vnd.openxmlformats-officedocument.presentationml.template": ["potx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ["xlsx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": ["xltx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ["docx"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": ["dotx"],
      "application/vnd.osgeo.mapguide.package": ["mgp"],
      "application/vnd.osgi.dp": ["dp"],
      "application/vnd.osgi.subsystem": ["esa"],
      "application/vnd.palm": ["pdb", "pqa", "oprc"],
      "application/vnd.pawaafile": ["paw"],
      "application/vnd.pg.format": ["str"],
      "application/vnd.pg.osasli": ["ei6"],
      "application/vnd.picsel": ["efif"],
      "application/vnd.pmi.widget": ["wg"],
      "application/vnd.pocketlearn": ["plf"],
      "application/vnd.powerbuilder6": ["pbd"],
      "application/vnd.previewsystems.box": ["box"],
      "application/vnd.proteus.magazine": ["mgz"],
      "application/vnd.publishare-delta-tree": ["qps"],
      "application/vnd.pvi.ptid1": ["ptid"],
      "application/vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
      "application/vnd.realvnc.bed": ["bed"],
      "application/vnd.recordare.musicxml": ["mxl"],
      "application/vnd.recordare.musicxml+xml": ["musicxml"],
      "application/vnd.rig.cryptonote": ["cryptonote"],
      "application/vnd.rim.cod": ["cod"],
      "application/vnd.rn-realmedia": ["rm"],
      "application/vnd.rn-realmedia-vbr": ["rmvb"],
      "application/vnd.route66.link66+xml": ["link66"],
      "application/vnd.sailingtracker.track": ["st"],
      "application/vnd.seemail": ["see"],
      "application/vnd.sema": ["sema"],
      "application/vnd.semd": ["semd"],
      "application/vnd.semf": ["semf"],
      "application/vnd.shana.informed.formdata": ["ifm"],
      "application/vnd.shana.informed.formtemplate": ["itp"],
      "application/vnd.shana.informed.interchange": ["iif"],
      "application/vnd.shana.informed.package": ["ipk"],
      "application/vnd.simtech-mindmapper": ["twd", "twds"],
      "application/vnd.smaf": ["mmf"],
      "application/vnd.smart.teacher": ["teacher"],
      "application/vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
      "application/vnd.spotfire.dxp": ["dxp"],
      "application/vnd.spotfire.sfs": ["sfs"],
      "application/vnd.stardivision.calc": ["sdc"],
      "application/vnd.stardivision.draw": ["sda"],
      "application/vnd.stardivision.impress": ["sdd"],
      "application/vnd.stardivision.math": ["smf"],
      "application/vnd.stardivision.writer": ["sdw", "vor"],
      "application/vnd.stardivision.writer-global": ["sgl"],
      "application/vnd.stepmania.package": ["smzip"],
      "application/vnd.stepmania.stepchart": ["sm"],
      "application/vnd.sun.wadl+xml": ["wadl"],
      "application/vnd.sun.xml.calc": ["sxc"],
      "application/vnd.sun.xml.calc.template": ["stc"],
      "application/vnd.sun.xml.draw": ["sxd"],
      "application/vnd.sun.xml.draw.template": ["std"],
      "application/vnd.sun.xml.impress": ["sxi"],
      "application/vnd.sun.xml.impress.template": ["sti"],
      "application/vnd.sun.xml.math": ["sxm"],
      "application/vnd.sun.xml.writer": ["sxw"],
      "application/vnd.sun.xml.writer.global": ["sxg"],
      "application/vnd.sun.xml.writer.template": ["stw"],
      "application/vnd.sus-calendar": ["sus", "susp"],
      "application/vnd.svd": ["svd"],
      "application/vnd.symbian.install": ["sis", "sisx"],
      "application/vnd.syncml+xml": ["xsm"],
      "application/vnd.syncml.dm+wbxml": ["bdm"],
      "application/vnd.syncml.dm+xml": ["xdm"],
      "application/vnd.tao.intent-module-archive": ["tao"],
      "application/vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
      "application/vnd.tmobile-livetv": ["tmo"],
      "application/vnd.trid.tpt": ["tpt"],
      "application/vnd.triscape.mxs": ["mxs"],
      "application/vnd.trueapp": ["tra"],
      "application/vnd.ufdl": ["ufd", "ufdl"],
      "application/vnd.uiq.theme": ["utz"],
      "application/vnd.umajin": ["umj"],
      "application/vnd.unity": ["unityweb"],
      "application/vnd.uoml+xml": ["uoml"],
      "application/vnd.vcx": ["vcx"],
      "application/vnd.visio": ["vsd", "vst", "vss", "vsw"],
      "application/vnd.visionary": ["vis"],
      "application/vnd.vsf": ["vsf"],
      "application/vnd.wap.wbxml": ["wbxml"],
      "application/vnd.wap.wmlc": ["wmlc"],
      "application/vnd.wap.wmlscriptc": ["wmlsc"],
      "application/vnd.webturbo": ["wtb"],
      "application/vnd.wolfram.player": ["nbp"],
      "application/vnd.wordperfect": ["wpd"],
      "application/vnd.wqd": ["wqd"],
      "application/vnd.wt.stf": ["stf"],
      "application/vnd.xara": ["xar"],
      "application/vnd.xfdl": ["xfdl"],
      "application/vnd.yamaha.hv-dic": ["hvd"],
      "application/vnd.yamaha.hv-script": ["hvs"],
      "application/vnd.yamaha.hv-voice": ["hvp"],
      "application/vnd.yamaha.openscoreformat": ["osf"],
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": ["osfpvg"],
      "application/vnd.yamaha.smaf-audio": ["saf"],
      "application/vnd.yamaha.smaf-phrase": ["spf"],
      "application/vnd.yellowriver-custom-menu": ["cmp"],
      "application/vnd.zul": ["zir", "zirz"],
      "application/vnd.zzazz.deck+xml": ["zaz"],
      "application/x-7z-compressed": ["7z"],
      "application/x-abiword": ["abw"],
      "application/x-ace-compressed": ["ace"],
      "application/x-apple-diskimage": ["*dmg"],
      "application/x-arj": ["arj"],
      "application/x-authorware-bin": ["aab", "x32", "u32", "vox"],
      "application/x-authorware-map": ["aam"],
      "application/x-authorware-seg": ["aas"],
      "application/x-bcpio": ["bcpio"],
      "application/x-bdoc": ["*bdoc"],
      "application/x-bittorrent": ["torrent"],
      "application/x-blorb": ["blb", "blorb"],
      "application/x-bzip": ["bz"],
      "application/x-bzip2": ["bz2", "boz"],
      "application/x-cbr": ["cbr", "cba", "cbt", "cbz", "cb7"],
      "application/x-cdlink": ["vcd"],
      "application/x-cfs-compressed": ["cfs"],
      "application/x-chat": ["chat"],
      "application/x-chess-pgn": ["pgn"],
      "application/x-chrome-extension": ["crx"],
      "application/x-cocoa": ["cco"],
      "application/x-conference": ["nsc"],
      "application/x-cpio": ["cpio"],
      "application/x-csh": ["csh"],
      "application/x-debian-package": ["*deb", "udeb"],
      "application/x-dgc-compressed": ["dgc"],
      "application/x-director": ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
      "application/x-doom": ["wad"],
      "application/x-dtbncx+xml": ["ncx"],
      "application/x-dtbook+xml": ["dtb"],
      "application/x-dtbresource+xml": ["res"],
      "application/x-dvi": ["dvi"],
      "application/x-envoy": ["evy"],
      "application/x-eva": ["eva"],
      "application/x-font-bdf": ["bdf"],
      "application/x-font-ghostscript": ["gsf"],
      "application/x-font-linux-psf": ["psf"],
      "application/x-font-pcf": ["pcf"],
      "application/x-font-snf": ["snf"],
      "application/x-font-type1": ["pfa", "pfb", "pfm", "afm"],
      "application/x-freearc": ["arc"],
      "application/x-futuresplash": ["spl"],
      "application/x-gca-compressed": ["gca"],
      "application/x-glulx": ["ulx"],
      "application/x-gnumeric": ["gnumeric"],
      "application/x-gramps-xml": ["gramps"],
      "application/x-gtar": ["gtar"],
      "application/x-hdf": ["hdf"],
      "application/x-httpd-php": ["php"],
      "application/x-install-instructions": ["install"],
      "application/x-iso9660-image": ["*iso"],
      "application/x-java-archive-diff": ["jardiff"],
      "application/x-java-jnlp-file": ["jnlp"],
      "application/x-latex": ["latex"],
      "application/x-lua-bytecode": ["luac"],
      "application/x-lzh-compressed": ["lzh", "lha"],
      "application/x-makeself": ["run"],
      "application/x-mie": ["mie"],
      "application/x-mobipocket-ebook": ["prc", "mobi"],
      "application/x-ms-application": ["application"],
      "application/x-ms-shortcut": ["lnk"],
      "application/x-ms-wmd": ["wmd"],
      "application/x-ms-wmz": ["wmz"],
      "application/x-ms-xbap": ["xbap"],
      "application/x-msaccess": ["mdb"],
      "application/x-msbinder": ["obd"],
      "application/x-mscardfile": ["crd"],
      "application/x-msclip": ["clp"],
      "application/x-msdos-program": ["*exe"],
      "application/x-msdownload": ["*exe", "*dll", "com", "bat", "*msi"],
      "application/x-msmediaview": ["mvb", "m13", "m14"],
      "application/x-msmetafile": ["*wmf", "*wmz", "*emf", "emz"],
      "application/x-msmoney": ["mny"],
      "application/x-mspublisher": ["pub"],
      "application/x-msschedule": ["scd"],
      "application/x-msterminal": ["trm"],
      "application/x-mswrite": ["wri"],
      "application/x-netcdf": ["nc", "cdf"],
      "application/x-ns-proxy-autoconfig": ["pac"],
      "application/x-nzb": ["nzb"],
      "application/x-perl": ["pl", "pm"],
      "application/x-pilot": ["*prc", "*pdb"],
      "application/x-pkcs12": ["p12", "pfx"],
      "application/x-pkcs7-certificates": ["p7b", "spc"],
      "application/x-pkcs7-certreqresp": ["p7r"],
      "application/x-rar-compressed": ["rar"],
      "application/x-redhat-package-manager": ["rpm"],
      "application/x-research-info-systems": ["ris"],
      "application/x-sea": ["sea"],
      "application/x-sh": ["sh"],
      "application/x-shar": ["shar"],
      "application/x-shockwave-flash": ["swf"],
      "application/x-silverlight-app": ["xap"],
      "application/x-sql": ["sql"],
      "application/x-stuffit": ["sit"],
      "application/x-stuffitx": ["sitx"],
      "application/x-subrip": ["srt"],
      "application/x-sv4cpio": ["sv4cpio"],
      "application/x-sv4crc": ["sv4crc"],
      "application/x-t3vm-image": ["t3"],
      "application/x-tads": ["gam"],
      "application/x-tar": ["tar"],
      "application/x-tcl": ["tcl", "tk"],
      "application/x-tex": ["tex"],
      "application/x-tex-tfm": ["tfm"],
      "application/x-texinfo": ["texinfo", "texi"],
      "application/x-tgif": ["obj"],
      "application/x-ustar": ["ustar"],
      "application/x-virtualbox-hdd": ["hdd"],
      "application/x-virtualbox-ova": ["ova"],
      "application/x-virtualbox-ovf": ["ovf"],
      "application/x-virtualbox-vbox": ["vbox"],
      "application/x-virtualbox-vbox-extpack": ["vbox-extpack"],
      "application/x-virtualbox-vdi": ["vdi"],
      "application/x-virtualbox-vhd": ["vhd"],
      "application/x-virtualbox-vmdk": ["vmdk"],
      "application/x-wais-source": ["src"],
      "application/x-web-app-manifest+json": ["webapp"],
      "application/x-x509-ca-cert": ["der", "crt", "pem"],
      "application/x-xfig": ["fig"],
      "application/x-xliff+xml": ["xlf"],
      "application/x-xpinstall": ["xpi"],
      "application/x-xz": ["xz"],
      "application/x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
      "audio/vnd.dece.audio": ["uva", "uvva"],
      "audio/vnd.digital-winds": ["eol"],
      "audio/vnd.dra": ["dra"],
      "audio/vnd.dts": ["dts"],
      "audio/vnd.dts.hd": ["dtshd"],
      "audio/vnd.lucent.voice": ["lvp"],
      "audio/vnd.ms-playready.media.pya": ["pya"],
      "audio/vnd.nuera.ecelp4800": ["ecelp4800"],
      "audio/vnd.nuera.ecelp7470": ["ecelp7470"],
      "audio/vnd.nuera.ecelp9600": ["ecelp9600"],
      "audio/vnd.rip": ["rip"],
      "audio/x-aac": ["aac"],
      "audio/x-aiff": ["aif", "aiff", "aifc"],
      "audio/x-caf": ["caf"],
      "audio/x-flac": ["flac"],
      "audio/x-m4a": ["*m4a"],
      "audio/x-matroska": ["mka"],
      "audio/x-mpegurl": ["m3u"],
      "audio/x-ms-wax": ["wax"],
      "audio/x-ms-wma": ["wma"],
      "audio/x-pn-realaudio": ["ram", "ra"],
      "audio/x-pn-realaudio-plugin": ["rmp"],
      "audio/x-realaudio": ["*ra"],
      "audio/x-wav": ["*wav"],
      "chemical/x-cdx": ["cdx"],
      "chemical/x-cif": ["cif"],
      "chemical/x-cmdf": ["cmdf"],
      "chemical/x-cml": ["cml"],
      "chemical/x-csml": ["csml"],
      "chemical/x-xyz": ["xyz"],
      "image/prs.btif": ["btif"],
      "image/prs.pti": ["pti"],
      "image/vnd.adobe.photoshop": ["psd"],
      "image/vnd.airzip.accelerator.azv": ["azv"],
      "image/vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
      "image/vnd.djvu": ["djvu", "djv"],
      "image/vnd.dvb.subtitle": ["*sub"],
      "image/vnd.dwg": ["dwg"],
      "image/vnd.dxf": ["dxf"],
      "image/vnd.fastbidsheet": ["fbs"],
      "image/vnd.fpx": ["fpx"],
      "image/vnd.fst": ["fst"],
      "image/vnd.fujixerox.edmics-mmr": ["mmr"],
      "image/vnd.fujixerox.edmics-rlc": ["rlc"],
      "image/vnd.microsoft.icon": ["ico"],
      "image/vnd.ms-modi": ["mdi"],
      "image/vnd.ms-photo": ["wdp"],
      "image/vnd.net-fpx": ["npx"],
      "image/vnd.tencent.tap": ["tap"],
      "image/vnd.valve.source.texture": ["vtf"],
      "image/vnd.wap.wbmp": ["wbmp"],
      "image/vnd.xiff": ["xif"],
      "image/vnd.zbrush.pcx": ["pcx"],
      "image/x-3ds": ["3ds"],
      "image/x-cmu-raster": ["ras"],
      "image/x-cmx": ["cmx"],
      "image/x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
      "image/x-icon": ["*ico"],
      "image/x-jng": ["jng"],
      "image/x-mrsid-image": ["sid"],
      "image/x-ms-bmp": ["*bmp"],
      "image/x-pcx": ["*pcx"],
      "image/x-pict": ["pic", "pct"],
      "image/x-portable-anymap": ["pnm"],
      "image/x-portable-bitmap": ["pbm"],
      "image/x-portable-graymap": ["pgm"],
      "image/x-portable-pixmap": ["ppm"],
      "image/x-rgb": ["rgb"],
      "image/x-tga": ["tga"],
      "image/x-xbitmap": ["xbm"],
      "image/x-xpixmap": ["xpm"],
      "image/x-xwindowdump": ["xwd"],
      "message/vnd.wfa.wsc": ["wsc"],
      "model/vnd.collada+xml": ["dae"],
      "model/vnd.dwf": ["dwf"],
      "model/vnd.gdl": ["gdl"],
      "model/vnd.gtw": ["gtw"],
      "model/vnd.mts": ["mts"],
      "model/vnd.opengex": ["ogex"],
      "model/vnd.parasolid.transmit.binary": ["x_b"],
      "model/vnd.parasolid.transmit.text": ["x_t"],
      "model/vnd.usdz+zip": ["usdz"],
      "model/vnd.valve.source.compiled-map": ["bsp"],
      "model/vnd.vtu": ["vtu"],
      "text/prs.lines.tag": ["dsc"],
      "text/vnd.curl": ["curl"],
      "text/vnd.curl.dcurl": ["dcurl"],
      "text/vnd.curl.mcurl": ["mcurl"],
      "text/vnd.curl.scurl": ["scurl"],
      "text/vnd.dvb.subtitle": ["sub"],
      "text/vnd.fly": ["fly"],
      "text/vnd.fmi.flexstor": ["flx"],
      "text/vnd.graphviz": ["gv"],
      "text/vnd.in3d.3dml": ["3dml"],
      "text/vnd.in3d.spot": ["spot"],
      "text/vnd.sun.j2me.app-descriptor": ["jad"],
      "text/vnd.wap.wml": ["wml"],
      "text/vnd.wap.wmlscript": ["wmls"],
      "text/x-asm": ["s", "asm"],
      "text/x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
      "text/x-component": ["htc"],
      "text/x-fortran": ["f", "for", "f77", "f90"],
      "text/x-handlebars-template": ["hbs"],
      "text/x-java-source": ["java"],
      "text/x-lua": ["lua"],
      "text/x-markdown": ["mkd"],
      "text/x-nfo": ["nfo"],
      "text/x-opml": ["opml"],
      "text/x-org": ["*org"],
      "text/x-pascal": ["p", "pas"],
      "text/x-processing": ["pde"],
      "text/x-sass": ["sass"],
      "text/x-scss": ["scss"],
      "text/x-setext": ["etx"],
      "text/x-sfv": ["sfv"],
      "text/x-suse-ymp": ["ymp"],
      "text/x-uuencode": ["uu"],
      "text/x-vcalendar": ["vcs"],
      "text/x-vcard": ["vcf"],
      "video/vnd.dece.hd": ["uvh", "uvvh"],
      "video/vnd.dece.mobile": ["uvm", "uvvm"],
      "video/vnd.dece.pd": ["uvp", "uvvp"],
      "video/vnd.dece.sd": ["uvs", "uvvs"],
      "video/vnd.dece.video": ["uvv", "uvvv"],
      "video/vnd.dvb.file": ["dvb"],
      "video/vnd.fvt": ["fvt"],
      "video/vnd.mpegurl": ["mxu", "m4u"],
      "video/vnd.ms-playready.media.pyv": ["pyv"],
      "video/vnd.uvvu.mp4": ["uvu", "uvvu"],
      "video/vnd.vivo": ["viv"],
      "video/x-f4v": ["f4v"],
      "video/x-fli": ["fli"],
      "video/x-flv": ["flv"],
      "video/x-m4v": ["m4v"],
      "video/x-matroska": ["mkv", "mk3d", "mks"],
      "video/x-mng": ["mng"],
      "video/x-ms-asf": ["asf", "asx"],
      "video/x-ms-vob": ["vob"],
      "video/x-ms-wm": ["wm"],
      "video/x-ms-wmv": ["wmv"],
      "video/x-ms-wmx": ["wmx"],
      "video/x-ms-wvx": ["wvx"],
      "video/x-msvideo": ["avi"],
      "video/x-sgi-movie": ["movie"],
      "video/x-smv": ["smv"],
      "x-conference/x-cooltalk": ["ice"],
      "application/x-msi": "msi",
      "application/x-ms": "ms",
      "application/vnd.geo+json": "geojson",
      "application/vnd.debian.binary-package": "deb",
      "application/font-woff": "woff",
      "application/font-woff2": "woff2",
      "application/x-font-ttf": ["ttc", "ttf"],
      "font/opentype": "otf",
      "application/x-bb-appworld": "bbaw",
      "application/x-cd-image": "iso",
      "application/x-opera-extension": "oex",
      "application/x-ms-dos-executable": "exe",
      "text/vnd.rim.location.xloc": "xloc",
      "application/x-desktop": "desktop",
      "application/x-typescript": "ts",
      "application/x-java-archive": "jar",
      "application/x-sharedlib": "so"
    },
        a = n(17),
        s = n.n(a),
        c = n(27),
        p = n(28),
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i,
        l = function l(t) {
      return btoa(p.ArrayBuffer.hash(t, !0));
    },
        f = function f(t, e) {
      void 0 === e && (e = !1);
      var n = btoa(t);
      return e ? n.replace(/\//g, "_").replace(/\+/g, "-") : n;
    },
        d = function d() {
      return "JS-3.22.1";
    },
        m = function m() {
      return navigator && navigator.userAgent && u.test(navigator.userAgent);
    },
        h = function h() {
      return navigator && navigator.userAgent && /\[FB.*;/i.test(navigator.userAgent);
    },
        y = function y(t, e) {
      var n = t.urls.cdnUrl;

      if (e && (0 === e.indexOf("src:") || 0 === e.indexOf("http"))) {
        if (!t.apikey) throw new Error("Api key is required when storage alias is provided");
        return n + "/" + t.apikey;
      }

      return n;
    },
        v = function v(t, e) {
      if (!e) return t;
      var n = /filestackapi.com|filestackcontent.com/i;
      return Object.keys(t).forEach(function (i) {
        t[i] = t[i].replace(n, e);
      }), t;
    },
        g = function g(t) {
      var e = Object(r.a)({}, t);
      return Object.keys(e).forEach(function (t) {
        return !e[t] && "boolean" != typeof e[t] && delete e[t];
      }), e;
    },
        b = function b() {
      var t = Date.now();
      return i = t === i ? t + 1 : t;
    },
        x = function x(t) {
      return void 0 === t && (t = 10), new Array(t).join().replace(/(.|$)/g, function () {
        return (36 * Math.random() | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"]();
      });
    },
        k = function k(t, e) {
      var n = s()(t);
      if (n && -1 === ["text/plain", "application/octet-stream", "application/x-ms", "application/x-msi", "application/zip"].indexOf(n.mime)) return n.mime;

      if (e && e.indexOf(".") > -1) {
        var i = w(e);
        if (i) return i;
      }

      try {
        if (c(t)) return "text/plain";
      } catch (t) {
        console.warn("Additional mimetype checks (text/plain) are currently not supported for browsers");
      }

      return n ? n.mime : "application/octet-stream";
    },
        w = function w(t) {
      if (t && 0 !== t.length) {
        if (2 === t.split("/").length) return t;
        t.indexOf(".") > -1 && (t = t.split(".").pop());

        for (var e = Object.keys(o), n = e.length, i = 0; i < n; i++) {
          if (o[e[i]].indexOf(t) > -1) return e[i];
        }
      }
    },
        _ = function _(t, e) {
      if (void 0 === e && (e = !0), "boolean" == typeof e && !e) return t;
      var n,
          i = "boolean" != typeof e && e.replacement ? e.replacement : "-",
          r = "boolean" != typeof e && e.exclude ? e.exclude : ["\\", "{", "}", "|", "%", "`", '"', "'", "~", "[", "]", "#", "|", "^", "<", ">"];
      if (!t || 0 === t.length) return "undefined";
      var o = t.split(".");
      return o.length > 1 && (n = o.pop()), o.join(".").split("").map(function (t) {
        return r.indexOf(t) > -1 ? i : t;
      }).join("") + (n ? "." + n : "");
    },
        j = function j(t, e) {
      return e && 0 !== e.length ? 0 === Object.keys(t).length ? t : Object.keys(t).filter(function (t) {
        return e.indexOf(t) > -1;
      }).reduce(function (e, n) {
        var i;
        return Object(r.a)(Object(r.a)({}, e), ((i = {})[n] = t[n], i));
      }, {}) : t;
    },
        O = function t(e) {
      return e && 0 !== Object.keys(e).length ? (Object.keys(e).forEach(function (n) {
        "function" == typeof e[n] && (e[n] = void 0), e[n] === Object(e[n]) && (e[n] = t(e[n]));
      }), e) : e;
    };
  }, function (t, e, n) {
    n.d(e, "b", function () {
      return i;
    }), n.d(e, "a", function () {
      return o;
    });
    var i,
        r = n(0);
    !function (t) {
      t.ABORTED = "ABORTED", t.NETWORK = "NETWORK", t.TIMEOUT = "TIMEDOUT", t.SERVER = "SERVER", t.REQUEST = "REQUEST", t.OTHER = "OTHER", t.REDIRECT = "REDIRECT";
    }(i || (i = {}));

    var o = function (t) {
      function e(e, n, i, r) {
        var o,
            a,
            s,
            c = this.constructor,
            p = t.call(this, e) || this;
        return p.config = n, p.response = i, p.code = r, o = p, a = c.prototype, (s = Object.setPrototypeOf) ? s(o, a) : o.__proto__ = a, p;
      }

      return Object(r.c)(e, t), e;
    }(Error);
  }, function (t, e, n) {
    (function (i) {
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
          return _typeof2(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
        })(t);
      }

      e.log = function () {
        var t;
        return "object" === ("undefined" == typeof console ? "undefined" : r(console)) && console.log && (t = console).log.apply(t, arguments);
      }, e.formatArgs = function (e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
        var n = "color: " + this.color;
        e.splice(1, 0, n, "color: inherit");
        var i = 0,
            r = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (t) {
          "%%" !== t && (i++, "%c" === t && (r = i));
        }), e.splice(r, 0, n);
      }, e.save = function (t) {
        try {
          t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
        } catch (t) {}
      }, e.load = function () {
        var t;

        try {
          t = e.storage.getItem("debug");
        } catch (t) {}

        !t && void 0 !== i && "env" in i && (t = i.env.DEBUG);
        return t;
      }, e.useColors = function () {
        if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }, e.storage = function () {
        try {
          return localStorage;
        } catch (t) {}
      }(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.exports = n(41)(e), t.exports.formatters.j = function (t) {
        try {
          return JSON.stringify(t);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    }).call(this, n(26));
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    function r(t) {
      switch (Object.prototype.toString.call(t)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;

        default:
          return d(t, Error);
      }
    }

    function o(t) {
      return "[object String]" === Object.prototype.toString.call(t);
    }

    function a(t) {
      return null === t || "object" !== i(t) && "function" != typeof t;
    }

    function s(t) {
      return "[object Object]" === Object.prototype.toString.call(t);
    }

    function c(t) {
      return "undefined" != typeof Event && d(t, Event);
    }

    function p(t) {
      return "undefined" != typeof Element && d(t, Element);
    }

    function u(t) {
      return "[object RegExp]" === Object.prototype.toString.call(t);
    }

    function l(t) {
      return Boolean(t && t.then && "function" == typeof t.then);
    }

    function f(t) {
      return s(t) && "nativeEvent" in t && "preventDefault" in t && "stopPropagation" in t;
    }

    function d(t, e) {
      try {
        return t instanceof e;
      } catch (t) {
        return !1;
      }
    }

    n.d(e, "b", function () {
      return r;
    }), n.d(e, "h", function () {
      return o;
    }), n.d(e, "f", function () {
      return a;
    }), n.d(e, "e", function () {
      return s;
    }), n.d(e, "c", function () {
      return c;
    }), n.d(e, "a", function () {
      return p;
    }), n.d(e, "g", function () {
      return u;
    }), n.d(e, "j", function () {
      return l;
    }), n.d(e, "i", function () {
      return f;
    }), n.d(e, "d", function () {
      return d;
    });
  }, function (t, e, n) {
    n.d(e, "a", function () {
      return a;
    }), n.d(e, "f", function () {
      return s;
    }), n.d(e, "d", function () {
      return c;
    }), n.d(e, "b", function () {
      return p;
    }), n.d(e, "h", function () {
      return u;
    }), n.d(e, "e", function () {
      return l;
    }), n.d(e, "i", function () {
      return f;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "g", function () {
      return r;
    });

    var i = function i() {
      return !1;
    },
        r = function r() {
      return !1;
    };

    function o(t) {
      return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var a = function a(t) {
      return "[object ArrayBuffer]" === Object.prototype.toString.call(t);
    },
        s = function s(t) {
      return null !== t && "object" === o(t);
    },
        c = function c(t) {
      return "[object File]" === Object.prototype.toString.call(t);
    },
        p = function p(t) {
      return "[object Blob]" === Object.prototype.toString.call(t);
    },
        u = function u(t) {
      return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams;
    },
        l = function l(t) {
      return "undefined" != typeof FormData && t instanceof FormData;
    },
        f = function f(t) {
      return t.replace(/^\s*/, "").replace(/\s*$/, "");
    };
  }, function (t, e, n) {
    var i;
    n.d(e, "a", function () {
      return i;
    }), function (t) {
      t.GET = "GET", t.DELETE = "DELETE", t.HEAD = "HEAD", t.PURGE = "PURGE", t.OPTIONS = "OPTIONS", t.POST = "POST", t.PUT = "PUT", t.PATH = "PATH";
    }(i || (i = {}));
  }, function (t, e, n) {
    var i = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
        r = "[" + i + "][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",
        o = new RegExp("^" + r + "$");
    e.isExist = function (t) {
      return void 0 !== t;
    }, e.isEmptyObject = function (t) {
      return 0 === Object.keys(t).length;
    }, e.merge = function (t, e, n) {
      if (e) for (var i = Object.keys(e), r = i.length, o = 0; o < r; o++) {
        t[i[o]] = "strict" === n ? [e[i[o]]] : e[i[o]];
      }
    }, e.getValue = function (t) {
      return e.isExist(t) ? t : "";
    }, e.buildOptions = function (t, e, n) {
      var i = {};
      if (!t) return e;

      for (var r = 0; r < n.length; r++) {
        void 0 !== t[n[r]] ? i[n[r]] = t[n[r]] : i[n[r]] = e[n[r]];
      }

      return i;
    }, e.isName = function (t) {
      var e = o.exec(t);
      return !(null == e);
    }, e.getAllMatches = function (t, e) {
      for (var n = [], i = e.exec(t); i;) {
        for (var r = [], o = i.length, a = 0; a < o; a++) {
          r.push(i[a]);
        }

        n.push(r), i = e.exec(t);
      }

      return n;
    }, e.nameRegexp = r;
  }, function (t, e, n) {
    var i = Object.prototype.hasOwnProperty,
        r = "~";

    function o() {}

    function a(t, e, n) {
      this.fn = t, this.context = e, this.once = n || !1;
    }

    function s(t, e, n, i, o) {
      if ("function" != typeof n) throw new TypeError("The listener must be a function");
      var s = new a(n, i || t, o),
          c = r ? r + e : e;
      return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], s] : t._events[c].push(s) : (t._events[c] = s, t._eventsCount++), t;
    }

    function c(t, e) {
      0 == --t._eventsCount ? t._events = new o() : delete t._events[e];
    }

    function p() {
      this._events = new o(), this._eventsCount = 0;
    }

    Object.create && (o.prototype = Object.create(null), new o().__proto__ || (r = !1)), p.prototype.eventNames = function () {
      var t,
          e,
          n = [];
      if (0 === this._eventsCount) return n;

      for (e in t = this._events) {
        i.call(t, e) && n.push(r ? e.slice(1) : e);
      }

      return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
    }, p.prototype.listeners = function (t) {
      var e = r ? r + t : t,
          n = this._events[e];
      if (!n) return [];
      if (n.fn) return [n.fn];

      for (var i = 0, o = n.length, a = new Array(o); i < o; i++) {
        a[i] = n[i].fn;
      }

      return a;
    }, p.prototype.listenerCount = function (t) {
      var e = r ? r + t : t,
          n = this._events[e];
      return n ? n.fn ? 1 : n.length : 0;
    }, p.prototype.emit = function (t, e, n, i, o, a) {
      var s = r ? r + t : t;
      if (!this._events[s]) return !1;
      var c,
          p,
          u = this._events[s],
          l = arguments.length;

      if (u.fn) {
        switch (u.once && this.removeListener(t, u.fn, void 0, !0), l) {
          case 1:
            return u.fn.call(u.context), !0;

          case 2:
            return u.fn.call(u.context, e), !0;

          case 3:
            return u.fn.call(u.context, e, n), !0;

          case 4:
            return u.fn.call(u.context, e, n, i), !0;

          case 5:
            return u.fn.call(u.context, e, n, i, o), !0;

          case 6:
            return u.fn.call(u.context, e, n, i, o, a), !0;
        }

        for (p = 1, c = new Array(l - 1); p < l; p++) {
          c[p - 1] = arguments[p];
        }

        u.fn.apply(u.context, c);
      } else {
        var f,
            d = u.length;

        for (p = 0; p < d; p++) {
          switch (u[p].once && this.removeListener(t, u[p].fn, void 0, !0), l) {
            case 1:
              u[p].fn.call(u[p].context);
              break;

            case 2:
              u[p].fn.call(u[p].context, e);
              break;

            case 3:
              u[p].fn.call(u[p].context, e, n);
              break;

            case 4:
              u[p].fn.call(u[p].context, e, n, i);
              break;

            default:
              if (!c) for (f = 1, c = new Array(l - 1); f < l; f++) {
                c[f - 1] = arguments[f];
              }
              u[p].fn.apply(u[p].context, c);
          }
        }
      }

      return !0;
    }, p.prototype.on = function (t, e, n) {
      return s(this, t, e, n, !1);
    }, p.prototype.once = function (t, e, n) {
      return s(this, t, e, n, !0);
    }, p.prototype.removeListener = function (t, e, n, i) {
      var o = r ? r + t : t;
      if (!this._events[o]) return this;
      if (!e) return c(this, o), this;
      var a = this._events[o];
      if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || c(this, o);else {
        for (var s = 0, p = [], u = a.length; s < u; s++) {
          (a[s].fn !== e || i && !a[s].once || n && a[s].context !== n) && p.push(a[s]);
        }

        p.length ? this._events[o] = 1 === p.length ? p[0] : p : c(this, o);
      }
      return this;
    }, p.prototype.removeAllListeners = function (t) {
      var e;
      return t ? (e = r ? r + t : t, this._events[e] && c(this, e)) : (this._events = new o(), this._eventsCount = 0), this;
    }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prefixed = r, p.EventEmitter = p, t.exports = p;
  }, function (t, e, n) {
    (function (t) {
      n.d(e, "b", function () {
        return o;
      }), n.d(e, "c", function () {
        return a;
      }), n.d(e, "a", function () {
        return s;
      });
      var i = n(13),
          r = (n(10), {});

      function o() {
        return Object(i.b)() ? t : "undefined" != typeof window ? window : "undefined" != typeof self ? self : r;
      }

      function a() {
        var t = o(),
            e = t.crypto || t.msCrypto;

        if (void 0 !== e && e.getRandomValues) {
          var n = new Uint16Array(8);
          e.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;

          var i = function i(t) {
            for (var e = t.toString(16); e.length < 4;) {
              e = "0" + e;
            }

            return e;
          };

          return i(n[0]) + i(n[1]) + i(n[2]) + i(n[3]) + i(n[4]) + i(n[5]) + i(n[6]) + i(n[7]);
        }

        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (t) {
          var e = 16 * Math.random() | 0;
          return ("x" === t ? e : 3 & e | 8).toString(16);
        });
      }

      function s(t) {
        var e = o();
        if (!("console" in e)) return t();
        var n = e.console,
            i = {};
        ["debug", "info", "warn", "error", "log", "assert"].forEach(function (t) {
          t in e.console && n[t].__sentry_original__ && (i[t] = n[t], n[t] = n[t].__sentry_original__);
        });
        var r = t();
        return Object.keys(i).forEach(function (t) {
          n[t] = i[t];
        }), r;
      }
    }).call(this, n(14));
  }, function (t, e, n) {
    n.d(e, "b", function () {
      return i;
    }), n.d(e, "a", function () {
      return r;
    });
    n(4);

    function i(t, e) {
      return void 0 === e && (e = 0), "string" != typeof t || 0 === e || t.length <= e ? t : t.substr(0, e) + "...";
    }

    function r(t, e) {
      var n = t,
          i = n.length;
      if (i <= 150) return n;
      e > i && (e = i);
      var r = Math.max(e - 60, 0);
      r < 5 && (r = 0);
      var o = Math.min(r + 140, i);
      return o > i - 5 && (o = i), o === i && (r = Math.max(o - 140, 0)), n = n.slice(r, o), r > 0 && (n = "'{snip} " + n), o < i && (n += " {snip}"), n;
    }
  }, function (t, e, n) {
    n.d(e, "b", function () {
      return o;
    }), n.d(e, "d", function () {
      return d;
    }), n.d(e, "c", function () {
      return h;
    }), n.d(e, "a", function () {
      return v;
    }), n.d(e, "e", function () {
      return b.a;
    });

    var i = n(5),
        r = ["expires", "from", "host", "if-modified-since", "if-unmodified-since", "age", "authorization", "content-length", "content-type", "etag", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
        o = function o(t) {
      var e,
          n,
          o,
          a = {};
      return t ? (t.split("\n").forEach(function (t) {
        o = t.indexOf(":"), e = Object(i.i)(t.substr(0, o)).toLowerCase(), n = Object(i.i)(t.substr(o + 1)), e && (a[e] && r.indexOf(e) >= 0 || (a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n));
      }), a) : a;
    },
        a = function a(t, e, n, i) {
      void 0 === i && (i = !1);
      var r = s(e);
      return t || (t = {}), void 0 === (t = JSON.parse(JSON.stringify(t)))[e] && void 0 === t[r] ? t[r] = n : i && (delete t[e], t[r] = n), t;
    },
        s = function s(t) {
      var e = {
        "content-md5": "Content-MD5",
        dnt: "DNT",
        etag: "ETag",
        "last-event-id": "Last-Event-ID",
        tcn: "TCN",
        te: "TE",
        "www-authenticate": "WWW-Authenticate",
        "x-dnsprefetch-control": "X-DNSPrefetch-Control"
      }[t.toLowerCase()];
      return e || t.split("-").map(function (t) {
        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
      }).join("-");
    },
        c = n(0),
        p = n(1),
        u = n(21),
        l = n(3),
        f = n.n(l)()("fs:request:data"),
        d = function d(t) {
      return t = m(t), Object(i.e)(t.data) || Object(i.c)(t.data) || Object(i.g)(t.data) || Object(i.d)(t.data) || Object(i.b)(t.data) || Object(i.a)(t.data) || (Object(i.h)(t.data) ? (t.headers = a(t.headers, "content-type", "application/x-www-form-urlencoded;charset=utf-8"), t.data = t.data.toString()) : Object(i.f)(t.data) && (t.headers = a(t.headers, "content-type", "application/json", !0), t.data = JSON.stringify(t.data))), t;
    },
        m = function m(t) {
      return t.filestackHeaders ? (t.headers = a(t.headers, "filestack-source", Object(p.getVersion)()), t.headers = a(t.headers, "filestack-trace-id", Math.floor(Date.now() / 1e3) + "-" + Object(p.uniqueId)()), t.headers = a(t.headers, "filestack-trace-span", "jssdk-" + Object(p.uniqueId)()), t) : t;
    },
        h = function h(t) {
      return Object(c.b)(void 0, void 0, void 0, function () {
        var e, n;
        return Object(c.d)(this, function (r) {
          if (!t.headers || !t.headers["content-type"]) return [2, Promise.resolve(t)];
          if (e = t.headers["content-type"], /application\/json/.test(e)) try {
            t.data = JSON.parse(t.data);
          } catch (e) {
            f("Cannot parse response %O - %O", t.data, t.headers);
          } else /text\/(plain|html)/.test(e) ? Object(i.c)(t.data) && (t.data = y(t.data)) : /application\/xml/.test(e) && (n = t.data, Object(i.c)(t.data) && (n = y(t.data)), !0 === u.validate(n) && (t.data = u.parse(n, {
            ignoreAttributes: !0,
            trimValues: !0
          })));
          return [2, Promise.resolve(t)];
        });
      });
    };

    function y(t) {
      for (var e = new Uint16Array(t), n = e.length, i = "", r = Math.pow(2, 16) - 1, o = 0; o < n; o += r) {
        o + r > n && (r = n - o), i += String.fromCharCode.apply(null, e.subarray(o, o + r));
      }

      return i;
    }

    var v = function v(t, e) {
      if (!e) return t;
      var n = g(e),
          i = t.indexOf("#");
      return -1 !== i && (t = t.slice(0, i)), t + (-1 === t.indexOf("?") ? "?" : "&") + n;
    },
        g = function g(t) {
      return Object.keys(t).filter(function (e) {
        return e && void 0 !== t[e];
      }).map(function (e) {
        return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
      }).join("&");
    },
        b = n(16);
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var r = n(19),
        o = e.ValidationError = function (t, e, n, i, r, o) {
      i && (this.property = i), t && (this.message = t), n && (n.id ? this.schema = n.id : this.schema = n), e && (this.instance = e), this.name = r, this.argument = o, this.stack = this.toString();
    };

    o.prototype.toString = function () {
      return this.property + " " + this.message;
    };

    var a = e.ValidatorResult = function (t, e, n, i) {
      this.instance = t, this.schema = e, this.propertyPath = i.propertyPath, this.errors = [], this.throwError = n && n.throwError, this.disableFormat = n && !0 === n.disableFormat;
    };

    function s(t, e) {
      return e + ": " + t.toString() + "\n";
    }

    a.prototype.addError = function (t) {
      var e;
      if ("string" == typeof t) e = new o(t, this.instance, this.schema, this.propertyPath);else {
        if (!t) throw new Error("Missing error detail");
        if (!t.message) throw new Error("Missing error message");
        if (!t.name) throw new Error("Missing validator type");
        e = new o(t.message, this.instance, this.schema, this.propertyPath, t.name, t.argument);
      }
      if (this.throwError) throw e;
      return this.errors.push(e), e;
    }, a.prototype.importErrors = function (t) {
      "string" == typeof t || t && t.validatorType ? this.addError(t) : t && t.errors && Array.prototype.push.apply(this.errors, t.errors);
    }, a.prototype.toString = function (t) {
      return this.errors.map(s).join("");
    }, Object.defineProperty(a.prototype, "valid", {
      get: function get() {
        return !this.errors.length;
      }
    });

    var c = e.SchemaError = function t(e, n) {
      this.message = e, this.schema = n, Error.call(this, e), Error.captureStackTrace(this, t);
    };

    c.prototype = Object.create(Error.prototype, {
      constructor: {
        value: c,
        enumerable: !1
      },
      name: {
        value: "SchemaError",
        enumerable: !1
      }
    });

    var p = e.SchemaContext = function (t, e, n, i, r) {
      this.schema = t, this.options = e, this.propertyPath = n, this.base = i, this.schemas = r;
    };

    p.prototype.resolve = function (t) {
      return r.resolve(this.base, t);
    }, p.prototype.makeChild = function (t, e) {
      var n = void 0 === e ? this.propertyPath : this.propertyPath + l(e),
          i = r.resolve(this.base, t.id || ""),
          o = new p(t, this.options, n, i, Object.create(this.schemas));
      return t.id && !o.schemas[i] && (o.schemas[i] = t), o;
    };
    var u = e.FORMAT_REGEXPS = {
      "date-time": /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
      date: /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
      time: /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,
      email: /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
      "ip-address": /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      ipv6: /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
      uri: /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,
      color: /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,
      hostname: /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
      "host-name": /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
      alpha: /^[a-zA-Z]+$/,
      alphanumeric: /^[a-zA-Z0-9]+$/,
      "utc-millisec": function utcMillisec(t) {
        return "string" == typeof t && parseFloat(t) === parseInt(t, 10) && !isNaN(t);
      },
      regex: function regex(t) {
        var e = !0;

        try {
          new RegExp(t);
        } catch (t) {
          e = !1;
        }

        return e;
      },
      style: /\s*(.+?):\s*([^;]+);?/,
      phone: /^\+(?:[0-9] ?){6,14}[0-9]$/
    };
    u.regexp = u.regex, u.pattern = u.regex, u.ipv4 = u["ip-address"], e.isFormat = function (t, e, n) {
      if ("string" == typeof t && void 0 !== u[e]) {
        if (u[e] instanceof RegExp) return u[e].test(t);
        if ("function" == typeof u[e]) return u[e](t);
      } else if (n && n.customFormats && "function" == typeof n.customFormats[e]) return n.customFormats[e](t);

      return !0;
    };

    var l = e.makeSuffix = function (t) {
      return (t = t.toString()).match(/[.\s\[\]]/) || t.match(/^[\d]/) ? t.match(/^\d+$/) ? "[" + t + "]" : "[" + JSON.stringify(t) + "]" : "." + t;
    };

    function f(t, e, n, r) {
      "object" === i(n) ? e[r] = h(t[r], n) : -1 === t.indexOf(n) && e.push(n);
    }

    function d(t, e, n) {
      e[n] = t[n];
    }

    function m(t, e, n, r) {
      "object" === i(e[r]) && e[r] && t[r] ? n[r] = h(t[r], e[r]) : n[r] = e[r];
    }

    function h(t, e) {
      var n = Array.isArray(e),
          r = n && [] || {};
      return n ? (t = t || [], r = r.concat(t), e.forEach(f.bind(null, t, r))) : (t && "object" === i(t) && Object.keys(t).forEach(d.bind(null, t, r)), Object.keys(e).forEach(m.bind(null, t, e, r))), r;
    }

    function y(t) {
      return "/" + encodeURIComponent(t).replace(/~/g, "%7E");
    }

    e.deepCompareStrict = function t(e, n) {
      if (i(e) !== i(n)) return !1;
      if (e instanceof Array) return n instanceof Array && e.length === n.length && e.every(function (i, r) {
        return t(e[r], n[r]);
      });

      if ("object" === i(e)) {
        if (!e || !n) return e === n;
        var r = Object.keys(e),
            o = Object.keys(n);
        return r.length === o.length && r.every(function (i) {
          return t(e[i], n[i]);
        });
      }

      return e === n;
    }, t.exports.deepMerge = h, e.objectGetPath = function (t, e) {
      for (var n, i = e.split("/").slice(1); "string" == typeof (n = i.shift());) {
        var r = decodeURIComponent(n.replace(/~0/, "~").replace(/~1/g, "/"));
        if (!(r in t)) return;
        t = t[r];
      }

      return t;
    }, e.encodePath = function (t) {
      return t.map(y).join("");
    }, e.getDecimalPlaces = function (t) {
      var e = 0;
      if (isNaN(t)) return e;
      "number" != typeof t && (t = Number(t));
      var n = t.toString().split("e");

      if (2 === n.length) {
        if ("-" !== n[1][0]) return e;
        e = Number(n[1].slice(1));
      }

      var i = n[0].split(".");
      return 2 === i.length && (e += i[1].length), e;
    };
  }, function (t, e, n) {
    (function (t) {
      function i() {
        return "[object process]" === Object.prototype.toString.call(void 0 !== t ? t : 0);
      }

      function r(t, e) {
        return t.require(e);
      }

      n.d(e, "b", function () {
        return i;
      }), n.d(e, "a", function () {
        return r;
      });
    }).call(this, n(26));
  }, function (t, e) {
    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var i;

    i = function () {
      return this;
    }();

    try {
      i = i || new Function("return this")();
    } catch (t) {
      "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window);
    }

    t.exports = i;
  }, function (t, e, n) {
    var i = n(7),
        r = n(7).buildOptions,
        o = n(45),
        a = 1,
        s = 2,
        c = 3,
        p = 4,
        u = "<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g, i.nameRegexp);
    !Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt), !Number.parseFloat && window.parseFloat && (Number.parseFloat = window.parseFloat);
    var l = {
      attributeNamePrefix: "@_",
      attrNodeName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      ignoreNameSpace: !1,
      allowBooleanAttributes: !1,
      parseNodeValue: !0,
      parseAttributeValue: !1,
      arrayMode: !1,
      trimValues: !0,
      cdataTagName: !1,
      cdataPositionChar: "\\c",
      tagValueProcessor: function tagValueProcessor(t, e) {
        return t;
      },
      attrValueProcessor: function attrValueProcessor(t, e) {
        return t;
      },
      stopNodes: []
    };
    e.defaultOptions = l;
    var f = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "ignoreNameSpace", "allowBooleanAttributes", "parseNodeValue", "parseAttributeValue", "arrayMode", "trimValues", "cdataTagName", "cdataPositionChar", "tagValueProcessor", "attrValueProcessor", "parseTrueNumberOnly", "stopNodes"];
    e.props = f;

    function d(t, e, n) {
      var i = t[7] || n,
          r = t[12];
      return r && (e.trimValues && (r = r.trim()), r = y(r = e.tagValueProcessor(r, i), e.parseNodeValue, e.parseTrueNumberOnly)), r;
    }

    function m(t) {
      return "]]>" === t[4] ? p : "/" === t[10] ? s : void 0 !== t[8] && "/" === t[8].substr(t[8].length - 1) ? c : a;
    }

    function h(t, e) {
      if (e.ignoreNameSpace) {
        var n = t.split(":"),
            i = "/" === t.charAt(0) ? "/" : "";
        if ("xmlns" === n[0]) return "";
        2 === n.length && (t = i + n[1]);
      }

      return t;
    }

    function y(t, e, n) {
      var r;
      return e && "string" == typeof t ? ("" === t.trim() || isNaN(t) ? r = "true" === t || "false" !== t && t : (-1 !== t.indexOf("0x") ? r = Number.parseInt(t, 16) : -1 !== t.indexOf(".") ? (r = Number.parseFloat(t), t = t.replace(/0+$/, "")) : r = Number.parseInt(t, 10), n && (r = String(r) === t ? r : t)), r) : i.isExist(t) ? t : "";
    }

    var v = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?", "g");

    function g(t, e) {
      if (!e.ignoreAttributes && "string" == typeof t) {
        t = t.replace(/\r?\n/g, " ");

        for (var n = i.getAllMatches(t, v), r = n.length, o = {}, a = 0; a < r; a++) {
          var s = h(n[a][1], e);
          s.length && (void 0 !== n[a][4] ? (e.trimValues && (n[a][4] = n[a][4].trim()), n[a][4] = e.attrValueProcessor(n[a][4], s), o[e.attributeNamePrefix + s] = y(n[a][4], e.parseAttributeValue, e.parseTrueNumberOnly)) : e.allowBooleanAttributes && (o[e.attributeNamePrefix + s] = !0));
        }

        if (!Object.keys(o).length) return;

        if (e.attrNodeName) {
          var c = {};
          return c[e.attrNodeName] = o, c;
        }

        return o;
      }
    }

    e.getTraversalObj = function (t, e) {
      e = r(e, l, f), t = t.replace(/<!--[\s\S]*?-->/g, "");

      for (var n = new o("!xml"), a = n, h = new RegExp(u, "g"), y = h.exec(t), v = h.exec(t); y;) {
        var b = m(y);
        if (b === s) a.parent && y[12] && (a.parent.val = i.getValue(a.parent.val) + "" + d(y, e, a.parent.tagname)), e.stopNodes.length && e.stopNodes.includes(a.tagname) && (a.child = [], null == a.attrsMap && (a.attrsMap = {}), a.val = t.substr(a.startIndex + 1, y.index - a.startIndex - 1)), a = a.parent;else if (b === p) {
          if (e.cdataTagName) {
            var x = new o(e.cdataTagName, a, y[3]);
            x.attrsMap = g(y[8], e), a.addChild(x), a.val = i.getValue(a.val) + e.cdataPositionChar, y[12] && (a.val += d(y, e));
          } else a.val = (a.val || "") + (y[3] || "") + d(y, e);
        } else if (b === c) {
          a && y[12] && (a.val = i.getValue(a.val) + "" + d(y, e));
          var k = new o(e.ignoreNameSpace ? y[7] : y[5], a, "");
          y[8] && y[8].length > 0 && (y[8] = y[8].substr(0, y[8].length - 1)), k.attrsMap = g(y[8], e), a.addChild(k);
        } else {
          var w = new o(e.ignoreNameSpace ? y[7] : y[5], a, d(y, e));
          e.stopNodes.length && e.stopNodes.includes(w.tagname) && (w.startIndex = y.index + y[1].length), w.attrsMap = g(y[8], e), a.addChild(w), a = w;
        }
        y = v, v = h.exec(t);
      }

      return n;
    };
  }, function (t, e, n) {
    n.d(e, "a", function () {
      return a;
    });

    var i = n(2),
        r = n(3),
        o = n.n(r)()("fs:request:shouldRetry"),
        a = function a(t) {
      switch (o("Checking error for retry. Code: %n, type: %s", t.response ? t.response.status : "Malformed response", t.code), t.code) {
        case i.b.NETWORK:
        case i.b.SERVER:
        case i.b.TIMEOUT:
          return !0;

        case i.b.ABORTED:
          return !1;
      }

      return !!t.response && 500 <= t.response.status && t.response.status <= 599;
    };
  }, function (module, exports, __webpack_require__) {
    function _typeof(t) {
      return (_typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    function _toConsumableArray(t) {
      return _arrayWithoutHoles(t) || _iterableToArray(t) || _nonIterableSpread();
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _iterableToArray(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
    }

    function _arrayWithoutHoles(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }
    }

    var toBytes = function toBytes(t) {
      return _toConsumableArray(t).map(function (t) {
        return t.charCodeAt(0);
      });
    },
        xpiZipFilename = toBytes("META-INF/mozilla.rsa"),
        oxmlContentTypes = toBytes("[Content_Types].xml"),
        oxmlRels = toBytes("_rels/.rels");

    function readUInt64LE(t) {
      for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = t[e], i = 1, r = 0; ++r < 8;) {
        i *= 256, n += t[e + r] * i;
      }

      return n;
    }

    var fileType = function fileType(t) {
      if (!(t instanceof Uint8Array || t instanceof ArrayBuffer || Buffer.isBuffer(t))) throw new TypeError("Expected the `input` argument to be of type `Uint8Array` or `Buffer` or `ArrayBuffer`, got `".concat(_typeof(t), "`"));
      var e = t instanceof Uint8Array ? t : new Uint8Array(t);
      if (!(e && e.length > 1)) return null;

      var n = function n(t, _n) {
        _n = Object.assign({
          offset: 0
        }, _n);

        for (var i = 0; i < t.length; i++) {
          if (_n.mask) {
            if (t[i] !== (_n.mask[i] & e[i + _n.offset])) return !1;
          } else if (t[i] !== e[i + _n.offset]) return !1;
        }

        return !0;
      },
          i = function i(t, e) {
        return n(toBytes(t), e);
      };

      if (n([255, 216, 255])) return {
        ext: "jpg",
        mime: "image/jpeg"
      };
      if (n([137, 80, 78, 71, 13, 10, 26, 10])) return {
        ext: "png",
        mime: "image/png"
      };
      if (n([71, 73, 70])) return {
        ext: "gif",
        mime: "image/gif"
      };
      if (n([87, 69, 66, 80], {
        offset: 8
      })) return {
        ext: "webp",
        mime: "image/webp"
      };
      if (n([70, 76, 73, 70])) return {
        ext: "flif",
        mime: "image/flif"
      };
      if ((n([73, 73, 42, 0]) || n([77, 77, 0, 42])) && n([67, 82], {
        offset: 8
      })) return {
        ext: "cr2",
        mime: "image/x-canon-cr2"
      };
      if (n([73, 73, 42, 0]) || n([77, 77, 0, 42])) return {
        ext: "tif",
        mime: "image/tiff"
      };
      if (n([66, 77])) return {
        ext: "bmp",
        mime: "image/bmp"
      };
      if (n([73, 73, 188])) return {
        ext: "jxr",
        mime: "image/vnd.ms-photo"
      };
      if (n([56, 66, 80, 83])) return {
        ext: "psd",
        mime: "image/vnd.adobe.photoshop"
      };

      if (n([80, 75, 3, 4])) {
        if (n([109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43, 122, 105, 112], {
          offset: 30
        })) return {
          ext: "epub",
          mime: "application/epub+zip"
        };
        if (n(xpiZipFilename, {
          offset: 30
        })) return {
          ext: "xpi",
          mime: "application/x-xpinstall"
        };
        if (i("mimetypeapplication/vnd.oasis.opendocument.text", {
          offset: 30
        })) return {
          ext: "odt",
          mime: "application/vnd.oasis.opendocument.text"
        };
        if (i("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", {
          offset: 30
        })) return {
          ext: "ods",
          mime: "application/vnd.oasis.opendocument.spreadsheet"
        };
        if (i("mimetypeapplication/vnd.oasis.opendocument.presentation", {
          offset: 30
        })) return {
          ext: "odp",
          mime: "application/vnd.oasis.opendocument.presentation"
        };

        var r = function r(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return t.findIndex(function (t, n, i) {
            return n >= e && 80 === i[n] && 75 === i[n + 1] && 3 === i[n + 2] && 4 === i[n + 3];
          });
        },
            o = 0,
            a = !1,
            s = null;

        do {
          var c = o + 30;
          if (a || (a = n(oxmlContentTypes, {
            offset: c
          }) || n(oxmlRels, {
            offset: c
          })), s || (i("word/", {
            offset: c
          }) ? s = {
            ext: "docx",
            mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          } : i("ppt/", {
            offset: c
          }) ? s = {
            ext: "pptx",
            mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
          } : i("xl/", {
            offset: c
          }) && (s = {
            ext: "xlsx",
            mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          })), a && s) return s;
          o = r(e, c);
        } while (o >= 0);

        if (s) return s;
      }

      if (n([80, 75]) && (3 === e[2] || 5 === e[2] || 7 === e[2]) && (4 === e[3] || 6 === e[3] || 8 === e[3])) return {
        ext: "zip",
        mime: "application/zip"
      };
      if (n([117, 115, 116, 97, 114], {
        offset: 257
      })) return {
        ext: "tar",
        mime: "application/x-tar"
      };
      if (n([82, 97, 114, 33, 26, 7]) && (0 === e[6] || 1 === e[6])) return {
        ext: "rar",
        mime: "application/x-rar-compressed"
      };
      if (n([31, 139, 8])) return {
        ext: "gz",
        mime: "application/gzip"
      };
      if (n([66, 90, 104])) return {
        ext: "bz2",
        mime: "application/x-bzip2"
      };
      if (n([55, 122, 188, 175, 39, 28])) return {
        ext: "7z",
        mime: "application/x-7z-compressed"
      };
      if (n([120, 1])) return {
        ext: "dmg",
        mime: "application/x-apple-diskimage"
      };
      if (n([51, 103, 112, 53]) || n([0, 0, 0]) && n([102, 116, 121, 112], {
        offset: 4
      }) && (n([109, 112, 52, 49], {
        offset: 8
      }) || n([109, 112, 52, 50], {
        offset: 8
      }) || n([105, 115, 111, 109], {
        offset: 8
      }) || n([105, 115, 111, 50], {
        offset: 8
      }) || n([109, 109, 112, 52], {
        offset: 8
      }) || n([77, 52, 86], {
        offset: 8
      }) || n([100, 97, 115, 104], {
        offset: 8
      }))) return {
        ext: "mp4",
        mime: "video/mp4"
      };
      if (n([77, 84, 104, 100])) return {
        ext: "mid",
        mime: "audio/midi"
      };

      if (n([26, 69, 223, 163])) {
        var p = e.subarray(4, 4100),
            u = p.findIndex(function (t, e, n) {
          return 66 === n[e] && 130 === n[e + 1];
        });

        if (-1 !== u) {
          var l = u + 3,
              f = function f(t) {
            return _toConsumableArray(t).every(function (t, e) {
              return p[l + e] === t.charCodeAt(0);
            });
          };

          if (f("matroska")) return {
            ext: "mkv",
            mime: "video/x-matroska"
          };
          if (f("webm")) return {
            ext: "webm",
            mime: "video/webm"
          };
        }
      }

      if (n([0, 0, 0, 20, 102, 116, 121, 112, 113, 116, 32, 32]) || n([102, 114, 101, 101], {
        offset: 4
      }) || n([102, 116, 121, 112, 113, 116, 32, 32], {
        offset: 4
      }) || n([109, 100, 97, 116], {
        offset: 4
      }) || n([109, 111, 111, 118], {
        offset: 4
      }) || n([119, 105, 100, 101], {
        offset: 4
      })) return {
        ext: "mov",
        mime: "video/quicktime"
      };

      if (n([82, 73, 70, 70])) {
        if (n([65, 86, 73], {
          offset: 8
        })) return {
          ext: "avi",
          mime: "video/vnd.avi"
        };
        if (n([87, 65, 86, 69], {
          offset: 8
        })) return {
          ext: "wav",
          mime: "audio/vnd.wave"
        };
        if (n([81, 76, 67, 77], {
          offset: 8
        })) return {
          ext: "qcp",
          mime: "audio/qcelp"
        };
      }

      if (n([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
        var d = 30;

        do {
          var m = readUInt64LE(e, d + 16);

          if (n([145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101], {
            offset: d
          })) {
            if (n([64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {
              offset: d + 24
            })) return {
              ext: "wma",
              mime: "audio/x-ms-wma"
            };
            if (n([192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {
              offset: d + 24
            })) return {
              ext: "wmv",
              mime: "video/x-ms-asf"
            };
            break;
          }

          d += m;
        } while (d + 24 <= e.length);

        return {
          ext: "asf",
          mime: "application/vnd.ms-asf"
        };
      }

      if (n([0, 0, 1, 186]) || n([0, 0, 1, 179])) return {
        ext: "mpg",
        mime: "video/mpeg"
      };
      if (n([102, 116, 121, 112, 51, 103], {
        offset: 4
      })) return {
        ext: "3gp",
        mime: "video/3gpp"
      };

      for (var h = 0; h < 2 && h < e.length - 16; h++) {
        if (n([73, 68, 51], {
          offset: h
        }) || n([255, 226], {
          offset: h,
          mask: [255, 226]
        })) return {
          ext: "mp3",
          mime: "audio/mpeg"
        };
        if (n([255, 228], {
          offset: h,
          mask: [255, 228]
        })) return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
        if (n([255, 248], {
          offset: h,
          mask: [255, 252]
        })) return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
        if (n([255, 240], {
          offset: h,
          mask: [255, 252]
        })) return {
          ext: "mp4",
          mime: "audio/mpeg"
        };
      }

      if (n([102, 116, 121, 112, 77, 52, 65], {
        offset: 4
      })) return {
        ext: "m4a",
        mime: "audio/mp4"
      };
      if (n([79, 112, 117, 115, 72, 101, 97, 100], {
        offset: 28
      })) return {
        ext: "opus",
        mime: "audio/opus"
      };
      if (n([79, 103, 103, 83])) return n([128, 116, 104, 101, 111, 114, 97], {
        offset: 28
      }) ? {
        ext: "ogv",
        mime: "video/ogg"
      } : n([1, 118, 105, 100, 101, 111, 0], {
        offset: 28
      }) ? {
        ext: "ogm",
        mime: "video/ogg"
      } : n([127, 70, 76, 65, 67], {
        offset: 28
      }) ? {
        ext: "oga",
        mime: "audio/ogg"
      } : n([83, 112, 101, 101, 120, 32, 32], {
        offset: 28
      }) ? {
        ext: "spx",
        mime: "audio/ogg"
      } : n([1, 118, 111, 114, 98, 105, 115], {
        offset: 28
      }) ? {
        ext: "ogg",
        mime: "audio/ogg"
      } : {
        ext: "ogx",
        mime: "application/ogg"
      };
      if (n([102, 76, 97, 67])) return {
        ext: "flac",
        mime: "audio/x-flac"
      };
      if (n([77, 65, 67, 32])) return {
        ext: "ape",
        mime: "audio/ape"
      };
      if (n([119, 118, 112, 107])) return {
        ext: "wv",
        mime: "audio/wavpack"
      };
      if (n([35, 33, 65, 77, 82, 10])) return {
        ext: "amr",
        mime: "audio/amr"
      };
      if (n([37, 80, 68, 70])) return {
        ext: "pdf",
        mime: "application/pdf"
      };
      if (n([77, 90])) return {
        ext: "exe",
        mime: "application/x-msdownload"
      };
      if ((67 === e[0] || 70 === e[0]) && n([87, 83], {
        offset: 1
      })) return {
        ext: "swf",
        mime: "application/x-shockwave-flash"
      };
      if (n([123, 92, 114, 116, 102])) return {
        ext: "rtf",
        mime: "application/rtf"
      };
      if (n([0, 97, 115, 109])) return {
        ext: "wasm",
        mime: "application/wasm"
      };
      if (n([119, 79, 70, 70]) && (n([0, 1, 0, 0], {
        offset: 4
      }) || n([79, 84, 84, 79], {
        offset: 4
      }))) return {
        ext: "woff",
        mime: "font/woff"
      };
      if (n([119, 79, 70, 50]) && (n([0, 1, 0, 0], {
        offset: 4
      }) || n([79, 84, 84, 79], {
        offset: 4
      }))) return {
        ext: "woff2",
        mime: "font/woff2"
      };
      if (n([76, 80], {
        offset: 34
      }) && (n([0, 0, 1], {
        offset: 8
      }) || n([1, 0, 2], {
        offset: 8
      }) || n([2, 0, 2], {
        offset: 8
      }))) return {
        ext: "eot",
        mime: "application/vnd.ms-fontobject"
      };
      if (n([0, 1, 0, 0, 0])) return {
        ext: "ttf",
        mime: "font/ttf"
      };
      if (n([79, 84, 84, 79, 0])) return {
        ext: "otf",
        mime: "font/otf"
      };
      if (n([0, 0, 1, 0])) return {
        ext: "ico",
        mime: "image/x-icon"
      };
      if (n([0, 0, 2, 0])) return {
        ext: "cur",
        mime: "image/x-icon"
      };
      if (n([70, 76, 86, 1])) return {
        ext: "flv",
        mime: "video/x-flv"
      };
      if (n([37, 33])) return {
        ext: "ps",
        mime: "application/postscript"
      };
      if (n([253, 55, 122, 88, 90, 0])) return {
        ext: "xz",
        mime: "application/x-xz"
      };
      if (n([83, 81, 76, 105])) return {
        ext: "sqlite",
        mime: "application/x-sqlite3"
      };
      if (n([78, 69, 83, 26])) return {
        ext: "nes",
        mime: "application/x-nintendo-nes-rom"
      };
      if (n([67, 114, 50, 52])) return {
        ext: "crx",
        mime: "application/x-google-chrome-extension"
      };
      if (n([77, 83, 67, 70]) || n([73, 83, 99, 40])) return {
        ext: "cab",
        mime: "application/vnd.ms-cab-compressed"
      };
      if (n([33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110, 45, 98, 105, 110, 97, 114, 121])) return {
        ext: "deb",
        mime: "application/x-deb"
      };
      if (n([33, 60, 97, 114, 99, 104, 62])) return {
        ext: "ar",
        mime: "application/x-unix-archive"
      };
      if (n([237, 171, 238, 219])) return {
        ext: "rpm",
        mime: "application/x-rpm"
      };
      if (n([31, 160]) || n([31, 157])) return {
        ext: "Z",
        mime: "application/x-compress"
      };
      if (n([76, 90, 73, 80])) return {
        ext: "lz",
        mime: "application/x-lzip"
      };
      if (n([208, 207, 17, 224, 161, 177, 26, 225])) return {
        ext: "msi",
        mime: "application/x-msi"
      };
      if (n([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return {
        ext: "mxf",
        mime: "application/mxf"
      };
      if (n([71], {
        offset: 4
      }) && (n([71], {
        offset: 192
      }) || n([71], {
        offset: 196
      }))) return {
        ext: "mts",
        mime: "video/mp2t"
      };
      if (n([66, 76, 69, 78, 68, 69, 82])) return {
        ext: "blend",
        mime: "application/x-blender"
      };
      if (n([66, 80, 71, 251])) return {
        ext: "bpg",
        mime: "image/bpg"
      };

      if (n([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
        if (n([106, 112, 50, 32], {
          offset: 20
        })) return {
          ext: "jp2",
          mime: "image/jp2"
        };
        if (n([106, 112, 120, 32], {
          offset: 20
        })) return {
          ext: "jpx",
          mime: "image/jpx"
        };
        if (n([106, 112, 109, 32], {
          offset: 20
        })) return {
          ext: "jpm",
          mime: "image/jpm"
        };
        if (n([109, 106, 112, 50], {
          offset: 20
        })) return {
          ext: "mj2",
          mime: "image/mj2"
        };
      }

      if (n([70, 79, 82, 77])) return {
        ext: "aif",
        mime: "audio/aiff"
      };
      if (i("<?xml ")) return {
        ext: "xml",
        mime: "application/xml"
      };
      if (n([66, 79, 79, 75, 77, 79, 66, 73], {
        offset: 60
      })) return {
        ext: "mobi",
        mime: "application/x-mobipocket-ebook"
      };

      if (n([102, 116, 121, 112], {
        offset: 4
      })) {
        if (n([109, 105, 102, 49], {
          offset: 8
        })) return {
          ext: "heic",
          mime: "image/heif"
        };
        if (n([109, 115, 102, 49], {
          offset: 8
        })) return {
          ext: "heic",
          mime: "image/heif-sequence"
        };
        if (n([104, 101, 105, 99], {
          offset: 8
        }) || n([104, 101, 105, 120], {
          offset: 8
        })) return {
          ext: "heic",
          mime: "image/heic"
        };
        if (n([104, 101, 118, 99], {
          offset: 8
        }) || n([104, 101, 118, 120], {
          offset: 8
        })) return {
          ext: "heic",
          mime: "image/heic-sequence"
        };
      }

      return n([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]) ? {
        ext: "ktx",
        mime: "image/ktx"
      } : n([68, 73, 67, 77], {
        offset: 128
      }) ? {
        ext: "dcm",
        mime: "application/dicom"
      } : n([77, 80, 43]) || n([77, 80, 67, 75]) ? {
        ext: "mpc",
        mime: "audio/x-musepack"
      } : n([66, 69, 71, 73, 78, 58]) ? {
        ext: "ics",
        mime: "text/calendar"
      } : n([103, 108, 84, 70, 2, 0, 0, 0]) ? {
        ext: "glb",
        mime: "model/gltf-binary"
      } : n([212, 195, 178, 161]) || n([161, 178, 195, 212]) ? {
        ext: "pcap",
        mime: "application/vnd.tcpdump.pcap"
      } : null;
    };

    module.exports = fileType, module.exports["default"] = fileType, Object.defineProperty(fileType, "minimumBytes", {
      value: 4100
    }), module.exports.stream = function (readableStream) {
      return new Promise(function (resolve, reject) {
        var stream = eval("require")("stream");
        readableStream.once("readable", function () {
          var t = new stream.PassThrough(),
              e = readableStream.read(module.exports.minimumBytes) || readableStream.read();

          try {
            t.fileType = fileType(e);
          } catch (t) {
            reject(t);
          }

          readableStream.unshift(e), stream.pipeline ? resolve(stream.pipeline(readableStream, t, function () {})) : resolve(readableStream.pipe(t));
        });
      });
    };
  }, function (t, e, n) {
    var i = t.exports.Validator = n(34);
    t.exports.ValidatorResult = n(12).ValidatorResult, t.exports.ValidationError = n(12).ValidationError, t.exports.SchemaError = n(12).SchemaError, t.exports.SchemaScanResult = n(20).SchemaScanResult, t.exports.scan = n(20).scan, t.exports.validate = function (t, e, n) {
      return new i().validate(t, e, n);
    };
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var r = n(35),
        o = n(36);

    function a() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
    }

    e.parse = x, e.resolve = function (t, e) {
      return x(t, !1, !0).resolve(e);
    }, e.resolveObject = function (t, e) {
      return t ? x(t, !1, !0).resolveObject(e) : e;
    }, e.format = function (t) {
      o.isString(t) && (t = x(t));
      return t instanceof a ? t.format() : a.prototype.format.call(t);
    }, e.Url = a;
    var s = /^([a-z0-9.+-]+:)/i,
        c = /:[0-9]*$/,
        p = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        u = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        l = ["'"].concat(u),
        f = ["%", "/", "?", ";", "#"].concat(l),
        d = ["/", "?", "#"],
        m = /^[+a-z0-9A-Z_-]{0,63}$/,
        h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        y = {
      javascript: !0,
      "javascript:": !0
    },
        v = {
      javascript: !0,
      "javascript:": !0
    },
        g = {
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
    },
        b = n(37);

    function x(t, e, n) {
      if (t && o.isObject(t) && t instanceof a) return t;
      var i = new a();
      return i.parse(t, e, n), i;
    }

    a.prototype.parse = function (t, e, n) {
      if (!o.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + i(t));
      var a = t.indexOf("?"),
          c = -1 !== a && a < t.indexOf("#") ? "?" : "#",
          u = t.split(c);
      u[0] = u[0].replace(/\\/g, "/");
      var x = t = u.join(c);

      if (x = x.trim(), !n && 1 === t.split("#").length) {
        var k = p.exec(x);
        if (k) return this.path = x, this.href = x, this.pathname = k[1], k[2] ? (this.search = k[2], this.query = e ? b.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this;
      }

      var w = s.exec(x);

      if (w) {
        var _ = (w = w[0]).toLowerCase();

        this.protocol = _, x = x.substr(w.length);
      }

      if (n || w || x.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var j = "//" === x.substr(0, 2);
        !j || w && v[w] || (x = x.substr(2), this.slashes = !0);
      }

      if (!v[w] && (j || w && !g[w])) {
        for (var O, S, E = -1, C = 0; C < d.length; C++) {
          -1 !== (T = x.indexOf(d[C])) && (-1 === E || T < E) && (E = T);
        }

        -1 !== (S = -1 === E ? x.lastIndexOf("@") : x.lastIndexOf("@", E)) && (O = x.slice(0, S), x = x.slice(S + 1), this.auth = decodeURIComponent(O)), E = -1;

        for (C = 0; C < f.length; C++) {
          var T;
          -1 !== (T = x.indexOf(f[C])) && (-1 === E || T < E) && (E = T);
        }

        -1 === E && (E = x.length), this.host = x.slice(0, E), x = x.slice(E), this.parseHost(), this.hostname = this.hostname || "";
        var A = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
        if (!A) for (var P = this.hostname.split(/\./), F = (C = 0, P.length); C < F; C++) {
          var I = P[C];

          if (I && !I.match(m)) {
            for (var z = "", N = 0, M = I.length; N < M; N++) {
              I.charCodeAt(N) > 127 ? z += "x" : z += I[N];
            }

            if (!z.match(m)) {
              var R = P.slice(0, C),
                  $ = P.slice(C + 1),
                  q = I.match(h);
              q && (R.push(q[1]), $.unshift(q[2])), $.length && (x = "/" + $.join(".") + x), this.hostname = R.join(".");
              break;
            }
          }
        }
        this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), A || (this.hostname = r.toASCII(this.hostname));
        var U = this.port ? ":" + this.port : "",
            D = this.hostname || "";
        this.host = D + U, this.href += this.host, A && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== x[0] && (x = "/" + x));
      }

      if (!y[_]) for (C = 0, F = l.length; C < F; C++) {
        var L = l[C];

        if (-1 !== x.indexOf(L)) {
          var B = encodeURIComponent(L);
          B === L && (B = escape(L)), x = x.split(L).join(B);
        }
      }
      var V = x.indexOf("#");
      -1 !== V && (this.hash = x.substr(V), x = x.slice(0, V));
      var H = x.indexOf("?");

      if (-1 !== H ? (this.search = x.substr(H), this.query = x.substr(H + 1), e && (this.query = b.parse(this.query)), x = x.slice(0, H)) : e && (this.search = "", this.query = {}), x && (this.pathname = x), g[_] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        U = this.pathname || "";
        var W = this.search || "";
        this.path = U + W;
      }

      return this.href = this.format(), this;
    }, a.prototype.format = function () {
      var t = this.auth || "";
      t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@");
      var e = this.protocol || "",
          n = this.pathname || "",
          i = this.hash || "",
          r = !1,
          a = "";
      this.host ? r = t + this.host : this.hostname && (r = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && o.isObject(this.query) && Object.keys(this.query).length && (a = b.stringify(this.query));
      var s = this.search || a && "?" + a || "";
      return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || g[e]) && !1 !== r ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), e + r + (n = n.replace(/[?#]/g, function (t) {
        return encodeURIComponent(t);
      })) + (s = s.replace("#", "%23")) + i;
    }, a.prototype.resolve = function (t) {
      return this.resolveObject(x(t, !1, !0)).format();
    }, a.prototype.resolveObject = function (t) {
      if (o.isString(t)) {
        var e = new a();
        e.parse(t, !1, !0), t = e;
      }

      for (var n = new a(), i = Object.keys(this), r = 0; r < i.length; r++) {
        var s = i[r];
        n[s] = this[s];
      }

      if (n.hash = t.hash, "" === t.href) return n.href = n.format(), n;

      if (t.slashes && !t.protocol) {
        for (var c = Object.keys(t), p = 0; p < c.length; p++) {
          var u = c[p];
          "protocol" !== u && (n[u] = t[u]);
        }

        return g[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
      }

      if (t.protocol && t.protocol !== n.protocol) {
        if (!g[t.protocol]) {
          for (var l = Object.keys(t), f = 0; f < l.length; f++) {
            var d = l[f];
            n[d] = t[d];
          }

          return n.href = n.format(), n;
        }

        if (n.protocol = t.protocol, t.host || v[t.protocol]) n.pathname = t.pathname;else {
          for (var m = (t.pathname || "").split("/"); m.length && !(t.host = m.shift());) {
            ;
          }

          t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== m[0] && m.unshift(""), m.length < 2 && m.unshift(""), n.pathname = m.join("/");
        }

        if (n.search = t.search, n.query = t.query, n.host = t.host || "", n.auth = t.auth, n.hostname = t.hostname || t.host, n.port = t.port, n.pathname || n.search) {
          var h = n.pathname || "",
              y = n.search || "";
          n.path = h + y;
        }

        return n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
      }

      var b = n.pathname && "/" === n.pathname.charAt(0),
          x = t.host || t.pathname && "/" === t.pathname.charAt(0),
          k = x || b || n.host && t.pathname,
          w = k,
          _ = n.pathname && n.pathname.split("/") || [],
          j = (m = t.pathname && t.pathname.split("/") || [], n.protocol && !g[n.protocol]);

      if (j && (n.hostname = "", n.port = null, n.host && ("" === _[0] ? _[0] = n.host : _.unshift(n.host)), n.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === m[0] ? m[0] = t.host : m.unshift(t.host)), t.host = null), k = k && ("" === m[0] || "" === _[0])), x) n.host = t.host || "" === t.host ? t.host : n.host, n.hostname = t.hostname || "" === t.hostname ? t.hostname : n.hostname, n.search = t.search, n.query = t.query, _ = m;else if (m.length) _ || (_ = []), _.pop(), _ = _.concat(m), n.search = t.search, n.query = t.query;else if (!o.isNullOrUndefined(t.search)) {
        if (j) n.hostname = n.host = _.shift(), (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift());
        return n.search = t.search, n.query = t.query, o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n;
      }
      if (!_.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;

      for (var O = _.slice(-1)[0], S = (n.host || t.host || _.length > 1) && ("." === O || ".." === O) || "" === O, E = 0, C = _.length; C >= 0; C--) {
        "." === (O = _[C]) ? _.splice(C, 1) : ".." === O ? (_.splice(C, 1), E++) : E && (_.splice(C, 1), E--);
      }

      if (!k && !w) for (; E--; E) {
        _.unshift("..");
      }
      !k || "" === _[0] || _[0] && "/" === _[0].charAt(0) || _.unshift(""), S && "/" !== _.join("/").substr(-1) && _.push("");

      var T,
          A = "" === _[0] || _[0] && "/" === _[0].charAt(0);

      j && (n.hostname = n.host = A ? "" : _.length ? _.shift() : "", (T = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) && (n.auth = T.shift(), n.host = n.hostname = T.shift()));
      return (k = k || n.host && _.length) && !A && _.unshift(""), _.length ? n.pathname = _.join("/") : (n.pathname = null, n.path = null), o.isNull(n.pathname) && o.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = t.auth || n.auth, n.slashes = n.slashes || t.slashes, n.href = n.format(), n;
    }, a.prototype.parseHost = function () {
      var t = this.host,
          e = c.exec(t);
      e && (":" !== (e = e[0]) && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
    };
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var r = n(19),
        o = n(12);

    function a(t, e) {
      this.id = t, this.ref = e;
    }

    t.exports.SchemaScanResult = a, t.exports.scan = function (t, e) {
      function n(t, e) {
        if (e && "object" == i(e)) if (e.$ref) {
          var a = r.resolve(t, e.$ref);
          u[a] = u[a] ? u[a] + 1 : 0;
        } else {
          var l = e.id ? r.resolve(t, e.id) : t;

          if (l) {
            if (l.indexOf("#") < 0 && (l += "#"), p[l]) {
              if (!o.deepCompareStrict(p[l], e)) throw new Error("Schema <" + e + "> already exists with different definition");
              return p[l];
            }

            p[l] = e, "#" == l[l.length - 1] && (p[l.substring(0, l.length - 1)] = e);
          }

          s(l + "/items", e.items instanceof Array ? e.items : [e.items]), s(l + "/extends", e["extends"] instanceof Array ? e["extends"] : [e["extends"]]), n(l + "/additionalItems", e.additionalItems), c(l + "/properties", e.properties), n(l + "/additionalProperties", e.additionalProperties), c(l + "/definitions", e.definitions), c(l + "/patternProperties", e.patternProperties), c(l + "/dependencies", e.dependencies), s(l + "/disallow", e.disallow), s(l + "/allOf", e.allOf), s(l + "/anyOf", e.anyOf), s(l + "/oneOf", e.oneOf), n(l + "/not", e.not);
        }
      }

      function s(t, e) {
        if (e instanceof Array) for (var i = 0; i < e.length; i++) {
          n(t + "/" + i, e[i]);
        }
      }

      function c(t, e) {
        if (e && "object" == i(e)) for (var r in e) {
          n(t + "/" + r, e[r]);
        }
      }

      var p = {},
          u = {};
      return n(t, e), new a(p, u);
    };
  }, function (t, e, n) {
    var i = n(44),
        r = n(15),
        o = n(15),
        a = n(7).buildOptions,
        s = n(46);
    e.parse = function (t, e, n) {
      if (n) {
        !0 === n && (n = {});
        var c = s.validate(t, n);
        if (!0 !== c) throw Error(c.err.msg);
      }

      return e = a(e, o.defaultOptions, o.props), i.convertToJson(r.getTraversalObj(t, e), e);
    }, e.convertTonimn = n(47).convert2nimn, e.getTraversalObj = r.getTraversalObj, e.convertToJson = i.convertToJson, e.convertToJsonString = n(48).convertToJsonString, e.validate = s.validate, e.j2xParser = n(49), e.parseToNimn = function (t, n, i) {
      return e.convertTonimn(e.getTraversalObj(t, i), n, i);
    };
  }, function (t, e, n) {
    n.d(e, "a", function () {
      return r;
    });
    var i = n(4);

    function r(t) {
      try {
        for (var e = t, n = [], i = 0, r = 0, a = " > ".length, s = void 0; e && i++ < 5 && !("html" === (s = o(e)) || i > 1 && r + n.length * a + s.length >= 80);) {
          n.push(s), r += s.length, e = e.parentNode;
        }

        return n.reverse().join(" > ");
      } catch (t) {
        return "<unknown>";
      }
    }

    function o(t) {
      var e,
          n,
          r,
          o,
          a,
          s = t,
          c = [];
      if (!s || !s.tagName) return "";
      if (c.push(s.tagName.toLowerCase()), s.id && c.push("#" + s.id), (e = s.className) && Object(i.h)(e)) for (n = e.split(/\s+/), a = 0; a < n.length; a++) {
        c.push("." + n[a]);
      }
      var p = ["type", "name", "title", "alt"];

      for (a = 0; a < p.length; a++) {
        r = p[a], (o = s.getAttribute(r)) && c.push("[" + r + '="' + o + '"]');
      }

      return c.join("");
    }
  },, function (t, e) {
    t.exports = function (t) {
      return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
        enumerable: !0,
        get: function get() {
          return t.l;
        }
      }), Object.defineProperty(t, "id", {
        enumerable: !0,
        get: function get() {
          return t.i;
        }
      }), t.webpackPolyfill = 1), t;
    };
  }, function (t, e) {
    (function (e) {
      t.exports = e;
    }).call(this, {});
  }, function (t, e) {
    var n,
        i,
        r = t.exports = {};

    function o() {
      throw new Error("setTimeout has not been defined");
    }

    function a() {
      throw new Error("clearTimeout has not been defined");
    }

    function s(t) {
      if (n === setTimeout) return setTimeout(t, 0);
      if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

      try {
        return n(t, 0);
      } catch (e) {
        try {
          return n.call(null, t, 0);
        } catch (e) {
          return n.call(this, t, 0);
        }
      }
    }

    !function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        n = o;
      }

      try {
        i = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (t) {
        i = a;
      }
    }();
    var c,
        p = [],
        u = !1,
        l = -1;

    function f() {
      u && c && (u = !1, c.length ? p = c.concat(p) : l = -1, p.length && d());
    }

    function d() {
      if (!u) {
        var t = s(f);
        u = !0;

        for (var e = p.length; e;) {
          for (c = p, p = []; ++l < e;) {
            c && c[l].run();
          }

          l = -1, e = p.length;
        }

        c = null, u = !1, function (t) {
          if (i === clearTimeout) return clearTimeout(t);
          if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);

          try {
            i(t);
          } catch (e) {
            try {
              return i.call(null, t);
            } catch (e) {
              return i.call(this, t);
            }
          }
        }(t);
      }
    }

    function m(t, e) {
      this.fun = t, this.array = e;
    }

    function h() {}

    r.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }
      p.push(new m(t, e)), 1 !== p.length || u || s(d);
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function (t) {
      return [];
    }, r.binding = function (t) {
      throw new Error("process.binding is not supported");
    }, r.cwd = function () {
      return "/";
    }, r.chdir = function (t) {
      throw new Error("process.chdir is not supported");
    }, r.umask = function () {
      return 0;
    };
  }, function (t, e, n) {
    t.exports = function (t) {
      if (!t) return !1;

      for (var e = 0, n = t.length; e < n;) {
        if (t[e] <= 127) e++;else {
          if (t[e] >= 194 && t[e] <= 223) {
            if (t[e + 1] >> 6 == 2) {
              e += 2;
              continue;
            }

            return !1;
          }

          if ((224 === t[e] && t[e + 1] >= 160 && t[e + 1] <= 191 || 237 === t[e] && t[e + 1] >= 128 && t[e + 1] <= 159) && t[e + 2] >> 6 == 2) e += 3;else if ((t[e] >= 225 && t[e] <= 236 || t[e] >= 238 && t[e] <= 239) && t[e + 1] >> 6 == 2 && t[e + 2] >> 6 == 2) e += 3;else {
            if (!(240 === t[e] && t[e + 1] >= 144 && t[e + 1] <= 191 || t[e] >= 241 && t[e] <= 243 && t[e + 1] >> 6 == 2 || 244 === t[e] && t[e + 1] >= 128 && t[e + 1] <= 143) || t[e + 2] >> 6 != 2 || t[e + 3] >> 6 != 2) return !1;
            e += 4;
          }
        }
      }

      return !0;
    };
  }, function (t, e, n) {
    var i, r, o;

    function a(t) {
      return (a = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    o = function o(t) {
      var e = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

      function n(t, e) {
        var n = t[0],
            i = t[1],
            r = t[2],
            o = t[3];
        i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + e[0] - 680876936 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + e[1] - 389564586 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + e[2] + 606105819 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + e[3] - 1044525330 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + e[4] - 176418897 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + e[5] + 1200080426 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + e[6] - 1473231341 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + e[7] - 45705983 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + e[8] + 1770035416 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + e[9] - 1958414417 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + e[10] - 42063 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + e[11] - 1990404162 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & r | ~i & o) + e[12] + 1804603682 | 0) << 7 | n >>> 25) + i | 0) & i | ~n & r) + e[13] - 40341101 | 0) << 12 | o >>> 20) + n | 0) & n | ~o & i) + e[14] - 1502002290 | 0) << 17 | r >>> 15) + o | 0) & o | ~r & n) + e[15] + 1236535329 | 0) << 22 | i >>> 10) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + e[1] - 165796510 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + e[6] - 1069501632 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + e[11] + 643717713 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + e[0] - 373897302 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + e[5] - 701558691 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + e[10] + 38016083 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + e[15] - 660478335 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + e[4] - 405537848 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + e[9] + 568446438 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + e[14] - 1019803690 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + e[3] - 187363961 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + e[8] + 1163531501 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i & o | r & ~o) + e[13] - 1444681467 | 0) << 5 | n >>> 27) + i | 0) & r | i & ~r) + e[2] - 51403784 | 0) << 9 | o >>> 23) + n | 0) & i | n & ~i) + e[7] + 1735328473 | 0) << 14 | r >>> 18) + o | 0) & n | o & ~n) + e[12] - 1926607734 | 0) << 20 | i >>> 12) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + e[5] - 378558 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + e[8] - 2022574463 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + e[11] + 1839030562 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + e[14] - 35309556 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + e[1] - 1530992060 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + e[4] + 1272893353 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + e[7] - 155497632 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + e[10] - 1094730640 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + e[13] + 681279174 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + e[0] - 358537222 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + e[3] - 722521979 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + e[6] + 76029189 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((r = ((r += ((o = ((o += ((n = ((n += (i ^ r ^ o) + e[9] - 640364487 | 0) << 4 | n >>> 28) + i | 0) ^ i ^ r) + e[12] - 421815835 | 0) << 11 | o >>> 21) + n | 0) ^ n ^ i) + e[15] + 530742520 | 0) << 16 | r >>> 16) + o | 0) ^ o ^ n) + e[2] - 995338651 | 0) << 23 | i >>> 9) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + e[0] - 198630844 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + e[7] + 1126891415 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + e[14] - 1416354905 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + e[5] - 57434055 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + e[12] + 1700485571 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + e[3] - 1894986606 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + e[10] - 1051523 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + e[1] - 2054922799 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + e[8] + 1873313359 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + e[15] - 30611744 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + e[6] - 1560198380 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + e[13] + 1309151649 | 0) << 21 | i >>> 11) + r | 0, i = ((i += ((o = ((o += (i ^ ((n = ((n += (r ^ (i | ~o)) + e[4] - 145523070 | 0) << 6 | n >>> 26) + i | 0) | ~r)) + e[11] - 1120210379 | 0) << 10 | o >>> 22) + n | 0) ^ ((r = ((r += (n ^ (o | ~i)) + e[2] + 718787259 | 0) << 15 | r >>> 17) + o | 0) | ~n)) + e[9] - 343485551 | 0) << 21 | i >>> 11) + r | 0, t[0] = n + t[0] | 0, t[1] = i + t[1] | 0, t[2] = r + t[2] | 0, t[3] = o + t[3] | 0;
      }

      function i(t) {
        var e,
            n = [];

        for (e = 0; e < 64; e += 4) {
          n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
        }

        return n;
      }

      function r(t) {
        var e,
            n = [];

        for (e = 0; e < 64; e += 4) {
          n[e >> 2] = t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
        }

        return n;
      }

      function o(t) {
        var e,
            r,
            o,
            a,
            s,
            c,
            p = t.length,
            u = [1732584193, -271733879, -1732584194, 271733878];

        for (e = 64; e <= p; e += 64) {
          n(u, i(t.substring(e - 64, e)));
        }

        for (r = (t = t.substring(e - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < r; e += 1) {
          o[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
        }

        if (o[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (n(u, o), e = 0; e < 16; e += 1) {
          o[e] = 0;
        }
        return a = (a = 8 * p).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), c = parseInt(a[1], 16) || 0, o[14] = s, o[15] = c, n(u, o), u;
      }

      function a(t) {
        var n,
            i = "";

        for (n = 0; n < 4; n += 1) {
          i += e[t >> 8 * n + 4 & 15] + e[t >> 8 * n & 15];
        }

        return i;
      }

      function s(t) {
        var e;

        for (e = 0; e < t.length; e += 1) {
          t[e] = a(t[e]);
        }

        return t.join("");
      }

      function c(t) {
        return /[\u0080-\uFFFF]/.test(t) && (t = unescape(encodeURIComponent(t))), t;
      }

      function p(t) {
        var e,
            n = [],
            i = t.length;

        for (e = 0; e < i - 1; e += 2) {
          n.push(parseInt(t.substr(e, 2), 16));
        }

        return String.fromCharCode.apply(String, n);
      }

      function u() {
        this.reset();
      }

      return s(o("hello")), "undefined" == typeof ArrayBuffer || ArrayBuffer.prototype.slice || function () {
        function e(t, e) {
          return (t = 0 | t || 0) < 0 ? Math.max(t + e, 0) : Math.min(t, e);
        }

        ArrayBuffer.prototype.slice = function (n, i) {
          var r,
              o,
              a,
              s,
              c = this.byteLength,
              p = e(n, c),
              u = c;
          return i !== t && (u = e(i, c)), p > u ? new ArrayBuffer(0) : (r = u - p, o = new ArrayBuffer(r), a = new Uint8Array(o), s = new Uint8Array(this, p, r), a.set(s), o);
        };
      }(), u.prototype.append = function (t) {
        return this.appendBinary(c(t)), this;
      }, u.prototype.appendBinary = function (t) {
        this._buff += t, this._length += t.length;
        var e,
            r = this._buff.length;

        for (e = 64; e <= r; e += 64) {
          n(this._hash, i(this._buff.substring(e - 64, e)));
        }

        return this._buff = this._buff.substring(e - 64), this;
      }, u.prototype.end = function (t) {
        var e,
            n,
            i = this._buff,
            r = i.length,
            o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (e = 0; e < r; e += 1) {
          o[e >> 2] |= i.charCodeAt(e) << (e % 4 << 3);
        }

        return this._finish(o, r), n = s(this._hash), t && (n = p(n)), this.reset(), n;
      }, u.prototype.reset = function () {
        return this._buff = "", this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
      }, u.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash
        };
      }, u.prototype.setState = function (t) {
        return this._buff = t.buff, this._length = t.length, this._hash = t.hash, this;
      }, u.prototype.destroy = function () {
        delete this._hash, delete this._buff, delete this._length;
      }, u.prototype._finish = function (t, e) {
        var i,
            r,
            o,
            a = e;
        if (t[a >> 2] |= 128 << (a % 4 << 3), a > 55) for (n(this._hash, t), a = 0; a < 16; a += 1) {
          t[a] = 0;
        }
        i = (i = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/), r = parseInt(i[2], 16), o = parseInt(i[1], 16) || 0, t[14] = r, t[15] = o, n(this._hash, t);
      }, u.hash = function (t, e) {
        return u.hashBinary(c(t), e);
      }, u.hashBinary = function (t, e) {
        var n = s(o(t));
        return e ? p(n) : n;
      }, u.ArrayBuffer = function () {
        this.reset();
      }, u.ArrayBuffer.prototype.append = function (t) {
        var e,
            i,
            o,
            a,
            s,
            c = (i = this._buff.buffer, o = t, a = !0, (s = new Uint8Array(i.byteLength + o.byteLength)).set(new Uint8Array(i)), s.set(new Uint8Array(o), i.byteLength), a ? s : s.buffer),
            p = c.length;

        for (this._length += t.byteLength, e = 64; e <= p; e += 64) {
          n(this._hash, r(c.subarray(e - 64, e)));
        }

        return this._buff = e - 64 < p ? new Uint8Array(c.buffer.slice(e - 64)) : new Uint8Array(0), this;
      }, u.ArrayBuffer.prototype.end = function (t) {
        var e,
            n,
            i = this._buff,
            r = i.length,
            o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        for (e = 0; e < r; e += 1) {
          o[e >> 2] |= i[e] << (e % 4 << 3);
        }

        return this._finish(o, r), n = s(this._hash), t && (n = p(n)), this.reset(), n;
      }, u.ArrayBuffer.prototype.reset = function () {
        return this._buff = new Uint8Array(0), this._length = 0, this._hash = [1732584193, -271733879, -1732584194, 271733878], this;
      }, u.ArrayBuffer.prototype.getState = function () {
        var t,
            e = u.prototype.getState.call(this);
        return e.buff = (t = e.buff, String.fromCharCode.apply(null, new Uint8Array(t))), e;
      }, u.ArrayBuffer.prototype.setState = function (t) {
        return t.buff = function (t, e) {
          var n,
              i = t.length,
              r = new ArrayBuffer(i),
              o = new Uint8Array(r);

          for (n = 0; n < i; n += 1) {
            o[n] = t.charCodeAt(n);
          }

          return e ? o : r;
        }(t.buff, !0), u.prototype.setState.call(this, t);
      }, u.ArrayBuffer.prototype.destroy = u.prototype.destroy, u.ArrayBuffer.prototype._finish = u.prototype._finish, u.ArrayBuffer.hash = function (t, e) {
        var i = s(function (t) {
          var e,
              i,
              o,
              a,
              s,
              c,
              p = t.length,
              u = [1732584193, -271733879, -1732584194, 271733878];

          for (e = 64; e <= p; e += 64) {
            n(u, r(t.subarray(e - 64, e)));
          }

          for (i = (t = e - 64 < p ? t.subarray(e - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], e = 0; e < i; e += 1) {
            o[e >> 2] |= t[e] << (e % 4 << 3);
          }

          if (o[e >> 2] |= 128 << (e % 4 << 3), e > 55) for (n(u, o), e = 0; e < 16; e += 1) {
            o[e] = 0;
          }
          return a = (a = 8 * p).toString(16).match(/(.*?)(.{0,8})$/), s = parseInt(a[2], 16), c = parseInt(a[1], 16) || 0, o[14] = s, o[15] = c, n(u, o), u;
        }(new Uint8Array(t)));
        return e ? p(i) : i;
      }, u;
    }, "object" === a(e) ? t.exports = o() : void 0 === (r = "function" == typeof (i = o) ? i.call(e, n, e, t) : i) || (t.exports = r);
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    function r(t, e) {
      return !e || "object" !== i(e) && "function" != typeof e ? function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }(t) : e;
    }

    function o(t) {
      return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
    }

    function a(t, e) {
      return (a = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      })(t, e);
    }

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    function p(t, e, n) {
      return e && c(t.prototype, e), n && c(t, n), t;
    }

    var u = n(50);

    var l = function () {
      function t() {
        s(this, t), this._queue = [];
      }

      return p(t, [{
        key: "enqueue",
        value: function value(t, e) {
          var n = {
            priority: (e = Object.assign({
              priority: 0
            }, e)).priority,
            run: t
          };
          if (this.size && this._queue[this.size - 1].priority >= e.priority) this._queue.push(n);else {
            var i = function (t, e, n) {
              for (var i = 0, r = t.length; r > 0;) {
                var o = r / 2 | 0,
                    a = i + o;
                n(t[a], e) <= 0 ? (i = ++a, r -= o + 1) : r = o;
              }

              return i;
            }(this._queue, n, function (t, e) {
              return e.priority - t.priority;
            });

            this._queue.splice(i, 0, n);
          }
        }
      }, {
        key: "dequeue",
        value: function value() {
          return this._queue.shift().run;
        }
      }, {
        key: "size",
        get: function get() {
          return this._queue.length;
        }
      }]), t;
    }(),
        f = function (t) {
      function e(t) {
        var n;
        if (s(this, e), n = r(this, o(e).call(this)), !("number" == typeof (t = Object.assign({
          carryoverConcurrencyCount: !1,
          intervalCap: 1 / 0,
          interval: 0,
          concurrency: 1 / 0,
          autoStart: !0,
          queueClass: l
        }, t)).concurrency && t.concurrency >= 1)) throw new TypeError("Expected `concurrency` to be a number from 1 and up, got `".concat(t.concurrency, "` (").concat(i(t.concurrency), ")"));
        if (!("number" == typeof t.intervalCap && t.intervalCap >= 1)) throw new TypeError("Expected `intervalCap` to be a number from 1 and up, got `".concat(t.intervalCap, "` (").concat(i(t.intervalCap), ")"));
        if (!(Number.isFinite(t.interval) && t.interval >= 0)) throw new TypeError("Expected `interval` to be a finite number >= 0, got `".concat(t.interval, "` (").concat(i(t.interval), ")"));
        return n._carryoverConcurrencyCount = t.carryoverConcurrencyCount, n._isIntervalIgnored = t.intervalCap === 1 / 0 || 0 === t.interval, n._intervalCount = 0, n._intervalCap = t.intervalCap, n._interval = t.interval, n._intervalId = null, n._intervalEnd = 0, n._timeoutId = null, n.queue = new t.queueClass(), n._queueClass = t.queueClass, n._pendingCount = 0, n._concurrency = t.concurrency, n._isPaused = !1 === t.autoStart, n._resolveEmpty = function () {}, n._resolveIdle = function () {}, n;
      }

      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && a(t, e);
      }(e, t), p(e, [{
        key: "_next",
        value: function value() {
          this._pendingCount--, this._tryToStartAnother();
        }
      }, {
        key: "_resolvePromises",
        value: function value() {
          this._resolveEmpty(), this._resolveEmpty = function () {}, 0 === this._pendingCount && (this._resolveIdle(), this._resolveIdle = function () {});
        }
      }, {
        key: "_onResumeInterval",
        value: function value() {
          this._onInterval(), this._initializeIntervalIfNeeded(), this._timeoutId = null;
        }
      }, {
        key: "_intervalPaused",
        value: function value() {
          var t = this,
              e = Date.now();

          if (null === this._intervalId) {
            var n = this._intervalEnd - e;
            if (!(n < 0)) return null === this._timeoutId && (this._timeoutId = setTimeout(function () {
              return t._onResumeInterval();
            }, n)), !0;
            this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0;
          }

          return !1;
        }
      }, {
        key: "_tryToStartAnother",
        value: function value() {
          if (0 === this.queue.size) return clearInterval(this._intervalId), this._intervalId = null, this._resolvePromises(), !1;

          if (!this._isPaused) {
            var t = !this._intervalPaused();
            if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) return this.emit("active"), this.queue.dequeue()(), t && this._initializeIntervalIfNeeded(), !0;
          }

          return !1;
        }
      }, {
        key: "_initializeIntervalIfNeeded",
        value: function value() {
          var t = this;
          this._isIntervalIgnored || null !== this._intervalId || (this._intervalId = setInterval(function () {
            return t._onInterval();
          }, this._interval), this._intervalEnd = Date.now() + this._interval);
        }
      }, {
        key: "_onInterval",
        value: function value() {
          for (0 === this._intervalCount && 0 === this._pendingCount && (clearInterval(this._intervalId), this._intervalId = null), this._intervalCount = this._carryoverConcurrencyCount ? this._pendingCount : 0; this._tryToStartAnother();) {
            ;
          }
        }
      }, {
        key: "add",
        value: function value(t, e) {
          var n = this;
          return new Promise(function (i, r) {
            n.queue.enqueue(function () {
              n._pendingCount++, n._intervalCount++;

              try {
                Promise.resolve(t()).then(function (t) {
                  i(t), n._next();
                }, function (t) {
                  r(t), n._next();
                });
              } catch (t) {
                r(t), n._next();
              }
            }, e), n._tryToStartAnother();
          });
        }
      }, {
        key: "addAll",
        value: function value(t, e) {
          var n = this;
          return Promise.all(t.map(function (t) {
            return n.add(t, e);
          }));
        }
      }, {
        key: "start",
        value: function value() {
          if (this._isPaused) for (this._isPaused = !1; this._tryToStartAnother();) {
            ;
          }
        }
      }, {
        key: "pause",
        value: function value() {
          this._isPaused = !0;
        }
      }, {
        key: "clear",
        value: function value() {
          this.queue = new this._queueClass();
        }
      }, {
        key: "onEmpty",
        value: function value() {
          var t = this;
          return 0 === this.queue.size ? Promise.resolve() : new Promise(function (e) {
            var n = t._resolveEmpty;

            t._resolveEmpty = function () {
              n(), e();
            };
          });
        }
      }, {
        key: "onIdle",
        value: function value() {
          var t = this;
          return 0 === this._pendingCount && 0 === this.queue.size ? Promise.resolve() : new Promise(function (e) {
            var n = t._resolveIdle;

            t._resolveIdle = function () {
              n(), e();
            };
          });
        }
      }, {
        key: "_doesIntervalAllowAnother",
        get: function get() {
          return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
        }
      }, {
        key: "_doesConcurrentAllowAnother",
        get: function get() {
          return this._pendingCount < this._concurrency;
        }
      }, {
        key: "size",
        get: function get() {
          return this.queue.size;
        }
      }, {
        key: "pending",
        get: function get() {
          return this._pendingCount;
        }
      }, {
        key: "isPaused",
        get: function get() {
          return this._isPaused;
        }
      }]), e;
    }(u);

    t.exports = f, t.exports["default"] = f;
  }, function (t, e, n) {
    (function (t, n) {
      function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
          return _typeof2(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
        })(t);
      }

      var r = "[object Arguments]",
          o = "[object Function]",
          a = "[object GeneratorFunction]",
          s = "[object Map]",
          c = "[object Set]",
          p = /\w*$/,
          u = /^\[object .+?Constructor\]$/,
          l = /^(?:0|[1-9]\d*)$/,
          f = {};
      f[r] = f["[object Array]"] = f["[object ArrayBuffer]"] = f["[object DataView]"] = f["[object Boolean]"] = f["[object Date]"] = f["[object Float32Array]"] = f["[object Float64Array]"] = f["[object Int8Array]"] = f["[object Int16Array]"] = f["[object Int32Array]"] = f[s] = f["[object Number]"] = f["[object Object]"] = f["[object RegExp]"] = f[c] = f["[object String]"] = f["[object Symbol]"] = f["[object Uint8Array]"] = f["[object Uint8ClampedArray]"] = f["[object Uint16Array]"] = f["[object Uint32Array]"] = !0, f["[object Error]"] = f[o] = f["[object WeakMap]"] = !1;
      var d = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t,
          m = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
          h = d || m || Function("return this")(),
          y = "object" == i(e) && e && !e.nodeType && e,
          v = y && "object" == i(n) && n && !n.nodeType && n,
          g = v && v.exports === y;

      function b(t, e) {
        return t.set(e[0], e[1]), t;
      }

      function x(t, e) {
        return t.add(e), t;
      }

      function k(t, e, n, i) {
        var r = -1,
            o = t ? t.length : 0;

        for (i && o && (n = t[++r]); ++r < o;) {
          n = e(n, t[r], r, t);
        }

        return n;
      }

      function w(t) {
        var e = !1;
        if (null != t && "function" != typeof t.toString) try {
          e = !!(t + "");
        } catch (t) {}
        return e;
      }

      function _(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t, i) {
          n[++e] = [i, t];
        }), n;
      }

      function j(t, e) {
        return function (n) {
          return t(e(n));
        };
      }

      function O(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function (t) {
          n[++e] = t;
        }), n;
      }

      var S,
          E = Array.prototype,
          C = Function.prototype,
          T = Object.prototype,
          A = h["__core-js_shared__"],
          P = (S = /[^.]+$/.exec(A && A.keys && A.keys.IE_PROTO || "")) ? "Symbol(src)_1." + S : "",
          F = C.toString,
          I = T.hasOwnProperty,
          z = T.toString,
          N = RegExp("^" + F.call(I).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
          M = g ? h.Buffer : void 0,
          R = h.Symbol,
          $ = h.Uint8Array,
          q = j(Object.getPrototypeOf, Object),
          U = Object.create,
          D = T.propertyIsEnumerable,
          L = E.splice,
          B = Object.getOwnPropertySymbols,
          V = M ? M.isBuffer : void 0,
          H = j(Object.keys, Object),
          W = vt(h, "DataView"),
          Z = vt(h, "Map"),
          J = vt(h, "Promise"),
          Y = vt(h, "Set"),
          Q = vt(h, "WeakMap"),
          G = vt(Object, "create"),
          K = wt(W),
          X = wt(Z),
          tt = wt(J),
          et = wt(Y),
          nt = wt(Q),
          it = R ? R.prototype : void 0,
          rt = it ? it.valueOf : void 0;

      function ot(t) {
        var e = -1,
            n = t ? t.length : 0;

        for (this.clear(); ++e < n;) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }

      function at(t) {
        var e = -1,
            n = t ? t.length : 0;

        for (this.clear(); ++e < n;) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }

      function st(t) {
        var e = -1,
            n = t ? t.length : 0;

        for (this.clear(); ++e < n;) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }

      function ct(t) {
        this.__data__ = new at(t);
      }

      function pt(t, e) {
        var n = jt(t) || function (t) {
          return function (t) {
            return function (t) {
              return !!t && "object" == i(t);
            }(t) && Ot(t);
          }(t) && I.call(t, "callee") && (!D.call(t, "callee") || z.call(t) == r);
        }(t) ? function (t, e) {
          for (var n = -1, i = Array(t); ++n < t;) {
            i[n] = e(n);
          }

          return i;
        }(t.length, String) : [],
            o = n.length,
            a = !!o;

        for (var s in t) {
          !e && !I.call(t, s) || a && ("length" == s || xt(s, o)) || n.push(s);
        }

        return n;
      }

      function ut(t, e, n) {
        var i = t[e];
        I.call(t, e) && _t(i, n) && (void 0 !== n || e in t) || (t[e] = n);
      }

      function lt(t, e) {
        for (var n = t.length; n--;) {
          if (_t(t[n][0], e)) return n;
        }

        return -1;
      }

      function ft(t, e, n, i, u, l, d) {
        var m;
        if (i && (m = l ? i(t, u, l, d) : i(t)), void 0 !== m) return m;
        if (!Ct(t)) return t;
        var h = jt(t);

        if (h) {
          if (m = function (t) {
            var e = t.length,
                n = t.constructor(e);
            e && "string" == typeof t[0] && I.call(t, "index") && (n.index = t.index, n.input = t.input);
            return n;
          }(t), !e) return function (t, e) {
            var n = -1,
                i = t.length;
            e || (e = Array(i));

            for (; ++n < i;) {
              e[n] = t[n];
            }

            return e;
          }(t, m);
        } else {
          var y = bt(t),
              v = y == o || y == a;
          if (St(t)) return function (t, e) {
            if (e) return t.slice();
            var n = new t.constructor(t.length);
            return t.copy(n), n;
          }(t, e);

          if ("[object Object]" == y || y == r || v && !l) {
            if (w(t)) return l ? t : {};
            if (m = function (t) {
              return "function" != typeof t.constructor || kt(t) ? {} : (e = q(t), Ct(e) ? U(e) : {});
              var e;
            }(v ? {} : t), !e) return function (t, e) {
              return ht(t, gt(t), e);
            }(t, function (t, e) {
              return t && ht(e, Tt(e), t);
            }(m, t));
          } else {
            if (!f[y]) return l ? t : {};

            m = function (t, e, n, i) {
              var r = t.constructor;

              switch (e) {
                case "[object ArrayBuffer]":
                  return mt(t);

                case "[object Boolean]":
                case "[object Date]":
                  return new r(+t);

                case "[object DataView]":
                  return function (t, e) {
                    var n = e ? mt(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.byteLength);
                  }(t, i);

                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                  return function (t, e) {
                    var n = e ? mt(t.buffer) : t.buffer;
                    return new t.constructor(n, t.byteOffset, t.length);
                  }(t, i);

                case s:
                  return function (t, e, n) {
                    return k(e ? n(_(t), !0) : _(t), b, new t.constructor());
                  }(t, i, n);

                case "[object Number]":
                case "[object String]":
                  return new r(t);

                case "[object RegExp]":
                  return function (t) {
                    var e = new t.constructor(t.source, p.exec(t));
                    return e.lastIndex = t.lastIndex, e;
                  }(t);

                case c:
                  return function (t, e, n) {
                    return k(e ? n(O(t), !0) : O(t), x, new t.constructor());
                  }(t, i, n);

                case "[object Symbol]":
                  return o = t, rt ? Object(rt.call(o)) : {};
              }

              var o;
            }(t, y, ft, e);
          }
        }

        d || (d = new ct());
        var g = d.get(t);
        if (g) return g;
        if (d.set(t, m), !h) var j = n ? function (t) {
          return function (t, e, n) {
            var i = e(t);
            return jt(t) ? i : function (t, e) {
              for (var n = -1, i = e.length, r = t.length; ++n < i;) {
                t[r + n] = e[n];
              }

              return t;
            }(i, n(t));
          }(t, Tt, gt);
        }(t) : Tt(t);
        return function (t, e) {
          for (var n = -1, i = t ? t.length : 0; ++n < i && !1 !== e(t[n], n, t);) {
            ;
          }
        }(j || t, function (r, o) {
          j && (r = t[o = r]), ut(m, o, ft(r, e, n, i, o, t, d));
        }), m;
      }

      function dt(t) {
        return !(!Ct(t) || (e = t, P && P in e)) && (Et(t) || w(t) ? N : u).test(wt(t));
        var e;
      }

      function mt(t) {
        var e = new t.constructor(t.byteLength);
        return new $(e).set(new $(t)), e;
      }

      function ht(t, e, n, i) {
        n || (n = {});

        for (var r = -1, o = e.length; ++r < o;) {
          var a = e[r],
              s = i ? i(n[a], t[a], a, n, t) : void 0;
          ut(n, a, void 0 === s ? t[a] : s);
        }

        return n;
      }

      function yt(t, e) {
        var n,
            r,
            o = t.__data__;
        return ("string" == (r = i(n = e)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof e ? "string" : "hash"] : o.map;
      }

      function vt(t, e) {
        var n = function (t, e) {
          return null == t ? void 0 : t[e];
        }(t, e);

        return dt(n) ? n : void 0;
      }

      ot.prototype.clear = function () {
        this.__data__ = G ? G(null) : {};
      }, ot.prototype["delete"] = function (t) {
        return this.has(t) && delete this.__data__[t];
      }, ot.prototype.get = function (t) {
        var e = this.__data__;

        if (G) {
          var n = e[t];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }

        return I.call(e, t) ? e[t] : void 0;
      }, ot.prototype.has = function (t) {
        var e = this.__data__;
        return G ? void 0 !== e[t] : I.call(e, t);
      }, ot.prototype.set = function (t, e) {
        return this.__data__[t] = G && void 0 === e ? "__lodash_hash_undefined__" : e, this;
      }, at.prototype.clear = function () {
        this.__data__ = [];
      }, at.prototype["delete"] = function (t) {
        var e = this.__data__,
            n = lt(e, t);
        return !(n < 0) && (n == e.length - 1 ? e.pop() : L.call(e, n, 1), !0);
      }, at.prototype.get = function (t) {
        var e = this.__data__,
            n = lt(e, t);
        return n < 0 ? void 0 : e[n][1];
      }, at.prototype.has = function (t) {
        return lt(this.__data__, t) > -1;
      }, at.prototype.set = function (t, e) {
        var n = this.__data__,
            i = lt(n, t);
        return i < 0 ? n.push([t, e]) : n[i][1] = e, this;
      }, st.prototype.clear = function () {
        this.__data__ = {
          hash: new ot(),
          map: new (Z || at)(),
          string: new ot()
        };
      }, st.prototype["delete"] = function (t) {
        return yt(this, t)["delete"](t);
      }, st.prototype.get = function (t) {
        return yt(this, t).get(t);
      }, st.prototype.has = function (t) {
        return yt(this, t).has(t);
      }, st.prototype.set = function (t, e) {
        return yt(this, t).set(t, e), this;
      }, ct.prototype.clear = function () {
        this.__data__ = new at();
      }, ct.prototype["delete"] = function (t) {
        return this.__data__["delete"](t);
      }, ct.prototype.get = function (t) {
        return this.__data__.get(t);
      }, ct.prototype.has = function (t) {
        return this.__data__.has(t);
      }, ct.prototype.set = function (t, e) {
        var n = this.__data__;

        if (n instanceof at) {
          var i = n.__data__;
          if (!Z || i.length < 199) return i.push([t, e]), this;
          n = this.__data__ = new st(i);
        }

        return n.set(t, e), this;
      };

      var gt = B ? j(B, Object) : function () {
        return [];
      },
          bt = function bt(t) {
        return z.call(t);
      };

      function xt(t, e) {
        return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || l.test(t)) && t > -1 && t % 1 == 0 && t < e;
      }

      function kt(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || T);
      }

      function wt(t) {
        if (null != t) {
          try {
            return F.call(t);
          } catch (t) {}

          try {
            return t + "";
          } catch (t) {}
        }

        return "";
      }

      function _t(t, e) {
        return t === e || t != t && e != e;
      }

      (W && "[object DataView]" != bt(new W(new ArrayBuffer(1))) || Z && bt(new Z()) != s || J && "[object Promise]" != bt(J.resolve()) || Y && bt(new Y()) != c || Q && "[object WeakMap]" != bt(new Q())) && (bt = function bt(t) {
        var e = z.call(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            i = n ? wt(n) : void 0;
        if (i) switch (i) {
          case K:
            return "[object DataView]";

          case X:
            return s;

          case tt:
            return "[object Promise]";

          case et:
            return c;

          case nt:
            return "[object WeakMap]";
        }
        return e;
      });
      var jt = Array.isArray;

      function Ot(t) {
        return null != t && function (t) {
          return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991;
        }(t.length) && !Et(t);
      }

      var St = V || function () {
        return !1;
      };

      function Et(t) {
        var e = Ct(t) ? z.call(t) : "";
        return e == o || e == a;
      }

      function Ct(t) {
        var e = i(t);
        return !!t && ("object" == e || "function" == e);
      }

      function Tt(t) {
        return Ot(t) ? pt(t) : function (t) {
          if (!kt(t)) return H(t);
          var e = [];

          for (var n in Object(t)) {
            I.call(t, n) && "constructor" != n && e.push(n);
          }

          return e;
        }(t);
      }

      n.exports = function (t) {
        return ft(t, !0, !0);
      };
    }).call(this, n(14), n(24)(t));
  }, function (t, e, n) {
    n.d(e, "a", function () {
      return i;
    });

    function i(t) {
      try {
        return t && "function" == typeof t && t.name || "<anonymous>";
      } catch (t) {
        return "<anonymous>";
      }
    }
  }, function (t, e, n) {
    n.d(e, "a", function () {
      return i;
    });

    var i = function () {
      function t() {
        this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet() : [];
      }

      return t.prototype.memoize = function (t) {
        if (this._hasWeakSet) return !!this._inner.has(t) || (this._inner.add(t), !1);

        for (var e = 0; e < this._inner.length; e++) {
          if (this._inner[e] === t) return !0;
        }

        return this._inner.push(t), !1;
      }, t.prototype.unmemoize = function (t) {
        if (this._hasWeakSet) this._inner["delete"](t);else for (var e = 0; e < this._inner.length; e++) {
          if (this._inner[e] === t) {
            this._inner.splice(e, 1);

            break;
          }
        }
      }, t;
    }();
  },, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var r = n(19),
        o = n(40),
        a = n(12),
        s = n(20).scan,
        c = a.ValidatorResult,
        p = a.SchemaError,
        u = a.SchemaContext,
        l = function t() {
      this.customFormats = Object.create(t.prototype.customFormats), this.schemas = {}, this.unresolvedRefs = [], this.types = Object.create(d), this.attributes = Object.create(o.validators);
    };

    function f(t) {
      var e = "string" == typeof t ? t : t.$ref;
      return "string" == typeof e && e;
    }

    l.prototype.customFormats = {}, l.prototype.schemas = null, l.prototype.types = null, l.prototype.attributes = null, l.prototype.unresolvedRefs = null, l.prototype.addSchema = function (t, e) {
      var n = this;
      if (!t) return null;
      var i = s(e || "/", t),
          r = e || t.id;

      for (var o in i.id) {
        this.schemas[o] = i.id[o];
      }

      for (var o in i.ref) {
        this.unresolvedRefs.push(o);
      }

      return this.unresolvedRefs = this.unresolvedRefs.filter(function (t) {
        return void 0 === n.schemas[t];
      }), this.schemas[r];
    }, l.prototype.addSubSchemaArray = function (t, e) {
      if (e instanceof Array) for (var n = 0; n < e.length; n++) {
        this.addSubSchema(t, e[n]);
      }
    }, l.prototype.addSubSchemaObject = function (t, e) {
      if (e && "object" == i(e)) for (var n in e) {
        this.addSubSchema(t, e[n]);
      }
    }, l.prototype.setSchemas = function (t) {
      this.schemas = t;
    }, l.prototype.getSchema = function (t) {
      return this.schemas[t];
    }, l.prototype.validate = function (t, e, n, i) {
      n || (n = {});
      var o = n.propertyName || "instance",
          a = r.resolve(n.base || "/", e.id || "");

      if (!i) {
        (i = new u(e, n, o, a, Object.create(this.schemas))).schemas[a] || (i.schemas[a] = e);
        var c = s(a, e);

        for (var l in c.id) {
          var f = c.id[l];
          i.schemas[l] = f;
        }
      }

      if (e) {
        var d = this.validateSchema(t, e, n, i);
        if (!d) throw new Error("Result undefined");
        return d;
      }

      throw new p("no schema specified", e);
    }, l.prototype.validateSchema = function (t, e, n, i) {
      var r,
          s = new c(t, e, n, i);
      if ("boolean" == typeof e) !0 === e ? e = {} : !1 === e && (e = {
        type: []
      });else if (!e) throw new Error("schema is undefined");
      if (e["extends"]) if (e["extends"] instanceof Array) {
        var l = {
          schema: e,
          ctx: i
        };
        e["extends"].forEach(this.schemaTraverser.bind(this, l)), e = l.schema, l.schema = null, l.ctx = null, l = null;
      } else e = a.deepMerge(e, this.superResolve(e["extends"], i));

      if (r = f(e)) {
        var d = this.resolve(e, r, i),
            m = new u(d.subschema, n, i.propertyPath, d.switchSchema, i.schemas);
        return this.validateSchema(t, d.subschema, n, m);
      }

      var h = n && n.skipAttributes || [];

      for (var y in e) {
        if (!o.ignoreProperties[y] && h.indexOf(y) < 0) {
          var v = null,
              g = this.attributes[y];
          if (g) v = g.call(this, t, e, n, i);else if (!1 === n.allowUnknownAttributes) throw new p("Unsupported attribute: " + y, e);
          v && s.importErrors(v);
        }
      }

      if ("function" == typeof n.rewrite) {
        var b = n.rewrite.call(this, t, e, n, i);
        s.instance = b;
      }

      return s;
    }, l.prototype.schemaTraverser = function (t, e) {
      t.schema = a.deepMerge(t.schema, this.superResolve(e, t.ctx));
    }, l.prototype.superResolve = function (t, e) {
      var n;
      return (n = f(t)) ? this.resolve(t, n, e).subschema : t;
    }, l.prototype.resolve = function (t, e, n) {
      if (e = n.resolve(e), n.schemas[e]) return {
        subschema: n.schemas[e],
        switchSchema: e
      };
      var i = r.parse(e),
          o = i && i.hash,
          s = o && o.length && e.substr(0, e.length - o.length);
      if (!s || !n.schemas[s]) throw new p("no such schema <" + e + ">", t);
      var c = a.objectGetPath(n.schemas[s], o.substr(1));
      if (void 0 === c) throw new p("no such schema " + o + " located in <" + s + ">", t);
      return {
        subschema: c,
        switchSchema: e
      };
    }, l.prototype.testType = function (t, e, n, r, o) {
      if ("function" == typeof this.types[o]) return this.types[o].call(this, t);

      if (o && "object" == i(o)) {
        var a = this.validateSchema(t, o, n, r);
        return void 0 === a || !(a && a.errors.length);
      }

      return !0;
    };
    var d = l.prototype.types = {};
    d.string = function (t) {
      return "string" == typeof t;
    }, d.number = function (t) {
      return "number" == typeof t && isFinite(t);
    }, d.integer = function (t) {
      return "number" == typeof t && t % 1 == 0;
    }, d["boolean"] = function (t) {
      return "boolean" == typeof t;
    }, d.array = function (t) {
      return Array.isArray(t);
    }, d["null"] = function (t) {
      return null === t;
    }, d.date = function (t) {
      return t instanceof Date;
    }, d.any = function (t) {
      return !0;
    }, d.object = function (t) {
      return t && "object" === i(t) && !(t instanceof Array) && !(t instanceof Date);
    }, t.exports = l;
  }, function (t, e, n) {
    (function (t, i) {
      var r;

      function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
          return _typeof2(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
        })(t);
      }
      /*! https://mths.be/punycode v1.3.2 by @mathias */


      !function (a) {
        var s = "object" == o(e) && e && !e.nodeType && e,
            c = "object" == o(t) && t && !t.nodeType && t,
            p = "object" == (void 0 === i ? "undefined" : o(i)) && i;
        p.global !== p && p.window !== p && p.self !== p || (a = p);
        var u,
            l,
            f = 2147483647,
            d = /^xn--/,
            m = /[^\x20-\x7E]/,
            h = /[\x2E\u3002\uFF0E\uFF61]/g,
            y = {
          overflow: "Overflow: input needs wider integers to process",
          "not-basic": "Illegal input >= 0x80 (not a basic code point)",
          "invalid-input": "Invalid input"
        },
            v = Math.floor,
            g = String.fromCharCode;

        function b(t) {
          throw RangeError(y[t]);
        }

        function x(t, e) {
          for (var n = t.length, i = []; n--;) {
            i[n] = e(t[n]);
          }

          return i;
        }

        function k(t, e) {
          var n = t.split("@"),
              i = "";
          return n.length > 1 && (i = n[0] + "@", t = n[1]), i + x((t = t.replace(h, ".")).split("."), e).join(".");
        }

        function w(t) {
          for (var e, n, i = [], r = 0, o = t.length; r < o;) {
            (e = t.charCodeAt(r++)) >= 55296 && e <= 56319 && r < o ? 56320 == (64512 & (n = t.charCodeAt(r++))) ? i.push(((1023 & e) << 10) + (1023 & n) + 65536) : (i.push(e), r--) : i.push(e);
          }

          return i;
        }

        function _(t) {
          return x(t, function (t) {
            var e = "";
            return t > 65535 && (e += g((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += g(t);
          }).join("");
        }

        function j(t, e) {
          return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
        }

        function O(t, e, n) {
          var i = 0;

          for (t = n ? v(t / 700) : t >> 1, t += v(t / e); t > 455; i += 36) {
            t = v(t / 35);
          }

          return v(i + 36 * t / (t + 38));
        }

        function S(t) {
          var e,
              n,
              i,
              r,
              o,
              a,
              s,
              c,
              p,
              u,
              l,
              d = [],
              m = t.length,
              h = 0,
              y = 128,
              g = 72;

          for ((n = t.lastIndexOf("-")) < 0 && (n = 0), i = 0; i < n; ++i) {
            t.charCodeAt(i) >= 128 && b("not-basic"), d.push(t.charCodeAt(i));
          }

          for (r = n > 0 ? n + 1 : 0; r < m;) {
            for (o = h, a = 1, s = 36; r >= m && b("invalid-input"), ((c = (l = t.charCodeAt(r++)) - 48 < 10 ? l - 22 : l - 65 < 26 ? l - 65 : l - 97 < 26 ? l - 97 : 36) >= 36 || c > v((f - h) / a)) && b("overflow"), h += c * a, !(c < (p = s <= g ? 1 : s >= g + 26 ? 26 : s - g)); s += 36) {
              a > v(f / (u = 36 - p)) && b("overflow"), a *= u;
            }

            g = O(h - o, e = d.length + 1, 0 == o), v(h / e) > f - y && b("overflow"), y += v(h / e), h %= e, d.splice(h++, 0, y);
          }

          return _(d);
        }

        function E(t) {
          var e,
              n,
              i,
              r,
              o,
              a,
              s,
              c,
              p,
              u,
              l,
              d,
              m,
              h,
              y,
              x = [];

          for (d = (t = w(t)).length, e = 128, n = 0, o = 72, a = 0; a < d; ++a) {
            (l = t[a]) < 128 && x.push(g(l));
          }

          for (i = r = x.length, r && x.push("-"); i < d;) {
            for (s = f, a = 0; a < d; ++a) {
              (l = t[a]) >= e && l < s && (s = l);
            }

            for (s - e > v((f - n) / (m = i + 1)) && b("overflow"), n += (s - e) * m, e = s, a = 0; a < d; ++a) {
              if ((l = t[a]) < e && ++n > f && b("overflow"), l == e) {
                for (c = n, p = 36; !(c < (u = p <= o ? 1 : p >= o + 26 ? 26 : p - o)); p += 36) {
                  y = c - u, h = 36 - u, x.push(g(j(u + y % h, 0))), c = v(y / h);
                }

                x.push(g(j(c, 0))), o = O(n, m, i == r), n = 0, ++i;
              }
            }

            ++n, ++e;
          }

          return x.join("");
        }

        if (u = {
          version: "1.3.2",
          ucs2: {
            decode: w,
            encode: _
          },
          decode: S,
          encode: E,
          toASCII: function toASCII(t) {
            return k(t, function (t) {
              return m.test(t) ? "xn--" + E(t) : t;
            });
          },
          toUnicode: function toUnicode(t) {
            return k(t, function (t) {
              return d.test(t) ? S(t.slice(4).toLowerCase()) : t;
            });
          }
        }, "object" == o(n(25)) && n(25)) void 0 === (r = function () {
          return u;
        }.call(e, n, e, t)) || (t.exports = r);else if (s && c) {
          if (t.exports == s) c.exports = u;else for (l in u) {
            u.hasOwnProperty(l) && (s[l] = u[l]);
          }
        } else a.punycode = u;
      }(this);
    }).call(this, n(24)(t), n(14));
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    t.exports = {
      isString: function isString(t) {
        return "string" == typeof t;
      },
      isObject: function isObject(t) {
        return "object" === i(t) && null !== t;
      },
      isNull: function isNull(t) {
        return null === t;
      },
      isNullOrUndefined: function isNullOrUndefined(t) {
        return null == t;
      }
    };
  }, function (t, e, n) {
    e.decode = e.parse = n(38), e.encode = e.stringify = n(39);
  }, function (t, e, n) {
    function i(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }

    t.exports = function (t, e, n, o) {
      e = e || "&", n = n || "=";
      var a = {};
      if ("string" != typeof t || 0 === t.length) return a;
      var s = /\+/g;
      t = t.split(e);
      var c = 1e3;
      o && "number" == typeof o.maxKeys && (c = o.maxKeys);
      var p = t.length;
      c > 0 && p > c && (p = c);

      for (var u = 0; u < p; ++u) {
        var l,
            f,
            d,
            m,
            h = t[u].replace(s, "%20"),
            y = h.indexOf(n);
        y >= 0 ? (l = h.substr(0, y), f = h.substr(y + 1)) : (l = h, f = ""), d = decodeURIComponent(l), m = decodeURIComponent(f), i(a, d) ? r(a[d]) ? a[d].push(m) : a[d] = [a[d], m] : a[d] = m;
      }

      return a;
    };

    var r = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var r = function r(t) {
      switch (i(t)) {
        case "string":
          return t;

        case "boolean":
          return t ? "true" : "false";

        case "number":
          return isFinite(t) ? t : "";

        default:
          return "";
      }
    };

    t.exports = function (t, e, n, c) {
      return e = e || "&", n = n || "=", null === t && (t = void 0), "object" === i(t) ? a(s(t), function (i) {
        var s = encodeURIComponent(r(i)) + n;
        return o(t[i]) ? a(t[i], function (t) {
          return s + encodeURIComponent(r(t));
        }).join(e) : s + encodeURIComponent(r(t[i]));
      }).join(e) : c ? encodeURIComponent(r(c)) + n + encodeURIComponent(r(t)) : "";
    };

    var o = Array.isArray || function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };

    function a(t, e) {
      if (t.map) return t.map(e);

      for (var n = [], i = 0; i < t.length; i++) {
        n.push(e(t[i], i));
      }

      return n;
    }

    var s = Object.keys || function (t) {
      var e = [];

      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
      }

      return e;
    };
  }, function (t, e, n) {
    var i = n(12),
        r = i.ValidatorResult,
        o = i.SchemaError,
        a = {
      ignoreProperties: {
        id: !0,
        "default": !0,
        description: !0,
        title: !0,
        exclusiveMinimum: !0,
        exclusiveMaximum: !0,
        additionalItems: !0,
        $schema: !0,
        $ref: !0,
        "extends": !0
      }
    },
        s = a.validators = {};

    function c(t, e, n, i, r) {
      var o = e.throwError;
      e.throwError = !1;
      var a = this.validateSchema(t, r, e, n);
      return e.throwError = o, !a.valid && i instanceof Function && i(a), a.valid;
    }

    function p(t, e, n, i, r, o) {
      if (this.types.object(t) && (!e.properties || void 0 === e.properties[r])) if (!1 === e.additionalProperties) o.addError({
        name: "additionalProperties",
        argument: r,
        message: "additionalProperty " + JSON.stringify(r) + " exists in instance when not allowed"
      });else {
        var a = e.additionalProperties || {};
        "function" == typeof n.preValidateProperty && n.preValidateProperty(t, r, a, n, i);
        var s = this.validateSchema(t[r], a, n, i.makeChild(a, r));
        s.instance !== o.instance[r] && (o.instance[r] = s.instance), o.importErrors(s);
      }
    }

    s.type = function (t, e, n, i) {
      if (void 0 === t) return null;
      var o = new r(t, e, n, i),
          a = Array.isArray(e.type) ? e.type : [e.type];

      if (!a.some(this.testType.bind(this, t, e, n, i))) {
        var s = a.map(function (t) {
          return t.id && "<" + t.id + ">" || t + "";
        });
        o.addError({
          name: "type",
          argument: s,
          message: "is not of a type(s) " + s
        });
      }

      return o;
    }, s.anyOf = function (t, e, n, i) {
      if (void 0 === t) return null;
      var a = new r(t, e, n, i),
          s = new r(t, e, n, i);
      if (!Array.isArray(e.anyOf)) throw new o("anyOf must be an array");

      if (!e.anyOf.some(c.bind(this, t, n, i, function (t) {
        s.importErrors(t);
      }))) {
        var p = e.anyOf.map(function (t, e) {
          return t.id && "<" + t.id + ">" || t.title && JSON.stringify(t.title) || t.$ref && "<" + t.$ref + ">" || "[subschema " + e + "]";
        });
        n.nestedErrors && a.importErrors(s), a.addError({
          name: "anyOf",
          argument: p,
          message: "is not any of " + p.join(",")
        });
      }

      return a;
    }, s.allOf = function (t, e, n, i) {
      if (void 0 === t) return null;
      if (!Array.isArray(e.allOf)) throw new o("allOf must be an array");
      var a = new r(t, e, n, i),
          s = this;
      return e.allOf.forEach(function (e, r) {
        var o = s.validateSchema(t, e, n, i);

        if (!o.valid) {
          var c = e.id && "<" + e.id + ">" || e.title && JSON.stringify(e.title) || e.$ref && "<" + e.$ref + ">" || "[subschema " + r + "]";
          a.addError({
            name: "allOf",
            argument: {
              id: c,
              length: o.errors.length,
              valid: o
            },
            message: "does not match allOf schema " + c + " with " + o.errors.length + " error[s]:"
          }), a.importErrors(o);
        }
      }), a;
    }, s.oneOf = function (t, e, n, i) {
      if (void 0 === t) return null;
      if (!Array.isArray(e.oneOf)) throw new o("oneOf must be an array");
      var a = new r(t, e, n, i),
          s = new r(t, e, n, i),
          p = e.oneOf.filter(c.bind(this, t, n, i, function (t) {
        s.importErrors(t);
      })).length,
          u = e.oneOf.map(function (t, e) {
        return t.id && "<" + t.id + ">" || t.title && JSON.stringify(t.title) || t.$ref && "<" + t.$ref + ">" || "[subschema " + e + "]";
      });
      return 1 !== p && (n.nestedErrors && a.importErrors(s), a.addError({
        name: "oneOf",
        argument: u,
        message: "is not exactly one from " + u.join(",")
      })), a;
    }, s.properties = function (t, e, n, i) {
      if (this.types.object(t)) {
        var o = new r(t, e, n, i),
            a = e.properties || {};

        for (var s in a) {
          "function" == typeof n.preValidateProperty && n.preValidateProperty(t, s, a[s], n, i);
          var c = Object.hasOwnProperty.call(t, s) ? t[s] : void 0,
              p = this.validateSchema(c, a[s], n, i.makeChild(a[s], s));
          p.instance !== o.instance[s] && (o.instance[s] = p.instance), o.importErrors(p);
        }

        return o;
      }
    }, s.patternProperties = function (t, e, n, i) {
      if (this.types.object(t)) {
        var o = new r(t, e, n, i),
            a = e.patternProperties || {};

        for (var s in t) {
          var c = !0;

          for (var u in a) {
            if (new RegExp(u).test(s)) {
              c = !1, "function" == typeof n.preValidateProperty && n.preValidateProperty(t, s, a[u], n, i);
              var l = this.validateSchema(t[s], a[u], n, i.makeChild(a[u], s));
              l.instance !== o.instance[s] && (o.instance[s] = l.instance), o.importErrors(l);
            }
          }

          c && p.call(this, t, e, n, i, s, o);
        }

        return o;
      }
    }, s.additionalProperties = function (t, e, n, i) {
      if (this.types.object(t)) {
        if (e.patternProperties) return null;
        var o = new r(t, e, n, i);

        for (var a in t) {
          p.call(this, t, e, n, i, a, o);
        }

        return o;
      }
    }, s.minProperties = function (t, e, n, i) {
      if (this.types.object(t)) {
        var o = new r(t, e, n, i);
        return Object.keys(t).length >= e.minProperties || o.addError({
          name: "minProperties",
          argument: e.minProperties,
          message: "does not meet minimum property length of " + e.minProperties
        }), o;
      }
    }, s.maxProperties = function (t, e, n, i) {
      if (this.types.object(t)) {
        var o = new r(t, e, n, i);
        return Object.keys(t).length <= e.maxProperties || o.addError({
          name: "maxProperties",
          argument: e.maxProperties,
          message: "does not meet maximum property length of " + e.maxProperties
        }), o;
      }
    }, s.items = function (t, e, n, i) {
      var o = this;

      if (this.types.array(t) && e.items) {
        var a = new r(t, e, n, i);
        return t.every(function (t, r) {
          var s = Array.isArray(e.items) ? e.items[r] || e.additionalItems : e.items;
          if (void 0 === s) return !0;
          if (!1 === s) return a.addError({
            name: "items",
            message: "additionalItems not permitted"
          }), !1;
          var c = o.validateSchema(t, s, n, i.makeChild(s, r));
          return c.instance !== a.instance[r] && (a.instance[r] = c.instance), a.importErrors(c), !0;
        }), a;
      }
    }, s.minimum = function (t, e, n, i) {
      if (this.types.number(t)) {
        var o = new r(t, e, n, i);
        return (e.exclusiveMinimum && !0 === e.exclusiveMinimum ? t > e.minimum : t >= e.minimum) || o.addError({
          name: "minimum",
          argument: e.minimum,
          message: "must have a minimum value of " + e.minimum
        }), o;
      }
    }, s.maximum = function (t, e, n, i) {
      if (this.types.number(t)) {
        var o = new r(t, e, n, i);
        return (e.exclusiveMaximum && !0 === e.exclusiveMaximum ? t < e.maximum : t <= e.maximum) || o.addError({
          name: "maximum",
          argument: e.maximum,
          message: "must have a maximum value of " + e.maximum
        }), o;
      }
    };

    var u = function u(t, e, n, a, s, c) {
      if (this.types.number(t)) {
        var p = e[s];
        if (0 == p) throw new o(s + " cannot be zero");
        var u = new r(t, e, n, a),
            l = i.getDecimalPlaces(t),
            f = i.getDecimalPlaces(p),
            d = Math.max(l, f),
            m = Math.pow(10, d);
        return Math.round(t * m) % Math.round(p * m) != 0 && u.addError({
          name: s,
          argument: p,
          message: c + JSON.stringify(p)
        }), u;
      }
    };

    function l(t, e, n) {
      var r,
          o = n.length;

      for (r = e + 1; r < o; r++) {
        if (i.deepCompareStrict(t, n[r])) return !1;
      }

      return !0;
    }

    s.multipleOf = function (t, e, n, i) {
      return u.call(this, t, e, n, i, "multipleOf", "is not a multiple of (divisible by) ");
    }, s.divisibleBy = function (t, e, n, i) {
      return u.call(this, t, e, n, i, "divisibleBy", "is not divisible by (multiple of) ");
    }, s.required = function (t, e, n, i) {
      var o = new r(t, e, n, i);
      return void 0 === t && !0 === e.required ? o.addError({
        name: "required",
        message: "is required"
      }) : this.types.object(t) && Array.isArray(e.required) && e.required.forEach(function (e) {
        void 0 === t[e] && o.addError({
          name: "required",
          argument: e,
          message: "requires property " + JSON.stringify(e)
        });
      }), o;
    }, s.pattern = function (t, e, n, i) {
      if (this.types.string(t)) {
        var o = new r(t, e, n, i);
        return t.match(e.pattern) || o.addError({
          name: "pattern",
          argument: e.pattern,
          message: "does not match pattern " + JSON.stringify(e.pattern.toString())
        }), o;
      }
    }, s.format = function (t, e, n, o) {
      if (void 0 !== t) {
        var a = new r(t, e, n, o);
        return a.disableFormat || i.isFormat(t, e.format, this) || a.addError({
          name: "format",
          argument: e.format,
          message: "does not conform to the " + JSON.stringify(e.format) + " format"
        }), a;
      }
    }, s.minLength = function (t, e, n, i) {
      if (this.types.string(t)) {
        var o = new r(t, e, n, i),
            a = t.match(/[\uDC00-\uDFFF]/g);
        return t.length - (a ? a.length : 0) >= e.minLength || o.addError({
          name: "minLength",
          argument: e.minLength,
          message: "does not meet minimum length of " + e.minLength
        }), o;
      }
    }, s.maxLength = function (t, e, n, i) {
      if (this.types.string(t)) {
        var o = new r(t, e, n, i),
            a = t.match(/[\uDC00-\uDFFF]/g);
        return t.length - (a ? a.length : 0) <= e.maxLength || o.addError({
          name: "maxLength",
          argument: e.maxLength,
          message: "does not meet maximum length of " + e.maxLength
        }), o;
      }
    }, s.minItems = function (t, e, n, i) {
      if (this.types.array(t)) {
        var o = new r(t, e, n, i);
        return t.length >= e.minItems || o.addError({
          name: "minItems",
          argument: e.minItems,
          message: "does not meet minimum length of " + e.minItems
        }), o;
      }
    }, s.maxItems = function (t, e, n, i) {
      if (this.types.array(t)) {
        var o = new r(t, e, n, i);
        return t.length <= e.maxItems || o.addError({
          name: "maxItems",
          argument: e.maxItems,
          message: "does not meet maximum length of " + e.maxItems
        }), o;
      }
    }, s.uniqueItems = function (t, e, n, o) {
      if (this.types.array(t)) {
        var a = new r(t, e, n, o);
        return t.every(function (t, e, n) {
          for (var r = e + 1; r < n.length; r++) {
            if (i.deepCompareStrict(t, n[r])) return !1;
          }

          return !0;
        }) || a.addError({
          name: "uniqueItems",
          message: "contains duplicate item"
        }), a;
      }
    }, s.uniqueItems = function (t, e, n, i) {
      if (this.types.array(t)) {
        var o = new r(t, e, n, i);
        return t.every(l) || o.addError({
          name: "uniqueItems",
          message: "contains duplicate item"
        }), o;
      }
    }, s.dependencies = function (t, e, n, i) {
      if (this.types.object(t)) {
        var o = new r(t, e, n, i);

        for (var a in e.dependencies) {
          if (void 0 !== t[a]) {
            var s = e.dependencies[a],
                c = i.makeChild(s, a);
            if ("string" == typeof s && (s = [s]), Array.isArray(s)) s.forEach(function (e) {
              void 0 === t[e] && o.addError({
                name: "dependencies",
                argument: c.propertyPath,
                message: "property " + e + " not found, required by " + c.propertyPath
              });
            });else {
              var p = this.validateSchema(t, s, n, c);
              o.instance !== p.instance && (o.instance = p.instance), p && p.errors.length && (o.addError({
                name: "dependencies",
                argument: c.propertyPath,
                message: "does not meet dependency required by " + c.propertyPath
              }), o.importErrors(p));
            }
          }
        }

        return o;
      }
    }, s["enum"] = function (t, e, n, a) {
      if (void 0 === t) return null;
      if (!Array.isArray(e["enum"])) throw new o("enum expects an array", e);
      var s = new r(t, e, n, a);
      return e["enum"].some(i.deepCompareStrict.bind(null, t)) || s.addError({
        name: "enum",
        argument: e["enum"],
        message: "is not one of enum values: " + e["enum"].map(String).join(",")
      }), s;
    }, s["const"] = function (t, e, n, o) {
      if (void 0 === t) return null;
      var a = new r(t, e, n, o);
      return i.deepCompareStrict(e["const"], t) || a.addError({
        name: "const",
        argument: e["const"],
        message: "does not exactly match expected constant: " + e["const"]
      }), a;
    }, s.not = s.disallow = function (t, e, n, i) {
      var o = this;
      if (void 0 === t) return null;
      var a = new r(t, e, n, i),
          s = e.not || e.disallow;
      return s ? (Array.isArray(s) || (s = [s]), s.forEach(function (r) {
        if (o.testType(t, e, n, i, r)) {
          var s = r && r.id && "<" + r.id + ">" || r;
          a.addError({
            name: "not",
            argument: s,
            message: "is of prohibited type " + s
          });
        }
      }), a) : null;
    }, t.exports = a;
  }, function (t, e, n) {
    function i(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) {
            n[e] = t[e];
          }

          return n;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
      }(t) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }();
    }

    t.exports = function (t) {
      function e(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
          e = (e << 5) - e + t.charCodeAt(n), e |= 0;
        }

        return r.colors[Math.abs(e) % r.colors.length];
      }

      function r(t) {
        var n;

        function i() {
          for (var t = arguments.length, e = new Array(t), o = 0; o < t; o++) {
            e[o] = arguments[o];
          }

          if (i.enabled) {
            var a = i,
                s = Number(new Date()),
                c = s - (n || s);
            a.diff = c, a.prev = n, a.curr = s, n = s, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
            var p = 0;
            e[0] = e[0].replace(/%([a-zA-Z%])/g, function (t, n) {
              if ("%%" === t) return t;
              p++;
              var i = r.formatters[n];

              if ("function" == typeof i) {
                var o = e[p];
                t = i.call(a, o), e.splice(p, 1), p--;
              }

              return t;
            }), r.formatArgs.call(a, e);
            var u = a.log || r.log;
            u.apply(a, e);
          }
        }

        return i.namespace = t, i.enabled = r.enabled(t), i.useColors = r.useColors(), i.color = e(t), i.destroy = o, i.extend = a, "function" == typeof r.init && r.init(i), r.instances.push(i), i;
      }

      function o() {
        var t = r.instances.indexOf(this);
        return -1 !== t && (r.instances.splice(t, 1), !0);
      }

      function a(t, e) {
        var n = r(this.namespace + (void 0 === e ? ":" : e) + t);
        return n.log = this.log, n;
      }

      function s(t) {
        return t.toString().substring(2, t.toString().length - 2).replace(/\.\*\?$/, "*");
      }

      return r.debug = r, r["default"] = r, r.coerce = function (t) {
        if (t instanceof Error) return t.stack || t.message;
        return t;
      }, r.disable = function () {
        var t = [].concat(i(r.names.map(s)), i(r.skips.map(s).map(function (t) {
          return "-" + t;
        }))).join(",");
        return r.enable(""), t;
      }, r.enable = function (t) {
        var e;
        r.save(t), r.names = [], r.skips = [];
        var n = ("string" == typeof t ? t : "").split(/[\s,]+/),
            i = n.length;

        for (e = 0; e < i; e++) {
          n[e] && ("-" === (t = n[e].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + t.substr(1) + "$")) : r.names.push(new RegExp("^" + t + "$")));
        }

        for (e = 0; e < r.instances.length; e++) {
          var o = r.instances[e];
          o.enabled = r.enabled(o.namespace);
        }
      }, r.enabled = function (t) {
        if ("*" === t[t.length - 1]) return !0;
        var e, n;

        for (e = 0, n = r.skips.length; e < n; e++) {
          if (r.skips[e].test(t)) return !1;
        }

        for (e = 0, n = r.names.length; e < n; e++) {
          if (r.names[e].test(t)) return !0;
        }

        return !1;
      }, r.humanize = n(42), Object.keys(t).forEach(function (e) {
        r[e] = t[e];
      }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = e, r.enable(r.load()), r;
    };
  }, function (t, e) {
    function n(t) {
      return (n = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var i = 1e3,
        r = 6e4,
        o = 60 * r,
        a = 24 * o;

    function s(t, e, n, i) {
      var r = e >= 1.5 * n;
      return Math.round(t / n) + " " + i + (r ? "s" : "");
    }

    t.exports = function (t, e) {
      e = e || {};
      var c = n(t);
      if ("string" === c && t.length > 0) return function (t) {
        if ((t = String(t)).length > 100) return;
        var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
        if (!e) return;
        var n = parseFloat(e[1]);

        switch ((e[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return 315576e5 * n;

          case "weeks":
          case "week":
          case "w":
            return 6048e5 * n;

          case "days":
          case "day":
          case "d":
            return n * a;

          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return n * o;

          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return n * r;

          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return n * i;

          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return n;

          default:
            return;
        }
      }(t);
      if ("number" === c && isFinite(t)) return e["long"] ? function (t) {
        var e = Math.abs(t);
        if (e >= a) return s(t, e, a, "day");
        if (e >= o) return s(t, e, o, "hour");
        if (e >= r) return s(t, e, r, "minute");
        if (e >= i) return s(t, e, i, "second");
        return t + " ms";
      }(t) : function (t) {
        var e = Math.abs(t);
        if (e >= a) return Math.round(t / a) + "d";
        if (e >= o) return Math.round(t / o) + "h";
        if (e >= r) return Math.round(t / r) + "m";
        if (e >= i) return Math.round(t / i) + "s";
        return t + "ms";
      }(t);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
  }, function (t, e, n) {
    n.r(e), n.d(e, "XhrAdapter", function () {
      return l;
    });

    var i = n(0),
        r = n(3),
        o = n.n(r),
        a = n(5),
        s = n(6),
        c = n(2),
        p = n(11),
        u = o()("fs:request:xhr"),
        l = function () {
      function t() {}

      return t.prototype.request = function (t) {
        var e = this;
        void 0 === t.filestackHeaders && (t.filestackHeaders = !0), (t = Object(p.d)(t)).headers = t.headers || {};
        var n = t.data,
            r = t.headers;
        a.e(n) && delete r["Content-Type"];
        var o = new XMLHttpRequest();

        if (t.blobResponse && (o.responseType = "blob"), t.auth) {
          if (!t.auth.username || 0 === t.auth.username.length || !t.auth.password || 0 === t.auth.password.length) return Promise.reject(new c.a("Basic auth: username and password are required " + t.auth, t));
          r.Authorization = "Basic " + btoa(unescape(encodeURIComponent(t.auth.username + ":" + t.auth.password))), u("Set request authorization to %s", t.auth.username + t.auth.password);
        }

        var l = t.url.trim();
        return /^http(s)?:\/\//.test(l) || (l = "https://" + l), l = Object(p.a)(l, t.params), u("Starting request to %s with options %O", l, t), o.open(t.method.toUpperCase(), l, !0), o.timeout = t.timeout, new Promise(function (a, f) {
          var d;
          if (t.cancelToken && (d = t.cancelToken.once("cancel", function (e) {
            return o && (o.abort(), o = null), u("Request canceled by user %s, config: %O", e, t), f(new c.a("Request aborted. Reason: " + e, t, null, c.b.ABORTED));
          })), o.onreadystatechange = function () {
            return Object(i.b)(e, void 0, void 0, function () {
              var e, n, r;
              return Object(i.d)(this, function (i) {
                switch (i.label) {
                  case 0:
                    return o && 4 === o.readyState && (0 !== o.status || o.responseURL) ? (e = Object(p.b)(o.getAllResponseHeaders()), n = o.response, r = {
                      data: n,
                      status: o.status,
                      statusText: o.statusText,
                      headers: e,
                      config: t
                    }, o = null, [4, Object(p.c)(r)]) : [2];

                  case 1:
                    return 500 <= (r = i.sent()).status && r.status <= 599 ? (u("Server error(5xx) - %O", r), [2, f(new c.a("Server error " + l, t, r, c.b.SERVER))]) : 400 <= r.status && r.status <= 499 ? (u("Request error(4xx) - %O", r), [2, f(new c.a("Request error " + l, t, r, c.b.REQUEST))]) : (t.cancelToken && t.cancelToken.removeListener(d), [2, a(r)]);
                }
              });
            });
          }, o.onabort = function () {
            o && (o = null, f(new c.a("Request aborted", t, null, c.b.ABORTED)));
          }, o.onerror = function (e) {
            o = null, u("Request error! %O", e), f(new c.a("Network Error", t, null, c.b.NETWORK));
          }, o.ontimeout = function () {
            o = null, u("Request timed out. %O", t), f(new c.a("Request timeout", t, null, c.b.TIMEOUT));
          }, "setRequestHeader" in o && r && Object.keys(r).length) for (var m in r) {
            void 0 !== r[m] && (u("Set request header %s to %s", m, r[m]), o.setRequestHeader(m, r[m]));
          }
          "function" == typeof t.onProgress && [s.a.POST, s.a.PUT].indexOf(t.method) > -1 && (o.upload ? (u("Bind to upload progress event"), o.upload.addEventListener("progress", t.onProgress)) : (u("Bind to progress event"), o.addEventListener("progress", t.onProgress))), void 0 === n && (n = null), o.send(n);
        });
      }, t;
    }();
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var r = n(7);

    e.convertToJson = function t(e, n) {
      var o = {};
      if (!(e.child && !r.isEmptyObject(e.child) || e.attrsMap && !r.isEmptyObject(e.attrsMap))) return r.isExist(e.val) ? e.val : "";
      r.isExist(e.val) && ("string" != typeof e.val || "" !== e.val && e.val !== n.cdataPositionChar) && ("strict" === n.arrayMode ? o[n.textNodeName] = [e.val] : o[n.textNodeName] = e.val), r.merge(o, e.attrsMap, n.arrayMode);

      for (var a = Object.keys(e.child), s = 0; s < a.length; s++) {
        var c = a[s];
        if (e.child[c] && e.child[c].length > 1) for (var p in o[c] = [], e.child[c]) {
          o[c].push(t(e.child[c][p], n));
        } else if (!0 === n.arrayMode) {
          var u = t(e.child[c][0], n);
          "object" === i(u) ? o[c] = [u] : o[c] = u;
        } else "strict" === n.arrayMode ? o[c] = [t(e.child[c][0], n)] : o[c] = t(e.child[c][0], n);
      }

      return o;
    };
  }, function (t, e, n) {
    t.exports = function (t, e, n) {
      this.tagname = t, this.parent = e, this.child = {}, this.attrsMap = {}, this.val = n, this.addChild = function (t) {
        Array.isArray(this.child[t.tagname]) ? this.child[t.tagname].push(t) : this.child[t.tagname] = [t];
      };
    };
  }, function (t, e, n) {
    var i = n(7),
        r = {
      allowBooleanAttributes: !1
    },
        o = ["allowBooleanAttributes"];

    function a(t, e) {
      for (var n = e; e < t.length; e++) {
        if ("?" != t[e] && " " != t[e]) ;else {
          var i = t.substr(n, e - n);
          if (e > 5 && "xml" === i) return f("InvalidXml", "XML declaration allowed only at the start of the document.", m(t, e));

          if ("?" == t[e] && ">" == t[e + 1]) {
            e++;
            break;
          }
        }
      }

      return e;
    }

    function s(t, e) {
      if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
        for (e += 3; e < t.length; e++) {
          if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
            e += 2;
            break;
          }
        }
      } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
        var n = 1;

        for (e += 8; e < t.length; e++) {
          if ("<" === t[e]) n++;else if (">" === t[e] && 0 === --n) break;
        }
      } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7]) for (e += 8; e < t.length; e++) {
        if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
          e += 2;
          break;
        }
      }

      return e;
    }

    e.validate = function (t, e) {
      e = i.buildOptions(e, r, o);
      var n,
          p = [],
          d = !1,
          h = !1;
      "\uFEFF" === t[0] && (t = t.substr(1));

      for (var y = 0; y < t.length; y++) {
        if ("<" !== t[y]) {
          if (" " === t[y] || "\t" === t[y] || "\n" === t[y] || "\r" === t[y]) continue;
          return f("InvalidChar", "char '".concat(t[y], "' is not expected."), m(t, y));
        }

        if ("?" === t[++y]) {
          if ((y = a(t, ++y)).err) return y;
        } else {
          if ("!" === t[y]) {
            y = s(t, y);
            continue;
          }

          var v = !1;
          "/" === t[y] && (v = !0, y++);

          for (var g = ""; y < t.length && ">" !== t[y] && " " !== t[y] && "\t" !== t[y] && "\n" !== t[y] && "\r" !== t[y]; y++) {
            g += t[y];
          }

          if ("/" === (g = g.trim())[g.length - 1] && (g = g.substring(0, g.length - 1), y--), n = g, !i.isName(n)) {
            return f("InvalidTag", 0 === g.trim().length ? "There is an unnecessary space between tag name and backward slash '</ ..'." : "Tag '".concat(g, "' is an invalid name."), m(t, y));
          }

          var b = c(t, y);
          if (!1 === b) return f("InvalidAttr", "Attributes for '".concat(g, "' have open quote."), m(t, y));
          var x = b.value;

          if (y = b.index, "/" === x[x.length - 1]) {
            var k = u(x = x.substring(0, x.length - 1), e);
            if (!0 !== k) return f(k.err.code, k.err.msg, m(t, y - x.length + k.err.line));
            d = !0;
          } else if (v) {
            if (!b.tagClosed) return f("InvalidTag", "Closing tag '".concat(g, "' doesn't have proper closing."), m(t, y));
            if (x.trim().length > 0) return f("InvalidTag", "Closing tag '".concat(g, "' can't have attributes or invalid starting."), m(t, y));
            var w = p.pop();
            if (g !== w) return f("InvalidTag", "Closing tag '".concat(w, "' is expected inplace of '").concat(g, "'."), m(t, y));
            0 == p.length && (h = !0);
          } else {
            var _ = u(x, e);

            if (!0 !== _) return f(_.err.code, _.err.msg, m(t, y - x.length + _.err.line));
            if (!0 === h) return f("InvalidXml", "Multiple possible root nodes found.", m(t, y));
            p.push(g), d = !0;
          }

          for (y++; y < t.length; y++) {
            if ("<" === t[y]) {
              if ("!" === t[y + 1]) {
                y = s(t, ++y);
                continue;
              }

              break;
            }

            if ("&" === t[y]) {
              var j = l(t, y);
              if (-1 == j) return f("InvalidChar", "char '&' is not expected.", m(t, y));
              y = j;
            }
          }

          "<" === t[y] && y--;
        }
      }

      return d ? !(p.length > 0) || f("InvalidXml", "Invalid '".concat(JSON.stringify(p, null, 4).replace(/\r?\n/g, ""), "' found."), 1) : f("InvalidXml", "Start tag expected.", 1);
    };

    function c(t, e) {
      for (var n = "", i = "", r = !1; e < t.length; e++) {
        if ('"' === t[e] || "'" === t[e]) {
          if ("" === i) i = t[e];else {
            if (i !== t[e]) continue;
            i = "";
          }
        } else if (">" === t[e] && "" === i) {
          r = !0;
          break;
        }
        n += t[e];
      }

      return "" === i && {
        value: n,
        index: e,
        tagClosed: r
      };
    }

    var p = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");

    function u(t, e) {
      for (var n = i.getAllMatches(t, p), r = {}, o = 0; o < n.length; o++) {
        if (0 === n[o][1].length) return f("InvalidAttr", "Attribute '".concat(n[o][2], "' has no space in starting."), h(t, n[o][0]));
        if (void 0 === n[o][3] && !e.allowBooleanAttributes) return f("InvalidAttr", "boolean attribute '".concat(n[o][2], "' is not allowed."), h(t, n[o][0]));
        var a = n[o][2];
        if (!d(a)) return f("InvalidAttr", "Attribute '".concat(a, "' is an invalid name."), h(t, n[o][0]));
        if (r.hasOwnProperty(a)) return f("InvalidAttr", "Attribute '".concat(a, "' is repeated."), h(t, n[o][0]));
        r[a] = 1;
      }

      return !0;
    }

    function l(t, e) {
      if (";" === t[++e]) return -1;
      if ("#" === t[e]) return function (t, e) {
        var n = /\d/;

        for ("x" === t[e] && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
          if (";" === t[e]) return e;
          if (!t[e].match(n)) break;
        }

        return -1;
      }(t, ++e);

      for (var n = 0; e < t.length; e++, n++) {
        if (!(t[e].match(/\w/) && n < 20)) {
          if (";" === t[e]) break;
          return -1;
        }
      }

      return e;
    }

    function f(t, e, n) {
      return {
        err: {
          code: t,
          msg: e,
          line: n
        }
      };
    }

    function d(t) {
      return i.isName(t);
    }

    function m(t, e) {
      return t.substring(0, e).split(/\r?\n/).length;
    }

    function h(t, e) {
      return t.indexOf(e) + e.length;
    }
  }, function (t, e, n) {
    var i = function i(t) {
      return String.fromCharCode(t);
    },
        r = {
      nilChar: i(176),
      missingChar: i(201),
      nilPremitive: i(175),
      missingPremitive: i(200),
      emptyChar: i(178),
      emptyValue: i(177),
      boundryChar: i(179),
      objStart: i(198),
      arrStart: i(204),
      arrayEnd: i(185)
    },
        o = [r.nilChar, r.nilPremitive, r.missingChar, r.missingPremitive, r.boundryChar, r.emptyChar, r.emptyValue, r.arrayEnd, r.objStart, r.arrStart],
        a = function t(e, n, i) {
      if ("string" == typeof n) return e && e[0] && void 0 !== e[0].val ? s(e[0].val) : s(e);
      var o,
          a = void 0 === (o = e) ? r.missingChar : null === o ? r.nilChar : !(o.child && 0 === Object.keys(o.child).length && (!o.attrsMap || 0 === Object.keys(o.attrsMap).length)) || r.emptyChar;

      if (!0 === a) {
        var p = "";

        if (Array.isArray(n)) {
          p += r.arrStart;
          var u = n[0],
              l = e.length;
          if ("string" == typeof u) for (var f = 0; f < l; f++) {
            var d = s(e[f].val);
            p = c(p, d);
          } else for (var m = 0; m < l; m++) {
            var h = t(e[m], u, i);
            p = c(p, h);
          }
          p += r.arrayEnd;
        } else {
          p += r.objStart;
          var y = Object.keys(n);

          for (var v in Array.isArray(e) && (e = e[0]), y) {
            var g = y[v],
                b = void 0;
            b = !i.ignoreAttributes && e.attrsMap && e.attrsMap[g] ? t(e.attrsMap[g], n[g], i) : g === i.textNodeName ? t(e.val, n[g], i) : t(e.child[g], n[g], i), p = c(p, b);
          }
        }

        return p;
      }

      return a;
    },
        s = function s(t) {
      switch (t) {
        case void 0:
          return r.missingPremitive;

        case null:
          return r.nilPremitive;

        case "":
          return r.emptyValue;

        default:
          return t;
      }
    },
        c = function c(t, e) {
      return p(e[0]) || p(t[t.length - 1]) || (t += r.boundryChar), t + e;
    },
        p = function p(t) {
      return -1 !== o.indexOf(t);
    };

    var u = n(15),
        l = n(7).buildOptions;

    e.convert2nimn = function (t, e, n) {
      return n = l(n, u.defaultOptions, u.props), a(t, e, n);
    };
  }, function (t, e, n) {
    var i = n(7),
        r = n(7).buildOptions,
        o = n(15),
        a = function t(e, n, r) {
      for (var o, a = "{", s = Object.keys(e.child), c = 0; c < s.length; c++) {
        var p = s[c];

        if (e.child[p] && e.child[p].length > 1) {
          for (var u in a += '"' + p + '" : [ ', e.child[p]) {
            a += t(e.child[p][u], n) + " , ";
          }

          a = a.substr(0, a.length - 1) + " ] ";
        } else a += '"' + p + '" : ' + t(e.child[p][0], n) + " ,";
      }

      return i.merge(a, e.attrsMap), i.isEmptyObject(a) ? i.isExist(e.val) ? e.val : "" : (i.isExist(e.val) && ("string" != typeof e.val || "" !== e.val && e.val !== n.cdataPositionChar) && (a += '"' + n.textNodeName + '" : ' + (!0 !== (o = e.val) && !1 !== o && isNaN(o) ? '"' + o + '"' : o)), "," === a[a.length - 1] && (a = a.substr(0, a.length - 2)), a + "}");
    };

    e.convertToJsonString = function (t, e) {
      return (e = r(e, o.defaultOptions, o.props)).indentBy = e.indentBy || "", a(t, e);
    };
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var r = n(7).buildOptions,
        o = {
      attributeNamePrefix: "@_",
      attrNodeName: !1,
      textNodeName: "#text",
      ignoreAttributes: !0,
      cdataTagName: !1,
      cdataPositionChar: "\\c",
      format: !1,
      indentBy: "  ",
      supressEmptyNode: !1,
      tagValueProcessor: function tagValueProcessor(t) {
        return t;
      },
      attrValueProcessor: function attrValueProcessor(t) {
        return t;
      }
    },
        a = ["attributeNamePrefix", "attrNodeName", "textNodeName", "ignoreAttributes", "cdataTagName", "cdataPositionChar", "format", "indentBy", "supressEmptyNode", "tagValueProcessor", "attrValueProcessor"];

    function s(t) {
      this.options = r(t, o, a), this.options.ignoreAttributes || this.options.attrNodeName ? this.isAttribute = function () {
        return !1;
      } : (this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = h), this.options.cdataTagName ? this.isCDATA = y : this.isCDATA = function () {
        return !1;
      }, this.replaceCDATAstr = c, this.replaceCDATAarr = p, this.options.format ? (this.indentate = m, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () {
        return "";
      }, this.tagEndChar = ">", this.newLine = ""), this.options.supressEmptyNode ? (this.buildTextNode = d, this.buildObjNode = l) : (this.buildTextNode = f, this.buildObjNode = u), this.buildTextValNode = f, this.buildObjectNode = u;
    }

    function c(t, e) {
      return t = this.options.tagValueProcessor("" + t), "" === this.options.cdataPositionChar || "" === t ? t + "<![CDATA[" + e + "]]" + this.tagEndChar : t.replace(this.options.cdataPositionChar, "<![CDATA[" + e + "]]" + this.tagEndChar);
    }

    function p(t, e) {
      if (t = this.options.tagValueProcessor("" + t), "" === this.options.cdataPositionChar || "" === t) return t + "<![CDATA[" + e.join("]]><![CDATA[") + "]]" + this.tagEndChar;

      for (var n in e) {
        t = t.replace(this.options.cdataPositionChar, "<![CDATA[" + e[n] + "]]>");
      }

      return t + this.newLine;
    }

    function u(t, e, n, i) {
      return n && !t.includes("<") ? this.indentate(i) + "<" + e + n + ">" + t + "</" + e + this.tagEndChar : this.indentate(i) + "<" + e + n + this.tagEndChar + t + this.indentate(i) + "</" + e + this.tagEndChar;
    }

    function l(t, e, n, i) {
      return "" !== t ? this.buildObjectNode(t, e, n, i) : this.indentate(i) + "<" + e + n + "/" + this.tagEndChar;
    }

    function f(t, e, n, i) {
      return this.indentate(i) + "<" + e + n + ">" + this.options.tagValueProcessor(t) + "</" + e + this.tagEndChar;
    }

    function d(t, e, n, i) {
      return "" !== t ? this.buildTextValNode(t, e, n, i) : this.indentate(i) + "<" + e + n + "/" + this.tagEndChar;
    }

    function m(t) {
      return this.options.indentBy.repeat(t);
    }

    function h(t) {
      return !!t.startsWith(this.options.attributeNamePrefix) && t.substr(this.attrPrefixLen);
    }

    function y(t) {
      return t === this.options.cdataTagName;
    }

    s.prototype.parse = function (t) {
      return this.j2x(t, 0).val;
    }, s.prototype.j2x = function (t, e) {
      for (var n = "", r = "", o = Object.keys(t), a = o.length, s = 0; s < a; s++) {
        var c = o[s];
        if (void 0 === t[c]) ;else if (null === t[c]) r += this.indentate(e) + "<" + c + "/" + this.tagEndChar;else if (t[c] instanceof Date) r += this.buildTextNode(t[c], c, "", e);else if ("object" !== i(t[c])) {
          var p = this.isAttribute(c);
          p ? n += " " + p + '="' + this.options.attrValueProcessor("" + t[c]) + '"' : this.isCDATA(c) ? t[this.options.textNodeName] ? r += this.replaceCDATAstr(t[this.options.textNodeName], t[c]) : r += this.replaceCDATAstr("", t[c]) : c === this.options.textNodeName ? t[this.options.cdataTagName] || (r += this.options.tagValueProcessor("" + t[c])) : r += this.buildTextNode(t[c], c, "", e);
        } else if (Array.isArray(t[c])) {
          if (this.isCDATA(c)) r += this.indentate(e), t[this.options.textNodeName] ? r += this.replaceCDATAarr(t[this.options.textNodeName], t[c]) : r += this.replaceCDATAarr("", t[c]);else for (var u = t[c].length, l = 0; l < u; l++) {
            var f = t[c][l];
            if (void 0 === f) ;else if (null === f) r += this.indentate(e) + "<" + c + "/" + this.tagEndChar;else if ("object" === i(f)) {
              var d = this.j2x(f, e + 1);
              r += this.buildObjNode(d.val, c, d.attrStr, e);
            } else r += this.buildTextNode(f, c, "", e);
          }
        } else if (this.options.attrNodeName && c === this.options.attrNodeName) for (var m = Object.keys(t[c]), h = m.length, y = 0; y < h; y++) {
          n += " " + m[y] + '="' + this.options.attrValueProcessor("" + t[c][m[y]]) + '"';
        } else {
          var v = this.j2x(t[c], e + 1);
          r += this.buildObjNode(v.val, c, v.attrStr, e);
        }
      }

      return {
        attrStr: n,
        val: r
      };
    }, t.exports = s;
  }, function (t, e, n) {
    var i = Object.prototype.hasOwnProperty,
        r = "~";

    function o() {}

    function a(t, e, n) {
      this.fn = t, this.context = e, this.once = n || !1;
    }

    function s(t, e, n, i, o) {
      if ("function" != typeof n) throw new TypeError("The listener must be a function");
      var s = new a(n, i || t, o),
          c = r ? r + e : e;
      return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], s] : t._events[c].push(s) : (t._events[c] = s, t._eventsCount++), t;
    }

    function c(t, e) {
      0 == --t._eventsCount ? t._events = new o() : delete t._events[e];
    }

    function p() {
      this._events = new o(), this._eventsCount = 0;
    }

    Object.create && (o.prototype = Object.create(null), new o().__proto__ || (r = !1)), p.prototype.eventNames = function () {
      var t,
          e,
          n = [];
      if (0 === this._eventsCount) return n;

      for (e in t = this._events) {
        i.call(t, e) && n.push(r ? e.slice(1) : e);
      }

      return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
    }, p.prototype.listeners = function (t) {
      var e = r ? r + t : t,
          n = this._events[e];
      if (!n) return [];
      if (n.fn) return [n.fn];

      for (var i = 0, o = n.length, a = new Array(o); i < o; i++) {
        a[i] = n[i].fn;
      }

      return a;
    }, p.prototype.listenerCount = function (t) {
      var e = r ? r + t : t,
          n = this._events[e];
      return n ? n.fn ? 1 : n.length : 0;
    }, p.prototype.emit = function (t, e, n, i, o, a) {
      var s = r ? r + t : t;
      if (!this._events[s]) return !1;
      var c,
          p,
          u = this._events[s],
          l = arguments.length;

      if (u.fn) {
        switch (u.once && this.removeListener(t, u.fn, void 0, !0), l) {
          case 1:
            return u.fn.call(u.context), !0;

          case 2:
            return u.fn.call(u.context, e), !0;

          case 3:
            return u.fn.call(u.context, e, n), !0;

          case 4:
            return u.fn.call(u.context, e, n, i), !0;

          case 5:
            return u.fn.call(u.context, e, n, i, o), !0;

          case 6:
            return u.fn.call(u.context, e, n, i, o, a), !0;
        }

        for (p = 1, c = new Array(l - 1); p < l; p++) {
          c[p - 1] = arguments[p];
        }

        u.fn.apply(u.context, c);
      } else {
        var f,
            d = u.length;

        for (p = 0; p < d; p++) {
          switch (u[p].once && this.removeListener(t, u[p].fn, void 0, !0), l) {
            case 1:
              u[p].fn.call(u[p].context);
              break;

            case 2:
              u[p].fn.call(u[p].context, e);
              break;

            case 3:
              u[p].fn.call(u[p].context, e, n);
              break;

            case 4:
              u[p].fn.call(u[p].context, e, n, i);
              break;

            default:
              if (!c) for (f = 1, c = new Array(l - 1); f < l; f++) {
                c[f - 1] = arguments[f];
              }
              u[p].fn.apply(u[p].context, c);
          }
        }
      }

      return !0;
    }, p.prototype.on = function (t, e, n) {
      return s(this, t, e, n, !1);
    }, p.prototype.once = function (t, e, n) {
      return s(this, t, e, n, !0);
    }, p.prototype.removeListener = function (t, e, n, i) {
      var o = r ? r + t : t;
      if (!this._events[o]) return this;
      if (!e) return c(this, o), this;
      var a = this._events[o];
      if (a.fn) a.fn !== e || i && !a.once || n && a.context !== n || c(this, o);else {
        for (var s = 0, p = [], u = a.length; s < u; s++) {
          (a[s].fn !== e || i && !a[s].once || n && a[s].context !== n) && p.push(a[s]);
        }

        p.length ? this._events[o] = 1 === p.length ? p[0] : p : c(this, o);
      }
      return this;
    }, p.prototype.removeAllListeners = function (t) {
      var e;
      return t ? (e = r ? r + t : t, this._events[e] && c(this, e)) : (this._events = new o(), this._eventsCount = 0), this;
    }, p.prototype.off = p.prototype.removeListener, p.prototype.addListener = p.prototype.on, p.prefixed = r, p.EventEmitter = p, t.exports = p;
  }, function (t, e) {
    t.exports = function (t) {
      if (!t.webpackPolyfill) {
        var e = Object.create(t);
        e.children || (e.children = []), Object.defineProperty(e, "loaded", {
          enumerable: !0,
          get: function get() {
            return e.l;
          }
        }), Object.defineProperty(e, "id", {
          enumerable: !0,
          get: function get() {
            return e.i;
          }
        }), Object.defineProperty(e, "exports", {
          enumerable: !0
        }), e.webpackPolyfill = 1;
      }

      return e;
    };
  }, function (t, e, n) {
    function i(t) {
      return (i = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    n.r(e), n.d(e, "Filestack", function () {
      return Se;
    }), n.d(e, "init", function () {
      return Ee;
    }), n.d(e, "version", function () {
      return Ce;
    }), n.d(e, "EAlignOptions", function () {
      return Ft;
    }), n.d(e, "EAlignFacesOptions", function () {
      return It;
    }), n.d(e, "EFitOptions", function () {
      return zt;
    }), n.d(e, "EBlurMode", function () {
      return Nt;
    }), n.d(e, "EShapeType", function () {
      return Mt;
    }), n.d(e, "ENoiseType", function () {
      return Rt;
    }), n.d(e, "EStyleType", function () {
      return $t;
    }), n.d(e, "EColorspaceType", function () {
      return qt;
    }), n.d(e, "ECropfacesType", function () {
      return Ut;
    }), n.d(e, "ESmartCropMode", function () {
      return Dt;
    }), n.d(e, "EImageWatermarkPosition", function () {
      return Lt;
    }), n.d(e, "EVideoTypes", function () {
      return Bt;
    }), n.d(e, "EUrlscreenshotAgent", function () {
      return Vt;
    }), n.d(e, "EUrlscreenshotMode", function () {
      return Ht;
    }), n.d(e, "EUrlscreenshotOrientation", function () {
      return Wt;
    }), n.d(e, "EVideoLocations", function () {
      return Zt;
    }), n.d(e, "EVideoAccess", function () {
      return Jt;
    }), n.d(e, "EVideoAccessMode", function () {
      return Yt;
    }), n.d(e, "transform", function () {
      return Qt;
    }), n.d(e, "Align", function () {
      return Y;
    }), n.d(e, "FitOptions", function () {
      return Q;
    }), n.d(e, "BlurMode", function () {
      return G;
    }), n.d(e, "ShapeType", function () {
      return K;
    }), n.d(e, "NoiseType", function () {
      return X;
    }), n.d(e, "StyleType", function () {
      return tt;
    }), n.d(e, "ColorspaceType", function () {
      return et;
    }), n.d(e, "CropfacesType", function () {
      return nt;
    }), n.d(e, "ImageWatermarkPosition", function () {
      return it;
    }), n.d(e, "SmartCropMode", function () {
      return rt;
    }), n.d(e, "VideoTypes", function () {
      return ot;
    }), n.d(e, "URLScreenshotAgent", function () {
      return at;
    }), n.d(e, "URLScreenshotMode", function () {
      return st;
    }), n.d(e, "URLScreenshotOrientation", function () {
      return ct;
    }), n.d(e, "Locations", function () {
      return pt;
    }), n.d(e, "VideoAccess", function () {
      return ut;
    }), n.d(e, "VideoAccessMode", function () {
      return lt;
    }), n.d(e, "EnhancePreset", function () {
      return ft;
    }), n.d(e, "Filelink", function () {
      return ht;
    }), n.d(e, "FilestackErrorType", function () {
      return R;
    }), n.d(e, "FsHttpMethod", function () {
      return wt.a;
    }), n.d(e, "FsRequest", function () {
      return Et;
    }), n.d(e, "FsRequestErrorCode", function () {
      return Ct.b;
    }), n.d(e, "FsRequestError", function () {
      return Ct.a;
    }), n.d(e, "FsCancelToken", function () {
      return Tt;
    }), n.d(e, "resolveCdnUrl", function () {
      return H.resolveCdnUrl;
    }), n.d(e, "resolveHost", function () {
      return H.resolveHost;
    }), n.d(e, "removeEmpty", function () {
      return H.removeEmpty;
    }), n.d(e, "uniqueTime", function () {
      return H.uniqueTime;
    }), n.d(e, "uniqueId", function () {
      return H.uniqueId;
    }), n.d(e, "extensionToMime", function () {
      return H.extensionToMime;
    }), n.d(e, "sanitizeName", function () {
      return H.sanitizeName;
    }), n.d(e, "filterObject", function () {
      return H.filterObject;
    }), n.d(e, "cleanUpCallbacks", function () {
      return H.cleanUpCallbacks;
    }), n.d(e, "md5", function () {
      return H.md5;
    }), n.d(e, "b64", function () {
      return H.b64;
    }), n.d(e, "getVersion", function () {
      return H.getVersion;
    }), n.d(e, "isMobile", function () {
      return H.isMobile;
    }), n.d(e, "isFacebook", function () {
      return H.isFacebook;
    }), n.d(e, "TransformSchema", function () {
      return U;
    }), n.d(e, "getSecurity", function () {
      return p;
    }), n.d(e, "validateWebhookSignature", function () {
      return u;
    }), n.d(e, "Client", function () {
      return Oe;
    }), n.d(e, "FilestackError", function () {
      return q;
    }), n.d(e, "PickerDisplayMode", function () {
      return we;
    }), n.d(e, "getMimetype", function () {
      return H.getMimetype;
    }), n.d(e, "PrefetchEvents", function () {
      return ve;
    });

    var r,
        o = function (t) {
      var e = {};

      function n(i) {
        if (e[i]) return e[i].exports;
        var r = e[i] = {
          i: i,
          l: !1,
          exports: {}
        };
        return t[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
      }

      return n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: i
        });
      }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module"
        }), Object.defineProperty(t, "__esModule", {
          value: !0
        });
      }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == i(t) && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t) for (var o in t) {
          n.d(r, o, function (e) {
            return t[e];
          }.bind(null, o));
        }
        return r;
      }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
          return t["default"];
        } : function () {
          return t;
        };
        return n.d(e, "a", e), e;
      }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }, n.p = "", n(n.s = 0);
    }([function (t, e, n) {
      n.r(e), n.d(e, "loadModules", function () {
        return c;
      }), n.d(e, "loadModule", function () {
        return p;
      }), n.d(e, "registerModule", function () {
        return u;
      }), n.d(e, "loadCss", function () {
        return l;
      }), n.d(e, "FILESTACK_MODULES", function () {
        return i;
      });

      var i,
          r = {},
          o = function () {
        var t,
            e = (t = "undefined" == typeof window ? r : window).filestackInternals;
        return e || (e = {
          modules: {}
        }, t.filestackInternals = e), e.modules || (e.modules = {}), e;
      }(),
          a = o && o.modules,
          s = function s(t, e, n) {
        t.detachEvent ? t.detachEvent("onreadystatechange", e) : t.removeEventListener(n, e, !1);
      },
          c = function c(t) {
        return Promise.all(t.map(function (t) {
          var e = t.id,
              n = t.url;
          return p(e, n);
        })).then(function (e) {
          var n = {};
          return e.forEach(function (e, i) {
            var r = t[i];
            n[r.id] = e;
          }), n;
        });
      },
          p = function p(t, e) {
        if ("undefined" == typeof window) return Promise.reject(new Error("Load module is working only on browser env"));
        if (!t) throw new Error("Module id is required");
        var n = a[t = "fs-loader-" + t];
        return n || (a[t] = {}, n = a[t]), n.instance ? Promise.resolve(n.instance) : n.promise ? n.promise : n.promise = new Promise(function (n, i) {
          var r = function e(r) {
            if ("load" === r.type || /^(complete|loaded)$/.test((r.currentTarget || r.srcElement).readyState)) {
              var o = r.currentTarget || r.srcElement;
              s(o, e, "load"), s(o, i, "error"), setTimeout(function () {
                return n(a[t] ? a[t].instance : void 0);
              }, 10);
            }
          },
              o = document.createElement("script");

          o.id = t, !o.attachEvent || o.attachEvent.toString && o.attachEvent.toString().indexOf("[native code") < 0 ? (o.addEventListener("load", r, !1), o.addEventListener("onerror", i, !1)) : o.attachEvent("onreadystatechange", r), o.setAttribute("crossorigin", "anonymous"), o.setAttribute("charset", "utf-8"), o.setAttribute("async", "true"), o.src = e, document.body.appendChild(o);
        });
      },
          u = function u(t, e, n) {
        if ("undefined" != typeof window) {
          if (!t) throw new Error("Module id is required");
          if (!a) throw new Error("Loader is not initialized");
          a[t = "fs-loader-" + t] && (a[t] = {
            instance: e,
            metadata: n
          });
        }
      },
          l = function l(t) {
        return null !== document.querySelector('link[href="'.concat(t, '"]')) ? Promise.resolve() : new Promise(function (e) {
          var n = document.getElementsByTagName("head")[0],
              i = document.createElement("link");
          i.rel = "stylesheet", i.href = t, i.addEventListener("load", function t() {
            e(), i.removeEventListener("load", t);
          }), n.appendChild(i);
        });
      };

      !function (t) {
        t.FILESTACK_SDK = "filestack-sdk", t.TRANSFORMS_UI = "transforms-ui", t.PICKER = "picker";
      }(i || (i = {}));
    }]),
        a = (o.loadModules, o.loadModule),
        s = o.registerModule,
        c = (o.loadCss, o.FILESTACK_MODULES),
        p = function p(t, e) {
      throw new Error("getSecurity is only supported in nodejs");
    },
        u = function u(t, e, n) {
      throw new Error("validateWebhookSignature is only supported in nodejs");
    },
        l = n(0),
        f = n(8);

    !function (t) {
      t.Ok = "ok", t.Exited = "exited", t.Crashed = "crashed", t.Abnormal = "abnormal";
    }(r || (r = {}));

    var d = n(9),
        m = n(54),
        h = Object(d.b)(),
        y = "Sentry Logger ",
        v = function () {
      function t() {
        this._enabled = !1;
      }

      return t.prototype.disable = function () {
        this._enabled = !1;
      }, t.prototype.enable = function () {
        this._enabled = !0;
      }, t.prototype.log = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        this._enabled && Object(d.a)(function () {
          h.console.log(y + "[Log]: " + t.join(" "));
        });
      }, t.prototype.warn = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        this._enabled && Object(d.a)(function () {
          h.console.warn(y + "[Warn]: " + t.join(" "));
        });
      }, t.prototype.error = function () {
        for (var t = [], e = 0; e < arguments.length; e++) {
          t[e] = arguments[e];
        }

        this._enabled && Object(d.a)(function () {
          h.console.error(y + "[Error]: " + t.join(" "));
        });
      }, t;
    }();

    h.__SENTRY__ = h.__SENTRY__ || {};
    var g,
        b = h.__SENTRY__.logger || (h.__SENTRY__.logger = new v()),
        x = n(13),
        k = n(4);
    !function (t) {
      t.PENDING = "PENDING", t.RESOLVED = "RESOLVED", t.REJECTED = "REJECTED";
    }(g || (g = {}));

    var w = function () {
      function t(t) {
        var e = this;
        this._state = g.PENDING, this._handlers = [], this._resolve = function (t) {
          e._setResult(g.RESOLVED, t);
        }, this._reject = function (t) {
          e._setResult(g.REJECTED, t);
        }, this._setResult = function (t, n) {
          e._state === g.PENDING && (Object(k.j)(n) ? n.then(e._resolve, e._reject) : (e._state = t, e._value = n, e._executeHandlers()));
        }, this._attachHandler = function (t) {
          e._handlers = e._handlers.concat(t), e._executeHandlers();
        }, this._executeHandlers = function () {
          if (e._state !== g.PENDING) {
            var t = e._handlers.slice();

            e._handlers = [], t.forEach(function (t) {
              t.done || (e._state === g.RESOLVED && t.onfulfilled && t.onfulfilled(e._value), e._state === g.REJECTED && t.onrejected && t.onrejected(e._value), t.done = !0);
            });
          }
        };

        try {
          t(this._resolve, this._reject);
        } catch (t) {
          this._reject(t);
        }
      }

      return t.resolve = function (e) {
        return new t(function (t) {
          t(e);
        });
      }, t.reject = function (e) {
        return new t(function (t, n) {
          n(e);
        });
      }, t.all = function (e) {
        return new t(function (n, i) {
          if (Array.isArray(e)) {
            if (0 !== e.length) {
              var r = e.length,
                  o = [];
              e.forEach(function (e, a) {
                t.resolve(e).then(function (t) {
                  o[a] = t, 0 === (r -= 1) && n(o);
                }).then(null, i);
              });
            } else n([]);
          } else i(new TypeError("Promise.all requires an array as input."));
        });
      }, t.prototype.then = function (e, n) {
        var i = this;
        return new t(function (t, r) {
          i._attachHandler({
            done: !1,
            onfulfilled: function onfulfilled(n) {
              if (e) try {
                return void t(e(n));
              } catch (t) {
                return void r(t);
              } else t(n);
            },
            onrejected: function onrejected(e) {
              if (n) try {
                return void t(n(e));
              } catch (t) {
                return void r(t);
              } else r(e);
            }
          });
        });
      }, t.prototype["catch"] = function (t) {
        return this.then(function (t) {
          return t;
        }, t);
      }, t.prototype["finally"] = function (e) {
        var n = this;
        return new t(function (t, i) {
          var r, o;
          return n.then(function (t) {
            o = !1, r = t, e && e();
          }, function (t) {
            o = !0, r = t, e && e();
          }).then(function () {
            o ? i(r) : t(r);
          });
        });
      }, t.prototype.toString = function () {
        return "[object SyncPromise]";
      }, t;
    }(),
        _ = function () {
      function t() {
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {};
      }

      return t.clone = function (e) {
        var n = new t();
        return e && (n._breadcrumbs = Object(l.e)(e._breadcrumbs), n._tags = Object(l.a)({}, e._tags), n._extra = Object(l.a)({}, e._extra), n._contexts = Object(l.a)({}, e._contexts), n._user = e._user, n._level = e._level, n._span = e._span, n._session = e._session, n._transactionName = e._transactionName, n._fingerprint = e._fingerprint, n._eventProcessors = Object(l.e)(e._eventProcessors)), n;
      }, t.prototype.addScopeListener = function (t) {
        this._scopeListeners.push(t);
      }, t.prototype.addEventProcessor = function (t) {
        return this._eventProcessors.push(t), this;
      }, t.prototype.setUser = function (t) {
        return this._user = t || {}, this._session && this._session.update({
          user: t
        }), this._notifyScopeListeners(), this;
      }, t.prototype.getUser = function () {
        return this._user;
      }, t.prototype.setTags = function (t) {
        return this._tags = Object(l.a)(Object(l.a)({}, this._tags), t), this._notifyScopeListeners(), this;
      }, t.prototype.setTag = function (t, e) {
        var n;
        return this._tags = Object(l.a)(Object(l.a)({}, this._tags), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this;
      }, t.prototype.setExtras = function (t) {
        return this._extra = Object(l.a)(Object(l.a)({}, this._extra), t), this._notifyScopeListeners(), this;
      }, t.prototype.setExtra = function (t, e) {
        var n;
        return this._extra = Object(l.a)(Object(l.a)({}, this._extra), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this;
      }, t.prototype.setFingerprint = function (t) {
        return this._fingerprint = t, this._notifyScopeListeners(), this;
      }, t.prototype.setLevel = function (t) {
        return this._level = t, this._notifyScopeListeners(), this;
      }, t.prototype.setTransactionName = function (t) {
        return this._transactionName = t, this._notifyScopeListeners(), this;
      }, t.prototype.setTransaction = function (t) {
        return this.setTransactionName(t);
      }, t.prototype.setContext = function (t, e) {
        var n;
        return null === e ? delete this._contexts[t] : this._contexts = Object(l.a)(Object(l.a)({}, this._contexts), ((n = {})[t] = e, n)), this._notifyScopeListeners(), this;
      }, t.prototype.setSpan = function (t) {
        return this._span = t, this._notifyScopeListeners(), this;
      }, t.prototype.getSpan = function () {
        return this._span;
      }, t.prototype.getTransaction = function () {
        var t,
            e,
            n,
            i,
            r = this.getSpan();
        return (null === (t = r) || void 0 === t ? void 0 : t.transaction) ? null === (e = r) || void 0 === e ? void 0 : e.transaction : (null === (i = null === (n = r) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === i ? void 0 : i.spans[0]) ? r.spanRecorder.spans[0] : void 0;
      }, t.prototype.setSession = function (t) {
        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
      }, t.prototype.getSession = function () {
        return this._session;
      }, t.prototype.update = function (e) {
        if (!e) return this;

        if ("function" == typeof e) {
          var n = e(this);
          return n instanceof t ? n : this;
        }

        return e instanceof t ? (this._tags = Object(l.a)(Object(l.a)({}, this._tags), e._tags), this._extra = Object(l.a)(Object(l.a)({}, this._extra), e._extra), this._contexts = Object(l.a)(Object(l.a)({}, this._contexts), e._contexts), e._user && Object.keys(e._user).length && (this._user = e._user), e._level && (this._level = e._level), e._fingerprint && (this._fingerprint = e._fingerprint)) : Object(k.e)(e) && (e = e, this._tags = Object(l.a)(Object(l.a)({}, this._tags), e.tags), this._extra = Object(l.a)(Object(l.a)({}, this._extra), e.extra), this._contexts = Object(l.a)(Object(l.a)({}, this._contexts), e.contexts), e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint)), this;
      }, t.prototype.clear = function () {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this;
      }, t.prototype.addBreadcrumb = function (t, e) {
        var n = Object(l.a)({
          timestamp: Object(m.a)()
        }, t);
        return this._breadcrumbs = void 0 !== e && e >= 0 ? Object(l.e)(this._breadcrumbs, [n]).slice(-e) : Object(l.e)(this._breadcrumbs, [n]), this._notifyScopeListeners(), this;
      }, t.prototype.clearBreadcrumbs = function () {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this;
      }, t.prototype.applyToEvent = function (t, e) {
        var n;

        if (this._extra && Object.keys(this._extra).length && (t.extra = Object(l.a)(Object(l.a)({}, this._extra), t.extra)), this._tags && Object.keys(this._tags).length && (t.tags = Object(l.a)(Object(l.a)({}, this._tags), t.tags)), this._user && Object.keys(this._user).length && (t.user = Object(l.a)(Object(l.a)({}, this._user), t.user)), this._contexts && Object.keys(this._contexts).length && (t.contexts = Object(l.a)(Object(l.a)({}, this._contexts), t.contexts)), this._level && (t.level = this._level), this._transactionName && (t.transaction = this._transactionName), this._span) {
          t.contexts = Object(l.a)({
            trace: this._span.getTraceContext()
          }, t.contexts);
          var i = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
          i && (t.tags = Object(l.a)({
            transaction: i
          }, t.tags));
        }

        return this._applyFingerprint(t), t.breadcrumbs = Object(l.e)(t.breadcrumbs || [], this._breadcrumbs), t.breadcrumbs = t.breadcrumbs.length > 0 ? t.breadcrumbs : void 0, this._notifyEventProcessors(Object(l.e)(j(), this._eventProcessors), t, e);
      }, t.prototype._notifyEventProcessors = function (t, e, n, i) {
        var r = this;
        return void 0 === i && (i = 0), new w(function (o, a) {
          var s = t[i];
          if (null === e || "function" != typeof s) o(e);else {
            var c = s(Object(l.a)({}, e), n);
            Object(k.j)(c) ? c.then(function (e) {
              return r._notifyEventProcessors(t, e, n, i + 1).then(o);
            }).then(null, a) : r._notifyEventProcessors(t, c, n, i + 1).then(o).then(null, a);
          }
        });
      }, t.prototype._notifyScopeListeners = function () {
        var t = this;
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach(function (e) {
          e(t);
        }), this._notifyingListeners = !1);
      }, t.prototype._applyFingerprint = function (t) {
        t.fingerprint = t.fingerprint ? Array.isArray(t.fingerprint) ? t.fingerprint : [t.fingerprint] : [], this._fingerprint && (t.fingerprint = t.fingerprint.concat(this._fingerprint)), t.fingerprint && !t.fingerprint.length && delete t.fingerprint;
      }, t;
    }();

    function j() {
      var t = Object(d.b)();
      return t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.globalEventProcessors = t.__SENTRY__.globalEventProcessors || [], t.__SENTRY__.globalEventProcessors;
    }

    var O = n(55),
        S = function () {
      function t(t) {
        this.errors = 0, this.sid = Object(d.c)(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = r.Ok, this.init = !0, t && this.update(t);
      }

      return t.prototype.update = function (t) {
        void 0 === t && (t = {}), t.user && (t.user.ip_address && (this.ipAddress = t.user.ip_address), t.did || (this.did = t.user.id || t.user.email || t.user.username)), this.timestamp = t.timestamp || Date.now(), t.sid && (this.sid = 32 === t.sid.length ? t.sid : Object(d.c)()), void 0 !== t.init && (this.init = t.init), t.did && (this.did = "" + t.did), "number" == typeof t.started && (this.started = t.started), "number" == typeof t.duration ? this.duration = t.duration : this.duration = this.timestamp - this.started, t.release && (this.release = t.release), t.environment && (this.environment = t.environment), t.ipAddress && (this.ipAddress = t.ipAddress), t.userAgent && (this.userAgent = t.userAgent), "number" == typeof t.errors && (this.errors = t.errors), t.status && (this.status = t.status);
      }, t.prototype.close = function (t) {
        t ? this.update({
          status: t
        }) : this.status === r.Ok ? this.update({
          status: r.Exited
        }) : this.update();
      }, t.prototype.toJSON = function () {
        return Object(O.a)({
          sid: "" + this.sid,
          init: this.init,
          started: new Date(this.started).toISOString(),
          timestamp: new Date(this.timestamp).toISOString(),
          status: this.status,
          errors: this.errors,
          did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
          duration: this.duration,
          attrs: Object(O.a)({
            release: this.release,
            environment: this.environment,
            ip_address: this.ipAddress,
            user_agent: this.userAgent
          })
        });
      }, t;
    }(),
        E = function () {
      function t(t, e, n) {
        void 0 === e && (e = new _()), void 0 === n && (n = 3), this._version = n, this._stack = [{}], this.getStackTop().scope = e, this.bindClient(t);
      }

      return t.prototype.isOlderThan = function (t) {
        return this._version < t;
      }, t.prototype.bindClient = function (t) {
        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations();
      }, t.prototype.pushScope = function () {
        var t = _.clone(this.getScope());

        return this.getStack().push({
          client: this.getClient(),
          scope: t
        }), t;
      }, t.prototype.popScope = function () {
        return !(this.getStack().length <= 1) && !!this.getStack().pop();
      }, t.prototype.withScope = function (t) {
        var e = this.pushScope();

        try {
          t(e);
        } finally {
          this.popScope();
        }
      }, t.prototype.getClient = function () {
        return this.getStackTop().client;
      }, t.prototype.getScope = function () {
        return this.getStackTop().scope;
      }, t.prototype.getStack = function () {
        return this._stack;
      }, t.prototype.getStackTop = function () {
        return this._stack[this._stack.length - 1];
      }, t.prototype.captureException = function (t, e) {
        var n = this._lastEventId = Object(d.c)(),
            i = e;

        if (!e) {
          var r = void 0;

          try {
            throw new Error("Sentry syntheticException");
          } catch (t) {
            r = t;
          }

          i = {
            originalException: t,
            syntheticException: r
          };
        }

        return this._invokeClient("captureException", t, Object(l.a)(Object(l.a)({}, i), {
          event_id: n
        })), n;
      }, t.prototype.captureMessage = function (t, e, n) {
        var i = this._lastEventId = Object(d.c)(),
            r = n;

        if (!n) {
          var o = void 0;

          try {
            throw new Error(t);
          } catch (t) {
            o = t;
          }

          r = {
            originalException: t,
            syntheticException: o
          };
        }

        return this._invokeClient("captureMessage", t, e, Object(l.a)(Object(l.a)({}, r), {
          event_id: i
        })), i;
      }, t.prototype.captureEvent = function (t, e) {
        var n = this._lastEventId = Object(d.c)();
        return this._invokeClient("captureEvent", t, Object(l.a)(Object(l.a)({}, e), {
          event_id: n
        })), n;
      }, t.prototype.lastEventId = function () {
        return this._lastEventId;
      }, t.prototype.addBreadcrumb = function (t, e) {
        var n = this.getStackTop(),
            i = n.scope,
            r = n.client;

        if (i && r) {
          var o = r.getOptions && r.getOptions() || {},
              a = o.beforeBreadcrumb,
              s = void 0 === a ? null : a,
              c = o.maxBreadcrumbs,
              p = void 0 === c ? 100 : c;

          if (!(p <= 0)) {
            var u = Object(m.a)(),
                f = Object(l.a)({
              timestamp: u
            }, t),
                h = s ? Object(d.a)(function () {
              return s(f, e);
            }) : f;
            null !== h && i.addBreadcrumb(h, Math.min(p, 100));
          }
        }
      }, t.prototype.setUser = function (t) {
        var e = this.getScope();
        e && e.setUser(t);
      }, t.prototype.setTags = function (t) {
        var e = this.getScope();
        e && e.setTags(t);
      }, t.prototype.setExtras = function (t) {
        var e = this.getScope();
        e && e.setExtras(t);
      }, t.prototype.setTag = function (t, e) {
        var n = this.getScope();
        n && n.setTag(t, e);
      }, t.prototype.setExtra = function (t, e) {
        var n = this.getScope();
        n && n.setExtra(t, e);
      }, t.prototype.setContext = function (t, e) {
        var n = this.getScope();
        n && n.setContext(t, e);
      }, t.prototype.configureScope = function (t) {
        var e = this.getStackTop(),
            n = e.scope,
            i = e.client;
        n && i && t(n);
      }, t.prototype.run = function (t) {
        var e = T(this);

        try {
          t(this);
        } finally {
          T(e);
        }
      }, t.prototype.getIntegration = function (t) {
        var e = this.getClient();
        if (!e) return null;

        try {
          return e.getIntegration(t);
        } catch (e) {
          return b.warn("Cannot retrieve integration " + t.id + " from the current Hub"), null;
        }
      }, t.prototype.startSpan = function (t) {
        return this._callExtensionMethod("startSpan", t);
      }, t.prototype.startTransaction = function (t, e) {
        return this._callExtensionMethod("startTransaction", t, e);
      }, t.prototype.traceHeaders = function () {
        return this._callExtensionMethod("traceHeaders");
      }, t.prototype.captureSession = function (t) {
        if (void 0 === t && (t = !1), t) return this.endSession();

        this._sendSessionUpdate();
      }, t.prototype.endSession = function () {
        var t, e, n, i, r;
        null === (n = null === (e = null === (t = this.getStackTop()) || void 0 === t ? void 0 : t.scope) || void 0 === e ? void 0 : e.getSession()) || void 0 === n || n.close(), this._sendSessionUpdate(), null === (r = null === (i = this.getStackTop()) || void 0 === i ? void 0 : i.scope) || void 0 === r || r.setSession();
      }, t.prototype.startSession = function (t) {
        var e = this.getStackTop(),
            n = e.scope,
            i = e.client,
            o = i && i.getOptions() || {},
            a = o.release,
            s = o.environment,
            c = new S(Object(l.a)(Object(l.a)({
          release: a,
          environment: s
        }, n && {
          user: n.getUser()
        }), t));

        if (n) {
          var p = n.getSession && n.getSession();
          p && p.status === r.Ok && p.update({
            status: r.Exited
          }), this.endSession(), n.setSession(c);
        }

        return c;
      }, t.prototype._sendSessionUpdate = function () {
        var t = this.getStackTop(),
            e = t.scope,
            n = t.client;

        if (e) {
          var i = e.getSession && e.getSession();
          i && n && n.captureSession && n.captureSession(i);
        }
      }, t.prototype._invokeClient = function (t) {
        for (var e, n = [], i = 1; i < arguments.length; i++) {
          n[i - 1] = arguments[i];
        }

        var r = this.getStackTop(),
            o = r.scope,
            a = r.client;
        a && a[t] && (e = a)[t].apply(e, Object(l.e)(n, [o]));
      }, t.prototype._callExtensionMethod = function (t) {
        for (var e = [], n = 1; n < arguments.length; n++) {
          e[n - 1] = arguments[n];
        }

        var i = C(),
            r = i.__SENTRY__;
        if (r && r.extensions && "function" == typeof r.extensions[t]) return r.extensions[t].apply(this, e);
        b.warn("Extension method " + t + " couldn't be found, doing nothing.");
      }, t;
    }();

    function C() {
      var t = Object(d.b)();
      return t.__SENTRY__ = t.__SENTRY__ || {
        extensions: {},
        hub: void 0
      }, t;
    }

    function T(t) {
      var e = C(),
          n = F(e);
      return I(e, t), n;
    }

    function A() {
      var t = C();
      return P(t) && !F(t).isOlderThan(3) || I(t, new E()), Object(x.b)() ? function (t) {
        var e, n, i;

        try {
          var r = null === (i = null === (n = null === (e = C().__SENTRY__) || void 0 === e ? void 0 : e.extensions) || void 0 === n ? void 0 : n.domain) || void 0 === i ? void 0 : i.active;
          if (!r) return F(t);

          if (!P(r) || F(r).isOlderThan(3)) {
            var o = F(t).getStackTop();
            I(r, new E(o.client, _.clone(o.scope)));
          }

          return F(r);
        } catch (e) {
          return F(t);
        }
      }(t) : F(t);
    }

    function P(t) {
      return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
    }

    function F(t) {
      return t && t.__SENTRY__ && t.__SENTRY__.hub || (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = new E()), t.__SENTRY__.hub;
    }

    function I(t, e) {
      return !!t && (t.__SENTRY__ = t.__SENTRY__ || {}, t.__SENTRY__.hub = e, !0);
    }

    function z(t) {
      for (var e = [], n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }

      var i = A();
      if (i && i[t]) return i[t].apply(i, Object(l.e)(e));
      throw new Error("No hub defined or " + t + " was not found on the hub, please open a bug report.");
    }

    function N(t, e) {
      var n;

      try {
        throw new Error("Sentry syntheticException");
      } catch (t) {
        n = t;
      }

      return z("captureException", t, {
        captureContext: e,
        originalException: t,
        syntheticException: n
      });
    }

    function M(t) {
      z("withScope", t);
    }

    var R,
        $ = {
      urls: {
        processUrl: "https://process.filestackapi.com",
        fileApiUrl: "https://www.filestackapi.com/api/file",
        uploadApiUrl: "https://upload.filestackapi.com",
        cloudApiUrl: "https://cloud.filestackapi.com",
        cdnUrl: "https://cdn.filestackcontent.com",
        pickerUrl: "https://static.filestackapi.com/picker/1.21.0/picker.js"
      }
    };
    !function (t) {
      t.VALIDATION = "validation", t.REQUEST = "request", t.OTHER = "other";
    }(R || (R = {}));

    var q = function (t) {
      function e(n, i, r) {
        var o = t.call(this, n) || this;
        return Object.setPrototypeOf(o, e.prototype), o.details = i, o.type = r, o;
      }

      return Object(l.c)(e, t), e;
    }(Error),
        U = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack Transformations",
      description: "Filestack transformations parameters",
      type: "object",
      additionalProperties: !1,
      properties: {
        flip: {
          type: "boolean",
          additionalProperties: !1
        },
        auto_image: {
          type: "boolean",
          additionalProperties: !1
        },
        no_metadata: {
          type: "boolean",
          additionalProperties: !1
        },
        compress: {
          additionalProperties: !1,
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              metadata: {
                type: "boolean",
                "default": !1
              }
            }
          }]
        },
        flop: {
          type: "boolean",
          additionalProperties: !1
        },
        enhance: {
          "default": !0,
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            additionalProperties: !1,
            properties: {
              preset: {
                type: "string",
                "enum": ["auto", "vivid", "beautify", "beautify_plus", "fix_dark", "fix_noise", "fix_tint", "outdoor", "fireworks"]
              }
            }
          }]
        },
        redeye: {
          type: "boolean",
          additionalProperties: !1
        },
        monochrome: {
          type: "boolean",
          additionalProperties: !1
        },
        negative: {
          type: "boolean",
          additionalProperties: !1
        },
        tags: {
          type: "boolean",
          additionalProperties: !1
        },
        sfw: {
          type: "boolean",
          additionalProperties: !1
        },
        imagesize: {
          type: "boolean",
          additionalProperties: !1
        },
        smart_crop: {
          width: {
            type: "integer",
            minimum: 0,
            maximum: 1e4
          },
          height: {
            type: "integer",
            minimum: 0,
            maximum: 1e4
          },
          mode: {
            type: "string",
            "default": "auto",
            "enum": ["face", "auto"]
          }
        },
        animate: {
          type: "object",
          properties: {
            delay: {
              type: "integer",
              minimum: 0,
              maximum: 1e4,
              "default": 1e3
            },
            loop: {
              type: "integer",
              minimum: 0,
              maximum: 1e3,
              "default": 0
            },
            width: {
              type: "integer",
              minimum: 1,
              maximum: 1800
            },
            height: {
              type: "integer",
              minimum: 1,
              maximum: 1800
            },
            fit: {
              type: "string",
              "default": "clip",
              "enum": ["clip", "scale", "crop"]
            },
            background: {
              $ref: "colorDef",
              "default": "transparent"
            },
            align: {
              $ref: "positionDef",
              "default": "center"
            }
          }
        },
        metadata: {
          type: "object",
          params: {
            type: "array",
            items: {
              type: "string",
              "enum": ["filename", "mimetype", "size", "width", "height", "writeable", "path", "container", "cloud", "exif", "source_url", "md5", "sha256", "sha1", "sha512"]
            },
            minItems: 0,
            uniqueItems: !0,
            additionalItems: !1
          },
          additionalProperties: !1
        },
        resize: {
          type: "object",
          properties: {
            width: {
              type: "number",
              minimum: 0,
              maximum: 1e4
            },
            height: {
              type: "number",
              minimum: 0,
              maximum: 1e4
            },
            fit: {
              type: "string",
              "enum": ["clip", "crop", "scale", "max"],
              "default": "clip"
            },
            align: {
              $ref: "positionDef",
              "default": "center"
            }
          },
          additionalProperties: !1,
          anyOf: [{
            required: ["width"]
          }, {
            required: ["height"]
          }]
        },
        crop: {
          type: "object",
          properties: {
            dim: {
              type: "array",
              additionalItems: !1,
              minItems: 4,
              items: [{
                type: "integer",
                minimum: 0,
                maximum: 1e5
              }, {
                type: "integer",
                minimum: 0,
                maximum: 1e5
              }, {
                type: "integer",
                minimum: 1,
                maximum: 1e5
              }, {
                type: "integer",
                minimum: 1,
                maximum: 1e5
              }]
            }
          },
          required: ["dim"]
        },
        rotate: {
          type: "object",
          properties: {
            deg: {
              oneOf: [{
                type: "string",
                "enum": ["exif"]
              }, {
                type: "number",
                minimum: 0,
                maximum: 359
              }]
            },
            exif: {
              type: "boolean"
            },
            background: {
              $ref: "colorDef",
              "default": "FFFFFFFF"
            }
          },
          additionalProperties: !1
        },
        detect_faces: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              maxsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              minsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              "export": {
                type: "boolean"
              },
              color: {
                $ref: "colorDef",
                "default": "000000FF"
              }
            },
            additionalProperties: !1
          }]
        },
        crop_faces: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              faces: {
                "default": 1,
                $ref: "facesDef"
              },
              width: {
                type: "number",
                minimum: 1,
                maximum: 1e4
              },
              height: {
                type: "number",
                minimum: 1,
                maximum: 1e4
              },
              maxsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              minsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              buffer: {
                type: "integer",
                minimum: 0,
                maximum: 1e4
              },
              mode: {
                type: "string",
                "enum": ["crop", "thumb", "fill"],
                "default": "thumb"
              }
            },
            additionalProperties: !1
          }]
        },
        pixelate_faces: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              faces: {
                $ref: "facesDef",
                "default": "all"
              },
              maxsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              minsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              buffer: {
                type: "integer",
                minimum: 0,
                maximum: 1e4
              },
              amount: {
                type: "integer",
                minimum: 2,
                maximum: 100,
                "default": 10
              },
              blur: {
                type: "number",
                minimum: 0,
                maximum: 20,
                "default": 4
              },
              type: {
                type: "string",
                "enum": ["rect", "oval"],
                "default": "rect"
              }
            },
            additionalProperties: !1
          }]
        },
        blur_faces: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              faces: {
                $ref: "facesDef",
                "default": "all"
              },
              maxsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              minsize: {
                type: "number",
                minimum: 0,
                maximum: 1e4,
                "default": .35
              },
              buffer: {
                type: "integer",
                minimum: 0,
                maximum: 1e4
              },
              amount: {
                type: "number",
                minimum: 0,
                maximum: 10,
                "default": 10
              },
              blur: {
                type: "number",
                minimum: 0,
                maximum: 20,
                "default": 4
              },
              type: {
                type: "string",
                "enum": ["rect", "oval"],
                "default": "rect"
              }
            },
            additionalProperties: !1
          }]
        },
        rounded_corners: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              radius: {
                oneOf: [{
                  type: "integer",
                  minimum: 1,
                  maximum: 1e4
                }, {
                  type: "string",
                  "enum": ["max"]
                }]
              },
              blur: {
                type: "number",
                minimum: 0,
                maximum: 20,
                "default": .3
              },
              background: {
                $ref: "colorDef"
              }
            },
            additionalProperties: !1
          }]
        },
        vignette: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              amount: {
                type: "integer",
                minimum: 0,
                maximum: 100,
                "default": 20
              },
              blurmode: {
                type: "string",
                "enum": ["gaussian", "linear"],
                "default": "gaussian"
              },
              background: {
                $ref: "colorDef"
              }
            },
            additionalProperties: !1
          }]
        },
        polaroid: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              rotate: {
                type: "integer",
                minimum: 0,
                maximum: 359
              },
              color: {
                $ref: "colorDef",
                "default": "snow"
              },
              background: {
                $ref: "colorDef"
              }
            },
            additionalProperties: !1
          }]
        },
        torn_edges: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              spread: {
                type: "array",
                additionalItems: !1,
                minItems: 2,
                items: [{
                  type: "integer",
                  minimum: 1,
                  maximum: 1e4,
                  "default": 1
                }, {
                  type: "integer",
                  minimum: 1,
                  maximum: 1e4,
                  "default": 10
                }]
              },
              background: {
                $ref: "colorDef"
              }
            },
            additionalProperties: !1
          }]
        },
        shadow: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              blur: {
                type: "number",
                minimum: 0,
                maximum: 20,
                "default": 100
              },
              opacity: {
                type: "integer",
                minimum: 0,
                maximum: 100,
                "default": 60
              },
              vector: {
                type: "array",
                additionalItems: !1,
                minItems: 2,
                items: [{
                  type: "integer",
                  minimum: -1e3,
                  maximum: 1e3,
                  "default": 4
                }, {
                  type: "integer",
                  minimum: -1e3,
                  maximum: 1e3,
                  "default": 4
                }]
              },
              color: {
                $ref: "colorDef"
              },
              background: {
                $ref: "colorDef"
              }
            },
            additionalProperties: !1
          }]
        },
        circle: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              background: {
                $ref: "colorDef"
              }
            },
            additionalProperties: !1
          }]
        },
        border: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              color: {
                $ref: "colorDef"
              },
              background: {
                $ref: "colorDef"
              },
              width: {
                type: "integer",
                minimum: 0,
                maximum: 1e3
              }
            },
            additionalProperties: !1
          }]
        },
        sharpen: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              amount: {
                type: "integer",
                minimum: 0,
                maximum: 20,
                "default": 2
              }
            },
            additionalProperties: !1
          }]
        },
        blur: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              amount: {
                type: "integer",
                minimum: 0,
                maximum: 20,
                "default": 2
              }
            },
            additionalProperties: !1
          }]
        },
        blackwhite: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              threshold: {
                type: "integer",
                minimum: 0,
                maximum: 100,
                "default": 50
              }
            },
            additionalProperties: !1
          }]
        },
        sepia: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              tone: {
                type: "integer",
                minimum: 0,
                maximum: 100,
                "default": 80
              }
            },
            additionalProperties: !1
          }]
        },
        pixelate: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              amount: {
                type: "integer",
                minimum: 2,
                maximum: 100,
                "default": 2
              }
            },
            additionalProperties: !1
          }]
        },
        oil_paint: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              amount: {
                type: "integer",
                minimum: 2,
                maximum: 100,
                "default": 2
              }
            },
            additionalProperties: !1
          }]
        },
        modulate: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              brightness: {
                type: "integer",
                minimum: 0,
                maximum: 1e4,
                "default": 100
              },
              saturation: {
                type: "integer",
                minimum: 0,
                maximum: 1e4,
                "default": 100
              },
              hue: {
                type: "integer",
                minimum: 0,
                maximum: 359,
                "default": 0
              }
            },
            additionalProperties: !1
          }]
        },
        ascii: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              foreground: {
                $ref: "colorDef",
                "default": "000000FF"
              },
              background: {
                $ref: "colorDef",
                "default": "FFFFFFFF"
              },
              colored: {
                type: "boolean",
                "default": !1
              },
              size: {
                type: "integer",
                minimum: 10,
                maximum: 100,
                "default": 100
              },
              reverse: {
                type: "boolean",
                "default": !1
              }
            },
            additionalProperties: !1
          }]
        },
        collage: {
          type: "object",
          properties: {
            files: {
              type: "array",
              minItems: 1,
              items: [{
                type: "string"
              }]
            },
            margin: {
              type: "integer",
              minimum: 1,
              maximum: 100,
              "default": 10
            },
            width: {
              type: "integer",
              minimum: 0,
              maximum: 1e4
            },
            height: {
              type: "integer",
              minimum: 0,
              maximum: 1e4
            },
            color: {
              $ref: "colorDef",
              "default": "FFFFFFFF"
            },
            fit: {
              type: "string",
              "enum": ["auto", "crop"]
            },
            autorotate: {
              type: "boolean",
              "default": !1
            }
          },
          required: ["width", "height", "files"],
          additionalProperties: !1
        },
        urlscreenshot: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              agent: {
                type: "string",
                "enum": ["desktop", "mobile"],
                "default": "desktop"
              },
              width: {
                type: "integer",
                minimum: 1,
                maximum: 1920,
                "default": 1024
              },
              height: {
                type: "integer",
                minimum: 1,
                maximum: 8e3,
                "default": 768
              },
              mode: {
                type: "string",
                "enum": ["all", "window"],
                "default": "all"
              },
              delay: {
                type: "integer",
                minimum: 0,
                maximum: 2e4,
                "default": 1e3
              },
              orientation: {
                type: "string",
                "enum": ["portrait", "landscape"],
                "default": "portrait"
              },
              device: {
                type: "string",
                "default": ""
              }
            },
            additionalProperties: !1
          }]
        },
        upscale: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              noise: {
                type: "string",
                "enum": ["none", "low", "medium", "high"],
                "default": "none"
              },
              upscale: {
                type: "boolean",
                "default": !0
              },
              style: {
                type: "string",
                "enum": ["artwork", "photo"],
                "default": "photo"
              }
            },
            additionalProperties: !1
          }]
        },
        output: {
          type: "object",
          additionalProperties: !1,
          properties: {
            format: {
              type: "string",
              "enum": ["doc", "docx", "html", "jpg", "odp", "ods", "odt", "pjpg", "pdf", "png", "ppt", "pptx", "svg", "txt", "webp", "xls", "xlsx"]
            },
            page: {
              type: "integer",
              minimum: 1,
              maximum: 99999
            },
            density: {
              type: "integer",
              minimum: 1,
              maximum: 500
            },
            compress: {
              type: "boolean"
            },
            quality: {
              oneOf: [{
                type: "string",
                "enum": ["input"]
              }, {
                type: "integer",
                minimum: 1,
                maximum: 100,
                "default": 95
              }]
            },
            secure: {
              type: "boolean",
              "default": !1
            },
            docinfo: {
              type: "boolean",
              "default": !1
            },
            strip: {
              type: "boolean",
              "default": !1
            },
            colorspace: {
              type: "string",
              "enum": ["rgb", "cmyk", "input"],
              "default": "rgb"
            },
            background: {
              $ref: "colorDef"
            },
            pageformat: {
              type: "string",
              "enum": ["a2", "a3", "a4", "a5", "b4", "b5", "letter", "legal", "tabloid"]
            },
            pageorientation: {
              type: "string",
              "enum": ["landscape", "portrait"]
            }
          }
        },
        pjpg: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            additionalProperties: !1,
            properties: {
              quality: {
                type: "integer",
                minimum: 0,
                maximum: 100
              },
              metadata: {
                type: "boolean",
                "default": !1
              }
            }
          }]
        },
        quality: {
          type: "object",
          additionalProperties: !1,
          properties: {
            value: {
              type: "integer",
              minimum: 1,
              maximum: 100
            }
          }
        },
        cache: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              expiry: {
                type: "integer"
              }
            }
          }]
        },
        video_convert: {
          type: "object",
          additionalProperties: !1,
          properties: {
            width: {
              type: "integer",
              minimum: 1,
              maximum: 4096
            },
            height: {
              type: "integer",
              minimum: 1,
              maximum: 4096
            },
            preset: {
              type: "string"
            },
            force: {
              type: "boolean"
            },
            title: {
              type: "string"
            },
            extname: {
              type: "string"
            },
            upscale: {
              type: "boolean"
            },
            aspect_mode: {
              type: "string",
              "enum": ["letterbox", "pad", "crop", "preserve", "constrain"],
              "default": "letterbox"
            },
            audio_sample_rate: {
              type: "integer",
              minimum: 1,
              maximum: 99999
            },
            two_pass: {
              type: "boolean"
            },
            video_bitrate: {
              type: "integer",
              minimum: 1,
              maximum: 5e3
            },
            fps: {
              type: "integer",
              minimum: 1,
              maximum: 300
            },
            keyframe_interval: {
              type: "integer",
              minimum: 250,
              maximum: 250
            },
            audio_bitrate: {
              type: "integer",
              minimum: 1,
              maximum: 999
            },
            audio_channels: {
              type: "integer",
              minimum: 1,
              maximum: 12
            },
            clip_length: {
              type: "string",
              pattern: "^([0-1]?\\d|2[0-3])(?::([0-5]?\\d))?(?::([0-5]?\\d))?$"
            },
            clip_offset: {
              type: "string",
              pattern: "^([0-1]?\\d|2[0-3])(?::([0-5]?\\d))?(?::([0-5]?\\d))?$"
            },
            watermark_url: {
              type: "string"
            },
            watermark_top: {
              type: "integer",
              minimum: 0,
              maximum: 9999
            },
            watermark_right: {
              type: "integer",
              minimum: 0,
              maximum: 9999
            },
            watermark_bottom: {
              type: "integer",
              minimum: 0,
              maximum: 9999
            },
            watermark_left: {
              type: "integer",
              minimum: 0,
              maximum: 9999
            },
            frame_count: {
              type: "integer",
              minimum: 1,
              maximum: 1,
              "default": 1
            },
            filename: {
              type: "string"
            },
            location: {
              $ref: "locationsDef"
            },
            path: {
              type: "string"
            },
            container: {
              type: "string"
            },
            access: {
              type: "string",
              "enum": ["public", "private"],
              "default": "public"
            }
          }
        },
        store: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            additionalProperties: !1,
            properties: {
              filename: {
                type: "string"
              },
              location: {
                $ref: "locationsDef"
              },
              path: {
                type: "string"
              },
              container: {
                type: "string"
              },
              region: {
                $ref: "regionsDef"
              },
              access: {
                type: "string",
                "enum": ["public", "private"],
                "default": "private"
              },
              base64decode: {
                type: "boolean"
              },
              workflows: {
                $ref: "workflowsDef"
              }
            }
          }]
        },
        watermark: {
          type: "object",
          properties: {
            file: {
              type: "string"
            },
            size: {
              type: "number",
              minimum: 0,
              maximum: 500
            },
            position: {
              $ref: "positionDef"
            }
          },
          required: ["file"],
          additionalProperties: !1
        },
        partial_blur: {
          type: "object",
          properties: {
            objects: {
              $ref: "objectsDef"
            },
            amount: {
              type: "number",
              minimum: 0,
              maximum: 20
            },
            blur: {
              type: "number",
              minimum: 0,
              maximum: 20
            },
            type: {
              type: "string",
              "enum": ["rect", "oval"]
            }
          },
          required: ["objects"]
        },
        partial_pixelate: {
          type: "object",
          properties: {
            objects: {
              $ref: "objectsDef"
            },
            amount: {
              type: "number",
              minimum: 2,
              maximum: 100
            },
            blur: {
              type: "number",
              minimum: 0,
              maximum: 20
            },
            type: {
              type: "string",
              "enum": ["rect", "oval"]
            }
          },
          required: ["objects"]
        },
        security: {
          type: "object",
          additionalProperties: !1,
          properties: {
            policy: {
              type: "string"
            },
            signature: {
              type: "string"
            }
          },
          required: ["policy", "signature"]
        },
        pdfinfo: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            properties: {
              colorinfo: {
                type: "boolean"
              }
            }
          }]
        },
        pdfconvert: {
          type: "object",
          additionalProperties: !1,
          properties: {
            pageorientation: {
              type: "string",
              "enum": ["portrait", "landscape"]
            },
            pageformat: {
              $ref: "pageFormatDef"
            },
            pages: {
              $ref: "pageRangeDef"
            }
          },
          anyOf: [{
            required: ["pageorientation"]
          }, {
            required: ["pageformat"]
          }, {
            required: ["pages"]
          }]
        },
        fallback: {
          type: "object",
          additionalProperties: !1,
          properties: {
            handle: {
              type: "string"
            },
            cache: {
              type: "integer",
              minimum: 1,
              maximum: 31536e3
            }
          },
          required: ["handle"]
        },
        zip: {
          type: "string"
        },
        minify_css: {
          type: "object",
          additionalProperties: !1,
          properties: {
            gzip: {
              type: "boolean"
            },
            level: {
              type: "number",
              "enum": [1, 2]
            }
          }
        },
        minify_js: {
          type: "object",
          additionalProperties: !1,
          properties: {
            gzip: {
              type: "boolean"
            },
            use_babel_polyfill: {
              type: "boolean"
            },
            keep_fn_name: {
              type: "boolean"
            },
            keep_class_name: {
              type: "boolean"
            },
            mangle: {
              type: "boolean"
            },
            merge_vars: {
              type: "boolean"
            },
            remove_console: {
              type: "boolean"
            },
            remove_undefined: {
              type: "boolean"
            },
            targets: {
              type: "string"
            }
          }
        }
      }
    },
        D = n(18),
        L = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack",
      description: "Filestack common definitions",
      type: "object",
      additionalProperties: !1,
      definitions: {
        workflowsDef: {
          id: "/workflowsDef",
          type: "array",
          additionalItems: !1,
          minItems: 1,
          maxItems: 20,
          items: [{
            oneOf: [{
              type: "string"
            }, {
              type: "object",
              additionalProperties: !1,
              properties: {
                id: {
                  type: "string"
                }
              }
            }]
          }]
        },
        securityCallDef: {
          id: "/securityCallDef",
          oneOf: [{
            additionalProperties: !1,
            type: "string",
            "enum": ["pick", "read", "stat", "write", "writeUrl", "store", "convert", "remove", "exif", "runWorkflow"]
          }, {
            type: "array",
            additionalProperties: !1,
            items: [{
              minItems: 1,
              maxItems: 10,
              type: "string",
              additionalProperties: !1,
              "enum": ["pick", "read", "stat", "write", "writeUrl", "store", "convert", "remove", "exif", "runWorkflow"]
            }]
          }]
        },
        regionsDef: {
          id: "/regionsDef",
          type: "string",
          pattern: "^[a-zA-Z]{2}-[a-zA-z]{1,}-[1-9]$",
          errorMessage: "AWS Region Param is in invalid format"
        },
        locationsDef: {
          id: "/locationsDef",
          type: "string",
          "enum": ["s3", "S3", "rackspace", "gcs", "azure", "dropbox"]
        },
        colorDef: {
          id: "colorDef",
          oneOf: [{
            type: "string",
            pattern: "^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
          }, {
            type: "string",
            "enum": ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkgrey", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fractal", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray0", "gray1", "gray2", "gray3", "gray4", "gray5", "gray6", "gray7", "gray8", "gray9", "gray10", "gray11", "gray12", "gray13", "gray14", "gray15", "gray16", "gray17", "gray18", "gray19", "gray20", "gray21", "gray22", "gray23", "gray24", "gray25", "gray26", "gray27", "gray28", "gray29", "gray30", "gray31", "gray32", "gray33", "gray34", "gray35", "gray36", "gray37", "gray38", "gray39", "gray40", "gray41", "gray42", "gray43", "gray44", "gray45", "gray46", "gray47", "gray48", "gray49", "gray50", "gray51", "gray52", "gray53", "gray54", "gray55", "gray56", "gray57", "gray58", "gray59", "gray60", "gray61", "gray62", "gray63", "gray64", "gray65", "gray66", "gray67", "gray68", "gray69", "gray70", "gray71", "gray72", "gray73", "gray74", "gray75", "gray76", "gray77", "gray78", "gray79", "gray80", "gray81", "gray82", "gray83", "gray84", "gray85", "gray86", "gray87", "gray88", "gray89", "gray90", "gray91", "gray92", "gray93", "gray94", "gray95", "gray96", "gray97", "gray98", "gray99", "gray100", "gray", "green", "greenyellow", "grey", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "none", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen", "transparent"]
          }]
        },
        pageFormatDef: {
          id: "/pageFormatDef",
          type: "string",
          "enum": ["a2", "a3", "a4", "a5", "b4", "b5", "letter", "legal", "tabloid"]
        },
        pageRangeDef: {
          id: "/pageRangeDef",
          type: "array",
          uniqueItems: !0,
          items: [{
            oneOf: [{
              type: "integer",
              minimum: 1
            }, {
              type: "string",
              pattern: "^(\\d+(?:-\\d+)?)$|^(-\\d+)$|^(\\d+-)$",
              errorMessage: 'Param should be provided in one of the following formats: "1,2,3,5", "1-3", "1-", "-2" '
            }]
          }]
        },
        facesDef: {
          id: "/facesDef",
          oneOf: [{
            type: "string",
            "enum": ["all"]
          }, {
            type: "integer",
            minimum: 1,
            maximum: 1e3
          }, {
            type: "array",
            uniqueItems: !0,
            items: [{
              type: "integer",
              minimum: 1,
              maximum: 1e3
            }]
          }]
        },
        objectsDef: {
          id: "/objectsDef",
          type: "array",
          minItems: 1,
          maxItems: 50,
          items: [{
            type: "array",
            additionalItems: !1,
            minItems: 4,
            items: [{
              type: "integer",
              minimum: 0,
              maximum: 1e4
            }, {
              type: "integer",
              minimum: 0,
              maximum: 1e4
            }, {
              type: "integer",
              minimum: 1,
              maximum: 1e4
            }, {
              type: "integer",
              minimum: 1,
              maximum: 1e4
            }]
          }]
        },
        positionDef: {
          id: "/positionDef",
          "default": ["middle", "center"],
          oneOf: [{
            type: "string",
            "enum": ["top", "middle", "bottom", "left", "center", "right", "faces"]
          }, {
            type: "array",
            uniqueItems: !0,
            additionalItems: !1,
            minItems: 2,
            maxItems: 2,
            "default": ["middle", "center"],
            items: [{
              type: "string",
              "enum": ["top", "middle", "bottom"]
            }, {
              type: "string",
              "enum": ["left", "center", "right"]
            }]
          }]
        }
      }
    },
        B = new D.Validator();

    D.Validator.prototype.customFormats.callback = function (t) {
      return "function" == typeof t;
    }, D.Validator.prototype.customFormats.HTMLContainer = function (t) {
      return "string" == typeof t || t.toString && t.toString().indexOf("HTML") > -1;
    };

    var V = function V(t) {
      return function (e) {
        return B.addSchema(L), B.validate(e, t);
      };
    },
        H = n(1),
        W = n(3),
        Z = n.n(W);

    function J(t) {
      return (J = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var Y,
        Q,
        G,
        K,
        X,
        tt,
        et,
        nt,
        it,
        rt,
        ot,
        at,
        st,
        ct,
        pt,
        ut,
        lt,
        ft,
        dt = Z()("fs:filelink");
    !function (t) {
      t.left = "left", t.right = "right", t.center = "center", t.bottom = "bottom", t.top = "top", t.faces = "faces", t.middle = "middle";
    }(Y || (Y = {})), function (t) {
      t.clip = "clip", t.crop = "crop", t.scale = "scale", t.max = "max";
    }(Q || (Q = {})), function (t) {
      t.linear = "linear", t.gaussian = "gaussian";
    }(G || (G = {})), function (t) {
      t.oval = "oval", t.rect = "rect";
    }(K || (K = {})), function (t) {
      t.none = "none", t.low = "low", t.medium = "medium", t.high = "high";
    }(X || (X = {})), function (t) {
      t.artwork = "artwork", t.photo = "photo";
    }(tt || (tt = {})), function (t) {
      t.RGB = "RGB", t.CMYK = "CMYK", t.Input = "Input";
    }(et || (et = {})), function (t) {
      t.thumb = "thumb", t.crop = "crop", t.fill = "fill";
    }(nt || (nt = {})), function (t) {
      t.top = "top", t.middle = "middle", t.bottom = "bottom", t.left = "left", t.center = "center", t.right = "right";
    }(it || (it = {})), function (t) {
      t.face = "face", t.auto = "auto";
    }(rt || (rt = {})), function (t) {
      t.h264 = "h264", t.h264_hi = "h264.hi", t.webm = "webm", t["webm-hi"] = "webm.hi", t.ogg = "ogg", t["ogg-hi"] = "ogg.hi", t["hls-variant"] = "hls.variant", t.mp3 = "mp3", t.oga = "oga", t.m4a = "m4a", t.aac = "aac", t.hls = "hls.variant.audio";
    }(ot || (ot = {})), function (t) {
      t.desktop = "desktop", t.mobile = "mobile";
    }(at || (at = {})), function (t) {
      t.all = "all", t.window = "window";
    }(st || (st = {})), function (t) {
      t.portrait = "portrait", t.landscape = "landscape";
    }(ct || (ct = {})), function (t) {
      t.s3 = "s3", t.azure = "azure", t.gcs = "gcs", t.rackspace = "rackspace", t.dropbox = "dropbox";
    }(pt || (pt = {})), function (t) {
      t["private"] = "private", t["public"] = "public";
    }(ut || (ut = {})), function (t) {
      t.preserve = "preserve", t.constrain = "constrain", t.letterbox = "letterbox", t.pad = "pad", t.crop = "crop";
    }(lt || (lt = {})), function (t) {
      t.auto = "auto", t.vivid = "vivid", t.beautify = "beautify", t.beautifyPlus = "beautify_plus", t.fixDark = "fix_dark", t.fixNoise = "fix_noise", t.fixTint = "fix_tint", t.outdor = "outdoor", t.fireworks = "fireworks";
    }(ft || (ft = {}));

    var mt = /^[\w\-]{20}|wf:\/\/[\w\-\/]{106}$/,
        ht = function () {
      function t(t, e) {
        this.transforms = [], this.b64 = !1, this.useValidator = !0, this.arrayToObject = function (t, e, n) {
          return void 0 === t && (t = []), t.reduce(function (t, i) {
            return t[i[e]] = i[n], t;
          }, {});
        }, this.apikey = e, this.setSource(t);
      }

      return t.prototype.setBase64 = function (t) {
        return this.b64 = t, this;
      }, t.prototype.setUseValidator = function (t) {
        return this.useValidator = t, this;
      }, t.prototype.setCname = function (t) {
        return this.cname = t, this;
      }, t.prototype.setCustomDomain = function (t) {
        return this.customDomain = t, this;
      }, t.prototype.setSource = function (t) {
        this.source = t;
        var e = this.isSourceExternal();
        if (dt("Source " + t + " - isExternal? " + e), e && !this.apikey) throw new q("External sources requires apikey to handle transforms");
        if (!e && "string" == typeof this.source && !mt.test(this.source) && -1 === this.source.indexOf("filestackcontent")) throw new q("Invalid filestack source provided");
      }, t.prototype.getValidationSchema = function () {
        return U;
      }, t.prototype.getTransformations = function () {
        return this.useValidator && this.validateTasks(this.transforms), this.transforms;
      }, t.prototype.toString = function () {
        var t = [];
        t.push(this.getCdnHost()), this.useValidator && this.validateTasks(this.transforms), this.apikey && t.push(this.apikey);
        var e = this.generateTransformString(),
            n = this.source;
        return this.b64 ? (this.transforms.length > 0 && (e = "b64/" + Object(H.b64)(JSON.stringify(this.transforms), !0)), Array.isArray(n) && (n = this.arrayToString(n)), n = "b64://" + Object(H.b64)(n, !0)) : n = Array.isArray(n) ? this.arrayToString(n) : this.escapeValue(n), e.length && t.push(e), t.push(n), t.join("/");
      }, t.prototype.addTask = function (t, e) {
        if (Z()("Add task  " + t + " with params %O", e), "cache" !== t && "boolean" == typeof e) {
          if (!e) return this;
          e = void 0;
        } else "object" !== J(e) || Object.keys(e).length || (e = void 0);

        return this.transforms.push({
          name: t,
          params: e
        }), this;
      }, t.prototype.getTasks = function () {
        return this.transforms;
      }, t.prototype.reset = function () {
        return this.transforms = [], this;
      }, t.prototype.autoImage = function () {
        return this.addTask("auto_image", !0);
      }, t.prototype.flip = function () {
        return this.addTask("flip", !0);
      }, t.prototype.flop = function () {
        return this.addTask("flop", !0);
      }, t.prototype.imagesize = function () {
        return this.addTask("imagesize", !0);
      }, t.prototype.noMetadata = function () {
        return this.addTask("no_metadata", !0);
      }, t.prototype.pjpg = function (t) {
        return this.addTask("pjpg", t);
      }, t.prototype.smartCrop = function (t) {
        return this.addTask("smart_crop", t);
      }, t.prototype.watermark = function (t) {
        return this.addTask("watermark", t);
      }, t.prototype.enhance = function (t) {
        return this.addTask("enhance", t || !0);
      }, t.prototype.redeye = function () {
        return this.addTask("redeye", !0);
      }, t.prototype.monochrome = function () {
        return this.addTask("monochrome", !0);
      }, t.prototype.compress = function (t) {
        return this.addTask("compress", t || !0);
      }, t.prototype.negative = function () {
        return this.addTask("negative", !0);
      }, t.prototype.tags = function () {
        return this.addTask("tags", !0);
      }, t.prototype.sfw = function () {
        return this.addTask("sfw", !0);
      }, t.prototype.animate = function (t) {
        return this.addTask("animate", t);
      }, t.prototype.store = function (t) {
        return this.addTask("store", t);
      }, t.prototype.cache = function (t) {
        return this.addTask("cache", t);
      }, t.prototype.resize = function (t) {
        return this.addTask("resize", t);
      }, t.prototype.crop = function (t) {
        return this.addTask("crop", t);
      }, t.prototype.rotate = function (t) {
        return this.addTask("rotate", t);
      }, t.prototype.detectFaces = function (t) {
        return this.addTask("detect_faces", t);
      }, t.prototype.cropFaces = function (t) {
        return this.addTask("crop_faces", t);
      }, t.prototype.pixelateFaces = function (t) {
        return this.addTask("pixelate_faces", t);
      }, t.prototype.blurFaces = function (t) {
        return this.addTask("blur_faces", t);
      }, t.prototype.roundedCorners = function (t) {
        return this.addTask("rounded_corners", t);
      }, t.prototype.polaroid = function (t) {
        return this.addTask("polaroid", t);
      }, t.prototype.vignette = function (t) {
        return this.addTask("vignette", t);
      }, t.prototype.tornEdges = function (t) {
        return this.addTask("torn_edges", t);
      }, t.prototype.shadow = function (t) {
        return this.addTask("shadow", t);
      }, t.prototype.circle = function (t) {
        return this.addTask("circle", t);
      }, t.prototype.border = function (t) {
        return this.addTask("border", t);
      }, t.prototype.sharpen = function (t) {
        return this.addTask("sharpen", t);
      }, t.prototype.blur = function (t) {
        return this.addTask("blur", t);
      }, t.prototype.blackwhite = function (t) {
        return this.addTask("blackwhite", t);
      }, t.prototype.sepia = function (t) {
        return this.addTask("sepia", t);
      }, t.prototype.pixelate = function (t) {
        return this.addTask("pixelate", t);
      }, t.prototype.oilPaint = function (t) {
        return this.addTask("oil_paint", t);
      }, t.prototype.modulate = function (t) {
        return this.addTask("modulate", t);
      }, t.prototype.partialPixelate = function (t) {
        return this.addTask("partial_pixelate", t);
      }, t.prototype.partialBlur = function (t) {
        return this.addTask("partial_blur", t);
      }, t.prototype.collage = function (t) {
        return this.addTask("collage", t);
      }, t.prototype.upscale = function (t) {
        return this.addTask("upscale", t);
      }, t.prototype.ascii = function (t) {
        return this.addTask("ascii", t);
      }, t.prototype.quality = function (t) {
        return this.addTask("quality", t);
      }, t.prototype.security = function (t) {
        return this.addTask("security", t);
      }, t.prototype.output = function (t) {
        return this.addTask("output", t);
      }, t.prototype.videoConvert = function (t) {
        return this.addTask("video_convert", t);
      }, t.prototype.URLScreenshot = function (t) {
        return this.addTask("urlscreenshot", t);
      }, t.prototype.PDFInfo = function (t) {
        return this.addTask("pdfinfo", t);
      }, t.prototype.PDFConvert = function (t) {
        return this.addTask("pdfconvert", t);
      }, t.prototype.fallback = function (t) {
        return this.addTask("fallback", t);
      }, t.prototype.zip = function () {
        return this.addTask("zip", !0);
      }, t.prototype.minifyCss = function (t) {
        return this.addTask("minify_css", t);
      }, t.prototype.minifyJs = function (t) {
        return this.addTask("minify_js", t);
      }, t.prototype.isSourceExternal = function () {
        if (!this.source) throw new q("Source not Set");
        var t = Array.isArray(this.source) ? this.source : [this.source];

        for (var e in t) {
          if (t.hasOwnProperty(e) && (0 === t[e].indexOf("src:") || 0 === t[e].indexOf("http") && -1 === t[e].indexOf("filestackcontent"))) return !0;
        }

        return !1;
      }, t.prototype.validateTasks = function (e) {
        var n = t.validator(this.arrayToObject(e, "name", "params"));
        if (n.errors.length) throw new q("Params validation error", n.errors, R.VALIDATION);
      }, t.prototype.getCdnHost = function () {
        var t = Object.assign({}, $.urls);
        return this.customDomain && (t.cdnUrl = this.customDomain), (t = Object(H.resolveHost)(t, this.cname)).cdnUrl;
      }, t.prototype.generateTransformString = function () {
        var t = this,
            e = [];
        return this.transforms.forEach(function (n) {
          e.push(t.optionToString(n.name, n.params));
        }), e.join("/");
      }, t.prototype.optionToString = function (t, e) {
        var n = this,
            i = [];
        return void 0 === e ? t : "boolean" == typeof e ? e || "cache" !== t ? t : "cache=false" : (Object.keys(e).forEach(function (t) {
          Array.isArray(e[t]) ? i.push(t + ":" + n.arrayToString(e[t])) : i.push(t + ":" + n.escapeValue(e[t]));
        }), t + "=" + i.join(","));
      }, t.prototype.escapeValue = function (t) {
        return "string" != typeof t ? t : t.indexOf("/") > -1 || t.indexOf(",") > -1 ? '"' + t + '"' : t;
      }, t.prototype.arrayToString = function (t) {
        var e = this;
        return "[" + t.map(function (t) {
          return Array.isArray(t) ? e.arrayToString(t) : e.escapeValue(t);
        }) + "]";
      }, t.validator = V(U), t;
    }(),
        yt = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack Store",
      description: "Filestack Store Options",
      type: "object",
      additionalProperties: !1,
      properties: {
        filename: {
          oneOf: [{
            type: "string"
          }, {
            format: "callback"
          }]
        },
        location: {
          $ref: "locationsDef"
        },
        path: {
          type: "string"
        },
        container: {
          type: "string"
        },
        region: {
          $ref: "regionsDef"
        },
        access: {
          type: "string",
          "enum": ["public", "private"],
          "default": "private"
        },
        base64decode: {
          type: "boolean"
        },
        workflows: {
          $ref: "workflowsDef"
        },
        disableStorageKey: {
          type: "boolean"
        },
        tags: {
          type: "object",
          additionalProperties: {
            type: "string"
          }
        },
        sanitizer: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            additionalProperties: !1,
            properties: {
              exclude: {
                type: "array",
                items: [{
                  type: "string"
                }]
              },
              replacement: {
                type: "string"
              }
            }
          }]
        }
      }
    },
        vt = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack Preview",
      description: "Filestack Preview Options",
      type: "object",
      additionalProperties: !1,
      properties: {
        id: {
          type: "string"
        },
        css: {
          type: "string"
        }
      }
    },
        gt = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack Upload",
      description: "Filestack Upload Options",
      type: "object",
      additionalProperties: !1,
      properties: {
        partSize: {
          type: "integer",
          minimum: 5242880
        },
        concurrency: {
          type: "integer",
          minimum: 1,
          maximum: 20
        },
        progressInterval: {
          type: "integer",
          minimum: 1
        },
        retry: {
          type: "integer",
          minimum: 0,
          maximum: 20
        },
        retryFactor: {
          type: "integer"
        },
        retryMaxTime: {
          type: "integer"
        },
        timeout: {
          type: "integer",
          minimum: 1,
          maximum: 36e5
        },
        intelligent: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "string",
            "enum": ["fallback"]
          }]
        },
        intelligentChunkSize: {
          type: "integer"
        },
        onProgress: {
          format: "callback"
        },
        onRetry: {
          format: "callback"
        },
        disableIntegrityCheck: {
          type: "boolean"
        },
        tags: {
          type: "object",
          maxItems: 10,
          additionalProperties: {
            type: "string",
            maxlength: 256
          }
        }
      }
    },
        bt = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack Picker",
      description: "Filestack Picker Options",
      type: "object",
      additionalProperties: !1,
      properties: {
        allowManualRetry: {
          type: "boolean"
        },
        accept: {
          additionalProperties: !1,
          oneOf: [{
            type: "string"
          }, {
            type: "array",
            minItems: 1,
            items: [{
              type: "string"
            }]
          }]
        },
        fromSources: {
          type: "array",
          items: [{
            type: ["string", "object"],
            additionalProperties: !1,
            "enum": ["local_file_system", "url", "imagesearch", "facebook", "instagram", "googledrive", "unsplash", "dropbox", "webcam", "video", "audio", "box", "github", "gmail", "picasa", "onedrive", "onedriveforbusiness", "clouddrive", "googlephotos", "customsource", "tint"]
          }]
        },
        tags: {
          type: "object",
          additionalProperties: {
            type: "string"
          }
        },
        container: {
          format: "HTMLContainer"
        },
        cleanupImageExif: {
          oneOf: [{
            type: "boolean"
          }, {
            type: "object",
            additionalProperties: !1,
            properties: {
              keepOrientation: {
                type: "boolean"
              },
              keepICCandAPP: {
                type: "boolean"
              }
            }
          }]
        },
        displayMode: {
          type: "string",
          "enum": ["inline", "overlay", "dropPane"]
        },
        concurrency: {
          type: "integer",
          minimum: 1,
          maximum: 20
        },
        supportEmail: {
          type: "string"
        },
        customSourceContainer: {
          type: "string"
        },
        customSourcePath: {
          type: "string"
        },
        customSourceName: {
          type: "string"
        },
        disableStorageKey: {
          type: "boolean"
        },
        disableTransformer: {
          type: "boolean"
        },
        disableThumbnails: {
          type: "boolean"
        },
        exposeOriginalFile: {
          type: "boolean"
        },
        globalDropZone: {
          type: "boolean"
        },
        hideModalWhenUploading: {
          type: "boolean"
        },
        imageDim: {
          type: "array",
          minItems: 2,
          maxItems: 2,
          items: [{
            type: "integer",
            minimum: 1
          }]
        },
        imageMax: {
          type: "array",
          minItems: 2,
          maxItems: 2,
          items: [{
            type: "integer",
            minimum: 1
          }]
        },
        imageMin: {
          type: "array",
          minItems: 2,
          maxItems: 2,
          items: [{
            type: "integer",
            minimum: 1
          }]
        },
        imageMinMaxBlock: {
          type: "boolean",
          "default": !1
        },
        lang: {
          type: "string",
          "enum": ["ca", "da", "de", "en", "es", "fr", "he", "it", "ja", "ko", "nl", "no", "pl", "pt", "sv", "ru", "vi", "zh", "tr", "ar"]
        },
        minFiles: {
          type: "integer",
          minimum: 1,
          maximum: 1e6
        },
        maxFiles: {
          type: "integer",
          minimum: 1,
          maximum: 1e6
        },
        maxSize: {
          type: "integer",
          minimum: 1
        },
        modalSize: {
          type: "array",
          minItems: 2,
          maxItems: 2,
          items: [{
            type: "integer",
            minimum: 1,
            maximum: 1e6
          }]
        },
        rootId: {
          type: "string"
        },
        startUploadingWhenMaxFilesReached: {
          type: "boolean"
        },
        uploadInBackground: {
          type: "boolean"
        },
        videoResolution: {
          type: "string"
        },
        onCancel: {
          format: "callback"
        },
        onClose: {
          format: "callback"
        },
        onOpen: {
          format: "callback"
        },
        onFileSelected: {
          format: "callback"
        },
        onFileUploadStarted: {
          format: "callback"
        },
        onFileUploadFinished: {
          format: "callback"
        },
        onFileUploadFailed: {
          format: "callback"
        },
        onFileUploadProgress: {
          format: "callback"
        },
        onUploadStarted: {
          format: "callback"
        },
        onUploadDone: {
          format: "callback"
        },
        onFileCropped: {
          format: "callback"
        },
        storeTo: {
          additionalProperties: !1,
          type: "object",
          properties: {
            filename: {
              type: "string"
            },
            location: {
              $ref: "locationsDef"
            },
            container: {
              type: "string"
            },
            path: {
              type: "string"
            },
            region: {
              type: "string"
            },
            access: {
              type: "string",
              "enum": ["public", "private"]
            },
            workflows: {
              $ref: "workflowsDef"
            }
          }
        },
        viewType: {
          type: "string",
          "enum": ["grid", "list"]
        },
        transformations: {
          type: "object",
          additionalProperties: !1,
          properties: {
            circle: {
              type: "boolean"
            },
            rotate: {
              type: "boolean"
            },
            force: {
              type: "boolean"
            },
            crop: {
              oneOf: [{
                type: "boolean"
              }, {
                type: "object",
                additionalProperties: !1,
                properties: {
                  force: {
                    type: "boolean"
                  },
                  aspectRatio: {
                    type: "number"
                  }
                }
              }]
            }
          }
        },
        customText: {
          type: "object",
          patternProperties: {
            ".*": {
              type: "string"
            }
          }
        },
        cropFiles: {
          type: "array",
          minItems: 1
        },
        loadCss: {
          type: "string"
        },
        failOverMaxFiles: {
          type: "boolean"
        },
        dropPane: {
          type: "object",
          properties: {
            cropFiles: {
              type: "array",
              minItems: 1
            },
            customText: {
              type: "string"
            },
            disableClick: {
              type: "boolean"
            },
            overlay: {
              type: "boolean"
            },
            showIcon: {
              type: "boolean"
            },
            showProgress: {
              type: "boolean"
            },
            onDragEnter: {
              format: "callback"
            },
            onProgress: {
              format: "callback"
            },
            onDragLeave: {
              format: "callback"
            },
            onDragOver: {
              format: "callback"
            },
            onDrop: {
              format: "callback"
            },
            onSuccess: {
              format: "callback"
            },
            onError: {
              format: "callback"
            },
            onClick: {
              format: "callback"
            }
          }
        },
        errorsTimeout: {
          type: "number",
          minimum: 0
        },
        customAuthText: {
          type: "object",
          patternProperties: {
            ".*": {
              additionalProperties: !1,
              type: "object",
              required: ["top", "bottom"],
              properties: {
                top: {
                  type: "string"
                },
                bottom: {
                  type: "string"
                }
              }
            }
          }
        },
        uploadConfig: {
          type: "object",
          additionalProperties: !1,
          properties: gt.properties
        },
        useSentryBreadcrumbs: {
          type: "boolean"
        }
      }
    },
        xt = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack Metadata",
      description: "Filestack Metadata Options",
      type: "object",
      additionalProperties: !1,
      properties: {
        size: {
          type: "boolean"
        },
        mimetype: {
          type: "boolean"
        },
        filename: {
          type: "boolean"
        },
        width: {
          type: "boolean"
        },
        metadata: {
          type: "boolean"
        },
        height: {
          type: "boolean"
        },
        uploaded: {
          type: "boolean"
        },
        writeable: {
          type: "boolean"
        },
        cloud: {
          type: "boolean"
        },
        sourceUrl: {
          type: "boolean"
        },
        md5: {
          type: "boolean"
        },
        sha1: {
          type: "boolean"
        },
        sha224: {
          type: "boolean"
        },
        sha256: {
          type: "boolean"
        },
        sha384: {
          type: "boolean"
        },
        sha512: {
          type: "boolean"
        },
        location: {
          type: "boolean"
        },
        path: {
          type: "boolean"
        },
        container: {
          type: "boolean"
        },
        exif: {
          type: "boolean"
        }
      }
    },
        kt = {
      $schema: "http://json-schema.org/draft-07/schema#",
      title: "Filestack Retrieve",
      description: "Filestack Retrieve Options",
      type: "object",
      additionalProperties: !1,
      properties: {
        metadata: {
          type: "boolean"
        },
        head: {
          type: "boolean"
        },
        dl: {
          type: "boolean"
        },
        cache: {
          type: "boolean"
        },
        extension: {
          type: "string"
        }
      }
    },
        wt = n(6),
        _t = n(16),
        jt = Z()("fs:request:dispatch"),
        Ot = function () {
      function t(t) {
        this.adapter = t;
      }

      return t.prototype.request = function (t) {
        var e = this;
        return t.headers = t.headers || {}, jt("Dispatching request %O", t), this.adapter.request(t)["catch"](function (t) {
          return jt('Request error "%s": %O', t, t.response), e.retry(t);
        });
      }, t.prototype.retry = function (t) {
        var e = this,
            n = t.config;
        if (!Object(_t.a)(t)) return jt("[Retry] Request error is not retriable. Exiting"), Promise.reject(t);
        if (!n.retry) return jt("[Retry] Retry config not found. Exiting"), Promise.reject(t);
        var i = n.retry,
            r = n.runtime && n.runtime.retryCount ? n.runtime.retryCount : 0;
        if (i.retry && i.retry <= r) return jt("[Retry] Retry attempts reached %d. Exiting", r), Promise.reject(t);
        var o = Math.max(Math.min(i.retryMaxTime, 1e3 * Math.pow(i.retryFactor, r)), 1);
        return n.runtime = Object(l.a)(Object(l.a)({}, n.runtime), {
          retryCount: r + 1
        }), jt("[Retry] Retrying request to " + n.url + ", count " + r + " of " + i.retry + " - Delay: " + o), new Promise(function (t) {
          setTimeout(function () {
            return t(e.request(n));
          }, o);
        });
      }, t;
    }(),
        St = n(43).XhrAdapter,
        Et = function () {
      function t(t) {
        this.defaults = t, this.dispatcher = new Ot(new St());
      }

      return t.getInstance = function () {
        return t.instance || (t.instance = new t()), t.instance;
      }, t.prototype.dispatch = function (t) {
        return t.method || (t.method = wt.a.GET), this.dispatcher.request(Object.assign({}, this.defaults, t));
      }, t.dispatch = function (e, n) {
        return t.getInstance().dispatch(Object.assign({}, n || {}, {
          url: e
        }));
      }, t.get = function (e, n) {
        return t.getInstance().dispatch(Object.assign({}, n || {}, {
          method: wt.a.GET,
          url: e
        }));
      }, t.head = function (e, n) {
        return t.getInstance().dispatch(Object.assign({}, n || {}, {
          method: wt.a.HEAD,
          url: e
        }));
      }, t.options = function (e, n) {
        return t.getInstance().dispatch(Object.assign({}, n || {}, {
          method: wt.a.OPTIONS,
          url: e
        }));
      }, t.purge = function (e, n) {
        return t.getInstance().dispatch(Object.assign({}, n || {}, {
          method: wt.a.PURGE,
          url: e
        }));
      }, t["delete"] = function (e, n) {
        return t.getInstance().dispatch(Object.assign({}, n || {}, {
          method: wt.a.DELETE,
          url: e
        }));
      }, t.post = function (e, n, i) {
        return t.getInstance().dispatch(Object.assign({}, i || {}, {
          method: wt.a.POST,
          url: e,
          data: n
        }));
      }, t.put = function (e, n, i) {
        return t.getInstance().dispatch(Object.assign({}, i || {}, {
          method: wt.a.PUT,
          url: e,
          data: n
        }));
      }, t.path = function (e, n, i) {
        return t.getInstance().dispatch(Object.assign({}, i || {}, {
          method: wt.a.PATH,
          url: e,
          data: n
        }));
      }, t;
    }(),
        Ct = n(2),
        Tt = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }

      return Object(l.c)(e, t), e.prototype.cancel = function (t) {
        this.emit("cancel", t), this.removeAllListeners();
      }, e;
    }(f.EventEmitter),
        At = function At(t, e, n, i) {
      if (!e || "string" != typeof e) throw new q("A valid Filestack handle is required for remove");
      if (!(t.policy && t.signature || i && i.policy && i.signature)) throw new q("Security policy and signature are required for remove");
      var r = t.urls.fileApiUrl + "/" + e,
          o = {
        key: t.apikey,
        policy: i && i.policy || t.policy,
        signature: i && i.signature || t.signature
      };
      return n && (o.skip_storage = !0), Et["delete"](r, {
        filestackHeaders: !1,
        params: Object(H.removeEmpty)(o)
      });
    };

    function Pt(t) {
      return (Pt = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var Ft, It, zt, Nt, Mt, Rt, $t, qt, Ut, Dt, Lt, Bt, Vt, Ht, Wt, Zt, Jt, Yt;
    !function (t) {
      t.left = "left", t.right = "right", t.center = "center", t.bottom = "bottom", t.top = "top";
    }(Ft || (Ft = {})), function (t) {
      t.left = "left", t.right = "right", t.center = "center", t.bottom = "bottom", t.top = "top", t.faces = "faces";
    }(It || (It = {})), function (t) {
      t.clip = "clip", t.crop = "crop", t.scale = "scale", t.max = "max";
    }(zt || (zt = {})), function (t) {
      t.linear = "linear", t.gaussian = "gaussian";
    }(Nt || (Nt = {})), function (t) {
      t.oval = "oval", t.rect = "rect";
    }(Mt || (Mt = {})), function (t) {
      t.none = "none", t.low = "low", t.medium = "medium", t.high = "high";
    }(Rt || (Rt = {})), function (t) {
      t.artwork = "artwork", t.photo = "photo";
    }($t || ($t = {})), function (t) {
      t.RGB = "RGB", t.CMYK = "CMYK", t.Input = "Input";
    }(qt || (qt = {})), function (t) {
      t.thumb = "thumb", t.crop = "crop", t.fill = "fill";
    }(Ut || (Ut = {})), function (t) {
      t.fit = "fit", t.auto = "auto";
    }(Dt || (Dt = {})), function (t) {
      t.top = "top", t.middle = "middle", t.bottom = "bottom", t.left = "left", t.center = "center", t.right = "right";
    }(Lt || (Lt = {})), function (t) {
      t.h264 = "h264", t.h264_hi = "h264.hi", t.webm = "webm", t["webm-hi"] = "webm.hi", t.ogg = "ogg", t["ogg-hi"] = "ogg.hi", t["hls-variant"] = "hls.variant", t.mp3 = "mp3", t.oga = "oga", t.m4a = "m4a", t.aac = "aac", t.hls = "hls.variant.audio";
    }(Bt || (Bt = {})), function (t) {
      t.desktop = "desktop", t.mobile = "mobile";
    }(Vt || (Vt = {})), function (t) {
      t.all = "all", t.window = "window";
    }(Ht || (Ht = {})), function (t) {
      t.portrait = "portrait", t.landscape = "landscape";
    }(Wt || (Wt = {})), function (t) {
      t.s3 = "s3", t.azure = "azure", t.gcs = "gcs", t.rackspace = "rackspace", t.dropbox = "dropbox";
    }(Zt || (Zt = {})), function (t) {
      t["private"] = "private", t["public"] = "public";
    }(Jt || (Jt = {})), function (t) {
      t.preserve = "preserve", t.constrain = "constrain", t.letterbox = "letterbox", t.pad = "pad", t.crop = "crop";
    }(Yt || (Yt = {}));

    var Qt = function Qt(t, e, n, i) {
      void 0 === n && (n = {}), void 0 === i && (i = !1), n = function t(e) {
        for (var n = {}, i = Object.keys(e), r = 0; r < i.length; r++) {
          var o = i[r].split(/(?=[A-Z])/).join("_").toLowerCase();
          "object" !== Pt(e[i[r]]) || Array.isArray(e[i[r]]) ? n[o] = e[i[r]] : n[o] = t(e[i[r]]);
        }

        return n;
      }(n), t.policy && t.signature && (n.security = {
        policy: t.policy,
        signature: t.signature
      });
      var r = new ht(e, t.apikey);
      return r.setCname(t.cname), r.setBase64(i), Object.keys(n).forEach(function (t) {
        ("boolean" != typeof n[t] || n[t] || "cache" === t) && r.addTask(t, n[t]);
      }), r.toString();
    };

    function Gt(t) {
      return (Gt = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (t) {
        return _typeof2(t);
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t);
      })(t);
    }

    var Kt,
        Xt = function () {
      function t(t, e) {
        this._file = t, this._sanitizeOptions = e, this._file.name = Object(H.sanitizeName)(this._file.name, this._sanitizeOptions);
      }

      return Object.defineProperty(t.prototype, "name", {
        get: function get() {
          return this._file.name;
        },
        set: function set(t) {
          this._file.name = Object(H.sanitizeName)(t, this._sanitizeOptions);
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "filename", {
        get: function get() {
          return this.name;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "customName", {
        set: function set(t) {
          switch (Gt(t)) {
            case "string":
              this.name = t;
              break;

            case "function":
              if ("string" != typeof t(this)) throw new Error("Name function must return a string. Current return type is " + Gt(t));
              this.name = t(this);
          }
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "type", {
        get: function get() {
          return this._file.type || "application/octet-stream";
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "mimetype", {
        get: function get() {
          return this.type;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "size", {
        get: function get() {
          return this._file.size;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.getPartsCount = function (t) {
        return Math.ceil(this._file.size / t);
      }, t.prototype.getPartMetadata = function (t, e) {
        var n = e * t;
        if (n > this._file.size) throw new Error("Start byte of the part is higher than buffer size");
        var i = Math.min(n + e, this._file.size);
        return {
          partNumber: t,
          startByte: n,
          endByte: i,
          size: i - n
        };
      }, t.prototype.getPartByMetadata = function (t, e) {
        return void 0 === e && (e = !0), Object(l.b)(this, void 0, void 0, function () {
          var n;
          return Object(l.d)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, this._file.slice(t.startByte, t.endByte)];

              case 1:
                return n = i.sent(), [2, Promise.resolve(Object(l.a)(Object(l.a)({}, t), {
                  buffer: n,
                  md5: e ? Object(H.md5)(n) : void 0
                }))];
            }
          });
        });
      }, t.prototype.getChunkByMetadata = function (t, e, n, i) {
        return void 0 === i && (i = !0), Object(l.b)(this, void 0, void 0, function () {
          var r, o, a;
          return Object(l.d)(this, function (s) {
            switch (s.label) {
              case 0:
                return r = t.startByte + e, o = Math.min(r + n, t.endByte), [4, this._file.slice(r, o)];

              case 1:
                return a = s.sent(), [2, Promise.resolve(Object(l.a)(Object(l.a)({}, t), {
                  buffer: a,
                  md5: i ? Object(H.md5)(a) : void 0,
                  size: a.byteLength,
                  startByte: r,
                  endByte: o,
                  offset: e
                }))];
            }
          });
        });
      }, t.prototype.release = function () {
        this._file.release && this._file.release();
      }, t.prototype.toJSON = function () {
        return {
          name: this.name,
          status: this.status,
          type: this.type,
          size: this.size,
          url: this.url,
          handle: this.handle,
          uploadTags: this.uploadTags
        };
      }, t;
    }(),
        te = n(17),
        ee = n.n(te),
        ne = /data:([a-zA-Z]*\/[a-zA-Z]*);base64,([^\"]*)/i,
        ie = function ie(t, e, n) {
      return new Promise(function (i, r) {
        var o = new FileReader(),
            a = n.slice(t, e);
        o.onload = function () {
          return i(o.result);
        }, o.onerror = r, o.readAsArrayBuffer(a);
      });
    },
        re = function re(t, e) {
      var n, i;
      if (function (t) {
        return t && t.file && t.name;
      }(t) && (n = t.name, t = t.file), function (t) {
        return t instanceof File;
      }(t)) i = t, n = t.name;else if (function (t) {
        if ("string" != typeof t) return !1;
        t.indexOf("base64") > -1 && (t = t.match(ne).pop());

        try {
          return btoa(atob(t)) === t;
        } catch (t) {
          return !1;
        }
      }(t)) i = function (t, e) {
        void 0 === e && (e = 512);
        var n = "";

        if (t.indexOf("base64") > -1) {
          var i = t.match(ne);
          t = i.pop(), n = i[1];
        }

        for (var r = atob(t), o = [], a = 0; a < r.length; a += e) {
          for (var s = r.slice(a, a + e), c = new Array(s.length), p = 0; p < s.length; p += 1) {
            c[p] = s.charCodeAt(p);
          }

          o.push(new Uint8Array(c));
        }

        return new Blob(o, {
          type: n
        });
      }(t);else {
        if (!function (t) {
          return "[object Blob]" === t.toString();
        }(t)) return Promise.reject(new q("Unsupported input file type"));
        i = t;
      }
      return function (t) {
        return Object(l.b)(void 0, void 0, void 0, function () {
          return Object(l.d)(this, function (e) {
            return File && FileReader && Blob ? [2, Promise.resolve({
              slice: function slice(e, n) {
                return ie(e, n, t);
              },
              release: function release() {
                t = null;
              }
            })] : [2, Promise.reject(new q("The File APIs are not fully supported by your browser"))];
          });
        });
      }(i).then(function (t) {
        return Object(l.b)(void 0, void 0, void 0, function () {
          var r, o;
          return Object(l.d)(this, function (a) {
            switch (a.label) {
              case 0:
                return r = i.type, i.type && 0 !== i.type.length && "text/plain" !== i.type ? [3, 2] : (o = H.getMimetype, [4, t.slice(0, ee.a.minimumBytes)]);

              case 1:
                r = o.apply(void 0, [a.sent(), n]), a.label = 2;

              case 2:
                return [2, new Xt({
                  name: n,
                  size: i.size,
                  type: r,
                  slice: t.slice,
                  release: t.release
                }, e)];
            }
          });
        });
      });
    },
        oe = n(29),
        ae = n.n(oe),
        se = Z()("fs:upload:abstract"),
        ce = function (t) {
      function e(e, n) {
        void 0 === n && (n = 3);
        var i = t.call(this) || this;
        return i.storeOptions = e, i.concurrency = n, i.partSize = 6291456, i.intelligentChunkSize = Object(H.isMobile)() ? 1048576 : 8388608, i.timeout = 3e4, i.uploadMode = "default", i.isModeLocked = !1, i.integrityCheck = !0, i.uploadTags = null, i;
      }

      return Object(l.c)(e, t), e.prototype.setSecurity = function (t) {
        se("Set security %O", t), this.security = t;
      }, e.prototype.setApikey = function (t) {
        se("Set apikey to " + t), this.apikey = t;
      }, e.prototype.setTimeout = function (t) {
        se("Set request timeout to " + t), this.timeout = t;
      }, e.prototype.setRetryConfig = function (t) {
        se("Set retry config to " + t), this.retryConfig = t;
      }, e.prototype.setUrl = function (t) {
        se("Set upload url to " + t), this.url = t;
      }, e.prototype.setUploadTags = function (t) {
        se("Set tags to %O", t), this.uploadTags = t;
      }, e.prototype.setIntegrityCheck = function (t) {
        this.integrityCheck = t;
      }, e.prototype.setUploadMode = function (t, e) {
        void 0 === e && (e = !1), !0 !== this.isModeLocked ? (this.isModeLocked = e, se("Set upload mode to " + t), this.uploadMode = t) : se("Cannot switch mode to " + t + ". Locked! Probably mode is not supported at this apikey");
      }, e.prototype.setPartSize = function (t) {
        if ("default" === this.uploadMode) {
          if (se("Set part size to " + t), t < 5242880) throw new q("Minimum part size is 5MB");
          this.partSize = t;
        } else se("Cannot set part size because upload mode is other than default. ");
      }, e.prototype.getPartSize = function () {
        return this.partSize;
      }, e.prototype.setIntelligentChunkSize = function (t) {
        if (se("Set inteligent chunk size to " + t), t < 32768) throw new q("Minimum intelligent chunk size is 32768");
        this.intelligentChunkSize = t;
      }, e.prototype.getIntelligentChunkSize = function () {
        return this.intelligentChunkSize;
      }, e.prototype.getUrl = function () {
        if (!this.url) throw new q("Upload url not set");
        return this.url;
      }, e;
    }(f),
        pe = n(11),
        ue = Z()("fs:upload:s3"),
        le = function (t) {
      function e(e, n) {
        var i = t.call(this, e, n) || this;
        return i.payloads = {}, i.partsQueue = new ae.a({
          autoStart: !1,
          concurrency: i.concurrency
        }), i.cancelToken = new Tt(), i;
      }

      return Object(l.c)(e, t), e.prototype.pause = function () {
        this.partsQueue.pause();
      }, e.prototype.resume = function () {
        this.partsQueue.isPaused && this.partsQueue.start();
      }, e.prototype.abort = function (t) {
        this.partsQueue.pause(), this.partsQueue.clear(), this.cancelToken.cancel(t || "Aborted by user");
      }, e.prototype.execute = function () {
        return Object(l.b)(this, void 0, void 0, function () {
          var t,
              e = this;
          return Object(l.d)(this, function (n) {
            return t = Object.keys(this.payloads).map(function (t) {
              return new Promise(function (n) {
                return Object(l.b)(e, void 0, void 0, function () {
                  var e, i;
                  return Object(l.d)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return r.trys.push([0, 5,, 6]), [4, this.startRequest(t)];

                      case 1:
                        return r.sent(), [4, this.prepareParts(t)];

                      case 2:
                        return r.sent(), [4, this.startPartsQueue(t)];

                      case 3:
                        return r.sent(), [4, this.completeRequest(t)];

                      case 4:
                        return r.sent(), [3, 6];

                      case 5:
                        return e = r.sent(), this.emit("error", e), ue("[" + t + "] File upload failed. %O, \nDetails: %O ", e.message, e.details), [3, 6];

                      case 6:
                        return (i = this.getPayloadById(t).file).release(), delete this.payloads[t], n(i), [2];
                    }
                  });
                });
              });
            }), [2, Promise.all(t)];
          });
        });
      }, e.prototype.addFile = function (t) {
        ue("Add file to queue: \n %o", t);
        var e = Object(H.uniqueId)(15) + "_" + Object(H.uniqueTime)();
        return t.status = "Initialized", this.payloads[e] = {
          file: t,
          parts: []
        }, e;
      }, e.prototype.getUploadUrl = function (t) {
        var e = this.getDefaultFields(t, ["location_url"]).location_url;
        return 0 === e.indexOf("http") ? e : "https://" + e;
      }, e.prototype.getStoreOptions = function (t) {
        var e = Object(l.a)({
          location: "s3"
        }, this.storeOptions);

        if (this.storeOptions.disableStorageKey) {
          var n = this.getPayloadById(t);
          e.path && "/" !== e.path.substr(-1) && (e.path = e.path + "/"), e.path = "" + (e.path ? e.path : "/") + n.file.name, delete e.disableStorageKey;
        }

        return e;
      }, e.prototype.getDefaultFields = function (t, e, n) {
        void 0 === n && (n = !1);
        var i = this.getPayloadById(t),
            r = Object(l.a)(Object(l.a)({}, this.security), {
          apikey: this.apikey,
          uri: i.uri,
          location_url: i.location_url,
          upload_id: i.upload_id,
          region: i.region
        });
        return ("intelligent" === this.uploadMode || "fallback" === this.uploadMode && n) && (r.fii = !0), Object(l.a)(Object(l.a)({}, Object(H.filterObject)(r, e)), {
          store: this.getStoreOptions(t)
        });
      }, e.prototype.getDefaultHeaders = function (t) {
        var e = {},
            n = this.getPayloadById(t);
        return n.location_region && (e["Filestack-Upload-Region"] = n.location_region), e;
      }, e.prototype.getPayloadById = function (t) {
        return this.payloads[t];
      }, e.prototype.prepareParts = function (t) {
        var e = this.getPayloadById(t).file;
        ["intelligent", "fallback"].indexOf(this.uploadMode) > -1 && (this.partSize = 8388608);

        for (var n = e.getPartsCount(this.partSize), i = [], r = 0; r < n; r++) {
          i[r] = Object(l.a)(Object(l.a)({}, e.getPartMetadata(r, this.partSize)), {
            offset: 0
          });
        }

        return this.payloads[t].parts = i, Promise.resolve();
      }, e.prototype.startRequest = function (t) {
        var e = this,
            n = this.getPayloadById(t);
        return 0 === n.file.size ? (this.setPayloadStatus(t, "Failed"), Promise.reject(new q('Invalid file "' + n.file.name + '" size - 0', {}, R.VALIDATION))) : (ue("[" + t + "] Make start request"), Et.post(this.getUrl() + "/multipart/start", Object(l.a)({
          filename: n.file.name,
          mimetype: n.file.type,
          size: n.file.size
        }, this.getDefaultFields(t, ["apikey", "policy", "signature", "fii"], !0)), {
          timeout: this.timeout,
          cancelToken: this.cancelToken,
          headers: this.getDefaultHeaders(t),
          retry: this.retryConfig
        }).then(function (n) {
          var i = n.data;
          return i && i.location_url && i.region && i.upload_id && i.uri ? (ue("[" + t + "] Assign payload data: \n%O\n", i), e.updatePayload(t, i), ["intelligent", "fallback"].indexOf(e.uploadMode) > -1 && (!i.upload_type || "intelligent_ingestion" !== i.upload_type) && (ue("[" + t + "] Intelligent Ingestion is not enabled on account, switch back to regular upload and lock mode change"), e.setUploadMode("default", !0)), i) : (ue("[" + t + "] Incorrect start response: \n%O\n", i), e.setPayloadStatus(t, "Failed"), Promise.reject(new q("Incorrect start response", i, R.REQUEST)));
        })["catch"](function (n) {
          return ue("[" + t + "] Start request error %O", n), e.setPayloadStatus(t, "Failed"), Promise.reject(new q("Cannot upload file. Start request failed", e.getErrorDetails(n), R.REQUEST));
        }));
      }, e.prototype.startPartsQueue = function (t) {
        return Object(l.b)(this, void 0, void 0, function () {
          var e,
              n,
              i,
              r = this;
          return Object(l.d)(this, function (o) {
            return e = this.getPayloadById(t), n = e.parts, i = n.length, ue("[" + t + "] Create uploading queue from file. parts count - %d", i), [2, new Promise(function (e, i) {
              return Object(l.b)(r, void 0, void 0, function () {
                var r,
                    o = this;
                return Object(l.d)(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return n.forEach(function (e) {
                        return o.partsQueue.add(function () {
                          return o.startPart(t, e.partNumber);
                        })["catch"](function (e) {
                          return o.setPayloadStatus(t, "Failed"), ue("[" + t + "] Failed to upload part %s", e.message), o.partsQueue.pause(), o.partsQueue.clear(), i(e);
                        });
                      }), ue("[" + t + "] All tasks for %s enqueued. Start processing main upload queue", t), this.partsQueue.start(), r = e, [4, this.partsQueue.onIdle()];

                    case 1:
                      return r.apply(void 0, [a.sent()]), [2];
                  }
                });
              });
            })];
          });
        });
      }, e.prototype.startPart = function (t, e) {
        return ue("[" + t + "] Start processing part " + e + " with mode " + this.uploadMode), this.getPayloadById(t).file.status = "Progress", ("intelligent" !== this.uploadMode ? this.uploadRegular : this.uploadIntelligent).apply(this, [t, e]);
      }, e.prototype.getS3PartMetadata = function (t, e, n) {
        var i = this,
            r = this.getUploadUrl(t);
        ue("[" + t + "] Get data for part " + e.partNumber + ", url " + r + ", Md5: " + e.md5 + ", Size: " + e.size);
        var o = Object(l.a)(Object(l.a)({}, this.getDefaultFields(t, ["apikey", "uri", "region", "signature", "policy", "upload_id", "fii"])), {
          part: e.partNumber + 1,
          size: e.size,
          offset: n
        });
        return this.integrityCheck && e.md5 && (o.md5 = e.md5), Et.post(r + "/multipart/upload", o, {
          headers: this.getDefaultHeaders(t),
          cancelToken: this.cancelToken,
          timeout: this.timeout,
          retry: this.retryConfig
        })["catch"](function (e) {
          return i.setPayloadStatus(t, "Failed"), Promise.reject(new q("Cannot get part metadata", i.getErrorDetails(e), R.REQUEST));
        });
      }, e.prototype.uploadRegular = function (t, e) {
        return Object(l.b)(this, void 0, void 0, function () {
          var n,
              i,
              r,
              o,
              a,
              s,
              c = this;
          return Object(l.d)(this, function (p) {
            switch (p.label) {
              case 0:
                return n = this.getPayloadById(t), i = n.parts[e], [4, n.file.getPartByMetadata(i, this.integrityCheck)];

              case 1:
                return r = p.sent(), [4, this.getS3PartMetadata(t, r)];

              case 2:
                return o = p.sent(), a = o.data, s = o.headers, ue("[" + t + "] Received part " + e + " info body: \n%O\n headers: \n%O\n", a, s), [2, Et.put(a.url, r.buffer, {
                  cancelToken: this.cancelToken,
                  timeout: this.timeout,
                  headers: a.headers,
                  filestackHeaders: !1,
                  onProgress: function onProgress(n) {
                    return c.onProgressUpdate(t, e, n.loaded);
                  },
                  retry: this.retryConfig && "fallback" !== this.uploadMode ? this.retryConfig : void 0
                }).then(function (n) {
                  if (!n.headers.etag) throw r = null, new q("Cannot upload file, check S3 bucket settings", "Etag header is not exposed in CORS settings", R.REQUEST);
                  return c.setPartETag(t, e, n.headers.etag), ue("[" + t + "] S3 Upload response headers for " + e + ": \n%O\n", n.headers), c.onProgressUpdate(t, e, r.size), r = null, n;
                })["catch"](function (n) {
                  var i = n && n.response ? n.response : null;

                  if (i && 403 === i.status && i.data && i.data.Error && i.data.Error.code) {
                    var o = i.data.Error.code;

                    switch (Array.isArray(o) && (o = o.pop()), o) {
                      case "RequestTimeTooSkewed":
                        return c.startPart(t, e);

                      default:
                        return Promise.reject(new q("Cannot upload file", i.data.Error, R.REQUEST));
                    }
                  }

                  return r = null, n instanceof q ? Promise.reject(n) : (c.onProgressUpdate(t, e, 0), "fallback" === c.uploadMode && !c.isModeLocked || "intelligent" === c.uploadMode ? (ue("[" + t + "] Regular upload failed. Switching to intelligent ingestion mode"), c.setUploadMode("intelligent"), c.startPart(t, e)) : Promise.reject(new q("Cannot upload file part", c.getErrorDetails(n), R.REQUEST)));
                })];
            }
          });
        });
      }, e.prototype.uploadIntelligent = function (t, e) {
        return Object(l.b)(this, void 0, void 0, function () {
          var n = this;
          return Object(l.d)(this, function (i) {
            return [2, this.uploadNextChunk(t, e).then(function () {
              return n.commitPart(t, e);
            })];
          });
        });
      }, e.prototype.uploadNextChunk = function (t, e, n) {
        return void 0 === n && (n = this.intelligentChunkSize), Object(l.b)(this, void 0, void 0, function () {
          var i,
              r,
              o,
              a,
              s = this;
          return Object(l.d)(this, function (c) {
            switch (c.label) {
              case 0:
                return i = this.getPayloadById(t), r = i.parts[e], n = Math.min(n, r.size - r.offset), [4, i.file.getChunkByMetadata(r, r.offset, n, this.integrityCheck)];

              case 1:
                return o = c.sent(), ue("[" + t + "] PartNum: " + e + ", PartSize: " + r.size + ", StartByte: " + r.startByte + ", Offset: " + r.offset + ", ChunkSize: " + o.size + ",\n       Left: " + (r.size - r.offset - o.size)), [4, this.getS3PartMetadata(t, o, r.offset)["catch"](function (i) {
                  return ue("[" + t + "] Getting chunk data for ii failed %O, Chunk size: " + n + ", offset " + r.offset + ", part " + e, i), Promise.reject(i);
                })];

              case 2:
                return a = c.sent().data, [2, Et.put(a.url, o.buffer, {
                  cancelToken: this.cancelToken,
                  timeout: this.timeout,
                  headers: a.headers,
                  filestackHeaders: !1,
                  onProgress: function onProgress(n) {
                    return s.onProgressUpdate(t, e, r.offset + n.loaded);
                  }
                }).then(function (i) {
                  s.onProgressUpdate(t, e, r.offset + o.size);
                  var a = Math.min(r.offset + n, r.size);
                  return ue("[" + t + "] S3 Chunk uploaded! offset: " + r.offset + ", part " + e + "! response headers for " + e + ": \n%O\n", i.headers), s.setPartData(t, e, "offset", a), a === r.size ? Promise.resolve(i) : (r = null, o = null, s.uploadNextChunk(t, e, n));
                })["catch"](function (i) {
                  var a = i && i.response ? i.response : null;

                  if (a && 403 === a.status && a.data && a.data.Error && a.data.Error.code) {
                    var c = a.data.Error.code;

                    switch (Array.isArray(c) && (c = c.pop()), c) {
                      case "RequestTimeTooSkewed":
                        return s.startPart(t, e);

                      default:
                        return Promise.reject(new q("Cannot upload file", a.data.Error, R.REQUEST));
                    }
                  }

                  s.onProgressUpdate(t, e, r.offset);
                  var p = n / 2;
                  return p < 32768 ? (ue("[" + t + "] Minimal chunk size limit. Upload file failed!"), Promise.reject(new q("Min chunk size reached", i.data, R.REQUEST))) : Object(pe.e)(i) ? (ue("[" + t + "] Request network error. Retry with new chunk size: " + p), s.uploadNextChunk(t, e, p)) : (r = null, o = null, Promise.reject(new q("Cannot upload file part (FII)", s.getErrorDetails(i), R.REQUEST)));
                })];
            }
          });
        });
      }, e.prototype.commitPart = function (t, e) {
        var n = this,
            i = this.getPayloadById(t),
            r = i.parts[e];
        return Et.post(this.getUploadUrl(t) + "/multipart/commit", Object(l.a)(Object(l.a)({}, this.getDefaultFields(t, ["apikey", "region", "upload_id", "policy", "signature", "uri"])), {
          size: i.file.size,
          part: r.partNumber + 1
        }), {
          cancelToken: this.cancelToken,
          timeout: this.timeout,
          headers: this.getDefaultHeaders(t),
          retry: this.retryConfig
        }).then(function (e) {
          return ue("[" + t + "] Commit Part number " + r.partNumber + ". Response: %O", e.data), e;
        })["catch"](function (t) {
          return Promise.reject(new q("Cannot commit file part metadata", n.getErrorDetails(t), R.REQUEST));
        });
      }, e.prototype.completeRequest = function (t) {
        var e = this,
            n = this.getPayloadById(t),
            i = [];
        ue("[" + t + "] Run complete request");

        for (var r = n.parts, o = r.length, a = 0; a < o; a++) {
          r[a].etag && i.push({
            part_number: a + 1,
            etag: r[a].etag
          });
        }

        return ue("[" + t + "] Etags %O", i), Et.post(this.getUploadUrl(t) + "/multipart/complete", Object(l.a)(Object(l.a)({}, this.getDefaultFields(t, ["apikey", "policy", "signature", "uri", "region", "upload_id", "fii"], !0)), {
          filename: n.file.name,
          mimetype: n.file.type,
          size: n.file.size,
          upload_tags: this.uploadTags && Object.keys(this.uploadTags).length ? this.uploadTags : void 0,
          parts: i.length ? i : void 0
        }), {
          timeout: this.timeout,
          cancelToken: this.cancelToken,
          headers: this.getDefaultHeaders(t),
          retry: this.retryConfig
        }).then(function (n) {
          if (202 === n.status) return new Promise(function (n, i) {
            setTimeout(function () {
              return e.completeRequest(t).then(n)["catch"](i);
            }, 1e3);
          });
          var i = e.getPayloadById(t).file;
          return i.handle = n.data.handle, i.url = n.data.url, i.container = n.data.container, i.key = n.data.key, i.uploadTags = n.data.upload_tags, i.workflows = n.data.workflows, i.status = n.data.status, i;
        })["catch"](function (n) {
          return e.setPayloadStatus(t, "Failed"), Promise.reject(new q("Cannot complete file", e.getErrorDetails(n), R.REQUEST));
        });
      }, e.prototype.onProgressUpdate = function (t, e, n) {
        this.setPartData(t, e, "progress", n), this.emitProgress();
      }, e.prototype.emitProgress = function () {
        var t = 0,
            e = 0,
            n = {};

        for (var i in this.payloads) {
          var r = this.payloads[i];

          if ("Failed" !== r.file.status) {
            var o = r.parts.map(function (t) {
              return t.progress || 0;
            }).reduce(function (t, e) {
              return t + e;
            }, 0);
            e += o, n[i] = {
              totalBytes: o,
              totalPercent: Math.round(100 * o / r.file.size) || 0
            }, t += r.file.size;
          }
        }

        var a = {
          totalBytes: e || 0,
          totalPercent: Math.round(100 * e / t) || 0,
          files: n
        };
        ue("Upload progress %O", a), this.emit("progress", a);
      }, e.prototype.updatePayload = function (t, e) {
        this.payloads[t] = Object(l.a)(Object(l.a)({}, this.payloads[t]), e);
      }, e.prototype.setPartETag = function (t, e, n) {
        ue("[" + t + "] Set " + n + " etag for part " + e), this.getPayloadById(t).parts[e].etag = n;
      }, e.prototype.setPartData = function (t, e, n, i) {
        ue("[" + t + "] Set " + n + " = " + i + " for part " + e);
        var r = this.getPayloadById(t);
        r ? r.parts[e][n] = i : ue("[" + t + "] Cannot set " + n + " = " + i + " for part " + e);
      }, e.prototype.setPayloadStatus = function (t, e) {
        ue("[" + t + "] Set payload status to " + e), this.payloads[t] && (this.payloads[t].file.status = e);
      }, e.prototype.getErrorDetails = function (t) {
        return t.response ? {
          code: t.response.status,
          data: t.response.data,
          headers: t.response.headers
        } : {};
      }, e;
    }(ce),
        fe = function fe(t, e) {
      return t.totalBytes = Math.max(t.totalBytes, e.totalBytes), t.totalPercent = Math.max(t.totalPercent, e.totalPercent), t;
    },
        de = function (t) {
      function e(e, n) {
        void 0 === e && (e = {}), void 0 === n && (n = {});
        var i = t.call(this) || this;
        i.options = e, i.storeOptions = n, i.lastProgress = {
          totalBytes: 0,
          totalPercent: 0
        }, i.storeOptions = Object.assign({}, n);
        var r = V(gt)(e);
        if (r.errors.length) throw new q("Invalid upload params", r.errors, R.VALIDATION);
        var o = V(yt)(n);
        if (o.errors.length) throw new q("Invalid store upload params", o.errors, R.VALIDATION);
        return n.filename && (i.overrideFileName = n.filename, delete i.storeOptions.filename), i.storeOptions.sanitizer && (i.sanitizerOptions = i.storeOptions.sanitizer, delete i.storeOptions.sanitizer), i.uploader = new le(i.storeOptions, e.concurrency), i.uploader.setRetryConfig({
          retry: e.retry || 10,
          onRetry: e.onRetry,
          retryFactor: e.retryFactor || 2,
          retryMaxTime: e.retryMaxTime || 15e3
        }), i.uploader.setTimeout(e.timeout || 12e4), e.partSize && i.uploader.setPartSize(e.partSize), e.intelligentChunkSize && i.uploader.setIntelligentChunkSize(e.intelligentChunkSize), e.disableIntegrityCheck && i.uploader.setIntegrityCheck(!1), e.intelligent && i.uploader.setUploadMode("fallback" === e.intelligent ? "fallback" : "intelligent"), i.uploader.setUploadTags(e.tags), i.uploader.on("error", function (t) {
          return i.emit("error", t);
        }), i.uploader.on("progress", i.handleProgress.bind(i)), i;
      }

      return Object(l.c)(e, t), e.prototype.setSession = function (t) {
        this.uploader.setApikey(t.apikey), t.policy && t.signature && this.uploader.setSecurity({
          policy: t.policy,
          signature: t.signature
        }), this.uploader.setUrl(t.urls.uploadApiUrl);
      }, e.prototype.setToken = function (t) {
        var e = this;
        if (!t || t !== Object(t)) throw new Error("Incorrect upload token. Must be instance of object");
        return t.pause = function () {
          return e.uploader.pause();
        }, t.resume = function () {
          return e.uploader.resume();
        }, t.cancel = function () {
          return e.uploader.abort();
        }, t;
      }, e.prototype.setSecurity = function (t) {
        this.uploader.setSecurity(t);
      }, e.prototype.setUploadTags = function (t) {
        this.uploader.setUploadTags(t);
      }, e.prototype.upload = function (t) {
        return Object(l.b)(this, void 0, void 0, function () {
          var e, n;
          return Object(l.d)(this, function (i) {
            switch (i.label) {
              case 0:
                return [4, re(t, this.sanitizerOptions)];

              case 1:
                return (e = i.sent()).customName = this.overrideFileName, this.uploader.addFile(e), this.startProgressInterval(), [4, this.uploader.execute()];

              case 2:
                return n = i.sent().shift(), this.stopProgressInterval(), this.uploader.removeAllListeners(), "Failed" === n.status ? [2, Promise.reject(n)] : [2, Promise.resolve(n)];
            }
          });
        });
      }, e.prototype.multiupload = function (t) {
        return Object(l.b)(this, void 0, void 0, function () {
          var e, n, i, r, o, a;
          return Object(l.d)(this, function (s) {
            switch (s.label) {
              case 0:
                for (n in e = [], t) {
                  e.push(n);
                }

                i = 0, s.label = 1;

              case 1:
                return i < e.length ? (r = e[i], t.hasOwnProperty(r) ? [4, re(t[r], this.sanitizerOptions)] : [3, 3]) : [3, 4];

              case 2:
                (o = s.sent()).customName = this.overrideFileName, this.uploader.addFile(o), s.label = 3;

              case 3:
                return i++, [3, 1];

              case 4:
                return this.startProgressInterval(), [4, this.uploader.execute()];

              case 5:
                return a = s.sent(), this.stopProgressInterval(), this.uploader.removeAllListeners(), [2, Promise.resolve(a)];
            }
          });
        });
      }, e.prototype.startProgressInterval = function () {
        var t = this;
        "function" == typeof this.options.onProgress && (this.progressIntervalHandler = setInterval(function () {
          t.options.onProgress(t.lastProgress);
        }, this.options.progressInterval || 1e3), this.options.onProgress(this.lastProgress));
      }, e.prototype.stopProgressInterval = function () {
        clearInterval(this.progressIntervalHandler);
      }, e.prototype.handleProgress = function (t) {
        if (t = fe(t, this.lastProgress), this.lastProgress.files) for (var e in t.files) {
          this.lastProgress.files[e] && (t.files[e] = fe(t.files[e], this.lastProgress.files[e]));
        }
        this.lastProgress = t;
      }, e;
    }(f.EventEmitter),
        me = function me(t, e, n) {
      if (!e || "string" != typeof e) throw new Error("A valid Filestack handle or storage alias is required for preview");
      var i = V(vt)(n);
      if (i.errors.length) throw new q("Invalid preview params", i.errors, R.VALIDATION);

      var r = Object(H.removeEmpty)(n || {}),
          o = function (t, e, n, i) {
        var r = Object(l.a)({}, n),
            o = i && i.policy || t.policy,
            a = i && i.signature || t.signature,
            s = a && o,
            c = [t.urls.cdnUrl],
            p = r.css && encodeURIComponent('"' + r.css + '"'),
            u = p ? "preview=css:" + p : "preview";
        return -1 !== e.indexOf("src:") ? c.push(t.apikey + "/" + u) : c.push(u), s && c.push("security=policy:" + o + ",signature:" + a), c.push(e), c.join("/");
      }(t, e, r);

      if (r && r.id) {
        var a = r.id,
            s = document.createElement("iframe"),
            c = document.getElementById(a);
        if (s.src = o, s.width = "100%", s.height = "100%", !c) throw new Error('DOM Element with id "' + a + '" not found.');
        return c.appendChild(s);
      }

      return window.open(o, e);
    },
        he = Z()("fs:storage"),
        ye = function () {
      function t() {
        this.availableTypes = [], void 0 !== window.localStorage && (this.availableTypes.push(Kt.LOCAL), he("Local storage exists")), void 0 !== window.sessionStorage && (this.availableTypes.push(Kt.SESSION), he("Session storage exists")), he("availableTypes - %O", this.availableTypes);
      }

      return t.prototype.hasAccess = function (t) {
        return he("Checking access to storage for %s. Available types: %O", t, this.availableTypes), t ? this.availableTypes.indexOf(t) > -1 : !!this.availableTypes.length;
      }, t.prototype.getItem = function (t, e) {
        var n = this.getStore(e);
        if (he("getItem %s from %O", t, n), n) return n.getItem(t);
      }, t.prototype.setItem = function (t, e, n) {
        var i = this.getStore(n);
        if (he("setItem %s to %O", t, i), i) return i.setItem(t, e);
      }, t.prototype.removeItem = function (t, e) {
        var n = this.getStore(e);
        if (he("removeItem %s from %O", t, n), n) return n.removeItem(t);
      }, t.prototype.getStore = function (t) {
        if (he("get store with pref type - %s", t), this.hasAccess(t)) switch (t) {
          case Kt.LOCAL:
            return window.localStorage;

          case Kt.SESSION:
            return window.sessionStorage;

          default:
            return window[this.availableTypes[0]];
        } else he("User dont have access to any storage");
      }, t;
    }();

    !function (t) {
      t.SESSION = "sessionStorage", t.LOCAL = "localStorage";
    }(Kt || (Kt = {}));

    var ve,
        ge = "__fs_picker_token",
        be = function () {
      function t(t, e) {
        this.cache = !1, this.session = t, this.storeAdapter = new ye(), this.cloudApiUrl = t.urls.cloudApiUrl, e && e.sessionCache && (this.cache = e.sessionCache);
      }

      return Object.defineProperty(t.prototype, "token", {
        get: function get() {
          if (this.cache) {
            var t = this.storeAdapter.getItem(ge, Kt.LOCAL);
            if (t) return t;
          }

          return this.isInAppBrowser ? this.storeAdapter.getItem(ge, Kt.SESSION) : this._token;
        },
        set: function set(t) {
          this.cache && this.storeAdapter.setItem(ge, t, Kt.LOCAL), this.isInAppBrowser && this.storeAdapter.setItem(ge, t, Kt.SESSION), this._token = t;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(t.prototype, "isInAppBrowser", {
        get: function get() {
          return !!(this.session && this.session.prefetch && this.session.prefetch.settings && this.session.prefetch.settings.inapp_browser) && this.session.prefetch.settings.inapp_browser;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.list = function (t, e, n) {
        var i = this,
            r = {
          apikey: this.session.apikey,
          clouds: t,
          flow: "web",
          token: this.token
        };
        n && (Array.isArray(n) || (n = [n]), r.accept = n), this.isInAppBrowser && (r.appurl = this.currentAppUrl()), this.session.policy && this.session.signature && (r.policy = this.session.policy, r.signature = this.session.signature);
        var o = {};

        if (e) {
          var a = new Tt();
          e.cancel = a.cancel.bind(a), o.cancelToken = a;
        }

        return Et.post(this.cloudApiUrl + "/folder/list", r, o).then(function (t) {
          return t.data && t.data.token && (i.token = t.data.token), t.data;
        });
      }, t.prototype.store = function (t, e, n, i, r, o) {
        var a,
            s = this;
        void 0 === n && (n = {}), void 0 === i && (i = {}), void 0 === o && (o = null), void 0 === n.location && (n.location = "s3");
        var c = {
          apikey: this.session.apikey,
          token: this.token,
          flow: "web",
          upload_tags: o || void 0,
          clouds: (a = {}, a[t] = {
            path: e,
            store: Object(H.removeEmpty)(n)
          }, a)
        };
        "customsource" === t && i.customSourcePath && (c.clouds.customsource.customSourcePath = i.customSourcePath), "customsource" === t && i.customSourceContainer && (c.clouds.customsource.customSourceContainer = i.customSourceContainer), this.session.policy && this.session.signature && (c.policy = this.session.policy, c.signature = this.session.signature);
        var p = {};

        if (r) {
          var u = new Tt();
          r.cancel = u.cancel.bind(u), p.cancelToken = u;
        }

        return Et.post(this.cloudApiUrl + "/store/", c, p).then(function (e) {
          return e.data && e.data.token && (s.token = e.data.token), e.data && e.data[t] ? e.data[t] : e.data;
        });
      }, t.prototype.logout = function (t) {
        var e,
            n = {
          apikey: this.session.apikey,
          flow: "web",
          token: this.token
        };
        return t ? n.clouds = ((e = {})[t] = {}, e) : (this.cache && this.storeAdapter.removeItem(ge, Kt.LOCAL), this.isInAppBrowser && this.storeAdapter.removeItem(ge, Kt.SESSION)), Et.post(this.cloudApiUrl + "/auth/logout", n).then(function (e) {
          return e.data && e.data[t] ? e.data[t] : e.data;
        });
      }, t.prototype.metadata = function (t, e) {
        var n = {
          apikey: this.session.apikey,
          url: t,
          headers: e
        };
        return this.session.policy && this.session.signature && (n.policy = this.session.policy, n.signature = this.session.signature), Et.post(this.cloudApiUrl + "/metadata", n).then(function (t) {
          return t.data;
        });
      }, t.prototype.tokInit = function (t) {
        if ("video" !== t && "audio" !== t) throw new q("Type must be one of video or audio.");
        return Et.post(this.cloudApiUrl + "/recording/" + t + "/init").then(function (t) {
          return t.data;
        });
      }, t.prototype.tokStart = function (t, e, n) {
        if ("video" !== t && "audio" !== t) throw new q("Type must be one of video or audio.");
        var i = {
          apikey: e,
          session_id: n
        };
        return Et.post(this.cloudApiUrl + "/recording/" + t + "/start", i).then(function (t) {
          return t.data;
        });
      }, t.prototype.tokStop = function (t, e, n, i) {
        if ("video" !== t && "audio" !== t) throw new q("Type must be one of video or audio.");
        var r = {
          apikey: e,
          session_id: n,
          archive_id: i
        };
        return Et.post(this.cloudApiUrl + "/recording/" + t + "/stop", r).then(function (t) {
          return t.data;
        });
      }, t.prototype.currentAppUrl = function () {
        if (window.URLSearchParams) {
          var t = new URLSearchParams(window.location.search);
          return t.set("fs-tab", "init"), window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + t.toString();
        }
      }, t;
    }(),
        xe = n(30);

    !function (t) {
      t.PICKER = "picker", t.TRANSFORM_UI = "transform_ui";
    }(ve || (ve = {}));

    var ke,
        we,
        _e = function () {
      function t(t) {
        this.session = t instanceof Oe ? t.session : t;
      }

      return t.prototype.getConfig = function (t) {
        var e = t.pickerOptions,
            n = t.settings,
            i = t.permissions,
            r = t.events;
        return Object(l.b)(this, void 0, void 0, function () {
          var t,
              o,
              a = this;
          return Object(l.d)(this, function (s) {
            return t = {
              apikey: this.session.apikey
            }, this.session.policy && this.session.signature && (t.security = {
              policy: this.session.policy,
              signature: this.session.signature
            }), n = n ? (n = n.concat(["inapp_browser"])).filter(function (t, e) {
              return n.indexOf(t) === e;
            }) : ["inapp_browser"], e && Object.keys(e).length && (o = Object(H.cleanUpCallbacks)(xe(Object(l.a)({}, e)))), t = Object(l.a)(Object(l.a)({}, t), {
              permissions: i,
              settings: n,
              picker_config: o,
              events: r
            }), this.session.prefetch = null, [2, Et.post(this.session.urls.uploadApiUrl + "/prefetch", t).then(function (t) {
              if (200 !== t.status) throw new q("There is a problem with prefetch request");
              var n = t.data;
              return n.updated_config ? (n.pickerOptions = a.reassignCallbacks(e, n.updated_config || {}), delete n.updated_config) : n.pickerOptions = e, a.session.prefetch = n, n;
            })];
          });
        });
      }, t.prototype.reassignCallbacks = function (t, e) {
        if (!t || 0 === Object.keys(t).length) return t;

        for (var n in t) {
          "function" == typeof t[n] && (e[n] = t[n]), t[n] === Object(t[n]) && (e[n] = this.reassignCallbacks(t[n], e[n]));
        }

        return e;
      }, t;
    }();

    !function (t) {
      t.cw = "CW", t.ccw = "CCW";
    }(ke || (ke = {})), function (t) {
      t.inline = "inline", t.overlay = "overlay", t.dropPane = "dropPane";
    }(we || (we = {}));

    var je = function () {
      function t(t, e) {
        var n = V(bt)(e);
        if (n.errors.length) throw new q("Invalid picker params", n.errors, R.VALIDATION);
        this._initialized = this.loadModule(t, e);
      }

      return t.prototype.open = function () {
        return Object(l.b)(this, void 0, void 0, function () {
          return Object(l.d)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this._initialized];

              case 1:
                return [4, t.sent().open()];

              case 2:
                return t.sent(), [2];
            }
          });
        });
      }, t.prototype.crop = function (t) {
        return Object(l.b)(this, void 0, void 0, function () {
          return Object(l.d)(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this._initialized];

              case 1:
                return [4, e.sent().crop(t)];

              case 2:
                return e.sent(), [2];
            }
          });
        });
      }, t.prototype.close = function () {
        return Object(l.b)(this, void 0, void 0, function () {
          return Object(l.d)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this._initialized];

              case 1:
                return [4, t.sent().close()];

              case 2:
                return t.sent(), [2];
            }
          });
        });
      }, t.prototype.cancel = function () {
        return Object(l.b)(this, void 0, void 0, function () {
          return Object(l.d)(this, function (t) {
            switch (t.label) {
              case 0:
                return [4, this._initialized];

              case 1:
                return [4, t.sent().cancel()];

              case 2:
                return t.sent(), [2];
            }
          });
        });
      }, t.prototype.loadModule = function (t, e) {
        return Object(l.b)(this, void 0, void 0, function () {
          var n;
          return Object(l.d)(this, function (i) {
            switch (i.label) {
              case 0:
                return n = t.session.urls.pickerUrl, [4, a(c.PICKER, n)];

              case 1:
                return [2, new (i.sent())(t, e)];
            }
          });
        });
      }, t;
    }();

    z("addBreadcrumb", {
      category: "sdk",
      message: "filestack-js-sdk scope"
    });

    var Oe = function (t) {
      function e(e, n) {
        var i = t.call(this) || this;
        if (i.options = n, i.forwardErrors = !0, n && n.forwardErrors && (i.forwardErrors = n.forwardErrors), !e || "string" != typeof e || 0 === e.length) throw new Error("An apikey is required to initialize the Filestack client");
        var r = $.urls;

        if (i.session = {
          apikey: e,
          urls: r
        }, n) {
          var o = n.cname,
              a = n.security;
          i.setSecurity(a), i.setCname(o);
        }

        return i.prefetchInstance = new _e(i.session), i.cloud = new be(i.session, n), i;
      }

      return Object(l.c)(e, t), Object.defineProperty(e.prototype, "utils", {
        get: function get() {
          return H;
        },
        enumerable: !0,
        configurable: !0
      }), e.prototype.prefetch = function (t) {
        return this.prefetchInstance.getConfig(t);
      }, e.prototype.setSecurity = function (t) {
        if (t && (!t.policy || !t.signature)) throw new q("Both policy and signature are required for client security");
        t && t.policy && t.signature && (this.session.policy = t.policy, this.session.signature = t.signature);
      }, e.prototype.setCname = function (t) {
        t && 0 !== t.length && (this.session.cname = t, this.session.urls = H.resolveHost(this.session.urls, t));
      }, e.prototype.logout = function (t) {
        return this.cloud.logout(t);
      }, e.prototype.metadata = function (t, e, n) {
        return function (t, e, n, i) {
          if (!e || "string" != typeof e) throw new q("A valid Filestack handle is required for metadata");
          var r = V(xt)(n);
          if (r.errors.length) throw new q("Invalid metadata params", r.errors);
          var o = Object(l.a)({}, n);
          o.source_url = o.sourceUrl, o.policy = i && i.policy || t.policy, o.signature = i && i.signature || t.signature;
          var a = t.urls.fileApiUrl + "/" + e + "/metadata";
          return new Promise(function (t, n) {
            Et.get(a, {
              params: Object(H.removeEmpty)(o),
              filestackHeaders: !1
            }).then(function (n) {
              return t(Object(l.a)(Object(l.a)({}, n.data), {
                handle: e
              }));
            })["catch"](n);
          });
        }(this.session, t, e, n);
      }, e.prototype.picker = function (t) {
        return function (t, e) {
          return new je(t, e);
        }(this, t);
      }, e.prototype.preview = function (t, e) {
        return me(this.session, t, e);
      }, e.prototype.remove = function (t, e) {
        return At(this.session, t, !1, e);
      }, e.prototype.removeMetadata = function (t, e) {
        return At(this.session, t, !0, e);
      }, e.prototype.storeURL = function (t, e, n, i, r, o, a) {
        return function (t) {
          var e = t.session,
              n = t.url,
              i = t.storeParams,
              r = t.token,
              o = t.security,
              a = t.uploadTags,
              s = t.headers,
              c = t.workflowIds;
          if (!n || "string" != typeof n) return Promise.reject(new q("url is required for storeURL"));
          var p = V(yt)(i);
          if (p.errors.length) return Promise.reject(new q("Invalid store params", p.errors));
          e.policy = o && o.policy || e.policy, e.signature = o && o.signature || e.signature;
          var u = new ht(n, e.apikey);
          u.store(i), e.policy && e.signature && u.security({
            policy: e.policy,
            signature: e.signature
          });
          var f = {};

          if (r) {
            var d = new Tt();
            r.cancel = d.cancel.bind(d), f.cancelToken = d;
          }

          var m = [n];
          return s && (m = [{
            source: n,
            headers: s
          }]), c && c.length > 0 && u.addTask("store", {
            workflows: c
          }), Et.post(e.urls.processUrl + "/process", {
            apikey: e.apikey,
            sources: m,
            tasks: u.getTasks(),
            upload_tags: a
          }, f).then(function (t) {
            if (t.data && t.data.handle) return t.data.upload_tags && (t.data.uploadTags = t.data.upload_tags, delete t.data.upload_tags), Object(l.a)(Object(l.a)({}, t.data), {
              mimetype: t.data.type
            });
            throw new q("Invalid store response " + JSON.stringify(t.data));
          });
        }({
          session: this.session,
          url: t,
          storeParams: e,
          token: n,
          security: i,
          uploadTags: r,
          headers: o,
          workflowIds: a
        });
      }, e.prototype.retrieve = function (t, e, n) {
        return function (t, e, n, i) {
          if (void 0 === n && (n = {}), !e || 0 === e.length || "string" != typeof e) throw new q("File handle is required");
          console.info("Retrieve method is deprecated and it will be removed. Please use metadata or download");
          var r = V(kt)(n);
          if (r.errors.length) throw new q("Invalid retrieve params", r.errors);
          var o = Object(l.a)({}, n);
          o.key = t.apikey, o.policy = i && i.policy || t.policy, o.signature = i && i.signature || t.signature;
          var a,
              s,
              c = wt.a.GET;

          if (o.head && (c = wt.a.HEAD, delete o.head), o.extension && o.extension.length && (a = o.extension, delete o.extension), o.metadata) {
            if (c === wt.a.HEAD) throw new q("Head and metadata options cannot be used together");
            s = o.metadata, delete o.metadata;
          }

          var p = t.urls.fileApiUrl + "/" + e + (a ? "+" + a : "") + (s ? "/metadata" : "");
          return new Promise(function (t, e) {
            Et.dispatch(p, {
              method: c,
              filestackHeaders: !1,
              params: Object(H.removeEmpty)(o)
            }).then(function (e) {
              return t(c === wt.a.HEAD ? e.headers : e.data);
            })["catch"](e);
          });
        }(this.session, t, e, n);
      }, e.prototype.download = function (t, e) {
        return function (t, e, n) {
          var i = new ht(e, t.apikey),
              r = n && n.policy || t.policy,
              o = n && n.signature || t.signature;
          return r && o && i.security({
            signature: o,
            policy: r
          }), Et.dispatch(i.toString(), {
            method: wt.a.GET,
            blobResponse: !0
          });
        }(this.session, t, e);
      }, e.prototype.transform = function (t, e, n) {
        return void 0 === n && (n = !1), Qt(this.session, t, e, n);
      }, e.prototype.upload = function (t, e, n, i, r) {
        var o = this,
            a = new de(e, n);
        return a.setSession(this.session), i && a.setToken(i), r && a.setSecurity(r), a.on("error", function (t) {
          o.forwardErrors && M(function (i) {
            i.setTag("filestack-apikey", o.session.apikey), i.setTag("filestack-version", H.getVersion()), i.setExtra("filestack-options", o.options), i.setExtras({
              uploadOptions: e,
              storeOptions: n,
              details: t.details
            }), t.message = "FS-" + t.message, N(t);
          }), o.emit("upload.error", t);
        }), a.upload(t);
      }, e.prototype.multiupload = function (t, e, n, i, r) {
        var o = this,
            a = new de(e, n);
        return a.setSession(this.session), i && a.setToken(i), r && a.setSecurity(r), a.on("error", function (t) {
          M(function (i) {
            i.setTag("filestack-apikey", o.session.apikey), i.setTag("filestack-version", H.getVersion()), i.setExtra("filestack-options", o.options), i.setExtras(t.details), i.setExtras({
              uploadOptions: e,
              storeOptions: n
            }), N(t);
          }), o.emit("upload.error", t);
        }), a.multiupload(t);
      }, e;
    }(f.EventEmitter),
        Se = function Se(t, e) {
      return new Oe(t, e);
    },
        Ee = Se,
        Ce = "3.22.1";

    s(c.FILESTACK_SDK, Se, {
      version: "3.22.1"
    });
  },, function (t, e, n) {
    (function (t) {
      n.d(e, "a", function () {
        return c;
      });
      var i = n(9),
          r = n(13),
          o = {
        nowSeconds: function nowSeconds() {
          return Date.now() / 1e3;
        }
      };
      var a = Object(r.b)() ? function () {
        try {
          return Object(r.a)(t, "perf_hooks").performance;
        } catch (t) {
          return;
        }
      }() : function () {
        var t = Object(i.b)().performance;
        if (t && t.now) return {
          now: function now() {
            return t.now();
          },
          timeOrigin: Date.now() - t.now()
        };
      }(),
          s = void 0 === a ? o : {
        nowSeconds: function nowSeconds() {
          return (a.timeOrigin + a.now()) / 1e3;
        }
      },
          c = o.nowSeconds.bind(o);
      s.nowSeconds.bind(s), function () {
        var t = Object(i.b)().performance;
        if (t) t.timeOrigin ? t.timeOrigin : t.timing && t.timing.navigationStart || Date.now();
      }();
    }).call(this, n(51)(t));
  }, function (t, e, n) {
    (function (t) {
      n.d(e, "a", function () {
        return o;
      });
      var i = n(0),
          r = (n(22), n(4));
      n(32), n(31), n(10);

      function o(t) {
        var e, n;

        if (Object(r.e)(t)) {
          var a = t,
              s = {};

          try {
            for (var c = Object(i.f)(Object.keys(a)), p = c.next(); !p.done; p = c.next()) {
              var u = p.value;
              void 0 !== a[u] && (s[u] = o(a[u]));
            }
          } catch (t) {
            e = {
              error: t
            };
          } finally {
            try {
              p && !p.done && (n = c["return"]) && n.call(c);
            } finally {
              if (e) throw e.error;
            }
          }

          return s;
        }

        return Array.isArray(t) ? t.map(o) : t;
      }
    }).call(this, n(14));
  }]);

  var _filestack$Filestack = filestack.Filestack,
      _filestack$init = filestack.init,
      _filestack$version = filestack.version,
      _filestack$EAlignOptions = filestack.EAlignOptions,
      _filestack$EAlignFacesOptions = filestack.EAlignFacesOptions,
      _filestack$EFitOptions = filestack.EFitOptions,
      _filestack$EBlurMode = filestack.EBlurMode,
      _filestack$EShapeType = filestack.EShapeType,
      _filestack$ENoiseType = filestack.ENoiseType,
      _filestack$EStyleType = filestack.EStyleType,
      _filestack$EColorspaceType = filestack.EColorspaceType,
      _filestack$ECropfacesType = filestack.ECropfacesType,
      _filestack$ESmartCropMode = filestack.ESmartCropMode,
      _filestack$EImageWatermarkPosition = filestack.EImageWatermarkPosition,
      _filestack$EVideoTypes = filestack.EVideoTypes,
      _filestack$EUrlscreenshotAgent = filestack.EUrlscreenshotAgent,
      _filestack$EUrlscreenshotMode = filestack.EUrlscreenshotMode,
      _filestack$EUrlscreenshotOrientation = filestack.EUrlscreenshotOrientation,
      _filestack$EVideoLocations = filestack.EVideoLocations,
      _filestack$EVideoAccess = filestack.EVideoAccess,
      _filestack$EVideoAccessMode = filestack.EVideoAccessMode,
      _filestack$transform = filestack.transform,
      _filestack$Align = filestack.Align,
      _filestack$FitOptions = filestack.FitOptions,
      _filestack$BlurMode = filestack.BlurMode,
      _filestack$ShapeType = filestack.ShapeType,
      _filestack$NoiseType = filestack.NoiseType,
      _filestack$StyleType = filestack.StyleType,
      _filestack$ColorspaceType = filestack.ColorspaceType,
      _filestack$CropfacesType = filestack.CropfacesType,
      _filestack$ImageWatermarkPosition = filestack.ImageWatermarkPosition,
      _filestack$SmartCropMode = filestack.SmartCropMode,
      _filestack$VideoTypes = filestack.VideoTypes,
      _filestack$URLScreenshotAgent = filestack.URLScreenshotAgent,
      _filestack$URLScreenshotMode = filestack.URLScreenshotMode,
      _filestack$URLScreenshotOrientation = filestack.URLScreenshotOrientation,
      _filestack$Locations = filestack.Locations,
      _filestack$VideoAccess = filestack.VideoAccess,
      _filestack$VideoAccessMode = filestack.VideoAccessMode,
      _filestack$EnhancePreset = filestack.EnhancePreset,
      _filestack$Filelink = filestack.Filelink,
      _filestack$FilestackErrorType = filestack.FilestackErrorType,
      _filestack$FsHttpMethod = filestack.FsHttpMethod,
      _filestack$FsRequest = filestack.FsRequest,
      _filestack$FsRequestErrorCode = filestack.FsRequestErrorCode,
      _filestack$FsRequestError = filestack.FsRequestError,
      _filestack$FsCancelToken = filestack.FsCancelToken,
      _filestack$resolveCdnUrl = filestack.resolveCdnUrl,
      _filestack$resolveHost = filestack.resolveHost,
      _filestack$removeEmpty = filestack.removeEmpty,
      _filestack$uniqueTime = filestack.uniqueTime,
      _filestack$uniqueId = filestack.uniqueId,
      _filestack$extensionToMime = filestack.extensionToMime,
      _filestack$sanitizeName = filestack.sanitizeName,
      _filestack$filterObject = filestack.filterObject,
      _filestack$cleanUpCallbacks = filestack.cleanUpCallbacks,
      _filestack$md5 = filestack.md5,
      _filestack$b64 = filestack.b64,
      _filestack$getVersion = filestack.getVersion,
      _filestack$isMobile = filestack.isMobile,
      _filestack$isFacebook = filestack.isFacebook,
      _filestack$TransformSchema = filestack.TransformSchema,
      _filestack$getSecurity = filestack.getSecurity,
      _filestack$validateWebhookSignature = filestack.validateWebhookSignature,
      _filestack$Client = filestack.Client,
      _filestack$FilestackError = filestack.FilestackError,
      _filestack$PickerDisplayMode = filestack.PickerDisplayMode,
      _filestack$getMimetype = filestack.getMimetype,
      _filestack$PrefetchEvents = filestack.PrefetchEvents;
  var filestack$1 =
  /*#__PURE__*/
  Object.freeze({
    __proto__: null,
    Filestack: _filestack$Filestack,
    init: _filestack$init,
    version: _filestack$version,
    EAlignOptions: _filestack$EAlignOptions,
    EAlignFacesOptions: _filestack$EAlignFacesOptions,
    EFitOptions: _filestack$EFitOptions,
    EBlurMode: _filestack$EBlurMode,
    EShapeType: _filestack$EShapeType,
    ENoiseType: _filestack$ENoiseType,
    EStyleType: _filestack$EStyleType,
    EColorspaceType: _filestack$EColorspaceType,
    ECropfacesType: _filestack$ECropfacesType,
    ESmartCropMode: _filestack$ESmartCropMode,
    EImageWatermarkPosition: _filestack$EImageWatermarkPosition,
    EVideoTypes: _filestack$EVideoTypes,
    EUrlscreenshotAgent: _filestack$EUrlscreenshotAgent,
    EUrlscreenshotMode: _filestack$EUrlscreenshotMode,
    EUrlscreenshotOrientation: _filestack$EUrlscreenshotOrientation,
    EVideoLocations: _filestack$EVideoLocations,
    EVideoAccess: _filestack$EVideoAccess,
    EVideoAccessMode: _filestack$EVideoAccessMode,
    transform: _filestack$transform,
    Align: _filestack$Align,
    FitOptions: _filestack$FitOptions,
    BlurMode: _filestack$BlurMode,
    ShapeType: _filestack$ShapeType,
    NoiseType: _filestack$NoiseType,
    StyleType: _filestack$StyleType,
    ColorspaceType: _filestack$ColorspaceType,
    CropfacesType: _filestack$CropfacesType,
    ImageWatermarkPosition: _filestack$ImageWatermarkPosition,
    SmartCropMode: _filestack$SmartCropMode,
    VideoTypes: _filestack$VideoTypes,
    URLScreenshotAgent: _filestack$URLScreenshotAgent,
    URLScreenshotMode: _filestack$URLScreenshotMode,
    URLScreenshotOrientation: _filestack$URLScreenshotOrientation,
    Locations: _filestack$Locations,
    VideoAccess: _filestack$VideoAccess,
    VideoAccessMode: _filestack$VideoAccessMode,
    EnhancePreset: _filestack$EnhancePreset,
    Filelink: _filestack$Filelink,
    FilestackErrorType: _filestack$FilestackErrorType,
    FsHttpMethod: _filestack$FsHttpMethod,
    FsRequest: _filestack$FsRequest,
    FsRequestErrorCode: _filestack$FsRequestErrorCode,
    FsRequestError: _filestack$FsRequestError,
    FsCancelToken: _filestack$FsCancelToken,
    resolveCdnUrl: _filestack$resolveCdnUrl,
    resolveHost: _filestack$resolveHost,
    removeEmpty: _filestack$removeEmpty,
    uniqueTime: _filestack$uniqueTime,
    uniqueId: _filestack$uniqueId,
    extensionToMime: _filestack$extensionToMime,
    sanitizeName: _filestack$sanitizeName,
    filterObject: _filestack$filterObject,
    cleanUpCallbacks: _filestack$cleanUpCallbacks,
    md5: _filestack$md5,
    b64: _filestack$b64,
    getVersion: _filestack$getVersion,
    isMobile: _filestack$isMobile,
    isFacebook: _filestack$isFacebook,
    TransformSchema: _filestack$TransformSchema,
    getSecurity: _filestack$getSecurity,
    validateWebhookSignature: _filestack$validateWebhookSignature,
    Client: _filestack$Client,
    FilestackError: _filestack$FilestackError,
    PickerDisplayMode: _filestack$PickerDisplayMode,
    getMimetype: _filestack$getMimetype,
    PrefetchEvents: _filestack$PrefetchEvents
  });

  var FilestackLoader = function (e) {
    var t = {};

    function r(n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof2(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 0);
  }([function (e, t, r) {
    r.r(t), r.d(t, "loadModules", function () {
      return l;
    }), r.d(t, "loadModule", function () {
      return s;
    }), r.d(t, "registerModule", function () {
      return u;
    }), r.d(t, "loadCss", function () {
      return c;
    }), r.d(t, "FILESTACK_MODULES", function () {
      return o;
    });

    var n,
        o,
        a = ("object" == (typeof window === "undefined" ? "undefined" : _typeof2(window)) && ((n = window.filestackInternals) || (n = {
      modules: {}
    }, window.filestackInternals = n), n.modules || (n.modules = {})), n),
        i = a && a.modules,
        d = function d(e, t, r) {
      e.detachEvent ? e.detachEvent("onreadystatechange", t) : e.removeEventListener(r, t, !1);
    },
        l = function l(e) {
      return Promise.all(e.map(function (e) {
        var t = e.id,
            r = e.url;
        return s(t, r);
      })).then(function (t) {
        var r = {};
        return t.forEach(function (t, n) {
          var o = e[n];
          r[o.id] = t;
        }), r;
      });
    },
        s = function s(e, t) {
      if (!e) throw new Error("Module id is required");
      var r = i[e];
      return e = "fs-loader-" + e, r || (i[e] = {}, r = i[e]), r.instance ? Promise.resolve(r.instance) : r.promise ? r.promise : r.promise = new Promise(function (r, n) {
        var o = function o(t) {
          if ("load" === t.type || /^(complete|loaded)$/.test((t.currentTarget || t.srcElement).readyState)) {
            var a = t.currentTarget || t.srcElement;
            d(a, o, "load"), d(a, n, "error"), setTimeout(function () {
              return r(i[e] ? i[e].instance : void 0);
            }, 10);
          }
        },
            a = document.createElement("script");

        a.id = e, !a.attachEvent || a.attachEvent.toString && a.attachEvent.toString().indexOf("[native code") < 0 ? (a.addEventListener("load", o, !1), a.addEventListener("onerror", n, !1)) : a.attachEvent("onreadystatechange", o), a.setAttribute("crossorigin", "anonymous"), a.setAttribute("charset", "utf-8"), a.setAttribute("async", "true"), a.src = t, document.body.appendChild(a);
      });
    },
        u = function u(e, t, r) {
      if (!e) throw new Error("Module id is required");
      if (!i) throw new Error("Loader is not initialized");
      i[e = "fs-loader-" + e] && (i[e] = {
        instance: t,
        metadata: r
      });
    },
        c = function c(e) {
      return null !== document.querySelector('link[href="' + e + '"]') ? Promise.resolve() : new Promise(function (t) {
        var r = document.getElementsByTagName("head")[0],
            n = document.createElement("link"),
            o = function o() {
          t(), n.removeEventListener("load", o);
        };

        n.rel = "stylesheet", n.href = e, n.addEventListener("load", o), r.appendChild(n);
      });
    };

    !function (e) {
      e.FILESTACK_SDK = "filestack-sdk", e.TRANSFORMS_UI = "transforms-ui", e.PICKER = "picker";
    }(o || (o = {}));
  }]);

  var _FilestackLoader$loadModules = FilestackLoader.loadModules,
      _FilestackLoader$loadModule = FilestackLoader.loadModule,
      _FilestackLoader$registerModule = FilestackLoader.registerModule,
      _FilestackLoader$loadCss = FilestackLoader.loadCss,
      _FilestackLoader$FILESTACK_MODULES = FilestackLoader.FILESTACK_MODULES; // This helper emulates the filestack-js SDK, wherein the picker version is hardcoded

  var version = '1.26.2';

  window.getClient = function () {
    return filestack$1;
  };

  window.getLoader = function () {
    return {
      loadModule: _FilestackLoader$loadModule,
      FILESTACK_MODULES: _FilestackLoader$FILESTACK_MODULES
    };
  };

  window.getVersion = function () {
    return '1.26.2';
  };

  window.getLoader = function () {
    return {
      loadModule: _FilestackLoader$loadModule,
      FILESTACK_MODULES: _FilestackLoader$FILESTACK_MODULES
    };
  };

  window.getPlugins = function () {// return { FsGooglePicker };
  };

  window.getVersion = function () {
    return '1.26.2';
  };

  window.startPicker = function (clientConfig, pickerConfig, pickerInitialState) {
    var client = _filestack$init(clientConfig.apikey, {
      security: clientConfig.security,
      cname: clientConfig.cname,
      sessionCache: clientConfig.sessionCache || false
    });

    window.client = client;
    return _FilestackLoader$loadModule(_FilestackLoader$FILESTACK_MODULES.PICKER, '/build/' + version + '/picker.js') // eslint-disable-line
    .then(function (Picker) {
      window.filestackInternals.logger.on();
      var pickerInstance = new Picker(client, pickerConfig);
      window.picker = pickerInstance;
      return pickerInstance.open(pickerInitialState);
    });
  };

  window.startCropper = function (clientConfig, pickerConfig, pickerInitialState, files) {
    var client = _filestack$init(clientConfig.apikey, {
      security: clientConfig.security,
      cname: clientConfig.cname
    });

    window.client = client;
    return _FilestackLoader$loadModule(_FilestackLoader$FILESTACK_MODULES.PICKER, '/build/' + version + '/picker.js') // eslint-disable-line
    .then(function (Picker) {
      window.filestackInternals.logger.on();
      var pickerInstance = new Picker(client, pickerConfig);
      pickerInstance.crop(files);
      return pickerInstance;
    });
  };
})();