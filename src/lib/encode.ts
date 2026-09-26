/** ASCII → space-separated binary. Used for the footer signature. */
export const toBin = (text: string): string =>
  [...text].map((c) => c.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');

/** ASCII → space-separated hex. A third of binary's characters. */
export const toHex = (text: string): string =>
  [...text].map((c) => c.charCodeAt(0).toString(16).padStart(2, '0')).join(' ');
