import "@testing-library/jest-dom";

import {render, screen} from "@testing-library/react";

import Icon from "./Icon";

// Mock SVG sprite
vi.mock("./icon-sprite.svg", () => ({
  "#ic-checkmark": "mocked-checkmark-svg",
  "#ic-minus": "mocked-minus-svg",
}));

describe("Icon component", () => {
  it("renders the correct icon", () => {
    render(<Icon name="checkmark" data-testid="icon" />);
    const svgElement = screen.getByTestId("icon");

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass("icon-16p");
    expect(svgElement).toContainHTML(`<use xlink:href="#ic-checkmark"></use>`);
  });

  it("applies additional classes", () => {
    render(
      <Icon name="checkmark" className="custom-class" data-testid="icon" />,
    );
    const svgElement = screen.getByTestId("icon");

    expect(svgElement).toHaveClass("icon-16p");
    expect(svgElement).toHaveClass("custom-class");
  });

  it("renders with alt text", () => {
    render(<Icon name="minus" alt="Minus Icon" data-testid="icon" />);
    const spanElement = screen.getByText("Minus Icon");

    expect(spanElement).toBeInTheDocument();
    expect(spanElement).toHaveClass("sr-only");
  });

  it("applies color and rotation", () => {
    render(
      <Icon name="checkmark" color="red" rotate={45} data-testid="icon" />,
    );
    const svgElement = screen.getByTestId("icon");

    expect(svgElement).toHaveStyle("color: rgb(255, 0, 0)");
    expect(svgElement).toHaveStyle("transform: rotate(45deg)");
  });

  it("renders correctly with default props", () => {
    const {container} = render(<Icon name="checkmark" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with custom props", () => {
    const {container} = render(
      <Icon
        name="minus"
        alt="Minus Icon"
        title="Minus Icon"
        size={24}
        rotate={90}
        color="red"
        data-testid="minus-icon"
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
