import "./Kbd.scss";

import {clsx} from "@arcnight/utils";
import {ComponentPropsWithoutRef} from "react";
import {c} from "ttag";

export interface KbdProps extends ComponentPropsWithoutRef<"kbd"> {
  shortcut: String;
}

const Kbd = ({shortcut, className, ...rest}: KbdProps) => {
  return (
    <kbd
      className={clsx("kbd", className)}
      aria-label={c("Label").t`Keyboard shortcut: ${shortcut}`}
      {...rest}
    >
      {shortcut}
    </kbd>
  );
};

export default Kbd;
