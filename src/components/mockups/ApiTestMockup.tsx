import { CheckCircle2, XCircle } from 'lucide-react';

const TESTS = [
  { name: 'auth · valid login returns 200', pass: true },
  { name: 'auth · invalid token returns 401', pass: true },
  { name: 'users · create → 201 + schema', pass: true },
  { name: 'users · missing field → 422', pass: false },
  { name: 'users · unauthorized delete → 403', pass: true },
];

export default function ApiTestMockup({ className }: { className?: string }) {
  const passed = TESTS.filter((t) => t.pass).length;
  return (
    <div
      className={`relative overflow-hidden flex flex-col ${className ?? ''}`}
      style={{ background: '#0e0f13', border: '1px solid rgba(215,226,234,0.15)' }}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#D7E2EA]/10">
        <span className="text-[#D7E2EA]/80 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide">Test Run</span>
        <span className="text-[8px] font-mono">
          <span className="text-[#5FBE94]">{passed} passed</span>
          <span className="text-[#D7E2EA]/30"> · </span>
          <span className="text-[#E2685C]">{TESTS.length - passed} failed</span>
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-1.5 p-3 min-h-0 justify-center">
        {TESTS.map((t) => (
          <div key={t.name} className="flex items-center gap-1.5">
            {t.pass ? (
              <CheckCircle2 size={11} className="text-[#5FBE94] flex-shrink-0" />
            ) : (
              <XCircle size={11} className="text-[#E2685C] flex-shrink-0" />
            )}
            <span className="text-[#D7E2EA]/75 text-[8px] sm:text-[9px] font-mono truncate">{t.name}</span>
          </div>
        ))}
      </div>

      <div className="px-3 py-1.5 border-t border-[#D7E2EA]/10">
        <div className="h-1 rounded-full overflow-hidden bg-[#D7E2EA]/10 flex">
          <span className="h-full bg-[#5FBE94]" style={{ width: `${(passed / TESTS.length) * 100}%` }} />
          <span className="h-full bg-[#E2685C]" style={{ width: `${((TESTS.length - passed) / TESTS.length) * 100}%` }} />
        </div>
      </div>
    </div>
  );
}
