import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Bot,
  CreditCard,
  Layers3,
  LineChart,
  MousePointerClick,
  ShoppingBag,
  Sparkles,
  Timer,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#06080b] text-zinc-50">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-[-12rem] h-[520px] w-[720px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-80px,rgba(16,185,129,0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_30%,rgba(0,0,0,0.65))]" />
      </div>

      <main className="relative mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              Premium Analytics • Emerald Edition
            </div>
            <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              BQ Growth Dashboard
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-zinc-300 sm:text-base">
              Pantau performa kreatif, biaya iklan, dan revenue dalam satu tampilan
              premium. Fokus cepat, keputusan cepat.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#ai-lab"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-4 py-2 text-sm font-medium text-emerald-100 backdrop-blur transition hover:bg-emerald-500/20"
            >
              <Bot className="h-4 w-4 text-[#10B981]" />
              AI Lab
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 backdrop-blur transition hover:bg-white/10"
            >
              <Layers3 className="h-4 w-4 text-zinc-200" />
              Export
            </button>
          </div>
        </header>

        {/* Bento Grid Stats */}
        <section className="mt-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
            <StatCard
              title="MER"
              value="3.2"
              subtitle="Marketing Efficiency Ratio"
              icon={<LineChart className="h-5 w-5 text-emerald-300" />}
              className="lg:col-span-4"
              accent="emerald"
            />
            <StatCard
              title="ROAS"
              value="5.4"
              subtitle="Return on Ad Spend"
              icon={<Sparkles className="h-5 w-5 text-emerald-300" />}
              className="lg:col-span-4"
              accent="emerald"
            />
            <StatCard
              title="Ad Spend"
              value="Rp 24.800.000"
              subtitle="Last 7 days"
              icon={<CreditCard className="h-5 w-5 text-emerald-300" />}
              className="lg:col-span-4"
            />
            <StatCard
              title="Revenue"
              value="Rp 134.200.000"
              subtitle="Attributed + Organic"
              icon={<Banknote className="h-5 w-5 text-emerald-300" />}
              className="lg:col-span-12"
              large
              accent="emerald"
            />
          </div>
        </section>

        {/* Funnel Tracker */}
        <section className="mt-10">
          <GlassPanel>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-100">
                  <Timer className="h-4 w-4 text-emerald-300" />
                  Funnel Tracker
                </div>
                <p className="text-sm text-zinc-300">
                  Visualisasi alur dari hook sampai purchase. Gunakan untuk
                  mengidentifikasi bottleneck.
                </p>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 backdrop-blur">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Live snapshot
              </div>
            </div>

            <div className="mt-6 grid gap-3 lg:grid-cols-5">
              <FunnelStep
                title="Hook Rate (3s)"
                value="42%"
                icon={<MousePointerClick className="h-4 w-4" />}
                tone="good"
              />
              <FunnelStep
                title="Video View 25%"
                value="31%"
                icon={<LineChart className="h-4 w-4" />}
                tone="good"
              />
              <FunnelStep
                title="Landing Click"
                value="12%"
                icon={<MousePointerClick className="h-4 w-4" />}
                tone="mid"
              />
              <FunnelStep
                title="Add to Cart"
                value="6.8%"
                icon={<ShoppingBag className="h-4 w-4" />}
                tone="mid"
              />
              <FunnelStep
                title="Purchase"
                value="2.1%"
                icon={<Banknote className="h-4 w-4" />}
                tone="needs"
              />
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-zinc-300">
                <span>Hook → Purchase momentum</span>
                <span className="text-emerald-200">Emerald Focus</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/5">
                <div className="h-full w-[58%] rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0.85),rgba(16,185,129,0.35))]" />
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* AI Lab */}
        <section id="ai-lab" className="mt-10">
          <div className="grid gap-4 lg:grid-cols-12">
            <GlassPanel className="lg:col-span-7">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100">
                    <Bot className="h-4 w-4 text-emerald-300" />
                    AI Lab
                  </div>
                  <p className="text-sm text-zinc-300">
                    Eksperimen cepat untuk creative & copy. Semua tool AI
                    ditempatkan rapi di sini.
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 p-2 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href="#tiktok-hook-generator"
                  className="group rounded-2xl border border-emerald-500/30 bg-[linear-gradient(180deg,rgba(16,185,129,0.22),rgba(255,255,255,0.04))] p-4 backdrop-blur transition hover:border-emerald-400/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-50">
                        <Sparkles className="h-4 w-4 text-[#10B981]" />
                        TikTok Hook Generator
                      </div>
                      <p className="text-sm leading-6 text-zinc-200/90">
                        Generate 10 hook dalam 10 detik—sesuai angle, pain point,
                        dan style creator.
                      </p>
                    </div>
                    <div className="mt-0.5 rounded-full border border-white/10 bg-white/5 p-2 text-zinc-100 transition group-hover:bg-white/10">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-zinc-200/90">
                    <span className="inline-flex items-center gap-2">
                      <MousePointerClick className="h-3.5 w-3.5 text-emerald-200" />
                      Click to open
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur">
                      New
                    </span>
                  </div>
                </Link>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-50">
                        <Bot className="h-4 w-4 text-emerald-200" />
                        Creative QA
                      </div>
                      <p className="text-sm leading-6 text-zinc-300">
                        Audit cepat: pacing, clarity, CTA, dan compliance.
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 p-2">
                      <Sparkles className="h-4 w-4 text-zinc-200" />
                    </div>
                  </div>
                  <div className="mt-4 text-xs text-zinc-400">
                    Coming soon
                  </div>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel className="lg:col-span-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-zinc-100">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  Focus Notes
                </div>
                <ul className="space-y-3 text-sm text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400/80" />
                    Prioritaskan testing hook 0–3s untuk dorong funnel paling
                    atas.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400/50" />
                    Saat MER turun, cek mismatch creative → landing → offer.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400/30" />
                    Jaga ROAS stabil dengan guardrail spend harian.
                  </li>
                </ul>
              </div>
            </GlassPanel>
          </div>
        </section>

        <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400/80" />
            Premium dark glass UI • Accent{" "}
            <span className="font-medium text-emerald-200">#10B981</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <span id="tiktok-hook-generator" className="sr-only">
              TikTok Hook Generator
            </span>
            <span className="inline-flex items-center gap-1">
              Built with <Sparkles className="h-3.5 w-3.5 text-emerald-200" />{" "}
              Next.js
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

function GlassPanel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  icon,
  className,
  large,
  accent,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
  large?: boolean;
  accent?: "emerald";
}) {
  const glow =
    accent === "emerald"
      ? "before:absolute before:inset-0 before:rounded-3xl before:bg-[radial-gradient(900px_260px_at_10%_0%,rgba(16,185,129,0.28),transparent_55%)] before:opacity-100"
      : "before:absolute before:inset-0 before:rounded-3xl before:bg-[radial-gradient(800px_220px_at_10%_0%,rgba(255,255,255,0.10),transparent_55%)] before:opacity-80";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_18px_50px_rgba(0,0,0,0.55)]",
        glow,
        className ?? "",
      ].join(" ")}
    >
      <div className="relative flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="text-xs font-medium tracking-wide text-zinc-300">
            {title}
          </div>
          <div className={["font-semibold", large ? "text-3xl sm:text-4xl" : "text-2xl"].join(" ")}>
            {value}
          </div>
          <div className="text-sm text-zinc-300">{subtitle}</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-100">
          {icon}
        </div>
      </div>
      <div className="relative mt-5 flex items-center justify-between text-xs text-zinc-400">
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          Updated just now
        </span>
        <span className="inline-flex items-center gap-1 text-zinc-300">
          Detail <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </div>
  );
}

function FunnelStep({
  title,
  value,
  icon,
  tone,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  tone: "good" | "mid" | "needs";
}) {
  const toneStyles =
    tone === "good"
      ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-100"
      : tone === "mid"
        ? "border-white/10 bg-white/5 text-zinc-100"
        : "border-emerald-500/15 bg-white/5 text-zinc-100";

  const badge =
    tone === "good" ? "Strong" : tone === "mid" ? "Watch" : "Fix";

  return (
    <div className="relative">
      <div
        className={[
          "rounded-2xl border p-4 backdrop-blur",
          toneStyles,
          "shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_14px_40px_rgba(0,0,0,0.45)]",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="text-xs text-zinc-300">{title}</div>
            <div className="text-lg font-semibold text-zinc-50">{value}</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-200">
            {icon}
          </div>
        </div>
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-200">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          {badge}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 top-1/2 hidden -translate-y-1/2 text-zinc-500/70 lg:block"
      >
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );
}
