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
  outputHour(timestamp: number | undefined) {
    if (timestamp === undefined) return;
    const date = new Date(timestamp * 1000);
    return date.getHours();
  },
  outputSimpleDate(timestamp: number | undefined) {
    if (timestamp === undefined) return;
    const date = new Date(timestamp * 1000);
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    const simpleDate = `${date.getMonth() + 1}.${date.getDate()}`;
    const day = week[date.getDay()];
    return { simpleDate, day };
  },
};
