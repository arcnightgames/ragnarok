import {render, screen, waitFor} from "@testing-library/react";

import Avatar from "./Avatar";

// Mock the react-polymorphic-types module
vi.mock("@arcnight/react-polymorphic-types", () => ({
  PolymorphicPropsWithRef: vi.fn(),
}));

beforeAll(() => {
  global.Image = class {
    [x: string]: any;
    set src(src: string) {
      setTimeout(() => {
        if (src !== "https://cdn.arcnight.com/bad") {
          this.onload();
        } else {
          this.onerror();
        }
      }, 100);
    }
  } as any;
});

describe("Avatar Component", () => {
  it("renders with provided good src", async () => {
    const src = "https://cdn.arcnight.com/good";
    const fallback = "F";

    render(<Avatar src={src} fallback={fallback} data-testid="avatar" />);

    await waitFor(() => {
      const avatarImage = screen.getByAltText(fallback);
      expect(avatarImage).toBeInTheDocument();
      expect(avatarImage).toHaveAttribute("src", src);
    });
  });

  it("renders with provided bad src", async () => {
    const src = "https://cdn.arcnight.com/bad";
    const fallback = "F";

    render(<Avatar src={src} fallback={fallback} data-testid="avatar" />);

    await waitFor(() => {
      const avatarFallback = screen.getByTestId("avatar-fallback");
      expect(avatarFallback).toBeInTheDocument();
    });
  });

  it("renders with default size if size prop is not provided", async () => {
    const src = "https://cdn.arcnight.com/good";
    const fallback = "F";

    render(<Avatar src={src} fallback={fallback} data-testid="avatar" />);

    await waitFor(() => {
      const avatarProvider = screen.getByTestId("avatar-provider");
      expect(avatarProvider).not.toHaveStyle("--avatar-size: small");
      expect(avatarProvider).not.toHaveStyle("--avatar-size: large");
    });
  });

  it("renders with provided size", async () => {
    const src = "https://cdn.arcnight.com/good";
    const fallback = "F";
    const size = "large";

    render(
      <Avatar src={src} fallback={fallback} size={size} data-testid="avatar" />,
    );

    await waitFor(() => {
      const avatarProvider = screen.getByTestId("avatar-provider");
      expect(avatarProvider).toHaveClass(`avatar-${size}`);
    });
  });

  it("renders with default color if fallback is not provided", async () => {
    const src = "https://cdn.arcnight.com/good";

    render(<Avatar src={src} data-testid="avatar" />);

    await waitFor(() => {
      const avatarProvider = screen.getByTestId("avatar-provider");
      expect(avatarProvider).toHaveStyle("--avatar-color: var(--primary)");
    });
  });

  it("renders with generated color based on fallback", async () => {
    const src = "";
    const fallback = "F";

    render(<Avatar src={src} fallback={fallback} data-testid="avatar" />);

    await waitFor(() => {
      const avatarProvider = screen.getByTestId("avatar-provider");
      expect(avatarProvider).toHaveStyle(`--avatar-color: #347485`);
    });
  });
});
