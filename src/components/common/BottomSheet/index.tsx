import { ReactNode } from "react";
import { BottomSheet as ReactBottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

type Props = {
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export default function BottomSheet({
  isOpened,
  onClose,
  children,
  className,
}: Props) {
  return (
    <ReactBottomSheet open={isOpened} onDismiss={onClose} className={className}>
      {children}
    </ReactBottomSheet>
  );
}
