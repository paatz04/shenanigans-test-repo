"use client";

import { useMemo, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
});

const percentFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function ReturnCalculatorCard() {
  const [startingCapital, setStartingCapital] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [years, setYears] = useState(10);

  const futureValue = useMemo(() => {
    return startingCapital * (1 + annualReturn / 100) ** years;
  }, [annualReturn, startingCapital, years]);

  const totalGain = futureValue - startingCapital;

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/75 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur xl:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Calculator</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Projected stock return</h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            Estimate how compound growth changes a position over time. This first version uses a
            fixed annual return and will be a clean seam for dividends, recurring contributions,
            and future charting.
          </p>
        </div>
        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          Basic model
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Starting capital</span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            min="0"
            step="100"
            type="number"
            value={startingCapital}
            onChange={(event) => setStartingCapital(Number(event.target.value) || 0)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Return per year (%)</span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            step="0.1"
            type="number"
            value={annualReturn}
            onChange={(event) => setAnnualReturn(Number(event.target.value) || 0)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-300">Years</span>
          <input
            className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
            min="0"
            step="1"
            type="number"
            value={years}
            onChange={(event) => setYears(Number(event.target.value) || 0)}
          />
        </label>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-slate-400">Projected portfolio value</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
            {currencyFormatter.format(futureValue)}
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Starting from {currencyFormatter.format(startingCapital)} at an annualized return of{" "}
            {percentFormatter.format(annualReturn)}% over {years} years.
          </p>
        </div>

        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
          <p className="text-sm text-cyan-100/80">Estimated gain</p>
          <p className="mt-3 text-3xl font-semibold text-cyan-50">{currencyFormatter.format(totalGain)}</p>
          <p className="mt-3 text-sm leading-6 text-cyan-100/70">
            This is a simplified compound-return view before taxes, fees, dividends, or additional
            contributions.
          </p>
        </div>
      </div>
    </section>
  );
}