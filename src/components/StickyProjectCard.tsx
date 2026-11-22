import type { ComponentType } from 'react';
import { ClipboardCheck, BarChart3 } from 'lucide-react';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import LiveProjectButton from './LiveProjectButton';
import PipelineDiagram from './mockups/PipelineDiagram';
import WorkflowSteps from './mockups/WorkflowSteps';
import FutureBotsMockup from './mockups/FutureBotsMockup';
import AutoUmlMockup from './mockups/AutoUmlMockup';
import TextToSqlMockup from './mockups/TextToSqlMockup';
import ApiTestMockup from './mockups/ApiTestMockup';
import UrlShortenerMockup from './mockups/UrlShortenerMockup';
import { profile, type Project } from '../data/content';

const PALETTE_ACCENT: Record<'a' | 'b' | 'c', string> = {
  a: '#8b9bab',
  b: '#c495d9',
  c: '#7fc9b8',
};

const PREVIEW_MOCKUPS: Record<string, ComponentType<{ className?: string }>> = {
  autouml: AutoUmlMockup,
  futurebots: FutureBotsMockup,
  'text-to-sql': TextToSqlMockup,
  'api-test-automation': ApiTestMockup,
  'url-shortener': UrlShortenerMockup,
};

interface StickyProjectCardProps {
  project: Project;
  index: number;
  total: number;
  palette: 'a' | 'b' | 'c';
  progress: MotionValue<number>;
}

export default function StickyProjectCard({
  project,
  index,
  total,
  palette,
  progress,
}: StickyProjectCardProps) {
  const targetScale = 1 - (total - index) * 0.06;
  const range: [number, number] = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-14 sm:top-20 md:top-24 h-screen flex items-start justify-center pt-2 sm:pt-4">
      <motion.div
        style={{ scale, transformOrigin: 'top center' }}
        className="w-full max-w-5xl h-[78vh] sm:h-[80vh] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2rem, 6vw, 80px)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/70 uppercase tracking-widest text-[10px] sm:text-xs">
                {project.category}
              </span>
              <span className="text-[#D7E2EA] font-semibold uppercase tracking-wide text-base sm:text-xl md:text-2xl">
                {project.name}
              </span>
              {project.award && (
                <span className="text-amber-300/90 uppercase tracking-widest text-[10px] sm:text-xs mt-1">
                  🏆 {project.award}
                </span>
              )}
            </div>
          </div>
          {project.github ? (
            <LiveProjectButton href={project.github} label="View on GitHub" />
          ) : (
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(`Code access — ${project.name}`)}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA]/25 text-[#D7E2EA]/70 font-medium uppercase tracking-widest px-6 py-2.5 text-xs sm:text-sm whitespace-nowrap transition-all duration-200 hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA]"
            >
              Private — request access
            </a>
          )}
        </div>

        <p className="prose-serif text-[#D7E2EA]/85 text-sm sm:text-base leading-relaxed max-w-3xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[#D7E2EA]/70 text-[10px] sm:text-xs uppercase tracking-wide border border-[#D7E2EA]/25 rounded-full px-3 py-1 transition-all duration-200 hover:border-[#D7E2EA]/60 hover:text-[#D7E2EA] hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.evaluatedOn && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-[#5FBE94] text-[10px] sm:text-xs uppercase tracking-wide">
              <ClipboardCheck size={13} /> Evaluated on
            </span>
            {project.evaluatedOn.map((metric) => (
              <span
                key={metric}
                className="text-[#5FBE94]/90 text-[10px] sm:text-xs uppercase tracking-wide border border-[#5FBE94]/30 rounded-full px-3 py-1"
              >
                {metric}
              </span>
            ))}
          </div>
        )}

        {project.benchmarkResults && (
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex items-center gap-1.5 text-[#4c8dff] text-[10px] sm:text-xs uppercase tracking-wide flex-shrink-0">
                <BarChart3 size={13} /> Preliminary evaluation
              </span>
              {project.benchmarkResults.map((r) => (
                <span
                  key={r.label}
                  className="flex items-baseline gap-1 text-[10px] sm:text-xs uppercase tracking-wide border border-[#4c8dff]/30 rounded-full px-3 py-1"
                >
                  <span className="text-[#4c8dff] font-bold">{r.value}</span>
                  <span className="text-[#D7E2EA]/60">{r.label}</span>
                </span>
              ))}
            </div>
            {project.benchmarkNote && (
              <p className="text-[#D7E2EA]/50 text-[10px] sm:text-xs leading-relaxed max-w-2xl">{project.benchmarkNote}</p>
            )}
          </div>
        )}

        <div className="flex-1 min-h-0 flex flex-col gap-1.5">
          <div className="flex-1 min-h-0 flex gap-3">
            <div className="flex flex-col gap-3 w-[40%]">
              {project.pipelineStages && (
                <PipelineDiagram
                  stages={project.pipelineStages}
                  accent={PALETTE_ACCENT[palette]}
                  className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
                />
              )}
              {project.workflowSteps && (
                <WorkflowSteps
                  steps={project.workflowSteps}
                  accent={PALETTE_ACCENT[palette]}
                  className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] flex-1"
                />
              )}
            </div>
            {(() => {
              const Mockup = PREVIEW_MOCKUPS[project.id];
              return Mockup ? (
                <Mockup className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] w-[60%]" />
              ) : null;
            })()}
          </div>
          <span className="text-[#D7E2EA]/30 text-[8px] uppercase tracking-widest text-center">
            Illustrative UI recreation, not an actual screenshot
          </span>
        </div>
      </motion.div>
    </div>
  );
}
