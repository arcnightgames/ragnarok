import "./Logo.scss";

import {PolymorphicPropsWithRef} from "@arcnight/react-polymorphic-types";
import arcnight from "@arcnight/styles/assets/img/brand/arcnight.svg";
import identity from "@arcnight/styles/assets/img/brand/identity.svg";
import wordmark from "@arcnight/styles/assets/img/brand/wordmark.svg";
import {clsx} from "@arcnight/utils";
import {ElementType, forwardRef, Ref} from "react";

export type LogoSublogo = "default" | "identity";

const Sublogos = {
  default: {src: wordmark, alt: ""},
  identity: {src: identity, alt: "Identity"},
} as const;

interface LogoOwnProps {
  sublogo: LogoSublogo;
  /**
   * Locator for e2e tests.
   */
  "data-testid"?: string;
}

export type LogoProps<E extends ElementType> = PolymorphicPropsWithRef<
  LogoOwnProps,
  E
>;

const defaultElement = "div";

const Logo = <E extends ElementType = typeof defaultElement>(
  {
    as,
    sublogo = "default",
    "data-testid": dataTestId,
    ...restProps
  }: LogoProps<E>,
  ref: Ref<Element>,
) => {
  const Element: ElementType = as || defaultElement;

  return (
    <Element
      className={clsx("logo", sublogo !== "default" && "sublogo")}
      ref={ref}
      data-testid={dataTestId}
      {...restProps}
    >
      <img src={arcnight} alt="Arcnight" />

      {sublogo !== "default" && (
        <svg
          width="1"
          height="20"
          viewBox="0 0 1 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1" height="20" fill="white" />
        </svg>
      )}
      <img
        className={clsx(sublogo !== "default" && "wordmark")}
        src={Sublogos[sublogo].src}
        alt={Sublogos[sublogo].alt}
      />
    </Element>
  );
};

export default forwardRef(Logo);
