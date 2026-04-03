import { cn } from "@/lib/utils";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "outline" | "filled" | "flushed";
  isInvalid?: boolean;
}

const sizeStyles = {
  xs: "h-6 px-2 text-xs rounded-sm",
  sm: "h-8 px-3 text-sm rounded",
  md: "h-10 px-4 text-base rounded",
  lg: "h-12 px-4 text-lg rounded-md",
};

const flushedSizeStyles = {
  xs: "h-6 text-xs",
  sm: "h-8 text-sm",
  md: "h-10 text-base",
  lg: "h-12 text-lg",
};

function getVariantStyles(variant: string, isInvalid: boolean) {
  if (variant === "outline") {
    return isInvalid
      ? "bg-white border-2 border-red-500"
      : "bg-white border border-gray-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500";
  }
  if (variant === "filled") {
    return isInvalid
      ? "bg-white border-2 border-red-500"
      : "bg-gray-100 border border-transparent focus:border-teal-500 focus:ring-1 focus:ring-teal-500";
  }
  // flushed
  return isInvalid
    ? "bg-white border-b-2 border-red-500 rounded-none"
    : "bg-white border-b border-gray-200 rounded-none focus:border-b-teal-500";
}

export function Input({
  size = "sm",
  variant = "outline",
  isInvalid = false,
  className,
  disabled,
  ...props
}: InputProps) {
  const isFlushed = variant === "flushed";

  return (
    <input
      className={cn(
        "w-full font-normal text-gray-900 placeholder:text-gray-400 outline-none transition-colors",
        isFlushed ? flushedSizeStyles[size] : sizeStyles[size],
        getVariantStyles(variant, isInvalid),
        disabled && "opacity-40 cursor-not-allowed",
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}
