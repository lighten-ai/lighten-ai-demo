"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/primary-button";
import { Input } from "@/components/input";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push("/");
      router.refresh();
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8">
        <div className="flex justify-center mb-6">
          <img src="/logomark.svg" alt="Lighten AI" width={32} height={32} />
        </div>
        <h1 className="text-center text-xl font-medium text-gray-900">Lighten AI Demo</h1>
        <p className="mt-1 text-center text-sm text-gray-600">Enter password to continue</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <Input
            type="password"
            size="md"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            isInvalid={error}
          />
          {error && <p className="text-xs text-red-500">Incorrect password</p>}
          <PrimaryButton className="w-full">Enter</PrimaryButton>
        </form>
      </div>
    </div>
  );
}
