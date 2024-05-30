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

function ResponseText(props: { value: number | null; text: string }) {
  const { value, text } = props;

  const aria = `${value} ${text}`;
  const asString = (value ?? "- -")?.toString();

  return (
    <h1
      title={aria}
      className="flex gap-2 font-extrabold italic -tracking-[0.02em] text-[56px] md:text-[104px] leading-tight"
    >
      <b className="text-highlightColor" aria-label={asString}>
        {value ?? "- -"}
      </b>{" "}
      {text}
    </h1>
  );
}

export { Calculus };
