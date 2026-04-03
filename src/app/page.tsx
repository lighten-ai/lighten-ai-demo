"use client";

import Link from "next/link";
import { Search, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { suggestedTAs, therapeuticAreaRows } from "@/lib/mock-data";

export default function TherapeuticAreasPage() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-medium">
          Therapeutic Areas
        </h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="h-10 w-[220px] rounded-lg border border-border bg-white pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Suggested TAs Section */}
      <section className="mt-8">
        <h2 className="text-base text-muted-foreground">Suggested TAs</h2>
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {suggestedTAs.map((ta) => (
            <Card
              key={ta.id}
              className="border border-border bg-white shadow-sm"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">{ta.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {ta.description}
                </p>
                <Separator className="my-5" />
                <Link href={`/ta-scoring/${ta.id}`} className="block">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 text-sm font-medium">
                    Preview {ta.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Therapeutic Areas Table */}
      <section className="mt-10">
        <div className="rounded-xl border border-border bg-white overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent bg-muted/30">
                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground h-12">
                  Name
                </TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground h-12">
                  Last Modified
                </TableHead>
                <TableHead className="font-semibold text-xs uppercase tracking-wider text-muted-foreground h-12">
                  Last Refresh
                </TableHead>
                <TableHead className="w-32" />
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {therapeuticAreaRows.map((row) => (
                <TableRow key={row.id} className="h-16">
                  <TableCell className="text-sm font-medium">
                    {row.name}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {row.lastModified}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {row.lastRefresh}
                  </TableCell>
                  <TableCell>
                    <Link href="/apps">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full px-6 text-sm font-medium"
                      >
                        Open
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
