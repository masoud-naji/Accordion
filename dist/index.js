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

var css_248z = "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  color-scheme: dark;\n}\n\nbody {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  min-height: 100vh;\n\n  margin: 0;\n  font-family: system-ui;\n  font-size: 1.125rem;\n  line-height: 1.6;\n}\n\nimg {\n  max-width: 100%;\n  display: block;\n}\n\n.wrapper {\n  /* max-width: 50rem; */\n  margin-inline: auto;\n  padding-inline: 1rem;\n}\n\n.accordion {\n  --_button-size: 3rem;\n  --_panel-padding: 0.75rem;\n  --_panel-gap: 1rem;\n\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n@media (min-width: 45em) {\n  .accordion {\n    flex-direction: row;\n    /* height: 30rem; */\n  }\n}\n\n.accordion * {\n  margin: 0;\n}\n\n.accordion-panel {\n  position: relative;\n  isolation: isolate;\n  flex-basis: calc((var(--_panel-padding) * 2) + var(--_button-size));\n  overflow: hidden;\n  padding: var(--_panel-padding);\n  padding-right: calc(var(--_panel-padding) * 4);\n  border-radius: calc(((var(--_panel-padding) * 2) + var(--_button-size)) / 2);\n  cursor: pointer;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .accordion-panel {\n    transition: flex-basis 500ms, flex-grow 500ms;\n  }\n}\n\n.accordion-panel:nth-child(1) {\n  --_panel-color: red;\n}\n.accordion-panel:nth-child(2) {\n  --_panel-color: blue;\n}\n.accordion-panel:nth-child(3) {\n  --_panel-color: green;\n}\n.accordion-panel:nth-child(4) {\n  --_panel-color: yellow;\n}\n.accordion-panel:nth-child(5) {\n  --_panel-color: orange;\n}\n.accordion-panel:nth-child(6) {\n  --_panel-color: purple;\n}\n.accordion-panel:nth-child(7) {\n  --_panel-color: pink;\n}\n.accordion-panel:nth-child(8) {\n  --_panel-color: brown;\n}\n.accordion-panel:nth-child(9) {\n  --_panel-color: cyan;\n}\n.accordion-panel:nth-child(10) {\n  --_panel-color: magenta;\n}\n\n.accordion-panel:has([aria-expanded=\"true\"]) {\n  flex-basis: clamp(15rem, 40vh, 20rem);\n  flex-grow: 1;\n}\n\n.accordion-trigger {\n  outline: 0 !important;\n}\n\n.accordion-panel:focus-within {\n  outline: 3px solid var(--_panel-color);\n  outline-offset: 4px;\n}\n\n.accordion-content > p {\n  transform: translateY(2rem);\n  opacity: 0;\n  margin-left: calc(var(--_button-size) + var(--_panel-gap));\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .accordion-panel:has([aria-expanded=\"true\"]) .accordion-content > p {\n    transition: transform 500ms 500ms, opacity 500ms 500ms;\n  }\n}\n\n.accordion-panel:has([aria-expanded=\"true\"]) .accordion-content > p {\n  transform: translateY(0);\n  opacity: 1;\n}\n\n.accordion-title {\n  font-size: 1.5rem;\n  font-weight: 700;\n  position: relative;\n  isolation: isolate;\n  display: grid;\n  align-items: center;\n}\n\n@media (max-width: 44.999em) {\n  .accordion-title::after {\n    content: \"\";\n    position: absolute;\n\n    left: calc((var(--_panel-gap) + var(--_button-size)) * -1);\n    width: calc(100% + (var(--_button-size) * 2));\n    height: var(--_button-size);\n    background: hsl(0 0% 0% /0.55);\n    z-index: -1;\n    border-radius: 100vw;\n  }\n}\n\n.accordion-image {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: -1;\n  transition: filer 500ms;\n}\n\n.accordion-panel:has([aria-expanded=\"true\"]) .accordion-image {\n  filter: brightness(0.5);\n}\n.accordion-trigger {\n  display: flex;\n  align-items: center;\n  flex-direction: row-reverse;\n  gap: var(--_panel-gap);\n  background: transparent;\n  border: 0;\n  padding: 0;\n}\n.accordion-icon {\n  fill: var(--_panel-color);\n  background: hsl(0 0% 0% /0.55);\n  width: var(--_button-size);\n  aspect-ratio: 1/1;\n  padding: 0.75rem;\n  border-radius: 50%;\n  z-index: 10;\n}\n";
styleInject(css_248z);

function UseImageAccordion({
  accordionData,
  AccordionWidth,
  AccordionHeight
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
    className: "wrapper",
    style: {
      width: AccordionWidth
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "accordion",
    style: {
      height: AccordionHeight
    }
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
  }, item.title), /*#__PURE__*/React__default["default"].createElement("svg", {
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
  accordionData,
  AccordionWidth,
  AccordionHeight
}) => {
  return /*#__PURE__*/React__default["default"].createElement(UseImageAccordion, {
    accordionData: accordionData,
    AccordionWidth: AccordionWidth,
    AccordionHeight: AccordionHeight
  });
};

exports.ReactImageAccordion = ReactImageAccordion;
