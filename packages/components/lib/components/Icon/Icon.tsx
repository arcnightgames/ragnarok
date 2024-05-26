import {clsx} from "@arcnight/utils";
import {forwardRef, SVGProps} from "react";

export type IconSize =
  | 6
  | 8
  | 10
  | 11
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 28
  | 32
  | 36
  | 40
  | 42
  | 48
  | 56
  | 60
  | 70
  | 100
  | 110;

export type IconName = "checkmark" | "minus";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "ref"> {
  /**
   * Determines which icon to render based on its name.
   */
  name: IconName;
  /**
   * If specified, renders a sr-only element for screenreaders.
   */
  alt?: string;
  /**
   * If specified, renders an inline title element.
   */
  title?: string;
  /**
   * The size of the icon.
   */
  size?: IconSize;
  /**
   * How many degrees the icon should be rotated.
   */
  rotate?: number;
  /**
   * Applied as inline css "color" attribute on the svg element.
   */
  color?: string;
  /**
   * Locator for e2e tests.
   */
  "data-testid"?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      name,
      alt,
      title,
      color,
      className = "",
      viewBox = "0 0 16 16",
      size = 16,
      rotate = 0,
      "data-testid": dataTestId,
      ...rest
    },
    ref,
  ) => {
    const style = {
      ...(color && {color}),
      ...(rotate && {transform: `rotate(${rotate}deg)`}),
    };

    return (
      <>
        <svg
          style={style}
          viewBox={viewBox}
          className={clsx([`icon-${size}p`, className])}
          role="img"
          focusable="false"
          ref={ref}
          aria-hidden="true"
          data-testid={dataTestId}
          {...rest}
        >
          {title ? <title>{title}</title> : null}
          <use xlinkHref={`#ic-${name}`} />
        </svg>
        {alt ? <span className="sr-only">{alt}</span> : null}
      </>
    );
  },
);

export default Icon;
