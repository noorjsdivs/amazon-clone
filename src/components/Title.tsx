import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return (
    <h2 className={twMerge("text-base font-semibold text-white", className)}>
      {children}
    </h2>
  );
};

export default Title;
