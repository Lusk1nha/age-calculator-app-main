interface IInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

function Input(props: IInputProps) {
  const { name, label, placeholder } = props;

  return (
    <fieldset className="flex flex-col" field-name={name}>
      <label className="text-label text-xs font-bold uppercase">{label}</label>
      <input type="number" placeholder={placeholder} />
      {/* <p>Must be a valid day</p> */}
    </fieldset>
  );
}

export { Input };
