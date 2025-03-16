"use server";

import QuoteDisplay from "./components/QuoteDisplay";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white">
      <div className="relative flex min-h-screen flex-col items-center justify-center p-4">
        <QuoteDisplay />
      </div>
    </main>
  );
}
