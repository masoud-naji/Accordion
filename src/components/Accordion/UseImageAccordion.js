import React, { useEffect, useState } from "react";
import "./App.css";

function UseImageAccordion({
  accordionData,
  AccordionWidth,
  AccordionHeight,
  ContentSize,
  onClick,
  ShowButton,
}) {
  const [activePanel, setActivePanel] = useState(null);
  const ContentSizeFont = ContentSize || [];

  function toggleAccordion(panelToActivate) {
    setActivePanel((prevPanel) => {
      if (prevPanel === panelToActivate) {
        return prevPanel;
      } else {
        return panelToActivate;
      }
    });
  }

  const HeightStyle = `
     @media (min-width: 768px) {
      .AccHeight {
        height: ${AccordionHeight};
      }
    }`;

  const css = `
    @media (max-width: 480px) {
      .ContentSize {
        font-size: ${ContentSizeFont[0] || "0.65rem"};
      }
    }
    @media (min-width: 481px) and (max-width: 768px) {
      .ContentSize {
        font-size: ${ContentSizeFont[1] || "0.8rem"};
      }
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      .ContentSize {
        font-size: ${ContentSizeFont[2] || "1rem"};
      }
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      .ContentSize {
        font-size: ${ContentSizeFont[3] || "1.2rem"};
      }
    }
    @media (min-width: 1201px) {
      .ContentSize {
        font-size: ${ContentSizeFont[4] || "1.5rem"};
      }
    }`;

  useEffect(() => {
    setActivePanel(accordionData[0].id);
  }, []);

  if (!accordionData) return null;
  return (
    <>
      <div className="wrapper" style={{ width: AccordionWidth }}>
        <style scoped>{HeightStyle}</style>
        <div className="accordionImage AccHeight">
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
                  <svg
                    aria-hidden="true"
                    className="accordion-icon"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <image href={item.svg}></image>
                  </svg>
                </button>
              </h2>
              <style scoped>{css}</style>
              <div
                className="accordion-content ContentSize"
                style={{ height: `calc(${AccordionHeight} - 5rem)` }}
                id={item.id}
                aria-labelledby={item.id}
                aria-hidden={activePanel !== item.id}
                role="region"
              >
                <p>{item.content}</p>

                {ShowButton && (
                  <button
                    className="accordion-Link"
                    onClick={(e) => {
                      e.stopPropagation();
                      onClick({ id: item.id, title: item.title });
                    }}
                  >
                    {item.title}
                  </button>
                )}

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
