export const getDayIndexFromDate = (dateString) => {
  const [day, month, year] = dateString?.split(".");

  const date = new Date(`${year}-${month}-${day}`);

  const dayIndex = date.getDay();

  console.log((dayIndex + 6) % 7);
  return (dayIndex + 6) % 7;
};
