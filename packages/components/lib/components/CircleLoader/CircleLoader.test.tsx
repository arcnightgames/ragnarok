import "@testing-library/jest-dom";

import {render, screen} from "@testing-library/react";

import CircleLoader from "./CircleLoader";

describe("CircleLoader component", () => {
  it("renders without crashing", () => {
    render(<CircleLoader data-testid="circle_loader" />);
    const circleLoader = screen.getByTestId("circle_loader");

    expect(circleLoader).toHaveClass("circle-loader");
  });

  it("renders with the specified size", () => {
    render(<CircleLoader size="small" data-testid="circle_loader" />);
    const circleLoader = screen.getByTestId("circle_loader");

    expect(circleLoader).toHaveClass("is-small");
  });

  it("applies additional className prop", () => {
    render(
      <CircleLoader className="custom-class" data-testid="circle_loader" />,
    );
    const circleLoader = screen.getByTestId("circle_loader");

    expect(circleLoader).toHaveClass("custom-class");
  });

  test("renders CircleLoader component correctly", () => {
    const {container} = render(<CircleLoader />);
    expect(container).toMatchSnapshot();
  });

  test("renders CircleLoader component with medium size correctly", () => {
    const {container} = render(<CircleLoader size="medium" />);
    expect(container).toMatchSnapshot();
  });

  test("renders CircleLoader component with custom class and data-testid correctly", () => {
    const {container} = render(
      <CircleLoader className="custom-class" data-testid="loader-test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
