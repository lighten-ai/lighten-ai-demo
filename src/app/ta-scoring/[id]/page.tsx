"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { suggestedTAs } from "@/lib/mock-data";
import { RadarScoreChart } from "@/components/radar-score-chart";

export default function TAScoringPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const ta = suggestedTAs.find((t) => t.id === id) ?? suggestedTAs[0];
  const [showQuotePanel, setShowQuotePanel] = useState(true);

  const scoreItems = [
    {
      label: "Longitudinality of patient histories",
      score: ta.scores.longitudinality,
      max: ta.maxScores.longitudinality,
    },
    {
      label: "Provider specialty coverage",
      score: ta.scores.providerSpecialty,
      max: ta.maxScores.providerSpecialty,
    },
    {
      label: "Curation assessment",
      score: ta.scores.curationAssessment,
      max: ta.maxScores.curationAssessment,
    },
    {
      label: "Use-case fitness",
      score: ta.scores.useCaseFitness,
      max: ta.maxScores.useCaseFitness,
    },
    {
      label: "Strategic impact potential",
      score: ta.scores.strategicImpact,
      max: ta.maxScores.strategicImpact,
    },
  ];

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to TAs
        </Link>

        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold tracking-tight">{ta.name}</h1>
          <Badge
            variant="outline"
            className="border-emerald-200 bg-emerald-50 text-emerald-700"
          >
            {ta.confidence} Confidence
          </Badge>
        </div>

        {/* Radar Chart */}
        <div className="mt-8 flex justify-center">
          <RadarScoreChart scores={ta.scores} maxScores={ta.maxScores} totalScore={ta.totalScore} />
        </div>

        {/* Score Breakdown */}
        <div className="mt-8 space-y-3">
          {scoreItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-lg border border-border bg-white px-4 py-3"
            >
              <span className="text-sm">{item.label}</span>
              <span className="text-sm font-medium text-muted-foreground">
                <span className="text-foreground">{item.score}</span>/{item.max}
              </span>
            </div>
          ))}
        </div>

        {/* Why This Recommendation */}
        <div className="mt-8">
          <h2 className="text-base font-semibold">Why this recommendation?</h2>
          <ul className="mt-3 space-y-2">
            {ta.reasons.map((reason, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Request a Quote Panel */}
      {showQuotePanel && (
        <div className="w-[400px] shrink-0 border-l border-border bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Request a Quote</h2>
            <button
              onClick={() => setShowQuotePanel(false)}
              className="rounded-md p-1 text-muted-foreground hover:bg-muted"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-medium">Timeline</label>
              <Select>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Not sure yet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="3-months">Within 3 months</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Refreshes Required</label>
              <Select>
                <SelectTrigger className="mt-1.5">
                  <SelectValue placeholder="Not sure yet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="not-sure">Not sure yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">
                What are you looking to understand?
              </label>
              <div className="relative mt-1.5">
                <Textarea
                  placeholder="Enter your message..."
                  className="min-h-[120px] resize-none"
                  maxLength={300}
                />
                <span className="absolute bottom-2 right-3 text-xs text-muted-foreground">
                  0/300 characters
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-3">
            <Button
              variant="ghost"
              onClick={() => setShowQuotePanel(false)}
            >
              Cancel
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
