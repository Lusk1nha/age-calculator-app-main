import { FormProvider, useForm } from "react-hook-form";
import { Calculus } from "./components/Calculus";
import { Divisor } from "./components/Divisor";
import { Input } from "./components/Input";

import z from "zod";
import { useState } from "react";
import { getDiffDate } from "./shared/helpers/date-helper";

import { zodResolver } from "@hookform/resolvers/zod";

const schemaValidation = z.object({
  day: z
    .number({ message: "Cannot be empty" })
    .int()
    .min(1, "Must be a valid day")
    .max(31, "Must be a valid day"),
  month: z
    .number({ message: "Cannot be empty" })
    .int("Cannot be a null")
    .min(1, "Must be a valid month")
    .max(12, "Must be a valid month"),
  year: z
    .number({ message: "Cannot be empty" })
    .int()
    .min(0, "Cannot be less than 0")
    .max(new Date().getFullYear(), "Must be in the past"),
});

type FormSchema = z.infer<typeof schemaValidation>;

function App() {
  const [response, setResponse] = useState<
    [number | null, number | null, number | null]
  >([null, null, null]);

  const formInstance = useForm<FormSchema>({
    mode: "onChange",
    resolver: zodResolver(schemaValidation),
  });

  const { handleSubmit } = formInstance;

  const [days, months, years] = response;

  function onSubmit(data: FormSchema) {
    const { day, month, year } = data;

    const [days, months, years] = getDiffDate([day, month, year]);

    setResponse([days, months, years]);
  }

  return (
    <FormProvider {...formInstance}>
      <div className="bg-appColor w-full h-screen flex md:items-center justify-center pt-[5.5rem] px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full h-fit max-w-[840px] py-12 px-6 md:p-[56px] rounded-3xl rounded-br-[100px] md:rounded-br-[200px] flex flex-col gap-8 shadow-sm transition"
        >
          <div className="flex gap-4 md:gap-8 flex-wrap">
            <Input name="day" label="Day" placeholder="DD" />
            <Input name="month" label="Month" placeholder="MM" />
            <Input name="year" label="Year" placeholder="YYYY" />
          </div>

          <Divisor />

          <Calculus days={days} months={months} years={years} />
        </form>
      </div>
    </FormProvider>
  );
}

export default App;
