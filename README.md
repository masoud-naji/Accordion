# React Image Accordion

A simple and customizable React component that creates an image accordion with smooth animation, inspired by Kevin Powell's tutorial on [YouTube](https://www.youtube.com/watch?v=WJERnXiFFug&t=0s&ab_channel=KevinPowell).

The image accordion is a modern design pattern that can be used to display images and accompanying information in an interactive and engaging way. This component makes it easy to incorporate this pattern into your React projects.


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install react-image-accordion.

```bash
npm i react-image-accordion
```




## Usage

To use the component in your React application, import it and pass the necessary props:

```jsx
import ImageAccordion from 'react-image-accordion';

function MyComponent() {
  const accordionData = [
    {
      id: 1,
      title: "Boating",
      image: "https://picsum.photos/400/600",
      alt: "first panel image",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id numquam ab molestias sint beatae provident possimus doloribus autem repudiandae!",
      svg: "aa (1).svg",
    },
    {
      id: 2,
      title: "Fishing",
      image: "https://picsum.photos/400/600",
      alt: "second panel image",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id numquam ab molestias sint beatae provident possimus doloribus autem repudiandae!",
      svg: "aa (2).svg",
    },
    {
      id: 3,
      title: "Swimming",
      image: "https://picsum.photos/400/600",
      alt: "third panel image",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id numquam ab molestias sint beatae provident possimus doloribus autem repudiandae!",
      svg: "aa (3).svg",
    },
    {
      id: 4,
      title: "Kayaking",
      image: "https://picsum.photos/400/600",
      alt: "fourth panel image",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id numquam ab molestias sint beatae provident possimus doloribus autem repudiandae!",
      svg: "aa (4).svg",
    },
    {
      id: 5,
      title: "Scuba diving",
      image: "https://picsum.photos/400/600",
      alt: "fifth panel image",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe id numquam ab molestias sint beatae provident possimus doloribus autem repudiandae!",
      svg: "aa (5).svg",
    },
  ];

  return (
  <ReactImageAccordion
          accordionData: {accordionData}
    />
  );
}

```
---

![alt text](https://dub01pap003files.storage.live.com/y4m30TStT9GjkJ8CQsKTJ8f6CpRcTucFQI2NDeV5IKdWDx3LOXX-_IjAzWofcsE9xTnFVBeOwtO7HhxpdDPg6v2SrV8scH3NghHvuegxEbRYfpyhGxrsg8nA6wv4QwIEPIcP-M9NrPKcq2fyD2Ucs8ZddNeIxlFNS3FE2ynxj9bA0s14iCDzDOnxACR_Y0y2fDc?width=607&height=504&cropmode=none "Logo Title Text 1")

---
![alt text](https://dub01pap003files.storage.live.com/y4mrjlsIlPyII1uX5xKxO4LJtSR3lQTNxtpeBsisACqsfb2VpzAAD8pcXyzjD9YU4HGilApW-023OSueLbTSgQA9cXbQDv_OPYDmfBOVPgRl1MyHUZ9iwTvV5ZT0IH-vZjqjMWGQhjp5OtStBM0oaSUum-48JaFLGmPNYKJswgl9-sEuENncbEueyDxehFvUqVV?width=660&height=410&cropmode=none "Logo Title Text 1")

---

|    Property      |     type      |  Default   |       Description       |
| ---------------- |:-------------:|:----------:|:-----------------------:|
| accordionData    | json data     |  json file |    Source File json     |




## Sample Code
```React Code
import MockDocument from "./MOCK_DATA.json";
import { ReactImageAccordion } from "json-pretty-textarea";
export const test = () => {
  return (
  <ReactImageAccordion
          accordionData: {MockAccordion}
    />
  );
};
```


***
## CodeSandBox Sample



## Contributing
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)