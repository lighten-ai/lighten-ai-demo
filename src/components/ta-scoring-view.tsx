"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, X, ChevronDown } from "lucide-react";
import { Title } from "@/components/title";
import { PrimaryButton } from "@/components/primary-button";
import { Input } from "@/components/input";
import { RadarScoreChart } from "@/components/radar-score-chart";
import type { TherapeuticArea } from "@/lib/mock-data";

function ScoreDot({ ratio }: { ratio: number }) {
  const color = ratio >= 0.8 ? "bg-green-500" : ratio >= 0.6 ? "bg-yellow-500" : "bg-red-500";
  return <span className={`size-1.5 shrink-0 rounded-full ${color}`} />;
}

export function TAScoringView({ ta }: { ta: TherapeuticArea }) {
  const [showQuotePanel, setShowQuotePanel] = useState(true);

  const scoreItems = [
    { label: "Longitudinality of patient histories", score: ta.scores.longitudinality, max: ta.maxScores.longitudinality },
    { label: "Provider specialty coverage", score: ta.scores.providerSpecialty, max: ta.maxScores.providerSpecialty },
    { label: "Curation assessment", score: ta.scores.curationAssessment, max: ta.maxScores.curationAssessment },
    { label: "Use-case fitness", score: ta.scores.useCaseFitness, max: ta.maxScores.useCaseFitness },
    { label: "Strategic impact potential", score: ta.scores.strategicImpact, max: ta.maxScores.strategicImpact },
  ];

  return (
    <div className="flex h-full">
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-white p-8">
        <div className="flex flex-col gap-4">
          {/* Back link */}
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium leading-5 text-teal-500 hover:text-teal-600">
            <ArrowLeft className="size-5" />
            Back to TAs
          </Link>

          {/* Title + badge */}
          <div className="flex items-center gap-2">
            <Title className="text-xl flex-1">{ta.name}</Title>
            <span className="inline-flex items-center rounded-md bg-green-100 px-2 py-0.5 text-sm font-medium leading-5 text-green-800">
              {ta.confidence} Confidence
            </span>
          </div>
        </div>

        {/* Radar Chart Container */}
        <div className="mt-8 flex items-center justify-center rounded-2xl bg-gray-100 py-4">
          <RadarScoreChart scores={ta.scores} maxScores={ta.maxScores} totalScore={ta.totalScore} />
        </div>

        {/* Score Breakdown */}
        <div className="mt-8 flex flex-col gap-2">
          {scoreItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="flex-1 text-sm font-medium leading-5 text-gray-700">
                {item.label}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-2 py-0.5 text-sm font-medium leading-5 text-gray-700">
                <ScoreDot ratio={item.score / item.max} />
                {item.score}/{item.max}
              </span>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="my-8 border-t border-gray-200" />

        {/* Why This Recommendation */}
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold leading-6 text-gray-900">
            Why this recommendation?
          </h2>
          <ul className="flex flex-col gap-2 pl-5">
            {ta.reasons.map((reason, i) => (
              <li key={i} className="list-disc text-sm font-medium leading-5 text-gray-700">
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Request a Quote Panel */}
      {showQuotePanel && (
        <div className="flex flex-1 flex-col gap-6 border-l border-gray-200 bg-gray-50 p-8">
          {/* Panel Title */}
          <div className="flex items-center gap-2">
            <Title className="flex-1 text-xl">Request a Quote</Title>
            <button onClick={() => setShowQuotePanel(false)} className="rounded-md p-1 text-gray-700 hover:bg-gray-100">
              <X className="size-5" />
            </button>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold leading-5 text-gray-900">Timeline</label>
              <div className="flex h-10 items-center rounded-lg border border-gray-200 bg-white px-3">
                <span className="flex-1 text-sm font-medium leading-5 text-gray-600">Not sure yet</span>
                <ChevronDown className="size-5 text-gray-700" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold leading-5 text-gray-900">Refreshes Required</label>
              <div className="flex h-10 items-center rounded-lg border border-gray-200 bg-white px-3">
                <span className="flex-1 text-sm font-medium leading-5 text-gray-600">Not sure yet</span>
                <ChevronDown className="size-5 text-gray-700" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-baseline gap-2">
                <label className="flex-1 text-sm font-semibold leading-5 text-gray-900">
                  What are you looking to understand?
                </label>
                <span className="text-xs font-medium leading-4 text-gray-600">0/300 characters</span>
              </div>
              <div className="h-[120px] rounded-lg border border-gray-200 bg-white p-3">
                <textarea
                  placeholder="Enter your message..."
                  className="size-full resize-none text-sm font-medium leading-5 text-gray-900 placeholder:text-gray-500 outline-none"
                  maxLength={300}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <PrimaryButton variant="text" color="dark" size="default" onClick={() => setShowQuotePanel(false)}>
              Cancel
            </PrimaryButton>
            <PrimaryButton size="default">
              Get a Quote
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
}
