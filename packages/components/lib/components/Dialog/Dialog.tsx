import {forwardRef, HTMLAttributes, Ref} from "react";

type DialogProps = HTMLAttributes<HTMLDialogElement>;
const Dialog = forwardRef((props: DialogProps, ref: Ref<HTMLDialogElement>) => (
  <dialog ref={ref} {...props} />
));
Dialog.displayName = "Dialog";

export default Dialog;
