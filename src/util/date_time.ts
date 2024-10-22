export const getCurrentTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); // '09:37' 형식
};

export const getCurrentDate = (): string => {
  const now = new Date();
  return now
    .toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    })
    .replace(/(\S+)(\s+)(\S+)/g, '$1 $3')
    .replace(/(\S+)(\s+)(\S+)/g, '$1 $3');
};
