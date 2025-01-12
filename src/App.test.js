import React from "react";
import { render, screen } from '@testing-library/react';
import App from "./App"; // Update with the correct path to your App component
import TestExample from "./TestExample.js";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("check test example", () => {
  render(<TestExample />);
  const linkElement = screen.getByText(/my example/i);
  expect(linkElement).toBeInTheDocument();
});