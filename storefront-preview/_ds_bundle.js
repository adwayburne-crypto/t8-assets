/* @ds-bundle: {"format":3,"namespace":"T8FitnessDesignSystem_ce2827","components":[{"name":"PriceTag","sourcePath":"components/commerce/PriceTag.jsx"},{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"Rating","sourcePath":"components/commerce/Rating.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"QuantityStepper","sourcePath":"components/forms/QuantityStepper.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/commerce/PriceTag.jsx":"149f7dbe0ae5","components/commerce/ProductCard.jsx":"7bcda786f54b","components/commerce/Rating.jsx":"46b9afb18f26","components/core/Badge.jsx":"a9a860e5889c","components/core/Button.jsx":"1dc20e591d66","components/core/IconButton.jsx":"ded32a9dd0ae","components/core/Tag.jsx":"255bbd56e83c","components/forms/Checkbox.jsx":"73f76a10aad0","components/forms/Input.jsx":"2ecc599abc23","components/forms/QuantityStepper.jsx":"54242d7c8e9f","components/forms/Select.jsx":"1e335db11160","design-canvas.jsx":"bd8746af6e58","ui_kits/storefront/CartDrawer.jsx":"ebb0024d2733","ui_kits/storefront/Collection.jsx":"d80c6c299594","ui_kits/storefront/Home.jsx":"337a7bcd8ab8","ui_kits/storefront/Parts.jsx":"dcda919a500c","ui_kits/storefront/Product.jsx":"a1382510dd55","ui_kits/storefront/data.js":"84e347593e6a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.T8FitnessDesignSystem_ce2827 = window.T8FitnessDesignSystem_ce2827 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/PriceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — PriceTag
 * Price display with optional compare-at (strikethrough) and currency.
 */
function PriceTag({
  amount,
  compareAt,
  currency = 'HK$',
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: 16,
    md: 20,
    lg: 28,
    xl: 36
  };
  const fs = sizes[size] || sizes.md;
  const fmt = n => currency + Number(n).toLocaleString('en-US');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 10,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: fs,
      letterSpacing: '-0.02em',
      color: compareAt ? 'var(--coral-600)' : 'var(--text-primary)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmt(amount)), compareAt ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: Math.round(fs * 0.62),
      color: 'var(--text-muted)',
      textDecoration: 'line-through'
    }
  }, fmt(compareAt)) : null);
}
Object.assign(__ds_scope, { PriceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/PriceTag.jsx", error: String((e && e.message) || e) }); }

// components/commerce/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — Rating
 * Star rating display (read-only) with optional count.
 */
function Rating({
  value = 0,
  max = 5,
  count,
  size = 16,
  style,
  ...rest
}) {
  const stars = [];
  for (let i = 0; i < max; i++) {
    const fill = Math.max(0, Math.min(1, value - i));
    stars.push(/*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        position: 'relative',
        display: 'inline-block',
        width: size,
        height: size,
        lineHeight: 0
      }
    }, /*#__PURE__*/React.createElement(Star, {
      size: size,
      color: "var(--ink-200)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        inset: 0,
        width: fill * 100 + '%',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(Star, {
      size: size,
      color: "var(--coral-500)"
    }))));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, stars), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "(", count, ")") : null);
}
function Star({
  size,
  color
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    stroke: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2.5l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 18.6 6.1 21.3l1.2-6.6L2.5 9.5l6.6-.9z"
  }));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/Rating.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — Badge
 * Small status / metadata pill. Solid or soft tints.
 */
function Badge({
  tone = 'neutral',
  variant = 'soft',
  children,
  style,
  ...rest
}) {
  const map = {
    neutral: {
      soft: ['var(--ink-100)', 'var(--ink-700)'],
      solid: ['var(--ink-700)', '#fff']
    },
    brand: {
      soft: ['var(--blue-50)', 'var(--blue-700)'],
      solid: ['var(--blue-700)', '#fff']
    },
    accent: {
      soft: ['var(--coral-50)', 'var(--coral-700)'],
      solid: ['var(--coral-500)', '#fff']
    },
    success: {
      soft: ['var(--green-100)', 'var(--green-700)'],
      solid: ['var(--green-500)', '#fff']
    },
    warning: {
      soft: ['var(--amber-100)', 'var(--amber-700)'],
      solid: ['var(--amber-500)', '#fff']
    },
    danger: {
      soft: ['var(--red-100)', 'var(--red-700)'],
      solid: ['var(--red-500)', '#fff']
    }
  };
  const [bg, fg] = (map[tone] || map.neutral)[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 400,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-xs)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — Button
 * Primary action control. Confident, squared-but-soft, athletic.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = 'button',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0 14px',
      height: 36,
      fontSize: 13,
      gap: 7
    },
    md: {
      padding: '0 20px',
      height: 44,
      fontSize: 15,
      gap: 8
    },
    lg: {
      padding: '0 28px',
      height: 54,
      fontSize: 16,
      gap: 10
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: s.fontSize,
    letterSpacing: '0.01em',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    userSelect: 'none'
  };
  const variants = {
    primary: {
      background: 'var(--blue-700)',
      color: 'var(--white)'
    },
    accent: {
      background: 'var(--coral-500)',
      color: 'var(--white)'
    },
    secondary: {
      background: 'var(--white)',
      color: 'var(--blue-700)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)'
    },
    inverse: {
      background: 'var(--white)',
      color: 'var(--blue-800)'
    }
  };
  const hovers = {
    primary: 'var(--blue-800)',
    accent: 'var(--coral-600)',
    secondary: 'var(--ink-50)',
    ghost: 'var(--ink-50)',
    inverse: 'var(--blue-50)'
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const vis = {
    ...base,
    ...variants[variant],
    ...style
  };
  if (hover && !disabled) {
    if (variant === 'secondary' || variant === 'ghost' || variant === 'inverse') {
      vis.background = hovers[variant];
    } else {
      vis.background = hovers[variant];
    }
  }
  if (active && !disabled) vis.transform = 'translateY(1px)';
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onClick: disabled ? undefined : onClick
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: vis
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: vis
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — IconButton
 * Square/round icon-only control for toolbars, headers, cards.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  shape = 'square',
  label,
  disabled = false,
  onClick,
  children,
  style,
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderColor: 'transparent'
    },
    soft: {
      background: 'var(--ink-50)',
      color: 'var(--text-primary)',
      borderColor: 'transparent'
    },
    outline: {
      background: 'var(--white)',
      color: 'var(--text-primary)',
      borderColor: 'var(--border-strong)'
    },
    brand: {
      background: 'var(--blue-700)',
      color: 'var(--white)',
      borderColor: 'transparent'
    },
    accent: {
      background: 'var(--coral-500)',
      color: 'var(--white)',
      borderColor: 'transparent'
    }
  };
  const hovers = {
    ghost: 'var(--ink-50)',
    soft: 'var(--ink-100)',
    outline: 'var(--ink-50)',
    brand: 'var(--blue-800)',
    accent: 'var(--coral-600)'
  };
  const [hover, setHover] = React.useState(false);
  const v = variants[variant] || variants.ghost;
  const vis = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: d,
    height: d,
    flex: 'none',
    borderRadius: shape === 'round' ? 'var(--radius-pill)' : 'var(--radius-sm)',
    border: '1px solid ' + v.borderColor,
    background: hover && !disabled ? hovers[variant] : v.background,
    color: v.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-fast) var(--ease-standard)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: disabled ? undefined : onClick,
    style: vis
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — ProductCard
 * Storefront product tile. Composes Badge, PriceTag, Rating & Button.
 */
function ProductCard({
  image,
  media,
  fit = 'cover',
  title,
  category,
  price,
  compareAt,
  currency = 'HK$',
  badge,
  rating,
  reviews,
  onAdd,
  onWishlist,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [wish, setWish] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: onClick ? 'pointer' : 'default',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-3px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 3',
      background: image ? 'var(--white)' : 'var(--sand-100)',
      overflow: 'hidden'
    }
  }, media ? media : image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block',
      padding: fit === 'contain' ? '6%' : 0,
      boxSizing: 'border-box',
      transform: hover ? 'scale(1.04)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink-300)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.1em'
    }
  }, "IMAGE"), badge ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: badge.tone || 'accent',
    variant: "solid"
  }, badge.label)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-fast)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Add to wishlist",
    variant: "soft",
    shape: "round",
    onClick: e => {
      e.stopPropagation();
      setWish(w => !w);
      onWishlist && onWishlist();
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: wish ? 'var(--coral-500)' : 'none',
    stroke: wish ? 'var(--coral-500)' : 'currentColor',
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      padding: 'var(--space-5)'
    }
  }, category ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, category) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), rating != null ? /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 14
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 4,
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceTag, {
    amount: price,
    compareAt: compareAt,
    currency: currency,
    size: "md"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: e => {
      e.stopPropagation();
      onAdd && onAdd();
    }
  }, "Add"))));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — Tag / filter chip
 * Selectable pill used for filters & categories. Optional dismiss.
 */
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const vis = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    height: 34,
    padding: onRemove ? '0 8px 0 14px' : '0 16px',
    fontFamily: 'var(--font-sans)',
    fontSize: 14,
    fontWeight: 500,
    borderRadius: 'var(--radius-pill)',
    border: '1px solid ' + (selected ? 'var(--blue-700)' : 'var(--border-strong)'),
    background: selected ? 'var(--blue-700)' : hover ? 'var(--ink-50)' : 'var(--white)',
    color: selected ? 'var(--white)' : 'var(--text-primary)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all var(--dur-fast) var(--ease-standard)',
    whiteSpace: 'nowrap',
    userSelect: 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: vis,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 18,
      height: 18,
      border: 0,
      borderRadius: '50%',
      background: selected ? 'rgba(255,255,255,0.2)' : 'var(--ink-100)',
      color: 'inherit',
      cursor: 'pointer',
      fontSize: 13,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — Checkbox
 * Square check control with label. Controlled or uncontrolled.
 */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      userSelect: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: '1.5px solid ' + (on ? 'var(--blue-700)' : 'var(--border-strong)'),
      background: on ? 'var(--blue-700)' : 'var(--white)',
      color: '#fff',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, on ? /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })) : null), label ? /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — Input
 * Text field with optional label, leading/trailing nodes & error.
 */
function Input({
  label,
  hint,
  error,
  leading,
  trailing,
  size = 'md',
  type = 'text',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--red-500)' : focus ? 'var(--blue-500)' : 'var(--border-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: 'var(--white)',
      border: '1px solid ' + borderColor,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? error ? 'var(--shadow-focus-accent)' : 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, leading ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, leading) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      minWidth: 0
    }
  }, rest)), trailing ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, trailing) : null), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--red-700)',
      fontFamily: 'var(--font-sans)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/QuantityStepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — QuantityStepper
 * −/+ stepper for cart & product quantity.
 */
function QuantityStepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 99,
  onChange,
  size = 'md',
  style,
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue);
  const v = isControlled ? value : internal;
  const set = next => {
    const clamped = Math.max(min, Math.min(max, next));
    if (!isControlled) setInternal(clamped);
    onChange && onChange(clamped);
  };
  const h = size === 'sm' ? 36 : 44;
  const btn = {
    width: h,
    height: h,
    flex: 'none',
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    color: 'var(--text-primary)',
    fontSize: 18,
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-sans)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--white)',
      overflow: 'hidden',
      height: h,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Decrease",
    style: btn,
    onClick: () => set(v - 1),
    disabled: v <= min
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 36,
      textAlign: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontVariantNumeric: 'tabular-nums',
      color: 'var(--text-primary)',
      borderLeft: '1px solid var(--border-default)',
      borderRight: '1px solid var(--border-default)',
      height: h,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 6px'
    }
  }, v), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Increase",
    style: btn,
    onClick: () => set(v + 1),
    disabled: v >= max
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * T8 Fitness — Select
 * Native select styled to match Input, with chevron affordance.
 */
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const heights = {
    sm: 38,
    md: 46,
    lg: 54
  };
  const h = heights[size] || heights.md;
  const selId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-primary)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      padding: '0 40px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      background: 'var(--white)',
      color: 'var(--text-primary)',
      border: '1px solid ' + (focus ? 'var(--blue-500)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      cursor: 'pointer',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lab = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val
    }, lab);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, "\u25BE")), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
/* T8 Fitness storefront — Cart drawer (slide-over) */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const {
    Button,
    QuantityStepper,
    IconButton
  } = DS;
  function CartDrawer({
    open,
    items,
    onClose,
    setQty,
    removeItem,
    go
  }) {
    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
    const free = subtotal >= 2000;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 800,
        background: 'var(--overlay-scrim)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'auto' : 'none',
        transition: 'opacity var(--dur-base) var(--ease-standard)'
      }
    }), /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: 'min(440px, 92vw)',
        zIndex: 900,
        background: 'var(--white)',
        boxShadow: 'var(--shadow-xl)',
        display: 'flex',
        flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform var(--dur-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '22px 24px',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 22,
        letterSpacing: '-0.02em'
      }
    }, "Your cart (", items.reduce((s, i) => s + i.qty, 0), ")"), /*#__PURE__*/React.createElement(IconButton, {
      label: "Close",
      variant: "ghost",
      onClick: onClose
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "x",
      s: 22
    }))), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'grid',
        placeItems: 'center',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        textAlign: 'center',
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(window.Ico, {
      n: "shopping-bag",
      s: 40,
      color: "var(--ink-300)"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 14
      }
    }, "Your cart is empty."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => {
        onClose();
        go('collection');
      }
    }, "Browse apparatus")))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '8px 24px'
      }
    }, items.map(i => /*#__PURE__*/React.createElement("div", {
      key: i.id,
      style: {
        display: 'flex',
        gap: 14,
        padding: '18px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 84,
        height: 84,
        flex: 'none',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        background: 'var(--white)',
        border: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: i.image,
      alt: i.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: i.fit || 'contain',
        padding: i.fit === 'cover' ? 0 : '8%',
        boxSizing: 'border-box',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 1.2
      }
    }, i.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '.08em',
        marginTop: 3
      }
    }, i.category), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(QuantityStepper, {
      value: i.qty,
      min: 1,
      max: 10,
      size: "sm",
      onChange: q => setQty(i.id, q)
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16
      }
    }, fmt(i.price * i.qty)))), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeItem(i.id),
      "aria-label": "Remove",
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        color: 'var(--text-muted)',
        alignSelf: 'flex-start',
        padding: 2
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "trash-2",
      s: 16
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px 24px',
        borderTop: '1px solid var(--border-default)',
        background: 'var(--sand-50)'
      }
    }, !free ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-secondary)',
        marginBottom: 14,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "truck",
      s: 15,
      color: "var(--blue-700)"
    }), " Add ", fmt(2000 - subtotal), " for free HK delivery") : /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--green-700)',
        marginBottom: 14,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "check-circle-2",
      s: 15,
      color: "var(--green-700)"
    }), " You've unlocked free HK delivery"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        color: 'var(--text-secondary)'
      }
    }, "Subtotal"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        letterSpacing: '-0.02em'
      }
    }, fmt(subtotal))), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      fullWidth: true
    }, "Checkout"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        display: 'block',
        width: '100%',
        marginTop: 12,
        background: 'none',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--text-secondary)'
      }
    }, "Continue shopping")))));
  }
  function fmt(n) {
    return 'HK$' + Number(n).toLocaleString('en-US');
  }
  window.CartDrawer = CartDrawer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Collection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* T8 Fitness storefront — Collection / listing screen */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const {
    ProductCard,
    Tag,
    Checkbox,
    Select,
    Badge
  } = DS;
  function Collection({
    go,
    addToCart
  }) {
    const [cat, setCat] = React.useState('All');
    const [inStock, setInStock] = React.useState(false);
    const [onSale, setOnSale] = React.useState(false);
    const [sort, setSort] = React.useState('Featured');
    let items = window.T8_PRODUCTS.filter(p => cat === 'All' || p.category === cat);
    if (onSale) items = items.filter(p => p.compareAt);
    if (sort === 'Price: low to high') items = [...items].sort((a, b) => a.price - b.price);
    if (sort === 'Price: high to low') items = [...items].sort((a, b) => b.price - a.price);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--white)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t8-container",
      style: {
        padding: '28px var(--container-pad) 32px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.08em',
        color: 'var(--text-muted)',
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go('home'),
      style: {
        cursor: 'pointer'
      }
    }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-primary)'
      }
    }, cat === 'All' ? 'All apparatus' : cat)), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(30px,3.6vw,46px)',
        letterSpacing: '-0.025em',
        marginTop: 14
      }
    }, cat === 'All' ? 'All apparatus' : cat), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 8,
        color: 'var(--text-secondary)',
        fontSize: 16,
        maxWidth: 560
      }
    }, "Reformers, towers, chairs and barrels engineered for studios and serious home practitioners."))), /*#__PURE__*/React.createElement("div", {
      className: "t8-container",
      style: {
        display: 'grid',
        gridTemplateColumns: '248px 1fr',
        gap: 40,
        padding: '36px var(--container-pad) 80px',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("aside", {
      style: {
        position: 'sticky',
        top: 96,
        display: 'flex',
        flexDirection: 'column',
        gap: 28
      }
    }, /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Category"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8
      }
    }, window.T8_CATEGORIES.map(c => /*#__PURE__*/React.createElement(Tag, {
      key: c,
      selected: cat === c,
      onClick: () => setCat(c)
    }, c)))), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Availability"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "In stock only",
      checked: inStock,
      onChange: setInStock
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "On sale",
      checked: onSale,
      onChange: setOnSale
    }))), /*#__PURE__*/React.createElement(FilterGroup, {
      title: "Price range"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Under HK$2,000"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "HK$2,000 \u2013 10,000"
    }), /*#__PURE__*/React.createElement(Checkbox, {
      label: "HK$10,000+"
    })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'var(--text-muted)'
      }
    }, items.length, " products"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 230
      }
    }, /*#__PURE__*/React.createElement(Select, {
      options: ['Featured', 'Price: low to high', 'Price: high to low', 'Newest'],
      value: sort,
      onChange: e => setSort(e.target.value)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }
    }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: p.id
    }, p, {
      fit: p.fit || 'contain',
      onClick: () => go('product', p.id),
      onAdd: () => addToCart(p)
    })))))));
  }
  function FilterGroup({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)',
        marginBottom: 14,
        paddingBottom: 10,
        borderBottom: '1px solid var(--border-default)'
      }
    }, title), children);
  }
  window.Collection = Collection;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Collection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* T8 Fitness storefront — Home screen */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const {
    Button,
    Badge,
    ProductCard,
    Tag
  } = DS;
  function Hero({
    go
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--blue-950)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t8-container",
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 48,
        alignItems: 'center',
        padding: '72px var(--container-pad) 80px'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.2em',
        textTransform: 'uppercase',
        color: 'var(--coral-400)'
      }
    }, "Home of Align-Pilates \xB7 Hong Kong"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(44px, 5.6vw, 74px)',
        lineHeight: 0.98,
        letterSpacing: '-0.03em',
        margin: '20px 0 0',
        color: '#fff'
      }
    }, "Equip the way you move."), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 22,
        fontSize: 18,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,0.78)',
        maxWidth: 460
      }
    }, "Studio-grade reformers, towers and apparatus \u2014 engineered to hold their calibration for years and trusted by Pilates studios across Asia."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      onClick: () => go('collection'),
      iconRight: /*#__PURE__*/React.createElement(window.Ico, {
        n: "arrow-right",
        s: 18,
        color: "#fff"
      })
    }, "Shop reformers"), /*#__PURE__*/React.createElement(Button, {
      variant: "inverse",
      size: "lg",
      onClick: () => go('collection')
    }, "Browse collections")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 36,
        marginTop: 44
      }
    }, [['15+ yrs', 'Supplying studios'], ['5-year', 'Frame warranty'], ['48 hr', 'HK assembly']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
      key: a
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 26,
        letterSpacing: '-0.02em'
      }
    }, a), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)',
        marginTop: 4
      }
    }, b))))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '5 / 4',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-xl)',
        background: 'var(--ink-100)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.T8_HERO_IMG,
      alt: "C8-Pro reformer in a studio",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: -18,
        left: -18,
        background: 'var(--coral-500)',
        color: '#fff',
        padding: '14px 18px',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        opacity: 0.85
      }
    }, "From"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 24,
        letterSpacing: '-0.02em'
      }
    }, "HK$9,450")))));
  }
  function ValueProps() {
    const items = [['truck', 'Free HK delivery', 'On studio orders over HK$2,000, with white-glove assembly.'], ['shield-check', '5-year frame warranty', 'Aircraft-grade aluminium, built to outlast a decade of classes.'], ['ruler', 'Sizing support', 'Talk to our specialists before you fit out a studio.'], ['repeat', '30-day returns', 'Unused accessories, returned simply within 30 days.']];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--white)',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t8-container",
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 28,
        padding: '36px var(--container-pad)'
      }
    }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: 'flex',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--blue-700)',
        flex: 'none'
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: ic,
      s: 24,
      color: "var(--blue-700)"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-secondary)',
        lineHeight: 1.5,
        marginTop: 3
      }
    }, d))))));
  }
  function Featured({
    go,
    addToCart
  }) {
    const featured = window.T8_PRODUCTS.slice(0, 4);
    return /*#__PURE__*/React.createElement("section", {
      className: "t8-container",
      style: {
        padding: '72px var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginBottom: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: 'var(--coral-600)'
      }
    }, "Best sellers"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(28px,3.4vw,42px)',
        letterSpacing: '-0.025em',
        marginTop: 8
      }
    }, "Studio favourites")), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('collection'),
      iconRight: /*#__PURE__*/React.createElement(window.Ico, {
        n: "arrow-right",
        s: 16
      })
    }, "View all")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24
      }
    }, featured.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: p.id
    }, p, {
      fit: p.fit || 'contain',
      onClick: () => go('product', p.id),
      onAdd: () => addToCart(p)
    })))));
  }
  function CategoryStrip({
    go
  }) {
    const cats = ['Reformers', 'Towers & Cadillacs', 'Chairs', 'Barrels'];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--sand-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t8-container",
      style: {
        padding: '64px var(--container-pad)'
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 32,
        letterSpacing: '-0.025em',
        marginBottom: 28
      }
    }, "Shop by apparatus"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20
      }
    }, cats.map(c => /*#__PURE__*/React.createElement("a", {
      key: c,
      onClick: () => go('collection'),
      style: {
        cursor: 'pointer',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '1 / 1',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        background: 'var(--white)',
        border: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: window.T8_CATEGORY_IMG[c],
      alt: c,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        padding: '12%',
        boxSizing: 'border-box',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17
      }
    }, c), /*#__PURE__*/React.createElement(window.Ico, {
      n: "arrow-up-right",
      s: 18,
      color: "var(--blue-700)"
    })))))));
  }
  function Newsletter() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--blue-700)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "t8-container",
      style: {
        padding: '56px var(--container-pad)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 32,
        letterSpacing: '-0.025em'
      }
    }, "Discounts & early access"), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 12,
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
        maxWidth: 420
      }
    }, "Join the VIP list for first look at new apparatus, studio pricing and seasonal promotions.")), /*#__PURE__*/React.createElement("form", {
      onSubmit: e => e.preventDefault(),
      style: {
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Email address",
      style: {
        flex: 1,
        height: 54,
        borderRadius: 'var(--radius-sm)',
        border: 0,
        padding: '0 18px',
        fontFamily: 'var(--font-sans)',
        fontSize: 16
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      type: "submit"
    }, "Sign up"))));
  }
  function Home({
    go,
    addToCart
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
      go: go
    }), /*#__PURE__*/React.createElement(ValueProps, null), /*#__PURE__*/React.createElement(Featured, {
      go: go,
      addToCart: addToCart
    }), /*#__PURE__*/React.createElement(CategoryStrip, {
      go: go
    }), /*#__PURE__*/React.createElement(Newsletter, null));
  }
  window.Home = Home;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Parts.jsx
try { (() => {
/* T8 Fitness storefront — shared parts (Logo, Header, Footer, PhotoFrame, Ico) */
const {
  IconButton,
  Badge,
  Button
} = window.T8FitnessDesignSystem_ce2827;

/* Lucide icon helper */
function Ico({
  n,
  s = 20,
  color = 'currentColor',
  strokeWidth = 2
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current && window.lucide) {
      ref.current.innerHTML = '';
      const el = document.createElement('i');
      el.setAttribute('data-lucide', n);
      ref.current.appendChild(el);
      window.lucide.createIcons({
        attrs: {
          width: s,
          height: s,
          stroke: color,
          'stroke-width': strokeWidth
        }
      });
    }
  }, [n, s, color, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: {
      display: 'inline-flex',
      lineHeight: 0
    }
  });
}

/* Social brand glyphs (Lucide dropped brand icons from core) */
const SOCIAL_PATHS = {
  instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.4",
    cy: "6.6",
    r: "1.2",
    fill: "currentColor"
  })),
  facebook: /*#__PURE__*/React.createElement("path", {
    d: "M14.5 8.5h2V5.7h-2.3c-2 0-3.2 1.2-3.2 3.3v1.8H9v2.8h2V21h2.9v-7.4h2.1l.4-2.8h-2.5V9.4c0-.6.3-.9 1.1-.9z",
    fill: "currentColor"
  }),
  youtube: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "5.5",
    width: "20",
    height: "13",
    rx: "4",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.2 9.2l4.6 2.8-4.6 2.8z",
    fill: "currentColor"
  }))
};
function Social({
  n,
  s = 18
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    style: {
      display: 'block'
    }
  }, SOCIAL_PATHS[n]);
}

/* Wordmark lockup */
function Logo({
  height = 30,
  light = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: height * 0.28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: light ? '../../assets/logos/t8-mark-white.png' : '../../assets/logos/t8-mark-navy.png',
    alt: "T8",
    style: {
      height,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: height * 0.95,
      letterSpacing: '-0.03em',
      lineHeight: 1,
      color: light ? 'var(--white)' : 'var(--blue-700)'
    }
  }, "fitness"));
}

/* Branded photo placeholder — honest stand-in for real product photography */
function PhotoFrame({
  tint = '#1f3a52',
  label = 'Product photography',
  aspect = '4 / 3',
  radius = 'var(--radius-lg)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      width: '100%',
      borderRadius: radius,
      overflow: 'hidden',
      background: `linear-gradient(150deg, var(--sand-100), var(--sand-200))`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: tint,
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/t8-mark-ink.png",
    alt: "",
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: '34%',
      opacity: 0.10
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'var(--ink-500)'
    }
  }, label));
}

/* Top announcement + header nav */
function Header({
  route,
  go,
  cartCount,
  onCart,
  onSearch
}) {
  const nav = ['Products', 'Collections', 'Delivery', 'Sale', 'Blog', 'Wholesale'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue-950)',
      color: 'rgba(255,255,255,0.86)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: '9px 16px'
    }
  }, "Free delivery on Hong Kong studio orders over HK$2,000"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t8-container",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      height: 76
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 30
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 12,
      flex: 1
    }
  }, nav.map(n => {
    const active = n === 'Collections' && route === 'collection';
    return /*#__PURE__*/React.createElement("a", {
      key: n,
      onClick: () => go(n === 'Collections' || n === 'Products' || n === 'Sale' ? 'collection' : 'collection'),
      style: {
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: '.02em',
        textTransform: 'uppercase',
        color: active ? 'var(--blue-700)' : 'var(--text-secondary)',
        paddingBottom: 4,
        borderBottom: '2px solid ' + (active ? 'var(--coral-500)' : 'transparent'),
        transition: 'color var(--dur-fast)'
      }
    }, n === 'Sale' ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--coral-600)'
      }
    }, "Sale") : n);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search",
    variant: "ghost",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "search"
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Account",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "user"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Cart",
    variant: "ghost",
    onClick: onCart
  }, /*#__PURE__*/React.createElement(Ico, {
    n: "shopping-bag"
  })), cartCount > 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2,
      minWidth: 18,
      height: 18,
      padding: '0 5px',
      background: 'var(--coral-500)',
      color: '#fff',
      borderRadius: 999,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginLeft: 8
    }
  }, "EN \xB7 \u4E2D\u6587")))));
}

/* Footer */
function Footer() {
  const cols = [['Shop', ['Reformers', 'Towers & Cadillacs', 'Chairs', 'Barrels', 'Accessories']], ['Support', ['Delivery & assembly', 'Sizing guide', 'Warranty', 'Returns', 'Contact']], ['Company', ['About T8', 'Wholesale', 'Studios we supply', 'Blog', 'Careers']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--blue-950)',
      color: 'rgba(255,255,255,0.72)',
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t8-container",
    style: {
      padding: '56px var(--container-pad) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 28,
    light: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 280,
      color: 'rgba(255,255,255,0.6)'
    }
  }, "Studio-grade movement equipment, properly fitted and built to last. Home of Align-Pilates in Hong Kong since 2009."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, ['instagram', 'facebook', 'youtube'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      border: '1px solid rgba(255,255,255,0.16)',
      display: 'grid',
      placeItems: 'center',
      color: 'rgba(255,255,255,0.8)'
    }
  }, /*#__PURE__*/React.createElement(Social, {
    n: s,
    s: 18
  }))))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'rgba(255,255,255,0.72)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      paddingTop: 22,
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.45)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 T8 Fitness Ltd. \xB7 t8fitness.com"), /*#__PURE__*/React.createElement("span", null, "Hong Kong \xB7 Singapore \xB7 Shipping across Asia-Pacific"))));
}
Object.assign(window, {
  Ico,
  Logo,
  PhotoFrame,
  Header,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Product.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* T8 Fitness storefront — Product detail screen */
(function () {
  const DS = window.T8FitnessDesignSystem_ce2827;
  const {
    Button,
    Badge,
    Rating,
    PriceTag,
    QuantityStepper,
    IconButton
  } = DS;
  function Product({
    id,
    go,
    addToCart
  }) {
    const p = window.T8_PRODUCTS.find(x => x.id === id) || window.T8_PRODUCTS[0];
    const [qty, setQty] = React.useState(1);
    const [tab, setTab] = React.useState('Description');
    const [activeImg, setActiveImg] = React.useState(0);
    React.useEffect(() => {
      setActiveImg(0);
    }, [id]);
    const imgs = p.images || [p.image];
    const idx = Math.min(activeImg, imgs.length - 1);
    const pad = p.fit === 'cover' ? 0 : '7%';
    const tabs = ['Description', 'Specifications', 'Delivery & assembly'];
    return /*#__PURE__*/React.createElement("div", {
      className: "t8-container",
      style: {
        padding: '28px var(--container-pad) 80px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--text-muted)',
        display: 'flex',
        gap: 8,
        marginBottom: 28
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => go('home'),
      style: {
        cursor: 'pointer'
      }
    }, "Home"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
      onClick: () => go('collection'),
      style: {
        cursor: 'pointer'
      }
    }, p.category), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-primary)'
      }
    }, p.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 56,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        position: 'sticky',
        top: 96
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        aspectRatio: '1 / 1',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: 'var(--white)',
        border: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: imgs[idx],
      alt: p.title,
      style: {
        width: '100%',
        height: '100%',
        objectFit: p.fit || 'contain',
        padding: pad,
        boxSizing: 'border-box',
        display: 'block'
      }
    })), imgs.length > 1 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(imgs.length, 4)},1fr)`,
        gap: 12
      }
    }, imgs.map((src, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => setActiveImg(i),
      style: {
        cursor: 'pointer',
        aspectRatio: '1 / 1',
        borderRadius: 'var(--radius-md)',
        background: 'var(--white)',
        outline: idx === i ? '2px solid var(--blue-700)' : '1px solid var(--border-default)',
        outlineOffset: idx === i ? 0 : -1,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: p.fit || 'contain',
        padding: p.fit === 'cover' ? 0 : '10%',
        boxSizing: 'border-box',
        display: 'block'
      }
    })))) : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--coral-600)'
      }
    }, p.category), p.badge ? /*#__PURE__*/React.createElement(Badge, {
      tone: p.badge.tone,
      variant: "solid"
    }, p.badge.label) : null), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 'clamp(28px,3.4vw,40px)',
        letterSpacing: '-0.025em',
        lineHeight: 1.05,
        margin: '14px 0 0'
      }
    }, p.title), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(Rating, {
      value: p.rating,
      count: p.reviews,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(PriceTag, {
      amount: p.price,
      compareAt: p.compareAt,
      size: "xl"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 20,
        fontSize: 17,
        lineHeight: 1.6,
        color: 'var(--text-secondary)'
      }
    }, p.blurb), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26,
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 10
      }
    }, "Frame finish"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, [['Silver', '#c7ccd1'], ['Graphite', '#3a4452'], ['Black', '#16202a']].map(([n, c], i) => /*#__PURE__*/React.createElement(Swatch, {
      key: n,
      name: n,
      color: c,
      defaultActive: i === 0
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 10
      }
    }, "Quantity"), /*#__PURE__*/React.createElement(QuantityStepper, {
      value: qty,
      min: 1,
      max: 10,
      onChange: setQty,
      size: "md"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'var(--green-700)',
        paddingBottom: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "check-circle-2",
      s: 15,
      color: "var(--green-700)"
    }), " In stock \xB7 ships in 48 hrs"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "accent",
      size: "lg",
      style: {
        flex: 1
      },
      onClick: () => addToCart(p, qty),
      iconLeft: /*#__PURE__*/React.createElement(window.Ico, {
        n: "shopping-bag",
        s: 18,
        color: "#fff"
      })
    }, "Add to cart \xB7 ", fmt(p.price * qty)), /*#__PURE__*/React.createElement(IconButton, {
      label: "Add to wishlist",
      variant: "outline",
      size: "lg"
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "heart",
      s: 20
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 24,
        marginTop: 22,
        paddingTop: 22,
        borderTop: '1px solid var(--border-subtle)',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 7,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "truck",
      s: 16,
      color: "var(--blue-700)"
    }), " Free HK delivery"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 7,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "shield-check",
      s: 16,
      color: "var(--blue-700)"
    }), " ", p.specs[5][1], " warranty"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 7,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(window.Ico, {
      n: "wrench",
      s: 16,
      color: "var(--blue-700)"
    }), " Pro assembly")))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 64,
        borderTop: '1px solid var(--border-default)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        borderBottom: '1px solid var(--border-default)'
      }
    }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => setTab(t),
      style: {
        background: 'none',
        border: 0,
        cursor: 'pointer',
        padding: '18px 4px',
        marginRight: 24,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: tab === t ? 'var(--text-primary)' : 'var(--text-muted)',
        borderBottom: '2px solid ' + (tab === t ? 'var(--coral-500)' : 'transparent'),
        marginBottom: -1
      }
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '32px 0',
        maxWidth: 760
      }
    }, tab === 'Description' ? /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: 'var(--text-secondary)'
      }
    }, p.blurb, " Every unit is workshop-tested before dispatch and backed by our Hong Kong service team. Replacement springs, straps and footbar parts are kept in stock for the lifetime of the apparatus.") : tab === 'Specifications' ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0 56px',
        maxWidth: 640
      }
    }, p.specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '13px 0',
        borderBottom: '1px dashed var(--border-default)',
        fontFamily: 'var(--font-mono)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--text-primary)'
      }
    }, v)))) : /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 17,
        lineHeight: 1.7,
        color: 'var(--text-secondary)'
      }
    }, "Free white-glove delivery and assembly across Hong Kong on orders over HK$2,000. Our team will position, level and calibrate the apparatus in your studio. Outlying islands and Asia-Pacific shipping quoted at checkout. Assembly typically completed within 48 hours of delivery."))), /*#__PURE__*/React.createElement(Related, {
      go: go,
      addToCart: addToCart,
      exclude: p.id
    }));
  }
  function Swatch({
    name,
    color,
    defaultActive
  }) {
    const [active, setActive] = React.useState(defaultActive);
    return /*#__PURE__*/React.createElement("button", {
      onClick: () => setActive(true),
      title: name,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '7px 14px 7px 8px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        background: 'var(--white)',
        border: '1px solid ' + (active ? 'var(--blue-700)' : 'var(--border-strong)'),
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: color,
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.12)'
      }
    }), name);
  }
  function Related({
    go,
    addToCart,
    exclude
  }) {
    const {
      ProductCard
    } = window.T8FitnessDesignSystem_ce2827;
    const items = window.T8_PRODUCTS.filter(x => x.id !== exclude).slice(0, 4);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        marginTop: 72
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 30,
        letterSpacing: '-0.025em',
        marginBottom: 26
      }
    }, "You may also like"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 24
      }
    }, items.map(p => /*#__PURE__*/React.createElement(ProductCard, _extends({
      key: p.id
    }, p, {
      fit: p.fit || 'contain',
      onClick: () => go('product', p.id),
      onAdd: () => addToCart(p)
    })))));
  }
  function fmt(n) {
    return 'HK$' + Number(n).toLocaleString('en-US');
  }
  window.Product = Product;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/data.js
try { (() => {
/* T8 Fitness storefront — real Align-Pilates catalogue (images from t8-assets) */
const IMG = '../../assets/products/';
window.T8_PRODUCTS = [{
  id: 'a8-pro',
  category: 'Reformers',
  title: 'Align A8-Pro Reformer',
  price: 18900,
  compareAt: 21500,
  rating: 4.5,
  reviews: 32,
  badge: {
    label: 'Sale',
    tone: 'accent'
  },
  image: IMG + 'a8-pro.jpg',
  images: [IMG + 'a8-pro.jpg', IMG + 'a8-pro-2.jpg', IMG + 'a8-pro-3.jpg', IMG + 'a8-pro-4.jpg'],
  blurb: 'The studio-standard A8-Pro: a silver aircraft-grade aluminium frame, ultra-smooth carriage travel and a four-spring resistance system trusted by Pilates studios across Asia.',
  specs: [['Frame length', '243 cm'], ['Carriage springs', '4'], ['Footbar', '4-position'], ['Max user load', '150 kg'], ['Net weight', '62 kg'], ['Warranty', '5 years']],
  color: '#3a4452'
}, {
  id: 'c8-noir',
  category: 'Reformers',
  title: 'C8-Pro Reformer — Noir / Black',
  price: 27800,
  rating: 5,
  reviews: 11,
  badge: {
    label: 'New',
    tone: 'brand'
  },
  fit: 'cover',
  image: IMG + 'c8-noir.jpg',
  images: [IMG + 'c8-noir.jpg', IMG + 'c8-noir-2.jpg', IMG + 'c8-noir-3.jpg'],
  blurb: 'The C8-Pro in a full Noir/Black finish — a statement studio reformer with a powder-coated frame, sealed bearings and the smoothest ride in the range.',
  specs: [['Frame length', '249 cm'], ['Carriage springs', '5'], ['Footbar', '4-position'], ['Max user load', '150 kg'], ['Net weight', '74 kg'], ['Warranty', '5 years']],
  color: '#16202a'
}, {
  id: 'c8-cadillac',
  category: 'Towers & Cadillacs',
  title: 'C8-Pro Reformer with Full Cadillac',
  price: 32500,
  rating: 5,
  reviews: 7,
  badge: null,
  image: IMG + 'c8-cadillac.jpg',
  images: [IMG + 'c8-cadillac.jpg'],
  blurb: 'A complete reformer-Cadillac combination: chrome trapeze frame, push-through bar and full spring set over the C8-Pro carriage. The studio centrepiece.',
  specs: [['Footprint', '249 × 78 cm'], ['Tower height', '214 cm'], ['Push-through bar', 'Yes'], ['Max user load', '150 kg'], ['Net weight', '118 kg'], ['Warranty', '5 years']],
  color: '#2b3744'
}, {
  id: 'a2-cadillac',
  category: 'Towers & Cadillacs',
  title: 'A2 Pilates Cadillac',
  price: 24900,
  compareAt: 27900,
  rating: 4.5,
  reviews: 14,
  badge: {
    label: 'Sale',
    tone: 'accent'
  },
  image: IMG + 'a2-cadillac.jpg',
  images: [IMG + 'a2-cadillac.jpg'],
  blurb: 'A full Cadillac / trapeze table with fuzzy loops, roll-down bar, push-through bar and leg springs — the complete classical apparatus for clinical and studio work.',
  specs: [['Bed length', '218 cm'], ['Frame height', '208 cm'], ['Push-through bar', 'Yes'], ['Max user load', '160 kg'], ['Net weight', '96 kg'], ['Warranty', '5 years']],
  color: '#2e3a47'
}, {
  id: 'f3',
  category: 'Reformers',
  title: 'F3 Home Folding Reformer',
  price: 9450,
  rating: 4,
  reviews: 47,
  badge: null,
  image: IMG + 'f3-reformer.jpg',
  images: [IMG + 'f3-reformer.jpg'],
  blurb: 'A home reformer that folds flat for storage without compromising the carriage glide. Ideal for serious home practitioners and compact spaces.',
  specs: [['Folded depth', '38 cm'], ['Carriage springs', '3'], ['Footbar', '3-position'], ['Max user load', '135 kg'], ['Net weight', '34 kg'], ['Warranty', '2 years']],
  color: '#33414f'
}, {
  id: 'combo-chair',
  category: 'Chairs',
  title: 'Combo Chair III',
  price: 6200,
  compareAt: 7100,
  rating: 4.5,
  reviews: 19,
  badge: {
    label: 'Sale',
    tone: 'accent'
  },
  image: IMG + 'combo-chair.jpg',
  images: [IMG + 'combo-chair.jpg'],
  blurb: 'A dual-pedal combo chair with split-pedal capability and tall handles for advanced repertoire and rehabilitation programmes. Maple ply with a powder-coated frame.',
  specs: [['Pedal', 'Split / single'], ['Springs', '4 graduated'], ['Handles', 'Included'], ['Max user load', '140 kg'], ['Net weight', '28 kg'], ['Warranty', '2 years']],
  color: '#46403a'
}, {
  id: 'ladder-barrel',
  category: 'Barrels',
  title: 'Ladder Barrel RC',
  price: 4980,
  rating: 5,
  reviews: 8,
  badge: null,
  image: IMG + 'ladder-barrel.jpg',
  images: [IMG + 'ladder-barrel.jpg'],
  blurb: 'Solid-beech ladder barrel for spinal extension, stretching and advanced mat work. Adjustable rung-to-barrel distance. A studio classic, beautifully finished.',
  specs: [['Barrel height', '88 cm'], ['Ladder rungs', '4'], ['Adjustable', 'Yes'], ['Max user load', '150 kg'], ['Net weight', '24 kg'], ['Warranty', '5 years']],
  color: '#4a4038'
}, {
  id: 'arc-barrel',
  category: 'Barrels',
  title: 'Stacking Arc Barrel',
  price: 1480,
  rating: 4.5,
  reviews: 23,
  badge: null,
  image: IMG + 'arc-barrel.jpg',
  images: [IMG + 'arc-barrel.jpg'],
  blurb: 'A versatile stackable arc for spinal articulation and core work — equally at home in the studio or the living room. Nests for easy storage.',
  specs: [['Length', '92 cm'], ['Arc height', '34 cm'], ['Cover', 'PU, wipe-clean'], ['Max user load', '120 kg'], ['Net weight', '6 kg'], ['Warranty', '1 year']],
  color: '#3c4148'
}, {
  id: 'step-barrel',
  category: 'Barrels',
  title: 'Step Barrel III',
  price: 1280,
  rating: 4.5,
  reviews: 17,
  badge: null,
  image: IMG + 'step-barrel.jpg',
  images: [IMG + 'step-barrel.jpg'],
  blurb: 'A combined step and spine corrector for graduated extension and abdominal work. Upholstered top over a stable ply base.',
  specs: [['Length', '90 cm'], ['Step height', '36 cm'], ['Cover', 'PU, wipe-clean'], ['Max user load', '120 kg'], ['Net weight', '9 kg'], ['Warranty', '1 year']],
  color: '#42413c'
}, {
  id: 'sitting-box',
  category: 'Accessories',
  title: 'Pilates Sitting Box',
  price: 1180,
  rating: 4,
  reviews: 14,
  badge: null,
  image: IMG + 'sitting-box.jpg',
  images: [IMG + 'sitting-box.jpg'],
  blurb: 'High-density long box with foot-strap, sized to the A-series carriage. The essential accessory for box repertoire.',
  specs: [['Dimensions', '66 × 40 × 30 cm'], ['Foot strap', 'Included'], ['Cover', 'Vinyl'], ['Max user load', '150 kg'], ['Net weight', '5 kg'], ['Warranty', '1 year']],
  color: '#3a4048'
}, {
  id: 'rotational-discs',
  category: 'Accessories',
  title: 'Pilates Rotational Discs',
  price: 680,
  compareAt: 820,
  rating: 4.5,
  reviews: 41,
  badge: {
    label: 'Sale',
    tone: 'accent'
  },
  image: IMG + 'rotational-discs.jpg',
  images: [IMG + 'rotational-discs.jpg'],
  blurb: 'A pair of smooth-turning rotational discs for oblique and rotational work, on the reformer or the mat.',
  specs: [['Diameter', '24 cm'], ['Pack', '2 discs'], ['Bearing', 'Sealed'], ['Surface', 'Non-slip'], ['Net weight', '1.4 kg'], ['Warranty', '1 year']],
  color: '#3e4750'
}, {
  id: 'planking-handles',
  category: 'Accessories',
  title: 'Pilates Planking Handles',
  price: 540,
  rating: 4.5,
  reviews: 28,
  badge: null,
  image: IMG + 'planking-handles.jpg',
  images: [IMG + 'planking-handles.jpg'],
  blurb: 'Padded planking handles that clip to the carriage for plank, pike and push-up repertoire while protecting the wrists.',
  specs: [['Pack', '2 handles'], ['Padding', 'High-density'], ['Fitting', 'Carriage clip'], ['Compatible', 'A / C series'], ['Net weight', '1.1 kg'], ['Warranty', '1 year']],
  color: '#3a444e'
}, {
  id: 'loop-straps',
  category: 'Accessories',
  title: 'Silent Double Loop Straps (Pair)',
  price: 360,
  rating: 4.5,
  reviews: 62,
  badge: null,
  image: IMG + 'loop-straps.jpg',
  images: [IMG + 'loop-straps.jpg'],
  blurb: 'Quiet, washable double-loop straps for hands and feet — a smooth, low-noise upgrade for any reformer.',
  specs: [['Pack', '1 pair'], ['Loops', 'Double'], ['Material', 'Washable webbing'], ['Noise', 'Silent runner'], ['Net weight', '0.4 kg'], ['Warranty', '1 year']],
  color: '#414a52'
}];
window.T8_CATEGORIES = ['All', 'Reformers', 'Towers & Cadillacs', 'Chairs', 'Barrels', 'Accessories'];

/* representative image per category (white-bg cut-outs) for tiles */
window.T8_CATEGORY_IMG = {
  'Reformers': IMG + 'a8-pro.jpg',
  'Towers & Cadillacs': IMG + 'c8-cadillac.jpg',
  'Chairs': IMG + 'combo-chair.jpg',
  'Barrels': IMG + 'ladder-barrel.jpg'
};
window.T8_HERO_IMG = IMG + 'c8-noir.jpg';
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/data.js", error: String((e && e.message) || e) }); }

__ds_ns.PriceTag = __ds_scope.PriceTag;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Select = __ds_scope.Select;

})();
