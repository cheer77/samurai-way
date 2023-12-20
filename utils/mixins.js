const maxWidth = 1440;
const phoneWidth = 768;
const maxWidthContainer = 1400;
const phoneWidthFontSize = 390;

function stripUnit(value) {
  return parseFloat(value);
}

export function ac(startSize, minSize, minBreakPoint = phoneWidth, startBreakPoint = maxWidth, flag = false) {
  const startValue = stripUnit(startSize);
  const minValue = stripUnit(minSize);
  const difference = startValue - minValue;

  const generalCalc = `calc(${minValue}px + ${difference} * ((100vw - ${minBreakPoint}px) / ${
    flag ? maxWidthContainer - minBreakPoint : startBreakPoint - minBreakPoint
  }))`;

  if (startValue > minValue) {
    return `clamp(${minValue}px, ${generalCalc}, ${startValue}px)`;
  } else {
    return `clamp(${startValue}px, ${generalCalc}, ${minValue}px)`;
  }
}

export function perc(value, base = maxWidth) {
  // Если значение уже имеет единицы измерения (px, rem, em, % и т.д.), то используем его напрямую.
  if (typeof value === 'string') {
    return `${(parseFloat(value) / base) * 100}%`;
  }

  // В противном случае добавляем 'px' к числу перед преобразованием.
  return `${(value / base) * 100}%`;
}
