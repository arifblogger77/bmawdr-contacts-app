import React from "react";
import { createRoot } from "react-dom/client";

const element = <h1>Hello, worrld!</h1>;

const root = createRoot(document.getElementById('root'));
root.render(element);