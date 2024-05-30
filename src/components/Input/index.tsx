import classNames from "classnames";
import { Controller, useFormContext } from "react-hook-form";

interface IInputProps {
  name: string;
  label: string;
  placeholder?: string;
}

function Input(props: IInputProps) {
  const { name, label, placeholder } = props;

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onBlur, onChange },
        formState: { errors },
      }) => {
        const error = errors?.[name];

        return (
          <fieldset
            className="max-w-[88px] md:max-w-[160px] w-full flex flex-col gap-1"
            field-name={name}
          >
            <label
              htmlFor={name}
              title={label}
              aria-label={`Label: ${label} for input: ${name}`}
              className={classNames(
                "text-xs md:text-sm font-bold uppercase tracking-[0.25em]",
                error ? "text-dangertext" : "text-label"
              )}
            >
              {label}
            </label>

            <input
              title="Input a number to calculate the difference between two dates"
              name={name}
              aria-label="Input a number to calculate the difference between two dates"
              className={classNames(
                "w-full h-[54px] md:h-[72px] pl-4 pr-2 py-3 text-xl md:text-[32px] text-inputText font-bold border hover:border-inputHoverBorder focus:border-inputHoverBorder caret-inputHoverBorder rounded-lg outline-none transition",
                error ? "border-dangertext" : "border-borderColor"
              )}
              value={value ? String(value)?.padStart(2, "0") : ""}
              type="number"
              placeholder={placeholder}
              onBlur={onBlur}
              onChange={(event) => {
                if (event.target.value === "") {
                  return onChange(null);
                }

                const asNumber = Number(event.target.value);
                onChange(asNumber);
              }}
            />

            {error && (
              <p className="italic text-xs md:text-sm text-dangertext">
                {(error?.message as string) ?? "Unknown error"}
              </p>
            )}
          </fieldset>
        );
      }}
    />
  );
}

export { Input };
