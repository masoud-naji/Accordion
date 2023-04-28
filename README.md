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

![image](https://user-images.githubusercontent.com/63078848/235080658-86333445-4f13-44f4-9db1-6ef5266efea5.png)

---
![image](https://user-images.githubusercontent.com/63078848/235080876-551d0dd6-5d49-44e3-a504-ee7e998d929c.png)

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
