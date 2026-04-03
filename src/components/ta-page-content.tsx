"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Title } from "@/components/title";
import { TACard } from "@/components/ta-card";
import { ProjectTableRow } from "@/components/ta-table-row";
import type { TherapeuticArea, Project } from "@/lib/mock-data";

interface TAPageContentProps {
  suggested: TherapeuticArea[];
  projects: Project[];
}

export function TAPageContent({ suggested, projects }: TAPageContentProps) {
  const [query, setQuery] = useState("");
  const lowerQuery = query.toLowerCase();

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(lowerQuery) ||
    p.therapeuticAreaName.toLowerCase().includes(lowerQuery)
  );

  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <Title>Therapeutic Areas</Title>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
          <Input
            size="sm"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-[320px] pl-9"
          />
        </div>
      </div>

      <section className="mt-8">
        <h2 className="text-base font-medium leading-6 text-gray-700">Suggested TAs</h2>
        <div className="mt-3 grid grid-cols-3 gap-6">
          {suggested.map((ta) => (
            <TACard
              key={ta.id}
              title={ta.name}
              description={ta.description}
              href={`/tas/${ta.slug}/scoring`}
              buttonLabel={`Preview ${ta.name}`}
            />
          ))}
        </div>
      </section>

      <section className="mt-10">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>Name</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Last Refresh</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProjects.map((project) => (
              <ProjectTableRow key={project.id} project={project} />
            ))}
            {filteredProjects.length === 0 && (
              <TableRow className="hover:bg-transparent">
                <TableCell>
                  <span className="text-gray-400">No projects match your search.</span>
                </TableCell>
                <TableCell />
                <TableCell />
                <TableCell />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
