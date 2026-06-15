/* Vendored from @alexgub84/whatsapp-chat-mock@1.1.0 — inlined to avoid a private
   GitHub Packages dependency (tokenless install/deploy). Re-vendor from the
   published dist/ if the package is updated. */
import { jsxs as n, jsx as e, Fragment as C } from "react/jsx-runtime";
import { forwardRef as P, createElement as S, useState as u, useRef as M, useMemo as U, useCallback as A, useEffect as _ } from "react";
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), T = (...t) => t.filter((i, s, a) => !!i && i.trim() !== "" && a.indexOf(i) === s).join(" ").trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var K = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X = P(
  ({
    color: t = "currentColor",
    size: i = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: a,
    className: r = "",
    children: o,
    iconNode: d,
    ...h
  }, x) => S(
    "svg",
    {
      ref: x,
      ...K,
      width: i,
      height: i,
      stroke: t,
      strokeWidth: a ? Number(s) * 24 / Number(i) : s,
      className: T("lucide", r),
      ...h
    },
    [
      ...d.map(([f, y]) => S(f, y)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b = (t, i) => {
  const s = P(
    ({ className: a, ...r }, o) => S(X, {
      ref: o,
      iconNode: i,
      className: T(`lucide-${q(t)}`, a),
      ...r
    })
  );
  return s.displayName = `${t}`, s;
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J = b("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg"
    }
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q = b("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y = b("Mic", [
  ["path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z", key: "131961" }],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = b("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5"
    }
  ]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const te = b("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]), B = (t) => new Promise((i) => setTimeout(i, t));
function ie(t, i) {
  return i !== void 0 ? i : Math.min(3e3, Math.max(800, t.length * 30));
}
const ne = `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200' opacity='0.12'>
  <!-- Heart -->
  <text x='10' y='30' font-size='18'>♥</text>
  <text x='80' y='80' font-size='14'>♥</text>
  <text x='150' y='50' font-size='16'>♥</text>
  <!-- Star -->
  <text x='50' y='60' font-size='16'>★</text>
  <text x='120' y='30' font-size='14'>★</text>
  <text x='170' y='110' font-size='18'>★</text>
  <!-- Smiley -->
  <text x='30' y='110' font-size='18'>☺</text>
  <text x='140' y='160' font-size='16'>☺</text>
  <!-- Music note -->
  <text x='100' y='130' font-size='16'>♪</text>
  <text x='60' y='175' font-size='14'>♫</text>
  <!-- Flower -->
  <text x='170' y='75' font-size='14'>✿</text>
  <text x='20' y='165' font-size='18'>❀</text>
  <!-- Leaf -->
  <text x='110' y='170' font-size='16'>🌿</text>
</svg>`, re = `url("data:image/svg+xml,${encodeURIComponent(ne)}")`;
function ae({ status: t }) {
  if (!t) return null;
  const a = t === "read" ? "#34B7F1" : "#8696A0";
  return t === "sent" ? /* @__PURE__ */ e(
    "svg",
    {
      width: "14",
      height: "10",
      viewBox: "0 0 14 10",
      fill: "none",
      className: "inline-block ml-1 mb-[1px]",
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M1 5L4.5 8.5L12 1",
          stroke: a,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  ) : /* @__PURE__ */ n(
    "svg",
    {
      width: "18",
      height: "10",
      viewBox: "0 0 18 10",
      fill: "none",
      className: "inline-block ml-1 mb-[1px]",
      children: [
        /* @__PURE__ */ e(
          "path",
          {
            d: "M1 5L4.5 8.5L12 1",
            stroke: a,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M5 5L8.5 8.5L16 1",
            stroke: a,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
}
function le({ time: t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      className: "flex items-center justify-between px-5 py-1 bg-white",
      style: { height: 44 },
      dir: "ltr",
      children: [
        /* @__PURE__ */ e("span", { className: "text-[15px] font-semibold tracking-tight text-black", children: t }),
        /* @__PURE__ */ n("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ n("svg", { width: "18", height: "12", viewBox: "0 0 18 12", fill: "black", children: [
            /* @__PURE__ */ e("rect", { x: "0", y: "8", width: "3", height: "4", rx: "0.5" }),
            /* @__PURE__ */ e("rect", { x: "4.5", y: "5.5", width: "3", height: "6.5", rx: "0.5" }),
            /* @__PURE__ */ e("rect", { x: "9", y: "3", width: "3", height: "9", rx: "0.5" }),
            /* @__PURE__ */ e("rect", { x: "13.5", y: "0", width: "3", height: "12", rx: "0.5" })
          ] }),
          /* @__PURE__ */ e("span", { className: "text-[13px] font-semibold text-black", children: "5G" }),
          /* @__PURE__ */ n("svg", { width: "27", height: "13", viewBox: "0 0 27 13", fill: "none", children: [
            /* @__PURE__ */ e(
              "rect",
              {
                x: "0.5",
                y: "0.5",
                width: "22",
                height: "12",
                rx: "3.5",
                stroke: "black",
                strokeOpacity: "0.35"
              }
            ),
            /* @__PURE__ */ e("rect", { x: "1.5", y: "1.5", width: "19", height: "10", rx: "2.5", fill: "black" }),
            /* @__PURE__ */ e(
              "path",
              {
                d: "M23.5 4.5V8.5C24.3284 8.22 25 7.2 25 6.5C25 5.8 24.3284 4.78 23.5 4.5Z",
                fill: "black",
                fillOpacity: "0.4"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const W = Math.round(22 * 1.1), se = "gap-[13px]";
function oe({
  size: t = W
}) {
  return /* @__PURE__ */ n(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: t,
      height: t,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#000000",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ e("path", { d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }),
        /* @__PURE__ */ e("rect", { x: "2", y: "6", width: "14", height: "12", rx: "2", fill: "none" })
      ]
    }
  );
}
function ce({
  avatarUrl: t,
  name: i,
  subtitle: s,
  unreadCount: a,
  rtl: r
}) {
  const o = /* @__PURE__ */ n("div", { className: "flex items-center gap-0.5 min-w-10 justify-center shrink-0", children: [
    a != null && a > 0 && /* @__PURE__ */ e("span", { className: "text-black text-[17px] font-semibold tabular-nums shrink-0 leading-none flex items-center", children: a }),
    /* @__PURE__ */ e(
      Q,
      {
        size: 28,
        className: "text-black",
        style: { transform: r ? "scaleX(-1)" : void 0 },
        "aria-hidden": !0
      }
    )
  ] }), d = /* @__PURE__ */ e("div", { className: "w-10 h-10 rounded-full overflow-hidden bg-[#DFE5E7] shrink-0 flex items-center justify-center", children: t ? /* @__PURE__ */ e(
    "img",
    {
      src: t,
      alt: i,
      className: "w-full h-full object-cover"
    }
  ) : /* @__PURE__ */ n("svg", { viewBox: "0 0 40 40", width: "40", height: "40", fill: "none", children: [
    /* @__PURE__ */ e("circle", { cx: "20", cy: "16", r: "8", fill: "#A0ADB5" }),
    /* @__PURE__ */ e("ellipse", { cx: "20", cy: "36", rx: "14", ry: "9", fill: "#A0ADB5" })
  ] }) }), h = /* @__PURE__ */ n(
    "div",
    {
      className: `flex-1 min-w-0 ${r ? "text-end" : "text-start"}`,
      dir: r ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "data-testid": "contact-name",
            className: "text-[17px] font-semibold text-black leading-tight truncate",
            children: i
          }
        ),
        /* @__PURE__ */ e("div", { className: "text-[13px] text-[#667781] leading-tight truncate", children: s })
      ]
    }
  ), x = /* @__PURE__ */ n(
    "div",
    {
      dir: "ltr",
      className: `flex flex-row items-center shrink-0 ${se}`,
      children: [
        /* @__PURE__ */ e(ee, { size: W, color: "#000000" }),
        /* @__PURE__ */ e(oe, {})
      ]
    }
  );
  return /* @__PURE__ */ n(
    "header",
    {
      className: "flex flex-row items-center justify-between gap-2 px-2 py-2 bg-[#F6F6F6] border-b border-[#E5E5E5]",
      style: { minHeight: 56 },
      dir: "ltr",
      children: [
        /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center", children: o }),
        /* @__PURE__ */ n("div", { className: "flex flex-1 min-w-0 items-center gap-2", children: [
          d,
          h
        ] }),
        /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center", children: x })
      ]
    }
  );
}
function de({ rtl: t }) {
  return /* @__PURE__ */ n(
    "div",
    {
      "data-testid": "typing-indicator",
      className: `flex ${t ? "justify-end" : "justify-start"} px-2 py-1`,
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            className: "bg-white rounded-2xl rounded-bl-sm px-3 py-2 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] flex items-center gap-1",
            style: { minWidth: 52 },
            children: [0, 1, 2].map((i) => /* @__PURE__ */ e(
              "span",
              {
                className: "block w-2 h-2 rounded-full bg-[#8696A0]",
                style: {
                  animation: `typingDot 1.2s ease-in-out ${i * 0.4}s infinite`
                }
              },
              i
            ))
          }
        ),
        /* @__PURE__ */ e("style", { children: `
        @keyframes typingDot {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1); }
        }
      ` })
      ]
    }
  );
}
function he({
  message: t,
  rtl: i,
  visible: s,
  showReaction: a
}) {
  const r = t.sender === "outgoing", o = i ? !r : r;
  return /* @__PURE__ */ e(
    "div",
    {
      "data-testid": "message-bubble",
      className: `flex ${o ? "justify-end" : "justify-start"} px-2 py-2 relative`,
      style: {
        opacity: s ? 1 : 0,
        transform: s ? "scale(1)" : "scale(0.92)",
        transition: "opacity 0.2s ease, transform 0.2s ease"
      },
      children: /* @__PURE__ */ n("div", { className: "relative max-w-[75%]", children: [
        /* @__PURE__ */ n(
          "div",
          {
            className: "rounded-xl px-[10px] pt-[6px] pb-[4px]",
            style: {
              backgroundColor: r ? "#DCF8C6" : "#FFFFFF",
              boxShadow: "0 1px 0.5px rgba(0,0,0,0.13)",
              borderRadius: 12,
              ...o ? { borderBottomRightRadius: 4 } : { borderBottomLeftRadius: 4 }
            },
            children: [
              t.replyTo && /* @__PURE__ */ n(
                "div",
                {
                  className: "flex mb-1 rounded-lg overflow-hidden",
                  style: { backgroundColor: r ? "#bef5b0" : "#F0F0F0" },
                  children: [
                    /* @__PURE__ */ e(
                      "div",
                      {
                        className: "w-1 flex-shrink-0",
                        style: {
                          backgroundColor: t.replyTo.senderColor ?? (r ? "#E74C3C" : "#1F7AEC")
                        }
                      }
                    ),
                    /* @__PURE__ */ n("div", { className: "px-2 py-1 min-w-0", children: [
                      /* @__PURE__ */ e(
                        "div",
                        {
                          className: "text-[13px] font-semibold truncate",
                          style: {
                            color: t.replyTo.senderColor ?? (r ? "#E74C3C" : "#1F7AEC")
                          },
                          children: t.replyTo.senderName
                        }
                      ),
                      /* @__PURE__ */ e("div", { className: "text-[13px] text-[#667781] truncate", children: t.replyTo.text })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ n(
                "div",
                {
                  className: "text-[16px] leading-[1.3] text-black break-words",
                  dir: i ? "rtl" : "ltr",
                  children: [
                    t.text,
                    /* @__PURE__ */ n("span", { className: "inline-flex items-center gap-[2px] align-bottom whitespace-nowrap text-[11px] text-[#667781] ps-1", children: [
                      t.timestamp,
                      r && /* @__PURE__ */ e(ae, { status: t.status })
                    ] })
                  ]
                }
              )
            ]
          }
        ),
        t.reactions && t.reactions.length > 0 && a && /* @__PURE__ */ n(
          "div",
          {
            "data-testid": "reaction-bubble",
            className: `absolute -bottom-3 ${o ? "left-1" : "right-1"} bg-white rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.15)] px-1.5 py-0.5 text-[13px] flex items-center gap-0.5`,
            style: {
              animation: "reactionPop 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards"
            },
            children: [
              t.reactions.join(""),
              /* @__PURE__ */ e("style", { children: `
              @keyframes reactionPop {
                from { opacity: 0; transform: scale(0.5); }
                to { opacity: 1; transform: scale(1); }
              }
            ` })
            ]
          }
        )
      ] })
    }
  );
}
function xe({ rtl: t }) {
  const i = /* @__PURE__ */ e("button", { type: "button", className: "text-[#8696A0] shrink-0 leading-none", children: /* @__PURE__ */ e(te, { size: 24, strokeWidth: 1.75 }) }), s = /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: "text-black shrink-0 p-0 leading-none flex items-center justify-center w-9 min-w-0 h-12",
      "aria-label": t ? "מצלמה" : "Camera",
      children: /* @__PURE__ */ e(J, { size: 28, strokeWidth: 1.75, className: "shrink-0" })
    }
  ), a = /* @__PURE__ */ e("div", { className: "flex-1 flex items-center bg-white rounded-full px-4 min-h-[40px] border border-[#E5E5E5]", children: /* @__PURE__ */ e("span", { className: "flex-1 min-w-0 py-2", "aria-hidden": !0 }) }), r = /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      className: "text-black shrink-0 p-0 leading-none flex items-center justify-center w-9 min-w-0 h-12",
      "aria-label": t ? "הקלטה" : "Voice message",
      children: /* @__PURE__ */ e(Y, { size: 28, strokeWidth: 1.75, className: "shrink-0" })
    }
  ), o = /* @__PURE__ */ e("div", { className: "flex items-center shrink-0 gap-3", children: t ? /* @__PURE__ */ n(C, { children: [
    r,
    s
  ] }) : /* @__PURE__ */ n(C, { children: [
    s,
    r
  ] }) });
  return /* @__PURE__ */ e(
    "div",
    {
      className: "flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-4 bg-[#F6F6F6] border-t border-[#E5E5E5]",
      dir: t ? "rtl" : "ltr",
      children: t ? /* @__PURE__ */ n(C, { children: [
        o,
        a,
        i
      ] }) : /* @__PURE__ */ n(C, { children: [
        i,
        a,
        o
      ] })
    }
  );
}
const $ = 390, O = 844;
function ue({
  header: t,
  messages: i,
  direction: s = "ltr",
  showStatusBar: a = !0,
  statusBarTime: r = "15:27",
  showInputBar: o = !0,
  autoplay: d = !1,
  showControls: h = !0,
  syncStatusBarFromMessages: x = !0,
  scale: f = 1,
  className: y
}) {
  const g = s === "rtl", [w, j] = u(/* @__PURE__ */ new Set()), [H, F] = u(/* @__PURE__ */ new Set()), [V, R] = u(/* @__PURE__ */ new Set()), [z, v] = u(!1), [k, E] = u(!1), [D, L] = u(!1), N = M(null), p = M(!1), G = U(() => {
    if (!x) return r;
    const l = i.filter((c) => w.has(c.id));
    return l.length === 0 ? i.length > 0 ? i[0].timestamp : r : l[l.length - 1].timestamp;
  }, [
    x,
    r,
    i,
    w
  ]), m = A(() => {
    N.current && (N.current.scrollTop = N.current.scrollHeight);
  }, []), I = A(async () => {
    if (!k) {
      p.current = !1, E(!0), L(!1);
      for (const l of i) {
        if (p.current || (await B(l.delayBeforeMs ?? 800), p.current)) break;
        if (l.sender === "incoming") {
          if (v(!0), m(), await B(ie(l.text, l.typingDurationMs)), p.current) break;
          v(!1);
        }
        if (j((c) => new Set(c).add(l.id)), m(), setTimeout(() => {
          F((c) => new Set(c).add(l.id));
        }, 20), l.reactions && l.reactions.length > 0) {
          if (await B(300), p.current) break;
          R((c) => new Set(c).add(l.id));
        }
      }
      v(!1), E(!1), L(!0);
    }
  }, [k, i, m]), Z = A(() => {
    p.current = !0, E(!1), L(!1), j(/* @__PURE__ */ new Set()), F(/* @__PURE__ */ new Set()), R(/* @__PURE__ */ new Set()), v(!1);
  }, []);
  return _(() => {
    d && I();
  }, []), _(() => {
    m();
  }, [w, z, m]), /* @__PURE__ */ n(
    "div",
    {
      className: `inline-flex flex-col items-center${y ? ` ${y}` : ""}`,
      style: { background: "transparent" },
      children: [
        h && /* @__PURE__ */ n("div", { className: "flex gap-3 mb-4", children: [
          !k && !D && /* @__PURE__ */ e(
            "button",
            {
              "data-testid": "play-button",
              onClick: I,
              className: "px-6 py-2 bg-[#25D366] text-white rounded-full font-semibold shadow hover:bg-[#1ebe5d] transition-colors",
              children: "▶ Play"
            }
          ),
          (k || D) && /* @__PURE__ */ e(
            "button",
            {
              "data-testid": "reset-button",
              onClick: Z,
              className: "px-6 py-2 bg-white text-[#25D366] border border-[#25D366] rounded-full font-semibold shadow hover:bg-gray-50 transition-colors",
              children: "↺ Reset"
            }
          )
        ] }),
        /* @__PURE__ */ e(
          "div",
          {
            style: {
              width: $ * f,
              height: O * f,
              flexShrink: 0,
              position: "relative"
            },
            children: /* @__PURE__ */ n(
              "div",
              {
                "data-testid": "phone-frame",
                className: "relative flex flex-col overflow-hidden bg-white",
                style: {
                  width: $,
                  height: O,
                  borderRadius: 44,
                  boxShadow: "0 0 0 10px #1a1a1a, 0 0 0 12px #3a3a3a, 0 30px 60px rgba(0,0,0,0.4)",
                  transform: f !== 1 ? `scale(${f})` : void 0,
                  transformOrigin: "top left",
                  position: "absolute",
                  top: 0,
                  left: 0
                },
                dir: "ltr",
                children: [
                  /* @__PURE__ */ e(
                    "div",
                    {
                      className: "absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-[#1a1a1a]",
                      style: { width: 126, height: 34, borderRadius: "0 0 20px 20px" }
                    }
                  ),
                  a && /* @__PURE__ */ e(le, { time: G }),
                  /* @__PURE__ */ e(
                    ce,
                    {
                      avatarUrl: t.avatarUrl,
                      name: t.name,
                      subtitle: t.subtitle ?? "tap here to add to contacts",
                      unreadCount: t.unreadCount,
                      rtl: g
                    }
                  ),
                  /* @__PURE__ */ n(
                    "div",
                    {
                      ref: N,
                      dir: "ltr",
                      className: "flex-1 min-h-0 min-w-0 overflow-x-hidden overflow-y-auto py-2 scrollbar-hidden",
                      style: {
                        backgroundImage: re,
                        backgroundSize: "200px 200px",
                        backgroundColor: "#EFE7DD"
                      },
                      children: [
                        i.map(
                          (l) => w.has(l.id) ? /* @__PURE__ */ e(
                            he,
                            {
                              message: l,
                              rtl: g,
                              visible: H.has(l.id),
                              showReaction: V.has(l.id)
                            },
                            l.id
                          ) : null
                        ),
                        z && /* @__PURE__ */ e(de, { rtl: g }),
                        /* @__PURE__ */ e("div", { className: "h-5" })
                      ]
                    }
                  ),
                  o && /* @__PURE__ */ e(xe, { rtl: g }),
                  /* @__PURE__ */ e("div", { className: "flex justify-center items-center pb-2 pt-1 bg-white", children: /* @__PURE__ */ e("div", { className: "w-32 h-[5px] bg-black rounded-full opacity-20" }) })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function me({ children: t, className: i }) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: `flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 overflow-x-hidden overflow-y-auto scrollbar-hidden${i ? ` ${i}` : ""}`,
      children: t
    }
  );
}
export {
  ue as WhatsAppChat,
  me as WhatsAppDemo
};
