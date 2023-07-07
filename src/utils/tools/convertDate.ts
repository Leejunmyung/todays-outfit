export const convertDate = {
  formatDate(timestamp: number | undefined) {
    if (timestamp === undefined) return;
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      hour12: false,
      minute: '2-digit',
    };
    return date.toLocaleDateString('ko-KR', options);
  },
};
