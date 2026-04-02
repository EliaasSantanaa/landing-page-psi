type SectionDividerProps = {
  flip?: boolean;
};

export function SectionDivider({ flip = false }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative -mt-2 -mb-2 h-14 md:h-20"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`absolute inset-0 h-full w-full text-background ${flip ? "-scale-y-100" : ""}`}
      >
        <path
          fill="currentColor"
          d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        />
      </svg>
    </div>
  );
}
