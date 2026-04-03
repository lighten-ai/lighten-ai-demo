import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "text";
  size?: "default" | "small" | "tiny";
  color?: "default" | "dark";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
}

const sizeStyles = {
  default: "gap-2 px-3 py-2 text-base leading-6",
  small: "gap-2 px-3 py-1.5 text-sm leading-5",
  tiny: "gap-1 px-2 py-1 text-xs leading-4",
};

const iconSize = {
  default: "size-5",
  small: "size-5",
  tiny: "size-4",
};

function getVariantStyles(variant: string, color: string) {
  if (variant === "default" && color === "default") {
    return "bg-teal-500 border-teal-500 text-white hover:bg-teal-600 hover:border-teal-600";
  }
  if (variant === "default" && color === "dark") {
    return "bg-teal-900 border-teal-900 text-white hover:bg-teal-800 hover:border-teal-800";
  }
  if (variant === "outline" && color === "default") {
    return "border-teal-500 bg-transparent text-teal-500 hover:bg-teal-50";
  }
  if (variant === "outline" && color === "dark") {
    return "border-gray-300 bg-transparent text-teal-900 hover:bg-gray-50";
  }
  if (variant === "text" && color === "default") {
    return "border-transparent bg-transparent text-teal-500 hover:text-teal-600";
  }
  if (variant === "text" && color === "dark") {
    return "border-transparent bg-transparent text-teal-900 hover:text-teal-800";
  }
  return "";
}

export function PrimaryButton({
  children,
  href,
  onClick,
  variant = "default",
  size = "small",
  color = "default",
  leadingIcon,
  trailingIcon,
  className,
}: PrimaryButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg border font-medium transition-colors";
  const styles = cn(
    base,
    sizeStyles[size],
    getVariantStyles(variant, color),
    className
  );

  const content = (
    <>
      {leadingIcon && <span className={iconSize[size]}>{leadingIcon}</span>}
      {children}
      {trailingIcon && <span className={iconSize[size]}>{trailingIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {content}
    </button>
  );
}
