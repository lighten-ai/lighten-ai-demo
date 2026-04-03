"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/primary-button";
import { Input } from "@/components/input";
import { Title } from "@/components/title";

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
        <Title className="text-center text-xl">Lighten AI Demo</Title>
        <p className="mt-1 text-center text-sm font-medium text-gray-600">Enter password to continue</p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <Input
            type="password"
            size="md"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false); }}
            isInvalid={error}
          />
          {error && <p className="text-xs font-medium text-red-500">Incorrect password</p>}
          <PrimaryButton size="default" className="w-full">Enter</PrimaryButton>
        </form>
      </div>
    </div>
  );
}
