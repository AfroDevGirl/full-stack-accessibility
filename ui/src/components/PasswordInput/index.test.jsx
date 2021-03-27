import React from "react";
import { screen, render } from "@testing-library/react";

import PasswordInput from ".";

describe("PasswordInput", () => {
  it("renders an input", () => {
    render(<PasswordInput />);

    screen.getByPlaceholderText("Enter password");
  });
});
