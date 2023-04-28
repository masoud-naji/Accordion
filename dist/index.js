'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  color-scheme: dark;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-content: center;\r\n  min-height: 100vh;\r\n\r\n  margin: 0;\r\n  font-family: system-ui;\r\n  font-size: 1.125rem;\r\n  line-height: 1.6;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n.wrapper {\r\n  max-width: 50rem;\r\n  margin-inline: auto;\r\n  padding-inline: 1rem;\r\n}\r\n\r\n.accordion {\r\n  --_button-size: 3rem;\r\n  --_panel-padding: 0.75rem;\r\n  --_panel-gap: 1rem;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n@media (min-width: 45em) {\r\n  .accordion {\r\n    flex-direction: row;\r\n    height: 30rem;\r\n  }\r\n}\r\n\r\n.accordion * {\r\n  margin: 0;\r\n}\r\n\r\n.accordion-panel {\r\n  position: relative;\r\n  isolation: isolate;\r\n  flex-basis: calc((var(--_panel-padding) * 2) + var(--_button-size));\r\n  overflow: hidden;\r\n  padding: var(--_panel-padding);\r\n  padding-right: calc(var(--_panel-padding) * 4);\r\n  border-radius: calc(((var(--_panel-padding) * 2) + var(--_button-size)) / 2);\r\n  cursor: pointer;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .accordion-panel {\r\n    transition: flex-basis 500ms, flex-grow 500ms;\r\n  }\r\n}\r\n\r\n.accordion-panel:nth-child(1) {\r\n  --_panel-color: red;\r\n}\r\n.accordion-panel:nth-child(2) {\r\n  --_panel-color: blue;\r\n}\r\n.accordion-panel:nth-child(3) {\r\n  --_panel-color: green;\r\n}\r\n.accordion-panel:nth-child(4) {\r\n  --_panel-color: yellow;\r\n}\r\n.accordion-panel:nth-child(5) {\r\n  --_panel-color: orange;\r\n}\r\n.accordion-panel:nth-child(6) {\r\n  --_panel-color: purple;\r\n}\r\n.accordion-panel:nth-child(7) {\r\n  --_panel-color: pink;\r\n}\r\n.accordion-panel:nth-child(8) {\r\n  --_panel-color: brown;\r\n}\r\n.accordion-panel:nth-child(9) {\r\n  --_panel-color: cyan;\r\n}\r\n.accordion-panel:nth-child(10) {\r\n  --_panel-color: magenta;\r\n}\r\n\r\n.accordion-panel:has([aria-expanded=\"true\"]) {\r\n  flex-basis: clamp(15rem, 40vh, 20rem);\r\n  flex-grow: 1;\r\n}\r\n\r\n.accordion-trigger {\r\n  outline: 0 !important;\r\n}\r\n\r\n.accordion-panel:focus-within {\r\n  outline: 3px solid var(--_panel-color);\r\n  outline-offset: 4px;\r\n}\r\n\r\n.accordion-content > p {\r\n  transform: translateY(2rem);\r\n  opacity: 0;\r\n  margin-left: calc(var(--_button-size) + var(--_panel-gap));\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n  .accordion-panel:has([aria-expanded=\"true\"]) .accordion-content > p {\r\n    transition: transform 500ms 500ms, opacity 500ms 500ms;\r\n  }\r\n}\r\n\r\n.accordion-panel:has([aria-expanded=\"true\"]) .accordion-content > p {\r\n  transform: translateY(0);\r\n  opacity: 1;\r\n}\r\n\r\n.accordion-title {\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  position: relative;\r\n  isolation: isolate;\r\n  display: grid;\r\n  align-items: center;\r\n}\r\n\r\n@media (max-width: 44.999em) {\r\n  .accordion-title::after {\r\n    content: \"\";\r\n    position: absolute;\r\n\r\n    left: calc((var(--_panel-gap) + var(--_button-size)) * -1);\r\n    width: calc(100% + (var(--_button-size) * 2));\r\n    height: var(--_button-size);\r\n    background: hsl(0 0% 0% /0.55);\r\n    z-index: -1;\r\n    border-radius: 100vw;\r\n  }\r\n}\r\n\r\n.accordion-image {\r\n  position: absolute;\r\n  inset: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: cover;\r\n  z-index: -1;\r\n  transition: filer 500ms;\r\n}\r\n\r\n.accordion-panel:has([aria-expanded=\"true\"]) .accordion-image {\r\n  filter: brightness(0.5);\r\n}\r\n.accordion-trigger {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: row-reverse;\r\n  gap: var(--_panel-gap);\r\n  background: transparent;\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n.accordion-icon {\r\n  fill: var(--_panel-color);\r\n  background: hsl(0 0% 0% /0.55);\r\n  width: var(--_button-size);\r\n  aspect-ratio: 1/1;\r\n  padding: 0.75rem;\r\n  border-radius: 50%;\r\n  z-index: 10;\r\n}\r\n";
styleInject(css_248z);

function UseImageAccordion({
  accordionData
}) {
  const [activePanel, setActivePanel] = React.useState(null);
  function toggleAccordion(panelToActivate) {
    setActivePanel(prevPanel => {
      if (prevPanel === panelToActivate) {
        return prevPanel;
      } else {
        return panelToActivate;
      }
    });
  }
  React.useEffect(() => {
    setActivePanel(accordionData[0].id);
  }, []);
  if (!accordionData) return null;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "accordion"
  }, accordionData.map(item => /*#__PURE__*/React__default["default"].createElement("div", {
    key: item.id,
    className: "accordion-panel",
    onClick: () => toggleAccordion(item.id)
  }, /*#__PURE__*/React__default["default"].createElement("h2", {
    id: item.id
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    type: "button",
    className: "accordion-trigger",
    "aria-controls": "panel1-content",
    "aria-expanded": activePanel === item.id
  }, /*#__PURE__*/React__default["default"].createElement("span", {
    className: "accordion-title",
    id: item.id
  }, "Boating"), /*#__PURE__*/React__default["default"].createElement("svg", {
    "aria-hidden": "true",
    className: "accordion-icon"
  }, /*#__PURE__*/React__default["default"].createElement("image", {
    href: item.svg
  })))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "accordion-content",
    id: item.id,
    "aria-labelledby": item.id,
    "aria-hidden": activePanel !== item.id,
    role: "region"
  }, /*#__PURE__*/React__default["default"].createElement("p", null, item.content), /*#__PURE__*/React__default["default"].createElement("img", {
    className: "accordion-image",
    src: item.image,
    alt: item.alt
  })))))));
}

const ReactImageAccordion = ({
  accordionData
}) => {
  return /*#__PURE__*/React__default["default"].createElement(UseImageAccordion, {
    accordionData: accordionData
  });
};

exports.ReactImageAccordion = ReactImageAccordion;
