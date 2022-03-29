import { DateTime } from './luxon.js';
import { date } from './constElements.js';

const displayDate = () => {
  const now = DateTime.now();
  const yearHourMinSecOption = {
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const monthDayOption = { month: 'long', day: 'numeric' };
  const monthDay = now.setLocale('en-US').toLocaleString(monthDayOption);
  const yearHourMinSec = now.setLocale('en-US').toLocaleString(yearHourMinSecOption);
  date.textContent = `${monthDay}th  ${yearHourMinSec}`;
};

export default displayDate;
