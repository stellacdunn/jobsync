type AssertionResult = { pass: boolean; score: number; reason: string };

function localISODate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function assertCorrectDate(output: string): AssertionResult {
  const today = localISODate(new Date());
  const trimmed = output.trim();
  const found = trimmed.match(/\d{4}-\d{2}-\d{2}/);

  if (!found) {
    return { pass: false, score: 0, reason: `No YYYY-MM-DD date in output: "${trimmed}"` };
  }
  if (found[0] !== today) {
    return { pass: false, score: 0, reason: `Model said ${found[0]}, actual today is ${today}` };
  }
  return { pass: true, score: 1, reason: `Correct: ${today}` };
}