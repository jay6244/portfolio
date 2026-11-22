import { GitCommit } from 'lucide-react';

function ClassBox({ name, fields }: { name: string; fields: string[] }) {
  return (
    <div className="rounded-md border border-[#7fc9b8]/40 bg-[#0e0f13] overflow-hidden w-[92px] flex-shrink-0">
      <div className="bg-[#7fc9b8]/15 px-1.5 py-1 border-b border-[#7fc9b8]/30">
        <span className="text-[#7fc9b8] text-[8px] font-semibold uppercase truncate block">{name}</span>
      </div>
      <div className="px-1.5 py-1 flex flex-col gap-0.5">
        {fields.map((f) => (
          <span key={f} className="text-[#D7E2EA]/55 text-[7px] truncate">{f}</span>
        ))}
      </div>
    </div>
  );
}

export default function AutoUmlMockup({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden flex flex-col ${className ?? ''}`}
      style={{ background: '#0e0f13', border: '1px solid rgba(215,226,234,0.15)' }}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-[#D7E2EA]/10">
        <span className="text-[#D7E2EA]/80 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide">Diagram Viewer</span>
        <span className="flex items-center gap-1 text-[8px] font-mono">
          <GitCommit size={9} className="text-[#7fc9b8]" />
          <span className="text-[#5FBE94]">+12</span>
          <span className="text-[#E2685C]">−4</span>
        </span>
      </div>
      <div className="flex-1 flex items-center justify-center gap-4 p-3 flex-wrap">
        <ClassBox name="Repository" fields={['+path: string', '+parse()']} />
        <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
          <span className="w-6 sm:w-8 h-px bg-[#7fc9b8]/50" />
          <span className="text-[#D7E2EA]/35 text-[6px]">has-a</span>
        </div>
        <ClassBox name="IRNode" fields={['+kind: string', '+edges[]']} />
      </div>
    </div>
  );
}
