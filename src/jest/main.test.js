import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Main from '../components/Main/Main'

let container = null;
beforeEach(() => {
   container = document.createElement("div");
   document.body.appendChild(container);
});

afterEach(() => {
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});