import {fireEvent, render} from "@testing-library/react";

import RadioGroup from "./RadioGroup";

describe("RadioGroup", () => {
  const themes = ["Dark", "Light", "Auto"] as const;

  it("renders RadioGroup with options", () => {
    const {getByText} = render(
      <RadioGroup
        name="selected-themes"
        onChange={() => {}}
        value={undefined}
        options={themes.map((option) => ({value: option, label: option}))}
      />,
    );

    themes.forEach((theme) => {
      const radioOption = getByText(theme);
      expect(radioOption).toBeInTheDocument();
    });
  });

  it("calls onChange when a radio option is clicked", () => {
    const handleChange = vi.fn();

    const {getByText} = render(
      <RadioGroup
        name="selected-themes"
        onChange={handleChange}
        value={undefined}
        options={themes.map((option) => ({value: option, label: option}))}
      />,
    );

    const radioOption = getByText(themes[0]);
    fireEvent.click(radioOption);

    expect(handleChange).toHaveBeenCalledWith(themes[0]);
  });

  it("RadioGroup renders correctly", () => {
    const selectedColor = "Dark";

    const {container} = render(
      <RadioGroup
        name="selected-themes"
        onChange={() => {}}
        value={selectedColor}
        options={themes.map((option) => ({value: option, label: option}))}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
