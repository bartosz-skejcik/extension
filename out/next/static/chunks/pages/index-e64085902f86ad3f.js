(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return s(1595);
                },
            ]);
        },
        1595: function (e, t, s) {
            "use strict";
            s.r(t),
                s.d(t, {
                    default: function () {
                        return ea;
                    },
                });
            var a = s(1799),
                n = s(9396),
                l = s(5893),
                r = s(1355),
                c = s(7294);
            function o(e) {
                var t = e.placeholder,
                    s = e.searchState,
                    a = e.searchEngine,
                    n = (0, c.useState)(""),
                    o = n[0],
                    i = n[1],
                    u = function (e) {
                        i(e.target.value);
                    },
                    d = function (e) {
                        e.preventDefault(),
                            (window.location.href = ""
                                .concat(a.value)
                                .concat(o));
                    };
                return (0, l.jsx)(r.u, {
                    show: s,
                    enter: "transition duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "transition duration-300",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    className: "w-full",
                    children: (0, l.jsxs)("form", {
                        className:
                            "flex flex-row items-center justify-center w-full backdrop-blur-md bg-gray-800/40 rounded-3xl mb-8",
                        children: [
                            (0, l.jsx)("img", {
                                src: "https://static-00.iconduck.com/assets.00/google-marketing-platform-icon-256x256-kwk0alas.png",
                                className: "mx-4 my-2 h-8 w-8",
                                id: "search-icon",
                                alt: "Google Search Icon",
                            }),
                            (0, l.jsx)("input", {
                                type: "text",
                                ref: function (e) {
                                    return e && e.focus();
                                },
                                placeholder: t,
                                onChange: function (e) {
                                    return u(e);
                                },
                                onKeyDown: function (e) {
                                    "Enter" === e.key && d(e);
                                },
                                className:
                                    "pr-6 py-4 w-full text-xl text-white placeholder:text-gray-100 bg-transparent focus:outline-none ",
                            }),
                        ],
                    }),
                });
            }
            var i,
                u,
                d,
                m = s(7568),
                x = s(655),
                h = s(2987),
                p = s(8750),
                f =
                    ((i = (0, m.Z)(function (e, t, s, a, n) {
                        var l, r;
                        return (0, x.__generator)(this, function (l) {
                            switch (l.label) {
                                case 0:
                                    return [
                                        4,
                                        fetch(
                                            "http://dataservice.accuweather.com/locations/v1/cities/search?apikey="
                                                .concat(n, "&q=")
                                                .concat(e.toString(), ",")
                                                .concat(
                                                    t.toString(),
                                                    "&language=pl-PL"
                                                ),
                                            {
                                                method: "GET",
                                                headers: {
                                                    Accept: "*/*",
                                                    "Accept-Encoding": "gzip",
                                                    "Accept-Language": "en-US",
                                                },
                                            }
                                        ),
                                    ];
                                case 1:
                                    return [4, l.sent().json()];
                                case 2:
                                    return (
                                        s((r = l.sent())[0].Key), a(r[0]), [2]
                                    );
                            }
                        });
                    })),
                    function (e, t, s, a, n) {
                        return i.apply(this, arguments);
                    }),
                g =
                    ((u = (0, m.Z)(function (e, t, s) {
                        var a, n;
                        return (0, x.__generator)(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return [
                                        4,
                                        fetch(
                                            "http://dataservice.accuweather.com/currentconditions/v1/"
                                                .concat(e, "?apikey=")
                                                .concat(s, "&details=true"),
                                            {
                                                method: "GET",
                                                headers: {
                                                    Accept: "*/*",
                                                    "Accept-Encoding": "gzip",
                                                    "Accept-Language": "en-US",
                                                },
                                            }
                                        ),
                                    ];
                                case 1:
                                    return [4, a.sent().json()];
                                case 2:
                                    return t(a.sent()), [2];
                            }
                        });
                    })),
                    function (e, t, s) {
                        return u.apply(this, arguments);
                    }),
                v =
                    ((d = (0, m.Z)(function (e, t, s) {
                        var a, n;
                        return (0, x.__generator)(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return [
                                        4,
                                        fetch(
                                            "http://dataservice.accuweather.com/forecasts/v1/daily/5day/"
                                                .concat(e, "?apikey=")
                                                .concat(
                                                    s,
                                                    "&details=true&metric=true"
                                                ),
                                            {
                                                method: "GET",
                                                headers: {
                                                    Accept: "*/*",
                                                    "Accept-Encoding": "gzip",
                                                    "Accept-Language": "en-US",
                                                },
                                            }
                                        ),
                                    ];
                                case 1:
                                    return [4, a.sent().json()];
                                case 2:
                                    return t(a.sent()), [2];
                            }
                        });
                    })),
                    function (e, t, s) {
                        return d.apply(this, arguments);
                    }),
                y = {
                    getLocationKey: f,
                    sendRequest: g,
                    getForecast: v,
                    convertDateToDayName: function (e) {
                        var t = new Date(e).getDay();
                        switch (t) {
                            case 0:
                                return "Niedz";
                            case 1:
                                return "Pon";
                            case 2:
                                return "Wt";
                            case 3:
                                return "Śro";
                            case 4:
                                return "Czw";
                            case 5:
                                return "Pią";
                            case 6:
                                return "Sob";
                        }
                    },
                },
                j = function (e) {
                    var t,
                        s,
                        a,
                        n,
                        o,
                        i,
                        u,
                        d,
                        f,
                        g,
                        v,
                        j = e.weather,
                        b = "v07xGuWKiWUnzSG3BWFRqzG6SUF0vmMc",
                        w = (0, c.useState)(),
                        N = w[0],
                        S = w[1],
                        k = (0, c.useState)(),
                        _ = k[0],
                        F = k[1],
                        C = (0, c.useState)([]),
                        T = C[0],
                        O = C[1],
                        I = (0, c.useState)([]),
                        E = I[0],
                        D = I[1];
                    return (
                        (0, c.useEffect)(
                            function () {
                                var e;
                                navigator.geolocation.getCurrentPosition(
                                    ((e = (0, m.Z)(function (e) {
                                        return (0,
                                        x.__generator)(this, function (t) {
                                            return (
                                                y.getLocationKey(
                                                    e.coords.latitude,
                                                    e.coords.longitude,
                                                    S,
                                                    F,
                                                    b
                                                ),
                                                [2]
                                            );
                                        });
                                    })),
                                    function (t) {
                                        return e.apply(this, arguments);
                                    })
                                ),
                                    N &&
                                        (y.getForecast(N, D, b),
                                        y.sendRequest(N, O, b));
                            },
                            [N, j]
                        ),
                        T.length > 0 && E.DailyForecasts.length > 0
                            ? (0, l.jsx)(r.u, {
                                  show: j,
                                  enter: "transition duration-300",
                                  enterFrom: "opacity-0 scale-95",
                                  enterTo: "opacity-100 scale-100",
                                  leave: "transition duration-300",
                                  leaveFrom: "opacity-100 scale-100",
                                  leaveTo: "opacity-0 scale-95",
                                  className: "w-full",
                                  children: (0, l.jsxs)("section", {
                                      className:
                                          "w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 px-6 py-4 rounded-3xl",
                                      children: [
                                          (0, l.jsxs)("h1", {
                                              className:
                                                  "font-semibold text-3xl xl:text-4xl",
                                              children: [
                                                  _.LocalizedName.length > 11
                                                      ? _.LocalizedName.slice(
                                                            0,
                                                            11
                                                        )
                                                      : _.LocalizedName,
                                                  ",",
                                                  null === (t = _.Country) ||
                                                  void 0 === t
                                                      ? void 0
                                                      : t.ID,
                                              ],
                                          }),
                                          (0, l.jsxs)("div", {
                                              className:
                                                  "flex flex-row items-center justify-around",
                                              children: [
                                                  (0, l.jsx)("img", {
                                                      src: "https://developer.accuweather.com/sites/default/files/".concat(
                                                          null ===
                                                              (s =
                                                                  T[0]
                                                                      .WeatherIcon) ||
                                                              void 0 === s
                                                              ? void 0
                                                              : s
                                                                    .toString()
                                                                    .padStart(
                                                                        2,
                                                                        "0"
                                                                    ),
                                                          "-s.png"
                                                      ),
                                                      alt: "weather icon",
                                                      className: "w-24",
                                                  }),
                                                  (0, l.jsxs)("h2", {
                                                      className: "text-7xl",
                                                      children: [
                                                          Math.round(
                                                              null ===
                                                                  (a =
                                                                      T[0]
                                                                          .Temperature) ||
                                                                  void 0 === a
                                                                  ? void 0
                                                                  : null ===
                                                                        (n =
                                                                            a.Metric) ||
                                                                    void 0 === n
                                                                  ? void 0
                                                                  : n.Value
                                                          ),
                                                          "\xb0C",
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("h3", {
                                              className: "font-bold text-2xl",
                                              children: T[0].WeatherText,
                                          }),
                                          (0, l.jsxs)("div", {
                                              className:
                                                  "flex flex-row items-center justify-center space-x-5 w-full mt-2",
                                              children: [
                                                  (0, l.jsxs)("h4", {
                                                      className:
                                                          "font-semibold text-xl flex items-center justify-center space-x-1.5",
                                                      children: [
                                                          (0, l.jsx)(h.Z, {
                                                              className:
                                                                  "w-5 h-5 text-green-500",
                                                          }),
                                                          ":",
                                                          (0, l.jsxs)("span", {
                                                              children: [
                                                                  Math.round(
                                                                      E
                                                                          .DailyForecasts[0]
                                                                          .Temperature
                                                                          .Maximum
                                                                          .Value
                                                                  ),
                                                                  "\xb0C",
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsxs)("h5", {
                                                      className:
                                                          "font-semibold text-xl flex items-center justify-center space-x-1.5",
                                                      children: [
                                                          (0, l.jsx)(p.Z, {
                                                              className:
                                                                  "w-5 h-5 text-red-500",
                                                          }),
                                                          ":",
                                                          (0, l.jsxs)("span", {
                                                              children: [
                                                                  Math.round(
                                                                      E
                                                                          .DailyForecasts[0]
                                                                          .Temperature
                                                                          .Minimum
                                                                          .Value
                                                                  ),
                                                                  "\xb0C",
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsxs)("div", {
                                              className:
                                                  "flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-16 mt-2 w-full",
                                              children: [
                                                  (0, l.jsxs)("div", {
                                                      className:
                                                          "flex flex-col items-center justify-center",
                                                      children: [
                                                          (0, l.jsxs)("h3", {
                                                              className:
                                                                  "text-md",
                                                              children: [
                                                                  "Real feel:",
                                                                  " ",
                                                                  Math.round(
                                                                      null ===
                                                                          (o =
                                                                              T[0]
                                                                                  .RealFeelTemperature) ||
                                                                          void 0 ===
                                                                              o
                                                                          ? void 0
                                                                          : null ===
                                                                                (i =
                                                                                    o.Metric) ||
                                                                            void 0 ===
                                                                                i
                                                                          ? void 0
                                                                          : i.Value
                                                                  ),
                                                                  "\xb0C",
                                                              ],
                                                          }),
                                                          (0, l.jsxs)("h3", {
                                                              className:
                                                                  "text-md",
                                                              children: [
                                                                  "Humidity: ",
                                                                  T[0]
                                                                      .RelativeHumidity,
                                                                  "%",
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                                  (0, l.jsxs)("div", {
                                                      className:
                                                          "flex flex-col items-center justify-center",
                                                      children: [
                                                          (0, l.jsxs)("h3", {
                                                              className:
                                                                  "text-md",
                                                              children: [
                                                                  "Wind:",
                                                                  " ",
                                                                  Math.round(
                                                                      null ===
                                                                          (u =
                                                                              T[0]
                                                                                  .Wind) ||
                                                                          void 0 ===
                                                                              u
                                                                          ? void 0
                                                                          : null ===
                                                                                (d =
                                                                                    u.Speed) ||
                                                                            void 0 ===
                                                                                d
                                                                          ? void 0
                                                                          : null ===
                                                                                (f =
                                                                                    d.Metric) ||
                                                                            void 0 ===
                                                                                f
                                                                          ? void 0
                                                                          : f.Value
                                                                  ),
                                                                  " ",
                                                                  "km/h",
                                                              ],
                                                          }),
                                                          (0, l.jsxs)("h3", {
                                                              className:
                                                                  "text-md",
                                                              children: [
                                                                  "Press: ",
                                                                  null ===
                                                                      (g =
                                                                          T[0]
                                                                              .Pressure) ||
                                                                  void 0 === g
                                                                      ? void 0
                                                                      : null ===
                                                                            (v =
                                                                                g.Metric) ||
                                                                        void 0 ===
                                                                            v
                                                                      ? void 0
                                                                      : v.Value,
                                                                  " hPa",
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, l.jsx)("section", {
                                              className:
                                                  "flex flex-row items-center justify-center w-full space-x-3 lg:space-x-10 mt-3",
                                              children: E.DailyForecasts.map(
                                                  function (e, t) {
                                                      if (0 !== t)
                                                          return (0, l.jsxs)(
                                                              "div",
                                                              {
                                                                  className:
                                                                      "flex flex-col items-center justify-center space-y-1.5",
                                                                  children: [
                                                                      (0,
                                                                      l.jsx)(
                                                                          "h3",
                                                                          {
                                                                              className:
                                                                                  "text-md",
                                                                              children:
                                                                                  y.convertDateToDayName(
                                                                                      e.Date
                                                                                  ),
                                                                          }
                                                                      ),
                                                                      (0,
                                                                      l.jsx)(
                                                                          "img",
                                                                          {
                                                                              src: "https://developer.accuweather.com/sites/default/files/".concat(
                                                                                  e.Day.Icon.toString().padStart(
                                                                                      2,
                                                                                      "0"
                                                                                  ),
                                                                                  "-s.png"
                                                                              ),
                                                                              alt: "weather icon",
                                                                              className:
                                                                                  "w-12",
                                                                          }
                                                                      ),
                                                                      (0,
                                                                      l.jsxs)(
                                                                          "h3",
                                                                          {
                                                                              className:
                                                                                  "text-md",
                                                                              children:
                                                                                  [
                                                                                      Math.round(
                                                                                          e
                                                                                              .Temperature
                                                                                              .Maximum
                                                                                              .Value
                                                                                      ),
                                                                                      "\xb0C",
                                                                                  ],
                                                                          }
                                                                      ),
                                                                      (0,
                                                                      l.jsxs)(
                                                                          "h3",
                                                                          {
                                                                              className:
                                                                                  "text-md",
                                                                              children:
                                                                                  [
                                                                                      Math.round(
                                                                                          e
                                                                                              .Temperature
                                                                                              .Minimum
                                                                                              .Value
                                                                                      ),
                                                                                      "\xb0C",
                                                                                  ],
                                                                          }
                                                                      ),
                                                                  ],
                                                              },
                                                              t
                                                          );
                                                  }
                                              ),
                                          }),
                                      ],
                                  }),
                              })
                            : (0, l.jsx)(l.Fragment, {})
                    );
                },
                b = function (e) {
                    var t = e.clock,
                        s = e.greeting,
                        a = (0, c.useState)(),
                        n = a[0],
                        o = a[1],
                        i = (0, c.useState)(),
                        u = i[0],
                        d = i[1];
                    return (
                        (0, c.useEffect)(function () {
                            var e = setInterval(function () {
                                o(
                                    new Date().toLocaleTimeString("pl-PL", {
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: !1,
                                    })
                                ),
                                    d(
                                        new Date().toLocaleDateString("pl-PL", {
                                            weekday: "long",
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })
                                    );
                            }, 1e3);
                            return function () {
                                return clearInterval(e);
                            };
                        }, []),
                        n
                            ? (0, l.jsx)(r.u, {
                                  show: t,
                                  enter: "transition duration-300",
                                  enterFrom: "opacity-0 scale-95",
                                  enterTo: "opacity-100 scale-100",
                                  leave: "transition duration-300",
                                  leaveFrom: "opacity-100 scale-100",
                                  leaveTo: "opacity-0 scale-95",
                                  className: "w-full",
                                  children: (0, l.jsxs)("section", {
                                      className:
                                          "w-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 px-6 py-4 rounded-3xl",
                                      children: [
                                          (0, l.jsx)("h1", {
                                              className:
                                                  "font-semibold text-7xl text-start",
                                              children: n,
                                          }),
                                          (0, l.jsx)("h2", {
                                              className: "text-2xl",
                                              children: u,
                                          }),
                                          (0, l.jsx)("h2", {
                                              className:
                                                  "text-3xl font-semibold pt-4",
                                              style: {
                                                  display: s ? "block" : "none",
                                              },
                                              children: [
                                                  "Dzień dobry",
                                                  "Dobry wiecz\xf3r",
                                              ][
                                                  17 > new Date().getHours()
                                                      ? 0
                                                      : 1
                                              ],
                                          }),
                                      ],
                                  }),
                              })
                            : (0, l.jsx)("div", {})
                    );
                },
                w = s(4033),
                N = function (e) {
                    var t = e.icon,
                        s = e.href,
                        a = e.apps,
                        n = e.setApps,
                        r = e.theme,
                        o = (0, c.useState)(!1),
                        i = o[0],
                        u = o[1],
                        d = function () {
                            u(!0);
                        },
                        m = function () {
                            u(!1);
                        };
                    return (0, l.jsxs)("div", {
                        className: "relative",
                        onMouseOver: d,
                        onMouseOut: m,
                        children: [
                            (0, l.jsx)("a", {
                                href: s,
                                className:
                                    "flex p-2 mx-2 items-center justify-center rounded-lg hover:bg-gray-700 hover:rotate-12 transition duration-500",
                                style: {
                                    backgroundColor: r.values && r.values.items,
                                },
                                children: (0, l.jsx)("img", {
                                    alt: "icon",
                                    src: t,
                                    className:
                                        "block max-w-8 max-h-8 w-full h-full aspect-square",
                                }),
                            }),
                            (0, l.jsx)("button", {
                                className: "".concat(
                                    i ? "block" : "invisible",
                                    " absolute -top-2 -right-1"
                                ),
                                onClick: function () {
                                    n(
                                        a.filter(function (e) {
                                            return e.href !== s;
                                        })
                                    );
                                },
                                children: (0, l.jsx)(w.Z, {
                                    className:
                                        "w-5 h-5 rounded-full text-black bg-red-500 transition duration-500",
                                }),
                            }),
                        ],
                    });
                },
                S = s(2237),
                k = s(8680),
                _ = s(5548),
                F = s(97),
                C = s(6941),
                T = s(5503),
                O = s(6257),
                I = s(1153),
                E = (0, T.ZF)({
                    apiKey: "AIzaSyBw-VqQ5J7hzGg5UVlLYDSdQW94N6Khf9s",
                    authDomain: "future-tab.firebaseapp.com",
                    projectId: "future-tab",
                    storageBucket: "future-tab.appspot.com",
                    messagingSenderId: "915335926178",
                    appId: "1:915335926178:web:9b6f97f7354a7d05f922fb",
                    measurementId: "G-VKDPV69RV6",
                }),
                D = (0, O.ad)(E),
                V = (0, I.cF)(),
                J = function (e) {
                    var t = e.setOpen,
                        s = e.setNewAppOpen,
                        a = e.apps,
                        n = e.setApps,
                        r = e.storage,
                        o = e.selected,
                        i = e.setLoginModalOpen,
                        u = e.setUserModalOpen,
                        d = e.theme,
                        m = e.user;
                    (0, c.useEffect)(
                        function () {
                            r && r.setItem("appSettings", JSON.stringify(a));
                        },
                        [a, r]
                    );
                    var x = (0, c.useState)(""),
                        h = x[0],
                        p = x[1];
                    return (
                        (0, c.useEffect)(
                            function () {
                                if (m.email) {
                                    var e = (0, I.iH)(
                                        V,
                                        "profilePictures/".concat(
                                            m.email
                                                .replace(".", "_")
                                                .replace("@", "_"),
                                            ".jpg"
                                        )
                                    );
                                    (0, I.Jt)(e)
                                        .then(function (e) {
                                            var t = new XMLHttpRequest();
                                            (t.responseType = "blob"),
                                                (t.onload = function (e) {
                                                    t.response;
                                                }),
                                                t.open("GET", e),
                                                t.send(),
                                                p(e),
                                                console.log(e);
                                        })
                                        .catch(function (e) {});
                                }
                            },
                            [m]
                        ),
                        (0, l.jsxs)("section", {
                            className:
                                "flex h-full items-center justify-between flex-col py-6 space-y-6",
                            style: {
                                width: o.value + "%",
                                backgroundColor: d.values && d.values.bg,
                            },
                            children: [
                                (0, l.jsx)("section", {
                                    className:
                                        "flex flex-col items-center justify-center",
                                    children: (0, l.jsx)("button", {
                                        onClick: function () {
                                            window.open("#", "_self");
                                        },
                                        className:
                                            "flex items-center justify-center",
                                        children: (0, l.jsx)(S.Z, {
                                            className:
                                                "p-1 w-8/12 h-8/12 rounded-xl hover:text-blue-600 hover:bg-gray-800/70 transition duration-500 text-gray-500",
                                        }),
                                    }),
                                }),
                                (0, l.jsxs)("section", {
                                    className:
                                        "flex flex-col items-center justify-start w-full h-full space-y-4",
                                    children: [
                                        (0, l.jsx)(C.ReactSortable, {
                                            className:
                                                "flex flex-col items-center justify-start space-y-4",
                                            list: a,
                                            setList: n,
                                            animation: 600,
                                            swapThreshold: 1,
                                            easing: "cubic-bezier(0, -0.6, 0, 1.6)",
                                            dragClass: "contents",
                                            ghostClass: "block",
                                            chosenClass: "block",
                                            children: a.map(function (e) {
                                                return (0,
                                                l.jsx)(N, { href: e.href, icon: e.icon, apps: a, setApps: n, theme: d }, e.id);
                                            }),
                                        }),
                                        (0, l.jsx)("button", {
                                            onClick: function () {
                                                return s(!0);
                                            },
                                            className:
                                                "flex items-center justify-center",
                                            children: (0, l.jsx)(k.Z, {
                                                className:
                                                    "m-2 mx-4 rounded-lg w-11/12 h-11/12 hover:text-blue-600 hover:scale-90 hover:rotate-180 transition duration-500 text-gray-500",
                                            }),
                                        }),
                                    ],
                                }),
                                (0, l.jsxs)("section", {
                                    className:
                                        "flex flex-col items-center justify-center space-y-4",
                                    children: [
                                        (0, l.jsx)("button", {
                                            onClick: function () {
                                                return t(!0);
                                            },
                                            className:
                                                "flex items-center justify-center",
                                            children: (0, l.jsx)(_.Z, {
                                                className:
                                                    "w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:scale-90 hover:rotate-180 transition duration-500 text-gray-500",
                                            }),
                                        }),
                                        (0, l.jsx)("button", {
                                            onClick: function () {
                                                var e = JSON.parse(
                                                    localStorage.getItem(
                                                        "user"
                                                    ) || "{}"
                                                );
                                                r && e.email ? u(!0) : i(!0);
                                            },
                                            className:
                                                "flex items-center justify-center",
                                            children: h
                                                ? (0, l.jsx)("img", {
                                                      src: h,
                                                      className:
                                                          "w-10 h-10 rounded-full hover:scale-95 transition duration-500",
                                                  })
                                                : (0, l.jsx)(F.Z, {
                                                      className:
                                                          "w-8/12 h-8/12 rounded-full hover:text-blue-600 hover:scale-95 transition duration-500 text-gray-500",
                                                  }),
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                L = s(2299);
            function z(e) {
                var t = e.value,
                    s = e.setValue,
                    a = e.placeholder,
                    n = e.storage,
                    r = e.theme;
                return (0, l.jsx)("input", {
                    type: "text",
                    className:
                        "px-3 py-1 backdrop-blur-md w-full rounded-xl placeholder:text-[".concat(
                            r.values && r.values.text,
                            "]"
                        ),
                    style: {
                        backgroundColor: r.values && r.values.items,
                        color: r.values && r.values.text,
                    },
                    onChange: function (e) {
                        s(e.target.value),
                            n &&
                                n.setItem(
                                    "wallpaper",
                                    JSON.stringify(e.target.value)
                                );
                    },
                    value: t,
                    placeholder: a,
                });
            }
            var M = s(9949),
                U = s(7349),
                Z = function (e) {
                    var t = e.selected,
                        s = e.setSelected,
                        a = e.storage,
                        n = e.options,
                        o = e.label,
                        i = e.theme;
                    return (0, l.jsx)("div", {
                        className: "z-40",
                        children: (0, l.jsx)(M.R, {
                            value: t,
                            onChange: function (e) {
                                s(e), a && a.setItem(o, JSON.stringify(e));
                            },
                            children: (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)(M.R.Button, {
                                        style: {
                                            color: i.values && i.values.text,
                                        },
                                        className:
                                            "cursor-default rounded-lg backdrop-blur-sm bg-gray-200/10 py-1 pl-3 pr-9 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
                                        children: [
                                            (0, l.jsx)("span", {
                                                className: "block truncate",
                                                children: t.name,
                                            }),
                                            (0, l.jsx)("span", {
                                                className:
                                                    "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                                children: (0, l.jsx)(U.Z, {
                                                    className: "h-4 w-4",
                                                    "aria-hidden": "true",
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(r.u, {
                                        as: c.Fragment,
                                        leave: "transition ease-in duration-100",
                                        leaveFrom: "opacity-100",
                                        leaveTo: "opacity-0",
                                        children: (0, l.jsx)(M.R.Options, {
                                            className:
                                                "absolute border-gray-200/20 border mt-1 max-h-60 overflow-auto rounded-md backdrop-blur-md bg-gray-600/30 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ".concat(
                                                    "searchEngine" == o
                                                        ? "-ml-3"
                                                        : ""
                                                ),
                                            children: n.map(function (e, t) {
                                                return (0, l.jsx)(
                                                    M.R.Option,
                                                    {
                                                        className: function (
                                                            e
                                                        ) {
                                                            var t = e.active;
                                                            return "relative cursor-default select-none font-semibold text-md rounded-md mx-1 ".concat(
                                                                t
                                                                    ? "backdrop-blur-md bg-gray-600/10"
                                                                    : ""
                                                            );
                                                        },
                                                        value: e,
                                                        children: function (t) {
                                                            var s = t.selected;
                                                            return (0, l.jsx)(
                                                                l.Fragment,
                                                                {
                                                                    children:
                                                                        (0,
                                                                        l.jsx)(
                                                                            "span",
                                                                            {
                                                                                className:
                                                                                    "block font-normal truncate px-4 rounded-md ".concat(
                                                                                        s
                                                                                            ? "bg-blue-500"
                                                                                            : "font-normal"
                                                                                    ),
                                                                                children:
                                                                                    e.name,
                                                                            }
                                                                        ),
                                                                }
                                                            );
                                                        },
                                                    },
                                                    t
                                                );
                                            }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                P = s(3933);
            function A(e) {
                var t = e.enabled,
                    s = e.runFunction;
                return (0, l.jsxs)(P.r, {
                    checked: t,
                    onChange: s,
                    className: "".concat(
                        t ? "bg-blue-600" : "bg-gray-400",
                        " inline-flex h-6 w-11 items-center rounded-full z-20"
                    ),
                    children: [
                        (0, l.jsx)("span", {
                            className: "sr-only",
                            children: "Enable option",
                        }),
                        (0, l.jsx)("span", {
                            className: "".concat(
                                t ? "translate-x-6" : "translate-x-1",
                                " h-4 w-4 transform rounded-full bg-white transition"
                            ),
                        }),
                    ],
                });
            }
            function G(e) {
                var t = e.open,
                    s = e.setOpen,
                    a = e.clock,
                    n = e.setClock,
                    o = e.search,
                    i = e.setSearch,
                    u = e.weather,
                    d = e.setWeather,
                    m = e.news,
                    x = e.setNews,
                    h = e.greeting,
                    p = e.setGreeting,
                    f = e.storage,
                    g = e.selected,
                    v = e.setSelected,
                    y = e.searchEngine,
                    j = e.setSearchEngine,
                    b = e.theme,
                    w = e.setTheme,
                    N = e.bgUrl,
                    S = e.setBgUrl,
                    k = function () {
                        s(!1);
                    };
                return (0, l.jsx)(r.u, {
                    appear: !0,
                    show: t,
                    as: c.Fragment,
                    children: (0, l.jsxs)(L.V, {
                        as: "div",
                        className: "relative z-10",
                        onClose: k,
                        children: [
                            (0, l.jsx)(r.u.Child, {
                                as: c.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "fixed inset-0 bg-black bg-opacity-50",
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "flex min-h-full items-center justify-center p-4 text-center",
                                    children: (0, l.jsx)(r.u.Child, {
                                        as: c.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 scale-95",
                                        enterTo: "opacity-100 scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 scale-100",
                                        leaveTo: "opacity-0 scale-95",
                                        children: (0, l.jsxs)(L.V.Panel, {
                                            style: {
                                                backgroundColor:
                                                    b.values && b.values.bg,
                                                color:
                                                    b.values && b.values.text,
                                            },
                                            className:
                                                "w-full max-w-md transform overflow-hidden backdrop-blur-md rounded-3xl p-6 text-left align-middle transition-all",
                                            children: [
                                                (0, l.jsx)(L.V.Title, {
                                                    as: "h3",
                                                    className:
                                                        "text-2xl font-semibold leading-6",
                                                    children: "User settings",
                                                }),
                                                (0, l.jsxs)("section", {
                                                    className:
                                                        "flex flex-col items-center justify-center my-4",
                                                    children: [
                                                        (0, l.jsxs)("div", {
                                                            className:
                                                                "w-full flex flex-row items-center justify-between pb-4 pt-2",
                                                            children: [
                                                                (0, l.jsx)(
                                                                    "h3",
                                                                    {
                                                                        className:
                                                                            "text-xl",
                                                                        children:
                                                                            "Dock size",
                                                                    }
                                                                ),
                                                                (0, l.jsx)(Z, {
                                                                    label: "dockSize",
                                                                    storage: f,
                                                                    selected: g,
                                                                    setSelected:
                                                                        v,
                                                                    options: [
                                                                        {
                                                                            name: "Small",
                                                                            value: 3,
                                                                        },
                                                                        {
                                                                            name: "Medium",
                                                                            value: 3.5,
                                                                        },
                                                                        {
                                                                            name: "Large",
                                                                            value: 4,
                                                                        },
                                                                        {
                                                                            name: "Huge",
                                                                            value: 4.5,
                                                                        },
                                                                    ],
                                                                    theme: b,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className:
                                                                "w-full flex flex-col items-center justify-center border-t-2 pt-4 pb-2 border-gray-500",
                                                            children: [
                                                                (0, l.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "w-full flex flex-row items-center justify-between pb-1",
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                l.jsx)(
                                                                                    "h3",
                                                                                    {
                                                                                        className:
                                                                                            "text-xl",
                                                                                        children:
                                                                                            "Clock",
                                                                                    }
                                                                                ),
                                                                                (0,
                                                                                l.jsx)(
                                                                                    A,
                                                                                    {
                                                                                        enabled:
                                                                                            a,
                                                                                        runFunction:
                                                                                            function () {
                                                                                                n(
                                                                                                    !a
                                                                                                ),
                                                                                                    f &&
                                                                                                        f.setItem(
                                                                                                            "clockSettings",
                                                                                                            JSON.stringify(
                                                                                                                !a
                                                                                                            )
                                                                                                        );
                                                                                            },
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                                (0, l.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "w-full flex flex-row items-center justify-between pt-1",
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                l.jsx)(
                                                                                    "h3",
                                                                                    {
                                                                                        className:
                                                                                            "text-lg ml-3",
                                                                                        children:
                                                                                            "Greeting",
                                                                                    }
                                                                                ),
                                                                                (0,
                                                                                l.jsx)(
                                                                                    A,
                                                                                    {
                                                                                        enabled:
                                                                                            h,
                                                                                        runFunction:
                                                                                            function () {
                                                                                                p(
                                                                                                    !h
                                                                                                ),
                                                                                                    f &&
                                                                                                        f.setItem(
                                                                                                            "greeting",
                                                                                                            JSON.stringify(
                                                                                                                !h
                                                                                                            )
                                                                                                        );
                                                                                            },
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className:
                                                                "w-full flex flex-col items-center justify-center py-2",
                                                            children: [
                                                                (0, l.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "w-full flex flex-row items-center justify-between pb-1",
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                l.jsx)(
                                                                                    "h3",
                                                                                    {
                                                                                        className:
                                                                                            "text-xl",
                                                                                        children:
                                                                                            "Search",
                                                                                    }
                                                                                ),
                                                                                (0,
                                                                                l.jsx)(
                                                                                    A,
                                                                                    {
                                                                                        enabled:
                                                                                            o,
                                                                                        runFunction:
                                                                                            function () {
                                                                                                i(
                                                                                                    !o
                                                                                                ),
                                                                                                    f &&
                                                                                                        f.setItem(
                                                                                                            "searchSettings",
                                                                                                            JSON.stringify(
                                                                                                                !o
                                                                                                            )
                                                                                                        );
                                                                                            },
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                                (0, l.jsxs)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "w-full flex flex-row items-center justify-between pt-1",
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                l.jsx)(
                                                                                    "h3",
                                                                                    {
                                                                                        className:
                                                                                            "text-lg ml-3",
                                                                                        children:
                                                                                            "Search Engine",
                                                                                    }
                                                                                ),
                                                                                (0,
                                                                                l.jsx)(
                                                                                    Z,
                                                                                    {
                                                                                        label: "searchEngine",
                                                                                        storage:
                                                                                            f,
                                                                                        selected:
                                                                                            y,
                                                                                        setSelected:
                                                                                            j,
                                                                                        options:
                                                                                            [
                                                                                                {
                                                                                                    name: "Google",
                                                                                                    value: "https://google.com/search?q=",
                                                                                                },
                                                                                                {
                                                                                                    name: "Bing",
                                                                                                    value: "https://bing.com/search?q=",
                                                                                                },
                                                                                                {
                                                                                                    name: "DuckDuckGo",
                                                                                                    value: "https://duckduckgo.com/?q=",
                                                                                                },
                                                                                                {
                                                                                                    name: "Qwant",
                                                                                                    value: "https://qwant.com/?q=",
                                                                                                },
                                                                                            ],
                                                                                        theme: b,
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className:
                                                                "w-full flex flex-row items-center justify-between py-2",
                                                            children: [
                                                                (0, l.jsx)(
                                                                    "h3",
                                                                    {
                                                                        className:
                                                                            "text-xl",
                                                                        children:
                                                                            "News",
                                                                    }
                                                                ),
                                                                (0, l.jsx)(A, {
                                                                    enabled: m,
                                                                    runFunction:
                                                                        function () {
                                                                            x(
                                                                                !m
                                                                            ),
                                                                                f &&
                                                                                    f.setItem(
                                                                                        "newsSettings",
                                                                                        JSON.stringify(
                                                                                            !m
                                                                                        )
                                                                                    );
                                                                        },
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className:
                                                                "w-full flex flex-row items-center justify-between pt-2 pb-2",
                                                            children: [
                                                                (0, l.jsx)(
                                                                    "h3",
                                                                    {
                                                                        className:
                                                                            "text-xl",
                                                                        children:
                                                                            "Weather",
                                                                    }
                                                                ),
                                                                (0, l.jsx)(A, {
                                                                    enabled: u,
                                                                    runFunction:
                                                                        function () {
                                                                            d(
                                                                                !u
                                                                            ),
                                                                                f &&
                                                                                    f.setItem(
                                                                                        "weatherSettings",
                                                                                        JSON.stringify(
                                                                                            !u
                                                                                        )
                                                                                    );
                                                                        },
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className:
                                                                "w-full flex flex-row items-center justify-between pt-2 pb-4",
                                                            children: [
                                                                (0, l.jsx)(
                                                                    "h3",
                                                                    {
                                                                        className:
                                                                            "text-xl",
                                                                        children:
                                                                            "Theme",
                                                                    }
                                                                ),
                                                                (0, l.jsx)(Z, {
                                                                    label: "theme",
                                                                    storage: f,
                                                                    selected: b,
                                                                    setSelected:
                                                                        w,
                                                                    options: [
                                                                        {
                                                                            name: "Dark Blue",
                                                                            values: {
                                                                                bg: "#111827",
                                                                                items: "#1f2937",
                                                                                text: "#9ca3af",
                                                                            },
                                                                        },
                                                                        {
                                                                            name: "Dark Gray",
                                                                            values: {
                                                                                bg: "#18181b",
                                                                                items: "#27272a",
                                                                                text: "#a1a1aa",
                                                                            },
                                                                        },
                                                                        {
                                                                            name: "Light",
                                                                            values: {
                                                                                bg: "#e5e5e5",
                                                                                items: "#a3a3a3",
                                                                                text: "black",
                                                                            },
                                                                        },
                                                                        {
                                                                            name: "Dark",
                                                                            values: {
                                                                                bg: "#000",
                                                                                items: "#232323",
                                                                                text: "#a3a3a3",
                                                                            },
                                                                        },
                                                                    ],
                                                                    theme: b,
                                                                }),
                                                            ],
                                                        }),
                                                        (0, l.jsxs)("div", {
                                                            className:
                                                                "w-full flex flex-col items-start justify-between border-t-2 pt-4 border-gray-500",
                                                            children: [
                                                                (0, l.jsx)(
                                                                    "h3",
                                                                    {
                                                                        className:
                                                                            "text-xl mb-2",
                                                                        children:
                                                                            "Wallpaper",
                                                                    }
                                                                ),
                                                                (0, l.jsx)(z, {
                                                                    value: N,
                                                                    setValue: S,
                                                                    placeholder:
                                                                        "Wallpaper link",
                                                                    storage: f,
                                                                    theme: b,
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            }
            var R = s(9815);
            function q(e) {
                var t = e.open,
                    s = e.setOpen,
                    a = e.apps,
                    n = e.setApps,
                    o = e.user,
                    i = e.theme,
                    u = function () {
                        s(!1);
                    },
                    d = (0, c.useState)(""),
                    m = d[0],
                    x = d[1];
                return (0, l.jsx)(r.u, {
                    appear: !0,
                    show: t,
                    as: c.Fragment,
                    children: (0, l.jsxs)(L.V, {
                        as: "div",
                        className: "relative z-10",
                        onClose: u,
                        children: [
                            (0, l.jsx)(r.u.Child, {
                                as: c.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "fixed inset-0 bg-black bg-opacity-50",
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "flex min-h-full items-center justify-center p-4 text-center",
                                    children: (0, l.jsx)(r.u.Child, {
                                        as: c.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 scale-95",
                                        enterTo: "opacity-100 scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 scale-100",
                                        leaveTo: "opacity-0 scale-95",
                                        children: (0, l.jsxs)(L.V.Panel, {
                                            style: {
                                                backgroundColor:
                                                    i.values && i.values.bg,
                                                color:
                                                    i.values && i.values.text,
                                            },
                                            className:
                                                "w-full max-w-md transform overflow-hidden backdrop-blur-md rounded-3xl p-6 text-left align-middle transition-all",
                                            children: [
                                                (0, l.jsx)(L.V.Title, {
                                                    as: "h3",
                                                    className:
                                                        "text-2xl font-semibold leading-6",
                                                    children: "Add new App",
                                                }),
                                                (0, l.jsx)("section", {
                                                    className:
                                                        "flex flex-col items-center justify-center space-y-4 mt-4",
                                                    children: (0, l.jsxs)(
                                                        "form",
                                                        {
                                                            onSubmit: function (
                                                                e
                                                            ) {
                                                                e.preventDefault();
                                                                var t,
                                                                    s =
                                                                        e.target,
                                                                    l =
                                                                        new FormData(
                                                                            s
                                                                        ),
                                                                    r =
                                                                        l.get(
                                                                            "href"
                                                                        ),
                                                                    c = l.get(
                                                                        "icon"
                                                                    )
                                                                        ? null ===
                                                                              (t =
                                                                                  l.get(
                                                                                      "icon"
                                                                                  )) ||
                                                                          void 0 ===
                                                                              t
                                                                            ? void 0
                                                                            : t.toString()
                                                                        : "https://www.google.com/s2/favicons?domain=".concat(
                                                                              r,
                                                                              "&sz=256"
                                                                          );
                                                                r
                                                                    ? a.length >=
                                                                          8 &&
                                                                      "bartek@paczesny.pl" !=
                                                                          o.email
                                                                        ? x(
                                                                              "Nie można dodać więcej skr\xf3t\xf3w!"
                                                                          )
                                                                        : (n(
                                                                              (0,
                                                                              R.Z)(
                                                                                  a
                                                                              ).concat(
                                                                                  [
                                                                                      {
                                                                                          id:
                                                                                              a.length +
                                                                                              1,
                                                                                          href: r.toString(),
                                                                                          icon: c,
                                                                                      },
                                                                                  ]
                                                                              )
                                                                          ),
                                                                          x(""),
                                                                          u())
                                                                    : x(
                                                                          "Prosze podać adres strony!"
                                                                      );
                                                            },
                                                            children: [
                                                                (0, l.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "flex flex-col items-center justify-center space-y-2 mt-4",
                                                                        children:
                                                                            (0,
                                                                            l.jsx)(
                                                                                "input",
                                                                                {
                                                                                    type: "text",
                                                                                    ref: function (
                                                                                        e
                                                                                    ) {
                                                                                        return (
                                                                                            e &&
                                                                                            e.focus()
                                                                                        );
                                                                                    },
                                                                                    name: "href",
                                                                                    id: "href",
                                                                                    placeholder:
                                                                                        "URL",
                                                                                    className:
                                                                                        "w-full px-4 py-2 backdrop-blur-md rounded-md placeholder:text-[".concat(
                                                                                            i
                                                                                                .values
                                                                                                .text,
                                                                                            "]"
                                                                                        ),
                                                                                    style: {
                                                                                        backgroundColor:
                                                                                            i.values &&
                                                                                            i
                                                                                                .values
                                                                                                .items,
                                                                                    },
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                                (0, l.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "flex flex-col items-center justify-center space-y-2 mt-4",
                                                                        children:
                                                                            (0,
                                                                            l.jsx)(
                                                                                "input",
                                                                                {
                                                                                    type: "text",
                                                                                    name: "icon",
                                                                                    id: "icon",
                                                                                    placeholder:
                                                                                        "Icon (optional)",
                                                                                    className:
                                                                                        "w-full px-4 py-2 backdrop-blur-md rounded-md placeholder:text-[".concat(
                                                                                            i
                                                                                                .values
                                                                                                .text,
                                                                                            "]"
                                                                                        ),
                                                                                    style: {
                                                                                        backgroundColor:
                                                                                            i.values &&
                                                                                            i
                                                                                                .values
                                                                                                .items,
                                                                                    },
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                                (0, l.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "flex flex-col items-center justify-center space-y-2 mt-4 text-red-500",
                                                                        children:
                                                                            m,
                                                                    }
                                                                ),
                                                                (0, l.jsx)(
                                                                    "div",
                                                                    {
                                                                        className:
                                                                            "flex items-center justify-center mt-4",
                                                                        children:
                                                                            (0,
                                                                            l.jsx)(
                                                                                "button",
                                                                                {
                                                                                    type: "submit",
                                                                                    className:
                                                                                        "px-4 py-2 bg-blue-500/80 backdrop-blur-md rounded-md",
                                                                                    children:
                                                                                        "Add",
                                                                                }
                                                                            ),
                                                                    }
                                                                ),
                                                            ],
                                                        }
                                                    ),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            }
            var W = s(9008),
                B = s.n(W),
                H = s(6512),
                K = s(1452),
                Q = s(6610);
            function X(e) {
                var t = e.workspaces,
                    s = e.setOpen;
                return (0, l.jsxs)("section", {
                    className:
                        "flex flex-col items-start justify-start py-4 px-4 w-full h-full backdrop-blur-md bg-gray-800/40 rounded-3xl",
                    children: [
                        (0, l.jsx)("h1", {
                            className:
                                "px-4 py-2 text-left text-2xl font-bold text-gray-300",
                            children: "Workspaces",
                        }),
                        (0, l.jsxs)("button", {
                            onClick: function () {
                                return s(!0);
                            },
                            className:
                                "flex flex-row items-center justify-center w-full space-x-2 rounded-xl bg-gray-900/50 mx-2 py-1 font-medium text-gray-300 hover:bg-gray-800/50 transition duration-300",
                            children: [
                                (0, l.jsx)(K.Z, {
                                    className: "w-6 h-6 block text-gray-300",
                                }),
                                (0, l.jsx)("span", {
                                    className: "text-gray-300",
                                    children: "Add workspace",
                                }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: "mx-auto w-full",
                            children: Object.keys(t).map(function (e, s) {
                                return (0, l.jsx)(
                                    H.p,
                                    {
                                        children: function (s) {
                                            var a = s.open;
                                            return (0, l.jsxs)(l.Fragment, {
                                                children: [
                                                    (0, l.jsxs)(H.p.Button, {
                                                        className:
                                                            "m-2 flex w-full justify-between rounded-lg bg-gray-900/50 px-4 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-800/50 transition duration-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
                                                        children: [
                                                            (0, l.jsxs)("div", {
                                                                className:
                                                                    "flex flex-row space-x-2 items-center justify-center",
                                                                children: [
                                                                    (0, l.jsx)(
                                                                        "div",
                                                                        {
                                                                            className:
                                                                                "rounded-full flex items-center justify-center bg-gray-400 text-gray-800 w-6 h-6",
                                                                            children:
                                                                                (0,
                                                                                l.jsx)(
                                                                                    "span",
                                                                                    {
                                                                                        children:
                                                                                            e[0].toUpperCase(),
                                                                                    }
                                                                                ),
                                                                        }
                                                                    ),
                                                                    (0, l.jsx)(
                                                                        "span",
                                                                        {
                                                                            children:
                                                                                e
                                                                                    .charAt(
                                                                                        0
                                                                                    )
                                                                                    .toUpperCase() +
                                                                                e.slice(
                                                                                    1
                                                                                ),
                                                                        }
                                                                    ),
                                                                ],
                                                            }),
                                                            (0, l.jsx)(Q.Z, {
                                                                className:
                                                                    "".concat(
                                                                        a
                                                                            ? ""
                                                                            : "rotate-180 transform",
                                                                        " h-5 w-5 text-gray-300"
                                                                    ),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsx)(H.p.Panel, {
                                                        className:
                                                            "px-4 pt-3 pb-2 text-sm text-gray-200",
                                                        children: (0, l.jsx)(
                                                            "ul",
                                                            {
                                                                className:
                                                                    "space-y-1",
                                                                children: t[
                                                                    e
                                                                ].map(function (
                                                                    e,
                                                                    t
                                                                ) {
                                                                    return (0,
                                                                    l.jsxs)(
                                                                        "a",
                                                                        {
                                                                            href: e.link,
                                                                            target: "_blank",
                                                                            rel: "noreferrer",
                                                                            className:
                                                                                "flex items-center space-x-5 px-2 py-2 text-sm font-medium text-gray-300 rounded-md hover:scale-[1.01] hover:bg-gray-900/50 transition duration-300",
                                                                            children:
                                                                                [
                                                                                    (0,
                                                                                    l.jsx)(
                                                                                        "span",
                                                                                        {
                                                                                            children:
                                                                                                e.name,
                                                                                        }
                                                                                    ),
                                                                                    (0,
                                                                                    l.jsx)(
                                                                                        "span",
                                                                                        {
                                                                                            className:
                                                                                                "text-gray-400",
                                                                                            children:
                                                                                                e.link,
                                                                                        }
                                                                                    ),
                                                                                ],
                                                                        },
                                                                        t
                                                                    );
                                                                }),
                                                            }
                                                        ),
                                                    }),
                                                ],
                                            });
                                        },
                                    },
                                    s
                                );
                            }),
                        }),
                    ],
                });
            }
            function Y(e) {
                var t = e.news,
                    s = (0, c.useState)([]),
                    a = s[0],
                    n = s[1];
                return (
                    (0, c.useEffect)(
                        function () {
                            if (!0 === t && a.length < 1)
                                try {
                                    fetch(
                                        "https://newsdata.io/api/1/news?apikey=pub_13769e3292267531fdb828270f29e0f038c93&country=pl&language=pl"
                                    )
                                        .then(function (e) {
                                            return e.json();
                                        })
                                        .then(function (e) {
                                            n(e.results);
                                        });
                                } catch (e) {
                                    console.log(e);
                                }
                        },
                        [t]
                    ),
                    (0, l.jsxs)(r.u, {
                        show: t,
                        enter: "transition duration-300",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "transition duration-300",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        className:
                            "w-full h-full text-gray-200 flex flex-col items-center justify-center backdrop-blur-md bg-gray-800/40 bg-opacity-50 rounded-3xl overflow-y-scroll pt-20",
                        children: [
                            (0, l.jsx)("h1", {
                                className:
                                    "font-semibold text-3xl xl:text-4xl mb-10",
                                children: "News",
                            }),
                            (0, l.jsx)("div", {
                                className:
                                    "flex flex-wrap w-full h-full items-center justify-center gap-10",
                                children: a.map(function (e, t) {
                                    return (0,
                                    l.jsxs)("div", { className: "w-1/3 flex flex-col items-center justify-around h-[27rem] hover:scale-105 transition duration-300", children: [(0, l.jsx)("img", { src: e.image_url ? e.image_url : "/no-image.jpg", alt: e.title, className: "rounded-t-2xl w-full max-h-56 object-cover" }), (0, l.jsxs)("div", { className: "w-full flex flex-col items-center justify-around space-y-5 h-full border-2 border-b-white/40 border-x-white/40 border-t-transparent rounded-b-3xl", children: [(0, l.jsx)("h1", { className: "text-xl font-semibold text-center mt-2", children: e.title.length > 50 ? e.title.slice(0, 50) + "..." : e.title }), (0, l.jsx)("p", { className: "text-center", children: e.description && e.description.length > 90 ? e.description.slice(0, 90) + "..." : e.description }), (0, l.jsx)("a", { href: e.link, target: "_blank", rel: "noreferrer", children: (0, l.jsx)("button", { className: "px-4 py-2 text-sm font-semibold text-gray-200 bg-gray-800/40 bg-opacity-50 rounded-3xl mb-4 hover:scale-110 hover:bg-gray-800 transition duration-300", children: "Read more" }) })] })] }, t);
                                }),
                            }),
                        ],
                    })
                );
            }
            var $ = s(828);
            function ee(e) {
                var t = e.open,
                    s = e.setOpen,
                    a = e.user,
                    n = e.setUser,
                    o = e.theme,
                    i = function () {
                        localStorage.removeItem("user"),
                            localStorage.removeItem("firstName"),
                            localStorage.removeItem("lastName"),
                            n({}),
                            window.location.reload();
                    },
                    u = function (e) {
                        var t = e.target.files[0],
                            s = (0, I.iH)(
                                V,
                                "profilePictures/".concat(
                                    a.email.replace(".", "_").replace("@", "_"),
                                    ".jpg"
                                )
                            );
                        (0, I.KV)(s, t).then(function (e) {
                            console.log("");
                        }),
                            window.location.reload();
                    },
                    d = (0, $.Z)(c.useState(""), 2),
                    m = d[0],
                    x = d[1];
                return (
                    (0, c.useEffect)(
                        function () {
                            if (a.email) {
                                var e = (0, I.iH)(
                                    V,
                                    "profilePictures/".concat(
                                        a.email
                                            .replace(".", "_")
                                            .replace("@", "_"),
                                        ".jpg"
                                    )
                                );
                                (0, I.Jt)(e)
                                    .then(function (e) {
                                        var t = new XMLHttpRequest();
                                        (t.responseType = "blob"),
                                            (t.onload = function (e) {
                                                t.response;
                                            }),
                                            t.open("GET", e),
                                            t.send(),
                                            x(e);
                                    })
                                    .catch(function (e) {});
                            }
                        },
                        [a]
                    ),
                    (0, l.jsx)(r.u, {
                        appear: !0,
                        show: t,
                        as: c.Fragment,
                        children: (0, l.jsxs)(L.V, {
                            as: "div",
                            className: "relative z-10",
                            onClose: function () {
                                return s(!1);
                            },
                            children: [
                                (0, l.jsx)(r.u.Child, {
                                    as: c.Fragment,
                                    enter: "ease-out duration-300",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    leave: "ease-in duration-200",
                                    leaveFrom: "opacity-100",
                                    leaveTo: "opacity-0",
                                    children: (0, l.jsx)("div", {
                                        className:
                                            "fixed inset-0 bg-black bg-opacity-50",
                                    }),
                                }),
                                (0, l.jsx)("div", {
                                    className: "fixed inset-0 overflow-y-auto",
                                    children: (0, l.jsx)("div", {
                                        className:
                                            "flex min-h-full items-center justify-center p-4 text-center",
                                        children: (0, l.jsx)(r.u.Child, {
                                            as: c.Fragment,
                                            enter: "ease-out duration-300",
                                            enterFrom: "opacity-0 scale-95",
                                            enterTo: "opacity-100 scale-100",
                                            leave: "ease-in duration-200",
                                            leaveFrom: "opacity-100 scale-100",
                                            leaveTo: "opacity-0 scale-95",
                                            children: (0, l.jsxs)(L.V.Panel, {
                                                className:
                                                    "w-full max-w-md transform overflow-hidden backdrop-blur-md rounded-3xl p-6 text-left align-middle transition-all",
                                                style: {
                                                    backgroundColor:
                                                        o.values && o.values.bg,
                                                    color:
                                                        o.values &&
                                                        o.values.text,
                                                },
                                                children: [
                                                    (0, l.jsx)(L.V.Title, {
                                                        as: "h3",
                                                        className:
                                                            "text-2xl font-semibold leading-6",
                                                        children:
                                                            "User Details",
                                                    }),
                                                    (0, l.jsxs)("section", {
                                                        className:
                                                            "flex w-full flex-row items-center justify-center space-x-4",
                                                        children: [
                                                            m
                                                                ? (0, l.jsxs)(
                                                                      l.Fragment,
                                                                      {
                                                                          children:
                                                                              [
                                                                                  (0,
                                                                                  l.jsx)(
                                                                                      "label",
                                                                                      {
                                                                                          htmlFor:
                                                                                              "myImg",
                                                                                          children:
                                                                                              (0,
                                                                                              l.jsx)(
                                                                                                  "img",
                                                                                                  {
                                                                                                      src: m,
                                                                                                      alt: "user profile picture",
                                                                                                      className:
                                                                                                          "w-32 h-32 rounded-[2rem] cursor-pointer hover:scale-95 hover:opacity-40 transition duration-300",
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                                  (0,
                                                                                  l.jsx)(
                                                                                      "input",
                                                                                      {
                                                                                          onChange:
                                                                                              function (
                                                                                                  e
                                                                                              ) {
                                                                                                  return u(
                                                                                                      e
                                                                                                  );
                                                                                              },
                                                                                          type: "file",
                                                                                          name: "myImg",
                                                                                          id: "myImg",
                                                                                          className:
                                                                                              "hidden",
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      }
                                                                  )
                                                                : (0, l.jsxs)(
                                                                      l.Fragment,
                                                                      {
                                                                          children:
                                                                              [
                                                                                  (0,
                                                                                  l.jsx)(
                                                                                      "label",
                                                                                      {
                                                                                          htmlFor:
                                                                                              "myIcon",
                                                                                          children:
                                                                                              (0,
                                                                                              l.jsx)(
                                                                                                  F.Z,
                                                                                                  {
                                                                                                      className:
                                                                                                          "w-32 h-32 rounded-full cursor-pointer hover:scale-95 hover:opacity-40 transition duration-300",
                                                                                                  }
                                                                                              ),
                                                                                      }
                                                                                  ),
                                                                                  (0,
                                                                                  l.jsx)(
                                                                                      "input",
                                                                                      {
                                                                                          onChange:
                                                                                              function (
                                                                                                  e
                                                                                              ) {
                                                                                                  return u(
                                                                                                      e
                                                                                                  );
                                                                                              },
                                                                                          type: "file",
                                                                                          name: "myIcon",
                                                                                          id: "myIcon",
                                                                                          className:
                                                                                              "hidden",
                                                                                      }
                                                                                  ),
                                                                              ],
                                                                      }
                                                                  ),
                                                            (0, l.jsxs)(
                                                                "section",
                                                                {
                                                                    className:
                                                                        "flex flex-1 flex-col items-center justify-center my-4 space-y-4",
                                                                    children: [
                                                                        (0,
                                                                        l.jsxs)(
                                                                            "div",
                                                                            {
                                                                                className:
                                                                                    "flex flex-row items-center justify-center w-full space-x-3",
                                                                                children:
                                                                                    [
                                                                                        (0,
                                                                                        l.jsx)(
                                                                                            "p",
                                                                                            {
                                                                                                className:
                                                                                                    "w-1/2 py-1 px-3 rounded-xl bg-gray-600/40 text-start",
                                                                                                children:
                                                                                                    a.name,
                                                                                            }
                                                                                        ),
                                                                                        (0,
                                                                                        l.jsx)(
                                                                                            "p",
                                                                                            {
                                                                                                className:
                                                                                                    "w-1/2 py-1 px-3 rounded-xl bg-gray-600/40 text-start",
                                                                                                children:
                                                                                                    a.surname,
                                                                                            }
                                                                                        ),
                                                                                    ],
                                                                            }
                                                                        ),
                                                                        (0,
                                                                        l.jsx)(
                                                                            "p",
                                                                            {
                                                                                className:
                                                                                    "w-full py-1 px-3 rounded-xl bg-gray-600/40 text-start",
                                                                                children:
                                                                                    a.email,
                                                                            }
                                                                        ),
                                                                        (0,
                                                                        l.jsx)(
                                                                            "button",
                                                                            {
                                                                                onClick:
                                                                                    i,
                                                                                className:
                                                                                    "px-3 py-1 mt-4 w-1/3 bg-gray-600/40 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300",
                                                                                children:
                                                                                    "Logout",
                                                                            }
                                                                        ),
                                                                    ],
                                                                }
                                                            ),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            }
            function et(e) {
                var t,
                    s = e.open,
                    a = e.setOpen,
                    n = e.setUser,
                    o = e.setRegisterOpen,
                    i = e.theme,
                    u = (0, $.Z)(c.useState(""), 2),
                    d = u[0],
                    h = u[1],
                    p = (0, $.Z)(c.useState(""), 2),
                    f = p[0],
                    g = p[1],
                    v = (0, $.Z)(c.useState(""), 2),
                    y = v[0],
                    j = v[1],
                    b =
                        ((t = (0, m.Z)(function () {
                            var e, t, s;
                            return (0, x.__generator)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return (
                                            e.trys.push([0, 2, , 3]),
                                            [
                                                4,
                                                (0, O.PL)(
                                                    (0, O.hJ)(D, "users")
                                                ),
                                            ]
                                        );
                                    case 1:
                                        if (
                                            !(t = e
                                                .sent()
                                                .docs.find(function (e) {
                                                    return e.data().email === d;
                                                }))
                                        )
                                            return (
                                                j("User does not exist"), [2]
                                            );
                                        if (t.data().password !== f)
                                            return j("Incorrect password"), [2];
                                        return (
                                            n(t.data()),
                                            a(!1),
                                            window.location.reload(),
                                            [3, 3]
                                        );
                                    case 2:
                                        return j(e.sent().message), [3, 3];
                                    case 3:
                                        return [2];
                                }
                            });
                        })),
                        function () {
                            return t.apply(this, arguments);
                        });
                return (0, l.jsx)(r.u, {
                    appear: !0,
                    show: s,
                    as: c.Fragment,
                    children: (0, l.jsxs)(L.V, {
                        as: "div",
                        className: "relative z-10",
                        onClose: function () {
                            return a(!1);
                        },
                        children: [
                            (0, l.jsx)(r.u.Child, {
                                as: c.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "fixed inset-0 bg-black bg-opacity-50",
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "flex min-h-full items-center justify-center p-4 text-center",
                                    children: (0, l.jsx)(r.u.Child, {
                                        as: c.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 scale-95",
                                        enterTo: "opacity-100 scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 scale-100",
                                        leaveTo: "opacity-0 scale-95",
                                        children: (0, l.jsxs)(L.V.Panel, {
                                            style: {
                                                backgroundColor:
                                                    i.values && i.values.bg,
                                                color:
                                                    i.values && i.values.text,
                                            },
                                            className:
                                                "w-full max-w-md transform overflow-hidden backdrop-blur-md rounded-3xl p-6 text-left align-middle transition-all",
                                            children: [
                                                (0, l.jsx)(L.V.Title, {
                                                    as: "h3",
                                                    className:
                                                        "text-2xl font-semibold leading-6",
                                                    children: "User Login",
                                                }),
                                                (0, l.jsxs)("section", {
                                                    className:
                                                        "flex flex-col items-center justify-center my-4",
                                                    children: [
                                                        (0, l.jsxs)("section", {
                                                            className:
                                                                "flex flex-col items-center justify-center w-full space-y-3 my-4",
                                                            children: [
                                                                (0, l.jsx)(z, {
                                                                    value: d,
                                                                    setValue: h,
                                                                    placeholder:
                                                                        "Email",
                                                                    theme: i,
                                                                }),
                                                                (0, l.jsx)(z, {
                                                                    value: f,
                                                                    setValue: g,
                                                                    placeholder:
                                                                        "Password",
                                                                    theme: i,
                                                                }),
                                                                (0, l.jsxs)(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "text-gray-500",
                                                                        children:
                                                                            [
                                                                                "Don't have an account? ",
                                                                                (0,
                                                                                l.jsx)(
                                                                                    "button",
                                                                                    {
                                                                                        className:
                                                                                            "text-blue-500",
                                                                                        onClick:
                                                                                            function () {
                                                                                                o(
                                                                                                    !0
                                                                                                ),
                                                                                                    a(
                                                                                                        !1
                                                                                                    );
                                                                                            },
                                                                                        children:
                                                                                            "Register",
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                                y &&
                                                                    (0, l.jsx)(
                                                                        "p",
                                                                        {
                                                                            className:
                                                                                "text-red-500",
                                                                            children:
                                                                                y,
                                                                        }
                                                                    ),
                                                            ],
                                                        }),
                                                        (0, l.jsx)("button", {
                                                            onClick: b,
                                                            style: {
                                                                backgroundColor:
                                                                    i.values &&
                                                                    i.values
                                                                        .items,
                                                                color:
                                                                    i.values &&
                                                                    i.values
                                                                        .text,
                                                            },
                                                            className:
                                                                "px-3 py-1 mt-4 w-1/3 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300",
                                                            children: "Login",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            }
            function es(e) {
                var t,
                    s = e.open,
                    a = e.setOpen,
                    n = e.setUser,
                    o = e.setLoginOpen,
                    i = e.theme,
                    u = (0, $.Z)(c.useState(""), 2),
                    d = u[0],
                    h = u[1],
                    p = (0, $.Z)(c.useState(""), 2),
                    f = p[0],
                    g = p[1],
                    v = (0, $.Z)(c.useState(""), 2),
                    y = v[0],
                    j = v[1],
                    b = (0, $.Z)(c.useState(""), 2),
                    w = b[0],
                    N = b[1],
                    S = (0, $.Z)(c.useState(""), 2),
                    k = S[0],
                    _ = S[1],
                    F =
                        ((t = (0, m.Z)(function () {
                            var e, t, s;
                            return (0, x.__generator)(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return (
                                            e.trys.push([0, 3, , 4]),
                                            [
                                                4,
                                                (0, O.PL)(
                                                    (0, O.hJ)(D, "users")
                                                ),
                                            ]
                                        );
                                    case 1:
                                        if (
                                            e.sent().docs.find(function (e) {
                                                return e.data().email === y;
                                            })
                                        )
                                            return (
                                                _("User already exists"), [2]
                                            );
                                        return [
                                            4,
                                            (0, O.pl)(
                                                (0, O.JU)(D, "users", y),
                                                {
                                                    name: d,
                                                    surname: f,
                                                    email: y,
                                                    password: w,
                                                }
                                            )
                                                .then(function () {
                                                    n({
                                                        name: d,
                                                        surname: f,
                                                        email: y,
                                                        password: w,
                                                    }),
                                                        a(!1);
                                                })
                                                .catch(function (e) {
                                                    _(e);
                                                }),
                                        ];
                                    case 2:
                                        return e.sent(), [3, 4];
                                    case 3:
                                        return _(e.sent().message), [3, 4];
                                    case 4:
                                        return [2];
                                }
                            });
                        })),
                        function () {
                            return t.apply(this, arguments);
                        });
                return (0, l.jsx)(r.u, {
                    appear: !0,
                    show: s,
                    as: c.Fragment,
                    children: (0, l.jsxs)(L.V, {
                        as: "div",
                        className: "relative z-10",
                        onClose: function () {
                            return a(!1);
                        },
                        children: [
                            (0, l.jsx)(r.u.Child, {
                                as: c.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "fixed inset-0 bg-black bg-opacity-50",
                                }),
                            }),
                            (0, l.jsx)("div", {
                                className: "fixed inset-0 overflow-y-auto",
                                children: (0, l.jsx)("div", {
                                    className:
                                        "flex min-h-full items-center justify-center p-4 text-center",
                                    children: (0, l.jsx)(r.u.Child, {
                                        as: c.Fragment,
                                        enter: "ease-out duration-300",
                                        enterFrom: "opacity-0 scale-95",
                                        enterTo: "opacity-100 scale-100",
                                        leave: "ease-in duration-200",
                                        leaveFrom: "opacity-100 scale-100",
                                        leaveTo: "opacity-0 scale-95",
                                        children: (0, l.jsxs)(L.V.Panel, {
                                            style: {
                                                backgroundColor:
                                                    i.values && i.values.bg,
                                                color:
                                                    i.values && i.values.text,
                                            },
                                            className:
                                                "w-full max-w-md transform overflow-hidden backdrop-blur-md rounded-3xl p-6 text-left align-middle transition-all",
                                            children: [
                                                (0, l.jsx)(L.V.Title, {
                                                    as: "h3",
                                                    className:
                                                        "text-2xl font-semibold leading-6",
                                                    children: "User Login",
                                                }),
                                                (0, l.jsxs)("section", {
                                                    className:
                                                        "flex flex-col items-center justify-center my-4",
                                                    children: [
                                                        (0, l.jsxs)("section", {
                                                            className:
                                                                "flex flex-col items-center justify-center w-full space-y-3 my-4",
                                                            children: [
                                                                (0, l.jsxs)(
                                                                    "section",
                                                                    {
                                                                        className:
                                                                            "flex flex-row items-center justify-center w-full space-x-3",
                                                                        children:
                                                                            [
                                                                                (0,
                                                                                l.jsx)(
                                                                                    z,
                                                                                    {
                                                                                        placeholder:
                                                                                            "Name",
                                                                                        value: d,
                                                                                        setValue:
                                                                                            h,
                                                                                        theme: i,
                                                                                    }
                                                                                ),
                                                                                (0,
                                                                                l.jsx)(
                                                                                    z,
                                                                                    {
                                                                                        placeholder:
                                                                                            "Surname",
                                                                                        value: f,
                                                                                        setValue:
                                                                                            g,
                                                                                        theme: i,
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                                (0, l.jsx)(z, {
                                                                    value: y,
                                                                    setValue: j,
                                                                    placeholder:
                                                                        "Email",
                                                                    theme: i,
                                                                }),
                                                                (0, l.jsx)(z, {
                                                                    value: w,
                                                                    setValue: N,
                                                                    placeholder:
                                                                        "Password",
                                                                    theme: i,
                                                                }),
                                                                (0, l.jsxs)(
                                                                    "span",
                                                                    {
                                                                        className:
                                                                            "text-gray-500",
                                                                        children:
                                                                            [
                                                                                "Already have an account? ",
                                                                                (0,
                                                                                l.jsx)(
                                                                                    "button",
                                                                                    {
                                                                                        className:
                                                                                            "text-blue-500",
                                                                                        onClick:
                                                                                            function () {
                                                                                                o(
                                                                                                    !0
                                                                                                ),
                                                                                                    a(
                                                                                                        !1
                                                                                                    );
                                                                                            },
                                                                                        children:
                                                                                            "Login",
                                                                                    }
                                                                                ),
                                                                            ],
                                                                    }
                                                                ),
                                                                k &&
                                                                    (0, l.jsx)(
                                                                        "p",
                                                                        {
                                                                            className:
                                                                                "text-red-500",
                                                                            children:
                                                                                k,
                                                                        }
                                                                    ),
                                                            ],
                                                        }),
                                                        (0, l.jsx)("button", {
                                                            onClick: F,
                                                            style: {
                                                                backgroundColor:
                                                                    i.values &&
                                                                    i.values
                                                                        .items,
                                                                color:
                                                                    i.values &&
                                                                    i.values
                                                                        .text,
                                                            },
                                                            className:
                                                                "px-3 py-1 mt-4 w-1/3 rounded-xl hover:scale-110 hover:shadow-[0_3px_10px_0] hover:shadow-blue-600 hover:bg-blue-600 transition duration-300",
                                                            children:
                                                                "Register",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            }
            function ea() {
                var e = (0, c.useState)(),
                    t = e[0],
                    s = e[1],
                    r = (0, c.useState)(),
                    i = r[0],
                    u = r[1],
                    d = (0, c.useState)(),
                    m = d[0],
                    x = d[1],
                    h = (0, c.useState)(),
                    p = h[0],
                    f = h[1],
                    g = (0, c.useState)(),
                    v = g[0],
                    y = g[1],
                    w = (0, c.useState)(),
                    N = w[0],
                    S = w[1],
                    k = (0, c.useState)({}),
                    _ = k[0],
                    F = k[1],
                    C = (0, c.useState)(!1),
                    T = C[0],
                    I = C[1],
                    E = (0, c.useState)(!1),
                    V = E[0],
                    L = E[1],
                    z = (0, c.useState)(!1),
                    M = z[0],
                    U = z[1],
                    Z = (0, c.useState)([
                        {
                            id: 1,
                            href: "https://google.com",
                            icon: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png",
                        },
                        {
                            id: 2,
                            href: "https://messenger.com",
                            icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png",
                        },
                        {
                            id: 3,
                            href: "https://facebook.com",
                            icon: "https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png",
                        },
                        {
                            id: 4,
                            href: "https://instagram.com",
                            icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
                        },
                        {
                            id: 5,
                            href: "https://discord.com",
                            icon: "https://www.tellmebest.com/wp-content/uploads/2022/03/discord-logo-4-1.png",
                        },
                    ]),
                    P = Z[0],
                    A = Z[1],
                    R = (0, c.useState)({ name: "Medium", value: 3.5 }),
                    W = R[0],
                    H = R[1],
                    K = (0, c.useState)({
                        name: "Google",
                        value: "https://google.com/search?q=",
                    }),
                    Q = K[0],
                    $ = K[1],
                    ea = (0, c.useState)({
                        name: "Dark Blue",
                        values: {
                            bg: "#111827",
                            items: "#1f2937",
                            text: "#9ca3af",
                        },
                    }),
                    en = ea[0],
                    el = ea[1],
                    er = (0, c.useState)(""),
                    ec = er[0],
                    eo = er[1],
                    ei = (0, c.useState)(),
                    eu = ei[0],
                    ed = ei[1],
                    em = (0, c.useState)(!1),
                    ex = (em[0], em[1]);
                (0, c.useEffect)(function () {
                    var e = localStorage.getItem("user") || "{}",
                        t = JSON.parse(e);
                    if (
                        (t.email &&
                            (console.log("user found"),
                            (0, O.QT)((0, O.JU)(D, "users", t.email)).then(
                                function (e) {
                                    if (e.exists()) {
                                        F(e.data());
                                        var t = e.data().settings,
                                            a = t.weather,
                                            n = t.clock,
                                            l = t.search,
                                            r = t.news,
                                            c = t.apps,
                                            o = t.dockSize,
                                            i = t.searchEngine,
                                            d = t.wallpaper,
                                            m = t.workspaces,
                                            h = t.greeting,
                                            p = t.theme;
                                        a && x(a),
                                            n && s(n),
                                            l && u(l),
                                            r && f(r),
                                            h && y(h),
                                            c && A(c),
                                            i
                                                ? $(i)
                                                : $({
                                                      name: "Google",
                                                      value: "https://google.com/search?q=",
                                                  }),
                                            p
                                                ? el(p)
                                                : el({
                                                      name: "Dark Blue",
                                                      values: {
                                                          bg: "#111827",
                                                          items: "#1f2937",
                                                          text: "#9ca3af",
                                                      },
                                                  }),
                                            o
                                                ? H(o)
                                                : H({
                                                      name: "Medium",
                                                      value: 3.5,
                                                  }),
                                            d
                                                ? eo(d)
                                                : eo(
                                                      "https://wallpaperaccess.com/full/2180654.jpg"
                                                  ),
                                            m && ed(m);
                                    } else console.log("No such document!");
                                }
                            )),
                        !JSON.parse(e).settings)
                    ) {
                        console.log("no user settings");
                        var a = localStorage.getItem("weatherSettings"),
                            n = localStorage.getItem("clockSettings"),
                            l = localStorage.getItem("searchSettings"),
                            r = localStorage.getItem("newsSettings"),
                            c = localStorage.getItem("appSettings"),
                            o = localStorage.getItem("dockSize"),
                            i = localStorage.getItem("searchEngine"),
                            d = localStorage.getItem("wallpaper"),
                            m = localStorage.getItem("workspaces"),
                            h = localStorage.getItem("greeting");
                        a && x(JSON.parse(a)),
                            n && s(JSON.parse(n)),
                            l && u(JSON.parse(l)),
                            r && f(JSON.parse(r)),
                            h && y(JSON.parse(h)),
                            c && A(JSON.parse(c)),
                            i
                                ? $(JSON.parse(i))
                                : (localStorage.setItem(
                                      "searchEngine",
                                      JSON.stringify({
                                          name: "Google",
                                          value: "https://google.com/search?q=",
                                      })
                                  ),
                                  $({
                                      name: "Google",
                                      value: "https://google.com/search?q=",
                                  })),
                            o
                                ? H(JSON.parse(o))
                                : (localStorage.setItem(
                                      "dockSize",
                                      JSON.stringify({
                                          name: "Medium",
                                          value: 3.5,
                                      })
                                  ),
                                  H({ name: "Medium", value: 3.5 })),
                            d
                                ? eo(d)
                                : (localStorage.setItem(
                                      "wallpaper",
                                      "https://wallpaperaccess.com/full/2180654.jpg"
                                  ),
                                  eo(
                                      "https://wallpaperaccess.com/full/2180654.jpg"
                                  )),
                            m && ed(JSON.parse(m));
                    }
                    S(localStorage);
                }, []),
                    (0, c.useEffect)(
                        function () {
                            _.email &&
                                localStorage.setItem("user", JSON.stringify(_));
                        },
                        [_]
                    ),
                    (0, c.useEffect)(
                        function () {
                            var e = JSON.parse(
                                localStorage.getItem("user") || "{}"
                            );
                            if (_.email) {
                                var s = (0, n.Z)((0, a.Z)({}, e), {
                                    settings: {
                                        weather: m || !1,
                                        clock: t || !1,
                                        search: i || !1,
                                        news: p || !1,
                                        greeting: v || !1,
                                        apps: P,
                                        dockSize: W || !1,
                                        searchEngine: Q,
                                        wallpaper: ec,
                                        theme: en,
                                    },
                                });
                                F(s),
                                    null == N ||
                                        N.setItem("user", JSON.stringify(s)),
                                    (0, O.pl)(
                                        (0, O.JU)(D, "users", _.email),
                                        s
                                    );
                            }
                        },
                        [m, t, i, p, P, W, Q, ec, v, en, _.email]
                    );
                var eh = (0, c.useState)(!1),
                    ep = eh[0],
                    ef = eh[1],
                    eg = (0, c.useState)(!1),
                    ev = eg[0],
                    ey = eg[1];
                return (0, l.jsxs)("section", {
                    className:
                        "flex flex-row w-screen max-h-screen h-screen overflow-x-hidden overflow-y-hidden",
                    children: [
                        (0, l.jsx)(B(), {
                            children: (0, l.jsxs)("title", {
                                children: [
                                    "Home",
                                    " ⌛",
                                    new Date().toLocaleTimeString("pl-PL", {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    }),
                                ],
                            }),
                        }),
                        (0, l.jsx)(J, {
                            apps: P,
                            storage: N,
                            setApps: A,
                            setOpen: ef,
                            setNewAppOpen: ey,
                            selected: W,
                            setUserModalOpen: I,
                            setLoginModalOpen: L,
                            theme: en,
                            user: _,
                        }),
                        (0, l.jsxs)("section", {
                            className:
                                "flex flex-row items-start justify-center bg-cover w-full h-full",
                            style: { backgroundImage: "url(".concat(ec, ")") },
                            children: [
                                (0, l.jsx)(G, {
                                    open: ep,
                                    setOpen: ef,
                                    clock: t || !1,
                                    setClock: s,
                                    search: i || !1,
                                    setSearch: u,
                                    weather: m || !1,
                                    setWeather: x,
                                    news: p || !1,
                                    setNews: f,
                                    greeting: v || !1,
                                    setGreeting: y,
                                    storage: N,
                                    selected: W,
                                    setSelected: H,
                                    searchEngine: Q,
                                    setSearchEngine: $,
                                    theme: en,
                                    setTheme: el,
                                    bgUrl: ec,
                                    setBgUrl: eo,
                                }),
                                (0, l.jsx)(q, {
                                    open: ev,
                                    setOpen: ey,
                                    apps: P,
                                    setApps: A,
                                    user: _,
                                    theme: en,
                                }),
                                (0, l.jsx)(ee, {
                                    open: T,
                                    setOpen: I,
                                    user: _,
                                    setUser: F,
                                    theme: en,
                                }),
                                (0, l.jsx)(et, {
                                    open: V,
                                    setOpen: L,
                                    setUser: F,
                                    setRegisterOpen: U,
                                    theme: en,
                                }),
                                (0, l.jsx)(es, {
                                    open: M,
                                    setOpen: U,
                                    setUser: F,
                                    setLoginOpen: L,
                                    theme: en,
                                }),
                                (0, l.jsxs)("section", {
                                    className:
                                        "flex flex-col items-center justify-start w-1/4 px-10 py-20 space-y-8 h-full overflow-y-scroll",
                                    children: [
                                        (0, l.jsx)(b, {
                                            clock: t || !1,
                                            greeting: v || !1,
                                        }),
                                        (0, l.jsx)(j, { weather: m || !1 }),
                                    ],
                                }),
                                (0, l.jsxs)("section", {
                                    className:
                                        "flex flex-col items-center justify-start px-10 py-20 w-3/4 h-full",
                                    children: [
                                        (0, l.jsx)(o, {
                                            placeholder: "Search the web",
                                            searchState: i || !1,
                                            searchEngine: Q,
                                        }),
                                        eu &&
                                            (0, l.jsx)(X, {
                                                setOpen: ex,
                                                workspaces: eu,
                                            }),
                                        (0, l.jsx)(Y, { news: p || !1 }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            }
        },
    },
    function (e) {
        e.O(0, [16, 444, 774, 888, 179], function () {
            return e((e.s = 8312));
        }),
            (_N_E = e.O());
    },
]);
