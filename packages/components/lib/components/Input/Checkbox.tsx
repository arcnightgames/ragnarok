import {useCombinedRefs} from "@arcnight/hooks";
import {clsx, generateUID} from "@arcnight/utils";
import {
  forwardRef,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  Ref,
  useEffect,
  useRef,
} from "react";

import {Icon} from "../Icon";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Interactions will be blocked while loading is true.
   */
  loading?: boolean;
  /**
   * Background color can be set using a css color (e.g. #ff0000 or rgb(255, 0, 0)).
   */
  backgroundColor?: string;
  /**
   * Border color can be set using a css color (e.g. #ff0000 or rgb(255, 0, 0)).
   */
  borderColor?: string;
  /**
   * Color can be set using a css color (e.g. #ff0000 or rgb(255, 0, 0)).
   */
  color?: string;
  indeterminate?: boolean;
  labelOnClick?: (
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>,
  ) => void;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  /**
   * Locator for e2e tests.
   */
  "data-testid"?: string;
}

const Checkbox = (
  {
    id = generateUID("checkbox"),
    className,
    title,
    loading,
    disabled,
    checked,
    indeterminate = false,
    color,
    backgroundColor,
    borderColor,
    children,
    labelOnClick,
    labelProps,
    "data-testid": dataTestId,
    ...rest
  }: CheckboxProps,
  ref: Ref<HTMLInputElement>,
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const combinedRef = useCombinedRefs(inputRef, ref);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label
      {...labelProps}
      htmlFor={id}
      className={clsx(
        "checkbox-container",
        !className?.includes("increase-click-surface") && "relative",
        className,
      )}
      title={title}
      onClick={labelOnClick}
      data-testid={dataTestId && `${dataTestId}-label`}
    >
      <input
        ref={combinedRef}
        disabled={disabled || loading}
        id={id}
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        data-testid={dataTestId && `${dataTestId}-input`}
        {...rest}
      />
      <span
        className={clsx("checkbox-fakecheck", children ? "mr-2" : "")}
        style={{borderColor, background: backgroundColor, color}}
        data-testid={dataTestId && `${dataTestId}-span`}
      >
        {indeterminate === false ? (
          <Icon
            className="checkbox-fakecheck-img"
            size={16}
            name="checkmark"
            color={color}
          />
        ) : (
          <Icon
            className="checkbox-fakecheck-img color-disabled"
            size={16}
            name="minus"
          />
        )}
      </span>
      {children}
    </label>
  );
};

export default forwardRef<HTMLInputElement, CheckboxProps>(Checkbox);
