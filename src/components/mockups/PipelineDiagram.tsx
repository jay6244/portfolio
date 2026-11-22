import { ArrowRight } from 'lucide-react';

interface PipelineDiagramProps {
  stages: string[];
  accent: string;
  className?: string;
}

export default function PipelineDiagram({ stages, accent, className }: PipelineDiagramProps) {
  return (
    <div
      className={`relative overflow-hidden flex flex-col justify-center gap-1.5 px-3 py-3 ${className ?? ''}`}
      style={{ background: 'linear-gradient(160deg, #1a1c22 0%, #0c0c0c 100%)', border: '1px solid rgba(215,226,234,0.15)' }}
    >
      <span className="text-[#D7E2EA]/45 uppercase tracking-widest text-[8px] sm:text-[9px] mb-1">Pipeline</span>
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-1.5">
          <div
            className="flex-1 rounded-md px-2 py-1.5 text-[9px] sm:text-[10px] font-medium uppercase tracking-wide truncate"
            style={{
              background: 'rgba(215,226,234,0.05)',
              border: `1px solid ${accent}55`,
              color: '#D7E2EA',
            }}
          >
            {stage}
          </div>
          {i < stages.length - 1 && (
            <ArrowRight size={11} className="flex-shrink-0 rotate-90" style={{ color: accent }} />
          )}
        </div>
      ))}
    </div>
  );
}
