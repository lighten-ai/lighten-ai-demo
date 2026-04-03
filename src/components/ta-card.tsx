import { PrimaryButton } from "@/components/primary-button";
import { cn } from "@/lib/utils";

interface TACardProps {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  className?: string;
}

export function TACard({
  title,
  description,
  href,
  buttonLabel,
  className,
}: TACardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6",
        className
      )}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          {title}
        </h3>
        <p className="text-sm font-medium leading-5 text-gray-600 line-clamp-2 min-h-[40px]">
          {description}
        </p>
      </div>
      <div className="border-t border-gray-200" />
      <PrimaryButton href={href} className="w-full">{buttonLabel}</PrimaryButton>
    </div>
  );
}
