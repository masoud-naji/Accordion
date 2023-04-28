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
};
