export const getDate = () => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - 19);

  const formatToday = today.toISOString().split("T")[0];
  const formatPastDate = pastDate.toISOString().split("T")[0];

  return { today: formatToday, pastDate: formatPastDate };
};
