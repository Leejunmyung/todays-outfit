export const weatherInfo = {
  fineDustJudge(pm: number | undefined) {
    if (pm === undefined) return;
    switch (true) {
      case pm < 30:
        return '좋음';
      case pm > 30:
        return '보통';
      case pm > 80:
        return '나쁨';
      case pm > 150:
        return '매우나쁨';
      default:
    }
  },
  ultraFineDustJudge(ulpm: number | undefined) {
    if (ulpm === undefined) return;
    switch (true) {
      case ulpm < 15:
        return '좋음';
      case ulpm > 15:
        return '보통';
      case ulpm > 35:
        return '나쁨';
      case ulpm > 75:
        return '매우나쁨';
      default:
    }
  },
};
