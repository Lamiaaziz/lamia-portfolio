/** Case-study section opening: optional yellow rule, label and heading. A split head sets the intro beside the heading. */
export function CaseHead({
  id,
  eyebrow,
  title,
  intro,
  rule = true,
  split = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  rule?: boolean;
  split?: boolean;
}) {
  const h2 = (
    <h2 id={id} className="lps-h2">
      {title}
    </h2>
  );
  return (
    <header className={`lps-head${split ? " lps-head--split" : ""} lp-reveal`}>
      {rule && <span className="lpw-rule" aria-hidden="true" />}
      <p className="lps-eyebrow">{eyebrow}</p>
      {split ? (
        <div className="lps-head__row">
          {h2}
          {intro && <p className="lps-intro">{intro}</p>}
        </div>
      ) : (
        <>
          {h2}
          {intro && <p className="lps-intro">{intro}</p>}
        </>
      )}
    </header>
  );
}
