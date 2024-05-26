import "@testing-library/jest-dom";

import {render} from "@testing-library/react";

import Logo from "./Logo";

describe("Logo Component", () => {
  it("renders with default sublogo", () => {
    const {getByTestId} = render(<Logo data-testid="logo" />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  it("renders with identity sublogo", () => {
    const {getByTestId} = render(
      <Logo sublogo="identity" data-testid="logo" />,
    );
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  it("renders with custom element", () => {
    const {getByTestId} = render(<Logo as="span" data-testid="logo" />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  it("renders with custom class", () => {
    const {getByTestId} = render(
      <Logo className="custom-class" data-testid="logo" />,
    );
    expect(getByTestId("logo")).toHaveClass("custom-class");
  });
});
