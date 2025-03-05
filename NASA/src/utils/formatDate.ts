export const formatDate = (date: Date) => {
  const dateString = date.toISOString();
  const formattedDate = dateString.split("T")[0];
  return formattedDate;
};
