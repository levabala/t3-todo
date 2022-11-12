import { twMerge } from "tailwind-merge";
import type { PropsWithClassName } from "../../utils/PropsWithClassName";

const List: React.FC<React.PropsWithChildren & PropsWithClassName> = ({
  children,
  className,
}) => <div className={twMerge(className)}>{children}</div>;

export default List;
