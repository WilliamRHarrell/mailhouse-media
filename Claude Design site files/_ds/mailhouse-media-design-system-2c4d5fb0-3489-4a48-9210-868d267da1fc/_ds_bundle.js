/* @ds-bundle: {"format":3,"namespace":"MailhouseMediaDesignSystem_2c4d5f","components":[{"name":"PostcardPreview","sourcePath":"components/brand/PostcardPreview.jsx"},{"name":"RouteCard","sourcePath":"components/brand/RouteCard.jsx"},{"name":"SlotMeter","sourcePath":"components/brand/SlotMeter.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"StatBlock","sourcePath":"components/surfaces/StatBlock.jsx"}],"sourceHashes":{"components/brand/PostcardPreview.jsx":"8b025dbd4f71","components/brand/RouteCard.jsx":"727ed978b571","components/brand/SlotMeter.jsx":"591dbf231f5f","components/core/Avatar.jsx":"998b234854f6","components/core/Badge.jsx":"d377b5482396","components/core/Button.jsx":"bc66e1910dea","components/core/IconButton.jsx":"013825b7bbb4","components/core/Tag.jsx":"78cbf6ee051b","components/feedback/Dialog.jsx":"ce822d362b09","components/feedback/Toast.jsx":"546e0a15e1f0","components/forms/Checkbox.jsx":"ec404d1170fb","components/forms/Input.jsx":"e4d688c0518f","components/forms/Select.jsx":"33ae1996964f","components/forms/Switch.jsx":"d528168d4f03","components/surfaces/Card.jsx":"6b989826e63c","components/surfaces/StatBlock.jsx":"a556f802286e","ui_kits/dashboard/AppShell.jsx":"82018d5c39c1","ui_kits/dashboard/CampaignDetail.jsx":"20b60ac5b4cd","ui_kits/dashboard/Overview.jsx":"e414757fefe4","ui_kits/dashboard/RoutesScreen.jsx":"e31efca8ddf9","ui_kits/marketing/CTASection.jsx":"7d867e54238a","ui_kits/marketing/Hero.jsx":"9ae7f567ad09","ui_kits/marketing/HowItWorks.jsx":"f64d53ab92fa","ui_kits/marketing/MarketingNav.jsx":"fa08e316b9a2","ui_kits/marketing/Proof.jsx":"cf6e997f448a","ui_kits/marketing/RouteBrowser.jsx":"5621d0f4e1ee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MailhouseMediaDesignSystem_2c4d5f = window.MailhouseMediaDesignSystem_2c4d5f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/PostcardPreview.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — PostcardPreview
 * A 9×12 EDDM postcard mockup. Printed-lift shadow, stamp + postmark corner,
 * the advertiser's headline / offer / business. The brand's hero object.
 */
function PostcardPreview({
  headline = 'NEED A NEW ROOF?',
  offer = '$500 OFF full replacement',
  business = 'Reyes Roofing',
  phone = '(954) 555-0148',
  accent = 'var(--signal-500)',
  image = null,
  width = 360,
  style,
  ...rest
}) {
  const h = Math.round(width * 0.75); // 12:9 landscape
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width,
      height: h,
      background: 'var(--paper-50)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 40,
      borderRadius: 3,
      border: '2px dashed var(--ink-200)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 7 9 6 9-6"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      left: 14,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 9,
      letterSpacing: '0.1em',
      color: 'var(--ink-300)',
      textTransform: 'uppercase',
      border: '1px solid var(--ink-200)',
      borderRadius: 3,
      padding: '2px 5px'
    }
  }, "EDDM \xB7 STD"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      margin: '52px 16px 0',
      borderRadius: 'var(--radius-sm)',
      background: image ? `center/cover url(${image})` : 'var(--ink-900)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 16
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(3,11,24,0) 30%, rgba(3,11,24,0.78) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      background: accent,
      color: '#fff',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.06em',
      padding: '4px 8px',
      borderRadius: 3,
      marginBottom: 8,
      textTransform: 'uppercase'
    }
  }, offer), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: Math.round(width * 0.085),
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: '#fff'
    }
  }, headline))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 14,
      color: 'var(--text-strong)',
      letterSpacing: '-0.01em'
    }
  }, business), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 12.5,
      color: accent
    }
  }, phone)));
}
Object.assign(__ds_scope, { PostcardPreview });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PostcardPreview.jsx", error: String((e && e.message) || e) }); }

// components/brand/SlotMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — SlotMeter
 * Route-inventory scarcity meter. Segmented bar of total ad slots per route;
 * taken slots fill ink, remaining glow signal red. Drives urgency honestly.
 */
function SlotMeter({
  total = 10,
  taken = 8,
  label = true,
  size = 'md',
  style,
  ...rest
}) {
  const remaining = Math.max(0, total - taken);
  const heights = {
    sm: 8,
    md: 12,
    lg: 16
  };
  const h = heights[size] || heights.md;
  const urgent = remaining <= 3;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3
    }
  }, Array.from({
    length: total
  }).map((_, i) => {
    const isTaken = i < taken;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        flex: 1,
        height: h,
        borderRadius: 2,
        background: isTaken ? 'var(--ink-800)' : urgent ? 'var(--signal-500)' : 'var(--signal-300)',
        boxShadow: !isTaken && urgent ? '0 0 0 1px rgba(254,0,50,0.25)' : 'none'
      }
    });
  })), label && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, taken, "/", total, " slots taken"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 12,
      color: urgent ? 'var(--signal-600)' : 'var(--text-strong)'
    }
  }, remaining, " left")));
}
Object.assign(__ds_scope, { SlotMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SlotMeter.jsx", error: String((e && e.message) || e) }); }

// components/brand/RouteCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — RouteCard
 * The core inventory object: a USPS route for sale. Route code, place, home
 * count, slot scarcity, price-per-home, and a claim action.
 */
function RouteCard({
  route = '33076-C',
  place = 'Coral Springs, FL',
  homes = 812,
  pricePerHome = '$0.06',
  total = 10,
  taken = 8,
  premium = false,
  onClaim,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const remaining = total - taken;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card)',
      border: `1px solid ${hover ? 'var(--border-soft)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 30,
      height: 30,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--ink-900)',
      color: 'var(--paper-100)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18V5l12-2v13"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "18",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "16",
    r: "3"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: '0.02em',
      color: 'var(--text-strong)'
    }
  }, "ROUTE ", route), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, place))), premium && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--signal-700)',
      background: 'var(--signal-100)',
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)'
    }
  }, "Premium")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 0,
      padding: '0 16px 14px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      fontFeatureSettings: "'tnum'"
    }
  }, homes.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Homes")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      fontFeatureSettings: "'tnum'"
    }
  }, pricePerHome), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Per home"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SlotMeter, {
    total: total,
    taken: taken
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClaim,
    style: {
      marginTop: 14,
      width: '100%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      padding: '11px 16px',
      borderRadius: 'var(--radius-md)',
      border: 'none',
      background: remaining === 0 ? 'var(--ink-200)' : 'var(--signal-500)',
      color: remaining === 0 ? 'var(--ink-400)' : '#fff',
      cursor: remaining === 0 ? 'not-allowed' : 'pointer',
      boxShadow: hover && remaining > 0 ? 'var(--shadow-signal)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out)'
    },
    disabled: remaining === 0
  }, remaining === 0 ? 'Route full' : 'Claim this route')));
}
Object.assign(__ds_scope, { RouteCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/RouteCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Avatar
 * Business/person avatar. Image or initials; falls back to navy/ink monogram.
 */
function Avatar({
  name = '',
  src = null,
  size = 40,
  square = false,
  style,
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]?.toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      flex: `0 0 ${size}px`,
      borderRadius: square ? 'var(--radius-md)' : '999px',
      background: src ? 'var(--paper-300)' : 'var(--navy-500)',
      color: 'var(--paper-100)',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: Math.round(size * 0.4),
      letterSpacing: '-0.01em',
      overflow: 'hidden',
      border: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?');
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Badge
 * Small status/count label. Solid for emphasis (scarcity), soft for status.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ['var(--ink-100)', 'var(--ink-700)'],
      solid: ['var(--ink-900)', 'var(--paper-100)']
    },
    signal: {
      soft: ['var(--signal-100)', 'var(--signal-700)'],
      solid: ['var(--signal-500)', '#fff']
    },
    navy: {
      soft: ['var(--navy-100)', 'var(--navy-500)'],
      solid: ['var(--navy-500)', '#fff']
    },
    success: {
      soft: ['var(--success-bg)', 'var(--success)'],
      solid: ['var(--success)', '#fff']
    },
    warning: {
      soft: ['var(--warning-bg)', 'var(--warning)'],
      solid: ['var(--warning)', '#fff']
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[variant] || tones.neutral.soft;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      lineHeight: 1,
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Button
 * Direct, confident actions. Primary = signal red (one per view), secondary = ink,
 * navy = trust, outline/ghost = low emphasis. Tactile press (scale 0.98).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      fontSize: 13,
      padding: '8px 14px',
      gap: 6,
      icon: 15,
      radius: 'var(--radius-sm)'
    },
    md: {
      fontSize: 15,
      padding: '11px 20px',
      gap: 8,
      icon: 18,
      radius: 'var(--radius-md)'
    },
    lg: {
      fontSize: 17,
      padding: '15px 28px',
      gap: 9,
      icon: 20,
      radius: 'var(--radius-md)'
    }
  };
  const s = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: hover ? 'var(--signal-600)' : 'var(--signal-500)',
      bgPress: 'var(--signal-700)',
      fg: '#fff',
      border: 'transparent',
      shadow: hover ? 'var(--shadow-signal)' : 'var(--shadow-xs)'
    },
    secondary: {
      bg: hover ? 'var(--ink-700)' : 'var(--ink-900)',
      bgPress: 'var(--ink-800)',
      fg: 'var(--paper-100)',
      border: 'transparent',
      shadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)'
    },
    navy: {
      bg: hover ? 'var(--navy-400)' : 'var(--navy-500)',
      bgPress: 'var(--navy-700)',
      fg: '#fff',
      border: 'transparent',
      shadow: hover ? 'var(--shadow-md)' : 'var(--shadow-xs)'
    },
    outline: {
      bg: hover ? 'var(--paper-100)' : 'transparent',
      bgPress: 'var(--paper-200)',
      fg: 'var(--ink-900)',
      border: 'var(--ink-900)',
      shadow: 'none'
    },
    ghost: {
      bg: hover ? 'rgba(3,11,24,0.06)' : 'transparent',
      bgPress: 'rgba(3,11,24,0.10)',
      fg: 'var(--ink-700)',
      border: 'transparent',
      shadow: 'none'
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      width: fullWidth ? '100%' : 'auto',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: s.fontSize,
      letterSpacing: '0.01em',
      lineHeight: 1,
      padding: s.padding,
      borderRadius: s.radius,
      background: press ? p.bgPress : p.bg,
      color: p.fg,
      border: `2px solid ${p.border}`,
      boxShadow: disabled ? 'none' : p.shadow,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'scale(0.98)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      WebkitFontSmoothing: 'antialiased',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — IconButton
 * Square/circular icon-only control for toolbars, cards, nav.
 */
function IconButton({
  children,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'square',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: 30,
    md: 38,
    lg: 46
  };
  const dim = sizes[size] || sizes.md;
  const palettes = {
    primary: {
      bg: hover ? 'var(--signal-600)' : 'var(--signal-500)',
      fg: '#fff',
      border: 'transparent'
    },
    solid: {
      bg: hover ? 'var(--ink-700)' : 'var(--ink-900)',
      fg: 'var(--paper-100)',
      border: 'transparent'
    },
    outline: {
      bg: hover ? 'var(--paper-100)' : 'transparent',
      fg: 'var(--ink-900)',
      border: 'var(--border-soft)'
    },
    ghost: {
      bg: hover ? 'rgba(3,11,24,0.06)' : 'transparent',
      fg: 'var(--ink-700)',
      border: 'transparent'
    }
  };
  const p = palettes[variant] || palettes.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      borderRadius: shape === 'circle' ? '999px' : 'var(--radius-md)',
      background: p.bg,
      color: p.fg,
      border: `1px solid ${p.border}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'scale(0.94)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: Math.round(dim * 0.5),
      height: Math.round(dim * 0.5)
    }
  }, children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Tag
 * Removable/selectable pill for categories, route codes, business types.
 */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  icon = null,
  style,
  ...rest
}) {
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      lineHeight: 1,
      padding: '7px 12px',
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--ink-900)' : 'var(--paper-100)',
      color: selected ? 'var(--paper-100)' : 'var(--ink-700)',
      border: `1px solid ${selected ? 'var(--ink-900)' : 'var(--border-soft)'}`,
      cursor: interactive ? 'pointer' : 'default',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 14,
      height: 14
    }
  }, icon), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      marginRight: -3,
      border: 'none',
      borderRadius: 999,
      background: 'transparent',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 14,
      lineHeight: 1,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Mailhouse Media — Dialog
 * Modal with paper surface, ink scrim, optional footer actions slot.
 */
function Dialog({
  open,
  onClose,
  title,
  eyebrow,
  children,
  footer,
  width = 480
}) {
  React.useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && onClose) onClose();
    }
    if (open) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(3,11,24,0.55)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      animation: 'mhFade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid var(--border-hairline)',
      overflow: 'hidden',
      animation: 'mhRise var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px 18px'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--signal-500)',
      marginBottom: 8
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      letterSpacing: '-0.01em',
      color: 'var(--text-strong)',
      marginBottom: 10
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)',
      lineHeight: 1.55
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '14px 24px',
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--paper-100)'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes mhFade{from{opacity:0}to{opacity:1}}@keyframes mhRise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Toast
 * Inline notification. Ink surface with a tone accent bar.
 */
function Toast({
  title,
  message,
  tone = 'neutral',
  onClose,
  icon = null,
  style,
  ...rest
}) {
  const accents = {
    neutral: 'var(--ink-300)',
    success: 'var(--success)',
    signal: 'var(--signal-500)',
    warning: 'var(--warning)',
    navy: 'var(--navy-400)'
  };
  const accent = accents[tone] || accents.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      background: 'var(--ink-900)',
      color: 'var(--paper-100)',
      borderRadius: 'var(--radius-md)',
      borderLeft: `3px solid ${accent}`,
      padding: '14px 16px',
      minWidth: 280,
      maxWidth: 420,
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 20,
      height: 20,
      color: accent,
      marginTop: 1
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14.5,
      marginBottom: message ? 3 : 0
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-on-ink-muted)',
      lineHeight: 1.45
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--ink-200)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1,
      padding: 0,
      marginTop: -1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Checkbox
 * Square check with ink/signal fill. Supports label + description.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const cbId = id || (label ? 'cb-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 20px',
      width: 20,
      height: 20,
      marginTop: 1,
      borderRadius: 'var(--radius-xs)',
      border: `2px solid ${checked ? 'var(--ink-900)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--ink-900)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--paper-100)",
    strokeWidth: "3.5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Input
 * Text field with label, optional leading icon, hint and error.
 */
function Input({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  type = 'text',
  iconLeft = null,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--signal-500)' : focus ? 'var(--ink-900)' : 'var(--border-soft)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: disabled ? 'var(--paper-200)' : 'var(--surface-card)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 12px',
      boxShadow: focus && !error ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 18,
      height: 18,
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      padding: '11px 0',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: error ? 'var(--signal-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Select
 * Native select styled to match Input, with chevron.
 */
function Select({
  label,
  hint,
  value,
  onChange,
  options = [],
  disabled = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: disabled ? 'var(--paper-200)' : 'var(--surface-card)',
      border: `1.5px solid ${focus ? 'var(--ink-900)' : 'var(--border-soft)'}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-strong)',
      padding: '11px 38px 11px 12px',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2.2",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Switch
 * On/off toggle. Signal red when on.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style,
  ...rest
}) {
  const swId = id || (label ? 'sw-' + label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: swId,
    type: "checkbox",
    role: "switch",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 42,
      height: 24,
      borderRadius: 999,
      background: checked ? 'var(--signal-500)' : 'var(--ink-200)',
      transition: 'background var(--dur-base) var(--ease-out)',
      flex: '0 0 42px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 18,
      height: 18,
      borderRadius: 999,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — Card
 * Standard white surface container. Optional hover-lift for interactive cards.
 */
function Card({
  children,
  interactive = false,
  padding = 20,
  tone = 'paper',
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    paper: {
      bg: 'var(--surface-card)',
      fg: 'var(--text-body)',
      border: 'var(--border-hairline)'
    },
    ink: {
      bg: 'var(--ink-900)',
      fg: 'var(--text-on-ink)',
      border: 'var(--border-on-ink)'
    },
    navy: {
      bg: 'var(--navy-500)',
      fg: '#fff',
      border: 'rgba(255,255,255,0.14)'
    },
    sunken: {
      bg: 'var(--paper-100)',
      fg: 'var(--text-body)',
      border: 'var(--border-hairline)'
    }
  };
  const t = tones[tone] || tones.paper;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-card)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Mailhouse Media — StatBlock
 * Headline metric with mono figure, label, and optional delta. The brand's
 * numbers-forward voice (response rate, impressions, cost).
 */
function StatBlock({
  value,
  label,
  delta,
  deltaDir = 'up',
  accent = false,
  sublabel,
  onDark = false,
  style,
  ...rest
}) {
  const deltaColor = deltaDir === 'up' ? 'var(--success)' : deltaDir === 'down' ? 'var(--signal-600)' : 'var(--text-muted)';
  const valueColor = onDark ? 'var(--paper-50)' : 'var(--text-strong)';
  const labelColor = accent ? 'var(--signal-500)' : onDark ? 'var(--text-on-ink-muted)' : 'var(--text-muted)';
  const subColor = onDark ? 'var(--text-on-ink-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: labelColor
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 38,
      letterSpacing: '-0.02em',
      lineHeight: 1,
      color: valueColor,
      fontFeatureSettings: "'tnum'"
    }
  }, value, delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: deltaColor
    }
  }, deltaDir === 'up' ? '▲' : deltaDir === 'down' ? '▼' : '', " ", delta)), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: subColor
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/AppShell.jsx
try { (() => {
// Mailhouse Media — Dashboard app shell (sidebar + topbar)
function AppShell({
  view,
  setView,
  children
}) {
  const nav = [{
    id: 'overview',
    label: 'Overview',
    icon: 'LayoutDashboard'
  }, {
    id: 'campaigns',
    label: 'Campaigns',
    icon: 'Mail'
  }, {
    id: 'routes',
    label: 'Routes',
    icon: 'Map'
  }, {
    id: 'creative',
    label: 'Postcards',
    icon: 'Image'
  }, {
    id: 'billing',
    label: 'Billing',
    icon: 'CreditCard'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '232px 1fr',
      minHeight: '100vh',
      background: 'var(--paper-200)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper-100)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 16px',
      position: 'sticky',
      top: 0,
      height: '100vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 22px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-paper.svg",
    height: "24",
    alt: "Mailhouse Media"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, nav.map(n => {
    const active = view === n.id;
    return /*#__PURE__*/React.createElement("button", {
      key: n.id,
      onClick: () => setView(n.id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        textAlign: 'left',
        padding: '10px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        background: active ? 'rgba(245,234,228,0.10)' : 'transparent',
        color: active ? '#fff' : 'var(--text-on-ink-muted)',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 14.5,
        borderLeft: active ? '2px solid var(--signal-500)' : '2px solid transparent',
        transition: 'background var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: n.icon,
      size: 18,
      color: active ? 'var(--signal-400)' : 'var(--ink-200)'
    }), n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-ink)',
      paddingTop: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Reyes Roofing",
    square: true,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13.5,
      color: '#fff'
    }
  }, "Reyes Roofing"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10.5,
      color: 'var(--ink-300)'
    }
  }, "Coral Springs, FL")))), /*#__PURE__*/React.createElement("main", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 28px',
      background: 'var(--paper-50)',
      borderBottom: '1px solid var(--border-hairline)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-soft)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 12px',
      width: 300
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Search",
    size: 16,
    color: "var(--text-muted)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-faint)'
    }
  }, "Search routes, campaigns\u2026")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Bell",
    size: 18
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Plus",
      size: 16
    })
  }, "New campaign"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px',
      flex: 1
    }
  }, children)));
}
Object.assign(window, {
  AppShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/CampaignDetail.jsx
try { (() => {
// Mailhouse Media — Campaign detail screen
function CampaignDetail({
  onBack
}) {
  const routeRows = [{
    route: '33076-C',
    place: 'Coral Springs, FL',
    homes: 812,
    resp: '4.6%',
    status: 'Delivered',
    tone: 'success'
  }, {
    route: '33071-A',
    place: 'Coral Springs, FL',
    homes: 640,
    resp: '4.1%',
    status: 'Delivered',
    tone: 'success'
  }, {
    route: '33065-D',
    place: 'Coral Springs, FL',
    homes: 905,
    resp: '3.9%',
    status: 'Delivered',
    tone: 'success'
  }, {
    route: '33067-B',
    place: 'Parkland, FL',
    homes: 1120,
    resp: '—',
    status: 'In transit',
    tone: 'navy'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-muted)',
      padding: 0,
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ArrowLeft",
    size: 16
  }), " Back to overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Spring Roof Push"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    variant: "solid",
    dot: true
  }, "Mailing")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      margin: '8px 0 0'
    }
  }, "4 ROUTES \xB7 3,477 HOMES \xB7 DROPS MAR 14")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Copy",
      size: 16
    })
  }, "Duplicate"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "RefreshCw",
      size: 16
    })
  }, "Reprint winners"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '320px 1fr',
      gap: 24,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PostcardPreview, {
    width: 280,
    headline: "NEED A NEW ROOF?",
    offer: "$500 off full replacement",
    business: "Reyes Roofing",
    phone: "(954) 555-0148"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Download",
      size: 15
    })
  }, "Download proof (PDF)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }, [{
    v: '4.2%',
    l: 'Response rate',
    d: '0.4pt',
    dir: 'up',
    accent: true
  }, {
    v: '146',
    l: 'Calls generated',
    d: '22',
    dir: 'up'
  }, {
    v: '$0.06',
    l: 'Cost / impression'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: '20px 22px',
      borderLeft: i ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: s.v,
    label: s.l,
    delta: s.d,
    deltaDir: s.dir,
    accent: s.accent
  }))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, null, "Performance by route")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 0.8fr 0.8fr auto',
      gap: 12,
      padding: '10px 20px',
      background: 'var(--paper-100)'
    }
  }, ['Route', 'Homes', 'Response', 'Status'].map(h => /*#__PURE__*/React.createElement(MonoLabel, {
    key: h,
    style: {
      fontSize: 10
    }
  }, h))), routeRows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.route,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 0.8fr 0.8fr auto',
      gap: 12,
      alignItems: 'center',
      padding: '14px 20px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, r.route), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, r.place)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, r.homes.toLocaleString()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14,
      color: r.resp === '—' ? 'var(--text-faint)' : 'var(--signal-600)'
    }
  }, r.resp), /*#__PURE__*/React.createElement(Badge, {
    tone: r.tone,
    dot: true
  }, r.status)))))));
}
Object.assign(window, {
  CampaignDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/CampaignDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Overview.jsx
try { (() => {
// Mailhouse Media — Dashboard overview
function Overview({
  onOpenCampaign
}) {
  const campaigns = [{
    name: 'Spring Roof Push',
    status: 'success',
    statusLabel: 'Mailing',
    routes: 4,
    homes: 3140,
    resp: '4.2%',
    date: 'Mar 14'
  }, {
    name: 'Storm Damage Offer',
    status: 'navy',
    statusLabel: 'In review',
    routes: 2,
    homes: 1452,
    resp: '—',
    date: 'Mar 28'
  }, {
    name: 'Winter Gutter Guard',
    status: 'neutral',
    statusLabel: 'Draft',
    routes: 6,
    homes: 4980,
    resp: '3.8%',
    date: 'Feb 02'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Good morning, Reyes Roofing"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, "3 campaigns running across 12 routes this month.")), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }, [{
    v: '4.2%',
    l: 'Avg response rate',
    d: '0.4pt',
    dir: 'up',
    accent: true
  }, {
    v: '9,140',
    l: 'Homes reached',
    d: '1.2k',
    dir: 'up'
  }, {
    v: '38',
    l: 'Jobs booked',
    d: '6',
    dir: 'up'
  }, {
    v: '$0.06',
    l: 'Cost / impression'
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    style: {
      padding: '22px 24px',
      borderLeft: i ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: s.v,
    label: s.l,
    delta: s.d,
    deltaDir: s.dir,
    accent: s.accent
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 20px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, null, "Active campaigns"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 13,
      color: 'var(--signal-600)',
      textDecoration: 'none'
    }
  }, "View all")), campaigns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.name,
    onClick: onOpenCampaign,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 0.8fr 0.7fr auto',
      gap: 14,
      alignItems: 'center',
      padding: '15px 20px',
      borderTop: i ? '1px solid var(--border-hairline)' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--paper-200)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Mail",
    size: 18,
    color: "var(--ink-600)"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, c.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, c.routes, " routes \xB7 ", c.homes.toLocaleString(), " homes"))), /*#__PURE__*/React.createElement(Badge, {
    tone: c.status,
    variant: c.status === 'success' ? 'solid' : 'soft',
    dot: true
  }, c.statusLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 15,
      color: c.resp === '—' ? 'var(--text-faint)' : 'var(--text-strong)'
    }
  }, c.resp), /*#__PURE__*/React.createElement(Icon, {
    name: "ChevronRight",
    size: 18,
    color: "var(--text-faint)"
  })))), /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, null, "Next mailing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PostcardPreview, {
    width: 250,
    headline: "NEED A NEW ROOF?",
    offer: "$500 off full replacement",
    business: "Reyes Roofing",
    phone: "(954) 555-0148"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "Calendar",
    size: 16,
    color: "var(--signal-500)"
  }), " Drops ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "March 14"), " \xB7 4 routes"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Eye",
      size: 16
    })
  }, "Review proof"))));
}
Object.assign(window, {
  Overview
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Overview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/RoutesScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Mailhouse Media — Routes browser screen
function RoutesScreen({
  onClaim
}) {
  const [type, setType] = React.useState('Roofing');
  const routes = [{
    route: '33076-C',
    place: 'Coral Springs, FL',
    homes: 812,
    pricePerHome: '$0.06',
    total: 10,
    taken: 8,
    premium: true
  }, {
    route: '33071-A',
    place: 'Coral Springs, FL',
    homes: 640,
    pricePerHome: '$0.07',
    total: 10,
    taken: 9
  }, {
    route: '33065-D',
    place: 'Coral Springs, FL',
    homes: 905,
    pricePerHome: '$0.06',
    total: 10,
    taken: 4
  }, {
    route: '33067-B',
    place: 'Parkland, FL',
    homes: 1120,
    pricePerHome: '$0.08',
    total: 10,
    taken: 6,
    premium: true
  }, {
    route: '33063-A',
    place: 'Margate, FL',
    homes: 738,
    pricePerHome: '$0.05',
    total: 10,
    taken: 2
  }, {
    route: '33073-C',
    place: 'Coconut Creek, FL',
    homes: 690,
    pricePerHome: '$0.06',
    total: 10,
    taken: 7
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22,
      maxWidth: 1100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 30,
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, "Routes near you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, "Limited slots per route per category. Claim before a competitor does.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: type,
    onChange: e => setType(e.target.value),
    options: ['Roofing', 'HVAC', 'Plumbing', 'Realtor', 'Pest control']
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: 'var(--navy-500)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1100 150",
    preserveAspectRatio: "none",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: "rgba(245,234,228,0.16)",
    strokeWidth: "1",
    fill: "none"
  }, Array.from({
    length: 11
  }).map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: 'v' + i,
    x1: i * 110,
    y1: "0",
    x2: i * 110,
    y2: "150"
  })), Array.from({
    length: 4
  }).map((_, i) => /*#__PURE__*/React.createElement("line", {
    key: 'h' + i,
    x1: "0",
    y1: i * 50,
    x2: "1100",
    y2: i * 50
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M40 120 C 220 60 360 130 560 80 S 900 40 1060 90",
    fill: "none",
    stroke: "var(--signal-500)",
    strokeWidth: "3",
    strokeDasharray: "3 8",
    strokeLinecap: "round"
  }), [[180, 96], [560, 80], [820, 56], [1010, 92]].map((p, i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: p[0],
    cy: p[1],
    r: "7",
    fill: "var(--signal-500)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: p[0],
    cy: p[1],
    r: "13",
    fill: "none",
    stroke: "var(--signal-400)",
    strokeWidth: "1.5",
    opacity: "0.6"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 18,
      bottom: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--paper-100)',
      background: 'rgba(3,11,24,0.5)',
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)'
    }
  }, "14 routes \xB7 Coral Springs area")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, routes.map(r => /*#__PURE__*/React.createElement(RouteCard, _extends({
    key: r.route
  }, r, {
    onClaim: onClaim
  })))));
}
Object.assign(window, {
  RoutesScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/RoutesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CTASection.jsx
try { (() => {
// Mailhouse Media — CTA band + footer
function CTASection({
  onClaim
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--signal-500)',
      padding: '80px 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 50,
      letterSpacing: '-0.025em',
      lineHeight: 1,
      margin: 0,
      color: '#fff'
    }
  }, "Own your route before someone else does."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18.5,
      lineHeight: 1.5,
      color: 'rgba(255,255,255,0.92)',
      margin: '18px auto 30px',
      maxWidth: 520
    }
  }, "Cheapest customer acquisition in your local market. We handle everything from design to delivery."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onClaim,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 20
    })
  }, "Claim your route"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(255,255,255,0.55)'
    }
  }, "Talk to us"))));
}
function MarketingFooter() {
  const cols = [{
    h: 'Product',
    items: ['How it works', 'Routes', 'Pricing', 'Postcard design']
  }, {
    h: 'Industries',
    items: ['Roofing & HVAC', 'Realtors', 'Home services', 'Restaurants']
  }, {
    h: 'Company',
    items: ['About', 'Results', 'Contact', 'Careers']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper-100)',
      padding: '64px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark-paper.svg",
    height: "26",
    alt: "Mailhouse Media"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-on-ink-muted)',
      lineHeight: 1.55,
      margin: '16px 0 0',
      maxWidth: 240
    }
  }, "The physical ad network for local businesses. Every door. Every home.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)',
      marginBottom: 14
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-on-ink-muted)',
      textDecoration: 'none'
    }
  }, it))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      paddingTop: 22,
      borderTop: '1px solid var(--border-on-ink)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--ink-300)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Mailhouse Media"), /*#__PURE__*/React.createElement("span", null, "EDDM\xAE is a trademark of the USPS.")));
}
Object.assign(window, {
  CTASection,
  MarketingFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Mailhouse Media — Marketing hero
function Hero({
  onClaim
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--ink-900)',
      color: 'var(--paper-100)',
      padding: '92px 32px 96px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 600",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: 0.06
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-50 480 C 200 380 320 520 520 420 S 880 280 1260 360",
    fill: "none",
    stroke: "#f5eae4",
    strokeWidth: "2",
    strokeDasharray: "2 10",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-50 300 C 260 220 360 360 640 260 S 980 160 1260 220",
    fill: "none",
    stroke: "#f5eae4",
    strokeWidth: "2",
    strokeDasharray: "2 10",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1.05fr 0.95fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "The local ad network"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 64,
      lineHeight: 0.98,
      letterSpacing: '-0.03em',
      margin: '18px 0 0',
      color: '#fff'
    }
  }, "EVERY DOOR.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--signal-500)'
    }
  }, "EVERY HOME.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--text-on-ink-muted)',
      margin: '22px 0 0',
      maxWidth: 480
    }
  }, "Premium ad space on 9\xD712 postcards, delivered to every mailbox on the USPS routes you pick. We design, print, and mail it. You book the jobs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onClaim,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 20
    })
  }, "Claim your route"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      color: '#fff',
      borderColor: 'rgba(245,234,228,0.4)'
    },
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "Play",
      size: 18
    })
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "2\u20135%",
    label: "Response rate",
    sublabel: "vs. 0.1% digital",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "$0.06",
    label: "Per impression",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "100%",
    label: "Route coverage",
    onDark: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: 'rotate(-5deg)',
      position: 'relative',
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement(PostcardPreview, {
    width: 400,
    headline: "NEED A NEW ROOF?",
    offer: "$500 off full replacement",
    business: "Reyes Roofing",
    phone: "(954) 555-0148"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -28,
      right: 18,
      transform: 'rotate(6deg)',
      zIndex: 1,
      opacity: 0.96
    }
  }, /*#__PURE__*/React.createElement(PostcardPreview, {
    width: 250,
    headline: "SPRING TUNE-UP",
    offer: "$89 A/C check",
    business: "Cool Breeze HVAC",
    phone: "(954) 555-0199",
    accent: "var(--navy-400)"
  })))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HowItWorks.jsx
try { (() => {
// Mailhouse Media — How it works
function HowItWorks() {
  const steps = [{
    icon: 'MapPin',
    n: '01',
    title: 'Pick your routes',
    body: 'Browse USPS routes near you. See homes per route, price per home, and how many ad slots are left.'
  }, {
    icon: 'PenTool',
    n: '02',
    title: 'We design it',
    body: 'Send your offer. Our team designs a 9×12 postcard that gets read — you just approve it.'
  }, {
    icon: 'Truck',
    n: '03',
    title: 'Every door, every home',
    body: 'We print and mail via EDDM to every mailbox on your routes. No opt-outs, no ad blockers.'
  }, {
    icon: 'TrendingUp',
    n: '04',
    title: 'You book jobs',
    body: 'Calls come in. Track response by route and reprint the winners next month.'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 620,
      margin: '0 auto 56px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "How it works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 44,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      margin: '14px 0 14px',
      color: 'var(--text-strong)'
    }
  }, "Four steps. We do three of them."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      color: 'var(--text-muted)',
      lineHeight: 1.55,
      margin: 0
    }
  }, "Done-for-you, from artwork to mailbox. You just show up.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 20
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.n,
    padding: 22,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--ink-900)',
      color: 'var(--signal-400)',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22,
    color: "var(--signal-400)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--ink-200)'
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: '-0.01em',
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.body)))));
}
Object.assign(window, {
  HowItWorks
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketingNav.jsx
try { (() => {
// Mailhouse Media — Marketing nav
function MarketingNav({
  onClaim
}) {
  const links = ['How it works', 'Routes', 'Pricing', 'Results'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(245,234,228,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '14px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/wordmark.svg",
    height: "26",
    alt: "Mailhouse Media"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 30
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onClaim,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 16
    })
  }, "Claim a route"))));
}
Object.assign(window, {
  MarketingNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketingNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Proof.jsx
try { (() => {
// Mailhouse Media — Proof / comparison band (digital vs mailbox)
function Proof() {
  const rows = [{
    metric: 'Response rate',
    digital: '0.1%',
    mail: '2–5%'
  }, {
    metric: 'Gets seen',
    digital: 'Scrolled past',
    mail: 'Held in hand'
  }, {
    metric: 'Ad blockers',
    digital: 'Yes',
    mail: 'None'
  }, {
    metric: 'Coverage',
    digital: 'Fragmented',
    mail: '100% of doors'
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "navy",
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "Why mailboxes win"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 42,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      margin: '14px 0 16px',
      color: '#fff'
    }
  }, "Digital gets ignored.", /*#__PURE__*/React.createElement("br", null), "Mail gets read."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17.5,
      lineHeight: 1.6,
      color: 'rgba(245,234,228,0.82)',
      margin: 0,
      maxWidth: 420
    }
  }, "A postcard can't be blocked, muted, or scrolled past. It lands in the hand of every homeowner on your route \u2014 and stays on the counter.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--paper-50)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      background: 'var(--ink-900)',
      color: 'var(--paper-100)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-200)'
    }
  }, "Metric"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 14px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--ink-200)',
      textAlign: 'center'
    }
  }, "Digital"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 14px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--signal-400)',
      textAlign: 'center',
      background: 'rgba(254,0,50,0.08)'
    }
  }, "Mailhouse")), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.metric,
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr 1fr',
      borderTop: i ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '15px 18px',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, r.metric), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '15px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      textAlign: 'center'
    }
  }, r.digital), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '15px 14px',
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--signal-600)',
      textAlign: 'center',
      background: 'rgba(254,0,50,0.04)'
    }
  }, r.mail))))));
}
Object.assign(window, {
  Proof
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/RouteBrowser.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Mailhouse Media — Route browser teaser
function RouteBrowser({
  onClaim
}) {
  const routes = [{
    route: '33076-C',
    place: 'Coral Springs, FL',
    homes: 812,
    pricePerHome: '$0.06',
    total: 10,
    taken: 8,
    premium: true
  }, {
    route: '33071-A',
    place: 'Coral Springs, FL',
    homes: 640,
    pricePerHome: '$0.07',
    total: 10,
    taken: 9
  }, {
    route: '33065-D',
    place: 'Coral Springs, FL',
    homes: 905,
    pricePerHome: '$0.06',
    total: 10,
    taken: 4
  }];
  return /*#__PURE__*/React.createElement(Section, {
    bg: "paper"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 32,
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Live inventory"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 42,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      margin: '12px 0 0',
      color: 'var(--text-strong)'
    }
  }, "Routes near you"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-muted)',
      margin: '10px 0 0',
      maxWidth: 480
    }
  }, "Slots are limited per route \u2014 once a category is taken, your competitor owns it.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "ArrowRight",
      size: 18
    })
  }, "Browse all routes")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, routes.map(r => /*#__PURE__*/React.createElement(RouteCard, _extends({
    key: r.route
  }, r, {
    onClaim: onClaim
  })))));
}
Object.assign(window, {
  RouteBrowser
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/RouteBrowser.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PostcardPreview = __ds_scope.PostcardPreview;

__ds_ns.RouteCard = __ds_scope.RouteCard;

__ds_ns.SlotMeter = __ds_scope.SlotMeter;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatBlock = __ds_scope.StatBlock;

})();
