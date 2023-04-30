import React, { useEffect, useState } from "react";
import "./App.css";

function UseImageAccordion({ accordionData, AccordionWidth, AccordionHeight }) {
  const [activePanel, setActivePanel] = useState(null);

  function toggleAccordion(panelToActivate) {
    setActivePanel((prevPanel) => {
      if (prevPanel === panelToActivate) {
        return prevPanel;
      } else {
        return panelToActivate;
      }
    });
  }

  useEffect(() => {
    setActivePanel(accordionData[0].id);
  }, []);

  if (!accordionData) return null;
  return (
    <>
      <div className="wrapper" style={{ width: AccordionWidth }}>
        <div className="accordion" style={{ height: AccordionHeight }}>
          {accordionData.map((item) => (
            <div
              key={item.id}
              className="accordion-panel"
              onClick={() => toggleAccordion(item.id)}
            >
              <h2 id={item.id}>
                <button
                  type="button"
                  className="accordion-trigger"
                  aria-controls="panel1-content"
                  aria-expanded={activePanel === item.id}
                >
                  <span className="accordion-title" id={item.id}>
                    {item.title}
                  </span>
                  <svg aria-hidden="true" className="accordion-icon">
                    <image href={item.svg}></image>
                  </svg>
                </button>
              </h2>
              <div
                className="accordion-content"
                id={item.id}
                aria-labelledby={item.id}
                aria-hidden={activePanel !== item.id}
                role="region"
              >
                <p>{item.content}</p>
                <img
                  className="accordion-image"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UseImageAccordion;
