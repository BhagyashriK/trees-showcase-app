import React from "react";
import { render, waitForElement, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Trees from "./trees.index";
afterEach(cleanup);

const mockSuccessResponse = [
  {
    name: "Baobab",
    species_name: "Adansonia",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Baobab_Adansonia_digitata.jpg"
  },
  {
    name: "Red Mangrove",
    species_name: "Rhizophora mangle",
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/16/Red_mangrove-everglades_natl_park.jpg"
  },
  {
    name: "Common Hornbeam",
    species_name: "Carpinus betulus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Carpinus_betulus_-_Hunsr%C3%BCck_001.jpg"
  },
  {
    name: "Turkey Oak",
    species_name: "Quercus cerris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Quercus_cerris.JPG"
  },
  {
    name: "Japanese red pine",
    species_name: "Pinus densiflora",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pinus_syluestriformis_%28Takenouchi%29T.Wang_ex_Cheng.JPG"
  }
];

const mockJsonPromise = jest.fn(() => Promise.resolve(mockSuccessResponse)); // 2

test("Should render trees", async () => {
  const { getByTestId } = render(<Trees getTrees={mockJsonPromise} />);
  const col1 = getByTestId("col1");
  const col2 = getByTestId("col2");
  await waitForElement(() => col1.children.length);
  expect(mockJsonPromise).toHaveBeenCalledTimes(1);
  expect(col1.children.length).toBe(3);
  expect(col2.children.length).toBe(2);
});
