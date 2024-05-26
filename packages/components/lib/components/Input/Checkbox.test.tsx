import "@testing-library/jest-dom";

import {fireEvent, render, screen} from "@testing-library/react";

import Checkbox from "./Checkbox";

describe("Checkbox component", () => {
  it("renders checkbox correctly", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders with custom label text", () => {
    render(<Checkbox>Custom Label</Checkbox>);
    const label = screen.getByText("Custom Label");
    expect(label).toBeInTheDocument();
  });

  it("handles onChange event", () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalled();
  });

  it("applies styles correctly", () => {
    render(
      <Checkbox
        color="#ff0000"
        backgroundColor="#00ff00"
        borderColor="#0000ff"
        data-testid="checkbox"
      />,
    );
    const checkbox = screen.getByTestId("checkbox-span");

    expect(checkbox).toHaveStyle({
      color: "#ff0000",
      background: "#00ff00",
      borderColor: "#0000ff",
    });
  });

  it("Checkbox renders correctly", () => {
    const {container} = render(<Checkbox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("Checkbox with custom props renders correctly", () => {
    const {container} = render(
      <Checkbox
        id="custom-id"
        className="custom-class"
        title="Custom Title"
        loading={false}
        disabled={false}
        checked={false}
        indeterminate={false}
        color="#FF0000"
        backgroundColor="#00FF00"
        borderColor="#0000FF"
        labelOnClick={() => {}}
        labelProps={{htmlFor: "custom-id"}}
        data-testid="custom-test-id"
      >
        Custom Checkbox Label
      </Checkbox>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
