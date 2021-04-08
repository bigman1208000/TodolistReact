function TimeCalculator({ createdAt }) {
  let createdDate = new Date(createdAt);
  let nowDate = new Date();

  let milisecond = nowDate - createdDate;
  let second = milisecond / 1000;
  let minute = second / 60;
  let hour = minute / 60;
  let day = hour / 24;

  if (
    Math.floor(minute) === 0 &&
    Math.floor(hour) === 0 &&
    Math.floor(day) === 0
  ) {
    return Math.round(second) < 2
      ? `${Math.round(second)} second ago`
      : `${Math.round(second)} seconds ago`;
  } else if (Math.floor(day) === 0 && Math.floor(hour) === 0) {
    return Math.round(minute) < 2
      ? `${Math.round(minute)} minute ago`
      : `${Math.round(minute)} minutes ago`;
  } else if (Math.floor(day) === 0) {
    return Math.round(hour) < 2
      ? `${Math.round(hour)} hour ago`
      : `${Math.round(hour)} hours ago`;
  } else {
    if (Math.round(day) < 7) {
      return Math.round(day) < 2
        ? `${Math.round(day)} day ago`
        : `${Math.round(day)} days ago`;
    } else {
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      const dayName = days[createdDate.getDay()];
      const date = createdDate.getDate();
      const monthName = months[createdDate.getMonth()];
      const createdYear =
        createdDate.getFullYear() === nowDate.getFullYear()
          ? ''
          : createdDate.getFullYear();
      const createdTime = createdDate.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });

      return `${createdTime} · ${dayName}, ${date} ${monthName} ${createdYear}`;
    }
  }
}

export default TimeCalculator;
