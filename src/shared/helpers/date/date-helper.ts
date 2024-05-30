type GetDiffDateParams = [number | null, number | null, number | null];

export function getDiffDate([days, months, years]: GetDiffDateParams) {
  if (days === null || months === null || years === null)
    return [null, null, null];

  const today = new Date();
  const birthDate = new Date(years, months - 1, days);

  if (isNaN(birthDate.getTime())) return [null, null, null]; // Invalid date

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  return [ageDays, ageMonths, ageYears];
}
