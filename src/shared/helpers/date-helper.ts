type GetDiffDateParams = [number | null, number | null, number | null];

export function getDiffDate([days, months, years]: GetDiffDateParams) {
  if (!days || !months || !years) return [null, null, null];

  const today = new Date();
  const birthDate = new Date(years, months - 1, days);

  const utcDate = new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  );

  const diff = utcDate.getTime() - birthDate.getTime();
  const ageDate = new Date(diff);

  return [
    Math.abs(ageDate.getUTCDate() - 1),
    Math.abs(ageDate.getUTCMonth()),
    Math.abs(ageDate.getUTCFullYear() - 1970),
  ];
}
