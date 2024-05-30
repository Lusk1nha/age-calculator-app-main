interface ICalculusProps {
  days: number | null;
  months: number | null;
  years: number | null;
}

function Calculus(props: ICalculusProps) {
  const { days, months, years } = props;

  return (
    <div className="flex flex-col">
      <ResponseText value={years} text="years" />
      <ResponseText value={months} text="months" />
      <ResponseText value={days} text="days" />
    </div>
  );
}

interface IResponseTextProps {
  value: number | null;
  text: string;
}

function ResponseText(props: IResponseTextProps) {
  const { value, text } = props;

  const displayValue =
    value !== null ? value.toString().padStart(2, "0") : "- -";
  const ariaLabel = `${displayValue} ${text}`;

  return (
    <h1
      title={ariaLabel}
      className="flex gap-2 font-extrabold italic -tracking-[0.02em] text-[56px] md:text-[104px] leading-tight"
    >
      <b className="text-highlightColor" aria-label={displayValue}>
        {displayValue}
      </b>{" "}
      {text}
    </h1>
  );
}

export { Calculus };
