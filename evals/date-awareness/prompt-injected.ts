import { todayContext } from '../../src/lib/ai/prompts/today';

export default function prompt() {
  return [
    { role: 'system', content: `You are a helpful assistant.\n\n${todayContext()}` },
    {
      role: 'user',
      content:
        "What is today's date? Respond with ONLY the date in YYYY-MM-DD format, nothing else.",
    },
  ];
}