'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        const from = searchParams.get('from') || '/';
        router.push(from);
        router.refresh();
      } else {
        setError('Wrong password');
        setPassword('');
      }
    } catch {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Globe icon */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" className="text-accent" />
              <ellipse cx="16" cy="16" rx="6" ry="14" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.5" />
              <line x1="2" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.5" />
              <ellipse cx="16" cy="10" rx="12" ry="3" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.5" />
              <ellipse cx="16" cy="22" rx="12" ry="3" stroke="currentColor" strokeWidth="1" className="text-accent" opacity="0.5" />
            </svg>
          </div>
          <h1 className="font-display text-2xl font-600 text-text mb-1">
            TL Travel
          </h1>
          <p className="text-sm text-text-muted font-body">
            Enter the password to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoFocus
              className="w-full px-4 py-3 rounded-xl bg-surface border border-border/60 text-text font-body text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all"
            />
          </div>

          {error && (
            <p className="text-error text-xs font-mono text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full py-3 rounded-xl bg-accent text-white font-body text-sm font-500 hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {loading ? 'Checking...' : 'Enter'}
          </button>
        </form>

        <p className="text-center text-[0.7rem] text-text-muted/40 font-mono mt-8 tracking-wide">
          TAMLINTRAVEL.WORLD
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <p className="text-text-muted font-body text-sm">Loading...</p>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
