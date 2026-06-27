![npm](https://img.shields.io/npm/v/react-image-accordion)
![downloads](https://img.shields.io/npm/dm/react-image-accordion)
![license](https://img.shields.io/npm/l/react-image-accordion)
# React Image Accordion

A customizable and responsive React image accordion component with smooth animations.

## Installation

```bash
npm install react-image-accordion
```

---

## Usage

```jsx
import { ReactImageAccordion } from "react-image-accordion";

function MyComponent() {
  const accordionData = [
    {
      id: 1,
      title: "Boating",
      image: "https://picsum.photos/400/600",
      alt: "Boating",
      content: "Lorem ipsum dolor sit amet.",
      svg: "/icons/boat.svg",
    },
    {
      id: 2,
      title: "Fishing",
      image: "https://picsum.photos/400/600",
      alt: "Fishing",
      content: "Lorem ipsum dolor sit amet.",
      svg: "/icons/fishing.svg",
    }
  ];

  return (
    <ReactImageAccordion
      accordionData={accordionData}
      AccordionWidth="50rem"
      AccordionHeight="30rem"
      ContentSize={[
        "0.65rem",
        "0.8rem",
        "1rem",
        "1.2rem",
        "1.5rem"
      ]}
      ShowButton={false}
      onClick={(item) => console.log(item)}
    />
  );
}

export default MyComponent;
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| accordionData | Array | Required | Accordion data |
| AccordionWidth | string | 50rem | Accordion width |
| AccordionHeight | string | 30rem | Accordion height |
| ContentSize | string[] | Responsive defaults | Font size for different breakpoints |
| ShowButton | boolean | false | Show or hide action button |
| onClick | function | - | Callback when an item is clicked |

---

## Responsive ContentSize

```jsx
[
  "0.65rem", // Mobile
  "0.8rem",  // Tablet
  "1rem",    // Small Desktop
  "1.2rem",  // Desktop
  "1.5rem"   // Large Desktop
]
```

---

## Example

```jsx
import accordionData from "./accordionData.json";
import { ReactImageAccordion } from "react-image-accordion";

export default function App() {
  return (
    <ReactImageAccordion
      accordionData={accordionData}
      AccordionWidth="40rem"
      AccordionHeight="30rem"
      ContentSize={[
        ".5rem",
        ".5rem",
        ".6rem",
        ".7rem",
        "1.1rem"
      ]}
      ShowButton={false}
      onClick={(item) => console.log(item)}
    />
  );
}
```

---

## Storybook

https://react-image-accordion.netlify.app/

---

## License

MIT