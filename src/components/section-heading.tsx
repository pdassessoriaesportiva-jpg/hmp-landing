type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <p className="text-sm font-bold uppercase tracking-normal text-gold">
        {eyebrow}
      </p>
      <h2 className="text-balance mt-4 font-display text-4xl font-bold leading-[1.05] text-ivory md:text-6xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-6 text-base leading-8 text-stonewarm md:text-lg md:leading-9">
          {children}
        </p>
      ) : null}
    </div>
  );
}
