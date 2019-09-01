import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Tree from "./tree.index";

afterEach(cleanup);

const mockedProps = {
  name: "Common Hornbeam",
  species_name: "Carpinus betulus",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg"
};

test("Should render name of the tree", () => {
  const { getByText, getByTestId } = render(<Tree {...mockedProps} />);
  const componentWrapper = getByTestId("tree");
  const name = getByText("Common Hornbeam");
  expect(componentWrapper).toContainElement(name);
});

test("Should render species of the tree", () => {
  const { getByText, getByTestId } = render(<Tree {...mockedProps} />);
  const componentWrapper = getByTestId("tree");
  const species = getByText("Species: Carpinus betulus");
  expect(componentWrapper).toContainElement(species);
});

test("Tree Image should be hidden by default", () => {
  const { getByTestId } = render(<Tree {...mockedProps} />);
  const componentWrapper = getByTestId("tree");
  const image = document.getElementsByTagName("img");
  expect(componentWrapper).not.toContainHTML(image);
});

test('Should show tree image on click of "SHOW IMAGE" button', () => {
  const { getByTestId } = render(<Tree {...mockedProps} />);
  const componentWrapper = getByTestId("tree");
  const toggleBtn = getByTestId("toggle-btn");
  fireEvent.click(toggleBtn);
  const image = getByTestId("tree-img");
  expect(componentWrapper).toContainElement(image);
  expect(toggleBtn.innerHTML).toBe("Hide Image");
});

test('Should hide tree image on click of "HIDE IMAGE" button', () => {
  const { getByTestId } = render(<Tree {...mockedProps} />);
  const componentWrapper = getByTestId("tree");
  const toggleBtn = getByTestId("toggle-btn");
  fireEvent.click(toggleBtn);
  fireEvent.click(toggleBtn);
  const image = document.getElementsByTagName("img");
  expect(componentWrapper).not.toContainHTML(image);
  expect(toggleBtn.innerHTML).toBe("Show Image");
});
