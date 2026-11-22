import { Bot, Plus, User } from 'lucide-react';

export default function FutureBotsMockup({ className }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden flex ${className ?? ''}`}
      style={{ background: '#0e0f13', border: '1px solid rgba(215,226,234,0.15)' }}
    >
      <div className="w-[30%] flex flex-col gap-1.5 border-r border-[#D7E2EA]/10 p-2">
        <div className="flex items-center gap-1 text-[#D7E2EA]/70 text-[8px] uppercase tracking-wide mb-1">
          <Plus size={9} /> New chat
        </div>
        <div className="rounded-md bg-[#4c8dff]/15 border border-[#4c8dff]/30 px-1.5 py-1">
          <span className="text-[#D7E2EA]/90 text-[8px] block truncate">Hydraulic pump…</span>
        </div>
        <div className="rounded-md px-1.5 py-1">
          <span className="text-[#D7E2EA]/45 text-[8px] block truncate">Manual upload #3</span>
        </div>
        <div className="rounded-md px-1.5 py-1">
          <span className="text-[#D7E2EA]/45 text-[8px] block truncate">Torque specs</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#D7E2EA]/10">
          <span className="w-4 h-4 rounded-full bg-[#4c8dff]/30 flex items-center justify-center flex-shrink-0">
            <Bot size={9} className="text-[#4c8dff]" />
          </span>
          <span className="text-[#D7E2EA]/80 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide truncate">Mechanic Assistant</span>
          <span className="ml-auto flex items-center gap-1 text-[#D7E2EA]/40 text-[8px] flex-shrink-0">
            <User size={9} /> signed in
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-1.5 p-3 min-h-0">
          <div className="self-end max-w-[80%] rounded-xl rounded-tr-sm bg-[#4c8dff]/20 border border-[#4c8dff]/35 px-2.5 py-1.5">
            <p className="text-[#D7E2EA] text-[9px] leading-snug">Pump won't hold pressure, manual attached.</p>
          </div>
          <div className="self-start flex items-center gap-1 rounded-xl bg-[#D7E2EA]/[0.06] border border-[#D7E2EA]/15 px-2.5 py-1.5">
            <span className="w-1 h-1 rounded-full bg-[#D7E2EA]/50 animate-pulse" />
            <span className="w-1 h-1 rounded-full bg-[#D7E2EA]/40" />
            <span className="w-1 h-1 rounded-full bg-[#D7E2EA]/30" />
          </div>
        </div>
      </div>
    </div>
  );
}
