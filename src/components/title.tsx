import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export function Title({ children, className }: TitleProps) {
  return (
    <h1 className={cn("text-2xl font-medium leading-[1.2] text-gray-900 font-heading", className)}>
      {children}
    </h1>
  );
}
