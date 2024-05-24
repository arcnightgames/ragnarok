import {fireEvent, render, screen} from "@testing-library/react";

import Radio from "./Radio";

describe("Radio component tests", () => {
  it("renders Radio component correctly", () => {
    const {getByLabelText} = render(
      <Radio id="radioId" name="radioName">
        Radio Label
      </Radio>,
    );

    const radioInput = getByLabelText("Radio Label");
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute("type", "radio");
  });

  it("applies custom class correctly", () => {
    render(
      <Radio
        id="radio"
        name="radioName"
        className="custom-class"
        data-testid="radio"
      >
        Radio Label
      </Radio>,
    );

    const labelElement = screen.getByTestId("radio-label");
    expect(labelElement).toHaveClass("custom-class");
  });

  it("handles disabled state correctly", () => {
    render(
      <Radio id="radioId" name="radioName" disabled data-testid="radio">
        Radio Label
      </Radio>,
    );

    const radioInput = screen.getByTestId("radio-input");
    expect(radioInput).toBeDisabled();
  });

  it("fires onChange event correctly", () => {
    const handleChange = vi.fn();

    render(
      <Radio
        id="radioId"
        name="radioName"
        onChange={handleChange}
        data-testid="radio"
      >
        Radio Label
      </Radio>,
    );

    const radioInput = screen.getByTestId("radio-input");
    fireEvent.click(radioInput);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("renders correctly when enabled", () => {
    const {container} = render(<Radio name="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly when disabled", () => {
    const {container} = render(<Radio name="test" disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with custom class", () => {
    const {container} = render(<Radio name="test" className="custom-class" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with children", () => {
    const {container} = render(<Radio name="test">Radio Label</Radio>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with data-testid", () => {
    const {container} = render(<Radio name="test" data-testid="radio-test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly when checked", () => {
    const {container} = render(<Radio name="test" defaultChecked />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
