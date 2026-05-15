/** MKD display: thousands with dot separator (e.g. 1.234 MKD). */
export function formatMkd(amount: number): string {
  const formatted = new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${formatted} MKD`;
}
