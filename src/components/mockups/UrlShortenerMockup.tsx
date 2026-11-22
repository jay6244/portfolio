import { Link2, Copy, MousePointerClick, CheckCircle2 } from 'lucide-react';

export default function UrlShortenerMockup({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden flex flex-col ${className ?? ''}`}
      style={{ background: '#0e0f13', border: '1px solid rgba(215,226,234,0.15)' }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#D7E2EA]/10">
        <Link2 size={11} className="text-[#4c8dff]" />
        <span className="text-[#D7E2EA]/80 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide">POST /shorten</span>
      </div>

      <div className="flex-1 flex flex-col gap-2 p-3 min-h-0 justify-center">
        <div className="rounded-lg bg-black/40 border border-[#D7E2EA]/15 px-2.5 py-1.5 font-mono">
          <p className="text-[#D7E2EA]/50 text-[8px] truncate">https://docs.example.com/api/v2/reports/quarterly?id=48291</p>
        </div>

        <div className="flex items-center gap-1.5 text-[#D7E2EA]/30 text-[9px] pl-1">↓ 201 Created</div>

        <div className="flex items-center gap-2 rounded-lg bg-[#4c8dff]/10 border border-[#4c8dff]/30 px-2.5 py-1.5">
          <span className="text-[#4c8dff] text-[9px] font-mono flex-1 truncate">short.ly/a8kD2q</span>
          <Copy size={10} className="text-[#D7E2EA]/50 flex-shrink-0" />
        </div>

        <div className="flex items-center gap-3 pl-1 mt-1">
          <span className="flex items-center gap-1 text-[#5FBE94] text-[8px] uppercase tracking-wide">
            <CheckCircle2 size={10} /> Schema validated
          </span>
          <span className="flex items-center gap-1 text-[#D7E2EA]/40 text-[8px] uppercase tracking-wide">
            <MousePointerClick size={10} /> 0 clicks
          </span>
        </div>
      </div>
    </div>
  );
}
