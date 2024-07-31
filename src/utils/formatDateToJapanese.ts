export const formatDateToJapanese = (dateString: string) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(process.env.NEXT_PUBLIC_LOCALE || "ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
};
