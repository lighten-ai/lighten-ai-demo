"use client";

import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { TableRow, TableCell } from "@/components/ui/table";
import type { Project } from "@/lib/mock-data";

export function ProjectTableRow({ project }: { project: Project }) {
  const router = useRouter();

  return (
    <TableRow
      onClick={() => router.push(`/projects/${project.slug}/apps`)}
      className="group"
    >
      <TableCell className="text-gray-900">{project.name}</TableCell>
      <TableCell>{project.lastModified}</TableCell>
      <TableCell>{project.lastRefresh}</TableCell>
      <TableCell>
        <button
          onClick={(e) => e.stopPropagation()}
          className="rounded-md p-1.5 text-gray-700 hover:bg-gray-100"
        >
          <Menu className="size-5" />
        </button>
      </TableCell>
    </TableRow>
  );
}
