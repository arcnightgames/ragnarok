import {render} from "@testing-library/react";

import Kbd from "./Kbd";

describe("Kbd component", () => {
  it("should render with className kbd and additional className", () => {
    const {container} = render(
      <Kbd shortcut="N" className="should-be-passed" />,
    );

    expect(container.firstChild).toHaveClass("kbd");
    expect(container.firstChild).toHaveClass("should-be-passed");
  });

  it("should render element with text content N", () => {
    const {container} = render(<Kbd shortcut="N" />);

    expect(container.textContent).toBe("N");
  });

  it("renders correctly with a single key shortcut", () => {
    const {asFragment} = render(<Kbd shortcut="A" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with a combination key shortcut", () => {
    const {asFragment} = render(<Kbd shortcut="Ctrl+C" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly with additional className", () => {
    const {asFragment} = render(
      <Kbd shortcut="Ctrl+V" className="custom-class" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
