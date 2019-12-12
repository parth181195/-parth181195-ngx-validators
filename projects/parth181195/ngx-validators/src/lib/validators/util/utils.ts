export function exists(map: any): boolean {
  return map !== undefined && map !== null;
}


export function parseDate(date: any): string {
  try {
    if (typeof date === 'object' && date.year != null && date.month != null && date.day != null) {
      const month = +date.month;
      const day = +date.day;
      return `${date.year}-${addPrecedingZero(month)}-${addPrecedingZero(day)}`;
    }
  } catch (e) { }
  return date;
}

function addPrecedingZero(val: number): string | number {
  return val < 10 ? `0${val}` : val;
}

export function isDate(obj: any): boolean {
  try {
    const date = new Date(obj);
    return !isNaN(date.getTime());
  } catch (e) {
    return false;
  }
}
