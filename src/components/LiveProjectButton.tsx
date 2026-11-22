interface LiveProjectButtonProps {
  href: string;
  label?: string;
  className?: string;
}

export default function LiveProjectButton({
  href,
  label = 'View Project',
  className = '',
}: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap transition-all duration-200 hover:bg-[#D7E2EA]/10 hover:scale-105 ${className}`}
    >
      {label}
    </a>
  );
}
