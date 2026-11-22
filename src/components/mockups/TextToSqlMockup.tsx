import { CheckCircle2, RotateCw } from 'lucide-react';

export default function TextToSqlMockup({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden flex flex-col ${className ?? ''}`}
      style={{ background: '#0e0f13', border: '1px solid rgba(215,226,234,0.15)' }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#D7E2EA]/10">
        <span className="text-[#D7E2EA]/80 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide">Agent Trace</span>
      </div>

      <div className="flex-1 flex flex-col gap-2 p-3 min-h-0">
        <div className="rounded-lg bg-[#7621B0]/15 border border-[#7621B0]/35 px-2.5 py-1.5">
          <p className="text-[#D7E2EA] text-[9px] leading-snug">"Total revenue per region last quarter?"</p>
        </div>

        <div className="rounded-lg bg-black/40 border border-[#4c8dff]/25 px-2.5 py-2 font-mono">
          <p className="text-[9px] leading-relaxed">
            <span className="text-[#c495d9]">SELECT</span> <span className="text-[#D7E2EA]/80">region, </span>
            <span className="text-[#c495d9]">SUM</span><span className="text-[#D7E2EA]/80">(revenue)</span>
            <br />
            <span className="text-[#c495d9]">FROM</span> <span className="text-[#D7E2EA]/80">sales </span>
            <span className="text-[#c495d9]">WHERE</span> <span className="text-[#D7E2EA]/80">qtr=4</span>
            <br />
            <span className="text-[#c495d9]">GROUP BY</span> <span className="text-[#D7E2EA]/80">region;</span>
          </p>
        </div>

        <div className="flex items-center gap-3 mt-auto">
          <span className="flex items-center gap-1 text-[#5FBE94] text-[8px] uppercase tracking-wide">
            <CheckCircle2 size={11} /> Validator: executed
          </span>
          <span className="flex items-center gap-1 text-[#E0A84D] text-[8px] uppercase tracking-wide">
            <RotateCw size={11} /> Critic: 2 refinements
          </span>
        </div>
      </div>
    </div>
  );
}
