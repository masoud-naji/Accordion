import React from "react";
import { ReactImageAccordion } from "../components/Accordion";
import MockAccordion from "./MockAccordion.json";

export default {
  title: "React Image Accordion",
  component: ReactImageAccordion,
};

const Template = (args) => <ReactImageAccordion {...args} />;

export const App = Template.bind({});
App.args = {
  accordionData: MockAccordion,
  AccordionWidth: "100%",
  AccordionHeight: "30rem",
  ContentSize: ["0.5rem", "0.8rem", "1rem", "1.2rem", "1.5rem"],
  onClick: (e) => console.log(e.id, e.title),
  ShowButton: false,
};
