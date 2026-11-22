interface WorkflowStepsProps {
  steps: string[];
  accent: string;
  className?: string;
}

export default function WorkflowSteps({ steps, accent, className }: WorkflowStepsProps) {
  return (
    <div
      className={`relative overflow-hidden flex flex-col justify-center px-3 py-3 ${className ?? ''}`}
      style={{ background: 'linear-gradient(160deg, #1a1c22 0%, #0c0c0c 100%)', border: '1px solid rgba(215,226,234,0.15)' }}
    >
      <span className="text-[#D7E2EA]/45 uppercase tracking-widest text-[8px] sm:text-[9px] mb-2">Workflow</span>
      <div className="flex flex-col">
        {steps.map((step, i) => (
          <div key={step} className="flex items-stretch gap-2">
            <div className="flex flex-col items-center">
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold flex-shrink-0"
                style={{ background: accent, color: '#0C0C0C' }}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="w-px flex-1 my-0.5" style={{ background: `${accent}55` }} />
              )}
            </div>
            <span className="text-[#D7E2EA]/85 text-[9px] sm:text-[10px] leading-tight pb-2.5">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
