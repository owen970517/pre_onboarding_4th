export const convertTimeFormat = (nowTime: string) => {
    const [part, hour, minute, second] = nowTime.split(/[:\s]/);
    let convertedHour = parseInt(hour);

    if (part === '오후' && convertedHour !== 12) {
        convertedHour += 12;
    } else if (part === '오전' && convertedHour === 12) {
        convertedHour = 0;
    }

    return `${convertedHour.toString().padStart(2, '0')}:${minute}:${second}`;
};
