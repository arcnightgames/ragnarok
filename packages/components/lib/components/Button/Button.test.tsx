import "@testing-library/jest-dom";

import {fireEvent, render, screen} from "@testing-library/react";

import Button from "./Button";

describe("Button Component", () => {
  it("renders button with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("renders button with loading state", () => {
    render(<Button loading>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-busy", "true");
  });

  it("handles button click", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders disabled button", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("renders button with custom class", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("renders button with custom size", () => {
    render(<Button size="large">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-large");
  });

  it("renders button with custom shape and color", () => {
    render(
      <Button shape="ghost" color="secondary">
        Click me
      </Button>,
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-ghost-secondary");
  });

  test("renders with default props", () => {
    const {container} = render(<Button>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with loading state", () => {
    const {container} = render(<Button loading>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with disabled state", () => {
    const {container} = render(<Button disabled>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with custom size", () => {
    const {container} = render(<Button size="small">Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with custom shape", () => {
    const {container} = render(<Button shape="outline">Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with custom color", () => {
    const {container} = render(<Button color="secondary">Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with full width", () => {
    const {container} = render(<Button fullWidth>Click me</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("renders with custom data-testid", () => {
    const {container} = render(
      <Button data-testid="test-button">Click me</Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
