'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

function MovingBackground() {
  useEffect(() => {
    const root = document.documentElement;

    const updateScroll = () => {
      root.style.setProperty('--scrollY', String(window.scrollY || 0));
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="bg-root" aria-hidden="true">
      <div className="bg-layer glow" />
      <div className="bg-layer grid" />
      <div className="bg-layer noise" />
      <div className="bg-fade-bottom" />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-[color:var(--bg-3)]/80 border border-white/5 rounded-full px-6 md:px-8 py-3 md:py-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full grid place-items-center border border-white/10 bg-[radial-gradient(circle_at_30%_0,_var(--accent-glow),_var(--bg-2))] text-xs font-black tracking-widest">
            XR
          </div>
          <span className="hidden md:block text-xl md:text-2xl font-bold tracking-wider">
            XYREL
          </span>
        </div>

        <div className="hidden lg:flex gap-8 text-sm font-medium">
          <a href="#home" className="text-gray-300/80 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-gray-300/80 hover:text-white transition-colors">About</a>
          <a href="#features" className="text-gray-300/80 hover:text-white transition-colors">Features</a>
          <a href="#use-cases" className="text-gray-300/80 hover:text-white transition-colors">Use Cases</a>
          <a href="#pricing" className="text-gray-300/80 hover:text-white transition-colors">Pricing</a>
          <Link href="/docs" className="text-gray-300/80 hover:text-white transition-colors">Docs</Link>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://app.xyrelprivacy.tech" className="group relative">
            <div className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-[color:var(--accent)]/20" />
            <div className="relative bg-[color:var(--accent)]/15 hover:bg-[color:var(--accent)]/25 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all backdrop-blur-xl border border-[color:var(--accent)]/40 hover:border-[color:var(--accent)]/70 whitespace-nowrap tracking-wide shadow-[0_0_18px_rgba(69,167,166,0.25)] hover:shadow-[0_0_28px_rgba(69,167,166,0.45)]">
              LAUNCH APP
            </div>
          </a>

          <button
            type="button"
            className="lg:hidden text-white p-2 rounded-lg bg-[color:var(--accent)]/10 border border-[color:var(--accent)]/30 hover:bg-[color:var(--accent)]/20 transition-all"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function SectionTitle({
  kicker,
  title,
  accent,
  desc,
}: {
  kicker: string;
  title: string;
  accent?: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
      <div className="inline-flex items-center gap-2 px-5 py-2 border border-[color:var(--accent)]/40 rounded-full bg-[color:var(--accent)]/5 backdrop-blur-xl shadow-[0_0_30px_rgba(69,167,166,0.18)]">
        <div className="w-2 h-2 rounded-full animate-pulse bg-[color:var(--accent)] shadow-[0_0_10px_rgba(69,167,166,0.65)]" />
        <span className="text-[color:var(--accent)] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
          {kicker}
        </span>
      </div>

      <h2 className="mt-6 text-3xl md:text-5xl font-bold">
        {title}{' '}
        {accent ? (
          <span className="bg-gradient-to-r from-white to-[color:var(--accent)] bg-clip-text text-transparent">
            {accent}
          </span>
        ) : null}
      </h2>

      {desc ? (
        <p className="mt-4 text-gray-300/90 text-base md:text-lg leading-relaxed">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        'relative rounded-[2rem] p-7 md:p-8 bg-black/30 backdrop-blur-xl border border-white/5',
        'hover:border-[color:var(--accent)]/30 transition-all',
        'shadow-[0_0_0_1px_rgba(255,255,255,0.03)]',
        className,
      ].join(' ')}
    >
      <div className="absolute inset-0 rounded-[2rem] opacity-0 hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_30%_0,_rgba(106,204,204,0.16),_transparent_50%)]" />
      <div className="relative">{children}</div>
    </div>
  );
}


export default function Page() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [copied, setCopied] = useState(false);

  const contract = 'CRCTEPK5gT1cKMoKR1cumjruwhZ2J5jKzGckgCAFG9EK';

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(contract);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  }

  return (
    <>
      <MovingBackground />
      <div className="relative min-h-screen">
        <Navbar />

        {/* HERO */}
        <section id="home" className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-28 md:pt-36">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full blur-[120px] animate-pulse bg-[color:var(--accent)]/20" />
            <div className="absolute bottom-40 right-[15%] w-96 h-96 rounded-full blur-[150px] animate-pulse delay-1000 bg-[color:var(--accent)]/10" />
          </div>

          <div className="relative z-20 px-4 md:px-8 lg:px-12 text-center flex flex-col items-center">
            <div className="max-w-7xl mx-auto w-full">
              <div className="mb-8 md:mb-12 flex flex-col items-center gap-4">
                <div className="inline-flex items-center gap-2 px-5 py-2 border border-[color:var(--accent)]/40 rounded-full bg-[color:var(--accent)]/5 backdrop-blur-xl shadow-[0_0_30px_rgba(69,167,166,0.18)]">
                  <div className="w-2 h-2 rounded-full animate-pulse bg-[color:var(--accent)] shadow-[0_0_10px_rgba(69,167,166,0.65)]" />
                  <span className="text-[color:var(--accent)] text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    Encrypted Asset Vault
                  </span>
                </div>
              </div>

              <div className="relative mb-8 md:mb-12">
                <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-[color:var(--accent)]/10 to-transparent blur-2xl" />
                <h1 className="relative text-[clamp(3rem,10vw,7.5rem)] leading-[0.95] font-black mb-4">
                  <span className="block bg-gradient-to-r from-white via-white to-[color:var(--accent)] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(69,167,166,0.35)]">
                    YOUR KEY,
                  </span>
                  <span className="block bg-gradient-to-r from-[color:var(--accent)] via-white to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(69,167,166,0.35)]">
                    YOUR ASSETS.
                  </span>
                </h1>

                <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-6 md:mt-8 mb-8">
                  {['ENCRYPTED', 'PRIVATE', 'SECURE'].map((tag) => (
                    <div key={tag} className="group relative">
                      <div className="absolute inset-0 bg-[color:var(--accent)]/20 blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-black/40 backdrop-blur-xl border border-[color:var(--accent)]/30 rounded-lg">
                        <span className="text-xs md:text-sm font-mono text-gray-300 font-semibold">
                          {tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-base md:text-lg lg:text-xl text-white mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed px-4 font-light tracking-wide">
                XYREL is an encrypted platform to handle your assets in private.
                <span className="block mt-2 text-white">Create a wallet as your vault and maintain complete control.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full sm:w-auto px-4">
                <a href="https://app.xyrelprivacy.tech" className="group relative w-full sm:w-auto">
                  <div className="absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity rounded-full bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)]" />
                  <div className="relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-base transition-all group-hover:scale-105 shadow-[0_0_30px_rgba(69,167,166,0.35)] group-hover:shadow-[0_0_50px_rgba(69,167,166,0.55)] border border-[color:var(--accent)]/50 w-full sm:w-auto">
                    <span className="tracking-wide">LAUNCH APP</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </a>

                <Link href="/docs" className="group relative w-full sm:w-auto">
                  <div className="absolute inset-0 bg-[color:var(--accent)]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <div className="relative inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-full border-2 border-[color:var(--accent)]/40 hover:border-[color:var(--accent)]/70 transition-all font-bold text-sm md:text-base backdrop-blur-xl bg-black/20 group-hover:bg-black/40 text-gray-300 group-hover:text-white w-full sm:w-auto">
                    <span className="tracking-wide">DOCS</span>
                  </div>
                </Link>
              </div>

              <div className="mt-8 md:mt-12 px-4">
                <button type="button" onClick={onCopy} className="group relative mx-auto max-w-2xl w-full">
                  <div className="absolute inset-0 bg-[color:var(--accent)]/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative flex items-center justify-between gap-3 px-4 md:px-6 py-3 md:py-4 bg-black/40 backdrop-blur-xl border border-[color:var(--accent)]/30 group-hover:border-[color:var(--accent)]/50 rounded-xl transition-all">
                    <div className="flex-1 flex items-center justify-center gap-2 md:gap-3">
                      <span className="text-[8px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">CONTRACT</span>
                      <span className="font-mono text-[10px] md:text-sm text-white truncate max-w-[200px] sm:max-w-none">
                        <span className="hidden sm:inline">{contract}</span>
                        <span className="sm:hidden">{contract.slice(0, 8)}...{contract.slice(-8)}</span>
                      </span>
                    </div>
                    <div className="flex-shrink-0 text-[color:var(--accent)]">
                      {copied ? (
                        <span className="text-xs font-semibold">Copied</span>
                      ) : (
                        <span className="text-xs font-semibold">Copy</span>
                      )}
                    </div>
                  </div>
                </button>
              </div>

              <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto px-4">
                {[
                  { k: '256', v: 'BIT ENCRYPTION' },
                  { k: '100%', v: 'SELF CUSTODY' },
                  { k: 'ZERO', v: 'KNOWLEDGE PROOF' },
                ].map((x) => (
                  <div key={x.v} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--accent)]/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 md:p-8 bg-black/30 backdrop-blur-xl border border-[color:var(--accent)]/20 rounded-2xl text-center group-hover:border-[color:var(--accent)]/40 transition-all">
                      <div className="text-3xl md:text-4xl font-black text-[color:var(--accent)] mb-2 font-mono">{x.k}</div>
                      <div className="text-xs md:text-sm text-gray-400 uppercase tracking-widest font-semibold">{x.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="min-h-screen flex flex-col justify-center py-20">
          <div className="px-4 md:px-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  What is <span className="bg-gradient-to-r from-white to-[color:var(--accent)] bg-clip-text text-transparent">XYREL?</span>
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  XYREL is an encrypted platform designed to handle your digital assets with complete privacy and security.
                </p>
                <p className="text-gray-400 text-base leading-relaxed">
                  Create a secure wallet vault protected by end-to-end encryption. Only you have access to your private keys.
                </p>
              </div>

              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { n: '01', t: 'Your Keys', d: 'You hold the keys. We simply provide the vault.' },
                  { n: '02', t: 'Your Assets', d: 'Full ownership and control of your digital assets at all times.' },
                  { n: '03', t: 'Encrypted', d: 'Battle-tested encryption protects data in transit and at rest.' },
                  { n: '04', t: 'Private Vault', d: 'Create secure vaults protected by advanced cryptography.' },
                ].map((c) => (
                  <div key={c.n} className="relative rounded-[2.25rem] p-8 bg-black/30 backdrop-blur-xl border border-white/5 hover:border-[color:var(--accent)]/30 transition-all">
                    <div className="text-6xl font-bold text-[color:var(--accent)]/20 mb-4 group-hover:text-[color:var(--accent)]/35 transition-colors">
                      {c.n}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{c.t}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{c.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-28">
          <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <SectionTitle
              kicker="Features"
              title="Security-first features for"
              accent="real custody"
              desc="Designed to keep keys private, assets controlled, and access minimal by default."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  t: 'Vault Wallets',
                  d: 'Create dedicated vaults with strict permission boundaries for each asset cluster.',
                  tag: 'VAULT',
                },
                {
                  t: 'STEALTH Mode',
                  d: 'Low-visibility UI and reduced metadata exposure for sensitive environments.',
                  tag: 'STEALTH',
                },
                {
                  t: 'Encrypted Notes',
                  d: 'Store recovery hints and operational notes inside encrypted containers.',
                  tag: 'E2E',
                },
                {
                  t: 'Safe Transfers',
                  d: 'Guardrails for destination checks and transfer confirmation patterns.',
                  tag: 'VERIFY',
                },
                {
                  t: 'Session Controls',
                  d: 'Auto-lock, device binding patterns, and revocable session tokens.',
                  tag: 'CONTROL',
                },
                {
                  t: 'Audit Signals',
                  d: 'Surface security events and suspicious flows without exposing private data.',
                  tag: 'SIGNALS',
                },
              ].map((f) => (
                <GlassCard key={f.t}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-xs font-mono tracking-[0.25em] text-gray-400">
                      {f.tag}
                    </div>
                    <div className="h-10 w-10 rounded-2xl border border-[color:var(--accent)]/25 bg-[color:var(--accent)]/10 grid place-items-center text-[color:var(--accent)] shadow-[0_0_18px_rgba(69,167,166,0.18)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2 4 7v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V7l-8-5Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{f.t}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{f.d}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="py-20 md:py-28">
          <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <SectionTitle
              kicker="Use Cases"
              title="Built for different"
              accent="security postures"
              desc="Whether you are solo, a tight team, or managing multiple wallets, XYREL adapts."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  t: 'Solo custody, zero distractions',
                  d: 'Minimal surface area, fast access, and strong defaults. Perfect for personal vault hygiene.',
                  bullets: ['Auto-lock sessions', 'Vault separation', 'Clean transfer flow'],
                },
                {
                  t: 'Team operator workflows',
                  d: 'Structure access and reduce key exposure when multiple people handle operational moves.',
                  bullets: ['Role-like boundaries', 'Session controls', 'Event signals'],
                },
                {
                  t: 'High-risk environment mode',
                  d: 'Use reduced-visibility interface patterns to lower opportunistic exposure.',
                  bullets: ['STEALTH Mode UI', 'Reduced metadata', 'Fast lock + exit'],
                },
                {
                  t: 'Multi-vault asset management',
                  d: 'Split assets by strategy, risk, or purpose. Organize without mixing custody contexts.',
                  bullets: ['Label vaults', 'Transfer guardrails', 'Operational notes'],
                },
              ].map((u) => (
                <GlassCard key={u.t} className="p-8 md:p-10">
                  <h3 className="text-2xl font-bold">{u.t}</h3>
                  <p className="mt-3 text-gray-300/90 leading-relaxed">{u.d}</p>
                  <ul className="mt-6 space-y-3">
                    {u.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_rgba(69,167,166,0.45)]" />
                        <span className="text-sm text-gray-400 leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 md:py-28">
          <div className="px-4 md:px-8 max-w-7xl mx-auto">
            <SectionTitle
              kicker="Pricing"
              title="Start simple, scale"
              accent="securely"
              desc="Choose the package that matches your custody scope. No forced complexity."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Starter',
                  price: 'Free',
                  desc: 'Basic vault experience for individual custody.',
                  features: ['Single vault', 'Auto-lock', 'Basic transfer flow'],
                  cta: { label: 'Get Started', href: 'https://app.xyrelprivacy.tech' },
                },
                {
                  name: 'Pro',
                  price: '$9',
                  desc: 'More vault separation and operational controls.',
                  features: ['Multiple vaults', 'STEALTH Mode', 'Session controls'],
                  highlight: true,
                  cta: { label: 'Go Pro', href: 'https://app.xyrelprivacy.tech' },
                },
                {
                  name: 'Team',
                  price: 'Custom',
                  desc: 'For teams that need structured operation and visibility controls.',
                  features: ['Operational signals', 'Advanced controls', 'Priority support'],
                  cta: { label: 'Contact', href: 'mailto:hello@xyrelprivacy.tech' },
                },
              ].map((p) => (
                <div key={p.name} className="relative">
                  {p.highlight ? (
                    <div className="absolute -inset-1 rounded-[2.25rem] bg-gradient-to-r from-[color:var(--accent)]/50 to-[color:var(--accent-2)]/30 blur-xl opacity-50" />
                  ) : null}

                  <div
                    className={[
                      'relative rounded-[2.25rem] p-8 md:p-10 bg-black/35 backdrop-blur-xl border',
                      p.highlight
                        ? 'border-[color:var(--accent)]/45 shadow-[0_0_50px_rgba(69,167,166,0.25)]'
                        : 'border-white/5 hover:border-[color:var(--accent)]/25',
                      'transition-all',
                    ].join(' ')}
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold">{p.name}</div>
                      {p.highlight ? (
                        <div className="text-xs font-mono tracking-[0.2em] text-[color:var(--accent)]">
                          RECOMMENDED
                        </div>
                      ) : null}
                    </div>

                    <div className="mt-5 flex items-end gap-2">
                      <div className="text-4xl md:text-5xl font-black text-white">
                        {p.price}
                      </div>
                      {p.price === '$9' ? (
                        <div className="text-gray-400 mb-1">/mo</div>
                      ) : null}
                    </div>

                    <p className="mt-4 text-gray-400 leading-relaxed">{p.desc}</p>

                    <ul className="mt-8 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="mt-1 h-5 w-5 rounded-lg border border-[color:var(--accent)]/35 bg-[color:var(--accent)]/10 grid place-items-center text-[color:var(--accent)]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="14"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m20 6-11 11-5-5" />
                            </svg>
                          </span>
                          <span className="text-sm text-gray-300/90 leading-relaxed">
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={p.cta.href}
                      className={[
                        'mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-bold text-sm md:text-base',
                        p.highlight
                          ? 'bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--accent-2)] text-white shadow-[0_0_30px_rgba(69,167,166,0.35)]'
                          : 'bg-[color:var(--accent)]/15 text-white border border-[color:var(--accent)]/35 hover:border-[color:var(--accent)]/70 hover:bg-[color:var(--accent)]/25',
                        'transition-all',
                      ].join(' ')}
                    >
                      {p.cta.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 py-8 text-sm text-gray-400">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
            <div>© {year} XYREL. Built on a quiet grid.</div>
            <div className="flex gap-6">
              <Link className="hover:text-[color:var(--accent)]" href="/docs">Docs</Link>
              <a className="hover:text-[color:var(--accent)]" href="#">GitHub</a>
              <a className="hover:text-[color:var(--accent)]" href="#">X (Twitter)</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
