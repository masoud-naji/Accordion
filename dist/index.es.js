import React, { useState, useEffect } from 'react';

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function UseImageAccordion(_ref) {
  var accordionData = _ref.accordionData,
    AccordionWidth = _ref.AccordionWidth,
    AccordionHeight = _ref.AccordionHeight,
    ContentSize = _ref.ContentSize,
    _onClick = _ref.onClick,
    ShowButton = _ref.ShowButton;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    activePanel = _useState2[0],
    setActivePanel = _useState2[1];
  var ContentSizeFont = ContentSize || [];
  function toggleAccordion(panelToActivate) {
    setActivePanel(function (prevPanel) {
      if (prevPanel === panelToActivate) {
        return prevPanel;
      } else {
        return panelToActivate;
      }
    });
  }
  var HeightStyle = "\n     @media (min-width: 768px) {\n      .AccHeight {\n        height: ".concat(AccordionHeight, ";\n      }\n    }");
  var css = "\n    @media (max-width: 480px) {\n      .ContentSize {\n        font-size: ".concat(ContentSizeFont[0] || "0.65rem", ";\n      }\n    }\n    @media (min-width: 481px) and (max-width: 768px) {\n      .ContentSize {\n        font-size: ").concat(ContentSizeFont[1] || "0.8rem", ";\n      }\n    }\n    @media (min-width: 769px) and (max-width: 1024px) {\n      .ContentSize {\n        font-size: ").concat(ContentSizeFont[2] || "1rem", ";\n      }\n    }\n    @media (min-width: 1025px) and (max-width: 1200px) {\n      .ContentSize {\n        font-size: ").concat(ContentSizeFont[3] || "1.2rem", ";\n      }\n    }\n    @media (min-width: 1201px) {\n      .ContentSize {\n        font-size: ").concat(ContentSizeFont[4] || "1.5rem", ";\n      }\n    }");
  useEffect(function () {
    setActivePanel(accordionData[0].id);
  }, []);
  if (!accordionData) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "wrapper",
    style: {
      width: AccordionWidth
    }
  }, /*#__PURE__*/React.createElement("style", {
    scoped: true
  }, HeightStyle), /*#__PURE__*/React.createElement("div", {
    className: "accordionImage AccHeight"
  }, accordionData.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      className: "accordion-panel",
      onClick: function onClick() {
        return toggleAccordion(item.id);
      }
    }, /*#__PURE__*/React.createElement("h2", {
      id: item.id
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "accordion-trigger",
      "aria-controls": "panel1-content",
      "aria-expanded": activePanel === item.id
    }, /*#__PURE__*/React.createElement("span", {
      className: "accordion-title",
      id: item.id
    }, item.title), /*#__PURE__*/React.createElement("svg", {
      "aria-hidden": "true",
      className: "accordion-icon",
      xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/React.createElement("image", {
      href: item.svg
    })))), /*#__PURE__*/React.createElement("style", {
      scoped: true
    }, css), /*#__PURE__*/React.createElement("div", {
      className: "accordion-content ContentSize",
      style: {
        height: "calc(".concat(AccordionHeight, " - 5rem)")
      },
      id: item.id,
      "aria-labelledby": item.id,
      "aria-hidden": activePanel !== item.id,
      role: "region"
    }, /*#__PURE__*/React.createElement("p", null, item.content), ShowButton && /*#__PURE__*/React.createElement("button", {
      className: "accordion-Link",
      onClick: function onClick(e) {
        e.stopPropagation();
        _onClick({
          id: item.id,
          title: item.title
        });
      }
    }, item.title), /*#__PURE__*/React.createElement("img", {
      className: "accordion-image",
      src: item.image,
      alt: item.alt
    })));
  }))));
}

var ReactImageAccordion = function ReactImageAccordion(_ref) {
  var accordionData = _ref.accordionData,
    AccordionWidth = _ref.AccordionWidth,
    AccordionHeight = _ref.AccordionHeight,
    ContentSize = _ref.ContentSize,
    onClick = _ref.onClick,
    ShowButton = _ref.ShowButton;
  return /*#__PURE__*/React.createElement(UseImageAccordion, {
    accordionData: accordionData,
    AccordionWidth: AccordionWidth,
    AccordionHeight: AccordionHeight,
    ContentSize: ContentSize,
    onClick: onClick,
    ShowButton: ShowButton
  });
};

export { ReactImageAccordion };
