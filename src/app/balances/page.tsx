'use client';

import { loyaltyAccounts, totalBalance, totalCashValue, totalAccounts, type LoyaltyAccount } from '@/data/loyalty';
import { Plane, Building2, Coins, TrendingUp, Clock, Shield, AlertTriangle } from 'lucide-react';

function formatNumber(n: number): string {
  return n.toLocaleString();
}

function ExpirationBadge({ expiration }: { expiration?: string }) {
  if (!expiration) return null;

  if (expiration === 'Never') {
    return (
      <span className="inline-flex items-center gap-1 font-mono text-xs text-success bg-success-soft px-2 py-0.5 rounded">
        No expiry
      </span>
    );
  }

  if (expiration === 'Unknown') {
    return (
      <span className="inline-flex items-center gap-1 font-mono text-xs text-text-muted bg-bg px-2 py-0.5 rounded">
        Unknown
      </span>
    );
  }

  // Parse date and check if expiring soon (within 6 months)
  const parts = expiration.split('/');
  if (parts.length === 3) {
    const expDate = new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
    const now = new Date();
    const sixMonths = new Date();
    sixMonths.setMonth(sixMonths.getMonth() + 6);

    if (expDate < now) {
      return (
        <span className="inline-flex items-center gap-1 font-mono text-xs text-error bg-error-soft px-2 py-0.5 rounded">
          <AlertTriangle className="w-3 h-3" />
          Expired
        </span>
      );
    }

    if (expDate < sixMonths) {
      return (
        <span className="inline-flex items-center gap-1 font-mono text-xs text-warning bg-warning-soft px-2 py-0.5 rounded">
          <Clock className="w-3 h-3" />
          {expiration}
        </span>
      );
    }
  }

  return (
    <span className="font-mono text-xs text-text-muted">
      {expiration}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  // Highlight elite/premium statuses
  const isElite = /gold|platinum|diamond|globalist|senator|titanium|ambassador/i.test(status);
  if (isElite) {
    return (
      <span className="inline-flex items-center gap-1 font-mono text-xs font-500 text-accent bg-accent-soft px-2 py-1 rounded">
        <Shield className="w-3 h-3" />
        {status}
      </span>
    );
  }
  return (
    <span className="font-mono text-xs text-text-muted">
      {status}
    </span>
  );
}

function AccountRow({ account, index }: { account: LoyaltyAccount; index: number }) {
  const hasBalance = account.balance !== null && account.balance > 0;

  return (
    <div
      className="group grid grid-cols-[1fr_auto] md:grid-cols-[1.4fr_0.8fr_1fr_0.7fr] gap-4 items-center py-5 px-4 md:px-6 border-b border-border/40 last:border-b-0 transition-colors duration-150 hover:bg-surface"
      style={{
        animation: `slideInUp 0.4s ease-out ${index * 0.03}s both`,
      }}
    >
      {/* Program */}
      <div>
        <div className="font-display text-lg font-600 text-text leading-tight">
          {account.program}
        </div>
        <div className="font-body text-xs text-text-muted mt-0.5">
          {account.subProgram}
        </div>
      </div>

      {/* Balance — always visible */}
      <div className="text-right md:text-left">
        <div className={`font-display text-xl font-600 ${hasBalance ? 'text-text' : 'text-text-muted'}`}>
          {account.balanceLabel}
        </div>
        {hasBalance && account.currency && (
          <div className="font-mono text-xs text-text-muted">
            {account.currency}
            {account.cashValue && (
              <span className="ml-1 text-text-muted/70">@ {account.cashValue}</span>
            )}
          </div>
        )}
      </div>

      {/* Status — hidden on mobile */}
      <div className="hidden md:block">
        <StatusBadge status={account.status} />
      </div>

      {/* Expiration — hidden on mobile */}
      <div className="hidden md:block text-right">
        <ExpirationBadge expiration={account.expiration} />
      </div>
    </div>
  );
}

function CategorySection({
  title,
  icon,
  accounts,
  startIndex,
}: {
  title: string;
  icon: React.ReactNode;
  accounts: LoyaltyAccount[];
  startIndex: number;
}) {
  const categoryTotal = accounts.reduce((sum, a) => sum + (a.balance ?? 0), 0);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-2 px-4 md:px-6">
        <div className="flex items-center gap-2">
          {icon}
          <h2 className="font-display text-2xl font-600 text-text">{title}</h2>
        </div>
        {categoryTotal > 0 && (
          <div className="font-mono text-sm text-text-muted">
            {formatNumber(categoryTotal)} total
          </div>
        )}
      </div>

      {/* Column headers */}
      <div className="hidden md:grid grid-cols-[1.4fr_0.8fr_1fr_0.7fr] gap-4 px-4 md:px-6 py-2 border-b border-border/60">
        <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Program</div>
        <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Balance</div>
        <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Status</div>
        <div className="font-mono text-xs text-text-muted uppercase tracking-wider text-right">Expires</div>
      </div>

      {/* Rows */}
      <div className="bg-surface border border-border/60 rounded-xl shadow-card overflow-hidden">
        {accounts.map((account, i) => (
          <AccountRow key={`${account.program}-${account.subProgram}`} account={account} index={startIndex + i} />
        ))}
      </div>
    </div>
  );
}

export default function BalancesPage() {
  const airlines = loyaltyAccounts.filter((a) => a.category === 'airline');
  const hotels = loyaltyAccounts.filter((a) => a.category === 'hotel');
  const other = loyaltyAccounts.filter((a) => a.category === 'other');

  return (
    <div className="min-h-screen bg-bg">
      <section
        className="mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24"
        style={{ maxWidth: '960px', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Coins className="w-8 h-8 text-accent" />
            <h1 className="font-display text-4xl md:text-5xl font-600 text-text">
              Loyalty Balances
            </h1>
          </div>
          <p className="font-body text-lg text-text-secondary max-w-2xl">
            All programs tracked via AwardWallet
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <div className="bg-surface border border-border/60 rounded-xl p-6 shadow-card">
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
              Total Points & Miles
            </div>
            <div className="font-display text-3xl md:text-4xl font-700 text-text">
              {formatNumber(totalBalance)}
            </div>
          </div>
          <div className="bg-surface border border-border/60 rounded-xl p-6 shadow-card">
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Cash Value
            </div>
            <div className="font-display text-3xl md:text-4xl font-700 text-accent">
              ${formatNumber(totalCashValue)}
            </div>
          </div>
          <div className="bg-surface border border-border/60 rounded-xl p-6 shadow-card col-span-2 md:col-span-1">
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">
              Programs
            </div>
            <div className="font-display text-3xl md:text-4xl font-700 text-text">
              {totalAccounts}
            </div>
          </div>
        </div>

        {/* Airlines */}
        <CategorySection
          title="Airlines"
          icon={<Plane className="w-5 h-5 text-accent" />}
          accounts={airlines}
          startIndex={0}
        />

        {/* Hotels */}
        <CategorySection
          title="Hotels"
          icon={<Building2 className="w-5 h-5 text-accent" />}
          accounts={hotels}
          startIndex={airlines.length}
        />

        {/* Other */}
        {other.length > 0 && (
          <CategorySection
            title="Other"
            icon={<Coins className="w-5 h-5 text-accent" />}
            accounts={other}
            startIndex={airlines.length + hotels.length}
          />
        )}

        {/* Data freshness note */}
        <div className="mt-8 text-center">
          <p className="font-mono text-xs text-text-muted">
            Data sourced from AwardWallet — last synced April 10, 2026
          </p>
        </div>
      </section>

      {/* Animation keyframes */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
