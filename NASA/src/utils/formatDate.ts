export const formatDate = (date: Date): string => {
  const dateString = date.toISOString();
  const formattedDate = dateString.split("T")[0];
  return formattedDate;
};
