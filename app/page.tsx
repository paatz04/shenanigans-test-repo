import { ReturnCalculatorCard } from "./components/return-calculator-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Stock Tools
            </p>
            <h1 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
              Stock return calculator
            </h1>
          </div>
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 sm:block">
            Dark mode baseline
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            First calculator
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Model long-term stock growth before adding more advanced analytics.
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Start with a simple compound-return estimate. This page is now structured for future
            additions such as dividends, recurring investments, comparison benchmarks, and charts.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Inputs</p>
              <p className="mt-2 text-lg font-semibold text-white">3 core fields</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Theme</p>
              <p className="mt-2 text-lg font-semibold text-white">Tailwind dark UI</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-slate-400">Next step</p>
              <p className="mt-2 text-lg font-semibold text-white">Charts and cash flows</p>
            </div>
          </div>
        </div>

        <ReturnCalculatorCard />
      </section>
    </main>
  );
}