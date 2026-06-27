import React from "react";
import UseImageAccordion from "./UseImageAccordion";

export const ReactImageAccordion = ({
  accordionData,
  AccordionWidth,
  AccordionHeight,
  ContentSize,
  onClick,
  ShowButton,
}) => {
  return (
    <UseImageAccordion
      accordionData={accordionData}
      AccordionWidth={AccordionWidth}
      AccordionHeight={AccordionHeight}
      ContentSize={ContentSize}
      onClick={onClick}
      ShowButton={ShowButton}
    />
  );
};
